When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker swarm unlock-key

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Manage the unlock key

Usage

`docker swarm unlock-key [OPTIONS]`

Swarm This command works with the Swarm orchestrator.

## [Description](#description)

An unlock key is a secret key needed to unlock a manager after its Docker daemon restarts. These keys are only used when the autolock feature is enabled for the swarm.

You can view or rotate the unlock key using `swarm unlock-key`. To view the key, run the `docker swarm unlock-key` command without any arguments:

> Note
>
> This is a cluster management command, and must be executed on a swarm manager node. To learn about managers and workers, refer to the [Swarm mode section](/engine/swarm/) in the documentation.

## [Options](#options)

Option

Default

Description

[`-q, --quiet`](#quiet)

Only display token

[`--rotate`](#rotate)

Rotate unlock key

## [Examples](#examples)

```console
$ docker swarm unlock-key

To unlock a swarm manager after it restarts, run the `docker swarm unlock`
command and provide the following key:

    SWMKEY-1-fySn8TY4w5lKcWcJPIpKufejh9hxx5KYwx6XZigx3Q4

Remember to store this key in a password manager, since without it you
will not be able to restart the manager.
```

Use the `--rotate` flag to rotate the unlock key to a new, randomly-generated key:

```console
$ docker swarm unlock-key --rotate

Successfully rotated manager unlock key.

To unlock a swarm manager after it restarts, run the `docker swarm unlock`
command and provide the following key:

    SWMKEY-1-7c37Cc8654o6p38HnroywCi19pllOnGtbdZEgtKxZu8

Remember to store this key in a password manager, since without it you
will not be able to restart the manager.
```

The `-q` (or `--quiet`) flag only prints the key:

```console
$ docker swarm unlock-key -q

SWMKEY-1-7c37Cc8654o6p38HnroywCi19pllOnGtbdZEgtKxZu8
```

### [`--rotate`](#rotate)

This flag rotates the unlock key, replacing it with a new randomly-generated key. The old unlock key will no longer be accepted.

### [`--quiet`](#quiet)

Only print the unlock key, without instructions.

Table of contents
