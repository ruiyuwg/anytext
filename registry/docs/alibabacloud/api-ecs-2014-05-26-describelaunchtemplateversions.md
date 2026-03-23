Queries the information of launch template versions, such as the total number of launch templates, launch template names, and launch template version numbers.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeLaunchTemplateVersions)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeLaunchTemplateVersions)

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

ecs:DescribeLaunchTemplateVersions

list

LaunchTemplate

`acs:ecs:{#regionId}:{#accountId}:launchtemplate/*`

LaunchTemplate

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

The region ID of the launch template.

You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

LaunchTemplateVersion

array

No

The versions of the launch template.

long

No

Version N of the launch template.

1

LaunchTemplateId

string

No

The ID of the launch template.

You must set `LaunchTemplateId` or `LaunchTemplateName` to specify a launch template.

lt-bp168lnahrdwl39p\*\*\*\*

LaunchTemplateName

string

No

The name of the launch template.

You must set `LaunchTemplateId` or `LaunchTemplateName` to specify a launch template.

testLaunchTemplateName

MinVersion

long

No

The minimum version number in the version range to query. This parameter is used together with `MaxVersion` to specify a version range to query.

1

MaxVersion

long

No

The maximum version number in the version range to query. This parameter is used together with `MinVersion` to specify a version range to query.

10

DefaultVersion

boolean

No

Specifies whether to query the default version.

true

DetailFlag

boolean

No

Specifies whether to query the configurations of the launch template. Valid values:

-   true: queries the basic information and other details of the launch template. The details include the image ID and system disk size.
-   false: queries only the basic information of the launch template. The basic information includes the template ID, template name, and default version.

Default value: true.

true

PageNumber

integer

No

The number of the page to return.

Pages start from page 1.

Default value: 1.

1

PageSize

integer

No

The number of entries to return on each page.

Default value: 10.

10

## Response parameters

Parameter

Type

Description

Example

object

The response.

PageSize

integer

The number of entries returned per page.

10

RequestId

string

The ID of the request.

3989ED0C-20A1-4351-A127-2067FF8390AX

PageNumber

integer

The page number of the returned page.

1

TotalCount

integer

The total number of launch templates.

1

LaunchTemplateVersionSets

array<object>

Details about the launch template versions.

LaunchTemplateVersionSet

object

Details about the launch template versions.

LaunchTemplateName

string

The name of the launch template.

testLaunchTemplateName

DefaultVersion

boolean

Indicates whether the launch template version is the default version.

true

VersionNumber

long

The number of the launch template version.

1

ModifiedTime

string

The time when the launch template version was modified.

2022-01-17T08:40:00Z

LaunchTemplateId

string

The ID of the launch template.

lt-bp67acfmxazb4p\*\*\*\*

CreateTime

string

The time when the launch template version was created.

2022-01-17T08:22:43Z

CreatedBy

string

The ID of the Alibaba Cloud account that created the launch template.

123456789\*\*\*\*

VersionDescription

string

The description of the launch template version.

testVersionDescription

LaunchTemplateData

object

The configurations of the launch template.

DeploymentSetId

string

The ID of the deployment set.

ds-bp1brhwhoqinyjd6\*\*\*\*

VpcId

string

The ID of the virtual private cloud (VPC).

v-bp67acfmxazb4p\*\*\*\*

SystemDisk.PerformanceLevel

string

The performance level of the Enterprise SSD (ESSD) to use as the system disk. Default value: PL0. Valid values:

-   PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
-   PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
-   PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
-   PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.

For information about ESSD performance levels, see [ESSDs](/help/en/ecs/user-guide/essds) .

PL0

KeyPairName

string

The name of the key pair.

testKeyPairName

SecurityGroupId

string

The ID of the security group to which to assign the instance.

**Note** `SecurityGroupId` and `SecurityGroupIds` are mutually exclusive in the response.

sg-bp67acfmxazb4p\*\*\*\*

