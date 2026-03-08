Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# History and development of Docker Compose

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

This page provides:

- A brief history of the development of the Docker Compose CLI
- A clear explanation of the major versions and file formats that make up Compose v1, v2, and v5
- The main differences between Compose v1, v2, and v5

## [Introduction](#introduction)

![Image showing the main differences between Compose v1, Compose v2, and Compose v5](https://docs.docker.com/compose/images/v1-versus-v2-versus-v5.png)

The diagram above highlights the key differences between Docker Compose v1, v2, and v5. Today, the supported Docker Compose CLI versions are Compose v2 and Compose v5, both of which are defined by the [Compose Specification](https://docs.docker.com/reference/compose-file/).

The diagram provides a high-level comparison of file formats, command-line syntax, and supported top-level elements. This is covered in more detail in the following sections.

### [Docker Compose CLI versioning](#docker-compose-cli-versioning)

Compose v1 was first released in 2014. It was written in Python and invoked with `docker-compose`. Typically, Compose v1 projects include a top-level `version` element in the `compose.yaml` file, with values ranging from `2.0` to `3.8`, which refer to the specific [file formats](#compose-file-format-versioning).

Compose v2, announced in 2020, is written in Go and is invoked with `docker compose`. Unlike v1, Compose v2 ignores the `version` top-level element in the `compose.yaml` file and relies entirely on the Compose Specification to interpret the file.

Compose v5, released in 2025, is functionally identical to Compose v2. Its primary distinction is the introduction of an official [Go SDK](https://docs.docker.com/compose/compose-sdk/). This SDK provides a comprehensive API that lets you integrate Compose functionality directly into your applications, allowing you to load, validate, and manage multi-container environments without relying on the Compose CLI. To avoid confusion with the legacy Compose file formats labeled “v2” and “v3,” the versioning was advanced directly to v5.

### [Compose file format versioning](#compose-file-format-versioning)

The Docker Compose CLIs are defined by specific file formats.

Three major versions of the Compose file format for Compose v1 were released:

- Compose file format 1 with Compose 1.0.0 in 2014
- Compose file format 2.x with Compose 1.6.0 in 2016
- Compose file format 3.x with Compose 1.10.0 in 2017

Compose file format 1 is substantially different to all the following formats as it lacks a top-level `services` key. Its usage is historical and files written in this format don't run with Compose v2.

Compose file format 2.x and 3.x are very similar to each other, but the latter introduced many new options targeted at Swarm deployments.

To address confusion around Compose CLI versioning, Compose file format versioning, and feature parity depending on whether Swarm mode was in use, file format 2.x and 3.x were merged into the [Compose Specification](https://docs.docker.com/reference/compose-file/).

Compose v2 and v5 uses the Compose Specification for project definition. Unlike the prior file formats, the Compose Specification is rolling and makes the `version` top-level element optional. Compose v2 and v5 also makes use of optional specifications - [Deploy](https://docs.docker.com/reference/compose-file/deploy/), [Develop](https://docs.docker.com/reference/compose-file/develop/), and [Build](https://docs.docker.com/reference/compose-file/build/).

To make migration easier, Compose v2 and v5 has backwards compatibility for certain elements that have been deprecated or changed between Compose file format 2.x/3.x and the Compose Specification.

## [What's next?](#whats-next)

- [How Compose works](https://docs.docker.com/compose/intro/compose-application-model/)
- [Compose Specification reference](https://docs.docker.com/reference/compose-file/)

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/compose/intro/history.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fcompose%2fintro%2fhistory%2f\&labels=status%2Ftriage)

Table of contents
