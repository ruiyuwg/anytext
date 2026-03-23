-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Container V1 Client - Class CreateNodePoolRequest (1.10.3) Stay organized with collections Save and categorize content based on your preferences.

2.8.1 (latest) 2.8.0 2.7.0 2.6.1 2.5.0 2.4.0 2.3.4 2.2.1 2.1.0 2.0.0 1.33.0 1.32.0 1.31.0 1.30.3 1.24.0 1.23.0 1.22.0 1.21.1 1.20.0 1.19.0 1.18.0 1.17.1 1.16.0 1.15.0 1.14.0 1.13.1 1.12.1 1.10.3 1.9.1

Reference documentation and code samples for the Google Cloud Container V1 Client class CreateNodePoolRequest.

CreateNodePoolRequest creates a node pool for a cluster.

Generated from protobuf message `google.container.v1.CreateNodePoolRequest`

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ project_id`

`string`  

Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.

`↳ zone`

`string`  

Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.

`↳ cluster_id`

`string`  

Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.

`↳ node_pool`

`[Google\Cloud\Container\V1\NodePool](/php/docs/reference/cloud-container/1.10.3/V1.NodePool)`  

Required. The node pool to create.

`↳ parent`

`string`  

The parent (project, location, cluster name) where the node pool will be created. Specified in the format `projects/*/locations/*/clusters/*`.

### getProjectId

Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects).

This field has been deprecated and replaced by the parent field.

**Returns**

**Type**

**Description**

`string`

### setProjectId

Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects).

This field has been deprecated and replaced by the parent field.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getZone

Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.

**Returns**

**Type**

**Description**

`string`

### setZone

Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getClusterId

Deprecated. The name of the cluster.

This field has been deprecated and replaced by the parent field.

**Returns**

**Type**

**Description**

`string`

### setClusterId

Deprecated. The name of the cluster.

This field has been deprecated and replaced by the parent field.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getNodePool

Required. The node pool to create.

**Returns**

**Type**

**Description**

`[Google\Cloud\Container\V1\NodePool](/php/docs/reference/cloud-container/1.10.3/V1.NodePool)|null`

### hasNodePool

### clearNodePool

### setNodePool

Required. The node pool to create.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Container\V1\NodePool](/php/docs/reference/cloud-container/1.10.3/V1.NodePool)`  

**Returns**

**Type**

**Description**

`$this`

### getParent

The parent (project, location, cluster name) where the node pool will be created. Specified in the format `projects/*/locations/*/clusters/*`.

**Returns**

**Type**

**Description**

`string`

### setParent

The parent (project, location, cluster name) where the node pool will be created. Specified in the format `projects/*/locations/*/clusters/*`.

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

Last updated 2026-03-18 UTC.
