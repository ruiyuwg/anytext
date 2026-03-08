Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# Interface: ExecResultV0

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [Properties](#properties)

### [cmd](#cmd)

• `Optional` `Readonly` **cmd**: `string`

***

### [killed](#killed)

• `Optional` `Readonly` **killed**: `boolean`

***

### [signal](#signal)

• `Optional` `Readonly` **signal**: `string`

***

### [code](#code)

• `Optional` `Readonly` **code**: `number`

***

### [stdout](#stdout)

• `Readonly` **stdout**: `string`

***

### [stderr](#stderr)

• `Readonly` **stderr**: `string`

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

[Edit this page](https://github.com/docker/docs/edit/main/content/reference/api/extensions-sdk/ExecResultV0.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2freference%2fapi%2fextensions-sdk%2fExecResultV0%2f\&labels=status%2Ftriage)

Table of contents
