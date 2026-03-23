When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker context ls

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

List contexts

Usage

`docker context ls [OPTIONS]`

Aliases

An alias is a short or memorable alternative for a longer command.

`docker context list`

## [Description](#description)

List contexts

## [Options](#options)

Option

Default

Description

`--format`

Format output using a custom template:\
'table': Print output in table format with column headers (default)\
'table TEMPLATE': Print output in table format using the given Go template\
'json': Print in JSON format\
'TEMPLATE': Print output using the given Go template.\
Refer to <https://docs.docker.com/go/formatting/> for more information about formatting output with templates

`-q, --quiet`

Only show context names

## [Examples](#examples)

Use `docker context ls` to print all contexts. The currently active context is indicated with an `*`:

```console
$ docker context ls

NAME                DESCRIPTION                               DOCKER ENDPOINT                      ORCHESTRATOR
default *           Current DOCKER_HOST based configuration   unix:///var/run/docker.sock          swarm
production                                                    tcp:///prod.corp.example.com:2376
staging                                                       tcp:///stage.corp.example.com:2376
```

Table of contents
