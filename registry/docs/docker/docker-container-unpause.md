Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker container unpause

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Unpause all processes within one or more containers

Usage

`docker container unpause CONTAINER [CONTAINER...]`

Aliases

An alias is a short or memorable alternative for a longer command.

`docker unpause`

## [Description](#description)

The `docker unpause` command un-suspends all processes in the specified containers. On Linux, it does this using the freezer cgroup.

See the [freezer cgroup documentation](https://www.kernel.org/doc/Documentation/cgroup-v1/freezer-subsystem.txt) for further details.

## [Examples](#examples)

```console
$ docker unpause my_container
my_container
```

Table of contents
