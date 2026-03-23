-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dataplex V1 Client - Class Session (0.16.1) Stay organized with collections Save and categorize content based on your preferences.

1.12.0 (latest) 1.11.0 1.10.0 1.9.1 1.8.0 1.7.1 1.6.1 1.4.0 1.3.0 1.2.1 1.1.1 1.0.1 0.16.1 0.15.1 0.14.0 0.13.0 0.12.0 0.11.1 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.1 0.4.0 0.3.0 0.2.3 0.1.6

Reference documentation and code samples for the Google Cloud Dataplex V1 Client class Session.

Represents an active analyze session running for a user.

Generated from protobuf message `google.cloud.dataplex.v1.Session`

## Namespace

Google \\ Cloud \\ Dataplex \\ V1

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

Output only. The relative resource name of the content, of the form: projects/{project\_id}/locations/{location\_id}/lakes/{lake\_id}/environment/{environment\_id}/sessions/{session\_id}

`↳ user_id`

`string`  

Output only. Email of user running the session.

`↳ create_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

Output only. Session start time.

`↳ state`

`int`  

Output only. State of Session

### getName

Output only. The relative resource name of the content, of the form: projects/{project\_id}/locations/{location\_id}/lakes/{lake\_id}/environment/{environment\_id}/sessions/{session\_id}

**Returns**

**Type**

**Description**

`string`

### setName

Output only. The relative resource name of the content, of the form: projects/{project\_id}/locations/{location\_id}/lakes/{lake\_id}/environment/{environment\_id}/sessions/{session\_id}

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getUserId

Output only. Email of user running the session.

**Returns**

**Type**

**Description**

`string`

### setUserId

Output only. Email of user running the session.

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

Output only. Session start time.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasCreateTime

### clearCreateTime

### setCreateTime

Output only. Session start time.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

**Returns**

**Type**

**Description**

`$this`

### getState

Output only. State of Session

**Returns**

**Type**

**Description**

`int`

### setState

Output only. State of Session

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
