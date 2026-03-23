-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Migration Center V1 Client - Class ComputeEngineFinding (0.2.0) Stay organized with collections Save and categorize content based on your preferences.

1.2.3 (latest) 1.2.2 1.1.2 1.0.3 0.4.5 0.3.1 0.2.0 0.1.0

Reference documentation and code samples for the Google Cloud Migration Center V1 Client class ComputeEngineFinding.

A set of findings that applies to assets destined for Compute Engine.

Generated from protobuf message `google.cloud.migrationcenter.v1.ReportSummary.ComputeEngineFinding`

## Namespace

Google \\ Cloud \\ MigrationCenter \\ V1 \\ ReportSummary

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ allocated_regions`

`array`  

Set of regions in which the assets were allocated.

`↳ allocated_asset_count`

`int|string`  

Count of assets which were allocated.

`↳ machine_series_allocations`

`array<[Google\Cloud\MigrationCenter\V1\ReportSummary\MachineSeriesAllocation](/php/docs/reference/cloud-migrationcenter/0.2.0/V1.ReportSummary.MachineSeriesAllocation)>`  

Distribution of assets based on the Machine Series.

`↳ allocated_disk_types`

`array`  

Set of disk types allocated to assets.

### getAllocatedRegions

Set of regions in which the assets were allocated.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setAllocatedRegions

Set of regions in which the assets were allocated.

**Parameter**

**Name**

**Description**

`var`

`string[]`  

**Returns**

**Type**

**Description**

`$this`

### getAllocatedAssetCount

Count of assets which were allocated.

**Returns**

**Type**

**Description**

`int|string`

### setAllocatedAssetCount

Count of assets which were allocated.

**Parameter**

**Name**

**Description**

`var`

`int|string`  

**Returns**

**Type**

**Description**

`$this`

### getMachineSeriesAllocations

Distribution of assets based on the Machine Series.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setMachineSeriesAllocations

Distribution of assets based on the Machine Series.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\MigrationCenter\V1\ReportSummary\MachineSeriesAllocation](/php/docs/reference/cloud-migrationcenter/0.2.0/V1.ReportSummary.MachineSeriesAllocation)>`  

**Returns**

**Type**

**Description**

`$this`

### getAllocatedDiskTypes

Set of disk types allocated to assets.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setAllocatedDiskTypes

Set of disk types allocated to assets.

**Parameter**

**Name**

**Description**

`var`

`int[]`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
