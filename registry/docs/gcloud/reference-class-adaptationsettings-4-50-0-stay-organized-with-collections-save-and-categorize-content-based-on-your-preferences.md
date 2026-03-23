-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class AdaptationSettings (4.50.0) Stay organized with collections Save and categorize content based on your preferences.

4.82.0 (latest) 4.80.0 4.78.0 4.77.0 4.75.0 4.73.0 4.71.0 4.70.0 4.69.0 4.68.0 4.67.0 4.65.0 4.63.0 4.62.0 4.59.0 4.58.0 4.57.0 4.55.0 4.54.0 4.53.0 4.52.0 4.51.0 4.50.0 4.49.0 4.48.0 4.47.0 4.46.0 4.44.0 4.43.0 4.42.0 4.41.0 4.40.0 4.39.0 4.38.0 4.37.0 4.36.0 4.35.0 4.34.0 4.32.0 4.31.0 4.30.0 4.29.0 4.28.0 4.27.0 4.26.0 4.25.0 4.24.0 4.23.0 4.22.0 4.19.0 4.18.0 4.17.0 4.16.0 4.15.0 4.14.0 4.13.0 4.12.0 4.11.0 4.10.0 4.9.0 4.8.0 4.7.0 4.6.0 4.4.0 4.3.0 4.2.0 4.1.0 4.0.0 3.0.0 2.6.1 2.5.9 2.4.0 2.3.0 2.2.15

```
public class AdaptationSettings extends ClientSettings<AdaptationSettings>
```

Settings class to configure an instance of [AdaptationClient](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1p1beta1.AdaptationClient).

The default instance has everything set to sensible defaults:

