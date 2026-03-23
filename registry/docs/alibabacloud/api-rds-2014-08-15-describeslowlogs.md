Queries the statistics on slow query logs.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

-   MySQL
    
    \*\*
    
    **Note** This operation is not supported for RDS instances that run MySQL 5.7 on RDS Basic Edition.
    
-   SQL Server
    
    \*\*
    
    **Note** This operation is supported only for RDS instances that run SQL Server 2008 R2.
    
-   MariaDB
    

### [](#prerequisites)[](#)Prerequisites

-   Slow query logs are not collected in real time and may show a latency of 6 to 8 hours.
-   If the return result is empty, check whether the StartTime and EndTime parameters are in UTC. If yes, no slow logs are generated within the specified time range.
-   Starting from September 01, 2024, the template algorithm for slow queries is optimized. When you call the operation, you must change the value of the **SQLHASH** parameter. For more information, see [\[Notice\] Optimization of the template algorithm for slow queries](/help/en/das/product-overview/sql-templating-algorithm-optimization).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeSlowLogs)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeSlowLogs)

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

rds:DescribeSlowLogs

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

The instance ID. You can call the DescribeDBInstances operation to query the instance ID.

rm-uf6wjk5xxxxxxx

StartTime

string

Yes

The beginning of the time range to query. Specify the time in the ISO 8601 standard in the _yyyy-MM-dd_Z format. The time must be in UTC.

2011-05-01Z

EndTime

string

Yes

The end of the time range to query. The end time must be later than the start time. The time span between the start time and the end time cannot exceed 31 days. Specify the time in the ISO 8601 standard in the _yyyy-MM-dd_Z format. The time must be in UTC.

**Note** If the end date of the query is the same as the start date of the query, you can query the logs that are generated at 08:00 on the start date of the query. You can query the slow logs within a maximum time range of 24 hours.

2011-05-30Z

DBName

string

No

The name of the database.

RDS\_MySQL

SortKey

string

No

The dimension based on which the system sorts the entries to return. Valid values:

-   **TotalExecutionCounts**: The system sorts the entries to return based on the number of times that SQL statements are executed.
-   **TotalQueryTimes**: The system sorts the entries to return based on the total execution duration.
-   **TotalLogicalReads**: The system sorts the entries to return based on the total number of logical reads.
-   **TotalPhysicalReads**: The system sorts the entries to return based on the total number of physical reads.

**Note** This parameter is supported only for instances that run SQL Server 2008 R2.

TotalExecutionCounts

PageSize

integer

No

The number of entries per page. Valid values: **30** to **100**. Default value: **30**.

30

PageNumber

integer

No

The page number. Pages start from 1.

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

The end date of the query.

2011-05-30Z

StartTime

string

The start date of the query.

2011-05-30Z

RequestId

string

The request ID.

2553A660-E4EB-4AF4-A402-8AFF70A49143

PageRecordCount

integer

The number of SQL statements that are returned on the current page.

10

TotalRecordCount

integer

The total number of entries that are returned.

5

DBInstanceId

string

The ID of the instance.

rm-uf6wjk5xxxxxxx

PageNumber

integer

The number of the page returned.

1

Engine

string

The database engine of the instance.

MySQL

Items

array<object>

An array that consists of the information about each slow query log.

SQLSlowLog

object

MaxLastRowsAffectedCounts

long

The largest number of rows that were affected by the last SQL statement in the query.

**Note** This parameter is returned only for instances that run SQL Server.

0

ReturnMaxRowCount

long

The largest number of rows that were returned by a specific SQL statement in the query.

1

SQLText

string

The SQL statement that was executed in the query.

select id,name from tb\_table

SQLServerMaxCpuTime

long

The largest amount of CPU time that was used by a specific SQL statement in the query. Unit: seconds.

**Note** This parameter is returned only for instances that run SQL Server.

0

CreateTime

string

The date when the data was generated.

2011-05-30Z

AvgLastRowsAffectedCounts

long

The average number of rows that were affected by the last SQL statement in the query.

**Note** This parameter is returned only for instances that run SQL Server.

0

MinLastRowsAffectedCounts

long

The smallest number of rows that were affected by the last SQL statement in the query.

**Note** This parameter is returned only for instances that run SQL Server.

0

ParseTotalRowCounts

long

The total number of rows that were parsed by all SQL statements in the query.

1

TotalLockTimes

long

The total lock duration that was caused by all SQL statements in the query. Unit: seconds.

0

MySQLTotalExecutionCounts

long

The total number of SQL statements that were executed in the query. This parameter is returned only for instances that run MySQL.

1

