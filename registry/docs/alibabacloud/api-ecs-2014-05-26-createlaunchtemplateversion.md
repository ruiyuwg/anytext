Creates a version for a launch template. You can use the created version to create Elastic Compute Service (ECS) instances, scaling groups, or auto provisioning groups.

## Operation description

## [](#usage-notes)[](#)Usage notes

If you want to modify the parameters of a launch template version, you can create another version with different parameter settings for the launch template. You can create up to 30 versions for each launch template.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateLaunchTemplateVersion)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateLaunchTemplateVersion)

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

ecs:CreateLaunchTemplateVersion

create

\*LaunchTemplate

`acs:ecs:{#regionId}:{#accountId}:launchtemplate/{#launchtemplateId}`

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

The region ID of the command. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent list of regions.

cn-hangzhou

LaunchTemplateId

string

No

The ID of the launch template. For more information, call the [DescribeLaunchTemplates](/help/en/ecs/api-describelaunchtemplates) operation. You must specify `LaunchTemplateId` or `LaunchTemplateName` to specify a launch template.

lt-m5eiaupmvm2op9d\*\*\*\*

LaunchTemplateName

string

No

The name of the launch template. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http://` or `https://`. The name can contain letters, digits, colons (:), underscores (\_), and hyphens (-).

testLaunchTemplateName

VersionDescription

string

No

The description of the launch template version. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.

testVersionDescription

ImageId

string

No

The ID of the image to use to create the Elastic Compute Service (ECS) instance. You can call the [DescribeImages](/help/en/ecs/api-describeimages) operation to query available images.

win2008r2\_64\_ent\_sp1\_en-us\_40G\_alibase\_20170915.vhd

ImageOwnerAlias

string

No

The source of the image.

**Note** This parameter will be removed in the future. We recommend that you use other parameters to ensure future compatibility.

system

PasswordInherit

boolean

No

Specifies whether to use the password that is preconfigured in the image. Valid values:

-   true
-   false

Default value: false.

**Note** If you specify PasswordInherit, you must leave Password empty and make sure that a password is preconfigured for the image.

false

InstanceType

string

No

The instance type. For more information, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families). You can also call the [DescribeInstanceTypes](/help/en/ecs/api-describeinstancetypes) operation to query the most recent list of instance types.

ecs.g5.large

SecurityGroupId

string

No

The ID of the security group to which to assign the ECS instance created based on the launch template version. Instances in the same security group can access each other.

**Note** You cannot specify `SecurityGroupId` and `SecurityGroupIds.N` in the same request.

sg-bp15ed6xe1yxeycg\*\*\*\*

VpcId

string

No

The ID of the virtual private cloud (VPC) in which to create the ECS instance.

vpc-bp12433upq1y5scen\*\*\*\*

VSwitchId

string

No

The ID of the vSwitch to which to connect the instance. This parameter is required if you specify the VpcId parameter.

vsw-bp1s5fnvk4gn2tws0\*\*\*\*

InstanceName

string

No

The instance name. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (\_), periods (.), and hyphens (-). The default value of this parameter is the `InstanceId` value.

When you create multiple ECS instances at a time, you can batch configure sequential names for the instances. The instance names can contain square brackets (\[\]) and commas (,). For more information, see [Batch configure sequential names or hostnames for multiple instances](/help/en/ecs/user-guide/batch-configure-sequential-names-or-hostnames-for-multiple-instances).

k8s-node-\[1,4\]-alibabacloud

Description

string

No

The description of the instance. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.

testDescription

InternetMaxBandwidthIn

integer

No

The maximum inbound public bandwidth. Unit: Mbit/s. Valid values:

-   When the purchased outbound public bandwidth is less than or equal to 10 Mbit/s, the valid values of this parameter are 1 to 10 and the default value is 10.
-   If the purchased outbound public bandwidth is greater than 10 Mbit/s, the valid values of this parameter range from 1 to the `InternetMaxBandwidthOut` value and the default value is the `InternetMaxBandwidthOut` value.

