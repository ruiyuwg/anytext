Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Guides](https://docs.docker.com/guides/)

- [Get started](/get-started/)
- [Manuals](/manuals/)
- [Reference](/reference/)

[Mastering user and access management](https://docs.docker.com/guides/admin-user-management/)

Simplify user access while ensuring security and efficiency in Docker.

Administration

20 minutes

[1](https://docs.docker.com/guides/admin-user-management/setup/)

[Setting up roles and permissions in Docker](https://docs.docker.com/guides/admin-user-management/setup/)

[2](https://docs.docker.com/guides/admin-user-management/onboard/)

[Onboarding and managing roles and permissions in Docker](https://docs.docker.com/guides/admin-user-management/onboard/)

[3](https://docs.docker.com/guides/admin-user-management/audit-and-monitor/)

[Monitoring and insights](https://docs.docker.com/guides/admin-user-management/audit-and-monitor/)

Resources:

- [Overview of Administration in Docker](/admin/)
- [Single sign-on](/security/for-admins/single-sign-on/)
- [Onboard your organization](/admin/organization/onboard/)
- [Roles and permissions](/security/for-admins/roles-and-permissions/)
- [Insights](/admin/organization/insights/)
- [Activity logs](/admin/organization/activity-logs/)

[« Back to all guides](/guides/)

# Setting up roles and permissions in Docker

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

With the right configurations, you can ensure your developers have easy access to necessary resources while preventing unauthorized access. This page guides you through identifying Docker users so you can allocate subscription seats efficiently within your Docker organization, and assigning roles to align with your organization's structure.

## [Identify your Docker users and accounts](#identify-your-docker-users-and-accounts)

Before setting up roles and permissions, it's important to have a clear understanding of who in your organization requires Docker access. Focus on gathering a comprehensive view of active users, their roles within projects, and how they interact with Docker resources. This process can be supported by tools like device management software or manual assessments. Encourage all users to update their Docker accounts to use organizational email addresses, ensuring seamless integration with your subscription.

For steps on how you can do this, see [step 1 of onboarding your organization](https://docs.docker.com/admin/organization/onboard/).

## [Assign roles strategically](#assign-roles-strategically)

When you invite members to join your Docker organization, you assign them a role.

Docker's predefined roles offer flexibility for various organizational needs. Assigning roles effectively ensures a balance of accessibility and security.

- Member: Non-administrative role. Members can view other members that are in the same organization.
- Editor: Partial administrative access to the organization. Editors can create, edit, and delete repositories. They can also edit an existing team's access permissions.
- Owner: Full organization administrative access. Owners can manage organization repositories, teams, members, settings, and billing.

For more information, see [Roles and permissions](https://docs.docker.com/enterprise/security/roles-and-permissions/).

### [Enhance with teams](#enhance-with-teams)

Teams in Docker provide a structured way to manage member access and they provide an additional level of permissions. They simplify permission management and enable consistent application of policies.

- Organize users into teams aligned with projects, departments, or functional roles. This approach helps streamline resource allocation and ensures clarity in access control.
- Assign permissions at the team level rather than individually. For instance, a development team might have "Read & Write" access to certain repositories, while a QA team has "Read-only" access.
- As teams grow or responsibilities shift, you can easily update permissions or add new members, maintaining consistency without reconfiguring individual settings.

For more information, see [Create and manage a team](https://docs.docker.com/admin/organization/manage-a-team/).

### [Example scenarios](#example-scenarios)

- Development teams: Assign the member role to developers, granting access to the repositories needed for coding and testing.
- Team leads: Assign the editor role to team leads for resource management and repository control within their teams.
- Organizational oversight: Restrict the organization owner or company owner roles to a select few trusted individuals responsible for billing and security settings.

### [Best practices](#best-practices)

- Apply the principle of least privilege. Assign users only the minimum permissions necessary for their roles.
- Conduct regular reviews of role assignments to ensure they align with evolving team structures and organizational responsibilities.

[Onboarding and managing roles and permissions in Docker »](https://docs.docker.com/guides/admin-user-management/onboard/)

[Edit this page](https://github.com/docker/docs/edit/main/content/guides/admin-user-management/setup.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fguides%2fadmin-user-management%2fsetup%2f\&labels=status%2Ftriage)

Table of contents
