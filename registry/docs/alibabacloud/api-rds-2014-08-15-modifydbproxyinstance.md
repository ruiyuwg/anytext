Changes the configuration of a database proxy for an instance.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

-   MySQL
-   PostgreSQL

**Note** Starting October 17, 2023, ApsaraDB RDS for MySQL instances that run RDS Cluster Edition offer one free-of-charge dedicated database proxy for each unit in phases. For more information, see [\[Special offers/Price changes\] One dedicated proxy is provided free of charge for ApsaraDB RDS for MySQL instances on RDS Cluster Edition](/help/en/rds/apsaradb-rds-for-mysql/cluster-edition-for-apsaradb-rds-for-mysql-provides-the-dedicated-proxy-feature-with-a-free-of-charge-proxy-instance).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/ModifyDBProxyInstance)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/ModifyDBProxyInstance)

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

rds:ModifyDBProxyInstance

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

rm-t4n3a\*\*\*\*

DBProxyInstanceType

string

Yes

The database proxy type. Valid values:

-   **common**: general-purpose database proxy
-   **exclusive** (default): dedicated database proxy

DedicatedProxy

DBProxyInstanceNum

string

Yes

The number of database proxies. If you set this parameter to 0, the database proxy feature is disabled for the instance. Valid values: **1** to **16**.

**Note** The capability of the database proxy feature to process requests increases with the number of database proxies that are enabled. You can monitor the load on the instance and specify an appropriate number of database proxies based on the load monitoring data.

2

EffectiveTime

string

No

The effective time. Valid values:

-   **Immediate**: The effective time is immediate.
-   **MaintainTime**: The effective time is within the maintenance window. For more information, see ModifyDBInstanceMaintainTime.
-   **SpecificTime**: The effective time is a specified point in time.

Default value: **MaintainTime**.

MaintainTime

EffectiveSpecificTime

string

No

The point in time that you want to specify. Specify the time in the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time must be in UTC.

**Note** If the **EffectiveTime** parameter is set to **SpecificTime**, you must specify this parameter.

2019-07-10T13:15:12Z

RegionId

string

No

The region ID. You can call the DescribeRegions operation to query the most recent region list.

cn-hangzhou

DBProxyEngineType

string

No

A deprecated parameter. You do not need to specify this parameter.

normal

VSwitchIds

string

No

The ID of the vSwitch in the destination zone. You can call the [DescribeVSwitches](/help/en/rds/developer-reference/api-rds-2014-08-15-describevswitches) operation to query existing vSwitches.

**Note** Only database proxies for ApsaraDB RDS for MySQL instances that use cloud disks can be migrated to different zones.

vsw-uf6adz52c2p\*\*\*\*

DBProxyNodes

array<object>

No

List of proxy nodes.

**Note** This parameter must be passed when the current proxy instance is deployed in multiple availability zones.

object

No

cpuCores

string

No

The number of cpu cores for the node, valid values: **1** to **16**.

**Note** This parameter is required when selecting **DBProxyNodes**.

1

nodeCounts

string

No

The number of proxy nodes in the availability zone, valid values: **1** to **16**.

**Note** This parameter is required when selecting **DBProxyNodes**.

2

zoneId

string

No

The id of the availability zone where the node is located.

**Note** This parameter is required when selecting **DBProxyNodes**.

cn-hagnzhou-c

MigrateAZ

array<object>

No

The list of available zones for migration agents.

**Note** Currently, only RDS MySQL cloud disk version agent instance migration is supported.

object

No

dbProxyEndpointId

string

No

The proxy connection address ID. You can obtain it through the DescribeDBProxyEndpoint interface.

**Note** This parameter is required when MigrateAZ is selected.

yhw429\*\*\*\*\*\*\*\*

destVSwitchId

string

No

The target VSwitchId corresponding to the proxy instance migration.

**Note** This parameter is required when MigrateAZ is selected.

vsw-sw0qq49d1m\*\*\*\*

destVpcId

string

No

The target vpc id corresponding to the proxy instance migration.

vpc-2vcicu73rdylp\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The request ID.

65C55572-530E-4A53-BE03-1D08CAF0F046

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "65C55572-530E-4A53-BE03-1D08CAF0F046"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidDBInstanceName

Specified parameter DBInstanceName is not valid.

The value of the DBInstanceName parameter is invalid. Check that the value of this parameter is not null or an empty string.

400

InvalidParameters.Format

Specified parameter is not valid

The operation failed. The values of some parameters are invalid.

400

InvalidAvZone.Format

Specified AvZone is not valid.

The value of the AvZone parameter is invalid. Check the value of this parameter.

400

ErrorMxsServiceInsNum.Error

The Maxscale serviceIns num must be 1.

\-

400

TaskExists

Specified task have existed.

The task already exists.

400

InvalidVSwitchIds

Specified vSwitchId is invalid.

The specified vSwitchId is invalid.

400

MirrorInsExists

Specified DB instance mirror ins already existed.

