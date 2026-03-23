-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Ai Platform V1 Client - Class ModelDeploymentMonitoringJob (1.11.0) Stay organized with collections Save and categorize content based on your preferences.

1.54.0 (latest) 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.1 1.31.0 1.30.0 1.26.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.1 1.12.0 1.11.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.39.0 0.38.0 0.37.1 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.2 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.1 0.10.0

Reference documentation and code samples for the Google Cloud Ai Platform V1 Client class ModelDeploymentMonitoringJob.

Represents a job that runs periodically to monitor the deployed models in an endpoint. It will analyze the logged training & prediction data to detect any abnormal behaviors.

Generated from protobuf message `google.cloud.aiplatform.v1.ModelDeploymentMonitoringJob`

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

Output only. Resource name of a ModelDeploymentMonitoringJob.

`↳ display_name`

`string`  

Required. The user-defined name of the ModelDeploymentMonitoringJob. The name can be up to 128 characters long and can consist of any UTF-8 characters. Display name of a ModelDeploymentMonitoringJob.

`↳ endpoint`

`string`  

Required. Endpoint resource name. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`

`↳ state`

`int`  

Output only. The detailed state of the monitoring job. When the job is still creating, the state will be 'PENDING'. Once the job is successfully created, the state will be 'RUNNING'. Pause the job, the state will be 'PAUSED'. Resume the job, the state will return to 'RUNNING'.

`↳ schedule_state`

`int`  

Output only. Schedule state when the monitoring job is in Running state.

`↳ latest_monitoring_pipeline_metadata`

`[Google\Cloud\AIPlatform\V1\ModelDeploymentMonitoringJob\LatestMonitoringPipelineMetadata](/php/docs/reference/cloud-ai-platform/1.11.0/V1.ModelDeploymentMonitoringJob.LatestMonitoringPipelineMetadata)`  

Output only. Latest triggered monitoring pipeline metadata.

`↳ model_deployment_monitoring_objective_configs`

`array<[Google\Cloud\AIPlatform\V1\ModelDeploymentMonitoringObjectiveConfig](/php/docs/reference/cloud-ai-platform/1.11.0/V1.ModelDeploymentMonitoringObjectiveConfig)>`  

Required. The config for monitoring objectives. This is a per DeployedModel config. Each DeployedModel needs to be configured separately.

`↳ model_deployment_monitoring_schedule_config`

`[Google\Cloud\AIPlatform\V1\ModelDeploymentMonitoringScheduleConfig](/php/docs/reference/cloud-ai-platform/1.11.0/V1.ModelDeploymentMonitoringScheduleConfig)`  

Required. Schedule config for running the monitoring job.

`↳ logging_sampling_strategy`

`[Google\Cloud\AIPlatform\V1\SamplingStrategy](/php/docs/reference/cloud-ai-platform/1.11.0/V1.SamplingStrategy)`  

Required. Sample Strategy for logging.

`↳ model_monitoring_alert_config`

`[Google\Cloud\AIPlatform\V1\ModelMonitoringAlertConfig](/php/docs/reference/cloud-ai-platform/1.11.0/V1.ModelMonitoringAlertConfig)`  

Alert config for model monitoring.

`↳ predict_instance_schema_uri`

`string`  

YAML schema file uri describing the format of a single instance, which are given to format this Endpoint's prediction (and explanation). If not set, we will generate predict schema from collected predict requests.

`↳ sample_predict_instance`

`[Google\Protobuf\Value](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Value)`  

Sample Predict instance, same format as [PredictRequest.instances](/php/docs/reference/cloud-ai-platform/1.11.0/V1.PredictRequest#_Google_Cloud_AIPlatform_V1_PredictRequest__getInstances__), this can be set as a replacement of [ModelDeploymentMonitoringJob.predict\_instance\_schema\_uri](/php/docs/reference/cloud-ai-platform/1.11.0/V1.ModelDeploymentMonitoringJob#_Google_Cloud_AIPlatform_V1_ModelDeploymentMonitoringJob__getPredictInstanceSchemaUri__). If not set, we will generate predict schema from collected predict requests.

`↳ analysis_instance_schema_uri`

`string`  

YAML schema file uri describing the format of a single instance that you want Tensorflow Data Validation (TFDV) to analyze. If this field is empty, all the feature data types are inferred from [predict\_instance\_schema\_uri](/php/docs/reference/cloud-ai-platform/1.11.0/V1.ModelDeploymentMonitoringJob#_Google_Cloud_AIPlatform_V1_ModelDeploymentMonitoringJob__getPredictInstanceSchemaUri__), meaning that TFDV will use the data in the exact format(data type) as prediction request/response. If there are any data type differences between predict instance and TFDV instance, this field can be used to override the schema. For models trained with Vertex AI, this field must be set as all the fields in predict instance formatted as string.

`↳ bigquery_tables`

`array<[Google\Cloud\AIPlatform\V1\ModelDeploymentMonitoringBigQueryTable](/php/docs/reference/cloud-ai-platform/1.11.0/V1.ModelDeploymentMonitoringBigQueryTable)>`  

Output only. The created bigquery tables for the job under customer project. Customer could do their own query & analysis. There could be 4 log tables in maximum: 1. Training data logging predict request/response 2. Serving data logging predict request/response

`↳ log_ttl`

`[Google\Protobuf\Duration](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Duration)`  

The TTL of BigQuery tables in user projects which stores logs. A day is the basic unit of the TTL and we take the ceil of TTL/86400(a day). e.g. { second: 3600} indicates ttl = 1 day.

`↳ labels`

`array|[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`  

The labels with user-defined metadata to organize your ModelDeploymentMonitoringJob. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See [https://goo.gl/xmQnxf](https://goo.gl/xmQnxf) for more information and examples of labels.

`↳ create_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

Output only. Timestamp when this ModelDeploymentMonitoringJob was created.

`↳ update_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

Output only. Timestamp when this ModelDeploymentMonitoringJob was updated most recently.

`↳ next_schedule_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

Output only. Timestamp when this monitoring pipeline will be scheduled to run for the next round.

`↳ stats_anomalies_base_directory`

`[Google\Cloud\AIPlatform\V1\GcsDestination](/php/docs/reference/cloud-ai-platform/1.11.0/V1.GcsDestination)`  

Stats anomalies base folder path.

`↳ encryption_spec`

`[Google\Cloud\AIPlatform\V1\EncryptionSpec](/php/docs/reference/cloud-ai-platform/1.11.0/V1.EncryptionSpec)`  

Customer-managed encryption key spec for a ModelDeploymentMonitoringJob. If set, this ModelDeploymentMonitoringJob and all sub-resources of this ModelDeploymentMonitoringJob will be secured by this key.

`↳ enable_monitoring_pipeline_logs`

`bool`  

If true, the scheduled monitoring pipeline logs are sent to Google Cloud Logging, including pipeline status and anomalies detected. Please note the logs incur cost, which are subject to [Cloud Logging pricing](https://cloud.google.com/logging#pricing).

`↳ error`

`[Google\Rpc\Status](https://cloud.google.com/php/docs/reference/common-protos/latest/Rpc.Status.html)`  

Output only. Only populated when the job's state is `JOB_STATE_FAILED` or `JOB_STATE_CANCELLED`.

`↳ satisfies_pzs`

`bool`  

Output only. Reserved for future use.

`↳ satisfies_pzi`

`bool`  

Output only. Reserved for future use.

### getName

Output only. Resource name of a ModelDeploymentMonitoringJob.

**Returns**

**Type**

**Description**

`string`

### setName

Output only. Resource name of a ModelDeploymentMonitoringJob.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getDisplayName

Required. The user-defined name of the ModelDeploymentMonitoringJob.

The name can be up to 128 characters long and can consist of any UTF-8 characters. Display name of a ModelDeploymentMonitoringJob.

**Returns**

**Type**

**Description**

`string`

### setDisplayName

Required. The user-defined name of the ModelDeploymentMonitoringJob.

The name can be up to 128 characters long and can consist of any UTF-8 characters. Display name of a ModelDeploymentMonitoringJob.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getEndpoint

Required. Endpoint resource name.

Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`

**Returns**

**Type**

**Description**

`string`

### setEndpoint

Required. Endpoint resource name.

Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getState

Output only. The detailed state of the monitoring job.

When the job is still creating, the state will be 'PENDING'. Once the job is successfully created, the state will be 'RUNNING'. Pause the job, the state will be 'PAUSED'. Resume the job, the state will return to 'RUNNING'.

**Returns**

**Type**

**Description**

`int`

### setState

Output only. The detailed state of the monitoring job.

When the job is still creating, the state will be 'PENDING'. Once the job is successfully created, the state will be 'RUNNING'. Pause the job, the state will be 'PAUSED'. Resume the job, the state will return to 'RUNNING'.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getScheduleState

Output only. Schedule state when the monitoring job is in Running state.

**Returns**

**Type**

**Description**

`int`

### setScheduleState

Output only. Schedule state when the monitoring job is in Running state.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getLatestMonitoringPipelineMetadata

Output only. Latest triggered monitoring pipeline metadata.

**Returns**

**Type**

**Description**

`[Google\Cloud\AIPlatform\V1\ModelDeploymentMonitoringJob\LatestMonitoringPipelineMetadata](/php/docs/reference/cloud-ai-platform/1.11.0/V1.ModelDeploymentMonitoringJob.LatestMonitoringPipelineMetadata)|null`

### hasLatestMonitoringPipelineMetadata

### clearLatestMonitoringPipelineMetadata

### setLatestMonitoringPipelineMetadata

Output only. Latest triggered monitoring pipeline metadata.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\AIPlatform\V1\ModelDeploymentMonitoringJob\LatestMonitoringPipelineMetadata](/php/docs/reference/cloud-ai-platform/1.11.0/V1.ModelDeploymentMonitoringJob.LatestMonitoringPipelineMetadata)`  

**Returns**

**Type**

**Description**

`$this`

### getModelDeploymentMonitoringObjectiveConfigs

Required. The config for monitoring objectives. This is a per DeployedModel config. Each DeployedModel needs to be configured separately.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setModelDeploymentMonitoringObjectiveConfigs

Required. The config for monitoring objectives. This is a per DeployedModel config. Each DeployedModel needs to be configured separately.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\AIPlatform\V1\ModelDeploymentMonitoringObjectiveConfig](/php/docs/reference/cloud-ai-platform/1.11.0/V1.ModelDeploymentMonitoringObjectiveConfig)>`  

**Returns**

**Type**

**Description**

`$this`

### getModelDeploymentMonitoringScheduleConfig

Required. Schedule config for running the monitoring job.

**Returns**

**Type**

**Description**

`[Google\Cloud\AIPlatform\V1\ModelDeploymentMonitoringScheduleConfig](/php/docs/reference/cloud-ai-platform/1.11.0/V1.ModelDeploymentMonitoringScheduleConfig)|null`

### hasModelDeploymentMonitoringScheduleConfig

### clearModelDeploymentMonitoringScheduleConfig

### setModelDeploymentMonitoringScheduleConfig

Required. Schedule config for running the monitoring job.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\AIPlatform\V1\ModelDeploymentMonitoringScheduleConfig](/php/docs/reference/cloud-ai-platform/1.11.0/V1.ModelDeploymentMonitoringScheduleConfig)`  

**Returns**

**Type**

**Description**

`$this`

### getLoggingSamplingStrategy

Required. Sample Strategy for logging.

**Returns**

**Type**

**Description**

`[Google\Cloud\AIPlatform\V1\SamplingStrategy](/php/docs/reference/cloud-ai-platform/1.11.0/V1.SamplingStrategy)|null`

### hasLoggingSamplingStrategy

### clearLoggingSamplingStrategy

### setLoggingSamplingStrategy

Required. Sample Strategy for logging.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\AIPlatform\V1\SamplingStrategy](/php/docs/reference/cloud-ai-platform/1.11.0/V1.SamplingStrategy)`  

**Returns**

**Type**

**Description**

`$this`

### getModelMonitoringAlertConfig

Alert config for model monitoring.

**Returns**

**Type**

**Description**

`[Google\Cloud\AIPlatform\V1\ModelMonitoringAlertConfig](/php/docs/reference/cloud-ai-platform/1.11.0/V1.ModelMonitoringAlertConfig)|null`

### hasModelMonitoringAlertConfig

### clearModelMonitoringAlertConfig

### setModelMonitoringAlertConfig

Alert config for model monitoring.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\AIPlatform\V1\ModelMonitoringAlertConfig](/php/docs/reference/cloud-ai-platform/1.11.0/V1.ModelMonitoringAlertConfig)`  

