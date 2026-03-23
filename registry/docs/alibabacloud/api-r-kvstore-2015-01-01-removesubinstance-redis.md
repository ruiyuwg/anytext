Removes a child instance from a distributed instance.

## Operation description

The operation that you want to perform. Set the value to **RemoveSubInstance**.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/RemoveSubInstance)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/RemoveSubInstance)

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

kvstore:RemoveSubInstance

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

InstanceId

string

Yes

Instance ID.

r-bp1zxszhcgatnx\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

5D622714-AEDD-4609-9167-F5DDD3D1\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "5D622714-AEDD-4609-9167-F5DDD3D1****"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/R-kvstore/2015-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-07-20

API Description Update

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/RemoveSubInstance?updateTime=2023-07-20#workbench-doc-change-demo)
