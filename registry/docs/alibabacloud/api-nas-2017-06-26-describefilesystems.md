Queries file systems.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/NAS/2017-06-26/DescribeFileSystems)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/NAS/2017-06-26/DescribeFileSystems)

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

nas:DescribeFileSystems

get

\*FileSystem

`acs:nas:{#regionId}:{#accountId}:filesystem/{#FileSystemId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

FileSystemId

string

No

The ID of the file system.

-   Sample ID of a General-purpose NAS file system: 31a8e4\*\*\*\*.
-   The IDs of Extreme NAS file systems must start with extreme-, for example, extreme-0015\*\*\*\*.
-   The IDs of CPFS file systems must start with cpfs-. Example: cpfs-125487\*\*\*\*.
-   The IDs of CPFS SE file systems must start with cpfsse-. Example: cpfsse-022c71b134\*\*\*\*.

31a8e4\*\*\*\*

FileSystemType

string

No

The type of the file system.

Valid values:

-   all (default): All types.
-   standard: General-purpose NAS
-   extreme: Extreme NAS
-   cpfs: CPFS (locally redundant storage)
-   cpfsse: CPFS SE (zone-redundant storage)

**Note** Separate multiple data types with commas (,).

standard

VpcId

string

No

The ID of the virtual private cloud (VPC).

If you want to mount the file system on an Elastic Compute Service (ECS) instance, the file system and the ECS instance must reside in the same VPC.

vpc-bp1sevsgtqvk5gxbl\*\*\*\*

PageSize

integer

No

The number of entries per page.

Valid values: 1 to 100.

Default value: 10.

10

PageNumber

integer

No

The page number.

Pages start from page 1. Default value: 1.

1

Tag

array<object>

No

The details about the tags.

object

No

The details about the tags.

Key

string

No

The tag key.

Limits:

-   Valid values of N: 1 to 20.
-   The tag key can be up to 128 characters in length.
-   The tag key cannot start with `aliyun` or `acs:`.
-   The tag key cannot contain `http://` or `https://`.

test

Value

string

No

The tag value.

Limits:

-   Valid values of N: 1 to 20.
-   The tag value can be up to 128 characters in length.
-   The tag value cannot start with `aliyun` or `acs:`.
-   The tag value cannot contain `http://` or `https://`.

test-value

ResourceGroupId

string

No

The resource group ID.

You can log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/resource-groups?) to view resource group IDs.

rg-acfmwavnfdf\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

FileSystems

array<object>

The file system list.

FileSystem

object

Status

string

The status of the file system. Valid values:

-   Pending: The file system is being created or modified.
-   Running: The file system is available. Before you create a mount target for the file system, make sure that the file system is in the Running state.
-   Stopped: The file system is unavailable.
-   Extending: The file system is being scaled up.
-   Stopping: The file system is being stopped.
-   Deleting: The file system is being deleted.

Pending

MeteredIASize

long

The storage usage of the Infrequent Access (IA) storage medium.

Unit: bytes.

362832

Capacity

long

The capacity of the file system.

Unit: GiB.

100

CreateTime

string

The time when the file system was created.

2020-01-05T16:00:00Z

ChargeType

string

The billing method.

Valid values:

-   Subscription
-   PayAsYouGo
-   Package: storage plan

PayAsYouGo

Tags

array<object>

The tags that are attached to the file system.

Tag

object

Key

string

The tag key.

test

Value

string

The tag value.

test-value

StorageType

string

The storage type.

Valid values:

-   General-purpose NAS: Capacity, Performance, Premium
-   Extreme NAS: standard, advance
-   CPFS: advance\_100 (100 MB/s/TiB Baseline), advance\_200 (200 MB/s/TiB Baseline), economic
-   CPFS SE: advance\_100 (100 MB/s/TiB Baseline)

Performance

MeteredSize

long

The storage usage of the file system.

The value of this parameter is the maximum storage usage of the file system over the last hour. Unit: bytes.

1611661312

Description

string

The description of the file system.

test

Bandwidth

long

The bandwidth of the file system.

Unit: MB/s. This parameter is unavailable for General-purpose NAS file systems.

150

SupportedFeatures

array

The features that are supported by the file system.

SupportedFeature

string

The feature that is supported by the file system.

Valid values:

-   Lifecycle: lifecycle management
-   ACL: access control list (ACL)
-   Ipv6: IPv6

**Note** Only Extreme NAS file systems that reside in the Chinese mainland support IPv6.

Lifecycle

Version

string

The version number of the file system.

This parameter is available only for Extreme NAS file systems and CPFS file systems.

2.3.4

ProtocolType

string

The protocol type of the file system.

Valid values:

-   NFS: Network File System.
-   SMB: Server Message Block.
-   cpfs: The protocol type supported by the CPFS file system.

NFS

MountTargets

array<object>

The queried mount targets.

MountTarget

object

VpcId

string

The ID of the VPC.

vpc-bp1sevsgtqvk5gxbl\*\*\*\*

Status

string

The status of the mount target.

Valid values:

-   Active
-   Inactive
-   Pending
-   Deleting
-   Hibernating
-   Hibernated

