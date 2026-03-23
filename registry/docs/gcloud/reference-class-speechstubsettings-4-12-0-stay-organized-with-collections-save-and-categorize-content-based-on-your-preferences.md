-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class SpeechStubSettings (4.12.0) Stay organized with collections Save and categorize content based on your preferences.

4.82.0 (latest) 4.80.0 4.78.0 4.77.0 4.75.0 4.73.0 4.71.0 4.70.0 4.69.0 4.68.0 4.67.0 4.65.0 4.63.0 4.62.0 4.59.0 4.58.0 4.57.0 4.55.0 4.54.0 4.53.0 4.52.0 4.51.0 4.50.0 4.49.0 4.48.0 4.47.0 4.46.0 4.44.0 4.43.0 4.42.0 4.41.0 4.40.0 4.39.0 4.38.0 4.37.0 4.36.0 4.35.0 4.34.0 4.32.0 4.31.0 4.30.0 4.29.0 4.28.0 4.27.0 4.26.0 4.25.0 4.24.0 4.23.0 4.22.0 4.19.0 4.18.0 4.17.0 4.16.0 4.15.0 4.14.0 4.13.0 4.12.0 4.11.0 4.10.0 4.9.0 4.8.0 4.7.0 4.6.0 4.4.0 4.3.0 4.2.0 4.1.0 4.0.0 3.0.0 2.6.1 2.5.9 2.4.0 2.3.0 2.2.15

```
public class SpeechStubSettings extends StubSettings<SpeechStubSettings>
```

Settings class to configure an instance of [SpeechStub](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.stub.SpeechStub).

The default instance has everything set to sensible defaults:

