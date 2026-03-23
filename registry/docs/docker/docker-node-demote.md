When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker node demote

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Demote one or more nodes from manager in the swarm

Usage

`docker node demote NODE [NODE...]`

Swarm This command works with the Swarm orchestrator.

## [Description](#description)

Demotes an existing manager so that it is no longer a manager.

> Note
>
> This is a cluster management command, and must be executed on a swarm manager node. To learn about managers and workers, refer to the [Swarm mode section](/engine/swarm/) in the documentation.

## [Examples](#examples)

```console
$ docker node demote <node name>
```

Table of contents
