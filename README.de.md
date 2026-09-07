Language: [English](README.md) | [Русский](README.ru.md) | [Deutsch](README.de.md) | [Español](README.es.md)

# Django Nadein Board

Ein eigenständiges Aufgabenboard-Paket für Django mit integrierter React-/TypeScript-Oberfläche. Erweitert bestehende Django-Anwendungen um gemeinsame Aufgabenverwaltung und automatisierte Arbeitsabläufe und nutzt dabei deren Benutzer und Anmeldung.

[![Checks](https://github.com/IgorNadein/django-nadein-board/actions/workflows/checks.yml/badge.svg)](https://github.com/IgorNadein/django-nadein-board/actions/workflows/checks.yml)

**Python 3.11+ · Django 5.2 · Django REST Framework · React · TypeScript**

![Django Nadein Board](docs/images/workspace.png)

[Oberfläche ansehen](docs/demo.md) · [Integration & API](docs/integration.md) · [Architektur](docs/architecture.md)

Persönliche Board-Gruppen und Favoriten, Filter, Archivierung/Wiederherstellung, ein erweiterter Karteneditor, Teilnehmer, Links, Verlauf und Kopien sind integriert. Der Automatisierungseditor und die Engine unterstützen Ereignisse, manuelle Schaltflächen und Zeitregeln mit Ausführungsprotokollen.

Zeitregeln benötigen einen regelmäßigen Aufruf von `python manage.py run_board_automations`. Die Oberfläche aktualisiert sich im Ruhezustand alle 20 Sekunden und pausiert beim Bearbeiten. Benachrichtigungen und WebSocket-Push lassen sich über die Host-Anwendung ergänzen.

## Demo

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install -e .
python manage.py migrate
python manage.py seed_board_demo
python manage.py seed_board_showcase
python manage.py runserver 127.0.0.1:8765
```

Demo: http://127.0.0.1:8765/board/ — `demo` / `demo-board-local`.

Die Benutzeroberfläche ist auf Russisch. Eine Lizenz wurde noch nicht festgelegt. Das Paket ist noch nicht auf PyPI veröffentlicht. 31 Backend-Tests und 6 Frontend-Tests sowie Builds und Migrationsprüfungen werden in GitHub Actions ausgeführt.
