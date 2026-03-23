Queries block storage devices that you created, including cloud disks, local disks, and elastic ephemeral disks.

## Operation description

-   You can specify multiple request parameters such as `RegionId`, `ZoneId`, `DiskIds`, and `InstanceId` as filters. The specified parameters are evaluated by using the "AND" operator. If you specify more than one filter, the records that match all filters are returned.
-   The value of `DiskIds` is a JSON array. If you do not specify DiskIds, the parameter is not used as a filter. If you set `DiskIds` to an empty JSON array, the parameter is regarded as a valid filter, and an empty result is returned.
-   Token-based paged query: Use `NextToken` to configure the query token. Set the value to the `NextToken` value returned in the previous call to the DescribeDisks operation. Then, use `MaxResults` to specify the maximum number of entries to return on each page.
-   You can attach a disk for which the multi-attach feature is enabled to multiple instances. You can query the attachment information of the disk based on the `Attachment` values in the response.

When you call the API operation by using Alibaba Cloud CLI, you must specify request parameter values of different data types in the required formats. For more information, see [Parameter formats](/help/en/cli/parameter-format-overview).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeDisks)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeDisks)

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

ecs:DescribeDisks

list

Disk

`acs:ecs:{#regionId}:{#accountId}:disk/{#diskId}`

Disk

`acs:ecs:{#regionId}:{#accountId}:disk/*`

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

The region ID of the disk. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

ZoneId

string

No

The zone ID.

cn-hangzhou-g

DiskIds

string

No

The IDs of cloud disks, local disks, or elastic ephemeral disks. The value is a JSON array that consists of up to 100 disk IDs. Separate the disk IDs with commas (,).

\["d-bp67acfmxazb4p\*\*\*\*", "d-bp67acfmxazb4g\*\*\*\*", … "d-bp67acfmxazb4d\*\*\*\*"\]

InstanceId

string

No

The ID of the Elastic Compute Service (ECS) instance to which the disk is attached.

i-bp67acfmxazb4q\*\*\*\*

DiskType

string

No

The type of the disk. Valid values:

-   all: system disk and data disk
-   system: system disk
-   data: data disk

Default value: all.

**Note** Elastic ephemeral disks cannot be used as system disks.

all

Category

string

No

The disk category. Valid values:

-   all: all disk categories
-   cloud: basic disk
-   cloud\_efficiency: ultra disk
-   cloud\_ssd: standard SSD
-   cloud\_essd: Enterprise SSD (ESSD)
-   cloud\_auto: ESSD AutoPL disk
-   cloud\_regional\_disk\_auto: Regional ESSD
-   cloud\_essd\_entry: ESSD Entry disk
-   elastic\_ephemeral\_disk\_standard: standard elastic ephemeral disk
-   elastic\_ephemeral\_disk\_premium: premium elastic ephemeral disk
-   local\_ssd\_pro: I/O-intensive local disk
-   local\_hdd\_pro: throughput-intensive local disk
-   ephemeral: retired local disk
-   ephemeral\_ssd: retired local SSD

Default value: all.

Enumerated values:

-   all: all disks categories
-   cloud\_efficiency: ultra disk
-   cloud\_ssd: standard SSD
-   local\_ssd\_pro: I/O-intensive local disk
-   ephemeral: retired local disk
-   cloud\_essd\_entry: ESSD Entry disk
-   elastic\_ephemeral\_disk\_premium: premium elastic ephemeral disk
-   cloud: basic disk
-   ephemeral\_ssd: retired local SSD
-   cloud\_auto: ESSD AutoPL disk
-   cloud\_regional\_disk\_auto: Regional ESSD
-   cloud\_essd: ESSD
-   elastic\_ephemeral\_disk\_standard: standard elastic ephemeral disk
-   local\_hdd\_pro: throughput-intensive local disk

all

Status

string

No

The status of the disk. For more information, see [Disk states](/help/en/ecs/developer-reference/disk-states). Valid values:

-   In\_use
-   Available
-   Attaching
-   Detaching
-   Creating
-   ReIniting
-   All

Default value: All.

All

SnapshotId

string

No

The ID of the snapshot from which you create the cloud disk.

s-bp67acfmxazb4p\*\*\*\*

Portable

boolean

No

Specifies whether the disk is removable. Valid values:

