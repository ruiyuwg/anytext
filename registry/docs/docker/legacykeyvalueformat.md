Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# LegacyKeyValueFormat

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [Output](#output)

```text
"ENV key=value" should be used instead of legacy "ENV key value" format
```

## [Description](#description)

The correct format for declaring environment variables and build arguments in a Dockerfile is `ENV key=value` and `ARG key=value`, where the variable name (`key`) and value (`value`) are separated by an equals sign (`=`). Historically, Dockerfiles have also supported a space separator between the key and the value (for example, `ARG key value`). This legacy format is deprecated, and you should only use the format with the equals sign.

## [Examples](#examples)

❌ Bad: using a space separator for variable key and value.

```dockerfile
FROM alpine
ARG foo bar
```

✅ Good: use an equals sign to separate key and value.

```dockerfile
FROM alpine
ARG foo=bar
```

❌ Bad: multi-line variable declaration with a space separator.

```dockerfile
ENV DEPS \
    curl \
    git \
    make
```

✅ Good: use an equals sign and wrap the value in quotes.

```dockerfile
ENV DEPS="\
    curl \
    git \
    make"
```

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2freference%2fbuild-checks%2flegacy-key-value-format%2f\&labels=status%2Ftriage)

Table of contents
