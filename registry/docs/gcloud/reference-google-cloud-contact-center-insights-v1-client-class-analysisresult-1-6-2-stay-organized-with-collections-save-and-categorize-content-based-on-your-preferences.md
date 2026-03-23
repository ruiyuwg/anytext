-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Contact Center Insights V1 Client - Class AnalysisResult (1.6.2) Stay organized with collections Save and categorize content based on your preferences.

2.4.2 (latest) 2.4.1 2.3.3 2.2.1 2.1.1 2.0.1 1.9.5 1.8.0 1.7.1 1.6.2 1.5.0 1.4.1 1.3.0 1.2.1 1.1.0 1.0.3

Reference documentation and code samples for the Google Cloud Contact Center Insights V1 Client class AnalysisResult.

The result of an analysis.

Generated from protobuf message `google.cloud.contactcenterinsights.v1.AnalysisResult`

## Namespace

Google \\ Cloud \\ ContactCenterInsights \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ call_analysis_metadata`

`[Google\Cloud\ContactCenterInsights\V1\AnalysisResult\CallAnalysisMetadata](/php/docs/reference/cloud-contact-center-insights/1.6.2/V1.AnalysisResult.CallAnalysisMetadata)`  

Call-specific metadata created by the analysis.

`↳ end_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

The time at which the analysis ended.

### getCallAnalysisMetadata

Call-specific metadata created by the analysis.

**Returns**

**Type**

**Description**

`[Google\Cloud\ContactCenterInsights\V1\AnalysisResult\CallAnalysisMetadata](/php/docs/reference/cloud-contact-center-insights/1.6.2/V1.AnalysisResult.CallAnalysisMetadata)|null`

### hasCallAnalysisMetadata

### setCallAnalysisMetadata

Call-specific metadata created by the analysis.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\ContactCenterInsights\V1\AnalysisResult\CallAnalysisMetadata](/php/docs/reference/cloud-contact-center-insights/1.6.2/V1.AnalysisResult.CallAnalysisMetadata)`  

**Returns**

**Type**

**Description**

`$this`

### getEndTime

The time at which the analysis ended.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasEndTime

### clearEndTime

### setEndTime

The time at which the analysis ended.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

**Returns**

**Type**

**Description**

`$this`

### getMetadata

**Returns**

**Type**

**Description**

`string`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
