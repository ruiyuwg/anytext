Creates a subscription or pay-as-you-go Elastic Compute Service (ECS) instance. When you call this operation, you can specify different parameters to create instances based on your business requirements.

## Operation description

**Note** This operation is no longer iterated or updated. We recommend that you call the [RunInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-runinstances) operation instead.

**Before you call this operation, familiarize yourself with the billing rules and [pricing](https://www.alibabacloud.com/zh/pricing-calculator#/commodity/vm_intl) of ECS resources.**

This operation is an asynchronous operation. After a request to create an ECS instance is sent, an ECS instance ID is immediately returned but the instance may be still being created. You can call the [DescribeInstanceStatus](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstancestatus) operation to query the status of the instance. If the status of the instance is `Stopped` in the DescribeInstanceStatus response, the instance is created. In this case, you can call the [StartInstance](/help/en/ecs/developer-reference/api-ecs-2014-05-26-startinstance) operation to start the instance.

### [](#prerequisites)[](#)Prerequisites

-   Make sure that you are familiar with the ECS billing methods because you may be charged for the resources that are used by the instance. For more information, see [Billing overview](/help/en/ecs/billing-overview).
-   Make sure that the number of ECS instances you create or the number of vCPUs on ECS instances of all instance types you create does not exceed the corresponding quota. Go to the [Quota Center](https://quotas.console.alibabacloud.com/products/ecs/quotas) to view the quotas.
-   Before you create ECS instances of the Virtual Private Cloud (VPC) type in a region, create a VPC in the region. For more information, see [Create a VPC](/help/en/vpc/getting-started/create-vpc-with-ipv4).

### [](#considerations)[](#)Considerations

-   If you create a subscription instance (`PrePaid`), available coupons in your account are automatically used.
-   If you want to create instances with 512 MiB of memory, you cannot use Windows Server images except for Windows Server Semi-Annual Channel images. If you want to create instances with 4 GiB or more of memory, you cannot use 32-bit OS image.
-   If you call the CreateInstance operation to create an instance, no public IP address is automatically assigned to the instance. If the InternetMaxBandwidthOut value of the instance is greater than 0 Mbit/s, call the [AllocatePublicIpAddress](/help/en/ecs/api-allocatepublicipaddress) operation to assign a public IP address to the instance. If the InternetMaxBandwidthOut value of the instance is 0 Mbit/s, call the [ModifyInstanceNetworkSpec](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyinstancenetworkspec) operation to set InternetMaxBandwidthOut to a value greater than 0 Mbit/s and then call the [AllocatePublicIpAddress](/help/en/ecs/api-allocatepublicipaddress) operation to assign a public IP address to the instance.

**Note** For the limits on the sum of maximum public bandwidths of ECS instances that use the pay-by-bandwidth billing method for network usage per region per Alibaba Cloud account, see the [Public bandwidth limits](/help/en/ecs/user-guide/limitations#BandwidthQuota) section of the "Limits" topic.

### [](#suggestions)[](#)Suggestions

-   **Instance type selection**: See [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families) or call the [DescribeInstanceTypes](/help/en/ecs/api-describeinstancetypes) operation to query the performance data of instance types, or see [Instance type selection](/help/en/ecs/user-guide/best-practices-for-instance-type-selection) to learn about how to select instance types.
-   **Query of available resources**: Call the [DescribeAvailableResource](/help/en/ecs/api-describeavailableresource) operation to query resources available in a specific region or zone.
-   **User data**: If the instance type supports [user data](/help/en/ecs/user-guide/customize-the-initialization-configuration-for-an-instance), you can use UserData to pass in user data. We recommend that you do not pass in confidential information, such as passwords or private keys, in plaintext as user data. This is because the system does not encrypt `UserData` values when API requests are sent. If you must pass in confidential information as user data, we recommend that you encrypt and encode the information in Base64 before you pass in the information. Then, decode and decrypt the information within the instance for subsequent use.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateInstance)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateInstance)

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

ecs:CreateInstance

create

\*All Resources

`*`

-   vpc:VPC
-   vpc:IsDefaultVSwitch
-   vpc:IsDefaultVpc
-   ecs:IsDiskEncrypted
-   ecs:InstanceType
-   ecs:InstanceTypeFamily
-   ecs:ImageOwnerId
-   ecs:ImageSource
-   ecs:NotSpecifySecurityGroupId
-   ecs:LoginAsNonRoot
-   ecs:IsSystemDiskByokEncrypted
-   ecs:IsDiskByokEncrypted
-   ecs:PasswordInherit
-   ecs:PasswordCustomized
-   ecs:IsSystemDiskEncrypted
-   ecs:ImagePlatform
-   ecs:SecurityHardeningMode
-   vpc:CreateDefaultVpc
-   ecs:SecurityEnhancementStrategy
-   ecs:AssociatePublicIpAddress

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

The ID of the region in which to create the instance. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

ImageId

string

No

The ID of the image to use to create the instance. To use an Alibaba Cloud Marketplace image, you can view the `image ID` on the product page of the Alibaba Cloud Marketplace image. This parameter is required if you do not specify `ImageFamily` to obtain the latest available custom image from the specified image family.

ubuntu\_18\_04\_64\_20G\_alibase\_20190624.vhd

ImageFamily

string

No

The name of the image family. You can set this parameter to obtain the latest available custom image from the specified image family to create the instance.

-   ImageFamily must be empty if `ImageId` is specified.
-   ImageFamily can be specified if `ImageId` is not specified.

hangzhou-daily-update

InstanceType

string

Yes

The instance type.

-   Instance type selection: See [Instance families](/help/en/ecs/user-guide/overview-of-instance-families) or call the [DescribeInstanceTypes](/help/en/ecs/api-describeinstancetypes) operation to query the performance data of instance types, or see [Best practices for instance type selection](/help/en/ecs/user-guide/best-practices-for-instance-type-selection) to learn about how to select instance types.
-   Query of available resources: Call the [DescribeAvailableResource](/help/en/ecs/api-describeavailableresource) operation to query resources available in a specific region or zone.

ecs.g6.large

SecurityGroupId

string

No

The ID of the security group to which to assign the instance.

sg-bp15ed6xe1yxeycg\*\*\*\*

InstanceName

string

No

The name of the instance. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with `http://` or `https://`. It can contain letters, digits, colons (:), underscores (\_), periods (.), and hyphens (-). If you do not specify this parameter, the instance ID is used as the instance name by default.

2018-12-06T103200Z

InternetChargeType

string

No

The billing method for network usage. Default value: PayByTraffic. Valid values:

-   PayByBandwidth: pay-by-bandwidth
-   PayByTraffic (default): pay-by-traffic

**Note** When the **pay-by-traffic** billing method is used for network usage, the maximum inbound and outbound bandwidths are used as the upper limits of bandwidths instead of guaranteed performance specifications. In scenarios where demand outstrips resource supplies, these maximum bandwidth values may be limited. If you want guaranteed bandwidths for your instance, use the **pay-by-bandwidth** billing method for network usage.

PayByTraffic

AutoRenew

boolean

No

Specifies whether to enable auto-renewal for the instance. This parameter is valid only if `InstanceChargeType` is set to `PrePaid`. Valid values:

-   true: enables auto-renewal.
-   false: does not enable auto-renewal.

true

AutoRenewPeriod

integer

No

The auto-renewal period of the instance. This parameter is required if AutoRenew is set to true.

Valid values if PeriodUnit is set to Month: 1, 2, 3, 6, and 12.

2

InternetMaxBandwidthIn

integer

No

The maximum inbound public bandwidth. Unit: Mbit/s. Valid values:

-   When the purchased outbound public bandwidth is less than or equal to 10 Mbit/s, the valid values of this parameter are 1 to 10 and the default value is 10.
-   When the purchased outbound public bandwidth is greater than 10 Mbit/s, the valid values of this parameter are 1 to the `InternetMaxBandwidthOut` value and the default value is the `InternetMaxBandwidthOut` value.

50

InternetMaxBandwidthOut

integer

No

The maximum outbound public bandwidth. Unit: Mbit/s. Valid values: 0 to 100.

Default value: 0.

5

HostName

string

No

The hostname of the instance.

-   The hostname cannot start or end with a period (.) or hyphen (-). It cannot contain consecutive periods (.) or hyphens (-).
-   For a Windows instance, the hostname must be 2 to 15 characters in length and cannot contain periods (.) or contain only digits. It can contain letters, digits, and hyphens (-).
-   For an instance that runs another type of operating system such as Linux, the hostname must be 2 to 64 characters in length. You can use periods (.) to separate the hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).

LocalHostName

Password

string

No

The password of the instance. The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The following special characters are supported:

