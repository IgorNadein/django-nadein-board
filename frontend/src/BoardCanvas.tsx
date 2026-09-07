import { useState, useRef, useCallback, useEffect } from "react";
import {
  DndContext,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  pointerWithin,
  closestCorners,
  type CollisionDetection,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  horizontalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import {
  Maximize2,
  Minimize2,
  Copy,
  Archive,
  Pencil,
  Trash2,
  Check,
} from "lucide-react";
import {
  TaskAnchoredMenuPopover,
  BoardColumn,
  BoardColumnGroup,
  BoardSubcolumnHeader,
  BoardTaskCell,
  BoardColumnRowView,
  BoardBaseColumnsView,
  AddColumnCard,
} from "./BoardColumns";
import { QuickTaskComposer, TaskCardView } from "./TaskCard";
import { useTaskBoardScroll } from "./useTaskBoardScroll";
import { buildTaskBoardLayout, taskPlacementKey } from "./boardLayout";
import type { State, TaskCard, TaskPriority } from "./types";
type Props = {
  state: State;
  query: string;
  busy: boolean;
  api: <T>(path: string, method?: string, data?: unknown) => Promise<T>;
  run: (fn: () => Promise<void>) => Promise<void>;
  reload: () => Promise<void>;
  open: (t: TaskCard, tab?: string) => void;
  dialog: (d: { kind: string; data?: Record<string, unknown> }) => void;
};
export default function BoardCanvas({
  state,
  query,
  busy,
  api,
  run,
  reload,
  open,
  dialog,
}: Props) {
  const [wide, setWide] = useState(false),
    [hidden, setHidden] = useState<string[]>([]),
    [menu, setMenu] = useState<number | null>(null),
    [quick, setQuick] = useState<{ column: number; row: number | null } | null>(
      null,
    ),
    [title, setTitle] = useState(""),
    [priority, setPriority] = useState<TaskPriority>("medium"),
    [activeTask, setActiveTask] = useState<TaskCard | null>(null),
    [activeColumn, setActiveColumn] = useState<number | null>(null);
  const [taskMenu, setTaskMenu] = useState<number | null>(null);
  const taskMenuAnchor = useRef<HTMLButtonElement | null>(null),
    taskMenuRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const close = (e: PointerEvent) => {
      if (
        !taskMenuRef.current?.contains(e.target as Node) &&
        !taskMenuAnchor.current?.contains(e.target as Node)
      )
        setTaskMenu(null);
    };
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setTaskMenu(null);
        setWide(false);
      }
    };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", key);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", key);
    };
  }, []);
  const menuTask = state.tasks.find((t) => t.id === taskMenu);
  const menuRef = useRef<HTMLDivElement | null>(null),
    nodes = useRef(new Map<number, HTMLElement>());
  const {
    boardScrollRef,
    startBoardPan,
    moveBoardPan,
    finishBoardPan,
    viewportHeight,
  } = useTaskBoardScroll({
    board: state.board,
    desktopWideMode: wide,
    loading: false,
  });
  const layout = buildTaskBoardLayout(
    state.columns,
    state.rows,
    state.tasks.filter((t) =>
      (t.title + " " + t.description)
        .toLowerCase()
        .includes(query.toLowerCase()),
    ),
  );
  useEffect(() => {
    try {
      setHidden(
        JSON.parse(
          localStorage.getItem(`nb-view-${state.me.id}-${state.board.id}`) ||
            "[]",
        ),
      );
    } catch {
      setHidden([]);
    }
    setQuick(null);
  }, [state.board.id, state.me.id]);
  function toggle(key: string) {
    setHidden((old) => {
      const next = old.includes(key)
        ? old.filter((x) => x !== key)
        : [...old, key];
      localStorage.setItem(
        `nb-view-${state.me.id}-${state.board.id}`,
        JSON.stringify(next),
      );
      return next;
    });
  }
  useEffect(() => {
    const listener = (e: PointerEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node))
        setMenu(null);
    };
    document.addEventListener("pointerdown", listener);
    return () => document.removeEventListener("pointerdown", listener);
  }, []);
  const register = useCallback((id: number, node: HTMLElement | null) => {
    if (node) nodes.current.set(id, node);
    else nodes.current.delete(id);
  }, []);
  function focusColumn(id: number) {
    const container = boardScrollRef.current,
      node = nodes.current.get(id);
    if (container && node)
      container.scrollTo({
        left: Math.max(
          0,
          container.scrollLeft +
            node.getBoundingClientRect().left -
            container.getBoundingClientRect().left -
            12,
        ),
        behavior: "smooth",
      });
  }
  function startQuick(column: number, row: number | null = null) {
    setQuick({ column, row });
    setTitle("");
    setPriority("medium");
    setMenu(null);
  }
  async function saveQuick() {
    if (!quick || !title.trim()) return;
    await run(async () => {
      await api("tasks/", "POST", {
        board: state.board.id,
        column: quick.column,
        row: quick.row,
        title: title.trim(),
        priority,
        position: (state.tasks.length + 1) * 1000,
      });
      setTitle("");
      await reload();
    });
  }
  function composer(column: number, row: number | null) {
    return quick?.column === column && quick.row === row ? (
      <QuickTaskComposer
        title={title}
        priority={priority}
        saving={busy}
        columnName={state.columns.find((c) => c.id === column)?.name || ""}
        onTitleChange={setTitle}
        onPriorityChange={setPriority}
        onSubmit={() => void saveQuick()}
        onCancel={() => setQuick(null)}
      />
    ) : null;
  }
  async function change(t: TaskCard, data: unknown) {
    await api(`tasks/${t.id}/`, "PATCH", data);
    await reload();
  }
  const cards = {
    onOpenTask: open,
    onEditTask: open,
    onDeleteTask: (t: TaskCard) =>
      dialog({ kind: "delete-task", data: { id: t.id } }),
    currentUserId: state.me.id,
    claimingTaskId: busy ? (activeTask?.id ?? null) : null,
    onClaimTask: (t: TaskCard) =>
      void run(() => change(t, { assignee_id: state.me.id })),
    completingTaskId: null,
    onCompleteTask: (t: TaskCard) => {
      void run(async () => {
        const done = layout.leafColumns.find(
          (c) =>
            c.is_done || state.columns.find((p) => p.id === c.parent)?.is_done,
        );
        if (!done) throw new Error("Сначала отметьте финальную колонку.");
        await change(t, { column: done.id, row: null });
      });
    },
    openMenuTaskId: taskMenu,
    onToggleTaskMenu: (id: number, anchor: HTMLButtonElement) => {
      taskMenuAnchor.current = anchor;
      setTaskMenu(taskMenu === id ? null : id);
    },
  };
  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 7 } }),
    useSensor(TouchSensor, {
      activationConstraint: { delay: 220, tolerance: 8 },
    }),
  );
  const collision: CollisionDetection = (args) => {
    const isTask = args.active.data.current?.type === "task";
    const col = state.columns.find(
      (c) => c.id === args.active.data.current?.columnId,
    );
    const filtered = {
      ...args,
      droppableContainers: args.droppableContainers.filter((c) =>
        isTask
          ? Boolean(c.data.current?.acceptsTasks)
          : c.data.current?.type === "column" &&
            state.columns.find((x) => x.id === c.data.current?.columnId)
              ?.parent === col?.parent,
      ),
    };
    const hits = pointerWithin(filtered);
    const cardHits = hits.filter(
      (h) =>
        String(h.id).startsWith("card-target-") &&
        Number(String(h.id).replace("card-target-", "")) !==
          args.active.data.current?.taskId,
    );
    return cardHits.length
      ? cardHits
      : hits.length
        ? hits
        : closestCorners(filtered);
  };
  function drop(e: DragEndEvent) {
    setActiveTask(null);
    setActiveColumn(null);
    if (!e.over || busy) return;
    const type = e.active.data.current?.type;
    if (type === "task") {
      const t = state.tasks.find((t) => t.id === e.active.data.current?.taskId),
        target = e.over.data.current;
      if (t && target?.acceptsTasks && target.before !== t.id)
        void run(async () => {
          await api(`tasks/${t.id}/move/`, "POST", {
            column: target.columnId,
            row: target.rowId ?? null,
            before: target.before ?? null,
          });
          await reload();
        });
    } else if (type === "column" && state.can_manage) {
      const col = state.columns.find(
        (c) => c.id === e.active.data.current?.columnId,
      );
      if (!col) return;
      const siblings = state.columns
        .filter((c) => c.parent === col.parent)
        .sort((a, b) => a.position - b.position || a.id - b.id);
      const from = siblings.findIndex((c) => c.id === col.id),
        to = siblings.findIndex((c) => c.id === e.over?.data.current?.columnId);
      if (to < 0 || from === to) return;
      void run(async () => {
        await api(`boards/${state.board.id}/reorder-columns/`, "POST", {
          parent: col.parent,
          ids: arrayMove(siblings, from, to).map((c) => c.id),
        });
        await reload();
      });
    }
  }
  const edit = (c: State["columns"][number]) => {
    setMenu(null);
    dialog({ kind: "edit-column", data: { ...c } });
  };
  const remove = (c: State["columns"][number]) => {
    setMenu(null);
    dialog({ kind: "delete-column", data: { id: c.id } });
  };
  const addSub = (id: number) => {
    setMenu(null);
    dialog({ kind: "column", data: { parent: id } });
  };
  const addRow = (id: number) => {
    setMenu(null);
    dialog({ kind: "row", data: { column: id } });
  };
  return (
    <div className={`canvas-shell ${wide ? "canvas-wide" : ""}`}>
      <div className="column-navigation">
        <button
          onClick={() =>
            boardScrollRef.current?.scrollTo({ left: 0, behavior: "smooth" })
          }
        >
          Все колонки
        </button>
        {layout.topLevelColumns.map((c) => (
          <button key={c.id} onClick={() => focusColumn(c.id)}>
            <span className="dot" style={{ background: c.color }} />
            {c.name}
          </button>
        ))}
        <span className="grow" />
        <button
          onClick={() => setWide(!wide)}
          title={wide ? "Обычный вид" : "Развернуть доску"}
        >
          {wide ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
        </button>
      </div>
      {menuTask && (
        <TaskAnchoredMenuPopover
          anchorRef={taskMenuAnchor}
          menuRef={taskMenuRef}
          menuWidth={215}
          widthClassName="w-56"
          zIndex={90}
        >
          <button
            className="menu-action"
            onClick={() => {
              open(menuTask);
              setTaskMenu(null);
            }}
          >
            <Pencil size={15} />
            Открыть карточку
          </button>
          <button
            className="menu-action"
            onClick={() =>
              void run(async () => {
                const copy = await api<TaskCard>(
                  `tasks/${menuTask.id}/duplicate/`,
                  "POST",
                );
                setTaskMenu(null);
                await reload();
                open(copy);
              })
            }
          >
            <Copy size={15} />
            Создать копию
          </button>
          <button
            className="menu-action"
            onClick={() => {
              cards.onCompleteTask(menuTask);
              setTaskMenu(null);
            }}
          >
            <Check size={15} />
            Завершить
          </button>
          <button
            className="menu-action"
            onClick={() =>
              void run(async () => {
                await change(menuTask, { is_archived: true });
                setTaskMenu(null);
              })
            }
          >
            <Archive size={15} />В архив
          </button>
          <button
            className="menu-action danger"
            onClick={() => {
              setTaskMenu(null);
              dialog({ kind: "delete-task", data: { id: menuTask.id } });
            }}
          >
            <Trash2 size={15} />
            Удалить
          </button>
        </TaskAnchoredMenuPopover>
      )}
      <DndContext
        sensors={sensors}
        collisionDetection={collision}
        onDragStart={(e) => {
          if (e.active.data.current?.type === "task")
            setActiveTask(
              state.tasks.find((t) => t.id === e.active.data.current?.taskId) ||
                null,
            );
          else setActiveColumn(e.active.data.current?.columnId ?? null);
          setMenu(null);
        }}
        onDragCancel={() => {
          setActiveTask(null);
          setActiveColumn(null);
        }}
        onDragEnd={drop}
      >
        <SortableContext
          items={layout.topLevelColumns.map((c) => `column-${c.id}`)}
          strategy={horizontalListSortingStrategy}
        >
          <div
            ref={boardScrollRef}
            onPointerDownCapture={startBoardPan}
            onPointerMoveCapture={moveBoardPan}
            onPointerUpCapture={finishBoardPan}
            onPointerCancelCapture={finishBoardPan}
            onLostPointerCapture={finishBoardPan}
            onAuxClick={(e) => {
              if (e.button === 1) e.preventDefault();
            }}
            className="tasks-board-scroll min-w-0 overflow-x-auto overflow-y-hidden overscroll-x-contain pb-3 xl:overflow-auto"
          >
            <div className="flex w-auto min-w-max items-stretch gap-3 xl:min-h-full">
              {layout.topLevelColumns.map((column) => {
                const subcolumns =
                    layout.subcolumnsByParent.get(column.id) || [],
                  rows = layout.rowsByColumn.get(column.id) || [],
                  leaves = subcolumns.length ? subcolumns : [column];
                const template = `repeat(${leaves.length}, 18rem)`;
                if (!subcolumns.length && !rows.length)
                  return (
                    <BoardColumn
                      key={column.id}
                      {...cards}
                      column={column}
                      tasks={
                        layout.tasksByPlacement.get(
                          taskPlacementKey(column.id, null),
                        ) || []
                      }
                      onCreateTask={startQuick}
                      columnMenuOpen={menu === column.id && state.can_manage}
                      columnMenuRef={menuRef}
                      onToggleColumnMenu={() =>
                        setMenu(menu === column.id ? null : column.id)
                      }
                      onEditColumn={edit}
                      onDeleteColumn={remove}
                      onCreateSubcolumn={(c) => addSub(c.id)}
                      onCreateRow={(c) => addRow(c.id)}
                      onColumnMount={register}
                      contentVisible={!hidden.includes(`c${column.id}`)}
                      onToggleContentVisibility={() => toggle(`c${column.id}`)}
                      synchronizedColumnDrag={activeColumn !== null}
                      linkedColumnHighlight={activeColumn === column.id}
                      fillAvailableHeight={wide}
                      quickTaskComposer={composer(column.id, null)}
                    />
                  );
                const renderCell = (
                  c: State["columns"][number],
                  rowId: number | null,
                ) => (
                  <BoardTaskCell
                    key={`${c.id}:${rowId}`}
                    {...cards}
                    column={c}
                    rowId={rowId}
                    tasks={
                      layout.tasksByPlacement.get(
                        taskPlacementKey(c.id, rowId),
                      ) || []
                    }
                    linkedColumnHighlight={activeColumn === c.id}
                    synchronizedColumnDrag={activeColumn !== null}
                    fillAvailableHeight={wide && rowId === null}
                    quickTaskComposer={
                      <>
                        {composer(c.id, rowId)}
                        <button
                          className="add-card"
                          onClick={() => startQuick(c.id, rowId)}
                        >
                          + Добавить карточку
                        </button>
                      </>
                    }
                  />
                );
                return (
                  <BoardColumnGroup
                    key={column.id}
                    column={column}
                    tasksCount={layout.columnCounts.get(column.id) || 0}
                    onCreateTask={() => startQuick(leaves[0].id)}
                    onCreateSubcolumn={() => addSub(column.id)}
                    onCreateRow={() => addRow(column.id)}
                    onEditColumn={edit}
                    onDeleteColumn={remove}
                    columnMenuOpen={menu === column.id && state.can_manage}
                    menuLayerOpen={
                      leaves.some((c) => c.id === menu) || column.id === menu
                    }
                    columnMenuRef={menuRef}
                    onToggleColumnMenu={() =>
                      setMenu(menu === column.id ? null : column.id)
                    }
                    onColumnMount={register}
                    contentVisible={!hidden.includes(`c${column.id}`)}
                    onToggleContentVisibility={() => toggle(`c${column.id}`)}
                    subcolumnGridTemplate={template}
                    subcolumnHeaders={
                      <SortableContext
                        items={leaves.map((c) => `column-${c.id}`)}
                        strategy={horizontalListSortingStrategy}
                      >
                        {leaves.map((c) => (
                          <BoardSubcolumnHeader
                            key={c.id}
                            column={c}
                            tasksCount={layout.columnCounts.get(c.id) || 0}
                            sortable={Boolean(c.parent)}
                            onCreateTask={() => startQuick(c.id)}
                            columnMenuOpen={
                              menu === c.id && !!c.parent && state.can_manage
                            }
                            columnMenuRef={menuRef}
                            onToggleColumnMenu={() =>
                              setMenu(menu === c.id ? null : c.id)
                            }
                            onEditColumn={edit}
                            onDeleteColumn={remove}
                            onColumnMount={register}
                            linkedColumnHighlight={activeColumn === c.id}
                            synchronizedColumnDrag={activeColumn !== null}
                          />
                        ))}
                      </SortableContext>
                    }
                  >
                    <BoardBaseColumnsView
                      collapsible={rows.length > 0}
                      tasksCount={leaves.reduce(
                        (n, c) =>
                          n +
                          (layout.tasksByPlacement.get(
                            taskPlacementKey(c.id, null),
                          )?.length || 0),
                        0,
                      )}
                      gridTemplateColumns={template}
                      expanded={!hidden.includes(`b${column.id}`)}
                      onToggle={() => toggle(`b${column.id}`)}
                      hasFollowingSection={rows.length > 0}
                    >
                      {leaves.map((c) => renderCell(c, null))}
                    </BoardBaseColumnsView>
                    {rows.map((r, i) => (
                      <BoardColumnRowView
                        key={r.id}
                        row={{
                          ...r,
                          tasks_count: state.tasks.filter((t) => t.row === r.id)
                            .length,
                        }}
                        gridTemplateColumns={template}
                        onCreateTask={() => startQuick(leaves[0].id, r.id)}
                        onEdit={() =>
                          dialog({ kind: "edit-row", data: { ...r } })
                        }
                        onDelete={() =>
                          dialog({ kind: "delete-row", data: { id: r.id } })
                        }
                        expanded={!hidden.includes(`r${r.id}`)}
                        onToggle={() => toggle(`r${r.id}`)}
                        hasFollowingSection={i < rows.length - 1}
                      >
                        {leaves.map((c) => renderCell(c, r.id))}
                      </BoardColumnRowView>
                    ))}
                  </BoardColumnGroup>
                );
              })}
              {state.can_manage && (
                <AddColumnCard
                  onClick={() => dialog({ kind: "column" })}
                  viewportHeight={viewportHeight}
                />
              )}
            </div>
          </div>
        </SortableContext>
        <DragOverlay>
          {activeTask && (
            <div style={{ width: 280, pointerEvents: "none" }}>
              <TaskCardView
                isOverlay
                task={activeTask}
                onOpen={() => {}}
                onEdit={() => {}}
                onDelete={() => {}}
                claiming={false}
                completing={false}
                onClaim={() => {}}
                onComplete={() => {}}
                menuOpen={false}
                onToggleTaskMenu={() => {}}
              />
            </div>
          )}
        </DragOverlay>
      </DndContext>
      <div className="pan-hint">
        Зажмите колёсико мыши, чтобы перемещаться по доске · Заголовки колонок
        можно перетаскивать · Карточки сгруппированы по срочности
      </div>
    </div>
  );
}
