-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class VideoStitcherServiceStubSettings (0.1.2) Stay organized with collections Save and categorize content based on your preferences.

0.87.0 (latest) 0.85.0 0.83.0 0.82.0 0.80.0 0.78.0 0.76.0 0.75.0 0.74.0 0.73.0 0.72.0 0.70.0 0.68.0 0.67.0 0.64.0 0.63.0 0.62.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.6 0.1.2

```
public class VideoStitcherServiceStubSettings extends StubSettings<VideoStitcherServiceStubSettings>
```

Settings class to configure an instance of [VideoStitcherServiceStub](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.stub.VideoStitcherServiceStub).

The default instance has everything set to sensible defaults:

-   The default service address (videostitcher.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of createCdnKey to 30 seconds:

 ```

 VideoStitcherServiceStubSettings.Builder videoStitcherServiceSettingsBuilder =
     VideoStitcherServiceStubSettings.newBuilder();
 videoStitcherServiceSettingsBuilder
     .createCdnKeySettings()
     .setRetrySettings(
         videoStitcherServiceSettingsBuilder
             .createCdnKeySettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 VideoStitcherServiceStubSettings videoStitcherServiceSettings =
     videoStitcherServiceSettingsBuilder.build();
 
```
 

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [StubSettings](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.StubSettings.html) \> VideoStitcherServiceStubSettings

## Inherited Members

[StubSettings.getBackgroundExecutorProvider()](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getBackgroundExecutorProvider__)

[StubSettings.getClock()](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getClock__)

[StubSettings.getCredentialsProvider()](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getCredentialsProvider__)

[StubSettings.getEndpoint()](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getEndpoint__)

[StubSettings.getExecutorProvider()](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getExecutorProvider__)

[StubSettings.getHeaderProvider()](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getHeaderProvider__)

[StubSettings.getInternalHeaderProvider()](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getInternalHeaderProvider__)

[StubSettings.getMtlsEndpoint()](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getMtlsEndpoint__)

[StubSettings.getQuotaProjectId()](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getQuotaProjectId__)

[StubSettings.getStreamWatchdogCheckInterval()](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getStreamWatchdogCheckInterval__)

[StubSettings.getStreamWatchdogProvider()](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getStreamWatchdogProvider__)

[StubSettings.getTracerFactory()](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getTracerFactory__)

[StubSettings.getTransportChannelProvider()](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getTransportChannelProvider__)

[StubSettings.toBuilder()](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_toBuilder__)

[StubSettings.toString()](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_toString__)

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

[Builder](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.ApiClientHeaderProvider.Builder.html)

### defaultCredentialsProviderBuilder()

```
public static GoogleCredentialsProvider.Builder defaultCredentialsProviderBuilder()
```

Returns a builder for the default credentials for this service.

**Returns**

**Type**

**Description**

[Builder](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.core.GoogleCredentialsProvider.Builder.html)

### defaultExecutorProviderBuilder()

```
public static InstantiatingExecutorProvider.Builder defaultExecutorProviderBuilder()
```

Returns a builder for the default ExecutorProvider for this service.

**Returns**

**Type**

**Description**

[Builder](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.core.InstantiatingExecutorProvider.Builder.html)

### defaultGrpcTransportProviderBuilder()

```
public static InstantiatingGrpcChannelProvider.Builder defaultGrpcTransportProviderBuilder()
```

Returns a builder for the default ChannelProvider for this service.

**Returns**

**Type**

**Description**

[Builder](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.grpc.InstantiatingGrpcChannelProvider.Builder.html)

### defaultTransportChannelProvider()

```
public static TransportChannelProvider defaultTransportChannelProvider()
```

**Returns**

**Type**

**Description**

[TransportChannelProvider](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.TransportChannelProvider.html)

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
public static VideoStitcherServiceStubSettings.Builder newBuilder()
```

Returns a new builder for this class.

**Returns**

**Type**

**Description**

[VideoStitcherServiceStubSettings.Builder](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.stub.VideoStitcherServiceStubSettings.Builder)

### newBuilder(ClientContext clientContext)

```
public static VideoStitcherServiceStubSettings.Builder newBuilder(ClientContext clientContext)
```

Returns a new builder for this class.

**Parameter**

**Name**

**Description**

clientContext

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

[VideoStitcherServiceStubSettings.Builder](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.stub.VideoStitcherServiceStubSettings.Builder)

## Constructors

### VideoStitcherServiceStubSettings(VideoStitcherServiceStubSettings.Builder settingsBuilder)

```
protected VideoStitcherServiceStubSettings(VideoStitcherServiceStubSettings.Builder settingsBuilder)
```

**Parameter**

**Name**

**Description**

settingsBuilder

`[VideoStitcherServiceStubSettings.Builder](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.stub.VideoStitcherServiceStubSettings.Builder)`  

## Methods

### createCdnKeySettings()

```
public UnaryCallSettings<CreateCdnKeyRequest,CdnKey> createCdnKeySettings()
```

Returns the object with the settings used for calls to createCdnKey.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateCdnKeyRequest](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.CreateCdnKeyRequest),[CdnKey](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.CdnKey)\>

### createLiveSessionSettings()

```
public UnaryCallSettings<CreateLiveSessionRequest,LiveSession> createLiveSessionSettings()
```

Returns the object with the settings used for calls to createLiveSession.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateLiveSessionRequest](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.CreateLiveSessionRequest),[LiveSession](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.LiveSession)\>

### createSlateSettings()

```
public UnaryCallSettings<CreateSlateRequest,Slate> createSlateSettings()
```

Returns the object with the settings used for calls to createSlate.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateSlateRequest](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.CreateSlateRequest),[Slate](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.Slate)\>

### createStub()

```
public VideoStitcherServiceStub createStub()
```

**Returns**

**Type**

**Description**

[VideoStitcherServiceStub](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.stub.VideoStitcherServiceStub)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### createVodSessionSettings()

```
public UnaryCallSettings<CreateVodSessionRequest,VodSession> createVodSessionSettings()
```

Returns the object with the settings used for calls to createVodSession.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateVodSessionRequest](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.CreateVodSessionRequest),[VodSession](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.VodSession)\>

### deleteCdnKeySettings()

```
public UnaryCallSettings<DeleteCdnKeyRequest,Empty> deleteCdnKeySettings()
```

Returns the object with the settings used for calls to deleteCdnKey.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteCdnKeyRequest](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.DeleteCdnKeyRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)\>

### deleteSlateSettings()

```
public UnaryCallSettings<DeleteSlateRequest,Empty> deleteSlateSettings()
```

Returns the object with the settings used for calls to deleteSlate.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteSlateRequest](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.DeleteSlateRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)\>

### getCdnKeySettings()

```
public UnaryCallSettings<GetCdnKeyRequest,CdnKey> getCdnKeySettings()
```

Returns the object with the settings used for calls to getCdnKey.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetCdnKeyRequest](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.GetCdnKeyRequest),[CdnKey](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.CdnKey)\>

### getLiveAdTagDetailSettings()

```
public UnaryCallSettings<GetLiveAdTagDetailRequest,LiveAdTagDetail> getLiveAdTagDetailSettings()
```

Returns the object with the settings used for calls to getLiveAdTagDetail.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetLiveAdTagDetailRequest](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.GetLiveAdTagDetailRequest),[LiveAdTagDetail](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.LiveAdTagDetail)\>

### getLiveSessionSettings()

```
public UnaryCallSettings<GetLiveSessionRequest,LiveSession> getLiveSessionSettings()
```

Returns the object with the settings used for calls to getLiveSession.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetLiveSessionRequest](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.GetLiveSessionRequest),[LiveSession](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.LiveSession)\>

### getSlateSettings()

```
public UnaryCallSettings<GetSlateRequest,Slate> getSlateSettings()
```

Returns the object with the settings used for calls to getSlate.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetSlateRequest](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.GetSlateRequest),[Slate](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.Slate)\>

### getVodAdTagDetailSettings()

```
public UnaryCallSettings<GetVodAdTagDetailRequest,VodAdTagDetail> getVodAdTagDetailSettings()
```

Returns the object with the settings used for calls to getVodAdTagDetail.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetVodAdTagDetailRequest](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.GetVodAdTagDetailRequest),[VodAdTagDetail](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.VodAdTagDetail)\>

### getVodSessionSettings()

```
public UnaryCallSettings<GetVodSessionRequest,VodSession> getVodSessionSettings()
```

Returns the object with the settings used for calls to getVodSession.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetVodSessionRequest](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.GetVodSessionRequest),[VodSession](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.VodSession)\>

### getVodStitchDetailSettings()

```
public UnaryCallSettings<GetVodStitchDetailRequest,VodStitchDetail> getVodStitchDetailSettings()
```

Returns the object with the settings used for calls to getVodStitchDetail.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetVodStitchDetailRequest](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.GetVodStitchDetailRequest),[VodStitchDetail](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.VodStitchDetail)\>

### listCdnKeysSettings()

```
public PagedCallSettings<ListCdnKeysRequest,ListCdnKeysResponse,VideoStitcherServiceClient.ListCdnKeysPagedResponse> listCdnKeysSettings()
```

Returns the object with the settings used for calls to listCdnKeys.

**Returns**

**Type**

**Description**

[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.PagedCallSettings.html)<[ListCdnKeysRequest](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.ListCdnKeysRequest),[ListCdnKeysResponse](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.ListCdnKeysResponse),[ListCdnKeysPagedResponse](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.VideoStitcherServiceClient.ListCdnKeysPagedResponse)\>

### listLiveAdTagDetailsSettings()

```
public PagedCallSettings<ListLiveAdTagDetailsRequest,ListLiveAdTagDetailsResponse,VideoStitcherServiceClient.ListLiveAdTagDetailsPagedResponse> listLiveAdTagDetailsSettings()
```

Returns the object with the settings used for calls to listLiveAdTagDetails.

**Returns**

**Type**

**Description**

[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.PagedCallSettings.html)<[ListLiveAdTagDetailsRequest](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.ListLiveAdTagDetailsRequest),[ListLiveAdTagDetailsResponse](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.ListLiveAdTagDetailsResponse),[ListLiveAdTagDetailsPagedResponse](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.VideoStitcherServiceClient.ListLiveAdTagDetailsPagedResponse)\>

### listSlatesSettings()

```
public PagedCallSettings<ListSlatesRequest,ListSlatesResponse,VideoStitcherServiceClient.ListSlatesPagedResponse> listSlatesSettings()
```

Returns the object with the settings used for calls to listSlates.

**Returns**

**Type**

**Description**

[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.PagedCallSettings.html)<[ListSlatesRequest](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.ListSlatesRequest),[ListSlatesResponse](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.ListSlatesResponse),[ListSlatesPagedResponse](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.VideoStitcherServiceClient.ListSlatesPagedResponse)\>

### listVodAdTagDetailsSettings()

```
public PagedCallSettings<ListVodAdTagDetailsRequest,ListVodAdTagDetailsResponse,VideoStitcherServiceClient.ListVodAdTagDetailsPagedResponse> listVodAdTagDetailsSettings()
```

Returns the object with the settings used for calls to listVodAdTagDetails.

**Returns**

**Type**

**Description**

[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.PagedCallSettings.html)<[ListVodAdTagDetailsRequest](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.ListVodAdTagDetailsRequest),[ListVodAdTagDetailsResponse](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.ListVodAdTagDetailsResponse),[ListVodAdTagDetailsPagedResponse](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.VideoStitcherServiceClient.ListVodAdTagDetailsPagedResponse)\>

### listVodStitchDetailsSettings()

```
public PagedCallSettings<ListVodStitchDetailsRequest,ListVodStitchDetailsResponse,VideoStitcherServiceClient.ListVodStitchDetailsPagedResponse> listVodStitchDetailsSettings()
```

Returns the object with the settings used for calls to listVodStitchDetails.

**Returns**

**Type**

**Description**

[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.PagedCallSettings.html)<[ListVodStitchDetailsRequest](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.ListVodStitchDetailsRequest),[ListVodStitchDetailsResponse](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.ListVodStitchDetailsResponse),[ListVodStitchDetailsPagedResponse](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.VideoStitcherServiceClient.ListVodStitchDetailsPagedResponse)\>

### toBuilder()

```
public VideoStitcherServiceStubSettings.Builder toBuilder()
```

Returns a builder containing all the values of this settings class.

**Returns**

**Type**

**Description**

[VideoStitcherServiceStubSettings.Builder](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.stub.VideoStitcherServiceStubSettings.Builder)

**Overrides**

[StubSettings<SettingsT>.toBuilder()](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_toBuilder__)

### updateCdnKeySettings()

```
public UnaryCallSettings<UpdateCdnKeyRequest,CdnKey> updateCdnKeySettings()
```

Returns the object with the settings used for calls to updateCdnKey.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateCdnKeyRequest](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.UpdateCdnKeyRequest),[CdnKey](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.CdnKey)\>

### updateSlateSettings()

```
public UnaryCallSettings<UpdateSlateRequest,Slate> updateSlateSettings()
```

Returns the object with the settings used for calls to updateSlate.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/2.19.2/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateSlateRequest](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.UpdateSlateRequest),[Slate](/java/docs/reference/google-cloud-video-stitcher/0.1.2/com.google.cloud.video.stitcher.v1.Slate)\>

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
