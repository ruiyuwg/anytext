-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Shopping Merchant Accounts V1beta Client - Class GetShippingSettingsRequest (0.1.0) Stay organized with collections Save and categorize content based on your preferences.

1.4.0 (latest) 1.3.1 1.2.2 1.1.0 1.0.0 0.10.0 0.9.1 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.3 0.2.0 0.1.0

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Shopping Merchant Accounts V1beta Client class GetShippingSettingsRequest.

Request message for the `GetShippingSetting` method.

Generated from protobuf message `google.shopping.merchant.accounts.v1beta.GetShippingSettingsRequest`

## Namespace

Google \\ Shopping \\ Merchant \\ Accounts \\ V1beta

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ name`

`string`  

Required. The name of the shipping setting to retrieve. Format: `accounts/{account}/shippingsetting`

### getName

Required. The name of the shipping setting to retrieve.

Format: `accounts/{account}/shippingsetting`

**Returns**

**Type**

**Description**

`string`

### setName

Required. The name of the shipping setting to retrieve.

Format: `accounts/{account}/shippingsetting`

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### static::build

**Parameter**

**Name**

**Description**

`name`

`string`  

Required. The name of the shipping setting to retrieve. Format: `accounts/{account}/shippingsetting` Please see Google\\Shopping\\Merchant\\Accounts\\V1beta\\ShippingSettingsServiceClient::shippingSettingsName() for help formatting this field.

**Returns**

**Type**

**Description**

`[Google\Shopping\Merchant\Accounts\V1beta\GetShippingSettingsRequest](/php/docs/reference/shopping-merchant-accounts/0.1.0/V1beta.GetShippingSettingsRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
