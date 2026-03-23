Queries the snapshots of full backups.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeUdmSnapshots)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeUdmSnapshots)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

hbr:DescribeUdmSnapshots

list

\*All Resource

`*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

SourceType

string

Yes

The type of the data source. Valid values:

-   **UDM\_ECS**: ECS instance backup
    
-   **UDM\_ECS\_DISK**: a disk backup subtask of an ECS instance backup
    
-   **UDM\_DISK**: disk backup
    

UDM\_ECS

StartTime

integer

Yes

The beginning of the time range to query. This value is a UNIX timestamp in seconds.

1642057551

EndTime

integer

Yes

The end of the time range to query. This value is a UNIX timestamp in seconds.

1643092168

UdmRegionId

string

Yes

The region ID of the ECS instance.

cn-hangzhou

InstanceId

string

No

The ID of the ECS instance.

i-bp18x2k7sw925ir7ofh8

DiskId

string

No

The ID of the disk.

d-bp1560750pclffpzxy70

JobId

string

No

The ID of the backup job.

job-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

SnapshotIds

object

No

The list of snapshot IDs.

\[\\"s-000e3vhhu62xsm6v92r0\\"\]

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Code

string

The HTTP status code. A value of 200 indicates that the request was successful.

200

Message

string

The message that is returned. If the request was successful, **successful** is returned. If the request failed, an error message is returned.

successful

RequestId

string

The request ID.

51CDEECB-7001-51CC-94AC-2A0F2A4B71D2

TotalCount

integer

The total number of snapshots.

3

Success

boolean

Indicates whether the request was successful.

-   true: The request was successful.
    
-   false: The request failed.
    

true

Snapshots

array<object>

The details of the snapshots.

array<object>

The details of the snapshots.

Status

string

The status of the backup snapshot. Valid values:

-   **COMPLETE**: The backup is successful.
    
-   **PARTIAL\_COMPLETE**: The backup is partially successful.
    
-   **FAILED**: The backup failed.
    

COMPLETE

SnapshotHash

string

The hash value of the snapshot.

f2fe...

BackupType

string

The backup type. The value **COMPLETE** indicates a full backup.

COMPLETE

CreateTime

integer

The time when the backup snapshot was created.

1607436917

ActualBytes

string

The actual size of the snapshot. Unit: bytes.

600

SourceType

string

The type of the data source. Valid values:

-   **UDM\_ECS**: ECS instance backup
    
-   **UDM\_ECS\_DISK**: a disk backup subtask of an ECS instance backup
    
-   **UDM\_DISK**: disk backup
    

UDM\_ECS

Prefix

string

The prefix of the snapshot.

example/

DiskId

string

The ID of the disk. The disk can be a cloud disk or a local disk.

d-2ze86h5fga5rfwxxa8ef

BytesTotal

integer

The total size of the data source. Unit: bytes.

1000

NativeSnapshotInfo

string

The information about the native snapshot.

{ "sourceDiskId":"d-bp17misjuy636t82v7b0", "lastModifiedTime":"2022-03-09T11:35:12Z", "snapshotSN":"64588-429372675-857161235", "snapshotId":"s-bp1fbtwv3e6xr6wpe9e0", "creationTime":"2022-03-09T11:31:12Z", "snapshotType":"user", "usage":"none", "description":"", "sourceStorageType":"disk", "tags":\[ { "tagValue":"job-0007e0wqjl0imbrtkmnm", "tagKey":"HBR JobId" } \], "productCode":"", "encrypted":false, "sourceDiskType":"system", "retentionDays":30, "snapshotName":"Created-from-HBR-job:job-0007e0wqjl0imbrtkmnm", "kMSKeyId":"", "progress":"100%", "category":"standard", "sourceDiskSize":"20", "status":"accomplished" }

CompleteTime

integer

The time when the backup snapshot was completed. This value is a UNIX timestamp in seconds.

1646895666

Retention

integer

The retention period of the snapshot in days.

7

CreatedTime

integer

The time when the backup snapshot was created. This value is a UNIX timestamp in seconds.

1642496679

RealSnapshotTime

integer

The timestamp of the snapshot. This value is a UNIX timestamp in seconds.

1642496679

ParentSnapshotHash

string

The hash value of the parent snapshot.

f2fe..

InstanceId

string

The ID of the ECS instance.

i-bp1f0pe78dxizrsdcgxd

StartTime

integer

The time when the snapshot was started. This value is a UNIX timestamp in seconds.

1554347313

UpdatedTime

integer

The time when the backup snapshot was updated. This value is a UNIX timestamp in seconds.

1642496679

SnapshotId

string

The ID of the backup snapshot.

s-00047mxg17p26\*\*\*\*\*b

JobId

string

The ID of the backup job.

job-00030j3chkt\*\*\*\*\*\*2

NativeSnapshotId

string

The ID of the native snapshot.

s-00047mg17p26x\*\*\*\*\*b

Detail

object

The details of the snapshot.

DiskDevName

string

The name of the disk device.

/dev/xvdb

DowngradeReason

string

The reason for the downgrade.

HBR.NoRamRoleBound

OsDiskId

string

The ID of the system disk.

d-bp1e6427vhd320hifvc

OsName

string

The name of the operating system.

Debian 10.10 64-bit (UEFI)

ContainOsDisk

boolean

Indicates whether the system disk is included.

true

ConsistentLevel

string

The consistency level.

CRASH

VmName

string

The name of the instance.

BNSHSVR42 IPGUARD

DiskHbrSnapshotIdWithDeviceMap

object

The mapping between devices and backup point IDs.

{ "/dev/xvdb":"s-0000u7y6wm3v1e7hxh5a", "/dev/xvda":"s-0004bl6yr5pt89jjsv5a" }

InstanceIdWithDiskIdListMap

object

The mapping between instance IDs and disk IDs.

{ "i-bp1dlp0keohh7ids4uo6":"d-bp1e6427vhd320hifvs", "i-bp1dlp0keohh7ids4uo6":"d-bp1e6427vhd320hifvd" }

InstanceName

string

The name of the instance.

swh-hbr

OsType

string

The type of the operating system. Valid values: linux, windows.

windows

Platform

string

The operating system.

CentOS

OsNameEn

string

The English name of the operating system.

Debian 11.1 64 bit

HostName

string

The hostname.

iZbpxxxxxxxxxxxxxxxxe2Z

SystemDisk

boolean

Indicates whether the disk is a system disk.

true

DiskIdList

array

The list of disk IDs that are included in the backup point.

string

The ID of a disk that is included in the backup point.

d-bp1e6427vhd320hifvs

NativeSnapshotIdList

array

The list of native snapshot IDs. The native snapshot IDs in this list have a one-to-one correspondence with the disk IDs in the DiskIdList.

string

The ID of the native snapshot.

s-0004bl6yr5pt89jjsv5a

SnapshotGroupId

string

The ID of the snapshot group.

ssg-uf6856txcaq31uj\*\*\*

InstanceType

string

The instance type of the source instance.

ecs.c6.xlarge

DiskCategory

string

The type of the source disk.

cloud\_essd

PerformanceLevel

string

The performance level of the source disk.

PL0

InstantAccess

boolean

Indicates whether the backup is created for the instant clone feature.

false

AdvancedRetentionType

string

The special retention type. This parameter is valid only for special retention backups. Valid values:

-   **WEEKLY**: weekly special retention backup
    
-   **MONTHLY**: monthly special retention backup
    
-   **YEARLY**: yearly special retention backup
    

WEEKLY

ExpireTime

integer

The time when the backup expires.

1640334062

CanBeDeleted

boolean

Indicates whether the disk backup point can be deleted. This parameter is valid only if **SourceType** is set to **UDM\_ECS\_DISK**.

false

ArchiveStatus

string

The archiving status.

ARCHIVED

ArchiveErrorMessage

string

The error message that is returned if the archiving fails.

InternalError

ArchiveTriggerTime

integer

The time when the archiving was triggered.

1763373304

## Examples

Success response

`JSON` format

```
{
  "Code": "200",
  "Message": "successful",
  "RequestId": "51CDEECB-7001-51CC-94AC-2A0F2A4B71D2",
  "TotalCount": 3,
  "Success": true,
  "Snapshots": [
    {
      "Status": "COMPLETE",
      "SnapshotHash": "f2fe...",
      "BackupType": "COMPLETE",
      "CreateTime": 1607436917,
      "ActualBytes": "600",
      "SourceType": "UDM_ECS",
      "Prefix": "example/",
      "DiskId": "d-2ze86h5fga5rfwxxa8ef",
      "BytesTotal": 1000,
      "NativeSnapshotInfo": "{\n\t\t\t\t\t\"sourceDiskId\":\"d-bp17misjuy636t82v7b0\",\n\t\t\t\t\t\"lastModifiedTime\":\"2022-03-09T11:35:12Z\",\n\t\t\t\t\t\"snapshotSN\":\"64588-429372675-857161235\",\n\t\t\t\t\t\"snapshotId\":\"s-bp1fbtwv3e6xr6wpe9e0\",\n\t\t\t\t\t\"creationTime\":\"2022-03-09T11:31:12Z\",\n\t\t\t\t\t\"snapshotType\":\"user\",\n\t\t\t\t\t\"usage\":\"none\",\n\t\t\t\t\t\"description\":\"\",\n\t\t\t\t\t\"sourceStorageType\":\"disk\",\n\t\t\t\t\t\"tags\":[\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"tagValue\":\"job-0007e0wqjl0imbrtkmnm\",\n\t\t\t\t\t\t\t\"tagKey\":\"HBR JobId\"\n\t\t\t\t\t\t}\n\t\t\t\t\t],\n\t\t\t\t\t\"productCode\":\"\",\n\t\t\t\t\t\"encrypted\":false,\n\t\t\t\t\t\"sourceDiskType\":\"system\",\n\t\t\t\t\t\"retentionDays\":30,\n\t\t\t\t\t\"snapshotName\":\"Created-from-HBR-job:job-0007e0wqjl0imbrtkmnm\",\n\t\t\t\t\t\"kMSKeyId\":\"\",\n\t\t\t\t\t\"progress\":\"100%\",\n\t\t\t\t\t\"category\":\"standard\",\n\t\t\t\t\t\"sourceDiskSize\":\"20\",\n\t\t\t\t\t\"status\":\"accomplished\"\n\t\t\t\t}",
      "CompleteTime": 1646895666,
      "Retention": 7,
      "CreatedTime": 1642496679,
      "RealSnapshotTime": 1642496679,
      "ParentSnapshotHash": "f2fe..",
      "InstanceId": "i-bp1f0pe78dxizrsdcgxd",
      "StartTime": 1554347313,
      "UpdatedTime": 1642496679,
      "SnapshotId": "s-00047mxg17p26*****b",
      "JobId": "job-00030j3chkt******2",
      "NativeSnapshotId": "s-00047mg17p26x*****b",
      "Detail": {
        "DiskDevName": "/dev/xvdb",
        "DowngradeReason": "HBR.NoRamRoleBound",
        "OsDiskId": "d-bp1e6427vhd320hifvc",
        "OsName": "Debian 10.10 64-bit (UEFI)",
        "ContainOsDisk": true,
        "ConsistentLevel": "CRASH",
        "VmName": "BNSHSVR42 IPGUARD",
        "DiskHbrSnapshotIdWithDeviceMap": {
          "/dev/xvdb": "s-0000u7y6wm3v1e7hxh5a",
          "/dev/xvda": "s-0004bl6yr5pt89jjsv5a"
        },
        "InstanceIdWithDiskIdListMap": {
          "i-bp1dlp0keohh7ids4uo6": "d-bp1e6427vhd320hifvd"
        },
        "InstanceName": "swh-hbr",
        "OsType": "windows",
        "Platform": "CentOS",
        "OsNameEn": "Debian  11.1 64 bit",
        "HostName": "iZbpxxxxxxxxxxxxxxxxe2Z",
        "SystemDisk": true,
        "DiskIdList": [
          "d-bp1e6427vhd320hifvs"
        ],
        "NativeSnapshotIdList": [
          "s-0004bl6yr5pt89jjsv5a"
        ],
        "SnapshotGroupId": "ssg-uf6856txcaq31uj***",
        "InstanceType": "ecs.c6.xlarge",
        "DiskCategory": "cloud_essd",
        "PerformanceLevel": "PL0",
        "InstantAccess": false
      },
      "AdvancedRetentionType": "WEEKLY",
      "ExpireTime": 1640334062,
      "CanBeDeleted": false,
      "ArchiveStatus": "ARCHIVED",
      "ArchiveErrorMessage": "InternalError",
      "ArchiveTriggerTime": 1763373304
    }
  ]
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/hbr/2017-09-08/DescribeUdmSnapshots#workbench-doc-change-demo) for a complete list.