```
( ) ` ~ ! @ # $ % ^ & * - _ + = | { } [ ] : ; ' < > , . ? /
```

Take note of the following items:

-   For security reasons, we recommend that you use HTTPS to send requests if the Password parameter is specified.
-   Passwords of Windows instances cannot start with a forward slash (/).
-   Passwords cannot be set for instances that run specific types of operating systems such as Others Linux and Fedora CoreOS. For these instances, only key pairs can be set.

TestEcs123!

PasswordInherit

boolean

No

Specifies whether to use the password preset in the image. When you use this parameter, leave the Password parameter empty and make sure that the selected image has a password preset.

false

DeploymentSetId

string

No

The ID of the deployment set to which to deploy the instance.

ds-bp1brhwhoqinyjd6\*\*\*\*

DeploymentSetGroupNo

integer

No

The number of the deployment set group to which to deploy the instance. If the deployment set specified by the DeploymentSetId parameter uses the high availability group strategy (AvailabilityGroup), you can use the DeploymentSetGroupNo parameter to specify a deployment set group in the deployment set. Valid values: 1 to 7.

1

ZoneId

string

No

The ID of the zone in which to create the instance. You can call the [DescribeZones](/help/en/ecs/api-describezones) operation to query the zones in a specific region.

**Note** If `VSwitchId` is specified, the zone specified by `ZoneId` must be the zone where the specified vSwitch resides. You can also leave `ZoneId` empty. Then, the system selects the zone where the specified vSwitch resides.

This parameter is empty by default.

cn-hangzhou-g

ClusterId

string

No

The ID of the cluster in which to create the instance.

**Note** This parameter will be removed in the future. We recommend that you use other parameters to ensure future compatibility.

c-bp67acfmxazb4p\*\*\*\*

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.\*\*\*\* For more information, see [How to ensure idempotence](/help/en/ecs/developer-reference/how-to-ensure-idempotence).

123e4567-e89b-12d3-a456-426655440000

VlanId

string

No

The ID of the virtual LAN (VLAN).

10

InnerIpAddress

string

No

The internal IP address to assign to the instance.

192.168.\*\*.\*\*

SystemDisk.Size

integer

No

The size of the system disk. Unit: GiB. Valid values:

-   Basic disks: 20 to 500.
-   Other disks: 20 to 2048.

The value of this parameter must be at least 20 and greater than or equal to the size of the image.

Default value: 40 or the size of the image, whichever is greater.

40

SystemDisk.Category

string

No

The category of the system disk. Valid values:

-   cloud\_essd: ESSD. If SystemDisk.Category is set to this value, you can use `SystemDisk.PerformanceLevel` to specify the performance level of the disk.
-   cloud\_efficiency: ultra disk.
-   cloud\_ssd: standard SSD.
-   cloud: basic disk.

For non-I/O optimized instances of retired instance types, the default value is cloud. For other types of instances, the default value is cloud\_efficiency.

cloud\_ssd

SystemDisk.DiskName

string

No

The name of the system disk. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with `http://` or `https://`. It can contain letters, digits, colons (:), underscores (\_), and hyphens (-).

This parameter is empty by default.

SystemDiskName

SystemDisk.Description

string

No

The description of the system disk. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.

This parameter is empty by default.

TestDescription

SystemDisk.PerformanceLevel

string

No

The performance level of the ESSD that is used as the system disk. Default value: PL1. Valid values:

-   PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
-   PL1 (default): A single ESSD can deliver up to 50,000 random read/write IOPS.
-   PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
-   PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.

For information about ESSD performance levels, see [ESSDs](/help/en/ecs/user-guide/essds) .

PL1

NodeControllerId

string

No

**Note** This parameter is in invitational preview and is not publicly available.

hide

Description

string

No

The description of the instance. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.

This parameter is empty by default.

InstanceTest

VSwitchId

string

No

The ID of the vSwitch to which to connect the instance. This parameter is required when you create an instance in a VPC. You can call the [DescribeVSwitches](/help/en/vpc/api-describevswitches) operation to query available vSwitches.

**Note** If `VSwitchId` is specified, the zone specified by `ZoneId` must be the zone where the specified vSwitch resides. You can also leave `ZoneId` empty. Then, the system selects the zone where the specified vSwitch resides.

vsw-bp1s5fnvk4gn2tws0\*\*\*\*

PrivateIpAddress

string

No

The private IP address to assign to the instance. The private IP address must be an available IP address in the CIDR block of the specified vSwitch.

172.16.236.\*

IoOptimized

string

No

Specifies whether the instance is I/O optimized. Valid values:

-   none: The instance is not I/O optimized.
-   optimized: The ECS instance is I/O optimized.

For retired instance types, the default value is none. For more information, see [Retired instance types](/help/en/ecs/user-guide/retired-instance-types).

For other instance types, the default value is optimized.

optimized

UseAdditionalService

boolean

No

Specifies whether to use the system configurations for virtual machines. Alibaba Cloud provides the Network Time Protocol (NTP) and Key Management Service (KMS) system configurations for Windows and the NTP and Yellowdog Updater, Modified (YUM) system configurations for Linux.

true

InstanceChargeType

string

No

The billing method of the instance. Valid values:

-   PrePaid: subscription. If you set this parameter to PrePaid, make sure that you have sufficient balance or credit in your account. Otherwise, an `InvalidPayMethod` error is returned.
-   PostPaid (default): pay-as-you-go.

PrePaid

Period

integer

No

The subscription period of the instance. The unit is specified by `PeriodUnit`. This parameter is valid and required only when `InstanceChargeType` is set to `PrePaid`. If `DedicatedHostId` is specified, the value of Period must not exceed the subscription period of the specified dedicated host. Valid values:

Valid values if PeriodUnit is set to Month: 1, 2, 3, 6, and 12.

1

PeriodUnit

string

No

The unit of the subscription period. Valid values:

Month

Default value: Month.

Month

UserData

string

No

The user data of the instance. The user data must be encoded in Base64. The maximum size of raw data is 32 KB.

ZWNobyBoZWxsbyBlY3Mh

SpotStrategy

string

No

The bidding policy for the pay-as-you-go instance. This parameter is valid only if you set `InstanceChargeType` to `PostPaid`. Valid values:

-   NoSpot (default): The instance is created as a regular pay-as-you-go instance.
-   SpotWithPriceLimit: The instance is a spot instance for which you specify the maximum hourly price.
-   SpotAsPriceGo: The instance is a spot instance for which the market price at the time of purchase is automatically used as the bid price. The market price can be up to the pay-as-you-go price.

NoSpot

KeyPairName

string

No

The name of the key pair.

**Note** For Windows instances, this parameter is ignored. This parameter is empty by default. The `Password` parameter takes effect even if the KeyPairName parameter is specified.

KeyPairTestName

SpotPriceLimit

float

No

The maximum hourly price of the instance. The value is accurate to three decimal places. This parameter is valid only when `SpotStrategy` is set to `SpotWithPriceLimit`.

0.98

SpotDuration

integer

No

The protection period of the spot instance. Unit: hours. Default value: 1. Valid values:

-   1: After a spot instance is created, Alibaba Cloud ensures that the instance is not automatically released within 1 hour. After the 1-hour protection period ends, the system compares the bid price with the market price and checks the resource inventory to determine whether to retain or release the instance.
-   0: After a spot instance is created, Alibaba Cloud does not ensure that the instance runs for 1 hour. The system compares the bid price with the market price and checks the resource inventory to determine whether to retain or release the instance.

**Note**

-   You can set this parameter only to 0 or 1.
    
-   The spot instance is billed by second. Specify an appropriate protection period.
    
-   Alibaba Cloud sends an ECS system event to notify you 5 minutes before the instance is released.
    

1

SpotInterruptionBehavior

string

No

The interruption mode of the spot instance. Valid values:

-   Terminate: The instance is released.
    
-   Stop: The instance is stopped in economical mode.
    
    For information about the economical mode, see [Economical mode](/help/en/ecs/user-guide/economical-mode).
    

Default value: Terminate.

Terminate

RamRoleName

string

No

The name of the instance Resource Access Management (RAM) role. You can call the [ListRoles](/help/en/ram/api-listroles) operation provided by RAM to query the instance RAM roles that you created.

RAMTestName

SecurityEnhancementStrategy

string

No

Specifies whether to enable security hardening. Valid values:

-   Active: enables security hardening. This value applies only to public images.
-   Deactive: disables security hardening. This value is applicable to all images.

Active

ResourceGroupId

string

No

The ID of the resource group to which to assign the instance.

rg-bp67acfmxazb4p\*\*\*\*

HpcClusterId

string

No

The ID of the high performance computing (HPC) cluster to which to assign the instance.

hpc-bp67acfmxazb4p\*\*\*\*

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request. Valid values:

-   true: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, service limits, and unavailable ECS resources. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
-   false (default): performs a dry run and performs the actual request. If the request passes the dry run, the operation is performed.

false

DedicatedHostId

string

No

The ID of the dedicated host on which to create the instance.

You can call the [DescribeDedicatedHosts](/help/en/dedicated-host/developer-reference/api-describededicatedhosts) operation to query the list of dedicated host IDs.

**Note** Spot instances (spot instances) cannot be created on dedicated hosts. If you specify DedicatedHostId, SpotStrategy and SpotPriceLimit are automatically ignored.

dh-bp67acfmxazb4p\*\*\*\*

CreditSpecification

string

No

The performance mode of the burstable instance. Valid values:

-   Standard: standard mode. For more information, see the "Standard mode" section in the [Overview of burstable instances](/help/en/ecs/user-guide/burst-performance-instance-overview) topic.
-   Unlimited: unlimited mode. For more information, see the "Unlimited mode" section in the [Burstable instances](/help/en/ecs/user-guide/burst-performance-instance-overview) topic.

Standard

DeletionProtection

boolean

No

Specifies whether to enable release protection for the instance. This parameter indicates whether you can use the ECS console or call the [DeleteInstance](/help/en/ecs/api-deleteinstance) operation to release the instance.

-   true: enables release protection.
-   false (default): disables release protection.

**Note** This parameter is applicable only to pay-as-you-go instances. It can protect instances against manual releases, but not against automatic releases.

false

HibernationOptions.Configured

boolean

No

**Note** This parameter is in invitational preview and is not publicly available.

false

Affinity

string

No

