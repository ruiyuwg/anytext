Creates an auto provisioning group.

## Operation description

## [](#usage-notes)[](#)Usage notes

-   Auto Provisioning is a service that allows quick deployment of an instance cluster that consists of spot instances and pay-as-you-go instances. Auto Provisioning supports push-button deployment of instance clusters across different billing methods, instance families, and zones. For more information, see [Use auto provisioning group-related API operations to create multiple ECS instances at the same time](/help/en/ecs/user-guide/use-auto-provisioning-group-related-api-operations-to-create-multiple-ecs-instances-at-the-same-time).
-   Auto Provisioning uses auto provisioning groups to schedule and maintain computing resources. You can use auto provisioning groups to obtain a steady supply of computing resources. This helps reduce the impact on compute capacity when spot instances are reclaimed.
-   Auto Provisioning is provided free of charge. However, you are charged for instance resources that are created in auto provisioning groups. For more information, see [Overview of spot instances](/help/en/ecs/user-guide/what-is-a-spot-instance) and [Pay-as-you-go](/help/en/ecs/pay-as-you-go-1).
-   When you specify both a launch template (`LaunchTemplateId`) and extended configurations (`LaunchConfiguration.*` parameters), LaunchTemplateId takes precedence.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateAutoProvisioningGroup)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateAutoProvisioningGroup)

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

ecs:CreateAutoProvisioningGroup

create

\*All Resources

`*`

none

-   ram:CreateServiceLinkedRole

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

Yes

The ID of the region in which to create the auto provisioning group. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

ResourceGroupId

string

No

The ID of the resource group to which to assign the auto provisioning group.

rg-bp67acfmxazb4p\*\*\*\*

AutoProvisioningGroupName

string

No

The name of the auto provisioning group. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http://` or `https://`. The name can contain letters, digits, colons (:), underscores (\_), and hyphens (-).

apg-test

AutoProvisioningGroupType

string

No

The delivery type of the auto provisioning group. Valid values:

-   request: one-time asynchronous delivery. When the auto provisioning group is started, it attempts to asynchronously deliver an instance cluster that meets the target capacity only once. The group does not retry the operation regardless of whether all the instances are delivered.
-   instant: one-time synchronous delivery. When the auto provisioning group is started, it attempts to synchronously deliver an instance cluster that meets the target capacity only once. The list of delivered instances and the causes of delivery failures are returned in the response.
-   maintain: continuous delivery. When the auto provisioning group is started, it attempts to deliver an instance cluster that meets the target capacity, and monitors the real-time capacity. If the target capacity of the auto provisioning group is not reached, the auto provisioning group continues to create instances until the target capacity is reached.

Default value: maintain.

maintain

SpotAllocationStrategy

string

No

The policy for creating spot instances. Valid values:

-   lowest-price: cost optimization policy. The auto provisioning group selects the lowest-priced instance type to create instances.
-   diversified: balanced distribution policy. The auto provisioning group creates instances in zones that are specified in extended configurations and then evenly distributes the instances across the zones.
-   capacity-optimized: capacity-optimized distribution policy. The auto provisioning group creates instances of the optimal instance types across the optimal zones based on resource availability.

Default value: lowest-price.

diversified

SpotInstanceInterruptionBehavior

string

No

The operation to be performed on the spot instance when it is interrupted. Valid values:

-   stop: stops the spot instance.
-   terminate: releases the spot instance.

Default value: terminate.

terminate

SpotInstancePoolsToUseCount

integer

No

The number of spot instances of the lowest-priced instance type to be created by the auto provisioning group. This parameter takes effect when `SpotAllocationStrategy` is set to `lowest-price`.

The value must be smaller than the N value specified in `LaunchTemplateConfig.N`.

2

PayAsYouGoAllocationStrategy

string

No

The policy for creating pay-as-you-go instances. Valid values:

-   lowest-price: cost optimization policy. The auto provisioning group selects the lowest-priced instance type to create instances.
-   prioritized: priority-based policy. The auto provisioning group creates instances based on the priority specified by `LaunchTemplateConfig.N.Priority`.

Default value: lowest-price.

prioritized

ExcessCapacityTerminationPolicy

string

No

Specifies whether to release scaled-in instances when the real-time capacity of the auto provisioning group exceeds the target capacity and the group is triggered to scale in. Valid values:

-   termination: releases the scaled-in instances in the auto provisioning group.
-   no-termination: removes the scaled-in instances from the auto provisioning group but does not release the instances.

Default value: no-termination.

termination

ValidFrom

string

No

The time at which to start the auto provisioning group. The period of time between this point in time and the point in time specified by `ValidUntil` is the validity period of the auto provisioning group.

Specify the time in the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

By default, an auto provisioning group is started immediately after it is created.

2019-04-01T15:10:20Z

ValidUntil

string

No

The time at which the auto provisioning group expires. The period of time between this point in time and the point in time specified by `ValidFrom` is the validity period of the auto provisioning group.

Specify the time in the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

Default value: 2099-12-31T23:59:59Z.

2019-06-01T15:10:20Z

TerminateInstancesWithExpiration

boolean

No

Specifies whether to release instances in the auto provisioning group when the group expires. Valid values:

-   true: releases the instances.
-   false: only removes the instances from the auto provisioning group but does not release them.

Default value: false.

true

TerminateInstances

boolean

No

Specifies whether to release instances in the auto provisioning group when the auto provisioning group is deleted. Valid values:

-   true: releases the instances.
-   false: retains the instances.

Default value: false.

true

MaxSpotPrice

float

No

The maximum price of spot instances in the auto provisioning group.

**Note** When both `MaxSpotPrice` and `LaunchTemplateConfig.N.MaxPrice` are specified, the smaller one of the two parameter values is used.

2

TotalTargetCapacity

string

Yes

The total target capacity of the auto provisioning group. The value must be a positive integer.

The total target capacity of the auto provisioning group must be greater than or equal to the sum of the target capacity of pay-as-you-go instances specified by `PayAsYouGoTargetCapacity` and the target capacity of spot instances specified by `SpotTargetCapacity`.

60

PayAsYouGoTargetCapacity

