Cancels or completes the migration task that upgrades an RDS cluster to a PolarDB cluster.

## Operation description

-   You can call this operation to cancel the migration task before data migration.
-   You can call this operation to perform the migration task after data migration.

**Note** Before you call this operation, ensure that a one-click upgrade task has been created for the cluster. You can call the [CreateDBCluster](/help/en/polardb/polardb-for-mysql/api-createdbcluster) operation to create an upgrade task. Set the **CreationOption** parameter to **MigrationFromRDS**. For more information, see [Create a PolarDB for MySQL cluster by using the Migration from RDS method](/help/en/polardb/polardb-for-mysql/user-guide/overview-43).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/polardb/2017-08-01/CloseDBClusterMigration)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/polardb/2017-08-01/CloseDBClusterMigration)

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

polardb:CloseDBClusterMigration

update

\*dbcluster

`acs:polardb:{#regionId}:{#accountId}:dbcluster/{#dbclusterId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

DBClusterId

string

Yes

The ID of the cluster.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

ContinueEnableBinlog

boolean

No

Specifies whether to continue to enable binary logging. Valid values:

-   **true**: continues to enable binary logging.
-   **false**: disables binary logging.

Default value: **true**.

**Note** If binary logging is disabled, your PolarDB cluster is restarted.

true

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

3AA69096-757C-4647-B36C-29EBC2\*\*\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "3AA69096-757C-4647-B36C-29EBC2******"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

404

InvalidDBClusterId.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-01-23

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/polardb/2017-08-01/CloseDBClusterMigration?updateTime=2024-01-23#workbench-doc-change-demo)