Specifies whether to associate the instance on a dedicated host with the dedicated host. Valid values:

-   default: does not associate the instance with the dedicated host. When you start an instance that was stopped in economical mode, the instance is automatically deployed to another dedicated host in the automatic deployment resource pool if the available resources of the original dedicated host are insufficient.
-   host: associates the instance with the dedicated host. When you start an instance that was stopped in economical mode, the instance remains on the original dedicated host. If the available resources of the original dedicated host are insufficient, the instance cannot start.

Default value: default.

default

Tenancy

string

No

Specifies whether to create the instance on a dedicated host. Valid values:

-   default: creates the instance on a non-dedicated host.
-   host: creates the instance on a dedicated host. If you do not specify `DedicatedHostId`, Alibaba Cloud selects a dedicated host for the instance.

Default value: default.

default

StorageSetId

string

No

The ID of the storage set.

ss-bp1j4i2jdf3owlhe\*\*\*\*

StorageSetPartitionNumber

integer

No

The maximum number of partitions in the storage set. Valid values: greater than or equal to 2.

2

HttpEndpoint

string

No

Specifies whether to enable the access channel for instance metadata. Valid values:

-   enabled
-   disabled

Default value: enabled.

**Note** For more information about instance metadata, see [Overview of instance metadata](/help/en/doc-detail/49122.html).

enabled

HttpTokens

string

No

Specifies whether to forcibly use the security hardening mode (IMDSv2) to access instance metadata. Valid values:

-   optional: does not forcefully use the security hardening mode (IMDSv2).
-   required: forcefully uses the security hardening mode (IMDSv2). After you set this parameter to required, you cannot access instance metadata in normal mode.

Default value: optional.

**Note** For more information about the modes of accessing instance metadata, see [Access mode of instance metadata](/help/en/doc-detail/150575.html).

optional

HttpPutResponseHopLimit

integer

No

**Note** This parameter is in invitational preview and is not publicly available.

0

PrivatePoolOptions.MatchCriteria

string

No

The type of the private pool to use to start the instance. A private pool is generated when an elasticity assurance or a capacity reservation takes effect. You can select a private pool to start instances. Valid values:

-   Open: open private pool. The system selects a matching open private pool to start the instance. If no matching open private pools are found, resources in the public pool are used. When you set this parameter to Open, you can leave the `PrivatePoolOptions.Id` parameter empty.
-   Target: specified private pool. The system uses the capacity in a specified private pool to start the instance. If the specified private pool is unavailable, the instance cannot be started. If you set this parameter to Target, you must specify the `PrivatePoolOptions.Id` parameter.
-   None: no private pool. The capacity in private pools is not used.

Default value: none.

In the following scenarios, the PrivatePoolOptions.MatchCriteria parameter can be set only to `None` or left empty:

-   Create a spot instance.
-   Create an instance in the classic network.
-   Create an instance on a dedicated host.

Open

PrivatePoolOptions.Id

string

No

The ID of the private pool. The ID of a private pool is the same as that of the elasticity assurance or capacity reservation for which the private pool is generated.

eap-bp67acfmxazb4\*\*\*\*

DataDisk

array<object>

No

The data disks.

object

No

PerformanceLevel

string

No

The performance level of the ESSD to use as data disk N. The value of N must be the same as that in `DataDisk.N.Category` when DataDisk.N.Category is set to cloud\_essd. Valid values:

-   PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
-   PL1 (default): A single ESSD can deliver up to 50,000 random read/write IOPS.
-   PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
-   PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.

For more information about ESSD performance levels, see [ESSDs](/help/en/ecs/user-guide/essds) .

PL2

Description

string

No

The description of data disk N. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.

TestDescription

SnapshotId

string

No

The ID of the snapshot to use to create data disk N. Valid values of N: 1 to 16.

-   If `DataDisk.N.SnapshotId` is specified, `DataDisk.N.Size` is ignored. The data disk is created based on the size of the specified snapshot.
-   Use snapshots created on or after July 15, 2013. Otherwise, an error is returned and your request is rejected.

s-bp17441ohwka0yuh\*\*\*\*

Size

integer

No

The size of data disk N. Valid values of N: 1 to 16. Unit: GiB. Valid values:

-   Valid values if you set DataDisk.N.Category to cloud\_efficiency: 20 to 32768.
    
-   Valid values if you set DataDisk.N.Category to cloud\_ssd: 20 to 32768.
    
-   Valid values if you set DataDisk.N.Category to cloud\_essd: vary based on the `DataDisk.N.PerformanceLevel` value.
    
    -   Valid values when DataDisk.N.PerformanceLevel is set to PL0: 1 to 65536.
    -   Valid values when DataDisk.N.PerformanceLevel is set to PL1: 20 to 65536.
    -   Valid values when DataDisk.N.PerformanceLevel is set to PL2: 461 to 65536.
    -   Valid values when DataDisk.N.PerformanceLevel is set to PL3: 1261 to 65536.
-   Valid values if you set DataDisk.N.Category to cloud: 5 to 2000.
    

**Note** The value of this parameter must be greater than or equal to the size of the snapshot specified by `SnapshotId`.

2000

Device

string

No

The mount point of data disk N.

**Note** This parameter is applicable to scenarios in which a full image is used to create instances. A full image is an image that contains an operating system, application software, and business data. For these scenarios, you can set this parameter to the mount point of data disk N contained in the full image and modify the `DataDisk.N.Size` and `DataDisk.N.Category` parameters to change the category and size of data disk N created based on the image.

/dev/xvdb

DiskName

string

No

The name of data disk N. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (\_), periods (.), and hyphens (-).

DataDiskName

Category

string

No

The category of data disk N. Valid values:

-   cloud\_efficiency: utra disk.
    
-   cloud\_ssd: standard SSD.
    
-   cloud\_essd: ESSD.
    
-   cloud: basic disk.
    
-   cloud\_auto: ESSD AutoPL disk.
    
-   cloud\_essd\_entry: ESSD Entry disk.
    
    \*\*
    
    **Note** This parameter can be set to `cloud_essd_entry` only when `InstanceType` is set to `ecs.u1` or `ecs.e`.
    
-   elastic\_ephemeral\_disk\_standard: standard elastic ephemeral disk.
    
-   elastic\_ephemeral\_disk\_premium: premium elastic ephemeral disk.
    

For I/O optimized instances, the default value is cloud\_efficiency. For non-I/O optimized instances, the default value is cloud.

cloud\_ssd

DeleteWithInstance

boolean

No

Specifies whether to release data disk N when the instance is released. Valid values:

-   true
-   false

Default value: true.

true

KMSKeyId

string

No

The ID of the KMS key to use for data disk N.

0e478b7a-4262-4802-b8cb-00d\*\*\*\*

EncryptAlgorithm

string

No

**Note** This parameter is not publicly available.

hide

Encrypted

boolean

No

Specifies whether to encrypt data disk N. Valid values:

-   true
-   false

Default value: false.

false

StorageClusterId

string

No

The ID of the dedicated block storage cluster to which data disk N belongs. If you want to use a disk in a dedicated block storage cluster as data disk N when you create the instance, specify this parameter.

dbsc-j5e1sf2vaf5he8m2\*\*\*\*

Arn

array<object>

No

**Note** This parameter is in invitational preview and is not publicly available.

object

No

RoleType

string

No

**Note** This parameter is in invitational preview and is not publicly available.

Primary

Rolearn

string

No

**Note** This parameter is in invitational preview and is not publicly available.

acs:ram::123456789012\*\*\*\*:role/adminrole

AssumeRoleFor

long

No

**Note** This parameter is in invitational preview and is not publicly available.

1234567890

Tag

array<object>

No

The tags to add to the instance.

object

No

Tag N to add to the instance.

key

string

No

The key of tag N to add to the instance.

**Note** This parameter will be removed in the future. We recommend that you use Tag.N.key to ensure future compatibility.

Test

Key

string

No

The key of tag N to add to the instance, disks, and primary ENI. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.

TestKey

Value

string

No

The value of tag N to add to the instance, disks, and primary ENI. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.

TestValue

value

string

No

The value of tag N to add to the instance.

**Note** This parameter will be removed in the future. We recommend that you use Tag.N.Value to ensure future compatibility.

Test

SystemDisk

object

No

The parameter is related to the system disk. You can use `StorageClusterId` to specify the ID of a dedicated block storage cluster.

StorageClusterId

string

No

The ID of the dedicated block storage cluster. If you want to use disks in a dedicated block storage cluster as system disks when you create instances, you need to specify this parameter.

dbsc-j5e1sf2vaf5he8m2\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

InstanceId

string

The instance ID.

i-bp67acfmxazb4p\*\*\*\*

OrderId

string

The order ID. This parameter is returned only if `InstanceChargeType` is set to PrePaid.

1234567890

TradePrice

float

The transaction price.

0.165

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****",
  "InstanceId": "i-bp67acfmxazb4p****",
  "OrderId": 1234567890,
  "TradePrice": 0.165
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidStorageClusterId.CapacityNotEnough

The remaining capacity of the current dedicated storage cluster is less than the size of disk.

The remaining capacity of the dedicated block storage cluster to which the disk belongs is insufficient.

400

InvalidStorageClusterId.StatusNotSupport

The current status of the dedicated storage cluster cannot create a cloud disk yet.

\-

400

InvalidStorageClusterId.ZoneIdEmpty

The specified param ZoneId cannot be empty when StorageClusterId given.

\-

400

InvalidStorageClusterId.PerformanceLevelNotMatch

