Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Migration checklist

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Use this checklist to ensure you address key considerations when migrating to Docker Hardened Images.

## [Migration considerations](#migration-considerations)

Item

Action required

Base image

Update your Dockerfile `FROM` statements to reference a Docker Hardened Image instead of your current base image.

Package management

Install packages only in `dev`-tagged images during build stages. Use `apk` for Alpine-based images or `apt` for Debian-based images. Copy the necessary artifacts to your runtime stage, as runtime images don't include package managers.

Non-root user

Verify that all files and directories your application needs are readable and writable by the nonroot user (UID 65532), as runtime images run as nonroot by default.

Multi-stage build

Use `dev` or `sdk`-tagged images for build stages where you need build tools and package managers. Use non-dev images for your final runtime stage.

TLS certificates

Remove any steps that install ca-certificates, as DHIs include ca-certificates by default.

Ports

Configure your application to listen on port 1025 or higher inside the container, as the nonroot user can't bind to privileged ports (below 1024) in Kubernetes or Docker Engine versions older than 20.10.

Entry point

Check the entry point of your chosen DHI using `docker inspect` or the image documentation. Update your Dockerfile's `ENTRYPOINT` or `CMD` instructions if your application relies on a different entry point.

No shell

Move any shell commands (`RUN`, `SHELL`) to build stages using `dev`-tagged images. Runtime images don't include a shell, so copy all necessary artifacts from the build stage.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/dhi/migration/checklist.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fdhi%2fmigration%2fchecklist%2f\&labels=status%2Ftriage)

Table of contents
