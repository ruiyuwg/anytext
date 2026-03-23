-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Compute V1 Client - Class NodeTemplate (1.19.0) Stay organized with collections Save and categorize content based on your preferences.

2.8.0 (latest) 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.1 2.0.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.24.0 1.23.0 1.22.1 1.21.0 1.20.0 1.19.0 1.18.1 1.17.0 1.16.2 1.14.0 1.13.0 1.12.1 1.11.1 1.10.1 1.9.1 1.8.3 1.7.1 1.6.1 1.5.0

Reference documentation and code samples for the Compute V1 Client class NodeTemplate.

Represent a sole-tenant Node Template resource. You can use a template to define properties for nodes in a node group. For more information, read Creating node groups and instances.

Generated from protobuf message `google.cloud.compute.v1.NodeTemplate`

## Namespace

Google \\ Cloud \\ Compute \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ accelerators`

`array<[Google\Cloud\Compute\V1\AcceleratorConfig](/php/docs/reference/cloud-compute/1.19.0/V1.AcceleratorConfig)>`  

`↳ cpu_overcommit_type`

`string`  

CPU overcommit. Check the CpuOvercommitType enum for the list of possible values.

`↳ creation_timestamp`

`string`  

\[Output Only\] Creation timestamp in RFC3339 text format.

`↳ description`

`string`  

An optional description of this resource. Provide this property when you create the resource.

`↳ disks`

`array<[Google\Cloud\Compute\V1\LocalDisk](/php/docs/reference/cloud-compute/1.19.0/V1.LocalDisk)>`  

`↳ id`

`int|string`  

\[Output Only\] The unique identifier for the resource. This identifier is defined by the server.

`↳ kind`

`string`  

\[Output Only\] The type of the resource. Always compute#nodeTemplate for node templates.

`↳ name`

`string`  

The name of the resource, provided by the client when initially creating the resource. The resource name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.

`↳ node_affinity_labels`

`array|[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`  

Labels to use for node affinity, which will be used in instance scheduling.

`↳ node_type`

`string`  

The node type to use for nodes group that are created from this template.

`↳ node_type_flexibility`

`[Google\Cloud\Compute\V1\NodeTemplateNodeTypeFlexibility](/php/docs/reference/cloud-compute/1.19.0/V1.NodeTemplateNodeTypeFlexibility)`  

Do not use. Instead, use the node\_type property.

`↳ region`

`string`  

\[Output Only\] The name of the region where the node template resides, such as us-central1.

`↳ self_link`

`string`  

\[Output Only\] Server-defined URL for the resource.

`↳ server_binding`

`[Google\Cloud\Compute\V1\ServerBinding](/php/docs/reference/cloud-compute/1.19.0/V1.ServerBinding)`  

Sets the binding properties for the physical server. Valid values include: - _\[Default\]_ RESTART\_NODE\_ON\_ANY\_SERVER: Restarts VMs on any available physical server - RESTART\_NODE\_ON\_MINIMAL\_SERVER: Restarts VMs on the same physical server whenever possible See Sole-tenant node options for more information.

`↳ status`

`string`  

\[Output Only\] The status of the node template. One of the following values: CREATING, READY, and DELETING. Check the Status enum for the list of possible values.

`↳ status_message`

`string`  

\[Output Only\] An optional, human-readable explanation of the status.

### getAccelerators

Generated from protobuf field `repeated .google.cloud.compute.v1.AcceleratorConfig accelerators = 269577064;`

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setAccelerators

Generated from protobuf field `repeated .google.cloud.compute.v1.AcceleratorConfig accelerators = 269577064;`

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\Compute\V1\AcceleratorConfig](/php/docs/reference/cloud-compute/1.19.0/V1.AcceleratorConfig)>`  

**Returns**

**Type**

**Description**

`$this`

### getCpuOvercommitType

CPU overcommit.

Check the CpuOvercommitType enum for the list of possible values.

**Returns**

**Type**

**Description**

`string`

### hasCpuOvercommitType

### clearCpuOvercommitType

### setCpuOvercommitType

CPU overcommit.

Check the CpuOvercommitType enum for the list of possible values.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getCreationTimestamp

\[Output Only\] Creation timestamp in RFC3339 text format.

**Returns**

**Type**

**Description**

`string`

### hasCreationTimestamp

### clearCreationTimestamp

### setCreationTimestamp

\[Output Only\] Creation timestamp in RFC3339 text format.

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

An optional description of this resource. Provide this property when you create the resource.

**Returns**

**Type**

**Description**

`string`

### hasDescription

### clearDescription

### setDescription

An optional description of this resource. Provide this property when you create the resource.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getDisks

Generated from protobuf field `repeated .google.cloud.compute.v1.LocalDisk disks = 95594102;`

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setDisks

Generated from protobuf field `repeated .google.cloud.compute.v1.LocalDisk disks = 95594102;`

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\Compute\V1\LocalDisk](/php/docs/reference/cloud-compute/1.19.0/V1.LocalDisk)>`  

**Returns**

**Type**

**Description**

`$this`

### getId

\[Output Only\] The unique identifier for the resource. This identifier is defined by the server.

**Returns**

**Type**

**Description**

`int|string`

### hasId

### clearId

### setId

\[Output Only\] The unique identifier for the resource. This identifier is defined by the server.

**Parameter**

**Name**

**Description**

`var`

`int|string`  

**Returns**

**Type**

**Description**

`$this`

### getKind

\[Output Only\] The type of the resource. Always compute#nodeTemplate for node templates.

**Returns**

**Type**

**Description**

`string`

### hasKind

### clearKind

### setKind

\[Output Only\] The type of the resource. Always compute#nodeTemplate for node templates.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getName

The name of the resource, provided by the client when initially creating the resource. The resource name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.

**Returns**

**Type**

**Description**

`string`

### hasName

### clearName

### setName

The name of the resource, provided by the client when initially creating the resource. The resource name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getNodeAffinityLabels

Labels to use for node affinity, which will be used in instance scheduling.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`

