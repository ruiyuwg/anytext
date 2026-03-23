When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker plugin disable

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Disable a plugin

Usage

`docker plugin disable [OPTIONS] PLUGIN`

## [Description](#description)

Disables a plugin. The plugin must be installed before it can be disabled, see [`docker plugin install`](/reference/cli/docker/plugin/install/). Without the `-f` option, a plugin that has references (e.g., volumes, networks) cannot be disabled.

## [Options](#options)

Option

Default

Description

`-f, --force`

Force the disable of an active plugin

## [Examples](#examples)

The following example shows that the `sample-volume-plugin` plugin is installed and enabled:

```console
$ docker plugin ls

ID            NAME                                    DESCRIPTION                ENABLED
69553ca1d123  tiborvass/sample-volume-plugin:latest   A test plugin for Docker   true
```

To disable the plugin, use the following command:

```console
$ docker plugin disable tiborvass/sample-volume-plugin

tiborvass/sample-volume-plugin

$ docker plugin ls

ID            NAME                                    DESCRIPTION                ENABLED
69553ca1d123  tiborvass/sample-volume-plugin:latest   A test plugin for Docker   false
```

Table of contents
