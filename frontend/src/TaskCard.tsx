import {
  memo,
  useState,
  useRef,
  useMemo,
  useEffect,
  useLayoutEffect,
  useCallback,
  type CSSProperties,
} from "react";
import { flushSync } from "react-dom";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import {
  ChevronDown,
  Loader2,
  Play,
  Check,
  UserRound,
  CalendarDays,
  ListChecks,
  Paperclip,
  Link2,
  MessageSquare,
  X,
} from "lucide-react";
import TaskCoverPreview from "./TaskCoverPreview";
import type { TaskCard, TaskPriority, User } from "./types";
const displayUserName = (u: User) => u.name;
const formatDate = (s: string) =>
  new Date(s + "T00:00:00").toLocaleDateString("ru-RU");
const taskDescriptionPreviewClass =
  "app-text-muted mt-1 block max-h-8 w-full max-w-[13rem] overflow-hidden whitespace-normal break-all text-xs leading-4";

function TaskDescriptionPreview({ description }: { description: string }) {
  return (
    <p
      className={taskDescriptionPreviewClass}
      style={{ overflowWrap: "anywhere", wordBreak: "break-all" }}
    >
      {description}
    </p>
  );
}

export const priorityOptions: {
  value: TaskPriority;
  label: string;
  urgencyLabel: string;
  className: string;
  textClassName: string;
  dotClassName: string;
  selectedClassName: string;
}[] = [
  {
    value: "low",
    label: "Низкий",
    urgencyLabel: "Низкая",
    className: "app-badge",
    textClassName: "app-text-muted",
    dotClassName: "bg-slate-400",
    selectedClassName: "bg-slate-500",
  },
  {
    value: "medium",
    label: "Средний",
    urgencyLabel: "Средняя",
    className: "app-selected",
    textClassName: "text-[var(--accent-primary-strong)]",
    dotClassName: "bg-sky-500",
    selectedClassName: "bg-sky-500",
  },
  {
    value: "high",
    label: "Высокий",
    urgencyLabel: "Высокая",
    className: "app-feedback-warning",
    textClassName: "text-[var(--warning-foreground)]",
    dotClassName: "bg-amber-500",
    selectedClassName: "bg-amber-500",
  },
  {
    value: "critical",
    label: "Критический",
    urgencyLabel: "Критическая",
    className: "app-feedback-danger",
    textClassName: "text-[var(--danger-foreground)]",
    dotClassName: "bg-red-500",
    selectedClassName: "bg-red-500",
  },
];

const priorityMeta = Object.fromEntries(
  priorityOptions.map((item) => [item.value, item]),
) as Record<TaskPriority, (typeof priorityOptions)[number]>;

function toDateOnlyTime(value?: string | null) {
  if (!value) return null;
  const match = String(value).match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!match) return null;

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  if (
    !Number.isFinite(year) ||
    !Number.isFinite(month) ||
    !Number.isFinite(day)
  ) {
    return null;
  }

  const date = new Date(year, month - 1, day);
  date.setHours(0, 0, 0, 0);
  return date.getTime();
}

function getTaskDueDateBadgeClass(task: TaskCard, defaultClass = "app-badge") {
  if (!task.due_date || task.completed_at) return defaultClass;

  const dueTime = toDateOnlyTime(task.due_date);
  if (dueTime === null) return defaultClass;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayTime = today.getTime();

  if (dueTime < todayTime) return "app-feedback-danger";
  if (dueTime === todayTime) return "app-feedback-warning";
  return defaultClass;
}

type TaskCardViewProps = {
  isOverlay?: boolean;
  task: TaskCard;
  onOpen: (task: TaskCard, target?: TaskViewTarget) => void;
  onEdit: (task: TaskCard) => void;
  onDelete: (task: TaskCard) => void;
  currentUserId?: number;
  claiming: boolean;
  onClaim: (task: TaskCard) => void;
  completing: boolean;
  onComplete: (task: TaskCard) => void;
  menuOpen: boolean;
  onToggleTaskMenu: (taskId: number, anchor: HTMLButtonElement) => void;
};

type TaskViewTarget = "attachments" | "comments";

