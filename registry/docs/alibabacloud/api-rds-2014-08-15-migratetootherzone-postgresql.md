Migrates an instance across zones in the same region.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

-   RDS MySQL
-   RDS PostgreSQL
-   RDS SQL Server

### [](#references)[](#)References

**Note** : Before you call this operation, carefully read the following documentation. Make sure that you fully understand the prerequisites and impacts for calling this operation.

-   [Migrate an ApsaraDB RDS for MySQL instance across zones in the same region](/help/en/rds/apsaradb-rds-for-mysql/migrate-an-apsaradb-rds-for-mysql-instance-across-zones-in-the-same-region)
-   [Migrate an ApsaraDB RDS for PostgreSQL instance across zones in the same region](/help/en/rds/apsaradb-rds-for-postgresql/migrate-an-apsaradb-rds-for-postgresql-instance-across-zones-in-the-same-region)
-   [Migrate an ApsaraDB RDS for SQL Server instance across zones in the same region](/help/en/rds/apsaradb-rds-for-sql-server/migrate-an-apsaradb-rds-for-sql-server-instance-across-zones)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/MigrateToOtherZone)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/MigrateToOtherZone)

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

rds:MigrateToOtherZone

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

The instance ID. You can call the DescribeDBInstances operation to query the instance ID.

rm-uf6wjk5xxxxxxxxxx

VPCId

string

No

The ID of the virtual private cloud (VPC). Do not change the VPC of the instance when you migrate the instance across zones.

-   This parameter must be specified when the instance resides in a VPC.
-   If the instance runs SQL Server, you can change the VPC of the instance.

vpc-xxxxxxx

ZoneId

string

Yes

The ID of the destination zone. You can call the DescribeRegions operation to query the most recent region list.

cn-hangzhou-b

EffectiveTime

string

No

The time when you want the change to take effect. Valid values:

-   **Immediately** (default): The change immediately takes effect.
-   **MaintainTime**: The change takes effect during the maintenance window. For more information, see ModifyDBInstanceMaintainTime.
-   **ScheduleTime**: The change takes effect at the point in time that you specify.

**Note** If you set this parameter to **ScheduleTime**, you must specify the **SwitchTime** parameter.

Immediate

VSwitchId

string

No

The vSwitch ID.

-   This parameter must be specified when the instance resides in a VPC. You can call the DescribeVSwitches operation to query existing vSwitches.
-   If the instance runs PostgreSQL or SQL Server and a secondary zone is specified for the instance, you can specify multiple vSwitch IDs, each of which corresponds to a zone. Separate the vSwitch IDs with commas (,).

vsw-uf6adz52c2pxxxxxxx

Category

string

No

The RDS edition of the instance. Valid values:

-   **Basic**: RDS Basic Edition
-   **HighAvailability**: RDS High-availability Edition
-   **AlwaysOn**: SQL Server on RDS Cluster Edition
-   **cluster**: MySQL on RDS Cluster Edition
-   **Finance**: RDS Enterprise Edition

HighAvailability

ZoneIdSlave1

string

No

The secondary zone 1 of the instance.

**Note** This parameter must be configured if the instance runs RDS editions other than RDS Basic Edition.

cn-hangzhou-c

ZoneIdSlave2

string

No

The secondary zone 2 of the instance.

**Note** You can specify this parameter only for instances that run RDS Enterprise Edition.

cn-hangzhou-d

SwitchTime

string

No

The migration time. Specify the time in the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time must be in UTC.

**Note** This parameter is used with **EffectiveTime**. You must specify this parameter only when **EffectiveTime** is set to **ScheduleTime**.

2021-12-14T15:15:15Z

IsModifySpec

string

No

Specifies whether to change the specifications of the instance during the cross-zone migration. Valid values:

-   **true**: You want to change the specifications of the instance during the cross-zone migration. If you set this parameter to **true**, you must specify at least one of **DBInstanceClass** and **DBInstanceStorage**.
-   **false** (default): You do not want to change the specifications of the instance during the cross-zone migration.

