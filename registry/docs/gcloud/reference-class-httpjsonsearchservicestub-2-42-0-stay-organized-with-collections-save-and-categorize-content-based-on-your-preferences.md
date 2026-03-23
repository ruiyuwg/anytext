-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class HttpJsonSearchServiceStub (2.42.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

```
public class HttpJsonSearchServiceStub extends SearchServiceStub
```

REST stub implementation for the SearchService service API.

This class is for advanced usage and reflects the underlying API directly.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [SearchServiceStub](/java/docs/reference/google-cloud-retail/2.42.0/com.google.cloud.retail.v2alpha.stub.SearchServiceStub) \> HttpJsonSearchServiceStub

## Inherited Members

[SearchServiceStub.close()](/java/docs/reference/google-cloud-retail/2.42.0/com.google.cloud.retail.v2alpha.stub.SearchServiceStub#com_google_cloud_retail_v2alpha_stub_SearchServiceStub_close__)

[SearchServiceStub.searchCallable()](/java/docs/reference/google-cloud-retail/2.42.0/com.google.cloud.retail.v2alpha.stub.SearchServiceStub#com_google_cloud_retail_v2alpha_stub_SearchServiceStub_searchCallable__)

[SearchServiceStub.searchPagedCallable()](/java/docs/reference/google-cloud-retail/2.42.0/com.google.cloud.retail.v2alpha.stub.SearchServiceStub#com_google_cloud_retail_v2alpha_stub_SearchServiceStub_searchPagedCallable__)

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
public static final HttpJsonSearchServiceStub create(ClientContext clientContext)
```

**Parameter**

**Name**

**Description**

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

`[HttpJsonSearchServiceStub](/java/docs/reference/google-cloud-retail/2.42.0/com.google.cloud.retail.v2alpha.stub.HttpJsonSearchServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)

```
public static final HttpJsonSearchServiceStub create(ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)
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

`[HttpJsonSearchServiceStub](/java/docs/reference/google-cloud-retail/2.42.0/com.google.cloud.retail.v2alpha.stub.HttpJsonSearchServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(SearchServiceStubSettings settings)

```
public static final HttpJsonSearchServiceStub create(SearchServiceStubSettings settings)
```

**Parameter**

**Name**

**Description**

`settings`

`[SearchServiceStubSettings](/java/docs/reference/google-cloud-retail/2.42.0/com.google.cloud.retail.v2alpha.stub.SearchServiceStubSettings)`  

**Returns**

**Type**

**Description**

`[HttpJsonSearchServiceStub](/java/docs/reference/google-cloud-retail/2.42.0/com.google.cloud.retail.v2alpha.stub.HttpJsonSearchServiceStub)`

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

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ApiMethodDescriptor](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.ApiMethodDescriptor.html)>`

## Constructors

### HttpJsonSearchServiceStub(SearchServiceStubSettings settings, ClientContext clientContext)

```
protected HttpJsonSearchServiceStub(SearchServiceStubSettings settings, ClientContext clientContext)
```

Constructs an instance of HttpJsonSearchServiceStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[SearchServiceStubSettings](/java/docs/reference/google-cloud-retail/2.42.0/com.google.cloud.retail.v2alpha.stub.SearchServiceStubSettings)`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

### HttpJsonSearchServiceStub(SearchServiceStubSettings settings, ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)

```
protected HttpJsonSearchServiceStub(SearchServiceStubSettings settings, ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)
```

Constructs an instance of HttpJsonSearchServiceStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[SearchServiceStubSettings](/java/docs/reference/google-cloud-retail/2.42.0/com.google.cloud.retail.v2alpha.stub.SearchServiceStubSettings)`  

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

[SearchServiceStub.close()](/java/docs/reference/google-cloud-retail/2.42.0/com.google.cloud.retail.v2alpha.stub.SearchServiceStub#com_google_cloud_retail_v2alpha_stub_SearchServiceStub_close__)

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

### searchCallable()

```
public UnaryCallable<SearchRequest,SearchResponse> searchCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[SearchRequest](/java/docs/reference/google-cloud-retail/2.42.0/com.google.cloud.retail.v2alpha.SearchRequest),[SearchResponse](/java/docs/reference/google-cloud-retail/2.42.0/com.google.cloud.retail.v2alpha.SearchResponse)>`

**Overrides**

[SearchServiceStub.searchCallable()](/java/docs/reference/google-cloud-retail/2.42.0/com.google.cloud.retail.v2alpha.stub.SearchServiceStub#com_google_cloud_retail_v2alpha_stub_SearchServiceStub_searchCallable__)

### searchPagedCallable()

```
public UnaryCallable<SearchRequest,SearchServiceClient.SearchPagedResponse> searchPagedCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[SearchRequest](/java/docs/reference/google-cloud-retail/2.42.0/com.google.cloud.retail.v2alpha.SearchRequest),[SearchPagedResponse](/java/docs/reference/google-cloud-retail/2.42.0/com.google.cloud.retail.v2alpha.SearchServiceClient.SearchPagedResponse)>`

**Overrides**

[SearchServiceStub.searchPagedCallable()](/java/docs/reference/google-cloud-retail/2.42.0/com.google.cloud.retail.v2alpha.stub.SearchServiceStub#com_google_cloud_retail_v2alpha_stub_SearchServiceStub_searchPagedCallable__)

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
