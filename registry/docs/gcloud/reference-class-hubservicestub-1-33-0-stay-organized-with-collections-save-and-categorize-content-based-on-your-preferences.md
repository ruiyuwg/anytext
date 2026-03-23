-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class HubServiceStub (1.33.0) Stay organized with collections Save and categorize content based on your preferences.

1.86.0 (latest) 1.84.0 1.82.0 1.81.0 1.79.0 1.77.0 1.75.0 1.74.0 1.73.0 1.72.0 1.71.0 1.69.0 1.67.0 1.66.0 1.63.0 1.62.0 1.61.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.9 1.1.1 1.0.0 0.5.0

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

```
public abstract class HubServiceStub implements BackgroundResource
```

Base stub class for the HubService service API.

This class is for advanced usage and reflects the underlying API directly.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> HubServiceStub

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

### HubServiceStub()

```
public HubServiceStub()
```

## Methods

### close()

```
public abstract void close()
```

### createHubCallable()

```
public UnaryCallable<CreateHubRequest,Operation> createHubCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateHubRequest](/java/docs/reference/google-cloud-networkconnectivity/1.33.0/com.google.cloud.networkconnectivity.v1alpha1.CreateHubRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createHubOperationCallable()

```
public OperationCallable<CreateHubRequest,Hub,OperationMetadata> createHubOperationCallable()
```

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[CreateHubRequest](/java/docs/reference/google-cloud-networkconnectivity/1.33.0/com.google.cloud.networkconnectivity.v1alpha1.CreateHubRequest),[Hub](/java/docs/reference/google-cloud-networkconnectivity/1.33.0/com.google.cloud.networkconnectivity.v1alpha1.Hub),[OperationMetadata](/java/docs/reference/google-cloud-networkconnectivity/1.33.0/com.google.cloud.networkconnectivity.v1alpha1.OperationMetadata)>`

### createSpokeCallable()

```
public UnaryCallable<CreateSpokeRequest,Operation> createSpokeCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateSpokeRequest](/java/docs/reference/google-cloud-networkconnectivity/1.33.0/com.google.cloud.networkconnectivity.v1alpha1.CreateSpokeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createSpokeOperationCallable()

```
public OperationCallable<CreateSpokeRequest,Spoke,OperationMetadata> createSpokeOperationCallable()
```

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[CreateSpokeRequest](/java/docs/reference/google-cloud-networkconnectivity/1.33.0/com.google.cloud.networkconnectivity.v1alpha1.CreateSpokeRequest),[Spoke](/java/docs/reference/google-cloud-networkconnectivity/1.33.0/com.google.cloud.networkconnectivity.v1alpha1.Spoke),[OperationMetadata](/java/docs/reference/google-cloud-networkconnectivity/1.33.0/com.google.cloud.networkconnectivity.v1alpha1.OperationMetadata)>`

### deleteHubCallable()

```
public UnaryCallable<DeleteHubRequest,Operation> deleteHubCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteHubRequest](/java/docs/reference/google-cloud-networkconnectivity/1.33.0/com.google.cloud.networkconnectivity.v1alpha1.DeleteHubRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteHubOperationCallable()

```
public OperationCallable<DeleteHubRequest,Empty,OperationMetadata> deleteHubOperationCallable()
```

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[DeleteHubRequest](/java/docs/reference/google-cloud-networkconnectivity/1.33.0/com.google.cloud.networkconnectivity.v1alpha1.DeleteHubRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-networkconnectivity/1.33.0/com.google.cloud.networkconnectivity.v1alpha1.OperationMetadata)>`

### deleteSpokeCallable()

```
public UnaryCallable<DeleteSpokeRequest,Operation> deleteSpokeCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteSpokeRequest](/java/docs/reference/google-cloud-networkconnectivity/1.33.0/com.google.cloud.networkconnectivity.v1alpha1.DeleteSpokeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteSpokeOperationCallable()

```
public OperationCallable<DeleteSpokeRequest,Empty,OperationMetadata> deleteSpokeOperationCallable()
```

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[DeleteSpokeRequest](/java/docs/reference/google-cloud-networkconnectivity/1.33.0/com.google.cloud.networkconnectivity.v1alpha1.DeleteSpokeRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-networkconnectivity/1.33.0/com.google.cloud.networkconnectivity.v1alpha1.OperationMetadata)>`

### getHubCallable()

```
public UnaryCallable<GetHubRequest,Hub> getHubCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetHubRequest](/java/docs/reference/google-cloud-networkconnectivity/1.33.0/com.google.cloud.networkconnectivity.v1alpha1.GetHubRequest),[Hub](/java/docs/reference/google-cloud-networkconnectivity/1.33.0/com.google.cloud.networkconnectivity.v1alpha1.Hub)>`

