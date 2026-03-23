Queries the maximum public bandwidth that can be purchased, upgraded, or downgraded for various Elastic Compute Service (ECS) instance types.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeBandwidthLimitation)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeBandwidthLimitation)

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

ecs:DescribeBandwidthLimitation

get

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

RegionId

string

Yes

The region ID. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

InstanceChargeType

string

No

The billing method of the instance. For more information, see [Billing overview](/help/en/ecs/billing-overview). Valid values:

-   PrePaid: subscription
-   PostPaid: pay-as-you-go

Default value: PostPaid.

PostPaid

SpotStrategy

string

No

The bidding policy for the pay-as-you-go instance. Valid values:

-   NoSpot: The instance is a pay-as-you-go instance.
-   SpotWithPriceLimit: The instance is a spot instance for which you can specify the maximum hourly price.
-   SpotAsPriceGo: The instance is a spot instance for which the market price at the time of purchase is automatically used as the bid price. The market price can be up to the pay-as-you-go price.

Default value: NoSpot.

**Note** The SpotStrategy parameter takes effect only when the InstanceChargeType parameter is set to PostPaid.

NoSpot

InstanceType

string

Yes

The instance type. For information about the values, see [Overview of ECS instance families](/help/en/ecs/user-guide/overview-of-instance-families).

ecs.g5.large

ResourceId

string

No

The resource ID.

**Note** This parameter is required when the OperationType parameter is set to Upgrade or Downgrade.

i-bp67acfmxazb4ph\*\*\*

OperationType

string

No

Specifies the operation for which to query the maximum public bandwidth. Valid values:

-   Upgrade: upgrades the public bandwidth.
-   Downgrade: downgrades the public bandwidth.
-   Create: creates an ECS instance.

Default value: Create.

Upgrade

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

Bandwidths

array<object>

Details about the maximum public bandwidth.

Bandwidth

object

InternetChargeType

string

The billing method for network usage. Valid values:

-   PayByBandwidth
-   PayByTraffic

PayByTraffic

Max

integer

The maximum public bandwidth.

100

Min

integer

The minimum public bandwidth.

0

Unit

string

The unit of the public bandwidth.

Mbps

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****",
  "Bandwidths": {
    "Bandwidth": [
      {
        "InternetChargeType": "PayByTraffic",
        "Max": 100,
        "Min": 0,
        "Unit": "Mbps"
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

Invalid.InstanceChargeType

The specified InstanceChargeType is not valid.

The specified InstanceChargeType parameter is invalid.

400

InvalidParam

The input parameter DestinationResource that is mandatory for processing this request is not supplied.

\-

400

InvalidInstanceType.ValueNotSupported

The specified InstanceType beyond the permitted range.

\-

400

InvalidInstanceId.NotFound

The specified ecs instance not found.

\-

404

Invalid.ResourceType.NotFound

The ResourceType provided does not exist in our records.

\-

404

Invalid.NetworkCategory

The specified NetworkCategory is not valid.

The specified NetworkCategory parameter is invalid.

404

Invalid.SpotStrategy

The specified SpotStrategy is not valid.

The specified SpotStrategy parameter is invalid.

404

Invalid.IoOptimized

The specified IoOptimized is not valid.

The specified IoOptimized parameter is invalid.

404

Invalid.ResourceId

The specified ResourceId is not valid.

The specified ResourceId parameter is invalid.

404

Invalid.InstancePayType

The specified InstancePayType is not valid.

The specified InstanceChargeType parameter is invalid.

404

Invalid.OperationType

The specified OperationType is not valid.

The specified OperationType parameter is invalid.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-03-07

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeBandwidthLimitation?updateTime=2023-03-07#workbench-doc-change-demo)
