-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Datalabeling V1beta1 Client - Class ListDataItemsResponse (0.4.2) Stay organized with collections Save and categorize content based on your preferences.

0.7.2 (latest) 0.7.1 0.6.3 0.5.7 0.4.2 0.3.1 0.2.0 0.1.14

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Cloud Datalabeling V1beta1 Client class ListDataItemsResponse.

Results of listing data items in a dataset.

Generated from protobuf message `google.cloud.datalabeling.v1beta1.ListDataItemsResponse`

## Namespace

Google \\ Cloud \\ DataLabeling \\ V1beta1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ data_items`

`array<[Google\Cloud\DataLabeling\V1beta1\DataItem](/php/docs/reference/cloud-datalabeling/0.4.2/V1beta1.DataItem)>`  

The list of data items to return.

`↳ next_page_token`

`string`  

A token to retrieve next page of results.

### getDataItems

The list of data items to return.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setDataItems

The list of data items to return.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\DataLabeling\V1beta1\DataItem](/php/docs/reference/cloud-datalabeling/0.4.2/V1beta1.DataItem)>`  

**Returns**

**Type**

**Description**

`$this`

### getNextPageToken

A token to retrieve next page of results.

**Returns**

**Type**

**Description**

`string`

### setNextPageToken

A token to retrieve next page of results.

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

Last updated 2026-03-18 UTC.
