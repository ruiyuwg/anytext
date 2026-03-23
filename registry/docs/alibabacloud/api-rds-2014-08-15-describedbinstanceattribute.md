Queries the details of an instance.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

-   RDS MySQL
-   RDS PostgreSQL
-   RDS SQL Server
-   RDS MariaDB

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeDBInstanceAttribute)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeDBInstanceAttribute)

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

rds:DescribeDBInstanceAttribute

get

\*DBInstance

`acs:rds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}`

none

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

**Notice** Do not query the details of multiple instances at a time by using multiple instance IDs. Otherwise, the query times out and fails.

rm-uf6wjk5\*\*\*\*\*

Expired

string

No

Specifies whether the instance expires. Valid values:

-   **True**
-   **False**

False

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

Items

array<object>

The details of instances.

DBInstanceAttribute

object

The details of the instance.

AccountMaxQuantity

integer

The maximum number of accounts that can be created on the instance.

50

AdvancedFeatures

string

The advanced features that are enabled for the instance. If multiple advanced features are enabled, the advanced features are separated by commas (,). This parameter is available only to instances that run **SQL Server**. Valid values:

-   **LinkedServer**
-   **DistributeTransaction**

LinkedServer

AutoUpgradeMinorVersion

string

The method that is used to update the minor engine version of the instance. Valid values:

-   **Auto**: automatic update.
-   **Manual**: manual update. The minor engine version of the instance is forcefully updated only when the in-use minor engine version is phased out.

Auto

AvailabilityValue

string

The availability status of the instance in percentage.

100.0%

BabelfishConfig

object

The configuration of the Babelfish feature for the ApsaraDB RDS for PostgreSQL instance.

**Note** This parameter applies only to ApsaraDB RDS for PostgreSQL instances for which Babelfish is enabled. For more information, see [Introduction to Babelfish](/help/en/doc-detail/428613.html).

BabelfishEnabled

string

Indicates whether Babelfish is enabled.

**Note** If Babelfish is enabled when you purchase an ApsaraDB RDS for PostgreSQL instance, this parameter is fixed as **true**.

true

MigrationMode

string

The migration mode for Babelfish. Valid values:

-   **single-db**
-   **multi-db**

**Note** For more information about migration modes for Babelfish, see [Migration modes](/help/en/doc-detail/428613.html).

single-db

BpeEnabled

string

A deprecated parameter. You do not need to specify this parameter.

false

BurstingEnabled

boolean

Indicates whether the I/O burst feature is enabled for Premium ESSDs. Valid values:

-   true
-   false

**Note** For more information about the I/O burst feature, see [What are Premium ESSDs?](/help/en/rds/support/what-is-a-universal-cloud-disk)

false

CanTempUpgrade

boolean

Indicates whether the conditions for a temporary upgrade are met.

**Note** Pay-as-you-go instances do not support temporary upgrades.

true

Category

string

The RDS edition. Valid values:

-   **Basic**: RDS Basic Edition
-   **HighAvailability**: RDS High-availability Edition
-   **cluster**: RDS Cluster Edition for ApsaraDB RDS for MySQL
-   **AlwaysOn**: RDS Cluster Edition for ApsaraDB RDS for SQL Server
-   **Finance**: RDS Enterprise Edition
-   **Serverless\_basic**: RDS Basic Edition for serverless instances

Basic

ColdDataEnabled

boolean

Indicates whether the data archiving feature is enabled for Premium ESSDs. Valid values:

-   **true**
-   **false**

For more information about the data archiving feature, see [Use the data archiving feature](/help/en/rds/apsaradb-rds-for-mysql/rds-mysql-data-archiving-function).

None

Collation

string

The character set collation of the instance.

Chinese\_PRC\_CI\_AS

ConnectionMode

string

The connection mode of the instance. Valid values:

-   **Standard**: standard mode
-   **Safe**: database proxy mode

Standard

ConnectionString

string

The internal endpoint.

rm-uf6wjk5\*\*\*\*\*.mysql.rds.aliyuncs.com

ConsoleVersion

string

The type of the proxy that is used by the instance. Valid values:

-   **1**: shared database proxy
-   **2**: dedicated database proxy

**Note** We recommend that you use the **ProxyType** parameter instead of this parameter.

2

CreationTime

string

The creation time. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

2011-05-30T12:11:04Z

