Queries the details of all instance types or a specific instance type provided by Elastic Compute Service (ECS). You can understand the specifications and performance of instance types based on the response and select an instance type that meets your business requirements.

## Operation description

-   **Paged query**: You can set MaxResults to specify the maximum number of entries to return in a single call. If the number of entries to return exceeds the specified MaxResults value, the response includes a NextToken value. You can set NextToken to the return value and specify MaxResults in your next request to DescribeInstanceTypes to retrieve the next page of results.
-   When you call this operation, if you do not set NextToken to paginate the results, only the first page of results is returned by default and includes a maximum of 100 entries. To retrieve further pages of results, set NextToken or pass filter conditions in your requests to DescribeInstanceTypes.

**Note** MaxResults specifies the maximum number of entries per page. The maximum value of this parameter is changed from 1600 to 100 for all users as of November 15, 2023. If you called the DescribeInstanceTypes operation in 2022, you can use 1600 as the maximum value before November 15, 2023.

-   The DescribeInstanceTypes operation is used to query only the specifications and performance information of instance types. To query instance types that are available in a specific region, call the [DescribeAvailableResource](/help/en/ecs/api-describeavailableresource) operation.
-   To use special instance types such as instance types that are unavailable for purchase, [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket-intl).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeInstanceTypes)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeInstanceTypes)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

InstanceTypeFamily

string

No

The instance family to which the instance type belongs. For information about the valid values of this parameter, see [DescribeInstanceTypeFamilies](/help/en/ecs/api-describeinstancetypefamilies) .

For more information about instance families, see [Instance families](/help/en/ecs/user-guide/overview-of-instance-families).

ecs.g6

InstanceTypes

array

No

The instance types. You can specify 1 to 10 instance types. If this parameter is empty, information about all instance types is queried.

string

No

The instance type.

ecs.g6.large

MinimumCpuCoreCount

integer

No

The minimum number of vCPUs. The value must be a positive integer.

**Note** If an instance type has fewer vCPUs than the specified value, information about the instance type is not queried.

2

MaximumCpuCoreCount

integer

No

The maximum number of vCPUs. The value must be a positive integer.

**Note** If an instance type has more vCPUs than the specified value, information about the instance type is not queried.

10

MinimumMemorySize

float

No

The minimum memory size. Unit: GiB.

**Note** If the memory size of an instance type is smaller than the specified value, information about the instance type is not queried.

20

MaximumMemorySize

float

No

The maximum memory size. Unit: GiB.

**Note** If the memory size of an instance type is larger than the specified value, information about the instance type is not queried.

60

MinimumGPUAmount

integer

No

The minimum number of GPUs. The value must be a positive integer.

**Note** If an instance type provides fewer GPUs than the specified value, information about the instance type is not queried.

3

MaximumGPUAmount

integer

No

The maximum number of GPUs. The value must be a positive integer.

**Note** If an instance type provides more GPUs than the specified value, information about the instance type is not queried.

10

GPUSpec

string

No

The GPU model.

**Note** Fuzzy match is supported. For example, if an instance type provides NVIDIA V100 GPUs and you set this parameter to NVIDIA, information about the instance type is queried.

NVIDIA V100

InstanceCategory

string

No

The category of the instance type. Valid values:

-   General-purpose: general-purpose instance type
-   Compute-optimized: compute-optimized instance type
-   Memory-optimized: memory-optimized instance type
-   Big data: big data instance type
-   Local SSDs: instance type with local SSDs
-   High Clock Speed: instance type with high clock speeds
-   Enhanced: enhanced instance type
-   Shared: shared instance type
-   Compute-optimized with GPU: GPU-accelerated compute-optimized instance type
-   Visual Compute-optimized: visual compute-optimized instance type
-   Heterogeneous Service: heterogeneous service instance type
-   Compute-optimized with FPGA: FPGA-accelerated compute-optimized instance type
-   Compute-optimized with NPU: NPU-accelerated compute-optimized instance type
-   ECS Bare Metal: ECS Bare Metal Instance type
-   Super Computing Cluster: Super Computing Cluster (SCC) instance type
-   High Performance Compute: high-performance computing instance type

