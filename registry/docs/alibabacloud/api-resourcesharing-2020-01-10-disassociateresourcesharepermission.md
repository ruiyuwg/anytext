Disassociates a permission from a resource share. You can disassociate a permission from a resource share only if the resource share does not contain resources of the type indicated by the permission.

## Operation description

This topic provides an example on how to call the API operation to disassociate the `AliyunRSDefaultPermissionVSwitch` permission from the `rs-6GRmdD3X****` resource share in the `cn-hangzhou` region.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/DisassociateResourceSharePermission)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/DisassociateResourceSharePermission)

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

resourcesharing:DisassociateResourceSharePermission

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

The name of the permission. For more information, see [Permission library](/help/en/resource-management/resource-sharing/user-guide/permissions-for-resource-sharing).

AliyunRSDefaultPermissionVSwitch

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

409

DisassociateConflict.Permission

Existing associated resource when disassociating permission with resource share.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-05-18

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/DisassociateResourceSharePermission?updateTime=2023-05-18#workbench-doc-change-demo)
