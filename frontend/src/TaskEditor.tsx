import { useEffect, useState, type FormEvent } from "react";
import {
  Archive,
  RotateCcw,
  Copy,
  Check,
  Trash2,
  Paperclip,
  Link2,
  ListChecks,
  MessageSquare,
  History,
  Image,
  ArrowUp,
  ArrowDown,
  Play,
  Save,
} from "lucide-react";
import { Modal } from "./Modal";
import TaskCoverPreview from "./TaskCoverPreview";
import { priorityOptions } from "./TaskCard";
import { getTaskDestinationColumns, getTaskColumnDisplayName } from "./columns";
import type {
  Api,
  State,
  TaskCard,
  Checklist,
  Comment,
  Attachment,
  ExternalLink,
  Activity,
  TaskAutomationRun,
} from "./types";
type Props = {
  task: TaskCard;
  state: State;
  api: Api;
  reload: () => Promise<void>;
  run: (f: () => Promise<void>) => Promise<void>;
  busy: boolean;
  close: () => void;
  remove: () => void;
  open: (t: TaskCard) => void;
  initialTab?: string;
};
const tabs = [
  ["details", "Описание", ListChecks],
  ["attachments", "Файлы", Paperclip],
  ["links", "Ссылки", Link2],
  ["comments", "Обсуждение", MessageSquare],
  ["history", "История", History],
] as const;
export default function TaskEditor({
  task,
  state,
  api,
  reload,
  run,
  busy,
  close,
  remove,
  open,
  initialTab,
}: Props) {
  const [tab, setTab] = useState(initialTab || "details"),
    [title, setTitle] = useState(task.title),
    [description, setDescription] = useState(task.description),
    [column, setColumn] = useState(task.column),
    [row, setRow] = useState<number | null>(task.row),
    [priority, setPriority] = useState(task.priority),
    [due, setDue] = useState(task.due_date || ""),
    [assignee, setAssignee] = useState(task.assignee?.id || ""),
    [labels, setLabels] = useState(task.labels.map((l) => l.id)),
    [participants, setParticipants] = useState(
      task.participants.map((u) => u.id),
    );
  const [checks, setChecks] = useState<Checklist[]>([]),
    [comments, setComments] = useState<Comment[]>([]),
    [attachments, setAttachments] = useState<Attachment[]>([]),
    [links, setLinks] = useState<ExternalLink[]>([]),
    [history, setHistory] = useState<Activity[]>([]),
    [buttons, setButtons] = useState<{ id: number; name: string }[]>([]),
    [editing, setEditing] = useState<{
      kind: string;
      id: number;
      text: string;
    } | null>(null),
    [notice, setNotice] = useState(""),
    [loaded, setLoaded] = useState(false);
  const prefix = `tasks/${task.id}/`,
    dest = state.columns.find((c) => c.id === column),
    readonly = state.board.is_archived || task.is_archived;
  const dirty =
    title !== task.title ||
    description !== task.description ||
    column !== task.column ||
    row !== task.row ||
    priority !== task.priority ||
    due !== (task.due_date || "") ||
    assignee !== (task.assignee?.id || "") ||
    JSON.stringify(labels) !== JSON.stringify(task.labels.map((l) => l.id)) ||
    JSON.stringify(participants) !==
      JSON.stringify(task.participants.map((u) => u.id));
  function requestClose() {
    if (!dirty || window.confirm("Закрыть карточку без сохранения изменений?"))
      close();
  }
  async function resources() {
    const [a, b, c, d, e, f] = await Promise.all([
      api<Checklist[]>(prefix + "checklist/"),
      api<Comment[]>(prefix + "comments/"),
      api<Attachment[]>(prefix + "attachments/"),
      api<ExternalLink[]>(prefix + "links/"),
      api<Activity[]>(prefix + "history/"),
      api<{ id: number; name: string }[]>(
        `automations/buttons/?task=${task.id}`,
      ),
    ]);
    setChecks(a);
    setComments(b);
    setAttachments(c);
    setLinks(d);
    setHistory(e);
    setButtons(f);
    setLoaded(true);
  }
  useEffect(() => {
    void run(resources);
  }, [task.id]);
  async function syncFields() {
    const t = await api<TaskCard>(prefix);
    setTitle(t.title);
    setDescription(t.description);
    setColumn(t.column);
    setRow(t.row);
    setPriority(t.priority);
    setDue(t.due_date || "");
    setAssignee(t.assignee?.id || "");
    setLabels(t.labels.map((l) => l.id));
    setParticipants(t.participants.map((u) => u.id));
  }
  async function action(path: string, method: string, data?: unknown) {
    await api(path, method, data);
    if (!dirty) await syncFields();
    await resources();
    await reload();
  }
  async function save(e?: FormEvent) {
    e?.preventDefault();
    await run(async () => {
      await api(prefix, "PATCH", {
        title,
        description,
        column,
        row,
        priority,
        due_date: due || null,
        assignee_id: assignee || null,
        label_ids: labels,
        participant_ids: participants,
      });
      await reload();
      await resources();
      await syncFields();
      setNotice("Изменения сохранены");
    });
  }
  async function add(e: FormEvent<HTMLFormElement>, kind: string) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    await run(async () => {
      await action(
        prefix + kind + "/",
        "POST",
        kind === "checklist"
          ? { ...data, position: (checks.length + 1) * 1000 }
          : data,
      );
      form.reset();
    });
  }
  const cover = (kind: string, id?: number) =>
    void run(() => action(prefix + "cover/", "PUT", { kind, id }));
  const toggle = (values: number[], id: number) =>
    values.includes(id) ? values.filter((x) => x !== id) : [...values, id];
  async function reorder(index: number, delta: number) {
    const other = checks[index + delta];
    if (!other) return;
    await run(async () => {
      const ordered = [...checks];
      [ordered[index], ordered[index + delta]] = [
        ordered[index + delta],
        ordered[index],
      ];
      await api(prefix + "reorder-checklist/", "POST", {
        ids: ordered.map((c) => c.id),
      });
      await resources();
    });
  }
  const archive = () =>
    void run(async () => {
      await api(prefix, "PATCH", { is_archived: !task.is_archived });
      await reload();
      close();
    });
  return (
    <Modal title={`Карточка #${task.id}`} onClose={requestClose} size="xl">
      <div
        className="task-dialog"
        onKeyDown={(e) => {
          if ((e.ctrlKey || e.metaKey) && e.key === "Enter" && !readonly) {
            e.preventDefault();
            void save();
          }
        }}
      >
        <div className="task-dialog-actions">
          <span className={`task-status ${task.completed_at ? "done" : ""}`}>
            {task.is_archived
              ? "В архиве"
              : task.completed_at
                ? "Завершена"
                : "В работе"}
          </span>
          <span className="grow" />
          {!readonly && (
            <>
              <button
                className="secondary"
                disabled={busy}
                onClick={() =>
                  void run(async () => {
                    const copy = await api<TaskCard>(
                      prefix + "duplicate/",
                      "POST",
                    );
                    await reload();
                    open(copy);
                  })
                }
              >
                <Copy size={14} />
                Копия
              </button>
              <button
                className="secondary"
                disabled={busy || dirty}
                title={dirty ? "Сначала сохраните изменения" : undefined}
                onClick={archive}
              >
                <Archive size={14} />В архив
              </button>
            </>
          )}
          {task.is_archived && !state.board.is_archived && (
            <button
              className="secondary"
              disabled={busy || dirty}
              title={dirty ? "Сначала сохраните изменения" : undefined}
              onClick={archive}
            >
              <RotateCcw size={14} />
              Восстановить
            </button>
          )}
          <button
            className="icon-danger"
            title="Удалить карточку"
            onClick={remove}
            disabled={state.board.is_archived}
          >
            <Trash2 size={16} />
          </button>
        </div>
        {task.cover && (
          <div className="editor-cover">
            <TaskCoverPreview
              taskId={task.id}
              cover={task.cover}
              className="h-40 w-full rounded-xl"
            />
            {!readonly && (
              <button
                className="secondary"
                onClick={() =>
                  void run(() => action(prefix + "cover/", "DELETE"))
                }
              >
                Убрать обложку
              </button>
            )}
          </div>
        )}
        <form id="task-fields" onSubmit={save} className="task-title-form">
          <input
            aria-label="Название карточки"
            value={title}
            required
            maxLength={255}
            onChange={(e) => {
              setTitle(e.target.value);
              setNotice("");
            }}
            disabled={readonly}
            className="task-title-input"
          />
        </form>
        <div className="task-dialog-grid">
          <div className="task-content">
            <div className="detail-tabs">
              {tabs.map(([id, name, Icon]) => (
                <button
                  key={id}
                  className={tab === id ? "active" : ""}
                  onClick={() => setTab(id)}
                >
                  <Icon size={15} />
                  {name}
                  {id === "comments" && comments.length > 0
                    ? ` · ${comments.length}`
                    : id === "attachments" && attachments.length > 0
                      ? ` · ${attachments.length}`
                      : ""}
                </button>
              ))}
            </div>
            {!loaded && <p className="muted">Загружаем содержимое…</p>}
            {tab === "details" && (
              <>
                <label className="form">
                  Описание
                  <textarea
                    aria-label="Описание карточки"
                    value={description}
                    rows={5}
                    onChange={(e) => setDescription(e.target.value)}
                    disabled={readonly}
                    placeholder="Контекст, результат и всё, что поможет выполнить задачу"
                  />
                </label>
                <div className="section-heading">
                  <h3>
                    <ListChecks size={17} />
                    Чек-лист{" "}
                    <small>
                      {checks.filter((c) => c.is_completed).length}/
                      {checks.length}
                    </small>
                  </h3>
                  {checks.length > 0 && !readonly && (
                    <button
                      className="text-action"
                      onClick={() => cover("checklist")}
                    >
                      <Image size={14} />
                      На обложку
                    </button>
                  )}
                </div>
                {checks.length > 0 && (
                  <progress
                    className="checklist-progress"
                    max={checks.length}
                    value={checks.filter((c) => c.is_completed).length}
                  />
                )}
                <div className="checklist-items">
                  {checks.map((c, i) => (
                    <div key={c.id} className="checklist-row">
                      <input
                        type="checkbox"
                        aria-label={`Выполнено: ${c.title}`}
                        checked={c.is_completed}
                        disabled={readonly || busy}
                        onChange={(e) =>
                          void run(() =>
                            action(prefix + "checklist/", "PATCH", {
                              id: c.id,
                              is_completed: e.target.checked,
                            }),
                          )
                        }
                      />
                      {editing?.kind === "checklist" && editing.id === c.id ? (
                        <form
                          className="inline-edit"
                          onSubmit={(e) => {
                            e.preventDefault();
                            void run(async () => {
                              await action(prefix + "checklist/", "PATCH", {
                                id: c.id,
                                title: editing.text,
                              });
                              setEditing(null);
                            });
                          }}
                        >
                          <input
                            aria-label="Название пункта"
                            value={editing.text}
                            maxLength={500}
                            onChange={(e) =>
                              setEditing({ ...editing, text: e.target.value })
                            }
                          />
                          <button disabled={busy}>
                            <Check size={15} />
                          </button>
                        </form>
                      ) : (
                        <button
                          className={`checklist-title ${c.is_completed ? "completed" : ""}`}
                          onClick={() =>
                            !readonly &&
                            setEditing({
                              kind: "checklist",
                              id: c.id,
                              text: c.title,
                            })
                          }
                        >
                          {c.title}
                        </button>
                      )}
                      {!readonly && (
                        <span className="row-actions">
                          <button
                            title="Пункт выше"
                            disabled={i === 0 || busy}
                            onClick={() => void reorder(i, -1)}
                          >
                            <ArrowUp size={13} />
                          </button>
                          <button
                            title="Пункт ниже"
                            disabled={i === checks.length - 1 || busy}
                            onClick={() => void reorder(i, 1)}
                          >
                            <ArrowDown size={13} />
                          </button>
                          <button
                            title="Удалить пункт"
                            onClick={() =>
                              void run(() =>
                                action(prefix + "checklist/", "DELETE", {
                                  id: c.id,
                                }),
                              )
                            }
                          >
                            <Trash2 size={13} />
                          </button>
                        </span>
                      )}
                    </div>
                  ))}
                </div>
                {!readonly && (
                  <form
                    className="inline-add"
                    onSubmit={(e) => void add(e, "checklist")}
                  >
                    <input
                      name="title"
                      placeholder="Добавить пункт…"
                      aria-label="Новый пункт чек-листа"
                      required
                      maxLength={500}
                    />
                    <button className="secondary" disabled={busy}>
                      Добавить
                    </button>
                  </form>
                )}
              </>
            )}
            {tab === "attachments" && (
              <>
                <p className="muted section-note">
                  Файлы хранятся в Django storage. Скачать их могут участники
                  доски.
                </p>
                {attachments.map((a) => (
                  <div className="resource-row" key={a.id}>
                    <Paperclip size={18} />
                    <a
                      href={a.url}
                      target="_blank"
                      rel="noreferrer"
                      className="grow"
                    >
                      {a.name}
                      <small>{Math.ceil(a.size / 1024)} КБ</small>
                    </a>
                    {!readonly && (
                      <>
                        <button
                          title="Файл на обложку"
                          onClick={() => cover("attachment", a.id)}
                        >
                          <Image size={16} />
                        </button>
                        <button
                          title="Удалить файл"
                          onClick={() =>
                            void run(() =>
                              action(prefix + "attachments/", "DELETE", {
                                id: a.id,
                              }),
                            )
                          }
                        >
                          <Trash2 size={15} />
                        </button>
                      </>
                    )}
                  </div>
                ))}
                {!readonly && (
                  <label className="upload-zone">
                    <Paperclip size={25} />
                    <strong>Добавить файлы</strong>
                    <span>Можно выбрать несколько сразу</span>
                    <input
                      type="file"
                      multiple
                      disabled={busy}
                      onChange={(e) => {
                        const files = Array.from(e.target.files || []);
                        e.target.value = "";
                        void run(async () => {
                          try {
                            for (const f of files) {
                              const data = new FormData();
                              data.append("file", f);
                              await api(prefix + "attachments/", "POST", data);
                            }
                          } finally {
                            await resources();
                            await reload();
                          }
                        });
                      }}
                    />
                  </label>
                )}
                {!attachments.length && readonly && (
                  <p className="muted">Файлов пока нет.</p>
                )}
              </>
            )}
            {tab === "links" && (
              <>
                <p className="muted section-note">
                  Материалы, документы и страницы, связанные с задачей.
                </p>
                {links.map((l) => (
                  <div className="resource-row" key={l.id}>
                    <Link2 size={18} />
                    <a
                      className="grow"
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {l.title || l.url}
                      <small>{l.url}</small>
                    </a>
                    {!readonly && (
                      <>
                        <button
                          title="Ссылку на обложку"
                          onClick={() => cover("external_link", l.id)}
                        >
                          <Image size={16} />
                        </button>
                        <button
                          title="Удалить ссылку"
                          onClick={() =>
                            void run(() =>
                              action(prefix + "links/", "DELETE", { id: l.id }),
                            )
                          }
                        >
                          <Trash2 size={15} />
                        </button>
                      </>
                    )}
                  </div>
                ))}
                {!readonly && (
                  <form
                    className="form inset-form"
                    onSubmit={(e) => void add(e, "links")}
                  >
                    <input
                      name="title"
                      aria-label="Название ссылки"
                      placeholder="Название ссылки"
                      maxLength={255}
                    />
                    <input
                      name="url"
                      type="url"
                      aria-label="Адрес ссылки"
                      required
                      placeholder="https://…"
                      maxLength={2048}
                    />
                    <button className="secondary" disabled={busy}>
                      Добавить ссылку
                    </button>
                  </form>
                )}
              </>
            )}
            {tab === "comments" && (
              <>
                {comments.map((c) => (
                  <article className="comment-block" key={c.id}>
                    <div>
                      <strong>{c.author.name}</strong>
                      <time>{new Date(c.created_at).toLocaleString("ru")}</time>
                    </div>
                    {editing?.kind === "comment" && editing.id === c.id ? (
                      <form
                        className="form"
                        onSubmit={(e) => {
                          e.preventDefault();
                          void run(async () => {
                            await action(prefix + "comments/", "PATCH", {
                              id: c.id,
                              text: editing.text,
                            });
                            setEditing(null);
                          });
                        }}
                      >
                        <textarea
                          aria-label="Изменить комментарий"
                          value={editing.text}
                          onChange={(e) =>
                            setEditing({ ...editing, text: e.target.value })
                          }
                          required
                          maxLength={10000}
                        />
                        <button className="secondary" disabled={busy}>
                          Сохранить комментарий
                        </button>
                      </form>
                    ) : (
                      <p>{c.text}</p>
                    )}
                    {!readonly && (
                      <div className="comment-actions">
                        <button onClick={() => cover("comment", c.id)}>
                          На обложку
                        </button>
                        {(state.me.id === c.author.id || state.can_manage) && (
                          <>
                            <button
                              onClick={() =>
                                setEditing({
                                  kind: "comment",
                                  id: c.id,
                                  text: c.text,
                                })
                              }
                            >
                              Изменить
                            </button>
                            <button
                              onClick={() =>
                                void run(() =>
                                  action(prefix + "comments/", "DELETE", {
                                    id: c.id,
                                  }),
                                )
                              }
                            >
                              Удалить
                            </button>
                          </>
                        )}
                      </div>
                    )}
                  </article>
                ))}
                {!readonly && (
                  <form
                    className="form"
                    onSubmit={(e) => void add(e, "comments")}
                  >
                    <textarea
                      name="text"
                      placeholder="Напишите комментарий…"
                      aria-label="Новый комментарий"
                      required
                      maxLength={10000}
                      rows={3}
                    />
                    <button className="primary" disabled={busy}>
                      Отправить
                    </button>
                  </form>
                )}
                {!comments.length && readonly && (
                  <p className="muted">Комментариев пока нет.</p>
                )}
              </>
            )}
            {tab === "history" && (
              <div className="history-list">
                {history.map((h) => (
                  <div key={h.id}>
                    <span className="history-dot" />
                    <div>
                      <strong>{h.actor?.name || "Автоматизация"}</strong>{" "}
                      {h.label.toLocaleLowerCase()}
                      {h.action === "moved" && (
                        <p className="muted">
                          {state.columns.find(
                            (c) => c.id === h.metadata.from_column_id,
                          )?.name || "…"}{" "}
                          →{" "}
                          {state.columns.find(
                            (c) => c.id === h.metadata.to_column_id,
                          )?.name || "…"}
                        </p>
                      )}
                      {Array.isArray(h.metadata.fields) &&
                        h.metadata.fields.length > 0 && (
                          <p className="muted">
                            {h.metadata.fields
                              .map(
                                (f) =>
                                  ({
                                    title: "название",
                                    description: "описание",
                                    assignee_id: "исполнитель",
                                    priority: "приоритет",
                                    due_date: "срок",
                                    label_ids: "метки",
                                    participant_ids: "участники",
                                    row_id: "дорожка",
                                  })[String(f)] || String(f),
                              )
                              .join(", ")}
                          </p>
                        )}
                      {typeof h.metadata.title === "string" && (
                        <p>{h.metadata.title}</p>
                      )}
                      <time>{new Date(h.created_at).toLocaleString("ru")}</time>
                    </div>
                  </div>
                ))}
                {!history.length && (
                  <p className="muted">
                    История появится после первого изменения.
                  </p>
                )}
              </div>
            )}
          </div>
          <aside className="task-properties">
            <label>
              Колонка
              <select
                value={column}
                disabled={readonly}
                onChange={(e) => {
                  setColumn(Number(e.target.value));
                  setRow(null);
                }}
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
                value={row ?? ""}
                disabled={readonly}
                onChange={(e) =>
                  setRow(e.target.value ? Number(e.target.value) : null)
                }
              >
                <option value="">Без дорожки</option>
                {state.rows
                  .filter((r) => r.column === (dest?.parent || column))
                  .map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name}
                    </option>
                  ))}
              </select>
            </label>
            <label>
              Приоритет
              <select
                value={priority}
                disabled={readonly}
                onChange={(e) =>
                  setPriority(e.target.value as TaskCard["priority"])
                }
              >
                {priorityOptions.map((p) => (
                  <option key={p.value} value={p.value}>
                    {p.label}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Срок
              <input
                type="date"
                value={due}
                disabled={readonly}
                onChange={(e) => setDue(e.target.value)}
              />
            </label>
            <label>
              Исполнитель
              <select
                value={assignee}
                disabled={readonly}
                onChange={(e) =>
                  setAssignee(e.target.value ? Number(e.target.value) : "")
                }
              >
                <option value="">Не назначен</option>
                {state.users.map((u) => (
                  <option value={u.id} key={u.id}>
                    {u.name}
                  </option>
                ))}
              </select>
            </label>
            {!readonly && assignee !== state.me.id && (
              <button
                className="text-action"
                onClick={() => setAssignee(state.me.id)}
              >
                Назначить себя
              </button>
            )}
            <fieldset>
              <legend>Метки</legend>
              {state.labels.map((l) => (
                <label className="choice-row" key={l.id}>
                  <input
                    type="checkbox"
                    checked={labels.includes(l.id)}
                    disabled={readonly}
                    onChange={() => setLabels(toggle(labels, l.id))}
                  />
                  <span className="dot" style={{ background: l.color }} />
                  {l.name}
                </label>
              ))}
              {!state.labels.length && (
                <span className="muted">Нет меток на доске</span>
              )}
            </fieldset>
            <fieldset>
              <legend>Участники</legend>
              {state.users.map((u) => (
                <label className="choice-row" key={u.id}>
                  <input
                    type="checkbox"
                    checked={participants.includes(u.id)}
                    disabled={readonly}
                    onChange={() => setParticipants(toggle(participants, u.id))}
                  />
                  {u.name}
                </label>
              ))}
            </fieldset>
            {!readonly && buttons.length > 0 && (
              <fieldset>
                <legend>Действия</legend>
                {buttons.map((b) => (
                  <button
                    className="secondary"
                    key={b.id}
                    disabled={busy || dirty}
                    title={dirty ? "Сначала сохраните карточку" : b.name}
                    onClick={() =>
                      void run(async () => {
                        const result = await api<TaskAutomationRun>(
                          `automations/${b.id}/run/`,
                          "POST",
                          { task: task.id },
                        );
                        await resources();
                        await reload();
                        if (result.status !== "success")
                          throw new Error(
                            result.error || "Действие не выполнено",
                          );
                        await syncFields();
                        setNotice("Действие выполнено");
                      })
                    }
                  >
                    <Play size={14} />
                    {b.name}
                  </button>
                ))}
              </fieldset>
            )}
          </aside>
        </div>
        <div className="task-save-bar">
          <span role="status">
            {dirty
              ? "Есть несохранённые изменения"
              : notice || "Все изменения сохранены"}
          </span>
          <button className="secondary" onClick={requestClose}>
            Закрыть
          </button>
          {!readonly && (
            <button
              className="primary"
              type="submit"
              form="task-fields"
              disabled={busy || !title.trim()}
            >
              <Save size={16} />
              Сохранить
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
}
