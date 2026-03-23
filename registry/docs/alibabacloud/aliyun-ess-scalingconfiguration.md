ALIYUN::ESS::ScalingConfiguration is used to create a scaling configuration for a scaling group.

## Syntax

```
{
  "Type": "ALIYUN::ESS::ScalingConfiguration",
  "Properties": {
    "PasswordInherit": Boolean,
    "DiskMappings": List,
    "RamRoleName": String,
    "IoOptimized": String,
    "InternetChargeType": String,
    "KeyPairName": String,
    "InstanceId": String,
    "InstanceTypes": List,
    "ImageId": String,
    "ResourceGroupId": String,
    "SpotStrategy": String,
    "InstanceType": String,
    "SystemDiskCategory": String,
    "SystemDiskSize": Integer,
    "SystemDiskAutoSnapshotPolicyId": String,
    "SystemDiskPerformanceLevel": String,
    "InternetMaxBandwidthOut": Integer,
    "InstanceName": String,
    "InternetMaxBandwidthIn": Integer,
    "ScalingConfigurationName": String,
    "UserData": String,
    "DeploymentSetId": String,
    "SecurityGroupId": String,
    "SpotPriceLimit": Number,
    "HpcClusterId": String,
    "ScalingGroupId": String,
    "SpotPriceLimitForInstanceType": Map,
    "TagList": List,
    "Ipv6AddressCount": Integer,
    "LoadBalancerWeight": Integer,
    "CreditSpecification": String,
    "ImageFamily": String,
    "HostName": String,
    "Password": String,
    "SystemDiskBurstingEnabled": Boolean,
    "ImageOptionsLoginAsNonRoot": Boolean,
    "SystemDiskEncrypted": Boolean,
    "SystemDiskEncryptAlgorithm": String,
    "ZoneId": String,
    "Cpu": Integer,
    "SystemDiskProvisionedIops": Integer,
    "SystemDiskKMSKeyId": String,
    "InstancePatternInfos": List,
    "SpotInterruptionBehavior": String,
    "ImageName": String,
    "SystemDiskDescription": String,
    "SystemDiskDiskName": String,
    "InstanceTypeOverrides": List,
    "SystemDiskCategories": List,
    "Memory": Integer,
    "InstanceDescription": String,
    "SecurityGroupIds": List,
    "SpotDuration": Integer,
    "SecurityEnhancementStrategy": String,
    "Affinity": String,
    "Tenancy": String,
    "PrivatePoolOptions": Map,
    "DedicatedHostId": String
  }
}
```

## Properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

ResourceGroupId

String

No

Yes

The ID of the resource group to which the instances belong.

None.

DeploymentSetId

String

No

No

The ID of the deployment set.

None.

HpcClusterId

String

No

No

The ID of the Elastic High Performance Computing (E-HPC) cluster to which the instances belong.

None.

ScalingGroupId

String

Yes

No

The ID of the scaling group to which the scaling configuration belongs.

None.

DiskMappings

List

No

Yes

The disks that you want to attach.

You can attach up to 16 disks.