### setNodeAffinityLabels

Labels to use for node affinity, which will be used in instance scheduling.

**Parameter**

**Name**

**Description**

`var`

`array|[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`  

**Returns**

**Type**

**Description**

`$this`

### getNodeType

The node type to use for nodes group that are created from this template.

**Returns**

**Type**

**Description**

`string`

### hasNodeType

### clearNodeType

### setNodeType

The node type to use for nodes group that are created from this template.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getNodeTypeFlexibility

Do not use. Instead, use the node\_type property.

**Returns**

**Type**

**Description**

`[Google\Cloud\Compute\V1\NodeTemplateNodeTypeFlexibility](/php/docs/reference/cloud-compute/1.19.0/V1.NodeTemplateNodeTypeFlexibility)|null`

### hasNodeTypeFlexibility

### clearNodeTypeFlexibility

### setNodeTypeFlexibility

Do not use. Instead, use the node\_type property.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Compute\V1\NodeTemplateNodeTypeFlexibility](/php/docs/reference/cloud-compute/1.19.0/V1.NodeTemplateNodeTypeFlexibility)`  

**Returns**

**Type**

**Description**

`$this`

### getRegion

\[Output Only\] The name of the region where the node template resides, such as us-central1.

**Returns**

**Type**

**Description**

`string`

### hasRegion

### clearRegion

### setRegion

\[Output Only\] The name of the region where the node template resides, such as us-central1.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getSelfLink

\[Output Only\] Server-defined URL for the resource.

**Returns**

**Type**

**Description**

`string`

### hasSelfLink

### clearSelfLink

### setSelfLink

\[Output Only\] Server-defined URL for the resource.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getServerBinding

Sets the binding properties for the physical server. Valid values include: - _\[Default\]_ RESTART\_NODE\_ON\_ANY\_SERVER: Restarts VMs on any available physical server - RESTART\_NODE\_ON\_MINIMAL\_SERVER: Restarts VMs on the same physical server whenever possible See Sole-tenant node options for more information.

**Returns**

**Type**

**Description**

`[Google\Cloud\Compute\V1\ServerBinding](/php/docs/reference/cloud-compute/1.19.0/V1.ServerBinding)|null`

### hasServerBinding

### clearServerBinding

### setServerBinding

Sets the binding properties for the physical server. Valid values include: - _\[Default\]_ RESTART\_NODE\_ON\_ANY\_SERVER: Restarts VMs on any available physical server - RESTART\_NODE\_ON\_MINIMAL\_SERVER: Restarts VMs on the same physical server whenever possible See Sole-tenant node options for more information.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Compute\V1\ServerBinding](/php/docs/reference/cloud-compute/1.19.0/V1.ServerBinding)`  

**Returns**

**Type**

**Description**

`$this`

### getStatus

\[Output Only\] The status of the node template. One of the following values: CREATING, READY, and DELETING.

Check the Status enum for the list of possible values.

**Returns**

**Type**

**Description**

`string`

### hasStatus

### clearStatus

### setStatus

\[Output Only\] The status of the node template. One of the following values: CREATING, READY, and DELETING.

Check the Status enum for the list of possible values.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getStatusMessage

\[Output Only\] An optional, human-readable explanation of the status.

**Returns**

**Type**

**Description**

`string`

### hasStatusMessage

### clearStatusMessage

### setStatusMessage

\[Output Only\] An optional, human-readable explanation of the status.

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
