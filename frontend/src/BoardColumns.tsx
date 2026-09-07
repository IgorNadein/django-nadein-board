import {
  useState,
  useEffect,
  useCallback,
  useRef,
  type RefObject,
  type ReactNode,
  type CSSProperties,
} from "react";
import { createPortal } from "react-dom";
import { useDroppable } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  Plus,
  ChevronDown,
  ChevronRight,
  Eye,
  EyeOff,
  Pencil,
  Trash2,
  Rows3,
  Columns3,
  GripVertical,
} from "lucide-react";
import type { TaskCard, TaskColumn, TaskColumnRow } from "./types";
import { TaskCardView } from "./TaskCard";
type TaskViewTarget = "attachments" | "comments";
const TASK_BOARD_LAYERS = {
  draggedItem: 20,
  columnMenu: 60,
  pagePopover: 90,
  modalPopover: 110,
};
function TaskAddMenuPopover({
  anchorRef,
  menuRef,
  placement,
  children,
}: {
  anchorRef: RefObject<HTMLDivElement | null>;
  menuRef: RefObject<HTMLDivElement | null>;
  placement: "top" | "bottom";
  children: ReactNode;
}) {
  const [position, setPosition] = useState<{
    left: number;
    top?: number;
    bottom?: number;
    maxHeight: number;
  } | null>(null);

  useEffect(() => {
    const updatePosition = () => {
      const anchor = anchorRef.current;
      if (!anchor) return;

      const rect = anchor.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const menuWidth = 240;
      const viewportGap = 8;
      const menuGap = 8;
      const preferredLeft =
        placement === "bottom" ? rect.right - menuWidth : rect.left;
      const left = Math.min(
        Math.max(viewportGap, preferredLeft),
        Math.max(viewportGap, viewportWidth - menuWidth - viewportGap),
      );

      if (placement === "bottom") {
        setPosition({
          left,
          bottom: viewportHeight - rect.top + menuGap,
          maxHeight: Math.max(96, rect.top - viewportGap - menuGap),
        });
        return;
      }

      setPosition({
        left,
        top: rect.bottom + menuGap,
        maxHeight: Math.max(
          96,
          viewportHeight - rect.bottom - viewportGap - menuGap,
        ),
      });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [anchorRef, placement]);

  if (!position || typeof document === "undefined") return null;

  return createPortal(
    <div
      ref={menuRef}
      className="app-menu fixed w-60 overflow-y-auto overscroll-contain rounded-xl p-1.5 shadow-xl"
      style={{
        left: position.left,
        top: position.top,
        bottom: position.bottom,
        maxHeight: position.maxHeight,
        zIndex: TASK_BOARD_LAYERS.modalPopover,
      }}
    >
      {children}
    </div>,
    document.body,
  );
}

export function TaskAnchoredMenuPopover({
  anchorRef,
  menuRef,
  menuWidth = 176,
  widthClassName = "w-44",
  zIndex = TASK_BOARD_LAYERS.pagePopover,
  children,
}: {
  anchorRef: RefObject<HTMLButtonElement | null>;
  menuRef: RefObject<HTMLDivElement | null>;
  menuWidth?: number;
  widthClassName?: string;
  zIndex?: number;
  children: ReactNode;
}) {
  const [position, setPosition] = useState<{
    left: number;
    top?: number;
    bottom?: number;
    maxHeight: number;
  } | null>(null);

  useEffect(() => {
    const updatePosition = () => {
      const anchor = anchorRef.current;
      if (!anchor) return;

      const rect = anchor.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const viewportGap = 8;
      const menuGap = 6;
      const spaceBelow = viewportHeight - rect.bottom - viewportGap - menuGap;
      const spaceAbove = rect.top - viewportGap - menuGap;
      const placeBelow = spaceBelow >= 96 || spaceBelow >= spaceAbove;
      const left = Math.min(
        Math.max(viewportGap, rect.right - menuWidth),
        Math.max(viewportGap, viewportWidth - menuWidth - viewportGap),
      );

      setPosition(
        placeBelow
          ? {
              left,
              top: rect.bottom + menuGap,
              maxHeight: Math.max(72, spaceBelow),
            }
          : {
              left,
              bottom: viewportHeight - rect.top + menuGap,
              maxHeight: Math.max(72, spaceAbove),
            },
      );
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [anchorRef, menuWidth]);

  if (!position || typeof document === "undefined") return null;

  return createPortal(
    <div
      ref={menuRef}
      role="menu"
      className={`app-menu fixed ${widthClassName} overflow-y-auto overscroll-contain rounded-lg p-1.5 shadow-xl`}
      style={{
        left: position.left,
        top: position.top,
        bottom: position.bottom,
        maxHeight: position.maxHeight,
        zIndex,
      }}
    >
      {children}
    </div>,
    document.body,
  );
}

type TaskColumnCardsProps = {
  tasks: TaskCard[];
  onOpenTask: (task: TaskCard, target?: TaskViewTarget) => void;
  onEditTask: (task: TaskCard) => void;
  onDeleteTask: (task: TaskCard) => void;
  currentUserId?: number;
  claimingTaskId: number | null;
  onClaimTask: (task: TaskCard) => void;
  completingTaskId: number | null;
  onCompleteTask: (task: TaskCard) => void;
  openMenuTaskId: number | null;
  onToggleTaskMenu: (taskId: number, anchor: HTMLButtonElement) => void;
  quickTaskComposer?: ReactNode;
};

function TaskColumnCards({
  tasks,
  onOpenTask,
  onEditTask,
  onDeleteTask,
  currentUserId,
  claimingTaskId,
  onClaimTask,
  completingTaskId,
  onCompleteTask,
  openMenuTaskId,
  onToggleTaskMenu,
  quickTaskComposer,
}: TaskColumnCardsProps) {
  return (
    <>
      {quickTaskComposer}
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskCardView
            key={task.id}
            task={task}
            onOpen={onOpenTask}
            onEdit={onEditTask}
            onDelete={onDeleteTask}
            currentUserId={currentUserId}
            claiming={claimingTaskId === task.id}
            onClaim={onClaimTask}
            completing={completingTaskId === task.id}
            onComplete={onCompleteTask}
            menuOpen={openMenuTaskId === task.id}
            onToggleTaskMenu={onToggleTaskMenu}
          />
        ))
      ) : quickTaskComposer ? null : (
        <div className="app-surface rounded-xl border border-dashed border-[var(--border-subtle)] px-3 py-5 text-center">
          <p className="app-text-muted text-xs">Нет задач</p>
        </div>
      )}
    </>
  );
}

