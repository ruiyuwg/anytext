Changes the instance type and storage capacity of an ApsaraDB RDS instance.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

-   MySQL
-   PostgreSQL
-   SQL Server
-   MariaDB

### [](#billing-details)[](#)Billing details

[Fees for specification changes](/help/en/rds/product-overview/specification-changes) are generated if the call is successful. Before you call this operation, carefully read the following topics.

### [](#references)[](#)References

-   [Change the specifications of an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/change-the-specifications-of-an-apsaradb-rds-for-mysql-instance)
-   [Change the specifications of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/change-the-specifications-of-an-apsaradb-rds-for-postgresql-instance)
-   [Change the specifications of an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/change-the-specifications-of-an-apsaradb-rds-for-sql-server-instance)
-   [Change the specifications of an ApsaraDB RDS for MariaDB instance](/help/en/rds/apsaradb-rds-for-mariadb/change-the-specifications-of-an-apsaradb-rds-for-mariadb-instance)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/ModifyDBInstanceSpec)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/ModifyDBInstanceSpec)

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

rds:ModifyDBInstanceSpec

update

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

The instance ID. You can call the [DescribeDBInstances](/help/en/rds/developer-reference/api-rds-2014-08-15-describedbinstances) operation to query the instance IDs.

rm-uf6wjk5\*\*\*\*\*\*\*

DBInstanceClass

string

No

The instance type of the new instance. For more information, see [Specifications](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types) . You can call the [DescribeAvailableClasses](/help/en/rds/developer-reference/api-rds-2014-08-15-describeavailableclasses) operation to query the instance types.

**Note**-   You must specify at least one of DBInstanceClass and **DBInstanceStorage**.
-   You can call the [DescribeDBInstanceAttribute](/help/en/rds/developer-reference/api-rds-2014-08-15-describedbinstanceattribute) operation to query the current instance type of the instance.

rds.mys2.small

DBInstanceStorage

integer

No

The storage capacity of the new instance. Unit: GB. For more information, see [Storage types](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types). You can call the [DescribeAvailableClasses](/help/en/rds/developer-reference/api-rds-2014-08-15-describeavailableclasses) operation to query the storage capacity range that is supported by the new instance type.

**Note**-   You must specify at least one of DBInstanceStorage and **DBInstanceClass**.
-   You can call the [DescribeDBInstanceAttribute](/help/en/rds/developer-reference/api-rds-2014-08-15-describedbinstanceattribute) operation to query the current storage capacity of the instance.

20

PayType

string

No

The billing method of the instance. Valid values:

-   **Postpaid**: pay-as-you-go.
-   **Prepaid**: subscription.
-   **Serverless**: serverless. This value is not supported for ApsaraDB RDS for MariaDB instances.

**Note** If you want to set this parameter to Serverless, \*\*you must specify \*\*AutoPause, MaxCapacity, MinCapacity, and SwitchForce. For more information, see [Overview of serverless ApsaraDB RDS for MySQL instances](/help/en/rds/apsaradb-rds-for-mysql/rds-mysql-serverless), [Overview of serverless ApsaraDB RDS for SQL Server instances](/help/en/doc-detail/604344.html), and [Overview of serverless ApsaraDB RDS for PostgreSQL instances](/help/en/doc-detail/607742.html).

Postpaid

EffectiveTime

string

No

The time when the new specifications take effect. Valid values:

**Note** **Specific changes may affect the instance**. Read the [Impact](/help/en/rds/apsaradb-rds-for-mysql/change-the-specifications-of-an-apsaradb-rds-for-mysql-instance) section before you specify this parameter. We recommend that you specify this parameter during off-peak hours.

-   **Immediate** (default): The changes immediately take effect.
-   **MaintainTime**: The changes take effect during the [maintenance window](/help/en/rds/developer-reference/api-rds-2014-08-15-modifydbinstancemaintaintime) of the instance.
-   **ScheduleTime**: The changes take effect at the point in time that you specify. This time must be at least 12 hours later than the current time. The actual effective time is calculated based on the following formula: EffectiveTime = ScheduleTime + SwitchTime.

MaintainTime

EngineVersion

string

No

The database engine version of the instance. Valid values:

**Regular RDS instances**

