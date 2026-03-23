When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker sandbox stop

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Stop one or more sandboxes without removing them

Usage

`docker sandbox stop SANDBOX [SANDBOX...]`

## [Description](#description)

Stop one or more sandboxes without removing them. The sandboxes can be restarted later.

## [Examples](#examples)

### [Stop a sandbox](#stop-a-sandbox)

```console
$ docker sandbox stop my-sandbox
my-sandbox
```

### [Stop multiple sandboxes](#stop-multiple-sandboxes)

```console
$ docker sandbox stop sandbox1 sandbox2
sandbox1
sandbox2
```

### [Stop all running sandboxes](#stop-all-running-sandboxes)

```console
$ docker sandbox stop $(docker sandbox ls -q)
```

Table of contents
