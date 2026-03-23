-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Analytics Admin V1alpha Client - Class UpdateKeyEventRequest (0.31.3) Stay organized with collections Save and categorize content based on your preferences.

0.31.3 (latest) 0.31.2 0.30.0 0.29.1 0.28.1 0.27.0 0.26.0 0.25.2 0.24.2 0.23.0 0.22.5 0.20.0 0.19.0 0.18.1 0.17.0 0.16.0 0.15.1 0.14.0 0.13.0 0.12.0 0.11.1 0.10.0 0.9.0 0.8.2

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Analytics Admin V1alpha Client class UpdateKeyEventRequest.

Request message for UpdateKeyEvent RPC

Generated from protobuf message `google.analytics.admin.v1alpha.UpdateKeyEventRequest`

## Namespace

Google \\ Analytics \\ Admin \\ V1alpha

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ key_event`

`[KeyEvent](/php/docs/reference/analytics-admin/latest/V1alpha.KeyEvent)`  

Required. The Key Event to update. The `name` field is used to identify the settings to be updated.

`↳ update_mask`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

Required. The list of fields to be updated. Field names must be in snake case (e.g., "field\_to\_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "\*" to match all fields.

### getKeyEvent

Required. The Key Event to update.

The `name` field is used to identify the settings to be updated.

**Returns**

**Type**

**Description**

`[KeyEvent](/php/docs/reference/analytics-admin/latest/V1alpha.KeyEvent)|null`

### hasKeyEvent

### clearKeyEvent

### setKeyEvent

Required. The Key Event to update.

The `name` field is used to identify the settings to be updated.

**Parameter**

**Name**

**Description**

`var`

`[KeyEvent](/php/docs/reference/analytics-admin/latest/V1alpha.KeyEvent)`  

**Returns**

**Type**

**Description**

`$this`

### getUpdateMask

Required. The list of fields to be updated. Field names must be in snake case (e.g., "field\_to\_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "\*" to match all fields.

**Returns**

**Type**

**Description**

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)|null`

### hasUpdateMask

### clearUpdateMask

### setUpdateMask

Required. The list of fields to be updated. Field names must be in snake case (e.g., "field\_to\_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "\*" to match all fields.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

**Returns**

**Type**

**Description**

`$this`

### static::build

**Parameters**

**Name**

**Description**

`keyEvent`

`[KeyEvent](/php/docs/reference/analytics-admin/latest/V1alpha.KeyEvent)`  

Required. The Key Event to update. The `name` field is used to identify the settings to be updated.

`updateMask`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

Required. The list of fields to be updated. Field names must be in snake case (e.g., "field\_to\_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "\*" to match all fields.

**Returns**

**Type**

**Description**

`[UpdateKeyEventRequest](/php/docs/reference/analytics-admin/latest/V1alpha.UpdateKeyEventRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
