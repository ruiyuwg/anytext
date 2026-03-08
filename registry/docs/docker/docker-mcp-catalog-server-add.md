Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker mcp catalog server add

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Add MCP servers to a catalog

Usage

`docker mcp catalog server add <oci-reference> [--server <ref1> --server <ref2> ...]`

## [Description](#description)

Add MCP servers to a catalog using various URI schemes.

## [Options](#options)

Option

Default

Description

`--server`

Server to include specified with a URI: https:// (MCP Registry reference) or docker:// (Docker Image reference) or catalog:// (Catalog reference) or file:// (Local file path). Can be specified multiple times.

## [Examples](#examples)

# [Add servers from another catalog](#add-servers-from-another-catalog)

docker mcp catalog server add mcp/my-catalog:latest --server catalog://mcp/docker-mcp-catalog:latest/github

# [Add servers with OCI references](#add-servers-with-oci-references)

docker mcp catalog server add mcp/my-catalog:latest --server docker://my-server:latest

# [Add servers with MCP Registry references](#add-servers-with-mcp-registry-references)

docker mcp catalog server add mcp/my-catalog:latest --server <https://registry.modelcontextprotocol.io/v0/servers/71de5a2a-6cfb-4250-a196-f93080ecc860>

# [Mix server references](#mix-server-references)

docker mcp catalog server add mcp/my-catalog:latest --server catalog://mcp/docker-mcp-catalog:latest/github --server docker://my-server:latest

Table of contents
