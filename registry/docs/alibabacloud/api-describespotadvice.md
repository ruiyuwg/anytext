Queries information about spot instances in a region in the previous 30 days. The information includes the average release rate of spot instances and the percentage of the average spot instance price relative to the pay-as-you-go instance price.

## Operation description

-   This operation is applicable only to I/O optimized spot instances that reside in virtual private clouds (VPCs).
    
-   You can use one of the following methods to call this operation:
    
    -   Specify `Cores` and `Memory` or `MinCores` and `MinMemory` to query information about the instance types that meet the specified vCPU and memory requirements.
    -   Specify `InstanceTypes.N` to query information about the specified instance types.
    -   Specify `Cores` and `Memory` or `MinCores` and `MinMemory`, and then specify `InstanceTypeFamily` or `InstanceFamilyLevel` to query information about the instance types that meet the specified vCPU and memory requirements within the specified instance family or at a specified instance family level.
-   You can calculate the average price of spot instances based on the percentage of the average spot instance price relative to the pay-as-you-go instance price and the pay-as-you-go instance price.
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeSpotAdvice)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeSpotAdvice)

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

The region ID. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

Cores

integer

No

The number of vCPUs of the instance type. For more information, see [Instance families](/help/en/ecs/user-guide/overview-of-instance-families).

2

Memory

float

No

The memory size of the instance type. Unit: GiB. For more information, see [Instance families](/help/en/ecs/user-guide/overview-of-instance-families).

8.0

MinCores

integer

No

The minimum number of vCPUs of the instance type. For more information, see [Instance families](/help/en/ecs/user-guide/overview-of-instance-families).

2

MinMemory

float

No

The minimum memory size of the instance type. For more information, see [Instance families](/help/en/ecs/user-guide/overview-of-instance-families).

8.0

ZoneId

string

No

The zone ID.

This parameter is left empty by default, which indicates that all zones in the specified region are queried.

cn-hangzhou-i

InstanceTypeFamily

string

No

The instance family. For more information, see [Instance families](/help/en/ecs/user-guide/overview-of-instance-families).

ecs.c5

InstanceFamilyLevel

string

No

The level of the instance family. Valid values:

-   EntryLevel.
-   EnterpriseLevel.
-   CreditEntryLevel. For more information, see [Overview of burstable instances](/help/en/ecs/user-guide/burst-performance-instance-overview).

This parameter is left empty by default, which indicates that instance families at all levels are queried.

EntryLevel

GpuSpec

string

No

The GPU type. Valid values:

-   NVIDIA P4
-   NVIDIA T4
-   NVIDIA P100
-   NVIDIA V100

This parameter is left empty by default, which indicates that all GPU types are queried. For more information, see [GPU-accelerated compute-optimized and vGPU-accelerated instance families](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1).

NVIDIA T4

GpuAmount

integer

No

The number of GPUs that a GPU-accelerated instance has. For information about the valid values, see [GPU-accelerated compute optimized instance types](/help/en/ecs/user-guide/gpu-accelerated-compute-optimized-and-vgpu-accelerated-instance-families-1).

2

InstanceTypes

array

No

The instance types. You can specify up to 10 instance types.

string

No

The instance type. For more information, see [Instance families](/help/en/ecs/user-guide/overview-of-instance-families).

ecs.c5.large

## Response parameters

Parameter

Type

Description

Example

object

RegionId

string

The region ID.

cn-hangzhou

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

AvailableSpotZones

array<object>

Details about spot instances in the zones of the specified region.

**Note** The return values are sorted based on the historical percentages of average spot instance prices relative to pay-as-you-go instance prices for instance types.

AvailableSpotZone

object

ZoneId

string

The zone ID.

cn-hangzhou-i

AvailableSpotResources

array<object>

Details about spot instances in the previous 30 days, including the release rate of spot instances and percentages of average spot instance prices relative to pay-as-you-go instance prices.

AvailableSpotResource

object

InterruptRateDesc

string

The release rate range of spot instances in the previous 30 days, which corresponds to the `InterruptionRate` value. Valid values:

-   0-3%
-   3-5%
-   5-10%
-   10-100%

0-3%

AverageSpotDiscount

integer

The percentage of the average spot instance price relative to the pay-as-you-go instance price in the previous 30 days. Unit: %. Valid values: 1 to 100.

You can calculate the average spot instance price based on the return value. For example, if the pay-as-you-go instance price is 1 and the return value of this parameter is 20, the average spot instance price in the previous 30 days is 0.2.

20

InstanceType

string

The instance type.

ecs.c5.large

InterruptionRate

float

The average release rate of spot instances in the previous 30 days. Unit: %.

0

## Examples

Sample success responses

`JSON`format

```
{
  "RegionId": "cn-hangzhou",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "AvailableSpotZones": {
    "AvailableSpotZone": [
      {
        "ZoneId": "cn-hangzhou-i",
        "AvailableSpotResources": {
          "AvailableSpotResource": [
            {
              "InterruptRateDesc": "0-3%",
              "AverageSpotDiscount": 20,
              "InstanceType": "ecs.c5.large",
              "InterruptionRate": 0
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

Invalid.SaleStrategy

The specified saleStrategy is not valid.

\-

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

The specified DedicatedHostId does not exist in our records.

\-

403

InvalidParam.TypeAndCpuMem.Conflict

The specified 'InstanceType' and 'Cores','Memory' are not blank at the same time.

\-

403

InvalidParam.Cores

The specified parameter 'Cores' should not be empty

\-

403

InvalidParam.Memory

The specified parameter 'Memory' should not be empty

\-

403

OperationDenied.RegionIdNotSupported

region not support spot duration instance.

\-

403

OperationDenied.FlavorNotSupported

flavor not support spot duration instance.

\-

403

OperationDenied.TimestampNotSupported

timestamp not support spot duration instance.

\-

404

Invalid.RegionId

The specified RegionId does not exist.

The specified RegionId parameter is invalid.

404

Unavailable.Regions

The available regions does not exists

The specified RegionId parameter is invalid.

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

Invalid.NetworkType

The specified NetworkType is not valid.

The specified NetworkType parameter is invalid.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-02-24

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeSpotAdvice?updateTime=2025-02-24#workbench-doc-change-demo)
