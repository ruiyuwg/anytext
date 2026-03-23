-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ProductServiceClient (2.3.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

```
public class ProductServiceClient implements BackgroundResource
```

Service Description: Service for ingesting Product information of the customer's website.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   BranchName parent = BranchName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]");
   Product product = Product.newBuilder().build();
   String productId = "productId-1051830678";
   Product response = productServiceClient.createProduct(parent, product, productId);
 }
 
```
 

Note: close() needs to be called on the ProductServiceClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

The surface of this class includes several types of Java methods for each of the API's methods:

1.  A "flattened" method. With this type of method, the fields of the request type have been converted into function parameters. It may be the case that not all fields are available as parameters, and not every API method will have a flattened method entry point.
2.  A "request object" method. This type of method only takes one parameter, a request object, which must be constructed before the call. Not every API method will have a request object method.
3.  A "callable" method. This type of method takes no parameters and returns an immutable API callable object, which can be used to initiate calls to the service.

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of ProductServiceSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 ProductServiceSettings productServiceSettings =
     ProductServiceSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 ProductServiceClient productServiceClient = ProductServiceClient.create(productServiceSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 ProductServiceSettings productServiceSettings =
     ProductServiceSettings.newBuilder().setEndpoint(myEndpoint).build();
 ProductServiceClient productServiceClient = ProductServiceClient.create(productServiceSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 ProductServiceSettings productServiceSettings =
     ProductServiceSettings.newBuilder()
         .setTransportChannelProvider(
             ProductServiceSettings.defaultHttpJsonTransportProviderBuilder().build())
         .build();
 ProductServiceClient productServiceClient = ProductServiceClient.create(productServiceSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> ProductServiceClient

## Implements

[BackgroundResource](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.core.BackgroundResource.html)

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

## Static Methods

### create()

```
public static final ProductServiceClient create()
```

Constructs an instance of ProductServiceClient with default settings.

**Returns**

**Type**

**Description**

[ProductServiceClient](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ProductServiceClient)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### create(ProductServiceSettings settings)

```
public static final ProductServiceClient create(ProductServiceSettings settings)
```

Constructs an instance of ProductServiceClient, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

settings

`[ProductServiceSettings](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ProductServiceSettings)`  

**Returns**

**Type**

**Description**

[ProductServiceClient](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ProductServiceClient)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### create(ProductServiceStub stub)

```
public static final ProductServiceClient create(ProductServiceStub stub)
```

Constructs an instance of ProductServiceClient, using the given stub for making calls. This is for advanced usage - prefer using create(ProductServiceSettings).

**Parameter**

**Name**

**Description**

stub

`[ProductServiceStub](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.stub.ProductServiceStub)`  

**Returns**

**Type**

**Description**

[ProductServiceClient](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ProductServiceClient)

## Constructors

### ProductServiceClient(ProductServiceSettings settings)

```
protected ProductServiceClient(ProductServiceSettings settings)
```

Constructs an instance of ProductServiceClient, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

settings

`[ProductServiceSettings](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ProductServiceSettings)`  

### ProductServiceClient(ProductServiceStub stub)

```
protected ProductServiceClient(ProductServiceStub stub)
```

**Parameter**

**Name**

**Description**

stub

`[ProductServiceStub](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.stub.ProductServiceStub)`  

## Methods

### addFulfillmentPlacesAsync(AddFulfillmentPlacesRequest request)

```
public final OperationFuture<AddFulfillmentPlacesResponse,AddFulfillmentPlacesMetadata> addFulfillmentPlacesAsync(AddFulfillmentPlacesRequest request)
```

Incrementally adds place IDs to Product.fulfillment\_info.place\_ids.

This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the added place IDs are not immediately manifested in the Product queried by GetProduct or ListProducts.

This feature is only available for users who have Retail Search enabled. Please enable Retail Search on Cloud Console before using this feature.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   AddFulfillmentPlacesRequest request =
       AddFulfillmentPlacesRequest.newBuilder()
           .setProduct(
               ProductName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]", "[PRODUCT]")
                   .toString())
           .setType("type3575610")
           .addAllPlaceIds(new ArrayList<String>())
           .setAddTime(Timestamp.newBuilder().build())
           .setAllowMissing(true)
           .build();
   AddFulfillmentPlacesResponse response =
       productServiceClient.addFulfillmentPlacesAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[AddFulfillmentPlacesRequest](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.AddFulfillmentPlacesRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[AddFulfillmentPlacesResponse](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.AddFulfillmentPlacesResponse),[AddFulfillmentPlacesMetadata](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.AddFulfillmentPlacesMetadata)\>

### addFulfillmentPlacesAsync(ProductName product)

```
public final OperationFuture<AddFulfillmentPlacesResponse,AddFulfillmentPlacesMetadata> addFulfillmentPlacesAsync(ProductName product)
```

Incrementally adds place IDs to Product.fulfillment\_info.place\_ids.

This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the added place IDs are not immediately manifested in the Product queried by GetProduct or ListProducts.

This feature is only available for users who have Retail Search enabled. Please enable Retail Search on Cloud Console before using this feature.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   ProductName product =
       ProductName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]", "[PRODUCT]");
   AddFulfillmentPlacesResponse response =
       productServiceClient.addFulfillmentPlacesAsync(product).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

product

`[ProductName](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ProductName)`  

Required. Full resource name of Product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`.

If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION\_DENIED error is returned.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[AddFulfillmentPlacesResponse](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.AddFulfillmentPlacesResponse),[AddFulfillmentPlacesMetadata](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.AddFulfillmentPlacesMetadata)\>

### addFulfillmentPlacesAsync(String product)

```
public final OperationFuture<AddFulfillmentPlacesResponse,AddFulfillmentPlacesMetadata> addFulfillmentPlacesAsync(String product)
```

Incrementally adds place IDs to Product.fulfillment\_info.place\_ids.

This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the added place IDs are not immediately manifested in the Product queried by GetProduct or ListProducts.

This feature is only available for users who have Retail Search enabled. Please enable Retail Search on Cloud Console before using this feature.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   String product =
       ProductName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]", "[PRODUCT]")
           .toString();
   AddFulfillmentPlacesResponse response =
       productServiceClient.addFulfillmentPlacesAsync(product).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

