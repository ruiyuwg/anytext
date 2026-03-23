Queries the most recent prices of specified resources. You can specify a resource type in the request, such as the Elastic Compute Service (ECS) instance, cloud disk, dedicated host, elasticity assurance, and capacity reservation. You can also query the activity rules, prices, and discounts of resources.

## Operation description

The required parameters vary based on the type of resource whose prices you want to query.

-   When `ResourceType` is set to instance, you must specify `InstanceType`. By default, `ChargeType` is set to `PostPaid`. You can specify `PriceUnit` to query the ECS resource prices in different billing cycles.
-   When `ResourceType` is set to disk, you must specify `DataDisk.1.Category` and `DataDisk.1.Size` in the same request. When `ResourceType` is set to disk, only pay-as-you-go prices of cloud disks are returned. In this scenario, `PriceUnit` can be set only to `Hour`.
-   When `ResourceType` is set to diskperformance, you must specify `DataDisk.1.Category` and `DataDisk.1.ProvisionedIops`.
-   When `ResourceType` is set to ddh, you must specify `DedicatedHostType`.
-   When `ResourceType` is set to ElasticityAssurance, you must specify `InstanceType`.
-   When `ResourceType` is set to CapacityReservation, you must specify `InstanceType`.
-   When `ResourceType` is set to bandwidth, only the pay-by-traffic (`PayByTraffic`) prices for network usage are returned.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribePrice)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribePrice)

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

ecs:DescribePrice

get

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

RegionId

string

Yes

The region ID. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent list of regions.

cn-hangzhou

ResourceType

string

No

The type of the resource. Valid values:

-   instance: queries the most recent prices of ECS instances. If you set this parameter to `instance`, specify `InstanceType`.
-   disk: queries the most recent prices of cloud disks. If you set this parameter to `disk`, specify `DataDisk.1.Category` and `DataDisk.1.Size`.
-   diskperformance: Queries the most recent prices of the provioned performance of the Enterprise SSD (ESSD) AutoPL disk. You must also specify `DataDisk.1.Category` and `DataDisk.1.ProvisionedIops`.
-   bandwidth: queries the most recent prices for network usage.
-   ddh: queries the most recent prices of dedicated hosts.
-   ElasticityAssurance: queries the most recent prices of elasticity assurances. If you set this parameter to `ElasticityAssurance`, specify `InstanceType`.
-   CapacityReservation: queries the most recent prices of capacity reservations. If you set this parameter to `CapacityReservation`, specify `InstanceType`.

Default value: instance.

instance

ImageId

string

No

This parameter takes effect only when ResourceType is set to instance.

The image ID. Images contain the runtime environments to load when instances start. You can call the [DescribeImages](/help/en/ecs/api-describeimages) operation to query available images. If you do not specify this parameter, the system queries the prices of Linux images.

centos\_7\_05\_64\_20G\_alibase\_20181212.vhd

InstanceType

string

No

The instance type. When `ResourceType` is set to `instance`, you must specify this parameter. For more information, see [Instance families](/help/en/ecs/user-guide/overview-of-instance-families) or call the [DescribeInstanceTypes](/help/en/ecs/api-describeinstancetypes) operation to query the most recent list of instance types.

ecs.g6.large

DedicatedHostType

string

No

The type of the dedicated host. You can call the [DescribeDedicatedHostTypes](/help/en/dedicated-host/developer-reference/api-describededicatedhosttypes) operation to query the most recent list of dedicated host types.

ddh.c5

IoOptimized

string

No

Specifies whether the instance is I/O optimized. Valid values:

-   none: The instance is not I/O optimized.
-   optimized: The instance is I/O optimized.

When the instance type specified by the InstanceType parameter belongs to [Generation I instance families](/help/en/ecs/user-guide/retired-instance-types), the default value of this parameter is none.

When the instance type specified by the InstanceType parameter does not belong to [Generation I instance families](/help/en/ecs/user-guide/retired-instance-types), the default value of this parameter is optimized.

optimized

InstanceNetworkType

string

No

The network type of the instance. Valid values:

-   classic: classic network
-   vpc: Virtual Private Cloud (VPC)

Default value: vpc.

vpc

InternetChargeType

string

No

The billing method for network usage. Valid values:

-   PayByBandwidth: pay-by-bandwidth
-   PayByTraffic: pay-by-traffic

Default value: PayByTraffic

PayByTraffic

InternetMaxBandwidthOut

integer

No

The maximum outbound public bandwidth. Unit: Mbit/s. Valid values: 0 to 100.

Default value: 0.

5

SystemDisk.Category

string

No

The category of the system disk. Valid values:

-   cloud: basic disk
-   cloud\_efficiency: ultra disk
-   cloud\_ssd: standard SSD
-   ephemeral\_ssd: local SSD
-   cloud\_essd: Enterprise SSD (ESSD)
-   cloud\_auto: ESSD AutoPL disk

Default value:

-   When InstanceType is set to a retired instance type and `IoOptimized` is set to `none`, the default value is `cloud`.
-   In other cases, the default value is `cloud_efficiency`.