-   Valid values when Engine is set to MySQL: 5.5, 5.6, 5.7, and 8.0.
-   Valid values when Engine is set to SQLServer: 2008r2, 08r2\_ent\_ha, 2012, 2012\_ent\_ha, 2012\_std\_ha, 2012\_web, 2014\_std\_ha, 2016\_ent\_ha, 2016\_std\_ha, 2016\_web, 2017\_std\_ha, 2017\_ent, 2019\_std\_ha, and 2019\_ent.
-   Valid values when Engine is set to PostgreSQL: 10.0, 11.0, 12.0, 13.0, 14.0, and 15.0.
-   Valid value when Engine is set to MariaDB: 10.3.

**Serverless instances. ApsaraDB RDS for MariaDB does not support serverless instances.**

-   Valid values when Engine is set to MySQL: 5.7 and 8.0.
-   Valid values when Engine is set to SQL Server: 2016\_std\_sl, 2017\_std\_sl, and 2019\_std\_sl.
-   Valid values when Engine is set to PostgreSQL: 14.0, 15.0, and 16.0.

5.6

DBInstanceStorageType

string

No

The storage type of the new instance. Valid values:

-   **local\_ssd**: local SSD.
-   **cloud\_ssd**: SSD cloud disks. This storage medium is not recommended and is unavailable in specific Alibaba Cloud regions.
-   **cloud\_essd**: performance level 1 (PL1) Enterprise SSD (ESSD).
-   **cloud\_essd2**: PL2 ESSD.
-   **cloud\_essd3**: PL3 ESSD.

To change the storage type, take note of the following items:

If the instance runs PostgreSQL, you can upgrade the storage type of the instance from standard SSDs to ESSDs. However, you cannot downgrade the storage type of the instance from ESSDs to standard SSDs. ESSDs provide the following PLs: ESSDs of PL1, ESSDs of PL2, and ESSDs of PL3. You can upgrade or downgrade the storage type between ESSD of PL1, ESSD of PL2, and ESSD of PL3. For more information, see [Configuration items](/help/en/rds/apsaradb-rds-for-postgresql/change-the-specifications-of-an-apsaradb-rds-for-postgresql-instance).

local\_ssd

ReadOnlyDBInstanceClass

string

No

The specification of the read-only instance when you change the storage type of the ApsaraDB RDS for MySQL instance that runs RDS High-availability Edition from cloud disk to local disk.

mysqlro.n2.large.c

Direction

string

No

The type of change that you want to perform on the instance. Valid values:

-   **Up** (default): upgrades a subscription instance, or upgrades or downgrades a pay-as-you-go instance.
-   **Down**: downgrades a subscription instance.
-   **TempUpgrade**: performs auto scaling on a subscription instance that runs SQL Server. This value is required for auto scaling.
-   **Serverless**: modifies the auto scaling settings of a serverless instance.

**Note** If you specify only **DBInstanceStorageType**, you can leave Direction empty. For example, if you want to change only the storage type of the instance from standard SSD to Enterprise SSD (ESSD), you do not need to specify Direction.

Up

SourceBiz

string

No

A deprecated parameter. You do not need to specify this parameter.

Specifies whether to enable the automatic suspension feature.

DedicatedHostGroupId

string

No

The ID of the dedicated cluster.

dhg-7a9\*\*\*\*\*\*\*\*

ZoneId

string

No

The RDS edition of the instance. Valid values:

-   **Basic**: RDS Basic Edition.
-   **HighAvailability**: RDS High-availability Edition.
-   **AlwaysOn**: RDS Cluster Edition for SQL Server.
-   **Finance**: RDS Enterprise Edition. This edition is available only on the China site (aliyun.com).

**Note** If you set **EngineVersion** to an SQL Server version number, you must also specify this parameter.

cn-hangzhou-b

SwitchTime

string

No

The time at which you want to change the specifications. **We recommend that you perform the specification changes during off-peak hours.**

Specify the time in the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time must be in UTC.

**Note**-   The time at which you want to change the specifications **must be later than the current time**. Otherwise, the specification change task fails. If the specification change task fails, you must wait for the order to be automatically canceled, and then call this operation again.
-   If you want to increase the storage capacity or change the ESSD storage type between different PLs, the specification change immediately takes effect and does not affect your workloads. You do not need to specify this parameter.

2019-07-10T13:15:12Z

ResourceGroupId

