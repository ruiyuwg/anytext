Create a snapshot for a disk of a cloud computer to back up or restore the data on the disk.

## Operation description

The cloud computer must be in the **Running** or **Stopped** state.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ecd/2020-09-30/CreateSnapshot)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ecd/2020-09-30/CreateSnapshot)

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

ecd:CreateSnapshot

create

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

The region ID. You can call the [DescribeRegions](/help/en/wuying-workspace/describeregions) operation to query the most recent region list.

cn-hangzhou

DesktopId

string

Yes

The ID of the cloud computer.

ecd-gx2x1dhsmucyy\*\*\*\*"

SnapshotName

string

Yes

The name of the snapshot. The name must be 2 to 127 characters in length. The name must start with a letter. The name can contain letters, digits, underscores (\_), and hyphens (-). The name cannot start with `auto` because snapshots whose names start with auto are recognized as automatic snapshots.

testSnapshotName

Description

string

No

The description of the snapshot. The description can be up to 128 characters in length.

testDescription

SourceDiskType

string

Yes

The type of the disk for which you want to create a snapshot.

Valid values:

-   system: system disk
    
-   data: data disk
    

system

## Response parameters

Parameter

Type

Description

Example

object

The object returned.

SnapshotId

string

The ID of the snapshot.

s-2ze81owrnv9pity4\*\*\*\*

RequestId

string

The ID of the region.

3EB7FCEE-D731-4948-85A3-4B2C341CA983

## Examples

Sample success responses

`JSON`format

```
{
  "SnapshotId": "s-2ze81owrnv9pity4****",
  "RequestId": "3EB7FCEE-D731-4948-85A3-4B2C341CA983"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-02-05

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/ecd/2020-09-30/CreateSnapshot?updateTime=2024-02-05#workbench-doc-change-demo)

2022-11-22

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/ecd/2020-09-30/CreateSnapshot?updateTime=2022-11-22#workbench-doc-change-demo)
