-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class GkeHubStubSettings (1.30.0) Stay organized with collections Save and categorize content based on your preferences.

1.87.0 (latest) 1.85.0 1.83.0 1.82.0 1.81.0 1.80.0 1.78.0 1.76.0 1.75.0 1.74.0 1.73.0 1.72.0 1.70.0 1.68.0 1.67.0 1.64.0 1.63.0 1.62.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.6 1.2.1 1.1.0 1.0.1 0.5.4

```
public class GkeHubStubSettings extends StubSettings<GkeHubStubSettings>
```

Settings class to configure an instance of [GkeHubStub](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1alpha.stub.GkeHubStub).

The default instance has everything set to sensible defaults:

-   The default service address (gkehub.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of getFeature to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 GkeHubStubSettings.Builder gkeHubSettingsBuilder = GkeHubStubSettings.newBuilder();
 gkeHubSettingsBuilder
     .getFeatureSettings()
     .setRetrySettings(
         gkeHubSettingsBuilder
             .getFeatureSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 GkeHubStubSettings gkeHubSettings = gkeHubSettingsBuilder.build();
 
```
 

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [StubSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html) \> GkeHubStubSettings

## Inherited Members

[StubSettings.getBackgroundExecutorProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getBackgroundExecutorProvider__)

[StubSettings.getClock()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getClock__)

[StubSettings.getCredentialsProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getCredentialsProvider__)

[StubSettings.getEndpoint()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getEndpoint__)

[StubSettings.getExecutorProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getExecutorProvider__)

[StubSettings.getGdchApiAudience()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getGdchApiAudience__)

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

### defaultGrpcApiClientHeaderProviderBuilder()

```
public static ApiClientHeaderProvider.Builder defaultGrpcApiClientHeaderProviderBuilder()
```

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ApiClientHeaderProvider.Builder.html)`

### defaultGrpcTransportProviderBuilder()

```
public static InstantiatingGrpcChannelProvider.Builder defaultGrpcTransportProviderBuilder()
```

Returns a builder for the default gRPC ChannelProvider for this service.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.grpc.InstantiatingGrpcChannelProvider.Builder.html)`

### defaultHttpJsonApiClientHeaderProviderBuilder()

```
public static ApiClientHeaderProvider.Builder defaultHttpJsonApiClientHeaderProviderBuilder()
```

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ApiClientHeaderProvider.Builder.html)`

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

### getDefaultMtlsEndpoint()

```
public static String getDefaultMtlsEndpoint()
```

Returns the default mTLS service endpoint.

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
public static GkeHubStubSettings.Builder newBuilder()
```

Returns a new gRPC builder for this class.

**Returns**

**Type**

**Description**

`[GkeHubStubSettings.Builder](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1alpha.stub.GkeHubStubSettings.Builder)`

### newBuilder(ClientContext clientContext)

```
public static GkeHubStubSettings.Builder newBuilder(ClientContext clientContext)
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

`[GkeHubStubSettings.Builder](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1alpha.stub.GkeHubStubSettings.Builder)`

### newHttpJsonBuilder()

```
public static GkeHubStubSettings.Builder newHttpJsonBuilder()
```

Returns a new REST builder for this class.

**Returns**

**Type**

**Description**

`[GkeHubStubSettings.Builder](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1alpha.stub.GkeHubStubSettings.Builder)`

## Constructors

### GkeHubStubSettings(GkeHubStubSettings.Builder settingsBuilder)

```
protected GkeHubStubSettings(GkeHubStubSettings.Builder settingsBuilder)
```

**Parameter**

**Name**

**Description**

`settingsBuilder`

`[GkeHubStubSettings.Builder](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1alpha.stub.GkeHubStubSettings.Builder)`  

## Methods

### createFeatureOperationSettings()

```
public OperationCallSettings<CreateFeatureRequest,Feature,OperationMetadata> createFeatureOperationSettings()
```

Returns the object with the settings used for calls to createFeature.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[CreateFeatureRequest](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1alpha.CreateFeatureRequest),[Feature](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1alpha.Feature),[OperationMetadata](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1alpha.OperationMetadata)>`

### createFeatureSettings()

```
public UnaryCallSettings<CreateFeatureRequest,Operation> createFeatureSettings()
```

Returns the object with the settings used for calls to createFeature.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateFeatureRequest](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1alpha.CreateFeatureRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createStub()

```
public GkeHubStub createStub()
```

**Returns**

**Type**

**Description**

`[GkeHubStub](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1alpha.stub.GkeHubStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### deleteFeatureOperationSettings()

```
public OperationCallSettings<DeleteFeatureRequest,Empty,OperationMetadata> deleteFeatureOperationSettings()
```

Returns the object with the settings used for calls to deleteFeature.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[DeleteFeatureRequest](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1alpha.DeleteFeatureRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1alpha.OperationMetadata)>`

### deleteFeatureSettings()

```
public UnaryCallSettings<DeleteFeatureRequest,Operation> deleteFeatureSettings()
```

Returns the object with the settings used for calls to deleteFeature.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteFeatureRequest](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1alpha.DeleteFeatureRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getFeatureSettings()

```
public UnaryCallSettings<GetFeatureRequest,Feature> getFeatureSettings()
```

Returns the object with the settings used for calls to getFeature.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetFeatureRequest](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1alpha.GetFeatureRequest),[Feature](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1alpha.Feature)>`

### listFeaturesSettings()

```
public PagedCallSettings<ListFeaturesRequest,ListFeaturesResponse,GkeHubClient.ListFeaturesPagedResponse> listFeaturesSettings()
```

Returns the object with the settings used for calls to listFeatures.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListFeaturesRequest](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1alpha.ListFeaturesRequest),[ListFeaturesResponse](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1alpha.ListFeaturesResponse),[ListFeaturesPagedResponse](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1alpha.GkeHubClient.ListFeaturesPagedResponse)>`

### toBuilder()

```
public GkeHubStubSettings.Builder toBuilder()
```

Returns a builder containing all the values of this settings class.

**Returns**

**Type**

**Description**

`[GkeHubStubSettings.Builder](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1alpha.stub.GkeHubStubSettings.Builder)`

**Overrides**

[StubSettings<SettingsT>.toBuilder()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_toBuilder__)

### updateFeatureOperationSettings()

```
public OperationCallSettings<UpdateFeatureRequest,Feature,OperationMetadata> updateFeatureOperationSettings()
```

Returns the object with the settings used for calls to updateFeature.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[UpdateFeatureRequest](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1alpha.UpdateFeatureRequest),[Feature](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1alpha.Feature),[OperationMetadata](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1alpha.OperationMetadata)>`

### updateFeatureSettings()

```
public UnaryCallSettings<UpdateFeatureRequest,Operation> updateFeatureSettings()
```

Returns the object with the settings used for calls to updateFeature.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateFeatureRequest](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1alpha.UpdateFeatureRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
