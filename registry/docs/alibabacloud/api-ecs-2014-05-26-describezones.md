Queries Alibaba Cloud regions. You can specify parameters, such as InstanceChargeType and ResourceType, in the request.

## Operation description

## [](#usage-notes)[](#)Usage notes

When you call this operation, only a list of zones and some resource information of each zone are returned. If you want to query instance types and disk categories that are available for purchase in a specific zone, we recommend that you call the [DescribeAvailableResource](/help/en/ecs/api-describeavailableresource) operation.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeZones)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeZones)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

Yes

The ID of the region. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

Verbose

boolean

No

Specifies whether to display detailed information.

-   true: displays detailed information.
-   false: does not display detailed information.

Default value: true.

false

InstanceChargeType

string

No

The billing method of resources. For more information, see [Billing overview](/help/en/ecs/billing-overview). Valid values:

-   Prepaid: subscription
-   PostPaid: pay-as-you-go

Default value: PostPaid.

PostPaid

SpotStrategy

string

No

The bidding policy for the pay-as-you-go instance. You can specify this parameter when you set `InstanceChargeType` to PostPaid. For more information, see [Spot instances](/help/en/ecs/user-guide/what-is-a-spot-instance). Valid values:

-   NoSpot: The instances are regular pay-as-you-go instances.
-   SpotWithPriceLimit: The instance is a spot instance that has a user-defined maximum hourly price.
-   SpotAsPriceGo: The instance is a spot instance for which the market price is automatically used as the bid price. The market price can be up to the pay-as-you-go price.

Default value: NoSpot.

NoSpot

AcceptLanguage

string

No

