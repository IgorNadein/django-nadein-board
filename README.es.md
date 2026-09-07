Language: [English](README.md) | [Русский](README.ru.md) | [Deutsch](README.de.md) | [Español](README.es.md)

# Django Nadein Board

## Novedades en 0.2.0

Se incluyen grupos personales, favoritos, filtros, archivo y restauración, editor completo de tarjetas, participantes, enlaces, historial y duplicación. El editor y motor originales de automatización admiten eventos, botones y reglas por fecha con registro de ejecuciones. Las reglas por fecha requieren ejecutar periódicamente `python manage.py run_board_automations`. La interfaz se actualiza cada 20 segundos cuando está inactiva. Los objetos corporativos, el mensajero, las notificaciones WebSocket y las recompensas de empleados quedan como integraciones del proyecto anfitrión.

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

La interfaz está en ruso. Todavía no se ha elegido una licencia.
