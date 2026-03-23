-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Migration Center V1 Client - Class ReportSummary (0.1.0) Stay organized with collections Save and categorize content based on your preferences.

1.2.3 (latest) 1.2.2 1.1.2 1.0.3 0.4.5 0.3.1 0.2.0 0.1.0

Reference documentation and code samples for the Google Cloud Migration Center V1 Client class ReportSummary.

Describes the Summary view of a Report, which contains aggregated values for all the groups and preference sets included in this Report.

Generated from protobuf message `google.cloud.migrationcenter.v1.ReportSummary`

## Namespace

Google \\ Cloud \\ MigrationCenter \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ all_assets_stats`

`[Google\Cloud\MigrationCenter\V1\ReportSummary\AssetAggregateStats](/php/docs/reference/cloud-migrationcenter/0.1.0/V1.ReportSummary.AssetAggregateStats)`  

Aggregate statistics for all the assets across all the groups.

`↳ group_findings`

`array<[Google\Cloud\MigrationCenter\V1\ReportSummary\GroupFinding](/php/docs/reference/cloud-migrationcenter/0.1.0/V1.ReportSummary.GroupFinding)>`  

Findings for each Group included in this report.

### getAllAssetsStats

Aggregate statistics for all the assets across all the groups.

**Returns**

**Type**

**Description**

`[Google\Cloud\MigrationCenter\V1\ReportSummary\AssetAggregateStats](/php/docs/reference/cloud-migrationcenter/0.1.0/V1.ReportSummary.AssetAggregateStats)|null`

### hasAllAssetsStats

### clearAllAssetsStats

### setAllAssetsStats

Aggregate statistics for all the assets across all the groups.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\MigrationCenter\V1\ReportSummary\AssetAggregateStats](/php/docs/reference/cloud-migrationcenter/0.1.0/V1.ReportSummary.AssetAggregateStats)`  

**Returns**

**Type**

**Description**

`$this`

### getGroupFindings

Findings for each Group included in this report.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setGroupFindings

Findings for each Group included in this report.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\MigrationCenter\V1\ReportSummary\GroupFinding](/php/docs/reference/cloud-migrationcenter/0.1.0/V1.ReportSummary.GroupFinding)>`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