NetworkType

string

The network type. Valid values:

-   classic: classic network
-   vpc: VPC

vpc

SpotStrategy

string

The bidding policy for the pay-as-you-go instance. Valid values:

-   NoSpot: The instance is a regular pay-as-you-go instance.
-   SpotWithPriceLimit: The instance is a spot instance with a user-defined maximum hourly price.
-   SpotAsPriceGo: The instance is a spot instance for which the market price at the time of purchase is automatically used as the bid price. The market price can be up to the pay-as-you-go price.

NoSpot

EnableVmOsConfig

boolean

Indicates whether the operating system configuration of the instance is enabled.

false

Description

string

The description of the system disk.

testInstanceDescription

SpotDuration

integer

The protection period of the spot instance. Unit: hours. Valid values:

-   1: After a spot instance is created, Alibaba Cloud ensures that the instance is not automatically released within 1 hour. After the 1-hour protection period ends, the system compares the bid price with the market price and checks the resource inventory to determine whether to retain or release the instance.
-   0: After a spot instance is created, Alibaba Cloud does not ensure that the instance runs for 1 hour. The system compares the bid price with the market price and checks the resource inventory to determine whether to retain or release the instance.

Alibaba Cloud sends an ECS system event to notify you 5 minutes before the instance is released. Spot instances are billed by second. We recommend that you specify a protection period based on your business requirements.

**Note** This parameter is returned when SpotStrategy is set to SpotWithPriceLimit or SpotAsPriceGo.

1

InstanceName

string

The name of the instance.

testInstanceName

SecurityEnhancementStrategy

string

Indicates whether Security Hardening is enabled.

active

UserData

string

The user data of the instance, which is Base64-encoded.

SGVsbG9FQ1M=

SystemDisk.DiskName

string

The name of the system disk.

testSystemDiskName

SystemDisk.Size

integer

The size of the system disk. Unit: GiB.

40

SpotPriceLimit

float

The maximum hourly price of the spot instance.

0.98

PasswordInherit

boolean

Indicates whether the username and password preset in the image are used.

true

PrivateIpAddress

string

The private IP address to assign to the instance.

10.1.\*\*.\*\*

ImageId

string

The ID of the image.

m-bp67acfmxazb4p\*\*\*\*

SystemDisk.DeleteWithInstance

boolean

Indicates whether to release the system disk when the instance is released. Valid values:

-   true
-   false

true

SystemDisk.Category

string

The category of the system disk. Valid values:

-   cloud: basic disk.
-   cloud\_efficiency: ultra disk.
-   cloud\_ssd: standard SSD.
-   cloud\_essd: ESSD. You can use SystemDisk.PerformanceLevel to set the performance level of the ESSD used as the system disk.

For non-I/O optimized instances of retired instance types, the default value is cloud. For other types of instances, the default value is cloud\_efficiency.

cloud\_ssd

AutoReleaseTime

string

The automatic release time of the instance.

2018-05-14T14:18:00Z

SystemDisk.Description

string

The description of the system disk.

testSystemDiskDescription

ImageOwnerAlias

string

The source of the image. Valid values:

-   system: public image provided by Alibaba Cloud
-   self: custom image that you created
-   others: shared image from another Alibaba Cloud account
-   marketplace: Alibaba Cloud Marketplace image

system

HostName

string

The hostname of the instance.

testHostName

SystemDisk.Iops

integer

The number of IOPS on the system disk.

101800

SystemDisk.AutoSnapshotPolicyId

string

The ID of the automatic snapshot policy.

sp-bp1j0alc2z1fhvie\*\*\*\*

InternetMaxBandwidthOut

integer

The maximum outbound public bandwidth.

100

InternetMaxBandwidthIn

integer

The maximum inbound public bandwidth.

5

InstanceType

string

The instance type of the instance.

ecs.g5.large

Period

integer

The subscription duration of the instance.

1

InstanceChargeType

string

