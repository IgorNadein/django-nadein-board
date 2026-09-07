from django.test import TestCase
from django.utils import timezone
from datetime import timedelta
from .test_board import BoardTests
from nadein_board.models import (
    Task,
    TaskBoard,
    TaskLabel,
    TaskAutomation,
    TaskChecklistItem,
)
from nadein_board.automation.engine import (
    process_activity_automations,
    dispatch_scheduled_automations,
)


class ExtendedBoardTests(TestCase):
    setUp = BoardTests.setUp

    def post(self, path, data):
        return self.client.post(self.base + path, data, format="json")

    def rule(self, **kwargs):
        payload = dict(
            name="Rule",
            kind="event",
            trigger="task_created",
            boards=[self.board.pk],
            applies_to_all_boards=False,
            conditions={},
            actions=[
                {"type": "set_priority", "priority": "high"},
                {"type": "add_checklist", "items": ["Verify result"]},
            ],
        )
        payload.update(kwargs)
        response = self.post("automations/", payload)
        self.assertEqual(response.status_code, 201, response.data)
        return TaskAutomation.objects.get(pk=response.data["id"])

    def test_event_runs_after_commit_and_does_not_replay(self):
        rule = self.rule()
        with self.captureOnCommitCallbacks(execute=True):
            response = self.post(
                "tasks/",
                {"board": self.board.pk, "column": self.column.pk, "title": "New"},
            )
        self.assertEqual(response.status_code, 201)
        task = Task.objects.get(pk=response.data["id"])
        self.assertEqual(task.priority, "high")
        self.assertEqual(task.checklist_items.count(), 1)
        event = task.activities.get(action="created")
        with self.captureOnCommitCallbacks(execute=True):
            process_activity_automations(event.pk)
        self.assertEqual(task.checklist_items.count(), 1)
        self.assertEqual(rule.runs.count(), 1)
        self.assertEqual(rule.runs.get().status, "success")

    def test_manual_button_member_can_use_but_cannot_change_rule(self):
        rule = self.rule(
            kind="button",
            trigger="manual",
            actions=[{"type": "add_comment", "text": "Ready"}],
        )
        self.client.force_authenticate(self.member)
        self.assertEqual(
            self.client.get(
                self.base + f"automations/buttons/?task={self.task.pk}"
            ).data[0]["id"],
            rule.pk,
        )
        response = self.post(f"automations/{rule.pk}/run/", {"task": self.task.pk})
        self.assertEqual(response.data["status"], "success")
        self.assertEqual(self.task.comments.get().text, "Ready")
        self.assertEqual(
            self.client.patch(
                self.base + f"automations/{rule.pk}/",
                {"name": "intrude"},
                format="json",
            ).status_code,
            404,
        )
        self.assertEqual(
            self.post(
                "automations/",
                dict(
                    name="intrude",
                    boards=[self.board.pk],
                    applies_to_all_boards=False,
                    actions=[{"type": "complete"}],
                ),
            ).status_code,
            400,
        )

    def test_global_rule_cannot_mutate_another_owners_board(self):
        self.client.force_authenticate(self.member)
        response = self.post(
            "automations/",
            dict(
                name="Mine only",
                applies_to_all_boards=True,
                kind="event",
                trigger="task_created",
                actions=[{"type": "set_priority", "priority": "critical"}],
            ),
        )
        self.assertEqual(response.status_code, 201)
        self.client.force_authenticate(self.owner)
        with self.captureOnCommitCallbacks(execute=True):
            result = self.post(
                "tasks/",
                {
                    "board": self.board.pk,
                    "column": self.column.pk,
                    "title": "Protected",
                },
            )
        self.assertEqual(Task.objects.get(pk=result.data["id"]).priority, "medium")

    def test_automation_chain_terminates_and_foreign_label_fails(self):
        other = TaskBoard.objects.create(name="Other", created_by=self.owner)
        label = TaskLabel.objects.create(board=other, name="Outside")
        rule = self.rule(
            kind="button",
            trigger="manual",
            actions=[{"type": "add_label", "label_id": label.pk}],
        )
        response = self.post(f"automations/{rule.pk}/run/", {"task": self.task.pk})
        self.assertEqual(response.data["status"], "failed")
        self.assertFalse(self.task.labels.exists())
        rule = self.rule(
            trigger="task_updated",
            actions=[{"type": "set_priority", "priority": "high"}],
        )
        with self.captureOnCommitCallbacks(execute=True):
            self.client.patch(
                self.base + f"tasks/{self.task.pk}/",
                {"title": "changed"},
                format="json",
            )
        self.assertEqual(rule.runs.count(), 1)

    def test_scheduled_runs_idempotent_and_archived_tasks_excluded(self):
        now = timezone.now()
        rule = self.rule(
            kind="schedule",
            trigger="date_reached",
            schedule_config={"mode": "fixed_datetime", "at": now.isoformat()},
            actions=[{"type": "add_comment", "text": "Scheduled"}],
        )
        TaskAutomation.objects.filter(pk=rule.pk).update(
            created_at=now - timedelta(hours=1)
        )
        archived = Task.objects.create(
            board=self.board,
            column=self.column,
            title="Archived",
            created_by=self.owner,
            is_archived=True,
        )
        dispatch_scheduled_automations(now=now + timedelta(minutes=1))
        dispatch_scheduled_automations(now=now + timedelta(minutes=2))
        self.assertEqual(self.task.comments.count(), 1)
        self.assertEqual(rule.runs.count(), 1)
        self.assertFalse(archived.comments.exists())

    def test_links_validate_url_cover_ownership_and_duplicate(self):
        path = f"tasks/{self.task.pk}/links/"
        self.assertEqual(
            self.post(path, {"url": "javascript:alert(1)"}).status_code, 400
        )
        response = self.post(path, {"url": "https://example.com/spec", "title": "Spec"})
        self.assertEqual(response.status_code, 200, response.data)
        self.assertEqual(
            self.post(path, {"url": "https://example.com/spec"}).status_code, 400
        )
        link = response.data[0]["id"]
        cover = self.client.put(
            self.base + f"tasks/{self.task.pk}/cover/",
            {"kind": "external_link", "id": link},
            format="json",
        )
        self.assertEqual(cover.data["cover"]["external_link"]["title"], "Spec")
        self.client.delete(self.base + path, {"id": link}, format="json")
        self.assertEqual(
            self.client.get(self.base + f"tasks/{self.task.pk}/").data["cover"], None
        )

    def test_archive_restore_preserves_resources_and_prevents_mutation(self):
        path = f"tasks/{self.task.pk}/"
        self.post(path + "comments/", {"text": "Keep me"})
        response = self.client.patch(
            self.base + path, {"is_archived": True}, format="json"
        )
        self.assertEqual(response.status_code, 200, response.data)
        self.assertEqual(self.post(path + "comments/", {"text": "No"}).status_code, 400)
        self.assertEqual(
            self.client.patch(
                self.base + path, {"title": "No"}, format="json"
            ).status_code,
            400,
        )
        self.assertEqual(
            self.client.patch(
                self.base + path, {"is_archived": False}, format="json"
            ).status_code,
            200,
        )
        self.assertEqual(self.task.comments.count(), 1)

    def test_participants_duplicate_and_checklist_order(self):
        path = f"tasks/{self.task.pk}/"
        self.assertEqual(
            self.client.patch(
                self.base + path, {"participant_ids": [self.outsider.pk]}, format="json"
            ).status_code,
            400,
        )
        self.client.patch(
            self.base + path, {"participant_ids": [self.member.pk]}, format="json"
        )
        first = TaskChecklistItem.objects.create(
            task=self.task, title="A", created_by=self.owner, is_completed=True
        )
        second = TaskChecklistItem.objects.create(
            task=self.task, title="B", created_by=self.owner
        )
        self.assertEqual(
            self.post(
                path + "reorder-checklist/", {"ids": [first.pk, first.pk]}
            ).status_code,
            400,
        )
        self.assertEqual(
            self.post(
                path + "reorder-checklist/", {"ids": [second.pk, first.pk]}
            ).status_code,
            200,
        )
        self.assertEqual(
            list(self.task.checklist_items.values_list("title", flat=True)), ["B", "A"]
        )
        clone = self.post(path + "duplicate/", {})
        self.assertEqual(clone.status_code, 201, clone.data)
        copy = Task.objects.get(pk=clone.data["id"])
        self.assertEqual(copy.participants.get(), self.member)
        self.assertFalse(copy.checklist_items.filter(is_completed=True).exists())
        self.assertEqual(copy.checklist_items.count(), 2)

    def test_personal_groups_and_pins_do_not_leak(self):
        response = self.post("groups/", {"name": "Work", "boards": [self.board.pk]})
        self.assertEqual(response.status_code, 201, response.data)
        group = response.data["id"]
        self.post(f"boards/{self.board.pk}/pin/", {"is_pinned": True})
        self.assertTrue(self.client.get(self.base + "boards/").data[0]["is_pinned"])
        self.client.force_authenticate(self.member)
        self.assertEqual(self.client.get(self.base + "groups/").data, [])
        self.assertFalse(self.client.get(self.base + "boards/").data[0]["is_pinned"])
        self.assertEqual(
            self.client.patch(
                self.base + f"groups/{group}/", {"name": "No"}, format="json"
            ).status_code,
            404,
        )

    def test_comment_edit_permissions_and_history(self):
        self.client.force_authenticate(self.member)
        path = f"tasks/{self.task.pk}/comments/"
        comment = self.post(path, {"text": "Before"}).data[0]
        response = self.client.patch(
            self.base + path, {"id": comment["id"], "text": "After"}, format="json"
        )
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data[0]["text"], "After")
        history = self.client.get(self.base + f"tasks/{self.task.pk}/history/").data
        self.assertEqual(history[0]["action"], "comment_edited")
        self.client.force_authenticate(self.outsider)
        self.assertEqual(
            self.client.get(self.base + f"tasks/{self.task.pk}/history/").status_code,
            404,
        )

    def test_final_parent_completes_and_reopens_child_tasks(self):
        from nadein_board.models import TaskColumn

        child = TaskColumn.objects.create(
            board=self.board, parent=self.done, name="Released"
        )
        self.client.patch(
            self.base + f"tasks/{self.task.pk}/", {"column": child.pk}, format="json"
        )
        self.task.refresh_from_db()
        self.assertIsNotNone(self.task.completed_at)
        self.client.patch(
            self.base + f"columns/{self.done.pk}/", {"is_done": False}, format="json"
        )
        self.task.refresh_from_db()
        self.assertIsNone(self.task.completed_at)

    def test_archived_board_structure_is_read_only(self):
        self.board.is_archived = True
        self.board.save()
        response = self.client.patch(
            self.base + f"columns/{self.column.pk}/", {"name": "No"}, format="json"
        )
        self.assertEqual(response.status_code, 400)
        response = self.post(
            "labels/", {"board": self.board.pk, "name": "No", "color": "#123456"}
        )
        self.assertEqual(response.status_code, 400)
