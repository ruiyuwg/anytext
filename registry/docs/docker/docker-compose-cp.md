When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker compose cp

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Copy files/folders between a service container and the local filesystem

Usage

`docker compose cp [OPTIONS] SERVICE:SRC_PATH DEST_PATH|- docker compose cp [OPTIONS] SRC_PATH|- SERVICE:DEST_PATH`

## [Description](#description)

Copy files/folders between a service container and the local filesystem

## [Options](#options)

Option

Default

Description

`--all`

Include containers created by the run command

`-a, --archive`

Archive mode (copy all uid/gid information)

`-L, --follow-link`

Always follow symbol link in SRC\_PATH

`--index`

Index of the container if service has multiple replicas

Table of contents
