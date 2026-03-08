Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Deactivate a Docker account

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Learn how to deactivate an individual Docker account, including prerequisites required for deactivation.

For information on deactivating an organization, see [Deactivating an organization](https://docs.docker.com/admin/organization/deactivate-account/).

> Warning
>
> All Docker products and services that use your Docker account are inaccessible after deactivating your account.

## [Prerequisites](#prerequisites)

Before deactivating your Docker account, ensure you meet the following requirements:

- If you are an organization or company owner, you must leave your organization or company before deactivating your Docker account:
  1. Sign in to [Docker Home](https://app.docker.com/admin) and choose your organization.
  2. Select **Members** and find your username.
  3. Select the **Actions** menu and then select **Leave organization**.
- If you are the sole owner of an organization, you must assign the owner role to another member of the organization and then remove yourself from the organization, or deactivate the organization. Similarly, if you are the sole owner of a company, either add someone else as a company owner and then remove yourself, or deactivate the company.
- If you have an active Docker subscription, [downgrade it to a Docker Personal subscription](https://docs.docker.com/subscription/change/).
- Download any images and tags you want to keep. Use `docker pull -a <image>` to pull all tags, or `docker pull <image>:<tag>` to pull a specific tag.
- Unlink your [GitHub and account](https://docs.docker.com/docker-hub/repos/manage/builds/link-source/#unlink-a-github-user-account).

## [Deactivate](#deactivate)

Once you have completed all the previous steps, you can deactivate your account.

> Warning
>
> Deactivating your account is permanent and can't be undone. Make sure to back up any important data.

1. Sign in to [Docker Home](https://app.docker.com/login).
2. Select your avatar to open the drop-down menu.
3. Select **Account settings**.
4. Select **Deactivate**.
5. Select **Deactivate account**, then select again to confirm.

## [Delete personal data](#delete-personal-data)

Deactivating your account does not delete your personal data. To request personal data deletion, fill out Docker's [Privacy request form](https://preferences.docker.com/).

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/accounts/deactivate-user-account.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2faccounts%2fdeactivate-user-account%2f\&labels=status%2Ftriage)

Table of contents
