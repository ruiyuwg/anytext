-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Security Command Center V1 Client - Class ListBigQueryExportsResponse (1.28.2) Stay organized with collections Save and categorize content based on your preferences.

2.5.0 (latest) 2.4.2 2.3.0 2.2.1 2.1.1 2.0.4 1.32.0 1.31.0 1.30.0 1.29.0 1.28.2 1.21.0 1.20.2 1.19.1 1.18.0 1.17.0 1.16.0 1.15.1 1.14.2 1.13.1

Reference documentation and code samples for the Google Cloud Security Command Center V1 Client class ListBigQueryExportsResponse.

Response message for listing BigQuery exports.

Generated from protobuf message `google.cloud.securitycenter.v1.ListBigQueryExportsResponse`

## Namespace

Google \\ Cloud \\ SecurityCenter \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ big_query_exports`

`array<[Google\Cloud\SecurityCenter\V1\BigQueryExport](/php/docs/reference/cloud-security-center/1.28.2/V1.BigQueryExport)>`  

The BigQuery exports from the specified parent.

`↳ next_page_token`

`string`  

A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.

### getBigQueryExports

The BigQuery exports from the specified parent.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setBigQueryExports

The BigQuery exports from the specified parent.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\SecurityCenter\V1\BigQueryExport](/php/docs/reference/cloud-security-center/1.28.2/V1.BigQueryExport)>`  

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

Last updated 2026-03-18 UTC.
