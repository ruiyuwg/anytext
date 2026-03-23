When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Custom roles

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

For: Administrators

Custom roles allow you to create tailored permission sets that match your organization's specific needs. This page covers custom roles and steps to create and manage them.

## [What are custom roles?](#what-are-custom-roles)

Custom roles let you create tailored permission sets for your organization. You can assign custom roles to individual users or teams. Users and teams get either a core role or custom role, but not both.

Use custom roles when Docker's core roles don't fit your needs.

## [Prerequisites](#prerequisites)

To configure custom roles, you need owner permissions in your Docker organization.

## [Create a custom role](#create-a-custom-role)

Before you can assign a custom role to users, you must create one in the Admin Console:

1. Sign in to [Docker Home](https://app.docker.com).
2. Select **Admin Console**.
3. Under **User management**, select **Roles** > **Create role**.
4. Create a name and describe what the role is for:
   - Provide a **Label**
   - Enter a unique **Name** identifier (can't be changed later)
   - Add an optional **Description**
5. Set permissions for the role by expanding permission categories and selecting the checkboxes for permissions. For a full list of available permissions, see the [custom roles permissions reference](#custom-roles-permissions-reference).
6. Select **Review** to review your custom roles configuration and see a summary of selected permissions.
7. Select **Create**.

With a custom role created, you can now [assign custom roles to users](#assign-custom-roles).

## [Edit a custom role](#edit-a-custom-role)

1. Sign in to [Docker Home](https://app.docker.com).
2. Select **Admin Console**.
3. Under **User management**, select **Roles**.
4. Find your custom role from the list, and select the **Actions menu**.
5. Select **Edit**.
6. You can edit the following custom role settings:
   - Label
   - Description
   - Permissions
7. After you have finished editing, select **Save**.

## [Assign custom roles](#assign-custom-roles)

Individual users Bulk users Teams

1. Sign in to [Docker Home](https://app.docker.com).

2. Select **Members**.

3. Locate the member you want to assign a custom role to, then select the **Actions menu**.

4. In the drop-down, select **Change role**.

5. In the **Select a role** drop-down, select your custom role.

6. Select **Save**.

7. Sign in to [Docker Home](https://app.docker.com).

8. Select **Members**.

9. Use the checkboxes in the username column to select all users you want to assign a custom role to.

10. Select **Change role**.

11. In the **Select a role** drop-down, select your custom role or a core role.

12. Select **Save**.

13. Sign in to [Docker Home](https://app.docker.com).

14. Select **Teams**.

15. Locate the team you want to assign a custom role to, then select the **Actions menu**.

16. Select **Assign role**.

17. Select your custom role, then select **Assign**.

The role column will update to the newly assigned role.

## [View role assignments](#view-role-assignments)

To see which users and teams are assigned to roles:

1. Sign in to [Docker Home](https://app.docker.com).
2. Select **Admin Console**.
3. Under **User management**, select **Roles**.
4. In the roles list, view the **Users** and **Teams** columns to see assignment counts.
5. Select a specific role to view its permissions and assignments in detail.

## [Reassign custom roles](#reassign-custom-roles)

Individual users Bulk users Teams

1. Sign in to [Docker Home](https://app.docker.com).

2. Select **Members**.

3. Locate the member you want to reassign, then select the **Actions menu**.

4. Select **Change role**.

5. In the **Select a role** drop-down, select the new role.

6. Select **Save**.

7. Sign in to [Docker Home](https://app.docker.com).

8. Select **Members**.

9. Use the checkboxes in the username column to select all users you want to reassign.

10. Select **Change role**.

11. In the **Select a role** drop-down, select the new role.

12. Select **Save**.

13. Sign in to [Docker Home](https://app.docker.com).

14. Select **Teams**.

15. Locate the team, then select the **Actions menu**.

16. Select **Change role**.

17. In the pop-up window, select a role from the drop-down menu, then select **Save**.

## [Delete a custom role](#delete-a-custom-role)

Before deleting a custom role, you must reassign all users and teams to different roles.

1. Sign in to [Docker Home](https://app.docker.com).
2. Select **Admin Console**.
3. Under **User management**, select **Roles**.
4. Find your custom role from the list, and select the **Actions menu**.
5. If the role has assigned users or teams:
   - Navigate to the **Members** page and change the role for all users assigned to this custom role
   - Navigate to the **Teams** page and reassign all teams that have this custom role
6. Once no users or teams are assigned, return to **Roles**.
7. Find your custom role and select the **Actions menu**.
8. Select **Delete**.
9. In the confirmation window, select **Delete** to confirm.

## [Custom roles permissions reference](#custom-roles-permissions-reference)

Custom roles are built by selecting specific permissions across different categories. The following tables list all available permissions you can assign to a custom role.

### [Organization management](#organization-management)

Permission

Description

View teams

View teams and team members

Manage teams

Create, update, and delete teams and team members

Manage registry access

Control which registries members can access

Manage image access

Set policies for which images members can pull and use

Update organization information

Update organization information such as name and location

Member management

Manage organization members, invites, and roles

View custom roles

View existing custom roles and their permissions

Manage custom roles

Full access to custom role management and assignment

Manage organization access tokens

Create, update, and delete repositories in this org. Push/pull or registry actions not included

View activity logs

Access organization audit logs and activity history

View domains

View domains and domain audit settings

Manage domains

Manage verified domains and domain audit settings

View SSO and SCIM

View single sign-on and user provisioning configurations

Manage SSO and SCIM

Full access to SSO and SCIM management

Manage Desktop settings

Configure Docker Desktop settings policies and view usage reports

### [Docker Hub](#docker-hub)

Permission

Description

View repositories

View repository details and contents

Manage repositories

Create, update, and delete repositories and their contents

### [Billing](#billing)

Permission

Description

View billing

View organization billing information

Manage billing

Complete access to managing organization billing

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/enterprise/security/roles-and-permissions/custom-roles.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fenterprise%2fsecurity%2froles-and-permissions%2fcustom-roles%2f\&labels=status%2Ftriage)

Table of contents
