-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud BigQuery Data Exchange V1beta1 Client - Class ListOrgDataExchangesResponse (0.6.3) Stay organized with collections Save and categorize content based on your preferences.

0.6.3 (latest) 0.6.2 0.5.2 0.4.7 0.3.3 0.2.6

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Cloud BigQuery Data Exchange V1beta1 Client class ListOrgDataExchangesResponse.

Message for response to listing data exchanges in an organization and location.

Generated from protobuf message `google.cloud.bigquery.dataexchange.v1beta1.ListOrgDataExchangesResponse`

## Namespace

Google \\ Cloud \\ BigQuery \\ DataExchange \\ V1beta1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ data_exchanges`

`array<[DataExchange](/php/docs/reference/cloud-bigquery-data-exchange/latest/V1beta1.DataExchange)>`  

The list of data exchanges.

`↳ next_page_token`

`string`  

A token to request the next page of results.

### getDataExchanges

The list of data exchanges.

**Returns**

**Type**

**Description**

`[Google\Protobuf\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/RepeatedField)<[DataExchange](/php/docs/reference/cloud-bigquery-data-exchange/latest/V1beta1.DataExchange)>`

### setDataExchanges

The list of data exchanges.

**Parameter**

**Name**

**Description**

`var`

`array<[DataExchange](/php/docs/reference/cloud-bigquery-data-exchange/latest/V1beta1.DataExchange)>`  

**Returns**

**Type**

**Description**

`$this`

### getNextPageToken

A token to request the next page of results.

**Returns**

**Type**

**Description**

`string`

### setNextPageToken

A token to request the next page of results.

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
