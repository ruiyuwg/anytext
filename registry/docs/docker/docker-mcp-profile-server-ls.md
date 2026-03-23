When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker mcp profile server ls

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

List servers across profiles

Usage

`docker mcp profile server ls`

Aliases

An alias is a short or memorable alternative for a longer command.

`docker mcp profile server list`

## [Description](#description)

List all servers grouped by profile.

Use --filter to search for servers matching a query (case-insensitive substring matching on server names). Filters use key=value format (e.g., name=github, profile=my-dev-env).

## [Options](#options)

Option

Default

Description

`-f, --filter`

Filter output (e.g., name=github, profile=my-dev-env)

`--format`

`human`

Supported: json, yaml, human.

## [Examples](#examples)

# [List all servers across all profiles](#list-all-servers-across-all-profiles)

docker mcp profile server ls

# [Filter servers by name](#filter-servers-by-name)

docker mcp profile server ls --filter name=github

# [Show servers from a specific profile](#show-servers-from-a-specific-profile)

docker mcp profile server ls --filter profile=my-dev-env

# [Combine multiple filters (using short flag)](#combine-multiple-filters-using-short-flag)

docker mcp profile server ls -f name=slack -f profile=my-dev-env

# [Output in JSON format](#output-in-json-format)

docker mcp profile server ls --format json

Table of contents