Big data

CpuArchitecture

string

No

The CPU architecture. Valid values:

-   X86
-   ARM

X86

MinimumCpuSpeedFrequency

float

No

The minimum clock speed.

**Note** If an instance type uses processors that have a lower clock speed than the specified value, information about the instance type is not queried.

2.5

MaximumCpuSpeedFrequency

float

No

The maximum clock speed.

**Note** If an instance type uses processors that have a higher clock speed than the specified value, information about the instance type is not queried.

3.2

MinimumCpuTurboFrequency

float

No

The minimum turbo frequency.

**Note** If an instance type uses processors that deliver a lower turbo frequency than the specified value, information about the instance type is not queried.

3.2

MaximumCpuTurboFrequency

float

No

The maximum turbo frequency.

**Note** If an instance type uses processors that deliver a higher turbo frequency than the specified value, information about the instance type is not queried.

4.1

PhysicalProcessorModel

string

No

The CPU model.

**Note** Fuzzy match is supported. For example, if an instance type uses Intel Xeon (Ice Lake) Platinum 8369B processors and you set this parameter to Intel, information about the instance type is queried.

Intel Xeon(Ice Lake) Platinum 8369B

InstanceFamilyLevel

string

No

The level of the instance family. Valid values:

-   EntryLevel: entry level (shared)
-   EnterpriseLevel: enterprise level
-   CreditEntryLevel: credit-based entry level

EntryLevel

MinimumInstancePpsRx

long

No

The minimum inbound packet forwarding rate over the internal network. Unit: pps.

**Note** If an instance type provides an inbound packet forwarding rate over the internal network that is lower than the specified value, information about the instance type is not queried.

15

MinimumInstancePpsTx

long

No

The minimum outbound packet forwarding rate over the internal network. Unit: pps.

**Note** If an instance type provides an outbound packet forwarding rate over the internal network that is lower than the specified value, information about the instance type is not queried.

15

MinimumInstanceBandwidthRx

integer

No

The minimum inbound internal bandwidth. Unit: Kbit/s.

**Note** If an instance type provides an inbound internal bandwidth that is lower than the specified value, information about the instance type is not queried.

12288

MinimumInstanceBandwidthTx

integer

No

The minimum outbound internal bandwidth. Unit: Kbit/s.

**Note** If an instance type provides an outbound internal bandwidth that is lower than the specified value, information about the instance type is not queried.

12288

MinimumPrimaryEniQueueNumber

integer

No

The minimum default number of queues per primary network interface controller (NIC).

**Note** If an instance type supports fewer queues per primary NIC than the specified value, information about the instance type is not queried.

8

MinimumSecondaryEniQueueNumber

integer

No

The minimum default number of queues per secondary NIC.

**Note** If an instance type supports fewer queues per secondary NIC than the specified value, information about the instance type is not queried.

4

MinimumEniQuantity

integer

No

The minimum number of elastic network interfaces (ENIs) per instance.

**Note** If an instance type supports fewer ENIs than the specified value, information about the instance type is not queried.

4

MinimumQueuePairNumber

integer

No

The minimum number of queue pair (QP) queues per elastic RDMA interface (ERI).

**Note** If an instance type supports fewer QP queues per ERI than the specified value, information about the instance type is not queried.

8

MinimumEriQuantity

integer

No

The minimum number of ERIs per instance.

**Note** If an instance type supports fewer ERIs than the specified value, information about the instance type is not queried.

0

MinimumEniPrivateIpAddressQuantity

integer

No

The minimum number of IPv4 addresses per ENI.

**Note** If an instance type supports fewer IPv4 addresses per ENI than the specified value, information about the instance type is not queried.

2

MinimumEniIpv6AddressQuantity

integer

No

The minimum number of IPv6 addresses per ENI.

**Note** If an instance type supports fewer IPv6 addresses per ENI than the specified value, information about the instance type is not queried.

