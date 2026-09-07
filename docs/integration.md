# Integration

## Required host facilities

Django 5.2, Python 3.11+, Django REST Framework, Pillow, database, Django auth/contenttypes/sessions/staticfiles, session/auth/CSRF middleware, Django templates with `APP_DIRS=True`, a login view and `LOGIN_URL`. Frontend requests use same-origin cookies and an explicit CSRF token, including when `CSRF_COOKIE_HTTPONLY=True`.

The package uses `settings.AUTH_USER_MODEL` and standard user methods (`get_username`, `get_full_name`, `is_active`, `is_superuser`). Reverse user relation names and database constraints are prefixed to avoid collisions with other host applications.

## Permissions

By default, a board is private to its creator. `restricted` boards are visible to creator and members; `all` boards are visible to every authenticated user. All users who can see a board can collaborate on its cards. Private scope ignores any retained member list. Only the creator or a superuser can change/delete board structure, labels or membership. Comment editing/deletion requires its author or the board owner. Uploaded files require board access for download.

Never publish the demo settings as production settings. Configure your host's HTTPS, secure session cookies, secret, login, database and static serving normally. Attachment storage must not be exposed as a public `/media/` directory. Downloads are forced as attachments. The default upload limit is 10 MiB; malware scanning, quotas and content retention are host responsibilities. Deleted card/board files may require a periodic orphan-file cleanup in host storage.

For custom visibility, set `NADEIN_BOARD_ACCESS_FILTER = "your_app.access.filter_boards"`. The callable receives `(user, queryset)` and must return only boards that user may collaborate on. It should be efficient and must not evaluate recursively through `accessible_boards`. Default structural ownership checks still apply.

`NADEIN_BOARD_USER_FILTER = "your_app.access.filter_people"` optionally limits the membership picker. The callable receives `(requesting_user, active_user_queryset)`. The default directory returns at most 50 active users, searchable by the user model's `USERNAME_FIELD`; it exposes only IDs and display names, not email/contact fields.

`NADEIN_BOARD_MAX_UPLOAD_BYTES` customizes the maximum attachment size.

## API

The URL prefix is configurable. With `path("board/", include("nadein_board.urls"))`:

- `/board/api/boards/`: CRUD. `name`, `description`, `access_scope`, `members` (host user IDs), `is_archived`.
- `/board/api/boards/{id}/state/`: board, columns, lanes, cards, labels, assignable users, current user and `can_manage`.
- `/board/api/columns/`: CRUD; `board`, `parent`, `name`, `position`, `color`, `is_done`, `is_archived`.
- `/board/api/rows/`: CRUD; `column` (top-level), `name`, `position`, `color`.
- `/board/api/labels/`: CRUD; `board`, `name`, `color`.
- `/board/api/tasks/`: CRUD; `board`, `column`, `row`, `title`, `description`, `priority`, `assignee_id`, `participant_ids`, `label_ids`, `due_date`, `position`, `is_archived`.
- `/board/api/tasks/{id}/move/`: POST `column`, optional `row` and `before` (destination card ID). Atomic position updates; priorities still take precedence in display order.
- `/board/api/tasks/{id}/checklist/`: GET/POST; PATCH/DELETE with item `id`.
- `/board/api/tasks/{id}/comments/`: GET/POST (`text`); PATCH/DELETE with `id`.
- `/board/api/tasks/{id}/attachments/`: GET, multipart POST (`file`), DELETE with `id`.
- Download URLs are returned by the attachments endpoint and check session access.

Moving tasks across boards is rejected. Adding subcolumns to a populated column requires moving its cards out first. Delete a column only after moving/deleting its cards. The UI exposes board/card archive and restore, a user picker, groups/favourites, filters and structure management. Archived cards/boards retain resources and reject edits until restored. No anonymous/demo login is shipped as part of package URLs; login belongs to the host.

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

The initial migration creates the package tables. Importing tasks from another system requires explicit mappings for users, board memberships, columns and labels. The demo seeders create synthetic data and are restricted to DEBUG environments.

