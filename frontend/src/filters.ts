import type { TaskCard } from "./types";
export type TaskFilters = {
  priority: string;
  assignee: string;
  label: string;
  due: string;
  status: string;
};
export function filterTasks(
  tasks: TaskCard[],
  query: string,
  filters: TaskFilters,
  me: number,
  now = new Date(),
) {
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  return tasks.filter(
    (t) =>
      !t.is_archived &&
      `${t.id} ${t.title} ${t.description} ${t.labels.map((l) => l.name).join(" ")}`
        .toLocaleLowerCase()
        .includes(query.toLocaleLowerCase()) &&
      (!filters.priority || t.priority === filters.priority) &&
      (!filters.assignee ||
        (filters.assignee === "none"
          ? !t.assignee
          : t.assignee?.id ===
            (filters.assignee === "me" ? me : Number(filters.assignee)))) &&
      (!filters.label ||
        t.labels.some((l) => l.id === Number(filters.label))) &&
      (!filters.status ||
        (filters.status === "done" ? !!t.completed_at : !t.completed_at)) &&
      (!filters.due ||
        (filters.due === "none"
          ? !t.due_date
          : filters.due === "today"
            ? t.due_date === today
            : !!t.due_date && t.due_date < today && !t.completed_at)),
  );
}
