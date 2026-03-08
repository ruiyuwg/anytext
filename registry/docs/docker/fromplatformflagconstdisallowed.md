Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# FromPlatformFlagConstDisallowed

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [Output](#output)

```text
FROM --platform flag should not use constant value "linux/amd64"
```

## [Description](#description)

Specifying `--platform` in the Dockerfile `FROM` instruction forces the image to build on only one target platform. This prevents building a multi-platform image from this Dockerfile and you must build on the same platform as specified in `--platform`.

The recommended approach is to:

- Omit `FROM --platform` in the Dockerfile and use the `--platform` argument on the command line.
- Use `$BUILDPLATFORM` or some other combination of variables for the `--platform` argument.
- Stage name should include the platform, OS, or architecture name to indicate that it only contains platform-specific instructions.

## [Examples](#examples)

❌ Bad: using a constant argument for `--platform`

```dockerfile
FROM --platform=linux/amd64 alpine AS base
RUN apk add --no-cache git
```

✅ Good: using the default platform

```dockerfile
FROM alpine AS base
RUN apk add --no-cache git
```

✅ Good: using a meta variable

```dockerfile
FROM --platform=${BUILDPLATFORM} alpine AS base
RUN apk add --no-cache git
```

✅ Good: used in a multi-stage build with a target architecture

```dockerfile
FROM --platform=linux/amd64 alpine AS build_amd64
...

FROM --platform=linux/arm64 alpine AS build_arm64
...

FROM build_${TARGETARCH} AS build
...
```

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2freference%2fbuild-checks%2ffrom-platform-flag-const-disallowed%2f\&labels=status%2Ftriage)

Table of contents