50

InternetMaxBandwidthOut

integer

No

The maximum outbound public bandwidth. Unit: Mbit/s. Valid values: 0 to 100.

5

HostName

string

No

The hostname of the instance.

-   The hostname cannot start or end with a period (.) or hyphen (-). It cannot contain consecutive periods (.) or hyphens (-).
-   For Windows instances, the hostname must be 2 to 15 characters in length and cannot contain periods (.) or contain only digits. It can contain letters, digits, and hyphens (-).
-   For instances that run other operating systems such as Linux, the hostname must be 2 to 64 characters in length. You can use periods (.) to separate the hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).

testHostName

ZoneId

string

No

The ID of the zone to which the instance belongs.

cn-hangzhou-g

SystemDisk.Category

string

No

The category of the system disk. Valid values:

-   cloud: basic disk.
-   cloud\_efficiency: ultra disk.
-   cloud\_ssd: standard SSD.
-   cloud\_auto: Enterprise SSD (ESSD) AutoPL disk.
-   cloud\_essd: ESSD. You can use `SystemDisk.PerformanceLevel` to set the performance level of the ESSD to use as the system disk.
-   cloud\_essd\_entry: ESSD Entry disk.

For non-I/O optimized instances of retired instance types, the default value is cloud. For other types of instances, the default value is cloud\_efficiency.

cloud\_ssd

SystemDisk.Size

integer

No

The size of the system disk. Unit: GiB. Valid values:

-   Valid values if you set SystemDisk.Category to cloud: 20 to 500.
-   Valid values if you set SystemDisk.Category to other disk categories: 20 to 2048.

The value of this parameter must be at least 20 and greater than or equal to the size of the image.

40

SystemDisk.DiskName

string

No

The name of the system disk. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http://` or `https://`. The name can contain letters, digits, colons (:), underscores (\_), and hyphens (-).

cloud\_ssdSystem

SystemDisk.Description

string

No

The description of the system disk. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.

testSystemDiskDescription

SystemDisk.Iops

integer

No

**Note** This parameter is not publicly available.

30000

SystemDisk.PerformanceLevel

string

No

The performance level of the ESSD to be used as the system disk. Default value: PL0. Valid values:

-   PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
-   PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
-   PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
-   PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.

For more information about ESSD performance levels, see [ESSDs](/help/en/ecs/user-guide/essds) .

PL0

SystemDisk.DeleteWithInstance

boolean

No

Specifies whether to release the system disk when the instance is released. Valid values:

-   true
-   false

Default value: true.

true

SystemDisk.AutoSnapshotPolicyId

string

No

The ID of the automatic snapshot policy to apply to the system disk.

sp-bp1dgzpaxwc4load\*\*\*\*

SystemDisk.ProvisionedIops

long

No

The provisioned read/write IOPS of the ESSD AutoPL disk to use as data disk N. Valid values: 0 to min{50,000, 1,000 × Capacity - Baseline IOPS}

Baseline IOPS = min{1,800 + 50 × Capacity, 50,000}

**Note** This parameter is available only if you set the Category parameter to cloud\_auto. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks) and [Modify the performance configurations of an ESSD AutoPL disk](/help/en/ecs/user-guide/modify-the-performance-configurations-of-an-essd-autopl-disk).

50000

SystemDisk.BurstingEnabled

boolean

No

Specifies whether to enable the performance burst feature. Valid values:

-   true: encrypts the disk.
-   false: does not enable the performance burst feature.

true

IoOptimized

string

No

Specifies whether to create an I/O optimized instance. Valid values:

-   none: The instance is not I/O optimized.
-   optimized: creates an I/O optimized instance.

optimized

InstanceChargeType

string

No

The billing method of the instance. Valid values:

-   PrePaid: subscription. If you set this parameter to PrePaid, make sure that your account has sufficient credits. Otherwise, an `InvalidPayMethod` error is returned.
-   PostPaid: pay-as-you-go

PrePaid

