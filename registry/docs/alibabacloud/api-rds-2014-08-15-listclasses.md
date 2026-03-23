Queries the specification details of an instance.

## Operation description

### [](#supported-database-engines)Supported database engines

-   MySQL
-   PostgreSQL
-   SQL Server
-   MariaDB

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/ListClasses)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/ListClasses)

## Authorization information

There is currently no authorization information disclosed in the API.

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

ETnLKlblzczshOTUbOCzxxxxxxx

CommodityCode

string

Yes

The commodity code of the instances.

-   **bards\_intl**: The instances are pay-as-you-go primary instances.
-   **rds\_intl**: The instances are subscription primary instances.
-   **rords\_intl**: The instances are pay-as-you-go read-only instances.
-   **rds\_rordspre\_public\_intl**: The instances are subscription read-only instances.

bards\_intl

DBInstanceId

string

No

The instance ID. You can call the DescribeDBInstances operation to query the instance ID.

**Note** If you set the **CommodityCode** parameter to the commodity code of read-only instances, you must specify this parameter.

rm-uf6wjk5xxxxxxx

OrderType

string

Yes

The type of order that you want to query. Valid values:

-   **BUY**: specifies the query orders that are used to purchase instances.
-   **UPGRADE**: specifies the query orders that are used to change the specifications of instances.
-   **RENEW**: specifies the query orders that are used to renew instances.
-   **CONVERT**: specifies the query orders that are used to change the billing methods of instances.

BUY

RegionId

string

No

The region ID. You can call the DescribeRegions operation to query the most recent region list.

**Note** If you are using an Alibaba Cloud account on the International site (alibabacloud.com), you must specify this parameter.

cn-hangzhou

Engine

string

No

The database engine of the instance. Valid values:

-   **MySQL**
-   **SQLServer**
-   **PostgreSQL**
-   **MariaDB**

MySQL

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

CF8D35BF-263D-4F7B-883A-1163B79A9EC6

RegionId

string

The ID of the region.

cn-hangzhou

Items

array<object>

The list of instance specifications.

ClassList

object

The data returned.

MaxIOPS

string

The maximum input/output operations per second (IOPS) that is supported by the instance type. Unit: operations per second.

10000

Cpu

string

The number of CPU cores that are supported by the instance type. Unit: cores.

1

ReferencePrice

string

The fee that you must pay for the instance type.

-   Unit: cents (USD).

**Note**-   If you set **CommodityCode** to a value that indicates the pay-as-you-go billing method, the ReferencePrice parameter specifies the hourly fee that you must pay.
-   If you set **CommodityCode** to a value that indicates the subscription billing method, the ReferencePrice parameter specifies the monthly fee that you must pay.

2500

MaxConnections

string

The maximum number of connections that are supported by the instance type. Unit: connections.

2000

MemoryClass

string

The memory size that is supported by the instance type. Unit: GB.

1 GB (RDS Basic Edition)

ClassCode

string

The code of the instance type. For more information, see [Primary ApsaraDB RDS instance types](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types) and [Read-only ApsaraDB RDS instance types](/help/en/rds/product-overview/read-only-apsaradb-rds-instance-types).

mysql.n1.micro.1

ClassGroup

string

The instance family. For more information, see [Overview of instance families](/help/en/rds/product-overview/instance-families).

General

MaxIOMBPS

string

The maximum I/O bandwidth that is supported by the instance type. Unit: Mbit/s.

1024Mbps

EncryptedMemory

string

The size of the encrypted memory that is supported by the security-enhanced instance type. Unit: GB.

4

InstructionSetArch

string

The architecture of the instance type. Valid values:

-   If the architecture of the instance type is **x86**, an empty string is returned by default.
-   If the architecture of the instance type is **ARM**, **arm** is returned.

arm

category

string

The RDS edition of the instance. Valid values:

-   Regular instance
    
    -   **Basic**: RDS Basic Edition
    -   **HighAvailability**: RDS High-availability Edition
    -   **cluster**: RDS Cluster Edition for ApsaraDB RDS for MySQL or PostgreSQL
    -   **AlwaysOn**: RDS Cluster Edition for ApsaraDB RDS for SQL Server
    -   **Finance**: RDS Basic Edition for serverless instances
-   Serverless instance
    
    -   **serverless\_basic**: RDS Basic Edition for serverless instances. This edition is available only for instances that run MySQL and PostgreSQL.
    -   **serverless\_standard**: RDS High-availability Edition for serverless instances. This edition is available only for instances that run MySQL and PostgreSQL.
    -   **serverless\_ha**: RDS High-availability Edition for serverless instances. This edition is available only for instances that run SQL Server.

Basic

storageType

string

The storage type of the instance.

cloud\_essd

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "CF8D35BF-263D-4F7B-883A-1163B79A9EC6",
  "RegionId": "cn-hangzhou",
  "Items": [
    {
      "MaxIOPS": 10000,
      "Cpu": 1,
      "ReferencePrice": 2500,
      "MaxConnections": 2000,
      "MemoryClass": "1 GB (RDS Basic Edition)\n",
      "ClassCode": "mysql.n1.micro.1",
      "ClassGroup": "General\n",
      "MaxIOMBPS": "1024Mbps",
      "EncryptedMemory": 4,
      "InstructionSetArch": "arm",
      "category": "Basic",
      "storageType": "cloud_essd"
    }
  ]
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidSecurityIPList.Malformed

The specified parameter SecurityIPList is not valid.

\-

400

InvalidSecurityIPList.Duplicate

The Security IP address is not in the available range or occupied.

The IP address is invalid. Specify a valid IP address.

400

InvalidCommodityCode.Malformed

The commodity code is invalid.

The commodity code is invalid.

400

ArticleNotFound

Article not found

No relevant constraints are found.

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

Forbidden.Authentication

The operation is forbidden by Aliyun Realname Authentication System.

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

GetCommodity.Failed

Get commodity failed.

Failed to obtain commodity information. The value of the CommodityCode parameter is invalid. Check the value of this parameter.

404

InvalidDBInstanceName.NotFound

Invalid DBInstanceId NotFound.

The instance ID cannot be found.

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

2024-11-12

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ListClasses?updateTime=2024-11-12#workbench-doc-change-demo)

2024-09-26

The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ListClasses?updateTime=2024-09-26#workbench-doc-change-demo)

2022-09-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ListClasses?updateTime=2022-09-13#workbench-doc-change-demo)

2022-09-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ListClasses?updateTime=2022-09-13#workbench-doc-change-demo)
