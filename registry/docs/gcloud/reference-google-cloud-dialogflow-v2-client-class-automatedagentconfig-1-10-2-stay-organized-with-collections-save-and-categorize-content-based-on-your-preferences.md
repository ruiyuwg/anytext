-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dialogflow V2 Client - Class AutomatedAgentConfig (1.10.2) Stay organized with collections Save and categorize content based on your preferences.

2.3.1 (latest) 2.3.0 2.2.1 2.1.2 2.0.1 1.17.2 1.16.0 1.15.1 1.14.0 1.13.0 1.12.3 1.11.0 1.10.2 1.9.0 1.8.0 1.7.2 1.6.0 1.5.0 1.4.0 1.3.2 1.2.0 1.1.1 1.0.1

Reference documentation and code samples for the Google Cloud Dialogflow V2 Client class AutomatedAgentConfig.

Defines the Automated Agent to connect to a conversation.

Generated from protobuf message `google.cloud.dialogflow.v2.AutomatedAgentConfig`

## Namespace

Google \\ Cloud \\ Dialogflow \\ V2

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ agent`

`string`  

Required. ID of the Dialogflow agent environment to use. This project needs to either be the same project as the conversation or you need to grant `service-<Conversation Project Number>@gcp-sa-dialogflow.iam.gserviceaccount.com` the `Dialogflow API Service Agent` role in this project. - For ES agents, use format: `projects/<Project ID>/locations/<Location ID>/agent/environments/<Environment ID or '-'>`. If environment is not specified, the default `draft` environment is used. Refer to [DetectIntentRequest](https://cloud.google.com/dialogflow/docs/reference/rpc/google.cloud.dialogflow.v2#google.cloud.dialogflow.v2.DetectIntentRequest) for more details. - For CX agents, use format `projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/environments/<Environment ID or '-'>`. If environment is not specified, the default `draft` environment is used.

`↳ session_ttl`

`[Google\Protobuf\Duration](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Duration)`  

Optional. Sets Dialogflow CX session life time. By default, a Dialogflow CX session remains active and its data is stored for 30 minutes after the last request is sent for the session. This value should be no longer than 1 day.

### getAgent

Required. ID of the Dialogflow agent environment to use.

This project needs to either be the same project as the conversation or you need to grant `service-<Conversation Project Number>@gcp-sa-dialogflow.iam.gserviceaccount.com` the `Dialogflow API Service Agent` role in this project.

-   For ES agents, use format: `projects/<Project ID>/locations/<Location ID>/agent/environments/<Environment ID or '-'>`. If environment is not specified, the default `draft` environment is used. Refer to [DetectIntentRequest](https://cloud.google.com/dialogflow/docs/reference/rpc/google.cloud.dialogflow.v2#google.cloud.dialogflow.v2.DetectIntentRequest) for more details.
-   For CX agents, use format `projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/environments/<Environment ID or '-'>`. If environment is not specified, the default `draft` environment is used.

**Returns**

**Type**

**Description**

`string`

### setAgent

Required. ID of the Dialogflow agent environment to use.

This project needs to either be the same project as the conversation or you need to grant `service-<Conversation Project Number>@gcp-sa-dialogflow.iam.gserviceaccount.com` the `Dialogflow API Service Agent` role in this project.

-   For ES agents, use format: `projects/<Project ID>/locations/<Location ID>/agent/environments/<Environment ID or '-'>`. If environment is not specified, the default `draft` environment is used. Refer to [DetectIntentRequest](https://cloud.google.com/dialogflow/docs/reference/rpc/google.cloud.dialogflow.v2#google.cloud.dialogflow.v2.DetectIntentRequest) for more details.
-   For CX agents, use format `projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/environments/<Environment ID or '-'>`. If environment is not specified, the default `draft` environment is used.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getSessionTtl

Optional. Sets Dialogflow CX session life time.

By default, a Dialogflow CX session remains active and its data is stored for 30 minutes after the last request is sent for the session. This value should be no longer than 1 day.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Duration](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Duration)|null`

### hasSessionTtl

### clearSessionTtl

### setSessionTtl

Optional. Sets Dialogflow CX session life time.

By default, a Dialogflow CX session remains active and its data is stored for 30 minutes after the last request is sent for the session. This value should be no longer than 1 day.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Duration](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Duration)`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