-   The default service address (speech.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of getRecognizer to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 SpeechStubSettings.Builder speechSettingsBuilder = SpeechStubSettings.newBuilder();
 speechSettingsBuilder
     .getRecognizerSettings()
     .setRetrySettings(
         speechSettingsBuilder
             .getRecognizerSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 SpeechStubSettings speechSettings = speechSettingsBuilder.build();
 
```
 

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [StubSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html) \> SpeechStubSettings

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
public static SpeechStubSettings.Builder newBuilder()
```

Returns a new gRPC builder for this class.

**Returns**

**Type**

**Description**

`[SpeechStubSettings.Builder](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.stub.SpeechStubSettings.Builder)`

### newBuilder(ClientContext clientContext)

```
public static SpeechStubSettings.Builder newBuilder(ClientContext clientContext)
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

`[SpeechStubSettings.Builder](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.stub.SpeechStubSettings.Builder)`

### newHttpJsonBuilder()

```
public static SpeechStubSettings.Builder newHttpJsonBuilder()
```

Returns a new REST builder for this class.

**Returns**

**Type**

**Description**

`[SpeechStubSettings.Builder](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.stub.SpeechStubSettings.Builder)`

## Constructors

### SpeechStubSettings(SpeechStubSettings.Builder settingsBuilder)

```
protected SpeechStubSettings(SpeechStubSettings.Builder settingsBuilder)
```

**Parameter**

**Name**

**Description**

`settingsBuilder`

`[SpeechStubSettings.Builder](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.stub.SpeechStubSettings.Builder)`  

## Methods

### batchRecognizeOperationSettings()

```
public OperationCallSettings<BatchRecognizeRequest,BatchRecognizeResponse,OperationMetadata> batchRecognizeOperationSettings()
```

Returns the object with the settings used for calls to batchRecognize.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[BatchRecognizeRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.BatchRecognizeRequest),[BatchRecognizeResponse](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.BatchRecognizeResponse),[OperationMetadata](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.OperationMetadata)>`

### batchRecognizeSettings()

```
public UnaryCallSettings<BatchRecognizeRequest,Operation> batchRecognizeSettings()
```

Returns the object with the settings used for calls to batchRecognize.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[BatchRecognizeRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.BatchRecognizeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createCustomClassOperationSettings()

```
public OperationCallSettings<CreateCustomClassRequest,CustomClass,OperationMetadata> createCustomClassOperationSettings()
```

Returns the object with the settings used for calls to createCustomClass.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[CreateCustomClassRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.CreateCustomClassRequest),[CustomClass](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.CustomClass),[OperationMetadata](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.OperationMetadata)>`

### createCustomClassSettings()

```
public UnaryCallSettings<CreateCustomClassRequest,Operation> createCustomClassSettings()
```

Returns the object with the settings used for calls to createCustomClass.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateCustomClassRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.CreateCustomClassRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createPhraseSetOperationSettings()

```
public OperationCallSettings<CreatePhraseSetRequest,PhraseSet,OperationMetadata> createPhraseSetOperationSettings()
```

Returns the object with the settings used for calls to createPhraseSet.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[CreatePhraseSetRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.CreatePhraseSetRequest),[PhraseSet](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.PhraseSet),[OperationMetadata](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.OperationMetadata)>`

### createPhraseSetSettings()

```
public UnaryCallSettings<CreatePhraseSetRequest,Operation> createPhraseSetSettings()
```

Returns the object with the settings used for calls to createPhraseSet.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreatePhraseSetRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.CreatePhraseSetRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createRecognizerOperationSettings()

```
public OperationCallSettings<CreateRecognizerRequest,Recognizer,OperationMetadata> createRecognizerOperationSettings()
```

Returns the object with the settings used for calls to createRecognizer.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[CreateRecognizerRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.CreateRecognizerRequest),[Recognizer](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.Recognizer),[OperationMetadata](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.OperationMetadata)>`

### createRecognizerSettings()

```
public UnaryCallSettings<CreateRecognizerRequest,Operation> createRecognizerSettings()
```

Returns the object with the settings used for calls to createRecognizer.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateRecognizerRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.CreateRecognizerRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createStub()

```
public SpeechStub createStub()
```

**Returns**

**Type**

**Description**

`[SpeechStub](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.stub.SpeechStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### deleteCustomClassOperationSettings()

```
public OperationCallSettings<DeleteCustomClassRequest,CustomClass,OperationMetadata> deleteCustomClassOperationSettings()
```

Returns the object with the settings used for calls to deleteCustomClass.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[DeleteCustomClassRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.DeleteCustomClassRequest),[CustomClass](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.CustomClass),[OperationMetadata](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.OperationMetadata)>`

### deleteCustomClassSettings()

```
public UnaryCallSettings<DeleteCustomClassRequest,Operation> deleteCustomClassSettings()
```

Returns the object with the settings used for calls to deleteCustomClass.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteCustomClassRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.DeleteCustomClassRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deletePhraseSetOperationSettings()

```
public OperationCallSettings<DeletePhraseSetRequest,PhraseSet,OperationMetadata> deletePhraseSetOperationSettings()
```

Returns the object with the settings used for calls to deletePhraseSet.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[DeletePhraseSetRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.DeletePhraseSetRequest),[PhraseSet](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.PhraseSet),[OperationMetadata](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.OperationMetadata)>`

### deletePhraseSetSettings()

```
public UnaryCallSettings<DeletePhraseSetRequest,Operation> deletePhraseSetSettings()
```

Returns the object with the settings used for calls to deletePhraseSet.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeletePhraseSetRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.DeletePhraseSetRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteRecognizerOperationSettings()

```
public OperationCallSettings<DeleteRecognizerRequest,Recognizer,OperationMetadata> deleteRecognizerOperationSettings()
```

Returns the object with the settings used for calls to deleteRecognizer.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[DeleteRecognizerRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.DeleteRecognizerRequest),[Recognizer](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.Recognizer),[OperationMetadata](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.OperationMetadata)>`

### deleteRecognizerSettings()

```
public UnaryCallSettings<DeleteRecognizerRequest,Operation> deleteRecognizerSettings()
```

Returns the object with the settings used for calls to deleteRecognizer.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteRecognizerRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.DeleteRecognizerRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getConfigSettings()

```
public UnaryCallSettings<GetConfigRequest,Config> getConfigSettings()
```

Returns the object with the settings used for calls to getConfig.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetConfigRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.GetConfigRequest),[Config](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.Config)>`

### getCustomClassSettings()

```
public UnaryCallSettings<GetCustomClassRequest,CustomClass> getCustomClassSettings()
```

Returns the object with the settings used for calls to getCustomClass.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetCustomClassRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.GetCustomClassRequest),[CustomClass](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.CustomClass)>`

### getLocationSettings()

```
public UnaryCallSettings<GetLocationRequest,Location> getLocationSettings()
```

Returns the object with the settings used for calls to getLocation.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<com.google.cloud.location.GetLocationRequest,com.google.cloud.location.Location>`

### getPhraseSetSettings()

```
public UnaryCallSettings<GetPhraseSetRequest,PhraseSet> getPhraseSetSettings()
```

Returns the object with the settings used for calls to getPhraseSet.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetPhraseSetRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.GetPhraseSetRequest),[PhraseSet](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.PhraseSet)>`

### getRecognizerSettings()

```
public UnaryCallSettings<GetRecognizerRequest,Recognizer> getRecognizerSettings()
```

Returns the object with the settings used for calls to getRecognizer.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetRecognizerRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.GetRecognizerRequest),[Recognizer](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.Recognizer)>`

### listCustomClassesSettings()

```
public PagedCallSettings<ListCustomClassesRequest,ListCustomClassesResponse,SpeechClient.ListCustomClassesPagedResponse> listCustomClassesSettings()
```

Returns the object with the settings used for calls to listCustomClasses.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListCustomClassesRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.ListCustomClassesRequest),[ListCustomClassesResponse](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.ListCustomClassesResponse),[ListCustomClassesPagedResponse](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.SpeechClient.ListCustomClassesPagedResponse)>`

### listLocationsSettings()

```
public PagedCallSettings<ListLocationsRequest,ListLocationsResponse,SpeechClient.ListLocationsPagedResponse> listLocationsSettings()
```

Returns the object with the settings used for calls to listLocations.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<com.google.cloud.location.ListLocationsRequest,com.google.cloud.location.ListLocationsResponse,[ListLocationsPagedResponse](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.SpeechClient.ListLocationsPagedResponse)>`

### listPhraseSetsSettings()

```
public PagedCallSettings<ListPhraseSetsRequest,ListPhraseSetsResponse,SpeechClient.ListPhraseSetsPagedResponse> listPhraseSetsSettings()
```

Returns the object with the settings used for calls to listPhraseSets.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListPhraseSetsRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.ListPhraseSetsRequest),[ListPhraseSetsResponse](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.ListPhraseSetsResponse),[ListPhraseSetsPagedResponse](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.SpeechClient.ListPhraseSetsPagedResponse)>`

### listRecognizersSettings()

```
public PagedCallSettings<ListRecognizersRequest,ListRecognizersResponse,SpeechClient.ListRecognizersPagedResponse> listRecognizersSettings()
```

Returns the object with the settings used for calls to listRecognizers.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListRecognizersRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.ListRecognizersRequest),[ListRecognizersResponse](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.ListRecognizersResponse),[ListRecognizersPagedResponse](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.SpeechClient.ListRecognizersPagedResponse)>`

