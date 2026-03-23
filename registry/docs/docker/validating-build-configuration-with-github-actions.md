When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Validating build configuration with GitHub Actions

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

[Build checks](https://docs.docker.com/build/checks/) let you validate your `docker build` configuration without actually running the build.

## [Run checks with `docker/build-push-action`](#run-checks-with-dockerbuild-push-action)

To run build checks in a GitHub Actions workflow with the `build-push-action`, set the `call` input parameter to `check`. With this set, the workflow fails if any check warnings are detected for your build's configuration.

```yaml
name: ci

on:
  push:

jobs:
  docker:
    runs-on: ubuntu-latest
    steps:
      - name: Login to Docker Hub
        uses: docker/login-action@v4
        with:
          username: ${{ secrets.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}
      
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v4

      - name: Validate build configuration
        uses: docker/build-push-action@v7
        with:
          call: check

      - name: Build and push
        uses: docker/build-push-action@v7
        with:
          push: true
          tags: user/app:latest
```

## [Run checks with `docker/bake-action`](#run-checks-with-dockerbake-action)

If you're using Bake and `docker/bake-action` to run your builds, you don't need to specify any special inputs in your GitHub Actions workflow configuration. Instead, define a Bake target that calls the `check` method, and invoke that target in your CI.

```hcl
target "build" {
  dockerfile = "Dockerfile"
  args = {
    FOO = "bar"
  }
}
target "validate-build" {
  inherits = ["build"]
  call = "check"
}
```

```yaml
name: ci

on:
  push:

env:
  IMAGE_NAME: user/app

jobs:
  docker:
    runs-on: ubuntu-latest
    steps:
      - name: Login to Docker Hub
        uses: docker/login-action@v4
        with:
          username: ${{ vars.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v4

      - name: Validate build configuration
        uses: docker/bake-action@v7
        with:
          targets: validate-build

      - name: Build
        uses: docker/bake-action@v7
        with:
          targets: build
          push: true
```

### [Using the `call` input directly](#using-the-call-input-directly)

You can also set the build method with the `call` input which is equivalent to using the `--call` flag with `docker buildx bake`

For example, to run a check without defining `call` in your Bake file:

```yaml
name: ci

on:
  push:

jobs:
  docker:
    runs-on: ubuntu-latest
    steps:
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v4

      - name: Validate build configuration
        uses: docker/bake-action@v7
        with:
          targets: build
          call: check
```

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/build/ci/github-actions/checks.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fbuild%2fci%2fgithub-actions%2fchecks%2f\&labels=status%2Ftriage)

Table of contents
