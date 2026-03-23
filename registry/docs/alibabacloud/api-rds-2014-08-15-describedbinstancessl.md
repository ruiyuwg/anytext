Queries the SSL configurations of an instance.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

-   RDS MySQL
-   RDS PostgreSQL
-   RDS SQL Server

### [](#references)[](#)References

-   [Use the SSL encryption feature for an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/configure-a-cloud-certificate-to-enable-ssl-encryption)
-   [Use the SSL encryption feature for an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/configure-ssl-encryption-for-an-apsaradb-rds-for-postgresql-instance)
-   [Use the SSL encryption feature for an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/configure-ssl-encryption-for-an-apsaradb-rds-for-sql-server-instance)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeDBInstanceSSL)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeDBInstanceSSL)

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

rds:DescribeDBInstanceSSL

get

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

rm-bp162dfr55g47\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

ACL

string

The method that is used to verify the instance. This parameter is supported only when the instance runs PostgreSQL with cloud disks.

-   **cert**
-   **prefer**
-   **verify-ca**
-   **verify-full** (supported only when the instance runs PostgreSQL 12 or later)

cert

CAType

string

The type of the server certificate. This parameter is supported only when the instance runs PostgreSQL with cloud disks. Valid values:

-   **aliyun**: a cloud certificate
-   **custom**: a custom certificate

aliyun

ClientCACert

string

The public key of the CA that issues client certificates. This parameter is supported only when the instance runs PostgreSQL with cloud disks.

\-----BEGIN CERTIFICATE-----MIID\*\*\*\*\*viXk=-----END CERTIFICATE-----

ClientCACertExpireTime

string

The time when the public key of the CA that issues client certificates expires. This parameter is supported only when the instance runs PostgreSQL with cloud disks. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format and must be in UTC.

This parameter is not supported.

\-

ClientCertRevocationList

string

The certificate revocation list (CRL) that contains revoked client certificates. This parameter is supported only when the instance runs PostgreSQL with cloud disks.

\-----BEGIN X509 CRL-----MIIB\*\*\*\*19mg==-----END X509 CRL-----

ConnectionString

string

The endpoint that is protected by SSL encryption.

rm-bp162dfr55g47\*\*\*\*.mysql.rds.aliyuncs.com

ForceEncryption

string

Indicates whether the [forceful SSL encryption](/help/en/rds/apsaradb-rds-for-sql-server/configure-ssl-encryption-for-an-apsaradb-rds-for-sql-server-instance) feature is enabled. This parameter is supported only for RDS for SQL Server instances.

-   **1**: The feature is enabled.
-   **0**: The feature is disabled.

1

LastModifyStatus

string

The status of the SSL link. This parameter is supported only when the instance runs PostgreSQL with cloud disks.

-   **success**: The SSL link is successfully configured.
-   **setting**: The SSL link is being configured.
-   **failed**: The SSL link failed to be configured.

setting

ModifyStatusReason

string

The reason why the SSL link stays in the current state. This parameter is supported only when the instance runs PostgreSQL with cloud disks.

Modify DB Instance SSL Config.

ReplicationACL

string

The method that is used to verify the replication permission. This parameter is supported only when the instance runs PostgreSQL with cloud disks. Valid values:

-   **cert**
-   **prefer**
-   **verify-ca**
-   **verify-full** (supported only when the instance runs PostgreSQL 12 or later)

cert

RequestId

string

The ID of the request.

7705151C-E242-55AF-9929-2A3C39D979D2

RequireUpdate

string

Indicates whether the SSL certificate needs to be updated. Valid values:

**Note** An SSL certificate remains valid for one year. Before the used SSL certificate expires, you must update the validity period of the SSL certificate. If you do not update the validity period of the SSL certificate, your application or client that uses encrypted network connections cannot connect to your RDS instance.

**RDS instances that run MySQL and SQL Server**

-   **No**: The SSL certificate does not need to be updated.
-   **Yes**: The SSL certificate needs to be updated.

**RDS instances that run PostgreSQL**

-   **0**: The SSL certificate does not need to be updated.
-   **1**: The SSL certificate needs to be updated.

Yes

RequireUpdateItem

string

The server certificate that needs to be updated. This parameter is supported only when the instance runs PostgreSQL with cloud disk.

\-

RequireUpdateReason

string

The reason why the server certificate needs to be updated. This parameter is supported only when the instance runs PostgreSQL with cloud disks.

\-

SSLCreateTime

string

The time when the server certificate was created. This parameter is supported only when the instance runs PostgreSQL with cloud disks. In addition, this parameter is valid only when the CAType parameter value is aliyun.

\-

SSLEnabled

string

Indicates whether SSL encryption is enabled. Valid values:

**RDS instances that run MySQL and SQL Server**

