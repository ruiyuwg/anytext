-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dialogflow V2 Client - Class UpdateParticipantRequest (1.6.0) Stay organized with collections Save and categorize content based on your preferences.

2.3.1 (latest) 2.3.0 2.2.1 2.1.2 2.0.1 1.17.2 1.16.0 1.15.1 1.14.0 1.13.0 1.12.3 1.11.0 1.10.2 1.9.0 1.8.0 1.7.2 1.6.0 1.5.0 1.4.0 1.3.2 1.2.0 1.1.1 1.0.1

Reference documentation and code samples for the Google Cloud Dialogflow V2 Client class UpdateParticipantRequest.

The request message for [Participants.UpdateParticipant](/php/docs/reference/cloud-dialogflow/1.6.0/V2.ParticipantsClient#_Google_Cloud_Dialogflow_V2_ParticipantsClient__updateParticipant__).

Generated from protobuf message `google.cloud.dialogflow.v2.UpdateParticipantRequest`

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

`↳ participant`

`[Google\Cloud\Dialogflow\V2\Participant](/php/docs/reference/cloud-dialogflow/1.6.0/V2.Participant)`  

Required. The participant to update.

`↳ update_mask`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

Required. The mask to specify which fields to update.

### getParticipant

Required. The participant to update.

**Returns**

**Type**

**Description**

`[Google\Cloud\Dialogflow\V2\Participant](/php/docs/reference/cloud-dialogflow/1.6.0/V2.Participant)|null`

### hasParticipant

### clearParticipant

### setParticipant

Required. The participant to update.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Dialogflow\V2\Participant](/php/docs/reference/cloud-dialogflow/1.6.0/V2.Participant)`  

**Returns**

**Type**

**Description**

`$this`

### getUpdateMask

Required. The mask to specify which fields to update.

**Returns**

**Type**

**Description**

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)|null`

### hasUpdateMask

### clearUpdateMask

### setUpdateMask

Required. The mask to specify which fields to update.

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

`participant`

`[Google\Cloud\Dialogflow\V2\Participant](/php/docs/reference/cloud-dialogflow/1.6.0/V2.Participant)`  

Required. The participant to update.

`updateMask`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

Required. The mask to specify which fields to update.

**Returns**

**Type**

**Description**

`[Google\Cloud\Dialogflow\V2\UpdateParticipantRequest](/php/docs/reference/cloud-dialogflow/1.6.0/V2.UpdateParticipantRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
