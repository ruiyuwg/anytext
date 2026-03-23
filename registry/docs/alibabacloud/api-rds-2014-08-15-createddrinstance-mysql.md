Restores data to a new instance across regions.

## Operation description

**Note** Before restoration, you can call the CheckCreateDdrDBInstance operation to check whether a cross-region backup set can be used for cross-region restoration.

### [](#supported-database-engines)[](#)Supported database engines

-   MySQL
-   PostgreSQL
-   SQL Server

### [](#references)[](#)References

**Note** Before you call this operation, read the following topics and make sure that you fully understand the prerequisites and impacts of this operation.

-   [Use the cross-region backup feature for an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/use-the-cross-region-backup-feature-of-an-apsaradb-rds-for-mysql-instance)
-   [Use the cross-region backup feature for an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/use-the-cross-region-backup-feature-for-an-apsaradb-rds-for-postgresql-instance)
-   [Use the cross-region backup feature for an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/enable-the-cross-region-backup-feature-for-an-apsaradb-rds-for-sql-server-instance)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/CreateDdrInstance)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/CreateDdrInstance)

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

rds:CreateDdrInstance

create

\*All Resources

`*`

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

The region ID of the destination instance. You can call the DescribeRegions operation to query the most recent region list.

cn-hangzhou

Engine

string

Yes

The database engine of the destination instance. Valid values:

-   **MySQL**
-   **SQLServer**
-   **PostgreSQL**

MySQL

EngineVersion

string

Yes

The major engine version of the destination instance. The value of this parameter varies based on the value of **Engine**.

-   Valid values when Engine is set to MySQL: **5.5, 5.6, 5.7, and 8.0**
-   Valid values when Engine is set to SQLServer: **2008r2, 08r2\_ent\_ha, 2012, 2012\_ent\_ha, 2012\_std\_ha, 2012\_web, 2014\_std\_ha, 2016\_ent\_ha, 2016\_std\_ha, 2016\_web, 2017\_std\_ha, 2017\_ent, 2019\_std\_ha, and 2019\_ent**
-   Valid values when Engine is set to PostgreSQL: **9.4, 10.0, 11.0, 12.0, and 13.0**

5.6

DBInstanceClass

string

No

The instance type of the destination instance. For more information, see [Primary ApsaraDB RDS instance types](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types).

rds.mysql.s1.small

DBInstanceStorage

integer

No

The storage capacity of the destination instance. Valid values: **5 to 2000**. Unit: GB. You can increase the storage capacity at a step size of 5 GB. For more information, see [Primary instance types](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types).

20

SystemDBCharset

string

No

The character set of the destination instance. Valid values:

-   **utf8**
-   **gbk**
-   **latin1**
-   **utf8mb4**

uft8

DBInstanceNetType

string

Yes

The network connection type of the destination instance. Valid values:

-   **Internet**
-   **Intranet**

Intranet

DBInstanceDescription

string

No

The instance name. The name must be 2 to 256 characters in length. The value can contain letters, digits, underscores (\_), and hyphens (-), and must start with a letter.

**Note** The value cannot start with http:// or https://.

Test database

SecurityIPList

string

Yes

The IP address whitelist of the destination instance. If you want to add more than one entry to the IP address whitelist, separate the entries with commas (,). Each entry must be unique. You can add a maximum of 1,000 entries. For more information, see [Configure an IP address whitelist for an ApsaraDB RDS for MySQL instance](/help/en/rds/use-a-database-client-or-the-cli-to-connect-to-an-apsaradb-rds-for-mysql-instance-2). The entries in the IP address whitelist must be in one of the following formats:

-   IP address. Example: 10.23.12.24.
-   CIDR block. Example: 10.23.12.24/24. In this example, 24 indicates that the prefix of the CIDR block is 24 bits in length. You can replace 24 with a value that ranges from 1 to 32.

127.0.0.1

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.

ETnLKlblzczshOTUbOCzxxxxxxxxxx

PayType

string

Yes

The billing method of the instance. Valid values:

-   **Postpaid**: pay-as-you-go
-   **Prepaid**: subscription

Prepaid

ZoneId

string

No

The zone ID of the destination instance. If the destination instance is deployed in multiple zones, separate the IDs of the zones with colons (:).

**Note** If you specify a virtual private cloud (VPC) and a vSwitch, you must specify this parameter to identify the zone for the vSwitch.

