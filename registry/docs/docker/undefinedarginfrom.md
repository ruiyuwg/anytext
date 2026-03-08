Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# UndefinedArgInFrom

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [Output](#output)

```text
FROM argument 'VARIANT' is not declared
```

## [Description](#description)

This rule warns for cases where you're consuming an undefined build argument in `FROM` instructions.

Interpolating build arguments in `FROM` instructions can be a good way to add flexibility to your build, and lets you pass arguments that overriding the base image of a stage. For example, you might use a build argument to specify the image tag:

```dockerfile
ARG ALPINE_VERSION=3.20

FROM alpine:${ALPINE_VERSION}
```

This makes it possible to run the build with a different `alpine` version by specifying a build argument:

```console
$ docker buildx build --build-arg ALPINE_VERSION=edge .
```

This check also tries to detect and warn when a `FROM` instruction reference miss-spelled built-in build arguments, like `BUILDPLATFORM`.

## [Examples](#examples)

❌ Bad: the `VARIANT` build argument is undefined.

```dockerfile
FROM node:22${VARIANT} AS jsbuilder
```

✅ Good: the `VARIANT` build argument is defined.

```dockerfile
ARG VARIANT="-alpine3.20"
FROM node:22${VARIANT} AS jsbuilder
```

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2freference%2fbuild-checks%2fundefined-arg-in-from%2f\&labels=status%2Ftriage)

Table of contents
