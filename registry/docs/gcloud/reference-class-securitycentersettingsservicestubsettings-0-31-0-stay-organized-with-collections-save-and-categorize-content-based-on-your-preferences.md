-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class SecurityCenterSettingsServiceStubSettings (0.31.0) Stay organized with collections Save and categorize content based on your preferences.

0.90.0 (latest) 0.88.0 0.86.0 0.85.0 0.83.0 0.81.0 0.79.0 0.78.0 0.77.0 0.76.0 0.75.0 0.73.0 0.71.0 0.70.0 0.67.0 0.66.0 0.65.0 0.63.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.52.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.6 0.5.13

```
public class SecurityCenterSettingsServiceStubSettings extends StubSettings<SecurityCenterSettingsServiceStubSettings>
```

Settings class to configure an instance of [SecurityCenterSettingsServiceStub](/java/docs/reference/google-cloud-securitycenter-settings/0.31.0/com.google.cloud.securitycenter.settings.v1beta1.stub.SecurityCenterSettingsServiceStub).

The default instance has everything set to sensible defaults:

-   The default service address (securitycenter.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of getServiceAccount to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 SecurityCenterSettingsServiceStubSettings.Builder securityCenterSettingsServiceSettingsBuilder =
     SecurityCenterSettingsServiceStubSettings.newBuilder();
 securityCenterSettingsServiceSettingsBuilder
     .getServiceAccountSettings()
     .setRetrySettings(
         securityCenterSettingsServiceSettingsBuilder
             .getServiceAccountSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 SecurityCenterSettingsServiceStubSettings securityCenterSettingsServiceSettings =
     securityCenterSettingsServiceSettingsBuilder.build();
 
```
 

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [StubSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html) \> SecurityCenterSettingsServiceStubSettings

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
public static SecurityCenterSettingsServiceStubSettings.Builder newBuilder()
```

Returns a new builder for this class.

**Returns**

**Type**

**Description**

`[SecurityCenterSettingsServiceStubSettings.Builder](/java/docs/reference/google-cloud-securitycenter-settings/0.31.0/com.google.cloud.securitycenter.settings.v1beta1.stub.SecurityCenterSettingsServiceStubSettings.Builder)`

### newBuilder(ClientContext clientContext)

```
public static SecurityCenterSettingsServiceStubSettings.Builder newBuilder(ClientContext clientContext)
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

`[SecurityCenterSettingsServiceStubSettings.Builder](/java/docs/reference/google-cloud-securitycenter-settings/0.31.0/com.google.cloud.securitycenter.settings.v1beta1.stub.SecurityCenterSettingsServiceStubSettings.Builder)`

## Constructors

### SecurityCenterSettingsServiceStubSettings(SecurityCenterSettingsServiceStubSettings.Builder settingsBuilder)

```
protected SecurityCenterSettingsServiceStubSettings(SecurityCenterSettingsServiceStubSettings.Builder settingsBuilder)
```

**Parameter**

**Name**

**Description**

`settingsBuilder`

`[SecurityCenterSettingsServiceStubSettings.Builder](/java/docs/reference/google-cloud-securitycenter-settings/0.31.0/com.google.cloud.securitycenter.settings.v1beta1.stub.SecurityCenterSettingsServiceStubSettings.Builder)`  

## Methods

### batchCalculateEffectiveSettingsSettings()

```
public UnaryCallSettings<BatchCalculateEffectiveSettingsRequest,BatchCalculateEffectiveSettingsResponse> batchCalculateEffectiveSettingsSettings()
```

Returns the object with the settings used for calls to batchCalculateEffectiveSettings.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[BatchCalculateEffectiveSettingsRequest](/java/docs/reference/google-cloud-securitycenter-settings/0.31.0/com.google.cloud.securitycenter.settings.v1beta1.BatchCalculateEffectiveSettingsRequest),[BatchCalculateEffectiveSettingsResponse](/java/docs/reference/google-cloud-securitycenter-settings/0.31.0/com.google.cloud.securitycenter.settings.v1beta1.BatchCalculateEffectiveSettingsResponse)>`

### batchGetSettingsSettings()

```
public UnaryCallSettings<BatchGetSettingsRequest,BatchGetSettingsResponse> batchGetSettingsSettings()
```

Returns the object with the settings used for calls to batchGetSettings.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[BatchGetSettingsRequest](/java/docs/reference/google-cloud-securitycenter-settings/0.31.0/com.google.cloud.securitycenter.settings.v1beta1.BatchGetSettingsRequest),[BatchGetSettingsResponse](/java/docs/reference/google-cloud-securitycenter-settings/0.31.0/com.google.cloud.securitycenter.settings.v1beta1.BatchGetSettingsResponse)>`

### calculateEffectiveComponentSettingsSettings()

```
public UnaryCallSettings<CalculateEffectiveComponentSettingsRequest,ComponentSettings> calculateEffectiveComponentSettingsSettings()
```

Returns the object with the settings used for calls to calculateEffectiveComponentSettings.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CalculateEffectiveComponentSettingsRequest](/java/docs/reference/google-cloud-securitycenter-settings/0.31.0/com.google.cloud.securitycenter.settings.v1beta1.CalculateEffectiveComponentSettingsRequest),[ComponentSettings](/java/docs/reference/google-cloud-securitycenter-settings/0.31.0/com.google.cloud.securitycenter.settings.v1beta1.ComponentSettings)>`

### calculateEffectiveSettingsSettings()

```
public UnaryCallSettings<CalculateEffectiveSettingsRequest,Settings> calculateEffectiveSettingsSettings()
```

Returns the object with the settings used for calls to calculateEffectiveSettings.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CalculateEffectiveSettingsRequest](/java/docs/reference/google-cloud-securitycenter-settings/0.31.0/com.google.cloud.securitycenter.settings.v1beta1.CalculateEffectiveSettingsRequest),[Settings](/java/docs/reference/google-cloud-securitycenter-settings/0.31.0/com.google.cloud.securitycenter.settings.v1beta1.Settings)>`

### createStub()

```
public SecurityCenterSettingsServiceStub createStub()
```

**Returns**

**Type**

**Description**

`[SecurityCenterSettingsServiceStub](/java/docs/reference/google-cloud-securitycenter-settings/0.31.0/com.google.cloud.securitycenter.settings.v1beta1.stub.SecurityCenterSettingsServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### getComponentSettingsSettings()

```
public UnaryCallSettings<GetComponentSettingsRequest,ComponentSettings> getComponentSettingsSettings()
```

Returns the object with the settings used for calls to getComponentSettings.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetComponentSettingsRequest](/java/docs/reference/google-cloud-securitycenter-settings/0.31.0/com.google.cloud.securitycenter.settings.v1beta1.GetComponentSettingsRequest),[ComponentSettings](/java/docs/reference/google-cloud-securitycenter-settings/0.31.0/com.google.cloud.securitycenter.settings.v1beta1.ComponentSettings)>`

### getServiceAccountSettings()

```
public UnaryCallSettings<GetServiceAccountRequest,ServiceAccount> getServiceAccountSettings()
```

Returns the object with the settings used for calls to getServiceAccount.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetServiceAccountRequest](/java/docs/reference/google-cloud-securitycenter-settings/0.31.0/com.google.cloud.securitycenter.settings.v1beta1.GetServiceAccountRequest),[ServiceAccount](/java/docs/reference/google-cloud-securitycenter-settings/0.31.0/com.google.cloud.securitycenter.settings.v1beta1.ServiceAccount)>`

### getSettingsSettings()

```
public UnaryCallSettings<GetSettingsRequest,Settings> getSettingsSettings()
```

Returns the object with the settings used for calls to getSettings.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetSettingsRequest](/java/docs/reference/google-cloud-securitycenter-settings/0.31.0/com.google.cloud.securitycenter.settings.v1beta1.GetSettingsRequest),[Settings](/java/docs/reference/google-cloud-securitycenter-settings/0.31.0/com.google.cloud.securitycenter.settings.v1beta1.Settings)>`

### listComponentsSettings()

```
public PagedCallSettings<ListComponentsRequest,ListComponentsResponse,SecurityCenterSettingsServiceClient.ListComponentsPagedResponse> listComponentsSettings()
```

Returns the object with the settings used for calls to listComponents.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListComponentsRequest](/java/docs/reference/google-cloud-securitycenter-settings/0.31.0/com.google.cloud.securitycenter.settings.v1beta1.ListComponentsRequest),[ListComponentsResponse](/java/docs/reference/google-cloud-securitycenter-settings/0.31.0/com.google.cloud.securitycenter.settings.v1beta1.ListComponentsResponse),[ListComponentsPagedResponse](/java/docs/reference/google-cloud-securitycenter-settings/0.31.0/com.google.cloud.securitycenter.settings.v1beta1.SecurityCenterSettingsServiceClient.ListComponentsPagedResponse)>`