**Note** If you want to query the price of a system disk, you must also specify `ImageId`.

cloud\_ssd

SystemDisk.Size

integer

No

The size of the system disk. Unit: GiB. Valid values:

-   Basic disk (cloud): 20 to 500.
    
-   ESSD (cloud\_essd): Valid values vary based on the SystemDisk.PerformanceLevel value.
    
    -   Valid values when SystemDisk.PerformanceLevel is set to PL0: 1 to 2048.
    -   Valid values when SystemDisk.PerformanceLevel is set to PL1: 20 to 2048.
    -   Valid values when SystemDisk.PerformanceLevel is set to PL2: 461 to 2048.
    -   Valid values when SystemDisk.PerformanceLevel is set to PL3: 1261 to 2048.
-   ESSD AutoPL disk (cloud\_auto): 1 to 2048.
    
-   Other disk categories: 20 to 2048.
    

Default value: 20 or the size of the image specified by ImageId, whichever is greater.

80

SystemDisk.PerformanceLevel

string

No

The performance level of the system disk when the disk is an ESSD. This parameter is valid only when `SystemDiskCategory` is set to cloud\_essd. Valid values:

PL0, PL1 (default), PL2, PL3.

PL1

DataDisk.1.Size

integer

No

The size of the data disk.

To improve scalability, we recommend that you specify `DataDisk.N.Size`.

2000

DataDisk.1.Category

string

No

The data disk category.

To improve scalability, we recommend that you specify `DataDisk.N.Category`.

Valid values:

-   cloud: basic disk.
-   cloud\_efficiency: ultra disk.
-   cloud\_ssd: standard SSD.
-   cloud\_auto: Enterprise SSD (ESSD) AutoPL disk.
-   cloud\_regional\_disk\_auto: Regional ESSD.
-   cloud\_essd: ESSD.
-   elastic\_ephemeral\_disk\_standard: standard elastic ephemeral disk.
-   cloud\_essd\_entry: ESSD Entry disk.
-   elastic\_ephemeral\_disk\_premium: premium elastic ephemeral disk.

cloud\_ssd

DataDisk.1.PerformanceLevel

string

No

The performance level of the data disk.

To improve scalability, we recommend that you specify `DataDisk.N.PerformanceLevel`.

PL1

DataDisk.2.Size

integer

No

The size of the data disk.

To improve scalability, we recommend that you specify `DataDisk.N.Size`.

200

DataDisk.2.Category

string

No

The data disk category.

To improve scalability, we recommend that you specify `DataDisk.N.Category`.

Valid values:

-   cloud: basic disk.
-   cloud\_efficiency: ultra disk.
-   cloud\_ssd: standard SSD.
-   cloud\_auto: ESSD AutoPL disk.
-   cloud\_regional\_disk\_auto: Regional ESSD.
-   cloud\_essd: ESSD.
-   elastic\_ephemeral\_disk\_standard: standard elastic ephemeral disk.
-   cloud\_essd\_entry: ESSD Entry disk.
-   elastic\_ephemeral\_disk\_premium: premium elastic ephemeral disk.

cloud\_ssd

DataDisk.2.PerformanceLevel

string

No

The performance level of the data disk.

To improve scalability, we recommend that you specify `DataDisk.N.PerformanceLevel`.

PL1

DataDisk.3.Size

integer

No

The size of the data disk.

To improve scalability, we recommend that you specify `DataDisk.N.Size`.

2000

DataDisk.3.Category

string

No

The data disk category.

To improve scalability, we recommend that you specify `DataDisk.N.Category`.

Valid values:

-   cloud: basic disk.
-   cloud\_efficiency: ultra disk.
-   cloud\_ssd: standard SSD.
-   cloud\_auto: ESSD AutoPL disk.
-   cloud\_regional\_disk\_auto: Regional ESSD.
-   cloud\_essd: ESSD.
-   elastic\_ephemeral\_disk\_standard: standard elastic ephemeral disk.
-   cloud\_essd\_entry: ESSD Entry disk.
-   elastic\_ephemeral\_disk\_premium: premium elastic ephemeral disk.

cloud\_ssd

DataDisk.3.PerformanceLevel

string

No

The performance level of the data disk.

To improve scalability, we recommend that you specify `DataDisk.N.PerformanceLevel`.

PL1

DataDisk.4.Size

integer

No

The size of the data disk.

To improve scalability, we recommend that you specify `DataDisk.N.Size`.

2000

DataDisk.4.Category

string

No

The data disk category.

To improve scalability, we recommend that you specify `DataDisk.N.Category`.

Valid values:

-   cloud: basic disk.
-   cloud\_efficiency: ultra disk.
-   cloud\_ssd: standard SSD.
-   cloud\_auto: ESSD AutoPL disk.
-   cloud\_regional\_disk\_auto: Regional ESSD.
-   cloud\_essd: ESSD.
-   elastic\_ephemeral\_disk\_standard: standard elastic ephemeral disk.
-   cloud\_essd\_entry: ESSD Entry disk.
-   elastic\_ephemeral\_disk\_premium: premium elastic ephemeral disk.

cloud\_ssd

