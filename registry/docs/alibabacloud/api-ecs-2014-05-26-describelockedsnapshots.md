Queries the lock information of a snapshot, such as snapshot lock status and lock configuration.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeLockedSnapshots)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeLockedSnapshots)

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

ecs:DescribeLockedSnapshots

list

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

RegionId

string

Yes

The region ID. You can call the [DescribeRegions](https://www.alibabacloud.com/help/zh/ecs/developer-reference/api-ecs-2014-05-26-describeregions?spm=a2c4g.11186623.0.i2) operation to query the most recent region list.

cn-hangzhou

SnapshotIds

array

No

The snapshot IDs. You can specify 1 to 100 IDs.

string

No

The snapshot ID.

s-bp67acfmxazb4p\*\*\*\*

LockStatus

string

No

The lock status. Valid values:

-   compliance-cooloff: The snapshot is locked in compliance mode but is still in a cooling-off period. Snapshots cannot be deleted. However, users with the corresponding RAM permissions can unlock snapshots, extend or shorten the cooling-off period, and extend or shorten the lock duration.
-   compliance: The snapshot is locked in compliance mode and the cooling-off period has ended. Snapshots cannot be unlocked or deleted. However, users with the corresponding RAM permissions can extend the locked duration.
-   expired: The snapshot was once locked, but the lock duration has ended and the lock has expired. The snapshot is not locked and can be deleted.

compliance-cooloff

NextToken

string

No

The query token. Set the value to the `NextToken` parameter value returned in the last API call.

caeba0bbb2be03f84eb48b699f0a\*\*\*\*

MaxResults

integer

No

The maximum number of entries to return on each page. Maximum value: 100.

Default value:

-   If no value is set or the set value is less than 10, the default value is 10.
-   If you set a value greater than 100, the default value is 100.

10

DryRun

boolean

No

Specifies whether to perform only a dry run. Valid values:

-   true: The request is checked and is not executed. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the check fails, the corresponding error is returned. If the check passes, the error code DryRunOperation is returned.
-   false (default): Sends a normal request, checks it, and executes the request directly if it passes the check.

false

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

NextToken

string

The returned pagination token which can be used in the next request to retrieve a new page of results.

caeba0bbb2be03f84eb48b699f0a\*\*\*\*

LockedSnapshotsInfo

array<object>

Details of the locked snapshots.

LockedSnapshotInfo

object

The information of the locked snapshot.

SnapshotId

string

The snapshot ID.

s-bp67acfmxazb4p\*\*\*\*

LockStatus

string

The lock status. Valid values:

-   compliance-cooloff: The snapshot is locked in compliance mode but is still in a cooling-off period. Snapshots cannot be deleted. However, users with the corresponding RAM permissions can unlock snapshots, extend or shorten the cooling-off period, and extend or shorten the lock duration.
-   compliance: The snapshot is locked in compliance mode and the cooling-off period has ended. Snapshots cannot be unlocked or deleted. However, users with the corresponding RAM permissions can extend the lock duration.
-   expired: The snapshot was once locked, but the lock duration has ended and the lock has expired. The snapshot is not locked and can be deleted.

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

The lock duration. The snapshot lock automatically expires after the lock duration ends. Unit: days.

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
  "NextToken": "caeba0bbb2be03f84eb48b699f0a****",
  "LockedSnapshotsInfo": [
    {
      "SnapshotId": "s-bp67acfmxazb4p****",
      "LockStatus": "compliance-cooloff",
      "LockCreationTime": "2025-10-15T10:00:00Z",
      "CoolOffPeriod": 3,
      "CoolOffPeriodExpiredTime": "2025-10-15T13:00:00Z",
      "LockDuration": 1,
      "LockDurationStartTime": "2025-10-15T10:00:00Z",
      "LockExpiredTime": "2025-10-16T10:00:00Z"
    }
  ]
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidLockStatus.Malformed

The specified parameter LockStatus is invalid. Please check the valid range for this parameter.

The specified parameter LockStatus is invalid. Please check the valid range for this parameter.

404

InvalidSnapshotLock.NotFound

The specified snapshot(s) %s is(are) not locked.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2026-01-28

Add Operation

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeLockedSnapshots?updateTime=2026-01-28#workbench-doc-change-demo)
