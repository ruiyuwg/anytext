Continues the current migration or upgrade task.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/ContinueDBClusterMigration)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/ContinueDBClusterMigration)

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

polardb:ContinueDBClusterMigration

get

\*DBCluster

`acs:polardb:{#regionId}:{#accountId}:dbcluster/{#dbclusterId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RegionId

string

No

The ID of the region.

**Note**

For more information, see [DescribeRegions](/help/en/polardb/polardb-for-mysql/api-describeregions-3).

cn-hangzhou

DBClusterId

string

Yes

The ID of the cluster.

**Note**

Call the [DescribeDBClusters](/help/en/polardb/polardb-for-mysql/api-describedbclusters) operation to query information about all clusters in the destination region, including cluster IDs.

pc-k2ju1lnl5i4ohv501

ForceSwitch

string

No

Specifies whether to skip the current error. Valid values:

**true**: Skips the error.

**false**: Does not skip the error.

false

ResourceGroupId

string

No

The ID of the resource group.

rg-\*\*\*\*\*\*\*\*\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

D2056BBE-FF76-5825-AB63-5CB1ABB46218

## Examples

Success response

`JSON` format

```
{
  "RequestId": "D2056BBE-FF76-5825-AB63-5CB1ABB46218"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

EngineMigrationStatus.NotSurpport

Specified engine migration status does not support.

The current engine migration status does not support this operation

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/ContinueDBClusterMigration#workbench-doc-change-demo) for a complete list.