**Note** This parameter applies only to instances that run MySQL.

true

DBInstanceClass

string

No

The new instance type of the instance. You can change the instance type of the instance. You cannot change the storage type of the instance. If you set **IsModifySpec** to **true**, you must specify at least one of DBInstanceClass and **DBInstanceStorage**.

For more information about instance types, see [Primary ApsaraDB RDS for MySQL instance types](/help/en/rds/apsaradb-rds-for-mysql/primary-apsaradb-rds-for-mysql-instance-types).

mysql.x4.xlarge.2

DBInstanceStorage

long

No

The new storage capacity of the instance. If you set **IsModifySpec** to **true**, you must specify at least one of DBInstanceStorage and **DBInstanceClass**.

Unit: GB. The available storage capacity range varies based on the instance type of the instance. For more information, see [Primary ApsaraDB RDS for MySQL instance types](/help/en/rds/apsaradb-rds-for-mysql/primary-apsaradb-rds-for-mysql-instance-types).

500

IoAccelerationEnabled

string

No

A reserved parameter.

0

DBInstanceStorageType

string

No

The storage type of the instance. Valid values:

-   **local\_ssd**: local SSD. This is the recommended storage type.
-   **general\_essd**: general Enterprise SSD (ESSD). This is the recommended storage type.
-   **cloud\_essd**: PL1 ESSD
-   **cloud\_essd2**: PL2 ESSD
-   **cloud\_essd3**: PL3 ESSD
-   **cloud\_ssd**: standard SSD. This storage type is not recommended. Standard SSDs are no longer available for purchase in some Alibaba Cloud regions.

The default value of this parameter is determined by the instance type specified by the **DBInstanceClass** parameter.

-   If the instance type specifies the local SSD storage type, the default value of this parameter is **local\_ssd**.
-   If the instance type specifies the standard SSD or ESSD storage type, the default value of this parameter is **cloud\_essd**.

**Note** Serverless instances support only PL1 ESSDs and general ESSDs.

local\_ssd

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

rm-uf6wjk5xxxxxxxxxx

OrderId

long

The ID of the order. This parameter is returned only when the instance runs MySQL.

213341575990728

RequestId

string

The ID of the request.

65BDA532-28AF-4122-AA39-B382721EEE64

## Examples

Sample success responses

`JSON`format