The current dedicated storage cluster cannot create this performance level of disk.

\-

400

InvalidStorageClusterId.CategoryNotMatch

The current dedicated storage cluster cannot create this category of disk.

\-

400

InvalidStorageClusterId.DiskSizeEmpty

The specified param DiskSize cannot be empty when StorageClusterId given.

\-

400

InvalidInstanceType.ValueUnauthorized

The specified InstanceType is not authorized.

You are not authorized to use the specified instance type.

400

InvalidInternetChargeType.ValueNotSupported

The specified InternetChargeType is not valid.

The specified InternetChargeType parameter is invalid.

400

InvalidParameter

The specified parameter "InternetMaxBandwidthOut" is not valid.

\-

400

InvalidSystemDiskCategory.ValueNotSupported

The specified parameter " SystemDisk.Category " is not valid.

\-

400

InvalidDataDiskSize.ValueNotSupported

The specified DataDisk.n.Size beyond the permitted range, or the capacity of snapshot exceeds the size limit of the specified disk category.

The specified DataDisk.N.Size parameter is invalid or the snapshot size exceeds the maximum capacity allowed for the specified disk category.

400

InvalidInstanceType.ValueNotSupported

The specified InstanceType does not exist or beyond the permitted range.

The specified instance type does not exist or you are not authorized to manage instances of this instance type.

400

InvalidDescription.Malformed

The specified parameter "Description" is not valid.

The source description can be 2 to 256 characters in length. It cannot start with http:// and https://.

400

InvalidHostName.Malformed

The specified parameter "HostName" is not valid.

\-

400

InvalidPassword.Malformed

The specified parameter "Password" is not valid.

\-

400

InvalidPasswordParam.Mismatch

The input password should be null when passwdInherit is true.

The Password parameter must be left empty when the PasswdInherit parameter is used.

400

InvalidSystemDiskCategory.ValueNotSupported

The specified parameter "SystemDisk.Category" is not valid.

The specified parameter system disk specification is invalid.

400

InvalidDiskName.Malformed

The specified parameter "SystemDisk.DiskName or DataDisk.n.DiskName" is not valid.

\-

400

InvalidDiskDescription.Malformed

The specified parameter "SystemDisk.DiskDescription" or "DataDisk.n.Description" is not valid.

The specified SyatemDisk.DiskDescription or DataDisk.n.Description is invalid.

400

InvalidDataDiskCategory.ValueNotSupported

The specified parameter "DataDisk.n.Category" is not valid.

\-

400

InvalidDataDevice.Malformed

The specified parameter "DataDisk.n.Device" is not valid.

\-

400

InvalidNodeControllerId.Malformed

The specified parameter "NodeControllerId" is not valid.

\-

400

InvalidInnerIpAddress.Malformed

The specified parameter "InnerIpAddress" is not valid.

\-

400

InvalidInnerIpAddress.Unusable

The specified InnerIpAddress is already used or not found in usable ip range.

The specified internal IP address is unavailable.

400

OperationDenied

The specified parameter "VlanId" is not valid or vlan has not enough IP address.

\-

400

InvalidParameter.Conflict

The specified image does not support the specified instance type.

The specified image cannot be used for instances of the specified instance type.

400

ImageNotSupportCloudInit

The specified image does not support cloud-init.

\-

400

InvalidSnapshotId.BasedSnapshotTooOld

The specified snapshot is created before 2013-07-15.

The specified snapshot was created before July 15, 2013.

400

QuotaExceed.AfterpayInstance

The maximum number of Pay-As-You-Go instances is exceeded: %s.

\-

400

InvalidMarketImageChargeType.NotSupport

The specified chargeType of marketImage is unsupported.

The billing method of the Alibaba Cloud Marketplace image is not supported.

400

InvalidInstanceName.Malformed

The specified parameter "InstanceName" is not valid.

The specified InstanceName parameter is invalid.

400

InvalidDiskDescription.Malformed

The specified parameter "SystemDisk.DiskDescription or DataDisk.n.Description" is not valid.

\-

400

InvalidParameter.Conflict

The specified region and cluster do not match.

The specified region and cluster do not correspond to each other.

400

InvalidParameter.Mismatch

Specified security group and virtual switch are not in the same VPC.

The specified security group and vSwitch do not belong to the same VPC.

400

InvalidNetworkType.Mismatch

Specified parameter InternetMaxBandwidthIn or InternetMaxBandwidthOut conflict with instance network type.

The specified InternetMaxBandwidthIn or InternetMaxBandwidthOut parameter conflicts with the instance network type.

400

InvalidNetworkType.Mismatch

Specified parameter "InternetChargeType" conflict with instance network type.

\-

400

InvalidPrivateIpAddress

Specified private IP address is not in the CIDR block of virtual switch.

The specified private IP address does not fall within the CIDR block of the specified vSwitch.

400

InvalidPrivateIpAddress.Malformed

Specified private IP address is invalid.

\-

400

InvalidPrivateIpAddress.Duplicated

Specified private IP address is duplicated.

\-

400

QuotaExceeded.PrivateIpAddress

Don't have enough private IPs in this switch.

\-

400

QuotaExceeded

Living instances quota exceeded in this VPC.

The maximum number of the living instance is exceeded.

400

IncorrectVSwitchStatus

The current status of virtual switch does not support this operation.

The specified vSwitch is in the Pending state and cannot be deleted.

400

InvalidParameter.Mismatch

Specified virtual switch is not in the specified zone.

The specified vSwitch does not exist in the specified zone.

400

ResourceNotAvailable

Resource you requested is not available in this region or zone.

VPC is not supported by the specified region or zone.

400

MissingParameter

The input parameter "VSwitchId" that is mandatory for processing this request is not supplied.

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

MissingParamter

The specified parameter "Period" is not null.

\-

400

InvalidPeriod

The specified period is not valid.

The specified period is invalid.

400

InvalidDataDiskCategory.ValueNotSupported

The specified parameter " DataDisk.n.Category " is not valid.

\-

400

InstanceDiskCategoryLimitExceed

The specified DataDisk.n.Size beyond the permitted range, or the capacity of snapshot exceeds the size limit of the specified disk category.

The specified DataDisk.N.Size parameter is invalid or the snapshot size exceeds the maximum capacity allowed for the specified disk category.

400

InvalidParameter

The specified vm bandwidth is not valid.

The specified bandwidth value of the instance is invalid.

400

InvalidSystemDiskCategory.ValueNotSupported

The specified parameter SystemDisk.Category is not valid.

\-

400

InvalidParameter.Bandwidth

The specified parameter Bandwidth is not valid.

The specified bandwidth value is invalid.

400

InvalidIPAddress.AlreadyUsed

The specified IPAddress is already used by other resource.

The specified IP address is being used by another resource.

400

InvalidUserData.SizeExceeded

The specified parameter "UserData" exceeds the size.

\-

400

InvalidUserData.NotSupported

The specified parameter "UserData" only support the vpc and IoOptimized Instance.

\-

400

InstanceDiskNumber.LimitExceed

The total number of specified disk in an instance exceeds.

The number of disks on an instance exceeds the upper limit.

400

Account.Arrearage

Your account has an outstanding payment.

Your account has overdue payments.

400

InvalidDiskCategory.ValueNotSupported

The specified parameter "DiskCategory" is not valid.

The specified cloud disk type DiskCategory is invalid.

400

InvalidAutoRenewPeriod.ValueNotSupported

The specified autoRenewPeriod is not valid.

The specified AutoRenewPeriod parameter is invalid.

400

QuotaExceed.AfterpayInstance

The maximum number of Pay-As-You-Go instances is exceeded.

\-

400

InvalidSpotStrategy

The specified SpotStrategy is not valid.

The specified SpotStrategy parameter is invalid.

400

InvalidSpotParam.EmptyZoneID

The specified ZoneId is empty when SpotStrategy is set.

The ZoneId parameter is not specified while the SpotStrategy parameter is specified.

400

InvalidSpotPriceLimit

The specified SpotPriceLimitis not valid.

The specified SpotPriceLimit parameter is invalid.

400

InvalidSpotDuration

The specified SpotDuration is not valid.

The specified SpotDuration parameter is invalid.

400

InvalidSpotAuthorized

The specified Spot param is unauthorized.

You are not authorized to set the SpotDuration parameter.

400

InvalidSpotPrepaid

The specified Spot type is not support PrePay Instance.

Spot instances do not support the subscription billing method.

400

InvalidSpotAliUid

The specified UID is not authorized to use SPOT instance.

You are not authorized to create spot instances.

400

InvalidTagKey.Malformed

The specified Tag.n.Key is not valid.

The specified Tag.N.Key parameter is invalid.

400

InvalidParameter.Bandwidth

%s

The specified bandwidth value is invalid.

400

InvalidDataDiskCategory.ValueNotSupported

%s

\-

400

InvalidSystemDiskCategory.ValueNotSupported

%s

The specified system disk category is invalid.

400

InvalidParameter.Conflict

%s

The specified parameter is invalid. Check whether parameter conflicts exist. %s is a variable. An error message is dynamically returned based on call conditions.

400

InvalidInternetChargeType.ValueNotSupported

%s

The specified InternetChargeType parameter is invalid.

400

InvalidInstanceType.ValueNotSupported

%s

The operation is not supported by the specified instance type.

400

RegionUnauthorized

%s

\-

400

Zone.NotOnSale

%s

The requested resources are unavailable in the specified zone. %s is a variable. An error message is dynamically returned based on call conditions.

400