string

No

The target capacity of pay-as-you-go instances in the auto provisioning group. The value must be less than or equal to the `TotalTargetCapacity` value.

30

SpotTargetCapacity

string

No

The target capacity of spot instances in the auto provisioning group. The value must be less than or equal to the `TotalTargetCapacity` value.

20

DefaultTargetCapacityType

string

No

The type of supplemental instances. When the sum of the `PayAsYouGoTargetCapacity` and `SpotTargetCapacity` values is smaller than the `TotalTargetCapacity` value, the auto provisioning group creates instances of the specified type to meet the total target capacity. Valid values:

-   PayAsYouGo: pay-as-you-go
-   Spot: spot instance

Default value: Spot.

Spot

LaunchTemplateId

string

No

The ID of the launch template associated with the auto provisioning group. You can call the [DescribeLaunchTemplates](/help/en/ecs/api-describelaunchtemplates) operation to query available launch templates. When both LaunchTemplateId and `LaunchConfiguration.*` parameters are specified, LaunchTemplateId takes precedence.

lt-bp1fgzds4bdogu03\*\*\*\*

LaunchTemplateVersion

string

No

The version of the launch template associated with the auto provisioning group. You can call the [DescribeLaunchTemplateVersions](/help/en/ecs/api-describelaunchtemplateversions) operation to query the versions of available launch templates.

Default value: the default version of the launch template.

1

Description

string

No

The description of the auto provisioning group.

testDescription

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](/help/en/ecs/developer-reference/how-to-ensure-idempotence).

0c593ea1-3bea-11e9-b96b-88e9fe637760

LaunchConfiguration.ImageId

string

No

The ID of the image to be used to create the instance. You can call the [DescribeImages](/help/en/ecs/api-describeimages) operation to query available image resources. When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

m-bp1g7004ksh0oeuc\*\*\*\*

LaunchConfiguration.SecurityGroupId

string

No

The ID of the security group to which to assign the instance. When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

sg-bp15ed6xe1yxeycg\*\*\*\*

LaunchConfiguration.IoOptimized

string

No

Specifies whether the instance is I/O optimized. Valid values:

-   none: The instance is not I/O optimized.
-   optimized: The instance is I/O optimized.

For instances of retired instance types, the default value is none. For instances of other instance types, the default value is optimized.

When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

optimized

LaunchConfiguration.InternetChargeType

string

No

The billing method for network usage. Valid values:

-   PayByBandwidth: pay-by-bandwidth
-   PayByTraffic: pay-by-traffic

**Note** When the pay-by-traffic billing method for network usage is used, the maximum inbound and outbound bandwidth values are used as the upper limits of bandwidth instead of guaranteed performance specifications. When demands outstrip resource supplies, the maximum bandwidths may be limited. If you want guaranteed bandwidth for your instance, use the pay-by-bandwidth billing method.

When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

PayByTraffic

LaunchConfiguration.InternetMaxBandwidthIn

integer

No

The maximum inbound public bandwidth. Unit: Mbit/s. Valid values:

-   When the maximum outbound public bandwidth is less than or equal to 10 Mbit/s, the valid values of this parameter are 1 to 10 and the default value is 10.
-   When the maximum outbound public bandwidth is greater than 10 Mbit/s, the valid values of this parameter are 1 to the value of `LaunchConfiguration.InternetMaxBandwidthOut`, and the default value is the value of `LaunchConfiguration.InternetMaxBandwidthOut`.

When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

10

LaunchConfiguration.InternetMaxBandwidthOut

integer

No

The maximum outbound public bandwidth. Unit: Mbit/s. Valid values: 0 to 100.

Default value: 0.

When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

10

LaunchConfiguration.InstanceName

string

No

The instance name. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http://` or `https://`. The name can contain letters, digits, colons (:), underscores (\_), periods (.), and hyphens (-).

The default value of this parameter is the `InstanceId` value.

When you batch create instances, you can batch configure sequential names for the instances. For more information, see [Batch configure sequential names or hostnames for multiple instances](/help/en/ecs/user-guide/batch-configure-sequential-names-or-hostnames-for-multiple-instances).

When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

k8s-node-\[1,4\]-alibabacloud

LaunchConfiguration.HostName

string

No

The instance hostname. Take note of the following items:

-   The hostname cannot start or end with a period (.) or hyphen (-). The hostname cannot contain consecutive periods (.) or hyphens (-).
-   For Windows instances, the hostname must be 2 to 15 characters in length and cannot contain periods (.) or contain only digits. It can contain letters, digits, and hyphens (-).
-   For instances that run other operating systems such as Linux, the hostname must be 2 to 64 characters in length. You can use periods (.) to separate a hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).
-   You cannot specify both `LaunchConfiguration.HostName` and `LaunchConfiguration.HostNames.N`. Otherwise, an error is returned.
-   When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

k8s-node-\[1,4\]-ecshost

LaunchConfiguration.InstanceDescription

string

No

The instance description. The description must be 2 to 256 characters in length. The description can contain letters and cannot start with `http://` or `https://`. When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

Instance\_Description

LaunchConfiguration.KeyPairName

string

No

The key pair name.

-   For Windows instances, this parameter is ignored. This parameter is empty by default.
-   By default, password-based logon is disabled for Linux instances.

When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

KeyPair\_Name

LaunchConfiguration.RamRoleName

string

No

The name of the instance Resource Access Management (RAM) role. You can call the [ListRoles](/help/en/ram/api-listroles) operation provided by RAM to query the instance RAM roles that you created. When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

RAM\_Name

LaunchConfiguration.SecurityEnhancementStrategy

string

No

Specifies whether to enable security hardening. Valid values:

-   Active: enables security hardening. This value is applicable only to public images.
-   Deactive: disables security hardening. This value is applicable to all image types.

When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

Active

LaunchConfiguration.UserData

string

No

The instance user data. The user data must be encoded in Base64. The raw data can be up to 32 KB in size. When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

ZWNobyBoZWxsbyBlY3Mh

LaunchConfiguration.SystemDiskCategory

string

No

The category of the system disk. Valid values:

