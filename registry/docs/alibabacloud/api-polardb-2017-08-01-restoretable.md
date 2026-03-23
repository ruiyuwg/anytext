Restores databases or tables to a PolarDB cluster.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/RestoreTable)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/RestoreTable)

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

polardb:RestoreTable

update

\*dbcluster

`acs:polardb:{#regionId}:{#accountId}:dbcluster/{#dbclusterId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

DBClusterId

string

Yes

The cluster ID.

**Note**

Call the [DescribeDBClusters](/help/en/polardb/polardb-for-mysql/api-describedbclusters) operation to query the details of all clusters in your account.

pc-bp\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

TableMeta

string

Yes

A JSON string that specifies the destination databases and tables to restore. All values in the JSON string must be strings. For example: `[ { "tables":[ { "name":"testtb", "type":"table", "newname":"testtb_restore" } ], "name":"testdb", "type":"db", "newname":"testdb_restore" } ]`.

**Note**

Call the [DescribeMetaList](/help/en/polardb/polardb-for-mysql/api-describemetalist) operation to query the names of the databases and tables that can be restored. Then, enter the information into the example format.

\[ { "tables":\[ { "name":"testtb", "type":"table", "newname":"testtb\_restore" } \], "name":"testdb", "type":"db", "newname":"testdb\_restore" } \]

BackupId

string

No

The backup set ID.

**Note**

This parameter is required if you want to restore databases and tables from a backup set. Call the [DescribeBackups](/help/en/polardb/polardb-for-mysql/api-describebackups) operation to query backup set IDs.

111111

RestoreTime

string

No

The point in time to which you want to restore data. Specify the time in the YYYY-MM-DDThh:mmZ format. The time must be in Coordinated Universal Time (UTC).

**Note**

-   This parameter is required if you want to restore data to a specific point in time.
    
-   Data can be restored to any point in time within the last seven days.
    

2020-10-04T01:40:00Z

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

0C47508C-9DC8-455B-985E-2F2FA8\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "0C47508C-9DC8-455B-985E-2F2FA8******"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidRestoreType.Format

Specified restore type is not valid.

The specified restore type is invalid.

400

InvalidRestoreTime.Format

Specified restore time is not valid.

The specified restoration time is invalid.

400

InvalidBackupSetID.NotFound

Specified backup set ID does not exist.

400

IncorrectBackupSetState

Current backup set state does not support operations.

400

InvalidDBName.Duplicate

Specified DB name already exists in the This instance.

The specified DBName parameter already exists in the cluster.

400

InvalidParameters.Format

Specified parameters is not valid.

The specified parameters are invalid.

400

InsufficientResourceCapacity

There is insufficient capacity available for the requested instance.

Insufficient storage capacity for the specified cluster.

400

InvalidRestoreType.NotFound

At least one of BackupId and RestoreTime is malformed.

The format of the specified BackupId or RestoreTime parameter is invalid.

400

MissingUserID

The request is missing a user\_id parameter.

You must specify the UserID parameter in the request.

400

MissingUID

The request is missing a uid parameter.

You must specify the UID parameter in the request.

403

OperationDenied.ArchiveRestore

Archive instance does not support restore table.

Archive Database does not support the database and table restoration feature.

404

InvalidDBCluster.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

404

InvalidBackup.NotFound

The available backup does not exist in recovery time.

The specified backup does not exist within the time range for restoration.

404

InvalidDBClusterId.NotFound

The DBInstanceId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/RestoreTable#workbench-doc-change-demo) for a complete list.
