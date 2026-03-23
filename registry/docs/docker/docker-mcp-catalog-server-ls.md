When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker mcp catalog server ls

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

List servers in a catalog

Usage

`docker mcp catalog server ls <oci-reference>`

Aliases

An alias is a short or memorable alternative for a longer command.

`docker mcp catalog server list`

## [Description](#description)

List all servers in a catalog.

Use --filter to search for servers matching a query (case-insensitive substring matching on server names). Filters use key=value format (e.g., name=github).

## [Options](#options)

Option

Default

Description

`-f, --filter`

Filter output (e.g., name=github)

`--format`

`human`

Supported: json, yaml, human.

## [Examples](#examples)

# [List all servers in a catalog](#list-all-servers-in-a-catalog)

docker mcp catalog server ls mcp/docker-mcp-catalog:latest

# [Filter servers by name](#filter-servers-by-name)

docker mcp catalog server ls mcp/docker-mcp-catalog:latest --filter name=github

# [Combine multiple filters (using short flag)](#combine-multiple-filters-using-short-flag)

docker mcp catalog server ls mcp/docker-mcp-catalog:latest -f name=slack -f name=github

# [Output in JSON format](#output-in-json-format)

docker mcp catalog server ls mcp/docker-mcp-catalog:latest --format json

Table of contents
