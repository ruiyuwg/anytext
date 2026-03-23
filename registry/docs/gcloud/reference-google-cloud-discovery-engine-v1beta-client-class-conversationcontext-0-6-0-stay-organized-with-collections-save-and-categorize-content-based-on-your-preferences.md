-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Discovery Engine V1beta Client - Class ConversationContext (0.6.0) Stay organized with collections Save and categorize content based on your preferences.

1.11.1 (latest) 1.11.0 1.10.1 1.9.1 1.8.0 1.7.0 1.6.1 1.5.1 1.4.0 1.3.3 1.2.0 1.1.0 1.0.0 0.11.3 0.8.0 0.7.1 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.1

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Cloud Discovery Engine V1beta Client class ConversationContext.

Defines context of the conversation

Generated from protobuf message `google.cloud.discoveryengine.v1beta.ConversationContext`

## Namespace

Google \\ Cloud \\ DiscoveryEngine \\ V1beta

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ context_documents`

`array`  

The current list of documents the user is seeing. It contains the document resource references.

`↳ active_document`

`string`  

The current active document the user opened. It contains the document resource reference.

### getContextDocuments

The current list of documents the user is seeing.

It contains the document resource references.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setContextDocuments

The current list of documents the user is seeing.

It contains the document resource references.

**Parameter**

**Name**

**Description**

`var`

`string[]`  

**Returns**

**Type**

**Description**

`$this`

### getActiveDocument

The current active document the user opened.

It contains the document resource reference.

**Returns**

**Type**

**Description**

`string`

### setActiveDocument

The current active document the user opened.

It contains the document resource reference.

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
