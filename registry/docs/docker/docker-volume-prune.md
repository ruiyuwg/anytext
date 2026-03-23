When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker volume prune

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Remove unused local volumes

Usage

`docker volume prune [OPTIONS]`

## [Description](#description)

Remove all unused local volumes. Unused local volumes are those which are not referenced by any containers. By default, it only removes anonymous volumes.

## [Options](#options)

Option

Default

Description

[`-a, --all`](#all)

API 1.42+ Remove all unused volumes, not just anonymous ones

[`--filter`](#filter)

Provide filter values (e.g. `label=<label>`)

`-f, --force`

Do not prompt for confirmation

## [Examples](#examples)

```console
$ docker volume prune

WARNING! This will remove anonymous local volumes not used by at least one container.
Are you sure you want to continue? [y/N] y
Deleted Volumes:
07c7bdf3e34ab76d921894c2b834f073721fccfbbcba792aa7648e3a7a664c2e

Total reclaimed space: 36 B
```

### [Filtering (--all, -a)](#all)

Use the `--all` flag to prune both unused anonymous and named volumes.

### [Filtering (--filter)](#filter)

The filtering flag (`--filter`) format is of "key=value". If there is more than one filter, then pass multiple flags (e.g., `--filter "foo=bar" --filter "bif=baz"`)

The currently supported filters are:

- label (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) - only remove volumes with (or without, in case `label!=...` is used) the specified labels.

The `label` filter accepts two formats. One is the `label=...` (`label=<key>` or `label=<key>=<value>`), which removes volumes with the specified labels. The other format is the `label!=...` (`label!=<key>` or `label!=<key>=<value>`), which removes volumes without the specified labels.

Table of contents
