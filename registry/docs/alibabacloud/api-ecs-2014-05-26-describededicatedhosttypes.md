Queries the details of dedicated host types supported in a region, or the Elastic Compute Service (ECS) instance families supported by a specific dedicated host type.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeDedicatedHostTypes)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeDedicatedHostTypes)

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

DedicatedHostType

string

No

The dedicated host type. For more information, see [Dedicated host types](/help/en/dedicated-host/product-overview/dedicated-host-types).

ddh.sn1ne

SupportedInstanceTypeFamily

string

No

The ECS instance family supported by the dedicated host type.

ecs.sn1ne

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

5FE5FF06-3A33-4658-8495-6445FC54E327

DedicatedHostTypes

array<object>

Details about the dedicated host types.

DedicatedHostType

object

Cores

integer

The number of cores per physical CPU.

2

LocalStorageCategory

string

The category of local disks.

local

GPUSpec

string

The GPU model.

gpu

TotalVcpus

integer

The total number of vCPUs.

56

CpuOverCommitRatioRange

string

The supported CPU overcommit ratio range.

1-5

PhysicalGpus

integer

The number of physical GPUs.

2

MemorySize

float

The memory size. Unit: GiB.

112.0

SupportCpuOverCommitRatio

boolean

Indicates whether the CPU overcommit ratio settings are supported.

true

LocalStorageCapacity

long

The capacity of a local disk. Unit: GiB.

0

DedicatedHostType

string

The dedicated host type.

ddh.sn1ne

LocalStorageAmount

integer

The number of local disks on a dedicated host.

0

TotalVgpus

integer

The total number of vGPUs.

10

Sockets

integer

The number of physical CPUs.

2

SupportedInstanceTypeFamilies

array

The ECS instance families supported by the dedicated host type.

SupportedInstanceTypeFamily

string

The ECS instance family.

ecs.sn1ne

SupportedInstanceTypesList

array

The ECS instance types supported by the dedicated host type.

SupportedInstanceTypesList

string

The ECS instance type.

ecs.sn1ne.large

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "5FE5FF06-3A33-4658-8495-6445FC54E327",
  "DedicatedHostTypes": {
    "DedicatedHostType": [
      {
        "Cores": 2,
        "LocalStorageCategory": "local",
        "GPUSpec": "gpu",
        "TotalVcpus": 56,
        "CpuOverCommitRatioRange": "1-5",
        "PhysicalGpus": 2,
        "MemorySize": 112,
        "SupportCpuOverCommitRatio": true,
        "LocalStorageCapacity": 0,
        "DedicatedHostType": "ddh.sn1ne",
        "LocalStorageAmount": 0,
        "TotalVgpus": 10,
        "Sockets": 2,
        "SupportedInstanceTypeFamilies": {
          "SupportedInstanceTypeFamily": [
            "ecs.sn1ne"
          ]
        },
        "SupportedInstanceTypesList": {
          "SupportedInstanceTypesList": [
            "ecs.sn1ne.large"
          ]
        }
      }
    ]
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-02-20

API Description Update

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeDedicatedHostTypes?updateTime=2025-02-20#workbench-doc-change-demo)