**Returns**

**Type**

**Description**

`$this`

### getPredictInstanceSchemaUri

YAML schema file uri describing the format of a single instance, which are given to format this Endpoint's prediction (and explanation).

If not set, we will generate predict schema from collected predict requests.

**Returns**

**Type**

**Description**

`string`

### setPredictInstanceSchemaUri

YAML schema file uri describing the format of a single instance, which are given to format this Endpoint's prediction (and explanation).

If not set, we will generate predict schema from collected predict requests.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getSamplePredictInstance

Sample Predict instance, same format as [PredictRequest.instances](/php/docs/reference/cloud-ai-platform/1.11.0/V1.PredictRequest#_Google_Cloud_AIPlatform_V1_PredictRequest__getInstances__), this can be set as a replacement of [ModelDeploymentMonitoringJob.predict\_instance\_schema\_uri](/php/docs/reference/cloud-ai-platform/1.11.0/V1.ModelDeploymentMonitoringJob#_Google_Cloud_AIPlatform_V1_ModelDeploymentMonitoringJob__getPredictInstanceSchemaUri__).

If not set, we will generate predict schema from collected predict requests.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Value](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Value)|null`

### hasSamplePredictInstance

### clearSamplePredictInstance

### setSamplePredictInstance

Sample Predict instance, same format as [PredictRequest.instances](/php/docs/reference/cloud-ai-platform/1.11.0/V1.PredictRequest#_Google_Cloud_AIPlatform_V1_PredictRequest__getInstances__), this can be set as a replacement of [ModelDeploymentMonitoringJob.predict\_instance\_schema\_uri](/php/docs/reference/cloud-ai-platform/1.11.0/V1.ModelDeploymentMonitoringJob#_Google_Cloud_AIPlatform_V1_ModelDeploymentMonitoringJob__getPredictInstanceSchemaUri__).

If not set, we will generate predict schema from collected predict requests.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Value](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Value)`  

