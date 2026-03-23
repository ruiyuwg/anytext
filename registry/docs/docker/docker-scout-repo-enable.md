When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker scout repo enable

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Enable Docker Scout

Usage

`docker scout repo enable [REPOSITORY]`

## [Description](#description)

The docker scout repo enable command enables Docker Scout on repositories.

## [Options](#options)

Option

Default

Description

`--all`

Enable all repositories of the organization. Can not be used with --filter.

`--filter`

Regular expression to filter repositories by name

`--integration`

Name of the integration to use for enabling an image

`--org`

Namespace of the Docker organization

`--registry`

Container Registry

## [Examples](#examples)

### [Enable a specific repository](#enable-a-specific-repository)

```console
$ docker scout repo enable my/repository
```

### [Enable all repositories of the organization](#enable-all-repositories-of-the-organization)

```console
$ docker scout repo enable --all
```

### [Enable some repositories based on a filter](#enable-some-repositories-based-on-a-filter)

```console
$ docker scout repo enable --filter namespace/backend
```

### [Enable a repository from a specific registry](#enable-a-repository-from-a-specific-registry)

```console
$ docker scout repo enable my/repository --registry 123456.dkr.ecr.us-east-1.amazonaws.com
```

Table of contents
