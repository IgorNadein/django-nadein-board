Language: **English** | [Русский](README.ru.md) | [Deutsch](README.de.md) | [Español](README.es.md)

# Django Nadein Board

Reusable Django task boards with a bundled React interface, extracted from EUSRR. Install the Python package, include its URLs, and open the board in an authenticated Django session. No Next.js server, Redis, Celery, messenger, or notification package is required.

**Version 0.1.0 is an initial core extraction, not full EUSRR feature parity.**

## Included

- Multiple private, member-only, or all-authenticated-user boards.
- Columns, subcolumns and lanes; cards with priorities, deadlines, assignees and board-scoped labels.
- Middle-mouse panning, mobile lane scrolling, collapsible columns/lanes and wide mode.
- Inline quick creation with urgency selection, draggable column ordering and cropped board avatars.
- Card covers from an attachment, checklist or comment.
- Drag cards between cells; moving a card through the editor also works without a pointer.
- Completion/reopening, checklists, independent comments, protected file upload/download.
- Original EUSRR card presentation and board-layout logic, adapted to a standalone React shell.
- Session authentication, CSRF protection, `AUTH_USER_MODEL`, access-filter extension point.
- Built frontend assets inside the Python distribution. Node is only needed to change the frontend.

Cards retain EUSRR's priority-first display order, then position. Dragging between columns/lanes is supported; precise card reordering is available through the move API. Board archiving and other API-only operations are documented in [integration](docs/integration.md).

## Local demo

Python 3.11+:

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install -e .
python manage.py migrate
python manage.py seed_board_demo
python manage.py runserver 127.0.0.1:8765
```

Open http://127.0.0.1:8765/board/ and log in with `demo` / `demo-board-local`. The seeder creates synthetic examples and only works with `DEBUG=True`. The demo settings and password are for local evaluation only. No EUSRR database or media is included.

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

## Extraction boundaries

See [extraction notes](docs/extraction.md) for retained source, changed integration points and features not ported in 0.1.0. This version does not yet include EUSRR automation rules, board groups/pins, live multi-user updates, task activity history or corporate linked objects. UI text is currently Russian; documentation is available in four languages.

No license has been selected for the extracted source yet. Public visibility does not itself grant an open-source license.
