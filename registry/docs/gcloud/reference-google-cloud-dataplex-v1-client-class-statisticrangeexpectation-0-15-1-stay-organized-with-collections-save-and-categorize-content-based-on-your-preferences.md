-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dataplex V1 Client - Class StatisticRangeExpectation (0.15.1) Stay organized with collections Save and categorize content based on your preferences.

1.12.0 (latest) 1.11.0 1.10.0 1.9.1 1.8.0 1.7.1 1.6.1 1.4.0 1.3.0 1.2.1 1.1.1 1.0.1 0.16.1 0.15.1 0.14.0 0.13.0 0.12.0 0.11.1 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.1 0.4.0 0.3.0 0.2.3 0.1.6

Reference documentation and code samples for the Google Cloud Dataplex V1 Client class StatisticRangeExpectation.

Evaluates whether the column aggregate statistic lies between a specified range.

Generated from protobuf message `google.cloud.dataplex.v1.DataQualityRule.StatisticRangeExpectation`

## Namespace

Google \\ Cloud \\ Dataplex \\ V1 \\ DataQualityRule

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ statistic`

`int`  

Optional. The aggregate metric to evaluate.

`↳ min_value`

`string`  

Optional. The minimum column statistic value allowed for a row to pass this validation. At least one of `min_value` and `max_value` need to be provided.

`↳ max_value`

`string`  

Optional. The maximum column statistic value allowed for a row to pass this validation. At least one of `min_value` and `max_value` need to be provided.

`↳ strict_min_enabled`

`bool`  

Optional. Whether column statistic needs to be strictly greater than ('>') the minimum, or if equality is allowed. Only relevant if a `min_value` has been defined. Default = false.

`↳ strict_max_enabled`

`bool`  

Optional. Whether column statistic needs to be strictly lesser than ('<') the maximum, or if equality is allowed. Only relevant if a `max_value` has been defined. Default = false.

### getStatistic

Optional. The aggregate metric to evaluate.

**Returns**

**Type**

**Description**

`int`

### setStatistic

Optional. The aggregate metric to evaluate.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getMinValue

Optional. The minimum column statistic value allowed for a row to pass this validation.

At least one of `min_value` and `max_value` need to be provided.

**Returns**

**Type**

**Description**

`string`

### setMinValue

Optional. The minimum column statistic value allowed for a row to pass this validation.

At least one of `min_value` and `max_value` need to be provided.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getMaxValue

Optional. The maximum column statistic value allowed for a row to pass this validation.

At least one of `min_value` and `max_value` need to be provided.

**Returns**

**Type**

**Description**

`string`

### setMaxValue

Optional. The maximum column statistic value allowed for a row to pass this validation.

At least one of `min_value` and `max_value` need to be provided.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getStrictMinEnabled

Optional. Whether column statistic needs to be strictly greater than ('>') the minimum, or if equality is allowed.

Only relevant if a `min_value` has been defined. Default = false.

**Returns**

**Type**

**Description**

`bool`

### setStrictMinEnabled

Optional. Whether column statistic needs to be strictly greater than ('>') the minimum, or if equality is allowed.

Only relevant if a `min_value` has been defined. Default = false.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

### getStrictMaxEnabled

Optional. Whether column statistic needs to be strictly lesser than ('<') the maximum, or if equality is allowed.

Only relevant if a `max_value` has been defined. Default = false.

**Returns**

**Type**

**Description**

`bool`

### setStrictMaxEnabled

Optional. Whether column statistic needs to be strictly lesser than ('<') the maximum, or if equality is allowed.

Only relevant if a `max_value` has been defined. Default = false.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
