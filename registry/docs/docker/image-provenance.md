When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Image provenance

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [What is image provenance?](#what-is-image-provenance)

Image provenance refers to metadata that traces the origin, authorship, and integrity of a container image. It answers critical questions such as:

- Where did this image come from?
- Who built it?
- Has it been tampered with?

Provenance establishes a chain of custody, helping you verify that the image you're using is the result of a trusted and verifiable build process.

## [Why image provenance matters](#why-image-provenance-matters)

Provenance is foundational to securing your software supply chain. Without it, you risk:

- Running unverified or malicious images
- Failing to meet internal or regulatory compliance requirements
- Losing visibility into the components and workflows that produce your containers

With reliable provenance, you gain:

- Trust: Know that your images are authentic and unchanged.
- Traceability: Understand the full build process and source inputs.
- Auditability: Provide verifiable evidence of compliance and build integrity.

Provenance also supports automated policy enforcement and is a key requirement for frameworks like SLSA (Supply-chain Levels for Software Artifacts).

## [How Docker Hardened Images support provenance](#how-docker-hardened-images-support-provenance)

Docker Hardened Images (DHIs) are designed with built-in provenance to help you adopt secure-by-default practices and meet supply chain security standards.

### [Attestations](#attestations)

DHIs include [attestations](https://docs.docker.com/dhi/core-concepts/attestations/)—machine-readable metadata that describe how, when, and where the image was built. These are generated using industry standards such as [in-toto](https://in-toto.io/) and align with [SLSA provenance](https://slsa.dev/spec/v1.0/provenance/).

Attestations allow you to:

- Validate that builds followed the expected steps
- Confirm that inputs and environments meet policy
- Trace the build process across systems and stages

### [Code signing](#code-signing)

Each Docker Hardened Image is cryptographically [signed](https://docs.docker.com/dhi/core-concepts/signatures/) and stored in the registry alongside its digest. These signatures are verifiable proofs of authenticity and are compatible with tools like `cosign`, Docker Scout, and Kubernetes admission controllers.

With image signatures, you can:

- Confirm that the image was published by Docker
- Detect if an image has been modified or republished
- Enforce signature validation in CI/CD or production deployments

## [Additional resources](#additional-resources)

- [Provenance attestations](/build/metadata/attestations/slsa-provenance/)
- [Image signatures](https://docs.docker.com/dhi/core-concepts/signatures/)
- [Attestations overview](https://docs.docker.com/dhi/core-concepts/attestations/)

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/dhi/core-concepts/provenance.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fdhi%2fcore-concepts%2fprovenance%2f\&labels=status%2Ftriage)

Table of contents
