Unlock snapshots that are locked in compliance mode but are still in a cooling-off period. If the snapshot is locked in compliance mode and the cooling-off period has ended, it cannot be unlocked.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/UnlockSnapshot)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/UnlockSnapshot)

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

ecs:UnlockSnapshot

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

The region ID. You can call the [DescribeRegions](https://www.alibabacloud.com/help/zh/ecs/developer-reference/api-ecs-2014-05-26-describeregions?spm=a2c4g.11186623.0.i2) operation to query the most recent region list.

cn-hangzhou

SnapshotId

string

Yes

The snapshot ID.

s-9dp2qojdpdfmgfmf\*\*\*\*

DryRun

boolean

No

Specifies whether to perform the dry run. Valid values:

-   true: The request is checked and is not executed. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the check fails, an error is returned. If the check is passed, the error code DryRunOperation is returned.
-   false (default): sends the request. If the request passes the check, the request is directly executed.

false

ClientToken

string

No

A client token that is used to ensure the idempotence of the request. You can use the client to generate a client token. Make sure that a unique client token is used for each request. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://www.alibabacloud.com/help/zh/ecs/developer-reference/how-to-ensure-idempotence?spm=a2c4g.11186623.0.0.2a29d467Bh2sO5).

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

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

403

InvalidOperation.CoolOffPeriodExpired

The snapshot is locked in compliance mode, and the cool-off period has expired. The current operation is not supported.

The snapshot is locked in compliance mode, and the cool-off period has expired. The current operation is not supported.

404

InvalidSnapshotId.NotFound

The specified snapshot is not found

The specified snapshot does not exist.

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

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/UnlockSnapshot?updateTime=2026-01-28#workbench-doc-change-demo)
