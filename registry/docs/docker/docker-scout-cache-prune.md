When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker scout cache prune

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Remove temporary or cached data

Usage

`docker scout cache prune`

## [Description](#description)

The `docker scout cache prune` command removes temporary data and SBOM cache.

By default, `docker scout cache prune` only deletes temporary data. To delete temporary data and clear the SBOM cache, use the `--sboms` flag.

## [Options](#options)

Option

Default

Description

`-f, --force`

Do not prompt for confirmation

`--sboms`

Prune cached SBOMs

## [Examples](#examples)

### [Delete temporary data](#delete-temporary-data)

```console
$ docker scout cache prune
? Are you sure to delete all temporary data? Yes
    ✓ temporary data deleted
```

### [Delete temporary and cache data](#delete-temporary-and-cache-data)

```console
$ docker scout cache prune --sboms
? Are you sure to delete all temporary data and all cached SBOMs? Yes
    ✓ temporary data deleted
    ✓ cached SBOMs deleted
```

Table of contents
