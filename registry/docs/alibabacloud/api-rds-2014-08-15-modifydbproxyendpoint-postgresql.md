Modifies the connection settings for a database proxy endpoint.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

-   RDS MySQL
-   RDS PostgreSQL

### [](#references)[](#)References

**Note** Before you call this operation, read the following topics and make sure that you fully understand the prerequisites and impacts of this operation.

-   [Configure the connection settings for a database proxy endpoint for an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/configure-access-policies-for-a-database-proxy-endpoint)
-   [Configure the connection settings for a database proxy endpoint for an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/configure-satabase-proxy-connection-address-access-policy)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/ModifyDBProxyEndpoint)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/ModifyDBProxyEndpoint)

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

rds:ModifyDBProxyEndpoint

update

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

rm-bp145737x5bi6\*\*\*\*

DBProxyEndpointId

string

No

The ID of the proxy endpoint. You can call the DescribeDBProxyEndpoint operation to query the proxy endpoint ID.

**Note**-   If the instance runs MySQL and you set **DbEndpointOperator** to **Delete** or **Modify**, you must specify DBProxyEndpointId.
-   If the instance runs PostgreSQL and you set **DbEndpointOperator** to **Delete**, **Modify**, or **Create**, you must specify DBProxyEndpointId.

gos787jog2wk0y\*\*\*\*

ConfigDBProxyFeatures

string

No

The capabilities that you want to enable for the proxy endpoint. If you specify more than one capability, separate the capabilities with semicolons (;). Format: `Capability 1:Status;Capability 2:Status;...`. Do not add a semicolon (;) at the end of the value.

Valid capability values:

-   **ReadWriteSpliting**: read/write splitting
-   **ConnectionPersist**: connection pooling
-   **TransactionReadSqlRouteOptimizeStatus**: transaction splitting
-   **AZProximityAccess**: nearest access
-   **CausalConsistRead**: read consistency

Valid status values:

-   **1**: enabled
-   **0**: disabled

**Note**

-   If the instance runs PostgreSQL, you can enable only read/write splitting, which is specified by **ReadWriteSpliting**.
    
-   Nearest access is supported only by dedicated database proxies for RDS instances that run MySQL.
    

ReadWriteSpliting:1;ConnectionPersist:0

RegionId

string

No

The region ID. You can call the DescribeRegions operation to query the most recent region list.

cn-hangzhou

ReadOnlyInstanceMaxDelayTime

string

No

The maximum latency threshold that is allowed for read/write splitting. If the latency on a read-only instance exceeds the threshold that you specified, the system no longer forwards read requests to the read-only instance. If you do not specify this parameter, the original value of this parameter is retained. Valid values: **0** to **3600**.

**Note**

-   You must specify this parameter only when read/write splitting is enabled.
    
-   If the database proxy endpoint has the read and write attributes, the default value of this parameter is **30** and read/write splitting is supported. If the database proxy endpoint has the read-only attribute, the default value of this parameter is **\-1** and read/write splitting is not supported. Unit: seconds.
    

30

CausalConsistReadTimeout

string

No

The consistency read timeout period. Unit: milliseconds. Default value: **10** Unit: milliseconds. Valid values: **0 to 60000**

10

ReadOnlyInstanceDistributionType

string

No

The policy that is used to allocate read weights. Valid values:

-   **Standard** (default): The system automatically assigns read weights to the primary and read-only instances based on the specifications of these instances.
-   **Custom**: You must manually allocate read weights to the primary and read-only instances.

**Note** You must specify this parameter when read/write splitting is enabled. For more information about the permission allocation policy, see [Modify the latency threshold and read weights of ApsaraDB RDS for MySQL instances](/help/en/doc-detail/96076.html) and [Enable and configure the database proxy feature for an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/enable-and-configure-the-database-proxy-feature-for-an-apsaradb-rds-for-postgresql-instance).

Standard

ReadOnlyInstanceWeight

