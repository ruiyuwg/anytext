Queries the cross-region backup settings of an instance.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

-   MySQL
-   PostgreSQL
-   SQL Server

### [](#references)[](#)References

**Note** Before you call this operation, carefully read the following documentation. Make sure that you fully understand the prerequisites and impacts for calling this operation.

-   [Use the cross-region backup feature for an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/use-the-cross-region-backup-feature-of-an-apsaradb-rds-for-mysql-instance)
-   [Use the cross-region backup feature for an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/use-the-cross-region-backup-feature-for-an-apsaradb-rds-for-postgresql-instance)
-   [Use the cross-region backup feature for an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/enable-the-cross-region-backup-feature-for-an-apsaradb-rds-for-sql-server-instance)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeInstanceCrossBackupPolicy)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeInstanceCrossBackupPolicy)

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

rds:DescribeInstanceCrossBackupPolicy

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

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

LogBackupEnabledTime

string

The time when cross-region log backup was enabled on the instance. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

2019-06-12T05:44:21Z

BackupEnabled

string

The status of the cross-region backup feature on the instance. Valid values:

-   **Disable**
-   **Enable**

Enable

DBInstanceStatus

string

The status of the instance. For more information, see [Instance state table](/help/en/rds/developer-reference/instance-state-table).

Running

LockMode

string

The lock status of the instance. Valid values:

-   **Unlock**: The instance is not locked.
-   **ManualLock**: The instance is manually locked.
-   **LockByExpiration**: The instance is automatically locked due to instance expiration.
-   **LockByRestoration**: The instance is automatically locked before a rollback.
-   **LockByDiskQuota**: The instance is automatically locked because its storage capacity is exhausted and the instance is inaccessible.

Unlock

EngineVersion

string

The database engine version.

5.6

RegionId

string

The region ID of the instance.

cn-hangzhou

LogBackupEnabled

string

The status of the cross-region log backup feature on the instance. Valid values:

-   **Disable**
-   **Enable**

Enable

RequestId

string

The request ID.

CB7667B2-72C8-497B-9BD8-3B343CEF51AB

RetentType

integer

The policy that is used to retain the cross-region backup files of the instance. Default value: **1**. The value 1 indicates that the cross-region backup files of the instance are retained based on the specified retention period.

1

Retention

integer

The number of days for which the cross-region backup files of the instance are retained. Valid values: **7 to 1825**.

15

CrossBackupType

string

The policy that is used to save the cross-region backup files of the instance. Default value: **1**. The value 1 indicates that all cross-region backup files are saved.

1

CrossBackupRegion

string

The ID of the destination region where the cross-region backup files of the instance are stored.

cn-shanghai

DBInstanceId

string

The instance ID.

rm-uf6wjk5xxxxxxxxxx

Engine

string

The database engine of the instance.

mysql

BackupEnabledTime

string

The point in time at which the cross-region backup feature is enabled. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

2019-06-12T05:44:21Z

DBInstanceDescription

string

The name of the instance. It must be 2 to 256 characters in length. The value can contain letters, digits, underscores (\_), and hyphens (-), and must start with a letter.

**Note** The value cannot start with http:// or https://.

Test database

## Examples

Sample success responses

`JSON`format

```
{
  "LogBackupEnabledTime": "2019-06-12T05:44:21Z",
  "BackupEnabled": "Enable",
  "DBInstanceStatus": "Running",
  "LockMode": "Unlock",
  "EngineVersion": 5.6,
  "RegionId": "cn-hangzhou",
  "LogBackupEnabled": "Enable",
  "RequestId": "CB7667B2-72C8-497B-9BD8-3B343CEF51AB",
  "RetentType": 1,
  "Retention": 15,
  "CrossBackupType": 1,
  "CrossBackupRegion": "cn-shanghai",
  "DBInstanceId": "rm-uf6wjk5xxxxxxxxxx",
  "Engine": "mysql",
  "BackupEnabledTime": "2019-06-12T05:44:21Z",
  "DBInstanceDescription": "Test database\n"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidRegion.Format

Specified Region is not valid.

The region ID is invalid. Check the region ID.

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

403

CrossBackupNotSupport

Specified region not support cross region backup.

Cross-zone backup is not supported in the specified region.

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

404

InvalidPage.notFound

Page not found.

The specified parameters are not found. Check your parameters.

404

InvalidClusterKms

The current instance does not authorized to access the Key Management Service.

The instance does not have permissions to access Key Management Service (KMS).

500

ExternalFailure

The request processing has failed due to external service failure.

The request processing has failed due to external service failure.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-11-20

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeInstanceCrossBackupPolicy?updateTime=2024-11-20#workbench-doc-change-demo)

2022-09-01

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeInstanceCrossBackupPolicy?updateTime=2022-09-01#workbench-doc-change-demo)
