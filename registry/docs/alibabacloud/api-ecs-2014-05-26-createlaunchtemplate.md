Creates a launch template. A launch template eliminates the need to configure a large number of parameters every time you create an Elastic Compute Service (ECS) instance.

## Operation description

After you create a launch template by calling the CreateLaunchTemplate operation, a default version that has a version number of 1 is automatically generated for the launch template. You can call the `CreateLaunchTemplateVersion` operation to create additional versions for the launch template. Version numbers start from 1 and increment by 1. If you specify a launch template but do not specify a launch template version number when you call the [RunInstances](/help/en/ecs/api-runinstances) operation to create instances, the default version of the launch template is used.

Launch templates contain preset configurations that are used to create instances, such as the region ID, image ID, instance type, security group ID, and public bandwidth settings. If a specific parameter is not included in a launch template, you need to manually specify the parameter when you use the launch template to create instances.

Take note of the following items:

-   You can retain up to 30 launch templates in each region in your Alibaba Cloud account. Each launch template can have up to 30 versions.
-   Most parameters in launch templates are optional. When you create a launch template, ECS does not verify the existence or validity of specified parameter values. The parameter values are verified only when you use the launch template to create instances.
-   If you configured a specific parameter in a launch template, you cannot filter out the parameter when you call the [RunInstances](/help/en/ecs/api-runinstances) operation to create instances from the launch template. For example, if you set `HostName` to LocalHost in a launch template but do not specify `HostName` when you call the `RunInstances` operation to create instances from the launch template, the hostname of the created instances is `LocalHost`. If you want to overwrite `LocalHost`, which is the value of HostName in the launch template, you can set `HostName` to MyHost or a different value when you call the `RunInstances` operation.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateLaunchTemplate)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateLaunchTemplate)

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

ecs:CreateLaunchTemplate

create

\*LaunchTemplate

`acs:ecs:{#regionId}:{#accountId}:launchtemplate/*`

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

The ID of the region in which to create the launch template. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

TemplateTag

array<object>

No

The tags to add to the launch template.

**Note** You can add tags to or query the tags of launch templates by calling API operations. You cannot add tags to or query the tags of launch templates in the ECS console.

object

No

Tag N to add to the launch template.

Key

string

No

The key of tag N to add to the launch template. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `acs:` or `aliyun`.

TestKey

Value

string

No

The value of tag N to add to the launch template. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `acs:` or `aliyun`.

TestValue

LaunchTemplateName

string

Yes

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

The ID of the image to use to create the instance. You can call the [DescribeImages](/help/en/ecs/api-describeimages) operation to query available images.

win2008r2\_64\_ent\_sp1\_en-us\_40G\_alibase\_20170915.vhd

ImageOwnerAlias

string

No

The source of the image. Valid values:

-   system: public image provided by Alibaba Cloud.
-   self: custom image that you created.
-   others: shared image from another Alibaba Cloud account.
-   marketplace:[Alibaba Cloud Marketplace](https://marketplace.alibabacloud.com/) image. If Alibaba Cloud Marketplace images are available, you can use the images without the need to subscribe to the images. Take note of the billing details of Alibaba Cloud Marketplace images.

system

PasswordInherit

boolean

No

Specifies whether to use the preset password of the image.

**Note** If you set the PasswordInherit parameter to true, make sure that you leave the Password parameter empty and the selected image has a preset password.

false

InstanceType

string

No

The instance type of the instance. For more information, see [Instance families](/help/en/ecs/user-guide/overview-of-instance-families). Alternatively, you can call the [DescribeInstanceTypes](/help/en/ecs/api-describeinstancetypes) operation to query the most recent instance type list.

ecs.g5.large

SecurityGroupId

string

No

The ID of the security group to which to assign the instance. Instances in the same security group can communicate with each other. A security group can contain up to 1,000 instances.

**Note** You cannot specify both the `SecurityGroupId` and `SecurityGroupIds.N` parameters.

sg-bp15ed6xe1yxeycg\*\*\*\*

VpcId

string

No

The ID of the virtual private cloud (VPC).

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

The instance description. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.

testECSDescription

InternetMaxBandwidthIn

integer

No

The maximum inbound public bandwidth. Unit: Mbit/s. Valid values:

-   When the purchased outbound public bandwidth is less than or equal to 10 Mbit/s, the valid values of this parameter are 1 to 10 and the default value is 10.
-   When the purchased outbound public bandwidth is greater than 10 Mbit/s, the valid values of this parameter are 1 to the `InternetMaxBandwidthOut` value and the default value is the `InternetMaxBandwidthOut` value.

10

InternetMaxBandwidthOut

integer

No

The maximum outbound public bandwidth. Unit: Mbit/s. Valid values: 0 to 100.

10

HostName

string

No

The instance hostname.

-   The hostname cannot start or end with a period (.) or hyphen (-). It cannot contain consecutive periods (.) or hyphens (-).
-   For Windows instances, the hostname must be 2 to 15 characters in length and cannot contain periods (.) or contain only digits. It can contain letters, digits, and hyphens (-).
-   For instances that run other operating systems such as Linux, the hostname must be 2 to 64 characters in length. You can use periods (.) to separate the hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).