```
{
  "DBInstanceId": "rm-uf6wjk5xxxxxxxxxx",
  "OrderId": 213341575990728,
  "RequestId": "65BDA532-28AF-4122-AA39-B382721EEE64"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

RenewChange.Exist

The Current InstanceId existed renewChange order in RDS.

A specification change task is in progress. Try again after the task is completed.

400

InvalidInstanceCommodityCode.NotFound

Parse commodityCode from lx and instance fail.

\-

400

InvalidMigrateModifyClassOrStorage

Specified parameter DBInstanceClass or Storage is invalid.

\-

400

EngineNotSupported

Engine specified cannot be supported the operation.

The operation failed. This operation is not supported for the database engine version of the RDS instance. Update the minor engine version of the RDS instance.

400

IncorrectDBInstanceLockMode.ValueNotSupported

The Current DB instance lock mode does not support this operation.

The operation failed. The RDS instance is locked.

400

InvalidZoneId.NotNull

The parameter ZoneId must not be null or auto

ZoneId must not be null or auto.

400

InvalidZoneId.NotEqual

The parameter ZoneId is the same as the previous one

The two zones are the same.

400

InvalidDispenseMode.Format

The specified dispense mode is not valid.

\-

400

IncorrectDBInstanceType

Current DB instance type does not support this operation.

The operation failed. The RDS instance is not in a ready state.

400

ZoneId.NotMatchWithCategory

The Number of ZoneId specified does not match with category

\-

400

InvalidDefaultVSwitch.NotFound

The specified default virtual switch is not found in specified VPC.

\-

400

InsufficientResourceCapacityCheck

There is insufficient capacity available for the requested instance with precheck.

The available capacity of the instance to be prechecked is insufficient.

400

UnsupportedReadOrBakReadState

Current DB instance has read or bak read instance running in unsupported states

\-

400

IncorrectDBInstanceState

Current DB instance state does not support this operation.

\-

400

MirrorInsExists

Specified DB instance mirror ins already existed.

Specified DB instance mirror ins already existed.

400

SSLInstanceNotSupportThisOperation

The instance opened SSL, upgrade is not this operation

This operation is not supported for instances that have SSL enabled.

400

BYOLInstanceNotSupportThisOperation

The BYOL instance is not supported this operation

This operation is not supported for instances that are created from BYOL images.

400

BYOKInstanceNotSupportThisOperation

The BYOK instance is not supported this operation

This operation is not supported for instances that have disk encryption enabled.

400

ADInstanceNotSupportThisOperation

The AD instance is not supported this operation

This operation is not supported for instances that have been joined to an AD domain.

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

VswitchIpExhausted

No available ip in the specified vswitch.

No available IP address exists in the specified vSwitch.

400

OperationDenied.MasterDBInstanceState

The operation is not permitted due to status of master instance.

The operation failed. The configuration of the read-only instance is being changed. In this case, you cannot perform this operation on the primary instance. Wait until the configuration of the read-only instance is changed and try again.

400

InvalidShareInstance.NotSupport

The share dbInstance is not support.

This operation is not supported for shared instances.

400

InvalidZoneIdSlave1.Missing

The parameter ZoneIdSlave1 must be specified.

You must specify the secondary zone ID.

400

MigrateAlreadyExistsFault

The rds instance already has a given vpc migrate task.

The RDS instance already contains a VPC migration task.

400

InvalidInstanceKind.NotSupport

The instance kind does not support this operation.

The instance type does not support this operation.

400

MissingCategory

The instance is missing a category parameter.

\-

400

InvalidInstanceNodeType.NotFound

The specified NodeType is not found.

\-

400

EngineVersionNotSupported

EngineVersion specified cannot be replicate with the source DB Instance.

Instance cloning is not supported for the database engine version of the current instance.

400

CommodityCodeNotFound

CommodityCodeNotFound

The specified parameter CommodityCode is invalid. Please check again.

400

InvalidTunnelId

Specified conn tunnel is not valid.

\-

400

SSLNotSupport

The CharacterType of instance does not support SSL.

The character type of the instance does not support SSL.

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

400

UnSupportDbTypeReduceDiskSize

The current instance does not support scale-in.

The current instance does not support scale-in.

400

UnsupportedReduceDiskSize

Current Instance not support reduce disk size less than limit size.

The current instance does not support reducing the disk size to less than the limit size.

400

UnsupportExtendDisk.NotSupport

Specified DB instance is unsupport extend disk.

Disk expansion is not supported on the specified instance.

403

OperationDenied.OutofUsage

The resource is out of usage.

The available resources in the zone are insufficient. Specify a different zone.

403

IncorrectEffectiveTime

The specified EffectiveTime params is not valid.

The value of the EffectiveTime parameter is invalid.

403

InvalidTempInstance.NotSupport

The temp db Instance is not support.

The instance is locked.

403

OperationDenied.LockMode

The operation is not permitted due to instance being locked.

The operation failed. The RDS instance is locked. Check whether the RDS instance has expired or its storage capacity is exhausted. If the RDS instance has expired, renew the RDS instance. If the storage capacity is exhausted, expand the storage capacity of the RDS instance.

403

ClassicNetworkType.NotSupport

The Classic instance network create is not support.

The current instance cannot be deployed in the classic network. Change the network type to VPC.

403

InstanceNetworkTypeNotFoundFault

The specified DBInstanceNetworkType is not found.

The network type failed the verification check. The network type cannot be found.

403

ProprietaryCloud.NotSupported

The proprietary cloud not supported.

\-

403

MigrateAlreadyReadWriteSplitExistsFault

The rds instance already has a given vpc migrate task.

A task of migrating data to the specified VPC already exists.

403

InvalidRegionAvzNotFound

Specified user does not find the region and avz.

\-

403

ZoneIdNotSupported

The zone ID is not supported.

The operation failed. The operation is not supported in the region.

403

InvalidVpcInfo.NotFound

Specified VPC info does not exist.

The specified VPC does not exist.

403

InvalidMultiparamZoneInfoList

Zoneinfo list is invaild.

\-

403

MigrateSlaveNotSupport

Current DB instance state does not support migrating slave, please switch the Primary/Secondary Instance first.

The status of the current instance does not support the migration of only the backup database. Forced migration will reduce the performance of accessing the database. Please perform an HA switch first.

403

CloudDiskEncryptionNotSupport

The encryption key is not allowed for general-purpose instance.

Universal instances do not support cloud disk encryption.

403

IncorrectMinorVersion

Current engine minor version does not support operations.

This operation is not supported for the current minor engine version.

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

InstanceEngineType.NotSupport

The instance engine and type does not support operations.

The RDS MySQL instance engine and type do not support this operation. Check whether the instance kindcode and kernel minor version are too low and upgrade the kernel minor version.

403

UnsupportedByBlueGreenDeployment

Operation prohibited due to blue green deployment.

The operation is not allowed because a blue-green deployment exists.

404

InvalidDBInstanceName.NotFound

The database instance does not exist.

The name of the RDS instance cannot be found. Check the name of the RDS instance.

404

IncorrectVswitchId

The specified parameter VSwitchId is not valid.

The vSwitch ID is invalid.

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

2025-10-29

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/MigrateToOtherZone?updateTime=2025-10-29#workbench-doc-change-demo)

2025-03-31

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/MigrateToOtherZone?updateTime=2025-03-31#workbench-doc-change-demo)

2025-03-12

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/MigrateToOtherZone?updateTime=2025-03-12#workbench-doc-change-demo)

2025-01-10

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/MigrateToOtherZone?updateTime=2025-01-10#workbench-doc-change-demo)

2024-10-31

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/MigrateToOtherZone?updateTime=2024-10-31#workbench-doc-change-demo)

2024-08-15

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/MigrateToOtherZone?updateTime=2024-08-15#workbench-doc-change-demo)

2024-08-15

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/MigrateToOtherZone?updateTime=2024-08-15#workbench-doc-change-demo)

2024-06-03

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/MigrateToOtherZone?updateTime=2024-06-03#workbench-doc-change-demo)

2024-04-17

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/MigrateToOtherZone?updateTime=2024-04-17#workbench-doc-change-demo)

2024-01-04

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/MigrateToOtherZone?updateTime=2024-01-04#workbench-doc-change-demo)

2023-03-31

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/MigrateToOtherZone?updateTime=2023-03-31#workbench-doc-change-demo)

2023-03-01

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/MigrateToOtherZone?updateTime=2023-03-01#workbench-doc-change-demo)

2022-10-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/MigrateToOtherZone?updateTime=2022-10-28#workbench-doc-change-demo)

2022-10-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/MigrateToOtherZone?updateTime=2022-10-13#workbench-doc-change-demo)

2022-06-23

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/MigrateToOtherZone?updateTime=2022-06-23#workbench-doc-change-demo)

2022-06-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/MigrateToOtherZone?updateTime=2022-06-08#workbench-doc-change-demo)

2022-01-12

The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/MigrateToOtherZone?updateTime=2022-01-12#workbench-doc-change-demo)

2021-10-26

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/MigrateToOtherZone?updateTime=2021-10-26#workbench-doc-change-demo)
