Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker container port

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

List port mappings or a specific mapping for the container

Usage

`docker container port CONTAINER [PRIVATE_PORT[/PROTO]]`

Aliases

An alias is a short or memorable alternative for a longer command.

`docker port`

## [Description](#description)

List port mappings or a specific mapping for the container

## [Examples](#examples)

### [Show all mapped ports](#show-all-mapped-ports)

You can find out all the ports mapped by not specifying a `PRIVATE_PORT`, or just a specific mapping:

```console
$ docker ps

CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS                                            NAMES
b650456536c7        busybox:latest      top                 54 minutes ago      Up 54 minutes       0.0.0.0:1234->9876/tcp, 0.0.0.0:4321->7890/tcp   test

$ docker port test

7890/tcp -> 0.0.0.0:4321
9876/tcp -> 0.0.0.0:1234

$ docker port test 7890/tcp

0.0.0.0:4321

$ docker port test 7890/udp

2014/06/24 11:53:36 Error: No public port '7890/udp' published for test

$ docker port test 7890

0.0.0.0:4321
```

Table of contents
