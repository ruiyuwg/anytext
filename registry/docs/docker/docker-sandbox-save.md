Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker sandbox save

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Save a snapshot of the sandbox as a template

Usage

`docker sandbox save SANDBOX TAG`

## [Description](#description)

Save a snapshot of the sandbox as a template.

By default, the image is loaded into the host's Docker daemon (requires Docker to be running). Use --output to save the image to a tar file instead.

Examples:

# [Load into host Docker (requires host Docker running)](#load-into-host-docker-requires-host-docker-running)

docker sandbox save my-sandbox myimage:v1.0

# [Save to file (works without host Docker)](#save-to-file-works-without-host-docker)

docker sandbox save my-sandbox myimage:v1.0 --output /tmp/myimage.tar

## [Options](#options)

Option

Default

Description

`-o, --output`

Save image to specified tar file instead of loading into host Docker

Table of contents
