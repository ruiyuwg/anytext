Batch creates Elastic Compute Service (ECS) instances. You can automatically start, assign public IP addresses to, and specify an automatic release time for the instances.

## Operation description

Before you call this operation, familiarize yourself with the billing rules and [pricing](https://www.alibabacloud.com/zh/pricing-calculator#/commodity/vm_intl) of ECS resources.

This operation is an asynchronous operation. After a request to create ECS instances is sent, ECS instance IDs are returned but the creation and startup of the instances may be incomplete. You can call the [DescribeInstanceStatus](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstancestatus) operation to query the status of the instances. When the status of an instance is `Running` in the DescribeInstanceStatus response, the instance is created and started.

### [](#considerations)[](#)Considerations

-   If the resource inventory is insufficient to complete instance creation, Alibaba Cloud immediately sends an instance creation failure event (SystemFailure.Delete). You can call the [DescribeInstanceHistoryEvents](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstancehistoryevents) operation to check whether an instance creation failure event exists. For more information, see [System events related to instance creation failures](/help/en/ecs/user-guide/view-instance-creation-failure-events).
-   Make sure that the number of ECS instances you create or the number of vCPUs on ECS instances of all instance types you create does not exceed the corresponding quota. Go to the [Quota Center](https://quotas.console.alibabacloud.com/products/ecs/quotas) to view the quotas.
-   Before you create ECS instances of the Virtual Private Cloud (VPC) type in a region, [create a VPC](/help/en/vpc/getting-started/create-vpc-with-ipv4) in the region.

### [](#precautions)[](#)Precautions

-   If you create a subscription instance (`PrePaid`), available coupons in your account are automatically used.
-   You can call the RunInstances operation to create up to 100 ECS instances in a single request. To create more than 100 ECS instances, we recommend that you initiate multiple requests in batches or concurrently.
-   If you set `InternetMaxBandwidthOut` to a value greater than 0, public IP addresses are automatically assigned to the ECS instances to be created.

**Note** For the limits on the sum of maximum public bandwidths of ECS instances that use the pay-by-bandwidth billing method for network usage per region per Alibaba Cloud account, see the [Public bandwidth](/help/en/ecs/user-guide/limitations#BandwidthQuota) section of the "Limits and quotas on ECS" topic.

### [](#suggestions)[](#)Suggestions

-   **Test scenarios**: Set `DryRun` to true to perform a dry run without performing the actual request.
-   **Release of ECS instances**: Use `AutoReleaseTime` to configure an automatic release time for ECS instances in the request to RunInstances or call the [DeleteInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-deleteinstances) operation to release the instances.
-   **Management and search of ECS instances**: Add tags to the ECS instances by specifying `Tag.N.Key` and `Tag.N.Value` and append incremental suffixes by specifying `UniqueSuffix` to the hostname specified by `HostName` and the instance name specified by `InstanceName`. For more information, see [Batch configure sequential names or hostnames for multiple instances](/help/en/ecs/user-guide/batch-configure-sequential-names-or-hostnames-for-multiple-instances).
-   **Launch template**: A launch template contains the parameters required to create an ECS instance so that you do not have to specify the parameters every time you create ECS instances. You can call the [CreateLaunchTemplate](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createlaunchtemplate) operation to create a launch template. Then, in the request to `RunInstances`, you can specify `LaunchTemplateId` and `LaunchTemplateVersion` to use the launch template.
-   **Disabling of Hyper-Threading (HT)**: In memory-intensive scenarios, set `CpuOptions.ThreadsPerCore` to 1 to disable HT and increase the memory-to-vCPU ratio.
-   **Enabling of Jumbo Frames**: Set `NetworkOptions.EnableJumboFrame` to true to enable the `Jumbo Frames` feature when you create ECS instances. For more information, see [Jumbo Frames](/help/en/ecs/user-guide/jumbo-frame/).

## [](#sample-requests)[](#)Sample requests

Use a specific image to create ECS instances of a specific instance type in the China (Hangzhou) region. The instances use disks with a specific capacity as the system disk and data disks and are automatically assigned public IP addresses. The instances have user-defined names and logon passwords. The instances are assigned to a specific security group and connected to a specific vSwitch. Request parameters:

```
RegionId:"cn-hangzhou", //Set the region ID to cn-hangzhou, which specifies the China (Hangzhou) region.
ImageId:"aliyun_3_x64_20G_alibase_20221102.vhd", //Set the image ID to aliyun_3_x64_20G_alibase_20221102.vhd.
InstanceType:"ecs.g7.large", //Set the instance type to ecs.g7.large.
SecurityGroupId:"sg-bp150uqocpf9jj70****", //Set the security group ID to sg-bp150uqocpf9jj70****.
VSwitchId:"vsw-bp1qo7s91cbch5i4l****", //Set the vSwitch ID to vsw-bp1qo7s91cbch5i4l****.
SystemDisk:{
  Category:"cloud_essd", //Set the system disk category to cloud_essd, which specifies the Enterprise SSD (ESSD) category.
  Size:40, //Set the system disk size to 40. Unit: GiB.
},
DataDisk:[
  {
    Category:"cloud_essd", //Set the data disk category to cloud_essd, which specifies the ESSD category.
    Size:100, //Set the data disk size to 100. Unit: GiB.
  }
],
HostName:"ECS-test", //Set the instance hostname to ECS-test.
Password:"ECS@test1234", //Set the logon password to ECS@test1234.
InternetMaxBandwidthOut:10 //Set the outbound public bandwidth to 10. Unit: Mbit/s.
```

Examples on how to create instances of different types based on the preceding parameters:

**Example: Create five subscription ECS instances for which auto-renewal is enabled**

```
Amount:5, //Set the number of ECS instances that you want to create to 5.
InstanceChargeType:"PrePaid", //Set the billing method to PrePaid, which specifies the subscription billing method.
PeriodUnit:"Month", //Set the subscription period unit to Month.
Period:1, //Set the subscription period to 1. The unit is specified by PeriodUnit, which is Month in this example.
AutoRenew:true, //Set this parameter to true to enable auto-renewal.
AutoRenewPeriod:1 //Set the renewal period to 1. The unit is specified by PeriodUnit, which is Month in this example.
```

**Example: Create 10 pay-as-you-go ECS instances**

```
Amount:10, //Set the number of ECS instances that you want to create to 10.
InstanceChargeType:"PostPaid", //Set the billing method to PostPaid, which specifies the pay-as-you-go billing method.
SpotStrategy:"NoSpot" //Set this parameter to NoSpot, which is the default value and specifies that the instances are created as pay-as-you-go instances.
```

**Example: Create 20 spot instances that use a specific bidding policy and a protection period**

```
Amount:20, //Set the number of ECS instances that you want to create to 20.
InstanceChargeType:"PostPaid",
SpotStrategy:"SpotAsPriceGo", //Set the bidding policy to SpotAsPriceGo, which specifies that the instances are created as spot instances for which the market price at the time of purchase is automatically used as the bid price.
SpotDuration:1 //Set the protection period of the spot instances to 1. Unit: hours.
```

Use a launch template created by calling the [CreateLaunchTemplate](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createlaunchtemplate) operation to create ECS instances in the China (Hangzhou) region. Examples:

**Example: Create 10 ECS instances based on a launch template**

```
RegionId:"cn-hangzhou", //Set the region ID to cn-hangzhou, which specifies the China (Hangzhou) region.
Amount:10, //Set the number of ECS instances that you want to create to 10.
LaunchTemplateId:"lt-bp14xczpoxvb6rre****" //Set the launch template ID to lt-bp14xczpoxvb6rre****.
```

**Note** If a parameter is specified both in the launch template that you reference in a request and in the instance parameters of the same request, the value specified in the instance parameters takes precedence. For example, if you set InstanceChargeType in the launch template to PrePaid (subscription) and set InstanceChargeType in the instance parameters to PostPaid (pay-as-you-go), the created instances are pay-as-you-go instances.

**Example: Use a full image (an image that contains the system disk and data disks) to create an ECS instance**

```
RegionId:"cn-hangzhou", //Set the region ID to cn-hangzhou, which specifies the China (Hangzhou) region.
ImageId = m-bp13ohd32cvzpq9e****, //Set the custom image ID to m-bp13ohd32cvzpq9e****.
InstanceType = ecs.u1-c1m1.large, //Set the instance type to ecs.u1-c1m1.large.
SecurityGroupId = sg-bp10jztp6b0sdsyl****, //Set the security group ID to sg-bp10jztp6b0sdsyl****.
VSwitchId = vsw-bp19wo63nleroq22g****, //Set the vSwitch ID to vsw-bp19wo63nleroq22g****.
SystemDisk.Size = 50, //Set the size of the system disk in the full image to 50. Unit: GiB.
SystemDisk.Category = cloud_auto, //Set the category of the system disk in the full image to cloud_auto, which specifies the ESSD AutoPL disk category.
DataDisk.0.Device = /dev/xvdb, //Set the mount point of the data disk in the full image to /dev/xvdb.
DataDisk.0.Size = 50, //Set the size of the data disk in the full image to 50. Unit: GiB.
DataDisk.0.Category = cloud_essd, //Set the category of the data disk in the full image to cloud_essd, which specifies the ESSD category.
DataDisk.1.Device = /dev/xvdc, //Set the mount point of the new data disk to /dev/xvdc. If you want to use a new data disk to replace the data disk in the full image, set DataDisk.1.Device to /dev/xvdb (the default mount point of the data disk in the full image).
DataDisk.1.Size = 70, //Set the size of the new data disk to 70. Unit: GiB.
DataDisk.1.Category = cloud_auto, //Set the category of the new data disk to cloud_auto, which specifies the ESSD AutoPL disk category.
```

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/RunInstances)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/RunInstances)

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

ecs:RunInstances

create

\*All Resources

`*`

-   vpc:IsDefaultVSwitch
-   vpc:IsDefaultVpc
-   vpc:VPC
-   ecs:IsDiskEncrypted
-   ecs:InstanceTypeFamily
-   ecs:InstanceType
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
-   ecs:AssociatePublicIpAddress
-   vpc:CreateDefaultVpc
-   ecs:SecurityEnhancementStrategy

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

The ID of the image. You can call the [DescribeImages](/help/en/ecs/api-describeimages) operation to query available images. If you do not use `LaunchTemplateId` or `LaunchTemplateName` to specify a launch template and do not set `ImageFamily` to obtain the latest available custom image from a specified image family, you must specify `ImageId`.

aliyun\_2\_1903\_x64\_20G\_alibase\_20200324.vhd

ImageFamily

string

No

The name of the image family. You can set this parameter to obtain the latest available custom image from the specified image family to create instances.

The name must be 2 to 128 characters in length. The name cannot start with a digit, a special character, http://, or https://. The name can contain letters, digits, periods (.), underscores (\_), hyphens (-), and colons (:).

Take note of the following items:

-   If you specify `ImageId`, you cannot specify ImageFamily.
-   If you do not specify `ImageId` but use `LaunchTemplateId` or `LaunchTemplateName` to specify a launch template that has `ImageId` specified, you cannot specify ImageFamily.
-   If you do not specify `ImageId` but use `LaunchTemplateId` or `LaunchTemplateName` to specify a launch template that does not have `ImageId` specified, you can specify ImageFamily.
-   If you do not specify `ImageId`, `LaunchTemplateId`, or `LaunchTemplateName`, you can specify ImageFamily.

**Note** For information about image families that are associated with Alibaba Cloud official images, see [Overview of public images](/help/en/ecs/user-guide/public-mirroring-overview/).

hangzhou-daily-update

InstanceType

string

No

The instance type. If you do not use `LaunchTemplateId` or `LaunchTemplateName` to specify a launch template, you must set the `InstanceType` parameter.

-   Select an instance type. See [Instance families](/help/en/ecs/user-guide/overview-of-instance-families) or call the [DescribeInstanceTypes](/help/en/ecs/api-describeinstancetypes) operation to query the performance data of an instance type, or see [Best practices for instance type selection](/help/en/ecs/user-guide/best-practices-for-instance-type-selection) to learn about how to select instance types.
-   Query available resources. Call the [DescribeAvailableResource](/help/en/ecs/api-describeavailableresource) operation to query available resources in a specific region or zone.

ecs.g6.large

SecurityGroupId

string

No

The ID of the security group to which you want to assign the instance. Instances in the same security group can communicate with each other. The maximum number of instances allowed in a security group varies based on the type of the security group. For more information, see the "Security group limits" section in [Limits and quotas](/help/en/ecs/user-guide/limitations#SecurityGroupQuota).

**Note** The network type of the new instance is the same as the network type of the security group specified by `SecurityGroupId`. For example, if the specified security group is of the VPC type, the new instance is also of the VPC type and you must specify `VSwitchId`.

If you do not use `LaunchTemplateId` or `LaunchTemplateName` to specify a launch template, you must specify a security group ID. When you specify this parameter, take note of the following items:

-   You can set `SecurityGroupId` to specify a single security group or set `SecurityGroupIds.N` to specify one or more security groups. However, you cannot specify both `SecurityGroupId` and `SecurityGroupIds.N` in the same request.
-   If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot specify `SecurityGroupId` or `SecurityGroupIds.N` but can specify `NetworkInterface.N.SecurityGroupId` or `NetworkInterface.N.SecurityGroupIds.N`.

sg-bp15ed6xe1yxeycg7\*\*\*\*

VSwitchId

string

No

The ID of the vSwitch to which to connect to the instance. You must set this parameter when you create an instance of the VPC type. The specified vSwitch and security group must belong to the same VPC. You can call the [DescribeVSwitches](/help/en/vpc/api-describevswitches) operation to query available vSwitches.

Take note of the following items:

-   If you specify the `VSwitchId` parameter, the zone specified by the `ZoneId` parameter must be the zone where the specified vSwitch is located. You can also leave the `ZoneId` parameter empty. Then, the system selects the zone where the specified vSwitch resides.
-   If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot specify `VSwitchId` but can specify `NetworkInterface.N.VSwitchId`.

vsw-bp1s5fnvk4gn2tws0\*\*\*\*

InstanceName

string

No

The name of the ECS instance. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (\_), periods (.), and hyphens (-). The default value of this parameter is the `InstanceId` value.

When you batch create instances, you can batch configure sequential names for the instances. The sequential names can contain brackets (\[ \]) and commas (,). For more information, see [Batch configure sequential names or hostnames for multiple instances](/help/en/ecs/user-guide/batch-configure-sequential-names-or-hostnames-for-multiple-instances).

k8s-node-\[1,4\]-alibabacloud

Description

string

No

The description of the instance. The description must be 2 to 256 characters in length, and cannot start with `http://` or `https://`.

Instance\_Description

InternetMaxBandwidthIn

integer

No

The maximum inbound public bandwidth. Unit: Mbit/s. Valid values:

-   When the purchased outbound public bandwidth is less than or equal to 10 Mbit/s, the valid values of InternetMaxBandwidthIn are 1 to 10, and the default value is 10.
-   When the purchased outbound public bandwidth is greater than 10 Mbit/s, the valid values of this parameter are 1 to the `InternetMaxBandwidthOut` value and the default value is the `InternetMaxBandwidthOut` value.

10

InternetMaxBandwidthOut

integer

No

The maximum outbound public bandwidth. Unit: Mbit/s. Valid values: 0 to 100.

Default value: 0.

10

HostName

string

No

The hostname of the instance. Take note of the following items:

-   The hostname cannot start or end with a period (.) or hyphen (-). It cannot contain consecutive periods (.) or hyphens (-).
    
-   For Windows instances, the hostname must be 2 to 15 characters in length and cannot contain periods (.) or contain only digits. It can contain letters, digits, and hyphens (-).
    
-   For instances that run other operating systems such as Linux, take note of the following items:
    
    -   The hostname must be 2 to 64 characters in length. You can use periods (.) to separate a hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).
    -   You can use the `${instance_id}` placeholder to pass instance IDs into the hostname specified by `HostName`. For example, if you set `HostName` to k8s-${instance\_id} and the instance is assigned an ID of `i-123abc****`, the hostname of the instance is `k8s-i-123abc****`.

When you create multiple instances, you can perform the following operations:

-   Batch configure sequential hostnames for the instances. For more information, see [Batch configure sequential names or hostnames for multiple instances](/help/en/ecs/user-guide/batch-configure-sequential-names-or-hostnames-for-multiple-instances).
-   Use the `HostNames.N` parameter to configure different hostnames for instances. You cannot specify both the `HostName` and `HostNames.N` parameters.

k8s-node-\[1,4\]-ecshost

UniqueSuffix

boolean

No

Specifies whether to automatically append incremental suffixes to the hostname specified by the `HostName` parameter and to the instance name specified by the `InstanceName` parameter when you batch create instances. The incremental suffixes can range from 001 to 999. Valid values:

-   true
-   false

Default value: false.

When the `HostName` or `InstanceName` value is set in the `name_prefix[begin_number,bits]` format without `name_suffix`, the `UniqueSuffix` parameter does not take effect. The names are sorted in the specified sequence.

For more information, see [Batch configure sequential names or hostnames for multiple instances](/help/en/ecs/user-guide/batch-configure-sequential-names-or-hostnames-for-multiple-instances).

true

Password

string

No

The password of the instance. The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Special characters include:

```
()`~!@#$%^&*-_+=|{}[]:;'<>,.?/
```

For Windows instances, the password cannot start with a forward slash (/).

**Note** If the `Password` parameter is specified, we recommend that you send requests over HTTPS to prevent password leaks.

EcsV587!

PasswordInherit

boolean

No

Specifies whether to use the password preset in the image. Valid values:

-   true: uses the preset password.
-   false: does not use the preset password.

Default value: false.

**Note** If you set this parameter to true, make sure that you leave the Password parameter empty and the selected image has a preset password.

false

ZoneId

string

No

The ID of the zone in which to create the instance. You can call the [DescribeZones](/help/en/ecs/api-describezones) operation to query the most recent zone list.

**Note** If you specify the `VSwitchId` parameter, the zone specified by the `ZoneId` parameter must be the zone where the vSwitch is located. You can also leave the `ZoneId` parameter empty. Then, the system selects the zone where the specified vSwitch is located.

This parameter is empty by default.

cn-hangzhou-g

InternetChargeType

string

No

The billing method for network usage. Valid values:

-   PayByBandwidth: pay-by-bandwidth
-   PayByTraffic: pay-by-traffic

Default value: PayByTraffic.

**Note** When the **pay-by-traffic** billing method for network usage is used, the maximum inbound and outbound bandwidths are used as the upper limits of bandwidths instead of guaranteed performance specifications. In scenarios where demand outstrips resource supplies, these maximum bandwidth values may not be reached. If you want guaranteed bandwidths for your instance, use the **pay-by-bandwidth** billing method for network usage.

PayByTraffic

SystemDisk.Size

string

No

The size of the system disk. Unit: GiB. Valid values:

-   Basic disk: 20 to 500.
    
-   ESSD: Valid values vary based on the performance level of the ESSD.
    
    -   PL0 ESSD: 1 to 2048.
    -   PL1 ESSD: 20 to 2048.
    -   PL2 ESSD: 461 to 2048.
    -   PL3 ESSD: 1261 to 2048.
-   ESSD AutoPL disk: 1 to 2048.
    
-   Other disk categories: 20 to 2048.
    

The value of this parameter must be at least 1 and greater than or equal to the image size.

Default value: 40 or the image size, whichever is greater.

40

SystemDisk.Category

string

No

The category of the system disk. Valid values:

-   cloud\_efficiency: utra disk
-   cloud\_ssd: standard SSD
-   cloud\_essd: enhanced SSD (ESSD)
-   cloud: basic disk
-   cloud\_auto: ESSD AutoPL disk
-   cloud\_essd\_entry: ESSD Entry disk

**Note** The value of this parameter can be `cloud_essd_entry` only when `InstanceType` is set to `ecs.u1` or `ecs.e`. ecs.u1 indicates the u1 universal instance family and ecs.e indicates the e economy instance family. For information about the u1 and e instance families, see the [u1, universal instance family](/help/en/ecs/user-guide/general-work-force) section in the "Universal instance families" topic and the [e, economy instance family](/help/en/ecs/user-guide/shared-instance-families) section in the "Shared instance families" topic.

For non-I/O optimized instances of retired instance types, the default value is cloud. For other types of instances, the default value is cloud\_efficiency.

cloud\_ssd

SystemDisk.DiskName

string

No

The name of the system disk. The name must be 2 to 128 characters in length and support Unicode characters under the Decimal Number category and the categories whose names contain Letter. The name can contain colons (:), underscores (\_), periods (.), and hyphens (-).

cloud\_ssdSystem

SystemDisk.Description

string

No

The description of the system disk. The description must be 2 to 256 characters in length. The description can contain letters but cannot start with `http://` or `https://`.

SystemDisk\_Description

SystemDisk.PerformanceLevel

string

No

The performance level of the ESSD to use as the system disk. Default value: PL1. Valid values:

-   PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
-   PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
-   PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
-   PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.

For more information about ESSD performance levels, see [ESSDs](/help/en/ecs/user-guide/essds) .

PL0

SystemDisk.AutoSnapshotPolicyId

string

No

The ID of the automatic snapshot policy to apply to the system disk.

sp-bp67acfmxazb4p\*\*\*\*

IoOptimized

string

No

Specifies whether the instance is I/O optimized. For instances of [retired instance types](/help/en/ecs/user-guide/retired-instance-types), the default value is none. For instances of other instance types, the default value is optimized. Valid values:

-   none: The instance is not I/O optimized.
-   optimized: The instance is I/O optimized.

optimized

UserData

string

No

The user data of the instance. You must specify Base64-encoded data. The instance user data cannot exceed 32 KB in size before Base64 encoding.

For information about the limits, formats, and running frequencies of instance user data, see [Instance user data](/help/en/ecs/user-guide/customize-the-initialization-configuration-for-an-instance).

**Note** To ensure security, we recommend that you do not use plaintext to pass in confidential information, such as passwords or private keys, as user data. If you need to pass in confidential information, we recommend that you encrypt and encode the information in Base64 and then decode and decrypt the information in the same manner in the instance.

ZWNobyBoZWxsbyBlY3Mh

KeyPairName

string

No

The name of the key pair.

**Note** For Windows instances, this parameter is ignored. This parameter is empty by default. The `Password` parameter takes effect even if the KeyPairName parameter is specified.

KeyPair\_Name

RamRoleName

string

No

The name of the Resource Access Management (RAM) role. You can call the [ListRoles](/help/en/ram/api-listroles) operation provided by RAM to query the instance RAM roles that you created.

RAM\_Name

Amount

integer

No

The desired number of ECS instances that you want to create. Valid values: 1 to 100.

The number of ECS instances that can be created varies based on the Amount and MinAmount values.

-   If you do not specify MinAmount, the RunInstances operation creates ECS instances based on the Amount value. If the available resources are insufficient to create the desired number of ECS instances, the RunInstances operation returns an error response and no ECS instances are created.
    
-   If you specify MinAmount, take note of the following items:
    
    -   If the available resources are insufficient to create the minimum number of ECS instances, no ECS instances are created and the RunInstances operation returns an error response.
    -   If the available resources are insufficient to create the desired number of ECS instances but are sufficient to create the minimum number of ECS instances, the RunInstances operation uses the available resources to create ECS instances and returns a success response. In this case, the number of ECS instances that can be created is less than the desired number of ECS instances.
    -   If the available resources are sufficient to create the desired number of ECS instances, the RunInstances operation uses the available resources to create the desired number of ECS instances and returns a success response.

Default value: 1.

3

MinAmount

integer

No

The minimum number of ECS instances that you want to create. Valid values: 1 to 100.

The number of ECS instances that can be created varies based on the Amount and MinAmount values.

-   If you do not specify MinAmount, the RunInstances operation creates ECS instances based on the Amount value. If the available resources are insufficient to create the desired number of ECS instances, the RunInstances operation returns an error response and no ECS instances are created.
    
-   If you specify MinAmount, take note of the following items:
    
    -   If the available resources are insufficient to create the minimum number of ECS instances, no ECS instances are created and the RunInstances operation returns an error response.
    -   If the available resources are insufficient to create the desired number of ECS instances but are sufficient to create the minimum number of ECS instances, the RunInstances operation uses the available resources to create ECS instances and returns a success response. In this case, the number of ECS instances that can be created is less than the desired number of ECS instances.
    -   If the available resources are sufficient to create the desired number of ECS instances, the RunInstances operation uses the available resources to create the desired number of ECS instances and returns a success response.

2

AutoReleaseTime

string

No

The time when to automatically release the pay-as-you-go instance. Specify the time in the [ISO 8601 standard](/help/en/ecs/developer-reference/iso-8601-time-format) in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.

-   If the value of seconds (`ss`) is not `00`, the start time is automatically rounded to the nearest minute based on the value of minutes (`mm`).
-   The specified time must be at least 30 minutes later than the current time.
-   The specified time can be at most three years later than the current time.

2018-01-01T12:05:00Z

SpotStrategy

string

No

The bidding policy for the pay-as-you-go instance. This parameter is valid only when the `InstanceChargeType` parameter is set to `PostPaid`. Valid values:

-   NoSpot: The instance is created as a pay-as-you-go instance.
-   SpotWithPriceLimit: The instance is created as a spot instance with a user-defined maximum hourly price.
-   SpotAsPriceGo: The instance is created as a spot instance for which the market price at the time of purchase is automatically used as the bid price.

Default value: NoSpot.

NoSpot

SpotDuration

integer

No

The protection period of the spot instance. Unit: hours. Valid values:

-   1: After a spot instance is created, Alibaba Cloud ensures that the instance is not automatically released within 1 hour. After the 1-hour protection period ends, the system compares the bid price with the market price and checks the resource inventory to determine whether to retain or release the instance.
-   0: After a spot instance is created, Alibaba Cloud does not ensure that the instance can run for one hour. The system compares the biding price with the market prices and checks the resource inventory to determine whether to retain or release the instance.

Default value: 1.

**Note**

-   You can set this parameter only to 0 or 1.
    
-   The spot instance is billed by second. Specify an appropriate protection period.
    
-   Alibaba Cloud sends an ECS system event to notify you 5 minutes before the instance is released.
    

1

SpotPriceLimit

float

No

The maximum hourly price of the instance. The value is accurate to three decimal places. This parameter is valid only when the `SpotStrategy` parameter is set to `SpotWithPriceLimit`.

0.97

SpotInterruptionBehavior

string

No

The interruption mode of the spot instance. Valid values:

-   Terminate: The instance is released.
    
-   Stop: The instance is stopped in economical mode.
    
    For information about the economical mode, see [Economical mode](/help/en/ecs/user-guide/economical-mode).
    

Default value: Terminate.

Terminate

SecurityEnhancementStrategy

string

No

Specifies whether to enable security hardening. Valid values:

-   Active: enables security hardening. This value is applicable only to public images.
-   Deactive: does not enable security hardening. This value is applicable to all images.

Active

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.\*\*\*\* For more information, see [How to ensure idempotence](/help/en/ecs/developer-reference/how-to-ensure-idempotence).

123e4567-e89b-12d3-a456-426655440000

HpcClusterId

string

No

The ID of the high performance computing (HPC) cluster to which the instance belongs.

This parameter is required when you create instances of a Supper Computing Cluster (SCC) instance type. For information about how to create an HPC cluster, see [CreateHpcCluster](/help/en/ecs/api-createhpccluster) .

hpc-bp67acfmxazb4p\*\*\*\*

DryRun

boolean

No

Specifies whether to check the validity of the request without actually making the request. Default value: false. Valid values:

-   true: The validity of the request is checked but the request is not made. Check items include whether required parameters are specified, the request format, service limits, and available ECS resources. If the check fails, the corresponding error code is returned. If the check succeeds, the `DryRunOperation` error code is returned.
-   false: The validity of the request is checked, and the request is made if the check succeeds.

false

DedicatedHostId

string

No

The ID of the dedicated host.

You can call the [DescribeDedicatedHosts](/help/en/dedicated-host/developer-reference/api-describededicatedhosts) operation to query the list of dedicated host IDs.

**Note** Spot instances cannot be created on dedicated hosts. If you specify DedicatedHostId, SpotStrategy and SpotPriceLimit are automatically ignored.

dh-bp67acfmxazb4p\*\*\*\*

LaunchTemplateId

string

No

The ID of the launch template. For more information, call the [DescribeLaunchTemplates](/help/en/ecs/api-describelaunchtemplates) operation.

To use a launch template to create an instance, you must use the `LaunchTemplateId` or `LaunchTemplateName` parameter to specify the launch template.

lt-bp1apo0bbbkuy0rj\*\*\*\*

LaunchTemplateName

string

No

The name of the launch template.

To use a launch template to create an instance, you must use the `LaunchTemplateId` or `LaunchTemplateName` parameter to specify the launch template.

LaunchTemplate\_Name

LaunchTemplateVersion

long

No

The version of the launch template. If you set the `LaunchTemplateId` or `LaunchTemplateName` parameter but do not set the version number of the launch template, the default template version is used.

3

ResourceGroupId

string

No

The ID of the resource group to which to assign the instance.

rg-bp67acfmxazb4p\*\*\*\*

Period

integer

No

The subscription period of the instance. The unit is specified by the `PeriodUnit` parameter. This parameter is valid and required only when `InstanceChargeType` is set to `PrePaid`. If the `DedicatedHostId` parameter is specified, the value of Period must not exceed the subscription period of the specified dedicated host. Valid values:

-   Valid values when PeriodUnit is set to Week: 1, 2, 3, and 4.
-   Valid values when PeriodUnit is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.

1

PeriodUnit

string

No

The unit of the subscription period. Default value: Month. Valid values:

-   Week
-   Month

Month

AutoRenew

boolean

No

Specifies whether to enable auto-renewal for the instance. This parameter is valid only when the `InstanceChargeType` parameter is set to `PrePaid`. Valid values:

-   true: enables auto-renewal.
-   false: does not enable auto-renewal.

Default value: false.

true

AutoRenewPeriod

integer

No

The auto-renewal period of the instance. Valid values:

-   Valid values when PeriodUnit is set to Week: 1, 2, and 3.
-   Valid values when PeriodUnit is set to Month: 1, 2, 3, 6, 12, 24, 36, 48, and 60.

Default value: 1.

1

InstanceChargeType

string

No

The billing method of the instance. Valid values:

-   PrePaid: subscription
-   PostPaid: pay-as-you-go

Default value: PostPaid.

If you set this parameter to PrePaid, make sure that your account has sufficient balance or credit. Otherwise, an `InvalidPayMethod` error is returned.

PrePaid

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

PrivateIpAddress

string

No

The private IP address to assign to the instance. To assign a private IP address to an instance that resides in a VPC, make sure that the IP address is an idle IP address within the CIDR block of the vSwitch specified by `VSwitchId`.

Take note of the following items:

-   If `PrivateIpAddress` is specified, take note of the following items:
    
    -   If `Amount` is set to 1, a single instance is created and the specified private IP address is assigned to the instance.
    -   If `Amount` is set to a numeric value greater than 1, the specified number of instances are created and consecutive private IP addresses starting from the specified one are assigned to the instances. In this case, you cannot specify parameters that start with `NetworkInterface.N` to attach secondary ENIs to the instances.
-   If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot specify `PrivateIpAddress` but can specify `NetworkInterface.N.PrimaryIpAddress`.
    

**Note** The first IP address and last three IP addresses of each vSwitch CIDR block are reserved. You cannot specify the IP addresses. For example, if a vSwitch CIDR block is 192.168.1.0/24, the IP addresses 192.168.1.0, 192.168.1.253, 192.168.1.254, and 192.168.1.255 are reserved.

10.1.\*\*.\*\*

CreditSpecification

string

No

The performance mode of the burstable instance. Valid values:

-   Standard: the standard mode. For more information, see the "Standard mode" section in [Overview of burstable instances](/help/en/ecs/user-guide/burst-performance-instance-overview).
-   Unlimited: the unlimited mode. For more information, see the "Unlimited mode" section in [Burstable instances](/help/en/ecs/user-guide/burst-performance-instance-overview).

Standard

Ipv6AddressCount

integer

No

The number of IPv6 addresses to randomly generate for the primary ENI. Valid values: 1 to 10.

Take note of the following items:

-   You cannot specify both the `Ipv6Addresses.N` and `Ipv6AddressCount` parameters.
-   If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot specify `Ipv6Address.N` or `Ipv6AddressCount` but can specify `NetworkInterface.N.Ipv6Address.N` or `NetworkInterface.N.Ipv6AddressCount`.

1

NetworkInterfaceQueueNumber

integer

No

The number of queues supported by the primary ENI. Take note of the following items:

-   The value of this parameter cannot exceed the maximum number of queues per ENI allowed for the instance type.
-   The total number of queues for all ENIs on the instance cannot exceed the queue quota for the instance type. To query the maximum number of queues per ENI and the queue quota for an instance type, you can call the [DescribeInstanceTypes](/help/en/ecs/api-describeinstancetypes) operation to query the `MaximumQueueNumberPerEni` and `TotalEniQueueQuantity` values.
-   If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot specify `NetworkInterfaceQueueNumber` but can specify `NetworkInterface.N.QueueNumber`.

8

DeletionProtection

boolean

No

Specifies whether to enable release protection for the instance. This parameter determines whether you can use the ECS console or call the [DeleteInstance](/help/en/ecs/api-deleteinstance) operation to release the instance. Valid values:

-   true: enables release protection for the instance.
-   false: disables release protection for the instance.

Default value: false.

**Note** This parameter is applicable to only pay-as-you-go instances. It can protect instances against manual releases, but not against automatic releases.

false

HibernationOptions.Configured

boolean

No

**Note** This parameter is in invitational preview and is unavailable.

false

Affinity

string

No

Specifies whether to associate an instance on a dedicated host with the dedicated host. Valid values:

-   default: does not associate the instance with the dedicated host. When you start an instance that was stopped in economical mode, the instance is automatically deployed to another dedicated host in the automatic deployment resource pool if the available resources of the original dedicated host are insufficient.
-   host: associates the instance with the dedicated host. When you start an instance that was stopped in economical mode, the instance remains on the original dedicated host. If the available resources of the original dedicated host are insufficient, the instance cannot be started.

Default value: default.

default

Tenancy

string

No

Specifies whether to create the instance on a dedicated host. Valid values:

-   default: creates the instance on a non-dedicated host.
-   host: creates the instance on a dedicated host. If you do not set the `DedicatedHostId` parameter, Alibaba Cloud selects a dedicated host for the instance.

Default value: default.

default

StorageSetId

string

No

The ID of the storage set.

ss-bp67acfmxazb4p\*\*\*\*

StorageSetPartitionNumber

integer

No

The maximum number of partitions in the storage set. Valid values: integers greater than or equal to 1.

2

CpuOptions.Core

integer

No

The number of CPU cores.

2

CpuOptions.ThreadsPerCore

integer

No

The number of threads per CPU core. The following formula is used to calculate the number of vCPUs of the instance: `CpuOptions.Core` value × `CpuOptions.ThreadsPerCore` value.

-   If `CpuOptionsThreadPerCore` is set to 1, Hyper-Threading (HT) is disabled.
-   This parameter is applicable only to specific instance types.

2

CpuOptions.Numa

string

No

This parameter is no longer used.

1

CpuOptions.TopologyType

string

No

The CPU topology type of the instance. Valid values:

-   ContinuousCoreToHTMapping: The HT technology allows continuous threads to run on the same core in the CPU topology of the instance.\`\`
-   DiscreteCoreToHTMapping: The HT technology allows discrete threads to run on the same core in the CPU topology of the instance.\`\`

This parameter is empty by default.

**Note** This parameter is supported only for specific instance families. For more information about the supported instance families, see [View and modify the CPU topology](/help/en/ecs/user-guide/view-and-modify-cpu-topology).

DiscreteCoreToHTMapping

SecurityOptions.TrustedSystemMode

string

No

The trusted system mode. Set the value to vTPM.

The trusted system mode supports the following instance families:

-   g7, c7, and r7
-   Security-enhanced instance families: g7t, c7t, and r7t

When you create instances of the preceding instance families, you must set this parameter. Take note of the following items:

-   To use the Alibaba Cloud trusted system, set this parameter to vTPM. Then, the Alibaba Cloud trusted system performs trust verifications when the instances start.
-   If you do not want to use the Alibaba Cloud trusted system, leave this parameter empty. Note that if your created instances use an enclave-based confidential computing environment (with `SecurityOptions.ConfidentialComputingMode` set to Enclave), the Alibaba Cloud trusted system is enabled for the instances.
-   When you use the ECS API to create instances that use the trusted system, you can call only the `RunInstances` operation. The `CreateInstance` operation does not support the `SecurityOptions.TrustedSystemMode` parameter.

**Note** If you have configured an instance as a trusted one when you created the instance, you can use only an image that support the trusted system to replace the system disk of the instance.

For more information about the trusted system, see [Overview](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities) .

vTPM

SecurityOptions.ConfidentialComputingMode

string

No

The confidential computing mode. Set the value to Enclave.

A value of Enclave indicates that an enclave-based confidential computing environment is built on the instance. When you call the `RunInstances` operation, you can set this parameter only for c7, g7, or r7 instances to use enclave-based confidential computing. Take note of the following items:

-   The confidential computing feature is in invitational preview.
-   When you use the ECS API to create instances that support enclave-based confidential computing, you can call only the `RunInstances` operation. The `CreateInstance` operation does not support the `SecurityOptions.ConfidentialComputingMode` parameter.
-   Enclave-based confidential computing is implemented based on Alibaba Cloud Trusted System (vTPM). When you build a confidential computing environment on an instance by using Enclave, Alibaba Cloud Trusted System is enabled for the instance. If you set `SecurityOptions.ConfidentialComputingMode` to Enclave when you call this operation, the created instances use enclave-based confidential computing and Alibaba Cloud Trusted System regardless of whether `SecurityOptions.TrustedSystemMode` is set to vTPM.

For more information about confidential computing, see [Build a confidential computing environment by using Enclave](/help/en/ecs/user-guide/build-a-confidential-computing-environment-by-using-enclave).

Enclave

HttpEndpoint

string

No

Specifies whether to enable the access channel for instance metadata. Valid values:

-   enabled
-   disabled

Default value: enabled.

**Note** For more information about instance metadata, see [Overview of ECS instance metadata](/help/en/doc-detail/49122.html).

enabled

HttpTokens

string

No

Specifies whether to forcefully use the security-enhanced mode (IMDSv2) to access instance metadata. Valid values:

-   optional: does not forcefully use the security-enhanced mode (IMDSv2).
-   required: forcefully uses the security-enhanced mode (IMDSv2). After you set this parameter to required, you cannot access instance metadata in normal mode.

Default value: optional.

**Note** For more information about the modes of accessing instance metadata, see [Access mode of instance metadata](/help/en/doc-detail/150575.html).

optional

HttpPutResponseHopLimit

integer

No

**Note** This parameter is not publicly available.

3

PrivatePoolOptions.MatchCriteria

string

No

The type of the private pool to use to create the instance. A private pool is generated after an elasticity assurance or a capacity reservation takes effect. You can select the private pool when you start an instance. Valid values:

-   Open: open private pool. The system selects a matching open private pool to create the instance. If no matching open private pools are found, resources in the public pool are used. When you set this parameter to Open, you can leave the `PrivatePoolOptions.Id` parameter empty.
-   Target: specified private pool. The system uses the capacity in a specified private pool to create the instance. If the specified private pool is unavailable, the instance cannot be created. If you set this parameter to Target, you must specify the `PrivatePoolOptions.Id` parameter.
-   None: no private pool. The capacity in private pools is not used.

Default value: None.

In the following scenarios, the PrivatePoolOptions.MatchCriteria parameter can be set only to `None` or left empty:

-   A spot instance is created.
-   The instance is created in the classic network.
-   The instance is created on a dedicated host.

Open

PrivatePoolOptions.Id

string

No

The ID of the private pool. The ID of a private pool is the same as that of the elasticity assurance or capacity reservation for which the private pool is generated.

eap-bp67acfmxazb4\*\*\*\*

Isp

string

No

**Note** This parameter is in invitational preview and is unavailable.

null

SchedulerOptions.DedicatedHostClusterId

string

No

The ID of the dedicated host cluster in which to create the instance. After this parameter is specified, the system selects one dedicated host from the specified cluster to create the instance.

**Note** This parameter is valid only when the `Tenancy` parameter is set to `host`.

When you specify both the `DedicatedHostId` and `SchedulerOptions.DedicatedHostClusterId` parameters, take note of the following items:

-   If the specified dedicated host belongs to the specified dedicated host cluster, the instance is preferentially deployed on the specified dedicated host.
-   If the specified dedicated host does not belong to the specified dedicated host cluster, the instance cannot be created.

You can call the [DescribeDedicatedHostClusters](/help/en/ecs/api-describededicatedhostclusters) operation to query the list of dedicated host cluster IDs.

dc-bp12wlf6am0vz9v2\*\*\*\*

SecurityGroupIds

array

No

The IDs of security groups to which to assign the instance. The valid values of N vary based on the maximum number of security groups to which an instance can belong. For more information, see the [Security group limits](/help/en/doc-detail/101348.html) section of the "Limits" topic.

When you specify this parameter, take note of the following items:

-   You cannot specify both `SecurityGroupId` and `SecurityGroupIds.N` in the same request.
-   If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot specify `SecurityGroupId` or `SecurityGroupIds.N` but can specify `NetworkInterface.N.SecurityGroupId` or `NetworkInterface.N.SecurityGroupIds.N`.

string

No

The ID of security group N to which to assign the instance. The valid values of N vary based on the maximum number of security groups to which an instance can belong. For more information, see the [Security group limits](/help/en/doc-detail/101348.html) section of the "Limits" topic.

When you specify this parameter, take note of the following items:

-   You cannot specify both `SecurityGroupId` and `SecurityGroupIds.N` in the same request.
-   If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot specify `SecurityGroupId` or `SecurityGroupIds.N` but can specify `NetworkInterface.N.SecurityGroupId` or `NetworkInterface.N.SecurityGroupIds.N`.

sg-bp15ed6xe1yxeycg7\*\*\*\*

HostNames

array

No

The hostname of instance N. You can use this parameter to specify different hostnames for multiple instances.

string

No

The hostname of instance N. You can use this parameter to specify different hostnames for multiple instances. Take note of the following items:

-   The maximum value of N must be the same as the `Amount` value. For example, if you set `Amount` to 2, you can use HostNames.1 and HostNames.2 to specify hostnames for the individual instances. Examples: `HostNames.1=test1` and `HostNames.2=test2`.
-   You cannot specify both the `HostName` and `HostNames.N` parameters.
-   The hostname cannot start or end with a period (.) or hyphen (-). It cannot contain consecutive periods (.) or hyphens (-).
-   For Windows instances, the hostname must be 2 to 15 characters in length and cannot contain periods (.) or contain only digits. It can contain letters, digits, and hyphens (-).
-   For instances that run other operating systems such as Linux, the hostname must be 2 to 64 characters in length. You can use periods (.) to separate a hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).

ecs-host-01

DataDisk

array<object>

No

The data disks.

object

No

Data disk N.

BurstingEnabled

boolean

No

Specifies whether to enable the performance burst feature for data disk N. Valid values:

-   true: enables the performance burst feature for the system disk.
-   false: disables the performance burst feature for the data disk.

**Note** This parameter is available only if you set DataDisk.N.Category to cloud\_auto. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

false

StorageClusterId

string

No

The ID of the dedicated block storage cluster to which data disk N belongs. If you want to use a disk in a dedicated block storage cluster as data disk N when you create the instance, you must specify this parameter.

dbsc-j5e1sf2vaf5he8m2\*\*\*\*

Description

string

No

The description of data disk N. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.

DataDisk\_Description

Category

string

No

The category of data disk N. Valid values:

-   cloud\_efficiency: utra disk.
    
-   cloud\_ssd: standard SSD.
    
-   cloud\_essd: ESSD.
    
-   cloud: basic disk.
    
-   cloud\_auto: ESSD AutoPL disk.
    
-   cloud\_regional\_disk\_auto: Regional ESSD.
    
-   cloud\_essd\_entry: ESSD Entry disk.
    
    \*\*
    
    **Note** This parameter can be set to `cloud_essd_entry` only when `InstanceType` is set to `ecs.u1` or `ecs.e`.
    
-   elastic\_ephemeral\_disk\_standard: standard elastic ephemeral disk.
    
-   elastic\_ephemeral\_disk\_premium: premium elastic ephemeral disk
    

For I/O optimized instances, the default value is cloud\_efficiency. For non-I/O optimized instances, the default value is cloud.

cloud\_ssd

KMSKeyId

string

No

The ID of the KMS key used for the data disk.

0e478b7a-4262-4802-b8cb-00d3fb40\*\*\*\*

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

Encrypted

string

No

Specifies whether to encrypt data disk N. Valid values:

-   true: encrypts the data disk.
-   false: does not encrypt the data disk.

Default value: false.

**Note** When you use a shared encrypted image to create the disk based on an encrypted snapshot, you must set Encrypted to true to ensure that the disk uses an encryption key of your own.

false

Device

string

No

The mount point of data disk N. The mount points are named based on the number of data disks:

-   1st to 25th data disks: /dev/xvd`[b-z]`.
-   From the 26th data disk on: /dev/xvd`[aa-zz]`. For example, the 26th data disk is named /dev/xvdaa, the 27th data disk is named /dev/xvdab, and so on.

**Note**

-   This parameter is applicable to scenarios in which a full image is used to create instances. A full image is an image that contains an operating system, application software, and business data. For these scenarios, you can set this parameter to the mount point of data disk N in the full image and modify `DataDisk.N.Size` and `DataDisk.N.Category` to change the category and size of data disk N created based on the image.
    
-   When you use a full image to create an ECS instance, the data disks in the image are created as the first N data disks of the instance.
    

/dev/xvdb

Size

integer

No

The size of data disk N. Valid values of N: 1 to 16. Unit: GiB. Valid values:

-   Valid values when DataDisk.N.Category is set to cloud\_efficiency: 20 to 32768.
    
-   Valid values when DataDisk.N.Category is set to cloud\_ssd: 20 to 32768.
    
-   Valid values when DataDisk.N.Category is set to cloud\_essd: vary based on the value of `DataDisk.N.PerformanceLevel`.
    
    -   Valid values when DataDisk.N.PerformanceLevel is set to PL0: 1 to 65536.
    -   Valid values when DataDisk.N.PerformanceLevel is set to PL1: 20 to 65536.
    -   Valid values when DataDisk.N.PerformanceLevel is set to PL2: 461 to 65536.
    -   Valid values when DataDisk.N.PerformanceLevel is set to PL3: 1261 to 65536.
-   Valid values when DataDisk.N.Category is set to cloud: 5 to 2000.
    
-   Valid values when DataDisk.N.Category is set to cloud\_auto: 1 to 65536.
    
-   Valid values when DataDisk.N.Category is set to cloud\_essd\_entry: 10 to 32768.
    

**Note** The value of this parameter must be greater than or equal to the size of the snapshot specified by `DataDisk.N.SnapshotId`.

2000

DeleteWithInstance

boolean

No

Specifies whether to release data disk N when the associated instance is released. Valid values:

-   true: releases the data disk when the associated instance is released.
-   false: does not release the data disk when the associated instance is released.

Default value: true.

true

AutoSnapshotPolicyId

string

No

The ID of the automatic snapshot policy to apply to data disk N.

sp-bp67acfmxazb4p\*\*\*\*

DiskName

string

No

The name of data disk N. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (\_), periods (.), and hyphens (-).

cloud\_ssdData

ProvisionedIops

long

No

The provisioned read/write IOPS of the ESSD AutoPL disk to use as data disk N. Valid values: 0 to min{50,000, 1,000 × Capacity - Baseline IOPS}.

Baseline IOPS = min{1,800 + 50 × Capacity, 50,000}.

**Note** This parameter is available only if you set DataDisk.N.Category to cloud\_auto. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

40000

EncryptAlgorithm

string

No

**Note** This parameter is not publicly available.

aes-256

SnapshotId

string

No

The ID of the snapshot to use to create data disk N. Valid values of N: 1 to 16.

When `DataDisk.N.SnapshotId` is specified, `DataDisk.N.Size` is ignored. The data disk is created with the size of the specified snapshot. Use snapshots created on or after July 15, 2013. Otherwise, an error is returned and your request is rejected.

s-bp17441ohwka0yuh\*\*\*\*

Arn

array<object>

No

**Note** This parameter is not publicly available.

object

No

**Note** This parameter is not publicly available.

AssumeRoleFor

long

No

**Note** This parameter is not publicly available.

0

RoleType

string

No

**Note** This parameter is not publicly available.

null

Rolearn

string

No

**Note** This parameter is not publicly available.

null

NetworkInterface

array<object>

No

The information of the elastic network interfaces (ENIs).

object

No

The information of ENI N.

NetworkInterfaceTrafficMode

string

No

The communication mode of ENI N. Valid values:

-   Standard: uses the TCP communication mode.
-   HighPerformance: uses the remote direct memory access (RDMA) communication mode with Elastic RDMA Interface (ERI) enabled.

Default value: Standard.

**Note** The number of ERIs on an instance cannot exceed the maximum number of ERIs that the instance type supports. For more information, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families).

Standard

Description

string

No

The description of ENI N.

Take note of the following items:

-   The value of N cannot exceed the maximum number of ENIs per instance that the instance type supports. For the maximum number of ENIs per instance that an instance type supports, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families) or call the [DescribeInstanceTypes](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstancetypes) operation.
-   The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
-   If `NetworkInterface.N.InstanceType` is set to `Primary`, you do not need to specify this parameter.

Network\_Description

DeleteOnRelease

boolean

No

Specifies whether to release ENI N when the associated instance is released. Valid values:

-   true: releases the ENI when the associated instance is released.
-   false: retains the ENI when the associated instance is released.

Default value: true.

**Note** This parameter takes effect only for secondary ENIs.

true

VSwitchId

string

No

The ID of the vSwitch to which to connect ENI N.

When you specify this parameter, take note of the following items:

-   The value of N cannot exceed the maximum number of ENIs per instance that the instance type supports. For the maximum number of ENIs per instance that an instance type supports, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families) or call the [DescribeInstanceTypes](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstancetypes) operation.
-   If `NetworkInterface.N.InstanceType` is set to `Primary`, you must specify this parameter. In this case, this parameter is equivalent to `VSwitchId`. You cannot specify both NetworkInterface.N.VSwitchId and `VSwitchId` in the same request.
-   If `NetworkInterface.N.InstanceType` is set to `Secondary` or left empty, you do not need to specify this parameter. The default value is the VSwitchId value.

vsw-bp67acfmxazb4p\*\*\*\*

SecurityGroupId

string

No

The ID of the security group to which to assign ENI N.

Take note of the following items:

-   The value of N cannot exceed the maximum number of ENIs per instance that the instance type supports. For the maximum number of ENIs per instance that an instance type supports, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families) or call the [DescribeInstanceTypes](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstancetypes) operation.
-   If `NetworkInterface.N.InstanceType` is set to `Primary`, you must specify this parameter. In this case, this parameter is equivalent to `SecurityGroupId` and you cannot specify `SecurityGroupId`, `SecurityGroupIds.N`, or `NetworkInterface.N.SecurityGroupIds.N`.
-   If you set `NetworkInterface.N.InstanceType` to `Secondary` or leave NetworkInterface.N.InstanceType empty, you do not need to specify this parameter. The default value is the ID of the security group to which to assign the instance.

sg-bp67acfmxazb4p\*\*\*\*

NetworkInterfaceName

string

No

The name of ENI N. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (\_), periods (.), and hyphens (-).

Take note of the following items:

-   The value of N cannot exceed the maximum number of ENIs per instance that the instance type supports. For the maximum number of ENIs per instance that an instance type supports, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families) or call the [DescribeInstanceTypes](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstancetypes) operation.
-   If `NetworkInterface.N.InstanceType` is set to `Primary`, you do not need to specify this parameter.

Network\_Name

PrimaryIpAddress

string

No

The primary IP address to assign to ENI N.

Take note of the following items:

-   The value of N cannot exceed the maximum number of ENIs per instance that the instance type supports. For the maximum number of ENIs per instance that an instance type supports, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families) or call the [DescribeInstanceTypes](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstancetypes) operation.
    
    -   If the value of N is 1, you can configure a primary or secondary ENI. If you specify this parameter, set `Amount` to a numeric value greater than 1, and set NetworkInterface.N.InstanceType to Primary, the specified number of instances are created and consecutive primary IP addresses starting from the specified IP address are assigned to the instances. In this case, you cannot attach secondary ENIs to the instances.
    -   If you specify this parameter, set `Amount` to a numeric value greater than 1, and set NetworkInterface.N.InstanceType to Primary, you cannot set `NetworkInterface.2.InstanceType` to Secondary to attach a secondary ENI.
-   If you set `NetworkInterface.N.InstanceType` to `Primary`, this parameter is equivalent to `PrivateIpAddress`. You cannot specify both this parameter and `PrivateIpAddress` in the same request.
    
-   If you set `NetworkInterface.N.InstanceType` to `Secondary` or leave NetworkInterface.N.InstanceType empty, the specified primary IP address is assigned to the secondary ENI. The default value is an IP address that is randomly selected from within the CIDR block of the vSwitch to which to connect the secondary ENI.
    

**Note**

-   The first IP address and last three IP addresses of each vSwitch CIDR block are reserved. You cannot specify the IP addresses. For example, if a vSwitch CIDR block is 192.168.1.0/24, the following IP addresses are reserved: 192.168.1.0, 192.168.1.253, 192.168.1.254, and 192.168.1.255.

172.16.\*\*.\*\*

NetworkCardIndex

integer

No

The index of the network card for ENI N.

Take note of the following items:

-   You can specify NIC indexes only for instances of specific instance types.
-   If you set NetworkInterface.N.InstanceType to Primary, you can set NetworkInterface.N.NetworkCardIndex only to 0 for instance types that support network cards.
-   If you set NetworkInterface.N.InstanceType to Secondary or leave NetworkInterface.N.InstanceType empty, you can specify NetworkInterface.N.NetworkCardIndex based on instance types if the instance types support network cards. For more information, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families).

0

NetworkInterfaceId

string

No

The ID of the ENI to attach to the instance.

If you specify this parameter, you must set `Amount` to 1.

**Note** This parameter takes effect only for secondary ENIs. After you specify an existing secondary ENI, you cannot specify other ENI creation parameters.

eni-bp1gn106np8jhxhj\*\*\*\*

SecurityGroupIds

array

No

The IDs of security groups to which to assign ENI N.

-   The value of the first N in this parameter cannot exceed the maximum number of ENIs per instance that the instance type supports. For the maximum number of ENIs per instance that an instance type supports, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families) or call the [DescribeInstanceTypes](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstancetypes) operation.
-   The second N in this parameter indicates that one or more security group IDs can be specified. The valid values of the second N vary based on the maximum number of security groups to which an instance can belong. For more information, see [Security group limits](/help/en/ecs/user-guide/limitations#SecurityGroupQuota1).

Take note of the following items:

-   If you set `NetworkInterface.N.InstanceType` to `Primary`, you must specify this parameter or `NetworkInterface.N.SecurityGroupId`. In this case, this parameter is equivalent to `SecurityGroupIds.N`, and you cannot specify `SecurityGroupId`, `SecurityGroupIds.N`, or `NetworkInterface.N.SecurityGroupId`.
-   If you set `NetworkInterface.N.InstanceType` to `Secondary` or leave NetworkInterface.N.InstanceType empty, you do not need to specify this parameter. The default value is the ID of the security group to which to assign the instance.

string

No

The ID of security group N to which to assign ENI N.

-   The value of the first N in this parameter cannot exceed the maximum number of ENIs per instance that the instance type supports. For the maximum number of ENIs per instance that an instance type supports, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families) or call the [DescribeInstanceTypes](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstancetypes) operation.
-   The second N in this parameter indicates that one or more security group IDs can be specified. The valid values of the second N vary based on the maximum number of security groups to which an instance can belong. For more information, see [Security group limits](/help/en/ecs/user-guide/limitations#SecurityGroupQuota1).

Take note of the following items:

-   If you set `NetworkInterface.N.InstanceType` to `Primary`, you must specify this parameter or `NetworkInterface.N.SecurityGroupId`. In this case, this parameter is equivalent to `SecurityGroupIds.N`, and you cannot specify `SecurityGroupId`, `SecurityGroupIds.N`, or `NetworkInterface.N.SecurityGroupId`.
-   If you set `NetworkInterface.N.InstanceType` to `Secondary` or leave NetworkInterface.N.InstanceType empty, you do not need to specify this parameter. The default value is the ID of the security group to which to assign the instance.

sg-bp15ed6xe1yxeycg7\*\*\*\*

SourceDestCheck

boolean

No

Specifies whether to enable the source and destination IP address check feature. We recommend that you enable the feature to improve network security. Valid value:

-   true: enables the performance burst feature for the system disk.
-   false: disables the performance burst feature for the data disk.

Default value: false.

**Note** This feature is available only in some regions. Before you use this method, read [Source and destination IP address check](/help/en/ecs/user-guide/source-and-destination-check).

false

QueueNumber

integer

No

The number of queues supported by ENI N.

Take note of the following items:

-   The value of N cannot exceed the maximum number of ENIs per instance that the instance type supports. For the maximum number of ENIs per instance that an instance type supports, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families) or call the [DescribeInstanceTypes](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstancetypes) operation.
-   The value of this parameter cannot exceed the maximum number of queues allowed per ENI.
-   The total number of queues for all ENIs of an instance cannot exceed the queue quota for the instance type. To query the maximum number of queues per ENI and the queue quota for an instance type, you can call the [DescribeInstanceTypes](/help/en/ecs/api-describeinstancetypes) operation and check the `MaximumQueueNumberPerEni` and `TotalEniQueueQuantity` values in the response.
-   If you specify this parameter and set `NetworkInterface.N.InstanceType` to `Primary`, you cannot specify `NetworkInterfaceQueueNumber`.

8

QueuePairNumber

long

No

The number of queue pairs (QPs) supported by the ERI.

If you want to attach multiple ERIs to a created instance, we recommend that you specify QueuePairNumber for each ERI based on the value of `QueuePairNumber` supported by the instance type and the number of ERIs that you want to use. Make sure that the total number of QPs of all ERIs does not exceed the maximum number of QPs supported by the instance type. For information about the maximum number of QPs supported by an instance type, see [DescribeInstanceTypes](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstancetypes) .

**Note** If you do not specify QueuePairNumber for an ERI, the maximum number of QPs supported by the instance type is used as the number of QPs supported by the ERI. In this case, you cannot attach an additional ERI to the instance. However, you can attach other types of ENIs to the instance.

0

TxQueueSize

integer

No

The Tx queue depth of ENI N.

**Note** This parameter is in invitational preview and is not publicly available. To use this parameter, [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket-intl).

Take note of the following items:

-   This parameter is applicable only to 7th-generation or later ECS instance types.
-   This parameter is applicable to Linux images.
-   A larger Tx queue depth yields higher outbound throughput and reduces packet loss rates but consumes more memory.

8192

Ipv6AddressCount

long

No

The number of IPv6 addresses to randomly generate for the primary ENI. Valid values: 1 to 10.

Take note of the following items:

-   This parameter takes effect only when `NetworkInterface.N.InstanceType` is set to `Primary`. If you set `NetworkInterface.N.InstanceType` to `Secondary` or leave NetworkInterface.N.InstanceType empty, you cannot specify this parameter.
-   If you specify this parameter, you cannot specify `Ipv6AddressCount`, `Ipv6Address.N`, or `NetworkInterface.N.Ipv6Address.N`.

1

InstanceType

string

No

The type of ENI N. The value of the first N in this parameter cannot exceed the maximum number of ENIs per instance that the instance type supports. For the maximum number of ENIs per instance that an instance type supports, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families) or call the [DescribeInstanceTypes](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstancetypes) operation.

Valid values:

-   Primary: the primary ENI
-   Secondary

Default value: Secondary.

Secondary

RxQueueSize

integer

No

The receive (Rx) queue depth of ENI N.

**Note** This parameter is in invitational preview and is not publicly available. To use this parameter, [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket-intl).

Take note of the following items:

-   This parameter is applicable only to 7th-generation or later ECS instance types.
-   This parameter is applicable to Linux images.
-   A larger Rx queue depth yields higher inbound throughput and reduces packet loss rates but consumes more memory.

8192

Ipv6Address

array

No

The IPv6 addresses to assign to the primary ENI. You can assign up to 10 IPv6 addresses to the primary ENI. Valid values of the second N: 1 to 10.

Example: `Ipv6Address.1=2001:db8:1234:1a00::***`.

Take note of the following items:

-   This parameter takes effect only when `NetworkInterface.N.InstanceType` is set to `Primary`. If you set `NetworkInterface.N.InstanceType` to `Secondary` or leave NetworkInterface.N.InstanceType empty, you cannot specify this parameter.
-   If you specify this parameter, you must set `Amount` to 1 and cannot specify `Ipv6AddressCount`, `Ipv6Address.N`, or `NetworkInterface.N.Ipv6AddressCount`.

string

No

IPv6 address N to assign to the primary ENI. You can assign up to 10 IPv6 addresses to the primary ENI. Valid values of the second N: 1 to 10.

Example: `Ipv6Address.1=2001:db8:1234:1a00::***`.

Take note of the following items:

-   This parameter takes effect only when `NetworkInterface.N.InstanceType` is set to `Primary`. If you set `NetworkInterface.N.InstanceType` to `Secondary` or leave NetworkInterface.N.InstanceType empty, you cannot specify this parameter.
-   If you specify this parameter, you must set `Amount` to 1 and cannot specify `Ipv6AddressCount`, `Ipv6Address.N`, or `NetworkInterface.N.Ipv6AddressCount`.

2001:db8:1234:1a00::\*\*\*

Tag

array<object>

No

The tags to add to the instance, disks, and primary ENI.

object

No

Value

string

No

The value of tag N to add to the instance, disks, and primary ENI. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain http:// or https://.

TestValue

Key

string

No

The key of tag N to add to the instance, disks, and primary ENI. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot contain http:// or https://. The tag key cannot start with acs: or aliyun.

TestKey

Ipv6Address

array

No

IPv6 address N to be assigned to the primary ENI. Valid values of N: 1 to 10.

Example: `Ipv6Address.1=2001:db8:1234:1a00::***`.

Take note of the following items:

-   If the `Ipv6Address.N` parameter is specified, you must set the `Amount` parameter to 1 and leave the `Ipv6AddressCount` parameter empty.
-   If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot set `Ipv6Addresses.N` or `Ipv6AddressCount` and must set `NetworkInterface.N.Ipv6Addresses.N` or `NetworkInterface.N.Ipv6AddressCount`.

string

No

IPv6 address N to be assigned to the primary ENI. Valid values of N: 1 to 10.

Example: `Ipv6Address.1=2001:db8:1234:1a00::***`.

Take note of the following items:

-   If the `Ipv6Address.N` parameter is specified, you must set the `Amount` parameter to 1 and leave the `Ipv6AddressCount` parameter empty.
-   If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot set `Ipv6Addresses.N` or `Ipv6AddressCount` and must set `NetworkInterface.N.Ipv6Addresses.N` or `NetworkInterface.N.Ipv6AddressCount`.

2001:db8:1234:1a00::\*\*\*

SystemDisk

object

No

The system disk-related parameter. You can set `SystemDisk.StorageClusterId` to specify the ID of the dedicated block storage cluster.

StorageClusterId

string

No

The ID of the dedicated block storage cluster to which the system disk belongs. If you want to use disks in a dedicated block storage cluster as system disks when you create instances, specify this parameter.

dbsc-j5e1sf2vaf5he8m2\*\*\*\*

ProvisionedIops

long

No

The provisioned read/write IOPS of the ESSD AutoPL disk to use as the system disk. Valid values: 0 to min{50,000, 1,000 × Capacity - Baseline IOPS}.

Baseline IOPS = min{1,800 + 50 × Capacity, 50,000}.

**Note** This parameter is available only if you set `SystemDisk.Category` to `cloud_auto`. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

40000

BurstingEnabled

boolean

No

Specifies whether to enable the performance burst feature for the system disk. Valid values:

-   true: enables the performance burst feature for the system disk.
-   false: disables the performance burst feature for the system disk.

**Note** This parameter is available only if you set `SystemDisk.Category` to `cloud_auto`. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

false

Encrypted

string

No

Specifies whether to encrypt the system disk. Valid values:

-   true: encrypts the system disk.
-   false: does not encrypt the system disk.

Default value: false.

**Note** The system disks of instances cannot be encrypted during instance creation in Hong Kong Zone D or Singapore Zone A.

**Note** When you use a shared encrypted image to create the disk based on an encrypted snapshot, you must set Encrypted to true to ensure that the disk uses an encryption key of your own.

false

KMSKeyId

string

No

The ID of the KMS key to use for the system disk.

0e478b7a-4262-4802-b8cb-00d3fb40\*\*\*\*

EncryptAlgorithm

string

No

**Note** This parameter is not publicly available.

ase-256

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

NetworkOptions

object

No

Details about network options.

EnableJumboFrame

boolean

No

Specifies whether to enable the Jumbo Frames feature for the instance. Valid values:

-   false: does not enable the Jumbo Frames feature for the instance. The maximum transmission unit (MTU) value of all ENIs on the instance is set to 1500.
-   true: enables the Jumbo Frames feature for the instance. The MTU value of all ENIs on the instance is set to 8500.

Default value: true.

**Note** The Jumbo Frames feature is supported by only 8th-generation or later instance types. For more information, see [Jumbo Frames](/help/en/ecs/user-guide/jumbo-frame/).

false

AutoPay

boolean

No

Specifies whether to automatically complete the payment for instance creation. Valid values:

-   true: The payment is automatically completed.
    
    \*\*
    
    **Note** Make sure that your account balance is sufficient. Otherwise, your order becomes invalid and is canceled. If your account balance is insufficient, you can set `AutoPay` to `false` to generate an unpaid order. Then, you can log on to the ECS console to pay for the order.
    
-   false: An order is generated but no payment is made.
    
    \*\*
    
    **Note** When `InstanceChargeType` is set to `PostPaid`, `AutoPay` cannot be set to `false`.
    

Default value: true.

true

PrivateDnsNameOptions

object

No

The private domain name options of the instance.

For information about the resolution of ECS private domain names, see [ECS private DNS resolution](/help/en/ecs/user-guide/ecs-private-domain-resolution).

EnableInstanceIdDnsARecord

boolean

No

Specifies whether DNS Resolution from the Instance ID-based Hostname to the Instance Primary Private IPv4 Address (A Record) is enabled. Valid values:

-   true
-   false

Default value: false.

false

EnableInstanceIdDnsAAAARecord

boolean

No

Specifies whether DNS Resolution from the Instance ID-based Hostname to the Instance Primary Private IPv6 Address (AAAA Record) is enabled. Valid values:

-   true
-   false

Default value: false.

true

EnableIpDnsARecord

boolean

No

Specifies whether DNS Resolution from the IP Address-based Hostname to the Instance Primary Private IPv4 Address (A Record) is enabled. Valid values:

-   true
-   false

Default value: false.

true

EnableIpDnsPtrRecord

boolean

No

Specifies whether Reverse DNS Resolution from the Instance Primary Private IPv4 Address to the IP Address-based Hostname (PTR Record) is enabled. Valid values:

-   true
-   false

Default value: false.

false

HostnameType

string

No

The type of hostname. Valid values:

-   Custom: custom hostname
-   IpBased: IP address-based hostname
-   InstanceIdBased: instance ID-based hostname

Default value: Custom.

Custom

## Response parameters

Parameter

Type

Description

Example

object

The information about the created instances.

RequestId

string

The ID of the request.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

OrderId

string

The ID of the order. This parameter is returned only when `InstanceChargeType` is set to PrePaid.

123456\*\*\*\*

TradePrice

float

The transaction price.

0.165

InstanceIdSets

array

The instance IDs.

InstanceIdSet

string

\["i-bp67acfmxazb4pd2\*\*\*\*", "i-bp1i43l28m7u48p1\*\*\*\*", "i-bp12yqg7jdyxl11f\*\*\*\*"\]

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****",
  "OrderId": "123456****",
  "TradePrice": 0.165,
  "InstanceIdSets": {
    "InstanceIdSet": [
      [
        "i-bp67acfmxazb4pd2****",
        "i-bp1i43l28m7u48p1****",
        "i-bp12yqg7jdyxl11f****"
      ]
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

LoginAsNonRoot.ImageNotSupport

The specified image does not support login as non-root.

The image does not support the logons of non-root users.

400

InvalidParam.NotSupportJumboFrame

Not support jumbo frame.

\-

400

InsufficientBalance.AgentCredit

Insufficient agent credit. Please contact your agent.

Your credit balance is insufficient. Contact your agent for an adjustment.

400

QuotaExceed.DiskCapacity

The used capacity of disk type has exceeded the quota in the zone, %s.

The capacity of disks that belong to the specified disk category exceeds the quota limit for the zone.

400

InvalidPeriod.ExceededDedicatedHost

Instance expired date can not exceed dedicated host expired date.

The expiration date of the instance is later than that of the dedicated host.

400

InvalidParam.SecondaryNetworkInterface

When min amount greater than 1 and the PrivateIpAddress or Primary NetworkInterface is specified,the Secondary NetworkInterface IP parameter cannot be specified.

\-

400

InvalidPrimaryIpAddress.SizeInvalid

The NetworkInterface PrimaryIpAddress is used to create only one instance.

\-

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

InvalidInstanceType.ValueNotSupported

The specified InstanceType beyond the permitted range.

\-

400

InvalidDescription.Malformed

The specified parameter "Description" is not valid.

The source description can be 2 to 256 characters in length. It cannot start with http:// and https://.

400

InvalidInternetChargeType.ValueNotSupported

The specified InternetChargeType is not valid.

The specified InternetChargeType parameter is invalid.

400

InvalidParameter

The specified parameter "InternetMaxBandwidthOut" is not valid.

\-

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

The specified parameter "SyatemDisk.DiskName or DataDisk.n.DiskName" is not valid.

The disk name specified in the parameter DiskName invalid.

400

InvalidDiskDescription.Malformed

The specified parameter "SyatemDisk.DiskDescription" or "DataDisk.n.Description" is not valid.

\-

400

InvalidDataDiskSize.ValueNotSupported

The specified DataDisk.n.Size beyond the permitted range, or the capacity of snapshot exceeds the size limit of the specified disk category.

The specified DataDisk.N.Size parameter is invalid or the snapshot size exceeds the maximum capacity allowed for the specified disk category.

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

Living afterpay instances quota exceeded.

The maximum number of pay-as-you-go instances has been reached.

400

InvalidInstanceName.Malformed

The specified parameter "InstanceName" is not valid.

The specified InstanceName parameter is invalid.

400

InvalidInstanceName.CustomMalformed

Customized section of instance or host name is invalid, please use valid format: \[\], \[,\], \[m,\], \[,n\], \[m,n\].

\-

400

InvalidDiskDescription.Malformed

The specified parameter "SyatemDisk.DiskDescription or DataDisk.n.Description" is not valid.

\-

400

InvalidParameter.Conflict

The speicified region and cluster do not match.

The specified region and cluster do not correspond to each other.

400

InvalidParameter.Mismatch

Specified security group and virtual switch are not in the same VPC.

The specified security group and vSwitch do not belong to the same VPC.

400

InvalidNetworkType.Mismatch

Specified parameter "InternetMaxBandwidthIn" or "InternetMaxBandwidthOut" conflict with instance network type.

\-

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

Specified private IP address is malformed.

The specified private IP address is invalid.

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

InvalidSystemDiskCategory.ValueNotSupported

The specified parameter " SystemDisk.Category " is not valid.

\-

400

InstanceDiskCategoryLimitExceed

The specified DataDisk.n.Size beyond the permitted range, or the capacity of snapshot exceeds the size limit of the specified disk category.

The specified DataDisk.N.Size parameter is invalid or the snapshot size exceeds the maximum capacity allowed for the specified disk category.

400

InvalidInstanceType.ValueNotSupported

InternetMaxBandwidthOut should be set.

The InternetMaxBandwidthOut parameter is required.

400

InvalidClientToken.ValueNotSupported

The ClientToken provided is invalid.

The specified ClientToken parameter is invalid.

400

InvalidIoOptimize.ValueNotSupported

The specified IoOptimize is not valid.

The specified IoOptimized parameter is invalid.

400

InvalidSecurityGroupId.NotFound

The SecurityGroupId provided does not exist in our records.

The specified security group does not exist in this account. Check whether the security group ID is correct.

400

InvalidHostName.Malformed

The specified parameter HostName is not valid.

The specified HostName parameter is invalid.

400

InvalidInternetMaxBandwidthOut.Malformed

The specified parameter internetMaxBandwidthOut is not valid.

The specified InternetMaxBandwidthOut parameter is invalid.

400

InvalidInternetMaxBandwidthIn.Malformed

The specified parameter internetMaxBandwidthIn is not valid.

The specified InternetMaxBandwidthIn parameter is invalid.

400

InvalidSnapshotId.NotFound

The specified parameter SnapshotId is not exist.

The specified snapshot does not exist. Check whether the snapshot ID is valid.

400

InvalidTagKey.Malformed

The specified Tag.n.Key is not valid.

The specified Tag.N.Key parameter is invalid.

400

InvalidTagValue.Malformed

The specified Tag.n.Value is not valid.

The specified tag value is invalid.

400

InvalidTag.Mismatch

The specified Tag.n.Key and Tag.n.Value are not match.

The specified Tag.N.Key and Tag.N.Value parameters do not correspond to each other.

400

InvalidTagCount

The specified tags are beyond the permitted range.

The number of specified tags exceeds the upper limit.

400

InvalidMinAmount.Malformed

The specified parameter MinAmount is not valid.

The specified MinAmount parameter is invalid.

400

InvalidMaxAmount.Malformed

The specified parameter MaxAmount is not valid.

The specified MaxAmount parameter is invalid.

400

InvalidAutoReleaseTime.Malformed

The specified parameter AutoReleaseTime is not valid.

The specified automatic release time is invalid. Specify the time in UTC in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.

400

InvalidPrivateIpAddress.Malformed

The specified parameter PrivateIpAddress is not valid.

The specified PrivateIpAddress parameter is invalid.

400

InvalidInnerIpAddress.Malformed

The specified parameter InnerIpAddress is not valid.

The specified InnerIpAddress parameter is invalid.

400

OperationDenied.NoVlan

The specified parameter "VlanId" is not valid or vlan has not enough IP address.

\-

400

OperationDenied.QuotaExceed

The quota of tags on resource is beyond permitted range.

The maximum number of tags on resource is exceeded.

400

Account.Arrearage

Your account has been in arrears.

Your account does not have enough balance. Please add funds to your account.

400

InvalidUserData.SizeExceeded

The specified parameter "UserData" exceeds the size.

\-

400

InvalidUserData.NotSupported

TThe specified parameter "UserData" only support the vpc and IoOptimized Instance.

\-

400

InvalidUserData.NotSupported

The specified parameter "UserData" only support the vpc and IoOptimized Instance.

\-

400

InvalidUserData.Base64FormatInvalid

The specified UserData is not valid.

The specified user data is invalid.

400

InstanceDiskNumber.LimitExceed

The total number of specified disk in an instance exceeds.

The number of disks on an instance exceeds the upper limit.

400

InvalidDiskCategory.ValueNotSupported

The specified parameter "DiskCategory" is not valid.

The specified cloud disk type DiskCategory is invalid.

400

InvalidSpotStrategy

The specified SpotStrategy is not valid.

The specified SpotStrategy parameter is invalid.

400

InvalidSpotParam.EmptyZoneID

The specified zoneid is empty when SpotStrategy is set.

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

InvalidInstanceType.ElasticNetworkInterfaceNotSupported

The specified instance type does not support Elastic Network Interface, you can not attach Elastic Network Interface to generation I instances.

The specified instance type does not support ENIs.

400

InvalidParameter.EncryptedIllegal

%s

The specified parameter is invalid. Check whether your encryption operation is supported. %s is a variable. An error message is dynamically returned based on call conditions.

400

InvalidParameter.EncryptedNotSupported

%s

The specified parameter is invalid and your encryption operation is not supported. %s is a variable. An error message is dynamically returned based on call conditions.

400

InvalidSpotPriceLimit.LowerThanPublicPrice

The specified parameter "spotPriceLimit" can't be lower than current public price.

\-

400

InvalidRelationResource.NotFound

The relation resource has been deleted.

The associated resource has been deleted.

400

IncorrectRecycleBinStatus

The operation is not permitted due to resource status.

The resource is in a state that does not support the current operation.

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

InvalidParameter.VSwitchId

%s

\-

400

InvalidSecurityGroup.NotInDefaultVpc

%s

The security group is not in the default VPC. Check whether the specified SecurityGroupId parameter is correct.

400

VpcNotFound

Vpc is not found according to the specified VSwitch or the vpc does not belong to you.

No VPC is found based on the specified vSwitch or the corresponding VPC does not belong to you.

400

InvalidSystemDiskSize.ImageNotSupportResize

The specified image does not support resize.

The specified image does not support resizing.

400

InvalidSpotInterruptionBehavior

%s

The specified SpotInterruptionBehavior parameter is not supported.

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

NoAvaliableDedicatedHost

No available dedicated host or not enough resource on dedicated host.

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

MissingParameter

The input parameter ImageId that is mandatory for processing this request is not supplied.

The ImageId parameter is required.

400

MissingParameter

The input parameter InstanceType that is mandatory for processing this request is not supplied.

The InstanceType parameter is required.

400

InvalidParam.NetworkInterface

%s

The specified parameter is invalid. Check whether the parameter corresponds to the operation.

400

InvalidParams.CreateEniParams

%s

\-

400

InvalidParameter.CreditSpecification

The specified CreditSpecification is not supported in this region.

The running mode of the specified burst performance instance is not supported in this zone.

400

IncorrectVpcStatus

Current VPC status does not support this operation.

The VPC is in a state that does not support the current operation.

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

The specified operation is not allowed in the zone to which your VPC belongs, please try in other zones.

The specified operation cannot be performed in the region to which the VPC belongs. Try another region.

400

IncorrectDefaultVpcStatus

The status of the default VPC is invalid.

The state of the default VPC is invalid.

400

InvalidAutoRenewPeriod.ValueNotSupported

The specified autoRenewPeriod is invalid.

The specified auto-renewal duration is invalid.

400

InvalidMarketImageChargeType.NotSupport

The specified chargeType of marketImage is unsupported.

The billing method of the Alibaba Cloud Marketplace image is not supported.

400

OperationDenied

The specified instanceType or zone is not available or not authorized.

The specified instance type or zone is unavailable or you are not authorized to use the specified instance type or access the specified zone.

400

InvalidPeriodType.ValueNotSupported

The specified parameter PeriodType is invalid.

The specified PeriodType parameter is invalid.

400

OperationDenied

The current user does not support this operation.

Your account does not support this operation.

400

IncorrectImageStatus

The specified image is an Alibaba Cloud Marketplace image. The sale of this image has ended. For more information, contact the image service provider.

The specified image is an Alibaba Cloud Marketplace image that is no longer sold. For more information about the image, contact the image provider.

400

InvalidInstanceType.ValueNotSupported

The specified InstanceType does not exist or beyond the permitted range.

The specified instance type does not exist or you are not authorized to manage instances of this instance type.

400

NoAvaliableDedicatedHost

No dedicated host is available.

\-

400

InvalidParam.Tenancy

The specified Tenancy is invalid.

The specified Tenancy parameter is invalid.

400

InvalidParameter.Affinity

The specified Affinity is invalid.

\-

400

NoAvaliableDedicatedHost

A dedicated host with sufficient available resources cannot be found.

\-

400

InvalidCustomInstanceType.NotSupported

The specified custom instance type is invalid.

\-

400

IncorrectVpcStatus

The current status of vpc does not support this operation.

The VPC is in a state that does not support the current operation.

400

InvalidParameter.EncryptedIllegal

The specified parameter Encrypted must be true when kmsKeyId is not empty.

The encryption feature is not enabled after a Key Management Service (KMS) key ID is specified.

400

IoOptimized.NotSupported

The specified instance must be IoOptimized instance when kmsKeyId is not empty.

The specified instance must be an I/O optimized one when the KMSKeyId parameter is specified.

400

InvalidSnapshotId.Malformed

The specified SnapshotId is not valid.

\-

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

InvalidSecurityGroup.NetworkType

%s

\-

400

InvalidSecurityGroup.VpcMismatch

%s

\-

400

InvalidParameter.SecurityGroupIdRepeated

%s

The security group ID passed in is duplicate.

400

InvalidSecurityGroupId.SingleIdAndMultiIdConflict

%s

\-

400

InvalidSecurityGroupId.MultiGroupIdNetworkTypeConflict

%s

\-

400

JoinedGroupLimitExceed

%s

The maximum number of security groups to which the specified resource can be added has been reached. For more information, see the return value of the %s placeholder in the error message.

400

IncorrectVSwitchStatus

The current status of vSwitch does not support this operation.

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

InvalidOperation.EniCountExceeded

The maximum number of eni in a enterprise security group is exceeded.

\-

400

QuotaExceeded.PrepayDataDiskCapacity

The quota of prepay data disk capacity exceeds.

\-

400

InvalidDiskCategory.ConflictSnapshotCategory

The specified disk category conflict with snapshot category.

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

InvalidParameter.Arns

The specified Arns is not valid.

The Arns parameter is invalid. Please check and pass it again.

400

InvalidDedicatedHostClusterId.NotFound

The specified DedicatedHostClusterId does not exist.

\-

400

InvalidDedicatedHostClusterId.InValid

The specified Dedicated Host Cluster is invalid.

\-

400

InvalidDeploymentSetId.NotFound

The parameter DeploymentSetId is invalid.

\-

400

InvalidOperation.UserNotSupported

Reseller user do not support purchase at the moment.

\-

400

InvalidManagedPrivateSpaceId.NotFound

%s

\-

400

InvalidSchedulerOptions

The specified parameter SchedulerOptions is not valid.

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

InvalidBandwidthOut.LessThanZero

The bandwidth must be larger than 0 when specifying isp.

\-

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

ProvisionedIopsForDiskCategoryUnsupported

The specified disk category does not support provisioned iops.

\-

400

InvalidProvisionedIops.LimitExceed

The provisioned iops exceeds the limit.

The filled ProvisionedIops parameter exceeds the limit.

400

BurstingEnabledForDiskCategoryUnsupported

The specified disk category does not support bursting enabled.

\-

400

BurstingEnabledForMultiAttachDiskUnsupported

The multi attach disk does not support bursting enabled.

\-

400

ProvisionedIopsForDiskCategoryRequired

The provisioned iops is required for this disk category.

\-

400

NotSupportSnapshotEncrypted.InstanceType

The specified instance type does not support creating encrypted disks with native snapshot encrypt.

\-

400

NotSupportSnapshotEncrypted.RegionId

The specified region does not support creating encrypted disks with native snapshot encrypt.

\-

400

NotSupportSnapshotEncrypted.ZoneId

The specified zone does not support creating encrypted disks with native snapshot encrypt.

\-

400

NotSupportSnapshotEncrypted.ShareImage

Shared snapshot creating encrypted disks with native snapshot encrypt is not supported.

When you create encrypted disks based on a shared image, only the encryption key provided by the shared image can be used for these disks and you cannot specify encryption keys for the disks.

400

NotSupportSnapshotEncrypted.ImageOwnerAlias

The specified image category does not support creating encrypted disks with native snapshot encrypt.

\-

400

NotSupportSnapshotEncrypted.DiskCategory

The specified disk category does not support creating encrypted disks with native snapshot encrypt.

\-

400

NotSupport.SnapshotEncryptedAlgorithmConflict

Changing encrypt algorithm with encrypted snapshot is not supported.

\-

400

NoPermission.SystemTag

The operator is not permission for the system tag.

You are not authorized to manage the system tag.

400

NumberExceed.Tags

The Tags parameter's number is exceed , Valid : 20.

The number of labels specified exceeds the limit.

400

InvalidZoneId.NotSupportShareEncryptedImage

Creating instances by shared encrypted images is not supported in this zone.

\-

400

InvalidDiskCategory.NotSupported

The specified disk category is not supported.

The specified disk category does not support this operation.

400

InvalidParameter.CloudboxNotSupported

%s

\-

400

InvalidZoneId.NotSupportCreateWithShareEncryptedImage

You cannot use shared encrypted images to create instances in this zone.

\-

400

InvalidParameter.NetworkCardIndexInvalid

Invalid network card index, please check your instance type.

\-

400

InvalidOperation.UserNotSupportNetworkCard

User not support network card.

\-

400

InvalidInstanceType.NotSupported

The specified instanceType does not support confidential computing mode: %s.

\-

400

InvalidAccount.NotSupportSpot

According to business rules, this account cannot purchase ECS Spot instances.

\-

400

AccountForbidden.AssociatedWithResellerPartner

Your account is associated with your reseller partner. Your account or your reseller partner's account has been forbidden to create orders, please contact your reseller partner.

\-

400

InvalidDestinationZone.DeploymentSetMismatch

Error happened, %s.

\-

400

NoPermission.Price

The operation requires price permission. Please either apply for permission from your main account, or set the parameter AutoPay as true.

This operation requires price permission. Please apply for permission to your master account, or set the parameter AutoPay to true for automatic payment.

400

InvalidAutoPay.PostPaidUnsupported

The specified parameter AutoPay must be set as true for postpaid instance.

\-

400

InvalidParam.EncryptedMismatch

Creating encrypted disks with shared encrypted snapshots requires replacing encryption keys.

\-

400

InvalidParameter.DedicatedRegionNotSupported

The specified action is rejected because the specified ECS instance in the dedicated region does not support public IP.

Parameter error codes not supported in the dedicated region

400

InvalidParameter.CpuOptionsTopologyType

The specified parameter CpuOptions.TopologyType: %s is not valid.

Illegal enumeration value for current CPU topology type

400

InvalidInstanceType.NotSupportCpuOptionsTopologyType

The specified instance type does not support CpuOptions.TopologyType: %s.

The current specification does not support the specified CPU topology type

400

InvalidEniQueueSize.RegionOrUserNotSupported

The specified parameter RxQueueSize or TxQueueSize is not supported in this region, or this account is not in the whitelist of using eni QueueSize.

You are not authorized to specify the length of NIC queues or cannot specify the length of NIC queues in the current region.

400

InvalidParameter.EniQueueSize

The specified parameter TxQueueSize and RxQueueSize are not equal or exceed limit.

The specified parameter TxQueueSize and RxQueueSize are not equal or exceed limit.

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

InvalidPrivateIpAddress.Duplicated

The specified private IP address is already in use.

The specified IP address is already in use.

400

InvalidAdditionalInfoPvdConfig.SizeExceeded

The specified parameter AdditionalInfo.PvdConfig exceeds the size.

\-

400

InvalidPrivateIpAddress.Duplicated

The specified private IP address "%s" is duplicated.

The specified IP address is already in use.

400

InvalidParameter.Encrypted

Creating non-encrypted disks with encrypted snapshots is not supported.

Creating a non-encrypted disk with an encrypted snapshot is not supported.

400

InvalidInstanceType.NotSupportHighDensityMode

The specified instance type does not support the use of the high density mode.

The current instance type does not support the cloud disk high-density mode.

400

QuotaExceeded.InternetBandwidth

%s.

Under your current account, the public network bandwidth of the Pay-As-You-Go ECS instance charged by fixed bandwidth exceeds the total bandwidth quota limit.

400

InvalidParameter.CpuOptionsAccelerators

The specified parameter CpuOptionsAccelerators is not valid.

The current accelerator type selection is illegal

400

InvalidInstanceType.NotSupportCpuOptionsAccelerators

The specified instance type does not support attach accelerator.

The current instance type does not support mounting accelerators.

400

OperationDenied.TestAccountRetricted

Test-account for testing has been prohibited from creating instance in this region. Please contact 400181.

Test accounts are not allowed to create instances in the local region. Please contact Cost and Resource Center @ Gao Chong (400181)

400

InvalidBurstingEnabled.DiskSizeTooSmall

The disk size must be greater than 3 GiB to enable burst.

The disk size must be greater than 3 GiB to enable burst.

400

InvalidImage.WindowsUnsupported

The specified InstanceType does not support the specified Windows image.

The specified InstanceType does not support Windows image.

400

InvalidParameter.CpuOptionsTurboMode

The specified parameter TurboMode is not valid.

The specified parameter frequency mode is invalid

400

InvalidInstanceType.EnableNVSUnsupported

The specified instance type does not support EnableNVS.

\-

400

InvalidInstanceType.EnableVISSTUnsupported

The specified instance type does not support EnableVISST.

\-

400

InvalidInstanceType.EnableVRDTUnsupported

The specified instance type does not support EnableVRDT.

\-

400

InvalidInstanceType.SingleCoreMaxModeUnsupported

The specified instance type does not support TurboMode: "SINGLE CORE MAX".

The specified instance type does not support single-core maximum turbo mode

400

InvalidParameter.PtpStatus

The specified parameter PtpStatus: %s is not valid.

The specified parameter PtpStatus: %s is not valid.

400

InvalidInstanceType.NotSupportEnablePtp

The specified instance type does not support enable PTP.

The specified instance type does not support enable PTP.

401

InvalidRamRole.NotEcsRole

The specified ram role is not authorized for ecs, please check your role policy.

The specified RAM role is not authorized to use ECS. Check your role policies.

403

OperationDenied.CashCouponsInsufficientOrExpired

Cash coupon balance is insufficient or has expired, please retry.

\-

403

InvalidParameter.PrivateIpAddressRepeated

%s

\-

403

InvalidOperation.HighPerformanceEniPerInstanceLimitExceeded

%s

\-

403

InvalidParameter.EniNumExceededWithLaunchEcs

%s

\-

403

InvalidOperation.InstanceTypeNotSupportHighPerformanceTrafficMode

%s

The instance type of the specified instance does not support the NIC of the RDMA communication mode.

403

InvalidParameter.QueuePairNumberMustEmpty

%s

\-

403

InvalidParameter.EniTrafficMode

%s

\-

403

InvalidParameter.InvalidQueuePairNumber

The parameter of QueuePairNumber is invalid.

\-

403

InvalidParam.IpCount

The parameter of ip count is invalid.

\-

403

InvalidParameter.EniType

%s

\-

403

InvalidOperation.HighPerformanceTrafficModeIsNotAllowed

%s

\-

403

InvalidParameter.NetworkInterface

%s

\-

403

InvalidParameter.Combination

%s

The specified parameter combination is invalid.

403

InvalidHostname.SingleAndMultiConflict

%s

\-

403

InvalidHostname.SizeInvalid

%s

\-

403

InvalidParams.InstanceNameExceed

The uniqueSuffix takes three naming places, please shorten your InstanceName.

The instance name must be shortened to make space for the incremental suffix specified by UniqueSuffix. The incremental suffix is three characters in length.

403

InvalidParams.HostnameExceed

The uniqueSuffix takes three naming places, please shorten your Hostname.

The instance hostname must be shortened to make space for the incremental suffix specified by UniqueSuffix. The incremental suffix is three characters in length.

403

ImageNotSubscribed

The specified image has not be subscribed.

You have not subscribed to the specified image in Alibaba Cloud Marketplace.

403

InvalidSystemDiskCategory.ValueUnauthorized

The disk category is not authorized.

You are not authorized to use the specified disk category.

403

InvalidSnapshotId.NotReady

The specified snapshot has not completed yet.

The specified snapshot is being created.

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

CategoryNotSupported

The specified zone does not offer the specified disk category.

The specified disk category is unavailable in the specified zone.

403

QuotaExceed.PortableCloudDisk

The quota of portable cloud disk exceeds.

The maximum number of removable disks has been reached.

403

SecurityGroupInstanceLimitExceed

Exceeding the allowed amount of instances of a security group.

The maximum number of instances that can be added to the security group has been reached.

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

Forbbiden

User not authorized to operate on the specified resource.

You are not authorized to operate the specified resource.

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

InvalidDiskSize.TooSmall

Specified disk size is less than the size of snapshot.

The specified disk size is smaller than the snapshot size.

403

InvalidDiskCategory.Mismatch

The specified disk categories combination is not supported.

The combination of specified disk categories is not supported.

403

IoOptimized.NotSupported

Vpc is not support IoOptimized instance.

The VPC does not support I/O optimized instances.

403

InvalidDiskCategory.NotSupported

The specified disk category is not support the specified instance type.

The specified disk category does not support the instance type.

403

QuotaExceed.BuyImage

The specified image is from the image market?You have not bought it or your quota has been exceeded.

\-

403

InvalidResourceId.NotSupported

The specified ResourceId does not support tagging.

The specified resource does not support tagging.

403

OperationDenied

The specified RegionId does not support the creation of the network type ECS instance.

Instances of the specified network type cannot be created in the specified region. Check whether instance resources of this network type are available in the region.

403

OperationDenied.ImageNotValid

The specified Image is disabled or is deleted.

The specified image does not exist.

403

OperationDenied.SnapshotNotValid

The specified snapshot is not allowed to create disk.

The specified snapshot cannot be used to create disks.

403

OperationDenied.SnapshotNotAllowed

The specified snapshot is not allowed to create disk.

The specified snapshot cannot be used to create disks.

403

OperationDenied.ZoneNotAllowed

The creation of Instance to the specified Zone is not allowed.

Instances cannot be created in the specified zone.

403

OperationDenied.ZoneSystemCategoryNotMatch

The specified Zone or cluster does not offer the specified disk category or the speicified zone and cluster do not match.

The specified disk category is unavailable in the specified zone or cluster, or the specified zone and cluster do not correspond to each other.

403

OperationDenied.ResourceControl

The specified region is in resource control, please try later.

The specified region is under resource control. Try again later.

403

OperationDenied.NoStock

The resource is out of usage.

The instance is not in the Running state. Start the instance or check whether the specified operation is valid.

403

OperationDenied.SnapshotParamsNotValid

The capacity of snapshot exceeds the size limit of the specified disk category or the specified category is not authorizied.

The maximum capacity of snapshots is exceeded or the user is not authorized to the specified category.

403

OperationDenied.DiskTypeNotSupport

The type of the disk does not support the operation.

\-

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

The resource in the specified zone is no longer available for sale. Please try other regions and zones.

\-

403

InvalidClusterId.NotFound

The specified clusterId does not exist.

The specified ClusterId parameter does not exist.

403

InvalidResourceType.NotSupported

%s

The specified resource combination does not exist. Change to another zone or specification.

403

OperationDenied.NoStock

The resource is out of stock in the specified zone. Please try other types, or choose other regions and zones.

The requested resources are unavailable in the specified zone. Try a different resource type or select a different region or zone.

403

InvalidInstanceType.ZoneNotSupported

The specified zone does not support this instancetype.

The specified instance type is not supported in the specified zone.

403

InstanceType.Offline

%s

The operation is not supported while the instance type is retired or while resources of the instance type are insufficient.

403

DependencyViolation.WindowsInstance

The instance creating is window, cannot use ssh key pair to login.

The specified instance is a Windows instance and does not support logons using SSH key pairs.

403

InvalidNetworkType.MismatchRamRole

A RAM role can?t be used for classic instance.

\-

403

InvalidUser.PassRoleForbidden

The RAM user does not have the privilege to pass a RAM role.

The RAM user is not authorized to pass a RAM role.

403

InvalidParam.TrustedSystemMode

The specified TrustedSystemMode is invalid.

\-

403

InvalidParam.ConfidentialComputingMode

The specified ConfidentialComputingMode is invalid.

\-

403

InvalidInstanceType.NotSupported

The specified instance type does not support trusted system.

\-

403

InvalidSecurityOptions.NotSupported

SecurityOptions for vTPM and Enclave can not both be set.

\-

403

InvalidImage.NotSupported

The specified vTPM instance need UEFI image.

\-

403

InvalidInstanceType.NotSupported

The specified instance type does not support Enclave.

\-

403

InvalidImage.NotSupported

The specified image does not support vSGX instance.

\-

403

InvalidImage.NotSupported

The specified image does not support Enclave instance.

\-

403

Forbidden.RiskControl

This operation is forbidden by Aliyun RiskControl system.

The operation is forbidden by the risk control system.

403

InvalidInstance.UnPaidOrder

The specified Instance has unpaid order.

The specified instance has a purchase order not paid for.

403

RealNameAuthenticationError

Your account has not passed the real-name authentication yet.

You have not completed real-name verification. Complete real-name verification and try again.

403

InvalidInstanceType.NotSupported

The specified InstanceType is not Supported.

The specified InstanceType parameter is invalid.

403

InvalidPayMethod

The specified pay method is not valid.

The specified payment method is invalid.

403

InvalidAccountStatus.NotEnoughBalance

Your account does not have enough balance.

Your account balance is insufficient. Add funds to your account and try again.

403

ImageNotSupportInstanceType

The specified image does not support the specified InstanceType.

The specified image does not support the specified instance type.

403

DryRun.InvalidAmount

%s

\-

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

InvalidParameter.NotMatch

%s

A specified parameter is invalid. Check whether parameter conflicts exist.

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

OperationDenied.NoStock

The requested resource is sold out in the specified zone; try other types of resources or other regions and zones.

The requested resources are insufficient.

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

InvalidDisk.SystemDiskSize

The specified SystemDiskSize beyond the permitted range.

The specified system disk size exceeds the maximum allowed value.

403

InsufficientBalance

Your account does not have enough balance.

Your account balance is insufficient. Add funds to your account and try again.

403

InvalidOperation.NetworkInterface

%s

\-

403

MaxEniIpv6IpsCountExceeded

%s

The maximum number of IPv6 addresses that can be assigned to the ENI has been reached.

403

InvalidIp.IpRepeated

%s

The specified IP address already exists.

403

InvalidIp.IpAssigned

%s

The specified IP address is already assigned.

403

InvalidIp.Address

%s

The IP entered is not in the correct format or is not in the optional CIDR range.

403

InvalidOperation.EniCountExceeded

%s

\-

403

InvalidOperation.Ipv4CountExceeded

%s

The operation is valid because the maximum number of IPv4 addresses has been reached.

403

InvalidOperation.Ipv6CountExceeded

%s

The operation is valid because the maximum number of IPv6 addresses has been reached.

403

InvalidOperation.Ipv6NotSupport

%s

\-

403

InvalidOperation.Ipv4NotSupport

%s

\-

403

InvalidParam.SecondaryIp

%s

\-

403

InvalidVSwitch.Ipv6NotTurnOn

%s

The IPv6 feature is not enabled for your current vSwitch. Enable the feature and try again.

403

InvalidParam.IpAssign

%s

\-

403

InvalidParam.Amount

%s

The specified Amount parameter is invalid.

403

InvalidParam.CpuOptionsCore

%s

\-

403

InvalidParam.CpuOptionsNuma

%s

\-

403

InvalidVSwitchId.IpInvalid

%s

The specified private IP address is invalid.

403

Forbidden.RegionId

%s

The service is unavailable in the current region.

403

QuotaExceed.DeploymentSetInstanceQuotaFull

The instance quota in one deployment set exceeded.

\-

403

InvalidChargeType.ValueNotSupported

Deletion protection is only valid for postPaid instance, not for prePaid or spot instance.

Release protection can be enabled only for pay-as-you-go instances.

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

QuotaExceeded.PrivateIpAddress

%s

The internal IP address of the specified switch VSwitch is insufficient.

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

EnterpriseGroupLimited.MutliGroupType

The specified instance can't join multi SecurityGroup types.

The specified instance cannot be added to multiple types of security groups.

403

EnterpriseGroupLimited.InstanceType

The specified instance type doesn't support Enterprise SecurityGroup.

\-

403

QuotaExceed.Tags

%s

The number of specified tags exceeds the upper limit. %s is a variable. An error message is dynamically returned based on call conditions.

403

OperationDenied.RegionIdNotSupported

The specified region does not support spot duration instance.

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

OperationDenied.PaygNotAvailable

Pay-as-you-go instance is not available now.

\-

403

OperationDenied.PrepayNotAvailable

Prepay instance is not available now.

\-

403

OperationDenied.BidOwnResource

Bid user can not own resource.

\-

403

OperationDenied.CloudSSDNotSupported

The specified available zone does not offer the cloud\_ssd disk, use cloud\_essd instead.

\-

403

QuotaExceed.ElasticQuota

No additional quota is available for the specified ECS instance type.

The maximum number of instances of the specified instance type in the region has been reached. Reduce the quantity of instances that you want to purchase or try another region or instance type. Alternatively, you can go to the ECS console or Quota Center to request a quota increase.

403

QuotaExceed.ElasticQuota

The number of the specified ECS instances has exceeded the quota of the specified instance type.Please sign-on to Alibaba Cloud Console, and submit a quota increase application.

The number of instances of the specified instance types exceeds the instance quota for the instance type. Log on to the Alibaba Cloud Management Console and submit a quota increase request.

403

QuotaExceed.ElasticQuota

The number of vCPUs assigned to the ECS instances has exceeded the quota in the zone.Please sign-on to Alibaba Cloud Console, and submit a quota increase application.

The number of vCPUs for the instance type exceeds the vCPUs quota. Log on to the Alibaba Cloud Management Console and submit a quota increase request.

403

QuotaExceed.ElasticQuota

The number of the specified ECS instances has exceeded the quota of the specified instance type, or the number of vCPUs assigned to the ECS instances has exceeded the quota in the zone.Please go to submit a quota increase application.

The number of instances of the specified instance type or the number of vCPUs exceeds the quota. Log on to the Alibaba Cloud Management Console and submit a quota increase request.

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

UserNotInTheWhiteList

The user is not in Arns white list.

The user is not in the Arn related parameter action list.

403

InvalidManagedPrivateSpaceId.DedicatedHostIdConflict

ManagedPrivateSpaceId and DedicatedHostId cannot be specified at the same time.

\-

403

InvalidManagedPrivateSpaceId.TenancyConflict

ManagedPrivateSpaceId and Tenancy cannot be specified at the same time.

\-

403

InvalidParameter.InvalidEniQueueNumber

%s

\-

403

InvalidOperation.MaxEniQueueNumberExceeded

%s

\-

403

InvalidOperation.ExceedInstanceTypeQueueNumber

%s

The maximum number of queues for all ENIs on an instance has been exceeded. For more information, see the return value of the %s placeholder in the error message.

403

InvalidIspType.ValueNotSupported

%s

\-

403

UnsupportedIspChargeType

%s

The billing type does not support the service provider (ISP) for this account.

403

UnsupportedIspClassicNetwork

%s

\-

403

InvalidIspBandwidthOut

%s

\-

403

UnsupportedIspNetworkChargeType

%s

\-

403

InvalidIspUID

%s

\-

403

UnsupportedIspRegion

%s

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

InvalidOperation.ConfidentialComputingModeInInviteOnlyTesting

The specified confidential computing mode is in invite only testing: %s.

\-

403

InvalidOperation.InvalidNetworkInterfaceId

%s

\-

403

InvalidOperation.RegionNotSupportNetworkInterfaceId

The specific region does not support network interface id.

\-

403

InvalidEniId.NotFound

%s

The specified ENI ID does not exist.

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

AclLimitExceed

%s

The number of ACL rules for an ENI or instance exceeds the upper limit.

403

OperationDenied.ImageNotValid

The specified image is not available, please check the status of the image.

The specified image is not available, please check the status of the image.

403

InvalidParameter.DataEncryptedKeyCreateFailed

Create kms data encrypted key fail. If you need further assistance, you can contact the KMS Technical Support.

Failed to create a data key using the KMS master key. Please contact the KMS attendant for further troubleshooting.

403

InvalidParameter.CpuOptionsThreadsPerCore

The specified parameter CpuOptions.ThreadsPerCore is not valid.

The specified parameter CpuOptions.ThreadsPerCore is not valid.

403

InvalidParameter.CpuOptionsCore

The specified parameter CpuOptions.Core is not valid.

The specified parameter CpuOptions.Core is not valid.

403

InvalidInstanceType.CpuOptionsThreadsPerCoreUnsupported

The current instance type does not support setting or modifying the CpuOptions.ThreadsPerCore parameter.

The current instance type does not support setting or modifying the CpuOptions.ThreadsPerCore parameter.

403

InvalidParameter.CpuOptionsNuma

The specified parameter CpuOptions.Numa is not valid.

The specified parameter CpuOptions.Numa is not valid.

403

InvalidParameter.KMSKeyId.CMKUnauthorized

The CMK(Customer Master Key) lacks authorization to add tags to the ECS service.

The CMK(Customer Master Key) lacks authorization to add tags to the ECS service.

403

InvalidParameter.KMSKeyId.CMKNotEnabled

The CMK (Customer Master Key) must be in an active state.

The CMK (Customer Master Key) must be in an active state.

403

InvalidEncrypted.NotMatchSnapshot

The specified parameter Encrypted must be set to true when creating disks with encrypted snapshots.

When you create a disk using an encrypted snapshot, the specified parameter Encrypted must be set to true.

403

InvalidEncrypted.NotMatchDiskDefaultEncryption

Enabling disk default encryption prevents the creation of non-encrypted disks.

After the default encryption of the cloud disk account is enabled, an unencrypted disk cannot be created.

403

InvalidOperation.InstanceTypeNotSupportNetworkEncryption

The specified instance type does not support network encryption.

the specified instance type does not support vpc traffic encryption

403

InvalidOperation.UserNotSupportNetworkEncryption

User not support network encryption.

The user does not support specifying network traffic encryption parameters.

404

InvalidStorageClusterId.NotExist

The specified StorageClusterId does not exist in current region.

\-

404

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId provided does not exist

404

InvalidZoneId.NotFound

The ZoneId provided does not exist in our records.

The specified zone ID does not exist.

404

InvalidSecurityGroupId

The specified SecurityGroupId is invalid or does not exist.

The specified security group ID is invalid or does not exist.

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

InvalidVSwitchId.NotFound

%s

The specified vSwitch does not exist.

404

InvalidImageId.NotFound

The specified ImageId does not exist.

The specified image does not exist in this account. Check whether the image ID is correct.

404

IoOptimized.NotSupported

The specified instancetype is not support IoOptimized instance.

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

The specified parameter HostName is not valid.

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

The specified parameter SystemDisk.Size is more than the max size.

The specified SystemDisk.Size value is greater than the upper limit.

404

OperationDenied.CreatingConflict

Another Instance has been creating.

\-

404

InvalidZoneId.NotFound

The specified zoneId does not exist.

The specified zone ID does not exist.

404

InvalidKeyPairName.NotFound

The specified parameter KeyPairName does not exist in our records.

The specified key pair does not exist.

404

InvalidResourceGroup.NotFound

The ResourceGroup provided does not exist in our records.

The specified resource group does not exist.

404

InvalidRamRole.NotFound

The specified parameter "RAMRoleName" does not exist.

\-

404

InvalidLaunchTemplate.NotFound

%s

The specified launch template does not exist. Check whether the parameter value is correct.

404

InvalidLaunchTemplateVersion.NotFound

%s

The specified version of the launch template does not exist. Check whether the parameter values are correct.

404

InvalidVSwitchId.NotExist

%s

The specified vSwitch does not exist.

404

InvalidMarketImage.NotFound

The specified marketplace image does not exist, please change the imageId and try again.

The specified Alibaba Cloud Marketplace image does not exist. Modify the ImageId parameter and try again.

404

DeploymentSet.NotFound

The specified deployment set does not exist.

The specified deployment set does not exist.

404

InvalidParameter.DeploymentSetGroupNo

Parameter DeploymentSetGroupNo is invalid.

\-

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

404

InvalidAutoSnapshotPolicyId.NotFound

Specified parameter AutoSnapshotPolicyId not found.

The specified automatic snapshot policy does not exist.

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

The request processing has failed due to some unknown error, exception or failure.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2026-01-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RunInstances?updateTime=2026-01-08#workbench-doc-change-demo)

2025-11-24

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RunInstances?updateTime=2025-11-24#workbench-doc-change-demo)

2025-10-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RunInstances?updateTime=2025-10-28#workbench-doc-change-demo)

2025-04-11

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RunInstances?updateTime=2025-04-11#workbench-doc-change-demo)

2025-04-02

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RunInstances?updateTime=2025-04-02#workbench-doc-change-demo)

2025-03-19

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RunInstances?updateTime=2025-03-19#workbench-doc-change-demo)

2025-03-18

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RunInstances?updateTime=2025-03-18#workbench-doc-change-demo)

2025-02-19

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RunInstances?updateTime=2025-02-19#workbench-doc-change-demo)

2025-02-10

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RunInstances?updateTime=2025-02-10#workbench-doc-change-demo)

2025-01-17

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RunInstances?updateTime=2025-01-17#workbench-doc-change-demo)

2024-12-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RunInstances?updateTime=2024-12-26#workbench-doc-change-demo)

2024-12-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RunInstances?updateTime=2024-12-25#workbench-doc-change-demo)

2024-12-09

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RunInstances?updateTime=2024-12-09#workbench-doc-change-demo)

2024-11-05

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RunInstances?updateTime=2024-11-05#workbench-doc-change-demo)

2024-10-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RunInstances?updateTime=2024-10-14#workbench-doc-change-demo)

2024-09-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RunInstances?updateTime=2024-09-27#workbench-doc-change-demo)

2024-08-29

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RunInstances?updateTime=2024-08-29#workbench-doc-change-demo)

2024-08-21

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RunInstances?updateTime=2024-08-21#workbench-doc-change-demo)

2024-08-08

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RunInstances?updateTime=2024-08-08#workbench-doc-change-demo)

2024-07-03

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RunInstances?updateTime=2024-07-03#workbench-doc-change-demo)
