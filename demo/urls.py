from django.urls import path, include
from django.shortcuts import redirect
from django.contrib.auth import login, authenticate
from django.http import HttpResponse
from django.middleware.csrf import get_token
from django.utils.html import escape


def demo_login(request):
    error = ""
    if request.method == "POST":
        user = authenticate(
            request,
            username=request.POST.get("username"),
            password=request.POST.get("password"),
        )
        if user:
            login(request, user)
            return redirect("nadein_board:index")
        error = "Неверный логин или пароль"
    return HttpResponse(
        f'''<!doctype html><html lang="ru"><meta charset="utf-8"><title>Nadein Board — вход</title><body style="font:16px system-ui;background:#f1f5f9;display:grid;place-items:center;min-height:90vh"><form method="post" style="background:white;padding:40px;border-radius:20px;display:grid;gap:16px"><h1>Nadein Board</h1><p>Локальная демонстрация · demo / demo-board-local</p><input type="hidden" name="csrfmiddlewaretoken" value="{escape(get_token(request))}"><label>Логин <input name="username" value="demo"></label><label>Пароль <input type="password" name="password" value="demo-board-local"></label><button>Войти</button><p>{error}</p></form></body></html>'''
    )


urlpatterns = [
    path("", lambda r: redirect("nadein_board:index")),
    path("login/", demo_login),
    path("board/", include("nadein_board.urls")),
]
