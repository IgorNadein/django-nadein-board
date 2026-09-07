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
    is_archived = models.BooleanField(default=False)
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

        done = self.column_id and (
            self.column.is_done
            or (self.column.parent_id and self.column.parent.is_done)
        )
        if done and not self.completed_at:
            self.completed_at = timezone.now()
        elif self.column_id and not done:
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
            ("external_link", "Ссылка"),
        ],
    )
    attachment = models.ForeignKey(
        TaskAttachment, null=True, blank=True, on_delete=models.CASCADE
    )
    comment = models.ForeignKey(
        TaskComment, null=True, blank=True, on_delete=models.CASCADE
    )
    external_link = models.ForeignKey(
        "TaskExternalLink", null=True, blank=True, on_delete=models.CASCADE
    )
    updated_at = models.DateTimeField(auto_now=True)


class TaskActivityObjectKind(models.TextChoices):
    EXTERNAL_LINK = "external_link", "Внешняя ссылка"
    CHECKLIST_ITEM = "checklist_item", "Пункт чек-листа"
    COMMENT = "comment", "Комментарий"


class TaskAutomationKind(models.TextChoices):
    EVENT = "event", "Событие"
    SCHEDULE = "schedule", "Срок"
    BUTTON = "button", "Кнопка"


class TaskAutomationTrigger(models.TextChoices):
    MANUAL = "manual", "Ручной запуск"
    TASK_CREATED = "task_created", "Задача создана"
    TASK_UPDATED = "task_updated", "Задача изменена"
    TASK_MOVED = "task_moved", "Задача перемещена"
    LABEL_ADDED = "label_added", "Метка добавлена"
    LABEL_REMOVED = "label_removed", "Метка удалена"
    ASSIGNEE_CHANGED = "assignee_changed", "Исполнитель изменён"
    DUE_DATE_CHANGED = "due_date_changed", "Срок изменён"
    PRIORITY_CHANGED = "priority_changed", "Срочность изменена"
    ATTACHMENT_ADDED = "attachment_added", "Файл добавлен"
    COMMENT_ADDED = "comment_added", "Комментарий добавлен"
    CHECKLIST_COMPLETED = "checklist_completed", "Пункт чек-листа выполнен"
    LINKED_OBJECT_ADDED = "linked_object_added", "Связанный объект добавлен"
    DATE_REACHED = "date_reached", "Наступила дата"


class TaskAutomationRunStatus(models.TextChoices):
    RUNNING = "running", "Выполняется"
    SUCCESS = "success", "Выполнено"
    PARTIAL = "partial", "Выполнено частично"
    FAILED = "failed", "Ошибка"
    SKIPPED = "skipped", "Пропущено"


class TaskAutomation(models.Model):
    name = models.CharField("Название", max_length=160)
    description = models.TextField("Описание", blank=True)
    kind = models.CharField(
        "Тип",
        max_length=16,
        choices=TaskAutomationKind.choices,
        default=TaskAutomationKind.EVENT,
    )
    trigger = models.CharField(
        "Событие",
        max_length=32,
        choices=TaskAutomationTrigger.choices,
        default=TaskAutomationTrigger.TASK_UPDATED,
    )
    conditions = models.JSONField(
        "Условия",
        default=dict,
        blank=True,
    )
    actions = models.JSONField(
        "Действия",
        default=list,
        blank=True,
    )
    schedule_config = models.JSONField(
        "Настройки срока",
        default=dict,
        blank=True,
    )
    applies_to_all_boards = models.BooleanField(
        "Для всех досок",
        default=True,
    )
    boards = models.ManyToManyField(
        TaskBoard,
        blank=True,
        related_name="automations",
        verbose_name="Доски",
    )
    is_active = models.BooleanField("Активна", default=True)
    stop_on_error = models.BooleanField("Остановить при ошибке", default=True)
    position = models.PositiveIntegerField("Позиция", default=0)
    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.PROTECT,
        related_name="nb_created_task_automations",
        verbose_name="Создал",
    )
    last_run_at = models.DateTimeField("Последний запуск", null=True, blank=True)
    created_at = models.DateTimeField("Создано", auto_now_add=True)
    updated_at = models.DateTimeField("Обновлено", auto_now=True)

    class Meta:
        verbose_name = "Автоматизация задач"
        verbose_name_plural = "Автоматизации задач"
        ordering = ["kind", "position", "name", "id"]
        indexes = [
            models.Index(fields=["kind", "is_active", "position"]),
            models.Index(fields=["trigger", "is_active"]),
        ]

    def __str__(self):
        return self.name

    def applies_to_board(self, board_id):
        board = TaskBoard.objects.filter(pk=board_id, is_archived=False).first()
        from .access import accessible_boards

        return bool(
            board
            and self.created_by.is_active
            and (
                board.created_by_id == self.created_by_id
                or self.created_by.is_superuser
            )
            and accessible_boards(self.created_by).filter(pk=board_id).exists()
            and (self.applies_to_all_boards or self.boards.filter(id=board_id).exists())
        )


