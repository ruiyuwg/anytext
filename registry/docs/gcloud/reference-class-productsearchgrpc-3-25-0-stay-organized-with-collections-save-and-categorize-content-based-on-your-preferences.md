-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ProductSearchGrpc (3.25.0) Stay organized with collections Save and categorize content based on your preferences.

3.85.0 (latest) 3.83.0 3.81.0 3.80.0 3.78.0 3.76.0 3.74.0 3.73.0 3.72.0 3.71.0 3.70.0 3.68.0 3.66.0 3.65.0 3.62.0 3.61.0 3.60.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.3 2.1.4 2.0.29

```
public final class ProductSearchGrpc
```

Manages Products and ProductSets of reference images for use in product search. It uses the following resource model:

-   The API has a collection of ProductSet resources, named `projects/*/locations/*/productSets/*`, which acts as a way to put different products into groups to limit identification. In parallel,
-   The API has a collection of Product resources, named `projects/*/locations/*/products/*`
-   Each Product has a collection of ReferenceImage resources, named `projects/*/locations/*/products/*/referenceImages/*`

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> ProductSearchGrpc

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

### bindService(ProductSearchGrpc.AsyncService service)

```
public static final ServerServiceDefinition bindService(ProductSearchGrpc.AsyncService service)
```

**Parameter**

**Name**

**Description**

`service`

`[ProductSearchGrpc.AsyncService](/java/docs/reference/google-cloud-vision/3.25.0/com.google.cloud.vision.v1.ProductSearchGrpc.AsyncService)`  

**Returns**

**Type**

**Description**

`io.grpc.ServerServiceDefinition`

### getAddProductToProductSetMethod()

