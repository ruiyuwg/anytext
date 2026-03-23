When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Network and VM FAQs

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [How can I limit container internet access?](#how-can-i-limit-container-internet-access)

Docker Desktop doesn't have a built-in mechanism for this, but you can use process-level firewalls on the host. Apply rules to the `com.docker.vpnkit` user-space process to control where it can connect (DNS allowlists, packet filters) and which ports/protocols it can use.

For enterprise environments, consider [Air-gapped containers](https://docs.docker.com/enterprise/security/hardened-desktop/air-gapped-containers/) which provide network access controls for containers.

## [Can I apply firewall rules to container network traffic?](#can-i-apply-firewall-rules-to-container-network-traffic)

Yes. Docker Desktop uses a user-space process (`com.docker.vpnkit`) for network connectivity, which inherits constraints like firewall rules, VPN settings, and HTTP proxy properties from the user that launched it.

## [Does Docker Desktop for Windows with Hyper-V allow users to create other VMs?](#does-docker-desktop-for-windows-with-hyper-v-allow-users-to-create-other-vms)

No. The `DockerDesktopVM` name is hard-coded in the service, so you cannot use Docker Desktop to create or manipulate other virtual machines.

## [How does Docker Desktop achieve network isolation with Hyper-V and WSL 2?](#how-does-docker-desktop-achieve-network-isolation-with-hyper-v-and-wsl-2)

Docker Desktop uses the same VM processes for both WSL 2 (in the `docker-desktop` distribution) and Hyper-V (in `DockerDesktopVM`). Host/VM communication uses `AF_VSOCK` hypervisor sockets (shared memory) rather than network switches or interfaces. All host networking is performed using standard TCP/IP sockets from the `com.docker.vpnkit.exe` and `com.docker.backend.exe` processes.

For more information, see [How Docker Desktop networking works under the hood](https://www.docker.com/blog/how-docker-desktop-networking-works-under-the-hood/).

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/security/faqs/networking-and-vms.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fsecurity%2ffaqs%2fnetworking-and-vms%2f\&labels=status%2Ftriage)

Table of contents
