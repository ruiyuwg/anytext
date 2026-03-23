-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Ai Platform V1 Client - Class EvaluatedAnnotation (1.10.0) Stay organized with collections Save and categorize content based on your preferences.

1.54.0 (latest) 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.1 1.31.0 1.30.0 1.26.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.1 1.12.0 1.11.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.39.0 0.38.0 0.37.1 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.2 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.1 0.10.0

Reference documentation and code samples for the Google Cloud Ai Platform V1 Client class EvaluatedAnnotation.

True positive, false positive, or false negative.

EvaluatedAnnotation is only available under ModelEvaluationSlice with slice of `annotationSpec` dimension.

Generated from protobuf message `google.cloud.aiplatform.v1.EvaluatedAnnotation`

## Namespace

Google \\ Cloud \\ AIPlatform \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ type`

`int`  

Output only. Type of the EvaluatedAnnotation.

`↳ predictions`

`array<[Google\Protobuf\Value](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Value)>`  

Output only. The model predicted annotations. For true positive, there is one and only one prediction, which matches the only one ground truth annotation in [ground\_truths](/php/docs/reference/cloud-ai-platform/1.10.0/V1.EvaluatedAnnotation#_Google_Cloud_AIPlatform_V1_EvaluatedAnnotation__getGroundTruths__). For false positive, there is one and only one prediction, which doesn't match any ground truth annotation of the corresponding data\_item\_view\_id. For false negative, there are zero or more predictions which are similar to the only ground truth annotation in [ground\_truths](/php/docs/reference/cloud-ai-platform/1.10.0/V1.EvaluatedAnnotation#_Google_Cloud_AIPlatform_V1_EvaluatedAnnotation__getGroundTruths__) but not enough for a match. The schema of the prediction is stored in [ModelEvaluation.annotation\_schema\_uri](/php/docs/reference/cloud-ai-platform/1.10.0/V1.ModelEvaluation#_Google_Cloud_AIPlatform_V1_ModelEvaluation__getAnnotationSchemaUri__)

`↳ ground_truths`

`array<[Google\Protobuf\Value](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Value)>`  

Output only. The ground truth Annotations, i.e. the Annotations that exist in the test data the Model is evaluated on. For true positive, there is one and only one ground truth annotation, which matches the only prediction in [predictions](/php/docs/reference/cloud-ai-platform/1.10.0/V1.EvaluatedAnnotation#_Google_Cloud_AIPlatform_V1_EvaluatedAnnotation__getPredictions__). For false positive, there are zero or more ground truth annotations that are similar to the only prediction in [predictions](/php/docs/reference/cloud-ai-platform/1.10.0/V1.EvaluatedAnnotation#_Google_Cloud_AIPlatform_V1_EvaluatedAnnotation__getPredictions__), but not enough for a match. For false negative, there is one and only one ground truth annotation, which doesn't match any predictions created by the model. The schema of the ground truth is stored in [ModelEvaluation.annotation\_schema\_uri](/php/docs/reference/cloud-ai-platform/1.10.0/V1.ModelEvaluation#_Google_Cloud_AIPlatform_V1_ModelEvaluation__getAnnotationSchemaUri__)

`↳ data_item_payload`

`[Google\Protobuf\Value](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Value)`  

Output only. The data item payload that the Model predicted this EvaluatedAnnotation on.

`↳ evaluated_data_item_view_id`

`string`  

Output only. ID of the EvaluatedDataItemView under the same ancestor ModelEvaluation. The EvaluatedDataItemView consists of all ground truths and predictions on [data\_item\_payload](/php/docs/reference/cloud-ai-platform/1.10.0/V1.EvaluatedAnnotation#_Google_Cloud_AIPlatform_V1_EvaluatedAnnotation__getDataItemPayload__).

`↳ explanations`

`array<[Google\Cloud\AIPlatform\V1\EvaluatedAnnotationExplanation](/php/docs/reference/cloud-ai-platform/1.10.0/V1.EvaluatedAnnotationExplanation)>`  

Explanations of [predictions](/php/docs/reference/cloud-ai-platform/1.10.0/V1.EvaluatedAnnotation#_Google_Cloud_AIPlatform_V1_EvaluatedAnnotation__getPredictions__). Each element of the explanations indicates the explanation for one explanation Method. The attributions list in the [EvaluatedAnnotationExplanation.explanation](/php/docs/reference/cloud-ai-platform/1.10.0/V1.EvaluatedAnnotationExplanation#_Google_Cloud_AIPlatform_V1_EvaluatedAnnotationExplanation__getExplanation__) object corresponds to the [predictions](/php/docs/reference/cloud-ai-platform/1.10.0/V1.EvaluatedAnnotation#_Google_Cloud_AIPlatform_V1_EvaluatedAnnotation__getPredictions__) list. For example, the second element in the attributions list explains the second element in the predictions list.

`↳ error_analysis_annotations`

`array<[Google\Cloud\AIPlatform\V1\ErrorAnalysisAnnotation](/php/docs/reference/cloud-ai-platform/1.10.0/V1.ErrorAnalysisAnnotation)>`  

Annotations of model error analysis results.

### getType

Output only. Type of the EvaluatedAnnotation.

**Returns**

**Type**

**Description**

`int`

### setType

Output only. Type of the EvaluatedAnnotation.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getPredictions

Output only. The model predicted annotations.

For true positive, there is one and only one prediction, which matches the only one ground truth annotation in [ground\_truths](/php/docs/reference/cloud-ai-platform/1.10.0/V1.EvaluatedAnnotation#_Google_Cloud_AIPlatform_V1_EvaluatedAnnotation__getGroundTruths__). For false positive, there is one and only one prediction, which doesn't match any ground truth annotation of the corresponding data\_item\_view\_id. For false negative, there are zero or more predictions which are similar to the only ground truth annotation in [ground\_truths](/php/docs/reference/cloud-ai-platform/1.10.0/V1.EvaluatedAnnotation#_Google_Cloud_AIPlatform_V1_EvaluatedAnnotation__getGroundTruths__) but not enough for a match. The schema of the prediction is stored in [ModelEvaluation.annotation\_schema\_uri](/php/docs/reference/cloud-ai-platform/1.10.0/V1.ModelEvaluation#_Google_Cloud_AIPlatform_V1_ModelEvaluation__getAnnotationSchemaUri__)

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setPredictions

Output only. The model predicted annotations.

For true positive, there is one and only one prediction, which matches the only one ground truth annotation in [ground\_truths](/php/docs/reference/cloud-ai-platform/1.10.0/V1.EvaluatedAnnotation#_Google_Cloud_AIPlatform_V1_EvaluatedAnnotation__getGroundTruths__). For false positive, there is one and only one prediction, which doesn't match any ground truth annotation of the corresponding data\_item\_view\_id. For false negative, there are zero or more predictions which are similar to the only ground truth annotation in [ground\_truths](/php/docs/reference/cloud-ai-platform/1.10.0/V1.EvaluatedAnnotation#_Google_Cloud_AIPlatform_V1_EvaluatedAnnotation__getGroundTruths__) but not enough for a match. The schema of the prediction is stored in [ModelEvaluation.annotation\_schema\_uri](/php/docs/reference/cloud-ai-platform/1.10.0/V1.ModelEvaluation#_Google_Cloud_AIPlatform_V1_ModelEvaluation__getAnnotationSchemaUri__)

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Protobuf\Value](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Value)>`  

