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

# Containerize a C++ application

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [Prerequisites](#prerequisites)

- You have a [Git client](https://git-scm.com/downloads). The examples in this section use a command-line based Git client, but you can use any client.

## [Overview](#overview)

This section walks you through containerizing and running a C++ application, using Docker Compose.

## [Get the sample application](#get-the-sample-application)

We're using the same sample repository that you used in the previous sections of this guide. If you haven't already cloned the repository, clone it now:

```console
$ git clone https://github.com/dockersamples/c-plus-plus-docker.git
```

You should now have the following contents in your `c-plus-plus-docker` (root) directory.

```text
├── c-plus-plus-docker/
│ ├── compose.yml
│ ├── Dockerfile
│ ├── LICENSE
│ ├── ok_api.cpp
│ └── README.md
```

To learn more about the files in the repository, see the following:

- [Dockerfile](https://docs.docker.com/reference/dockerfile/)
- [.dockerignore](https://docs.docker.com/reference/dockerfile/#dockerignore-file)
- [compose.yml](https://docs.docker.com/reference/compose-file/)

## [Run the application](#run-the-application)

Inside the `c-plus-plus-docker` directory, run the following command in a terminal.

```console
$ docker compose up --build
```

Open a browser and view the application at <http://localhost:8080>. You will see a message `{"Status" : "OK"}` in the browser.

In the terminal, press `ctrl`+`c` to stop the application.

### [Run the application in the background](#run-the-application-in-the-background)

You can run the application detached from the terminal by adding the `-d` option. Inside the `c-plus-plus-docker` directory, run the following command in a terminal.

```console
$ docker compose up --build -d
```

Open a browser and view the application at <http://localhost:8080>.

In the terminal, run the following command to stop the application.

```console
$ docker compose down
```

For more information about Compose commands, see the [Compose CLI reference](/reference/cli/docker/compose/).

## [Summary](#summary)

In this section, you learned how you can containerize and run your C++ application using Docker.

Related information:

- [Docker Compose overview](https://docs.docker.com/compose/)

## [Next steps](#next-steps)

In the next section, you'll learn how you can develop your application using containers.

[Use containers for C++ development »](https://docs.docker.com/guides/cpp/develop/)

[Edit this page](https://github.com/docker/docs/edit/main/content/guides/cpp/containerize.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fguides%2fcpp%2fcontainerize%2f\&labels=status%2Ftriage)

Table of contents
