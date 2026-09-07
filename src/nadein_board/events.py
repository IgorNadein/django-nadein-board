"""Stable integration point for host apps; events are delivered after commit."""

from django.db import transaction
from django.db.models.signals import post_save
from django.dispatch import Signal, receiver
from .models import TaskActivity

activity_committed = Signal()


@receiver(post_save, sender=TaskActivity)
def activity_saved(sender, instance, created, **kwargs):
    if not created:
        return

    def dispatch():
        from .automation.engine import process_activity_automations

        process_activity_automations(instance.pk)
        activity_committed.send_robust(sender=TaskActivity, activity=instance)

    transaction.on_commit(dispatch, robust=True)


def record(task, actor, action, **metadata):
    return TaskActivity.objects.create(
        task=task, actor=actor, action=action, metadata=metadata
    )
