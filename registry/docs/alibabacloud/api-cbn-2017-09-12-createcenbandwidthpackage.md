To connect network instances in different regions, you must purchase a bandwidth plan. You can call the CreateCenBandwidthPackage operation to create a bandwidth plan.

## Operation description

-   When you create a bandwidth plan, you must specify the connected areas. A connected area is a collection of one or more Alibaba Cloud regions. You must select the connected areas based on the regions that you want to connect. For more information about the relationship between areas and regions, see [Purchase a bandwidth plan](/help/en/cen/user-guide/work-with-a-bandwidth-plan).
    
-   For more information about billing, see [Billing](/help/en/cen/product-overview/billing-rules).
    
-   **CreateCenBandwidthPackage** is an asynchronous operation. After you send a request, the system returns a bandwidth plan ID. The bandwidth plan is created in the background. You can call the **DescribeCenBandwidthPackages** operation to query the status of the bandwidth plan. The bandwidth plan is successfully created when its status changes to **Idle** or **InUse**.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/CreateCenBandwidthPackage)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/CreateCenBandwidthPackage)

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

cen:CreateCenBandwidthPackage

create

\*CenBandwidthPackage

`acs:cen:*:{#accountId}:cenbandwidthpackage/*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

Make sure that the client token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.

02fb3da4-130e-11e9-8e44-001\*\*\*\*

Name

string

No

The name of the bandwidth plan.

The name can be empty or 1 to 128 characters in length. It cannot start with http:// or https://.

nametest

Description

string

No

The description of the bandwidth plan.

The description can be empty or 1 to 256 characters in length. It cannot start with http:// or https://.

namedesc

Bandwidth

integer

Yes

The maximum bandwidth of the bandwidth plan. Unit: Mbps. Valid values: **2** to **10000**.

2

GeographicRegionAId

string

Yes

The area where the network instance is deployed. Valid values:

-   **China**: the Chinese mainland.
    
-   **North-America**: North America.
    
-   **Asia-Pacific**: Asia-Pacific.
    
-   **Europe**: Europe.
    

China

GeographicRegionBId

string

Yes

The other area where the network instance is deployed. Valid values:

-   **China**: the Chinese mainland.
    
-   **North-America**: North America.
    
-   **Asia-Pacific**: Asia-Pacific.
    
-   **Europe**: Europe.
    

China

BandwidthPackageChargeType

string

No

The billing method of the bandwidth plan. Set the value to **PREPAY**. This value specifies the subscription billing method.

PREPAY

Period

integer

No

The subscription duration of the bandwidth plan. Default value: 1.

-   If you set **PricingCycle** to **Month**, valid values for **Period** are **1** to **3** and **6**.
    
-   If you set **PricingCycle** to **Year**, valid values for **Period** are **1** to **3**.
    

**Note**

This parameter is required if you set **BandwidthPackageChargeType** to **PREPAY**.

1

PricingCycle

string

No

The billing cycle of the bandwidth plan. Valid values:

-   **Month** (default): The bandwidth plan is billed by month.
    
-   **Year**: The bandwidth plan is billed by year.
    

Month

AutoPay

boolean

No

Specifies whether to enable automatic payment. Valid values:

-   **true**: yes.
    
-   **false** (default): no.
    

If you disable automatic payment, you must go to the Order Hub in the console to complete the payment after you call this operation. Otherwise, the instance cannot be created.

false

AutoRenew

boolean

No

Specifies whether to enable auto-renewal for the bandwidth plan. Valid values:

-   **true**: yes.
    
-   **false** (default): no.
    

**Note**

Only subscription bandwidth plans support auto-renewal.

false

AutoRenewDuration

integer

No

The auto-renewal duration. Unit: months. Valid values: **0** to **2147483647**. Default value: **1**.

1

Tag

array<object>

No

The tags.

You can specify up to 20 tags.

object

No

Key

string

No

The tag key.

The tag key cannot be an empty string. The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.

You can specify up to 20 tag keys.

tagtest

Value

string

No

The tag value.

The tag value can be an empty string or a string of up to 128 characters. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.

Each tag key corresponds to a tag value. You can specify up to 20 tag values.

tagtest

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

The response.

CenBandwidthPackageId

string

The ID of the bandwidth plan.

cenbwp-4c2zaavbvh5fx\*\*\*\*

CenBandwidthPackageOrderId

string

The ID of the order for the bandwidth plan.

20156420004\*\*\*\*

RequestId

string

The request ID.

E4B345CD-2CBA-4881-AF6D-E5D9BAE1CA7B

## Examples

Success response

`JSON` format

```
{
  "CenBandwidthPackageId": "cenbwp-4c2zaavbvh5fx****",
  "CenBandwidthPackageOrderId": "20156420004****",
  "RequestId": "E4B345CD-2CBA-4881-AF6D-E5D9BAE1CA7B"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

UnSupported.ChargeType

The charge type is not supported.

400

ParameterIllegal.BandwidthPackage

The parameter of bandwidth packaged is illegal.

The error message returned because the specified bandwidth plan (BandwidthPackage) is invalid.

400

OperationInvalid.UserCanNotBuyCrossBorderBwp

According to the laws and regulations of the operator and mainland China, you are currently not eligible to purchase or renew a cross-border bandwidth package. Please contact online customer service or your business manager for consultation.

According to the laws and regulations of the operator and mainland China, you are currently not eligible to purchase or renew a cross-border bandwidth package. Please contact online customer service or your business manager for consultation.

400

OperationInvalid.UserCanNotBuyBwp

The user can not buy Cen bandwidthPackage.

400

Order.AccountStatusIllegal

Illegal account status for postpay service not opened for this account.

Illegal account status for postpay service not opened for this account.

400

InvalidParameter

Invalid parameter.

The error message returned because the parameter is set to an invalid value.

400

Unauthorized

The AccessKeyId is unauthorized.

The error message returned because you do not have the permissions to perform this operation.

500

PayFor.AccountMoneyValidateError

Your channel merchant quota is insufficient. Please contact the channel merchant.

Your channel partner does not have sufficient quotas. Contact your channel partner.

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/CreateCenBandwidthPackage#workbench-doc-change-demo) for a complete list.
