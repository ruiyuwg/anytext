-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class GrpcImageVersionsCallableFactory (1.51.0) Stay organized with collections Save and categorize content based on your preferences.

1.87.0 (latest) 1.85.0 1.83.0 1.82.0 1.80.0 1.78.0 1.76.0 1.75.0 1.74.0 1.73.0 1.72.0 1.70.0 1.68.0 1.67.0 1.64.0 1.63.0 1.62.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

```
public class GrpcImageVersionsCallableFactory implements GrpcStubCallableFactory
```

gRPC callable factory implementation for the ImageVersions service API.

This class is for advanced usage.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> GrpcImageVersionsCallableFactory

## Implements

[GrpcStubCallableFactory](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.grpc.GrpcStubCallableFactory.html)

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

### GrpcImageVersionsCallableFactory()

```
public GrpcImageVersionsCallableFactory()
```

## Methods

### <RequestT,ResponseT,MetadataT>createOperationCallable(GrpcCallSettings<RequestT,Operation> grpcCallSettings, OperationCallSettings<RequestT,ResponseT,MetadataT> callSettings, ClientContext clientContext, OperationsStub operationsStub)

```
public OperationCallable<RequestT,ResponseT,MetadataT> <RequestT,ResponseT,MetadataT>createOperationCallable(GrpcCallSettings<RequestT,Operation> grpcCallSettings, OperationCallSettings<RequestT,ResponseT,MetadataT> callSettings, ClientContext clientContext, OperationsStub operationsStub)
```

**Parameters**

**Name**

**Description**

`grpcCallSettings`

`[GrpcCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.grpc.GrpcCallSettings.html)<RequestT,[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

`callSettings`

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<RequestT,ResponseT,MetadataT>`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

`operationsStub`

`[OperationsStub](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.stub.OperationsStub.html)`  

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<RequestT,ResponseT,MetadataT>`

### <RequestT,ResponseT,PagedListResponseT>createPagedCallable(GrpcCallSettings<RequestT,ResponseT> grpcCallSettings, PagedCallSettings<RequestT,ResponseT,PagedListResponseT> callSettings, ClientContext clientContext)

```
public UnaryCallable<RequestT,PagedListResponseT> <RequestT,ResponseT,PagedListResponseT>createPagedCallable(GrpcCallSettings<RequestT,ResponseT> grpcCallSettings, PagedCallSettings<RequestT,ResponseT,PagedListResponseT> callSettings, ClientContext clientContext)
```

**Parameters**

**Name**

**Description**

`grpcCallSettings`

`[GrpcCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.grpc.GrpcCallSettings.html)<RequestT,ResponseT>`  

`callSettings`

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<RequestT,ResponseT,PagedListResponseT>`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<RequestT,PagedListResponseT>`

### <RequestT,ResponseT>createBatchingCallable(GrpcCallSettings<RequestT,ResponseT> grpcCallSettings, BatchingCallSettings<RequestT,ResponseT> callSettings, ClientContext clientContext)

```
public UnaryCallable<RequestT,ResponseT> <RequestT,ResponseT>createBatchingCallable(GrpcCallSettings<RequestT,ResponseT> grpcCallSettings, BatchingCallSettings<RequestT,ResponseT> callSettings, ClientContext clientContext)
```

**Parameters**

**Name**

**Description**

`grpcCallSettings`

`[GrpcCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.grpc.GrpcCallSettings.html)<RequestT,ResponseT>`  

`callSettings`

`[BatchingCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.BatchingCallSettings.html)<RequestT,ResponseT>`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<RequestT,ResponseT>`

### <RequestT,ResponseT>createBidiStreamingCallable(GrpcCallSettings<RequestT,ResponseT> grpcCallSettings, StreamingCallSettings<RequestT,ResponseT> callSettings, ClientContext clientContext)

```
public BidiStreamingCallable<RequestT,ResponseT> <RequestT,ResponseT>createBidiStreamingCallable(GrpcCallSettings<RequestT,ResponseT> grpcCallSettings, StreamingCallSettings<RequestT,ResponseT> callSettings, ClientContext clientContext)
```

**Parameters**

**Name**

**Description**

`grpcCallSettings`

`[GrpcCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.grpc.GrpcCallSettings.html)<RequestT,ResponseT>`  

`callSettings`

`[StreamingCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StreamingCallSettings.html)<RequestT,ResponseT>`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

`[BidiStreamingCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.BidiStreamingCallable.html)<RequestT,ResponseT>`

### <RequestT,ResponseT>createClientStreamingCallable(GrpcCallSettings<RequestT,ResponseT> grpcCallSettings, StreamingCallSettings<RequestT,ResponseT> callSettings, ClientContext clientContext)

```
public ClientStreamingCallable<RequestT,ResponseT> <RequestT,ResponseT>createClientStreamingCallable(GrpcCallSettings<RequestT,ResponseT> grpcCallSettings, StreamingCallSettings<RequestT,ResponseT> callSettings, ClientContext clientContext)
```

**Parameters**

**Name**

**Description**

`grpcCallSettings`

`[GrpcCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.grpc.GrpcCallSettings.html)<RequestT,ResponseT>`  

`callSettings`

`[StreamingCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StreamingCallSettings.html)<RequestT,ResponseT>`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

`[ClientStreamingCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientStreamingCallable.html)<RequestT,ResponseT>`

### <RequestT,ResponseT>createServerStreamingCallable(GrpcCallSettings<RequestT,ResponseT> grpcCallSettings, ServerStreamingCallSettings<RequestT,ResponseT> callSettings, ClientContext clientContext)

```
public ServerStreamingCallable<RequestT,ResponseT> <RequestT,ResponseT>createServerStreamingCallable(GrpcCallSettings<RequestT,ResponseT> grpcCallSettings, ServerStreamingCallSettings<RequestT,ResponseT> callSettings, ClientContext clientContext)
```

**Parameters**

**Name**

**Description**

`grpcCallSettings`

`[GrpcCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.grpc.GrpcCallSettings.html)<RequestT,ResponseT>`  

`callSettings`

`[ServerStreamingCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ServerStreamingCallSettings.html)<RequestT,ResponseT>`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

`[ServerStreamingCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ServerStreamingCallable.html)<RequestT,ResponseT>`

### <RequestT,ResponseT>createUnaryCallable(GrpcCallSettings<RequestT,ResponseT> grpcCallSettings, UnaryCallSettings<RequestT,ResponseT> callSettings, ClientContext clientContext)

```
public UnaryCallable<RequestT,ResponseT> <RequestT,ResponseT>createUnaryCallable(GrpcCallSettings<RequestT,ResponseT> grpcCallSettings, UnaryCallSettings<RequestT,ResponseT> callSettings, ClientContext clientContext)
```

**Parameters**

**Name**

**Description**

`grpcCallSettings`

`[GrpcCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.grpc.GrpcCallSettings.html)<RequestT,ResponseT>`  

`callSettings`

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<RequestT,ResponseT>`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<RequestT,ResponseT>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
