Queries one or more SAP HANA backups that meet the specified conditions.

## Operation description

After you call the DescribeHanaBackupsAsync operation to query the SAP HANA backups that meet the specified conditions, call the DescribeTask operation to query the final result.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeHanaBackupsAsync)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeHanaBackupsAsync)

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

hbr:DescribeHanaBackupsAsync

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

v-000270c\*\*\*\*\*\*pi81

ClusterId

string

Yes

The ID of the SAP HANA instance.

cl-00098\*\*\*\*\*\*yuqvu

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

DatabaseName

string

No

The database name.

BPD

Mode

string

No

The recovery mode. Valid values:

-   **RECOVERY\_TO\_MOST\_RECENT**: restores the database to the recently available state to which the database has been backed up.
-   **RECOVERY\_TO\_POINT\_IN\_TIME**: restores the database to a specified point in time.
-   **RECOVERY\_TO\_SPECIFIC\_BACKUP**: restores the database to a specified backup.
-   **RECOVERY\_TO\_LOG\_POSITION**: restores the database to a specified log position.

RECOVERY\_TO\_SPECIFIC\_BACKUP

RecoveryPointInTime

long

No

The point in time to which you want to restore the database. This parameter is valid only if you set the Mode parameter to **RECOVERY\_TO\_POINT\_IN\_TIME**. Cloud Backup restores the database to a state closest to the specified point in time.

1649851200

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

SystemCopy

boolean

No

Specifies whether to restore the database to a different instance.

-   true: restores the database to a different instance.
-   false: restores the database within the same instance.

true

Source

string

No

The name of the source system. This parameter specifies the name of the source database that you want to restore. You must set the parameter in the `<Source database name>@SID` format.

P01@HP1

SourceClusterId

string

No

The ID of the source SAP HANA instance.

cl-0000g3m\*\*\*\*\*\*5cj

IncludeDifferential

boolean

No

Specifies whether to include differential backups in the query results. Valid values:

-   true: includes differential backups.
-   false: excludes differential backups.

false

IncludeIncremental

boolean

No

Specifies whether to include incremental backups in the query results. Valid values:

-   true: includes incremental backups.
-   false: excludes incremental backups.

true

IncludeLog

boolean

No

Specifies whether to include log backups in the query results. Valid values:

-   true: includes log backups.
-   false: excludes log backups.

true

UseBackint

boolean

No

Specifies whether Backint is used. Valid values:

-   true: Backint is used.
-   false: Backint is not used.

false

ResourceGroupId

string

No

The ID of the resource group.

rg-acfmz7mced2ldhy

## Response parameters

Parameter

Type

Description

Example

object

Code

string

The response code. The status code 200 indicates that the request was successful.

200

Message

string

The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.

successful

RequestId

string

The request ID.

31F97233-8563-563D-8880-914B00EEA928

TaskId

string

The ID of the asynchronous job. You can call the DescribeTask operation to query the execution result of an asynchronous job.

t-0006xmbplrqebt9dhkth

Success

boolean

Indicates whether the request was successful. Valid values:

-   true
-   false

true

## Examples

Sample success responses

`JSON`format

```
{
  "Code": 200,
  "Message": "successful",
  "RequestId": "31F97233-8563-563D-8880-914B00EEA928",
  "TaskId": "t-0006xmbplrqebt9dhkth",
  "Success": true
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
