from django.contrib.auth import get_user_model
from django.db import transaction
from django.db.models import Max, Q
from django.http import FileResponse
from django.shortcuts import get_object_or_404
from django.urls import reverse
from django.utils import timezone
from rest_framework import serializers, viewsets
from rest_framework.decorators import action
from rest_framework.exceptions import PermissionDenied, ValidationError
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .access import accessible_boards
from .events import record
from .automation.engine import _task_snapshot
from .models import (
    TaskBoard,
    TaskColumn,
    TaskColumnRow,
    TaskLabel,
    Task,
    TaskChecklistItem,
    TaskComment,
    TaskAttachment,
    TaskCover,
    TaskExternalLink,
    BoardGroup,
    BoardPreference,
)


def user_data(user):
    return {
        "id": user.pk,
        "name": user.get_full_name() or user.get_username(),
        "is_active": user.is_active,
    }


def require_owner(user, board):
    if board.created_by_id != user.pk and not user.is_superuser:
        raise PermissionDenied(
            "Only the board owner can change its structure or membership."
        )


class BoardSerializer(serializers.ModelSerializer):
    is_pinned = serializers.SerializerMethodField()
    can_manage = serializers.SerializerMethodField()

    def get_is_pinned(self, obj):
        return BoardPreference.objects.filter(
            board=obj, user=self.context["request"].user, is_pinned=True
        ).exists()

    def get_can_manage(self, obj):
        user = self.context["request"].user
        return user.is_superuser or obj.created_by_id == user.pk

    avatar = serializers.SerializerMethodField()

    def get_avatar(self, obj):
        return (
            reverse("nadein_board:board-avatar", args=[obj.pk]) if obj.avatar else None
        )

    class Meta:
        model = TaskBoard
        fields = [
            "id",
            "avatar",
            "is_pinned",
            "can_manage",
            "updated_at",
            "name",
            "description",
            "created_by",
            "members",
            "access_scope",
            "is_archived",
            "created_at",
        ]
        read_only_fields = ["created_by"]

    def validate_members(self, users):
        if any(not u.is_active for u in users):
            raise serializers.ValidationError("Members must be active users.")
        return users


class ColumnSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskColumn
        fields = [
            "id",
            "board",
            "parent",
            "name",
            "position",
            "color",
            "is_done",
            "is_archived",
        ]
        validators = []

    def validate(self, data):
        board = data.get("board", getattr(self.instance, "board", None))
        if (
            not accessible_boards(self.context["request"].user)
            .filter(pk=board.pk)
            .exists()
        ):
            raise serializers.ValidationError("Board is not accessible.")
        if (
            self.instance
            and self.instance.is_archived
            and data.get("is_archived", True)
        ):
            raise serializers.ValidationError("Restore the card before editing.")
        if self.instance and board.pk != self.instance.board_id:
            raise serializers.ValidationError("Columns cannot change boards.")
        parent = data.get("parent", getattr(self.instance, "parent", None))
        if parent and (
            parent.board_id != board.pk or parent.parent_id or parent == self.instance
        ):
            raise serializers.ValidationError(
                "Parent must be a top-level column on this board."
            )
        if parent and self.instance and self.instance.subcolumns.exists():
            raise serializers.ValidationError(
                "A column with children cannot become a subcolumn."
            )
        name = data.get("name", getattr(self.instance, "name", ""))
        peers = TaskColumn.objects.filter(board=board, parent=parent).exclude(
            pk=getattr(self.instance, "pk", None)
        )
        if peers.filter(name=name).exists():
            raise serializers.ValidationError("Column name already exists here.")
        if (
            not parent
            and data.get("is_done", getattr(self.instance, "is_done", False))
            and peers.filter(is_done=True).exists()
        ):
            raise serializers.ValidationError(
                "Only one top-level done column is allowed."
            )
        return data


class RowSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskColumnRow
        fields = ["id", "column", "name", "position", "color"]
        validators = []

    def validate(self, data):
        column = data.get("column", getattr(self.instance, "column", None))
        if (
            column.parent_id
            or not accessible_boards(self.context["request"].user)
            .filter(pk=column.board_id)
            .exists()
        ):
            raise serializers.ValidationError(
                "Rows belong to an accessible top-level column."
            )
        if self.instance and self.instance.column_id != column.pk:
            raise serializers.ValidationError("Rows cannot change columns.")
        if (
            TaskColumnRow.objects.filter(
                column=column, name=data.get("name", getattr(self.instance, "name", ""))
            )
            .exclude(pk=getattr(self.instance, "pk", None))
            .exists()
        ):
            raise serializers.ValidationError("Row name already exists.")
        return data


class LabelSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskLabel
        fields = ["id", "board", "name", "color"]
        validators = []

    def validate(self, data):
        board = data.get("board", getattr(self.instance, "board", None))
        if (
            not accessible_boards(self.context["request"].user)
            .filter(pk=board.pk)
            .exists()
        ):
            raise serializers.ValidationError("Board is not accessible.")
        if self.instance and self.instance.board_id != board.pk:
            raise serializers.ValidationError("Labels cannot change boards.")
        if (
            TaskLabel.objects.filter(
                board=board,
                name__iexact=data.get("name", getattr(self.instance, "name", "")),
            )
            .exclude(pk=getattr(self.instance, "pk", None))
            .exists()
        ):
            raise serializers.ValidationError("Label already exists.")
        color = data.get("color", "#38bdf8")
        import re

        if not re.fullmatch(r"#[0-9a-fA-F]{6}", color):
            raise serializers.ValidationError("Use a six-digit hex color.")
        return data


class TaskSerializer(serializers.ModelSerializer):
    participants = serializers.SerializerMethodField()
    participant_ids = serializers.PrimaryKeyRelatedField(
        source="participants",
        queryset=get_user_model().objects.filter(is_active=True),
        many=True,
        write_only=True,
        required=False,
    )

    def get_participants(self, obj):
        return [user_data(u) for u in obj.participants.all()]

    cover = serializers.SerializerMethodField()

    def get_cover(self, obj):
        cover = getattr(obj, "cover", None)
        if cover is None:
            return None
        result = {"id": cover.pk, "kind": cover.kind}
        if cover.kind == "attachment" and cover.attachment:
            a = cover.attachment
            result["attachment"] = {
                "id": a.pk,
                "file_name": a.file_name,
                "mime_type": a.mime_type,
                "download_url": reverse(
                    "nadein_board:task-download", args=[obj.pk, a.pk]
                ),
            }
        if cover.kind == "checklist":
            items = list(obj.checklist_items.all())
            result["checklist"] = {
                "total": len(items),
                "completed": sum(x.is_completed for x in items),
                "items": [
                    {"id": x.pk, "title": x.title, "is_completed": x.is_completed}
                    for x in items[:5]
                ],
            }
        if cover.kind == "comment" and cover.comment:
            c = cover.comment
            result["comment"] = {
                "id": c.pk,
                "author": user_data(c.author),
                "text": c.text,
                "attachments": [],
            }
        if cover.kind == "external_link" and cover.external_link:
            result["external_link"] = {
                "id": cover.external_link_id,
                "title": cover.external_link.title,
                "url": cover.external_link.url,
            }
        return result

    assignee = serializers.SerializerMethodField()
    assignee_id = serializers.PrimaryKeyRelatedField(
        source="assignee",
        queryset=get_user_model().objects.filter(is_active=True),
        allow_null=True,
        required=False,
        write_only=True,
    )
    labels = LabelSerializer(many=True, read_only=True)
    label_ids = serializers.PrimaryKeyRelatedField(
        source="labels",
        queryset=TaskLabel.objects.all(),
        many=True,
        required=False,
        write_only=True,
    )
    checklist_total = serializers.SerializerMethodField()
    checklist_completed = serializers.SerializerMethodField()
    comments_count = serializers.SerializerMethodField()
    attachments_count = serializers.SerializerMethodField()

    class Meta:
        model = Task
        fields = [
            "id",
            "cover",
            "is_archived",
            "participants",
            "participant_ids",
            "board",
            "column",
            "row",
            "title",
            "description",
            "assignee",
            "assignee_id",
            "labels",
            "label_ids",
            "priority",
            "due_date",
            "position",
            "completed_at",
            "created_at",
            "updated_at",
            "checklist_total",
            "checklist_completed",
            "comments_count",
            "attachments_count",
        ]
        read_only_fields = ["completed_at", "created_at", "updated_at"]

    def get_assignee(self, obj):
        return user_data(obj.assignee) if obj.assignee else None

    def get_checklist_total(self, obj):
        return obj.checklist_items.count()

    def get_checklist_completed(self, obj):
        return sum(x.is_completed for x in obj.checklist_items.all())

    def get_comments_count(self, obj):
        return obj.comments.count()

    def get_attachments_count(self, obj):
        return obj.attachments.count()

    def validate(self, data):
        board = data.get("board", getattr(self.instance, "board", None))
        column = data.get("column", getattr(self.instance, "column", None))
        row = data.get("row", getattr(self.instance, "row", None))
        if (
            not accessible_boards(self.context["request"].user)
            .filter(pk=board.pk, is_archived=False)
            .exists()
        ):
            raise serializers.ValidationError("Board is inaccessible or archived.")
        if (
            self.instance
            and self.instance.is_archived
            and data.get("is_archived", True)
        ):
            raise serializers.ValidationError("Restore the card before editing.")
        if self.instance and board.pk != self.instance.board_id:
            raise serializers.ValidationError("Tasks cannot change boards.")
        if (
            column.board_id != board.pk
            or column.is_archived
            or column.subcolumns.filter(is_archived=False).exists()
        ):
            raise serializers.ValidationError(
                "Choose an active leaf column on this board."
            )
        if row and row.column_id != (column.parent_id or column.pk):
            raise serializers.ValidationError(
                "Row does not belong to the destination column."
            )
        if any(label.board_id != board.pk for label in data.get("labels", [])):
            raise serializers.ValidationError("Labels must belong to the board.")
        for participant in data.get("participants", []):
            if not accessible_boards(participant).filter(pk=board.pk).exists():
                raise serializers.ValidationError(
                    "Participant must have access to the board."
                )
        assignee = data.get("assignee")
        if assignee and not accessible_boards(assignee).filter(pk=board.pk).exists():
            raise serializers.ValidationError("Assignee must have access to the board.")
        return data


class BaseViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    pagination_class = None


class BoardViewSet(BaseViewSet):
    serializer_class = BoardSerializer

    def get_queryset(self):
        return accessible_boards(self.request.user)

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

    def perform_update(self, serializer):
        require_owner(self.request.user, self.get_object())
        serializer.save()

    def perform_destroy(self, obj):
        require_owner(self.request.user, obj)
        obj.tasks.all().delete()
        obj.delete()

    @action(detail=True, methods=["get", "post", "delete"])
    def avatar(self, request, pk=None):
        board = self.get_object()
        if request.method == "GET":
            if not board.avatar:
                raise ValidationError("No avatar.")
            return FileResponse(board.avatar.open("rb"), content_type="image/jpeg")
        require_owner(request.user, board)
        if request.method == "DELETE":
            board.avatar.delete(save=True)
        else:
            import io
            from PIL import Image, ImageOps, UnidentifiedImageError
            from django.core.files.base import ContentFile

            upload = request.FILES.get("file")
            if not upload or upload.size > 5 * 1024 * 1024:
                raise ValidationError("Choose an image up to 5 MiB.")
            try:
                image = Image.open(upload)
                if image.width * image.height > 20000000:
                    raise ValidationError("Image dimensions are too large.")
                image = ImageOps.exif_transpose(image).convert("RGB")
                image.thumbnail((512, 512))
                output = io.BytesIO()
                image.save(output, format="JPEG", quality=90)
            except (UnidentifiedImageError, OSError, Image.DecompressionBombError):
                raise ValidationError("Invalid image.")
            if board.avatar:
                board.avatar.delete(save=False)
            board.avatar.save("avatar.jpg", ContentFile(output.getvalue()))
        return Response(self.get_serializer(board).data)

    @action(detail=True, methods=["post"], url_path="reorder-columns")
    def reorder_columns(self, request, pk=None):
        board = self.get_object()
        require_owner(request.user, board)
        ids = request.data.get("ids")
        parent = request.data.get("parent")
        with transaction.atomic():
            columns = list(board.columns.select_for_update().filter(parent_id=parent))
            if (
                not isinstance(ids, list)
                or any(type(i) is not int for i in ids)
                or len(ids) != len(set(ids))
                or set(ids) != {c.pk for c in columns}
            ):
                raise ValidationError("Send each sibling column ID exactly once.")
            positions = {pk: (i + 1) * 1000 for i, pk in enumerate(ids)}
            for column in columns:
                column.position = positions[column.pk]
            TaskColumn.objects.bulk_update(columns, ["position"])
        return Response({"ids": ids})

    @action(detail=False)
    def people(self, request):
        from django.conf import settings
        from django.utils.module_loading import import_string

        users = get_user_model().objects.filter(is_active=True)
        custom = getattr(settings, "NADEIN_BOARD_USER_FILTER", None)
        if custom:
            users = import_string(custom)(request.user, users)
        query = request.query_params.get("q", "").strip()
        # Usernames work with both Django's stock User and custom user models.
        users = users.filter(**{get_user_model().USERNAME_FIELD + "__icontains": query})
        return Response([user_data(u) for u in users[:50]])

    @action(detail=True, methods=["post"])
    def pin(self, request, pk=None):
        board = self.get_object()
        value = request.data.get("is_pinned")
        if type(value) is not bool:
            raise ValidationError("is_pinned must be a boolean.")
        BoardPreference.objects.update_or_create(
            user=request.user, board=board, defaults={"is_pinned": value}
        )
        return Response(self.get_serializer(board).data)

    @action(detail=True, methods=["post"], url_path="reorder-rows")
    def reorder_rows(self, request, pk=None):
        board = self.get_object()
        require_owner(request.user, board)
        column = get_object_or_404(
            board.columns, pk=request.data.get("column"), parent=None
        )
        with transaction.atomic():
            rows = list(column.rows.select_for_update())
            ids = request.data.get("ids")
            if (
                not isinstance(ids, list)
                or any(type(i) is not int for i in ids)
                or len(ids) != len(set(ids))
                or set(ids) != {r.pk for r in rows}
            ):
                raise ValidationError("Send all row IDs exactly once.")
            for i, pk in enumerate(ids):
                column.rows.filter(pk=pk).update(position=(i + 1) * 1000)
        return Response({"ids": ids})

    @action(detail=True)
    def state(self, request, pk=None):
        board = self.get_object()
        tasks = board.tasks.select_related("assignee").prefetch_related(
            "labels",
            "participants",
            "checklist_items",
            "comments",
            "attachments",
            "cover__attachment",
            "cover__comment__author",
            "cover__external_link",
        )
        users = get_user_model().objects.filter(is_active=True)
        if board.access_scope != "all":
            users = users.filter(
                Q(pk=board.created_by_id) | Q(nb_task_boards=board)
            ).distinct()
        return Response(
            {
                "board": self.get_serializer(board).data,
                "columns": ColumnSerializer(board.columns.all(), many=True).data,
                "rows": RowSerializer(
                    TaskColumnRow.objects.filter(column__board=board), many=True
                ).data,
                "tasks": TaskSerializer(
                    tasks, many=True, context={"request": request}
                ).data,
                "labels": LabelSerializer(board.labels.all(), many=True).data,
                "users": [
                    user_data(u)
                    for u in users
                    if accessible_boards(u).filter(pk=board.pk).exists()
                ],
                "me": user_data(request.user),
                "can_manage": board.created_by_id == request.user.pk
                or request.user.is_superuser,
            }
        )


