Creates a read-only instance.

## Operation description

### [](#supported-database-engines)Supported database engines

-   MySQL
-   PostgreSQL
-   SQL Server

### [](#references)References

**Note** Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.

-   [Create a read-only ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/create-a-read-only-apsaradb-rds-for-mysql-instance)
-   [Create a read-only ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/create-a-read-only-apsaradb-rds-for-postgresql-instance)
-   [Create a read-only ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/create-a-read-only-apsaradb-rds-for-sql-server-instance)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/CreateReadOnlyDBInstance)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/CreateReadOnlyDBInstance)

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

rds:CreateReadOnlyDBInstance

create

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

ETnLKlblzczshOTUbOC\*\*\*\*

RegionId

string

Yes

The region ID. The read-only instance and the primary instance must reside in the same region. You can call the DescribeRegions operation to query the most recent region list.

cn-hangzhou

ZoneId

string

Yes

The zone ID. You can call the DescribeRegions operation to query the zone ID.

-   If you use the single-zone deployment method, set this parameter to the ID of one zone. Example: `cn-hangzhou-b`.
-   If you use the multi-zone deployment method, set this parameter to the IDs of multiple zones and separate the IDs with colons (:). Example: `cn-hangzhou-b:cn-hangzhou-c`.
-   The number of zone IDs that you specify must be less than or equal to the number of nodes created for the read-only instance. If you create a read-only instance that runs RDS Basic Edition, only one node is provisioned. If you create a read-only instance that runs RDS High-availability Edition, one primary node and one secondary node are provisioned.

cn-hangzhou-b

DBInstanceId

string

Yes

The primary instance ID. You can call the DescribeDBInstances operation to query the instance ID.

rm-uf6wjk5\*\*\*\*

DBInstanceClass

string

Yes

The instance type of the read-only instance. For more information, see [Read-only instance types](/help/en/rds/product-overview/read-only-apsaradb-rds-instance-types). We recommend that you specify an instance type whose specifications are higher than or equal to the specifications of the instance type of the primary instance. If the specifications of the read-only instance are lower than the specifications of the primary instance, the read-only instance may encounter issues such as high latency and heavy load.

rds.mys2.small

DBInstanceStorage

integer

Yes

The storage capacity of the read-only instance. The storage capacity of the read-only instance must be greater than or equal to that of the primary instance. For more information, see the **Storage capacity** column in [Read-only instance types](/help/en/rds/product-overview/read-only-apsaradb-rds-instance-types). This value must be a multiple of 5. Unit: GB.

20

EngineVersion

string

Yes

The version of the database engine. The read-only instance and the primary instance must run the same major engine version.

-   If the read-only instance runs MySQL, set this parameter to **5.6**, **5.7**, or **8.0**.
-   If the read-only instance runs MySQL, set this parameter to **2017\_ent, 2019\_ent, or 2022\_ent**.
-   If the read-only instance runs PostgreSQL, set this parameter to **10.0, 11.0, 12.0, 13.0, 14.0, or 15.0**.

5.6

PayType

string

Yes

The billing method of the read-only instance. Valid values:

-   **Postpaid**: pay-as-you-go
-   **Prepaid**: subscription

Postpaid

DBInstanceDescription

string

No

The description of the read-only instance. The description must be 2 to 256 characters in length and can contain letters, digits, underscores (\_), and hyphens (-). The value must start with a letter

