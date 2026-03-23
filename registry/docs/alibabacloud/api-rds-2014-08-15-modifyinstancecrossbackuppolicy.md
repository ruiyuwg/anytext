Modifies the cross-region backup settings of an instance.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

-   MySQL
-   PostgreSQL
-   SQL Server

### [](#references)[](#)References

**Note** Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.

-   [Use the cross-region backup feature of an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/use-the-cross-region-backup-feature-of-an-apsaradb-rds-for-mysql-instance)
-   [Use the cross-region backup feature for an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/use-the-cross-region-backup-feature-for-an-apsaradb-rds-for-postgresql-instance)
-   [Use the cross-region backup feature for an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/enable-the-cross-region-backup-feature-for-an-apsaradb-rds-for-sql-server-instance)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/ModifyInstanceCrossBackupPolicy)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/ModifyInstanceCrossBackupPolicy)

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

rds:ModifyInstanceCrossBackupPolicy

update

\*DBInstance

`acs:rds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}`

-   rds:ResourceTag
-   rds:BackupEnabled
-   rds:LogBackupEnabled

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

The region ID of the source instance. You can call the DescribeRegions operation to query the most recent region list.

cn-hangzhou

CrossBackupType

string

No

The policy that is used to save the cross-region backup files of the instance. Set the value to **1**. The value 1 specifies that all cross-region backup files are saved.

1

LogBackupEnabled

string

No

Specifies whether to enable the cross-region log backup feature on the instance. Valid values:

-   **0**: disables the feature.
-   **1:** enables the feature.

**Note** You can enable the cross-region log backup feature only when the cross-region backup feature is enabled.

1

BackupEnabled

string

No

Specifies whether to enable the cross-region backup feature on the instance. This parameter specifies whether you can back up data and logs. Valid values:

-   **0**: disables the feature.
-   **1:** enables the feature.

**Note** Before you enable the cross-region backup feature, you must configure the CrossBackupRegion parameter.

1

CrossBackupRegion

string

No

The ID of the region in which the cross-region backup files of the instance are stored.

cn-shanghai

RetentType

integer

No

The policy that is used to retain the cross-region backup files of the instance. Set the value to 1. The value **1** specifies that the cross-region backup files of the instance are retained based on the specified retention period.

1

Retention

integer

No

The number of days for which the cross-region backup files of the instance are retained. Valid values: **7 to 1825**.

7

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

BackupEnabled

string

The status of the cross-region backup feature on the instance. Valid values:

-   **Disable**
-   **Enable**

Enable

CrossBackupRegion

string

The ID of the region in which the cross-region backup files of the instance are stored.

cn-shanghai

CrossBackupType

string

The policy that is used to save the cross-region backup files of the instance. Default value: **1**. The value 1 indicates that all cross-region backup files are saved.

1

DBInstanceId

string

The instance ID.

rm-uf6wjk5xxxxxxxxxx

LogBackupEnabled

string

The status of the cross-region log backup feature on the instance. Valid values:

-   **Disable**
-   **Enable**

Enable

RegionId

string

The region ID of the source instance. You can call the [DescribeRegions](/help/en/rds/api-query-regions) operation to query the most recent region list.

cn-hangzhou

RequestId

string

The ID of the request.

50A6059D-6DBB-46C6-A851-1EE93C9013CF

RetentType

integer

The policy that is used to retain the cross-region backup files of the instance. Default value: **1**. The value 1 indicates that the cross-region backup files of the instance are retained based on the specified retention period.

1

Retention

integer

The number of days for which the cross-region backup files of the instance are retained. Valid values: **7 to 1825**.

15

## Examples

Sample success responses

`JSON`format

```
{
  "BackupEnabled": "Enable",
  "CrossBackupRegion": "cn-shanghai",
  "CrossBackupType": 1,
  "DBInstanceId": "rm-uf6wjk5xxxxxxxxxx",
  "LogBackupEnabled": "Enable",
  "RegionId": "cn-hangzhou",
  "RequestId": "50A6059D-6DBB-46C6-A851-1EE93C9013CF",
  "RetentType": 1,
  "Retention": 15
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidParameters.Format

Specified parameter is not valid.

\-

400

ParameterAbsence

Necessary param is absence.

\-

400

ParameterLeastAssociate

Must input at least one optional parameter.

The point in time or the data backup file cannot be left unspecified. Specify a point in time or a data backup file and try again.

400

InvalidRegion.Format

Specified Region is not valid.

The region ID is invalid. Check the region ID.

400

InvalidParameters.Format

Specified parameter(maxrecordsperpage) is not valid.

\-

400

OperationDenied.SwitchToCrossRegionBackup

Snapshot backup does not support cross region backup storage at present.

Snapshot backups cannot be stored across regions.

400

OperationDenied.SwitchToSnapshot

Snapshot backup does not support cross region storage at present. Please turn off cross region backup before switching to snapshot backup mode.

Snapshot backups cannot be stored across regions. Disable cross-region backup first and then switch to the snapshot backup mode.

400

OperationDenied.SwitchSnapshotToPhysical

Only physical backup to snapshot backup is supported.

The current operation only supports physical backups to snapshot backups.

400

UnsupportEncryptedSnapshot

Encrypted DB instance snapshot does not support this operation.

This operation is not supported for encrypted instance snapshots.

400

DstRegionNoUser

The user info wasn't found destination region, please access the purchase page to initiate registration.

Unable to find the destination area of user information, please visit the purchase page to start registration.

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

IncorrectEngineVersion

Current engine version does not support operations.

The operation failed. The operation is not supported for the version of the database engine that is run on the RDS instance.

403

IncorrectHostType

Current DB Instance host type does not support this operation.

This operation is not supported for the host type of the current instance.

403

IncorrectDBInstanceType

Current DB instance type does not support this operation.

The operation failed. The RDS instance is not in a ready state.

403

IncorrectDBInstanceEngine

Current DB Instance engine does not support this operation.

The operation failed. The operation is not supported for the database engine that is run on the RDS instance.

403

IncorrectDBInstanceLockMode

Current DB instance lock mode does not support this operation.

The operation failed. The RDS instance is locked.

403

IncorrectDBInstanceState

Current DB instance state does not support this operation.

\-

403

InvalidDdrStorage.NotFound

Specified Ddr Storage does not exist or not support.

\-

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

InvalidPage.notFound

Page not found.

The specified parameters are not found. Check your parameters.

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

2024-09-09

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyInstanceCrossBackupPolicy?updateTime=2024-09-09#workbench-doc-change-demo)

2022-09-01

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyInstanceCrossBackupPolicy?updateTime=2022-09-01#workbench-doc-change-demo)

2022-06-23

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyInstanceCrossBackupPolicy?updateTime=2022-06-23#workbench-doc-change-demo)