testHostName

ZoneId

string

No

The ID of the zone in which to create the instance.

cn-hangzhou-g

SystemDisk.Category

string

No

The category of the system disk. Valid values:

-   cloud: basic disk.
-   cloud\_efficiency: ultra disk.
-   cloud\_ssd: standard SSD.
-   cloud\_essd: Enterprise SSD (ESSD). You can use `SystemDisk.PerformanceLevel` to set the performance level of the ESSD to use as the system disk.
-   cloud\_auto: ESSD AutoPL disk.
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

testSystemDiskName

SystemDisk.Description

string

No

The description of the system disk. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.

testSystemDiskDescription

SystemDisk.Iops

integer

No

**Note** This parameter is in invitational preview and is unavailable for general users.

null

SystemDisk.PerformanceLevel

string

No

The performance level of the ESSD to use as the system disk. Default value: PL0. Valid values:

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

sp-gc7c37d4ylw7mtnk\*\*\*\*

SystemDisk.ProvisionedIops

long

No

The provisioned read/write IOPS of the ESSD AutoPL disk to use as the system disk. Valid values: 0 to min{50,000, 1,000 × Capacity - Baseline IOPS}

Baseline IOPS = min{1,800 + 50 × Capacity, 50,000}

**Note** This parameter is available only if you set the SystemDisk.Category parameter to cloud\_auto. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks) and [Modify the performance configurations of an ESSD AutoPL disk](/help/en/ecs/user-guide/modify-the-performance-configurations-of-an-essd-autopl-disk).

50000

SystemDisk.BurstingEnabled

boolean

No

Specifies whether to enable the performance burst feature for the system disk. Valid values:

-   true
-   false

true

IoOptimized

string

No

Specifies whether to create an I/O optimized instance. Valid values:

-   none: creates a non-I/O optimized instance.
-   optimized: creates an I/O optimized instance.

optimized

InstanceChargeType

string

No

The billing method of the instance. Valid values:

-   PrePaid: subscription. If you set this parameter to PrePaid, make sure that your account has sufficient credits.Otherwise, an `InvalidPayMethod` error is returned.
-   PostPaid: pay-as-you-go.

PrePaid

Period

integer

No

The subscription duration of the instance. Unit: months. This parameter is valid and required only when `InstanceChargeType` is set to `PrePaid`. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.

1

InternetChargeType

string

No

The billing method for network usage. Valid values:

-   PayByBandwidth: pay-by-bandwidth
-   PayByTraffic: pay-by-traffic

**Note** When the **pay-by-traffic** billing method for network usage is used, the maximum inbound and outbound bandwidths are used as the upper limits of bandwidths instead of guaranteed performance specifications. In scenarios where demand outstrips resource supplies, these maximum bandwidths may be limited. If you want guaranteed bandwidths for your instance, use the **pay-by-bandwidth** billing method for network usage.

PayByTraffic

EnableVmOsConfig

boolean

No

Specifies whether to enable the operating system configuration of the instance.

**Note** This parameter will be removed in the future. To ensure future compatibility, we recommend that you use other parameters.

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

ZWNobyBoZWxsbyBlY3Mh

KeyPairName

string

No

The name of the key pair. This parameter is empty by default.

-   For Windows instances, this parameter is ignored The `Password` parameter takes effect even if the KeyPairName parameter is specified.
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

The bidding policy for the pay-as-you-go instance. This parameter is valid only when the `InstanceChargeType` parameter is set to `PostPaid`. Valid values:

-   NoSpot: The instance is a regular pay-as-you-go instance.
-   SpotWithPriceLimit: The instance is created as a spot instance with a user-defined maximum hourly price.
-   SpotAsPriceGo: The instance is created as a spot instance for which the market price at the time of purchase is automatically used as the bidding price.

NoSpot

SpotPriceLimit

float

No

The maximum hourly price of the instance. The value is accurate to three decimal places. This parameter is valid only when the `SpotStrategy` parameter is set to `SpotWithPriceLimit`.

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

