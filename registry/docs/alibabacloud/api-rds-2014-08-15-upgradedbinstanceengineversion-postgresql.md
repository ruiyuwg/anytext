Upgrades the major engine version of an ApsaraDB RDS for MySQL instance.

## Operation description

### [](#supported-database-engine)Supported database engine

MySQL

### [](#references)References

**Note** Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.

[Upgrade the major engine version of an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/upgrade-the-major-engine-version-of-an-apsaradb-rds-for-mysql-instance)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/UpgradeDBInstanceEngineVersion)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/UpgradeDBInstanceEngineVersion)

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

rds:UpgradeDBInstanceEngineVersion

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

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.

ETnLKlblzczshOTUbOCzxxxxxxxxxx

DBInstanceId

string

Yes

The instance ID. You can call the DescribeDBInstances operation to query the instance ID.

rm-uf6wjk5xxxxxxx

EngineVersion

string

Yes

The major engine version that the new instance runs. Valid values:

-   **8.0**
-   **5.7**
-   **5.6**

5.7

EffectiveTime

string

No

The effective time. Valid values:

-   **Immediate**: This is the default value.
-   **MaintainTime**: The effective time is within the maintenance window. For more information, see ModifyDBInstanceMaintainTime.

Immediate

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

65BDA532-28AF-4122-AA39-B382721EEE64

TaskId

string

The ID of the task.

10254125

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "65BDA532-28AF-4122-AA39-B382721EEE64",
  "TaskId": 10254125
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidOrderTask.NotSupport

The Current InstanceId exist Order Task in RDS.

Uncompleted order tasks are found in the RDS instance. Please try again later.

400

InvalidEVENT

Current DB instance has event schedule, this operation is not supported.

\-

400

InvalidSSLstatus

Current DB instance has SSL enabled, this operation is not supported.

This operation is not supported because this instance has SSL enabled.

400

InvalidTDEstatus

Current DB instance has TDE enabled, this operation is not supported.

This operation is not supported because TDE is enabled on the instance.

400

InvalidDBInstanceConnType.Format

Specified DB instance conn type is not valid.

The operation failed. The operation is not supported for the connection type of the RDS instance.

400

UnsupportedReadOrBakReadState

Current DB instance has read or bak read instance running in unsupported states.

\-

400

InvalidSourceCategory

specified source category is invalid.

The specified source category is invalid.

400

InvalidBizType.Format

Specified biz type is not valid.

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

400

InvalidMinorVersion.NotFound

Specified minor version does not exists.

The operation failed. The database engine version cannot be found.

403

IncorrectDBInstanceState

Current DB instance state does not support this operation.

\-

403

IncorrectEngineVersion

The engine version does not support the operation.

The operation failed. The operation is not supported for the database engine version of the RDS instance.

403

IncorrectEngineTypeMyisam

Current DB instance has MyISAM table, and it does not support this operation.

The major version of MySQL is upgraded. Check whether the instance has MyISAM engine tables.

403

InvalidAccountName.Format

Current DB instance has account aliyun\_root,and it does not support this operation.

\-

403

InvalidInstanceLevel.Malformed

Current DB instance level does not support this operation.

The specified database instance type does not support this operation.

403

IncorrectDBInstanceLockMode

Current DB instance lock mode does not support this operation.

The operation failed. The RDS instance is locked.

403

UnsupportedReadOrBakReadState

Current DB instance has read or bak read running in unsupport states

The current instance is in the unsupported read or bak read state.

403

MaxscaleMinorVersionNotSupport

The Maxscale version used by the instance is too low, please upgrade the Maxscale version first.

The version of the database proxy used by the instance is too low. Upgrade the version of the database proxy first.

403

CloudSSDNotSupport

Cloud ssd does not support this operation, please upgrade to essd.

\-

403

ReadInstanceNotSupport

Instances with read-only do not support this operation.

\-

403

ClusterNotSupport

ClusterNotSupport

The operation is not supported for the RDS instance.

403

IncorrectDBInstanceType

Current DB instance type does not support this operation.

The operation failed. The RDS instance is not in a ready state.

403

UnsupportedFtsIndex

Current DB instance has fts index. Please delete in space fts index.

The current instance contains full-text indexes created in the system tablespace. Delete and rebuild the corresponding full-text indexes before upgrading.

403

UnsupportedFtsIndexVersion

Current DB instance has fts index. Please upgrade the minor version to a version after 20221130 and remove the space fts index.

The current instance minor version is less than 20221130. Please upgrade the minor version before deleting or rebuilding the full-text index.

403

OrderStatus.UnPaid

The specified db instance has unpaid order.

The instance has an unpaid order. Please pay first and try again.

403

InvalidReduceDiskSize

The storage capacity after the scale-down must be larger than the used amount.

The scale-in target capacity cannot be less than the current storage space usage

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

404

InvalidDBInstance.NotFound

The specified instance does not exist or is not supported.

The RDS instance cannot be found. Check the ID or name of the RDS instance.

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

2025-04-02

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/UpgradeDBInstanceEngineVersion?updateTime=2025-04-02#workbench-doc-change-demo)

2025-02-07

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/UpgradeDBInstanceEngineVersion?updateTime=2025-02-07#workbench-doc-change-demo)

2024-03-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/UpgradeDBInstanceEngineVersion?updateTime=2024-03-12#workbench-doc-change-demo)

2023-12-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/UpgradeDBInstanceEngineVersion?updateTime=2023-12-14#workbench-doc-change-demo)

2022-07-19

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/UpgradeDBInstanceEngineVersion?updateTime=2022-07-19#workbench-doc-change-demo)

2022-06-23

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/UpgradeDBInstanceEngineVersion?updateTime=2022-06-23#workbench-doc-change-demo)

2021-12-23

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/UpgradeDBInstanceEngineVersion?updateTime=2021-12-23#workbench-doc-change-demo)

2021-12-23

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/UpgradeDBInstanceEngineVersion?updateTime=2021-12-23#workbench-doc-change-demo)

2021-12-23

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/UpgradeDBInstanceEngineVersion?updateTime=2021-12-23#workbench-doc-change-demo)
