# Architecture

Django Nadein Board is a reusable Django app with a bundled React/TypeScript workspace. The host provides authentication, a database, private file storage and static asset serving.

## Package structure

| Layer | Responsibility |
| --- | --- |
| `models.py`, migrations | Boards, columns, lanes, cards, membership, resources, activity and automation runs |
| `access.py`, `api.py` | Board visibility, structural ownership, REST endpoints and atomic ordering |
| `automation/` | Rule validation, conditions, event/button/schedule execution and run logs |
| `events.py` | After-commit dispatch and the `activity_committed` integration signal |
| `frontend/src/` | Workspace navigation, drag-and-drop board, card editor and automation editor |
| `static/`, templates | Compiled interface distributed inside the Python package |
| `demo/`, management commands | Local evaluation settings and synthetic example boards |

## Authentication and data access

The package uses Django sessions, CSRF protection and `AUTH_USER_MODEL`. The host does not need a separate user database. Board visibility is checked by the API, including file downloads. Board owners manage structure and membership; visible members collaborate on cards. Optional host hooks narrow board visibility and the membership picker.

Card moves and ordering updates use database transactions. Columns and labels referenced by cards must belong to the same board. Comments have author/owner permissions. Archived resources remain stored and become editable after restoration.

## Frontend and distribution

The React/TypeScript application is compiled with Vite and bundled in the wheel. Node is required for frontend development, but not for running the installed package. The workspace uses a configurable API prefix and can run on a dedicated Django page. See the embedding notes in [integration](integration.md) for CSS isolation and the mount API.

The card editor saves resource actions separately and provides an explicit Save button for editable properties, with unsaved-change protection. Idle polling runs every 20 seconds and pauses during editing.

## Automation execution

Rules can respond to task events, expose manual buttons or run on a schedule. Conditions are evaluated before an ordered action sequence. Runs store their status, errors and action results.

Event dispatch occurs after the source transaction commits. Unique event/task keys prevent repeated actions on duplicate delivery, and rule-chain limits prevent recursive loops. Rules only act on boards their author can currently manage and access. Scheduled rules are dispatched by `python manage.py run_board_automations`; the host supplies the schedule.

The default dispatcher is synchronous and is not a durable job queue. Hosts with heavy integrations or durable-delivery requirements should add their own worker/outbox integration through the documented signal.

## Current scope

- Card copies include fields, participants, labels, links and reset checklist items. Files, comments, covers and history are not copied.
- Cross-board card transfer is not implemented. Column archival is currently API-only.
- Notifications, unread counters and WebSocket push are host integrations.
- UI text is Russian. Documentation is available in English, Russian, German and Spanish.
- The package has not been published on PyPI. No license has been selected yet.

## Verification

31 backend tests and 6 frontend tests cover access boundaries, resources, ordering, filters and automation behavior. CI runs these checks, migration validation, the frontend build and Python packaging. A built wheel has also been installed in a clean Django environment with its own database and URL prefix.
