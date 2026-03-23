Rebuilds an instance from the recycle bin.

## Operation description

### [](#supported-database-engines)Supported database engines

-   RDS MySQL
-   RDS PostgreSQL
-   RDS SQL Server
-   RDS MariaDB

### [](#references)References

**Note** : Fees are generated if the call is successful. Before you call this operation, carefully read the following documentation:

-   [Manage ApsaraDB RDS for MySQL instances in the recycle bin](/help/en/rds/apsaradb-rds-for-mysql/manage-apsaradb-rds-for-mysql-instances-in-the-recycle-bin)
-   [Manage ApsaraDB RDS for PostgreSQL instances in the recycle bin](/help/en/rds/apsaradb-rds-for-postgresql/manage-apsaradb-rds-for-postgresql-instances-in-the-recycle-bin)
-   [Manage ApsaraDB RDS for SQL Server instances in the recycle bin](/help/en/rds/apsaradb-rds-for-sql-server/manage-apsaradb-rds-for-sql-server-instances-in-the-recycle-bin)
-   [Manage ApsaraDB RDS for MariaDB instances in the recycle bin](/help/en/rds/apsaradb-rds-for-mariadb/instance-recycle-bin)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/CreateDBInstanceForRebuild)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/CreateDBInstanceForRebuild)

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

rds:CreateDBInstanceForRebuild

create

\*DBInstance

