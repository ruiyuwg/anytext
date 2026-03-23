When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# RedundantTargetPlatform

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [Output](#output)

```text
Setting platform to predefined $TARGETPLATFORM in FROM is redundant as this is the default behavior
```

## [Description](#description)

A custom platform can be used for a base image. The default platform is the same platform as the target output so setting the platform to `$TARGETPLATFORM` is redundant and unnecessary.

## [Examples](#examples)

❌ Bad: this usage of `--platform` is redundant since `$TARGETPLATFORM` is the default.

```dockerfile
FROM --platform=$TARGETPLATFORM alpine AS builder
RUN apk add --no-cache git
```

✅ Good: omit the `--platform` argument.

```dockerfile
FROM alpine AS builder
RUN apk add --no-cache git
```

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2freference%2fbuild-checks%2fredundant-target-platform%2f\&labels=status%2Ftriage)

Table of contents
