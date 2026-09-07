from django.db.models import Count
from django.shortcuts import get_object_or_404
from rest_framework import serializers
from rest_framework.decorators import action
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response
from nadein_board.api import BaseViewSet, user_data
from nadein_board.access import accessible_boards
from nadein_board.models import TaskAutomation, TaskAutomationRun, Task
from .schema import (
    AutomationSchemaError,
    validate_automation_payload,
    automation_catalog,
)
from .engine import execute_automation, conditions_match


class AutomationSerializer(serializers.ModelSerializer):
    created_by = serializers.SerializerMethodField()
    can_manage = serializers.SerializerMethodField()
    runs_count = serializers.IntegerField(read_only=True, default=0)

    class Meta:
        model = TaskAutomation
        fields = [
            "id",
            "name",
            "description",
            "kind",
            "trigger",
            "conditions",
            "actions",
            "schedule_config",
            "applies_to_all_boards",
            "boards",
            "is_active",
            "stop_on_error",
            "position",
            "created_by",
            "last_run_at",
            "runs_count",
            "can_manage",
            "created_at",
            "updated_at",
        ]
        read_only_fields = ["created_by", "last_run_at", "created_at", "updated_at"]

    def get_created_by(self, obj):
        return user_data(obj.created_by)

    def get_can_manage(self, obj):
        return obj.created_by_id == self.context["request"].user.pk

    def validate(self, attrs):
        value = lambda key, default: attrs.get(
            key, getattr(self.instance, key, default)
        )
        try:
            attrs.update(
                validate_automation_payload(
                    kind=value("kind", "event"),
                    trigger=value("trigger", "task_updated"),
                    conditions=value("conditions", {}),
                    actions=value("actions", []),
                    schedule_config=value("schedule_config", {}),
                )
            )
        except (AutomationSchemaError, ValueError, TypeError) as error:
            raise ValidationError(str(error))
        user = self.context["request"].user
        boards = attrs.get(
            "boards", list(self.instance.boards.all()) if self.instance else []
        )
        allowed = accessible_boards(user).filter(is_archived=False)
        if not user.is_superuser:
            allowed = allowed.filter(created_by=user)
        if any(not allowed.filter(pk=b.pk).exists() for b in boards):
            raise ValidationError("Rules can only manage boards you own.")
        if not value("applies_to_all_boards", True) and not boards:
            raise ValidationError("Choose at least one board.")
        if value("applies_to_all_boards", True):
            attrs["boards"] = []
        return attrs


class RunSerializer(serializers.ModelSerializer):
    automation_name = serializers.CharField(source="automation.name", read_only=True)
    task_title = serializers.CharField(source="task.title", read_only=True)

    class Meta:
        model = TaskAutomationRun
        fields = [
            "id",
            "automation",
            "automation_name",
            "task",
            "task_title",
            "source",
            "status",
            "actions_log",
            "error",
            "started_at",
            "finished_at",
        ]


class AutomationViewSet(BaseViewSet):
    serializer_class = AutomationSerializer

    def get_queryset(self):
        return (
            TaskAutomation.objects.filter(created_by=self.request.user)
            .annotate(runs_count=Count("runs"))
            .order_by("position", "id")
        )

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

    @action(detail=False)
    def catalog(self, request):
        return Response(automation_catalog())

    @action(detail=False)
    def buttons(self, request):
        task = get_object_or_404(
            Task,
            pk=request.query_params.get("task"),
            board__in=accessible_boards(request.user),
        )
        rules = TaskAutomation.objects.filter(kind="button", is_active=True)
        return Response(
            [
                {"id": r.pk, "name": r.name, "description": r.description}
                for r in rules
                if not task.is_archived
                and r.applies_to_board(task.board_id)
                and conditions_match(task, r.conditions)
            ]
        )

    @action(detail=True, methods=["post"])
    def run(self, request, pk=None):
        task = get_object_or_404(
            Task,
            pk=request.data.get("task"),
            board__in=accessible_boards(request.user),
            is_archived=False,
        )
        rule = get_object_or_404(TaskAutomation, pk=pk, kind="button", is_active=True)
        if not rule.applies_to_board(task.board_id) or not conditions_match(
            task, rule.conditions
        ):
            raise ValidationError("This action is unavailable for the card.")
        result = execute_automation(rule, task, source="manual", actor=request.user)
        return Response(RunSerializer(result).data)

    @action(detail=True)
    def runs(self, request, pk=None):
        rule = self.get_object()
        return Response(
            RunSerializer(
                rule.runs.filter(
                    task__board__in=accessible_boards(request.user)
                ).select_related("task", "automation")[:100],
                many=True,
            ).data
        )
