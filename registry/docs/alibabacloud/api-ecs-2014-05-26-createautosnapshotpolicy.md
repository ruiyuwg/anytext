Creates an automatic snapshot policy in a specific region. You can specify the schedule on which to create automatic snapshots, the retention period of the automatic snapshots, and whether to enable cross-region replication for the snapshots in the automatic snapshot policy. The automatic snapshot policy can be applied to create snapshots for system disks or data disks to back up disk data.

## Operation description

Before you call this operation, learn about how to [create an automatic snapshot policy](/help/en/ecs/user-guide/create-an-automatic-snapshot-policy-1).

Take note of the following items:

-   You can create up to 100 automatic snapshot policies per region for a single Alibaba Cloud account. If the maximum number of automatic snapshots for a disk is reached and a new snapshot creation task is created, the system deletes the oldest automatic snapshot of the disk.
-   If the instance to which a disk is attached is being stopped or restarted, the system cannot create snapshots for the disk based on the associated automatic snapshot policy.
-   If cross-region snapshot replication is enabled and no encryption parameters are configured, encrypted snapshots are copied to the destination region and snapshot copies are encrypted by using the service key of the destination region. For more information about the limits on cross-region snapshot replication, see [Copy a snapshot](/help/en/ecs/user-guide/copy-a-snapshot).

After the automatic snapshot policy is created, call the [ApplyAutoSnapshotPolicy](/help/en/ecs/api-applyautosnapshotpolicy) operation to apply the policy to disks. If you want to modify the automatic snapshot policy, call the [ModifyAutoSnapshotPolicyEx](/help/en/ecs/api-modifyautosnapshotpolicyex) operation.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateAutoSnapshotPolicy)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateAutoSnapshotPolicy)

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

ecs:CreateAutoSnapshotPolicy

create

\*AutoSnapshotPolicy

`acs:ecs:{#regionId}:{#accountId}:snapshotpolicy/*`

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

The ID of the region in which to create the automatic snapshot policy. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

autoSnapshotPolicyName

string

No

The name of the automatic snapshot policy. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:// or https://. The name can contain letters, digits, colons (:), underscores (\_), and hyphens (-).

By default, this parameter is left empty.

TestName

timePoints

string

Yes

The points in time of the day at which to create automatic snapshots. The time must be in UTC+8. Unit: hours. Valid values: 0 to 23, which correspond to the 24 on-the-hour points in time from 00:00:00 to 23:00:00. For example, 1 indicates 01:00:00. Format description:

-   Set this parameter to a JSON-formatted array. For example, a value of \["1"\] specifies automatic snapshots to be created at 01:00:00.
-   To schedule multiple automatic snapshots to be created in a day, you can specify multiple values. Separate the values with commas (,). You can specify up to 24 points in time. For example, a value of \["1","3","5"\] specifies automatic snapshots to be created at 01:00:00, 03:00:00, and 05:00:00.

**Note** If an automatic snapshot is being created when the time scheduled for creating another automatic snapshot is due, the new snapshot task is skipped. This may occur when a disk contains a large volume of data. For example, you scheduled snapshots to be automatically created at 09:00, 10:00, 11:00, and 12:00. The system starts to create a snapshot for the disk at 09:00:00. The process takes 80 minutes to complete because the disk contains a large volume of data and ends at 10:20:00. The system skips the automatic snapshot task scheduled for 10:00:00 and creates the next automatic snapshot for the disk at 11:00:00.

\["0", "1", … "23"\]

repeatWeekdays

string

Yes

The days of the week on which to create automatic snapshots. Valid values: 1 to 7, which correspond to Monday to Sunday. 1 indicates Monday. Format description:

-   Set this parameter to a JSON-formatted array. For example, a value of \["1"\] specifies automatic snapshots to be created every Monday.
-   To schedule multiple automatic snapshots to be created in a week, you can specify multiple values. Separate the values with commas (,). You can specify a maximum of seven days. For example, a value of \["1","3","5"\] specifies automatic snapshots to be created every Monday, Wednesday, and Friday.

\["1","2"\]

retentionDays

integer

Yes

The retention period of the automatic snapshot. Unit: days. Valid values:

-   \-1: The automatic snapshot is retained until it is deleted.
-   1 to 65535: The automatic snapshot is retained for the specified number of days. After the retention period of the automatic snapshot expires, the automatic snapshot is automatically deleted.

Default value: -1.

30

EnableCrossRegionCopy

boolean

No

Specifies whether to enable cross-region replication for snapshots.

-   true
-   false

false

TargetCopyRegions

string

No

The destination region to which to copy the snapshot. You can specify only a single destination region.

\["cn-hangzhou"\]

StorageLocationArn

string

No

**Note** This parameter is not publicly available.

null

CopiedSnapshotsRetentionDays

integer

No

The retention period of the snapshot copy in the destination region. Unit: days. Valid values:

-   \-1: The snapshot copy is retained until it is deleted.
-   1 to 65535: The snapshot copy is retained for the specified number of days. After the retention period of the snapshot copy expires, the snapshot copy is automatically deleted.

Default value: -1.

30

Tag

array<object>

No

The tags to add to the automatic snapshot policy.

object

No

Key

string

No

The key of tag N to add to the automatic snapshot policy. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot contain http:// or https://. The tag key cannot start with acs: or aliyun.

