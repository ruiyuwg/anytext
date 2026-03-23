-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Data Loss Prevention V2 Client - Class BigQueryDiscoveryTarget (1.17.0) Stay organized with collections Save and categorize content based on your preferences.

2.9.2 (latest) 2.9.1 2.8.1 2.7.0 2.6.1 2.4.1 2.3.0 2.2.3 2.1.0 2.0.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.1 1.14.0 1.13.2 1.12.0 1.11.0 1.10.2 1.9.0 1.8.6

Reference documentation and code samples for the Data Loss Prevention V2 Client class BigQueryDiscoveryTarget.

Target used to match against for discovery with BigQuery tables

Generated from protobuf message `google.privacy.dlp.v2.BigQueryDiscoveryTarget`

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

`↳ filter`

`[Google\Cloud\Dlp\V2\DiscoveryBigQueryFilter](/php/docs/reference/cloud-dlp/1.17.0/V2.DiscoveryBigQueryFilter)`  

Required. The tables the discovery cadence applies to. The first target with a matching filter will be the one to apply to a table.

`↳ conditions`

`[Google\Cloud\Dlp\V2\DiscoveryBigQueryConditions](/php/docs/reference/cloud-dlp/1.17.0/V2.DiscoveryBigQueryConditions)`  

In addition to matching the filter, these conditions must be true before a profile is generated.

`↳ cadence`

`[Google\Cloud\Dlp\V2\DiscoveryGenerationCadence](/php/docs/reference/cloud-dlp/1.17.0/V2.DiscoveryGenerationCadence)`  

How often and when to update profiles. New tables that match both the filter and conditions are scanned as quickly as possible depending on system capacity.

`↳ disabled`

`[Google\Cloud\Dlp\V2\Disabled](/php/docs/reference/cloud-dlp/1.17.0/V2.Disabled)`  

Tables that match this filter will not have profiles created.

### getFilter

Required. The tables the discovery cadence applies to. The first target with a matching filter will be the one to apply to a table.

**Returns**

**Type**

**Description**

`[Google\Cloud\Dlp\V2\DiscoveryBigQueryFilter](/php/docs/reference/cloud-dlp/1.17.0/V2.DiscoveryBigQueryFilter)|null`

### hasFilter

### clearFilter

### setFilter

Required. The tables the discovery cadence applies to. The first target with a matching filter will be the one to apply to a table.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Dlp\V2\DiscoveryBigQueryFilter](/php/docs/reference/cloud-dlp/1.17.0/V2.DiscoveryBigQueryFilter)`  

**Returns**

**Type**

**Description**

`$this`

### getConditions

In addition to matching the filter, these conditions must be true before a profile is generated.

**Returns**

**Type**

**Description**

`[Google\Cloud\Dlp\V2\DiscoveryBigQueryConditions](/php/docs/reference/cloud-dlp/1.17.0/V2.DiscoveryBigQueryConditions)|null`

### hasConditions

### clearConditions

### setConditions

In addition to matching the filter, these conditions must be true before a profile is generated.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Dlp\V2\DiscoveryBigQueryConditions](/php/docs/reference/cloud-dlp/1.17.0/V2.DiscoveryBigQueryConditions)`  

**Returns**

**Type**

**Description**

`$this`

### getCadence

How often and when to update profiles. New tables that match both the filter and conditions are scanned as quickly as possible depending on system capacity.

**Returns**

**Type**

**Description**

`[Google\Cloud\Dlp\V2\DiscoveryGenerationCadence](/php/docs/reference/cloud-dlp/1.17.0/V2.DiscoveryGenerationCadence)|null`

### hasCadence

### setCadence

How often and when to update profiles. New tables that match both the filter and conditions are scanned as quickly as possible depending on system capacity.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Dlp\V2\DiscoveryGenerationCadence](/php/docs/reference/cloud-dlp/1.17.0/V2.DiscoveryGenerationCadence)`  

**Returns**

**Type**

**Description**

`$this`

### getDisabled

Tables that match this filter will not have profiles created.

**Returns**

**Type**

**Description**

`[Google\Cloud\Dlp\V2\Disabled](/php/docs/reference/cloud-dlp/1.17.0/V2.Disabled)|null`

### hasDisabled

### setDisabled

Tables that match this filter will not have profiles created.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Dlp\V2\Disabled](/php/docs/reference/cloud-dlp/1.17.0/V2.Disabled)`  

**Returns**

**Type**

**Description**

`$this`

### getFrequency

**Returns**

**Type**

**Description**

`string`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
