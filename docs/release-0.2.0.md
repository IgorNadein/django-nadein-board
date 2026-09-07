# Django Nadein Board 0.2.0

Standalone task boards and workflow automation for Django, with a bundled React/TypeScript interface.

- Collaborative boards with columns, subcolumns, lanes, card covers and drag-and-drop ordering.
- Card details, participants, checklists, private attachments, comments, links and activity history.
- Personal groups, favourites, filters, copying, archive and restore.
- Event-driven, manual and scheduled automations with conditions, action sequences and run logs.
- Django session authentication, CSRF protection, host user-model support and access-filter hooks.
- Built frontend assets included in the wheel; no separate frontend service is needed.
- Four-language documentation and a screenshot tour of the local demo.

Validation: 31 backend tests, 6 frontend tests, migration checks, TypeScript/Vite build and Python packaging passed. Wheel installation has been checked in an independent Django environment.

Requires Python 3.11+ and Django 5.2. Download and install the attached wheel, or install from the tagged source:

```bash
python -m pip install "git+https://github.com/IgorNadein/django-nadein-board.git@v0.2.0"
```

Follow the integration guide for installed apps, URL inclusion, migrations, authentication and private storage. Scheduled rules need a periodic `python manage.py run_board_automations` invocation. UI text is Russian. The package is not published on PyPI and no license has been selected yet.