TestKey

Value

string

No

The value of tag N to add to the automatic snapshot policy. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain http:// or https://. The tag value cannot start with acs:.

TestValue

ResourceGroupId

string

No

The resource group ID.

rg-aek2kkmhmhs\*\*\*\*

CopyEncryptionConfiguration

object

No

The encryption parameters for cross-region snapshot replication.

Encrypted

boolean

No

Specifies whether to enable cross-region snapshot replication and encryption. Valid values:

-   true
-   false

Default value: false.

false

KMSKeyId

string

No

The ID of the Key Management Service (KMS) key used in cross-region snapshot replication and encryption.

0e478b7a-4262-4802-b8cb-00d3fb40826X

Arn

array<object>

No

**Note** This parameter is not publicly available.

object

No

RoleType

string

No

**Note** This parameter is not publicly available.

hide

Rolearn

string

No

**Note** This parameter is not publicly available.

hide

AssumeRoleFor

long

No

**Note** This parameter is not publicly available.

1000000000

## Response parameters

Parameter

Type

Description

Example

object

AutoSnapshotPolicyId

string

The automatic snapshot policy ID.

sp-bp12m37ccmxvbmi5\*\*\*\*

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

## Examples

Sample success responses

`JSON`format

```
{
  "AutoSnapshotPolicyId": "sp-bp12m37ccmxvbmi5****",
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

InvalidSnapshotPolicyName.Malformed

The specified autoSnapshotPolicyName is wrongly formed.

\-

400

Duplicate.TagKey

The Tag.N.Key contain duplicate key.

The specified tag key already exists. Tag keys must be unique.

400

InvalidTagKey.Malformed

The specified Tag.n.Key is not valid.

The specified Tag.N.Key parameter is invalid.

400

InvalidTagValue.Malformed

The specified Tag.n.Value is not valid.

The specified tag value is invalid.

400

InvalidParameter.EncryptedIllegal

The specified parameter Encrypted must be true when kmsKeyId is not empty.

The encryption feature is not enabled after a Key Management Service (KMS) key ID is specified.

400

InvalidParameter.KmsNotEnabled

Failed to perform this operation because KMS is not activated.

You need to activate KMS key management service.

400

InvalidParameter.Encrypted.KmsNotEnable

Failed to perform this operation because KMS is not activated.

You need to activate KMS key escrow service.

400

InvalidParam.EncryptedMismatch

Creating encrypted disks with shared encrypted image requires replacing encryption keys.

You must change the encryption key to create a cloud disk after sharing an encrypted image.

403

ParameterInvalid

The specified RegionId parameter is invalid.

The specified region ID is invalid.

403

ParameterInvalid

The specified RepeatWeekDays parameter is invalid.

The specified RepeatWeekdays parameter is invalid.

403

ParameterInvalid

The specified TimePoints parameter is invalid.

The specified TimePoints parameter is invalid.

403

ParameterInvalid

The specified RetentionDays parameter is invalid.

The specified RetentionDays parameter is invalid.

403

AutoSnapshotPolicy.QuotaExceed

The maximum number of automatic snapshot policy has been reached.

The maximum number of automatic snapshot policy is exceeded.

403

InvalidAccountStatus.NotEnoughBalance

Your account does not have enough balance.

Your account balance is insufficient. Add funds to your account and try again.

403

InvalidAccountStatus.SnapshotServiceUnavailable

Snapshot service has not been opened yet.

The operation is not supported while the snapshot service is not activated.

403

InvalidParameter.TargetCopyRegions

The specified TargetCopyRegions is invalid.

\-

403

InvalidParameter.CopiedSnapshotsRetentionDays

The specified CopiedSnapshotsRetentionDays is invalid.

\-

403

InvalidParameter.KMSKeyId.KMSUnauthorized

ECS service have no right to access your KMS.

ECS is not authorized to access your KMS resources.

403

InvalidOperation.KMSKeyIdNotFound

The specified KMSKeyId not found, %s.

The associated KMS encryption key cannot be found. Verify that the KMS encryption key is valid.

403

Abs.InvalidAction.RegionNotSupport

This region does not support this action.

The operation is not supported in the region.

403

InvalidParameter.KMSKeyId.CMKNotEnabled

The CMK (Customer Master Key) must be in an active state.

The CMK (Customer Master Key) must be in an active state.

403

InvalidParameter.KMSKeyId.CMKUnauthorized

The CMK(Customer Master Key) lacks authorization to add tags to the ECS service.

The CMK(Customer Master Key) lacks authorization to add tags to the ECS service.

404

InvalidResourceGroup.NotFound

The ResourceGroup provided does not exist in our records.

The specified resource group does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-04-29

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateAutoSnapshotPolicy?updateTime=2025-04-29#workbench-doc-change-demo)

2025-03-19

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateAutoSnapshotPolicy?updateTime=2025-03-19#workbench-doc-change-demo)

2024-12-02

API Description Update. The API operation is not deprecated.. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateAutoSnapshotPolicy?updateTime=2024-12-02#workbench-doc-change-demo)

2024-03-21

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateAutoSnapshotPolicy?updateTime=2024-03-21#workbench-doc-change-demo)

2024-02-28

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateAutoSnapshotPolicy?updateTime=2024-02-28#workbench-doc-change-demo)
