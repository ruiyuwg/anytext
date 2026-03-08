Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker context export

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Export a context to a tar archive FILE or a tar stream on STDOUT.

Usage

`docker context export [OPTIONS] CONTEXT [FILE|-]`

## [Description](#description)

Exports a context to a file that can then be used with `docker context import`.

The default output filename is `<CONTEXT>.dockercontext`. To export to `STDOUT`, use `-` as filename, for example:

```console
$ docker context export my-context -
```

Table of contents
