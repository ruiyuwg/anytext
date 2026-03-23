Queries alternative instance types of an instance type. This operation is in internal preview. This operation lists all alternative instance types of an instance type that has been or is planed to be retired.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeRecommendInstanceType)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeRecommendInstanceType)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

Cores

integer

No

The number of vCPU cores of the instance type.

**Note** If you specify both `Cores` and `Memory`, the system returns all instance types that match the values of the parameters.

2

Memory

float

No

The memory size of the instance type. Unit: GiB.

**Note** If you specify both `Cores` and `Memory`, the system returns all instance types that match the values of the parameters.

8.0

InstanceFamilyLevel

string

No

The level of the instance family. Valid values:

-   EntryLevel: entry level.
-   EnterpriseLevel: enterprise level.
-   CreditEntryLevel: credit-based entry level. For more information, see [Burstable instance families](/help/en/ecs/user-guide/burst-performance-instance-overview).

EnterpriseLevel

InstanceType

string

No

The instance type. For more information, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families) or call the [DescribeInstanceTypes](/help/en/ecs/api-describeinstancetypes) operation to query the most recent instance type list.

**Note** If you specify `InstanceType`, you cannot specify `Cores` or `Memory`.

ecs.hfg6.large

NetworkType

string

Yes

The network type of ECS instances. Valid values:

-   classic
-   vpc

Default value: vpc.

vpc

InstanceChargeType

string

No

The billing method of the ECS instance. For more information, see [Billing overview](/help/en/ecs/billing-overview). Valid values:

-   PrePaid: subscription.
-   PostPaid: pay-as-you-go

Default value: PostPaid

PostPaid

SpotStrategy

string

No

The bidding policy of the spot instance. Valid values:

-   NoSpot: The instance is created as a pay-as-you-go instance.
-   SpotWithPriceLimit: The instance is a spot instance that has a user-defined maximum hourly price.
-   SpotAsPriceGo: The instance is a spot instance for which the market price at the time of purchase is automatically used as the bid price. The market price can be up to the pay-as-you-go price.

**Note** If you specify `SpotStrategy`, you must set `InstanceChargeType` to `PostPaid`.

Default value: NoSpot.

NoSpot

IoOptimized

string

No

Specifies whether instances of the instance type are I/O optimized. You cannot specify IoOptimized if the instance type supports only non-I/O optimized instances. Valid values:

-   optimized: The instances are I/O optimized.
-   none: The instances are non-I/O optimized.

Default value: optimized.

If you query alternative instance types for retired instance types, this parameter is set to none by default.

optimized

PriorityStrategy

string

No

The policy for recommending instance types. Valid values:

-   InventoryFirst: recommends instance types in descending order of resource availability.
-   PriceFirst: recommends the most cost-effective instance types. Recommended instance types appear based on the hourly prices of vCPUs in ascending order.
-   NewProductFirst: recommends the latest instance types first.

Default value: InventoryFirst.

PriceFirst

MaxPrice

float

No

The maximum hourly price for pay-as-you-go instances or spot instances.

**Note** This parameter takes effect only when `SpotStrategy` is set to `SpotWithPriceLimit`.

10.0

RegionId

string

Yes

The region ID. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

ZoneId

string

No

The zone ID. You can call the [DescribeZones](/help/en/ecs/api-describezones) operation to query the most recent zone list.

We recommend that you set ZoneMatchMode to Include, which is the default value. This way, the system recommends instance types that are available in the zone specified by ZoneId based on the priority policy. The system also recommends instance types that are available in other zones within the same region.

cn-hangzhou-f

SystemDiskCategory

string

No

The category of the system disk. Valid values:

-   cloud\_efficiency: ultra disk
-   cloud\_ssd: standard SSD
-   cloud\_essd: Enterprise SSD (ESSD)
-   cloud: basic disk

For non-I/O optimized instances, the default value is cloud.

For I/O optimized instances, the default value is cloud\_efficiency.

cloud\_ssd

ZoneMatchMode

string

No

Specifies whether to recommend only instance types in the zone specified by ZoneId. Valid values:

-   Strict: recommends only instance types that are available in the zone specified by ZoneId.
-   Include: recommends instance types that are available in the zone specified by ZoneId and instance types that are available in other zones within the same region.

If `ZoneId` is specified, the default value of this parameter is Strict, which indicates that only instance types in the zone specified by ZoneId are recommended.

Strict

Scene

string

No

Specifies the scenarios in which instance types are recommended. Valid values:

-   UPGRADE: instance type upgrade or downgrade
-   CREATE: instance creation

Default value: CREATE.

CREATE

InstanceTypeFamily

array

No

The instance families from which the alternative instance types are selected. You can specify up to 10 instance families.

string

No

The instance family. For more information, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families). You can also call the [DescribeInstanceTypeFamilies](/help/en/ecs/api-describeinstancetypes) operation to query the most recent list of instance families.

ecs.hfg6

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

Data

array<object>

The details of the recommended instance types.

RecommendInstanceType

object

CommodityCode

string

The commodity code of the instance type.

ecs

ZoneId

string

The ID of the zone in which the instance type is available.

cn-hangzhou-h

Priority

integer

The priority based on which the system sorts the instance types.

2

NetworkType

string

The network type of the ECS instances.

vpc

Scene

string

The scenario in which the instance type is recommended.

CREATE

SpotStrategy

string

The bidding policy for the spot instances.

NoSpot

RegionId

string

The ID of the region in which the instance type is available.

cn-hangzhou

InstanceChargeType

string

The billing method of the instances.

PostPaid

Zones

array<object>

The details of the zones in which the instance type is available.

zone

object

ZoneNo

string

