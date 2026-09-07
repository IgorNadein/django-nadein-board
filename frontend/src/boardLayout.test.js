import test from "node:test";
import assert from "node:assert/strict";

import { buildTaskBoardLayout, taskPlacementKey } from "./boardLayout.ts";

const column = (id, position, parent = null, isArchived = false) => ({
  id,
  board: 1,
  parent,
  name: `column-${id}`,
  position,
  is_done: false,
  is_archived: isArchived,
  created_at: "",
  updated_at: "",
});

const row = (id, columnId, position) => ({
  id,
  column: columnId,
  name: `row-${id}`,
  position,
  created_at: "",
  updated_at: "",
});

const task = (id, columnId, rowId, position, priority = "medium") => ({
  id,
  board: 1,
  column: columnId,
  row: rowId,
  title: `task-${id}`,
  priority,
  position,
  created_at: "",
  updated_at: "",
});

test("board layout orders columns, subcolumns and rows without mutating source arrays", () => {
  const columns = [
    column(2, 2000),
    column(1, 1000),
    column(12, 2000, 1),
    column(11, 1000, 1),
    column(99, 0, null, true),
  ];
  const rows = [row(2, 1, 2000), row(1, 1, 1000)];

  const layout = buildTaskBoardLayout(columns, rows, []);

  assert.deepEqual(
    layout.activeColumns.map(({ id }) => id),
    [2, 1, 12, 11],
  );
  assert.deepEqual(
    layout.topLevelColumns.map(({ id }) => id),
    [1, 2],
  );
  assert.deepEqual(
    layout.subcolumnsByParent.get(1)?.map(({ id }) => id),
    [11, 12],
  );
  assert.deepEqual(
    layout.rowsByColumn.get(1)?.map(({ id }) => id),
    [1, 2],
  );
  assert.deepEqual(
    layout.leafColumns.map(({ id }) => id),
    [11, 12, 2],
  );
  assert.deepEqual(
    columns.map(({ id }) => id),
    [2, 1, 12, 11, 99],
  );
  assert.deepEqual(
    rows.map(({ id }) => id),
    [2, 1],
  );
});

test("board layout groups and orders tasks by subcolumn and lane", () => {
  const tasks = [
    task(3, 11, null, 2000),
    task(2, 11, 7, 1000),
    task(1, 11, null, 1000),
  ];

  const layout = buildTaskBoardLayout(
    [column(1, 1000), column(11, 1000, 1)],
    [row(7, 1, 1000)],
    tasks,
  );

  assert.deepEqual(
    layout.tasksByPlacement
      .get(taskPlacementKey(11, null))
      ?.map(({ id }) => id),
    [1, 3],
  );
  assert.deepEqual(
    layout.tasksByPlacement.get(taskPlacementKey(11, 7))?.map(({ id }) => id),
    [2],
  );
});

test("board layout orders tasks by priority and then by time in the column", () => {
  const layout = buildTaskBoardLayout(
    [column(1, 1000)],
    [],
    [
      task(1, 1, null, 1000, "medium"),
      task(2, 1, null, 4000, "critical"),
      task(3, 1, null, 2000, "high"),
      task(4, 1, null, 3000, "critical"),
      task(5, 1, null, 500, "low"),
    ],
  );

  assert.deepEqual(
    layout.tasksByPlacement.get(taskPlacementKey(1, null))?.map(({ id }) => id),
    [4, 2, 3, 1, 5],
  );
});

test("top-level column count includes direct tasks and all subcolumn tasks", () => {
  const layout = buildTaskBoardLayout(
    [column(1, 1000), column(11, 1000, 1), column(12, 2000, 1)],
    [],
    [
      task(1, 1, null, 1000),
      task(2, 11, null, 1000),
      task(3, 12, null, 1000),
      task(4, 12, null, 2000),
    ],
  );

  assert.equal(layout.columnCounts.get(1), 4);
  assert.equal(layout.columnCounts.get(11), 1);
  assert.equal(layout.columnCounts.get(12), 2);
});
