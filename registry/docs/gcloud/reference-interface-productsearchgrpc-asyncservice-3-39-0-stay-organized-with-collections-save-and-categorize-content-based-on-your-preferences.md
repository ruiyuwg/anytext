-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ProductSearchGrpc.AsyncService (3.39.0) Stay organized with collections Save and categorize content based on your preferences.

3.85.0 (latest) 3.83.0 3.81.0 3.80.0 3.78.0 3.76.0 3.74.0 3.73.0 3.72.0 3.71.0 3.70.0 3.68.0 3.66.0 3.65.0 3.62.0 3.61.0 3.60.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.3 2.1.4 2.0.29

```
public static interface ProductSearchGrpc.AsyncService
```

Manages Products and ProductSets of reference images for use in product search. It uses the following resource model:

-   The API has a collection of ProductSet resources, named `projects/*/locations/*/productSets/*`, which acts as a way to put different products into groups to limit identification. In parallel,
-   The API has a collection of Product resources, named `projects/*/locations/*/products/*`
-   Each Product has a collection of ReferenceImage resources, named `projects/*/locations/*/products/*/referenceImages/*`

## Methods

### addProductToProductSet(AddProductToProductSetRequest request, StreamObserver<Empty> responseObserver)

```
public default void addProductToProductSet(AddProductToProductSetRequest request, StreamObserver<Empty> responseObserver)
```

Adds a Product to the specified ProductSet. If the Product is already present, no change is made. One Product can be added to at most 100 ProductSets. Possible errors:

-   Returns NOT\_FOUND if the Product or the ProductSet doesn't exist.

**Parameters**

**Name**

**Description**

`request`

