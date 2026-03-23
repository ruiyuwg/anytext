Queries the available zones for an instance.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

-   RDS MySQL
-   RDS PostgreSQL
-   RDS SQL Server
-   RDS MariaDB

**Note** You can call this operation to query the available zones for an instance. The query result may be different from the zones available on the buy page of the ApsaraDB RDS console. The values of some parameters on the buy page vary based on the actual sales policy. The actual information on the [buy page](https://rdsbuy.console.alibabacloud.com/create/rds/PostgreSQL) prevails.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeAvailableZones)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeAvailableZones)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

Yes

The region ID. You can call the DescribeRegions operation to query the most recent region list.

cn-hangzhou

Engine

string

Yes

The database engine of the instance. Valid values:

-   **MySQL**
-   **SQLServer**
-   **PostgreSQL**
-   **MariaDB**

MySQL

ZoneId

string

No

The zone ID. If the instance spans more than one zone, the value of this parameter contains an `MAZ` part, such as `cn-hangzhou-MAZ6(b,f)` and `cn-hangzhou-MAZ5(b,e,f)`. You can call the DescribeRegions operation to query the most recent zone list.

cn-hangzhou-e

EngineVersion

string

No

The database engine version. Valid values:

-   Regular instance
    
    -   Valid values if you set Engine to MySQL: **5.5**, **5.6**, **5.7**, and **8.0**
    -   Valid values if you set Engine to SQLServer: **2008r2**, **08r2\_ent\_ha**, **2012**, **2012\_ent\_ha**, **2012\_std\_ha**, **2012\_web**, **2014\_std\_ha**, **2016\_ent\_ha**, **2016\_std\_ha**, **2016\_web**, **2017\_std\_ha**, **2017\_ent**, **2019\_std\_ha**, and **2019\_ent**
    -   Valid values if you set Engine to PostgreSQL: **10.0**, **11.0**, **12.0**, **13.0**, **14.0**, and **15.0**
    -   Valid value when you set Engine to MariaDB: **10.3**
-   Serverless instance
    
    -   Valid values if you set Engine to MySQL: **5.7** and **8.0**
    -   Valid values if you set Engine to SQLServer: **2016\_std\_sl**, **2017\_std\_sl**, and **2019\_std\_sl**
    -   Valid value if you set Engine to PostgreSQL: **14.0**
    
    \*\*
    
    **Note**ApsaraDB RDS for MariaDB does not support serverless instances.
    

8.0

CommodityCode

string

No

The commodity code of the instance. This operation can return the resources that you can purchase based on the specified commodity code. Valid values:

-   **bards**: The instance is a pay-as-you-go primary instance. This value is available at the China site (aliyun.com).
-   **rds**: The instance is a subscription primary instance. This value is available at the China site (aliyun.com).
-   **rords**: The instance is a pay-as-you-go read-only instance. This value is available at the China site (aliyun.com).
-   **rds\_rordspre\_public\_cn**: The instance is a subscription read-only instance. This value is available at the China site (aliyun.com).
-   **bards\_intl**: The instance is a pay-as-you-go primary instance. This value is available at the International site (alibabacloud.com).
-   **rds\_intl**: The instance is a subscription primary instance. This value is available at the International site (alibabacloud.com).
-   **rords\_intl**: The instance is a pay-as-you-go read-only instance. This value is available at the International site (alibabacloud.com).
-   **rds\_rordspre\_public\_intl**: The instance is a subscription read-only instance. This value is available at the International site (alibabacloud.com).
-   **rds\_serverless\_public\_cn**: The instance is a serverless instance. This value is available at the China site (aliyun.com).
-   **rds\_serverless\_public\_intl**: The instance is a serverless instance. This value is available at the International site (alibabacloud.com).

bards

DispenseMode

string

No

Specifies whether to return the zones in which the single-zone deployment method is supported. Valid values:

-   **1** (default): returns the zones.
-   **0**: does not return the zones.

**Note** The single-zone deployment method allows you to deploy an instance that runs RDS Enterprise Edition in a single zone.

0

DBInstanceName

string

No

The ID of the primary instance. If you want to query the read-only instances that you can purchase for a primary instance, you can specify this parameter.

If you set **CommodityCode** to one of the following values, you must specify this parameter:

-   **rords\_intl**
-   **rds\_rordspre\_public\_intl**
-   **rords**
-   **rds\_rordspre\_public\_cn**

rm-uf6wjk5xxxxxxx

Category

string

No

The RDS edition of the instance. Valid values:

-   Regular instance
    
    -   **Basic**: RDS Basic Edition.
    -   **HighAvailability**: RDS High-availability Edition.
    -   **cluster**: RDS Cluster Edition for ApsaraDB RDS for MySQL.
    -   **AlwaysOn**: RDS Cluster Edition for ApsaraDB RDS for SQL Server.
    -   **Finance**: RDS Enterprise Edition.
-   Serverless instance
    
    -   **serverless\_basic**: RDS Basic Edition. This edition is available only for instances that run MySQL and PostgreSQL.
    -   **serverless\_standard**: RDS High-availability Edition for ApsaraDB RDS for MySQL.
    -   **serverless\_ha**: RDS High-availability Edition for ApsaraDB RDS for SQL Server.

HighAvailability

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

4256E149-C3C4-4FA7-BDEA-13CA415E8763

AvailableZones

array<object>

The available zones in the region.

AvailableZone

object

ZoneId

string

The zone ID.

cn-hangzhou-e

RegionId

string

The region ID.

cn-hangzhou

SupportedEngines

array<object>

The database engines that are available for purchase.

SupportedEngine

object

Engine

string

The database engine of the instance.

MySQL

SupportedEngineVersions

array<object>

The database engine versions that are available for purchase.

SupportedEngineVersion

object

Version

string

The database engine version.

8.0

SupportedCategorys

array<object>

The RDS editions that are available that are available for purchase.

SupportedCategory

object

Category

string

The RDS edition of the instance.

HighAvailability

SupportedStorageTypes

array<object>

The storage types that are available for purchase.

SupportedStorageType

object

StorageType

string

The storage type of the instance.

local\_ssd

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "4256E149-C3C4-4FA7-BDEA-13CA415E8763",
  "AvailableZones": [
    {
      "ZoneId": "cn-hangzhou-e",
      "RegionId": "cn-hangzhou",
      "SupportedEngines": [
        {
          "Engine": "MySQL",
          "SupportedEngineVersions": [
            {
              "Version": 8,
              "SupportedCategorys": [
                {
                  "Category": "HighAvailability",
                  "SupportedStorageTypes": [
                    {
                      "StorageType": "local_ssd"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
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

ArticleNotFound

Article not found

No relevant constraints are found.

400

InvalidDBInstanceName

The specified parameter DBInstanceName is null or the instance cannot be found, please check parameter DBInstanceName.

The specified parameter DBInstanceName is null or the instance cannot be found, please check parameter DBInstanceName.

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

InvalidBackupSet

The specified database does not exist in the backup set.

The specified database does not exist in the backup set.

400

OrdTCommodityQueryError

Failed to query for product.

Failed to query product.

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

InvalidDBInstanceName.NotFound

DBInstanceName not found

\-

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

2024-11-18

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeAvailableZones?updateTime=2024-11-18#workbench-doc-change-demo)

2024-07-10

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeAvailableZones?updateTime=2024-07-10#workbench-doc-change-demo)
