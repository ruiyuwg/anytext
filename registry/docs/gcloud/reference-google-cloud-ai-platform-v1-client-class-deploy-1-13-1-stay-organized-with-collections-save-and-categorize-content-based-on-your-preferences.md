-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Ai Platform V1 Client - Class Deploy (1.13.1) Stay organized with collections Save and categorize content based on your preferences.

1.54.0 (latest) 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.1 1.31.0 1.30.0 1.26.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.1 1.12.0 1.11.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.39.0 0.38.0 0.37.1 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.2 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.1 0.10.0

Reference documentation and code samples for the Google Cloud Ai Platform V1 Client class Deploy.

Model metadata that is needed for UploadModel or DeployModel/CreateEndpoint requests.

Generated from protobuf message `google.cloud.aiplatform.v1.PublisherModel.CallToAction.Deploy`

## Namespace

Google \\ Cloud \\ AIPlatform \\ V1 \\ PublisherModel \\ CallToAction

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ dedicated_resources`

`[Google\Cloud\AIPlatform\V1\DedicatedResources](/php/docs/reference/cloud-ai-platform/1.13.1/V1.DedicatedResources)`  

A description of resources that are dedicated to the DeployedModel, and that need a higher degree of manual configuration.

`↳ automatic_resources`

`[Google\Cloud\AIPlatform\V1\AutomaticResources](/php/docs/reference/cloud-ai-platform/1.13.1/V1.AutomaticResources)`  

A description of resources that to large degree are decided by Vertex AI, and require only a modest additional configuration.

`↳ shared_resources`

`string`  

The resource name of the shared DeploymentResourcePool to deploy on. Format: `projects/{project}/locations/{location}/deploymentResourcePools/{deployment_resource_pool}`

`↳ model_display_name`

`string`  

Optional. Default model display name.

`↳ large_model_reference`

`[Google\Cloud\AIPlatform\V1\LargeModelReference](/php/docs/reference/cloud-ai-platform/1.13.1/V1.LargeModelReference)`  

Optional. Large model reference. When this is set, model\_artifact\_spec is not needed.

`↳ container_spec`

`[Google\Cloud\AIPlatform\V1\ModelContainerSpec](/php/docs/reference/cloud-ai-platform/1.13.1/V1.ModelContainerSpec)`  

Optional. The specification of the container that is to be used when deploying this Model in Vertex AI. Not present for Large Models.

`↳ artifact_uri`

`string`  

Optional. The path to the directory containing the Model artifact and any of its supporting files.

`↳ deploy_task_name`

`string`  

Optional. The name of the deploy task (e.g., "text to image generation").

`↳ deploy_metadata`

`[Deploy\DeployMetadata](/php/docs/reference/cloud-ai-platform/1.13.1/V1.PublisherModel.CallToAction.Deploy.DeployMetadata)`  

Optional. Metadata information about this deployment config.

`↳ title`

`string`  

Required. The title of the regional resource reference.

`↳ public_artifact_uri`

`string`  

Optional. The signed URI for ephemeral Cloud Storage access to model artifact.

### getDedicatedResources

A description of resources that are dedicated to the DeployedModel, and that need a higher degree of manual configuration.

**Returns**

**Type**

**Description**

`[Google\Cloud\AIPlatform\V1\DedicatedResources](/php/docs/reference/cloud-ai-platform/1.13.1/V1.DedicatedResources)|null`

### hasDedicatedResources

### setDedicatedResources

A description of resources that are dedicated to the DeployedModel, and that need a higher degree of manual configuration.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\AIPlatform\V1\DedicatedResources](/php/docs/reference/cloud-ai-platform/1.13.1/V1.DedicatedResources)`  

**Returns**

**Type**

**Description**

`$this`

### getAutomaticResources

A description of resources that to large degree are decided by Vertex AI, and require only a modest additional configuration.

**Returns**

**Type**

**Description**

`[Google\Cloud\AIPlatform\V1\AutomaticResources](/php/docs/reference/cloud-ai-platform/1.13.1/V1.AutomaticResources)|null`