-   true: The disk is removable. A removable disk can independently exist and can be attached to or detached from an instance within the same zone.
-   false: The disk is not removable. A disk that is not removable cannot independently exist or be attached to or detached from an instance within the same zone.

The `Portable` attribute of the following types of disks is `false`, and these types of disks share the same lifecycle with their associated instances:

-   Local disks
-   Local SSDs
-   Subscription data disks

false

DeleteWithInstance

boolean

No

Specifies whether the disk is released when the associated instance is released. Valid values:

-   true: The disk is released when the associated instance is released.
-   false: The disk is retained as a pay-as-you-go data disk when the associated instance is released.

Default value: false.

false

DeleteAutoSnapshot

boolean

No

Specifies whether to delete the automatic snapshots of the cloud disk after the disk is released.

-   true
-   false

Default value: false

false

PageNumber

integer

No

**Note** This parameter will be removed in the future. We recommend that you use `NextToken` and `MaxResults` for a paged query.

1

PageSize

integer

No

**Note** This parameter will be removed in the future. We recommend that you use `NextToken` and `MaxResults` for a paged query.

10

NextToken

string

No

The query token. Set the value to the `NextToken` value that was returned in the last call to this operation.

For more information about how to check the responses returned by this operation, see the preceding "Description" section.

AAAAAdDWBF2\*\*\*\*

MaxResults

integer

No

The maximum number of entries per page. Valid values: 10 to 500.

Default value:

-   If you do not specify this parameter or you set this parameter to a value less than 10, the default value is 10.
-   If you set this parameter to a value greater than 500, the default value is 500.

50

DiskName

string

No

The name of the disk. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (\_), periods (.), and hyphens (-).

testDiskName

AutoSnapshotPolicyId

string

No

The ID of the automatic snapshot policy that is applied to the cloud disk.

sp-m5e2w2jutw8bv31\*\*\*\*

EnableAutoSnapshot

boolean

No

Specifies whether the automatic snapshot policy feature is enabled for the cloud disk. Valid values:

-   true
-   false

**Note** This parameter is deprecated. By default, the automatic snapshot policy feature is enabled for cloud disks. You need to only apply an automatic snapshot policy to a cloud disk before you can use the automatic snapshot policy.

true

EnableAutomatedSnapshotPolicy

boolean

No

Specifies whether an automatic snapshot policy is applied to the cloud disk.

-   true: An automatic snapshot policy is applied to the cloud disk.
-   false: No automatic snapshot policy is applied to the cloud disk.

Default value: false

false

DiskChargeType

string

No

The billing method of the disk. Valid values:

-   PrePaid: subscription
-   PostPaid: pay-as-you-go

PostPaid

LockReason

string

No

The reason why the disk is locked. Valid values:

-   financial: The disk is locked due to overdue payments.
-   security: The disk is locked due to security reasons.

recycling

Filter.1.Key

string

No

The key of filter 1 used to query resources. Set the value to `CreationStartTime`. You can specify a time by setting both `Filter.1.Key` and `Filter.1.Value` to query resources that were created after the specified time.

CreationStartTime

Filter.2.Key

string

No

The key of filter 2 used to query resources. Set the value to `CreationEndTime`. You can specify a time by setting both `Filter.2.Key` and `Filter.2.Value` to query resources that were created before the specified time.

CreationEndTime

Filter.1.Value

string

No

The value of filter 1 used to query resources. Set the value to a time. If you specify this parameter, you must also specify the `Filter.1.Key` parameter. Specify the time in the `yyyy-MM-ddTHH:mmZ` format. The time must be in UTC.

2017-12-05T22:40Z

Filter.2.Value

string

No

The value of filter 2 used to query resources. Set the value to a time. If you specify this parameter, you must also specify the `Filter.2.Key` parameter. Specify the time in the `yyyy-MM-ddTHH:mmZ` format. The time must be in UTC.

2017-12-06T22:40Z

ResourceGroupId

string

No

The ID of the resource group to which the disk belongs. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.

**Note** Resources in the default resource group are displayed in the response regardless of the value specified for this parameter.

rg-bp67acfmxazb4p\*\*\*\*

EnableShared

boolean

No

Specifies whether the disk is a Shared Block Storage device.

false

Encrypted

boolean

No

Specifies whether to query only encrypted cloud disks.

-   true: queries only encrypted cloud disks.
-   false: does not query encrypted cloud disks.

