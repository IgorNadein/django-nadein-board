<p align="center"><a href="README.md">English</a> · <strong>Русский</strong> · <a href="README.de.md">Deutsch</a> · <a href="README.es.md">Español</a></p>

# Django Nadein Board

**Доски задач и автоматизация процессов внутри Django.**

[![Checks](https://github.com/IgorNadein/django-nadein-board/actions/workflows/checks.yml/badge.svg)](https://github.com/IgorNadein/django-nadein-board/actions/workflows/checks.yml)
![Python](https://img.shields.io/badge/Python-3.11%2B-3776AB?logo=python&logoColor=white)
![Django](https://img.shields.io/badge/Django-5.2-092E20?logo=django&logoColor=white)
![Version](https://img.shields.io/badge/version-0.2.1-64748b)
[![MIT](https://img.shields.io/badge/license-MIT-22c55e)](LICENSE)

[Обзор интерфейса](docs/demo.md) · [Интеграция и API](docs/integration.md) · [Архитектура](docs/architecture.md) · [Задачи и ошибки](https://github.com/IgorNadein/django-nadein-board/issues)

Самостоятельный пакет досок задач для Django со встроенным интерфейсом на React и TypeScript. Добавляет совместную работу с задачами и автоматизацию процессов в ваше Django-приложение, используя его пользователей и вход в систему.

![Django Nadein Board — interface preview](docs/images/workspace.png)

## Кратко о возможностях

| Раздел | Что входит |
|---|---|
| **Организация работы** | Колонки, подколонки, дорожки, срочность, метки и фильтры. |
| **Работа с карточкой** | Обложки, чек-листы, комментарии, защищённые вложения и история. |
| **Автоматизация** | События, кнопки, правила по срокам и журнал выполнения. |
| **Подключение к Django** | Пользователи и сессии вашего проекта; собранный React-интерфейс в wheel. |

<details>
<summary>Другие экраны</summary>

![Card editor](docs/images/card-editor.png)

![Workflow automations](docs/images/automations.png)

</details>

<details>
<summary>Все возможности и особенности поведения</summary>

- Несколько досок, доступ создателю, выбранным участникам или всем авторизованным пользователям.
- Колонки, подколонки, дорожки, перенос карточек, срочность, сроки, исполнители и метки.
- Чек-листы с редактированием и порядком пунктов, комментарии, история, загрузка и защищённое скачивание файлов.
- Группы и избранные доски, перенос доски в группу, поиск и сортировка.
- Обложки карточек из файла, чек-листа, комментария или ссылки; аватар доски с кадрированием.
- Расширенный редактор карточки, участники, внешние ссылки, копирование, архив и восстановление.
- Фильтры по исполнителю, срочности, метке, сроку и завершению.
- Редактор автоматизаций: события, кнопки, сроки, условия, последовательности действий, журнал запусков.
- Перемещение колёсиком, мобильная прокрутка, сворачивание, быстрый ввод, перестановка карточек, колонок и дорожек.
- Работа с `AUTH_USER_MODEL`, сессионной авторизацией и CSRF-защитой Django.

Next.js-сервер, Redis, Celery, мессенджер и модуль уведомлений не нужны. Собранный фронтенд входит в Python-пакет; Node нужен только для его изменения.

</details>

## Запуск демонстрации

Python 3.11 или новее:

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

Откройте http://127.0.0.1:8765/board/ — логин `demo`, пароль `demo-board-local`. Это локальные демонстрационные настройки. Все примеры используют искусственные данные.

## Встраивание

Установите пакет из репозитория (на PyPI он ещё не опубликован), добавьте `rest_framework` и `nadein_board` в `INSTALLED_APPS`, подключите `path("board/", include("nadein_board.urls"))`, выполните миграции и `collectstatic`. Используются вход и пользователи вашего Django-проекта. Хранилище вложений должно оставаться непубличным: скачивание проходит через API с проверкой доступа.

[Подробная интеграция, API и настройка доступа](docs/integration.md).

## Границы версии

Уведомления и WebSocket-обновления можно подключить через приложение-хозяин. Интерфейс на русском. Карточки отображаются сначала по срочности, затем по позиции.

Событийные правила и кнопки работают сразу. Для правил по срокам планировщик должен периодически запускать `python manage.py run_board_automations`. Рабочее пространство обновляется каждые 20 секунд в покое; при открытом редакторе опрос приостановлен.

[Устройство пакета и границы интеграции](docs/architecture.md). Лицензия — [MIT](LICENSE).

## Проверки

31 backend-тест и 6 frontend-тестов. GitHub Actions проверяет тесты, миграции, сборку интерфейса и Python-пакета. Установка собранного wheel также проверена в чистом Django-окружении с отдельной базой и URL-префиксом.

`python manage.py test tests` — backend; `cd frontend && npm ci && npm run build && npm test` — сборка TypeScript и frontend-тесты.

## Другой модуль

[Django Nadein Notifications](https://github.com/IgorNadein/django-nadein-notifications) — Оба пакета работают независимо. Связь событий доски с уведомлениями настраивается в Django-проекте.
