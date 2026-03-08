Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker sandbox rm

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Remove one or more sandboxes

Usage

`docker sandbox rm SANDBOX [SANDBOX...]`

Aliases

An alias is a short or memorable alternative for a longer command.

`docker sandbox remove`

## [Description](#description)

Remove one or more sandboxes and all their associated resources.

This command will:

- Check if the sandbox exists
- Remove the sandbox and clean up its associated resources

## [Examples](#examples)

### [Remove a sandbox](#remove-a-sandbox)

```console
$ docker sandbox rm abc123def
abc123def
```

### [Remove multiple sandboxes](#remove-multiple-sandboxes)

```console
$ docker sandbox rm abc123def def456ghi
abc123def
def456ghi
```

### [Remove all sandboxes](#remove-all-sandboxes)

```console
$ docker sandbox rm $(docker sandbox ls -q)
```

Table of contents
