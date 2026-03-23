When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker container export

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Export a container's filesystem as a tar archive

Usage

`docker container export [OPTIONS] CONTAINER`

Aliases

An alias is a short or memorable alternative for a longer command.

`docker export`

## [Description](#description)

The `docker export` command doesn't export the contents of volumes associated with the container. If a volume is mounted on top of an existing directory in the container, `docker export` exports the contents of the underlying directory, not the contents of the volume.

Refer to [Backup, restore, or migrate data volumes](/engine/storage/volumes/#back-up-restore-or-migrate-data-volumes) in the user guide for examples on exporting data in a volume.

## [Options](#options)

Option

Default

Description

`-o, --output`

Write to a file, instead of STDOUT

## [Examples](#examples)

The following commands produce the same result.

```console
$ docker export red_panda > latest.tar
```

```console
$ docker export --output="latest.tar" red_panda
```

Table of contents
