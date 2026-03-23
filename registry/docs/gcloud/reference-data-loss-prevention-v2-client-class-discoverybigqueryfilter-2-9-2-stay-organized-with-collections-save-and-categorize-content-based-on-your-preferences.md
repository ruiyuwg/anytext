-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Data Loss Prevention V2 Client - Class DiscoveryBigQueryFilter (2.9.2) Stay organized with collections Save and categorize content based on your preferences.

2.9.2 (latest) 2.9.1 2.8.1 2.7.0 2.6.1 2.4.1 2.3.0 2.2.3 2.1.0 2.0.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.1 1.14.0 1.13.2 1.12.0 1.11.0 1.10.2 1.9.0 1.8.6

Reference documentation and code samples for the Data Loss Prevention V2 Client class DiscoveryBigQueryFilter.

Determines what tables will have profiles generated within an organization or project. Includes the ability to filter by regular expression patterns on project ID, dataset ID, and table ID.

Generated from protobuf message `google.privacy.dlp.v2.DiscoveryBigQueryFilter`

## Namespace

Google \\ Cloud \\ Dlp \\ V2

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ tables`

`[BigQueryTableCollection](/php/docs/reference/cloud-dlp/latest/V2.BigQueryTableCollection)`  

A specific set of tables for this filter to apply to. A table collection must be specified in only one filter per config. If a table id or dataset is empty, Cloud DLP assumes all tables in that collection must be profiled. Must specify a project ID.

`↳ other_tables`

`[DiscoveryBigQueryFilter\AllOtherBigQueryTables](/php/docs/reference/cloud-dlp/latest/V2.DiscoveryBigQueryFilter.AllOtherBigQueryTables)`  

Catch-all. This should always be the last filter in the list because anything above it will apply first. Should only appear once in a configuration. If none is specified, a default one will be added automatically.

`↳ table_reference`

`[TableReference](/php/docs/reference/cloud-dlp/latest/V2.TableReference)`  

The table to scan. Discovery configurations including this can only include one DiscoveryTarget (the DiscoveryTarget with this TableReference).

### getTables

A specific set of tables for this filter to apply to. A table collection must be specified in only one filter per config.

If a table id or dataset is empty, Cloud DLP assumes all tables in that collection must be profiled. Must specify a project ID.

**Returns**

**Type**

**Description**

`[BigQueryTableCollection](/php/docs/reference/cloud-dlp/latest/V2.BigQueryTableCollection)|null`

### hasTables

### setTables

A specific set of tables for this filter to apply to. A table collection must be specified in only one filter per config.

If a table id or dataset is empty, Cloud DLP assumes all tables in that collection must be profiled. Must specify a project ID.

**Parameter**

**Name**

**Description**

`var`

`[BigQueryTableCollection](/php/docs/reference/cloud-dlp/latest/V2.BigQueryTableCollection)`  

**Returns**

**Type**

**Description**

`$this`

### getOtherTables

Catch-all. This should always be the last filter in the list because anything above it will apply first. Should only appear once in a configuration. If none is specified, a default one will be added automatically.

**Returns**

**Type**

**Description**

`[DiscoveryBigQueryFilter\AllOtherBigQueryTables](/php/docs/reference/cloud-dlp/latest/V2.DiscoveryBigQueryFilter.AllOtherBigQueryTables)|null`

### hasOtherTables

### setOtherTables

Catch-all. This should always be the last filter in the list because anything above it will apply first. Should only appear once in a configuration. If none is specified, a default one will be added automatically.

**Parameter**

**Name**

**Description**

`var`

`[DiscoveryBigQueryFilter\AllOtherBigQueryTables](/php/docs/reference/cloud-dlp/latest/V2.DiscoveryBigQueryFilter.AllOtherBigQueryTables)`  

**Returns**

**Type**

**Description**

`$this`

### getTableReference

The table to scan. Discovery configurations including this can only include one DiscoveryTarget (the DiscoveryTarget with this TableReference).

**Returns**

**Type**

**Description**

`[TableReference](/php/docs/reference/cloud-dlp/latest/V2.TableReference)|null`

### hasTableReference

### setTableReference

The table to scan. Discovery configurations including this can only include one DiscoveryTarget (the DiscoveryTarget with this TableReference).

**Parameter**

**Name**

**Description**

`var`

`[TableReference](/php/docs/reference/cloud-dlp/latest/V2.TableReference)`  

**Returns**

**Type**

**Description**

`$this`

### getFilter

**Returns**

**Type**

**Description**

`string`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
