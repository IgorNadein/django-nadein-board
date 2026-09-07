# Extraction record — 2026-09-08

Source: IgorNadein/EUSRR, commit `096807f35670241c4f2ba422e2f1c189c1ec1742`.

Retained and adapted:

- `backend/tasks/models.py`: TaskPriority, TaskBoardAccessScope, TaskBoard, TaskColumn, TaskColumnRow, TaskLabel, Task, TaskChecklistItem, TaskAttachment. New initial migration; prefixed user reverse relations/constraints; board-scoped labels; default private access.
- `frontend/src/app/tasks/page.tsx`: task card components, drag binding, description and urgency/deadline presentation.
- `frontend/src/lib/tasks/boardLayout.ts`, `columns.ts` and original board-layout tests.

New standalone boundaries:

- `nadein_board.api` replaces the corporate API layer and enforces board access and cross-board relationship validation.
- Board comments have their own TaskComment model rather than communications.Message.
- A standalone React workspace/editor uses the extracted cards/layout; the original 14,000-line portal page is not copied wholesale.
- Bundled frontend is delivered by Django staticfiles; no separate Next.js deployment.
- Board access uses Django users and an optional host filter, without departments, employee roles, skills or staff services.

Not included in 0.1.0: corporate object links (documents, procurement, attendance, feed, calendar), employee skills/rewards, automation engine, notification integrations, realtime push, board grouping/pinning, full activity history, original portal-shell navigation. They have not been replaced with fake successful API responses.

Source EUSRR files, Git history, database, uploaded files, configuration and credentials were not copied into this repository. EUSRR itself was not modified. Only selected source code and synthetic demo content are included.

Validation is documented in README and tests. This is an initial independent core release, not a claim of complete feature parity or production certification.

Additional original frontend retained after review: `useTaskBoardScroll`, `QuickTaskComposer`, `BoardColumn`, `BoardSubcolumnHeader`, `BoardTaskCell`, `BoardColumnGroup`, `BoardColumnRowView`, `BoardBaseColumnsView`, `AddColumnCard`, board-specific scrolling/sticky-header CSS, `TaskCoverPreview`, `TaskBoardAvatar` and `AvatarCropper`. New host adapters replace Next Image, corporate media APIs and the shared portal modal. Card cover types supported here are attachments, checklists and independent comments; corporate linked-object covers are not included.
