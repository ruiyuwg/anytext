Creates an endpoint for an instance that runs RDS Cluster Edition.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

MySQL

### [](#references)[](#)References

**Note** Before you call this operation, carefully read the following documentation. Make sure that you fully understand the prerequisites and impacts for calling this operation.

[Create a read-only endpoint for a cluster](/help/en/doc-detail/464132.html)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/CreateDBInstanceEndpoint)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/CreateDBInstanceEndpoint)

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

rds:CreateDBInstanceEndpoint

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

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.

The token can contain only ASCII characters and cannot exceed 64 characters in length.

6000170000591aed949d0f\*\*\*\*

DBInstanceId

string

Yes

The instance ID. You can call the DescribeDBInstances operation to query the instance ID.

rm-\*\*\*\*

VpcId

string

Yes

The VPC ID of the internal endpoint.

vpc-xxxmmxjqqi\*\*\*\*

VSwitchId

string

Yes

The vSwitch ID of the internal endpoint.

vsw-bp1kqp\*\*\*\*

PrivateIpAddress

string

No

The IP address of the internal endpoint.

172.16.XX.XX

ConnectionStringPrefix

string

Yes

The prefix of the internal endpoint.

When you create any type of endpoint, an internal endpoint is automatically created for the endpoint. This parameter specifies the prefix of the internal endpoint.

rm-\*\*\*\*-ro

Port

string

Yes

The port number of the internal endpoint. You can specify the port number for the internal endpoint.

Valid values: 3000 to 5999.

3306

DBInstanceEndpointType

string

Yes

The endpoint type. Valid values:

-   Primary: read/write endpoint of the instance
-   Readonly: read-only endpoint of the instance

Readonly

DBInstanceEndpointDescription

string

No

The user-defined description of the endpoint.

for readonly business

NodeItems

array<object>

Yes

The information about the endpoint.

object

Yes

The information about the array object.

DBInstanceId

string

Yes

The instance ID. You can call the DescribeDBInstances operation to query the instance ID.

rm-\*\*\*\*

NodeId

string

Yes

The node ID.

rn-xxxx-\*\*\*\*

Weight

long

No

The weight of the node. Read requests are distributed based on the weight.

Valid values: 0 to 100.

50

ResourceGroupId

string

No

The resource group ID. You can call the DescribeDBInstanceAttribute operation to obtain the ID of the resource group.

rg-acfmy\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

Data

object

The data returned.

DBInstanceName

string

The ID of the instance.

rm-\*\*\*\*

DBInstanceEndpointId

string

The endpoint ID of the instance.

ep-\*\*\*\*

ConnectionString

string

The internal endpoint.

rm-\*\*\*\*.mysql.rds.aliyuncs.com

RequestId

string

The ID of the request.

C8E88DED-533F-4B3C-9207-731FBF394CCA

## Examples

Sample success responses

`JSON`format

```
{
  "Data": {
    "DBInstanceName": "rm-****",
    "DBInstanceEndpointId": "ep-****",
    "ConnectionString": "rm-****.mysql.rds.aliyuncs.com"
  },
  "RequestId": "C8E88DED-533F-4B3C-9207-731FBF394CCA"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidSourceCategory

specified source category is invalid.

The specified source category is invalid.

400

InvalidDBInstanceConnType.Format

Specified DB instance conn type is not valid.

The operation failed. The operation is not supported for the connection type of the RDS instance.

400

EndpointNum.Error

The number of endpoint is too many.

\-

400

InvalidNodeItems.DuplicateNodeId

Duplicate nodeId, please ensure all nodeIds are different.

Duplicate NodeId parameter values exist in NodeItems.

400

InvalidNodeItems.RONode

ReadOnly endpoint can not contain readonly instance node.

The read-only endpoint cannot contain the read-only instance.

400

InvalidNodeItems.RONodeIdPrimary

ReadOnly endpoint can not contain primary node.

The read-only endpoint cannot contain the primary instance.

400

InvalidNodeItems.JsonFormat

NodeItems is not a json string.

The NodeItems parameter value must be a JSON string.

400

InvalidNodeItems.DBInstanceId

Specified dbInstanceId is invalid

The specified dbInstanceId parameter in NodeItems is invalid.

400

InvalidNodeItems.NodeId

Specified Node id is invalid

A NodeId parameter value in NodeItems is not found among instances.

400

EndpointType.NotSupport

Current db type is not support specified endpoint type.

The specified endpoint type is invalid.

400

OtherEndpoint.Exist

Other endpoint already exist.

\-

400

InvalidPort.Malformed

Specified port is not valid.

The port number is invalid.

400

APICallingFailed

Api called failed, please check vpc vsw vip

\-

400

InvalidDBInstanceName.NotFound

The specified DB instance name does not exist.

The instance name does not exist.

400

InvalidNodeItems.BlackNodeItems

NodeItems is blank.

\-

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

403

IncorrectDBInstanceState

Current DB instance state does not support this operation.

\-

403

InvalidConnVPCId

Specified conn vpc id is not valid.

The specified VPC ID is invalid.

403

InvalidVswitchId

Specified conn vswitch id is not valid.

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

404

IncorrectDBInstanceLockMode

Current DB instance lock mode does not support this operation.

The operation failed. The RDS instance is locked.

404

InvalidConnectionString.NotFound

Specified connection string or net type is not found.

The endpoint cannot be found. Check the endpoint.

404

InvalidConnectionString.Duplicate

Specified connection string already exists in the Aliyun RDS.

The endpoint is duplicate. Specify a different endpoint.

404

InvalidWeight.Format

The Specified Weight format is not valid.

The weight range is invalid.

404

InvalidDBInstance.NotFound

Specified instance does not exist or not support.

The RDS instance cannot be found, is deleted, or does not support the operation.

404

InvalidClusterKms

The current instance does not authorized to access the Key Management Service.

The instance does not have permissions to access Key Management Service (KMS).

500

ExternalFailure

The request processing has failed due to external service failure.

The request processing has failed due to external service failure.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-11-07

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBInstanceEndpoint?updateTime=2023-11-07#workbench-doc-change-demo)

2023-09-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBInstanceEndpoint?updateTime=2023-09-08#workbench-doc-change-demo)

2023-06-27

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBInstanceEndpoint?updateTime=2023-06-27#workbench-doc-change-demo)
