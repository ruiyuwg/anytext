When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# Interface: ExecResult

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

**`Since`**

0.2.0

## [Hierarchy](#hierarchy)

- [`RawExecResult`](https://docs.docker.com/reference/api/extensions-sdk/RawExecResult/)

  ↳ **`ExecResult`**

## [Methods](#methods)

### [lines](#lines)

▸ **lines**(): `string`\[]

Split output lines.

#### [Returns](#returns)

`string`\[]

The list of lines.

***

### [parseJsonLines](#parsejsonlines)

▸ **parseJsonLines**(): `any`\[]

Parse each output line as a JSON object.

#### [Returns](#returns-1)

`any`\[]

The list of lines where each line is a JSON object.

***

### [parseJsonObject](#parsejsonobject)

▸ **parseJsonObject**(): `any`

Parse a well-formed JSON output.

#### [Returns](#returns-2)

`any`

The JSON object.

## [Properties](#properties)

### [cmd](#cmd)

• `Optional` `Readonly` **cmd**: `string`

#### [Inherited from](#inherited-from)

[RawExecResult](https://docs.docker.com/reference/api/extensions-sdk/RawExecResult/).[cmd](https://docs.docker.com/reference/api/extensions-sdk/RawExecResult/#cmd)

***

### [killed](#killed)

• `Optional` `Readonly` **killed**: `boolean`

#### [Inherited from](#inherited-from-1)

[RawExecResult](https://docs.docker.com/reference/api/extensions-sdk/RawExecResult/).[killed](https://docs.docker.com/reference/api/extensions-sdk/RawExecResult/#killed)

***

### [signal](#signal)

• `Optional` `Readonly` **signal**: `string`

#### [Inherited from](#inherited-from-2)

[RawExecResult](https://docs.docker.com/reference/api/extensions-sdk/RawExecResult/).[signal](https://docs.docker.com/reference/api/extensions-sdk/RawExecResult/#signal)

***

### [code](#code)

• `Optional` `Readonly` **code**: `number`

#### [Inherited from](#inherited-from-3)

[RawExecResult](https://docs.docker.com/reference/api/extensions-sdk/RawExecResult/).[code](https://docs.docker.com/reference/api/extensions-sdk/RawExecResult/#code)

***

### [stdout](#stdout)

• `Readonly` **stdout**: `string`

#### [Inherited from](#inherited-from-4)

[RawExecResult](https://docs.docker.com/reference/api/extensions-sdk/RawExecResult/).[stdout](https://docs.docker.com/reference/api/extensions-sdk/RawExecResult/#stdout)

***

### [stderr](#stderr)

• `Readonly` **stderr**: `string`

#### [Inherited from](#inherited-from-5)

[RawExecResult](https://docs.docker.com/reference/api/extensions-sdk/RawExecResult/).[stderr](https://docs.docker.com/reference/api/extensions-sdk/RawExecResult/#stderr)

[Edit this page](https://github.com/docker/docs/edit/main/content/reference/api/extensions-sdk/ExecResult.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2freference%2fapi%2fextensions-sdk%2fExecResult%2f\&labels=status%2Ftriage)

Table of contents
