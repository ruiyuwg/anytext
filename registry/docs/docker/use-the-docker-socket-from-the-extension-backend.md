Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Use the Docker socket from the extension backend

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

***

Extensions can invoke Docker commands directly from the frontend with the SDK.

In some cases, it is useful to also interact with Docker Engine from the backend.

Extension backend containers can mount the Docker socket and use it to interact with Docker Engine from the extension backend logic. Learn more about the [Docker Engine socket](/reference/cli/dockerd/#examples)

However, when mounting the Docker socket from an extension container that lives in the Desktop virtual machine, you want to mount the Docker socket from inside the VM, and not mount `/var/run/docker.sock` from the host filesystem (using the Docker socket from the host can lead to permission issues in containers).

In order to do so, you can use `/var/run/docker.sock.raw`. Docker Desktop mounts the socket that lives in the Desktop VM, and not from the host.

```yaml
services:
  myExtension:
    image: ${DESKTOP_PLUGIN_IMAGE}
    volumes:
      - /var/run/docker.sock.raw:/var/run/docker.sock
```

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/extensions/extensions-sdk/guides/use-docker-socket-from-backend.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fextensions%2fextensions-sdk%2fguides%2fuse-docker-socket-from-backend%2f\&labels=status%2Ftriage)
