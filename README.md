<p align="center"><strong>English</strong> · <a href="README.ru.md">Русский</a> · <a href="README.de.md">Deutsch</a> · <a href="README.es.md">Español</a></p>

# Django Nadein Board

**Task boards and workflow automation inside Django.**

[![Checks](https://github.com/IgorNadein/django-nadein-board/actions/workflows/checks.yml/badge.svg)](https://github.com/IgorNadein/django-nadein-board/actions/workflows/checks.yml)
![Python](https://img.shields.io/badge/Python-3.11%2B-3776AB?logo=python&logoColor=white)
![Django](https://img.shields.io/badge/Django-5.2-092E20?logo=django&logoColor=white)
![Version](https://img.shields.io/badge/version-0.2.0-64748b)

[Interface tour](docs/demo.md) · [Integration & API](docs/integration.md) · [Architecture](docs/architecture.md) · [Issues](https://github.com/IgorNadein/django-nadein-board/issues)

A standalone task-board package for Django, with a bundled React and TypeScript interface. Add collaborative boards and workflow automation to an existing Django application. Install the Python package, include its URLs, and open the board in an authenticated Django session. No Next.js server, Redis, Celery, messenger, or notification package is required.

![Django Nadein Board — interface preview](docs/images/workspace.png)

## At a glance

| Area | What is included |
|---|---|
| **Organize work** | Columns, subcolumns, lanes, priorities, labels and filters. |
| **Act on tasks** | Covers, checklists, comments, protected attachments and activity history. |
| **Automate workflows** | Event rules, manual buttons, scheduled actions and execution logs. |
| **Use existing Django** | Your users, sessions and permissions; compiled React UI in the wheel. |

<details>
<summary>More interface views</summary>

![Card editor](docs/images/card-editor.png)

![Workflow automations](docs/images/automations.png)

</details>

<details>
<summary>Full feature list and behavior</summary>

- Multiple private, member-only, or all-authenticated-user boards.
- Columns, subcolumns and lanes; cards with priorities, deadlines, assignees and board-scoped labels.
- Middle-mouse panning, mobile lane scrolling, collapsible columns/lanes and wide mode.
- Inline quick creation with urgency selection, draggable column ordering and cropped board avatars.
- Card covers from an attachment, checklist, comment or external link.
- Personal board groups, drag-to-group, favourites, search, sorting, board/card archive and restore.
- Full task editor with participants, editable comments/checklists, links and activity history.
- Card duplication (fields, members, labels, links and reset checklist), exact card/row/checklist ordering.
- Combined filters for assignee, priority, labels, due date and completion.
- Event automations, manual buttons, scheduled rules, conditions, action sequences and run logs.
- Drag cards between cells; moving a card through the editor also works without a pointer.
- Completion/reopening, checklists, independent comments, protected file upload/download.
- Session authentication, CSRF protection, `AUTH_USER_MODEL`, access-filter extension point.
- Built frontend assets inside the Python distribution. Node is only needed to change the frontend.

Cards are ordered by priority, then position. Drop onto a card to insert before it within its priority group, or onto a cell to append. The workspace refreshes every 20 seconds while idle; polling pauses while a dialog is open so unsaved edits are preserved. Event rules and buttons work without a worker; scheduled rules require a periodic `python manage.py run_board_automations` invocation. See [integration](docs/integration.md).

</details>

## Local demo

Python 3.11+:

```bash
git clone https://github.com/IgorNadein/django-nadein-board.git
cd django-nadein-board
python -m venv .venv
source .venv/bin/activate
python -m pip install -e .
python manage.py migrate
python manage.py seed_board_demo
python manage.py seed_board_showcase
python manage.py runserver 127.0.0.1:8765
```

Open http://127.0.0.1:8765/board/ and log in with `demo` / `demo-board-local`. The seeder creates synthetic examples and only works with `DEBUG=True`. The demo settings and password are for local evaluation only. All included examples use synthetic data.

## Add to a Django project

The package is installable from this repository; it is not published on PyPI yet.

```bash
python -m pip install "git+https://github.com/IgorNadein/django-nadein-board.git"
```

```python
# settings.py — alongside Django auth, sessions, contenttypes, staticfiles
INSTALLED_APPS += ["rest_framework", "nadein_board"]
# Keep SessionMiddleware, AuthenticationMiddleware and CsrfViewMiddleware.
# Use an existing login page via LOGIN_URL and configure Django templates/staticfiles.

# urls.py
from django.urls import include, path
urlpatterns += [path("board/", include("nadein_board.urls"))]
```

```bash
python manage.py migrate
python manage.py collectstatic
```

Set `MEDIA_ROOT` to private storage: attachments are served through an authenticated download endpoint, not a public media directory. See [integration and API](docs/integration.md) for permissions, embedding, storage and production setup.

## Development

```bash
cd frontend
npm ci
npm run build
npm test
cd ..
python manage.py test tests
python manage.py makemigrations --check --dry-run
```

A frontend rebuild updates the assets under `src/nadein_board/static/nadein_board/`. Commit source and generated assets together. Python packaging includes those assets.

## Architecture and scope

See [architecture](docs/architecture.md) for the package structure, event processing and integration boundaries. Notifications and WebSocket push can be supplied by the host application. UI text is currently Russian; documentation is available in four languages.

The project includes 31 backend tests and 6 frontend tests. GitHub Actions runs tests, checks for missing migrations, builds the frontend and builds the Python distribution. Installation of the built wheel has also been checked in a clean Django environment with its own database and URL prefix.

No license has been selected yet. Public visibility does not itself grant an open-source license.

## Related package

[Django Nadein Notifications](https://github.com/IgorNadein/django-nadein-notifications) — Both packages work independently. Connecting board events to notifications is an explicit host-application integration.
