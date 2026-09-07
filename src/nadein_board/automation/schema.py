from __future__ import annotations

from datetime import datetime, time

from django.utils.dateparse import parse_datetime, parse_time

from nadein_board.models import TaskAutomationKind, TaskAutomationTrigger, TaskPriority


class AutomationSchemaError(ValueError):
    pass


CONDITION_FIELDS = {
    "board_id": "Доска",
    "column_id": "Колонка",
    "column_name": "Название колонки",
    "assignee_id": "Исполнитель",
    "creator_id": "Создатель",
    "participant_ids": "Участники",
    "label_ids": "Метки",
    "priority": "Срочность",
    "due_date": "Срок",
    "completed": "Завершена",
    "title": "Название",
    "description": "Описание",
    "has_attachments": "Есть файлы",
    "checklist_complete": "Чек-лист выполнен",
}

CONDITION_OPERATORS = {
    "eq": "Равно",
    "neq": "Не равно",
    "in": "Одно из",
    "not_in": "Не входит",
    "contains": "Содержит",
    "not_contains": "Не содержит",
    "is_empty": "Не заполнено",
    "not_empty": "Заполнено",
    "gt": "Больше",
    "gte": "Больше или равно",
    "lt": "Меньше",
    "lte": "Меньше или равно",
    "is_today": "Сегодня",
    "is_past": "Просрочено",
    "is_future": "В будущем",
}

ACTION_TYPES = {
    "move": "Переместить задачу",
    "set_assignee": "Назначить исполнителя",
    "add_participant": "Добавить участника",
    "remove_participant": "Убрать участника",
    "add_label": "Добавить метку",
    "remove_label": "Убрать метку",
    "set_priority": "Изменить срочность",
    "set_due_date": "Изменить срок",
    "add_comment": "Добавить комментарий",
    "add_checklist": "Добавить чек-лист",
    "complete": "Завершить задачу",
}

EVENT_TRIGGERS = {
    value: label
    for value, label in TaskAutomationTrigger.choices
    if value
    not in {
        TaskAutomationTrigger.MANUAL,
        TaskAutomationTrigger.DATE_REACHED,
    }
}


def empty_condition_tree():
    return {"operator": "and", "children": []}


def validate_condition_tree(node, *, depth=0):
    if node in (None, {}, []):
        return empty_condition_tree()
    if not isinstance(node, dict):
        raise AutomationSchemaError("Условия должны быть объектом.")
    if depth > 5:
        raise AutomationSchemaError("Допустимо не более пяти уровней условий.")

    operator = node.get("operator")
    if operator in {"and", "or", "not"}:
        children = node.get("children", [])
        if not isinstance(children, list):
            raise AutomationSchemaError("Группа условий должна содержать список.")
        if len(children) > 50:
            raise AutomationSchemaError("В группе допустимо не более 50 условий.")
        if operator == "not" and len(children) != 1:
            raise AutomationSchemaError("Группа НЕ должна содержать одно условие.")
        return {
            "operator": operator,
            "children": [
                validate_condition_tree(child, depth=depth + 1) for child in children
            ],
        }

    field = node.get("field")
    if field not in CONDITION_FIELDS:
        raise AutomationSchemaError(f"Неизвестное поле условия: {field}.")
    if operator not in CONDITION_OPERATORS:
        raise AutomationSchemaError(f"Неизвестный оператор условия: {operator}.")
    return {"field": field, "operator": operator, "value": node.get("value")}