CurrentKernelVersion

string

The minor engine version.

rds\_20181010

DBClusterNodes

array<object>

The information about the node in the cluster.

DBClusterNode

object

The details of the node.

ClassCode

string

The node specification.

mysql.n2.medium.xc

ClassType

string

The node type. Default value: true. Valid values:

-   d: dedicated node type
-   x: general-purpose node type

x

Cpu

string

The number of CPU cores of the node.

4

Memory

string

The memory capacity of the node. Unit: MB.

4096

NodeId

string

The node ID.

rn-\*\*\*\*

NodeRegionId

string

The region ID.

cn-beijing

NodeRole

string

The role of the node. Valid values:

-   **primary**
-   **secondary**

primary

NodeZoneId

string

The zone ID.

cn-beijing-h

Status

string

The node status. Valid values:

-   active
-   creating
-   deleting
-   classchanging
-   restarting

active

DBInstanceCPU

string

The number of CPU cores.

2

DBInstanceClass

string

The instance type of the instance. For more information, see [Primary ApsaraDB RDS instance types](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types).

rds.mys2.small

DBInstanceClassType

string

The instance family. Valid values:

-   **s**: shared instance family
-   **x**: general-purpose instance family
-   **d**: dedicated instance family
-   **h**: dedicated host instance family

s

DBInstanceDescription

string

The instance description.

The number of cores that are configured for the instance.

DBInstanceDiskUsed

string

The disk usage of the instance. Unit: byte.

300

DBInstanceId

string

The instance ID.

rm-uf6wjk5\*\*\*\*\*

DBInstanceMemory

long

The memory capacity of the instance. Unit: MB.

4096

DBInstanceNetType

string

The type of the network over which the instance is connected. Valid values:

-   **Internet**
-   **Intranet**

Internet

DBInstanceStatus

string

The instance status. For more information, see [Instance statuses](/help/en/rds/developer-reference/instance-state-table).

Running

DBInstanceStorage

integer

The storage capacity of the instance. Unit: GB.

10

DBInstanceStorageType

string

The storage type of the instance. Valid values:

-   **local\_ssd** and **ephemeral\_ssd**: Premium Local SSD
-   **cloud\_ssd**: standard SSD
-   **cloud\_essd**: ESSD
-   **cloud\_essd**: Premium ESSD

local\_ssd

DBInstanceType

string

The type of the instance. Valid values:

-   **Primary**: primary instance
-   **Readonly**: read-only instance
-   **Guard**: disaster recovery instance
-   **Temp**: temporary instance

Primary

DBMaxQuantity

integer

The maximum number of databases that can be created on the instance.

200

DedicatedHostGroupId

string

The ID of the dedicated cluster to which the instance belongs.

dhg-7a9\*\*\*\*\*

DeletionProtection

boolean

Indicates whether the release protection feature is enabled. Valid values:

-   **true**
-   **false**

true

DisasterRecoveryInfo

string

Disaster Recovery Instance Information

{"replicatorAccount": "\*\*\*\*\*\*","sourcePort":\*\*\*\*\*\*,"sourceAddress": "pgm-2ze\*\*\*\*\*\*","sourceCategory": "aliyunRDS","sourceInstanceRegionId": "cn-\*\*\*\*\*\*","replicatorPassword": "\*\*\*\*\*\*","sourceInstanceName": "pgm-2ze\*\*\*\*\*\*"}

DisasterRecoveryInstances

string

All disaster recovery instances of the current instance.

\[{"regionId":"cn-\*\*\*\*\*\*","insName":"pgm-2ze\*\*\*\*\*\*"},{"regionId":"cn-\*\*\*\*\*\*","insName":"pgm-2ze\*\*\*\*\*\*"}\]

Engine

string

The database engine of the instance. Valid values:

-   **MySQL**
-   **PostgreSQL**
-   **SQLServer**
-   **MariaDB**

MySQL

EngineVersion

string

The database engine version.

5.5

ExpireTime

string

The expiration time of the instance. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

**Note** Pay-as-you-go instances never expire.

2019-03-27T16:00:00Z

Extra

object

The extended information about the instance.

AccountSecurityPolicy

string

The group policy of the instance account.

-   MaximumPasswordAge: maximum use time
-   MinimumPasswordAge: minimum use time

{"MaximumPasswordAge": 42,"MinimumPasswordAge": 30}