The ID of the resource group to which to assign the instance, Elastic Block Storage (EBS) device, and elastic network interface (ENI).

rg-bp67acfmxazb4p\*\*\*\*

TemplateResourceGroupId

string

No

The ID of the resource group to which the launch template belongs.

rg-bp67acfmxazb4p\*\*\*\*

SecurityEnhancementStrategy

string

No

Specifies whether to enable security hardening for the operating system. Valid values:

-   Active: enables security hardening. This value is applicable only to public images.
-   Deactive: does not enable security hardening. This value is applicable to all images.

Deactive

PrivateIpAddress

string

No

The private IP address to assign to the instance.

To assign a private IP address to an instance that resides in a VPC, make sure that the IP address is an idle IP address within the CIDR block of the vSwitch specified by the `VSwitchId` parameter.

10.1.\*\*.\*\*

DeploymentSetId

string

No

The ID of the deployment set to which to deploy the instance.

ds-bp1brhwhoqinyjd6\*\*\*\*

Ipv6AddressCount

integer

No

The number of IPv6 addresses to randomly generate for the primary elastic network interface (ENI). Valid values: 1 to 10.

1

DataDisk

array<object>

No

The data disks.

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

The ID of the snapshot to use to create data disk N. Valid values of N: 1 to 16. If you specify `DataDisk.N.SnapshotId`, `DataDisk.N.Size` is ignored. The data disk is created with the size of the specified snapshot.

**Note** Use snapshots created on or after July 15, 2013. Otherwise, an error is returned and your request is rejected.

s-bp17441ohwka0yuh\*\*\*\*

Size

integer

No

The size of data disk N. Valid values of N: 1 to 16. Unit: GiB. Valid values:

-   Valid values if you set DataDisk.N.Category to cloud: 5 to 2000.
    
-   Valid values if you set DataDisk.N.Category to cloud\_efficiency: 20 to 32768.
    
-   Valid values if you set DataDisk.N.Category to cloud\_ssd: 20 to 32768.
    
-   Valid values if you set DataDisk.N.Category to cloud\_essd: vary based on the value of `DataDisk.N.PerformanceLevel`.
    
    -   Valid values if DataDisk.N.PerformanceLevel is set to PL0: 1 to 32768.
    -   Valid values if DataDisk.N.PerformanceLevel is set to PL1: 20 to 32768.
    -   Valid values if DataDisk.N.PerformanceLevel is set to PL2: 461 to 32768.
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
-   cloud\_essd: ESSD
-   cloud\_auto: ESSD AutoPL disk
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

AutoSnapshotPolicyId

string

No

The ID of the automatic snapshot policy to apply to data disk N.

sp-m5e7fa9ute44ssa\*\*\*\*

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

KMSKeyId

string

No

The ID of the KMS key used for the data disk.

0e478b7a-4262-4802-b8cb-00d\*\*\*\*

NetworkInterface

array<object>

No

The information of the ENIs.

object

No

The information of ENI N.

VSwitchId

string

No

The ID of the vSwitch to which to connect ENI N.

Take note of the following items:

-   Valid values of N: 1 and 2. If the value of N is 1, you can configure a primary or secondary ENI. If the value of N is 2, you must configure a primary ENI and a secondary ENI.
-   If you set `NetworkInterface.N.InstanceType` to `Primary`, you must specify this parameter. In this case, this parameter is equivalent to `VSwitchId`. You cannot specify both NetworkInterface.N.VSwitchId and `VSwitchId` in the same request.
-   If you set `NetworkInterface.N.InstanceType` to `Secondary` or leave NetworkInterface.N.InstanceType empty, you do not need to specify this parameter. The default value is the VSwitchId value.

vsw-bp1s5fnvk4gn2tws0\*\*\*\*

NetworkInterfaceName

string

No

The name of ENI N.

Take note of the following items:

-   Valid values of N: 1 and 2. If the value of N is 1, you can configure a primary or secondary ENI. If the value of N is 2, you must configure a primary ENI and a secondary ENI.
-   If you set `NetworkInterface.N.InstanceType` to `Primary`, you do not need to specify this parameter.

testEniName

Description

string

No