string

No

The read weights of the instance and its read-only instances. A read weight must be a multiple of 100 and cannot exceed 10000. Formats:

-   Standard instance: `{"ID of the primary instance":"Weight","ID of the read-only instance":"Weight"...}`
    
    Example: `{"rm-uf6wjk5****":"500","rr-tfhfgk5xxx":"200"...}`
    
-   Instance on RDS Cluster Edition: `{"ID of the read-only instance":"Weight","DBClusterNode":{"ID of the primary node":"Weight","ID of the secondary node":"Weight","ID of the secondary node":"Weight"...}}`
    
    Example: `{"rr-tfhfgk5****":"200","DBClusterNode":{"rn-2z****":"0","rn-2z****":"400","rn-2z****":"400"...}}`
    
    **Note** **DBClusterNode** is required if the instance runs RDS Cluster Edition. The DBClusterNode parameter includes information about **IDs** and **weights** of the primary and secondary nodes..
    

{"rm-uf6wjk5xxxx":"500","rr-tfhfgk5xxx":"200"...}

DbEndpointOperator

string

No

The type of operation that you want to perform. Valid values:

-   **Modify**: Modify a proxy terminal. This is the default value.
-   **Create**: Create a proxy terminal.
-   **Delete**: Delete a proxy terminal.

Modify

DbEndpointAliases

string

No

The description of the proxy terminal.

test-proxy

DbEndpointType

string

No

The type of the proxy terminal. This is a reserved parameter. You do not need to specify this parameter.

RWSplit

DbEndpointReadWriteMode

string

No

The read and write attributes of the proxy terminal. Valid values:

-   **ReadWrite**: The proxy terminal connects to the primary instance and can receive both read and write requests.
-   **ReadOnly**: The proxy terminal does not connect to the primary instance and can receive only read requests. This is the default value.

**Note**-   If you set **DbEndpointOperator** to **Create**, you must also specify DbEndpointReadWriteMode.
-   If the instance runs MySQL and you change the value of this parameter from **ReadWrite** to **ReadOnly**, the transaction splitting feature is disabled.

ReadWrite

DBProxyEngineType

string

No

A deprecated parameter. You do not need to specify this parameter.

normal

VSwitchId

string

No

The ID of the vSwitch in the zone in which the proxy endpoint is specified. The default value is the ID of the vSwitch that corresponds to the default terminal of the database proxy. You can call the DescribeVSwitches operation to query existing vSwitches.

vsw-uf6adz52c2p\*\*\*\*

EffectiveTime

string

No

The effective time. Valid values:

-   **Immediate**: The effective time is immediate.
-   **MaintainTime**: The effective time is within the maintenance window. For more information, see ModifyDBInstanceMaintainTime.
-   **SpecificTime**: The effective time is a specified point in time.

Default value: **MaintainTime**.

MaintainTime

EffectiveSpecificTime

string

No

The point in time that you want to specify. Specify the time in the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time must be in UTC.

**Note** If **EffectiveTime** is set to **SpecificTime**, you must specify this parameter.

2023-05-06T07:08:09Z

DbEndpointMinSlaveCount

string

No

The minimum number of reserved instances.

2

VpcId

string

No

The VPC ID of the zone in which the proxy endpoint is specified. The default value is the VPC ID that corresponds to the default terminal of the database proxy. You can call the DescribeDBInstanceAttribute operation to query the default VPC of an instance.

vpc-2zeusejj\*\*\*\*\*\*

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

6B50D92C-1960-4D4F-A290-AFADD6B1A5C8

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "6B50D92C-1960-4D4F-A290-AFADD6B1A5C8"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidVpcInstanceId

The specified VPC instance ID is invalid.

\-

400

InvalidEndPoint.Format

The specified EndPoint is not valid.

\-

400

InvalidEndpointType.Format

The specified EndpointType is invalid.

The value of the EndpointType parameter is invalid. Check the value of this parameter.

