Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Guides](https://docs.docker.com/guides/)

- [Get started](/get-started/)
- [Manuals](/manuals/)
- [Reference](/reference/)

[Set up your company for success with Docker](https://docs.docker.com/guides/admin-set-up/)

Get the most out of Docker by streamlining workflows, standardizing development environments, and ensuring smooth deployments across your company.

Administration

20 minutes

[1](https://docs.docker.com/guides/admin-set-up/comms-and-info-gathering/)

[Communication and information gathering](https://docs.docker.com/guides/admin-set-up/comms-and-info-gathering/)

[2](https://docs.docker.com/guides/admin-set-up/finalize-plans-and-setup/)

[Finalize plans and begin setup](https://docs.docker.com/guides/admin-set-up/finalize-plans-and-setup/)

[3](https://docs.docker.com/guides/admin-set-up/testing/)

[Testing](https://docs.docker.com/guides/admin-set-up/testing/)

[4](https://docs.docker.com/guides/admin-set-up/deploy/)

[Deploy your Docker setup](https://docs.docker.com/guides/admin-set-up/deploy/)

Resources:

- [Overview of Administration in Docker](/admin/)
- [Single sign-on](/security/for-admins/single-sign-on/)
- [Enforce sign-in](/security/for-admins/enforce-sign-in/)
- [Roles and permissions](/security/for-admins/roles-and-permissions/)
- [Settings Management](/security/for-admins/hardened-desktop/settings-management/)
- [Registry Access Management](/security/for-admins/hardened-desktop/registry-access-management/)
- [Image Access Management](/security/for-admins/hardened-desktop/image-access-management/)
- [Docker subscription information](https://www.docker.com/pricing/)

[« Back to all guides](/guides/)

# Communication and information gathering

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [Communicate with your developers and IT teams](#communicate-with-your-developers-and-it-teams)

Before rolling out Docker Desktop across your organization, coordinate with key stakeholders to ensure a smooth transition.

### [Notify Docker Desktop users](#notify-docker-desktop-users)

You may already have Docker Desktop users within your company. Some steps in this onboarding process may affect how they interact with the platform.

Communicate early with users to inform them that:

- They'll be upgraded to a supported version of Docker Desktop as part of the subscription onboarding
- Settings will be reviewed and optimized for productivity
- They'll need to sign in to the company's Docker organization using their business email to access subscription benefits

### [Engage with your MDM team](#engage-with-your-mdm-team)

Device management solutions, such as Intune and Jamf, are commonly used for software distribution across enterprises. These tools are typically managed by a dedicated MDM team.

Engage with this team early in the process to:

- Understand their requirements and lead time for deploying changes
- Coordinate the distribution of configuration files

Several setup steps in this guide require JSON files, registry keys, or .plist files to be distributed to developer machines. Use MDM tools to deploy these configuration files and ensure their integrity.

## [Identify Docker organizations](#identify-docker-organizations)

Some companies may have more than one [Docker organization](https://docs.docker.com/admin/organization/) created. These organizations may have been created for specific purposes, or may not be needed anymore.

If you suspect your company has multiple Docker organizations:

- Survey your teams to see if they have their own organizations
- Contact your Docker Support to get a list of organizations with users whose emails match your domain name

## [Gather requirements](#gather-requirements)

[Settings Management](https://docs.docker.com/enterprise/security/hardened-desktop/settings-management/) lets you preset numerous configuration parameters for Docker Desktop.

Work with the following stakeholders to establish your company's baseline configuration:

- Docker organization owner
- Development lead
- Information security representative

Review these areas together:

- Security features and [enforcing sign-in](https://docs.docker.com/enterprise/security/enforce-sign-in/) for Docker Desktop users
- Additional Docker products included in your subscriptions

To view the parameters that can be preset, see [Configure Settings Management](https://docs.docker.com/enterprise/security/hardened-desktop/settings-management/configure-json-file/#step-two-configure-the-settings-you-want-to-lock-in).

## [Optional: Meet with the Docker Implementation team](#optional-meet-with-the-docker-implementation-team)

The Docker Implementation team can help you set up your organization, configure SSO, enforce sign-in, and configure Docker Desktop.

To schedule a meeting, email <successteam@docker.com>.

[Finalize plans and begin setup »](https://docs.docker.com/guides/admin-set-up/finalize-plans-and-setup/)

[Edit this page](https://github.com/docker/docs/edit/main/content/guides/admin-set-up/comms-and-info-gathering.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fguides%2fadmin-set-up%2fcomms-and-info-gathering%2f\&labels=status%2Ftriage)

Table of contents
