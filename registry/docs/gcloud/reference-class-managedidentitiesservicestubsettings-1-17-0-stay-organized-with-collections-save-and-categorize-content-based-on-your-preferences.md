-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ManagedIdentitiesServiceStubSettings (1.17.0) Stay organized with collections Save and categorize content based on your preferences.

1.85.0 (latest) 1.83.0 1.81.0 1.80.0 1.79.0 1.78.0 1.76.0 1.74.0 1.73.0 1.72.0 1.71.0 1.70.0 1.68.0 1.66.0 1.65.0 1.62.0 1.61.0 1.60.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.9.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.6 1.0.5 0.3.7

```
public class ManagedIdentitiesServiceStubSettings extends StubSettings<ManagedIdentitiesServiceStubSettings>
```

Settings class to configure an instance of [ManagedIdentitiesServiceStub](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.stub.ManagedIdentitiesServiceStub).

The default instance has everything set to sensible defaults:

-   The default service address (managedidentities.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of resetAdminPassword to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 ManagedIdentitiesServiceStubSettings.Builder managedIdentitiesServiceSettingsBuilder =
     ManagedIdentitiesServiceStubSettings.newBuilder();
 managedIdentitiesServiceSettingsBuilder
     .resetAdminPasswordSettings()
     .setRetrySettings(
         managedIdentitiesServiceSettingsBuilder
             .resetAdminPasswordSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 ManagedIdentitiesServiceStubSettings managedIdentitiesServiceSettings =
     managedIdentitiesServiceSettingsBuilder.build();
 
```
 

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [StubSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html) \> ManagedIdentitiesServiceStubSettings

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
public static ManagedIdentitiesServiceStubSettings.Builder newBuilder()
```

Returns a new builder for this class.

**Returns**

**Type**

**Description**

`[ManagedIdentitiesServiceStubSettings.Builder](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.stub.ManagedIdentitiesServiceStubSettings.Builder)`

### newBuilder(ClientContext clientContext)

```
public static ManagedIdentitiesServiceStubSettings.Builder newBuilder(ClientContext clientContext)
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

`[ManagedIdentitiesServiceStubSettings.Builder](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.stub.ManagedIdentitiesServiceStubSettings.Builder)`

## Constructors

### ManagedIdentitiesServiceStubSettings(ManagedIdentitiesServiceStubSettings.Builder settingsBuilder)

```
protected ManagedIdentitiesServiceStubSettings(ManagedIdentitiesServiceStubSettings.Builder settingsBuilder)
```

**Parameter**

**Name**

**Description**

`settingsBuilder`

`[ManagedIdentitiesServiceStubSettings.Builder](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.stub.ManagedIdentitiesServiceStubSettings.Builder)`  

## Methods

### attachTrustOperationSettings()

```
public OperationCallSettings<AttachTrustRequest,Domain,OpMetadata> attachTrustOperationSettings()
```

Returns the object with the settings used for calls to attachTrust.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[AttachTrustRequest](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.AttachTrustRequest),[Domain](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.Domain),[OpMetadata](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.OpMetadata)>`

### attachTrustSettings()

```
public UnaryCallSettings<AttachTrustRequest,Operation> attachTrustSettings()
```

Returns the object with the settings used for calls to attachTrust.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[AttachTrustRequest](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.AttachTrustRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createMicrosoftAdDomainOperationSettings()

```
public OperationCallSettings<CreateMicrosoftAdDomainRequest,Domain,OpMetadata> createMicrosoftAdDomainOperationSettings()
```

Returns the object with the settings used for calls to createMicrosoftAdDomain.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[CreateMicrosoftAdDomainRequest](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.CreateMicrosoftAdDomainRequest),[Domain](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.Domain),[OpMetadata](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.OpMetadata)>`

### createMicrosoftAdDomainSettings()

```
public UnaryCallSettings<CreateMicrosoftAdDomainRequest,Operation> createMicrosoftAdDomainSettings()
```

Returns the object with the settings used for calls to createMicrosoftAdDomain.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateMicrosoftAdDomainRequest](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.CreateMicrosoftAdDomainRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createStub()

```
public ManagedIdentitiesServiceStub createStub()
```

**Returns**

**Type**

**Description**

`[ManagedIdentitiesServiceStub](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.stub.ManagedIdentitiesServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### deleteDomainOperationSettings()

```
public OperationCallSettings<DeleteDomainRequest,Empty,OpMetadata> deleteDomainOperationSettings()
```

Returns the object with the settings used for calls to deleteDomain.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[DeleteDomainRequest](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.DeleteDomainRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OpMetadata](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.OpMetadata)>`

### deleteDomainSettings()

```
public UnaryCallSettings<DeleteDomainRequest,Operation> deleteDomainSettings()
```

Returns the object with the settings used for calls to deleteDomain.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteDomainRequest](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.DeleteDomainRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### detachTrustOperationSettings()

```
public OperationCallSettings<DetachTrustRequest,Domain,OpMetadata> detachTrustOperationSettings()
```

Returns the object with the settings used for calls to detachTrust.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[DetachTrustRequest](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.DetachTrustRequest),[Domain](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.Domain),[OpMetadata](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.OpMetadata)>`

### detachTrustSettings()

```
public UnaryCallSettings<DetachTrustRequest,Operation> detachTrustSettings()
```

Returns the object with the settings used for calls to detachTrust.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DetachTrustRequest](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.DetachTrustRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getDomainSettings()

```
public UnaryCallSettings<GetDomainRequest,Domain> getDomainSettings()
```

Returns the object with the settings used for calls to getDomain.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetDomainRequest](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.GetDomainRequest),[Domain](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.Domain)>`

### listDomainsSettings()

```
public PagedCallSettings<ListDomainsRequest,ListDomainsResponse,ManagedIdentitiesServiceClient.ListDomainsPagedResponse> listDomainsSettings()
```

Returns the object with the settings used for calls to listDomains.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListDomainsRequest](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.ListDomainsRequest),[ListDomainsResponse](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.ListDomainsResponse),[ListDomainsPagedResponse](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.ManagedIdentitiesServiceClient.ListDomainsPagedResponse)>`

### reconfigureTrustOperationSettings()

```
public OperationCallSettings<ReconfigureTrustRequest,Domain,OpMetadata> reconfigureTrustOperationSettings()
```

Returns the object with the settings used for calls to reconfigureTrust.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[ReconfigureTrustRequest](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.ReconfigureTrustRequest),[Domain](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.Domain),[OpMetadata](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.OpMetadata)>`

### reconfigureTrustSettings()

```
public UnaryCallSettings<ReconfigureTrustRequest,Operation> reconfigureTrustSettings()
```

Returns the object with the settings used for calls to reconfigureTrust.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[ReconfigureTrustRequest](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.ReconfigureTrustRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### resetAdminPasswordSettings()

```
public UnaryCallSettings<ResetAdminPasswordRequest,ResetAdminPasswordResponse> resetAdminPasswordSettings()
```

Returns the object with the settings used for calls to resetAdminPassword.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[ResetAdminPasswordRequest](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.ResetAdminPasswordRequest),[ResetAdminPasswordResponse](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.ResetAdminPasswordResponse)>`

### toBuilder()

```
public ManagedIdentitiesServiceStubSettings.Builder toBuilder()
```

Returns a builder containing all the values of this settings class.

**Returns**

**Type**

**Description**

`[ManagedIdentitiesServiceStubSettings.Builder](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.stub.ManagedIdentitiesServiceStubSettings.Builder)`

**Overrides**

[StubSettings<SettingsT>.toBuilder()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_toBuilder__)

### updateDomainOperationSettings()

```
public OperationCallSettings<UpdateDomainRequest,Domain,OpMetadata> updateDomainOperationSettings()
```

Returns the object with the settings used for calls to updateDomain.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[UpdateDomainRequest](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.UpdateDomainRequest),[Domain](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.Domain),[OpMetadata](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.OpMetadata)>`

### updateDomainSettings()

```
public UnaryCallSettings<UpdateDomainRequest,Operation> updateDomainSettings()
```

Returns the object with the settings used for calls to updateDomain.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateDomainRequest](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.UpdateDomainRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### validateTrustOperationSettings()

```
public OperationCallSettings<ValidateTrustRequest,Domain,OpMetadata> validateTrustOperationSettings()
```

Returns the object with the settings used for calls to validateTrust.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[ValidateTrustRequest](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.ValidateTrustRequest),[Domain](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.Domain),[OpMetadata](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.OpMetadata)>`

### validateTrustSettings()

```
public UnaryCallSettings<ValidateTrustRequest,Operation> validateTrustSettings()
```

Returns the object with the settings used for calls to validateTrust.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[ValidateTrustRequest](/java/docs/reference/google-cloud-managed-identities/1.17.0/com.google.cloud.managedidentities.v1.ValidateTrustRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
