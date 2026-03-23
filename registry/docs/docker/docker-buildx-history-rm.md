When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker buildx history rm

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Remove build records

Usage

`docker buildx history rm [OPTIONS] [REF...]`

## [Description](#description)

Remove one or more build records from the current builder’s history. You can remove specific builds by ID or offset, or delete all records at once using the `--all` flag.

## [Options](#options)

Option

Default

Description

[`--all`](#all)

Remove all build records

## [Examples](#examples)

### [Remove a specific build](#remove-a-specific-build)

```console
# Using a build ID
docker buildx history rm qu2gsuo8ejqrwdfii23xkkckt

# Or using a relative offset
docker buildx history rm ^1
```

### [Remove multiple builds](#remove-multiple-builds)

```console
# Using build IDs
docker buildx history rm qu2gsuo8ejqrwdfii23xkkckt qsiifiuf1ad9pa9qvppc0z1l3

# Or using relative offsets
docker buildx history rm ^1 ^2
```

### [Remove all build records from the current builder (--all)](#all)

```console
docker buildx history rm --all
```

Table of contents
