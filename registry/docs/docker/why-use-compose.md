Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Why use Compose?

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [Key benefits of Docker Compose](#key-benefits-of-docker-compose)

Using Docker Compose offers several benefits that streamline the development, deployment, and management of containerized applications:

- Simplified control: Define and manage multi-container apps in one YAML file, streamlining orchestration and replication.

- Efficient collaboration: Shareable YAML files support smooth collaboration between developers and operations, improving workflows and issue resolution, leading to increased overall efficiency.

- Rapid application development: Compose caches the configuration used to create a container. When you restart a service that has not changed, Compose re-uses the existing containers. Re-using containers means that you can make changes to your environment very quickly.

- Portability across environments: Compose supports variables in the Compose file. You can use these variables to customize your composition for different environments, or different users.

## [Common use cases of Docker Compose](#common-use-cases-of-docker-compose)

Compose can be used in many different ways. Some common use cases are outlined below.

### [Development environments](#development-environments)

When you're developing software, the ability to run an application in an isolated environment and interact with it is crucial. The Compose command line tool can be used to create the environment and interact with it.

The [Compose file](https://docs.docker.com/reference/compose-file/) provides a way to document and configure all of the application's service dependencies (databases, queues, caches, web service APIs, etc). Using the Compose command line tool you can create and start one or more containers for each dependency with a single command (`docker compose up`).

Together, these features provide a convenient way for you to get started on a project. Compose can reduce a multi-page "developer getting started guide" to a single machine-readable Compose file and a few commands.

### [Automated testing environments](#automated-testing-environments)

An important part of any Continuous Deployment or Continuous Integration process is the automated test suite. Automated end-to-end testing requires an environment in which to run tests. Compose provides a convenient way to create and destroy isolated testing environments for your test suite. By defining the full environment in a [Compose file](https://docs.docker.com/reference/compose-file/), you can create and destroy these environments in just a few commands:

```console
$ docker compose up -d
$ ./run_tests
$ docker compose down
```

### [Single host deployments](#single-host-deployments)

Compose has traditionally been focused on development and testing workflows, but with each release we're making progress on more production-oriented features.

For details on using production-oriented features, see [Compose in production](https://docs.docker.com/compose/how-tos/production/).

## [What's next?](#whats-next)

- [Learn about the history of Compose](https://docs.docker.com/compose/intro/history/)
- [Understand how Compose works](https://docs.docker.com/compose/intro/compose-application-model/)
- [Try the Quickstart guide](https://docs.docker.com/compose/gettingstarted/)

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/compose/intro/features-uses.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fcompose%2fintro%2ffeatures-uses%2f\&labels=status%2Ftriage)

Table of contents
