Disables an automatic snapshot policy for one or more cloud disks.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/CancelAutoSnapshotPolicy)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/CancelAutoSnapshotPolicy)

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

ecs:CancelAutoSnapshotPolicy

update

\*Disk

`acs:ecs:{#regionId}:{#accountId}:disk/{#diskId}`

AutoSnapshotPolicy

`acs:ecs:{#regionId}:{#accountId}:snapshotpolicy/{#snapshotpolicyId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

regionId

string

Yes

The region ID of the automatic snapshot policy and the disks. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

diskIds

string

Yes

The IDs of the disks for which you want to disable the automatic snapshot policy. To disable the automatic snapshot policy for multiple disks, you can set this parameter to a JSON array that consists of multiple disk IDs, such as \["dxxxxxxxxx", "dyyyyyyyyy", … "dzzzzzzzzz"\]. Separate the disk IDs with commas (,).

\["d-bp14k9cxvr5uzy54\*\*\*\*", "d-bp1dtj8v7x6u08iw\*\*\*\*", "d-bp1c0tyj9tfli2r8\*\*\*\*"\]

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

403

ParameterInvalid

The specified RegionId parameter is invalid.

The specified region ID is invalid.

403

ParameterInvalid

The specified DiskIds are invalid.

The specified disk ID is invalid.

404

InvalidDiskId.NotFound

The specified DiskIds are not found.

The specified DiskIds parameter does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-02

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CancelAutoSnapshotPolicy?updateTime=2024-12-02#workbench-doc-change-demo)
