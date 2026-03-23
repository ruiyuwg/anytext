Replicates databases between RDS SQL Server instances.

## Operation description

### [](#supported-database-engines)Supported database engines

RDS SQL Server

### [](#references)References

**Note** : Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.

[Replicate databases between ApsaraDB RDS for SQL Server instances](/help/en/rds/apsaradb-rds-for-sql-server/replicate-databases-between-apsaradb-rds-for-sql-server-instances)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/CopyDatabaseBetweenInstances)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/CopyDatabaseBetweenInstances)

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

rds:CopyDatabaseBetweenInstances

create

\*DBInstance

`acs:rds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}`

none

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

The source instance ID. You can call the DescribeDBInstances operation to query the instance ID.

rm-uf6wjk5xxxxxxx

TargetDBInstanceId

string

Yes

The destination instance ID. You can call the DescribeDBInstances operation to query the instance ID.

rm-ut5ajk3xxxxxxx

DbNames

string

Yes

The names of the databases that you want to copy. Format: `Source database name 1,Source database name 2`.

{"test1":"newtest1","test2":"newtest2"}

BackupId

string

No

The ID of the backup set based on which you want to restore databases of the source instance. When you replicate databases by backup set, you can call the DescribeBackups operation to obtain the ID of the backup set.

**Note** You must specify one of the **BackupId** and **RestoreTime** parameters.

106523874\*\*\*\*

RestoreTime

string

No

The point in time when the system replicates databases. You can select a point in time within the backup retention period. Specify the time in the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time must be in UTC.

**Note** You must specify one of the **BackupId** and **RestoreTime** parameters.

2011-06-11T16:00:00Z

SyncUserPrivilege

string

No

Specifies whether to copy users and permissions.

-   **YES**: copies users and permissions. If the destination instance has a user whose name is the same as a user in the source instance, the permissions of the user in the source instance will also be granted to the user in the destination instance after you copy user permissions.
-   **NO**: does not copy users and permissions.

Default value: **NO**.

NO

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

803D11AF-C370-465B-AB46-CB3A642DC303

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "803D11AF-C370-465B-AB46-CB3A642DC303"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

%s

DB Operation Failed:%s.

\-

400

InvalidBackupSetID

Invalid backup set id.

The backup set does not exist. You can call the DescribeBackups operation to query existing backup sets.

400

DBCountLimitExceeded

Db count limit exceeded.

The number of databases is exceeded.

400

BackupRestoreNotSupported.BasicHA

Basic instances cannot be restored to high availability instances, and high availability instances cannot be restored to basic instances.

You cannot restore data from an RDS instance in the Basic Edition to an RDS instance in the High-availability Edition and vice versa.

400

BackupRestoreNotSupported.HADedicatedAlwaysOn

High availability instances cannot be restored to dedicated cluster instances or AlwaysOn instances.

The operation failed. The data of an RDS instance that runs the RDS High-availability Edition cannot be restored to an RDS instance that is deployed in a dedicated cluster or runs the RDS Enterprise Edition.

400

BackupRestoreNotSupported.ShareDedicatedAlwaysOn

Shared instances cannot be restored to dedicated cluster instances, AlwaysOn instances, or high availability instances.

\-

400

OperationDenied.RestoreTime

The instance with snapshot backup enabled can only be restored to the instance with snapshot backup enabled.

You can only restore to snapshot backup-enabled instances for instances that have enabled snapshot backup.

400

OperationDenied.SnapshotBackupSet

Snapshot backup set can only be restored to the instance with snapshot backup enabled.

You can only restore to snapshot backup-enabled instances for instances that have enabled snapshot backup and whose backup set type is snapshot.

400

CanNotCopyDBHasTDEEnabled

The source database has enabled the TDE feature. You cannot copy it to another instance.

TDE is enabled for the source RDS instance. Therefore, the data of the source RDS instance cannot be replicated to a different RDS instance.

400

InvalidBackupDBNames.NotFound

