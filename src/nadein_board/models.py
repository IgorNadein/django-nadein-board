from django.conf import settings
from django.db import models
from django.db.models.functions import Lower
from django.utils import timezone


class TaskPriority(models.TextChoices):
    LOW = "low", "Низкий"
    MEDIUM = "medium", "Средний"
    HIGH = "high", "Высокий"
    CRITICAL = "critical", "Критический"


class TaskBoardAccessScope(models.TextChoices):
    ALL = "all", "Для всех"
    PRIVATE = "private", "Для себя"
    RESTRICTED = "restricted", "Выборочно"


class TaskBoard(models.Model):
    name = models.CharField("Название", max_length=255)
    description = models.TextField("Описание", blank=True)
    avatar = models.ImageField(
        "Аватар доски",
        upload_to="task_board_avatars/%Y/%m/",
        null=True,
        blank=True,
    )
    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.PROTECT,
        related_name="nb_created_task_boards",
        verbose_name="Создал",
    )
    members = models.ManyToManyField(
        settings.AUTH_USER_MODEL,
        blank=True,
        related_name="nb_task_boards",
        verbose_name="Участники",
    )
    access_scope = models.CharField(
        "Доступ",
        max_length=16,
        choices=TaskBoardAccessScope.choices,
        default=TaskBoardAccessScope.PRIVATE,
    )
    is_archived = models.BooleanField("Архивная", default=False)
    created_at = models.DateTimeField("Создано", auto_now_add=True)
    updated_at = models.DateTimeField("Обновлено", auto_now=True)

    class Meta:
        verbose_name = "Доска задач"
        verbose_name_plural = "Доски задач"
        ordering = ["name", "id"]

    def __str__(self):
        return self.name


class TaskColumn(models.Model):
    board = models.ForeignKey(
        TaskBoard,
        on_delete=models.CASCADE,
        related_name="columns",
        verbose_name="Доска",
    )
    parent = models.ForeignKey(
        "self",
        on_delete=models.CASCADE,
        related_name="subcolumns",
        null=True,
        blank=True,
        verbose_name="Родительская колонка",
    )
    name = models.CharField("Название", max_length=120)
    position = models.PositiveIntegerField("Позиция", default=0)
    color = models.CharField("Цвет", max_length=32, blank=True)
    is_done = models.BooleanField("Финальная колонка", default=False)
    is_archived = models.BooleanField("Архивная", default=False)
    created_at = models.DateTimeField("Создано", auto_now_add=True)
    updated_at = models.DateTimeField("Обновлено", auto_now=True)

    class Meta:
        verbose_name = "Колонка задач"
        verbose_name_plural = "Колонки задач"
        ordering = ["position", "id"]
        constraints = [
            models.UniqueConstraint(
                fields=["board", "name"],
                condition=models.Q(parent__isnull=True),
                name="nb_uniq_task_top_column_board_name",
            ),
            models.UniqueConstraint(
                fields=["parent", "name"],
                condition=models.Q(parent__isnull=False),
                name="nb_uniq_task_subcolumn_parent_name",
            ),
            models.UniqueConstraint(
                fields=["board"],
                condition=models.Q(parent__isnull=True, is_done=True),
                name="nb_uniq_task_done_column_per_board",
            ),
        ]

    def __str__(self):
        return f"{self.board}: {self.name}"

    @property
    def is_subcolumn(self):
        return self.parent_id is not None


class TaskColumnRow(models.Model):
    column = models.ForeignKey(
        TaskColumn,
        on_delete=models.CASCADE,
        related_name="rows",
        verbose_name="Основная колонка",
    )
    name = models.CharField("Название", max_length=120)
    position = models.PositiveIntegerField("Позиция", default=0)
    color = models.CharField("Цвет", max_length=32, blank=True)
    created_at = models.DateTimeField("Создано", auto_now_add=True)
    updated_at = models.DateTimeField("Обновлено", auto_now=True)

    class Meta:
        verbose_name = "Дорожка колонки"
        verbose_name_plural = "Дорожки колонок"
        ordering = ["position", "id"]
        constraints = [
            models.UniqueConstraint(
                fields=["column", "name"],
                name="nb_uniq_task_column_row_name",
            )
        ]

    def __str__(self):
        return f"{self.column}: {self.name}"


class TaskLabel(models.Model):
    board = models.ForeignKey(
        TaskBoard, on_delete=models.CASCADE, related_name="labels"
    )
    name = models.CharField("Название", max_length=80)
    color = models.CharField("Цвет", max_length=32, default="#38bdf8")

    class Meta:
        verbose_name = "Метка задачи"
        verbose_name_plural = "Метки задач"
        ordering = ["name", "id"]
        constraints = [
            models.UniqueConstraint(
                Lower("name"),
                "board",
                name="nb_uniq_task_label_name_ci",
            )
        ]

    def __str__(self):
        return self.name


