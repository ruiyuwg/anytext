Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker buildx history trace

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Show the OpenTelemetry trace of a build record

Usage

`docker buildx history trace [OPTIONS] [REF]`

## [Description](#description)

View the OpenTelemetry trace for a completed build. This command loads the trace into a Jaeger UI viewer and opens it in your browser.

This helps analyze build performance, step timing, and internal execution flows.

## [Options](#options)

Option

Default

Description

[`--addr`](#addr)

`127.0.0.1:0`

Address to bind the UI server

[`--compare`](#compare)

Compare with another build record

## [Examples](#examples)

### [Open the OpenTelemetry trace for the most recent build](#open-the-opentelemetry-trace-for-the-most-recent-build)

This command starts a temporary Jaeger UI server and opens your default browser to view the trace.

```console
docker buildx history trace
```

### [Open the trace for a specific build](#open-the-trace-for-a-specific-build)

```console
# Using a build ID
docker buildx history trace qu2gsuo8ejqrwdfii23xkkckt

# Or using a relative offset
docker buildx history trace ^1
```

### [Run the Jaeger UI on a specific port (--addr)](#addr)

```console
# Using a build ID
docker buildx history trace qu2gsuo8ejqrwdfii23xkkckt --addr 127.0.0.1:16686

# Or using a relative offset
docker buildx history trace ^1 --addr 127.0.0.1:16686
```

### [Compare two build traces (--compare)](#compare)

Compare two specific builds by name:

```console
# Using build IDs
docker buildx history trace --compare=qu2gsuo8ejqrwdfii23xkkckt qsiifiuf1ad9pa9qvppc0z1l3

# Or using a single relative offset
docker buildx history trace --compare=^1
```

When you use a single reference with `--compare`, it compares that build against the most recent one.

Table of contents
