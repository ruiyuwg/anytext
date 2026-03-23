Adds a node to an ApsaraDB RDS for MySQL or ApsaraDB RDS for PostgreSQL instance that runs RDS Cluster Edition. An RDS instance that runs RDS Cluster Edition is referred to as an RDS cluster.

## Operation description

### [](#supported-database-engines)Supported database engines

MySQL

### [](#references)References

**Note** Before you call this operation, carefully read the following documentation. Make sure that you fully understand the prerequisites and impacts for calling this operation.

[Add a node to an ApsaraDB RDS for MySQL cluster](/help/en/rds/apsaradb-rds-for-mysql/add-a-node-to-an-apsaradb-rds-for-mysql-cluster)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/CreateDBNodes)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/CreateDBNodes)

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

rds:CreateDBNodes

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

ETnLKlblzczshOTUbOCz\*\*\*\*

DBInstanceId

string

Yes

The instance ID You can call the DescribeDBInstances operation to query the instance ID.

rm-2ze450g4ctg6t\*\*\*\*

DBNode

array<object>

Yes

The details of the node.

object

Yes

The details of the node.

classCode

string

Yes

The specification information of the node.

mysql.n2.medium.xc

zoneId

string

Yes

The ID of the zone in which the node is deployed.

cn-zhangjiakou-a

vswitchId

string

No

The vSwitch ID of the node.

vsw-bp1sxxsodv28ey5dl\*\*\*\*

ResourceGroupId

string

No

The resource group ID. You can call the DescribeDBInstanceAttribute operation to query the resource group ID.

rg-acfmy\*\*\*\*\*

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

7A41C147-C8D0-4DAE-A1A2-17EBCD60DFA1

DBInstanceId

string

The ID of the instance.

rm-2ze450g4ctg6t\*\*\*\*

OrderId

long

The ID of the order.

2133400000\*\*\*\*\*

NodeIds

string

The ID of the created node. The value is a string. Multiple values are separated by commas (`,`).

rn-abcd2\*\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "7A41C147-C8D0-4DAE-A1A2-17EBCD60DFA1",
  "DBInstanceId": "rm-2ze450g4ctg6t****",
  "OrderId": 0,
  "NodeIds": "rn-abcd2*****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

DBNodeFormatFault

The specified parameter DBNode is malformed

The specified dbNode parameter is invalid.

400

DBNodeParameterRequired

The specified parameter DBNode is required.

You must specify the dbNode parameter.

400

DBNodeParameterTooManyItems

The specified parameter DBNode has too many items.

An excessive number of nodes are added for dbNode.

400

DBNodeParameter.InvalidClassCode

The ClassCode of the item of the specified parameter DBNode is inconsistent.

The ClassCode configuration is invalid for the DBNode parameter.

400

DBNodeParameter.InvalidValue

The specific param DBNode is not valid.

\-

400

DBNodeParameter.NotFound

The specified parameter DBNode is not valid.

\-

400

InvalidMultiTenant

Multi tenants cannot exist in a same instance.

\-

400

InvalidClassCode

The specification code in the parameter is invalid.

The specification code in the parameter is invalid.

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

System.SaleValidateFailed

Sales expression validation system error.

A system error occurs when the sales expression is verified.

400

ContainForbiddenLabelError

There is a label that prohibits placing orders. Please contact your distributor for assistance.

You cannot place the order because a tag indicates that order placement is prohibited. Contact your distributor.

403

GroupReplicationNotSupport.InvalidEngineVersion

Group Replication requires the instance engine version to be 8.0.

\-

403

GroupReplicationNotSupport.InvalidNodeClassCode

Group Replication requires the ClassCode of each node to be consistent.

\-

403

GroupReplicationNotSupport.InvalidNodeNum

Group Replication is not supported, the number of nodes must be an odd number greater than or equal to 3.

\-

403

GroupReplicationNotSupport.InvalidXengine

Group Replication is not supported because the instance has xengine tables.

\-

403

GroupReplicationNotSupport.MemoryTooSmall

Group Replication is not supported because the memory is too small.

\-

403

OperationDenied.DBType

The operation is not permitted due to type of the database.

The operation is not supported for the database engine of the RDS instance.

403

OrderStatus.UnPaid

The specified db instance has unpaid order.

The instance has an unpaid order. Please pay first and try again.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-31

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBNodes?updateTime=2025-03-31#workbench-doc-change-demo)

2024-04-23

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBNodes?updateTime=2024-04-23#workbench-doc-change-demo)

2024-03-22

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBNodes?updateTime=2024-03-22#workbench-doc-change-demo)

2023-11-23

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBNodes?updateTime=2023-11-23#workbench-doc-change-demo)

2023-11-07

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBNodes?updateTime=2023-11-07#workbench-doc-change-demo)

2023-10-20

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBNodes?updateTime=2023-10-20#workbench-doc-change-demo)

2023-10-20

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBNodes?updateTime=2023-10-20#workbench-doc-change-demo)

2023-09-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBNodes?updateTime=2023-09-08#workbench-doc-change-demo)

2023-07-24

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBNodes?updateTime=2023-07-24#workbench-doc-change-demo)

2023-06-27

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBNodes?updateTime=2023-06-27#workbench-doc-change-demo)

2023-03-22

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBNodes?updateTime=2023-03-22#workbench-doc-change-demo)