product

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Full resource name of Product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`.

If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION\_DENIED error is returned.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[AddFulfillmentPlacesResponse](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.AddFulfillmentPlacesResponse),[AddFulfillmentPlacesMetadata](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.AddFulfillmentPlacesMetadata)\>

### addFulfillmentPlacesCallable()

```
public final UnaryCallable<AddFulfillmentPlacesRequest,Operation> addFulfillmentPlacesCallable()
```

Incrementally adds place IDs to Product.fulfillment\_info.place\_ids.

This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the added place IDs are not immediately manifested in the Product queried by GetProduct or ListProducts.

This feature is only available for users who have Retail Search enabled. Please enable Retail Search on Cloud Console before using this feature.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   AddFulfillmentPlacesRequest request =
       AddFulfillmentPlacesRequest.newBuilder()
           .setProduct(
               ProductName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]", "[PRODUCT]")
                   .toString())
           .setType("type3575610")
           .addAllPlaceIds(new ArrayList<String>())
           .setAddTime(Timestamp.newBuilder().build())
           .setAllowMissing(true)
           .build();
   ApiFuture<Operation> future =
       productServiceClient.addFulfillmentPlacesCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[AddFulfillmentPlacesRequest](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.AddFulfillmentPlacesRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)\>

### addFulfillmentPlacesOperationCallable()

```
public final OperationCallable<AddFulfillmentPlacesRequest,AddFulfillmentPlacesResponse,AddFulfillmentPlacesMetadata> addFulfillmentPlacesOperationCallable()
```

Incrementally adds place IDs to Product.fulfillment\_info.place\_ids.

This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the added place IDs are not immediately manifested in the Product queried by GetProduct or ListProducts.

This feature is only available for users who have Retail Search enabled. Please enable Retail Search on Cloud Console before using this feature.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   AddFulfillmentPlacesRequest request =
       AddFulfillmentPlacesRequest.newBuilder()
           .setProduct(
               ProductName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]", "[PRODUCT]")
                   .toString())
           .setType("type3575610")
           .addAllPlaceIds(new ArrayList<String>())
           .setAddTime(Timestamp.newBuilder().build())
           .setAllowMissing(true)
           .build();
   OperationFuture<AddFulfillmentPlacesResponse, AddFulfillmentPlacesMetadata> future =
       productServiceClient.addFulfillmentPlacesOperationCallable().futureCall(request);
   // Do something.
   AddFulfillmentPlacesResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[AddFulfillmentPlacesRequest](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.AddFulfillmentPlacesRequest),[AddFulfillmentPlacesResponse](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.AddFulfillmentPlacesResponse),[AddFulfillmentPlacesMetadata](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.AddFulfillmentPlacesMetadata)\>

### addLocalInventoriesAsync(AddLocalInventoriesRequest request)

```
public final OperationFuture<AddLocalInventoriesResponse,AddLocalInventoriesMetadata> addLocalInventoriesAsync(AddLocalInventoriesRequest request)
```

Updates local inventory information for a Product at a list of places, while respecting the last update timestamps of each inventory field.

This process is asynchronous and does not require the Product to exist before updating inventory information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by GetProduct or ListProducts.

Local inventory information can only be modified using this method. CreateProduct and UpdateProduct has no effect on local inventories.

This feature is only available for users who have Retail Search enabled. Please enable Retail Search on Cloud Console before using this feature.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   AddLocalInventoriesRequest request =
       AddLocalInventoriesRequest.newBuilder()
           .setProduct(
               ProductName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]", "[PRODUCT]")
                   .toString())
           .addAllLocalInventories(new ArrayList<LocalInventory>())
           .setAddMask(FieldMask.newBuilder().build())
           .setAddTime(Timestamp.newBuilder().build())
           .setAllowMissing(true)
           .build();
   AddLocalInventoriesResponse response =
       productServiceClient.addLocalInventoriesAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[AddLocalInventoriesRequest](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.AddLocalInventoriesRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[AddLocalInventoriesResponse](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.AddLocalInventoriesResponse),[AddLocalInventoriesMetadata](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.AddLocalInventoriesMetadata)\>

### addLocalInventoriesAsync(ProductName product)

```
public final OperationFuture<AddLocalInventoriesResponse,AddLocalInventoriesMetadata> addLocalInventoriesAsync(ProductName product)
```

Updates local inventory information for a Product at a list of places, while respecting the last update timestamps of each inventory field.

This process is asynchronous and does not require the Product to exist before updating inventory information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by GetProduct or ListProducts.

Local inventory information can only be modified using this method. CreateProduct and UpdateProduct has no effect on local inventories.

This feature is only available for users who have Retail Search enabled. Please enable Retail Search on Cloud Console before using this feature.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   ProductName product =
       ProductName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]", "[PRODUCT]");
   AddLocalInventoriesResponse response =
       productServiceClient.addLocalInventoriesAsync(product).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

product

`[ProductName](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ProductName)`  

Required. Full resource name of Product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`.

If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION\_DENIED error is returned.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[AddLocalInventoriesResponse](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.AddLocalInventoriesResponse),[AddLocalInventoriesMetadata](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.AddLocalInventoriesMetadata)\>

### addLocalInventoriesAsync(String product)

```
public final OperationFuture<AddLocalInventoriesResponse,AddLocalInventoriesMetadata> addLocalInventoriesAsync(String product)
```

Updates local inventory information for a Product at a list of places, while respecting the last update timestamps of each inventory field.

This process is asynchronous and does not require the Product to exist before updating inventory information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by GetProduct or ListProducts.

Local inventory information can only be modified using this method. CreateProduct and UpdateProduct has no effect on local inventories.

This feature is only available for users who have Retail Search enabled. Please enable Retail Search on Cloud Console before using this feature.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   String product =
       ProductName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]", "[PRODUCT]")
           .toString();
   AddLocalInventoriesResponse response =
       productServiceClient.addLocalInventoriesAsync(product).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

