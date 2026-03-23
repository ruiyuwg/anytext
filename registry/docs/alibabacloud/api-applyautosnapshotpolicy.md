Applies an automatic snapshot policy to one or more cloud disks. You can call this operation to replace the automatic snapshot policy of a cloud disk.

## Operation description

## [](#usage-notes)[](#)Usage notes

When you call this operation, note that:

-   You can apply only one automatic snapshot policy to each disk.
-   You can apply a single automatic snapshot policy to multiple disks.

Feature changes:

By default, only one policy can be applied to a single disk. After the feature is upgraded, a maximum of 10 automatic snapshot policies can be applied to a single disk at the same time to meet the backup requirements of multiple scenarios.

If you need to apply for a whitelist to upgrade the feature, [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket).

After you upgrade the feature, take note of the following:

-   Each cloud disk supports up to 10 automatic snapshot policies.
-   If the target cloud disk already has an automatic snapshot policy applied, calling this operation will add to the existing policy rather than replace it.

**Note** To avoid unexpected fees, cancel the automatic snapshot policies that you no longer need.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ApplyAutoSnapshotPolicy)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ApplyAutoSnapshotPolicy)

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

ecs:ApplyAutoSnapshotPolicy

update

\*Disk

`acs:ecs:{#regionId}:{#accountId}:disk/{#diskId}`

\*AutoSnapshotPolicy

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

autoSnapshotPolicyId

string

Yes

The ID of the automatic snapshot policy.

sp-bp14yziiuvu3s6jn\*\*\*\*

diskIds

string

Yes

The IDs of disks. The value is a JSON array that consists of disk IDs. Separate the disk IDs with commas (,).

\["d-bp14k9cxvr5uzy54\*\*\*\*", "d-bp1dtj8v7x6u08iw\*\*\*\*", "d-bp1c0tyj9tfli2r8\*\*\*\*"\]

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

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

400

DiskCategory.OperationNotSupported

The type of the specified disk does not support creating a snapshot.

The operation is not supported by the current disk category.

400

PartofDiskCategory.OperationNotSupported

The types of some disks in the disk list do not support creating snapshots.

Some of the specified disks do not support this operation.

400

InvalidAutoSnapshotPolicyId.NotFound

The specified AutoSnapshotPolicyId does not exist.

The specified automatic snapshot policy does not exist.

403

ParameterInvalid

The specified RegionId parameter is invalid.

The specified region ID is invalid.

403

ParameterInvalid

The specified AutoSnapshotPolicyId parameter is invalid.

The specified AutoSnapshotPolicyId parameter is invalid.

403

ParameterInvalid

The specified DiskIds are invalid.

The specified disk ID is invalid.

403

InvalidAccountStatus.NotEnoughBalance

Your account does not have enough balance.

Your account balance is insufficient. Add funds to your account and try again.

403

InvalidAccountStatus.SnapshotServiceUnavailable

Snapshot service has not been opened yet.

The operation is not supported while the snapshot service is not activated.

403

InvalidOperation.SnapshotAlreadyCreatedUnsupported

The current disk already has snapshots created by non-promotional activities. Snapshot policies bound to promotional activities are not supported.

The current disk already has snapshots created by non-promotional activities. Snapshot policies bound to promotional activities are not supported.

403

QuotaExceed.AppliedAutoSnapshotPolicyQuota

The number of auto snapshot policies applied to the specified disk %s has exceeded the quota %s. Please cancel any unused policies and try again.

The number of auto snapshot policies applied to the specified disk has exceeded the quota. Please cancel any unused policies and try again.

403

InvalidOperation.AutoSnapshotPolicyConflict

The disk %s cannot apply the auto snapshot policy of promotional activities and other policies at the same time.

The disk cannot apply the auto snapshot policy of promotional activities and other policies at the same time.

404

ParameterInvalid

The specified automatic snapshot policy does not exist.

The specified automatic snapshot policy does not exist.

404

ParameterInvalid

The specified automatic snapshot policy does not exist in the region.

The specified automatic snapshot policy does not exist.

404

InvalidDiskId.NotFound

The specified disk does not exist in the region.

The specified disk does not exist in the current region.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-01-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ApplyAutoSnapshotPolicy?updateTime=2025-01-14#workbench-doc-change-demo)

2024-12-02

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ApplyAutoSnapshotPolicy?updateTime=2024-12-02#workbench-doc-change-demo)

2024-09-20

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ApplyAutoSnapshotPolicy?updateTime=2024-09-20#workbench-doc-change-demo)
