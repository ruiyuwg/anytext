-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Deploy V1 Client - Class ExecutionConfig (0.11.1) Stay organized with collections Save and categorize content based on your preferences.

2.0.0 (latest) 1.6.3 1.5.7 1.4.0 1.3.0 1.2.0 1.1.1 1.0.0 0.19.1 0.18.1 0.17.0 0.16.0 0.15.0 0.14.0 0.13.1 0.12.1 0.11.1 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.1 0.3.4

Reference documentation and code samples for the Google Cloud Deploy V1 Client class ExecutionConfig.

Configuration of the environment to use when calling Skaffold.

Generated from protobuf message `google.cloud.deploy.v1.ExecutionConfig`

## Namespace

Google \\ Cloud \\ Deploy \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ usages`

`array`  

Required. Usages when this configuration should be applied.

`↳ default_pool`

`[Google\Cloud\Deploy\V1\DefaultPool](/php/docs/reference/cloud-deploy/0.11.1/V1.DefaultPool)`  

Optional. Use default Cloud Build pool.

`↳ private_pool`

`[Google\Cloud\Deploy\V1\PrivatePool](/php/docs/reference/cloud-deploy/0.11.1/V1.PrivatePool)`  

Optional. Use private Cloud Build pool.

`↳ worker_pool`

`string`  

Optional. The resource name of the `WorkerPool`, with the format `projects/{project}/locations/{location}/workerPools/{worker_pool}`. If this optional field is unspecified, the default Cloud Build pool will be used.

`↳ service_account`

`string`  

Optional. Google service account to use for execution. If unspecified, the project execution service account (<PROJECT\_NUMBER>-compute@developer.gserviceaccount.com) is used.

`↳ artifact_storage`

`string`  

Optional. Cloud Storage location in which to store execution outputs. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used.

`↳ execution_timeout`

`[Google\Protobuf\Duration](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Duration)`  

Optional. Execution timeout for a Cloud Build Execution. This must be between 10m and 24h in seconds format. If unspecified, a default timeout of 1h is used.

### getUsages

Required. Usages when this configuration should be applied.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setUsages

Required. Usages when this configuration should be applied.

**Parameter**

**Name**

**Description**

`var`

`int[]`  

**Returns**

**Type**

**Description**

`$this`

### getDefaultPool

Optional. Use default Cloud Build pool.

**Returns**

**Type**

**Description**

`[Google\Cloud\Deploy\V1\DefaultPool](/php/docs/reference/cloud-deploy/0.11.1/V1.DefaultPool)|null`

### hasDefaultPool

### setDefaultPool

Optional. Use default Cloud Build pool.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Deploy\V1\DefaultPool](/php/docs/reference/cloud-deploy/0.11.1/V1.DefaultPool)`  

**Returns**

**Type**

**Description**

`$this`

### getPrivatePool

Optional. Use private Cloud Build pool.

**Returns**

**Type**

**Description**

`[Google\Cloud\Deploy\V1\PrivatePool](/php/docs/reference/cloud-deploy/0.11.1/V1.PrivatePool)|null`

### hasPrivatePool

### setPrivatePool

Optional. Use private Cloud Build pool.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Deploy\V1\PrivatePool](/php/docs/reference/cloud-deploy/0.11.1/V1.PrivatePool)`  

**Returns**

**Type**

**Description**

`$this`

### getWorkerPool

Optional. The resource name of the `WorkerPool`, with the format `projects/{project}/locations/{location}/workerPools/{worker_pool}`.

If this optional field is unspecified, the default Cloud Build pool will be used.

**Returns**

**Type**

**Description**

`string`

### setWorkerPool

Optional. The resource name of the `WorkerPool`, with the format `projects/{project}/locations/{location}/workerPools/{worker_pool}`.

If this optional field is unspecified, the default Cloud Build pool will be used.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getServiceAccount

Optional. Google service account to use for execution. If unspecified, the project execution service account (<PROJECT\_NUMBER>-compute@developer.gserviceaccount.com) is used.

**Returns**

**Type**

**Description**

`string`

### setServiceAccount

Optional. Google service account to use for execution. If unspecified, the project execution service account (<PROJECT\_NUMBER>-compute@developer.gserviceaccount.com) is used.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getArtifactStorage

Optional. Cloud Storage location in which to store execution outputs. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir").

If unspecified, a default bucket located in the same region will be used.

**Returns**

**Type**

**Description**

`string`

### setArtifactStorage

Optional. Cloud Storage location in which to store execution outputs. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir").

If unspecified, a default bucket located in the same region will be used.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getExecutionTimeout

Optional. Execution timeout for a Cloud Build Execution. This must be between 10m and 24h in seconds format. If unspecified, a default timeout of 1h is used.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Duration](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Duration)|null`

### hasExecutionTimeout

### clearExecutionTimeout

### setExecutionTimeout

Optional. Execution timeout for a Cloud Build Execution. This must be between 10m and 24h in seconds format. If unspecified, a default timeout of 1h is used.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Duration](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Duration)`  

**Returns**

**Type**

**Description**

`$this`

### getExecutionEnvironment

**Returns**

**Type**

**Description**

`string`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
