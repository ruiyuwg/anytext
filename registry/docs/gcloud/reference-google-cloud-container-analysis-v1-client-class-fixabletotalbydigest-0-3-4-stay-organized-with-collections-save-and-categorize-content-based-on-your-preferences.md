-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Container Analysis V1 Client - Class FixableTotalByDigest (0.3.4) Stay organized with collections Save and categorize content based on your preferences.

1.2.2 (latest) 1.2.1 1.1.1 1.0.4 0.5.7 0.4.0 0.3.4 0.2.15

Reference documentation and code samples for the Google Cloud Container Analysis V1 Client class FixableTotalByDigest.

Per resource and severity counts of fixable and total vulnerabilities.

Generated from protobuf message `google.devtools.containeranalysis.v1.VulnerabilityOccurrencesSummary.FixableTotalByDigest`

## Namespace

Google \\ Cloud \\ ContainerAnalysis \\ V1 \\ VulnerabilityOccurrencesSummary

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ resource_uri`

`string`  

The affected resource.

`↳ severity`

`int`  

The severity for this count. SEVERITY\_UNSPECIFIED indicates total across all severities.

`↳ fixable_count`

`int|string`  

The number of fixable vulnerabilities associated with this resource.

`↳ total_count`

`int|string`  

The total number of vulnerabilities associated with this resource.

### getResourceUri

The affected resource.

**Returns**

**Type**

**Description**

`string`

### setResourceUri

The affected resource.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getSeverity

The severity for this count. SEVERITY\_UNSPECIFIED indicates total across all severities.

**Returns**

**Type**

**Description**

`int`

### setSeverity

The severity for this count. SEVERITY\_UNSPECIFIED indicates total across all severities.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getFixableCount

The number of fixable vulnerabilities associated with this resource.

**Returns**

**Type**

**Description**

`int|string`

### setFixableCount

The number of fixable vulnerabilities associated with this resource.

**Parameter**

**Name**

**Description**

`var`

`int|string`  

**Returns**

**Type**

**Description**

`$this`

### getTotalCount

The total number of vulnerabilities associated with this resource.

**Returns**

**Type**

**Description**

`int|string`

### setTotalCount

The total number of vulnerabilities associated with this resource.

**Parameter**

**Name**

**Description**

`var`

`int|string`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
