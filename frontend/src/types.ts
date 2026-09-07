export type TaskPriority = "low" | "medium" | "high" | "critical";
export type User = { id: number; name: string; is_active: boolean };
export type TaskColumn = {
  id: number;
  board: number;
  parent: number | null;
  name: string;
  position: number;
  color: string;
  is_done: boolean;
  is_archived: boolean;
};
export type TaskColumnRow = {
  tasks_count?: number;
  id: number;
  column: number;
  name: string;
  position: number;
  color: string;
};
export type Label = { id: number; board: number; name: string; color: string };
export type TaskCard = {
  is_archived: boolean;
  participants: User[];
  created_at: string;
  updated_at: string;
  cover?: TaskCover | null;
  id: number;
  board: number;
  column: number;
  row: number | null;
  title: string;
  description: string;
  assignee: User | null;
  labels: Label[];
  priority: TaskPriority;
  due_date: string | null;
  position: number;
  completed_at: string | null;
  checklist_total: number;
  checklist_completed: number;
  comments_count: number;
  attachments_count: number;
  linked_objects_count?: number;
  linked_messages_count?: number;
};
export type Board = {
  created_at: string;
  updated_at: string;
  is_pinned: boolean;
  can_manage: boolean;
  avatar?: string | null;
  id: number;
  name: string;
  description: string;
  access_scope: string;
  members: number[];
  is_archived: boolean;
};
export type State = {
  board: Board;
  columns: TaskColumn[];
  rows: TaskColumnRow[];
  tasks: TaskCard[];
  labels: Label[];
  users: User[];
  me: User;
  can_manage: boolean;
};
export type Checklist = {
  id: number;
  title: string;
  position: number;
  is_completed: boolean;
};
export type Comment = {
  id: number;
  text: string;
  author: User;
  created_at: string;
};
export type Attachment = {
  id: number;
  name: string;
  size: number;
  url: string;
};
export type TaskAttachment = {
  id: number;
  file_name: string;
  mime_type: string;
  thumbnail_url?: string | null;
  download_url: string;
};
export type TaskCover = {
  id: number;
  kind: string;
  attachment?: TaskAttachment | null;
  checklist?: { total: number; completed: number; items: Checklist[] } | null;
  comment?: {
    author: User;
    text: string;
    attachments: TaskAttachment[];
  } | null;
  external_link?: { title: string; url: string } | null;
  linked_object?: {
    title: string;
    kind_display: string;
    description: string;
  } | null;
};

export type TaskAutomationKind = "event" | "schedule" | "button";
export type TaskAutomationTrigger =
  | "manual"
  | "task_created"
  | "task_updated"
  | "task_moved"
  | "label_added"
  | "label_removed"
  | "assignee_changed"
  | "due_date_changed"
  | "priority_changed"
  | "attachment_added"
  | "comment_added"
  | "checklist_completed"
  | "linked_object_added"
  | "date_reached";

export type TaskAutomationCondition =
  | {
      operator: "and" | "or" | "not";
      children: TaskAutomationCondition[];
    }
  | {
      field: string;
      operator: string;
      value?: unknown;
    };

export interface TaskAutomationAction {
  type: string;
  target?: "column" | "column_name" | "first" | "final";
  column_id?: number;
  column_name?: string;
  user_id?: number | null;
  label_id?: number;
  priority?: TaskPriority;
  mode?: "clear" | "fixed" | "relative";
  date?: string;
  days?: number;
  text?: string;
  items?: string[];
}

export interface TaskAutomation {
  id: number;
  name: string;
  description?: string;
  kind: TaskAutomationKind;
  trigger: TaskAutomationTrigger;
  conditions: TaskAutomationCondition;
  actions: TaskAutomationAction[];
  schedule_config: {
    mode?: "task_due_date" | "fixed_datetime";
    days_before?: number;
    time?: string;
    at?: string;
  };
  applies_to_all_boards: boolean;
  boards: number[];
  is_active: boolean;
  stop_on_error: boolean;
  position: number;
  created_by?: User;
  last_run_at?: string | null;
  runs_count?: number;
  can_manage?: boolean;
  created_at: string;
  updated_at: string;
}

export interface TaskAutomationRun {
  id: number;
  automation: number;
  automation_name: string;
  task: number;
  task_title: string;
  actor?: User | null;
  source: "event" | "schedule" | "manual";
  status: "running" | "success" | "partial" | "failed" | "skipped";
  context: Record<string, unknown>;
  actions_log: Array<Record<string, unknown>>;
  error?: string;
  started_at: string;
  finished_at?: string | null;
}

export interface TaskAutomationCatalog {
  kinds: Record<TaskAutomationKind, string>;
  event_triggers: Record<string, string>;
  condition_fields: Record<string, string>;
  condition_operators: Record<string, string>;
  action_types: Record<string, string>;
  priorities: Record<TaskPriority, string>;
}

export type Api = <T>(
  path: string,
  method?: string,
  data?: unknown,
) => Promise<T>;
export type TaskBoard = Board & { columns: TaskColumn[] };
export type TaskBoardSummary = Board;
export type TaskLabel = Label;
export type Group = {
  id: number;
  name: string;
  color: string;
  boards: number[];
  position: number;
};
export type ExternalLink = { id: number; title: string; url: string };
export type Activity = {
  id: number;
  action: string;
  label: string;
  actor: User | null;
  metadata: Record<string, unknown>;
  created_at: string;
};