The specified BackupDBNames is not found.

The operation failed. The instance name is not specified.

400

InvalidBackupDBNames.Malformed

The specified backup database is not valid.

The operation failed. The database name is invalid.

400

InvalidDBName.Format

Specified DB name is not valid.

The database name is invalid. Specify a valid name. The name can be up to 16 characters in length and can contain lowercase letters, digits, and underscores (\_). The name must start with a lowercase letter and end with a lowercase letter or a digit.

400

InvalidDBInstanceName.NotFound

Invalid DBInstanceId NotFound.

The instance ID cannot be found.

400

EngineNotSupported

The engine does not support the operation.

The operation is not supported for the database engine that is run on the RDS instance.

400

InvalidTargetDBInstanceName.Format

Specified Target DB instance name is not valid.

The name of the destination instance is invalid.

400

MasterDBInstanceState.NotSupport

The Master instance state does not support this operation.

The operation failed. The RDS instance is not in a ready state.

400

TargetInstanceEngineNotSupported

The specified Engine cannot be supported the operation.

The engine does not support the operation.

400

InvalidInstancesRegion.Malformed

The instance region is not the same as the target instance region.

The destination instance resides in a different region from the source instance.

400

InvalidStartTime.Format

The specified parameter "StartTime" is not valid.

The start time is invalid. Specify the time in the GMT standard in the YYYY-MM-DDThh:mmZ format. For example, you can set the start time to 2012-06-11T15:00Z in the DescribeDBInstancePerformance operation and set the start time to 2011-06-11T16:00Z in the DescribeErrorLogs operation.

400

InvalidEndTime.Format

The specified parameter "EndTime" is not valid.

The operation failed. The end time is invalid. Specify the time in the GMT standard in the YYYY-MM-DDThh:mmZ format. Example: 2012-06-11T15:00Z.

400

InvalidParameterCombination

The end time must be greater than the start time

The end time must be later than the start time.

400

InvalidBackupSetLocation.Format

Specified backup set location is not valid.

\-

400

InvalidCrossRegionTrans

Cross region instance trans is not supported

\-

400

ErrorParametersConflict

Parameter BackupsetID and restoretime can only exist one.

\-

400

InvalidDBName.NotFound

Specified DB name does not exist.

The database name cannot be found. Enter a valid database name.

400

InvalidDBName.Duplicate

Specified DB name already exists in the This instance.

A database with the same name has been created on the RDS instance. Specify a different name.

400

ReadDBInstanceNotSupport

The operation is not permitted due to type of the instance.

\-

400

InvalidRecoveryDbInstance.StorageSize

The disk space of the new instance cannot be less than that of the current instance

The operation failed. The available storage space of the new RDS instance must be greater than or equal to the total size of data stored in the original RDS instance.

400

InvalidRecoveryDBNames.Format

The specified parameter DBNames is not valid.

The instance name is invalid. Check the instance name.

400

InvalidBackupIdOrRestoreTime.NotFound

The specified parameter BackupId or RestoreTime is not valid.

The operation failed. The values of the BackupId and RestoreTime parameters are invalid.

400

Forbidden.RegionNotFound

The provided RegionId does not exist in our record.

The operation failed. The region ID cannot be found.

400

ImageNotFound

The specified Image is disabled or is deleted.

\-

400

InvalidZone.NotSupportedForStorageType

The specified zone is closed or invalid for Specified DBInstanceStorageType.

\-

400

InvalidEngineOrEngineVersion

The specified params engine or engineVersion should not be null.

\-

400

InvalidGeneralGroupNameOrGdnInstanceName

The specified params generalGroupName or gdnInstanceName should not be null.

\-

400

InvalidVSwitchId.NotFound

Specified virtual switch is not found in specified VPC.

No vSwitch is available in the VPC.

400

CDDC.TargetHostIDNotAvailable

The target host ID is not available.

The host is unavailable. Specify a different host.

400

