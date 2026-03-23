Enables or modifies the database proxy feature for an instance.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

-   MySQL
-   PostgreSQL

**Note** Starting October 17, 2023, ApsaraDB RDS for MySQL instances that run RDS Cluster Edition offer one free-of-charge dedicated database proxy for each unit in phases. For more information, see [\[Special offers/Price changes\] One dedicated proxy is provided free of charge for ApsaraDB RDS for MySQL instances on RDS Cluster Edition](/help/en/rds/apsaradb-rds-for-mysql/cluster-edition-for-apsaradb-rds-for-mysql-provides-the-dedicated-proxy-feature-with-a-free-of-charge-proxy-instance).

### [](#references)[](#)References

**Note** Before you call this operation, read the following topics and make sure that you fully understand the prerequisites and impacts of this operation.

-   [Enable the database proxy feature of ApsaraDB RDS for MySQL](/help/en/rds/apsaradb-rds-for-mysql/enable-and-configure-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance)
-   [Enable the database proxy feature of ApsaraDB RDS for PostgreSQL](/help/en/rds/apsaradb-rds-for-postgresql/enable-and-configure-the-database-proxy-feature-for-an-apsaradb-rds-for-postgresql-instance)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/ModifyDBProxy)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/ModifyDBProxy)

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

rds:ModifyDBProxy

update

\*DBInstance

`acs:rds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}`

-   rds:ResourceTag
-   rds:InstanceNetworkType

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

ConfigDBProxyService

string

Yes

Specifies whether to enable or disable the database proxy feature. Valid values:

-   **Startup**: enables the feature.
-   **Shutdown**: disables the feature.
-   **Modify**: modifies the configuration of the feature.

Startup

DBProxyInstanceNum

string

No

The number of proxy instances that are enabled. Valid values: **1** to **16**. Default value: **1**.

**Note** The capability of the database proxy to process requests increases with the number of proxy instances that are enabled. You can monitor the load on the instance and specify an appropriate number of proxy instances based on the load monitoring data.

1

RegionId

string

No

The region ID. You can call the DescribeRegions operation to query the most recent region list.

cn-hangzhou

InstanceNetworkType

string

No

The network type of the instance. Only the VPC network type is supported. Set the value to **VPC**.

**Note** If you enable the database proxy feature for the instance, you must specify this parameter.

VPC

VPCId

string

No

The ID of the virtual private cloud (VPC) to which the instance belongs. You can call the DescribeDBInstanceAttribute operation to query the ID.

**Note** If you enable the database proxy feature for the instance, you must specify this parameter.

vpc-xxxxxxxxxxxx

VSwitchId

string

No

The ID of the vSwitch to which the instance belongs. You can call the DescribeDBInstanceAttribute operation to query the ID.

**Note** If you enable the database proxy feature for the instance, you must specify this parameter.

vsw-xxxxxxxxxxxx

DBProxyEngineType

string

No

A deprecated parameter. You do not need to specify this parameter.

normal

DBProxyInstanceType

string

No

The database proxy type. Valid values:

-   **common**: general-purpose database proxy
-   **exclusive** (default): dedicated database proxy

common

ResourceGroupId

string

No

The resource group ID.

rg-acfmy\*\*\*\*\*

PersistentConnectionStatus

string

No

Specifies whether to enable persistent connections. Valid values:

-   **Enabled**
-   **Disabled**

**Note**

-   This parameter is available only for instances that run MySQL.
    
-   If you want to modify persistent connections, you must set the **ConfigDBProxyService** parameter to **Modify**.
    

Enabled

DBProxyNodes

array<object>

No

The proxy nodes.

object

No

The details of the proxy node.

cpuCores

string

No

The number of CPU cores of the node. Valid values: **1** to **16**.

**Note** This parameter is required when you configure the **DBProxyNodes** parameter.

1

nodeCounts

string

No

The number of proxy nodes in the zone. Valid values: **1** and **2**.

**Note** This parameter is required when you configure the **DBProxyNodes** parameter.

2

zoneId

string

No

The ID of the zone in which the node resides.

**Note** This parameter is required when you configure the **DBProxyNodes** parameter.

cn-hagnzhou-c

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

FC452BB1-EED8-4278-95C7-0324B3710DF1

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "FC452BB1-EED8-4278-95C7-0324B3710DF1"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

MaxscaleAlreadyExist

The Maxscale is already existed.

