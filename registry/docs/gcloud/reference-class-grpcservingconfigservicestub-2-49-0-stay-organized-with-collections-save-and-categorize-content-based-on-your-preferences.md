-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class GrpcServingConfigServiceStub (2.49.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

```
public class GrpcServingConfigServiceStub extends ServingConfigServiceStub
```

gRPC stub implementation for the ServingConfigService service API.

This class is for advanced usage and reflects the underlying API directly.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [ServingConfigServiceStub](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.stub.ServingConfigServiceStub) \> GrpcServingConfigServiceStub

## Inherited Members

[ServingConfigServiceStub.addControlCallable()](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.stub.ServingConfigServiceStub#com_google_cloud_retail_v2_stub_ServingConfigServiceStub_addControlCallable__)

[ServingConfigServiceStub.close()](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.stub.ServingConfigServiceStub#com_google_cloud_retail_v2_stub_ServingConfigServiceStub_close__)

[ServingConfigServiceStub.createServingConfigCallable()](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.stub.ServingConfigServiceStub#com_google_cloud_retail_v2_stub_ServingConfigServiceStub_createServingConfigCallable__)

[ServingConfigServiceStub.deleteServingConfigCallable()](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.stub.ServingConfigServiceStub#com_google_cloud_retail_v2_stub_ServingConfigServiceStub_deleteServingConfigCallable__)

[ServingConfigServiceStub.getServingConfigCallable()](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.stub.ServingConfigServiceStub#com_google_cloud_retail_v2_stub_ServingConfigServiceStub_getServingConfigCallable__)

[ServingConfigServiceStub.listServingConfigsCallable()](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.stub.ServingConfigServiceStub#com_google_cloud_retail_v2_stub_ServingConfigServiceStub_listServingConfigsCallable__)

[ServingConfigServiceStub.listServingConfigsPagedCallable()](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.stub.ServingConfigServiceStub#com_google_cloud_retail_v2_stub_ServingConfigServiceStub_listServingConfigsPagedCallable__)

[ServingConfigServiceStub.removeControlCallable()](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.stub.ServingConfigServiceStub#com_google_cloud_retail_v2_stub_ServingConfigServiceStub_removeControlCallable__)

[ServingConfigServiceStub.updateServingConfigCallable()](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.stub.ServingConfigServiceStub#com_google_cloud_retail_v2_stub_ServingConfigServiceStub_updateServingConfigCallable__)

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
public static final GrpcServingConfigServiceStub create(ClientContext clientContext)
```

**Parameter**

**Name**

**Description**

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

`[GrpcServingConfigServiceStub](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.stub.GrpcServingConfigServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(ClientContext clientContext, GrpcStubCallableFactory callableFactory)

```
public static final GrpcServingConfigServiceStub create(ClientContext clientContext, GrpcStubCallableFactory callableFactory)
```

**Parameters**

**Name**

**Description**

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

`callableFactory`

`[GrpcStubCallableFactory](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.grpc.GrpcStubCallableFactory.html)`  

**Returns**

**Type**

**Description**

`[GrpcServingConfigServiceStub](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.stub.GrpcServingConfigServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(ServingConfigServiceStubSettings settings)

```
public static final GrpcServingConfigServiceStub create(ServingConfigServiceStubSettings settings)
```

**Parameter**

**Name**

**Description**

`settings`

`[ServingConfigServiceStubSettings](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.stub.ServingConfigServiceStubSettings)`  

**Returns**

**Type**

**Description**

`[GrpcServingConfigServiceStub](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.stub.GrpcServingConfigServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

## Constructors

### GrpcServingConfigServiceStub(ServingConfigServiceStubSettings settings, ClientContext clientContext)

```
protected GrpcServingConfigServiceStub(ServingConfigServiceStubSettings settings, ClientContext clientContext)
```

Constructs an instance of GrpcServingConfigServiceStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[ServingConfigServiceStubSettings](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.stub.ServingConfigServiceStubSettings)`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

### GrpcServingConfigServiceStub(ServingConfigServiceStubSettings settings, ClientContext clientContext, GrpcStubCallableFactory callableFactory)

```
protected GrpcServingConfigServiceStub(ServingConfigServiceStubSettings settings, ClientContext clientContext, GrpcStubCallableFactory callableFactory)
```

Constructs an instance of GrpcServingConfigServiceStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[ServingConfigServiceStubSettings](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.stub.ServingConfigServiceStubSettings)`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

`callableFactory`

`[GrpcStubCallableFactory](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.grpc.GrpcStubCallableFactory.html)`  

## Methods

### addControlCallable()

```
public UnaryCallable<AddControlRequest,ServingConfig> addControlCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[AddControlRequest](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.AddControlRequest),[ServingConfig](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.ServingConfig)>`

**Overrides**

[ServingConfigServiceStub.addControlCallable()](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.stub.ServingConfigServiceStub#com_google_cloud_retail_v2_stub_ServingConfigServiceStub_addControlCallable__)

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

[ServingConfigServiceStub.close()](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.stub.ServingConfigServiceStub#com_google_cloud_retail_v2_stub_ServingConfigServiceStub_close__)

### createServingConfigCallable()

```
public UnaryCallable<CreateServingConfigRequest,ServingConfig> createServingConfigCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateServingConfigRequest](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.CreateServingConfigRequest),[ServingConfig](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.ServingConfig)>`

**Overrides**

[ServingConfigServiceStub.createServingConfigCallable()](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.stub.ServingConfigServiceStub#com_google_cloud_retail_v2_stub_ServingConfigServiceStub_createServingConfigCallable__)

### deleteServingConfigCallable()

```
public UnaryCallable<DeleteServingConfigRequest,Empty> deleteServingConfigCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteServingConfigRequest](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.DeleteServingConfigRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

**Overrides**

[ServingConfigServiceStub.deleteServingConfigCallable()](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.stub.ServingConfigServiceStub#com_google_cloud_retail_v2_stub_ServingConfigServiceStub_deleteServingConfigCallable__)

### getOperationsStub()

```
public GrpcOperationsStub getOperationsStub()
```

**Returns**

**Type**

**Description**

`[GrpcOperationsStub](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.stub.GrpcOperationsStub.html)`

### getServingConfigCallable()

```
public UnaryCallable<GetServingConfigRequest,ServingConfig> getServingConfigCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetServingConfigRequest](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.GetServingConfigRequest),[ServingConfig](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.ServingConfig)>`

**Overrides**

[ServingConfigServiceStub.getServingConfigCallable()](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.stub.ServingConfigServiceStub#com_google_cloud_retail_v2_stub_ServingConfigServiceStub_getServingConfigCallable__)

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

### listServingConfigsCallable()

```
public UnaryCallable<ListServingConfigsRequest,ListServingConfigsResponse> listServingConfigsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListServingConfigsRequest](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.ListServingConfigsRequest),[ListServingConfigsResponse](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.ListServingConfigsResponse)>`

**Overrides**

[ServingConfigServiceStub.listServingConfigsCallable()](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.stub.ServingConfigServiceStub#com_google_cloud_retail_v2_stub_ServingConfigServiceStub_listServingConfigsCallable__)

### listServingConfigsPagedCallable()

```
public UnaryCallable<ListServingConfigsRequest,ServingConfigServiceClient.ListServingConfigsPagedResponse> listServingConfigsPagedCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListServingConfigsRequest](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.ListServingConfigsRequest),[ListServingConfigsPagedResponse](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.ServingConfigServiceClient.ListServingConfigsPagedResponse)>`

**Overrides**

[ServingConfigServiceStub.listServingConfigsPagedCallable()](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.stub.ServingConfigServiceStub#com_google_cloud_retail_v2_stub_ServingConfigServiceStub_listServingConfigsPagedCallable__)

### removeControlCallable()

```
public UnaryCallable<RemoveControlRequest,ServingConfig> removeControlCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[RemoveControlRequest](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.RemoveControlRequest),[ServingConfig](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.ServingConfig)>`

**Overrides**

[ServingConfigServiceStub.removeControlCallable()](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.stub.ServingConfigServiceStub#com_google_cloud_retail_v2_stub_ServingConfigServiceStub_removeControlCallable__)

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

### updateServingConfigCallable()

```
public UnaryCallable<UpdateServingConfigRequest,ServingConfig> updateServingConfigCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateServingConfigRequest](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.UpdateServingConfigRequest),[ServingConfig](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.ServingConfig)>`

**Overrides**

[ServingConfigServiceStub.updateServingConfigCallable()](/java/docs/reference/google-cloud-retail/2.49.0/com.google.cloud.retail.v2.stub.ServingConfigServiceStub#com_google_cloud_retail_v2_stub_ServingConfigServiceStub_updateServingConfigCallable__)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
