Lock the snapshot in compliance mode to prevent it from being accidentally or maliciously deleted. During the snapshot lock period, no user can delete it.

## Operation description

You can also use this operation to reconfigure locked snapshots. The configurable items depend on the lock mode and lock status:

-   If a snapshot is locked in compliance mode and is in a cooling-off period, you can extend or shorten the cooling-off period and extend or shorten the lock duration.
-   If the snapshot is locked in compliance mode and the cooling-off period has expired, you can only extend the lock duration.

**Note** If you reconfigure a locked snapshot during the cooling-off period, the system will be regarded as a relock operation, and all lock parameters will be reset instead of individual adjustments.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/LockSnapshot)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/LockSnapshot)

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

ecs:LockSnapshot

update

\*Snapshot

`acs:ecs:{#regionId}:{#accountId}:snapshot/{#SnapshotId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

Yes

The region ID You can call the [DescribeRegions](https://www.alibabacloud.com/help/zh/ecs/developer-reference/api-ecs-2014-05-26-describeregions?spm=a2c4g.11186623.0.i2) operation to query the most recent region list.

cn-hangzhou

SnapshotId

string

Yes

The snapshot ID.

s-9dp2qojdpdfmgfmf\*\*\*\*

LockMode

string

Yes

The lock mode. Valid values:

-   compliance: The snapshot is locked in compliance mode. A snapshot that is locked in compliance mode cannot be unlocked by any user. It can be deleted only after the lock duration expires. Users cannot shorten the lock duration, but users with the corresponding RAM permissions can extend the lock duration at any time. When locking a snapshot in compliance mode, you can optionally specify a cooling-off period.

compliance

LockDuration

integer

Yes

Lock duration. After the lock duration ends, the snapshot lock will automatically expire.

Unit: days.

Valid values: 1 to 36500.

1

CoolOffPeriod

integer

Yes

Cooling-off period. In compliance mode, you can set a cooling-off period or skip the cooling-off period to directly lock the snapshot.

During the cooling-off period, users with corresponding RAM permissions can unlock snapshots, extend or shorten the cooling-off period, and extend or shorten the lock duration. Snapshots cannot be deleted during the cooling-off period.

After the cooling-off period ends, only extending the lock duration is supported.

Unit: hours.

Valid values: 0 to 72. A value of 0 indicates skipping the cooling-off period and directly locking the snapshot.

If the snapshot has entered the compliance mode lock period, set this parameter to 0 when extending the lock duration.

3

DryRun

boolean

No

Specifies whether to perform only a dry run. Valid values:

-   true: The request is checked and is not executed. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the check fails, the corresponding error is returned. If the check passes, the error code DryRunOperation is returned.
-   false (default): Sends a normal request, checks it, and executes the request directly if it passes the check.

false

ClientToken

string

No

A client token that is used to ensure the idempotence of the request. You can use the client to generate a client token. Make sure that a unique client token is used for each request. ClientToken only supports ASCII characters and cannot exceed 64 characters. For more information, see [How to ensure idempotence](https://www.alibabacloud.com/help/zh/ecs/developer-reference/how-to-ensure-idempotence?spm=a2c4g.11186623.0.0.2a29d467Bh2sO5).

5EC38E7D-389F-1925-ABE2-D7925A8F\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

Schema of Response

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

LockedSnapshotInfo

object

Locked snapshot information.

SnapshotId

string

The snapshot ID.

s-9dp2qojdpdfmgfmf\*\*\*\*

LockStatus

string

The lock status. Valid values:

-   compliance-cooloff: The snapshot is locked in compliance mode but is still within the cooling-off period. Snapshots cannot be deleted, but users with the corresponding RAM permissions can unlock snapshots, extend or shorten the cooling-off period, and extend or shorten the lock duration.
-   compliance: The snapshot is locked in compliance mode and the cooling-off period has ended. Snapshots cannot be unlocked or deleted, but users with the corresponding RAM permissions can extend the lock duration.
-   expired: The snapshot was once locked, but the lock duration has ended and the lock has expired. The snapshot is currently not locked and can be deleted.

compliance-cooloff

LockCreationTime

string

The date and time at which the snapshot is locked. The time follows the [ISO 8601](https://www.alibabacloud.com/help/zh/ecs/developer-reference/iso-8601-time-format?spm=a2c4g.11186623.0.0.277c6c92kl7kXM) standard in the yyyy-MM-ddTHH:mm:ssZ format (in UTC).

2025-10-15T10:00:00Z

CoolOffPeriod

integer

The cooling-off period of the compliance mode. Unit: hours.

3

CoolOffPeriodExpiredTime

string

The end time of the cooling-off period in compliance mode. The time follows the [ISO 8601](https://www.alibabacloud.com/help/zh/ecs/developer-reference/iso-8601-time-format?spm=a2c4g.11186623.0.0.277c6c92kl7kXM) standard in the yyyy-MM-ddTHH:mm:ssZ format (in UTC).

2025-10-15T13:00:00Z

LockDuration

integer

The lock duration. After the lock duration ends, the snapshot lock will automatically expire. Unit: days.

1

LockDurationStartTime

string

The start time of the lock duration. The time follows the [ISO 8601](https://www.alibabacloud.com/help/zh/ecs/developer-reference/iso-8601-time-format?spm=a2c4g.11186623.0.0.277c6c92kl7kXM) standard in the yyyy-MM-ddTHH:mm:ssZ format (in UTC). If you lock a snapshot that is in the Progressing state, the lock time is not calculated until the snapshot enters the Accomplished state.

2025-10-15T10:00:00Z

LockExpiredTime

string

The time when the lock expires. The time follows the [ISO 8601](https://www.alibabacloud.com/help/zh/ecs/developer-reference/iso-8601-time-format?spm=a2c4g.11186623.0.0.277c6c92kl7kXM) standard in the yyyy-MM-ddTHH:mm:ssZ format (in UTC).

2025-10-16T10:00:00Z

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****",
  "LockedSnapshotInfo": {
    "SnapshotId": "s-9dp2qojdpdfmgfmf****",
    "LockStatus": "compliance-cooloff",
    "LockCreationTime": "2025-10-15T10:00:00Z",
    "CoolOffPeriod": 3,
    "CoolOffPeriodExpiredTime": "2025-10-15T13:00:00Z",
    "LockDuration": 1,
    "LockDurationStartTime": "2025-10-15T10:00:00Z",
    "LockExpiredTime": "2025-10-16T10:00:00Z"
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidLockMode.Malformed

The specified parameter LockMode is invalid. Please check the valid range for this parameter.

The specified parameter LockMode is invalid. Please check the valid range for this parameter.

400

InvalidLockDuration.ExceedRetentionDays

The specified parameter LockDuration is invalid. The LockDuration should be less than the snapshot RetentionDays.

The specified parameter LockDuration is invalid. The LockDuration should be less than the snapshot RetentionDays.

400

InvalidCoolOffPeriod.ExceedLockDuration

The specified parameter CoolOffPeriod is invalid. The CoolOffPeriod should be less than the LockDuration.

The specified parameter CoolOffPeriod is invalid. The CoolOffPeriod should be less than the LockDuration.

403

InvalidOperation.SnapshotNotAvailable

The unavailable snapshot does not support locking.

The unavailable snapshot does not support locking.

403

InvalidOperation.ResourceManagedByCloudProduct

The current operation is not supported because the resource is managed by a cloud product \[%s\]. Please contact the relevant cloud product to confirm the reason.

The current operation is not supported because the resource is managed by a cloud product. Please contact the relevant cloud product to confirm the reason.

403

InvalidOperation.LockSharedSnapshotUnsupported

The shared snapshot does not support locking.

The shared snapshot does not support locking.

403

InvalidOperation.CoolOffPeriodExpired

The snapshot is locked in compliance mode, and the cool-off period has expired. The current operation is not supported.

The snapshot is locked in compliance mode, and the cool-off period has expired. The current operation is not supported.

404

InvalidSnapshotId.NotFound

The specified snapshot is not found

The specified snapshot does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2026-01-28

Add Operation

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/LockSnapshot?updateTime=2026-01-28#workbench-doc-change-demo)
