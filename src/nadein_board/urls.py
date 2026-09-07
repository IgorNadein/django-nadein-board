from django.urls import path, include
from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.views.decorators.csrf import ensure_csrf_cookie
from rest_framework.routers import DefaultRouter
from .api import (
    BoardViewSet,
    ColumnViewSet,
    RowViewSet,
    LabelViewSet,
    TaskViewSet,
    GroupViewSet,
)
from .automation.api import AutomationViewSet

app_name = "nadein_board"
router = DefaultRouter()
for name, view in [
    ("boards", BoardViewSet),
    ("groups", GroupViewSet),
    ("automations", AutomationViewSet),
    ("columns", ColumnViewSet),
    ("rows", RowViewSet),
    ("labels", LabelViewSet),
    ("tasks", TaskViewSet),
]:
    router.register(name, view, basename=name.rstrip("s"))


@login_required
@ensure_csrf_cookie
def index(request):
    return render(request, "nadein_board/index.html")


urlpatterns = [path("", index, name="index"), path("api/", include(router.urls))]
