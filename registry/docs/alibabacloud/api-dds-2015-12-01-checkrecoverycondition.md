Queries whether the data of an ApsaraDB for MongoDB instance can be restored.

## Operation description

This operation is applicable to replica set instances and sharded cluster instances.

**Note** After you call this operation to confirm that the data of the instance can be restored, you can call the [CreateDBInstance](/help/en/mongodb/api-createdbinstance) operation to restore data to a new instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Dds/2015-12-01/CheckRecoveryCondition)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Dds/2015-12-01/CheckRecoveryCondition)

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

dds:CheckRecoveryCondition

get

\*Instance

`acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

SourceDBInstance

string

Yes

The ID of the source instance.

dds-bp1378\*\*\*\*

DatabaseNames

string

No

The name of the source database. The value is a JSON array.

**Note** If you do not specify this parameter, all databases are restored by default.

\["db1","db2"\]

RestoreTime

string

No

The point in time to which the instance is restored. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

**Note**-   The time can be a point in time within the past seven days. The time must be earlier than the current time, but later than the time when the instance was created.
-   You must specify one of the RestoreTime and **BackupId** parameters.

2022-08-22T08:00:00Z

BackupId

string

No

The backup ID.

**Note**-   You can call the [DescribeBackups](/help/en/mongodb/api-describebackups) operation to query the backup ID.
-   You must specify one of the **RestoreTime** and BackupId parameters.
-   This parameter is not applicable to sharded cluster instances.

5664\*\*\*\*

ResourceGroupId

string

No

The ID of the resource group to which the instance belongs.

sg-bp179\*\*\*\*

SrcRegion

string

No

The region where the source instance resides.

**Note**-   This parameter is required when you set the RestoreType parameter to 2.
-   This parameter is required when you set the RestoreType parameter to 3.

cn-beijing

DestRegion

string

No

The region of the backup set used for the cross-region backup and restoration.

**Note** This parameter is required when you set the RestoreType parameter to 3.

cn-hangzhou

RestoreType

string

No

The restoration type.

**Note**-   0: The data of the source instance is restored to a new instance in the same region.
-   1: The data of the source instance is restored to an earlier point in time.
-   2: The data of a deleted instance is restored to a new instance from the backup set.
-   3: The data of a deleted instance is restored to a new instance in another region from the backup set.

0

InstanceType

string

No

The instance architecture. Valid values:

-   replicate
-   sharding

**Note**-   This parameter is required when you set the RestoreType parameter to 2.
-   This parameter is required when you set the RestoreType parameter to 3.

replicate

EngineVersion

string

No

The database engine version of the instance.

-   **6.0**
-   **5.0**
-   **4.4**
-   **4.2**
-   **4.0**
-   **3.4**

4.2

## Response parameters

Parameter

Type

Description

Example

object

The information that is returned.

RequestId

string

The request ID.

D563A3E7-6010-45FE-A0CD-9283414C9657

DBInstanceName

string

The instance ID

dds-bp1378\*\*\*\*

IsValid

boolean

Indicates whether the data of the instance can be restored. Valid values:

-   **true**: The data of the instance can be restored.
-   **false**: The data of the instance cannot be restored.

true

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "D563A3E7-6010-45FE-A0CD-9283414C9657",
  "DBInstanceName": "dds-bp1378****",
  "IsValid": true
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidMeta.WrongFormat

Meta information is wrong formatter.

\-

400

InvalidRestoreTime.Format

Specified restore time is not valid.

The specified RestoreTime value is invalid.

403

InvalidDBName

The specified database name is not allowed.

The specified database name is invalid.

403

InvalidMeta.TooLarge

Meta information is too large.

The metadata is too large.

403

SingleDBRestore.BackupSetNotSupport

This backup set do not support this operation.

Single-database recovery is not supported for the specified time point or backup file.

403

IncorrectDBInstanceType

Current DB instance type does not support this operation.

This operation is not supported for the specified instance type.

403

IncorrectEngineVersion

Current engine version does not support operations.

\-

403

InvalidBackupLogStatus

Current backup log enable status does not support this operation.

The operation is not supported when log backup is enabled.

403

IncorrectBackupSetState

Current backup set state does not support operations..

\-

404

InvalidBackupSetID.NotFound

Specifiedbackup set ID does not exist.

\-

404

InvalidBackup.NotFound

Theavailable backup does not exist in recovery time.

No backup set is available during the specified recovery period.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Dds/2015-12-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-10-29

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Dds/2015-12-01/CheckRecoveryCondition?updateTime=2024-10-29#workbench-doc-change-demo)
