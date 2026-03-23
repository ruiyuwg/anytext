-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Ai Platform V1 Client - Class InputMetadata (1.17.0) Stay organized with collections Save and categorize content based on your preferences.

1.54.0 (latest) 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.1 1.31.0 1.30.0 1.26.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.1 1.12.0 1.11.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.39.0 0.38.0 0.37.1 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.2 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.1 0.10.0

Reference documentation and code samples for the Google Cloud Ai Platform V1 Client class InputMetadata.

Metadata of the input of a feature.

Fields other than [InputMetadata.input\_baselines](/php/docs/reference/cloud-ai-platform/1.17.0/V1.ExplanationMetadata.InputMetadata#_Google_Cloud_AIPlatform_V1_ExplanationMetadata_InputMetadata__getInputBaselines__) are applicable only for Models that are using Vertex AI-provided images for Tensorflow.

Generated from protobuf message `google.cloud.aiplatform.v1.ExplanationMetadata.InputMetadata`

## Namespace

Google \\ Cloud \\ AIPlatform \\ V1 \\ ExplanationMetadata

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ input_baselines`

`array<[Google\Protobuf\Value](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Value)>`  

Baseline inputs for this feature. If no baseline is specified, Vertex AI chooses the baseline for this feature. If multiple baselines are specified, Vertex AI returns the average attributions across them in [Attribution.feature\_attributions](/php/docs/reference/cloud-ai-platform/1.17.0/V1.Attribution#_Google_Cloud_AIPlatform_V1_Attribution__getFeatureAttributions__). For Vertex AI-provided Tensorflow images (both 1.x and 2.x), the shape of each baseline must match the shape of the input tensor. If a scalar is provided, we broadcast to the same shape as the input tensor. For custom images, the element of the baselines must be in the same format as the feature's input in the [instance](/php/docs/reference/cloud-ai-platform/1.17.0/V1.ExplainRequest#_Google_Cloud_AIPlatform_V1_ExplainRequest__getInstances__)\[\]. The schema of any single instance may be specified via Endpoint's DeployedModels' [Model's](/php/docs/reference/cloud-ai-platform/1.17.0/V1.DeployedModel#_Google_Cloud_AIPlatform_V1_DeployedModel__getModel__) [PredictSchemata's](/php/docs/reference/cloud-ai-platform/1.17.0/V1.Model#_Google_Cloud_AIPlatform_V1_Model__getPredictSchemata__) [instance\_schema\_uri](/php/docs/reference/cloud-ai-platform/1.17.0/V1.PredictSchemata#_Google_Cloud_AIPlatform_V1_PredictSchemata__getInstanceSchemaUri__).

`↳ input_tensor_name`

`string`  

Name of the input tensor for this feature. Required and is only applicable to Vertex AI-provided images for Tensorflow.

`↳ encoding`

`int`  

Defines how the feature is encoded into the input tensor. Defaults to IDENTITY.

`↳ modality`

`string`  

Modality of the feature. Valid values are: numeric, image. Defaults to numeric.

`↳ feature_value_domain`

`[InputMetadata\FeatureValueDomain](/php/docs/reference/cloud-ai-platform/1.17.0/V1.ExplanationMetadata.InputMetadata.FeatureValueDomain)`  

The domain details of the input feature value. Like min/max, original mean or standard deviation if normalized.

`↳ indices_tensor_name`

`string`  

Specifies the index of the values of the input tensor. Required when the input tensor is a sparse representation. Refer to Tensorflow documentation for more details: [https://www.tensorflow.org/api\_docs/python/tf/sparse/SparseTensor](https://www.tensorflow.org/api_docs/python/tf/sparse/SparseTensor).

`↳ dense_shape_tensor_name`

`string`  

Specifies the shape of the values of the input if the input is a sparse representation. Refer to Tensorflow documentation for more details: [https://www.tensorflow.org/api\_docs/python/tf/sparse/SparseTensor](https://www.tensorflow.org/api_docs/python/tf/sparse/SparseTensor).

`↳ index_feature_mapping`

`array`  

A list of feature names for each index in the input tensor. Required when the input [InputMetadata.encoding](/php/docs/reference/cloud-ai-platform/1.17.0/V1.ExplanationMetadata.InputMetadata#_Google_Cloud_AIPlatform_V1_ExplanationMetadata_InputMetadata__getEncoding__) is BAG\_OF\_FEATURES, BAG\_OF\_FEATURES\_SPARSE, INDICATOR.

`↳ encoded_tensor_name`

`string`  

Encoded tensor is a transformation of the input tensor. Must be provided if choosing [Integrated Gradients attribution](/php/docs/reference/cloud-ai-platform/1.17.0/V1.ExplanationParameters#_Google_Cloud_AIPlatform_V1_ExplanationParameters__getIntegratedGradientsAttribution__) or [XRAI attribution](/php/docs/reference/cloud-ai-platform/1.17.0/V1.ExplanationParameters#_Google_Cloud_AIPlatform_V1_ExplanationParameters__getXraiAttribution__) and the input tensor is not differentiable. An encoded tensor is generated if the input tensor is encoded by a lookup table.

`↳ encoded_baselines`

`array<[Google\Protobuf\Value](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Value)>`  

A list of baselines for the encoded tensor. The shape of each baseline should match the shape of the encoded tensor. If a scalar is provided, Vertex AI broadcasts to the same shape as the encoded tensor.

`↳ visualization`

`[InputMetadata\Visualization](/php/docs/reference/cloud-ai-platform/1.17.0/V1.ExplanationMetadata.InputMetadata.Visualization)`  

Visualization configurations for image explanation.

`↳ group_name`

`string`  

Name of the group that the input belongs to. Features with the same group name will be treated as one feature when computing attributions. Features grouped together can have different shapes in value. If provided, there will be one single attribution generated in [Attribution.feature\_attributions](/php/docs/reference/cloud-ai-platform/1.17.0/V1.Attribution#_Google_Cloud_AIPlatform_V1_Attribution__getFeatureAttributions__), keyed by the group name.

### getInputBaselines

Baseline inputs for this feature.

If no baseline is specified, Vertex AI chooses the baseline for this feature. If multiple baselines are specified, Vertex AI returns the average attributions across them in [Attribution.feature\_attributions](/php/docs/reference/cloud-ai-platform/1.17.0/V1.Attribution#_Google_Cloud_AIPlatform_V1_Attribution__getFeatureAttributions__). For Vertex AI-provided Tensorflow images (both 1.x and 2.x), the shape of each baseline must match the shape of the input tensor. If a scalar is provided, we broadcast to the same shape as the input tensor. For custom images, the element of the baselines must be in the same format as the feature's input in the [instance](/php/docs/reference/cloud-ai-platform/1.17.0/V1.ExplainRequest#_Google_Cloud_AIPlatform_V1_ExplainRequest__getInstances__)\[\]. The schema of any single instance may be specified via Endpoint's DeployedModels' [Model's](/php/docs/reference/cloud-ai-platform/1.17.0/V1.DeployedModel#_Google_Cloud_AIPlatform_V1_DeployedModel__getModel__) [PredictSchemata's](/php/docs/reference/cloud-ai-platform/1.17.0/V1.Model#_Google_Cloud_AIPlatform_V1_Model__getPredictSchemata__) [instance\_schema\_uri](/php/docs/reference/cloud-ai-platform/1.17.0/V1.PredictSchemata#_Google_Cloud_AIPlatform_V1_PredictSchemata__getInstanceSchemaUri__).

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setInputBaselines

Baseline inputs for this feature.

If no baseline is specified, Vertex AI chooses the baseline for this feature. If multiple baselines are specified, Vertex AI returns the average attributions across them in [Attribution.feature\_attributions](/php/docs/reference/cloud-ai-platform/1.17.0/V1.Attribution#_Google_Cloud_AIPlatform_V1_Attribution__getFeatureAttributions__). For Vertex AI-provided Tensorflow images (both 1.x and 2.x), the shape of each baseline must match the shape of the input tensor. If a scalar is provided, we broadcast to the same shape as the input tensor. For custom images, the element of the baselines must be in the same format as the feature's input in the [instance](/php/docs/reference/cloud-ai-platform/1.17.0/V1.ExplainRequest#_Google_Cloud_AIPlatform_V1_ExplainRequest__getInstances__)\[\]. The schema of any single instance may be specified via Endpoint's DeployedModels' [Model's](/php/docs/reference/cloud-ai-platform/1.17.0/V1.DeployedModel#_Google_Cloud_AIPlatform_V1_DeployedModel__getModel__) [PredictSchemata's](/php/docs/reference/cloud-ai-platform/1.17.0/V1.Model#_Google_Cloud_AIPlatform_V1_Model__getPredictSchemata__) [instance\_schema\_uri](/php/docs/reference/cloud-ai-platform/1.17.0/V1.PredictSchemata#_Google_Cloud_AIPlatform_V1_PredictSchemata__getInstanceSchemaUri__).

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Protobuf\Value](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Value)>`  

**Returns**

**Type**

**Description**

`$this`

### getInputTensorName

Name of the input tensor for this feature. Required and is only applicable to Vertex AI-provided images for Tensorflow.

**Returns**

**Type**

**Description**

`string`

### setInputTensorName

Name of the input tensor for this feature. Required and is only applicable to Vertex AI-provided images for Tensorflow.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getEncoding

Defines how the feature is encoded into the input tensor. Defaults to IDENTITY.

**Returns**

**Type**

**Description**

`int`

### setEncoding

Defines how the feature is encoded into the input tensor. Defaults to IDENTITY.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getModality

Modality of the feature. Valid values are: numeric, image. Defaults to numeric.

**Returns**

**Type**

**Description**

`string`

### setModality

Modality of the feature. Valid values are: numeric, image. Defaults to numeric.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getFeatureValueDomain

The domain details of the input feature value. Like min/max, original mean or standard deviation if normalized.

**Returns**

**Type**

**Description**

`[InputMetadata\FeatureValueDomain](/php/docs/reference/cloud-ai-platform/1.17.0/V1.ExplanationMetadata.InputMetadata.FeatureValueDomain)|null`

### hasFeatureValueDomain

### clearFeatureValueDomain

### setFeatureValueDomain

The domain details of the input feature value. Like min/max, original mean or standard deviation if normalized.

**Parameter**

**Name**

**Description**

`var`

`[InputMetadata\FeatureValueDomain](/php/docs/reference/cloud-ai-platform/1.17.0/V1.ExplanationMetadata.InputMetadata.FeatureValueDomain)`  

**Returns**

**Type**

**Description**

`$this`

### getIndicesTensorName

Specifies the index of the values of the input tensor.

Required when the input tensor is a sparse representation. Refer to Tensorflow documentation for more details: [https://www.tensorflow.org/api\_docs/python/tf/sparse/SparseTensor](https://www.tensorflow.org/api_docs/python/tf/sparse/SparseTensor).

**Returns**

**Type**

**Description**

`string`

### setIndicesTensorName

Specifies the index of the values of the input tensor.

Required when the input tensor is a sparse representation. Refer to Tensorflow documentation for more details: [https://www.tensorflow.org/api\_docs/python/tf/sparse/SparseTensor](https://www.tensorflow.org/api_docs/python/tf/sparse/SparseTensor).

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getDenseShapeTensorName

Specifies the shape of the values of the input if the input is a sparse representation. Refer to Tensorflow documentation for more details: [https://www.tensorflow.org/api\_docs/python/tf/sparse/SparseTensor](https://www.tensorflow.org/api_docs/python/tf/sparse/SparseTensor).

**Returns**

**Type**

**Description**

`string`

### setDenseShapeTensorName

Specifies the shape of the values of the input if the input is a sparse representation. Refer to Tensorflow documentation for more details: [https://www.tensorflow.org/api\_docs/python/tf/sparse/SparseTensor](https://www.tensorflow.org/api_docs/python/tf/sparse/SparseTensor).

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getIndexFeatureMapping

A list of feature names for each index in the input tensor.

Required when the input [InputMetadata.encoding](/php/docs/reference/cloud-ai-platform/1.17.0/V1.ExplanationMetadata.InputMetadata#_Google_Cloud_AIPlatform_V1_ExplanationMetadata_InputMetadata__getEncoding__) is BAG\_OF\_FEATURES, BAG\_OF\_FEATURES\_SPARSE, INDICATOR.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setIndexFeatureMapping

A list of feature names for each index in the input tensor.

Required when the input [InputMetadata.encoding](/php/docs/reference/cloud-ai-platform/1.17.0/V1.ExplanationMetadata.InputMetadata#_Google_Cloud_AIPlatform_V1_ExplanationMetadata_InputMetadata__getEncoding__) is BAG\_OF\_FEATURES, BAG\_OF\_FEATURES\_SPARSE, INDICATOR.

**Parameter**

**Name**

**Description**

`var`

`string[]`  

**Returns**

**Type**

**Description**

`$this`

### getEncodedTensorName

Encoded tensor is a transformation of the input tensor. Must be provided if choosing [Integrated Gradients attribution](/php/docs/reference/cloud-ai-platform/1.17.0/V1.ExplanationParameters#_Google_Cloud_AIPlatform_V1_ExplanationParameters__getIntegratedGradientsAttribution__) or [XRAI attribution](/php/docs/reference/cloud-ai-platform/1.17.0/V1.ExplanationParameters#_Google_Cloud_AIPlatform_V1_ExplanationParameters__getXraiAttribution__) and the input tensor is not differentiable.

An encoded tensor is generated if the input tensor is encoded by a lookup table.

**Returns**

**Type**

**Description**

`string`

### setEncodedTensorName

Encoded tensor is a transformation of the input tensor. Must be provided if choosing [Integrated Gradients attribution](/php/docs/reference/cloud-ai-platform/1.17.0/V1.ExplanationParameters#_Google_Cloud_AIPlatform_V1_ExplanationParameters__getIntegratedGradientsAttribution__) or [XRAI attribution](/php/docs/reference/cloud-ai-platform/1.17.0/V1.ExplanationParameters#_Google_Cloud_AIPlatform_V1_ExplanationParameters__getXraiAttribution__) and the input tensor is not differentiable.

An encoded tensor is generated if the input tensor is encoded by a lookup table.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getEncodedBaselines

A list of baselines for the encoded tensor.

The shape of each baseline should match the shape of the encoded tensor. If a scalar is provided, Vertex AI broadcasts to the same shape as the encoded tensor.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setEncodedBaselines

A list of baselines for the encoded tensor.

The shape of each baseline should match the shape of the encoded tensor. If a scalar is provided, Vertex AI broadcasts to the same shape as the encoded tensor.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Protobuf\Value](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Value)>`  

**Returns**

**Type**

**Description**

`$this`

### getVisualization

Visualization configurations for image explanation.

**Returns**

**Type**

**Description**

`[InputMetadata\Visualization](/php/docs/reference/cloud-ai-platform/1.17.0/V1.ExplanationMetadata.InputMetadata.Visualization)|null`

### hasVisualization

### clearVisualization

### setVisualization

Visualization configurations for image explanation.

**Parameter**

**Name**

**Description**

`var`

`[InputMetadata\Visualization](/php/docs/reference/cloud-ai-platform/1.17.0/V1.ExplanationMetadata.InputMetadata.Visualization)`  

**Returns**

**Type**

**Description**

`$this`

### getGroupName

Name of the group that the input belongs to. Features with the same group name will be treated as one feature when computing attributions. Features grouped together can have different shapes in value. If provided, there will be one single attribution generated in [Attribution.feature\_attributions](/php/docs/reference/cloud-ai-platform/1.17.0/V1.Attribution#_Google_Cloud_AIPlatform_V1_Attribution__getFeatureAttributions__), keyed by the group name.

**Returns**

**Type**

**Description**

`string`

### setGroupName

Name of the group that the input belongs to. Features with the same group name will be treated as one feature when computing attributions. Features grouped together can have different shapes in value. If provided, there will be one single attribution generated in [Attribution.feature\_attributions](/php/docs/reference/cloud-ai-platform/1.17.0/V1.Attribution#_Google_Cloud_AIPlatform_V1_Attribution__getFeatureAttributions__), keyed by the group name.

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

Last updated 2026-03-19 UTC.
