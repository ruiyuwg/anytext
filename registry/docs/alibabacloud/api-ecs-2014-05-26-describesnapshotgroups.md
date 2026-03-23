Queries the information of one or more snapshot-consistent groups, such as the status of the groups, IDs of the instances associated with the groups, and snapshot creation progress.

## Operation description

You can specify multiple request parameters to be queried, such as `InstanceId`, `SnapshotGroupId.N`, and `Status.N`. Specified parameters have logical AND relations. Only the specified parameters are included in the filter conditions.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeSnapshotGroups)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeSnapshotGroups)

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

ecs:DescribeSnapshotGroups

get

SnapshotGroup

`acs:ecs:{#regionId}:{#accountId}:snapshotgroup/*`

SnapshotGroup

`acs:ecs:{#regionId}:{#accountId}:snapshotgroup/{#snapshotgroupId}`

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

The region ID of the snapshot-consistent group. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

InstanceId

string

No

The ID of the instance.

i-j6ca469urv8ei629\*\*\*\*

Name

string

No

The name of the snapshot-consistent group.

testName

NextToken

string

No

The token that determines the start point of the next query. Set the value to the NextToken value that is returned from the last call.

caeba0bbb2be03f84eb48b699f0a4883

MaxResults

integer

No

The maximum number of entries per page.

Valid values: 1 to 100.

Default value: 10.

10

SnapshotGroupId

array

No

The ID of snapshot-consistent group N. Valid values of N: 1 to 10.

string

No

The ID of snapshot-consistent group N. Valid values of N: 1 to 10.

ssg-j6ciyh3k52qp7ovm\*\*\*\*

Status

array

No

The state of snapshot-consistent group N. Valid values of the second N: 1, 2, and 3. Valid values:

-   progressing: The snapshot-consistent group is being created.
-   accomplished: The snapshot-consistent group is created.
-   failed: The snapshot-consistent group fails to be created.

string

No

The state of snapshot-consistent group N. Valid values of the second N: 1, 2, and 3. Valid values:

-   progressing: The snapshot-consistent group is being created.
-   accomplished: The snapshot-consistent group is created.
-   failed: The snapshot-consistent group fails to be created.

accomplished

AdditionalAttributes

array

No

This parameter is not publicly available.

string

No

**Note** This parameter is not publicly available.

hide

Tag

array<object>

No

The tags of the snapshot-consistent group.

object

No

The tags of the snapshot-consistent group.

Key

string

No

The key of tag N of the snapshot-consistent group. Valid values of N: 1 to 20.

TestKey

Value

string

No

The value of tag N of the snapshot-consistent group. Valid values of N: 1 to 20.

TestValue

ResourceGroupId

string

No

The ID of the resource group to which the snapshot-consistent group belongs.

rg-bp67acfmxazb4p\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

NextToken

string

The token used to start the next query.

**Note** If the return value is empty, no more data exists.

caeba0bbb2be03f84eb48b699f0a4883

RequestId

string

The ID of the request.

3F9A4CC4-362F-469A-B9EF-B3204EF8AA3A

SnapshotGroups

array<object>

The information about the snapshot-consistent groups.

SnapshotGroup

object

Status

string

The state of the snapshot-consistent group. Valid values:

-   progressing: The snapshot-consistent group was being created.
-   accomplished: The snapshot-consistent group was created.
-   failed: The snapshot-consistent group failed to be created.

accomplished

CreationTime

string

The creation time. The time follows the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.

2021-03-23T10:58:48Z

Description

string

The description of the snapshot-consistent group.

This is description.

ProgressStatus

string

**Note** This parameter is not publicly available.

null

SnapshotGroupId

string

The ID of the snapshot-consistent group.

ssg-j6ciyh3k52qp7ovm\*\*\*\*

InstanceId

string

The ID of the instance to which the snapshot-consistent group belongs. This parameter has a value only when all disk snapshots in the snapshot-consistent group belong to the same instance. If disk snapshots in the snapshot-consistent group belong to different instances, you can check the response parameters that start with `Snapshots.Snapshot.Tags.` to determine the ID of the instance to which each snapshot in the snapshot-consistent group belongs.

i-j6ca469urv8ei629\*\*\*\*

Name

string

The name of the snapshot-consistent group.

testName

ResourceGroupId

string

The ID of the resource group to which the snapshot-consistent group belongs.

rg-bp67acfmxazb4p\*\*\*\*

Tags

array<object>

The tags of the snapshot-consistent group.

Tag

object

Key

string

The tag key of the snapshot-consistent group.

TestKey

Value

string

The tag value of the snapshot-consistent group.

