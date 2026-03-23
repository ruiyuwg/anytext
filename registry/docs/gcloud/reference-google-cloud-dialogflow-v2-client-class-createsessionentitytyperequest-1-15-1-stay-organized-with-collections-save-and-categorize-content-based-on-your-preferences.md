-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dialogflow V2 Client - Class CreateSessionEntityTypeRequest (1.15.1) Stay organized with collections Save and categorize content based on your preferences.

2.3.1 (latest) 2.3.0 2.2.1 2.1.2 2.0.1 1.17.2 1.16.0 1.15.1 1.14.0 1.13.0 1.12.3 1.11.0 1.10.2 1.9.0 1.8.0 1.7.2 1.6.0 1.5.0 1.4.0 1.3.2 1.2.0 1.1.1 1.0.1

Reference documentation and code samples for the Google Cloud Dialogflow V2 Client class CreateSessionEntityTypeRequest.

The request message for SessionEntityTypes.CreateSessionEntityType.

Generated from protobuf message `google.cloud.dialogflow.v2.CreateSessionEntityTypeRequest`

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

Required. The session to create a session entity type for. Format: `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/ sessions/<Session ID>`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.

`↳ session_entity_type`

`[Google\Cloud\Dialogflow\V2\SessionEntityType](/php/docs/reference/cloud-dialogflow/1.15.1/V2.SessionEntityType)`  

Required. The session entity type to create.

### getParent

Required. The session to create a session entity type for.

Format: `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/ sessions/<Session ID>`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.

**Returns**

**Type**

**Description**

`string`

### setParent

Required. The session to create a session entity type for.

Format: `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/ sessions/<Session ID>`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getSessionEntityType

Required. The session entity type to create.

**Returns**

**Type**

**Description**

`[Google\Cloud\Dialogflow\V2\SessionEntityType](/php/docs/reference/cloud-dialogflow/1.15.1/V2.SessionEntityType)|null`

### hasSessionEntityType

### clearSessionEntityType

### setSessionEntityType

Required. The session entity type to create.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Dialogflow\V2\SessionEntityType](/php/docs/reference/cloud-dialogflow/1.15.1/V2.SessionEntityType)`  

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

Required. The session to create a session entity type for. Format: `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/ sessions/<Session ID>`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. Please see Google\\Cloud\\Dialogflow\\V2\\SessionEntityTypesClient::sessionName() for help formatting this field.

`sessionEntityType`

`[Google\Cloud\Dialogflow\V2\SessionEntityType](/php/docs/reference/cloud-dialogflow/1.15.1/V2.SessionEntityType)`  

Required. The session entity type to create.

**Returns**

**Type**

**Description**

`[Google\Cloud\Dialogflow\V2\CreateSessionEntityTypeRequest](/php/docs/reference/cloud-dialogflow/1.15.1/V2.CreateSessionEntityTypeRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
