Queries one or more restore jobs that meet specified conditions.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeRestoreJobs2)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeRestoreJobs2)

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

hbr:DescribeRestoreJobs2

get

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

PageNumber

integer

No

The page number. Pages start from page 1. Default value: 1.

1

PageSize

integer

No

The number of entries per page. Valid values: 1 to 99. Default value: 10.

10

RestoreType

string

No

The type of the data source. Valid values:

-   **ECS\_FILE**: restores ECS files.
    
-   **OSS**: restores data to Alibaba Cloud OSS.
    
-   **NAS**: restores data to Alibaba Cloud NAS.
    
-   **COMMON\_FILE\_SYSTEM**: restores data to a CPFS file system.
    
-   **OTS\_TABLE**: restores data to Alibaba Cloud Tablestore.
    
-   **UDM\_ECS\_ROLLBACK**: restores an entire ECS instance.
    

ECS\_FILE

Filters

array<object>

No

The key-value pairs of the filter.

object

No

The key-value pairs of the filter.

Key

string

No

The key of the filter. Valid values:

-   **RegionId**: the region ID
    
-   **PlanId**: the ID of the backup plan
    
-   **JobId**: the ID of the backup job
    
-   **VaultId**: the ID of the backup repository
    
-   **InstanceId**: the ID of the ECS instance
    
-   **Bucket**: the name of the OSS bucket
    
-   **FileSystemId**: the ID of the file system
    
-   **Status**: the status of the task
    
-   **CompleteTime**: the time when the task was completed
    

VaultId

Values

array

No

The values to be matched in the filter.

string

No

The values to be matched in the filter.

\["v-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*"\]

Operator

string

No

The operator to use for matching the key and value. Default value: IN. Valid values:

-   **EQUAL**: equal to
    
-   **NOT\_EQUAL**: not equal to
    
-   **GREATER\_THAN**: greater than
    
-   **GREATER\_THAN\_OR\_EQUAL**: greater than or equal to
    
-   **LESS\_THAN**: less than
    
-   **LESS\_THAN\_OR\_EQUAL**: less than or equal to
    
-   **BETWEEN**: between. The value is a JSON array that contains a lower limit and an upper limit.
    
-   **IN**: in a set. The value is an array.
    

**Note**

The IN operator is not supported when you use **CompleteTime** as the key.

IN

Edition

string

No

The edition type. Valid values: BASIC and STANDARD. Default value: STANDARD.

STANDARD

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

Success

boolean

Indicates whether the request was successful.

-   true: The request was successful.
    
-   false: The request failed.
    

true

Code

string

The return code. A value of 200 indicates that the request was successful.

200

Message

string

The message that is returned. If the request was successful, "successful" is returned. If the request failed, an error message is returned.

successful

PageNumber

integer

The page number. Pages start from page 1. Default value: 1.

1

PageSize

integer

The number of entries per page. Valid values: 1 to 99. Default value: 10.

1

TotalCount

integer

The total number of records.

1

RestoreJobs

object

RestoreJob

array<object>

The details of the restore job.

{'RestoreJob': \[\]}

array<object>

The details of the restore job.

SnapshotHash

string

The hash value of the backup snapshot.

f2fe...

Status

string

The status of the restore job. Valid values:

-   **COMPLETE**: The job is successful.
    
-   **PARTIAL\_COMPLETE**: The job is partially successful.
    
-   **FAILED**: The job has failed.
    

COMPLETE

ErrorMessage

string

The error message for the restore job.

PARTIAL\_COMPLETE

ActualItems

integer

The actual number of items in the restore job. This parameter is returned only when **SourceType** is set to **ECS\_FILE**.

6

VaultId

string

The ID of the backup repository.

v-0006\*\*\*\*\*\*q

ActualBytes

integer

The actual amount of data that is restored after deduplication. Unit: bytes.

600

UdmDetail

string

The details of the entire instance backup.

{\\"doCopy\\":true,\\"doBackup\\":false,\\"instanceName\\":\\"instance example\\",\\"appConsistent\\":false,\\"destinationRegionId\\":\\"cn-shanghai\\",\\"enableFsFreeze\\":true,\\"osNameEn\\":\\"Windows Server 2019 Data Center Edition 64bit Chinese Edition\\",\\"osName\\":\\"Windows Server 2019 Data Center Edition 64bit Chinese Edition\\",\\"diskIdList\\":\[\],\\"backupVaultId\\":\\"\\",\\"snapshotGroup\\":true,\\"destinationRetention\\":35,\\"platform\\":\\"Windows Server 2012\\",\\"timeoutInSeconds\\":60,\\"backupRetention\\":1,\\"osType\\":\\"windows\\",\\"preScriptPath\\":\\"\\",\\"postScriptPath\\":\\"\\",\\"enableWriters\\":true,\\"ecsDeleted\\":false}

