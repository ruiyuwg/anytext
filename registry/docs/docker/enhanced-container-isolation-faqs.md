When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Enhanced Container Isolation FAQs

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Subscription: Business

For: Administrators

This page answers common questions about Enhanced Container Isolation (ECI) that aren't covered in the main documentation.

## [Do I need to change the way I use Docker when ECI is switched on?](#do-i-need-to-change-the-way-i-use-docker-when-eci-is-switched-on)

No. ECI works automatically in the background by creating more secure containers. You can continue using all your existing Docker commands, workflows, and development tools without any changes.

## [Do all container workloads work well with ECI?](#do-all-container-workloads-work-well-with-eci)

Most container workloads run without issues when ECI is turned on. However, some advanced workloads that require specific kernel-level access may not work. For details about which workloads are affected, see [ECI limitations](https://docs.docker.com/enterprise/security/hardened-desktop/enhanced-container-isolation/limitations/).

## [Why not just restrict usage of the `--privileged` flag?](#why-not-just-restrict-usage-of-the---privileged-flag)

Privileged containers serve legitimate purposes like Docker-in-Docker, Kubernetes-in-Docker, and accessing hardware devices. ECI provides a better solution by allowing these advanced workloads to run securely while preventing them from compromising the Docker Desktop VM.

## [Does ECI affect container performance?](#does-eci-affect-container-performance)

ECI has minimal impact on container performance. The only exception is containers that perform many `mount` and `umount` system calls, as these are inspected by the Sysbox runtime for security. Most development workloads see no noticeable performance difference.

## [Can I override the container runtime with ECI turned on?](#can-i-override-the-container-runtime-with-eci-turned-on)

No. When ECI is turned on, all containers use the Sysbox runtime regardless of any `--runtime` flags:

```console
$ docker run --runtime=runc alpine echo "test"
# This still uses sysbox-runc, not runc
```

The `--runtime` flag is ignored to prevent users from bypassing ECI security by running containers as true root in the Docker Desktop VM.

## [Does ECI protect containers created before turning it on?](#does-eci-protect-containers-created-before-turning-it-on)

No. ECI only protects containers created after it's turned on. Remove existing containers before turning on ECI:

```console
$ docker stop $(docker ps -q)
$ docker rm $(docker ps -aq)
```

For more details, see [Enable Enhanced Container Isolation](https://docs.docker.com/enterprise/security/hardened-desktop/enhanced-container-isolation/enable-eci/).

## [Which containers does ECI protect?](#which-containers-does-eci-protect)

ECI protection varies by container type and Docker Desktop version:

### [Always protected](#always-protected)

- Containers created with `docker run` and `docker create`
- Containers using the `docker-container` build driver

### [Version dependent](#version-dependent)

- Docker Build: Protected in Docker Desktop 4.30+ (except WSL 2)
- Kubernetes: Protected in Docker Desktop 4.38+ when using the kind provisioner

### [Not protected](#not-protected)

- Docker Extensions
- Docker Debug containers
- Kubernetes with Kubeadm provisioner

For complete details, see [ECI limitations](https://docs.docker.com/enterprise/security/hardened-desktop/enhanced-container-isolation/limitations/).

## [Can I mount the Docker socket with ECI turned on?](#can-i-mount-the-docker-socket-with-eci-turned-on)

By default, no. ECI blocks Docker socket bind mounts for security. However, you can configure exceptions for trusted images like Testcontainers.

For configuration details, see [Configure Docker socket exceptions](https://docs.docker.com/enterprise/security/hardened-desktop/enhanced-container-isolation/config/).

## [What bind mounts does ECI restrict?](#what-bind-mounts-does-eci-restrict)

ECI restricts bind mounts of Docker Desktop VM directories but allows host directory mounts configured in Docker Desktop Settings.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/enterprise/security/hardened-desktop/enhanced-container-isolation/faq.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fenterprise%2fsecurity%2fhardened-desktop%2fenhanced-container-isolation%2ffaq%2f\&labels=status%2Ftriage)

Table of contents
