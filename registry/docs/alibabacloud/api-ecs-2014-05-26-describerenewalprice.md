Queries the renewal prices of Elastic Compute Service (ECS) resources. Renewal prices of only subscription resources can be queried.

## Operation description

-   You can call this operation to query the price for renewing a subscription instance for a specific period of time or to a synchronized expiration date.
    
-   Take note of the following items:
    
    -   If you specify only the required parameters, the price for renewing an instance for one month is queried by default.
    -   The renewal period-related parameter pair (`Period` and `PeriodUnit`) and the synchronized expiration date-related parameter (`ExpectedRenewDay`) are mutually exclusive. You cannot set these parameters together to query the prices for renewing a specified instance for a period of time and to a synchronized expiration date at the same time.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeRenewalPrice)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeRenewalPrice)

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

ecs:DescribeRenewalPrice

get

DedicatedHost

`acs:ecs:{#regionId}:{#accountId}:ddh/{#ddhId}`

Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

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

The region ID of the instance. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent list of regions.

cn-hangzhou

ResourceType

string

No

The type of the resource. Set the value to instance.

Default value: instance.

instance

ResourceId

string

Yes

The ID of the resource. If the `ResourceType` parameter is set to `instance`, the value of the `ResourceId` parameter is the ID of the specified instance.\`\`

i-bp1f2o4ldh8l29zv\*\*\*\*

Period

integer

No

The renewal period. Valid values:

-   Valid values when the `PriceUnit` parameter is set to `Month`: 1, 2, 3, 4, 5, 6, 7, 8, and 9.
-   Valid values when the `PriceUnit` parameter is set to `Year`: 1, 2, 3.

Default value: 1.

**Note** The renewal period-related parameter pair (`Period` and `PeriodUnit`) and the `ExpectedRenewDay` parameter are mutually exclusive.

1

PriceUnit

string

No

The unit of the renewal period. Valid values:

-   Month
-   Year

Default value: Month.

Month

ExpectedRenewDay

integer

No

The synchronized expiration date. If you specify this parameter, the price for renewing a specified instance to the specified synchronized expiration date is queried. Valid values: 1 to 28.

For information about how to synchronize the expiration dates of instances, see [Synchronize the expiration dates of instances](/help/en/doc-detail/108486.html).

**Note** The renewal period-related parameter pair (`Period` and `PeriodUnit`) and the `ExpectedRenewDay` parameter are mutually exclusive.

5

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

PriceInfo

object

Details about the prices and promotion rules.

Rules

array<object>

The information about the promotion rules.

Rule

object

Description

string

The description of the promotion rule.

Receive a 15% discount on a 1-year subscription

RuleId

long

The ID of the promotion rule.

1234567890

Price

object

The price.

OriginalPrice

float

The original price.

4368

DiscountPrice

float

The discount.

655.2

Currency

string

The currency unit.

Alibaba Cloud China site (aliyun.com): CNY.

Alibaba Cloud International site (alibabacloud.com): USD.

CNY

TradePrice

float

The transaction price, which is equal to the original price minus the discount.

3712.8

DetailInfos

array<object>

Details about the resource prices.

ResourcePriceModel

object

Resource

string

The name of the resource that corresponds to the price.

instance

OriginalPrice

float

The original price.

4368

DiscountPrice

float

The discount.

655.2

TradePrice

float

The transaction price.

3712.8

SubRules

array<object>

The pricing rules.

Rule

object

Description

string

The description of the pricing rule.

Receive a 15% discount on a 1-year subscription.

RuleId

long

The ID of the pricing rule.

1234567890

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****",
  "PriceInfo": {
    "Rules": {
      "Rule": [
        {
          "Description": "Receive a 15% discount on a 1-year subscription\n",
          "RuleId": 1234567890
        }
      ]
    },
    "Price": {
      "OriginalPrice": 4368,
      "DiscountPrice": 655.2,
      "Currency": "CNY",
      "TradePrice": 3712.8,
      "DetailInfos": {
        "ResourcePriceModel": [
          {
            "Resource": "instance",
            "OriginalPrice": 4368,
            "DiscountPrice": 655.2,
            "TradePrice": 3712.8,
            "SubRules": {
              "Rule": [
                {
                  "Description": "Receive a 15% discount on a 1-year subscription.\n",
                  "RuleId": 1234567890
                }
              ]
            }
          }
        ]
      }
    }
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidResourceType.ValueNotSupported

The specified parameter ResourceType is not valid.

The specified resource type is not supported.

400

InvalidPeriod

The specified period is not valid.

The specified period is invalid.

400

InvalidPriceUnit.ValueNotSupported

The specified parameter PriceUnit is not valid.

The specified PriceUnit parameter is invalid.

400

Throttling

Request was denied due to request throttling.

\-

400

Throttling.User

Request was denied due to user flow control.

\-

400

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

400

InvalidPeriod.ExceededMaximumExpirationDate

The specified renewal period cannot exceed the maximum expiration date. We recommend you try shortening the renewal period at next attempt.

The specified renewal period exceeds the maximum allowed value. We recommend that you shorten the renewal period at your next attempt.

400

InvalidExpectedRenewDay.Conflict

The specified expectedRenewDay is in conflict with period.

\-

400

InvalidExpectedRenewDay.Conflict

The specified expectedRenewDay is in conflict with priceUnit.

\-

400

InvalidExpectedRenewDay.ValueNotSupported

The specified parameter ExpectedRenewDay is not valid.

\-

400

InvalidPeriod.ExceededDedicatedHost

Instance expired date can not exceed dedicated host expired date.

The expiration date of the instance is later than that of the dedicated host.

400

OperationRestricted.Renewal

The renewal operation has been restricted because the zone is closed. %s

\-

403

ChargeTypeViolation

The operation is not permitted due to charge type of the instance.

The operation is not supported while the instance is using the current billing method.

403

InvalidAction.Unauthorized

The specified action is not valid.

The specified operation is invalid.

404

InvalidInstanceId.NotFound

The specified InstanceId does not exist.

The specified instance does not exist.

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-11-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeRenewalPrice?updateTime=2025-11-27#workbench-doc-change-demo)

2025-11-04

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeRenewalPrice?updateTime=2025-11-04#workbench-doc-change-demo)

2025-10-30

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeRenewalPrice?updateTime=2025-10-30#workbench-doc-change-demo)

2025-10-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeRenewalPrice?updateTime=2025-10-28#workbench-doc-change-demo)

2025-02-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeRenewalPrice?updateTime=2025-02-13#workbench-doc-change-demo)

2025-01-08

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeRenewalPrice?updateTime=2025-01-08#workbench-doc-change-demo)
