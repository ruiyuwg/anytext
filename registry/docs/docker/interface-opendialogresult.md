When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# Interface: OpenDialogResult

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

**`Since`**

0.2.3

## [Properties](#properties)

### [canceled](#canceled)

• `Readonly` **canceled**: `boolean`

Whether the dialog was canceled.

***

### [filePaths](#filepaths)

• `Readonly` **filePaths**: `string`\[]

An array of file paths chosen by the user. If the dialog is cancelled this will be an empty array.

***

### [bookmarks](#bookmarks)

• `Optional` `Readonly` **bookmarks**: `string`\[]

macOS only. An array matching the `filePaths` array of `base64` encoded strings which contains security scoped bookmark data. `securityScopedBookmarks` must be enabled for this to be populated.

[Edit this page](https://github.com/docker/docs/edit/main/content/reference/api/extensions-sdk/OpenDialogResult.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2freference%2fapi%2fextensions-sdk%2fOpenDialogResult%2f\&labels=status%2Ftriage)

Table of contents
