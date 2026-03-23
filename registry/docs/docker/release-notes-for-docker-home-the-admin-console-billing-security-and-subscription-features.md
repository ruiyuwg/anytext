When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Release notes for Docker Home, the Admin Console, billing, security, and subscription features

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

This page provides details on new features, enhancements, known issues, and bug fixes across Docker Home, the Admin Console, billing, security, and subscription functionalities.

## [2026-02-13](#2026-02-13)

### [New](#new)

- Administrators can now control whether organization members can push content to their personal namespaces on Docker Hub with [namespace access control](https://docs.docker.com/enterprise/security/hardened-desktop/namespace-access/).
- Administrators can now prevent creating public repositories within organization namespaces using the [Disable public repositories](https://docs.docker.com/docker-hub/settings/#disable-creation-of-public-repos) setting.

## [2026-01-27](#2026-01-27)

### [New](#new-1)

- Administrators can now use an allow list with [Image Access Management](https://docs.docker.com/enterprise/security/hardened-desktop/image-access-management/) to approve specific repositories that bypass image access controls.

## [2025-01-30](#2025-01-30)

### [New](#new-2)

- Installing Docker Desktop via the PKG installer is now generally available.
- Enforcing sign-in via configuration profiles is now generally available.

## [2024-12-10](#2024-12-10)

### [New](#new-3)

- New Docker subscriptions are now available. For more information, see [Docker subscriptions and features](https://www.docker.com/pricing?ref=Docs\&refAction=DocsPlatformReleaseNotes) and [Announcing Upgraded Docker Plans: Simpler, More Value, Better Development and Productivity](https://www.docker.com/blog/november-2024-updated-plans-announcement/).

## [2024-11-18](#2024-11-18)

### [New](#new-4)

- Administrators can now:
  - Enforce sign-in with [configuration profiles](https://docs.docker.com/enterprise/security/enforce-sign-in/methods/#configuration-profiles-method-mac-only) (Early Access).
  - Enforce sign-in for more than one organization at a time (Early Access).
  - Deploy Docker Desktop for Mac in bulk with the [PKG installer](https://docs.docker.com/enterprise/enterprise-deployment/pkg-install-and-configure/) (Early Access).
  - [Use Desktop Settings Management via the Docker Admin Console](https://docs.docker.com/enterprise/security/hardened-desktop/settings-management/configure-admin-console/) (Early Access).

### [Bug fixes and enhancements](#bug-fixes-and-enhancements)

- Enhance Container Isolation (ECI) has been improved to:
  - Permit admins to [turn off Docker socket mount restrictions](https://docs.docker.com/enterprise/security/hardened-desktop/enhanced-container-isolation/config/#allowing-all-containers-to-mount-the-docker-socket).
  - Support wildcard tags when using the [`allowedDerivedImages` setting](https://docs.docker.com/enterprise/security/hardened-desktop/enhanced-container-isolation/config/#docker-socket-mount-permissions-for-derived-images).

## [2024-11-11](#2024-11-11)

### [New](#new-5)

- [Personal access tokens](/security/access-tokens/) (PATs) now support expiration dates.

## [2024-10-15](#2024-10-15)

### [New](#new-6)

- Beta: You can now create [organization access tokens](/security/for-admins/access-tokens/) (OATs) to enhance security for organizations and streamline access management for organizations in the Docker Admin Console.

## [2024-08-29](#2024-08-29)

### [New](#new-7)

- Deploying Docker Desktop via the [MSI installer](https://docs.docker.com/enterprise/enterprise-deployment/msi-install-and-configure/) is now generally available.
- Two new methods to [enforce sign-in](https://docs.docker.com/enterprise/security/enforce-sign-in/) (Windows registry key and `.plist` file) are now generally available.

## [2024-08-24](#2024-08-24)

### [New](#new-8)

- Administrators can now view [organization Insights](https://docs.docker.com/admin/organization/insights/).

## [2024-07-17](#2024-07-17)

### [New](#new-9)

- You can now centrally access and manage Docker products in [Docker Home](https://app.docker.com).

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/platform-release-notes.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fplatform-release-notes%2f\&labels=status%2Ftriage)

Table of contents
