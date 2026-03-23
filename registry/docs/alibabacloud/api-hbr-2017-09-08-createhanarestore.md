Creates a restore job for an SAP HANA database.

## Operation description

If you call this operation to restore a database, the database is restored to a specified state. Proceed with caution. For more information, see [Restore databases to an SAP HANA instance](/help/en/cloud-backup/user-guide/restore-databases-to-an-sap-hana-instance).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/hbr/2017-09-08/CreateHanaRestore)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/hbr/2017-09-08/CreateHanaRestore)

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

hbr:CreateHanaRestore

create

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

v-000\*\*\*\*\*\*\*\*\*\*\*\*yqr

ClusterId

string

Yes

The ID of the SAP HANA instance that you want to restore.

cl-000fbrs5\*\*\*\*\*\*ka9w

DatabaseName

string

Yes

The name of the database that you want to restore.

TS2

BackupId

long

Yes

The ID of the backup.

1645628400235

Mode

string

Yes

The recovery mode. Valid values:

-   **RECOVERY\_TO\_MOST\_RECENT**: restores the database to the recently available state to which the database has been backed up.
-   **RECOVERY\_TO\_POINT\_IN\_TIME**: restores the database to a specified point in time.
-   **RECOVERY\_TO\_SPECIFIC\_BACKUP**: restores the database to a specified backup.
-   **RECOVERY\_TO\_LOG\_POSITION**: restores the database to a specified log position.

RECOVERY\_TO\_POINT\_IN\_TIME

RecoveryPointInTime

long

No

The point in time to which you want to restore the database. This parameter is valid only if you set the Mode parameter to **RECOVERY\_TO\_POINT\_IN\_TIME**. HBR restores the database to a state closest to the specified point in time.

1635315505

LogPosition

long

No

The log position to which you want to restore the database. This parameter is valid only if you set the Mode parameter to **RECOVERY\_TO\_LOG\_POSITION**.

0

VolumeId

integer

No

The ID of the volume that you want to restore. This parameter is valid only if you set the Mode parameter to **RECOVERY\_TO\_LOG\_POSITION**.

0

UseCatalog

boolean

No

Specifies whether to use a catalog backup to restore the database. This parameter is required only if you set the Mode parameter to **RECOVERY\_TO\_SPECIFIC\_BACKUP**. If you turn off Use Catalog, you must specify the prefix of a backup file. Then, Cloud Backup finds the backup file based on the specified prefix and restores the backup file.

false

BackupPrefix

string

Yes

The backup prefix.

COMPLETE\_DATA\_BACKUP\_2022\_05\_02\_15\_39

SystemCopy

boolean

No

Specifies whether to restore the database to a different instance.

false

Source

string

No

The name of the source system. This parameter specifies the name of the source database that you want to restore. You must set the parameter in the `<Source database name>@SID` format.

HNP@HNP

SourceClusterId

string

No

The ID of the source SAP HANA instance.

cl-000ii8tzv\*\*\*\*\*\*xm0t

ClearLog

boolean

No

Specifies whether to delete all log entries from the log area after the log entries are restored. Valid values: true and false. If you set the value to false, all log entries are deleted from the log area after the log entries are restored.

false

CheckAccess

boolean

No

Specifies whether to validate the differential backup and log backup. Valid values: true and false. If you set the value to true, HBR checks whether the required differential backup and log backup are available before the restore job starts. If the differential backup or log backup is unavailable, HBR does not start the restore job.

false

UseDelta

boolean

No

Specifies whether to use a differential backup or an incremental backup to restore the database. Valid values: true and false. If you want to use a differential backup or an incremental backup to restore the database, set the value to true. If you set the value to false, HBR uses a log backup to restore the database.

true

SidAdmin

string

No

The SID admin account that is created by SAP HANA.

DB

MasterClientId

string

No

The ID of the client where the primary node of the SAP HANA resides.

c-000ii8tzv\*\*\*\*\*\*\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

Code

string

The HTTP status code. The status code 200 indicates that the call is successful.

200

Message

string

The message that is returned. If the call is successful, "successful" is returned. If the call fails, an error message is returned.

successful

RequestId

string

The ID of the request.

EEC65C22-2152-5E31-8AD6-D6CBF1BFF49F

Success

boolean

Indicates whether the call is successful. Valid values:

-   true: The call is successful.
-   false: The call fails.

true

RestoreId

string

The ID of the restore job.

hr-000fb9bz190p1rse6jwv

## Examples

Sample success responses

`JSON`format

```
{
  "Code": 200,
  "Message": "successful",
  "RequestId": "EEC65C22-2152-5E31-8AD6-D6CBF1BFF49F",
  "Success": true,
  "RestoreId": "hr-000fb9bz190p1rse6jwv"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
