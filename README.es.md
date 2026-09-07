Language: [English](README.md) | [Русский](README.ru.md) | [Deutsch](README.de.md) | [Español](README.es.md)

# Django Nadein Board

Paquete independiente de tableros de tareas para Django con interfaz integrada en React y TypeScript. Añade colaboración y automatización de procesos a una aplicación Django existente, utilizando sus usuarios y su inicio de sesión.

[![Checks](https://github.com/IgorNadein/django-nadein-board/actions/workflows/checks.yml/badge.svg)](https://github.com/IgorNadein/django-nadein-board/actions/workflows/checks.yml)

**Python 3.11+ · Django 5.2 · Django REST Framework · React · TypeScript**

![Django Nadein Board](docs/images/workspace.png)

[Ver la interfaz](docs/demo.md) · [Integration & API](docs/integration.md) · [Arquitectura](docs/architecture.md)

Incluye grupos personales, favoritos, filtros, archivo y restauración, editor completo de tarjetas, participantes, enlaces, historial y duplicación. El editor y motor de automatización admiten eventos, botones y reglas por fecha con registro de ejecuciones.

Las reglas por fecha requieren ejecutar periódicamente `python manage.py run_board_automations`. La interfaz se actualiza cada 20 segundos cuando está inactiva y pausa la actualización durante la edición. Las notificaciones y WebSocket se pueden integrar mediante la aplicación anfitriona.

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

La interfaz está en ruso. Todavía no se ha elegido una licencia ni se ha publicado el paquete en PyPI. GitHub Actions ejecuta 31 pruebas de backend y 6 de frontend, comprueba las migraciones y compila la interfaz y el paquete.