DBInstanceIds

array

The instance IDs.

DBInstanceId

string

The instance ID.

rm-uf6wjk5\*\*\*\*\*

RecoveryModel

string

The recovery model. Valid values: Simple and Full.

Simple

GeneralGroupName

string

The name of the dedicated cluster to which the instance belongs. This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.

TestGroup

GuardDBInstanceId

string

The ID of the disaster recovery instance that is attached to the primary instance.

rm-uf64zsu\*\*\*\*\*

IPType

string

The IP address type. Only **IPv4 addresses** are supported.

IPv4

IncrementSourceDBInstanceId

string

The ID of the instance from which incremental data comes. The incremental data of a disaster recovery instance comes from its primary instance. The incremental data of a read-only instance comes from its primary instance. If this parameter is not returned, the instance is a primary instance.

rm-uf6wjk5\*\*\*\*\*

InstanceNetworkType

string

The network type of the instance. Valid values:

-   **Classic**
-   **VPC**

Classic

InstructionSetArch

string

The architecture type of the instance. Valid values:

-   **x86**
-   **arm**

x86

IoAccelerationEnabled

string

Indicates whether Buffer Pool Extension (BPE) is enabled for Premium ESSDs.

-   **1**: enabled
-   **0**: disabled

**Note** For more information, see [Buffer Pool Extension(BPE)](/help/en/rds/product-overview/buffer-pool-extension-bpe).

None

LatestKernelVersion

string

The latest minor engine version that is supported by the instance.

rds\_20201031

LockMode

string

The lock mode of the instance. Valid values:

-   **Unlock**: The instance is not locked.
-   **ManualLock**: The instance is manually locked.
-   **LockByExpiration**: The instance is automatically locked due to instance expiration.
-   **LockByRestoration**: The instance is automatically locked due to instance restoration.
-   **LockByDiskQuota**: The instance is automatically locked due to exhausted storage space.
-   **LockReadInstanceByDiskQuota**: The instance is a read-only instance and is automatically locked due to exhausted storage.

Unlock

LockReason

string

The reason why the instance was locked.

instance\_expired

MaintainTime

string

The maintenance window of the instance. The time is displayed in UTC. The maintenance window displayed in the ApsaraDB RDS console is equal to the value of this parameter plus 8 hours.

00:00Z-02:00Z

MasterInstanceId

string

The primary instance ID.

**Note** If this parameter is not returned, the instance is the primary instance.

rm-uf6wjk5\*\*\*\*\*

MasterZone

string

The zone ID of the primary instance.

5454284

MaxConnections

integer

The maximum number of concurrent connections.

60

MaxIOMBPS

integer

The maximum I/O throughput. Unit: MB/s.

0MB/s

MaxIOPS

integer

The maximum number of I/O requests per second.

150

MultipleTempUpgrade

boolean

Indicates whether auto scaling is being performed on the instance. If the value **true** is returned, auto scaling is being performed on the instance. If no value is returned, auto scaling is not being performed on the instance.

true

PGBouncerEnabled

string

Indicates whether PgBouncer is enabled.

**Note** This parameter is returned only for RDS instances that run PostgreSQL. If PgBouncer is enabled, the return value is **true**.

true

PayType

string

The billing method of the instance. Valid values:

-   **Postpaid**: pay-as-you-go
-   **Prepaid**: subscription
-   **SERVERLESS**

Postpaid

Port

string

The port that is used to connect to the instance over an internal network.

3306

ProxyType

integer

The type of the proxy that is supported by the instance. Valid values:

-   **0**: The instance does not support database proxies.
-   **1**: The instance supports shared proxies, with which the instance runs in multi-tenant mode.
-   **2**: The instance supports dedicated proxies, with which the instance runs in single-tenant mode.

1

ReadOnlyDBInstanceIds

array<object>

The IDs of the read-only instances that are attached to the primary instance.

ReadOnlyDBInstanceId

object

The data returned.

DBInstanceId

string

The read-only instance ID.

rm-bp\*\*\*\*\*

ReadonlyInstanceSQLDelayedTime

string

The latency at which the system replicates data to read-only instances. The system replicates data from the primary instance to the read-only instances at the latency that is specified by the **ReadonlyInstanceSQLDelayedTime** parameter. Unit: seconds.

30

RegionId

