Queries resources in a zone. You can query the resources available in a zone before you create Elastic Compute Service (ECS) instances by calling the RunInstances operation or before you change instance types by calling the ModifyInstanceSpec operation.

## Operation description

The value of `DestinationResource` determines whether you need to specify additional parameters. When you select a value in the following chain for DestinationResource, the more to the right the selected value is ordered, the more parameters you must specify.

-   Sequence: `Zone > IoOptimized > InstanceType = Network = ddh > SystemDisk > DataDisk`
    
-   Examples:
    
    -   If you set `DestinationResource` to `DataDisk`, take note of the following items:
        
        -   If you set `ResourceType` to `disk` to query the categories of data disks regardless of whether the disks are attached to ECS instances, you can leave `InstanceType` empty.
        -   If you set `ResourceType` to `instance` to query the categories of data disks that are attached to ECS instances, you must specify `InstanceType` and `DataDiskCategory` due to instance type-specific limits on data disks.
    -   If you set `DestinationResource` to `SystemDisk` and `ResourceType` to `instance`, you must specify `InstanceType` due to instance type-specific limits on system disks.
        
    -   If you set `DestinationResource` to `InstanceType`, we recommend that you specify `IoOptimized` and `InstanceType`.
        
    -   To query the ecs.g5.large instance type in all zones of the China (Hangzhou) region, set `RegionId to cn-hangzhou, DestinationResource to InstanceType, IoOptimized to optimized, and InstanceType to ecs.g5.large`.
        
    -   To query the zones in which the ecs.g5.large instance type is available in the China (Hangzhou) region, set `RegionId to cn-hangzhou, DestinationResource to Zone, IoOptimized to optimized, and InstanceType to ecs.g5.large`.
        

**To query the zones in which the ecs.g5.large instance type is available in the China (Hangzhou) region, specify parameters as follows:**

```
"RegionId": "cn-hangzhou",
"DestinationResource": "Zone",
"InstanceType": "ecs.g5.large"
```

**To query the ecs.g5.large instance type in all zones of the China (Hangzhou) region, specify parameters as follows:**

```
"RegionId": "cn-hangzhou",
"DestinationResource": "InstanceType""InstanceType": "ecs.g5.large"
```

**To query data disks of the ultra disk category in Hangzhou Zone B regardless of whether the disks are attached to ECS instances, specify parameters as follows:**

```
"RegionId": "cn-hangzhou",
"ZoneId": "cn-hangzhou-b",
"ResourceType": "disk",
"DestinationResource": "DataDisk"
```

**To query data disks purchased together with ecs.g7.large instances that reside in Hangzhou Zone B and use Enterprise SSDs (ESSDs) as system disks, specify parameters as follows:**

```
"RegionId": "cn-hangzhou",
"ZoneId": "cn-hangzhou-b",
"ResourceType": "instance",
"InstanceType": "ecs.g7.large",
"DestinationResource": "SystemDisk",
"SystemDiskCategory": "cloud_essd"
```

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeAvailableResource)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeAvailableResource)

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

The ID of the region for which to query resources. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

InstanceChargeType

string

No

The billing method of the resource. For more information, see [Billing overview](/help/en/ecs/billing-overview). Valid values:

-   PrePaid: subscription.
-   PostPaid: pay-as-you-go.

Default value: PostPaid.

PrePaid

SpotStrategy

string

No

The bidding policy for pay-as-you-go instances. Valid values:

-   NoSpot: The instance is a pay-as-you-go instance.
-   SpotWithPriceLimit: The instance is a spot instance with a user-defined maximum hourly price.
-   SpotAsPriceGo: The instance is a spot instance for which the market price is automatically used as the bid price. The market price can be up to the pay-as-you-go price.

Default value: NoSpot.

The SpotStrategy parameter takes effect only when the InstanceChargeType parameter is set to PostPaid.

NoSpot

SpotDuration

integer

No

The protection period of the spot instance. Unit: hours. Default value: 1. Valid values:

-   1: After a spot instance is created, Alibaba Cloud ensures that the instance is not automatically released within 1 hour. After the 1-hour protection period ends, the system compares the bid price with the market price and checks the resource inventory to determine whether to retain or release the instance.
-   0: After a spot instance is created, Alibaba Cloud does not ensure that the instance runs for 1 hour. The system compares the bid price with the market price and checks the resource inventory to determine whether to retain or release the instance.

Alibaba Cloud sends an ECS system event to notify you 5 minutes before the instance is released. Spot instances are billed by second. We recommend that you specify a protection period based on your business requirements.

