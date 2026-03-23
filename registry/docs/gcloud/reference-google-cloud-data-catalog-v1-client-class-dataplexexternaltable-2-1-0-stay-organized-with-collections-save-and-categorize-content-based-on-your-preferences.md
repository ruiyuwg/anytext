-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Data Catalog V1 Client - Class DataplexExternalTable (2.1.0) Stay organized with collections Save and categorize content based on your preferences.

2.4.2 (latest) 2.4.1 2.3.2 2.2.4 2.1.0 2.0.2 1.10.3 1.9.1 1.8.2 1.7.1 1.6.0 1.5.1 1.4.2 1.3.9

Reference documentation and code samples for the Google Cloud Data Catalog V1 Client class DataplexExternalTable.

External table registered by Dataplex.

Dataplex publishes data discovered from an asset into multiple other systems (BigQuery, DPMS) in form of tables. We call them "external tables". External tables are also synced into the Data Catalog. This message contains pointers to those external tables (fully qualified name, resource name et cetera) within the Data Catalog.

Generated from protobuf message `google.cloud.datacatalog.v1.DataplexExternalTable`

## Namespace

Google \\ Cloud \\ DataCatalog \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ system`

`int`  

Service in which the external table is registered.

`↳ fully_qualified_name`

`string`  

Fully qualified name (FQN) of the external table.

`↳ google_cloud_resource`

`string`  

Google Cloud resource name of the external table.

`↳ data_catalog_entry`

`string`  

Name of the Data Catalog entry representing the external table.

### getSystem

Service in which the external table is registered.

**Returns**

**Type**

**Description**

`int`

### setSystem

Service in which the external table is registered.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getFullyQualifiedName

Fully qualified name (FQN) of the external table.

**Returns**

**Type**

**Description**

`string`

### setFullyQualifiedName

Fully qualified name (FQN) of the external table.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getGoogleCloudResource

Google Cloud resource name of the external table.

**Returns**

**Type**

**Description**

`string`

### setGoogleCloudResource

Google Cloud resource name of the external table.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getDataCatalogEntry

Name of the Data Catalog entry representing the external table.

**Returns**

**Type**

**Description**

`string`

### setDataCatalogEntry

Name of the Data Catalog entry representing the external table.

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
