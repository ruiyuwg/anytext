-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Ads Marketing Platform Admin V1alpha Client - Class ListAnalyticsAccountLinksResponse (0.1.1) Stay organized with collections Save and categorize content based on your preferences.

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Ads Marketing Platform Admin V1alpha Client class ListAnalyticsAccountLinksResponse.

Response message for ListAnalyticsAccountLinks RPC.

Generated from protobuf message `google.marketingplatform.admin.v1alpha.ListAnalyticsAccountLinksResponse`

## Namespace

Google \\ Ads \\ MarketingPlatform \\ Admin \\ V1alpha

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ analytics_account_links`

`array<[Google\Ads\MarketingPlatform\Admin\V1alpha\AnalyticsAccountLink](/php/docs/reference/googleads/marketingplatform-admin/latest/V1alpha.AnalyticsAccountLink)>`  

Analytics account links in this organization.

`↳ next_page_token`

`string`  

A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.

### getAnalyticsAccountLinks

Analytics account links in this organization.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setAnalyticsAccountLinks

Analytics account links in this organization.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Ads\MarketingPlatform\Admin\V1alpha\AnalyticsAccountLink](/php/docs/reference/googleads/marketingplatform-admin/latest/V1alpha.AnalyticsAccountLink)>`  

**Returns**

**Type**

**Description**

`$this`

### getNextPageToken

A token, which can be sent as `page_token` to retrieve the next page.

If this field is omitted, there are no subsequent pages.

**Returns**

**Type**

**Description**

`string`

### setNextPageToken

A token, which can be sent as `page_token` to retrieve the next page.

If this field is omitted, there are no subsequent pages.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-10-30 UTC.
