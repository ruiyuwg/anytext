Switches or rolls back a migration task for a one-click upgrade from RDS to PolarDB.

## Operation description

-   If this operation is called before the switchover, it performs a switchover.
    
-   If this operation is called after the switchover is complete, it performs a rollback.
    

**Note**

A one-click upgrade task must be created for the cluster before you call this operation. To create the task, call the [CreateDBCluster](/help/en/polardb/polardb-for-mysql/api-createdbcluster) operation and set the **CreationOption** parameter to **MigrationFromRDS**. For more information, see [One-click upgrade from RDS MySQL to PolarDB for MySQL](/help/en/polardb/polardb-for-mysql/user-guide/overview-43).

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/ModifyDBClusterMigration)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/ModifyDBClusterMigration)

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

polardb:ModifyDBClusterMigration

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

The ID of the PolarDB cluster.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

SourceRDSDBInstanceId

string

Yes

The ID of the source RDS instance.

rm-\*\*\*\*\*\*\*\*\*\*\*\*

NewMasterInstanceId

string

Yes

The ID of the new instance or cluster. Valid values:

-   Before the switch, enter the PolarDB cluster ID to perform a switch.
    
-   After the switch, enter the RDS instance ID to perform a rollback.
    

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

SwapConnectionString

string

No

Specifies whether to switch the endpoint. Valid values:

-   **true**: Switches the endpoint. The application can connect to the database without changing its connection configuration.
    
-   **false**: Does not switch the endpoint. The application must be changed to use the new PolarDB endpoint.
    

Default value: **false**.

false

ConnectionStrings

string

No

The specific endpoints to be switched. The value is a JSON string that specifies the endpoints to be swapped.

**Note**

This parameter is valid only when SwapConnectionString is set to true.

{"rm-2ze73el581cs\*\*\*\*\*.mysql.pre.rds.aliyuncs.com":"pc-2ze8200s298e\*\*\*\*\*.mysql.polardb.pre.rds.aliyuncs.com","rm-2ze73el581cs86\*\*\*\*\*.mysql.pre.rds.aliyuncs.com":"test-p\*\*\*\*\*.mysql.polardb.pre.rds.aliyuncs.com"}

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

A1B303A5-653F-4AEE-A598-023FF9\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "A1B303A5-653F-4AEE-A598-023FF9******"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidConnectionString.Malformed

The specified parameter ConnectionString is not valid.

The specified ConnectionString parameter is invalid.

404

InvalidDBCluster.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

404

InvalidDBClusterId.NotFound

The DBInstanceId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/ModifyDBClusterMigration#workbench-doc-change-demo) for a complete list.
