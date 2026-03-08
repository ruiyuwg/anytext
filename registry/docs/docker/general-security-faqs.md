Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# General security FAQs

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [How do I report a vulnerability?](#how-do-i-report-a-vulnerability)

If you've discovered a security vulnerability in Docker, report it responsibly to <security@docker.com> so Docker can quickly address it.

## [Does Docker lockout users after failed sign-ins?](#does-docker-lockout-users-after-failed-sign-ins)

Docker Hub locks out users after 10 failed sign-in attempts within 5 minutes. The lockout duration is 5 minutes. This policy applies to Docker Hub, Docker Desktop, and Docker Scout authentication.

## [Do you support physical multi-factor authentication (MFA) with YubiKeys?](#do-you-support-physical-multi-factor-authentication-mfa-with-yubikeys)

You can configure physical multi-factor authentication (MFA) through SSO using your identity provider (IdP). Check with your IdP if they support physical MFA devices like YubiKeys.

## [How are sessions managed and do they expire?](#how-are-sessions-managed-and-do-they-expire)

Docker uses tokens to manage user sessions with different expiration periods:

- Docker Desktop: Signs you out after 90 days, or 30 days of inactivity
- Docker Hub and Docker Home: Sign you out after 24 hours

Docker also supports your IdP's default session timeout through SAML attributes. For more information, see [SSO attributes](https://docs.docker.com/enterprise/security/provisioning/#sso-attributes).

## [How does Docker distinguish between employee users and contractor users?](#how-does-docker-distinguish-between-employee-users-and-contractor-users)

Organizations use verified domains to distinguish user types. Team members with email domains other than verified domains appear as "Guest" users in the organization.

## [How long are activity logs available?](#how-long-are-activity-logs-available)

Docker activity logs are available for 90 days. You're responsible for exporting logs or setting up drivers to send logs to your internal systems for longer retention.

## [Can I export a list of users with their roles and privileges?](#can-i-export-a-list-of-users-with-their-roles-and-privileges)

Yes, use the [Export Members](https://docs.docker.com/admin/organization/members/#export-members) feature to export a CSV file containing your organization's users with role and team information.

## [How does Docker Desktop handle authentication information?](#how-does-docker-desktop-handle-authentication-information)

Docker Desktop uses the host operating system's secure key management to store authentication tokens:

- macOS: [Keychain](https://support.apple.com/guide/security/keychain-data-protection-secb0694df1a/web)
- Windows: [Security and Identity API via Wincred](https://learn.microsoft.com/en-us/windows/win32/api/wincred/)
- Linux: [Pass](https://www.passwordstore.org/).

## [How do I remove users who aren't part of my IdP when using SSO without SCIM?](#how-do-i-remove-users-who-arent-part-of-my-idp-when-using-sso-without-scim)

If SCIM isn't turned on, you must manually remove users from the organization. SCIM can automate user removal, but only for users added after SCIM is turned on. Users added before SCIM was turned on must be removed manually.

For more information, see [Manage organization members](https://docs.docker.com/admin/organization/members/).

## [What metadata does Scout collect from container images?](#what-metadata-does-scout-collect-from-container-images)

For information about metadata stored by Docker Scout, see [Data handling](https://docs.docker.com/scout/deep-dive/data-handling/).

## [How are Marketplace extensions vetted for security?](#how-are-marketplace-extensions-vetted-for-security)

Security vetting for extensions is on the roadmap but isn't currently implemented. Extensions aren't covered as part of Docker's Third-Party Risk Management Program.

## [Can I prevent users from pushing images to Docker Hub private repositories?](#can-i-prevent-users-from-pushing-images-to-docker-hub-private-repositories)

No direct setting exists to disable private repositories. However, [Registry Access Management](https://docs.docker.com/enterprise/security/hardened-desktop/registry-access-management/) lets administrators control which registries developers can access through Docker Desktop via the Admin Console.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/security/faqs/general.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fsecurity%2ffaqs%2fgeneral%2f\&labels=status%2Ftriage)

Table of contents
