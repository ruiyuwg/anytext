-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud Translation V3 Client - Class DeleteModelRequest (1.20.2) Stay organized with collections Save and categorize content based on your preferences.

2.2.0 (latest) 2.1.2 2.0.3 1.21.0 1.20.2 1.19.0 1.18.1 1.17.7 1.16.0 1.15.4 1.14.3 1.13.3 1.12.12

Reference documentation and code samples for the Cloud Translation V3 Client class DeleteModelRequest.

Request message for DeleteModel.

Generated from protobuf message `google.cloud.translation.v3.DeleteModelRequest`

## Namespace

Google \\ Cloud \\ Translate \\ V3

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

Required. The name of the model to delete.

### getName

Required. The name of the model to delete.

**Returns**

**Type**

**Description**

`string`

### setName

Required. The name of the model to delete.

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

**Parameter**

**Name**

**Description**

`name`

`string`  

Required. The name of the model to delete. Please see TranslationServiceClient::modelName() for help formatting this field.

**Returns**

**Type**

**Description**

`[DeleteModelRequest](/php/docs/reference/cloud-translate/1.20.2/V3.DeleteModelRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
