-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Shopping Merchant Accounts V1 Client - Class GetAutofeedSettingsRequest (1.4.0) Stay organized with collections Save and categorize content based on your preferences.

1.4.0 (latest) 1.3.1 1.2.2 1.1.0 1.0.0 0.10.0 0.9.1 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.3 0.2.0 0.1.0

Reference documentation and code samples for the Google Shopping Merchant Accounts V1 Client class GetAutofeedSettingsRequest.

Request message for the `GetAutofeedSettings` method.

Generated from protobuf message `google.shopping.merchant.accounts.v1.GetAutofeedSettingsRequest`

## Namespace

Google \\ Shopping \\ Merchant \\ Accounts \\ V1

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

Required. The resource name of the autofeed settings. Format: `accounts/{account}/autofeedSettings`

### getName

Required. The resource name of the autofeed settings.

Format: `accounts/{account}/autofeedSettings`

**Returns**

**Type**

**Description**

`string`

### setName

Required. The resource name of the autofeed settings.

Format: `accounts/{account}/autofeedSettings`

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

Required. The resource name of the autofeed settings. Format: `accounts/{account}/autofeedSettings` Please see AutofeedSettingsServiceClient::autofeedSettingsName() for help formatting this field.

**Returns**

**Type**

**Description**

`[GetAutofeedSettingsRequest](/php/docs/reference/shopping-merchant-accounts/latest/V1.GetAutofeedSettingsRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
