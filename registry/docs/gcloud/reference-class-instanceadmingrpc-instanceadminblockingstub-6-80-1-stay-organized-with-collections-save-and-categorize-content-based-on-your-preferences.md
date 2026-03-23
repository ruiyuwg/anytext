-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class InstanceAdminGrpc.InstanceAdminBlockingStub (6.80.1) Stay organized with collections Save and categorize content based on your preferences.

6.111.1 (latest) 6.111.0 6.108.0 6.107.0 6.103.0 6.102.1 6.101.1 6.100.0 6.99.0 6.98.1 6.97.1 6.96.1 6.95.1 6.94.0 6.93.0 6.89.0 6.88.0 6.87.0 6.86.0 6.85.0 6.83.0 6.82.0 6.80.1 6.79.0 6.77.0 6.74.1 6.72.0 6.71.0 6.69.0 6.68.0 6.66.0 6.65.1 6.62.0 6.60.0 6.58.0 6.57.0 6.56.0 6.55.0 6.54.0 6.53.0 6.52.1 6.51.0 6.50.1 6.49.0 6.25.1 6.24.0 6.23.4 6.22.0 6.21.2 6.20.0 6.19.1 6.18.0 6.17.4 6.14.1

```
public static final class InstanceAdminGrpc.InstanceAdminBlockingStub extends AbstractBlockingStub<InstanceAdminGrpc.InstanceAdminBlockingStub>
```

A stub to allow clients to do synchronous rpc calls to service InstanceAdmin.

Cloud Spanner Instance Admin API The Cloud Spanner Instance Admin API can be used to create, delete, modify and list instances. Instances are dedicated Cloud Spanner serving and storage resources to be used by Cloud Spanner databases. Each instance has a "configuration", which dictates where the serving resources for the Cloud Spanner instance are located (e.g., US-central, Europe). Configurations are created by Google based on resource availability. Cloud Spanner billing is based on the instances that exist and their sizes. After an instance exists, there are no additional per-database or per-operation charges for use of the instance (though there may be additional network bandwidth charges). Instances offer isolation: problems with databases in one instance will not affect other instances. However, within an instance databases can affect each other. For example, if one database in an instance receives a lot of requests and consumes most of the instance resources, fewer resources are available for other databases in that instance, and their performance may suffer.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractBlockingStub \> InstanceAdminGrpc.InstanceAdminBlockingStub

## Inherited Members

io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel)

io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions)

io.grpc.stub.AbstractStub.<T>withOption(io.grpc.CallOptions.Key<T>,T)

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

io.grpc.stub.AbstractStub.getCallOptions()

io.grpc.stub.AbstractStub.getChannel()

io.grpc.stub.AbstractStub.withCallCredentials(io.grpc.CallCredentials)

io.grpc.stub.AbstractStub.withChannel(io.grpc.Channel)

io.grpc.stub.AbstractStub.withCompression(java.lang.String)

io.grpc.stub.AbstractStub.withDeadline(io.grpc.Deadline)

io.grpc.stub.AbstractStub.withDeadlineAfter(long,java.util.concurrent.TimeUnit)

io.grpc.stub.AbstractStub.withExecutor(java.util.concurrent.Executor)

io.grpc.stub.AbstractStub.withInterceptors(io.grpc.ClientInterceptor...)

io.grpc.stub.AbstractStub.withMaxInboundMessageSize(int)

io.grpc.stub.AbstractStub.withMaxOutboundMessageSize(int)

io.grpc.stub.AbstractStub.withOnReadyThreshold(int)

io.grpc.stub.AbstractStub.withWaitForReady()

