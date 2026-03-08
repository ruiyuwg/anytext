Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker mcp catalog tag

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Create a tagged copy of a catalog

Usage

`docker mcp catalog tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]`

## [Description](#description)

Create a new catalog by tagging an existing catalog with a new name or version. This creates a copy of the source catalog with a new reference, similar to Docker image tagging.

## [Examples](#examples)

# [Tag a catalog with a new version](#tag-a-catalog-with-a-new-version)

docker mcp catalog tag mcp/my-catalog:v1 mcp/my-catalog:v2

# [Create a tagged copy with a different name](#create-a-tagged-copy-with-a-different-name)

docker mcp catalog tag mcp/team-catalog:latest mcp/prod-catalog:v1.0

# [Tag without explicit version (uses latest)](#tag-without-explicit-version-uses-latest)

docker mcp catalog tag mcp/my-catalog mcp/my-catalog:backup

Table of contents
