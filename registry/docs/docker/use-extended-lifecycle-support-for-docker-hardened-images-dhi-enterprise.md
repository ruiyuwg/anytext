When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Use Extended Lifecycle Support for Docker Hardened Images DHI Enterprise

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Subscription: Docker Hardened Images Select or Enterprise

With a Docker Hardened Images subscription add-on, you can use Extended Lifecycle Support (ELS) for Docker Hardened Images. ELS provides security patches for end-of-life (EOL) image versions, letting you maintain secure, compliant operations while planning upgrades on your own timeline. You can use ELS images like any other Docker Hardened Image, but you must enable ELS for each repository you want to use with ELS.

## [Discover repositories with ELS support](#discover-repositories-with-els-support)

To find images with ELS support:

1. Go to [Docker Hub](https://hub.docker.com) and sign in.
2. Select **My Hub**.
3. In the namespace drop-down, select your organization.
4. Select **Hardened Images** > **Catalog**.
5. In **Filter by**, select **Extended Lifecycle Support**.

## [Enable ELS for a repository](#enable-els-for-a-repository)

To enable ELS for a repository, an organization owner must [mirror](https://docs.docker.com/dhi/how-to/mirror/) the repository to your organization.

To enable ELS when mirroring:

1. Go to [Docker Hub](https://hub.docker.com) and sign in.
2. Select **My Hub**.
3. In the namespace drop-down, select your organization.
4. Select **Hardened Images** > **Catalog**.
5. Select a DHI repository to view its details.
6. Select **Use this image** > **Mirror repository**
7. Select **Enable support for end-of-life versions** and then follow the on-screen instructions.

## [Disable ELS for a repository](#disable-els-for-a-repository)

To disable ELS for a repository, you must uncheck the ELS option in the mirrored repository's **Settings** tab, or stop mirroring the repository. To stop mirroring, see [Stop mirroring a repository](https://docs.docker.com/dhi/how-to/mirror/#stop-mirroring-a-repository).

To update settings:

1. Go to [Docker Hub](https://hub.docker.com) and sign in.
2. Select **My Hub**.
3. In the namespace drop-down, select your organization.
4. Select **Repositories** and then select the mirrored repository.
5. Select the **Settings** tab.
6. Uncheck the **Mirror end-of-life images** option.

## [Manage ELS repositories](#manage-els-repositories)

You can view and manage your mirrored repositories with ELS like any other mirrored DHI repository. For more details, see [Manage images](https://docs.docker.com/dhi/how-to/manage/).

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/dhi/how-to/els.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fdhi%2fhow-to%2fels%2f\&labels=status%2Ftriage)

Table of contents
