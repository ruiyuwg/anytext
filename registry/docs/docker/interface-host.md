When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# Interface: Host

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

**`Since`**

0.2.0

## [Methods](#methods)

### [openExternal](#openexternal)

▸ **openExternal**(`url`): `void`

Opens an external URL with the system default browser.

**`Since`**

0.2.0

```typescript
ddClient.host.openExternal("https://docker.com");
```

#### [Parameters](#parameters)

Name

Type

Description

`url`

`string`

The URL the browser will open (must have the protocol `http` or `https`).

#### [Returns](#returns)

`void`

## [Properties](#properties)

### [platform](#platform)

• **platform**: `string`

Returns a string identifying the operating system platform. See <https://nodejs.org/api/os.html#osplatform>

**`Since`**

0.2.2

***

### [arch](#arch)

• **arch**: `string`

Returns the operating system CPU architecture. See <https://nodejs.org/api/os.html#osarch>

**`Since`**

0.2.2

***

### [hostname](#hostname)

• **hostname**: `string`

Returns the host name of the operating system. See <https://nodejs.org/api/os.html#oshostname>

**`Since`**

0.2.2

[Edit this page](https://github.com/docker/docs/edit/main/content/reference/api/extensions-sdk/Host.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2freference%2fapi%2fextensions-sdk%2fHost%2f\&labels=status%2Ftriage)

Table of contents
