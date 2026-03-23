When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# MaintainerDeprecated

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [Output](#output)

```text
MAINTAINER instruction is deprecated in favor of using label
```

## [Description](#description)

The `MAINTAINER` instruction, used historically for specifying the author of the Dockerfile, is deprecated. To set author metadata for an image, use the `org.opencontainers.image.authors` [OCI label](https://github.com/opencontainers/image-spec/blob/main/annotations.md#pre-defined-annotation-keys).

## [Examples](#examples)

❌ Bad: don't use the `MAINTAINER` instruction

```dockerfile
MAINTAINER moby@example.com
```

✅ Good: specify the author using the `org.opencontainers.image.authors` label

```dockerfile
LABEL org.opencontainers.image.authors="moby@example.com"
```

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2freference%2fbuild-checks%2fmaintainer-deprecated%2f\&labels=status%2Ftriage)

Table of contents
