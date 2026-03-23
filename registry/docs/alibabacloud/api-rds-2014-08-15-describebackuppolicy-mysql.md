Queries the backup settings of an instance.

## Operation description

### [](#supported-database-engines)Supported database engines

-   MySQL
-   PostgreSQL
-   SQL Server
-   MariaDB

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeBackupPolicy)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeBackupPolicy)

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

rds:DescribeBackupPolicy

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

BackupPolicyMode

string

No

The backup type. Valid values:

-   **DataBackupPolicy**: data backup
-   **LogBackupPolicy**: log backup

DataBackupPolicy

CompressType

string

No

The method that is used to compress backup data. Valid values:

-   **0**: Backup data is not compressed.
-   **1**: Backup data is compressed by using zlib.
-   **2**: Backup data is compressed by using zlib that invokes more than one thread in parallel for each backup.
-   **4**: Backup data is compressed by using QuickLZ and can be used to restore individual databases or tables.
-   **8**: Backup data is compressed by using QuickLZ but cannot be used to restore individual databases or tables.

1

ReleasedKeepPolicy

string

No

The policy that is used to retain archived backup files if the instance is released. Valid values:

-   **None**: No archived backup files are retained.
-   **Lastest**: Only the last archived backup file is retained.
-   **All**: All archived backup files are retained.

Lastest

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

LogBackupRetentionPeriod

integer

The number of days for which log backup files are retained.

7

ArchiveBackupKeepPolicy

string

The cycle based on which archived backup files are retained.

ByMonth

ArchiveBackupKeepCount

string

The number of archived backup files that are retained.

1

LocalLogRetentionHours

integer

The number of hours for which log backup files are retained on the instance.

0

BackupRetentionPeriod

integer

The number of days for which data backup files are retained.

7

RequestId

string

The ID of the request.

B87E2AB3-B7C9-4394-9160-7F639F732031

PreferredBackupPeriod

string

The cycle based on which you want to perform a backup. Separate multiple values with commas (,). Valid values:

-   **Monday**
-   **Tuesday**
-   **Wednesday**
-   **Thursday**
-   **Friday**
-   **Saturday**
-   **Sunday**

Monday,Wednesday,Friday,Sunday

CompressType

string

The method that is used to compress backup data. Valid values:

-   **0**: Backup data is not compressed.
-   **1**: Backup data is compressed by using zlib.
-   **2**: Backup data is compressed by using zlib that invokes more than one thread in parallel for each backup.
-   **4**: Backup data is compressed by using QuickLZ and can be used to restore individual databases or tables.
-   **8**: Backup data is compressed by using QuickLZ but cannot be used to restore individual databases or tables.

1

SupportReleasedKeep

integer

A reserved parameter.

0

LocalLogRetentionSpace

string

The maximum storage usage that is allowed for log files on the instance.

30

SupportVolumeShadowCopy

integer

Indicates whether the instance supports snapshot backups. Valid values:

-   **1**: The instance supports snapshot backups.
-   **0**: The instance does not support snapshot backups.

**Note** This parameter is returned only when the instance runs SQL Server.

1

BackupMethod

string

The backup method of the instance. Valid values:

-   **Physical**: physical backup
-   **Snapshot**: snapshot backup

**Note** This parameter is returned only when the instance runs SQL Server and uses cloud disks.

Physical

LogBackupFrequency

string

The backup frequency of logs. Valid values:

-   **LogInterval**: Log backups are performed every 30 minutes.
-   Default value: same as the value of the **PreferredBackupPeriod** parameter.

**Note** This parameter is returned only when the instance runs SQL Server.

LogInterval

PreferredNextBackupTime

string

The time when the next backup is performed. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm_Z format. The time is displayed in UTC.

2018-01-19T15:15Z

HighSpaceUsageProtection

string

Indicates whether the log backup deletion feature is enabled. If the disk usage exceeds 80% or the remaining disk space is less than 5 GB on the instance, this feature deletes binary log files. Valid values:

-   **Disable**
-   **Enable**

Enable

ArchiveBackupRetentionPeriod

string

The number of days for which archived backup files are retained.

365

BackupInterval

string

The backup interval. Unit: minutes.

-   If the instance runs MySQL, the interval is the same as the value of the Snapshot Backup Start Time parameter rather than the Snapshot Backup Period parameter in the ApsaraDB RDS console. For more information, see [Back up an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/enable-the-automatic-backup-feature-for-an-apsaradb-rds-for-mysql-instance).
-   If the instance runs SQL Server, the interval is the same as the log backup frequency.

30

ReleasedKeepPolicy

string

The policy that is used to retain archived backup files if the instance is released. Valid values:

-   **None**: No archived backup files are retained.
-   **Lastest**: Only the last archived backup file is retained.
-   **All**: All archived backup files are retained.

None

PreferredBackupTime

string

