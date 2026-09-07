from __future__ import annotations
import uuid
from datetime import date, datetime, timedelta
from django.contrib.auth import get_user_model
from django.db import transaction
from django.db.models import Max, Q
from django.utils import timezone
from django.utils.dateparse import parse_date, parse_datetime, parse_time
from nadein_board.access import user_can_access_task_board
from nadein_board.models import (
    Task,
    TaskActivity,
    TaskActivityAction,
    TaskActivityObjectKind,
    TaskAutomation,
    TaskAutomationKind,
    TaskAutomationRun,
    TaskAutomationRunStatus,
    TaskAutomationTrigger,
    TaskChecklistItem,
    TaskColumn,
    TaskComment,
    TaskLabel,
)

User = get_user_model()
MAX_AUTOMATION_CHAIN_DEPTH = 10


def _task_snapshot(task):
    return {
        "title": task.title,
        "description": task.description,
        "assignee_id": task.assignee_id,
        "priority": task.priority,
        "due_date": task.due_date.isoformat() if task.due_date else None,
        "row_id": task.row_id,
        "label_ids": sorted(task.labels.values_list("id", flat=True)),
        "participant_ids": sorted(task.participants.values_list("id", flat=True)),
    }


def _record_activity(
    task, actor, action, *, chain, object_kind="", object_id=None, metadata=None
):
    activity_metadata = dict(metadata or {})
    activity_metadata["_automation_chain"] = chain
    activity = TaskActivity.objects.create(
        task=task,
        actor=actor if getattr(actor, "is_authenticated", False) else None,
        action=action,
        object_kind=object_kind,
        object_id=object_id,
        metadata=activity_metadata,
    )
    return activity


def _field_value(task, field):
    if field == "board_id":
        return task.board_id
    if field == "column_id":
        return task.column_id
    if field == "column_name":
        return task.column.name
    if field == "assignee_id":
        return task.assignee_id
    if field == "creator_id":
        return task.created_by_id
    if field == "participant_ids":
        return list(task.participants.values_list("id", flat=True))
    if field == "label_ids":
        return list(task.labels.values_list("id", flat=True))
    if field == "priority":
        return task.priority
    if field == "due_date":
        return task.due_date
    if field == "completed":
        return bool(task.completed_at or task.column.is_done)
    if field == "title":
        return task.title
    if field == "description":
        return task.description
    if field == "has_attachments":
        return task.attachments.exists()
    if field == "checklist_complete":
        total = task.checklist_items.count()
        return bool(
            total and (not task.checklist_items.filter(is_completed=False).exists())
        )
    return None


def _normalize_comparable(value):
    if isinstance(value, datetime):
        return value.isoformat()
    if isinstance(value, date):
        return value.isoformat()
    return value


def _compare(actual, operator, expected):
    if operator == "is_empty":
        return actual in (None, "", [], (), {})
    if operator == "not_empty":
        return actual not in (None, "", [], (), {})
    if operator in {"is_today", "is_past", "is_future"}:
        actual_date = (
            actual if isinstance(actual, date) else parse_date(str(actual or ""))
        )
        if not actual_date:
            return False
        today = timezone.localdate()
        return {
            "is_today": actual_date == today,
            "is_past": actual_date < today,
            "is_future": actual_date > today,
        }[operator]
    actual = _normalize_comparable(actual)
    expected = _normalize_comparable(expected)
    if operator == "eq":
        return actual == expected
    if operator == "neq":
        return actual != expected
    if operator == "contains":
        if isinstance(actual, (list, tuple, set)):
            return expected in actual
        return str(expected).casefold() in str(actual or "").casefold()
    if operator == "not_contains":
        return not _compare(actual, "contains", expected)
    if operator == "in":
        return actual in (expected if isinstance(expected, list) else [expected])
    if operator == "not_in":
        return not _compare(actual, "in", expected)
    if operator in {"gt", "gte", "lt", "lte"}:
        if actual is None or expected is None:
            return False
        try:
            return {
                "gt": actual > expected,
                "gte": actual >= expected,
                "lt": actual < expected,
                "lte": actual <= expected,
            }[operator]
        except TypeError:
            return False
    return False


def conditions_match(task, node):
    if not node:
        return True
    operator = node.get("operator", "and")
    if "children" in node:
        children = node.get("children") or []
        if operator == "and":
            return all((conditions_match(task, child) for child in children))
        if operator == "or":
            return any((conditions_match(task, child) for child in children))
        if operator == "not":
            return bool(children) and (not conditions_match(task, children[0]))
        return False
    return _compare(_field_value(task, node.get("field")), operator, node.get("value"))


