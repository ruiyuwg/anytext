-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class HubServiceStubSettings (1.6.0) Stay organized with collections Save and categorize content based on your preferences.

1.86.0 (latest) 1.84.0 1.82.0 1.81.0 1.79.0 1.77.0 1.75.0 1.74.0 1.73.0 1.72.0 1.71.0 1.69.0 1.67.0 1.66.0 1.63.0 1.62.0 1.61.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.9 1.1.1 1.0.0 0.5.0

```
public class HubServiceStubSettings extends StubSettings<HubServiceStubSettings>
```

Settings class to configure an instance of [HubServiceStub](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.stub.HubServiceStub).

The default instance has everything set to sensible defaults:

-   The default service address (networkconnectivity.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of getHub to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 HubServiceStubSettings.Builder hubServiceSettingsBuilder = HubServiceStubSettings.newBuilder();
 hubServiceSettingsBuilder
     .getHubSettings()
     .setRetrySettings(
         hubServiceSettingsBuilder.getHubSettings().getRetrySettings().toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 HubServiceStubSettings hubServiceSettings = hubServiceSettingsBuilder.build();
 
```
 

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [StubSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html) \> HubServiceStubSettings

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

### defaultGrpcTransportProviderBuilder()

```
public static InstantiatingGrpcChannelProvider.Builder defaultGrpcTransportProviderBuilder()
```

Returns a builder for the default ChannelProvider for this service.

**Returns**

**Type**

**Description**

[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.grpc.InstantiatingGrpcChannelProvider.Builder.html)

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
public static HubServiceStubSettings.Builder newBuilder()
```

Returns a new builder for this class.

**Returns**

**Type**

**Description**

[HubServiceStubSettings.Builder](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.stub.HubServiceStubSettings.Builder)

### newBuilder(ClientContext clientContext)

```
public static HubServiceStubSettings.Builder newBuilder(ClientContext clientContext)
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

[HubServiceStubSettings.Builder](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.stub.HubServiceStubSettings.Builder)

## Constructors

### HubServiceStubSettings(HubServiceStubSettings.Builder settingsBuilder)

```
protected HubServiceStubSettings(HubServiceStubSettings.Builder settingsBuilder)
```

**Parameter**

**Name**

**Description**

settingsBuilder

`[HubServiceStubSettings.Builder](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.stub.HubServiceStubSettings.Builder)`  

## Methods

### createHubOperationSettings()

```
public OperationCallSettings<CreateHubRequest,Hub,OperationMetadata> createHubOperationSettings()
```

Returns the object with the settings used for calls to createHub.

**Returns**

**Type**

**Description**

[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[CreateHubRequest](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.CreateHubRequest),[Hub](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.Hub),[OperationMetadata](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.OperationMetadata)\>

### createHubSettings()

```
public UnaryCallSettings<CreateHubRequest,Operation> createHubSettings()
```

Returns the object with the settings used for calls to createHub.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateHubRequest](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.CreateHubRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)\>

### createSpokeOperationSettings()

```
public OperationCallSettings<CreateSpokeRequest,Spoke,OperationMetadata> createSpokeOperationSettings()
```

Returns the object with the settings used for calls to createSpoke.

**Returns**

**Type**

**Description**

[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[CreateSpokeRequest](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.CreateSpokeRequest),[Spoke](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.Spoke),[OperationMetadata](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.OperationMetadata)\>

### createSpokeSettings()

```
public UnaryCallSettings<CreateSpokeRequest,Operation> createSpokeSettings()
```

Returns the object with the settings used for calls to createSpoke.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateSpokeRequest](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.CreateSpokeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)\>

### createStub()

```
public HubServiceStub createStub()
```

**Returns**

**Type**

**Description**

[HubServiceStub](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.stub.HubServiceStub)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### deleteHubOperationSettings()

```
public OperationCallSettings<DeleteHubRequest,Empty,OperationMetadata> deleteHubOperationSettings()
```

Returns the object with the settings used for calls to deleteHub.

**Returns**

**Type**

**Description**

[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[DeleteHubRequest](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.DeleteHubRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.OperationMetadata)\>

### deleteHubSettings()

```
public UnaryCallSettings<DeleteHubRequest,Operation> deleteHubSettings()
```

Returns the object with the settings used for calls to deleteHub.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteHubRequest](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.DeleteHubRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)\>

### deleteSpokeOperationSettings()

```
public OperationCallSettings<DeleteSpokeRequest,Empty,OperationMetadata> deleteSpokeOperationSettings()
```

Returns the object with the settings used for calls to deleteSpoke.

**Returns**

**Type**

**Description**

[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[DeleteSpokeRequest](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.DeleteSpokeRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.OperationMetadata)\>

### deleteSpokeSettings()

```
public UnaryCallSettings<DeleteSpokeRequest,Operation> deleteSpokeSettings()
```

Returns the object with the settings used for calls to deleteSpoke.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteSpokeRequest](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.DeleteSpokeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)\>

### getHubSettings()

```
public UnaryCallSettings<GetHubRequest,Hub> getHubSettings()
```

Returns the object with the settings used for calls to getHub.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetHubRequest](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.GetHubRequest),[Hub](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.Hub)\>

### getSpokeSettings()

```
public UnaryCallSettings<GetSpokeRequest,Spoke> getSpokeSettings()
```

Returns the object with the settings used for calls to getSpoke.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetSpokeRequest](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.GetSpokeRequest),[Spoke](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.Spoke)\>

### listHubsSettings()

```
public PagedCallSettings<ListHubsRequest,ListHubsResponse,HubServiceClient.ListHubsPagedResponse> listHubsSettings()
```

Returns the object with the settings used for calls to listHubs.

**Returns**

**Type**

**Description**

[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListHubsRequest](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.ListHubsRequest),[ListHubsResponse](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.ListHubsResponse),[ListHubsPagedResponse](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.HubServiceClient.ListHubsPagedResponse)\>

### listSpokesSettings()

```
public PagedCallSettings<ListSpokesRequest,ListSpokesResponse,HubServiceClient.ListSpokesPagedResponse> listSpokesSettings()
```

Returns the object with the settings used for calls to listSpokes.

**Returns**

**Type**

**Description**

[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListSpokesRequest](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.ListSpokesRequest),[ListSpokesResponse](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.ListSpokesResponse),[ListSpokesPagedResponse](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.HubServiceClient.ListSpokesPagedResponse)\>

### toBuilder()

```
public HubServiceStubSettings.Builder toBuilder()
```

Returns a builder containing all the values of this settings class.

**Returns**

**Type**

**Description**

[HubServiceStubSettings.Builder](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.stub.HubServiceStubSettings.Builder)

**Overrides**

[StubSettings<SettingsT>.toBuilder()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_toBuilder__)

### updateHubOperationSettings()

```
public OperationCallSettings<UpdateHubRequest,Hub,OperationMetadata> updateHubOperationSettings()
```

Returns the object with the settings used for calls to updateHub.

**Returns**

**Type**

**Description**

[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[UpdateHubRequest](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.UpdateHubRequest),[Hub](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.Hub),[OperationMetadata](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.OperationMetadata)\>

### updateHubSettings()

```
public UnaryCallSettings<UpdateHubRequest,Operation> updateHubSettings()
```

Returns the object with the settings used for calls to updateHub.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateHubRequest](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.UpdateHubRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)\>

### updateSpokeOperationSettings()

```
public OperationCallSettings<UpdateSpokeRequest,Spoke,OperationMetadata> updateSpokeOperationSettings()
```

Returns the object with the settings used for calls to updateSpoke.

**Returns**

**Type**

**Description**

[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[UpdateSpokeRequest](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.UpdateSpokeRequest),[Spoke](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.Spoke),[OperationMetadata](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.OperationMetadata)\>

### updateSpokeSettings()

```
public UnaryCallSettings<UpdateSpokeRequest,Operation> updateSpokeSettings()
```

Returns the object with the settings used for calls to updateSpoke.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateSpokeRequest](/java/docs/reference/google-cloud-networkconnectivity/1.6.0/com.google.cloud.networkconnectivity.v1alpha1.UpdateSpokeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)\>

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