**Note** The value cannot start with [http:// or https://.](http://https://%E3%80%82)

Test read-only instance

InstanceNetworkType

string

No

The network type of the read-only instance. Valid values:

-   **VPC**
-   **Classic**

Default value: VPC. If you set this parameter to VPC, you must also specify the **VPCId** and **VSwitchId** parameters.

**Note** The network type of the read-only instance can be different from the network type of the primary instance.

Classic

VPCId

string

No

The virtual private cloud (VPC) ID of the read-only instance. If you leave the **InstanceNetworkType** parameter empty or set it to **VPC**, you must also specify this parameter.

**Note**-   If the primary instance uses local disks, the read-only instance and the primary instance can belong to the same VPC or different VPCs.
-   If the primary instance uses cloud disks, the read-only instance and the primary instance must belong to the same VPC.

vpc-uf6f7l4fg90\*\*\*\*

VSwitchId

string

No

The vSwitch ID of the read-only instance. If you leave the **InstanceNetworkType** parameter empty or set it to **VPC**, you must specify the VSwitchId parameter.

vsw-uf6adz52c2p\*\*\*\*

PrivateIpAddress

string

No

The private IP address of the read-only instance. The private IP address must be within the CIDR block that is supported by the specified vSwitch. The system assigns a private IP address to the read-only instance based on the values of the **VPCId** and **VSwitchId** parameters.

172.16.XX.XX

ResourceGroupId

string

No

The ID of the resource group.

rg-acfmy\*\*\*\*

Category

string

No

The RDS edition of the instance. Valid values:

-   **Basic**: RDS Basic Edition
-   **HighAvailability** (default): RDS High-availability Edition
-   **AlwaysOn**: RDS Cluster Edition

**Note** The read-only instances of the primary instance that run PostgreSQL and use cloud disks run RDS Basic Edition. Therefore, set this parameter to **Basic**.

HighAvailability

DBInstanceStorageType

string

No

The storage type of the instance. Valid values:

-   **local\_ssd**: local SSDs
-   **cloud\_ssd**: standard SSDs
-   **cloud\_essd**: enhanced SSDs (ESSDs) of performance level 1 (PL1)
-   **cloud\_essd2**: ESSDs of PL2
-   **cloud\_essd3**: ESSDs of PL3

**Note**-   If the primary instance runs MySQL with local disks, you must set this parameter to **local\_ssd**. If the primary instance runs MySQL with cloud disks, you must set this parameter to cloud\_ssd, cloud\_essd, cloud\_essd2, or cloud\_essd3.
-   If the primary instance runs SQL Server, you must set this parameter to cloud\_ssd, cloud\_essd, cloud\_essd2, or cloud\_essd3.

local\_ssd

DedicatedHostGroupId

string

No

The ID of the dedicated cluster to which the read-only instance belongs. This parameter is valid when you create the read-only instance in a dedicated cluster.

dhg-4n\*\*\*\*

TargetDedicatedHostIdForMaster

string

No

The ID of the host on which the primary instance resides. This parameter is valid when you create the read-only instance in a dedicated cluster.

i-bp\*\*\*\*

GdnInstanceName

string

No

A reserved parameter.

None

TddlBizType

string

No

A reserved parameter.

None

TddlRegionConfig

string

No

A reserved parameter.

None

InstructionSetArch

string

No

A reserved parameter.

None

UsedTime

string

No

The subscription duration of the read-only instance. Valid values:

-   If you set the **Period** parameter to **Year**, the value of the **UsedTime** parameter ranges from **1** to **5**.
-   If you set the **Period** parameter to **Month**, the value of the **UsedTime** parameter ranges from **1** to **9**.

**Note** If you set the **PayType** parameter to **Prepaid**, you must specify the UsedTime parameter.

1

Period

string

No

The renewal cycle of the read-only instance. Valid values:

-   **Year**
-   **Month**

Month

AutoRenew

string

No

Specifies whether to enable the auto-renewal feature for the read-only instance. If you set the PayType parameter to Prepaid, you must also specify this parameter. Valid values:

-   **true**: enables the feature.
-   **false**: disables the feature.

**Note**-   If you set the Period parameter to Month, the auto-renewal cycle is one month.
-   If you set the Period parameter to Year, the auto-renewal cycle is one year.

true

DeletionProtection

boolean

No

Specifies whether to enable the release protection feature for the read-only instance. Valid values:

-   **true**
-   **false** (default)

**Note** You can enable the release protection feature for the read-only instance only when you set the **PayType** parameter to **Postpaid**.

true

Port

string

No

The port that can be initialized when you create a read-only ApsaraDB RDS for MySQL instance.

Valid values: 1000 to 65534.

3306

BpeEnabled

string

No

A reserved parameter. You do not need to specify this parameter.

false

BurstingEnabled

boolean

No

An invalid parameter. You do not need to specify this parameter.

false

AutoPay

boolean

No

Specifies whether to automatically complete the payment. Valid values:

1.  **true**: automatically completes the payment. Make sure that your account balance is sufficient.
2.  **false**: does not automatically complete the payment. An unpaid order is generated.

**Note** Default value: true. If your account balance is insufficient, you can set the AutoPay parameter to false to generate an unpaid order. Then, you can log on to the ApsaraDB RDS console to complete the payment.

false

AutoCreateProxy

boolean

No

Specifies whether to automatically create database proxies. Valid values:

-   **true**: automatically creates database proxies. By default, general-purpose database proxies are created.
-   **false**: does not automatically create database proxies.

false

IoAccelerationEnabled

string

No

A reserved parameter.

None

AutoUseCoupon

boolean

No

Specifies whether to use a coupon. Valid values:

-   **true**: uses a coupon.
-   **false** (default): does not use a coupon.

true

PromotionCode

string

No

The coupon code.

717446260784

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

ConnectionString

string

The internal endpoint that is used to connect to the read-only instance.

rr-\*\*\*\*.mysql.rds.aliyuncs.com

DBInstanceId

string

The ID of the read-only instance.

rr-uf6wjk5\*\*\*\*

OrderId

string

The ID of the order.

10078937\*\*\*\*

Port

string

The internal port number that is used to connect to the read-only instance.

3306

RequestId

string

The ID of the request.

1E43AAE0-BEE8-43DA-860D-EAF2AA0724DC

## Examples

Sample success responses

`JSON`format

```
{
  "ConnectionString": "rr-****.mysql.rds.aliyuncs.com",
  "DBInstanceId": "rr-uf6wjk5****",
  "OrderId": "10078937****",
  "Port": 3306,
  "RequestId": "1E43AAE0-BEE8-43DA-860D-EAF2AA0724DC"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidEngineVersion.Malformed

The specified parameter EngineVersion is not valid.

\-

400

InvalidNetworkTypeClassicWhenCloudStorage

The Specified InstanceNetworkType value Classic is not valid when choose cloud storage type.

When selecting a cloud storage type, specifying a InstanceNetworkType value of Classic is not valid.

400

InvalidSecurityIPList.Malformed

The specified parameter SecurityIPList is not valid.

\-

400

InvalidSecurityIPList.Duplicate

The Security IP address is not in the available range or occupied.

The IP address is invalid. Specify a valid IP address.

400

InvalidParameter

The specified parameter dbInstanceId is not valid.

\-

400

OperationDenied

VPC IP is in use, please check.

The operation failed. The VPC IP address has been used.

400

InvalidZoneId.NotSupported

The Specified vpc Zone not supported.

VPC-hosted RDS instances cannot be created in the zone. Specify a different zone.

400

InvalidAvZone.NotSupport

Specified availableArea multiZone does not support in RDS.

\-

400

CDDC.AvailableHostsNotEnoughInZone

Not enough available hosts are in the target zone.

\-

400

InvalidReadEngineVersionPattern

The engine versions of the primary instance and the read-only instance do not match.

\-

400

InvalidDBInstanceClass.Offline

The specified instance type is no longer provided. Please specify another instance type.

The instance type that you select is no longer available. Select another instance type.

400

SYSTEM.CONCURRENT\_OPERATE

Concurrent operation is detected.

Concurrent operations are run in the system.

400

Price.PricingPlanResultNotFound

Pricing plan price result not found.

Pricing plan price result not found.

400

InvalidDBInstanceName.Duplicate

Specified DB instance name already exists in the Aliyun RDS.

The operation failed. The instance name already exists. Specify a different name and try again.

400

InvalidInstanceLevel.DiskType

Specified instance level not support request disk type

The current instance type does not support the specified storage type.

400

InvalidRequestId

The request is copy, check your token.

The request is copy, check your token.

400

InvalidParam.InstanceNetworkType

Creation of classic network instances is not supported.

Classic network offline, does not support the creation of classic network instances!

400

Order.ComboInstanceNotAllowOperate

A package instance is not allowed to operate independently.

A package instance is not allowed to operate independently.

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

OperationDenied.PrimaryDBInstanceStatus

The operation is not permitted due to status of primary instance.

The operation failed. The RDS instance is deployed in a dedicated cluster and is not running.

403

InvalidReadStorageTypePattern

The storage type of the primary instance and the read-only instance do not match.

\-

403

IncorrectCharacterType

Current DB instance character type does not support this operation.

This operation is not supported for the character type of the instance.

403

InvalidMultiparamZoneInfoList

Zoneinfo list is invaild.

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

IncorrectDBInstanceConnType

Current DB instance conn type does not support this operation.

The operation is not supported for the connection type of the RDS instance.

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

CannotDecreaseEssdPerfLevel

cannot decrease cloud essd performance level.

The storage type change failed the verification check. The storage type of an RDS instance that runs SQL Server with standard SSDs or ESSDs cannot be changed to local SSDs.

500

InvalidEssdStorageSize

invalid cloud essd storage size.

The storage size of cloud disks is invalid. Check the storage size.

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

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateReadOnlyDBInstance?updateTime=2025-03-31#workbench-doc-change-demo)

2024-11-19

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateReadOnlyDBInstance?updateTime=2024-11-19#workbench-doc-change-demo)

2024-11-14

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateReadOnlyDBInstance?updateTime=2024-11-14#workbench-doc-change-demo)

2024-11-12

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateReadOnlyDBInstance?updateTime=2024-11-12#workbench-doc-change-demo)

2024-11-01

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateReadOnlyDBInstance?updateTime=2024-11-01#workbench-doc-change-demo)

2024-08-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateReadOnlyDBInstance?updateTime=2024-08-27#workbench-doc-change-demo)

2024-08-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateReadOnlyDBInstance?updateTime=2024-08-13#workbench-doc-change-demo)

2024-07-23

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateReadOnlyDBInstance?updateTime=2024-07-23#workbench-doc-change-demo)

2024-05-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateReadOnlyDBInstance?updateTime=2024-05-28#workbench-doc-change-demo)

2024-05-23

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateReadOnlyDBInstance?updateTime=2024-05-23#workbench-doc-change-demo)

2024-05-22

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateReadOnlyDBInstance?updateTime=2024-05-22#workbench-doc-change-demo)

2024-04-18

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateReadOnlyDBInstance?updateTime=2024-04-18#workbench-doc-change-demo)

2024-01-04

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateReadOnlyDBInstance?updateTime=2024-01-04#workbench-doc-change-demo)

2023-11-23

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateReadOnlyDBInstance?updateTime=2023-11-23#workbench-doc-change-demo)

2023-11-21

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateReadOnlyDBInstance?updateTime=2023-11-21#workbench-doc-change-demo)

2023-11-07

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateReadOnlyDBInstance?updateTime=2023-11-07#workbench-doc-change-demo)

2023-09-11

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateReadOnlyDBInstance?updateTime=2023-09-11#workbench-doc-change-demo)

2023-08-10

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateReadOnlyDBInstance?updateTime=2023-08-10#workbench-doc-change-demo)

2023-06-02

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateReadOnlyDBInstance?updateTime=2023-06-02#workbench-doc-change-demo)

2023-04-20

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateReadOnlyDBInstance?updateTime=2023-04-20#workbench-doc-change-demo)
