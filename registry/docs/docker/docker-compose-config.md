Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker compose config

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Parse, resolve and render compose file in canonical format

Usage

`docker compose config [OPTIONS] [SERVICE...]`

## [Description](#description)

`docker compose config` renders the actual data model to be applied on the Docker Engine. It merges the Compose files set by `-f` flags, resolves variables in the Compose file, and expands short-notation into the canonical format.

## [Options](#options)

Option

Default

Description

`--environment`

Print environment used for interpolation.

`--format`

Format the output. Values: \[yaml | json]

`--hash`

Print the service config hash, one per line.

`--images`

Print the image names, one per line.

`--lock-image-digests`

Produces an override file with image digests

`--models`

Print the model names, one per line.

`--networks`

Print the network names, one per line.

`--no-consistency`

Don't check model consistency - warning: may produce invalid Compose output

`--no-env-resolution`

Don't resolve service env files

`--no-interpolate`

Don't interpolate environment variables

`--no-normalize`

Don't normalize compose model

`--no-path-resolution`

Don't resolve file paths

`-o, --output`

Save to file (default to stdout)

`--profiles`

Print the profile names, one per line.

`-q, --quiet`

Only validate the configuration, don't print anything

`--resolve-image-digests`

Pin image tags to digests

`--services`

Print the service names, one per line.

`--variables`

Print model variables and default values.

`--volumes`

Print the volume names, one per line.

Table of contents