**Note** This parameter takes effect only if SpotStrategy is set to SpotWithPriceLimit or SpotAsPriceGo.

1

DestinationResource

string

Yes

The resource type to query. Valid values:

-   Zone: zone.
-   IoOptimized: I/O optimized resource.
-   InstanceType: instance type.
-   SystemDisk: system disk.
-   DataDisk: data disk.
-   Network: network type.
-   ddh: dedicated host.

For more information about how to configure the DestinationResource parameter, see the **Description** section of this topic.

InstanceType

ZoneId

string

No

The ID of the zone where the instance resides.

This parameter is empty by default. When this parameter is empty, the system returns resources that match the other criteria in all zones within the region specified by `RegionId`.

cn-hangzhou-e

IoOptimized

string

No

Specifies whether the instance is an I/O optimized instance. Valid values:

-   none: The instance is a non-I/O optimized instance.
-   optimized: The instance is an I/O optimized instance.

Default value: optimized.

optimized

DedicatedHostId

string

No

The ID of the dedicated host.

dh-bp165p6xk2tlw61e\*\*\*\*

InstanceType

string

No

The instance types. For more information, see [Instance families](/help/en/ecs/user-guide/overview-of-instance-families) or call the [DescribeInstanceTypes](/help/en/ecs/api-describeinstancetypes) operation to query the most recent instance type list.

For more information about how to configure the InstanceType parameter, see the **Description** section of this topic.

ecs.g5.large

SystemDiskCategory

string

No

The category of the system disk. Valid values:

-   cloud: basic disk
-   cloud\_efficiency: ultra disk
-   cloud\_ssd: standard SSD
-   ephemeral\_ssd: local SSD
-   cloud\_essd: Enterprise SSD (ESSD)
-   cloud\_auto: ESSD AutoPL disk

Default value: cloud\_efficiency.

**Note** This parameter must be specified when ResourceType is set to instance and DestinationResource is set to DataDisk. If you do not specify this parameter, the default value takes effect.

cloud\_ssd

DataDiskCategory

string

No

The category of the data disk. Valid values:

-   cloud: basic disk
-   cloud\_efficiency: ultra disk
-   cloud\_ssd: standard SSD
-   ephemeral\_ssd: local SSD
-   cloud\_essd: ESSD
-   cloud\_auto: ESSD AutoPL disk

cloud\_ssd

NetworkCategory

string

No

The network type of the cluster. Valid values:

-   vpc
-   classic

vpc

Cores

integer

No

The number of vCPUs of the instance type. For more information, see [Instance families](/help/en/ecs/user-guide/overview-of-instance-families).

The Cores parameter takes effect only when the DestinationResource parameter is set to InstanceType.

2

Memory

float

No

The memory size of the instance type. Unit: GiB. For more information, see [Instance families](/help/en/ecs/user-guide/overview-of-instance-families).

The Memory parameter takes effect only when the DestinationResource parameter is set to InstanceType.

8.0

ResourceType

string

No

The type of the resource. Valid values:

-   instance: ECS instance.
-   disk: cloud disk.
-   reservedinstance: reserved instance.
-   ddh: dedicated host.

instance

Scope

string

No

The scope of the reserved instance. Valid values:

-   Region: regional.
-   Zone: zonal.

Region

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

0041D94C-FB92-4C49-B115-259DA1C\*\*\*\*\*

AvailableZones

array<object>

Details about the zones in which resources are available.

AvailableZone

object

Details about the zones in which resources are available.

ZoneId

string

The zone ID.

cn-hangzhou-e

Status

string

The status of resources in the zone. Valid values:

-   Available
-   SoldOut

Available

StatusCategory

string

The resource category based on the stock level in the zone. Valid values:

-   WithStock: Resources are in sufficient stock.
-   ClosedWithStock: Resources are in insufficient stock. We recommend that you use other resources that are in sufficient stock.
-   WithoutStock: Resources are out of stock and will be replenished. We recommend that you use other resources that are in sufficient stock.
-   ClosedWithoutStock: Resources are out of stock and will not be replenished. We recommend that you use other resources that are in sufficient stock.

WithStock

RegionId

string

The region ID.

cn-hangzhou

AvailableResources

array<object>

The resources that are available in the zone.

AvailableResource

object

Details about the resources that can be created in the zone.

Type

string

The resource type. Valid values:

-   Zone: zone
-   IoOptimized: I/O optimized resource
-   InstanceType: instance type
-   SystemDisk: system disk
-   DataDisk: data disk
-   Network: network type
-   ddh: dedicated host

InstanceType

