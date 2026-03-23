When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker buildx history import

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Import build records into Docker Desktop

Usage

`docker buildx history import [OPTIONS] -`

## [Description](#description)

Import a build record from a `.dockerbuild` archive into Docker Desktop. This lets you view, inspect, and analyze builds created in other environments or CI pipelines.

## [Options](#options)

Option

Default

Description

[`-f, --file`](#file)

Import from a file path

## [Examples](#examples)

### [Import a `.dockerbuild` archive from standard input](#import-a-dockerbuild-archive-from-standard-input)

```console
docker buildx history import < mybuild.dockerbuild
```

### [Import a build archive from a file (--file)](#file)

```console
docker buildx history import --file ./artifacts/backend-build.dockerbuild
```

### [Open a build manually](#open-a-build-manually)

By default, the `import` command automatically opens the imported build in Docker Desktop. You don't need to run `open` unless you're opening a specific build or re-opening it later.

If you've imported multiple builds, you can open one manually:

```console
docker buildx history open ci-build
```

Table of contents
