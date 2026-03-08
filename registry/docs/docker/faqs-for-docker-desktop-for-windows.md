Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# FAQs for Docker Desktop for Windows

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

### [Can I use VirtualBox alongside Docker Desktop?](#can-i-use-virtualbox-alongside-docker-desktop)

Yes, you can run VirtualBox along with Docker Desktop if you have enabled the [Windows Hypervisor Platform](https://docs.microsoft.com/en-us/virtualization/api/) feature on your machine.

### [Why is Windows 10 or Windows 11 required?](#why-is-windows-10-or-windows-11-required)

Docker Desktop uses the Windows Hyper-V features. While older Windows versions have Hyper-V, their Hyper-V implementations lack features critical for Docker Desktop to work.

### [Can I run Docker Desktop on Windows Server?](#can-i-run-docker-desktop-on-windows-server)

No, running Docker Desktop on Windows Server is not supported.

### [How do symlinks work on Windows?](#how-do-symlinks-work-on-windows)

Docker Desktop supports two types of symlinks: Windows native symlinks and symlinks created inside a container.

The Windows native symlinks are visible within the containers as symlinks, whereas symlinks created inside a container are represented as [mfsymlinks](https://wiki.samba.org/index.php/UNIX_Extensions#Minshall.2BFrench_symlinks). These are regular Windows files with a special metadata. Therefore the symlinks created inside a container appear as symlinks inside the container, but not on the host.

### [File sharing with Kubernetes and WSL 2](#file-sharing-with-kubernetes-and-wsl-2)

Docker Desktop mounts the Windows host filesystem under `/run/desktop` inside the container running Kubernetes. See the [Stack Overflow post](https://stackoverflow.com/questions/67746843/clear-persistent-volume-from-a-kubernetes-cluster-running-on-docker-desktop/69273405#69273) for an example of how to configure a Kubernetes Persistent Volume to represent directories on the host.

### [How do I add custom CA certificates?](#how-do-i-add-custom-ca-certificates)

You can add trusted Certificate Authorities (CAs) to your Docker daemon to verify registry server certificates, and client certificates, to authenticate to registries.

Docker Desktop supports all trusted Certificate Authorities (CAs) (root or intermediate). Docker recognizes certs stored under Trust Root Certification Authorities or Intermediate Certification Authorities.

Docker Desktop creates a certificate bundle of all user-trusted CAs based on the Windows certificate store, and appends it to Moby trusted certificates. Therefore, if an enterprise SSL certificate is trusted by the user on the host, it is trusted by Docker Desktop.

To learn more about how to install a CA root certificate for the registry, see [Verify repository client with certificates](https://docs.docker.com/engine/security/certificates/) in the Docker Engine topics.

### [How do I add client certificates?](#how-do-i-add-client-certificates)

You can add your client certificates in `~/.docker/certs.d/<MyRegistry><Port>/client.cert` and `~/.docker/certs.d/<MyRegistry><Port>/client.key`. You do not need to push your certificates with `git` commands.

When the Docker Desktop application starts, it copies the `~/.docker/certs.d` folder on your Windows system to the `/etc/docker/certs.d` directory on Moby (the Docker Desktop virtual machine running on Hyper-V).

You need to restart Docker Desktop after making any changes to the keychain or to the `~/.docker/certs.d` directory in order for the changes to take effect.

The registry cannot be listed as an insecure registry (see [Docker Daemon](https://docs.docker.com/desktop/settings-and-maintenance/settings/#docker-engine)). Docker Desktop ignores certificates listed under insecure registries, and does not send client certificates. Commands like `docker run` that attempt to pull from the registry produce error messages on the command line, as well as on the registry.

To learn more about how to set the client TLS certificate for verification, see [Verify repository client with certificates](https://docs.docker.com/engine/security/certificates/) in the Docker Engine topics.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/desktop/troubleshoot-and-support/faqs/windowsfaqs.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fdesktop%2ftroubleshoot-and-support%2ffaqs%2fwindowsfaqs%2f\&labels=status%2Ftriage)

Table of contents
