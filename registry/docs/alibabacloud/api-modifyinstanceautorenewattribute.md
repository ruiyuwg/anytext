Configures auto-renewal for subscription instances to help reduce the maintenance workloads on instance expiration.

## Operation description

**Before you call this operation, make sure that you are familiar with the billing methods and [pricing](https://www.alibabacloud.com/product/ecs#pricing) of Elastic Compute Service (ECS)**.

-   Make sure that your account balance or credit balance is sufficient.
-   Only subscription instances are supported. If you call this operation for a pay-as-you-go instance, an error is returned.
-   The payment for auto-renewal of an instance is automatically deducted at 08:00:00 (UTC+8) nine days before the instance expires.
-   If the deduction fails, Alibaba Cloud attempts to deduct the payment every day until the payment is deducted or until the instance is locked on expiration.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyInstanceAutoRenewAttribute)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyInstanceAutoRenewAttribute)

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

ecs:ModifyInstanceAutoRenewAttribute

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

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

The ID of the instance. You can specify up to 100 subscription instance IDs. Separate the instance IDs with commas (,).

i-bp67acfmxazb4ph\*\*\*\*,i-bp67acfmxazb4pi\*\*\*\*

RegionId

string

Yes

The region ID of the instance. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

Duration

integer

No

The auto-renewal period of the instance.

-   Valid values of `Duration` when `PeriodUnit` is set to `Year`: 1, 2, 3, 4, and 5.
-   Valid values of `Duration` when `PeriodUnit` is set to `Month`: 1, 2, 3, 6, 12, 24, 36, 48, and 60.

1

AutoRenew

boolean

No

Specifies whether to enable auto-renewal.

-   true
-   false

Default value: false.

true

RenewalStatus

string

No

The auto-renewal status of the instance. Valid values:

-   AutoRenewal: Auto-renewal is enabled for the instance.
-   Normal: Auto-renewal is disabled for the instance.
-   NotRenewal: The instance is not renewed. The system no longer sends an expiration notification but sends only a renewal notification three days before the instance expires. You can change the value of this parameter from NotRenewal to `Normal` for an instance, and then manually renew the instance. Alternatively, you can set the RenewalStatus parameter to AutoRenewal.

**Note** `RenewalStatus` takes precedence over `AutoRenew`. If you do not specify `RenewalStatus`, `AutoRenew` is used by default.

AutoRenewal

PeriodUnit

string

No

The unit of the renewal period (`Duration`). Valid values:

-   Month (default)
-   Year

Month

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

OperationDenied.StarterPackage

Instance created with a Starter Package plan can not set auto renew.

\-

403

MissingParameter.InstanceId

InstanceId should not be null.

The InstanceId parameter is required.

403

InvalidParameter.ToManyInstanceIds

InstanceId should be less than 100.

The number of instances must be smaller than 100.

403

InvalidParameter.InvalidInstanceId

%s

The specified InstanceId parameter is invalid.

403

IncorrectInstanceStatus

The current status of the resource does not support this operation.

The resource is in a state that does not support the current operation.

403

ChargeTypeViolation

Pay-As-You-Go instances do not support this operation.

The operation is not supported by pay-as-you-go instances. Check the billing method of the instance.

403

InvalidParameter.Duration

%s

The specified Duration parameter is invalid.

403

InvalidParameter.RenewalStatus

%s

The specified RenewalStatus parameter is invalid.

403

InvalidPeriodUnit.ValueNotSupported

The specified parameter PeriodUnit is not valid.

The specified PeriodUnit parameter is invalid.

403

InvalidPeriod.StarterPackage

This instance was created by using a Starter Package plan and can only be renewed monthly, not yearly.

The instance was created in a Starter Package plan and can only be automatically renewed on a monthly basis.

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
