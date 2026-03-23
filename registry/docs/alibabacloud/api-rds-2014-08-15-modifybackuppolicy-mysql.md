Modifies the backup policy settings of an instance.

## Operation description

### [](#supported-database-engines)Supported database engines

-   MySQL
-   PostgreSQL
-   SQL Server
-   MariaDB

### [](#references)References

**Note** Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.

-   [Configure an automatic backup policy for an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/enable-the-automatic-backup-feature-for-an-apsaradb-rds-for-mysql-instance)
-   [Configure an automatic backup policy for an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/back-up-an-apsaradb-rds-for-postgresql-instance)
-   [Configure an automatic backup policy for an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/back-up-an-apsaradb-rds-for-sql-server-instance)
-   [Configure an automatic backup policy for an ApsaraDB RDS for MariaDB instance](/help/en/rds/apsaradb-rds-for-mariadb/back-up-an-apsaradb-rds-for-mariadb-instance)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/ModifyBackupPolicy)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/ModifyBackupPolicy)

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

rds:ModifyBackupPolicy

update

\*DBInstance

`acs:rds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}`

-   rds:ResourceTag
-   rds:EnableBackupLog
-   rds:BackupLog

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

The type of the backup. Valid values:

-   **DataBackupPolicy**: data backup
-   **LogBackupPolicy**: log backup

DataBackupPolicy

PreferredBackupTime

string

No

The time at which you want to perform a backup. Specify the time in the ISO 8601 standard in the _HH:mm_Z-_HH:mm_Z format. The time must be in UTC.

**Note**-   This parameter must be specified when **BackupPolicyMode** is set to **DataBackupPolicy**.
-   This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.

00:00Z-01:00Z

PreferredBackupPeriod

string

No

The backup cycle. Specify at least two days of the week and separate the days with commas (,). Valid values:

-   **Monday**
-   **Tuesday**
-   **Wednesday**
-   **Thursday**
-   **Friday**
-   **Saturday**
-   **Sunday**

**Note**-   You can configure a backup policy by using this parameter and the **BackupInterval** parameter. For example, if you set this parameter to Saturday,Sunday and the **BackupInterval** parameter to 30, a backup is performed every 30 minutes on every Saturday and Sunday.
-   This parameter must be specified when **BackupPolicyMode** is set to **DataBackupPolicy**.
-   This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.

Monday

BackupRetentionPeriod

string

No

The number of days for which you want to retain data backup files. Valid values: **7 to 730**.

**Note**-   This parameter must be specified when **BackupPolicyMode** is set to **DataBackupPolicy**.
-   This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.

7

BackupLog

string

No

Specifies whether to enable the log backup feature. Valid values:

-   **Enable**: enables the feature.
-   **Disabled**: disables the feature.

**Note**-   This parameter must be specified when **BackupPolicyMode** is set to **DataBackupPolicy**.
-   This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.

Enable

LogBackupRetentionPeriod

string

No

The number of days for which the log backup is retained. Valid values: **7 to 730**. The log backup retention period cannot be longer than the data backup retention period.

**Note**-   If you enable the log backup feature, you can specify the log backup retention period. This parameter is supported for instances that run MySQL and PostgreSQL.
-   This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy** or **LogBackupPolicy**.

7

EnableBackupLog

string

No

Specifies whether to enable the log backup feature. Valid values:

-   **True** or **1**: enables the log backup feature.
-   **False** or **0**: disables the log backup feature.

**Note**

-   You must specify this parameter when you set the **BackupPolicyMode** parameter to **LogBackupPolicy**.
    
-   This parameter takes effect only when you set the **BackupPolicyMode** parameter to **LogBackupPolicy**.
    

1

LocalLogRetentionHours

string

No

The number of hours for which you want to retain log backup files on the instance. Valid values: **0 to 168**. The value 0 specifies that log backup files are not retained on the instance. The value 168 is calculated based on the following formula: 7 × 24.

**Note**-   This parameter must be specified when **BackupPolicyMode** is set to **LogBackupPolicy**.
-   This parameter takes effect only when **BackupPolicyMode** is set to **LogBackupPolicy**.

18

LocalLogRetentionSpace

string

No

The maximum storage usage that is allowed for log backup files on the instance. If the storage usage for log backup files on the instance exceeds the value of this parameter, the system deletes earlier log backup files until the storage usage falls below the value of this parameter. Valid values:**0 to 50**. You can retain the default value.

**Note**-   This parameter must be specified when **BackupPolicyMode** is set to **LogBackupPolicy**.
-   This parameter takes effect only when **BackupPolicyMode** is set to **LogBackupPolicy**.

30

HighSpaceUsageProtection

string

No

Specifies whether to forcefully delete log backup files from the instance when the storage usage of the instance exceeds 80% or the amount of remaining storage on the instance is less than 5 GB. Valid values: **Enable and Disable**. You can retain the default value.

**Note**-   You must specify this parameter when you set the **BackupPolicyMode** parameter to **LogBackupPolicy**.
-   This parameter takes effect only when you set the **BackupPolicyMode** parameter to **LogBackupPolicy**.

