from django.core.management.base import BaseCommand, CommandError
from django.contrib.auth import get_user_model
from django.conf import settings
from nadein_board.models import (
    TaskBoard,
    TaskColumn,
    Task,
    TaskLabel,
    TaskChecklistItem,
    TaskComment,
)


class Command(BaseCommand):
    help = "Create synthetic demo data (DEBUG only)."

    def handle(self, *args, **options):
        if not settings.DEBUG:
            raise CommandError("Demo seeding requires DEBUG=True.")
        user, created = get_user_model().objects.get_or_create(
            username="demo", defaults={"first_name": "Demo", "last_name": "User"}
        )
        if created:
            user.set_password("demo-board-local")
            user.save()
        board, created = TaskBoard.objects.get_or_create(
            name="Запуск нового продукта",
            created_by=user,
            defaults={
                "description": "От идеи до релиза — всё важное в одном месте.",
                "access_scope": "private",
            },
        )
        if created:
            cols = [
                TaskColumn.objects.create(
                    board=board, name=n, color=c, position=i * 1000, is_done=i == 3
                )
                for i, (n, c) in enumerate(
                    [
                        ("Идеи", "#a78bfa"),
                        ("В работе", "#3b82f6"),
                        ("На проверке", "#f59e0b"),
                        ("Готово", "#10b981"),
                    ]
                )
            ]
            labels = [
                TaskLabel.objects.create(board=board, name=n, color=c)
                for n, c in [
                    ("Дизайн", "#8b5cf6"),
                    ("Разработка", "#3b82f6"),
                    ("Исследование", "#10b981"),
                ]
            ]
            examples = [
                (
                    0,
                    "Собрать обратную связь",
                    "Поговорить с первыми пользователями и выделить главные пожелания.",
                    "medium",
                    2,
                ),
                (
                    0,
                    "Продумать мобильную версию",
                    "Проверить удобство доски на небольшом экране.",
                    "low",
                    0,
                ),
                (
                    1,
                    "Подготовить экран онбординга",
                    "Короткий и понятный путь к первой созданной доске.",
                    "high",
                    0,
                ),
                (
                    1,
                    "Подключить API карточек",
                    "Сохранение изменений, обработка ошибок и проверка прав доступа.",
                    "medium",
                    1,
                ),
                (
                    2,
                    "Проверить сценарии команды",
                    "Создание задач, чек-листы, обсуждения и переход в готово.",
                    "high",
                    1,
                ),
                (
                    3,
                    "Согласовать структуру доски",
                    "Определены этапы работы и основные категории задач.",
                    "low",
                    2,
                ),
            ]
            for i, (col, title, description, priority, label) in enumerate(examples):
                task = Task.objects.create(
                    board=board,
                    column=cols[col],
                    title=title,
                    description=description,
                    priority=priority,
                    created_by=user,
                    assignee=user if col else None,
                    position=i * 1000,
                )
                task.labels.add(labels[label])
                if col == 1:
                    TaskChecklistItem.objects.create(
                        task=task,
                        title="Подготовить первый вариант",
                        created_by=user,
                        is_completed=True,
                    )
                    TaskChecklistItem.objects.create(
                        task=task, title="Проверить результат", created_by=user
                    )
                if col == 2:
                    TaskComment.objects.create(
                        task=task,
                        author=user,
                        text="Первый проход завершён. Осталось проверить сценарий с новой карточкой.",
                    )
        self.stdout.write(
            self.style.SUCCESS("Demo ready: /board/ — demo / demo-board-local")
        )