The description of the secondary ENI. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`. The value of N in `NetworkInterface.N` cannot be greater than 1.

testEniDescription

SecurityGroupId

string

No

The ID of the security group to which to assign ENI N.

Take note of the following items:

-   Valid values of N: 1 and 2. If the value of N is 1, you can configure a primary or secondary ENI. If the value of N is 2, you must configure a primary ENI and a secondary ENI.
-   If you set `NetworkInterface.N.InstanceType` to `Primary`, you must specify this parameter. In this case, this parameter is equivalent to `SecurityGroupId`, and you cannot specify `SecurityGroupId`, `SecurityGroupIds.N`, or `NetworkInterface.N.SecurityGroupIds.N`.
-   If you set `NetworkInterface.N.InstanceType` to `Secondary` or leave NetworkInterface.N.InstanceType empty, you do not need to specify this parameter. The default value is the ID of the security group to which to assign the instance.

sg-bp15ed6xe1yxeycg\*\*\*\*

PrimaryIpAddress

string

No

The primary IP address to assign to ENI N.

Take note of the following items:

-   Valid values of N: 1 and 2.
    
    -   If the value of N is 1, you can configure a primary or secondary ENI. If you specify this parameter, set `Amount` to a numeric value greater than 1, and set NetworkInterface.N.InstanceType to Primary, the specified number of instances are created and consecutive primary IP addresses starting from the specified IP address are assigned to the instances. In this case, you cannot attach secondary ENIs to the instances.
    -   If the value of N is 2, you must configure a primary ENI and a secondary ENI. If you specify this parameter, set `Amount` to a numeric value greater than 1, and set NetworkInterface.N.InstanceType to Primary, you cannot set `NetworkInterface.2.InstanceType` to Secondary to attach a secondary ENI.
-   If you set `NetworkInterface.N.InstanceType` to `Primary`, this parameter is equivalent to `PrivateIpAddress`. You cannot specify both this parameter and `PrivateIpAddress` in the same request.
    
-   If you set `NetworkInterface.N.InstanceType` to `Secondary` or leave NetworkInterface.N.InstanceType empty, the specified primary IP address is assigned to the secondary ENI. The default value is an IP address that is randomly selected from within the CIDR block of the vSwitch to which to connect the secondary ENI.
    

**Note** You can attach only a single secondary ENI when you create an instance. After the instance is created, you can call the [CreateNetworkInterface](/help/en/ecs/api-createnetworkinterface) and [AttachNetworkInterface](/help/en/ecs/api-attachnetworkinterface) operations to attach more secondary ENIs.

192.168.\*\*.\*\*

SecurityGroupIds

array

No

The IDs of security groups to which to assign ENI N.

-   Valid values of the first N: 1 and 2. If the value of N is 1, you can configure a primary or secondary ENI. If the value of N is 2, you must configure a primary ENI and a secondary ENI.
-   The second N in this parameter indicates that one or more security group IDs can be specified. The valid values of N vary based on the maximum number of security groups to which an instance can belong. For more information, see the [Security group limits](/help/en/ecs/user-guide/limitations#SecurityGroupQuota1) section of the "Limits" topic.

Take note of the following items:

-   If you set `NetworkInterface.N.InstanceType` to `Primary`, you must specify this parameter or `NetworkInterface.N.SecurityGroupId`. In this case, this parameter is equivalent to `SecurityGroupIds.N`, and you cannot specify `SecurityGroupId`, `SecurityGroupIds.N`, or `NetworkInterface.N.SecurityGroupId`.
-   If you set `NetworkInterface.N.InstanceType` to `Secondary` or leave NetworkInterface.N.InstanceType empty, you do not need to specify this parameter. The default value is the ID of the security group to which to assign the instance.

string

No

The ID of security group N to which to assign ENI N.

-   Valid values of the first N: 1 and 2. If the value of N is 1, you can configure a primary or secondary ENI. If the value of N is 2, you must configure a primary ENI and a secondary ENI.
-   The second N in this parameter indicates that one or more security group IDs can be specified. The valid values of N vary based on the maximum number of security groups to which an instance can belong. For more information, see the [Security group limits](/help/en/ecs/user-guide/limitations#SecurityGroupQuota1) section of the "Limits" topic.

Take note of the following items:

-   If you set `NetworkInterface.N.InstanceType` to `Primary`, you must specify this parameter or `NetworkInterface.N.SecurityGroupId`. In this case, this parameter is equivalent to `SecurityGroupIds.N`, and you cannot specify `SecurityGroupId`, `SecurityGroupIds.N`, or `NetworkInterface.N.SecurityGroupId`.
-   If you set `NetworkInterface.N.InstanceType` to `Secondary` or leave NetworkInterface.N.InstanceType empty, you do not need to specify this parameter. The default value is the ID of the security group to which to assign the instance.

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

The tags to add to the instance, disks, and primary ENI that are created from the launch template.

**Scenario**

If you created a launch template by calling the CreateLaunchTemplate operation and use the default version that is automatically generated for the launch template to create instances, the specified tags are automatically added to the created instances, disks, and primary ENIs. For more information about the default versions of launch templates, see \[xxxx\](url).

object

No

Tag N to add to the instance, disks, and primary ENI that are created from the launch template.

Key

string

No

The key of tag N to add to the instance, disks, and primary ENI that are created from the launch template. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot contain http:// or https://. The tag key cannot start with acs: or aliyun.

TestKey

Value

string

No

The value of tag N to add to the instance, disks, and primary ENI that are created from the launch template. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain http:// or https://.

TestValue

SecurityGroupIds

array

No

The IDs of the security groups to which to assign the instance. The valid values of N are based on the maximum number of security groups to which the instance can belong. For more information, see the "Security group limits" section in [Limits](/help/en/ecs/user-guide/limitations) .

**Note** You cannot specify both the `SecurityGroupId` and `SecurityGroupIds.N` parameters.

string

No

The ID of security group N to which to assign the instance. The valid values of N are based on the maximum number of security groups to which the instance can belong. For more information, see the "Security group limits" section in [Limits](/help/en/ecs/user-guide/limitations) .

**Note** You cannot specify both the `SecurityGroupId` and `SecurityGroupIds.N` parameters.

sg-bp15ed6xe1yxeycg7\*\*\*\*

SystemDisk.Encrypted

string

No

Specifies whether to encrypt the system disk. Valid values:

-   true
-   false

Default value: false.

**Note** If you create an instance in Hong Kong Zone D or Singapore Zone A, you cannot encrypt the system disk.

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

Specifies whether to enable auto-renewal. Valid values:

-   true
-   false

Default value: false.

**Note** This parameter takes effect only if you set `InstanceChargeType` to `PrePaid`.

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

LaunchTemplateId

string

The ID of the launch template.

lt-m5eiaupmvm2op9d\*\*\*\*

RequestId

string

The ID of the request.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

LaunchTemplateVersionNumber

long

The version number of the launch template.

2

## Examples

Sample success responses

`JSON`format

```
{
  "LaunchTemplateId": "lt-m5eiaupmvm2op9d****",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****",
  "LaunchTemplateVersionNumber": 2
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

InvalidLaunchTemplateName.Malformed

The specified parameter LaunchTemplateName is not valid.

The specified LaunchTemplateName parameter is invalid.

400

InvalidDescription.Malformed

The specified parameter "VersionDescription" is not valid.

\-

400

InvalidUserData.SizeExceeded

%s

The size of your specified user data exceeds the maximum allowed value.

400

InvalidUserData.Base64FormatInvalid

%s

The specified user data is invalid.

400

Duplicate.TagKey

The Tag.N.Key contain duplicate key.

The specified tag key already exists. Tag keys must be unique.

400

InvalidTagKey.Malformed

The specified Tag.n.Key is not valid.

The specified Tag.N.Key parameter is invalid.

400

InvalidTagValue.Malformed

The specified Tag.n.Value is not valid.

The specified tag value is invalid.

400

InvalidHostName.Malformed

The specified parameter "HostName" is not valid.

\-

400

InvalidParams.CreateEniParams

%s

\-

403

LaunchTemplateLimitExceed

%s

The maximum number of launch templates has been reached.

403

LaunchTemplateName.Duplicated

%s

The specified launch template name already exists.

403

QuotaExceed.Tags

%s

The number of specified tags exceeds the upper limit. %s is a variable. An error message is dynamically returned based on call conditions.

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

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateLaunchTemplate?updateTime=2025-05-27#workbench-doc-change-demo)

2025-02-17

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateLaunchTemplate?updateTime=2025-02-17#workbench-doc-change-demo)

2024-10-12

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateLaunchTemplate?updateTime=2024-10-12#workbench-doc-change-demo)

2024-05-28

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateLaunchTemplate?updateTime=2024-05-28#workbench-doc-change-demo)

2023-10-18

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateLaunchTemplate?updateTime=2023-10-18#workbench-doc-change-demo)

2023-10-16

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateLaunchTemplate?updateTime=2023-10-16#workbench-doc-change-demo)

2023-08-01

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateLaunchTemplate?updateTime=2023-08-01#workbench-doc-change-demo)

2022-07-11

API Description Update. The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateLaunchTemplate?updateTime=2022-07-11#workbench-doc-change-demo)

2021-12-20

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateLaunchTemplate?updateTime=2021-12-20#workbench-doc-change-demo)