Default value: false

false

DryRun

boolean

No

Specifies whether to perform only a dry run without performing the actual request. Valid values:

-   true: performs only a dry run. The systems checks whether your AccessKey pair is valid, whether RAM users are granted permissions, and whether the required parameters are specified. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
-   false: performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

Default value: false

false

KMSKeyId

string

No

The ID of the Key Management Service (KMS) key that is used by the cloud disk.

0e478b7a-4262-4802-b8cb-00d3fb40\*\*\*\*

MultiAttach

string

No

Specifies whether to enable the multi-attach feature for the disk. Valid values:

-   Disabled
-   Enabled
-   LegacyShared: Shared Block Storage devices are queried.

Disabled

Tag

array<object>

No

The tags of the disk.

object

No

The information about the tags.

key

string

No

The key of tag N of the disk.

**Note** We recommend that you use Tag.N.Key to ensure future compatibility.

null

Key

string

No

The key of tag N of the disk. Valid values of N: 1 to 20.

If you specify a single tag to query resources, up to 1,000 resources to which the tag is added are returned. If you specify multiple tags to query resources, up to 1,000 resources to which all specified tags are added are returned. To query more than 1,000 resources that have specified tags added, call the [ListTagResources](/help/en/ecs/api-listtagresources) operation.

TestKey

Value

string

No

The value of tag N of the disk. Valid values of N: 1 to 20.

TestValue

value

string

No

The value of tag N of the disk.

**Note** We recommend that you use Tag.N.Value to ensure future compatibility.

null

AdditionalAttributes

array

No

The additional attributes. Set the value to `Placement`, which indicates the data storage locations of the disk.

**Note** This attribute is valid only for Regional Enterprise SSDs (ESSDs).

string

No

The value of attribute N. Set the value to Placement, which indicates the data storage locations of the disk.

IOPS

## Response parameters

Parameter

Type

Description

Example

object

NextToken

string

The returned pagination token which can be used in the next request to retrieve a new page of results.

AAAAAdDWBF2\*\*\*\*

PageSize

integer

**Note** This parameter will be removed in the future. We recommend that you use `NextToken` and `MaxResults` for a paged query.

1

PageNumber

integer

**Note** This parameter will be removed in the future. We recommend that you use `NextToken` and `MaxResults` for a paged query.

1

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

TotalCount

integer

The total number of entries returned.

**Note** When using the `MaxResults` and `NextToken` parameters for a paginated query, the returned `TotalCount` parameter value is invalid.

15

Disks

array<object>

Details about the disks.

Disk

object

Details about the disk.

SerialNumber

string

The serial number of the disk.

bp18um4r4f2fve2\*\*\*\*

CreationTime

string

The time when the disk was created.

2021-06-07T06:08:54Z

Status

string

The status of the disk. Valid values:

-   In\_use
-   Available
-   Attaching
-   Detaching
-   Creating
-   ReIniting

In\_use

Type

string

The type of the disk. Valid values:

-   system: system disk
-   data: data disk

system

PerformanceLevel

string

The performance level of the ESSD. Valid values:

-   PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
-   PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
-   PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
-   PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.

PL0

BdfId

string

This parameter is in invitational preview and is not publicly available.

null

EnableAutoSnapshot

boolean

Indicates whether the automatic snapshot policy feature is enabled for the cloud disk.

**Note** This parameter is deprecated. By default, the automatic snapshot policy feature is enabled for cloud disks. You need to only apply an automatic snapshot policy to a cloud disk before you can use the automatic snapshot policy.

false

StorageSetId

string

The ID of the storage set.

ss-i-bp1j4i2jdf3owlhe\*\*\*\*

StorageSetPartitionNumber

integer

The maximum number of partitions in the storage set.

11

DiskId

string

The ID of the disk.

d-bp18um4r4f2fve24\*\*\*\*

DeleteAutoSnapshot

boolean

Indicates whether the automatic snapshots of the cloud disk are deleted when the cloud disk is released. Valid values:

-   true: The automatic snapshots of the cloud disk are deleted when the disk is released.
-   false: The automatic snapshots of the cloud disk are retained when the disk is released.

Snapshots that were created in the ECS console or by calling the [CreateSnapshot](/help/en/ecs/api-createsnapshot) operation are retained and not affected by this parameter.

false

StorageClusterId

string

