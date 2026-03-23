Changes the billing method of an instance from pay-as-you-go to subscription or from subscription to pay-as-you-go.

## Operation description

Before you call this operation, make sure that you understand the billing methods and [pricing](https://www.alibabacloud.com/product/apsaradb-for-mongodb/pricing) of ApsaraDB for MongoDB

Before you call this API operation, make sure that the ApsaraDB for MongoDB instance meets the following requirements:

-   The instance is in the Running state.
    
-   Your instance has no unpaid billing method change orders.
    
-   The instance type is available for purchase. For more information about unavailable instance types, see [Instance types](/help/en/mongodb/product-overview/instance-types/).
    

**Note**

To change the billing method of an instance whose instance type is no longer available to purchase, call the [ModifyDBInstanceSpec](/help/en/mongodb/api-modifydbinstancespec) or [ModifyNodeSpec](/help/en/mongodb/api-modifynodespec) operation to change the instance type first.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Dds/2015-12-01/TransformInstanceChargeType)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Dds/2015-12-01/TransformInstanceChargeType)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

dds:TransformInstanceChargeType

update

\*Instance

`acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbInstanceId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

InstanceId

string

Yes

The ID of the instance.

dds-2ze55b3ec56c\*\*\*\*

Period

integer

No

The subscription duration of the instance. Unit: months. Valid values: **1, 2, 3, 4, 5, 6, 7, 8, 9**\*\*\*\*, **12**, **24**, and **36**.

1

AutoPay

boolean

No

Specifies whether to enable automatic payment. Valid values:

-   **true**
    
-   **false**
    

**Note**

Default value: **true**.

true

BusinessInfo

string

No

The business information. This is an additional parameter.

{“ActivityId":"000000000"}

AutoRenew

string

No

Specifies whether to enable auto-renewal. Valid values:

-   **true**
    
-   **false**
    

**Note**

Default value: **false**.

false

CouponNo

string

No

The coupon code. Default value: `youhuiquan_promotion_option_id_for_blank`.

default

ChargeType

string

Yes

The billing method of the instance. Valid values:

-   **PrePaid:** subscription.
    
-   **PostPaid:** pay-as-you-go.
    

PrePaid

PricingCycle

string

No

实例付费时长单位 取值说明：

-   **Month：** 月
    
-   **Year：** 年
    

默认值：Month

Month

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Response

RequestId

string

The request ID.

D8F1D721-6439-4257-A89C-F1E8E9C9\*\*\*\*

OrderId

string

The order ID.

21084641369\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "D8F1D721-6439-4257-A89C-F1E8E9C9****",
  "OrderId": "21084641369****"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

MissingParameter

Period is mandatory for this action.

400

InvalidParam

Period is invalid

400

ResourceNotAvailable

Resource you requested is not available for finance user.

400

InsufficientBalance

Your account does not have enough balance.

403

AlreadyPrePaid

This instance is already prepaid

The instance already uses the subscription billing method.

403

RealNameAuthenticationError

Your account has not passed the real-name authentication yet.

See [Error Codes](https://api.alibabacloud.com/document/Dds/2015-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Dds/2015-12-01/TransformInstanceChargeType#workbench-doc-change-demo) for a complete list.
