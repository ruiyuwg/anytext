-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dialogflow Cx V3 Client - Class CreateWebhookRequest (0.5.2) Stay organized with collections Save and categorize content based on your preferences.

0.10.2 (latest) 0.10.1 0.9.2 0.8.1 0.7.2 0.6.0 0.5.2 0.4.1 0.3.4 0.2.1 0.1.1

Reference documentation and code samples for the Google Cloud Dialogflow Cx V3 Client class CreateWebhookRequest.

The request message for [Webhooks.CreateWebhook](/php/docs/reference/cloud-dialogflow-cx/0.5.2/V3.Client.WebhooksClient#_Google_Cloud_Dialogflow_Cx_V3_Client_WebhooksClient__createWebhook__).

Generated from protobuf message `google.cloud.dialogflow.cx.v3.CreateWebhookRequest`

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

Required. The agent to create a webhook for. Format: `projects/<ProjectID>/locations/<LocationID>/agents/<AgentID>`.

`↳ webhook`

`[Webhook](/php/docs/reference/cloud-dialogflow-cx/0.5.2/V3.Webhook)`  

Required. The webhook to create.

### getParent

Required. The agent to create a webhook for.

Format: `projects/<ProjectID>/locations/<LocationID>/agents/<AgentID>`.

**Returns**

**Type**

**Description**

`string`

### setParent

Required. The agent to create a webhook for.

Format: `projects/<ProjectID>/locations/<LocationID>/agents/<AgentID>`.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getWebhook

Required. The webhook to create.

**Returns**

**Type**

**Description**

`[Webhook](/php/docs/reference/cloud-dialogflow-cx/0.5.2/V3.Webhook)|null`

### hasWebhook

### clearWebhook

### setWebhook

Required. The webhook to create.

**Parameter**

**Name**

**Description**

`var`

`[Webhook](/php/docs/reference/cloud-dialogflow-cx/0.5.2/V3.Webhook)`  

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

Required. The agent to create a webhook for. Format: `projects/<ProjectID>/locations/<LocationID>/agents/<AgentID>`. Please see WebhooksClient::agentName() for help formatting this field.

`webhook`

`[Webhook](/php/docs/reference/cloud-dialogflow-cx/0.5.2/V3.Webhook)`  

Required. The webhook to create.

**Returns**

**Type**

**Description**

`[CreateWebhookRequest](/php/docs/reference/cloud-dialogflow-cx/0.5.2/V3.CreateWebhookRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