InvalidSystemDiskSize.ValueNotSupported

%s

The specified system disk size is invalid.

400

InvalidDataDiskSize.ValueNotSupported

%s

\-

400

InvalidInstanceType.ValueNotSupported

The specified parameter "KeyPairName" only support IoOptimized Instance.

\-

400

OperationDenied

The specified InstanceType or Zone is not available or not authorized.

The specified instance type or zone is unavailable or you are not authorized to use the specified instance type or access the specified zone.

400

InvalidParameter.EncryptedIllegal

%s

The specified parameter is invalid. Check whether your encryption operation is supported. %s is a variable. An error message is dynamically returned based on call conditions.

400

InvalidParameter.EncryptedNotSupported

%s

The specified parameter is invalid and your encryption operation is not supported. %s is a variable. An error message is dynamically returned based on call conditions.

400

EncryptedOption.Conflict

%s

The specified parameter is invalid and your encryption operation is not supported. %s is a variable. An error message is dynamically returned based on call conditions.

400

InvalidSpotPriceLimit.LowerThanPublicPrice

The specified parameter "soptPriceLimit" can't be lower than current public price.

\-

400

InvalidHpcClusterId.Unnecessary

The specified HpcClusterId is unnecessary.

The HpcClusterId parameter is specified.

400

InvalidVSwitchId.Necessary

The VSwitchId is necessary.

The VSwitchId parameter is required.

400

InvalidHpcClusterId.Necessary

The HpcClusterId is necessary.

The HpcClusterId parameter is required.

400

InvalidHpcClusterId.NotFound

The specified HpcClusterId is not found.

The specified HpcClusterId parameter does not exist.

400

InvalidHpcClusterId.Creating

The specified HpcClusterId is creating.

The specified HPC cluster is being created.

400

InvalidPeriodUnit.ValueNotSupported

The specified parameter PeriodUnit is not valid.

The specified PeriodUnit parameter is invalid.

400

IncorrectImageStatus

Encrypted snapshots do not support this operation.

Encrypted snapshots do not support the operation.

400

InvalidTagValue.Malformed

The specified Tag.n.Value is not valid.

The specified tag value is invalid.

400

InvalidSecurityGroup.NotInDefaultVpc

%s

The security group is not in the default VPC. Check whether the specified SecurityGroupId parameter is correct.

400

VpcNotFound

Vpc is not found according to the specified VSwitch or the vpc does not belong to you.

No VPC is found based on the specified vSwitch or the corresponding VPC does not belong to you.

400

InvalidSpotInterruptionBehavior

%s

The specified SpotInterruptionBehavior parameter is not supported.

400

OperationDenied.IllegalPaymentPolicy

The current payment policy is illegal, please connect your service provider to authenticate relative agreement.

The current payment policy is invalid. Contact your service provider to validate agreements relevant to the payment policy.

400

InvalidDeploymentOnHost

%s

\-

400

InvalidInstanceChargeType.NotSupport

The Dedicated host not support the specified Instance charge type.

This dedicated host does not support instances that use the specified billing method.

400

InvalidNetworkType.NotSupported

The classic networkType not support create ECS on dedicatedHost.

\-

400

InvalidDedicatedHostId.NotFound

The specified DedicatedHostId does not exist.

\-

400

InvalidDedicatedHostStatus.NotSupport

Operation denied due to dedicated host status.

\-

400

IncorrectDedicatedHostStatus

The current status of the resource does not support this operation.

The resource is in a state that does not support the current operation.

400

ChargeTypeViolation.PostPaidDedicatedHost

Prepaid instance onto postpaid dedicated host is not allowed.

\-

400

InvalidPeriod.ExceededDedicatedHost

Instance expired date can't exceed dedicated host expired date.

\-

400

InvalidInstanceType.ValueUnauthorized

The specified InstanceType is not authorize.

You are not authorized to use the instance type.

400

DedicatedHostType.Unmatched

The specified DedicatedHostType doesn?t match the instance type.

\-

400

NoAvaliableDedicatedHost

There's no enough resource on the specified dedicated host.

\-

400

NoAvaliableDedicatedHost

No available dedicated host or not enough resource on dedicated host.

\-

400

InvalidParameter.Affinity

The specified Affinity is invalid.

\-

400

InvalidParameter.Tenancy

The specified Tenancy is invalid.

\-

400

InvalidParam.Tenancy

The specified Tenancy is invalid.

The specified Tenancy parameter is invalid.

400

InvalidParameter.CreditSpecification

The specified CreditSpecification is not supported in this region.

The running mode of the specified burst performance instance is not supported in this zone.

400

IncorrectImageStatus

The specified image is an Alibaba Cloud Marketplace image. The sale of this image has ended. For more information, contact the image service provider.

The specified image is an Alibaba Cloud Marketplace image that is no longer sold. For more information about the image, contact the image provider.

400

InvalidInstanceType.NotSupported

The specified instanceType is not supported by the deployment set.

The current deployment set does not support the specified instance type. Try another instance type.

400

InvalidInstanceType.NotSupported

The specified instanceType is not supported by the image architecture.

The specified image schema does not support this instance type.

400

InvalidVpcZone.NotSupported

Zone of the specified VSwitch is not available for creating, please try in other zones.

The default vSwitch cannot be created in the specified zone. Try another zone.

400

IncorrectDefaultVpcStatus

The status of the default VPC is invalid.

The state of the default VPC is invalid.

400

InvalidParameter.EncryptedIllegal

The specified parameter Encrypted must be true when kmsKeyId is not empty.

The encryption feature is not enabled after a Key Management Service (KMS) key ID is specified.

400

IoOptimized.NotSupported

The specified instance must be IoOptimized instance when kmsKeyId is not empty.

The specified instance must be an I/O optimized one when the KMSKeyId parameter is specified.

400

InvalidClientToken.ValueNotSupported

The ClientToken provided is invalid.

The specified ClientToken parameter is invalid.

400

OperationDenied

The current user does not support this operation.

Your account does not support this operation.

400

InvalidCapacityReservationId.NotFound

The specified CapacityReservationId does not exist.

\-

400

LackResource

There's no enough resource on the specified capacity reservation.

\-

400

Duplicate.TagKey

The Tag.N.Key contain duplicate key.

The specified tag key already exists. Tag keys must be unique.

400

InvalidParameter.Arns

The specified Arns is not valid.

The Arns parameter is invalid. Please check and pass it again.

400

InvalidOperation.NotSupportEnterpriseGroup

The specified instance type doesn't support enterprise level security group.

\-

400

NoAvaliableDedicatedHost

A dedicated host with sufficient available resources cannot be found.

\-

400

IncorrectVSwitchStatus

The current status of vSwitch does not support this operation.

\-

400

InvalidOperation.MultiGroupType

The specified instance can't join different types of security group.

\-

400

InvalidAccountStatus.PayAmountLimitExceeded

Your account is being restricted, because you have no default payment method or you are not authorized.

\-

400

InvalidPerformanceLevel.Malformed

The specified parameter DataDisk.n.PerformanceLevel is not valid.

\-

400

InvalidSecurityGroup.NetworkType

%s

\-

400

QuotaExceeded.PrepayDataDiskCapacity

The quota of prepay data disk capacity exceeds.

\-

400

InvalidCustomInstanceType.NotSupported

The specified custom instance type is invalid.

\-

400

InvalidParameter

%s

The specified parameter is invalid.

400

QuotaExceeded.PrivateIpAddress

There is not enough private ip in the specified VSwitch.

\-

400

InvalidOperation.EniCountExceeded

The maximum number of eni in a enterprise security group is exceeded.

\-

400

AccountForbidden.ProductCreationLimited

The commodity must be officially operated by Aliyun and in pay-as-you-go billing method.

\-

400

UnexpectedImageFamily.ImageIdSupplied

The input parameter ImageFamily must be null when image id is set.

The ImageFamily parameter must be left empty if an image ID is specified.

400

InvalidEncrypted.NotMatchEncryptAlgorithm

The specified parameter Encrypted must be true when EncryptAlgorithm is not empty.

\-

400

InvalidEncrypted.NotMatchKmsKeyId

The specified parameter Encrypted must be true when KmsKeyId is not empty.

\-

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

InvalidHttpEndpoint.NotSupported

The specified HttpEndpoint not supported, you can use enabled(default) or disabled.

The specified HttpEndpoint parameter is invalid. The valid values of this parameter are enabled and disabled. The default value is enabled.

400

InvalidHttpTokens.NotSupported

The specified HttpTokens not supported, you can use optional(default) or required.

The specified HttpTokens parameter is invalid. The valid values of this parameter are optional and required. The default value is optional.

400

InvalidHttpPutResponseHopLimit.NotSupported

The specified HttpPutResponseHopLimit not supported, more than 1 and less than 64 is reasonable.

The specified HttpPutResponseHopLimit parameter is invalid. The valid values of this parameter are 1 to 64.

400

InvalidPrivateIpAddress.Malformed

Specified private IP address is malformed.

The specified private IP address is invalid.

400

InvalidOperation.VpcHasEnabledAdvancedNetworkFeature

The specified vpc has enabled advanced network feature.

Advanced features are enabled for the specified VPC. You cannot create low-specification instances in the VPC.

400

InvalidChargeType.CapacityReservationNotSupported

%s

\-

400

InvalidPerformanceLevel.ValueNotSupported

The current ZoneId or InstanceType does not support PL0 of cloud\_essd.

\-

400

InvalidKMSKeyId.NotSymmetric

The specified parameter KmsKeyId must be symmetric.