product

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Full resource name of Product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`.

If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION\_DENIED error is returned.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[AddLocalInventoriesResponse](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.AddLocalInventoriesResponse),[AddLocalInventoriesMetadata](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.AddLocalInventoriesMetadata)\>

### addLocalInventoriesCallable()

```
public final UnaryCallable<AddLocalInventoriesRequest,Operation> addLocalInventoriesCallable()
```

Updates local inventory information for a Product at a list of places, while respecting the last update timestamps of each inventory field.

This process is asynchronous and does not require the Product to exist before updating inventory information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by GetProduct or ListProducts.

Local inventory information can only be modified using this method. CreateProduct and UpdateProduct has no effect on local inventories.

This feature is only available for users who have Retail Search enabled. Please enable Retail Search on Cloud Console before using this feature.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   AddLocalInventoriesRequest request =
       AddLocalInventoriesRequest.newBuilder()
           .setProduct(
               ProductName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]", "[PRODUCT]")
                   .toString())
           .addAllLocalInventories(new ArrayList<LocalInventory>())
           .setAddMask(FieldMask.newBuilder().build())
           .setAddTime(Timestamp.newBuilder().build())
           .setAllowMissing(true)
           .build();
   ApiFuture<Operation> future =
       productServiceClient.addLocalInventoriesCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[AddLocalInventoriesRequest](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.AddLocalInventoriesRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)\>

### addLocalInventoriesOperationCallable()

```
public final OperationCallable<AddLocalInventoriesRequest,AddLocalInventoriesResponse,AddLocalInventoriesMetadata> addLocalInventoriesOperationCallable()
```

Updates local inventory information for a Product at a list of places, while respecting the last update timestamps of each inventory field.

This process is asynchronous and does not require the Product to exist before updating inventory information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by GetProduct or ListProducts.

Local inventory information can only be modified using this method. CreateProduct and UpdateProduct has no effect on local inventories.

This feature is only available for users who have Retail Search enabled. Please enable Retail Search on Cloud Console before using this feature.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   AddLocalInventoriesRequest request =
       AddLocalInventoriesRequest.newBuilder()
           .setProduct(
               ProductName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]", "[PRODUCT]")
                   .toString())
           .addAllLocalInventories(new ArrayList<LocalInventory>())
           .setAddMask(FieldMask.newBuilder().build())
           .setAddTime(Timestamp.newBuilder().build())
           .setAllowMissing(true)
           .build();
   OperationFuture<AddLocalInventoriesResponse, AddLocalInventoriesMetadata> future =
       productServiceClient.addLocalInventoriesOperationCallable().futureCall(request);
   // Do something.
   AddLocalInventoriesResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[AddLocalInventoriesRequest](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.AddLocalInventoriesRequest),[AddLocalInventoriesResponse](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.AddLocalInventoriesResponse),[AddLocalInventoriesMetadata](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.AddLocalInventoriesMetadata)\>

### awaitTermination(long duration, TimeUnit unit)

```
public boolean awaitTermination(long duration, TimeUnit unit)
```

**Parameters**

**Name**

**Description**

duration

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

unit

`[TimeUnit](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/TimeUnit.html)`  

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

**Exceptions**

**Type**

**Description**

[InterruptedException](https://docs.oracle.com/javase/8/docs/api/java/lang/InterruptedException.html)

### close()

```
public final void close()
```

### createProduct(BranchName parent, Product product, String productId)

```
public final Product createProduct(BranchName parent, Product product, String productId)
```

Creates a Product.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   BranchName parent = BranchName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]");
   Product product = Product.newBuilder().build();
   String productId = "productId-1051830678";
   Product response = productServiceClient.createProduct(parent, product, productId);
 }
 
```
 

**Parameters**

**Name**

**Description**

parent

`[BranchName](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.BranchName)`  

Required. The parent catalog resource name, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch`.

product

`[Product](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.Product)`  

Required. The Product to create.

productId

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The ID to use for the Product, which will become the final component of the Product.name.

If the caller does not have permission to create the Product, regardless of whether or not it exists, a PERMISSION\_DENIED error is returned.

This field must be unique among all Products with the same parent. Otherwise, an ALREADY\_EXISTS error is returned.

This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID\_ARGUMENT error is returned.

**Returns**

**Type**

**Description**

[Product](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.Product)

### createProduct(CreateProductRequest request)

```
public final Product createProduct(CreateProductRequest request)
```

Creates a Product.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   CreateProductRequest request =
       CreateProductRequest.newBuilder()
           .setParent(
               BranchName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]").toString())
           .setProduct(Product.newBuilder().build())
           .setProductId("productId-1051830678")
           .build();
   Product response = productServiceClient.createProduct(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[CreateProductRequest](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.CreateProductRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[Product](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.Product)

### createProduct(String parent, Product product, String productId)

```
public final Product createProduct(String parent, Product product, String productId)
```

Creates a Product.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   String parent = BranchName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]").toString();
   Product product = Product.newBuilder().build();
   String productId = "productId-1051830678";
   Product response = productServiceClient.createProduct(parent, product, productId);
 }
 
```
 

**Parameters**

**Name**

**Description**

parent

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The parent catalog resource name, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch`.

product

`[Product](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.Product)`  

Required. The Product to create.

productId

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The ID to use for the Product, which will become the final component of the Product.name.

If the caller does not have permission to create the Product, regardless of whether or not it exists, a PERMISSION\_DENIED error is returned.

This field must be unique among all Products with the same parent. Otherwise, an ALREADY\_EXISTS error is returned.

This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID\_ARGUMENT error is returned.

**Returns**

**Type**

**Description**

[Product](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.Product)

### createProductCallable()

```
public final UnaryCallable<CreateProductRequest,Product> createProductCallable()
```

Creates a Product.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   CreateProductRequest request =
       CreateProductRequest.newBuilder()
           .setParent(
               BranchName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]").toString())
           .setProduct(Product.newBuilder().build())
           .setProductId("productId-1051830678")
           .build();
   ApiFuture<Product> future = productServiceClient.createProductCallable().futureCall(request);
   // Do something.
   Product response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateProductRequest](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.CreateProductRequest),[Product](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.Product)\>

### deleteProduct(DeleteProductRequest request)

```
public final void deleteProduct(DeleteProductRequest request)
```

Deletes a Product.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   DeleteProductRequest request =
       DeleteProductRequest.newBuilder()
           .setName(
               ProductName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]", "[PRODUCT]")
                   .toString())
           .build();
   productServiceClient.deleteProduct(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[DeleteProductRequest](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.DeleteProductRequest)`  

The request object containing all of the parameters for the API call.

### deleteProduct(ProductName name)

```
public final void deleteProduct(ProductName name)
```

