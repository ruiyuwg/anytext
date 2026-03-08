Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker scout config

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Manage Docker Scout configuration

Usage

`docker scout config [KEY] [VALUE]`

## [Description](#description)

`docker scout config` allows you to list, get and set Docker Scout configuration.

Available configuration key:

- `organization`: Namespace of the Docker organization to be used by default.

## [Examples](#examples)

### [List existing configuration](#list-existing-configuration)

```console
$ docker scout config
organization=my-org-namespace
```

### [Print configuration value](#print-configuration-value)

```console
$ docker scout config organization
my-org-namespace
```

### [Set configuration value](#set-configuration-value)

```console
$ docker scout config organization my-org-namespace
    ✓ Successfully set organization to my-org-namespace
```

Table of contents
