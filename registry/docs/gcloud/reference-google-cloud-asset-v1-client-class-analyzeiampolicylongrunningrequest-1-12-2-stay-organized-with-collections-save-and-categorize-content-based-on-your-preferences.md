-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Asset V1 Client - Class AnalyzeIamPolicyLongrunningRequest (1.12.2) Stay organized with collections Save and categorize content based on your preferences.

2.3.3 (latest) 2.3.2 2.2.3 2.1.3 2.0.1 1.16.4 1.14.1 1.13.2 1.12.2 1.11.3 1.10.2 1.9.2

Reference documentation and code samples for the Google Cloud Asset V1 Client class AnalyzeIamPolicyLongrunningRequest.

A request message for [AssetService.AnalyzeIamPolicyLongrunning](/php/docs/reference/cloud-asset/1.12.2/V1.AssetServiceClient#_Google_Cloud_Asset_V1_AssetServiceClient__analyzeIamPolicyLongrunning__).

Generated from protobuf message `google.cloud.asset.v1.AnalyzeIamPolicyLongrunningRequest`

## Namespace

Google \\ Cloud \\ Asset \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ analysis_query`

`[Google\Cloud\Asset\V1\IamPolicyAnalysisQuery](/php/docs/reference/cloud-asset/1.12.2/V1.IamPolicyAnalysisQuery)`  

Required. The request query.

`↳ saved_analysis_query`

`string`  

Optional. The name of a saved query, which must be in the format of: \* projects/project\_number/savedQueries/saved\_query\_id \* folders/folder\_number/savedQueries/saved\_query\_id \* organizations/organization\_number/savedQueries/saved\_query\_id If both `analysis_query` and `saved_analysis_query` are provided, they will be merged together with the `saved_analysis_query` as base and the `analysis_query` as overrides. For more details of the merge behavior, please refer to the [MergeFrom](https://developers.google.com/protocol-buffers/docs/reference/cpp/google.protobuf.message#Message.MergeFrom.details) doc. Note that you cannot override primitive fields with default value, such as 0 or empty string, etc., because we use proto3, which doesn't support field presence yet.

`↳ output_config`

`[Google\Cloud\Asset\V1\IamPolicyAnalysisOutputConfig](/php/docs/reference/cloud-asset/1.12.2/V1.IamPolicyAnalysisOutputConfig)`  

Required. Output configuration indicating where the results will be output to.

### getAnalysisQuery

Required. The request query.

**Returns**

**Type**

**Description**

`[Google\Cloud\Asset\V1\IamPolicyAnalysisQuery](/php/docs/reference/cloud-asset/1.12.2/V1.IamPolicyAnalysisQuery)|null`

### hasAnalysisQuery

### clearAnalysisQuery

### setAnalysisQuery

Required. The request query.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Asset\V1\IamPolicyAnalysisQuery](/php/docs/reference/cloud-asset/1.12.2/V1.IamPolicyAnalysisQuery)`  

**Returns**

**Type**

**Description**

`$this`

### getSavedAnalysisQuery

Optional. The name of a saved query, which must be in the format of:

-   projects/project\_number/savedQueries/saved\_query\_id
-   folders/folder\_number/savedQueries/saved\_query\_id
-   organizations/organization\_number/savedQueries/saved\_query\_id If both `analysis_query` and `saved_analysis_query` are provided, they will be merged together with the `saved_analysis_query` as base and the `analysis_query` as overrides. For more details of the merge behavior, please refer to the [MergeFrom](https://developers.google.com/protocol-buffers/docs/reference/cpp/google.protobuf.message#Message.MergeFrom.details) doc.

Note that you cannot override primitive fields with default value, such as 0 or empty string, etc., because we use proto3, which doesn't support field presence yet.

**Returns**

**Type**

**Description**

`string`

### setSavedAnalysisQuery

Optional. The name of a saved query, which must be in the format of:

-   projects/project\_number/savedQueries/saved\_query\_id
-   folders/folder\_number/savedQueries/saved\_query\_id
-   organizations/organization\_number/savedQueries/saved\_query\_id If both `analysis_query` and `saved_analysis_query` are provided, they will be merged together with the `saved_analysis_query` as base and the `analysis_query` as overrides. For more details of the merge behavior, please refer to the [MergeFrom](https://developers.google.com/protocol-buffers/docs/reference/cpp/google.protobuf.message#Message.MergeFrom.details) doc.

Note that you cannot override primitive fields with default value, such as 0 or empty string, etc., because we use proto3, which doesn't support field presence yet.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getOutputConfig

Required. Output configuration indicating where the results will be output to.

**Returns**

**Type**

**Description**

`[Google\Cloud\Asset\V1\IamPolicyAnalysisOutputConfig](/php/docs/reference/cloud-asset/1.12.2/V1.IamPolicyAnalysisOutputConfig)|null`

### hasOutputConfig

### clearOutputConfig

### setOutputConfig

Required. Output configuration indicating where the results will be output to.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Asset\V1\IamPolicyAnalysisOutputConfig](/php/docs/reference/cloud-asset/1.12.2/V1.IamPolicyAnalysisOutputConfig)`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