class Task(models.Model):
    board = models.ForeignKey(
        TaskBoard,
        on_delete=models.CASCADE,
        related_name="tasks",
        verbose_name="Доска",
    )
    column = models.ForeignKey(
        TaskColumn,
        on_delete=models.PROTECT,
        related_name="tasks",
        verbose_name="Колонка",
    )
    row = models.ForeignKey(
        TaskColumnRow,
        on_delete=models.SET_NULL,
        related_name="tasks",
        null=True,
        blank=True,
        verbose_name="Дорожка",
    )
    title = models.CharField("Название", max_length=255)
    description = models.TextField("Описание", blank=True)
    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.PROTECT,
        related_name="nb_created_tasks",
        verbose_name="Создал",
    )
    assignee = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="nb_assigned_tasks",
        verbose_name="Исполнитель",
    )
    participants = models.ManyToManyField(
        settings.AUTH_USER_MODEL,
        blank=True,
        related_name="nb_participating_tasks",
        verbose_name="Участники",
    )
    labels = models.ManyToManyField(
        TaskLabel,
        blank=True,
        related_name="tasks",
        verbose_name="Метки",
    )
    priority = models.CharField(
        "Приоритет",
        max_length=20,
        choices=TaskPriority.choices,
        default=TaskPriority.MEDIUM,
    )
    due_date = models.DateField("Срок", null=True, blank=True)
    position = models.PositiveIntegerField("Позиция", default=0)
    completed_at = models.DateTimeField("Завершено", null=True, blank=True)
    created_at = models.DateTimeField("Создано", auto_now_add=True)
    updated_at = models.DateTimeField("Обновлено", auto_now=True)

    class Meta:
        verbose_name = "Задача"
        verbose_name_plural = "Задачи"
        ordering = ["position", "-created_at", "id"]
        indexes = [
            models.Index(fields=["board", "column", "row", "position"]),
            models.Index(fields=["assignee", "due_date"]),
        ]

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if self.column_id and self.board_id != self.column.board_id:
            self.board_id = self.column.board_id

        if self.column_id and self.column.is_done and not self.completed_at:
            self.completed_at = timezone.now()
        elif self.column_id and not self.column.is_done:
            self.completed_at = None

        super().save(*args, **kwargs)


class TaskAttachment(models.Model):
    task = models.ForeignKey(
        Task,
        on_delete=models.CASCADE,
        related_name="attachments",
        verbose_name="Задача",
    )
    file = models.FileField(
        "Файл",
        upload_to="task_attachments/%Y/%m/%d/",
    )
    file_name = models.CharField("Название файла", max_length=255)
    file_size = models.PositiveBigIntegerField("Размер файла (байты)")
    mime_type = models.CharField("MIME-тип", max_length=255, blank=True)
    uploaded_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.PROTECT,
        related_name="nb_uploaded_task_attachments",
        verbose_name="Загрузил",
    )
    created_at = models.DateTimeField("Загружено", auto_now_add=True)

    class Meta:
        verbose_name = "Вложение задачи"
        verbose_name_plural = "Вложения задач"
        ordering = ["created_at", "id"]
        indexes = [models.Index(fields=["task", "created_at"])]

    def __str__(self):
        return f"{self.task}: {self.file_name}"


class TaskChecklistItem(models.Model):
    task = models.ForeignKey(
        Task,
        on_delete=models.CASCADE,
        related_name="checklist_items",
        verbose_name="Задача",
    )
    title = models.CharField("Пункт", max_length=500)
    position = models.PositiveIntegerField("Позиция", default=0)
    is_completed = models.BooleanField("Выполнен", default=False)
    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.PROTECT,
        related_name="nb_created_task_checklist_items",
        verbose_name="Создал",
    )
    completed_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="nb_completed_task_checklist_items",
        verbose_name="Отметил выполненным",
    )
    completed_at = models.DateTimeField("Выполнен", null=True, blank=True)
    created_at = models.DateTimeField("Создано", auto_now_add=True)
    updated_at = models.DateTimeField("Обновлено", auto_now=True)

    class Meta:
        verbose_name = "Пункт чек-листа задачи"
        verbose_name_plural = "Пункты чек-листа задач"
        ordering = ["position", "id"]
        indexes = [
            models.Index(fields=["task", "position"]),
            models.Index(fields=["task", "is_completed"]),
        ]

    def __str__(self):
        return f"{self.task}: {self.title}"


class TaskComment(models.Model):
    task = models.ForeignKey(Task, on_delete=models.CASCADE, related_name="comments")
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.PROTECT)
    text = models.TextField(max_length=10000)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["created_at", "id"]


class TaskCover(models.Model):
    task = models.OneToOneField(Task, on_delete=models.CASCADE, related_name="cover")
    kind = models.CharField(
        max_length=20,
        choices=[
            ("attachment", "Файл"),
            ("checklist", "Чек-лист"),
            ("comment", "Комментарий"),
        ],
    )
    attachment = models.ForeignKey(
        TaskAttachment, null=True, blank=True, on_delete=models.CASCADE
    )
    comment = models.ForeignKey(
        TaskComment, null=True, blank=True, on_delete=models.CASCADE
    )
    updated_at = models.DateTimeField(auto_now=True)
