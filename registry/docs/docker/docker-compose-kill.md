Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker compose kill

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Force stop service containers

Usage

`docker compose kill [OPTIONS] [SERVICE...]`

## [Description](#description)

Forces running containers to stop by sending a `SIGKILL` signal. Optionally the signal can be passed, for example:

```console
$ docker compose kill -s SIGINT
```

## [Options](#options)

Option

Default

Description

`--remove-orphans`

Remove containers for services not defined in the Compose file

`-s, --signal`

`SIGKILL`

SIGNAL to send to the container

Table of contents