type TaskCardDragBinding = {
  attributes?: ReturnType<typeof useDraggable>["attributes"];
  listeners?: ReturnType<typeof useDraggable>["listeners"];
  setNodeRef?: ReturnType<typeof useDraggable>["setNodeRef"];
  style?: CSSProperties;
  isDragging?: boolean;
  onPointerEnter?: () => void;
  onPointerLeave?: () => void;
  onPointerDownCapture?: () => void;
  onPointerUpCapture?: () => void;
  onPointerCancelCapture?: () => void;
};

const TaskCardContent = memo(function TaskCardContent({
  task,
  onOpen,
  currentUserId,
  claiming,
  onClaim,
  completing,
  onComplete,
  menuOpen,
  onToggleTaskMenu,
  attributes,
  listeners,
  setNodeRef,
  style,
  isDragging = false,
  onPointerEnter,
  onPointerLeave,
  onPointerDownCapture,
  onPointerUpCapture,
  onPointerCancelCapture,
}: TaskCardViewProps & TaskCardDragBinding) {
  const priority = priorityMeta[task.priority] ?? priorityMeta.medium;
  const dueDateClass = getTaskDueDateBadgeClass(task);
  const canClaim =
    (!task.assignee || !task.assignee.is_active) && !task.completed_at;
  const canComplete = task.assignee?.id === currentUserId && !task.completed_at;

  return (
    <article
      ref={setNodeRef}
      style={style}
      className={`tasks-task-card app-surface-elevated cursor-grab select-none rounded-xl border border-[var(--border-subtle)] p-3 shadow-sm transition active:cursor-grabbing ${
        isDragging ? "opacity-30" : "hover:border-[var(--border-strong)]"
      }`}
      title="Перетащите задачу в нужную колонку"
      onClick={() => onOpen(task)}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onPointerDownCapture={onPointerDownCapture}
      onPointerUpCapture={onPointerUpCapture}
      onPointerCancelCapture={onPointerCancelCapture}
      {...attributes}
      {...listeners}
    >
      {task.cover ? (
        <TaskCoverPreview
          taskId={task.id}
          cover={task.cover}
          className="-mx-3 -mt-3 mb-3 aspect-[16/7] max-h-32 w-[calc(100%+1.5rem)] rounded-t-[11px] border-b border-[var(--border-subtle)]"
        />
      ) : null}
      <div className="mb-2 min-w-0 overflow-hidden whitespace-normal text-left">
        <div className="flex min-w-0 items-start gap-2">
          <span className="app-badge shrink-0 rounded-full px-1.5 py-0.5 text-[10px] font-semibold">
            #{task.id}
          </span>
          <h3
            className="line-clamp-4 min-w-0 flex-1 break-words text-sm font-semibold leading-5 text-[var(--foreground)]"
            title={task.title}
          >
            {task.title}
          </h3>
          <div
            className="relative shrink-0"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={(event) =>
                onToggleTaskMenu(task.id, event.currentTarget)
              }
              className="app-icon-button flex h-7 w-7 items-center justify-center rounded-md"
              title="Действия"
              aria-label="Действия с задачей"
              aria-expanded={menuOpen}
              aria-haspopup="menu"
            >
              <ChevronDown
                size={14}
                className={`transition-transform ${menuOpen ? "" : "-rotate-90"}`}
              />
            </button>
          </div>
        </div>
        {task.description ? (
          <TaskDescriptionPreview description={task.description} />
        ) : null}
        <div className="mt-1 flex justify-end">
          <span
            className={`whitespace-nowrap text-right text-[11px] font-medium ${priority.textClassName}`}
          >
            {priority.urgencyLabel} срочность
          </span>
        </div>
      </div>

      {task.labels && task.labels.length > 0 ? (
        <div className="mb-2 flex flex-wrap gap-1.5">
          {task.labels.map((label) => (
            <span
              key={label.id}
              className="inline-flex max-w-full items-center rounded-full px-2 py-0.5 text-[11px] font-medium text-white"
              style={{ backgroundColor: label.color || "#38bdf8" }}
            >
              {label.name}
            </span>
          ))}
        </div>
      ) : null}

      <div className="flex flex-wrap items-center gap-1.5">
        {canClaim ? (
          <button
            type="button"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={(event) => {
              event.stopPropagation();
              onClaim(task);
            }}
            disabled={claiming}
            className="app-action-primary inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full disabled:cursor-wait disabled:opacity-60"
            title="Взять задачу в работу"
            aria-label={`Взять задачу в работу ${task.title}`}
          >
            {claiming ? (
              <Loader2 size={13} className="animate-spin" />
            ) : (
              <Play size={14} />
            )}
          </button>
        ) : null}
        {canComplete ? (
          <button
            type="button"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={(event) => {
              event.stopPropagation();
              onComplete(task);
            }}
            disabled={completing}
            className="app-action-success inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full disabled:cursor-wait disabled:opacity-60"
            title="Завершить задачу"
            aria-label={`Завершить задачу ${task.title}`}
          >
            {completing ? (
              <Loader2 size={13} className="animate-spin" />
            ) : (
              <Check size={14} strokeWidth={2.5} />
            )}
          </button>
        ) : null}
        {task.assignee ? (
          <span className="app-badge inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px]">
            <UserRound size={11} />
            {displayUserName(task.assignee)}
          </span>
        ) : null}
        {task.due_date ? (
          <span
            className={`${dueDateClass} inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px]`}
          >
            <CalendarDays size={11} />
            {formatDate(task.due_date)}
          </span>
        ) : null}
        {(task.checklist_total || 0) > 0 ? (
          <span className="app-badge inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px]">
            <ListChecks size={11} />
            {task.checklist_completed || 0}/{task.checklist_total}
          </span>
        ) : null}
        {(task.attachments_count || 0) > 0 ? (
          <button
            type="button"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={(event) => {
              event.stopPropagation();
              onOpen(task, "attachments");
            }}
            className="app-badge inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] transition hover:border-[var(--border-strong)] hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
            title="Открыть вложения задачи"
            aria-label={`Открыть вложения задачи: ${task.attachments_count}`}
          >
            <Paperclip size={11} />
            {task.attachments_count}
          </button>
        ) : null}
        {(task.linked_objects_count || task.linked_messages_count || 0) > 0 ? (
          <span className="app-badge inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px]">
            <Link2 size={11} />
            {task.linked_objects_count || task.linked_messages_count}
          </span>
        ) : null}
        {(task.comments_count || 0) > 0 ? (
          <button
            type="button"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={(event) => {
              event.stopPropagation();
              onOpen(task, "comments");
            }}
            className="app-badge inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] transition hover:border-[var(--border-strong)] hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
            title="Открыть комментарии задачи"
            aria-label={`Открыть комментарии задачи: ${task.comments_count}`}
          >
            <MessageSquare size={11} />
            {task.comments_count}
          </button>
        ) : null}
      </div>
    </article>
  );
});

