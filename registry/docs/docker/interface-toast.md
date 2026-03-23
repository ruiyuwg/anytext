When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# Interface: Toast

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Toasts provide a brief notification to the user. They appear temporarily and shouldn't interrupt the user experience. They also don't require user input to disappear.

**`Since`**

0.2.0

## [Methods](#methods)

### [success](#success)

▸ **success**(`msg`): `void`

Display a toast message of type success.

```typescript
ddClient.desktopUI.toast.success("message");
```

#### [Parameters](#parameters)

Name

Type

Description

`msg`

`string`

The message to display in the toast.

#### [Returns](#returns)

`void`

***

### [warning](#warning)

▸ **warning**(`msg`): `void`

Display a toast message of type warning.

```typescript
ddClient.desktopUI.toast.warning("message");
```

#### [Parameters](#parameters-1)

Name

Type

Description

`msg`

`string`

The message to display in the warning.

#### [Returns](#returns-1)

`void`

***

### [error](#error)

▸ **error**(`msg`): `void`

Display a toast message of type error.

```typescript
ddClient.desktopUI.toast.error("message");
```

#### [Parameters](#parameters-2)

Name

Type

Description

`msg`

`string`

The message to display in the toast.

#### [Returns](#returns-2)

`void`

[Edit this page](https://github.com/docker/docs/edit/main/content/reference/api/extensions-sdk/Toast.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2freference%2fapi%2fextensions-sdk%2fToast%2f\&labels=status%2Ftriage)

Table of contents