-   cloud\_efficiency: ultra disk
-   cloud\_ssd: standard SSD
-   cloud\_essd: enhanced SSD (ESSD)
-   cloud: basic disk

For non-I/O optimized instances of retired instance types, the default value is cloud. For other instances, the default value is cloud\_efficiency.

When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

cloud\_ssd

LaunchConfiguration.SystemDiskSize

integer

No

The size of the system disk. Valid values: 20 to 500. Unit: GiB. The value must be at least 20 and greater than or equal to the size of the image specified by LaunchConfiguration.ImageId.

Default value: 40 or the size of the image specified by LaunchConfiguration.ImageId, whichever is greater.

When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

40

LaunchConfiguration.SystemDiskName

string

No

The name of the system disk. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http://` or `https://`. The name can contain letters, digits, periods (.), colons (:), underscores (\_), and hyphens (-).

This parameter is empty by default.

When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

cloud\_ssdSystem

LaunchConfiguration.SystemDiskDescription

string

No

The description of the system disk. The description must be 2 to 256 characters in length. The description can contain letters and cannot start with `http://` or `https://`.

When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

SystemDisk\_Description

LaunchConfiguration.SystemDiskPerformanceLevel

string

No

The performance level of the ESSD to be used as the system disk. Valid values:

-   PL0 (default): A single ESSD can deliver up to 10,000 random read/write IOPS.
-   PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
-   PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
-   PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.

For more information about ESSD performance levels, see [ESSDs](/help/en/ecs/user-guide/essds) .

When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

PL0

LaunchConfiguration.PasswordInherit

boolean

No

Specifies whether to use the password preset in the image. Valid values:

-   true: uses the password preset in the image.
-   false: does not use the password preset in the image.

When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

true

LaunchConfiguration.ResourceGroupId

string

No

The ID of the resource group to which to assign the instance. When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

rg-bp67acfmxazb4p\*\*\*\*

LaunchConfiguration.CreditSpecification

string

No

The performance mode of the burstable instance. Valid values:

-   Standard: the standard mode. For more information, see the "Standard mode" section in the [Overview of burstable instances](/help/en/ecs/user-guide/burst-performance-instance-overview) topic.
-   Unlimited: the unlimited mode. For more information, see the "Unlimited mode" section in the [Overview of burstable instances](/help/en/ecs/user-guide/burst-performance-instance-overview) topic.

This parameter is empty by default.

When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

Standard

LaunchConfiguration.Password

string

No

The instance password. The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The password can contain the following special characters:

``( ) ` ~ ! @ # $ % ^ & * - _ + = | { }`` : ; ' < > , . ? /\`\` For Windows instances, the password cannot start with a forward slash (/). When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence. \`

EcsV587!

LaunchConfiguration.DeploymentSetId

string

No

The ID of the deployment set.

ds-bp1frxuzdg87zh4p\*\*\*\*

LaunchTemplateConfig

array<object>

No

The extended configurations of the launch template.

object

No

Extended configuration N of the launch template.

VSwitchId

string

No

The ID of the vSwitch in extended configuration N. The zone of the ECS instances created from the extended configuration is determined by the vSwitch.

**Note** If you specify one or more `LaunchTemplateConfig.N.*` parameters, you must also specify `LaunchTemplateConfig.N.VSwitchId`.

vsw-sn5bsitu4lfzgc5o7\*\*\*\*

MaxPrice

double

No

The maximum price of spot instances in extended configuration N.

**Note** If you specify one or more `LaunchTemplateConfig.N.*` parameters, you must also specify `LaunchTemplateConfig.N.MaxPrice`.

3

Priority

integer

No

The priority of extended configuration N. A value of 0 indicates the highest priority. Valid values: 0 to ∞.

1

InstanceType

string

No

The instance type in extended configuration N. Valid values of N: 1 to 20. For information about the valid values of this parameter, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families).

ecs.g5.large

WeightedCapacity

double

No

The weight of the instance type in extended configuration N. A greater weight indicates that a single instance has more computing power and fewer instances are required. The value must be greater than 0.

The weight is calculated based on the computing power of the specified instance type and the minimum computing power of a single instance in the cluster to be created by the auto provisioning group. For example, assume that the minimum computing power of a single instance is 8 vCPUs and 60 GiB of memory.

-   For an instance type with 8 vCPUs and 60 GiB of memory, you can set the weight to 1.
-   For an instance type with 16 vCPUs and 120 GiB of memory, you can set the weight to 2.

2

MaxQuantity

integer

No

**Note** This parameter is in invitational preview and is not publicly available.

false

Cores

array

No

The numbers of vCPUs of instance types.

integer

No

Number N of vCPUs of the instance type. This parameter is used to filter instance types. For more information, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families). Valid values of N: 1 to 10.

2

Memories

array

No

The memory sizes of instance types.

float

No

Memory size N of the instance type. Unit: GiB. This parameter is used to filter instance types. For more information, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families). Valid values of N: 1 to 10.

4

InstanceFamilyLevel

string

No

The instance family level of the instance type in extended configuration N. This parameter is used to filter instance types. Valid values of Nextended configuration N, Valid values:

-   EntryLevel: entry level (shared instance types). Instance types of this level are the most cost-effective but may not ensure stable computing performance. Instance types of this level are suitable for scenarios in which the CPU utilization is low. For more information, see [Shared instance families](/help/en/ecs/user-guide/shared-instance-families).
-   EnterpriseLevel: enterprise level. Instance types of this level provide stable performance and dedicated resources and are suitable for business scenarios that require high stability. For more information, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families).
-   CreditEntryLevel: credit entry level. This value is valid only for burstable instances. CPU credits are used to ensure computing performance. Instance types of this level are suitable for scenarios in which the CPU utilization is low but may fluctuate in specific cases. For information about burstable instances, see [Overview](/help/en/ecs/user-guide/burst-performance-instance-overview) .

Valid values of N: 1 to 10.

EnterpriseLevel

ExcludedInstanceTypes

array

No

The instance types that you want to exclude.

string

No

Instance type N that you want to exclude in extended configuration N. You can use an asterisk (\*) as the wildcard character to exclude an instance type or instance family. Examples:

-   ecs.c6.large: excludes the ecs.c6.large instance type.
-   ecs.c6.\*: excludes the c6 instance family.

ecs.n1.small/ecs.n1.\*/\*7\*

Architectures

array

No

The architectures of the instance types.

string

No

Architecture N of the instance type in extended configuration N. Valid values:

-   X86: x86 architecture.
-   Heterogeneous: heterogeneous computing, such as GPU-accelerated or FPGA-accelerated.
-   BareMetal: ECS Bare Metal Instance.
-   Arm: Arm architecture.
-   SuperComputeCluster: Super Computing Cluster.

By default, all values are included.

X86

BurstablePerformance

string

No

Specifies whether to include burstable instance types. Valid values:

-   Exclude: excludes burstable instance types.
-   Include: includes burstable instance types.
-   Required: includes only burstable instance types.

Default value: Include.

Include

ImageId

string

No

The ID of the image. You can use this parameter to specify the image that is used by the current resource pool. If you do not specify this parameter, the image that is configured in `LaunchConfiguration.ImageId` or the launch template is used by default. You can call the [DescribeImages](/help/en/ecs/api-describeimages) operation to query the available images. Note: This parameter is supported only when `AutoProvisioningGroupType` is set to instant.

aliyun\_3\_x64\_20G\_alibase\_20210425.vhd

LaunchConfiguration.DataDisk

array<object>

No

The cloud disks in the extended configurations of the launch template.

object

No

The cloud disk in the extended configurations of the launch template.

PerformanceLevel

string

No

The performance level of the Enterprise SSD (ESSD) to use as data disk N. The value of N in this parameter must be the same as the value of N in `LaunchConfiguration.DataDisk.N.Category`. Valid values:

-   PL0: A single ESSD can deliver up to 10000 random read/write IOPS.
-   PL1 (default): A single ESSD can deliver up to 50000 random read/write IOPS.
-   PL2: A single ESSD can deliver up to 100000 random read/write IOPS.
-   PL3: A single ESSD can deliver up to 1000000 random read/write IOPS.

For information about ESSD performance levels, see [ESSDs](/help/en/ecs/user-guide/essds) .

When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

PL1

KmsKeyId

string

No

The ID of the Key Management Service (KMS) key to use for data disk N. When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

0e478b7a-4262-4802-b8cb-00d3fb40\*\*\*\*

Description

string

No

The description of data disk N. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`. When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

