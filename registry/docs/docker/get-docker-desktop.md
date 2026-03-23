When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Get started](https://docs.docker.com/get-started/)

- [Guides](/guides/)
- [Manuals](/manuals/)
- [Reference](/reference/)

# Get Docker Desktop

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [Explanation](#explanation)

Docker Desktop is the all-in-one package to build images, run containers, and so much more. This guide will walk you through the installation process, enabling you to experience Docker Desktop firsthand.

> **Docker Desktop terms**
>
> Commercial use of Docker Desktop in larger enterprises (more than 250 employees OR more than $10 million USD in annual revenue) requires a [paid subscription](https://www.docker.com/pricing?ref=Docs\&refAction=DocsGetDockerDesktop).

### Docker Desktop for Mac

[Download (Apple Silicon)](https://desktop.docker.com/mac/main/arm64/Docker.dmg?utm_source=docker\&utm_medium=webreferral\&utm_campaign=docs-driven-download-mac-arm64) | [Download (Intel)](https://desktop.docker.com/mac/main/amd64/Docker.dmg?utm_source=docker\&utm_medium=webreferral\&utm_campaign=docs-driven-download-mac-amd64) | [Install instructions](/desktop/setup/install/mac-install)

### Docker Desktop for Windows

[Download](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe?utm_source=docker\&utm_medium=webreferral\&utm_campaign=docs-driven-download-windows) | [Install instructions](/desktop/setup/install/windows-install)

### Docker Desktop for Linux

[Install instructions](/desktop/setup/install/linux/)

Once it's installed, complete the setup process and you're all set to run a Docker container.

## [Try it out](#try-it-out)

In this hands-on guide, you will see how to run a Docker container using Docker Desktop.

Follow the instructions to run a container using the CLI.

## [Run your first container](#run-your-first-container)

Open your CLI terminal and start a container by running the `docker run` command:

```console
$ docker run -d -p 8080:80 docker/welcome-to-docker
```

## [Access the frontend](#access-the-frontend)

For this container, the frontend is accessible on port `8080`. To open the website, visit <http://localhost:8080> in your browser.

![Screenshot of the landing page of the Nginx web server, coming from the running container](https://docs.docker.com/get-started/docker-concepts/the-basics/images/access-the-frontend.webp)

## [Manage containers using Docker Desktop](#manage-containers-using-docker-desktop)

1. Open Docker Desktop and select the **Containers** field on the left sidebar.

2. You can view information about your container including logs, and files, and even access the shell by selecting the **Exec** tab.

   ![Screenshot of exec into the running container in Docker Desktop](https://docs.docker.com/get-started/introduction/images/exec-into-docker-container.webp)

3. Select the **Inspect** field to obtain detailed information about the container. You can perform various actions such as pause, resume, start or stop containers, or explore the **Logs**, **Bind mounts**, **Exec**, **Files**, and **Stats** tabs.

![Screenshot of inspecting the running container in Docker Desktop](https://docs.docker.com/get-started/introduction/images/inspecting-container.webp)

Docker Desktop simplifies container management for developers by streamlining the setup, configuration, and compatibility of applications across different environments, thereby addressing the pain points of environment inconsistencies and deployment challenges.

## [What's next?](#whats-next)

Now that you have Docker Desktop installed and ran your first container, it's time to start developing with containers.

[Develop with containers](https://docs.docker.com/get-started/introduction/develop-with-containers/)

[Edit this page](https://github.com/docker/docs/edit/main/content/get-started/introduction/get-docker-desktop.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fget-started%2fintroduction%2fget-docker-desktop%2f\&labels=status%2Ftriage)

Table of contents
