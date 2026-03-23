Queries the cross-region data backup files of an instance.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

-   ApsaraDB RDS for MySQL instances with local disks
-   RDS PostgreSQL
-   RDS SQL Server

### [](#references)[](#)References

**Note** Before you call this operation, carefully read the following documentation. Make sure that you fully understand the prerequisites and impacts for calling this operation.

-   [Use the cross-region backup feature for an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/use-the-cross-region-backup-feature-of-an-apsaradb-rds-for-mysql-instance)
-   [Use the cross-region backup feature for an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/enable-the-cross-region-backup-feature-for-an-apsaradb-rds-for-sql-server-instance)
-   [Use the cross-region backup feature for an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/use-the-cross-region-backup-feature-for-an-apsaradb-rds-for-postgresql-instance)

**Note** For more information about how to query cross-region log backup files, see DescribeCrossRegionLogBackupFiles.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeCrossRegionBackups)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeCrossRegionBackups)

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

rds:DescribeCrossRegionBackups

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

The region ID.

cn-hangzhou

CrossBackupRegion

string

No

The ID of the region in which the cross-region data backup file is stored.

cn-shanghai

CrossBackupId

integer

No

The ID of the cross-region data backup file.

**Note** You must specify the **CrossBackupId** parameter. Alternatively, you must specify the **StartTime** and **EndTime** parameters.

14562

StartTime

string

No

The beginning of the time range to query. Specify the time in the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time must be in UTC.

2019-05-30T12:10:00Z

EndTime

string

No

The end of the time range to query. Specify the time in the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time must be in UTC.

2019-06-15T12:10:00Z

PageSize

integer

No

The number of entries per page. Valid values:

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

BackupId

integer

No

The ID of the backup file.

603524\*\*\*

ResourceGroupId

string

No

The resource group ID.

rg-acfmy\*\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

EndTime

string

The end of the time range to query.

2019-06-15T12:10:00Z

StartTime

string

The beginning of the time range to query.

2019-05-30T12:10:00Z

RequestId

string

The request ID.

60912B41-7579-4B5D-B289-8856030F0A6A

PageRecordCount

integer

The number of cross-region data backup files on the current page.

30

TotalRecordCount

integer

The total number of entries that are returned.

100

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

The cross-region data backup files.

Item

object

ConsistentTime

string

The point in time that is indicated by the data in the cross-region data backup file.

2019-06-12T05:44:46Z

DBInstanceStorageType

string

The storage type. Valid values:

-   **local\_ssd**: local SSDs. This is the recommended storage type.
-   **cloud\_ssd**: standard SSD.
-   **cloud\_essd**: enhanced SSD (ESSD).

ssd

CrossBackupId

integer

The ID of the cross-region data backup file.

14377

BackupType

string

The type of the cross-region data backup. Valid values:

-   **F**: full data backup
-   **I**: incremental data backup

F

BackupStartTime

string

The time when the cross-region data backup started.

2019-05-30T12:10:00Z

CrossBackupSetLocation

string

The location where the cross-region data backup file is stored.

oss

InstanceId

integer

The instance ID. This parameter is used to determine whether the instance that generates the cross-region data backup file is a primary or secondary instance.

8161055

CrossBackupDownloadLink

string

The external URL from which you can download the cross-region data backup file.

http://rdsddrbak-shanghai.oss-cn-shanghai.aliyuncs.com/xxxxx

BackupEndTime

string

The time when the cross-region data backup file was generated.

2019-06-15T12:10:00Z

EngineVersion

string

The database engine version.

5.6

BackupSetStatus

integer

The status of the cross-region data backup. Valid values:

-   **0**: The cross-region data backup is successful.
-   **1**: The cross-region data backup failed.

0

CrossBackupSetFile

string

The name of the compressed package that contains the cross-region data backup file.

cn-hangzhou\_rm-xxxxx\_hins81xxx\_data\_20190612134426\_qp.xb

BackupSetScale

integer

The level at which the cross-region data backup file is generated.

-   **0**: instance-level backup
-   **1**: database-level backup

0

CrossBackupSetSize

long

The size of the cross-region data backup file. Unit: bytes.

5312836

CrossBackupRegion

string

The ID of the region in which the cross-region backup files of the instance are stored.

cn-shanghai

Category

string

The RDS edition of the instance. Valid values:

-   **Basic**: RDS Basic Edition.
-   **HighAvailability**: RDS High-availability Edition.
-   **Finance**: RDS Enterprise Edition. This edition is available only for the China site (aliyun.com).

HighAvailability

Engine

string

The database engine of the instance.

mysql

BackupMethod

string

The method that is used to generate the cross-region data backup file. Valid values:

-   **L**: logical backup
-   **P**: physical backup

P

RestoreRegions

array

The regions to which the cross-region data backup file can be restored.

RestoreRegion

string

