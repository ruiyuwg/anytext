-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Build V1 Client - Class UpdateWorkerPoolRequest (0.5.1) Stay organized with collections Save and categorize content based on your preferences.

1.1.2 (latest) 1.1.1 1.0.4 0.16.3 0.15.0 0.14.0 0.13.2 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.3 0.6.1 0.5.1 0.4.0 0.3.8

Reference documentation and code samples for the Google Cloud Build V1 Client class UpdateWorkerPoolRequest.

Request to update a `WorkerPool`.

Generated from protobuf message `google.devtools.cloudbuild.v1.UpdateWorkerPoolRequest`

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ worker_pool`

`[Google\Cloud\Build\V1\WorkerPool](/php/docs/reference/cloud-build/0.5.1/V1.WorkerPool)`  

Required. The `WorkerPool` to update. The `name` field is used to identify the `WorkerPool` to update. Format: `projects/{project}/locations/{location}/workerPools/{workerPool}`.

`↳ update_mask`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

A mask specifying which fields in `worker_pool` to update.

`↳ validate_only`

`bool`  

If set, validate the request and preview the response, but do not actually post it.

### getWorkerPool

Required. The `WorkerPool` to update.

The `name` field is used to identify the `WorkerPool` to update. Format: `projects/{project}/locations/{location}/workerPools/{workerPool}`.

**Returns**

**Type**

**Description**

`[Google\Cloud\Build\V1\WorkerPool](/php/docs/reference/cloud-build/0.5.1/V1.WorkerPool)|null`

### hasWorkerPool

### clearWorkerPool

### setWorkerPool

Required. The `WorkerPool` to update.

The `name` field is used to identify the `WorkerPool` to update. Format: `projects/{project}/locations/{location}/workerPools/{workerPool}`.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Build\V1\WorkerPool](/php/docs/reference/cloud-build/0.5.1/V1.WorkerPool)`  

**Returns**

**Type**

**Description**

`$this`

### getUpdateMask

A mask specifying which fields in `worker_pool` to update.

**Returns**

**Type**

**Description**

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)|null`

### hasUpdateMask

### clearUpdateMask

### setUpdateMask

A mask specifying which fields in `worker_pool` to update.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

**Returns**

**Type**

**Description**

`$this`

### getValidateOnly

If set, validate the request and preview the response, but do not actually post it.

**Returns**

**Type**

**Description**

`bool`

### setValidateOnly

If set, validate the request and preview the response, but do not actually post it.

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
