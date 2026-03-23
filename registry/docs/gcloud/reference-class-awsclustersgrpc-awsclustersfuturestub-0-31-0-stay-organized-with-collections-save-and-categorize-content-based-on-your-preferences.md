-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class AwsClustersGrpc.AwsClustersFutureStub (0.31.0) Stay organized with collections Save and categorize content based on your preferences.

0.86.0 (latest) 0.84.0 0.82.0 0.81.0 0.80.0 0.79.0 0.77.0 0.75.0 0.74.0 0.73.0 0.72.0 0.71.0 0.69.0 0.67.0 0.66.0 0.63.0 0.62.0 0.61.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.6 0.1.0

```
public static final class AwsClustersGrpc.AwsClustersFutureStub extends AbstractFutureStub<AwsClustersGrpc.AwsClustersFutureStub>
```

A stub to allow clients to do ListenableFuture-style rpc calls to service AwsClusters.

The AwsClusters API provides a single centrally managed service to create and manage Anthos clusters that run on AWS infrastructure.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractFutureStub \> AwsClustersGrpc.AwsClustersFutureStub

## Inherited Members

io.grpc.stub.AbstractFutureStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel)

io.grpc.stub.AbstractFutureStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions)

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
protected AwsClustersGrpc.AwsClustersFutureStub build(Channel channel, CallOptions callOptions)
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

