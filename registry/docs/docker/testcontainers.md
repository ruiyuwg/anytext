Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Testcontainers

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Testcontainers is a set of open source libraries that provides easy and lightweight APIs for bootstrapping local development and test dependencies with real services wrapped in Docker containers. Using Testcontainers, you can write tests that depend on the same services you use in production without mocks or in-memory services.

\[

### What is Testcontainers?

Learn about what Testcontainers does and its key benefits

]\(https://testcontainers.com/getting-started/#what-is-testcontainers)

\[

### The Testcontainers workflow

Understand the Testcontainers workflow

]\(https://testcontainers.com/getting-started/#testcontainers-workflow)

## [Quickstart](#quickstart)

### [Supported languages](#supported-languages)

Testcontainers provide support for the most popular languages, and Docker sponsors the development of the following Testcontainers implementations:

- [Go](https://golang.testcontainers.org/quickstart/)
- [Java](https://java.testcontainers.org/quickstart/junit_5_quickstart/)

The rest are community-driven and maintained by independent contributors.

### [Prerequisites](#prerequisites)

Testcontainers requires a Docker-API compatible container runtime. During development, Testcontainers is actively tested against recent versions of Docker on Linux, as well as against Docker Desktop on Mac and Windows. These Docker environments are automatically detected and used by Testcontainers without any additional configuration being necessary.

It is possible to configure Testcontainers to work for other Docker setups, such as a remote Docker host or Docker alternatives. However, these are not actively tested in the main development workflow, so not all Testcontainers features might be available and additional manual configuration might be necessary.

If you have further questions about configuration details for your setup or whether it supports running Testcontainers-based tests, contact the Testcontainers team and other users from the Testcontainers community on [Slack](https://slack.testcontainers.org/).

\[

### Testcontainers for Go

A Go package that makes it simple to create and clean up container-based dependencies for automated integration/smoke tests.

]\(https://golang.testcontainers.org/quickstart/)

\[

### Testcontainers for Java

A Java library that supports JUnit tests, providing lightweight, throwaway instances of anything that can run in a Docker container.

]\(https://java.testcontainers.org/)

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/testcontainers.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2ftestcontainers%2f\&labels=status%2Ftriage)

Table of contents
