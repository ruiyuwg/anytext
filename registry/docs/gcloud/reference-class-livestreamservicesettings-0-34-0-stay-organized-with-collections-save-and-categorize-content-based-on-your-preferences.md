-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class LivestreamServiceSettings (0.34.0) Stay organized with collections Save and categorize content based on your preferences.

0.89.0 (latest) 0.87.0 0.85.0 0.84.0 0.82.0 0.80.0 0.78.0 0.77.0 0.76.0 0.75.0 0.74.0 0.72.0 0.70.0 0.69.0 0.66.0 0.65.0 0.64.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.8 0.3.0

```
public class LivestreamServiceSettings extends ClientSettings<LivestreamServiceSettings>
```

Settings class to configure an instance of [LivestreamServiceClient](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.LivestreamServiceClient).

The default instance has everything set to sensible defaults:

-   The default service address (livestream.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of getChannel to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 LivestreamServiceSettings.Builder livestreamServiceSettingsBuilder =
     LivestreamServiceSettings.newBuilder();
 livestreamServiceSettingsBuilder
     .getChannelSettings()
     .setRetrySettings(
         livestreamServiceSettingsBuilder
             .getChannelSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 LivestreamServiceSettings livestreamServiceSettings = livestreamServiceSettingsBuilder.build();
 
```
 

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [ClientSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html) \> LivestreamServiceSettings

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

### create(LivestreamServiceStubSettings stub)

```
public static final LivestreamServiceSettings create(LivestreamServiceStubSettings stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[LivestreamServiceStubSettings](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.stub.LivestreamServiceStubSettings)`  

**Returns**

**Type**

**Description**

`[LivestreamServiceSettings](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.LivestreamServiceSettings)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### defaultApiClientHeaderProviderBuilder()

```
public static ApiClientHeaderProvider.Builder defaultApiClientHeaderProviderBuilder()
```

**Beta**

_The surface for customizing headers is not stable yet and may change in the future._

This feature is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the launch stage descriptions.

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
public static LivestreamServiceSettings.Builder newBuilder()
```

Returns a new gRPC builder for this class.

**Returns**

**Type**

**Description**

`[LivestreamServiceSettings.Builder](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.LivestreamServiceSettings.Builder)`

### newBuilder(ClientContext clientContext)

```
public static LivestreamServiceSettings.Builder newBuilder(ClientContext clientContext)
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

`[LivestreamServiceSettings.Builder](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.LivestreamServiceSettings.Builder)`

### newHttpJsonBuilder()

```
public static LivestreamServiceSettings.Builder newHttpJsonBuilder()
```

**Beta**

This feature is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the launch stage descriptions.

Returns a new REST builder for this class.

**Returns**

**Type**

**Description**

`[LivestreamServiceSettings.Builder](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.LivestreamServiceSettings.Builder)`

## Constructors

### LivestreamServiceSettings(LivestreamServiceSettings.Builder settingsBuilder)

```
protected LivestreamServiceSettings(LivestreamServiceSettings.Builder settingsBuilder)
```

**Parameter**

**Name**

**Description**

`settingsBuilder`

`[LivestreamServiceSettings.Builder](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.LivestreamServiceSettings.Builder)`  

## Methods

### createAssetOperationSettings()

```
public OperationCallSettings<CreateAssetRequest,Asset,OperationMetadata> createAssetOperationSettings()
```

Returns the object with the settings used for calls to createAsset.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[CreateAssetRequest](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.CreateAssetRequest),[Asset](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.Asset),[OperationMetadata](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.OperationMetadata)>`

### createAssetSettings()

```
public UnaryCallSettings<CreateAssetRequest,Operation> createAssetSettings()
```

Returns the object with the settings used for calls to createAsset.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateAssetRequest](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.CreateAssetRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createChannelOperationSettings()

```
public OperationCallSettings<CreateChannelRequest,Channel,OperationMetadata> createChannelOperationSettings()
```

Returns the object with the settings used for calls to createChannel.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[CreateChannelRequest](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.CreateChannelRequest),[Channel](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.Channel),[OperationMetadata](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.OperationMetadata)>`

### createChannelSettings()

```
public UnaryCallSettings<CreateChannelRequest,Operation> createChannelSettings()
```

Returns the object with the settings used for calls to createChannel.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateChannelRequest](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.CreateChannelRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createEventSettings()

```
public UnaryCallSettings<CreateEventRequest,Event> createEventSettings()
```

Returns the object with the settings used for calls to createEvent.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateEventRequest](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.CreateEventRequest),[Event](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.Event)>`

### createInputOperationSettings()

```
public OperationCallSettings<CreateInputRequest,Input,OperationMetadata> createInputOperationSettings()
```

Returns the object with the settings used for calls to createInput.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[CreateInputRequest](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.CreateInputRequest),[Input](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.Input),[OperationMetadata](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.OperationMetadata)>`

### createInputSettings()

```
public UnaryCallSettings<CreateInputRequest,Operation> createInputSettings()
```

Returns the object with the settings used for calls to createInput.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateInputRequest](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.CreateInputRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteAssetOperationSettings()

```
public OperationCallSettings<DeleteAssetRequest,Empty,OperationMetadata> deleteAssetOperationSettings()
```

Returns the object with the settings used for calls to deleteAsset.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[DeleteAssetRequest](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.DeleteAssetRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.OperationMetadata)>`

### deleteAssetSettings()

```
public UnaryCallSettings<DeleteAssetRequest,Operation> deleteAssetSettings()
```

Returns the object with the settings used for calls to deleteAsset.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteAssetRequest](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.DeleteAssetRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteChannelOperationSettings()

```
public OperationCallSettings<DeleteChannelRequest,Empty,OperationMetadata> deleteChannelOperationSettings()
```

Returns the object with the settings used for calls to deleteChannel.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[DeleteChannelRequest](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.DeleteChannelRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.OperationMetadata)>`

### deleteChannelSettings()

```
public UnaryCallSettings<DeleteChannelRequest,Operation> deleteChannelSettings()
```

Returns the object with the settings used for calls to deleteChannel.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteChannelRequest](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.DeleteChannelRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteEventSettings()

```
public UnaryCallSettings<DeleteEventRequest,Empty> deleteEventSettings()
```

Returns the object with the settings used for calls to deleteEvent.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteEventRequest](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.DeleteEventRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### deleteInputOperationSettings()

```
public OperationCallSettings<DeleteInputRequest,Empty,OperationMetadata> deleteInputOperationSettings()
```

Returns the object with the settings used for calls to deleteInput.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[DeleteInputRequest](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.DeleteInputRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.OperationMetadata)>`

### deleteInputSettings()

```
public UnaryCallSettings<DeleteInputRequest,Operation> deleteInputSettings()
```

Returns the object with the settings used for calls to deleteInput.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteInputRequest](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.DeleteInputRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getAssetSettings()

```
public UnaryCallSettings<GetAssetRequest,Asset> getAssetSettings()
```

Returns the object with the settings used for calls to getAsset.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetAssetRequest](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.GetAssetRequest),[Asset](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.Asset)>`

### getChannelSettings()

```
public UnaryCallSettings<GetChannelRequest,Channel> getChannelSettings()
```

Returns the object with the settings used for calls to getChannel.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetChannelRequest](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.GetChannelRequest),[Channel](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.Channel)>`

### getEventSettings()

```
public UnaryCallSettings<GetEventRequest,Event> getEventSettings()
```

Returns the object with the settings used for calls to getEvent.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetEventRequest](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.GetEventRequest),[Event](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.Event)>`

### getInputSettings()

```
public UnaryCallSettings<GetInputRequest,Input> getInputSettings()
```

Returns the object with the settings used for calls to getInput.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetInputRequest](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.GetInputRequest),[Input](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.Input)>`

### getLocationSettings()

```
public UnaryCallSettings<GetLocationRequest,Location> getLocationSettings()
```

Returns the object with the settings used for calls to getLocation.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<com.google.cloud.location.GetLocationRequest,com.google.cloud.location.Location>`