The billing method of the instance. Valid values:

-   PrePaid: subscription
-   PostPaid: pay-as-you-go

Postpaid

IoOptimized

string

Indicates whether the instance is I/O optimized.

none

RamRoleName

string

The name of the instance Resource Access Management (RAM) role.

testRamRoleName

VSwitchId

string

The ID of the vSwitch to which to connect the instance.

vsw-bp67acfmxazb4p\*\*\*\*

ResourceGroupId

string

The ID of the resource group to which the launch template belongs.

rg-bp67acfmxazb4p\*\*\*\*

InternetChargeType

string

The billing method for network usage.

PayByTraffic

ZoneId

string

The zone ID of the instance.

cn-hangzhou-g

Ipv6AddressCount

integer

The number of IPv6 addresses to assign to the instance.

1

DataDisks

array<object>

Details about the data disks.

DataDisk

object

Details about the data disk.

PerformanceLevel

string

The performance level of the ESSD to use as a data disk. This parameter is returned only when the value of `Category` is cloud\_essd. Valid values:

-   PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
-   PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
-   PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
-   PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.

PL1

Description

string

The description of the data disk.

testDiskDescription

SnapshotId

string

The ID of the snapshot to use to create the data disk.

s-bp67acfmxazb4p\*\*\*\*

Device

string

The mount point of the data disk. The mount points are named based on the number of data disks:

-   1st to 25th data disks: /dev/xvd`[b-z]`.
-   From the 26th data disk on: /dev/xvd`[aa-zz]`. For example, the 26th data disk is named /dev/xvdaa, the 27th data disk is named /dev/xvdab, and so on.

**Note** This parameter is applicable to scenarios in which a full image is used to create instances. A full image is an image that contains an operating system, application software, and business data. For these scenarios, you can set the parameter to the mount point of data disk N contained in the full image and modify `DataDisk.N.Size` and `DataDisk.N.Category` to change the category and size of data disk N created based on the image.

/dev/xvda

Size

integer

The size of the data disk.

2000

DiskName

string

The name of the data disk.

testDiskName

Category

string

The category of the data disk.

cloud\_ssd

DeleteWithInstance

boolean

Indicates whether to release the data disk when the instance is released.

true

Encrypted

string

Indicates whether the data disk is encrypted.

false

ProvisionedIops

long

The provisioned read/write IOPS of the ESSD AutoPL disk. Valid values: 0 to min{50,000, 1,000 × Capacity - Baseline IOPS}.

Baseline IOPS = min{1,800 + 50 × Capacity, 50,000}.

**Note** This parameter is available only if you set DataDisk.N.Category to cloud\_auto. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks) and [Modify the performance configurations of an ESSD AutoPL disk](/help/en/ecs/user-guide/modify-the-performance-configurations-of-an-essd-autopl-disk).

50000

BurstingEnabled

boolean

Indicates whether the performance burst feature is enabled. Valid values:

-   true
-   false

true

AutoSnapshotPolicyId

string

The ID of the automatic snapshot policy.

sp-wz91dz3ghear2a5s\*\*\*\*

KMSKeyId

string

The ID of the KMS key used for the data disk.

0e478b7a-4262-4802-b8cb-00d3fb40\*\*\*\*

NetworkInterfaces

array<object>

Details about the secondary elastic network interfaces (ENIs).

NetworkInterface

object

Details about the secondary ENI.

NetworkInterfaceName

string

The name of the secondary ENI.

testNetworkInterfaceName

VSwitchId

string

The ID of the vSwitch to which to connect the ENI.

vsw-bp67acfmxazb4p\*\*\*\*

Description

string

The description of the secondary ENI.

testNetworkInterfacesDescription

PrimaryIpAddress

string

The primary private IP address of the secondary ENI.

203.0.\*.\*

SecurityGroupId

string

The ID of the security group to which to assign the secondary ENI. The security group and the ENI must belong to the same VPC.