**Returns**

**Type**

**Description**

`$this`

### getAnalysisInstanceSchemaUri

YAML schema file uri describing the format of a single instance that you want Tensorflow Data Validation (TFDV) to analyze.

If this field is empty, all the feature data types are inferred from [predict\_instance\_schema\_uri](/php/docs/reference/cloud-ai-platform/1.11.0/V1.ModelDeploymentMonitoringJob#_Google_Cloud_AIPlatform_V1_ModelDeploymentMonitoringJob__getPredictInstanceSchemaUri__), meaning that TFDV will use the data in the exact format(data type) as prediction request/response. If there are any data type differences between predict instance and TFDV instance, this field can be used to override the schema. For models trained with Vertex AI, this field must be set as all the fields in predict instance formatted as string.

**Returns**

**Type**

**Description**

`string`

### setAnalysisInstanceSchemaUri

YAML schema file uri describing the format of a single instance that you want Tensorflow Data Validation (TFDV) to analyze.

If this field is empty, all the feature data types are inferred from [predict\_instance\_schema\_uri](/php/docs/reference/cloud-ai-platform/1.11.0/V1.ModelDeploymentMonitoringJob#_Google_Cloud_AIPlatform_V1_ModelDeploymentMonitoringJob__getPredictInstanceSchemaUri__), meaning that TFDV will use the data in the exact format(data type) as prediction request/response. If there are any data type differences between predict instance and TFDV instance, this field can be used to override the schema. For models trained with Vertex AI, this field must be set as all the fields in predict instance formatted as string.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getBigqueryTables

Output only. The created bigquery tables for the job under customer project. Customer could do their own query & analysis. There could be 4 log tables in maximum:

1.  Training data logging predict request/response
2.  Serving data logging predict request/response

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setBigqueryTables

Output only. The created bigquery tables for the job under customer project. Customer could do their own query & analysis. There could be 4 log tables in maximum:

1.  Training data logging predict request/response
2.  Serving data logging predict request/response

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\AIPlatform\V1\ModelDeploymentMonitoringBigQueryTable](/php/docs/reference/cloud-ai-platform/1.11.0/V1.ModelDeploymentMonitoringBigQueryTable)>`  

**Returns**

**Type**

**Description**

`$this`

### getLogTtl

The TTL of BigQuery tables in user projects which stores logs.

A day is the basic unit of the TTL and we take the ceil of TTL/86400(a day). e.g. { second: 3600} indicates ttl = 1 day.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Duration](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Duration)|null`

### hasLogTtl

### clearLogTtl

### setLogTtl

The TTL of BigQuery tables in user projects which stores logs.

A day is the basic unit of the TTL and we take the ceil of TTL/86400(a day). e.g. { second: 3600} indicates ttl = 1 day.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Duration](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Duration)`  

**Returns**

**Type**

**Description**

`$this`

### getLabels

The labels with user-defined metadata to organize your ModelDeploymentMonitoringJob.

Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See [https://goo.gl/xmQnxf](https://goo.gl/xmQnxf) for more information and examples of labels.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`