The ID of the zone in which the instance type is available.

cn-hangzhou-h

NetworkTypes

array

The details of the network types of the instance type.

NetworkType

string

The network type of the instance type.

vpc

InstanceType

object

The details of the instance type.

SupportIoOptimized

string

Indicates whether the instance type supports I/O optimization.

optimized

Cores

integer

The number of vCPUs of the instance type.

1

Memory

integer

The memory size of the instance type. Unit: MB.

8192

InstanceType

string

The name of the instance type.

ecs.hfg6.large

InstanceTypeFamily

string

The instance family.

ecs.hfg6

Generation

string

The generation of the instance family.

ecs-4

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "Data": {
    "RecommendInstanceType": [
      {
        "CommodityCode": "ecs",
        "ZoneId": "cn-hangzhou-h",
        "Priority": 2,
        "NetworkType": "vpc",
        "Scene": "CREATE",
        "SpotStrategy": "NoSpot",
        "RegionId": "cn-hangzhou",
        "InstanceChargeType": "PostPaid",
        "Zones": {
          "zone": [
            {
              "ZoneNo": "cn-hangzhou-h",
              "NetworkTypes": {
                "NetworkType": [
                  "vpc"
                ]
              }
            }
          ]
        },
        "InstanceType": {
          "SupportIoOptimized": "optimized",
          "Cores": 1,
          "Memory": 8192,
          "InstanceType": "ecs.hfg6.large",
          "InstanceTypeFamily": "ecs.hfg6",
          "Generation": "ecs-4"
        }
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

RecommendEmpty.InstanceTypeNotAuthorized

The recommend instanceTypes are not authorized.

No instance types can be recommended because no appropriate alternative instance types are available in the specified region or zone.

400

RecommendEmpty.InstanceTypeSoldOut

The recommend instanceTypes are out of usage.

No instance types can be recommended because the specified instance type is sold out and no appropriate alternative instance types are available within the specified region or zone.

400

RecommendEmpty.DiskCategoryNotRecommended

The specified disk category is not available for recommended.

The specified disk category is out of stock.

400

InvalidNetworkType.ValueNotSupported

The specified parameter NetworkType is not valid.

The specified NetworkType parameter is invalid.

400

InvalidSpotStrategy.ValueNotSupported

The specified parameter SpotStrategy is not valid.

\-

400

InvalidInstanceChargeType.NotFound

The specified parameter InstanceChargeType is not valid.

\-

400

InvalidPriorityStrategy.ValueNotSupported

The specified parameter PriorityStrategy is not supported.

\-

400

InvalidParam.TypeAndCpuMem.Conflict

The specified parameters InstanceType and Cores,Memory should not be blank at the same time.

\-

400

InvalidIoOptimized.NotFound

The specified parameter IoOptimized is not valid.

The specified IO optimization parameter IoOptimized is invalid.

400

InvalidRegionId.MalFormed

The specified parameter RegionId is not valid.

The specified RegionId parameter is invalid.

400

InvalidDiskCategory.NotFound

The specified parameter SystemDiskCategory is not supported.

The specified disk type DiskCategory not supported.

400

InvalidInstanceTypeFamily.NotFound

The specified InstanceTypeFamily is not valid.

\-

400

InvalidMaxPrice.NotSupported

The specified MaxPrice is not valid.

The specified MaxPrice parameter is invalid. This parameter takes effect only for Spot instances and must be set to a value greater than 0.

400

InvalidZoneId.MalFormed

The specified ZoneId is not valid when Cores and Memory is not null.

\-

400

InvalidInstanceType.NotSupported

The specified InstanceType is not valid.

\-

400

InvalidZoneId.ValueNotSupported

The specified ZoneId is not valid.

The specified ZoneId parameter is invalid.

400

InvalidCoreAndMemory.ValueNotSupported

The specified Cores/Memory does not match instance type.

The specified number of CPU cores and memory configuration do not match the specified specification (family).

400

QuotaExceed.AfterpayInstance

Living afterpay instances quota exceeded.

The maximum number of pay-as-you-go instances has been reached.

400

RecommendEmpty.PerformanceNotSatisfied

The performance of recommend instanceType is not satisfied.

\-

400

RecommendEmpty.PriceNotSatisfied

The current price of recommend instanceTypes above user max price.

No instance types can be recommended because no instance types that meet the price requirements are available within the specified region or zone.

400

RecommendEmpty.QuotaNotSatisfied

The quota of recommend instanceTypes are out of usage.

No instance types can be recommended because none are available within the specified region or zone due to limited quotas.

400

RecommendEmpty.IzNotMatched

The iz of recommend instanceTypes are not match.

\-

400

RecommendEmpty.InstanceTypeNotMatched

The recommend instanceTypes are not match.

\-

400

InvalidScene.ValueNotSupported

The specified Scene is invalid.

\-

400

RecommendEmpty.InstanceTypeFamilyNotMatched

The recommend instanceTypeFamily are not match.

No instance types can be recommended because no instance types that meet the requirements for the array of instance types are available within the specified region or zone.

400

RecommendEmpty.GenerationNotMatch

The recommend instanceType generation are not match.

\-

400

RecommendEmpty.NetworkTypeNotSupported

The recommend instanceType networkType are not match.

\-

400

InvalidInstanceFamilyLevel.NotSupported

The specified InstanceFamilyLevel is not valid.

The specified InstanceFamilyLevel parameter is invalid.

404

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId provided does not exist

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-02-26

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeRecommendInstanceType?updateTime=2025-02-26#workbench-doc-change-demo)

2023-12-07

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeRecommendInstanceType?updateTime=2023-12-07#workbench-doc-change-demo)