Deletes a Product.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   ProductName name =
       ProductName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]", "[PRODUCT]");
   productServiceClient.deleteProduct(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[ProductName](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ProductName)`  

Required. Full resource name of Product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`.

If the caller does not have permission to delete the Product, regardless of whether or not it exists, a PERMISSION\_DENIED error is returned.

If the Product to delete does not exist, a NOT\_FOUND error is returned.

The Product to delete can neither be a Product.Type.COLLECTION Product member nor a Product.Type.PRIMARY Product with more than one variants. Otherwise, an INVALID\_ARGUMENT error is returned.

All inventory information for the named Product will be deleted.

### deleteProduct(String name)

```
public final void deleteProduct(String name)
```

Deletes a Product.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   String name =
       ProductName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]", "[PRODUCT]")
           .toString();
   productServiceClient.deleteProduct(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Full resource name of Product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`.

If the caller does not have permission to delete the Product, regardless of whether or not it exists, a PERMISSION\_DENIED error is returned.

If the Product to delete does not exist, a NOT\_FOUND error is returned.

The Product to delete can neither be a Product.Type.COLLECTION Product member nor a Product.Type.PRIMARY Product with more than one variants. Otherwise, an INVALID\_ARGUMENT error is returned.

All inventory information for the named Product will be deleted.

### deleteProductCallable()

```
public final UnaryCallable<DeleteProductRequest,Empty> deleteProductCallable()
```

Deletes a Product.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   DeleteProductRequest request =
       DeleteProductRequest.newBuilder()
           .setName(
               ProductName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]", "[PRODUCT]")
                   .toString())
           .build();
   ApiFuture<Empty> future = productServiceClient.deleteProductCallable().futureCall(request);
   // Do something.
   future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteProductRequest](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.DeleteProductRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)\>

### getHttpJsonOperationsClient()

```
public final OperationsClient getHttpJsonOperationsClient()
```

Returns the OperationsClient that can be used to query the status of a long-running operation returned by another API method call.

**Returns**

**Type**

**Description**

[OperationsClient](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.longrunning.OperationsClient.html)

### getOperationsClient()

```
public final OperationsClient getOperationsClient()
```

Returns the OperationsClient that can be used to query the status of a long-running operation returned by another API method call.

**Returns**

**Type**

**Description**

[OperationsClient](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.OperationsClient.html)

### getProduct(GetProductRequest request)

```
public final Product getProduct(GetProductRequest request)
```

Gets a Product.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   GetProductRequest request =
       GetProductRequest.newBuilder()
           .setName(
               ProductName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]", "[PRODUCT]")
                   .toString())
           .build();
   Product response = productServiceClient.getProduct(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[GetProductRequest](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.GetProductRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[Product](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.Product)

### getProduct(ProductName name)

```
public final Product getProduct(ProductName name)
```

Gets a Product.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   ProductName name =
       ProductName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]", "[PRODUCT]");
   Product response = productServiceClient.getProduct(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[ProductName](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ProductName)`  

Required. Full resource name of Product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`.

If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION\_DENIED error is returned.

If the requested Product does not exist, a NOT\_FOUND error is returned.

**Returns**

**Type**

**Description**

[Product](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.Product)

### getProduct(String name)

```
public final Product getProduct(String name)
```

Gets a Product.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   String name =
       ProductName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]", "[PRODUCT]")
           .toString();
   Product response = productServiceClient.getProduct(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Full resource name of Product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`.

If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION\_DENIED error is returned.

If the requested Product does not exist, a NOT\_FOUND error is returned.

**Returns**

**Type**

**Description**

[Product](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.Product)

### getProductCallable()

```
public final UnaryCallable<GetProductRequest,Product> getProductCallable()
```

Gets a Product.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   GetProductRequest request =
       GetProductRequest.newBuilder()
           .setName(
               ProductName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]", "[PRODUCT]")
                   .toString())
           .build();
   ApiFuture<Product> future = productServiceClient.getProductCallable().futureCall(request);
   // Do something.
   Product response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetProductRequest](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.GetProductRequest),[Product](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.Product)\>

### getSettings()

```
public final ProductServiceSettings getSettings()
```

**Returns**

**Type**

**Description**

[ProductServiceSettings](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ProductServiceSettings)

### getStub()

```
public ProductServiceStub getStub()
```

**Returns**

**Type**

**Description**

[ProductServiceStub](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.stub.ProductServiceStub)

### importProductsAsync(ImportProductsRequest request)

```
public final OperationFuture<ImportProductsResponse,ImportMetadata> importProductsAsync(ImportProductsRequest request)
```

Bulk import of multiple Products.

Request processing may be synchronous. No partial updating is supported. Non-existing items are created.

