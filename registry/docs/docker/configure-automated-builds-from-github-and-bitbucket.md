Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Configure automated builds from GitHub and BitBucket

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

> Note
>
> Automated builds require a Docker Pro, Team, or Business subscription.

To automate building and testing of your images, you link to your hosted source code service to Docker Hub so that it can access your source code repositories. You can configure this link for user accounts or organizations.

If you are linking a source code provider to create autobuilds for a team, follow the instructions to [create a service account](https://docs.docker.com/docker-hub/repos/manage/builds/#service-users-for-team-autobuilds) for the team before linking the account as described below.

## [Link to a GitHub user account](#link-to-a-github-user-account)

1. Sign in to Docker Hub.

2. Select **My Hub** > **Settings** > **Linked accounts**.

3. Select **Link provider** for the source provider you want to link.

   If you want to unlink your current GitHub account and relink to a new GitHub account, make sure to completely sign out of [GitHub](https://github.com/) before linking via Docker Hub.

4. Review the settings for the **Docker Hub Builder** OAuth application.

   ![Granting access to GitHub account](https://docs.docker.com/docker-hub/repos/manage/builds/images/authorize-builder.png)

   > Note
   >
   > If you are the owner of any GitHub organizations, you might see options to grant Docker Hub access to them from this screen. You can also individually edit an organization's third-party access settings to grant or revoke Docker Hub's access. See [Grant access to a GitHub organization](https://docs.docker.com/docker-hub/repos/manage/builds/link-source/#grant-access-to-a-github-organization) to learn more.

5. Select **Authorize docker** to save the link.

### [Grant access to a GitHub organization](#grant-access-to-a-github-organization)

If you are the owner of a GitHub organization, you can grant or revoke Docker Hub's access to the organization's repositories. Depending on the GitHub organization's settings, you may need to be an organization owner.

If the organization has not had specific access granted or revoked before, you can often grant access at the same time as you link your user account. In this case, a **Grant access** button appears next to the organization name in the link accounts screen, as shown below. If this button does not appear, you must manually grant the application's access.

To manually grant Docker Hub access to a GitHub organization:

1. Link your user account using the instructions above.

2. From your GitHub Account settings, locate the **Organization settings** section at the lower left.

3. Select the organization you want to give Docker Hub access to.

4. Select **Third-party access**.

   The page displays a list of third party applications and their access status.

5. Select the pencil icon next to **Docker Hub Builder**.

6. Select **Grant access** next to the organization.

### [Revoke access to a GitHub organization](#revoke-access-to-a-github-organization)

To revoke Docker Hub's access to an organization's GitHub repositories:

1. From your GitHub Account settings, locate the **Organization settings** section at the lower left.

2. Select the organization you want to revoke Docker Hub's access to.

3. From the Organization Profile menu, select **Third-party access**. The page displays a list of third party applications and their access status.

4. Select the pencil icon next to Docker Hub Builder.

5. On the next page, select **Deny access**.

### [Unlink a GitHub user account](#unlink-a-github-user-account)

To revoke Docker Hub's access to your GitHub account, you must unlink it both from Docker Hub, and from your GitHub account.

1. Select **My Hub** > **Settings** > **Linked accounts**.

2. Select **Unlink provider** next to the source provider you want to remove.

3. Go to your GitHub account's **Settings** page.

4. Select **Applications** in the left navigation bar.

5. Select the `...` menu to the right of the Docker Hub Builder application and select **Revoke**.

> Note
>
> Each repository that is configured as an automated build source contains a webhook that notifies Docker Hub of changes in the repository. This webhook is not automatically removed when you revoke access to a source code provider.

## [Link to a Bitbucket user account](#link-to-a-bitbucket-user-account)

1. Sign in to Docker Hub using your Docker ID.

2. Select **My Hub** > **Settings** > **Linked accounts**.

3. Select **Link provider** for the source provider you want to link.

4. If necessary, sign in to Bitbucket.

5. On the page that appears, select **Grant access**.

### [Unlink a Bitbucket user account](#unlink-a-bitbucket-user-account)

To permanently revoke Docker Hub's access to your Bitbucket account, you must unlink it both from Docker Hub, and revoke authorization in your Bitbucket account.

1. Sign in to Docker Hub.

2. Select **My Hub** > **Settings** > **Linked accounts**.

3. Select **Unlink provider** next to the source provider you want to remove.

> Important
>
> After unlinking the account on Docker Hub, you must also revoke the authorization on the Bitbucket end.

To revoke authorization in your Bitbucket account:

1. Go to your Bitbucket account and navigate to [**Bitbucket settings**](https://bitbucket.org/account/settings/app-authorizations/).

2. On the page that appears, select **OAuth**.

3. Select **Revoke** next to the Docker Hub line.

![Bitbucket Authorization revocation page](https://docs.docker.com/docker-hub/repos/manage/builds/images/bitbucket-revoke.png)

> Note
>
> Each repository that is configured as an automated build source contains a webhook that notifies Docker Hub of changes in the repository. This webhook is not automatically removed when you revoke access to a source code provider.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/docker-hub/repos/manage/builds/link-source.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fdocker-hub%2frepos%2fmanage%2fbuilds%2flink-source%2f\&labels=status%2Ftriage)

Table of contents
