When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# What are hardened images and why use them?

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

In today’s diverse software environments, container images are often designed for flexibility and broad compatibility. While that makes them ideal for many use cases, it can also result in images that include more components than needed for specific workloads. Docker Hardened Images take a minimal-by-design approach to help reduce image size, limit the attack surface, and streamline security and compliance workflows.

Hardened images solve this by minimizing what's in the container image. Less software means fewer vulnerabilities, faster deployments, and fewer red dashboards to chase down every week.

For platform engineers and security teams, hardened images offer a way out of the CVE triage cycle, letting you focus on delivering secure, compliant infrastructure without constant firefighting.

## [What is a hardened image?](#what-is-a-hardened-image)

A hardened image is a container image that has been deliberately minimized and secured to reduce vulnerabilities and meet stringent security and compliance requirements. Unlike standard images, which may include non-essential components that increase risk, hardened images are streamlined to include only what’s needed to run your application securely.

## [Benefits of hardened images](#benefits-of-hardened-images)

- Reduced attack surface: By removing non-essential components, hardened images limit potential entry points for attackers.
- Improved security posture: Regular updates and vulnerability scans help ensure hardened images remain secure over time.
- Compliance facilitation: Inclusion of signed metadata like SBOMs supports meeting regulatory and organizational compliance standards.
- Operational efficiency: Smaller image sizes lead to faster pulls, lower runtime overhead, and reduced cloud resource costs.

## [What is a Docker Hardened Image?](#what-is-a-docker-hardened-image)

Docker Hardened Images (DHIs) take hardened images even further by combining minimal, secure design with enterprise-grade support and tooling. Built with security at the core, these images are continuously maintained, tested, and validated to meet today’s toughest software supply chain and compliance standards.

Docker Hardened Images are secure by default, minimal by design, and maintained so you don’t have to.

## [How Docker Hardened Images differ from generic hardened images](#how-docker-hardened-images-differ-from-generic-hardened-images)

- SLSA-compliant builds: Docker Hardened Images are built to meet [SLSA Build Level 3](https://docs.docker.com/dhi/core-concepts/slsa/), ensuring a tamper-resistant, verifiable, and auditable build process that protects against supply chain threats.

- Distroless approach: Unlike traditional base images that bundle an entire OS with shells, package managers, and debugging tools, [distroless images](https://docs.docker.com/dhi/core-concepts/distroless/) retain only the minimal OS components required to run your application. By excluding unnecessary tooling and libraries, they reduce the attack surface by up to 95% and can improve performance and image size.

- Continuous maintenance: All DHIs are continuously monitored and updated to maintain near-zero known exploitable [CVEs](https://docs.docker.com/dhi/core-concepts/cves/), helping your teams avoid patch fatigue and surprise alerts.

- Compliance-ready: Each image includes cryptographically signed metadata:

  - [SBOMs](https://docs.docker.com/dhi/core-concepts/sbom/) that show what's in the image
  - [VEX documents](https://docs.docker.com/dhi/core-concepts/vex/) to identify which vulnerabilities are actually exploitable
  - [Build provenance](https://docs.docker.com/dhi/core-concepts/provenance/) that proves how and where the image was built

- Compatibility-focused design: Docker Hardened Images provide a minimal runtime environment while maintaining compatibility with common Linux distributions. They remove non-essential components like shells and package managers to enhance security, yet retain a small base layer built on familiar distribution standards. Images are typically available with musl libc (Alpine-based) and glibc (Debian-based), supporting a broad range of application compatibility needs.

## [Why use Docker Hardened Images?](#why-use-docker-hardened-images)

Docker Hardened Images (DHIs) are secure by default, minimal by design, and maintained so you don't have to. They offer:

- Images built for peace of mind: Ultra-minimal and distroless, DHIs eliminate up to 95% of the traditional container attack surface.
- No more patch panic: With continuous CVE scanning and SLA-backed remediation, Docker helps you stay ahead of threats.
- Audit-ready images: All DHIs include signed SBOMs, VEX, and provenance that support security and compliance workflows.
- Images that work with your stack: Available in Alpine and Debian flavors, DHIs drop into your existing Dockerfiles and pipelines.
- Images backed by enterprise support: Get peace of mind with Docker's support and rapid response to critical vulnerabilities.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/dhi/explore/what.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fdhi%2fexplore%2fwhat%2f\&labels=status%2Ftriage)

Table of contents
