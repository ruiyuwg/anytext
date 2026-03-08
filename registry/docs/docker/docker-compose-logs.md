Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker compose logs

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

View output from containers

Usage

`docker compose logs [OPTIONS] [SERVICE...]`

## [Description](#description)

Displays log output from services

## [Options](#options)

Option

Default

Description

`-f, --follow`

Follow log output

`--index`

index of the container if service has multiple replicas

`--no-color`

Produce monochrome output

`--no-log-prefix`

Don't print prefix in logs

`--since`

Show logs since timestamp (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes)

`-n, --tail`

`all`

Number of lines to show from the end of the logs for each container

`-t, --timestamps`

Show timestamps

`--until`

Show logs before a timestamp (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes)

Table of contents
