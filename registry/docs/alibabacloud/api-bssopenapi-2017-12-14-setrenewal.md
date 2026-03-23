Enables auto-renewal for an instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/BssOpenApi/2017-12-14/SetRenewal)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/BssOpenApi/2017-12-14/SetRenewal)

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

RenewalPeriod

integer

No

The auto-renewal period. Valid values:

-   1
-   2
-   3
-   6
-   12

**Note** This parameter is required if the RenewalStatus parameter is set to AutoRenewal.

1

InstanceIDs

string

Yes

The ID of the instance. You can enable auto-renewal for up to 100 subscription instances at a time. Separate multiple instance IDs with commas (,).

rm-askjdhaskfjh

ProductCode

string

Yes

The code of the service.

rds

ProductType

string

No

The type of the service.

rds

SubscriptionType

string

No

The billing method. Valid values:

-   Subscription: subscription
-   PayAsYouGo: pay-as-you-go

PayAsYouGo

RenewalPeriodUnit

string

No

The unit of the auto-renewal period. Valid values:

-   M: months
-   Y: years

**Note** This parameter is required if the RenewalStatus parameter is set to AutoRenewal.

M

RenewalStatus

string

Yes

The status of renewal. Valid values:

-   AutoRenewal: The instance is automatically renewed.
-   ManualRenewal: The instance is manually renewed.
-   NotRenewal: The instance is not renewed.

AutoRenewal

## Response parameters

Parameter

Type

Description

Example

object

Code

string

The status code.

Success

Message

string

The error message returned.

Successful

RequestId

string

The ID of the request.

6000EE23-274B-4E07-A697-FF2E999520A4

Success

boolean

Indicates whether the request was successful.

true

## Examples

Sample success responses

`JSON`format

```
{
  "Code": "Success",
  "Message": "Successful",
  "RequestId": "6000EE23-274B-4E07-A697-FF2E999520A4",
  "Success": true
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/BssOpenApi/2017-12-14/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-01-25

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/BssOpenApi/2017-12-14/SetRenewal?updateTime=2024-01-25#workbench-doc-change-demo)
