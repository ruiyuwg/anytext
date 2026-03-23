When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker scout stream

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Manage streams (experimental)

Usage

`docker scout stream [STREAM] [IMAGE]`

> Warning
>
> This command is deprecated
>
> It may be removed in a future Docker version. For more information, see the [Docker roadmap](https://github.com/docker/roadmap/issues/209)

**Experimental**

**This command is experimental.**

Experimental features are intended for testing and feedback as their functionality or design may change between releases without warning or can be removed entirely in a future release.

## [Description](#description)

The `docker scout stream` command lists the deployment streams and records an image to it.

Once recorded, streams can be referred to by their name, eg. in the `docker scout compare` command using `--to-stream`.

## [Options](#options)

Option

Default

Description

`--org`

Namespace of the Docker organization

`-o, --output`

Write the report to a file

`--platform`

Platform of image to record

## [Examples](#examples)

### [List existing streams](#list-existing-streams)

```console
$ %[1]s %[2]s
prod-cluster-123
stage-cluster-234
```

### [List images of a stream](#list-images-of-a-stream)

```console
$ %[1]s %[2]s prod-cluster-123
namespace/repo:tag@sha256:9a4df4fadc9bbd44c345e473e0688c2066a6583d4741679494ba9228cfd93e1b
namespace/other-repo:tag@sha256:0001d6ce124855b0a158569c584162097fe0ca8d72519067c2c8e3ce407c580f
```

### [Record an image to a stream, for a specific platform](#record-an-image-to-a-stream-for-a-specific-platform)

```console
$ %[1]s %[2]s stage-cluster-234 namespace/repo:stage-latest --platform linux/amd64
✓ Pulled
✓ Successfully recorded namespace/repo:stage-latest in stream stage-cluster-234
```

Table of contents
