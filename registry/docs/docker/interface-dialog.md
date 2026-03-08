Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# Interface: Dialog

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Allows opening native dialog boxes.

**`Since`**

0.2.3

## [Methods](#methods)

### [showOpenDialog](#showopendialog)

▸ **showOpenDialog**(`dialogProperties`): `Promise`<[`OpenDialogResult`](https://docs.docker.com/reference/api/extensions-sdk/OpenDialogResult/)>

Display a native open dialog. Lets you select a file or a folder.

```typescript
ddClient.desktopUI.dialog.showOpenDialog({properties: ['openFile']});
```

#### [Parameters](#parameters)

Name

Type

Description

`dialogProperties`

`any`

Properties to specify the open dialog behaviour, see <https://www.electronjs.org/docs/latest/api/dialog#dialogshowopendialogbrowserwindow-options>.

#### [Returns](#returns)

`Promise`<[`OpenDialogResult`](https://docs.docker.com/reference/api/extensions-sdk/OpenDialogResult/)>

[Edit this page](https://github.com/docker/docs/edit/main/content/reference/api/extensions-sdk/Dialog.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2freference%2fapi%2fextensions-sdk%2fDialog%2f\&labels=status%2Ftriage)

Table of contents