string

No

The ID of the resource group.

rg-acfmy\*\*\*\*\*\*\*\*\*\*

UsedTime

long

No

The validity period of the specification changes on an ApsaraDB RDS for SQL Server instance. At the end of the validity period, the specifications of the instance are restored to the specifications that are used before an [elastic upgrade](/help/en/rds/apsaradb-rds-for-sql-server/change-the-specifications-of-an-apsaradb-rds-for-sql-server-instance) is performed. Unit: days.

3

ServerlessConfiguration

object

No

The specifications that you want to change for a serverless instance.

AutoPause

boolean

No

Specifies whether to enable the automatic start and stop feature for the serverless instance that runs MySQL or PostgreSQL. Valid values:

-   **true**
-   **false** (default)

**Note** After the automatic start and stop feature is enabled, if no connections to the instance are established within 10 minutes, the instance is suspended. After a connection to the instance is established, the instance is automatically resumed.

true

MaxCapacity

double

No

The **maximum** number of RDS Capacity Units (RCUs). Valid values:

-   Serverless ApsaraDB RDS for MySQL instances: **1 to 32**
-   Serverless ApsaraDB RDS for SQL Server instances: **2 to 16**. Only integers are supported.
-   Serverless ApsaraDB RDS for PostgreSQL instances: **1 to 14**

**Note** The value of this parameter must be greater than or equal to the value of **MinCapacity**.

8

MinCapacity

double

No

The minimum number of RCUs. Valid values:\*\*\*\*

-   Serverless ApsaraDB RDS for MySQL instances: **0.5 to 32**.
-   Serverless ApsaraDB RDS for SQL Server instances: **2 to 8**. Only integers are supported.
-   Serverless ApsaraDB RDS for PostgreSQL instances: **0.5 to 14**.

**Note** The value of this parameter must be less than or equal to the value of MaxCapacity.

0.5

SwitchForce

boolean

No

Specifies whether to enable the forceful scaling feature for the serverless instance that runs MySQL or PostgreSQL. Valid values:

-   **true**
-   **false** (default)

**Note**

-   If you set this parameter to true, **a service interruption that lasts 30 to 120 seconds occurs during forced scaling**. Process with caution.
    
-   The RCU scaling for a serverless instance immediately takes effect. In some cases, such as the execution of large transactions, the scaling does not immediately take effect. In this case, you can enable this feature to forcefully scale the RCUs of the instance.
    

false

Category

string

No

The RDS edition of the instance. Valid values:

**Note** If you set **EngineVersion** to an SQL Server version number, you must also specify this parameter.

**Regular RDS instances**

-   **Basic**: RDS Basic Edition.
-   **HighAvailability**: RDS High-availability Edition.
-   **AlwaysOn**: RDS Cluster Edition for ApsaraDB RDS for SQL Server.
-   **Cluster**: RDS Cluster Edition for ApsaraDB RDS for MySQL.

**Serverless instances. ApsaraDB RDS for MariaDB does not support serverless instances.**

-   **serverless\_basic**: RDS Basic Edition. This edition is available only for serverless instances that run MySQL and PostgreSQL.
-   **serverless\_standard**: RDS High-availability Edition. This edition is available only for serverless instances that run MySQL and PostgreSQL.
-   **serverless\_ha**: RDS High-availability Edition for serverless instances. This edition is available only for instances that run SQL Server.

HighAvailability

BurstingEnabled

boolean

No

An invalid parameter. You do not need to specify this parameter.

false

AutoUseCoupon

boolean

No

Specifies whether to use vouchers to offset fees. Valid values:

-   **true**
-   **false** (default)

false

TargetMinorVersion

string

No

The minor engine version number of the ApsaraDB RDS for PostgreSQL instance. For more information, see [Update the minor engine version](/help/en/rds/apsaradb-rds-for-postgresql/release-notes-for-alipg). If the minor engine version does not support changing the instance type, you must specify the minor engine version to **update the minor engine version when you change the instance type**.

Format: `rds_postgres_<Major engine version>00_<Minor engine version>`. For example, if the instance runs PostgreSQL 12, set this parameter to `rds_postgres_1200_20200830`.

rds\_postgres\_1200\_20200830

IoAccelerationEnabled

string

No

A reserved parameter.

None

ColdDataEnabled

