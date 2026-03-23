-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ServingConfigServiceSettings (2.11.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

```
public class ServingConfigServiceSettings extends ClientSettings<ServingConfigServiceSettings>
```

Settings class to configure an instance of [ServingConfigServiceClient](/java/docs/reference/google-cloud-retail/2.11.0/com.google.cloud.retail.v2beta.ServingConfigServiceClient).

The default instance has everything set to sensible defaults:

-   The default service address (retail.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of createServingConfig to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 ServingConfigServiceSettings.Builder servingConfigServiceSettingsBuilder =
     ServingConfigServiceSettings.newBuilder();
 servingConfigServiceSettingsBuilder
     .createServingConfigSettings()
     .setRetrySettings(
         servingConfigServiceSettingsBuilder
             .createServingConfigSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 ServingConfigServiceSettings servingConfigServiceSettings =
     servingConfigServiceSettingsBuilder.build();
 
```
 

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [ClientSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html) \> ServingConfigServiceSettings

## Inherited Members

[ClientSettings.<B>toBuilder()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings__B_toBuilder__)

[ClientSettings.getBackgroundExecutorProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings_getBackgroundExecutorProvider__)

[ClientSettings.getClock()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings_getClock__)

[ClientSettings.getCredentialsProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings_getCredentialsProvider__)

[ClientSettings.getEndpoint()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings_getEndpoint__)

[ClientSettings.getExecutorProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings_getExecutorProvider__)

[ClientSettings.getHeaderProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings_getHeaderProvider__)

[ClientSettings.getInternalHeaderProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings_getInternalHeaderProvider__)

[ClientSettings.getQuotaProjectId()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings_getQuotaProjectId__)

[ClientSettings.getStubSettings()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings_getStubSettings__)

[ClientSettings.getTransportChannelProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings_getTransportChannelProvider__)

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

### create(ServingConfigServiceStubSettings stub)

```
public static final ServingConfigServiceSettings create(ServingConfigServiceStubSettings stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[ServingConfigServiceStubSettings](/java/docs/reference/google-cloud-retail/2.11.0/com.google.cloud.retail.v2alpha.stub.ServingConfigServiceStubSettings)`  

**Returns**

**Type**

**Description**

`[ServingConfigServiceSettings](/java/docs/reference/google-cloud-retail/2.11.0/com.google.cloud.retail.v2alpha.ServingConfigServiceSettings)`

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
public static ServingConfigServiceSettings.Builder newBuilder()
```

Returns a new gRPC builder for this class.

**Returns**

**Type**

**Description**

`[ServingConfigServiceSettings.Builder](/java/docs/reference/google-cloud-retail/2.11.0/com.google.cloud.retail.v2alpha.ServingConfigServiceSettings.Builder)`

### newBuilder(ClientContext clientContext)

```
public static ServingConfigServiceSettings.Builder newBuilder(ClientContext clientContext)
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

`[ServingConfigServiceSettings.Builder](/java/docs/reference/google-cloud-retail/2.11.0/com.google.cloud.retail.v2alpha.ServingConfigServiceSettings.Builder)`

### newHttpJsonBuilder()

```
public static ServingConfigServiceSettings.Builder newHttpJsonBuilder()
```

Returns a new REST builder for this class.

**Returns**

**Type**

**Description**

`[ServingConfigServiceSettings.Builder](/java/docs/reference/google-cloud-retail/2.11.0/com.google.cloud.retail.v2alpha.ServingConfigServiceSettings.Builder)`

## Constructors

### ServingConfigServiceSettings(ServingConfigServiceSettings.Builder settingsBuilder)

```
protected ServingConfigServiceSettings(ServingConfigServiceSettings.Builder settingsBuilder)
```

**Parameter**

**Name**

**Description**

`settingsBuilder`

`[ServingConfigServiceSettings.Builder](/java/docs/reference/google-cloud-retail/2.11.0/com.google.cloud.retail.v2alpha.ServingConfigServiceSettings.Builder)`  

## Methods

### addControlSettings()

```
public UnaryCallSettings<AddControlRequest,ServingConfig> addControlSettings()
```

Returns the object with the settings used for calls to addControl.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[AddControlRequest](/java/docs/reference/google-cloud-retail/2.11.0/com.google.cloud.retail.v2alpha.AddControlRequest),[ServingConfig](/java/docs/reference/google-cloud-retail/2.11.0/com.google.cloud.retail.v2alpha.ServingConfig)>`

### createServingConfigSettings()

```
public UnaryCallSettings<CreateServingConfigRequest,ServingConfig> createServingConfigSettings()
```

Returns the object with the settings used for calls to createServingConfig.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateServingConfigRequest](/java/docs/reference/google-cloud-retail/2.11.0/com.google.cloud.retail.v2alpha.CreateServingConfigRequest),[ServingConfig](/java/docs/reference/google-cloud-retail/2.11.0/com.google.cloud.retail.v2alpha.ServingConfig)>`

### deleteServingConfigSettings()

```
public UnaryCallSettings<DeleteServingConfigRequest,Empty> deleteServingConfigSettings()
```

Returns the object with the settings used for calls to deleteServingConfig.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteServingConfigRequest](/java/docs/reference/google-cloud-retail/2.11.0/com.google.cloud.retail.v2alpha.DeleteServingConfigRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getServingConfigSettings()

```
public UnaryCallSettings<GetServingConfigRequest,ServingConfig> getServingConfigSettings()
```

Returns the object with the settings used for calls to getServingConfig.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetServingConfigRequest](/java/docs/reference/google-cloud-retail/2.11.0/com.google.cloud.retail.v2alpha.GetServingConfigRequest),[ServingConfig](/java/docs/reference/google-cloud-retail/2.11.0/com.google.cloud.retail.v2alpha.ServingConfig)>`

### listServingConfigsSettings()

```
public PagedCallSettings<ListServingConfigsRequest,ListServingConfigsResponse,ServingConfigServiceClient.ListServingConfigsPagedResponse> listServingConfigsSettings()
```

Returns the object with the settings used for calls to listServingConfigs.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListServingConfigsRequest](/java/docs/reference/google-cloud-retail/2.11.0/com.google.cloud.retail.v2alpha.ListServingConfigsRequest),[ListServingConfigsResponse](/java/docs/reference/google-cloud-retail/2.11.0/com.google.cloud.retail.v2alpha.ListServingConfigsResponse),[ListServingConfigsPagedResponse](/java/docs/reference/google-cloud-retail/2.11.0/com.google.cloud.retail.v2alpha.ServingConfigServiceClient.ListServingConfigsPagedResponse)>`

### removeControlSettings()

```
public UnaryCallSettings<RemoveControlRequest,ServingConfig> removeControlSettings()
```

Returns the object with the settings used for calls to removeControl.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[RemoveControlRequest](/java/docs/reference/google-cloud-retail/2.11.0/com.google.cloud.retail.v2alpha.RemoveControlRequest),[ServingConfig](/java/docs/reference/google-cloud-retail/2.11.0/com.google.cloud.retail.v2alpha.ServingConfig)>`

### toBuilder()

```
public ServingConfigServiceSettings.Builder toBuilder()
```

Returns a builder containing all the values of this settings class.

**Returns**

**Type**

**Description**

`[ServingConfigServiceSettings.Builder](/java/docs/reference/google-cloud-retail/2.11.0/com.google.cloud.retail.v2alpha.ServingConfigServiceSettings.Builder)`

**Overrides**

[ClientSettings<SettingsT>.<B>toBuilder()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings__B_toBuilder__)

### updateServingConfigSettings()

```
public UnaryCallSettings<UpdateServingConfigRequest,ServingConfig> updateServingConfigSettings()
```

Returns the object with the settings used for calls to updateServingConfig.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateServingConfigRequest](/java/docs/reference/google-cloud-retail/2.11.0/com.google.cloud.retail.v2alpha.UpdateServingConfigRequest),[ServingConfig](/java/docs/reference/google-cloud-retail/2.11.0/com.google.cloud.retail.v2alpha.ServingConfig)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
