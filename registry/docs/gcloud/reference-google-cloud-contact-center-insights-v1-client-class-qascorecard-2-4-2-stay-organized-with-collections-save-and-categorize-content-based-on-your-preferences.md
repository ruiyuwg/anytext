-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Contact Center Insights V1 Client - Class QaScorecard (2.4.2) Stay organized with collections Save and categorize content based on your preferences.

2.4.2 (latest) 2.4.1 2.3.3 2.2.1 2.1.1 2.0.1 1.9.5 1.8.0 1.7.1 1.6.2 1.5.0 1.4.1 1.3.0 1.2.1 1.1.0 1.0.3

Reference documentation and code samples for the Google Cloud Contact Center Insights V1 Client class QaScorecard.

A QaScorecard represents a collection of questions to be scored during analysis.

Generated from protobuf message `google.cloud.contactcenterinsights.v1.QaScorecard`

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

Identifier. The scorecard name. Format: projects/{project}/locations/{location}/qaScorecards/{qa\_scorecard}

`↳ display_name`

`string`  

The user-specified display name of the scorecard.

`↳ description`

`string`  

A text description explaining the intent of the scorecard.

`↳ create_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

Output only. The time at which this scorecard was created.

`↳ update_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

Output only. The most recent time at which the scorecard was updated.

### getName

Identifier. The scorecard name.

Format: projects/{project}/locations/{location}/qaScorecards/{qa\_scorecard}

**Returns**

**Type**

**Description**

`string`

### setName

Identifier. The scorecard name.

Format: projects/{project}/locations/{location}/qaScorecards/{qa\_scorecard}

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

The user-specified display name of the scorecard.

**Returns**

**Type**

**Description**

`string`

### setDisplayName

The user-specified display name of the scorecard.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getDescription

A text description explaining the intent of the scorecard.

**Returns**

**Type**

**Description**

`string`

### setDescription

A text description explaining the intent of the scorecard.

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

Output only. The time at which this scorecard was created.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasCreateTime

### clearCreateTime

### setCreateTime

Output only. The time at which this scorecard was created.

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

Output only. The most recent time at which the scorecard was updated.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasUpdateTime

### clearUpdateTime

### setUpdateTime

Output only. The most recent time at which the scorecard was updated.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