DataDisk.4.PerformanceLevel

string

No

The performance level of the data disk.

To improve scalability, we recommend that you specify `DataDisk.N.PerformanceLevel`.

PL1

Period

integer

No

The billing cycle of the ECS instance. Valid values:

-   Valid values when PriceUnit is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, and 9.
-   Valid values when PriceUnit is set to Year: 1, 2, 3, 4, and 5.
-   Set the value to 1 when PriceUnit is set to Hour.

Default value: 1.

1

PriceUnit

string

No

The pricing unit of the ECS resource. Valid values:

-   Month
-   Year
-   Hour (default)

Year

Amount

integer

No

The number of ECS instances. You can specify this parameter when you want to query the prices of multiple instances that have specific specifications. Valid values: 1 to 1000.

Default value: 1.

1

OfferingType

string

No

The payment option of the reserved instance. Valid values:

-   No Upfront
-   Partial Upfront
-   All Upfront

All Upfront

InstanceAmount

integer

No

The total number of reserved instances for an instance type.

Valid values: 1 to 1000.

100

Scope

string

No

The scope of the reserved instance. Valid values:

-   Region: regional
-   Zone: zonal

Default value: Region.

Zone

Platform

string

No

The operating system of the image that is used by the instance. Valid values:

-   Windows: Windows Server operating system
-   Linux: Linux and UNIX-like operating system

Linux

Capacity

integer

No

The storage capacity. Unit: GiB.

1024

AssuranceTimes

string

No

The total number of times that the elasticity assurance can be applied. Set the value to Unlimited. This value indicates that the elasticity assurance can be applied an unlimited number of times within its effective period.

Default value: Unlimited.

Unlimited

InstanceCpuCoreCount

integer

No

The total number of vCPUs supported by the elasticity assurance. When you call this API operation, the system calculates the number of instances that an elasticity assurance must support based on the specified value of InstanceType. The calculated value is rounded up to the nearest integer.

**Note** When you call this API operation to query the price of an elasticity assurance, you can only specify either InstanceCoreCpuCount or InstanceAmount.

1024

Isp

string

No

The Internet service provider (ISP). Valid values:

-   cmcc: China Mobile
-   telecom: China Telecom
-   unicom: China Unicom
-   multiCarrier: multi-line ISP

cmcc

InstanceTypeList

array

No

The instance types. You can select only a single instance type when you configure an elasticity assurance in unlimited mode.

string

No

The information about the instance type. You can select only a single instance type when you configure an elasticity assurance in unlimited mode.

ecs.c6.xlarge

SpotStrategy

string

No

The bidding policy for the pay-as-you-go instance. Valid values:

-   NoSpot: The instance is a regular pay-as-you-go instance.
-   SpotWithPriceLimit: The instance is created as a spot instance that has a user-defined maximum hourly price.
-   SpotAsPriceGo: The instance is created as a spot instance whose bid price is based on the market price at the time of purchase. The market price can be up to the pay-as-you-go price.

Default value: NoSpot.

**Note** This parameter takes effect only when `PriceUnit` is set to Hour and `Period` is set to 1. The default value of `PriceUnit` is `Hour` and the default value of `Period` is `1`. Therefore, you do not need to set `PriceUnit` or `Period` when you set SpotStrategy.

NoSpot

SpotDuration

integer

No

The protection period of the spot instance. Unit: hours. Default value: 1. Valid values:

-   1: After a spot instance is created, Alibaba Cloud ensures that the instance is not automatically released within 1 hour. After the 1-hour protection period ends, the system compares the bid price with the market price and checks the resource inventory to determine whether to retain or release the instance.
-   0: After a spot instance is created, Alibaba Cloud does not ensure that the instance runs for 1 hour. The system compares the bid price with the market price and checks the resource inventory to determine whether to retain or release the instance.

Alibaba Cloud sends an ECS system event to notify you 5 minutes before the instance is released. Spot instances are billed by second. We recommend that you specify a protection period based on your business requirements.

**Note** This parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit or SpotAsPriceGo.

1

ZoneId

string

No

The zone ID.

**Note** Prices of spot instances vary based on zones. When you query the price of a spot instance, specify ZoneId.

cn-hagzhou-i

DataDisk

array<object>

No

The information about data disks.

object

No

The information about data disk N.

Category

string

No

The category of data disk N. Valid values:

-   cloud: basic disk.
-   cloud\_efficiency: ultra disk.
-   cloud\_ssd: standard SSD.
-   ephemeral\_ssd: local SSD.
-   cloud\_essd: ESSD.
-   cloud\_auto: ESSD AutoPL disk.

Valid values of N: 1 to 16.

cloud\_ssd

Size

long

No

The size of data disk N. Unit: GiB. Valid values:

-   Valid values if DataDisk.N.Category is set to cloud: 5 to 2000.
    
-   Valid values if DataDisk.N.Category is set to cloud\_efficiency: 20 to 32768.
    
-   Valid values if DataDisk.N.Category is set to cloud\_ssd: 20 to 32768.
    
-   Valid values if DataDisk.N.Category is set to cloud\_auto: 1 to 32768.
    