SourceType

string

The type of the data source. Valid values:

-   **ECS\_FILE**: restores ECS files.
    
-   **OSS**: restores data to Alibaba Cloud OSS.
    
-   **NAS**: restores data to Alibaba Cloud NAS.
    
-   **OTS\_TABLE**: restores data to Alibaba Cloud Tablestore.
    
-   **UDM\_ECS**: restores an entire ECS instance.
    

ECS\_FILE

Options

string

Indicates whether to use the Volume Shadow Copy Service (VSS) to define the restore path. This parameter is required only if **SourceType** is set to **ECS\_FILE**.

-   This feature is available only for ECS instances that run Windows.
    
-   If data in the backup source is changed, set this parameter to `["UseVSS":true]` to ensure data consistency between the backup data and the source data.
    
-   After you enable the VSS feature, you cannot restore multiple file directories at the same time.
    

{"UseVSS":false}

SourceInstanceId

string

The ID of the source instance for the restore job.

i-2ze3m7ktcgw\*\*\*\*\*\*cs

RestoreType

string

The type of the restore job.

ECS\_FILE

TargetCreateTime

integer

The time when the destination file system was created. This parameter is returned only for NAS backups.

1634714531

ItemsDone

integer

The number of restored items. This parameter is returned only when **SourceType** is set to **ECS\_FILE**.

8

BytesTotal

integer

The total amount of data in the data source. Unit: bytes.

1000

Exclude

string

The path to the files that you do not want to restore. All files in the path are not restored. The value can be up to 255 characters in length. This parameter is required only if **SourceType** is set to **ECS\_FILE**.

\["/var", "/proc"\]

ParentId

string

The ID of the parent job.

r-0003hd2an3x4dyv0l18b

CompleteTime

integer

The time when the restore job was completed. This value is a UNIX timestamp. Unit: seconds.

1554347313

CreatedTime

integer

The time when the restore job was created. This value is a UNIX timestamp. Unit: seconds.

1554347313

TargetBucket

string

The destination bucket. This parameter is returned only for OSS backups.

target-bucket

ClusterId

string

The ID of the client group that is used for the restore.

cl-000\*\*\*\*\*\*hp6

TargetFileSystemId

string

The destination file system. This parameter is returned only for NAS backups.

0be9\*\*\*\*9c9

Progress

integer

The restore progress. The value is calculated using the formula: 100% × 100.

10000

ExpireTime

integer

The time-to-live (TTL) of the restore job.

1634714531

TargetDataSourceId

string

The ID of the destination data source.

ds-000\*\*\*\*\*997

TargetPrefix

string

The destination prefix. This parameter is returned only for OSS backups.

"/target"

TargetPath

string

The destination path of the restore job.

"D:\\\\rebk"

ErrorFile

string

The list of files that failed to be restored.

"test.csv"

StartTime

integer

The time when the restore job started. This value is a UNIX timestamp. Unit: seconds.

1554347313

UpdatedTime

integer

The time when the restore job was updated. This value is a UNIX timestamp. Unit: seconds.

1554347313

SnapshotId

string

The ID of the snapshot that is used for the restore.

s-0002\*\*\*\*\*\*ga88

RestoreId

string

The ID of the restore job.

r-0003\*\*\*\*\*8a

TargetClientId

string

The ID of the destination client.

c-000e\*\*\*\*\*397

ItemsTotal

integer

The total number of items in the data source. This parameter is returned only when **SourceType** is set to **ECS\_FILE**.

10

Include

string

The restore paths that are included in the restore job.

\["/home/alice/\*.pdf", "/home/bob/\*.txt"\]

BytesDone

integer

The amount of restored data. Unit: bytes.

800

TargetInstanceName

string

The name of the destination Tablestore instance for the backup.

instancename

TargetTableName

string

The data table in the destination Tablestore instance for the backup.

tablename

Speed

integer

The actual average backup speed. Unit: KB/s.

500

TargetTime

integer

The time of the destination Tablestore instance for the backup. This value is a UNIX timestamp. Unit: seconds.

1642560261

OtsDetail

object

The details of the Tablestore instance.

BatchChannelCount

integer

The number of channels that are processed by each Tablestore restore job.

2

OverwriteExisting

boolean

Indicates whether to overwrite an existing Tablestore restore job.

