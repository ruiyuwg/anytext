Cancels an automatic snapshot policy for cloud computers.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ecd/2020-09-30/CancelAutoSnapshotPolicy)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ecd/2020-09-30/CancelAutoSnapshotPolicy)

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

ecd:CancelAutoSnapshotPolicy

update

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

PolicyId

string

Yes

The ID of the automatic snapshot policy.

sp-78lhzpe7kjfnd\*\*\*\*

DesktopId

array

Yes

The IDs of the cloud computers. You can specify 1 to 50 IDs. The IDs cannot be an empty string. The IDs can be up to 64 characters in length and cannot contain `http://` or `https://`. The IDs cannot start with `acs:` or `aliyun`.

string

Yes

The ID of a cloud computer.

ecd-itcmrhqt01tdl\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

51592A88-0F2C-55E6-AD2C-2AD9C10D\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "51592A88-0F2C-55E6-AD2C-2AD9C10D****"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-07-22

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/ecd/2020-09-30/CancelAutoSnapshotPolicy?updateTime=2024-07-22#workbench-doc-change-demo)
