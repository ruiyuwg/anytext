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
- [Docker subscription information](https://www.docker.com/pricing?ref=Docs\&refAction=DocsGuidesAdminSetup)

[« Back to all guides](/guides/)

# Deploy your Docker setup

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

> Warning
>
> Communicate with your users before proceeding, and confirm that your IT and MDM teams are prepared to handle any unexpected issues, as these steps will affect all existing users signing into your Docker organization.

## [Enforce SSO](#enforce-sso)

Enforcing SSO means that anyone who has a Docker profile with an email address that matches your verified domain must sign in using your SSO connection. Make sure the Identity provider groups associated with your SSO connection cover all the developer groups that you want to have access to the Docker subscription.

For instructions on how to enforce SSO, see [Enforce SSO](https://docs.docker.com/enterprise/security/single-sign-on/connect/).

## [Deploy configuration settings and enforce sign-in to users](#deploy-configuration-settings-and-enforce-sign-in-to-users)

Have the MDM team deploy the configuration files for Docker to all users.

## [Next steps](#next-steps)

Congratulations, you've successfully completed the admin implementation process for Docker.

To continue optimizing your Docker environment:

- Review your [organization's usage data](https://docs.docker.com/admin/organization/insights/) to track adoption
- Monitor [Docker Scout findings](https://docs.docker.com/scout/explore/analysis/) for security insights
- Explore [additional security features](https://docs.docker.com/enterprise/security/) to enhance your configuration

[Edit this page](https://github.com/docker/docs/edit/main/content/guides/admin-set-up/deploy.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fguides%2fadmin-set-up%2fdeploy%2f\&labels=status%2Ftriage)

Table of contents