The natural language that is used to filter responses. For more information, see [RFC 7231](https://tools.ietf.org/html/rfc7231). Valid values:

-   zh-CN: Simplified Chinese
-   zh\_TW: Traditional Chinese
-   en-US: English
-   ja: Japanese
-   fr: French
-   de: German
-   ko: Korean

Default value: zh-CN.

zh-CN

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

Zones

array<object>

Details about the zones and their supported resources.

Zone

object

ZoneId

string

The ID of the zone.

cn-hangzhou-g

ZoneType

string

The type of the zone. Valid values:

-   AvailabilityZone: zone for the Alibaba Cloud public cloud
-   CloudBoxZone: zone for CloudBox

AvailabilityZone

LocalName

string

The name of the zone in the local language.

Hangzhou Zone G

AvailableResources

array<object>

Details about the resources that can be created in the zone.

ResourcesInfo

object

IoOptimized

boolean

Indicates whether the instance is I/O optimized.

true

SystemDiskCategories

array

The categories of system disks that can be created.

supportedSystemDiskCategory

string

The category of system disks that can be created. Valid values:

-   cloud: basic disk
-   cloud\_efficiency: ultra disk
-   cloud\_ssd: standard SSD
-   cloud\_essd: Enterprise SSD (ESSD)

cloud\_essd

InstanceGenerations

array

The supported generations of instance families.

supportedInstanceGeneration

string

The supported generation of instance families.

ecs-6

DataDiskCategories

array

The categories of data disks that can be created.

supportedDataDiskCategory

string

The category of data disks that can be created. Valid values:

-   cloud: basic disk
-   cloud\_efficiency: ultra disk
-   cloud\_ssd: standard SSD
-   cloud\_essd: ESSD
-   ephemeral\_ssd: local SSD

cloud\_essd

InstanceTypes

array

The supported instance types.

supportedInstanceType

string

The instance type of I/O optimized instances of different network types that can be created in the zone.

ecs.g5.large

InstanceTypeFamilies

array

The supported instance families.

supportedInstanceTypeFamily

string

The supported instance family.

ecs.r7t

NetworkTypes

array

The supported network types.

supportedNetworkCategory

string

The supported network type. Valid values:

-   VPC: Virtual Private Cloud (VPC)
-   Classic: classic network

vpc

AvailableResourceCreation

array

The types of resources that can be created. Valid values:

-   VSwitch: vSwitch
-   IoOptimized: I/O optimized instance
-   Instance: instance
-   DedicatedHost: dedicated host
-   disk: cloud disk

ResourceTypes

string

The type of resources that can be created. Valid values:

-   VSwitch: vSwitch
-   IoOptimized: I/O optimized instance
-   Instance: instance
-   DedicatedHost: dedicated host
-   disk: cloud disk

DedicatedHost

DedicatedHostGenerations

array

The supported generations of dedicated hosts.

DedicatedHostGeneration

string

The supported generation of dedicated hosts.

ddh-6

AvailableInstanceTypes

array

The supported instance types.

InstanceTypes

string

The supported instance type.

ecs.g6.xlarge

AvailableDiskCategories

array

The categories of cloud disks that can be created. Valid values:

-   cloud: basic disk
-   cloud\_ssd: standard SSD
-   cloud\_efficiency: ultra disk
-   cloud\_essd: ESSD

DiskCategories

string

The category of cloud disks that can be created. Valid values:

-   cloud: basic disk.
-   cloud\_ssd: standard SSD
-   cloud\_efficiency: ultra disk
-   cloud\_essd: ESSD

cloud

AvailableDedicatedHostTypes

array

The supported dedicated host types.

DedicatedHostType

string

The supported dedicated host type.

ddh.g6

AvailableVolumeCategories

array

The supported Shared Block Storage device categories.

VolumeCategories

string

The supported Shared Block Storage device category.

san\_efficiency

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "Zones": {
    "Zone": [
      {
        "ZoneId": "cn-hangzhou-g",
        "ZoneType": "AvailabilityZone",
        "LocalName": "Hangzhou Zone G\n",
        "AvailableResources": {
          "ResourcesInfo": [
            {
              "IoOptimized": true,
              "SystemDiskCategories": {
                "supportedSystemDiskCategory": [
                  "cloud_essd"
                ]
              },
              "InstanceGenerations": {
                "supportedInstanceGeneration": [
                  "ecs-6"
                ]
              },
              "DataDiskCategories": {
                "supportedDataDiskCategory": [
                  "cloud_essd"
                ]
              },
              "InstanceTypes": {
                "supportedInstanceType": [
                  "ecs.g5.large"
                ]
              },
              "InstanceTypeFamilies": {
                "supportedInstanceTypeFamily": [
                  "ecs.r7t"
                ]
              },
              "NetworkTypes": {
                "supportedNetworkCategory": [
                  "vpc"
                ]
              }
            }
          ]
        },
        "AvailableResourceCreation": {
          "ResourceTypes": [
            "DedicatedHost"
          ]
        },
        "DedicatedHostGenerations": {
          "DedicatedHostGeneration": [
            "ddh-6"
          ]
        },
        "AvailableInstanceTypes": {
          "InstanceTypes": [
            "ecs.g6.xlarge"
          ]
        },
        "AvailableDiskCategories": {
          "DiskCategories": [
            "cloud"
          ]
        },
        "AvailableDedicatedHostTypes": {
          "DedicatedHostType": [
            "ddh.g6"
          ]
        },
        "AvailableVolumeCategories": {
          "VolumeCategories": [
            "san_efficiency"
          ]
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

InvalidSpotStrategy

The specified SpotStrategy is not valid.

The specified SpotStrategy parameter is invalid.

404

InvalidRegionId.NotFound

The specified RegionId does not exist.

The specified region ID does not exist.

404

InvalidRegion.NotFound

The specified parameter RegionId is not valid.

The specified RegionId parameter is invalid.

404

InvalidInstanceChargeType.NotFound

The InstanceChargeType does not exist in our records.

The specified instance billing method does not exist.

404

InvalidAcceptLanguage.NotFound

Only Chinese (zh-CN), English (en-US), and Japanese (ja) are allowed.

Your selected language is invalid. Only Chinese, English, and Japanese are supported.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-11-07

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeZones?updateTime=2025-11-07#workbench-doc-change-demo)

2025-02-27

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeZones?updateTime=2025-02-27#workbench-doc-change-demo)
