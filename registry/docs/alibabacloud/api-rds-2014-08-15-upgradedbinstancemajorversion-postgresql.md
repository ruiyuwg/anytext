Initiates a task to upgrade the major engine version of an ApsaraDB RDS for PostgreSQL instance.

## Operation description

### [](#supported-database-engine)Supported database engine

PostgreSQL

### [](#references)References

Fees are generated if the call is successful. Before you call this operation, read the following documentation and make sure that you fully understand the billing rules, prerequisites, and impacts of this operation.

[Upgrade the major engine version of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-the-major-engine-version-of-an-apsaradb-rds-for-postgresql-instance/)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/UpgradeDBInstanceMajorVersion)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/UpgradeDBInstanceMajorVersion)

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

rds:UpgradeDBInstanceMajorVersion

update

\*DBInstance

`acs:rds:*:{#accountId}:dbinstance/{#DBInstanceId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

DBInstanceClass

string

No

The new instance type of the instance. The new CPU and memory specifications of the instance must be higher than or equal to the original CPU and memory specifications. If you set the **UpgradeMode** parameter to **inPlaceUpgrade**, you **do not need to configure** this parameter.

For example, you can upgrade the instance type from `pg.n2.small.2c` to `pg.n2.medium.2c`. The pg.n2.small.2c instance type provides 1 CPU core and 2 GB of memory. The pg.n2.medium.2c instance type provides 2 CPU cores and 4 GB of memory.

**Note** For more information about the instance types of ApsaraDB RDS for PostgreSQL instances, see [Instance types for primary ApsaraDB RDS for PostgreSQL instances](/help/en/rds/apsaradb-rds-for-postgresql/primary-apsaradb-rds-for-postgresql-instance-types).

pg.n2.medium.2c

DBInstanceStorage

integer

No

The new storage capacity of the instance. Unit: GB If you set the **UpgradeMode** parameter to **inPlaceUpgrade**, you **do not need to configure** this parameter.

Valid values:

-   **PL1 ESSD**: 20 GB to 32,000 GB
-   **PL2 ESSD**: 500 GB to 3,200 GB
-   **PL3 ESSD**: 1,500 GB to 3,200 GB
-   **General ESSD**: 40 GB to 2,000 GB

**Note** If the original instance uses local disks, you can reduce the storage capacity of the instance when you upgrade the major engine version of the instance. For more information about the minimum storage capacity, see [Upgrade the major engine version](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-the-major-engine-version-of-an-apsaradb-rds-for-postgresql-instance/).

20

PayType

string

Yes

The billing method. Set the value to Postpaid.

**Note** For more information about how to change the billing method of an instance after the upgrade, see [Change the billing method of an instance from pay-as-you-go to subscription](/help/en/rds/apsaradb-rds-for-postgresql/switch-an-apsaradb-rds-for-postgresql-instance-from-pay-as-you-go-to-subscription).

Postpaid

InstanceNetworkType

string

No

The network type of the new instance. Set the value to VPC. The major engine version upgrade feature is supported only for instances that reside in VPCs.

If the original instance resides in the classic network, you must migrate the instance to a VPC before you call this operation. For more information about how to view or change the network type of an instance, see [Change the network type of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/change-the-network-type-of-an-apsaradb-rds-for-postgresql-instance).

VPC

SwitchTimeMode

string

No

The point in time at which the workloads are switched over. This parameter is used together with the SwitchOver parameter. This parameter is available only when you set the **SwitchOver** parameter to **true**.

Valid values:

-   **Immediate**: The workloads are immediately switched over.
-   **MaintainTime**: The workloads are switched over within the maintenance window that you specify. You can call the ModifyDBInstanceMaintainTime operation to change the maintenance window of an instance.

Immediate

SwitchTime

string

No

A reserved parameter. You do not need to specify this parameter.

2021-07-10T13:15:12Z

SwitchOver

string

No

Specifies whether to switch your workloads over to the instance that runs the required major engine version based on your business requirements.

Valid values:

-   **true**: The system automatically switches workloads over to the instance. This configuration method is used to perform an upgrade after you verify that the new major engine version is compatible with your workloads.
-   **false**: The system does not automatically switch your workloads over to the instance. In most cases, this configuration method is used to test whether the new major engine version is compatible with your workloads before you perform the upgrade.

**Note**

-   If you set this parameter to true, you must take note of the following items:
    
    -   After the switchover is complete, you cannot roll your workloads back to the original instance. Proceed with caution.
    -   During the switchover, the original instance processes only read requests. We recommend that you perform the switchover during off-peak hours.
    -   If read-only instances are attached to the original instance, you can set this parameter only to false. In this case, the read-only instances that are attached to the original instance cannot be cloned. After the upgrade is complete, you must create read-only instances for the instance.
-   If you set this parameter to false, you must take note of the following items:
    
    -   The data migration does not interrupt your workloads on the original instance.
    -   After data is migrated to the instance that runs the required major engine version, you must update the endpoint configuration in your application. This update requires you to replace the endpoint of the original instance with the endpoint of the instance that runs the required major engine version. For more information about how to view the endpoint of an instance, see [Viewing and change of the internal and public endpoints and port numbers](/help/en/rds/apsaradb-rds-for-postgresql/view-and-change-the-endpoints-and-port-numbers-of-an-apsaradb-rds-for-postgresql-instance).

false

CollectStatMode

string

No

Specify the point in time at which the system collects the statistics of the instance.

-   **Before**: The system collects the statistics of the instance before the switchover to ensure service stability. If the instance contains a large amount of data, the upgrade may require a long period of time.
-   **After**: The system collects the statistics of the instance after the switchover to accelerate the upgrade. After the upgrade, if you access tables for which no statistics are generated, the query plans may be inaccurate, and your database service may be unavailable during peak hours.

**Note** If you set the SwitchOver parameter to false, the value Before specifies that the system collects the statistics of the instance before the instance starts to process read and write requests, and the value After specifies that the system collects the statistics of the instance after the instance starts to process read and write requests.

After

TargetMajorVersion

string

No

The major engine version of the new instance. The value of this parameter must be the major engine version on which an upgrade check is performed.

**Note** You can call the UpgradeDBInstanceMajorVersionPrecheck operation to perform an upgrade check.

13.0

DBInstanceId

string

No

The ID of the original instance.

pgm-bp1gm3yh0ht1\*\*\*\*

VPCId

string

No

The virtual private cloud (VPC) ID of the instance. If you set the **UpgradeMode** parameter to **inPlaceUpgrade**, you **do not need to configure** this parameter.

You can call the DescribeDBInstanceAttribute operation to query the VPC ID of the original instance.

vpc-bp1opxu1zkhn00gzv\*\*\*\*

VSwitchId

string

No

The vSwitch ID of the instance that runs the required major engine version. If you set the **UpgradeMode** parameter to **inPlaceUpgrade**, you **do not need to configure** this parameter.

-   If the original instance runs RDS Basic Edition, configure the vSwitch ID for the instance that runs the required major engine version.
-   If the original instance runs RDS High-availability Edition, configure the vSwitch IDs for the instance that runs the required major engine version and its secondary instance. Separate the vSwitch IDs with commas (,).

**Note** The vSwitches that you specify must reside in the same zone as the original instance. You can call the DescribeVSwitches operation to query the vSwitch IDs.

vsw-bp10aqj6o4lclxdrm\*\*\*\*,vsw-bp10aqj6o4lclxdrm\*\*\*\*

PrivateIpAddress

string

No

The internal IP address of the new instance. You do not need to specify this parameter. The system automatically assigns an internal IP address based on the values of the VPCId and vSwitchId parameters.

172.16.XX.XX

UsedTime

string

No

A reserved parameter. You do not need to specify this parameter.

1

Period

string

No

A reserved parameter. You do not need to specify this parameter.

Month

DBInstanceStorageType

string

No

The storage type of the instance that runs the required major engine version.

Valid values:

-   **cloud\_ssd**: standard SSD
-   **cloud\_essd**: performance level 1 (PL1) Enterprise SSD (ESSD)
-   **cloud\_essd2**: PL2 ESSD
-   **cloud\_essd3**: PL3 ESSD
-   **general\_essd**: general ESSD

The major engine version upgrade feature is developed based on snapshots for cloud disks. You can select a storage type after the upgrade based on the following items:

-   If the original instance uses standard SSDs, set this parameter to cloud\_ssd.
-   If the original instance uses ESSDs, set this parameter to cloud\_essd, cloud\_essd2, cloud\_essd3, or general\_essd.
-   If the original instance uses local SSDs, set this parameter to cloud\_essd, cloud\_essd2, cloud\_essd3, or general\_essd.

cloud\_essd

ZoneId

string

No

The ID of the zone to which the primary instance that runs the required major engine version belongs. If you set the **UpgradeMode** parameter to **inPlaceUpgrade**, you **do not need to configure** this parameter.

You can call the DescribeRegions operation to query zone IDs.

You can select a zone that belongs to the region in which the original instance resides.

cn-hangzhou-h

ZoneIdSlave1

string

No

The ID of the zone to which the secondary instance runs the required major engine version belongs. This parameter is available only when the original instance runs RDS High-availability Edition. If you set the **UpgradeMode** parameter to **inPlaceUpgrade**, you **do not need to configure** this parameter.

You can select a zone that belongs to the region in which the original instance resides.

You can call the DescribeRegions operation to query zone IDs.

cn-hangzhou-h

ZoneIdSlave2

string

No

A reserved parameter. You do not need to specify this parameter.

cn-hangzhou-h

UpgradeMode

string

No

The upgrade mode. This parameter is required when you set the **SwitchOver** parameter to **true**. Valid values:

-   **inPlaceUpgrade**: local upgrade. The major engine version upgrade is performed on the original instance, and no new instance is created. After the upgrade, the original instance runs the required major engine version and inherits the original orders, name, tags, alert rules in CloudMonitor, and backup settings.
-   **blueGreenDeployment**: blue-green deployment. After the major engine version of the instance is upgraded, the original instance is retained and a new instance is created. Fees are generated for the new instance based on the billing method that you specified. However, no fees are generated for the creation of the new instance. After the upgrade is complete, fees are generated for both the original and new instances and the new instance cannot enjoy the discounts provided for the original instance.

inPlaceUpgrade

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

DBInstanceId

string

The ID of the instance.

pgm-bp1gm3yh0ht1\*\*\*\*

RequestId

string

The ID of the request.

006729E5-2A33-5955-89E3-651D3F44EBE6

OrderId

string

The ID of the order.

21128667463\*\*\*\*

TaskId

long

A reserved parameter.

416980000

## Examples

Sample success responses

`JSON`format

```
{
  "DBInstanceId": "pgm-bp1gm3yh0ht1****",
  "RequestId": "006729E5-2A33-5955-89E3-651D3F44EBE6",
  "OrderId": "21128667463****",
  "TaskId": 416980000
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidUpgradePrecheckResult

The upgrade precheck failed. No successful precheck task found in the past 7 days

The upgrade precheck failed. No successful precheck task is found within the last 7 days.

400

TargetEngineVersion.Parameters.NotFound

targetEngineVersion is missing in the request.

The targetEngineVersion is missing in the request.

400

InvalidDBInstanceStorageType

The specified DBInstanceStorageType is invalid.

The specified DBInstanceStorageType parameter is invalid.

400

InvalidInstanceNetworkType

The specified InstanceNetworkType is invalid.

The specified InstanceNetworkType is invalid.

400

InvalidVPCId

The specified VPCId is invalid.

The specified VPCId parameter is invalid.

400

InvalidDedicatedHostGroupId

The specified DedicatedHostGroupId is invalid.

The specified DedicatedHostGroupId parameter is invalid.

400

InvalidPayType

The specified PayType is invalid.

The specified PayType is invalid.

400

InvalidEngineVersion

The specified EngineVersion is invalid.

The specified EngineVersion parameter is invalid.

400

InvalidDBInstanceStorage

The specified DBInstanceStorage is invalid.

The specified DBInstanceStorage parameter is invalid.

400

InvalidSwitchOver

The specified SwitchOver is invalid.

The specified SwitchOver parameter is invalid.

400

PrimaryInstanceWithReadonlyNotSupport

The specified primary instance with the read-only instance does not support the operation.

This operation is not supported for the specified primary instance that has a read-only instance.

400

InvalidSwitchTimeMode

The specified SwitchTimeMode is invalid.

The specified SwitchTimeMode parameter is invalid.

400

InvalidSwitchTime

The specified SwitchTime is invalid.

The specified SwitchTime parameter is invalid.

400

InvalidCollectStats

The specified CollectStats is invalid.

The specified CollectStats parameter is invalid.

400

IncorrectDBInstanceState

The current instance state does not support this operation.

The operation is not supported. The RDS instance is not in a ready state.

400

InvalidDBinstanceClass.ValueNotSupported

The specified parameter DBinstanceClass is invalid.

The specified parameter DBinstanceClass is invalid.

400

InvalidUpgradeMode

The Specified UpgradeMode is not valid.

The specified upgrade mode is invalid.

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

400

ProductInstanceReleased

The instance has been released. Please check before placing the order.

The instance has been released, please verify and place an order.

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

The database instance does not exist.

The name of the RDS instance cannot be found. Check the name of the RDS instance.

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

InvalidUpgradeMode

The Specified Parameter UpgradeMode is not valid.

Parameter UpgradeMode value error

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

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/UpgradeDBInstanceMajorVersion?updateTime=2025-02-14#workbench-doc-change-demo)

2024-10-31

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/UpgradeDBInstanceMajorVersion?updateTime=2024-10-31#workbench-doc-change-demo)

2024-08-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/UpgradeDBInstanceMajorVersion?updateTime=2024-08-27#workbench-doc-change-demo)

2024-08-23

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/UpgradeDBInstanceMajorVersion?updateTime=2024-08-23#workbench-doc-change-demo)

2024-08-23

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/UpgradeDBInstanceMajorVersion?updateTime=2024-08-23#workbench-doc-change-demo)

2024-06-03

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/UpgradeDBInstanceMajorVersion?updateTime=2024-06-03#workbench-doc-change-demo)

2024-05-22

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/UpgradeDBInstanceMajorVersion?updateTime=2024-05-22#workbench-doc-change-demo)
