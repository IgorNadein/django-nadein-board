import {
  History,
  CalendarClock,
  Check,
  GripVertical,
  Loader2,
  Pencil,
  Play,
  Plus,
  Power,
  Trash2,
  Workflow,
  X,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

import { Modal } from "./Modal";
import type { Api } from "./types";
import { displayUserName } from "./mediaAdapters";
import type {
  TaskAutomation,
  TaskAutomationRun,
  TaskAutomationAction,
  TaskAutomationCatalog,
  TaskAutomationCondition,
  TaskAutomationKind,
  TaskAutomationTrigger,
  TaskBoard,
  TaskBoardSummary,
  TaskLabel,
  TaskPriority,
  User,
} from "./types";

type ConditionDraft = {
  id: string;
  field: string;
  operator: string;
  value: string;
};

type ConditionGroupDraft = {
  id: string;
  conditions: ConditionDraft[];
};

type ActionDraft = TaskAutomationAction & { id: string };

type AutomationForm = {
  id: number | null;
  name: string;
  description: string;
  kind: TaskAutomationKind;
  trigger: TaskAutomationTrigger;
  groups: ConditionGroupDraft[];
  actions: ActionDraft[];
  appliesToAllBoards: boolean;
  boardIds: number[];
  isActive: boolean;
  stopOnError: boolean;
  scheduleMode: "task_due_date" | "fixed_datetime";
  daysBefore: string;
  scheduleTime: string;
  fixedAt: string;
};

type Props = {
  api: Api;
  isOpen: boolean;
  onClose: () => void;
  currentBoard: TaskBoard | null;
  boards: TaskBoardSummary[];
  employees: User[];
  labels: TaskLabel[];
  onChanged?: () => void;
};

const NO_VALUE_OPERATORS = new Set([
  "is_empty",
  "not_empty",
  "is_today",
  "is_past",
  "is_future",
]);
const BOOLEAN_FIELDS = new Set([
  "completed",
  "has_attachments",
  "checklist_complete",
]);
const USER_FIELDS = new Set(["assignee_id", "creator_id", "participant_ids"]);
const NUMERIC_FIELDS = new Set([
  "board_id",
  "column_id",
  "assignee_id",
  "creator_id",
  "participant_ids",
  "label_ids",
]);

let draftSequence = 0;
function draftId(prefix: string) {
  draftSequence += 1;
  return `${prefix}-${draftSequence}`;
}

function emptyCondition(): ConditionDraft {
  return {
    id: draftId("condition"),
    field: "column_id",
    operator: "eq",
    value: "",
  };
}

function emptyGroup(): ConditionGroupDraft {
  return { id: draftId("group"), conditions: [emptyCondition()] };
}

function emptyAction(): ActionDraft {
  return { id: draftId("action"), type: "move", target: "final" };
}

function emptyForm(boardId?: number | null): AutomationForm {
  return {
    id: null,
    name: "",
    description: "",
    kind: "event",
    trigger: "task_created",
    groups: [emptyGroup()],
    actions: [emptyAction()],
    appliesToAllBoards: false,
    boardIds: boardId ? [boardId] : [],
    isActive: true,
    stopOnError: true,
    scheduleMode: "task_due_date",
    daysBefore: "0",
    scheduleTime: "09:00",
    fixedAt: "",
  };
}

function isConditionGroup(
  condition: TaskAutomationCondition,
): condition is Extract<
  TaskAutomationCondition,
  { children: TaskAutomationCondition[] }
> {
  return "children" in condition;
}

function conditionToDraft(
  condition: TaskAutomationCondition,
): ConditionDraft | null {
  if (isConditionGroup(condition)) return null;
  const rawValue = condition.value;
  return {
    id: draftId("condition"),
    field: condition.field,
    operator: condition.operator,
    value: Array.isArray(rawValue)
      ? rawValue.join(",")
      : String(rawValue ?? ""),
  };
}

function groupsFromCondition(
  root: TaskAutomationCondition,
): ConditionGroupDraft[] {
  if (!isConditionGroup(root)) {
    const condition = conditionToDraft(root);
    return condition
      ? [{ id: draftId("group"), conditions: [condition] }]
      : [emptyGroup()];
  }
  const sourceGroups = root.operator === "or" ? root.children : [root];
  const groups = sourceGroups
    .map((group) => {
      const nodes =
        isConditionGroup(group) && group.operator === "and"
          ? group.children
          : [group];
      return {
        id: draftId("group"),
        conditions: nodes
          .map(conditionToDraft)
          .filter(Boolean) as ConditionDraft[],
      };
    })
    .filter((group) => group.conditions.length > 0);
  return groups.length ? groups : [emptyGroup()];
}

function toLocalDateTime(value?: string) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value.slice(0, 16);
  const offset = date.getTimezoneOffset() * 60_000;
  return new Date(date.getTime() - offset).toISOString().slice(0, 16);
}