class StructureViewSet(BaseViewSet):
    def require_editable(self, board):
        require_owner(self.request.user, board)
        if board.is_archived:
            raise ValidationError("Restore the board before editing its structure.")

    def perform_create(self, serializer):
        board = (
            serializer.validated_data.get("board")
            or serializer.validated_data["column"].board
        )
        self.require_editable(board)
        serializer.save()

    def perform_update(self, serializer):
        obj = self.get_object()
        self.require_editable(obj.board if hasattr(obj, "board") else obj.column.board)
        serializer.save()

    def perform_destroy(self, obj):
        self.require_editable(obj.board if hasattr(obj, "board") else obj.column.board)
        obj.delete()


class ColumnViewSet(StructureViewSet):
    serializer_class = ColumnSerializer

    def get_queryset(self):
        return TaskColumn.objects.filter(board__in=accessible_boards(self.request.user))

    def perform_create(self, serializer):
        parent = serializer.validated_data.get("parent")
        if parent and parent.tasks.exists():
            raise ValidationError(
                "Move tasks out of this column before adding subcolumns."
            )
        super().perform_create(serializer)

    def perform_update(self, serializer):
        with transaction.atomic():
            super().perform_update(serializer)
            for task in Task.objects.filter(
                Q(column=serializer.instance) | Q(column__parent=serializer.instance)
            ):
                task.save()

    def perform_destroy(self, obj):
        if Task.objects.filter(Q(column=obj) | Q(column__parent=obj)).exists():
            raise ValidationError(
                "Move or delete the tasks before deleting this column."
            )
        super().perform_destroy(obj)


