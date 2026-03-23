Associates permissions with a resource share.

## Operation description

This topic provides an example on how to call the API operation to associate the `AliyunRSDefaultPermissionVSwitch` permission with the `rs-6GRmdD3X****` resource share in the `cn-hangzhou` region.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/AssociateResourceSharePermission)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/AssociateResourceSharePermission)

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

resourcesharing:AssociateResourceSharePermission

update

\*All Resources

`*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

ResourceShareId

string

Yes

The ID of the resource share.

rs-6GRmdD3X\*\*\*\*

PermissionName

string

Yes

The name of the permission.

AliyunRSDefaultPermissionVSwitch

Replace

boolean

No

Specifies whether to use the specified permission to replace an existing permission. Valid values:

-   false: does not use the specified permission to replace an existing permission. This is the default value. If you set the value to false for a resource share that does not have associated permissions, the system associates the specified permission with the resource share. In a resource share, one resource type can have only one permission. If you set the value to false for a resource share that already has a permission for the resource type indicated by the specified permission, the system reports an error. This prevents you from replacing the existing permission by mistake.
-   true: uses the specified permission to replace an existing permission of the same resource type.

false

For more information about common request parameters, see [Common parameters](/help/en/resource-management/common-parameters).

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

111FB84A-60A9-403E-9067-E55D7EE95BD1

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "111FB84A-60A9-403E-9067-E55D7EE95BD1"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidParameter.ResourceShareId

The ResourceShareId is invalid.

The ResourceShareId parameter is invalid.

400

MissingParameter.ResourceShareId

You must specify ResourceShareId.

You must specify ResourceShareId.

400

MissingParameter.PermissionName

You must specify PermissionName.

PermissionName is not configured.

404

EntityNotExists.Permission

The resource share permission does not exist.

You do not have the required permissions.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-05-18

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/AssociateResourceSharePermission?updateTime=2023-05-18#workbench-doc-change-demo)
