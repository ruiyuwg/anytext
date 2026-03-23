-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Ai Platform V1 Client - Class Model (1.6.0) Stay organized with collections Save and categorize content based on your preferences.

1.54.0 (latest) 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.1 1.31.0 1.30.0 1.26.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.1 1.12.0 1.11.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.39.0 0.38.0 0.37.1 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.2 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.1 0.10.0

Reference documentation and code samples for the Google Cloud Ai Platform V1 Client class Model.

A trained machine learning Model.

Generated from protobuf message `google.cloud.aiplatform.v1.Model`

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

`↳ name`

`string`  

The resource name of the Model.

`↳ version_id`

`string`  

Output only. Immutable. The version ID of the model. A new version is committed when a new model version is uploaded or trained under an existing model id. It is an auto-incrementing decimal number in string representation.

`↳ version_aliases`

`array`  

User provided version aliases so that a model version can be referenced via alias (i.e. `projects/{project}/locations/{location}/models/{model_id}@{version_alias}` instead of auto-generated version id (i.e. `projects/{project}/locations/{location}/models/{model_id}@{version_id})`. The format is \[a-z\]\[a-zA-Z0-9-\]{0,126}\[a-z0-9\] to distinguish from version\_id. A default version alias will be created for the first version of the model, and there must be exactly one default version alias for a model.

`↳ version_create_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

Output only. Timestamp when this version was created.

`↳ version_update_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

Output only. Timestamp when this version was most recently updated.

`↳ display_name`

`string`  

Required. The display name of the Model. The name can be up to 128 characters long and can consist of any UTF-8 characters.

`↳ description`

`string`  

The description of the Model.

`↳ version_description`

`string`  

The description of this version.

`↳ predict_schemata`

`[Google\Cloud\AIPlatform\V1\PredictSchemata](/php/docs/reference/cloud-ai-platform/1.6.0/V1.PredictSchemata)`  

The schemata that describe formats of the Model's predictions and explanations as given and returned via [PredictionService.Predict](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.PredictionServiceClient#_Google_Cloud_AIPlatform_V1_Client_PredictionServiceClient__predict__) and [PredictionService.Explain](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.PredictionServiceClient#_Google_Cloud_AIPlatform_V1_Client_PredictionServiceClient__explain__).

`↳ metadata_schema_uri`

`string`  

Immutable. Points to a YAML file stored on Google Cloud Storage describing additional information about the Model, that is specific to it. Unset if the Model does not have any additional information. The schema is defined as an OpenAPI 3.0.2 [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#schemaObject). AutoML Models always have this field populated by Vertex AI, if no additional metadata is needed, this field is set to an empty string. Note: The URI given on output will be immutable and probably different, including the URI scheme, than the one given on input. The output URI will point to a location where the user only has a read access.

`↳ metadata`

`[Google\Protobuf\Value](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Value)`  

Immutable. An additional information about the Model; the schema of the metadata can be found in [metadata\_schema](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Model#_Google_Cloud_AIPlatform_V1_Model__getMetadataSchemaUri__). Unset if the Model does not have any additional information.

`↳ supported_export_formats`

`array<[Google\Cloud\AIPlatform\V1\Model\ExportFormat](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Model.ExportFormat)>`  

Output only. The formats in which this Model may be exported. If empty, this Model is not available for export.

`↳ training_pipeline`

`string`  

Output only. The resource name of the TrainingPipeline that uploaded this Model, if any.

`↳ pipeline_job`

`string`  

Optional. This field is populated if the model is produced by a pipeline job.

`↳ container_spec`

`[Google\Cloud\AIPlatform\V1\ModelContainerSpec](/php/docs/reference/cloud-ai-platform/1.6.0/V1.ModelContainerSpec)`  

Input only. The specification of the container that is to be used when deploying this Model. The specification is ingested upon [ModelService.UploadModel](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.ModelServiceClient#_Google_Cloud_AIPlatform_V1_Client_ModelServiceClient__uploadModel__), and all binaries it contains are copied and stored internally by Vertex AI. Not required for AutoML Models.

`↳ artifact_uri`

`string`  

Immutable. The path to the directory containing the Model artifact and any of its supporting files. Not required for AutoML Models.

`↳ supported_deployment_resources_types`

`array`  

Output only. When this Model is deployed, its prediction resources are described by the `prediction_resources` field of the [Endpoint.deployed\_models](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Endpoint#_Google_Cloud_AIPlatform_V1_Endpoint__getDeployedModels__) object. Because not all Models support all resource configuration types, the configuration types this Model supports are listed here. If no configuration types are listed, the Model cannot be deployed to an [Endpoint](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Endpoint) and does not support online predictions ([PredictionService.Predict](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.PredictionServiceClient#_Google_Cloud_AIPlatform_V1_Client_PredictionServiceClient__predict__) or [PredictionService.Explain](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.PredictionServiceClient#_Google_Cloud_AIPlatform_V1_Client_PredictionServiceClient__explain__)). Such a Model can serve predictions by using a [BatchPredictionJob](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob), if it has at least one entry each in [supported\_input\_storage\_formats](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Model#_Google_Cloud_AIPlatform_V1_Model__getSupportedInputStorageFormats__) and [supported\_output\_storage\_formats](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Model#_Google_Cloud_AIPlatform_V1_Model__getSupportedOutputStorageFormats__).

`↳ supported_input_storage_formats`

`array`  

Output only. The formats this Model supports in [BatchPredictionJob.input\_config](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob#_Google_Cloud_AIPlatform_V1_BatchPredictionJob__getInputConfig__). If [PredictSchemata.instance\_schema\_uri](/php/docs/reference/cloud-ai-platform/1.6.0/V1.PredictSchemata#_Google_Cloud_AIPlatform_V1_PredictSchemata__getInstanceSchemaUri__) exists, the instances should be given as per that schema. The possible formats are: \* `jsonl` The JSON Lines format, where each instance is a single line. Uses [GcsSource](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob.InputConfig#_Google_Cloud_AIPlatform_V1_BatchPredictionJob_InputConfig__getGcsSource__). \* `csv` The CSV format, where each instance is a single comma-separated line. The first line in the file is the header, containing comma-separated field names. Uses [GcsSource](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob.InputConfig#_Google_Cloud_AIPlatform_V1_BatchPredictionJob_InputConfig__getGcsSource__). \* `tf-record` The TFRecord format, where each instance is a single record in tfrecord syntax. Uses [GcsSource](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob.InputConfig#_Google_Cloud_AIPlatform_V1_BatchPredictionJob_InputConfig__getGcsSource__). \* `tf-record-gzip` Similar to `tf-record`, but the file is gzipped. Uses [GcsSource](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob.InputConfig#_Google_Cloud_AIPlatform_V1_BatchPredictionJob_InputConfig__getGcsSource__). \* `bigquery` Each instance is a single row in BigQuery. Uses [BigQuerySource](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob.InputConfig#_Google_Cloud_AIPlatform_V1_BatchPredictionJob_InputConfig__getBigquerySource__). \* `file-list` Each line of the file is the location of an instance to process, uses `gcs_source` field of the [InputConfig](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob.InputConfig) object. If this Model doesn't support any of these formats it means it cannot be used with a [BatchPredictionJob](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob). However, if it has [supported\_deployment\_resources\_types](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Model#_Google_Cloud_AIPlatform_V1_Model__getSupportedDeploymentResourcesTypes__), it could serve online predictions by using [PredictionService.Predict](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.PredictionServiceClient#_Google_Cloud_AIPlatform_V1_Client_PredictionServiceClient__predict__) or [PredictionService.Explain](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.PredictionServiceClient#_Google_Cloud_AIPlatform_V1_Client_PredictionServiceClient__explain__).

`↳ supported_output_storage_formats`

`array`  

Output only. The formats this Model supports in [BatchPredictionJob.output\_config](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob#_Google_Cloud_AIPlatform_V1_BatchPredictionJob__getOutputConfig__). If both [PredictSchemata.instance\_schema\_uri](/php/docs/reference/cloud-ai-platform/1.6.0/V1.PredictSchemata#_Google_Cloud_AIPlatform_V1_PredictSchemata__getInstanceSchemaUri__) and [PredictSchemata.prediction\_schema\_uri](/php/docs/reference/cloud-ai-platform/1.6.0/V1.PredictSchemata#_Google_Cloud_AIPlatform_V1_PredictSchemata__getPredictionSchemaUri__) exist, the predictions are returned together with their instances. In other words, the prediction has the original instance data first, followed by the actual prediction content (as per the schema). The possible formats are: \* `jsonl` The JSON Lines format, where each prediction is a single line. Uses [GcsDestination](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob.OutputConfig#_Google_Cloud_AIPlatform_V1_BatchPredictionJob_OutputConfig__getGcsDestination__). \* `csv` The CSV format, where each prediction is a single comma-separated line. The first line in the file is the header, containing comma-separated field names. Uses [GcsDestination](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob.OutputConfig#_Google_Cloud_AIPlatform_V1_BatchPredictionJob_OutputConfig__getGcsDestination__). \* `bigquery` Each prediction is a single row in a BigQuery table, uses [BigQueryDestination](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob.OutputConfig#_Google_Cloud_AIPlatform_V1_BatchPredictionJob_OutputConfig__getBigqueryDestination__) . If this Model doesn't support any of these formats it means it cannot be used with a [BatchPredictionJob](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob). However, if it has [supported\_deployment\_resources\_types](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Model#_Google_Cloud_AIPlatform_V1_Model__getSupportedDeploymentResourcesTypes__), it could serve online predictions by using [PredictionService.Predict](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.PredictionServiceClient#_Google_Cloud_AIPlatform_V1_Client_PredictionServiceClient__predict__) or [PredictionService.Explain](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.PredictionServiceClient#_Google_Cloud_AIPlatform_V1_Client_PredictionServiceClient__explain__).

`↳ create_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

Output only. Timestamp when this Model was uploaded into Vertex AI.

`↳ update_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

Output only. Timestamp when this Model was most recently updated.

`↳ deployed_models`

`array<[Google\Cloud\AIPlatform\V1\DeployedModelRef](/php/docs/reference/cloud-ai-platform/1.6.0/V1.DeployedModelRef)>`  

Output only. The pointers to DeployedModels created from this Model. Note that Model could have been deployed to Endpoints in different Locations.

`↳ explanation_spec`

`[Google\Cloud\AIPlatform\V1\ExplanationSpec](/php/docs/reference/cloud-ai-platform/1.6.0/V1.ExplanationSpec)`  

The default explanation specification for this Model. The Model can be used for [requesting explanation](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.PredictionServiceClient#_Google_Cloud_AIPlatform_V1_Client_PredictionServiceClient__explain__) after being [deployed](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.EndpointServiceClient#_Google_Cloud_AIPlatform_V1_Client_EndpointServiceClient__deployModel__) if it is populated. The Model can be used for [batch explanation](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob#_Google_Cloud_AIPlatform_V1_BatchPredictionJob__getGenerateExplanation__) if it is populated. All fields of the explanation\_spec can be overridden by [explanation\_spec](/php/docs/reference/cloud-ai-platform/1.6.0/V1.DeployedModel#_Google_Cloud_AIPlatform_V1_DeployedModel__getExplanationSpec__) of [DeployModelRequest.deployed\_model](/php/docs/reference/cloud-ai-platform/1.6.0/V1.DeployModelRequest#_Google_Cloud_AIPlatform_V1_DeployModelRequest__getDeployedModel__), or [explanation\_spec](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob#_Google_Cloud_AIPlatform_V1_BatchPredictionJob__getExplanationSpec__) of [BatchPredictionJob](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob). If the default explanation specification is not set for this Model, this Model can still be used for [requesting explanation](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.PredictionServiceClient#_Google_Cloud_AIPlatform_V1_Client_PredictionServiceClient__explain__) by setting [explanation\_spec](/php/docs/reference/cloud-ai-platform/1.6.0/V1.DeployedModel#_Google_Cloud_AIPlatform_V1_DeployedModel__getExplanationSpec__) of [DeployModelRequest.deployed\_model](/php/docs/reference/cloud-ai-platform/1.6.0/V1.DeployModelRequest#_Google_Cloud_AIPlatform_V1_DeployModelRequest__getDeployedModel__) and for [batch explanation](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob#_Google_Cloud_AIPlatform_V1_BatchPredictionJob__getGenerateExplanation__) by setting [explanation\_spec](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob#_Google_Cloud_AIPlatform_V1_BatchPredictionJob__getExplanationSpec__) of [BatchPredictionJob](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob).

`↳ etag`

`string`  

Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.

`↳ labels`

`array|[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`  

The labels with user-defined metadata to organize your Models. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See [https://goo.gl/xmQnxf](https://goo.gl/xmQnxf) for more information and examples of labels.

`↳ data_stats`

`[Google\Cloud\AIPlatform\V1\Model\DataStats](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Model.DataStats)`  

Stats of data used for training or evaluating the Model. Only populated when the Model is trained by a TrainingPipeline with data\_input\_config.

`↳ encryption_spec`

`[Google\Cloud\AIPlatform\V1\EncryptionSpec](/php/docs/reference/cloud-ai-platform/1.6.0/V1.EncryptionSpec)`  

Customer-managed encryption key spec for a Model. If set, this Model and all sub-resources of this Model will be secured by this key.

`↳ model_source_info`

`[Google\Cloud\AIPlatform\V1\ModelSourceInfo](/php/docs/reference/cloud-ai-platform/1.6.0/V1.ModelSourceInfo)`  

Output only. Source of a model. It can either be automl training pipeline, custom training pipeline, BigQuery ML, or saved and tuned from Genie or Model Garden.

`↳ original_model_info`

`[Google\Cloud\AIPlatform\V1\Model\OriginalModelInfo](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Model.OriginalModelInfo)`  

Output only. If this Model is a copy of another Model, this contains info about the original.

`↳ metadata_artifact`

`string`  

Output only. The resource name of the Artifact that was created in MetadataStore when creating the Model. The Artifact resource name pattern is `projects/{project}/locations/{location}/metadataStores/{metadata_store}/artifacts/{artifact}`.

`↳ base_model_source`

`[Google\Cloud\AIPlatform\V1\Model\BaseModelSource](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Model.BaseModelSource)`  

Optional. User input field to specify the base model source. Currently it only supports specifing the Model Garden models and Genie models.

`↳ satisfies_pzs`

`bool`  

Output only. Reserved for future use.

`↳ satisfies_pzi`

`bool`  

Output only. Reserved for future use.

### getName

The resource name of the Model.

**Returns**

**Type**

**Description**

`string`

### setName

The resource name of the Model.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getVersionId

Output only. Immutable. The version ID of the model.

A new version is committed when a new model version is uploaded or trained under an existing model id. It is an auto-incrementing decimal number in string representation.

**Returns**

**Type**

**Description**

`string`

### setVersionId

Output only. Immutable. The version ID of the model.

A new version is committed when a new model version is uploaded or trained under an existing model id. It is an auto-incrementing decimal number in string representation.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getVersionAliases

User provided version aliases so that a model version can be referenced via alias (i.e.

`projects/{project}/locations/{location}/models/{model_id}@{version_alias}` instead of auto-generated version id (i.e. `projects/{project}/locations/{location}/models/{model_id}@{version_id})`. The format is \[a-z\]\[a-zA-Z0-9-\]{0,126}\[a-z0-9\] to distinguish from version\_id. A default version alias will be created for the first version of the model, and there must be exactly one default version alias for a model.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setVersionAliases

User provided version aliases so that a model version can be referenced via alias (i.e.

`projects/{project}/locations/{location}/models/{model_id}@{version_alias}` instead of auto-generated version id (i.e. `projects/{project}/locations/{location}/models/{model_id}@{version_id})`. The format is \[a-z\]\[a-zA-Z0-9-\]{0,126}\[a-z0-9\] to distinguish from version\_id. A default version alias will be created for the first version of the model, and there must be exactly one default version alias for a model.

**Parameter**

**Name**

**Description**

`var`

`string[]`  

**Returns**

**Type**

**Description**

`$this`

### getVersionCreateTime

Output only. Timestamp when this version was created.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasVersionCreateTime

### clearVersionCreateTime

### setVersionCreateTime

Output only. Timestamp when this version was created.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

**Returns**

**Type**

**Description**

`$this`

### getVersionUpdateTime

Output only. Timestamp when this version was most recently updated.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasVersionUpdateTime

### clearVersionUpdateTime

### setVersionUpdateTime

Output only. Timestamp when this version was most recently updated.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

**Returns**

**Type**

**Description**

`$this`

### getDisplayName

Required. The display name of the Model.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

**Returns**

**Type**

**Description**

`string`

### setDisplayName

Required. The display name of the Model.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getDescription

The description of the Model.

**Returns**

**Type**

**Description**

`string`

### setDescription

The description of the Model.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getVersionDescription

The description of this version.

**Returns**

**Type**

**Description**

`string`

### setVersionDescription

The description of this version.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getPredictSchemata

The schemata that describe formats of the Model's predictions and explanations as given and returned via [PredictionService.Predict](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.PredictionServiceClient#_Google_Cloud_AIPlatform_V1_Client_PredictionServiceClient__predict__) and [PredictionService.Explain](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.PredictionServiceClient#_Google_Cloud_AIPlatform_V1_Client_PredictionServiceClient__explain__).

**Returns**

**Type**

**Description**

`[Google\Cloud\AIPlatform\V1\PredictSchemata](/php/docs/reference/cloud-ai-platform/1.6.0/V1.PredictSchemata)|null`

### hasPredictSchemata

### clearPredictSchemata

### setPredictSchemata

The schemata that describe formats of the Model's predictions and explanations as given and returned via [PredictionService.Predict](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.PredictionServiceClient#_Google_Cloud_AIPlatform_V1_Client_PredictionServiceClient__predict__) and [PredictionService.Explain](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.PredictionServiceClient#_Google_Cloud_AIPlatform_V1_Client_PredictionServiceClient__explain__).

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\AIPlatform\V1\PredictSchemata](/php/docs/reference/cloud-ai-platform/1.6.0/V1.PredictSchemata)`  

**Returns**

**Type**

**Description**

`$this`

### getMetadataSchemaUri

Immutable. Points to a YAML file stored on Google Cloud Storage describing additional information about the Model, that is specific to it. Unset if the Model does not have any additional information. The schema is defined as an OpenAPI 3.0.2 [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#schemaObject).

AutoML Models always have this field populated by Vertex AI, if no additional metadata is needed, this field is set to an empty string. Note: The URI given on output will be immutable and probably different, including the URI scheme, than the one given on input. The output URI will point to a location where the user only has a read access.

**Returns**

**Type**

**Description**

`string`

### setMetadataSchemaUri

Immutable. Points to a YAML file stored on Google Cloud Storage describing additional information about the Model, that is specific to it. Unset if the Model does not have any additional information. The schema is defined as an OpenAPI 3.0.2 [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#schemaObject).

AutoML Models always have this field populated by Vertex AI, if no additional metadata is needed, this field is set to an empty string. Note: The URI given on output will be immutable and probably different, including the URI scheme, than the one given on input. The output URI will point to a location where the user only has a read access.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getMetadata

Immutable. An additional information about the Model; the schema of the metadata can be found in [metadata\_schema](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Model#_Google_Cloud_AIPlatform_V1_Model__getMetadataSchemaUri__).

Unset if the Model does not have any additional information.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Value](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Value)|null`

### hasMetadata

### clearMetadata

### setMetadata

Immutable. An additional information about the Model; the schema of the metadata can be found in [metadata\_schema](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Model#_Google_Cloud_AIPlatform_V1_Model__getMetadataSchemaUri__).

Unset if the Model does not have any additional information.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Value](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Value)`  

**Returns**

**Type**

**Description**

`$this`

### getSupportedExportFormats

Output only. The formats in which this Model may be exported. If empty, this Model is not available for export.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setSupportedExportFormats

Output only. The formats in which this Model may be exported. If empty, this Model is not available for export.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\AIPlatform\V1\Model\ExportFormat](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Model.ExportFormat)>`  

**Returns**

**Type**

**Description**

`$this`

### getTrainingPipeline

Output only. The resource name of the TrainingPipeline that uploaded this Model, if any.

**Returns**

**Type**

**Description**

`string`

### setTrainingPipeline

Output only. The resource name of the TrainingPipeline that uploaded this Model, if any.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getPipelineJob

Optional. This field is populated if the model is produced by a pipeline job.

**Returns**

**Type**

**Description**

`string`

### setPipelineJob

Optional. This field is populated if the model is produced by a pipeline job.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getContainerSpec

Input only. The specification of the container that is to be used when deploying this Model. The specification is ingested upon [ModelService.UploadModel](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.ModelServiceClient#_Google_Cloud_AIPlatform_V1_Client_ModelServiceClient__uploadModel__), and all binaries it contains are copied and stored internally by Vertex AI.

Not required for AutoML Models.

**Returns**

**Type**

**Description**

`[Google\Cloud\AIPlatform\V1\ModelContainerSpec](/php/docs/reference/cloud-ai-platform/1.6.0/V1.ModelContainerSpec)|null`

### hasContainerSpec

### clearContainerSpec

### setContainerSpec

Input only. The specification of the container that is to be used when deploying this Model. The specification is ingested upon [ModelService.UploadModel](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.ModelServiceClient#_Google_Cloud_AIPlatform_V1_Client_ModelServiceClient__uploadModel__), and all binaries it contains are copied and stored internally by Vertex AI.

Not required for AutoML Models.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\AIPlatform\V1\ModelContainerSpec](/php/docs/reference/cloud-ai-platform/1.6.0/V1.ModelContainerSpec)`  

**Returns**

**Type**

**Description**

`$this`

### getArtifactUri

Immutable. The path to the directory containing the Model artifact and any of its supporting files. Not required for AutoML Models.

**Returns**

**Type**

**Description**

`string`

### setArtifactUri

Immutable. The path to the directory containing the Model artifact and any of its supporting files. Not required for AutoML Models.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getSupportedDeploymentResourcesTypes

Output only. When this Model is deployed, its prediction resources are described by the `prediction_resources` field of the [Endpoint.deployed\_models](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Endpoint#_Google_Cloud_AIPlatform_V1_Endpoint__getDeployedModels__) object. Because not all Models support all resource configuration types, the configuration types this Model supports are listed here. If no configuration types are listed, the Model cannot be deployed to an [Endpoint](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Endpoint) and does not support online predictions ([PredictionService.Predict](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.PredictionServiceClient#_Google_Cloud_AIPlatform_V1_Client_PredictionServiceClient__predict__) or [PredictionService.Explain](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.PredictionServiceClient#_Google_Cloud_AIPlatform_V1_Client_PredictionServiceClient__explain__)).

Such a Model can serve predictions by using a [BatchPredictionJob](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob), if it has at least one entry each in [supported\_input\_storage\_formats](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Model#_Google_Cloud_AIPlatform_V1_Model__getSupportedInputStorageFormats__) and [supported\_output\_storage\_formats](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Model#_Google_Cloud_AIPlatform_V1_Model__getSupportedOutputStorageFormats__).

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setSupportedDeploymentResourcesTypes

Output only. When this Model is deployed, its prediction resources are described by the `prediction_resources` field of the [Endpoint.deployed\_models](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Endpoint#_Google_Cloud_AIPlatform_V1_Endpoint__getDeployedModels__) object. Because not all Models support all resource configuration types, the configuration types this Model supports are listed here. If no configuration types are listed, the Model cannot be deployed to an [Endpoint](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Endpoint) and does not support online predictions ([PredictionService.Predict](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.PredictionServiceClient#_Google_Cloud_AIPlatform_V1_Client_PredictionServiceClient__predict__) or [PredictionService.Explain](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.PredictionServiceClient#_Google_Cloud_AIPlatform_V1_Client_PredictionServiceClient__explain__)).

Such a Model can serve predictions by using a [BatchPredictionJob](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob), if it has at least one entry each in [supported\_input\_storage\_formats](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Model#_Google_Cloud_AIPlatform_V1_Model__getSupportedInputStorageFormats__) and [supported\_output\_storage\_formats](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Model#_Google_Cloud_AIPlatform_V1_Model__getSupportedOutputStorageFormats__).

**Parameter**

**Name**

**Description**

`var`

`int[]`  

**Returns**

**Type**

**Description**

`$this`

### getSupportedInputStorageFormats

Output only. The formats this Model supports in [BatchPredictionJob.input\_config](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob#_Google_Cloud_AIPlatform_V1_BatchPredictionJob__getInputConfig__).

If [PredictSchemata.instance\_schema\_uri](/php/docs/reference/cloud-ai-platform/1.6.0/V1.PredictSchemata#_Google_Cloud_AIPlatform_V1_PredictSchemata__getInstanceSchemaUri__) exists, the instances should be given as per that schema. The possible formats are:

-   `jsonl` The JSON Lines format, where each instance is a single line. Uses [GcsSource](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob.InputConfig#_Google_Cloud_AIPlatform_V1_BatchPredictionJob_InputConfig__getGcsSource__).
-   `csv` The CSV format, where each instance is a single comma-separated line. The first line in the file is the header, containing comma-separated field names. Uses [GcsSource](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob.InputConfig#_Google_Cloud_AIPlatform_V1_BatchPredictionJob_InputConfig__getGcsSource__).
-   `tf-record` The TFRecord format, where each instance is a single record in tfrecord syntax. Uses [GcsSource](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob.InputConfig#_Google_Cloud_AIPlatform_V1_BatchPredictionJob_InputConfig__getGcsSource__).
-   `tf-record-gzip` Similar to `tf-record`, but the file is gzipped. Uses [GcsSource](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob.InputConfig#_Google_Cloud_AIPlatform_V1_BatchPredictionJob_InputConfig__getGcsSource__).
-   `bigquery` Each instance is a single row in BigQuery. Uses [BigQuerySource](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob.InputConfig#_Google_Cloud_AIPlatform_V1_BatchPredictionJob_InputConfig__getBigquerySource__).
-   `file-list` Each line of the file is the location of an instance to process, uses `gcs_source` field of the [InputConfig](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob.InputConfig) object. If this Model doesn't support any of these formats it means it cannot be used with a [BatchPredictionJob](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob). However, if it has [supported\_deployment\_resources\_types](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Model#_Google_Cloud_AIPlatform_V1_Model__getSupportedDeploymentResourcesTypes__), it could serve online predictions by using [PredictionService.Predict](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.PredictionServiceClient#_Google_Cloud_AIPlatform_V1_Client_PredictionServiceClient__predict__) or [PredictionService.Explain](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.PredictionServiceClient#_Google_Cloud_AIPlatform_V1_Client_PredictionServiceClient__explain__).

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setSupportedInputStorageFormats

Output only. The formats this Model supports in [BatchPredictionJob.input\_config](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob#_Google_Cloud_AIPlatform_V1_BatchPredictionJob__getInputConfig__).

If [PredictSchemata.instance\_schema\_uri](/php/docs/reference/cloud-ai-platform/1.6.0/V1.PredictSchemata#_Google_Cloud_AIPlatform_V1_PredictSchemata__getInstanceSchemaUri__) exists, the instances should be given as per that schema. The possible formats are:

-   `jsonl` The JSON Lines format, where each instance is a single line. Uses [GcsSource](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob.InputConfig#_Google_Cloud_AIPlatform_V1_BatchPredictionJob_InputConfig__getGcsSource__).
-   `csv` The CSV format, where each instance is a single comma-separated line. The first line in the file is the header, containing comma-separated field names. Uses [GcsSource](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob.InputConfig#_Google_Cloud_AIPlatform_V1_BatchPredictionJob_InputConfig__getGcsSource__).
-   `tf-record` The TFRecord format, where each instance is a single record in tfrecord syntax. Uses [GcsSource](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob.InputConfig#_Google_Cloud_AIPlatform_V1_BatchPredictionJob_InputConfig__getGcsSource__).
-   `tf-record-gzip` Similar to `tf-record`, but the file is gzipped. Uses [GcsSource](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob.InputConfig#_Google_Cloud_AIPlatform_V1_BatchPredictionJob_InputConfig__getGcsSource__).
-   `bigquery` Each instance is a single row in BigQuery. Uses [BigQuerySource](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob.InputConfig#_Google_Cloud_AIPlatform_V1_BatchPredictionJob_InputConfig__getBigquerySource__).
-   `file-list` Each line of the file is the location of an instance to process, uses `gcs_source` field of the [InputConfig](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob.InputConfig) object. If this Model doesn't support any of these formats it means it cannot be used with a [BatchPredictionJob](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob). However, if it has [supported\_deployment\_resources\_types](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Model#_Google_Cloud_AIPlatform_V1_Model__getSupportedDeploymentResourcesTypes__), it could serve online predictions by using [PredictionService.Predict](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.PredictionServiceClient#_Google_Cloud_AIPlatform_V1_Client_PredictionServiceClient__predict__) or [PredictionService.Explain](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.PredictionServiceClient#_Google_Cloud_AIPlatform_V1_Client_PredictionServiceClient__explain__).

**Parameter**

**Name**

**Description**

`var`

`string[]`  

**Returns**

**Type**

**Description**

`$this`

### getSupportedOutputStorageFormats

Output only. The formats this Model supports in [BatchPredictionJob.output\_config](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob#_Google_Cloud_AIPlatform_V1_BatchPredictionJob__getOutputConfig__).

If both [PredictSchemata.instance\_schema\_uri](/php/docs/reference/cloud-ai-platform/1.6.0/V1.PredictSchemata#_Google_Cloud_AIPlatform_V1_PredictSchemata__getInstanceSchemaUri__) and [PredictSchemata.prediction\_schema\_uri](/php/docs/reference/cloud-ai-platform/1.6.0/V1.PredictSchemata#_Google_Cloud_AIPlatform_V1_PredictSchemata__getPredictionSchemaUri__) exist, the predictions are returned together with their instances. In other words, the prediction has the original instance data first, followed by the actual prediction content (as per the schema). The possible formats are:

-   `jsonl` The JSON Lines format, where each prediction is a single line. Uses [GcsDestination](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob.OutputConfig#_Google_Cloud_AIPlatform_V1_BatchPredictionJob_OutputConfig__getGcsDestination__).
-   `csv` The CSV format, where each prediction is a single comma-separated line. The first line in the file is the header, containing comma-separated field names. Uses [GcsDestination](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob.OutputConfig#_Google_Cloud_AIPlatform_V1_BatchPredictionJob_OutputConfig__getGcsDestination__).
-   `bigquery` Each prediction is a single row in a BigQuery table, uses [BigQueryDestination](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob.OutputConfig#_Google_Cloud_AIPlatform_V1_BatchPredictionJob_OutputConfig__getBigqueryDestination__) . If this Model doesn't support any of these formats it means it cannot be used with a [BatchPredictionJob](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob). However, if it has [supported\_deployment\_resources\_types](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Model#_Google_Cloud_AIPlatform_V1_Model__getSupportedDeploymentResourcesTypes__), it could serve online predictions by using [PredictionService.Predict](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.PredictionServiceClient#_Google_Cloud_AIPlatform_V1_Client_PredictionServiceClient__predict__) or [PredictionService.Explain](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.PredictionServiceClient#_Google_Cloud_AIPlatform_V1_Client_PredictionServiceClient__explain__).

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setSupportedOutputStorageFormats

Output only. The formats this Model supports in [BatchPredictionJob.output\_config](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob#_Google_Cloud_AIPlatform_V1_BatchPredictionJob__getOutputConfig__).

If both [PredictSchemata.instance\_schema\_uri](/php/docs/reference/cloud-ai-platform/1.6.0/V1.PredictSchemata#_Google_Cloud_AIPlatform_V1_PredictSchemata__getInstanceSchemaUri__) and [PredictSchemata.prediction\_schema\_uri](/php/docs/reference/cloud-ai-platform/1.6.0/V1.PredictSchemata#_Google_Cloud_AIPlatform_V1_PredictSchemata__getPredictionSchemaUri__) exist, the predictions are returned together with their instances. In other words, the prediction has the original instance data first, followed by the actual prediction content (as per the schema). The possible formats are:

-   `jsonl` The JSON Lines format, where each prediction is a single line. Uses [GcsDestination](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob.OutputConfig#_Google_Cloud_AIPlatform_V1_BatchPredictionJob_OutputConfig__getGcsDestination__).
-   `csv` The CSV format, where each prediction is a single comma-separated line. The first line in the file is the header, containing comma-separated field names. Uses [GcsDestination](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob.OutputConfig#_Google_Cloud_AIPlatform_V1_BatchPredictionJob_OutputConfig__getGcsDestination__).
-   `bigquery` Each prediction is a single row in a BigQuery table, uses [BigQueryDestination](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob.OutputConfig#_Google_Cloud_AIPlatform_V1_BatchPredictionJob_OutputConfig__getBigqueryDestination__) . If this Model doesn't support any of these formats it means it cannot be used with a [BatchPredictionJob](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob). However, if it has [supported\_deployment\_resources\_types](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Model#_Google_Cloud_AIPlatform_V1_Model__getSupportedDeploymentResourcesTypes__), it could serve online predictions by using [PredictionService.Predict](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.PredictionServiceClient#_Google_Cloud_AIPlatform_V1_Client_PredictionServiceClient__predict__) or [PredictionService.Explain](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.PredictionServiceClient#_Google_Cloud_AIPlatform_V1_Client_PredictionServiceClient__explain__).

**Parameter**

**Name**

**Description**

`var`

`string[]`  

**Returns**

**Type**

**Description**

`$this`

### getCreateTime

Output only. Timestamp when this Model was uploaded into Vertex AI.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasCreateTime

### clearCreateTime

### setCreateTime

Output only. Timestamp when this Model was uploaded into Vertex AI.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

**Returns**

**Type**

**Description**

`$this`

### getUpdateTime

Output only. Timestamp when this Model was most recently updated.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasUpdateTime

### clearUpdateTime

### setUpdateTime

Output only. Timestamp when this Model was most recently updated.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

**Returns**

**Type**

**Description**

`$this`

### getDeployedModels

Output only. The pointers to DeployedModels created from this Model. Note that Model could have been deployed to Endpoints in different Locations.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setDeployedModels

Output only. The pointers to DeployedModels created from this Model. Note that Model could have been deployed to Endpoints in different Locations.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\AIPlatform\V1\DeployedModelRef](/php/docs/reference/cloud-ai-platform/1.6.0/V1.DeployedModelRef)>`  

**Returns**

**Type**

**Description**

`$this`

### getExplanationSpec

The default explanation specification for this Model.

The Model can be used for [requesting explanation](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.PredictionServiceClient#_Google_Cloud_AIPlatform_V1_Client_PredictionServiceClient__explain__) after being [deployed](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.EndpointServiceClient#_Google_Cloud_AIPlatform_V1_Client_EndpointServiceClient__deployModel__) if it is populated. The Model can be used for [batch explanation](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob#_Google_Cloud_AIPlatform_V1_BatchPredictionJob__getGenerateExplanation__) if it is populated. All fields of the explanation\_spec can be overridden by [explanation\_spec](/php/docs/reference/cloud-ai-platform/1.6.0/V1.DeployedModel#_Google_Cloud_AIPlatform_V1_DeployedModel__getExplanationSpec__) of [DeployModelRequest.deployed\_model](/php/docs/reference/cloud-ai-platform/1.6.0/V1.DeployModelRequest#_Google_Cloud_AIPlatform_V1_DeployModelRequest__getDeployedModel__), or [explanation\_spec](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob#_Google_Cloud_AIPlatform_V1_BatchPredictionJob__getExplanationSpec__) of [BatchPredictionJob](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob). If the default explanation specification is not set for this Model, this Model can still be used for [requesting explanation](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.PredictionServiceClient#_Google_Cloud_AIPlatform_V1_Client_PredictionServiceClient__explain__) by setting [explanation\_spec](/php/docs/reference/cloud-ai-platform/1.6.0/V1.DeployedModel#_Google_Cloud_AIPlatform_V1_DeployedModel__getExplanationSpec__) of [DeployModelRequest.deployed\_model](/php/docs/reference/cloud-ai-platform/1.6.0/V1.DeployModelRequest#_Google_Cloud_AIPlatform_V1_DeployModelRequest__getDeployedModel__) and for [batch explanation](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob#_Google_Cloud_AIPlatform_V1_BatchPredictionJob__getGenerateExplanation__) by setting [explanation\_spec](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob#_Google_Cloud_AIPlatform_V1_BatchPredictionJob__getExplanationSpec__) of [BatchPredictionJob](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob).

**Returns**

**Type**

**Description**

`[Google\Cloud\AIPlatform\V1\ExplanationSpec](/php/docs/reference/cloud-ai-platform/1.6.0/V1.ExplanationSpec)|null`

### hasExplanationSpec

### clearExplanationSpec

### setExplanationSpec

The default explanation specification for this Model.

The Model can be used for [requesting explanation](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.PredictionServiceClient#_Google_Cloud_AIPlatform_V1_Client_PredictionServiceClient__explain__) after being [deployed](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.EndpointServiceClient#_Google_Cloud_AIPlatform_V1_Client_EndpointServiceClient__deployModel__) if it is populated. The Model can be used for [batch explanation](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob#_Google_Cloud_AIPlatform_V1_BatchPredictionJob__getGenerateExplanation__) if it is populated. All fields of the explanation\_spec can be overridden by [explanation\_spec](/php/docs/reference/cloud-ai-platform/1.6.0/V1.DeployedModel#_Google_Cloud_AIPlatform_V1_DeployedModel__getExplanationSpec__) of [DeployModelRequest.deployed\_model](/php/docs/reference/cloud-ai-platform/1.6.0/V1.DeployModelRequest#_Google_Cloud_AIPlatform_V1_DeployModelRequest__getDeployedModel__), or [explanation\_spec](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob#_Google_Cloud_AIPlatform_V1_BatchPredictionJob__getExplanationSpec__) of [BatchPredictionJob](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob). If the default explanation specification is not set for this Model, this Model can still be used for [requesting explanation](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.PredictionServiceClient#_Google_Cloud_AIPlatform_V1_Client_PredictionServiceClient__explain__) by setting [explanation\_spec](/php/docs/reference/cloud-ai-platform/1.6.0/V1.DeployedModel#_Google_Cloud_AIPlatform_V1_DeployedModel__getExplanationSpec__) of [DeployModelRequest.deployed\_model](/php/docs/reference/cloud-ai-platform/1.6.0/V1.DeployModelRequest#_Google_Cloud_AIPlatform_V1_DeployModelRequest__getDeployedModel__) and for [batch explanation](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob#_Google_Cloud_AIPlatform_V1_BatchPredictionJob__getGenerateExplanation__) by setting [explanation\_spec](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob#_Google_Cloud_AIPlatform_V1_BatchPredictionJob__getExplanationSpec__) of [BatchPredictionJob](/php/docs/reference/cloud-ai-platform/1.6.0/V1.BatchPredictionJob).

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\AIPlatform\V1\ExplanationSpec](/php/docs/reference/cloud-ai-platform/1.6.0/V1.ExplanationSpec)`  

**Returns**

**Type**

**Description**

`$this`

### getEtag

Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.

**Returns**

**Type**

**Description**

`string`

### setEtag

Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getLabels

The labels with user-defined metadata to organize your Models.

Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See [https://goo.gl/xmQnxf](https://goo.gl/xmQnxf) for more information and examples of labels.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`

### setLabels

The labels with user-defined metadata to organize your Models.

Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See [https://goo.gl/xmQnxf](https://goo.gl/xmQnxf) for more information and examples of labels.

**Parameter**

**Name**

**Description**

`var`

`array|[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`  

**Returns**

**Type**

**Description**

`$this`

### getDataStats

Stats of data used for training or evaluating the Model.

Only populated when the Model is trained by a TrainingPipeline with data\_input\_config.

**Returns**

**Type**

**Description**

`[Google\Cloud\AIPlatform\V1\Model\DataStats](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Model.DataStats)|null`

### hasDataStats

### clearDataStats

### setDataStats

Stats of data used for training or evaluating the Model.

Only populated when the Model is trained by a TrainingPipeline with data\_input\_config.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\AIPlatform\V1\Model\DataStats](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Model.DataStats)`  

**Returns**

**Type**

**Description**

`$this`

### getEncryptionSpec

Customer-managed encryption key spec for a Model. If set, this Model and all sub-resources of this Model will be secured by this key.

**Returns**

**Type**

**Description**

`[Google\Cloud\AIPlatform\V1\EncryptionSpec](/php/docs/reference/cloud-ai-platform/1.6.0/V1.EncryptionSpec)|null`

### hasEncryptionSpec

### clearEncryptionSpec

### setEncryptionSpec

Customer-managed encryption key spec for a Model. If set, this Model and all sub-resources of this Model will be secured by this key.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\AIPlatform\V1\EncryptionSpec](/php/docs/reference/cloud-ai-platform/1.6.0/V1.EncryptionSpec)`  

**Returns**

**Type**

**Description**

`$this`

### getModelSourceInfo

Output only. Source of a model. It can either be automl training pipeline, custom training pipeline, BigQuery ML, or saved and tuned from Genie or Model Garden.

**Returns**

**Type**

**Description**

`[Google\Cloud\AIPlatform\V1\ModelSourceInfo](/php/docs/reference/cloud-ai-platform/1.6.0/V1.ModelSourceInfo)|null`

### hasModelSourceInfo

### clearModelSourceInfo

### setModelSourceInfo

Output only. Source of a model. It can either be automl training pipeline, custom training pipeline, BigQuery ML, or saved and tuned from Genie or Model Garden.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\AIPlatform\V1\ModelSourceInfo](/php/docs/reference/cloud-ai-platform/1.6.0/V1.ModelSourceInfo)`  

**Returns**

**Type**

**Description**

`$this`

### getOriginalModelInfo

Output only. If this Model is a copy of another Model, this contains info about the original.

**Returns**

**Type**

**Description**

`[Google\Cloud\AIPlatform\V1\Model\OriginalModelInfo](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Model.OriginalModelInfo)|null`

### hasOriginalModelInfo

### clearOriginalModelInfo

### setOriginalModelInfo

Output only. If this Model is a copy of another Model, this contains info about the original.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\AIPlatform\V1\Model\OriginalModelInfo](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Model.OriginalModelInfo)`  

**Returns**

**Type**

**Description**

`$this`

### getMetadataArtifact

Output only. The resource name of the Artifact that was created in MetadataStore when creating the Model. The Artifact resource name pattern is `projects/{project}/locations/{location}/metadataStores/{metadata_store}/artifacts/{artifact}`.

**Returns**

**Type**

**Description**

`string`

### setMetadataArtifact

Output only. The resource name of the Artifact that was created in MetadataStore when creating the Model. The Artifact resource name pattern is `projects/{project}/locations/{location}/metadataStores/{metadata_store}/artifacts/{artifact}`.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getBaseModelSource

Optional. User input field to specify the base model source. Currently it only supports specifing the Model Garden models and Genie models.

**Returns**

**Type**

**Description**

`[Google\Cloud\AIPlatform\V1\Model\BaseModelSource](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Model.BaseModelSource)|null`

### hasBaseModelSource

### clearBaseModelSource

### setBaseModelSource

Optional. User input field to specify the base model source. Currently it only supports specifing the Model Garden models and Genie models.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\AIPlatform\V1\Model\BaseModelSource](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Model.BaseModelSource)`  

**Returns**

**Type**

**Description**

`$this`

### getSatisfiesPzs

Output only. Reserved for future use.

**Returns**

**Type**

**Description**

`bool`

### setSatisfiesPzs

Output only. Reserved for future use.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

### getSatisfiesPzi

Output only. Reserved for future use.

**Returns**

**Type**

**Description**

`bool`

### setSatisfiesPzi

Output only. Reserved for future use.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
