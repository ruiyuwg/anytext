-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class CertificateAuthorityServiceStubSettings (2.53.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.4 2.4.0 2.3.0 2.2.5

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

```
public class CertificateAuthorityServiceStubSettings extends StubSettings<CertificateAuthorityServiceStubSettings>
```

Settings class to configure an instance of [CertificateAuthorityServiceStub](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.stub.CertificateAuthorityServiceStub).

The default instance has everything set to sensible defaults:

-   The default service address (privateca.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the [RetrySettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.retrying.RetrySettings) of createCertificate:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 CertificateAuthorityServiceStubSettings.Builder certificateAuthorityServiceSettingsBuilder =
     CertificateAuthorityServiceStubSettings.newBuilder();
 certificateAuthorityServiceSettingsBuilder
     .createCertificateSettings()
     .setRetrySettings(
         certificateAuthorityServiceSettingsBuilder
             .createCertificateSettings()
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
 CertificateAuthorityServiceStubSettings certificateAuthorityServiceSettings =
     certificateAuthorityServiceSettingsBuilder.build();
 
```
 

Please refer to the [Client Side Retry Guide](https://github.com/googleapis/google-cloud-java/blob/main/docs/client_retries.md) for additional support in setting retries.

To configure the RetrySettings of a Long Running Operation method, create an OperationTimedPollAlgorithm object and update the RPC's polling algorithm. For example, to configure the RetrySettings for activateCertificateAuthority:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 CertificateAuthorityServiceStubSettings.Builder certificateAuthorityServiceSettingsBuilder =
     CertificateAuthorityServiceStubSettings.newBuilder();
 TimedRetryAlgorithm timedRetryAlgorithm =
     OperationalTimedPollAlgorithm.create(
         RetrySettings.newBuilder()
             .setInitialRetryDelayDuration(Duration.ofMillis(500))
             .setRetryDelayMultiplier(1.5)
             .setMaxRetryDelay(Duration.ofMillis(5000))
             .setTotalTimeoutDuration(Duration.ofHours(24))
             .build());
 certificateAuthorityServiceSettingsBuilder
     .createClusterOperationSettings()
     .setPollingAlgorithm(timedRetryAlgorithm)
     .build();
 
```
 

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [StubSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html) \> CertificateAuthorityServiceStubSettings

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

[StubSettings.getServiceName()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getServiceName__)

[StubSettings.getStreamWatchdogCheckInterval()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getStreamWatchdogCheckInterval__)

[StubSettings.getStreamWatchdogCheckIntervalDuration()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getStreamWatchdogCheckIntervalDuration__)

[StubSettings.getStreamWatchdogProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getStreamWatchdogProvider__)

[StubSettings.getTracerFactory()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getTracerFactory__)

[StubSettings.getTransportChannelProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getTransportChannelProvider__)

[StubSettings.getUniverseDomain()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getUniverseDomain__)

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

**Obsolete**

_Use getEndpoint() instead_

This feature is stable for usage in this major version, but may be deprecated in a future release.

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
public static CertificateAuthorityServiceStubSettings.Builder newBuilder()
```

Returns a new gRPC builder for this class.

**Returns**

**Type**

**Description**

`[CertificateAuthorityServiceStubSettings.Builder](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.stub.CertificateAuthorityServiceStubSettings.Builder)`

### newBuilder(ClientContext clientContext)

```
public static CertificateAuthorityServiceStubSettings.Builder newBuilder(ClientContext clientContext)
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

`[CertificateAuthorityServiceStubSettings.Builder](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.stub.CertificateAuthorityServiceStubSettings.Builder)`

### newHttpJsonBuilder()

```
public static CertificateAuthorityServiceStubSettings.Builder newHttpJsonBuilder()
```

Returns a new REST builder for this class.

**Returns**

**Type**

**Description**

`[CertificateAuthorityServiceStubSettings.Builder](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.stub.CertificateAuthorityServiceStubSettings.Builder)`

## Constructors

### CertificateAuthorityServiceStubSettings(CertificateAuthorityServiceStubSettings.Builder settingsBuilder)

```
protected CertificateAuthorityServiceStubSettings(CertificateAuthorityServiceStubSettings.Builder settingsBuilder)
```

**Parameter**

**Name**

**Description**

`settingsBuilder`

`[CertificateAuthorityServiceStubSettings.Builder](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.stub.CertificateAuthorityServiceStubSettings.Builder)`  

## Methods

### activateCertificateAuthorityOperationSettings()

```
public OperationCallSettings<ActivateCertificateAuthorityRequest,CertificateAuthority,OperationMetadata> activateCertificateAuthorityOperationSettings()
```

Returns the object with the settings used for calls to activateCertificateAuthority.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[ActivateCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.ActivateCertificateAuthorityRequest),[CertificateAuthority](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority),[OperationMetadata](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.OperationMetadata)>`

### activateCertificateAuthoritySettings()

```
public UnaryCallSettings<ActivateCertificateAuthorityRequest,Operation> activateCertificateAuthoritySettings()
```

Returns the object with the settings used for calls to activateCertificateAuthority.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[ActivateCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.ActivateCertificateAuthorityRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createCertificateAuthorityOperationSettings()

```
public OperationCallSettings<CreateCertificateAuthorityRequest,CertificateAuthority,OperationMetadata> createCertificateAuthorityOperationSettings()
```

Returns the object with the settings used for calls to createCertificateAuthority.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[CreateCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.CreateCertificateAuthorityRequest),[CertificateAuthority](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority),[OperationMetadata](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.OperationMetadata)>`

### createCertificateAuthoritySettings()

```
public UnaryCallSettings<CreateCertificateAuthorityRequest,Operation> createCertificateAuthoritySettings()
```

Returns the object with the settings used for calls to createCertificateAuthority.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.CreateCertificateAuthorityRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createCertificateSettings()

```
public UnaryCallSettings<CreateCertificateRequest,Certificate> createCertificateSettings()
```

Returns the object with the settings used for calls to createCertificate.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateCertificateRequest](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.CreateCertificateRequest),[Certificate](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.Certificate)>`

### createStub()

```
public CertificateAuthorityServiceStub createStub()
```

**Returns**

**Type**

**Description**

`[CertificateAuthorityServiceStub](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.stub.CertificateAuthorityServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### disableCertificateAuthorityOperationSettings()

```
public OperationCallSettings<DisableCertificateAuthorityRequest,CertificateAuthority,OperationMetadata> disableCertificateAuthorityOperationSettings()
```

Returns the object with the settings used for calls to disableCertificateAuthority.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[DisableCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.DisableCertificateAuthorityRequest),[CertificateAuthority](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority),[OperationMetadata](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.OperationMetadata)>`

### disableCertificateAuthoritySettings()

```
public UnaryCallSettings<DisableCertificateAuthorityRequest,Operation> disableCertificateAuthoritySettings()
```

Returns the object with the settings used for calls to disableCertificateAuthority.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DisableCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.DisableCertificateAuthorityRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### enableCertificateAuthorityOperationSettings()

```
public OperationCallSettings<EnableCertificateAuthorityRequest,CertificateAuthority,OperationMetadata> enableCertificateAuthorityOperationSettings()
```

Returns the object with the settings used for calls to enableCertificateAuthority.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[EnableCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.EnableCertificateAuthorityRequest),[CertificateAuthority](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority),[OperationMetadata](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.OperationMetadata)>`

### enableCertificateAuthoritySettings()

```
public UnaryCallSettings<EnableCertificateAuthorityRequest,Operation> enableCertificateAuthoritySettings()
```

Returns the object with the settings used for calls to enableCertificateAuthority.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[EnableCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.EnableCertificateAuthorityRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### fetchCertificateAuthorityCsrSettings()

```
public UnaryCallSettings<FetchCertificateAuthorityCsrRequest,FetchCertificateAuthorityCsrResponse> fetchCertificateAuthorityCsrSettings()
```

Returns the object with the settings used for calls to fetchCertificateAuthorityCsr.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[FetchCertificateAuthorityCsrRequest](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.FetchCertificateAuthorityCsrRequest),[FetchCertificateAuthorityCsrResponse](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.FetchCertificateAuthorityCsrResponse)>`

### getCertificateAuthoritySettings()

```
public UnaryCallSettings<GetCertificateAuthorityRequest,CertificateAuthority> getCertificateAuthoritySettings()
```

Returns the object with the settings used for calls to getCertificateAuthority.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.GetCertificateAuthorityRequest),[CertificateAuthority](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority)>`

### getCertificateRevocationListSettings()

```
public UnaryCallSettings<GetCertificateRevocationListRequest,CertificateRevocationList> getCertificateRevocationListSettings()
```

Returns the object with the settings used for calls to getCertificateRevocationList.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetCertificateRevocationListRequest](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.GetCertificateRevocationListRequest),[CertificateRevocationList](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.CertificateRevocationList)>`

### getCertificateSettings()

```
public UnaryCallSettings<GetCertificateRequest,Certificate> getCertificateSettings()
```

Returns the object with the settings used for calls to getCertificate.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetCertificateRequest](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.GetCertificateRequest),[Certificate](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.Certificate)>`

### getReusableConfigSettings()

```
public UnaryCallSettings<GetReusableConfigRequest,ReusableConfig> getReusableConfigSettings()
```

Returns the object with the settings used for calls to getReusableConfig.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetReusableConfigRequest](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.GetReusableConfigRequest),[ReusableConfig](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.ReusableConfig)>`

### getServiceName()

```
public String getServiceName()
```

Returns the default service name.

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

**Overrides**

[StubSettings<SettingsT>.getServiceName()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getServiceName__)

### listCertificateAuthoritiesSettings()

```
public PagedCallSettings<ListCertificateAuthoritiesRequest,ListCertificateAuthoritiesResponse,CertificateAuthorityServiceClient.ListCertificateAuthoritiesPagedResponse> listCertificateAuthoritiesSettings()
```

Returns the object with the settings used for calls to listCertificateAuthorities.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListCertificateAuthoritiesRequest](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.ListCertificateAuthoritiesRequest),[ListCertificateAuthoritiesResponse](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.ListCertificateAuthoritiesResponse),[ListCertificateAuthoritiesPagedResponse](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceClient.ListCertificateAuthoritiesPagedResponse)>`

### listCertificateRevocationListsSettings()

```
public PagedCallSettings<ListCertificateRevocationListsRequest,ListCertificateRevocationListsResponse,CertificateAuthorityServiceClient.ListCertificateRevocationListsPagedResponse> listCertificateRevocationListsSettings()
```

Returns the object with the settings used for calls to listCertificateRevocationLists.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListCertificateRevocationListsRequest](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.ListCertificateRevocationListsRequest),[ListCertificateRevocationListsResponse](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.ListCertificateRevocationListsResponse),[ListCertificateRevocationListsPagedResponse](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceClient.ListCertificateRevocationListsPagedResponse)>`

### listCertificatesSettings()

```
public PagedCallSettings<ListCertificatesRequest,ListCertificatesResponse,CertificateAuthorityServiceClient.ListCertificatesPagedResponse> listCertificatesSettings()
```

Returns the object with the settings used for calls to listCertificates.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListCertificatesRequest](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.ListCertificatesRequest),[ListCertificatesResponse](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.ListCertificatesResponse),[ListCertificatesPagedResponse](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceClient.ListCertificatesPagedResponse)>`

### listReusableConfigsSettings()

```
public PagedCallSettings<ListReusableConfigsRequest,ListReusableConfigsResponse,CertificateAuthorityServiceClient.ListReusableConfigsPagedResponse> listReusableConfigsSettings()
```

Returns the object with the settings used for calls to listReusableConfigs.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListReusableConfigsRequest](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.ListReusableConfigsRequest),[ListReusableConfigsResponse](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.ListReusableConfigsResponse),[ListReusableConfigsPagedResponse](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceClient.ListReusableConfigsPagedResponse)>`

### restoreCertificateAuthorityOperationSettings()

```
public OperationCallSettings<RestoreCertificateAuthorityRequest,CertificateAuthority,OperationMetadata> restoreCertificateAuthorityOperationSettings()
```

Returns the object with the settings used for calls to restoreCertificateAuthority.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[RestoreCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.RestoreCertificateAuthorityRequest),[CertificateAuthority](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority),[OperationMetadata](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.OperationMetadata)>`