### recognizeSettings()

```
public UnaryCallSettings<RecognizeRequest,RecognizeResponse> recognizeSettings()
```

Returns the object with the settings used for calls to recognize.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[RecognizeRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.RecognizeRequest),[RecognizeResponse](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.RecognizeResponse)>`

### streamingRecognizeSettings()

```
public StreamingCallSettings<StreamingRecognizeRequest,StreamingRecognizeResponse> streamingRecognizeSettings()
```

Returns the object with the settings used for calls to streamingRecognize.

**Returns**

**Type**

**Description**

`[StreamingCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StreamingCallSettings.html)<[StreamingRecognizeRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.StreamingRecognizeRequest),[StreamingRecognizeResponse](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.StreamingRecognizeResponse)>`

### toBuilder()

```
public SpeechStubSettings.Builder toBuilder()
```

Returns a builder containing all the values of this settings class.

**Returns**

**Type**

**Description**

`[SpeechStubSettings.Builder](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.stub.SpeechStubSettings.Builder)`

**Overrides**

[StubSettings<SettingsT>.toBuilder()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_toBuilder__)

### undeleteCustomClassOperationSettings()

```
public OperationCallSettings<UndeleteCustomClassRequest,CustomClass,OperationMetadata> undeleteCustomClassOperationSettings()
```

Returns the object with the settings used for calls to undeleteCustomClass.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[UndeleteCustomClassRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.UndeleteCustomClassRequest),[CustomClass](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.CustomClass),[OperationMetadata](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.OperationMetadata)>`