SQLServerMinCpuTime

long

The smallest amount of CPU time that was used by a specific SQL statement in the query. Unit: seconds.

**Note** This parameter is returned only for instances that run SQL Server.

0

SQLHASH

string

The unique ID of the SQL statement. The ID is used to obtain the slow query logs of the SQL statement.

U2FsdGVkxxxx

MinIOWriteCounts

long

The smallest number of I/O writes that were performed by a specific SQL statement in the query.

**Note** This parameter is returned only for instances that run SQL Server.

0

ParseMaxRowCount

long

The largest number of rows that were parsed by a specific SQL statement in the query.

1

MaxLogicalReadCounts

long

The largest number of logical reads that were performed by a specific SQL statement in the query.

**Note** This parameter is returned only for instances that run SQL Server.

0

MySQLTotalExecutionTimes

long

The total execution duration of all SQL statements in the query. Unit: seconds. This parameter is returned only for instances that run MySQL.

1

SQLServerTotalExecutionCounts

long

The total number of SQL statements that were executed in the query. This parameter is returned only for instances that run SQL Server.

1

ReturnTotalRowCounts

long

The total number of rows that were returned by all SQL statements in the query.

1

MaxLockTime

long

The longest lock duration that was caused by a specific SQL statement in the query. Unit: seconds.

0

MaxLockTimeMS

long

The longest lock duration that was caused by a specific SQL statement in the query. Unit: milliseconds.

1000

DBName

string

The name of the database.

RDS\_MySQL

MinRowsAffectedCounts

long

The smallest number of rows that were affected by a specific SQL statement in the query.

**Note** This parameter is returned only for instances that run SQL Server.

0

TotalLogicalReadCounts

long

The total number of logical reads that were performed by all SQL statements in the query.

1

TotalPhysicalReadCounts

long

The total number of physical reads that were performed by all SQL statements in the query.

1

ReportTime

string

The date on which the data report was generated.

2011-05-30Z

MaxPhysicalReadCounts

long

The largest number of physical reads that were performed by a specific SQL statement in the query.

**Note** This parameter is returned only for instances that run SQL Server.

0

SQLServerTotalCpuTime

long

The total amount of CPU time that was used by all SQL statements in the query. Unit: seconds.

**Note** This parameter is returned only for instances that run SQL Server.

0

TotalIOWriteCounts

long

The total number of I/O writes that were performed by all SQL statements in the query.

**Note** This parameter is returned only for instances that run SQL Server.

0

MaxRowsAffectedCounts

long

The largest number of rows that were affected by a specific SQL statement in the query.

**Note** This parameter is returned only for instances that run SQL Server.

0

AvgIOWriteCounts

long

The average number of I/O writes per SQL statement in the query.

**Note** This parameter is returned only for instances that run SQL Server.

0

MinPhysicalReadCounts

long

The smallest number of physical reads that were performed by a specific SQL statement in the query.

**Note** This parameter is returned only for instances that run SQL Server.

0

SlowLogId

long

The ID of the slow query log summary.

26584213

MaxExecutionTime

long

The longest execution duration of a specific SQL statement in the query. Unit: seconds.

60

MaxExecutionTimeMS

long

The longest execution duration of a specific SQL statement in the query. Unit: milliseconds.

60000

AvgExecutionTime

long

The average execution duration per SQL statement in the query. Unit: seconds.

**Note** This parameter is returned only for instances that run SQL Server.

1

SQLServerAvgExecutionTime

long

The average execution duration per SQL statement in the query. Unit: seconds.

**Note** This parameter is returned only for instances that run SQL Server.

0

MaxIOWriteCounts

long

The largest number of I/O writes that were performed by a specific SQL statement in the query.

**Note** This parameter is returned only for instances that run SQL Server.

0

SQLServerAvgCpuTime

long

The average amount of CPU time per SQL statement in the query. Unit: seconds.

**Note** This parameter is returned only for instances that run SQL Server.

0

TotalLastRowsAffectedCounts

long

The total number of rows that were affected by the last SQL statement in the query.

**Note** This parameter is returned only for instances that run SQL Server.

0

AvgLogicalReadCounts

long

The average number of logical reads per SQL statement in the query.

**Note** This parameter is returned only for instances that run SQL Server.

0

SQLServerMinExecutionTime

long

The smallest execution duration of a specific SQL statement in the query. Unit: seconds.

**Note** This parameter is returned only for instances that run SQL Server.

0

SQLIdStr

string

The ID of the SQL statement in the statistical template of slow query logs. This parameter is replaced by the **SQLHASH** parameter.

521584

