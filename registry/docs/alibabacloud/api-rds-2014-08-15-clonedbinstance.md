Restores the data of an original instance to a new instance. The new instance is called a cloned instance.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

-   MySQL
-   PostgreSQL
-   SQL Server
-   MariaDB

### [](#references)[](#)References

**Note** Before you call this operation, carefully read the following documentation. Make sure that you fully understand the prerequisites and impacts for calling this operation.

-   [Restore data of an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/restore-full-data-of-an-apsaradb-rds-for-mysql-instance)
-   [Restore data of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/restore-data-of-an-apsaradb-rds-for-postgresql-instance)
-   [Restore data of an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/restore-the-data-of-an-apsaradb-rds-for-sql-server-instance)
-   [Restore data of an ApsaraDB RDS for MariaDB instance](/help/en/rds/apsaradb-rds-for-mariadb/restore-the-data-of-an-apsaradb-rds-for-mariadb-instance)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/CloneDBInstance)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/CloneDBInstance)

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

rds:CloneDBInstance

create

DBInstance

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

0c593ea1-3bea-11e9-b96b-88\*\*\*\*\*\*\*\*\*\*

RegionId

string

No

The region ID. You can call the DescribeRegions operation to query the most recent region list.

cn-hangzhou

ZoneId

string

No

The zone ID of the primary instance. You can call the DescribeRegions operation to query the zone ID.

**Note** Set this value to the zone ID of the original instance.

cn-hangzhou-b

DBInstanceClass

string

No

The instance type of the new instance. For information, see [Primary ApsaraDB RDS instance types](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types).

**Note** By default, the new instance uses the same instance type as the original primary instance.

mysql.n1.micro.1

DBInstanceStorage

integer

No

The storage capacity of the new instance. Unit: GB. You can increase the storage capacity in increments of 5 GB. For more information, see [Primary ApsaraDB RDS instance types](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types).

**Note** By default, the new instance has the same storage capacity as the original primary instance.

1000

DBInstanceDescription

string

No

The instance name. The value must be 2 to 255 characters in length The value can contain letters, digits, underscores (\_), and hyphens (-), and must start with a letter.

**Note** The value cannot start with http:// or https://.

testInstance

DbNames

string

No

The name of the database. If you specify more than one database, the value is in the following format: `Original database name 1,Original database name 2`.

test1,test2

PayType

string

Yes

The billing method of the instance. Valid values:

-   **Postpaid**: pay-as-you-go.
-   **Prepaid**: subscription.
-   **Serverless**: serverless. This value is not supported for instances that run MariaDB. For more information, see [Overview of serverless ApsaraDB RDS for MySQL instances](/help/en/rds/apsaradb-rds-for-mysql/rds-mysql-serverless), [Overview of serverless ApsaraDB RDS for SQL Server instances](/help/en/doc-detail/604344.html), and [Overview of serverless ApsaraDB RDS for PostgreSQL instances](/help/en/doc-detail/607742.html).

Postpaid

InstanceNetworkType

string

No

The network type of the new instance. Valid values:

-   **VPC**
-   **Classic**

**Note** By default, the new instance has the same network type as the original primary instance.

VPC

DBInstanceId

string

Yes

The instance ID.

rm-uf6wjk5xxxxxxxxxx

BackupId

string

No

The backup set ID.

You can call the DescribeBackups operation to query the backup set ID.

**Note** You must specify at least one of the **BackupId** or **RestoreTime** parameters.

902\*\*\*\*

RestoreTime

string

No

The point in time to which you want to restore data. The point in time must fall within the specified backup retention period. Specify the time in the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time must be in UTC.

**Note** You must specify at least one of the **BackupId** and **RestoreTime** parameters.

2011-06-11T16:00:00Z

VPCId

string

No

The ID of the virtual private cloud (VPC).

**Note** Make sure that the VPC belongs to the required region.

vpc-uf6f7l4fg90xxxxxxxxxx

VSwitchId

string

