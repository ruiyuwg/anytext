Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Guides](https://docs.docker.com/guides/)

- [Get started](/get-started/)
- [Manuals](/manuals/)
- [Reference](/reference/)

[R language-specific guide](https://docs.docker.com/guides/r/)

This guide details how to containerize R applications using Docker.

![](https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg "R") R

10 minutes

[1](https://docs.docker.com/guides/r/containerize/)

[Containerize your app](https://docs.docker.com/guides/r/containerize/)

[2](https://docs.docker.com/guides/r/develop/)

[Develop your app](https://docs.docker.com/guides/r/develop/)

[3](https://docs.docker.com/guides/r/configure-ci-cd/)

[Configure CI/CD](https://docs.docker.com/guides/r/configure-ci-cd/)

[4](https://docs.docker.com/guides/r/deploy/)

[Test your deployment](https://docs.docker.com/guides/r/deploy/)

[« Back to all guides](/guides/)

# Containerize a R application

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [Prerequisites](#prerequisites)

- You have a [git client](https://git-scm.com/downloads). The examples in this section use a command-line based git client, but you can use any client.

## [Overview](#overview)

This section walks you through containerizing and running a R application.

## [Get the sample application](#get-the-sample-application)

The sample application uses the popular [Shiny](https://shiny.posit.co/) framework.

Clone the sample application to use with this guide. Open a terminal, change directory to a directory that you want to work in, and run the following command to clone the repository:

```console
$ git clone https://github.com/mfranzon/r-docker-dev.git && cd r-docker-dev
```

You should now have the following contents in your `r-docker-dev` directory.

```text
├── r-docker-dev/
│ ├── src/
│ │ └── app.R
│ ├── src_db/
│ │ └── app_db.R
│ ├── compose.yaml
│ ├── Dockerfile
│ └── README.md
```

To learn more about the files in the repository, see the following:

- [Dockerfile](https://docs.docker.com/reference/dockerfile/)
- [.dockerignore](https://docs.docker.com/reference/dockerfile/#dockerignore-file)
- [compose.yaml](https://docs.docker.com/reference/compose-file/)

## [Run the application](#run-the-application)

Inside the `r-docker-dev` directory, run the following command in a terminal.

```console
$ docker compose up --build
```

Open a browser and view the application at <http://localhost:3838>. You should see a simple Shiny application.

In the terminal, press `ctrl`+`c` to stop the application.

### [Run the application in the background](#run-the-application-in-the-background)

You can run the application detached from the terminal by adding the `-d` option. Inside the `r-docker-dev` directory, run the following command in a terminal.

```console
$ docker compose up --build -d
```

Open a browser and view the application at <http://localhost:3838>.

You should see a simple Shiny application.

In the terminal, run the following command to stop the application.

```console
$ docker compose down
```

For more information about Compose commands, see the [Compose CLI reference](/reference/cli/docker/compose/).

## [Summary](#summary)

In this section, you learned how you can containerize and run your R application using Docker.

Related information:

- [Docker Compose overview](https://docs.docker.com/compose/)

## [Next steps](#next-steps)

In the next section, you'll learn how you can develop your application using containers.

[Use containers for R development »](https://docs.docker.com/guides/r/develop/)

[Edit this page](https://github.com/docker/docs/edit/main/content/guides/r/containerize.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fguides%2fr%2fcontainerize%2f\&labels=status%2Ftriage)

Table of contents
