Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Deactivate an organization

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

For: Administrators

Learn how to deactivate a Docker organization, including required prerequisite steps. For information about deactivating user accounts, see [Deactivate a user account](https://docs.docker.com/accounts/deactivate-user-account/).

> Warning
>
> All Docker products and services that use your Docker account or organization account will be inaccessible after deactivating your account.

## [Prerequisites](#prerequisites)

You must complete all the following steps before you can deactivate your organization:

- Download any images and tags you want to keep. Use `docker pull -a <image>` to pull all tags, or `docker pull <image>:<tag>` to pull a specific tag.
- If you have an active Docker subscription, [downgrade it to a free subscription](https://docs.docker.com/subscription/change/).
- Remove all other members within the organization.
- Unlink your [GitHub and Bitbucket accounts](https://docs.docker.com/docker-hub/repos/manage/builds/link-source/#unlink-a-github-user-account).
- For Business organizations, [remove your SSO connection](https://docs.docker.com/enterprise/security/single-sign-on/manage/#remove-an-organization).

## [Deactivate](#deactivate)

You can deactivate your organization using either the Admin Console or Docker Hub.

> Warning
>
> This cannot be undone. Be sure you've gathered all the data you need from your organization before deactivating it.

1. Sign in to [Docker Home](https://app.docker.com) and select the organization you want to deactivate.
2. Select **Admin Console**, then **Deactivate**. If the **Deactivate** button is unavailable, confirm you've completed all [Prerequisites](#prerequisites).
3. Enter the organization name to confirm deactivation.
4. Select **Deactivate organization**.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/admin/organization/deactivate-account.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fadmin%2forganization%2fdeactivate-account%2f\&labels=status%2Ftriage)

Table of contents
