-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dialogflow Cx V3 Client - Class UpdateExperimentRequest (0.2.1) Stay organized with collections Save and categorize content based on your preferences.

0.10.2 (latest) 0.10.1 0.9.2 0.8.1 0.7.2 0.6.0 0.5.2 0.4.1 0.3.4 0.2.1 0.1.1

Reference documentation and code samples for the Google Cloud Dialogflow Cx V3 Client class UpdateExperimentRequest.

The request message for Experiments.UpdateExperiment.

Generated from protobuf message `google.cloud.dialogflow.cx.v3.UpdateExperimentRequest`

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

`↳ experiment`

`[Google\Cloud\Dialogflow\Cx\V3\Experiment](/php/docs/reference/cloud-dialogflow-cx/0.2.1/V3.Experiment)`  

Required. The experiment to update.

`↳ update_mask`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

Required. The mask to control which fields get updated.

### getExperiment

Required. The experiment to update.

**Returns**

**Type**

**Description**

`[Google\Cloud\Dialogflow\Cx\V3\Experiment](/php/docs/reference/cloud-dialogflow-cx/0.2.1/V3.Experiment)|null`

### hasExperiment

### clearExperiment

### setExperiment

Required. The experiment to update.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Dialogflow\Cx\V3\Experiment](/php/docs/reference/cloud-dialogflow-cx/0.2.1/V3.Experiment)`  

**Returns**

**Type**

**Description**

`$this`

### getUpdateMask

Required. The mask to control which fields get updated.

**Returns**

**Type**

**Description**

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)|null`

### hasUpdateMask

### clearUpdateMask

### setUpdateMask

Required. The mask to control which fields get updated.

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

`experiment`

`[Google\Cloud\Dialogflow\Cx\V3\Experiment](/php/docs/reference/cloud-dialogflow-cx/0.2.1/V3.Experiment)`  

Required. The experiment to update.

`updateMask`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

Required. The mask to control which fields get updated.

**Returns**

**Type**

**Description**

`[Google\Cloud\Dialogflow\Cx\V3\UpdateExperimentRequest](/php/docs/reference/cloud-dialogflow-cx/0.2.1/V3.UpdateExperimentRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
