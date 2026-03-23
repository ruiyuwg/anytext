When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Container security FAQs

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [How are containers isolated from the host in Docker Desktop?](#how-are-containers-isolated-from-the-host-in-docker-desktop)

Docker Desktop runs all containers inside a customized Linux virtual machine (except for native Windows containers). This adds strong isolation between containers and the host machine, even when containers run as root.

Important considerations include:

- Containers have access to host files configured for file sharing via Docker Desktop settings
- Containers run as root with limited capabilities inside the Docker Desktop VM by default
- Privileged containers (`--privileged`, `--pid=host`, `--cap-add`) run with elevated privileges inside the VM, giving them access to VM internals and Docker Engine

With Enhanced Container Isolation turned on, each container runs in a dedicated Linux user namespace inside the Docker Desktop VM. Even privileged containers only have privileges within their container boundary, not the VM. ECI uses advanced techniques to prevent containers from breaching the Docker Desktop VM and Docker Engine.

## [Which portions of the host filesystem can containers access?](#which-portions-of-the-host-filesystem-can-containers-access)

Containers can only access host files that are:

1. Shared using Docker Desktop settings
2. Explicitly bind-mounted into the container (e.g., `docker run -v /path/to/host/file:/mnt`)

## [Can containers running as root access admin-owned files on the host?](#can-containers-running-as-root-access-admin-owned-files-on-the-host)

No. Host file sharing uses a user-space file server (running in `com.docker.backend` as the Docker Desktop user), so containers can only access files that the Docker Desktop user already has permission to access.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/security/faqs/containers.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fsecurity%2ffaqs%2fcontainers%2f\&labels=status%2Ftriage)

Table of contents