2

MinimumLocalStorageAmount

integer

No

The minimum number of local disks per instance.

**Note** If an instance type supports fewer local disks than the specified value, information about the instance type is not queried.

4

MinimumLocalStorageCapacity

long

No

The capacity of each local disk attached per instance. Unit: GiB.

40

MinimumDiskQuantity

integer

No

The minimum number of cloud disks per instance.

**Note** If an instance type supports fewer cloud disks than the specified value, information about the instance type is not queried.

4

LocalStorageCategory

string

No

The category of local disks. For more information, see [Local disks](/help/en/ecs/user-guide/local-disks#section_n2w_8yc_5u1). Valid values:

-   local\_hdd\_pro: local Serial Advanced Technology Attachment (SATA) HDDs, which are attached to d1ne or d1 instances.
-   local\_ssd\_pro: local Non-Volatile Memory Express (NVMe) SSDs, which are attached to i2, i2g, i1, ga1, or gn5 instances.

Valid values:

-   local\_hdd\_pro
-   local\_ssd\_pro

local\_ssd\_pro

NvmeSupport

string

No

Specifies whether cloud disks can be attached by using the NVMe protocol. Valid values:

-   required: Cloud disks can be attached by using the NVMe protocol.
-   unsupported: Cloud disks cannot be attached by using the NVMe protocol.

required

MinimumBaselineCredit

integer

No

The minimum baseline CPU performance (overall baseline performance of all vCPUs) of a t5 or t6 burstable instance.

**Note** If a t5 or t6 instance type provides baseline CPU performance lower than the specified value, information about the instance type is not queried.

12

MinimumInitialCredit

integer

No

The minimum initial CPU credits of a t5 or t6 burstable instance.

**Note** If a t5 or t6 instance type provides less initial vCPU credits than the specified value, information about the instance type is not queried.

12

InstanceTypeFamilies

array

No

The instance families. You can specify 1 to 10 instance families.

string

No

The instance family.

\["ecs.g6", "ecs.c6", … "ecs.r6"\]

GpuSpecs

array

No

The GPU models of instance types. You can specify 1 to 10 GPU models.

string

No

The GPU model.

\["NVIDIA V100", "NVIDIA T4", … "NVIDIA A10"\]

InstanceCategories

array

No

The categories of instance types. You can specify 1 to 10 categories of instance types.

string

No

The category of instance types. Valid values:

-   General-purpose: general-purpose instance type
-   Compute-optimized: compute-optimized instance type
-   Memory-optimized: memory-optimized instance type
-   Big data: big data instance type
-   Local SSDs: instance type with local SSDs
-   High Clock Speed: instance type with high clock speeds
-   Enhanced: enhanced instance type
-   Shared: shared instance type
-   Compute-optimized with GPU: GPU-accelerated compute-optimized instance type
-   Visual Compute-optimized: visual compute-optimized instance type
-   Heterogeneous Service: heterogeneous service instance type
-   Compute-optimized with FPGA: FPGA-accelerated compute-optimized instance type
-   Compute-optimized with NPU: NPU-accelerated compute-optimized instance type
-   ECS Bare Metal: ECS Bare Metal Instance type
-   Super Computing Cluster: Super Computing Cluster (SCC) instance type
-   High Performance Compute: high-performance computing instance type

\["General-purpose", "Compute-optimized", … "Enhanced"\]

CpuArchitectures

array

No

The CPU architectures of instance types. You can specify 1 or 2 CPU architectures.

string

No

The CPU architecture. Valid values:

-   X86
-   ARM

\["X86", "ARM"\]

PhysicalProcessorModels

array

No

The CPU models of instance types. You can specify 1 to 10 CPU models.

string

No

The CPU model.

\["Intel Xeon(Ice Lake) Platinum 8369B", "Intel Xeon(Skylake) Platinum 8163", … "Intel Xeon(Cascade Lake) Platinum 8269CY"\]

LocalStorageCategories

array

No

The categories of local disks used by instance types. You can specify 1 or 2 categories of local disks.

string

No

The category of local disks. For more information, see [Local disks](/help/en/ecs/user-guide/local-disks#section_n2w_8yc_5u1). Valid values:

-   local\_hdd\_pro: local SATA HDDs, which are attached to d1ne or d1 instances
-   local\_ssd\_pro: local Non-Volatile Memory Express (NVMe) SSDs, which are attached to i2, i2g, i1, ga1, or gn5 instances.

\["local\_hdd\_pro", "local\_ssd\_pro"\]

MaxResults

long

No

The maximum number of entries per page. Valid values: 1 to 1600.

Default value: 1600.

10

NextToken

string

No

The query token. Set the value to the NextToken value returned in the previous call to the DescribeInstanceTypes operation. You do not need to specify this parameter for the first request.

e71d8a535bd9cc11

## Response parameters

Parameter

Type

Description

Example

object

The information about the queried instance types.

RequestId

string

The ID of the request.

00827261-20B7-4562-83F2-4DF39876A45A

InstanceTypes

array<object>

Details about the instance types.

InstanceType

object

Details about the instance type.

EniTotalQuantity

integer

The maximum number of ENIs, including primary, secondary, and trunk ENIs.

**Note** This parameter is in invitational preview and is not publicly available.

0

LocalStorageCategory

string

The category of local disks. For more information, see [Local disks](/help/en/ecs/user-guide/local-disks). Valid values:

-   local\_hdd\_pro: local SATA HDDs, which are attached to d1ne or d1 instances
-   local\_ssd\_pro: local NVMe SSDs, which are attached to i2, i2g, i1, ga1, or gn5 instances

local\_ssd\_pro

PrimaryEniQueueNumber

integer

The default number of queues per primary ENI.

4

MemorySize

float

The memory size. Unit: GiB

16

LocalStorageCapacity

long

The capacity of each local disk. Unit: GiB

5000

InstanceFamilyLevel

string

The level of the instance family. Valid values:

-   EntryLevel: entry level (shared).
-   EnterpriseLevel: enterprise level.
-   CreditEntryLevel: credit-based entry level. For more information, see [Overview](/help/en/ecs/user-guide/burst-performance-instance-overview) .

EnterpriseLevel

InstancePpsRx

long

The inbound packet forwarding rate over the internal network. Unit: pps.

500000

EniIpv6AddressQuantity

integer

The maximum number of IPv6 addresses per ENI.

1

MaximumQueueNumberPerEni

integer

The maximum number of queues per ENI, including primary and secondary ENIs.

4

InstanceTypeId

string

The ID of the instance type.

ecs.g6.large

InstanceBandwidthRx

integer

The maximum inbound internal bandwidth. Unit: Kbit/s.

1024000

SecondaryEniQueueNumber

integer

The default number of queues per secondary ENI.

4

GPUSpec

string

The GPU model.

NVIDIA V100

InstanceBandwidthTx

integer

The maximum outbound internal bandwidth. Unit: Kbit/s.

1024000

QueuePairNumber

integer

The maximum number of QPs per instance, which varies based on the instance type.

-   For enterprise-level CPU-based instance types, the value of `QueuePairNumber` is the maximum number of QPs per instance.
-   For GPU-accelerated instance types, the maximum number of QPs per instance is calculated by using the following formula: Value of `QueuePairNumber` × Value of NetworkCardQuantity.

22

EriQuantity

integer

The number of ERIs.

**Note** This parameter is in invitational preview and is not publicly available.

0

GPUAmount

integer

The number of GPUs.

0

TotalEniQueueQuantity

integer

The maximum number of queues on ENIs that the instance type supports.

12

NvmeSupport

string

Indicates whether cloud disks can be attached by using the NVMe protocol. Valid values:

-   required: Cloud disks can be attached by using the NVMe protocol.
-   unsupported: Cloud disks cannot be attached by using the NVMe protocol.

unsupported

DiskQuantity

integer

The maximum number of cloud disks per instance.

17

InitialCredit

integer

The initial vCPU credits per t5 or t6 burstable instance.

120

LocalStorageAmount

integer

The number of local disks per instance.

1

BaselineCredit

integer

The baseline vCPU computing performance (overall baseline performance of all vCPUs) per t5 or t6 burstable instance.

4

InstancePpsTx

long

The outbound packet forwarding rate over the internal network. Unit: pps.

500000

EniPrivateIpAddressQuantity

integer

The maximum number of IPv4 addresses per ENI.

10

CpuCoreCount

integer

The number of vCPUs.

4

InstanceTypeFamily

string

The instance family.

ecs.g6

EniQuantity

integer

The maximum number of ENIs per instance.

3

EniTrunkSupported

boolean

Indicates whether trunk ENIs are supported.

**Note** This parameter is in invitational preview and is not publicly available.

true

CpuSpeedFrequency

float

The CPU base frequency. Unit: GHz.

2.7

CpuTurboFrequency

float

The CPU turbo frequency. Unit: GHz.

3.5

PhysicalProcessorModel

string

The CPU model.

Intel Xeon(Ice Lake) Platinum 8369B

NetworkEncryptionSupport

boolean

Indicates whether to allow network traffic transmitted over virtual private clouds (VPCs) to be encrypted. Valid values:

-   true
-   false

**Note** This parameter is in invitational preview and is not publicly available.

true

InstanceCategory

string

The category of the instance type. Valid values:

-   General-purpose
-   Compute-optimized
-   Memory-optimized
-   Big data
-   Local SSDs
-   High Clock Speed
-   Enhanced
-   Shared
-   Compute-optimized with GPU
-   Visual Compute-optimized
-   Heterogeneous Service
-   Compute-optimized with FPGA
-   Compute-optimized with NPU
-   ECS Bare Metal
-   Super Computing Cluster
-   High Performance Compute

Big data

CpuArchitecture

string

The CPU architecture. Valid values:

-   X86
-   ARM

X86

GPUMemorySize

float

The amount of GPU memory per GPU. Unit: GiB

32

NetworkCardQuantity

integer

The maximum number of network cards that the instance type supports.

1

NetworkCards

array<object>

The information about the network cards.

NetworkCardInfo

object

The information about the network card.

NetworkCardIndex

integer

The index of the network card.

1

SupportedBootModes

array

The boot modes supported by the instance type.

SupportedBootMode

string

The boot mode. Valid values:

-   BIOS
-   UEFI

BIOS

EnhancedNetwork

object

**Note** This parameter is not publicly available.

SriovSupport

boolean

**Note** This parameter is not publicly available.

true

VfQueueNumberPerEni

integer

**Note** This parameter is not publicly available.

5

RssSupport

boolean

**Note** This parameter is not publicly available.

true

CpuOptions

object

The CPU options.

SupportedTopologyTypes

array

The CPU topology types of the instance type.

SupportedTopologyType

string

The CPU topology type of the instance type. Valid values:

-   ContinuousCoreToHTMapping: The Hyper-Threading (HT) technology allows continuous threads to run on the same core.
-   DiscreteCoreToHTMapping: The HT technology allows discrete threads to run on the same core.

ContinuousCoreToHTMapping

ThreadsPerCore

integer

The number of threads per CPU core.

**Note** `If the value of CpuOptions.ThreadPerCore is 1, Hyper-Threading (HT) is disabled.`

2

Core

integer

The number of CPU cores.

2

CoreFactor

integer

The CPU option step size.

2

HyperThreadingAdjustable

boolean

Indicates whether HT can be enabled or disabled.

true

JumboFrameSupport

boolean

Indicates whether jumbo frames are supported.

true

Clock

object

The clock supported by the specification.

PtpSupport

string

Whether PTP is supported. Possible values:

-   supported
-   unsupported

unsupported

Attributes

array<object>

The list of specification attributes.

Attribute

object

The attribute of the specification.

Name

string

The name of the attribute.

VirtualIntelSpeedSelectTechnologySupport

Value

string

The attribute value.

1

NextToken

string

The query token returned in this call.

e71d8a535bd9cc11

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "00827261-20B7-4562-83F2-4DF39876A45A",
  "InstanceTypes": {
    "InstanceType": [
      {
        "EniTotalQuantity": 0,
        "LocalStorageCategory": "local_ssd_pro",
        "PrimaryEniQueueNumber": 4,
        "MemorySize": 16,
        "LocalStorageCapacity": 5000,
        "InstanceFamilyLevel": "EnterpriseLevel",
        "InstancePpsRx": 500000,
        "EniIpv6AddressQuantity": 1,
        "MaximumQueueNumberPerEni": 4,
        "InstanceTypeId": "ecs.g6.large",
        "InstanceBandwidthRx": 1024000,
        "SecondaryEniQueueNumber": 4,
        "GPUSpec": "NVIDIA V100",
        "InstanceBandwidthTx": 1024000,
        "QueuePairNumber": 22,
        "EriQuantity": 0,
        "GPUAmount": 0,
        "TotalEniQueueQuantity": 12,
        "NvmeSupport": "unsupported",
        "DiskQuantity": 17,
        "InitialCredit": 120,
        "LocalStorageAmount": 1,
        "BaselineCredit": 4,
        "InstancePpsTx": 500000,
        "EniPrivateIpAddressQuantity": 10,
        "CpuCoreCount": 4,
        "InstanceTypeFamily": "ecs.g6",
        "EniQuantity": 3,
        "EniTrunkSupported": true,
        "CpuSpeedFrequency": 2.7,
        "CpuTurboFrequency": 3.5,
        "PhysicalProcessorModel": "Intel Xeon(Ice Lake) Platinum 8369B",
        "NetworkEncryptionSupport": true,
        "InstanceCategory": "Big data",
        "CpuArchitecture": "X86",
        "GPUMemorySize": 32,
        "NetworkCardQuantity": 1,
        "NetworkCards": {
          "NetworkCardInfo": [
            {
              "NetworkCardIndex": 1
            }
          ]
        },
        "SupportedBootModes": {
          "SupportedBootMode": [
            "BIOS"
          ]
        },
        "EnhancedNetwork": {
          "SriovSupport": true,
          "VfQueueNumberPerEni": 5,
          "RssSupport": true
        },
        "CpuOptions": {
          "SupportedTopologyTypes": {
            "SupportedTopologyType": [
              "ContinuousCoreToHTMapping"
            ]
          },
          "ThreadsPerCore": 2,
          "Core": 2,
          "CoreFactor": 2,
          "HyperThreadingAdjustable": true
        },
        "JumboFrameSupport": true,
        "Clock": {
          "PtpSupport": "unsupported"
        },
        "Attributes": {
          "Attribute": [
            {
              "Name": "VirtualIntelSpeedSelectTechnologySupport",
              "Value": 1
            }
          ]
        }
      }
    ]
  },
  "NextToken": "e71d8a535bd9cc11"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-05-23

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInstanceTypes?updateTime=2025-05-23#workbench-doc-change-demo)

2025-04-03

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInstanceTypes?updateTime=2025-04-03#workbench-doc-change-demo)

2025-01-09

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInstanceTypes?updateTime=2025-01-09#workbench-doc-change-demo)

2024-11-25

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInstanceTypes?updateTime=2024-11-25#workbench-doc-change-demo)

2024-10-31

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInstanceTypes?updateTime=2024-10-31#workbench-doc-change-demo)

2024-07-03

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInstanceTypes?updateTime=2024-07-03#workbench-doc-change-demo)

2024-04-24

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInstanceTypes?updateTime=2024-04-24#workbench-doc-change-demo)

2024-04-12

The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInstanceTypes?updateTime=2024-04-12#workbench-doc-change-demo)

2022-12-19

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInstanceTypes?updateTime=2022-12-19#workbench-doc-change-demo)

2022-09-07

The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInstanceTypes?updateTime=2022-09-07#workbench-doc-change-demo)
