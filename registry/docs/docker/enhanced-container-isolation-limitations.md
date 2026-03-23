When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Enhanced Container Isolation limitations

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Subscription: Business

For: Administrators

Enhanced Container Isolation has some platform-specific limitations and feature constraints. Understanding these limitations helps you plan your security strategy and set appropriate expectations.

## [WSL 2 security considerations](#wsl-2-security-considerations)

> Note
>
> Docker Desktop requires WSL 2 version 2.1.5 or later. Check your version with `wsl --version` and update with `wsl --update` if needed.

Enhanced Container Isolation provides different security levels depending on your Windows backend configuration.

The following table compares ECI on WSL 2 and ECI on Hyper-V:

Security feature

ECI on WSL

ECI on Hyper-V

Comment

Strongly secure containers

Yes

Yes

Makes it harder for malicious container workloads to breach the Docker Desktop Linux VM and host.

Docker Desktop Linux VM protected from user access

No

Yes

On WSL, users can access Docker Engine directly or bypass Docker Desktop security settings.

Docker Desktop Linux VM has a dedicated kernel

No

Yes

On WSL, Docker Desktop can't guarantee the integrity of kernel level configs.

WSL 2 security gaps include:

- Direct VM access: Users can bypass Docker Desktop security by accessing the VM directly: `wsl -d docker-desktop`. This gives users root access to modify Docker Engine settings and bypass Settings Management configurations.
- Shared kernel vulnerability: All WSL 2 distributions share the same Linux kernel instance. Other WSL distributions can modify kernel settings that affect Docker Desktop's security.

### [Recommendation](#recommendation)

Use Hyper-V backend for maximum security. WSL 2 offers better performance and resource utilization, but provides reduced security isolation.

## [Windows containers not supported](#windows-containers-not-supported)

ECI only works with Linux containers (Docker Desktop's default mode). Native Windows containers mode isn't supported.

## [Docker Build protection varies](#docker-build-protection-varies)

Docker Build protection depends on the driver and Docker Desktop version:

Build drive

Protection

Version requirements

`docker` (default)

Protected

Docker Desktop 4.30 and later (except WSL 2)

`docker` (legacy)

Not protected

Docker Desktop versions before 4.30

`docker-container`

Always protected

All Docker Desktop versions

The following Docker Build features don't work with ECI:

- `docker build --network=host`
- Docker Buildx entitlements: `network.host`, `security.insecure`

### [Recommendation](#recommendation-1)

Use `docker-container` build driver for builds requiring these features:

```console
$ docker buildx create --driver docker-container --use
$ docker buildx build --network=host .
```

## [Docker Desktop Kubernetes not protected](#docker-desktop-kubernetes-not-protected)

The integrated Kubernetes feature doesn't benefit from ECI protection. Malicious or privileged pods can compromise the Docker Desktop VM and bypass security controls.

### [Recommendation](#recommendation-2)

Use Kubernetes in Docker (KinD) for ECI-protected Kubernetes:

```console
$ kind create cluster
```

With ECI turned on, each Kubernetes node runs in an ECI-protected container, providing stronger isolation from the Docker Desktop VM.

## [Unprotected container types](#unprotected-container-types)

These container types currently don't benefit from ECI protection:

- Docker Extensions: Extension containers run without ECI protection
- Docker Debug: Docker Debug containers bypass ECI restrictions
- Kubernetes pods: When using Docker Desktop's integrated Kubernetes

### [Recommendation](#recommendation-3)

Only use extensions from trusted sources and avoid Docker Debug in security-sensitive environments.

## [Global command restrictions](#global-command-restrictions)

Command lists apply to all containers allowed to mount the Docker socket. You can't configure different command restrictions per container image.

## [Local-only images not supported](#local-only-images-not-supported)

You can't allow arbitrary local-only images (images not in a registry) to mount the Docker socket, unless they're:

- Derived from an allowed base image (with `allowDerivedImages: true`)
- Using the wildcard allowlist (`"*"`, Docker Desktop 4.36 and later)

## [Unsupported Docker commands](#unsupported-docker-commands)

These Docker commands aren't yet supported in command list restrictions:

- `compose`: Docker Compose commands
- `dev`: Development environment commands
- `extension`: Docker Extensions management
- `feedback`: Docker feedback submission
- `init`: Docker initialization commands
- `manifest`: Image manifest management
- `plugin`: Plugin management
- `sbom`: Software Bill of Materials
- `scout`: Docker Scout commands
- `trust`: Image trust management

## [Performance considerations](#performance-considerations)

### [Derived images impact](#derived-images-impact)

Enabling `allowDerivedImages: true` adds approximately 1 second to container startup time for image validation.

### [Registry dependencies](#registry-dependencies)

- Docker Desktop periodically fetches image digests from registries for validation
- Initial container starts require registry access to validate allowed images
- Network connectivity issues may cause delays in container startup

### [Image digest validation](#image-digest-validation)

When allowed images are updated in registries, local containers may be unexpectedly blocked until you refresh the local image:

```console
$ docker image rm <image>
$ docker pull <image>
```

## [Version compatibility](#version-compatibility)

ECI features have been introduced across different Docker Desktop versions:

- Docker Desktop 4.36 and later: Wildcard allowlist support (`"*"`) and improved derived images handling
- Docker Desktop 4.34 and later: Derived images support (`allowDerivedImages`)
- Docker Desktop 4.30 and later: Docker Build protection with default driver (except WSL 2)
- Docker Desktop 4.13 and later: Core ECI functionality

For the latest feature availability, use the most recent Docker Desktop version.

## [Production compatibility](#production-compatibility)

### [Container behavior differences](#container-behavior-differences)

Most containers run identically with and without ECI. However, some advanced workloads may behave differently:

- Containers requiring kernel module loading
- Workloads modifying global kernel settings (BPF, sysctl)
- Applications expecting specific privilege escalation behavior
- Tools requiring direct hardware device access

Test advanced workloads with ECI in development environments before production deployment to ensure compatibility.

### [Runtime considerations](#runtime-considerations)

Containers using the Sysbox runtime (with ECI) may have subtle differences compared to standard OCI runc runtime in production. These differences typically only affect privileged or system-level operations.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/enterprise/security/hardened-desktop/enhanced-container-isolation/limitations.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fenterprise%2fsecurity%2fhardened-desktop%2fenhanced-container-isolation%2flimitations%2f\&labels=status%2Ftriage)

Table of contents
