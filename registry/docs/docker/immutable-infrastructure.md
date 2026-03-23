When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Immutable infrastructure

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Immutable infrastructure is a security and operations model where components such as servers, containers, and images are never modified after deployment. Instead of patching or reconfiguring live systems, you replace them entirely with new versions.

When using Docker Hardened Images, immutability is a best practice that reinforces the security posture of your software supply chain.

## [Why immutability matters](#why-immutability-matters)

Mutable systems are harder to secure and audit. Live patching or manual updates introduce risks such as:

- Configuration drift
- Untracked changes
- Inconsistent environments
- Increased attack surface

Immutable infrastructure solves this by making changes only through controlled, repeatable builds and deployments.

## [How Docker Hardened Images support immutability](#how-docker-hardened-images-support-immutability)

Docker Hardened Images are built to be minimal, locked-down, and non-interactive, which discourages in-place modification. For example:

- Many DHI images exclude shells, package managers, and debugging tools
- DHI images are designed to be scanned and signed before deployment
- DHI users are encouraged to rebuild and redeploy images rather than patch running containers

This design aligns with immutable practices and ensures that:

- Updates go through the CI/CD pipeline
- All changes are versioned and auditable
- Systems can be rolled back or reproduced consistently

## [Immutable patterns in practice](#immutable-patterns-in-practice)

Some common patterns that leverage immutability include:

- Container replacement: Instead of logging into a container to fix a bug or apply a patch, rebuild the image and redeploy it.
- Infrastructure as Code (IaC): Define your infrastructure and image configurations in version-controlled files.
- Blue/Green or Canary deployments: Roll out new images alongside old ones and gradually shift traffic to the new version.

By combining immutable infrastructure principles with hardened images, you create a predictable and secure deployment workflow that resists tampering and minimizes long-term risk.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/dhi/core-concepts/immutability.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fdhi%2fcore-concepts%2fimmutability%2f\&labels=status%2Ftriage)

Table of contents