Enable

LogBackupFrequency

string

No

The frequency at which you want to back up the logs of the instance. Valid values:

-   **LogInterval**: A log backup is performed every 30 minutes.
-   The default value is the same as the data backup frequency.

**Note**-   The value **LogInterval** is supported only for instances that run SQL Server.
-   This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.

LogInterval

CompressType

string

No

The format that is used to compress backup data. Valid values:

-   **0**: Backups are not compressed.
-   **1**: The zlib tool is used to compress backups into .tar.gz files.
-   **2**: The zlib tool is used to compress backups in parallel.
-   **4**: The QuickLZ tool is used to compress backups into .xb.gz files. This compression format is supported for instances that run MySQL 5.6 or MySQL 5.7. Backups in this compression format can be used to restore individual databases and tables. For more information, see [Restore individual databases and tables of an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/restore-individual-databases-and-tables-of-an-apsaradb-rds-for-mysql-instance).
-   **8**: The QuickLZ tool is used to compress backups into .xb.gz files. This compression format is supported only for instances that run MySQL 8.0. Backups in this compression format cannot be used to restore individual databases and tables.

**Note** This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.

4

ArchiveBackupRetentionPeriod

string

No

The number of days for which the archived backup is retained. The default value **0** specifies that the backup archiving feature is disabled. Valid values: **30** to **1095**.

**Note** This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.

365

ArchiveBackupKeepPolicy

string

No

The retention period of archived backup files. The number of archived backup files that can be retained within the specified retention period is specified by **ArchiveBackupKeepCount**. Default value: **0**. Valid values:

-   **ByMonth**
-   **ByWeek**
-   **KeepAll**

**Note** This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.

ByMonth

ArchiveBackupKeepCount

integer

No

The number of archived backup files that are retained. Default value: **1**. Valid values:

-   Valid values when **ArchiveBackupKeepPolicy** is set to **ByMonth**: **1** to **31**.
-   Valid values when **ArchiveBackupKeepPolicy** is set to **ByWeek**: **1** to **7**.

**Note**-   You do not need to specify this parameter when **ArchiveBackupKeepPolicy** is set to **KeepAll**.
-   This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.

1

ReleasedKeepPolicy

string

No

The policy that is used to retain archived backup files if the instance is released. Valid values:

-   **None**: No archived backup files are retained.
-   **Lastest**: Only the last archived backup file is retained.
-   **All**: All archived backup files are retained.

**Note**-   This parameter takes effect only when you set the **BackupPolicyMode** parameter to **DataBackupPolicy**.
-   If the instance uses cloud disks and was created on or after February 1, 2024, this parameter is automatically set to **Lastest**. If the instance uses local disks in the same scenario, this parameter is automatically set to **None**. For more information, see [Backup for deleted instances](/help/en/rds/apsaradb-rds-for-mysql/configure-backup-retention-policies-for-released-instances).

None

LogBackupLocalRetentionNumber

integer

No

The number of binary log files that you want to retain on the instance. Default value: **60**. Valid values: **6** to **100**.

**Note**

-   This parameter takes effect only when you set the **BackupPolicyMode** parameter to **LogBackupPolicy**.
    
-   If the instance runs MySQL, you can set this parameter to \*\*-1\*\*. The value \*\*-1\*\* specifies that an unlimited number of binary log files can be retained on the instance.
    

60

Category

string

No

Specifies whether to enable the single-digit second backup feature. Valid values:

-   **Flash**: enables the feature.
-   **Standard**: disables the feature.

**Note** This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.

Standard

BackupInterval

string

No

The frequency at which you want to perform a snapshot backup on the instance. Valid values:

-   **\-1**: No backup frequencies are specified.
-   **30**: A snapshot backup is performed every 30 minutes.
-   **60**: A snapshot backup is performed every 60 minutes.
-   **120**: A snapshot backup is performed every 120 minutes.
-   **240**: A snapshot backup is performed every 240 minutes.
-   **480**: A snapshot backup is performed every 480 minutes.

**Note**-   You can configure a backup policy by using this parameter and the **PreferredBackupPeriod** parameter. For example, if you set **PreferredBackupPeriod** to Saturday,Sunday and BackupInterval to \*\*-1\*\*, a snapshot backup is performed on every Saturday and Sunday.
-   If the instance runs PostgreSQL, BackupInterval is supported only when the instance is equipped with cloud disks.
-   If the instance runs SQL Server, BackupInterval is supported only when the snapshot backup feature is enabled for the instance. For more information, see [Enable snapshot backups for an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/enable-the-snapshot-backup-feature-for-an-apsaradb-rds-for-sql-server-instance).
-   If **Category** is set to **Flash**, BackupInterval is invalid.
-   This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.

30

BackupMethod

string

No

The backup method of the instance. Valid values:

-   **Physical**: physical backup
-   **Snapshot**: snapshot backup

Default value: **Physical**.

**Note**-   This parameter takes effect only on instances that run SQL Server with cloud disks.
-   This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.

Physical

EnableIncrementDataBackup

boolean

