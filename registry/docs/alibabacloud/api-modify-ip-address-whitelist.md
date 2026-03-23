Modifies the IP address whitelist of an ApsaraDB RDS instance.

## Operation description

### [](#supported-database-engines)Supported database engines

-   MySQL
-   PostgreSQL
-   SQL Server
-   MariaDB

### [](#references)References

**Note** Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.

-   [Configure an IP address whitelist for an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-mysql-instance)
-   [Configure an IP address whitelist for an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-postgresql-instance)
-   [Configure an IP address whitelist for an ApsaraDB RDS for SQL Server instance](/help/en/rds/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-sql-server-instance-1)
-   [Configure an IP address whitelist for an ApsaraDB RDS for MariaDB instance](/help/en/rds/apsaradb-rds-for-mariadb/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-mariadb-instance)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/ModifySecurityIps)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/ModifySecurityIps)

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

rds:ModifySecurityIps

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

pgm-bp18n0c8zt45\*\*\*\*

SecurityIps

string

Yes

The IP addresses in an IP address whitelist. Separate multiple IP addresses with commas (,). Each IP address in the IP address whitelist must be unique. The entries in the IP address whitelist must be in one of the following formats:

-   IP addresses, such as 10.23.XX.XX.
-   CIDR blocks, such as 10.23.XX.XX/24. In this example, 24 indicates that the prefix of each IP address in the IP address whitelist is 24 bits in length. You can replace 24 with a value within the range of 1 to 32.

**Note** A maximum of 1,000 IP addresses or CIDR blocks can be added for each instance. If you want to add a large number of IP addresses, we recommend that you merge them into CIDR blocks, such as 10.23.XX.XX/24.

10.23.XX.XX

DBInstanceIPArrayName

string

No

The name of the IP address whitelist that you want to modify. Default value: **Default**.

**Note** A maximum of 200 IP address whitelists can be configured for each instance.

test

DBInstanceIPArrayAttribute

string

No

The attribute of the IP address whitelist. By default, this parameter is empty.

**Note** The IP address whitelists that have the hidden attribute are not displayed in the ApsaraDB RDS console. These IP address whitelists are used to access Alibaba Cloud services, such as Data Transmission Service (DTS).

hidden

SecurityIPType

string

No

The IP address type. The value is fixed as IPv4.

IPv4

WhitelistNetworkType

string

No

The network type of the IP address whitelist. Valid values:

-   **Classic**: classic network in enhanced whitelist mode
-   **VPC**: virtual private cloud (VPC) network type in enhanced whitelist mode.
-   **MIX**: standard whitelist mode

Default value: **MIX**.

**Note**

-   In standard whitelist mode, IP addresses and CIDR blocks are added only to the default IP address whitelist. In enhanced whitelist mode, IP addresses and CIDR blocks are added to the IP address whitelists of the classic network type and the VPC network type.
    
-   If your RDS instance runs PostgreSQL and uses cloud disks, set this parameter to MIX. If you set it to another value, the system automatically changes the value to MIX.
    

Classic

ModifyMode

string

No

The method that is used to modify the whitelist. Valid values:

-   **Cover**: Use the IP addresses and CIDR blocks that are specified in the **SecurityIps** parameter to overwrite the existing IP addresses and CIDR blocks in the IP address whitelist.
-   **Append**: Add the IP addresses and CIDR blocks that are specified in the **SecurityIps** parameter to the IP address whitelist.
-   **Delete**: Delete the IP addresses and CIDR blocks that are specified in the **SecurityIps** parameter from the IP address whitelist. You must retain at least one IP address or CIDR block.

Default value: **Cover**.

Cover

FreshWhiteListReadins

string

No

The read-only instances to which you want to synchronize the IP address whitelist.

-   This parameter applies only to ApsaraDB RDS for PostgreSQL instances.
-   If the instance is attached with a read-only instance, you can use this parameter to synchronize the IP address whitelist to the read-only instance. If the instance is attached with multiple read-only instances, separate the read-only instances with commas (,).
-   If the instance is not attached with a read-only instance, leave this parameter empty.

