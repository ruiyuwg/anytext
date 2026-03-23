-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class HttpJsonTenantServiceStub (2.55.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.6 2.2.9

```
public class HttpJsonTenantServiceStub extends TenantServiceStub
```

REST stub implementation for the TenantService service API.

This class is for advanced usage and reflects the underlying API directly.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [TenantServiceStub](/java/docs/reference/google-cloud-talent/2.55.0/com.google.cloud.talent.v4.stub.TenantServiceStub) \> HttpJsonTenantServiceStub

## Inherited Members

[TenantServiceStub.close()](/java/docs/reference/google-cloud-talent/2.55.0/com.google.cloud.talent.v4.stub.TenantServiceStub#com_google_cloud_talent_v4_stub_TenantServiceStub_close__)

[TenantServiceStub.createTenantCallable()](/java/docs/reference/google-cloud-talent/2.55.0/com.google.cloud.talent.v4.stub.TenantServiceStub#com_google_cloud_talent_v4_stub_TenantServiceStub_createTenantCallable__)

[TenantServiceStub.deleteTenantCallable()](/java/docs/reference/google-cloud-talent/2.55.0/com.google.cloud.talent.v4.stub.TenantServiceStub#com_google_cloud_talent_v4_stub_TenantServiceStub_deleteTenantCallable__)

[TenantServiceStub.getTenantCallable()](/java/docs/reference/google-cloud-talent/2.55.0/com.google.cloud.talent.v4.stub.TenantServiceStub#com_google_cloud_talent_v4_stub_TenantServiceStub_getTenantCallable__)

[TenantServiceStub.listTenantsCallable()](/java/docs/reference/google-cloud-talent/2.55.0/com.google.cloud.talent.v4.stub.TenantServiceStub#com_google_cloud_talent_v4_stub_TenantServiceStub_listTenantsCallable__)

[TenantServiceStub.listTenantsPagedCallable()](/java/docs/reference/google-cloud-talent/2.55.0/com.google.cloud.talent.v4.stub.TenantServiceStub#com_google_cloud_talent_v4_stub_TenantServiceStub_listTenantsPagedCallable__)

[TenantServiceStub.updateTenantCallable()](/java/docs/reference/google-cloud-talent/2.55.0/com.google.cloud.talent.v4.stub.TenantServiceStub#com_google_cloud_talent_v4_stub_TenantServiceStub_updateTenantCallable__)

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
public static final HttpJsonTenantServiceStub create(ClientContext clientContext)
```

**Parameter**

**Name**

**Description**

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

`[HttpJsonTenantServiceStub](/java/docs/reference/google-cloud-talent/2.55.0/com.google.cloud.talent.v4.stub.HttpJsonTenantServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)

```
public static final HttpJsonTenantServiceStub create(ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)
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

`[HttpJsonTenantServiceStub](/java/docs/reference/google-cloud-talent/2.55.0/com.google.cloud.talent.v4.stub.HttpJsonTenantServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(TenantServiceStubSettings settings)

```
public static final HttpJsonTenantServiceStub create(TenantServiceStubSettings settings)
```

**Parameter**

**Name**

**Description**

`settings`

`[TenantServiceStubSettings](/java/docs/reference/google-cloud-talent/2.55.0/com.google.cloud.talent.v4.stub.TenantServiceStubSettings)`  

**Returns**

**Type**

**Description**

`[HttpJsonTenantServiceStub](/java/docs/reference/google-cloud-talent/2.55.0/com.google.cloud.talent.v4.stub.HttpJsonTenantServiceStub)`

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

### HttpJsonTenantServiceStub(TenantServiceStubSettings settings, ClientContext clientContext)

```
protected HttpJsonTenantServiceStub(TenantServiceStubSettings settings, ClientContext clientContext)
```

Constructs an instance of HttpJsonTenantServiceStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[TenantServiceStubSettings](/java/docs/reference/google-cloud-talent/2.55.0/com.google.cloud.talent.v4.stub.TenantServiceStubSettings)`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

### HttpJsonTenantServiceStub(TenantServiceStubSettings settings, ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)

```
protected HttpJsonTenantServiceStub(TenantServiceStubSettings settings, ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)
```

Constructs an instance of HttpJsonTenantServiceStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[TenantServiceStubSettings](/java/docs/reference/google-cloud-talent/2.55.0/com.google.cloud.talent.v4.stub.TenantServiceStubSettings)`  

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

[TenantServiceStub.close()](/java/docs/reference/google-cloud-talent/2.55.0/com.google.cloud.talent.v4.stub.TenantServiceStub#com_google_cloud_talent_v4_stub_TenantServiceStub_close__)

### createTenantCallable()

```
public UnaryCallable<CreateTenantRequest,Tenant> createTenantCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateTenantRequest](/java/docs/reference/google-cloud-talent/2.55.0/com.google.cloud.talent.v4.CreateTenantRequest),[Tenant](/java/docs/reference/google-cloud-talent/2.55.0/com.google.cloud.talent.v4.Tenant)>`

**Overrides**

[TenantServiceStub.createTenantCallable()](/java/docs/reference/google-cloud-talent/2.55.0/com.google.cloud.talent.v4.stub.TenantServiceStub#com_google_cloud_talent_v4_stub_TenantServiceStub_createTenantCallable__)

### deleteTenantCallable()

```
public UnaryCallable<DeleteTenantRequest,Empty> deleteTenantCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteTenantRequest](/java/docs/reference/google-cloud-talent/2.55.0/com.google.cloud.talent.v4.DeleteTenantRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

**Overrides**

[TenantServiceStub.deleteTenantCallable()](/java/docs/reference/google-cloud-talent/2.55.0/com.google.cloud.talent.v4.stub.TenantServiceStub#com_google_cloud_talent_v4_stub_TenantServiceStub_deleteTenantCallable__)

### getTenantCallable()

```
public UnaryCallable<GetTenantRequest,Tenant> getTenantCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetTenantRequest](/java/docs/reference/google-cloud-talent/2.55.0/com.google.cloud.talent.v4.GetTenantRequest),[Tenant](/java/docs/reference/google-cloud-talent/2.55.0/com.google.cloud.talent.v4.Tenant)>`

**Overrides**

[TenantServiceStub.getTenantCallable()](/java/docs/reference/google-cloud-talent/2.55.0/com.google.cloud.talent.v4.stub.TenantServiceStub#com_google_cloud_talent_v4_stub_TenantServiceStub_getTenantCallable__)

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

### listTenantsCallable()

```
public UnaryCallable<ListTenantsRequest,ListTenantsResponse> listTenantsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListTenantsRequest](/java/docs/reference/google-cloud-talent/2.55.0/com.google.cloud.talent.v4.ListTenantsRequest),[ListTenantsResponse](/java/docs/reference/google-cloud-talent/2.55.0/com.google.cloud.talent.v4.ListTenantsResponse)>`

**Overrides**

[TenantServiceStub.listTenantsCallable()](/java/docs/reference/google-cloud-talent/2.55.0/com.google.cloud.talent.v4.stub.TenantServiceStub#com_google_cloud_talent_v4_stub_TenantServiceStub_listTenantsCallable__)

### listTenantsPagedCallable()

```
public UnaryCallable<ListTenantsRequest,TenantServiceClient.ListTenantsPagedResponse> listTenantsPagedCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListTenantsRequest](/java/docs/reference/google-cloud-talent/2.55.0/com.google.cloud.talent.v4.ListTenantsRequest),[ListTenantsPagedResponse](/java/docs/reference/google-cloud-talent/2.55.0/com.google.cloud.talent.v4.TenantServiceClient.ListTenantsPagedResponse)>`

**Overrides**

[TenantServiceStub.listTenantsPagedCallable()](/java/docs/reference/google-cloud-talent/2.55.0/com.google.cloud.talent.v4.stub.TenantServiceStub#com_google_cloud_talent_v4_stub_TenantServiceStub_listTenantsPagedCallable__)

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

### updateTenantCallable()

```
public UnaryCallable<UpdateTenantRequest,Tenant> updateTenantCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateTenantRequest](/java/docs/reference/google-cloud-talent/2.55.0/com.google.cloud.talent.v4.UpdateTenantRequest),[Tenant](/java/docs/reference/google-cloud-talent/2.55.0/com.google.cloud.talent.v4.Tenant)>`

**Overrides**

[TenantServiceStub.updateTenantCallable()](/java/docs/reference/google-cloud-talent/2.55.0/com.google.cloud.talent.v4.stub.TenantServiceStub#com_google_cloud_talent_v4_stub_TenantServiceStub_updateTenantCallable__)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
