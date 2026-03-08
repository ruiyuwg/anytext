# Platform terminology

## Organizations

![Illustrative graphic showing two separate boxes with connected user avatars within](https://cdn.sanity.io/images/3do82whm/next/2afb547252d5d719a8bba88aa7dbe2257eeac243-3840x2160.png)

*Organizations collate billing for multiple projects, which may be queried by the same or unique frontends.*

An organization is an entity where multiple projects are grouped to give them a single billing point. It does not need to be a registered company.

Project configuration cannot be shared across projects in an organization, nor can its content be referenced across projects.

A member may be a member of multiple organizations but must be invited to each. The roles in each project are created uniquely.

Organizations are also where Single Sign-On (SSO) is configured so that members can register to your projects using the provider of your choice.

Splitting a Sanity implementation across organizations is rarely required. Only if you require different projects to be billed with different payment methods.

## Projects

![Illustrative graphic showing user avatars connected within a single box](https://cdn.sanity.io/images/3do82whm/next/d77647461411b1ab167d38fe8c9737b1df1e3f9e-3840x2160.png)

*Datasets inside a project can reference one another, be used independently by members, and be queried by one or many API consumers.*

A project is a self-contained collection of datasets, members, and configuration options such as webhooks and tokens. These cannot be shared between projects. A member of one project is not automatically granted access to any other, though an administrator member may invite them.

All administrator members in a project will have access to project-level configurations such as datasets, members, tokens, custom access control, and webhooks. Other members may get read-only or no access to these.

Your various frontends and the Sanity Studio can be configured to query from or write data to multiple projects.

However, content cannot be *referenced* between projects, only between datasets.

With plugins and scripts, it is possible to *migrate* content across projects.

Dividing how you use Sanity across projects is useful when you need absolute separation of developer and author teams with very different content creation goals.

## Roles

Within Sanity, you can control user access by assigning roles. Organization and project roles are 2 different sets of roles to control user access at different levels of granularity:

- **Organization**: global throughout the organization.
- **Project**: specific for each project.

To access organization and project role configuration options:

1. Go to the [management](https://www.sanity.io/manage) page.
2. The top navigation bar features 2 drop-down menus: click the first from the left to select the organization, and the second to select a project within the specified organization.

![The diagram represents the organization and project hierarchy with the respective roles.](https://cdn.sanity.io/images/3do82whm/next/f38b881860683d90654a1fd3c9db0be6c2f82d32-2624x1767.png)

### Organization roles

An **Organization** is an entity that groups multiple projects to provide a centralized location to manage tasks that are common to all projects, such as billing.

The available roles within an [organization](https://www.sanity.io/docs/platform-management/projects-organizations-and-billing) are:

- **Administrator**: administrators can manage billing details, legal contacts, organization members and manage project ownership. Organization administrators have the ability to manage user access to each project in the organization.
- **Billing manager**: billing managers can manage billing details, legal contacts and attach projects to the organization.
- **Developer**: developers can create and attach projects to the organization. They can also alter the metadata for an organization, such as the informal name.
- **Member**: this is the default role for users in an organization. Members are able to view teammates operating in all projects across the organization.- When a **Project Administrator** is also an **Organization Member**, they are able to autocomplete the name of teammates when inviting users to a project.

> \[!TIP]
> Protip
> Organization administrators don't automatically have access to every project in the organization. However, they do have the ability to fully manage user membership in projects (including their own membership).
> If a user needs access to a project, then either an organization or project administrator can add them.

> \[!WARNING]
> Gotcha
> Users with the `Organization Member` role are able to identify any other user that exists in a project across the organization. If you're using your Sanity organization in a multi-tenant setup, you may not want your users to be aware of what exists outside their accessible project.
> To avoid this situation, confirm that your users do not have the Organization Member role. To ensure that newly added users do not automatically inherit this role, you can remove the 'default organization role' in your organization settings.

### Project roles

A **Project** is a self-contained collection of datasets, members, and configuration options such as webhooks and tokens.

[Project roles](https://www.sanity.io/docs/user-guides/roles) include an administrator role as well. Whereas organization administrators can manage users and billing for the whole organization, project administrators have read and write access to all project settings and datasets.

> \[!WARNING]
> Gotcha
>
> - Organization administrators and project administrators are different roles and have different scopes.
> - Organization members are not automatically granted access to projects owned by the organization.
> - You can assign both the organization and project administrator roles to the same user.
> - Different Login providers e.g. email-password, Google, GitHub, do not map to a the same Sanity user account even if they use the same email.
> - To [transfer ownership](https://www.sanity.io/docs/platform-management/plans-and-payments) of a project to another organization, you need either an Administrator or a Billing manager role in both the source and the receiving organizations.

## Members and custom access controls

![Illustrative graphic showing a single user avatar connected to various icons representing different workflows](https://cdn.sanity.io/images/3do82whm/next/3bf653b7198c56f5dea40461f666077e00445971-3840x2160.png)

*A project member may have a different view, create or edit permission depending on document values and dataset tags.*

Members in Sanity can be active across multiple organizations and projects – but will need to be invited to any of them to begin collaborating and have unique roles within each. Their roles in a project will determine their access to datasets.

Members may be invited to a Sanity project via our built-in authentication or with Single Sign-on (SSO) configured, the provider of your choice.

> \[!TIP]
> Protip
> Our SAML support includes the ability to map groups from your authentication provider to roles within a Sanity project. [Read the docs to find out more](https://www.sanity.io/docs/developer-guides/sso-saml).

They can be privileged as administrators to have complete access to all project settings and the ability to modify any data. Using custom access controls, permissions can be scoped to no access. Or, at a minimum, view-only permissions of a single document based on any value within it.

Example: A member with the custom role “Junior Store Manager” may only be able to view documents of the type `product` with a `price` field greater than `100` on the **production** dataset.

For projects with multiple teams or lines of responsibility, member roles ensure that individual content creators and developers do not have their work disturbed unexpectedly.

## Datasets

![Illustrative graphic sthat show connection between user avatars, the Sanity Studio, and an example frontend](https://cdn.sanity.io/images/3do82whm/next/b65714c033677e6485fa010e51d00cdcc43804bb-3840x2160.png)

*Think of the Sanity Studio as just one of the many frontends that interact with Content Lake API’s*

A dataset is a collection of schemaless data stored as JSON and uploaded file and image assets. Members may have access to all datasets in a project by default, but their privileges can be filtered in each dataset using custom access controls.

Your applications can query data from multiple datasets, and your Studio can be configured to switch between them using [workspaces](https://www.sanity.io/docs/studio/workspaces). Content can be referenced between datasets using [cross-dataset references](https://www.sanity.io/docs/studio/cross-dataset-references).

Datasets are often used as “environments.” Many teams have dataset names mapped to **development**, **staging**, and **production** environments.

Predominately in Sanity, multi-tenant configurations are performed by separating content between datasets. You may have individual datasets for teams, brands, or markets, in addition to datasets as global sources of truth, which all other datasets may reference.

## References

- [Projects, organizations, and billing](https://www.sanity.io/docs/platform-management/projects-organizations-and-billing)
- [Plans and Payments](https://www.sanity.io/docs/platform-management/plans-and-payments)
- [Roles](https://www.sanity.io/docs/user-guides/roles)
