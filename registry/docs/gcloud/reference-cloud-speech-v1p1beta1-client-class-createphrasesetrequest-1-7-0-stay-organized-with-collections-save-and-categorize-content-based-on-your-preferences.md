-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud Speech V1p1beta1 Client - Class CreatePhraseSetRequest (1.7.0) Stay organized with collections Save and categorize content based on your preferences.

2.5.0 (latest) 2.4.0 2.3.0 2.2.1 2.1.1 2.0.1 1.20.1 1.19.2 1.18.3 1.16.0 1.15.0 1.14.3 1.13.1 1.12.0 1.11.2 1.10.0 1.9.1 1.8.0 1.7.0

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Cloud Speech V1p1beta1 Client class CreatePhraseSetRequest.

Message sent by the client for the `CreatePhraseSet` method.

Generated from protobuf message `google.cloud.speech.v1p1beta1.CreatePhraseSetRequest`

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

Required. The parent resource where this phrase set will be created. Format: `projects/{project}/locations/{location}/phraseSets` Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.

`↳ phrase_set_id`

`string`  

Required. The ID to use for the phrase set, which will become the final component of the phrase set's resource name. This value should restrict to letters, numbers, and hyphens, with the first character a letter, the last a letter or a number, and be 4-63 characters.

`↳ phrase_set`

`[Google\Cloud\Speech\V1p1beta1\PhraseSet](/php/docs/reference/cloud-speech/1.7.0/V1p1beta1.PhraseSet)`  

Required. The phrase set to create.

### getParent

Required. The parent resource where this phrase set will be created. Format: `projects/{project}/locations/{location}/phraseSets` Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.

Generated from protobuf field `string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = {`

**Returns**

**Type**

**Description**

`string`

### setParent

Required. The parent resource where this phrase set will be created. Format: `projects/{project}/locations/{location}/phraseSets` Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.

Generated from protobuf field `string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = {`

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getPhraseSetId

Required. The ID to use for the phrase set, which will become the final component of the phrase set's resource name.

This value should restrict to letters, numbers, and hyphens, with the first character a letter, the last a letter or a number, and be 4-63 characters.

Generated from protobuf field `string phrase_set_id = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`string`

### setPhraseSetId

Required. The ID to use for the phrase set, which will become the final component of the phrase set's resource name.

This value should restrict to letters, numbers, and hyphens, with the first character a letter, the last a letter or a number, and be 4-63 characters.

Generated from protobuf field `string phrase_set_id = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getPhraseSet

Required. The phrase set to create.

Generated from protobuf field `.google.cloud.speech.v1p1beta1.PhraseSet phrase_set = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[Google\Cloud\Speech\V1p1beta1\PhraseSet](/php/docs/reference/cloud-speech/1.7.0/V1p1beta1.PhraseSet)|null`

### hasPhraseSet

### clearPhraseSet

### setPhraseSet

Required. The phrase set to create.

Generated from protobuf field `.google.cloud.speech.v1p1beta1.PhraseSet phrase_set = 3 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Speech\V1p1beta1\PhraseSet](/php/docs/reference/cloud-speech/1.7.0/V1p1beta1.PhraseSet)`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
