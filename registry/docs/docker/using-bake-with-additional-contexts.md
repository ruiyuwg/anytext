When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Using Bake with additional contexts

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

In addition to the main `context` key that defines the build context, each target can also define additional named contexts with a map defined with key `contexts`. These values map to the `--build-context` flag in the [build command](/reference/cli/docker/buildx/build/#build-context).

Inside the Dockerfile these contexts can be used with the `FROM` instruction or `--from` flag.

Supported context values are:

- Local filesystem directories
- Container images
- Git URLs
- HTTP URLs
- Name of another target in the Bake file

## [Pinning alpine image](#pinning-alpine-image)

Dockerfile

```dockerfile
# syntax=docker/dockerfile:1
FROM alpine
RUN echo "Hello world"
```

docker-bake.hcl

```hcl
target "app" {
  contexts = {
    alpine = "docker-image://alpine:3.13"
  }
}
```

## [Using a secondary source directory](#using-a-secondary-source-directory)

Dockerfile

```dockerfile
FROM golang
COPY --from=src . .
```

docker-bake.hcl

```hcl
# Running `docker buildx bake app` will result in `src` not pointing
# to some previous build stage but to the client filesystem, not part of the context.
target "app" {
  contexts = {
    src = "../path/to/source"
  }
}
```

## [Using a target as a build context](#using-a-target-as-a-build-context)

To use a result of one target as a build context of another, specify the target name with `target:` prefix.

baseapp.Dockerfile

```dockerfile
FROM scratch
```

Dockerfile

```dockerfile
# syntax=docker/dockerfile:1
FROM baseapp
RUN echo "Hello world"
```

docker-bake.hcl

```hcl
target "base" {
  dockerfile = "baseapp.Dockerfile"
}

target "app" {
  contexts = {
    baseapp = "target:base"
  }
}
```

In most cases you should just use a single multi-stage Dockerfile with multiple targets for similar behavior. This case is only recommended when you have multiple Dockerfiles that can't be easily merged into one.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/build/bake/contexts.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fbuild%2fbake%2fcontexts%2f\&labels=status%2Ftriage)

Table of contents