Period

integer

No

The subscription period of the instance. Unit: months. This parameter is valid and required only when `InstanceChargeType` is set to `PrePaid`. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.

1

InternetChargeType

string

No

The billing method for network usage. Default value: PayByTraffic. Valid values:

-   PayByBandwidth: pay-by-bandwidth
-   PayByTraffic: pay-by-traffic

**Note** When the **pay-by-traffic** billing method for network usage is used, the maximum inbound and outbound bandwidths are used as the upper limits of bandwidths instead of guaranteed performance specifications. In scenarios where demand outstrips resource supplies, these maximum bandwidth values may not be reached. If you want guaranteed bandwidths for your instance, use the **pay-by-bandwidth** billing method for network usage.

PayByTraffic

EnableVmOsConfig

boolean

No

Specifies whether to enable the operating system configuration of the instance.

false

NetworkType

string

No

The network type of the instance. Valid values:

-   classic: classic network
-   vpc: VPC

vpc

UserData

string

No

The user data of the instance. The user data must be encoded in Base64. The maximum size of raw data is 32 KB.

ZWNobyBoZWxsbyBl\*\*\*\*

KeyPairName

string

No

The name of the key pair to bind to the instance.

-   For Windows instances, this parameter is ignored The `Password` parameter is valid even if the KeyPairName parameter is specified.
-   For Linux instances, the password-based logon method is disabled by default.

testKeyPairName

RamRoleName

string

No

The name of the instance Resource Access Management (RAM) role. You can call the [ListRoles](/help/en/ram/api-listroles) operation provided by RAM to query the instance RAM roles that you created.

testRamRoleName

AutoReleaseTime

string

No

The automatic release time of the instance. Specify the time in the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

-   If the value of `ss` is not `00`, the time is automatically rounded down to the nearest minute based on the value of `mm`.
-   The specified time must be at least 30 minutes later than the current time.
-   The specified time can be at most three years later than the current time.

2018-01-01T12:05:00Z

SpotStrategy

string

No

The preemption policy for the pay-as-you-go instance. This parameter is valid only when the `InstanceChargeType` parameter is set to `PostPaid`. Default value: NoSpot. Valid values:

-   NoSpot: The instance is created as a pay-as-you-go instance.
-   SpotWithPriceLimit: The instances of the compute node are spot instances. These types of instances have a specified maximum hourly price.
-   SpotAsPriceGo: The instance is created as a spot instance for which the market price at the time of purchase is automatically used as the bid price.

NoSpot

SpotPriceLimit

float

No

The maximum hourly price of the spot instance. A maximum of three decimal places are allowed.

0.97

SpotDuration

integer

No

The protection period of the spot instance. Unit: hours. Default value: 1. Valid values:

-   1: After a spot instance is created, Alibaba Cloud ensures that the instance is not automatically released within 1 hour. After the 1-hour protection period ends, the system compares the bid price with the market price and checks the resource inventory to determine whether to retain or release the instance.
-   0: After a spot instance is created, Alibaba Cloud does not ensure that the instance runs for 1 hour. The system compares the bid price with the market price and checks the resource inventory to determine whether to retain or release the instance.

Alibaba Cloud sends an ECS system event to notify you 5 minutes before the instance is released. Spot instances are billed by second. We recommend that you specify a protection period based on your business requirements.

**Note** This parameter takes effect only if SpotStrategy is set to SpotWithPriceLimit or SpotAsPriceGo.

1

ResourceGroupId

string

No

The ID of the resource group to which to assign the instance.

rg-bp67acfmxazb4p\*\*\*\*

SecurityEnhancementStrategy

string

No

Specifies whether to enable security hardening for the operating system. Valid values:

-   Active: Security hardening is enabled. This value is applicable only to public images.
-   Deactive: Security hardening is disabled. This value is available to all types of images.

Active

PrivateIpAddress

string

No

The private IP address to assign to the instance.