string

The region ID.

cn-hangzhou

ResourceGroupId

string

The resource group ID.

rg-acfmy\*\*\*\*\*

SecurityIPList

string

The IP addresses in the IP address whitelist.

192.168.XX.XX/24

SecurityIPMode

string

The whitelist mode. Valid values:

-   **normal**: standard whitelist mode
-   **safety**: enhanced whitelist mode

normal

ServerlessConfig

object

The settings of the serverless instance.

AutoPause

boolean

Indicates whether the automatic start and stop feature is enabled for the serverless instance. Valid values:

-   **true**
-   **false** (default)

**Note** After the automatic start and stop feature is enabled, if no connections to the instance are established within 10 minutes, the instance is suspended. After a connection to the instance is established, the instance is automatically resumed.

true

ScaleMax

double

The maximum number of RCUs.

8

ScaleMin

double

The minimum number of RDS Capacity Units (RCUs).

0.5

SwitchForce

boolean

Indicates whether the forced scaling feature is enabled for the serverless instance. Valid values:

-   **true**
-   **false** (default)

**Note** In most cases, ApsaraDB RDS automatically scales in or out the RCUs of a serverless instance based on business requirements in real time. In rare cases, the scaling does not take effect in real time. You can enable the forced scaling feature to forcefully scales in or out the RCUs of the instance.

false

SlaveZones

array<object>

The zone IDs of the secondary instances.

SlaveZone

object

The following information is returned.

ZoneId

string

The zone ID.

cn-hangzhou-a

SuperPermissionMode

string

Indicates whether the instance supports superuser accounts, such as the system administrator (SA) account, Active Directory (AD) account, and host account. Valid values:

-   **Enable**
-   **Disabled**

Disabled

TempDBInstanceId

string

The ID of the temporary instance that is attached to the primary instance.

rm-uf64zsu\*\*\*\*\*

TempUpgradeTimeEnd

string

The end time of the temporary upgrade of the instance.

**Note** This parameter is unavailable for pay-as-you-go instances.

2024-05-30 00:00:00

TempUpgradeTimeStart

string

The start time of the temporary upgrade of the instance.

**Note** This parameter is unavailable for pay-as-you-go instances.

2024-05-29 00:00:00

TimeZone

string

The time zone.

Central Standard Time

Tips

string

The information about the exception that is detected on the instance. This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.

The IP addresses in the IP address whitelist.

TipsLevel

integer

The severity of the exception that is detected on the instance. This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition. Valid values:

-   **1**: The instance is normal.
-   **2**: The specifications of the read-only instances do not match the specifications of the primary instance. You must adjust the specifications of these instances based on your business requirements.

1

VSwitchId

string

The vSwitch ID.

vsw-\*\*\*\*\*

VpcCloudInstanceId

string

The ID of the VPC. This parameter is returned only when the instance resides in a VPC.

vpc-23rsxdf\*\*\*\*\*

VpcId

string

The VPC ID.

vpc-\*\*\*\*\*

ZoneId

string

The zone ID.

cn-hangzhou-a

kindCode

string

An internal parameter. You do not need to specify this parameter.

The architecture type of the instance. Valid values: - \*\*x86\*\* - \*\*arm\*\*

OptimizedWritesInfo

string

The OptimizedWritesInfo parameter contains the following fields:

-   **optimized\_writes**: indicates whether the 16K atomic write feature is enabled for the current instance.
-   **init\_optimized\_writes**: indicates whether the 16K atomic write feature can be enabled for the current instance. If init\_optimized\_writes is set to false, the 16K atomic write switch is not displayed for the instance in the console.

{"optimized\_writes":true,"init\_optimized\_writes":true}

CompressionMode

string

The storage compression mode of the instance.

on, off

SupportCompression

boolean

Indicates whether storage compression can be enabled for the instance.

true, false

CompressionRatio

string

The storage compression ratio.

1.25

BlueGreenDeploymentName

string

This is a reserved parameter and is not in use.

None

GreenInstanceName

string

This is a reserved parameter and is not in use.

None

BlueInstanceName

string

This is a reserved parameter and is not in use.

None

ComputeBurstEnabled

boolean

This is a reserved parameter and is not in use.

None

ReadOnlyStatus

string

This is a reserved parameter and is not in use.

None

RequestId

string

The ID of the request.