Note that it is possible for a subset of the Products to be successfully updated.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   ImportProductsRequest request =
       ImportProductsRequest.newBuilder()
           .setParent(
               BranchName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]").toString())
           .setRequestId("requestId693933066")
           .setInputConfig(ProductInputConfig.newBuilder().build())
           .setErrorsConfig(ImportErrorsConfig.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .setNotificationPubsubTopic("notificationPubsubTopic-1361224991")
           .build();
   ImportProductsResponse response = productServiceClient.importProductsAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[ImportProductsRequest](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ImportProductsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[ImportProductsResponse](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ImportProductsResponse),[ImportMetadata](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ImportMetadata)\>

### importProductsCallable()

```
public final UnaryCallable<ImportProductsRequest,Operation> importProductsCallable()
```

Bulk import of multiple Products.

Request processing may be synchronous. No partial updating is supported. Non-existing items are created.

Note that it is possible for a subset of the Products to be successfully updated.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   ImportProductsRequest request =
       ImportProductsRequest.newBuilder()
           .setParent(
               BranchName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]").toString())
           .setRequestId("requestId693933066")
           .setInputConfig(ProductInputConfig.newBuilder().build())
           .setErrorsConfig(ImportErrorsConfig.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .setNotificationPubsubTopic("notificationPubsubTopic-1361224991")
           .build();
   ApiFuture<Operation> future =
       productServiceClient.importProductsCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ImportProductsRequest](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ImportProductsRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)\>

### importProductsOperationCallable()

```
public final OperationCallable<ImportProductsRequest,ImportProductsResponse,ImportMetadata> importProductsOperationCallable()
```

Bulk import of multiple Products.

Request processing may be synchronous. No partial updating is supported. Non-existing items are created.

Note that it is possible for a subset of the Products to be successfully updated.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   ImportProductsRequest request =
       ImportProductsRequest.newBuilder()
           .setParent(
               BranchName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]").toString())
           .setRequestId("requestId693933066")
           .setInputConfig(ProductInputConfig.newBuilder().build())
           .setErrorsConfig(ImportErrorsConfig.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .setNotificationPubsubTopic("notificationPubsubTopic-1361224991")
           .build();
   OperationFuture<ImportProductsResponse, ImportMetadata> future =
       productServiceClient.importProductsOperationCallable().futureCall(request);
   // Do something.
   ImportProductsResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[ImportProductsRequest](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ImportProductsRequest),[ImportProductsResponse](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ImportProductsResponse),[ImportMetadata](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ImportMetadata)\>

### isShutdown()

```
public boolean isShutdown()
```

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### isTerminated()

```
public boolean isTerminated()
```

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### listProducts(BranchName parent)

```
public final ProductServiceClient.ListProductsPagedResponse listProducts(BranchName parent)
```

Gets a list of Products.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   BranchName parent = BranchName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]");
   for (Product element : productServiceClient.listProducts(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

parent

`[BranchName](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.BranchName)`  

Required. The parent branch resource name, such as `projects/*/locations/global/catalogs/default_catalog/branches/0`. Use `default_branch` as the branch ID, to list products under the default branch.

If the caller does not have permission to list Products under this branch, regardless of whether or not this branch exists, a PERMISSION\_DENIED error is returned.

**Returns**

**Type**

**Description**

[ProductServiceClient.ListProductsPagedResponse](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ProductServiceClient.ListProductsPagedResponse)

### listProducts(ListProductsRequest request)

```
public final ProductServiceClient.ListProductsPagedResponse listProducts(ListProductsRequest request)
```

Gets a list of Products.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   ListProductsRequest request =
       ListProductsRequest.newBuilder()
           .setParent(
               BranchName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .setReadMask(FieldMask.newBuilder().build())
           .setRequireTotalSize(true)
           .build();
   for (Product element : productServiceClient.listProducts(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[ListProductsRequest](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ListProductsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[ProductServiceClient.ListProductsPagedResponse](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ProductServiceClient.ListProductsPagedResponse)

### listProducts(String parent)

```
public final ProductServiceClient.ListProductsPagedResponse listProducts(String parent)
```

Gets a list of Products.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   String parent = BranchName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]").toString();
   for (Product element : productServiceClient.listProducts(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

parent

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The parent branch resource name, such as `projects/*/locations/global/catalogs/default_catalog/branches/0`. Use `default_branch` as the branch ID, to list products under the default branch.

If the caller does not have permission to list Products under this branch, regardless of whether or not this branch exists, a PERMISSION\_DENIED error is returned.

**Returns**

**Type**

**Description**

[ProductServiceClient.ListProductsPagedResponse](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ProductServiceClient.ListProductsPagedResponse)

### listProductsCallable()

```
public final UnaryCallable<ListProductsRequest,ListProductsResponse> listProductsCallable()
```

Gets a list of Products.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   ListProductsRequest request =
       ListProductsRequest.newBuilder()
           .setParent(
               BranchName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .setReadMask(FieldMask.newBuilder().build())
           .setRequireTotalSize(true)
           .build();
   while (true) {
     ListProductsResponse response = productServiceClient.listProductsCallable().call(request);
     for (Product element : response.getProductsList()) {
       // doThingsWith(element);
     }
     String nextPageToken = response.getNextPageToken();
     if (!Strings.isNullOrEmpty(nextPageToken)) {
       request = request.toBuilder().setPageToken(nextPageToken).build();
     } else {
       break;
     }
   }
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListProductsRequest](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ListProductsRequest),[ListProductsResponse](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ListProductsResponse)\>

### listProductsPagedCallable()

```
public final UnaryCallable<ListProductsRequest,ProductServiceClient.ListProductsPagedResponse> listProductsPagedCallable()
```

Gets a list of Products.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   ListProductsRequest request =
       ListProductsRequest.newBuilder()
           .setParent(
               BranchName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .setReadMask(FieldMask.newBuilder().build())
           .setRequireTotalSize(true)
           .build();
   ApiFuture<Product> future =
       productServiceClient.listProductsPagedCallable().futureCall(request);
   // Do something.
   for (Product element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListProductsRequest](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ListProductsRequest),[ListProductsPagedResponse](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ProductServiceClient.ListProductsPagedResponse)\>

### purgeProductsAsync(PurgeProductsRequest request)

```
public final OperationFuture<PurgeProductsResponse,PurgeProductsMetadata> purgeProductsAsync(PurgeProductsRequest request)
```

Permanently deletes all selected Products under a branch.

This process is asynchronous. If the request is valid, the removal will be enqueued and processed offline. Depending on the number of Products, this operation could take hours to complete. Before the operation completes, some Products may still be returned by GetProduct or ListProducts.

Depending on the number of Products, this operation could take hours to complete. To get a sample of Products that would be deleted, set PurgeProductsRequest.force to false.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   PurgeProductsRequest request =
       PurgeProductsRequest.newBuilder()
           .setParent(
               BranchName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]").toString())
           .setFilter("filter-1274492040")
           .setForce(true)
           .build();
   PurgeProductsResponse response = productServiceClient.purgeProductsAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[PurgeProductsRequest](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.PurgeProductsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[PurgeProductsResponse](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.PurgeProductsResponse),[PurgeProductsMetadata](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.PurgeProductsMetadata)\>

### purgeProductsCallable()

```
public final UnaryCallable<PurgeProductsRequest,Operation> purgeProductsCallable()
```

Permanently deletes all selected Products under a branch.

This process is asynchronous. If the request is valid, the removal will be enqueued and processed offline. Depending on the number of Products, this operation could take hours to complete. Before the operation completes, some Products may still be returned by GetProduct or ListProducts.

Depending on the number of Products, this operation could take hours to complete. To get a sample of Products that would be deleted, set PurgeProductsRequest.force to false.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   PurgeProductsRequest request =
       PurgeProductsRequest.newBuilder()
           .setParent(
               BranchName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]").toString())
           .setFilter("filter-1274492040")
           .setForce(true)
           .build();
   ApiFuture<Operation> future =
       productServiceClient.purgeProductsCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[PurgeProductsRequest](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.PurgeProductsRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)\>

### purgeProductsOperationCallable()

```
public final OperationCallable<PurgeProductsRequest,PurgeProductsResponse,PurgeProductsMetadata> purgeProductsOperationCallable()
```

Permanently deletes all selected Products under a branch.

This process is asynchronous. If the request is valid, the removal will be enqueued and processed offline. Depending on the number of Products, this operation could take hours to complete. Before the operation completes, some Products may still be returned by GetProduct or ListProducts.

Depending on the number of Products, this operation could take hours to complete. To get a sample of Products that would be deleted, set PurgeProductsRequest.force to false.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   PurgeProductsRequest request =
       PurgeProductsRequest.newBuilder()
           .setParent(
               BranchName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]").toString())
           .setFilter("filter-1274492040")
           .setForce(true)
           .build();
   OperationFuture<PurgeProductsResponse, PurgeProductsMetadata> future =
       productServiceClient.purgeProductsOperationCallable().futureCall(request);
   // Do something.
   PurgeProductsResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[PurgeProductsRequest](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.PurgeProductsRequest),[PurgeProductsResponse](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.PurgeProductsResponse),[PurgeProductsMetadata](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.PurgeProductsMetadata)\>

### removeFulfillmentPlacesAsync(ProductName product)

```
public final OperationFuture<RemoveFulfillmentPlacesResponse,RemoveFulfillmentPlacesMetadata> removeFulfillmentPlacesAsync(ProductName product)
```

Incrementally removes place IDs from a Product.fulfillment\_info.place\_ids.

This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the removed place IDs are not immediately manifested in the Product queried by GetProduct or ListProducts.

This feature is only available for users who have Retail Search enabled. Please enable Retail Search on Cloud Console before using this feature.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   ProductName product =
       ProductName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]", "[PRODUCT]");
   RemoveFulfillmentPlacesResponse response =
       productServiceClient.removeFulfillmentPlacesAsync(product).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

product

`[ProductName](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ProductName)`  

Required. Full resource name of Product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`.

If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION\_DENIED error is returned.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[RemoveFulfillmentPlacesResponse](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.RemoveFulfillmentPlacesResponse),[RemoveFulfillmentPlacesMetadata](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.RemoveFulfillmentPlacesMetadata)\>

### removeFulfillmentPlacesAsync(RemoveFulfillmentPlacesRequest request)

```
public final OperationFuture<RemoveFulfillmentPlacesResponse,RemoveFulfillmentPlacesMetadata> removeFulfillmentPlacesAsync(RemoveFulfillmentPlacesRequest request)
```

Incrementally removes place IDs from a Product.fulfillment\_info.place\_ids.

This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the removed place IDs are not immediately manifested in the Product queried by GetProduct or ListProducts.

This feature is only available for users who have Retail Search enabled. Please enable Retail Search on Cloud Console before using this feature.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   RemoveFulfillmentPlacesRequest request =
       RemoveFulfillmentPlacesRequest.newBuilder()
           .setProduct(
               ProductName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]", "[PRODUCT]")
                   .toString())
           .setType("type3575610")
           .addAllPlaceIds(new ArrayList<String>())
           .setRemoveTime(Timestamp.newBuilder().build())
           .setAllowMissing(true)
           .build();
   RemoveFulfillmentPlacesResponse response =
       productServiceClient.removeFulfillmentPlacesAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[RemoveFulfillmentPlacesRequest](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.RemoveFulfillmentPlacesRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[RemoveFulfillmentPlacesResponse](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.RemoveFulfillmentPlacesResponse),[RemoveFulfillmentPlacesMetadata](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.RemoveFulfillmentPlacesMetadata)\>

### removeFulfillmentPlacesAsync(String product)

```
public final OperationFuture<RemoveFulfillmentPlacesResponse,RemoveFulfillmentPlacesMetadata> removeFulfillmentPlacesAsync(String product)
```

Incrementally removes place IDs from a Product.fulfillment\_info.place\_ids.

This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the removed place IDs are not immediately manifested in the Product queried by GetProduct or ListProducts.

This feature is only available for users who have Retail Search enabled. Please enable Retail Search on Cloud Console before using this feature.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   String product =
       ProductName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]", "[PRODUCT]")
           .toString();
   RemoveFulfillmentPlacesResponse response =
       productServiceClient.removeFulfillmentPlacesAsync(product).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

product

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Full resource name of Product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`.

If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION\_DENIED error is returned.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[RemoveFulfillmentPlacesResponse](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.RemoveFulfillmentPlacesResponse),[RemoveFulfillmentPlacesMetadata](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.RemoveFulfillmentPlacesMetadata)\>

### removeFulfillmentPlacesCallable()

```
public final UnaryCallable<RemoveFulfillmentPlacesRequest,Operation> removeFulfillmentPlacesCallable()
```

Incrementally removes place IDs from a Product.fulfillment\_info.place\_ids.

This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the removed place IDs are not immediately manifested in the Product queried by GetProduct or ListProducts.

This feature is only available for users who have Retail Search enabled. Please enable Retail Search on Cloud Console before using this feature.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   RemoveFulfillmentPlacesRequest request =
       RemoveFulfillmentPlacesRequest.newBuilder()
           .setProduct(
               ProductName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]", "[PRODUCT]")
                   .toString())
           .setType("type3575610")
           .addAllPlaceIds(new ArrayList<String>())
           .setRemoveTime(Timestamp.newBuilder().build())
           .setAllowMissing(true)
           .build();
   ApiFuture<Operation> future =
       productServiceClient.removeFulfillmentPlacesCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[RemoveFulfillmentPlacesRequest](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.RemoveFulfillmentPlacesRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)\>

### removeFulfillmentPlacesOperationCallable()

```
public final OperationCallable<RemoveFulfillmentPlacesRequest,RemoveFulfillmentPlacesResponse,RemoveFulfillmentPlacesMetadata> removeFulfillmentPlacesOperationCallable()
```

Incrementally removes place IDs from a Product.fulfillment\_info.place\_ids.

This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the removed place IDs are not immediately manifested in the Product queried by GetProduct or ListProducts.

This feature is only available for users who have Retail Search enabled. Please enable Retail Search on Cloud Console before using this feature.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   RemoveFulfillmentPlacesRequest request =
       RemoveFulfillmentPlacesRequest.newBuilder()
           .setProduct(
               ProductName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]", "[PRODUCT]")
                   .toString())
           .setType("type3575610")
           .addAllPlaceIds(new ArrayList<String>())
           .setRemoveTime(Timestamp.newBuilder().build())
           .setAllowMissing(true)
           .build();
   OperationFuture<RemoveFulfillmentPlacesResponse, RemoveFulfillmentPlacesMetadata> future =
       productServiceClient.removeFulfillmentPlacesOperationCallable().futureCall(request);
   // Do something.
   RemoveFulfillmentPlacesResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[RemoveFulfillmentPlacesRequest](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.RemoveFulfillmentPlacesRequest),[RemoveFulfillmentPlacesResponse](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.RemoveFulfillmentPlacesResponse),[RemoveFulfillmentPlacesMetadata](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.RemoveFulfillmentPlacesMetadata)\>

### removeLocalInventoriesAsync(ProductName product)

```
public final OperationFuture<RemoveLocalInventoriesResponse,RemoveLocalInventoriesMetadata> removeLocalInventoriesAsync(ProductName product)
```

Remove local inventory information for a Product at a list of places at a removal timestamp.

This process is asynchronous. If the request is valid, the removal will be enqueued and processed downstream. As a consequence, when a response is returned, removals are not immediately manifested in the Product queried by GetProduct or ListProducts.

Local inventory information can only be removed using this method. CreateProduct and UpdateProduct has no effect on local inventories.

This feature is only available for users who have Retail Search enabled. Please enable Retail Search on Cloud Console before using this feature.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   ProductName product =
       ProductName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]", "[PRODUCT]");
   RemoveLocalInventoriesResponse response =
       productServiceClient.removeLocalInventoriesAsync(product).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

product

`[ProductName](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ProductName)`  

Required. Full resource name of Product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`.

If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION\_DENIED error is returned.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[RemoveLocalInventoriesResponse](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.RemoveLocalInventoriesResponse),[RemoveLocalInventoriesMetadata](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.RemoveLocalInventoriesMetadata)\>

### removeLocalInventoriesAsync(RemoveLocalInventoriesRequest request)

```
public final OperationFuture<RemoveLocalInventoriesResponse,RemoveLocalInventoriesMetadata> removeLocalInventoriesAsync(RemoveLocalInventoriesRequest request)
```

Remove local inventory information for a Product at a list of places at a removal timestamp.

This process is asynchronous. If the request is valid, the removal will be enqueued and processed downstream. As a consequence, when a response is returned, removals are not immediately manifested in the Product queried by GetProduct or ListProducts.

Local inventory information can only be removed using this method. CreateProduct and UpdateProduct has no effect on local inventories.

This feature is only available for users who have Retail Search enabled. Please enable Retail Search on Cloud Console before using this feature.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   RemoveLocalInventoriesRequest request =
       RemoveLocalInventoriesRequest.newBuilder()
           .setProduct(
               ProductName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]", "[PRODUCT]")
                   .toString())
           .addAllPlaceIds(new ArrayList<String>())
           .setRemoveTime(Timestamp.newBuilder().build())
           .setAllowMissing(true)
           .build();
   RemoveLocalInventoriesResponse response =
       productServiceClient.removeLocalInventoriesAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[RemoveLocalInventoriesRequest](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.RemoveLocalInventoriesRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[RemoveLocalInventoriesResponse](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.RemoveLocalInventoriesResponse),[RemoveLocalInventoriesMetadata](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.RemoveLocalInventoriesMetadata)\>

### removeLocalInventoriesAsync(String product)

```
public final OperationFuture<RemoveLocalInventoriesResponse,RemoveLocalInventoriesMetadata> removeLocalInventoriesAsync(String product)
```

Remove local inventory information for a Product at a list of places at a removal timestamp.

This process is asynchronous. If the request is valid, the removal will be enqueued and processed downstream. As a consequence, when a response is returned, removals are not immediately manifested in the Product queried by GetProduct or ListProducts.

Local inventory information can only be removed using this method. CreateProduct and UpdateProduct has no effect on local inventories.

This feature is only available for users who have Retail Search enabled. Please enable Retail Search on Cloud Console before using this feature.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   String product =
       ProductName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]", "[PRODUCT]")
           .toString();
   RemoveLocalInventoriesResponse response =
       productServiceClient.removeLocalInventoriesAsync(product).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

product

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Full resource name of Product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`.

If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION\_DENIED error is returned.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[RemoveLocalInventoriesResponse](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.RemoveLocalInventoriesResponse),[RemoveLocalInventoriesMetadata](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.RemoveLocalInventoriesMetadata)\>

### removeLocalInventoriesCallable()

```
public final UnaryCallable<RemoveLocalInventoriesRequest,Operation> removeLocalInventoriesCallable()
```

Remove local inventory information for a Product at a list of places at a removal timestamp.

This process is asynchronous. If the request is valid, the removal will be enqueued and processed downstream. As a consequence, when a response is returned, removals are not immediately manifested in the Product queried by GetProduct or ListProducts.

Local inventory information can only be removed using this method. CreateProduct and UpdateProduct has no effect on local inventories.

This feature is only available for users who have Retail Search enabled. Please enable Retail Search on Cloud Console before using this feature.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   RemoveLocalInventoriesRequest request =
       RemoveLocalInventoriesRequest.newBuilder()
           .setProduct(
               ProductName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]", "[PRODUCT]")
                   .toString())
           .addAllPlaceIds(new ArrayList<String>())
           .setRemoveTime(Timestamp.newBuilder().build())
           .setAllowMissing(true)
           .build();
   ApiFuture<Operation> future =
       productServiceClient.removeLocalInventoriesCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[RemoveLocalInventoriesRequest](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.RemoveLocalInventoriesRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)\>

### removeLocalInventoriesOperationCallable()

```
public final OperationCallable<RemoveLocalInventoriesRequest,RemoveLocalInventoriesResponse,RemoveLocalInventoriesMetadata> removeLocalInventoriesOperationCallable()
```

Remove local inventory information for a Product at a list of places at a removal timestamp.

This process is asynchronous. If the request is valid, the removal will be enqueued and processed downstream. As a consequence, when a response is returned, removals are not immediately manifested in the Product queried by GetProduct or ListProducts.

Local inventory information can only be removed using this method. CreateProduct and UpdateProduct has no effect on local inventories.

This feature is only available for users who have Retail Search enabled. Please enable Retail Search on Cloud Console before using this feature.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   RemoveLocalInventoriesRequest request =
       RemoveLocalInventoriesRequest.newBuilder()
           .setProduct(
               ProductName.of("[PROJECT]", "[LOCATION]", "[CATALOG]", "[BRANCH]", "[PRODUCT]")
                   .toString())
           .addAllPlaceIds(new ArrayList<String>())
           .setRemoveTime(Timestamp.newBuilder().build())
           .setAllowMissing(true)
           .build();
   OperationFuture<RemoveLocalInventoriesResponse, RemoveLocalInventoriesMetadata> future =
       productServiceClient.removeLocalInventoriesOperationCallable().futureCall(request);
   // Do something.
   RemoveLocalInventoriesResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[RemoveLocalInventoriesRequest](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.RemoveLocalInventoriesRequest),[RemoveLocalInventoriesResponse](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.RemoveLocalInventoriesResponse),[RemoveLocalInventoriesMetadata](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.RemoveLocalInventoriesMetadata)\>

### setInventoryAsync(Product inventory, FieldMask setMask)

```
public final OperationFuture<SetInventoryResponse,SetInventoryMetadata> setInventoryAsync(Product inventory, FieldMask setMask)
```

Updates inventory information for a Product while respecting the last update timestamps of each inventory field.

This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by GetProduct or ListProducts.

When inventory is updated with CreateProduct and UpdateProduct, the specified inventory field value(s) will overwrite any existing value(s) while ignoring the last update time for this field. Furthermore, the last update time for the specified inventory fields will be overwritten to the time of the CreateProduct or UpdateProduct request.

If no inventory fields are set in CreateProductRequest.product, then any pre-existing inventory information for this product will be used.

If no inventory fields are set in SetInventoryRequest.set\_mask, then any existing inventory information will be preserved.

Pre-existing inventory information can only be updated with SetInventory, AddFulfillmentPlaces, and RemoveFulfillmentPlaces.

This feature is only available for users who have Retail Search enabled. Please enable Retail Search on Cloud Console before using this feature.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   Product inventory = Product.newBuilder().build();
   FieldMask setMask = FieldMask.newBuilder().build();
   SetInventoryResponse response =
       productServiceClient.setInventoryAsync(inventory, setMask).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

inventory

`[Product](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.Product)`  

Required. The inventory information to update. The allowable fields to update are:

-   Product.price\_info
-   Product.availability
-   Product.available\_quantity
-   Product.fulfillment\_info The updated inventory fields must be specified in SetInventoryRequest.set\_mask.

If \[SetInventoryRequest.inventory.name\]\[\] is empty or invalid, an INVALID\_ARGUMENT error is returned.

If the caller does not have permission to update the Product named in Product.name, regardless of whether or not it exists, a PERMISSION\_DENIED error is returned.

If the Product to update does not have existing inventory information, the provided inventory information will be inserted.

If the Product to update has existing inventory information, the provided inventory information will be merged while respecting the last update time for each inventory field, using the provided or default value for SetInventoryRequest.set\_time.

The caller can replace place IDs for a subset of fulfillment types in the following ways:

-   Adds "fulfillment\_info" in SetInventoryRequest.set\_mask
-   Specifies only the desired fulfillment types and corresponding place IDs to update in \[SetInventoryRequest.inventory.fulfillment\_info\]\[\]

The caller can clear all place IDs from a subset of fulfillment types in the following ways:

-   Adds "fulfillment\_info" in SetInventoryRequest.set\_mask
-   Specifies only the desired fulfillment types to clear in \[SetInventoryRequest.inventory.fulfillment\_info\]\[\]
-   Checks that only the desired fulfillment info types have empty \[SetInventoryRequest.inventory.fulfillment\_info.place\_ids\]\[\]

The last update time is recorded for the following inventory fields:

-   Product.price\_info
-   Product.availability
-   Product.available\_quantity
-   Product.fulfillment\_info

If a full overwrite of inventory information while ignoring timestamps is needed, \[UpdateProduct\]\[\] should be invoked instead.

setMask

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`  

Indicates which inventory fields in the provided Product to update.

At least one field must be provided.

If an unsupported or unknown field is provided, an INVALID\_ARGUMENT error is returned and the entire update will be ignored.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[SetInventoryResponse](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.SetInventoryResponse),[SetInventoryMetadata](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.SetInventoryMetadata)\>

### setInventoryAsync(SetInventoryRequest request)

```
public final OperationFuture<SetInventoryResponse,SetInventoryMetadata> setInventoryAsync(SetInventoryRequest request)
```

Updates inventory information for a Product while respecting the last update timestamps of each inventory field.

This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by GetProduct or ListProducts.

When inventory is updated with CreateProduct and UpdateProduct, the specified inventory field value(s) will overwrite any existing value(s) while ignoring the last update time for this field. Furthermore, the last update time for the specified inventory fields will be overwritten to the time of the CreateProduct or UpdateProduct request.

If no inventory fields are set in CreateProductRequest.product, then any pre-existing inventory information for this product will be used.

If no inventory fields are set in SetInventoryRequest.set\_mask, then any existing inventory information will be preserved.

Pre-existing inventory information can only be updated with SetInventory, AddFulfillmentPlaces, and RemoveFulfillmentPlaces.

This feature is only available for users who have Retail Search enabled. Please enable Retail Search on Cloud Console before using this feature.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   SetInventoryRequest request =
       SetInventoryRequest.newBuilder()
           .setInventory(Product.newBuilder().build())
           .setSetMask(FieldMask.newBuilder().build())
           .setSetTime(Timestamp.newBuilder().build())
           .setAllowMissing(true)
           .build();
   SetInventoryResponse response = productServiceClient.setInventoryAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[SetInventoryRequest](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.SetInventoryRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[SetInventoryResponse](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.SetInventoryResponse),[SetInventoryMetadata](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.SetInventoryMetadata)\>

### setInventoryCallable()

```
public final UnaryCallable<SetInventoryRequest,Operation> setInventoryCallable()
```

Updates inventory information for a Product while respecting the last update timestamps of each inventory field.

This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by GetProduct or ListProducts.

When inventory is updated with CreateProduct and UpdateProduct, the specified inventory field value(s) will overwrite any existing value(s) while ignoring the last update time for this field. Furthermore, the last update time for the specified inventory fields will be overwritten to the time of the CreateProduct or UpdateProduct request.

If no inventory fields are set in CreateProductRequest.product, then any pre-existing inventory information for this product will be used.

If no inventory fields are set in SetInventoryRequest.set\_mask, then any existing inventory information will be preserved.

Pre-existing inventory information can only be updated with SetInventory, AddFulfillmentPlaces, and RemoveFulfillmentPlaces.

This feature is only available for users who have Retail Search enabled. Please enable Retail Search on Cloud Console before using this feature.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   SetInventoryRequest request =
       SetInventoryRequest.newBuilder()
           .setInventory(Product.newBuilder().build())
           .setSetMask(FieldMask.newBuilder().build())
           .setSetTime(Timestamp.newBuilder().build())
           .setAllowMissing(true)
           .build();
   ApiFuture<Operation> future = productServiceClient.setInventoryCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[SetInventoryRequest](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.SetInventoryRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)\>

### setInventoryOperationCallable()

```
public final OperationCallable<SetInventoryRequest,SetInventoryResponse,SetInventoryMetadata> setInventoryOperationCallable()
```

Updates inventory information for a Product while respecting the last update timestamps of each inventory field.

This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by GetProduct or ListProducts.

When inventory is updated with CreateProduct and UpdateProduct, the specified inventory field value(s) will overwrite any existing value(s) while ignoring the last update time for this field. Furthermore, the last update time for the specified inventory fields will be overwritten to the time of the CreateProduct or UpdateProduct request.

If no inventory fields are set in CreateProductRequest.product, then any pre-existing inventory information for this product will be used.

If no inventory fields are set in SetInventoryRequest.set\_mask, then any existing inventory information will be preserved.

Pre-existing inventory information can only be updated with SetInventory, AddFulfillmentPlaces, and RemoveFulfillmentPlaces.

This feature is only available for users who have Retail Search enabled. Please enable Retail Search on Cloud Console before using this feature.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   SetInventoryRequest request =
       SetInventoryRequest.newBuilder()
           .setInventory(Product.newBuilder().build())
           .setSetMask(FieldMask.newBuilder().build())
           .setSetTime(Timestamp.newBuilder().build())
           .setAllowMissing(true)
           .build();
   OperationFuture<SetInventoryResponse, SetInventoryMetadata> future =
       productServiceClient.setInventoryOperationCallable().futureCall(request);
   // Do something.
   SetInventoryResponse response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[OperationCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[SetInventoryRequest](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.SetInventoryRequest),[SetInventoryResponse](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.SetInventoryResponse),[SetInventoryMetadata](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.SetInventoryMetadata)\>

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

### updateProduct(Product product, FieldMask updateMask)

```
public final Product updateProduct(Product product, FieldMask updateMask)
```

Updates a Product.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   Product product = Product.newBuilder().build();
   FieldMask updateMask = FieldMask.newBuilder().build();
   Product response = productServiceClient.updateProduct(product, updateMask);
 }
 
```
 

**Parameters**

**Name**

**Description**

product

`[Product](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.Product)`  

Required. The product to update/create.

If the caller does not have permission to update the Product, regardless of whether or not it exists, a PERMISSION\_DENIED error is returned.

If the Product to update does not exist and allow\_missing is not set, a NOT\_FOUND error is returned.

updateMask

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`  

Indicates which fields in the provided Product to update. The immutable and output only fields are NOT supported. If not set, all supported fields (the fields that are neither immutable nor output only) are updated.

If an unsupported or unknown field is provided, an INVALID\_ARGUMENT error is returned.

**Returns**

**Type**

**Description**

[Product](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.Product)

### updateProduct(UpdateProductRequest request)

```
public final Product updateProduct(UpdateProductRequest request)
```

Updates a Product.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   UpdateProductRequest request =
       UpdateProductRequest.newBuilder()
           .setProduct(Product.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .setAllowMissing(true)
           .build();
   Product response = productServiceClient.updateProduct(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[UpdateProductRequest](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.UpdateProductRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[Product](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.Product)

### updateProductCallable()

```
public final UnaryCallable<UpdateProductRequest,Product> updateProductCallable()
```

Updates a Product.

Sample code:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ProductServiceClient productServiceClient = ProductServiceClient.create()) {
   UpdateProductRequest request =
       UpdateProductRequest.newBuilder()
           .setProduct(Product.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .setAllowMissing(true)
           .build();
   ApiFuture<Product> future = productServiceClient.updateProductCallable().futureCall(request);
   // Do something.
   Product response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateProductRequest](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.UpdateProductRequest),[Product](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.Product)\>

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
