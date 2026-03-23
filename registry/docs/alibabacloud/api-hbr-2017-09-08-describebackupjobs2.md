Queries backup jobs that meet the specified criteria.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeBackupJobs2)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeBackupJobs2)

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

hbr:DescribeBackupJobs2

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

The page number. Pages start from page 1. The default value is 1.

1

PageSize

integer

No

The number of entries per page. Valid values: 1 to 99. The default value is 10.

10

SourceType

string

No

The type of the data source. Valid values:

-   **ECS\_FILE**: Backs up Elastic Compute Service (ECS) files.
    
-   **OSS**: Backs up Alibaba Cloud Object Storage Service (OSS) buckets.
    
-   **NAS**: Backs up Alibaba Cloud Apsara File Storage NAS (NAS) file systems.
    
-   **OTS**: Backs up Alibaba Cloud Tablestore instances.
    
-   **UDM\_ECS**: Backs up entire ECS instances.
    
-   **UDM\_ECS\_DISK**: A sub-task for disk backup in an ECS instance backup job.
    
-   **COMMON\_NAS**: A generic NAS data source. This includes archive NAS and on-premises NAS data sources. Use the Values parameter of Filters to specify the data source type.
    
-   **File**: Backs up on-premises files.
    
-   **SYNC**: Data synchronization.
    

ECS\_FILE

SortDirection

string

No

The sort direction. Valid values:

-   **ASCEND**: Ascending order.
    
-   **DESCEND** (Default): Descending order.
    

DESCEND

Filters

array<object>

No

The key-value pairs of the filter.

object

No

The filter.

Key

string

No

The key of the filter. Valid values:

-   **RegionId**: The region ID.
    
-   **PlanId**: The backup plan ID.
    
-   **JobId**: The backup job ID.
    
-   **VaultId**: The repository ID.
    
-   **InstanceId**: The ECS instance ID.
    
-   **Bucket**: The name of the OSS bucket.
    
-   **FileSystemId**: The file system ID.
    
-   **Status**: The job status.
    
-   **CreatedTime**: The start time of the job.
    
-   **CompleteTime**: The end time of the job.
    
-   **InstanceName**: The name of the Tablestore instance.
    
-   **BackupType**: The backup job. This parameter is required only when SourceType is set to COMMON\_NAS.
    
-   **ParentId**: The ID of the parent job. This parameter is required when you query sub-tasks. For example, if you set SourceType to UDM\_ECS\_DISK, you must specify the ID of the UDM\_ECS job.
    

VaultId

Values

array

No

The value of the filter.

string

No

The value of the filter.

COMPLETE: On-premises NAS backup.

0: ARCHIVE: Archive NAS data source.

1: ARCHIVE\_BY\_SEARCH: Archive NAS data source.

COMPLETE

Operator

string

No

The matching operator. The default value is IN. This parameter specifies the operator to use for matching the Key and Value. Valid values:

-   **EQUAL**: Equal to.
    
-   **NOT\_EQUAL**: Not equal to.
    
-   **GREATER\_THAN**: Greater than.
    
-   **GREATER\_THAN\_OR\_EQUAL**: Greater than or equal to.
    
-   **LESS\_THAN**: Less than.
    
-   **LESS\_THAN\_OR\_EQUAL**: Less than or equal to.
    
-   **BETWEEN**: The value is a JSON array in the format of `[start,end]`.
    
-   **IN**: The value is an array.
    

**Note**

The IN operator is not supported when you use **CompleteTime** as the key for a query.

IN

Edition

string

No

The edition. Valid values: BASIC and STANDARD. The default value is STANDARD.

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

The message that is returned. If the request was successful, successful is returned. If the request failed, an error message is returned.

successful

PageNumber

integer

The page number. Pages start from page 1. The default value is 1.

1

PageSize

integer

The number of entries per page. Valid values: 1 to 99. The default value is 10.

10

TotalCount

integer

The total number of backup jobs that meet the specified criteria.

8

BackupJobs

object

BackupJob

array<object>

The list of backup jobs that meet the specified criteria.

array<object>

The details of the backup job.

Status

string

The status of the backup job. Valid values:

-   **COMPLETE**: The job is successful.
    
-   **PARTIAL\_COMPLETE**: The job is partially successful.
    
