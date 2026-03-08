Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker plugin rm

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Remove one or more plugins

Usage

`docker plugin rm [OPTIONS] PLUGIN [PLUGIN...]`

Aliases

An alias is a short or memorable alternative for a longer command.

`docker plugin remove`

## [Description](#description)

Removes a plugin. You cannot remove a plugin if it is enabled, you must disable a plugin using the [`docker plugin disable`](/reference/cli/docker/plugin/disable/) before removing it, or use `--force`. Use of `--force` is not recommended, since it can affect functioning of running containers using the plugin.

## [Options](#options)

Option

Default

Description

`-f, --force`

Force the removal of an active plugin

## [Examples](#examples)

The following example disables and removes the `sample-volume-plugin:latest` plugin:

```console
$ docker plugin disable tiborvass/sample-volume-plugin

tiborvass/sample-volume-plugin

$ docker plugin rm tiborvass/sample-volume-plugin:latest

tiborvass/sample-volume-plugin
```

Table of contents
