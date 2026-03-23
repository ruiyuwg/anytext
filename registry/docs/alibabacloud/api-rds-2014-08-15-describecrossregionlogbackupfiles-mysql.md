Queries the cross-region log backup files of an instance.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

-   MySQL
-   PostgreSQL
-   SQL Server

### [](#references)[](#)References

**Note** Before you call this operation, carefully read the following documentation. Make sure that you fully understand the prerequisites and impacts for calling this operation.

-   [Use the cross-region backup feature for an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/use-the-cross-region-backup-feature-of-an-apsaradb-rds-for-mysql-instance)
-   [Use the cross-region backup feature for an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/enable-the-cross-region-backup-feature-for-an-apsaradb-rds-for-sql-server-instance)
-   [Use the cross-region backup feature for an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/use-the-cross-region-backup-feature-for-an-apsaradb-rds-for-postgresql-instance)

**Note** For more information about how to query cross-region data backup files, see [DescribeCrossRegionBackups](/help/en/rds/api-query-cross-region-data-backup-files) .

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeCrossRegionLogBackupFiles)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeCrossRegionLogBackupFiles)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

rds:DescribeCrossRegionLogBackupFiles

get

\*DBInstance

`acs:rds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}`

-   rds:ResourceTag

none

## Request parameters

Parameter

Type

Required

Description

Example

DBInstanceId

string

Yes

The instance ID.

rm-uf6wjk5xxxxxxxxxx

RegionId

string

Yes

The region ID. You can call the DescribeRegions operation to query the most recent region list.

cn-hangzhou

CrossBackupRegion

string

No

The ID of the destination region within which the cross-region backup file is stored. You can call the DescribeCrossRegionBackupDBInstance operation to query the region ID.

cn-shanghai

StartTime

string

Yes

The beginning of the time range to query. Specify the time in the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time must be in UTC.

2019-05-30T12:10:00Z

EndTime

string

Yes

The end of the time range to query. Specify the time in the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time must be in UTC.

2019-06-15T12:10:00Z

PageSize

integer

No

The number of entries to return on each page. Valid values:

-   **30**
-   **50**
-   **100**

Default value: 30.

30

PageNumber

integer

No

The page number. Valid values: any non-zero positive integer.

Default value: **1**.

1

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

EndTime

string

The end of the time range to query. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

2019-06-15T12:10:00Z

StartTime

string

The beginning of the time range to query. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

2019-05-30T12:10:00Z

RequestId

string

The request ID.

DAC241E8-28E6-49DA-BFB0-B2DD090885C1

PageRecordCount

integer

The number of cross-region backup files on the current page.

30

TotalRecordCount

integer

The total number of entries that are returned.

100

DBInstanceId

string

The instance ID.

rm-uf6wjk5xxxxxxxxxx

PageNumber

integer

The page number. Pages start from page 1.

Default value: **1**.

1

RegionId

string

The region ID of the instance.

cn-hangzhou

Items

array<object>

The cross-region log backup files.

Item

object

LogBeginTime

string

The start time of the cross-region log backup file. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

2019-05-30T12:10:00Z

LinkExpiredTime

string

The time when the URL expires. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

2019-06-30T15:00:00Z

CrossIntranetDownloadLink

string

The internal URL from which you can download the cross-region log backup file.

http://rdsddrlog-zb.oss-cn-zhangjiakou-internal.aliyuncs.com/xxxxx

LogFileName

string

The name of the cross-region log backup file.

cn-hangzhou\_rm-bpxxxxx\_7198739\_mysql-bin.000230

CrossBackupRegion

string

The ID of the destination region within which the cross-region backup file is stored.

cn-shanghai

CrossDownloadLink

string

The external URL from which you can download the cross-region log backup file.

http://rdsddrlog-zb.oss-cn-zhangjiakou.aliyuncs.com/xxxxx

CrossLogBackupSize

long

The size of the cross-region log backup file. Unit: bytes.

5312836

InstanceId

integer

The instance ID.

8161055

CrossLogBackupId

integer

The ID of the cross-region log backup file.

14567

LogEndTime

string

The end time of the cross-region log backup file. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

2019-05-30T20:10:00Z

## Examples

Sample success responses

`JSON`format

```
{
  "EndTime": "2019-06-15T12:10:00Z",
  "StartTime": "2019-05-30T12:10:00Z",
  "RequestId": "DAC241E8-28E6-49DA-BFB0-B2DD090885C1",
  "PageRecordCount": 30,
  "TotalRecordCount": 100,
  "DBInstanceId": "rm-uf6wjk5xxxxxxxxxx",
  "PageNumber": 1,
  "RegionId": "cn-hangzhou",
  "Items": {
    "Item": [
      {
        "LogBeginTime": "2019-05-30T12:10:00Z",
        "LinkExpiredTime": "2019-06-30T15:00:00Z",
        "CrossIntranetDownloadLink": "http://rdsddrlog-zb.oss-cn-zhangjiakou-internal.aliyuncs.com/xxxxx",
        "LogFileName": "cn-hangzhou_rm-bpxxxxx_7198739_mysql-bin.000230",
        "CrossBackupRegion": "cn-shanghai",
        "CrossDownloadLink": "http://rdsddrlog-zb.oss-cn-zhangjiakou.aliyuncs.com/xxxxx",
        "CrossLogBackupSize": 5312836,
        "InstanceId": 8161055,
        "CrossLogBackupId": 14567,
        "LogEndTime": "2019-05-30T20:10:00Z"
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

ParameterAbsence

Necessary param is absence.

\-

400

InvalidParameters.Format

Specified parameter is not valid.

\-

400

InvalidRegion.Format

Specified Region is not valid.

The region ID is invalid. Check the region ID.

400

InvalidStartTime.Format

Specified start time is not valid.

The start time is invalid.

400

InvalidEndTime.Format

Specified end time is not valid.

The end time is invalid. Check the end time.

400

InvalidTime.Format

Specified time is not valid.

The time format is invalid.

403

CrossBackupNotSupport

Specified region not support cross region backup.

Cross-zone backup is not supported in the specified region.

404

InvalidDBInstance.NotFound

Specified instance does not exist or not support.

The RDS instance cannot be found, is deleted, or does not support the operation.

404

InvalidPage.notFound

Page not found.

The specified parameters are not found. Check your parameters.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-11-20

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeCrossRegionLogBackupFiles?updateTime=2024-11-20#workbench-doc-change-demo)

2022-09-01

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeCrossRegionLogBackupFiles?updateTime=2022-09-01#workbench-doc-change-demo)
