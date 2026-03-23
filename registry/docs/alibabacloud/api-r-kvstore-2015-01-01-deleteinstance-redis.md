Releases a Tair (Redis OSS-compatible) instance.

## Operation description

For more information about how to perform the corresponding operation in the console, see [Release an instance](/help/en/redis/user-guide/release-pay-as-you-go-instances).

Before you call this operation, make sure that the following requirements are met:

-   The instance is in the running state.
-   The instance is charged on a pay-as-you-go basis.

**Note** You cannot call this operation to release a subscription instance, which is automatically released when it expires. To release a subscription instance before it expires, submit a ticket.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/DeleteInstance)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/DeleteInstance)

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

kvstore:DeleteInstance

delete

\*DBInstance

`acs:kvstore:{#regionId}:{#accountId}:instance/{#instanceId}`

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

The ID of the instance that you want to release.

r-bp1zxszhcgatnx\*\*\*\*

GlobalInstanceId

string

No

The ID of the distributed instance to which the instance belongs. This parameter is applicable to only China site (aliyun.com).

gr-bp14rkqrhac\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

5D622714-AEDD-4609-9167-F5DDD3D190D2

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "5D622714-AEDD-4609-9167-F5DDD3D190D2"
}
```

## Error codes

HTTP status code

Error code

Error message

403

InstanceReleaseProtection

The operation is not permitted due to instance release protection.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/R-kvstore/2015-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-25

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DeleteInstance?updateTime=2025-03-25#workbench-doc-change-demo)
