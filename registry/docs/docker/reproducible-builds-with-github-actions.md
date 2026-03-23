When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Reproducible builds with GitHub Actions

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

`SOURCE_DATE_EPOCH` is a [standardized environment variable](https://reproducible-builds.org/docs/source-date-epoch/) for instructing build tools to produce a reproducible output. Setting the environment variable for a build makes the timestamps in the image index, config, and file metadata reflect the specified Unix time.

To set the environment variable in GitHub Actions, use the built-in `env` property on the build step.

## [Unix epoch timestamps](#unix-epoch-timestamps)

The following example sets the `SOURCE_DATE_EPOCH` variable to 0, Unix epoch.

`docker/build-push-action` `docker/bake-action`

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

      - name: Build
        uses: docker/build-push-action@v7
        with:
          tags: user/app:latest
        env:
          SOURCE_DATE_EPOCH: 0
```

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

      - name: Build
        uses: docker/bake-action@v7
        env:
          SOURCE_DATE_EPOCH: 0
```

## [Git commit timestamps](#git-commit-timestamps)

The following example sets `SOURCE_DATE_EPOCH` to the Git commit timestamp.

`docker/build-push-action` `docker/bake-action`

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

      - name: Get Git commit timestamps
        run: echo "TIMESTAMP=$(git log -1 --pretty=%ct)" >> $GITHUB_ENV

      - name: Build
        uses: docker/build-push-action@v7
        with:
          tags: user/app:latest
        env:
          SOURCE_DATE_EPOCH: ${{ env.TIMESTAMP }}
```

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

      - name: Get Git commit timestamps
        run: echo "TIMESTAMP=$(git log -1 --pretty=%ct)" >> $GITHUB_ENV

      - name: Build
        uses: docker/bake-action@v7
        env:
          SOURCE_DATE_EPOCH: ${{ env.TIMESTAMP }}
```

## [Additional information](#additional-information)

For more information about the `SOURCE_DATE_EPOCH` support in BuildKit, see [BuildKit documentation](https://github.com/moby/buildkit/blob/master/docs/build-repro.md#source_date_epoch).

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/build/ci/github-actions/reproducible-builds.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fbuild%2fci%2fgithub-actions%2freproducible-builds%2f\&labels=status%2Ftriage)

Table of contents
