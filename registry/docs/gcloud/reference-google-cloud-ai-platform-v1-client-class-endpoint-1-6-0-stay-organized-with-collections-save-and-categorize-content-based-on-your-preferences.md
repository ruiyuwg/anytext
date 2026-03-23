-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Ai Platform V1 Client - Class Endpoint (1.6.0) Stay organized with collections Save and categorize content based on your preferences.

1.54.0 (latest) 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.1 1.31.0 1.30.0 1.26.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.1 1.12.0 1.11.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.39.0 0.38.0 0.37.1 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.2 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.1 0.10.0

Reference documentation and code samples for the Google Cloud Ai Platform V1 Client class Endpoint.

Models are deployed into it, and afterwards Endpoint is called to obtain predictions and explanations.

Generated from protobuf message `google.cloud.aiplatform.v1.Endpoint`

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

Output only. The resource name of the Endpoint.

`↳ display_name`

`string`  

Required. The display name of the Endpoint. The name can be up to 128 characters long and can consist of any UTF-8 characters.

`↳ description`

`string`  

The description of the Endpoint.

`↳ deployed_models`

`array<[Google\Cloud\AIPlatform\V1\DeployedModel](/php/docs/reference/cloud-ai-platform/1.6.0/V1.DeployedModel)>`  

Output only. The models deployed in this Endpoint. To add or remove DeployedModels use [EndpointService.DeployModel](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.EndpointServiceClient#_Google_Cloud_AIPlatform_V1_Client_EndpointServiceClient__deployModel__) and [EndpointService.UndeployModel](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.EndpointServiceClient#_Google_Cloud_AIPlatform_V1_Client_EndpointServiceClient__undeployModel__) respectively.

`↳ traffic_split`

`array|[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`  

A map from a DeployedModel's ID to the percentage of this Endpoint's traffic that should be forwarded to that DeployedModel. If a DeployedModel's ID is not listed in this map, then it receives no traffic. The traffic percentage values must add up to 100, or map must be empty if the Endpoint is to not accept any traffic at a moment.

`↳ etag`

`string`  

Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.

`↳ labels`

`array|[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`  

The labels with user-defined metadata to organize your Endpoints. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See [https://goo.gl/xmQnxf](https://goo.gl/xmQnxf) for more information and examples of labels.

`↳ create_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

Output only. Timestamp when this Endpoint was created.

`↳ update_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

Output only. Timestamp when this Endpoint was last updated.

`↳ encryption_spec`

`[Google\Cloud\AIPlatform\V1\EncryptionSpec](/php/docs/reference/cloud-ai-platform/1.6.0/V1.EncryptionSpec)`  

Customer-managed encryption key spec for an Endpoint. If set, this Endpoint and all sub-resources of this Endpoint will be secured by this key.

`↳ network`

`string`  

Optional. The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the Endpoint should be peered. Private services access must already be configured for the network. If left unspecified, the Endpoint is not peered with any network. Only one of the fields, [network](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Endpoint#_Google_Cloud_AIPlatform_V1_Endpoint__getNetwork__) or [enable\_private\_service\_connect](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Endpoint#_Google_Cloud_AIPlatform_V1_Endpoint__getEnablePrivateServiceConnect__), can be set. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): `projects/{project}/global/networks/{network}`. Where `{project}` is a project number, as in `12345`, and `{network}` is network name.

`↳ enable_private_service_connect`

`bool`  

Deprecated: If true, expose the Endpoint via private service connect. Only one of the fields, [network](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Endpoint#_Google_Cloud_AIPlatform_V1_Endpoint__getNetwork__) or [enable\_private\_service\_connect](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Endpoint#_Google_Cloud_AIPlatform_V1_Endpoint__getEnablePrivateServiceConnect__), can be set.

`↳ private_service_connect_config`

`[Google\Cloud\AIPlatform\V1\PrivateServiceConnectConfig](/php/docs/reference/cloud-ai-platform/1.6.0/V1.PrivateServiceConnectConfig)`  

Optional. Configuration for private service connect. [network](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Endpoint#_Google_Cloud_AIPlatform_V1_Endpoint__getNetwork__) and [private\_service\_connect\_config](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Endpoint#_Google_Cloud_AIPlatform_V1_Endpoint__getPrivateServiceConnectConfig__) are mutually exclusive.

`↳ model_deployment_monitoring_job`

`string`  

Output only. Resource name of the Model Monitoring job associated with this Endpoint if monitoring is enabled by [JobService.CreateModelDeploymentMonitoringJob](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.JobServiceClient#_Google_Cloud_AIPlatform_V1_Client_JobServiceClient__createModelDeploymentMonitoringJob__). Format: `projects/{project}/locations/{location}/modelDeploymentMonitoringJobs/{model_deployment_monitoring_job}`

`↳ predict_request_response_logging_config`

`[Google\Cloud\AIPlatform\V1\PredictRequestResponseLoggingConfig](/php/docs/reference/cloud-ai-platform/1.6.0/V1.PredictRequestResponseLoggingConfig)`  

Configures the request-response logging for online prediction.

`↳ dedicated_endpoint_enabled`

`bool`  

If true, the endpoint will be exposed through a dedicated DNS \[Endpoint.dedicated\_endpoint\_dns\]. Your request to the dedicated DNS will be isolated from other users' traffic and will have better performance and reliability. Note: Once you enabled dedicated endpoint, you won't be able to send request to the shared DNS {region}-aiplatform.googleapis.com. The limitation will be removed soon.

`↳ dedicated_endpoint_dns`

`string`  

Output only. DNS of the dedicated endpoint. Will only be populated if dedicated\_endpoint\_enabled is true. Format: `https://{endpoint_id}.{region}-{project_number}.prediction.vertexai.goog`.

`↳ satisfies_pzs`

`bool`  

Output only. Reserved for future use.

`↳ satisfies_pzi`

`bool`  

Output only. Reserved for future use.

### getName

Output only. The resource name of the Endpoint.

**Returns**

**Type**

**Description**

`string`

### setName

Output only. The resource name of the Endpoint.

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

Required. The display name of the Endpoint.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

**Returns**

**Type**

**Description**

`string`

### setDisplayName

Required. The display name of the Endpoint.

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

The description of the Endpoint.

**Returns**

**Type**

**Description**

`string`

### setDescription

The description of the Endpoint.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getDeployedModels

Output only. The models deployed in this Endpoint.

To add or remove DeployedModels use [EndpointService.DeployModel](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.EndpointServiceClient#_Google_Cloud_AIPlatform_V1_Client_EndpointServiceClient__deployModel__) and [EndpointService.UndeployModel](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.EndpointServiceClient#_Google_Cloud_AIPlatform_V1_Client_EndpointServiceClient__undeployModel__) respectively.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setDeployedModels

Output only. The models deployed in this Endpoint.

To add or remove DeployedModels use [EndpointService.DeployModel](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.EndpointServiceClient#_Google_Cloud_AIPlatform_V1_Client_EndpointServiceClient__deployModel__) and [EndpointService.UndeployModel](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.EndpointServiceClient#_Google_Cloud_AIPlatform_V1_Client_EndpointServiceClient__undeployModel__) respectively.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\AIPlatform\V1\DeployedModel](/php/docs/reference/cloud-ai-platform/1.6.0/V1.DeployedModel)>`  

**Returns**

**Type**

**Description**

`$this`

### getTrafficSplit

A map from a DeployedModel's ID to the percentage of this Endpoint's traffic that should be forwarded to that DeployedModel.

If a DeployedModel's ID is not listed in this map, then it receives no traffic. The traffic percentage values must add up to 100, or map must be empty if the Endpoint is to not accept any traffic at a moment.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`

### setTrafficSplit

A map from a DeployedModel's ID to the percentage of this Endpoint's traffic that should be forwarded to that DeployedModel.

If a DeployedModel's ID is not listed in this map, then it receives no traffic. The traffic percentage values must add up to 100, or map must be empty if the Endpoint is to not accept any traffic at a moment.

**Parameter**

**Name**

**Description**

`var`

`array|[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`  

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

The labels with user-defined metadata to organize your Endpoints.

Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See [https://goo.gl/xmQnxf](https://goo.gl/xmQnxf) for more information and examples of labels.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`

### setLabels

The labels with user-defined metadata to organize your Endpoints.

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

Output only. Timestamp when this Endpoint was created.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasCreateTime

### clearCreateTime

### setCreateTime

Output only. Timestamp when this Endpoint was created.

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

Output only. Timestamp when this Endpoint was last updated.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasUpdateTime

### clearUpdateTime

### setUpdateTime

Output only. Timestamp when this Endpoint was last updated.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

**Returns**

**Type**

**Description**

`$this`

### getEncryptionSpec

Customer-managed encryption key spec for an Endpoint. If set, this Endpoint and all sub-resources of this Endpoint will be secured by this key.

**Returns**

**Type**

**Description**

`[Google\Cloud\AIPlatform\V1\EncryptionSpec](/php/docs/reference/cloud-ai-platform/1.6.0/V1.EncryptionSpec)|null`

### hasEncryptionSpec

### clearEncryptionSpec

### setEncryptionSpec

Customer-managed encryption key spec for an Endpoint. If set, this Endpoint and all sub-resources of this Endpoint will be secured by this key.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\AIPlatform\V1\EncryptionSpec](/php/docs/reference/cloud-ai-platform/1.6.0/V1.EncryptionSpec)`  

**Returns**

**Type**

**Description**

`$this`

### getNetwork

Optional. The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the Endpoint should be peered.

Private services access must already be configured for the network. If left unspecified, the Endpoint is not peered with any network. Only one of the fields, [network](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Endpoint#_Google_Cloud_AIPlatform_V1_Endpoint__getNetwork__) or [enable\_private\_service\_connect](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Endpoint#_Google_Cloud_AIPlatform_V1_Endpoint__getEnablePrivateServiceConnect__), can be set. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): `projects/{project}/global/networks/{network}`. Where `{project}` is a project number, as in `12345`, and `{network}` is network name.

**Returns**

**Type**

**Description**

`string`

### setNetwork

Optional. The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the Endpoint should be peered.

Private services access must already be configured for the network. If left unspecified, the Endpoint is not peered with any network. Only one of the fields, [network](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Endpoint#_Google_Cloud_AIPlatform_V1_Endpoint__getNetwork__) or [enable\_private\_service\_connect](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Endpoint#_Google_Cloud_AIPlatform_V1_Endpoint__getEnablePrivateServiceConnect__), can be set. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): `projects/{project}/global/networks/{network}`. Where `{project}` is a project number, as in `12345`, and `{network}` is network name.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getEnablePrivateServiceConnect

Deprecated: If true, expose the Endpoint via private service connect.

Only one of the fields, [network](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Endpoint#_Google_Cloud_AIPlatform_V1_Endpoint__getNetwork__) or [enable\_private\_service\_connect](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Endpoint#_Google_Cloud_AIPlatform_V1_Endpoint__getEnablePrivateServiceConnect__), can be set.

**Returns**

**Type**

**Description**

`bool`

### setEnablePrivateServiceConnect

Deprecated: If true, expose the Endpoint via private service connect.

Only one of the fields, [network](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Endpoint#_Google_Cloud_AIPlatform_V1_Endpoint__getNetwork__) or [enable\_private\_service\_connect](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Endpoint#_Google_Cloud_AIPlatform_V1_Endpoint__getEnablePrivateServiceConnect__), can be set.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

### getPrivateServiceConnectConfig

Optional. Configuration for private service connect.

[network](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Endpoint#_Google_Cloud_AIPlatform_V1_Endpoint__getNetwork__) and [private\_service\_connect\_config](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Endpoint#_Google_Cloud_AIPlatform_V1_Endpoint__getPrivateServiceConnectConfig__) are mutually exclusive.

**Returns**

**Type**

**Description**

`[Google\Cloud\AIPlatform\V1\PrivateServiceConnectConfig](/php/docs/reference/cloud-ai-platform/1.6.0/V1.PrivateServiceConnectConfig)|null`

### hasPrivateServiceConnectConfig

### clearPrivateServiceConnectConfig

### setPrivateServiceConnectConfig

Optional. Configuration for private service connect.

[network](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Endpoint#_Google_Cloud_AIPlatform_V1_Endpoint__getNetwork__) and [private\_service\_connect\_config](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Endpoint#_Google_Cloud_AIPlatform_V1_Endpoint__getPrivateServiceConnectConfig__) are mutually exclusive.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\AIPlatform\V1\PrivateServiceConnectConfig](/php/docs/reference/cloud-ai-platform/1.6.0/V1.PrivateServiceConnectConfig)`  

**Returns**

**Type**

**Description**

`$this`

### getModelDeploymentMonitoringJob

Output only. Resource name of the Model Monitoring job associated with this Endpoint if monitoring is enabled by [JobService.CreateModelDeploymentMonitoringJob](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.JobServiceClient#_Google_Cloud_AIPlatform_V1_Client_JobServiceClient__createModelDeploymentMonitoringJob__).

Format: `projects/{project}/locations/{location}/modelDeploymentMonitoringJobs/{model_deployment_monitoring_job}`

**Returns**

**Type**

**Description**

`string`

### setModelDeploymentMonitoringJob

Output only. Resource name of the Model Monitoring job associated with this Endpoint if monitoring is enabled by [JobService.CreateModelDeploymentMonitoringJob](/php/docs/reference/cloud-ai-platform/1.6.0/V1.Client.JobServiceClient#_Google_Cloud_AIPlatform_V1_Client_JobServiceClient__createModelDeploymentMonitoringJob__).

Format: `projects/{project}/locations/{location}/modelDeploymentMonitoringJobs/{model_deployment_monitoring_job}`

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getPredictRequestResponseLoggingConfig

Configures the request-response logging for online prediction.

**Returns**

**Type**

**Description**

`[Google\Cloud\AIPlatform\V1\PredictRequestResponseLoggingConfig](/php/docs/reference/cloud-ai-platform/1.6.0/V1.PredictRequestResponseLoggingConfig)|null`

### hasPredictRequestResponseLoggingConfig

### clearPredictRequestResponseLoggingConfig

### setPredictRequestResponseLoggingConfig

Configures the request-response logging for online prediction.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\AIPlatform\V1\PredictRequestResponseLoggingConfig](/php/docs/reference/cloud-ai-platform/1.6.0/V1.PredictRequestResponseLoggingConfig)`  

**Returns**

**Type**

**Description**

`$this`

### getDedicatedEndpointEnabled

If true, the endpoint will be exposed through a dedicated DNS \[Endpoint.dedicated\_endpoint\_dns\]. Your request to the dedicated DNS will be isolated from other users' traffic and will have better performance and reliability.

Note: Once you enabled dedicated endpoint, you won't be able to send request to the shared DNS {region}-aiplatform.googleapis.com. The limitation will be removed soon.

**Returns**

**Type**

**Description**

`bool`

### setDedicatedEndpointEnabled

If true, the endpoint will be exposed through a dedicated DNS \[Endpoint.dedicated\_endpoint\_dns\]. Your request to the dedicated DNS will be isolated from other users' traffic and will have better performance and reliability.

Note: Once you enabled dedicated endpoint, you won't be able to send request to the shared DNS {region}-aiplatform.googleapis.com. The limitation will be removed soon.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

### getDedicatedEndpointDns

Output only. DNS of the dedicated endpoint. Will only be populated if dedicated\_endpoint\_enabled is true.

Format: `https://{endpoint_id}.{region}-{project_number}.prediction.vertexai.goog`.

**Returns**

**Type**

**Description**

`string`

### setDedicatedEndpointDns

Output only. DNS of the dedicated endpoint. Will only be populated if dedicated\_endpoint\_enabled is true.

Format: `https://{endpoint_id}.{region}-{project_number}.prediction.vertexai.goog`.

**Parameter**

**Name**

**Description**

`var`

`string`  

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