-   **FAILED**: The job failed.
    

COMPLETE

ErrorMessage

string

The error message for the backup job.

PARTIAL\_COMPLETE

ActualItems

integer

This parameter is valid only when **SourceType** is set to **ECS\_FILE**. It indicates the actual number of items in the backup job.

6

VaultId

string

The ID of the backup repository.

v-0006\*\*\*\*\*\*q

ActualBytes

integer

The actual data volume of the backup job after deduplication. Unit: bytes.

600

CreateTime

integer

This parameter is valid only when **SourceType** is set to **NAS**. It indicates the time when the file system was created. This value is a UNIX timestamp. Unit: seconds.

1607436917

BackupType

string

The backup type. The value **COMPLETE** indicates a full backup.

COMPLETE

Prefix

string

This parameter is valid only when **SourceType** is set to **OSS**. It indicates the prefix of the backup object.

example/

SourceType

string

The type of the data source. Valid values:

-   **ECS\_FILE**: Backs up ECS files.
    
-   **OSS**: Backs up Alibaba Cloud OSS buckets.
    
-   **NAS**: Backs up Alibaba Cloud NAS file systems.
    

ECS\_FILE

Options

string

This parameter is required only when **SourceType** is set to **ECS\_FILE**. It indicates whether to use Volume Shadow Copy Service (VSS) to define the backup path.

-   This feature is available only for Windows ECS instances.
    
-   If data in the backup source is changed, set this parameter to `{"UseVSS":true}` to ensure data consistency between the backup and the source.
    
-   After you enable VSS, you cannot back up multiple file directories at the same time.
    

{"UseVSS":false}

ClientId

string

This parameter is valid only when **SourceType** is set to **ECS\_FILE**. It indicates the ID of the backup client.

c-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

ItemsDone

integer

This parameter is valid only when **SourceType** is set to **ECS\_FILE**. It indicates the number of backup items.

8

BytesTotal

integer

The total data volume of the data source. Unit: bytes.

1000

Exclude

string

This parameter is required only when **SourceType** is set to **ECS\_FILE**. It indicates the path to files that do not need to be backed up. All files in this path are excluded. The path can be up to 255 characters long.

\["/var", "/proc"\]

JobName

string

The name of the backup job.

jobname

CompleteTime

integer

The time when the backup job was completed. This value is a UNIX timestamp. Unit: seconds.

1554347313

CreatedTime

integer

The time when the backup job was created. This value is a UNIX timestamp. Unit: seconds.

1554347313

Bucket

string

This parameter is valid only when **SourceType** is set to **OSS**. It indicates the name of the OSS bucket.

hbr-backup-oss

Progress

integer

The backup progress. The value is calculated as 100% × 100.

10000

SpeedLimit

string

This parameter is required only when **SourceType** is set to **ECS\_FILE**. It indicates the traffic shaping settings for the backup. The format is `{start}|{end}|{bandwidth}`. Use the `|` character to separate multiple traffic shaping configurations. The time ranges of the configurations cannot overlap.

-   **start**: The start hour.
    
-   **end**: The end hour.
    
-   **bandwidth**: The throttling speed. Unit: KB/s.
    

0:24:5120

InstanceId

string

This parameter is valid only when **SourceType** is set to **NAS**. It indicates the ECS instance ID.

i-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

PlanId

string

The backup plan ID.

plan-20\*\*\*\*\*\*\*\*35

FileSystemId

string

This parameter is valid only when **SourceType** is set to **NAS**. It indicates the file system ID.

005494

StartTime

integer

The time when the backup job started. This value is a UNIX timestamp. Unit: seconds.

1554347313

UpdatedTime

integer

The time when the backup job was updated. This value is a UNIX timestamp. Unit: seconds.

1554347313

JobId

string

The backup job ID.

job-000g\*\*\*\*\*\*\*\*w7

ItemsTotal

integer

This parameter is valid only when **SourceType** is set to **ECS\_FILE**. It indicates the total number of items in the data source.

10

Include

string

The source paths included in the backup job.

\["/home/alice/\*.pdf", "/home/bob/\*.txt"\]

BytesDone

integer

The data volume of the incremental backup. Unit: bytes.

800

Paths

object

Path

array

