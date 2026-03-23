-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dialogflow V2 Client - Class Card (1.2.0) Stay organized with collections Save and categorize content based on your preferences.

2.3.1 (latest) 2.3.0 2.2.1 2.1.2 2.0.1 1.17.2 1.16.0 1.15.1 1.14.0 1.13.0 1.12.3 1.11.0 1.10.2 1.9.0 1.8.0 1.7.2 1.6.0 1.5.0 1.4.0 1.3.2 1.2.0 1.1.1 1.0.1

Reference documentation and code samples for the Google Cloud Dialogflow V2 Client class Card.

The card response message.

Generated from protobuf message `google.cloud.dialogflow.v2.Intent.Message.Card`

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ title`

`string`  

Optional. The title of the card.

`↳ subtitle`

`string`  

Optional. The subtitle of the card.

`↳ image_uri`

`string`  

Optional. The public URI to an image file for the card.

`↳ buttons`

`array<[Google\Cloud\Dialogflow\V2\Intent\Message\Card\Button](/php/docs/reference/cloud-dialogflow/1.2.0/V2.Intent.Message.Card.Button)>`  

Optional. The collection of card buttons.

### getTitle

Optional. The title of the card.

**Returns**

**Type**

**Description**

`string`

### setTitle

Optional. The title of the card.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getSubtitle

Optional. The subtitle of the card.

**Returns**

**Type**

**Description**

`string`

### setSubtitle

Optional. The subtitle of the card.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getImageUri

Optional. The public URI to an image file for the card.

**Returns**

**Type**

**Description**

`string`

### setImageUri

Optional. The public URI to an image file for the card.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getButtons

Optional. The collection of card buttons.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setButtons

Optional. The collection of card buttons.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\Dialogflow\V2\Intent\Message\Card\Button](/php/docs/reference/cloud-dialogflow/1.2.0/V2.Intent.Message.Card.Button)>`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
