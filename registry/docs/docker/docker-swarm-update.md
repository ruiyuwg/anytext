Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker swarm update

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Update the swarm

Usage

`docker swarm update [OPTIONS]`

Swarm This command works with the Swarm orchestrator.

## [Description](#description)

Updates a swarm with new parameter values.

> Note
>
> This is a cluster management command, and must be executed on a swarm manager node. To learn about managers and workers, refer to the [Swarm mode section](/engine/swarm/) in the documentation.

## [Options](#options)

Option

Default

Description

`--autolock`

Change manager autolocking setting (true|false)

`--cert-expiry`

`2160h0m0s`

Validity period for node certificates (ns|us|ms|s|m|h)

`--dispatcher-heartbeat`

`5s`

Dispatcher heartbeat period (ns|us|ms|s|m|h)

`--external-ca`

Specifications of one or more certificate signing endpoints

`--max-snapshots`

API 1.25+ Number of additional Raft snapshots to retain

`--snapshot-interval`

`10000`

API 1.25+ Number of log entries between Raft snapshots

`--task-history-limit`

`5`

Task history retention limit

## [Examples](#examples)

```console
$ docker swarm update --cert-expiry 720h
```

Table of contents