400

IncorrectDBInstanceNetType

The current database instance network type does not support the operation.

The operation failed. The operation is not supported for the network type of the RDS instance.

400

EndpointNum.Error

The number of endpoint is invalid.

The number of proxy terminals is not supported. Check the maximum number of proxy terminals that are allowed.

400

EndpointTypeOperation.NotSupport

The endpoint type does not support the operation.

The operation is not supported for the type of proxy terminal that you configure.

400

InvalidDBInstanceName

Specified parameter DBInstanceName is not valid.

The value of the DBInstanceName parameter is invalid. Check that the value of this parameter is not null or an empty string.

400

ClusterEndpoint.StatusNotValid

The cluster endpoint status is invalid.

The status of the endpoint is invalid.

400

MaxscaleNotSupport

Current custins can not support Maxscale.

This operation is not supported for instances with maxscale.

400

InvalidAvZone.Format

Specified AvZone is not valid.

The value of the AvZone parameter is invalid. Check the value of this parameter.

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

APICallingFailed

Api calling failed.

An internal error occurred.

400

InvalidVSwitchId.Format

The specified vswitch Id format is incorrect.

\-

403

MaxScaleLevel.NotSupport

The current maxscale ins\_num does not support this operation.

The operation failed. The specifications of the database proxy are low.

403

ReadDBInstance.NotFound

The current database instance does not contain any read only instance.

The current database instance does not have a read-only instance.

403

IncorrectKindCode

The current KindCode of the custins does not support the operation.

\-

403

IncorrectDBInstanceState

The current database instance state does not support the operation.

The operation failed. The RDS instance is not running.

403

IncorrectDBInstanceEngine

Current DB Instance engine does not support this operation.

The operation failed. The operation is not supported for the database engine that is run on the RDS instance.

403

IncorrectKindCode

Current custins kindCode does not support this operation.

The operation failed. The operation is not supported for the database engine that is run on the RDS instance.

403

IncorrectDBInstanceType

Current DB instance type does not support this operation.

The operation failed. The RDS instance is not in a ready state.

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

EndpointConfig.Invalid

Please check the endpoint config parameter.

Please check the endpoint configuration parameter.

404

Readins.NotFound

The current instance does not contain any read only instance. The operation is not supported.

The operation failed. The RDS instance is not attached with read-only RDS instances.

404

Endpoint.NotFound

Specified endpoint is not found.

The port that is associated with the dedicated proxy endpoint cannot be found.

404

EndpointType.NotFound

The specified endpoint type is not found.

The operation failed. Unknown types of proxy terminals are detected.

404

InvalidReadDBInstance.NotFound

The specified read only database instance does not exist.

The read-only RDS instance is not created, or the values of the request parameters are invalid.

404

InvalidParam

The specified Weight is invalid.

The weight is invalid.

404

Maxscale.NotFound

The related maxscale instance is not found.

The operation failed. No associated MaxScale instances can be found.

404

IncorrectVswitchId

The specified parameter VSwitchId is not valid.

The vSwitch ID is invalid.

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

2025-02-27

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBProxyEndpoint?updateTime=2025-02-27#workbench-doc-change-demo)

2024-12-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBProxyEndpoint?updateTime=2024-12-26#workbench-doc-change-demo)

2024-12-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBProxyEndpoint?updateTime=2024-12-13#workbench-doc-change-demo)

2024-11-27

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBProxyEndpoint?updateTime=2024-11-27#workbench-doc-change-demo)

2024-10-15

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBProxyEndpoint?updateTime=2024-10-15#workbench-doc-change-demo)

2023-12-19

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBProxyEndpoint?updateTime=2023-12-19#workbench-doc-change-demo)

2022-06-23

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBProxyEndpoint?updateTime=2022-06-23#workbench-doc-change-demo)

2022-06-08

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBProxyEndpoint?updateTime=2022-06-08#workbench-doc-change-demo)
