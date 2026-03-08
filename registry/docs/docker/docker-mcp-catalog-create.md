Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker mcp catalog create

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Create a new catalog from a profile, legacy catalog, or community registry

Usage

`docker mcp catalog create <oci-reference> [--server <ref1> --server <ref2> ...] [--from-profile <profile-id>] [--from-legacy-catalog <url>] [--from-community-registry <hostname>] [--title <title>]`

## [Description](#description)

Create a new catalog from a profile, legacy catalog, or community registry

## [Options](#options)

Option

Default

Description

`--from-community-registry`

Community registry hostname to fetch servers from (e.g. registry.modelcontextprotocol.io)

`--from-legacy-catalog`

Legacy catalog URL to create the catalog from

`--from-profile`

Profile ID to create the catalog from

`--server`

Server to include specified with a URI: https:// (MCP Registry reference) or docker:// (Docker Image reference) or catalog:// (Catalog reference) or file:// (Local file path). Can be specified multiple times.

`--title`

Title of the catalog

Table of contents
