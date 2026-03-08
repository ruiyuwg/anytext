# Roles and permissions

The Sanity [Roles system](https://www.sanity.io/docs/user-guides/roles) is a granular way of attaching specific capabilities to specific groups of users. It is designed to function in a structured and flexible way. The goal of the Roles system is to provide a set of strong default permissions groups with an API for creating, managing, and using custom roles built the way your organization works with content.

> \[!NOTE]
> Use the Access API
> The preferred method for interacting with roles is the [Access API](https://www.sanity.io/docs/http-reference/access-api). The project-based [Roles API](https://www.sanity.io/docs/http-reference/roles) is still available, but the documentation below focuses on the Access API.

The Roles system is comprised primarily of:

- Resources
- Permissions
- Roles
- Members (users)

## Resources

A resource defines an element of a Sanity **project** or **organization** on which a user can have special grants.

## Permissions

Every resource has a list of permissions. These permissions represent actions that can be performed on the resource. A user or robot must be granted a permission (through a role) in order to perform the action.

The permission typically takes the form of `{company}.{resourceType}.{objectName}.{action}` but this is not always the case due to legacy terms.

There are both pre-defined and custom permissions. Pre-defined permissions are included with the product and are not editable.

## Role

Roles define a set of grants which project members can have assigned to them. A project member can have many roles and grants, even within the same organization.

### Default Roles

By default, there are specifically defined roles available for each plan type. Custom roles are available for Enterprise customers.

#### All plans

- Administrator: Read and write access to all datasets, with full access to all project settings.
- API Tokens- Editor Token (read+write)
- Viewer Token (read-only)

#### Free

- Administrator
- Viewer: Can view all documents in all datasets within the project

#### Growth

- Administrator
- Editor
- Viewer
- Developer
- Contributor: Read and write access to draft content within all datasets, with no access to project settings.

## User

A user is a person that has one or more roles assigned to them.

A user is initially added to a resource via invitation or access request. A user that already has one role can be assigned roles in another project within the same organization or at the organization level without requiring a separate invite.

As an organization owns multiple resources, such as projects projects, any users with roles on these resources are also returned when reading the users of an organization.

If a user has roles in multiple projects, they are considered a single user and can be referenced by their `sanityUserId`. For example, inviting user A to project B and project C in the same organization will result in a single user with two memberships.

## Token

A [token](https://www.sanity.io/docs/content-lake/http-auth) is a unique string that can be used to authorize requests towards your content lake. A token can be given a role that defines its access to the system. Tokens should generally be considered secret.

## Creating a custom role

*This is a paid feature, available on the Enterprise plan.*

To create a custom role, you need to create a new role, create any custom permissions for the role, attach those permissions to the role, and assign the role to individual users.

### Create the role

A custom role is an object containing `title`, `name`, and `description` properties. In this example, a custom role with a name of `custom-role`, a title of `My Custom Role`, and a description of `Custom role` is created by sending that data to a project. This example adds the permission to deploy studios to the new role.

```typescript
import { client } from "./client"; // use a configured @sanity/client

const { projectId } = client.config();
const response = await client.request({
  uri: `/access/project/${projectId}/roles`,
  method: 'POST',
  body: {
    name: 'custom-role',
    description: 'My custom role',
    title: 'Custom Role',
    permissions: [
      {
        name: 'sanity-project',
        action: 'deployStudio'
      }
    ]
  },
});
```

This is now a custom role with a single permission. You can update permissions add additional permissions to a role by appending the role name to the URI and using a `PUT` operation. See the [Access API](https://www.sanity.io/docs/http-reference/access-api) for details.

### Inspecting available permissions

To see the available permission resources for the current project, you can send a `GET` request to the `/permissions` API endpoint for the current project.

**Request**

```typescript
import { client } from "./client"; // use a configured @sanity/client

const { projectId } = client.config();
const response = await client.request({
  uri: `/access/project/${projectId}/permissions`,
  method: 'GET',
});
```

**Response**

```json
{
  "data": [
    {
      "title": "All documents",
      "name": "sanity-document-filter-all-documents",
      "description": "",
      "resourceType": "project",
      "resourceId": "your-project-id",
      "type": "sanity.document.filter",
      "ownerOrganizationId": "your-organization-id",
      "config": {
        "filter": "_id in path(\"**\")"
      },
      "actions": [
        {
          "name": "create",
          "title": "Create",
          "description": "Create documents matching the filter"
        },
        {
          "name": "read",
          "title": "Read",
          "description": "Read documents matching the filter"
        },
        {
          "name": "update",
          "title": "Update",
          "description": "View history for documents matching the filter"
        },
        {
          "name": "manage",
          "title": "Manage",
          "description": "Manage documents matching the filter"
        },
        {
          "name": "history",
          "title": "History",
          "description": "Read the history of documents matching the filter"
        },
        {
          "name": "editHistory",
          "title": "Edit History",
          "description": "Edit the history of documents matching the filter"
        }
      ]
    },
    {
      "title": "Project tags",
      "name": "sanity-project-tags",
      "description": "",
      "resourceType": "project",
      "resourceId": "your-project-id",
      "type": "sanity.project.tags",
      "ownerOrganizationId": "your-organization-id",
      "config": {},
      "actions": [
        {
          "name": "read",
          "title": "Read",
          "description": "Ability to see all of the project's tags"
        },
        {
          "name": "create",
          "title": "Create",
          "description": "Ability to create new project tags"
        },
        {
          "name": "update",
          "title": "Update",
          "description": "Ability to update project tag settings"
        },
        {
          "name": "delete",
          "title": "Delete",
          "description": "Ability to delete project tags"
        }
      ]
    },
    {
      "title": "Image assets",
      "name": "sanity-document-filter-images",
      "description": "",
      "resourceType": "project",
      "resourceId": "your-project-id",
      "type": "sanity.document.filter",
      "ownerOrganizationId": "your-organization-id",
      "config": {
        "filter": "_type == \"sanity.imageAsset\""
      },
      "actions": [
        {
          "name": "create",
          "title": "Create",
          "description": "Create documents matching the filter"
        },
        {
          "name": "read",
          "title": "Read",
          "description": "Read documents matching the filter"
        },
        {
          "name": "update",
          "title": "Update",
          "description": "View history for documents matching the filter"
        },
        {
          "name": "manage",
          "title": "Manage",
          "description": "Manage documents matching the filter"
        },
        {
          "name": "history",
          "title": "History",
          "description": "Read the history of documents matching the filter"
        },
        {
          "name": "editHistory",
          "title": "Edit History",
          "description": "Edit the history of documents matching the filter"
        }
      ]
    },
    {
      "title": "Project Roles",
      "name": "sanity-project-roles",
      "description": "",
      "resourceType": "project",
      "resourceId": "your-project-id",
      "type": "sanity.project.roles",
      "ownerOrganizationId": "your-organization-id",
      "config": {},
      "actions": [
        {
          "name": "create",
          "title": "Create",
          "description": "Create a role on a project"
        },
        {
          "name": "update",
          "title": "Update",
          "description": "Update a role on a project"
        },
        {
          "name": "delete",
          "title": "Delete",
          "description": "Delete a role on a project"
        },
        {
          "name": "read",
          "title": "Read",
          "description": "Read a role on a project"
        }
      ]
    },
    {
      "title": "Project Tokens",
      "name": "sanity-project-tokens",
      "description": "",
      "resourceType": "project",
      "resourceId": "your-project-id",
      "type": "sanity.project.tokens",
      "ownerOrganizationId": "your-organization-id",
      "config": {},
      "actions": [
        {
          "name": "read",
          "title": "Read",
          "description": "Ability to read project tokens"
        },
        {
          "name": "create",
          "title": "Create",
          "description": "Ability to create project tokens"
        },
        {
          "name": "delete",
          "title": "Delete",
          "description": "Ability to delete project tokens"
        }
      ]
    },
    {
      "title": "Create Session",
      "name": "sanity-document-filter-create-sessions",
      "description": "",
      "resourceType": "project",
      "resourceId": "your-project-id",
      "type": "sanity.document.filter",
      "ownerOrganizationId": "your-organization-id",
      "config": {
        "filter": "!(_id in [\"_.groups.create-session\", \"_.groups.administrator\", \"_.groups.write\", \"_.groups.read\", \"_.groups.public\"] || _id in path(\"_.groups.sanity.**\")) && _id in path(\"**\")"
      },
      "actions": [
        {
          "name": "create",
          "title": "Create",
          "description": "Create documents matching the filter"
        },
        {
          "name": "read",
          "title": "Read",
          "description": "Read documents matching the filter"
        },
        {
          "name": "update",
          "title": "Update",
          "description": "View history for documents matching the filter"
        },
        {
          "name": "manage",
          "title": "Manage",
          "description": "Manage documents matching the filter"
        },
        {
          "name": "history",
          "title": "History",
          "description": "Read the history of documents matching the filter"
        },
        {
          "name": "editHistory",
          "title": "Edit History",
          "description": "Edit the history of documents matching the filter"
        }
      ]
    },
    {
      "title": "All documents",
      "name": "sanity-all-documents",
      "description": "",
      "resourceType": "project",
      "resourceId": "your-project-id",
      "type": "sanity.document.filter.mode",
      "ownerOrganizationId": "your-organization-id",
      "config": {
        "filter": "_id in path(\"**\")"
      },
      "actions": [
        {
          "name": "mode",
          "title": "Mode",
          "description": "Access control mode given to documents with a given matching the filter"
        }
      ]
    },
    {
      "title": "Draft documents",
      "name": "sanity-document-filter-drafts",
      "description": "",
      "resourceType": "project",
      "resourceId": "your-project-id",
      "type": "sanity.document.filter",
      "ownerOrganizationId": "your-organization-id",
      "config": {
        "filter": "(_id in path(\"drafts.**\") || _id in path(\"versions.**\"))"
      },
      "actions": [
        {
          "name": "create",
          "title": "Create",
          "description": "Create documents matching the filter"
        },
        {
          "name": "read",
          "title": "Read",
          "description": "Read documents matching the filter"
        },
        {
          "name": "update",
          "title": "Update",
          "description": "View history for documents matching the filter"
        },
        {
          "name": "manage",
          "title": "Manage",
          "description": "Manage documents matching the filter"
        },
        {
          "name": "history",
          "title": "History",
          "description": "Read the history of documents matching the filter"
        },
        {
          "name": "editHistory",
          "title": "Edit History",
          "description": "Edit the history of documents matching the filter"
        }
      ]
    },
    {
      "title": "File assets",
      "name": "sanity-document-filter-files",
      "description": "",
      "resourceType": "project",
      "resourceId": "your-project-id",
      "type": "sanity.document.filter",
      "ownerOrganizationId": "your-organization-id",
      "config": {
        "filter": "_type == \"sanity.fileAsset\""
      },
      "actions": [
        {
          "name": "create",
          "title": "Create",
          "description": "Create documents matching the filter"
        },
        {
          "name": "read",
          "title": "Read",
          "description": "Read documents matching the filter"
        },
        {
          "name": "update",
          "title": "Update",
          "description": "View history for documents matching the filter"
        },
        {
          "name": "manage",
          "title": "Manage",
          "description": "Manage documents matching the filter"
        },
        {
          "name": "history",
          "title": "History",
          "description": "Read the history of documents matching the filter"
        },
        {
          "name": "editHistory",
          "title": "Edit History",
          "description": "Edit the history of documents matching the filter"
        }
      ]
    },
    {
      "title": "Project GraphQL",
      "name": "sanity-project-graphql",
      "description": "",
      "resourceType": "project",
      "resourceId": "your-project-id",
      "type": "sanity.project.graphql",
      "ownerOrganizationId": "your-organization-id",
      "config": {},
      "actions": [
        {
          "name": "manage",
          "title": "Manage",
          "description": "Ability to manage graphql"
        }
      ]
    },
    {
      "title": "Project CORS",
      "name": "sanity-project-cors",
      "description": "",
      "resourceType": "project",
      "resourceId": "your-project-id",
      "type": "sanity.project.cors",
      "ownerOrganizationId": "your-organization-id",
      "config": {},
      "actions": [
        {
          "name": "read",
          "title": "Read",
          "description": "Ability to read project cors"
        },
        {
          "name": "create",
          "title": "Create",
          "description": "Ability to create project cors"
        },
        {
          "name": "delete",
          "title": "Delete",
          "description": "Ability to delete project cors"
        }
      ]
    },
    {
      "title": "Project Datasets",
      "name": "sanity-project-datasets",
      "description": "",
      "resourceType": "project",
      "resourceId": "your-project-id",
      "type": "sanity.project.datasets",
      "ownerOrganizationId": "your-organization-id",
      "config": {},
      "actions": [
        {
          "name": "read",
          "title": "Read",
          "description": "Ability to see all of the project's datasets"
        },
        {
          "name": "create",
          "title": "Create",
          "description": "Ability to create new project datasets"
        },
        {
          "name": "update",
          "title": "Update",
          "description": "Ability to update project dataset settings"
        },
        {
          "name": "delete",
          "title": "Delete",
          "description": "Ability to delete project datasets"
        }
      ]
    },
    {
      "title": "Project Usage",
      "name": "sanity-project-usage",
      "description": "",
      "resourceType": "project",
      "resourceId": "your-project-id",
      "type": "sanity.project.usage",
      "ownerOrganizationId": "your-organization-id",
      "config": {},
      "actions": [
        {
          "name": "read",
          "title": "Read",
          "description": "Ability to read project usage"
        }
      ]
    },
    {
      "title": "Project Webhooks",
      "name": "sanity-project-webhooks",
      "description": "",
      "resourceType": "project",
      "resourceId": "your-project-id",
      "type": "sanity.project.webhooks",
      "ownerOrganizationId": "your-organization-id",
      "config": {},
      "actions": [
        {
          "name": "read",
          "title": "Read",
          "description": "Ability to read project webhooks"
        },
        {
          "name": "create",
          "title": "Create",
          "description": "Ability to create project webhooks"
        },
        {
          "name": "delete",
          "title": "Delete",
          "description": "Ability to delete project webhooks"
        },
        {
          "name": "update",
          "title": "Update",
          "description": "Ability to update project webhooks"
        }
      ]
    },
    {
      "title": "Project",
      "name": "sanity-project",
      "description": "",
      "resourceType": "project",
      "resourceId": "your-project-id",
      "type": "sanity.project",
      "ownerOrganizationId": "your-organization-id",
      "config": {},
      "actions": [
        {
          "name": "read",
          "title": "Read",
          "description": "Read the project"
        },
        {
          "name": "update",
          "title": "Update",
          "description": "Update the project"
        },
        {
          "name": "delete",
          "title": "Delete",
          "description": "Delete the project"
        },
        {
          "name": "createSession",
          "title": "Create session",
          "description": "Create a session for third party users"
        },
        {
          "name": "deployStudio",
          "title": "Deploy Studio",
          "description": "Deploy a Sanity Studio for a project"
        }
      ]
    },
    {
      "title": "Project Members",
      "name": "sanity-project-members",
      "description": "",
      "resourceType": "project",
      "resourceId": "your-project-id",
      "type": "sanity.project.members",
      "ownerOrganizationId": "your-organization-id",
      "config": {},
      "actions": [
        {
          "name": "invite",
          "title": "Invite",
          "description": "Ability to invite project members"
        },
        {
          "name": "read",
          "title": "Read",
          "description": "Ability to read project members"
        },
        {
          "name": "update",
          "title": "Update",
          "description": "Ability to update a project member role and third party data"
        },
        {
          "name": "delete",
          "title": "Delete",
          "description": "Ability to delete project members"
        }
      ]
    }
  ],
  "nextCursor": null
}
```

## Create a custom permission

*This is a paid feature, available on the Enterprise plan.*

The above examples create a new role using pre-made permission resources. When you need to create granular permissions for specific roles, you can create a custom permission resource.

To create a custom resource around a specific set of documents, you can use the `sanity.document.filter` schema. This schema provides a `config` option for adding a GROQ filter to specify a specific set of documents.

```typescript
import { client } from "./client"; // use a configured @sanity/client

const { projectId } = client.config();
const response = await client.request({
  uri: `/access/project/${projectId}/permissions`,
  method: 'POST',
  body: {
    name: 'custom-permission',
    description: 'My custom permission',
    title: 'Custom Permission',
    type: 'sanity.document.filter',
    config: {
      filter: '_type == "post"'
    }
  }
});
```

This creates a new permission specific to documents with a `_type` of `post`. Custom document filter permissions automatically start with create, read, update, manage, manageHistory, and history actions.

### Add custom permission to role

Using the earlier example, you can apply the custom permission to a role.

**New role**

```typescript
import { client } from "./client"; // use a configured @sanity/client

const { projectId } = client.config();
const response = await client.request({
  uri: `/access/project/${projectId}/roles`,
  method: 'POST',
  body: {
    name: 'custom-role',
    description: 'My custom role',
    title: 'Custom Role',
    permissions: [
      {
        name: 'sanity-project',
        action: 'deployStudio'
      },
      {
        name: 'custom-permission',
        action: 'read'
      },
      {
        name: 'custom-permission',
        action: 'update'
      },
      // ...
    ]
  },
});
```

**Existing role**

```typescript
import { client } from "./client"; // use a configured @sanity/client

const { projectId } = client.config();
const response = await client.request({
  // Note the role name at the end of the uri
  uri: `/access/project/${projectId}/roles/custom-role`,
  method: 'PUT',
  body: {
    name: 'custom-role',
    description: 'My custom role',
    title: 'Custom Role',
    permissions: [
      {
        name: 'sanity-project',
        action: 'deployStudio'
      },
      {
        name: 'custom-permission',
        action: 'read'
      },
      {
        name: 'custom-permission',
        action: 'update'
      },
      // ...
    ]
  },
});
```

## All permissions by default role

The following are the permissions for the default “Administrator” role available for various plans. You can view your default permission resources with the [Access API](https://www.sanity.io/docs/http-reference/access-api).

### Project administrator default permissions

**Response**

```json
{
  "name": "administrator",
  "title": "Administrator",
  "description": "Read and write access to all datasets, with full access to all project settings.",
  "isCustom": false,
  "resourceId": "3do82whm",
  "resourceType": "project",
  "appliesToUsers": true,
  "appliesToRobots": false,
  "permissions": [
    {
      "name": "sanity-project",
      "action": "read",
      "params": {}
    },
    {
      "name": "sanity-project",
      "action": "update",
      "params": {}
    },
    {
      "name": "sanity-project",
      "action": "delete",
      "params": {}
    },
    {
      "name": "sanity-project-members",
      "action": "invite",
      "params": {}
    },
    {
      "name": "sanity-project-members",
      "action": "update",
      "params": {}
    },
    {
      "name": "sanity-project-members",
      "action": "read",
      "params": {}
    },
    {
      "name": "sanity-project-roles",
      "action": "create",
      "params": {}
    },
    {
      "name": "sanity-project-roles",
      "action": "read",
      "params": {}
    },
    {
      "name": "sanity-project-roles",
      "action": "update",
      "params": {}
    },
    {
      "name": "sanity-project",
      "action": "deployStudio",
      "params": {}
    },
    {
      "name": "sanity-project",
      "action": "createSession",
      "params": {}
    },
    {
      "name": "sanity-project-members",
      "action": "delete",
      "params": {}
    },
    {
      "name": "sanity-project-roles",
      "action": "delete",
      "params": {}
    },
    {
      "name": "sanity-project-datasets",
      "action": "create",
      "params": {}
    },
    {
      "name": "sanity-project-datasets",
      "action": "read",
      "params": {}
    },
    {
      "name": "sanity-project-datasets",
      "action": "update",
      "params": {}
    },
    {
      "name": "sanity-project-tags",
      "action": "create",
      "params": {}
    },
    {
      "name": "sanity-project-tags",
      "action": "read",
      "params": {}
    },
    {
      "name": "sanity-project-tags",
      "action": "update",
      "params": {}
    },
    {
      "name": "sanity-project-tokens",
      "action": "create",
      "params": {}
    },
    {
      "name": "sanity-project-tokens",
      "action": "read",
      "params": {}
    },
    {
      "name": "sanity-project-tokens",
      "action": "delete",
      "params": {}
    },
    {
      "name": "sanity-project-datasets",
      "action": "delete",
      "params": {}
    },
    {
      "name": "sanity-project-tags",
      "action": "delete",
      "params": {}
    },
    {
      "name": "sanity-project-cors",
      "action": "create",
      "params": {}
    },
    {
      "name": "sanity-project-cors",
      "action": "read",
      "params": {}
    },
    {
      "name": "sanity-project-cors",
      "action": "delete",
      "params": {}
    },
    {
      "name": "sanity-project-webhooks",
      "action": "create",
      "params": {}
    },
    {
      "name": "sanity-project-webhooks",
      "action": "read",
      "params": {}
    },
    {
      "name": "sanity-project-webhooks",
      "action": "update",
      "params": {}
    },
    {
      "name": "sanity-project-graphql",
      "action": "manage",
      "params": {}
    },
    {
      "name": "sanity-project-usage",
      "action": "read",
      "params": {}
    },
    {
      "name": "sanity-project-webhooks",
      "action": "delete",
      "params": {}
    },
    {
      "name": "sanity-all-documents",
      "action": "mode",
      "params": {
        "mode": "publish",
        "history": true
      }
    }
  ]
}
```

**Endpoint**

```text
https://api.sanity.io/v2025-07-11/access/project/{projectId}/roles/administrator
```

### Organization administrator default permissions

**Response**

```json
{
  "name": "administrator",
  "title": "Administrator",
  "description": "Administrators can manage billing details, legal contacts, organization members and manage project ownership",
  "isCustom": false,
  "resourceId": "oSyH1iET5",
  "resourceType": "organization",
  "appliesToUsers": true,
  "appliesToRobots": false,
  "permissions": [
    {
      "name": "sanity-organization",
      "action": "read",
      "params": {}
    },
    {
      "name": "sanity-organization",
      "action": "update",
      "params": {}
    },
    {
      "name": "sanity-organization",
      "action": "delete",
      "params": {}
    },
    {
      "name": "sanity-organization",
      "action": "billing",
      "params": {}
    },
    {
      "name": "sanity-organization-projects",
      "action": "read",
      "params": {}
    },
    {
      "name": "sanity-organization-projects",
      "action": "attach",
      "params": {}
    },
    {
      "name": "sanity-organization-projects",
      "action": "detach",
      "params": {}
    },
    {
      "name": "sanity-organization-legal",
      "action": "read",
      "params": {}
    },
    {
      "name": "sanity-organization-legal",
      "action": "update",
      "params": {}
    },
    {
      "name": "sanity-organization-members",
      "action": "read",
      "params": {}
    },
    {
      "name": "sanity-organization-members",
      "action": "delete",
      "params": {}
    },
    {
      "name": "sanity-organization-members",
      "action": "update",
      "params": {}
    },
    {
      "name": "sanity-organization-members",
      "action": "invite",
      "params": {}
    },
    {
      "name": "sanity-organization-roles",
      "action": "create",
      "params": {}
    },
    {
      "name": "sanity-organization-roles",
      "action": "read",
      "params": {}
    },
    {
      "name": "sanity-organization-roles",
      "action": "update",
      "params": {}
    },
    {
      "name": "sanity-organization-roles",
      "action": "delete",
      "params": {}
    },
    {
      "name": "sanity-organization-tokens",
      "action": "read",
      "params": {}
    },
    {
      "name": "sanity-organization-tokens",
      "action": "create",
      "params": {}
    },
    {
      "name": "sanity-organization-tokens",
      "action": "delete",
      "params": {}
    },
    {
      "name": "sanity-project-members",
      "action": "read",
      "params": {}
    },
    {
      "name": "sanity-project-members",
      "action": "delete",
      "params": {}
    },
    {
      "name": "sanity-project-members",
      "action": "update",
      "params": {}
    },
    {
      "name": "sanity-project-members",
      "action": "invite",
      "params": {}
    },
    {
      "name": "sanity-media-library",
      "action": "read",
      "params": {}
    },
    {
      "name": "sanity-media-library-members",
      "action": "read",
      "params": {}
    },
    {
      "name": "sanity-media-library-members",
      "action": "delete",
      "params": {}
    },
    {
      "name": "sanity-media-library-members",
      "action": "update",
      "params": {}
    },
    {
      "name": "sanity-media-library-members",
      "action": "invite",
      "params": {}
    },
    {
      "name": "sanity-sdk-applications",
      "action": "read",
      "params": {}
    },
    {
      "name": "sanity-sdk-applications",
      "action": "deploy",
      "params": {}
    },
    {
      "name": "sanity-sdk-applications",
      "action": "delete",
      "params": {}
    },
    {
      "name": "sanity-project",
      "action": "read",
      "params": {}
    },
    {
      "name": "sanity-project",
      "action": "deployStudio",
      "params": {}
    },
    {
      "name": "sanity-dashboard-configuration-organization",
      "action": "read",
      "params": {}
    },
    {
      "name": "sanity-dashboard-configuration-organization",
      "action": "update",
      "params": {}
    },
    {
      "name": "sanity-dashboard-configuration-organization",
      "action": "create",
      "params": {}
    },
    {
      "name": "sanity-view",
      "action": "read",
      "params": {}
    },
    {
      "name": "sanity-view",
      "action": "update",
      "params": {}
    },
    {
      "name": "sanity-view",
      "action": "create",
      "params": {}
    },
    {
      "name": "sanity-view",
      "action": "delete",
      "params": {}
    },
    {
      "name": "sanity-organization-views",
      "action": "read",
      "params": {}
    },
    {
      "name": "sanity-organization-views",
      "action": "update",
      "params": {}
    },
    {
      "name": "sanity-organization-views",
      "action": "create",
      "params": {}
    },
    {
      "name": "sanity-organization-views",
      "action": "delete",
      "params": {}
    },
    {
      "name": "sanity-dashboard-intents",
      "action": "create",
      "params": {}
    },
    {
      "name": "sanity-dashboard-intents",
      "action": "update",
      "params": {}
    },
    {
      "name": "sanity-dashboard-intents",
      "action": "delete",
      "params": {}
    },
    {
      "name": "sanity-view",
      "action": "read",
      "params": {}
    },
    {
      "name": "sanity-organization-sessions",
      "action": "read",
      "params": {}
    },
    {
      "name": "sanity-organization-sessions",
      "action": "delete",
      "params": {}
    }
  ]
}
```

**Endpoint**

```text
https://api.sanity.io/v2025-07-11/access/organization/{organizationId}/roles/administrator
```
