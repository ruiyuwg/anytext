When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker plugin push

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Push a plugin to a registry

Usage

`docker plugin push [OPTIONS] PLUGIN[:TAG]`

## [Description](#description)

After you have created a plugin using `docker plugin create` and the plugin is ready for distribution, use `docker plugin push` to share your images to Docker Hub or a self-hosted registry.

Registry credentials are managed by [docker login](/reference/cli/docker/login/).

## [Examples](#examples)

The following example shows how to push a sample `user/plugin`.

```console
$ docker plugin ls

ID             NAME                    DESCRIPTION                  ENABLED
69553ca1d456   user/plugin:latest      A sample plugin for Docker   false

$ docker plugin push user/plugin
```

Table of contents
