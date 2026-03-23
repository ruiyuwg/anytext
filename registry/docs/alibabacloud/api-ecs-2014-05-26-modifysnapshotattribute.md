Modifies the name, description, or retention period of a snapshot.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifySnapshotAttribute)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifySnapshotAttribute)

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

ecs:ModifySnapshotAttribute

update

\*Snapshot

`acs:ecs:{#regionId}:{#accountId}:snapshot/{#snapshotId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

SnapshotId

string

Yes

The ID of the snapshot.

s-bp199lyny9bb47pa\*\*\*\*

SnapshotName

string

No

The name of the snapshot. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http:// or https://. It can contain letters, digits, colons (:), underscores (\_), and hyphens (-).

The name cannot start with auto because snapshots whose names start with auto are recognized as automatic snapshots.

testSnapshotName

Description

string

No

The snapshot description. It can be empty or up to 256 characters in length. It cannot start with http:// or https://.

testDescription

DisableInstantAccess

boolean

No

Specifies whether to disable the instant access feature. Valid values:

-   true
-   false

Default value: false.

**Note** This parameter is no longer used. By default, new standard snapshots of Enterprise SSDs (ESSDs) are upgraded to instant access snapshots free of charge without the need for additional configurations. For more information, see [Use the instant access feature](/help/en/ecs/user-guide/enable-or-disable-the-instant-access-feature).

false

RetentionDays

integer

No

The retention period of the snapshot. After you specify this parameter, the end time of the new retention period is the specified number of days apart from the **creation time** of the snapshot, which follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format and is displayed in UTC. Valid values: 1 to 65536.

**Note** You can extend the retention period of the snapshot and cannot shorten the retention period.

10

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

InvalidSnapshotName.Malformed

The specified SnapshotName is wrongly formed.

The format of the specified snapshot name is invalid.

400

NoAttributeToModify

No attribute to be modified in this request.

No attributes are modified.

400

InvalidRetentionDays.Malformed

The specified RetentionDays is not valid.

The specified RetentionDays parameter is invalid.

400

InvalidOperation.DecreaseRetentionDaysUnsupported

The requested operation to decrease retention days for the snapshot is not supported.

\-

400

InvalidSnapshotId.NotReady

The specified snapshot has not completed yet.

The specified snapshot is being created.

400

IncorrectDiskStatus.CreatingSnapshot

A previous snapshot creation is in process.

A previous snapshot creation task is in process. Please try again later.

403

InvalidOperation.ResourceManagedByCloudProduct

The current operation is not supported because the resource is managed by a cloud product. Please contact the relevant cloud product to confirm the reason.

This operation is not supported because the resource is managed by cloud products. Contact the corresponding cloud product to confirm the reason.

403

InvalidOperation.DefaultFreeSnapshotNotSupport

The specified snapshot is a default free snapshot and does not support this operation.

The specified snapshot is a default free snapshot and does not support the current operation.

404

InvalidDescription.Malformed

The specified description is wrongly formed.

The resource description is invalid. The description must be 2 to 256 characters in length and cannot start with http:// or https://.

404

InvalidSnapshotId.NotFound

The specified SnapshotId does not exist.

The specified snapshot ID does not exist.

404

InvalidSnapshotDisableInstantAccess.Malformed

The specified DisableInstantAccess is not valid!

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2026-01-07

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifySnapshotAttribute?updateTime=2026-01-07#workbench-doc-change-demo)

2025-04-07

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifySnapshotAttribute?updateTime=2025-04-07#workbench-doc-change-demo)

2024-12-10

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifySnapshotAttribute?updateTime=2024-12-10#workbench-doc-change-demo)

2024-11-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifySnapshotAttribute?updateTime=2024-11-08#workbench-doc-change-demo)

2024-10-17

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifySnapshotAttribute?updateTime=2024-10-17#workbench-doc-change-demo)

2023-10-16

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifySnapshotAttribute?updateTime=2023-10-16#workbench-doc-change-demo)

2023-09-18

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifySnapshotAttribute?updateTime=2023-09-18#workbench-doc-change-demo)
