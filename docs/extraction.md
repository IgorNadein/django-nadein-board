# Extraction boundaries — 0.2.0

Source: IgorNadein/EUSRR at `096807f35670241c4f2ba422e2f1c189c1ec1742`. The original repository is unchanged.

## Retained and adapted source

- Task/board/column/lane/label/checklist/attachment models and layout helpers.
- Original `TaskCardContent`, lazy drag bindings, `QuickTaskComposer`, `BoardColumn`, `BoardSubcolumnHeader`, `BoardTaskCell`, `BoardColumnGroup`, `BoardColumnRowView`, `BoardBaseColumnsView` and `AddColumnCard` from the tasks page.
- `useTaskBoardScroll`, board sticky/scroll CSS, anchored menus, `TaskCoverPreview`, `TaskBoardAvatar` and `AvatarCropper`.
- `TaskAutomationManager`, automation types, schema, condition evaluation, action engine, activity-trigger mapping, schedule dispatch and idempotent run log.
- Original activity and external-link models adapted to Django users and the independent task comment model.

## Standalone adaptations

- Workspace navigation provides personal groups, favourites, sorting and archive. It reproduces useful navigation mechanics without importing the corporate portal navigator and its transitive project/request/staff dependencies.
- The task editor is a standalone composition with description, files, checklist, comments, links, participants, properties and history. Resources save after an action; editable properties have an explicit Save button and unsaved-change protection.
- Comments use `TaskComment`; auth uses `AUTH_USER_MODEL`. Next Image, corporate media endpoints, corporate notifications and realtime calls are replaced with same-origin protected media and the `activity_committed` Django signal.
- Automation rules are owned by their author. Even “all my boards” rules only act on boards the author currently manages and can access. Board-scoped labels cannot leak across boards. Inactive users and archived tasks/boards cannot run automations.
- Event automations execute after transaction commit. Scheduled rules are dispatched by a management command; no Celery/Redis dependency is introduced.
- The workspace polls every 20 seconds while idle, pauses during editing, and preserves unsaved field drafts.

## Outside this package

Corporate object links (documents, procurement, attendance, feed, calendar), employee skills/rewards, messenger links, unread counts and WebSocket push are host integration concerns. These have not been replaced with fake successful API responses. Card copies intentionally omit files, conversations and history; checklist progress resets. Cross-board card transfer is not implemented. Column archival is API-only. UI text is Russian.

Only selected source and synthetic demo content are included. EUSRR Git history, database, uploaded files, deployment configuration and credentials were not copied. Public visibility does not itself grant an open-source license.
