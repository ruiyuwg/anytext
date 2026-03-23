In a Container Service for Kubernetes (ACK) cluster, non-cluster creators, Resource Access Management (RAM) users, and RAM roles do not have any Role-Based Access Control (RBAC) permissions in the cluster by default. You can call this operation to specify the resources that can be accessed, permission scope, and predefined roles. This helps you better manage the access control on resources in ACK clusters.

## Operation description

**Precautions**:

-   You can update the permissions of a RAM user or RAM role on a cluster by using full update or incremental update. If you use full update, the existing permissions of the RAM user or RAM role on the cluster are overwritten. You must specify all the permissions that you want to grant to the RAM user or RAM role in the request parameters when you call the operation. If you use incremental update, you can grant permissions to or revoke permissions from the RAM user or RAM role on the cluster. In this case, only the permissions that you specify in the request parameters when you call the operation are granted or revoked, other permissions of the RAM user or RAM role on the cluster are not affected.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/CS/2015-12-15/UpdateUserPermissions)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/CS/2015-12-15/UpdateUserPermissions)

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

cs:UpdateUserPermissions

none

\*All Resources

`*`

none

none

## Request syntax

```
POST /permissions/users/{uid}/update HTTP/1.1
```

## Request parameters

Parameter

Type

Required

Description

Example

uid

string

No

The ID of the RAM user or RAM role whose permissions you want to update.

2367\*\*\*\*

body

array<object>

No

The request body.

object

No

The request parameters.

cluster

string

No

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

No

The predefined role name. Valid values:

-   `admin`: administrator
-   `admin-view`: read-only administrator
-   `ops`: O&M engineer
-   `dev`: developer
-   `restricted`: restricted user
-   Custom role

Note:

-   You cannot grant **namespace-level** permissions to the `admin`, `admin-view`, and `ops` roles.
-   You cannot grant **all cluster-level** permissions to the `admin-view` role.

ops

role\_type

string

No

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

mode

string

No

The authorization method. Valid values:

-   `apply`: The global update mode. Overwrites all existing permissions of the RAM user or RAM role on the cluster. You must specify all the permissions you want to grant to the RAM user or RAM role in the request parameters when you call this operation.
-   `delete`: The deletion mode. Revokes only the cluster permissions specified in the request, preserving other existing permissions of the RAM user or RAM role.
-   `patch`: The incremental mode. Adds only the cluster permissions specified in the request, preserving other existing permissions of the RAM user or RAM role.

Default value: `apply`.

apply

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

No change history
