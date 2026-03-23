-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dialogflow Cx V3 Client - Class GenerativeSettings (0.3.4) Stay organized with collections Save and categorize content based on your preferences.

0.10.2 (latest) 0.10.1 0.9.2 0.8.1 0.7.2 0.6.0 0.5.2 0.4.1 0.3.4 0.2.1 0.1.1

Reference documentation and code samples for the Google Cloud Dialogflow Cx V3 Client class GenerativeSettings.

Settings for Generative AI.

Generated from protobuf message `google.cloud.dialogflow.cx.v3.GenerativeSettings`

## Namespace

Google \\ Cloud \\ Dialogflow \\ Cx \\ V3

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

Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/generativeSettings`.

`↳ fallback_settings`

`[Google\Cloud\Dialogflow\Cx\V3\GenerativeSettings\FallbackSettings](/php/docs/reference/cloud-dialogflow-cx/0.3.4/V3.GenerativeSettings.FallbackSettings)`  

Settings for Generative Fallback.

`↳ generative_safety_settings`

`[Google\Cloud\Dialogflow\Cx\V3\SafetySettings](/php/docs/reference/cloud-dialogflow-cx/0.3.4/V3.SafetySettings)`  

Settings for Generative Safety.

`↳ knowledge_connector_settings`

`[Google\Cloud\Dialogflow\Cx\V3\GenerativeSettings\KnowledgeConnectorSettings](/php/docs/reference/cloud-dialogflow-cx/0.3.4/V3.GenerativeSettings.KnowledgeConnectorSettings)`  

Settings for knowledge connector.

`↳ language_code`

`string`  

Language for this settings.

### getName

Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/generativeSettings`.

**Returns**

**Type**

**Description**

`string`

### setName

Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/generativeSettings`.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getFallbackSettings

Settings for Generative Fallback.

**Returns**

**Type**

**Description**

`[Google\Cloud\Dialogflow\Cx\V3\GenerativeSettings\FallbackSettings](/php/docs/reference/cloud-dialogflow-cx/0.3.4/V3.GenerativeSettings.FallbackSettings)|null`

### hasFallbackSettings

### clearFallbackSettings

### setFallbackSettings

Settings for Generative Fallback.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Dialogflow\Cx\V3\GenerativeSettings\FallbackSettings](/php/docs/reference/cloud-dialogflow-cx/0.3.4/V3.GenerativeSettings.FallbackSettings)`  

**Returns**

**Type**

**Description**

`$this`

### getGenerativeSafetySettings

Settings for Generative Safety.

**Returns**

**Type**

**Description**

`[Google\Cloud\Dialogflow\Cx\V3\SafetySettings](/php/docs/reference/cloud-dialogflow-cx/0.3.4/V3.SafetySettings)|null`

### hasGenerativeSafetySettings

### clearGenerativeSafetySettings

### setGenerativeSafetySettings

Settings for Generative Safety.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Dialogflow\Cx\V3\SafetySettings](/php/docs/reference/cloud-dialogflow-cx/0.3.4/V3.SafetySettings)`  

**Returns**

**Type**

**Description**

`$this`

### getKnowledgeConnectorSettings

Settings for knowledge connector.

**Returns**

**Type**

**Description**

`[Google\Cloud\Dialogflow\Cx\V3\GenerativeSettings\KnowledgeConnectorSettings](/php/docs/reference/cloud-dialogflow-cx/0.3.4/V3.GenerativeSettings.KnowledgeConnectorSettings)|null`

### hasKnowledgeConnectorSettings

### clearKnowledgeConnectorSettings

### setKnowledgeConnectorSettings

Settings for knowledge connector.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Dialogflow\Cx\V3\GenerativeSettings\KnowledgeConnectorSettings](/php/docs/reference/cloud-dialogflow-cx/0.3.4/V3.GenerativeSettings.KnowledgeConnectorSettings)`  

**Returns**

**Type**

**Description**

`$this`

### getLanguageCode

Language for this settings.

**Returns**

**Type**

**Description**

`string`

### setLanguageCode

Language for this settings.

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