`[AddProductToProductSetRequest](/java/docs/reference/google-cloud-vision/3.39.0/com.google.cloud.vision.v1p4beta1.AddProductToProductSetRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### createProduct(CreateProductRequest request, StreamObserver<Product> responseObserver)

```
public default void createProduct(CreateProductRequest request, StreamObserver<Product> responseObserver)
```

Creates and returns a new product resource. Possible errors:

-   Returns INVALID\_ARGUMENT if display\_name is missing or longer than 4096 characters.
-   Returns INVALID\_ARGUMENT if description is longer than 4096 characters.
-   Returns INVALID\_ARGUMENT if product\_category is missing or invalid.

**Parameters**

**Name**

**Description**

`request`

`[CreateProductRequest](/java/docs/reference/google-cloud-vision/3.39.0/com.google.cloud.vision.v1p4beta1.CreateProductRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Product](/java/docs/reference/google-cloud-vision/3.39.0/com.google.cloud.vision.v1p4beta1.Product)>`  

### createProductSet(CreateProductSetRequest request, StreamObserver<ProductSet> responseObserver)

```
public default void createProductSet(CreateProductSetRequest request, StreamObserver<ProductSet> responseObserver)
```

Creates and returns a new ProductSet resource. Possible errors:

-   Returns INVALID\_ARGUMENT if display\_name is missing, or is longer than 4096 characters.

**Parameters**

**Name**

**Description**

`request`

`[CreateProductSetRequest](/java/docs/reference/google-cloud-vision/3.39.0/com.google.cloud.vision.v1p4beta1.CreateProductSetRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ProductSet](/java/docs/reference/google-cloud-vision/3.39.0/com.google.cloud.vision.v1p4beta1.ProductSet)>`  

### createReferenceImage(CreateReferenceImageRequest request, StreamObserver<ReferenceImage> responseObserver)

```
public default void createReferenceImage(CreateReferenceImageRequest request, StreamObserver<ReferenceImage> responseObserver)
```

Creates and returns a new ReferenceImage resource. The `bounding_poly` field is optional. If `bounding_poly` is not specified, the system will try to detect regions of interest in the image that are compatible with the product\_category on the parent product. If it is specified, detection is ALWAYS skipped. The system converts polygons into non-rotated rectangles. Note that the pipeline will resize the image if the image resolution is too large to process (above 50MP). Possible errors:

-   Returns INVALID\_ARGUMENT if the image\_uri is missing or longer than 4096 characters.
-   Returns INVALID\_ARGUMENT if the product does not exist.
-   Returns INVALID\_ARGUMENT if bounding\_poly is not provided, and nothing compatible with the parent product's product\_category is detected.
-   Returns INVALID\_ARGUMENT if bounding\_poly contains more than 10 polygons.

**Parameters**

**Name**

**Description**

`request`

`[CreateReferenceImageRequest](/java/docs/reference/google-cloud-vision/3.39.0/com.google.cloud.vision.v1p4beta1.CreateReferenceImageRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ReferenceImage](/java/docs/reference/google-cloud-vision/3.39.0/com.google.cloud.vision.v1p4beta1.ReferenceImage)>`  

### deleteProduct(DeleteProductRequest request, StreamObserver<Empty> responseObserver)

```
public default void deleteProduct(DeleteProductRequest request, StreamObserver<Empty> responseObserver)
```

Permanently deletes a product and its reference images. Metadata of the product and all its images will be deleted right away, but search queries against ProductSets containing the product may still work until all related caches are refreshed.

**Parameters**

**Name**

**Description**

`request`

`[DeleteProductRequest](/java/docs/reference/google-cloud-vision/3.39.0/com.google.cloud.vision.v1p4beta1.DeleteProductRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### deleteProductSet(DeleteProductSetRequest request, StreamObserver<Empty> responseObserver)

```
public default void deleteProductSet(DeleteProductSetRequest request, StreamObserver<Empty> responseObserver)
```

Permanently deletes a ProductSet. Products and ReferenceImages in the ProductSet are not deleted. The actual image files are not deleted from Google Cloud Storage.

**Parameters**

**Name**

**Description**

`request`

`[DeleteProductSetRequest](/java/docs/reference/google-cloud-vision/3.39.0/com.google.cloud.vision.v1p4beta1.DeleteProductSetRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### deleteReferenceImage(DeleteReferenceImageRequest request, StreamObserver<Empty> responseObserver)

```
public default void deleteReferenceImage(DeleteReferenceImageRequest request, StreamObserver<Empty> responseObserver)
```

Permanently deletes a reference image. The image metadata will be deleted right away, but search queries against ProductSets containing the image may still work until all related caches are refreshed. The actual image files are not deleted from Google Cloud Storage.

**Parameters**

**Name**

**Description**

`request`

`[DeleteReferenceImageRequest](/java/docs/reference/google-cloud-vision/3.39.0/com.google.cloud.vision.v1p4beta1.DeleteReferenceImageRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### getProduct(GetProductRequest request, StreamObserver<Product> responseObserver)

```
public default void getProduct(GetProductRequest request, StreamObserver<Product> responseObserver)
```

Gets information associated with a Product. Possible errors:

-   Returns NOT\_FOUND if the Product does not exist.

**Parameters**

**Name**

**Description**

`request`

`[GetProductRequest](/java/docs/reference/google-cloud-vision/3.39.0/com.google.cloud.vision.v1p4beta1.GetProductRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Product](/java/docs/reference/google-cloud-vision/3.39.0/com.google.cloud.vision.v1p4beta1.Product)>`  

### getProductSet(GetProductSetRequest request, StreamObserver<ProductSet> responseObserver)

```
public default void getProductSet(GetProductSetRequest request, StreamObserver<ProductSet> responseObserver)
```

Gets information associated with a ProductSet. Possible errors:

-   Returns NOT\_FOUND if the ProductSet does not exist.

**Parameters**

**Name**

**Description**

`request`

`[GetProductSetRequest](/java/docs/reference/google-cloud-vision/3.39.0/com.google.cloud.vision.v1p4beta1.GetProductSetRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ProductSet](/java/docs/reference/google-cloud-vision/3.39.0/com.google.cloud.vision.v1p4beta1.ProductSet)>`  

### getReferenceImage(GetReferenceImageRequest request, StreamObserver<ReferenceImage> responseObserver)

```
public default void getReferenceImage(GetReferenceImageRequest request, StreamObserver<ReferenceImage> responseObserver)
```

Gets information associated with a ReferenceImage. Possible errors:

-   Returns NOT\_FOUND if the specified image does not exist.

**Parameters**

**Name**

**Description**

`request`

`[GetReferenceImageRequest](/java/docs/reference/google-cloud-vision/3.39.0/com.google.cloud.vision.v1p4beta1.GetReferenceImageRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ReferenceImage](/java/docs/reference/google-cloud-vision/3.39.0/com.google.cloud.vision.v1p4beta1.ReferenceImage)>`  

### importProductSets(ImportProductSetsRequest request, StreamObserver<Operation> responseObserver)

```
public default void importProductSets(ImportProductSetsRequest request, StreamObserver<Operation> responseObserver)
```

Asynchronous API that imports a list of reference images to specified product sets based on a list of image information. The google.longrunning.Operation API can be used to keep track of the progress and results of the request. `Operation.metadata` contains `BatchOperationMetadata`. (progress) `Operation.response` contains `ImportProductSetsResponse`. (results) The input source of this method is a csv file on Google Cloud Storage. For the format of the csv file please see ImportProductSetsGcsSource.csv\_file\_uri.

**Parameters**

**Name**

**Description**

`request`

`[ImportProductSetsRequest](/java/docs/reference/google-cloud-vision/3.39.0/com.google.cloud.vision.v1p4beta1.ImportProductSetsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### listProductSets(ListProductSetsRequest request, StreamObserver<ListProductSetsResponse> responseObserver)

```
public default void listProductSets(ListProductSetsRequest request, StreamObserver<ListProductSetsResponse> responseObserver)
```

Lists ProductSets in an unspecified order. Possible errors:

-   Returns INVALID\_ARGUMENT if page\_size is greater than 100, or less than 1.

**Parameters**

**Name**

**Description**

`request`

`[ListProductSetsRequest](/java/docs/reference/google-cloud-vision/3.39.0/com.google.cloud.vision.v1p4beta1.ListProductSetsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListProductSetsResponse](/java/docs/reference/google-cloud-vision/3.39.0/com.google.cloud.vision.v1p4beta1.ListProductSetsResponse)>`  

### listProducts(ListProductsRequest request, StreamObserver<ListProductsResponse> responseObserver)

```
public default void listProducts(ListProductsRequest request, StreamObserver<ListProductsResponse> responseObserver)
```

Lists products in an unspecified order. Possible errors:

-   Returns INVALID\_ARGUMENT if page\_size is greater than 100 or less than 1.

**Parameters**

**Name**

**Description**

`request`

`[ListProductsRequest](/java/docs/reference/google-cloud-vision/3.39.0/com.google.cloud.vision.v1p4beta1.ListProductsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListProductsResponse](/java/docs/reference/google-cloud-vision/3.39.0/com.google.cloud.vision.v1p4beta1.ListProductsResponse)>`  

### listProductsInProductSet(ListProductsInProductSetRequest request, StreamObserver<ListProductsInProductSetResponse> responseObserver)

```
public default void listProductsInProductSet(ListProductsInProductSetRequest request, StreamObserver<ListProductsInProductSetResponse> responseObserver)
```

Lists the Products in a ProductSet, in an unspecified order. If the ProductSet does not exist, the products field of the response will be empty. Possible errors:

-   Returns INVALID\_ARGUMENT if page\_size is greater than 100 or less than 1.

**Parameters**

**Name**

**Description**

`request`

`[ListProductsInProductSetRequest](/java/docs/reference/google-cloud-vision/3.39.0/com.google.cloud.vision.v1p4beta1.ListProductsInProductSetRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListProductsInProductSetResponse](/java/docs/reference/google-cloud-vision/3.39.0/com.google.cloud.vision.v1p4beta1.ListProductsInProductSetResponse)>`  

### listReferenceImages(ListReferenceImagesRequest request, StreamObserver<ListReferenceImagesResponse> responseObserver)

```
public default void listReferenceImages(ListReferenceImagesRequest request, StreamObserver<ListReferenceImagesResponse> responseObserver)
```

Lists reference images. Possible errors:

-   Returns NOT\_FOUND if the parent product does not exist.
-   Returns INVALID\_ARGUMENT if the page\_size is greater than 100, or less than 1.

**Parameters**

**Name**

**Description**

`request`

`[ListReferenceImagesRequest](/java/docs/reference/google-cloud-vision/3.39.0/com.google.cloud.vision.v1p4beta1.ListReferenceImagesRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListReferenceImagesResponse](/java/docs/reference/google-cloud-vision/3.39.0/com.google.cloud.vision.v1p4beta1.ListReferenceImagesResponse)>`  

### purgeProducts(PurgeProductsRequest request, StreamObserver<Operation> responseObserver)

```
public default void purgeProducts(PurgeProductsRequest request, StreamObserver<Operation> responseObserver)
```

Asynchronous API to delete all Products in a ProductSet or all Products that are in no ProductSet. If a Product is a member of the specified ProductSet in addition to other ProductSets, the Product will still be deleted. It is recommended to not delete the specified ProductSet until after this operation has completed. It is also recommended to not add any of the Products involved in the batch delete to a new ProductSet while this operation is running because those Products may still end up deleted. It's not possible to undo the PurgeProducts operation. Therefore, it is recommended to keep the csv files used in ImportProductSets (if that was how you originally built the Product Set) before starting PurgeProducts, in case you need to re-import the data after deletion. If the plan is to purge all of the Products from a ProductSet and then re-use the empty ProductSet to re-import new Products into the empty ProductSet, you must wait until the PurgeProducts operation has finished for that ProductSet. The google.longrunning.Operation API can be used to keep track of the progress and results of the request. `Operation.metadata` contains `BatchOperationMetadata`. (progress)

**Parameters**

**Name**

**Description**

`request`

`[PurgeProductsRequest](/java/docs/reference/google-cloud-vision/3.39.0/com.google.cloud.vision.v1p4beta1.PurgeProductsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### removeProductFromProductSet(RemoveProductFromProductSetRequest request, StreamObserver<Empty> responseObserver)

```
public default void removeProductFromProductSet(RemoveProductFromProductSetRequest request, StreamObserver<Empty> responseObserver)
```

Removes a Product from the specified ProductSet.

**Parameters**

**Name**

**Description**

`request`

`[RemoveProductFromProductSetRequest](/java/docs/reference/google-cloud-vision/3.39.0/com.google.cloud.vision.v1p4beta1.RemoveProductFromProductSetRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### updateProduct(UpdateProductRequest request, StreamObserver<Product> responseObserver)

```
public default void updateProduct(UpdateProductRequest request, StreamObserver<Product> responseObserver)
```

Makes changes to a Product resource. Only the `display_name`, `description`, and `labels` fields can be updated right now. If labels are updated, the change will not be reflected in queries until the next index time. Possible errors:

-   Returns NOT\_FOUND if the Product does not exist.
-   Returns INVALID\_ARGUMENT if display\_name is present in update\_mask but is missing from the request or longer than 4096 characters.
-   Returns INVALID\_ARGUMENT if description is present in update\_mask but is longer than 4096 characters.
-   Returns INVALID\_ARGUMENT if product\_category is present in update\_mask.

**Parameters**

**Name**

**Description**

`request`

`[UpdateProductRequest](/java/docs/reference/google-cloud-vision/3.39.0/com.google.cloud.vision.v1p4beta1.UpdateProductRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Product](/java/docs/reference/google-cloud-vision/3.39.0/com.google.cloud.vision.v1p4beta1.Product)>`  

### updateProductSet(UpdateProductSetRequest request, StreamObserver<ProductSet> responseObserver)

```
public default void updateProductSet(UpdateProductSetRequest request, StreamObserver<ProductSet> responseObserver)
```

Makes changes to a ProductSet resource. Only display\_name can be updated currently. Possible errors:

-   Returns NOT\_FOUND if the ProductSet does not exist.
-   Returns INVALID\_ARGUMENT if display\_name is present in update\_mask but missing from the request or longer than 4096 characters.

**Parameters**

**Name**

**Description**

`request`

`[UpdateProductSetRequest](/java/docs/reference/google-cloud-vision/3.39.0/com.google.cloud.vision.v1p4beta1.UpdateProductSetRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ProductSet](/java/docs/reference/google-cloud-vision/3.39.0/com.google.cloud.vision.v1p4beta1.ProductSet)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