boolean

No

A reserved parameter.

true

ZoneIdSlave1

string

No

The zone ID of the secondary instance. If you set this parameter to the same value as **ZoneId**, the single-zone deployment method is used. If you set this parameter to a different value from **ZoneId**, the multi-zone deployment method is used.

**Note** If you want to upgrade the major engine version of an ApsaraDB RDS for SQL Server instance by specifying AllowMajorVersionUpgrade or change the secondary zone, you must specify this parameter.

cn-hangzhou-c

VSwitchId

string

No

The vSwitch ID. The vSwitch must belong to the zone that is specified by **ZoneId**.

-   If you set **InstanceNetworkType** to **VPC**, you must also specify this parameter.
-   If you specify ZoneSlaveId1, you must specify the IDs of two vSwitches for this parameter and separate the IDs with a comma (,).

**Note** If you want to upgrade the major engine version of an ApsaraDB RDS for SQL Server instance by specifying AllowMajorVersionUpgrade or change the vSwitch, you must specify this parameter.

vsw-bp1oxflciovg9l7163lr7

AllowMajorVersionUpgrade

boolean

No

Specifies whether to upgrade the major engine version of an ApsaraDB RDS for SQL Server instance. For more information, see [Upgrade the major engine version](/help/en/rds/apsaradb-rds-for-sql-server/upgrade-the-major-engine-version-and-rds-edition-of-an-apsaradb-rds-for-sql-server-instance). Valid values:

-   **true**
-   **false** (default)

**Note**-   When you upgrade the major engine version, you must also specify the required parameters such as DBInstanceId, EngineVersion, DBInstanceClass, Category, ZoneId, and VSwitchId.
-   If you want to upgrade the instance edition to RDS High-availability Edition or RDS Cluster Edition, you must specify ZoneIdSlave1.

false

PromotionCode

string

No

The coupon code.

723298850895

OptimizedWrites

string

No

Specifies whether to enable the write optimization feature for the ApsaraDB RDS for MySQL instance. For more information, see [Use the write optimization feature](/help/en/rds/apsaradb-rds-for-mysql/16kb-atomic-write). Valid values:

-   **optimized**: enables the feature.
-   **none**: disables the feature.

optimized

CompressionMode

string

No

Specifies whether to enable the storage compression feature for the ApsaraDB RDS for MySQL instance. For more information, see [Use the storage compression feature](/help/en/rds/apsaradb-rds-for-mysql/storage-compression). Valid values:

-   **on**
-   **off**

on

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

DBInstanceId

string

The instance ID.

rm-uf6wjk5\*\*\*\*\*\*\*

OrderId

long

The ID of the order.

20793850608\*\*\*\*

RequestId

string

The ID of the request.

3C5CFDEE-F774-4DED-89A2-1D76EC63C575

## Examples

Sample success responses

`JSON`format