### setLabels

The labels with user-defined metadata to organize your ModelDeploymentMonitoringJob.

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

### getCreateTime

Output only. Timestamp when this ModelDeploymentMonitoringJob was created.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasCreateTime

### clearCreateTime

### setCreateTime

Output only. Timestamp when this ModelDeploymentMonitoringJob was created.

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

Output only. Timestamp when this ModelDeploymentMonitoringJob was updated most recently.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasUpdateTime

### clearUpdateTime

### setUpdateTime

Output only. Timestamp when this ModelDeploymentMonitoringJob was updated most recently.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

**Returns**

**Type**

**Description**

`$this`

### getNextScheduleTime

Output only. Timestamp when this monitoring pipeline will be scheduled to run for the next round.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasNextScheduleTime

### clearNextScheduleTime

### setNextScheduleTime

Output only. Timestamp when this monitoring pipeline will be scheduled to run for the next round.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

**Returns**

**Type**

**Description**

`$this`

### getStatsAnomaliesBaseDirectory

Stats anomalies base folder path.

**Returns**

**Type**

**Description**

`[Google\Cloud\AIPlatform\V1\GcsDestination](/php/docs/reference/cloud-ai-platform/1.11.0/V1.GcsDestination)|null`

### hasStatsAnomaliesBaseDirectory