For more information, see [DiskMappings properties](#section-ej4-e8i-zho).

InternetChargeType

String

No

Yes

The metering method for Internet usage.

Valid values:

-   PayByBandwidth: pay-by-bandwidth
    
-   PayByTraffic (default): pay-by-data-transfer
    

InternetMaxBandwidthIn

Integer

No

No

The maximum inbound public bandwidth.

Unit: Mbit/s.

Valid values: 1 to 200.

If you leave this property empty, the system automatically sets the maximum inbound public bandwidth to 200 Mbit/s. This property is not used for billing because the inbound traffic of instances is free of charge.

InternetMaxBandwidthOut

Integer

No

Yes

The maximum outbound public bandwidth.

-   Valid values when InternetChargeType is set to PayByBandwidth: 0 to 100. Default value: 0.
    
-   Valid values when InternetChargeType is set to PayByTraffic: 0 to 100. You must specify this property when InternetChargeType is set to PayByTraffic.
    

Unit: Mbit/s.

InstanceId

String

No

No

The ID of the instance that the system creates based on the scaling configuration.

None.

SystemDiskCategory

String

No

Yes

The system disk category.

Valid values:

-   cloud: basic disk
    
-   cloud\_efficiency: ultra disk
    
-   cloud\_ssd: standard SSD
    
-   ephemeral\_ssd: local SSD
    
-   cloud\_essd: Enterprise SSD (ESSD)
    

For non-I/O optimized instances of Generation I instance families, the default value is cloud. For instances of other categories, the default value is cloud\_efficiency.

ImageId

String

No

Yes

The image ID of the instances. You can use a public image, a custom image, or an Alibaba Cloud Marketplace image.

For more information, see [Overview](/help/en/ecs/user-guide/public-mirroring-overview/#concept-x4k-22r-wgb).

InstanceType

String

No

Yes

The instance type.

For more information, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb).

SecurityGroupId

String

No

Yes

The security group to which the instances belong.

None.

IoOptimized

String

No

Yes

Specifies whether to create I/O optimized instances.

Valid values:

-   none (default): does not create I/O optimized instances.
    
-   optimized: creates I/O optimized instances.
    

ScalingConfigurationName

String

No

Yes

The name of the scaling configuration.

The name must be 2 to 64 characters in length, and can contain digits, letters, underscores (\_), hyphens (-), and periods (.). It must start with a digit or letter.

The name of the scaling configuration must be unique in a scaling group within a region.

If you leave this property empty, the ID of the scaling configuration is used.

KeyPairName

String

No

Yes

The name of the key pair that you want to use to connect to the instances.

-   For Windows instances, this property is ignored and is empty by default.
    
-   For Linux instances, password-based logons are disabled during initialization when this property is specified.
    

RamRoleName

String

No

Yes

The name of the Resource Access Management (RAM) role for the instances.

You can call the ListRoles operation of RAM to query the role name. For more information, see [CreateRole](/help/en/ram/developer-reference/api-ram-2015-05-01-createrole) and [ListRoles](/help/en/ram/developer-reference/api-ram-2015-05-01-listroles).

SystemDiskSize

Integer

No

Yes

The system disk size.

Valid values: 20 to 500.

Default value: 40.

Unit: GiB.

If you use a custom image to create the system disk, make sure that the size of the system disk is greater than or equal to the size of the custom image.

SystemDiskPerformanceLevel

String

No

Yes

The performance level (PL) of the ESSD that you want to use as the system disk.

Valid values:

-   PL1 (default): An ESSD can deliver up to 50,000 random read/write IOPS.
    
-   PL2: An ESSD can deliver up to 100,000 random read/write IOPS.
    
-   PL3: An ESSD can deliver up to 1,000,000 random read/write IOPS.
    

For more information about how to select the PL of the ESSD, see [ESSDs](/help/en/ecs/user-guide/essds#concept-727754).

UserData

String

No

Yes

The user data that you specify when you create the instances.

The user data can be up to 16 KB in size. You do not need to convert the data into Base64-encoded strings. If the data contains special characters, you must add the escape character (\\) before each special character.

InstanceTypes

List

No

Yes

The instance types.

If you specify InstanceTypes, InstanceType is ignored.

You can specify up to 10 instance types in a scaling configuration. The instance types are sorted in descending order of priority based on the specified sequence. Auto Scaling creates instances based on the priorities of the instance types. If Auto Scaling cannot create instances by using the instance type of the highest priority, Auto Scaling creates instances by using the instance type of the next highest priority.

PasswordInherit

Boolean

No

Yes

Specifies whether to use the preset password of the image.

If you want to use the preset password, make sure that the specified image has a preset password.

TagList

List

No

Yes

The tags of the instances.

You can specify up to five tags in the following key-value format: `{"key1": "value1", "key2": "value2", ... "key5": "value5"}`.

For more information, see [TagList properties](#section-sua-kck-w4z).

Ipv6AddressCount

Integer

No

Yes

The number of IPv6 addresses to generate for the elastic network interface (ENI) at random.

None.

LoadBalancerWeight

Integer

No

Yes

The weight of the Elastic Compute Service (ECS) instance that works as the backend server of a Server Load Balancer (SLB) instance.

Valid values: 1 to 100.

Default value: 50.

CreditSpecification

String

No

Yes

The performance mode of the burstable instances.

Valid values:

-   Unlimited (default)
    
-   Standard
    

For more information about performance modes, see [Performance modes](/help/en/ecs/user-guide/burst-performance-instance-overview#section-svb-w9d-dju).

ImageFamily

String

No

Yes

The family name of the image that you want to use to create the instances.

You can use this property to query the most recent available images that belong to the specified image family. If you specify ImageId, you cannot specify ImageFamily.

SpotStrategy

String

No

Yes

The preemption policy for the pay-as-you-go instance.

Valid values:

-   NoSpot (default): The instance is created as a regular pay-as-you-go instance.
    
-   SpotWithPriceLimit: The instance is created as a preemptible instance that has a user-defined maximum hourly price.
    
-   SpotAsPriceGo: The instance is created as a preemptible instance whose bidding price is based on the market price at the time of purchase.
    

InstanceName

String

No

Yes

The name of the instance that the system creates based on the scaling configuration.

None.

SpotPriceLimit

Number

No

Yes

The maximum hourly price of the instance.

The value of this property can contain up to three decimal places.

This property takes effect when SpotStrategy is set to SpotWithPriceLimit. If you specify SpotPriceLimit and SpotPriceLimitForInstanceType, the value of SpotPriceLimit is overwritten by the value of SpotPriceLimitForInstanceType.

SpotPriceLimitForInstanceType

Map

No

Yes

The instance types and the bidding prices for the preemptible instances.

Specify the value in the `{"<instance_type_1>": <price_limit_1>, ..., {"<instance_type_10>": <price_limit_10>}` format.

This property takes effect when SpotStrategy is set to SpotWithPriceLimit.

You can configure up to 10 sets of instance types and bidding prices.

SystemDiskAutoSnapshotPolicyId

String

No

Yes

The ID of the automatic snapshot policy that you want to use for the system disk.

None.

HostName

String

No

Yes

The hostname of the ECS instance.

The hostname cannot start or end with a period (.) or hyphen (-). It cannot contain consecutive periods (.) or consecutive hyphens (-).

The requirements on the hostname of an ECS instance vary based on the OS of the instance:

-   Windows: The hostname must be 2 to 15 characters in length, and can contain letters, digits, and hyphens (-). It cannot contain periods (.) or contain only digits.
    
-   Other OSs such as Linux: The hostname must be 2 to 64 characters in length, and can contain periods (.). Separate multiple segments in a hostname with periods (.). Each segment can contain letters, digits, and hyphens (-).
    

Password

String

No

Yes

The password of the ECS instance.

The password must be 8 to 30 characters in length. It must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. It can contain the following special characters:

```
()` ~!@#$%^&*-_+=\|{}[]:;'<>,.?/
```

The password of a Windows instance cannot start with a forward slash (/).

**Note**

If you specify Password, we recommend that you send requests by using HTTPS to prevent the exposure of your password.

SystemDiskBurstingEnabled

Boolean

No

No

Specifies whether to enable the performance burst feature for the system disk.

Valid values:

-   true
    
-   false
    

ImageOptionsLoginAsNonRoot

Boolean

No

No

Specifies whether to use the ecs-user user to log on to the ECS instances.

Valid values:

-   true
    
-   false
    

SystemDiskEncrypted

Boolean

No

Yes

Specifies whether to encrypt the system disk.

Valid values:

-   true
    
-   false
    

SystemDiskEncryptAlgorithm

String

No

Yes

The encryption algorithm of the system disk.

Valid values:

-   AES-256
    
-   SM4-128
    

ZoneId

String

No

Yes

The zone ID of the instances.

None.

Cpu

Integer

No

Yes

The number of vCPUs.

You can use the Cpu and Memory properties provided in this table to specify the range of instance types. For example, you can set Cpu to 2 and Memory to 16 to specify the instance types, each of which has 2 vCPUs and 16 GiB of memory. If you specify the Cpu and Memory properties, Auto Scaling determines available instance types based on factors such as I/O optimization and zones. Then, Auto Scaling creates instances of the instance type that is provided at the lowest price.

SystemDiskProvisionedIops

Integer

No

Yes

The provisioned IOPS of the system disk.

None.

SystemDiskKMSKeyId

String

No

Yes

The ID of the Key Management Service (KMS) key that you want to use for the system disk.

None.

InstancePatternInfos

List

No

Yes

Details of the intelligent configuration mode.

For more information, see the "InstancePatternInfos properties" section of this topic.

SpotInterruptionBehavior

String

No

Yes

The interruption mode of the preemptible instances.

None.

ImageName

String

No

Yes

The image name.

None.

SystemDiskDescription

String

No

Yes

The description of the system disk.

None.

SystemDiskDiskName

String

No

Yes

The system disk name.

None.

InstanceTypeOverrides

List

No

Yes

Details of the instance types.

For more information, see the "InstanceTypeOverrides properties" section of this topic.

SystemDiskCategories

List

No

Yes

The system disk categories.

If Auto Scaling cannot create system disks by using the disk category of the highest priority, Auto Scaling creates system disks by using the disk category of the next highest priority. Valid values:

-   cloud: basic disk
    
-   cloud\_efficiency: ultra disk
    
-   cloud\_ssd: standard SSD
    
-   cloud\_essd: ESSD
    

Memory

Integer

No

Yes

The memory size.

Unit: GiB.

You can use the Cpu and Memory properties provided in this table to specify the range of instance types. For example, you can set Cpu to 2 and Memory to 16 to specify the instance types, each of which has 2 vCPUs and 16 GiB of memory. If you specify the Cpu and Memory properties, Auto Scaling determines available instance types based on factors such as I/O optimization and zones. Then, Auto Scaling creates instances of the instance type that is provided at the lowest price.

InstanceDescription

String

No

Yes

The description of the ECS instance.

The description must be 2 to 256 characters in length. It can contain letters and cannot start with `http://` or `https://`.

SecurityGroupIds

List

No

Yes

The security groups to which you want to add the ECS instances.

**Note**

You cannot specify both SecurityGroupId and SecurityGroupIds.

SpotDuration

Integer

No

Yes

The protection period of the preemptible instances.

Unit: hour. Valid values:

-   1: After a preemptible instance is created, Alibaba Cloud ensures that the instance is not automatically released within 1 hour. After the one-hour protection period ends, Alibaba Cloud compares the bidding price with the market price and checks the resource inventory to determine whether to release the instance.
    
-   0: After a preemptible instance is created, Alibaba Cloud does not ensure that the instance is not automatically released within 1 hour. Alibaba Cloud compares the biding price with the market price and checks the resource inventory to determine whether to release the instance.
    

SecurityEnhancementStrategy

String

No

No

Specifies whether to enable security hardening.

Valid values:

-   Active: enables security hardening. This value is valid only for public images.
    
-   Deactive: disables security hardening. This value is valid only for all types of images.
    

Affinity

String

No

Yes

Specifies whether to associate the instance on a dedicated host with the dedicated host.

Valid values:

-   default: does not associate the instance on a dedicated host with the dedicated host. When you start an instance that was stopped in economical mode and the original dedicated host of the instance has insufficient resources, the instance is deployed to another dedicated host in the automatic deployment resource pool.
    
-   host: associates the instance on a dedicated host with the dedicated host. When you start an instance that was stopped in economical mode, the instance remains on the original dedicated host. If the original dedicated host of the instance has insufficient resources, the instance fails to be started.
    

Tenancy

String

No

Yes

Specifies whether to create the instance on a dedicated host.

Valid values:

-   default: does not create the instance on a dedicated host.
    
-   host: creates the instance on a dedicated host. If you leave DedicatedHostId empty, Alibaba Cloud automatically selects a dedicated host for the instance.
    

PrivatePoolOptions

Map

No

Yes

The options of the private pool to use to start the instances.

For more information, see the "PrivatePoolOptions properties" section of this topic.

DedicatedHostId

String

No

Yes

The ID of the dedicated host on which you want to create the ECS instances.

You cannot create preemptible instances on dedicated hosts. If you specify DedicatedHostId, SpotStrategy and SpotPriceLimit are ignored in the request.

You can call the DescribeDedicatedHosts operation to query dedicated host IDs.

## DiskMappings syntax

```
"DiskMappings": [
  {
    "Category": String,
    "DiskName": String,
    "Description": String,
    "AutoSnapshotPolicyId": String,
    "PerformanceLevel": String,
    "Encrypted": String,
    "KMSKeyId": String,
    "Device": String,
    "SnapshotId": String,
    "Size": String,
    "DeleteWithInstance": Boolean,
    "ProvisionedIops": Integer,
    "Categories": List,
    "BurstingEnabled": Boolean
  }
]
```

## DiskMappings properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Size

String

No

No

The data disk size.

-   Valid values when Category is set to cloud: 5 to 2000.
    
-   Valid values when Category is set to cloud\_efficiency: 20 to 32768.
    
-   Valid values when Category is set to cloud\_ssd: 20 to 32768.
    
-   Valid values when Category is set to cloud\_essd: 20 to 32768.
    
-   Valid values when Category is set to ephemeral\_ssd: 5 to 800.
    

Unit: GB.

The value of this property must be greater than or equal to the size of the snapshot. The snapshot is specified by SnapshotId.

Category

String

No

No

The data disk category.

Valid values:

-   cloud: basic disk
    
-   cloud\_efficiency (default): ultra disk
    
-   cloud\_ssd: standard SSD
    
-   ephemeral\_ssd: local SSD
    
-   cloud\_essd: ESSD
    

For I/O optimized instances, the default value is cloud\_efficiency. For non-I/O optimized instances, the default value is cloud.

DiskName

String

No

No

The data disk name.

The name must be 2 to 128 characters in length.

It must start with a letter and cannot start with `http://` or `https://`.

It can contain digits, letters, colons (:), underscores (\_), and hyphens (-).

PerformanceLevel

String

No

No

The PL of the ESSD that you want to use as the data disk.

Valid values:

-   PL1 (default): An ESSD can deliver up to 50,000 random read/write IOPS.
    
-   PL2: An ESSD can deliver up to 100,000 random read/write IOPS.
    
-   PL3: An ESSD can deliver up to 1,000,000 random read/write IOPS.
    

For more information about how to select the PL of the ESSD, see [ESSDs](/help/en/ecs/user-guide/essds#concept-727754).

Description

String

No

No

The description of the data disk.

The description must be 2 to 256 characters in length. It cannot start with `http://` or `https://`.

Device

String

No

No

The mount target of the data disk.

If you leave this property empty, the system assigns a mount target in alphabetical order from `/dev/xvdb` to `/dev/xvdz` by default when the system automatically creates ECS instances.

SnapshotId

String

No

No

The snapshot that you want to use to create the data disk.

If you specify this property, Size is ignored. In this case, the actual size of the created data disk is the size of the specified snapshot. If you specify a snapshot that was created on or before July 15, 2013, the snapshot cannot be requested and the InvalidSnapshot.TooOld error message is returned.

Encrypted

String

No

No

Specifies whether to encrypt the data disk.

Valid values:

-   true
    
-   false (default)
    

KMSKeyId

String

No

No

The ID of the KMS key that you want to use for the data disk.

None.

AutoSnapshotPolicyId

String

No

No

The ID of the automatic snapshot policy that you want to use for the data disk.

None.

DeleteWithInstance

Boolean

No

No

Specifies whether to release the data disk when the instance to which the data disk is attached is released.

Valid values:

-   true
    
-   false
    

ProvisionedIops

Integer

No

No

The provisioned IOPS of the data disk.

**Note**

IOPS measures the number of read and write operations that can be performed per second.

Categories

List

No

No

The data disk categories.

The values are sorted in descending order of priority based on the specified sequence. The first value has the highest priority. If Auto Scaling cannot create data disks by using the disk category of the highest priority, Auto Scaling creates data disks by using the disk category of the next highest priority. Valid values:

-   cloud: basic disk. The DeleteWithInstance property value of a basic disk created along with the ECS instance is true.
    
-   cloud\_efficiency: ultra disk.
    
-   cloud\_ssd: standard SSD.
    
-   cloud\_essd: ESSD.
    

BurstingEnabled

Boolean

No

No

Specifies whether to enable the performance burst feature for the data disk.

Valid values:

-   true
    
-   false
    

## PrivatePoolOptions syntax

```
"PrivatePoolOptions": 
  {
    "MatchCriteria": String,
    "Id": String
  }
```

## PrivatePoolOptions properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

MatchCriteria

String

No

Yes

The type of the private pool to use to start the instance.

A private pool is generated after an elasticity assurance or a capacity reservation takes effect. Valid values:

-   Open: open private pool. The system uses the capacity in a matching open private pool. If no matching open private pool exists, the system uses the capacity in public pools. When you set this property to Open, you do not need to specify PrivatePoolOptions.Id.
    
-   Target: specified private pool. The system uses the capacity in a specified private pool. If no capacity is available in the specified private pool, the instance fails to be started. When you set this property to Target, you must specify PrivatePoolOptions.Id.
    
-   None: no private pool. The system does not use the capacity in private pools.
    

Id

String

No

Yes

The ID of the private pool.

The ID of a private pool is the same as the ID of the elasticity assurance or capacity reservation for which the private pool is generated.

## InstanceTypeOverrides syntax

```
"InstanceTypeOverrides": [
  {
    "InstanceType": String,
    "WeightedCapacity": Integer
  }
]
```

## InstanceTypeOverrides properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

InstanceType

String

No

Yes

The instance type.

If you want to scale instances in the scaling group based on the weight of an instance type, you must specify this property and WeightedCapacity.

WeightedCapacity

Integer

No

Yes

The weight of the instance type.

The performance metrics such as the number of vCPUs and memory size of each instance type are different. You can specify a different weight for each instance type based on your business requirements.

Sample capacity configurations:

-   Current capacity: 0
    
-   Expected capacity: 6
    
-   Capacity of ecs.c5.xlarge: 4
    

To meet the expected capacity, the system adds two ecs.c5.xlarge instances to the scaling group.

## InstancePatternInfos syntax

```
"InstancePatternInfos": [
  {
    "BurstablePerformance": String,
    "Architectures": List,
    "InstanceFamilyLevel": String,
    "Memory": Number,
    "MaxPrice": Number,
    "ExcludedInstanceTypes": List,
    "Cores": Integer
  }
]
```

## InstancePatternInfos properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

BurstablePerformance

String

No

No

Specifies whether to include burstable instance types.

Valid values:

-   Exclude: does not include burstable instance types.
    
-   Include: includes burstable instance types.
    
-   Required: includes only burstable instance types.
    

Default value: Include.

Architectures

List

No

Yes

The architectures of the instance types.

Valid values:

-   X86: x86
    
-   Heterogeneous: heterogeneous computing, such as GPU-accelerated or FPGA-accelerated
    
-   BareMental: ECS Bare Metal Instance
    
-   Arm: Arm
    

By default, all values are included.

InstanceFamilyLevel

String

No

Yes

The level of the instance family.

You can use this property to filter the instance types that meet your requirements. This property takes effect when `CostOptimization` is enabled. Valid values:

-   EntryLevel: entry level (shared instance type). Instance types of this level are the most cost-effective, but may not provide stable computing performance. Instance types of this level are suitable for business scenarios in which CPU utilization is low. For more information, see [Shared instance families](/help/en/ecs/user-guide/shared-instance-families).
    
-   EnterpriseLevel: enterprise level. Instance types of this level provide stable performance and dedicated resources, and are suitable for business scenarios that require high stability. For more information, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families).
    
-   CreditEntryLevel: credit-based entry level (burstable instance types). CPU credits are used to ensure computing performance. Instance types of this level are suitable for business scenarios in which CPU utilization is usually low but suddenly increases. For more information, see [Overview](/help/en/ecs/user-guide/burst-performance-instance-overview).
    

Memory

Number

No

Yes

The memory size of the instance type in intelligent configuration mode.

You can use this property to filter the instance types that meet your requirements. Unit: GiB.

MaxPrice

Number

No

Yes

The maximum hourly price for the pay-as-you-go instance or preemptible instance in the intelligent configuration mode.

None.

ExcludedInstanceTypes

List

No

Yes

The instance types that you want to exclude.

You can use the wildcard character (\*) to exclude an instance type or an instance family. Examples:

-   ecs.c6.large: excludes the ecs.c6.large instance type.
    
-   ecs.c6.\*: excludes the c6 instance family.
    

Cores

Integer

No

Yes

The number of vCPUs for an instance type in the intelligent configuration mode.

You can use this property to filter the instance types that meet your requirements. For more information, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families).

Take note of the following items:

-   InstancePatternInfos applies only to the scaling group that resides in a virtual private cloud (VPC).
    
-   If you specify InstancePatternInfos, you must specify InstancePatternInfos.Cores and InstancePatternInfos.Memory.
    
-   If you specify an instance type by using InstanceType or InstanceTypes, Auto Scaling preferentially uses the specified instance type to scale out instances. If the specified instance type is insufficient, Auto Scaling scale outs instances by using the lowest-priced instance type that matches the configurations of InstancePatternInfos.
    

## TagList syntax

```
"TagList": [
  {
    "Key": String,
    "Value": String
  }
]
```

## TagList properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Key

String

Yes

No

The tag key.

The tag key must be 1 to 64 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.

Value

String

No

No

The tag value.

The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.

## Return values

Fn::GetAtt

-   ScalingConfigurationId: the ID of the scaling configuration. The ID is globally unique and is generated by the system for the scaling configuration.
    
-   ScalingGroupId: the ID of the scaling group to which the scaling configuration belongs.
    

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Description: Test ESS ScalingConfiguration
Parameters:
  AutoScalingGroupId:
    Type: String
    AssociationProperty: ALIYUN::ESS::AutoScalingGroup::AutoScalingGroupId
  SecurityGroupId:
    Type: String
    AssociationProperty: ALIYUN::ECS::SecurityGroup::SecurityGroupId
    Label:
       
      en: Security Group ID
  ImageId:
    Type: String
    AssociationProperty: ALIYUN::ECS::Image::ImageId
    AssociationPropertyMetadata:
      SupportedImageOwnerAlias:
        - system
        - self
        - others
Resources:
  ScalingConfiguration:
    Type: ALIYUN::ESS::ScalingConfiguration
    Properties:
      InstanceType: ecs.c5.large
      ImageId:
        Ref: ImageId
      SystemDiskCategory: cloud_essd
      SystemDiskSize: 40
      ScalingConfigurationName: mytest
      ScalingGroupId:
        Ref: AutoScalingGroupId
      SecurityGroupId:
        Ref: SecurityGroupId
Outputs: {}
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Description": "Test ESS ScalingConfiguration",
  "Parameters": {
    "AutoScalingGroupId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ESS::AutoScalingGroup::AutoScalingGroupId"
    },
    "SecurityGroupId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::SecurityGroup::SecurityGroupId",
      "Label": {
         
        "en": "Security Group ID"
      }
    },
    "ImageId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::Image::ImageId",
      "AssociationPropertyMetadata": {
        "SupportedImageOwnerAlias": ["system", "self", "others"]
      }
    }
  },
  "Resources": {
    "ScalingConfiguration": {
      "Type": "ALIYUN::ESS::ScalingConfiguration",
      "Properties": {
        "InstanceType": "ecs.c5.large",
        "ImageId": {
          "Ref": "ImageId"
        },
        "SystemDiskCategory": "cloud_essd",
        "SystemDiskSize": 40,
        "ScalingConfigurationName": "mytest",
        "ScalingGroupId": {
          "Ref": "AutoScalingGroupId"
        },
        "SecurityGroupId": {
          "Ref": "SecurityGroupId"
        }
      }
    }
  },
  "Outputs": {
  }
}
```

If you define only one scaling configuration that contains dependencies in a scaling group, you must specify DependsOn for the scaling group in the Resources section of a template. This way, the dependencies of the scaling configuration are associated with the scaling group.

In this example, DependsOn in ScalingGroup is set to SecurityGroup because SecurityGroup is the dependency of ScalingConfiguration.

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  VpcId:
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
    Type: String
  VSwitchId:
    AssociationProperty: ALIYUN::ECS::VSwitch::VSwitchId
    Type: String
    AssociationPropertyMetadata:
      VpcId: VpcId
Resources:
  ScalingGroupEnable:
    Type: ALIYUN::ESS::ScalingGroupEnable
    Properties:
      ScalingConfigurationId:
        Ref: ScalingConfiguration
      ScalingGroupId:
        Ref: ScalingGroup
      ScalingRuleArisExecuteVersion: 0
  SecurityGroup:
    Type: ALIYUN::ECS::SecurityGroup
    Properties:
      SecurityGroupName:
        Ref: ALIYUN::StackName
      VpcId:
        Ref: VpcId
      SecurityGroupIngress:
        - PortRange: '-1/-1'
          Priority: 1
          SourceCidrIp: 0.0.X.X/0
          IpProtocol: all
          NicType: internet
      SecurityGroupEgress:
        - PortRange: '-1/-1'
          Priority: 1
          IpProtocol: all
          DestCidrIp: 0.0.X.X/0
          NicType: internet
        - PortRange: '-1/-1'
          Priority: 1
          IpProtocol: all
          DestCidrIp: 0.0.X.X/0
          NicType: intranet
  ScalingConfiguration:
    Type: ALIYUN::ESS::ScalingConfiguration
    DependsOn: ScalingGroup
    Properties:
      InstanceType: ecs.g6e.large
      ImageId: centos_7_04_64_20G_alibase_201701015.vhd
      SystemDiskCategory: cloud_essd
      SystemDiskSize: 100
      ScalingConfigurationName:
        Ref: ALIYUN::StackName
      ScalingGroupId:
        Ref: ScalingGroup
      SecurityGroupId:
        Ref: SecurityGroup
  ScalingGroup:
    Type: ALIYUN::ESS::ScalingGroup
    DependsOn: SecurityGroup
    Properties:
      MaxSize: 3
      MinSize: 0
      DefaultCooldown: 15
      VpcId:
        Ref: VpcId
      VSwitchId:
        Ref: VSwitchId
Outputs: {}
```
