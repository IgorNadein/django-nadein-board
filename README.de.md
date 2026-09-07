Language: [English](README.md) | [Русский](README.ru.md) | [Deutsch](README.de.md) | [Español](README.es.md)

# Django Nadein Board

Eigenständige Aufgabenboards für Django mit gebündelter React-Oberfläche, aus EUSRR extrahiert. Version 0.1.0 enthält die Kernfunktionen und bildet nicht sämtliche Portal-Funktionen ab.

## Funktionen

Mehrere Boards mit Zugriffsrechten, Spalten, Unterspalten, Bahnen, verschiebbare Karten, Prioritäten, Fristen, Zuständige und Labels. Checklisten, eigenständige Kommentare sowie geschützter Datei-Upload und Download sind enthalten. Kartendarstellung und Layout-Logik stammen aus EUSRR.

Verwendet Djangos `AUTH_USER_MODEL`, Sitzungsanmeldung und CSRF-Schutz. Kein Next.js-Server, Redis, Celery, Messenger oder Benachrichtigungsmodul erforderlich. Das Python-Paket enthält die gebaute Oberfläche; Node wird nur für Frontend-Änderungen benötigt.

## Lokale Demo

Python 3.11 oder neuer:

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install -e .
python manage.py migrate
python manage.py seed_board_demo
python manage.py runserver 127.0.0.1:8765
```


http://127.0.0.1:8765/board/ — Benutzer `demo`, Passwort `demo-board-local`. Nur für lokale Demonstrationen. Die Beispieldaten sind synthetisch; EUSRR-Datenbanken und Dateien werden nicht übernommen.

## Integration

Paket aus dem Repository installieren (noch nicht auf PyPI), `rest_framework` und `nadein_board` in `INSTALLED_APPS` ergänzen, `path("board/", include("nadein_board.urls"))` hinzufügen, Migrationen und `collectstatic` ausführen. Anmeldung und Benutzerverwaltung stellt das Django-Projekt bereit. Dateispeicher darf nicht öffentlich erreichbar sein; Downloads erfolgen über den geschützten API-Endpunkt.

[Integration, API und Berechtigungen](docs/integration.md).

## Grenzen dieser Version

Noch nicht enthalten: Automatisierungen, Board-Gruppen und Pins, Aktivitätsverlauf, Echtzeitaktualisierung und Verknüpfungen mit Unternehmensobjekten. Mitgliederverwaltung und Archivierung sind über die API verfügbar. Die Karten werden zuerst nach Priorität, danach nach Position angezeigt. Die Oberfläche ist derzeit russischsprachig.

[Extraktionsbericht](docs/extraction.md). EUSRR wurde nicht verändert. Eine Lizenz für den extrahierten Code wurde noch nicht ausgewählt.

## Prüfung

Backend: `python manage.py test tests`. Frontend: `cd frontend && npm ci && npm run build && npm test`.

Übernommen wurden außerdem das Schwenken mit gedrückter mittlerer Maustaste, mobile Spaltenansichten, einklappbare Spalten/Bahnen, die schnelle Kartenerstellung, Spaltenreihenfolge, Avatar-Zuschnitt und Kartenvorschauen aus Dateien, Checklisten oder Kommentaren. Mitglieder lassen sich über Django-Benutzer-IDs in den Board-Einstellungen hinzufügen.