CDDC.AvailableHostsNotEnoughInZone

Not enough available hosts are in the target zone.

\-

400

ReadOnlyInstanceNotSupport

Specified ReadOnly Instance not support this operation.

Read-only instances do not support the operation.

400

InvalidShareDbInstanceClassNotSupport

The current instance classType is not support operation.

This operation is not supported for the specified instance type.

400

InvalidQuantity.NotSupported

The specified instance quantity is not supported.

The number of RDS instances exceeds the upper limit. Check the number of RDS instances.

400

IncorrectMasterDBInstanceState

Master instance state does not support this operation.

\-

400

InvalidDBInstance.ReadDBInstanceExceeded

Current DB Instance exceeding the allowed amount of read instance.

The number of read-only instances exceeds the upper limit. Adjust the number of read-only instances. A primary ApsaraDB RDS for MySQL instance with more than 64 GB memory supports a maximum of 10 read-only instances. An ApsaraDB RDS for MySQL with less than 64 GB memory supports a maximum of five read-only instances.

400

InvalidEngineVersion.Malformed

Specified engine version is not valid.

The database engine version is invalid. Check the database engine version and try again.

400

InvalidEssdStorageSize

The cloud ESSD storage size is invalid.

The storage size of cloud disks is invalid. Check the storage size.

400

IncorrectInstanceNetworkType

The specified parameter InstanceNetworkType is not valid.

\-

400

AtLeastTwoVSwitchParamExists

The specified params(Vswitchs) at least two.

At least two Vswitchs parameters must be specified. Each Vswitchs parameter specifies a vSwitch in a zone.

400

InvalidIzNo.NotSupported

Specified VPC zone is not supported.

The VPC cannot be found in the zone. Specify a different VPC and try again.

400

InvalidBackupSet

Specified database does not exists in the backup set.

\-

400

InvalidRestoreTimeSpecified

Unable to restore to the specified time, because the database is in cold storage at this time. Please choose a valid restore point.

Unable to restore to the specified time, because the database is in cold storage at this time. Please choose a valid restore point.

400

InvalidRestoreDB

Unable to restore, because the database is in cold storage now. Please skip this database.

Unable to restore, because the database is in cold storage now. Please skip this database.

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

OrdTCommodityQueryError

Failed to query for product.

Failed to query product.

403

StorageLimitExceeded

Exceeding the allowed Storage of DB instance.

The disk usage exceeds the upper limit. Free your disk space.

403

InvalidTempInstance.NotSupport

The temp db Instance is not support.

The instance is locked.

403

IncorrectDBInstanceState

The current database instance state does not support the operation.

The operation failed. The RDS instance is not running.

403

IncorrectDBInstanceType

Current DB instance engine and type does not support operations.

The operation failed. The operation is not supported for the database engine of the RDS instance.

403

Forbidden.SnapshotRecovery

Snapshot backup does not support partial restore

The operation failed. Snapshot backup files cannot be used to restore only a specific part of data.

403

OperationDenied.Resource

Specified DB instance class or storage is not available in all Availability Zones.

Insufficient resources. Try again with a different instance type or storage size.

403

ReadonlyDBInstanceStorageExceeded

You can not create the order with the db instance because The masterInstance storage value exceeding the readonlyInstance storage value.

The primary instance storage value exceeds the read-only instance storage value. You cannot use the database instance to create an order.

403

MasterDBInstanceClassNotSupport

You can not create the readonly instance with the master instance class does not support.

The operation failed. The current primary instance class does not support creating read-only instances.

403

ReadonlyDBInstanceClassNotSupport

You can not create the readonly instance with the instance class does not support.

The operation failed. The current instance class does not support creating read-only instances.

403

ReadonlyDBInstanceClassLowerThanMasterInstance

The readonly instance db instance class are lower than master instance db instance class.

The read-only instance has lower specifications than the primary instance.

403

InvalidSwitchType.Malformed

The specified parameter InvalidSwitchType is not valid.

