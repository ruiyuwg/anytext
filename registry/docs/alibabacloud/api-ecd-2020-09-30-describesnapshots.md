Queries the snapshots and their details for a cloud desktop.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeSnapshots)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeSnapshots)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RegionId

string

Yes

The ID of the region. Call [DescribeRegions](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeregions) to get a list of regions that support Elastic Desktop Service (EDS).

cn-hangzhou

DesktopId

string

No

The ID of the cloud desktop.

ecd-gx2x1dhsmucyy\*\*\*\*

DesktopName

string

No

The name of the cloud desktop.

testName

SnapshotId

string

No

The snapshot ID.

s-2ze81owrnv9pity4\*\*\*\*

SnapshotName

string

No

The display name of the snapshot. The name must be 2 to 127 characters long. It must start with a letter. It can contain digits, underscores (\_), and hyphens (-). The name cannot start with `auto` to avoid naming conflicts with automatic snapshots.

test数据盘

SourceDiskType

string

No

The disk from which to create the snapshot.

**Note**

The value is case-insensitive.

**Valid values:**

-   Data :
    
    The data disk
    
-   System :
    
    The system disk
    

system

SnapshotType

string

No

The snapshot type.

**Valid values:**

-   all :
    
    All snapshot types. This is the default value.
    
-   auto :
    
    Automatic snapshot
    
-   user :
    
    Manually created snapshot
    

user

OsType

string

No

The operating system type.

**Valid values:**

-   Linux :
    
    The Linux operating system
    
-   Windows :
    
    The Windows operating system
    

Windows

Creator

string

No

The creator.

Administrator

StartTime

string

No

The start time to query for snapshots. The time follows the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard and is in UTC. The format is `yyyy-mm-ddthh:mm:ssz`.

2020-11-30T06:32:31Z

EndTime

string

No

The end time to query for snapshots. The time follows the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard and is in UTC. The format is `yyyy-mm-ddthh:mm:ssz`.

2020-11-31T06:32:31Z

NextToken

string

No

The token for the next page of results. This is the NextToken value from the previous API call.

8051af8d01b5479bec9f5ddf02e4a8fbd0ab6e7e43f8\*\*\*\*

MaxResults

integer

No

The number of entries per page.

-   Maximum value: 100.
    
-   Default value: 10.
    

10

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Returns a collection of information.

NextToken

string

The token that marks the start of the next page of results. If NextToken is empty, no more pages exist.

AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL\*\*\*\*

RequestId

string

The request ID.

51592A88-0F2C-55E6-AD2C-2AD9C10D\*\*\*\*

Snapshots

array<object>

A collection of snapshots.

object

The snapshot.

CreationTime

string

The point in time at which the snapshot was created. The time follows the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the `yyyy-mm-ddthh:mm:ssz` format. The time is displayed in UTC.

2020-12-20T14:52:28Z

Status

string

The status of the snapshot.

**Valid values:**

-   PROGRESSING :
    
    Creating
    
-   FAILED :
    
    Failed to create
    
-   ACCOMPLISHED :
    
    Created
    

ACCOMPLISHED

SnapshotType

string

The type of the snapshot.

**Valid values:**

-   AUTO :
    
    Automatic snapshot
    
-   USER :
    
    Manual snapshot
    

USER

SnapshotName

string

The name of the snapshot.

testSnapshotName

Progress

string

The progress of creating the snapshot. Unit: %.

100%

Description

string

The description of the snapshot.

testDescription

SnapshotId

string

The snapshot ID.

s-2zeipxmnhej803x7\*\*\*\*

RemainTime

integer

The remaining time to complete snapshot creation. Unit: seconds.

**Note**

When `Status` is `PROGRESSING`, the value of `RemainTime` is `-1`. This indicates that the system is calculating the remaining time.

30

SourceDiskSize

string

The capacity of the source disk. Unit: GiB.

150

SourceDiskType

string

The type of the source disk.

**Valid values:**

-   SYSTEM :
    
    System disk
    
-   DATA :
    
    Data disk
    

SYSTEM

DesktopId

string

The ID of the cloud desktop to which the snapshot belongs.

ecd-g03l3tlm8djoj\*\*\*\*

DesktopName

string

The name of the cloud desktop.

test

DesktopStatus

string

The status of the cloud desktop.

**Valid values:**

-   Stopped :
    
    Stopped
    
-   Starting :
    
    Starting
    
-   Rebuilding :
    
    Rebuilding
    
-   Running :
    
    Running
    
-   Stopping :
    
    Stopping
    
-   Expired :
    
    Expired
    
-   Deleted :
    
    Deleted
    
-   Pending :
    
    Pending
    

Running

DiskStatus

string

Status of the disk to which the snapshot belongs.

**Valid values:**

-   Available :
    
    In use
    
-   Deleted :
    
    Deleted
    

Available

Creator

string

The user who creates the snapshot.

Administrator

ProtocolType

string

The protocol type.

**Valid values:**

-   HDX :
    
    HDX protocol
    
-   ASP :
    
    Alibaba Cloud Adaptive Streaming Protocol (ASP)
    

ASP

OsType

string

The operating system type.

**Valid values:**

-   Linux :
    
    Linux operating system
    
-   Windows :
    
    Windows operating system
    

Windows

VolumeEncryptionEnabled

boolean

Indicates whether disk encryption is enabled.

false

VolumeEncryptionKey

string

The ID of the Key Management Service (KMS) key that is used when disk encryption is enabled. You can call the [ListKeys](/help/en/kms/key-management-service/developer-reference/api-listkeys) operation to query the list of KMS keys.

08c33a6f-4e0a-4a1b-a3fa-7ddfa1d4\*\*\*\*

DeletionTime

string

The snapshot creation time follows the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard. It uses UTC+0 time and is formatted as `yyyy-mm-ddThh:mm:ssZ`.

2020-12-20T14:52:28Z

RestorePointId

string

The ID of the restore point.

rp-btgmaa20wkcju\*\*\*\*

RestorePointName

string

The name of the restore point.

数据盘备份

EnvType

string

EnvId

string

## Examples

Success response

`JSON` format

```
{
  "NextToken": "AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****",
  "RequestId": "51592A88-0F2C-55E6-AD2C-2AD9C10D****",
  "Snapshots": [
    {
      "CreationTime": "2020-12-20T14:52:28Z",
      "Status": "ACCOMPLISHED",
      "SnapshotType": "USER",
      "SnapshotName": "testSnapshotName",
      "Progress": "100%",
      "Description": "testDescription",
      "SnapshotId": "s-2zeipxmnhej803x7****",
      "RemainTime": 30,
      "SourceDiskSize": "150",
      "SourceDiskType": "SYSTEM",
      "DesktopId": "ecd-g03l3tlm8djoj****",
      "DesktopName": "test",
      "DesktopStatus": "Running",
      "DiskStatus": "Available",
      "Creator": "Administrator",
      "ProtocolType": "ASP",
      "OsType": "Windows",
      "VolumeEncryptionEnabled": false,
      "VolumeEncryptionKey": "08c33a6f-4e0a-4a1b-a3fa-7ddfa1d4****",
      "DeletionTime": "2020-12-20T14:52:28Z\n",
      "RestorePointId": "rp-btgmaa20wkcju****",
      "RestorePointName": "数据盘备份",
      "EnvType": "",
      "EnvId": ""
    }
  ]
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ecd/2020-09-30/DescribeSnapshots#workbench-doc-change-demo) for a complete list.
