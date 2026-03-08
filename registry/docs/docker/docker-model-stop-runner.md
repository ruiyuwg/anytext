Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker model stop-runner

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Stop Docker Model Runner (Docker Engine only)

Usage

`docker model stop-runner`

## [Description](#description)

This command stops the Docker Model Runner by removing the running containers, but preserves the container images on disk. Use this command when you want to temporarily stop the runner but plan to start it again later.

To completely remove the runner including images, use `docker model uninstall-runner --images` instead.

## [Options](#options)

Option

Default

Description

`--models`

Remove model storage volume

Table of contents
