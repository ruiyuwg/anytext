When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker compose create

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Creates containers for a service

Usage

`docker compose create [OPTIONS] [SERVICE...]`

## [Description](#description)

Creates containers for a service

## [Options](#options)

Option

Default

Description

`--build`

Build images before starting containers

`--force-recreate`

Recreate containers even if their configuration and image haven't changed

`--no-build`

Don't build an image, even if it's policy

`--no-recreate`

If containers already exist, don't recreate them. Incompatible with --force-recreate.

`--pull`

`policy`

Pull image before running ("always"|"missing"|"never"|"build")

`--quiet-pull`

Pull without printing progress information

`--remove-orphans`

Remove containers for services not defined in the Compose file

`--scale`

Scale SERVICE to NUM instances. Overrides the `scale` setting in the Compose file if present.

`-y, --yes`

Assume "yes" as answer to all prompts and run non-interactively

Table of contents