def _resolve_target_column(task, action):
    target = action.get("target", "column")
    columns = TaskColumn.objects.filter(board_id=task.board_id, is_archived=False)
    if target == "first":
        column = columns.filter(parent__isnull=True).order_by("position", "id").first()
    elif target == "final":
        column = columns.filter(parent__isnull=True, is_done=True).first()
    elif target == "column_name":
        column = columns.filter(
            name__iexact=str(action.get("column_name", "")).strip()
        ).first()
    else:
        column = columns.filter(id=action.get("column_id")).first()
    if not column:
        raise ValueError("Целевая колонка не найдена на доске задачи.")
    if column.parent_id is None:
        first_subcolumn = (
            column.subcolumns.filter(is_archived=False)
            .order_by("position", "id")
            .first()
        )
        if first_subcolumn:
            column = first_subcolumn
    return column


def _move_task(task, action, actor, chain):
    old_column = task.column
    old_row = task.row
    column = _resolve_target_column(task, action)
    top_column_id = column.parent_id or column.id
    row = old_row if old_row and old_row.column_id == top_column_id else None
    if old_column.id == column.id and old_row == row:
        return "Задача уже находится в целевой колонке"
    position = (
        Task.objects.filter(column=column, row=row)
        .exclude(id=task.id)
        .aggregate(value=Max("position"))["value"]
        or 0
    ) + 1000
    task.column = column
    task.row = row
    task.position = position
    task.save(update_fields=["column", "row", "position", "completed_at", "updated_at"])
    task.refresh_from_db()
    metadata = {
        "from_column_id": old_column.id,
        "from_column": old_column.name,
        "to_column_id": column.id,
        "to_column": column.name,
        "from_row_id": old_row.id if old_row else None,
        "to_row_id": row.id if row else None,
    }
    _record_activity(
        task, actor, TaskActivityAction.MOVED, chain=chain, metadata=metadata
    )
    return f"Перемещено в «{column.name}»"


def _apply_field_action(task, action, actor, chain):
    previous = _task_snapshot(task)
    action_type = action["type"]
    update_fields = []
    if action_type == "set_assignee":
        user_id = action.get("user_id")
        assignee = None
        if user_id:
            assignee = User.objects.filter(id=user_id, is_active=True).first()
            if not assignee or not user_can_access_task_board(assignee, task.board):
                raise ValueError("Исполнитель не имеет доступа к доске.")
        task.assignee = assignee
        update_fields.append("assignee")
    elif action_type == "set_priority":
        task.priority = action["priority"]
        update_fields.append("priority")
    elif action_type == "set_due_date":
        mode = action.get("mode", "clear")
        if mode == "fixed":
            due_date = parse_date(str(action.get("date", "")))
            if not due_date:
                raise ValueError("Некорректная дата срока.")
            task.due_date = due_date
        elif mode == "relative":
            task.due_date = timezone.localdate() + timedelta(
                days=int(action.get("days", 0))
            )
        else:
            task.due_date = None
        update_fields.append("due_date")
    elif action_type == "add_participant":
        participant = User.objects.filter(
            id=action.get("user_id"), is_active=True
        ).first()
        if not participant or not user_can_access_task_board(participant, task.board):
            raise ValueError("Участник не имеет доступа к доске.")
        task.participants.add(participant)
    elif action_type == "remove_participant":
        user_id = action.get("user_id")
        if user_id not in {task.created_by_id, task.assignee_id}:
            task.participants.remove(user_id)
    elif action_type == "add_label":
        label = TaskLabel.objects.get(pk=action["label_id"], board_id=task.board_id)
        task.labels.add(label)
    elif action_type == "remove_label":
        task.labels.remove(action["label_id"])
    if update_fields:
        task.save(update_fields=[*update_fields, "updated_at"])
    task.refresh_from_db()
    current = _task_snapshot(task)
    changed_fields = [key for key in current if current[key] != previous[key]]
    if changed_fields:
        _record_activity(
            task,
            actor,
            TaskActivityAction.UPDATED,
            chain=chain,
            metadata={
                "fields": changed_fields,
                "previous": previous,
                "current": current,
            },
        )
    return ", ".join(changed_fields) if changed_fields else "Изменений нет"


