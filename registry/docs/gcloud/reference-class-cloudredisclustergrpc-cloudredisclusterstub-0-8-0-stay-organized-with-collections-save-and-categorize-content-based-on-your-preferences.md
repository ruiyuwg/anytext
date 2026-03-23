-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class CloudRedisClusterGrpc.CloudRedisClusterStub (0.8.0) Stay organized with collections Save and categorize content based on your preferences.

0.59.0 (latest) 0.57.0 0.55.0 0.54.0 0.52.0 0.50.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.42.0 0.40.0 0.39.0 0.36.0 0.35.0 0.34.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public static final class CloudRedisClusterGrpc.CloudRedisClusterStub extends AbstractAsyncStub<CloudRedisClusterGrpc.CloudRedisClusterStub>
```

A stub to allow clients to do asynchronous rpc calls to service CloudRedisCluster.

Configures and manages Cloud Memorystore for Redis clusters Google Cloud Memorystore for Redis Cluster The `redis.googleapis.com` service implements the Google Cloud Memorystore for Redis API and defines the following resource model for managing Redis clusters:

-   The service works with a collection of cloud projects, named: `/projects/*`
-   Each project has a collection of available locations, named: `/locations/*`
-   Each location has a collection of Redis clusters, named: `/clusters/*`
-   As such, Redis clusters are resources of the form: `/projects/{project_id}/locations/{location_id}/clusters/{instance_id}` Note that location\_id must be a GCP `region`; for example:
-   `projects/redpepper-1290/locations/us-central1/clusters/my-redis` We use API version selector for Flex APIs
-   The versioning strategy is release-based versioning
-   Our backend CLH only deals with the superset version (called v1main)
-   Existing backend for Redis Gen1 and MRR is not touched.
-   More details in go/redis-flex-api-versioning

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractAsyncStub \> CloudRedisClusterGrpc.CloudRedisClusterStub

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
protected CloudRedisClusterGrpc.CloudRedisClusterStub build(Channel channel, CallOptions callOptions)
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

`[CloudRedisClusterGrpc.CloudRedisClusterStub](/java/docs/reference/google-cloud-redis-cluster/0.8.0/com.google.cloud.redis.cluster.v1.CloudRedisClusterGrpc.CloudRedisClusterStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createCluster(CreateClusterRequest request, StreamObserver<Operation> responseObserver)

```
public void createCluster(CreateClusterRequest request, StreamObserver<Operation> responseObserver)
```

Creates a Redis cluster based on the specified properties. The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis cluster will be fully functional. The completed longrunning.Operation will contain the new cluster object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

**Parameters**

**Name**

**Description**

`request`

`[CreateClusterRequest](/java/docs/reference/google-cloud-redis-cluster/0.8.0/com.google.cloud.redis.cluster.v1.CreateClusterRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### deleteCluster(DeleteClusterRequest request, StreamObserver<Operation> responseObserver)

```
public void deleteCluster(DeleteClusterRequest request, StreamObserver<Operation> responseObserver)
```

Deletes a specific Redis cluster. Cluster stops serving and data is deleted.

**Parameters**

**Name**

**Description**

`request`

`[DeleteClusterRequest](/java/docs/reference/google-cloud-redis-cluster/0.8.0/com.google.cloud.redis.cluster.v1.DeleteClusterRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### getCluster(GetClusterRequest request, StreamObserver<Cluster> responseObserver)

```
public void getCluster(GetClusterRequest request, StreamObserver<Cluster> responseObserver)
```

Gets the details of a specific Redis cluster.

**Parameters**

**Name**

**Description**

`request`

`[GetClusterRequest](/java/docs/reference/google-cloud-redis-cluster/0.8.0/com.google.cloud.redis.cluster.v1.GetClusterRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Cluster](/java/docs/reference/google-cloud-redis-cluster/0.8.0/com.google.cloud.redis.cluster.v1.Cluster)>`  

### listClusters(ListClustersRequest request, StreamObserver<ListClustersResponse> responseObserver)

```
public void listClusters(ListClustersRequest request, StreamObserver<ListClustersResponse> responseObserver)
```

Lists all Redis clusters owned by a project in either the specified location (region) or all locations. The location should have the following format:

-   `projects/{project_id}/locations/{location_id}` If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.

**Parameters**

**Name**

**Description**

`request`

`[ListClustersRequest](/java/docs/reference/google-cloud-redis-cluster/0.8.0/com.google.cloud.redis.cluster.v1.ListClustersRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListClustersResponse](/java/docs/reference/google-cloud-redis-cluster/0.8.0/com.google.cloud.redis.cluster.v1.ListClustersResponse)>`  

### updateCluster(UpdateClusterRequest request, StreamObserver<Operation> responseObserver)

```
public void updateCluster(UpdateClusterRequest request, StreamObserver<Operation> responseObserver)
```

Updates the metadata and configuration of a specific Redis cluster. Completed longrunning.Operation will contain the new cluster object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

**Parameters**

**Name**

**Description**

`request`

`[UpdateClusterRequest](/java/docs/reference/google-cloud-redis-cluster/0.8.0/com.google.cloud.redis.cluster.v1.UpdateClusterRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
