-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class LfpStoreServiceGrpc (0.8.0) Stay organized with collections Save and categorize content based on your preferences.

1.15.0 (latest) 1.13.0 1.11.0 1.10.0 1.8.0 1.6.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.29.0 0.27.0 0.26.0 0.23.0 0.22.0 0.21.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public final class LfpStoreServiceGrpc
```

Service for a [LFP partner](https://support.google.com/merchants/answer/7676652) to submit local stores for a merchant.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> LfpStoreServiceGrpc

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

### bindService(LfpStoreServiceGrpc.AsyncService service)

```
public static final ServerServiceDefinition bindService(LfpStoreServiceGrpc.AsyncService service)
```

**Parameter**

**Name**

**Description**

`service`

`[LfpStoreServiceGrpc.AsyncService](/java/docs/reference/google-shopping-merchant-lfp/0.8.0/com.google.shopping.merchant.lfp.v1beta.LfpStoreServiceGrpc.AsyncService)`  

**Returns**

**Type**

**Description**

`io.grpc.ServerServiceDefinition`

### getDeleteLfpStoreMethod()

```
public static MethodDescriptor<DeleteLfpStoreRequest,Empty> getDeleteLfpStoreMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DeleteLfpStoreRequest](/java/docs/reference/google-shopping-merchant-lfp/0.8.0/com.google.shopping.merchant.lfp.v1beta.DeleteLfpStoreRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getGetLfpStoreMethod()

```
public static MethodDescriptor<GetLfpStoreRequest,LfpStore> getGetLfpStoreMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetLfpStoreRequest](/java/docs/reference/google-shopping-merchant-lfp/0.8.0/com.google.shopping.merchant.lfp.v1beta.GetLfpStoreRequest),[LfpStore](/java/docs/reference/google-shopping-merchant-lfp/0.8.0/com.google.shopping.merchant.lfp.v1beta.LfpStore)>`

### getInsertLfpStoreMethod()

```
public static MethodDescriptor<InsertLfpStoreRequest,LfpStore> getInsertLfpStoreMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[InsertLfpStoreRequest](/java/docs/reference/google-shopping-merchant-lfp/0.8.0/com.google.shopping.merchant.lfp.v1beta.InsertLfpStoreRequest),[LfpStore](/java/docs/reference/google-shopping-merchant-lfp/0.8.0/com.google.shopping.merchant.lfp.v1beta.LfpStore)>`

### getListLfpStoresMethod()

```
public static MethodDescriptor<ListLfpStoresRequest,ListLfpStoresResponse> getListLfpStoresMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListLfpStoresRequest](/java/docs/reference/google-shopping-merchant-lfp/0.8.0/com.google.shopping.merchant.lfp.v1beta.ListLfpStoresRequest),[ListLfpStoresResponse](/java/docs/reference/google-shopping-merchant-lfp/0.8.0/com.google.shopping.merchant.lfp.v1beta.ListLfpStoresResponse)>`

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
public static LfpStoreServiceGrpc.LfpStoreServiceBlockingStub newBlockingStub(Channel channel)
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

`[LfpStoreServiceGrpc.LfpStoreServiceBlockingStub](/java/docs/reference/google-shopping-merchant-lfp/0.8.0/com.google.shopping.merchant.lfp.v1beta.LfpStoreServiceGrpc.LfpStoreServiceBlockingStub)`

### newFutureStub(Channel channel)

```
public static LfpStoreServiceGrpc.LfpStoreServiceFutureStub newFutureStub(Channel channel)
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

`[LfpStoreServiceGrpc.LfpStoreServiceFutureStub](/java/docs/reference/google-shopping-merchant-lfp/0.8.0/com.google.shopping.merchant.lfp.v1beta.LfpStoreServiceGrpc.LfpStoreServiceFutureStub)`

### newStub(Channel channel)

```
public static LfpStoreServiceGrpc.LfpStoreServiceStub newStub(Channel channel)
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

`[LfpStoreServiceGrpc.LfpStoreServiceStub](/java/docs/reference/google-shopping-merchant-lfp/0.8.0/com.google.shopping.merchant.lfp.v1beta.LfpStoreServiceGrpc.LfpStoreServiceStub)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