DataDisk\_Description

SnapshotId

string

No

The ID of the snapshot to use to create data disk N. Valid values of N: 1 to 16.

If you specify this parameter, `LaunchConfiguration.DataDisk.N.Size` is ignored. The size of data disk N is the same as that of the snapshot specified by this parameter. Use snapshots created after July 15, 2013. Otherwise, an error is returned and your request is rejected.

When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

s-bp17441ohwka0yuh\*\*\*\*

Size

integer

No

The size of data disk N. Valid values of N: 1 to 16. Unit: GiB. Valid values:

-   Valid values if you set LaunchConfiguration.DataDisk.N.Category to cloud\_efficiency: 20 to 32768.
    
-   Valid values if you set LaunchConfiguration.DataDisk.N.Category to cloud\_ssd: 20 to 32768.
    
-   Valid values if you set LaunchConfiguration.DataDisk.N.Category to cloud\_essd: vary based on the `LaunchConfiguration.DataDisk.N.PerformanceLevel` value.
    
    -   Valid values if you set LaunchConfiguration.DataDisk.N.PerformanceLevel to PL0: 40 to 32768.
    -   Valid values if you set LaunchConfiguration.DataDisk.N.PerformanceLevel to PL1: 20 to 32768.
    -   Valid values if you set LaunchConfiguration.DataDisk.N.PerformanceLevel to PL2: 461 to 32768.
    -   Valid values if you set LaunchConfiguration.DataDisk.N.PerformanceLevel to PL3: 1261 to 32768.
-   Valid values if you set LaunchConfiguration.DataDisk.N.Category to cloud: 5 to 2000.
    

**Note** The value of this parameter must be greater than or equal to the size of the snapshot specified by `LaunchConfiguration.DataDisk.N.SnapshotId`.

When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

20

Device

string

No

The mount point of data disk N. When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

/dev/vd1

DiskName

string

No

The name of data disk N. The name must be 2 to 128 characters in length. The name must start with a letter but cannot start with `http://` or `https://`. The name can contain letters, digits, periods (.), colons (:), underscores (\_), and hyphens (-).

This parameter is left empty by default.

When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

cloud\_ssdData

Category

string

No

The category of data disk N. Valid values of N: 1 to 16. Valid values:

-   cloud\_efficiency: utra disk.
-   cloud\_ssd: standard SSD.
-   cloud\_essd: ESSD.
-   cloud: basic disk.

For I/O optimized instances, the default value is cloud\_efficiency. For non-I/O optimized instances, the default value is cloud.

When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

cloud\_ssd

DeleteWithInstance

boolean

No

Specifies whether to release data disk N when the instance to which the data disk is attached is released. Valid values:

-   true: releases data disk N when the associated instance is released.
-   false: does not release data disk N when the associated instance is released.

Default value: true.

When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

true

Encrypted

boolean

No

Specifies whether to encrypt data disk N. Valid values:

-   true: encrypts system disk N.
-   false: does not encrypt system disk N.

Default value: false. Valid values:

When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

false

EncryptAlgorithm

string

No

**Note** This parameter is not publicly available.

null

ProvisionedIops

long

No

The provisioned read/write IOPS of the ESSD AutoPL disk to use as the system disk. Valid values: 0 to min{50,000, 1,000 × Capacity - Baseline IOPS}.

Baseline IOPS = min{1,800 + 50 × Capacity, 50,000}.

**Note** This parameter is available only if you set LaunchConfiguration.DataDisk.N.Category to cloud\_auto. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

40000

BurstingEnabled

boolean

No

Specifies whether to enable the performance burst feature for the system disk. Valid values:

-   true: force attaches the disk to the instance.
-   false: disables the performance burst feature for the system disk.

