Language: [English](README.md) | [Русский](README.ru.md) | [Deutsch](README.de.md) | [Español](README.es.md)

# Django Nadein Board

Tableros de tareas independientes para Django con una interfaz React incluida, extraídos de EUSRR. La versión 0.1.0 contiene las funciones principales; no reproduce todas las funciones del portal.

## Funciones

Varios tableros con permisos, columnas, subcolumnas, carriles, tarjetas que se pueden mover, prioridades, fechas límite, responsables y etiquetas. Incluye listas de comprobación, comentarios independientes y subida y descarga protegida de archivos. La presentación de las tarjetas y la lógica de distribución proceden de EUSRR.

Utiliza `AUTH_USER_MODEL`, autenticación por sesión y protección CSRF de Django. No requiere un servidor Next.js, Redis, Celery, mensajería ni un módulo de notificaciones. El paquete Python incluye el frontend compilado; Node solo hace falta para modificarlo.

## Demostración local

Python 3.11 o posterior:

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install -e .
python manage.py migrate
python manage.py seed_board_demo
python manage.py runserver 127.0.0.1:8765
```


http://127.0.0.1:8765/board/ — usuario `demo`, contraseña `demo-board-local`. Configuración exclusivamente para una demostración local. Los datos son ficticios; no se copia la base de datos ni los archivos de EUSRR.

## Integración

Instala el paquete desde el repositorio (todavía no está en PyPI), añade `rest_framework` y `nadein_board` a `INSTALLED_APPS`, incluye `path("board/", include("nadein_board.urls"))` y ejecuta las migraciones y `collectstatic`. El proyecto Django proporciona el inicio de sesión y los usuarios. El almacenamiento de adjuntos debe ser privado; las descargas pasan por la API con comprobación de acceso.

[Integración, API y permisos](docs/integration.md).

## Límites de esta versión

No incluye todavía automatizaciones, grupos y tableros fijados, historial de actividad, actualizaciones en tiempo real ni vínculos con objetos corporativos. La gestión de miembros y el archivado están disponibles mediante la API. Las tarjetas se ordenan primero por prioridad y después por posición. La interfaz está actualmente en ruso.

[Informe de extracción](docs/extraction.md). No se ha modificado EUSRR. Aún no se ha elegido una licencia para el código extraído.

## Comprobaciones

Backend: `python manage.py test tests`. Frontend: `cd frontend && npm ci && npm run build && npm test`.

También se han conservado el desplazamiento con el botón central del ratón, el scroll móvil por columna, las columnas y carriles plegables, la creación rápida, la reordenación de columnas, el recorte de avatares y las portadas de tarjetas desde archivos, listas o comentarios. Los miembros se configuran mediante sus ID de usuario Django.