def validate_actions(actions):
    if not isinstance(actions, list) or not actions:
        raise AutomationSchemaError("Добавьте хотя бы одно действие.")
    if len(actions) > 30:
        raise AutomationSchemaError("Допустимо не более 30 действий.")

    normalized = []
    for raw_action in actions:
        if not isinstance(raw_action, dict):
            raise AutomationSchemaError("Действие должно быть объектом.")
        action = dict(raw_action)
        action_type = action.get("type")
        if action_type not in ACTION_TYPES:
            raise AutomationSchemaError(f"Неизвестное действие: {action_type}.")

        if action_type == "move":
            target = action.get("target", "column")
            if target not in {"column", "column_name", "first", "final"}:
                raise AutomationSchemaError("Некорректная целевая колонка.")
            if target == "column" and not action.get("column_id"):
                raise AutomationSchemaError("Укажите колонку.")
            if (
                target == "column_name"
                and not str(action.get("column_name", "")).strip()
            ):
                raise AutomationSchemaError("Укажите название колонки.")
        elif action_type in {"set_assignee", "add_participant", "remove_participant"}:
            if action_type != "set_assignee" and not action.get("user_id"):
                raise AutomationSchemaError("Укажите сотрудника.")
        elif action_type in {"add_label", "remove_label"} and not action.get(
            "label_id"
        ):
            raise AutomationSchemaError("Укажите метку.")
        elif (
            action_type == "set_priority"
            and action.get("priority") not in TaskPriority.values
        ):
            raise AutomationSchemaError("Некорректная срочность.")
        elif action_type == "set_due_date":
            mode = action.get("mode", "clear")
            if mode not in {"clear", "fixed", "relative"}:
                raise AutomationSchemaError("Некорректный режим срока.")
            if mode == "fixed" and not action.get("date"):
                raise AutomationSchemaError("Укажите дату срока.")
            if mode == "relative":
                try:
                    int(action.get("days", 0))
                except (TypeError, ValueError) as error:
                    raise AutomationSchemaError(
                        "Смещение срока должно быть числом."
                    ) from error
        elif action_type == "add_comment" and not str(action.get("text", "")).strip():
            raise AutomationSchemaError("Введите текст комментария.")
        elif action_type == "add_checklist":
            items = action.get("items")
            if isinstance(items, list) and (
                len(items) > 100 or any(len(str(i)) > 500 for i in items)
            ):
                raise AutomationSchemaError("До 100 пунктов, каждый до 500 символов.")
            if not isinstance(items, list) or not any(
                str(item).strip() for item in items
            ):
                raise AutomationSchemaError("Добавьте пункты чек-листа.")
        normalized.append(action)
    return normalized


def validate_schedule_config(config):
    if not isinstance(config, dict):
        raise AutomationSchemaError("Настройки срока должны быть объектом.")
    mode = config.get("mode", "task_due_date")
    if mode not in {"task_due_date", "fixed_datetime"}:
        raise AutomationSchemaError("Некорректный тип временного условия.")
    normalized = dict(config)
    normalized["mode"] = mode
    if mode == "task_due_date":
        try:
            normalized["days_before"] = max(0, int(config.get("days_before", 0)))
        except (TypeError, ValueError) as error:
            raise AutomationSchemaError(
                "Количество дней должно быть числом."
            ) from error
        run_time = parse_time(str(config.get("time", "09:00")))
        if not isinstance(run_time, time):
            raise AutomationSchemaError("Укажите корректное время запуска.")
        normalized["time"] = run_time.strftime("%H:%M")
    else:
        run_at = parse_datetime(str(config.get("at", "")))
        if not isinstance(run_at, datetime):
            raise AutomationSchemaError("Укажите корректную дату и время запуска.")
        normalized["at"] = run_at.isoformat()
    return normalized


def validate_automation_payload(*, kind, trigger, conditions, actions, schedule_config):
    import json

    if len(json.dumps(conditions)) > 30000 or len(json.dumps(actions)) > 60000:
        raise AutomationSchemaError("Правило слишком большое.")
    if kind not in TaskAutomationKind.values:
        raise AutomationSchemaError("Некорректный тип автоматизации.")
    if trigger not in TaskAutomationTrigger.values:
        raise AutomationSchemaError("Некорректное событие автоматизации.")
    if kind == TaskAutomationKind.BUTTON and trigger != TaskAutomationTrigger.MANUAL:
        raise AutomationSchemaError("Кнопка должна иметь ручной запуск.")
    if (
        kind == TaskAutomationKind.SCHEDULE
        and trigger != TaskAutomationTrigger.DATE_REACHED
    ):
        raise AutomationSchemaError(
            "Автоматизация по сроку должна запускаться по дате."
        )
    if kind == TaskAutomationKind.EVENT and trigger not in EVENT_TRIGGERS:
        raise AutomationSchemaError("Выберите событие автоматизации.")
    return {
        "conditions": validate_condition_tree(conditions),
        "actions": validate_actions(actions),
        "schedule_config": (
            validate_schedule_config(schedule_config)
            if kind == TaskAutomationKind.SCHEDULE
            else {}
        ),
    }


def automation_catalog():
    return {
        "kinds": dict(TaskAutomationKind.choices),
        "event_triggers": EVENT_TRIGGERS,
        "condition_fields": CONDITION_FIELDS,
        "condition_operators": CONDITION_OPERATORS,
        "action_types": ACTION_TYPES,
        "priorities": dict(TaskPriority.choices),
    }
