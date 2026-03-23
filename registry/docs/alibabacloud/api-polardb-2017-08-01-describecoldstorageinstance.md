Queries the details of cold storage instances.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeColdStorageInstance)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeColdStorageInstance)

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

polardb:DescribeColdStorageInstance

get

\*All Resource

`*`

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

No

The ID of the PolarDB cluster.

pc-wz9062015ly7526jc

NextToken

string

No

A token to retrieve the next page of results. Set this parameter to the \`NextToken\` value from a previous call. You do not need to specify this parameter for the first call.

c2FpXzIwMjIwNjI5X2Jhay9zYWlfc3VtbWVyX3RyZWFzdXJlX3Bvb2xfbG9nLkNTVg==

TableName

string

No

The name of the data table.

account\_log

DBName

string

No

The name of the database.

test\_db

EngineType

string

No

The type of the supported engine. The return value is the sum of the values of the supported engine types.

-   1: Search engine
    
-   2: LindormTSDB
    
-   4: LindormTable
    
-   8: File engine
    

**Note**

For example, if \`EngineType\` is 15 (8 + 4 + 2 + 1), the instance supports the search engine, LindormTSDB, LindormTable, and file engine. If \`EngineType\` is 6 (4 + 2), the instance supports LindormTSDB and LindormTable.

2

RegionId

string

No

The region ID.

**Note**

-   For more information, see [DescribeRegions](/help/en/polardb/polardb-for-mysql/api-describeregions-3).
    

-   If you do not specify this parameter, the operation queries scheduled tasks in all regions within your account.
    

cn-hangzhou

MaxResults

integer

No

-   If you do not specify the **MaxResults** parameter, the query is not paged. The value of the **MaxResults** parameter in the response indicates the total number of entries.
    
-   If you specify the **MaxResults** parameter, the query is paged. **MaxResults** specifies the number of entries to return on each page. Valid values: **1** to **100**. The value of the **MaxResults** parameter in the response indicates the number of entries on the current page. The recommended value is **20**.
    

50

ExpireTime

integer

No

The expiration time of the cluster. Note: This parameter is returned only for subscription clusters. An empty value is returned for pay-as-you-go clusters.

2020-11-14T16:00:00Z

PageNumber

string

No

The page number.

1

PageSize

string

No

The number of entries per page.

1

ObjectType

string

No

The object type. Valid values: \`TABLE\`, \`PARTITION\_TABLE\`, and \`LOB\`.

TABLE

## Response elements

**Element**

**Type**

**Description**

**Example**

object

PageRecordCount

integer

The number of entries on the current page.

1

RequestId

string

The request ID.

C7A8EA8E-A140-5226-90D7-5BCB304D3DB6

NextToken

string

The token to retrieve the next page of results. If this parameter is not returned, all results have been returned.

c2FpXzIwMjIwNjI5X2Jhay9zYWlfc3VtbWVyX3RyZWFzdXJlX3Bvb2xfbG9nLkNTVg==

OssClusterEnabled

string

Indicates whether the OSS bucket is enabled.

-   **true**: enabled
    
-   **false**: disabled
    

true

SupportOssCluster

string

Indicates whether the cluster supports cold storage. If the cluster does not support cold storage, the switch is not displayed on the console.

true

ObjectType

string

The object type.

TABLE

MaxResults

integer

The maximum number of entries returned. Default value: 10.

1000

PageSize

integer

The number of entries per page.

30

PageNumber

integer

The page number.

1

TotalRecord

integer

The total number of entries.

1

Tables

array<object>

The list of cold storage instances.

array<object>

A cold storage instance.

OssClusterId

string

The ID of the OSS-based cluster.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Partion

string

The partition of the cold storage instance.

202509

Size

string

The disk size of the cold storage instance. Unit: GiB.

30

DB

string

The database name.

test\_db

Table

string

The table name.

user

TableName

string

The table name.

test\_table

DBName

string

The database name.

test\_db

Status

string

The status of the task.

Running

FieldName

string

The name of the large object (LOB) field.

user

ChildObjects

array<object>

The list of child objects.

object

A child object.

ObjectName

string

The object name.

img/1728554006462.png

ObjectType

string

The object type.

File

Size

string

The disk size. Unit: GiB.

10

Status

string

The status of the task. Valid values:

-   **Scheduled**: The task is waiting to be executed.
    
-   **Running**: The task is in progress.
    
-   **Succeed**: The task is successful.
    
-   **Cancelling**: The task is being stopped.
    
-   **Canceled**: The task is stopped.
    
-   **Waiting**: The task is waiting for a preset time.
    

To query multiple statuses, separate them with commas (,). If you do not specify this parameter, all statuses are queried.

Running

OssClusterInfoList

array<object>

The list of OSS addresses for the cold storage instances.

object

The OSS address of a cold storage instance.

OssClusterId

string

The ID of the cold storage instance.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Region

string

The ID of the region where the task is located.

cn-hangzhou

Size

string

The size of the cold storage table. Unit: GB.

50

CreatedTime

string

The time when the cluster was created.

2023-05-10T17:01:16Z

## Examples

Success response

`JSON` format

```
{
  "PageRecordCount": 1,
  "RequestId": "C7A8EA8E-A140-5226-90D7-5BCB304D3DB6",
  "NextToken": "c2FpXzIwMjIwNjI5X2Jhay9zYWlfc3VtbWVyX3RyZWFzdXJlX3Bvb2xfbG9nLkNTVg==",
  "OssClusterEnabled": "true",
  "SupportOssCluster": "true",
  "ObjectType": "TABLE",
  "MaxResults": 1000,
  "PageSize": 30,
  "PageNumber": 1,
  "TotalRecord": 1,
  "Tables": [
    {
      "OssClusterId": "pc-*****************",
      "Partion": "202509",
      "Size": "30",
      "DB": "test_db",
      "Table": "user",
      "TableName": "test_table",
      "DBName": "test_db",
      "Status": "Running",
      "FieldName": "user",
      "ChildObjects": [
        {
          "ObjectName": "img/1728554006462.png",
          "ObjectType": "File",
          "Size": "10",
          "Status": "Running"
        }
      ]
    }
  ],
  "OssClusterInfoList": [
    {
      "OssClusterId": "pc-*****************",
      "Region": "cn-hangzhou",
      "Size": "50",
      "CreatedTime": "2023-05-10T17:01:16Z"
    }
  ]
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidPageSize.Malformed

The specified parameter PageSize is not valid.

The specified PageSize parameter is invalid.

400

InvalidPageNumber.Malformed

The specified parameter PageNumber is not valid.

The specified PageNumber parameter is invalid.

400

Database.ConnectError

db instance %s connect failed, please check instance status and database processlist

Failed to connect to the database cluster. Check the cluster status and database process list.

400

Account.QueryError

Instance %s query account error

Failed to query accounts for cluster %s.

404

InvalidDBCluster.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

404

InvalidDBClusterId.Malformed

The specified parameter DBClusterId is not valid.

The specified DBClusterId parameter is invalid.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeColdStorageInstance#workbench-doc-change-demo) for a complete list.
