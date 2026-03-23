When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker compose down

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Stop and remove containers, networks

Usage

`docker compose down [OPTIONS] [SERVICES]`

## [Description](#description)

Stops containers and removes containers, networks, volumes, and images created by `up`.

By default, the only things removed are:

- Containers for services defined in the Compose file.
- Networks defined in the networks section of the Compose file.
- The default network, if one is used.

Networks and volumes defined as external are never removed.

Anonymous volumes are not removed by default. However, as they don’t have a stable name, they are not automatically mounted by a subsequent `up`. For data that needs to persist between updates, use explicit paths as bind mounts or named volumes.

## [Options](#options)

Option

Default

Description

`--remove-orphans`

Remove containers for services not defined in the Compose file

`--rmi`

Remove images used by services. "local" remove only images that don't have a custom tag ("local"|"all")

`-t, --timeout`

Specify a shutdown timeout in seconds

`-v, --volumes`

Remove named volumes declared in the "volumes" section of the Compose file and anonymous volumes attached to containers

Table of contents
