Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker buildx rm

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Remove one or more builder instances

Usage

`docker buildx rm [OPTIONS] [NAME...]`

## [Description](#description)

Removes the specified or current builder. It is a no-op attempting to remove the default builder.

## [Options](#options)

Option

Default

Description

[`--all-inactive`](#all-inactive)

Remove all inactive builders

[`-f, --force`](#force)

Do not prompt for confirmation

[`--keep-daemon`](#keep-daemon)

Keep the BuildKit daemon running

[`--keep-state`](#keep-state)

Keep BuildKit state

`--timeout`

`20s`

Override the default timeout for loading builder status

## [Examples](#examples)

### [Remove all inactive builders (--all-inactive)](#all-inactive)

Remove builders that are not in running state.

```console
$ docker buildx rm --all-inactive
WARNING! This will remove all builders that are not in running state. Are you sure you want to continue? [y/N] y
```

### [Override the configured builder instance (--builder)](#builder)

Same as [`buildx --builder`](/reference/cli/docker/buildx/#builder).

### [Do not prompt for confirmation (--force)](#force)

Do not prompt for confirmation before removing inactive builders.

```console
$ docker buildx rm --all-inactive --force
```

### [Keep the BuildKit daemon running (--keep-daemon)](#keep-daemon)

Keep the BuildKit daemon running after the buildx context is removed. This is useful when you manage BuildKit daemons and buildx contexts independently. Only supported by the [`docker-container`](/build/drivers/docker-container/) and [`kubernetes`](/build/drivers/kubernetes/) drivers.

### [Keep BuildKit state (--keep-state)](#keep-state)

Keep BuildKit state, so it can be reused by a new builder with the same name. Currently, only supported by the [`docker-container` driver](/build/drivers/docker-container/).

Table of contents
