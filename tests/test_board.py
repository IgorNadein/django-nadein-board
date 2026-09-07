import tempfile
from django.test import TestCase, override_settings
from django.contrib.auth import get_user_model
from django.core.files.uploadedfile import SimpleUploadedFile
from rest_framework.test import APIClient
from nadein_board.models import TaskBoard, TaskColumn, Task, TaskLabel, TaskColumnRow


class BoardTests(TestCase):
    def setUp(self):
        self.owner = get_user_model().objects.create_user(
            username="owner", password="test"
        )
        self.member = get_user_model().objects.create_user(
            username="member", password="test"
        )
        self.outsider = get_user_model().objects.create_user(
            username="outsider", password="test"
        )
        self.board = TaskBoard.objects.create(
            name="Private", created_by=self.owner, access_scope="restricted"
        )
        self.board.members.add(self.member)
        self.column = TaskColumn.objects.create(board=self.board, name="Todo")
        self.done = TaskColumn.objects.create(
            board=self.board, name="Done", is_done=True
        )
        self.task = Task.objects.create(
            board=self.board,
            column=self.column,
            title="Original",
            created_by=self.owner,
        )
        self.client = APIClient()
        self.client.force_authenticate(self.owner)
        self.base = "/board/api/"

    def test_anonymous_denied(self):
        self.client.force_authenticate(None)
        self.assertEqual(self.client.get(self.base + "boards/").status_code, 403)

    def test_outsider_cannot_read_or_write(self):
        self.client.force_authenticate(self.outsider)
        self.assertEqual(self.client.get(self.base + "boards/").json(), [])
        for method, path, data in [
            ("get", f"boards/{self.board.pk}/state/", None),
            ("patch", f"tasks/{self.task.pk}/", {"title": "Intrusion"}),
            ("post", f"tasks/{self.task.pk}/comments/", {"text": "Intrusion"}),
        ]:
            self.assertEqual(
                getattr(self.client, method)(
                    self.base + path, data, format="json"
                ).status_code,
                404,
            )

    def test_members_can_edit_cards_but_not_structure(self):
        self.client.force_authenticate(self.member)
        self.assertEqual(
            self.client.patch(
                self.base + f"tasks/{self.task.pk}/",
                {"title": "Team work"},
                format="json",
            ).status_code,
            200,
        )
        self.assertEqual(
            self.client.post(
                self.base + "columns/",
                {"board": self.board.pk, "name": "No"},
                format="json",
            ).status_code,
            403,
        )
        self.assertEqual(
            self.client.patch(
                self.base + f"boards/{self.board.pk}/",
                {"access_scope": "all"},
                format="json",
            ).status_code,
            403,
        )

    def test_cross_board_move_and_labels_rejected(self):
        other = TaskBoard.objects.create(name="Other", created_by=self.owner)
        col = TaskColumn.objects.create(board=other, name="Todo")
        label = TaskLabel.objects.create(board=other, name="Foreign")
        for data in [
            {"column": col.pk},
            {"label_ids": [label.pk]},
            {"board": other.pk, "column": col.pk},
        ]:
            self.assertEqual(
                self.client.patch(
                    self.base + f"tasks/{self.task.pk}/", data, format="json"
                ).status_code,
                400,
            )

    def test_completion_reopen_and_order(self):
        url = self.base + f"tasks/{self.task.pk}/move/"
        self.assertEqual(
            self.client.post(url, {"column": self.done.pk}, format="json").status_code,
            200,
        )
        self.task.refresh_from_db()
        self.assertIsNotNone(self.task.completed_at)
        other = Task.objects.create(
            board=self.board, column=self.column, title="Second", created_by=self.owner
        )
        self.assertEqual(
            self.client.post(
                url, {"column": self.column.pk, "before": other.pk}, format="json"
            ).status_code,
            200,
        )
        self.task.refresh_from_db()
        other.refresh_from_db()
        self.assertIsNone(self.task.completed_at)
        self.assertLess(self.task.position, other.position)

    def test_invalid_before_rolls_back_move(self):
        r = self.client.post(
            self.base + f"tasks/{self.task.pk}/move/",
            {"column": self.done.pk, "before": 999},
            format="json",
        )
        self.assertEqual(r.status_code, 400)
        self.task.refresh_from_db()
        self.assertEqual(self.task.column_id, self.column.pk)

    def test_wrong_row_and_parent_rejected(self):
        row = TaskColumnRow.objects.create(column=self.done, name="Lane")
        self.assertEqual(
            self.client.patch(
                self.base + f"tasks/{self.task.pk}/", {"row": row.pk}, format="json"
            ).status_code,
            400,
        )
        self.assertEqual(
            self.client.post(
                self.base + "columns/",
                {"board": self.board.pk, "parent": self.column.pk, "name": "Child"},
                format="json",
            ).status_code,
            400,
        )

    def test_checklist_and_comments_persist(self):
        path = self.base + f"tasks/{self.task.pk}/"
        r = self.client.post(path + "checklist/", {"title": "Check"}, format="json")
        self.assertEqual(r.status_code, 200)
        item = r.json()[0]
        r = self.client.patch(
            path + "checklist/", {"id": item["id"], "is_completed": True}, format="json"
        )
        self.assertTrue(r.json()[0]["is_completed"])
        self.assertEqual(
            self.client.post(
                path + "comments/", {"text": "Hello"}, format="json"
            ).status_code,
            200,
        )
        state = self.client.get(self.base + f"boards/{self.board.pk}/state/").json()
        self.assertEqual(state["tasks"][0]["checklist_completed"], 1)
        self.assertEqual(state["tasks"][0]["comments_count"], 1)

    def test_attachment_download_requires_board_access(self):
        with (
            tempfile.TemporaryDirectory() as media,
            override_settings(MEDIA_ROOT=media),
        ):
            url = self.base + f"tasks/{self.task.pk}/attachments/"
            r = self.client.post(
                url,
                {"file": SimpleUploadedFile("demo.txt", b"example")},
                format="multipart",
            )
            self.assertEqual(r.status_code, 200)
            link = r.json()[0]["url"]
            self.assertEqual(self.client.get(link).status_code, 200)
            self.client.force_authenticate(self.outsider)
            self.assertEqual(self.client.get(link).status_code, 404)

    def test_duplicate_columns_return_validation_error(self):
        self.assertEqual(
            self.client.post(
                self.base + "columns/",
                {"board": self.board.pk, "name": "Todo"},
                format="json",
            ).status_code,
            400,
        )

    def test_unauthorized_assignee_rejected(self):
        self.assertEqual(
            self.client.patch(
                self.base + f"tasks/{self.task.pk}/",
                {"assignee_id": self.outsider.pk},
                format="json",
            ).status_code,
            400,
        )

    def test_csrf_protects_session_writes(self):
        client = APIClient(enforce_csrf_checks=True)
        client.force_login(self.owner)
        self.assertEqual(
            client.post(
                self.base + "boards/", {"name": "No token"}, format="json"
            ).status_code,
            403,
        )

    def test_installation_page_includes_packaged_assets(self):
        self.client.force_login(self.owner)
        r = self.client.get("/board/")
        self.assertContains(r, "nadein_board/board.js")
        self.assertContains(r, "/board/api/")

    def test_cover_from_checklist_and_comment(self):
        url = self.base + f"tasks/{self.task.pk}/"
        item = self.client.post(
            url + "checklist/", {"title": "Cover item"}, format="json"
        ).json()[0]
        r = self.client.put(url + "cover/", {"kind": "checklist"}, format="json")
        self.assertEqual(r.status_code, 200)
        self.assertEqual(r.json()["cover"]["checklist"]["items"][0]["id"], item["id"])
        comment = self.client.post(
            url + "comments/", {"text": "Cover text"}, format="json"
        ).json()[0]
        r = self.client.put(
            url + "cover/", {"kind": "comment", "id": comment["id"]}, format="json"
        )
        self.assertEqual(r.json()["cover"]["comment"]["text"], "Cover text")
        self.client.delete(url + "cover/")
        self.assertIsNone(self.client.get(url).json()["cover"])

    def test_cross_task_cover_rejected(self):
        other = Task.objects.create(
            board=self.board, column=self.column, title="Other", created_by=self.owner
        )
        comment = self.client.post(
            self.base + f"tasks/{other.pk}/comments/", {"text": "Other"}, format="json"
        ).json()[0]
        self.assertEqual(
            self.client.put(
                self.base + f"tasks/{self.task.pk}/cover/",
                {"kind": "comment", "id": comment["id"]},
                format="json",
            ).status_code,
            404,
        )

    def test_column_reorder_validated_and_persisted(self):
        url = self.base + f"boards/{self.board.pk}/reorder-columns/"
        self.assertEqual(
            self.client.post(
                url, {"ids": [self.done.pk, self.column.pk]}, format="json"
            ).status_code,
            200,
        )
        self.done.refresh_from_db()
        self.column.refresh_from_db()
        self.assertLess(self.done.position, self.column.position)
        self.assertEqual(
            self.client.post(
                url, {"ids": [self.done.pk, self.done.pk]}, format="json"
            ).status_code,
            400,
        )

    def test_private_scope_revokes_member_access(self):
        self.board.access_scope = "private"
        self.board.save()
        self.client.force_authenticate(self.member)
        self.assertEqual(
            self.client.get(self.base + f"boards/{self.board.pk}/state/").status_code,
            404,
        )

    def test_avatar_is_reencoded_and_protected(self):
        import io
        from PIL import Image

        buf = io.BytesIO()
        Image.new("RGB", (10, 10), "blue").save(buf, format="PNG")
        with (
            tempfile.TemporaryDirectory() as media,
            override_settings(MEDIA_ROOT=media),
        ):
            url = self.base + f"boards/{self.board.pk}/avatar/"
            r = self.client.post(
                url,
                {
                    "file": SimpleUploadedFile(
                        "test.png", buf.getvalue(), content_type="image/png"
                    )
                },
                format="multipart",
            )
            self.assertEqual(r.status_code, 200)
            result = self.client.get(r.json()["avatar"])
            self.assertEqual(result["Content-Type"], "image/jpeg")
            self.client.force_authenticate(self.outsider)
            self.assertEqual(self.client.get(url).status_code, 404)
