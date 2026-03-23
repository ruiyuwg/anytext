Queries the details of PolarDB clusters in a region that have backup sets.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDBClustersWithBackups)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDBClustersWithBackups)

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

polardb:DescribeDBClustersWithBackups

get

\*DBCluster

`acs:polardb:{#regionId}:{#accountId}:{#resource-type}/*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ResourceGroupId

string

No

The resource group ID.

rg-\*\*\*\*\*\*\*\*\*\*\*\*

RegionId

string

Yes

The region ID.

**Note**

Call the [DescribeRegions](/help/en/polardb/polardb-for-mysql/api-describeregions-3) operation to view details about regions.

cn-hangzhou

DBClusterIds

string

No

The ID of the cluster. You can specify multiple cluster IDs. Separate the IDs with a comma (,).

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DBClusterDescription

string

No

The cluster name. The cluster name must meet the following requirements:

-   It cannot start with `http://` or `https://`.
    
-   It must be 2 to 256 characters in length.
    

test

DBType

string

No

The database engine type. Valid values:

-   **MySQL**
    
-   **PostgreSQL**
    
-   **Oracle**
    

MySQL

IsDeleted

integer

No

Specifies whether the cluster is deleted. Valid values:

-   **0**: The cluster is not deleted.
    
-   **1**: The cluster is deleted.
    

0

PageSize

integer

No

The number of records on each page. Valid values:

-   **30**
    
-   **50**
    
-   **100**
    

Default value: 30.

30

PageNumber

integer

No

The page number. The value must be an integer that is greater than 0 and does not exceed the maximum value of the Integer data type. Default value: **1**.

1

DBVersion

string

No

The database engine version.

-   Valid values for MySQL:
    -   **5.6**
        
    -   **5.7**
        
    -   **8.0**
        
-   Valid values for PostgreSQL:
    -   **11**
        
    -   **14**
        
-   Valid values for Oracle:
    -   **11**
        
    -   **14**
        

8.0

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

F8529AA2-522F-4B30-B80B-8F7D39\*\*\*\*\*\*

PageNumber

integer

The page number.

1

PageRecordCount

integer

The number of clusters on the current page.

1

TotalRecordCount

integer

The total number of entries returned.

1

Items

object

DBCluster

array<object>

The details of the cluster.

object

DeletedTime

string

The time when the cluster was deleted.

2022-05-12T03:25:37Z

VpcId

string

The ID of the virtual private cloud (VPC).

vpc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

ExpireTime

string

The expiration time.

**Note**

This parameter is returned only for subscription clusters. An empty string is returned for pay-as-you-go clusters.

2022-09-14T16:00:00Z

Expired

string

Indicates whether the cluster has expired.

**Note**

This parameter is returned only for subscription clusters.

false

CreateTime

string

The time when the cluster was created.

2022-05-09T09:33:51Z

DBNodeClass

string

The node specifications.

polar.mysql.x4.medium

PayType

string

The billing method. Valid values:

-   **Postpaid**: pay-as-you-go.
    
-   **Prepaid**: subscription.
    

Postpaid

DBType

string

The type of the database engine.

MySQL

LockMode

string

The lock state of the cluster. Valid values:

-   **Unlock**: The cluster is not locked.
    
-   **ManualLock**: The cluster is manually locked.
    
-   **LockByExpiration**: The cluster is automatically locked due to expiration.
    

Unlock

RegionId

string

The region ID.

cn-hangzhou

DeletionLock

integer

The deletion lock status of the cluster. Valid values:

-   **0**: The cluster is not locked and can be deleted.
    
-   **1**: The cluster is locked and cannot be deleted.
    

0

DBVersion

string

The version of the database engine.

8.0

DBClusterId

string

The cluster ID.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DBClusterStatus

string

The cluster status. Valid values:

-   Creating: The cluster is being created.
    
-   Running: The cluster is running.
    
-   Deleting: The cluster is being released.
    
-   Rebooting: The cluster is restarting.
    
-   DBNodeCreating: Nodes are being added.
    
-   DBNodeDeleting: Nodes are being deleted.
    
-   ClassChanging: The node specifications are being changed.
    
-   NetAddressCreating: A network connection is being created.
    
-   NetAddressDeleting: A network connection is being deleted.
    
-   NetAddressModifying: A network connection is being modified.
    
-   Deleted: The cluster is released.
    

Running

IsDeleted

integer

Indicates whether the cluster is released. Valid values:

-   1: The cluster is released.
    
-   0: The cluster is not released.
    

1

DBClusterNetworkType

string

The network type of the cluster.

VPC

DBClusterDescription

string

The cluster name.

test

ZoneId

string

The zone ID.

cn-hangzhou-h

Engine

string

The cluster engine.

POLARDB

## Examples

Success response

`JSON` format

```
{
  "RequestId": "F8529AA2-522F-4B30-B80B-8F7D39******",
  "PageNumber": 1,
  "PageRecordCount": 1,
  "TotalRecordCount": 1,
  "Items": {
    "DBCluster": [
      {
        "DeletedTime": "2022-05-12T03:25:37Z",
        "VpcId": "vpc-******************",
        "ExpireTime": "2022-09-14T16:00:00Z",
        "Expired": "false",
        "CreateTime": "2022-05-09T09:33:51Z",
        "DBNodeClass": "polar.mysql.x4.medium",
        "PayType": "Postpaid",
        "DBType": "MySQL",
        "LockMode": "Unlock",
        "RegionId": "cn-hangzhou",
        "DeletionLock": 0,
        "DBVersion": "8.0",
        "DBClusterId": "pc-****************",
        "DBClusterStatus": "Running",
        "IsDeleted": 1,
        "DBClusterNetworkType": "VPC",
        "DBClusterDescription": "test",
        "ZoneId": "cn-hangzhou-h",
        "Engine": "POLARDB"
      }
    ]
  }
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidRegionId.Malformed

The specified parameter RegionId is not valid.

The specified RegionId parameter is invalid.

400

InvalidPageSize.Malformed

The specified parameter PageSize is not valid.

The specified PageSize parameter is invalid.

400

InvalidPageNumber.Malformed

The specified parameter PageNumber is not valid.

The specified PageNumber parameter is invalid.

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

The request failed to be processed because unknown errors, exceptions, or failures have occurred.

503

ServiceUnavailable

The request has failed due to a temporary failure of the server.

A temporary server error occurred.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeDBClustersWithBackups#workbench-doc-change-demo) for a complete list.