The specified Maxscale already exists.

400

MaxscaleNotSupport

Maxscale not supported

Dedicated proxy is not supported by the instance. Please check the configuration information about enabling dedicated proxy.

400

NetWork.NotFound

NetWork.NotFound

The network is unavailable.

400

InvalidVpcParameter

Either VPC ID or vSwitch ID is incorrect. Please check again.

The operation failed. Check the value of the VPCId parameter.

400

MaxscaleInternalError

Database proxy status is CLASS\_CHANGING.

The specifications of the database proxy are being changed. Restart the RDS instance later.

400

InvalidDBInstanceName

Specified parameter DBInstanceName is not valid.

The value of the DBInstanceName parameter is invalid. Check that the value of this parameter is not null or an empty string.

400

InvalidOptimizationCategory.Format

Specified optimization category is not valid.

The specified OptimizationCategory parameter is invalid.

400

MinorVersionNotSupport

The current database minor version does not support the operation.

The current instance kernel iteration does not support this operation. You can upgrade the kernel iteration.

400

InvalidParameters.Format

Specified parameter is not valid

The operation failed. The values of some parameters are invalid.

400

MaxscaleNotSupport

Current custins can not support Maxscale.

This operation is not supported for instances with maxscale.

400

InvalidTunnelId

Specified conn tunnel is not valid.

\-

400

InvalidRegion.Format

Specified Region is not valid.

The region ID is invalid. Check the region ID.

400

InvalidDBProxyNodes.General

general-purpose proxy does not support more than 2 nodes.

Generic proxy does not support more than 2 nodes.

400

InvalidDBProxyNodes.ZoneIdAndNodeCounts

The number of node count and zone count is mismatch.

The number of zones or nodes is invalid.

400

InvalidDBProxyNodes.ZoneId

The number of zone is request 1 or 2.

The ZoneId of the DBProxyNodes field can only be one or two zones.

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

InvalidDBProxyNodes.ZoneIdNotUnique

ZoneIds is not unique.

The Availability Zone ID is not unique.

400

MaxscaleServiceLinkedRole.NotFound

Service linked role 'AliyunServiceRoleForRDSProxyOnEcs' not found.

The database proxy service linked role was not found, please check.

400

MappingInstanceLevel.NotFound

Can not find the mapping instance level.

The mapping instance specification was not found.

403

InvalidConnVPCId

Specified conn vpc id is not valid.

The specified VPC ID is invalid.

403

IncorrectDBInstanceType

The database instance type does not support the operation.

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

IncorrectDBInstanceState

Current DB instance state does not support this operation.

\-

403

InvalidVswitchId

Specified conn vswitch id is not valid.

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

403

InvalidKmsKey

Kms key is disabled.

\-

403

InvalidInstanceLevel.Malformed

Current DB instance level does not support this operation.

The specified database instance type does not support this operation.

404

MaxscaleCreating

The relative maxscale instance is being created or deleted.

\-

404

Maxscale.NotFound

The relative maxscale instance is not found.

No associated maxscale instance is found.

404

InvalidVSwitchId.NotFound

The specified VSwitch is invalid.

The operation failed. The vSwitch ID is invalid. Check the vSwitch ID.

404

InvalidParam

The parameter is invalid.

The operation failed. The values of some parameters are invalid.

404

InsufficientResourceCapacity

The target availability zone does not have sufficient resources.

The target Availability Zone does not have enough resources.

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

2025-02-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBProxy?updateTime=2025-02-14#workbench-doc-change-demo)

2025-01-15

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBProxy?updateTime=2025-01-15#workbench-doc-change-demo)

2024-12-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBProxy?updateTime=2024-12-13#workbench-doc-change-demo)

2024-10-15

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBProxy?updateTime=2024-10-15#workbench-doc-change-demo)

2023-12-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBProxy?updateTime=2023-12-26#workbench-doc-change-demo)

2023-12-12

API Description Update. The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBProxy?updateTime=2023-12-12#workbench-doc-change-demo)

2023-11-23

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBProxy?updateTime=2023-11-23#workbench-doc-change-demo)

2023-11-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBProxy?updateTime=2023-11-14#workbench-doc-change-demo)

2023-09-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBProxy?updateTime=2023-09-08#workbench-doc-change-demo)

2022-06-08

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBProxy?updateTime=2022-06-08#workbench-doc-change-demo)
