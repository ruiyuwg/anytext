When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker mcp catalog server remove

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Remove MCP servers from a catalog

Usage

`docker mcp catalog server remove <oci-reference> --name <name1> --name <name2> ...`

Aliases

An alias is a short or memorable alternative for a longer command.

`docker mcp catalog server rm`

## [Description](#description)

Remove MCP servers from a catalog by server name.

## [Options](#options)

Option

Default

Description

`--name`

Server name to remove (can be specified multiple times)

## [Examples](#examples)

# [Remove servers by name](#remove-servers-by-name)

docker mcp catalog server remove mcp/my-catalog:latest --name github --name slack

# [Remove a single server](#remove-a-single-server)

docker mcp catalog server remove mcp/my-catalog:latest --name github

Table of contents