The time when a data backup is performed. The time follows the ISO 8601 standard in the _HH:mm_Z-_HH:mm_Z format. The time is displayed in UTC.

15:00Z-16:00Z

LogBackupLocalRetentionNumber

integer

The number of binary log files that you want to retain on the instance.

60

Category

string

Indicates whether to enable the single-digit second backup feature. This feature allows ApsaraDB RDS to complete a backup within single-digit seconds. Valid values:

-   **Flash**: The single-digit second backup feature is enabled.
-   **Standard**: The single-digit second backup feature is disabled.

**Note** This parameter takes effect only when you set the **BackupPolicyMode** parameter to **DataBackupPolicy**.

Standard

EnableBackupLog

string

Indicates whether the log backup feature is enabled. Valid values:

-   **1**: enabled
-   **0**: disabled

1

BackupLog

string

Indicates whether the log backup feature is enabled. Valid values:

-   **Enable**
-   **Disabled**

Enable

EnableIncrementDataBackup

boolean

Indicates whether incremental backup is enabled. Valid values:

-   **True**: Incremental backup is enabled.
-   **False**: Incremental backup is disabled.

True

SupportModifyBackupPriority

boolean

Indicates whether the backup settings of a secondary instance can be modified. Valid values:

-   **True**
-   **False**

False

BackupPriority

integer

The backup settings of the secondary instance. Valid values:

-   **1**: Secondary instance preferred
-   **2**: Primary instance preferred

**Note** This parameter is available only for instances that run SQL Server on RDS Cluster Edition. This parameter is returned only when SupportModifyBackupPriority is set to True.

2

EnablePitrProtection

boolean

Indicates whether the point-in-time restoration (PITR) feature is enabled. The PITR feature is an enhancement of the log backup feature. Valid values:

-   **True**
-   **False**

**Note** This parameter is returned only when the instance runs MySQL. For more information, see [Configure the PITR feature](/help/en/rds/apsaradb-rds-for-mysql/any-point-in-time-recovery-protection).

True

PitrRetentionPeriod

integer

The number of days during which you can restore data of the instance to any point in time.

7

SupportsHighFrequencyBackup

long

Indicates whether log backups for SQL Server are performed verery five minutes.

-   0: No
-   1: Yes

0

## Examples

Sample success responses

`JSON`format

```
{
  "LogBackupRetentionPeriod": 7,
  "ArchiveBackupKeepPolicy": "ByMonth",
  "ArchiveBackupKeepCount": 1,
  "LocalLogRetentionHours": 0,
  "BackupRetentionPeriod": 7,
  "RequestId": "B87E2AB3-B7C9-4394-9160-7F639F732031",
  "PreferredBackupPeriod": "Monday,Wednesday,Friday,Sunday",
  "CompressType": 1,
  "SupportReleasedKeep": 0,
  "LocalLogRetentionSpace": 30,
  "SupportVolumeShadowCopy": 1,
  "BackupMethod": "Physical",
  "LogBackupFrequency": "LogInterval",
  "PreferredNextBackupTime": "2018-01-19T15:15Z",
  "HighSpaceUsageProtection": "Enable",
  "ArchiveBackupRetentionPeriod": 365,
  "BackupInterval": 30,
  "ReleasedKeepPolicy": "None",
  "PreferredBackupTime": "15:00Z-16:00Z",
  "LogBackupLocalRetentionNumber": 60,
  "Category": "Standard",
  "EnableBackupLog": 1,
  "BackupLog": "Enable",
  "EnableIncrementDataBackup": true,
  "SupportModifyBackupPriority": true,
  "BackupPriority": 2,
  "EnablePitrProtection": true,
  "PitrRetentionPeriod": 7,
  "SupportsHighFrequencyBackup": 0
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

IO.Exception

IO exception, retry later.

An I/O error occurred.

400

InternalFailure

Internal failure, retry later.

The request failed. Please try again later.

400

InvalidParameter.OwnerAccount

The specified parameter OwnerAccount is not valid.

The operation failed. The value of the OwnerAccount parameter is invalid. Check the value of this parameter.

400

InvalidEngine.Malformed

Specified engine is not valid.

The database engine is invalid. Specify a valid database engine.

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

IncorrectDBInstanceState

Current DB instance state does not support this operation.

\-

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

InvalidDBInstance.NotFound

Specified instance does not exist or not support.

The RDS instance cannot be found, is deleted, or does not support the operation.

404

InvalidDBInstanceName.NotFound

Invalid DBInstanceId NotFound.

The instance ID cannot be found.

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

2024-08-30

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeBackupPolicy?updateTime=2024-08-30#workbench-doc-change-demo)

2024-01-31

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeBackupPolicy?updateTime=2024-01-31#workbench-doc-change-demo)

2023-06-29

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeBackupPolicy?updateTime=2023-06-29#workbench-doc-change-demo)

2022-06-24

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeBackupPolicy?updateTime=2022-06-24#workbench-doc-change-demo)
