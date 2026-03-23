-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class HttpJsonPrivateAuctionServiceStub (0.46.0) Stay organized with collections Save and categorize content based on your preferences.

0.46.0 (latest) 0.44.0 0.42.0 0.41.0 0.40.0 0.39.0 0.37.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.29.0 0.27.0 0.26.0 0.23.0 0.22.0 0.21.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public class HttpJsonPrivateAuctionServiceStub extends PrivateAuctionServiceStub
```

REST stub implementation for the PrivateAuctionService service API.

This class is for advanced usage and reflects the underlying API directly.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [PrivateAuctionServiceStub](/java/docs/reference/ad-manager/latest/com.google.ads.admanager.v1.stub.PrivateAuctionServiceStub) \> HttpJsonPrivateAuctionServiceStub

## Inherited Members

[PrivateAuctionServiceStub.close()](/java/docs/reference/ad-manager/latest/com.google.ads.admanager.v1.stub.PrivateAuctionServiceStub#com_google_ads_admanager_v1_stub_PrivateAuctionServiceStub_close__)

[PrivateAuctionServiceStub.createPrivateAuctionCallable()](/java/docs/reference/ad-manager/latest/com.google.ads.admanager.v1.stub.PrivateAuctionServiceStub#com_google_ads_admanager_v1_stub_PrivateAuctionServiceStub_createPrivateAuctionCallable__)

[PrivateAuctionServiceStub.getPrivateAuctionCallable()](/java/docs/reference/ad-manager/latest/com.google.ads.admanager.v1.stub.PrivateAuctionServiceStub#com_google_ads_admanager_v1_stub_PrivateAuctionServiceStub_getPrivateAuctionCallable__)

[PrivateAuctionServiceStub.listPrivateAuctionsCallable()](/java/docs/reference/ad-manager/latest/com.google.ads.admanager.v1.stub.PrivateAuctionServiceStub#com_google_ads_admanager_v1_stub_PrivateAuctionServiceStub_listPrivateAuctionsCallable__)

[PrivateAuctionServiceStub.listPrivateAuctionsPagedCallable()](/java/docs/reference/ad-manager/latest/com.google.ads.admanager.v1.stub.PrivateAuctionServiceStub#com_google_ads_admanager_v1_stub_PrivateAuctionServiceStub_listPrivateAuctionsPagedCallable__)

[PrivateAuctionServiceStub.updatePrivateAuctionCallable()](/java/docs/reference/ad-manager/latest/com.google.ads.admanager.v1.stub.PrivateAuctionServiceStub#com_google_ads_admanager_v1_stub_PrivateAuctionServiceStub_updatePrivateAuctionCallable__)

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

### create(PrivateAuctionServiceStubSettings settings)

```
public static final HttpJsonPrivateAuctionServiceStub create(PrivateAuctionServiceStubSettings settings)
```

**Parameter**

**Name**

**Description**

`settings`

`[PrivateAuctionServiceStubSettings](/java/docs/reference/ad-manager/latest/com.google.ads.admanager.v1.stub.PrivateAuctionServiceStubSettings)`  

**Returns**

**Type**

**Description**

`[HttpJsonPrivateAuctionServiceStub](/java/docs/reference/ad-manager/latest/com.google.ads.admanager.v1.stub.HttpJsonPrivateAuctionServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(ClientContext clientContext)

```
public static final HttpJsonPrivateAuctionServiceStub create(ClientContext clientContext)
```

**Parameter**

**Name**

**Description**

`clientContext`

`[ClientContext](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

`[HttpJsonPrivateAuctionServiceStub](/java/docs/reference/ad-manager/latest/com.google.ads.admanager.v1.stub.HttpJsonPrivateAuctionServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)

```
public static final HttpJsonPrivateAuctionServiceStub create(ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)
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

`[HttpJsonPrivateAuctionServiceStub](/java/docs/reference/ad-manager/latest/com.google.ads.admanager.v1.stub.HttpJsonPrivateAuctionServiceStub)`

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

### HttpJsonPrivateAuctionServiceStub(PrivateAuctionServiceStubSettings settings, ClientContext clientContext)

```
protected HttpJsonPrivateAuctionServiceStub(PrivateAuctionServiceStubSettings settings, ClientContext clientContext)
```

Constructs an instance of HttpJsonPrivateAuctionServiceStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[PrivateAuctionServiceStubSettings](/java/docs/reference/ad-manager/latest/com.google.ads.admanager.v1.stub.PrivateAuctionServiceStubSettings)`  

`clientContext`

`[ClientContext](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

### HttpJsonPrivateAuctionServiceStub(PrivateAuctionServiceStubSettings settings, ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)

```
protected HttpJsonPrivateAuctionServiceStub(PrivateAuctionServiceStubSettings settings, ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)
```

Constructs an instance of HttpJsonPrivateAuctionServiceStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[PrivateAuctionServiceStubSettings](/java/docs/reference/ad-manager/latest/com.google.ads.admanager.v1.stub.PrivateAuctionServiceStubSettings)`  

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

[PrivateAuctionServiceStub.close()](/java/docs/reference/ad-manager/latest/com.google.ads.admanager.v1.stub.PrivateAuctionServiceStub#com_google_ads_admanager_v1_stub_PrivateAuctionServiceStub_close__)

### createPrivateAuctionCallable()

```
public UnaryCallable<CreatePrivateAuctionRequest,PrivateAuction> createPrivateAuctionCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreatePrivateAuctionRequest](/java/docs/reference/ad-manager/latest/com.google.ads.admanager.v1.CreatePrivateAuctionRequest),[PrivateAuction](/java/docs/reference/ad-manager/latest/com.google.ads.admanager.v1.PrivateAuction)>`

**Overrides**

[PrivateAuctionServiceStub.createPrivateAuctionCallable()](/java/docs/reference/ad-manager/latest/com.google.ads.admanager.v1.stub.PrivateAuctionServiceStub#com_google_ads_admanager_v1_stub_PrivateAuctionServiceStub_createPrivateAuctionCallable__)

### getPrivateAuctionCallable()

```
public UnaryCallable<GetPrivateAuctionRequest,PrivateAuction> getPrivateAuctionCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetPrivateAuctionRequest](/java/docs/reference/ad-manager/latest/com.google.ads.admanager.v1.GetPrivateAuctionRequest),[PrivateAuction](/java/docs/reference/ad-manager/latest/com.google.ads.admanager.v1.PrivateAuction)>`

**Overrides**

[PrivateAuctionServiceStub.getPrivateAuctionCallable()](/java/docs/reference/ad-manager/latest/com.google.ads.admanager.v1.stub.PrivateAuctionServiceStub#com_google_ads_admanager_v1_stub_PrivateAuctionServiceStub_getPrivateAuctionCallable__)

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

### listPrivateAuctionsCallable()

```
public UnaryCallable<ListPrivateAuctionsRequest,ListPrivateAuctionsResponse> listPrivateAuctionsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListPrivateAuctionsRequest](/java/docs/reference/ad-manager/latest/com.google.ads.admanager.v1.ListPrivateAuctionsRequest),[ListPrivateAuctionsResponse](/java/docs/reference/ad-manager/latest/com.google.ads.admanager.v1.ListPrivateAuctionsResponse)>`

**Overrides**

[PrivateAuctionServiceStub.listPrivateAuctionsCallable()](/java/docs/reference/ad-manager/latest/com.google.ads.admanager.v1.stub.PrivateAuctionServiceStub#com_google_ads_admanager_v1_stub_PrivateAuctionServiceStub_listPrivateAuctionsCallable__)

### listPrivateAuctionsPagedCallable()

```
public UnaryCallable<ListPrivateAuctionsRequest,PrivateAuctionServiceClient.ListPrivateAuctionsPagedResponse> listPrivateAuctionsPagedCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListPrivateAuctionsRequest](/java/docs/reference/ad-manager/latest/com.google.ads.admanager.v1.ListPrivateAuctionsRequest),[ListPrivateAuctionsPagedResponse](/java/docs/reference/ad-manager/latest/com.google.ads.admanager.v1.PrivateAuctionServiceClient.ListPrivateAuctionsPagedResponse)>`

**Overrides**

[PrivateAuctionServiceStub.listPrivateAuctionsPagedCallable()](/java/docs/reference/ad-manager/latest/com.google.ads.admanager.v1.stub.PrivateAuctionServiceStub#com_google_ads_admanager_v1_stub_PrivateAuctionServiceStub_listPrivateAuctionsPagedCallable__)

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

### updatePrivateAuctionCallable()

```
public UnaryCallable<UpdatePrivateAuctionRequest,PrivateAuction> updatePrivateAuctionCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdatePrivateAuctionRequest](/java/docs/reference/ad-manager/latest/com.google.ads.admanager.v1.UpdatePrivateAuctionRequest),[PrivateAuction](/java/docs/reference/ad-manager/latest/com.google.ads.admanager.v1.PrivateAuction)>`

**Overrides**

[PrivateAuctionServiceStub.updatePrivateAuctionCallable()](/java/docs/reference/ad-manager/latest/com.google.ads.admanager.v1.stub.PrivateAuctionServiceStub#com_google_ads_admanager_v1_stub_PrivateAuctionServiceStub_updatePrivateAuctionCallable__)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
