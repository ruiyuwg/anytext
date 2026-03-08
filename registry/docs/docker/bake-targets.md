Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Bake targets

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

A target in a Bake file represents a build invocation. It holds all the information you would normally pass to a `docker build` command using flags.

docker-bake.hcl

```hcl
target "webapp" {
  dockerfile = "webapp.Dockerfile"
  tags = ["docker.io/username/webapp:latest"]
  context = "https://github.com/username/webapp"
}
```

To build a target with Bake, pass name of the target to the `bake` command.

```console
$ docker buildx bake webapp
```

You can build multiple targets at once by passing multiple target names to the `bake` command.

```console
$ docker buildx bake webapp api tests
```

## [Default target](#default-target)

If you don't specify a target when running `docker buildx bake`, Bake will build the target named `default`.

docker-bake.hcl

```hcl
target "default" {
  dockerfile = "webapp.Dockerfile"
  tags = ["docker.io/username/webapp:latest"]
  context = "https://github.com/username/webapp"
}
```

To build this target, run `docker buildx bake` without any arguments:

```console
$ docker buildx bake
```

## [Target properties](#target-properties)

The properties you can set for a target closely resemble the CLI flags for `docker build`, with a few additional properties that are specific to Bake.

For all the properties you can set for a target, see the [Bake reference](/build/bake/reference#target).

## [Grouping targets](#grouping-targets)

You can group targets together using the `group` block. This is useful when you want to build multiple targets at once.

docker-bake.hcl

```hcl
group "all" {
  targets = ["webapp", "api", "tests"]
}

target "webapp" {
  dockerfile = "webapp.Dockerfile"
  tags = ["docker.io/username/webapp:latest"]
  context = "https://github.com/username/webapp"
}

target "api" {
  dockerfile = "api.Dockerfile"
  tags = ["docker.io/username/api:latest"]
  context = "https://github.com/username/api"
}

target "tests" {
  dockerfile = "tests.Dockerfile"
  contexts = {
    webapp = "target:webapp"
    api = "target:api"
  }
  output = ["type=local,dest=build/tests"]
  context = "."
}
```

To build all the targets in a group, pass the name of the group to the `bake` command.

```console
$ docker buildx bake all
```

## [Pattern matching for targets and groups](#pattern-matching-for-targets-and-groups)

Bake supports shell-style wildcard patterns when specifying target or grouped targets. This makes it easier to build multiple targets without listing each one explicitly.

Supported patterns:

- `*` matches any sequence of characters
- `?` matches any single character
- `[abc]` matches any character in brackets

> Note
>
> Always wrap wildcard patterns in quotes. Without quotes, your shell will expand the wildcard to match files in the current directory, which usually causes errors.

Examples:

```console
# Match all targets starting with 'foo-'
$ docker buildx bake "foo-*"

# Match all targets
$ docker buildx bake "*"

# Matches: foo-baz, foo-caz, foo-daz, etc.
$ docker buildx bake "foo-?az"

# Matches: foo-bar, boo-bar
$ docker buildx bake "[fb]oo-bar"

# Matches: mtx-a-b-d, mtx-a-b-e, mtx-a-b-f
$ docker buildx bake "mtx-a-b-*"
```

You can also combine multiple patterns:

```console
$ docker buildx bake "foo*" "tests"
```

## [Additional resources](#additional-resources)

Refer to the following pages to learn more about Bake's features:

- Learn how to use [variables](https://docs.docker.com/build/bake/variables/) in Bake to make your build configuration more flexible.
- Learn how you can use matrices to build multiple images with different configurations in [Matrices](https://docs.docker.com/build/bake/matrices/).
- Head to the [Bake file reference](/build/bake/reference/) to learn about all the properties you can set in a Bake file, and its syntax.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/build/bake/targets.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fbuild%2fbake%2ftargets%2f\&labels=status%2Ftriage)

Table of contents