No

The ID of the vSwitch. The vSwitch must belong to the zone that is specified by **ZoneId**.

-   If you set **InstanceNetworkType** to **VPC**, you must also specify this parameter.
-   If you specify the **ZoneSlaveId1** parameter, you must specify the IDs of two vSwitches for this parameter and separate the IDs with a comma (,).

vsw-uf6adz52c2pxxxxxxxxxx

PrivateIpAddress

string

No

The internal IP address of the new instance, which must be within the CIDR block supported by the specified vSwitch. The system automatically assigns an internal IP address based on the values of the **VPCId** and **VSwitchId** parameters.

172.XX.XXX.69

UsedTime

integer

No

The subscription duration of the new instance. Valid values:

-   If you set the **Period** parameter to **Year**, the value of the UsedTime parameter ranges from **1 to 3**.
-   If you set the **Period** parameter to **Month**, the value of the UsedTime parameter ranges from **1 to 9**.

**Note** If you set the PayType parameter to **Prepaid**, you must also specify this parameter.

1

Period

string

No

The unit that is used to calculate the billing cycle of the new instance. This parameter takes effect only when you select the subscription billing method for the new instance. Valid values:

-   **Year**
-   **Month**

**Note** If you set the PayType parameter to **Prepaid**, you must specify this parameter.

Year

Category

string

No

The RDS edition of the instance. Valid values:

-   **Basic**: RDS Basic Edition.
-   **HighAvailability**: RDS High-availability Edition.
-   **AlwaysOn**: RDS Cluster Edition for ApsaraDB RDS for SQL Server.
-   **cluster**: RDS Cluster Edition for ApsaraDB RDS for MySQL.
-   **Finance**: RDS Enterprise Edition. This edition is available only on the China site (aliyun.com).

**Serverless instances**

-   **serverless\_basic**: RDS Basic Edition. This edition is available only for serverless instances that run MySQL and PostgreSQL.
-   **serverless\_standard**: RDS High-availability Edition for ApsaraDB RDS for MySQL
-   **serverless\_ha**: RDS High-availability Edition for ApsaraDB RDS for SQL Server

**Note** You do not need to configure this parameter. The value of this parameter is the same as that of the original instance.

HighAvailability

ZoneIdSlave1

string

No

The zone ID of the secondary instance. If you set the ZoneIdSlave1 parameter and the **ZoneId** parameter to the same value, the single-zone deployment method is used. If you set the ZoneIdSlave1 parameter and the **ZoneId** parameter to different values, the multi-zone deployment method is used.

cn-hangzhou-c

ZoneIdSlave2

string

No

The zone ID of the logger instance. If you set the ZoneIdSlave2 parameter to the same value as the **ZoneId** parameter, the single-zone deployment method is used. If you set the ZoneIdSlave2 parameter to a different value from the **ZoneId** parameter, the multi-zone deployment method is used.

cn-hangzhou-d

DBInstanceStorageType

string

Yes

The storage type of the new instance. Valid values:

-   **general\_essd** (recommend): general Enterprise SSD (ESSD)
-   **local\_ssd**: local SSD
-   **cloud\_ssd**: standard SSD
-   **cloud\_essd**: performance level 1 (PL1) ESSD
-   **cloud\_essd2**: PL2 ESSD
-   **cloud\_essd3**: PL3 ESSD

**Note** Serverless instances support only PL1 ESSDs and general ESSDs.

cloud\_essd

RestoreTable

string

No

Specifies whether to restore only the databases and tables that you specify. The value **1** specifies to restore only the specified databases and tables. If you do not want to restore only the specified databases or tables, you do not need to specify this parameter.

1

TableMeta

string

No

