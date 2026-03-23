Enables or disables auto-renewal for one or more subscription dedicated hosts.

## Operation description

-   If you enable auto-renewal for your subscription dedicated host, the system attempts to deduct the renewal payment at 08:00:00 (UTC+8) nine days before the dedicated host expires to renew the dedicated host. If this deduction attempt fails, the system attempt to deduct the payment at the same point in time the next day. The system attempts to deduct the payment once every day until the dedicated host expires or until the payment is deducted. Make sure that your account balance is sufficient.
-   Subscription dedicated hosts can be automatically renewed along with the subscription Elastic Compute Service (ECS) instances hosted on the dedicated hosts. For more information, see the description of the AutoRenewWithEcs parameter.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyDedicatedHostAutoRenewAttribute)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyDedicatedHostAutoRenewAttribute)

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

ecs:ModifyDedicatedHostAutoRenewAttribute

update

\*DedicatedHost

`acs:ecs:{#regionId}:{#accountId}:ddh/{#ddhId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

DedicatedHostIds

string

Yes

The IDs of dedicated hosts. You can specify up to 100 subscription dedicated host IDs. Separate the IDs with commas (,).

dh-bp165p6xk2tlw61e\*\*\*\*

RegionId

string

Yes

The region ID of the dedicated host.

cn-hangzhou

Duration

integer

No

The renewal duration.

-   Valid values when PeriodUnit is set to Month: 1 and 12
-   Valid values when PeriodUnit is set to Year: 1 and 12

1

PeriodUnit

string

No

The unit of the renewal period. Valid values:

-   Month
-   Year

Default value: Month

Month

AutoRenew

boolean

No

Specifies whether to automatically renew the subscription. Valid values:

-   true
-   false

Default value: false

false

RenewalStatus

string

No

Specifies whether to automatically renew the subscription dedicated host. The `RenewalStatus` parameter takes precedence over the `AutoRenew` parameter. Valid values:

-   AutoRenewal: The dedicated hosts are automatically renewed.
-   Normal: The dedicated hosts are not automatically renewed, and renewal notifications are sent.
-   NotRenewal: The dedicated hosts are not automatically renewed, and no expiration notification is sent. A notification of no renewal is automatically sent three days before the end of the current subscription cycle. You can change the value of this parameter from NotRenewal to Normal and manually renew the dedicated hosts by calling the [RenewDedicatedHosts](/help/en/dedicated-host/developer-reference/api-renewdedicatedhosts) operation. Alternatively, you can renew the dedicated hosts by setting this parameter to AutoRenewal.

Normal

AutoRenewWithEcs

string

No

Specifies whether to automatically renew the subscription dedicated hosts along with the subscription ECS instances hosted on the dedicated hosts.

If auto-renewal is enabled for the subscription ECS instances hosted on the subscription dedicated hosts, you can specify this parameter to automatically renew the dedicated hosts along with the subscription ECS instances. When the subscription ECS instances hosted on your dedicated hosts are automatically renewed, the subscription dedicated hosts are also automatically renewed if the expiration time of the dedicated hosts is earlier than the expiration time of the renewed instances. Take note of the following items:

When the subscription dedicated hosts are configured to be automatically renewed along with the subscription ECS instances hosted on the dedicated hosts, the system checks the expiration time of the renewed instances and selects a minimum renewal duration for the dedicated hosts so that the dedicated hosts are renewed by a duration that ends later than the expiration time of the renewed instances. For more information about supported renewal durations, see the descriptions of the `PeriodUnit` and `Duration` parameters.

For example, assume that a dedicated host expires on January 15 of the current year. Subscription ECS instances hosted on the dedicated host are configured to be automatically renewed to November 15 of the same year. The expiration time of the dedicated host is earlier than the expiration time of the ECS instances by 10 months. In this case, the system selects a renewal duration of 12 months (a minimum duration calculated based on a `Duration` value of 12 and a `PeriodUnit` value of Month) for the dedicated host. This ensures that the dedicated host expires later than the ECS instances.

Valid values:

-   AutoRenewWithEcs: automatically renews the subscription dedicated hosts along with the subscription ECS instances hosted on the dedicated hosts.
-   StopRenewWithEcs: does not automatically renew the subscription dedicated hosts along with the subscription ECS instances hosted on the dedicated hosts.
-   NoOperation: does not change the current settings for the dedicated hosts.

**Note** If you set this parameter to AutoRenewWithEcs, make sure that `AutoRenew` is set to true to enable auto-renewal for the dedicated hosts. Otherwise, the subscription dedicated hosts are not automatically renewed along with the subscription ECS instances hosted on the dedicated hosts.

Default value: NoOperation.

StopRenewWithEcs

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

2A4EA075-CB5B-41B7-B0EB-70D339F6\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "2A4EA075-CB5B-41B7-B0EB-70D339F6****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

403

MissingParameter.DedicatedHostId

DedicatedHostId should not be null.

The DedicatedHostId parameter is required.

403

InvalidParameter.ToManyDedicatedHostIds

DedicatedHostId should be less than 100.

More than 100 dedicated host IDs are specified in the DedicatedHostIds value.

403

InvalidParameter.InvalidDedicatedHostId

%s

The specified DedicatedHostId parameter is invalid.

403

IncorrectHostStatus

The current status of the resource does not support this operation.

The resource is in a state that does not support the current operation.

403

ChargeTypeViolation

Pay-As-You-Go dedicated host do not support this operation.

\-

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

InvalidParameter.AutoRenewWithEcs

The value of parameter AutoRenewWithEcs is invalid.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-11-24

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyDedicatedHostAutoRenewAttribute?updateTime=2023-11-24#workbench-doc-change-demo)
