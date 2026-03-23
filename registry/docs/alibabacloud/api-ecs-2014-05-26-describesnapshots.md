Queries the details of cloud disk snapshots. The details include the status of the snapshots, the amount of remaining time required to create the snapshots, and the retention period of the automatic snapshots in days.

## Operation description

You can specify multiple request parameters, such as `InstanceId`, `DiskId`, and `SnapshotIds`, to query snapshots. The specified parameters have logical AND relations. Only the specified parameters are included in the filter conditions.

When you use Alibaba Cloud CLI to call an API operation, you must specify request parameter values of different data types in required formats. For more information, see [Parameter formats](/help/en/cli/parameter-format-overview).

Sample requests:

**Query the snapshots of all cloud disks attached to an Elastic Compute Service (ECS) instance in the China (Hangzhou) region**

```
RegionId:  cn-hangzhou,   // Specify the China (Hangzhou) region.InstanceId:  i-bp1fh7by6d9mw7zr****   // Specify the ID of the instance that you want to query.
```

**Query the snapshots of a specific cloud disk in the China (Hangzhou) region**

```
RegionId:  cn-hangzhou,   // Specify the China (Hangzhou) region.DiskId:   d-bp10e7ej8z743dmu****   // Specify the ID of the cloud disk that you want to query.
```

**Query information about two snapshots in the China (Hangzhou) region by snapshot ID**

```
RegionId:  cn-hangzhou,   // Specify the China (Hangzhou) region.SnapshotIds:   ["d-bp10e7ej8z743dmu****", "s-bp19vd1lorzgzt2s****"]   // Specify the IDs of the snapshots that you want to query.
```

**Query snapshots created after a specific point in time in the China (Hangzhou) region**

```
RegionId:  cn-hangzhou,   // Specify the China (Hangzhou) region.Filter.1.Key:   CreationStartTime,   // Specify a point in time to query snapshots that were created after the specified point in time.Filter.1.Value:   2024-11-27T00:00Z
```

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeSnapshots)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeSnapshots)

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

ecs:DescribeSnapshots

get

Snapshot

`acs:ecs:{#regionId}:{#accountId}:snapshot/*`

Snapshot

