Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Guides](https://docs.docker.com/guides/)

- [Get started](/get-started/)
- [Manuals](/manuals/)
- [Reference](/reference/)

[Develop and Deploy Laravel applications with Docker Compose](https://docs.docker.com/guides/frameworks/laravel/)

Learn how to efficiently set up Laravel development and production environments using Docker Compose.

![](https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg "PHP") PHP Frameworks

30 minutes

[1](https://docs.docker.com/guides/frameworks/laravel/prerequisites/)

[Prerequisites for Setting Up Laravel with Docker Compose](https://docs.docker.com/guides/frameworks/laravel/prerequisites/)

[2](https://docs.docker.com/guides/frameworks/laravel/production-setup/)

[Laravel Production Setup with Docker Compose](https://docs.docker.com/guides/frameworks/laravel/production-setup/)

[3](https://docs.docker.com/guides/frameworks/laravel/development-setup/)

[Laravel Development Setup with Docker Compose](https://docs.docker.com/guides/frameworks/laravel/development-setup/)

[4](https://docs.docker.com/guides/frameworks/laravel/common-questions/)

[Common Questions on Using Laravel with Docker](https://docs.docker.com/guides/frameworks/laravel/common-questions/)

Resources:

- [Laravel](https://laravel.com/)
- [Docker Compose](/compose/)
- [Use Compose in production](/compose/how-tos/production/)
- [Repository with examples](https://github.com/dockersamples/laravel-docker-examples)

[« Back to all guides](/guides/)

# Common Questions on Using Laravel with Docker

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [1. Why should I use Docker Compose for Laravel?](#1-why-should-i-use-docker-compose-for-laravel)

Docker Compose is a powerful tool for managing multi-container environments, particularly in development due to its simplicity. With Docker Compose, you can define and connect all necessary services for Laravel, such as PHP, Nginx, and databases, in a single configuration (`compose.*.yaml`). This setup ensures consistency across development, testing, and production environments, streamlining onboarding and reducing discrepancies between local and server setups.

While Docker Compose is a great choice for development, tools like **Docker Swarm** or **Kubernetes** offer advanced scaling and orchestration features, which may be beneficial for complex production deployments.

## [2. How do I debug my Laravel application with Docker Compose?](#2-how-do-i-debug-my-laravel-application-with-docker-compose)

To debug your Laravel application in a Docker environment, use **Xdebug**. In the development setup, Xdebug is installed in the `php-fpm` container to enable debugging. Ensure Xdebug is enabled in your `compose.dev.yaml` file by setting the environment variable `XDEBUG_ENABLED=true` and configuring your IDE (e.g., Visual Studio Code or PHPStorm) to connect to the remote container for debugging.

## [3. Can I use Docker Compose with databases other than PostgreSQL?](#3-can-i-use-docker-compose-with-databases-other-than-postgresql)

Yes, Docker Compose supports various database services for Laravel. While PostgreSQL is used in the examples, you can easily substitute **MySQL**, **MariaDB**, or even **SQLite**. Update the `compose.*.yaml` file to specify the required Docker image and adjust your `.env` file to reflect the new database configuration.

## [4. How can I persist data in development and production?](#4-how-can-i-persist-data-in-development-and-production)

In both development and production, Docker volumes are used to persist data. For instance, in the `compose.*.yaml` file, the `postgres-data-*` volume stores PostgreSQL data, ensuring that data is retained even if the container restarts. You can also define named volumes for other services where data persistence is essential.

## [5. What is the difference between development and production Docker configurations?](#5-what-is-the-difference-between-development-and-production-docker-configurations)

In a development environment, Docker configurations include tools that streamline coding and debugging, such as Xdebug for debugging, and volume mounts to enable real-time code updates without requiring image rebuilds.

In production, the configuration is optimized for performance, security, and efficiency. This setup uses multi-stage builds to keep the image lightweight and includes only essential tools, packages, and libraries.

It’s recommended to use `alpine`-based images in production for smaller image sizes, enhancing deployment speed and security.

Additionally, consider using [Docker Scout](https://docs.docker.com/scout/) to detect and analyze vulnerabilities, especially in production environments.

For additional information about using Docker Compose in production, see [this guide](/compose/how-tos/production/).

[Edit this page](https://github.com/docker/docs/edit/main/content/guides/frameworks/laravel/common-questions.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fguides%2fframeworks%2flaravel%2fcommon-questions%2f\&labels=status%2Ftriage)

Table of contents
