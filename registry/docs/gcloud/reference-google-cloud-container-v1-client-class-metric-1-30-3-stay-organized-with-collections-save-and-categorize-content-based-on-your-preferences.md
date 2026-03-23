-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Container V1 Client - Class Metric (1.30.3) Stay organized with collections Save and categorize content based on your preferences.

2.8.1 (latest) 2.8.0 2.7.0 2.6.1 2.5.0 2.4.0 2.3.4 2.2.1 2.1.0 2.0.0 1.33.0 1.32.0 1.31.0 1.30.3 1.24.0 1.23.0 1.22.0 1.21.1 1.20.0 1.19.0 1.18.0 1.17.1 1.16.0 1.15.0 1.14.0 1.13.1 1.12.1 1.10.3 1.9.1

Reference documentation and code samples for the Google Cloud Container V1 Client class Metric.

Progress metric is (string, int|float|string) pair.

Generated from protobuf message `google.container.v1.OperationProgress.Metric`

## Namespace

Google \\ Cloud \\ Container \\ V1 \\ OperationProgress

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ name`

`string`  

Required. Metric name, e.g., "nodes total", "percent done".

`↳ int_value`

`int|string`  

For metrics with integer value.

`↳ double_value`

`float`  

For metrics with floating point value.

`↳ string_value`

`string`  

For metrics with custom values (ratios, visual progress, etc.).

### getName

Required. Metric name, e.g., "nodes total", "percent done".

**Returns**

**Type**

**Description**

`string`

### setName

Required. Metric name, e.g., "nodes total", "percent done".

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getIntValue

For metrics with integer value.

**Returns**

**Type**

**Description**

`int|string`

### hasIntValue

### setIntValue

For metrics with integer value.

**Parameter**

**Name**

**Description**

`var`

`int|string`  

**Returns**

**Type**

**Description**

`$this`

### getDoubleValue

For metrics with floating point value.

**Returns**

**Type**

**Description**

`float`

### hasDoubleValue

### setDoubleValue

For metrics with floating point value.

**Parameter**

**Name**

**Description**

`var`

`float`  

**Returns**

**Type**

**Description**

`$this`

### getStringValue

For metrics with custom values (ratios, visual progress, etc.).

**Returns**

**Type**

**Description**

`string`

### hasStringValue

### setStringValue

For metrics with custom values (ratios, visual progress, etc.).

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getValue

**Returns**

**Type**

**Description**

`string`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