`acs:ecs:{#regionId}:{#accountId}:snapshot/{#snapshotId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

InstanceId

string

No

The ID of the instance whose cloud disk snapshots you want to query.

i-bp67acfmxazb4p\*\*\*\*

DiskId

string

No

The disk ID.

d-bp67acfmxazb4p\*\*\*\*

SnapshotLinkId

string

No

The snapshot chain ID. You can specify a JSON array that contains up to 100 snapshot chain IDs. Separate the snapshot chain IDs with commas (,).

\["sl-bp1grgphbcc9brb5\*\*\*\*", "sl-bp1c4izumvq0i5bs\*\*\*\*", … "sl-bp1akk7isz866dds\*\*\*\*"\]

RegionId

string

Yes

The region ID of the disk. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

SnapshotIds

string

No

The IDs of snapshots. You can specify a JSON array that consists of up to 100 snapshot IDs. Separate the snapshot IDs with commas (,).

\["s-bp67acfmxazb4p\*\*\*\*", "s-bp67acfmxazb5p\*\*\*\*", … "s-bp67acfmxazb6p\*\*\*\*"\]

PageNumber

integer

No

**Note** This parameter will be removed in the future. We recommend that you use NextToken and MaxResults for a paged query.

1

PageSize

integer

No

**Note** This parameter will be removed in the future. We recommend that you use NextToken and MaxResults for a paged query.

10

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results. You must specify the token that is obtained from the previous query as the value of NextToken.

caeba0bbb2be03f84eb48b699f0a4883

MaxResults

integer

No

The number of entries per page. Maximum value: 100

Default value: 10.

10

SnapshotName

string

No

The name of the snapshot.

testSnapshotName

Status

string

No

The status of the snapshot. Valid values:

-   progressing: The snapshot is being created.
-   accomplished: The snapshot is created.
-   failed: The snapshot fails to be created.
-   all (default): This value indicates all snapshot states.

all

SnapshotType

string

No

The type of the snapshot. Valid values:

-   auto: automatic snapshot
-   user: manual snapshot
-   all (default): all snapshot types

all

Filter.1.Key

string

No

The key of filter 1 that is used to query resources. Set the value to `CreationStartTime`. You can specify a time by configuring both `Filter.1.Key` and `Filter.1.Value` to query resources that were created after the time.

CreationStartTime

Filter.2.Key

string

No

The key of filter 2 that is used to query resources. Set the value to `CreationEndTime`. You can specify a time by configuring both `Filter.2.Key` and `Filter.2.Value` to query resources that were created before the time.

CreationEndTime

Filter.1.Value

string

No

The value of filter 1 that is used to query resources. Set the value to a time. If you configure this parameter, you must also configure `Filter.1.Key`. Specify the time in the `yyyy-MM-ddTHH:mmZ` format. The time must be in UTC.

2019-12-13T17:00Z

Filter.2.Value

string

No

The value of filter 2 that is used to query resources. Set the value to a time. If you configure this parameter, you must also configure `Filter.2.Key`. Specify the time in the `yyyy-MM-ddTHH:mmZ` format. The time must be in UTC.

2019-12-13T22:00Z

Usage

string

No

Specifies whether the snapshot has been used to create custom images or disks. Valid values:

-   image: The snapshot has been used to create custom images.
-   disk: The snapshot has been used to create disks.
-   image\_disk: The snapshot has been used to create both custom images and data disks.
-   none: The snapshot has not been used to create custom images or disks.

none

SourceDiskType

string

No

The source disk type of the snapshot. Valid values:

-   system: system disk.
-   data: data disk.

**Note** The value of this parameter is case-insensitive.

Data

Encrypted

boolean

No

Specifies whether the snapshot is encrypted. Default value: false.

false

ResourceGroupId

string

No

The resource group ID. If you configure this parameter to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.

**Note** Resources in the default resource group are displayed in the response regardless of whether you configure this parameter.

rg-bp67acfmxazb4p\*\*\*\*

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request. Valid values:

-   true: performs only a dry run. The system checks your AccessKey pair, the permissions of the RAM user, and the required parameters. If the request passes the dry run, the DryRunOperation error code is returned. Otherwise, an error message is returned.
-   false (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

false

KMSKeyId

string

No

The ID of the Key Management Service (KMS) key that is used for the data disk.

0e478b7a-4262-4802-b8cb-00d3fb40\*\*\*\*

Category

string

No

The category of the snapshot. Valid values:

-   Standard: standard snapshot.
    
-   Flash: local snapshot. This value will be deprecated. The local snapshot feature is replaced by the instant access feature. When you specify this parameter, take note of the following items:
    
    -   If you have used local snapshots before December 14, 2020, you can use this parameter.
    -   If you have not used local snapshots before December 14, 2020, you cannot use this parameter.
-   archive: archive snapshot.
    

Standard

Tag

array<object>

No

The tags of the snapshot.

object

No

key

string

No

The key of tag N of the snapshot.

**Note** This parameter will be removed in the future. We recommend that you use the Tag.N.key parameter to ensure future compatibility.

SnapshotTest

Key

string

No

The key of tag N of the snapshot. Valid values of N: 1 to 20

If a single tag is specified to query resources, up to 1,000 resources that have this tag added are returned. If multiple tags are specified to query resources, up to 1,000 resources that have all these tags added are returned. To query more than 1,000 resources with the specified tags, call the [ListTagResources](/help/en/ecs/api-listtagresources) operation.

TestKey

Value

string

No

The value of tag N of the snapshot. Valid values of N: 1 to 20.

TestValue

value

string

No

The value of tag N of the snapshot.

**Note** This parameter will be removed in the future. We recommend that you use the Tag.N.Value parameter to ensure future compatibility.

SnapshotTest

## Response parameters

Parameter

Type

Description

Example

object

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results.

caeba0bbb2be03f84eb48b699f0a4883

PageSize

integer

**Note** This parameter will be removed in the future. We recommend that you use NextToken and MaxResults for a paged query.

10

PageNumber

integer

**Note** This parameter will be removed in the future. We recommend that you use NextToken and MaxResults for a paged query.

1

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

TotalCount

integer

The total number of snapshots.

**Note** When using the `MaxResults` and `NextToken` parameters for a paginated query, the returned `TotalCount` parameter value is invalid.

1

Snapshots

array<object>

Details about the snapshots.

Snapshot

object

Status

string

The status of the snapshot. Valid values:

-   progressing: The snapshot is being created.
-   accomplished: The snapshot is created.
-   failed: The snapshot failed to be created.

accomplished

CreationTime

string

The time when the snapshot was created. The time follows the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.

2020-08-20T14:52:28Z

Progress

string

The progress of the snapshot creation task. Unit: percent (%).

100%

InstantAccess

boolean

Indicates whether the instant access feature is enabled. Valid values:

-   true: The instant access feature is enabled. By default, the instant access feature is enabled for Enterprise SSDs (ESSDs) and ESSD Entry disks.
-   false: The instant access feature is disabled. The snapshot is a standard snapshot for which the instant access feature is disabled.

**Note** This parameter is deprecated. By default, new standard snapshots of ESSDs are upgraded to instant access snapshots free of charge without the need for additional configurations. For more information, see [Use the instant access feature](/help/en/ecs/user-guide/enable-or-disable-the-instant-access-feature).

false

Available

boolean

Indicates whether the snapshot can be shared and be used to create or roll back a cloud disk. Valid values:

-   true
-   false

false

RemainTime

integer

The amount of remaining time required to create the snapshot. Unit: seconds.

38

SourceDiskSize

string

The capacity of the source disk. Unit: GiB.

40

RetentionDays

integer

The retention period of the automatic snapshot. Unit: days.

30

SourceDiskType

string

The type of the source disk. Valid values:

-   system
-   data

system

SourceStorageType

string

The category of the source disk.

**Note** This parameter will be removed in the future. We recommend that you use other parameters to ensure future compatibility.

disk

Usage

string

Indicates whether the snapshot was used to create images or cloud disks. Valid values:

-   image: The snapshot was used to create custom images.
-   disk: The snapshot was used to create cloud disks.
-   image\_disk: The snapshot was used to create custom images and data disks.
-   none: The snapshot was not used to create custom images or cloud disks.

image

LastModifiedTime

string

The time when the snapshot was last modified. The time follows the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.

2020-08-25T14:18:09Z

Encrypted

boolean

Indicates whether the snapshot was encrypted. Valid values:

-   true
-   false

false

SnapshotType

string

The type of the snapshot. Valid values:

-   auto or timer: automatic snapshot
-   user: manual snapshot
-   all: all snapshot types

all

SourceDiskId

string

The ID of the source disk. This parameter is retained even after the source disk is released.

d-bp67acfmxazb4ph\*\*\*\*

SnapshotName

string

The name of the snapshot. This parameter is returned only if a snapshot name was specified when the snapshot was created.

testSnapshotName

InstantAccessRetentionDays

integer

Indicates the validity period of the instant access feature. When the validity period ends, the instant access feature is automatically disabled.

By default, the value of this parameter is the same as the value of `RetentionDays`.

**Note** This parameter is deprecated. By default, new standard snapshots of ESSDs are upgraded to instant access snapshots free of charge without the need for additional configurations. For more information, see [Use the instant access feature](/help/en/ecs/user-guide/enable-or-disable-the-instant-access-feature).

30

Description

string

The description of the snapshot.

testDescription

SnapshotId

string

The ID of the snapshot.

s-bp67acfmxazb4p\*\*\*\*

RegionId

string

The region ID of the snapshot.

cn-hangzhou

ResourceGroupId

string

The ID of the resource group to which the snapshot belongs.

rg-bp67acfmxazb4p\*\*\*\*

Category

string

The category of the snapshot. Valid values:

-   Standard: standard snapshot.
-   Flash: local snapshot. This value will be deprecated. The local snapshot feature is replaced by the instant access feature.
-   archive: archive snapshot.

standard

KMSKeyId

string

The ID of the KMS key used for the data disk.

0e478b7a-4262-4802-b8cb-00d3fb40\*\*\*\*

SnapshotSN

string

The serial number of the snapshot.

64472-116742336-61976\*\*\*\*

ProductCode

string

The product code of the Alibaba Cloud Marketplace image.

jxsc000\*\*\*\*

SourceSnapshotId

string

The ID of the source snapshot.

s-bp67acfmxazb4p\*\*\*\*

SourceRegionId

string

The region ID of the source snapshot.

cn-hangzhou

SnapshotLinkId

string

The ID of the snapshot chain that is associated with the snapshot.

sl-bp1grgphbcc9brb5\*\*\*\*

Tags

array<object>

The tags of the snapshot.

Tag

object

TagValue

string

The tag value of the snapshot.

TestValue

TagKey

string

The tag key of the snapshot.

TestKey

## Examples

Sample success responses

`JSON`format

```
{
  "NextToken": "caeba0bbb2be03f84eb48b699f0a4883",
  "PageSize": 10,
  "PageNumber": 1,
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "TotalCount": 1,
  "Snapshots": {
    "Snapshot": [
      {
        "Status": "accomplished",
        "CreationTime": "2020-08-20T14:52:28Z",
        "Progress": "100%",
        "InstantAccess": false,
        "Available": false,
        "RemainTime": 38,
        "SourceDiskSize": 40,
        "RetentionDays": 30,
        "SourceDiskType": "system",
        "SourceStorageType": "disk",
        "Usage": "image",
        "LastModifiedTime": "2020-08-25T14:18:09Z",
        "Encrypted": false,
        "SnapshotType": "all",
        "SourceDiskId": "d-bp67acfmxazb4ph****",
        "SnapshotName": "testSnapshotName",
        "InstantAccessRetentionDays": 30,
        "Description": "testDescription",
        "SnapshotId": "s-bp67acfmxazb4p****",
        "RegionId": "cn-hangzhou",
        "ResourceGroupId": "rg-bp67acfmxazb4p****",
        "Category": "standard",
        "KMSKeyId": "0e478b7a-4262-4802-b8cb-00d3fb40****",
        "SnapshotSN": "64472-116742336-61976****",
        "ProductCode": "jxsc000****",
        "SourceSnapshotId": "s-bp67acfmxazb4p****",
        "SourceRegionId": "cn-hangzhou",
        "SnapshotLinkId": "sl-bp1grgphbcc9brb5****",
        "Tags": {
          "Tag": [
            {
              "TagValue": "TestValue",
              "TagKey": "TestKey"
            }
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

InvalidTag.Mismatch

The specified Tag.n.Key and Tag.n.Value are not match.

The specified Tag.N.Key and Tag.N.Value parameters do not correspond to each other.

400

InvalidTagCount

The specified tags are beyond the permitted range.

The number of specified tags exceeds the upper limit.

403

InvalidSnapshotIds.Malformed

The amount of specified specified snapshot Ids exceeds the limit.

The specified snapshot ID is invalid.

403

InvalidSnapshotCategory.Malformed

The specified Category is not valid.

The specified Category parameter is invalid.

404

InvalidFilterKey.NotFound

The specified FilterKey is not found.

The specified filter key does not exist.

404

InvalidFilterValue

The specified FilterValue exceeds the limit.

The specified filter value is invalid.

404

InvalidUsage

The specifed Usage is not valid.

The specified Usage parameter is invalid.

404

InvalidSourceDiskType

The specifed SourceDiskType is not valid.

\-

404

InvalidStatus.NotFound

The specified Status is not found.

The specified resource state does not exist.

404

InvalidSnapshotType.NotFound

The specfied SnapshotType is not found.

\-

404

InvalidSnapshotLinkId.NotFound

The specified snapshot link is not found.

The specified snapshot chain does not exist.

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

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeSnapshots?updateTime=2024-12-04#workbench-doc-change-demo)

2024-05-22

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeSnapshots?updateTime=2024-05-22#workbench-doc-change-demo)

2024-02-01

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeSnapshots?updateTime=2024-02-01#workbench-doc-change-demo)

2023-09-18

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeSnapshots?updateTime=2023-09-18#workbench-doc-change-demo)