The ID of the dedicated block storage cluster to which the cloud disk belongs. If your cloud disk belongs to the public block storage cluster, an empty value is returned.

dbsc-j5e1sf2vaf5he8m2\*\*\*\*

Encrypted

boolean

Indicates whether the cloud disk is encrypted.

false

IOPSRead

integer

The maximum number of read operations per second.

2000

MountInstanceNum

integer

The number of instances to which the Shared Block Storage device is attached.

1

Description

string

The description of the disk.

testDescription

Device

string

The device name of the disk on the instance to which the disk is attached. Example: /dev/xvdb. Take note of the following items:

-   This parameter has a value only when the `Status` value is `In_use` or `Detaching`.
-   This parameter is empty for cloud disks for which the multi-attach feature is enabled. You can query the attachment information of the cloud disk based on the returned list of `Attachment` objects.

**Note** This parameter will be removed in the future. We recommend that you use other parameters to ensure future compatibility.

/dev/xvdb

DiskName

string

The name of the disk.

testDiskName

Portable

boolean

Indicates whether the disk is removable.

false

ImageId

string

The ID of the image that was used to create the instance. This parameter is empty unless the cloud disk was created from an image. The value of this parameter remains unchanged throughout the lifecycle of the cloud disk.

m-bp13aqm171qynt3u\*\*\*

KMSKeyId

string

The ID of the KMS key that is used for the cloud disk.

0e478b7a-4262-4802-b8cb-00d3fb408\*\*\*

DeleteWithInstance

boolean

Indicates whether the disk is released when the instance to which the disk is attached is released. Valid values:

-   true: The disk is released when the associated instance is released.
-   false: The disk is retained when the associated instance is released.

true

DetachedTime

string

The time when the disk was last detached.

2021-06-07T21:01:22Z

SourceSnapshotId

string

The ID of the snapshot that was used to create the cloud disk.

This parameter is empty unless the cloud disk was created from a snapshot. The value of this parameter remains unchanged throughout the lifecycle of the cloud disk.

s-bp67acfmxazb4p\*\*\*\*

AutoSnapshotPolicyId

string

The ID of the automatic snapshot policy that is applied to the cloud disk.

sp-bp67acfmxazb4p\*\*\*\*

EnableAutomatedSnapshotPolicy

boolean

Indicates whether an automatic snapshot policy is applied to the cloud disk.

false

IOPSWrite

integer

The maximum number of write operations per second.

2000

InstanceId

string

The ID of the instance to which the disk is attached. Take note of the following items:

-   This parameter has a value only when the `Status` value is `In_use` or `Detaching`.
-   This parameter is empty for cloud disks for which the multi-attach feature is enabled. You can query the attachment information of the cloud disk based on the returned `Attachment` objects.

i-bp67acfmxazb4q\*\*\*\*

IOPS

integer

The maximum number of read and write operations per second.

4000

RegionId

string

The ID of the region to which the disk belongs.

cn-hangzhou

ExpiredTime

string

The time when the subscription disk expires.

2021-07-07T16:00Z

Size

integer

The size of the disk. Unit: GiB.

60

ResourceGroupId

string

The ID of the resource group to which the disk belongs.

rg-bp67acfmxazb4p\*\*\*\*

DiskChargeType

string

The billing method of the disk. Valid values:

-   PrePaid: subscription
-   PostPaid: pay-as-you-go

PrePaid

ZoneId

string

The ID of the zone to which the disk belongs.

cn-hangzhou-i

AttachedTime

string

The time when the disk was last attached. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mmZ format. The time is displayed in UTC.

2021-06-07T06:08:56Z

Category

string

The category of the disk. Valid values:

-   cloud: basic disk
-   cloud\_efficiency: ultra disk
-   cloud\_ssd: standard SSD
-   cloud\_essd: ESSD
-   cloud\_auto: ESSD AutoPL disk
-   local\_ssd\_pro: I/O-intensive local disk
-   local\_hdd\_pro: throughput-intensive local disk
-   cloud\_essd\_entry: ESSD Entry disk
-   elastic\_ephemeral\_disk\_standard: standard elastic ephemeral disk
-   elastic\_ephemeral\_disk\_premium: premium static ephemeral disk
-   ephemeral: retired local disk
-   ephemeral\_ssd: retired local SSD

cloud\_ssd

ProductCode

string

The product code of the disk in Alibaba Cloud Marketplace.

