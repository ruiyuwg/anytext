-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud Spanner V1 Client - Class Instance (1.89.0) Stay organized with collections Save and categorize content based on your preferences.

2.6.0 (latest) 2.5.1 2.4.1 2.3.0 2.2.0 2.1.0 2.0.1-RC1 1.106.0 1.105.1 1.104.1 1.103.0 1.102.0 1.101.0 1.100.0 1.98.0 1.97.0 1.96.0 1.95.0 1.94.0 1.93.1 1.92.1 1.91.0 1.90.0 1.89.0 1.88.0 1.87.0 1.86.0 1.85.0 1.84.0 1.83.0 1.82.0 1.81.0 1.80.0 1.79.0 1.78.0 1.77.0 1.76.1 1.68.0 1.67.0 1.66.0 1.65.0 1.64.0 1.63.2 1.62.1 1.61.0 1.60.0 1.59.0 1.58.4 1.57.0 1.56.0 1.55.0 1.54.2

Reference documentation and code samples for the Cloud Spanner V1 Client class Instance.

An isolated set of Cloud Spanner resources on which databases can be hosted.

Generated from protobuf message `google.spanner.admin.instance.v1.Instance`

## Namespace

Google \\ Cloud \\ Spanner \\ Admin \\ Instance \\ V1

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

Required. A unique identifier for the instance, which cannot be changed after the instance is created. Values are of the form `projects/<project>/instances/[a-z][-a-z0-9]*[a-z0-9]`. The final segment of the name must be between 2 and 64 characters in length.

`↳ config`

`string`  

Required. The name of the instance's configuration. Values are of the form `projects/<project>/instanceConfigs/<configuration>`. See also [InstanceConfig](/php/docs/reference/cloud-spanner/1.89.0/Admin.Instance.V1.InstanceConfig) and ListInstanceConfigs.

`↳ display_name`

`string`  

Required. The descriptive name for this instance as it appears in UIs. Must be unique per project and between 4 and 30 characters in length.

`↳ node_count`

`int`  