function TaskCardDraggableBinding({
  task,
  onBindingChange,
  onDraggingChange,
}: {
  task: TaskCard;
  onBindingChange: (binding: TaskCardDragBinding | null) => void;
  onDraggingChange: (isDragging: boolean) => void;
}) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `task-${task.id}`,
    data: { type: "task", taskId: task.id },
  });
  const binding = useMemo<TaskCardDragBinding>(
    () => ({
      attributes,
      listeners,
      setNodeRef,
      isDragging,
    }),
    [attributes, isDragging, listeners, setNodeRef],
  );

  useLayoutEffect(() => {
    onBindingChange(binding);
    return () => onBindingChange(null);
  }, [binding, onBindingChange]);

  useEffect(() => {
    onDraggingChange(isDragging);
  }, [isDragging, onDraggingChange]);

  return null;
}

export const TaskCardView = memo(function TaskCardView(
  props: TaskCardViewProps,
) {
  const { setNodeRef: setDropRef, isOver } = useDroppable({
    id: `${props.isOverlay ? "overlay" : "card"}-target-${props.task.id}`,
    disabled: props.isOverlay,
    data: {
      acceptsTasks: true,
      columnId: props.task.column,
      rowId: props.task.row,
      before: props.task.id,
    },
  });
  const [dragArmed, setDragArmed] = useState(false);
  const [dragBinding, setDragBinding] = useState<TaskCardDragBinding | null>(
    null,
  );
  const pointerInsideRef = useRef(false);
  const pointerPressedRef = useRef(false);
  const draggingRef = useRef(false);
  const handleDraggingChange = useCallback((isDragging: boolean) => {
    draggingRef.current = isDragging;
    if (!isDragging && !pointerInsideRef.current) setDragArmed(false);
  }, []);

  return (
    <>
      {dragArmed ? (
        <TaskCardDraggableBinding
          task={props.task}
          onBindingChange={setDragBinding}
          onDraggingChange={handleDraggingChange}
        />
      ) : null}
      <TaskCardContent
        key={`task-card-content-${props.task.id}`}
        {...props}
        {...(dragBinding || {})}
        setNodeRef={(node) => {
          setDropRef(node);
          dragBinding?.setNodeRef?.(node);
        }}
        style={
          isOver ? { borderTop: "3px solid var(--accent-primary)" } : undefined
        }
        onPointerEnter={() => {
          pointerInsideRef.current = true;
          setDragArmed(true);
        }}
        onPointerLeave={() => {
          pointerInsideRef.current = false;
          if (!pointerPressedRef.current && !draggingRef.current)
            setDragArmed(false);
        }}
        onPointerDownCapture={() => {
          pointerPressedRef.current = true;
          if (!dragArmed) {
            // На сенсорном экране pointerdown приходит непосредственно перед
            // touchstart. Подключаем ленивую drag-привязку синхронно, чтобы
            // TouchSensor получил это же первое касание и запустил удержание.
            flushSync(() => setDragArmed(true));
          }
        }}
        onPointerUpCapture={() => {
          pointerPressedRef.current = false;
          if (!pointerInsideRef.current && !draggingRef.current)
            setDragArmed(false);
        }}
        onPointerCancelCapture={() => {
          pointerPressedRef.current = false;
          if (!pointerInsideRef.current && !draggingRef.current)
            setDragArmed(false);
        }}
      />
    </>
  );
});

