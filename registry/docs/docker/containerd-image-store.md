Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# containerd image store

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Docker Desktop uses containerd as its image store by default. The image store is the component responsible for pushing, pulling, and storing images on your filesystem. The containerd image store supports features like multi-platform images, image attestations, and alternative snapshotters.

## [What is `containerd`?](#what-is-containerd)

`containerd` is a container runtime that provides a lightweight, consistent interface for container lifecycle and image management. It is used under the hood by Docker Engine for creating, starting, and stopping containers.

## [What is the `containerd` image store?](#what-is-the-containerd-image-store)

The image store is the component responsible for pushing, pulling, and storing images on the filesystem.

The containerd image store extends the range of image types that the Docker Engine can natively interact with. While this is a low-level architectural change, it's a prerequisite for unlocking a range of new use cases, including:

- [Build multi-platform images](#build-multi-platform-images) and images with attestations
- Support for using containerd snapshotters with unique characteristics, such as [stargz](https://github.com/containerd/stargz-snapshotter) for lazy-pulling images on container startup, or [nydus](https://github.com/containerd/nydus-snapshotter) and [dragonfly](https://github.com/dragonflyoss/image-service) for peer-to-peer image distribution.
- Ability to run [Wasm](https://docs.docker.com/desktop/features/wasm/) containers

## [Classic image store](#classic-image-store)

The classic image store is Docker's legacy storage backend, replaced by the containerd image store. It doesn't support image indices or manifest lists, so you can't load multi-platform images locally or build images with attestations.

Most users have no reason to use the classic image store. It's available for cases where you need to match older behavior or have compatibility requirements.

## [Switch image stores](#switch-image-stores)

The containerd image store is enabled by default in Docker Desktop version 4.34 and later. To switch between image stores:

1. Navigate to **Settings** in Docker Desktop.
2. In the **General** tab, check or clear the **Use containerd for pulling and storing images** option.
3. Select **Apply**.

> Note
>
> Docker Desktop maintains separate image stores for the classic and containerd image stores. When switching between them, images and containers from the inactive store remain on disk but are hidden until you switch back.

## [Build multi-platform images](#build-multi-platform-images)

The containerd image store lets you build multi-platform images and load them to your local image store:

Building multi-platform images with the classic image store is not supported:

```console
$ docker build --platform=linux/amd64,linux/arm64 .
[+] Building 0.0s (0/0)
ERROR: Multi-platform build is not supported for the docker driver.
Switch to a different driver, or turn on the containerd image store, and try again.
Learn more at https://docs.docker.com/go/build-multi-platform/
```

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/desktop/features/containerd.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fdesktop%2ffeatures%2fcontainerd%2f\&labels=status%2Ftriage)

Table of contents
