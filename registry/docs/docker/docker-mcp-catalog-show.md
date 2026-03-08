Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker mcp catalog show

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Show a catalog

Usage

`docker mcp catalog show <oci-reference> [--pull <pull-option>]`

## [Description](#description)

Show a catalog

## [Options](#options)

Option

Default

Description

`--format`

`human`

Supported: json, yaml, human.

`--no-tools`

Exclude tools from output (deprecated, use --yq instead)

`--pull`

`never`

Supported: missing, never, always, initial, exists, or duration (e.g. '1h', '1d'). Duration represents time since last update.

`--yq`

YQ expression to apply to the output

Table of contents
