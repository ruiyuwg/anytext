-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class RecommenderSettings (2.29.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.7 2.4.1 2.3.0 2.2.0 2.1.5

```
public class RecommenderSettings extends ClientSettings<RecommenderSettings>
```

Settings class to configure an instance of [RecommenderClient](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.RecommenderClient).

The default instance has everything set to sensible defaults:

-   The default service address (recommender.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of getInsight to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 RecommenderSettings.Builder recommenderSettingsBuilder = RecommenderSettings.newBuilder();
 recommenderSettingsBuilder
     .getInsightSettings()
     .setRetrySettings(
         recommenderSettingsBuilder
             .getInsightSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 RecommenderSettings recommenderSettings = recommenderSettingsBuilder.build();
 
```
 

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [ClientSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html) \> RecommenderSettings

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

### create(RecommenderStubSettings stub)

```
public static final RecommenderSettings create(RecommenderStubSettings stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[RecommenderStubSettings](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.stub.RecommenderStubSettings)`  

**Returns**

**Type**

**Description**

`[RecommenderSettings](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.RecommenderSettings)`

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
public static RecommenderSettings.Builder newBuilder()
```

Returns a new gRPC builder for this class.

**Returns**

**Type**

**Description**

`[RecommenderSettings.Builder](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.RecommenderSettings.Builder)`

### newBuilder(ClientContext clientContext)

```
public static RecommenderSettings.Builder newBuilder(ClientContext clientContext)
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

`[RecommenderSettings.Builder](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.RecommenderSettings.Builder)`

### newHttpJsonBuilder()

```
public static RecommenderSettings.Builder newHttpJsonBuilder()
```

Returns a new REST builder for this class.

**Returns**

**Type**

**Description**

`[RecommenderSettings.Builder](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.RecommenderSettings.Builder)`

## Constructors

### RecommenderSettings(RecommenderSettings.Builder settingsBuilder)

```
protected RecommenderSettings(RecommenderSettings.Builder settingsBuilder)
```

**Parameter**

**Name**

**Description**

`settingsBuilder`

`[RecommenderSettings.Builder](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.RecommenderSettings.Builder)`  

## Methods

### getInsightSettings()

```
public UnaryCallSettings<GetInsightRequest,Insight> getInsightSettings()
```

Returns the object with the settings used for calls to getInsight.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetInsightRequest](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.GetInsightRequest),[Insight](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.Insight)>`

### getInsightTypeConfigSettings()

```
public UnaryCallSettings<GetInsightTypeConfigRequest,InsightTypeConfig> getInsightTypeConfigSettings()
```

Returns the object with the settings used for calls to getInsightTypeConfig.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetInsightTypeConfigRequest](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.GetInsightTypeConfigRequest),[InsightTypeConfig](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.InsightTypeConfig)>`

### getRecommendationSettings()

```
public UnaryCallSettings<GetRecommendationRequest,Recommendation> getRecommendationSettings()
```

Returns the object with the settings used for calls to getRecommendation.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetRecommendationRequest](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.GetRecommendationRequest),[Recommendation](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.Recommendation)>`

### getRecommenderConfigSettings()

```
public UnaryCallSettings<GetRecommenderConfigRequest,RecommenderConfig> getRecommenderConfigSettings()
```

Returns the object with the settings used for calls to getRecommenderConfig.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetRecommenderConfigRequest](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.GetRecommenderConfigRequest),[RecommenderConfig](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.RecommenderConfig)>`

### listInsightTypesSettings()

```
public PagedCallSettings<ListInsightTypesRequest,ListInsightTypesResponse,RecommenderClient.ListInsightTypesPagedResponse> listInsightTypesSettings()
```

Returns the object with the settings used for calls to listInsightTypes.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListInsightTypesRequest](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.ListInsightTypesRequest),[ListInsightTypesResponse](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.ListInsightTypesResponse),[ListInsightTypesPagedResponse](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.RecommenderClient.ListInsightTypesPagedResponse)>`

### listInsightsSettings()

```
public PagedCallSettings<ListInsightsRequest,ListInsightsResponse,RecommenderClient.ListInsightsPagedResponse> listInsightsSettings()
```

Returns the object with the settings used for calls to listInsights.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListInsightsRequest](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.ListInsightsRequest),[ListInsightsResponse](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.ListInsightsResponse),[ListInsightsPagedResponse](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.RecommenderClient.ListInsightsPagedResponse)>`

### listRecommendationsSettings()

```
public PagedCallSettings<ListRecommendationsRequest,ListRecommendationsResponse,RecommenderClient.ListRecommendationsPagedResponse> listRecommendationsSettings()
```

Returns the object with the settings used for calls to listRecommendations.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListRecommendationsRequest](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.ListRecommendationsRequest),[ListRecommendationsResponse](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.ListRecommendationsResponse),[ListRecommendationsPagedResponse](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.RecommenderClient.ListRecommendationsPagedResponse)>`

### listRecommendersSettings()

```
public PagedCallSettings<ListRecommendersRequest,ListRecommendersResponse,RecommenderClient.ListRecommendersPagedResponse> listRecommendersSettings()
```

Returns the object with the settings used for calls to listRecommenders.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListRecommendersRequest](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.ListRecommendersRequest),[ListRecommendersResponse](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.ListRecommendersResponse),[ListRecommendersPagedResponse](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.RecommenderClient.ListRecommendersPagedResponse)>`

### markInsightAcceptedSettings()

```
public UnaryCallSettings<MarkInsightAcceptedRequest,Insight> markInsightAcceptedSettings()
```

Returns the object with the settings used for calls to markInsightAccepted.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[MarkInsightAcceptedRequest](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.MarkInsightAcceptedRequest),[Insight](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.Insight)>`

