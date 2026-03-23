-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ProductSearchStubSettings (3.1.3) Stay organized with collections Save and categorize content based on your preferences.

3.85.0 (latest) 3.83.0 3.81.0 3.80.0 3.78.0 3.76.0 3.74.0 3.73.0 3.72.0 3.71.0 3.70.0 3.68.0 3.66.0 3.65.0 3.62.0 3.61.0 3.60.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.3 2.1.4 2.0.29

```
public class ProductSearchStubSettings extends StubSettings<ProductSearchStubSettings>
```

Settings class to configure an instance of [ProductSearchStub](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.stub.ProductSearchStub).

The default instance has everything set to sensible defaults:

-   The default service address (vision.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of createProductSet to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 ProductSearchStubSettings.Builder productSearchSettingsBuilder =
     ProductSearchStubSettings.newBuilder();
 productSearchSettingsBuilder
     .createProductSetSettings()
     .setRetrySettings(
         productSearchSettingsBuilder.createProductSetSettings().getRetrySettings().toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 ProductSearchStubSettings productSearchSettings = productSearchSettingsBuilder.build();
 
```
 

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [StubSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html) \> ProductSearchStubSettings

## Inherited Members

[StubSettings.getBackgroundExecutorProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getBackgroundExecutorProvider__)

[StubSettings.getClock()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getClock__)

[StubSettings.getCredentialsProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getCredentialsProvider__)

[StubSettings.getEndpoint()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getEndpoint__)

[StubSettings.getExecutorProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getExecutorProvider__)

[StubSettings.getHeaderProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getHeaderProvider__)

[StubSettings.getInternalHeaderProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getInternalHeaderProvider__)

[StubSettings.getMtlsEndpoint()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getMtlsEndpoint__)

[StubSettings.getQuotaProjectId()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getQuotaProjectId__)

[StubSettings.getStreamWatchdogCheckInterval()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getStreamWatchdogCheckInterval__)

[StubSettings.getStreamWatchdogProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getStreamWatchdogProvider__)

[StubSettings.getTracerFactory()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getTracerFactory__)

[StubSettings.getTransportChannelProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getTransportChannelProvider__)

[StubSettings.toBuilder()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_toBuilder__)

[StubSettings.toString()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_toString__)

[Object.clone()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#clone--)

[Object.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-)

[Object.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#finalize--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#hashCode--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

## Static Methods

### defaultApiClientHeaderProviderBuilder()

```
public static ApiClientHeaderProvider.Builder defaultApiClientHeaderProviderBuilder()
```

**Returns**

**Type**

**Description**

[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ApiClientHeaderProvider.Builder.html)

### defaultCredentialsProviderBuilder()

```
public static GoogleCredentialsProvider.Builder defaultCredentialsProviderBuilder()
```

Returns a builder for the default credentials for this service.

**Returns**

**Type**

**Description**

[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.core.GoogleCredentialsProvider.Builder.html)

### defaultExecutorProviderBuilder()

```
public static InstantiatingExecutorProvider.Builder defaultExecutorProviderBuilder()
```

Returns a builder for the default ExecutorProvider for this service.

**Returns**

**Type**

**Description**

[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.core.InstantiatingExecutorProvider.Builder.html)

### defaultGrpcApiClientHeaderProviderBuilder()

```
public static ApiClientHeaderProvider.Builder defaultGrpcApiClientHeaderProviderBuilder()
```

**Returns**

**Type**

**Description**

[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ApiClientHeaderProvider.Builder.html)

### defaultGrpcTransportProviderBuilder()

```
public static InstantiatingGrpcChannelProvider.Builder defaultGrpcTransportProviderBuilder()
```

Returns a builder for the default gRPC ChannelProvider for this service.

**Returns**

**Type**

**Description**

[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.grpc.InstantiatingGrpcChannelProvider.Builder.html)

### defaultHttpJsonApiClientHeaderProviderBuilder()

```
public static ApiClientHeaderProvider.Builder defaultHttpJsonApiClientHeaderProviderBuilder()
```

**Returns**

**Type**

**Description**

[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ApiClientHeaderProvider.Builder.html)

### defaultHttpJsonTransportProviderBuilder()

```
public static InstantiatingHttpJsonChannelProvider.Builder defaultHttpJsonTransportProviderBuilder()
```

Returns a builder for the default REST ChannelProvider for this service.

**Returns**

**Type**

**Description**

[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.InstantiatingHttpJsonChannelProvider.Builder.html)

### defaultTransportChannelProvider()

```
public static TransportChannelProvider defaultTransportChannelProvider()
```

**Returns**

**Type**

**Description**

[TransportChannelProvider](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.TransportChannelProvider.html)

### getDefaultEndpoint()

```
public static String getDefaultEndpoint()
```

Returns the default service endpoint.

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

### getDefaultMtlsEndpoint()

```
public static String getDefaultMtlsEndpoint()
```

Returns the default mTLS service endpoint.

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

### getDefaultServiceScopes()

```
public static List<String> getDefaultServiceScopes()
```

Returns the default service scopes.

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)\>

### newBuilder()

```
public static ProductSearchStubSettings.Builder newBuilder()
```

Returns a new gRPC builder for this class.

**Returns**

**Type**

**Description**

[ProductSearchStubSettings.Builder](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.stub.ProductSearchStubSettings.Builder)

### newBuilder(ClientContext clientContext)

```
public static ProductSearchStubSettings.Builder newBuilder(ClientContext clientContext)
```

Returns a new builder for this class.

**Parameter**

**Name**

**Description**

clientContext

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

[ProductSearchStubSettings.Builder](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.stub.ProductSearchStubSettings.Builder)

### newHttpJsonBuilder()

```
public static ProductSearchStubSettings.Builder newHttpJsonBuilder()
```

Returns a new REST builder for this class.

**Returns**

**Type**

**Description**

[ProductSearchStubSettings.Builder](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.stub.ProductSearchStubSettings.Builder)

## Constructors

### ProductSearchStubSettings(ProductSearchStubSettings.Builder settingsBuilder)

```
protected ProductSearchStubSettings(ProductSearchStubSettings.Builder settingsBuilder)
```

**Parameter**

**Name**

**Description**

settingsBuilder

`[ProductSearchStubSettings.Builder](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.stub.ProductSearchStubSettings.Builder)`  

## Methods

### addProductToProductSetSettings()

```
public UnaryCallSettings<AddProductToProductSetRequest,Empty> addProductToProductSetSettings()
```

Returns the object with the settings used for calls to addProductToProductSet.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[AddProductToProductSetRequest](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.AddProductToProductSetRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)\>

### createProductSetSettings()

```
public UnaryCallSettings<CreateProductSetRequest,ProductSet> createProductSetSettings()
```

Returns the object with the settings used for calls to createProductSet.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateProductSetRequest](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.CreateProductSetRequest),[ProductSet](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.ProductSet)\>

### createProductSettings()

```
public UnaryCallSettings<CreateProductRequest,Product> createProductSettings()
```

Returns the object with the settings used for calls to createProduct.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateProductRequest](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.CreateProductRequest),[Product](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.Product)\>

### createReferenceImageSettings()

```
public UnaryCallSettings<CreateReferenceImageRequest,ReferenceImage> createReferenceImageSettings()
```

Returns the object with the settings used for calls to createReferenceImage.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateReferenceImageRequest](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.CreateReferenceImageRequest),[ReferenceImage](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.ReferenceImage)\>

### createStub()

```
public ProductSearchStub createStub()
```

**Returns**

**Type**

**Description**

[ProductSearchStub](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.stub.ProductSearchStub)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### deleteProductSetSettings()

```
public UnaryCallSettings<DeleteProductSetRequest,Empty> deleteProductSetSettings()
```

Returns the object with the settings used for calls to deleteProductSet.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteProductSetRequest](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.DeleteProductSetRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)\>

### deleteProductSettings()

```
public UnaryCallSettings<DeleteProductRequest,Empty> deleteProductSettings()
```

Returns the object with the settings used for calls to deleteProduct.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteProductRequest](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.DeleteProductRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)\>

### deleteReferenceImageSettings()

```
public UnaryCallSettings<DeleteReferenceImageRequest,Empty> deleteReferenceImageSettings()
```

Returns the object with the settings used for calls to deleteReferenceImage.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteReferenceImageRequest](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.DeleteReferenceImageRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)\>

### getProductSetSettings()

```
public UnaryCallSettings<GetProductSetRequest,ProductSet> getProductSetSettings()
```

Returns the object with the settings used for calls to getProductSet.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetProductSetRequest](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.GetProductSetRequest),[ProductSet](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.ProductSet)\>

### getProductSettings()

```
public UnaryCallSettings<GetProductRequest,Product> getProductSettings()
```

Returns the object with the settings used for calls to getProduct.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetProductRequest](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.GetProductRequest),[Product](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.Product)\>

### getReferenceImageSettings()

```
public UnaryCallSettings<GetReferenceImageRequest,ReferenceImage> getReferenceImageSettings()
```

Returns the object with the settings used for calls to getReferenceImage.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetReferenceImageRequest](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.GetReferenceImageRequest),[ReferenceImage](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.ReferenceImage)\>

### importProductSetsOperationSettings()

```
public OperationCallSettings<ImportProductSetsRequest,ImportProductSetsResponse,BatchOperationMetadata> importProductSetsOperationSettings()
```

Returns the object with the settings used for calls to importProductSets.

**Returns**

**Type**

**Description**

[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[ImportProductSetsRequest](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.ImportProductSetsRequest),[ImportProductSetsResponse](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.ImportProductSetsResponse),[BatchOperationMetadata](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.BatchOperationMetadata)\>

### importProductSetsSettings()

```
public UnaryCallSettings<ImportProductSetsRequest,Operation> importProductSetsSettings()
```

Returns the object with the settings used for calls to importProductSets.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[ImportProductSetsRequest](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.ImportProductSetsRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)\>

### listProductSetsSettings()

```
public PagedCallSettings<ListProductSetsRequest,ListProductSetsResponse,ProductSearchClient.ListProductSetsPagedResponse> listProductSetsSettings()
```

Returns the object with the settings used for calls to listProductSets.

**Returns**

**Type**

**Description**

[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListProductSetsRequest](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.ListProductSetsRequest),[ListProductSetsResponse](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.ListProductSetsResponse),[ListProductSetsPagedResponse](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.ProductSearchClient.ListProductSetsPagedResponse)\>

### listProductsInProductSetSettings()

```
public PagedCallSettings<ListProductsInProductSetRequest,ListProductsInProductSetResponse,ProductSearchClient.ListProductsInProductSetPagedResponse> listProductsInProductSetSettings()
```

Returns the object with the settings used for calls to listProductsInProductSet.

**Returns**

**Type**

**Description**

[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListProductsInProductSetRequest](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.ListProductsInProductSetRequest),[ListProductsInProductSetResponse](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.ListProductsInProductSetResponse),[ListProductsInProductSetPagedResponse](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.ProductSearchClient.ListProductsInProductSetPagedResponse)\>

### listProductsSettings()

```
public PagedCallSettings<ListProductsRequest,ListProductsResponse,ProductSearchClient.ListProductsPagedResponse> listProductsSettings()
```

Returns the object with the settings used for calls to listProducts.

**Returns**

**Type**

**Description**

[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListProductsRequest](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.ListProductsRequest),[ListProductsResponse](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.ListProductsResponse),[ListProductsPagedResponse](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.ProductSearchClient.ListProductsPagedResponse)\>

### listReferenceImagesSettings()

```
public PagedCallSettings<ListReferenceImagesRequest,ListReferenceImagesResponse,ProductSearchClient.ListReferenceImagesPagedResponse> listReferenceImagesSettings()
```

Returns the object with the settings used for calls to listReferenceImages.

**Returns**

**Type**

**Description**

[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListReferenceImagesRequest](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.ListReferenceImagesRequest),[ListReferenceImagesResponse](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.ListReferenceImagesResponse),[ListReferenceImagesPagedResponse](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.ProductSearchClient.ListReferenceImagesPagedResponse)\>

### purgeProductsOperationSettings()

```
public OperationCallSettings<PurgeProductsRequest,Empty,BatchOperationMetadata> purgeProductsOperationSettings()
```

Returns the object with the settings used for calls to purgeProducts.

**Returns**

**Type**

**Description**

[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[PurgeProductsRequest](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.PurgeProductsRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[BatchOperationMetadata](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.BatchOperationMetadata)\>

### purgeProductsSettings()

```
public UnaryCallSettings<PurgeProductsRequest,Operation> purgeProductsSettings()
```

Returns the object with the settings used for calls to purgeProducts.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[PurgeProductsRequest](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.PurgeProductsRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)\>

### removeProductFromProductSetSettings()

```
public UnaryCallSettings<RemoveProductFromProductSetRequest,Empty> removeProductFromProductSetSettings()
```

Returns the object with the settings used for calls to removeProductFromProductSet.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[RemoveProductFromProductSetRequest](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.RemoveProductFromProductSetRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)\>

### toBuilder()

```
public ProductSearchStubSettings.Builder toBuilder()
```

Returns a builder containing all the values of this settings class.

**Returns**

**Type**

**Description**

[ProductSearchStubSettings.Builder](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.stub.ProductSearchStubSettings.Builder)

**Overrides**

[StubSettings<SettingsT>.toBuilder()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_toBuilder__)

### updateProductSetSettings()

```
public UnaryCallSettings<UpdateProductSetRequest,ProductSet> updateProductSetSettings()
```

Returns the object with the settings used for calls to updateProductSet.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateProductSetRequest](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.UpdateProductSetRequest),[ProductSet](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.ProductSet)\>

### updateProductSettings()

```
public UnaryCallSettings<UpdateProductRequest,Product> updateProductSettings()
```

Returns the object with the settings used for calls to updateProduct.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateProductRequest](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.UpdateProductRequest),[Product](/java/docs/reference/google-cloud-vision/3.1.3/com.google.cloud.vision.v1.Product)\>

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
