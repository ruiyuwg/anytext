When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker volume rm

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Remove one or more volumes

Usage

`docker volume rm [OPTIONS] VOLUME [VOLUME...]`

Aliases

An alias is a short or memorable alternative for a longer command.

`docker volume remove`

## [Description](#description)

Remove one or more volumes. You can't remove a volume that's in use by a container.

## [Options](#options)

Option

Default

Description

`-f, --force`

API 1.25+ Force the removal of one or more volumes

## [Examples](#examples)

```console
$ docker volume rm hello

hello
```

Table of contents
