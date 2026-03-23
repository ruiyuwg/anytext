-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dialogflow V2 Client - Class DeleteConversationModelOperationMetadata (1.14.0) Stay organized with collections Save and categorize content based on your preferences.

2.3.1 (latest) 2.3.0 2.2.1 2.1.2 2.0.1 1.17.2 1.16.0 1.15.1 1.14.0 1.13.0 1.12.3 1.11.0 1.10.2 1.9.0 1.8.0 1.7.2 1.6.0 1.5.0 1.4.0 1.3.2 1.2.0 1.1.1 1.0.1

Reference documentation and code samples for the Google Cloud Dialogflow V2 Client class DeleteConversationModelOperationMetadata.

Metadata for a ConversationModels.DeleteConversationModel operation.

Generated from protobuf message `google.cloud.dialogflow.v2.DeleteConversationModelOperationMetadata`

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

`↳ conversation_model`

`string`  

The resource name of the conversation model. Format: `projects/<Project ID>/conversationModels/<Conversation Model Id>`

`↳ create_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

Timestamp when delete conversation model request was created. The time is measured on server side.

### getConversationModel

The resource name of the conversation model. Format: `projects/<Project ID>/conversationModels/<Conversation Model Id>`

**Returns**

**Type**

**Description**

`string`

### setConversationModel

The resource name of the conversation model. Format: `projects/<Project ID>/conversationModels/<Conversation Model Id>`

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

Timestamp when delete conversation model request was created. The time is measured on server side.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasCreateTime

### clearCreateTime

### setCreateTime

Timestamp when delete conversation model request was created. The time is measured on server side.

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
