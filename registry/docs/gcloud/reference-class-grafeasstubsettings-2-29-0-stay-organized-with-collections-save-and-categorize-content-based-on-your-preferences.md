-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class GrafeasStubSettings (2.29.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.82.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.5 2.3.1 2.2.3 2.1.3

```
public class GrafeasStubSettings extends StubSettings<GrafeasStubSettings>
```

Settings class to configure an instance of [GrafeasStub](/java/docs/reference/grafeas/2.29.0/io.grafeas.v1.stub.GrafeasStub).

The default instance has everything set to sensible defaults:

-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of getOccurrence to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 GrafeasStubSettings.Builder grafeasSettingsBuilder = GrafeasStubSettings.newBuilder();
 grafeasSettingsBuilder
     .getOccurrenceSettings()
     .setRetrySettings(
         grafeasSettingsBuilder
             .getOccurrenceSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 GrafeasStubSettings grafeasSettings = grafeasSettingsBuilder.build();
 
```
 

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [StubSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html) \> GrafeasStubSettings

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

### defaultGrpcTransportProviderBuilder()

```
public static InstantiatingGrpcChannelProvider.Builder defaultGrpcTransportProviderBuilder()
```

Returns a builder for the default ChannelProvider for this service.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.grpc.InstantiatingGrpcChannelProvider.Builder.html)`

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
public static GrafeasStubSettings.Builder newBuilder()
```

Returns a new builder for this class.

**Returns**

**Type**

**Description**

`[GrafeasStubSettings.Builder](/java/docs/reference/grafeas/2.29.0/io.grafeas.v1.stub.GrafeasStubSettings.Builder)`

### newBuilder(ClientContext clientContext)

```
public static GrafeasStubSettings.Builder newBuilder(ClientContext clientContext)
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

`[GrafeasStubSettings.Builder](/java/docs/reference/grafeas/2.29.0/io.grafeas.v1.stub.GrafeasStubSettings.Builder)`

## Constructors

### GrafeasStubSettings(GrafeasStubSettings.Builder settingsBuilder)

```
protected GrafeasStubSettings(GrafeasStubSettings.Builder settingsBuilder)
```

**Parameter**

**Name**

**Description**

`settingsBuilder`

`[GrafeasStubSettings.Builder](/java/docs/reference/grafeas/2.29.0/io.grafeas.v1.stub.GrafeasStubSettings.Builder)`  

## Methods

### batchCreateNotesSettings()

```
public UnaryCallSettings<BatchCreateNotesRequest,BatchCreateNotesResponse> batchCreateNotesSettings()
```

Returns the object with the settings used for calls to batchCreateNotes.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[BatchCreateNotesRequest](/java/docs/reference/grafeas/2.29.0/io.grafeas.v1.BatchCreateNotesRequest),[BatchCreateNotesResponse](/java/docs/reference/grafeas/2.29.0/io.grafeas.v1.BatchCreateNotesResponse)>`

### batchCreateOccurrencesSettings()

```
public UnaryCallSettings<BatchCreateOccurrencesRequest,BatchCreateOccurrencesResponse> batchCreateOccurrencesSettings()
```

Returns the object with the settings used for calls to batchCreateOccurrences.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[BatchCreateOccurrencesRequest](/java/docs/reference/grafeas/2.29.0/io.grafeas.v1.BatchCreateOccurrencesRequest),[BatchCreateOccurrencesResponse](/java/docs/reference/grafeas/2.29.0/io.grafeas.v1.BatchCreateOccurrencesResponse)>`

### createNoteSettings()

```
public UnaryCallSettings<CreateNoteRequest,Note> createNoteSettings()
```

Returns the object with the settings used for calls to createNote.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateNoteRequest](/java/docs/reference/grafeas/2.29.0/io.grafeas.v1.CreateNoteRequest),[Note](/java/docs/reference/grafeas/2.29.0/io.grafeas.v1.Note)>`

### createOccurrenceSettings()

```
public UnaryCallSettings<CreateOccurrenceRequest,Occurrence> createOccurrenceSettings()
```

Returns the object with the settings used for calls to createOccurrence.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateOccurrenceRequest](/java/docs/reference/grafeas/2.29.0/io.grafeas.v1.CreateOccurrenceRequest),[Occurrence](/java/docs/reference/grafeas/2.29.0/io.grafeas.v1.Occurrence)>`

### createStub()

```
public GrafeasStub createStub()
```

**Returns**

**Type**

**Description**

`[GrafeasStub](/java/docs/reference/grafeas/2.29.0/io.grafeas.v1.stub.GrafeasStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### deleteNoteSettings()

```
public UnaryCallSettings<DeleteNoteRequest,Empty> deleteNoteSettings()
```

Returns the object with the settings used for calls to deleteNote.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteNoteRequest](/java/docs/reference/grafeas/2.29.0/io.grafeas.v1.DeleteNoteRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### deleteOccurrenceSettings()

```
public UnaryCallSettings<DeleteOccurrenceRequest,Empty> deleteOccurrenceSettings()
```

Returns the object with the settings used for calls to deleteOccurrence.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteOccurrenceRequest](/java/docs/reference/grafeas/2.29.0/io.grafeas.v1.DeleteOccurrenceRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getNoteSettings()

```
public UnaryCallSettings<GetNoteRequest,Note> getNoteSettings()
```

Returns the object with the settings used for calls to getNote.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetNoteRequest](/java/docs/reference/grafeas/2.29.0/io.grafeas.v1.GetNoteRequest),[Note](/java/docs/reference/grafeas/2.29.0/io.grafeas.v1.Note)>`

### getOccurrenceNoteSettings()

```
public UnaryCallSettings<GetOccurrenceNoteRequest,Note> getOccurrenceNoteSettings()
```

Returns the object with the settings used for calls to getOccurrenceNote.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetOccurrenceNoteRequest](/java/docs/reference/grafeas/2.29.0/io.grafeas.v1.GetOccurrenceNoteRequest),[Note](/java/docs/reference/grafeas/2.29.0/io.grafeas.v1.Note)>`

### getOccurrenceSettings()

```
public UnaryCallSettings<GetOccurrenceRequest,Occurrence> getOccurrenceSettings()
```

Returns the object with the settings used for calls to getOccurrence.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetOccurrenceRequest](/java/docs/reference/grafeas/2.29.0/io.grafeas.v1.GetOccurrenceRequest),[Occurrence](/java/docs/reference/grafeas/2.29.0/io.grafeas.v1.Occurrence)>`