**Note** This parameter is available only if you set LaunchConfiguration.DataDisk.N.Category to cloud\_auto. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

false

AutoSnapshotPolicyId

string

No

The ID of the automatic snapshot policy to apply to data disk N.

When you specify this parameter, take note of the following items:

-   This parameter takes effect only when the AutoProvisioningGroupType parameter is set to instant.

sp-bp67acfmxazb4p\*\*\*\*

LaunchConfiguration.Tag

array<object>

No

The tag in the extended configurations of the launch template.

object

No

The tag in the extended configurations of the launch template.

Key

string

No

The key of the tag. Valid values of N: 1 to 20. The tag key cannot be an empty string. It can be up to 128 characters in length and cannot start with acs: or aliyun. It cannot contain `http://` or `https://`. If both the LaunchTemplateId and LaunchConfiguration.\* parameters are specified, the LaunchTemplateId parameter takes precedence.

TestKey

Value

string

No

The value of the tag. Valid values of N: 1 to 20. The tag value can be an empty string. It can be up to 128 characters in length. It cannot start with acs: or contain `http://` or `https://`. If both the LaunchTemplateId and LaunchConfiguration.\* parameters are specified, the LaunchTemplateId parameter takes precedence.

TestValue

SystemDiskConfig

array<object>

No

The information of system disks on the instance.

object

No

The information of system disks on the instance.

DiskCategory

string

No

The category of the system disk. You can specify multiple disk categories, and the disk categories are prioritized in the order in which they are specified. If a specified disk category is unavailable, the system uses the next available disk category. Valid values:

-   cloud\_efficiency: ultra disk.
-   cloud\_ssd: standard SSD.
-   cloud\_essd: ESSD
-   cloud: basic disk.

cloud\_ssd

DataDiskConfig

array<object>

No

The information of data disks on the instance.

object

No

The information of data disks on the instance.

DiskCategory

string

No

The category of data disk N. You can use this parameter to specify multiple disk categories, and the disk categories are prioritized in the order in which they are specified. If a specified disk category is unavailable, the system uses the next available disk category. Valid values:

-   cloud\_efficiency: ultra disk
-   cloud\_ssd: standard SSD
-   cloud\_essd: ESSD
-   cloud: basic disk

cloud\_efficiency

LaunchConfiguration.HostNames

array

No

The hostname of instance N. You can use this parameter to specify different hostnames for multiple instances. Take note of the following items:

-   This parameter takes effect only when `AutoProvisioningGroupType` is set to instant.
-   The value of N indicates the number of instances. Valid values of N: 1 to 1000. The value of N must be the same as the TotalTargetCapacity value.
-   The hostname cannot start or end with a period (.) or hyphen (-). The hostname cannot contain consecutive periods (.) or hyphens (-).
-   For Windows instances, the hostname must be 2 to 15 characters in length and cannot contain periods (.) or contain only digits. The hostname can contain letters, digits, and hyphens (-).
-   For instances that run other operating systems such as Linux, the hostname must be 2 to 64 characters in length. You can use periods (.) to separate the hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).
-   You cannot specify both `LaunchConfiguration.HostName` and `LaunchConfiguration.HostNames.N`. Otherwise, an error is returned.
-   When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

string

No

The hostname of instance N. You can use this parameter to specify different hostnames for multiple instances. Take note of the following items:

-   This parameter takes effect only when `AutoProvisioningGroupType` is set to instant.
-   The value of N indicates the number of instances. Valid values of N: 1 to 1000. The value of N must be the same as the TotalTargetCapacity value.
-   The hostname cannot start or end with a period (.) or hyphen (-). The hostname cannot contain consecutive periods (.) or hyphens (-).
-   For Windows instances, the hostname must be 2 to 15 characters in length and cannot contain periods (.) or contain only digits. The hostname can contain letters, digits, and hyphens (-).
-   For instances that run other operating systems such as Linux, the hostname must be 2 to 64 characters in length. You can use periods (.) to separate the hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).
-   You cannot specify both `LaunchConfiguration.HostName` and `LaunchConfiguration.HostNames.N`. Otherwise, an error is returned.
-   When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

ecs-host-01

MinTargetCapacity

string

No

The minimum target capacity of the auto provisioning group. The value must be a positive integer. When you specify this parameter, take note of the following items:

-   This parameter takes effect only when `AutoProvisioningGroupType` is set to instant.
-   If the number of instances that can be created in the current region is smaller than the value of this parameter, the operation cannot be called and no instances are created.
-   If the number of instances that can be created in the current region is greater than the value of this parameter, instances can be created based on the specified parameters.

20

LaunchConfiguration.SecurityGroupIds

array

No

The IDs of the security groups to which the new ECS instances belong.

string

No

The ID of security group N to which to assign the instance. When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

sg-bp15ed6xe1yxeycg\*\*\*\*

LaunchConfiguration.SystemDisk

object

No

The system disk information of instances. When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

Encrypted

string

No

Specifies whether to encrypt the system disk. Valid values:

-   true: encrypts system disk N.
-   false: does not encrypt system disk N.

Default value: false. Valid values:

When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

false

KMSKeyId

string

No

The ID of the KMS key to use for system disk N.

When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

0e478b7a-4262-4802-b8cb-00d3fb40\*\*\*\*

EncryptAlgorithm

string

No

The algorithm to use to encrypt the system disk. Valid values:

-   aes-256
-   sm4-128

Default value: aes-256.

When both LaunchTemplateId and LaunchConfiguration.\* parameters are specified, LaunchTemplateId takes precedence.

**Note** This parameter is not publicly available.

aes-256

ProvisionedIops

long

No

The provisioned read/write IOPS of the ESSD AutoPL disk to use as the system disk. Valid values: 0 to min{50,000, 1,000 × Capacity - Baseline IOPS}.

Baseline IOPS = min{1,800 + 50 × Capacity, 50,000}.

**Note** This parameter is available only if you set LaunchConfiguration.SystemDisk.Category to cloud\_auto. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

40000

BurstingEnabled

boolean

No

Specifies whether to enable the performance burst feature for the system disk. Valid values:

-   true: force attaches the disk to the instance.
-   false: disables the performance burst feature for the system disk.

