-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class HttpJsonKeyTrackingServiceStub (0.3.0) Stay organized with collections Save and categorize content based on your preferences.

0.76.0 (latest) 0.74.0 0.72.0 0.71.0 0.70.0 0.69.0 0.67.0 0.65.0 0.64.0 0.63.0 0.62.0 0.61.0 0.59.0 0.57.0 0.56.0 0.53.0 0.52.0 0.51.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public class HttpJsonKeyTrackingServiceStub extends KeyTrackingServiceStub
```

REST stub implementation for the KeyTrackingService service API.

This class is for advanced usage and reflects the underlying API directly.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [KeyTrackingServiceStub](/java/docs/reference/google-cloud-kmsinventory/0.3.0/com.google.cloud.kms.inventory.v1.stub.KeyTrackingServiceStub) \> HttpJsonKeyTrackingServiceStub

## Inherited Members

[KeyTrackingServiceStub.close()](/java/docs/reference/google-cloud-kmsinventory/0.3.0/com.google.cloud.kms.inventory.v1.stub.KeyTrackingServiceStub#com_google_cloud_kms_inventory_v1_stub_KeyTrackingServiceStub_close__)

[KeyTrackingServiceStub.getProtectedResourcesSummaryCallable()](/java/docs/reference/google-cloud-kmsinventory/0.3.0/com.google.cloud.kms.inventory.v1.stub.KeyTrackingServiceStub#com_google_cloud_kms_inventory_v1_stub_KeyTrackingServiceStub_getProtectedResourcesSummaryCallable__)

[KeyTrackingServiceStub.searchProtectedResourcesCallable()](/java/docs/reference/google-cloud-kmsinventory/0.3.0/com.google.cloud.kms.inventory.v1.stub.KeyTrackingServiceStub#com_google_cloud_kms_inventory_v1_stub_KeyTrackingServiceStub_searchProtectedResourcesCallable__)

[KeyTrackingServiceStub.searchProtectedResourcesPagedCallable()](/java/docs/reference/google-cloud-kmsinventory/0.3.0/com.google.cloud.kms.inventory.v1.stub.KeyTrackingServiceStub#com_google_cloud_kms_inventory_v1_stub_KeyTrackingServiceStub_searchProtectedResourcesPagedCallable__)

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

## Static Methods

### create(ClientContext clientContext)

```
public static final HttpJsonKeyTrackingServiceStub create(ClientContext clientContext)
```

**Parameter**

**Name**

**Description**

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

`[HttpJsonKeyTrackingServiceStub](/java/docs/reference/google-cloud-kmsinventory/0.3.0/com.google.cloud.kms.inventory.v1.stub.HttpJsonKeyTrackingServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)

```
public static final HttpJsonKeyTrackingServiceStub create(ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)
```

**Parameters**

**Name**

**Description**

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

`callableFactory`

`[HttpJsonStubCallableFactory](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.HttpJsonStubCallableFactory.html)`  

**Returns**

**Type**

**Description**

`[HttpJsonKeyTrackingServiceStub](/java/docs/reference/google-cloud-kmsinventory/0.3.0/com.google.cloud.kms.inventory.v1.stub.HttpJsonKeyTrackingServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(KeyTrackingServiceStubSettings settings)

```
public static final HttpJsonKeyTrackingServiceStub create(KeyTrackingServiceStubSettings settings)
```

**Parameter**

**Name**

**Description**

`settings`

`[KeyTrackingServiceStubSettings](/java/docs/reference/google-cloud-kmsinventory/0.3.0/com.google.cloud.kms.inventory.v1.stub.KeyTrackingServiceStubSettings)`  

**Returns**

**Type**

**Description**

`[HttpJsonKeyTrackingServiceStub](/java/docs/reference/google-cloud-kmsinventory/0.3.0/com.google.cloud.kms.inventory.v1.stub.HttpJsonKeyTrackingServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### getMethodDescriptors()

```
public static List<ApiMethodDescriptor> getMethodDescriptors()
```

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ApiMethodDescriptor](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.ApiMethodDescriptor.html)>`

## Constructors

### HttpJsonKeyTrackingServiceStub(KeyTrackingServiceStubSettings settings, ClientContext clientContext)

```
protected HttpJsonKeyTrackingServiceStub(KeyTrackingServiceStubSettings settings, ClientContext clientContext)
```

Constructs an instance of HttpJsonKeyTrackingServiceStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[KeyTrackingServiceStubSettings](/java/docs/reference/google-cloud-kmsinventory/0.3.0/com.google.cloud.kms.inventory.v1.stub.KeyTrackingServiceStubSettings)`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

