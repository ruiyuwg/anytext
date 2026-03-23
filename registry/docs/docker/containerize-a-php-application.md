When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Guides](https://docs.docker.com/guides/)

- [Get started](/get-started/)
- [Manuals](/manuals/)
- [Reference](/reference/)

[PHP language-specific guide](https://docs.docker.com/guides/php/)

This guide explains how to containerize PHP applications using Docker.

![](https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg "PHP") PHP

20 minutes

[1](https://docs.docker.com/guides/php/containerize/)

[Containerize your app](https://docs.docker.com/guides/php/containerize/)

[2](https://docs.docker.com/guides/php/develop/)

[Develop your app](https://docs.docker.com/guides/php/develop/)

[3](https://docs.docker.com/guides/php/run-tests/)

[Run your tests](https://docs.docker.com/guides/php/run-tests/)

[4](https://docs.docker.com/guides/php/configure-ci-cd/)

[Configure CI/CD](https://docs.docker.com/guides/php/configure-ci-cd/)

[5](https://docs.docker.com/guides/php/deploy/)

[Test your deployment](https://docs.docker.com/guides/php/deploy/)

[« Back to all guides](/guides/)

# Containerize a PHP application

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [Prerequisites](#prerequisites)

- You have installed the latest version of [Docker Desktop](https://docs.docker.com/get-started/get-docker/).
- You have a [git client](https://git-scm.com/downloads). The examples in this section use a command-line based git client, but you can use any client.

## [Overview](#overview)

This section walks you through containerizing and running a PHP application.

## [Get the sample applications](#get-the-sample-applications)

In this guide, you will use a pre-built PHP application. The application uses Composer for library dependency management. You'll serve the application via an Apache web server.

Open a terminal, change directory to a directory that you want to work in, and run the following command to clone the repository.

```console
$ git clone https://github.com/docker/docker-php-sample
```

The sample application is a basic hello world application and an application that increments a counter in a database. In addition, the application uses PHPUnit for testing.

## [Initialize Docker assets](#initialize-docker-assets)

Now that you have an application, you can use `docker init` to create the necessary Docker assets to containerize your application. Inside the `docker-php-sample` directory, run the `docker init` command in a terminal. `docker init` provides some default configuration, but you'll need to answer a few questions about your application. For example, this application uses PHP version 8.2. Refer to the following `docker init` example and use the same answers for your prompts.

```console
$ docker init
Welcome to the Docker Init CLI!

This utility will walk you through creating the following files with sensible defaults for your project:
  - .dockerignore
  - Dockerfile
  - compose.yaml
  - README.Docker.md

Let's get started!

? What application platform does your project use? PHP with Apache
? What version of PHP do you want to use? 8.2
? What's the relative directory (with a leading .) for your app? ./src
? What local port do you want to use to access your server? 9000
```

You should now have the following contents in your `docker-php-sample` directory.

```text
├── docker-php-sample/
│ ├── .git/
│ ├── src/
│ ├── tests/
│ ├── .dockerignore
│ ├── .gitignore
│ ├── compose.yaml
│ ├── composer.json
│ ├── composer.lock
│ ├── Dockerfile
│ ├── README.Docker.md
│ └── README.md
```

To learn more about the files that `docker init` added, see the following:

- [Dockerfile](https://docs.docker.com/reference/dockerfile/)
- [.dockerignore](https://docs.docker.com/reference/dockerfile/#dockerignore-file)
- [compose.yaml](https://docs.docker.com/reference/compose-file/)

## [Run the application](#run-the-application)

Inside the `docker-php-sample` directory, run the following command in a terminal.

```console
$ docker compose up --build
```

Open a browser and view the application at <http://localhost:9000/hello.php>. You should see a simple hello world application.

In the terminal, press `ctrl`+`c` to stop the application.

### [Run the application in the background](#run-the-application-in-the-background)

You can run the application detached from the terminal by adding the `-d` option. Inside the `docker-php-sample` directory, run the following command in a terminal.

```console
$ docker compose up --build -d
```

Open a browser and view the application at <http://localhost:9000/hello.php>. You should see a simple hello world application.

In the terminal, run the following command to stop the application.

```console
$ docker compose down
```

For more information about Compose commands, see the [Compose CLI reference](/reference/cli/docker/compose/).

## [Summary](#summary)

In this section, you learned how you can containerize and run a simple PHP application using Docker.

Related information:

- [docker init reference](/reference/cli/docker/init/)

## [Next steps](#next-steps)

In the next section, you'll learn how you can develop your application using Docker containers.

[Use containers for PHP development »](https://docs.docker.com/guides/php/develop/)

[Edit this page](https://github.com/docker/docs/edit/main/content/guides/php/containerize.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fguides%2fphp%2fcontainerize%2f\&labels=status%2Ftriage)

Table of contents
