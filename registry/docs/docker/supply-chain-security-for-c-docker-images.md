When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Guides](https://docs.docker.com/guides/)

- [Get started](/get-started/)
- [Manuals](/manuals/)
- [Reference](/reference/)

[C++ language-specific guide](https://docs.docker.com/guides/cpp/)

This guide explains how to containerize C++ applications using Docker.

![](https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg "C++") C++

20 minutes

[1](https://docs.docker.com/guides/cpp/multistage/)

[Containerize your app using a multi-stage build](https://docs.docker.com/guides/cpp/multistage/)

[2](https://docs.docker.com/guides/cpp/containerize/)

[Build and run a C++ application using Docker Compose](https://docs.docker.com/guides/cpp/containerize/)

[3](https://docs.docker.com/guides/cpp/develop/)

[Develop your app](https://docs.docker.com/guides/cpp/develop/)

[4](https://docs.docker.com/guides/cpp/configure-ci-cd/)

[Configure CI/CD](https://docs.docker.com/guides/cpp/configure-ci-cd/)

[5](https://docs.docker.com/guides/cpp/deploy/)

[Test your deployment](https://docs.docker.com/guides/cpp/deploy/)

[6](https://docs.docker.com/guides/cpp/security/)

[Supply-chain security](https://docs.docker.com/guides/cpp/security/)

[« Back to all guides](/guides/)

# Supply-chain security for C++ Docker images

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [Prerequisites](#prerequisites)

- You have a [Git client](https://git-scm.com/downloads). The examples in this section use a command-line based Git client, but you can use any client.
- You have a Docker Desktop installed, with containerd enabled for pulling and storing images (it's a checkbox in **Settings** > **General**). Otherwise, if you use Docker Engine:
  - You have the [Docker SBOM CLI plugin](https://github.com/docker/sbom-cli-plugin) installed. To install it on Docker Engine, use the following command:

    ```bash
    $ curl -sSfL https://raw.githubusercontent.com/docker/sbom-cli-plugin/main/install.sh | sh -s --
    ```

  - You have the [Docker Scout CLI plugin](https://docs.docker.com/scout/install/) installed. To install it on Docker Engine, use the following command:

    ```bash
    $ curl -sSfL https://raw.githubusercontent.com/docker/scout-cli/main/install.sh | sh -s --
    ```

  - You have [containerd enabled](https://docs.docker.com/engine/storage/containerd/) for Docker Engine.

## [Overview](#overview)

This section walks you through extracting Software Bill of Materials (SBOMs) from a C++ Docker image using the Docker SBOM CLI plugin. SBOMs provide a detailed list of all the components in a software package, including their versions and licenses. You can use SBOMs to track the provenance of your software and ensure that it complies with your organization's security and licensing policies.

## [Generate an SBOM](#generate-an-sbom)

Here we will use the Docker image that we built in the [Create a multi-stage build for your C++ application](/guides/language/cpp/multistage/) guide. If you haven't already built the image, follow the steps in that guide to build the image. The image is named `hello`. To generate an SBOM for the `hello` image, run the following command:

```bash
$ docker sbom hello
```

The command will say "No packages discovered". This is because the final image is a scratch image and doesn't have any packages. Let's try again with Docker Scout:

```bash
$ docker scout sbom --format=list hello
```

This command will tell you the same thing.

## [Generate an SBOM attestation](#generate-an-sbom-attestation)

The SBOM can be generated during the build process and "attached" to the image. This is called an SBOM attestation. To generate an SBOM attestation for the `hello` image, first let's change the Dockerfile:

```Dockerfile
ARG BUILDKIT_SBOM_SCAN_STAGE=true

FROM ubuntu:latest AS build

RUN apt-get update && apt-get install -y build-essential

WORKDIR /app

COPY hello.cpp .

RUN g++ -o hello hello.cpp -static

# --------------------
FROM scratch

COPY --from=build /app/hello /hello

CMD ["/hello"]
```

The first line `ARG BUILDKIT_SBOM_SCAN_STAGE=true` enables SBOM scanning in the build stage. Now, build the image with the following command:

```bash
$ docker buildx build --sbom=true -t hello:sbom .
```

This command will build the image and generate an SBOM attestation. You can verify that the SBOM is attached to the image by running the following command:

```bash
$ docker scout sbom --format=list hello:sbom
```

Note that the normal `docker sbom` command will not load the SBOM attestation.

## [Summary](#summary)

In this section, you learned how to generate SBOM attestation for a C++ Docker image during the build process. The normal image scanners will not be able to generate SBOMs from scratch images.

[Edit this page](https://github.com/docker/docs/edit/main/content/guides/cpp/security.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fguides%2fcpp%2fsecurity%2f\&labels=status%2Ftriage)

Table of contents
