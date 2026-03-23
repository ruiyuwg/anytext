When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker buildx history logs

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Print the logs of a build record

Usage

`docker buildx history logs [OPTIONS] [REF]`

## [Description](#description)

Print the logs for a completed build. The output appears in the same format as `--progress=plain`, showing the full logs for each step.

By default, this shows logs for the most recent build on the current builder.

You can also specify an earlier build using an offset. For example:

- `^1` shows logs for the build before the most recent
- `^2` shows logs for the build two steps back

## [Options](#options)

Option

Default

Description

[`--progress`](#progress)

`plain`

Set type of progress output (plain, rawjson, tty)

## [Examples](#examples)

### [Print logs for the most recent build](#print-logs-for-the-most-recent-build)

```console
$ docker buildx history logs
#1 [internal] load build definition from Dockerfile
#1 transferring dockerfile: 31B done
#1 DONE 0.0s
#2 [internal] load .dockerignore
#2 transferring context: 2B done
#2 DONE 0.0s
...
```

By default, this shows logs for the most recent build on the current builder.

### [Print logs for a specific build](#print-logs-for-a-specific-build)

To print logs for a specific build, use a build ID or offset:

```console
# Using a build ID
docker buildx history logs qu2gsuo8ejqrwdfii23xkkckt

# Or using a relative offset
docker buildx history logs ^1
```

### [Set type of progress output (--progress)](#progress)

```console
$ docker buildx history logs ^1 --progress rawjson
{"id":"buildx_step_1","status":"START","timestamp":"2024-05-01T12:34:56.789Z","detail":"[internal] load build definition from Dockerfile"}
{"id":"buildx_step_1","status":"COMPLETE","timestamp":"2024-05-01T12:34:57.001Z","duration":212000000}
...
```

Table of contents