### markRecommendationClaimedSettings()

```
public UnaryCallSettings<MarkRecommendationClaimedRequest,Recommendation> markRecommendationClaimedSettings()
```

Returns the object with the settings used for calls to markRecommendationClaimed.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[MarkRecommendationClaimedRequest](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.MarkRecommendationClaimedRequest),[Recommendation](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.Recommendation)>`

### markRecommendationFailedSettings()

```
public UnaryCallSettings<MarkRecommendationFailedRequest,Recommendation> markRecommendationFailedSettings()
```

Returns the object with the settings used for calls to markRecommendationFailed.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[MarkRecommendationFailedRequest](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.MarkRecommendationFailedRequest),[Recommendation](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.Recommendation)>`

### markRecommendationSucceededSettings()

```
public UnaryCallSettings<MarkRecommendationSucceededRequest,Recommendation> markRecommendationSucceededSettings()
```

Returns the object with the settings used for calls to markRecommendationSucceeded.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[MarkRecommendationSucceededRequest](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.MarkRecommendationSucceededRequest),[Recommendation](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.Recommendation)>`

### toBuilder()

```
public RecommenderSettings.Builder toBuilder()
```

Returns a builder containing all the values of this settings class.

**Returns**

**Type**

**Description**

`[RecommenderSettings.Builder](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.RecommenderSettings.Builder)`

**Overrides**

[ClientSettings<SettingsT>.<B>toBuilder()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings__B_toBuilder__)

### updateInsightTypeConfigSettings()

```
public UnaryCallSettings<UpdateInsightTypeConfigRequest,InsightTypeConfig> updateInsightTypeConfigSettings()
```

Returns the object with the settings used for calls to updateInsightTypeConfig.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateInsightTypeConfigRequest](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.UpdateInsightTypeConfigRequest),[InsightTypeConfig](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.InsightTypeConfig)>`

### updateRecommenderConfigSettings()

```
public UnaryCallSettings<UpdateRecommenderConfigRequest,RecommenderConfig> updateRecommenderConfigSettings()
```

Returns the object with the settings used for calls to updateRecommenderConfig.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateRecommenderConfigRequest](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.UpdateRecommenderConfigRequest),[RecommenderConfig](/java/docs/reference/google-cloud-recommender/2.29.0/com.google.cloud.recommender.v1beta1.RecommenderConfig)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
