-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class HttpJsonInterconnectLocationsStub (1.97.0) Stay organized with collections Save and categorize content based on your preferences.

1.97.0 (latest) 1.95.0 1.93.0 1.92.0 1.91.0 1.90.0 1.88.0 1.86.0 1.85.0 1.84.0 1.83.0 1.82.0 1.80.0 1.78.0 1.77.0 1.74.0 1.73.0 1.72.0 1.70.0 1.69.0 1.68.0 1.67.0 1.66.0 1.65.0 1.64.0 1.63.0 1.62.0 1.61.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.1 1.11.0 1.9.1 1.8.1 1.7.2 1.6.0-beta

```
public class HttpJsonInterconnectLocationsStub extends InterconnectLocationsStub
```

REST stub implementation for the InterconnectLocations service API.

This class is for advanced usage and reflects the underlying API directly.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [InterconnectLocationsStub](/java/docs/reference/google-cloud-compute/latest/com.google.cloud.compute.v1.stub.InterconnectLocationsStub) \> HttpJsonInterconnectLocationsStub

## Inherited Members

[InterconnectLocationsStub.close()](/java/docs/reference/google-cloud-compute/latest/com.google.cloud.compute.v1.stub.InterconnectLocationsStub#com_google_cloud_compute_v1_stub_InterconnectLocationsStub_close__)

[InterconnectLocationsStub.getCallable()](/java/docs/reference/google-cloud-compute/latest/com.google.cloud.compute.v1.stub.InterconnectLocationsStub#com_google_cloud_compute_v1_stub_InterconnectLocationsStub_getCallable__)

[InterconnectLocationsStub.listCallable()](/java/docs/reference/google-cloud-compute/latest/com.google.cloud.compute.v1.stub.InterconnectLocationsStub#com_google_cloud_compute_v1_stub_InterconnectLocationsStub_listCallable__)

[InterconnectLocationsStub.listPagedCallable()](/java/docs/reference/google-cloud-compute/latest/com.google.cloud.compute.v1.stub.InterconnectLocationsStub#com_google_cloud_compute_v1_stub_InterconnectLocationsStub_listPagedCallable__)

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
public static final HttpJsonInterconnectLocationsStub create(ClientContext clientContext)
```

**Parameter**

**Name**

**Description**

`clientContext`

`[ClientContext](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

`[HttpJsonInterconnectLocationsStub](/java/docs/reference/google-cloud-compute/latest/com.google.cloud.compute.v1.stub.HttpJsonInterconnectLocationsStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)

```
public static final HttpJsonInterconnectLocationsStub create(ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)
```

**Parameters**

**Name**

**Description**

`clientContext`

`[ClientContext](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

`callableFactory`

`[HttpJsonStubCallableFactory](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.HttpJsonStubCallableFactory.html)`  

**Returns**

**Type**

**Description**

`[HttpJsonInterconnectLocationsStub](/java/docs/reference/google-cloud-compute/latest/com.google.cloud.compute.v1.stub.HttpJsonInterconnectLocationsStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(InterconnectLocationsStubSettings settings)

```
public static final HttpJsonInterconnectLocationsStub create(InterconnectLocationsStubSettings settings)
```

**Parameter**

**Name**

**Description**

`settings`

`[InterconnectLocationsStubSettings](/java/docs/reference/google-cloud-compute/latest/com.google.cloud.compute.v1.stub.InterconnectLocationsStubSettings)`  

**Returns**

**Type**

**Description**

`[HttpJsonInterconnectLocationsStub](/java/docs/reference/google-cloud-compute/latest/com.google.cloud.compute.v1.stub.HttpJsonInterconnectLocationsStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### getMethodDescriptors()

```
public static List<ApiMethodDescriptor> getMethodDescriptors()
```

**Internal Only**: This feature is not stable for application use.

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ApiMethodDescriptor](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.ApiMethodDescriptor.html)>`

## Constructors

### HttpJsonInterconnectLocationsStub(InterconnectLocationsStubSettings settings, ClientContext clientContext)

```
protected HttpJsonInterconnectLocationsStub(InterconnectLocationsStubSettings settings, ClientContext clientContext)
```

Constructs an instance of HttpJsonInterconnectLocationsStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[InterconnectLocationsStubSettings](/java/docs/reference/google-cloud-compute/latest/com.google.cloud.compute.v1.stub.InterconnectLocationsStubSettings)`  

`clientContext`

`[ClientContext](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

### HttpJsonInterconnectLocationsStub(InterconnectLocationsStubSettings settings, ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)

```
protected HttpJsonInterconnectLocationsStub(InterconnectLocationsStubSettings settings, ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)
```

Constructs an instance of HttpJsonInterconnectLocationsStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[InterconnectLocationsStubSettings](/java/docs/reference/google-cloud-compute/latest/com.google.cloud.compute.v1.stub.InterconnectLocationsStubSettings)`  

`clientContext`

`[ClientContext](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

`callableFactory`

`[HttpJsonStubCallableFactory](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.HttpJsonStubCallableFactory.html)`  

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

[InterconnectLocationsStub.close()](/java/docs/reference/google-cloud-compute/latest/com.google.cloud.compute.v1.stub.InterconnectLocationsStub#com_google_cloud_compute_v1_stub_InterconnectLocationsStub_close__)

### getCallable()

```
public UnaryCallable<GetInterconnectLocationRequest,InterconnectLocation> getCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetInterconnectLocationRequest](/java/docs/reference/google-cloud-compute/latest/com.google.cloud.compute.v1.GetInterconnectLocationRequest),[InterconnectLocation](/java/docs/reference/google-cloud-compute/latest/com.google.cloud.compute.v1.InterconnectLocation)>`

**Overrides**

[InterconnectLocationsStub.getCallable()](/java/docs/reference/google-cloud-compute/latest/com.google.cloud.compute.v1.stub.InterconnectLocationsStub#com_google_cloud_compute_v1_stub_InterconnectLocationsStub_getCallable__)

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

### listCallable()

```
public UnaryCallable<ListInterconnectLocationsRequest,InterconnectLocationList> listCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListInterconnectLocationsRequest](/java/docs/reference/google-cloud-compute/latest/com.google.cloud.compute.v1.ListInterconnectLocationsRequest),[InterconnectLocationList](/java/docs/reference/google-cloud-compute/latest/com.google.cloud.compute.v1.InterconnectLocationList)>`

**Overrides**

[InterconnectLocationsStub.listCallable()](/java/docs/reference/google-cloud-compute/latest/com.google.cloud.compute.v1.stub.InterconnectLocationsStub#com_google_cloud_compute_v1_stub_InterconnectLocationsStub_listCallable__)

### listPagedCallable()

```
public UnaryCallable<ListInterconnectLocationsRequest,InterconnectLocationsClient.ListPagedResponse> listPagedCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListInterconnectLocationsRequest](/java/docs/reference/google-cloud-compute/latest/com.google.cloud.compute.v1.ListInterconnectLocationsRequest),[ListPagedResponse](/java/docs/reference/google-cloud-compute/latest/com.google.cloud.compute.v1.InterconnectLocationsClient.ListPagedResponse)>`

**Overrides**

[InterconnectLocationsStub.listPagedCallable()](/java/docs/reference/google-cloud-compute/latest/com.google.cloud.compute.v1.stub.InterconnectLocationsStub#com_google_cloud_compute_v1_stub_InterconnectLocationsStub_listPagedCallable__)

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
