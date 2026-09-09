<p align="center"><a href="README.md">English</a> · <a href="README.ru.md">Русский</a> · <a href="README.de.md">Deutsch</a> · <strong>Español</strong></p>

# Django Nadein Board

**Tableros de tareas y automatización dentro de Django.**

[![Checks](https://github.com/IgorNadein/django-nadein-board/actions/workflows/checks.yml/badge.svg)](https://github.com/IgorNadein/django-nadein-board/actions/workflows/checks.yml)
![Python](https://img.shields.io/badge/Python-3.11%2B-3776AB?logo=python&logoColor=white)
![Django](https://img.shields.io/badge/Django-5.2-092E20?logo=django&logoColor=white)
![Version](https://img.shields.io/badge/version-0.2.0-64748b)

[Ver la interfaz](docs/demo.md) · [Integración y API](docs/integration.md) · [Arquitectura](docs/architecture.md) · [Incidencias](https://github.com/IgorNadein/django-nadein-board/issues)

Paquete independiente de tableros de tareas para Django con interfaz integrada en React y TypeScript. Añade colaboración y automatización de procesos a una aplicación Django existente, utilizando sus usuarios y su inicio de sesión.

![Django Nadein Board — interface preview](docs/images/workspace.png)

## Vista general

| Área | Qué incluye |
|---|---|
| **Organizar el trabajo** | Columnas, subcolumnas, carriles, prioridades, etiquetas y filtros. |
| **Trabajar con tarjetas** | Portadas, listas, comentarios, archivos protegidos e historial. |
| **Automatizar procesos** | Eventos, botones, reglas programadas y registros de ejecución. |
| **Usar Django existente** | Usuarios y sesiones del proyecto; interfaz React compilada dentro del wheel. |

<details>
<summary>Más pantallas</summary>

![Card editor](docs/images/card-editor.png)

![Workflow automations](docs/images/automations.png)

</details>

Incluye grupos personales, favoritos, filtros, archivo y restauración, editor completo de tarjetas, participantes, enlaces, historial y duplicación. El editor y motor de automatización admiten eventos, botones y reglas por fecha con registro de ejecuciones.

Las reglas por fecha requieren ejecutar periódicamente `python manage.py run_board_automations`. La interfaz se actualiza cada 20 segundos cuando está inactiva y pausa la actualización durante la edición. Las notificaciones y WebSocket se pueden integrar mediante la aplicación anfitriona.

## Demo

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

Demo: http://127.0.0.1:8765/board/ — `demo` / `demo-board-local`.

La interfaz está en ruso. Todavía no se ha elegido una licencia ni se ha publicado el paquete en PyPI. GitHub Actions ejecuta 31 pruebas de backend y 6 de frontend, comprueba las migraciones y compila la interfaz y el paquete.

## Otro módulo

[Django Nadein Notifications](https://github.com/IgorNadein/django-nadein-notifications) — Los paquetes funcionan de forma independiente. La aplicación anfitriona conecta los eventos del tablero con las notificaciones.