Specified DB instance mirror ins already existed.

400

APICallingFailed

Api calling failed.

An internal error occurred.

400

InvalidDBProxyNodes.AzProximity

current proxy is open az proximity and target proxy not support az proximity.

current proxy is open az proximity and target proxy not support az proximity.

400

InvalidDBProxyNodes.General

general-purpose proxy does not support more than 2 nodes.

Generic proxy does not support more than 2 nodes.

400

InvalidTargetAvailabilityZone

All endpoint vswitchId must be in the target availability zone.

The vswitchId of all connection addresses must be in the target Availability Zone.

400

InvalidDBProxyNodes.Node

must set DBProxyNodes params with more than 2 proxy nodes.

must set DBProxyNodes params with more than 2 proxy nodes.

400

InvalidDBProxyNodes.ZoneIdAndNodeCounts

The number of node count and zone count is mismatch.

The number of zones or nodes is invalid.

400

InvalidDBProxyNodes.ZoneId

The number of zone is request 1 or 2.

The ZoneId of the DBProxyNodes field can only be one or two zones.

400

InvalidMigrateAZInfo

Invalid MigrateAZ params.

The MigrateAZ parameter is invalid.

400

InvalidDBProxyNodes.ZoneIdNotUnique

ZoneIds is not unique.

The Availability Zone ID is not unique.

400

InvalidVSwitchId.Format

The specified vswitch Id format is incorrect.

\-

400

InvalidEndPoint.Format

The specified EndPoint is not valid.

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

MappingInstanceLevel.NotFound

Can not find the mapping instance level.

The mapping instance specification was not found.

403

DBInstanceStatusNotActive

Current DB instance status should be active.

The operation failed. Check the status of the RDS instance.

403

InvalidInstanceLevel.Malformed

The specified class code does not support the endpoint number. Please check the shard number and the current endpoint number.

The operation failed. The number of proxy terminals that you configure is not supported for the instance type. Check the number of data shards and the number of proxy terminals.

403

NotHaveProxy

The current instance does not have a proxy.

\-

403

MaxscaleMinorVersionNotSupport

The Maxscale version used by the instance is too low, please upgrade the Maxscale version first.

The version of the database proxy used by the instance is too low. Upgrade the version of the database proxy first.

403

IncorrectDBInstanceType

Current DB instance engine and type does not support operations.

The operation failed. The operation is not supported for the database engine of the RDS instance.

403

IncorrectDBInstanceEngine

Current DB Instance engine does not support this operation.

The operation failed. The operation is not supported for the database engine that is run on the RDS instance.

403

IncorrectKindCode

Current custins kindCode does not support this operation.

The operation failed. The operation is not supported for the database engine that is run on the RDS instance.

403

IncorrectDBType

The current DB type does not support this operation.

The operation failed. The operation is not supported by the database engine of the RDS instance. Specify a different database engine.

403

IncorrectDBInstanceState

Current DB instance state does not support this operation.

\-

403

InvalidKmsKey

Kms key is disabled.

\-

403

InvalidVswitchId

Specified conn vswitch id is not valid.

\-

403

DBInstanceStatusNotActive

The status of the current instance is not active.

The operation failed. Check the status of the RDS instance.

403

IncorrectDBInstance

The current DB instance does not support this operation.

The operation failed. The operation is not supported for the RDS instance.

403

MaxscaleInstanceNotSupport

Instances with maxscale instance do not support this operation.

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

404

IncorrectDBInstanceLockMode

Current DB instance lock mode does not support this operation.

The operation failed. The RDS instance is locked.

404

InvalidDBInstanceClass.NotFound

Specified DB instance class is not found.

The configuration or the instance type cannot be found or has been discontinued. Specify a different configuration or a different instance type.

404

InsufficientResourceCapacity

The target availability zone does not have sufficient resources.

The target Availability Zone does not have enough resources.

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

2025-02-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBProxyInstance?updateTime=2025-02-28#workbench-doc-change-demo)

2025-02-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBProxyInstance?updateTime=2025-02-27#workbench-doc-change-demo)

2024-10-15

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBProxyInstance?updateTime=2024-10-15#workbench-doc-change-demo)

2024-07-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBProxyInstance?updateTime=2024-07-12#workbench-doc-change-demo)

2024-05-07

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBProxyInstance?updateTime=2024-05-07#workbench-doc-change-demo)

2024-04-25

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBProxyInstance?updateTime=2024-04-25#workbench-doc-change-demo)

2024-01-09

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBProxyInstance?updateTime=2024-01-09#workbench-doc-change-demo)

2023-12-19

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBProxyInstance?updateTime=2023-12-19#workbench-doc-change-demo)

2023-05-15

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBProxyInstance?updateTime=2023-05-15#workbench-doc-change-demo)

2022-06-23

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBProxyInstance?updateTime=2022-06-23#workbench-doc-change-demo)

2022-06-07

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBProxyInstance?updateTime=2022-06-07#workbench-doc-change-demo)
