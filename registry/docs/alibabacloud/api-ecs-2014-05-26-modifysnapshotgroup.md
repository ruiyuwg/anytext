Modifies the name and description of a snapshot-consistent group.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifySnapshotGroup)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifySnapshotGroup)

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

ecs:ModifySnapshotGroup

update

\*SnapshotGroup

`acs:ecs:{#regionId}:{#accountId}:snapshotgroup/{#SnapshotGroupId}`

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

SnapshotGroupId

string

Yes

The ID of the snapshot-consistent group. You can call the [DescribeSnapshotGroups](/help/en/ecs/api-describesnapshotgroups) operation to query the IDs of available snapshot-consistent groups.

ssg-j6ciyh3k52qp7ovm\*\*\*\*

Name

string

No

The new name of the snapshot-consistent group. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with a `http://` or `https://`. The name can contain letters, digits, periods (.), underscores (\_), hyphens (-), and colons (:).

testName02

Description

string

No

The new description of the snapshot-consistent group. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.

This is new description

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

A00B5E55-76B7-42C8-8A80-AF10E980DCC7

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "A00B5E55-76B7-42C8-8A80-AF10E980DCC7"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidParameter.Name

The specified Name is invalid.

The specified Name parameter is invalid.

400

InvalidParameter.Description

The specified Description is invalid.

\-

404

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId provided does not exist

404

InvalidSnapshotGroup.NotFound

The SnapshotGroupId provided does not exist in our records.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-02

API Description Update. The API operation is not deprecated.. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifySnapshotGroup?updateTime=2024-12-02#workbench-doc-change-demo)
