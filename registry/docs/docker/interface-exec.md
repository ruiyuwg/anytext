Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# Interface: Exec

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [Callable](#callable)

### [Exec](#exec)

▸ **Exec**(`cmd`, `args`, `options?`): `Promise`<[`ExecResult`](https://docs.docker.com/reference/api/extensions-sdk/ExecResult/)>

Executes a command.

**`Since`**

0.2.0

#### [Parameters](#parameters)

Name

Type

Description

`cmd`

`string`

The command to execute.

`args`

`string`\[]

The arguments of the command to execute.

`options?`

[`ExecOptions`](https://docs.docker.com/reference/api/extensions-sdk/ExecOptions/)

The list of options.

#### [Returns](#returns)

`Promise`<[`ExecResult`](https://docs.docker.com/reference/api/extensions-sdk/ExecResult/)>

A promise that will resolve once the command finishes.

### [Exec](#exec-1)

▸ **Exec**(`cmd`, `args`, `options`): [`ExecProcess`](https://docs.docker.com/reference/api/extensions-sdk/ExecProcess/)

Streams the result of a command if `stream` is specified in the `options` parameter.

Specify the `stream` if the output of your command is too long or if you need to stream things indefinitely (for example container logs).

**`Since`**

0.2.2

#### [Parameters](#parameters-1)

Name

Type

Description

`cmd`

`string`

The command to execute.

`args`

`string`\[]

The arguments of the command to execute.

`options`

[`SpawnOptions`](https://docs.docker.com/reference/api/extensions-sdk/SpawnOptions/)

The list of options.

#### [Returns](#returns-1)

[`ExecProcess`](https://docs.docker.com/reference/api/extensions-sdk/ExecProcess/)

The spawned process.

[Edit this page](https://github.com/docker/docs/edit/main/content/reference/api/extensions-sdk/Exec.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2freference%2fapi%2fextensions-sdk%2fExec%2f\&labels=status%2Ftriage)

Table of contents
