By default, RAM users or roles who aren't cluster creators and haven't been granted full cluster permissions have no RBAC permissions in the cluster. You can call this interface to update RBAC access permissions for RAM users/roles, including accessible resources, permission scopes, and preset roles, for enhanced security control on resources in Container Service for Kubernetes (ACK) clusters.

## Operation description

-   If you use a Resource Access Management (RAM) account to call this operation, make sure it has permissions to modify cluster authorization information for other RAM users or RAM roles. Otherwise, the `StatusForbidden` or `ForbiddenGrantPermissions` error code is returned. For more information, see [Use a RAM user to grant RBAC permissions to other RAM users](/help/en/ack/af4889).
-   This operation overwrites all existing cluster permissions for the target RAM user or RAM role. You must specify all the permissions you want to grant to the RAM user or RAM role in the request.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/CS/2015-12-15/GrantPermissions)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/CS/2015-12-15/GrantPermissions)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

cs:GrantPermission

update

\*All Resources

`*`

none

none

## Request syntax

```
POST /permissions/users/{uid} HTTP/1.1
```

## Request parameters

Parameter

Type

Required

Description

Example

uid

string

Yes

The ID of the RAM user or RAM role whose permissions you want to update.

2367\*\*\*\*

body

array<object>

No

The request body.

object

No

The queried permissions.

cluster

string

Yes

The ID of the cluster on which you want to grant permissions to the RAM role or RAM role.

-   Set this parameter to an empty string if `role_type` is set to `all-clusters`.

c796c60\*\*\*

is\_custom

boolean

No

Specifies whether to assign a custom role to the RAM user or RAM role. If you want to assign a custom role to the RAM user or RAM role, set `role_name` to the name of the custom role.

false

role\_name

string

Yes

The predefined role name. Valid values:

-   `admin`: administrator
-   `admin-view`: read-only administrator
-   `ops`: O&M engineer
-   `dev`: developer
-   `restricted`: restricted user
-   Custom role

Note:

-   You cannot grant namespace-level permissions to the `admin`, `admin-view`, and `ops` roles.
-   You cannot grant all cluster-level permissions to the `admin-view` role.

ops

role\_type

string

Yes

The authorization type. Valid values:

-   `cluster`: authorizes the RAM user or RAM role to manage the specified clusters.
-   `namespace`: authorizes the RAM user or RAM role to manage the specified namespaces.
-   `all-clusters`: authorizes the RAM user or RAM role to manage all clusters.

cluster

namespace

string

No

The namespace that you want to authorize the RAM user or RAM role to manage. This parameter is required only if you set role\_type to namespace.

test

is\_ram\_role

boolean

No

Specifies whether to use a RAM role to grant permissions.

false

## Response parameters

Parameter

Type

Description

Example

The current API has no return parameters

## Examples

Sample success responses

`JSON`format

```
{}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/CS/2015-12-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-01-09

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/GrantPermissions?updateTime=2024-01-09#workbench-doc-change-demo)
