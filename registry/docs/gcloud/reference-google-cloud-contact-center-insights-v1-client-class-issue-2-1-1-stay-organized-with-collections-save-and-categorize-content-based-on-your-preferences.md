-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Contact Center Insights V1 Client - Class Issue (2.1.1) Stay organized with collections Save and categorize content based on your preferences.

2.4.2 (latest) 2.4.1 2.3.3 2.2.1 2.1.1 2.0.1 1.9.5 1.8.0 1.7.1 1.6.2 1.5.0 1.4.1 1.3.0 1.2.1 1.1.0 1.0.3

Reference documentation and code samples for the Google Cloud Contact Center Insights V1 Client class Issue.

The issue resource.

Generated from protobuf message `google.cloud.contactcenterinsights.v1.Issue`

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

`↳ name`

`string`  

Immutable. The resource name of the issue. Format: projects/{project}/locations/{location}/issueModels/{issue\_model}/issues/{issue}

`↳ display_name`

`string`  

The representative name for the issue.

`↳ create_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

Output only. The time at which this issue was created.

`↳ update_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

Output only. The most recent time that this issue was updated.

`↳ sample_utterances`

`array`  

Output only. Resource names of the sample representative utterances that match to this issue.

`↳ display_description`

`string`  

Representative description of the issue.

### getName

Immutable. The resource name of the issue.

Format: projects/{project}/locations/{location}/issueModels/{issue\_model}/issues/{issue}

**Returns**

**Type**

**Description**

`string`

### setName

Immutable. The resource name of the issue.

Format: projects/{project}/locations/{location}/issueModels/{issue\_model}/issues/{issue}

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getDisplayName

The representative name for the issue.

**Returns**

**Type**

**Description**

`string`

### setDisplayName

The representative name for the issue.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getCreateTime

Output only. The time at which this issue was created.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasCreateTime

### clearCreateTime

### setCreateTime

Output only. The time at which this issue was created.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

**Returns**

**Type**

**Description**

`$this`

### getUpdateTime

Output only. The most recent time that this issue was updated.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasUpdateTime

### clearUpdateTime

### setUpdateTime

Output only. The most recent time that this issue was updated.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

**Returns**

**Type**

**Description**

`$this`

### getSampleUtterances

Output only. Resource names of the sample representative utterances that match to this issue.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setSampleUtterances

Output only. Resource names of the sample representative utterances that match to this issue.

**Parameter**

**Name**

**Description**

`var`

`string[]`  

**Returns**

**Type**

**Description**

`$this`

### getDisplayDescription

Representative description of the issue.

**Returns**

**Type**

**Description**

`string`

### setDisplayDescription

Representative description of the issue.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