### getOperationsStub()

```
public OperationsStub getOperationsStub()
```

**Returns**

**Type**

**Description**

`[OperationsStub](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.stub.OperationsStub.html)`

### getSpokeCallable()

```
public UnaryCallable<GetSpokeRequest,Spoke> getSpokeCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetSpokeRequest](/java/docs/reference/google-cloud-networkconnectivity/1.33.0/com.google.cloud.networkconnectivity.v1alpha1.GetSpokeRequest),[Spoke](/java/docs/reference/google-cloud-networkconnectivity/1.33.0/com.google.cloud.networkconnectivity.v1alpha1.Spoke)>`

### listHubsCallable()

```
public UnaryCallable<ListHubsRequest,ListHubsResponse> listHubsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListHubsRequest](/java/docs/reference/google-cloud-networkconnectivity/1.33.0/com.google.cloud.networkconnectivity.v1alpha1.ListHubsRequest),[ListHubsResponse](/java/docs/reference/google-cloud-networkconnectivity/1.33.0/com.google.cloud.networkconnectivity.v1alpha1.ListHubsResponse)>`

### listHubsPagedCallable()

```
public UnaryCallable<ListHubsRequest,HubServiceClient.ListHubsPagedResponse> listHubsPagedCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListHubsRequest](/java/docs/reference/google-cloud-networkconnectivity/1.33.0/com.google.cloud.networkconnectivity.v1alpha1.ListHubsRequest),[ListHubsPagedResponse](/java/docs/reference/google-cloud-networkconnectivity/1.33.0/com.google.cloud.networkconnectivity.v1alpha1.HubServiceClient.ListHubsPagedResponse)>`

### listSpokesCallable()

```
public UnaryCallable<ListSpokesRequest,ListSpokesResponse> listSpokesCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListSpokesRequest](/java/docs/reference/google-cloud-networkconnectivity/1.33.0/com.google.cloud.networkconnectivity.v1alpha1.ListSpokesRequest),[ListSpokesResponse](/java/docs/reference/google-cloud-networkconnectivity/1.33.0/com.google.cloud.networkconnectivity.v1alpha1.ListSpokesResponse)>`

### listSpokesPagedCallable()

```
public UnaryCallable<ListSpokesRequest,HubServiceClient.ListSpokesPagedResponse> listSpokesPagedCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListSpokesRequest](/java/docs/reference/google-cloud-networkconnectivity/1.33.0/com.google.cloud.networkconnectivity.v1alpha1.ListSpokesRequest),[ListSpokesPagedResponse](/java/docs/reference/google-cloud-networkconnectivity/1.33.0/com.google.cloud.networkconnectivity.v1alpha1.HubServiceClient.ListSpokesPagedResponse)>`

### updateHubCallable()

```
public UnaryCallable<UpdateHubRequest,Operation> updateHubCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateHubRequest](/java/docs/reference/google-cloud-networkconnectivity/1.33.0/com.google.cloud.networkconnectivity.v1alpha1.UpdateHubRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateHubOperationCallable()

```
public OperationCallable<UpdateHubRequest,Hub,OperationMetadata> updateHubOperationCallable()
```

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[UpdateHubRequest](/java/docs/reference/google-cloud-networkconnectivity/1.33.0/com.google.cloud.networkconnectivity.v1alpha1.UpdateHubRequest),[Hub](/java/docs/reference/google-cloud-networkconnectivity/1.33.0/com.google.cloud.networkconnectivity.v1alpha1.Hub),[OperationMetadata](/java/docs/reference/google-cloud-networkconnectivity/1.33.0/com.google.cloud.networkconnectivity.v1alpha1.OperationMetadata)>`

### updateSpokeCallable()

```
public UnaryCallable<UpdateSpokeRequest,Operation> updateSpokeCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateSpokeRequest](/java/docs/reference/google-cloud-networkconnectivity/1.33.0/com.google.cloud.networkconnectivity.v1alpha1.UpdateSpokeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateSpokeOperationCallable()

```
public OperationCallable<UpdateSpokeRequest,Spoke,OperationMetadata> updateSpokeOperationCallable()
```

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[UpdateSpokeRequest](/java/docs/reference/google-cloud-networkconnectivity/1.33.0/com.google.cloud.networkconnectivity.v1alpha1.UpdateSpokeRequest),[Spoke](/java/docs/reference/google-cloud-networkconnectivity/1.33.0/com.google.cloud.networkconnectivity.v1alpha1.Spoke),[OperationMetadata](/java/docs/reference/google-cloud-networkconnectivity/1.33.0/com.google.cloud.networkconnectivity.v1alpha1.OperationMetadata)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