pgr-bp17yuz4dn3d\*\*\*\*,pgr-bp1vn2ph54u1\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

TaskId

string

The task ID.

115855279

RequestId

string

The ID of the request.

1AD222E9-E606-4A42-BF6D-8A4442913CEF

## Examples

Sample success responses

`JSON`format

```
{
  "TaskId": 115855279,
  "RequestId": " 1AD222E9-E606-4A42-BF6D-8A4442913CEF"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

IncorrectMasterDBInstanceState

Master instance state does not support this operation.

\-

400

InvalidWhitelistNetType.Malformed

Specified WhitelistNetType is not valid.

The specified WhitelistNetworkType is invalid. Please check again.

400

InvalidIPArrayAttribute.Format

The format of the IP attribute is invalid.

The specified DBInstanceIPArrayAttribute parameter is invalid. Specify a valid value and try again. If the value that you specify contains multiple entries, separate the entries with commas (,). Each entry must be unique. Valid entries are in one of the following formats: IP address, such as 10.23.12.24. CIDR, such as 10.23.12.0/24. In this example, 24 indicates that the prefix in each IP address is 24 bits in length. You can replace 24 with an integer within the range of 1 to 32.

400

InvalidSecurityIPList.Duplicate

Specified security IP list is not valid: Duplicate IP address in the list.

The IP address whitelist is invalid. It contains duplicate entries.

400

SecurityIPList.Format

Specified SecurityIPList is not valid.

The specified IP address whitelist is invalid.

400

InvalidGroupName.DuplicatedWithTemplate

Sepecified group name is used by whitelist template.

The whitelist group name conflicts with the whitelist template associated with the instance.

400

InvalidSecurityIPListGroup.QuotaExceeded

Specified security IP list group is not valid: Exceeding the allowed amount of group.

The specified whitelist security group is invalid and exceeds the number of allowed groups.

400

InvalidDBInstanceType.Format

Specified instance type is not valid.

The operation failed. The database engine is invalid. Specify a valid database engine.

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

IncorrectDBType

The current DB type does not support this operation.

The operation failed. The operation is not supported by the database engine of the RDS instance. Specify a different database engine.

403

IncorrectDBInstanceType

Current DB instance type does not support this operation.

The operation failed. The RDS instance is not in a ready state.

403

IncorrectDBInstanceCharacterType

Current DB Instance character\_type does not support this operation.

This operation is not supported for the character type of the current instance.

403

IncorrectDBInstanceState

Current DB instance state does not support this operation.

\-

403

IncorrectEngineVersion

The engine version does not support the operation.

The operation failed. The operation is not supported for the database engine version of the RDS instance.

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

Readins.NotFound

The current instance does not contain any read only instance. The operation is not supported.

The operation failed. The RDS instance is not attached with read-only RDS instances.

404

InvalidDBInstanceName.NotFound

The database instance does not exist.

The name of the RDS instance cannot be found. Check the name of the RDS instance.

404

InvalidDBInstance.NotFound

The specified instance does not exist or is not supported.

The RDS instance cannot be found. Check the ID or name of the RDS instance.

404

IncorrectDBInstanceLockMode

Current DB instance lock mode does not support this operation.

The operation failed. The RDS instance is locked.

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

2024-09-19

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifySecurityIps?updateTime=2024-09-19#workbench-doc-change-demo)

2024-09-11

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifySecurityIps?updateTime=2024-09-11#workbench-doc-change-demo)

2024-03-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifySecurityIps?updateTime=2024-03-25#workbench-doc-change-demo)

2022-10-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifySecurityIps?updateTime=2022-10-28#workbench-doc-change-demo)

2022-09-01

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifySecurityIps?updateTime=2022-09-01#workbench-doc-change-demo)
