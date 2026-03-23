When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Available types of Docker Hardened Images

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Docker Hardened Images (DHI) is a comprehensive catalog of security-hardened container images built to meet diverse development and production needs.

You can explore the DHI catalog on [Docker Hub](https://hub.docker.com/search?q=\&image_filter=store%2Cdhi) or use the [DHI CLI](https://docs.docker.com/dhi/how-to/cli/) to browse available images, tags, and metadata from the command line.

## [Framework and application images](#framework-and-application-images)

DHI includes a selection of popular frameworks and application images, each hardened and maintained to ensure security and compliance. These images integrate seamlessly into existing workflows, allowing developers to focus on building applications without compromising on security.

For example, you might find repositories like the following in the DHI catalog:

- `node`: framework for Node.js applications
- `python`: framework for Python applications
- `nginx`: web server image

## [Base image distributions](#base-image-distributions)

Docker Hardened Images are available in different base image options, giving you flexibility to choose the best match for your environment and workload requirements:

- Debian-based images: A good fit if you're already working in glibc-based environments. Debian is widely used and offers strong compatibility across many language ecosystems and enterprise systems.

- Alpine-based images: A smaller and more lightweight option using musl libc. These images tend to be small and are therefore faster to pull and have a reduced footprint.

Each image maintains a minimal and secure runtime layer by removing non-essential components like shells, package managers, and debugging tools. This helps reduce the attack surface while retaining compatibility with common runtime environments. To maintain this lean, secure foundation, DHI standardizes on Debian for glibc-based images, which provides broad compatibility while minimizing complexity and maintenance overhead.

Example tags include:

- `3.9.23-alpine3.21`: Alpine-based image for Python 3.9.23
- `3.9.23-debian12`: Debian-based image for Python 3.9.23

If you're not sure which to choose, start with the base you're already familiar with. Debian tends to offer the broadest compatibility.

## [Development and runtime variants](#development-and-runtime-variants)

To accommodate different stages of the application lifecycle, DHI offers all language framework images and select application images in two variants:

- Development (dev) images: Equipped with necessary development tools and libraries, these images facilitate the building and testing of applications in a secure environment. They include a shell, package manager, a root user, and other tools needed for development.

- Runtime images: Stripped of development tools, these images contain only the essential components needed to run applications, ensuring a minimal attack surface in production.

This separation supports multi-stage builds, enabling developers to compile code in a secure build environment and deploy it using a lean runtime image.

For example, you might find tags like the following in a DHI repository:

- `3.9.23-debian12`: runtime image for Python 3.9.23
- `3.9.23-debian12-dev`: development image for Python 3.9.23

## [FIPs and STIG variants](#fips-and-stig-variants) DHI Select & Enterprise

Subscription: Docker Hardened Images Select or Enterprise

Some Docker Hardened Images include a `-fips` variant. These variants use cryptographic modules that have been validated under [FIPS 140](https://docs.docker.com/dhi/core-concepts/fips/), a U.S. government standard for secure cryptographic operations.

FIPS variants are designed to help organizations meet regulatory and compliance requirements related to cryptographic use in sensitive or regulated environments.

You can recognize FIPS variants by their tag that includes `-fips`.

For example:

- `3.13-fips`: FIPS variant of the Python 3.13 image
- `3.9.23-debian12-fips`: FIPS variant of the Debian-based Python 3.9.23 image

FIPS variants can be used in the same way as any other Docker Hardened Image and are ideal for teams operating in regulated industries or under compliance frameworks that require cryptographic validation.

In addition to FIPS variants, some Docker Hardened Images also include STIG-ready variants. These images are scanned against custom STIG-based profiles and come with signed STIG scan attestations to support audits and compliance reporting. To identify STIG-ready variants, look for the **STIG** in the **Compliance** column of the image tags list in the Docker Hub catalog.

## [Compatibility variants](#compatibility-variants)

Some Docker Hardened Images include a compatibility variant. These variants provide additional tools and configurations for specific use cases without bloating the minimal base images.

Compatibility variants are created to support:

- Helm chart compatibility: Applications deployed via Helm charts and Kubernetes that require specific runtime configurations or utilities for seamless integration with popular Helm charts.

- Special application use-cases: Applications that need optional tools not included in the minimal image.

By offering these as separate image flavors, DHI ensures that the minimal images remain lean and secure, while providing the tools you need in dedicated variants. This approach maintains a minimal attack surface for standard deployments while supporting specialized requirements when needed.

You can recognize compatibility variants by their tag that includes `-compat`.

Use compatibility variants when your deployment requires additional tools beyond the minimal runtime, such as when using Helm charts or applications with specific tooling requirements.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/dhi/explore/available.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fdhi%2fexplore%2favailable%2f\&labels=status%2Ftriage)

Table of contents