The KMSKey used for encryption must be a symmetric encryption key.

400

InvalidDedicatedHostClusterId.NotFound

The specified DedicatedHostClusterId does not exist.

\-

400

InvalidDedicatedHostClusterId.InValid

The specified Dedicated Host Cluster is invalid.

\-

400

InvalidOperation.UserNotSupported

Reseller user do not support purchase at the moment.

\-

400

InvalidDeploymentSetId.NotFound

The parameter DeploymentSetId is invalid.

\-

400

MissingParameter.PrivatePoolOptionsId

The specified PrivatePoolOptions.Id should not be null.

The PrivatePoolOptions.Id parameter is required.

400

Invalid.PrivatePoolOptionsId

The specified PrivatePoolOptions.Id is invalid.

The specified PrivatePoolOptions.Id parameter is invalid.

400

Invalid.PrivatePoolOptionsId

The parameter PrivatePoolOptions.Id should be null when PrivatePoolOptions.MatchCriteria is not Target.

The PrivatePoolOptions.Id parameter is specified when the PrivatePoolOptions.MatchCriteria parameter is set to a value other than Target.

400

DedicatedHostNotSupported

DedicatedHost is not supported for PrivatePool.

The private pool does not support dedicated hosts.

400

SpotNotSupported

Spot is not supported for PrivatePool.

The private pool does not support spot instances.

400

ClassicNetworkNotSupported

Classic network is not supported for PrivatePool.

The private pool does not support instances in the classic network.

400

Invalid.InstanceId

Instance does not exist.

The specified instance does not exist.

400

Invalid.PrivatePoolOptions.MatchCriteria

Target mode does not support this operation.

The operation is not supported while the PrivatePoolOptions.MatchCriteria parameter is set to Target.

400

MissingParameter.PrivatePoolOptions.Id

The specified PrivatePoolOptions.Id should not be null.

The PrivatePoolOptions.Id parameter is required.

400

Invalid.PrivatePoolOptions.Id

The PrivatePool does not exist.

The private pool does not exist.

400

Invalid.InstanceType

The InstanceType does not match the PrivatePool.

The instance type and the private pool do not match.

400

Invalid.InstanceChargeType

The InstanceChargeType does not match the PrivatePool.

The instance billing method and the private pool do not match.

400

Invalid.ZoneId

The ZoneId does not match the PrivatePool.

The zone and the private pool do not match.

400

Invalid.PrivatePoolOptions.NoStock

The PrivatePool has been used up.

The capacity of the specified private pool (elastic assurance, capacity reservation) has been used up.

400

Invalid.PrivatePoolOptions.MatchCriteria

The PrivatePoolOptions.MatchCriteria does not match the PrivatePool.

The specified PrivatePoolOptions.MatchCriteria parameter does not match the private pool.

400

InvalidPlatform.ValueNotSupported

The Platform does not match the PrivatePool.

The specified Platform parameter does not match the private pool.

400

Invalid.PrivatePoolOptions.status

The PrivatePool is expired or inactive.

The private pool has expired or is not activated.

400

Invalid.PrivatePoolOptions.status

The PrivatePool status is not valid.

The specified private pool state is incorrect.

400

Invalid.PrivatePoolOptions.status

The Instance should be created within 48 hours once the PrivatePool is started.

The Instance should be created within 48 hours once the PrivatePool is started.

400

InvalidAliUid

The PrivatePool does not belong to the user of the Instance.

The specified private pool does not belong to the user who attempted to create the instance.

400

Invalid.InstanceId

The Instance dose not attached to a PrivatePool.

The instance and the private pool do not match.

400

HibernationConfigured.InstanceTypeNotSupport

The specified instance type is not support.

\-

400

HibernationConfigured.ImageNotEncrypted

The hibernation configured instance only support encrypted image.

\-

400

HibernationConfigured.MemorySizeTooBig

The hibernation configured instance memory size is too big.

\-

400

InvalidSystemDiskSize.LessThanMemSize

The specified parameter SystemDisk.Size is less than the memory size.

\-

400

InvalidCloudBoxZone.OperationNotSupported

The cloud box zone does not support creating prepaid or encrypted resources.

\-

400

InvalidInternetMaxBandwidthOut.Malformed

The specified parameter InternetMaxBandwidthOut is not valid.

The specified InternetMaxBandwidthOut parameter is invalid.

400

InvalidInternetMaxBandwidthIn.Malformed

The specified parameter InternetMaxBandwidthIn is not valid.

The specified InternetMaxBandwidthIn parameter is invalid.

400

InvalidParameter.CloudboxNotSupported

%s

\-

400

NotSupportSnapshotEncrypted.ShareImage

Shared snapshot creating encrypted disks with native snapshot encrypt is not supported.

\-

400

QuotaExceed.DiskCapacity

The used capacity of disk type has exceeded the quota in the zone, %s.

The capacity of disks that belong to the specified disk category exceeds the quota limit for the zone.

400

InvalidPeriod.ExceededDedicatedHost

Instance expired date can not exceed dedicated host expired date.

The expiration date of the instance is later than that of the dedicated host.

400

InvalidParameter.DataEncryptedKeyCreateFailed

Create kms data encrypted key fail. If you need further assistance, you can contact the KMS Technical Support.

Failed to create a data key using the KMS master key. Please contact the KMS attendant for further troubleshooting.

400

InvalidDiskCategory.NotSupported

The specified disk category is not supported.

The specified disk category does not support this operation.

400

InvalidDestinationZone.DeploymentSetMismatch

Error happened, %s.

\-

400

NoPermission.Price

The operation requires price permission. Please either apply for permission from your main account, or set the parameter AutoPay as true.

This operation requires price permission. Please apply for permission to your master account, or set the parameter AutoPay to true for automatic payment.

400

InvalidParameter.DedicatedRegionNotSupported

The specified action is rejected because the specified ECS instance in the dedicated region does not support public IP.

Parameter error codes not supported in the dedicated region

400

InvalidParameter.KmsNotEnabled

Failed to perform this operation because KMS is not activated.

You need to activate KMS key management service.

400

InvalidParameter.Encrypted.KmsNotEnable

Failed to perform this operation because KMS is not activated.

You need to activate KMS key escrow service.

400

InvalidParam.EncryptedMismatch

Creating encrypted disks with shared encrypted image requires replacing encryption keys.

You must change the encryption key to create a cloud disk after sharing an encrypted image.

400

InvalidParameter.Encrypted

Creating non-encrypted disks with encrypted snapshots is not supported.

Creating a non-encrypted disk with an encrypted snapshot is not supported.

400

InvalidPrivateIpAddress.Duplicated

The specified private IP address "%s" is duplicated.

The specified IP address is already in use.

400

QuotaExceeded.InternetBandwidth

%s.

Under your current account, the public network bandwidth of the Pay-As-You-Go ECS instance charged by fixed bandwidth exceeds the total bandwidth quota limit.

400

InvalidVSwitchId.NotFound

The specified VSwitch does not exist in the specified region.

The specified vSwitch does not exist in the specified region.

400

OperationDenied.TestAccountRetricted

Test-account for testing has been prohibited from creating instance in this region. Please contact 400181.

Test accounts are not allowed to create instances in the local region. Please contact Cost and Resource Center @ Gao Chong (400181)

401

InvalidRamRole.NotEcsRole

The specified ram role is not authorized for ecs, please check your role policy.

The specified RAM role is not authorized to use ECS. Check your role policies.

403

InvalidDiskCategory.NotSupported

The specified disk category is not support the specified instance type.

The specified disk category does not support the instance type.

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

InvalidSnapshotId.NotReady

The specified snapshot has not completed yet.

The specified snapshot is being created.

403

OperationDenied

The specified snapshot is not allowed to create disk.

The specified snapshot cannot be used to create disks.

403

InstanceDiskCategoryLimitExceed

The total size of specified disk category in an instance exceeds.

The total size of disks of the specified category exceeds the maximum capacity allowed for an instance.

403

InvalidDevice.InUse

The specified device has been occupied.

The specified device has been occupied.

403

ImageRemovedInMarket

The specified market image is not available, Or the specified user defined image includes product code because it is based on an image subscribed from marketplace, and that image in marketplace includeing exact the same product code has been removed.

The specified Alibaba Cloud Marketplace image is unavailable, or the specified custom image contains the product code of the Alibaba Cloud Marketplace image from which the custom image is derived and the Alibaba Cloud Marketplace image was removed from Alibaba Cloud Marketplace.

403

OperationDenied

The creation of Instance to the specified Zone is not allowed.

Instances cannot be created in the specified zone.

403

CategoryNotSupported

The specified zone does not offer the specified disk category.

The specified disk category is unavailable in the specified zone.

403

OperationDenied

The specified Zone or cluster does not offer the specified disk category or the speicified zone and cluster do not match.

The specified disk category is unavailable in the specified zone or cluster, or the specified zone and cluster do not correspond to each other.

403

OperationDenied.NoStock

The requested resource is sold out in the specified zone; try other types of resources or other regions and zones.

The requested resources are insufficient.

403

QuotaExceed.PortableCloudDisk

The quota of portable cloud disk exceeds.

The maximum number of removable disks has been reached.

403

OperationDenied

Sales of this resource are temporarily suspended in the specified region; please try again later.

The requested resource is unavailable in the specified region. Try again later.

403

SecurityGroupInstanceLimitExceed

The maximum number of instances in a security group is exceeded.

\-

403

NodeControllerUnavailable

The Node Controller is temporarily unavailable.