Active

ClientMasterNodes

array<object>

The information about client management nodes.

This parameter is available only for CPFS file systems.

ClientMasterNode

object

EcsId

string

The ID of the ECS instance on the client management node.

i-hp3i3odi5ory1buo\*\*\*\*

DefaultPasswd

string

The default logon password of the ECS instance on the client management node.

123456

EcsIp

string

The IP address of the ECS instance on the client management node.

192.168.1.0

MountTargetDomain

string

The domain name of the mount target.

109c042666-w\*\*\*\*.cn-hangzhou.nas.aliyuncs.com

AccessGroupName

string

The name of the permission group that is attached to the mount target.

test-001

DualStackMountTargetDomain

string

The dual-stack (IPv4 and IPv6) domain name of the mount target.

**Note** Only Extreme NAS file systems that reside in the Chinese mainland support IPv6.

174494b666-x\*\*\*\*.dualstack.cn-hangzhou.nas.aliyuncs.com

VswId

string

The ID of the vSwitch.

vsw-bp1omfzsszekkvaxn\*\*\*\*

Tags

array<object>

The tags that are attached to the mount target.

Tag

object

Key

string

The tag key.

test

Value

string

The tag value.

test-value

NetworkType

string

The network type. Valid value: vpc.

vpc

KMSKeyId

string

The ID of the key that is managed by Key Management Service (KMS).

0e478b7a-4262-4802-b8cb-00d3fb40\*\*\*\*

AutoSnapshotPolicyId

string

The ID of the automatic snapshot policy.

sp-extreme-233e6\*\*\*\*

RegionId

string

The region ID.

cn-hangzhou

FileSystemType

string

The file system type.

Valid values:

-   standard: General-purpose NAS
-   extreme: Extreme NAS
-   cpfs: CPFS (locally redundant storage)
-   cpfsse: CPFS SE (zone-redundant storage)

standard

FileSystemId

string

The ID of the file system.

109c04\*\*\*\*

EncryptType

integer

Indicates whether the data in the file system is encrypted.

Valid values:

-   0: The data in the file system is not encrypted.
-   1: A NAS-managed key is used to encrypt the data in the file system.
-   2: A KMS-managed key is used to encrypt the data in the file system.

1

Ldap

object

The Lightweight Directory Access Protocol (LDAP) configurations.

This parameter is available only for CPFS file systems.

BindDN

string

An LDAP entry.

cn=alibaba,dc=com

SearchBase

string

An LDAP search base.

dc=example

URI

string

An LDAP URI.

ldap://ldap.example.example

ExpiredTime

string

The time when the file system expires.

2020-01-05T16:00:00Z

ZoneId

string

The ID of the zone where the file system resides.

cn-hangzhou-b

VpcId

string

The ID of the virtual private cloud (VPC).

vpc-bp1cbv1ljve4j5hlw\*\*\*\*

VswIds

array

The information about vSwitch.

VswId

string

The vSwitch ID.

vsw-2ze37k6jh8ums2fw2\*\*\*\*

Packages

array<object>

The information about storage plans.

Package

object

StartTime

string

The start time of the validity period for the storage plan.

2019-12-05T01:40:56Z

ExpiredTime

string

The end time of the validity period for the storage plan.

2020-01-05T16:00:00Z

Size

long

The capacity of the storage plan. Unit: bytes.

107374182400

PackageId

string

The ID of the storage plan.

naspackage-0be9c4b624-37\*\*\*\*

PackageType

string

The type of the storage plan.

Valid values:

-   ssd: The storage plan for Performance NAS file systems.
-   hybrid: The storage plan for Capacity NAS file systems.

hybrid

AccessPointCount

string

Number of access points.

1

ResourceGroupId

string

The resource group ID.

rg-acfmwavnfdf\*\*\*\*

MeteredArchiveSize

long

Archive storage usage.

Unit: Byte.

1611661312

Options

object

The options.

EnableOplock

boolean

Specifies whether to enable the oplock feature. Valid values:

-   true: enables the feature.
-   false: disables the feature.

**Note** Only Server Message Block (SMB) file systems support this feature.

true

QuorumVswId

string

The vSwitch ID.

vsw-2ze37k6jh8ums2fw2\*\*\*\*

VscTarget

string

**Note** This parameter is not publicly available.

cpfs-370y1tv921vpuj4\*\*\*\*-000001.cn-wulanchabu.cpfs.aliyuncs.com

RedundancyType

string

Storage redundancy type. Returned only for CPFS SE.

LRS

RedundancyVSwitchIds

array

A list of IDs for the zone-redundant vSwitches.

RedundancyVSwitchId

string

A list of IDs for the zone-redundant vSwitches. Returned only when RedundancyType is set to ZRS.

vsw-123xxx

RequestId

string

The request ID.

035B3A3A-E514-4B41-B906-5D906CFB\*\*\*\*

TotalCount

integer

The total number of file systems.

1

PageSize

integer

The number of entries per page.

1

PageNumber

integer

The page number.

1

## Examples

Sample success responses

`JSON`format

