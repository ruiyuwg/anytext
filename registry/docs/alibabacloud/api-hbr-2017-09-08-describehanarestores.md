Queries one or more SAP HANA restore jobs that meet the specified conditions.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeHanaRestores)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeHanaRestores)

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

hbr:DescribeHanaRestores

get

\*All Resources

`*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

VaultId

string

No

The ID of the backup vault.

v-000au6bq\*\*\*\*\*\*mpu

ClusterId

string

Yes

The ID of the SAP HANA instance.

cl-000b\*\*\*\*\*\*soejg

PageNumber

integer

No

The page number. Pages start from page 1. Default value: 1.

1

PageSize

integer

No

The number of entries per page. Valid values: 1 to 99. Default value: 10.\`

10

RestoreId

string

No

The ID of the restore job.

r-0007o3vqfukfe92hvf13

DatabaseName

string

No

The database name.

SYSTEMDB

BackupId

long

No

The backup ID.

1632754800158

RestoreStatus

string

No

The status of the restore job. Valid values:

-   **RUNNING**: The job is running.
-   **COMPLETE**: The job is completed.
-   **PARTIAL\_COMPLETE**: The job is partially completed.
-   **FAILED**: The job failed.
-   **CANCELED**: The job is canceled.
-   **EXPIRED**: The job timed out.

COMPLETE

ResourceGroupId

string

No

The ID of the resource group.

rg-acfm4ebtpkzx7zy

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

7DEFC897-8F05-5C05-912C-C9A9510FBFF1

Success

boolean

Indicates whether the request was successful. Valid values:

-   true
-   false

true

Code

string

The response code. The status code 200 indicates that the request was successful.

200

Message

string

The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.

successful

PageNumber

integer

The page number. Pages start from page 1. Default value: 1.

1

PageSize

integer

The number of entries per page. Valid values: 1 to 99. Default value: 10.

10

TotalCount

integer

The total number of entries returned.

19

HanaRestore

array<object>

The information about restore jobs.

HanaRestores

object

The restore job.

Status

string

The status of the restore job. Valid values:

-   **RUNNING**: The job is running.
-   **COMPLETE**: The job is completed.
-   **PARTIAL\_COMPLETE**: The job is partially completed.
-   **FAILED**: The job failed.
-   **CANCELED**: The job is canceled.
-   **EXPIRED**: The job timed out.

COMPLETE

ReachedTime

long

The point in time at which the database is restored.

1635315505

VaultId

string

The ID of the backup vault.

v-000g9acf\*\*\*\*\*\*gta

CurrentPhase

integer

The current recovery phase. This value is obtained from SAP HANA.

2

ClearLog

boolean

Indicates whether all log entries are deleted from the log area after the log entries are restored. Valid values: true and false. If the return value is false, all log entries are deleted from the log area after the log entries are restored.

true

Message

string

The details of the recovery phase.

SQL Error 448 - recovery could not be completed:

CheckAccess

boolean

Indicates whether the differential backup and log backup are validated. Valid values:

-   true: Cloud Backup checks whether the required differential backup and log backup are available before the restore job starts. If the differential backup or log backup is unavailable, Cloud Backup does not start the restore job.
-   false: Cloud Backup does not check whether the required differential backup and log backup are available before the restore job starts.

true

Mode

string

The recovery mode. Valid values:

-   **RECOVERY\_TO\_MOST\_RECENT**: The database is restored to the recently available state to which the database has been backed up.
-   **RECOVERY\_TO\_POINT\_IN\_TIME**: The database is restored to a specified point in time.
-   **RECOVERY\_TO\_SPECIFIC\_BACKUP**: The database is restored to a specified backup.
-   **RECOVERY\_TO\_LOG\_POSITION**: The database is restored to a specified log position.

RECOVERY\_TO\_SPECIFIC\_BACKUP

SystemCopy

boolean

Indicates whether the database is restored to a different instance. Valid values:

-   true: The database is restored to a different instance.
-   false: The database is restored within the same instance.

true

CurrentProgress

long

The current progress. This value is obtained from SAP HANA.

1

UseDelta

boolean

Indicates whether a differential backup or an incremental backup is used to restore the database. Valid values: true and false. If the return value is true, Cloud Backup uses a differential backup or an incremental backup to restore the database. If the return value is false, Cloud Backup uses a log backup to restore the database.

true

BackupID

long

The backup ID.

1635315505

SourceClusterId

string

The ID of the source SAP HANA instance.

cl-0000g3mvy\*\*\*\*\*\*5cj

VolumeId

integer

The ID of the volume that is restored. This parameter is returned only if the value of the Mode parameter is **RECOVERY\_TO\_LOG\_POSITION**.

0

DatabaseName

string

The database name.

BWD

Phase

string

The recovery phase.

restart

ClusterId

string

The ID of the SAP HANA instance that is restored.

cl-000923yu\*\*\*\*\*\*p00j4

DatabaseRestoreId

long

The ID of the database recovery.

1644038961030

State

string

The recovery status. This value is obtained from SAP HANA.

successful

Source

string

The name of the source system. This parameter indicates the name of the source database that is restored. Format: `<Source database name>@SID`.

PRD@H4P

MaxPhase

integer

The maximum recovery phase. This value is obtained from SAP HANA.

4

EndTime

long

The time when the restore job ends. This value is a UNIX timestamp. Unit: seconds.

1634356382

StartTime

long

The time when the restore job starts. This value is a UNIX timestamp. Unit: seconds.

1636970413

BackupPrefix

string

The backup prefix.

INC\_DATA\_BACKUP

RestoreId

string

The ID of the restore job.

r-000c1en183ayn9sesgqh

LogPosition

long

The log position to which the database is restored. This parameter is returned only if the value of the Mode parameter is **RECOVERY\_TO\_LOG\_POSITION**.

0

RecoveryPointInTime

long

The point in time to which the database is restored. This parameter is returned only if the value of the Mode parameter is **RECOVERY\_TO\_POINT\_IN\_TIME**. Cloud Backup restores the database to a state closest to the specified point in time.

1649851200

MaxProgress

long

The maximum progress. This value is obtained from SAP HANA.

1

UseCatalog

boolean

Indicates whether a catalog backup is used to restore the database. This parameter is returned only if the value of the Mode parameter is **RECOVERY\_TO\_SPECIFIC\_BACKUP**. If the return value is false, Cloud Backup finds the backup file based on the specified prefix and then restores the backup file.

false

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "7DEFC897-8F05-5C05-912C-C9A9510FBFF1",
  "Success": true,
  "Code": 200,
  "Message": "successful",
  "PageNumber": 1,
  "PageSize": 10,
  "TotalCount": 19,
  "HanaRestore": {
    "HanaRestores": [
      {
        "Status": "COMPLETE",
        "ReachedTime": 1635315505,
        "VaultId": "v-000g9acf******gta",
        "CurrentPhase": 2,
        "ClearLog": true,
        "Message": "SQL Error 448 - recovery could not be completed:",
        "CheckAccess": true,
        "Mode": "RECOVERY_TO_SPECIFIC_BACKUP",
        "SystemCopy": true,
        "CurrentProgress": 1,
        "UseDelta": true,
        "BackupID": 1635315505,
        "SourceClusterId": "cl-0000g3mvy******5cj",
        "VolumeId": 0,
        "DatabaseName": "BWD",
        "Phase": "restart",
        "ClusterId": "cl-000923yu******p00j4",
        "DatabaseRestoreId": 1644038961030,
        "State": "successful",
        "Source": "PRD@H4P",
        "MaxPhase": 4,
        "EndTime": 1634356382,
        "StartTime": 1636970413,
        "BackupPrefix": "INC_DATA_BACKUP",
        "RestoreId": "r-000c1en183ayn9sesgqh",
        "LogPosition": 0,
        "RecoveryPointInTime": 1649851200,
        "MaxProgress": 1,
        "UseCatalog": false
      }
    ]
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
