Deletes a resource share.

## Operation description

After a resource share is deleted, all principals in the resource share can no longer access the resources in the resource share. However, the resources are not deleted with the resource share.

A resource share that is deleted is in the `Deleted` state. The system deletes the record of the resource share within 48 hours to 96 hours.

This topic provides an example on how to call the API operation to delete the resource share `rs-qSkW1HBY****` in the `cn-hangzhou` region.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/DeleteResourceShare)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/DeleteResourceShare)

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

resourcesharing:DeleteResourceShare

delete

\*All Resources

`*`

-   resourcesharing:RequestedResourceType
-   resourcesharing:ResourceArn

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

rs-qSkW1HBY\*\*\*\*

For more information about common request parameters, see [Common parameters](/help/en/resource-management/common-parameters).

## Response parameters

Parameter

Type

Description

Example

object

The returned result.

RequestId

string

The request ID.

A627EE2A-223D-4E1F-A954-394686AEA916

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "A627EE2A-223D-4E1F-A954-394686AEA916"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

MissingParameter.ResourceShareId

You must specify ResourceShareId.

You must specify ResourceShareId.

400

InvalidParameter.ResourceShareId

The ResourceShareId is invalid.

The ResourceShareId parameter is invalid.

400

InvalidParameter

The specified parameter is invalid.

The specified parameter is invalid.

404

EntityNotExists.ResourceShare

The resource share does not exist in the current account.

The resource share does not exist in the current account.

409

ResourceShareStatusMismatchAction

The status of the resource share does not allow the specified operation.

The status of the resource share does not allow the specified operation.

409

DeleteResourceShareConflict

You cannot delete a resource share while there are unfinished tasks.

The resource share cannot be deleted because an ongoing task exists.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-01-24

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/DeleteResourceShare?updateTime=2024-01-24#workbench-doc-change-demo)

2023-03-02

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/DeleteResourceShare?updateTime=2023-03-02#workbench-doc-change-demo)