To assign a private IP address to an instance of the VPC type, make sure that the IP address is an idle IP address within the CIDR block of the vSwitch specified by the `VSwitchId` parameter.

10.1.\*\*.\*\*

Ipv6AddressCount

integer

No

The number of IPv6 addresses to randomly generate for the primary elastic network interface (ENI). Valid values: 1 to 10.

1

DeploymentSetId

string

No

The ID of the deployment set to which to deploy the instance.

ds-bp1brhwhoqinyjd6\*\*\*\*

DataDisk

array<object>

No

The information about the data disks.

object

No

Data disk N.

PerformanceLevel

string

No

The performance level of the ESSD to use as data disk N. The value of N must be the same as that in `DataDisk.N.Category` when DataDisk.N.Category is set to cloud\_essd. Valid values:

-   PL0: A single ESSD can deliver up to 10000 random read/write IOPS.
-   PL1 (default): A single ESSD can deliver up to 50000 random read/write IOPS.
-   PL2: A single ESSD can deliver up to 100000 random read/write IOPS.
-   PL3: A single ESSD can deliver up to 1000000 random read/write IOPS.

For information about ESSD performance levels, see [ESSDs](/help/en/ecs/user-guide/essds) .

PL1

Description

string

No

The description of data disk N. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.

testDataDiskDescription

SnapshotId

string

No

The ID of the snapshot to use to create data disk N. Valid values of N: 1 to 16. When `DataDisk.N.SnapshotId` is specified, `DataDisk.N.Size` is ignored. The data disk is created with the size of the specified snapshot.

Use snapshots created on or after July 15, 2013. Otherwise, an error is returned and your request is rejected.

s-bp17441ohwka0yuh\*\*\*\*

Size

integer

No

The size of data disk N. Valid values of N: 1 to 16. Unit: GiB. Valid values:

-   Valid values if DataDisk.N.Category is set to cloud: 5 to 2000.
    
-   Valid values if DataDisk.N.Category is set to cloud\_efficiency: 20 to 32768.
    
-   Valid values when DataDisk.N.Category is set to cloud\_ssd: 20 to 32768.
    
-   Valid values if you set DataDisk.N.Category to cloud\_essd: vary based on the `DataDisk.N.PerformanceLevel` value.
    
    -   Valid values if you set DataDisk.N.PerformanceLevel to PL0: 1 to 32768.
    -   Valid values if you set DataDisk.N.PerformanceLevel to PL1: 20 to 32768.
    -   Valid values if you set DataDisk.N.PerformanceLevel to PL2: 461 to 32768.
    -   Valid values if you set DataDisk.N.PerformanceLevel to PL3: 1261 to 32768.
-   Valid values if you set DataDisk.N.Category to cloud\_auto: 1 to 32768.
    
-   Valid values if you set DataDisk.N.Category to cloud\_essd\_entry: 10 to 32768.
    

The value of this parameter must be greater than or equal to the size of the snapshot specified by `SnapshotId`.

2000

Device

string

No

The mount point of data disk N. The mount points are named based on the number of data disks:

-   1st to 25th data disks: /dev/xvd`[b-z]`.
-   From the 26th data disk on: /dev/xvd`[aa-zz]`. For example, the 26th data disk is named /dev/xvdaa, the 27th data disk is named /dev/xvdab, and so on.

**Note** This parameter is applicable to scenarios in which a full image is used to create instances. A full image is an image that contains an operating system, application software, and business data. For these scenarios, you can set the parameter to the mount point of data disk N contained in the full image and modify `DataDisk.N.Size` and `DataDisk.N.Category` to change the category and size of data disk N created based on the image.

null

DiskName

string

No

The name of data disk N. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http://` or `https://`. The name can contain letters, digits, colons (:), underscores (\_), and hyphens (-).

testDataDiskName

Category

string

No

The category of data disk N. Valid values:

-   cloud: basic disk
-   cloud\_efficiency: utra disk
-   cloud\_ssd: standard SSD
-   cloud\_auto: ESSD AutoPL disk
-   cloud\_essd: ESSD
-   cloud\_essd\_entry: ESSD Entry disk

