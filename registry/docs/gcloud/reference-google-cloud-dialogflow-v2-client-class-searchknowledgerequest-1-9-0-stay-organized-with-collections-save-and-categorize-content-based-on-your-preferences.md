-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dialogflow V2 Client - Class SearchKnowledgeRequest (1.9.0) Stay organized with collections Save and categorize content based on your preferences.

2.3.1 (latest) 2.3.0 2.2.1 2.1.2 2.0.1 1.17.2 1.16.0 1.15.1 1.14.0 1.13.0 1.12.3 1.11.0 1.10.2 1.9.0 1.8.0 1.7.2 1.6.0 1.5.0 1.4.0 1.3.2 1.2.0 1.1.1 1.0.1

Reference documentation and code samples for the Google Cloud Dialogflow V2 Client class SearchKnowledgeRequest.

The request message for [Conversations.SearchKnowledge](/php/docs/reference/cloud-dialogflow/1.9.0/V2.ConversationsClient#_Google_Cloud_Dialogflow_V2_ConversationsClient__searchKnowledge__).

Generated from protobuf message `google.cloud.dialogflow.v2.SearchKnowledgeRequest`

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

`↳ parent`

`string`  

The parent resource contains the conversation profile Format: 'projects/

`↳ query`

`[Google\Cloud\Dialogflow\V2\TextInput](/php/docs/reference/cloud-dialogflow/1.9.0/V2.TextInput)`  

Required. The natural language text query for knowledge search.

`↳ conversation_profile`

`string`  

Required. The conversation profile used to configure the search. Format: `projects/<Project ID>/locations/<Location ID>/conversationProfiles/<Conversation Profile ID>`.

`↳ session_id`

`string`  

The ID of the search session. The session\_id can be combined with Dialogflow V3 Agent ID retrieved from conversation profile or on its own to identify a search session. The search history of the same session will impact the search result. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length must not exceed 36 characters.

`↳ conversation`

`string`  

The conversation (between human agent and end user) where the search request is triggered. Format: `projects/<Project ID>/locations/<Location ID>/conversations/<Conversation ID>`.

`↳ latest_message`

`string`  

The name of the latest conversation message when the request is triggered. Format: `projects/<Project ID>/locations/<Location ID>/conversations/<Conversation ID>/messages/<Message ID>`.

### getParent

The parent resource contains the conversation profile Format: 'projects/

**Returns**

**Type**

**Description**

`string`

### setParent

The parent resource contains the conversation profile Format: 'projects/

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getQuery

Required. The natural language text query for knowledge search.

**Returns**

**Type**

**Description**

`[Google\Cloud\Dialogflow\V2\TextInput](/php/docs/reference/cloud-dialogflow/1.9.0/V2.TextInput)|null`

### hasQuery

### clearQuery

### setQuery

Required. The natural language text query for knowledge search.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Dialogflow\V2\TextInput](/php/docs/reference/cloud-dialogflow/1.9.0/V2.TextInput)`  

**Returns**

**Type**

**Description**

`$this`

### getConversationProfile

Required. The conversation profile used to configure the search.

Format: `projects/<Project ID>/locations/<Location ID>/conversationProfiles/<Conversation Profile ID>`.

**Returns**

**Type**

**Description**

`string`

### setConversationProfile

Required. The conversation profile used to configure the search.

Format: `projects/<Project ID>/locations/<Location ID>/conversationProfiles/<Conversation Profile ID>`.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getSessionId

The ID of the search session.

The session\_id can be combined with Dialogflow V3 Agent ID retrieved from conversation profile or on its own to identify a search session. The search history of the same session will impact the search result. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length must not exceed 36 characters.

**Returns**

**Type**

**Description**

`string`

### setSessionId

The ID of the search session.

The session\_id can be combined with Dialogflow V3 Agent ID retrieved from conversation profile or on its own to identify a search session. The search history of the same session will impact the search result. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length must not exceed 36 characters.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getConversation

The conversation (between human agent and end user) where the search request is triggered. Format: `projects/<Project ID>/locations/<Location ID>/conversations/<Conversation ID>`.

**Returns**

**Type**

**Description**

`string`

### setConversation

The conversation (between human agent and end user) where the search request is triggered. Format: `projects/<Project ID>/locations/<Location ID>/conversations/<Conversation ID>`.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getLatestMessage

The name of the latest conversation message when the request is triggered.

Format: `projects/<Project ID>/locations/<Location ID>/conversations/<Conversation ID>/messages/<Message ID>`.

**Returns**

**Type**

**Description**

`string`

### setLatestMessage

The name of the latest conversation message when the request is triggered.

Format: `projects/<Project ID>/locations/<Location ID>/conversations/<Conversation ID>/messages/<Message ID>`.

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
