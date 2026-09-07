# Integration

## Required host facilities

Django 5.2, Python 3.11+, Django REST Framework, Pillow, database, Django auth/contenttypes/sessions/staticfiles, session/auth/CSRF middleware, Django templates with `APP_DIRS=True`, a login view and `LOGIN_URL`. Frontend requests use same-origin cookies and an explicit CSRF token, including when `CSRF_COOKIE_HTTPONLY=True`.

The package uses `settings.AUTH_USER_MODEL` and standard user methods (`get_username`, `get_full_name`, `is_active`, `is_superuser`). Reverse user relation names and database constraints are prefixed to avoid collisions with EUSRR's original tasks app. There are no imports from EUSRR.

## Permissions

By default, a board is private to its creator. `restricted` boards are visible to creator and members; `all` boards are visible to every authenticated user. All users who can see a board can collaborate on its cards. Private scope ignores any retained member list. Only the creator or a superuser can change/delete board structure, labels or membership. Comment deletion requires its author or the board owner. Uploaded files require board access for download.

Never publish the demo settings as production settings. Configure your host's HTTPS, secure session cookies, secret, login, database and static serving normally. Attachment storage must not be exposed as a public `/media/` directory. Downloads are forced as attachments. The default upload limit is 10 MiB; malware scanning, quotas and content retention are host responsibilities. Deleted card/board files may require a periodic orphan-file cleanup in host storage.

For custom visibility, set `NADEIN_BOARD_ACCESS_FILTER = "your_app.access.filter_boards"`. The callable receives `(user, queryset)` and must return only boards that user may collaborate on. It should be efficient and must not evaluate recursively through `accessible_boards`. Default structural ownership checks still apply.

`NADEIN_BOARD_MAX_UPLOAD_BYTES` customizes the maximum attachment size.

## API

The URL prefix is configurable. With `path("board/", include("nadein_board.urls"))`:

- `/board/api/boards/`: CRUD. `name`, `description`, `access_scope`, `members` (host user IDs), `is_archived`.
- `/board/api/boards/{id}/state/`: board, columns, lanes, cards, labels, assignable users, current user and `can_manage`.
- `/board/api/columns/`: CRUD; `board`, `parent`, `name`, `position`, `color`, `is_done`, `is_archived`.
- `/board/api/rows/`: CRUD; `column` (top-level), `name`, `position`, `color`.
- `/board/api/labels/`: CRUD; `board`, `name`, `color`.
- `/board/api/tasks/`: CRUD; `board`, `column`, `row`, `title`, `description`, `priority`, `assignee_id`, `label_ids`, `due_date`, `position`.
- `/board/api/tasks/{id}/move/`: POST `column`, optional `row` and `before` (destination card ID). Atomic position updates; priorities still take precedence in display order.
- `/board/api/tasks/{id}/checklist/`: GET/POST; PATCH/DELETE with item `id`.
- `/board/api/tasks/{id}/comments/`: GET/POST (`text`); DELETE with `id`.
- `/board/api/tasks/{id}/attachments/`: GET, multipart POST (`file`), DELETE with `id`.
- Download URLs are returned by the attachments endpoint and check session access.

Moving tasks across boards is rejected. Adding subcolumns to a populated column requires moving its cards out first. Delete a column only after moving/deleting its cards. The default UI exposes card collaboration and core structure operations. Board settings include membership IDs, visibility and cropped avatars. Board archiving remains an API operation. No anonymous/demo login is shipped as part of package URLs; login belongs to the host.

## Frontend embedding

The default template provides the complete workspace. Override `nadein_board/index.html` to integrate with your host template; include the bundled CSS and JavaScript and a mount point:

```html
{% load static %}
<link rel="stylesheet" href="{% static 'nadein_board/board.css' %}">
<div id="nadein-board" data-api-base="{% url 'nadein_board:api-root' %}" data-csrf-token="{{ csrf_token }}"></div>
<script type="module" src="{% static 'nadein_board/board.js' %}"></script>
```

The bundle also exports `mountBoard(element, {apiBase, csrfToken})`, which returns an unmount callback, and `NadeinBoard` for source-level React integration. Import `frontend/src/main.tsx` in a compatible React/TypeScript build; do not mix another React instance into the prebundled component. The CSS currently includes Tailwind's reset and page-level styling; use a dedicated page/iframe when the host has conflicting global styles. Browser history routing and Next.js are not required.

## Data migration

The initial migration creates new tables. It does not migrate existing EUSRR task data or modify its schema. An EUSRR-to-package data migration needs explicit mappings for users, board memberships, labels and removed corporate links; no production database is touched by this repository.

## Original frontend interactions restored

Middle-button drag pans the board in both axes. On mobile, columns/cells have independent scroll viewports. Column headers are draggable within their sibling group; column/row collapsing is stored per user/board in localStorage. The + button opens EUSRR's inline quick composer with urgency buttons. Column jump navigation and expanded view are included. Avatar uploads use the original cropper and are re-encoded on the server.

POST `/boards/{id}/reorder-columns/` with `ids` and optional `parent` persists sibling order atomically. GET/POST/DELETE `/boards/{id}/avatar/` reads or replaces a protected avatar (multipart `file`). PUT `/tasks/{id}/cover/` with `kind` (`attachment`, `checklist`, `comment`) and source `id` where applicable selects a cover; DELETE removes it. Cover sources must belong to the same card.
