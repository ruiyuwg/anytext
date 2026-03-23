When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker compose commit

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Create a new image from a service container's changes

Usage

`docker compose commit [OPTIONS] SERVICE [REPOSITORY[:TAG]]`

## [Description](#description)

Create a new image from a service container's changes

## [Options](#options)

Option

Default

Description

`-a, --author`

Author (e.g., "John Hannibal Smith <hannibal@a-team.com>")

`-c, --change`

Apply Dockerfile instruction to the created image

`--index`

index of the container if service has multiple replicas.

`-m, --message`

Commit message

`-p, --pause`

`true`

Pause container during commit

Table of contents
