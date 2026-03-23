-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class AwsClustersStub (0.53.0) Stay organized with collections Save and categorize content based on your preferences.

0.86.0 (latest) 0.84.0 0.82.0 0.81.0 0.80.0 0.79.0 0.77.0 0.75.0 0.74.0 0.73.0 0.72.0 0.71.0 0.69.0 0.67.0 0.66.0 0.63.0 0.62.0 0.61.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.6 0.1.0

```
public abstract class AwsClustersStub implements BackgroundResource
```

Base stub class for the AwsClusters service API.

This class is for advanced usage and reflects the underlying API directly.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> AwsClustersStub

## Implements

[BackgroundResource](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.core.BackgroundResource.html)

## Inherited Members

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

## Constructors

### AwsClustersStub()

```
public AwsClustersStub()
```

## Methods

### close()

```
public abstract void close()
```

### createAwsClusterCallable()

```
public UnaryCallable<CreateAwsClusterRequest,Operation> createAwsClusterCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateAwsClusterRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.CreateAwsClusterRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createAwsClusterOperationCallable()

```
public OperationCallable<CreateAwsClusterRequest,AwsCluster,OperationMetadata> createAwsClusterOperationCallable()
```

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[CreateAwsClusterRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.CreateAwsClusterRequest),[AwsCluster](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.AwsCluster),[OperationMetadata](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.OperationMetadata)>`

### createAwsNodePoolCallable()

```
public UnaryCallable<CreateAwsNodePoolRequest,Operation> createAwsNodePoolCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateAwsNodePoolRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.CreateAwsNodePoolRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createAwsNodePoolOperationCallable()

```
public OperationCallable<CreateAwsNodePoolRequest,AwsNodePool,OperationMetadata> createAwsNodePoolOperationCallable()
```

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[CreateAwsNodePoolRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.CreateAwsNodePoolRequest),[AwsNodePool](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.AwsNodePool),[OperationMetadata](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.OperationMetadata)>`

### deleteAwsClusterCallable()

```
public UnaryCallable<DeleteAwsClusterRequest,Operation> deleteAwsClusterCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteAwsClusterRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.DeleteAwsClusterRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteAwsClusterOperationCallable()

```
public OperationCallable<DeleteAwsClusterRequest,Empty,OperationMetadata> deleteAwsClusterOperationCallable()
```

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[DeleteAwsClusterRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.DeleteAwsClusterRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.OperationMetadata)>`

### deleteAwsNodePoolCallable()

```
public UnaryCallable<DeleteAwsNodePoolRequest,Operation> deleteAwsNodePoolCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteAwsNodePoolRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.DeleteAwsNodePoolRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteAwsNodePoolOperationCallable()

```
public OperationCallable<DeleteAwsNodePoolRequest,Empty,OperationMetadata> deleteAwsNodePoolOperationCallable()
```

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[DeleteAwsNodePoolRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.DeleteAwsNodePoolRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.OperationMetadata)>`

### generateAwsAccessTokenCallable()

```
public UnaryCallable<GenerateAwsAccessTokenRequest,GenerateAwsAccessTokenResponse> generateAwsAccessTokenCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GenerateAwsAccessTokenRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.GenerateAwsAccessTokenRequest),[GenerateAwsAccessTokenResponse](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.GenerateAwsAccessTokenResponse)>`

### generateAwsClusterAgentTokenCallable()

```
public UnaryCallable<GenerateAwsClusterAgentTokenRequest,GenerateAwsClusterAgentTokenResponse> generateAwsClusterAgentTokenCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GenerateAwsClusterAgentTokenRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.GenerateAwsClusterAgentTokenRequest),[GenerateAwsClusterAgentTokenResponse](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.GenerateAwsClusterAgentTokenResponse)>`

### getAwsClusterCallable()

```
public UnaryCallable<GetAwsClusterRequest,AwsCluster> getAwsClusterCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetAwsClusterRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.GetAwsClusterRequest),[AwsCluster](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.AwsCluster)>`

### getAwsJsonWebKeysCallable()

```
public UnaryCallable<GetAwsJsonWebKeysRequest,AwsJsonWebKeys> getAwsJsonWebKeysCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetAwsJsonWebKeysRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.GetAwsJsonWebKeysRequest),[AwsJsonWebKeys](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.AwsJsonWebKeys)>`

### getAwsNodePoolCallable()

```
public UnaryCallable<GetAwsNodePoolRequest,AwsNodePool> getAwsNodePoolCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetAwsNodePoolRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.GetAwsNodePoolRequest),[AwsNodePool](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.AwsNodePool)>`

