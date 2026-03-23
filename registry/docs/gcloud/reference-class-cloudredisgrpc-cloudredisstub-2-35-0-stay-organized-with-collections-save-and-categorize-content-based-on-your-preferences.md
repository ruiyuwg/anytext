-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class CloudRedisGrpc.CloudRedisStub (2.35.0) Stay organized with collections Save and categorize content based on your preferences.

2.90.0 (latest) 2.88.0 2.86.0 2.85.0 2.83.0 2.81.0 2.79.0 2.78.0 2.77.0 2.76.0 2.75.0 2.73.0 2.71.0 2.70.0 2.67.0 2.66.0 2.65.0 2.63.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.52.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.5 2.5.0 2.4.1 2.3.0 2.2.0 2.1.1

```
public static final class CloudRedisGrpc.CloudRedisStub extends AbstractAsyncStub<CloudRedisGrpc.CloudRedisStub>
```

A stub to allow clients to do asynchronous rpc calls to service CloudRedis.

Configures and manages Cloud Memorystore for Redis instances Google Cloud Memorystore for Redis v1 The `redis.googleapis.com` service implements the Google Cloud Memorystore for Redis API and defines the following resource model for managing Redis instances:

-   The service works with a collection of cloud projects, named: `/projects/*`
-   Each project has a collection of available locations, named: `/locations/*`
-   Each location has a collection of Redis instances, named: `/instances/*`
-   As such, Redis instances are resources of the form: `/projects/{project_id}/locations/{location_id}/instances/{instance_id}` Note that location\_id must be referring to a GCP `region`; for example:
-   `projects/redpepper-1290/locations/us-central1/instances/my-redis`

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractAsyncStub \> CloudRedisGrpc.CloudRedisStub

## Inherited Members

io.grpc.stub.AbstractAsyncStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel)

io.grpc.stub.AbstractAsyncStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions)

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
protected CloudRedisGrpc.CloudRedisStub build(Channel channel, CallOptions callOptions)
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