`acs:rds:{#regionId}:{#accountId}:dbinstance/{#DbInstanceId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

Yes

The region ID. You can call the [DescribeRegions](/help/en/rds/developer-reference/api-rds-2014-08-15-describeregions) operation to query the most recent region list.

cn-hangzhou

DBInstanceId

string

Yes

The instance ID. You can call the [DescribeDBInstances](/help/en/rds/developer-reference/api-rds-2014-08-15-describedbinstances) operation to query the ID of the instance.

rm-uf6wjk5xxxxxxx

PayType

string

Yes

The billing method of the destination instance. Valid values:

-   **Postpaid**: pay-as-you-go
-   **Prepaid**: subscription

Postpaid

SecurityIPList

string

No

The IP address whitelist of the serverless instance. For more information, see [Use a database client or the CLI to connect to an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/use-a-database-client-or-the-cli-to-connect-to-an-apsaradb-rds-for-mysql-instance-2). If the IP address whitelist contains more than one entry, separate the entries with commas (,). Each entry must be unique. You can specify up to 1,000 entries. The entries in the IP address whitelist must be in one of the following formats:

-   IP addresses, such as 10.10.XX.XX.
-   CIDR blocks, such as 10.10.XX.XX/24. In this example, 24 indicates that the prefix of each IP address in the IP address whitelist is 24 bits in length. You can replace 24 with a value within the range of 1 to 32.

If this parameter is not specified, the default IP address whitelist is used.

127.0.0.1

DBInstanceDescription

string

No

The name of the instance. The name must be 2 to 256 characters in length. The name can contain letters, digits, underscores (\_), and hyphens (-). The name must start with a letter.

**Note** : The name cannot start with http:// or https://.

Test database

ZoneId

string

No

The zone ID of the primary instance. You can call the [DescribeRegions](/help/en/rds/api-query-regions) operation to query the most recent zone list.

**Note** If you specify a virtual private cloud (VPC) and a vSwitch, you must specify this parameter to identify the zone for the vSwitch.

cn-hangzhou-e

ZoneIdSlave1

string

No

The zone ID of the secondary instance.

**Note** If the instance does not run RDS Basic Edition, you must specify this parameter.

cn-hangzhou-c

ZoneIdSlave2

string

No

The zone ID of the logger instance.

**Note** This parameter is available only when the instance runs RDS Enterprise Edition.

cn-hangzhou-d

VPCId

string

No

The VPC ID of the instance. If you set **InstanceNetworkType** to **VPC**, you must specify this parameter.

**Note** : If you specify this parameter, you must also specify **ZoneId**.

vpc-uf6f7l4fg90xxxxxx

VSwitchId

string

No

The ID of the vSwitch. The vSwitch must belong to the zone that is specified by **ZoneId**.

**Note**

-   If you set **InstanceNetworkType** to **VPC**, you must also specify this parameter.
    
-   If you specify the ZoneSlaveId1 parameter, you must specify the IDs of two vSwitches for this parameter and separate the IDs with a comma (,).
    

vsw-uf6adz52c2pxxxxx

Period

string

No

The unit of the subscription duration. Valid values:

-   **Year**
-   **Month**

**Note** If you set the PayType parameter to **Prepaid**, you must also specify this parameter.

Month

UsedTime

string

No

The subscription duration of the instance. Valid values:

-   If you set **Period** to **Year**, the value of **UsedTime** ranges from **1** to **5**.
-   If you set **Period** to **Month**, the value of **UsedTime** ranges from **1** to **11**.

**Note** If you set **PayType** to **Prepaid**, you must specify this parameter.

1

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.

The token can contain only ASCII characters and cannot exceed 64 characters in length.

ETnLKlblzczshOTUbOCzxxxxxxx

DBInstanceNetType

string

No

The type of the network connection to the instance. Valid values:

-   **Internet**
-   **Intranet**

Internet

InstanceNetworkType

string

No

The network type of the instance. Valid values:

-   **VPC**
-   **Classic**

Default value: Classic.

**Note** If the instance uses cloud disks, this parameter is required. Set the value to **VPC**. The **VpcId** and **VSwitchId** parameters must be specified when this parameter is set to **VPC**.

VPC

ResourceGroupId

string

No

The ID of the resource group. The value of this parameter can be NULL.

rg-acfmy\*\*\*\*\*

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

rm-uf6wjk5xxxxxxx

Message

string

The response parameters.

success

OrderId

string

The ID of the order.

20793850608\*\*\*\*

RequestId

string

The ID of the request.

1AD222E9-E606-4A42-BF6D-8A4442913CEF

TaskId

string

The ID of the task.

417450000

## Examples

Sample success responses

`JSON`format

```
{
  "DBInstanceId": "rm-uf6wjk5xxxxxxx",
  "Message": "success",
  "OrderId": "20793850608****",
  "RequestId": "1AD222E9-E606-4A42-BF6D-8A4442913CEF",
  "TaskId": 417450000
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

RR309

We have detected a security risk with your payment method. Please proceed with verification via the link in your email or console message and re-submit your order after verification.

A security risk was detected in the default payment method. Please verify your payment method before placing your order. A verification link will be sent to you via email and internal message.

400

GeneralIns.Creating

The general instance is creating.

An RDS instance is in production. Please wait.

400

InvalidZone.NotSupportedForStorageType

The specified zone is closed or invalid for Specified DBInstanceStorageType.

\-

400

GeneralIns.Maintaining

The general instance is maintaining.

An RDS instance is being migrated or maintained. Please wait.

400

GeneralIns.Switching

The general instance is Switching.

A switchover for high availability is in progress. Please wait.

400

InvalidEngine.VauleNotSupported

The specified parameter "Engine" is not valid.

The database engine is invalid. The database engine must be MySQL, SQL Server, PostgreSQL, or PPAS.

400

InvalidEngineVersion.ValueNotSupported

The specified parameter "EngineVersion" is not valid.

The version of database engines version failed the verification check. Valid values: MySQL: 5.5, 5.6, and 5.7. SQL Server: 2008r2 and 2012. PostgreSQL: 9.4. PPAS: 9.3.

400

InvalidDBinstanceClass.ValueNotSupported

The specified parameter DBinstanceClass is invalid.

The specified parameter DBinstanceClass is invalid.

400

InvalidDBInstanceStorage.ValueNotSupported

The specified parameter "DBInstanceStorage" is not valid.

\-

400

InvalidDBInstanceDescription.Malformed

The specified parameter "DBInstanceDescription" is not valid.

The instance description failed the verification check. The description must be 2 to 256 characters in length and can contain letters, underscores (\_), and hyphens (-). The description must start with a letter and cannot start with http:// or https://.

400

InvalidSecurityIPList.Duplicate

Specified security IP list is not valid: Duplicate IP address in the list

The IP address whitelist is invalid. The whitelist contains duplicate entries.

400

InvalidSecurityIPListLength.Malformed

The quota of security ip exceeds.

The number of IP addresses and CIDR blocks in the IP address whitelist reaches the upper limit.

400

DefaultVpc.NotSupport

The default vpc create is not support.

400

Forbidden.RegionNotFound

The provided RegionId does not exist in our record.

The operation failed. The region ID cannot be found.

400

InvalidVpcIdOrVswitchId.NotSupported

The specified vpcId or vSwitchId is not supported.

The VPC that is specified by the vpcId parameter or the vSwitch that is specified by the vSwitchId parameter is not supported. Check the values of these parameters.

400

InvalidVpcId.NotSupported

The specified vpcId or vSwitchId is not supported.

The operation failed. Check that the VPC or the vSwitch resides in the same zone as the RDS instance.

400

InvalidZoneId.NotSupported

The Specified vpc Zone not supported.

VPC-hosted RDS instances cannot be created in the zone. Specify a different zone.

400

VswitchIpExhausted

No available ip in the specified vswitch.

No available IP address exists in the specified vSwitch.

400

InvalidGeneralGroupName.Malformed

The specified parameter GeneralGroupName is not valid.

The value of the GeneralGroupName parameter is invalid.

400

AccountBasicInfoUncompleted

Your information is incomplete. Complete your information before the operation.

Your information is incomplete. Complete your information and try again.

400

IncorrecttVpcId

The specified parameter VPCId is not valid.

The value of the VPCId parameter is invalid. Specify a valid value.

400

OperationDenied.DBInstanceStatus

Operation is denied by the current database instance status.

The operation failed. The RDS instance is not in a ready state.

400

InvalidDBInstanceClass.Offline

The specified instance type is no longer provided. Please specify another instance type.

The instance type that you select is no longer available. Select another instance type.

400

ZoneId.NotMatchWithCategory

The number of available zones does not match the database engine or instance edition. Please reset it.

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

InvalidParam.InstanceNetworkType

Creation of classic network instances is not supported.

Classic network offline, does not support the creation of classic network instances!

403

ClassicNetworkType.NotSupport

The Classic instance network create is not support.

The current instance cannot be deployed in the classic network. Change the network type to VPC.

403

InvalidEngineVersionInRegion.NotAvailable

The EngineVersion in the Region is not available.

The database engine version is not supported in the region.

403

OperationDenied

The specified request is out of resources.

The specified request resource is insufficient.

403

QuotaExceeded.CreateInstance

The quota of create instance exceeds.

The maximum number of instances has been exceeded. Release the instances that are no longer needed.

403

Forbidden.Authentication

The operation is forbidden by Aliyun Realname Authentication System.

\-

403

INST\_HAS\_UNPAID\_ORDER

The instanceId has unpaid order.

You have an unpaid order for the instance. Pay for or cancel the order and try again.

403

COMMODITY.FAILED

The commodity is error.

A server error occurred. Contact O&M engineers.

403

MoneyLessThan100

The Account Monet less Than 100.

Your account balance is insufficient. Add funds to your account.

403

OperationDenied.ClassicNetworkType

The operation is not permitted due to status of instance.

The Classic network type does not support the current operation.

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

InvalidDBInstanceId.NotFound

Invalid DBInstanceId NotFound.

The RDS instance cannot be found. Check whether the RDS instance is created within the logged-on account.

404

CreateOrder.Failed

Create Order Failed.

Failed to create the purchase order.

404

InvalidRegionId.NotFound

The provided RegionId does not exist in our records.

The region ID cannot be found. Check the region ID.

404

QueryPrice.Failed

QueryPrice Failed.

The inquiry failed. Contact Alibaba Cloud customer service representatives.

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

2024-12-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBInstanceForRebuild?updateTime=2024-12-26#workbench-doc-change-demo)

2024-04-18

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBInstanceForRebuild?updateTime=2024-04-18#workbench-doc-change-demo)

2023-04-06

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBInstanceForRebuild?updateTime=2023-04-06#workbench-doc-change-demo)

2023-03-16

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBInstanceForRebuild?updateTime=2023-03-16#workbench-doc-change-demo)
