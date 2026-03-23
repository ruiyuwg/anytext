Modifies an automatic snapshot policy. For example, you can change the points in time of the day at which to create automatic snapshots, days of the week on which to create automatic snapshots, and retention period of automatic snapshots for the automatic snapshot policy.

## Operation description

Before you call this operation, take note of the following items:

-   You cannot modify system policies.
-   After an automatic snapshot policy is modified, the modifications immediately take effect on the disks that are associated with the policy.
-   If cross-region replication for snapshots is enabled and no encryption parameters are configured, the generated encrypted snapshot copies are encrypted by using the Key Management Service (KMS) encryption keys in the region to which the snapshots are copied.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyAutoSnapshotPolicyEx)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyAutoSnapshotPolicyEx)

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

ecs:ModifyAutoSnapshotPolicyEx

update

\*Snapshot

`acs:ecs:{#regionId}:{#accountId}:snapshotpolicy/{#autoSnapshotPolicyId}`

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

The region ID of the automatic snapshot policy. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

autoSnapshotPolicyId

string

Yes

The ID of the automatic snapshot policy. You can call the [DescribeAutoSnapshotPolicyEx](/help/en/ecs/api-describeautosnapshotpolicyex) operation to query available automatic snapshot policies.

sp-bp12m37ccmxvbmi5\*\*\*\*

autoSnapshotPolicyName

string

No

The name of the automatic snapshot policy. If this parameter is not specified, the original name of the automatic snapshot policy is retained.

SPTestName

timePoints

string

No

The points in time of the day at which to create automatic snapshots. The time must be in UTC+8. Unit: hours. Valid values are 0 to 23, which correspond to the 24 points in time on the hour from 00:00:00 to 23:00:00. For example, a value of 1 indicates 01:00:00.

To schedule multiple automatic snapshots to be created in a day, you can specify multiple hours.

-   You can specify up to 24 points in time.
-   You must set this parameter to a JSON array such as `["0", "1", ... "23"]`. Separate the points in time with commas (,).

\["0", "1"\]

repeatWeekdays

string

No

The days of the week on which to create automatic snapshots. Valid values are 1 to 7, which correspond to the days of the week. For example, a value of 1 indicates Monday.

To schedule multiple automatic snapshots to be created in a week, you can specify multiple days.

-   You can specify up to seven days over a one-week period.
-   You must set this parameter to a JSON array such as `["1", "2" ... "7"]`. Separate the values in the array with commas (,).

\["1", "7"\]

retentionDays

integer

No

The retention period of the automatic snapshot. Unit: days. Valid values:

-   \-1: The automatic snapshot is permanently retained.
-   1 to 65536: The auto snapshot is retained for the specified number of days.

Default value: -1.

30

EnableCrossRegionCopy

boolean

No

Specifies whether to enable cross-region replication for the automatic snapshot.

-   true: enables cross-region replication for the automatic snapshot.
-   false: disables cross-region replication for the automatic snapshot.

false

TargetCopyRegions

string

No

The destination region to which to copy the snapshot. You can specify only a single destination region.

\["cn-hangzhou"\]

CopiedSnapshotsRetentionDays

integer

No

The retention period of the snapshot copy in the destination region. Unit: days. Valid values:

-   \-1: The snapshot copy is retained until it is deleted.
-   1 to 65535: The snapshot copy is retained for a specified number of days.

Default value: -1.

30

CopyEncryptionConfiguration

object

No

The encryption configurations for cross-region snapshot replication.

Encrypted

boolean

No

Specifies whether to enable encryption for cross-region snapshot replication. Valid values:

-   true
-   false

Default value: false.

false

KMSKeyId

string

No

The ID of the KMS key used for encryption in cross-region snapshot replication.

0e478b7a-4262-4802-b8cb-00d3fb40826X

Arn

array<object>

No

This parameter is not publicly available.

object

No

RoleType

string

No

This parameter is not publicly available.

hide

Rolearn

string

No

This parameter is not publicly available.

hide

AssumeRoleFor

long

No

This parameter is not publicly available.

1000000000

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

The specified AutoSnapshotPolicyId is invalid.

The specified automatic snapshot policy ID is invalid.

403

ParameterInvalid

The specified RetentionDays parameter is invalid.

The specified RetentionDays parameter is invalid.

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

Abs.InvalidAction.RegionNotSupport

This region does not support this action.

The operation is not supported in the region.

403

InvalidOperation.PolicyTypeUnsupported

The current policy type does not support this operation. Only custom policies are permitted.

The current policy type does not support this operation. Only custom policies allow this operation.

403

InvalidParameter.KMSKeyId.CMKNotEnabled

The CMK (Customer Master Key) must be in an active state.

The CMK (Customer Master Key) must be in an active state.

403

InvalidParameter.KMSKeyId.CMKUnauthorized

The CMK(Customer Master Key) lacks authorization to add tags to the ECS service.

The CMK(Customer Master Key) lacks authorization to add tags to the ECS service.

404

ParameterInvalid

The specified automatic snapshot policy does not exist.

The specified automatic snapshot policy does not exist.

404

ParameterInvalid

The specified automatic snapshot policy does not exist in the region.

The specified automatic snapshot policy does not exist.

404

InvalidParameter.KMSKeyId.NotFound

The specified KMSKeyId does not exist.

The specified KMSKeyId parameter does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-19

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyAutoSnapshotPolicyEx?updateTime=2025-03-19#workbench-doc-change-demo)

2024-12-09

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyAutoSnapshotPolicyEx?updateTime=2024-12-09#workbench-doc-change-demo)

2024-11-05

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyAutoSnapshotPolicyEx?updateTime=2024-11-05#workbench-doc-change-demo)

2024-03-21

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyAutoSnapshotPolicyEx?updateTime=2024-03-21#workbench-doc-change-demo)

2024-02-29

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyAutoSnapshotPolicyEx?updateTime=2024-02-29#workbench-doc-change-demo)

2024-02-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyAutoSnapshotPolicyEx?updateTime=2024-02-28#workbench-doc-change-demo)

2024-02-28

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyAutoSnapshotPolicyEx?updateTime=2024-02-28#workbench-doc-change-demo)