**Note** SecurityGroupId and SecurityGroupIds are mutually exclusive in the response.

sg-bp67acfmxazb4p\*\*\*\*

SecurityGroupIds

array

The IDs of the security groups to which to assign the secondary ENI.

**Note** SecurityGroupId and SecurityGroupIds are mutually exclusive in the response.

SecurityGroupId

string

The ID of the security group to which to assign the secondary ENI.

**Note** SecurityGroupId and SecurityGroupIds are mutually exclusive in the response.

\["sg-bp15ed6xe1yxeycg7\*\*\*\*"\]

InstanceType

string

The instance type of the instance.

ecs.s2.xlarge

NetworkInterfaceTrafficMode

string

The communication mode of the primary ENI. Valid values:

-   Standard: uses the TCP communication mode.
-   HighPerformance: uses the remote direct memory access (RDMA) communication mode with Elastic RDMA Interface (ERI) enabled.

Standard

DeleteOnRelease

boolean

Indicates whether to retain the ENI when the associated instance is released. Valid values:

-   true
-   false

true

Tags

array<object>

The tags to add to the instance.

InstanceTag

object

The tags to add to the instance.

Key

string

The key of the tag to add to the instance.

TestKey

Value

string

The value of the tag to add to the instance.

TestValue

SecurityGroupIds

array

The IDs of the security groups to which to assign the instance.

**Note** `SecurityGroupId` and `SecurityGroupIds` are mutually exclusive in the response.

SecurityGroupId

string

The ID of the security group to which to assign the instance.

**Note** `SecurityGroupId` and `SecurityGroupIds` are mutually exclusive in the response.

\["sg-bp15ed6xe1yxeycg7\*\*\*\*"\]

SystemDisk.ProvisionedIops

long

The provisioned read/write IOPS of the ESSD AutoPL disk. Valid values: 0 to min{50,000, 1,000 × Capacity - Baseline IOPS}.

Baseline IOPS = min{1,800 + 50 × Capacity, 50,000}.

**Note** This parameter is available only if you set DataDisk.N.Category to cloud\_auto. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks) and [Modify the performance configurations of an ESSD AutoPL disk](/help/en/ecs/user-guide/modify-the-performance-configurations-of-an-essd-autopl-disk).

50000

SystemDisk.BurstingEnabled

boolean

Indicates whether the performance burst feature is enabled. Valid values:

-   true
-   false

true

SystemDisk.Encrypted

string

Indicates whether the system disk is encrypted. Valid values:

-   true
-   false

Default value: false.

**Note** If you create an instance in Hong Kong Zone D or Singapore Zone A, you cannot encrypt the system disk.

false

DeletionProtection

boolean

Indicates whether release protection is enabled for the instance. This parameter indicates whether you can use the ECS console or call the [DeleteInstance](/help/en/ecs/api-deleteinstance) operation to release the instance. Valid values:

-   true
-   false

Default value: false.

**Note** This parameter is applicable only to pay-as-you-go instances. The release protection feature can protect instances against manual releases, but not against automatic releases.

false

CreditSpecification

string

The performance mode of the burstable instance. Valid values:

-   Standard: the standard mode. For more information, see the "Standard mode" section in [Overview of burstable instances](/help/en/ecs/user-guide/burst-performance-instance-overview).
-   Unlimited: the unlimited mode. For more information, see the "Unlimited mode" section in [Overview of burstable instances](/help/en/ecs/user-guide/burst-performance-instance-overview).

Standard

AutoRenew

boolean

Indicates whether auto-renewal is enabled for the instance. This parameter is valid only if `InstanceChargeType` is set to `PrePaid`. Valid values:

-   true
-   false

Default value: false.

true

AutoRenewPeriod

integer

The auto-renewal period of the instance. Valid values:

Valid values when PeriodUnit is set to Month: 1, 2, 3, 6, 12, 24, 36, 48, and 60.

Default value: 1.

1