class RowViewSet(StructureViewSet):
    serializer_class = RowSerializer

    def get_queryset(self):
        return TaskColumnRow.objects.filter(
            column__board__in=accessible_boards(self.request.user)
        )


class LabelViewSet(StructureViewSet):
    serializer_class = LabelSerializer

    def get_queryset(self):
        return TaskLabel.objects.filter(board__in=accessible_boards(self.request.user))


class TaskViewSet(BaseViewSet):
    serializer_class = TaskSerializer

    def get_object(self):
        obj = super().get_object()
        if self.request.method not in ["GET", "HEAD", "OPTIONS"]:
            if obj.board.is_archived:
                raise ValidationError("Restore the board before editing.")
            if obj.is_archived and self.action not in ["partial_update", "destroy"]:
                raise ValidationError("Restore the card before editing.")
        return obj

    def get_queryset(self):
        return (
            Task.objects.filter(board__in=accessible_boards(self.request.user))
            .select_related("board", "column", "assignee")
            .prefetch_related(
                "labels",
                "participants",
                "checklist_items",
                "comments",
                "attachments",
                "cover__attachment",
                "cover__comment__author",
                "cover__external_link",
            )
        )

    def perform_create(self, serializer):
        with transaction.atomic():
            column = serializer.validated_data["column"]
            TaskColumn.objects.select_for_update().get(pk=column.pk)
            position = (column.tasks.aggregate(v=Max("position"))["v"] or 0) + 1000
            task = serializer.save(created_by=self.request.user, position=position)
            record(task, self.request.user, "created")

    def perform_update(self, serializer):
        with transaction.atomic():
            task = self.get_object()
            previous = _task_snapshot(task)
            old_column, old_row = task.column_id, task.row_id
            updated = serializer.save()
            current = _task_snapshot(updated)
            record(
                updated,
                self.request.user,
                "updated",
                fields=[k for k in current if previous[k] != current[k]],
                previous=previous,
                current=current,
                archived=updated.is_archived,
            )
            if old_column != updated.column_id or old_row != updated.row_id:
                record(
                    updated,
                    self.request.user,
                    "moved",
                    from_column_id=old_column,
                    to_column_id=updated.column_id,
                )

    @action(detail=True, methods=["post"])
    def move(self, request, pk=None):
        with transaction.atomic():
            task = self.get_queryset().select_for_update().get(pk=self.get_object().pk)
            serializer = self.get_serializer(
                task,
                data={
                    "column": request.data.get("column"),
                    "row": request.data.get("row"),
                },
                partial=True,
            )
            serializer.is_valid(raise_exception=True)
            old_column = task.column_id
            task = serializer.save()
            # Lock the destination to serialize concurrent position changes on PostgreSQL.
            TaskColumn.objects.select_for_update().get(pk=task.column_id)
            siblings = list(
                Task.objects.filter(column=task.column, row=task.row)
                .exclude(pk=task.pk)
                .order_by("position", "id")
            )
            before = request.data.get("before")
            if before is not None and not any(t.pk == before for t in siblings):
                raise ValidationError("The target card is not in this destination.")
            index = next(
                (i for i, t in enumerate(siblings) if t.pk == before), len(siblings)
            )
            siblings.insert(index, task)
            for i, item in enumerate(siblings):
                item.position = (i + 1) * 1000
            Task.objects.bulk_update(siblings, ["position"])
            record(
                task,
                request.user,
                "moved",
                from_column_id=old_column,
                to_column_id=task.column_id,
            )
            task.refresh_from_db()
            return Response(self.get_serializer(task).data)

    @action(detail=True, methods=["put", "delete"])
    def cover(self, request, pk=None):
        task = self.get_object()
        if request.method == "DELETE":
            TaskCover.objects.filter(task=task).delete()
        else:
            kind = request.data.get("kind")
            values = {
                "kind": kind,
                "attachment": None,
                "comment": None,
                "external_link": None,
            }
            if kind == "attachment":
                values["attachment"] = get_object_or_404(
                    task.attachments, pk=request.data.get("id")
                )
            elif kind == "comment":
                values["comment"] = get_object_or_404(
                    task.comments, pk=request.data.get("id")
                )
            elif kind == "external_link":
                values["external_link"] = get_object_or_404(
                    task.external_links, pk=request.data.get("id")
                )
            elif kind == "checklist":
                if not task.checklist_items.exists():
                    raise ValidationError("Add a checklist item first.")
            else:
                raise ValidationError("Unsupported cover type.")
            TaskCover.objects.update_or_create(task=task, defaults=values)
        return Response(self.get_serializer(self.get_queryset().get(pk=task.pk)).data)

    @action(detail=True)
    def history(self, request, pk=None):
        task = self.get_object()
        return Response(
            [
                {
                    "id": a.pk,
                    "action": a.action,
                    "label": a.get_action_display(),
                    "actor": user_data(a.actor) if a.actor else None,
                    "metadata": {
                        k: v for k, v in a.metadata.items() if not k.startswith("_")
                    },
                    "created_at": a.created_at,
                }
                for a in task.activities.select_related("actor")[:200]
            ]
        )

    @action(detail=True, methods=["post"])
    def duplicate(self, request, pk=None):
        source = self.get_object()
        with transaction.atomic():
            task = Task.objects.create(
                board=source.board,
                column=source.column,
                row=source.row,
                title=(source.title + " — копия")[:255],
                description=source.description,
                priority=source.priority,
                due_date=source.due_date,
                assignee=source.assignee,
                created_by=request.user,
                position=(
                    Task.objects.filter(column=source.column).aggregate(
                        v=Max("position")
                    )["v"]
                    or 0
                )
                + 1000,
            )
            task.labels.set(source.labels.all())
            task.participants.set(source.participants.all())
            for item in source.checklist_items.all():
                TaskChecklistItem.objects.create(
                    task=task,
                    title=item.title,
                    position=item.position,
                    created_by=request.user,
                )
            for link in source.external_links.all():
                TaskExternalLink.objects.create(
                    task=task, title=link.title, url=link.url, created_by=request.user
                )
            record(task, request.user, "created", copied_from=source.pk)
        return Response(
            self.get_serializer(self.get_queryset().get(pk=task.pk)).data, status=201
        )

    @action(detail=True, methods=["get", "post", "patch", "delete"])
    def links(self, request, pk=None):
        task = self.get_object()
        if request.method in ["POST", "PATCH"]:
            item = (
                get_object_or_404(task.external_links, pk=request.data.get("id"))
                if request.method == "PATCH"
                else None
            )
            serializer = LinkSerializer(
                item, data=request.data, partial=item is not None
            )
            serializer.is_valid(raise_exception=True)
            url = serializer.validated_data.get("url", getattr(item, "url", ""))
            if (
                task.external_links.filter(url=url)
                .exclude(pk=getattr(item, "pk", None))
                .exists()
            ):
                raise ValidationError("This link is already attached.")
            item = serializer.save(task=task, created_by=request.user)
            record(task, request.user, "linked", title=item.title or item.url)
        elif request.method == "DELETE":
            item = get_object_or_404(task.external_links, pk=request.data.get("id"))
            record(task, request.user, "unlinked", title=item.title or item.url)
            item.delete()
        return Response(LinkSerializer(task.external_links.all(), many=True).data)

    @action(detail=True, methods=["post"], url_path="reorder-checklist")
    def reorder_checklist(self, request, pk=None):
        task = self.get_object()
        with transaction.atomic():
            items = list(task.checklist_items.select_for_update())
            ids = request.data.get("ids")
            if (
                not isinstance(ids, list)
                or any(type(i) is not int for i in ids)
                or len(ids) != len(set(ids))
                or set(ids) != {i.pk for i in items}
            ):
                raise ValidationError("Send all checklist IDs exactly once.")
            for index, pk in enumerate(ids):
                task.checklist_items.filter(pk=pk).update(position=(index + 1) * 1000)
            record(task, request.user, "checklist_item_updated", reordered=True)
        return Response({"ids": ids})

    @action(detail=True, methods=["get", "post", "patch", "delete"])
    def checklist(self, request, pk=None):
        task = self.get_object()
        if request.method == "POST":
            s = ChecklistSerializer(data=request.data)
            s.is_valid(raise_exception=True)
            item = s.save(task=task, created_by=request.user)
            record(task, request.user, "checklist_item_added", title=item.title)
        elif request.method in ["PATCH", "DELETE"]:
            item = get_object_or_404(task.checklist_items, pk=request.data.get("id"))
            if request.method == "DELETE":
                item.delete()
            else:
                s = ChecklistSerializer(item, data=request.data, partial=True)
                s.is_valid(raise_exception=True)
                completed = s.validated_data.get("is_completed", item.is_completed)
                s.save(
                    completed_by=request.user if completed else None,
                    completed_at=timezone.now() if completed else None,
                )
        if request.method in ["PATCH", "DELETE"]:
            record(
                task,
                request.user,
                "checklist_item_removed"
                if request.method == "DELETE"
                else "checklist_item_completed"
                if item.is_completed
                else "checklist_item_updated",
                title=item.title,
            )
        task._prefetched_objects_cache = {}
        return Response(ChecklistSerializer(task.checklist_items.all(), many=True).data)

    @action(detail=True, methods=["get", "post", "patch", "delete"])
    def comments(self, request, pk=None):
        task = self.get_object()
        if request.method == "POST":
            s = CommentSerializer(data=request.data)
            s.is_valid(raise_exception=True)
            s.save(task=task, author=request.user)
            record(task, request.user, "comment_added")
        elif request.method in ["PATCH", "DELETE"]:
            item = get_object_or_404(task.comments, pk=request.data.get("id"))
            if item.author_id != request.user.pk:
                require_owner(request.user, task.board)
            if request.method == "DELETE":
                item.delete()
            else:
                s = CommentSerializer(item, data=request.data, partial=True)
                s.is_valid(raise_exception=True)
                s.save()
            record(
                task,
                request.user,
                "comment_removed" if request.method == "DELETE" else "comment_edited",
            )
        task._prefetched_objects_cache = {}
        return Response(
            CommentSerializer(task.comments.select_related("author"), many=True).data
        )

    @action(detail=True, methods=["get", "post", "delete"])
    def attachments(self, request, pk=None):
        task = self.get_object()
        if request.method == "POST":
            from django.conf import settings

            file = request.FILES.get("file")
            if file is None or file.size > getattr(
                settings, "NADEIN_BOARD_MAX_UPLOAD_BYTES", 10 * 1024 * 1024
            ):
                raise ValidationError("Select a file within the upload size limit.")
            attachment = TaskAttachment.objects.create(
                task=task,
                file=file,
                file_name=file.name[:255],
                file_size=file.size,
                mime_type=file.content_type or "",
                uploaded_by=request.user,
            )
            record(task, request.user, "attachment_added", title=attachment.file_name)
        elif request.method == "DELETE":
            item = get_object_or_404(task.attachments, pk=request.data.get("id"))
            record(task, request.user, "attachment_removed", title=item.file_name)
            item.file.delete(save=False)
            item.delete()
        task._prefetched_objects_cache = {}
        return Response(
            [
                {
                    "id": a.pk,
                    "name": a.file_name,
                    "size": a.file_size,
                    "url": reverse("nadein_board:task-download", args=[task.pk, a.pk]),
                }
                for a in task.attachments.all()
            ]
        )

    @action(detail=True, url_path=r"download/(?P<attachment_id>\d+)")
    def download(self, request, pk=None, attachment_id=None):
        item = get_object_or_404(self.get_object().attachments, pk=attachment_id)
        return FileResponse(
            item.file.open("rb"),
            as_attachment=True,
            filename=item.file_name,
            content_type="application/octet-stream",
        )


class ChecklistSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskChecklistItem
        fields = ["id", "title", "position", "is_completed"]


class CommentSerializer(serializers.ModelSerializer):
    author = serializers.SerializerMethodField()

    class Meta:
        model = TaskComment
        fields = ["id", "text", "author", "created_at"]

    def get_author(self, obj):
        return user_data(obj.author)


class LinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskExternalLink
        fields = ["id", "title", "url", "created_at"]

    def validate_url(self, value):
        if not value.startswith(("https://", "http://")):
            raise serializers.ValidationError("Use an HTTP or HTTPS link.")
        return value


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = BoardGroup
        fields = ["id", "name", "color", "boards", "position"]

    def validate_boards(self, boards):
        visible = set(
            accessible_boards(self.context["request"].user).values_list("id", flat=True)
        )
        if any(b.pk not in visible for b in boards):
            raise serializers.ValidationError("Choose accessible boards.")
        return boards

    def to_representation(self, instance):
        data = super().to_representation(instance)
        visible = set(
            accessible_boards(self.context["request"].user).values_list("id", flat=True)
        )
        data["boards"] = [pk for pk in data["boards"] if pk in visible]
        return data


class GroupViewSet(BaseViewSet):
    serializer_class = GroupSerializer

    def get_queryset(self):
        return BoardGroup.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
