When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker context create

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Create a context

Usage

`docker context create [OPTIONS] CONTEXT`

## [Description](#description)

Creates a new `context`. This lets you switch the daemon your `docker` CLI connects to.

## [Options](#options)

Option

Default

Description

`--description`

Description of the context

[`--docker`](#docker)

set the docker endpoint

[`--from`](#from)

create context from a named context

## [Examples](#examples)

### [Create a context with a Docker endpoint (--docker)](#docker)

Use the `--docker` flag to create a context with a custom endpoint. The following example creates a context named `my-context` with a docker endpoint of `/var/run/docker.sock`:

```console
$ docker context create \
    --docker host=unix:///var/run/docker.sock \
    my-context
```

### [Create a context based on an existing context (--from)](#from)

Use the `--from=<context-name>` option to create a new context from an existing context. The example below creates a new context named `my-context` from the existing context `existing-context`:

```console
$ docker context create --from existing-context my-context
```

If the `--from` option isn't set, the `context` is created from the current context:

```console
$ docker context create my-context
```

This can be used to create a context out of an existing `DOCKER_HOST` based script:

```console
$ source my-setup-script.sh
$ docker context create my-context
```

To source the `docker` endpoint configuration from an existing context use the `--docker from=<context-name>` option. The example below creates a new context named `my-context` using the docker endpoint configuration from the existing context `existing-context`:

```console
$ docker context create \
    --docker from=existing-context \
    my-context
```

Docker endpoints configurations, as well as the description can be modified with `docker context update`.

Refer to the [`docker context update` reference](/reference/cli/docker/context/update/) for details.

Table of contents