def _execute_action(task, action, actor, chain, automation):
    action_type = action["type"]
    if action_type in {
        "set_assignee",
        "add_participant",
        "remove_participant",
        "add_label",
        "remove_label",
        "set_priority",
        "set_due_date",
    }:
        return _apply_field_action(task, action, actor, chain)
    if action_type == "move":
        return _move_task(task, action, actor, chain)
    if action_type == "complete":
        return _move_task(task, {"target": "final", "type": "move"}, actor, chain)
    if action_type == "add_comment":
        author = actor or automation.created_by
        message = TaskComment.objects.create(
            task=task, author=author, text=str(action["text"]).strip()
        )
        _record_activity(
            task,
            actor,
            TaskActivityAction.COMMENT_ADDED,
            chain=chain,
            object_kind=TaskActivityObjectKind.COMMENT,
            object_id=message.id,
            metadata={"comment_text": message.text},
        )
        return "Комментарий добавлен"
    if action_type == "add_checklist":
        author = actor or automation.created_by
        existing_max = (
            task.checklist_items.aggregate(value=Max("position"))["value"] or 0
        )
        created = 0
        for index, raw_title in enumerate(action.get("items") or [], start=1):
            title = str(raw_title).strip()
            if not title:
                continue
            item = TaskChecklistItem.objects.create(
                task=task,
                title=title,
                position=existing_max + index * 1000,
                created_by=author,
            )
            _record_activity(
                task,
                actor,
                TaskActivityAction.CHECKLIST_ITEM_ADDED,
                chain=chain,
                object_kind=TaskActivityObjectKind.CHECKLIST_ITEM,
                object_id=item.id,
                metadata={"item_title": item.title},
            )
            created += 1
        return f"Добавлено пунктов: {created}"
    raise ValueError(f"Действие {action_type} не поддерживается.")


def execute_automation(
    automation,
    task,
    *,
    source,
    actor=None,
    trigger_activity=None,
    idempotency_key=None,
    chain=None,
    context=None,
):
    chain = [int(value) for value in chain or [] if str(value).isdigit()]
    if automation.id in chain or len(chain) >= MAX_AUTOMATION_CHAIN_DEPTH:
        return None
    idempotency_key = (
        idempotency_key or f"manual:{automation.id}:{task.id}:{uuid.uuid4()}"
    )
    run, created = TaskAutomationRun.objects.get_or_create(
        idempotency_key=idempotency_key,
        defaults={
            "automation": automation,
            "task": task,
            "trigger_activity": trigger_activity,
            "actor": actor if getattr(actor, "is_authenticated", False) else None,
            "source": source,
            "context": context or {},
        },
    )
    if not created:
        return run
    try:
        with transaction.atomic():
            task = (
                Task.objects.select_for_update()
                .select_related("board", "column", "row", "created_by", "assignee")
                .get(id=task.id)
            )
            if (
                task.is_archived
                or not automation.is_active
                or not automation.applies_to_board(task.board_id)
            ):
                run.status = TaskAutomationRunStatus.SKIPPED
                run.error = "Автоматизация выключена или не применяется к доске."
            elif not conditions_match(task, automation.conditions):
                run.status = TaskAutomationRunStatus.SKIPPED
                run.error = "Условия не выполнены."
            else:
                action_chain = [*chain, automation.id]
                action_log = []
                failures = 0
                for index, action in enumerate(automation.actions):
                    try:
                        with transaction.atomic():
                            result = _execute_action(
                                task, action, actor, action_chain, automation
                            )
                        action_log.append(
                            {
                                "index": index,
                                "type": action.get("type"),
                                "status": "success",
                                "result": result,
                            }
                        )
                    except Exception as error:
                        task.refresh_from_db()
                        failures += 1
                        action_log.append(
                            {
                                "index": index,
                                "type": action.get("type"),
                                "status": "failed",
                                "error": str(error),
                            }
                        )
                        if automation.stop_on_error:
                            break
                run.actions_log = action_log
                run.status = (
                    TaskAutomationRunStatus.FAILED
                    if failures and failures == len(action_log)
                    else TaskAutomationRunStatus.PARTIAL
                    if failures
                    else TaskAutomationRunStatus.SUCCESS
                )
                if failures:
                    run.error = next(
                        (
                            item["error"]
                            for item in action_log
                            if item["status"] == "failed"
                        )
                    )
    except Exception as error:
        run.status = TaskAutomationRunStatus.FAILED
        run.error = str(error)
    run.finished_at = timezone.now()
    run.save(update_fields=["status", "actions_log", "error", "finished_at"])
    TaskAutomation.objects.filter(id=automation.id).update(last_run_at=run.finished_at)
    return run


