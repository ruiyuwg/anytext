-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dialogflow Cx V3 Client - Class CreateVersionRequest (0.6.0) Stay organized with collections Save and categorize content based on your preferences.

0.10.2 (latest) 0.10.1 0.9.2 0.8.1 0.7.2 0.6.0 0.5.2 0.4.1 0.3.4 0.2.1 0.1.1

Reference documentation and code samples for the Google Cloud Dialogflow Cx V3 Client class CreateVersionRequest.

The request message for [Versions.CreateVersion](/php/docs/reference/cloud-dialogflow-cx/0.6.0/V3.Client.VersionsClient#_Google_Cloud_Dialogflow_Cx_V3_Client_VersionsClient__createVersion__).

Generated from protobuf message `google.cloud.dialogflow.cx.v3.CreateVersionRequest`

## Namespace

Google \\ Cloud \\ Dialogflow \\ Cx \\ V3

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ parent`

`string`  

Required. The [Flow](/php/docs/reference/cloud-dialogflow-cx/0.6.0/V3.Flow) to create an [Version](/php/docs/reference/cloud-dialogflow-cx/0.6.0/V3.Version) for. Format: `projects/<ProjectID>/locations/<LocationID>/agents/<AgentID>/flows/<FlowID>`.

`↳ version`

`[Version](/php/docs/reference/cloud-dialogflow-cx/0.6.0/V3.Version)`  

Required. The version to create.

### getParent

Required. The [Flow](/php/docs/reference/cloud-dialogflow-cx/0.6.0/V3.Flow) to create an [Version](/php/docs/reference/cloud-dialogflow-cx/0.6.0/V3.Version) for. Format: `projects/<ProjectID>/locations/<LocationID>/agents/<AgentID>/flows/<FlowID>`.

**Returns**

**Type**

**Description**

`string`

### setParent

Required. The [Flow](/php/docs/reference/cloud-dialogflow-cx/0.6.0/V3.Flow) to create an [Version](/php/docs/reference/cloud-dialogflow-cx/0.6.0/V3.Version) for. Format: `projects/<ProjectID>/locations/<LocationID>/agents/<AgentID>/flows/<FlowID>`.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getVersion

Required. The version to create.

**Returns**

**Type**

**Description**

`[Version](/php/docs/reference/cloud-dialogflow-cx/0.6.0/V3.Version)|null`

### hasVersion

### clearVersion

### setVersion

Required. The version to create.

**Parameter**

**Name**

**Description**

`var`

`[Version](/php/docs/reference/cloud-dialogflow-cx/0.6.0/V3.Version)`  

**Returns**

**Type**

**Description**

`$this`

### static::build

**Parameters**

**Name**

**Description**

`parent`

`string`  

Required. The [Flow](/php/docs/reference/cloud-dialogflow-cx/0.6.0/V3.Flow) to create an [Version](/php/docs/reference/cloud-dialogflow-cx/0.6.0/V3.Version) for. Format: `projects/<ProjectID>/locations/<LocationID>/agents/<AgentID>/flows/<FlowID>`. Please see VersionsClient::flowName() for help formatting this field.

`version`

`[Version](/php/docs/reference/cloud-dialogflow-cx/0.6.0/V3.Version)`  

Required. The version to create.

**Returns**

**Type**

**Description**

`[CreateVersionRequest](/php/docs/reference/cloud-dialogflow-cx/0.6.0/V3.CreateVersionRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