export function BoardColumn({
  column,
  tasks,
  displayTasksCount,
  onCreateTask,
  onOpenTask,
  onEditTask,
  onDeleteTask,
  currentUserId,
  claimingTaskId,
  onClaimTask,
  completingTaskId,
  onCompleteTask,
  openMenuTaskId,
  onToggleTaskMenu,
  columnMenuOpen,
  columnMenuRef,
  onToggleColumnMenu,
  onEditColumn,
  onDeleteColumn,
  onCreateSubcolumn,
  onCreateRow,
  onColumnMount,
  contentVisible = true,
  onToggleContentVisibility,
  linkedColumnHighlight = false,
  synchronizedColumnDrag = false,
  fillAvailableHeight = false,
  quickTaskComposer,
}: {
  column: TaskColumn;
  tasks: TaskCard[];
  displayTasksCount?: number;
  onCreateTask: (columnId: number, rowId: number | null) => void;
  onOpenTask: (task: TaskCard, target?: TaskViewTarget) => void;
  onEditTask: (task: TaskCard) => void;
  onDeleteTask: (task: TaskCard) => void;
  currentUserId?: number;
  claimingTaskId: number | null;
  onClaimTask: (task: TaskCard) => void;
  completingTaskId: number | null;
  onCompleteTask: (task: TaskCard) => void;
  openMenuTaskId: number | null;
  onToggleTaskMenu: (taskId: number, anchor: HTMLButtonElement) => void;
  columnMenuOpen: boolean;
  columnMenuRef: RefObject<HTMLDivElement | null>;
  onToggleColumnMenu: () => void;
  onEditColumn: (column: TaskColumn) => void;
  onDeleteColumn: (column: TaskColumn) => void;
  onCreateSubcolumn: (column: TaskColumn) => void;
  onCreateRow?: (column: TaskColumn) => void;
  onColumnMount: (columnId: number, node: HTMLElement | null) => void;
  contentVisible?: boolean;
  onToggleContentVisibility?: () => void;
  linkedColumnHighlight?: boolean;
  synchronizedColumnDrag?: boolean;
  fillAvailableHeight?: boolean;
  quickTaskComposer?: ReactNode;
}) {
  const {
    attributes,
    listeners,
    setActivatorNodeRef,
    setNodeRef,
    transform,
    transition,
    isDragging,
    isOver,
  } = useSortable({
    id: `column-${column.id}`,
    data: {
      type: "column",
      columnId: column.id,
      rowId: null,
      acceptsTasks: true,
    },
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging
      ? TASK_BOARD_LAYERS.draggedItem
      : columnMenuOpen
        ? TASK_BOARD_LAYERS.columnMenu
        : undefined,
  };
  const setColumnNodeRef = useCallback(
    (node: HTMLElement | null) => {
      setNodeRef(node);
      onColumnMount(column.id, node);
    },
    [column.id, onColumnMount, setNodeRef],
  );
  const columnBorderClass =
    linkedColumnHighlight || (isOver && !synchronizedColumnDrag)
      ? "border-[var(--accent-primary)]"
      : "border-[var(--border-subtle)]";

  return (
    <section
      ref={setColumnNodeRef}
      style={style}
      className={`flex ${
        contentVisible ? "tasks-mobile-lane-viewport min-h-[28rem]" : ""
      } w-[18rem] min-w-[18rem] flex-col transition xl:max-h-none ${
        fillAvailableHeight ? "xl:min-h-full" : ""
      } ${isDragging ? "opacity-70" : ""}`}
    >
      <div
        className={`tasks-board-column-header-sticky ${contentVisible ? "" : "tasks-board-column-header-sticky-standalone"}`}
      >
        <div
          className={`tasks-board-column-header app-surface flex min-h-16 items-center justify-between gap-3 rounded-xl px-3 py-3 transition ${columnBorderClass} ${
            isDragging ? "shadow-xl" : ""
          }`}
        >
          <div
            ref={setActivatorNodeRef}
            className="min-w-0 flex-1 cursor-grab overflow-hidden active:cursor-grabbing"
            title="Перетащите, чтобы изменить порядок колонок"
            {...attributes}
            {...listeners}
          >
            <div className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: column.color || "#38bdf8" }}
              />
              <h2 className="min-w-0 truncate text-sm font-semibold text-[var(--foreground)]">
                {column.name}
              </h2>
            </div>
            <p className="app-text-muted mt-0.5 text-xs">
              {displayTasksCount ?? tasks.length} задач
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={(event) => {
                event.stopPropagation();
                onToggleContentVisibility?.();
              }}
              className="app-icon-button flex h-8 w-8 items-center justify-center rounded-lg"
              title={
                contentVisible
                  ? "Скрыть содержимое колонки"
                  : "Показать содержимое колонки"
              }
              aria-label={
                contentVisible
                  ? `Скрыть содержимое колонки ${column.name}`
                  : `Показать содержимое колонки ${column.name}`
              }
              aria-pressed={!contentVisible}
            >
              {contentVisible ? <Eye size={15} /> : <EyeOff size={15} />}
            </button>
            <button
              type="button"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={(event) => {
                event.stopPropagation();
                onCreateTask(column.id, null);
              }}
              className="app-icon-button flex h-8 w-8 items-center justify-center rounded-lg"
              title="Создать задачу"
              aria-label="Создать задачу"
            >
              <Plus size={16} />
            </button>
            <div
              ref={columnMenuOpen ? columnMenuRef : null}
              className="relative"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={onToggleColumnMenu}
                className="app-icon-button flex h-8 w-8 items-center justify-center rounded-lg"
                title="Действия с колонкой"
                aria-label={`Действия с колонкой ${column.name}`}
                aria-expanded={columnMenuOpen}
                aria-haspopup="menu"
              >
                <ChevronDown
                  size={14}
                  className={`transition-transform ${columnMenuOpen ? "" : "-rotate-90"}`}
                />
              </button>
              {columnMenuOpen ? (
                <div className="app-menu absolute right-0 top-full z-30 mt-2 w-44 rounded-lg p-1.5">
                  {!column.parent ? (
                    <>
                      <button
                        type="button"
                        onClick={() => onCreateSubcolumn(column)}
                        className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition hover:bg-[var(--surface-secondary)]"
                      >
                        <Plus size={14} className="app-text-muted" />
                        Добавить подколонку
                      </button>
                      <button
                        type="button"
                        onClick={() => onCreateRow?.(column)}
                        className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition hover:bg-[var(--surface-secondary)]"
                      >
                        <Rows3 size={14} className="app-text-muted" />
                        Добавить дорожку
                      </button>
                    </>
                  ) : null}
                  <button
                    type="button"
                    onClick={() => onEditColumn(column)}
                    className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition hover:bg-[var(--surface-secondary)]"
                  >
                    <Pencil size={14} className="app-text-muted" />
                    Редактировать
                  </button>
                  <button
                    type="button"
                    onClick={() => onDeleteColumn(column)}
                    className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-[var(--danger-foreground)] transition hover:bg-[var(--danger-soft)]"
                  >
                    <Trash2 size={14} />
                    Удалить
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      {contentVisible ? (
        <div
          className={`tasks-mobile-lane-scroll tasks-column-scroll mt-2 min-h-0 flex-1 space-y-2 overflow-y-auto rounded-xl border bg-[var(--surface-primary)] p-3 transition xl:mt-0 xl:flex-none xl:overflow-visible ${columnBorderClass}`}
        >
          <TaskColumnCards
            tasks={tasks}
            onOpenTask={onOpenTask}
            onEditTask={onEditTask}
            onDeleteTask={onDeleteTask}
            currentUserId={currentUserId}
            claimingTaskId={claimingTaskId}
            onClaimTask={onClaimTask}
            completingTaskId={completingTaskId}
            onCompleteTask={onCompleteTask}
            openMenuTaskId={openMenuTaskId}
            onToggleTaskMenu={onToggleTaskMenu}
            quickTaskComposer={quickTaskComposer}
          />
        </div>
      ) : null}
    </section>
  );
}

type BoardSubcolumnHeaderProps = {
  column: TaskColumn;
  tasksCount: number;
  sortable: boolean;
  onCreateTask: () => void;
  columnMenuOpen: boolean;
  columnMenuRef: RefObject<HTMLDivElement | null>;
  onToggleColumnMenu: () => void;
  onEditColumn: (column: TaskColumn) => void;
  onDeleteColumn: (column: TaskColumn) => void;
  onColumnMount: (columnId: number, node: HTMLElement | null) => void;
  linkedColumnHighlight: boolean;
  synchronizedColumnDrag: boolean;
};

export function BoardSubcolumnHeader({
  column,
  tasksCount,
  sortable,
  onCreateTask,
  columnMenuOpen,
  columnMenuRef,
  onToggleColumnMenu,
  onEditColumn,
  onDeleteColumn,
  onColumnMount,
  linkedColumnHighlight,
  synchronizedColumnDrag,
}: BoardSubcolumnHeaderProps) {
  const {
    attributes,
    listeners,
    setActivatorNodeRef,
    setNodeRef,
    transform,
    transition,
    isDragging,
    isOver,
  } = useSortable({
    id: `column-${column.id}`,
    data: {
      type: "column",
      columnId: column.id,
      acceptsTasks: true,
    },
    disabled: !sortable,
  });
  const setHeaderNodeRef = useCallback(
    (node: HTMLElement | null) => {
      setNodeRef(node);
      if (sortable) onColumnMount(column.id, node);
    },
    [column.id, onColumnMount, setNodeRef, sortable],
  );
  const columnBorderClass =
    linkedColumnHighlight || (isOver && !synchronizedColumnDrag)
      ? "border-[var(--accent-primary)]"
      : "border-[var(--border-subtle)]";

  return (
    <section
      ref={setHeaderNodeRef}
      style={{
        transform:
          sortable && synchronizedColumnDrag && transform
            ? CSS.Transform.toString({ ...transform, y: 0 })
            : undefined,
        transition: sortable && synchronizedColumnDrag ? transition : undefined,
        zIndex: isDragging
          ? TASK_BOARD_LAYERS.draggedItem
          : columnMenuOpen
            ? TASK_BOARD_LAYERS.columnMenu
            : undefined,
      }}
      className={`flex w-full min-w-0 flex-col transition ${isDragging ? "opacity-70" : ""}`}
    >
      <div
        className={`tasks-board-subcolumn-header flex min-h-16 items-center justify-between gap-3 rounded-xl border bg-[var(--surface-primary)] px-3 py-3 shadow-sm transition ${columnBorderClass} ${
          isDragging ? "shadow-xl" : ""
        }`}
      >
        <div
          ref={setActivatorNodeRef}
          className={`min-w-0 flex-1 overflow-hidden ${
            sortable ? "cursor-grab active:cursor-grabbing" : ""
          }`}
          title={
            sortable
              ? "Перетащите, чтобы изменить порядок подколонок"
              : undefined
          }
          {...(sortable ? attributes : {})}
          {...(sortable ? listeners : {})}
        >
          <div className="flex items-center gap-2">
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-full"
              style={{ backgroundColor: column.color || "#38bdf8" }}
            />
            <h2 className="min-w-0 truncate text-sm font-semibold text-[var(--foreground)]">
              {column.name}
            </h2>
          </div>
          <p className="app-text-muted mt-0.5 text-xs">{tasksCount} задач</p>
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={(event) => {
              event.stopPropagation();
              onCreateTask();
            }}
            className="app-icon-button flex h-8 w-8 items-center justify-center rounded-lg"
            title="Создать задачу"
            aria-label="Создать задачу"
          >
            <Plus size={16} />
          </button>
          {sortable ? (
            <div
              ref={columnMenuOpen ? columnMenuRef : null}
              className="relative"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={onToggleColumnMenu}
                className="app-icon-button flex h-8 w-8 items-center justify-center rounded-lg"
                title="Действия с подколонкой"
                aria-label={`Действия с подколонкой ${column.name}`}
                aria-expanded={columnMenuOpen}
                aria-haspopup="menu"
              >
                <ChevronDown
                  size={14}
                  className={`transition-transform ${columnMenuOpen ? "" : "-rotate-90"}`}
                />
              </button>
              {columnMenuOpen ? (
                <div className="app-menu absolute right-0 top-full z-30 mt-2 w-44 rounded-lg p-1.5">
                  <button
                    type="button"
                    onClick={() => onEditColumn(column)}
                    className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition hover:bg-[var(--surface-secondary)]"
                  >
                    <Pencil size={14} className="app-text-muted" />
                    Редактировать
                  </button>
                  <button
                    type="button"
                    onClick={() => onDeleteColumn(column)}
                    className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-[var(--danger-foreground)] transition hover:bg-[var(--danger-soft)]"
                  >
                    <Trash2 size={14} />
                    Удалить
                  </button>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

type BoardTaskCellProps = TaskColumnCardsProps & {
  column: TaskColumn;
  rowId: number | null;
  linkedColumnHighlight: boolean;
  synchronizedColumnDrag: boolean;
  fillAvailableHeight: boolean;
  embeddedInMobileLane?: boolean;
};

export function BoardTaskCell({
  column,
  rowId,
  linkedColumnHighlight,
  synchronizedColumnDrag,
  fillAvailableHeight,
  embeddedInMobileLane = false,
  ...cardsProps
}: BoardTaskCellProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: `task-zone-${column.id}-row-${rowId ?? "base"}`,
    data: {
      type: "task-zone",
      columnId: column.id,
      rowId,
      acceptsTasks: true,
    },
  });
  const columnBorderClass =
    linkedColumnHighlight || (isOver && !synchronizedColumnDrag)
      ? "border-[var(--accent-primary)]"
      : "border-[var(--border-subtle)]";

  return (
    <section
      ref={setNodeRef}
      className={`flex w-full min-w-0 flex-col transition ${
        embeddedInMobileLane
          ? ""
          : `tasks-mobile-lane-viewport ${rowId ? "min-h-0" : "min-h-[28rem]"}`
      } xl:w-full ${fillAvailableHeight ? "xl:min-h-full" : ""}`}
    >
      <div
        className={`${embeddedInMobileLane ? "" : "tasks-mobile-lane-scroll overflow-y-auto xl:flex-none"} tasks-column-scroll min-h-0 flex-1 space-y-2 rounded-xl border bg-[var(--surface-primary)] p-3 transition xl:overflow-visible ${columnBorderClass}`}
      >
        <TaskColumnCards {...cardsProps} />
      </div>
    </section>
  );
}

export function BoardColumnGroup({
  column,
  tasksCount,
  children,
  onCreateTask,
  onCreateSubcolumn,
  onCreateRow,
  onEditColumn,
  onDeleteColumn,
  columnMenuOpen,
  menuLayerOpen,
  columnMenuRef,
  onToggleColumnMenu,
  onColumnMount,
  contentVisible,
  onToggleContentVisibility,
  subcolumnHeaders,
  subcolumnGridTemplate,
}: {
  column: TaskColumn;
  tasksCount: number;
  children: ReactNode;
  onCreateTask: () => void;
  onCreateSubcolumn: () => void;
  onCreateRow: () => void;
  onEditColumn: (column: TaskColumn) => void;
  onDeleteColumn: (column: TaskColumn) => void;
  columnMenuOpen: boolean;
  menuLayerOpen: boolean;
  columnMenuRef: RefObject<HTMLDivElement | null>;
  onToggleColumnMenu: () => void;
  onColumnMount: (columnId: number, node: HTMLElement | null) => void;
  contentVisible: boolean;
  onToggleContentVisibility: () => void;
  subcolumnHeaders: ReactNode;
  subcolumnGridTemplate: string;
}) {
  const {
    attributes,
    listeners,
    setActivatorNodeRef,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: `column-${column.id}`,
    data: { type: "column", columnId: column.id, acceptsTasks: false },
  });
  const setGroupNodeRef = useCallback(
    (node: HTMLElement | null) => {
      setNodeRef(node);
      onColumnMount(column.id, node);
    },
    [column.id, onColumnMount, setNodeRef],
  );

  return (
    <section
      ref={setGroupNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging
          ? TASK_BOARD_LAYERS.draggedItem
          : menuLayerOpen
            ? TASK_BOARD_LAYERS.columnMenu
            : undefined,
      }}
      className={`tasks-board-column-group flex min-w-max flex-col ${isDragging ? "opacity-70" : ""}`}
    >
      <div className="tasks-board-group-header-sticky">
        <div className="tasks-board-column-header app-surface flex min-h-16 items-center justify-between gap-3 rounded-xl px-3 py-3">
          <div
            ref={setActivatorNodeRef}
            className="min-w-0 flex-1 cursor-grab active:cursor-grabbing"
            title="Перетащите, чтобы изменить порядок колонок"
            {...attributes}
            {...listeners}
          >
            <div className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: column.color || "#38bdf8" }}
              />
              <h2 className="min-w-0 truncate text-sm font-semibold text-[var(--foreground)]">
                {column.name}
              </h2>
            </div>
            <p className="app-text-muted mt-0.5 text-xs">{tasksCount} задач</p>
          </div>
          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={(event) => {
                event.stopPropagation();
                onToggleContentVisibility();
              }}
              className="app-icon-button flex h-8 w-8 items-center justify-center rounded-lg"
              title={
                contentVisible
                  ? "Скрыть содержимое колонки"
                  : "Показать содержимое колонки"
              }
              aria-label={
                contentVisible
                  ? `Скрыть содержимое колонки ${column.name}`
                  : `Показать содержимое колонки ${column.name}`
              }
              aria-pressed={!contentVisible}
            >
              {contentVisible ? <Eye size={15} /> : <EyeOff size={15} />}
            </button>
            <button
              type="button"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={(event) => {
                event.stopPropagation();
                onCreateTask();
              }}
              className="app-icon-button flex h-8 w-8 items-center justify-center rounded-lg"
              title="Создать задачу"
              aria-label="Создать задачу"
            >
              <Plus size={16} />
            </button>
            <div
              ref={columnMenuOpen ? columnMenuRef : null}
              className="relative"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={onToggleColumnMenu}
                className="app-icon-button flex h-8 w-8 items-center justify-center rounded-lg"
                title="Действия с колонкой"
                aria-label={`Действия с колонкой ${column.name}`}
                aria-expanded={columnMenuOpen}
                aria-haspopup="menu"
              >
                <ChevronDown
                  size={14}
                  className={`transition-transform ${columnMenuOpen ? "" : "-rotate-90"}`}
                />
              </button>
              {columnMenuOpen ? (
                <div className="app-menu absolute right-0 top-full z-30 mt-2 w-48 rounded-lg p-1.5">
                  <button
                    type="button"
                    onClick={onCreateSubcolumn}
                    className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition hover:bg-[var(--surface-secondary)]"
                  >
                    <Plus size={14} className="app-text-muted" />
                    Добавить подколонку
                  </button>
                  <button
                    type="button"
                    onClick={onCreateRow}
                    className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition hover:bg-[var(--surface-secondary)]"
                  >
                    <Rows3 size={14} className="app-text-muted" />
                    Добавить дорожку
                  </button>
                  <button
                    type="button"
                    onClick={() => onEditColumn(column)}
                    className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition hover:bg-[var(--surface-secondary)]"
                  >
                    <Pencil size={14} className="app-text-muted" />
                    Редактировать
                  </button>
                  <button
                    type="button"
                    onClick={() => onDeleteColumn(column)}
                    className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-[var(--danger-foreground)] transition hover:bg-[var(--danger-soft)]"
                  >
                    <Trash2 size={14} />
                    Удалить
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        {contentVisible ? (
          <div className="tasks-board-subcolumn-header-surface relative mt-2 w-max min-w-full rounded-t-xl border border-b-0 border-[var(--border-subtle)] bg-[var(--surface-secondary)] p-2">
            <div
              className="tasks-board-subcolumn-header-row grid w-max min-w-0 gap-2"
              style={{ gridTemplateColumns: subcolumnGridTemplate }}
            >
              {subcolumnHeaders}
            </div>
          </div>
        ) : null}
      </div>
      {contentVisible ? (
        <div className="tasks-board-column-content flex w-auto min-w-max flex-col gap-2 rounded-b-xl border border-t-0 border-[var(--border-subtle)] bg-[var(--surface-secondary)] px-2 pb-2">
          {children}
        </div>
      ) : null}
    </section>
  );
}

export function BoardColumnRowView({
  row,
  children,
  gridTemplateColumns,
  onCreateTask,
  onEdit,
  onDelete,
  expanded,
  onToggle,
  hasFollowingSection,
}: {
  row: TaskColumnRow;
  children: ReactNode;
  gridTemplateColumns: string;
  onCreateTask: () => void;
  onEdit: () => void;
  onDelete: () => void;
  expanded: boolean;
  onToggle: () => void;
  hasFollowingSection: boolean;
}) {
  return (
    <section
      className={`tasks-board-content-section min-w-0 ${
        hasFollowingSection ? "tasks-board-content-section-continuous" : ""
      }`}
    >
      <div
        className={`tasks-board-lane-header flex items-center justify-between gap-3 px-1 ${expanded ? "mb-2 xl:mb-0 xl:pb-2" : ""}`}
      >
        <button
          type="button"
          onClick={onToggle}
          className="flex min-w-0 flex-1 items-center gap-2 rounded-lg py-1 text-left"
          aria-expanded={expanded}
        >
          <ChevronRight
            size={14}
            className={`app-text-muted shrink-0 transition-transform ${expanded ? "rotate-90" : ""}`}
          />
          <span
            className="h-2 w-2 shrink-0 rounded-full"
            style={{ backgroundColor: row.color || "#64748b" }}
          />
          <h3 className="truncate text-xs font-semibold text-[var(--foreground)]">
            {row.name}
          </h3>
          <span className="app-badge rounded-full px-1.5 py-0.5 text-[10px] font-semibold">
            {row.tasks_count || 0}
          </span>
        </button>
        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            onClick={onCreateTask}
            className="app-icon-button flex h-7 w-7 items-center justify-center rounded-lg"
            title="Создать задачу в дорожке"
            aria-label={`Создать задачу в дорожке ${row.name}`}
          >
            <Plus size={14} />
          </button>
          <button
            type="button"
            onClick={onEdit}
            className="app-icon-button flex h-7 w-7 items-center justify-center rounded-lg"
            title="Редактировать дорожку"
            aria-label={`Редактировать дорожку ${row.name}`}
          >
            <Pencil size={14} />
          </button>
          <button
            type="button"
            onClick={onDelete}
            className="app-icon-button flex h-7 w-7 items-center justify-center rounded-lg text-[var(--danger-foreground)]"
            title="Удалить дорожку"
            aria-label={`Удалить дорожку ${row.name}`}
          >
            <Trash2 size={14} />
          </button>
        </div>
      </div>
      {expanded ? (
        <div
          className="grid w-max min-w-0 gap-2"
          style={{ gridTemplateColumns }}
        >
          {children}
        </div>
      ) : null}
    </section>
  );
}

export function BoardBaseColumnsView({
  collapsible,
  tasksCount,
  headers,
  children,
  gridTemplateColumns,
  expanded,
  onToggle,
  hasFollowingSection,
}: {
  collapsible: boolean;
  tasksCount: number;
  headers?: ReactNode;
  children: ReactNode;
  gridTemplateColumns: string;
  expanded: boolean;
  onToggle: () => void;
  hasFollowingSection: boolean;
}) {
  return (
    <section
      className={`tasks-board-content-section min-w-0 ${
        hasFollowingSection ? "tasks-board-content-section-continuous" : ""
      }`}
    >
      {headers ? (
        <div
          className="grid w-max min-w-0 gap-2"
          style={{ gridTemplateColumns }}
        >
          {headers}
        </div>
      ) : null}
      {collapsible ? (
        <button
          type="button"
          onClick={onToggle}
          className={`tasks-board-lane-header flex w-full items-center gap-2 rounded-lg px-1 py-1 text-left ${headers ? "mt-2" : ""} ${expanded ? "mb-2 xl:mb-0 xl:pb-2" : ""}`}
          aria-expanded={expanded}
        >
          <ChevronRight
            size={14}
            className={`app-text-muted shrink-0 transition-transform ${expanded ? "rotate-90" : ""}`}
          />
          <span className="text-xs font-semibold text-[var(--foreground)]">
            Без дорожки
          </span>
          <span className="app-badge rounded-full px-1.5 py-0.5 text-[10px] font-semibold">
            {tasksCount}
          </span>
        </button>
      ) : null}
      {!collapsible || expanded ? (
        <div
          className="grid w-max min-w-0 gap-2"
          style={{ gridTemplateColumns }}
        >
          {children}
        </div>
      ) : null}
    </section>
  );
}

export function AddColumnCard({
  onClick,
  viewportHeight,
}: {
  onClick: () => void;
  viewportHeight: number;
}) {
  const cardHeight =
    viewportHeight > 0 ? Math.max(320, viewportHeight - 12) : 448;

  return (
    <button
      type="button"
      onClick={onClick}
      style={
        { "--tasks-add-column-height": `${cardHeight}px` } as CSSProperties
      }
      className="group flex h-16 min-h-16 min-w-[18rem] self-start items-center justify-center gap-2 rounded-xl border border-dashed border-[var(--border-subtle)] bg-[var(--surface-muted)] px-4 text-center transition hover:border-[var(--accent-primary)] hover:bg-[var(--surface-elevated)] xl:sticky xl:top-0 xl:h-[var(--tasks-add-column-height)] xl:flex-col xl:gap-0 xl:p-4"
    >
      <span className="app-selected flex h-9 w-9 items-center justify-center rounded-xl transition group-hover:scale-105 xl:mb-3 xl:h-10 xl:w-10">
        <Plus size={18} />
      </span>
      <span className="text-sm font-semibold text-[var(--foreground)]">
        Добавить колонку
      </span>
    </button>
  );
}
