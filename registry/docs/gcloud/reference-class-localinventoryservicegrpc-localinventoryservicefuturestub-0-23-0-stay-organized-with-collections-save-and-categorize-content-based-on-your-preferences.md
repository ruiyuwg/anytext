-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class LocalInventoryServiceGrpc.LocalInventoryServiceFutureStub (0.23.0) Stay organized with collections Save and categorize content based on your preferences.

1.15.0 (latest) 1.13.0 1.11.0 1.10.0 1.8.0 1.6.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.46.0 0.44.0 0.43.0 0.40.0 0.39.0 0.38.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0

```
public static final class LocalInventoryServiceGrpc.LocalInventoryServiceFutureStub extends AbstractFutureStub<LocalInventoryServiceGrpc.LocalInventoryServiceFutureStub>
```

A stub to allow clients to do ListenableFuture-style rpc calls to service LocalInventoryService.

Service to manage local inventory for products

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractFutureStub \> LocalInventoryServiceGrpc.LocalInventoryServiceFutureStub

## Inherited Members

io.grpc.stub.AbstractFutureStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel)

io.grpc.stub.AbstractFutureStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions)

io.grpc.stub.AbstractStub.<T>withOption(io.grpc.CallOptions.Key<T>,T)

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

io.grpc.stub.AbstractStub.getCallOptions()

io.grpc.stub.AbstractStub.getChannel()

io.grpc.stub.AbstractStub.withCallCredentials(io.grpc.CallCredentials)

io.grpc.stub.AbstractStub.withChannel(io.grpc.Channel)

io.grpc.stub.AbstractStub.withCompression(java.lang.String)

io.grpc.stub.AbstractStub.withDeadline(io.grpc.Deadline)

io.grpc.stub.AbstractStub.withDeadlineAfter(long,java.util.concurrent.TimeUnit)

io.grpc.stub.AbstractStub.withExecutor(java.util.concurrent.Executor)

io.grpc.stub.AbstractStub.withInterceptors(io.grpc.ClientInterceptor...)

io.grpc.stub.AbstractStub.withMaxInboundMessageSize(int)

io.grpc.stub.AbstractStub.withMaxOutboundMessageSize(int)

io.grpc.stub.AbstractStub.withWaitForReady()

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

## Methods

### build(Channel channel, CallOptions callOptions)

```
protected LocalInventoryServiceGrpc.LocalInventoryServiceFutureStub build(Channel channel, CallOptions callOptions)
```

**Parameters**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

`callOptions`

`io.grpc.CallOptions`  

**Returns**

**Type**

**Description**

`[LocalInventoryServiceGrpc.LocalInventoryServiceFutureStub](/java/docs/reference/google-shopping-merchant-inventories/0.23.0/com.google.shopping.merchant.inventories.v1beta.LocalInventoryServiceGrpc.LocalInventoryServiceFutureStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### deleteLocalInventory(DeleteLocalInventoryRequest request)

```
public ListenableFuture<Empty> deleteLocalInventory(DeleteLocalInventoryRequest request)
```

Deletes the specified `LocalInventory` from the given product in your merchant account. It might take a up to an hour for the `LocalInventory` to be deleted from the specific product. Once you have received a successful delete response, wait for that period before attempting a delete again.

**Parameter**

**Name**

**Description**

`request`

`[DeleteLocalInventoryRequest](/java/docs/reference/google-shopping-merchant-inventories/0.23.0/com.google.shopping.merchant.inventories.v1beta.DeleteLocalInventoryRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### insertLocalInventory(InsertLocalInventoryRequest request)

```
public ListenableFuture<LocalInventory> insertLocalInventory(InsertLocalInventoryRequest request)
```

Inserts a `LocalInventory` resource to a product in your merchant account. Replaces the full `LocalInventory` resource if an entry with the same `storeCode` already exists for the product. It might take up to 30 minutes for the new or updated `LocalInventory` resource to appear in products.

**Parameter**

**Name**

**Description**

`request`

`[InsertLocalInventoryRequest](/java/docs/reference/google-shopping-merchant-inventories/0.23.0/com.google.shopping.merchant.inventories.v1beta.InsertLocalInventoryRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[LocalInventory](/java/docs/reference/google-shopping-merchant-inventories/0.23.0/com.google.shopping.merchant.inventories.v1beta.LocalInventory)>`

### listLocalInventories(ListLocalInventoriesRequest request)

```
public ListenableFuture<ListLocalInventoriesResponse> listLocalInventories(ListLocalInventoriesRequest request)
```

Lists the `LocalInventory` resources for the given product in your merchant account. The response might contain fewer items than specified by `pageSize`. If `pageToken` was returned in previous request, it can be used to obtain additional results. `LocalInventory` resources are listed per product for a given account.

**Parameter**

**Name**

**Description**

`request`

`[ListLocalInventoriesRequest](/java/docs/reference/google-shopping-merchant-inventories/0.23.0/com.google.shopping.merchant.inventories.v1beta.ListLocalInventoriesRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListLocalInventoriesResponse](/java/docs/reference/google-shopping-merchant-inventories/0.23.0/com.google.shopping.merchant.inventories.v1beta.ListLocalInventoriesResponse)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
