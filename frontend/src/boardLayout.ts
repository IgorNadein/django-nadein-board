import type { TaskCard, TaskColumn, TaskColumnRow } from "./types";

export type TaskBoardLayout = {
  activeColumns: TaskColumn[];
  topLevelColumns: TaskColumn[];
  subcolumnsByParent: Map<number, TaskColumn[]>;
  rowsByColumn: Map<number, TaskColumnRow[]>;
  leafColumns: TaskColumn[];
  columnCounts: Map<number, number>;
  tasksByPlacement: Map<string, TaskCard[]>;
};

function byPositionThenId<T extends { id: number; position: number }>(
  left: T,
  right: T,
): number {
  return left.position - right.position || left.id - right.id;
}

const taskPriorityOrder: Record<TaskCard["priority"], number> = {
  critical: 0,
  high: 1,
  medium: 2,
  low: 3,
};

function byPriorityThenPositionThenId(left: TaskCard, right: TaskCard): number {
  const leftPriority =
    taskPriorityOrder[left.priority] ?? taskPriorityOrder.medium;
  const rightPriority =
    taskPriorityOrder[right.priority] ?? taskPriorityOrder.medium;
  return leftPriority - rightPriority || byPositionThenId(left, right);
}

export function taskPlacementKey(
  columnId: number,
  rowId: number | null,
): string {
  return `${columnId}:${rowId ?? "base"}`;
}

export function buildTaskBoardLayout(
  columns: TaskColumn[] | null | undefined,
  rows: TaskColumnRow[] | null | undefined,
  tasks: TaskCard[] | null | undefined,
): TaskBoardLayout {
  const activeColumns = (columns || []).filter((column) => !column.is_archived);
  const topLevelColumns = activeColumns
    .filter((column) => !column.parent)
    .sort(byPositionThenId);

  const subcolumnsByParent = new Map<number, TaskColumn[]>();
  for (const column of activeColumns) {
    if (!column.parent) continue;
    const siblings = subcolumnsByParent.get(column.parent) || [];
    siblings.push(column);
    subcolumnsByParent.set(column.parent, siblings);
  }
  for (const siblings of subcolumnsByParent.values()) {
    siblings.sort(byPositionThenId);
  }

  const rowsByColumn = new Map<number, TaskColumnRow[]>();
  for (const row of rows || []) {
    const columnRows = rowsByColumn.get(row.column) || [];
    columnRows.push(row);
    rowsByColumn.set(row.column, columnRows);
  }
  for (const columnRows of rowsByColumn.values()) {
    columnRows.sort(byPositionThenId);
  }

  const leafColumns = topLevelColumns.flatMap((column) => {
    const subcolumns = subcolumnsByParent.get(column.id) || [];
    return subcolumns.length > 0 ? subcolumns : [column];
  });

  const tasksByPlacement = new Map<string, TaskCard[]>();
  const columnCounts = new Map<number, number>();
  for (const column of activeColumns) columnCounts.set(column.id, 0);

  for (const task of tasks || []) {
    const key = taskPlacementKey(task.column, task.row || null);
    const placementTasks = tasksByPlacement.get(key) || [];
    placementTasks.push(task);
    tasksByPlacement.set(key, placementTasks);
    columnCounts.set(task.column, (columnCounts.get(task.column) || 0) + 1);
  }
  for (const placementTasks of tasksByPlacement.values()) {
    placementTasks.sort(byPriorityThenPositionThenId);
  }

  for (const column of topLevelColumns) {
    const subcolumns = subcolumnsByParent.get(column.id) || [];
    if (subcolumns.length === 0) continue;
    columnCounts.set(
      column.id,
      (columnCounts.get(column.id) || 0) +
        subcolumns.reduce(
          (total, subcolumn) => total + (columnCounts.get(subcolumn.id) || 0),
          0,
        ),
    );
  }

  return {
    activeColumns,
    topLevelColumns,
    subcolumnsByParent,
    rowsByColumn,
    leafColumns,
    columnCounts,
    tasksByPlacement,
  };
}
