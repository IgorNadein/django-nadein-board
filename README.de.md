Language: [English](README.md) | [Русский](README.ru.md) | [Deutsch](README.de.md) | [Español](README.es.md)

# Django Nadein Board

## Neu in 0.2.0

Persönliche Board-Gruppen und Favoriten, Filter, Archivierung/Wiederherstellung, ein erweiterter Karteneditor, Teilnehmer, Links, Verlauf und Kopien sind integriert. Der ursprüngliche Automatisierungseditor und die Engine unterstützen Ereignisse, manuelle Schaltflächen und Zeitregeln mit Ausführungsprotokollen. Zeitregeln benötigen einen regelmäßigen Aufruf von `python manage.py run_board_automations`. Die Oberfläche aktualisiert sich im Ruhezustand alle 20 Sekunden. Corporate-Objekte, Messenger, WebSocket-Push und Mitarbeiter-Belohnungen bleiben Host-Integrationen.

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

[Integration & API](docs/integration.md) · [Extraction](docs/extraction.md)

Die Benutzeroberfläche ist auf Russisch. Eine Lizenz wurde noch nicht festgelegt.
