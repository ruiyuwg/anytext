Lists the PolarDB clusters in MyBase.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDBClustersZonal)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDBClustersZonal)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request syntax

```
GET  HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RegionId

string

Yes

The region ID.

cn-hangzhou

DBClusterIds

string

No

The cluster ID. To specify multiple cluster IDs, separate them with commas (,).

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DBClusterDescription

string

No

The description of the cluster. Fuzzy search is supported.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

ConnectionString

string

No

The database endpoint.

\*\*\*\*\*\*\*\*.rwlb.polardb-pg-public.rds.aliyuncs.com

DBClusterStatus

string

No

The status of the cluster.

Running

DBType

string

No

The database type. Valid values:

-   MySQL
    
-   PostgreSQL
    
-   Oracle
    

MySQL

DescribeType

string

No

The query mode. Set the value to \`Simple\`. In this mode, only the basic metadata of the clusters is returned.

Simple

DBVersion

string

No

The database version.

5.6

RecentCreationInterval

integer

No

Filters for clusters created in the last N days. Valid values: 0 to 15.

7

RecentExpirationInterval

integer

No

Filters for clusters that expire in N days. Valid values: 0 to 15.

6

Expired

string

No

Specifies whether the cluster has expired. Valid values:

-   true
    
-   false
    

true

PageSize

integer

No

The number of entries to return on each page. Valid values: 30, 50, and 100.

Default value: 30.

30

PageNumber

integer

No

The page number. The value must be an integer that is greater than 0 and does not exceed the maximum value of the Integer data type. Default value: 1.

10

ResourceGroupId

string

No

The resource group ID.

rg-\*\*\*\*\*\*\*\*\*\*

Tag

array<object>

No

The list of tags.

object

No

Value

string

No

The value of the tag key.

5.6

Key

string

No

The key of tag \`n\`. You can filter clusters by specifying up to 20 tags. The \`n\` must be a unique and consecutive integer that starts from 1. \`Tag.n.Key\` corresponds to \`Tag.n.Value\`.

MySQL

PayType

string

No

The billing method. Valid values:

-   Postpaid: pay-as-you-go
    
-   Prepaid: subscription
    

Postpaid

DBNodeIds

string

No

The node ID. You can specify multiple node IDs. Separate them with commas (,).

pi-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

CloudProvider

string

No

The cloud service provider.

AlibabaCloud

MaxResults

integer

No

The maximum number of entries to return for the current request. Default value: 10.

10

NextToken

string

No

A token used to retrieve the next page of results. Set this parameter to the \`NextToken\` value returned from the previous API call. You do not need to specify this parameter for the first call.

212db86sca4384811e0b5e8707e\*\*\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

TotalRecordCount

integer

The total number of records.

16

PageRecordCount

integer

The number of clusters on the current page.

5

RequestId

string

The request ID.

9B7BFB11-C077-4FE3-B051-F69CEB\*\*\*\*\*\*

PageNumber

integer

The page number.

12

Items

array<object>

The list of clusters.

object

Category

string

The Cluster Edition. The following editions are supported:

-   Normal: Cluster Edition
    
-   Basic: single node
    
-   Archive: X-Engine
    
-   NormalMultimaster: Multi-master Cluster (Database/Table)
    

Normal

DBClusterId

string

The cluster ID.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DBType

string

The database type.

MySQL

CentralControlRegionId

string

The ID of the central control region.

cn-beijing

DBVersion

string

The database version.

5.6

CloudProvider

string

The cloud service provider.

ENS

Tags

array<object>

The list of tags.

object

Value

string

The tag value.

5.6

Key

string

The tag key.

MySQL

StorageType

string

The storage class of the Standard Edition cluster. Valid values:

-   essdpl0
    
-   essdpl1
    
-   essdpl2
    
-   essdpl3
    
-   essdautopl
    

essdautopl

ZoneId

string

The zone ID.

cn-hangzhou-i

DBClusterStatus

string

The status of the cluster.

Running

CreateTime

string

The creation time.

2020-08-14T05:58:42Z

DBClusterDescription

string

The description of the cluster.

GDN-1

Expired

string

Indicates whether the cluster has expired. Valid values:

-   true
    
-   false
    

false

PayType

string

The billing method. Valid values:

-   Postpaid: pay-as-you-go.
    
-   Prepaid: subscription.
    

Prepaid

LockMode

string

The lock state of the cluster. Valid values:

-   Unlock: Normal.
    
-   ManualLock: The cluster is manually locked.
    
-   LockByExpiration: The cluster is automatically locked upon expiration.
    

Unlock

VswitchId

string

The virtual switch ID.

vsw-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

StrictConsistency

string

Indicates whether strong consistency is enabled for data across multiple zones. Valid values:

-   **ON**: Strong consistency is enabled. This applies to Standard Edition clusters that are deployed in three zones.
    
-   **OFF**: Strong consistency is not enabled.
    

ON

DBNodeClass

string

The node specifications.

polar.mysql.g1.tiny.c

StorageUsed

integer

The used storage space of the cluster. Unit: bytes.

3009413120

ENSRegionId

string

The ENS region ID.

sg-singapore-9

DBNodeNumber

integer

The number of nodes.

2

VpcId

string

The ID of the virtual private cloud (VPC).

vpc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

StorageSpace

integer

The storage capacity of the instance.

10

ServerlessType

string

The Serverless type. \`**AgileServerless**\` indicates that the cluster is a Serverless cluster. An empty value indicates that the cluster is a common cluster.

AgileServerless

AiType

string

The AI node type. Valid values:

-   SearchNode: search node
    
-   DLNode: AI node
    

SearchNode

CpuCores

string

The number of CPU cores.

1

SubCategory

string

The specification type of the compute node. Valid values:

-   **Exclusive**: Dedicated
    
-   **General**: General-purpose
    

Exclusive

ExpireTime

string

The expiration time of the cluster.

**Note**

This parameter is returned only for **Prepaid** (subscription) clusters. For **Postpaid** (pay-as-you-go) clusters, this parameter is empty.

2022-09-14T16:00:00Z

MaxResults

integer

The maximum number of entries returned for the current request. Default value: 10.

10

NextToken

string

The token to retrieve the next page of results. If more results are available, this parameter is returned. To retrieve the next page, include this token in your next request. If all results have been returned, this parameter is not returned.

212db86sca4384811e0b5e8707e\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "TotalRecordCount": 16,
  "PageRecordCount": 5,
  "RequestId": "9B7BFB11-C077-4FE3-B051-F69CEB******",
  "PageNumber": 12,
  "Items": [
    {
      "Category": "Normal",
      "DBClusterId": "pc-****************",
      "DBType": "MySQL",
      "CentralControlRegionId": "cn-beijing",
      "DBVersion": "5.6",
      "CloudProvider": "ENS",
      "Tags": [
        {
          "Value": "5.6",
          "Key": "MySQL"
        }
      ],
      "StorageType": "essdautopl",
      "ZoneId": "cn-hangzhou-i",
      "DBClusterStatus": "Running",
      "CreateTime": "2020-08-14T05:58:42Z",
      "DBClusterDescription": "GDN-1",
      "Expired": "false",
      "PayType": "Prepaid",
      "LockMode": "Unlock",
      "VswitchId": "vsw-***************",
      "StrictConsistency": "ON",
      "DBNodeClass": "polar.mysql.g1.tiny.c",
      "StorageUsed": 3009413120,
      "ENSRegionId": "sg-singapore-9",
      "DBNodeNumber": 2,
      "VpcId": "vpc-****************",
      "StorageSpace": 10,
      "ServerlessType": "AgileServerless",
      "AiType": "SearchNode",
      "CpuCores": "1",
      "SubCategory": "Exclusive",
      "ExpireTime": "2022-09-14T16:00:00Z"
    }
  ],
  "MaxResults": 10,
  "NextToken": "212db86sca4384811e0b5e8707e******"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeDBClustersZonal#workbench-doc-change-demo) for a complete list.