**Returns**

**Type**

**Description**

`$this`

### getGroundTruths

Output only. The ground truth Annotations, i.e. the Annotations that exist in the test data the Model is evaluated on.

For true positive, there is one and only one ground truth annotation, which matches the only prediction in [predictions](/php/docs/reference/cloud-ai-platform/1.10.0/V1.EvaluatedAnnotation#_Google_Cloud_AIPlatform_V1_EvaluatedAnnotation__getPredictions__). For false positive, there are zero or more ground truth annotations that are similar to the only prediction in [predictions](/php/docs/reference/cloud-ai-platform/1.10.0/V1.EvaluatedAnnotation#_Google_Cloud_AIPlatform_V1_EvaluatedAnnotation__getPredictions__), but not enough for a match. For false negative, there is one and only one ground truth annotation, which doesn't match any predictions created by the model. The schema of the ground truth is stored in [ModelEvaluation.annotation\_schema\_uri](/php/docs/reference/cloud-ai-platform/1.10.0/V1.ModelEvaluation#_Google_Cloud_AIPlatform_V1_ModelEvaluation__getAnnotationSchemaUri__)

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setGroundTruths

Output only. The ground truth Annotations, i.e. the Annotations that exist in the test data the Model is evaluated on.

For true positive, there is one and only one ground truth annotation, which matches the only prediction in [predictions](/php/docs/reference/cloud-ai-platform/1.10.0/V1.EvaluatedAnnotation#_Google_Cloud_AIPlatform_V1_EvaluatedAnnotation__getPredictions__). For false positive, there are zero or more ground truth annotations that are similar to the only prediction in [predictions](/php/docs/reference/cloud-ai-platform/1.10.0/V1.EvaluatedAnnotation#_Google_Cloud_AIPlatform_V1_EvaluatedAnnotation__getPredictions__), but not enough for a match. For false negative, there is one and only one ground truth annotation, which doesn't match any predictions created by the model. The schema of the ground truth is stored in [ModelEvaluation.annotation\_schema\_uri](/php/docs/reference/cloud-ai-platform/1.10.0/V1.ModelEvaluation#_Google_Cloud_AIPlatform_V1_ModelEvaluation__getAnnotationSchemaUri__)

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Protobuf\Value](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Value)>`  

**Returns**

**Type**

**Description**

`$this`

### getDataItemPayload

Output only. The data item payload that the Model predicted this EvaluatedAnnotation on.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Value](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Value)|null`

### hasDataItemPayload

### clearDataItemPayload

### setDataItemPayload

Output only. The data item payload that the Model predicted this EvaluatedAnnotation on.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Value](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Value)`  

**Returns**

**Type**

**Description**

`$this`

### getEvaluatedDataItemViewId

Output only. ID of the EvaluatedDataItemView under the same ancestor ModelEvaluation. The EvaluatedDataItemView consists of all ground truths and predictions on [data\_item\_payload](/php/docs/reference/cloud-ai-platform/1.10.0/V1.EvaluatedAnnotation#_Google_Cloud_AIPlatform_V1_EvaluatedAnnotation__getDataItemPayload__).

**Returns**

**Type**

**Description**

`string`

### setEvaluatedDataItemViewId

Output only. ID of the EvaluatedDataItemView under the same ancestor ModelEvaluation. The EvaluatedDataItemView consists of all ground truths and predictions on [data\_item\_payload](/php/docs/reference/cloud-ai-platform/1.10.0/V1.EvaluatedAnnotation#_Google_Cloud_AIPlatform_V1_EvaluatedAnnotation__getDataItemPayload__).

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getExplanations

Explanations of [predictions](/php/docs/reference/cloud-ai-platform/1.10.0/V1.EvaluatedAnnotation#_Google_Cloud_AIPlatform_V1_EvaluatedAnnotation__getPredictions__).

Each element of the explanations indicates the explanation for one explanation Method. The attributions list in the [EvaluatedAnnotationExplanation.explanation](/php/docs/reference/cloud-ai-platform/1.10.0/V1.EvaluatedAnnotationExplanation#_Google_Cloud_AIPlatform_V1_EvaluatedAnnotationExplanation__getExplanation__) object corresponds to the [predictions](/php/docs/reference/cloud-ai-platform/1.10.0/V1.EvaluatedAnnotation#_Google_Cloud_AIPlatform_V1_EvaluatedAnnotation__getPredictions__) list. For example, the second element in the attributions list explains the second element in the predictions list.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setExplanations

Explanations of [predictions](/php/docs/reference/cloud-ai-platform/1.10.0/V1.EvaluatedAnnotation#_Google_Cloud_AIPlatform_V1_EvaluatedAnnotation__getPredictions__).

Each element of the explanations indicates the explanation for one explanation Method. The attributions list in the [EvaluatedAnnotationExplanation.explanation](/php/docs/reference/cloud-ai-platform/1.10.0/V1.EvaluatedAnnotationExplanation#_Google_Cloud_AIPlatform_V1_EvaluatedAnnotationExplanation__getExplanation__) object corresponds to the [predictions](/php/docs/reference/cloud-ai-platform/1.10.0/V1.EvaluatedAnnotation#_Google_Cloud_AIPlatform_V1_EvaluatedAnnotation__getPredictions__) list. For example, the second element in the attributions list explains the second element in the predictions list.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\AIPlatform\V1\EvaluatedAnnotationExplanation](/php/docs/reference/cloud-ai-platform/1.10.0/V1.EvaluatedAnnotationExplanation)>`  

**Returns**

**Type**

**Description**

`$this`

### getErrorAnalysisAnnotations

Annotations of model error analysis results.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setErrorAnalysisAnnotations

Annotations of model error analysis results.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\AIPlatform\V1\ErrorAnalysisAnnotation](/php/docs/reference/cloud-ai-platform/1.10.0/V1.ErrorAnalysisAnnotation)>`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