```
public static MethodDescriptor<AddProductToProductSetRequest,Empty> getAddProductToProductSetMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[AddProductToProductSetRequest](/java/docs/reference/google-cloud-vision/3.25.0/com.google.cloud.vision.v1.AddProductToProductSetRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getCreateProductMethod()

```
public static MethodDescriptor<CreateProductRequest,Product> getCreateProductMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateProductRequest](/java/docs/reference/google-cloud-vision/3.25.0/com.google.cloud.vision.v1.CreateProductRequest),[Product](/java/docs/reference/google-cloud-vision/3.25.0/com.google.cloud.vision.v1.Product)>`

### getCreateProductSetMethod()

```
public static MethodDescriptor<CreateProductSetRequest,ProductSet> getCreateProductSetMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateProductSetRequest](/java/docs/reference/google-cloud-vision/3.25.0/com.google.cloud.vision.v1.CreateProductSetRequest),[ProductSet](/java/docs/reference/google-cloud-vision/3.25.0/com.google.cloud.vision.v1.ProductSet)>`

### getCreateReferenceImageMethod()

```
public static MethodDescriptor<CreateReferenceImageRequest,ReferenceImage> getCreateReferenceImageMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateReferenceImageRequest](/java/docs/reference/google-cloud-vision/3.25.0/com.google.cloud.vision.v1.CreateReferenceImageRequest),[ReferenceImage](/java/docs/reference/google-cloud-vision/3.25.0/com.google.cloud.vision.v1.ReferenceImage)>`

### getDeleteProductMethod()

```
public static MethodDescriptor<DeleteProductRequest,Empty> getDeleteProductMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DeleteProductRequest](/java/docs/reference/google-cloud-vision/3.25.0/com.google.cloud.vision.v1.DeleteProductRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getDeleteProductSetMethod()

```
public static MethodDescriptor<DeleteProductSetRequest,Empty> getDeleteProductSetMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DeleteProductSetRequest](/java/docs/reference/google-cloud-vision/3.25.0/com.google.cloud.vision.v1.DeleteProductSetRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getDeleteReferenceImageMethod()

```
public static MethodDescriptor<DeleteReferenceImageRequest,Empty> getDeleteReferenceImageMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DeleteReferenceImageRequest](/java/docs/reference/google-cloud-vision/3.25.0/com.google.cloud.vision.v1.DeleteReferenceImageRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getGetProductMethod()

```
public static MethodDescriptor<GetProductRequest,Product> getGetProductMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetProductRequest](/java/docs/reference/google-cloud-vision/3.25.0/com.google.cloud.vision.v1.GetProductRequest),[Product](/java/docs/reference/google-cloud-vision/3.25.0/com.google.cloud.vision.v1.Product)>`

### getGetProductSetMethod()

```
public static MethodDescriptor<GetProductSetRequest,ProductSet> getGetProductSetMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetProductSetRequest](/java/docs/reference/google-cloud-vision/3.25.0/com.google.cloud.vision.v1.GetProductSetRequest),[ProductSet](/java/docs/reference/google-cloud-vision/3.25.0/com.google.cloud.vision.v1.ProductSet)>`

### getGetReferenceImageMethod()

```
public static MethodDescriptor<GetReferenceImageRequest,ReferenceImage> getGetReferenceImageMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetReferenceImageRequest](/java/docs/reference/google-cloud-vision/3.25.0/com.google.cloud.vision.v1.GetReferenceImageRequest),[ReferenceImage](/java/docs/reference/google-cloud-vision/3.25.0/com.google.cloud.vision.v1.ReferenceImage)>`

### getImportProductSetsMethod()

```
public static MethodDescriptor<ImportProductSetsRequest,Operation> getImportProductSetsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ImportProductSetsRequest](/java/docs/reference/google-cloud-vision/3.25.0/com.google.cloud.vision.v1.ImportProductSetsRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getListProductSetsMethod()

```
public static MethodDescriptor<ListProductSetsRequest,ListProductSetsResponse> getListProductSetsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListProductSetsRequest](/java/docs/reference/google-cloud-vision/3.25.0/com.google.cloud.vision.v1.ListProductSetsRequest),[ListProductSetsResponse](/java/docs/reference/google-cloud-vision/3.25.0/com.google.cloud.vision.v1.ListProductSetsResponse)>`

### getListProductsInProductSetMethod()

```
public static MethodDescriptor<ListProductsInProductSetRequest,ListProductsInProductSetResponse> getListProductsInProductSetMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListProductsInProductSetRequest](/java/docs/reference/google-cloud-vision/3.25.0/com.google.cloud.vision.v1.ListProductsInProductSetRequest),[ListProductsInProductSetResponse](/java/docs/reference/google-cloud-vision/3.25.0/com.google.cloud.vision.v1.ListProductsInProductSetResponse)>`

### getListProductsMethod()

```
public static MethodDescriptor<ListProductsRequest,ListProductsResponse> getListProductsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListProductsRequest](/java/docs/reference/google-cloud-vision/3.25.0/com.google.cloud.vision.v1.ListProductsRequest),[ListProductsResponse](/java/docs/reference/google-cloud-vision/3.25.0/com.google.cloud.vision.v1.ListProductsResponse)>`

### getListReferenceImagesMethod()

```
public static MethodDescriptor<ListReferenceImagesRequest,ListReferenceImagesResponse> getListReferenceImagesMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListReferenceImagesRequest](/java/docs/reference/google-cloud-vision/3.25.0/com.google.cloud.vision.v1.ListReferenceImagesRequest),[ListReferenceImagesResponse](/java/docs/reference/google-cloud-vision/3.25.0/com.google.cloud.vision.v1.ListReferenceImagesResponse)>`

### getPurgeProductsMethod()

```
public static MethodDescriptor<PurgeProductsRequest,Operation> getPurgeProductsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[PurgeProductsRequest](/java/docs/reference/google-cloud-vision/3.25.0/com.google.cloud.vision.v1.PurgeProductsRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getRemoveProductFromProductSetMethod()

```
public static MethodDescriptor<RemoveProductFromProductSetRequest,Empty> getRemoveProductFromProductSetMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[RemoveProductFromProductSetRequest](/java/docs/reference/google-cloud-vision/3.25.0/com.google.cloud.vision.v1.RemoveProductFromProductSetRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getServiceDescriptor()

```
public static ServiceDescriptor getServiceDescriptor()
```

**Returns**

**Type**

**Description**

`io.grpc.ServiceDescriptor`

### getUpdateProductMethod()

```
public static MethodDescriptor<UpdateProductRequest,Product> getUpdateProductMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[UpdateProductRequest](/java/docs/reference/google-cloud-vision/3.25.0/com.google.cloud.vision.v1.UpdateProductRequest),[Product](/java/docs/reference/google-cloud-vision/3.25.0/com.google.cloud.vision.v1.Product)>`

### getUpdateProductSetMethod()

```
public static MethodDescriptor<UpdateProductSetRequest,ProductSet> getUpdateProductSetMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[UpdateProductSetRequest](/java/docs/reference/google-cloud-vision/3.25.0/com.google.cloud.vision.v1.UpdateProductSetRequest),[ProductSet](/java/docs/reference/google-cloud-vision/3.25.0/com.google.cloud.vision.v1.ProductSet)>`

### newBlockingStub(Channel channel)

```
public static ProductSearchGrpc.ProductSearchBlockingStub newBlockingStub(Channel channel)
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

`[ProductSearchGrpc.ProductSearchBlockingStub](/java/docs/reference/google-cloud-vision/3.25.0/com.google.cloud.vision.v1.ProductSearchGrpc.ProductSearchBlockingStub)`

### newFutureStub(Channel channel)

```
public static ProductSearchGrpc.ProductSearchFutureStub newFutureStub(Channel channel)
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

`[ProductSearchGrpc.ProductSearchFutureStub](/java/docs/reference/google-cloud-vision/3.25.0/com.google.cloud.vision.v1.ProductSearchGrpc.ProductSearchFutureStub)`

### newStub(Channel channel)

```
public static ProductSearchGrpc.ProductSearchStub newStub(Channel channel)
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

`[ProductSearchGrpc.ProductSearchStub](/java/docs/reference/google-cloud-vision/3.25.0/com.google.cloud.vision.v1.ProductSearchGrpc.ProductSearchStub)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