cn-hangzhou-b

InstanceNetworkType

string

No

The network type of the instance. Valid values:

-   **VPC**
-   **Classic**

Default value: Classic.

**Note** If you set this parameter to **VPC**, you must also specify **VpcId** and **VSwitchId**.

Classic

ConnectionMode

string

No

The connection mode of the destination instance. Valid values:

-   **Standard**: standard mode
-   **Safe**: database proxy mode

Default value: **Standard**.

Standard

VPCId

string

No

The VPC ID of the destination instance. This parameter is available only when you set the **InstanceNetworkType** parameter to **VPC**.

**Note** If you specify this parameter, you must also specify the **ZoneId** parameter.

vpc-xxxxxxxxxxxx

VSwitchId

string

No

The vSwitch ID of the destination instance. If you specify more than one vSwitch, separate the IDs of the vSwitches with commas (,). This parameter is available only when you set the **InstanceNetworkType** parameter to **VPC**.

**Note** If you specify this parameter, you must also specify the **ZoneId** parameter.

vsw-xxxxxxxxxxx

PrivateIpAddress

string

No

The private IP address of the destination instance. The private IP address must be within the CIDR block that is supported by the specified vSwitch. The system automatically assigns an internal IP address based on the values of the **VPCId** and **VSwitchId** parameters.

172.XXX.XXX.69

UsedTime

string

No

The subscription duration of the instance.

-   If you set **Period** to **Year**, the value of UsedTime ranges from **1 to 3**.
-   If you set **Period** to **Month**, the value of UsedTime ranges from **1 to 9**.

**Note** If you set PayType to **Prepaid**, you must specify UsedTime.

2

Period

string

No

The unit that is used to measure the subscription duration of the destination instance. Valid values:

-   **Year**
-   **Month**

**Note** If you set PayType to **Prepaid**, you must specify UsedTime.

Year

ResourceGroupId

string

No

The resource group ID.

rg-acfmyxxxxxxxxxx

RestoreType

string

Yes

The restoration method that you want to use. Valid values:

-   **BackupSet**: restores data from a backup set. If you use this value, you must also specify **BackupSetId**.
-   **BackupTime**: restores data to a point in time. If you use this value, you must also specify **RestoreTime**, **SourceRegion**, and **SourceDBInstanceName**.

BackupSet

BackupSetId

string

No

The backup set ID that you want to use for the restoration. You can call the DescribeCrossRegionBackups operation to query backup set ID.

**Note** This parameter is required when you set the **RestoreType** parameter to **BackupSet**.

14\*\*\*

BackupSetRegion

string

No

The region where the backup set is located.

cn-beijing

RestoreTime

string

No

The point in time to which you want to restore data. The point in time that you specify must be earlier than the current time. Specify the time in the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time must be in UTC.

**Note** If **RestoreType** is set to **BackupTime**, you must specify this parameter.

2019-05-30T03:29:10Z

SourceRegion

string

No

The region ID of the source instance if you want to restore data to a point in time.

**Note** If you set **RestoreType** to **BackupTime**, you must specify this parameter.

cn-hangzhou

SourceDBInstanceName

string

No

The source instance ID, which is used if you want to restore data to a point in time.

**Note** This parameter is required when you set the **RestoreType** parameter to **BackupTime**.

rm-uf6wjk5xxxxxxx

DBInstanceStorageType

string

No

The storage type of the destination instance. Only the local SSD storage type is supported. Default value: **local\_ssd**.

local\_ssd

RoleARN

string

No

The Alibaba Cloud Resource Name (ARN) that is provided by your Alibaba Cloud account for Resource Access Management (RAM) users. RAM users can use the ARN to connect to ApsaraDB RDS to Key Management Service (KMS). You can call the [CheckCloudResourceAuthorized](/help/en/rds/apsaradb-rds-for-sql-server/api-rds-2014-08-15-checkcloudresourceauthorized-sqlserver) operation to query the ARN.

**Note** This parameter is applicable only to ApsaraDB RDS for SQL Server instances.

acs:ram::1406\*\*\*\*:role/aliyunrdsinstanceencryptiondefaultrole

EncryptionKey

string

No

The ID of the customer master key (CMK) for cloud disk encryption. If this parameter is specified, cloud disk encryption is enabled and you must also specify the **RoleARN** parameter. Cloud disk encryption cannot be disabled after it is enabled. You can obtain the ID of the key in the KMS console or create a key. For more information, see [Create a key](/help/en/kms/key-management-service/support/create-a-cmk-1).

