When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker buildx use

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Set the current builder instance

Usage

`docker buildx use [OPTIONS] NAME`

## [Description](#description)

Switches the current builder instance. Build commands invoked after this command will run on a specified builder. Alternatively, a context name can be used to switch to the default builder of that context.

## [Options](#options)

Option

Default

Description

`--default`

Set builder as default for current context

`--global`

Builder persists context changes

## [Examples](#examples)

### [Override the configured builder instance (--builder)](#builder)

Same as [`buildx --builder`](/reference/cli/docker/buildx/#builder).

Table of contents
