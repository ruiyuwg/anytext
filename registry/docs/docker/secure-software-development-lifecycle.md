Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Secure Software Development Lifecycle

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [What is a Secure Software Development Lifecycle?](#what-is-a-secure-software-development-lifecycle)

A Secure Software Development Lifecycle (SSDLC) integrates security practices into every phase of software delivery, from design and development to deployment and monitoring. It’s not just about writing secure code, but about embedding security throughout the tools, environments, and workflows used to build and ship software.

SSDLC practices are often guided by compliance frameworks, organizational policies, and supply chain security standards such as SLSA (Supply-chain Levels for Software Artifacts) or NIST SSDF.

## [Why SSDLC matters](#why-ssdlc-matters)

Modern applications depend on fast, iterative development, but rapid delivery often introduces security risks if protections aren’t built in early. An SSDLC helps:

- Prevent vulnerabilities before they reach production
- Ensure compliance through traceable and auditable workflows
- Reduce operational risk by maintaining consistent security standards
- Enable secure automation in CI/CD pipelines and cloud-native environments

By making security a first-class citizen in each stage of software delivery, organizations can shift left and reduce both cost and complexity.

## [How Docker supports a secure SDLC](#how-docker-supports-a-secure-sdlc)

Docker provides tools and secure content that make SSDLC practices easier to adopt across the container lifecycle. With [Docker Hardened Images](https://docs.docker.com/dhi/) (DHIs), [Docker Debug](/reference/cli/docker/debug/), and [Docker Scout](https://docs.docker.com/scout/), teams can add security without losing velocity.

### [Plan and design](#plan-and-design)

During planning, teams define architectural constraints, compliance goals, and threat models. Docker Hardened Images help at this stage by providing:

- Secure-by-default base images for common languages and runtimes
- Verified metadata including SBOMs, provenance, and VEX documents
- Support for both glibc and musl across multiple Linux distributions

You can use DHI metadata and attestations to support design reviews, threat modeling, or architecture sign-offs.

### [Develop](#develop)

In development, security should be transparent and easy to apply. Docker Hardened Images support secure-by-default development:

- Dev variants include shells, package managers, and compilers for convenience
- Minimal runtime variants reduce attack surface in final images
- Multi-stage builds let you separate build-time tools from runtime environments

[Docker Debug](/reference/cli/docker/debug/) helps developers:

- Temporarily inject debugging tools into minimal containers
- Avoid modifying base images during troubleshooting
- Investigate issues securely, even in production-like environments

### [Build and test](#build-and-test)

Build pipelines are an ideal place to catch issues early. Docker Scout integrates with Docker Hub and the CLI to:

- Scan for known CVEs using multiple vulnerability databases
- Trace vulnerabilities to specific layers and dependencies
- Interpret signed VEX data to suppress known-irrelevant issues
- Export JSON scan reports for CI/CD workflows

Build pipelines that use Docker Hardened Images benefit from:

- Reproducible, signed images
- Minimal build surfaces to reduce exposure
- Built-in compliance with SLSA Build Level 3 standards

### [Release and deploy](#release-and-deploy)

Security automation is critical as you release software at scale. Docker supports this phase by enabling:

- Signature verification and provenance validation before deployment
- Policy enforcement gates using Docker Scout
- Safe, non-invasive container inspection using Docker Debug

DHIs ship with the metadata and signatures required to automate image verification during deployment.

### [Monitor and improve](#monitor-and-improve)

Security continues after release. With Docker tools, you can:

- Continuously monitor image vulnerabilities through Docker Hub
- Get CVE remediation guidance and patch visibility using Docker Scout
- Receive updated DHI images with rebuilt and re-signed secure layers
- Debug running workloads with Docker Debug without modifying the image

## [Summary](#summary)

Docker helps teams embed security throughout the SSDLC by combining secure content (DHIs) with developer-friendly tooling (Docker Scout and Docker Debug). These integrations promote secure practices without introducing friction, making it easier to adopt compliance and supply chain security across your software delivery lifecycle.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/dhi/core-concepts/ssdlc.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fdhi%2fcore-concepts%2fssdlc%2f\&labels=status%2Ftriage)

Table of contents
