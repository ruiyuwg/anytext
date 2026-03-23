Create an Advanced Download Task.

## Operation description

### Supported engines

-   RDS MySQL (Cloud Disk instances)
    
-   RDS PostgreSQL
    
-   PolarDB for MySQL
    
-   ApsaraDB for MongoDB
    

### Related documentation

For eligible instances, you can create an Advanced Download Task for a specific Backup Set or for any point in time. You can set the download destination to a URL or write the data directly to your Object Storage Service (OSS) bucket for data analytics and offline archiving.

-   [Download an RDS MySQL backup](/help/en/rds/apsaradb-rds-for-mysql/download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance-download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance)
    
-   [Download an RDS PostgreSQL backup](/help/en/rds/apsaradb-rds-for-postgresql/download-the-backup-files-of-an-apsaradb-rds-for-postgresql-instance)
    
-   [Download a PolarDB for MySQL backup](/help/en/polardb/polardb-for-mysql/user-guide/download-backup)
    
-   [Download an ApsaraDB for MongoDB backup](/help/en/mongodb/user-guide/download-backup-files)
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Dbs/2021-01-01/CreateDownload)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Dbs/2021-01-01/CreateDownload)

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

dbs:CreateDownload

create

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

The ID of the region where the instance is located. You can call the [DescribeDBInstanceAttribute](/help/en/rds/api-query-instance-details) operation for an ApsaraDB RDS instance or the [DescribeDBClusterAttribute](/help/en/polardb/api-polardb-2017-08-01-describedbclusterattribute) operation for a PolarDB cluster to query the region ID.

cn-beijing

InstanceName

string

Yes

The instance ID.

rm-wz994c1t1\*\*\*\*

BakSetType

string

No

The type of the download task. Valid values:

-   **full**: Downloads a full backup set.
    
-   **pitr**: Downloads data from a point in time.
    

full

BakSetId

string

No

The ID of the backup set. You can call the [DescribeBackups](/help/en/rds/api-query-data-backup-files) operation for an ApsaraDB RDS instance or the [DescribeBackups](/help/en/polardb/api-polardb-2017-08-01-describebackups) operation for a PolarDB cluster to obtain the backup set ID.

**Note**

This parameter is required if `BakSetType` is set to `full`.

146005\*\*\*\*

DownloadPointInTime

string

No

The point in time for the download. Specify a Unix timestamp in milliseconds (ms).

**Note**

This parameter is required if `BakSetType` is set to `pitr`.

1661331864000

BakSetSize

string

No

The size of the full backup set, in bytes. You can call the [DescribeBackups](/help/en/rds/api-query-data-backup-files) operation for an ApsaraDB RDS instance or the [DescribeBackups](/help/en/polardb/api-polardb-2017-08-01-describebackups) operation for a PolarDB cluster to query the size.

216\*\*\*\*

FormatType

string

No

The target format of the downloaded data. Valid values:

-   **CSV**
    
-   **SQL**
    
-   **Parquet**
    
-   **Bson**
    
-   **qp.xb**
    

**Note**

This parameter is required. The `Bson` format is available only for MongoDB instances. The `qp.xb` format is available only for ApsaraDB RDS for MySQL instances.

**Valid values:**

-   qp.xb :
    
    qp.xb
    
-   csv :
    
    CSV
    
-   bson :
    
    Bson
    
-   csv-with-header :
    
    csv-with-header
    
-   parquet :
    
    Parquet
    
-   sql :
    
    SQL
    

CSV

TargetType

string

No

The destination type for the download. Valid values:

-   **OSS**
    
-   **URL**
    

OSS

TargetBucket

string

No

The name of the destination OSS bucket.

-   This parameter is required if `TargetType` is set to `OSS`.
    
-   Make sure that your account is granted the **AliyunDBSDefaultRole** role. For more information, see [Grant permissions to a RAM role](/help/en/rds/use-ram-for-resource-authorization). You can also grant the role in the console by following the on-screen instructions.
    

test123

TargetPath

string

No

The destination path for the downloaded data.

**Note**

This parameter is required if `TargetType` is set to `OSS`.

test\_db/path

TargetOssRegion

string

No

The region where the destination OSS bucket is located.

**Note**

This parameter is required if `TargetType` is set to `OSS`.

cn-beijing

PrimaryKeyTypeOnly

string

No

This parameter is required only for MongoDB instances. It specifies whether the primary key in a table is unique. Set the value to `true` if the primary key is unique, or `false` otherwise.

false

IsCluster

string

No

This parameter is required only for MongoDB instances. Set the value to `true` if the instance is a sharded cluster, or `false` otherwise.

false

AdminDatabase

string

No

This parameter is required only for MongoDB instances. It specifies the name of the authentication database. The default value is `admin`.

admin

UseZstd

string

No

Specifies whether to use the zstd compression algorithm. Default value: `false`.

false

ClusterName

string

No

This parameter is required only for MongoDB sharded clusters. It specifies the ID of the sharded cluster.

dds-0xid8e5336\*\*\*\*\*\*

IsPhysical

boolean

No

This parameter is required only when you download data in the `qp.xb` format from an ApsaraDB RDS for MySQL instance. In this case, set the value to `true`.

true

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response data.

RequestId

string

The request ID.

A08F908D-2C35-583F-93C1-ED80753F\*\*\*\*

ErrCode

string

The error code.

DBS.ParamIsInValid

Success

string

Indicates whether the request succeeded. Valid values:

-   **true**: The request succeeded.
    
