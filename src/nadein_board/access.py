from django.conf import settings
from django.db.models import Q
from django.utils.module_loading import import_string
from .models import TaskBoard


def accessible_boards(user):
    if not user.is_authenticated:
        return TaskBoard.objects.none()
    qs = TaskBoard.objects.all()
    hook = getattr(settings, "NADEIN_BOARD_ACCESS_FILTER", None)
    if hook:
        return import_string(hook)(user, qs).distinct()
    if user.is_superuser:
        return qs
    return qs.filter(
        Q(created_by=user)
        | Q(members=user, access_scope="restricted")
        | Q(access_scope="all")
    ).distinct()
