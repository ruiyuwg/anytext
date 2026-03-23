When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker mcp profile tools

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Manage tool allowlist for servers in a profile

Usage

`docker mcp profile tools <profile-id> [--enable <tool> ...] [--disable <tool> ...] [--enable-all <server> ...] [--disable-all <server> ...]`

## [Description](#description)

Manage the tool allowlist for servers in a profile. Tools are specified using dot notation: .

Use --enable to enable specific tools for a server (can be specified multiple times). Use --disable to disable specific tools for a server (can be specified multiple times). Use --enable-all to enable all tools for a server (can be specified multiple times). Use --disable-all to disable all tools for a server (can be specified multiple times).

To view enabled tools, use: docker mcp profile show

## [Options](#options)

Option

Default

Description

`--disable`

Disable specific tools: . (repeatable)

`--disable-all`

Disable all tools for a server: (repeatable)

`--enable`

Enable specific tools: . (repeatable)

`--enable-all`

Enable all tools for a server: (repeatable)

## [Examples](#examples)

# [Enable specific tools for a server](#enable-specific-tools-for-a-server)

docker mcp profile tools my-profile --enable github.create\_issue --enable github.list\_repos

# [Disable specific tools for a server](#disable-specific-tools-for-a-server)

docker mcp profile tools my-profile --disable github.create\_issue --disable github.search\_code

# [Enable and disable in one command](#enable-and-disable-in-one-command)

docker mcp profile tools my-profile --enable github.create\_issue --disable github.search\_code

# [Enable all tools for a server](#enable-all-tools-for-a-server)

docker mcp profile tools my-profile --enable-all github

# [Disable all tools for a server](#disable-all-tools-for-a-server)

docker mcp profile tools my-profile --disable-all github

# [View all enabled tools in the profile](#view-all-enabled-tools-in-the-profile)

docker mcp profile show my-profile

Table of contents
