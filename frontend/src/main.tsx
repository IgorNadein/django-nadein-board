import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import {
  Kanban,
  Plus,
  Search,
  X,
  Check,
  MessageSquare,
  Paperclip,
  Columns3,
  ArrowRight,
  Trash2,
} from "lucide-react";
import { getTaskDestinationColumns, getTaskColumnDisplayName } from "./columns";
import type {
  Board,
  State,
  TaskCard,
  Checklist,
  Comment,
  Attachment,
} from "./types";
import "./style.css";
import BoardCanvas from "./BoardCanvas";
import BoardEditor from "./BoardEditor";
import TaskBoardAvatar from "./TaskBoardAvatar";

export type BoardOptions = { apiBase: string; csrfToken: string };
export function NadeinBoard({ apiBase, csrfToken }: BoardOptions) {
  const [boards, setBoards] = useState<Board[]>([]),
    [selected, setSelected] = useState<number | null>(null),
    [state, setState] = useState<State | null>(null);
  const [error, setError] = useState(""),
    [busy, setBusy] = useState(false),
    [query, setQuery] = useState(""),
    [task, setTask] = useState<TaskCard | null>(null);
  const [dialog, setDialog] = useState<{
    kind: string;
    data?: Record<string, unknown>;
  } | null>(null);
  async function api<T>(
    path: string,
    method = "GET",
    data?: unknown,
  ): Promise<T> {
    const form = data instanceof FormData;
    const response = await fetch(apiBase.replace(/\/?$/, "/") + path, {
      method,
      credentials: "same-origin",
      headers: {
        "X-CSRFToken": csrfToken,
        ...(!form ? { "Content-Type": "application/json" } : {}),
      },
      body: data === undefined ? undefined : form ? data : JSON.stringify(data),
    });
    if (!response.ok) {
      const body = await response.text();
      if (response.status === 403)
        throw new Error(
          "Нет доступа. Проверьте вход в аккаунт и права на доску.",
        );
      throw new Error(body.slice(0, 500));
    }
    return response.status === 204 ? (undefined as T) : response.json();
  }
  async function reload(id = selected) {
    const all = await api<Board[]>("boards/");
    setBoards(all);
    if (id && all.some((b) => b.id === id)) {
      setState(await api<State>(`boards/${id}/state/`));
    } else {
      setSelected(all[0]?.id ?? null);
      setState(null);
    }
  }
  async function run(fn: () => Promise<void>) {
    setError("");
    setBusy(true);
    try {
      await fn();
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(false);
    }
  }
  useEffect(() => {
    void run(() => reload());
  }, []);
  useEffect(() => {
    let active = true;
    if (selected) {
      api<State>(`boards/${selected}/state/`)
        .then((s) => {
          if (active) setState(s);
        })
        .catch((e) => {
          if (active) setError(String(e));
        });
    }
    return () => {
      active = false;
    };
  }, [selected]);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const values = Object.fromEntries(new FormData(e.currentTarget));
    const d = dialog!;
    await run(async () => {
      if (d.kind === "board") {
        const b = await api<Board>("boards/", "POST", {
          name: values.name,
          description: values.description,
          access_scope: "private",
        });
        setSelected(b.id);
        await reload(b.id);
      }
      if (d.kind === "column") {
        await api("columns/", "POST", {
          board: selected,
          name: values.name,
          color: values.color,
          parent: d.data?.parent ?? null,
          is_done: values.is_done === "on",
          position: (state?.columns.length ?? 0) * 1000,
        });
        await reload();
      }
      if (d.kind === "edit-column") {
        await api(`columns/${d.data?.id}/`, "PATCH", {
          name: values.name,
          color: values.color,
          is_done: values.is_done === "on",
        });
        await reload();
      }
      if (d.kind === "edit-row") {
        await api(`rows/${d.data?.id}/`, "PATCH", { name: values.name });
        await reload();
      }
      if (d.kind === "delete-row") {
        await api(`rows/${d.data?.id}/`, "DELETE");
        await reload();
      }
      if (d.kind === "row") {
        await api("rows/", "POST", {
          column: d.data?.column,
          name: values.name,
          color: "#e2e8f0",
          position: (state?.rows.length ?? 0) * 1000,
        });
        await reload();
      }
      if (d.kind === "label") {
        await api("labels/", "POST", {
          board: selected,
          name: values.name,
          color: values.color,
        });
        await reload();
      }
      if (d.kind === "task") {
        await api("tasks/", "POST", {
          board: selected,
          column: d.data?.column,
          row: d.data?.row ?? null,
          title: values.name,
          description: values.description,
          position: (state?.tasks.length ?? 0) * 1000,
        });
        await reload();
      }
      if (d.kind === "delete-task") {
        await api(`tasks/${d.data?.id}/`, "DELETE");
        setTask(null);
        await reload();
      }
      if (d.kind === "delete-column") {
        await api(`columns/${d.data?.id}/`, "DELETE");
        await reload();
      }
      setDialog(null);
    });
  }
  return (
    <div className="nb-shell">
      <aside className="nb-sidebar">
        <div className="nb-brand">
          <span>
            <Kanban size={23} />
          </span>
          <div>
            Nadein Board<small>Рабочее пространство</small>
          </div>
        </div>
        <div className="sidebar-label">
          МОИ ДОСКИ{" "}
          <button
            aria-label="Создать доску"
            onClick={() => setDialog({ kind: "board" })}
          >
            <Plus size={18} />
          </button>
        </div>
        <nav>
          {boards.map((b) => (
            <button
              key={b.id}
              className={b.id === selected ? "active" : ""}
              onClick={() => {
                setState(null);
                setSelected(b.id);
                setTask(null);
              }}
            >
              <TaskBoardAvatar name={b.name} src={b.avatar} size="sm" />
              <span>{b.name}</span>
              {b.id === selected && <ArrowRight size={15} />}
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="avatar">
            {state?.me.name.slice(0, 2).toUpperCase() || "NB"}
          </div>
          <div>
            {state?.me.name || "Мои задачи"}
            <small>Личное пространство</small>
          </div>
        </div>
      </aside>
      <main className="nb-main">
        <header>
          <div>
            <span className="eyebrow">РАБОЧЕЕ ПРОСТРАНСТВО / ДОСКА</span>
            <div className="flex items-center gap-3">
              {state && (
                <TaskBoardAvatar
                  name={state.board.name}
                  src={state.board.avatar}
                  size="lg"
                />
              )}
              <h1>{state?.board.name || "Ваши доски"}</h1>
            </div>
            <p>
              {state?.board.description ||
                "Организуйте задачи, обсуждайте детали и двигайтесь вперёд."}
            </p>
          </div>
          <div className="flex gap-2">
            {state?.can_manage && (
              <button
                className="secondary"
                onClick={() => setDialog({ kind: "edit-board" })}
              >
                Настройки доски
              </button>
            )}
            <button
              className="secondary"
              onClick={() => void run(() => reload())}
              disabled={busy}
            >
              Обновить
            </button>
          </div>
        </header>
        {error && (
          <div role="alert" className="error">
            {error}
            <button onClick={() => setError("")} aria-label="Закрыть ошибку">
              <X size={16} />
            </button>
          </div>
        )}
        {state ? (
          <>
            <div className="toolbar">
              <div className="view-tab">
                <Kanban size={17} /> Доска <span>{state.tasks.length}</span>
              </div>
              <label className="search">
                <Search size={16} />
                <input
                  placeholder="Найти карточку…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </label>
              <span className="grow" />
              {state.can_manage && (
                <>
                  <button
                    className="secondary"
                    onClick={() => setDialog({ kind: "label" })}
                  >
                    Метки
                  </button>
                  <button
                    className="primary"
                    onClick={() => setDialog({ kind: "column" })}
                  >
                    <Plus size={16} /> Колонка
                  </button>
                </>
              )}
            </div>
            <BoardCanvas
              state={state}
              query={query}
              busy={busy}
              api={api}
              run={run}
              reload={reload}
              open={setTask}
              dialog={setDialog}
            />
            <footer>
              <span>
                {state.tasks.filter((t) => t.completed_at).length} задач
                завершено
              </span>
              <span>Изменения сохраняются автоматически после действий</span>
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
            await reload(b.id);
          }}
          close={() => setDialog(null)}
        />
      )}
      {dialog && !["board", "edit-board"].includes(dialog.kind) && (
        <Modal
          title={
            (
              {
                board: "Новая доска",
                column: "Новая колонка",
                "edit-column": "Настройки колонки",
                row: "Новая дорожка",
                "edit-row": "Изменить дорожку",
                "delete-row": "Удалить дорожку?",
                label: "Новая метка",
                task: "Новая карточка",
                "delete-task": "Удалить карточку?",
                "delete-column": "Удалить колонку?",
              } as Record<string, string>
            )[dialog.kind]
          }
          close={() => setDialog(null)}
        >
          <form onSubmit={submit} className="form">
            {dialog.kind.startsWith("delete") ? (
              <p>
                Это действие нельзя отменить. Колонку с задачами удалить нельзя.
              </p>
            ) : (
              <>
                <label>
                  Название
                  <input
                    name="name"
                    required
                    maxLength={
                      dialog.kind === "label"
                        ? 80
                        : dialog.kind.includes("column") ||
                            dialog.kind === "row"
                          ? 120
                          : 255
                    }
                    defaultValue={String(dialog.data?.name || "")}
                    autoFocus
                  />
                </label>
                {["board", "task"].includes(dialog.kind) && (
                  <label>
                    Описание
                    <textarea name="description" rows={3} />
                  </label>
                )}
                {["column", "edit-column", "label"].includes(dialog.kind) && (
                  <label>
                    Цвет
                    <input
                      name="color"
                      type="color"
                      defaultValue={String(dialog.data?.color || "#3b82f6")}
                    />
                  </label>
                )}
                {dialog.kind.includes("column") &&
                  !dialog.kind.startsWith("delete") && (
                    <label className="inline">
                      <input
                        name="is_done"
                        type="checkbox"
                        defaultChecked={Boolean(dialog.data?.is_done)}
                      />{" "}
                      Задачи в этой колонке завершены
                    </label>
                  )}
              </>
            )}
            <button className="primary" disabled={busy}>
              {busy
                ? "Сохраняем…"
                : dialog.kind.startsWith("delete")
                  ? "Удалить"
                  : "Сохранить"}
            </button>
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
        />
      )}
    </div>
  );
}
function Modal({
  title,
  close,
  children,
}: {
  title: string;
  close: () => void;
  children: ReactNode;
}) {
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, [close]);
  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="modal"
      >
        <div className="modal-header">
          <h2>{title}</h2>
          <button onClick={close} aria-label="Закрыть">
            <X size={20} />
          </button>
        </div>
        {children}
      </section>
    </div>
  );
}
type Api = <T>(path: string, method?: string, data?: unknown) => Promise<T>;
function TaskEditor({
  task,
  state,
  api,
  run,
  reload,
  busy,
  close,
  remove,
}: {
  task: TaskCard;
  state: State;
  api: Api;
  run: (f: () => Promise<void>) => Promise<void>;
  reload: () => Promise<void>;
  busy: boolean;
  close: () => void;
  remove: () => void;
}) {
  const [checks, setChecks] = useState<Checklist[]>([]),
    [comments, setComments] = useState<Comment[]>([]),
    [attachments, setAttachments] = useState<Attachment[]>([]),
    [column, setColumn] = useState(task.column);
  const prefix = `tasks/${task.id}/`;
  async function resources() {
    const [a, b, c] = await Promise.all([
      api<Checklist[]>(prefix + "checklist/"),
      api<Comment[]>(prefix + "comments/"),
      api<Attachment[]>(prefix + "attachments/"),
    ]);
    setChecks(a);
    setComments(b);
    setAttachments(c);
  }
  useEffect(() => {
    void run(resources);
  }, []);
  const destination = state.columns.find((c) => c.id === column)!;
  async function save(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    void run(async () => {
      await api(prefix, "PATCH", {
        title: data.get("title"),
        description: data.get("description"),
        column: Number(data.get("column")),
        row: data.get("row") ? Number(data.get("row")) : null,
        priority: data.get("priority"),
        due_date: data.get("due_date") || null,
        assignee_id: data.get("assignee") ? Number(data.get("assignee")) : null,
        label_ids: data.getAll("labels").map(Number),
      });
      await reload();
      close();
    });
  }
  async function add(e: FormEvent<HTMLFormElement>, kind: string) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    void run(async () => {
      await api(prefix + kind + "/", "POST", data);
      form.reset();
      await resources();
      await reload();
    });
  }
  return (
    <Modal title={`Карточка #${task.id}`} close={close}>
      <form className="form" onSubmit={save}>
        <label>
          Название
          <input
            name="title"
            defaultValue={task.title}
            required
            maxLength={255}
          />
        </label>
        <label>
          Описание
          <textarea
            name="description"
            defaultValue={task.description}
            rows={4}
          />
        </label>
        <div className="form-grid">
          <label>
            Колонка
            <select
              name="column"
              value={column}
              onChange={(e) => setColumn(Number(e.target.value))}
            >
              {getTaskDestinationColumns(state.columns).map((c) => (
                <option key={c.id} value={c.id}>
                  {getTaskColumnDisplayName(c, state.columns)}
                </option>
              ))}
            </select>
          </label>
          <label>
            Дорожка
            <select
              name="row"
              key={column}
              defaultValue={column === task.column ? (task.row ?? "") : ""}
            >
              <option value="">Без дорожки</option>
              {state.rows
                .filter((r) => r.column === (destination.parent || column))
                .map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name}
                  </option>
                ))}
            </select>
          </label>
          <label>
            Срочность
            <select name="priority" defaultValue={task.priority}>
              <option value="low">Низкая</option>
              <option value="medium">Средняя</option>
              <option value="high">Высокая</option>
              <option value="critical">Критическая</option>
            </select>
          </label>
          <label>
            Срок
            <input
              name="due_date"
              type="date"
              defaultValue={task.due_date || ""}
            />
          </label>
          <label>
            Исполнитель
            <select name="assignee" defaultValue={task.assignee?.id || ""}>
              <option value="">Не назначен</option>
              {state.users.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        {state.labels.length > 0 && (
          <fieldset>
            <legend>Метки</legend>
            <div className="label-list">
              {state.labels.map((l) => (
                <label className="inline" key={l.id}>
                  <input
                    type="checkbox"
                    name="labels"
                    value={l.id}
                    defaultChecked={task.labels.some((t) => t.id === l.id)}
                  />
                  <span className="dot" style={{ background: l.color }} />
                  {l.name}
                </label>
              ))}
            </div>
          </fieldset>
        )}
        <button className="primary" disabled={busy}>
          Сохранить карточку
        </button>
      </form>
      {task.cover && (
        <div className="cover-actions">
          <span>Обложка: {task.cover.kind}</span>
          <button
            onClick={() =>
              void run(async () => {
                await api(prefix + "cover/", "DELETE");
                await reload();
              })
            }
          >
            Убрать обложку
          </button>
        </div>
      )}
      <div className="resource">
        <h3>
          <Check size={17} /> Чек-лист
        </h3>
        {checks.length > 0 && (
          <div className="cover-actions">
            <button
              className={task.cover?.kind === "checklist" ? "selected" : ""}
              onClick={() =>
                void run(async () => {
                  await api(prefix + "cover/", "PUT", { kind: "checklist" });
                  await reload();
                })
              }
            >
              Сделать обложкой
            </button>
          </div>
        )}
        {checks.map((c) => (
          <div className="check-row" key={c.id}>
            <label className="inline">
              <input
                type="checkbox"
                checked={c.is_completed}
                disabled={busy}
                onChange={() =>
                  void run(async () => {
                    await api(prefix + "checklist/", "PATCH", {
                      id: c.id,
                      is_completed: !c.is_completed,
                    });
                    await resources();
                    await reload();
                  })
                }
              />
              <span
                style={{
                  textDecoration: c.is_completed ? "line-through" : "none",
                }}
              >
                {c.title}
              </span>
            </label>
            <button
              aria-label={`Удалить пункт ${c.title}`}
              onClick={() =>
                void run(async () => {
                  await api(prefix + "checklist/", "DELETE", { id: c.id });
                  await resources();
                  await reload();
                })
              }
            >
              <X size={14} />
            </button>
          </div>
        ))}
        <form className="inline" onSubmit={(e) => void add(e, "checklist")}>
          <input
            name="title"
            placeholder="Новый пункт"
            required
            maxLength={500}
          />
          <button className="secondary" disabled={busy}>
            Добавить
          </button>
        </form>
      </div>
      <div className="resource">
        <h3>
          <Paperclip size={17} /> Вложения
        </h3>
        {attachments.map((a) => (
          <p key={a.id}>
            <a href={a.url}>{a.name}</a>{" "}
            <button
              className="secondary"
              onClick={() =>
                void run(async () => {
                  await api(prefix + "cover/", "PUT", {
                    kind: "attachment",
                    id: a.id,
                  });
                  await reload();
                })
              }
            >
              На обложку
            </button>{" "}
            <small>({Math.ceil(a.size / 1024)} КБ)</small>
            <button
              aria-label={`Удалить файл ${a.name}`}
              onClick={() =>
                void run(async () => {
                  await api(prefix + "attachments/", "DELETE", { id: a.id });
                  await resources();
                  await reload();
                })
              }
            >
              <X size={14} />
            </button>
          </p>
        ))}
        <label className="upload">
          Прикрепить файл (до 10 МБ)
          <input
            type="file"
            disabled={busy}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const form = new FormData();
                form.append("file", file);
                void run(async () => {
                  await api(prefix + "attachments/", "POST", form);
                  await resources();
                  await reload();
                });
              }
              e.target.value = "";
            }}
          />
        </label>
      </div>
      <div className="resource">
        <h3>
          <MessageSquare size={17} /> Обсуждение
        </h3>
        {comments.map((c) => (
          <div className="comment" key={c.id}>
            <strong>{c.author.name}</strong>
            <small>{new Date(c.created_at).toLocaleString("ru-RU")}</small>
            <p>{c.text}</p>
            <button
              className="secondary"
              onClick={() =>
                void run(async () => {
                  await api(prefix + "cover/", "PUT", {
                    kind: "comment",
                    id: c.id,
                  });
                  await reload();
                })
              }
            >
              На обложку
            </button>
            {(c.author.id === state.me.id || state.can_manage) && (
              <button
                onClick={() =>
                  void run(async () => {
                    await api(prefix + "comments/", "DELETE", { id: c.id });
                    await resources();
                    await reload();
                  })
                }
              >
                Удалить
              </button>
            )}
          </div>
        ))}
        <form className="form" onSubmit={(e) => void add(e, "comments")}>
          <textarea
            name="text"
            placeholder="Напишите комментарий…"
            required
            maxLength={10000}
          />
          <button className="secondary" disabled={busy}>
            Отправить комментарий
          </button>
        </form>
      </div>
      <button className="danger" onClick={remove}>
        <Trash2 size={16} /> Удалить карточку
      </button>
    </Modal>
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