function formFromAutomation(automation: TaskAutomation): AutomationForm {
  return {
    id: automation.id,
    name: automation.name,
    description: automation.description || "",
    kind: automation.kind,
    trigger: automation.trigger,
    groups: groupsFromCondition(automation.conditions),
    actions: automation.actions.map((action) => ({
      ...action,
      id: draftId("action"),
    })),
    appliesToAllBoards: automation.applies_to_all_boards,
    boardIds: automation.boards || [],
    isActive: automation.is_active,
    stopOnError: automation.stop_on_error,
    scheduleMode: automation.schedule_config?.mode || "task_due_date",
    daysBefore: String(automation.schedule_config?.days_before ?? 0),
    scheduleTime: automation.schedule_config?.time || "09:00",
    fixedAt: toLocalDateTime(automation.schedule_config?.at),
  };
}

function errorMessage(error: unknown, fallback: string) {
  const raw = String((error as Error)?.message || fallback);
  const start = raw.indexOf("{");
  if (start < 0) return raw;
  try {
    const parsed = JSON.parse(raw.slice(start)) as Record<string, unknown>;
    const value = parsed.detail || parsed.error || Object.values(parsed)[0];
    if (Array.isArray(value)) return String(value[0] || fallback);
    if (typeof value === "string") return value;
  } catch {
    return raw;
  }
  return raw;
}

