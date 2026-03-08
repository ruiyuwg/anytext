Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker secret rm

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Remove one or more secrets

Usage

`docker secret rm SECRET [SECRET...]`

Aliases

An alias is a short or memorable alternative for a longer command.

`docker secret remove`

Swarm This command works with the Swarm orchestrator.

## [Description](#description)

Removes the specified secrets from the swarm.

For detailed information about using secrets, refer to [manage sensitive data with Docker secrets](/engine/swarm/secrets/).

> Note
>
> This is a cluster management command, and must be executed on a swarm manager node. To learn about managers and workers, refer to the [Swarm mode section](/engine/swarm/) in the documentation.

## [Examples](#examples)

This example removes a secret:

```console
$ docker secret rm secret.json
sapth4csdo5b6wz2p5uimh5xg
```

> Warning
>
> Unlike `docker rm`, this command does not ask for confirmation before removing a secret.

Table of contents