**Note** This parameter is available only if you set `LaunchConfiguration.SystemDisk.Category` to `cloud_auto`. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

false

AutoSnapshotPolicyId

string

No

The ID of the automatic snapshot policy to apply to the system disk.

When you specify this parameter, take note of the following items:

-   This parameter takes effect only when the AutoProvisioningGroupType parameter is set to instant.

sp-bp67acfmxazb4p\*\*\*\*

LaunchConfiguration.Arn

array<object>

No

**Note** This parameter is in invitational preview and is not publicly available.

object

No

**Note** This parameter is in invitational preview and is not publicly available.

Rolearn

string

No

**Note** This parameter is in invitational preview and is not publicly available.

acs:ram::123456789012\*\*\*\*:role/adminrole

RoleType

string

No

**Note** This parameter is in invitational preview and is not publicly available.

34458433936495\*\*\*\*:alice

AssumeRoleFor

long

No

**Note** This parameter is in invitational preview and is not publicly available.

123456789012\*\*\*\*

HibernationOptionsConfigured

boolean

No

**Note** This parameter is in invitational preview and is not publicly available.

false

LaunchConfiguration.AutoReleaseTime

string

No

The automatic release time of the pay-as-you-go instance. Specify the time in the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in Coordinated Universal Time (UTC).

-   If the value of `ss` is not `00`, the start time is automatically rounded down to the nearest minute based on the value of `mm`.
-   The specified time must be at least 30 minutes later than the current time.
-   The specified time can be at most three years later than the current time.

2018-01-01T12:05:00Z

LaunchConfiguration.ImageFamily

string

No

The name of the image family. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `aliyun` or `acs:`. The name cannot contain `http://` or `https://`. The name can contain letters, digits, colons (:), underscores (\_), and hyphens (-).

hangzhou-daily-update

Tag

array<object>

No

The tags to add to the auto provisioning group.

object

No

Tag N to add to the auto provisioning group.

Key

string

No

The key of tag N to add to the auto provisioning group.

Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain http:// or https://.

TestKey

Value

string

No

The value of tag N to add to the auto provisioning group.

Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain http:// or https://.

TestValue

ResourcePoolOptions

object

No

The resource pool options to use to create instances. When you specify this parameter, take note of the following items:

-   This parameter takes effect only when the auto provisioning group creates pay-as-you-go instances.
-   This parameter takes effect only if you set `AutoProvisioningGroupType` to instant.

Strategy

string

No

Specifies which resource pools to use to create instances. Resource pools include the public pool and the private pools that are associated with elasticity assurance and capacity reservations in the Active state. Valid values:

-   PrivatePoolFirst: uses private pools first. If you set this parameter to PrivatePoolFirst, you can specify ResourcePoolOptions.PrivatePoolIds or leave ResourcePoolOptions.PrivatePoolIds empty. If you specify ResourcePoolOptions.PrivatePoolIds, the specified private pools are used first. If you leave ResourcePoolOptions.PrivatePoolIds empty or the private pools that you specify in ResourcePoolOptions.PrivatePoolIds have insufficient capacity, matching open private pools are used. If no matching open private pools exist, the public pool is used.
-   PrivatePoolOnly: uses only private pools. If you set this parameter to PrivatePoolOnly, you must specify ResourcePoolOptions.PrivatePoolIds. If the private pools that you specify in ResourcePoolOptions.PrivatePoolIds have insufficient capacity, instances cannot be created.
-   PublicPoolOnly: uses the public pool.

Default value: PublicPoolOnly.

PrivatePoolFirst

PrivatePoolIds

array

No

The IDs of private pools. The ID of a private pool is the same as the ID of the elasticity assurance or capacity reservation that is associated with the private pool. You can specify the IDs of only targeted private pools for this parameter.

string

No

The ID of private pool N. The ID of a private pool is the same as the ID of the elasticity assurance or capacity reservation that is associated with the private pool. You can specify the ID of only a targeted private pool for this parameter. Valid values of N: 1 to 20.

eap-bp67acfmxazb4\*\*\*\*

LaunchConfiguration

object

No

The startup parameter.

Period

integer

No

The subscription period of the instance. The unit is specified by `PeriodUnit`. This parameter takes effect and is required only if the subscription billing method is selected. Valid values:

Valid values if PeriodUnit is set to Month: 1, 2, 3, 6, and 12.

1

PeriodUnit

string

No

The unit of the subscription period. Default value: Month. Valid values:

Month

Month

AutoRenew

boolean

No

Specifies whether to enable auto-renewal for the reserved instance. This parameter is required only when the instance uses the subscription billing method. Valid values:

-   true
-   false (default)

true

AutoRenewPeriod

integer

No

The auto-renewal period of the instance. Valid values:

Valid values when PeriodUnit is set to Month: 1, 2, 3, 6, 12, 24, 36, 48, and 60.

Default value: 1.

1

SpotDuration

integer

No

The protection period of the spot instance. Unit: hours. Default value: 1. Valid values: Valid values:

-   1: After a spot instance is created, Alibaba Cloud ensures that the instance is not automatically released within 1 hour. After the 1-hour protection period ends, the system compares the bid price with the market price and checks the resource inventory to determine whether to retain or release the instance.
-   0: After a spot instance is created, Alibaba Cloud does not ensure that the instance runs for 1 hour. The system compares the bid price with the market price and checks the resource inventory to determine whether to retain or release the instance.

Alibaba Cloud sends an ECS system event to notify you 5 minutes before the instance is released. The spot instance is billed by second. We recommend that you specify an appropriate protection period based on your business requirements.

When you specify this parameter, take note of the following items:

-   This parameter takes effect only when the AutoProvisioningGroupType parameter is set to instant.

1

SpotInterruptionBehavior

string

No

The interruption event of the spot instances. Valid values:

-   Terminate: The instance is released.
-   Stop: The instance is stopped in economical mode.

For information about the economical mode, see [Economical mode](/help/en/ecs/user-guide/economical-mode).

Default value: Terminate.

When you specify this parameter, take note of the following items:

-   This parameter takes effect only when the AutoProvisioningGroupType parameter is set to instant.

