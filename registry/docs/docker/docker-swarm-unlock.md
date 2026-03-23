When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker swarm unlock

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Unlock swarm

Usage

`docker swarm unlock`

Swarm This command works with the Swarm orchestrator.

## [Description](#description)

Unlocks a locked manager using a user-supplied unlock key. This command must be used to reactivate a manager after its Docker daemon restarts if the autolock setting is turned on. The unlock key is printed at the time when autolock is enabled, and is also available from the `docker swarm unlock-key` command.

> Note
>
> This is a cluster management command, and must be executed on a swarm manager node. To learn about managers and workers, refer to the [Swarm mode section](/engine/swarm/) in the documentation.

## [Examples](#examples)

```console
$ docker swarm unlock
Enter unlock key:
```

Table of contents
