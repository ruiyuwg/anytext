Deletes a DBLink from a PolarDB for PostgreSQL (Compatible with Oracle) cluster.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DeleteDBLink)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DeleteDBLink)

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

polardb:DeleteDBLink

delete

\*DBCluster

`acs:polardb:{#regionId}:{#accountId}:dbcluster/{#DbClusterId}`

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

The ID of the source cluster that contains the DBLink you want to delete.

**Note**

Call the [DescribeDBClusters](/help/en/polardb/polardb-for-oracle/api-describedbclusters-2) operation to view the list of PolarDB clusters.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DBLinkName

string

Yes

The name of the DBLink to delete.

dblink\_test

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

F9F1CB1A-B1D5-4EF5-A53A-\*\*\*\*\*\*\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "F9F1CB1A-B1D5-4EF5-A53A-************"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

403

OperationDenied.DBClusterDeletionLock

The operation is not permitted due to the deletion lock of cluster.

This operation is not supported while a deletion lock exists in the cluster.

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

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DeleteDBLink#workbench-doc-change-demo) for a complete list.
