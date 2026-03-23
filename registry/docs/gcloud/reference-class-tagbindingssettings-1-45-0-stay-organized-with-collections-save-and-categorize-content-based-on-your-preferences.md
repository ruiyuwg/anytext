-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class TagBindingsSettings (1.45.0) Stay organized with collections Save and categorize content based on your preferences.

1.89.0 (latest) 1.87.0 1.85.0 1.84.0 1.82.0 1.80.0 1.78.0 1.77.0 1.76.0 1.75.0 1.74.0 1.72.0 1.70.0 1.69.0 1.66.0 1.65.0 1.64.0 1.62.0 1.61.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.51.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.39.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.26.0 1.25.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.11.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.6 1.4.0 1.3.2 1.2.12

```
public class TagBindingsSettings extends ClientSettings<TagBindingsSettings>
```

Settings class to configure an instance of [TagBindingsClient](/java/docs/reference/google-cloud-resourcemanager/1.45.0/com.google.cloud.resourcemanager.v3.TagBindingsClient).

The default instance has everything set to sensible defaults:

-   The default service address (cloudresourcemanager.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of listTagBindings to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 TagBindingsSettings.Builder tagBindingsSettingsBuilder = TagBindingsSettings.newBuilder();
 tagBindingsSettingsBuilder
     .listTagBindingsSettings()
     .setRetrySettings(
         tagBindingsSettingsBuilder
             .listTagBindingsSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 TagBindingsSettings tagBindingsSettings = tagBindingsSettingsBuilder.build();
 
```
 

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [ClientSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html) \> TagBindingsSettings

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

[ClientSettings.getUniverseDomain()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings_getUniverseDomain__)

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

### create(TagBindingsStubSettings stub)

```
public static final TagBindingsSettings create(TagBindingsStubSettings stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[TagBindingsStubSettings](/java/docs/reference/google-cloud-resourcemanager/1.45.0/com.google.cloud.resourcemanager.v3.stub.TagBindingsStubSettings)`  

**Returns**

**Type**

**Description**

`[TagBindingsSettings](/java/docs/reference/google-cloud-resourcemanager/1.45.0/com.google.cloud.resourcemanager.v3.TagBindingsSettings)`

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
public static TagBindingsSettings.Builder newBuilder()
```

Returns a new gRPC builder for this class.

**Returns**

**Type**

**Description**

`[TagBindingsSettings.Builder](/java/docs/reference/google-cloud-resourcemanager/1.45.0/com.google.cloud.resourcemanager.v3.TagBindingsSettings.Builder)`

### newBuilder(ClientContext clientContext)

```
public static TagBindingsSettings.Builder newBuilder(ClientContext clientContext)
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

`[TagBindingsSettings.Builder](/java/docs/reference/google-cloud-resourcemanager/1.45.0/com.google.cloud.resourcemanager.v3.TagBindingsSettings.Builder)`

### newHttpJsonBuilder()

```
public static TagBindingsSettings.Builder newHttpJsonBuilder()
```

Returns a new REST builder for this class.

**Returns**

**Type**

**Description**

`[TagBindingsSettings.Builder](/java/docs/reference/google-cloud-resourcemanager/1.45.0/com.google.cloud.resourcemanager.v3.TagBindingsSettings.Builder)`

## Constructors

### TagBindingsSettings(TagBindingsSettings.Builder settingsBuilder)

```
protected TagBindingsSettings(TagBindingsSettings.Builder settingsBuilder)
```

**Parameter**

**Name**

**Description**

`settingsBuilder`

`[TagBindingsSettings.Builder](/java/docs/reference/google-cloud-resourcemanager/1.45.0/com.google.cloud.resourcemanager.v3.TagBindingsSettings.Builder)`  

## Methods

### createTagBindingOperationSettings()

```
public OperationCallSettings<CreateTagBindingRequest,TagBinding,CreateTagBindingMetadata> createTagBindingOperationSettings()
```

Returns the object with the settings used for calls to createTagBinding.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[CreateTagBindingRequest](/java/docs/reference/google-cloud-resourcemanager/1.45.0/com.google.cloud.resourcemanager.v3.CreateTagBindingRequest),[TagBinding](/java/docs/reference/google-cloud-resourcemanager/1.45.0/com.google.cloud.resourcemanager.v3.TagBinding),[CreateTagBindingMetadata](/java/docs/reference/google-cloud-resourcemanager/1.45.0/com.google.cloud.resourcemanager.v3.CreateTagBindingMetadata)>`

### createTagBindingSettings()

```
public UnaryCallSettings<CreateTagBindingRequest,Operation> createTagBindingSettings()
```

Returns the object with the settings used for calls to createTagBinding.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateTagBindingRequest](/java/docs/reference/google-cloud-resourcemanager/1.45.0/com.google.cloud.resourcemanager.v3.CreateTagBindingRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteTagBindingOperationSettings()

```
public OperationCallSettings<DeleteTagBindingRequest,Empty,DeleteTagBindingMetadata> deleteTagBindingOperationSettings()
```

Returns the object with the settings used for calls to deleteTagBinding.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[DeleteTagBindingRequest](/java/docs/reference/google-cloud-resourcemanager/1.45.0/com.google.cloud.resourcemanager.v3.DeleteTagBindingRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[DeleteTagBindingMetadata](/java/docs/reference/google-cloud-resourcemanager/1.45.0/com.google.cloud.resourcemanager.v3.DeleteTagBindingMetadata)>`

### deleteTagBindingSettings()

```
public UnaryCallSettings<DeleteTagBindingRequest,Operation> deleteTagBindingSettings()
```

Returns the object with the settings used for calls to deleteTagBinding.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteTagBindingRequest](/java/docs/reference/google-cloud-resourcemanager/1.45.0/com.google.cloud.resourcemanager.v3.DeleteTagBindingRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### listEffectiveTagsSettings()

```
public PagedCallSettings<ListEffectiveTagsRequest,ListEffectiveTagsResponse,TagBindingsClient.ListEffectiveTagsPagedResponse> listEffectiveTagsSettings()
```

Returns the object with the settings used for calls to listEffectiveTags.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListEffectiveTagsRequest](/java/docs/reference/google-cloud-resourcemanager/1.45.0/com.google.cloud.resourcemanager.v3.ListEffectiveTagsRequest),[ListEffectiveTagsResponse](/java/docs/reference/google-cloud-resourcemanager/1.45.0/com.google.cloud.resourcemanager.v3.ListEffectiveTagsResponse),[ListEffectiveTagsPagedResponse](/java/docs/reference/google-cloud-resourcemanager/1.45.0/com.google.cloud.resourcemanager.v3.TagBindingsClient.ListEffectiveTagsPagedResponse)>`

### listTagBindingsSettings()

```
public PagedCallSettings<ListTagBindingsRequest,ListTagBindingsResponse,TagBindingsClient.ListTagBindingsPagedResponse> listTagBindingsSettings()
```

Returns the object with the settings used for calls to listTagBindings.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListTagBindingsRequest](/java/docs/reference/google-cloud-resourcemanager/1.45.0/com.google.cloud.resourcemanager.v3.ListTagBindingsRequest),[ListTagBindingsResponse](/java/docs/reference/google-cloud-resourcemanager/1.45.0/com.google.cloud.resourcemanager.v3.ListTagBindingsResponse),[ListTagBindingsPagedResponse](/java/docs/reference/google-cloud-resourcemanager/1.45.0/com.google.cloud.resourcemanager.v3.TagBindingsClient.ListTagBindingsPagedResponse)>`

### toBuilder()

```
public TagBindingsSettings.Builder toBuilder()
```

Returns a builder containing all the values of this settings class.

**Returns**

**Type**

**Description**

`[TagBindingsSettings.Builder](/java/docs/reference/google-cloud-resourcemanager/1.45.0/com.google.cloud.resourcemanager.v3.TagBindingsSettings.Builder)`

**Overrides**

[ClientSettings<SettingsT>.<B>toBuilder()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings__B_toBuilder__)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