### restoreCertificateAuthoritySettings()

```
public UnaryCallSettings<RestoreCertificateAuthorityRequest,Operation> restoreCertificateAuthoritySettings()
```

Returns the object with the settings used for calls to restoreCertificateAuthority.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[RestoreCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.RestoreCertificateAuthorityRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### revokeCertificateSettings()

```
public UnaryCallSettings<RevokeCertificateRequest,Certificate> revokeCertificateSettings()
```

Returns the object with the settings used for calls to revokeCertificate.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[RevokeCertificateRequest](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.RevokeCertificateRequest),[Certificate](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.Certificate)>`

### scheduleDeleteCertificateAuthorityOperationSettings()

```
public OperationCallSettings<ScheduleDeleteCertificateAuthorityRequest,CertificateAuthority,OperationMetadata> scheduleDeleteCertificateAuthorityOperationSettings()
```

Returns the object with the settings used for calls to scheduleDeleteCertificateAuthority.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[ScheduleDeleteCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.ScheduleDeleteCertificateAuthorityRequest),[CertificateAuthority](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority),[OperationMetadata](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.OperationMetadata)>`

### scheduleDeleteCertificateAuthoritySettings()

```
public UnaryCallSettings<ScheduleDeleteCertificateAuthorityRequest,Operation> scheduleDeleteCertificateAuthoritySettings()
```

Returns the object with the settings used for calls to scheduleDeleteCertificateAuthority.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[ScheduleDeleteCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.ScheduleDeleteCertificateAuthorityRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### toBuilder()

```
public CertificateAuthorityServiceStubSettings.Builder toBuilder()
```

Returns a builder containing all the values of this settings class.

**Returns**

**Type**

**Description**

`[CertificateAuthorityServiceStubSettings.Builder](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.stub.CertificateAuthorityServiceStubSettings.Builder)`

**Overrides**

[StubSettings<SettingsT>.toBuilder()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_toBuilder__)

### updateCertificateAuthorityOperationSettings()

```
public OperationCallSettings<UpdateCertificateAuthorityRequest,CertificateAuthority,OperationMetadata> updateCertificateAuthorityOperationSettings()
```

Returns the object with the settings used for calls to updateCertificateAuthority.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[UpdateCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.UpdateCertificateAuthorityRequest),[CertificateAuthority](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority),[OperationMetadata](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.OperationMetadata)>`

### updateCertificateAuthoritySettings()

```
public UnaryCallSettings<UpdateCertificateAuthorityRequest,Operation> updateCertificateAuthoritySettings()
```

Returns the object with the settings used for calls to updateCertificateAuthority.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.UpdateCertificateAuthorityRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateCertificateRevocationListOperationSettings()

```
public OperationCallSettings<UpdateCertificateRevocationListRequest,CertificateRevocationList,OperationMetadata> updateCertificateRevocationListOperationSettings()
```

Returns the object with the settings used for calls to updateCertificateRevocationList.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[UpdateCertificateRevocationListRequest](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.UpdateCertificateRevocationListRequest),[CertificateRevocationList](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.CertificateRevocationList),[OperationMetadata](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.OperationMetadata)>`

### updateCertificateRevocationListSettings()

```
public UnaryCallSettings<UpdateCertificateRevocationListRequest,Operation> updateCertificateRevocationListSettings()
```

Returns the object with the settings used for calls to updateCertificateRevocationList.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateCertificateRevocationListRequest](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.UpdateCertificateRevocationListRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateCertificateSettings()

```
public UnaryCallSettings<UpdateCertificateRequest,Certificate> updateCertificateSettings()
```

Returns the object with the settings used for calls to updateCertificate.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateCertificateRequest](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.UpdateCertificateRequest),[Certificate](/java/docs/reference/google-cloud-security-private-ca/2.53.0/com.google.cloud.security.privateca.v1beta1.Certificate)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
