-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Shopping Merchant Accounts V1beta Client - Class ReturnShippingFee (0.3.3) Stay organized with collections Save and categorize content based on your preferences.

1.4.0 (latest) 1.3.1 1.2.2 1.1.0 1.0.0 0.10.0 0.9.1 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.3 0.2.0 0.1.0

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Shopping Merchant Accounts V1beta Client class ReturnShippingFee.

The return shipping fee. This can either be a fixed fee or a boolean to indicate that the customer pays the actual shipping cost.

Generated from protobuf message `google.shopping.merchant.accounts.v1beta.OnlineReturnPolicy.ReturnShippingFee`

## Namespace

Google \\ Shopping \\ Merchant \\ Accounts \\ V1beta \\ OnlineReturnPolicy

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ type`

`int`  

Type of return shipping fee.

`↳ fixed_fee`

`[Google\Shopping\Type\Price](https://cloud.google.com/php/docs/reference/shopping-common-protos/latest/Type.Price.html)`  

Fixed return shipping fee amount. This value is only applicable when type is `FIXED`. We will treat the return shipping fee as free if type is `FIXED` and this value is not set.

### getType

Type of return shipping fee.

**Returns**

**Type**

**Description**

`int`

### setType

Type of return shipping fee.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getFixedFee

Fixed return shipping fee amount. This value is only applicable when type is `FIXED`. We will treat the return shipping fee as free if type is `FIXED` and this value is not set.

**Returns**

**Type**

**Description**

`[Google\Shopping\Type\Price](https://cloud.google.com/php/docs/reference/shopping-common-protos/latest/Type.Price.html)|null`

### hasFixedFee

### clearFixedFee

### setFixedFee

Fixed return shipping fee amount. This value is only applicable when type is `FIXED`. We will treat the return shipping fee as free if type is `FIXED` and this value is not set.

**Parameter**

**Name**

**Description**

`var`

`[Google\Shopping\Type\Price](https://cloud.google.com/php/docs/reference/shopping-common-protos/latest/Type.Price.html)`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