### hasAutomaticResources

### setAutomaticResources

A description of resources that to large degree are decided by Vertex AI, and require only a modest additional configuration.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\AIPlatform\V1\AutomaticResources](/php/docs/reference/cloud-ai-platform/1.13.1/V1.AutomaticResources)`  

**Returns**

**Type**

**Description**

`$this`

### getSharedResources

The resource name of the shared DeploymentResourcePool to deploy on.

Format: `projects/{project}/locations/{location}/deploymentResourcePools/{deployment_resource_pool}`

**Returns**

**Type**

**Description**

`string`

### hasSharedResources

### setSharedResources

The resource name of the shared DeploymentResourcePool to deploy on.

Format: `projects/{project}/locations/{location}/deploymentResourcePools/{deployment_resource_pool}`

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getModelDisplayName

Optional. Default model display name.

**Returns**

**Type**

**Description**

`string`

### setModelDisplayName

Optional. Default model display name.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getLargeModelReference

Optional. Large model reference. When this is set, model\_artifact\_spec is not needed.

**Returns**

**Type**

**Description**

`[Google\Cloud\AIPlatform\V1\LargeModelReference](/php/docs/reference/cloud-ai-platform/1.13.1/V1.LargeModelReference)|null`

### hasLargeModelReference

### clearLargeModelReference

### setLargeModelReference

Optional. Large model reference. When this is set, model\_artifact\_spec is not needed.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\AIPlatform\V1\LargeModelReference](/php/docs/reference/cloud-ai-platform/1.13.1/V1.LargeModelReference)`  

**Returns**

**Type**

**Description**

`$this`

### getContainerSpec

Optional. The specification of the container that is to be used when deploying this Model in Vertex AI. Not present for Large Models.

**Returns**

**Type**

**Description**

`[Google\Cloud\AIPlatform\V1\ModelContainerSpec](/php/docs/reference/cloud-ai-platform/1.13.1/V1.ModelContainerSpec)|null`

### hasContainerSpec

### clearContainerSpec

### setContainerSpec

Optional. The specification of the container that is to be used when deploying this Model in Vertex AI. Not present for Large Models.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\AIPlatform\V1\ModelContainerSpec](/php/docs/reference/cloud-ai-platform/1.13.1/V1.ModelContainerSpec)`  

**Returns**

**Type**

**Description**

`$this`

### getArtifactUri

Optional. The path to the directory containing the Model artifact and any of its supporting files.

**Returns**

**Type**

**Description**

`string`

### setArtifactUri

Optional. The path to the directory containing the Model artifact and any of its supporting files.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getDeployTaskName

Optional. The name of the deploy task (e.g., "text to image generation").

**Returns**

**Type**

**Description**

`string`

### hasDeployTaskName

### clearDeployTaskName

### setDeployTaskName

Optional. The name of the deploy task (e.g., "text to image generation").

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getDeployMetadata

Optional. Metadata information about this deployment config.

**Returns**

**Type**

**Description**

`[Deploy\DeployMetadata](/php/docs/reference/cloud-ai-platform/1.13.1/V1.PublisherModel.CallToAction.Deploy.DeployMetadata)|null`

### hasDeployMetadata

### clearDeployMetadata

### setDeployMetadata

Optional. Metadata information about this deployment config.

**Parameter**

**Name**

**Description**

`var`

`[Deploy\DeployMetadata](/php/docs/reference/cloud-ai-platform/1.13.1/V1.PublisherModel.CallToAction.Deploy.DeployMetadata)`  

**Returns**

**Type**

**Description**

`$this`

### getTitle

Required. The title of the regional resource reference.

**Returns**

**Type**

**Description**

`string`

### setTitle

Required. The title of the regional resource reference.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getPublicArtifactUri

Optional. The signed URI for ephemeral Cloud Storage access to model artifact.

**Returns**

**Type**

**Description**

`string`

### setPublicArtifactUri

Optional. The signed URI for ephemeral Cloud Storage access to model artifact.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getPredictionResources

**Returns**

**Type**

**Description**

`string`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
