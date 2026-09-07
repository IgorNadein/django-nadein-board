import type { TaskColumn } from "./types";

export function getTaskDestinationColumns(
  columns: TaskColumn[] | null | undefined,
): TaskColumn[] {
  const activeColumns = (columns || []).filter((column) => !column.is_archived);
  const topLevelColumns = activeColumns
    .filter((column) => !column.parent)
    .sort(
      (left, right) => left.position - right.position || left.id - right.id,
    );
  return topLevelColumns.flatMap((column) => {
    const subcolumns = activeColumns
      .filter((item) => item.parent === column.id)
      .sort(
        (left, right) => left.position - right.position || left.id - right.id,
      );
    return subcolumns.length > 0 ? subcolumns : [column];
  });
}

export function getTaskColumnDisplayName(
  column: TaskColumn,
  columns: TaskColumn[] | null | undefined,
): string {
  if (!column.parent) return column.name;
  const parent = (columns || []).find((item) => item.id === column.parent);
  return parent ? `${parent.name} / ${column.name}` : column.name;
}