The node controller is unavailable.

403

RegionUnauthorized

There is no authority to create instance in the specified region.

You are not authorized to create instances in the specified region.

403

CategoryNotSupported

The specified Zone or cluster does not offer the specified disk category.

The specified disk category is unavailable in the specified zone or cluster.

403

InvalidSnapshotId.NotDataDiskSnapshot

The specified snapshot is system disk snapshot.

The specified snapshot is a system disk snapshot.

403

CategoryNotSupported

The specified cluster does not offer the specified disk category.

The specified disk category is unavailable in the specified cluster.

403

DeleteWithInstance.Conflict

The specified disk is not a portable disk and cannot be set to DeleteWithInstance attribute.

The specified disk is not removable and cannot be released along with the instance.

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

IoOptimized.NotSupported

Vpc is not support IoOptimized instance.

The VPC does not support I/O optimized instances.

403

OperationDenied

The resource is out of usage.

Insufficient resource inventory

403

QuotaExceed.BuyImage

The specified image is from the image market, You have not bought it or your quota has been exceeded.

\-

403

InvalidVSwitchId.NotFound

The VSwitchId provided does not exist in our records.

The specified vSwitch ID does not exist.

403

InvalidParameter.ResourceOwnerAccount

ResourceOwnerAccount is Invalid.

The specified ResourceOwnerAccount parameter is invalid.

403

InvalidUserData.Forbidden

User not authorized to input the parameter "UserData", please apply for permission "UserData".

\-

403

Zone.NotOpen

The specified zone is not granted to you to buy resources yet.

You are not authorized to purchase resources in the specified zone.

403

Zone.NotOnSale

The specified zone is not available for purchase.

The requested resources are unavailable in the specified zone. Try a different instance type or select a different region or zone.

403

InvalidClusterId.NotFound

The specified clusterId does not exist.

The specified ClusterId parameter does not exist.

403

InvalidResourceType.NotSupported

%s

The specified resource combination does not exist. Change to another zone or specification.

403

InvalidInstanceType.ZoneNotSupported

The specified zone does not support this instancetype.

The specified instance type is not supported in the specified zone.

403

InvalidPayMethod

The specified pay method is not valid.

The specified payment method is invalid.

403

OperationDenied.ImageNotValid

The specified Image is disabled or is deleted.

The specified image does not exist.

403

InvalidUserData.Base64FormatInvalid

The specified UserData is not valid.

The specified user data is invalid.

403

InstanceType.Offline

%s

The operation is not supported while the instance type is retired or while resources of the instance type are insufficient.

403

DependencyViolation.WindowsInstance

The instance creating is window, cannot use ssh key pair to login.

The specified instance is a Windows instance and does not support logons using SSH key pairs.

403

RealNameAuthenticationError

Your account has not passed the real-name authentication yet.

You have not completed real-name verification. Complete real-name verification and try again.

403

InvalidNetworkType.MismatchRamRole

Ram role cannot be applied to instances of Classic network type.

Instance RAM roles can be used only for instances of the VPC type, not for instances of the classic network type.

403

InvalidUser.PassRoleForbidden

The RAM user does not have the privilege to pass a RAM role.

The RAM user is not authorized to pass a RAM role.

403

InvalidImage.NotSupported

The specified image does not support vSGX instance.

\-

403

InvalidAccountStatus.NotEnoughBalance

Your account does not have enough balance.

Your account balance is insufficient. Add funds to your account and try again.

403

IncorrectVpcStatus

Current VPC status does not support this operation.

The VPC is in a state that does not support the current operation.

403

InvalidParameter.NotMatch

%s

A specified parameter is invalid. Check whether parameter conflicts exist.

403

OperationDenied.InvalidNetworkType

%s

The network type does not support this operation.

403

InvalidSpotInterruptionBehavior.ClassicNetworkNotSupport

The specified SpotInterruptionBehavior does not support Classic network Instance.

\-

403

InvalidSpotInterruptionBehavior.LocalDiskNotSupport

The specified SpotInterruptionBehavior does not support local disk instance.

\-

403

OperationDenied.ImageNotValid

%s

The current image does not support this operation.

403

QuotaExceed.PostPaidDisk

Living postPaid disks quota exceeded.

\-

403

QuotaExceed.DeploymentSetInstanceQuotaFull

Instance quota in one deployment set exceeded.

\-

403

InvalidVSwitch.DefaultVSwitchNotSupport

The specified zone in vpc can't support create default vSwitch.

\-

403

OperationDenied.ImageNotValid

The specified image is not published in the region.

The image is unavailable in the current region.

403

OperationDenied.ImageNotValid

The specified image is not authorized.

You are not authorized to use this image.

403

OperationDenied.ImageNotValid

The specified image is not found in marketplace.

The specified image is not present in Alibaba Cloud Marketplace.

403

OperationDenied.LocalDiskUnsupported

The configuration change is not allowed when the specified instance has local disks mounted.

Instance types cannot be changed for instances that have local disks attached.

403

OperationDenied.InconsistentNetwork

The specified security group and vswitch are not in the same vpc.

The specified security group and vSwitch do not belong to the same VPC.

403

OperationDenied

If the network segment of the vswitch is the same as that of its VPC. Therefore, the VPC cannot create other vswitchs across the region.

The VPC and vSwitch have the same CIDR block and no additional vSwitches can be created in zones of the VPC.

403

DefaultVswitch.Existed

The default vswitch for VPC already exists.

\-

403

InvalidChargeType.ValueNotSupported

Deletion protection is only valid for postPaid instance, not for prePaid or spot instance.

Release protection can be enabled only for pay-as-you-go instances.

403

IncorrectInstanceStatus

The current status of the resource does not support this operation.

The resource is in a state that does not support the current operation.

403

CategoryViolation

The specified instance does not support this operation because of its disk category.

The configurations of instances that have local disks attached cannot be upgraded or downgraded.

403

ResourcesNotInSameZone

The specified instance and dedicated host are not in the same zone.

\-

403

InvalidRegion.NotSupport

The specified region does not support byok.

The bring your own key (BYOK) feature is not supported in the region.

403

UserNotInTheWhiteList

The user is not in byok white list.

You are not authorized to use the bring your own key (BYOK) feature. Try again when you are authorized.

403

InvalidParameter.KMSKeyId.KMSUnauthorized

ECS service have no right to access your KMS.

ECS is not authorized to access your KMS resources.

403

SecurityRisk.3DVerification

We have detected a security risk with your default credit or debit card. Please proceed with verification via the link in your email.

\-

403

InvalidDisk.SystemDiskSize

The specified SystemDiskSize beyond the permitted range.

The specified system disk size exceeds the maximum allowed value.

403

InsufficientBalance

Your account does not have enough balance.

Your account balance is insufficient. Add funds to your account and try again.

403

OperationDenied

The user profile is not complete; try complete your basic info in account management page.

\-

403

Mayi.InternalError

The request processing has failed due to some unknown error.

\-

403

InvalidNetworkType

The network type is not support in this region.

The network type NetworkType entered is no longer supported.

403

InvalidAccountStatus

Your account status is invalid, please contact customer service.

\-

403

UserNotInTheWhiteList

The user is not in Arns white list.

The user is not in the Arn related parameter action list.

403

QuotaExceeded.PrivateIpAddress

%s

The internal IP address of the specified switch VSwitch is insufficient.

403

InvalidVSwitchId.IpInvalid

%s

The specified private IP address is invalid.

403

OperationDenied.PerformanceLevelNotMatch

The specified DataDisk.n.PerformanceLevel and DataDisk.n.Size do not match.

\-

403

InvalidStorageSetName.Malformed

Specified parameter StorageSetName is not valid.

\-

403

InvalidDescription.Malformed

Specified parameter Description is not valid.

\-

403

InvalidMaxPartitionNumber.Malformed

Specified parameter MaxPartitionNumber is not valid.

\-

403

InvalidParameter.StorageSetPartitionNumber

Specified parameter StorageSetPartitionNumber is not valid.

\-

403

InvalidParameter.StorageSetId

Specified parameter StorageSetId is not valid.

\-

403

InvalidParameter.StorageSetZoneId

Specified parameter StorageSetZoneId is not valid.

\-

403

InvalidParameter.StorageSetZoneId

Specified parameter ZoneNo does not match with StorageSet info.

\-

403

QuotaExceed.Tags

%s

The number of specified tags exceeds the upper limit. %s is a variable. An error message is dynamically returned based on call conditions.

403

OperationDenied.RegionIdNotSupported

Region not support spot duration instance.

\-

403

OperationDenied.FlavorNotSupported

Flavor not support spot duration instance.

\-

403

OperationDenied.TimestampNotSupported

Timestamp not support spot duration instance.

\-

403

OperationDenied.PrepayNotAvailable

Prepay instance is not available now.

\-

403

OperationDenied.PaygNotAvailable

Pay-as-you-go instance is not available now.

\-

403

EnterpriseGroupLimited.MutliGroupType

The specified instance can not join multi SecurityGroup types.

The specified instance cannot belong to both a basic and an advanced security group. You can call the DescribeSecurityGroups operation to query the type of security groups.

403

EnterpriseGroupLimited.InstanceType

The specified instance type does not support Enterprise SecurityGroup.

\-

403

InternalError.AllocateUnderlayIp

Allocate underlay ip for the instance error.

Failed to assign the Underlay IP address to the instance.

403

OperationDenied.BidOwnResource

Bid user can not own resource.

\-

403

OperationDenied.CloudSSDNotSupported

