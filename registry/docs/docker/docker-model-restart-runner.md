When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker model restart-runner

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Restart Docker Model Runner (Docker Engine only)

Usage

`docker model restart-runner`

## [Description](#description)

This command restarts the Docker Model Runner without pulling container images. Use this command to restart the runner when you already have the required images locally.

For the first-time setup or to ensure you have the latest images, use `docker model install-runner` instead.

## [Options](#options)

Option

Default

Description

`--debug`

Enable debug logging

`--do-not-track`

Do not track models usage in Docker Model Runner

`--gpu`

`auto`

Specify GPU support (none|auto|cuda|rocm|musa|cann)

`--host`

`127.0.0.1`

Host address to bind Docker Model Runner

`--port`

Docker container port for Docker Model Runner (default: 12434 for Docker Engine, 12435 for Cloud mode)

`--proxy-cert`

Path to a CA certificate file for proxy SSL inspection

Table of contents
