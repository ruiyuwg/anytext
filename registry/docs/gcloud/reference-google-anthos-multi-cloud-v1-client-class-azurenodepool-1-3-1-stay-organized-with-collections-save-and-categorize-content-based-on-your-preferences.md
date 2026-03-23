-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Anthos Multi Cloud V1 Client - Class AzureNodePool (1.3.1) Stay organized with collections Save and categorize content based on your preferences.

1.4.1 (latest) 1.4.0 1.3.1 1.2.2 1.1.2 1.0.0 0.6.1 0.5.4 0.4.4 0.3.0 0.2.3 0.1.4

Reference documentation and code samples for the Google Anthos Multi Cloud V1 Client class AzureNodePool.

An Anthos node pool running on Azure.

Generated from protobuf message `google.cloud.gkemulticloud.v1.AzureNodePool`

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

The name of this resource. Node pool names are formatted as `projects/<project-number>/locations/<region>/azureClusters/<cluster-id>/azureNodePools/<node-pool-id>`. For more details on Google Cloud resource names, see [Resource Names](https://cloud.google.com/apis/design/resource_names)

`↳ version`

`string`  

Required. The Kubernetes version (e.g. `1.19.10-gke.1000`) running on this node pool.

`↳ config`

`[AzureNodeConfig](/php/docs/reference/cloud-gke-multi-cloud/latest/V1.AzureNodeConfig)`  

Required. The node configuration of the node pool.

`↳ subnet_id`

`string`  

Required. The ARM ID of the subnet where the node pool VMs run. Make sure it's a subnet under the virtual network in the cluster configuration.

`↳ autoscaling`

`[AzureNodePoolAutoscaling](/php/docs/reference/cloud-gke-multi-cloud/latest/V1.AzureNodePoolAutoscaling)`  

Required. Autoscaler configuration for this node pool.

`↳ state`

`int`  

Output only. The current state of the node pool.

`↳ uid`

`string`  

Output only. A globally unique identifier for the node pool.

`↳ reconciling`

`bool`  

Output only. If set, there are currently pending changes to the node pool.

`↳ create_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

Output only. The time at which this node pool was created.

`↳ update_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

Output only. The time at which this node pool was last updated.

`↳ etag`

`string`  

Allows clients to perform consistent read-modify-writes through optimistic concurrency control. Can be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.

`↳ annotations`

`array|[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`  

Optional. Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (\_), dots (.), and alphanumerics between.

`↳ max_pods_constraint`

`[MaxPodsConstraint](/php/docs/reference/cloud-gke-multi-cloud/latest/V1.MaxPodsConstraint)`  

Required. The constraint on the maximum number of pods that can be run simultaneously on a node in the node pool.

`↳ azure_availability_zone`

`string`  

Optional. The Azure availability zone of the nodes in this nodepool. When unspecified, it defaults to `1`.

`↳ errors`

`array<[AzureNodePoolError](/php/docs/reference/cloud-gke-multi-cloud/latest/V1.AzureNodePoolError)>`  

Output only. A set of errors found in the node pool.

`↳ management`

`[AzureNodeManagement](/php/docs/reference/cloud-gke-multi-cloud/latest/V1.AzureNodeManagement)`  

Optional. The Management configuration for this node pool.

### getName

The name of this resource.

Node pool names are formatted as `projects/<project-number>/locations/<region>/azureClusters/<cluster-id>/azureNodePools/<node-pool-id>`. For more details on Google Cloud resource names, see [Resource Names](https://cloud.google.com/apis/design/resource_names)

**Returns**

**Type**

**Description**

`string`

### setName

The name of this resource.

Node pool names are formatted as `projects/<project-number>/locations/<region>/azureClusters/<cluster-id>/azureNodePools/<node-pool-id>`. For more details on Google Cloud resource names, see [Resource Names](https://cloud.google.com/apis/design/resource_names)

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getVersion

Required. The Kubernetes version (e.g. `1.19.10-gke.1000`) running on this node pool.

**Returns**

**Type**

**Description**

`string`

### setVersion

Required. The Kubernetes version (e.g. `1.19.10-gke.1000`) running on this node pool.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getConfig

Required. The node configuration of the node pool.

**Returns**

**Type**

**Description**

`[AzureNodeConfig](/php/docs/reference/cloud-gke-multi-cloud/latest/V1.AzureNodeConfig)|null`

### hasConfig

### clearConfig

### setConfig

Required. The node configuration of the node pool.

**Parameter**

**Name**

**Description**

`var`

`[AzureNodeConfig](/php/docs/reference/cloud-gke-multi-cloud/latest/V1.AzureNodeConfig)`  

**Returns**

**Type**

**Description**

`$this`

### getSubnetId

Required. The ARM ID of the subnet where the node pool VMs run. Make sure it's a subnet under the virtual network in the cluster configuration.

**Returns**

**Type**

**Description**

`string`

### setSubnetId

Required. The ARM ID of the subnet where the node pool VMs run. Make sure it's a subnet under the virtual network in the cluster configuration.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getAutoscaling

Required. Autoscaler configuration for this node pool.

**Returns**

**Type**

**Description**

`[AzureNodePoolAutoscaling](/php/docs/reference/cloud-gke-multi-cloud/latest/V1.AzureNodePoolAutoscaling)|null`

### hasAutoscaling

### clearAutoscaling

### setAutoscaling

Required. Autoscaler configuration for this node pool.

**Parameter**

**Name**

**Description**

`var`

`[AzureNodePoolAutoscaling](/php/docs/reference/cloud-gke-multi-cloud/latest/V1.AzureNodePoolAutoscaling)`  

**Returns**

**Type**

**Description**

`$this`

### getState

Output only. The current state of the node pool.

**Returns**

**Type**

**Description**

`int`

Enum of type [State](/php/docs/reference/cloud-gke-multi-cloud/latest/V1.AzureNodePool.State).

### setState

Output only. The current state of the node pool.

**Parameter**

**Name**

**Description**

`var`

`int`  

Enum of type [State](/php/docs/reference/cloud-gke-multi-cloud/latest/V1.AzureNodePool.State).

**Returns**

**Type**

**Description**

`$this`

### getUid

Output only. A globally unique identifier for the node pool.

**Returns**

**Type**

**Description**

`string`

### setUid

Output only. A globally unique identifier for the node pool.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getReconciling

Output only. If set, there are currently pending changes to the node pool.

**Returns**

**Type**

**Description**

`bool`

### setReconciling

Output only. If set, there are currently pending changes to the node pool.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

### getCreateTime

Output only. The time at which this node pool was created.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasCreateTime

### clearCreateTime

### setCreateTime

Output only. The time at which this node pool was created.

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

Output only. The time at which this node pool was last updated.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasUpdateTime

### clearUpdateTime

### setUpdateTime

Output only. The time at which this node pool was last updated.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

**Returns**

**Type**

**Description**

`$this`

### getEtag

Allows clients to perform consistent read-modify-writes through optimistic concurrency control.

Can be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.

**Returns**

**Type**

**Description**

`string`

### setEtag

Allows clients to perform consistent read-modify-writes through optimistic concurrency control.

Can be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getAnnotations

Optional. Annotations on the node pool.

This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (\_), dots (.), and alphanumerics between.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`

### setAnnotations

Optional. Annotations on the node pool.

This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (\_), dots (.), and alphanumerics between.

**Parameter**

**Name**

**Description**

`var`

`array|[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`  

**Returns**

**Type**

**Description**

`$this`

### getMaxPodsConstraint

Required. The constraint on the maximum number of pods that can be run simultaneously on a node in the node pool.

**Returns**

**Type**

**Description**

`[MaxPodsConstraint](/php/docs/reference/cloud-gke-multi-cloud/latest/V1.MaxPodsConstraint)|null`

### hasMaxPodsConstraint

### clearMaxPodsConstraint

### setMaxPodsConstraint

Required. The constraint on the maximum number of pods that can be run simultaneously on a node in the node pool.

**Parameter**

**Name**

**Description**

`var`

`[MaxPodsConstraint](/php/docs/reference/cloud-gke-multi-cloud/latest/V1.MaxPodsConstraint)`  

**Returns**

**Type**

**Description**

`$this`

### getAzureAvailabilityZone

Optional. The Azure availability zone of the nodes in this nodepool.

When unspecified, it defaults to `1`.

**Returns**

**Type**

**Description**

`string`

### setAzureAvailabilityZone

Optional. The Azure availability zone of the nodes in this nodepool.

When unspecified, it defaults to `1`.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getErrors

Output only. A set of errors found in the node pool.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setErrors

Output only. A set of errors found in the node pool.

**Parameter**

**Name**

**Description**

`var`

`array<[AzureNodePoolError](/php/docs/reference/cloud-gke-multi-cloud/latest/V1.AzureNodePoolError)>`  

**Returns**

**Type**

**Description**

`$this`

### getManagement

Optional. The Management configuration for this node pool.

**Returns**

**Type**

**Description**

`[AzureNodeManagement](/php/docs/reference/cloud-gke-multi-cloud/latest/V1.AzureNodeManagement)|null`

### hasManagement

### clearManagement

### setManagement

Optional. The Management configuration for this node pool.

**Parameter**

**Name**

**Description**

`var`

`[AzureNodeManagement](/php/docs/reference/cloud-gke-multi-cloud/latest/V1.AzureNodeManagement)`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