def activity_triggers(activity):
    triggers = set()
    if activity.action == TaskActivityAction.CREATED:
        triggers.add(TaskAutomationTrigger.TASK_CREATED)
    elif activity.action == TaskActivityAction.UPDATED:
        triggers.add(TaskAutomationTrigger.TASK_UPDATED)
        fields = set(activity.metadata.get("fields") or [])
        trigger_by_field = {
            "assignee_id": TaskAutomationTrigger.ASSIGNEE_CHANGED,
            "due_date": TaskAutomationTrigger.DUE_DATE_CHANGED,
            "priority": TaskAutomationTrigger.PRIORITY_CHANGED,
        }
        triggers.update(
            (trigger_by_field[field] for field in fields if field in trigger_by_field)
        )
        if "label_ids" in fields:
            previous = set(activity.metadata.get("previous", {}).get("label_ids") or [])
            current = set(activity.metadata.get("current", {}).get("label_ids") or [])
            if current - previous:
                triggers.add(TaskAutomationTrigger.LABEL_ADDED)
            if previous - current:
                triggers.add(TaskAutomationTrigger.LABEL_REMOVED)
    elif activity.action == TaskActivityAction.MOVED:
        triggers.add(TaskAutomationTrigger.TASK_MOVED)
    elif activity.action == TaskActivityAction.ATTACHMENT_ADDED:
        triggers.add(TaskAutomationTrigger.ATTACHMENT_ADDED)
    elif activity.action == TaskActivityAction.COMMENT_ADDED:
        triggers.add(TaskAutomationTrigger.COMMENT_ADDED)
    elif activity.action == TaskActivityAction.CHECKLIST_ITEM_COMPLETED:
        triggers.add(TaskAutomationTrigger.CHECKLIST_COMPLETED)
    elif activity.action == TaskActivityAction.LINKED:
        triggers.add(TaskAutomationTrigger.LINKED_OBJECT_ADDED)
    return triggers


def process_activity_automations(activity_id):
    activity = (
        TaskActivity.objects.select_related("task__board", "task__column", "actor")
        .filter(id=activity_id)
        .first()
    )
    if not activity:
        return 0
    triggers = activity_triggers(activity)
    if not triggers:
        return 0
    chain = activity.metadata.get("_automation_chain") or []
    queryset = (
        TaskAutomation.objects.filter(
            kind=TaskAutomationKind.EVENT, trigger__in=triggers, is_active=True
        )
        .filter(Q(applies_to_all_boards=True) | Q(boards=activity.task.board_id))
        .distinct()
    )
    count = 0
    for automation in queryset:
        run = execute_automation(
            automation,
            activity.task,
            source="event",
            actor=activity.actor,
            trigger_activity=activity,
            idempotency_key=f"event:{automation.id}:{activity.id}",
            chain=chain,
            context={"triggers": sorted(triggers)},
        )
        if run:
            count += 1
    return count


def _aware_datetime(value):
    if not value:
        return None
    parsed = parse_datetime(str(value)) if not isinstance(value, datetime) else value
    if not parsed:
        return None
    if timezone.is_naive(parsed):
        return timezone.make_aware(parsed, timezone.get_current_timezone())
    return parsed


def _schedule_run_at(automation, task):
    config = automation.schedule_config or {}
    if config.get("mode", "task_due_date") == "fixed_datetime":
        return _aware_datetime(config.get("at"))
    if not task.due_date:
        return None
    days_before = max(0, int(config.get("days_before", 0)))
    run_time = parse_time(str(config.get("time", "09:00")))
    if not run_time:
        return None
    run_date = task.due_date - timedelta(days=days_before)
    return timezone.make_aware(
        datetime.combine(run_date, run_time), timezone.get_current_timezone()
    )


def dispatch_scheduled_automations(now=None):
    now = now or timezone.now()
    total = 0
    automations = TaskAutomation.objects.filter(
        kind=TaskAutomationKind.SCHEDULE,
        trigger=TaskAutomationTrigger.DATE_REACHED,
        is_active=True,
    ).prefetch_related("boards")
    for automation in automations:
        tasks = Task.objects.filter(
            is_archived=False, board__is_archived=False
        ).select_related("board", "column", "created_by", "assignee")
        if not automation.created_by.is_superuser:
            tasks = tasks.filter(board__created_by_id=automation.created_by_id)
        if not automation.applies_to_all_boards:
            tasks = tasks.filter(board__in=automation.boards.all())
        if (automation.schedule_config or {}).get(
            "mode", "task_due_date"
        ) == "task_due_date":
            tasks = tasks.filter(due_date__isnull=False)
        for task in tasks.iterator():
            run_at = _schedule_run_at(automation, task)
            if not run_at or run_at > now or run_at < automation.created_at:
                continue
            key = f"schedule:{automation.id}:{task.id}:{run_at.isoformat()}"
            if TaskAutomationRun.objects.filter(idempotency_key=key).exists():
                continue
            if execute_automation(
                automation,
                task,
                source="schedule",
                idempotency_key=key,
                context={"scheduled_for": run_at.isoformat()},
            ):
                total += 1
    return total