-   Valid values if DataDisk.N.Category is set to cloud\_essd: vary based on the `DataDisk.N.PerformanceLevel` value.
    
    -   Valid values if DataDisk.N.PerformanceLevel is set to PL0: 1 to 32768.
    -   Valid values if DataDisk.N.PerformanceLevel is set to PL1: 20 to 32768.
    -   Valid values if DataDisk.N.PerformanceLevel is set to PL2: 461 to 32768.
    -   Valid values if DataDisk.N.PerformanceLevel is set to PL3: 1261 to 32768.
-   Valid values if DataDisk.N.Category is set to ephemeral\_ssd: 5 to 800.
    

Valid values of N: 1 to 16.

2000

PerformanceLevel

string

No

The performance level of data disk N when the disk is an ESSD. This parameter takes effect only when `DataDisk.N.Category` is set to cloud\_essd. Valid values:

-   PL0
-   PL1 (default)
-   PL2
-   PL3

Valid values of N: 1 to 16.

PL1

ProvisionedIops

long

No

The provisioned read/write IOPS of the ESSD AutoPL disk to use as data disk N. Valid values: 0 to min{50,000, 1,000 × Capacity - Baseline IOPS}.

Baseline IOPS = min{1,800 + 50 × Capacity, 50,000}.

**Note** This parameter is available only if you set `DataDisk.N.Category` to `cloud_auto`. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

40000

SchedulerOptions.DedicatedHostId

string

No

This parameter takes effect only when ResourceType is set to instance.

The ID of the dedicated host. You can call the [DescribeDedicatedHosts](/help/en/dedicated-host/developer-reference/api-describededicatedhosts) operation to query the dedicated host list.

dh-bp67acfmxazb4p\*\*\*\*

StartTime

string

No

The time when the time-segmented assurance of the elasticity assurance takes effect. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. For more information, see [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format).

2020-10-30T06:32:00Z

RecurrenceRules

array<object>

No

The assurance schedules of the time-segmented elasticity assurance.

**Note** Time-segmented elasticity assurances are available only in specific regions and to specific users. To use time-segmented elasticity assurances, [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket-intl).

object

No

The assurance schedule of the time-segmented elasticity assurance.

**Note**

-   When you modify an assurance schedule, **make sure that the validity period of the elasticity assurance remains unchanged**. For information about modification examples, see [ModifyElasticRule](/help/en/ecs/user-guide/time-segmented-elasticity-assurance) .
    
-   The modified assurance schedule takes effect the next day after the modification.
    

RecurrenceType

string

No

The type of the assurance schedule. Valid values:

-   Daily
-   Weekly
-   Monthly

**Note** If you specify this parameter, you must specify `RecurrenceType` and `RecurrenceValue`.

Daily

RecurrenceValue

string

No

The days of the week or month on which the capacity reservation of the time-segmented elasticity assurance takes effect or the interval, in number of days, at which the capacity reservation takes effect.

-   If you set `RecurrenceType` to `Daily`, you can specify only one value. Valid values: 1 to 31. The value specifies that the capacity reservation takes effect every few days.
-   If you set `RecurrenceType` to `Weekly`, you can specify multiple values. Separate the values with commas (,). Valid values: 0, 1, 2, 3, 4, 5, and 6, which specify Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, and Saturday, respectively. Example: `1,2`, which specifies that the capacity reservation takes effect on Monday and Tuesday.
-   If you set `RecurrenceType` to `Monthly`, you can specify two values in the `A-B` format. Valid values of A and B: 1 to 31. B must be greater than or equal to A. Example: `1-5`, which specifies that the capacity reservation takes effect every day from the first day up to the fifth day of each month.

**Note** If you specify this parameter, you must specify `RecurrenceType` and `RecurrenceValue`.

5

StartHour

integer

No

The start time of the assurance period for the capacity reservation of the time-segmented elasticity assurance. Specify an on-the-hour point in time.

**Note** You must specify both StartHour and EndHour. The EndHour value must be at least 4 hours later than the StartHour value.

4

EndHour

integer

No

The end time of the assurance period for the capacity reservation of the time-segmented elasticity assurance. Specify an on-the-hour point in time.

10

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

PriceInfo

object

The information about the prices and promotion rules.

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

The ID of the pricing rule.

587

Price

object

The price.

OriginalPrice

float

The original price.

4368

ReservedInstanceHourPrice

float

The hourly price of the reserved instance for which the No Upfront or Partial Upfront payment option is used.

1

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

The transaction price of the order. The transaction price is equal to the original price minus the discount.

3712.8

DetailInfos

array<object>

The information about the price.

**Note** This parameter is returned only when ResourceType is set to instance.

ResourcePriceModel

object

Resource

string

The resource name. Valid values:

-   InstanceType
-   bandwidth
-   image
-   SystemDisk
-   DataDisk

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

Details about the pricing rules.

Rule

object

Description

string

The description of the pricing rule.

Receive a 15% discount on a 1-year subscription

RuleId

long

The ID of the pricing rule.

587

RelatedPrice

object

The related price.

MarketplaceImagePrice

object