`[CloudRedisGrpc.CloudRedisStub](/java/docs/reference/google-cloud-redis/2.35.0/com.google.cloud.redis.v1.CloudRedisGrpc.CloudRedisStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createInstance(CreateInstanceRequest request, StreamObserver<Operation> responseObserver)

```
public void createInstance(CreateInstanceRequest request, StreamObserver<Operation> responseObserver)
```

Creates a Redis instance based on the specified tier and memory size. By default, the instance is accessible from the project's [default network](https://cloud.google.com/vpc/docs/vpc). The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

**Parameters**

**Name**

**Description**

`request`

`[CreateInstanceRequest](/java/docs/reference/google-cloud-redis/2.35.0/com.google.cloud.redis.v1.CreateInstanceRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### deleteInstance(DeleteInstanceRequest request, StreamObserver<Operation> responseObserver)

```
public void deleteInstance(DeleteInstanceRequest request, StreamObserver<Operation> responseObserver)
```

Deletes a specific Redis instance. Instance stops serving and data is deleted.

**Parameters**

**Name**

**Description**

`request`

`[DeleteInstanceRequest](/java/docs/reference/google-cloud-redis/2.35.0/com.google.cloud.redis.v1.DeleteInstanceRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### exportInstance(ExportInstanceRequest request, StreamObserver<Operation> responseObserver)

```
public void exportInstance(ExportInstanceRequest request, StreamObserver<Operation> responseObserver)
```

Export Redis instance data into a Redis RDB format file in Cloud Storage. Redis will continue serving during this operation. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

**Parameters**

**Name**

**Description**

`request`

`[ExportInstanceRequest](/java/docs/reference/google-cloud-redis/2.35.0/com.google.cloud.redis.v1.ExportInstanceRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### failoverInstance(FailoverInstanceRequest request, StreamObserver<Operation> responseObserver)

```
public void failoverInstance(FailoverInstanceRequest request, StreamObserver<Operation> responseObserver)
```

Initiates a failover of the primary node to current replica node for a specific STANDARD tier Cloud Memorystore for Redis instance.

**Parameters**

**Name**

**Description**

`request`

`[FailoverInstanceRequest](/java/docs/reference/google-cloud-redis/2.35.0/com.google.cloud.redis.v1.FailoverInstanceRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### getInstance(GetInstanceRequest request, StreamObserver<Instance> responseObserver)

```
public void getInstance(GetInstanceRequest request, StreamObserver<Instance> responseObserver)
```

Gets the details of a specific Redis instance.

**Parameters**

**Name**

**Description**

`request`

`[GetInstanceRequest](/java/docs/reference/google-cloud-redis/2.35.0/com.google.cloud.redis.v1.GetInstanceRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Instance](/java/docs/reference/google-cloud-redis/2.35.0/com.google.cloud.redis.v1.Instance)>`  

### getInstanceAuthString(GetInstanceAuthStringRequest request, StreamObserver<InstanceAuthString> responseObserver)

```
public void getInstanceAuthString(GetInstanceAuthStringRequest request, StreamObserver<InstanceAuthString> responseObserver)
```

Gets the AUTH string for a Redis instance. If AUTH is not enabled for the instance the response will be empty. This information is not included in the details returned to GetInstance.

**Parameters**

**Name**

**Description**

`request`

`[GetInstanceAuthStringRequest](/java/docs/reference/google-cloud-redis/2.35.0/com.google.cloud.redis.v1.GetInstanceAuthStringRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[InstanceAuthString](/java/docs/reference/google-cloud-redis/2.35.0/com.google.cloud.redis.v1.InstanceAuthString)>`  

### importInstance(ImportInstanceRequest request, StreamObserver<Operation> responseObserver)

```
public void importInstance(ImportInstanceRequest request, StreamObserver<Operation> responseObserver)
```

Import a Redis RDB snapshot file from Cloud Storage into a Redis instance. Redis may stop serving during this operation. Instance state will be IMPORTING for entire operation. When complete, the instance will contain only data from the imported file. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

**Parameters**

**Name**

**Description**

`request`

`[ImportInstanceRequest](/java/docs/reference/google-cloud-redis/2.35.0/com.google.cloud.redis.v1.ImportInstanceRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### listInstances(ListInstancesRequest request, StreamObserver<ListInstancesResponse> responseObserver)

```
public void listInstances(ListInstancesRequest request, StreamObserver<ListInstancesResponse> responseObserver)
```

Lists all Redis instances owned by a project in either the specified location (region) or all locations. The location should have the following format:

-   `projects/{project_id}/locations/{location_id}` If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.

**Parameters**

**Name**

**Description**

`request`

`[ListInstancesRequest](/java/docs/reference/google-cloud-redis/2.35.0/com.google.cloud.redis.v1.ListInstancesRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListInstancesResponse](/java/docs/reference/google-cloud-redis/2.35.0/com.google.cloud.redis.v1.ListInstancesResponse)>`  

### rescheduleMaintenance(RescheduleMaintenanceRequest request, StreamObserver<Operation> responseObserver)

```
public void rescheduleMaintenance(RescheduleMaintenanceRequest request, StreamObserver<Operation> responseObserver)
```

Reschedule maintenance for a given instance in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[RescheduleMaintenanceRequest](/java/docs/reference/google-cloud-redis/2.35.0/com.google.cloud.redis.v1.RescheduleMaintenanceRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### updateInstance(UpdateInstanceRequest request, StreamObserver<Operation> responseObserver)

```
public void updateInstance(UpdateInstanceRequest request, StreamObserver<Operation> responseObserver)
```

Updates the metadata and configuration of a specific Redis instance. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

**Parameters**

**Name**

**Description**

`request`

`[UpdateInstanceRequest](/java/docs/reference/google-cloud-redis/2.35.0/com.google.cloud.redis.v1.UpdateInstanceRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### upgradeInstance(UpgradeInstanceRequest request, StreamObserver<Operation> responseObserver)

```
public void upgradeInstance(UpgradeInstanceRequest request, StreamObserver<Operation> responseObserver)
```

Upgrades Redis instance to the newer Redis version specified in the request.

**Parameters**

**Name**

**Description**

`request`

`[UpgradeInstanceRequest](/java/docs/reference/google-cloud-redis/2.35.0/com.google.cloud.redis.v1.UpgradeInstanceRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