The information about the database and table that you want to restore. The value is in the following format: `[{"type":"db","name":"Name of Database 1","newname":"New name of Database 1","tables":[{"type":"table","name":"Name of Table 1 in Database 1","newname":"New name of Table 1"},{"type":"table","name":"Name of Table 2 in Database 1","newname":"New name of Table 2"}]},{"type":"db","name":"Name of Database 2","newname":"New name of Database 2","tables":[{"type":"table","name":"Name of Table 1 in Database 2","newname":"New name of Table 1"},{"type":"table","name":"Name of Table 2 in Database 2","newname":"New name of Table 2"}]}]`

\[{"type":"db","name":"testdb1","newname":"testdb1\_new","tables":\[{"type":"table","name":"testdb1table1","newname":"testdb1table1\_new"}\]}\]

DedicatedHostGroupId

string

No

The ID of the dedicated cluster.

dhg-7a9xxxxxxxx

BackupType

string

No

The type of backup that is used to restore the data of the original instance. Valid values:

-   **FullBackup**
-   **IncrementalBackup**

FullBackup

DeletionProtection

boolean

No

Specifies whether to enable the release protection feature for the new instance. Valid values:

-   **true**
-   **false** (default)

true

ServerlessConfig

object

No

The specifications for the serverless instance. You must specify this parameter only when you restore data to a new serverless instance.

**Note** This parameter is available only on the China site (aliyun.com).

AutoPause

boolean

No

Specifies whether to enable the automatic start and stop feature for the serverless ApsaraDB RDS for MySQL instance. After the automatic start and stop feature is enabled, if no connections to the instance are established within 10 minutes, the instance is suspended. After a connection is established to the instance, the instance is automatically resumed. Valid values:

-   **true**
-   **false** (default)

**Note**-   This parameter is supported only for serverless ApsaraDB RDS for MySQL instances.
-   This parameter is available only on the China site (aliyun.com).

true

MaxCapacity

double

No

The maximum number of RDS Capacity Units (RCUs). Valid values:

-   Serverless ApsaraDB RDS for MySQL instances: **1 to 8**
-   Serverless ApsaraDB RDS for SQL Server instances: **2 to 8**
-   Serverless ApsaraDB RDS for PostgreSQL instances: **1 to 12**

**Note**-   The value of this parameter must be greater than or equal to the value of **MinCapacity** and can be specified only to an **integer**.
-   This parameter is available only on the China site (aliyun.com).

8

MinCapacity

double

No

The minimum number of RCUs. Valid values:

-   Serverless ApsaraDB RDS for MySQL instances: **0.5 to 8**.
-   Serverless ApsaraDB RDS for SQL Server instances: **2 to 8**. Only integers are supported.
-   Serverless ApsaraDB RDS for PostgreSQL instances: **0.5 to 12**.

**Note**-   The value of this parameter must be less than or equal to the value of **MaxCapacity**.
-   This parameter is available only on the China site (aliyun.com).

0.5

SwitchForce

boolean

No

Specifies whether to enable the forced scaling feature for the serverless ApsaraDB RDS for MySQL instance. In most cases, ApsaraDB RDS automatically scales in or out the RCUs of a serverless instance based on business requirements in real time. In rare cases, the scaling does not take effect in real time. You can enable the forced scaling feature to forcefully scales in or out the RCUs of the instance. Valid values:

-   **true**
-   **false** (default)

**Note**

-   This parameter is supported only for serverless ApsaraDB RDS for MySQL instances.
    
-   This parameter is available only on the China site (aliyun.com).
    

false

BpeEnabled

string

No

A reserved parameter. You do not need to specify this parameter.

false

IoAccelerationEnabled

string

No

A reserved parameter.

None

BurstingEnabled

boolean

No

An invalid parameter. You do not need to specify this parameter.

false

AutoPay

boolean

No

Specifies whether to enable the automatic payment feature for the new instance. Valid values:

1.  **true**: enables the feature. You must make sure that your account balance is sufficient.
2.  **false**: disables the feature. An unpaid order is generated.

**Note** Default value: true. If your account balance is insufficient, you can set the AutoPay parameter to false to generate an unpaid order. Then, you can log on to the ApsaraDB RDS console to complete the payment.

true

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

