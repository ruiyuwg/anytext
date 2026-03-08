Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Guides](https://docs.docker.com/guides/)

- [Get started](/get-started/)
- [Manuals](/manuals/)
- [Reference](/reference/)

[.NET language-specific guide](https://docs.docker.com/guides/dotnet/)

Learn how to containerize .NET applications using Docker.

![](https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg "C#") C#

20 minutes

[1](https://docs.docker.com/guides/dotnet/containerize/)

[Containerize your app](https://docs.docker.com/guides/dotnet/containerize/)

[2](https://docs.docker.com/guides/dotnet/develop/)

[Develop your app](https://docs.docker.com/guides/dotnet/develop/)

[3](https://docs.docker.com/guides/dotnet/run-tests/)

[Run your tests](https://docs.docker.com/guides/dotnet/run-tests/)

[4](https://docs.docker.com/guides/dotnet/configure-ci-cd/)

[Configure CI/CD](https://docs.docker.com/guides/dotnet/configure-ci-cd/)

[5](https://docs.docker.com/guides/dotnet/deploy/)

[Test your deployment](https://docs.docker.com/guides/dotnet/deploy/)

[« Back to all guides](/guides/)

# Containerize a .NET application

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [Prerequisites](#prerequisites)

- You have installed the latest version of [Docker Desktop](https://docs.docker.com/get-started/get-docker/).
- You have a [git client](https://git-scm.com/downloads). The examples in this section use a command-line based git client, but you can use any client.

## [Overview](#overview)

This section walks you through containerizing and running a .NET application.

## [Get the sample applications](#get-the-sample-applications)

In this guide, you will use a pre-built .NET application. The application is similar to the application built in the Docker Blog article, [Building a Multi-Container .NET App Using Docker Desktop](https://www.docker.com/blog/building-multi-container-net-app-using-docker-desktop/).

Open a terminal, change directory to a directory that you want to work in, and run the following command to clone the repository.

```console
$ git clone https://github.com/docker/docker-dotnet-sample
```

## [Initialize Docker assets](#initialize-docker-assets)

Now that you have an application, you can create the necessary Docker assets to containerize it. You can choose between using the official .NET images or Docker Hardened Images (DHI).

> [Docker Hardened Images (DHIs)](https://docs.docker.com/dhi/) are minimal, secure, and production-ready container base and application images maintained by Docker. DHI images are recommended for better security—they are designed to reduce vulnerabilities and simplify compliance.

Using Docker Hardened Images Using the official .NET 10 image

Docker Hardened Images (DHIs) for .NET are available in the [Docker Hardened Images catalog](https://hub.docker.com/hardened-images/catalog/dhi/aspnetcore). Docker Hardened Images are freely available to everyone with no subscription required. You can pull and use them like any other Docker image after signing in to the DHI registry. For more information, see the [DHI quickstart](/dhi/get-started/) guide.

1. Sign in to the DHI registry:

   ```console
   $ docker login dhi.io
   ```

2. Pull the .NET SDK DHI (check the catalog for available versions):

   ```console
   $ docker pull dhi.io/dotnet:10-sdk
   ```

3. Pull the ASP.NET Core runtime DHI (check the catalog for available versions):

   ```console
   $ docker pull dhi.io/aspnetcore:10
   ```

You can use `docker init` to generate Docker assets, then modify the Dockerfile to use DHI images:

```console
$ docker init
Welcome to the Docker Init CLI!

This utility will walk you through creating the following files with sensible defaults for your project:
  - .dockerignore
  - Dockerfile
  - compose.yaml
  - README.Docker.md

Let's get started!

? What application platform does your project use? ASP.NET Core
? What's the name of your solution's main project? myWebApp
? What version of .NET do you want to use? 10.0
? What local port do you want to use to access your server? 8080
```

In the following Dockerfile, the `FROM` instructions use `dhi.io/dotnet:10-sdk` and `dhi.io/aspnetcore:10` as the base images.

Dockerfile

```dockerfile
# syntax=docker/dockerfile:1

FROM --platform=$BUILDPLATFORM dhi.io/dotnet:10-sdk AS build
ARG TARGETARCH
COPY . /source
WORKDIR /source/src
RUN --mount=type=cache,id=nuget,target=/root/.nuget/packages \
    dotnet publish -a ${TARGETARCH/amd64/x64} --use-current-runtime --self-contained false -o /app

FROM dhi.io/aspnetcore:10
WORKDIR /app
COPY --from=build /app .
ENTRYPOINT ["dotnet", "myWebApp.dll"]
```

> Note
>
> DHI runtime images already run as a non-root user (`nonroot`, UID 65532), so there's no need to create a user or specify `USER` in your Dockerfile. This reduces the attack surface and simplifies your configuration.

You can use `docker init` to create the necessary Docker assets. Inside the `docker-dotnet-sample` directory, run the `docker init` command in a terminal. `docker init` provides some default configuration, but you'll need to answer a few questions about your application. Refer to the following example to answer the prompts from `docker init` and use the same answers for your prompts.

```console
$ docker init
Welcome to the Docker Init CLI!

This utility will walk you through creating the following files with sensible defaults for your project:
  - .dockerignore
  - Dockerfile
  - compose.yaml
  - README.Docker.md

Let's get started!

? What application platform does your project use? ASP.NET Core
? What's the name of your solution's main project? myWebApp
? What version of .NET do you want to use? 10.0
? What local port do you want to use to access your server? 8080
```

This generates a Dockerfile using the official .NET 10 images from Microsoft Container Registry:

Dockerfile

```dockerfile
# syntax=docker/dockerfile:1

FROM --platform=$BUILDPLATFORM mcr.microsoft.com/dotnet/sdk:10.0-alpine AS build
ARG TARGETARCH
COPY . /source
WORKDIR /source/src
RUN --mount=type=cache,id=nuget,target=/root/.nuget/packages \
    dotnet publish -a ${TARGETARCH/amd64/x64} --use-current-runtime --self-contained false -o /app

FROM mcr.microsoft.com/dotnet/aspnet:10.0-alpine AS final
WORKDIR /app
COPY --from=build /app .
ARG UID=10001
RUN adduser \
    --disabled-password \
    --gecos "" \
    --home "/nonexistent" \
    --shell "/sbin/nologin" \
    --no-create-home \
    --uid "${UID}" \
    appuser
USER appuser
ENTRYPOINT ["dotnet", "myWebApp.dll"]
```

You should now have the following contents in your `docker-dotnet-sample` directory.

```text
├── docker-dotnet-sample/
│ ├── .git/
│ ├── src/
│ ├── .dockerignore
│ ├── compose.yaml
│ ├── Dockerfile
│ ├── README.Docker.md
│ └── README.md
```

To learn more about the files, see the following:

- [Dockerfile](https://docs.docker.com/reference/dockerfile/)
- [.dockerignore](https://docs.docker.com/reference/dockerfile/#dockerignore-file)
- [compose.yaml](https://docs.docker.com/reference/compose-file/)

## [Run the application](#run-the-application)

Inside the `docker-dotnet-sample` directory, run the following command in a terminal.

```console
$ docker compose up --build
```

Open a browser and view the application at <http://localhost:8080>. You should see a simple web application.

In the terminal, press `ctrl`+`c` to stop the application.

### [Run the application in the background](#run-the-application-in-the-background)

You can run the application detached from the terminal by adding the `-d` option. Inside the `docker-dotnet-sample` directory, run the following command in a terminal.

```console
$ docker compose up --build -d
```

Open a browser and view the application at <http://localhost:8080>. You should see a simple web application.

In the terminal, run the following command to stop the application.

```console
$ docker compose down
```

For more information about Compose commands, see the [Compose CLI reference](/reference/cli/docker/compose/).

## [Summary](#summary)

In this section, you learned how you can containerize and run your .NET application using Docker.

Related information:

- [Dockerfile reference](https://docs.docker.com/reference/dockerfile/)
- [.dockerignore file reference](https://docs.docker.com/reference/dockerfile/#dockerignore-file)
- [Docker Compose overview](https://docs.docker.com/compose/)
- [Docker Hardened Images](/dhi/)

## [Next steps](#next-steps)

In the next section, you'll learn how you can develop your application using Docker containers.

[Use containers for .NET development »](https://docs.docker.com/guides/dotnet/develop/)

[Edit this page](https://github.com/docker/docs/edit/main/content/guides/dotnet/containerize.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fguides%2fdotnet%2fcontainerize%2f\&labels=status%2Ftriage)

Table of contents