-   The default service address (speech.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the [RetrySettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.retrying.RetrySettings) of createPhraseSet:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 AdaptationSettings.Builder adaptationSettingsBuilder = AdaptationSettings.newBuilder();
 adaptationSettingsBuilder
     .createPhraseSetSettings()
     .setRetrySettings(
         adaptationSettingsBuilder
             .createPhraseSetSettings()
             .getRetrySettings()
             .toBuilder()
             .setInitialRetryDelayDuration(Duration.ofSeconds(1))
             .setInitialRpcTimeoutDuration(Duration.ofSeconds(5))
             .setMaxAttempts(5)
             .setMaxRetryDelayDuration(Duration.ofSeconds(30))
             .setMaxRpcTimeoutDuration(Duration.ofSeconds(60))
             .setRetryDelayMultiplier(1.3)
             .setRpcTimeoutMultiplier(1.5)
             .setTotalTimeoutDuration(Duration.ofSeconds(300))
             .build());
 AdaptationSettings adaptationSettings = adaptationSettingsBuilder.build();
 
```
 

Please refer to the [Client Side Retry Guide](https://github.com/googleapis/google-cloud-java/blob/main/docs/client_retries.md) for additional support in setting retries.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [ClientSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html) \> AdaptationSettings

## Inherited Members

[ClientSettings.<B>toBuilder()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings__B_toBuilder__)

[ClientSettings.getApiKey()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings_getApiKey__)

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

[ClientSettings.getWatchdogCheckIntervalDuration()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings_getWatchdogCheckIntervalDuration__)

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

### create(AdaptationStubSettings stub)

```
public static final AdaptationSettings create(AdaptationStubSettings stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[AdaptationStubSettings](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1.stub.AdaptationStubSettings)`  

**Returns**

**Type**

**Description**

`[AdaptationSettings](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1.AdaptationSettings)`

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
public static AdaptationSettings.Builder newBuilder()
```

Returns a new gRPC builder for this class.

**Returns**

**Type**

**Description**

`[AdaptationSettings.Builder](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1.AdaptationSettings.Builder)`

### newBuilder(ClientContext clientContext)

```
public static AdaptationSettings.Builder newBuilder(ClientContext clientContext)
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

`[AdaptationSettings.Builder](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1.AdaptationSettings.Builder)`

### newHttpJsonBuilder()

```
public static AdaptationSettings.Builder newHttpJsonBuilder()
```

Returns a new REST builder for this class.

**Returns**

**Type**

**Description**

`[AdaptationSettings.Builder](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1.AdaptationSettings.Builder)`

## Constructors

### AdaptationSettings(AdaptationSettings.Builder settingsBuilder)

```
protected AdaptationSettings(AdaptationSettings.Builder settingsBuilder)
```

**Parameter**

**Name**

**Description**

`settingsBuilder`

`[AdaptationSettings.Builder](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1.AdaptationSettings.Builder)`  

## Methods

### createCustomClassSettings()

```
public UnaryCallSettings<CreateCustomClassRequest,CustomClass> createCustomClassSettings()
```

Returns the object with the settings used for calls to createCustomClass.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateCustomClassRequest](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1.CreateCustomClassRequest),[CustomClass](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1.CustomClass)>`

### createPhraseSetSettings()

```
public UnaryCallSettings<CreatePhraseSetRequest,PhraseSet> createPhraseSetSettings()
```

Returns the object with the settings used for calls to createPhraseSet.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreatePhraseSetRequest](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1.CreatePhraseSetRequest),[PhraseSet](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1.PhraseSet)>`

### deleteCustomClassSettings()

```
public UnaryCallSettings<DeleteCustomClassRequest,Empty> deleteCustomClassSettings()
```

Returns the object with the settings used for calls to deleteCustomClass.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteCustomClassRequest](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1.DeleteCustomClassRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### deletePhraseSetSettings()

```
public UnaryCallSettings<DeletePhraseSetRequest,Empty> deletePhraseSetSettings()
```

Returns the object with the settings used for calls to deletePhraseSet.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeletePhraseSetRequest](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1.DeletePhraseSetRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getCustomClassSettings()

```
public UnaryCallSettings<GetCustomClassRequest,CustomClass> getCustomClassSettings()
```

Returns the object with the settings used for calls to getCustomClass.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetCustomClassRequest](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1.GetCustomClassRequest),[CustomClass](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1.CustomClass)>`

### getPhraseSetSettings()

```
public UnaryCallSettings<GetPhraseSetRequest,PhraseSet> getPhraseSetSettings()
```

Returns the object with the settings used for calls to getPhraseSet.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetPhraseSetRequest](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1.GetPhraseSetRequest),[PhraseSet](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1.PhraseSet)>`

### listCustomClassesSettings()

```
public PagedCallSettings<ListCustomClassesRequest,ListCustomClassesResponse,AdaptationClient.ListCustomClassesPagedResponse> listCustomClassesSettings()
```

Returns the object with the settings used for calls to listCustomClasses.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListCustomClassesRequest](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1.ListCustomClassesRequest),[ListCustomClassesResponse](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1.ListCustomClassesResponse),[ListCustomClassesPagedResponse](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1.AdaptationClient.ListCustomClassesPagedResponse)>`

### listPhraseSetSettings()

```
public PagedCallSettings<ListPhraseSetRequest,ListPhraseSetResponse,AdaptationClient.ListPhraseSetPagedResponse> listPhraseSetSettings()
```

Returns the object with the settings used for calls to listPhraseSet.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListPhraseSetRequest](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1.ListPhraseSetRequest),[ListPhraseSetResponse](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1.ListPhraseSetResponse),[ListPhraseSetPagedResponse](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1.AdaptationClient.ListPhraseSetPagedResponse)>`

### toBuilder()

```
public AdaptationSettings.Builder toBuilder()
```

Returns a builder containing all the values of this settings class.

**Returns**

**Type**

**Description**

`[AdaptationSettings.Builder](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1.AdaptationSettings.Builder)`

**Overrides**

[ClientSettings<SettingsT>.<B>toBuilder()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings__B_toBuilder__)

### updateCustomClassSettings()

```
public UnaryCallSettings<UpdateCustomClassRequest,CustomClass> updateCustomClassSettings()
```

Returns the object with the settings used for calls to updateCustomClass.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateCustomClassRequest](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1.UpdateCustomClassRequest),[CustomClass](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1.CustomClass)>`

### updatePhraseSetSettings()

```
public UnaryCallSettings<UpdatePhraseSetRequest,PhraseSet> updatePhraseSetSettings()
```

Returns the object with the settings used for calls to updatePhraseSet.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdatePhraseSetRequest](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1.UpdatePhraseSetRequest),[PhraseSet](/java/docs/reference/google-cloud-speech/4.50.0/com.google.cloud.speech.v1.PhraseSet)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
