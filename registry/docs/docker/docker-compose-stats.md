When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker compose stats

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Display a live stream of container(s) resource usage statistics

Usage

`docker compose stats [OPTIONS] [SERVICE]`

## [Description](#description)

Display a live stream of container(s) resource usage statistics

## [Options](#options)

Option

Default

Description

`-a, --all`

Show all containers (default shows just running)

`--format`

Format output using a custom template:\
'table': Print output in table format with column headers (default)\
'table TEMPLATE': Print output in table format using the given Go template\
'json': Print in JSON format\
'TEMPLATE': Print output using the given Go template.\
Refer to <https://docs.docker.com/engine/cli/formatting/> for more information about formatting output with templates

`--no-stream`

Disable streaming stats and only pull the first result

`--no-trunc`

Do not truncate output

Table of contents
