import { useEffect, useState, type FormEvent } from "react";
import { ImagePlus, Trash2, X } from "lucide-react";
import TaskBoardAvatar from "./TaskBoardAvatar";
import AvatarCropper from "./AvatarCropper";
import type { Board, User } from "./types";
export default function BoardEditor({
  board,
  api,
  run,
  busy,
  saved,
  close,
}: {
  board?: Board;
  api: <T>(p: string, m?: string, d?: unknown) => Promise<T>;
  run: (f: () => Promise<void>) => Promise<void>;
  busy: boolean;
  saved: (b: Board) => Promise<void>;
  close: () => void;
}) {
  const [name, setName] = useState(board?.name || ""),
    [description, setDescription] = useState(board?.description || ""),
    [access, setAccess] = useState(board?.access_scope || "private"),
    [members, setMembers] = useState((board?.members || []).join(", ")),
    [crop, setCrop] = useState<string | null>(null),
    [preview, setPreview] = useState<string | null>(null),
    [removed, setRemoved] = useState(false),
    [created, setCreated] = useState<number | null>(board?.id || null);
  const [people, setPeople] = useState<User[]>([]),
    [memberQuery, setMemberQuery] = useState("");
  useEffect(() => {
    let active = true;
    const timer = setTimeout(() => {
      api<User[]>(`boards/people/?q=${encodeURIComponent(memberQuery)}`)
        .then((users) => {
          if (active) setPeople(users);
        })
        .catch(() => {});
    }, 200);
    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, [api, memberQuery]);
  async function submit(e: FormEvent) {
    e.preventDefault();
    await run(async () => {
      const ids = members.trim()
        ? members.split(",").map((x) => Number(x.trim()))
        : [];
      if (ids.some((x) => !Number.isInteger(x) || x <= 0))
        throw new Error("Укажите ID участников через запятую.");
      let result = await api<Board>(
        created ? `boards/${created}/` : "boards/",
        created ? "PATCH" : "POST",
        {
          name,
          description,
          access_scope: access,
          members: ids,
          ...(board
            ? {
                is_archived:
                  new FormData(e.currentTarget as HTMLFormElement).get(
                    "is_archived",
                  ) === "on",
              }
            : {}),
        },
      );
      setCreated(result.id);
      if (preview) {
        const response = await fetch(preview);
        const data = new FormData();
        data.append("file", await response.blob(), "avatar.jpg");
        result = await api<Board>(`boards/${result.id}/avatar/`, "POST", data);
      } else if (removed && board?.avatar)
        result = await api<Board>(`boards/${result.id}/avatar/`, "DELETE");
      await saved(result);
      close();
    });
  }
  return (
    <div className="modal-backdrop">
      <section
        className="modal"
        role="dialog"
        aria-label={board ? "Редактировать доску" : "Новая доска"}
      >
        <div className="modal-header">
          <h2>{board ? "Редактировать доску" : "Новая доска"}</h2>
          <button onClick={close} aria-label="Закрыть">
            <X size={20} />
          </button>
        </div>
        <form className="form" onSubmit={submit}>
          <div>
            <span className="app-text-muted mb-2 block text-xs font-medium">
              Аватар доски
            </span>
            <div className="flex items-center gap-3">
              <TaskBoardAvatar
                name={name || "Доска"}
                src={preview || (!removed ? board?.avatar : null)}
                size="lg"
              />
              <label className="app-action-secondary inline-flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium">
                <ImagePlus size={15} />
                {preview || board?.avatar ? "Заменить" : "Загрузить"}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      if (file.size > 5 * 1024 * 1024) {
                        void run(async () => {
                          throw new Error("Выберите изображение до 5 МБ.");
                        });
                      } else {
                        const reader = new FileReader();
                        reader.onload = () => setCrop(String(reader.result));
                        reader.readAsDataURL(file);
                      }
                    }
                    e.target.value = "";
                  }}
                />
              </label>
              {(preview || board?.avatar) && (
                <button
                  type="button"
                  className="danger"
                  onClick={() => {
                    setPreview(null);
                    setRemoved(true);
                  }}
                >
                  <Trash2 size={15} />
                  Удалить
                </button>
              )}
            </div>
          </div>
          <label>
            Название доски
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              maxLength={255}
            />
          </label>
          <label>
            Описание
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </label>
          <div>
            <span className="app-text-muted mb-2 block text-xs font-medium">
              Доступ
            </span>
            <div className="grid grid-cols-3 gap-2">
              {[
                ["private", "Для себя"],
                ["restricted", "Выборочно"],
                ["all", "Для всех"],
              ].map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  className={access === id ? "primary" : "secondary"}
                  onClick={() => setAccess(id)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          {access === "restricted" && (
            <fieldset>
              <legend>Участники доски</legend>
              <input
                value={memberQuery}
                onChange={(e) => setMemberQuery(e.target.value)}
                placeholder="Поиск по логину"
                aria-label="Найти участника"
              />
              <div className="people-picker">
                {people.map((u) => {
                  const ids = members
                    .split(",")
                    .map((x) => Number(x.trim()))
                    .filter(Boolean);
                  return (
                    <label className="choice-row" key={u.id}>
                      <input
                        type="checkbox"
                        checked={ids.includes(u.id)}
                        onChange={() =>
                          setMembers(
                            (ids.includes(u.id)
                              ? ids.filter((id) => id !== u.id)
                              : [...ids, u.id]
                            ).join(", "),
                          )
                        }
                      />
                      {u.name}
                    </label>
                  );
                })}
              </div>
              <small className="muted">
                Выбрано: {members.split(",").filter((x) => x.trim()).length}
              </small>
            </fieldset>
          )}
          {board && (
            <label className="choice-row">
              <input
                type="checkbox"
                name="is_archived"
                defaultChecked={board.is_archived}
              />
              Убрать доску в архив
            </label>
          )}
          <div className="flex justify-end gap-2">
            <button type="button" className="secondary" onClick={close}>
              Отмена
            </button>
            <button className="primary" disabled={busy || !name.trim()}>
              {board ? "Сохранить" : "Создать"}
            </button>
          </div>
        </form>
      </section>
      {crop && (
        <AvatarCropper
          initialImage={crop}
          mode="avatar"
          title="Аватар доски"
          onCancel={() => setCrop(null)}
          onCropComplete={(value) => {
            setPreview(value);
            setRemoved(false);
            setCrop(null);
          }}
        />
      )}
    </div>
  );
}
