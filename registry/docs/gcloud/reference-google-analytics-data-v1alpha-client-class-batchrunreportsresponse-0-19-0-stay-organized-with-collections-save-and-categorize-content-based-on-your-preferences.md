-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Analytics Data V1alpha Client - Class BatchRunReportsResponse (0.19.0) Stay organized with collections Save and categorize content based on your preferences.

0.23.3 (latest) 0.23.2 0.22.3 0.21.1 0.20.1 0.19.0 0.18.0 0.17.1 0.16.4 0.14.0 0.13.0 0.12.0 0.11.2 0.10.1 0.9.5

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Analytics Data V1alpha Client class BatchRunReportsResponse.

The batch response containing multiple reports.

Generated from protobuf message `google.analytics.data.v1alpha.BatchRunReportsResponse`

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

`↳ reports`

`array<[Google\Analytics\Data\V1alpha\RunReportResponse](/php/docs/reference/analytics-data/0.19.0/V1alpha.RunReportResponse)>`  

Individual responses. Each response has a separate report request.

### getReports

Individual responses. Each response has a separate report request.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setReports

Individual responses. Each response has a separate report request.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Analytics\Data\V1alpha\RunReportResponse](/php/docs/reference/analytics-data/0.19.0/V1alpha.RunReportResponse)>`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
