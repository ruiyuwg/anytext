Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Manage domains

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Subscription: Business

For: Administrators

Domain management lets you add and verify domains for your organization, then enable auto-provisioning to automatically add users when they sign in with email addresses that match your verified domains. This approach simplifies user management, ensures consistent security settings, and reduces the risk of unmanaged users accessing Docker without visibility or control.

This page provides steps to add and delete domains, configure auto-provisioning, and audit uncaptured users.

## [Add and verify a domain](#add-and-verify-a-domain)

Adding a domain requires verification to confirm ownership. The verification process uses DNS records to prove you control the domain.

### [Add a domain](#add-a-domain)

1. Sign in to [Docker Home](https://app.docker.com) and select your organization. If your organization is part of a company, select the company and configure the domain for the organization at the company level.
2. Select **Admin Console**, then **Domain management**.
3. Select **Add a domain**.
4. Enter your domain and select **Add domain**.
5. In the pop-up modal, copy the **TXT Record Value** to verify your domain.

### [Verify a domain](#verify-a-domain)

Verification confirms that you own the domain by adding a TXT record to your Domain Name System (DNS) host. It can take up to 72 hours for the DNS change to propagate. Docker automatically checks for the record and confirms ownership once the change is recognized.

> Tip
>
> The record name field determines where the TXT record is added in your domain (root or subdomain). For root domains like `example.com`, use `@` or leave the record name empty, depending on your provider. Don't enter values like docker, `docker-verification`, `www`, or your domain name, as these may direct to the wrong place. Check your DNS provider's documentation to verify record name requirements.

Follow the steps for your DNS provider to add the **TXT Record Value**. If your provider isn't listed, use the steps for "Other providers":

AWS Route 53 Google Cloud DNS GoDaddy Other providers

1. Add your TXT record to AWS by following [Creating records by using the Amazon Route 53 console](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-creating.html).

2. Wait up to 72 hours for TXT record verification.

3. Return to the **Domain management** page of the [Admin Console](https://app.docker.com/admin) and select **Verify** next to your domain name.

4. Add your TXT record to Google Cloud DNS by following [Verifying your domain with a TXT record](https://cloud.google.com/identity/docs/verify-domain-txt).

5. Wait up to 72 hours for TXT record verification.

6. Return to the **Domain management** page of the [Admin Console](https://app.docker.com/admin) and select **Verify** next to your domain name.

7. Add your TXT record to GoDaddy by following [Add a TXT record](https://www.godaddy.com/help/add-a-txt-record-19232).

8. Wait up to 72 hours for TXT record verification.

9. Return to the **Domain management** page of the [Admin Console](https://app.docker.com/admin) and select **Verify** next to your domain name.

10. Sign in to your domain host.

11. Add a TXT record to your DNS settings using the **TXT Record Value** from Docker.

12. Wait up to 72 hours for TXT record verification.

13. Return to the **Domain management** page of the [Admin Console](https://app.docker.com/admin) and select **Verify** next to your domain name.

## [Configure auto-provisioning](#configure-auto-provisioning)

Auto-provisioning automatically adds users to your organization when they sign in with email addresses that match your verified domains. You must verify a domain before enabling auto-provisioning.

> Important
>
> For domains that are part of an SSO connection, Just-in-Time (JIT) provisioning takes precedence over auto-provisioning when adding users to an organization.

### [How auto-provisioning works](#how-auto-provisioning-works)

When auto-provisioning is enabled for a verified domain:

- Users who sign in to Docker with matching email addresses are automatically added to your organization.
- Auto-provisioning only adds existing Docker users to your organization, it doesn't create new accounts.
- Users experience no changes to their sign-in process.
- Company and organization owners receive email notifications when new users are added.
- You may need to [manage seats](https://docs.docker.com/subscription/manage-seats/) to accommodate new users.

### [Enable auto-provisioning](#enable-auto-provisioning)

Auto-provisioning is configured per domain. To enable it:

1. Sign in to [Docker Home](https://app.docker.com) and select your company or organization.
2. Select **Admin Console**, then **Domain management**.
3. Select the **Actions menu** next to the domain you want to enable auto-provisioning for.
4. Select **Enable auto-provisioning**.
5. Optional. If enabling auto-provisioning at the company level, select an organization.
6. Select **Enable** to confirm.

The **Auto-provisioning** column will update to **Enabled** for the domain.

### [Disable auto-provisioning](#disable-auto-provisioning)

To disable auto-provisioning for a user:

1. Sign in to [Docker Home](https://app.docker.com) and select your organization. If your organization is part of a company, select the company and configure the domain for the organization at the company level.
2. Select **Admin Console**, then **Domain management**.
3. Select the **Actions menu** next to your domain.
4. Select **Disable auto-provisioning**.
5. Select **Disable** to confirm.

## [Audit domains for uncaptured users](#audit-domains-for-uncaptured-users)

Subscription: Business

For: Administrators

Domain audit identifies uncaptured users. Uncaptured users are Docker users who have authenticated using an email address associated with your verified domains but aren't members of your Docker organization.

### [Limitations](#limitations)

Domain audit can't identify:

- Users who access Docker Desktop without authenticating
- Users who authenticate using an account that doesn't have an email address associated with one of your verified domains

To prevent unidentifiable users from accessing Docker Desktop, [enforce sign-in](https://docs.docker.com/enterprise/security/enforce-sign-in/).

### [Run a domain audit](#run-a-domain-audit)

1. Sign in to [Docker Home](https://app.docker.com) and choose your company.
2. Select **Admin Console**, then **Domain management**.
3. In **Domain audit**, select **Export Users** to export a CSV file of uncaptured users.

The CSV file contains the following columns:

- Name: Docker user's display name
- Username: Docker ID of the user
- Email: Email address of the user

### [Invite uncaptured users](#invite-uncaptured-users)

You can bulk invite uncaptured users to your organization using the exported CSV file. For more information on bulk inviting users, see [Manage organization members](https://docs.docker.com/admin/organization/members/).

## [Delete a domain](#delete-a-domain)

Deleting a domain removes its TXT record value and disables any associated auto-provisioning.

> Warning
>
> Deleting a domain will disable auto-provisioning for that domain and remove verification. This action cannot be undone.

To delete a domain:

1. Sign in to [Docker Home](https://app.docker.com) and select your organization. If your organization is part of a company, select the company and configure the domain for the organization at the company level.
2. Select **Admin Console**, then **Domain management**.
3. For the domain you want to delete, select the **Actions** menu, then **Delete domain**.
4. To confirm, select **Delete domain** in the pop-up modal.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/enterprise/security/domain-management.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fenterprise%2fsecurity%2fdomain-management%2f\&labels=status%2Ftriage)

Table of contents
