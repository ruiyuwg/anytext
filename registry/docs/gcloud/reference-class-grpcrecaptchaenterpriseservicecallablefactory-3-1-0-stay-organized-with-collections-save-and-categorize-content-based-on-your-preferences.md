-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class GrpcRecaptchaEnterpriseServiceCallableFactory (3.1.0) Stay organized with collections Save and categorize content based on your preferences.

3.84.0 (latest) 3.82.0 3.80.0 3.79.0 3.77.0 3.75.0 3.73.0 3.72.0 3.71.0 3.70.0 3.69.0 3.67.0 3.65.0 3.64.0 3.61.0 3.60.0 3.59.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.12 2.6.1 2.5.0 2.4.10 2.3.1

```
public class GrpcRecaptchaEnterpriseServiceCallableFactory implements GrpcStubCallableFactory
```

gRPC callable factory implementation for the RecaptchaEnterpriseService service API.

This class is for advanced usage.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> GrpcRecaptchaEnterpriseServiceCallableFactory

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

### GrpcRecaptchaEnterpriseServiceCallableFactory()

```
public GrpcRecaptchaEnterpriseServiceCallableFactory()
```

## Methods

### <RequestT,ResponseT,MetadataT>createOperationCallable(GrpcCallSettings<RequestT,Operation> grpcCallSettings, OperationCallSettings<RequestT,ResponseT,MetadataT> callSettings, ClientContext clientContext, OperationsStub operationsStub)

```
public OperationCallable<RequestT,ResponseT,MetadataT> <RequestT,ResponseT,MetadataT>createOperationCallable(GrpcCallSettings<RequestT,Operation> grpcCallSettings, OperationCallSettings<RequestT,ResponseT,MetadataT> callSettings, ClientContext clientContext, OperationsStub operationsStub)
```

**Parameters**

**Name**

**Description**

grpcCallSettings

`[GrpcCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.grpc.GrpcCallSettings.html)<RequestT,[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

callSettings

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<RequestT,ResponseT,MetadataT>`  

clientContext

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

operationsStub

`[OperationsStub](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.stub.OperationsStub.html)`  

**Returns**

**Type**

**Description**

[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<RequestT,ResponseT,MetadataT\>

### <RequestT,ResponseT,PagedListResponseT>createPagedCallable(GrpcCallSettings<RequestT,ResponseT> grpcCallSettings, PagedCallSettings<RequestT,ResponseT,PagedListResponseT> callSettings, ClientContext clientContext)

```
public UnaryCallable<RequestT,PagedListResponseT> <RequestT,ResponseT,PagedListResponseT>createPagedCallable(GrpcCallSettings<RequestT,ResponseT> grpcCallSettings, PagedCallSettings<RequestT,ResponseT,PagedListResponseT> callSettings, ClientContext clientContext)
```

**Parameters**

**Name**

**Description**

grpcCallSettings

`[GrpcCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.grpc.GrpcCallSettings.html)<RequestT,ResponseT>`  

callSettings

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<RequestT,ResponseT,PagedListResponseT>`  

clientContext

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<RequestT,PagedListResponseT\>

### <RequestT,ResponseT>createBatchingCallable(GrpcCallSettings<RequestT,ResponseT> grpcCallSettings, BatchingCallSettings<RequestT,ResponseT> callSettings, ClientContext clientContext)

```
public UnaryCallable<RequestT,ResponseT> <RequestT,ResponseT>createBatchingCallable(GrpcCallSettings<RequestT,ResponseT> grpcCallSettings, BatchingCallSettings<RequestT,ResponseT> callSettings, ClientContext clientContext)
```

**Parameters**

**Name**

**Description**

grpcCallSettings

`[GrpcCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.grpc.GrpcCallSettings.html)<RequestT,ResponseT>`  

callSettings

`[BatchingCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.BatchingCallSettings.html)<RequestT,ResponseT>`  

clientContext

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<RequestT,ResponseT\>

### <RequestT,ResponseT>createBidiStreamingCallable(GrpcCallSettings<RequestT,ResponseT> grpcCallSettings, StreamingCallSettings<RequestT,ResponseT> callSettings, ClientContext clientContext)

```
public BidiStreamingCallable<RequestT,ResponseT> <RequestT,ResponseT>createBidiStreamingCallable(GrpcCallSettings<RequestT,ResponseT> grpcCallSettings, StreamingCallSettings<RequestT,ResponseT> callSettings, ClientContext clientContext)
```

**Parameters**

**Name**

**Description**

grpcCallSettings

`[GrpcCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.grpc.GrpcCallSettings.html)<RequestT,ResponseT>`  

callSettings

`[StreamingCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StreamingCallSettings.html)<RequestT,ResponseT>`  

clientContext

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

[BidiStreamingCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.BidiStreamingCallable.html)<RequestT,ResponseT\>

### <RequestT,ResponseT>createClientStreamingCallable(GrpcCallSettings<RequestT,ResponseT> grpcCallSettings, StreamingCallSettings<RequestT,ResponseT> callSettings, ClientContext clientContext)

```
public ClientStreamingCallable<RequestT,ResponseT> <RequestT,ResponseT>createClientStreamingCallable(GrpcCallSettings<RequestT,ResponseT> grpcCallSettings, StreamingCallSettings<RequestT,ResponseT> callSettings, ClientContext clientContext)
```

**Parameters**

**Name**

**Description**

grpcCallSettings

`[GrpcCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.grpc.GrpcCallSettings.html)<RequestT,ResponseT>`  

callSettings

`[StreamingCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StreamingCallSettings.html)<RequestT,ResponseT>`  

clientContext

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

[ClientStreamingCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientStreamingCallable.html)<RequestT,ResponseT\>

### <RequestT,ResponseT>createServerStreamingCallable(GrpcCallSettings<RequestT,ResponseT> grpcCallSettings, ServerStreamingCallSettings<RequestT,ResponseT> callSettings, ClientContext clientContext)

```
public ServerStreamingCallable<RequestT,ResponseT> <RequestT,ResponseT>createServerStreamingCallable(GrpcCallSettings<RequestT,ResponseT> grpcCallSettings, ServerStreamingCallSettings<RequestT,ResponseT> callSettings, ClientContext clientContext)
```

**Parameters**

**Name**

**Description**

grpcCallSettings

`[GrpcCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.grpc.GrpcCallSettings.html)<RequestT,ResponseT>`  

callSettings

`[ServerStreamingCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ServerStreamingCallSettings.html)<RequestT,ResponseT>`  

clientContext

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

[ServerStreamingCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ServerStreamingCallable.html)<RequestT,ResponseT\>

### <RequestT,ResponseT>createUnaryCallable(GrpcCallSettings<RequestT,ResponseT> grpcCallSettings, UnaryCallSettings<RequestT,ResponseT> callSettings, ClientContext clientContext)

```
public UnaryCallable<RequestT,ResponseT> <RequestT,ResponseT>createUnaryCallable(GrpcCallSettings<RequestT,ResponseT> grpcCallSettings, UnaryCallSettings<RequestT,ResponseT> callSettings, ClientContext clientContext)
```

**Parameters**

**Name**

**Description**

grpcCallSettings

`[GrpcCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.grpc.GrpcCallSettings.html)<RequestT,ResponseT>`  

callSettings

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<RequestT,ResponseT>`  

clientContext

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<RequestT,ResponseT\>

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
