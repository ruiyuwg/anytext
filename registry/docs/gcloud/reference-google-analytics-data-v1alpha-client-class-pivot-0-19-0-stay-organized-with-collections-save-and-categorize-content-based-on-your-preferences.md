-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Analytics Data V1alpha Client - Class Pivot (0.19.0) Stay organized with collections Save and categorize content based on your preferences.

0.23.3 (latest) 0.23.2 0.22.3 0.21.1 0.20.1 0.19.0 0.18.0 0.17.1 0.16.4 0.14.0 0.13.0 0.12.0 0.11.2 0.10.1 0.9.5

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Analytics Data V1alpha Client class Pivot.

Describes the visible dimension columns and rows in the report response.

Generated from protobuf message `google.analytics.data.v1alpha.Pivot`

## Namespace

Google \\ Analytics \\ Data \\ V1alpha

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ field_names`

`string[]`  

Dimension names for visible columns in the report response. Including "dateRange" produces a date range column; for each row in the response, dimension values in the date range column will indicate the corresponding date range from the request.

`↳ order_bys`

`array<[Google\Analytics\Data\V1alpha\OrderBy](/php/docs/reference/analytics-data/0.19.0/V1alpha.OrderBy)>`  

Specifies how dimensions are ordered in the pivot. In the first Pivot, the OrderBys determine Row and PivotDimensionHeader ordering; in subsequent Pivots, the OrderBys determine only PivotDimensionHeader ordering. Dimensions specified in these OrderBys must be a subset of Pivot.field\_names.

`↳ offset`

`int|string`  

The row count of the start row. The first row is counted as row 0.

`↳ limit`

`int|string`  

The number of rows to return in this pivot. If unspecified, 10 rows are returned. If -1, all rows are returned.

`↳ metric_aggregations`

`int[]`  

Aggregate the metrics by dimensions in this pivot using the specified metric\_aggregations.

### getFieldNames

Dimension names for visible columns in the report response. Including "dateRange" produces a date range column; for each row in the response, dimension values in the date range column will indicate the corresponding date range from the request.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setFieldNames

Dimension names for visible columns in the report response. Including "dateRange" produces a date range column; for each row in the response, dimension values in the date range column will indicate the corresponding date range from the request.

**Parameter**

**Name**

**Description**

`var`

`string[]`  

**Returns**

**Type**

**Description**

`$this`

### getOrderBys

Specifies how dimensions are ordered in the pivot. In the first Pivot, the OrderBys determine Row and PivotDimensionHeader ordering; in subsequent Pivots, the OrderBys determine only PivotDimensionHeader ordering.

Dimensions specified in these OrderBys must be a subset of Pivot.field\_names.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setOrderBys

Specifies how dimensions are ordered in the pivot. In the first Pivot, the OrderBys determine Row and PivotDimensionHeader ordering; in subsequent Pivots, the OrderBys determine only PivotDimensionHeader ordering.

Dimensions specified in these OrderBys must be a subset of Pivot.field\_names.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Analytics\Data\V1alpha\OrderBy](/php/docs/reference/analytics-data/0.19.0/V1alpha.OrderBy)>`  

**Returns**

**Type**

**Description**

`$this`

### getOffset

The row count of the start row. The first row is counted as row 0.

**Returns**

**Type**

**Description**

`int|string`

### setOffset

The row count of the start row. The first row is counted as row 0.

**Parameter**

**Name**

**Description**

`var`

`int|string`  

**Returns**

**Type**

**Description**

`$this`

### getLimit

The number of rows to return in this pivot. If unspecified, 10 rows are returned. If -1, all rows are returned.

**Returns**

**Type**

**Description**

`int|string`

### setLimit

The number of rows to return in this pivot. If unspecified, 10 rows are returned. If -1, all rows are returned.

**Parameter**

**Name**

**Description**

`var`

`int|string`  

**Returns**

**Type**

**Description**

`$this`

### getMetricAggregations

Aggregate the metrics by dimensions in this pivot using the specified metric\_aggregations.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setMetricAggregations

Aggregate the metrics by dimensions in this pivot using the specified metric\_aggregations.

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

Last updated 2026-03-19 UTC.
