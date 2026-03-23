Queries a list of advanced download tasks for RDS for MySQL, RDS for PostgreSQL, and PolarDB for MySQL instances.

## Operation description

### Applicable engines

-   ApsaraDB RDS for MySQL instances that use cloud disks
    
-   ApsaraDB RDS for PostgreSQL
    
-   PolarDB for MySQL
    
-   MongoDB
    

### Related documents

-   [Download the backup of an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance-download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance)
    
-   [Download the backup of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/download-the-backup-files-of-an-apsaradb-rds-for-postgresql-instance)
    
-   [Download the backup of a PolarDB for MySQL instance](/help/en/polardb/polardb-for-mysql/user-guide/download-backup)
    
-   [Download the backup of a MongoDB instance](/help/en/mongodb/user-guide/download-backup-files)
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Dbs/2021-01-01/DescribeDownloadTask)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Dbs/2021-01-01/DescribeDownloadTask)

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

dbs:DescribeDownloadTask

get

\*DBInstance

`acs:rds:{#regionId}:{#accountId}:dbinstance/{#DbInstanceId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RegionCode

string

Yes

The ID of the region where the instance resides. To obtain the region ID, call [DescribeDBInstanceAttribute](/help/en/rds/api-query-instance-details).

cn-hangzhou

InstanceName

string

No

The instance ID.

**Note**

This parameter is required.

rm-bp1imnmcjxdz7\*\*\*\*

DatasourceId

string

No

The ID of the data source in DBS. The format is: _ds-${Instance ID}\_${Region ID}_.

ds-rm-2ze8g2am97624\*\*\*\*\_cn-hangzhou

BackupSetId

string

No

The ID of the backup set. To obtain the backup set ID, call [DescribeBackups](/help/en/rds/api-query-data-backup-files).

216\*\*\*\*

State

string

No

The state of the download task. Valid values:

-   **initializing**: The task is being initialized.
    
-   **queueing**: The task is in a queue.
    
-   **running**: The task is running.
    
-   **failed**: The task failed.
    
-   **finished**: The task is successful.
    
-   **expired**: The download has expired.
    

queueing

TaskType

string

No

The type of the download task. Valid values:

-   **full**: full backup set download.
    
-   **pitr**: point-in-time recovery download.
    

full

StartTime

string

No

The start of the time range to query tasks based on their creation time. This is a UNIX timestamp in milliseconds (ms).

1661941554000

EndTime

string

No

The end of the time range to query tasks based on their creation time. This is a UNIX timestamp in milliseconds (ms).

1661941556000

PageSize

string

No

The number of entries to return on each page.

50

CurrentPage

string

No

The page number.

1

OrderDirect

string

No

The sorting direction. Valid values:

-   **asc**: ascending order.
    
-   **desc**: descending order. This is the default value.
    

desc

OrderColumn

string

No

The field used for sorting. The default value is **gmt\_create**, which indicates the creation time.

gmt\_create

ClusterName

string

No

The name of the sharded cluster. This parameter is required only for MongoDB instances.

dds-example

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The returned parameters.

RequestId

string

The request ID.

5D285EB9-A443-592D-9F3D-A888FAC3\*\*\*\*

ErrCode

string

The error code.

DBS.InternalError

Success

string

Indicates whether the request was successful. Valid values:

-   **true**: The request was successful.
    
-   **false**: The request failed.
    

true

ErrMessage

string

The error message.

instanceName can not be empty

Code

string

The error code.

DBS.InternalError

Message

string

The error message.

instanceName can not be empty

Data

object

The task details.

PageNumber

integer

The page number. It must be greater than 0 and not exceed the maximum value of the integer data type. Default value: 1.

1

TotalPages

integer

The total number of pages.

2

Extra

string

Additional information about the task that is used to back up data to the cloud.

dbtest

TotalElements

integer

The total number of download tasks.

1

PageSize

integer

The number of entries returned per page.

10

Content

object

List

array<object>

The task details.

object

The task details.

TaskId

string

The download task ID.

dt-qxntlvgu\*\*\*\*

RegionCode

string

The region ID.

cn-hangzhou

Format

string

The destination format to which the downloaded data is converted. Valid values:

-   **csv**
    
-   **SQL**
    
-   **Parquet**
    

csv

DbList

string

The list of databases.

\[dbtest\]

BakSetId

string

The ID of the full backup set.

148261\*\*\*\*

DownloadStatus

string

The state of the download task. Valid values:

-   **initializing**: The task is being initialized.
    
-   **queueing**: The task is in a queue.
    
-   **running**: The task is running.
    
-   **failed**: The task failed.
    
-   **finished**: The task is successful.
    
-   **expired**: The download has expired.
    

queueing

ExportDataSize

string

The volume of exported data, in bytes.

0

ImportDataSize

string

The volume of processed data, in bytes.

0

BackupSetTime

string

The point in time of the point-in-time download task. This is a UNIX timestamp in milliseconds (ms).

1663162216000

TargetType

string

The type of the download destination. Valid values:

-   **OSS**
    
-   **URL**
    

URL

TargetPath

string

The destination path of the downloaded data. This parameter is returned when TargetType is set to **OSS**.

test\_db/path

Progress

string

The number of exported tables/The total number of tables to be exported.

0/0

GmtCreate

string

The time when the task was created. This is a UNIX timestamp in milliseconds.

1663321957000

## Examples

Success response

`JSON` format

```
{
  "RequestId": "5D285EB9-A443-592D-9F3D-A888FAC3****",
  "ErrCode": "DBS.InternalError",
  "Success": "true",
  "ErrMessage": "instanceName can not be empty",
  "Code": "DBS.InternalError",
  "Message": "instanceName can not be empty",
  "Data": {
    "PageNumber": 1,
    "TotalPages": 2,
    "Extra": "dbtest",
    "TotalElements": 1,
    "PageSize": 10,
    "Content": {
      "List": [
        {
          "TaskId": "dt-qxntlvgu****",
          "RegionCode": "cn-hangzhou",
          "Format": "csv",
          "DbList": "[dbtest]",
          "BakSetId": "148261****",
          "DownloadStatus": "queueing",
          "ExportDataSize": "0",
          "ImportDataSize": "0",
          "BackupSetTime": "1663162216000",
          "TargetType": "URL",
          "TargetPath": "test_db/path",
          "Progress": "0/0",
          "GmtCreate": "1663321957000"
        }
      ]
    }
  }
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

403

Request.Forbidden

Have no Permissions

See [Error Codes](https://api.alibabacloud.com/document/Dbs/2021-01-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Dbs/2021-01-01/DescribeDownloadTask#workbench-doc-change-demo) for a complete list.