### getPoolSettings()

```
public UnaryCallSettings<GetPoolRequest,Pool> getPoolSettings()
```

Returns the object with the settings used for calls to getPool.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetPoolRequest](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.GetPoolRequest),[Pool](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.Pool)>`

### listAssetsSettings()

```
public PagedCallSettings<ListAssetsRequest,ListAssetsResponse,LivestreamServiceClient.ListAssetsPagedResponse> listAssetsSettings()
```

Returns the object with the settings used for calls to listAssets.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListAssetsRequest](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.ListAssetsRequest),[ListAssetsResponse](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.ListAssetsResponse),[ListAssetsPagedResponse](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.LivestreamServiceClient.ListAssetsPagedResponse)>`

### listChannelsSettings()

```
public PagedCallSettings<ListChannelsRequest,ListChannelsResponse,LivestreamServiceClient.ListChannelsPagedResponse> listChannelsSettings()
```

Returns the object with the settings used for calls to listChannels.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListChannelsRequest](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.ListChannelsRequest),[ListChannelsResponse](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.ListChannelsResponse),[ListChannelsPagedResponse](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.LivestreamServiceClient.ListChannelsPagedResponse)>`

### listEventsSettings()

```
public PagedCallSettings<ListEventsRequest,ListEventsResponse,LivestreamServiceClient.ListEventsPagedResponse> listEventsSettings()
```

Returns the object with the settings used for calls to listEvents.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListEventsRequest](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.ListEventsRequest),[ListEventsResponse](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.ListEventsResponse),[ListEventsPagedResponse](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.LivestreamServiceClient.ListEventsPagedResponse)>`

