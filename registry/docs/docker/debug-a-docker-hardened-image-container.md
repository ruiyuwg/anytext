Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Debug a Docker Hardened Image container

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Docker Hardened Images (DHI) prioritize minimalism and security, which means they intentionally leave out many common debugging tools (like shells or package managers). This makes direct troubleshooting difficult without introducing risk. To address this, you can use [Docker Debug](/reference/cli/docker/debug/), a secure workflow that temporarily attaches an ephemeral debug container to a running service or image without modifying the original image.

This guide shows how to debug Docker Hardened Images locally during development. With Docker Debug, you can also debug containers remotely using the `--host` option.

## [Use Docker Debug](#use-docker-debug)

### [Step 1: Run a container from a Hardened Image](#step-1-run-a-container-from-a-hardened-image)

Start with a DHI-based container that simulates an issue:

```console
$ docker run -d --name myapp dhi.io/python:3.13 python -c "import time; time.sleep(300)"
```

This container doesn't include a shell or tools like `ps`, `top`, or `cat`.

If you try:

```console
$ docker exec -it myapp sh
```

You'll see:

```console
exec: "sh": executable file not found in $PATH
```

### [Step 2: Use Docker Debug to inspect the container](#step-2-use-docker-debug-to-inspect-the-container)

Use the `docker debug` command to attach a temporary, tool-rich debug container to the running instance.

```console
$ docker debug myapp
```

From here, you can inspect running processes, network status, or mounted files.

For example, to check running processes:

```console
$ ps aux
```

Type `exit` to leave the container when done.

## [Alternative debugging approaches](#alternative-debugging-approaches)

In addition to using Docker Debug, you can also use the following approaches for debugging DHI containers.

### [Use the -dev variant](#use-the--dev-variant)

Docker Hardened Images offer a `-dev` variant that includes a shell and a package manager to install debugging tools. Simply replace the image tag with `-dev`:

```console
$ docker run -it --rm dhi.io/python:3.13-dev sh
```

Type `exit` to leave the container when done. Note that using the `-dev` variant increases the attack surface and it is not recommended as a runtime for production environments.

### [Mount debugging tools with image mounts](#mount-debugging-tools-with-image-mounts)

You can use the image mount feature to mount debugging tools into your container without modifying the base image.

#### [Step 1: Run a container from a Hardened Image](#step-1-run-a-container-from-a-hardened-image-1)

Start with a DHI-based container that simulates an issue:

```console
$ docker run -d --name myapp dhi.io/python:3.13 python -c "import time; time.sleep(300)"
```

#### [Step 2: Mount debugging tools into the container](#step-2-mount-debugging-tools-into-the-container)

Run a new container that mounts a tool-rich image (like `busybox`) into the running container's namespace:

```console
$ docker run --rm -it --pid container:myapp \
  --mount type=image,source=busybox,destination=/dbg,ro \
  dhi.io/python:3.13 /dbg/bin/sh
```

This mounts the BusyBox image at `/dbg`, giving you access to its tools while keeping your original container image unchanged. Since the hardened Python image doesn't include standard utilities, you need to use the full path to the mounted tools:

```console
$ /dbg/bin/ls /
$ /dbg/bin/ps aux
$ /dbg/bin/cat /etc/os-release
```

Type `exit` to leave the container when done.

## [What's next](#whats-next)

This guide covered three approaches for debugging Docker Hardened Images:

- Docker Debug: Attach an ephemeral debug container without modifying the original image
- `-dev` variants: Use development images that include debugging tools
- Image mount: Mount tool-rich images like BusyBox to access debugging utilities

Each method helps you troubleshoot hardened containers while maintaining security. Docker Debug and image mounts avoid modifying your production images, while `-dev` variants provide convenience during development.

If you encounter issues related to permissions, ports, missing shells, or package managers, see [Troubleshoot Docker Hardened Images](https://docs.docker.com/dhi/troubleshoot/) for recommended solutions and workarounds.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/dhi/how-to/debug.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fdhi%2fhow-to%2fdebug%2f\&labels=status%2Ftriage)

Table of contents