1AD222E9-E606-4A42-BF6D-8A4442913CEF

## Examples

Sample success responses

`JSON`format

```
{
  "Items": {
    "DBInstanceAttribute": [
      {
        "AccountMaxQuantity": 50,
        "AdvancedFeatures": "LinkedServer",
        "AutoUpgradeMinorVersion": "Auto",
        "AvailabilityValue": "100.0%",
        "BabelfishConfig": {
          "BabelfishEnabled": true,
          "MigrationMode": "single-db"
        },
        "BpeEnabled": false,
        "BurstingEnabled": false,
        "CanTempUpgrade": true,
        "Category": "Basic",
        "ColdDataEnabled": true,
        "Collation": "Chinese_PRC_CI_AS",
        "ConnectionMode": "Standard",
        "ConnectionString": "rm-uf6wjk5*****.mysql.rds.aliyuncs.com",
        "ConsoleVersion": 2,
        "CreationTime": "2011-05-30T12:11:04Z",
        "CurrentKernelVersion": "rds_20181010",
        "DBClusterNodes": {
          "DBClusterNode": [
            {
              "ClassCode": "mysql.n2.medium.xc",
              "ClassType": "x",
              "Cpu": 4,
              "Memory": 4096,
              "NodeId": "rn-****",
              "NodeRegionId": "cn-beijing",
              "NodeRole": "primary",
              "NodeZoneId": "cn-beijing-h",
              "Status": "active"
            }
          ]
        },
        "DBInstanceCPU": 2,
        "DBInstanceClass": "rds.mys2.small",
        "DBInstanceClassType": "s",
        "DBInstanceDescription": "The number of cores that are configured for the instance.\n",
        "DBInstanceDiskUsed": 300,
        "DBInstanceId": "rm-uf6wjk5*****",
        "DBInstanceMemory": 4096,
        "DBInstanceNetType": "Internet",
        "DBInstanceStatus": "Running",
        "DBInstanceStorage": 10,
        "DBInstanceStorageType": "local_ssd",
        "DBInstanceType": "Primary",
        "DBMaxQuantity": 200,
        "DedicatedHostGroupId": "dhg-7a9*****",
        "DeletionProtection": true,
        "DisasterRecoveryInfo": "{\"replicatorAccount\": \"******\",\"sourcePort\":******,\"sourceAddress\": \"pgm-2ze******\",\"sourceCategory\": \"aliyunRDS\",\"sourceInstanceRegionId\": \"cn-******\",\"replicatorPassword\": \"******\",\"sourceInstanceName\": \"pgm-2ze******\"}",
        "DisasterRecoveryInstances": [
          {
            "regionId": "cn-******",
            "insName": "pgm-2ze******"
          },
          {
            "regionId": "cn-******",
            "insName": "pgm-2ze******"
          }
        ],
        "Engine": "MySQL",
        "EngineVersion": 5.5,
        "ExpireTime": "2019-03-27T16:00:00Z",
        "Extra": {
          "AccountSecurityPolicy": {
            "MaximumPasswordAge": 42,
            "MinimumPasswordAge": 30
          },
          "DBInstanceIds": {
            "DBInstanceId": [
              "rm-uf6wjk5*****"
            ]
          },
          "RecoveryModel": "Simple"
        },
        "GeneralGroupName": "TestGroup",
        "GuardDBInstanceId": "rm-uf64zsu*****",
        "IPType": "IPv4",
        "IncrementSourceDBInstanceId": "rm-uf6wjk5*****",
        "InstanceNetworkType": "Classic",
        "InstructionSetArch": "x86",
        "IoAccelerationEnabled": "None",
        "LatestKernelVersion": "rds_20201031",
        "LockMode": "Unlock",
        "LockReason": "instance_expired",
        "MaintainTime": "00:00Z-02:00Z",
        "MasterInstanceId": "rm-uf6wjk5*****",
        "MasterZone": 5454284,
        "MaxConnections": 60,
        "MaxIOMBPS": 0,
        "MaxIOPS": 150,
        "MultipleTempUpgrade": true,
        "PGBouncerEnabled": true,
        "PayType": "Postpaid",
        "Port": 3306,
        "ProxyType": 1,
        "ReadOnlyDBInstanceIds": {
          "ReadOnlyDBInstanceId": [
            {
              "DBInstanceId": "rm-bp*****"
            }
          ]
        },
        "ReadonlyInstanceSQLDelayedTime": 30,
        "RegionId": "cn-hangzhou ",
        "ResourceGroupId": "rg-acfmy*****",
        "SecurityIPList": "192.168.XX.XX/24",
        "SecurityIPMode": "normal",
        "ServerlessConfig": {
          "AutoPause": true,
          "ScaleMax": 8,
          "ScaleMin": 0.5,
          "SwitchForce": false
        },
        "SlaveZones": {
          "SlaveZone": [
            {
              "ZoneId": "cn-hangzhou-a"
            }
          ]
        },
        "SuperPermissionMode": "Disabled",
        "TempDBInstanceId": "rm-uf64zsu*****",
        "TempUpgradeTimeEnd": "2024-05-30 00:00:00",
        "TempUpgradeTimeStart": "2024-05-29 00:00:00",
        "TimeZone": "Central Standard Time",
        "Tips": "The IP addresses in the IP address whitelist.\n",
        "TipsLevel": 1,
        "VSwitchId": "vsw-*****",
        "VpcCloudInstanceId": "vpc-23rsxdf*****",
        "VpcId": "vpc-*****",
        "ZoneId": "cn-hangzhou-a",
        "kindCode": "The architecture type of the instance. Valid values:\n\n- **x86**\n- **arm**",
        "OptimizedWritesInfo": {
          "optimized_writes": true,
          "init_optimized_writes": true
        },
        "CompressionMode": "on, off",
        "SupportCompression": true,
        "CompressionRatio": 1.25,
        "BlueGreenDeploymentName": "None",
        "GreenInstanceName": "None",
        "BlueInstanceName": "None",
        "ComputeBurstEnabled": true,
        "ReadOnlyStatus": "None"
      }
    ]
  },
  "RequestId": "1AD222E9-E606-4A42-BF6D-8A4442913CEF"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

ConnectTimeoutRetryLater

Connect timeout retry later.

The connection timed out. Please try again later.

400

TimeoutRetryLater

Timeout, please retry later.

\-

400

DataNotExist

Data not exist.

No data is available.

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

InvalidDBInstanceName.NotFound

The specified DB instance name does not exist.

The instance name does not exist.

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

2025-05-07

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstanceAttribute?updateTime=2025-05-07#workbench-doc-change-demo)

2025-04-09

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstanceAttribute?updateTime=2025-04-09#workbench-doc-change-demo)

2025-02-18

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstanceAttribute?updateTime=2025-02-18#workbench-doc-change-demo)

2024-12-24

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstanceAttribute?updateTime=2024-12-24#workbench-doc-change-demo)

2024-12-03

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstanceAttribute?updateTime=2024-12-03#workbench-doc-change-demo)

2024-11-19

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstanceAttribute?updateTime=2024-11-19#workbench-doc-change-demo)

2024-10-15

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstanceAttribute?updateTime=2024-10-15#workbench-doc-change-demo)

2024-08-30

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstanceAttribute?updateTime=2024-08-30#workbench-doc-change-demo)

2024-06-27

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstanceAttribute?updateTime=2024-06-27#workbench-doc-change-demo)

2024-05-23

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstanceAttribute?updateTime=2024-05-23#workbench-doc-change-demo)

2024-01-04

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstanceAttribute?updateTime=2024-01-04#workbench-doc-change-demo)

2023-11-15

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstanceAttribute?updateTime=2023-11-15#workbench-doc-change-demo)

2023-10-11

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstanceAttribute?updateTime=2023-10-11#workbench-doc-change-demo)

2023-06-27

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstanceAttribute?updateTime=2023-06-27#workbench-doc-change-demo)

2022-09-01

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstanceAttribute?updateTime=2022-09-01#workbench-doc-change-demo)

2022-07-05

API Description Update. The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstanceAttribute?updateTime=2022-07-05#workbench-doc-change-demo)

2022-02-28

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstanceAttribute?updateTime=2022-02-28#workbench-doc-change-demo)

2022-02-28

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstanceAttribute?updateTime=2022-02-28#workbench-doc-change-demo)

2022-02-28

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstanceAttribute?updateTime=2022-02-28#workbench-doc-change-demo)

2022-02-28

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstanceAttribute?updateTime=2022-02-28#workbench-doc-change-demo)