### getAwsOpenIdConfigCallable()

```
public UnaryCallable<GetAwsOpenIdConfigRequest,AwsOpenIdConfig> getAwsOpenIdConfigCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetAwsOpenIdConfigRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.GetAwsOpenIdConfigRequest),[AwsOpenIdConfig](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.AwsOpenIdConfig)>`

### getAwsServerConfigCallable()

```
public UnaryCallable<GetAwsServerConfigRequest,AwsServerConfig> getAwsServerConfigCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetAwsServerConfigRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.GetAwsServerConfigRequest),[AwsServerConfig](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.AwsServerConfig)>`

### getHttpJsonOperationsStub()

```
public OperationsStub getHttpJsonOperationsStub()
```

**Returns**

**Type**

**Description**

`[OperationsStub](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.longrunning.stub.OperationsStub.html)`

### getOperationsStub()

```
public OperationsStub getOperationsStub()
```

**Returns**

**Type**

**Description**

`[OperationsStub](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.stub.OperationsStub.html)`

### listAwsClustersCallable()

```
public UnaryCallable<ListAwsClustersRequest,ListAwsClustersResponse> listAwsClustersCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListAwsClustersRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.ListAwsClustersRequest),[ListAwsClustersResponse](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.ListAwsClustersResponse)>`

### listAwsClustersPagedCallable()

```
public UnaryCallable<ListAwsClustersRequest,AwsClustersClient.ListAwsClustersPagedResponse> listAwsClustersPagedCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListAwsClustersRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.ListAwsClustersRequest),[ListAwsClustersPagedResponse](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.AwsClustersClient.ListAwsClustersPagedResponse)>`

### listAwsNodePoolsCallable()

```
public UnaryCallable<ListAwsNodePoolsRequest,ListAwsNodePoolsResponse> listAwsNodePoolsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListAwsNodePoolsRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.ListAwsNodePoolsRequest),[ListAwsNodePoolsResponse](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.ListAwsNodePoolsResponse)>`

### listAwsNodePoolsPagedCallable()

```
public UnaryCallable<ListAwsNodePoolsRequest,AwsClustersClient.ListAwsNodePoolsPagedResponse> listAwsNodePoolsPagedCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListAwsNodePoolsRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.ListAwsNodePoolsRequest),[ListAwsNodePoolsPagedResponse](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.AwsClustersClient.ListAwsNodePoolsPagedResponse)>`

### rollbackAwsNodePoolUpdateCallable()

```
public UnaryCallable<RollbackAwsNodePoolUpdateRequest,Operation> rollbackAwsNodePoolUpdateCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[RollbackAwsNodePoolUpdateRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.RollbackAwsNodePoolUpdateRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### rollbackAwsNodePoolUpdateOperationCallable()

```
public OperationCallable<RollbackAwsNodePoolUpdateRequest,AwsNodePool,OperationMetadata> rollbackAwsNodePoolUpdateOperationCallable()
```

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[RollbackAwsNodePoolUpdateRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.RollbackAwsNodePoolUpdateRequest),[AwsNodePool](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.AwsNodePool),[OperationMetadata](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.OperationMetadata)>`

### updateAwsClusterCallable()

```
public UnaryCallable<UpdateAwsClusterRequest,Operation> updateAwsClusterCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateAwsClusterRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.UpdateAwsClusterRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateAwsClusterOperationCallable()

```
public OperationCallable<UpdateAwsClusterRequest,AwsCluster,OperationMetadata> updateAwsClusterOperationCallable()
```

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[UpdateAwsClusterRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.UpdateAwsClusterRequest),[AwsCluster](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.AwsCluster),[OperationMetadata](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.OperationMetadata)>`

### updateAwsNodePoolCallable()

```
public UnaryCallable<UpdateAwsNodePoolRequest,Operation> updateAwsNodePoolCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateAwsNodePoolRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.UpdateAwsNodePoolRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateAwsNodePoolOperationCallable()

```
public OperationCallable<UpdateAwsNodePoolRequest,AwsNodePool,OperationMetadata> updateAwsNodePoolOperationCallable()
```

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[UpdateAwsNodePoolRequest](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.UpdateAwsNodePoolRequest),[AwsNodePool](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.AwsNodePool),[OperationMetadata](/java/docs/reference/google-cloud-gke-multi-cloud/0.53.0/com.google.cloud.gkemulticloud.v1.OperationMetadata)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
