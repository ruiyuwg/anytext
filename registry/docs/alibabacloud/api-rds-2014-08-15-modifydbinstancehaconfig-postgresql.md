Changes the high availability (HA) and data replication mode of an instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/ModifyDBInstanceHAConfig)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/ModifyDBInstanceHAConfig)

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

rds:ModifyDBInstanceHAConfig

update

\*DBInstance

`acs:rds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}`

-   rds:ResourceTag

none

## Request parameters

Parameter

Type

Required

Description

Example

SyncMode

string

Yes

The data replication mode of the instance. For more information, see [Data replication mode](/help/en/rds/apsaradb-rds-for-mysql/change-the-data-replication-mode-of-an-apsaradb-rds-for-mysql-instance).

-   Semi-sync: the semi-synchronous mode.
-   Sync: the synchronous mode.
-   gAsyncg: the asynchronous mode.
-   Mgr: the MySQL group replication (MGR) mode. This mode is available only for the China site (aliyun.com).

**Note** This parameter is not supported for instances that run SQL Server 2017 on RDS Cluster Edition.

Sync

HAMode

string

Yes

The HA mode of the instance.

-   RPO: Data consistency is preferred. The instance ensures data reliability to minimize data losses. If you have high requirements on data consistency, select this mode.
-   RTO: Service availability is preferred. The instance restores the database service at the earliest opportunity to ensure service availability. If you have high requirements for service availability, select this mode.

RPO

DbInstanceId

string

Yes

The ID of the instance.

rm-uf6wjk543xxxxx

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

D4D4BE8A-DD46-440A-BFCD-EE31DA81C9DD

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "D4D4BE8A-DD46-440A-BFCD-EE31DA81C9DD"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

403

GroupReplicationNotSupport.InvalidEngineVersion

Group Replication requires the instance engine version to be 8.0.

\-

403

GroupReplicationNotSupport.InvalidNodeClassCode

Group Replication requires the ClassCode of each node to be consistent.

\-

403

GroupReplicationNotSupport.InvalidNodeNum

Group Replication is not supported, the number of nodes must be an odd number greater than or equal to 3.

\-

403

GroupReplicationNotSupport.InvalidXengine

Group Replication is not supported because the instance has xengine tables.

\-

403

GroupReplicationNotSupport.MemoryTooSmall

Group Replication is not supported because the memory is too small.

\-

403

IncorrectMinorVersion

Current engine minor version does not support operations.

This operation is not supported for the current minor engine version.

403

GroupReplicationNotSupport.TableWithoutPrimaryKey

Group Replication is not supported because the instance exists table has no primary key.

The instance has tables without primary keys and does not support MySQL group replication (MGR).

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2022-06-23

API Description Update

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBInstanceHAConfig?updateTime=2022-06-23#workbench-doc-change-demo)
