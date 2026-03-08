Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Guides](https://docs.docker.com/guides/)

- [Get started](/get-started/)
- [Manuals](/manuals/)
- [Reference](/reference/)

[Bun language-specific guide](https://docs.docker.com/guides/bun/)

Learn how to containerize JavaScript applications with the Bun runtime.

![](https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg "JavaScript") JavaScript

10 minutes

[1](https://docs.docker.com/guides/bun/containerize/)

[Containerize your app](https://docs.docker.com/guides/bun/containerize/)

[2](https://docs.docker.com/guides/bun/develop/)

[Develop your app](https://docs.docker.com/guides/bun/develop/)

[3](https://docs.docker.com/guides/bun/configure-ci-cd/)

[Configure CI/CD](https://docs.docker.com/guides/bun/configure-ci-cd/)

[4](https://docs.docker.com/guides/bun/deploy/)

[Test your deployment](https://docs.docker.com/guides/bun/deploy/)

[« Back to all guides](/guides/)

# Containerize a Bun application

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [Prerequisites](#prerequisites)

- You have a [Git client](https://git-scm.com/downloads). The examples in this section use a command-line based Git client, but you can use any client.

## [Overview](#overview)

For a long time, Node.js has been the de-facto runtime for server-side JavaScript applications. Recent years have seen a rise in new alternative runtimes in the ecosystem, including [Bun website](https://bun.sh/). Like Node.js, Bun is a JavaScript runtime. Bun is a comparatively lightweight runtime that is designed to be fast and efficient.

Why develop Bun applications with Docker? Having multiple runtimes to choose from is great. But as the number of runtimes increases, it becomes challenging to manage the different runtimes and their dependencies consistently across environments. This is where Docker comes in. Creating and destroying containers on demand is a great way to manage the different runtimes and their dependencies. Also, as it's fairly a new runtime, getting a consistent development environment for Bun can be challenging. Docker can help you set up a consistent development environment for Bun.

## [Get the sample application](#get-the-sample-application)

Clone the sample application to use with this guide. Open a terminal, change directory to a directory that you want to work in, and run the following command to clone the repository:

```console
$ git clone https://github.com/dockersamples/bun-docker.git && cd bun-docker
```

You should now have the following contents in your `bun-docker` directory.

```text
├── bun-docker/
│ ├── compose.yml
│ ├── Dockerfile
│ ├── LICENSE
│ ├── server.js
│ └── README.md
```

## [Create a Dockerfile](#create-a-dockerfile)

Before creating a Dockerfile, you need to choose a base image. You can either use the [Bun Docker Official Image](https://hub.docker.com/r/oven/bun) or a Docker Hardened Image (DHI) from the [Hardened Image catalog](https://hub.docker.com/hardened-images/catalog).

Choosing DHI offers the advantage of a production-ready image that is lightweight and secure. For more information, see [Docker Hardened Images](https://docs.docker.com/dhi/).

Using Docker Hardened Images Using the official image

Docker Hardened Images (DHIs) are available for Bun in the [Docker Hardened Images catalog](https://hub.docker.com/hardened-images/catalog/dhi/bun). You can pull DHIs directly from the `dhi.io` registry.

1. Sign in to the DHI registry:

   ```console
   $ docker login dhi.io
   ```

2. Pull the Bun DHI as `dhi.io/bun:1`. The tag (`1`) in this example refers to the version to the latest 1.x version of Bun.

   ```console
   $ docker pull dhi.io/bun:1
   ```

For other available versions, refer to the [catalog](https://hub.docker.com/hardened-images/catalog/dhi/bun).

```dockerfile
# Use the DHI Bun image as the base image
FROM dhi.io/bun:1

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

# Expose the port on which the API will listen
EXPOSE 3000

# Run the server when the container launches
CMD ["bun", "server.js"]
```

Using the Docker Official Image is straightforward. In the following Dockerfile, you'll notice that the `FROM` instruction uses `oven/bun` as the base image.

You can find the image on [Docker Hub](https://hub.docker.com/r/oven/bun). This is the Docker Official Image for Bun created by Oven, the company behind Bun, and it's available on Docker Hub.

```dockerfile
# Use the official Bun image
FROM oven/bun:latest

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

# Expose the port on which the API will listen
EXPOSE 3000

# Run the server when the container launches
CMD ["bun", "server.js"]
```

In addition to specifying the base image, the Dockerfile also:

- Sets the working directory in the container to `/app`.
- Copies the content of the current directory to the `/app` directory in the container.
- Exposes port 3000, where the API is listening for requests.
- And finally, starts the server when the container launches with the command `bun server.js`.

## [Run the application](#run-the-application)

Inside the `bun-docker` directory, run the following command in a terminal.

```console
$ docker compose up --build
```

Open a browser and view the application at <http://localhost:3000>. You will see a message `{"Status" : "OK"}` in the browser.

In the terminal, press `ctrl`+`c` to stop the application.

### [Run the application in the background](#run-the-application-in-the-background)

You can run the application detached from the terminal by adding the `-d` option. Inside the `bun-docker` directory, run the following command in a terminal.

```console
$ docker compose up --build -d
```

Open a browser and view the application at <http://localhost:3000>.

In the terminal, run the following command to stop the application.

```console
$ docker compose down
```

## [Summary](#summary)

In this section, you learned how you can containerize and run your Bun application using Docker.

Related information:

- [Dockerfile reference](https://docs.docker.com/reference/dockerfile/)
- [.dockerignore file](https://docs.docker.com/reference/dockerfile/#dockerignore-file)
- [Docker Compose overview](https://docs.docker.com/compose/)
- [Compose file reference](https://docs.docker.com/reference/compose-file/)
- [Docker Hardened Images](/dhi/)

## [Next steps](#next-steps)

In the next section, you'll learn how you can develop your application using containers.

[Use containers for Bun development »](https://docs.docker.com/guides/bun/develop/)

[Edit this page](https://github.com/docker/docs/edit/main/content/guides/bun/containerize.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fguides%2fbun%2fcontainerize%2f\&labels=status%2Ftriage)

Table of contents
