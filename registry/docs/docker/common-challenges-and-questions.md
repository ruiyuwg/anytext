When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Guides](https://docs.docker.com/guides/)

- [Get started](/get-started/)
- [Manuals](/manuals/)
- [Reference](/reference/)

[Mastering Testcontainers Cloud by Docker: streamlining integration testing with containers](https://docs.docker.com/guides/testcontainers-cloud/)

Automate, scale, and optimize testing workflows with Testcontainers Cloud

Product demo

12 minutes

[1](https://docs.docker.com/guides/testcontainers-cloud/why/)

[Why Testcontainers Cloud?](https://docs.docker.com/guides/testcontainers-cloud/why/)

[2](https://docs.docker.com/guides/testcontainers-cloud/demo-local/)

[Setting up Testcontainers Cloud by Docker](https://docs.docker.com/guides/testcontainers-cloud/demo-local/)

[3](https://docs.docker.com/guides/testcontainers-cloud/demo-ci/)

[Configuring Testcontainers Cloud in the CI Pipeline](https://docs.docker.com/guides/testcontainers-cloud/demo-ci/)

[4](https://docs.docker.com/guides/testcontainers-cloud/common-questions/)

[Common challenges and questions](https://docs.docker.com/guides/testcontainers-cloud/common-questions/)

Resources:

- [Testcontainers Guides](https://testcontainers.com/guides)
- [Testcontainers Best Practices](https://www.docker.com/blog/testcontainers-best-practices/)
- [Simple local development with Testcontainers Desktop](https://testcontainers.com/guides/simple-local-development-with-testcontainers-desktop/)
- [Streamlining Local Development with Dev Containers and Testcontainers Cloud](https://www.docker.com/blog/streamlining-local-development-with-dev-containers-and-testcontainers-cloud/)
- [Running Testcontainers Tests Using GitHub Actions and Testcontainers Cloud](https://www.docker.com/blog/running-testcontainers-tests-using-github-actions/)
- [Testcontainers Cloud on the Docker Blog](https://www.docker.com/search/?_sf_s=testcontainers%20cloud)

[« Back to all guides](/guides/)

# Common challenges and questions

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

### [How is Testcontainers Cloud different from the open-source Testcontainers framework?](#how-is-testcontainers-cloud-different-from-the-open-source-testcontainers-framework)

While the open-source Testcontainers is a library that provides a lightweight APIs for bootstrapping local development and test dependencies with real services wrapped in Docker containers, Testcontainers Cloud provides a cloud runtime for these containers. This reduces the resource strain on local environments and provides more scalability, especially in CI/CD workflows, that enables consistent Testcontainers experience across the organization.

### [What types of containers can I run with Testcontainers Cloud?](#what-types-of-containers-can-i-run-with-testcontainers-cloud)

Testcontainers Cloud supports any containers you would typically use with the Testcontainers framework, including databases (PostgreSQL, MySQL, MongoDB), message brokers (Kafka, RabbitMQ), and other services required for integration testing.

### [Do I need to change my existing test code to use Testcontainers Cloud?](#do-i-need-to-change-my-existing-test-code-to-use-testcontainers-cloud)

No, you don't need to change your existing test code. Testcontainers Cloud integrates seamlessly with the open-source Testcontainers framework. Once the cloud configuration is set up, it automatically manages the containers in the cloud without requiring code changes.

### [How do I integrate Testcontainers Cloud into my project?](#how-do-i-integrate-testcontainers-cloud-into-my-project)

To integrate Testcontainers Cloud, you need to install the Testcontainers Desktop app and select run with Testcontainers Cloud option in the menu. In CI you’ll need to add a workflow step that downloads Testcontainers Cloud agent. No code changes are required beyond enabling Cloud runtime via the Testcontainers Desktop app locally or installing Testcontainers Cloud agent in CI.

### [Can I use Testcontainers Cloud in a CI/CD pipeline?](#can-i-use-testcontainers-cloud-in-a-cicd-pipeline)

Yes, Testcontainers Cloud is designed to work efficiently in CI/CD pipelines. It helps reduce build times and resource bottlenecks by offloading containers that you spin up with Testcontainers library to the cloud, making it a perfect fit for continuous testing environments.

### [What are the benefits of using Testcontainers Cloud?](#what-are-the-benefits-of-using-testcontainers-cloud)

The key benefits include reduced resource usage on local machines and CI servers, scalability (run more containers without performance degradation), consistent testing environments, centralized monitoring, ease of CI configuration with removed security concerns of running Docker-in-Docker or a privileged daemon.

### [Does Testcontainers Cloud support all programming languages?](#does-testcontainers-cloud-support-all-programming-languages)

Testcontainers Cloud supports any language that works with the open-source Testcontainers libraries, including Java, Python, Node.js, Go, and others. As long as your project uses Testcontainers, it can be offloaded to Testcontainers Cloud.

### [How is container cleanup handled in Testcontainers Cloud?](#how-is-container-cleanup-handled-in-testcontainers-cloud)

While Testcontainers library automatically handles container lifecycle management, Testcontainers Cloud manages the allocated cloud worker lifetime. This means that containers are spun up, monitored, and cleaned up after tests are completed by Testcontainers library, and the worker where these containers have being running will be removed automatically after the ~35 min idle period by Testcontainers Cloud. This approach frees developers from manually managing containers and associated cloud resources.

### [Is there a free tier or pricing model for Testcontainers Cloud?](#is-there-a-free-tier-or-pricing-model-for-testcontainers-cloud)

Pricing details for Testcontainers Cloud can be found on the [pricing page](https://testcontainers.com/cloud/pricing/).

[Edit this page](https://github.com/docker/docs/edit/main/content/guides/testcontainers-cloud/common-questions.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fguides%2ftestcontainers-cloud%2fcommon-questions%2f\&labels=status%2Ftriage)

Table of contents
