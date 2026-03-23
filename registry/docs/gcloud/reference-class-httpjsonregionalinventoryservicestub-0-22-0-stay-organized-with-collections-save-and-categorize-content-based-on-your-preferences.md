-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class HttpJsonRegionalInventoryServiceStub (0.22.0) Stay organized with collections Save and categorize content based on your preferences.

1.15.0 (latest) 1.13.0 1.11.0 1.10.0 1.8.0 1.6.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.46.0 0.44.0 0.43.0 0.40.0 0.39.0 0.38.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

```
public class HttpJsonRegionalInventoryServiceStub extends RegionalInventoryServiceStub
```

REST stub implementation for the RegionalInventoryService service API.

This class is for advanced usage and reflects the underlying API directly.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [RegionalInventoryServiceStub](/java/docs/reference/google-shopping-merchant-inventories/0.22.0/com.google.shopping.merchant.inventories.v1beta.stub.RegionalInventoryServiceStub) \> HttpJsonRegionalInventoryServiceStub

## Inherited Members

[RegionalInventoryServiceStub.close()](/java/docs/reference/google-shopping-merchant-inventories/0.22.0/com.google.shopping.merchant.inventories.v1beta.stub.RegionalInventoryServiceStub#com_google_shopping_merchant_inventories_v1beta_stub_RegionalInventoryServiceStub_close__)

[RegionalInventoryServiceStub.deleteRegionalInventoryCallable()](/java/docs/reference/google-shopping-merchant-inventories/0.22.0/com.google.shopping.merchant.inventories.v1beta.stub.RegionalInventoryServiceStub#com_google_shopping_merchant_inventories_v1beta_stub_RegionalInventoryServiceStub_deleteRegionalInventoryCallable__)

[RegionalInventoryServiceStub.insertRegionalInventoryCallable()](/java/docs/reference/google-shopping-merchant-inventories/0.22.0/com.google.shopping.merchant.inventories.v1beta.stub.RegionalInventoryServiceStub#com_google_shopping_merchant_inventories_v1beta_stub_RegionalInventoryServiceStub_insertRegionalInventoryCallable__)

[RegionalInventoryServiceStub.listRegionalInventoriesCallable()](/java/docs/reference/google-shopping-merchant-inventories/0.22.0/com.google.shopping.merchant.inventories.v1beta.stub.RegionalInventoryServiceStub#com_google_shopping_merchant_inventories_v1beta_stub_RegionalInventoryServiceStub_listRegionalInventoriesCallable__)

[RegionalInventoryServiceStub.listRegionalInventoriesPagedCallable()](/java/docs/reference/google-shopping-merchant-inventories/0.22.0/com.google.shopping.merchant.inventories.v1beta.stub.RegionalInventoryServiceStub#com_google_shopping_merchant_inventories_v1beta_stub_RegionalInventoryServiceStub_listRegionalInventoriesPagedCallable__)

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
public static final HttpJsonRegionalInventoryServiceStub create(ClientContext clientContext)
```

**Parameter**

**Name**

**Description**

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

`[HttpJsonRegionalInventoryServiceStub](/java/docs/reference/google-shopping-merchant-inventories/0.22.0/com.google.shopping.merchant.inventories.v1beta.stub.HttpJsonRegionalInventoryServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)

```
public static final HttpJsonRegionalInventoryServiceStub create(ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)
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

`[HttpJsonRegionalInventoryServiceStub](/java/docs/reference/google-shopping-merchant-inventories/0.22.0/com.google.shopping.merchant.inventories.v1beta.stub.HttpJsonRegionalInventoryServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(RegionalInventoryServiceStubSettings settings)

```
public static final HttpJsonRegionalInventoryServiceStub create(RegionalInventoryServiceStubSettings settings)
```

**Parameter**

**Name**

**Description**

`settings`

`[RegionalInventoryServiceStubSettings](/java/docs/reference/google-shopping-merchant-inventories/0.22.0/com.google.shopping.merchant.inventories.v1beta.stub.RegionalInventoryServiceStubSettings)`  

**Returns**

**Type**

**Description**

`[HttpJsonRegionalInventoryServiceStub](/java/docs/reference/google-shopping-merchant-inventories/0.22.0/com.google.shopping.merchant.inventories.v1beta.stub.HttpJsonRegionalInventoryServiceStub)`

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

### HttpJsonRegionalInventoryServiceStub(RegionalInventoryServiceStubSettings settings, ClientContext clientContext)

```
protected HttpJsonRegionalInventoryServiceStub(RegionalInventoryServiceStubSettings settings, ClientContext clientContext)
```

Constructs an instance of HttpJsonRegionalInventoryServiceStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[RegionalInventoryServiceStubSettings](/java/docs/reference/google-shopping-merchant-inventories/0.22.0/com.google.shopping.merchant.inventories.v1beta.stub.RegionalInventoryServiceStubSettings)`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

### HttpJsonRegionalInventoryServiceStub(RegionalInventoryServiceStubSettings settings, ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)

```
protected HttpJsonRegionalInventoryServiceStub(RegionalInventoryServiceStubSettings settings, ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)
```

Constructs an instance of HttpJsonRegionalInventoryServiceStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[RegionalInventoryServiceStubSettings](/java/docs/reference/google-shopping-merchant-inventories/0.22.0/com.google.shopping.merchant.inventories.v1beta.stub.RegionalInventoryServiceStubSettings)`  

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

[RegionalInventoryServiceStub.close()](/java/docs/reference/google-shopping-merchant-inventories/0.22.0/com.google.shopping.merchant.inventories.v1beta.stub.RegionalInventoryServiceStub#com_google_shopping_merchant_inventories_v1beta_stub_RegionalInventoryServiceStub_close__)

### deleteRegionalInventoryCallable()

```
public UnaryCallable<DeleteRegionalInventoryRequest,Empty> deleteRegionalInventoryCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteRegionalInventoryRequest](/java/docs/reference/google-shopping-merchant-inventories/0.22.0/com.google.shopping.merchant.inventories.v1beta.DeleteRegionalInventoryRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

**Overrides**

[RegionalInventoryServiceStub.deleteRegionalInventoryCallable()](/java/docs/reference/google-shopping-merchant-inventories/0.22.0/com.google.shopping.merchant.inventories.v1beta.stub.RegionalInventoryServiceStub#com_google_shopping_merchant_inventories_v1beta_stub_RegionalInventoryServiceStub_deleteRegionalInventoryCallable__)

### insertRegionalInventoryCallable()

```
public UnaryCallable<InsertRegionalInventoryRequest,RegionalInventory> insertRegionalInventoryCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[InsertRegionalInventoryRequest](/java/docs/reference/google-shopping-merchant-inventories/0.22.0/com.google.shopping.merchant.inventories.v1beta.InsertRegionalInventoryRequest),[RegionalInventory](/java/docs/reference/google-shopping-merchant-inventories/0.22.0/com.google.shopping.merchant.inventories.v1beta.RegionalInventory)>`

**Overrides**

[RegionalInventoryServiceStub.insertRegionalInventoryCallable()](/java/docs/reference/google-shopping-merchant-inventories/0.22.0/com.google.shopping.merchant.inventories.v1beta.stub.RegionalInventoryServiceStub#com_google_shopping_merchant_inventories_v1beta_stub_RegionalInventoryServiceStub_insertRegionalInventoryCallable__)

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

### listRegionalInventoriesCallable()

```
public UnaryCallable<ListRegionalInventoriesRequest,ListRegionalInventoriesResponse> listRegionalInventoriesCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListRegionalInventoriesRequest](/java/docs/reference/google-shopping-merchant-inventories/0.22.0/com.google.shopping.merchant.inventories.v1beta.ListRegionalInventoriesRequest),[ListRegionalInventoriesResponse](/java/docs/reference/google-shopping-merchant-inventories/0.22.0/com.google.shopping.merchant.inventories.v1beta.ListRegionalInventoriesResponse)>`

**Overrides**

[RegionalInventoryServiceStub.listRegionalInventoriesCallable()](/java/docs/reference/google-shopping-merchant-inventories/0.22.0/com.google.shopping.merchant.inventories.v1beta.stub.RegionalInventoryServiceStub#com_google_shopping_merchant_inventories_v1beta_stub_RegionalInventoryServiceStub_listRegionalInventoriesCallable__)

### listRegionalInventoriesPagedCallable()

```
public UnaryCallable<ListRegionalInventoriesRequest,RegionalInventoryServiceClient.ListRegionalInventoriesPagedResponse> listRegionalInventoriesPagedCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListRegionalInventoriesRequest](/java/docs/reference/google-shopping-merchant-inventories/0.22.0/com.google.shopping.merchant.inventories.v1beta.ListRegionalInventoriesRequest),[ListRegionalInventoriesPagedResponse](/java/docs/reference/google-shopping-merchant-inventories/0.22.0/com.google.shopping.merchant.inventories.v1beta.RegionalInventoryServiceClient.ListRegionalInventoriesPagedResponse)>`

**Overrides**

[RegionalInventoryServiceStub.listRegionalInventoriesPagedCallable()](/java/docs/reference/google-shopping-merchant-inventories/0.22.0/com.google.shopping.merchant.inventories.v1beta.stub.RegionalInventoryServiceStub#com_google_shopping_merchant_inventories_v1beta_stub_RegionalInventoryServiceStub_listRegionalInventoriesPagedCallable__)

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
