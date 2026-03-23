When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Add image annotations with GitHub Actions

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Annotations let you specify arbitrary metadata for OCI image components, such as manifests, indexes, and descriptors.

To add annotations when building images with GitHub Actions, use the [metadata-action](https://github.com/docker/metadata-action#overwrite-labels-and-annotations) to automatically create OCI-compliant annotations. The metadata action creates an `annotations` output that you can reference, both with [build-push-action](https://github.com/docker/build-push-action/) and [bake-action](https://github.com/docker/bake-action/).

build-push-action bake-action

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

      - name: Extract metadata
        id: meta
        uses: docker/metadata-action@v6
        with:
          images: ${{ env.IMAGE_NAME }}

      - name: Build and push
        uses: docker/build-push-action@v7
        with:
          tags: ${{ steps.meta.outputs.tags }}
          annotations: ${{ steps.meta.outputs.annotations }}
          push: true
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

      - name: Extract metadata
        id: meta
        uses: docker/metadata-action@v6
        with:
          images: ${{ env.IMAGE_NAME }}

      - name: Build
        uses: docker/bake-action@v7
        with:
          files: |
            ./docker-bake.hcl
            cwd://${{ steps.meta.outputs.bake-file-tags }}
            cwd://${{ steps.meta.outputs.bake-file-annotations }}
          push: true
```

## [Configure annotation level](#configure-annotation-level)

By default, annotations are placed on image manifests. To configure the [annotation level](https://docs.docker.com/build/metadata/annotations/#specify-annotation-level), set the `DOCKER_METADATA_ANNOTATIONS_LEVELS` environment variable on the `metadata-action` step to a comma-separated list of all the levels that you want to annotate. For example, setting `DOCKER_METADATA_ANNOTATIONS_LEVELS` to `index` results in annotations on the image index instead of the manifests.

The following example creates annotations on both the image index and manifests.

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

      - name: Extract metadata
        id: meta
        uses: docker/metadata-action@v6
        with:
          images: ${{ env.IMAGE_NAME }}
        env:
          DOCKER_METADATA_ANNOTATIONS_LEVELS: manifest,index

      - name: Build and push
        uses: docker/build-push-action@v7
        with:
          tags: ${{ steps.meta.outputs.tags }}
          annotations: ${{ steps.meta.outputs.annotations }}
          push: true
```

> Note
>
> The build must produce the components that you want to annotate. For example, to annotate an image index, the build must produce an index. If the build produces only a manifest and you specify `index` or `index-descriptor`, the build fails.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/build/ci/github-actions/annotations.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fbuild%2fci%2fgithub-actions%2fannotations%2f\&labels=status%2Ftriage)

Table of contents