false

CrossAccountType

string

The type of the cross-account backup. Valid values:

-   SELF\_ACCOUNT: backup within the same account
    
-   CROSS\_ACCOUNT: cross-account backup
    

SELF\_ACCOUNT

CrossAccountUserId

integer

The ID of the source account for the cross-account backup that is managed by the current account.

158975xxxxxx4625

CrossAccountRoleName

string

The name of the RAM role that is created in the source account for the cross-account backup and is managed by the current account.

BackupRole

Report

object

The report of the restore job.

TotalFiles

string

All files that are restored based on the file list.

/temp/report/158975xxxxxx4625/job-0001hfxxxxxymsspjjtl/job-0001hfxxxxxymsspjjtl\_total.csv

SuccessFiles

string

The list of files that were successfully processed.

/temp/report/158975xxxxxx4625/r-0001hfxxxxxymsspjjtl/job-0001hfxxxxxymsspjjtl\_success.zip

FailedFiles

string

The list of files that failed to be processed.

/temp/report/158975xxxxxx4625/r-0001hfxxxxxymsspjjtl/job-0001hfxxxxxymsspjjtl\_failed.zip

SkippedFiles

string

The list of skipped files.

/temp/report/158975xxxxxx4625/r-0001hfxxxxxymsspjjtl/job-0001hfxxxxxymsspjjtl\_skipped.zip

ReportTaskStatus

string

The status of report generation.

COMPLETE

MeteringBytesDone

integer

The amount of restored data. Unit: bytes. This parameter is valid only when StorageClass is set to ARCHIVE. The value is rounded up to the nearest 1 MB.

1048576

MeteringBytesTotal

integer

The total amount of data in the data source. Unit: bytes. This parameter is valid only when StorageClass is set to ARCHIVE. The value is rounded up to the nearest 1 MB.

1048576

StorageClass

string

The storage class of the backup data. Valid values:

-   **STANDARD**: Standard.
    
-   **ARCHIVE**: Archive.
    

STANDARD

FailbackDetail

string

The details of the VMware failback task.

{"cpu":4,"extra":"{\\"restoreVMNamePrefix\\":\\"627-\\",\\"dataCenterName\\":\\"SDDC-Datacenter\\",\\"dataStoreId\\":\\"datastore-50\\",\\"folderId\\":\\"group-v49\\",\\"resourcePoolId\\":\\"resgroup-46\\",\\"locationName\\":\\"vcenter.pc-uf600arcwi9td3eyj641.acvs.aliyuncs.com/SDDC-Datacenter/Workloads\\",\\"computeResourceName\\":\\"SDDC-Datacenter/Default\_c-uf600arcwi9td3eyj640\\",\\"dataStoreName\\":\\"Default\_c-uf600arcwi9td3eyj640/WorkloadDatastore\\",\\"networkMoReference\\":\\"DistributedVirtualPortgroup:dvportgroup-1001\\",\\"useHotAdd\\":false}","instanceId":"i-2vc357i2eannmmotcagz","memoryInMB":8192,"serverId":"0fdc0c86-eb92-4e05-91ab-eeaf9fb6ad01","uefiBoot":false}

TargetInstanceId

string

The ID of the destination instance for the restore job.

i-2ze3m7ktcgw\*\*\*\*\*\*cs

## Examples

Success response

