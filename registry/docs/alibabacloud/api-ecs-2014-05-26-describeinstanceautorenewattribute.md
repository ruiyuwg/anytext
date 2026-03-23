Queries the auto-renewal attribute of subscription Elastic Compute Service (ECS) instances, including whether auto-renewal is enabled for the instances and the auto-renewal durations of the instances.

## Operation description

-   Only subscription instances are supported. If you call this operation for a pay-as-you-go instance, an error is returned.
-   Before you configure auto-renewal or manual renewal for subscription instances, you can query the auto-renewal status of the instances.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeInstanceAutoRenewAttribute)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeInstanceAutoRenewAttribute)

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

ecs:DescribeInstanceAutoRenewAttribute

list

Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

Instance

`acs:ecs:{#regionId}:{#accountId}:instance/*`

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

No

The IDs of the instances. You can specify up to 100 subscription instance IDs in a single request. Separate multiple instance IDs with commas (,).

**Note** `InstanceId` and `RenewalStatus` cannot be empty at the same time.

i-bp18x3z4hc7bixhx\*\*\*\*,i-bp1g6zv0ce8oghu7\*\*\*\*

RegionId

string

Yes

The region ID of the instance. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

RenewalStatus

string

No

The auto-renewal state of the instance. Valid values:

-   AutoRenewal: Auto-renewal is enabled for the instance.
-   Normal: Auto-renewal is disabled for the instance.
-   NotRenewal: The instance is not to be renewed. The system sends no more expiration reminders, but sends only a non-renewal reminder three days before the expiration date. For an instance that is not to be renewed, you can call the [ModifyInstanceAutoRenewAttribute](/help/en/ecs/api-modifyinstanceautorenewattribute) operation to change its auto-renewal status to `Normal`. Then, you can manually renew the instance or enable auto-renewal for the instance.

AutoRenewal

PageSize

string

No

The number of entries per page.

Valid values: 1 to 100.

Default value: 10.

10

PageNumber

string

No

The page number.

Pages start from page 1.

Default value: 1.

1

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

PageNumber

integer

The page number.

1

PageSize

integer

The number of entries per page.

10

TotalCount

integer

The total number of queried instances.

6

InstanceRenewAttributes

array<object>

The renewal attributes of instances.

InstanceRenewAttribute

object

PeriodUnit

string

The unit of the auto-renewal duration.

week

Duration

integer

The auto-renewal duration.

1

RenewalStatus

string

The auto-renewal state of the instance. Valid values:

-   AutoRenewal: Auto-renewal is enabled for the instance.
-   Normal: Auto-renewal is disabled for the instance.
-   NotRenewal: The instance is not to be renewed. The system sends no more expiration reminders, but sends only a non-renewal reminder three days before the expiration date. For an instance that is not to be renewed, you can call the [ModifyInstanceAutoRenewAttribute](/help/en/ecs/api-modifyinstanceautorenewattribute) operation to change its auto-renewal status to `Normal`. Then, you can manually renew the instance or enable auto-renewal for the instance.

Normal

InstanceId

string

The ID of the instance.

i-bp18x3z4hc7bixhx\*\*\*\*

AutoRenewEnabled

boolean

Indicates whether auto-renewal is enabled.

false

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "PageNumber": 1,
  "PageSize": 10,
  "TotalCount": 6,
  "InstanceRenewAttributes": {
    "InstanceRenewAttribute": [
      {
        "PeriodUnit": "week",
        "Duration": 1,
        "RenewalStatus": "Normal",
        "InstanceId": "i-bp18x3z4hc7bixhx****",
        "AutoRenewEnabled": false,
        "EnableExpectedRenewDay": true
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

Throttling

Request was denied due to request throttling.

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

IncorrectInstanceStatus

The current status of the resource does not support this operation.

The resource is in a state that does not support the current operation.

403

ChargeTypeViolation

Pay-As-You-Go instances do not support this operation.

The operation is not supported by pay-as-you-go instances. Check the billing method of the instance.

403

InvalidParameter.RenewalStatus

The specified parameter RenewalStatus is not valid.

The specified RenewalStatus parameter is invalid.

403

InvalidParameter.RenewalStatusInstanceId

The parameter RenewalStatus and InstanceId can not be both empty.

The RenewalStatus and InstanceId parameters are required.

403

InvalidParameter.PageSize

The specified parameter PageSize is not valid.

The PageSize parameter is invalid.

403

InvalidParameter.PageNumber

The specified parameter PageNumber is not valid.

The specified PageNumber parameter is invalid.

403

InvalidParameter.InvalidInstanceId

The specified InstanceId does not exist.

The specified InstanceId does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2026-01-05

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInstanceAutoRenewAttribute?updateTime=2026-01-05#workbench-doc-change-demo)

2025-03-11

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInstanceAutoRenewAttribute?updateTime=2025-03-11#workbench-doc-change-demo)

2021-11-04

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInstanceAutoRenewAttribute?updateTime=2021-11-04#workbench-doc-change-demo)
