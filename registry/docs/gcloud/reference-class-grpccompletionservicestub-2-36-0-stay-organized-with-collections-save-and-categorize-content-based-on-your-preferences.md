-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class GrpcCompletionServiceStub (2.36.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

```
public class GrpcCompletionServiceStub extends CompletionServiceStub
```

gRPC stub implementation for the CompletionService service API.

This class is for advanced usage and reflects the underlying API directly.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [CompletionServiceStub](/java/docs/reference/google-cloud-retail/2.36.0/com.google.cloud.retail.v2alpha.stub.CompletionServiceStub) \> GrpcCompletionServiceStub

## Inherited Members

[CompletionServiceStub.close()](/java/docs/reference/google-cloud-retail/2.36.0/com.google.cloud.retail.v2alpha.stub.CompletionServiceStub#com_google_cloud_retail_v2alpha_stub_CompletionServiceStub_close__)

[CompletionServiceStub.completeQueryCallable()](/java/docs/reference/google-cloud-retail/2.36.0/com.google.cloud.retail.v2alpha.stub.CompletionServiceStub#com_google_cloud_retail_v2alpha_stub_CompletionServiceStub_completeQueryCallable__)

[CompletionServiceStub.getHttpJsonOperationsStub()](/java/docs/reference/google-cloud-retail/2.36.0/com.google.cloud.retail.v2alpha.stub.CompletionServiceStub#com_google_cloud_retail_v2alpha_stub_CompletionServiceStub_getHttpJsonOperationsStub__)

[CompletionServiceStub.getOperationsStub()](/java/docs/reference/google-cloud-retail/2.36.0/com.google.cloud.retail.v2alpha.stub.CompletionServiceStub#com_google_cloud_retail_v2alpha_stub_CompletionServiceStub_getOperationsStub__)

[CompletionServiceStub.importCompletionDataCallable()](/java/docs/reference/google-cloud-retail/2.36.0/com.google.cloud.retail.v2alpha.stub.CompletionServiceStub#com_google_cloud_retail_v2alpha_stub_CompletionServiceStub_importCompletionDataCallable__)

[CompletionServiceStub.importCompletionDataOperationCallable()](/java/docs/reference/google-cloud-retail/2.36.0/com.google.cloud.retail.v2alpha.stub.CompletionServiceStub#com_google_cloud_retail_v2alpha_stub_CompletionServiceStub_importCompletionDataOperationCallable__)

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
public static final GrpcCompletionServiceStub create(ClientContext clientContext)
```

**Parameter**

**Name**

**Description**

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

`[GrpcCompletionServiceStub](/java/docs/reference/google-cloud-retail/2.36.0/com.google.cloud.retail.v2alpha.stub.GrpcCompletionServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(ClientContext clientContext, GrpcStubCallableFactory callableFactory)

```
public static final GrpcCompletionServiceStub create(ClientContext clientContext, GrpcStubCallableFactory callableFactory)
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

`[GrpcCompletionServiceStub](/java/docs/reference/google-cloud-retail/2.36.0/com.google.cloud.retail.v2alpha.stub.GrpcCompletionServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(CompletionServiceStubSettings settings)

```
public static final GrpcCompletionServiceStub create(CompletionServiceStubSettings settings)
```

**Parameter**

**Name**

**Description**

`settings`

`[CompletionServiceStubSettings](/java/docs/reference/google-cloud-retail/2.36.0/com.google.cloud.retail.v2alpha.stub.CompletionServiceStubSettings)`  

**Returns**

**Type**

**Description**

`[GrpcCompletionServiceStub](/java/docs/reference/google-cloud-retail/2.36.0/com.google.cloud.retail.v2alpha.stub.GrpcCompletionServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

## Constructors

### GrpcCompletionServiceStub(CompletionServiceStubSettings settings, ClientContext clientContext)

```
protected GrpcCompletionServiceStub(CompletionServiceStubSettings settings, ClientContext clientContext)
```

Constructs an instance of GrpcCompletionServiceStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[CompletionServiceStubSettings](/java/docs/reference/google-cloud-retail/2.36.0/com.google.cloud.retail.v2alpha.stub.CompletionServiceStubSettings)`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

### GrpcCompletionServiceStub(CompletionServiceStubSettings settings, ClientContext clientContext, GrpcStubCallableFactory callableFactory)

```
protected GrpcCompletionServiceStub(CompletionServiceStubSettings settings, ClientContext clientContext, GrpcStubCallableFactory callableFactory)
```

Constructs an instance of GrpcCompletionServiceStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[CompletionServiceStubSettings](/java/docs/reference/google-cloud-retail/2.36.0/com.google.cloud.retail.v2alpha.stub.CompletionServiceStubSettings)`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

`callableFactory`

`[GrpcStubCallableFactory](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.grpc.GrpcStubCallableFactory.html)`  

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

[CompletionServiceStub.close()](/java/docs/reference/google-cloud-retail/2.36.0/com.google.cloud.retail.v2alpha.stub.CompletionServiceStub#com_google_cloud_retail_v2alpha_stub_CompletionServiceStub_close__)

### completeQueryCallable()

```
public UnaryCallable<CompleteQueryRequest,CompleteQueryResponse> completeQueryCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CompleteQueryRequest](/java/docs/reference/google-cloud-retail/2.36.0/com.google.cloud.retail.v2alpha.CompleteQueryRequest),[CompleteQueryResponse](/java/docs/reference/google-cloud-retail/2.36.0/com.google.cloud.retail.v2alpha.CompleteQueryResponse)>`

**Overrides**

[CompletionServiceStub.completeQueryCallable()](/java/docs/reference/google-cloud-retail/2.36.0/com.google.cloud.retail.v2alpha.stub.CompletionServiceStub#com_google_cloud_retail_v2alpha_stub_CompletionServiceStub_completeQueryCallable__)

### getOperationsStub()

```
public GrpcOperationsStub getOperationsStub()
```

**Returns**

**Type**

**Description**

`[GrpcOperationsStub](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.stub.GrpcOperationsStub.html)`

**Overrides**

[CompletionServiceStub.getOperationsStub()](/java/docs/reference/google-cloud-retail/2.36.0/com.google.cloud.retail.v2alpha.stub.CompletionServiceStub#com_google_cloud_retail_v2alpha_stub_CompletionServiceStub_getOperationsStub__)

### importCompletionDataCallable()

```
public UnaryCallable<ImportCompletionDataRequest,Operation> importCompletionDataCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ImportCompletionDataRequest](/java/docs/reference/google-cloud-retail/2.36.0/com.google.cloud.retail.v2alpha.ImportCompletionDataRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

**Overrides**

[CompletionServiceStub.importCompletionDataCallable()](/java/docs/reference/google-cloud-retail/2.36.0/com.google.cloud.retail.v2alpha.stub.CompletionServiceStub#com_google_cloud_retail_v2alpha_stub_CompletionServiceStub_importCompletionDataCallable__)

### importCompletionDataOperationCallable()

```
public OperationCallable<ImportCompletionDataRequest,ImportCompletionDataResponse,ImportMetadata> importCompletionDataOperationCallable()
```

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[ImportCompletionDataRequest](/java/docs/reference/google-cloud-retail/2.36.0/com.google.cloud.retail.v2alpha.ImportCompletionDataRequest),[ImportCompletionDataResponse](/java/docs/reference/google-cloud-retail/2.36.0/com.google.cloud.retail.v2alpha.ImportCompletionDataResponse),[ImportMetadata](/java/docs/reference/google-cloud-retail/2.36.0/com.google.cloud.retail.v2alpha.ImportMetadata)>`

**Overrides**

[CompletionServiceStub.importCompletionDataOperationCallable()](/java/docs/reference/google-cloud-retail/2.36.0/com.google.cloud.retail.v2alpha.stub.CompletionServiceStub#com_google_cloud_retail_v2alpha_stub_CompletionServiceStub_importCompletionDataOperationCallable__)

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
