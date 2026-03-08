Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# CIS Benchmark

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [What is the CIS Docker Benchmark?](#what-is-the-cis-docker-benchmark)

The [CIS Docker Benchmark](https://www.cisecurity.org/benchmark/docker) is part of the globally recognized CIS Benchmarks, developed by the [Center for Internet Security (CIS)](https://www.cisecurity.org/). It defines recommended secure configurations for all aspects of the Docker container ecosystem, including the container host, Docker daemon, container images, and the container runtime.

## [Why CIS Benchmark compliance matters](#why-cis-benchmark-compliance-matters)

Following the CIS Docker Benchmark helps organizations:

- Reduce security risk with widely recognized hardening guidance.
- Meet regulatory or contractual requirements that reference CIS controls.
- Standardize image and Dockerfile practices across teams.
- Demonstrate audit readiness with configuration decisions grounded in a public standard.

## [How Docker Hardened Images comply with the CIS Benchmark](#how-docker-hardened-images-comply-with-the-cis-benchmark)

Docker Hardened Images (DHIs) are designed with security in mind and are verified to be compliant with the relevant controls from the latest CIS Docker Benchmark (v1.8.0) for the scope that applies to container images and Dockerfile configuration.

CIS-compliant DHIs are compliant with all controls in Section 4, with the sole exception of the control requiring Docker Content Trust (DCT), which [Docker officially retired](https://www.docker.com/blog/retiring-docker-content-trust/). Instead, DHIs are [signed](https://docs.docker.com/dhi/core-concepts/signatures/) using Cosign, providing an even higher level of authenticity and integrity. By starting from a CIS-compliant DHI, teams can adopt image-level best practices from the benchmark more quickly and confidently.

> Note
>
> The CIS Docker Benchmark also includes controls for the host, daemon, and runtime. CIS-compliant DHIs address only the image and Dockerfile scope (Section 4). Overall compliance still depends on how you configure and operate the broader environment.

## [Identify CIS-compliant images](#identify-cis-compliant-images)

CIS-compliant images are labeled as **CIS** in the Docker Hardened Images catalog. To find them, [explore images](https://docs.docker.com/dhi/how-to/explore/) and look for the **CIS** designation on individual listings.

## [Get the benchmark](#get-the-benchmark)

Download the latest CIS Docker Benchmark directly from CIS: <https://www.cisecurity.org/benchmark/docker>

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/dhi/core-concepts/cis.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fdhi%2fcore-concepts%2fcis%2f\&labels=status%2Ftriage)

Table of contents
