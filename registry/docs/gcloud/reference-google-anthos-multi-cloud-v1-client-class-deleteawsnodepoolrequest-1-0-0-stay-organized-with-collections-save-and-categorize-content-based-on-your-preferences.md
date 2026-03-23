-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Anthos Multi Cloud V1 Client - Class DeleteAwsNodePoolRequest (1.0.0) Stay organized with collections Save and categorize content based on your preferences.

1.4.1 (latest) 1.4.0 1.3.1 1.2.2 1.1.2 1.0.0 0.6.1 0.5.4 0.4.4 0.3.0 0.2.3 0.1.4

Reference documentation and code samples for the Google Anthos Multi Cloud V1 Client class DeleteAwsNodePoolRequest.

Request message for `AwsClusters.DeleteAwsNodePool` method.

Generated from protobuf message `google.cloud.gkemulticloud.v1.DeleteAwsNodePoolRequest`

## Namespace

Google \\ Cloud \\ GkeMultiCloud \\ V1

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

Required. The resource name the [AwsNodePool](/php/docs/reference/cloud-gke-multi-cloud/1.0.0/V1.AwsNodePool) to delete. `AwsNodePool` names are formatted as `projects/<project-id>/locations/<region>/awsClusters/<cluster-id>/awsNodePools/<node-pool-id>`. See [Resource Names](https://cloud.google.com/apis/design/resource_names) for more details on Google Cloud resource names.

`↳ validate_only`

`bool`  

If set, only validate the request, but do not actually delete the node pool.

`↳ allow_missing`

`bool`  

If set to true, and the [AwsNodePool](/php/docs/reference/cloud-gke-multi-cloud/1.0.0/V1.AwsNodePool) resource is not found, the request will succeed but no action will be taken on the server and a completed Operation will be returned. Useful for idempotent deletion.

`↳ ignore_errors`

`bool`  

Optional. If set to true, the deletion of [AwsNodePool](/php/docs/reference/cloud-gke-multi-cloud/1.0.0/V1.AwsNodePool) resource will succeed even if errors occur during deleting in node pool resources. Using this parameter may result in orphaned resources in the node pool.

`↳ etag`

`string`  

The current ETag of the [AwsNodePool](/php/docs/reference/cloud-gke-multi-cloud/1.0.0/V1.AwsNodePool). Allows clients to perform deletions through optimistic concurrency control. If the provided ETag does not match the current etag of the node pool, the request will fail and an ABORTED error will be returned.

### getName

Required. The resource name the [AwsNodePool](/php/docs/reference/cloud-gke-multi-cloud/1.0.0/V1.AwsNodePool) to delete.

`AwsNodePool` names are formatted as `projects/<project-id>/locations/<region>/awsClusters/<cluster-id>/awsNodePools/<node-pool-id>`. See [Resource Names](https://cloud.google.com/apis/design/resource_names) for more details on Google Cloud resource names.

**Returns**

**Type**

**Description**

`string`

### setName

Required. The resource name the [AwsNodePool](/php/docs/reference/cloud-gke-multi-cloud/1.0.0/V1.AwsNodePool) to delete.

`AwsNodePool` names are formatted as `projects/<project-id>/locations/<region>/awsClusters/<cluster-id>/awsNodePools/<node-pool-id>`. See [Resource Names](https://cloud.google.com/apis/design/resource_names) for more details on Google Cloud resource names.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getValidateOnly

If set, only validate the request, but do not actually delete the node pool.

**Returns**

**Type**

**Description**

`bool`

### setValidateOnly

If set, only validate the request, but do not actually delete the node pool.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

### getAllowMissing

If set to true, and the [AwsNodePool](/php/docs/reference/cloud-gke-multi-cloud/1.0.0/V1.AwsNodePool) resource is not found, the request will succeed but no action will be taken on the server and a completed Operation will be returned.

Useful for idempotent deletion.

**Returns**

**Type**

**Description**

`bool`

### setAllowMissing

If set to true, and the [AwsNodePool](/php/docs/reference/cloud-gke-multi-cloud/1.0.0/V1.AwsNodePool) resource is not found, the request will succeed but no action will be taken on the server and a completed Operation will be returned.

Useful for idempotent deletion.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

### getIgnoreErrors

Optional. If set to true, the deletion of [AwsNodePool](/php/docs/reference/cloud-gke-multi-cloud/1.0.0/V1.AwsNodePool) resource will succeed even if errors occur during deleting in node pool resources. Using this parameter may result in orphaned resources in the node pool.

**Returns**

**Type**

**Description**

`bool`

### setIgnoreErrors

Optional. If set to true, the deletion of [AwsNodePool](/php/docs/reference/cloud-gke-multi-cloud/1.0.0/V1.AwsNodePool) resource will succeed even if errors occur during deleting in node pool resources. Using this parameter may result in orphaned resources in the node pool.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

### getEtag

The current ETag of the [AwsNodePool](/php/docs/reference/cloud-gke-multi-cloud/1.0.0/V1.AwsNodePool).

Allows clients to perform deletions through optimistic concurrency control. If the provided ETag does not match the current etag of the node pool, the request will fail and an ABORTED error will be returned.

**Returns**

**Type**

**Description**

`string`

### setEtag

The current ETag of the [AwsNodePool](/php/docs/reference/cloud-gke-multi-cloud/1.0.0/V1.AwsNodePool).

Allows clients to perform deletions through optimistic concurrency control. If the provided ETag does not match the current etag of the node pool, the request will fail and an ABORTED error will be returned.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### static::build

**Parameter**

**Name**

**Description**

`name`

`string`  

Required. The resource name the [AwsNodePool](/php/docs/reference/cloud-gke-multi-cloud/1.0.0/V1.AwsNodePool) to delete.

`AwsNodePool` names are formatted as `projects/<project-id>/locations/<region>/awsClusters/<cluster-id>/awsNodePools/<node-pool-id>`.

See [Resource Names](https://cloud.google.com/apis/design/resource_names) for more details on Google Cloud resource names. Please see Google\\Cloud\\GkeMultiCloud\\V1\\AwsClustersClient::awsNodePoolName() for help formatting this field.

**Returns**

**Type**

**Description**

`[Google\Cloud\GkeMultiCloud\V1\DeleteAwsNodePoolRequest](/php/docs/reference/cloud-gke-multi-cloud/1.0.0/V1.DeleteAwsNodePoolRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
