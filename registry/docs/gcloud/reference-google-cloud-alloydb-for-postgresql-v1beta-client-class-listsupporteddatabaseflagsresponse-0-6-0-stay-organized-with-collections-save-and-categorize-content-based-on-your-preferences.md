-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud AlloyDB for PostgreSQL V1beta Client - Class ListSupportedDatabaseFlagsResponse (0.6.0) Stay organized with collections Save and categorize content based on your preferences.

1.7.1 (latest) 1.7.0 1.6.3 1.5.0 1.4.1 1.3.0 1.2.0 1.1.3 1.0.0 0.10.3 0.9.0 0.8.0 0.7.1 0.6.0 0.5.0 0.4.0 0.3.0 0.2.1 0.1.3

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Cloud AlloyDB for PostgreSQL V1beta Client class ListSupportedDatabaseFlagsResponse.

Message for response to listing SupportedDatabaseFlags.

Generated from protobuf message `google.cloud.alloydb.v1beta.ListSupportedDatabaseFlagsResponse`

## Namespace

Google \\ Cloud \\ AlloyDb \\ V1beta

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ supported_database_flags`

`array<[Google\Cloud\AlloyDb\V1beta\SupportedDatabaseFlag](/php/docs/reference/cloud-alloydb/0.6.0/V1beta.SupportedDatabaseFlag)>`  

The list of SupportedDatabaseFlags.

`↳ next_page_token`

`string`  

A token identifying a page of results the server should return.

### getSupportedDatabaseFlags

The list of SupportedDatabaseFlags.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setSupportedDatabaseFlags

The list of SupportedDatabaseFlags.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\AlloyDb\V1beta\SupportedDatabaseFlag](/php/docs/reference/cloud-alloydb/0.6.0/V1beta.SupportedDatabaseFlag)>`  

**Returns**

**Type**

**Description**

`$this`

### getNextPageToken

A token identifying a page of results the server should return.

**Returns**

**Type**

**Description**

`string`

### setNextPageToken

A token identifying a page of results the server should return.

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
