Sets an expiration date for all Elastic Compute Service (ECS) instances.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/BssOpenApi/2017-12-14/SetAllExpirationDay)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/BssOpenApi/2017-12-14/SetAllExpirationDay)

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

bss:ModifyPrepaidInstanceAutoRenew

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

UnifyExpireDay

string

Yes

The expiration date. You can set an expiration date only for ECS instances that have not expired. The expiration date that you specify do not take effect on expired ECS instances. After the expiration date is set, the expiration date is used when you renew ECS instances.

You can set the expiration date to a day from the 1st to the 28th of each month.

10

## Response parameters

Parameter

Type

Description

Example

object

Code

string

The HTTP status code.

200

Message

string

The message that is returned.

The message that is returned

RequestId

string

The ID of the request.

The ID of the request

Success

boolean

Indicates whether the request is successful.

true

## Examples

Sample success responses

`JSON`format

```
{
  "Code": 200,
  "Message": "The message that is returned",
  "RequestId": "The ID of the request",
  "Success": true
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/BssOpenApi/2017-12-14/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
