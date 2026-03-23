Upgrades the database proxy version of an instance.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

-   MySQL
-   PostgreSQL

### [](#references)[](#)References

**Note** Before you call this operation, carefully read the following documentation. Make sure that you fully understand the prerequisites and impacts for calling this operation.

-   [Upgrade the database proxy version of an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/upgrade-the-dedicated-proxy-version-of-an-apsaradb-rds-for-mysql-instance)
-   [Upgrade the database proxy version of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-the-database-proxy-version-of-an-apsaradb-rds-for-postgresql-instance)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/UpgradeDBProxyInstanceKernelVersion)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/UpgradeDBProxyInstanceKernelVersion)

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

rds:UpgradeDBProxyInstanceKernelVersion

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

rm-uf6wjk5\*\*\*\*

UpgradeTime

string

No

The time when you want to upgrade the database proxy version of the instance. Valid values:

-   **MaintainTime** (default): performs the upgrade during the maintenance window that you specified. For more information, see [Modify the maintenance window](/help/en/rds/developer-reference/api-rds-2014-08-15-modifydbinstancemaintaintime).
-   **Immediate**: performs the upgrade immediately.
-   **SpecifyTime**: performs the upgrade at a specified point in time.

**Note**-   **If the instance runs MySQL, you can set this parameter to **MaintainTime**, **Immediate**, or SpecifyTime**.
-   If the instance runs PostgreSQL, you can set this parameter to **MaintainTime** or **Immediate**.

MaintainTime

SwitchTime

string

No

The specific point in time when you want to perform the upgrade. Specify the time in the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time must be in UTC.

**Note** If you set **UpgradeTime** to **SpecifyTime**, you must specify SwitchTime.

2019-07-10T13:15:12Z

DBProxyEngineType

string

No

A reserved parameter. You do not need to specify this parameter.

normal

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

DBInstanceName

string

The ID of the database proxy of the instance.

bu9\*\*\*

RequestId

string

The ID of the request.

44537EC8-DFA2-4745-B579-E733FF2C5B9A

TaskId

string

The task ID.

33436\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "DBInstanceName": "bu9***",
  "RequestId": "44537EC8-DFA2-4745-B579-E733FF2C5B9A",
  "TaskId": "33436****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidDBInstanceName

Specified parameter DBInstanceName is not valid.

The value of the DBInstanceName parameter is invalid. Check that the value of this parameter is not null or an empty string.

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

IncorrectDBInstanceState

The proxy instance has not been activated.

\-

403

IncorrectDBInstanceState

Current DB instance state does not support this operation.

\-

403

OrderStatus.UnPaid

The specified db instance has unpaid order.

The instance has an unpaid order. Please pay first and try again.

404

AllocateResourceFailed

Failed to allocate resources. Please check the zone and the host you selected.

Failed to obtain the requested resources. Check whether the zone and the host can provide sufficient resources for the instance type that you specify.

404

InvalidParam

The parameter is invalid.

The operation failed. The values of some parameters are invalid.

404

InsufficientResourceCapacity

The target availability zone does not have sufficient resources.

The target Availability Zone does not have enough resources.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-11-06

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/UpgradeDBProxyInstanceKernelVersion?updateTime=2025-11-06#workbench-doc-change-demo)

2024-01-09

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/UpgradeDBProxyInstanceKernelVersion?updateTime=2024-01-09#workbench-doc-change-demo)

2023-12-19

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/UpgradeDBProxyInstanceKernelVersion?updateTime=2023-12-19#workbench-doc-change-demo)

2023-04-17

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/UpgradeDBProxyInstanceKernelVersion?updateTime=2023-04-17#workbench-doc-change-demo)

2022-06-23

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/UpgradeDBProxyInstanceKernelVersion?updateTime=2022-06-23#workbench-doc-change-demo)

2022-06-08

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/UpgradeDBProxyInstanceKernelVersion?updateTime=2022-06-08#workbench-doc-change-demo)