Terminate

ImageOptions

object

No

The image options.

When you specify this parameter, take note of the following items:

-   This parameter takes effect only when the AutoProvisioningGroupType parameter is set to instant.

LoginAsNonRoot

boolean

No

Specifies whether the instance that uses the image supports logons of the ecs-user user. Valid value:

-   true: The instance that uses the image supports logons of the ecs-user user.
-   false: The instance that uses the image does not support logons of the ecs-user user.

false

PrePaidOptions

object

No

The capacity details of the subscription instance.

SpecifyCapacityDistribution

array<object>

No

The minimum capacity set for different instance types. This parameter is valid only when `AutoProvisioningGroupType` is set to request.

object

No

Minimum capacity N for instance types.

InstanceTypes

array

No

Details about the instance types. Duplicate instance types are not allowed and the instance types are within the LaunchTemplateConfig.InstanceType range.

string

No

The instance type.

ecs.c6.large

MinTargetCapacity

integer

No

The minimum number of instances to be delivered within the `InstanceTypes` range.

**Note** `sum(MinTargetCapacity)<= TotalTargetCapacity` indicates that the sum of MinTargetCapacity values of all instance types cannot exceed the TotalTargetCapacity value. If any instance type set cannot meet the MinTargetCapacity requirement due to insufficient inventory or other reasons, the entire request fails.

5

## Response parameters

Parameter

Type

Description

Example

object

AutoProvisioningGroupId

string

The ID of the auto provisioning group.

apg-sn54avj8htgvtyh8\*\*\*\*

RequestId

string

The ID of the request.

745CEC9F-0DD7-4451-9FE7-8B752F39\*\*\*\*

LaunchResults

array<object>

The instances created by the auto provisioning group. The values of the parameters in this array are returned only when AutoProvisioningGroupType is set to `instant`.

LaunchResult

object

ZoneId

string

The zone ID of the instance.

cn-hangzhou-g

ErrorMsg

string

The error message returned when the instance cannot be created.

Specific parameter is not valid.

InstanceType

string

The instance type of the instance.

ecs.g5.large

ErrorCode

string

The error code returned when the instance cannot be created.

InvalidParameter

SpotStrategy

string

The bidding policy for the pay-as-you-go instance. Valid values:

-   NoSpot: The instance is a regular pay-as-you-go instance.
-   SpotWithPriceLimit: The instance is a spot instance for which you specify the maximum hourly price.
-   SpotAsPriceGo: The instance is a spot instance for which the market price at the time of purchase is used as the bid price.

NoSpot

Amount

integer

The number of created instances.

1

InstanceIds

array

The IDs of created instances.

InstanceId

string

The ID of the created instance.

\["i-bp67acfmxazb4p\*\*\*\*"\]

## Examples

Sample success responses

`JSON`format

