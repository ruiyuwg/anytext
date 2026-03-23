-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dialogflow Cx V3 Client - Class UpdateFlowRequest (0.6.0) Stay organized with collections Save and categorize content based on your preferences.

0.10.2 (latest) 0.10.1 0.9.2 0.8.1 0.7.2 0.6.0 0.5.2 0.4.1 0.3.4 0.2.1 0.1.1

Reference documentation and code samples for the Google Cloud Dialogflow Cx V3 Client class UpdateFlowRequest.

The request message for [Flows.UpdateFlow](/php/docs/reference/cloud-dialogflow-cx/0.6.0/V3.Client.FlowsClient#_Google_Cloud_Dialogflow_Cx_V3_Client_FlowsClient__updateFlow__).

Generated from protobuf message `google.cloud.dialogflow.cx.v3.UpdateFlowRequest`

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

`↳ flow`

`[Flow](/php/docs/reference/cloud-dialogflow-cx/0.6.0/V3.Flow)`  

Required. The flow to update.

`↳ update_mask`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

The mask to control which fields get updated. If the mask is not present, all fields will be updated.

`↳ language_code`

`string`  

The language of the following fields in `flow`: \* \* `Flow.event_handlers.trigger_fulfillment.messages` \* \* `Flow.event_handlers.trigger_fulfillment.conditional_cases` \* \* `Flow.transition_routes.trigger_fulfillment.messages` \* \* `Flow.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.

### getFlow

Required. The flow to update.

**Returns**

**Type**

**Description**

`[Flow](/php/docs/reference/cloud-dialogflow-cx/0.6.0/V3.Flow)|null`

### hasFlow

### clearFlow

### setFlow

Required. The flow to update.

**Parameter**

**Name**

**Description**

`var`

`[Flow](/php/docs/reference/cloud-dialogflow-cx/0.6.0/V3.Flow)`  

**Returns**

**Type**

**Description**

`$this`

### getUpdateMask

The mask to control which fields get updated. If the mask is not present, all fields will be updated.

**Returns**

**Type**

**Description**

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)|null`

### hasUpdateMask

### clearUpdateMask

### setUpdateMask

The mask to control which fields get updated. If the mask is not present, all fields will be updated.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

**Returns**

**Type**

**Description**

`$this`

### getLanguageCode

The language of the following fields in `flow`:

-   `Flow.event_handlers.trigger_fulfillment.messages`
-   `Flow.event_handlers.trigger_fulfillment.conditional_cases`
-   `Flow.transition_routes.trigger_fulfillment.messages`
-   `Flow.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used.

[Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.

**Returns**

**Type**

**Description**

`string`

### setLanguageCode

The language of the following fields in `flow`:

-   `Flow.event_handlers.trigger_fulfillment.messages`
-   `Flow.event_handlers.trigger_fulfillment.conditional_cases`
-   `Flow.transition_routes.trigger_fulfillment.messages`
-   `Flow.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used.

[Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### static::build

**Parameters**

**Name**

**Description**

`flow`

`[Flow](/php/docs/reference/cloud-dialogflow-cx/0.6.0/V3.Flow)`  

Required. The flow to update.

`updateMask`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

The mask to control which fields get updated. If the mask is not present, all fields will be updated.

**Returns**

**Type**

**Description**

`[UpdateFlowRequest](/php/docs/reference/cloud-dialogflow-cx/0.6.0/V3.UpdateFlowRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