### clearStatsAnomaliesBaseDirectory

### setStatsAnomaliesBaseDirectory

Stats anomalies base folder path.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\AIPlatform\V1\GcsDestination](/php/docs/reference/cloud-ai-platform/1.11.0/V1.GcsDestination)`  

**Returns**

**Type**

**Description**

`$this`

### getEncryptionSpec

Customer-managed encryption key spec for a ModelDeploymentMonitoringJob. If set, this ModelDeploymentMonitoringJob and all sub-resources of this ModelDeploymentMonitoringJob will be secured by this key.

**Returns**

**Type**

**Description**

`[Google\Cloud\AIPlatform\V1\EncryptionSpec](/php/docs/reference/cloud-ai-platform/1.11.0/V1.EncryptionSpec)|null`

### hasEncryptionSpec

### clearEncryptionSpec

### setEncryptionSpec

Customer-managed encryption key spec for a ModelDeploymentMonitoringJob. If set, this ModelDeploymentMonitoringJob and all sub-resources of this ModelDeploymentMonitoringJob will be secured by this key.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\AIPlatform\V1\EncryptionSpec](/php/docs/reference/cloud-ai-platform/1.11.0/V1.EncryptionSpec)`  

**Returns**

**Type**

**Description**

`$this`

### getEnableMonitoringPipelineLogs

If true, the scheduled monitoring pipeline logs are sent to Google Cloud Logging, including pipeline status and anomalies detected.

Please note the logs incur cost, which are subject to [Cloud Logging pricing](https://cloud.google.com/logging#pricing).

**Returns**

**Type**

**Description**

`bool`

### setEnableMonitoringPipelineLogs

If true, the scheduled monitoring pipeline logs are sent to Google Cloud Logging, including pipeline status and anomalies detected.

Please note the logs incur cost, which are subject to [Cloud Logging pricing](https://cloud.google.com/logging#pricing).

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

### getError

Output only. Only populated when the job's state is `JOB_STATE_FAILED` or `JOB_STATE_CANCELLED`.

**Returns**

**Type**

**Description**

`[Google\Rpc\Status](https://cloud.google.com/php/docs/reference/common-protos/latest/Rpc.Status.html)|null`

### hasError

### clearError

### setError

Output only. Only populated when the job's state is `JOB_STATE_FAILED` or `JOB_STATE_CANCELLED`.

**Parameter**

**Name**

**Description**

`var`

`[Google\Rpc\Status](https://cloud.google.com/php/docs/reference/common-protos/latest/Rpc.Status.html)`  

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
