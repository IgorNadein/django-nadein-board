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
