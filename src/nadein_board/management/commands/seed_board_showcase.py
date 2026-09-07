"""Synthetic, idempotent showcase for the standalone task-board UI."""

from django.conf import settings
from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand, CommandError
from django.db import transaction
from django.utils import timezone
from datetime import timedelta
from nadein_board.models import (
    TaskBoard,
    TaskColumn,
    TaskColumnRow,
    Task,
    TaskLabel,
    TaskChecklistItem,
    TaskComment,
    TaskExternalLink,
    TaskCover,
    TaskAutomation,
    BoardGroup,
)


class Command(BaseCommand):
    help = "Create an independent mechanics showcase for an existing demo user (DEBUG only)."

    def handle(self, *args, **options):
        if not settings.DEBUG:
            raise CommandError("This command is restricted to DEBUG environments.")
        user = (
            get_user_model()
            .objects.filter(**{get_user_model().USERNAME_FIELD: "demo"})
            .first()
        )
        if not user:
            raise CommandError("Run seed_board_demo first.")
        with transaction.atomic():
            board, created = TaskBoard.objects.get_or_create(
                name="Возможности Django Nadein Board",
                created_by=user,
                defaults={
                    "description": "Подколонки, дорожки, обложки и автоматизации — самостоятельный Django-модуль."
                },
            )
            if not created:
                self.stdout.write(
                    "Showcase already exists; existing data was preserved."
                )
                return
            todo = TaskColumn.objects.create(
                board=board, name="Идеи", position=1000, color="#8b5cf6"
            )
            work = TaskColumn.objects.create(
                board=board, name="Разработка", position=2000, color="#3b82f6"
            )
            api = TaskColumn.objects.create(
                board=board, parent=work, name="Backend", position=1000, color="#3b82f6"
            )
            ui = TaskColumn.objects.create(
                board=board,
                parent=work,
                name="Frontend",
                position=2000,
                color="#a855f7",
            )
            final = TaskColumn.objects.create(
                board=board, name="Готово", position=3000, color="#10b981", is_done=True
            )
            sprint = TaskColumnRow.objects.create(
                column=work, name="Текущий спринт", position=1000, color="#dbeafe"
            )
            later = TaskColumnRow.objects.create(
                column=work, name="Следующий спринт", position=2000, color="#ede9fe"
            )
            labels = [
                TaskLabel.objects.create(board=board, name=n, color=c)
                for n, c in [
                    ("Интерфейс", "#8b5cf6"),
                    ("Django", "#3b82f6"),
                    ("Идея", "#10b981"),
                ]
            ]

            def card(
                title, column, description="", row=None, priority="medium", label=0
            ):
                task = Task.objects.create(
                    board=board,
                    column=column,
                    row=row,
                    title=title,
                    description=description,
                    priority=priority,
                    created_by=user,
                    assignee=user,
                    position=(board.tasks.count() + 1) * 1000,
                )
                task.labels.add(labels[label])
                task.participants.add(user)
                return task

            intro = card(
                "Проверьте механики доски",
                todo,
                "Перемещайте карточки и колонки. Зажмите колёсико для прокрутки. Стрелка на карточке открывает меню.",
                label=2,
            )
            comment = TaskComment.objects.create(
                task=intro,
                author=user,
                text="Доска работает внутри Django: интерфейс входит в пакет, отдельный frontend-сервер не нужен.",
            )
            TaskCover.objects.create(task=intro, kind="comment", comment=comment)
            c = card(
                "Встроить в Django-проект",
                api,
                "Добавить приложение, URL-маршрут и выполнить миграции.",
                sprint,
                "high",
                1,
            )
            for i, title in enumerate(
                ["Подключить nadein_board", "Выполнить миграции", "Открыть доску"]
            ):
                TaskChecklistItem.objects.create(
                    task=c,
                    title=title,
                    position=i * 1000,
                    created_by=user,
                    is_completed=i == 0,
                )
            TaskCover.objects.create(task=c, kind="checklist")
            c.due_date = timezone.localdate() + timedelta(days=3)
            c.save()
            c = card(
                "Расширенная карточка",
                ui,
                "Описание, файлы, ссылки, комментарии, участники и история — в одном окне.",
                sprint,
                "high",
            )
            link = TaskExternalLink.objects.create(
                task=c,
                created_by=user,
                title="Код независимого модуля",
                url="https://github.com/IgorNadein/django-nadein-board",
            )
            TaskCover.objects.create(task=c, kind="external_link", external_link=link)
            card(
                "Хуки для приложения-хозяина",
                api,
                "Сигнал activity_committed позволяет подключить свои уведомления.",
                later,
                "medium",
                1,
            )
            card(
                "Проверить мобильный интерфейс",
                ui,
                "Откройте боковую панель кнопкой слева. Колонки прокручиваются независимо.",
                later,
                "low",
            )
            card(
                "Отдельные дорожки",
                api,
                "Эта карточка находится вне дорожек. Перетащите её в текущий спринт.",
                label=1,
            )
            c = card(
                "Быстрое создание",
                todo,
                "Нажмите плюс в колонке: появится исходная компактная форма создания.",
                priority="low",
                label=2,
            )
            card(
                "Самостоятельный запуск",
                final,
                "Django отдаёт API, готовый JS и CSS. Дополнительный frontend-сервер не нужен.",
                priority="low",
                label=1,
            )
            archived = card(
                "Пример архива",
                todo,
                "Эту карточку можно восстановить из вкладки «Архив».",
                label=2,
            )
            archived.is_archived = True
            archived.save()
            rule = TaskAutomation.objects.create(
                name="Готово к выпуску",
                description="Переместить в финальную колонку и добавить запись в обсуждение.",
                kind="button",
                trigger="manual",
                created_by=user,
                applies_to_all_boards=False,
                conditions={"field": "completed", "operator": "eq", "value": False},
                actions=[
                    {"type": "complete"},
                    {
                        "type": "add_comment",
                        "text": "Проверка выполнена. Карточка готова к выпуску.",
                    },
                ],
            )
            rule.boards.add(board)
            group = BoardGroup.objects.create(
                user=user, name="Демонстрации", color="#8b5cf6"
            )
            group.boards.add(board)
        self.stdout.write(f"Created showcase board #{board.pk}.")