## Board interactions

Middle-button drag pans the board in both axes. On mobile, columns/cells have independent scroll viewports. Column headers are draggable within their sibling group; column/row collapsing is stored per user/board in localStorage. The + button opens the inline quick composer with urgency buttons. Column jump navigation and expanded view are included. Avatar uploads use the built-in cropper and are re-encoded on the server.

POST `/boards/{id}/reorder-columns/` with `ids` and optional `parent` persists sibling order atomically. GET/POST/DELETE `/boards/{id}/avatar/` reads or replaces a protected avatar (multipart `file`). PUT `/tasks/{id}/cover/` with `kind` (`attachment`, `checklist`, `comment`, `external_link`) and source `id` where applicable selects a cover; DELETE removes it. Cover sources must belong to the same card.

## Extended API

- `/boards/people/?q=...`: active membership directory (see optional filter above).
- `/boards/{id}/pin/`: POST `is_pinned` (boolean), personal to the current user.
- `/groups/`: personal CRUD with `name`, `color`, `boards` (IDs), `position`; only accessible board IDs may be assigned. Removing a group preserves its boards.
- `/boards/{id}/reorder-rows/`: POST `column`, `ids` containing every lane in that top-level column exactly once.
- `/tasks/{id}/duplicate/`: POST; clones fields, assignee, participants, labels, links and checklist titles (reset). Files, comments, cover and history are not duplicated.
- `/tasks/{id}/links/`: GET/POST/PATCH/DELETE with HTTP(S) `url`, optional `title`, and `id` for update/delete. Links are not fetched by the server.
- `/tasks/{id}/history/`: GET latest 200 recorded actions; access follows the task board.
- `/tasks/{id}/reorder-checklist/`: POST `ids`, every checklist item exactly once.
- `/automations/`: personal rule CRUD. `kind`: `event`, `button` or `schedule`; `conditions`, `actions`, `schedule_config`, `boards`, `applies_to_all_boards`, `is_active`, `stop_on_error`, `position`.
- `/automations/catalog/`: GET supported triggers, fields, operators and actions.
- `/automations/buttons/?task={id}`: GET currently applicable manual actions. Visible board members may run the owner's configured buttons, but cannot modify the rules.
- `/automations/{id}/run/`: POST `task` to execute an eligible button. Inspect returned `status`, `error` and `actions_log` (HTTP 200 does not imply every action succeeded).
- `/automations/{id}/runs/`: GET the owner's latest 100 runs for currently accessible boards.

## Events and scheduling

Event rules execute synchronously after the source database transaction commits. A run uses a unique event/task key; repeated delivery does not repeat actions. Rules can trigger other rules, but an automation cannot re-enter its own chain; the maximum chain depth is 10. Action failures are recorded, and `stop_on_error` controls whether following actions run. Already successful actions are not rolled back if a later action fails. The default dispatcher is intended for modest boards; heavy integrations should delegate work via the host's job system. The after-commit hook is not a durable job queue, so a host requiring crash-proof event delivery should supply an outbox/worker integration.

For time-based rules, have your host scheduler invoke this command every minute:

```bash
python manage.py run_board_automations
```

The command runs once and exits. It is safe to invoke repeatedly; completed schedule slots are not run again. Schedule times use Django's `TIME_ZONE`; configure `USE_TZ=True`. Fixed dates and task due dates with day offsets are supported. The demo does not install a scheduler automatically.

Host notification integration:

```python
from django.dispatch import receiver
from nadein_board.events import activity_committed
from nadein_board.models import TaskActivity

@receiver(activity_committed, sender=TaskActivity)
def board_changed(sender, activity, **kwargs):
    # Enqueue your host notification/update job here.
    # The source action has committed; honour your host's board access rules.
    pass
```

The signal is sent for recorded task activities; it is not a blanket hook for every arbitrary ORM write. Direct host writes should also create an appropriate `TaskActivity` if they need history or event rules. File retention and virus scanning remain host responsibilities.
