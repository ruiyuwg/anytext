Renews one or more subscription dedicated hosts.

## Operation description

## [](#usage-notes)[](#)Usage notes

When you renew subscription dedicated hosts, vouchers are used first by default. Make sure that your account supports credit card payments or balance payments.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/RenewDedicatedHosts)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/RenewDedicatedHosts)

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

ecs:RenewDedicatedHosts

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

The IDs of dedicated hosts. You can specify the IDs of up to 100 subscription dedicated hosts. Specify the dedicated host IDs in a JSON array. Example: `["dh-xxxxxxxxx", "dh-yyyyyyyyy", … "dh-zzzzzzzzz"]`. Separate the IDs with commas (,).

dh-bp199lyny9b3\*\*\*\*

RegionId

string

Yes

The region ID of the dedicated host. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

Period

integer

Yes

The renewal duration. Valid values:

-   Valid values when the PeriodUnit parameter is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
-   Valid values when the PeriodUnit parameter is set to Year: 1, 2, 3, 4, and 5.

1

PeriodUnit

string

No

The unit of the renewal period. Valid values:

-   Month
-   Year

Default value: Month.

Month

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate a client token. Make sure that a unique client token is used for each request. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence?](/help/en/ecs/developer-reference/how-to-ensure-idempotence)

123e4567-e89b-12d3-a456-426655440000

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

OrderId

string

The ID of the order.

23841229\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "2A4EA075-CB5B-41B7-B0EB-70D339F6****",
  "OrderId": "23841229****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

IdempotenceParamNotMatch

Request uses a client token in a previous request but is not identical to that request.

This request and the previous request contain the same client token but different other parameters.

400

InvalidClientToken.ValueNotSupported

The ClientToken provided is invalid.

The specified ClientToken parameter is invalid.

400

InvalidPeriod

The specified period is not valid.

The specified period is invalid.

400

InvalidPeriodUnit.ValueNotSupported

The specified parameter PeriodUnit is not valid.

The specified PeriodUnit parameter is invalid.

400

ChargeTypeViolation

Pay-As-You-Go dedicated host do not support this operation.

\-

400

InvalidDedicatedHostId.NotFound

The specified DedicatedHostId does not exist.

\-

400

InvalidStatus.Upgrading

The dedicated host is upgrading, please try it later.

The specified dedicated host is being upgraded. Try again later.

400

LastOrderProcessing

The previous order is still processing, please try again later.

The order is being processed. Try again later.

403

IncorrectHostStatus

The current status of the resource does not support this operation.

The resource is in a state that does not support the current operation.

403

LastTokenProcessing

The last token request is processing.

A token request is being processed. Try again later.

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-02-24

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RenewDedicatedHosts?updateTime=2025-02-24#workbench-doc-change-demo)

2025-01-21

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RenewDedicatedHosts?updateTime=2025-01-21#workbench-doc-change-demo)