class TaskAutomationRun(models.Model):
    automation = models.ForeignKey(
        TaskAutomation,
        on_delete=models.CASCADE,
        related_name="runs",
        verbose_name="Автоматизация",
    )
    task = models.ForeignKey(
        Task,
        on_delete=models.CASCADE,
        related_name="automation_runs",
        verbose_name="Задача",
    )
    trigger_activity = models.ForeignKey(
        "TaskActivity",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="automation_runs",
        verbose_name="Событие",
    )
    actor = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="nb_task_automation_runs",
        verbose_name="Запустил",
    )
    source = models.CharField("Источник", max_length=16)
    status = models.CharField(
        "Статус",
        max_length=16,
        choices=TaskAutomationRunStatus.choices,
        default=TaskAutomationRunStatus.RUNNING,
    )
    idempotency_key = models.CharField(
        "Ключ идемпотентности",
        max_length=255,
        unique=True,
    )
    context = models.JSONField("Контекст", default=dict, blank=True)
    actions_log = models.JSONField("Журнал действий", default=list, blank=True)
    error = models.TextField("Ошибка", blank=True)
    started_at = models.DateTimeField("Начато", auto_now_add=True)
    finished_at = models.DateTimeField("Завершено", null=True, blank=True)

    class Meta:
        verbose_name = "Запуск автоматизации задач"
        verbose_name_plural = "Запуски автоматизаций задач"
        ordering = ["-started_at", "-id"]
        indexes = [
            models.Index(fields=["automation", "-started_at"]),
            models.Index(fields=["task", "-started_at"]),
            models.Index(fields=["status", "-started_at"]),
        ]

    def __str__(self):
        return f"{self.automation}: {self.task} ({self.status})"


class TaskActivityAction(models.TextChoices):
    CREATED = "created", "Создал задачу"
    UPDATED = "updated", "Обновил задачу"
    CLAIMED = "claimed", "Взял задачу в работу"
    MOVED = "moved", "Переместил задачу"
    LINKED = "linked", "Связал объект"
    UNLINKED = "unlinked", "Убрал связь"
    ATTACHMENT_ADDED = "attachment_added", "Добавил файл"
    ATTACHMENT_REMOVED = "attachment_removed", "Удалил файл"
    CHECKLIST_ITEM_ADDED = "checklist_item_added", "Добавил пункт чек-листа"
    CHECKLIST_ITEM_UPDATED = "checklist_item_updated", "Изменил пункт чек-листа"
    CHECKLIST_ITEM_COMPLETED = (
        "checklist_item_completed",
        "Выполнил пункт чек-листа",
    )
    CHECKLIST_ITEM_REOPENED = (
        "checklist_item_reopened",
        "Вернул пункт чек-листа в работу",
    )
    CHECKLIST_ITEM_REMOVED = "checklist_item_removed", "Удалил пункт чек-листа"
    COMMENT_ADDED = "comment_added", "Добавил комментарий"
    COMMENT_EDITED = "comment_edited", "Изменил комментарий"
    COMMENT_REMOVED = "comment_removed", "Удалил комментарий"


class TaskActivity(models.Model):
    task = models.ForeignKey(
        Task,
        on_delete=models.CASCADE,
        related_name="activities",
        verbose_name="Задача",
    )
    actor = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="nb_task_activities",
        verbose_name="Исполнитель",
    )
    action = models.CharField(
        "Действие",
        max_length=32,
        choices=TaskActivityAction.choices,
    )
    object_kind = models.CharField(
        "Тип объекта",
        max_length=32,
        choices=TaskActivityObjectKind.choices,
        blank=True,
    )
    object_id = models.PositiveBigIntegerField("ID объекта", null=True, blank=True)
    metadata = models.JSONField("Метаданные", default=dict, blank=True)
    created_at = models.DateTimeField("Создано", auto_now_add=True)

    class Meta:
        verbose_name = "История задачи"
        verbose_name_plural = "История задач"
        ordering = ["-created_at", "-id"]
        indexes = [
            models.Index(fields=["task", "-created_at"]),
        ]

    def __str__(self):
        return f"{self.task} - {self.action}"


class TaskExternalLink(models.Model):
    task = models.ForeignKey(
        Task,
        on_delete=models.CASCADE,
        related_name="external_links",
        verbose_name="Задача",
    )
    url = models.URLField("Ссылка", max_length=2048)
    title = models.CharField("Название", max_length=255, blank=True)
    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.PROTECT,
        related_name="nb_created_task_external_links",
        verbose_name="Добавил",
    )
    created_at = models.DateTimeField("Создано", auto_now_add=True)

    class Meta:
        verbose_name = "Внешняя ссылка задачи"
        verbose_name_plural = "Внешние ссылки задач"
        ordering = ["-created_at", "-id"]
        constraints = [
            models.UniqueConstraint(
                fields=["task", "url"],
                name="nb_uniq_task_external_link",
            )
        ]
        indexes = [models.Index(fields=["task", "created_at"])]

    def __str__(self):
        return f"{self.task} -> {self.title or self.url}"


class BoardGroup(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    name = models.CharField(max_length=120)
    color = models.CharField(max_length=7, default="#6366f1")
    boards = models.ManyToManyField(TaskBoard, blank=True)
    position = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["position", "id"]


class BoardPreference(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    board = models.ForeignKey(TaskBoard, on_delete=models.CASCADE)
    is_pinned = models.BooleanField(default=False)
    position = models.PositiveIntegerField(default=0)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["user", "board"], name="nb_unique_board_preference"
            )
        ]
