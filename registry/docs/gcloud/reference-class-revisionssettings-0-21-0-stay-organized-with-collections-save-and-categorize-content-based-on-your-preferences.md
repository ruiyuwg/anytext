-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class RevisionsSettings (0.21.0) Stay organized with collections Save and categorize content based on your preferences.

0.87.0 (latest) 0.85.0 0.83.0 0.82.0 0.80.0 0.78.0 0.76.0 0.75.0 0.74.0 0.73.0 0.72.0 0.70.0 0.68.0 0.67.0 0.64.0 0.63.0 0.62.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.5 0.2.1 0.1.2

```
public class RevisionsSettings extends ClientSettings<RevisionsSettings>
```

Settings class to configure an instance of [RevisionsClient](/java/docs/reference/google-cloud-run/0.21.0/com.google.cloud.run.v2.RevisionsClient).

The default instance has everything set to sensible defaults:

-   The default service address (run.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of getRevision to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 RevisionsSettings.Builder revisionsSettingsBuilder = RevisionsSettings.newBuilder();
 revisionsSettingsBuilder
     .getRevisionSettings()
     .setRetrySettings(
         revisionsSettingsBuilder
             .getRevisionSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 RevisionsSettings revisionsSettings = revisionsSettingsBuilder.build();
 
```
 

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [ClientSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html) \> RevisionsSettings

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

### create(RevisionsStubSettings stub)

```
public static final RevisionsSettings create(RevisionsStubSettings stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[RevisionsStubSettings](/java/docs/reference/google-cloud-run/0.21.0/com.google.cloud.run.v2.stub.RevisionsStubSettings)`  

**Returns**

**Type**

**Description**

`[RevisionsSettings](/java/docs/reference/google-cloud-run/0.21.0/com.google.cloud.run.v2.RevisionsSettings)`

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
public static RevisionsSettings.Builder newBuilder()
```

Returns a new gRPC builder for this class.

**Returns**

**Type**

**Description**

`[RevisionsSettings.Builder](/java/docs/reference/google-cloud-run/0.21.0/com.google.cloud.run.v2.RevisionsSettings.Builder)`

### newBuilder(ClientContext clientContext)

```
public static RevisionsSettings.Builder newBuilder(ClientContext clientContext)
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

`[RevisionsSettings.Builder](/java/docs/reference/google-cloud-run/0.21.0/com.google.cloud.run.v2.RevisionsSettings.Builder)`

### newHttpJsonBuilder()

```
public static RevisionsSettings.Builder newHttpJsonBuilder()
```

Returns a new REST builder for this class.

**Returns**

**Type**

**Description**

`[RevisionsSettings.Builder](/java/docs/reference/google-cloud-run/0.21.0/com.google.cloud.run.v2.RevisionsSettings.Builder)`

## Constructors

### RevisionsSettings(RevisionsSettings.Builder settingsBuilder)

```
protected RevisionsSettings(RevisionsSettings.Builder settingsBuilder)
```

**Parameter**

**Name**

**Description**

`settingsBuilder`

`[RevisionsSettings.Builder](/java/docs/reference/google-cloud-run/0.21.0/com.google.cloud.run.v2.RevisionsSettings.Builder)`  

## Methods

### deleteRevisionOperationSettings()

```
public OperationCallSettings<DeleteRevisionRequest,Revision,Revision> deleteRevisionOperationSettings()
```

Returns the object with the settings used for calls to deleteRevision.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[DeleteRevisionRequest](/java/docs/reference/google-cloud-run/0.21.0/com.google.cloud.run.v2.DeleteRevisionRequest),[Revision](/java/docs/reference/google-cloud-run/0.21.0/com.google.cloud.run.v2.Revision),[Revision](/java/docs/reference/google-cloud-run/0.21.0/com.google.cloud.run.v2.Revision)>`

### deleteRevisionSettings()

```
public UnaryCallSettings<DeleteRevisionRequest,Operation> deleteRevisionSettings()
```

Returns the object with the settings used for calls to deleteRevision.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteRevisionRequest](/java/docs/reference/google-cloud-run/0.21.0/com.google.cloud.run.v2.DeleteRevisionRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getRevisionSettings()

```
public UnaryCallSettings<GetRevisionRequest,Revision> getRevisionSettings()
```

Returns the object with the settings used for calls to getRevision.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetRevisionRequest](/java/docs/reference/google-cloud-run/0.21.0/com.google.cloud.run.v2.GetRevisionRequest),[Revision](/java/docs/reference/google-cloud-run/0.21.0/com.google.cloud.run.v2.Revision)>`

### listRevisionsSettings()

```
public PagedCallSettings<ListRevisionsRequest,ListRevisionsResponse,RevisionsClient.ListRevisionsPagedResponse> listRevisionsSettings()
```

Returns the object with the settings used for calls to listRevisions.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListRevisionsRequest](/java/docs/reference/google-cloud-run/0.21.0/com.google.cloud.run.v2.ListRevisionsRequest),[ListRevisionsResponse](/java/docs/reference/google-cloud-run/0.21.0/com.google.cloud.run.v2.ListRevisionsResponse),[ListRevisionsPagedResponse](/java/docs/reference/google-cloud-run/0.21.0/com.google.cloud.run.v2.RevisionsClient.ListRevisionsPagedResponse)>`

### toBuilder()

```
public RevisionsSettings.Builder toBuilder()
```

Returns a builder containing all the values of this settings class.

**Returns**

**Type**

**Description**

`[RevisionsSettings.Builder](/java/docs/reference/google-cloud-run/0.21.0/com.google.cloud.run.v2.RevisionsSettings.Builder)`

**Overrides**

[ClientSettings<SettingsT>.<B>toBuilder()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings__B_toBuilder__)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