export function QuickTaskComposer({
  title,
  priority,
  saving,
  columnName,
  onTitleChange,
  onPriorityChange,
  onSubmit,
  onCancel,
}: {
  title: string;
  priority: TaskPriority;
  saving: boolean;
  columnName: string;
  onTitleChange: (value: string) => void;
  onPriorityChange: (value: TaskPriority) => void;
  onSubmit: () => void;
  onCancel: () => void;
}) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
      onPointerDown={(event) => event.stopPropagation()}
      className="app-surface-elevated rounded-xl border border-[var(--accent-primary)] p-2 shadow-sm"
    >
      <input
        autoFocus
        value={title}
        onChange={(event) => onTitleChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            onCancel();
          }
        }}
        disabled={saving}
        maxLength={255}
        className="app-input w-full rounded-lg px-3 py-2 text-sm"
        placeholder="Название задачи"
        aria-label={`Название новой задачи в колонке ${columnName}`}
      />
      <div className="mt-2 flex items-center justify-between gap-2">
        <div
          className="flex items-center gap-1"
          role="group"
          aria-label="Приоритет новой задачи"
        >
          {priorityOptions.map((option) => {
            const selected = option.value === priority;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => onPriorityChange(option.value)}
                disabled={saving}
                className={`flex h-6 min-w-6 items-center overflow-hidden rounded-full transition-all duration-200 ease-out disabled:opacity-50 ${
                  selected
                    ? `max-w-28 px-2 shadow-sm ${option.selectedClassName}`
                    : "w-6 max-w-6 justify-center px-0 hover:bg-[var(--surface-tertiary)]"
                }`}
                title={`Приоритет: ${option.label}`}
                aria-label={`Приоритет: ${option.label}`}
                aria-pressed={selected}
              >
                {!selected ? (
                  <span
                    className={`h-3 w-3 shrink-0 rounded-full ${option.dotClassName}`}
                    aria-hidden="true"
                  />
                ) : null}
                {selected ? (
                  <span className="whitespace-nowrap text-[10px] font-semibold leading-none text-white">
                    {option.label}
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={onCancel}
            disabled={saving}
            className="app-icon-button flex h-8 w-8 items-center justify-center rounded-lg disabled:opacity-50"
            title="Отмена"
            aria-label="Отменить создание задачи"
          >
            <X size={14} />
          </button>
          <button
            type="submit"
            disabled={saving || !title.trim()}
            className="app-action-primary flex h-8 w-8 items-center justify-center rounded-lg disabled:opacity-50"
            title="Создать задачу"
            aria-label="Создать задачу"
          >
            {saving ? (
              <Loader2 size={14} className="animate-spin" />
            ) : (
              <Check size={15} />
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
