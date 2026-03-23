Queries all endpoints of an instance.

## Operation description

### [](#supported-database-engines)Supported database engines

-   MySQL
-   PostgreSQL
-   SQL Server
-   MariaDB

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeDBInstanceNetInfo)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeDBInstanceNetInfo)

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

rds:DescribeDBInstanceNetInfo

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

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.

ETnLKlblzczshOTUbOC\*\*\*\*\*

DBInstanceId

string

Yes

The instance ID. You can call the DescribeDBInstances operation to query the instance ID.

rm-uf6wjk5\*\*\*\*\*

Flag

integer

No

A reserved parameter. You do not need to specify this parameter.

None

DBInstanceNetRWSplitType

string

No

The type of the endpoint. Valid values:

-   **Normal**: regular endpoint
-   **ReadWriteSplitting**: read/write splitting endpoint

**Note** By default, the system returns both types of endpoints.

Normal

GeneralGroupName

string

No

The name of the dedicated cluster to which the instance belongs. This parameter takes effect only when the instance runs MySQL on RDS Standard Edition and is created in a dedicated cluster.

rgc-2ze\*\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

SecurityIPMode

string

The whitelist mode of the instance. Valid values:

-   **normal**: standard whitelist mode
-   **safety**: enhanced whitelist mode

safety

RequestId

string

The ID of the request.

777C4593-8053-427B-99E2-105593277CAB

InstanceNetworkType

string

The network type of the instance. Valid values:

-   **Classic**: classic network
-   **VPC**: virtual private cloud (VPC)

VPC

DBInstanceNetInfos

array<object>

The information about the endpoints of the instance.

DBInstanceNetInfo

object

VSwitchId

string

The vSwitch ID.

vsw-uf6adz52c2p\*\*\*\*\*

ConnectionStringType

string

The type of the endpoint. Valid values:

-   **Normal**: a regular endpoint
-   **ReadWriteSplitting**: a read/write splitting endpoint

Normal

ConnectionString

string

The endpoint of the instance.

rm-uf6w\*\*\*\*\*.mysql.rds.aliyuncs.com

ExpiredTime

string

The remaining validity period of the instance in the classic network in hybrid access mode. Unit: seconds.

1209534

Upgradeable

string

Indicates whether the IP version can be updated. Valid values:

-   **Enable**
-   **Disabled**

**Note** The IP version can be updated from IPv4 to IPv6.

Disabled

MaxDelayTime

string

The latency threshold. This parameter is returned only for a read/write splitting endpoint. Unit: seconds.

**Note** If the latency on a read-only instance exceeds the specified threshold, ApsaraDB RDS no longer forwards read requests to the read-only instance.

12

IPType

string

The network type.

-   Valid values when the instance resides in the classic network:
    
    -   **Inner**
    -   **Public**
-   Valid values when the instance resides in a virtual private cloud (VPC):
    
    -   **Private**
    -   **Public**

Public

Port

string

The port that is used to connect to the instance.

3306

BabelfishPort

string

The Tabular Data Stream (TDS) port of the instance for which Babelfish is enabled.

**Note** This parameter applies only to ApsaraDB RDS for PostgreSQL instances. For more information about Babelfish for ApsaraDB RDS for PostgreSQL, see [Introduction to Babelfish](/help/en/doc-detail/428613.html).

1433

VPCId

string

The VPC ID of the instance.

vpc-uf6f7l4fg90\*\*\*\*\*

DistributionType

string

The policy that is used to assign read weights. This parameter is returned only for a read/write splitting endpoint. Valid values:

-   **Standard**: The system automatically allocates read weights to the instance and its read-only instances based on the specifications of the instances.
-   **Custom**: You must manually allocate read weights to the instance and its read-only instances.

Standard

IPAddress

string

The IP address.

192.168.XX.XX

SecurityIPGroups

array<object>

The IP addresses in the whitelist for the instance.

securityIPGroup

object

SecurityIPs

string

The IP address in the whitelist.

127.0.XX.XX

SecurityIPGroupName

string

The name of the IP address whitelist.

Default

DBInstanceWeights

array<object>

The information about the instance weight.

**Note** This parameter is returned only when the read/write splitting feature is enabled for the instance.

DBInstanceWeight

object

Availability

string

The availability of the instance. Valid values:

-   **Unavailable**
-   **Available**

Unavailable

Weight

string

The weight of the instance.

100

DBInstanceId

string

The instance ID.

rm-uf6wjk5\*\*\*\*\*

Role

string

A deprecated parameter.

None

DBInstanceType

string

The type of the instance. Valid values:

-   **Master**: primary instance
-   **Readonly**: read-only instance

Master

PGBouncerPort

string

The PgBouncer port.

**Note** This parameter is returned only when PgBouncer is enabled for the instance that runs PostgreSQL.

6432

## Examples

Sample success responses

`JSON`format

```
{
  "SecurityIPMode": "safety",
  "RequestId": "777C4593-8053-427B-99E2-105593277CAB",
  "InstanceNetworkType": "VPC",
  "DBInstanceNetInfos": {
    "DBInstanceNetInfo": [
      {
        "VSwitchId": "vsw-uf6adz52c2p*****",
        "ConnectionStringType": "Normal",
        "ConnectionString": "rm-uf6w*****.mysql.rds.aliyuncs.com",
        "ExpiredTime": 1209534,
        "Upgradeable": "Disabled",
        "MaxDelayTime": 12,
        "IPType": "Public",
        "Port": 3306,
        "BabelfishPort": 1433,
        "VPCId": "vpc-uf6f7l4fg90*****",
        "DistributionType": "Standard",
        "IPAddress": "192.168.XX.XX",
        "SecurityIPGroups": {
          "securityIPGroup": [
            {
              "SecurityIPs": "127.0.XX.XX",
              "SecurityIPGroupName": "Default"
            }
          ]
        },
        "DBInstanceWeights": {
          "DBInstanceWeight": [
            {
              "Availability": "Unavailable",
              "Weight": 100,
              "DBInstanceId": "rm-uf6wjk5*****",
              "Role": "None\n",
              "DBInstanceType": "Master"
            }
          ]
        },
        "PGBouncerPort": 6432
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

TimeoutRetryLater

Timeout, retry later.

\-

400

InvalidDBInstanceName.NotFound

DB instance name not found.

\-

400

IllegalParameter

Illegal parameter

The values of some parameters are invalid.

400

Readins.NotFound

Readonly instance not found.

\-

400

MissingRWSplistParam

Custins is missing rw split param.

The instance is missing a read/write split parameter.

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

2024-08-15

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstanceNetInfo?updateTime=2024-08-15#workbench-doc-change-demo)

2023-06-27

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstanceNetInfo?updateTime=2023-06-27#workbench-doc-change-demo)

2021-12-28

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstanceNetInfo?updateTime=2021-12-28#workbench-doc-change-demo)
