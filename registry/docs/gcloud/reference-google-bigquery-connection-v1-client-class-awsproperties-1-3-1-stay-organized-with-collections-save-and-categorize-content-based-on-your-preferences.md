-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google BigQuery Connection V1 Client - Class AwsProperties (1.3.1) Stay organized with collections Save and categorize content based on your preferences.

2.1.3 (latest) 2.1.2 2.0.5 1.5.5 1.4.1 1.3.1 1.2.2 1.1.0 1.0.3

Reference documentation and code samples for the Google BigQuery Connection V1 Client class AwsProperties.

Connection properties specific to Amazon Web Services (AWS).

Generated from protobuf message `google.cloud.bigquery.connection.v1.AwsProperties`

## Namespace

Google \\ Cloud \\ BigQuery \\ Connection \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ cross_account_role`

`[Google\Cloud\BigQuery\Connection\V1\AwsCrossAccountRole](/php/docs/reference/cloud-bigquery-connection/1.3.1/V1.AwsCrossAccountRole)`  

Authentication using Google owned AWS IAM user's access key to assume into customer's AWS IAM Role. Deprecated, do not use.

`↳ access_role`

`[Google\Cloud\BigQuery\Connection\V1\AwsAccessRole](/php/docs/reference/cloud-bigquery-connection/1.3.1/V1.AwsAccessRole)`  

Authentication using Google owned service account to assume into customer's AWS IAM Role.

### getCrossAccountRole

Authentication using Google owned AWS IAM user's access key to assume into customer's AWS IAM Role.

Deprecated, do not use.

**Returns**

**Type**

**Description**

`[Google\Cloud\BigQuery\Connection\V1\AwsCrossAccountRole](/php/docs/reference/cloud-bigquery-connection/1.3.1/V1.AwsCrossAccountRole)|null`

### hasCrossAccountRole

### setCrossAccountRole

Authentication using Google owned AWS IAM user's access key to assume into customer's AWS IAM Role.

Deprecated, do not use.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\BigQuery\Connection\V1\AwsCrossAccountRole](/php/docs/reference/cloud-bigquery-connection/1.3.1/V1.AwsCrossAccountRole)`  

**Returns**

**Type**

**Description**

`$this`

### getAccessRole

Authentication using Google owned service account to assume into customer's AWS IAM Role.

**Returns**

**Type**

**Description**

`[Google\Cloud\BigQuery\Connection\V1\AwsAccessRole](/php/docs/reference/cloud-bigquery-connection/1.3.1/V1.AwsAccessRole)|null`

### hasAccessRole

### setAccessRole

Authentication using Google owned service account to assume into customer's AWS IAM Role.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\BigQuery\Connection\V1\AwsAccessRole](/php/docs/reference/cloud-bigquery-connection/1.3.1/V1.AwsAccessRole)`  

**Returns**

**Type**

**Description**

`$this`

### getAuthenticationMethod

**Returns**

**Type**

**Description**

`string`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
