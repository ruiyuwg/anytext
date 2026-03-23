This API is deprecated. You are advised to use [Rds(2014-08-15) - DescribeDBInstances](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstances).

Queries the instances.

## Operation description

**Note** The DescribeDBInstancesAsCsv operation is phased out. You can call the DescribeDBInstances operation.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeDBInstancesAsCsv)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeDBInstancesAsCsv)

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

rds:DescribeDBInstancesAsCsv

get

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

RegionId

string

Yes

The region ID. You can call the DescribeRegions operation to query the most recent region list.

cn-hangzhou

DBInstanceId

string

No

The instance ID. You can call the DescribeDBInstances operation to query the IDs of instances.

rm-uf6wjk5xxxxxxxxxx

ResourceGroupId

string

No

The ID of the resource group.

rg-acfmy\*\*\*\*\*

CachedAsync

boolean

No

A deprecated parameter. You do not need to configure this parameter.

API

ExportKey

string

No

A deprecated parameter. You do not need to configure this parameter.

API

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

1AD222E9-E606-4A42-BF6D-8A444291\*\*\*\*

Items

array<object>

An array that consists of the fields in **DBInstanceAttribute**.

DBInstanceAttribute

object

The following table describes the fields.

VpcId

string

The virtual private cloud (VPC) ID.

vpc-uf6f7l4fg90xxxxxxxxxx

CreationTime

string

The creation time.

2011-05-30T12:11:04Z

TempDBInstanceId

string

The ID of the temporary instance that is attached to the primary instance.

rm-uf64zsuxxxxxxxxxx

SupportUpgradeAccountType

string

N/A.

No

IncrementSourceDBInstanceId

string

The ID of the instance from which incremental data comes. The incremental data of a disaster recovery instance comes from its primary instance. The incremental data of a read-only instance comes from its primary instance. If this parameter is not returned, the instance is a primary instance.

rm-uf6wjk5xxxxxxxxxx

DBInstanceMemory

long

The memory capacity of the instance. Unit: MB.

4096

MaintainTime

string

The maintenance window of the instance. The time follows the ISO 8601 standard and is displayed in UTC. In the ApsaraDB RDS console, the maintenance window is displayed in UTC+8.

00:00Z-02:00Z

PayType

string

The billing method of the instance.

Postpaid

Tags

string

The tags.

0

AvailabilityValue

string

The service availability of the instance in percentage.

100

ReadDelayTime

string

The latency of data replication from the primary instance to the read-only instance. This parameter is valid for read-only instances.

0

ConnectionMode

string

The connection mode of the instance. Valid values:

-   **Performance**: standard mode.
-   **Safety**: enhanced mode

Performance

Port

string

The port that is used to connect to the instance over an internal network.

3306

AccountType

string

The type of the account.

super

LockMode

string

The lock mode of the instance.

Unlock

EngineVersion

string

The engine version.

8.0

MaxIOPS

integer

The maximum number of I/O requests per second.

150

ConnectionString

string

The internal endpoint.

rm-uf6wjk5xxxxxxxxxx.mysql.rds.aliyuncs.com

InstanceNetworkType

string

The network type.

VPC

SecurityIPList

string

The IP addresses in the whitelist.

42.xx.xx.xx

MasterInstanceId

string

The primary instance ID.

rm-uf6wjk5xxxxxxxxxx

DBInstanceClassType

string

The instance family.

s

DBInstanceDescription

string

The instance description.

0

DBInstanceCPU

string

The number of CPU cores.

2

ExpireTime

string

The expiration time.

2019-03-27T16:00:00Z

DBInstanceNetType

string

The network type of the instance. Valid values:

-   **Internet**
-   **Intranet**

Internet

DBInstanceType

string

The instance type. Valid values:

-   **Primary**: primary instance
-   **ReadOnly**: read-only instance
-   **Guard**: disaster recovery instance
-   **Temp**: temporary instance

Primary

AccountMaxQuantity

integer

The maximum number of accounts.

500

LockReason

string

The reason why the instance was locked.

instance\_expired

DBInstanceStatus

string

The instance status.

Running

DBMaxQuantity

integer

The maximum number of databases that can be created on the instance.

200

GuardDBInstanceId

string

The ID of the disaster recovery instance that is attached to the primary instance.

