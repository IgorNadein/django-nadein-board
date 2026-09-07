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

    @action(detail=True)
    def state(self, request, pk=None):
        board = self.get_object()
        tasks = board.tasks.select_related("assignee").prefetch_related(
            "labels", "checklist_items", "comments", "attachments"
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
                "tasks": TaskSerializer(tasks, many=True).data,
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
    def perform_create(self, serializer):
        board = (
            serializer.validated_data.get("board")
            or serializer.validated_data["column"].board
        )
        require_owner(self.request.user, board)
        serializer.save()

    def perform_update(self, serializer):
        obj = self.get_object()
        require_owner(
            self.request.user, obj.board if hasattr(obj, "board") else obj.column.board
        )
        serializer.save()

    def perform_destroy(self, obj):
        require_owner(
            self.request.user, obj.board if hasattr(obj, "board") else obj.column.board
        )
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
            for task in serializer.instance.tasks.all():
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

    def get_queryset(self):
        return (
            Task.objects.filter(board__in=accessible_boards(self.request.user))
            .select_related("board", "column", "assignee")
            .prefetch_related("labels", "checklist_items", "comments", "attachments")
        )

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

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
            task.refresh_from_db()
            return Response(self.get_serializer(task).data)

    @action(detail=True, methods=["put", "delete"])
    def cover(self, request, pk=None):
        task = self.get_object()
        if request.method == "DELETE":
            TaskCover.objects.filter(task=task).delete()
        else:
            kind = request.data.get("kind")
            values = {"kind": kind, "attachment": None, "comment": None}
            if kind == "attachment":
                values["attachment"] = get_object_or_404(
                    task.attachments, pk=request.data.get("id")
                )
            elif kind == "comment":
                values["comment"] = get_object_or_404(
                    task.comments, pk=request.data.get("id")
                )
            elif kind == "checklist":
                if not task.checklist_items.exists():
                    raise ValidationError("Add a checklist item first.")
            else:
                raise ValidationError("Unsupported cover type.")
            TaskCover.objects.update_or_create(task=task, defaults=values)
        return Response(self.get_serializer(self.get_queryset().get(pk=task.pk)).data)

    @action(detail=True, methods=["get", "post", "patch", "delete"])
    def checklist(self, request, pk=None):
        task = self.get_object()
        if request.method == "POST":
            s = ChecklistSerializer(data=request.data)
            s.is_valid(raise_exception=True)
            s.save(task=task, created_by=request.user)
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
        task._prefetched_objects_cache = {}
        return Response(ChecklistSerializer(task.checklist_items.all(), many=True).data)

    @action(detail=True, methods=["get", "post", "delete"])
    def comments(self, request, pk=None):
        task = self.get_object()
        if request.method == "POST":
            s = CommentSerializer(data=request.data)
            s.is_valid(raise_exception=True)
            s.save(task=task, author=request.user)
        elif request.method == "DELETE":
            item = get_object_or_404(task.comments, pk=request.data.get("id"))
            if item.author_id != request.user.pk:
                require_owner(request.user, task.board)
            item.delete()
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
            TaskAttachment.objects.create(
                task=task,
                file=file,
                file_name=file.name[:255],
                file_size=file.size,
                mime_type=file.content_type or "",
                uploaded_by=request.user,
            )
        elif request.method == "DELETE":
            item = get_object_or_404(task.attachments, pk=request.data.get("id"))
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