```
{
  "AutoProvisioningGroupId": "apg-sn54avj8htgvtyh8****",
  "RequestId": "745CEC9F-0DD7-4451-9FE7-8B752F39****",
  "LaunchResults": {
    "LaunchResult": [
      {
        "ZoneId": "cn-hangzhou-g",
        "ErrorMsg": "Specific parameter is not valid.",
        "InstanceType": "ecs.g5.large",
        "ErrorCode": "InvalidParameter",
        "SpotStrategy": "NoSpot",
        "Amount": 1,
        "InstanceIds": {
          "InstanceId": [
            [
              "i-bp67acfmxazb4p****"
            ]
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

InvalidParameter

%s

The specified parameter is invalid.

400

InvalidAutoProvisioningGroupName.Malformed

The specified parameter "AutoProvisioningGroupName" is not valid.

The specified elastic provisioning group name AutoProvisioningGroupName is invalid.

400

InvalidAutoProvisioningGroupType.ValueNotSupported

The specified parameter "AutoProvisioningGroupType" is not supported.

\-

400

InvalidFleetExcessCapacityTerminationPolicy.ValueNotSupported

The specified parameter "ExcessCapacityTerminationPolicy" is not supported.

\-

400

InvalidDefaultTargetCapacityType.ValueNotSupported

The specified parameter "DefaultTargetCapacityType" is not supported.

\-

400

InvalidSpotAllocationStrategy.ValueNotSupported

The specified parameter "SpotAllocationStrategy" is not supported.

\-

400

InvalidSpotInstanceInterruptionBehavior.ValueNotSupported

The specified parameter "SpotInstanceInterruptionBehavior" is not supported.

\-

400

InvalidPayAsYouGoAllocationStrategy.ValueNotSupported

The specified parameter "PayAsYouGoAllocationStrategy" is not supported.

\-

400

MissingParameter.SpotAllocationStrategy

The specified parameter "SpotAllocationStrategy" is empty.

\-

400

MissingParameter.LaunchTemplateConfigs

The specified parameter "LaunchTemplateConfigs" is empty.

The specified LaunchTemplateConfigs parameter is empty

400

InvalidValidTime.MalFormed

The specified parameter "ValidTime" is not supported.

\-

400

InvalidLaunchTemplateVersion.ValueNotSupported

The specified parameter "LaunchTemplateVersion" is not valid.

\-

400

MissingParameter

The specified parameter "AutoProvisioningGroup" should not be null.

\-

400

InvalidRegion.ValueNotSupported

The specified Region does not exist.

\-

400

InvalidDescription.ValueNotSupported

The specified description is illegal.

\-

400

MissingParameter

The specified launchTemplate does not exist.

\-

400

InvalidLaunchTemplate.ValueNotSupported

The SecurityGroupId or imageId in LaunchTemplate is not exists.

The security group ID or image ID in the launch template does not exist.

400

MissingParameter

The launchTemplateConfigs should not be null.

\-

400

InvalidCapacity.ValueNotSupported

The Capacity is illegal, or the TargetCapacity is large than SpotCapacity + PayAsYouGoCapacity.

\-

400

MissingParameter

The specified parameter "instanceType" should not be null.

\-

400

InvalidInstanceType.ValueNotSupported

The instanceType is illegal.

\-

400

MissingParameter

The specified parameter "VSWitchId" should not be null.

\-

400

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

400

InvalidLaunchTemplateConfigs.SizeExceed

The size of LaunchTemplateConfigs exceeds limit.

The number of LaunchTemplateConfig in the elastic supply group exceeds the limit.

400

InvalidPayAsYouGoAllocationStrategy.ValueNotSupported

The specified parameter "PayAsYouGoAllocationStrategy" is not valid.

The policy parameter PayAsYouGoAllocationStrategy of the specified pay-as-you-go instance is invalid.

400

InvalidSpotAllocationStrategy.ValueNotSupported

The specified parameter "SpotAllocationStrategy" is not valid.

\-

400

InvalidParameter.SpotInstancePoolsToUseCount

The specified parameter "SpotInstancePoolsToUseCount" is not valid.

\-

400

InvalidParameter.ResourceGroupId

The specified parameter "ResourceGroupId" is not valid.

\-

400

InvalidParameter.TargetCapacity

The Capacity is illegal, TotalTargetCapacity, PayAsYouGoTargetCapacity, SpotTargetCapacity must be specified, meanwhile, the TargetCapacity must be larger than or equal to the sum of SpotCapacity and OnDemandCapacity.

\-

400

MissingParameter.WeightedCapacity

The WeightedCapacity of LaunchTemplateConfig should not be empty.

\-

400

InvalidParameter.WeightedCapacityBeyondRange

The WeightedCaTpacity of LaunchTemplateConfig beyond permitted range.

\-

400

InvalidParameter.MaxPrice

The specified parameter "MaxSpotPrice" or "MaxPrice" of LaunchTemplateConfig is not valid.

\-

400

NoPermission

%s

\-

400

Duplicate.DiskCategory

The specified disk configs contains duplicate DiskCategory.

\-

400

MissingParameter

%s

A parameter is not specified.

400

InvalidVSwitchId.NotFound

%s

The specified vSwitch does not exist.

400

InvalidImageFamily.Confict

The specified parameter ImageFamily should be empty when the parameter ImageId is specified.

The specified parameter ImageFamily should be empty when the parameter ImageId is specified.

400

Invalid.ResourcePoolOptions.PrivatePoolIds

The zone or instancetype of the ResourcePoolOptions.PrivatePoolIds does not match the LaunchTemplateConfig.

The zone or instancetype of the ResourcePoolOptions.PrivatePoolIds does not match the LaunchTemplateConfig.

400

Invalid.ResourcePoolOptions.Strategy

The specified ResourcePoolOptions.Strategy is invalid.

The specified ResourcePoolOptions.Strategy is invalid.

400

Invalid.ResourcePoolOptionsPrivatePoolIds.SizeExceed

The size of ResourcePoolOptions.PrivatePoolIds exceeds limit.

The size of ResourcePoolOptions.PrivatePoolIds exceeds limit.

400

MissingParameter.ResourcePoolOptions.PrivatePoolIds

The specified ResourcePoolOptions.PrivatePoolIds should not be null when ResourcePoolOptions.Strategy is PrivatePoolOnly.

The specified ResourcePoolOptions.PrivatePoolIds should not be null when ResourcePoolOptions.Strategy is PrivatePoolOnly.

400

InvalidSpotDuration

The specified SpotDuration is not valid.

The specified SpotDuration parameter is invalid.

400

InvalidSpotInterruptionBehavior

%s

The specified SpotInterruptionBehavior parameter is not supported.

403

TotalTargetCapacityLimitExceed

The TotalTargetCapacity exceeds the limit\[0-2000\].

The TotalTargetCapacity value exceeds the limit \[0~2000\].

403

SpotTargetCapacityLimitExceed

The SpotTargetCapacity exceeds the limit\[0-2000\].

SpotTargetCapacity exceeds limit \[0-2000\].

403

PayAsYouGoTargetCapacityLimitExceed

The PayAsYouGoTargetCapacity exceeds the limit\[0-2000\].

PayAsYouGoTargetCapacity capacity exceeds limit \[0~2000\].

404

InvalidResourcePoolOptionsPrivatePoolIds.NotFound

The ResourcePoolOptions.PrivatePoolIds do not exist.

The ResourcePoolOptions.PrivatePoolIds do not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2026-01-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateAutoProvisioningGroup?updateTime=2026-01-28#workbench-doc-change-demo)

2025-12-24

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateAutoProvisioningGroup?updateTime=2025-12-24#workbench-doc-change-demo)

2025-12-01

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateAutoProvisioningGroup?updateTime=2025-12-01#workbench-doc-change-demo)

2025-11-06

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateAutoProvisioningGroup?updateTime=2025-11-06#workbench-doc-change-demo)

2025-04-29

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateAutoProvisioningGroup?updateTime=2025-04-29#workbench-doc-change-demo)

2025-03-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateAutoProvisioningGroup?updateTime=2025-03-28#workbench-doc-change-demo)

2025-02-13

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateAutoProvisioningGroup?updateTime=2025-02-13#workbench-doc-change-demo)

2025-02-08

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateAutoProvisioningGroup?updateTime=2025-02-08#workbench-doc-change-demo)

2024-11-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateAutoProvisioningGroup?updateTime=2024-11-28#workbench-doc-change-demo)

2024-10-17

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateAutoProvisioningGroup?updateTime=2024-10-17#workbench-doc-change-demo)

2024-10-15

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateAutoProvisioningGroup?updateTime=2024-10-15#workbench-doc-change-demo)

2024-04-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateAutoProvisioningGroup?updateTime=2024-04-26#workbench-doc-change-demo)

2024-02-29

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateAutoProvisioningGroup?updateTime=2024-02-29#workbench-doc-change-demo)

2023-11-06

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateAutoProvisioningGroup?updateTime=2023-11-06#workbench-doc-change-demo)

2023-06-14

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateAutoProvisioningGroup?updateTime=2023-06-14#workbench-doc-change-demo)

2023-04-04

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateAutoProvisioningGroup?updateTime=2023-04-04#workbench-doc-change-demo)

2022-09-21

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateAutoProvisioningGroup?updateTime=2022-09-21#workbench-doc-change-demo)
