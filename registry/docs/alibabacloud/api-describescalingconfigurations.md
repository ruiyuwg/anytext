You can call the DescribeScalingConfigurations operation to query information about Elastic Compute Service (ECS) scaling configurations. Specify a scaling group ID and one or more scaling configuration IDs to retrieve details such as the scaling configuration name, instance type, and image.

## Try it now

[Run this operation in OpenAPI Explorer to skip the signature calculation process. After a successful call, OpenAPI Explorer automatically generates SDK code samples.](https://api.aliyun.com/#product=Ess&api=DescribeScalingConfigurations&type=RPC&version=2014-08-28)

## Request parameters

**Parameter**

**Type**

**Required**

**Example**

**Description**

Action

String

Yes

DescribeScalingConfigurations

The action to perform. Set the value to DescribeScalingConfigurations.

RegionId

String

Yes

cn-qingdao

The region ID of the scaling group to which the scaling configuration belongs.

PageNumber

Integer

No

1

The page number of the scaling configuration list. The value starts from 1.

Default value: 1.

PageSize

Integer

No

50

The number of entries to return on each page. Maximum value: 50.

Default value: 10.

ScalingGroupId

String

No

asg-bp17pelvl720x3v7\*\*\*\*

The ID of the scaling group. Use this parameter to query all scaling configurations in the specified scaling group.

ScalingConfigurationId.N

String

No

asc-bp17pelvl720x5ub\*\*\*\*

The ID of the scaling configuration that you want to query.

The query results include both active and inactive scaling configurations. The status of a scaling configuration is indicated by the `LifecycleState` parameter.

ScalingConfigurationName.N

String

No

scalingcon\*\*\*\*

The name of the scaling configuration that you want to query.

The names of inactive scaling configurations are not included in the query results. No error is reported.

## Response parameters

**Parameter**

**Type**

**Example**

**Description**

RequestId

String

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

The request ID.

PageNumber

Integer

1

The page number of the returned page.

PageSize

Integer

50

The number of entries returned per page.

TotalCount

Integer

1

The total number of scaling configurations.

ScalingConfigurations

Array of ScalingConfiguration

The collection of scaling configurations.

ScalingConfiguration

DeploymentSetId

String

ds-bp1frxuzdg87zh4p\*\*\*\*

The ID of the deployment set to which the ECS instance belongs.

CreationTime

String

2014-08-14T10:58Z

The time when the scaling configuration was created.

ScalingConfigurationName

String

scalingconfigura\*\*\*\*

The name of the scaling configuration.

SystemDiskDescription

String

Test system disk.

The description of the system disk.

KeyPairName

String

keypair\*\*\*\*

The name of the key pair that is used to log on to the ECS instance.

SecurityGroupId

String

sg-bp18kz60mefs\*\*\*\*

The ID of the security group to which the ECS instance belongs. ECS instances in the same security group can access each other.

PrivatePoolOptions.Id

String

eap-bp67acfmxazb4\*\*\*\*

The ID of the private pool. The value can be the ID of an elasticity assurance or a capacity reservation.

SystemDiskAutoSnapshotPolicyId

String

sp-bp12m37ccmxvbmi5\*\*\*\*

The ID of the automatic snapshot policy that is applied to the system disk.

SpotStrategy

String

NoSpot

The preemption policy for the pay-as-you-go instance. Valid values:

-   NoSpot: The instance is a regular pay-as-you-go instance.
    
-   SpotWithPriceLimit: The instance is a preemptible instance for which you specify the maximum hourly price.
    
-   SpotAsPriceGo: The instance is a preemptible instance for which the price is automatically bid based on the current market price.
    

ScalingGroupId

String

asg-bp17pelvl720x3v7\*\*\*\*

The ID of the scaling group to which the scaling configuration belongs.

Affinity

String

default

Indicates whether the instance is associated with the dedicated host. Valid values:

-   default: The instance is not associated with the dedicated host. If an instance that is stopped in economical mode is restarted when the original dedicated host has insufficient resources, the instance is automatically deployed to another dedicated host in the resource pool.
    
-   host: The instance is associated with the dedicated host. If an instance that is stopped in economical mode is restarted, the instance is still deployed on the original dedicated host. If the original dedicated host has insufficient resources, the instance fails to restart.
    

Tenancy

String

default

Indicates whether to create an instance on a dedicated host. Valid values:

-   default: Create an instance on a non-dedicated host.
    
-   host: Create an instance on a dedicated host. If you do not specify the `DedicatedHostId` parameter, Alibaba Cloud automatically selects a dedicated host for the instance.
    

SystemDiskSize

Integer

100

The size of the system disk, in GiB.

Ipv6AddressCount

Integer

1

The number of randomly generated IPv6 addresses to assign to the ENI.

SpotDuration

Integer

1

The protection period of the spot instance, in hours.

LifecycleState

String

Active

The state of the scaling configuration in the scaling group. Valid values:

-   Active: The scaling configuration is in the Active state. Auto Scaling uses scaling configurations in the Active state to automatically create ECS instances.
    
-   Inacitve: The scaling configuration is in the Inactive state. Scaling configurations in the Inactive state are not used by Auto Scaling to create ECS instances.
    

InstanceName

String

instance\*\*\*\*

The name of the ECS instance.

SecurityEnhancementStrategy

String

Active

Indicates whether to enable security hardening. Valid values:

-   Active: Enable security hardening. This feature is available only for public images.
    
-   Deactive: Disable security hardening. This feature is available for all image types.
    

UserData

String

echo hello ecs!

The user data of the ECS instance. The user data must be Base64-encoded.

PrivatePoolOptions.MatchCriteria

String

Open

The private pool option for launching an instance. An elasticity assurance or a capacity reservation generates a private pool for instance launches. Valid values:

-   Open: The instance is launched from an open-type private pool. If no matching private pool is available, the instance is launched from the public pool.
    
-   Target: The instance is launched from a specified private pool. If the specified private pool is unavailable, the instance fails to be launched.
    
-   None: The instance is not launched from a private pool.
    

DedicatedHostId

String

dh-bp67acfmxazb4p\*\*\*\*

Indicates whether to create an ECS instance on a dedicated host. You cannot create spot instances on dedicated hosts. If you specify the `DedicatedHostId` parameter, the `SpotStrategy` and `SpotPriceLimit` parameters are ignored.

Call [DescribeDedicatedHosts](/help/en/dedicated-host/developer-reference/api-describededicatedhosts) to query the list of dedicated host IDs.

InstanceGeneration

String

ecs-3

The generation of the ECS instance.

HpcClusterId

String

hpc-clus\*\*\*\*

The ID of the HPC cluster to which the ECS instance belongs.

PasswordInherit

Boolean

true

Indicates whether to use the password that is pre-configured in the image.

Memory

Integer

16

The memory size, in GiB.

Specify Cpu and Memory to define the range of instance types. For example, if you set Cpu to 2 and Memory to 16, all instance types with 2 vCPUs and 16 GiB of memory are defined. Auto Scaling determines the available instance types based on factors such as I/O optimization and zones, and then creates an instance of the lowest-priced instance type.

**Note**

This configuration is valid only in cost optimization mode and when no instance type is specified in the scaling configuration.

ImageId

String

centos6u5\_64\_20G\_aliaegis\_2014\*\*\*\*.vhd

The ID of the image file that is used to create instances.

ImageFamily

String

hangzhou-daily-update

The name of the image family. Set this parameter to obtain the latest available image within the specified image family. If you have specified the `ImageId` parameter, you cannot specify this parameter.

ImageOwnerAlias

String

system

The source of the image. Valid values:

-   system: public images provided by Alibaba Cloud.
    
-   self: custom images that you created.
    
-   others: shared images or community images from other Alibaba Cloud accounts.
    
-   marketplace: Alibaba Cloud Marketplace images.
    

LoadBalancerWeight

Integer

1

The weight of the ECS instance as a backend server. Valid values: 1 to 100.

SystemDiskCategory

String

cloud

The category of the system disk. Valid values:

-   cloud: basic disk.
    
-   cloud\_efficiency: ultra disk.
    
-   cloud\_ssd: standard SSD.
    
-   ephemeral\_ssd: local SSD.
    
-   cloud\_essd: ESSD.
    
-   cloud\_auto: ESSD AutoPL disk.
    

HostName

String

LocalHost

The hostname of the ECS instance.

SystemDiskName

String

cloud\_ssd\_Test

The name of the system disk.

InternetMaxBandwidthOut

Integer

10

The maximum outbound public bandwidth, in Mbit/s.

InternetMaxBandwidthIn

Integer

10

The maximum inbound public bandwidth, in Mbit/s.

InstanceType

String

ecs.g6.large

The instance type of the ECS instance.

InstanceDescription

String

FinanceDept

The description of the ECS instance.

IoOptimized

String

none

Indicates whether the instance is I/O optimized. Valid values:

-   none: The instance is not I/O optimized.
    
-   optimized: The instance is I/O optimized.
    

RamRoleName

String

ramrole\*\*\*\*

The name of the RAM role of the ECS instance. RAM roles are provided and maintained by RAM. Call [ListRoles](/help/en/ram/api-listroles) to query the available RAM roles. For more information, see [CreateRole](/help/en/ram/api-createrole).

SystemDiskPerformanceLevel

String

PL1

The performance level of the ESSD that is used as the system disk.

Cpu

Integer

2

The number of vCPUs.

Specify Cpu and Memory to define the range of instance types. For example, if you set Cpu to 2 and Memory to 16, all instance types with 2 vCPUs and 16 GiB of memory are defined. Auto Scaling determines the available instance types based on factors such as I/O optimization and zones, and then creates an instance of the lowest-priced instance type.

**Note**

This configuration is valid only in cost optimization mode and when no instance type is specified in the scaling configuration.

ResourceGroupId

String

rg-aekzn2ou7xo\*\*\*\*

The ID of the resource group to which the ECS instance belongs.

ZoneId

String

cn-hangzhou-g

The ID of the zone where the instance is created. Call [DescribeZones](/help/en/ecs/api-describezones) to query the list of available zones.

InternetChargeType

String

PayByTraffic

The billing method for network usage. Valid values:

-   PayByBandwidth: pay-by-bandwidth. In this case, InternetMaxBandwidthOut specifies the fixed bandwidth.
    
-   PayByTraffic: pay-by-data-transfer. In this case, InternetMaxBandwidthOut specifies the maximum bandwidth. The fees are charged based on the actual data transfer.
    

ImageName

String

centos6u5\_64\_20G\_aliaegis\_20140703.vhd

The name of the image file.

ScalingConfigurationId

String

asc-bp1ezrfgoyn5kijl\*\*\*\*

The ID of the scaling configuration.

CreditSpecification

String

Standard

The performance mode of the burstable instance. Valid values:

-   Standard: standard mode. For more information about the instance performance, see the "Performance-constrained mode" section in [What are burstable instances?](/help/en/ecs/user-guide/burst-performance-instance-overview).
    
-   Unlimited: unlimited mode. For more information about the instance performance, see the "Unlimited mode" section in [What are burstable instances?](/help/en/ecs/user-guide/burst-performance-instance-overview).
    

SpotInterruptionBehavior

String

Terminate

The interruption mode of the spot instance.

DataDisks

Array of DataDisk

A collection of information about data disks.

DataDisk

PerformanceLevel

String

PL1

The performance level of the ESSD that is used as the data disk.

Description

String

FinanceDept

The description of the data disk.

SnapshotId

String

s-23f2i\*\*\*\*

The ID of the snapshot that is used to create the data disk.

Device

String

/dev/xvdb

The mount target of the data disk.

Size

Integer

200

The size of the data disk, in GiB. Valid values:

-   cloud: 5 to 2000.
    
-   cloud\_efficiency: 20 to 32768.
    
-   cloud\_ssd: 20 to 32768.
    
-   cloud\_essd: 20 to 32768.
    
-   ephemeral\_ssd: 5 to 800.
    

DiskName

String

cloud\_ssdData

The name of the data disk.

AutoSnapshotPolicyId

String

sp-bp19nq9enxqkomib\*\*\*\*

The ID of the automatic snapshot policy that is applied to the data disk.

Category

String

cloud

The category of the data disk. Valid values:

-   cloud: basic disk. The DeleteWithInstance attribute of a basic disk that is created with an instance is set to true.
    
-   cloud\_efficiency: ultra disk.
    
-   cloud\_ssd: standard SSD.
    
-   ephemeral\_ssd: local SSD.
    
-   cloud\_essd: ESSD.
    
-   cloud\_auto: ESSD AutoPL disk.
    

KMSKeyId

String

0e478b7a-4262-4802-b8cb-00d3fb40\*\*\*\*

The ID of the KMS key that is used for the data disk.

DeleteWithInstance

Boolean

true

Indicates whether the data disk is released when the instance is released. Valid values:

-   true: The data disk is released when the instance is released.
    
-   false: The data disk is not released when the instance is released.
    

Encrypted

String

false

Indicates whether the data disk is encrypted. Valid values:

-   true: The data disk is encrypted.
    
-   false: The data disk is not encrypted.
    

Categories

Array of String

cloud\_essd

The categories of the data disk. The first disk category has the highest priority. When the disk of the highest-priority category is unavailable, Auto Scaling automatically uses the disk of the next-highest-priority category. Valid values:

-   cloud: basic disk. The DeleteWithInstance attribute of a basic disk that is created with an instance is set to true.
    
-   cloud\_efficiency: ultra disk.
    
-   cloud\_ssd: standard SSD.
    
-   cloud\_essd: ESSD.
    

ProvisionedIops

Long

100

The provisioned IOPS of the data disk.

**Note**

IOPS measures the number of I/O operations that a block storage device can process per second. IOPS is a measure of the read and write performance of a block storage device.

BurstingEnabled

Boolean

false

Indicates whether to enable the performance burst feature for the data disk. Valid values:

-   true: Enable the performance burst feature.
    
-   false: Do not enable the performance burst feature.
    

**Note**

This parameter is displayed only when `DataDisk.Category` is set to `cloud_auto`.

Tags

Array of Tag

The collection of tags.

Tag

Key

String

binary

The key of tag N that you want to add to the instance. Valid values of N: 1 to 20.

The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.

Value

String

alterTable

The value of tag N that you want to add to the instance. Valid values of N: 1 to 20.

The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot start with `acs:`. It cannot contain `http://` or `https://`.

SpotPriceLimit

Array of SpotPriceModel

The collection of information about the preemptible instances.

SpotPriceModel

InstanceType

String

ecs.g6.large

The instance type of the spot instance.

PriceLimit

Float

0.125

The bid for the spot instance.

InstancePatternInfos

Array of InstancePatternInfo

The collection of information about the intelligent configuration. This parameter is used to filter instance types that meet the specified requirements.

InstancePatternInfo

MaxPrice

Float

2

The maximum hourly price that you can accept for a pay-as-you-go instance or a spot instance.

Cores

Integer

2

The number of vCPU cores of the instance type.

Memory

Float

4

The memory size of the instance type, in GiB.

InstanceFamilyLevel

String

EnterpriseLevel

The level of the instance family.

-   EntryLevel: entry level. This level of instance families provides lower costs but cannot guarantee stable computing performance. Entry-level instance families are suitable for business scenarios in which the CPU utilization is low. For more information, see [Shared instance families](/help/en/ecs/user-guide/shared-instance-families).
    
-   EnterpriseLevel: enterprise level. This level of instance families provides stable performance and dedicated resources, and are suitable for business scenarios that require high stability. For more information, see [Instance families](/help/en/ecs/user-guide/overview-of-instance-families).
    
-   CreditEntryLevel: credit entry level. This level of instance families are burstable instances that rely on CPU credits to ensure computing performance. Credit-entry-level instance families are suitable for business scenarios in which the CPU utilization is low but may burst in specific cases. For more information, see [Burstable instances](/help/en/ecs/user-guide/burst-performance-instance-overview).
    

Architectures

Array of String

X86

The architecture of the instance type. Valid values:

-   X86: x86.
    
-   Heterogeneous: heterogeneous computing, such as GPU and FPGA.
    
-   BareMental: ECS Bare Metal Instance.
    
-   Arm: Arm.
    

Default value: All architectures are included.

BurstablePerformance

String

Include

Indicates whether to include burstable instance types. Valid values:

-   Exclude: Do not include burstable instance types.
    
-   Include: Include burstable instance types.
    
-   Required: Include only burstable instance types.
    

Default value: Include.

ExcludedInstanceTypes

Array of String

ecs.n1.small/ecs.n1.\*/\*7\*

The instance types to exclude. Use the wildcard character (\*) to exclude an instance type or an entire instance family. Examples:

-   ecs.c6.large: excludes the ecs.c6.large instance type.
    
-   ecs.c6.\*: excludes all instance types of the c6 family.
    

InstanceTypeFamilies

Array of String

ecs.g6

The instance families to query. You can specify multiple instance families. Valid values of N: 1 to 10.

MinimumCpuCoreCount

Integer

2

The minimum number of vCPU cores of the instance type.

MaximumCpuCoreCount

Integer

4

The maximum number of vCPU cores of the instance type.

**Note**

`MaximumCpuCoreCount` cannot be more than four times the value of `MinimumCpuCoreCount`.

GpuSpecs

Array of String

NVIDIA V100

The GPU type.

InstanceCategories

Array of String

Compute-optimized with GPU

The categories of the instance. Valid values:

**Note**

You can specify multiple instance categories. Valid values of N: 1 to 10.

-   General-purpose: General-purpose.
    
-   Compute-optimized: Compute-optimized.
    
-   Memory-optimized: Memory-optimized.
    
-   Big data: Big data.
    
-   Local SSDs: Local SSD.
    
-   High Clock Speed: High clock speed.
    
-   Enhanced: Enhanced.
    
-   Shared: Shared.
    
-   Compute-optimized with GPU: GPU-accelerated compute-optimized.
    
-   Visual Compute-optimized: Visual compute-optimized.
    
-   Heterogeneous Service: Heterogeneous service.
    
-   Compute-optimized with FPGA: FPGA-accelerated compute-optimized.
    
-   Compute-optimized with NPU: NPU-accelerated compute-optimized.
    
-   ECS Bare Metal: ECS Bare Metal Instance.
    
-   High Performance Compute: High-performance computing.
    

CpuArchitectures

Array of String

X86

The CPU architecture of the instance type. Valid values:

**Note**

You can specify multiple CPU architectures. Valid values of N: 1 to 2.

-   X86.
    
-   ARM.
    

PhysicalProcessorModels

Array of String

Intel Xeon(Ice Lake) Platinum 8369B", "Intel Xeon(Skylake) Platinum 8163", … "Intel Xeon(Cascade Lake) Platinum 8269CY

The processor model of the instance. You can specify multiple processor models. Valid values of N: 1 to 10.

MinimumEniQuantity

Integer

2

The maximum number of elastic network interfaces (ENIs) that can be attached to an instance.

MinimumEniPrivateIpAddressQuantity

Integer

2

The maximum number of IPv4 addresses for a single elastic network interface (ENI) on an instance.

MinimumEniIpv6AddressQuantity

Integer

1

The minimum number of IPv6 addresses that an ENI of an instance type must support.

MinimumInitialCredit

Integer

12

The minimum initial vCPU credits for a t5 or t6 burstable instance.

MinimumBaselineCredit

Integer

12

The minimum baseline vCPU computing performance (the sum of all vCPUs) for a t5 or t6 burstable instance.

MinimumMemorySize

Float

4

The minimum memory size of the instance, in GiB.

MaximumMemorySize

Float

4

The maximum memory size of the instance, in GiB.

MinimumGpuAmount

Integer

2

The minimum number of GPUs for the instance. The value must be a positive integer.

MaximumGpuAmount

Integer

2

The maximum number of GPUs for the instance. The value must be a positive integer.

SystemDiskCategories

Array of String

cloud

The categories of the system disk. The first disk category has the highest priority. When the disk of the highest-priority category is unavailable, Auto Scaling automatically uses the disk of the next-highest-priority category. Valid values:

-   cloud: basic disk.
    
-   cloud\_efficiency: ultra disk.
    
-   cloud\_ssd: standard SSD.
    
-   cloud\_essd: ESSD.
    

WeightedCapacities

Array of String

4

The weight of the instance type. This parameter specifies the capacity of a single instance of the specified instance type in the scaling group. A higher weight indicates that a smaller number of instances of the specified instance type are required to meet the expected capacity.

InstanceTypes

Array of String

ecs.g6.large

The collection of ECS instance types.

SecurityGroupIds

Array of String

sg-bp18kz60mefs\*\*\*\*

The IDs of the security groups to which the ECS instance belongs. ECS instances that are in the same security group can access each other.

SchedulerOptions

Object

The scheduling options.

ManagedPrivateSpaceId

String

testManagedPrivateSpaceId

Intelligent and fully managed resource pool.

SystemDisk.Encrypted

Boolean

false

Indicates whether the system disk is encrypted. Valid values:

-   true: The system disk is encrypted.
    
-   false: The system disk is not encrypted.
    

SystemDisk.KMSKeyId

String

0e478b7a-4262-4802-b8cb-00d3fb40\*\*\*\*

The ID of the KMS key that is used for the system disk.

SystemDisk.EncryptAlgorithm

String

AES-256

The encryption algorithm that is used to encrypt the system disk. Valid values:

-   AES-256.
    
-   SM4-128.
    

SystemDisk.ProvisionedIops

Long

100

The provisioned IOPS of the system disk.

**Note**

IOPS measures the number of I/O operations that a block storage device can process per second. IOPS is a measure of the read and write performance of a block storage device.

SystemDisk.BurstingEnabled

Boolean

false

Indicates whether to enable the performance burst feature for the system disk. Valid values:

-   true: Enable the performance burst feature.
    
-   false: Do not enable the performance burst feature.
    

**Note**

This parameter is supported only when SystemDisk.Category is set to cloud\_auto.

ImageOptions.LoginAsNonRoot

Boolean

false

Indicates whether to log on to the ECS instance as the ecs-user user. Valid values:

-   true: Yes.
    
-   false: No.
    

DeletionProtection

Boolean

false

The release protection feature of the ECS instance. This parameter is applicable only to pay-as-you-go instances. It specifies whether you can release the instance using the ECS console or by calling the DeleteInstance operation. Valid values:

-   true: Enable the release protection feature. You cannot release the instance using the ECS console or by calling the DeleteInstance operation. This prevents accidental release of instances that are scaled out by Auto Scaling.
    
-   false: Disable the release protection feature. You can release the instance using the ECS console or by calling the DeleteInstance operation.
    

**Note**

This parameter does not affect scale-in activities. Pay-as-you-go instances for which the release protection feature is enabled can be released during a scale-in activity.

StorageSetId

String

ss-bp67acfmxazb4p\*\*\*\*

The ID of the storage set.

StorageSetPartitionNumber

Integer

2

The maximum number of partitions in the storage set. The value must be an integer that is greater than or equal to 2.

CustomPriorities

Array of CustomPriority

The custom priority of the ECS instance type + vSwitch combination.

**Note**

This parameter is valid only when the scaling policy of the scaling group is set to Priority Policy.

If Auto Scaling cannot create ECS instances using the ECS instance type + vSwitch combination that has a higher priority, Auto Scaling automatically uses the ECS instance type + vSwitch combination that has the next highest priority.

**Note**

If you specify custom priorities for only some ECS instance type + vSwitch combinations, the combinations that you do not specify have a lower priority than the combinations that you specify. The combinations that you do not specify are prioritized based on the order of vSwitches in the scaling group and the order of instance types in the scaling configuration. For example, the vSwitches in the scaling group are sorted as vsw1 and vsw2, and the instance types in the scaling configuration are sorted as type1 and type2. The custom priority is set to `["vsw2+type2", "vsw1+type2"]`. In this case, the final priority is `vsw2+type2` > `vsw1+type2` > `vsw1+type1` > `vsw2+type1`.

CustomPriority

InstanceType

String

ecs.g6.large

The ECS instance type.

**Note**

This instance type must be included in the list of instance types in the scaling configuration.

VswitchId

String

vsw-bp14zolna43z266bq\*\*\*\*

The ID of the vSwitch.

**Note**

This vSwitch must be included in the list of vSwitches in the scaling group.

NetworkInterfaces

Array of NetworkInterface

The list of ENIs.

NetworkInterface

InstanceType

String

Primary

The type of the ENI. Valid values:

-   Primary: primary ENI.
    
-   Secondary: secondary ENI.
    

NetworkInterfaceTrafficMode

String

HighPerformance

The communication mode of the ENI. Valid values:

-   Standard: The TCP communication mode is used.
    
-   HighPerformance: The Elastic RDMA Interface (ERI) is enabled and the RDMA communication mode is used.
    

Ipv6AddressCount

Integer

1

The number of randomly generated IPv6 addresses to assign to the primary ENI.

SecurityGroupIds

Array of String

sg-2vc3e1v7h\*\*\*\*

The ID of one or more security groups to which the ENI belongs.

SecondaryPrivateIpAddressCount

Integer

2

The number of secondary private IPv4 addresses to assign to the ENI. Valid values: 1 to 49.

-   The value cannot exceed the quota of IP addresses for the instance type. For more information, see [Instance families](/help/en/ecs/user-guide/overview-of-instance-families).
    
-   NetworkInterface.N.SecondaryPrivateIpAddressCount specifies the number of secondary private IPv4 addresses to assign to the ENI. The primary private IP address of the ENI is not included. The system randomly assigns the secondary private IPv4 addresses from the available CIDR block of the vSwitch to which the ENI is connected (NetworkInterface.N.VSwitchId).
    

DedicatedHostClusterId

String

dc-2zedxc67zqzt7lb4\*\*\*\*

The ID of the dedicated host cluster.

PasswordSetted

Boolean

false

Indicates whether a password is configured for the instance. Valid values:

-   true: A password is configured for the instance.
    
-   false: A password is not configured for the instance.
    

SecurityOptions

Object

The security options.

ConfidentialComputingMode

String

TDX

The confidential computing mode. Valid values:

-   Enclave: The ECS instance uses an Enclave to build a confidential computing environment. For more information, see [Build a confidential computing environment using Enclave](/help/en/ecs/user-guide/build-a-confidential-computing-environment-by-using-enclave).
    
-   TDX: A TDX confidential computing environment is built. For more information, see [Build a TDX confidential computing environment](/help/en/ecs/user-guide/build-a-tdx-confidential-computing-environment).
    

HttpEndpoint

String

enabled

Indicates whether to enable the instance metadata access channel. Valid values:

-   enabled: Enable the instance metadata access channel.
    
-   disabled: Disable the instance metadata access channel.
    

HttpTokens

String

optional

Indicates whether to forcibly use the security-hardened mode (IMDSv2) to access instance metadata. Valid values:

-   optional: Do not forcibly use IMDSv2.
    
-   required: Forcibly use IMDSv2. If you set this parameter to required, you cannot access instance metadata in normal mode.
    

ResourcePoolOptions

Object

The policy of the resource pool that is used to create instances.

-   This parameter is valid only when you create pay-as-you-go instances.
    

Strategy

String

PrivatePoolFirst

Resource pools include private pools that are generated after elasticity assurances or capacity reservations take effect and the public pool. You can select a resource pool to launch an instance. Valid values:

-   PrivatePoolFirst: The private pool is prioritized. If you specify ResourcePoolOptions.PrivatePoolIds, the specified private pools are prioritized. If no private pools are specified or the specified private pools have insufficient capacity, Auto Scaling automatically matches open-type private pools. If no matching private pools are available, the public pool is used to create the instance.
    
-   PrivatePoolOnly: Only the private pool is used. You must specify ResourcePoolOptions.PrivatePoolIds. If the specified private pools have insufficient capacity, the instance fails to be launched.
    
-   PublicPoolFirst: The public resource pool is prioritized. Instances are preferentially created from the public resource pool. If the public resource pool is insufficient, the private resource pool is used as a supplement. If you specify ResourcePoolOptions.PrivatePoolIds, the specified private pools are prioritized. If no private pools are specified or the specified private pools have insufficient capacity, Auto Scaling automatically matches open-type private pools.
    
-   None: No resource pool policy is used.
    

Default value: None.

PrivatePoolIds

Array of String

eap-bp67acfmxazb4\*\*\*\*

The ID of the private pool. The value can be the ID of an elasticity assurance or a capacity reservation.

## Examples

Sample request

```
http(s)://ess.aliyuncs.com/?Action=DescribeScalingConfigurations
&RegionId=cn-qingdao
&PageNumber=1
&PageSize=50
&ScalingGroupId=asg-bp17pelvl720x3v7****
&ScalingConfigurationId=["asc-bp17pelvl720x5ub****"]
&ScalingConfigurationName=["scalingcon****"]
&CommonRequestParameters
```

Sample success response

`XML` format

```
HTTP/1.1 200 OK
Content-Type:application/xml

<DescribeScalingConfigurationsResponse>
    <RequestId>473469C7-AA6F-4DC5-B3DB-A3DC0DE3****</RequestId>
    <PageNumber>1</PageNumber>
    <PageSize>50</PageSize>
    <TotalCount>1</TotalCount>
    <ScalingConfigurations>
        <DeploymentSetId>ds-bp1frxuzdg87zh4p****</DeploymentSetId>
        <CreationTime>2014-08-14T10:58Z</CreationTime>
        <ScalingConfigurationName>scalingconfigura****</ScalingConfigurationName>
        <SystemDiskDescription>Test system disk.</SystemDiskDescription>
        <KeyPairName>keypair****</KeyPairName>
        <SecurityGroupId>sg-bp18kz60mefs****</SecurityGroupId>
        <PrivatePoolOptions.Id>eap-bp67acfmxazb4****</PrivatePoolOptions.Id>
        <SystemDiskAutoSnapshotPolicyId>sp-bp12m37ccmxvbmi5****</SystemDiskAutoSnapshotPolicyId>
        <SpotStrategy>NoSpot</SpotStrategy>
        <ScalingGroupId>asg-bp17pelvl720x3v7****</ScalingGroupId>
        <Affinity>default</Affinity>
        <Tenancy>default</Tenancy>
        <SystemDiskSize>100</SystemDiskSize>
        <Ipv6AddressCount>1</Ipv6AddressCount>
        <SpotDuration>1</SpotDuration>
        <LifecycleState>Active</LifecycleState>
        <InstanceName>instance****</InstanceName>
        <SecurityEnhancementStrategy>Active</SecurityEnhancementStrategy>
        <UserData>echo hello ecs!</UserData>
        <PrivatePoolOptions.MatchCriteria>Open</PrivatePoolOptions.MatchCriteria>
        <DedicatedHostId>dh-bp67acfmxazb4p****</DedicatedHostId>
        <InstanceGeneration>ecs-3</InstanceGeneration>
        <HpcClusterId>hpc-clus****</HpcClusterId>
        <PasswordInherit>true</PasswordInherit>
        <Memory>16</Memory>
        <ImageId>centos6u5_64_20G_aliaegis_2014****.vhd</ImageId>
        <ImageFamily>hangzhou-daily-update</ImageFamily>
        <ImageOwnerAlias>system</ImageOwnerAlias>
        <LoadBalancerWeight>1</LoadBalancerWeight>
        <SystemDiskCategory>cloud</SystemDiskCategory>
        <HostName>LocalHost</HostName>
        <SystemDiskName>cloud_ssd_Test</SystemDiskName>
        <InternetMaxBandwidthOut>0</InternetMaxBandwidthOut>
        <InternetMaxBandwidthIn>200</InternetMaxBandwidthIn>
        <InstanceType>ecs.g6.large</InstanceType>
        <InstanceDescription>FinanceDept</InstanceDescription>
        <IoOptimized>none</IoOptimized>
        <RamRoleName>ramrole****</RamRoleName>
        <SystemDiskPerformanceLevel>PL1</SystemDiskPerformanceLevel>
        <Cpu>2</Cpu>
        <ResourceGroupId>rg-aekzn2ou7xo****</ResourceGroupId>
        <ZoneId>cn-hangzhou-g</ZoneId>
        <InternetChargeType>PayByTraffic</InternetChargeType>
        <ImageName>centos6u5_64_20G_aliaegis_20140703.vhd</ImageName>
        <ScalingConfigurationId>asc-bp1ezrfgoyn5kijl****</ScalingConfigurationId>
        <CreditSpecification>Standard</CreditSpecification>
        <SpotInterruptionBehavior>Terminate</SpotInterruptionBehavior>
        <DataDisks>
            <PerformanceLevel>PL1</PerformanceLevel>
            <Description>FinanceDept</Description>
            <SnapshotId>s-23f2i****</SnapshotId>
            <Device>/dev/xvdb</Device>
            <Size>200</Size>
            <DiskName>cloud_ssdData</DiskName>
            <AutoSnapshotPolicyId>sp-bp19nq9enxqkomib****</AutoSnapshotPolicyId>
            <Category>cloud</Category>
            <KMSKeyId>0e478b7a-4262-4802-b8cb-00d3fb40****</KMSKeyId>
            <DeleteWithInstance>true</DeleteWithInstance>
            <Encrypted>false</Encrypted>
            <Categories>cloud_essd</Categories>
            <ProvisionedIops>100</ProvisionedIops>
            <BurstingEnabled>false</BurstingEnabled>
        </DataDisks>
        <Tags>
            <Key>binary</Key>
            <Value>alterTable</Value>
        </Tags>
        <SpotPriceLimit>
            <InstanceType>ecs.g6.large</InstanceType>
            <PriceLimit>0.125</PriceLimit>
        </SpotPriceLimit>
        <InstancePatternInfos>
            <MaxPrice>2</MaxPrice>
            <Cores>2</Cores>
            <Memory>4</Memory>
            <InstanceFamilyLevel>EnterpriseLevel</InstanceFamilyLevel>
            <Architectures>X86</Architectures>
            <BurstablePerformance>Include</BurstablePerformance>
            <ExcludedInstanceTypes>ecs.n1.small/ecs.n1.*/*7*</ExcludedInstanceTypes>
            <InstanceTypeFamilies>["ecs.g6", "ecs.c6", … "ecs.r6"]</InstanceTypeFamilies>
            <MinimumCpuCoreCount>2</MinimumCpuCoreCount>
            <MaximumCpuCoreCount>4</MaximumCpuCoreCount>
            <GpuSpecs>["NVIDIA V100"]</GpuSpecs>
            <InstanceCategories>["Compute-optimized with GPU"]</InstanceCategories>
            <CpuArchitectures>["X86", "ARM"]</CpuArchitectures>
            <PhysicalProcessorModels>["Intel Xeon(Ice Lake) Platinum 8369B", "Intel Xeon(Skylake) Platinum 8163", … "Intel Xeon(Cascade Lake) Platinum 8269CY"]</PhysicalProcessorModels>
            <MinimumEniQuantity>2</MinimumEniQuantity>
            <MinimumEniPrivateIpAddressQuantity>2</MinimumEniPrivateIpAddressQuantity>
            <MinimumEniIpv6AddressQuantity>1</MinimumEniIpv6AddressQuantity>
            <MinimumInitialCredit>12</MinimumInitialCredit>
            <MinimumBaselineCredit>12</MinimumBaselineCredit>
            <MinimumMemorySize>4</MinimumMemorySize>
            <MaximumMemorySize>4</MaximumMemorySize>
            <MinimumGpuAmount>2</MinimumGpuAmount>
            <MaximumGpuAmount>2</MaximumGpuAmount>
        </InstancePatternInfos>
        <SystemDiskCategories>cloud</SystemDiskCategories>
        <WeightedCapacities>4</WeightedCapacities>
        <InstanceTypes>ecs.g6.large</InstanceTypes>
        <SecurityGroupIds>sg-bp18kz60mefs****</SecurityGroupIds>
        <SchedulerOptions>
            <ManagedPrivateSpaceId>testManagedPrivateSpaceId</ManagedPrivateSpaceId>
        </SchedulerOptions>
        <SystemDisk.Encrypted>false</SystemDisk.Encrypted>
        <SystemDisk.KMSKeyId>0e478b7a-4262-4802-b8cb-00d3fb40****</SystemDisk.KMSKeyId>
        <SystemDisk.EncryptAlgorithm>AES-256</SystemDisk.EncryptAlgorithm>
        <SystemDisk.ProvisionedIops>100</SystemDisk.ProvisionedIops>
        <SystemDisk.BurstingEnabled>false</SystemDisk.BurstingEnabled>
        <ImageOptions.LoginAsNonRoot>false</ImageOptions.LoginAsNonRoot>
        <DeletionProtection>false</DeletionProtection>
        <StorageSetId>ss-bp67acfmxazb4p****</StorageSetId>
        <StorageSetPartitionNumber>2</StorageSetPartitionNumber>
        <CustomPriorities>
            <InstanceType>ecs.g6.large</InstanceType>
            <VswitchId>vsw-bp14zolna43z266bq****</VswitchId>
        </CustomPriorities>
        <NetworkInterfaces>
            <InstanceType>Primary</InstanceType>
            <NetworkInterfaceTrafficMode>HighPerformance</NetworkInterfaceTrafficMode>
            <Ipv6AddressCount>1</Ipv6AddressCount>
            <SecurityGroupIds>sg-2vc3e1v7h****</SecurityGroupIds>
        </NetworkInterfaces>
        <DedicatedHostClusterId>dc-2zedxc67zqzt7lb4****</DedicatedHostClusterId>
    </ScalingConfigurations>
</DescribeScalingConfigurationsResponse>
```

`JSON` format

```
HTTP/1.1 200 OK
Content-Type:application/json

{
  "RequestId" : "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****",
  "PageNumber" : 1,
  "PageSize" : 50,
  "TotalCount" : 1,
  "ScalingConfigurations" : [ {
    "DeploymentSetId" : "ds-bp1frxuzdg87zh4p****",
    "CreationTime" : "2014-08-14T10:58Z",
    "ScalingConfigurationName" : "scalingconfigura****",
    "SystemDiskDescription" : "Test system disk.",
    "KeyPairName" : "keypair****",
    "SecurityGroupId" : "sg-bp18kz60mefs****",
    "PrivatePoolOptions.Id" : "eap-bp67acfmxazb4****",
    "SystemDiskAutoSnapshotPolicyId" : "sp-bp12m37ccmxvbmi5****",
    "SpotStrategy" : "NoSpot",
    "ScalingGroupId" : "asg-bp17pelvl720x3v7****",
    "Affinity" : "default",
    "Tenancy" : "default",
    "SystemDiskSize" : 100,
    "Ipv6AddressCount" : 1,
    "SpotDuration" : 1,
    "LifecycleState" : "Active",
    "InstanceName" : "instance****",
    "SecurityEnhancementStrategy" : "Active",
    "UserData" : "echo hello ecs!",
    "PrivatePoolOptions.MatchCriteria" : "Open",
    "DedicatedHostId" : "dh-bp67acfmxazb4p****",
    "InstanceGeneration" : "ecs-3",
    "HpcClusterId" : "hpc-clus****",
    "PasswordInherit" : true,
    "Memory" : 16,
    "ImageId" : "centos6u5_64_20G_aliaegis_2014****.vhd",
    "ImageFamily" : "hangzhou-daily-update",
    "ImageOwnerAlias" : "system",
    "LoadBalancerWeight" : 1,
    "SystemDiskCategory" : "cloud",
    "HostName" : "LocalHost",
    "SystemDiskName" : "cloud_ssd_Test",
    "InternetMaxBandwidthOut" : 0,
    "InternetMaxBandwidthIn" : 200,
    "InstanceType" : "ecs.g6.large",
    "InstanceDescription" : "FinanceDept",
    "IoOptimized" : "none",
    "RamRoleName" : "ramrole****",
    "SystemDiskPerformanceLevel" : "PL1",
    "Cpu" : 2,
    "ResourceGroupId" : "rg-aekzn2ou7xo****",
    "ZoneId" : "cn-hangzhou-g",
    "InternetChargeType" : "PayByTraffic",
    "ImageName" : "centos6u5_64_20G_aliaegis_20140703.vhd",
    "ScalingConfigurationId" : "asc-bp1ezrfgoyn5kijl****",
    "CreditSpecification" : "Standard",
    "SpotInterruptionBehavior" : "Terminate",
    "DataDisks" : [ {
      "PerformanceLevel" : "PL1",
      "Description" : "FinanceDept",
      "SnapshotId" : "s-23f2i****",
      "Device" : "/dev/xvdb",
      "Size" : 200,
      "DiskName" : "cloud_ssdData",
      "AutoSnapshotPolicyId" : "sp-bp19nq9enxqkomib****",
      "Category" : "cloud",
      "KMSKeyId" : "0e478b7a-4262-4802-b8cb-00d3fb40****",
      "DeleteWithInstance" : true,
      "Encrypted" : "false",
      "Categories" : [ "cloud_essd" ],
      "ProvisionedIops" : 100,
      "BurstingEnabled" : false
    } ],
    "Tags" : [ {
      "Key" : "binary",
      "Value" : "alterTable"
    } ],
    "SpotPriceLimit" : [ {
      "InstanceType" : "ecs.g6.large",
      "PriceLimit" : 0.125
    } ],
    "InstancePatternInfos" : [ {
      "MaxPrice" : 2,
      "Cores" : 2,
      "Memory" : 4,
      "InstanceFamilyLevel" : "EnterpriseLevel",
      "Architectures" : [ "X86" ],
      "BurstablePerformance" : "Include",
      "ExcludedInstanceTypes" : [ "ecs.n1.small/ecs.n1.*/*7*" ],
      "InstanceTypeFamilies" : [ "[\"ecs.g6\", \"ecs.c6\", … \"ecs.r6\"]" ],
      "MinimumCpuCoreCount" : 2,
      "MaximumCpuCoreCount" : 4,
      "GpuSpecs" : [ "[\"NVIDIA V100\"]" ],
      "InstanceCategories" : [ "[\"Compute-optimized with GPU\"]" ],
      "CpuArchitectures" : [ "[\"X86\", \"ARM\"]" ],
      "PhysicalProcessorModels" : [ "[\"Intel Xeon(Ice Lake) Platinum 8369B\", \"Intel Xeon(Skylake) Platinum 8163\", … \"Intel Xeon(Cascade Lake) Platinum 8269CY\"]" ],
      "MinimumEniQuantity" : 2,
      "MinimumEniPrivateIpAddressQuantity" : 2,
      "MinimumEniIpv6AddressQuantity" : 1,
      "MinimumInitialCredit" : 12,
      "MinimumBaselineCredit" : 12,
      "MinimumMemorySize" : 4,
      "MaximumMemorySize" : 4,
      "MinimumGpuAmount" : 2,
      "MaximumGpuAmount" : 2
    } ],
    "SystemDiskCategories" : [ "cloud" ],
    "WeightedCapacities" : [ "4" ],
    "InstanceTypes" : [ "ecs.g6.large" ],
    "SecurityGroupIds" : [ "sg-bp18kz60mefs****" ],
    "SchedulerOptions" : {
      "ManagedPrivateSpaceId" : "testManagedPrivateSpaceId"
    },
    "SystemDisk.Encrypted" : false,
    "SystemDisk.KMSKeyId" : "0e478b7a-4262-4802-b8cb-00d3fb40****",
    "SystemDisk.EncryptAlgorithm" : "AES-256",
    "SystemDisk.ProvisionedIops" : 100,
    "SystemDisk.BurstingEnabled" : false,
    "ImageOptions.LoginAsNonRoot" : false,
    "DeletionProtection" : false,
    "StorageSetId" : "ss-bp67acfmxazb4p****",
    "StorageSetPartitionNumber" : 2,
    "CustomPriorities" : [ {
      "InstanceType" : "ecs.g6.large",
      "VswitchId" : "vsw-bp14zolna43z266bq****"
    } ],
    "NetworkInterfaces" : [ {
      "InstanceType" : "Primary",
      "NetworkInterfaceTrafficMode" : "HighPerformance",
      "Ipv6AddressCount" : 1,
      "SecurityGroupIds" : [ "sg-2vc3e1v7h****" ]
    } ],
    "DedicatedHostClusterId" : "dc-2zedxc67zqzt7lb4****"
  } ]
}
```

## Error codes

For a list of error codes, see the [Error Center](https://error-center.alibabacloud.com/status/product/Ess).