TestValue

Snapshots

array<object>

The information about the snapshots in the snapshot-consistent group.

Snapshot

object

SourceDiskId

string

The ID of the source disk. This parameter is retained even after the source disk of the snapshot is released.

d-j6c3ogynmvpi6wy7\*\*\*\*

Progress

string

The progress of the snapshot creation task. Unit: percent (%).

100%

Available

boolean

Indicates whether the snapshot can be shared and be used to create or roll back a disk. Valid values:

-   true
-   false

false

InstantAccessRetentionDays

integer

The validity period of the instant access feature. When the validity period ends, the instant access snapshot is automatically released.

**Note** This parameter is no longer used. By default, standard snapshots of ESSDs are upgraded to instant access snapshots free of charge without the need for additional configurations. For more information, see [Use the instant access feature](/help/en/ecs/user-guide/enable-or-disable-the-instant-access-feature).

3

SnapshotId

string

The ID of the snapshot.

s-j6cbzmrlbf09w72q\*\*\*\*

InstantAccess

boolean

Indicates whether the instant access feature is enabled. Valid values:

-   true: The instant access feature is enabled. By default, the instant access feature is enabled for ESSDs.
-   false: The instant access feature is disabled. The snapshot is a standard snapshot for which the instant access feature is disabled.

**Note** This parameter is no longer used. By default, standard snapshots of ESSDs are upgraded to instant access snapshots free of charge without the need for additional configurations. For more information, see [Use the instant access feature](/help/en/ecs/user-guide/enable-or-disable-the-instant-access-feature).

true

SourceDiskType

string

The type of the source disk. Valid values:

-   system: system disk
-   data: data disk

system

Tags

array<object>

The tags of the snapshot. The default values contain snapshot source information.

Tag

object

Key

string

The tag key of the snapshot. The default values of Key and Value contain snapshot source information.

acs:ecs:createFrom

Value

string

The tag value of the snapshot. The default values of Key and Value contain snapshot source information.

i-bp11qm0o3dk4iuc\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "NextToken": "caeba0bbb2be03f84eb48b699f0a4883",
  "RequestId": "3F9A4CC4-362F-469A-B9EF-B3204EF8AA3A",
  "SnapshotGroups": {
    "SnapshotGroup": [
      {
        "Status": "accomplished",
        "CreationTime": "2021-03-23T10:58:48Z",
        "Description": "This is description.",
        "ProgressStatus": null,
        "SnapshotGroupId": "ssg-j6ciyh3k52qp7ovm****",
        "InstanceId": "i-j6ca469urv8ei629****",
        "Name": "testName",
        "ResourceGroupId": "rg-bp67acfmxazb4p****",
        "Tags": {
          "Tag": [
            {
              "Key": "TestKey",
              "Value": "TestValue"
            }
          ]
        },
        "Snapshots": {
          "Snapshot": [
            {
              "SourceDiskId": "d-j6c3ogynmvpi6wy7****",
              "Progress": "100%",
              "Available": false,
              "InstantAccessRetentionDays": 3,
              "SnapshotId": "s-j6cbzmrlbf09w72q****",
              "InstantAccess": true,
              "SourceDiskType": "system",
              "Tags": {
                "Tag": [
                  {
                    "Key": "acs:ecs:createFrom",
                    "Value": "i-bp11qm0o3dk4iuc****"
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

Duplicate.TagKey

The Tag.N.Key contain duplicate key.

The specified tag key already exists. Tag keys must be unique.

403

InvalidSnapshotGroupId.MustBeOne

The size of SnapshotGroupIds must be one when AdditionalAttributes has SNAPSHOT\_GROUP\_PROGRESS\_STATUS.

\-

403

InvalidStatus.ValueNotSupported

The specified parameter status is not valid. The expected status is progressing, accomplished or failed.

The specified status parameter is invalid. The expected status is progressing, accomplished, or failed.

404

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId provided does not exist

404

InvalidInstanceId.NotFound

The InstanceId provided does not exist in our records.

The specified instance does not exist. Check whether the instance ID is correct.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-02-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeSnapshotGroups?updateTime=2025-02-26#workbench-doc-change-demo)

2025-02-06

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeSnapshotGroups?updateTime=2025-02-06#workbench-doc-change-demo)

2024-12-17

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeSnapshotGroups?updateTime=2024-12-17#workbench-doc-change-demo)

2024-12-02

API Description Update. The API operation is not deprecated.. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeSnapshotGroups?updateTime=2024-12-02#workbench-doc-change-demo)

2023-09-18

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeSnapshotGroups?updateTime=2023-09-18#workbench-doc-change-demo)