The Alibaba Cloud Marketplace image price.

Currency

string

The currency unit.

China site (aliyun.com): CNY

International site (alibabacloud.com): USD

CNY

OriginalPrice

float

The original price.

100

DiscountPrice

float

The discount.

0

TradePrice

float

The transaction price, which is equal to the original price minus the discount.

100

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "PriceInfo": {
    "Rules": {
      "Rule": [
        {
          "Description": "Receive a 15% discount on a 1-year subscription\n",
          "RuleId": 587
        }
      ]
    },
    "Price": {
      "OriginalPrice": 4368,
      "ReservedInstanceHourPrice": 1,
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
                  "Description": "Receive a 15% discount on a 1-year subscription\n",
                  "RuleId": 587
                }
              ]
            }
          }
        ]
      }
    },
    "RelatedPrice": {
      "MarketplaceImagePrice": {
        "Currency": "CNY",
        "OriginalPrice": 100,
        "DiscountPrice": 0,
        "TradePrice": 100
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

InvalidParameter.RecurrenceRules

The specified parameter RecurrenceRules is invalid.

The specified parameter "RecurrenceRules" is invalid.

400

InvalidRecurrenceRules.CountLimitExceeded

The count of RecurrenceRules exceeds the limit.

The number of parameter RecurrenceRules exceeds the limit value.

400

InvalidRecurrenceRulesStartHourEndHour.TooShort

The recurrence hour between RecurrenceRules.StartHour and RecurrenceRules.EndHour is too short.

The effective time between parameter RecurrenceRules.StartHour and RecurrenceRules.EndHour is less than the minimum requirement.

400

InvalidParameter.RecurrenceRulesStartHourEndHour

The specified parameter RecurrenceRules.StartHour or RecurrenceRules.EndHour is invalid.

The parameter RecurrenceRules.StartHour or RecurrenceRules.EndHour specified for the RecurrenceRules does not conform to the specification.

400

InvalidParameter.RecurrenceRulesRecurrenceValueMonthly

The specified parameter RecurrenceRules.RecurrenceValue for Monthly is invalid.

The parameter RecurrenceRules.RecurrenceValue specified for the RecurrenceRules.RecurrenceType = Monthly does not conform to the specification.

400

InvalidParameter.RecurrenceRulesRecurrenceValueWeekly

The specified parameter RecurrenceRules.RecurrenceValue for Weekly is invalid.

The parameter RecurrenceRules.RecurrenceType specified for RecurrenceRules.RecurrenceValue = Weekly is out of specification.

400

InvalidParameter.RecurrenceRulesRecurrenceValueDaily

The specified parameter RecurrenceRules.RecurrenceValue for Daily is invalid.

The parameter RecurrenceRules.RecurrenceType specified for RecurrenceRules.RecurrenceValue = Daily does not conform to the specification.

400

InvalidParameter.RecurrenceRulesRecurrenceType

The specified parameter RecurrenceRules.RecurrenceType is invalid.

The specified parameter RecurrenceRules.RecurrenceType does not conform to specification.

400

InvalidStartTime.NotSupported

The StartTime of TimeDivisionElasticityAssurance cannot between any of active time ranges.

The specified effective time of the time-sharing flexible guarantee cannot be within the effective period.

400

InvalidSpotAuthorized

The specified Spot param is unauthorized.

You are not authorized to set the SpotDuration parameter.

400

Invalid.ZoneId

The specified ZoneId is not valid.

The specified ZoneId is invalid.

400

InvalidInstanceType.ValueUnauthorized

The specified InstanceType is not authorized.

You are not authorized to use the specified instance type.

400

InvalidInstanceType.ValueNotSupported

The specified InstanceType does not exist or beyond the permitted range.

The specified instance type does not exist or you are not authorized to manage instances of this instance type.

400

InvalidInternetChargeType.ValueNotSupported

The specified InternetChargeType is not valid.

The specified InternetChargeType parameter is invalid.

400

InvalidInternetMaxBandwidthOut.ValueNotSupported

The specified parameter "InternetMaxBandwidthOut" is not valid.

\-

400

InvalidSystemDiskCategory.ValueNotSupported

The specified parameter "SystemDisk.Category" is not valid.

The specified parameter system disk specification is invalid.

400

InvalidDataDiskSize.ValueNotSupported

The specified DataDisk.n.Size beyond the permitted range, or the capacity of snapshot exceeds the size limit of the specified disk category.

The specified DataDisk.N.Size parameter is invalid or the snapshot size exceeds the maximum capacity allowed for the specified disk category.

400

InvalidDataDiskCategory.ValueNotSupported

The specified parameter "DataDisk.n.Category" is not valid.

\-

400

InvalidParameter.Conflict

The specified image does not support the specified instance type.

The specified image cannot be used for instances of the specified instance type.

400

InvalidNetworkType.Mismatch

Specified parameter "InternetChargeType" conflict with instance network type.

\-

400

InvalidDiskCategory.Mismatch

The specified disk categories' combination is not supported.

\-

400

InvalidIoOptimizedValue.ValueNotSupported

IoOptimized value not supported.

The specified IoOptimized value is not supported.

400

InvalidPeriod

The specified period is not valid.

The specified period is invalid.

400

InvalidDataDiskCategory.ValueNotSupported

The specified parameter " DataDisk.n.Category " is not valid.

\-

400

InvalidSystemDiskCategory.ValueNotSupported

The specified parameter " SystemDisk.Category " is not valid.

\-

400

InstanceDiskCategoryLimitExceed

The specified DataDisk.n.Size beyond the permitted range, or the capacity of snapshot exceeds the size limit of the specified disk category.

The specified DataDisk.N.Size parameter is invalid or the snapshot size exceeds the maximum capacity allowed for the specified disk category.

400

InvalidInternetMaxBandwidthOut.ValueNotSupported

The specified vm bandwidth is not valid.

The specified bandwidth value of the instance is invalid.

400

InvalidSystemDiskCategory.ValueNotSupported

The specified parameter SystemDisk.Category is not valid.

\-

400

InvalidInternetMaxBandwidthOut.ValueNotSupported

The specified parameter Bandwidth is not valid.

The specified bandwidth value is invalid.

400

InstanceDiskNumber.LimitExceed

The total number of specified disk in an instance exceeds.

The number of disks on an instance exceeds the upper limit.

400

InvalidDiskCategory.ValueNotSupported

The specified parameter "DiskCategory" is not valid.

The specified cloud disk type DiskCategory is invalid.

400

InvalidInternetMaxBandwidthOut.ValueNotSupported

%s

The specified InternetMaxBandwidthOut parameter is invalid.

400

InvalidParameter.Conflict

%s

The specified parameter is invalid. Check whether parameter conflicts exist. %s is a variable. An error message is dynamically returned based on call conditions.

400

InvalidInternetChargeType.ValueNotSupported

%s

The specified InternetChargeType parameter is invalid.

400

InvalidDataDiskSize.ValueNotSupported

%s

\-

400

InvalidSystemDiskCategory.ValueNotSupported

The specified parameter "SystemDisk.Size" is not valid.

\-

400

InvalidSystemDiskSize.LessThanImageSize

The specified parameter "SystemDisk.Size" is less than the image size.

\-

400

InvalidDataDiskCategory.ValueNotSupported

The specified parameter "DataDisk.Category" is not valid.

The specified parameter DataDisk.Category error.

400

InvalidDataDiskSize.ValueNotSupported

The specified parameter "DataDisk.Size" is not valid.

\-

400

Throttling

Request was denied due to request throttling.

\-

400

Throttling.User

Request was denied due to user flow control.

\-

400

PriceNotFound

The price of your queried resource is not available now, please try other resources.

The price of the specified resource does not exist. Modify the parameter value and try again later.

400

InvalidResourceType.ValueNotSupported

The specified parameter ResourceType is not valid.

The specified resource type is not supported.

400

InvalidPriceUnit.ValueNotSupported

The specified parameter PriceUnit is not valid.

The specified PriceUnit parameter is invalid.

400

InvalidInternetMaxBandwidthOut.ValueNotSupported

The specified parameter InternetMaxBandwidthOut is not valid.

The specified InternetMaxBandwidthOut parameter is invalid.

400

IncorrectImageStatus

The specified image is an Alibaba Cloud Marketplace image. The sale of this image has ended. For more information, contact the image service provider.

The specified image is an Alibaba Cloud Marketplace image that is no longer sold. For more information about the image, contact the image provider.

400

InvalidInstanceType.ValueUnauthorized

The specified instanceType is not authorized.

You are not authorized to use the specified instance type.

400

OperationDenied

The current operation is not supported due to unfinished Temporary Upgrade.

\-

400

InvalidPerformanceLevel.Malformed

The specified parameter DataDisk.n.PerformanceLevel is not valid.

\-

400

InvalidCapacity.ValueNotSupported

The specified parameter Capacity is not valid.

\-

400

InvalidActivity.NotSupported

The specified discount activity is not supported.

\-

400

InvalidEncrypted.NotMatchEncryptAlgorithm

The specified parameter Encrypted must be true when EncryptAlgorithm is not empty.

\-

400

InvalidEncrypted.NotMatchKmsKeyId

The specified parameter Encrypted must be true when KmsKeyId is not empty.

\-

400

InvalidEncrypted.NotMatchSnapshot

The specified parameter Encrypted is different from the Encrypted of the snapshot.

When creating a disk from an encrypted snapshot, you must set the Encrypted parameter to true.

400

InvalidEncryptAlgorithm.NotMatchSnapshot

The specified parameter EncryptAlgorithm is different from the encrypt algorithm of the snapshot.

\-

400

InvalidKmsKeyId.NotMatchSnapshot

The specified parameter KmsKeyId is different from the KmsKeyId of the snapshot.

\-

400

InvalidEncryptAlgorithm

The specified parameter EncryptAlgorithm is not valid.

\-

400

InvalidAssuranceTimes.NotSupported

The value of AssuranceTimes is not supported.

The specified AssuranceTimes parameter is invalid.

400

InvalidParameter.Platform

The specified parameter Platform is invalid.

\-

400

InvalidOperation.InstanceRenewWithDowngradeInPlan

The operation is denied due to the specified instance has renew with downgrade record in plan.

There are renewal downgrade orders that have not yet taken effect. This operation is not allowed before the order takes effect.

400

OperationDenied.TestAccountRetricted

Test-account for testing has been prohibited from creating instance in this region. Please contact 400181.

Test accounts are not allowed to create instances in the local region. Please contact Cost and Resource Center @ Gao Chong (400181)

400

UnsupportedIspNetworkChargeType

The network charge type is not supported when specifying ISP.

The network charge type is not supported when specifying ISP.

400

EncryptedOption.Conflict

Disk encryption attributes conflict.

Disk encryption attributes conflict.

400

InvalidInstanceType.ValueNotSupported

The specified InstanceType beyond the permitted range.

\-

400

InvalidSystemDiskSize.ValueNotSupported

The specified parameter SystemDisk.Size is invalid

The specified SystemDisk.Size parameter is invalid.

400

UnsupportedIspChargeType

The specified Isp does not support the charge type.

The specified Isp does not support the charge type.

400

InvalidInstanceType.NotSupported

The specified instanceType is not supported by the image architecture.

The specified image schema does not support this instance type.

403

ImageNotSubscribed

The specified image has not be subscribed.

You have not subscribed to the specified image in Alibaba Cloud Marketplace.

403

OperationDenied

The specified Image is disabled or is deleted.

The specified image is disabled or deleted.

403

InvalidSystemDiskCategory.ValueUnauthorized

The disk category is not authorized.

You are not authorized to use the specified disk category.

403

InstanceDiskCategoryLimitExceed

The total size of specified disk category in an instance exceeds.

The total size of disks of the specified category exceeds the maximum capacity allowed for an instance.

403

ImageRemovedInMarket

The specified market image is not available, Or the specified user defined image includes product code because it is based on an image subscribed from marketplace, and that image in marketplace includeing exact the same product code has been removed.

The specified Alibaba Cloud Marketplace image is unavailable, or the specified custom image contains the product code of the Alibaba Cloud Marketplace image from which the custom image is derived and the Alibaba Cloud Marketplace image was removed from Alibaba Cloud Marketplace.

403

QuotaExceed.PortableCloudDisk

The quota of portable cloud disk exceeds.

The maximum number of removable disks has been reached.

403

Forbbiden

User not authorized to operate on the specified resource.

You are not authorized to operate the specified resource.

403

InstanceDiskNumLimitExceed

The number of specified disk in an instance exceeds.

The number of specified disks exceeds the upper limit for an instance.

403

IoOptimized.NotSupported

The specified image is not support IoOptimized Instance.

The specified image does not support I/O optimized instances.

403

ImageNotSupportInstanceType

The specified image don't support the InstanceType instance.

The specified image does not support the selected instance type.

403

InvalidDiskSize.TooSmall

Specified disk size is less than the size of snapshot.

The specified disk size is smaller than the snapshot size.

403

OperationDenied

The type of the disk does not support the operation.

The disk category does not support the specified operation.

403

InvalidDiskCategory.Mismatch

The specified disk categories combination is not supported.

The combination of specified disk categories is not supported.

403

InvalidDiskCategory.NotSupported

The specified disk category is not support the specified instance type.

The specified disk category does not support the instance type.

403

InvalidDiskCategory.NotSupported

The upgrade operation of instance does not support this category of disk.

\-

403

QuotaExceed.BuyImage

The specified image is from the image market, you have not bought it or your quota has been exceeded.

\-

403

InvalidParameter.ResourceOwnerAccount

ResourceOwnerAccount is Invalid.

The specified ResourceOwnerAccount parameter is invalid.

403

RegionUnauthorized

There is no authority to create instance in the specified region.

You are not authorized to create instances in the specified region.

403

OperationDenied

The resource is out of usage.

Insufficient resource inventory

403

OperationDenied

The specified parameter InstanceNetworkType is not authorized.

You are not authorized to use the specified network type.

403

InvalidAmount.Malformed

The specified parameter Amount is not valid.

The specified Amount parameter is invalid.

403

InvalidDiskSize.TooSmall

Specified system disk size is less than the size of image.

\-

403

InvalidChargeType.MarketImage

The specified chargeType of marketplace image is invalid.

\-

403

InvalidDiskIds.NotFound

Some of the specified disks do not exist.

The specified disk does not exist.

403

InvalidDiskCategory.NotSupported

The specified disk category is not supported.

The specified disk category does not support this operation.

403

PrePaidInstance.Expired

The prePaid instance has expired.

\-

403

OperationDenied.PerformanceLevelNotMatch

The specified DataDisk.n.PerformanceLevel and DataDisk.n.Size do not match.

\-

403

InvalidAction.Unauthorized

The specified action is not valid.

The specified operation is invalid.

403

InvalidRegionId.NotSupportEncryptAlgorithm

The current region does not support creating encrypted disks with EncryptAlgorithm.

\-

403

InvalidInstanceType.NotSupportDiskCategory

The instanceType of the specified instance does not support this disk category.

The instance type does not support the current disk category. Try another instance type. For information about the disk categories supported by instance types, see the instance family documentation.

403

InvalidOperation.PublicIpAddressNoStock

The public IP address for the specified Region or ChargeType of the instance is out of stock. Please try another Region or ChargeType.

Under the conditions of the specified region or payment type, the public IP address inventory of the instance is insufficient. Please try another region or payment type.

403

UnsupportedIspRegion

The specified region does not support Isp.

The specified region does not support Isp

403

InvalidIspBandwidthOut

The specified parameter InternetMaxBandwidthOut should be larger than 0 when specifying parameter Isp.

The specified parameter InternetMaxBandwidthOut should be larger than 0 when specifying parameter Isp.

403

InstanceType.Offline

The specified InstanceType has been offline

The specified instance type is retired. Select another instance type.

403

InvalidIspUID

The current account does not have permission to specify the Isp parameter.

The current account does not have permission to specify the Isp parameter.

403

UnsupportedIspClassicNetwork

The Isp parameter is not supported in the classic network.

The Isp parameter is not supported in the classic network.

403

InvalidIspType.ValueNotSupported

The specified parameter Isp is invalid.

The specified parameter Isp is invalid

403

InvalidSystemDiskCategory.ValueNotSupported

The specified parameter SystemDisk.Category is not valid.

The specified SystemDisk.Category value is not supported.

403

InvalidDataDiskCategory.ValueNotSupported

The specified Category of Data Disk is not valid.

The specified data disk type is not supported.

403

RegionUnauthorized

You are not authorized to perform the operation in the specified region.

You are not authorized to perform the operation in the specified region.

404

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId provided does not exist

404

InvalidImageId.NotFound

The specified ImageId does not exist.

The specified image does not exist in this account. Check whether the image ID is correct.

404

IoOptimized.NotSupported

The specified instancetype is not support IoOptimized instance.

\-

404

InvalidInstanceChargeType.NotFound

The InstanceChargeType does not exist in our records.

The specified instance billing method does not exist.

404

DependencyViolation.IoOptimized

The specified instancetype must be IoOptimized instance.

The specified instance type must be I/O optimized. Check your instance type and try again.

404

InvalidSystemDiskSize.LessThanImageSize

The specified parameter SystemDisk.Size is less than the image size.

The specified system disk size is smaller than the image size.

404

InvalidSystemDiskSize.LessThanMinSize

The specified parameter SystemDisk.Size is less than the minimum size.

The specified SystemDisk.Size value is smaller than the lower limit.

404

InvalidSystemDiskSize.MoreThanMaxSize

The specified parameter SystemDisk.Size is more than the maximum size.

\-

404

InvalidSystemDiskSize.ValueNotSupported

The specified parameter SystemDisk.Size is invalid.

The specified SystemDisk.Size parameter is invalid.

404

InvalidInstanceType.Missing

The InstanceType parameter that is mandatory for processing the request is not provided.

The InstanceType parameter is required.

404

InvalidNetworkType.ValueNotSupported

The specified parameter NetworkType is not valid.

The specified NetworkType parameter is invalid.

404

InvalidDiskCategory.Missing

The DataDisk.1.Category parameter that is mandatory for processing the request is not provided.

The mandatory parameter DataDiskCategory is not provided.

404

Invalid.InstanceId.NotFound

The Instance provided does not exist.

\-

404

InvalidMarketImage.NotFound

The specified marketplace image does not exist, please change the imageId and try again.

The specified Alibaba Cloud Marketplace image does not exist. Modify the ImageId parameter and try again.

404

InvalidDiskIds.NotPortable

The specified DiskId is not portable.

The specified disk is not removable.

404

InvalidSystemDisk.NotFound

The specified system disk does not exist.

The specified system disk does not exist.

404

InvalidResourceGroup.NotFound

The ResourceGroup provided does not exist in our records.

The specified resource group does not exist.

404

InvalidDedicatedHostType.Missing

The dedicatedHostType parameter that is mandatory for processing the request is not provided.

\-

404

InvalidDedicatedHostId.NotFound

The specified SchedulerOptions.DedicatedHostId does not exist.

\-

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-11-24

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribePrice?updateTime=2025-11-24#workbench-doc-change-demo)

2025-02-19

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribePrice?updateTime=2025-02-19#workbench-doc-change-demo)

2025-01-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribePrice?updateTime=2025-01-08#workbench-doc-change-demo)

2024-12-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribePrice?updateTime=2024-12-26#workbench-doc-change-demo)

2024-12-19

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribePrice?updateTime=2024-12-19#workbench-doc-change-demo)

2024-06-14

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribePrice?updateTime=2024-06-14#workbench-doc-change-demo)

2024-01-30

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribePrice?updateTime=2024-01-30#workbench-doc-change-demo)

2023-10-18

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribePrice?updateTime=2023-10-18#workbench-doc-change-demo)

2023-05-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribePrice?updateTime=2023-05-08#workbench-doc-change-demo)

2023-03-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribePrice?updateTime=2023-03-27#workbench-doc-change-demo)
