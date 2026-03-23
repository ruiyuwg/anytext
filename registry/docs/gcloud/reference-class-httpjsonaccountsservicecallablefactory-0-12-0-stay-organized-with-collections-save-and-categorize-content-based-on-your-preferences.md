-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class HttpJsonAccountsServiceCallableFactory (0.12.0) Stay organized with collections Save and categorize content based on your preferences.

1.15.0 (latest) 1.13.0 1.11.0 1.10.0 1.8.0 1.6.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.26.0 0.24.0 0.23.0 0.20.0 0.19.0 0.18.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

```
public class HttpJsonAccountsServiceCallableFactory implements HttpJsonStubCallableFactory<Operation,OperationsStub>
```

REST callable factory implementation for the AccountsService service API.

This class is for advanced usage.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> HttpJsonAccountsServiceCallableFactory

## Implements

com.google.api.gax.httpjson.HttpJsonStubCallableFactory<com.google.longrunning.Operation,com.google.api.gax.httpjson.longrunning.stub.OperationsStub>

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

### HttpJsonAccountsServiceCallableFactory()

```
public HttpJsonAccountsServiceCallableFactory()
```

## Methods

### <RequestT,ResponseT,MetadataT>createOperationCallable(HttpJsonCallSettings<RequestT,Operation> httpJsonCallSettings, OperationCallSettings<RequestT,ResponseT,MetadataT> callSettings, ClientContext clientContext, OperationsStub operationsStub)

```
public OperationCallable<RequestT,ResponseT,MetadataT> <RequestT,ResponseT,MetadataT>createOperationCallable(HttpJsonCallSettings<RequestT,Operation> httpJsonCallSettings, OperationCallSettings<RequestT,ResponseT,MetadataT> callSettings, ClientContext clientContext, OperationsStub operationsStub)
```

**Parameters**

**Name**

**Description**

`httpJsonCallSettings`

`[HttpJsonCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.HttpJsonCallSettings.html)<RequestT,[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

`callSettings`

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<RequestT,ResponseT,MetadataT>`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

`operationsStub`

`[OperationsStub](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.longrunning.stub.OperationsStub.html)`  

**Returns**

**Type**

**Description**

`[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<RequestT,ResponseT,MetadataT>`

### <RequestT,ResponseT,PagedListResponseT>createPagedCallable(HttpJsonCallSettings<RequestT,ResponseT> httpJsonCallSettings, PagedCallSettings<RequestT,ResponseT,PagedListResponseT> callSettings, ClientContext clientContext)

```
public UnaryCallable<RequestT,PagedListResponseT> <RequestT,ResponseT,PagedListResponseT>createPagedCallable(HttpJsonCallSettings<RequestT,ResponseT> httpJsonCallSettings, PagedCallSettings<RequestT,ResponseT,PagedListResponseT> callSettings, ClientContext clientContext)
```

**Parameters**

**Name**

**Description**

`httpJsonCallSettings`

`[HttpJsonCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.HttpJsonCallSettings.html)<RequestT,ResponseT>`  

`callSettings`

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<RequestT,ResponseT,PagedListResponseT>`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<RequestT,PagedListResponseT>`

### <RequestT,ResponseT>createBatchingCallable(HttpJsonCallSettings<RequestT,ResponseT> httpJsonCallSettings, BatchingCallSettings<RequestT,ResponseT> callSettings, ClientContext clientContext)

```
public UnaryCallable<RequestT,ResponseT> <RequestT,ResponseT>createBatchingCallable(HttpJsonCallSettings<RequestT,ResponseT> httpJsonCallSettings, BatchingCallSettings<RequestT,ResponseT> callSettings, ClientContext clientContext)
```

**Parameters**

**Name**

**Description**

`httpJsonCallSettings`

`[HttpJsonCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.HttpJsonCallSettings.html)<RequestT,ResponseT>`  

`callSettings`

`[BatchingCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.BatchingCallSettings.html)<RequestT,ResponseT>`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<RequestT,ResponseT>`

### <RequestT,ResponseT>createServerStreamingCallable(HttpJsonCallSettings<RequestT,ResponseT> httpJsonCallSettings, ServerStreamingCallSettings<RequestT,ResponseT> callSettings, ClientContext clientContext)

```
public ServerStreamingCallable<RequestT,ResponseT> <RequestT,ResponseT>createServerStreamingCallable(HttpJsonCallSettings<RequestT,ResponseT> httpJsonCallSettings, ServerStreamingCallSettings<RequestT,ResponseT> callSettings, ClientContext clientContext)
```

**Parameters**

**Name**

**Description**

`httpJsonCallSettings`

`[HttpJsonCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.HttpJsonCallSettings.html)<RequestT,ResponseT>`  

`callSettings`

`[ServerStreamingCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ServerStreamingCallSettings.html)<RequestT,ResponseT>`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

`[ServerStreamingCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ServerStreamingCallable.html)<RequestT,ResponseT>`

### <RequestT,ResponseT>createUnaryCallable(HttpJsonCallSettings<RequestT,ResponseT> httpJsonCallSettings, UnaryCallSettings<RequestT,ResponseT> callSettings, ClientContext clientContext)

```
public UnaryCallable<RequestT,ResponseT> <RequestT,ResponseT>createUnaryCallable(HttpJsonCallSettings<RequestT,ResponseT> httpJsonCallSettings, UnaryCallSettings<RequestT,ResponseT> callSettings, ClientContext clientContext)
```

**Parameters**

**Name**

**Description**

`httpJsonCallSettings`

`[HttpJsonCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.HttpJsonCallSettings.html)<RequestT,ResponseT>`  

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
