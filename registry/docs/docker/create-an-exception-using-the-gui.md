Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Create an exception using the GUI

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

The Docker Scout Dashboard and Docker Desktop provide a user-friendly interface for creating [exceptions](https://docs.docker.com/scout/explore/exceptions/) for vulnerabilities found in container images. Exceptions let you acknowledge accepted risks or address false positives in image analysis.

## [Prerequisites](#prerequisites)

To create an in the Docker Scout Dashboard or Docker Desktop, you need a Docker account with **Editor** or **Owner** permissions for the Docker organization that owns the image.

## [Steps](#steps)

To create an exception for a vulnerability in an image using the Docker Scout Dashboard or Docker Desktop:

Docker Scout Dashboard Docker Desktop

1. Go to the [Images page](https://scout.docker.com/reports/images).
2. Select the image tag that contains the vulnerability you want to create an exception for.
3. Open the **Image layers** tab.
4. Select the layer that contains the vulnerability you want to create an exception for.
5. In the **Vulnerabilities** tab, find the vulnerability you want to create an exception for. Vulnerabilities are grouped by package. Find the package that contains the vulnerability you want to create an exception for, and then expand the package.
6. Select the **Create exception** button next to the vulnerability.

Selecting the **Create exception** button opens the **Create exception** side panel. In this panel, you can provide the details of the exception:

- **Exception type**: The type of exception. The only supported types are:

  - **Accepted risk**: The vulnerability is not addressed due to its minimal security risk, high remediation costs, dependence on an upstream fix, or similar.

  - **False positive**: The vulnerability presents no security risk in your specific use case, configuration, or because of measures in place that block exploitation

    If you select **False positive**, you must provide a justification for why the vulnerability is a false positive:

- **Additional details**: Any additional information that you want to provide about the exception.

- **Scope**: The scope of the exception. The scope can be:

  - **Image**: The exception applies to the selected image.
  - **All images in repository**: The exception applies to all images in the repository.
  - **Specific repository**: The exception applies to all images in the specified repositories.
  - **All images in my organization**: The exception applies to all images in your organization.

- **Package scope**: The scope of the exception. The package scope can be:

  - **Selected package**: The exception applies to the selected package.
  - **Any packages**: The exception applies to all packages vulnerable to this CVE.

When you've filled in the details, select the **Create** button to create the exception.

The exception is now created and factored into the analysis results for the images that you selected. The exception is also listed on the **Exceptions** tab of the [Vulnerabilities page](https://scout.docker.com/reports/vulnerabilities/exceptions) in the Docker Scout Dashboard.

1. Open the **Images** view in Docker Desktop.
2. Open the **Hub** tab.
3. Select the image tag that contains the vulnerability you want to create an exception for.
4. Select the layer that contains the vulnerability you want to create an exception for.
5. In the **Vulnerabilities** tab, find the vulnerability you want to create an exception for.
6. Select the **Create exception** button next to the vulnerability.

Selecting the **Create exception** button opens the **Create exception** side panel. In this panel, you can provide the details of the exception:

- **Exception type**: The type of exception. The only supported types are:

  - **Accepted risk**: The vulnerability is not addressed due to its minimal security risk, high remediation costs, dependence on an upstream fix, or similar.

  - **False positive**: The vulnerability presents no security risk in your specific use case, configuration, or because of measures in place that block exploitation

    If you select **False positive**, you must provide a justification for why the vulnerability is a false positive:

- **Additional details**: Any additional information that you want to provide about the exception.

- **Scope**: The scope of the exception. The scope can be:

  - **Image**: The exception applies to the selected image.
  - **All images in repository**: The exception applies to all images in the repository.
  - **Specific repository**: The exception applies to all images in the specified repositories.
  - **All images in my organization**: The exception applies to all images in your organization.

- **Package scope**: The scope of the exception. The package scope can be:

  - **Selected package**: The exception applies to the selected package.
  - **Any packages**: The exception applies to all packages vulnerable to this CVE.

When you've filled in the details, select the **Create** button to create the exception.

The exception is now created and factored into the analysis results for the images that you selected. The exception is also listed on the **Exceptions** tab of the [Vulnerabilities page](https://scout.docker.com/reports/vulnerabilities/exceptions) in the Docker Scout Dashboard.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/scout/how-tos/create-exceptions-gui.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fscout%2fhow-tos%2fcreate-exceptions-gui%2f\&labels=status%2Ftriage)

Table of contents