The region to which the cross-region data backup file can be restored.

cn-hangzhou

## Examples

Sample success responses

`JSON`format

```
{
  "EndTime": "2019-06-15T12:10:00Z",
  "StartTime": "2019-05-30T12:10:00Z",
  "RequestId": "60912B41-7579-4B5D-B289-8856030F0A6A",
  "PageRecordCount": 30,
  "TotalRecordCount": 100,
  "PageNumber": 1,
  "RegionId": "cn-hangzhou",
  "Items": {
    "Item": [
      {
        "ConsistentTime": "2019-06-12T05:44:46Z",
        "DBInstanceStorageType": "ssd",
        "CrossBackupId": 14377,
        "BackupType": "F",
        "BackupStartTime": "2019-05-30T12:10:00Z",
        "CrossBackupSetLocation": "oss",
        "InstanceId": 8161055,
        "CrossBackupDownloadLink": "http://rdsddrbak-shanghai.oss-cn-shanghai.aliyuncs.com/xxxxx",
        "BackupEndTime": "2019-06-15T12:10:00Z",
        "EngineVersion": 5.6,
        "BackupSetStatus": 0,
        "CrossBackupSetFile": "cn-hangzhou_rm-xxxxx_hins81xxx_data_20190612134426_qp.xb",
        "BackupSetScale": 0,
        "CrossBackupSetSize": 5312836,
        "CrossBackupRegion": "cn-shanghai",
        "Category": "HighAvailability",
        "Engine": "mysql",
        "BackupMethod": "P",
        "RestoreRegions": {
          "RestoreRegion": [
            "cn-hangzhou"
          ]
        }
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

400

Order.ComboInstanceNotAllowOperate

A package instance is not allowed to operate independently.

A package instance is not allowed to operate independently.

400

Price.PricingPlanResultNotFound

Pricing plan price result not found.

Pricing plan price result not found.

400

Order.NoRealNameAuthentication

You have not passed the real-name authentication and do not meet the purchase conditions. Please log in to the user center for real-name authentication.

You have not passed the real-name authentication and do not meet the purchase conditions. Please log in to the cost and cost for real-name authentication.

400

InsufficientAvailableQuota

Your account quota limit is less than 0, please recharge before trying to purchase.

Your account available limit is less than 0, please recharge before trying to purchase.

400

CommodityServiceCalling.Exception

Failed to call commodity service.

Failed to call commodity service return.

400

RegionDissolvedEOM

Dear customer, Alibaba Cloud plans to optimize and adjust the current region. Cloud services in this region will cease operations. You are currently unable to operate new purchase orders. Thank you for your understanding and support.

Hello, Alibaba Cloud plans to optimize and adjust the current region. Cloud services in this region will stop operating. In order to ensure your business continuity and smooth transition of data migration, you are currently unable to operate new purchase orders. Thank you for your understanding and support.

400

Commodity.InvalidComponent

The module you purchased is not legal, please buy it again.

The module you purchased is not legal, please buy it again.

400

RegionEndTimeDissolvedIndia

Cloud services in the India (Mumbai) region will be discontinued. Set the validity date to July 15, 2024 or earlier than July 15, 2024.

Hello customer, this area has been abolished.

400

RegionEndTimeDissolvedAustralia

Cloud services in the Australia (Sydney) region will be discontinued. Set the validity date to September 30, 2024 or earlier than September 30, 2024.

Hello customer, this area has been abolished.

400

Price.CommoditySys

Commodity system call exception.

Commodity system call exception.

400

Pay.InsufficientBalance

Insufficient available balance.

Insufficient available balance.

400

Order.PeriodInvalid

There is a problem with the period you selected, please choose again.

There is a problem with the period you selected, please choose again.

400

pay.noCreditCard

Account not bound to credit card.

\-

400

Order.InstHasUnpaidOrder

There is an unpaid order for the service you have purchased. Please pay or void it before placing the order.

There is an unpaid order for the service you have purchased. Please pay or void it before placing the order.

400

noAvailablePaymentMethod

No payment method is specified for your account. We recommend that you add a payment method.

No payment method has been specified for your account. We recommend that you add a payment method.

400

BasicInfoUncompleted

Your information is incomplete. Complete your information before the operation.

Your basic information is not complete, please complete your basic information before operation.

403

CrossBackupNotSupport

Specified region not support cross region backup.

Cross-zone backup is not supported in the specified region.

404

InvalidPage.notFound

Page not found.

The specified parameters are not found. Check your parameters.

404

InvalidDBInstance.NotFound

Specified instance does not exist or not support.

The RDS instance cannot be found, is deleted, or does not support the operation.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-11-20

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeCrossRegionBackups?updateTime=2024-11-20#workbench-doc-change-demo)

2022-09-01

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeCrossRegionBackups?updateTime=2022-09-01#workbench-doc-change-demo)
