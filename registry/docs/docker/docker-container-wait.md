When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker container wait

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Block until one or more containers stop, then print their exit codes

Usage

`docker container wait CONTAINER [CONTAINER...]`

Aliases

An alias is a short or memorable alternative for a longer command.

`docker wait`

## [Description](#description)

Block until one or more containers stop, then print their exit codes

## [Examples](#examples)

Start a container in the background.

```console
$ docker run -dit --name=my_container ubuntu bash
```

Run `docker wait`, which should block until the container exits.

```console
$ docker wait my_container
```

In another terminal, stop the first container. The `docker wait` command above returns the exit code.

```console
$ docker stop my_container
```

This is the same `docker wait` command from above, but it now exits, returning `0`.

```console
$ docker wait my_container

0
```

Table of contents
