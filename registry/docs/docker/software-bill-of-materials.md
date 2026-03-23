When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Guides](https://docs.docker.com/guides/)

- [Get started](/get-started/)
- [Manuals](/manuals/)
- [Reference](/reference/)

[Securing your software supply chain with Docker Scout](https://docs.docker.com/guides/docker-scout/)

Enhance container security by automating vulnerability detection and remediation.

Product demo

20 minutes

[1](https://docs.docker.com/guides/docker-scout/why/)

[Why Docker Scout?](https://docs.docker.com/guides/docker-scout/why/)

[2](https://docs.docker.com/guides/docker-scout/demo/)

[Demo](https://docs.docker.com/guides/docker-scout/demo/)

[3](https://docs.docker.com/guides/docker-scout/s3c/)

[Software supply chain security](https://docs.docker.com/guides/docker-scout/s3c/)

[4](https://docs.docker.com/guides/docker-scout/sbom/)

[Software Bill of Materials](https://docs.docker.com/guides/docker-scout/sbom/)

[5](https://docs.docker.com/guides/docker-scout/attestations/)

[Attestations](https://docs.docker.com/guides/docker-scout/attestations/)

[6](https://docs.docker.com/guides/docker-scout/remediation/)

[Remediation](https://docs.docker.com/guides/docker-scout/remediation/)

[7](https://docs.docker.com/guides/docker-scout/common-questions/)

[Common challenges and questions](https://docs.docker.com/guides/docker-scout/common-questions/)

Resources:

- [Docker Scout overview](/scout/)
- [Docker Scout quickstart](/scout/quickstart/)
- [Install Docker Scout](/scout/install/)

[« Back to all guides](/guides/)

# Software Bill of Materials

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

A Bill of Materials (BOM) is a list of materials, parts, and the quantities of each needed to manufacture a product. For example, a BOM for a computer might list the motherboard, CPU, RAM, power supply, storage devices, case, and other components, along with the quantities of each that are needed to build the computer.

A Software Bill of Materials (SBOM) is a list of all the components that make up a piece of software. This includes open source and third-party components, as well as any custom code that has been written for the software. An SBOM is similar to a BOM for a physical product, but for software.

In the context of software supply chain security, SBOMs can help with identifying and mitigating security and compliance risks in software. By knowing exactly what components are used in a piece of software, you can quickly identify and patch vulnerabilities in your components, or determine if a component is licensed in a way that is incompatible with your project.

## [Contents of an SBOM](#contents-of-an-sbom)

An SBOM typically includes the following information:

- The name of the software, such as the name of a library or framework, that the SBOM describes.
- The version of the software.
- The license under which the software is distributed.
- A list of other components that the software depends on.

## [How Docker Scout uses SBOMs](#how-docker-scout-uses-sboms)

Docker Scout uses SBOMs to determine the components that are used in a Docker image. When you analyze an image, Docker Scout will either use the SBOM that is attached to the image as an attestation, or it will generate an SBOM on the fly by analyzing the contents of the image.

The SBOM is cross-referenced with the [advisory database](https://docs.docker.com/scout/deep-dive/advisory-db-sources/) to determine if any of the components in the image have known vulnerabilities.

[Attestations »](https://docs.docker.com/guides/docker-scout/attestations/)

[Edit this page](https://github.com/docker/docs/edit/main/content/guides/docker-scout/sbom.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fguides%2fdocker-scout%2fsbom%2f\&labels=status%2Ftriage)

Table of contents