```
{
  "DBInstanceId": "rm-uf6wjk5*******",
  "OrderId": 0,
  "RequestId": "3C5CFDEE-F774-4DED-89A2-1D76EC63C575"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

UnsupportedReduceDiskSize

%s%s

\-

400

CannotDecreaseEssdPerfLevel

cannot decrease cloud essd performance level.

The storage type change failed the verification check. The storage type of an RDS instance that runs SQL Server with standard SSDs or ESSDs cannot be changed to local SSDs.

400

InvalidEssdStorageSize

invalid cloud essd storage size.

The storage size of cloud disks is invalid. Check the storage size.

400

Postpaid.NotSupport

Postpaid not supported.

\-

400

InvalidConcurrentOperate

System concurrent operate.

\-

400

NotSupportReduceDiskSize

Not support reduce disk size.

You cannot decrease the disk size.

400

IncorrectStorageType

Incorrect storage type.

\-

400

TargetStorageLessThanBottomLine

Target storage less than bottom line

\-

400

InstanceHasUnpaidOrder

The specified Instance has unpaid order.

\-

400

InsufficientBalance

Open volume paid cloud database. Your account balance is less than 100 RMB. Top-up and try again.

\-

400

InvalidDBInstanceClass.NotFound

Specified DB instance class is not found.

The configuration or the instance type cannot be found or has been discontinued. Specify a different configuration or a different instance type.

400

InvalidParameter

The specified parameter "%s" is not valid.

\-

400

InvalidAvZone.Format

Specified AvZone is not valid.

The value of the AvZone parameter is invalid. Check the value of this parameter.

400

OperationDenied.OrderUnPaid

The operation is not permitted due to the wrong Order status (Unpaid).

The operation failed. You have unpaid orders. Check the unpaid orders in Account Center.

400

OperationDenied.InvalidStorageSize

The storage size limit is exceeded.

The disk usage exceeds the upper limit. Free or expand disk space.

400

InsufficientResourceCapacity

The instance cluster does not support this operation.

The operation is not supported for the RDS instance.

400

InvalidUsedTime

The parameter usedTime is invalid.

The specified usedTime parameter is invalid.

400

CannotChangeStorageType

Temp upgrade does not support changing storage type.

Elastic upgrade cannot change the storage type.

400

TempUpgrade.NotSupport

The instance does not support temp upgrade.

This instance does not support elastic upgrade.

400

EngineNotSupported

Engine specified cannot be supported the operation.

The operation failed. This operation is not supported for the database engine version of the RDS instance. Update the minor engine version of the RDS instance.

400

MaxscaleNotSupport

Maxscale not supported

Dedicated proxy is not supported by the instance. Please check the configuration information about enabling dedicated proxy.

400

ADInstanceNotSupportThisOperation

The AD instance is not supported this operation

This operation is not supported for instances that have been joined to an AD domain.

400

BYOKInstanceNotSupportThisOperation

The BYOK instance is not supported this operation

This operation is not supported for instances that have disk encryption enabled.

400

BYOLInstanceNotSupportThisOperation

The BYOL instance is not supported this operation

This operation is not supported for instances that are created from BYOL images.

400

SSLInstanceNotSupportThisOperation

The instance opened SSL, upgrade is not this operation

This operation is not supported for instances that have SSL enabled.

400

TDEInstanceNotSupportThisOperation

The instance opened TDE, this operation is not supported

This operation is not supported for instances that have TDE enabled.

400

InstanceIsSnapshotBackupNotSupportThisOperation

The instance backup method is snapshot backup, this operation is not supported

This operation is not supported for instances that have snapshot backup enabled.

400

InstanceHasReadOnlyInstanceNotSupportThisOperation

The instance has read-only instance or is read-only instance, this operation is not supported

This operation is not supported because this instance has read-only instances or it is a read-only instance.

400

InvalidTargetStorageType

Can not change storage type when modify instance class or storage.

\-

400

InvalidTargetCategory

Specified classcode is not matched with current product type.

The specified classCode does not match the current product type.

400

IncorrectDBInstanceState

Current DB instance state does not support this operation.

\-

400

BackupReadInstanceModifyNotAllowed

Modify Backup Read Instance Is Not Allowed.

You are not allowed to modify the instance from which the backup comes.

400

MinorVersionNotSupport

The current database minor version does not support the operation.

The current instance kernel iteration does not support this operation. You can upgrade the kernel iteration.

400

LX.ARGUMENT.ILLEGAL

The parameters that you specified for the specification change are invalid.

400

ORD.S.QUERY.PROD.ERROR

An error occurred while querying the ordering information

An order query error occurred.

400

InvalidParameter.NotSupportDiskTypeModify

Serverless not support modify disk type!

\-

400

InvalidParameter.NotSupportModifyServerlessConfigAndDiskTogether

Serverless not support modify serverlessconfig and disk together!

\-

400

InvalidParameters.Malformed

One or more of the request parameters provided are not valid.

One or more of the request parameters provided are not valid, please check the API document

400

DBInstancePayTypeNotSupport

Current instance PayType not support this operation or the param PayType not match current instance PayType.

\-

400

InvalidDBInstanceClass.Offline

The specified instance type is no longer provided. Please specify another instance type.

The instance type that you select is no longer available. Select another instance type.

400

IncorrectTargetClasscode

The current instance type does not support this operation.

This operation is not supported by the instance type.

400

InvalidPayType.NotSupported

current instance pay type not support this operation.

The payment type of the current instance does not support this operation.

400

OperationDenied.DurationLimit

The duration between two operations should be greater than specified time.

\-

400

AccountMoneyValidate.error

Insufficient funds available in the account.

\-

400

ChangeEngineVersionNotSupported

This operation does not support modifying the engine version.

You cannot modify the major engine version during this operation.

400

InvalidDBInstanceStorageType

The specified DBInstanceStorageType is invalid.

The specified DBInstanceStorageType parameter is invalid.

400

EncryptionInstancesNotSupport

Cloud disk encryption instances that use byok do not support modify to multi tenant.

Cloud disk encryption instances that use custom keys do not support changing configuration to general-purpose specifications.

400

Commodity.InvalidComponent

The module you purchased is not legal, please buy it again.

The module you purchased is not legal, please buy it again.

400

CommodityServiceCalling.Exception

Failed to call commodity service.

Failed to call commodity service return.

400

Pay.InsufficientBalance

Insufficient available balance.

Insufficient available balance.

400

Price.CommoditySys

Commodity system call exception.

Commodity system call exception.

400

CurrentInsHasColdDB

The current instance has cold storage db.

The current instance has cold storage db.

400

CurrentInsHasColdStorage

Current instance has cold storage.

The current instance has cold storage enabled.

400

InsufficientResourceCapacityCheck

There is insufficient capacity available for the requested instance with precheck.

The available capacity of the instance to be prechecked is insufficient.

400

InvalidStorageSize.Direction

The specified parameter StorageSize does not meet the updating direction constraint requirements.

The storage space does not meet the constraint requirements of the current change direction.

400

InvalidStorageType.Direction

The specified parameter StorageType does not meet the updating direction constraint requirements.

The storage type does not satisfy the change direction constraint.

400

EngineNotSupportShrinkStorage

The current engine does not support shrinking storage space.

The current engine does not support shrinking storage space.

400

InvalidSourceCategory

specified source category is invalid.

The specified source category is invalid.

400

InvalidInstanceLevel.DiskType

Specified instance level not support request disk type

The current instance type does not support the specified storage type.

400

InvalidRCUValue

scaleMin and scaleMax range is not valid.

Invalid scaleMin and scaleMax range.

400

ServiceLinkedRole.NotExist

SLR does not exist, you needs to create SLR first.

The SLR does not exist. You need to create an SLR first.

400

ParamGroupOptionValue.NotSupport

Specified option value unsupported.

\-

400

CreateUpgradeOrderBusinessException

The parameter is illegal or empty.

The parameter is illegal or empty.

400

InvalidReadDBInstanceStorage.Format

Specified Storage is not valid, Read DB Instance storage size must be greater than or equal to primary DB Instance.

The read-only DB instance storage size must be greater than or equal to the primary DB instance.

400

UnsupportedModifyParam

Burst param must be only modified.

Burst param must be only modified.

400

UnsupportedClassCode

The specified DB instance class stops selling.

The specified DB instance class stops selling.

400

InvalidRequestId

The request is copy, check your token.

The request is copy, check your token.

400

UnsupportExtendDisk.NotSupport

Specified DB instance is unsupport extend disk.

Disk expansion is not supported on the specified instance.

400

Order.InstHasUnsettledBills

You currently have outstanding bills, please settle them first.

You currently have outstanding bills, please settle them first.

400

CheckAllowMajorVersionUpgradeFailed

We have detected that you want to upgrade the version of the instance, but the parameter allowMajorVersionUpgrade is false. If you want to upgrade the version of the instance, please set the parameter allowMajorVersionUpgrade to true.

We detected that you want to upgrade the version of the instance, but the parameter allowMajorVersionUpgrade is false. If you want to upgrade the version of the instance, set the parameter allowMajorVersionUpgrade to true.

400

IncorrectDBSslStatus

Specified DB SSLStatus does not support this operation.

The specified database SSL status is invalid.

400

UpgradeEngineVersionCannotChangeStorage

Upgrade engine version can not change storage size.

Upgrading the engine version cannot also change the storage size.

400

ReadOnlyInsNotSupported

Instances containing read-only instances do not allow this operation.

This operation is not allowed for instances that contain read-only instances..

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

RegionDissolvedEOM

Dear customer, Alibaba Cloud plans to optimize and adjust the current region. Cloud services in this region will cease operations. You are currently unable to operate new purchase orders. Thank you for your understanding and support.

Hello, Alibaba Cloud plans to optimize and adjust the current region. Cloud services in this region will stop operating. In order to ensure your business continuity and smooth transition of data migration, you are currently unable to operate new purchase orders. Thank you for your understanding and support.

400

RegionEndTimeDissolvedAustralia

Cloud services in the Australia (Sydney) region will be discontinued. Set the validity date to September 30, 2024 or earlier than September 30, 2024.

Hello customer, this area has been abolished.

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

InvalidParam

Sepcified wal level Parameter is invalid. There are still logical slots in instance, so it can not be set as replica.

The specified wal\_level parameter is invalid. There is still a copy slot in the instance, so it cannot be set to replica.

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

400

InvalidDBInstanceClass.NotSupport

The target primary db instance class can not lower than the original primary db instance class.

The target specification of the master instance must be no less than the original specification.

400

InvalidPayType.NotSame

All primary and read-only instances should have the same payment type.

The payment type of all primary and read-only instances should be the same.

400

InvalidReadOnlyDBInstanceClass.NotSupport

The target read-only db instance class can not lower than the original read-only db instance class.

the target specifications of the read-only instance must be no less than the original specifications (including cpu and memory).

400

InvalidStorageSize.CannotChange

Can not change storage size in this operation. If you need to change disk type, please change storage size first, and the storage size must meet your target disk type's constraint requirements.

The storage size cannot be modified in the current operation. If you need to modify the disk type, use other operations to modify the size of the target disk. The size of the target disk must meet the limit of the target disk type.

400

InvalidStorageSize.ConstraintUnsatisfied

The db instance's storage size dose not meet the constraint requirements of the parameter DBInstanceStorageType. If you still want to change disk type, please change storage size to meet the target disk type's constraint in other operation.

The current storage space of the primary or read-only instance does not meet the storage space constraint DBInstanceStorageType by the target disk type. Please modify the storage space size of the instance separately before implementing the local disk cross-cloud disk operation.

400

ReadonlyDBInstanceClassEmpty

The read-only target instance class should not be empty.

The target specification of the read-only instance must not be empty.

400

ReadonlyDBInstanceClassNotSame

All readonly db instances should have the same instance class.

The current specifications of all read-only instances (including instance types and sizes) should be consistent.

400

StopService.ModifyDBInstanceSpec

The service has been discontinued and does not permit resizing operations on instances using the classic network.

The classic network is offline. The current instance is of the classic network type and has exceeded the service stop time. You cannot change the configuration of the instance.

400

InvalidParam.DiskSize

%s.

The disk capacity selected during configuration change is small.

400

InvalidOrder.NotFound

Specified order does not exist in RDS.

The specified order does not exist in RDS.

400

NotFindAvailableVswitch

Secondary zone, no available switch found under the current vpc.

in the current vpc, no vswitch is available in the standby zone of the instance.

400

InvalidStorageType.NotSupport

The current storage type does not support this operation.

The current storage type does not support this operation.

400

IncorrectReadDBInstanceMemSize

The instance type of read-only instance is too small.

The instance type of read-only instance is too small.

400

DBInstanceNotServerless

The dbinstance is not serverless.

The specified instance is a non-serverless instance.

400

UnSupportDbTypeReduceDiskSize

The current instance does not support scale-in.

The current instance does not support scale-in.

403

IncorrectDBInstanceType

The database instance type does not support the operation.

The operation failed. The operation is not supported for the database engine of the RDS instance.

403

OperationDenied.NotSupportedBackupMethod

When the storage is larger than 4000 GB, only snapshot backup is supported.

If the storage capacity is larger than 4,000 GB, only snapshot backup is supported.

403

IncorrectReadDBInstanceDisksize

Read instance disk size must be equal or higher than primary instance.

The disk size of the read-only instance must be equal to or greater than that of the primary instance.

403

BetaServerlessNotSupportThisAction

Beta Serverless Not Support This Feature

\-

403

GroupReplicationNotSupport.InvalidEngineVersion

Group Replication requires the instance engine version to be 8.0.

\-

403

GroupReplicationNotSupport.InvalidNodeClassCode

Group Replication requires the ClassCode of each node to be consistent.

\-

403

GroupReplicationNotSupport.InvalidNodeNum

Group Replication is not supported, the number of nodes must be an odd number greater than or equal to 3.

\-

403

GroupReplicationNotSupport.InvalidXengine

Group Replication is not supported because the instance has xengine tables.

\-

403

GroupReplicationNotSupport.MemoryTooSmall

Group Replication is not supported because the memory is too small.

\-

403

ARMNotSupport

ARM arch does not support this operation.

\-

403

HostTypeNotSupport

Host type is inconsistent, please check that the original host type is the same as the target host type.

\-

403

CloudSSDNotSupport

Cloud ssd does not support this operation, please upgrade to essd.

\-

403

MaxscaleInstanceNotSupport

Instances with maxscale instance do not support this operation.

\-

403

ReadInstanceNotSupport

Instances with read-only do not support this operation.

\-

403

UnSupportReduceDiskSize

Current instance type does not support reducing disk space.

\-

403

CloudboxInstanceNotSupport

Cloud-box instance does not support this operation.

This operation is not supported for instances in cloud boxes.

403

ReadOnlyInstanceNotSupport

Read-only instance does not support this operation.

This operation is not supported for read-only instances.

403

MinorVersionNotSupport

Custins minor version does not support current action.

\-

403

ShrinkCountReachedLimit

Current DB shrink count reached the limit.

\-

403

InvalidReduceDiskSize

The storage capacity after the scale-down must be larger than the used amount.

The scale-in target capacity cannot be less than the current storage space usage

403

CloudDiskEncryptionNotSupport

The encryption key is not allowed for general-purpose instance.

Universal instances do not support cloud disk encryption.

403

OrderStatus.UnPaid

The specified db instance has unpaid order.

The instance has an unpaid order. Please pay first and try again.

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

403

UnsupportedByBlueGreenDeployment

Operation prohibited due to blue green deployment.

The operation is not allowed because a blue-green deployment exists.

404

InvalidClusterKms

The current instance does not authorized to access the Key Management Service.

The instance does not have permissions to access Key Management Service (KMS).

404

InvalidParam

The parameter is invalid.

The operation failed. The values of some parameters are invalid.

404

Request.NotFound

The requested resource is not available.

The requested resources are unavailable.

404

HostInfo.NotFound

The specified host info is not found.

\-

500

CallLxSdkFailed

Error calling the order system, please try again later or contact service personnel.

Error calling the order system, please try again later or contact service personnel.

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

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBInstanceSpec?updateTime=2025-03-31#workbench-doc-change-demo)

2025-03-23

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBInstanceSpec?updateTime=2025-03-23#workbench-doc-change-demo)

2025-02-07

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBInstanceSpec?updateTime=2025-02-07#workbench-doc-change-demo)

2025-01-15

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBInstanceSpec?updateTime=2025-01-15#workbench-doc-change-demo)

2024-12-24

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBInstanceSpec?updateTime=2024-12-24#workbench-doc-change-demo)

2024-12-03

API Description Update. The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBInstanceSpec?updateTime=2024-12-03#workbench-doc-change-demo)

2024-11-19

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBInstanceSpec?updateTime=2024-11-19#workbench-doc-change-demo)

2024-11-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBInstanceSpec?updateTime=2024-11-13#workbench-doc-change-demo)

2024-10-31

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBInstanceSpec?updateTime=2024-10-31#workbench-doc-change-demo)

2024-10-30

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBInstanceSpec?updateTime=2024-10-30#workbench-doc-change-demo)

2024-10-24

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBInstanceSpec?updateTime=2024-10-24#workbench-doc-change-demo)

2024-09-19

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBInstanceSpec?updateTime=2024-09-19#workbench-doc-change-demo)

2024-09-09

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBInstanceSpec?updateTime=2024-09-09#workbench-doc-change-demo)

2024-09-03

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBInstanceSpec?updateTime=2024-09-03#workbench-doc-change-demo)

2024-07-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBInstanceSpec?updateTime=2024-07-12#workbench-doc-change-demo)

2024-07-11

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBInstanceSpec?updateTime=2024-07-11#workbench-doc-change-demo)

2024-06-27

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBInstanceSpec?updateTime=2024-06-27#workbench-doc-change-demo)

2024-06-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBInstanceSpec?updateTime=2024-06-14#workbench-doc-change-demo)

2024-06-07

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBInstanceSpec?updateTime=2024-06-07#workbench-doc-change-demo)

2024-06-03

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBInstanceSpec?updateTime=2024-06-03#workbench-doc-change-demo)
