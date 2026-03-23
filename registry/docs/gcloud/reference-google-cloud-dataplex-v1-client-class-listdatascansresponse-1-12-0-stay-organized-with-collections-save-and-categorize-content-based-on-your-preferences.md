-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dataplex V1 Client - Class ListDataScansResponse (1.12.0) Stay organized with collections Save and categorize content based on your preferences.

1.12.0 (latest) 1.11.0 1.10.0 1.9.1 1.8.0 1.7.1 1.6.1 1.4.0 1.3.0 1.2.1 1.1.1 1.0.1 0.16.1 0.15.1 0.14.0 0.13.0 0.12.0 0.11.1 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.1 0.4.0 0.3.0 0.2.3 0.1.6

Reference documentation and code samples for the Google Cloud Dataplex V1 Client class ListDataScansResponse.

List dataScans response.

Generated from protobuf message `google.cloud.dataplex.v1.ListDataScansResponse`

## Namespace

Google \\ Cloud \\ Dataplex \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ data_scans`

`array<[DataScan](/php/docs/reference/cloud-dataplex/latest/V1.DataScan)>`  

DataScans (`BASIC` view only) under the given parent location.

`↳ next_page_token`

`string`  

Token to retrieve the next page of results, or empty if there are no more results in the list.

`↳ unreachable`

`string[]`  

Locations that could not be reached.

### getDataScans

DataScans (`BASIC` view only) under the given parent location.

**Returns**

**Type**

**Description**

`[Google\Protobuf\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/RepeatedField)<[DataScan](/php/docs/reference/cloud-dataplex/latest/V1.DataScan)>`

### setDataScans

DataScans (`BASIC` view only) under the given parent location.

**Parameter**

**Name**

**Description**

`var`

`array<[DataScan](/php/docs/reference/cloud-dataplex/latest/V1.DataScan)>`  

**Returns**

**Type**

**Description**

`$this`

### getNextPageToken

Token to retrieve the next page of results, or empty if there are no more results in the list.

**Returns**

**Type**

**Description**

`string`

### setNextPageToken

Token to retrieve the next page of results, or empty if there are no more results in the list.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getUnreachable

Locations that could not be reached.

**Returns**

**Type**

**Description**

`[Google\Protobuf\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/RepeatedField)<string>`

### setUnreachable

Locations that could not be reached.

**Parameter**

**Name**

**Description**

`var`

`string[]`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
