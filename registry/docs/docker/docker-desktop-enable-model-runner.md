Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker desktop enable model-runner

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Manage Docker Model Runner settings

Usage

`docker desktop enable model-runner [OPTIONS]`

## [Description](#description)

Enable and manage Docker Model Runner settings used by 'docker model'

## [Options](#options)

Option

Default

Description

`--no-tcp`

Disable TCP connection. Cannot be used with --tcp.

`--tcp`

`12434`

Enable or change TCP port for connection (1-65535). Cannot be used with --no-tcp.

`--cors`

`all`

CORS configuration. Can be `all`, `none`, or comma-separated list of allowed origins.

Table of contents
