When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Migrate from Wolfi

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

This guide helps you migrate from Wolfi-based images to Docker Hardened Images (DHI). Generally, the migration process is straightforward since Wolfi is Alpine-like and DHI provides an Alpine-based hardened image.

Like other hardened images, DHI provides comprehensive [attestations](/dhi/core-concepts/attestations/) including SBOMs and provenance, allowing you to [verify](https://docs.docker.com/dhi/how-to/verify/) image signatures and [scan](https://docs.docker.com/dhi/how-to/scan/) for vulnerabilities to ensure the security and integrity of your images.

## [Migration steps](#migration-steps)

The following example demonstrates how to migrate a Dockerfile from a Wolfi-based image to an Alpine-based Docker Hardened Image.

### [Step 1: Update the base image in your Dockerfile](#step-1-update-the-base-image-in-your-dockerfile)

Update the base image in your application's Dockerfile to a hardened image. This is typically going to be an image tagged as `dev` or `sdk` because it has the tools needed to install packages and dependencies.

The following example diff snippet from a Dockerfile shows the old base image replaced by the new hardened image.

> Note
>
> You must authenticate to `dhi.io` before you can pull Docker Hardened Images. Use your Docker ID credentials (the same username and password you use for Docker Hub). If you don't have a Docker account, [create one](https://docs.docker.com/accounts/create-account/) for free.
>
> Run `docker login dhi.io` to authenticate.

```diff
- ## Original base image
- FROM cgr.dev/chainguard/go:latest-dev

+ ## Updated to use hardened base image
+ FROM dhi.io/golang:1.25-alpine3.22-dev
```

Note that DHI does not have a `latest` tag in order to promote best practices around image versioning. Ensure that you specify the appropriate version tag for your image. To find the right tag, explore the available tags in the [DHI Catalog](https://hub.docker.com/hardened-images/catalog/).

### [Step 2: Update the runtime image in your Dockerfile](#step-2-update-the-runtime-image-in-your-dockerfile)

> Note
>
> Multi-stage builds are recommended to keep your final image minimal and secure. Single-stage builds are supported, but they include the full `dev` image and therefore result in a larger image with a broader attack surface.

To ensure that your final image is as minimal as possible, you should use a [multi-stage build](https://docs.docker.com/build/building/multi-stage/). All stages in your Dockerfile should use a hardened image. While intermediary stages will typically use images tagged as `dev` or `sdk`, your final runtime stage should use a runtime image.

Utilize the build stage to compile your application and copy the resulting artifacts to the final runtime stage. This ensures that your final image is minimal and secure.

The following example shows a multi-stage Dockerfile with a build stage and runtime stage:

```dockerfile
# Build stage
FROM dhi.io/golang:1.25-alpine3.22-dev AS builder
WORKDIR /app
COPY . .
RUN go build -o myapp

# Runtime stage
FROM dhi.io/golang:1.25-alpine3.22
WORKDIR /app
COPY --from=builder /app/myapp .
ENTRYPOINT ["/app/myapp"]
```

After updating your Dockerfile, build and test your application. If you encounter issues, see the [Troubleshoot](https://docs.docker.com/dhi/troubleshoot/) guide for common problems and solutions.

## [Language-specific examples](#language-specific-examples)

See the examples section for language-specific migration examples:

- [Go](https://docs.docker.com/dhi/migration/examples/go/)
- [Python](https://docs.docker.com/dhi/migration/examples/python/)
- [Node.js](https://docs.docker.com/dhi/migration/examples/node/)

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/dhi/migration/migrate-from-wolfi.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fdhi%2fmigration%2fmigrate-from-wolfi%2f\&labels=status%2Ftriage)

Table of contents