The number of nodes allocated to this instance. At most, one of either `node_count` or `processing_units` should be present in the message. Users can set the `node_count` field to specify the target number of nodes allocated to the instance. If autoscaling is enabled, `node_count` is treated as an `OUTPUT_ONLY` field and reflects the current number of nodes allocated to the instance. This might be zero in API responses for instances that are not yet in the `READY` state. If the instance has varying node count across replicas (achieved by setting asymmetric\_autoscaling\_options in autoscaling config), the node\_count here is the maximum node count across all replicas. For more information, see [Compute capacity, nodes, and processing units](https://cloud.google.com/spanner/docs/compute-capacity).

`↳ processing_units`

`int`  

The number of processing units allocated to this instance. At most, one of either `processing_units` or `node_count` should be present in the message. Users can set the `processing_units` field to specify the target number of processing units allocated to the instance. If autoscaling is enabled, `processing_units` is treated as an `OUTPUT_ONLY` field and reflects the current number of processing units allocated to the instance. This might be zero in API responses for instances that are not yet in the `READY` state. If the instance has varying processing units per replica (achieved by setting asymmetric\_autoscaling\_options in autoscaling config), the processing\_units here is the maximum processing units across all replicas. For more information, see [Compute capacity, nodes and processing units](https://cloud.google.com/spanner/docs/compute-capacity).

`↳ replica_compute_capacity`

`array<[ReplicaComputeCapacity](/php/docs/reference/cloud-spanner/1.89.0/Admin.Instance.V1.ReplicaComputeCapacity)>`  

Output only. Lists the compute capacity per ReplicaSelection. A replica selection identifies a set of replicas with common properties. Replicas identified by a ReplicaSelection are scaled with the same compute capacity.

`↳ autoscaling_config`

`[AutoscalingConfig](/php/docs/reference/cloud-spanner/1.89.0/Admin.Instance.V1.AutoscalingConfig)`  

Optional. The autoscaling configuration. Autoscaling is enabled if this field is set. When autoscaling is enabled, node\_count and processing\_units are treated as OUTPUT\_ONLY fields and reflect the current compute capacity allocated to the instance.

`↳ state`

`int`  

Output only. The current instance state. For CreateInstance, the state must be either omitted or set to `CREATING`. For UpdateInstance, the state must be either omitted or set to `READY`.

`↳ labels`

`array|[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`  

Cloud Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer's organizational needs and deployment strategies. Cloud Labels can be used to filter collections of resources. They can be used to control how resource metrics are aggregated. And they can be used as arguments to policy management rules (e.g. route, firewall, load balancing, etc.). \* \* Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z][a-z0-9_-]{0,62}`. \* \* Label values must be between 0 and 63 characters long and must conform to the regular expression `[a-z0-9_-]{0,63}`. \* \* No more than 64 labels can be associated with a given resource. See [https://goo.gl/xmQnxf](https://goo.gl/xmQnxf) for more information on and examples of labels. If you plan to use labels in your own code, please note that additional characters may be allowed in the future. And so you are advised to use an internal label representation, such as JSON, which doesn't rely upon specific characters being disallowed. For example, representing labels as the string: name + "_" + value would prove problematic if we were to allow "_" in a future release.

`↳ endpoint_uris`

`array`  

Deprecated. This field is not populated.

`↳ create_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

Output only. The time at which the instance was created.

`↳ update_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

Output only. The time at which the instance was most recently updated.

`↳ edition`

`int`  

Optional. The `Edition` of the current instance.

`↳ default_backup_schedule_type`

`int`  

Optional. Controls the default backup behavior for new databases within the instance. Note that `AUTOMATIC` is not permitted for free instances, as backups and backup schedules are not allowed for free instances. In the `GetInstance` or `ListInstances` response, if the value of default\_backup\_schedule\_type is unset or NONE, no default backup schedule will be created for new databases within the instance.

### getName

Required. A unique identifier for the instance, which cannot be changed after the instance is created. Values are of the form `projects/<project>/instances/[a-z][-a-z0-9]*[a-z0-9]`. The final segment of the name must be between 2 and 64 characters in length.

**Returns**

**Type**

**Description**

`string`

### setName

Required. A unique identifier for the instance, which cannot be changed after the instance is created. Values are of the form `projects/<project>/instances/[a-z][-a-z0-9]*[a-z0-9]`. The final segment of the name must be between 2 and 64 characters in length.

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

Required. The name of the instance's configuration. Values are of the form `projects/<project>/instanceConfigs/<configuration>`. See also [InstanceConfig](/php/docs/reference/cloud-spanner/1.89.0/Admin.Instance.V1.InstanceConfig) and ListInstanceConfigs.

**Returns**

**Type**

**Description**

`string`

### setConfig

Required. The name of the instance's configuration. Values are of the form `projects/<project>/instanceConfigs/<configuration>`. See also [InstanceConfig](/php/docs/reference/cloud-spanner/1.89.0/Admin.Instance.V1.InstanceConfig) and ListInstanceConfigs.

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

Required. The descriptive name for this instance as it appears in UIs.

Must be unique per project and between 4 and 30 characters in length.

**Returns**

**Type**

**Description**

`string`

### setDisplayName

Required. The descriptive name for this instance as it appears in UIs.

Must be unique per project and between 4 and 30 characters in length.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getNodeCount

The number of nodes allocated to this instance. At most, one of either `node_count` or `processing_units` should be present in the message.

Users can set the `node_count` field to specify the target number of nodes allocated to the instance. If autoscaling is enabled, `node_count` is treated as an `OUTPUT_ONLY` field and reflects the current number of nodes allocated to the instance. This might be zero in API responses for instances that are not yet in the `READY` state. If the instance has varying node count across replicas (achieved by setting asymmetric\_autoscaling\_options in autoscaling config), the node\_count here is the maximum node count across all replicas. For more information, see [Compute capacity, nodes, and processing units](https://cloud.google.com/spanner/docs/compute-capacity).

**Returns**

**Type**

**Description**

`int`

### setNodeCount

The number of nodes allocated to this instance. At most, one of either `node_count` or `processing_units` should be present in the message.

Users can set the `node_count` field to specify the target number of nodes allocated to the instance. If autoscaling is enabled, `node_count` is treated as an `OUTPUT_ONLY` field and reflects the current number of nodes allocated to the instance. This might be zero in API responses for instances that are not yet in the `READY` state. If the instance has varying node count across replicas (achieved by setting asymmetric\_autoscaling\_options in autoscaling config), the node\_count here is the maximum node count across all replicas. For more information, see [Compute capacity, nodes, and processing units](https://cloud.google.com/spanner/docs/compute-capacity).

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getProcessingUnits

The number of processing units allocated to this instance. At most, one of either `processing_units` or `node_count` should be present in the message.

Users can set the `processing_units` field to specify the target number of processing units allocated to the instance. If autoscaling is enabled, `processing_units` is treated as an `OUTPUT_ONLY` field and reflects the current number of processing units allocated to the instance. This might be zero in API responses for instances that are not yet in the `READY` state. If the instance has varying processing units per replica (achieved by setting asymmetric\_autoscaling\_options in autoscaling config), the processing\_units here is the maximum processing units across all replicas. For more information, see [Compute capacity, nodes and processing units](https://cloud.google.com/spanner/docs/compute-capacity).

**Returns**

**Type**

**Description**

`int`

### setProcessingUnits

The number of processing units allocated to this instance. At most, one of either `processing_units` or `node_count` should be present in the message.

Users can set the `processing_units` field to specify the target number of processing units allocated to the instance. If autoscaling is enabled, `processing_units` is treated as an `OUTPUT_ONLY` field and reflects the current number of processing units allocated to the instance. This might be zero in API responses for instances that are not yet in the `READY` state. If the instance has varying processing units per replica (achieved by setting asymmetric\_autoscaling\_options in autoscaling config), the processing\_units here is the maximum processing units across all replicas. For more information, see [Compute capacity, nodes and processing units](https://cloud.google.com/spanner/docs/compute-capacity).

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getReplicaComputeCapacity

Output only. Lists the compute capacity per ReplicaSelection. A replica selection identifies a set of replicas with common properties. Replicas identified by a ReplicaSelection are scaled with the same compute capacity.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setReplicaComputeCapacity

Output only. Lists the compute capacity per ReplicaSelection. A replica selection identifies a set of replicas with common properties. Replicas identified by a ReplicaSelection are scaled with the same compute capacity.

**Parameter**

**Name**

**Description**

`var`

`array<[ReplicaComputeCapacity](/php/docs/reference/cloud-spanner/1.89.0/Admin.Instance.V1.ReplicaComputeCapacity)>`  

**Returns**

**Type**

**Description**

`$this`

### getAutoscalingConfig

Optional. The autoscaling configuration. Autoscaling is enabled if this field is set. When autoscaling is enabled, node\_count and processing\_units are treated as OUTPUT\_ONLY fields and reflect the current compute capacity allocated to the instance.

**Returns**

**Type**

**Description**

`[AutoscalingConfig](/php/docs/reference/cloud-spanner/1.89.0/Admin.Instance.V1.AutoscalingConfig)|null`

### hasAutoscalingConfig

### clearAutoscalingConfig

### setAutoscalingConfig

Optional. The autoscaling configuration. Autoscaling is enabled if this field is set. When autoscaling is enabled, node\_count and processing\_units are treated as OUTPUT\_ONLY fields and reflect the current compute capacity allocated to the instance.

**Parameter**

**Name**

**Description**

`var`

`[AutoscalingConfig](/php/docs/reference/cloud-spanner/1.89.0/Admin.Instance.V1.AutoscalingConfig)`  

**Returns**

**Type**

**Description**

`$this`

### getState

Output only. The current instance state. For CreateInstance, the state must be either omitted or set to `CREATING`. For UpdateInstance, the state must be either omitted or set to `READY`.

**Returns**

**Type**

**Description**

`int`

### setState

Output only. The current instance state. For CreateInstance, the state must be either omitted or set to `CREATING`. For UpdateInstance, the state must be either omitted or set to `READY`.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getLabels

Cloud Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer's organizational needs and deployment strategies. Cloud Labels can be used to filter collections of resources. They can be used to control how resource metrics are aggregated.

And they can be used as arguments to policy management rules (e.g. route, firewall, load balancing, etc.).

-   Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z][a-z0-9_-]{0,62}`.
-   Label values must be between 0 and 63 characters long and must conform to the regular expression `[a-z0-9_-]{0,63}`.
-   No more than 64 labels can be associated with a given resource. See [https://goo.gl/xmQnxf](https://goo.gl/xmQnxf) for more information on and examples of labels. If you plan to use labels in your own code, please note that additional characters may be allowed in the future. And so you are advised to use an internal label representation, such as JSON, which doesn't rely upon specific characters being disallowed. For example, representing labels as the string: name + "_" + value would prove problematic if we were to allow "_" in a future release.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`

### setLabels

Cloud Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer's organizational needs and deployment strategies. Cloud Labels can be used to filter collections of resources. They can be used to control how resource metrics are aggregated.

And they can be used as arguments to policy management rules (e.g. route, firewall, load balancing, etc.).

-   Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z][a-z0-9_-]{0,62}`.
-   Label values must be between 0 and 63 characters long and must conform to the regular expression `[a-z0-9_-]{0,63}`.
-   No more than 64 labels can be associated with a given resource. See [https://goo.gl/xmQnxf](https://goo.gl/xmQnxf) for more information on and examples of labels. If you plan to use labels in your own code, please note that additional characters may be allowed in the future. And so you are advised to use an internal label representation, such as JSON, which doesn't rely upon specific characters being disallowed. For example, representing labels as the string: name + "_" + value would prove problematic if we were to allow "_" in a future release.

**Parameter**

**Name**

**Description**

`var`

`array|[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`  

**Returns**

**Type**

**Description**

`$this`

### getEndpointUris

Deprecated. This field is not populated.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setEndpointUris

Deprecated. This field is not populated.

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

Output only. The time at which the instance was created.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasCreateTime

### clearCreateTime

### setCreateTime

Output only. The time at which the instance was created.

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

Output only. The time at which the instance was most recently updated.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasUpdateTime

### clearUpdateTime

### setUpdateTime

Output only. The time at which the instance was most recently updated.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

**Returns**

**Type**

**Description**

`$this`

### getEdition

Optional. The `Edition` of the current instance.

**Returns**

**Type**

**Description**

`int`

### setEdition

Optional. The `Edition` of the current instance.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getDefaultBackupScheduleType

Optional. Controls the default backup behavior for new databases within the instance.

Note that `AUTOMATIC` is not permitted for free instances, as backups and backup schedules are not allowed for free instances. In the `GetInstance` or `ListInstances` response, if the value of default\_backup\_schedule\_type is unset or NONE, no default backup schedule will be created for new databases within the instance.

**Returns**

**Type**

**Description**

`int`

### setDefaultBackupScheduleType

Optional. Controls the default backup behavior for new databases within the instance.

Note that `AUTOMATIC` is not permitted for free instances, as backups and backup schedules are not allowed for free instances. In the `GetInstance` or `ListInstances` response, if the value of default\_backup\_schedule\_type is unset or NONE, no default backup schedule will be created for new databases within the instance.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
