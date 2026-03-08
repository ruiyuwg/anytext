Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker network disconnect

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Disconnect a container from a network

Usage

`docker network disconnect [OPTIONS] NETWORK CONTAINER`

## [Description](#description)

Disconnects a container from a network. The container must be running to disconnect it from the network.

## [Options](#options)

Option

Default

Description

`-f, --force`

Force the container to disconnect from a network

## [Examples](#examples)

```console
$ docker network disconnect multi-host-network container1
```

Table of contents
