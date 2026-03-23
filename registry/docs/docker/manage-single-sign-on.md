When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Manage single sign-on

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Subscription: Business

Requires: Docker Desktop [4.42](https://docs.docker.com/desktop/release-notes/#4420) and later

For: Administrators

This page covers how to manage single sign-on (SSO) after initial setup, including managing domains, connections, users, and provisioning settings.

## [Manage domains](#manage-domains)

### [Add a domain](#add-a-domain)

To add a domain to an existing SSO connection:

1. Sign in to [Docker Home](https://app.docker.com) and select your company or organization from the top-left account drop-down.
2. Select **Admin Console**, then **SSO and SCIM**.
3. In the SSO connections table, select the **Actions** menu for your connection, then select **Edit connection**.
4. Select **Next** to navigate to the domains section.
5. In the **Domains** section, select **Add domain**.
6. Enter the domain you want to add to the connection.
7. Select **Next** to confirm or change the connected organizations.
8. Select **Next** to confirm or change the default organization and team provisioning selections.
9. Review the connection details and select **Update connection**.

### [Remove a domain from an SSO connection](#remove-a-domain-from-an-sso-connection)

> Important
>
> If you use multiple identity providers with the same domain, you must remove the domain from each SSO connection individually.

1. Sign in to [Docker Home](https://app.docker.com) and select your company or organization from the top-left account drop-down.
2. Select **Admin Console**, then **SSO and SCIM**.
3. In the **SSO connections** table, select the **Actions** menu for your connection, then **Edit connection**.
4. Select **Next** to navigate to the domains section.
5. In the **Domain** section, select the **X** icon next to the domain you want to remove.
6. Select **Next** to confirm or change the connected organizations.
7. Select **Next** to confirm or change the default organization and team provisioning selections.
8. Review the connection details and select **Update connection**.

> Note
>
> When you re-add a domain, Docker assigns a new TXT record value. You must complete domain verification again with the new TXT record.

## [Manage SSO connections](#manage-sso-connections)

### [View connections](#view-connections)

To view all configured SSO connections:

1. Sign in to [Docker Home](https://app.docker.com) and select your company or organization from the top-left account drop-down.
2. Select **Admin Console**, then **SSO and SCIM**.
3. View all configured connections in the **SSO connections** table.

### [Edit a connection](#edit-a-connection)

To modify an existing SSO connection:

1. Sign in to [Docker Home](https://app.docker.com) and select your company or organization from the top-left account drop-down.
2. Select **Admin Console**, then **SSO and SCIM**.
3. In the **SSO connections** table, select the **Actions** menu for your connection, then **Edit connection**.
4. Follow the on-screen instructions to modify your connection settings.

### [Delete a connection](#delete-a-connection)

To remove an SSO connection:

1. Sign in to [Docker Home](https://app.docker.com) and select your company or organization from the top-left account drop-down.
2. Select **Admin Console**, then **SSO and SCIM**.
3. In the **SSO connections** table, select the **Actions** menu for your connection, then **Delete connection**.
4. Follow the on-screen instructions to confirm the deletion.

> Warning
>
> Deleting an SSO connection removes access for all users who authenticate through that connection.

## [Manage users and provisioning](#manage-users-and-provisioning)

Docker automatically provisions users through Just-in-Time (JIT) provisioning when they sign in via SSO. You can also manually manage users and configure different provisioning methods.

### [How provisioning works](#how-provisioning-works)

Docker supports the following provisioning methods:

- JIT provisioning (default): Users are automatically added to your organization when they sign in via SSO
- SCIM provisioning: Sync users and groups from your identity provider to Docker
- Group mapping: Sync user groups from your identity provider with teams in your Docker organization
- Manual provisioning: Turn off automatic provisioning and manually invite users

For more information on provisioning methods, see [Provision users](https://docs.docker.com/enterprise/security/provisioning/).

### [Add guest users](#add-guest-users)

To invite users who don't authenticate through your identity provider:

1. Sign in to [Docker Home](https://app.docker.com/) and select your organization.
2. Select **Members**.
3. Select **Invite**.
4. Follow the on-screen instructions to invite the user.

The user receives an email invitation and can create a Docker account or sign in with their existing account.

### [Remove users](#remove-users)

To remove a user from your organization:

1. Sign in to [Docker Home](https://app.docker.com/) and select your organization.
2. Select **Members**.
3. Find the user you want to remove and select the **Actions** menu next to their name.
4. Select **Remove** and confirm the removal.

The user loses access to your organization immediately upon removal.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/enterprise/security/single-sign-on/manage.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fenterprise%2fsecurity%2fsingle-sign-on%2fmanage%2f\&labels=status%2Ftriage)

Table of contents