-   **Yes**: SSL encryption is enabled.
-   **No**: SSL encryption is disabled.

**RDS instances that run PostgreSQL**

-   **on**: SSL encryption is enabled.
-   **off**: SSL encryption is disabled.

Yes

SSLExpireTime

string

The time when the SSL certificate expires. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format and must be in UTC.

2022-10-11T08:16:43Z

ServerCAUrl

string

The URL of the certificate that is used to issue the server certificate. This parameter is supported only when the instance runs PostgreSQL with cloud disk.

\-

ServerCert

string

The content of the server certificate. This parameter is supported only when the instance runs PostgreSQL with cloud disks.

\-----BEGIN CERTIFICATE-----MIID\*\*\*\*\*QqEP-----END CERTIFICATE-----

ServerKey

string

The private key of the server certificate. This parameter is supported only when the instance runs PostgreSQL with cloud disks.

\-----BEGIN PRIVATE KEY-----MIIE\*\*\*\*ihfg==-----END PRIVATE KEY-----

TlsVersion

string

The [minimum Transport Layer Security (TLS) version](/help/en/rds/apsaradb-rds-for-sql-server/configure-ssl-encryption-for-an-apsaradb-rds-for-sql-server-instance). Valid values: 1.0, 1.1, and 1.2. This parameter is supported only for ApsaraDB RDS for SQL Server instances.

1.1

## Examples

Sample success responses

`JSON`format

```
{
  "ACL": "cert",
  "CAType": "aliyun",
  "ClientCACert": "-----BEGIN CERTIFICATE-----MIID*****viXk=-----END CERTIFICATE-----",
  "ClientCACertExpireTime": "-",
  "ClientCertRevocationList": "-----BEGIN X509 CRL-----MIIB****19mg==-----END X509 CRL-----",
  "ConnectionString": "rm-bp162dfr55g47****.mysql.rds.aliyuncs.com",
  "ForceEncryption": 1,
  "LastModifyStatus": "setting",
  "ModifyStatusReason": "Modify DB Instance SSL Config.",
  "ReplicationACL": "cert",
  "RequestId": "7705151C-E242-55AF-9929-2A3C39D979D2",
  "RequireUpdate": "Yes",
  "RequireUpdateItem": "-",
  "RequireUpdateReason": "-",
  "SSLCreateTime": "-",
  "SSLEnabled": "Yes",
  "SSLExpireTime": "2022-10-11T08:16:43Z",
  "ServerCAUrl": "-",
  "ServerCert": "-----BEGIN CERTIFICATE-----MIID*****QqEP-----END CERTIFICATE-----",
  "ServerKey": "-----BEGIN PRIVATE KEY-----MIIE****ihfg==-----END PRIVATE KEY-----",
  "TlsVersion": 1.1
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvaildEngineInRegion.ValueNotSupported

The engine is not supported in the region.

The database engine version is invalid.

400

InvalideStatus.Format

Specified Status is not valid.

\-

400

ConcurrentLimit

The request processing has been concurrent limit.

Request processing has reached the concurrency limit.

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

OperationDenied.DBInstanceType

The operation is not permitted due to type of the instance.

The current instance type does not support this operation.

403

InstanceEngineType.NotSupport

The instance engine and type does not support operations

The operation failed. The operation is not supported for the database engine that is run on the RDS instance.

403

IncorrectEngineVersion

Current engine version does not support operations.

The operation failed. The operation is not supported for the version of the database engine that is run on the RDS instance.

403

IncorrectDBInstanceState

Current DB instance state does not support this operation.

\-

403

IncorrectDBInstanceType

Current DB instance type does not support this operation.

The operation failed. The RDS instance is not in a ready state.

403

IncorrectDBInstanceLockMode

Current DB instance lock mode does not support this operation.

The operation failed. The RDS instance is locked.

403

ConnectionStringLengthExceeded

Connection String is too long.

The endpoint is exceedingly long. Modify the endpoint and try again.

403

ResourceConfigError

The request processing has failed due to resource config error.

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

InvalidDBInstanceId.NotFound

The specified instance is not found.

The RDS instance cannot be found. Check whether the RDS instance is created within the logged-on account.

404

EnabledSSLNotSupport

Specified region does not support enable ssl.

SSL encryption is not supported in the region.

404

InvalidConnectionString.NotFound

Specified connection string or net type is not found.

The endpoint cannot be found. Check the endpoint.

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

2024-09-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstanceSSL?updateTime=2024-09-25#workbench-doc-change-demo)

2024-06-05

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstanceSSL?updateTime=2024-06-05#workbench-doc-change-demo)

2023-12-20

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstanceSSL?updateTime=2023-12-20#workbench-doc-change-demo)

2022-06-23

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstanceSSL?updateTime=2022-06-23#workbench-doc-change-demo)
