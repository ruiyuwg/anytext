-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Apps Chat V1 Client - Class CardAction (0.17.1) Stay organized with collections Save and categorize content based on your preferences.

0.17.1 (latest) 0.17.0 0.16.1 0.15.0 0.14.0 0.13.1 0.12.1 0.11.2 0.10.0 0.9.0 0.8.1 0.7.2 0.6.1 0.5.0 0.4.0 0.3.0 0.2.0 0.1.4

Reference documentation and code samples for the Google Apps Chat V1 Client class CardAction.

A card action is the action associated with the card. For example, an invoice card might include actions such as delete invoice, email invoice, or open the invoice in a browser.

[Google Workspace add-ons](https://developers.google.com/workspace/add-ons):

Generated from protobuf message `google.apps.card.v1.Card.CardAction`

## Namespace

Google \\ Apps \\ Card \\ V1 \\ Card

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ action_label`

`string`  

The label that displays as the action menu item.

`↳ on_click`

`[Google\Apps\Card\V1\OnClick](/php/docs/reference/apps-chat/latest/Card.V1.OnClick)`  

The `onClick` action for this action item.

### getActionLabel

The label that displays as the action menu item.

**Returns**

**Type**

**Description**

`string`

### setActionLabel

The label that displays as the action menu item.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getOnClick

The `onClick` action for this action item.

**Returns**

**Type**

**Description**

`[Google\Apps\Card\V1\OnClick](/php/docs/reference/apps-chat/latest/Card.V1.OnClick)|null`

### hasOnClick

### clearOnClick

### setOnClick

The `onClick` action for this action item.

**Parameter**

**Name**

**Description**

`var`

`[Google\Apps\Card\V1\OnClick](/php/docs/reference/apps-chat/latest/Card.V1.OnClick)`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
