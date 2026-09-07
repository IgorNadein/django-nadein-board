from django.apps import AppConfig


class BoardConfig(AppConfig):
    name = "nadein_board"
    default_auto_field = "django.db.models.BigAutoField"
    verbose_name = "Nadein Board"

    def ready(self):
        from . import events  # noqa: F401