SupportedResources

array<object>

The information about the resources.

SupportedResource

object

Details about the resources.

Status

string

The status of the resource. Valid values:

-   Available
-   SoldOut

Available

Value

string

The resource.

ecs.d1ne.xlarge

Max

integer

The maximum disk capacity.

This parameter takes effect only if DestinationResource is set to SystemDisk or DataDisk.

2

Unit

string

The unit of the disk capacity.

This parameter takes effect only if DestinationResource is set to SystemDisk or DataDisk.

null

StatusCategory

string

The resource category based on the stock level. Valid values:

-   WithStock: Resources are in sufficient stock.
-   ClosedWithStock: Resources are in insufficient stock. We recommend that you use other resources that are in sufficient stock.
-   WithoutStock: Resources are out of stock and will be replenished. We recommend that you use other resources that are in sufficient stock.
-   ClosedWithoutStock: Resources are out of stock and will not be replenished. We recommend that you use other resources that are in sufficient stock.

WithStock

Min

integer

The minimum disk capacity.

This parameter takes effect only if DestinationResource is set to SystemDisk or DataDisk.

1

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "0041D94C-FB92-4C49-B115-259DA1C*****",
  "AvailableZones": {
    "AvailableZone": [
      {
        "ZoneId": "cn-hangzhou-e",
        "Status": "Available",
        "StatusCategory": "WithStock",
        "RegionId": "cn-hangzhou",
        "AvailableResources": {
          "AvailableResource": [
            {
              "Type": "InstanceType",
              "SupportedResources": {
                "SupportedResource": [
                  {
                    "Status": "Available",
                    "Value": "ecs.d1ne.xlarge",
                    "Max": 2,
                    "Unit": null,
                    "StatusCategory": "WithStock",
                    "Min": 1
                  }
                ]
              }
            }
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

Invalid.InstanceChargeType

The specified InstanceChargeType is not valid.

The specified InstanceChargeType parameter is invalid.

400

Invalid.Param

The input parameter DestinationResource that is mandatory for processing this request is not supplied.

The specified DestinationResource parameter is invalid.

400

InvalidRegionId.MalFormed

The specified parameter RegionId is not valid.

The specified RegionId parameter is invalid.

403

InvalidDedicatedHostId.NotFound

The specified DedicatedHostId does not exist.

\-

403

InvalidParam.TypeAndCpuMem.Conflict

The specified 'InstanceType' and 'Cores','Memory' are not blank at the same time.

\-

403

InvalidParam.Cores

The specified parameter 'Cores' should be empty.

The specified parameter 'Cores' should be empty.

403

InvalidParam.Memory

The specified parameter 'Memory' should be empty.

The specified parameter 'Memory' should be empty.

403

InvalidParameter.Scope

The specified parameter Scope is invalid.

The specified parameter Scope is invalid.

403

OperationDenied.RegionIdNotSupported

The region does not support preemptible instances.

\-

403

OperationDenied.FlavorNotSupported

The flavor does not support preemptible instances.

\-

403

OperationDenied.TimestampNotSupported

Preemptible instances are not for sale for current time.

\-

403

InvalidParameter.ResourceOwnerId

The specified parameter ResourceOwnerId is not available anymore.

\-

404

Invalid.RegionId

The specified RegionId does not exist.

The specified RegionId parameter is invalid.

404

Unavailable.Regions

The available region does not exist.

\-

404

Invalid.ResourceType

The ResourceType provided does not exist in our records.

The specified resource type is invalid.

404

Invalid.DestinationResource

The specified DestinationResource is not valid.

The specified DestinationResource parameter is invalid.

404

Invalid.IoOptimized

The specified IoOptimized is not valid.

The specified IoOptimized parameter is invalid.

404

Invalid.NetworkCategory

The specified NetworkCategory is not valid.

The specified NetworkCategory parameter is invalid.

404

Invalid.SpotStrategy

The specified SpotStrategy is not valid.

The specified SpotStrategy parameter is invalid.

404

Invalid.NetworkType

The specified NetworkType is not valid.

The specified NetworkType parameter is invalid.

404

InvalidResourceId.NotFound

The specified ResourceId is not found in our records.

The specified resource does not exist. Check whether the resource ID is correct.

404

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId provided does not exist

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-11-24

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeAvailableResource?updateTime=2025-11-24#workbench-doc-change-demo)

2025-02-27

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeAvailableResource?updateTime=2025-02-27#workbench-doc-change-demo)

2024-03-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeAvailableResource?updateTime=2024-03-25#workbench-doc-change-demo)
