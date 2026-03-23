In an Container Service for Kubernetes (ACK) cluster, you can create and specify different Resource Access Management (RAM) users or roles to have different access permissions. This ensures access control and resource isolation. You can call the DescribeUserPermission operation to query the permissions that are granted to a RAM user or RAM role on ACK clusters, including the resources that are allowed to access, the scope of the permissions, the predefined role, and the permission source.

## Operation description

**Precautions**:

-   If you call this operation as a Resource Access Management (RAM) user or by assuming a RAM role, only the permissions granted on the clusters on which the current account has the role-based access control (RBAC) administrator permissions are returned. If you want to query the permissions on all clusters, you must use an account that has the RBAC administrator permissions on all clusters.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/CS/2015-12-15/DescribeUserPermission)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/CS/2015-12-15/DescribeUserPermission)

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

cs:GetUserPermissions

get

\*All Resources

`*`

none

none

## Request syntax

```
GET /permissions/users/{uid} HTTP/1.1
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

The ID of the RAM user or RAM role.

-   If you query RAM user permissions, the UID of the RAM user is used.
-   If you query the permissions of a RAM role, the ID of the RAM role is used.

21175\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

array<object>

The response body.

permission

object

The cluster authorization details of the RAM user.

resource\_id

string

The authorization setting. Valid values:

-   `{cluster_id}` is returned if the permissions are scoped to a cluster.
-   `{cluster_id}/{namespace}` is returned if the permissions are scoped to a namespace of a cluster.
-   `all-clusters` is returned if the permissions are scoped to all clusters.

c1b542\*\*\*\*

resource\_type

string

The authorization type. Valid values:

-   `cluster`: indicates that the permissions are scoped to a cluster.
-   `namespace`: indicates that the permissions are scoped to a namespace of a cluster.
-   `console`: indicates that the permissions are scoped to all clusters.

cluster

role\_name

string

The name of the custom role. If a custom role is assigned, the value is the name of the assigned custom role.

view

role\_type

string

The type of predefined role. Valid values:

-   `admin`: administrator
-   `ops`: O&M engineer
-   `dev`: developer
-   `restricted`: restricted user
-   `custom`: custom role

admin

is\_owner

long

Indicates whether the permissions are granted to the cluster owner.

-   `0`: indicates that the permissions are not granted to the cluster owner.
-   `1`: indicates that the permissions are granted to the cluster owner. The cluster owner is the administrator.

1

is\_ram\_role

long

Indicates whether the permissions are granted to the RAM role. Valid values:

-   `0`: indicates that the permissions are not granted to the RAM role.
-   `1`: indicates that the permissions are granted to the RAM role.

1

The parent\_id parameter is deprecated. Do not use this parameter.

## Examples

Sample success responses

`JSON`format

```
[
  {
    "resource_id": "c1b542****",
    "resource_type": "cluster",
    "role_name": "view",
    "role_type": "admin",
    "is_owner": 1,
    "is_ram_role": 1
  }
]
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/CS/2015-12-15/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
