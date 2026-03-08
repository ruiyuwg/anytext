Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Add SBOM and provenance attestations with GitHub Actions

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Software Bill of Material (SBOM) and provenance [attestations](https://docs.docker.com/build/metadata/attestations/) add metadata about the contents of your image, and how it was built.

Attestations are supported with version 4 and later of the `docker/build-push-action`.

## [Default provenance](#default-provenance)

The `docker/build-push-action` GitHub Action automatically adds provenance attestations to your image, with the following conditions:

- If the GitHub repository is public, provenance attestations with `mode=max` are automatically added to the image.
- If the GitHub repository is private, provenance attestations with `mode=min` are automatically added to the image.
- If you're using the [`docker` exporter](https://docs.docker.com/build/exporters/oci-docker/), or you're loading the build results to the runner with `load: true`, no attestations are added to the image. These output formats don't support attestations.

> Warning
>
> If you're using `docker/build-push-action` to build images for code in a public GitHub repository, the provenance attestations attached to your image by default contains the values of build arguments. If you're misusing build arguments to pass secrets to your build, such as user credentials or authentication tokens, those secrets are exposed in the provenance attestation. Refactor your build to pass those secrets using [secret mounts](/reference/cli/docker/buildx/build/#secret) instead. Also remember to rotate any secrets you may have exposed.

## [Max-level provenance](#max-level-provenance)

It's recommended that you build your images with max-level provenance attestations. Private repositories only add min-level provenance by default, but you can manually override the provenance level by setting the `provenance` input on the `docker/build-push-action` GitHub Action to `mode=max`.

Note that adding attestations to an image means you must push the image to a registry directly, as opposed to loading the image to the local image store of the runner. This is because the local image store doesn't support loading images with attestations.

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
        uses: docker/login-action@v3
        with:
          username: ${{ vars.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}
      
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Extract metadata
        id: meta
        uses: docker/metadata-action@v5
        with:
          images: ${{ env.IMAGE_NAME }}

      - name: Build and push image
        uses: docker/build-push-action@v6
        with:
          push: true
          provenance: mode=max
          tags: ${{ steps.meta.outputs.tags }}
```

## [SBOM](#sbom)

SBOM attestations aren't automatically added to the image. To add SBOM attestations, set the `sbom` input of the `docker/build-push-action` to true.

Note that adding attestations to an image means you must push the image to a registry directly, as opposed to loading the image to the local image store of the runner. This is because the local image store doesn't support loading images with attestations.

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
        uses: docker/login-action@v3
        with:
          username: ${{ vars.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Extract metadata
        id: meta
        uses: docker/metadata-action@v5
        with:
          images: ${{ env.IMAGE_NAME }}

      - name: Build and push image
        uses: docker/build-push-action@v6
        with:
          sbom: true
          push: true
          tags: ${{ steps.meta.outputs.tags }}
```

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/build/ci/github-actions/attestations.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fbuild%2fci%2fgithub-actions%2fattestations%2f\&labels=status%2Ftriage)

Table of contents
