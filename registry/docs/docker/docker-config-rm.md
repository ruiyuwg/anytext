Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker config rm

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Remove one or more configs

Usage

`docker config rm CONFIG [CONFIG...]`

Aliases

An alias is a short or memorable alternative for a longer command.

`docker config remove`

Swarm This command works with the Swarm orchestrator.

## [Description](#description)

Removes the specified configs from the Swarm.

For detailed information about using configs, refer to [store configuration data using Docker Configs](/engine/swarm/configs/).

> Note
>
> This is a cluster management command, and must be executed on a Swarm manager node. To learn about managers and workers, refer to the [Swarm mode section](/engine/swarm/) in the documentation.

## [Examples](#examples)

This example removes a config:

```console
$ docker config rm my_config
sapth4csdo5b6wz2p5uimh5xg
```

> Warning
>
> This command doesn't ask for confirmation before removing a config.

Table of contents