`JSON` format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "Success": true,
  "Code": "200",
  "Message": "successful",
  "PageNumber": 1,
  "PageSize": 1,
  "TotalCount": 1,
  "RestoreJobs": {
    "RestoreJob": [
      {
        "SnapshotHash": "f2fe...",
        "Status": "COMPLETE",
        "ErrorMessage": "PARTIAL_COMPLETE",
        "ActualItems": 6,
        "VaultId": "v-0006******q",
        "ActualBytes": 600,
        "UdmDetail": "{\\\"doCopy\\\":true,\\\"doBackup\\\":false,\\\"instanceName\\\":\\\"instance example\\\",\\\"appConsistent\\\":false,\\\"destinationRegionId\\\":\\\"cn-shanghai\\\",\\\"enableFsFreeze\\\":true,\\\"osNameEn\\\":\\\"Windows Server  2019 Data Center Edition 64bit Chinese Edition\\\",\\\"osName\\\":\\\"Windows Server 2019 Data Center Edition 64bit Chinese Edition\\\",\\\"diskIdList\\\":[],\\\"backupVaultId\\\":\\\"\\\",\\\"snapshotGroup\\\":true,\\\"destinationRetention\\\":35,\\\"platform\\\":\\\"Windows Server 2012\\\",\\\"timeoutInSeconds\\\":60,\\\"backupRetention\\\":1,\\\"osType\\\":\\\"windows\\\",\\\"preScriptPath\\\":\\\"\\\",\\\"postScriptPath\\\":\\\"\\\",\\\"enableWriters\\\":true,\\\"ecsDeleted\\\":false}",
        "SourceType": "ECS_FILE",
        "Options": "{\"UseVSS\":false}",
        "SourceInstanceId": "i-2ze3m7ktcgw******cs",
        "RestoreType": "ECS_FILE",
        "TargetCreateTime": 1634714531,
        "ItemsDone": 8,
        "BytesTotal": 1000,
        "Exclude": "[\"/var\", \"/proc\"]",
        "ParentId": "r-0003hd2an3x4dyv0l18b",
        "CompleteTime": 1554347313,
        "CreatedTime": 1554347313,
        "TargetBucket": "target-bucket",
        "ClusterId": "cl-000******hp6",
        "TargetFileSystemId": "0be9****9c9",
        "Progress": 10000,
        "ExpireTime": 1634714531,
        "TargetDataSourceId": "ds-000*****997",
        "TargetPrefix": "\"/target\"",
        "TargetPath": "\"D:\\\\rebk\"",
        "ErrorFile": "\"test.csv\"",
        "StartTime": 1554347313,
        "UpdatedTime": 1554347313,
        "SnapshotId": "s-0002******ga88",
        "RestoreId": "r-0003*****8a",
        "TargetClientId": "c-000e*****397",
        "ItemsTotal": 10,
        "Include": "[\"/home/alice/*.pdf\", \"/home/bob/*.txt\"]",
        "BytesDone": 800,
        "TargetInstanceName": "instancename",
        "TargetTableName": "tablename",
        "Speed": 500,
        "TargetTime": 1642560261,
        "OtsDetail": {
          "BatchChannelCount": 2,
          "OverwriteExisting": false
        },
        "CrossAccountType": "SELF_ACCOUNT",
        "CrossAccountUserId": 0,
        "CrossAccountRoleName": "BackupRole",
        "Report": {
          "TotalFiles": "/temp/report/158975xxxxxx4625/job-0001hfxxxxxymsspjjtl/job-0001hfxxxxxymsspjjtl_total.csv",
          "SuccessFiles": "/temp/report/158975xxxxxx4625/r-0001hfxxxxxymsspjjtl/job-0001hfxxxxxymsspjjtl_success.zip\n",
          "FailedFiles": "/temp/report/158975xxxxxx4625/r-0001hfxxxxxymsspjjtl/job-0001hfxxxxxymsspjjtl_failed.zip",
          "SkippedFiles": "/temp/report/158975xxxxxx4625/r-0001hfxxxxxymsspjjtl/job-0001hfxxxxxymsspjjtl_skipped.zip",
          "ReportTaskStatus": "COMPLETE"
        },
        "MeteringBytesDone": 1048576,
        "MeteringBytesTotal": 1048576,
        "StorageClass": "STANDARD",
        "FailbackDetail": "{\"cpu\":4,\"extra\":\"{\\\"restoreVMNamePrefix\\\":\\\"627-\\\",\\\"dataCenterName\\\":\\\"SDDC-Datacenter\\\",\\\"dataStoreId\\\":\\\"datastore-50\\\",\\\"folderId\\\":\\\"group-v49\\\",\\\"resourcePoolId\\\":\\\"resgroup-46\\\",\\\"locationName\\\":\\\"vcenter.pc-uf600arcwi9td3eyj641.acvs.aliyuncs.com/SDDC-Datacenter/Workloads\\\",\\\"computeResourceName\\\":\\\"SDDC-Datacenter/Default_c-uf600arcwi9td3eyj640\\\",\\\"dataStoreName\\\":\\\"Default_c-uf600arcwi9td3eyj640/WorkloadDatastore\\\",\\\"networkMoReference\\\":\\\"DistributedVirtualPortgroup:dvportgroup-1001\\\",\\\"useHotAdd\\\":false}\",\"instanceId\":\"i-2vc357i2eannmmotcagz\",\"memoryInMB\":8192,\"serverId\":\"0fdc0c86-eb92-4e05-91ab-eeaf9fb6ad01\",\"uefiBoot\":false}",
        "TargetInstanceId": "i-2ze3m7ktcgw******cs"
      }
    ]
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/hbr/2017-09-08/DescribeRestoreJobs2#workbench-doc-change-demo) for a complete list.