RequestId

string

The request ID.

1E43AAE0-BEE8-43DA-860D-EAF2AA0724DC

OrderId

string

The ID of the order.

100789370\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "DBInstanceId": "rm-uf6wjk5xxxxxxx",
  "RequestId": "1E43AAE0-BEE8-43DA-860D-EAF2AA0724DC",
  "OrderId": "100789370****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidAvZone.Format

Specified AvZone is not valid.

The value of the AvZone parameter is invalid. Check the value of this parameter.

400

InvalidAvZone.NotSupport

Specified availableArea multiZone does not support in RDS.

\-

400

CannotDecreaseEssdPerfLevel

cannot decrease cloud essd performance level.

The storage type change failed the verification check. The storage type of an RDS instance that runs SQL Server with standard SSDs or ESSDs cannot be changed to local SSDs.

400

CannotDecreaseEssdPerfLevel

invalid cloud essd storage size.

The storage capacity is invalid for ESSDs.

400

InvalidIPAddress.Conflict

IP address conflict.

\-

400

CDDC.AvailableHostsNotEnoughInZone

Not enough available hosts are in the target zone.

\-

400

InvalidInstanceLevel.DiskType

Specified instance level not support request disk type

The current instance type does not support the specified storage type.

400

InvalidRecoveryDbInstance.StorageType

The disk local\_ssd can not clone to cloud disk type

\-

400

InvalidRecoveryDbInstance.StorageSize

The disk space of the new instance cannot be less than that of the current instance

The operation failed. The available storage space of the new RDS instance must be greater than or equal to the total size of data stored in the original RDS instance.

400

InvalidDBInstanceClass.Offline

The specified instance type is no longer provided. Please specify another instance type.

The instance type that you select is no longer available. Select another instance type.

400

InvalidTunnelId

Specified conn tunnel is not valid.

\-

400

ZoneId.NotMatchWithCategory

The number of available zones does not match the database engine or instance edition. Please reset it.

\-

400

UnsupportExtendDisk.NotSupport

Specified DB instance is unsupport extend disk.

Disk expansion is not supported on the specified instance.

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

IncorrectMinorVersion

Current engine minor version does not support operations.

This operation is not supported for the current minor engine version.

403

IncorrectCharacterType

Current DB instance character type does not support this operation.

This operation is not supported for the character type of the instance.

403

CloudDiskEncryptionNotSupport

The encryption key is not allowed for general-purpose instance.

Universal instances do not support cloud disk encryption.

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

2025-03-31

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CloneDBInstance?updateTime=2025-03-31#workbench-doc-change-demo)

2025-02-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CloneDBInstance?updateTime=2025-02-28#workbench-doc-change-demo)

2024-10-30

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CloneDBInstance?updateTime=2024-10-30#workbench-doc-change-demo)

2024-09-26

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CloneDBInstance?updateTime=2024-09-26#workbench-doc-change-demo)

2024-08-20

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CloneDBInstance?updateTime=2024-08-20#workbench-doc-change-demo)

2024-06-07

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CloneDBInstance?updateTime=2024-06-07#workbench-doc-change-demo)

2024-05-10

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CloneDBInstance?updateTime=2024-05-10#workbench-doc-change-demo)

2024-01-04

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CloneDBInstance?updateTime=2024-01-04#workbench-doc-change-demo)

2023-11-21

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CloneDBInstance?updateTime=2023-11-21#workbench-doc-change-demo)

2023-11-17

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CloneDBInstance?updateTime=2023-11-17#workbench-doc-change-demo)

2023-07-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CloneDBInstance?updateTime=2023-07-25#workbench-doc-change-demo)

2023-06-02

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CloneDBInstance?updateTime=2023-06-02#workbench-doc-change-demo)

2022-06-23

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CloneDBInstance?updateTime=2022-06-23#workbench-doc-change-demo)

2022-02-10

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CloneDBInstance?updateTime=2022-02-10#workbench-doc-change-demo)
