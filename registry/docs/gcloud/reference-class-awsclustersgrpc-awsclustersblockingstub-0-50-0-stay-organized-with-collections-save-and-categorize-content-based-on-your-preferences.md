-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class AwsClustersGrpc.AwsClustersBlockingStub (0.50.0) Stay organized with collections Save and categorize content based on your preferences.

0.86.0 (latest) 0.84.0 0.82.0 0.81.0 0.80.0 0.79.0 0.77.0 0.75.0 0.74.0 0.73.0 0.72.0 0.71.0 0.69.0 0.67.0 0.66.0 0.63.0 0.62.0 0.61.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.6 0.1.0

```
public static final class AwsClustersGrpc.AwsClustersBlockingStub extends AbstractBlockingStub<AwsClustersGrpc.AwsClustersBlockingStub>
```

A stub to allow clients to do synchronous rpc calls to service AwsClusters.

The AwsClusters API provides a single centrally managed service to create and manage Anthos clusters that run on AWS infrastructure.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractBlockingStub \> AwsClustersGrpc.AwsClustersBlockingStub

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
protected AwsClustersGrpc.AwsClustersBlockingStub build(Channel channel, CallOptions callOptions)
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

`[AwsClustersGrpc.AwsClustersBlockingStub](/java/docs/reference/google-cloud-gke-multi-cloud/0.50.0/com.google.cloud.gkemulticloud.v1.AwsClustersGrpc.AwsClustersBlockingStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createAwsCluster(CreateAwsClusterRequest request)

```
public Operation createAwsCluster(CreateAwsClusterRequest request)
```

Creates a new AwsCluster resource on a given Google Cloud Platform project and region. If successful, the response contains a newly created Operation resource that can be described to track the status of the operation.

**Parameter**

**Name**

**Description**

`request`

`[CreateAwsClusterRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.50.0/com.google.cloud.gkemulticloud.v1.CreateAwsClusterRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### createAwsNodePool(CreateAwsNodePoolRequest request)

```
public Operation createAwsNodePool(CreateAwsNodePoolRequest request)
```

Creates a new AwsNodePool, attached to a given AwsCluster. If successful, the response contains a newly created Operation resource that can be described to track the status of the operation.

**Parameter**

**Name**

**Description**

`request`

`[CreateAwsNodePoolRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.50.0/com.google.cloud.gkemulticloud.v1.CreateAwsNodePoolRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### deleteAwsCluster(DeleteAwsClusterRequest request)

```
public Operation deleteAwsCluster(DeleteAwsClusterRequest request)
```

Deletes a specific AwsCluster resource. Fails if the cluster has one or more associated AwsNodePool resources. If successful, the response contains a newly created Operation resource that can be described to track the status of the operation.

**Parameter**

**Name**

**Description**

`request`

`[DeleteAwsClusterRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.50.0/com.google.cloud.gkemulticloud.v1.DeleteAwsClusterRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### deleteAwsNodePool(DeleteAwsNodePoolRequest request)

```
public Operation deleteAwsNodePool(DeleteAwsNodePoolRequest request)
```

Deletes a specific AwsNodePool resource. If successful, the response contains a newly created Operation resource that can be described to track the status of the operation.

**Parameter**

**Name**

**Description**

`request`

`[DeleteAwsNodePoolRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.50.0/com.google.cloud.gkemulticloud.v1.DeleteAwsNodePoolRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### generateAwsAccessToken(GenerateAwsAccessTokenRequest request)

```
public GenerateAwsAccessTokenResponse generateAwsAccessToken(GenerateAwsAccessTokenRequest request)
```

Generates a short-lived access token to authenticate to a given AwsCluster resource.

**Parameter**

**Name**

**Description**

`request`

`[GenerateAwsAccessTokenRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.50.0/com.google.cloud.gkemulticloud.v1.GenerateAwsAccessTokenRequest)`  

**Returns**

**Type**

**Description**

`[GenerateAwsAccessTokenResponse](/java/docs/reference/google-cloud-gke-multi-cloud/0.50.0/com.google.cloud.gkemulticloud.v1.GenerateAwsAccessTokenResponse)`

### generateAwsClusterAgentToken(GenerateAwsClusterAgentTokenRequest request)

```
public GenerateAwsClusterAgentTokenResponse generateAwsClusterAgentToken(GenerateAwsClusterAgentTokenRequest request)
```

Generates an access token for a cluster agent.

**Parameter**

**Name**

**Description**

`request`

`[GenerateAwsClusterAgentTokenRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.50.0/com.google.cloud.gkemulticloud.v1.GenerateAwsClusterAgentTokenRequest)`  

**Returns**

**Type**

**Description**

`[GenerateAwsClusterAgentTokenResponse](/java/docs/reference/google-cloud-gke-multi-cloud/0.50.0/com.google.cloud.gkemulticloud.v1.GenerateAwsClusterAgentTokenResponse)`

### getAwsCluster(GetAwsClusterRequest request)

```
public AwsCluster getAwsCluster(GetAwsClusterRequest request)
```

Describes a specific AwsCluster resource.

**Parameter**

**Name**

**Description**

`request`

`[GetAwsClusterRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.50.0/com.google.cloud.gkemulticloud.v1.GetAwsClusterRequest)`  

**Returns**

**Type**

**Description**

`[AwsCluster](/java/docs/reference/google-cloud-gke-multi-cloud/0.50.0/com.google.cloud.gkemulticloud.v1.AwsCluster)`

### getAwsJsonWebKeys(GetAwsJsonWebKeysRequest request)

```
public AwsJsonWebKeys getAwsJsonWebKeys(GetAwsJsonWebKeysRequest request)
```

Gets the public component of the cluster signing keys in JSON Web Key format.

**Parameter**

**Name**

**Description**

`request`

`[GetAwsJsonWebKeysRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.50.0/com.google.cloud.gkemulticloud.v1.GetAwsJsonWebKeysRequest)`  

**Returns**

**Type**

**Description**

`[AwsJsonWebKeys](/java/docs/reference/google-cloud-gke-multi-cloud/0.50.0/com.google.cloud.gkemulticloud.v1.AwsJsonWebKeys)`

### getAwsNodePool(GetAwsNodePoolRequest request)

```
public AwsNodePool getAwsNodePool(GetAwsNodePoolRequest request)
```

Describes a specific AwsNodePool resource.

**Parameter**

**Name**

**Description**

`request`

`[GetAwsNodePoolRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.50.0/com.google.cloud.gkemulticloud.v1.GetAwsNodePoolRequest)`  

**Returns**

**Type**

**Description**

`[AwsNodePool](/java/docs/reference/google-cloud-gke-multi-cloud/0.50.0/com.google.cloud.gkemulticloud.v1.AwsNodePool)`

### getAwsOpenIdConfig(GetAwsOpenIdConfigRequest request)

```
public AwsOpenIdConfig getAwsOpenIdConfig(GetAwsOpenIdConfigRequest request)
```

Gets the OIDC discovery document for the cluster. See the [OpenID Connect Discovery 1.0 specification](https://openid.net/specs/openid-connect-discovery-1_0.html) for details.

**Parameter**

**Name**

**Description**

`request`

`[GetAwsOpenIdConfigRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.50.0/com.google.cloud.gkemulticloud.v1.GetAwsOpenIdConfigRequest)`  

**Returns**

**Type**

**Description**

`[AwsOpenIdConfig](/java/docs/reference/google-cloud-gke-multi-cloud/0.50.0/com.google.cloud.gkemulticloud.v1.AwsOpenIdConfig)`

### getAwsServerConfig(GetAwsServerConfigRequest request)

```
public AwsServerConfig getAwsServerConfig(GetAwsServerConfigRequest request)
```

Returns information, such as supported AWS regions and Kubernetes versions, on a given Google Cloud location.

**Parameter**

**Name**

**Description**

`request`

`[GetAwsServerConfigRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.50.0/com.google.cloud.gkemulticloud.v1.GetAwsServerConfigRequest)`  

**Returns**

**Type**

**Description**

`[AwsServerConfig](/java/docs/reference/google-cloud-gke-multi-cloud/0.50.0/com.google.cloud.gkemulticloud.v1.AwsServerConfig)`

### listAwsClusters(ListAwsClustersRequest request)

```
public ListAwsClustersResponse listAwsClusters(ListAwsClustersRequest request)
```

Lists all AwsCluster resources on a given Google Cloud project and region.

**Parameter**

**Name**

**Description**

`request`

`[ListAwsClustersRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.50.0/com.google.cloud.gkemulticloud.v1.ListAwsClustersRequest)`  

**Returns**

**Type**

**Description**

`[ListAwsClustersResponse](/java/docs/reference/google-cloud-gke-multi-cloud/0.50.0/com.google.cloud.gkemulticloud.v1.ListAwsClustersResponse)`

### listAwsNodePools(ListAwsNodePoolsRequest request)

```
public ListAwsNodePoolsResponse listAwsNodePools(ListAwsNodePoolsRequest request)
```

Lists all AwsNodePool resources on a given AwsCluster.

**Parameter**

**Name**

**Description**

`request`

`[ListAwsNodePoolsRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.50.0/com.google.cloud.gkemulticloud.v1.ListAwsNodePoolsRequest)`  

**Returns**

**Type**

**Description**

`[ListAwsNodePoolsResponse](/java/docs/reference/google-cloud-gke-multi-cloud/0.50.0/com.google.cloud.gkemulticloud.v1.ListAwsNodePoolsResponse)`

### rollbackAwsNodePoolUpdate(RollbackAwsNodePoolUpdateRequest request)

```
public Operation rollbackAwsNodePoolUpdate(RollbackAwsNodePoolUpdateRequest request)
```

Rolls back a previously aborted or failed AwsNodePool update request. Makes no changes if the last update request successfully finished. If an update request is in progress, you cannot rollback the update. You must first cancel or let it finish unsuccessfully before you can rollback.

**Parameter**

**Name**

**Description**

`request`

`[RollbackAwsNodePoolUpdateRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.50.0/com.google.cloud.gkemulticloud.v1.RollbackAwsNodePoolUpdateRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### updateAwsCluster(UpdateAwsClusterRequest request)

```
public Operation updateAwsCluster(UpdateAwsClusterRequest request)
```

Updates an AwsCluster.

**Parameter**

**Name**

**Description**

`request`

`[UpdateAwsClusterRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.50.0/com.google.cloud.gkemulticloud.v1.UpdateAwsClusterRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### updateAwsNodePool(UpdateAwsNodePoolRequest request)

```
public Operation updateAwsNodePool(UpdateAwsNodePoolRequest request)
```

Updates an AwsNodePool.

**Parameter**

**Name**

**Description**

`request`

`[UpdateAwsNodePoolRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.50.0/com.google.cloud.gkemulticloud.v1.UpdateAwsNodePoolRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