jxsc000204

MultiAttach

string

Indicates whether the multi-attach feature is enabled for the cloud disk.

Disabled

OperationLocks

array<object>

The reasons why the disk was locked.

OperationLock

object

The reasons why the disk is locked.

LockReason

string

The reason why the disk was locked.

security

MountInstances

array<object>

The attachment information of the Shared Block Storage device.

MountInstance

object

The attachment information of the Shared Block Storage device.

AttachedTime

string

The time when the disk was attached. The time follows the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.

2017-12-05T2340:00Z

InstanceId

string

The ID of the instance to which the disk is attached.

i-bp1j4i2jdf3owlhe\*\*\*\*

Device

string

The mount point of the disk.

/dev/xvda

Tags

array<object>

The tags of the disk.

Tag

object

The tags of the disk.

TagValue

string

The tag value of the disk.

TestValue

TagKey

string

The tag key of the disk.

TestKey

Attachments

array<object>

The attachment information of the disk. The value is an array that consists of the `Attachment` values. This value is not returned when you query Shared Block Storage devices.

Attachment

object

The attachment information of the cloud disk. The value is an array that consists of the `Attachment` values. However, this value is not returned when you query Shared Block Storage devices.

InstanceId

string

The ID of the instance to which the disk is attached.

i-bp67acfmxazb4q\*\*\*\*

Device

string

The device name of the disk.

/dev/xvda

AttachedTime

string

The time when the disk was attached. The time is displayed in UTC.

2021-06-07T06:08:56Z

ProvisionedIops

long

The provisioned read/write IOPS of the ESSD AutoPL disk. Valid values: 0 to min{50,000, 1,000 × \*Capacity - Baseline IOPS}. Baseline IOPS = min{1,800 + 50 × \*Capacity, 50,000}

This parameter is available only if you set `Category` to `cloud_auto`. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

40000

BurstingEnabled

boolean

Indicates whether the performance burst feature is enabled. Valid values:

-   true
-   false

This parameter is available only if you set `Category` to `cloud_auto`. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

false

Throughput

integer

The amount of data that can be transferred per second. Unit: MB/s.

100

ThroughputRead

integer

The amount of data that can be read per second. Unit: MB/s.

100

ThroughputWrite

integer

The amount of data that can be written per second. Unit: MB/s.

100

Placement

object

The locations in which data is stored.

This parameter is returned only if you specify `Placement` in the AdditionalAttributes.N request parameter.

**Note** This parameter is valid only for Regional ESSDs (cloud\_regional\_disk\_auto).

ZoneIds

string

The IDs of the zones in which data is stored.

cn-hangzhou-b cn-hangzhou-j

## Examples

Sample success responses

`JSON`format