The source path of the backup.

string

The source path.

"/home"

Detail

object

The details of the ECS instance backup job.

DoCopy

boolean

Indicates whether a remote replication is performed.

true

DestinationNativeSnapshotId

string

The ID of the remote replication snapshot.

s-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DestinationNativeSnapshotProgress

integer

The progress of the remote replication.

85

DestinationNativeSnapshotStatus

string

The status of the remote replication.

COMPLETE

DestinationRetention

integer

The retention period of the remote replication backup.

30

DestinationSnapshotId

string

The ID of the remote replication backup.

s-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DestinationNativeSnapshotErrorMessage

string

The error message for the failed remote replication.

ECS.CreatingSnapshot

NativeSnapshotId

string

The snapshot ID.

s-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DiskNativeSnapshotIdList

object

DiskNativeSnapshotId

array

The mapping between snapshots and disks.

string

The snapshot ID.

s-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

InstanceInfos

object

The information about the ECS instance, including the instance name and instance type.

{ "i-xxxxxxxx": { "hostName": "test", "instanceName": "test", "instanceType": "ecs.c7.xlarge", "osType": "linux", "diskIds": \[ "d-xxxxxxxx01", "d-xxxxxxxx02" \], "osNameEn": "Rocky Linux 8.8 64 bit", "osName": "Rocky Linux 8.8 64位", "platform": "Rocky Linux" } }

InstanceName

string

The name of the Tablestore instance.

instancename

OtsDetail

object

The details of the Tablestore instance.

TableNames

object

TableName

array

The list of data table names in the Tablestore instance.

string

The name of a data table in the Tablestore instance.

\["table1", "table2", "table3"\]

Speed

integer

The actual average backup speed. Unit: KB/s.

500

TableName

string

The name of the data table in the Tablestore instance.

table1

CrossAccountType

string

The type of the cross-account backup. Valid values:

-   SELF\_ACCOUNT: Backs up data within the same account.
    
-   CROSS\_ACCOUNT: Backs up data across accounts.
    

SELF\_ACCOUNT

CrossAccountUserId

integer

The ID of the source account that is managed by the current account for cross-account backup.

158975xxxxx4625

CrossAccountRoleName

string

The name of the RAM role that is created in the source account for cross-account backup and managed by the current account.

BackupRole

Report

object

The job report.

TotalFiles

string

The list of all files. This parameter is not returned for data synchronization.

/temp/report/158975xxxxxx4625/job-0001hfxxxxxymsspjjtl/job-0001hfxxxxxymsspjjtl\_total.csv

SuccessFiles

string

The list of successful files.

/temp/report/158975xxxxxx4625/r-0001hfxxxxxymsspjjtl/job-0001hfxxxxxymsspjjtl\_success.zip

FailedFiles

string

The list of failed files.

/temp/report/158975xxxxxx4625/r-0001hfxxxxxymsspjjtl/job-0001hfxxxxxymsspjjtl\_failed.zip

SkippedFiles

string

The list of skipped files.

/temp/report/158975xxxxxx4625/r-0001hfxxxxxymsspjjtl/job-0001hfxxxxxymsspjjtl\_skipped.zip

ReportTaskStatus

string

The status of report generation.

COMPLETE

Identifier

string

This parameter is returned only when SourceType is set to CONTAINER. It indicates the ID of the cluster that is backed up by the container backup job. If the cluster is a Container Service for Kubernetes (ACK) cluster, this parameter indicates the ACK cluster ID.

c83\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*b76

DestSourceType

string

The type of the destination data source. This parameter is required only for synchronization.

OSS

DestDataSourceId

string

The ID of the destination data source. This parameter is required only for synchronization.

ds-000cov4ufudxklj24zdk

DestDataSourceDetail

string

The details of the destination data source. This parameter is required only for synchronization.

{\\"prefix\\":\\"/\\"}

ChangeListPath

string

The configuration of the incremental file synchronization list. This parameter is required only for synchronization.

{"dataSourceId": "ds-123456789", "path": "/changelist"}

FilesTotal

integer

The total number of files to be processed.

10

FilesDone

integer

The number of processed files.

9

ActualFiles

integer

The actual number of processed files.

