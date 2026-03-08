# Access

A centralized API to manage resource access control through roles and permissions.

#### Want to get started?

[Roles user guide](https://www.sanity.io/docs/user-guides/roles)

## Authentication

- All requests must be [authenticated](https://www.sanity.io/docs/content-lake/http-auth).
- See the individual endpoints below for required usage permissions.

## Terms

Throughout this document the terms `{resourceType}` and `{resourceId}` refer to the resource the API request is being applied to.

- `{resourceType}` can be an organization or project.
- `{resourceId}` is the ID of the resource the API request affects.

When a client uses this API, it acts in the context of a specific resource. For example:

- https://api.sanity.io/v2025-07-11/access/**organization/or0Bc1hcJ**/roles
- https://api.sanity.io/v2025-07-11/access/**project/c7ja4siy**/roles

## Key concepts

### Resource

A resource is an entity that can be managed and accessed through the API. Currently, the supported resources are `organization` and `project`.

### Permission

Every resource has a list of permissions. These permissions represent actions that can be performed on the resource. A user or robot must be granted a permission (through a role) in order to perform the action.

The permission typically takes the form of `{company}.{resourceType}.{objectName}.{action}` but this is not always the case due to legacy terms.

There are both pre-defined and custom permissions. Pre-defined permissions are included with the product and are not editable.

### Role

A role is a named collection of permissions that can be applied to a user or robot. Roles are in the scope of a resource and can only receive permissions that are in the same resource scope. For example, a project role can only include document permissions for that project.

A role is specific to a single resource and can only include permissions within that resource's scope. In the future, roles will be able to include permissions for child resources as well. For example, an organization role will be able to include document permissions for specific projects or all projects.

A user cannot be part of a resource without a role. Each user in an organization must have at least one role assigned to them.

There are both pre-defined and custom roles. Pre-defined roles are included with the product and are not editable, but can be removed from a resource if the feature is enabled.

### User

A user is a person that has one or more roles assigned to them.

A user is initially added to a resource via invitation or access request. A user that already has one role can be assigned roles in another project within the same organization or at the organization level without requiring a separate invite.

As an organization owns multiple resources (e.g., projects), any users with roles on these resources are also returned when reading the users of an organization.

If a user has roles in multiple projects, they are considered a single user and can be referenced by their sanityUserId. For example, inviting user A to project B and project C in the same organization will result in a single user with two memberships.

## Administrator Rules

### Changing Administrators

Only administrators can assign or remove roles with admin permissions. This prevents unauthorized permission elevation.

This rule applies only to the default roles. Custom roles are fully managed by the organization and can be assigned to users without restriction.

### Last Administrator

Each resource must have at least one role assigned to at least one user that can read users, read roles, and assign roles to users. This prevents an organization from losing control over their resources.

This is designed as a permission-level check and not a role-level check, so that the default roles can be removed from a resource. Customers with advanced roles management enabled can remove the default roles from a resource.

## Breaking Changes from previous versions

See the [details of the existing API for a better understanding of the changes](https://www.sanity.io/docs/content-lake/roles-concepts).

Summary:

- `Access` is now the root path for managing access-based resources. Previously it was organization and project but these are now nested under the access root.
- Internal IDs are no longer exposed for permissions or roles. The `name` property is now used as the unique identifier for permissions and roles.
- `Permissions` now represent `grants`, `resources`, and `permissionResourceSchema`. These are now legacy terms.
- The endpoint `/organization/:organizationId/users` returns users for all resources owned by the organization. Previously, a client would have to make a request for each resource (e.g., project) individually.
- `users` replaces the term `ACL`. Users represents individuals assigned roles within the organization.
- The pre-defined roles can be completely removed from a resource. Previously, default roles could not be removed from a resource. E.g., a project required at least one project administrator, even if there were custom roles that would cover the same use case.

# Projects

The project API allows you to create and manage projects and datasets.

For role and permission management, we suggest using the newer [Access API instead](https://www.sanity.io/docs/http-reference/access-api).

## Authentication

- All requests must be [authenticated](https://www.sanity.io/docs/content-lake/http-auth).
- Managing projects requires the Administrator or Developer role, or equivalent.

# Roles

Use the Roles API to assign roles, grants, and permissions.

> \[!NOTE]
> We suggest using the [newer Access API for role management](https://www.sanity.io/docs/http-reference/access-api) instead of this legacy Roles API.

## Authentication

- All requests must be [authenticated](https://www.sanity.io/docs/content-lake/http-auth).
- Administrator or equal access is required to interact with this API.

# Libraries and tooling

#### Clients

[JavaScript Client](https://github.com/sanity-io/client)

[PHP Client](https://github.com/sanity-io/sanity-php)

[Rust Client](https://github.com/Riley1101/sanity-rs)

[LINQ (C#) Client](https://github.com/oslofjord/sanity-linq)

[Flutter Client](https://pub.dev/packages/sanity_client)

#### Portable Text

[Editor Playground](https://playground.portabletext.org/)

[Standalone Portable Text Editor](https://www.portabletext.org)

[React serializer](https://github.com/portabletext/react-portabletext/)

[Vue serializer](https://github.com/portabletext/vue-portabletext/)

[Svelte serializer](https://github.com/portabletext/svelte-portabletext/)

[HTML serializer](https://github.com/portabletext/to-html/)

#### Frontend tooling

[Next.js toolkit](https://github.com/sanity-io/next-sanity)

[Nuxt module](https://sanity.nuxtjs.org/)

[Astro integration](https://github.com/sanity-io/sanity-astro)
