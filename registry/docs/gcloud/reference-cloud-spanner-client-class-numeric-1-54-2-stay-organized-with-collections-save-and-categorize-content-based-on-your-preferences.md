-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud Spanner Client - Class Numeric (1.54.2) Stay organized with collections Save and categorize content based on your preferences.

2.6.0 (latest) 2.5.1 2.4.1 2.3.0 2.2.0 2.1.0 2.0.1-RC1 1.106.0 1.105.1 1.104.1 1.103.0 1.102.0 1.101.0 1.100.0 1.98.0 1.97.0 1.96.0 1.95.0 1.94.0 1.93.1 1.92.1 1.91.0 1.90.0 1.89.0 1.88.0 1.87.0 1.86.0 1.85.0 1.84.0 1.83.0 1.82.0 1.81.0 1.80.0 1.79.0 1.78.0 1.77.0 1.76.1 1.68.0 1.67.0 1.66.0 1.65.0 1.64.0 1.63.2 1.62.1 1.61.0 1.60.0 1.59.0 1.58.4 1.57.0 1.56.0 1.55.0 1.54.2

Reference documentation and code samples for the Cloud Spanner Client class Numeric.

Represents a value with a data type of [Numeric](https://cloud.google.com/spanner/docs/data-types#numeric_type).

It supports a fixed 38 decimal digits of precision and 9 decimal digits of scale, and values are in the range of -99999999999999999999999999999.999999999 to 99999999999999999999999999999.999999999.

Example:

```
use Google\Cloud\Spanner\SpannerClient;

$spanner = new SpannerClient();

$numeric = $spanner->numeric('99999999999999999999999999999999999999.999999999');
```

## Methods

### \_\_construct

**Parameter**

**Name**

**Description**

`value`

`string|int|float`  

The NUMERIC value.

### get

Get the underlying value.

**Returns**

**Type**

**Description**

`string`

### type

Get the type.

**Returns**

**Type**

**Description**

`string`

### formatAsString

Format the value as a string.

**Returns**

**Type**

**Description**

`string`

### \_\_toString

Format the value as a string.

**Returns**

**Type**

**Description**

`string`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