8

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
  "PageSize": 10,
  "TotalCount": 8,
  "BackupJobs": {
    "BackupJob": [
      {
        "Status": "COMPLETE",
        "ErrorMessage": "PARTIAL_COMPLETE",
        "ActualItems": 6,
        "VaultId": "v-0006******q",
        "ActualBytes": 600,
        "CreateTime": 1607436917,
        "BackupType": "COMPLETE",
        "Prefix": "example/",
        "SourceType": "ECS_FILE",
        "Options": "{\"UseVSS\":false}",
        "ClientId": "c-*********************",
        "ItemsDone": 8,
        "BytesTotal": 1000,
        "Exclude": "[\"/var\", \"/proc\"]",
        "JobName": "jobname",
        "CompleteTime": 1554347313,
        "CreatedTime": 1554347313,
        "Bucket": "hbr-backup-oss",
        "Progress": 10000,
        "SpeedLimit": "0:24:5120",
        "InstanceId": "i-*********************",
        "PlanId": "plan-20********35",
        "FileSystemId": "005494",
        "StartTime": 1554347313,
        "UpdatedTime": 1554347313,
        "JobId": "job-000g********w7",
        "ItemsTotal": 10,
        "Include": "[\"/home/alice/*.pdf\", \"/home/bob/*.txt\"]",
        "BytesDone": 800,
        "Paths": {
          "Path": [
            "\"/home\""
          ]
        },
        "Detail": {
          "DoCopy": true,
          "DestinationNativeSnapshotId": "s-******************",
          "DestinationNativeSnapshotProgress": 85,
          "DestinationNativeSnapshotStatus": "COMPLETE",
          "DestinationRetention": 30,
          "DestinationSnapshotId": "s-******************",
          "DestinationNativeSnapshotErrorMessage": "ECS.CreatingSnapshot",
          "NativeSnapshotId": "s-******************",
          "DiskNativeSnapshotIdList": {
            "DiskNativeSnapshotId": [
              "s-******************"
            ]
          },
          "InstanceInfos": {
            "i-xxxxxxxx": {
              "hostName": "test",
              "instanceName": "test",
              "instanceType": "ecs.c7.xlarge",
              "osType": "linux",
              "diskIds": [
                "d-xxxxxxxx01",
                "d-xxxxxxxx02"
              ],
              "osNameEn": "Rocky Linux 8.8 64 bit",
              "osName": "Rocky Linux 8.8 64位",
              "platform": "Rocky Linux"
            }
          }
        },
        "InstanceName": "instancename",
        "OtsDetail": {
          "TableNames": {
            "TableName": [
              "[\"table1\", \"table2\", \"table3\"]"
            ]
          }
        },
        "Speed": 500,
        "TableName": "table1",
        "CrossAccountType": "SELF_ACCOUNT",
        "CrossAccountUserId": 0,
        "CrossAccountRoleName": "BackupRole",
        "Report": {
          "TotalFiles": "/temp/report/158975xxxxxx4625/job-0001hfxxxxxymsspjjtl/job-0001hfxxxxxymsspjjtl_total.csv",
          "SuccessFiles": "/temp/report/158975xxxxxx4625/r-0001hfxxxxxymsspjjtl/job-0001hfxxxxxymsspjjtl_success.zip",
          "FailedFiles": "/temp/report/158975xxxxxx4625/r-0001hfxxxxxymsspjjtl/job-0001hfxxxxxymsspjjtl_failed.zip",
          "SkippedFiles": "/temp/report/158975xxxxxx4625/r-0001hfxxxxxymsspjjtl/job-0001hfxxxxxymsspjjtl_skipped.zip",
          "ReportTaskStatus": "COMPLETE"
        },
        "Identifier": "c83**************************b76",
        "DestSourceType": "OSS",
        "DestDataSourceId": "ds-000cov4ufudxklj24zdk",
        "DestDataSourceDetail": "{\\\"prefix\\\":\\\"/\\\"}",
        "ChangeListPath": "{\"dataSourceId\": \"ds-123456789\", \"path\": \"/changelist\"}",
        "FilesTotal": 10,
        "FilesDone": 9,
        "ActualFiles": 8
      }
    ]
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/hbr/2017-09-08/DescribeBackupJobs2#workbench-doc-change-demo) for a complete list.
