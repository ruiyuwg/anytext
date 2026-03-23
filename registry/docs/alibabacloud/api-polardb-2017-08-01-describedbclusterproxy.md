Queries the details of a database cluster proxy.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDBClusterProxy)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDBClusterProxy)

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

polardb:DescribeDBClusterProxy

get

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

The cluster ID.

pc-2zek76tdi709m6mf4

RegionId

string

No

The region ID.

**Note**

For more information, see [DescribeRegions](/help/en/polardb/polardb-for-mysql/api-describeregions-3).

cn-hangzhou

ResourceGroupId

string

No

The resource group ID.

rg-acfm4ifnqnun3zq

## Response elements

**Element**

**Type**

**Description**

**Example**

object

ChildInstances

array<object>

A list of network instances loaded by the Cloud Enterprise Network (CEN) instance.

object

The details of a network instance.

DBNodeClass

string

The node specifications. For more information, see the following documents:

-   PolarDB for MySQL: [Compute node specifications](/help/en/polardb/polardb-for-mysql/specifications-of-compute-nodes).
    
-   PolarDB for Oracle: [Compute node specifications](/help/en/polardb/polardb-for-oracle/specifications-of-compute-nodes-2).
    
-   PolarDB for PostgreSQL: [Compute node specifications](/help/en/polardb/polardb-for-postgresql/enterprise-edition-node-specifications-3).
    

polar.mysql.g4.medium

DBNodeIP

string

The private IP address of the database cluster node.

10.\*.\*10

DBNodeId

string

The ID of the database cluster node.

pi-wz97h479y364g9du7

DBNodePort

string

The port of the database cluster node.

2450

DBNodeStatus

string

The status of the node. Valid values:

-   **Creating**: The node is being created.
    
-   **Running**: The node is running.
    
-   **Deleting**: The node is being deleted.
    
-   **Rebooting**: The node is being restarted.
    
-   **DBNodeCreating**: A node is being added.
    
-   **DBNodeDeleting**: A node is being deleted.
    
-   **ClassChanging**: The node specifications are being changed.
    
-   **NetAddressCreating**: A network connection is being created.
    
-   **NetAddressDeleting**: A network connection is being deleted.
    
-   **NetAddressModifying**: A network connection is being modified.
    
-   **MinorVersionUpgrading**: The minor version is being upgraded.
    
-   **Maintaining**: The instance is being maintained.
    
-   **Switching**: A switchover is in progress.
    

Running

HostName

string

The hostname.

sh-lsf01-144-37

DBProxyClusterId

string

The proxy cluster ID.

pe-xxxxxxxxx

DBProxyClusterNum

integer

The number of proxy nodes.

2

DBProxyClusterStatus

string

The status of the proxy cluster.

ClassChanging

RequestId

string

The request ID.

30E11ED2-C922-5B96-BCC6-11EE8C484AC6

## Examples

Success response

`JSON` format

```
{
  "ChildInstances": [
    {
      "DBNodeClass": "polar.mysql.g4.medium",
      "DBNodeIP": "10.*.*10",
      "DBNodeId": "pi-wz97h479y364g9du7",
      "DBNodePort": "2450",
      "DBNodeStatus": "Running",
      "HostName": "sh-lsf01-144-37"
    }
  ],
  "DBProxyClusterId": "pe-xxxxxxxxx",
  "DBProxyClusterNum": 2,
  "DBProxyClusterStatus": "ClassChanging",
  "RequestId": "30E11ED2-C922-5B96-BCC6-11EE8C484AC6"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

404

InvalidDBCluster.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeDBClusterProxy#workbench-doc-change-demo) for a complete list.