For I/O optimized instances, the default value is cloud\_efficiency. For non-I/O optimized instances, the default value is cloud.

cloud\_ssd

DeleteWithInstance

boolean

No

Specifies whether to release data disk N when the associated instance is released. Valid values:

-   true
-   false

Default value: true.

true

Encrypted

string

No

Specifies whether to encrypt data disk N.

false

ProvisionedIops

long

No

The provisioned read/write IOPS of the ESSD AutoPL disk. Valid values: 0 to min{50,000, 1,000 × Capacity - Baseline IOPS}.

Baseline IOPS = min{1,800 + 50 × Capacity, 50,000}.

**Note** This parameter is available only if you set DiskCategory to cloud\_auto. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks) and [Modify the performance configurations of an ESSD AutoPL disk](/help/en/ecs/user-guide/modify-the-performance-configurations-of-an-essd-autopl-disk).

50000

BurstingEnabled

boolean

No

Specifies whether to enable the performance burst feature for the system disk. Valid values:

-   true
-   false

true

AutoSnapshotPolicyId

string

No

The ID of the automatic snapshot policy to apply to data disk N.

sp-bp67acfmxazb4p\*\*\*\*

KMSKeyId

string

No

The ID of the KMS key used for the data disk.

0e478b7a-4262-4802-b8cb-00d\*\*\*\*

NetworkInterface

array<object>

No

The information of the elastic network interfaces (ENIs).

object

No

The information of ENI N.

VSwitchId

string

No

The ID of the vSwitch to which to connect the secondary ENI. The instance and the secondary ENI must reside in the same zone of the same VPC, but they can be connected to different vSwitches. The value of N in `NetworkInterface.N` cannot be greater than 1.

vsw-bp1s5fnvk4gn2tws0\*\*\*\*

NetworkInterfaceName

string

No

The name of the secondary ENI. The value of N in `NetworkInterface.N` cannot be greater than 1.

testNetworkInterfaceName

Description

string

No

