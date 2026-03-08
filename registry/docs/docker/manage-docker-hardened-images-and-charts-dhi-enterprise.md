Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Manage Docker Hardened Images and charts DHI Enterprise

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Subscription: Docker Hardened Images Select or Enterprise

On the **Manage** screen in Docker Hub, you can manage your mirrored Docker Hardened Image (DHI) repositories, mirrored DHI chart repositories, and customizations in your organization.

Alternatively, you can use the [DHI CLI](https://docs.docker.com/dhi/how-to/cli/) to manage mirrored repositories and customizations from the command line.

Mirrored DHI repositories are standard Docker Hub repositories in your organization's namespace. They behave exactly like any other Hub repository, which means you can manage access and permissions, configure webhooks, and use other standard Hub features. See [Docker Hub repositories](https://docs.docker.com/docker-hub/repos/) for details. The **Manage** screen provides DHI-specific actions like customizing images and stopping mirroring.

## [Manage mirrored Docker Hardened Image repositories](#manage-mirrored-docker-hardened-image-repositories)

To manage your mirrored DHI repositories:

1. Go to the [Docker Hub](https://hub.docker.com) and sign in.

2. Select **My Hub**.

3. In the namespace drop-down, select your organization.

4. Select **Hardened Images** > **Manage**.

5. Select **Mirrored Images**

6. Select the menu icon in the far right column of the repository you want to manage.

   From here, you can:

   - **Customize**: Create a customized image based on the source repository.
   - **Stop mirroring**: Stop mirroring the DHI repository.

## [Manage customized Docker Hardened Image repositories](#manage-customized-docker-hardened-image-repositories)

To manage your customized DHI repositories:

1. Go to [Docker Hub](https://hub.docker.com) and sign in.

2. Select **My Hub**.

3. In the namespace drop-down, select your organization.

4. Select **Hardened Images** > **Manage**.

5. Select **Customizations**.

   On this page, you can view your customized DHI repositories.

6. Select the menu icon in the far right column of the repository you want to manage.

   From here, you can:

   - **Edit**: Edit the customized image.
   - **Create new**: Create a new customized image based on the source repository.
   - **Delete**: Delete the customized image.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/dhi/how-to/manage.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fdhi%2fhow-to%2fmanage%2f\&labels=status%2Ftriage)

Table of contents
