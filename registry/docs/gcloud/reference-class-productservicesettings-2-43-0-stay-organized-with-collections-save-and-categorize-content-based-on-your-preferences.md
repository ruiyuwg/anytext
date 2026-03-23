-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ProductServiceSettings (2.43.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

```
public class ProductServiceSettings extends ClientSettings<ProductServiceSettings>
```

Settings class to configure an instance of [ProductServiceClient](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2beta.ProductServiceClient).

The default instance has everything set to sensible defaults:

-   The default service address (retail.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of createProduct to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 ProductServiceSettings.Builder productServiceSettingsBuilder =
     ProductServiceSettings.newBuilder();
 productServiceSettingsBuilder
     .createProductSettings()
     .setRetrySettings(
         productServiceSettingsBuilder
             .createProductSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 ProductServiceSettings productServiceSettings = productServiceSettingsBuilder.build();
 
```
 

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [ClientSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html) \> ProductServiceSettings

## Inherited Members

[ClientSettings.<B>toBuilder()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings__B_toBuilder__)

[ClientSettings.getBackgroundExecutorProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings_getBackgroundExecutorProvider__)

[ClientSettings.getClock()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings_getClock__)

[ClientSettings.getCredentialsProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings_getCredentialsProvider__)

[ClientSettings.getEndpoint()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings_getEndpoint__)

[ClientSettings.getExecutorProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings_getExecutorProvider__)

[ClientSettings.getGdchApiAudience()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings_getGdchApiAudience__)

[ClientSettings.getHeaderProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings_getHeaderProvider__)

[ClientSettings.getInternalHeaderProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings_getInternalHeaderProvider__)

[ClientSettings.getQuotaProjectId()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings_getQuotaProjectId__)

[ClientSettings.getStubSettings()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings_getStubSettings__)

[ClientSettings.getTransportChannelProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings_getTransportChannelProvider__)

[ClientSettings.getUniverseDomain()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings_getUniverseDomain__)

[ClientSettings.getWatchdogCheckInterval()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings_getWatchdogCheckInterval__)

[ClientSettings.getWatchdogProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings_getWatchdogProvider__)

[ClientSettings.toString()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings_toString__)

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

### create(ProductServiceStubSettings stub)

```
public static final ProductServiceSettings create(ProductServiceStubSettings stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[ProductServiceStubSettings](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.stub.ProductServiceStubSettings)`  

**Returns**

**Type**

**Description**

`[ProductServiceSettings](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.ProductServiceSettings)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### defaultApiClientHeaderProviderBuilder()

```
public static ApiClientHeaderProvider.Builder defaultApiClientHeaderProviderBuilder()
```

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ApiClientHeaderProvider.Builder.html)`

### defaultCredentialsProviderBuilder()

```
public static GoogleCredentialsProvider.Builder defaultCredentialsProviderBuilder()
```

Returns a builder for the default credentials for this service.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.core.GoogleCredentialsProvider.Builder.html)`

### defaultExecutorProviderBuilder()

```
public static InstantiatingExecutorProvider.Builder defaultExecutorProviderBuilder()
```

Returns a builder for the default ExecutorProvider for this service.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.core.InstantiatingExecutorProvider.Builder.html)`

### defaultGrpcTransportProviderBuilder()

```
public static InstantiatingGrpcChannelProvider.Builder defaultGrpcTransportProviderBuilder()
```

Returns a builder for the default gRPC ChannelProvider for this service.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.grpc.InstantiatingGrpcChannelProvider.Builder.html)`

### defaultHttpJsonTransportProviderBuilder()

```
public static InstantiatingHttpJsonChannelProvider.Builder defaultHttpJsonTransportProviderBuilder()
```

**Beta**

This feature is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the launch stage descriptions.

Returns a builder for the default REST ChannelProvider for this service.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.InstantiatingHttpJsonChannelProvider.Builder.html)`

### defaultTransportChannelProvider()

```
public static TransportChannelProvider defaultTransportChannelProvider()
```

**Returns**

**Type**

**Description**

`[TransportChannelProvider](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.TransportChannelProvider.html)`

### getDefaultEndpoint()

```
public static String getDefaultEndpoint()
```

Returns the default service endpoint.

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getDefaultServiceScopes()

```
public static List<String> getDefaultServiceScopes()
```

Returns the default service scopes.

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### newBuilder()

```
public static ProductServiceSettings.Builder newBuilder()
```

Returns a new gRPC builder for this class.

**Returns**

**Type**

**Description**

`[ProductServiceSettings.Builder](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.ProductServiceSettings.Builder)`

### newBuilder(ClientContext clientContext)

```
public static ProductServiceSettings.Builder newBuilder(ClientContext clientContext)
```

Returns a new builder for this class.

**Parameter**

**Name**

**Description**

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

`[ProductServiceSettings.Builder](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.ProductServiceSettings.Builder)`

### newHttpJsonBuilder()

```
public static ProductServiceSettings.Builder newHttpJsonBuilder()
```

Returns a new REST builder for this class.

**Returns**

**Type**

**Description**

`[ProductServiceSettings.Builder](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.ProductServiceSettings.Builder)`

## Constructors

### ProductServiceSettings(ProductServiceSettings.Builder settingsBuilder)

```
protected ProductServiceSettings(ProductServiceSettings.Builder settingsBuilder)
```

**Parameter**

**Name**

**Description**

`settingsBuilder`

`[ProductServiceSettings.Builder](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.ProductServiceSettings.Builder)`  

## Methods

### addFulfillmentPlacesOperationSettings()

```
public OperationCallSettings<AddFulfillmentPlacesRequest,AddFulfillmentPlacesResponse,AddFulfillmentPlacesMetadata> addFulfillmentPlacesOperationSettings()
```

Returns the object with the settings used for calls to addFulfillmentPlaces.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[AddFulfillmentPlacesRequest](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.AddFulfillmentPlacesRequest),[AddFulfillmentPlacesResponse](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.AddFulfillmentPlacesResponse),[AddFulfillmentPlacesMetadata](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.AddFulfillmentPlacesMetadata)>`

### addFulfillmentPlacesSettings()

```
public UnaryCallSettings<AddFulfillmentPlacesRequest,Operation> addFulfillmentPlacesSettings()
```

Returns the object with the settings used for calls to addFulfillmentPlaces.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[AddFulfillmentPlacesRequest](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.AddFulfillmentPlacesRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### addLocalInventoriesOperationSettings()

```
public OperationCallSettings<AddLocalInventoriesRequest,AddLocalInventoriesResponse,AddLocalInventoriesMetadata> addLocalInventoriesOperationSettings()
```

Returns the object with the settings used for calls to addLocalInventories.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[AddLocalInventoriesRequest](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.AddLocalInventoriesRequest),[AddLocalInventoriesResponse](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.AddLocalInventoriesResponse),[AddLocalInventoriesMetadata](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.AddLocalInventoriesMetadata)>`

### addLocalInventoriesSettings()

```
public UnaryCallSettings<AddLocalInventoriesRequest,Operation> addLocalInventoriesSettings()
```

Returns the object with the settings used for calls to addLocalInventories.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[AddLocalInventoriesRequest](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.AddLocalInventoriesRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createProductSettings()

```
public UnaryCallSettings<CreateProductRequest,Product> createProductSettings()
```

Returns the object with the settings used for calls to createProduct.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateProductRequest](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.CreateProductRequest),[Product](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.Product)>`

### deleteProductSettings()

```
public UnaryCallSettings<DeleteProductRequest,Empty> deleteProductSettings()
```

Returns the object with the settings used for calls to deleteProduct.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteProductRequest](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.DeleteProductRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getProductSettings()

```
public UnaryCallSettings<GetProductRequest,Product> getProductSettings()
```

Returns the object with the settings used for calls to getProduct.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetProductRequest](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.GetProductRequest),[Product](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.Product)>`

### importProductsOperationSettings()

```
public OperationCallSettings<ImportProductsRequest,ImportProductsResponse,ImportMetadata> importProductsOperationSettings()
```

Returns the object with the settings used for calls to importProducts.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[ImportProductsRequest](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.ImportProductsRequest),[ImportProductsResponse](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.ImportProductsResponse),[ImportMetadata](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.ImportMetadata)>`

### importProductsSettings()

```
public UnaryCallSettings<ImportProductsRequest,Operation> importProductsSettings()
```

Returns the object with the settings used for calls to importProducts.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[ImportProductsRequest](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.ImportProductsRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### listProductsSettings()

```
public PagedCallSettings<ListProductsRequest,ListProductsResponse,ProductServiceClient.ListProductsPagedResponse> listProductsSettings()
```

Returns the object with the settings used for calls to listProducts.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListProductsRequest](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.ListProductsRequest),[ListProductsResponse](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.ListProductsResponse),[ListProductsPagedResponse](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.ProductServiceClient.ListProductsPagedResponse)>`

### purgeProductsOperationSettings()

```
public OperationCallSettings<PurgeProductsRequest,PurgeProductsResponse,PurgeProductsMetadata> purgeProductsOperationSettings()
```

Returns the object with the settings used for calls to purgeProducts.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[PurgeProductsRequest](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.PurgeProductsRequest),[PurgeProductsResponse](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.PurgeProductsResponse),[PurgeProductsMetadata](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.PurgeProductsMetadata)>`

### purgeProductsSettings()

```
public UnaryCallSettings<PurgeProductsRequest,Operation> purgeProductsSettings()
```

Returns the object with the settings used for calls to purgeProducts.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[PurgeProductsRequest](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.PurgeProductsRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### removeFulfillmentPlacesOperationSettings()

```
public OperationCallSettings<RemoveFulfillmentPlacesRequest,RemoveFulfillmentPlacesResponse,RemoveFulfillmentPlacesMetadata> removeFulfillmentPlacesOperationSettings()
```

Returns the object with the settings used for calls to removeFulfillmentPlaces.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[RemoveFulfillmentPlacesRequest](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.RemoveFulfillmentPlacesRequest),[RemoveFulfillmentPlacesResponse](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.RemoveFulfillmentPlacesResponse),[RemoveFulfillmentPlacesMetadata](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.RemoveFulfillmentPlacesMetadata)>`

### removeFulfillmentPlacesSettings()

```
public UnaryCallSettings<RemoveFulfillmentPlacesRequest,Operation> removeFulfillmentPlacesSettings()
```

Returns the object with the settings used for calls to removeFulfillmentPlaces.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[RemoveFulfillmentPlacesRequest](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.RemoveFulfillmentPlacesRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### removeLocalInventoriesOperationSettings()

```
public OperationCallSettings<RemoveLocalInventoriesRequest,RemoveLocalInventoriesResponse,RemoveLocalInventoriesMetadata> removeLocalInventoriesOperationSettings()
```

Returns the object with the settings used for calls to removeLocalInventories.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[RemoveLocalInventoriesRequest](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.RemoveLocalInventoriesRequest),[RemoveLocalInventoriesResponse](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.RemoveLocalInventoriesResponse),[RemoveLocalInventoriesMetadata](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.RemoveLocalInventoriesMetadata)>`

### removeLocalInventoriesSettings()

```
public UnaryCallSettings<RemoveLocalInventoriesRequest,Operation> removeLocalInventoriesSettings()
```

Returns the object with the settings used for calls to removeLocalInventories.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[RemoveLocalInventoriesRequest](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.RemoveLocalInventoriesRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### setInventoryOperationSettings()

```
public OperationCallSettings<SetInventoryRequest,SetInventoryResponse,SetInventoryMetadata> setInventoryOperationSettings()
```

Returns the object with the settings used for calls to setInventory.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[SetInventoryRequest](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.SetInventoryRequest),[SetInventoryResponse](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.SetInventoryResponse),[SetInventoryMetadata](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.SetInventoryMetadata)>`

### setInventorySettings()

```
public UnaryCallSettings<SetInventoryRequest,Operation> setInventorySettings()
```

Returns the object with the settings used for calls to setInventory.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[SetInventoryRequest](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.SetInventoryRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### toBuilder()

```
public ProductServiceSettings.Builder toBuilder()
```

Returns a builder containing all the values of this settings class.

**Returns**

**Type**

**Description**

`[ProductServiceSettings.Builder](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.ProductServiceSettings.Builder)`

**Overrides**

[ClientSettings<SettingsT>.<B>toBuilder()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings__B_toBuilder__)

### updateProductSettings()

```
public UnaryCallSettings<UpdateProductRequest,Product> updateProductSettings()
```

Returns the object with the settings used for calls to updateProduct.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateProductRequest](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.UpdateProductRequest),[Product](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.Product)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
