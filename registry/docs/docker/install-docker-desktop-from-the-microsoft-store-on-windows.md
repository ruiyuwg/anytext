When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Install Docker Desktop from the Microsoft Store on Windows

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

You can deploy Docker Desktop for Windows through the [Microsoft app store](https://apps.microsoft.com/detail/xp8cbj40xlbwkx?hl=en-GB\&gl=GB).

The Microsoft Store version of Docker Desktop provides the same functionality as the standard installer but has a different update behavior depending on whether your developers install it themselves or if installation is handled by an MDM tool such as Intune. This is described in the following section.

Choose the installation method that best aligns with your environment's requirements and management practices.

## [Update behavior](#update-behavior)

### [Developer-managed installations](#developer-managed-installations)

For developers who install Docker Desktop directly:

- The Microsoft Store does not automatically update Win32 apps like Docker Desktop for most users.
- Only a subset of users (approximately 20%) may receive update notifications on the Microsoft Store page.
- Most users must manually check for and apply updates within the Store.

### [Intune-managed installations](#intune-managed-installations)

In environments managed with Intune:

- Intune checks for updates approximately every 8 hours.
- When a new version is detected, Intune triggers a `winget` upgrade.
- If appropriate policies are configured, updates can occur automatically without user intervention.
- Updates are handled by Intune's management infrastructure rather than the Microsoft Store itself.

## [WSL considerations](#wsl-considerations)

Docker Desktop for Windows integrates closely with WSL. When updating Docker Desktop installed from the Microsoft Store:

- Make sure you have quit Docker Desktop and that it is no longer running so updates can complete successfully
- In some environments, virtual hard disk (VHDX) file locks may prevent the update from completing.

## [Recommendations for Intune management](#recommendations-for-intune-management)

If using Intune to manage Docker Desktop for Windows:

- Ensure your Intune policies are configured to handle application updates
- Be aware that the update process uses WinGet APIs rather than direct Store mechanisms
- Consider testing the update process in a controlled environment to verify proper functionality

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/enterprise/enterprise-deployment/ms-store.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fenterprise%2fenterprise-deployment%2fms-store%2f\&labels=status%2Ftriage)

Table of contents