### undeleteCustomClassSettings()

```
public UnaryCallSettings<UndeleteCustomClassRequest,Operation> undeleteCustomClassSettings()
```

Returns the object with the settings used for calls to undeleteCustomClass.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UndeleteCustomClassRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.UndeleteCustomClassRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### undeletePhraseSetOperationSettings()

```
public OperationCallSettings<UndeletePhraseSetRequest,PhraseSet,OperationMetadata> undeletePhraseSetOperationSettings()
```

Returns the object with the settings used for calls to undeletePhraseSet.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[UndeletePhraseSetRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.UndeletePhraseSetRequest),[PhraseSet](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.PhraseSet),[OperationMetadata](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.OperationMetadata)>`

### undeletePhraseSetSettings()

```
public UnaryCallSettings<UndeletePhraseSetRequest,Operation> undeletePhraseSetSettings()
```

Returns the object with the settings used for calls to undeletePhraseSet.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UndeletePhraseSetRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.UndeletePhraseSetRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### undeleteRecognizerOperationSettings()

```
public OperationCallSettings<UndeleteRecognizerRequest,Recognizer,OperationMetadata> undeleteRecognizerOperationSettings()
```

Returns the object with the settings used for calls to undeleteRecognizer.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[UndeleteRecognizerRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.UndeleteRecognizerRequest),[Recognizer](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.Recognizer),[OperationMetadata](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.OperationMetadata)>`

### undeleteRecognizerSettings()

```
public UnaryCallSettings<UndeleteRecognizerRequest,Operation> undeleteRecognizerSettings()
```

Returns the object with the settings used for calls to undeleteRecognizer.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UndeleteRecognizerRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.UndeleteRecognizerRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateConfigSettings()

```
public UnaryCallSettings<UpdateConfigRequest,Config> updateConfigSettings()
```

Returns the object with the settings used for calls to updateConfig.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateConfigRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.UpdateConfigRequest),[Config](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.Config)>`

### updateCustomClassOperationSettings()

```
public OperationCallSettings<UpdateCustomClassRequest,CustomClass,OperationMetadata> updateCustomClassOperationSettings()
```

Returns the object with the settings used for calls to updateCustomClass.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[UpdateCustomClassRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.UpdateCustomClassRequest),[CustomClass](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.CustomClass),[OperationMetadata](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.OperationMetadata)>`

### updateCustomClassSettings()

```
public UnaryCallSettings<UpdateCustomClassRequest,Operation> updateCustomClassSettings()
```

Returns the object with the settings used for calls to updateCustomClass.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateCustomClassRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.UpdateCustomClassRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updatePhraseSetOperationSettings()

```
public OperationCallSettings<UpdatePhraseSetRequest,PhraseSet,OperationMetadata> updatePhraseSetOperationSettings()
```

Returns the object with the settings used for calls to updatePhraseSet.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[UpdatePhraseSetRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.UpdatePhraseSetRequest),[PhraseSet](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.PhraseSet),[OperationMetadata](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.OperationMetadata)>`

### updatePhraseSetSettings()

```
public UnaryCallSettings<UpdatePhraseSetRequest,Operation> updatePhraseSetSettings()
```

Returns the object with the settings used for calls to updatePhraseSet.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdatePhraseSetRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.UpdatePhraseSetRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateRecognizerOperationSettings()

```
public OperationCallSettings<UpdateRecognizerRequest,Recognizer,OperationMetadata> updateRecognizerOperationSettings()
```

Returns the object with the settings used for calls to updateRecognizer.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[UpdateRecognizerRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.UpdateRecognizerRequest),[Recognizer](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.Recognizer),[OperationMetadata](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.OperationMetadata)>`

### updateRecognizerSettings()

```
public UnaryCallSettings<UpdateRecognizerRequest,Operation> updateRecognizerSettings()
```

Returns the object with the settings used for calls to updateRecognizer.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateRecognizerRequest](/java/docs/reference/google-cloud-speech/4.12.0/com.google.cloud.speech.v2.UpdateRecognizerRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
