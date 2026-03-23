When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker container start

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Start one or more stopped containers

Usage

`docker container start [OPTIONS] CONTAINER [CONTAINER...]`

Aliases

An alias is a short or memorable alternative for a longer command.

`docker start`

## [Description](#description)

Start one or more stopped containers

## [Options](#options)

Option

Default

Description

`-a, --attach`

Attach STDOUT/STDERR and forward signals

`--checkpoint`

experimental (daemon) Restore from this checkpoint

`--checkpoint-dir`

experimental (daemon) Use a custom checkpoint storage directory

`--detach-keys`

Override the key sequence for detaching a container

`-i, --interactive`

Attach container's STDIN

## [Examples](#examples)

```console
$ docker start my_container
```

Table of contents