SQLServerTotalExecutionTimes

long

The total execution duration of all SQL statements in the query. This parameter is returned only for instances that run SQL Server. Unit: milliseconds.

1000

AvgRowsAffectedCounts

long

The average number of rows that were affected per SQL statement in the query.

**Note** This parameter is returned only for instances that run SQL Server.

0

TotalRowsAffectedCounts

long

The total number of rows that were affected by all SQL statements in the query.

0

AvgPhysicalReadCounts

long

The average number of physical reads per SQL statement in the query.

**Note** This parameter is returned only for instances that run SQL Server.

0

MinLogicalReadCounts

long

The smallest number of logical reads that were performed by a specific SQL statement in the query.

**Note** This parameter is returned only for instances that run SQL Server.

0

## Examples

Sample success responses

`JSON`format

```
{
  "EndTime": "2011-05-30Z",
  "StartTime": "2011-05-30Z",
  "RequestId": "2553A660-E4EB-4AF4-A402-8AFF70A49143",
  "PageRecordCount": 10,
  "TotalRecordCount": 5,
  "DBInstanceId": "rm-uf6wjk5xxxxxxx",
  "PageNumber": 1,
  "Engine": "MySQL",
  "Items": {
    "SQLSlowLog": [
      {
        "MaxLastRowsAffectedCounts": 0,
        "ReturnMaxRowCount": 1,
        "SQLText": "select id,name from tb_table",
        "SQLServerMaxCpuTime": 0,
        "CreateTime": "2011-05-30Z",
        "AvgLastRowsAffectedCounts": 0,
        "MinLastRowsAffectedCounts": 0,
        "ParseTotalRowCounts": 1,
        "TotalLockTimes": 0,
        "MySQLTotalExecutionCounts": 1,
        "SQLServerMinCpuTime": 0,
        "SQLHASH": "U2FsdGVkxxxx",
        "MinIOWriteCounts": 0,
        "ParseMaxRowCount": 1,
        "MaxLogicalReadCounts": 0,
        "MySQLTotalExecutionTimes": 1,
        "SQLServerTotalExecutionCounts": 1,
        "ReturnTotalRowCounts": 1,
        "MaxLockTime": 0,
        "MaxLockTimeMS": 1000,
        "DBName": "RDS_MySQL",
        "MinRowsAffectedCounts": 0,
        "TotalLogicalReadCounts": 1,
        "TotalPhysicalReadCounts": 1,
        "ReportTime": "2011-05-30Z",
        "MaxPhysicalReadCounts": 0,
        "SQLServerTotalCpuTime": 0,
        "TotalIOWriteCounts": 0,
        "MaxRowsAffectedCounts": 0,
        "AvgIOWriteCounts": 0,
        "MinPhysicalReadCounts": 0,
        "SlowLogId": 26584213,
        "MaxExecutionTime": 60,
        "MaxExecutionTimeMS": 60000,
        "AvgExecutionTime": 1,
        "SQLServerAvgExecutionTime": 0,
        "MaxIOWriteCounts": 0,
        "SQLServerAvgCpuTime": 0,
        "TotalLastRowsAffectedCounts": 0,
        "AvgLogicalReadCounts": 0,
        "SQLServerMinExecutionTime": 0,
        "SQLIdStr": 521584,
        "SQLServerTotalExecutionTimes": 1000,
        "AvgRowsAffectedCounts": 0,
        "TotalRowsAffectedCounts": 0,
        "AvgPhysicalReadCounts": 0,
        "MinLogicalReadCounts": 0
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

InvalidSearchTimeRange

search time range cannot be longer than a month.

The interval between the end time that is specified by the EndTime parameter and the start time that is specified by the StartTime parameter must be less than 31 days. Check the values of these parameters.

400

IO.Exception

IO exception, retry later.

An I/O error occurred.

400

SortKey.ValueNotSupported

SortKey.ValueNotSupported

\-

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

400

Risk.RiskControlRejection

Your account is abnormal, please contact customer service for details.

Your account is abnormal, please contact customer service for details.

400

BasicInfoUncompleted

Your information is incomplete, Complete your information before the operation.

\-

400

Api.NotSupport

Specified api is not supported.

The current interface does not support.

400

ContainForbiddenLabelError

There is a label that prohibits placing orders. Please contact your distributor for assistance.

You cannot place the order because a tag indicates that order placement is prohibited. Contact your distributor.

400

InvalidDBInstanceId.NotFound

The DBInstanceId provided does not exist in records.

The DBInstanceId provided does not exist.

400

InvalidInstanceLevel.DiskType

Specified instance level not support request disk type

The current instance type does not support the specified storage type.

400

InvalidParam

Sepcified wal level Parameter is invalid. There are still logical slots in instance, so it can not be set as replica.

The specified wal\_level parameter is invalid. There is still a copy slot in the instance, so it cannot be set to replica.

400

KmsApiError

User secret key invalid.

The user key is invalid.

400

System.SaleValidateFailed

Sales expression validation system error.

A system error occurs when the sales expression is verified.

400

Abs.InvalidAccount.NotFound

account is not found.

The account does not exist.

400

SqlExecuteFailedOrTimeout

sql command execution failed or timed out:%s.

SQL command execution failed or timed out

400

ColdData.EngineVersionNotSupport

The current instance engine version not support coldDataEnabled.

The current instance engine version not support coldDataEnabled.

400

ColdData.MinorVersionNotSupport

The current instance minor version not support coldDataEnabled.

The current instance minor version not support coldDataEnabled.

400

IncorrectTargetClasscode

The current instance type does not support this operation.

This operation is not supported by the instance type.

400

InvalidConnectionString.Duplicate

Specified connection string already exists in the RDS.

The link address name is duplicate. Please reset the connection string.

400

RequiredParam.NotFound

Required input param is not found.

\-

400

Parameters.Invalid

Parameter error, please check the parameters.

Parameter error, please check the parameters.

400

BackupPolicyNotSupport

Cold Data won't open with CrossBackup or Flash Backup, please check Backup Policy.

Cold Data won't open with CrossBackup or Flash Backup, please check Backup Policy.

400

InvalideStatus.Format

The instance status does not support this operation.

\-

400

InvalidReleasedKeepPolicy.Format

Specified Released Keep Policy is not valid.

Specified Released Keep Policy is not valid.

400

InvalidDBInstanceEngineType.Format

the DB instance engine type does not support this operation.

This operation is not supported for the database engine of the instance.

400

Pay.NoCreditCard

No credit cards.

No credit cards.

400

VpcNetworkTypeNotSupport

The vpc network type instance does not support this operation.

The vpc network type instance does not support this operation.

400

MirrorInsExists

Specified DB instance mirror ins already existed.

Specified DB instance mirror ins already existed.

400

UnsupportedClassCode

The specified DB instance class stops selling.

The specified DB instance class stops selling.

400

InvalidBackupSet

The specified database does not exist in the backup set.

The specified database does not exist in the backup set.

400

OrdTCommodityQueryError

Failed to query for product.

Failed to query product.

400

ProductInstanceReleased

The instance has been released. Please check before placing the order.

The instance has been released, please verify and place an order.

400

RegionEndTimeDissolvedIndia

The region is no longer supported.

The region is no longer supported.

403

OrderStatus.UnPaid

The specified db instance has unpaid order.

The instance has an unpaid order. Please pay first and try again.

403

InvalidReduceDiskSize

The storage capacity after the scale-down must be larger than the used amount.

The scale-in target capacity cannot be less than the current storage space usage

403

CloudSSDNotSupport

Cloud ssd does not support this operation, please upgrade to essd.

\-

403

InvalidUserOperatorPermission

The user permission does not support this operation.

The user is not authorized to perform this operation.

403

InvalidVswitchId

Specified conn vswitch id is not valid.

\-

403

IncorrectMinorVersion

Current engine minor version does not support operations.

This operation is not supported for the current minor engine version.

403

OperationDenied.ZoneResource

There is no available zone for inventory.

There is no available zone for inventory.

403

NotInFlowController

Sorry,no permission.

Sorry,no permission.

403

InvalidKmsKey

Kms key is disabled.

\-

403

InvalidInstanceLevel.Malformed

Current DB instance level does not support this operation.

The specified database instance type does not support this operation.

404

InvalidClusterKms

The current instance does not authorized to access the Key Management Service.

The instance does not have permissions to access Key Management Service (KMS).

404

Request.NotFound

The requested resource is not available.

The requested resources are unavailable.

404

HostInfo.NotFound

The specified host info is not found.

\-

500

ExternalFailure

The request processing has failed due to external service failure.

The request processing has failed due to external service failure.

500

RequestMetaDataFailed

The service request failed. Please try again later or contact service personnel.

The service request failed. Please try again later or contact service personnel.

500

InvokeProxyFailure

The request processing has failed due to service failure of rds api.

The request failed to be processed due to an RDS API failure.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-11-18

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeSlowLogs?updateTime=2024-11-18#workbench-doc-change-demo)

2023-05-24

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeSlowLogs?updateTime=2023-05-24#workbench-doc-change-demo)
