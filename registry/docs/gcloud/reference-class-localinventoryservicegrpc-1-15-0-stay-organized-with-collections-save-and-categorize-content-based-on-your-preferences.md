-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class LocalInventoryServiceGrpc (1.15.0) Stay organized with collections Save and categorize content based on your preferences.

1.15.0 (latest) 1.13.0 1.11.0 1.10.0 1.8.0 1.6.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.46.0 0.44.0 0.43.0 0.40.0 0.39.0 0.38.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0

```
public final class LocalInventoryServiceGrpc
```

Service to manage local inventory for products

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> LocalInventoryServiceGrpc

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

## Static Fields

### SERVICE\_NAME

```
public static final String SERVICE_NAME
```

**Field Value**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

## Static Methods

### bindService(LocalInventoryServiceGrpc.AsyncService service)

```
public static final ServerServiceDefinition bindService(LocalInventoryServiceGrpc.AsyncService service)
```

**Parameter**

**Name**

**Description**

`service`

`[LocalInventoryServiceGrpc.AsyncService](/java/docs/reference/google-shopping-merchant-inventories/latest/com.google.shopping.merchant.inventories.v1beta.LocalInventoryServiceGrpc.AsyncService)`  

**Returns**

**Type**

**Description**

`io.grpc.ServerServiceDefinition`

### getDeleteLocalInventoryMethod()

```
public static MethodDescriptor<DeleteLocalInventoryRequest,Empty> getDeleteLocalInventoryMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DeleteLocalInventoryRequest](/java/docs/reference/google-shopping-merchant-inventories/latest/com.google.shopping.merchant.inventories.v1beta.DeleteLocalInventoryRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getInsertLocalInventoryMethod()

```
public static MethodDescriptor<InsertLocalInventoryRequest,LocalInventory> getInsertLocalInventoryMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[InsertLocalInventoryRequest](/java/docs/reference/google-shopping-merchant-inventories/latest/com.google.shopping.merchant.inventories.v1beta.InsertLocalInventoryRequest),[LocalInventory](/java/docs/reference/google-shopping-merchant-inventories/latest/com.google.shopping.merchant.inventories.v1beta.LocalInventory)>`

### getListLocalInventoriesMethod()

```
public static MethodDescriptor<ListLocalInventoriesRequest,ListLocalInventoriesResponse> getListLocalInventoriesMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListLocalInventoriesRequest](/java/docs/reference/google-shopping-merchant-inventories/latest/com.google.shopping.merchant.inventories.v1beta.ListLocalInventoriesRequest),[ListLocalInventoriesResponse](/java/docs/reference/google-shopping-merchant-inventories/latest/com.google.shopping.merchant.inventories.v1beta.ListLocalInventoriesResponse)>`

### getServiceDescriptor()

```
public static ServiceDescriptor getServiceDescriptor()
```

**Returns**

**Type**

**Description**

`io.grpc.ServiceDescriptor`

### newBlockingStub(Channel channel)

```
public static LocalInventoryServiceGrpc.LocalInventoryServiceBlockingStub newBlockingStub(Channel channel)
```

Creates a new blocking-style stub that supports unary and streaming output calls on the service

**Parameter**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

**Returns**

**Type**

**Description**

`[LocalInventoryServiceGrpc.LocalInventoryServiceBlockingStub](/java/docs/reference/google-shopping-merchant-inventories/latest/com.google.shopping.merchant.inventories.v1beta.LocalInventoryServiceGrpc.LocalInventoryServiceBlockingStub)`

### newBlockingV2Stub(Channel channel)

```
public static LocalInventoryServiceGrpc.LocalInventoryServiceBlockingV2Stub newBlockingV2Stub(Channel channel)
```

Creates a new blocking-style stub that supports all types of calls on the service

**Parameter**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

**Returns**

**Type**

**Description**

`[LocalInventoryServiceGrpc.LocalInventoryServiceBlockingV2Stub](/java/docs/reference/google-shopping-merchant-inventories/latest/com.google.shopping.merchant.inventories.v1beta.LocalInventoryServiceGrpc.LocalInventoryServiceBlockingV2Stub)`

### newFutureStub(Channel channel)

```
public static LocalInventoryServiceGrpc.LocalInventoryServiceFutureStub newFutureStub(Channel channel)
```

Creates a new ListenableFuture-style stub that supports unary calls on the service

**Parameter**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

**Returns**

**Type**

**Description**

`[LocalInventoryServiceGrpc.LocalInventoryServiceFutureStub](/java/docs/reference/google-shopping-merchant-inventories/latest/com.google.shopping.merchant.inventories.v1beta.LocalInventoryServiceGrpc.LocalInventoryServiceFutureStub)`

### newStub(Channel channel)

```
public static LocalInventoryServiceGrpc.LocalInventoryServiceStub newStub(Channel channel)
```

Creates a new async stub that supports all call types for the service

**Parameter**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

**Returns**

**Type**

**Description**

`[LocalInventoryServiceGrpc.LocalInventoryServiceStub](/java/docs/reference/google-shopping-merchant-inventories/latest/com.google.shopping.merchant.inventories.v1beta.LocalInventoryServiceGrpc.LocalInventoryServiceStub)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
