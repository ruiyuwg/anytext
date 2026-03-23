-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ProductServiceGrpc.AsyncService (2.53.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

```
public static interface ProductServiceGrpc.AsyncService
```

Service for ingesting Product information of the customer's website.

## Methods

### addFulfillmentPlaces(AddFulfillmentPlacesRequest request, StreamObserver<Operation> responseObserver)

```
public default void addFulfillmentPlaces(AddFulfillmentPlacesRequest request, StreamObserver<Operation> responseObserver)
```

We recommend that you use the ProductService.AddLocalInventories method instead of the ProductService.AddFulfillmentPlaces method. ProductService.AddLocalInventories achieves the same results but provides more fine-grained control over ingesting local inventory data. Incrementally adds place IDs to Product.fulfillment\_info.place\_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the added place IDs are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT\_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.

**Parameters**

**Name**

**Description**

`request`

`[AddFulfillmentPlacesRequest](/java/docs/reference/google-cloud-retail/2.53.0/com.google.cloud.retail.v2beta.AddFulfillmentPlacesRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### addLocalInventories(AddLocalInventoriesRequest request, StreamObserver<Operation> responseObserver)

```
public default void addLocalInventories(AddLocalInventoriesRequest request, StreamObserver<Operation> responseObserver)
```

Updates local inventory information for a Product at a list of places, while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating inventory information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be modified using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT\_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.

**Parameters**

**Name**

**Description**

`request`

`[AddLocalInventoriesRequest](/java/docs/reference/google-cloud-retail/2.53.0/com.google.cloud.retail.v2beta.AddLocalInventoriesRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### createProduct(CreateProductRequest request, StreamObserver<Product> responseObserver)

```
public default void createProduct(CreateProductRequest request, StreamObserver<Product> responseObserver)
```

Creates a Product.

**Parameters**

**Name**

**Description**

`request`

`[CreateProductRequest](/java/docs/reference/google-cloud-retail/2.53.0/com.google.cloud.retail.v2beta.CreateProductRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Product](/java/docs/reference/google-cloud-retail/2.53.0/com.google.cloud.retail.v2beta.Product)>`  

### deleteProduct(DeleteProductRequest request, StreamObserver<Empty> responseObserver)

```
public default void deleteProduct(DeleteProductRequest request, StreamObserver<Empty> responseObserver)
```

Deletes a Product.

**Parameters**

**Name**

**Description**

`request`

`[DeleteProductRequest](/java/docs/reference/google-cloud-retail/2.53.0/com.google.cloud.retail.v2beta.DeleteProductRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### getProduct(GetProductRequest request, StreamObserver<Product> responseObserver)

```
public default void getProduct(GetProductRequest request, StreamObserver<Product> responseObserver)
```

Gets a Product.

**Parameters**

**Name**

**Description**

`request`

`[GetProductRequest](/java/docs/reference/google-cloud-retail/2.53.0/com.google.cloud.retail.v2beta.GetProductRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Product](/java/docs/reference/google-cloud-retail/2.53.0/com.google.cloud.retail.v2beta.Product)>`  

### importProducts(ImportProductsRequest request, StreamObserver<Operation> responseObserver)

```
public default void importProducts(ImportProductsRequest request, StreamObserver<Operation> responseObserver)
```

Bulk import of multiple Products. Request processing may be synchronous. Non-existing items are created. Note that it is possible for a subset of the Products to be successfully updated.

**Parameters**

**Name**

**Description**

`request`

`[ImportProductsRequest](/java/docs/reference/google-cloud-retail/2.53.0/com.google.cloud.retail.v2beta.ImportProductsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### listProducts(ListProductsRequest request, StreamObserver<ListProductsResponse> responseObserver)

```
public default void listProducts(ListProductsRequest request, StreamObserver<ListProductsResponse> responseObserver)
```

Gets a list of Products.

**Parameters**

**Name**

**Description**

`request`

`[ListProductsRequest](/java/docs/reference/google-cloud-retail/2.53.0/com.google.cloud.retail.v2beta.ListProductsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListProductsResponse](/java/docs/reference/google-cloud-retail/2.53.0/com.google.cloud.retail.v2beta.ListProductsResponse)>`  

### purgeProducts(PurgeProductsRequest request, StreamObserver<Operation> responseObserver)

```
public default void purgeProducts(PurgeProductsRequest request, StreamObserver<Operation> responseObserver)
```

Permanently deletes all selected Products under a branch. This process is asynchronous. If the request is valid, the removal will be enqueued and processed offline. Depending on the number of Products, this operation could take hours to complete. Before the operation completes, some Products may still be returned by ProductService.GetProduct or ProductService.ListProducts. Depending on the number of Products, this operation could take hours to complete. To get a sample of Products that would be deleted, set PurgeProductsRequest.force to false.

**Parameters**

**Name**

**Description**

`request`

`[PurgeProductsRequest](/java/docs/reference/google-cloud-retail/2.53.0/com.google.cloud.retail.v2beta.PurgeProductsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### removeFulfillmentPlaces(RemoveFulfillmentPlacesRequest request, StreamObserver<Operation> responseObserver)

```
public default void removeFulfillmentPlaces(RemoveFulfillmentPlacesRequest request, StreamObserver<Operation> responseObserver)
```

We recommend that you use the ProductService.RemoveLocalInventories method instead of the ProductService.RemoveFulfillmentPlaces method. ProductService.RemoveLocalInventories achieves the same results but provides more fine-grained control over ingesting local inventory data. Incrementally removes place IDs from a Product.fulfillment\_info.place\_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the removed place IDs are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT\_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.

**Parameters**

**Name**

**Description**

`request`

`[RemoveFulfillmentPlacesRequest](/java/docs/reference/google-cloud-retail/2.53.0/com.google.cloud.retail.v2beta.RemoveFulfillmentPlacesRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### removeLocalInventories(RemoveLocalInventoriesRequest request, StreamObserver<Operation> responseObserver)

```
public default void removeLocalInventories(RemoveLocalInventoriesRequest request, StreamObserver<Operation> responseObserver)
```

Remove local inventory information for a Product at a list of places at a removal timestamp. This process is asynchronous. If the request is valid, the removal will be enqueued and processed downstream. As a consequence, when a response is returned, removals are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be removed using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT\_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.

**Parameters**

**Name**

**Description**

`request`

`[RemoveLocalInventoriesRequest](/java/docs/reference/google-cloud-retail/2.53.0/com.google.cloud.retail.v2beta.RemoveLocalInventoriesRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### setInventory(SetInventoryRequest request, StreamObserver<Operation> responseObserver)

```
public default void setInventory(SetInventoryRequest request, StreamObserver<Operation> responseObserver)
```

Updates inventory information for a Product while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update is enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. When inventory is updated with ProductService.CreateProduct and ProductService.UpdateProduct, the specified inventory field value(s) overwrite any existing value(s) while ignoring the last update time for this field. Furthermore, the last update times for the specified inventory fields are overwritten by the times of the ProductService.CreateProduct or ProductService.UpdateProduct request. If no inventory fields are set in CreateProductRequest.product, then any pre-existing inventory information for this product is used. If no inventory fields are set in SetInventoryRequest.set\_mask, then any existing inventory information is preserved. Pre-existing inventory information can only be updated with ProductService.SetInventory, ProductService.AddFulfillmentPlaces, and ProductService.RemoveFulfillmentPlaces. The returned Operations is obsolete after one day, and the GetOperation API returns `NOT_FOUND` afterwards. If conflicting updates are issued, the Operations associated with the stale updates are not marked as done until they are obsolete.

**Parameters**

**Name**

**Description**

`request`

`[SetInventoryRequest](/java/docs/reference/google-cloud-retail/2.53.0/com.google.cloud.retail.v2beta.SetInventoryRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### updateProduct(UpdateProductRequest request, StreamObserver<Product> responseObserver)

```
public default void updateProduct(UpdateProductRequest request, StreamObserver<Product> responseObserver)
```

Updates a Product.

**Parameters**

**Name**

**Description**

`request`

`[UpdateProductRequest](/java/docs/reference/google-cloud-retail/2.53.0/com.google.cloud.retail.v2beta.UpdateProductRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Product](/java/docs/reference/google-cloud-retail/2.53.0/com.google.cloud.retail.v2beta.Product)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
