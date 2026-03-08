Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Deprecated and retired Docker products and features

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

This document provides an overview of Docker features, products, and open-source projects that have been deprecated, retired, or transitioned.

> Note
>
> This page does not cover deprecated and removed Docker Engine features. For a detailed list of deprecated Docker Engine features, refer to the [Docker Engine Deprecated Features documentation](https://docs.docker.com/engine/deprecated/).

## [Products and features](#products-and-features)

Support for these deprecated or retired features is no longer provided by Docker, Inc. The projects that have been transitioned to third parties continue to receive updates from their new maintainers.

### [Docker Machine](#docker-machine)

Docker Machine was a tool for provisioning and managing Docker hosts across various platforms, including virtual machines and cloud providers. It is no longer maintained, and users are encouraged to use [Docker Desktop](https://docs.docker.com/desktop/) or [Docker Engine](https://docs.docker.com/engine/) directly on supported platforms. Machine's approach to creating and configuring hosts has been superseded by more modern workflows that integrate more closely with Docker Desktop.

### [Docker Toolbox](#docker-toolbox)

Docker Toolbox was used on older systems where Docker Desktop could not run. It bundled Docker Machine, Docker Engine, and Docker Compose into a single installer. Toolbox is no longer maintained and is effectively replaced by [Docker Desktop](https://docs.docker.com/desktop/) on current systems. References to Docker Toolbox occasionally appear in older documentation or community tutorials, but it is not recommended for new installations.

### [Docker Cloud integrations](#docker-cloud-integrations)

Docker previously offered integrations for Amazon's Elastic Container Service (ECS) and Azure Container Instances (ACI) to streamline container workflows. These integrations have been deprecated, and users should now rely on native cloud tools or third-party solutions to manage their workloads. The move toward platform-specific or universal orchestration tools reduced the need for specialized Docker Cloud integrations.

You can still view the relevant documentation for these integrations in the [Compose CLI repository](https://github.com/docker-archive/compose-cli/tree/main/docs).

### [Docker Enterprise Edition](#docker-enterprise-edition)

Docker Enterprise Edition (EE) was Docker's commercial platform for deploying and managing large-scale container environments. It was acquired by Mirantis in 2019, and users looking for enterprise-level functionality can now explore Mirantis Kubernetes Engine or other products offered by Mirantis. Much of the technology and features found in Docker EE have been absorbed into the Mirantis product line.

> Note
>
> For information about enterprise-level features offered by Docker today, see the [Docker Business subscription](https://www.docker.com/pricing/).

### [Docker Data Center and Docker Trusted Registry](#docker-data-center-and-docker-trusted-registry)

Docker Data Center (DDC) was an umbrella term that encompassed Docker Universal Control Plane (UCP) and Docker Trusted Registry (DTR). These components provided a full-stack solution for managing containers, security, and registry services in enterprise environments. They are now under the Mirantis portfolio following the Docker Enterprise acquisition. Users still encountering references to DDC, UCP, or DTR should refer to Mirantis's documentation for guidance on modern equivalents.

### [Dev Environments](#dev-environments)

Dev Environments was a feature introduced in Docker Desktop that allowed developers to spin up development environments quickly. It was deprecated and removed from Docker Desktop version 4.42 and later. Similar workflows can be achieved through Docker Compose or by creating custom configurations tailored to specific project requirements.

### [GitHub Copilot extension](#github-copilot-extension)

The Docker for GitHub Copilot extension integrated Docker capabilities with GitHub Copilot Chat, helping developers containerize applications, generate Docker assets, and analyze vulnerabilities through conversational prompts. The extension was available in early access on the GitHub Marketplace. GitHub [deprecated Copilot Extensions](https://github.blog/changelog/2025-09-24-deprecate-github-copilot-extensions-github-apps/) which led to the retirement of the Docker for GitHub Copilot extension. If you're looking for AI-assisted Docker workflows, explore the Docker MCP Toolkit and MCP Catalog, or use Ask Gordon in Docker Desktop and the Docker CLI.

### [Enhanced Service Account add-ons](#enhanced-service-account-add-ons)

Enhanced Service Account add-ons provided tiered pull rate limits for automated workflows and service accounts accessing Docker Hub.

Docker recommends transitioning to [Organization Access Tokens (OATs)](https://docs.docker.com/enterprise/security/access-tokens/), which provide secure, programmatic access to Docker Hub with granular repository permissions, token expiration, and better security auditing. OATs are included with Docker Team and Business subscriptions and offer similar functionality without requiring separate add-on purchases.

## [Open source projects](#open-source-projects)

Several open-source projects originally maintained by Docker have been archived, discontinued, or transitioned to other maintainers or organizations.

### [Registry (now CNCF Distribution)](#registry-now-cncf-distribution)

The Docker Registry served as the open-source implementation of a container image registry. It was donated to the Cloud Native Computing Foundation (CNCF) in 2019 and is maintained under the name "Distribution." It remains a cornerstone for managing and distributing container images.

[CNCF Distribution](https://github.com/distribution/distribution)

### [Docker Compose v1 (replaced by Compose v2)](#docker-compose-v1-replaced-by-compose-v2)

Docker Compose v1 (`docker-compose`), a Python-based tool for defining multi-container applications, has been superseded by Compose v2 (`docker compose`), which is written in Go and integrates with the Docker CLI. Compose v1 is no longer maintained, and users should migrate to Compose v2.

[Compose v2 Documentation](https://docs.docker.com/compose/)

### [InfraKit](#infrakit)

InfraKit was an open-source toolkit designed to manage declarative infrastructure and automate container deployments. It has been archived, and users are encouraged to explore tools such as Terraform for infrastructure provisioning and orchestration.

[InfraKit GitHub Repository](https://github.com/docker/infrakit)

### [Docker Notary (now CNCF Notary)](#docker-notary-now-cncf-notary)

Docker Notary was a system for signing and verifying the authenticity of container content. It was donated to the CNCF in 2017 and continues to be developed as "Notary." Users seeking secure content verification should consult the CNCF Notary project.

[CNCF Notary](https://github.com/notaryproject/notary)

### [SwarmKit](#swarmkit)

SwarmKit powers Docker Swarm mode by providing orchestration for container deployments. While Swarm mode remains functional, development has slowed in favor of Kubernetes-based solutions. Individuals evaluating container orchestration options should investigate whether SwarmKit meets modern workload requirements.

[SwarmKit GitHub Repository](https://github.com/docker/swarmkit)

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/retired.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fretired%2f\&labels=status%2Ftriage)

Table of contents