rm-uf64zsuxxxxxxxxxx

RegionId

string

The region ID.

cn-hangzhou

DBInstanceStorage

integer

The storage capacity of the instance. Unit: GB.

10

VSwitchId

string

The vSwitch ID.

vsw-uf6adz52c2pxxxxxxxxxx

ZoneId

string

The zone ID.

cn-hangzhou-h

Category

string

The category of the instance.

0

MaxConnections

integer

The maximum number of concurrent connections.

60

DBInstanceId

string

The instance ID.

rm-uf6wjk5xxxxxxxxxx

DBInstanceClass

string

The instance type of the instance.

rds.mys2.small

Engine

string

The database engine of the instance.

MySQL

ExportKey

string

A deprecated parameter. You do not need to specify this parameter.

API

SlaveZones

array

A deprecated parameter. You do not need to specify this parameter.

slaveRegion

string

A deprecated parameter. You do not need to specify this parameter.

API

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "1AD222E9-E606-4A42-BF6D-8A444291****\t",
  "Items": {
    "DBInstanceAttribute": [
      {
        "VpcId": "vpc-uf6f7l4fg90xxxxxxxxxx\t ",
        "CreationTime": "2011-05-30T12:11:04Z",
        "TempDBInstanceId": "rm-uf64zsuxxxxxxxxxx",
        "SupportUpgradeAccountType": "No",
        "IncrementSourceDBInstanceId": "rm-uf6wjk5xxxxxxxxxx",
        "DBInstanceMemory": 4096,
        "MaintainTime": "00:00Z-02:00Z",
        "PayType": "Postpaid",
        "Tags": 0,
        "AvailabilityValue": 100,
        "ReadDelayTime": 0,
        "ConnectionMode": "Performance",
        "Port": 3306,
        "AccountType": "super",
        "LockMode": "Unlock",
        "EngineVersion": 8,
        "MaxIOPS": 150,
        "ConnectionString": "rm-uf6wjk5xxxxxxxxxx.mysql.rds.aliyuncs.com",
        "InstanceNetworkType": "VPC",
        "SecurityIPList": "42.xx.xx.xx",
        "MasterInstanceId": "rm-uf6wjk5xxxxxxxxxx",
        "DBInstanceClassType": "s",
        "DBInstanceDescription": 0,
        "DBInstanceCPU": 2,
        "ExpireTime": "2019-03-27T16:00:00Z",
        "DBInstanceNetType": "Internet",
        "DBInstanceType": "Primary",
        "AccountMaxQuantity": 500,
        "LockReason": "instance_expired",
        "DBInstanceStatus": "Running",
        "DBMaxQuantity": 200,
        "GuardDBInstanceId": "rm-uf64zsuxxxxxxxxxx",
        "RegionId": "cn-hangzhou",
        "DBInstanceStorage": 10,
        "VSwitchId": "vsw-uf6adz52c2pxxxxxxxxxx\t",
        "ZoneId": "cn-hangzhou-h",
        "Category": 0,
        "MaxConnections": 60,
        "DBInstanceId": "rm-uf6wjk5xxxxxxxxxx",
        "DBInstanceClass": "rds.mys2.small",
        "Engine": "MySQL",
        "ExportKey": "API",
        "SlaveZones": {
          "slaveRegion": [
            "API"
          ]
        }
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InstanceNames.Malformed

instance number of Instance Names should be less than 3000

The operation failed. The instance name must be less than 3,000 characters in length.

400

400

Export all instances more than 6 times in an hour, please try 1 hour later.

\-

400

ExportLimitExceeded

Export all instances more than 6 times in an hour, please try 1 hour later.

Export all instances more than 6 times in one hour, please try again after 1 hour.

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

Export.InProcess

There is already a task running, please try later

A task is running. Please try again later.

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

2024-11-19

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstancesAsCsv?updateTime=2024-11-19#workbench-doc-change-demo)

2024-07-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstancesAsCsv?updateTime=2024-07-28#workbench-doc-change-demo)

2023-06-26

The API operation is deprecated. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstancesAsCsv?updateTime=2023-06-26#workbench-doc-change-demo)

2023-06-20

The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstancesAsCsv?updateTime=2023-06-20#workbench-doc-change-demo)
