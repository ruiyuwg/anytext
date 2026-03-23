Changes the billing method of a Tair (Redis OSS-compatible) instance from subscription to pay-as-you-go or from pay-as-you-go to subscription.

## Operation description

Before you call this operation, make sure that you understand relevant precautions and billing rules. For more information, see the following topics:

-   [Change the billing method to subscription](/help/en/redis/product-overview/change-the-billing-method-to-subscription).
-   [Change the billing method to pay-as-you-go](/help/en/redis/product-overview/change-the-billing-method-to-pay-as-you-go).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/TransformInstanceChargeType)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/TransformInstanceChargeType)

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

kvstore:TransformInstanceChargeType

update

\*All Resources

`*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

InstanceId

string

Yes

The ID of the instance. You can call the [DescribeInstances](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeinstances-redis) operation to query the ID of the instance.

r-bp1zxszhcgatnx\*\*\*\*

Period

long

No

The subscription duration. Unit: months. Valid values: **1**, 2, 3, 4, 5, 6, 7, 8, **9**, **12**, **24**, **36**.

**Note** This parameter is valid and required only if you set the **ChargeType** parameter to **PrePaid**.

1

AutoPay

boolean

No

Specifies whether to enable automatic payment. Default value: true. Valid values:

-   **true**: Automatic payment is enabled.
-   **false**: Automatic payment is disabled. If automatic payment is disabled, you must perform the following steps to complete the payment: In the top navigation bar of the Tair (Redis OSS-compatible) console, choose **Expenses** > **Renewal Management**. In the left-side navigation pane of the Billing Management console, click **Orders**. On the **Orders** page, find the order and complete the payment.

true

ChargeType

string

Yes

The new billing method. Valid values:

-   **PrePaid**: subscription. If you set this parameter to PrePaid, you must also specify the **Period** parameter.
-   **PostPaid**: pay-as-you-go

PrePaid

AutoRenew

string

No

Specifies whether to enable auto-renewal for the instance. Valid values:

-   **true**: enables auto-renewal.
-   **false** (default): disables auto-renewal.

Valid values:

-   false
-   true

false

AutoRenewPeriod

long

No

The subscription duration that is supported by auto-renewal. Unit: month. Valid values: **1**, **2**, **3**, **6**, and **12**.

**Note** This parameter is required if the **AutoRenew** parameter is set to **true**.

1

## Response parameters

Parameter

Type

Description

Example

object

EndTime

string

The time when the instance expires.

**Note** A value is returned for this parameter only if the instance was changed from pay-as-you-go to subscription.

2021-05-13T00:00:00Z

RequestId

string

The ID of the request.

82C791FB-8979-489E-853D-706D7743\*\*\*\*

OrderId

string

The ID of the order.

20881824000\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "EndTime": "2021-05-13T00:00:00Z",
  "RequestId": "82C791FB-8979-489E-853D-706D7743****",
  "OrderId": "20881824000****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

MissingParameter

Period is mandatory for this action.

\-

400

InvalidParam

Period is invalid

The specified subscription duration is invalid.

400

ResourceNotAvailable

Resource you requested is not available for finance user.

The requested resource is unavailable to users of Alibaba Finance Cloud.

400

InsufficientBalance

Your account does not have enough balance.

Your account balance is insufficient. Add funds to your account and try again.

400

Order.LatestOrderIsHanding

Latest order is handing, please retry later.

\-

403

RealNameAuthenticationError

Your account has not passed the real-name authentication yet.

Your account has not completed real-name verification.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/R-kvstore/2015-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2026-01-14

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/TransformInstanceChargeType?updateTime=2026-01-14#workbench-doc-change-demo)

2023-11-21

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/TransformInstanceChargeType?updateTime=2023-11-21#workbench-doc-change-demo)

2023-07-20

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/TransformInstanceChargeType?updateTime=2023-07-20#workbench-doc-change-demo)