The description of the secondary ENI. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`. The value of N in `NetworkInterface.N` cannot be greater than 1.

testNetworkInterfaceDescription

SecurityGroupId

string

No

The ID of the security group to which to assign the secondary ENI. The security groups of the secondary ENI and of the instance must belong to the same VPC. The value of N in `NetworkInterface.N` cannot be greater than 1.

**Note** You cannot specify both `NetworkInterface.N.SecurityGroupId` and `NetworkInterface.N.SecurityGroupIds.N`.

sg-bp15ed6xe1yxeycg\*\*\*\*

PrimaryIpAddress

string

No

The primary private IP address of the secondary ENI. The value of N in `NetworkInterface.N` cannot be greater than 1.

192.168.\*\*.\*\*

SecurityGroupIds

array

No

The IDs of the security groups to which to assign the secondary ENI. The security groups and the secondary ENI must reside in the same VPC. The valid values of N in `SecurityGroupIds.N` vary based on the maximum number of security groups to which a secondary ENI can belong. For more information, see the "Security group limits" section in [Limits](/help/en/ecs/user-guide/limitations) . The value of N in `NetworkInterface.N` cannot be greater than 1.

**Note** You cannot specify both `NetworkInterface.N.SecurityGroupId` and `NetworkInterface.N.SecurityGroupIds.N`.

string

No

The ID of security group N to which to assign the secondary ENI. The security group and the secondary ENI must reside in the same VPC. The valid values of N in `SecurityGroupIds.N` vary based on the maximum number of security groups to which a secondary ENI can belong. For more information, see the "Security group limits" section in [Limits](/help/en/ecs/user-guide/limitations) . The value of N in `NetworkInterface.N` cannot be greater than 1.

**Note** You cannot specify both `NetworkInterface.N.SecurityGroupId` and `NetworkInterface.N.SecurityGroupIds.N`.

sg-bp67acfmxazb4p\*\*\*\*

InstanceType

string

No

The type of ENI N. Valid values of N: 1 and 2. If the value of N is 1, you can configure a primary or secondary ENI. If the value of N is 2, you must configure a primary ENI and a secondary ENI.

Valid values:

-   Primary
-   Secondary

Default value: Secondary.

ecs.g5.large

NetworkInterfaceTrafficMode

string

No

The communication mode of the primary ENI. Valid values:

-   Standard: uses the TCP communication mode.
-   HighPerformance: uses the remote direct memory access (RDMA) communication mode with Elastic RDMA Interface (ERI) enabled.

Standard

DeleteOnRelease

boolean

No

Specifies whether to release ENI N when the instance is released. Valid values:

-   true
-   false

Default value: true.

**Note** This parameter takes effect only for secondary ENIs.

true

Tag

array<object>

No

The tags to add to the ECS instance, disks, and primary elastic network interface (ENI) created based on the launch template version.

object

No

Tag N to add to the ECS instance, disks, and primary ENI created based on the launch template version.

Key

string

No

The key of tag N to add to the ECS instance, disks, and primary ENI created based on the launch template version. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot contain http:// or https://. The tag key cannot start with acs: or aliyun.

TestKey

Value

string

No

The value of tag N to add to the ECS instance, disks, and primary ENI created based on the launch template version. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain http:// or https://.

TestValue

SecurityGroupIds

array

No

The ID of security group N to which to assign the instance. The valid values of N depend on the maximum number of security groups to which the instance can belong. For more information, see [Quantity limits](/help/en/ecs/user-guide/limitations).

**Note** The `SecurityGroupId` parameter and the `SecurityGroupIds.N` parameter are mutually exclusive.

string

No

The ID of security group N to which to assign the instance. The valid values of N depend on the maximum number of security groups to which an instance can belong. For more information, see the "Security group limits" section in [Limits](/help/en/ecs/user-guide/limitations) .

**Note** The `SecurityGroupId` parameter and the `SecurityGroupIds.N` parameter are mutually exclusive.

sg-bp15ed6xe1yxeycg7\*\*\*\*

SystemDisk.Encrypted

string

No

Specifies whether to encrypt the system disk. Valid values:

-   true
-   false

Default value: false

**Note** You cannot encrypt system disks when you create instances in Hong Kong Zone D or Singapore Zone A.

false

DeletionProtection

boolean

No

Specifies whether to enable release protection for the instance. This parameter specifies whether you can use the ECS console or call the [DeleteInstance](/help/en/ecs/api-deleteinstance) operation to release the instance. Valid values:

-   true
-   false

Default value: false.

**Note** This parameter is applicable only to pay-as-you-go instances. The release protection feature can protect instances against manual releases, but not against automatic releases.

false

CreditSpecification

string

No

The performance mode of the burstable instance. Valid values:

-   Standard: the standard mode. For more information, see the "Standard mode" section in [Overview of burstable instances](/help/en/ecs/user-guide/burst-performance-instance-overview).
-   Unlimited: the unlimited mode. For more information, see the "Unlimited mode" section in [Overview of burstable instances](/help/en/ecs/user-guide/burst-performance-instance-overview).

Standard

AutoRenew

boolean

No

Specifies whether to enable auto-renewal for the instance. This parameter is valid only if `InstanceChargeType` is set to `PrePaid`. Valid values:

-   true
-   false

Default value: false.

true

AutoRenewPeriod

integer

No

The auto-renewal period of the instance. Valid values:

Valid values when PeriodUnit is set to Month: 1, 2, 3, 6, 12, 24, 36, 48, and 60.

Default value: 1.

1

PeriodUnit

string

No

The unit of the subscription period. Valid values:

Month (default)

Month

HttpEndpoint

string

No

Specifies whether to enable the access channel for instance metadata. Valid values:

-   enabled
-   disabled

Default value: enabled.

**Note** For information about instance metadata, see [Obtain information about an ECS instance, such as instance attributes inside ECS instances from instance metadata service](/help/en/ecs/user-guide/view-instance-metadata/).

enabled

HttpTokens

string

No

Specifies whether to forcefully use the security hardening mode (IMDSv2) to access instance metadata. Valid values:

-   optional: does not forcefully use the security hardening mode (IMDSv2).
-   required: forcefully uses the security hardening mode (IMDSv2). After you set this parameter to required, you cannot access instance metadata in normal mode.

Default value: optional.

**Note** For information about the modes of accessing instance metadata, see [Obtain information about an ECS instance, such as instance attributes inside ECS instances from instance metadata service](/help/en/ecs/user-guide/view-instance-metadata/).

optional

HttpPutResponseHopLimit

integer

No

**Note** This parameter is not publicly available.

3

SystemDisk.KMSKeyId

string

No

The ID of the KMS key to use for the system disk.

0e478b7a-4262-4802-b8cb-00d3fb40\*\*\*\*

ImageOptions

object

No

Details about the image options.

LoginAsNonRoot

boolean

No

Specifies whether the instance that uses the image supports logons of the ecs-user user. Valid values:

-   true
-   false

false

## Response parameters

Parameter

Type

Description

Example

object

LaunchTemplateVersionNumber

long

The number of the created version of the launch template.

2

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DExxxxx

LaunchTemplateId

string

The ID of the launch template. For more information, see [DescribeLaunchTemplates](/help/en/ecs/api-describelaunchtemplates) .

You must specify `LaunchTemplateId` or `LaunchTemplateName` to specify a launch template.

lt-bp1apo0bbbkuy0rj\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "LaunchTemplateVersionNumber": 2,
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DExxxxx",
  "LaunchTemplateId": "lt-bp1apo0bbbkuy0rj****\n"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidRegion.NotExist

%s

The specified region does not exist.

400

MissingParameter

%s

A parameter is not specified.

400

InvalidParameter

%s

The specified parameter is invalid.

400

InvalidDescription.Malformed

The specified parameter "Description" is not valid.

The source description can be 2 to 256 characters in length. It cannot start with http:// and https://.

400

InvalidUserData.SizeExceeded

%s

The size of your specified user data exceeds the maximum allowed value.

400

InvalidUserData.Base64FormatInvalid

%s

The specified user data is invalid.

400

InvalidHostName.Malformed

The specified parameter "HostName" is not valid.

\-

400

InvalidParams.CreateEniParams

%s

\-

400

Duplicate.TagKey

The Tag.N.Key contain duplicate key.

The specified tag key already exists. Tag keys must be unique.

403

LaunchTemplateVersionLimitExceed

%s

The maximum number of launch template versions has been reached.

404

InvalidLaunchTemplate.NotFound

%s

The specified launch template does not exist. Check whether the parameter value is correct.

404

InvalidResourceGroup.NotFound

The ResourceGroup provided does not exist in our records.

The specified resource group does not exist.

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-05-27

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateLaunchTemplateVersion?updateTime=2025-05-27#workbench-doc-change-demo)

2025-02-17

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateLaunchTemplateVersion?updateTime=2025-02-17#workbench-doc-change-demo)

2024-10-12

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateLaunchTemplateVersion?updateTime=2024-10-12#workbench-doc-change-demo)

2024-05-28

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateLaunchTemplateVersion?updateTime=2024-05-28#workbench-doc-change-demo)

2023-10-18

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateLaunchTemplateVersion?updateTime=2023-10-18#workbench-doc-change-demo)

2023-08-01

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateLaunchTemplateVersion?updateTime=2023-08-01#workbench-doc-change-demo)

2023-03-10

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateLaunchTemplateVersion?updateTime=2023-03-10#workbench-doc-change-demo)

2022-07-11

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateLaunchTemplateVersion?updateTime=2022-07-11#workbench-doc-change-demo)

2021-12-20

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateLaunchTemplateVersion?updateTime=2021-12-20#workbench-doc-change-demo)