```
{
  "NextToken": "AAAAAdDWBF2****",
  "PageSize": 1,
  "PageNumber": 1,
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "TotalCount": 15,
  "Disks": {
    "Disk": [
      {
        "SerialNumber": "bp18um4r4f2fve2****",
        "CreationTime": "2021-06-07T06:08:54Z",
        "Status": "In_use",
        "Type": "system",
        "PerformanceLevel": "PL0",
        "BdfId": null,
        "EnableAutoSnapshot": false,
        "StorageSetId": "ss-i-bp1j4i2jdf3owlhe****",
        "StorageSetPartitionNumber": 11,
        "DiskId": "d-bp18um4r4f2fve24****",
        "DeleteAutoSnapshot": false,
        "StorageClusterId": "dbsc-j5e1sf2vaf5he8m2****",
        "Encrypted": false,
        "IOPSRead": 2000,
        "MountInstanceNum": 1,
        "Description": "testDescription",
        "Device": "/dev/xvdb",
        "DiskName": "testDiskName",
        "Portable": false,
        "ImageId": "m-bp13aqm171qynt3u***",
        "KMSKeyId": "0e478b7a-4262-4802-b8cb-00d3fb408***",
        "DeleteWithInstance": true,
        "DetachedTime": "2021-06-07T21:01:22Z",
        "SourceSnapshotId": "s-bp67acfmxazb4p****",
        "AutoSnapshotPolicyId": "sp-bp67acfmxazb4p****",
        "EnableAutomatedSnapshotPolicy": false,
        "IOPSWrite": 2000,
        "InstanceId": "i-bp67acfmxazb4q****",
        "IOPS": 4000,
        "RegionId": "cn-hangzhou",
        "ExpiredTime": "2021-07-07T16:00Z",
        "Size": 60,
        "ResourceGroupId": "rg-bp67acfmxazb4p****",
        "DiskChargeType": "PrePaid",
        "ZoneId": "cn-hangzhou-i",
        "AttachedTime": "2021-06-07T06:08:56Z",
        "Category": "cloud_ssd",
        "ProductCode": "jxsc000204",
        "MultiAttach": "Disabled",
        "OperationLocks": {
          "OperationLock": [
            {
              "LockReason": "security"
            }
          ]
        },
        "MountInstances": {
          "MountInstance": [
            {
              "AttachedTime": "2017-12-05T2340:00Z",
              "InstanceId": "i-bp1j4i2jdf3owlhe****",
              "Device": "/dev/xvda"
            }
          ]
        },
        "Tags": {
          "Tag": [
            {
              "TagValue": "TestValue",
              "TagKey": "TestKey"
            }
          ]
        },
        "Attachments": {
          "Attachment": [
            {
              "InstanceId": "i-bp67acfmxazb4q****",
              "Device": "/dev/xvda",
              "AttachedTime": "2021-06-07T06:08:56Z"
            }
          ]
        },
        "ProvisionedIops": 40000,
        "BurstingEnabled": false,
        "Throughput": 100,
        "ThroughputRead": 100,
        "ThroughputWrite": 100,
        "Placement": {
          "ZoneIds": "cn-hangzhou-b\ncn-hangzhou-j"
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

InvalidDiskType.ValueNotSupported

The specified disk type is not supported.

The specified disk type is not supported.

400

InvalidCategory.ValueNotSupported

The specified disk category is not supported.

The specified disk category is not supported.

400

InvalidStatus.ValueNotSupported

The specified disk status is not supported.

The disk is in a state that does not support the current operation.

400

InvalidTag.Mismatch

The specified Tag.n.Key and Tag.n.Value are not match.

The specified Tag.N.Key and Tag.N.Value parameters do not correspond to each other.

400

InvalidTagCount

The specified tags are beyond the permitted range.

The number of specified tags exceeds the upper limit.

400

InvalidRegion.NotFound

The specified parameter RegionId is not valid.

The specified RegionId parameter is invalid.

400

InvalidZoneId.NotFound

The zoneId provided does not exist in our records.

The specified zone ID does not exist.

400

MissingParamter.RegionId

The regionId should not be null.

The RegionId parameter is required.

400

InvalidParameter.DiskIds

The specified parameter diskIds is not valid.

The specified DiskIds parameter is invalid.

400

IncompleteParamter

Some fields can not be null in this request.

Some required parameters are not specified.

400

InvalidParamter

Some parameters are invalid in this request.

The request contains invalid parameters.

400

InvalidSnapshot.NotFound

The specified parameter SnapshotId is not valid.

The specified SnapshotId parameter is invalid.

403

InvalidDiskIds.Malformed

The amount of specified disk Ids exceeds the limit.

The specified disk ID is invalid.

403

UserNotInTheWhiteList

The user is not in volume white list.

You are not authorized to manage the Shared Block Storage device. Submit a ticket to apply for the permissions.

403

InvalidParameter.MultiAttachAndEnableSharedNotMatch

The parameter MultiAttach and EnableShared are not match.

The specified MultiAttach and EnableShared parameters do not match.

403

InvalidParameter.MultiAttach

The specified param MultiAttach is not valid.

The specified MultiAttach parameter is invalid.

404

InvalidFilterKey.NotFound

The filter key is not found.

\-

404

InvalidFilterValue

The filter value is not valid.

\-

404

InvalidDiskIds.ValueNotSupported

The specified parameter "DiskIds" is not supported.

\-

404

InvalidDiskChargeType.NotFound

The DiskChargeType does not exist in our records.

The DiskChargeType does not exist in our records.

404

InvalidLockReason.NotFound

The specified LockReason is not found.

The specified lockout reason does not exist.

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-04

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeDisks?updateTime=2024-12-04#workbench-doc-change-demo)

2024-05-08

The API operation is not deprecated.. The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeDisks?updateTime=2024-05-08#workbench-doc-change-demo)

2023-11-24

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeDisks?updateTime=2023-11-24#workbench-doc-change-demo)