`[AwsClustersGrpc.AwsClustersFutureStub](/java/docs/reference/google-cloud-gke-multi-cloud/0.31.0/com.google.cloud.gkemulticloud.v1.AwsClustersGrpc.AwsClustersFutureStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createAwsCluster(CreateAwsClusterRequest request)

```
public ListenableFuture<Operation> createAwsCluster(CreateAwsClusterRequest request)
```

Creates a new AwsCluster resource on a given Google Cloud Platform project and region. If successful, the response contains a newly created Operation resource that can be described to track the status of the operation.

**Parameter**

**Name**

**Description**

`request`

`[CreateAwsClusterRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.31.0/com.google.cloud.gkemulticloud.v1.CreateAwsClusterRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createAwsNodePool(CreateAwsNodePoolRequest request)

```
public ListenableFuture<Operation> createAwsNodePool(CreateAwsNodePoolRequest request)
```

Creates a new AwsNodePool, attached to a given AwsCluster. If successful, the response contains a newly created Operation resource that can be described to track the status of the operation.

**Parameter**

**Name**

**Description**

`request`

`[CreateAwsNodePoolRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.31.0/com.google.cloud.gkemulticloud.v1.CreateAwsNodePoolRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteAwsCluster(DeleteAwsClusterRequest request)

```
public ListenableFuture<Operation> deleteAwsCluster(DeleteAwsClusterRequest request)
```

Deletes a specific AwsCluster resource. Fails if the cluster has one or more associated AwsNodePool resources. If successful, the response contains a newly created Operation resource that can be described to track the status of the operation.

**Parameter**

**Name**

**Description**

`request`

`[DeleteAwsClusterRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.31.0/com.google.cloud.gkemulticloud.v1.DeleteAwsClusterRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteAwsNodePool(DeleteAwsNodePoolRequest request)

```
public ListenableFuture<Operation> deleteAwsNodePool(DeleteAwsNodePoolRequest request)
```

Deletes a specific AwsNodePool resource. If successful, the response contains a newly created Operation resource that can be described to track the status of the operation.

**Parameter**

**Name**

**Description**

`request`

`[DeleteAwsNodePoolRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.31.0/com.google.cloud.gkemulticloud.v1.DeleteAwsNodePoolRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### generateAwsAccessToken(GenerateAwsAccessTokenRequest request)

```
public ListenableFuture<GenerateAwsAccessTokenResponse> generateAwsAccessToken(GenerateAwsAccessTokenRequest request)
```

Generates a short-lived access token to authenticate to a given AwsCluster resource.

**Parameter**

**Name**

**Description**

`request`

`[GenerateAwsAccessTokenRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.31.0/com.google.cloud.gkemulticloud.v1.GenerateAwsAccessTokenRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[GenerateAwsAccessTokenResponse](/java/docs/reference/google-cloud-gke-multi-cloud/0.31.0/com.google.cloud.gkemulticloud.v1.GenerateAwsAccessTokenResponse)>`

### getAwsCluster(GetAwsClusterRequest request)

```
public ListenableFuture<AwsCluster> getAwsCluster(GetAwsClusterRequest request)
```

Describes a specific AwsCluster resource.

**Parameter**

**Name**

**Description**

`request`

`[GetAwsClusterRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.31.0/com.google.cloud.gkemulticloud.v1.GetAwsClusterRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[AwsCluster](/java/docs/reference/google-cloud-gke-multi-cloud/0.31.0/com.google.cloud.gkemulticloud.v1.AwsCluster)>`

### getAwsNodePool(GetAwsNodePoolRequest request)

```
public ListenableFuture<AwsNodePool> getAwsNodePool(GetAwsNodePoolRequest request)
```

Describes a specific AwsNodePool resource.

**Parameter**

**Name**

**Description**

`request`

`[GetAwsNodePoolRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.31.0/com.google.cloud.gkemulticloud.v1.GetAwsNodePoolRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[AwsNodePool](/java/docs/reference/google-cloud-gke-multi-cloud/0.31.0/com.google.cloud.gkemulticloud.v1.AwsNodePool)>`

### getAwsServerConfig(GetAwsServerConfigRequest request)

```
public ListenableFuture<AwsServerConfig> getAwsServerConfig(GetAwsServerConfigRequest request)
```

Returns information, such as supported AWS regions and Kubernetes versions, on a given Google Cloud location.

**Parameter**

**Name**

**Description**

`request`

`[GetAwsServerConfigRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.31.0/com.google.cloud.gkemulticloud.v1.GetAwsServerConfigRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[AwsServerConfig](/java/docs/reference/google-cloud-gke-multi-cloud/0.31.0/com.google.cloud.gkemulticloud.v1.AwsServerConfig)>`

### listAwsClusters(ListAwsClustersRequest request)

```
public ListenableFuture<ListAwsClustersResponse> listAwsClusters(ListAwsClustersRequest request)
```

Lists all AwsCluster resources on a given Google Cloud project and region.

**Parameter**

**Name**

**Description**

`request`

`[ListAwsClustersRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.31.0/com.google.cloud.gkemulticloud.v1.ListAwsClustersRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListAwsClustersResponse](/java/docs/reference/google-cloud-gke-multi-cloud/0.31.0/com.google.cloud.gkemulticloud.v1.ListAwsClustersResponse)>`

### listAwsNodePools(ListAwsNodePoolsRequest request)

```
public ListenableFuture<ListAwsNodePoolsResponse> listAwsNodePools(ListAwsNodePoolsRequest request)
```

Lists all AwsNodePool resources on a given AwsCluster.

**Parameter**

**Name**

**Description**

`request`

`[ListAwsNodePoolsRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.31.0/com.google.cloud.gkemulticloud.v1.ListAwsNodePoolsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListAwsNodePoolsResponse](/java/docs/reference/google-cloud-gke-multi-cloud/0.31.0/com.google.cloud.gkemulticloud.v1.ListAwsNodePoolsResponse)>`

### updateAwsCluster(UpdateAwsClusterRequest request)

```
public ListenableFuture<Operation> updateAwsCluster(UpdateAwsClusterRequest request)
```

Updates an AwsCluster.

**Parameter**

**Name**

**Description**

`request`

`[UpdateAwsClusterRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.31.0/com.google.cloud.gkemulticloud.v1.UpdateAwsClusterRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateAwsNodePool(UpdateAwsNodePoolRequest request)

```
public ListenableFuture<Operation> updateAwsNodePool(UpdateAwsNodePoolRequest request)
```

Updates an AwsNodePool.

**Parameter**

**Name**

**Description**

`request`

`[UpdateAwsNodePoolRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.31.0/com.google.cloud.gkemulticloud.v1.UpdateAwsNodePoolRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
