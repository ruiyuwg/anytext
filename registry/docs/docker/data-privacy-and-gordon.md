Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Data privacy and Gordon

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Availability: Beta

Requires: Docker Desktop [4.61.0](https://docs.docker.com/desktop/release-notes/#4610) or later

This page explains what data Gordon accesses, how it's used, and what privacy protections are in place.

## [What data Gordon accesses](#what-data-gordon-accesses)

When you use Gordon, the data it accesses depends on your query and configuration.

### [Local files](#local-files)

When you use the `docker ai` command, Gordon can access files and directories on your system. The working directory sets the default context for file operations.

In Docker Desktop, if you ask about a specific file or directory in the Gordon view, you'll be prompted to select the relevant context.

### [Local images](#local-images)

Gordon integrates with Docker Desktop and can view all images in your local image store. This includes images you've built or pulled from a registry.

### [Docker environment](#docker-environment)

Gordon has access to your Docker daemon's state, including:

- Running and stopped containers
- Container logs and configuration
- Images and image layers
- Volumes and networks
- Build cache

## [Data retention policy](#data-retention-policy)

Gordon's data retention differs based on your subscription tier:

### [Paid subscriptions (Pro, Team, Business)](#paid-subscriptions-pro-team-business)

Docker and its AI providers do not retain any inputs or outputs from your Gordon sessions. Your queries, Gordon's responses, and any code or files processed are not stored.

### [Personal (free) subscription](#personal-free-subscription)

Conversation threads are stored for 30 days to improve the service. Individual queries and responses are retained as part of your conversation history.

### [All subscriptions](#all-subscriptions)

Data is never used for training AI models or shared with third parties. All data transferred to Gordon's backend is encrypted in transit.

## [Data security](#data-security)

Your data is protected through encryption in transit. For paid subscriptions, no persistent storage occurs—Gordon processes your requests and discards the data immediately.

For questions about privacy terms and conditions, review [Gordon's Supplemental Terms](https://www.docker.com/legal/docker-ai-supplemental-terms/).

## [Organizational data policies](#organizational-data-policies)

For Business subscriptions, administrators can control Gordon access for their organization using Settings Management.

Available controls:

- Enable or disable Gordon for the organization
- Set usage limits by subscription tier

Administrators should review their organization's data handling requirements before enabling Gordon.

See [Settings Management](/enterprise/security/hardened-desktop/settings-management/) for configuration details.

## [Disabling Gordon](#disabling-gordon)

You can disable Gordon at any time:

Individual users:

1. Open Docker Desktop Settings.
2. Navigate to the **Beta features** section.
3. Clear the **Enable Docker AI** option.
4. Select **Apply**.

Business organizations:

Administrators can disable Gordon for the entire organization using Settings Management. See [Settings Management](/enterprise/security/hardened-desktop/settings-management/) for details.

## [Questions about privacy](#questions-about-privacy)

For questions about Docker's privacy practices:

- Review the [Docker Privacy Policy](https://www.docker.com/legal/privacy/)
- Read [Gordon's Supplemental Terms](https://www.docker.com/legal/docker-ai-supplemental-terms/)
- Contact Docker Support for specific concerns

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/ai/gordon/concepts/data-privacy.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fai%2fgordon%2fconcepts%2fdata-privacy%2f\&labels=status%2Ftriage)

Table of contents
