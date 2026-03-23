When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker buildx history open

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Open a build record in Docker Desktop

Usage

`docker buildx history open [OPTIONS] [REF]`

## [Description](#description)

Open a build record in Docker Desktop for visual inspection. This requires Docker Desktop to be installed and running on the host machine.

## [Examples](#examples)

### [Open the most recent build in Docker Desktop](#open-the-most-recent-build-in-docker-desktop)

```console
docker buildx history open
```

By default, this opens the most recent build on the current builder.

### [Open a specific build](#open-a-specific-build)

```console
# Using a build ID
docker buildx history open qu2gsuo8ejqrwdfii23xkkckt

# Or using a relative offset
docker buildx history open ^1
```

Table of contents
