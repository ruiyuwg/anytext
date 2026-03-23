When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker node rm

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Remove one or more nodes from the swarm

Usage

`docker node rm [OPTIONS] NODE [NODE...]`

Aliases

An alias is a short or memorable alternative for a longer command.

`docker node remove`

Swarm This command works with the Swarm orchestrator.

## [Description](#description)

Removes the specified nodes from a swarm.

> Note
>
> This is a cluster management command, and must be executed on a swarm manager node. To learn about managers and workers, refer to the [Swarm mode section](/engine/swarm/) in the documentation.

## [Options](#options)

Option

Default

Description

[`-f, --force`](#force)

Force remove a node from the swarm

## [Examples](#examples)

### [Remove a stopped node from the swarm](#remove-a-stopped-node-from-the-swarm)

```console
$ docker node rm swarm-node-02

Node swarm-node-02 removed from swarm
```

### [Attempt to remove a running node from a swarm](#attempt-to-remove-a-running-node-from-a-swarm)

Removes the specified nodes from the swarm, but only if the nodes are in the down state. If you attempt to remove an active node you will receive an error:

```console
$ docker node rm swarm-node-03

Error response from daemon: rpc error: code = 9 desc = node swarm-node-03 is not
down and can't be removed
```

### [Forcibly remove an inaccessible node from a swarm (--force)](#force)

If you lose access to a worker node or need to shut it down because it has been compromised or is not behaving as expected, you can use the `--force` option. This may cause transient errors or interruptions, depending on the type of task being run on the node.

```console
$ docker node rm --force swarm-node-03

Node swarm-node-03 removed from swarm
```

A manager node must be demoted to a worker node (using `docker node demote`) before you can remove it from the swarm.

Table of contents