```
{
  "FileSystems": {
    "FileSystem": [
      {
        "Status": "Pending",
        "MeteredIASize": 362832,
        "Capacity": 100,
        "CreateTime": "2020-01-05T16:00:00Z",
        "ChargeType": "PayAsYouGo",
        "Tags": {
          "Tag": [
            {
              "Key": "test",
              "Value": "test-value"
            }
          ]
        },
        "StorageType": "Performance",
        "MeteredSize": 1611661312,
        "Description": "test",
        "Bandwidth": 150,
        "SupportedFeatures": {
          "SupportedFeature": [
            "Lifecycle"
          ]
        },
        "Version": "2.3.4",
        "ProtocolType": "NFS",
        "MountTargets": {
          "MountTarget": [
            {
              "VpcId": "vpc-bp1sevsgtqvk5gxbl****",
              "Status": "Active",
              "ClientMasterNodes": {
                "ClientMasterNode": [
                  {
                    "EcsId": "i-hp3i3odi5ory1buo****",
                    "DefaultPasswd": 123456,
                    "EcsIp": "192.168.1.0"
                  }
                ]
              },
              "MountTargetDomain": "109c042666-w****.cn-hangzhou.nas.aliyuncs.com",
              "AccessGroupName": "test-001",
              "DualStackMountTargetDomain": "174494b666-x****.dualstack.cn-hangzhou.nas.aliyuncs.com",
              "VswId": "vsw-bp1omfzsszekkvaxn****",
              "Tags": {
                "Tag": [
                  {
                    "Key": "test",
                    "Value": "test-value"
                  }
                ]
              },
              "NetworkType": "vpc"
            }
          ]
        },
        "KMSKeyId": "0e478b7a-4262-4802-b8cb-00d3fb40****",
        "AutoSnapshotPolicyId": "sp-extreme-233e6****\n",
        "RegionId": "cn-hangzhou",
        "FileSystemType": "standard",
        "FileSystemId": "109c04****",
        "EncryptType": 1,
        "Ldap": {
          "BindDN": "cn=alibaba,dc=com",
          "SearchBase": "dc=example",
          "URI": "ldap://ldap.example.example"
        },
        "ExpiredTime": "2020-01-05T16:00:00Z",
        "ZoneId": "cn-hangzhou-b",
        "VpcId": "vpc-bp1cbv1ljve4j5hlw****\n",
        "VswIds": {
          "VswId": [
            "vsw-2ze37k6jh8ums2fw2****\n"
          ]
        },
        "Packages": {
          "Package": [
            {
              "StartTime": "2019-12-05T01:40:56Z",
              "ExpiredTime": "2020-01-05T16:00:00Z",
              "Size": 107374182400,
              "PackageId": "naspackage-0be9c4b624-37****",
              "PackageType": "hybrid"
            }
          ]
        },
        "AccessPointCount": 1,
        "ResourceGroupId": "rg-acfmwavnfdf****\n",
        "MeteredArchiveSize": 1611661312,
        "Options": {
          "EnableOplock": true
        },
        "QuorumVswId": "vsw-2ze37k6jh8ums2fw2****\n",
        "VscTarget": "cpfs-370y1tv921vpuj4****-000001.cn-wulanchabu.cpfs.aliyuncs.com",
        "RedundancyType": "LRS",
        "RedundancyVSwitchIds": {
          "RedundancyVSwitchId": [
            "vsw-123xxx"
          ]
        }
      }
    ]
  },
  "RequestId": "035B3A3A-E514-4B41-B906-5D906CFB****",
  "TotalCount": 1,
  "PageSize": 1,
  "PageNumber": 1
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

Region.NotSupported

The specified Region is not supported for this API now.

The current region does not support this function.

404

InvalidFileSystem.NotFound

The specified file system does not exist.

The specified file system does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/NAS/2017-06-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-12-22

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/NAS/2017-06-26/DescribeFileSystems?updateTime=2025-12-22#workbench-doc-change-demo)

2024-10-17

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/NAS/2017-06-26/DescribeFileSystems?updateTime=2024-10-17#workbench-doc-change-demo)

2024-10-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/NAS/2017-06-26/DescribeFileSystems?updateTime=2024-10-08#workbench-doc-change-demo)

2024-07-08

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/NAS/2017-06-26/DescribeFileSystems?updateTime=2024-07-08#workbench-doc-change-demo)

2024-03-25

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/NAS/2017-06-26/DescribeFileSystems?updateTime=2024-03-25#workbench-doc-change-demo)

2023-12-26

The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/NAS/2017-06-26/DescribeFileSystems?updateTime=2023-12-26#workbench-doc-change-demo)

2023-11-03

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/NAS/2017-06-26/DescribeFileSystems?updateTime=2023-11-03#workbench-doc-change-demo)

2023-10-05

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/NAS/2017-06-26/DescribeFileSystems?updateTime=2023-10-05#workbench-doc-change-demo)

2023-04-29

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/NAS/2017-06-26/DescribeFileSystems?updateTime=2023-04-29#workbench-doc-change-demo)

2022-07-29

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/NAS/2017-06-26/DescribeFileSystems?updateTime=2022-07-29#workbench-doc-change-demo)