\*\*

**Notes**

-   This parameter is applicable only to ApsaraDB RDS for SQL Server instances.
    
-   You can leave this parameter empty. If you do not specify this parameter, you only need to specify the **RoleARN** to use the service key that is managed by ApsaraDB RDS to encrypt cloud disks.
    

749c1df7-\*\*\*\*-\*\*\*\*-\*\*\*\*-\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

ConnectionString

string

The endpoint that is used to connect to the destination instance.

**Note** The **DBInstanceNetType** parameter indicates whether the endpoint is internal or public.

rm-xxxxx.mysql.rds.aliyuncs.com

DBInstanceId

string

The destination instance ID.

rm-xxxxx

OrderId

string

The order ID.

2038691xxxxx

Port

string

The port number that is used to connect to the destination instance.

**Note** **DBInstanceNetType** indicates whether the port is internal or public.

3306

RequestId

string

The ID of the request.

E52666CC-330E-418A-8E5B-A19E3FB42D13

## Examples

Sample success responses

`JSON`format

```
{
  "ConnectionString": "rm-xxxxx.mysql.rds.aliyuncs.com",
  "DBInstanceId": "rm-xxxxx",
  "OrderId": "2038691xxxxx",
  "Port": 3306,
  "RequestId": "E52666CC-330E-418A-8E5B-A19E3FB42D13"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidZoneId.NotSupported

The Specified vpc Zone not supported.

VPC-hosted RDS instances cannot be created in the zone. Specify a different zone.

400

InvalidDBInstanceName.Format

Specified DB instance name is not valid.

The instance does not exist. Check the instance information.

400

InvalidDBInstanceName.Duplicate

Specified DB instance name already exists in the Aliyun RDS.

The operation failed. The instance name already exists. Specify a different name and try again.

400

InvalidRegion.Format

Specified Region is not valid.

The region ID is invalid. Check the region ID.

400

InvalidServiceType.Format

Specified service type is not valid.

The service type is invalid. Set the service type to 0 or 1. The value 0 indicates an Alibaba Cloud service, and the value 1 indicates a JST service.

400

InvalidEngine.Malformed

Specified engine is not valid.

The database engine is invalid. Specify a valid database engine.

400

InvalidEngineVersion.Malformed

Specified engine version is not valid.

The database engine version is invalid. Check the database engine version and try again.

400

InvalidConnectionString.Format

Specified connection string is not valid.

The endpoint of the RDS instance is invalid. The prefix of the endpoint must be 5 to 40 characters in length.

400

InvalidConnectionString.Duplicate

Specified connection string already exists in the Aliyun RDS.

The endpoint is duplicate. Specify a different endpoint.

400

InvalidCharacterSetName.Format

Specified character set name is not valid.

The character set is invalid. ApsaraDB RDS supports the following character sets: gbk, utf8, euckr, and ascii.

400

InvalidDBInstanceType.Format

Specified instance type is not valid.

The operation failed. The database engine is invalid. Specify a valid database engine.

400

InvalidPort.Malformed

Specified port is not valid.

The port number is invalid.

400

InvalidBackupRetentionPeriod.Malformed

Specified backup retention period is not valid.

The backup cycle is invalid. The backup cycle must be greater than 1 day and less than or equal to 30 days.

400

InvalidPreferredBackupTime.Format

Specified preferred backup time is not valid.

The time of the backup file is invalid. Specify the time in the GMT standard in the YYYY-MM-DDThh:mmZ format. Example: 2012-06-11T15:00Z.

400

InvalidPreferredBackupPeriod.Malformed

Specified backup period is not valid.

The backup time is invalid.

400

InvalidOptmizationService

Specified optmization service is not valid.

\-

400

InvalidExpiredTime.Format

Specified expired time is not valid.

The value of the ExpiredTime parameter is invalid. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

400

InvalidSecurityIPList.Format

Specified security IP list format is not valid.

The IP address whitelist is invalid. Check the IP address whitelist.

400

InvalidSecurityIPList.Duplicate

Specified security IP list is not valid: Duplicate IP address in the list

The IP address whitelist is invalid. The whitelist contains duplicate entries.

400

InvalidSecurityIPList.QuotaExceeded

Specified security IP list is not valid: Exceeding the allowed amount of IP address in the list.

The number of IP addresses and CIDR blocks in the IP address whitelist that is specified by the SecurityIPList parameter exceeds the upper limit. The IP address whitelist can contain a maximum of 1,000 IP addresses and CIDR blocks.

400

InvalidDBInstanceDescription.Format

Specified DB instance description is not valid.

\-

400

InvalidStorage.Format

Specified Storage is not valid.

The value of the Storage parameter is invalid. Specify a valid value.

400

InvalidDBInstanceConnType.Format

Specified DB instance conn type is not valid.

The operation failed. The operation is not supported for the connection type of the RDS instance.

400

PreCheckInvalid

CreateDdrInstance PreCheck Is Invalid

The precheck for CreateDdrInstance is invalid.

400

IncorrectDBInstanceType

Current DB instance engine and type does not support operations.

The operation failed. The operation is not supported for the database engine of the RDS instance.

400

InvalidRestoreType.Format

Specified restore type is not valid.

The restoration type is invalid. Specify a valid restoration type.

400

NoBackupSetRegion

BackupSetRegion is absence.

The backup region does not exist.

400

IncorrectBackupSetType

Backup set type should be value ddr.

\-

400

NoBaksetName

BaksetName is absence.

The backup set name does not exist.

400

NoSourceInstanceName

No SourceDBInstanceName.

The source instance name is not found.

400

NoAvailableDisasterRestoreBakset

No available disaster restore bakset.

No available restore set is found.

400

InvalidBackupType.Format

Specified backup type is not valid.

The operation failed. The backup type is invalid.

400

IncorrectEngineVersion

Current engine version does not support operations.

The operation failed. The operation is not supported for the version of the database engine that is run on the RDS instance.

400

DisasterRestoreRegionNotMatched

Disaster restore should be operated in the ddr region or source region.

\-

400

InvalidVpcIdRegion.NotSupported

The Specified vSwitchId zone not supported.

\-

400

VswitchIpExhausted

No available ip in the specified vswitch.

No available IP address exists in the specified vSwitch.

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

IncorrectBackupSetMethod

Current backup set method does not support operations.

The operation failed. The data backup file does not support the restoration of individual databases and tables.

403

IncorrectBaksetVersion

Current bakset version does not support operations.

The operation failed. The operation is not supported for the version of the data backup file.

403

CrossRegionUnsupportTDE

Cross-region disaster restore not support TDE bakset.

\-

403

OperationDenied.Resource

Specified DB instance class or storage is not available in all Availability Zones.

Insufficient resources. Try again with a different instance type or storage size.

403

OperationDenied.ZoneResource

There is no available zone for inventory.

There is no available zone for inventory.

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

InvalidRegion.NotFound

Specified Region does not exist in the RDS

The region ID is invalid.

404

InvalidClusterName.NotFound

The specified cluster name is not available.

The operation failed. The instance name cannot be found. Check the instance name and try again.

404

InvalidDBInstanceClass.NotFound

Specified DB instance class is not found.

The configuration or the instance type cannot be found or has been discontinued. Specify a different configuration or a different instance type.

404

InvalidDBInstanceNetType.NotFound

Specified DB instance net type is not found.

The operation failed. The network type of the RDS instance is invalid. Specify a valid network type.

404

RestoreType.NotFound

RestoreType is not found.

RestoreType is not found.

404

InvalidBackupSetID.NotFound

Specified backup set ID does not exist.

The backup set does not exist. Specify an available backup set.

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

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDdrInstance?updateTime=2025-02-28#workbench-doc-change-demo)

2025-02-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDdrInstance?updateTime=2025-02-27#workbench-doc-change-demo)

2024-11-14

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDdrInstance?updateTime=2024-11-14#workbench-doc-change-demo)

2024-08-27

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDdrInstance?updateTime=2024-08-27#workbench-doc-change-demo)

2024-05-29

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDdrInstance?updateTime=2024-05-29#workbench-doc-change-demo)

2024-05-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDdrInstance?updateTime=2024-05-27#workbench-doc-change-demo)

2023-07-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDdrInstance?updateTime=2023-07-14#workbench-doc-change-demo)

2023-01-11

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDdrInstance?updateTime=2023-01-11#workbench-doc-change-demo)

2022-09-01

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDdrInstance?updateTime=2022-09-01#workbench-doc-change-demo)