The specified available zone does not offer the cloud\_ssd disk, use cloud\_essd instead.

\-

403

InvalidVPCStatus.NotWorking

The specified VPC subnet status is not working.

\-

403

QuotaExceed.ElasticQuota

No additional quota is available for the specified ECS instance type.

The maximum number of instances of the specified instance type in the region has been reached. Reduce the quantity of instances that you want to purchase or try another region or instance type. Alternatively, you can go to the ECS console or Quota Center to request a quota increase.

403

QuotaExceed.ElasticQuota

The number of the specified ECS instances has exceeded the quota of the specified instance type.

The maximum number of instances of the specified instance type in the region has been reached. Reduce the quantity of instances that you want to purchase or try another region or instance type. Alternatively, you can go to the ECS console or Quota Center to request a quota increase.

403

QuotaExceed.ElasticQuota

The number of vCPUs assigned to the ECS instances has exceeded the quota in the zone.

The maximum number of vCPUs for all instance types has been reached. You can go to the ECS console or Quota Center to request a quota increase.

403

QuotaExceed.ElasticQuota

The number of the specified ECS instances has exceeded the quota of the specified instance type, or the number of vCPUs assigned to the ECS instances has exceeded the quota in the zone.

The maximum number of instances of the specified instance type in the region has been reached, or the maximum number of vCPUs for all instance types has been reached. You can go to the ECS console or Quota Center to request a quota increase.

403

QuotaExceeded.PostpaidDataDiskCapacity

The quota of postpaid data disk capacity exceeds.

The used capacity of the pay-as-you-go disk reaches the quota limit.

403

InvalidImageFamily.MissingAvailableImage

There is no available image related to the specified image family.

\-

403

InvalidRegionId.NotSupportEncryptAlgorithm

The current region does not support creating encrypted disks with EncryptAlgorithm.

\-

403

InvalidOperation.ResourceManagedByCloudProduct

%s

You cannot modify security groups managed by cloud services.

403

InvalidDiskSize.TooSmall

Specified disk size is too small when choosing PL0 of cloud\_essd.

\-

403

DeleteWithInstance.Conflict

The specified image is from the image market, you cannot set DeleteWithInstance attribute to false.

\-

403

Forbidden.OnlySupportEnterpriseGroup

%s

\-

403

HibernationConfigured.InstanceOperationForbidden

The operation is not permitted due to limit of the hibernation configured instance.

The operation cannot be performed due to the limitations of instances for which the instance hibernation feature is enabled.

403

InstanceDiskLimitExceeded

The amount of the disk on instance reach its limits.

\-

403

InvalidInstanceType.NotSupportDiskCategory

The instanceType of the specified instance does not support this disk category.

The instance type does not support the current disk category. Try another instance type. For information about the disk categories supported by instance types, see the instance family documentation.

403

NotSupportSnapshotEncrypted.DiskCategory

The specified disk category does not support creating encrypted system disks or creating encrypted data disks from snapshots. Check the DiskCategory or Encrypted parameter, or check your account for default encryption settings.

This disk type does not support creating encrypted system disks or creating encrypted data disks in snapshot mode. Please check the disk type and encryption parameters you entered, or check whether you have configured the default encryption configuration for account cloud disks.

403

InvalidOperation.PublicIpAddressNoStock

The public IP address for the specified Region or ChargeType of the instance is out of stock. Please try another Region or ChargeType.

Under the conditions of the specified region or payment type, the public IP address inventory of the instance is insufficient. Please try another region or payment type.

403

QuotaExceed.ElasticQuota

The request failed due to elastic quota check, details as follows: %s.

If your ECS usage exceeds the quota limit, go to the Alibaba Cloud console to apply for a quota increase.

403

OperationDenied

The specified image is not available, please check the status of the image.

The image is not available, please check the status of the image.

403

InvalidParameter.KMSKeyId.CMKNotEnabled

The CMK (Customer Master Key) must be in an active state.

The CMK (Customer Master Key) must be in an active state.

403

InvalidParameter.KMSKeyId.CMKUnauthorized

The CMK(Customer Master Key) lacks authorization to add tags to the ECS service.

The CMK(Customer Master Key) lacks authorization to add tags to the ECS service.

403

InvalidEncrypted.NotMatchDiskDefaultEncryption

Enabling disk default encryption prevents the creation of non-encrypted disks.

After the default encryption of the cloud disk account is enabled, an unencrypted disk cannot be created.

403

InvalidEncrypted.NotMatchSnapshot

The specified parameter Encrypted must be set to true when creating disks with encrypted snapshots.

When you create a disk using an encrypted snapshot, the specified parameter Encrypted must be set to true.

404

InvalidStorageClusterId.NotExist

The specified StorageClusterId does not exist in current region.

\-

404

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId provided does not exist

404

IoOptimized.NotSupported

The specified instancetype is not support IoOptimized instance.

\-

404

InvalidZoneId.NotFound

The ZoneId provided does not exist in our records.

The specified zone ID does not exist.

404

InvalidSecurityGroupId.NotFound

The specified SecurityGroupId does not exist.

The specified security group does not exist in this account. Check whether the security group ID is correct.

404

InvalidDataDiskSnapshotId.NotFound

The specified parameter "DataDisk.n.SnapshotId" is not valid.

\-

404

InvalidClusterId.NotFound

The ClusterId provided does not exist in our records.

The specified ClusterId parameter does not exist.

404

InvalidVSwitchId.NotFound

Specified virtual switch does not exist.

The specified vSwitch ID does not exist.

404

InvalidImageId.NotFound

The specified ImageId does not exist.

The specified image does not exist in this account. Check whether the image ID is correct.

404

OperationDenied

Another Instance has been creating.

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

PaymentMethodNotFound

No payment method has been registered on the account.

You have not configured a payment method for your account.

404

HOSTNAME\_ILLEGAL

The specified parameter Hostname is not valid.

\-

404

InvalidSystemDiskSize.LessThanImageSize

The specified parameter SystemDisk.Size is less than the image size.

The specified system disk size is smaller than the image size.

404

InvalidSystemDiskSize.LessThanMinSize

The specified parameter SystemDisk.Size is less than the min size.

The specified system disk size is smaller than the minimum allowable size.

404

InvalidSystemDiskSize.MoreThanMaxSize

The specified SystemDisk.Size parameter exceeds the maximum size.

The maximum size of the system disk is exceeded.

404

InvalidDataDiskSnapshotId.NotFound

The specified parameter DataDisk.n.SnapshotId is not valid.

The specified data disk snapshot ID is invalid.

404

InvalidSystemDiskSize

The specified parameter SystemDisk.Size is invalid.

The specified SystemDisk.Size parameter is invalid.

404

InvalidZoneId.NotFound

The specified ZoneId does not exist.

The specified zone ID does not exist.

404

InvalidKeyPairName.NotFound

The specified parameter KeyPairName does not exist in our records.

The specified key pair does not exist.

404

InvalidRamRole.NotFound

The specified RAMRoleName does not exist.

The specified RamRoleName parameter does not exist.

404

InvalidResourceGroup.NotFound

The ResourceGroup provided does not exist in our records.

The specified resource group does not exist.

404

InvalidMarketImage.NotFound

The specified marketplace image does not exist, please change the imageId and try again.

The specified Alibaba Cloud Marketplace image does not exist. Modify the ImageId parameter and try again.

404

DeploymentSet.NotFound

The specified deployment set does not exist.

The specified deployment set does not exist.

404

InvalidParameter.KMSKeyId.NotFound

The specified KMSKeyId does not exist.

The specified KMSKeyId parameter does not exist.

404

InvalidSecurityGroupId.NotFound

%s

The specified security group ID does not exist.

404

InvalidDiskIds.NotPortable

The specified DiskId is not portable.

The specified disk is not removable.

409

OperationConflict

Request was denied due to conflict with a previous request,please try again later.

\-

429

Throttling.Resource

The request throttle by resource operation.

Request is controlled by resource operation.

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

500

InternalError

%s

An internal error has occurred.

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

An internal error has occurred. Try again later.

500

InvalidImage.OSType

The image OSType does not support this instance type.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2026-01-15

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateInstance?updateTime=2026-01-15#workbench-doc-change-demo)

2025-03-19

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateInstance?updateTime=2025-03-19#workbench-doc-change-demo)

2024-12-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateInstance?updateTime=2024-12-26#workbench-doc-change-demo)

2024-10-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateInstance?updateTime=2024-10-25#workbench-doc-change-demo)

2024-09-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateInstance?updateTime=2024-09-27#workbench-doc-change-demo)

2024-08-21

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateInstance?updateTime=2024-08-21#workbench-doc-change-demo)

2024-06-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateInstance?updateTime=2024-06-27#workbench-doc-change-demo)

2024-05-09

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateInstance?updateTime=2024-05-09#workbench-doc-change-demo)

2024-03-21

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateInstance?updateTime=2024-03-21#workbench-doc-change-demo)

2024-01-30

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateInstance?updateTime=2024-01-30#workbench-doc-change-demo)

2024-01-15

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateInstance?updateTime=2024-01-15#workbench-doc-change-demo)

2023-10-10

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateInstance?updateTime=2023-10-10#workbench-doc-change-demo)

2023-06-20

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateInstance?updateTime=2023-06-20#workbench-doc-change-demo)

2023-05-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateInstance?updateTime=2023-05-08#workbench-doc-change-demo)

2023-03-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateInstance?updateTime=2023-03-28#workbench-doc-change-demo)
