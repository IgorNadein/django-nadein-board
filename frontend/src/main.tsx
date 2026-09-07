import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { createRoot } from "react-dom/client";
import {
  Kanban,
  Plus,
  Search,
  X,
  RefreshCw,
  Settings2,
  SlidersHorizontal,
  Workflow,
  Archive,
  Rows3,
  ArrowUp,
  ArrowDown,
  Trash2,
  Tag,
  RotateCcw,
} from "lucide-react";
import type {
  Api,
  Board,
  Group,
  State,
  TaskCard,
  TaskColumn,
  TaskAutomationRun,
} from "./types";
import "./style.css";
import BoardCanvas from "./BoardCanvas";
import BoardEditor from "./BoardEditor";
import TaskEditor from "./TaskEditor";
import TaskBoardAvatar from "./TaskBoardAvatar";
import WorkspaceNavigator from "./WorkspaceNavigator";
import TaskAutomationManager from "./TaskAutomationManager";
import { Modal } from "./Modal";
import { getTaskDestinationColumns, getTaskColumnDisplayName } from "./columns";
import { priorityOptions } from "./TaskCard";
import { filterTasks, type TaskFilters } from "./filters";
export type BoardOptions = { apiBase: string; csrfToken: string };
type Dialog = { kind: string; data?: Record<string, unknown> };
export function NadeinBoard({ apiBase, csrfToken }: BoardOptions) {
  const [boards, setBoards] = useState<Board[]>([]),
    [groups, setGroups] = useState<Group[]>([]),
    [selected, setSelected] = useState<number | null>(null),
    [state, setState] = useState<State | null>(null),
    [error, setError] = useState(""),
    [busy, setBusy] = useState(false),
    [task, setTask] = useState<TaskCard | null>(null),
    [taskTab, setTaskTab] = useState<string | undefined>(),
    [dialog, setDialog] = useState<Dialog | null>(null),
    [showFilters, setShowFilters] = useState(false),
    [query, setQuery] = useState(""),
    [view, setView] = useState("board"),
    [updated, setUpdated] = useState("");
  const [filters, setFilters] = useState<TaskFilters>({
    priority: "",
    assignee: "",
    label: "",
    due: "",
    status: "",
  });
  const selectedRef = useRef(selected);
  selectedRef.current = selected;
  const stateRef = useRef(state);
  stateRef.current = state;
  const api: Api = useCallback(
    async <T,>(path: string, method = "GET", data?: unknown): Promise<T> => {
      const form = data instanceof FormData;
      const response = await fetch(apiBase.replace(/\/?$/, "/") + path, {
        method,
        credentials: "same-origin",
        headers: {
          "X-CSRFToken": csrfToken,
          ...(!form ? { "Content-Type": "application/json" } : {}),
        },
        body:
          data === undefined ? undefined : form ? data : JSON.stringify(data),
      });
      if (!response.ok) {
        let message = "";
        try {
          const body = await response.json();
          message =
            typeof body.detail === "string"
              ? body.detail
              : JSON.stringify(body);
        } catch {
          message = response.statusText;
        }
        throw new Error(
          response.status === 403
            ? "Нет доступа. Проверьте вход в аккаунт и права на доску."
            : message || "Не удалось сохранить изменения",
        );
      }
      return response.status === 204 ? (undefined as T) : response.json();
    },
    [apiBase, csrfToken],
  );
  const reload = useCallback(
    async (id = selectedRef.current) => {
      const [all, gs] = await Promise.all([
        api<Board[]>("boards/"),
        api<Group[]>("groups/"),
      ]);
      setBoards(all);
      setGroups(gs);
      if (id && all.some((b) => b.id === id)) {
        const s = await api<State>(`boards/${id}/state/`);
        if (selectedRef.current === id) setState(s);
      } else {
        const first = all.find((b) => !b.is_archived)?.id ?? all[0]?.id ?? null;
        setSelected(first);
        setState(null);
      }
      setUpdated(
        new Date().toLocaleTimeString("ru", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    },
    [api],
  );
  const run = useCallback(async (fn: () => Promise<void>) => {
    setError("");
    setBusy(true);
    try {
      await fn();
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(false);
    }
  }, []);
  useEffect(() => {
    void run(() => reload());
  }, [run, reload]);
  useEffect(() => {
    let active = true;
    if (selected)
      api<State>(`boards/${selected}/state/`)
        .then((s) => {
          if (active) setState(s);
        })
        .catch((e) => {
          if (active) setError(String(e));
        });
    return () => {
      active = false;
    };
  }, [selected, api]);
  useEffect(() => {
    if (busy || task || dialog) return;
    const timer = setInterval(() => {
      if (document.visibilityState === "visible") void reload().catch(() => {});
    }, 20000);
    return () => clearInterval(timer);
  }, [reload, busy, task, dialog]);
  function select(b: Board) {
    setState(null);
    setSelected(b.id);
    setTask(null);
    setView("board");
    setQuery("");
    setFilters({ priority: "", assignee: "", label: "", due: "", status: "" });
  }
  function open(t: TaskCard, tab?: string) {
    setTask(t);
    setTaskTab(tab);
  }
  const mutate = async (p: string, m: string, d?: unknown) => {
    await api(p, m, d);
    await reload();
  };
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const v = Object.fromEntries(new FormData(e.currentTarget));
    const d = dialog!;
    await run(async () => {
      if (["column", "edit-column"].includes(d.kind)) {
        const data = {
          name: v.name,
          color: v.color,
          is_done: v.is_done === "on",
        };
        await mutate(
          d.kind === "column" ? "columns/" : `columns/${d.data?.id}/`,
          d.kind === "column" ? "POST" : "PATCH",
          d.kind === "column"
            ? {
                ...data,
                board: selected,
                parent: d.data?.parent ?? null,
                position: (state?.columns.length || 0) * 1000,
              }
            : data,
        );
      }
      if (["row", "edit-row"].includes(d.kind)) {
        await mutate(
          d.kind === "row" ? "rows/" : `rows/${d.data?.id}/`,
          d.kind === "row" ? "POST" : "PATCH",
          {
            name: v.name,
            color: v.color,
            ...(d.kind === "row"
              ? {
                  column: d.data?.column,
                  position: (state?.rows.length || 0) * 1000,
                }
              : {}),
          },
        );
      }
      if (d.kind === "delete-row")
        await mutate(`rows/${d.data?.id}/`, "DELETE");
      if (d.kind === "delete-column")
        await mutate(`columns/${d.data?.id}/`, "DELETE");
      if (d.kind === "delete-task") {
        await mutate(`tasks/${d.data?.id}/`, "DELETE");
        setTask(null);
      }
      if (d.kind === "group") {
        const data = {
          name: v.name,
          color: v.color,
          boards: new FormData(e.currentTarget).getAll("boards").map(Number),
        };
        await mutate(
          d.data?.id ? `groups/${d.data.id}/` : "groups/",
          d.data?.id ? "PATCH" : "POST",
          data,
        );
      }
      if (d.kind === "task") {
        const t = await api<TaskCard>("tasks/", "POST", {
          board: selected,
          column: Number(v.column),
          row: null,
          title: v.name,
          description: v.description,
          priority: v.priority,
          due_date: v.due_date || null,
          assignee_id: v.assignee ? Number(v.assignee) : null,
          position: (state?.tasks.length || 0) * 1000,
        });
        await reload();
        open(t);
      }
      setDialog(null);
    });
  }
  const shown = state
      ? filterTasks(state.tasks, query, filters, state.me.id)
      : [],
    archivedTasks = state?.tasks.filter((t) => t.is_archived) || [];
  const names: Record<string, string> = {
    column: "Новая колонка",
    "edit-column": "Настройки колонки",
    row: "Новая дорожка",
    "edit-row": "Настройки дорожки",
    "delete-row": "Удалить дорожку?",
    "delete-column": "Удалить колонку?",
    "delete-task": "Удалить карточку?",
    task: "Новая карточка",
    group: dialog?.data?.id ? "Настройки группы" : "Новая группа",
  };
  return (
    <div className="nb-shell">
      <WorkspaceNavigator
        boards={boards}
        groups={groups}
        selected={selected}
        select={select}
        create={() => setDialog({ kind: "board" })}
        editGroup={(g) =>
          setDialog({ kind: "group", data: g ? { ...g } : undefined })
        }
        api={api}
        reload={reload}
        run={run}
      />
      <main className="nb-main">
        <header>
          <div>
            <span className="eyebrow">
              МОИ ЗАДАЧИ /{" "}
              {state?.board.access_scope === "private"
                ? "ЛИЧНАЯ ДОСКА"
                : "ОБЩАЯ ДОСКА"}
            </span>
            <div className="flex items-center gap-3">
              {state && (
                <TaskBoardAvatar
                  name={state.board.name}
                  src={state.board.avatar}
                  size="lg"
                />
              )}
              <h1>{state?.board.name || "Ваши доски"}</h1>
              {state?.board.is_archived && (
                <span className="task-status">Архив</span>
              )}
            </div>
            <p>
              {state?.board.description ||
                "Всё необходимое для совместной работы над задачами."}
            </p>
          </div>
          <div className="header-actions">
            {state?.can_manage && (
              <button
                className="secondary"
                title="Настройки доски"
                onClick={() => setDialog({ kind: "edit-board" })}
              >
                <Settings2 size={16} />
                <span>Настройки</span>
              </button>
            )}
            <button
              className="secondary"
              title="Обновить доску"
              disabled={busy}
              onClick={() => void run(() => reload())}
            >
              <RefreshCw size={16} className={busy ? "animate-spin" : ""} />
            </button>
            {state && !state.board.is_archived && (
              <button
                className="primary"
                disabled={!getTaskDestinationColumns(state.columns).length}
                onClick={() => setDialog({ kind: "task" })}
              >
                <Plus size={16} />
                Карточка
              </button>
            )}
          </div>
        </header>
        {error && (
          <div role="alert" className="error global-error">
            {error}
            <button onClick={() => setError("")} aria-label="Закрыть ошибку">
              <X size={16} />
            </button>
          </div>
        )}
        {state ? (
          <>
            <div className="toolbar">
              <button
                className={`view-tab ${view === "board" ? "selected" : ""}`}
                onClick={() => setView("board")}
              >
                <Kanban size={16} />
                Доска
                <span>{state.tasks.filter((t) => !t.is_archived).length}</span>
              </button>
              <button
                className={`view-tab ${view === "archive" ? "selected" : ""}`}
                onClick={() => setView("archive")}
              >
                <Archive size={16} />
                Архив<span>{archivedTasks.length}</span>
              </button>
              <label className="search">
                <Search size={16} />
                <input
                  placeholder="Найти карточку…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                {query && (
                  <button title="Очистить поиск" onClick={() => setQuery("")}>
                    <X size={13} />
                  </button>
                )}
              </label>
              <span className="grow" />
              <button
                className={`secondary ${showFilters ? "selected" : ""}`}
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal size={15} />
                Фильтры
                {Object.values(filters).filter(Boolean).length
                  ? ` · ${Object.values(filters).filter(Boolean).length}`
                  : ""}
              </button>
              {state.can_manage && !state.board.is_archived && (
                <>
                  <button
                    className="secondary"
                    onClick={() => setDialog({ kind: "labels" })}
                  >
                    <Tag size={15} />
                    Метки
                  </button>
                  <button
                    className="secondary"
                    onClick={() => setDialog({ kind: "structure" })}
                  >
                    <Rows3 size={15} />
                    Структура
                  </button>
                  <button
                    className="secondary"
                    onClick={() => setDialog({ kind: "automations" })}
                  >
                    <Workflow size={15} />
                    Автоматизации
                  </button>
                </>
              )}
            </div>
            {showFilters && (
              <div className="filter-bar">
                <select
                  aria-label="Фильтр по исполнителю"
                  value={filters.assignee}
                  onChange={(e) =>
                    setFilters({ ...filters, assignee: e.target.value })
                  }
                >
                  <option value="">Все исполнители</option>
                  <option value="me">Мои задачи</option>
                  <option value="none">Без исполнителя</option>
                  {state.users.map((u) => (
                    <option key={u.id} value={u.id}>
                      {u.name}
                    </option>
                  ))}
                </select>
                <select
                  aria-label="Фильтр по приоритету"
                  value={filters.priority}
                  onChange={(e) =>
                    setFilters({ ...filters, priority: e.target.value })
                  }
                >
                  <option value="">Любой приоритет</option>
                  {priorityOptions.map((p) => (
                    <option key={p.value} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </select>
                <select
                  aria-label="Фильтр по метке"
                  value={filters.label}
                  onChange={(e) =>
                    setFilters({ ...filters, label: e.target.value })
                  }
                >
                  <option value="">Все метки</option>
                  {state.labels.map((l) => (
                    <option key={l.id} value={l.id}>
                      {l.name}
                    </option>
                  ))}
                </select>
                <select
                  aria-label="Фильтр по сроку"
                  value={filters.due}
                  onChange={(e) =>
                    setFilters({ ...filters, due: e.target.value })
                  }
                >
                  <option value="">Любой срок</option>
                  <option value="overdue">Просрочены</option>
                  <option value="today">Сегодня</option>
                  <option value="none">Без срока</option>
                </select>
                <select
                  aria-label="Фильтр по статусу"
                  value={filters.status}
                  onChange={(e) =>
                    setFilters({ ...filters, status: e.target.value })
                  }
                >
                  <option value="">Все статусы</option>
                  <option value="open">В работе</option>
                  <option value="done">Завершены</option>
                </select>
                <button
                  className="text-action"
                  onClick={() =>
                    setFilters({
                      priority: "",
                      assignee: "",
                      label: "",
                      due: "",
                      status: "",
                    })
                  }
                >
                  Сбросить
                </button>
              </div>
            )}
            {state.board.is_archived ? (
              <div className="empty">
                <Archive size={38} />
                <h2>Доска в архиве</h2>
                <p>
                  Карточки и файлы сохранены. Восстановите доску, чтобы
                  продолжить работу.
                </p>
                {state.can_manage && (
                  <button
                    className="primary"
                    onClick={() =>
                      void run(() =>
                        mutate(`boards/${selected}/`, "PATCH", {
                          is_archived: false,
                        }),
                      )
                    }
                  >
                    <RotateCcw size={15} />
                    Восстановить доску
                  </button>
                )}
              </div>
            ) : view === "archive" ? (
              <div className="archive-list">
                {archivedTasks
                  .filter((t) =>
                    (t.title + " " + t.description)
                      .toLowerCase()
                      .includes(query.toLowerCase()),
                  )
                  .map((t) => (
                    <div className="resource-row" key={t.id}>
                      <button className="grow" onClick={() => open(t)}>
                        #{t.id} · {t.title}
                      </button>
                      <button
                        className="secondary"
                        onClick={() =>
                          void run(() =>
                            mutate(`tasks/${t.id}/`, "PATCH", {
                              is_archived: false,
                            }),
                          )
                        }
                      >
                        Восстановить
                      </button>
                    </div>
                  ))}
                {!archivedTasks.length && (
                  <div className="empty">
                    <Archive size={32} />
                    <h2>Архив пуст</h2>
                    <p>
                      Убирайте сюда карточки, которые пока не нужны на доске.
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <BoardCanvas
                state={{ ...state, tasks: shown }}
                query=""
                busy={busy}
                api={api}
                run={run}
                reload={reload}
                open={open}
                dialog={setDialog}
              />
            )}
            <footer>
              <span>
                {shown.length} карточек ·{" "}
                {shown.filter((t) => t.completed_at).length} завершено
              </span>
              <span>Обновлено {updated} · Синхронизация каждые 20 секунд</span>
            </footer>
          </>
        ) : (
          <div className="empty">
            <Kanban size={42} />
            <h2>{selected ? "Загружаем доску…" : "Место для ваших идей"}</h2>
            {!selected && (
              <button
                className="primary"
                onClick={() => setDialog({ kind: "board" })}
              >
                Создать первую доску
              </button>
            )}
          </div>
        )}
      </main>
      {dialog && ["board", "edit-board"].includes(dialog.kind) && (
        <BoardEditor
          board={dialog.kind === "edit-board" ? state?.board : undefined}
          api={api}
          run={run}
          busy={busy}
          saved={async (b) => {
            setSelected(b.id);
            selectedRef.current = b.id;
            await reload(b.id);
          }}
          close={() => setDialog(null)}
        />
      )}
      {dialog?.kind === "automations" && state && (
        <TaskAutomationManager
          isOpen
          onClose={() => setDialog(null)}
          api={api}
          currentBoard={{ ...state.board, columns: state.columns }}
          boards={boards.filter((b) => b.can_manage && !b.is_archived)}
          employees={state.users}
          labels={state.labels}
          onChanged={() => void reload()}
        />
      )}
      {dialog?.kind === "labels" && state && (
        <Modal title="Метки доски" onClose={() => setDialog(null)}>
          <p className="muted section-note">
            Метки доступны только на этой доске.
          </p>
          {state.labels.map((l) => (
            <form
              key={l.id}
              className="inline-add"
              onSubmit={(e) => {
                e.preventDefault();
                const v = Object.fromEntries(new FormData(e.currentTarget));
                void run(() => mutate(`labels/${l.id}/`, "PATCH", v));
              }}
            >
              <input
                name="color"
                type="color"
                defaultValue={l.color}
                aria-label={`Цвет ${l.name}`}
              />
              <input
                name="name"
                defaultValue={l.name}
                required
                maxLength={80}
                aria-label="Название метки"
              />
              <button className="secondary" disabled={busy}>
                Сохранить
              </button>
              <button
                type="button"
                title="Удалить метку"
                onClick={() =>
                  void run(() => mutate(`labels/${l.id}/`, "DELETE"))
                }
              >
                <Trash2 size={15} />
              </button>
            </form>
          ))}
          <form
            className="inline-add"
            onSubmit={(e) => {
              e.preventDefault();
              const f = e.currentTarget,
                v = Object.fromEntries(new FormData(f));
              void run(async () => {
                await mutate("labels/", "POST", { ...v, board: selected });
                f.reset();
              });
            }}
          >
            <input
              type="color"
              name="color"
              defaultValue="#6366f1"
              aria-label="Цвет новой метки"
            />
            <input
              name="name"
              placeholder="Новая метка"
              required
              maxLength={80}
            />
            <button className="primary" disabled={busy}>
              Добавить
            </button>
          </form>
        </Modal>
      )}
      {dialog?.kind === "structure" && state && (
        <Modal
          title="Колонки и дорожки"
          onClose={() => setDialog(null)}
          size="xl"
        >
          <p className="muted section-note">
            Колонки можно перемещать за заголовок на доске. Здесь доступны
            настройки и порядок дорожек.
          </p>
          {state.columns
            .filter((c) => !c.parent)
            .map((c) => (
              <div className="structure-group" key={c.id}>
                <div className="section-heading">
                  <h3>
                    <span className="dot" style={{ background: c.color }} />
                    {c.name}
                    {c.is_done ? " · Финальная" : ""}
                  </h3>
                  <button
                    className="secondary"
                    onClick={() =>
                      setDialog({ kind: "edit-column", data: { ...c } })
                    }
                  >
                    Настройки
                  </button>
                </div>
                {state.columns
                  .filter((s) => s.parent === c.id)
                  .map((s) => (
                    <div className="resource-row" key={s.id}>
                      <span className="grow">↳ {s.name}</span>
                      <button
                        onClick={() =>
                          setDialog({ kind: "edit-column", data: { ...s } })
                        }
                      >
                        Изменить
                      </button>
                    </div>
                  ))}
                {state.rows
                  .filter((r) => r.column === c.id)
                  .map((r, i, rows) => (
                    <div className="resource-row" key={r.id}>
                      <span className="grow">Дорожка: {r.name}</span>
                      {[-1, 1].map((delta) => (
                        <button
                          key={delta}
                          title={delta < 0 ? "Дорожка выше" : "Дорожка ниже"}
                          disabled={!rows[i + delta] || busy}
                          onClick={() =>
                            void run(async () => {
                              const list = [...rows];
                              [list[i], list[i + delta]] = [
                                list[i + delta],
                                list[i],
                              ];
                              await mutate(
                                `boards/${selected}/reorder-rows/`,
                                "POST",
                                { column: c.id, ids: list.map((x) => x.id) },
                              );
                            })
                          }
                        >
                          {delta < 0 ? (
                            <ArrowUp size={15} />
                          ) : (
                            <ArrowDown size={15} />
                          )}
                        </button>
                      ))}
                      <button
                        onClick={() =>
                          setDialog({ kind: "edit-row", data: { ...r } })
                        }
                      >
                        Изменить
                      </button>
                      <button
                        title="Удалить дорожку"
                        onClick={() =>
                          setDialog({ kind: "delete-row", data: { id: r.id } })
                        }
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  ))}
                <div className="flex gap-2 mt-3">
                  <button
                    className="text-action"
                    onClick={() =>
                      setDialog({ kind: "column", data: { parent: c.id } })
                    }
                  >
                    + Подколонка
                  </button>
                  <button
                    className="text-action"
                    onClick={() =>
                      setDialog({ kind: "row", data: { column: c.id } })
                    }
                  >
                    + Дорожка
                  </button>
                  <button
                    className="text-action danger"
                    onClick={() =>
                      setDialog({ kind: "delete-column", data: { id: c.id } })
                    }
                  >
                    Удалить колонку
                  </button>
                </div>
              </div>
            ))}
          <button
            className="primary"
            onClick={() => setDialog({ kind: "column" })}
          >
            <Plus size={16} />
            Колонка
          </button>
        </Modal>
      )}
      {dialog && names[dialog.kind] && (
        <Modal title={names[dialog.kind]} onClose={() => setDialog(null)}>
          <form className="form" onSubmit={submit}>
            {dialog.kind.startsWith("delete") ? (
              <p>
                {dialog.kind === "delete-row"
                  ? "Карточки останутся в колонке без дорожки."
                  : dialog.kind === "delete-column"
                    ? "Колонку с карточками удалить нельзя. Сначала переместите их."
                    : "Карточка, файлы и история будут удалены без возможности восстановления."}
              </p>
            ) : (
              <>
                <label>
                  Название
                  <input
                    name="name"
                    required
                    autoFocus
                    maxLength={dialog.kind === "task" ? 255 : 120}
                    defaultValue={String(dialog.data?.name || "")}
                  />
                </label>
                {dialog.kind !== "task" && (
                  <label>
                    Цвет
                    <input
                      name="color"
                      type="color"
                      defaultValue={String(dialog.data?.color || "#6366f1")}
                    />
                  </label>
                )}
                {dialog.kind.includes("column") && (
                  <label className="choice-row">
                    <input
                      name="is_done"
                      type="checkbox"
                      defaultChecked={Boolean(dialog.data?.is_done)}
                    />
                    Финальная колонка: задачи завершены
                  </label>
                )}
                {dialog.kind === "group" && (
                  <fieldset>
                    <legend>Доски в группе</legend>
                    {boards
                      .filter((b) => !b.is_archived)
                      .map((b) => (
                        <label className="choice-row" key={b.id}>
                          <input
                            name="boards"
                            type="checkbox"
                            value={b.id}
                            defaultChecked={(
                              (dialog.data?.boards as number[]) || []
                            ).includes(b.id)}
                          />
                          {b.name}
                        </label>
                      ))}
                  </fieldset>
                )}
                {dialog.kind === "task" && state && (
                  <>
                    <label>
                      Описание
                      <textarea name="description" rows={3} />
                    </label>
                    <div className="form-grid">
                      <label>
                        Колонка
                        <select
                          name="column"
                          defaultValue={dialog.data?.column as number}
                        >
                          {getTaskDestinationColumns(state.columns).map((c) => (
                            <option value={c.id} key={c.id}>
                              {getTaskColumnDisplayName(c, state.columns)}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label>
                        Приоритет
                        <select name="priority" defaultValue="medium">
                          {priorityOptions.map((p) => (
                            <option key={p.value} value={p.value}>
                              {p.label}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label>
                        Срок
                        <input name="due_date" type="date" />
                      </label>
                      <label>
                        Исполнитель
                        <select name="assignee">
                          <option value="">Не назначен</option>
                          {state.users.map((u) => (
                            <option key={u.id} value={u.id}>
                              {u.name}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>
                  </>
                )}
              </>
            )}
            <div className="flex justify-end gap-2">
              {dialog.kind === "group" && Boolean(dialog.data?.id) && (
                <button
                  type="button"
                  className="danger"
                  onClick={() =>
                    void run(async () => {
                      await mutate(`groups/${dialog.data?.id}/`, "DELETE");
                      setDialog(null);
                    })
                  }
                >
                  Удалить группу
                </button>
              )}
              <button
                type="button"
                className="secondary"
                onClick={() => setDialog(null)}
              >
                Отмена
              </button>
              <button className="primary" disabled={busy}>
                {dialog.kind.startsWith("delete") ? "Удалить" : "Сохранить"}
              </button>
            </div>
          </form>
        </Modal>
      )}
      {task && state && !dialog && (
        <TaskEditor
          key={task.id}
          task={state.tasks.find((t) => t.id === task.id) || task}
          state={state}
          api={api}
          run={run}
          reload={reload}
          busy={busy}
          close={() => setTask(null)}
          remove={() =>
            setDialog({ kind: "delete-task", data: { id: task.id } })
          }
          open={open}
          initialTab={taskTab}
        />
      )}
    </div>
  );
}
export function mountBoard(element: HTMLElement, options: BoardOptions) {
  const root = createRoot(element);
  root.render(<NadeinBoard {...options} />);
  return () => root.unmount();
}
const element = document.getElementById("nadein-board");
if (element)
  mountBoard(element, {
    apiBase: element.dataset.apiBase || "/board/api/",
    csrfToken: element.dataset.csrfToken || "",
  });