-   **false**: The request failed.
    

true

ErrMessage

string

The error message.

formatType can not be empty

Code

string

The status code.

DBS.ParamIsInValid

Message

string

The error message.

formatType can not be empty

Data

object

The details of the download task.

BakSetId

string

The ID of the full backup set.

146005\*\*\*\*

DownloadStatus

string

The status of the download task. Valid values:

-   **initializing**: The task is initializing.
    
-   **queueing**: The task is queued.
    
-   **running**: The task is running.
    
-   **failed**: The task failed.
    
-   **finished**: The task is complete.
    
-   **expired**: The task has expired.
    

**Note**

If the download destination is a URL, the link expires three days after the task completes.

initializing

Progress

string

The number of tables downloaded versus the total number of tables.

**Note**

If the task is initializing, `0/0` is returned.

0/0

BackupSetTime

integer

The point-in-time of the backup set, returned as a UNIX timestamp in milliseconds.

1661373070000

RegionCode

string

The region ID.

cn-beijing

TargetPath

string

The destination path for the data download.

**Note**

This parameter is returned only when `TargetType` is `OSS`.

test\_db/path

DbList

string

If the download is for specific databases or tables, this parameter lists their names.

testdb

ExportDataSize

integer

The size of the exported data, in bytes.

0

ImportDataSize

integer

The size of the processed data, in bytes.

0

GmtCreate

integer

The creation time of the task, returned as a UNIX timestamp in milliseconds.

1661940917570

TaskId

string

The ID of the download task.

dt-qxnsfq5s\*\*\*\*

Format

string

The format to which the data is converted.

CSV

TargetType

string

The destination type for the download.

URL

## Examples

Success response

`JSON` format

```
{
  "RequestId": "A08F908D-2C35-583F-93C1-ED80753F****",
  "ErrCode": "DBS.ParamIsInValid",
  "Success": "true",
  "ErrMessage": "formatType can not be empty",
  "Code": "DBS.ParamIsInValid",
  "Message": "formatType can not be empty",
  "Data": {
    "BakSetId": "146005****",
    "DownloadStatus": "initializing",
    "Progress": "0/0",
    "BackupSetTime": 1661373070000,
    "RegionCode": "cn-beijing",
    "TargetPath": "test_db/path",
    "DbList": "testdb",
    "ExportDataSize": 0,
    "ImportDataSize": 0,
    "GmtCreate": 1661940917570,
    "TaskId": "dt-qxnsfq5s****",
    "Format": "CSV",
    "TargetType": "URL"
  }
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

200

DBS.DownloadTask.CannotFind

Can not find download task.

Can not find download task.

200

DBS.DownloadTask.JobAlreadyExist

Job already submit in recent days, please check it.

Job already submit in recent days, please check it.

200

DBS.DownloadTask.OnlyOneRunningOrFailedTask

There can be only one running or failed task for the instance.

The current instance can only have one running/failed task at the same time.

200

DBS.DownloadTask.OssForbid

OSS is forbidden to access. Please check your OSS bucket.

OSS is forbidden to access. Please check your OSS bucket.

200

DBS.DownloadTask.OssStorageTypeInvalid

Unsupported bucket storage. Please make sure that your OSS bucket's storgae type is standard.

Unsupported bucket storage. Please make sure that your OSS bucket's storgae type is standard.

200

Forbidden.InstanceNotFound

instance not found

The instance does not exist.

200

DBS.DownloadTask.BakSetError

DBS download task bak set error. Your backup set does not meet the requirements.

Your backup set does not meet the requirements.

200

DBS.DownloadTask.CustinIdNotSupport

DBS DownloadTask CustinIdNotSupport.

DBS DownloadTask CustinIdNotSupport.

200

DBS.DownloadTask.CustinNameNotSupport

DBS DownloadTask CustinNameNotSupport.

DBS DownloadTask CustinNameNotSupport.

200

DBS.DownloadTask.DbTypeNotSupport

DBS DownloadTask DbTypeNotSupport.

DBS DownloadTask DbTypeNotSupport.

200

DBS.DownloadTask.InstanceInfoNotSupport

DBS DownloadTask InstanceInfoNotSupport.

DBS DownloadTask InstanceInfoNotSupport.

200

DBS.DownloadTask.InstanceParamNotSupport

DBS DownloadTask InstanceParamNotSupport.

DBS DownloadTask InstanceParamNotSupport.

200

DBS.DownloadTask.InstanceStorageTypeNotSupport

DBS DownloadTask InstanceStorageTypeNotSupport.

200

DBS.DownloadTask.InstanceVersionNotSupport

DBS DownloadTask InstanceVersionNotSupport.

DBS DownloadTask InstanceVersionNotSupport.

200

DBS.DownloadTask.NotSupport

DBS DownloadTask NotSupport.

DBS DownloadTask NotSupport.

200

DBS.DownloadTask.RegionNotSupport

DBS DownloadTask RegionNotSupport.

DBS DownloadTask RegionNotSupport.

200

DBS.DownloadTask.UserNotSupport

DBS DownloadTask UserNotSupport.

DBS DownloadTask UserNotSupport.

403

Request.Forbidden

Have no Permissions

403

DBS.NoPermissionException

Rejected by ValidationChecker.

404

DBS.NotExists

data source do not existed.

DBS.NotExists

See [Error Codes](https://api.alibabacloud.com/document/Dbs/2021-01-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Dbs/2021-01-01/CreateDownload#workbench-doc-change-demo) for a complete list.
