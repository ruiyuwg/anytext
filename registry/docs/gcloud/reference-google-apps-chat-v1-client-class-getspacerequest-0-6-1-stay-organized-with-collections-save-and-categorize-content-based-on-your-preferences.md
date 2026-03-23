-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Apps Chat V1 Client - Class GetSpaceRequest (0.6.1) Stay organized with collections Save and categorize content based on your preferences.

0.17.1 (latest) 0.17.0 0.16.1 0.15.0 0.14.0 0.13.1 0.12.1 0.11.2 0.10.0 0.9.0 0.8.1 0.7.2 0.6.1 0.5.0 0.4.0 0.3.0 0.2.0 0.1.4

Reference documentation and code samples for the Google Apps Chat V1 Client class GetSpaceRequest.

A request to return a single space.

Generated from protobuf message `google.chat.v1.GetSpaceRequest`

## Namespace

Google \\ Apps \\ Chat \\ V1

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

Required. Resource name of the space, in the form `spaces/{space}`. Format: `spaces/{space}`

`↳ use_admin_access`

`bool`  

When `true`, the method runs using the user's Google Workspace administrator privileges. The calling user must be a Google Workspace administrator with the [manage chat and spaces conversations privilege](https://support.google.com/a/answer/13369245). Requires the `chat.admin.spaces` or `chat.admin.spaces.readonly` [OAuth 2.0 scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes).

### getName

Required. Resource name of the space, in the form `spaces/{space}`.

Format: `spaces/{space}`

**Returns**

**Type**

**Description**

`string`

### setName

Required. Resource name of the space, in the form `spaces/{space}`.

Format: `spaces/{space}`

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getUseAdminAccess

When `true`, the method runs using the user's Google Workspace administrator privileges.

The calling user must be a Google Workspace administrator with the [manage chat and spaces conversations privilege](https://support.google.com/a/answer/13369245). Requires the `chat.admin.spaces` or `chat.admin.spaces.readonly` [OAuth 2.0 scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes).

**Returns**

**Type**

**Description**

`bool`

### setUseAdminAccess

When `true`, the method runs using the user's Google Workspace administrator privileges.

The calling user must be a Google Workspace administrator with the [manage chat and spaces conversations privilege](https://support.google.com/a/answer/13369245). Requires the `chat.admin.spaces` or `chat.admin.spaces.readonly` [OAuth 2.0 scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes).

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

### static::build

**Parameter**

**Name**

**Description**

`name`

`string`  

Required. Resource name of the space, in the form `spaces/{space}`.

Format: `spaces/{space}` Please see ChatServiceClient::spaceName() for help formatting this field.

**Returns**

**Type**

**Description**

`[GetSpaceRequest](/php/docs/reference/apps-chat/0.6.1/Chat.V1.GetSpaceRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
