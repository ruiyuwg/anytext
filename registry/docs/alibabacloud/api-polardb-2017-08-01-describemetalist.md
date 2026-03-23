Queries the details of recoverable databases and tables.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeMetaList)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeMetaList)

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

polardb:DescribeMetaList

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

**Note**

Call the [DescribeDBClusters](/help/en/polardb/polardb-for-mysql/api-describedbclusters) operation to query the details of all clusters in your account.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

BackupId

string

No

The ID of the backup set.

**Note**

-   You must specify either the `BackupId` or `RestoreTime` parameter.
    
-   Call the [DescribeBackups](/help/en/polardb/polardb-for-mysql/api-describebackups) operation to query the backup set ID.
    

111111

RestoreTime

string

No

The point in time to which you want to restore data. Specify the time in the YYYY-MM-DDThh:mmZ format. The time must be in UTC.

**Note**

You must specify either the `BackupId` or `RestoreTime` parameter. Call the [DescribeBackups](/help/en/polardb/polardb-for-mysql/api-describebackups) operation to query the point in time for restoration.

2020-10-04T01:40:00Z

GetDbName

string

No

The name of the database, such as `test_db`. If you specify this parameter, the names of all tables that can be recovered from the specified database are returned.

**Note**

-   You can specify only one database name at a time.
    
-   If you do not specify this parameter, the names of all databases that can be recovered from the current backup set are returned. The names of tables in each database are not returned.
    

test\_db

PageSize

integer

No

The number of entries to return on each page. Valid values:

-   **30**
    
-   **50**
    
-   **100** Default value: **30**.
    

30

PageNumber

integer

No

The page number. The value must be an integer that is greater than 0 and does not exceed the maximum value of the Integer data type. Default value: **1**.

1

RegionCode

string

No

The region ID of the instance. You can call [DescribeDBClusterAttribute](/help/en/polardb/api-polardb-2017-08-01-describedbclusterattribute) to query the region ID.

cn-hangzhou

## Response elements

**Element**

**Type**

**Description**

**Example**

object

TotalPageCount

string

The total number of pages.

1

TotalRecordCount

string

The total number of records.

2

PageSize

string

The number of records on the current page.

30

RequestId

string

The request ID.

AA815DE7-B576-4B22-B33C-3FB31A\*\*\*\*\*\*

PageNumber

string

The page number.

1

Items

array<object>

The details of recoverable databases and tables.

object

Database

string

The name of the database that can be recovered.

test\_db

Tables

array

The names of the tables that can be recovered.

string

The name of the recoverable table.

test\_tb1

Size

array

The size of the database or table, in bytes.

integer

The size of the database or table in bytes.

16384

DBClusterId

string

The cluster ID.

pc-bp1s826a1up\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "TotalPageCount": "1",
  "TotalRecordCount": "2",
  "PageSize": "30",
  "RequestId": "AA815DE7-B576-4B22-B33C-3FB31A******",
  "PageNumber": "1",
  "Items": [
    {
      "Database": "test_db",
      "Tables": [
        "test_tb1"
      ],
      "Size": [
        16384
      ]
    }
  ],
  "DBClusterId": "pc-bp1s826a1up******"
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

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeMetaList#workbench-doc-change-demo) for a complete list.
