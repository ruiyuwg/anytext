Checks whether the createdby tag is enabled.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Tag/2018-08-28/CheckCreatedByEnabled)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Tag/2018-08-28/CheckCreatedByEnabled)

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

tag:CheckCreatedByEnabled

none

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

The ID of the region where the instance resides.

Set the value to cn-shanghai.

cn-shanghai

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The request ID.

682DD9E1-F530-5D14-A839-A6787FA8\*\*\*\*

OpenStatus

boolean

Indicates whether the createdby tag is enabled. Valid values:

-   true
-   false

false

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "682DD9E1-F530-5D14-A839-A6787FA8****",
  "OpenStatus": false
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

Throttling

You have exceeded the maximum traffic. To increase the limit, submit a ticket.

\-

403

NoPermission.Operator

The user is not authorized to operate on the specified resource.

The user is not authorized to operate on the specified resource.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Tag/2018-08-28/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