No

Specifies whether to enable incremental backup. Valid values:

-   **false** (default): disables the feature.
-   **true**: enables the feature.

**Note**-   This parameter takes effect only on instances that run SQL Server with cloud disks.
-   This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.

false

BackupPriority

integer

No

Specifies whether the backup settings of a secondary instance are configured. Valid values:

-   **1**: secondary instance preferred
-   **2**: primary instance preferred

**Note**-   This parameter is suitable only for instances that run SQL Server on RDS Cluster Edition.
-   This parameter takes effect only when **BackupMethod** is set to **Physical**. If **BackupMethod** is set to **Snapshot**, backups are forcefully performed on the primary instance that runs SQL Server on RDS Cluster Edition.

2

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The ID of the request.

DA147739-AEAD-4417-9089-65E9B1D8240D

CompressType

string

The method that is used to compress backups. Valid values:

-   **0:** Backups are not compressed.
-   **1**: Backups are compressed by using the zlib tool.
-   **2**: Backups are compressed in parallel by using the zlib tool.
-   **4**: Backups are compressed by using the QuickLZ tool and can be used to restore individual databases and tables.
-   **8**: Backups are compressed by using the QuickLZ tool but cannot be used to restore individual databases or tables. This value is supported only for instances that run MySQL 8.0.

4

LocalLogRetentionSpace

string

The maximum storage usage that is allowed for log backup files on the instance.

30

LogBackupLocalRetentionNumber

integer

The number of binary log files on the instance.

60

DBInstanceID

string

The instance ID.

rm-uf6wjk5xxxxxxx

EnableBackupLog

string

Indicates whether the log backup feature is enabled. Valid values:

-   **1**: The feature is enabled.
-   **0**: The feature is disabled.

1

LocalLogRetentionHours

integer

The number of hours for which log backup files are retained on the instance.

18

HighSpaceUsageProtection

string

Specifies whether to forcefully delete log backup files from the instance when the storage usage of the instance exceeds 80% or the amount of remaining storage on the instance is less than 5 GB.

Disable

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "DA147739-AEAD-4417-9089-65E9B1D8240D",
  "CompressType": 4,
  "LocalLogRetentionSpace": 30,
  "LogBackupLocalRetentionNumber": 60,
  "DBInstanceID": "rm-uf6wjk5xxxxxxx",
  "EnableBackupLog": 1,
  "LocalLogRetentionHours": 18,
  "HighSpaceUsageProtection": "Disable"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidColdRetention.Format

Invalid cold retention format.

\-

400

InvalidLogBackupFrequency.Malformed

Invalid log backup frequency.

The value of the LogBackupFrequency parameter is invalid. Check the value of this parameter.

400

InvalidBackupRetentionPeriod.Malformed

The specified backup retention period is invalid.

The backup cycle is left unspecified. Specify a backup cycle in the range of 1 day to 30 days.

400

BackupPropertyNotFound

Backup policy not found

The operation failed. The backup policy cannot be found.

400

OperationDenied.SwitchToSnapshot

Snapshot backup does not support cross region storage at present. Please turn off cross region backup before switching to snapshot backup mode.

Snapshot backups cannot be stored across regions. Disable cross-region backup first and then switch to the snapshot backup mode.

400

InvalidReleasedKeepPolicy.Format

Specified Released Keep Policy is not valid.

Specified Released Keep Policy is not valid.

400

IncorrectBackupPolicy

The current instance has an advanced backup policy enabled. Currently, you cannot use the OpenAPI to modify the backup policy. You need to modify the backup policy in the console.

The current instance has an advanced backup policy enabled. Currently, you cannot use the OpenAPI to modify the backup policy. You need to modify the backup policy in the console.

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

403

IncorrectCategory

Current Instance type does not support Category.

The category is not supported for the specified instance type.

403

OperationDenied.SwitchSnapshotToPhysical

Only physical backup to snapshot backup is supported.

The current operation only supports physical backups to snapshot backups.

403

OperationDenied.ModifyBackupSwitchOff

The switch is not turned on. It is forbidden to modify the backup mode.

Cross-region backup is not enabled.

403

OperationDenied.ApiForbiddenForLogBackupFrequency

When the instance is a snapshot backup, the log backup frequency is not allowed to be consistent with the data backup.

When the instance is in snapshot backup mode, the log backup frequency must not be Same as Data Backup.

403

OperationDenied.NotSupportedBackupMethod

When the storage is larger than 4000 GB, only snapshot backup is supported.

If the storage capacity is larger than 4,000 GB, only snapshot backup is supported.

403

OperationDenied.ApiForbidden

Operation is not permitted.

The operation is not supported.

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

2025-03-31

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyBackupPolicy?updateTime=2025-03-31#workbench-doc-change-demo)

2024-06-03

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyBackupPolicy?updateTime=2024-06-03#workbench-doc-change-demo)

2023-06-29

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyBackupPolicy?updateTime=2023-06-29#workbench-doc-change-demo)

2022-05-10

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyBackupPolicy?updateTime=2022-05-10#workbench-doc-change-demo)
