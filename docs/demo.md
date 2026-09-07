# Interface tour

Screenshots of the running local demo with synthetic data. The interface is currently in Russian; the guide below explains the main interactions in English.

## Workspace

Organize tasks into columns, subcolumns and lanes. Drag cards and column headers, pan with the middle mouse button, collapse sections and filter the board. The sidebar provides personal groups and favourites.

![Workspace with columns, lanes and card covers](images/workspace.png)

## Card editor

Manage a description, checklist, attachments, links, discussion and history. Assign participants, labels, priority and a due date. A checklist can also serve as the card cover. Resource actions save immediately; editable card properties use the Save button.

![Card editor with a checklist cover and task properties](images/card-editor.png)

## Automations

Build event rules, manual buttons or scheduled rules using conditions and ordered actions. The example button completes an unfinished card and adds a comment. The run log records the outcome of each action. Scheduled rules require the host to invoke the management command periodically.

![Automation editor with conditions and an action sequence](images/automations.png)

## Try it locally

Follow the [local demo instructions](../README.md#local-demo), then open `http://127.0.0.1:8765/board/` and sign in as `demo` / `demo-board-local`.

1. Open **Возможности Django Nadein Board** in the sidebar.
2. Drag a card to another column or lane. Cards remain grouped by priority.
3. Open a card to try the checklist, cover and comments.
4. Use **Автоматизации** to inspect the **Готово к выпуску** manual button.
5. Run that button from an unfinished card and inspect its history and the automation run log.

Demo credentials are for local evaluation only. For installation in an existing application, use the [integration guide](integration.md).
