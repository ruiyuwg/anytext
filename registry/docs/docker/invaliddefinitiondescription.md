When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# InvalidDefinitionDescription

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

> Note
>
> This check is experimental and is not enabled by default. To enable it, see [Experimental checks](https://docs.docker.com/go/build-checks-experimental/).

## [Output](#output)

```text
Comment for build stage or argument should follow the format: `# <arg/stage name> <description>`. If this is not intended to be a description comment, add an empty line or comment between the instruction and the comment.
```

## [Description](#description)

The [`--call=outline`](https://docs.docker.com/reference/cli/docker/buildx/build/#call-outline) and [`--call=targets`](https://docs.docker.com/reference/cli/docker/buildx/build/#call-outline) flags for the `docker build` command print descriptions for build targets and arguments. The descriptions are generated from [Dockerfile comments](https://docs.docker.com/reference/cli/docker/buildx/build/#descriptions) that immediately precede the `FROM` or `ARG` instruction and that begin with the name of the build stage or argument. For example:

```dockerfile
# build-cli builds the CLI binary
FROM alpine AS build-cli
# VERSION controls the version of the program
ARG VERSION=1
```

In cases where preceding comments are not meant to be descriptions, add an empty line or comment between the instruction and the preceding comment.

## [Examples](#examples)

❌ Bad: A non-descriptive comment on the line preceding the `FROM` command.

```dockerfile
# a non-descriptive comment
FROM scratch AS base

# another non-descriptive comment
ARG VERSION=1
```

✅ Good: An empty line separating non-descriptive comments.

```dockerfile
# a non-descriptive comment

FROM scratch AS base

# another non-descriptive comment

ARG VERSION=1
```

✅ Good: Comments describing `ARG` keys and stages immediately proceeding the command.

```dockerfile
# base is a stage for compiling source
FROM scratch AS base
# VERSION This is the version number.
ARG VERSION=1
```

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2freference%2fbuild-checks%2finvalid-definition-description%2f\&labels=status%2Ftriage)

Table of contents