### listNoteOccurrencesSettings()

```
public PagedCallSettings<ListNoteOccurrencesRequest,ListNoteOccurrencesResponse,GrafeasClient.ListNoteOccurrencesPagedResponse> listNoteOccurrencesSettings()
```

Returns the object with the settings used for calls to listNoteOccurrences.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListNoteOccurrencesRequest](/java/docs/reference/grafeas/2.29.0/io.grafeas.v1.ListNoteOccurrencesRequest),[ListNoteOccurrencesResponse](/java/docs/reference/grafeas/2.29.0/io.grafeas.v1.ListNoteOccurrencesResponse),[ListNoteOccurrencesPagedResponse](/java/docs/reference/grafeas/2.29.0/io.grafeas.v1.GrafeasClient.ListNoteOccurrencesPagedResponse)>`

### listNotesSettings()

```
public PagedCallSettings<ListNotesRequest,ListNotesResponse,GrafeasClient.ListNotesPagedResponse> listNotesSettings()
```

Returns the object with the settings used for calls to listNotes.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListNotesRequest](/java/docs/reference/grafeas/2.29.0/io.grafeas.v1.ListNotesRequest),[ListNotesResponse](/java/docs/reference/grafeas/2.29.0/io.grafeas.v1.ListNotesResponse),[ListNotesPagedResponse](/java/docs/reference/grafeas/2.29.0/io.grafeas.v1.GrafeasClient.ListNotesPagedResponse)>`

### listOccurrencesSettings()

```
public PagedCallSettings<ListOccurrencesRequest,ListOccurrencesResponse,GrafeasClient.ListOccurrencesPagedResponse> listOccurrencesSettings()
```

Returns the object with the settings used for calls to listOccurrences.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListOccurrencesRequest](/java/docs/reference/grafeas/2.29.0/io.grafeas.v1.ListOccurrencesRequest),[ListOccurrencesResponse](/java/docs/reference/grafeas/2.29.0/io.grafeas.v1.ListOccurrencesResponse),[ListOccurrencesPagedResponse](/java/docs/reference/grafeas/2.29.0/io.grafeas.v1.GrafeasClient.ListOccurrencesPagedResponse)>`

### toBuilder()

```
public GrafeasStubSettings.Builder toBuilder()
```

Returns a builder containing all the values of this settings class.

**Returns**

**Type**

**Description**

`[GrafeasStubSettings.Builder](/java/docs/reference/grafeas/2.29.0/io.grafeas.v1.stub.GrafeasStubSettings.Builder)`

**Overrides**

[StubSettings<SettingsT>.toBuilder()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_toBuilder__)

### updateNoteSettings()

```
public UnaryCallSettings<UpdateNoteRequest,Note> updateNoteSettings()
```

Returns the object with the settings used for calls to updateNote.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateNoteRequest](/java/docs/reference/grafeas/2.29.0/io.grafeas.v1.UpdateNoteRequest),[Note](/java/docs/reference/grafeas/2.29.0/io.grafeas.v1.Note)>`

### updateOccurrenceSettings()

```
public UnaryCallSettings<UpdateOccurrenceRequest,Occurrence> updateOccurrenceSettings()
```

Returns the object with the settings used for calls to updateOccurrence.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateOccurrenceRequest](/java/docs/reference/grafeas/2.29.0/io.grafeas.v1.UpdateOccurrenceRequest),[Occurrence](/java/docs/reference/grafeas/2.29.0/io.grafeas.v1.Occurrence)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
