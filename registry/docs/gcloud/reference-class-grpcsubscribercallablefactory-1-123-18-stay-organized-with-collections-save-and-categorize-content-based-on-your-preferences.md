-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class GrpcSubscriberCallableFactory (1.123.18) Stay organized with collections Save and categorize content based on your preferences.

1.149.0 (latest) 1.148.0 1.147.0 1.145.0 1.143.1 1.142.0 1.141.5 1.140.2 1.139.4 1.138.0 1.137.1 1.136.1 1.135.0 1.134.2 1.133.1 1.132.2 1.131.0 1.130.0 1.129.6 1.127.3 1.126.6 1.125.13 1.123.18 1.122.2 1.121.1 1.120.24 1.119.1 1.118.0 1.117.0 1.116.4 1.115.5

```
public class GrpcSubscriberCallableFactory implements GrpcStubCallableFactory
```

gRPC callable factory implementation for the Subscriber service API.

This class is for advanced usage.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> GrpcSubscriberCallableFactory

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

### GrpcSubscriberCallableFactory()

```
public GrpcSubscriberCallableFactory()
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