### listInputsSettings()

```
public PagedCallSettings<ListInputsRequest,ListInputsResponse,LivestreamServiceClient.ListInputsPagedResponse> listInputsSettings()
```

Returns the object with the settings used for calls to listInputs.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListInputsRequest](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.ListInputsRequest),[ListInputsResponse](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.ListInputsResponse),[ListInputsPagedResponse](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.LivestreamServiceClient.ListInputsPagedResponse)>`

### listLocationsSettings()

```
public PagedCallSettings<ListLocationsRequest,ListLocationsResponse,LivestreamServiceClient.ListLocationsPagedResponse> listLocationsSettings()
```

Returns the object with the settings used for calls to listLocations.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<com.google.cloud.location.ListLocationsRequest,com.google.cloud.location.ListLocationsResponse,[ListLocationsPagedResponse](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.LivestreamServiceClient.ListLocationsPagedResponse)>`

### startChannelOperationSettings()

```
public OperationCallSettings<StartChannelRequest,ChannelOperationResponse,OperationMetadata> startChannelOperationSettings()
```

Returns the object with the settings used for calls to startChannel.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[StartChannelRequest](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.StartChannelRequest),[ChannelOperationResponse](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.ChannelOperationResponse),[OperationMetadata](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.OperationMetadata)>`

### startChannelSettings()

```
public UnaryCallSettings<StartChannelRequest,Operation> startChannelSettings()
```

Returns the object with the settings used for calls to startChannel.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[StartChannelRequest](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.StartChannelRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### stopChannelOperationSettings()

```
public OperationCallSettings<StopChannelRequest,ChannelOperationResponse,OperationMetadata> stopChannelOperationSettings()
```

Returns the object with the settings used for calls to stopChannel.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[StopChannelRequest](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.StopChannelRequest),[ChannelOperationResponse](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.ChannelOperationResponse),[OperationMetadata](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.OperationMetadata)>`

### stopChannelSettings()

```
public UnaryCallSettings<StopChannelRequest,Operation> stopChannelSettings()
```

Returns the object with the settings used for calls to stopChannel.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[StopChannelRequest](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.StopChannelRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### toBuilder()

```
public LivestreamServiceSettings.Builder toBuilder()
```

Returns a builder containing all the values of this settings class.

**Returns**

**Type**

**Description**

`[LivestreamServiceSettings.Builder](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.LivestreamServiceSettings.Builder)`

**Overrides**

[ClientSettings<SettingsT>.<B>toBuilder()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings__B_toBuilder__)

### updateChannelOperationSettings()

```
public OperationCallSettings<UpdateChannelRequest,Channel,OperationMetadata> updateChannelOperationSettings()
```

Returns the object with the settings used for calls to updateChannel.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[UpdateChannelRequest](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.UpdateChannelRequest),[Channel](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.Channel),[OperationMetadata](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.OperationMetadata)>`

### updateChannelSettings()

```
public UnaryCallSettings<UpdateChannelRequest,Operation> updateChannelSettings()
```

Returns the object with the settings used for calls to updateChannel.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateChannelRequest](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.UpdateChannelRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateInputOperationSettings()

```
public OperationCallSettings<UpdateInputRequest,Input,OperationMetadata> updateInputOperationSettings()
```

Returns the object with the settings used for calls to updateInput.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[UpdateInputRequest](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.UpdateInputRequest),[Input](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.Input),[OperationMetadata](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.OperationMetadata)>`

### updateInputSettings()

```
public UnaryCallSettings<UpdateInputRequest,Operation> updateInputSettings()
```

Returns the object with the settings used for calls to updateInput.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateInputRequest](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.UpdateInputRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updatePoolOperationSettings()

```
public OperationCallSettings<UpdatePoolRequest,Pool,OperationMetadata> updatePoolOperationSettings()
```

Returns the object with the settings used for calls to updatePool.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[UpdatePoolRequest](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.UpdatePoolRequest),[Pool](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.Pool),[OperationMetadata](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.OperationMetadata)>`

### updatePoolSettings()

```
public UnaryCallSettings<UpdatePoolRequest,Operation> updatePoolSettings()
```

Returns the object with the settings used for calls to updatePool.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdatePoolRequest](/java/docs/reference/google-cloud-live-stream/0.34.0/com.google.cloud.video.livestream.v1.UpdatePoolRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