The value of the InvalidSwitchType parameter is invalid.

403

UnsupportedCopyDbHighAvailabilityToBasic

Replicate Database from RDS Category:HighAvailability to RDS Category:Basic is not supported.

\-

403

InvalidInstanceVersion

Source instance version is greater than the target instance version.

\-

403

UnsupportedCopyDbShareToHighAvailability

Replicate Database from RDS Category:Share to RDS Category:HighAvailability is not supported.

\-

403

UnsupportedCopyDbAlwaysOnToBasic

Replicate Database from RDS Category:AlwaysOn to RDS Category:Basic is not supported.

\-

403

UnsupportedCopyDbBasicToShare

Replicate Database from RDS Category:Basic to RDS Category:Share is not supported.

\-

403

UnsupportedCopyDbAlwaysOnToHighAvailability

Replicate Database from RDS Category:AlwaysOn to RDS Category:HighAvailability is not supported.

\-

403

UnsupportedCopyDbShareToBasic

Replicate Database from RDS Category:Share to RDS Category:Basic is not supported.

\-

403

UnsupportedCopyDbHighAvailabilityToShare

Replicate Database from RDS Category:HighAvailability to RDS Category:Share is not supported.

\-

403

UnsupportedCopyDbShareToAlwaysOn

Replicate Database from RDS Category:Share to RDS Category:AlwaysOn is not supported.

\-

403

UnsupportedCopyDbAlwaysOnToShare

Replicate Database from RDS Category:AlwaysOn to RDS Category:Share is not supported.

\-

403

InvalidParamTableMeta.RestoreTime

The specified restore time cannot be covered by the existing backup chain. Please try specifying a different restore time.

\-

403

CurrentRecoveryModelNotSupportThisAction

Current recovery model not supported this action.

The current recovery model does not support.

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

The specified instance does not exist or is not supported.

The RDS instance cannot be found. Check the ID or name of the RDS instance.

404

InvalidInstanceStorageType.NotFound

The specified DBInstanceStorageType is not found.

You must specify the InstanceStorageType parameter.

404

InvalidRegion.NotFound

Specified Region does not exist in the RDS

The region ID is invalid.

404

IncorrectVswitchId

The specified parameter VSwitchId is not valid.

The vSwitch ID is invalid.

404

InsufficientResourceCapacity

Current cluster resources are insufficient. Try again later.

Current cluster resources are insufficient. Try again later.

404

InvalidParam

Invalid params to call rds open api, BakDBNames is not empty.

The BakDBNames parameter that is used to call the ApsaraDB RDS API is invalid. You must specify a value for the parameter.

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

408

NetworkOrSqlTimeoutError

Failed to create login due to potential SQL Server overload or other issues that may cause the login creation fail. Please retry later.

The query failed due to timeout caused by potential SQL Server overload or excessive number of instance accounts.

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

2025-04-29

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CopyDatabaseBetweenInstances?updateTime=2025-04-29#workbench-doc-change-demo)

2024-07-16

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CopyDatabaseBetweenInstances?updateTime=2024-07-16#workbench-doc-change-demo)

2024-05-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CopyDatabaseBetweenInstances?updateTime=2024-05-28#workbench-doc-change-demo)

2024-04-02

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CopyDatabaseBetweenInstances?updateTime=2024-04-02#workbench-doc-change-demo)

2023-11-06

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CopyDatabaseBetweenInstances?updateTime=2023-11-06#workbench-doc-change-demo)

2023-09-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CopyDatabaseBetweenInstances?updateTime=2023-09-08#workbench-doc-change-demo)

2023-03-24

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CopyDatabaseBetweenInstances?updateTime=2023-03-24#workbench-doc-change-demo)

2022-10-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CopyDatabaseBetweenInstances?updateTime=2022-10-28#workbench-doc-change-demo)

2022-07-19

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CopyDatabaseBetweenInstances?updateTime=2022-07-19#workbench-doc-change-demo)