export default function TaskAutomationManager({
  api,
  isOpen,
  onClose,
  currentBoard,
  boards,
  employees,
  labels,
  onChanged,
}: Props) {
  const apiClient = useMemo(
    () => ({
      getTaskAutomationCatalog: () =>
        api<TaskAutomationCatalog>("automations/catalog/"),
      getTaskAutomations: (_params: unknown) =>
        api<TaskAutomation[]>("automations/"),
      createTaskAutomation: (data: Partial<TaskAutomation>) =>
        api<TaskAutomation>("automations/", "POST", data),
      updateTaskAutomation: (id: number, data: Partial<TaskAutomation>) =>
        api<TaskAutomation>(`automations/${id}/`, "PATCH", data),
      deleteTaskAutomation: (id: number) => api(`automations/${id}/`, "DELETE"),
    }),
    [api],
  );
  const [runLog, setRunLog] = useState<{
    name: string;
    runs: TaskAutomationRun[];
  } | null>(null);
  const [catalog, setCatalog] = useState<TaskAutomationCatalog | null>(null);
  const [automations, setAutomations] = useState<TaskAutomation[]>([]);
  const [activeKind, setActiveKind] = useState<TaskAutomationKind>("event");
  const [form, setForm] = useState<AutomationForm>(() =>
    emptyForm(currentBoard?.id),
  );
  const [editorOpen, setEditorOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [catalogResponse, rulesResponse] = await Promise.all([
        apiClient.getTaskAutomationCatalog(),
        apiClient.getTaskAutomations({ ordering: "position,id" }),
      ]);
      setCatalog(catalogResponse);
      setAutomations(Array.isArray(rulesResponse) ? rulesResponse : []);
    } catch (loadError) {
      setError(errorMessage(loadError, "Не удалось загрузить автоматизации"));
    } finally {
      setLoading(false);
    }
  }, [apiClient]);

  useEffect(() => {
    if (!isOpen) return;
    void load();
  }, [isOpen, load]);

  const visibleAutomations = useMemo(
    () => automations.filter((automation) => automation.kind === activeKind),
    [activeKind, automations],
  );

  const columns = useMemo(
    () => currentBoard?.columns?.filter((column) => !column.is_archived) || [],
    [currentBoard?.columns],
  );

  const openCreate = (kind: TaskAutomationKind = activeKind) => {
    const next = emptyForm(currentBoard?.id);
    next.kind = kind;
    next.trigger =
      kind === "button"
        ? "manual"
        : kind === "schedule"
          ? "date_reached"
          : "task_created";
    setForm(next);
    setEditorOpen(true);
    setError(null);
  };

  const changeFormKind = (kind: TaskAutomationKind) => {
    setActiveKind(kind);
    setForm((current) => ({
      ...current,
      kind,
      trigger:
        kind === "button"
          ? "manual"
          : kind === "schedule"
            ? "date_reached"
            : current.trigger === "manual" || current.trigger === "date_reached"
              ? "task_created"
              : current.trigger,
    }));
  };

  const openEdit = (automation: TaskAutomation) => {
    setForm(formFromAutomation(automation));
    setEditorOpen(true);
    setError(null);
  };

  const updateCondition = (
    groupId: string,
    conditionId: string,
    patch: Partial<ConditionDraft>,
  ) => {
    setForm((current) => ({
      ...current,
      groups: current.groups.map((group) =>
        group.id === groupId
          ? {
              ...group,
              conditions: group.conditions.map((condition) =>
                condition.id === conditionId
                  ? { ...condition, ...patch }
                  : condition,
              ),
            }
          : group,
      ),
    }));
  };

  const removeCondition = (groupId: string, conditionId: string) => {
    setForm((current) => ({
      ...current,
      groups: current.groups
        .map((group) =>
          group.id === groupId
            ? {
                ...group,
                conditions: group.conditions.filter(
                  (condition) => condition.id !== conditionId,
                ),
              }
            : group,
        )
        .filter((group) => group.conditions.length > 0),
    }));
  };

  const updateAction = (id: string, patch: Partial<ActionDraft>) => {
    setForm((current) => ({
      ...current,
      actions: current.actions.map((action) =>
        action.id === id ? { ...action, ...patch } : action,
      ),
    }));
  };

  const conditionValue = (condition: ConditionDraft): unknown => {
    if (NO_VALUE_OPERATORS.has(condition.operator)) return null;
    if (BOOLEAN_FIELDS.has(condition.field)) return condition.value === "true";
    if (condition.operator === "in" || condition.operator === "not_in") {
      return condition.value
        .split(",")
        .map((value) => value.trim())
        .filter(Boolean)
        .map((value) =>
          NUMERIC_FIELDS.has(condition.field) ? Number(value) : value,
        );
    }
    return NUMERIC_FIELDS.has(condition.field) && condition.value !== ""
      ? Number(condition.value)
      : condition.value;
  };

  const buildConditions = (): TaskAutomationCondition => {
    const groups = form.groups
      .map((group) => ({
        operator: "and" as const,
        children: group.conditions.map((condition) => ({
          field: condition.field,
          operator: condition.operator,
          value: conditionValue(condition),
        })),
      }))
      .filter((group) => group.children.length > 0);
    if (groups.length === 0) return { operator: "and", children: [] };
    return groups.length === 1
      ? groups[0]
      : { operator: "or", children: groups };
  };

  const buildActions = () =>
    form.actions.map((action) => {
      const payload: Partial<ActionDraft> = { ...action };
      delete payload.id;
      if (
        payload.type === "add_checklist" &&
        typeof payload.text === "string"
      ) {
        payload.items = payload.text
          .split("\n")
          .map((item) => item.trim())
          .filter(Boolean);
        delete payload.text;
      }
      return payload as TaskAutomationAction;
    });

  const save = async () => {
    if (!form.name.trim() || form.actions.length === 0) return;
    if (!form.appliesToAllBoards && form.boardIds.length === 0) {
      setError(
        "Выберите хотя бы одну доску или включите применение ко всем доскам.",
      );
      return;
    }
    setSaving(true);
    setError(null);
    try {
      const payload = {
        name: form.name.trim(),
        description: form.description.trim(),
        kind: form.kind,
        trigger:
          form.kind === "button"
            ? "manual"
            : form.kind === "schedule"
              ? "date_reached"
              : form.trigger,
        conditions: buildConditions(),
        actions: buildActions(),
        schedule_config:
          form.kind === "schedule"
            ? form.scheduleMode === "task_due_date"
              ? {
                  mode: "task_due_date" as const,
                  days_before: Number(form.daysBefore || 0),
                  time: form.scheduleTime,
                }
              : {
                  mode: "fixed_datetime" as const,
                  at: form.fixedAt ? new Date(form.fixedAt).toISOString() : "",
                }
            : {},
        applies_to_all_boards: form.appliesToAllBoards,
        boards: form.appliesToAllBoards ? [] : form.boardIds,
        is_active: form.isActive,
        stop_on_error: form.stopOnError,
        position: form.id
          ? automations.find((automation) => automation.id === form.id)
              ?.position || 0
          : automations.length,
      };
      if (form.id) {
        await apiClient.updateTaskAutomation(form.id, payload);
      } else {
        await apiClient.createTaskAutomation(
          payload as Parameters<typeof apiClient.createTaskAutomation>[0],
        );
      }
      setEditorOpen(false);
      await load();
      onChanged?.();
    } catch (saveError) {
      setError(errorMessage(saveError, "Не удалось сохранить автоматизацию"));
    } finally {
      setSaving(false);
    }
  };

  const toggleActive = async (automation: TaskAutomation) => {
    setSaving(true);
    setError(null);
    try {
      await apiClient.updateTaskAutomation(automation.id, {
        is_active: !automation.is_active,
      });
      await load();
    } catch (toggleError) {
      setError(
        errorMessage(
          toggleError,
          "Не удалось изменить состояние автоматизации",
        ),
      );
    } finally {
      setSaving(false);
    }
  };

  const remove = async (automation: TaskAutomation) => {
    if (!window.confirm(`Удалить автоматизацию «${automation.name}»?`)) return;
    setSaving(true);
    setError(null);
    try {
      await apiClient.deleteTaskAutomation(automation.id);
      await load();
      onChanged?.();
    } catch (deleteError) {
      setError(errorMessage(deleteError, "Не удалось удалить автоматизацию"));
    } finally {
      setSaving(false);
    }
  };

  const renderConditionValue = (
    group: ConditionGroupDraft,
    condition: ConditionDraft,
  ) => {
    if (NO_VALUE_OPERATORS.has(condition.operator)) return null;
    const commonProps = {
      value: condition.value,
      onChange: (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
      ) =>
        updateCondition(group.id, condition.id, { value: event.target.value }),
      className: "app-input min-w-0 rounded-lg px-2.5 py-2 text-xs",
    };
    if (BOOLEAN_FIELDS.has(condition.field)) {
      return (
        <select {...commonProps}>
          <option value="true">Да</option>
          <option value="false">Нет</option>
        </select>
      );
    }
    if (condition.field === "board_id") {
      return (
        <select {...commonProps}>
          <option value="">Выберите доску</option>
          {boards.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      );
    }
    if (condition.field === "column_id") {
      return (
        <select {...commonProps}>
          <option value="">Выберите колонку</option>
          {columns.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      );
    }
    if (USER_FIELDS.has(condition.field)) {
      return (
        <select {...commonProps}>
          <option value="">Выберите сотрудника</option>
          {employees.map((item) => (
            <option key={item.id} value={item.id}>
              {displayUserName(item)}
            </option>
          ))}
        </select>
      );
    }
    if (condition.field === "label_ids") {
      return (
        <select {...commonProps}>
          <option value="">Выберите метку</option>
          {labels.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      );
    }
    if (condition.field === "priority") {
      return (
        <select {...commonProps}>
          {Object.entries(catalog?.priorities || {}).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      );
    }
    return (
      <input
        {...commonProps}
        type={condition.field === "due_date" ? "date" : "text"}
        placeholder={
          condition.operator === "in" || condition.operator === "not_in"
            ? "Значения через запятую"
            : "Значение"
        }
      />
    );
  };

  const renderActionOptions = (action: ActionDraft) => {
    const inputClass = "app-input min-w-0 rounded-lg px-2.5 py-2 text-xs";
    if (action.type === "move") {
      return (
        <div className="grid min-w-0 gap-2 sm:grid-cols-2">
          <select
            value={action.target || "final"}
            onChange={(event) =>
              updateAction(action.id, {
                target: event.target.value as TaskAutomationAction["target"],
              })
            }
            className={inputClass}
          >
            <option value="final">В финальную колонку</option>
            <option value="first">В первую колонку</option>
            <option value="column">В выбранную колонку</option>
            <option value="column_name">В колонку по названию</option>
          </select>
          {action.target === "column" ? (
            <select
              value={action.column_id || ""}
              onChange={(event) =>
                updateAction(action.id, {
                  column_id: Number(event.target.value),
                })
              }
              className={inputClass}
            >
              <option value="">Выберите колонку</option>
              {columns.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          ) : action.target === "column_name" ? (
            <input
              value={action.column_name || ""}
              onChange={(event) =>
                updateAction(action.id, { column_name: event.target.value })
              }
              className={inputClass}
              placeholder="Название колонки"
            />
          ) : null}
        </div>
      );
    }
    if (
      ["set_assignee", "add_participant", "remove_participant"].includes(
        action.type,
      )
    ) {
      return (
        <select
          value={action.user_id ?? ""}
          onChange={(event) =>
            updateAction(action.id, {
              user_id: event.target.value ? Number(event.target.value) : null,
            })
          }
          className={inputClass}
        >
          <option value="">
            {action.type === "set_assignee"
              ? "Снять исполнителя"
              : "Выберите сотрудника"}
          </option>
          {employees.map((item) => (
            <option key={item.id} value={item.id}>
              {displayUserName(item)}
            </option>
          ))}
        </select>
      );
    }
    if (["add_label", "remove_label"].includes(action.type)) {
      return (
        <select
          value={action.label_id || ""}
          onChange={(event) =>
            updateAction(action.id, { label_id: Number(event.target.value) })
          }
          className={inputClass}
        >
          <option value="">Выберите метку</option>
          {labels.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      );
    }
    if (action.type === "set_priority") {
      return (
        <select
          value={action.priority || "normal"}
          onChange={(event) =>
            updateAction(action.id, {
              priority: event.target.value as TaskPriority,
            })
          }
          className={inputClass}
        >
          {Object.entries(catalog?.priorities || {}).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      );
    }
    if (action.type === "set_due_date") {
      return (
        <div className="grid gap-2 sm:grid-cols-2">
          <select
            value={action.mode || "clear"}
            onChange={(event) =>
              updateAction(action.id, {
                mode: event.target.value as TaskAutomationAction["mode"],
              })
            }
            className={inputClass}
          >
            <option value="clear">Убрать срок</option>
            <option value="fixed">Установить дату</option>
            <option value="relative">Сместить от текущей даты</option>
          </select>
          {action.mode === "fixed" ? (
            <input
              type="date"
              value={action.date || ""}
              onChange={(event) =>
                updateAction(action.id, { date: event.target.value })
              }
              className={inputClass}
            />
          ) : null}
          {action.mode === "relative" ? (
            <input
              type="number"
              value={action.days ?? 0}
              onChange={(event) =>
                updateAction(action.id, { days: Number(event.target.value) })
              }
              className={inputClass}
              aria-label="Смещение в днях"
            />
          ) : null}
        </div>
      );
    }
    if (action.type === "add_comment") {
      return (
        <textarea
          value={action.text || ""}
          onChange={(event) =>
            updateAction(action.id, { text: event.target.value })
          }
          className={`${inputClass} w-full`}
          rows={2}
          placeholder="Текст системного комментария"
        />
      );
    }
    if (action.type === "add_checklist") {
      return (
        <textarea
          value={action.text || action.items?.join("\n") || ""}
          onChange={(event) =>
            updateAction(action.id, { text: event.target.value })
          }
          className={`${inputClass} w-full`}
          rows={3}
          placeholder="Один пункт на строку"
        />
      );
    }
    return (
      <p className="app-text-muted text-xs">
        Дополнительные параметры не требуются.
      </p>
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Автоматизация задач"
      size="xl"
      closeOnClickOutside
    >
      <div className="space-y-4">
        {runLog && (
          <div className="inset-form">
            <div className="section-heading">
              <h3>Журнал: {runLog.name}</h3>
              <button onClick={() => setRunLog(null)} title="Закрыть журнал">
                <X size={16} />
              </button>
            </div>
            {runLog.runs.map((r) => (
              <details key={r.id} className="resource-row block">
                <summary>
                  {new Date(r.started_at).toLocaleString("ru")} · #{r.task} ·{" "}
                  {
                    {
                      success: "Выполнено",
                      failed: "Ошибка",
                      partial: "Частично",
                      skipped: "Пропущено",
                      running: "Выполняется",
                    }[r.status]
                  }
                </summary>
                {r.error && <p className="danger">{r.error}</p>}
                {r.actions_log.map((a, i) => (
                  <p key={i} className="muted">
                    {String(a.result || a.error || a.type)}
                  </p>
                ))}
              </details>
            ))}
            {!runLog.runs.length && <p className="muted">Запусков пока нет.</p>}
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-3">
          <div className="flex flex-wrap gap-1.5">
            {(
              [
                ["event", "События", Workflow],
                ["schedule", "Сроки", CalendarClock],
                ["button", "Кнопки", Play],
              ] as const
            ).map(([kind, label, Icon]) => (
              <button
                key={kind}
                type="button"
                onClick={() => {
                  setActiveKind(kind);
                  if (editorOpen && form.id === null) changeFormKind(kind);
                }}
                className={`app-pill inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium ${activeKind === kind ? "app-selected ring-1 ring-[var(--accent-primary)]" : ""}`}
                aria-pressed={activeKind === kind}
              >
                <Icon size={14} />
                {label}
                <span className="app-badge rounded-full px-1.5 py-0.5 text-[10px]">
                  {automations.filter((item) => item.kind === kind).length}
                </span>
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => openCreate()}
            className="app-action-primary inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium"
          >
            <Plus size={15} />
            Создать
          </button>
        </div>

        {error ? (
          <div className="app-feedback-danger rounded-xl px-3 py-2 text-sm">
            {error}
          </div>
        ) : null}

        {loading ? (
          <div className="py-12 text-center">
            <Loader2 size={24} className="mx-auto animate-spin text-sky-500" />
          </div>
        ) : editorOpen ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-[var(--foreground)]">
                  {form.id ? "Редактирование" : "Новая автоматизация"}
                </h3>
                <p className="app-text-muted text-xs">
                  Правила действуют на ваших досках. Область применения задаётся
                  отдельно.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setEditorOpen(false)}
                className="app-icon-button flex h-8 w-8 items-center justify-center rounded-lg"
                title="Закрыть редактор"
              >
                <X size={15} />
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <span className="app-text-muted mb-1.5 block text-xs">
                  Тип автоматизации
                </span>
                <div className="grid grid-cols-3 gap-2 rounded-xl border border-[var(--border-subtle)] p-1">
                  {(
                    [
                      ["event", "Событие", Workflow],
                      ["schedule", "Срок", CalendarClock],
                      ["button", "Кнопка", Play],
                    ] as const
                  ).map(([kind, label, Icon]) => (
                    <button
                      key={kind}
                      type="button"
                      onClick={() => changeFormKind(kind)}
                      className={`inline-flex min-h-10 items-center justify-center gap-2 rounded-lg px-2 text-sm font-medium transition ${
                        form.kind === kind
                          ? "app-selected text-[var(--accent-primary-strong)]"
                          : "app-action-ghost"
                      }`}
                      aria-pressed={form.kind === kind}
                    >
                      <Icon size={15} />
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <label className="sm:col-span-2">
                <span className="app-text-muted mb-1 block text-xs">
                  Название
                </span>
                <input
                  value={form.name}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      name: event.target.value,
                    }))
                  }
                  className="app-input w-full rounded-xl px-3 py-2 text-sm"
                  autoFocus
                />
              </label>
              <label className="sm:col-span-2">
                <span className="app-text-muted mb-1 block text-xs">
                  Описание
                </span>
                <textarea
                  value={form.description}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      description: event.target.value,
                    }))
                  }
                  className="app-input w-full rounded-xl px-3 py-2 text-sm"
                  rows={2}
                />
              </label>
              {form.kind === "event" ? (
                <label>
                  <span className="app-text-muted mb-1 block text-xs">
                    Когда
                  </span>
                  <select
                    value={form.trigger}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        trigger: event.target.value as TaskAutomationTrigger,
                      }))
                    }
                    className="app-input w-full rounded-xl px-3 py-2 text-sm"
                  >
                    {Object.entries(catalog?.event_triggers || {}).map(
                      ([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ),
                    )}
                  </select>
                </label>
              ) : null}
              {form.kind === "schedule" ? (
                <div className="grid gap-2 sm:col-span-2 sm:grid-cols-3">
                  <label>
                    <span className="app-text-muted mb-1 block text-xs">
                      Тип срока
                    </span>
                    <select
                      value={form.scheduleMode}
                      onChange={(event) =>
                        setForm((current) => ({
                          ...current,
                          scheduleMode: event.target
                            .value as AutomationForm["scheduleMode"],
                        }))
                      }
                      className="app-input w-full rounded-xl px-3 py-2 text-sm"
                    >
                      <option value="task_due_date">От срока задачи</option>
                      <option value="fixed_datetime">Определённая дата</option>
                    </select>
                  </label>
                  {form.scheduleMode === "task_due_date" ? (
                    <>
                      <label>
                        <span className="app-text-muted mb-1 block text-xs">
                          За сколько дней
                        </span>
                        <input
                          type="number"
                          min="0"
                          value={form.daysBefore}
                          onChange={(event) =>
                            setForm((current) => ({
                              ...current,
                              daysBefore: event.target.value,
                            }))
                          }
                          className="app-input w-full rounded-xl px-3 py-2 text-sm"
                        />
                      </label>
                      <label>
                        <span className="app-text-muted mb-1 block text-xs">
                          Время
                        </span>
                        <input
                          type="time"
                          value={form.scheduleTime}
                          onChange={(event) =>
                            setForm((current) => ({
                              ...current,
                              scheduleTime: event.target.value,
                            }))
                          }
                          className="app-input w-full rounded-xl px-3 py-2 text-sm"
                        />
                      </label>
                    </>
                  ) : (
                    <label className="sm:col-span-2">
                      <span className="app-text-muted mb-1 block text-xs">
                        Дата и время
                      </span>
                      <input
                        type="datetime-local"
                        value={form.fixedAt}
                        onChange={(event) =>
                          setForm((current) => ({
                            ...current,
                            fixedAt: event.target.value,
                          }))
                        }
                        className="app-input w-full rounded-xl px-3 py-2 text-sm"
                      />
                    </label>
                  )}
                </div>
              ) : null}
            </div>

            <section className="rounded-xl border border-[var(--border-subtle)] p-3">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div>
                  <h4 className="text-sm font-semibold">Область применения</h4>
                  <p className="app-text-muted text-xs">
                    По умолчанию используется открытая доска.
                  </p>
                </div>
                <label className="inline-flex items-center gap-2 text-xs">
                  <input
                    type="checkbox"
                    checked={form.appliesToAllBoards}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        appliesToAllBoards: event.target.checked,
                      }))
                    }
                    className="accent-sky-500"
                  />
                  Все мои доски
                </label>
              </div>
              {!form.appliesToAllBoards ? (
                <div className="flex max-h-28 flex-wrap gap-2 overflow-y-auto">
                  {boards.map((item) => {
                    const selected = form.boardIds.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() =>
                          setForm((current) => ({
                            ...current,
                            boardIds: selected
                              ? current.boardIds.filter((id) => id !== item.id)
                              : [...current.boardIds, item.id],
                          }))
                        }
                        className={`app-pill inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs ${selected ? "app-selected" : ""}`}
                      >
                        {selected ? <Check size={12} /> : null}
                        {item.name}
                      </button>
                    );
                  })}
                </div>
              ) : null}
            </section>

            <section className="space-y-3 rounded-xl border border-[var(--border-subtle)] p-3">
              <div>
                <h4 className="text-sm font-semibold">Если</h4>
                <p className="app-text-muted text-xs">
                  Условия внутри блока объединяются через И, блоки между собой
                  через ИЛИ. Пустые условия означают запуск для любой задачи.
                </p>
              </div>
              {form.groups.map((group, groupIndex) => (
                <div key={group.id} className="space-y-2">
                  {groupIndex > 0 ? (
                    <div className="flex items-center gap-2">
                      <span className="h-px flex-1 bg-[var(--border-subtle)]" />
                      <span className="app-badge rounded-full px-2 py-0.5 text-[10px] font-semibold">
                        ИЛИ
                      </span>
                      <span className="h-px flex-1 bg-[var(--border-subtle)]" />
                    </div>
                  ) : null}
                  {group.conditions.map((condition, conditionIndex) => (
                    <div
                      key={condition.id}
                      className="app-surface-muted grid gap-2 rounded-xl border border-[var(--border-subtle)] p-2 sm:grid-cols-[auto_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.2fr)_auto] sm:items-center"
                    >
                      <span className="app-text-muted text-[10px] font-semibold">
                        {conditionIndex > 0 ? "И" : "ЕСЛИ"}
                      </span>
                      <select
                        value={condition.field}
                        onChange={(event) =>
                          updateCondition(group.id, condition.id, {
                            field: event.target.value,
                            value: "",
                          })
                        }
                        className="app-input min-w-0 rounded-lg px-2.5 py-2 text-xs"
                      >
                        {Object.entries(catalog?.condition_fields || {}).map(
                          ([value, label]) => (
                            <option key={value} value={value}>
                              {label}
                            </option>
                          ),
                        )}
                      </select>
                      <select
                        value={condition.operator}
                        onChange={(event) =>
                          updateCondition(group.id, condition.id, {
                            operator: event.target.value,
                          })
                        }
                        className="app-input min-w-0 rounded-lg px-2.5 py-2 text-xs"
                      >
                        {Object.entries(catalog?.condition_operators || {}).map(
                          ([value, label]) => (
                            <option key={value} value={value}>
                              {label}
                            </option>
                          ),
                        )}
                      </select>
                      {renderConditionValue(group, condition) || <span />}
                      <button
                        type="button"
                        onClick={() => removeCondition(group.id, condition.id)}
                        className="app-icon-button flex h-8 w-8 items-center justify-center rounded-lg text-[var(--danger-foreground)]"
                        title="Удалить условие"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() =>
                      setForm((current) => ({
                        ...current,
                        groups: current.groups.map((item) =>
                          item.id === group.id
                            ? {
                                ...item,
                                conditions: [
                                  ...item.conditions,
                                  emptyCondition(),
                                ],
                              }
                            : item,
                        ),
                      }))
                    }
                    className="app-action-ghost inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-xs"
                  >
                    <Plus size={13} />
                    Условие И
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  setForm((current) => ({
                    ...current,
                    groups: [...current.groups, emptyGroup()],
                  }))
                }
                className="app-action-secondary inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs"
              >
                <Plus size={13} />
                Группа ИЛИ
              </button>
            </section>

            <section className="space-y-3 rounded-xl border border-[var(--border-subtle)] p-3">
              <div>
                <h4 className="text-sm font-semibold">То</h4>
                <p className="app-text-muted text-xs">
                  Действия выполняются сверху вниз.
                </p>
              </div>
              {form.actions.map((action, index) => (
                <div
                  key={action.id}
                  className="app-surface-muted rounded-xl border border-[var(--border-subtle)] p-3"
                >
                  <div className="flex items-start gap-2">
                    <GripVertical
                      size={15}
                      className="app-text-muted mt-2 shrink-0"
                    />
                    <span className="app-badge mt-1.5 rounded-full px-2 py-0.5 text-[10px]">
                      {index + 1}
                    </span>
                    <div className="min-w-0 flex-1 space-y-2">
                      <select
                        value={action.type}
                        onChange={(event) =>
                          updateAction(action.id, { type: event.target.value })
                        }
                        className="app-input w-full rounded-lg px-2.5 py-2 text-xs"
                      >
                        {Object.entries(catalog?.action_types || {}).map(
                          ([value, label]) => (
                            <option key={value} value={value}>
                              {label}
                            </option>
                          ),
                        )}
                      </select>
                      {renderActionOptions(action)}
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setForm((current) => ({
                          ...current,
                          actions: current.actions.filter(
                            (item) => item.id !== action.id,
                          ),
                        }))
                      }
                      className="app-icon-button flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[var(--danger-foreground)]"
                      title="Удалить действие"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  setForm((current) => ({
                    ...current,
                    actions: [...current.actions, emptyAction()],
                  }))
                }
                className="app-action-secondary inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs"
              >
                <Plus size={13} />
                Добавить действие
              </button>
            </section>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-subtle)] pt-3">
              <div className="flex flex-wrap gap-4">
                <label className="inline-flex items-center gap-2 text-xs">
                  <input
                    type="checkbox"
                    checked={form.isActive}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        isActive: event.target.checked,
                      }))
                    }
                    className="accent-sky-500"
                  />
                  Активна
                </label>
                <label className="inline-flex items-center gap-2 text-xs">
                  <input
                    type="checkbox"
                    checked={form.stopOnError}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        stopOnError: event.target.checked,
                      }))
                    }
                    className="accent-sky-500"
                  />
                  Остановить при ошибке
                </label>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setEditorOpen(false)}
                  className="app-action-secondary rounded-lg px-3 py-2 text-sm"
                >
                  Отмена
                </button>
                <button
                  type="button"
                  onClick={() => void save()}
                  disabled={
                    saving || !form.name.trim() || form.actions.length === 0
                  }
                  className="app-action-primary inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium disabled:opacity-50"
                >
                  {saving ? (
                    <Loader2 size={14} className="animate-spin" />
                  ) : (
                    <Check size={14} />
                  )}
                  Сохранить
                </button>
              </div>
            </div>
          </div>
        ) : visibleAutomations.length ? (
          <div className="space-y-2">
            {visibleAutomations.map((automation) => (
              <article
                key={automation.id}
                className="app-surface-muted flex items-center gap-3 rounded-xl border border-[var(--border-subtle)] p-3"
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${automation.is_active ? "app-selected" : "app-badge"}`}
                >
                  {automation.kind === "schedule" ? (
                    <CalendarClock size={16} />
                  ) : automation.kind === "button" ? (
                    <Play size={16} />
                  ) : (
                    <Workflow size={16} />
                  )}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-semibold text-[var(--foreground)]">
                    {automation.name}
                  </h3>
                  <p className="app-text-muted mt-0.5 truncate text-xs">
                    {automation.applies_to_all_boards
                      ? "Все мои доски"
                      : `${automation.boards.length} досок`}{" "}
                    · {automation.actions.length} действий
                    {automation.last_run_at
                      ? ` · запускалась ${new Date(automation.last_run_at).toLocaleString("ru-RU")}`
                      : ""}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => void toggleActive(automation)}
                  disabled={saving}
                  className={`app-icon-button flex h-8 w-8 items-center justify-center rounded-lg ${automation.is_active ? "text-emerald-500" : "app-text-muted"}`}
                  title={automation.is_active ? "Отключить" : "Включить"}
                >
                  <Power size={14} />
                </button>
                <button
                  type="button"
                  className="app-icon-button flex h-8 w-8 items-center justify-center rounded-lg"
                  title="Журнал запусков"
                  onClick={() => {
                    api<TaskAutomationRun[]>(
                      `automations/${automation.id}/runs/`,
                    )
                      .then((runs) =>
                        setRunLog({ name: automation.name, runs }),
                      )
                      .catch((e) => setError(String(e)));
                  }}
                >
                  <History size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => openEdit(automation)}
                  className="app-icon-button flex h-8 w-8 items-center justify-center rounded-lg"
                  title="Редактировать"
                >
                  <Pencil size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => void remove(automation)}
                  disabled={saving}
                  className="app-icon-button flex h-8 w-8 items-center justify-center rounded-lg text-[var(--danger-foreground)]"
                  title="Удалить"
                >
                  <Trash2 size={14} />
                </button>
              </article>
            ))}
          </div>
        ) : (
          <div className="app-surface-muted rounded-xl border border-dashed border-[var(--border-subtle)] px-4 py-10 text-center">
            <Workflow size={24} className="app-text-muted mx-auto mb-2" />
            <p className="text-sm font-medium">Автоматизаций пока нет</p>
            <p className="app-text-muted mt-1 text-xs">
              Создайте правило для событий, сроков или ручную кнопку.
            </p>
          </div>
        )}
      </div>
    </Modal>
  );
}