### HttpJsonKeyTrackingServiceStub(KeyTrackingServiceStubSettings settings, ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)

```
protected HttpJsonKeyTrackingServiceStub(KeyTrackingServiceStubSettings settings, ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)
```

Constructs an instance of HttpJsonKeyTrackingServiceStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[KeyTrackingServiceStubSettings](/java/docs/reference/google-cloud-kmsinventory/0.3.0/com.google.cloud.kms.inventory.v1.stub.KeyTrackingServiceStubSettings)`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

`callableFactory`

`[HttpJsonStubCallableFactory](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.HttpJsonStubCallableFactory.html)`  

## Methods

### awaitTermination(long duration, TimeUnit unit)

```
public boolean awaitTermination(long duration, TimeUnit unit)
```

**Parameters**

**Name**

**Description**

`duration`

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`unit`

`[TimeUnit](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/TimeUnit.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

**Exceptions**

**Type**

**Description**

`[InterruptedException](https://docs.oracle.com/javase/8/docs/api/java/lang/InterruptedException.html)`

### close()

```
public final void close()
```

**Overrides**

[KeyTrackingServiceStub.close()](/java/docs/reference/google-cloud-kmsinventory/0.3.0/com.google.cloud.kms.inventory.v1.stub.KeyTrackingServiceStub#com_google_cloud_kms_inventory_v1_stub_KeyTrackingServiceStub_close__)

### getProtectedResourcesSummaryCallable()

```
public UnaryCallable<GetProtectedResourcesSummaryRequest,ProtectedResourcesSummary> getProtectedResourcesSummaryCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetProtectedResourcesSummaryRequest](/java/docs/reference/google-cloud-kmsinventory/0.3.0/com.google.cloud.kms.inventory.v1.GetProtectedResourcesSummaryRequest),[ProtectedResourcesSummary](/java/docs/reference/google-cloud-kmsinventory/0.3.0/com.google.cloud.kms.inventory.v1.ProtectedResourcesSummary)>`

**Overrides**

[KeyTrackingServiceStub.getProtectedResourcesSummaryCallable()](/java/docs/reference/google-cloud-kmsinventory/0.3.0/com.google.cloud.kms.inventory.v1.stub.KeyTrackingServiceStub#com_google_cloud_kms_inventory_v1_stub_KeyTrackingServiceStub_getProtectedResourcesSummaryCallable__)

### isShutdown()

```
public boolean isShutdown()
```

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### isTerminated()

```
public boolean isTerminated()
```

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### searchProtectedResourcesCallable()

```
public UnaryCallable<SearchProtectedResourcesRequest,SearchProtectedResourcesResponse> searchProtectedResourcesCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[SearchProtectedResourcesRequest](/java/docs/reference/google-cloud-kmsinventory/0.3.0/com.google.cloud.kms.inventory.v1.SearchProtectedResourcesRequest),[SearchProtectedResourcesResponse](/java/docs/reference/google-cloud-kmsinventory/0.3.0/com.google.cloud.kms.inventory.v1.SearchProtectedResourcesResponse)>`

**Overrides**

[KeyTrackingServiceStub.searchProtectedResourcesCallable()](/java/docs/reference/google-cloud-kmsinventory/0.3.0/com.google.cloud.kms.inventory.v1.stub.KeyTrackingServiceStub#com_google_cloud_kms_inventory_v1_stub_KeyTrackingServiceStub_searchProtectedResourcesCallable__)

### searchProtectedResourcesPagedCallable()

```
public UnaryCallable<SearchProtectedResourcesRequest,KeyTrackingServiceClient.SearchProtectedResourcesPagedResponse> searchProtectedResourcesPagedCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[SearchProtectedResourcesRequest](/java/docs/reference/google-cloud-kmsinventory/0.3.0/com.google.cloud.kms.inventory.v1.SearchProtectedResourcesRequest),[SearchProtectedResourcesPagedResponse](/java/docs/reference/google-cloud-kmsinventory/0.3.0/com.google.cloud.kms.inventory.v1.KeyTrackingServiceClient.SearchProtectedResourcesPagedResponse)>`

**Overrides**

[KeyTrackingServiceStub.searchProtectedResourcesPagedCallable()](/java/docs/reference/google-cloud-kmsinventory/0.3.0/com.google.cloud.kms.inventory.v1.stub.KeyTrackingServiceStub#com_google_cloud_kms_inventory_v1_stub_KeyTrackingServiceStub_searchProtectedResourcesPagedCallable__)

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
