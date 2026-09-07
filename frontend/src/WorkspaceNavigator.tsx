import { useState } from "react";
import {
  Kanban,
  Plus,
  Search,
  Star,
  Folder,
  ChevronDown,
  Archive,
  PanelLeftClose,
  PanelLeftOpen,
  Pencil,
} from "lucide-react";
import TaskBoardAvatar from "./TaskBoardAvatar";
import type { Api, Board, Group } from "./types";
export default function WorkspaceNavigator({
  boards,
  groups,
  selected,
  select,
  create,
  editGroup,
  api,
  reload,
  run,
}: {
  boards: Board[];
  groups: Group[];
  selected: number | null;
  select: (b: Board) => void;
  create: () => void;
  editGroup: (g?: Group) => void;
  api: Api;
  reload: () => Promise<void>;
  run: (f: () => Promise<void>) => Promise<void>;
}) {
  const [search, setSearch] = useState(""),
    [group, setGroup] = useState<number | string>("all"),
    [archived, setArchived] = useState(false),
    [sort, setSort] = useState("name"),
    [collapsed, setCollapsed] = useState(() => window.innerWidth <= 800),
    [folds, setFolds] = useState<number[]>([]);
  function choose(b: Board) {
    select(b);
    if (window.innerWidth <= 800) setCollapsed(true);
  }
  const visible = boards
    .filter(
      (b) =>
        b.is_archived === archived &&
        b.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) &&
        (group === "all" ||
          (group === "starred" && b.is_pinned) ||
          (typeof group === "number" &&
            groups.find((g) => g.id === group)?.boards.includes(b.id))),
    )
    .sort(
      (a, b) =>
        Number(b.is_pinned) - Number(a.is_pinned) ||
        (sort === "newest"
          ? b.created_at.localeCompare(a.created_at)
          : sort === "updated"
            ? b.updated_at.localeCompare(a.updated_at)
            : a.name.localeCompare(b.name)),
    );
  const move = (id: number, g: Group) =>
    void run(async () => {
      await api(`groups/${g.id}/`, "PATCH", {
        boards: [...new Set([...g.boards, id])],
      });
      await reload();
    });
  return (
    <aside className={`nb-sidebar ${collapsed ? "sidebar-collapsed" : ""}`}>
      <div className="nb-brand">
        <span>
          <Kanban size={22} />
        </span>
        {!collapsed && (
          <div>
            Nadein Board<small>Рабочее пространство</small>
          </div>
        )}
      </div>
      <button
        className="sidebar-collapse"
        title={collapsed ? "Показать доски" : "Свернуть навигацию"}
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <PanelLeftOpen size={19} /> : <PanelLeftClose size={19} />}
      </button>
      {!collapsed && (
        <>
          <button className="primary" onClick={create}>
            <Plus size={16} />
            Создать доску
          </button>
          <label className="search navigator-search">
            <Search size={15} />
            <input
              placeholder="Найти доску"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
          <div className="navigator-scroll">
            <button
              className={`nav-filter ${group === "all" ? "selected" : ""}`}
              onClick={() => setGroup("all")}
            >
              <Kanban size={16} />
              Все доски
              <span>{boards.filter((b) => !b.is_archived).length}</span>
            </button>
            <button
              className={`nav-filter ${group === "starred" ? "selected" : ""}`}
              onClick={() => setGroup("starred")}
            >
              <Star size={16} />
              Избранное
            </button>
            <div className="sidebar-label">
              ГРУППЫ
              <button title="Создать группу" onClick={() => editGroup()}>
                <Plus size={15} />
              </button>
            </div>
            {groups.map((g) => (
              <div
                key={g.id}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  const id = Number(e.dataTransfer.getData("text/board-id"));
                  if (boards.some((b) => b.id === id)) move(id, g);
                }}
              >
                <div className="group-heading">
                  <button
                    onClick={() => {
                      setGroup(g.id);
                      setFolds((f) =>
                        f.includes(g.id)
                          ? f.filter((i) => i !== g.id)
                          : [...f, g.id],
                      );
                    }}
                  >
                    <ChevronDown
                      size={13}
                      style={{
                        transform: folds.includes(g.id)
                          ? "rotate(-90deg)"
                          : undefined,
                      }}
                    />
                    <Folder size={15} color={g.color} />
                    {g.name}
                    <small>{g.boards.length}</small>
                  </button>
                  <button
                    title={`Настройки группы ${g.name}`}
                    onClick={() => editGroup(g)}
                  >
                    <Pencil size={12} />
                  </button>
                </div>
                {!folds.includes(g.id) &&
                  boards
                    .filter(
                      (b) =>
                        g.boards.includes(b.id) && b.is_archived === archived,
                    )
                    .map((b) => (
                      <button
                        key={b.id}
                        className="group-board"
                        onClick={() => choose(b)}
                      >
                        {b.name}
                      </button>
                    ))}
              </div>
            ))}
            <div className="sidebar-label">
              {archived ? "АРХИВ ДОСОК" : "ДОСКИ"}
              <select
                aria-label="Порядок досок"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="name">А—Я</option>
                <option value="newest">Новые</option>
                <option value="updated">Обновлённые</option>
              </select>
            </div>
            <nav>
              {visible.map((b) => (
                <div
                  key={b.id}
                  className={`nav-board ${b.id === selected ? "active" : ""}`}
                  draggable
                  onDragStart={(e) =>
                    e.dataTransfer.setData("text/board-id", String(b.id))
                  }
                >
                  <button onClick={() => choose(b)}>
                    <TaskBoardAvatar name={b.name} src={b.avatar} size="sm" />
                    <span>{b.name}</span>
                  </button>
                  <button
                    title={b.is_pinned ? "Убрать из избранного" : "В избранное"}
                    className={b.is_pinned ? "pinned" : ""}
                    onClick={() =>
                      void run(async () => {
                        await api(`boards/${b.id}/pin/`, "POST", {
                          is_pinned: !b.is_pinned,
                        });
                        await reload();
                      })
                    }
                  >
                    <Star
                      size={14}
                      fill={b.is_pinned ? "currentColor" : "none"}
                    />
                  </button>
                </div>
              ))}
            </nav>
            {!visible.length && (
              <p className="muted p-3 text-sm">Здесь пока нет досок</p>
            )}
          </div>
          <button
            className={`nav-filter ${archived ? "selected" : ""}`}
            onClick={() => setArchived(!archived)}
          >
            <Archive size={16} />
            {archived ? "К активным доскам" : "Архив досок"}
          </button>
          <p className="navigator-tip">
            Перетащите доску в группу, чтобы добавить её туда.
          </p>
        </>
      )}
    </aside>
  );
}