[Object.clone()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#clone--)

[Object.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-)

[Object.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#finalize--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#hashCode--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.toString()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#toString--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

## Methods

### build(Channel channel, CallOptions callOptions)

```
protected InstanceAdminGrpc.InstanceAdminBlockingStub build(Channel channel, CallOptions callOptions)
```

**Parameters**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

`callOptions`

`io.grpc.CallOptions`  

**Returns**

**Type**

**Description**

`[InstanceAdminGrpc.InstanceAdminBlockingStub](/java/docs/reference/google-cloud-spanner/6.80.1/com.google.spanner.admin.instance.v1.InstanceAdminGrpc.InstanceAdminBlockingStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createInstance(CreateInstanceRequest request)

```
public Operation createInstance(CreateInstanceRequest request)
```

Creates an instance and begins preparing it to begin serving. The returned long-running operation can be used to track the progress of preparing the new instance. The instance name is assigned by the caller. If the named instance already exists, `CreateInstance` returns `ALREADY_EXISTS`. Immediately upon completion of this request:

-   The instance is readable via the API, with all requested attributes but no allocated resources. Its state is `CREATING`. Until completion of the returned operation:
-   Cancelling the operation renders the instance immediately unreadable via the API.
-   The instance can be deleted.
-   All other attempts to modify the instance are rejected. Upon completion of the returned operation:
-   Billing for all successfully-allocated resources begins (some types may have lower than the requested levels).
-   Databases can be created in the instance.
-   The instance's allocated resource levels are readable via the API.
-   The instance's state becomes `READY`. The returned long-running operation will have a name of the format `<instance_name>/operations/<operation_id>` and can be used to track creation of the instance. The metadata field type is CreateInstanceMetadata. The response field type is Instance, if successful.

**Parameter**

**Name**

**Description**

`request`

`[CreateInstanceRequest](/java/docs/reference/google-cloud-spanner/6.80.1/com.google.spanner.admin.instance.v1.CreateInstanceRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### createInstanceConfig(CreateInstanceConfigRequest request)

```
public Operation createInstanceConfig(CreateInstanceConfigRequest request)
```

Creates an instance configuration and begins preparing it to be used. The returned long-running operation can be used to track the progress of preparing the new instance configuration. The instance configuration name is assigned by the caller. If the named instance configuration already exists, `CreateInstanceConfig` returns `ALREADY_EXISTS`. Immediately after the request returns:

-   The instance configuration is readable via the API, with all requested attributes. The instance configuration's reconciling field is set to true. Its state is `CREATING`. While the operation is pending:
-   Cancelling the operation renders the instance configuration immediately unreadable via the API.
-   Except for deleting the creating resource, all other attempts to modify the instance configuration are rejected. Upon completion of the returned operation:
-   Instances can be created using the instance configuration.
-   The instance configuration's reconciling field becomes false. Its state becomes `READY`. The returned long-running operation will have a name of the format `<instance_config_name>/operations/<operation_id>` and can be used to track creation of the instance configuration. The metadata field type is CreateInstanceConfigMetadata. The response field type is InstanceConfig, if successful. Authorization requires `spanner.instanceConfigs.create` permission on the resource parent.

**Parameter**

**Name**

**Description**

`request`

`[CreateInstanceConfigRequest](/java/docs/reference/google-cloud-spanner/6.80.1/com.google.spanner.admin.instance.v1.CreateInstanceConfigRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### createInstancePartition(CreateInstancePartitionRequest request)

```
public Operation createInstancePartition(CreateInstancePartitionRequest request)
```

Creates an instance partition and begins preparing it to be used. The returned long-running operation can be used to track the progress of preparing the new instance partition. The instance partition name is assigned by the caller. If the named instance partition already exists, `CreateInstancePartition` returns `ALREADY_EXISTS`. Immediately upon completion of this request:

-   The instance partition is readable via the API, with all requested attributes but no allocated resources. Its state is `CREATING`. Until completion of the returned operation:
-   Cancelling the operation renders the instance partition immediately unreadable via the API.
-   The instance partition can be deleted.
-   All other attempts to modify the instance partition are rejected. Upon completion of the returned operation:
-   Billing for all successfully-allocated resources begins (some types may have lower than the requested levels).
-   Databases can start using this instance partition.
-   The instance partition's allocated resource levels are readable via the API.
-   The instance partition's state becomes `READY`. The returned long-running operation will have a name of the format `<instance_partition_name>/operations/<operation_id>` and can be used to track creation of the instance partition. The metadata field type is CreateInstancePartitionMetadata. The response field type is InstancePartition, if successful.

**Parameter**

**Name**

**Description**

`request`

`[CreateInstancePartitionRequest](/java/docs/reference/google-cloud-spanner/6.80.1/com.google.spanner.admin.instance.v1.CreateInstancePartitionRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### deleteInstance(DeleteInstanceRequest request)

```
public Empty deleteInstance(DeleteInstanceRequest request)
```

Deletes an instance. Immediately upon completion of the request:

-   Billing ceases for all of the instance's reserved resources. Soon afterward:
-   The instance and _all of its databases_ immediately and irrevocably disappear from the API. All data in the databases is permanently deleted.

**Parameter**

**Name**

**Description**

`request`

`[DeleteInstanceRequest](/java/docs/reference/google-cloud-spanner/6.80.1/com.google.spanner.admin.instance.v1.DeleteInstanceRequest)`  

**Returns**

**Type**

**Description**

`[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)`

### deleteInstanceConfig(DeleteInstanceConfigRequest request)

```
public Empty deleteInstanceConfig(DeleteInstanceConfigRequest request)
```

Deletes the instance configuration. Deletion is only allowed when no instances are using the configuration. If any instances are using the configuration, returns `FAILED_PRECONDITION`. Only user-managed configurations can be deleted. Authorization requires `spanner.instanceConfigs.delete` permission on the resource name.

**Parameter**

**Name**

**Description**

`request`

`[DeleteInstanceConfigRequest](/java/docs/reference/google-cloud-spanner/6.80.1/com.google.spanner.admin.instance.v1.DeleteInstanceConfigRequest)`  

**Returns**

**Type**

**Description**

`[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)`

### deleteInstancePartition(DeleteInstancePartitionRequest request)

```
public Empty deleteInstancePartition(DeleteInstancePartitionRequest request)
```

Deletes an existing instance partition. Requires that the instance partition is not used by any database or backup and is not the default instance partition of an instance. Authorization requires `spanner.instancePartitions.delete` permission on the resource name.

**Parameter**

**Name**

**Description**

`request`

`[DeleteInstancePartitionRequest](/java/docs/reference/google-cloud-spanner/6.80.1/com.google.spanner.admin.instance.v1.DeleteInstancePartitionRequest)`  

**Returns**

**Type**

**Description**

`[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)`

### getIamPolicy(GetIamPolicyRequest request)

```
public Policy getIamPolicy(GetIamPolicyRequest request)
```

Gets the access control policy for an instance resource. Returns an empty policy if an instance exists but does not have a policy set. Authorization requires `spanner.instances.getIamPolicy` on resource.

**Parameter**

**Name**

**Description**

`request`

`com.google.iam.v1.GetIamPolicyRequest`  

**Returns**

**Type**

**Description**

`com.google.iam.v1.Policy`

### getInstance(GetInstanceRequest request)

```
public Instance getInstance(GetInstanceRequest request)
```

Gets information about a particular instance.

**Parameter**

**Name**

**Description**

`request`

`[GetInstanceRequest](/java/docs/reference/google-cloud-spanner/6.80.1/com.google.spanner.admin.instance.v1.GetInstanceRequest)`  

**Returns**

**Type**

**Description**

`[Instance](/java/docs/reference/google-cloud-spanner/6.80.1/com.google.spanner.admin.instance.v1.Instance)`

### getInstanceConfig(GetInstanceConfigRequest request)

```
public InstanceConfig getInstanceConfig(GetInstanceConfigRequest request)
```

Gets information about a particular instance configuration.

**Parameter**

**Name**

**Description**

`request`

`[GetInstanceConfigRequest](/java/docs/reference/google-cloud-spanner/6.80.1/com.google.spanner.admin.instance.v1.GetInstanceConfigRequest)`  

**Returns**

**Type**

**Description**

`[InstanceConfig](/java/docs/reference/google-cloud-spanner/6.80.1/com.google.spanner.admin.instance.v1.InstanceConfig)`

### getInstancePartition(GetInstancePartitionRequest request)

```
public InstancePartition getInstancePartition(GetInstancePartitionRequest request)
```

Gets information about a particular instance partition.

**Parameter**

**Name**

**Description**

`request`

`[GetInstancePartitionRequest](/java/docs/reference/google-cloud-spanner/6.80.1/com.google.spanner.admin.instance.v1.GetInstancePartitionRequest)`  

**Returns**

**Type**

**Description**

`[InstancePartition](/java/docs/reference/google-cloud-spanner/6.80.1/com.google.spanner.admin.instance.v1.InstancePartition)`

### listInstanceConfigOperations(ListInstanceConfigOperationsRequest request)

```
public ListInstanceConfigOperationsResponse listInstanceConfigOperations(ListInstanceConfigOperationsRequest request)
```

Lists the user-managed instance configuration long-running operations in the given project. An instance configuration operation has a name of the form `projects/<project>/instanceConfigs/<instance_config>/operations/<operation>`. The long-running operation metadata field type `metadata.type_url` describes the type of the metadata. Operations returned include those that have completed/failed/canceled within the last 7 days, and pending operations. Operations returned are ordered by `operation.metadata.value.start_time` in descending order starting from the most recently started operation.

**Parameter**

**Name**

**Description**

`request`

`[ListInstanceConfigOperationsRequest](/java/docs/reference/google-cloud-spanner/6.80.1/com.google.spanner.admin.instance.v1.ListInstanceConfigOperationsRequest)`  

**Returns**

**Type**

**Description**

`[ListInstanceConfigOperationsResponse](/java/docs/reference/google-cloud-spanner/6.80.1/com.google.spanner.admin.instance.v1.ListInstanceConfigOperationsResponse)`

### listInstanceConfigs(ListInstanceConfigsRequest request)

```
public ListInstanceConfigsResponse listInstanceConfigs(ListInstanceConfigsRequest request)
```

Lists the supported instance configurations for a given project.

**Parameter**

**Name**

**Description**

`request`

`[ListInstanceConfigsRequest](/java/docs/reference/google-cloud-spanner/6.80.1/com.google.spanner.admin.instance.v1.ListInstanceConfigsRequest)`  

**Returns**

**Type**

**Description**

`[ListInstanceConfigsResponse](/java/docs/reference/google-cloud-spanner/6.80.1/com.google.spanner.admin.instance.v1.ListInstanceConfigsResponse)`

### listInstancePartitionOperations(ListInstancePartitionOperationsRequest request)

```
public ListInstancePartitionOperationsResponse listInstancePartitionOperations(ListInstancePartitionOperationsRequest request)
```

Lists instance partition long-running operations in the given instance. An instance partition operation has a name of the form `projects/<project>/instances/<instance>/instancePartitions/<instance_partition>/operations/<operation>`. The long-running operation metadata field type `metadata.type_url` describes the type of the metadata. Operations returned include those that have completed/failed/canceled within the last 7 days, and pending operations. Operations returned are ordered by `operation.metadata.value.start_time` in descending order starting from the most recently started operation. Authorization requires `spanner.instancePartitionOperations.list` permission on the resource parent.

**Parameter**

**Name**

**Description**

`request`

`[ListInstancePartitionOperationsRequest](/java/docs/reference/google-cloud-spanner/6.80.1/com.google.spanner.admin.instance.v1.ListInstancePartitionOperationsRequest)`  

**Returns**

**Type**

**Description**

`[ListInstancePartitionOperationsResponse](/java/docs/reference/google-cloud-spanner/6.80.1/com.google.spanner.admin.instance.v1.ListInstancePartitionOperationsResponse)`

### listInstancePartitions(ListInstancePartitionsRequest request)

```
public ListInstancePartitionsResponse listInstancePartitions(ListInstancePartitionsRequest request)
```

Lists all instance partitions for the given instance.

**Parameter**

**Name**

**Description**

`request`

`[ListInstancePartitionsRequest](/java/docs/reference/google-cloud-spanner/6.80.1/com.google.spanner.admin.instance.v1.ListInstancePartitionsRequest)`  

**Returns**

**Type**

**Description**

`[ListInstancePartitionsResponse](/java/docs/reference/google-cloud-spanner/6.80.1/com.google.spanner.admin.instance.v1.ListInstancePartitionsResponse)`

### listInstances(ListInstancesRequest request)

```
public ListInstancesResponse listInstances(ListInstancesRequest request)
```

Lists all instances in the given project.

**Parameter**

**Name**

**Description**

`request`

`[ListInstancesRequest](/java/docs/reference/google-cloud-spanner/6.80.1/com.google.spanner.admin.instance.v1.ListInstancesRequest)`  

**Returns**

**Type**

**Description**

`[ListInstancesResponse](/java/docs/reference/google-cloud-spanner/6.80.1/com.google.spanner.admin.instance.v1.ListInstancesResponse)`

### moveInstance(MoveInstanceRequest request)

```
public Operation moveInstance(MoveInstanceRequest request)
```

Moves an instance to the target instance configuration. You can use the returned long-running operation to track the progress of moving the instance. `MoveInstance` returns `FAILED_PRECONDITION` if the instance meets any of the following criteria:

-   Is undergoing a move to a different instance configuration
-   Has backups
-   Has an ongoing update
-   Contains any CMEK-enabled databases
-   Is a free trial instance While the operation is pending:
-   All other attempts to modify the instance, including changes to its compute capacity, are rejected.
-   The following database and backup admin operations are rejected:
    -   `DatabaseAdmin.CreateDatabase`
    -   `DatabaseAdmin.UpdateDatabaseDdl` (disabled if default\_leader is specified in the request.)
    -   `DatabaseAdmin.RestoreDatabase`
    -   `DatabaseAdmin.CreateBackup`
    -   `DatabaseAdmin.CopyBackup`
-   Both the source and target instance configurations are subject to hourly compute and storage charges.
-   The instance might experience higher read-write latencies and a higher transaction abort rate. However, moving an instance doesn't cause any downtime. The returned long-running operation has a name of the format `<instance_name>/operations/<operation_id>` and can be used to track the move instance operation. The metadata field type is MoveInstanceMetadata. The response field type is Instance, if successful. Cancelling the operation sets its metadata's cancel\_time. Cancellation is not immediate because it involves moving any data previously moved to the target instance configuration back to the original instance configuration. You can use this operation to track the progress of the cancellation. Upon successful completion of the cancellation, the operation terminates with `CANCELLED` status. If not cancelled, upon completion of the returned operation:
-   The instance successfully moves to the target instance configuration.
-   You are billed for compute and storage in target instance configuration. Authorization requires the `spanner.instances.update` permission on the resource instance. For more details, see [Move an instance](https://cloud.google.com/spanner/docs/move-instance).

**Parameter**

**Name**

**Description**

`request`

`[MoveInstanceRequest](/java/docs/reference/google-cloud-spanner/6.80.1/com.google.spanner.admin.instance.v1.MoveInstanceRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### setIamPolicy(SetIamPolicyRequest request)

```
public Policy setIamPolicy(SetIamPolicyRequest request)
```

Sets the access control policy on an instance resource. Replaces any existing policy. Authorization requires `spanner.instances.setIamPolicy` on resource.

**Parameter**

**Name**

**Description**

`request`

`com.google.iam.v1.SetIamPolicyRequest`  

**Returns**

**Type**

**Description**

`com.google.iam.v1.Policy`

### testIamPermissions(TestIamPermissionsRequest request)

```
public TestIamPermissionsResponse testIamPermissions(TestIamPermissionsRequest request)
```

Returns permissions that the caller has on the specified instance resource. Attempting this RPC on a non-existent Cloud Spanner instance resource will result in a NOT\_FOUND error if the user has `spanner.instances.list` permission on the containing Google Cloud Project. Otherwise returns an empty set of permissions.

**Parameter**

**Name**

**Description**

`request`

`com.google.iam.v1.TestIamPermissionsRequest`  

**Returns**

**Type**

**Description**

`com.google.iam.v1.TestIamPermissionsResponse`

### updateInstance(UpdateInstanceRequest request)

```
public Operation updateInstance(UpdateInstanceRequest request)
```

Updates an instance, and begins allocating or releasing resources as requested. The returned long-running operation can be used to track the progress of updating the instance. If the named instance does not exist, returns `NOT_FOUND`. Immediately upon completion of this request:

-   For resource types for which a decrease in the instance's allocation has been requested, billing is based on the newly-requested level. Until completion of the returned operation:
-   Cancelling the operation sets its metadata's cancel\_time, and begins restoring resources to their pre-request values. The operation is guaranteed to succeed at undoing all resource changes, after which point it terminates with a `CANCELLED` status.
-   All other attempts to modify the instance are rejected.
-   Reading the instance via the API continues to give the pre-request resource levels. Upon completion of the returned operation:
-   Billing begins for all successfully-allocated resources (some types may have lower than the requested levels).
-   All newly-reserved resources are available for serving the instance's tables.
-   The instance's new resource levels are readable via the API. The returned long-running operation will have a name of the format `<instance_name>/operations/<operation_id>` and can be used to track the instance modification. The metadata field type is UpdateInstanceMetadata. The response field type is Instance, if successful. Authorization requires `spanner.instances.update` permission on the resource name.

**Parameter**

**Name**

**Description**

`request`

`[UpdateInstanceRequest](/java/docs/reference/google-cloud-spanner/6.80.1/com.google.spanner.admin.instance.v1.UpdateInstanceRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### updateInstanceConfig(UpdateInstanceConfigRequest request)

```
public Operation updateInstanceConfig(UpdateInstanceConfigRequest request)
```

Updates an instance configuration. The returned long-running operation can be used to track the progress of updating the instance. If the named instance configuration does not exist, returns `NOT_FOUND`. Only user-managed configurations can be updated. Immediately after the request returns:

-   The instance configuration's reconciling field is set to true. While the operation is pending:
-   Cancelling the operation sets its metadata's cancel\_time. The operation is guaranteed to succeed at undoing all changes, after which point it terminates with a `CANCELLED` status.
-   All other attempts to modify the instance configuration are rejected.
-   Reading the instance configuration via the API continues to give the pre-request values. Upon completion of the returned operation:
-   Creating instances using the instance configuration uses the new values.
-   The new values of the instance configuration are readable via the API.
-   The instance configuration's reconciling field becomes false. The returned long-running operation will have a name of the format `<instance_config_name>/operations/<operation_id>` and can be used to track the instance configuration modification. The metadata field type is UpdateInstanceConfigMetadata. The response field type is InstanceConfig, if successful. Authorization requires `spanner.instanceConfigs.update` permission on the resource name.

**Parameter**

**Name**

**Description**

`request`

`[UpdateInstanceConfigRequest](/java/docs/reference/google-cloud-spanner/6.80.1/com.google.spanner.admin.instance.v1.UpdateInstanceConfigRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### updateInstancePartition(UpdateInstancePartitionRequest request)

```
public Operation updateInstancePartition(UpdateInstancePartitionRequest request)
```

Updates an instance partition, and begins allocating or releasing resources as requested. The returned long-running operation can be used to track the progress of updating the instance partition. If the named instance partition does not exist, returns `NOT_FOUND`. Immediately upon completion of this request:

-   For resource types for which a decrease in the instance partition's allocation has been requested, billing is based on the newly-requested level. Until completion of the returned operation:
-   Cancelling the operation sets its metadata's cancel\_time, and begins restoring resources to their pre-request values. The operation is guaranteed to succeed at undoing all resource changes, after which point it terminates with a `CANCELLED` status.
-   All other attempts to modify the instance partition are rejected.
-   Reading the instance partition via the API continues to give the pre-request resource levels. Upon completion of the returned operation:
-   Billing begins for all successfully-allocated resources (some types may have lower than the requested levels).
-   All newly-reserved resources are available for serving the instance partition's tables.
-   The instance partition's new resource levels are readable via the API. The returned long-running operation will have a name of the format `<instance_partition_name>/operations/<operation_id>` and can be used to track the instance partition modification. The metadata field type is UpdateInstancePartitionMetadata. The response field type is InstancePartition, if successful. Authorization requires `spanner.instancePartitions.update` permission on the resource name.

**Parameter**

**Name**

**Description**

`request`

`[UpdateInstancePartitionRequest](/java/docs/reference/google-cloud-spanner/6.80.1/com.google.spanner.admin.instance.v1.UpdateInstancePartitionRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