### listDetectorsSettings()

```
public PagedCallSettings<ListDetectorsRequest,ListDetectorsResponse,SecurityCenterSettingsServiceClient.ListDetectorsPagedResponse> listDetectorsSettings()
```

Returns the object with the settings used for calls to listDetectors.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListDetectorsRequest](/java/docs/reference/google-cloud-securitycenter-settings/0.31.0/com.google.cloud.securitycenter.settings.v1beta1.ListDetectorsRequest),[ListDetectorsResponse](/java/docs/reference/google-cloud-securitycenter-settings/0.31.0/com.google.cloud.securitycenter.settings.v1beta1.ListDetectorsResponse),[ListDetectorsPagedResponse](/java/docs/reference/google-cloud-securitycenter-settings/0.31.0/com.google.cloud.securitycenter.settings.v1beta1.SecurityCenterSettingsServiceClient.ListDetectorsPagedResponse)>`

### resetComponentSettingsSettings()

```
public UnaryCallSettings<ResetComponentSettingsRequest,Empty> resetComponentSettingsSettings()
```

Returns the object with the settings used for calls to resetComponentSettings.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[ResetComponentSettingsRequest](/java/docs/reference/google-cloud-securitycenter-settings/0.31.0/com.google.cloud.securitycenter.settings.v1beta1.ResetComponentSettingsRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### resetSettingsSettings()

```
public UnaryCallSettings<ResetSettingsRequest,Empty> resetSettingsSettings()
```

Returns the object with the settings used for calls to resetSettings.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[ResetSettingsRequest](/java/docs/reference/google-cloud-securitycenter-settings/0.31.0/com.google.cloud.securitycenter.settings.v1beta1.ResetSettingsRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### toBuilder()

```
public SecurityCenterSettingsServiceStubSettings.Builder toBuilder()
```

Returns a builder containing all the values of this settings class.

**Returns**

**Type**

**Description**

`[SecurityCenterSettingsServiceStubSettings.Builder](/java/docs/reference/google-cloud-securitycenter-settings/0.31.0/com.google.cloud.securitycenter.settings.v1beta1.stub.SecurityCenterSettingsServiceStubSettings.Builder)`

**Overrides**

[StubSettings<SettingsT>.toBuilder()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_toBuilder__)

### updateComponentSettingsSettings()

```
public UnaryCallSettings<UpdateComponentSettingsRequest,ComponentSettings> updateComponentSettingsSettings()
```

Returns the object with the settings used for calls to updateComponentSettings.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateComponentSettingsRequest](/java/docs/reference/google-cloud-securitycenter-settings/0.31.0/com.google.cloud.securitycenter.settings.v1beta1.UpdateComponentSettingsRequest),[ComponentSettings](/java/docs/reference/google-cloud-securitycenter-settings/0.31.0/com.google.cloud.securitycenter.settings.v1beta1.ComponentSettings)>`

### updateSettingsSettings()

```
public UnaryCallSettings<UpdateSettingsRequest,Settings> updateSettingsSettings()
```

Returns the object with the settings used for calls to updateSettings.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateSettingsRequest](/java/docs/reference/google-cloud-securitycenter-settings/0.31.0/com.google.cloud.securitycenter.settings.v1beta1.UpdateSettingsRequest),[Settings](/java/docs/reference/google-cloud-securitycenter-settings/0.31.0/com.google.cloud.securitycenter.settings.v1beta1.Settings)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