PeriodUnit

string

The unit of the subscription period. Valid values:

Month (default)

Month

HttpEndpoint

string

Indicates whether the access channel is enabled for instance metadata. Valid values:

-   enabled
-   disabled

Default value: enabled.

**Note** For information about instance metadata, see [Obtain information about an ECS instance, such as instance attributes, by using instance metadata](/help/en/ecs/user-guide/view-instance-metadata/).

enabled

HttpTokens

string

Indicates whether the security hardening mode (IMDSv2) is forcefully used to access instance metadata. Valid values:

-   optional: The security hardening mode (IMDSv2) is not forcefully used.
-   required: The security hardening mode (IMDSv2) is forcefully used. After you set this parameter to required, you cannot access instance metadata in normal mode.

Default value: optional.

**Note** For more information about the modes of accessing instance metadata, see [Obtain information about an ECS instance, such as instance attributes, by using instance metadata](/help/en/ecs/user-guide/view-instance-metadata/).

optional

HttpPutResponseHopLimit

integer

**Note** This parameter is not publicly available.

3

SystemDisk.KMSKeyId

string

The ID of the KMS key to use for the system disk.

0e478b7a-4262-4802-b8cb-00d3fb40\*\*\*\*

ImageOptions

object

Details about the image options.

LoginAsNonRoot

boolean

Specifies whether the instance that uses the image supports logons of the ecs-user user. Valid values:

-   true
-   false

