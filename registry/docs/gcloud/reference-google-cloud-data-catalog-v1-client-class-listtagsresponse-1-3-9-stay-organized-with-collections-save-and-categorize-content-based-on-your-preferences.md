-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Data Catalog V1 Client - Class ListTagsResponse (1.3.9) Stay organized with collections Save and categorize content based on your preferences.

2.4.2 (latest) 2.4.1 2.3.2 2.2.4 2.1.0 2.0.2 1.10.3 1.9.1 1.8.2 1.7.1 1.6.0 1.5.1 1.4.2 1.3.9

Reference documentation and code samples for the Google Cloud Data Catalog V1 Client class ListTagsResponse.

Response message for [ListTags](/php/docs/reference/cloud-data-catalog/1.3.9/V1.DataCatalogClient#_Google_Cloud_DataCatalog_V1_DataCatalogClient__listTags__).

Generated from protobuf message `google.cloud.datacatalog.v1.ListTagsResponse`

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ tags`

`array<[Google\Cloud\DataCatalog\V1\Tag](/php/docs/reference/cloud-data-catalog/1.3.9/V1.Tag)>`  

[Tag](/php/docs/reference/cloud-data-catalog/1.3.9/V1.Tag) details.

`↳ next_page_token`

`string`  

Pagination token of the next results page. Empty if there are no more items in results.

### getTags

[Tag](/php/docs/reference/cloud-data-catalog/1.3.9/V1.Tag) details.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setTags

[Tag](/php/docs/reference/cloud-data-catalog/1.3.9/V1.Tag) details.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\DataCatalog\V1\Tag](/php/docs/reference/cloud-data-catalog/1.3.9/V1.Tag)>`  

**Returns**

**Type**

**Description**

`$this`

### getNextPageToken

Pagination token of the next results page. Empty if there are no more items in results.

**Returns**

**Type**

**Description**

`string`

### setNextPageToken

Pagination token of the next results page. Empty if there are no more items in results.

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
