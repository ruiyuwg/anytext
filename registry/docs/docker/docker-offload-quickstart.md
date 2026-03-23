When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Docker Offload quickstart

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Availability: Early Access

Requires: Docker Desktop 4.50 and later

[Docker Offload](https://docs.docker.com/offload/about/) lets you build and run containers in the cloud while using your local Docker Desktop tools and workflow. This means faster builds, access to powerful cloud resources, and a seamless development experience.

This quickstart covers the steps developers need to get started with Docker Offload.

> Note
>
> If you're an organization owner, to get started you must [sign up](https://www.docker.com/products/docker-offload/) and subscribe your organization to use Docker Offload. After subscribing, see the following:
>
> - [Manage Docker products](https://docs.docker.com/admin/organization/manage-products/) to learn how to manage access for the developers in your organization.
> - [Usage and billing](https://docs.docker.com/offload/usage/) to learn how set up billing and monitor usage.

## [Prerequisites](#prerequisites)

- You must have [Docker Desktop](/desktop/) installed. Docker Offload works with Docker Desktop version 4.50 or later.
- You must have access to Docker Offload. Your organization owner must [sign up](https://www.docker.com/products/docker-offload/) your organization.
- You must have committed usage available or on-demand usage enabled for your organization. This is set up by your organization owner. For more details, see [Docker Offload usage and billing](/offload/usage/).

## [Step 1: Verify access to Docker Offload](#step-1-verify-access-to-docker-offload)

To access Docker Offload, you must be part of an organization that has subscribed to Docker Offload. As a developer, you can verify this by checking if the Docker Offload toggle appears in the Docker Desktop Dashboard header.

1. Start Docker Desktop and sign in.
2. In the Docker Desktop Dashboard header, look for the Docker Offload toggle.

![Offload toggle](https://docs.docker.com/offload/images/offload-toggle.png)

If you see the Docker Offload toggle, you have access to Docker Offload and can proceed to the next step. If you don't see the Docker Offload toggle, check if Docker Offload is disabled in your [Docker Desktop settings](https://docs.docker.com/offload/configuration/), and then contact your administrator to verify that your organization has subscribed to Docker Offload and that they have enabled access for your organization.

## [Step 2: Start Docker Offload](#step-2-start-docker-offload)

You can start Docker Offload from the CLI or in the header of the Docker Desktop Dashboard. The following steps describe how to start Docker Offload using the CLI.

1. Start Docker Desktop and sign in.

2. Open a terminal and run the following command to start Docker Offload:

   ```console
   $ docker offload start
   ```

   > Tip
   >
   > To learn more about the Docker Offload CLI commands, see the [Docker Offload CLI reference](/reference/cli/docker/offload/).

3. If you are a member of multiple organizations that have access to Docker Offload, you have the option to select a profile. The selected organization is responsible for any usage.

When Docker Offload is started, you'll see a cloud icon ( ![Offload mode icon](.././images/cloud-mode.png) ) in the Docker Desktop Dashboard header, and the Docker Desktop Dashboard appears purple. You can run `docker offload status` in a terminal to check the status of Docker Offload.

## [Step 3: Run a container with Docker Offload](#step-3-run-a-container-with-docker-offload)

After starting Docker Offload, Docker Desktop connects to a secure cloud environment that mirrors your local experience. When you run builds or containers, they execute remotely, but behave just like local ones.

To verify that Docker Offload is working, run a container:

```console
$ docker run --rm hello-world
```

If Docker Offload is working, you'll see `Hello from Docker!` in the terminal output.

## [Step 4: Monitor your Offload usage](#step-4-monitor-your-offload-usage)

When Docker Offload is started and you have started session (for example, you've ran a container), then you can see current session duration estimate in the Docker Desktop Dashboard footer next to the hourglass icon ( ![Offload session duration](.././images/hourglass-icon.png) ).

Also, when Docker Offload is started, you can view detailed session information by selecting **Offload** > **Insights** in the left navigation of the Docker Desktop Dashboard.

## [Step 5: Stop Docker Offload](#step-5-stop-docker-offload)

Docker Offload automatically [idles](https://docs.docker.com/offload/configuration/#understand-active-and-idle-states) after a period of inactivity. You can stop it at any time. To stop Docker Offload:

```console
$ docker offload stop
```

When you stop Docker Offload, the cloud environment is terminated and all running containers and images are removed. When Docker Offload has been idle for around 5 minutes, the environment is also terminated and all running containers and images are removed.

To start Docker Offload again, run the `docker offload start` command.

## [What's next](#whats-next)

Configure your idle timeout in Docker Desktop. For more information, see [Configure Docker Offload](https://docs.docker.com/offload/configuration/).

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/offload/quickstart.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2foffload%2fquickstart%2f\&labels=status%2Ftriage)

Table of contents