false

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 10,
  "RequestId": "3989ED0C-20A1-4351-A127-2067FF8390AX",
  "PageNumber": 1,
  "TotalCount": 1,
  "LaunchTemplateVersionSets": {
    "LaunchTemplateVersionSet": [
      {
        "LaunchTemplateName": "testLaunchTemplateName",
        "DefaultVersion": true,
        "VersionNumber": 1,
        "ModifiedTime": "2022-01-17T08:40:00Z",
        "LaunchTemplateId": "lt-bp67acfmxazb4p****",
        "CreateTime": "2022-01-17T08:22:43Z",
        "CreatedBy": "123456789****",
        "VersionDescription": "testVersionDescription",
        "LaunchTemplateData": {
          "DeploymentSetId": "ds-bp1brhwhoqinyjd6****",
          "VpcId": "v-bp67acfmxazb4p****",
          "SystemDisk.PerformanceLevel": "PL0",
          "KeyPairName": "testKeyPairName",
          "SecurityGroupId": "sg-bp67acfmxazb4p****",
          "NetworkType": "vpc",
          "SpotStrategy": "NoSpot",
          "EnableVmOsConfig": false,
          "Description": "testInstanceDescription",
          "SpotDuration": 1,
          "InstanceName": "testInstanceName",
          "SecurityEnhancementStrategy": "active",
          "UserData": "SGVsbG9FQ1M=",
          "SystemDisk.DiskName": "testSystemDiskName",
          "SystemDisk.Size": 40,
          "SpotPriceLimit": 0.98,
          "PasswordInherit": true,
          "PrivateIpAddress": "10.1.**.**",
          "ImageId": "m-bp67acfmxazb4p****",
          "SystemDisk.DeleteWithInstance": true,
          "SystemDisk.Category": "cloud_ssd",
          "AutoReleaseTime": "2018-05-14T14:18:00Z",
          "SystemDisk.Description": "testSystemDiskDescription",
          "ImageOwnerAlias": "system",
          "HostName": "testHostName",
          "SystemDisk.Iops": 101800,
          "SystemDisk.AutoSnapshotPolicyId": "sp-bp1j0alc2z1fhvie****",
          "InternetMaxBandwidthOut": 100,
          "InternetMaxBandwidthIn": 5,
          "InstanceType": "ecs.g5.large",
          "Period": 1,
          "InstanceChargeType": "Postpaid",
          "IoOptimized": "none",
          "RamRoleName": "testRamRoleName",
          "VSwitchId": "vsw-bp67acfmxazb4p****",
          "ResourceGroupId": "rg-bp67acfmxazb4p****",
          "InternetChargeType": "PayByTraffic",
          "ZoneId": "cn-hangzhou-g",
          "Ipv6AddressCount": 1,
          "DataDisks": {
            "DataDisk": [
              {
                "PerformanceLevel": "PL1",
                "Description": "testDiskDescription",
                "SnapshotId": "s-bp67acfmxazb4p****",
                "Device": "/dev/xvda",
                "Size": 2000,
                "DiskName": "testDiskName",
                "Category": "cloud_ssd",
                "DeleteWithInstance": true,
                "Encrypted": false,
                "ProvisionedIops": 50000,
                "BurstingEnabled": true,
                "AutoSnapshotPolicyId": "sp-wz91dz3ghear2a5s****",
                "KMSKeyId": "0e478b7a-4262-4802-b8cb-00d3fb40****"
              }
            ]
          },
          "NetworkInterfaces": {
            "NetworkInterface": [
              {
                "NetworkInterfaceName": "testNetworkInterfaceName",
                "VSwitchId": "vsw-bp67acfmxazb4p****",
                "Description": "testNetworkInterfacesDescription",
                "PrimaryIpAddress": "203.0.*.*",
                "SecurityGroupId": "sg-bp67acfmxazb4p****",
                "SecurityGroupIds": {
                  "SecurityGroupId": [
                    [
                      "sg-bp15ed6xe1yxeycg7****"
                    ]
                  ]
                },
                "InstanceType": "ecs.s2.xlarge",
                "NetworkInterfaceTrafficMode": "Standard",
                "DeleteOnRelease": true
              }
            ]
          },
          "Tags": {
            "InstanceTag": [
              {
                "Key": "TestKey",
                "Value": "TestValue"
              }
            ]
          },
          "SecurityGroupIds": {
            "SecurityGroupId": [
              [
                "sg-bp15ed6xe1yxeycg7****"
              ]
            ]
          },
          "SystemDisk.ProvisionedIops": 50000,
          "SystemDisk.BurstingEnabled": true,
          "SystemDisk.Encrypted": false,
          "DeletionProtection": false,
          "CreditSpecification": "Standard",
          "AutoRenew": true,
          "AutoRenewPeriod": 1,
          "PeriodUnit": "Month",
          "HttpEndpoint": "enabled",
          "HttpTokens": "optional",
          "HttpPutResponseHopLimit": 3,
          "SystemDisk.KMSKeyId": "0e478b7a-4262-4802-b8cb-00d3fb40****\n",
          "ImageOptions": {
            "LoginAsNonRoot": false
          }
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

403

InnerServiceFailed

%s

An internal service cannot be called.

404

InvalidLaunchTemplate.NotFound

The specified LaunchTemplate is not found.

The specified launch template does not exist.

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-05-27

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeLaunchTemplateVersions?updateTime=2025-05-27#workbench-doc-change-demo)

2025-02-17

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeLaunchTemplateVersions?updateTime=2025-02-17#workbench-doc-change-demo)

2024-10-12

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeLaunchTemplateVersions?updateTime=2024-10-12#workbench-doc-change-demo)

2024-05-28

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeLaunchTemplateVersions?updateTime=2024-05-28#workbench-doc-change-demo)

2023-10-18

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeLaunchTemplateVersions?updateTime=2023-10-18#workbench-doc-change-demo)

2023-08-01

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeLaunchTemplateVersions?updateTime=2023-08-01#workbench-doc-change-demo)

2023-03-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeLaunchTemplateVersions?updateTime=2023-03-28#workbench-doc-change-demo)

2022-07-11

API Description Update. The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeLaunchTemplateVersions?updateTime=2022-07-11#workbench-doc-change-demo)

2021-12-20

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeLaunchTemplateVersions?updateTime=2021-12-20#workbench-doc-change-demo)
