Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker context update

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Update a context

Usage

`docker context update [OPTIONS] CONTEXT`

## [Description](#description)

Updates an existing `context`. See [context create](/reference/cli/docker/context/create/).

## [Options](#options)

Option

Default

Description

`--description`

Description of the context

`--docker`

set the docker endpoint

## [Examples](#examples)

### [Update an existing context](#update-an-existing-context)

```console
$ docker context update \
    --description "some description" \
    --docker "host=tcp://myserver:2376,ca=~/ca-file,cert=~/cert-file,key=~/key-file" \
    my-context
```

Table of contents
