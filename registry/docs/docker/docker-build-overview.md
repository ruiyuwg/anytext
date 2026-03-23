When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Docker Build Overview

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Docker Build implements a client-server architecture, where:

- Client: Buildx is the client and the user interface for running and managing builds.
- Server: BuildKit is the server, or builder, that handles the build execution.

When you invoke a build, the Buildx client sends a build request to the BuildKit backend. BuildKit resolves the build instructions and executes the build steps. The build output is either sent back to the client or uploaded to a registry, such as Docker Hub.

Buildx and BuildKit are both installed with Docker Desktop and Docker Engine out-of-the-box. When you invoke the `docker build` command, you're using Buildx to run a build using the default BuildKit bundled with Docker.

## [Buildx](#buildx)

Buildx is the CLI tool that you use to run builds. The `docker build` command is a wrapper around Buildx. When you invoke `docker build`, Buildx interprets the build options and sends a build request to the BuildKit backend.

The Buildx client can do more than just run builds. You can also use Buildx to create and manage BuildKit backends, referred to as builders. It also supports features for managing images in registries, and for running multiple builds concurrently.

Docker Buildx is installed by default with Docker Desktop. You can also build the CLI plugin from source, or grab a binary from the GitHub repository and install it manually. See [Buildx README](https://github.com/docker/buildx#manual-download) on GitHub for more information.

> Note
>
> While `docker build` invokes Buildx under the hood, there are subtle differences between this command and the canonical `docker buildx build`. For details, see [Difference between `docker build` and `docker buildx build`](https://docs.docker.com/build/builders/#difference-between-docker-build-and-docker-buildx-build).

## [BuildKit](#buildkit)

BuildKit is the daemon process that executes the build workloads.

A build execution starts with the invocation of a `docker build` command. Buildx interprets your build command and sends a build request to the BuildKit backend. The build request includes:

- The Dockerfile
- Build arguments
- Export options
- Caching options

BuildKit resolves the build instructions and executes the build steps. While BuildKit is executing the build, Buildx monitors the build status and prints the progress to the terminal.

If the build requires resources from the client, such as local files or build secrets, BuildKit requests the resources that it needs from Buildx.

This is one way in which BuildKit is more efficient compared to the legacy builder used in earlier versions of Docker. BuildKit only requests the resources that the build needs when they're needed. The legacy builder, in comparison, always takes a copy of the local filesystem.

Examples of resources that BuildKit can request from Buildx include:

- Local filesystem build contexts
- Build secrets
- SSH sockets
- Registry authentication tokens

For more information about BuildKit, see [BuildKit](https://docs.docker.com/build/buildkit/).

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/build/concepts/overview.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fbuild%2fconcepts%2foverview%2f\&labels=status%2Ftriage)

Table of contents
