Applies for the coordinate permissions.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ecd/2020-09-30/ApplyCoordinatePrivilege)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ecd/2020-09-30/ApplyCoordinatePrivilege)

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

ecd:ApplyCoordinatePrivilege

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

Uuid

string

No

The unique identifier of the client. If you use an Alibaba Cloud Workspace client, click **About** on the client logon page to view the identifier of the client.

8b241d415da244a6936d6d6fa4f20f4d

EndUserId

string

No

The ID of the end user.

zhangsan

CoId

string

Yes

The ID of the application for the coordinate permissions.

co-fqsm6e8ee75w61fp9

UserType

string

Yes

The type of user who requires the coordinate permissions.

Valid value: TENANT\_ADMIN.

TENANT\_ADMIN

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

C43EEAC3-84F8-5C1E-A067-4751C3D1422E

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "C43EEAC3-84F8-5C1E-A067-4751C3D1422E"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
