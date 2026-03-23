-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Channel V1 Client - Class ListPurchasableOffersResponse (1.6.0) Stay organized with collections Save and categorize content based on your preferences.

2.4.1 (latest) 2.4.0 2.3.1 2.2.1 2.1.4 2.0.0 1.9.5 1.8.2 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.1 1.1.1 1.0.1

Reference documentation and code samples for the Google Cloud Channel V1 Client class ListPurchasableOffersResponse.

Response message for ListPurchasableOffers.

Generated from protobuf message `google.cloud.channel.v1.ListPurchasableOffersResponse`

## Namespace

Google \\ Cloud \\ Channel \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ purchasable_offers`

`array<[Google\Cloud\Channel\V1\PurchasableOffer](/php/docs/reference/cloud-channel/1.6.0/V1.PurchasableOffer)>`  

The list of Offers requested.

`↳ next_page_token`

`string`  

A token to retrieve the next page of results.

### getPurchasableOffers

The list of Offers requested.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setPurchasableOffers

The list of Offers requested.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\Channel\V1\PurchasableOffer](/php/docs/reference/cloud-channel/1.6.0/V1.PurchasableOffer)>`  

**Returns**

**Type**

**Description**

`$this`

### getNextPageToken

A token to retrieve the next page of results.

**Returns**

**Type**

**Description**

`string`

### setNextPageToken

A token to retrieve the next page of results.

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

Last updated 2026-03-19 UTC.
