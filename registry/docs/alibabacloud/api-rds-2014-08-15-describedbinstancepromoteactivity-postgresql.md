The operation is phased out.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeDBInstancePromoteActivity)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeDBInstancePromoteActivity)

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

rds:DescribeDBInstancePromoteActivity

get

\*DBInstance

`acs:rds:{#regionId}:{#accountId}:dbinstance/{#DbInstanceId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

DbInstanceName

string

Yes

The instance ID.

rm-uf6wjk5xxxxxxx

AliUid

string

Yes

The ID of the Alibaba Cloud account.

22973492\*\*\*\*\*\*\*\*\*\*

ResourceGroupId

string

No

The resource group ID.

111

## Response parameters

Parameter

Type

Description

Example

object

DBInstanceName

string

The instance name.

rm-uf6wjk5xxxxxxx

RequestId

string

The request ID.

94CB8D93-017A-5AE7-A118-6E0F89D93C0A

AliUid

string

The ID of the Alibaba Cloud account.

22973492\*\*\*\*\*\*\*\*\*\*

DBType

string

The type of the database engine. Valid values:

-   **MySQL**
-   **PostgreSQL**
-   **Oracle**

MySQL

DBInstanceId

string

The instance ID. You can call the [DescribeDBInstances](/help/en/rds/api-query-instances) operation to query the instance ID.

rm-uf6wjk5xxxxxxx

IsActivity

string

The activity information about the instance. For more information, see [Instance activities](/help/en/rds/product-overview/announcements-and-updates-of-apsaradb-rds).

1

Bid

string

-   China site: 26842
-   International site: 26888

268\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "DBInstanceName": "rm-uf6wjk5xxxxxxx",
  "RequestId": "94CB8D93-017A-5AE7-A118-6E0F89D93C0A",
  "AliUid": "22973492**********",
  "DBType": "MySQL",
  "DBInstanceId": "rm-uf6wjk5xxxxxxx",
  "IsActivity": 1,
  "Bid": "268**"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

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

OrderStatus.UnPaid

The specified db instance has unpaid order.

The instance has an unpaid order. Please pay first and try again.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-11-20

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstancePromoteActivity?updateTime=2024-11-20#workbench-doc-change-demo)

2022-08-10

The API operation is deprecated

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstancePromoteActivity?updateTime=2022-08-10#workbench-doc-change-demo)

2022-06-20

Add Operation

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstancePromoteActivity?updateTime=2022-06-20#workbench-doc-change-demo)
