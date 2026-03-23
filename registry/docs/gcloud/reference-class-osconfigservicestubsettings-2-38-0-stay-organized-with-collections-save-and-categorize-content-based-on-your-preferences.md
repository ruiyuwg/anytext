-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class OsConfigServiceStubSettings (2.38.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.6 2.4.3 2.3.2

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

```
public class OsConfigServiceStubSettings extends StubSettings<OsConfigServiceStubSettings>
```

Settings class to configure an instance of [OsConfigServiceStub](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.stub.OsConfigServiceStub).

The default instance has everything set to sensible defaults:

-   The default service address (osconfig.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of executePatchJob to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 OsConfigServiceStubSettings.Builder osConfigServiceSettingsBuilder =
     OsConfigServiceStubSettings.newBuilder();
 osConfigServiceSettingsBuilder
     .executePatchJobSettings()
     .setRetrySettings(
         osConfigServiceSettingsBuilder
             .executePatchJobSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 OsConfigServiceStubSettings osConfigServiceSettings = osConfigServiceSettingsBuilder.build();
 
```
 

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [StubSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html) \> OsConfigServiceStubSettings

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
public static OsConfigServiceStubSettings.Builder newBuilder()
```

Returns a new gRPC builder for this class.

**Returns**

**Type**

**Description**

`[OsConfigServiceStubSettings.Builder](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.stub.OsConfigServiceStubSettings.Builder)`

### newBuilder(ClientContext clientContext)

```
public static OsConfigServiceStubSettings.Builder newBuilder(ClientContext clientContext)
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

`[OsConfigServiceStubSettings.Builder](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.stub.OsConfigServiceStubSettings.Builder)`

### newHttpJsonBuilder()

```
public static OsConfigServiceStubSettings.Builder newHttpJsonBuilder()
```

Returns a new REST builder for this class.

**Returns**

**Type**

**Description**

`[OsConfigServiceStubSettings.Builder](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.stub.OsConfigServiceStubSettings.Builder)`

## Constructors

### OsConfigServiceStubSettings(OsConfigServiceStubSettings.Builder settingsBuilder)

```
protected OsConfigServiceStubSettings(OsConfigServiceStubSettings.Builder settingsBuilder)
```

**Parameter**

**Name**

**Description**

`settingsBuilder`

`[OsConfigServiceStubSettings.Builder](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.stub.OsConfigServiceStubSettings.Builder)`  

## Methods

### cancelPatchJobSettings()

```
public UnaryCallSettings<PatchJobs.CancelPatchJobRequest,PatchJobs.PatchJob> cancelPatchJobSettings()
```

Returns the object with the settings used for calls to cancelPatchJob.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CancelPatchJobRequest](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.PatchJobs.CancelPatchJobRequest),[PatchJob](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.PatchJobs.PatchJob)>`

### createGuestPolicySettings()

```
public UnaryCallSettings<GuestPolicies.CreateGuestPolicyRequest,GuestPolicies.GuestPolicy> createGuestPolicySettings()
```

Returns the object with the settings used for calls to createGuestPolicy.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateGuestPolicyRequest](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.GuestPolicies.CreateGuestPolicyRequest),[GuestPolicy](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.GuestPolicies.GuestPolicy)>`

### createPatchDeploymentSettings()

```
public UnaryCallSettings<PatchDeployments.CreatePatchDeploymentRequest,PatchDeployments.PatchDeployment> createPatchDeploymentSettings()
```

Returns the object with the settings used for calls to createPatchDeployment.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreatePatchDeploymentRequest](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.PatchDeployments.CreatePatchDeploymentRequest),[PatchDeployment](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.PatchDeployments.PatchDeployment)>`

### createStub()

```
public OsConfigServiceStub createStub()
```

**Returns**

**Type**

**Description**

`[OsConfigServiceStub](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.stub.OsConfigServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### deleteGuestPolicySettings()

```
public UnaryCallSettings<GuestPolicies.DeleteGuestPolicyRequest,Empty> deleteGuestPolicySettings()
```

Returns the object with the settings used for calls to deleteGuestPolicy.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteGuestPolicyRequest](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.GuestPolicies.DeleteGuestPolicyRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### deletePatchDeploymentSettings()

```
public UnaryCallSettings<PatchDeployments.DeletePatchDeploymentRequest,Empty> deletePatchDeploymentSettings()
```

Returns the object with the settings used for calls to deletePatchDeployment.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeletePatchDeploymentRequest](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.PatchDeployments.DeletePatchDeploymentRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### executePatchJobSettings()

```
public UnaryCallSettings<PatchJobs.ExecutePatchJobRequest,PatchJobs.PatchJob> executePatchJobSettings()
```

Returns the object with the settings used for calls to executePatchJob.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[ExecutePatchJobRequest](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.PatchJobs.ExecutePatchJobRequest),[PatchJob](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.PatchJobs.PatchJob)>`

### getEndpoint()

```
public String getEndpoint()
```

Returns the endpoint set by the user or the the service's default endpoint.

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

**Overrides**

[StubSettings<SettingsT>.getEndpoint()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getEndpoint__)

### getGuestPolicySettings()

```
public UnaryCallSettings<GuestPolicies.GetGuestPolicyRequest,GuestPolicies.GuestPolicy> getGuestPolicySettings()
```

Returns the object with the settings used for calls to getGuestPolicy.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetGuestPolicyRequest](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.GuestPolicies.GetGuestPolicyRequest),[GuestPolicy](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.GuestPolicies.GuestPolicy)>`

### getPatchDeploymentSettings()

```
public UnaryCallSettings<PatchDeployments.GetPatchDeploymentRequest,PatchDeployments.PatchDeployment> getPatchDeploymentSettings()
```

Returns the object with the settings used for calls to getPatchDeployment.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetPatchDeploymentRequest](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.PatchDeployments.GetPatchDeploymentRequest),[PatchDeployment](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.PatchDeployments.PatchDeployment)>`

### getPatchJobSettings()

```
public UnaryCallSettings<PatchJobs.GetPatchJobRequest,PatchJobs.PatchJob> getPatchJobSettings()
```

Returns the object with the settings used for calls to getPatchJob.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetPatchJobRequest](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.PatchJobs.GetPatchJobRequest),[PatchJob](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.PatchJobs.PatchJob)>`

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

### listGuestPoliciesSettings()

```
public PagedCallSettings<GuestPolicies.ListGuestPoliciesRequest,GuestPolicies.ListGuestPoliciesResponse,OsConfigServiceClient.ListGuestPoliciesPagedResponse> listGuestPoliciesSettings()
```

Returns the object with the settings used for calls to listGuestPolicies.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListGuestPoliciesRequest](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.GuestPolicies.ListGuestPoliciesRequest),[ListGuestPoliciesResponse](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.GuestPolicies.ListGuestPoliciesResponse),[ListGuestPoliciesPagedResponse](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.OsConfigServiceClient.ListGuestPoliciesPagedResponse)>`

### listPatchDeploymentsSettings()

```
public PagedCallSettings<PatchDeployments.ListPatchDeploymentsRequest,PatchDeployments.ListPatchDeploymentsResponse,OsConfigServiceClient.ListPatchDeploymentsPagedResponse> listPatchDeploymentsSettings()
```

Returns the object with the settings used for calls to listPatchDeployments.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListPatchDeploymentsRequest](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.PatchDeployments.ListPatchDeploymentsRequest),[ListPatchDeploymentsResponse](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.PatchDeployments.ListPatchDeploymentsResponse),[ListPatchDeploymentsPagedResponse](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.OsConfigServiceClient.ListPatchDeploymentsPagedResponse)>`

### listPatchJobInstanceDetailsSettings()

```
public PagedCallSettings<PatchJobs.ListPatchJobInstanceDetailsRequest,PatchJobs.ListPatchJobInstanceDetailsResponse,OsConfigServiceClient.ListPatchJobInstanceDetailsPagedResponse> listPatchJobInstanceDetailsSettings()
```

Returns the object with the settings used for calls to listPatchJobInstanceDetails.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListPatchJobInstanceDetailsRequest](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.PatchJobs.ListPatchJobInstanceDetailsRequest),[ListPatchJobInstanceDetailsResponse](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.PatchJobs.ListPatchJobInstanceDetailsResponse),[ListPatchJobInstanceDetailsPagedResponse](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.OsConfigServiceClient.ListPatchJobInstanceDetailsPagedResponse)>`

### listPatchJobsSettings()

```
public PagedCallSettings<PatchJobs.ListPatchJobsRequest,PatchJobs.ListPatchJobsResponse,OsConfigServiceClient.ListPatchJobsPagedResponse> listPatchJobsSettings()
```

Returns the object with the settings used for calls to listPatchJobs.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListPatchJobsRequest](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.PatchJobs.ListPatchJobsRequest),[ListPatchJobsResponse](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.PatchJobs.ListPatchJobsResponse),[ListPatchJobsPagedResponse](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.OsConfigServiceClient.ListPatchJobsPagedResponse)>`

### lookupEffectiveGuestPolicySettings()

```
public UnaryCallSettings<GuestPolicies.LookupEffectiveGuestPolicyRequest,GuestPolicies.EffectiveGuestPolicy> lookupEffectiveGuestPolicySettings()
```

Returns the object with the settings used for calls to lookupEffectiveGuestPolicy.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[LookupEffectiveGuestPolicyRequest](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.GuestPolicies.LookupEffectiveGuestPolicyRequest),[EffectiveGuestPolicy](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.GuestPolicies.EffectiveGuestPolicy)>`

### pausePatchDeploymentSettings()

```
public UnaryCallSettings<PatchDeployments.PausePatchDeploymentRequest,PatchDeployments.PatchDeployment> pausePatchDeploymentSettings()
```

Returns the object with the settings used for calls to pausePatchDeployment.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[PausePatchDeploymentRequest](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.PatchDeployments.PausePatchDeploymentRequest),[PatchDeployment](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.PatchDeployments.PatchDeployment)>`

### resumePatchDeploymentSettings()

```
public UnaryCallSettings<PatchDeployments.ResumePatchDeploymentRequest,PatchDeployments.PatchDeployment> resumePatchDeploymentSettings()
```

Returns the object with the settings used for calls to resumePatchDeployment.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[ResumePatchDeploymentRequest](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.PatchDeployments.ResumePatchDeploymentRequest),[PatchDeployment](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.PatchDeployments.PatchDeployment)>`

### toBuilder()

```
public OsConfigServiceStubSettings.Builder toBuilder()
```

Returns a builder containing all the values of this settings class.

**Returns**

**Type**

**Description**

`[OsConfigServiceStubSettings.Builder](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.stub.OsConfigServiceStubSettings.Builder)`

**Overrides**

[StubSettings<SettingsT>.toBuilder()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_toBuilder__)

### updateGuestPolicySettings()

```
public UnaryCallSettings<GuestPolicies.UpdateGuestPolicyRequest,GuestPolicies.GuestPolicy> updateGuestPolicySettings()
```

Returns the object with the settings used for calls to updateGuestPolicy.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateGuestPolicyRequest](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.GuestPolicies.UpdateGuestPolicyRequest),[GuestPolicy](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.GuestPolicies.GuestPolicy)>`

### updatePatchDeploymentSettings()

```
public UnaryCallSettings<PatchDeployments.UpdatePatchDeploymentRequest,PatchDeployments.PatchDeployment> updatePatchDeploymentSettings()
```

Returns the object with the settings used for calls to updatePatchDeployment.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdatePatchDeploymentRequest](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.PatchDeployments.UpdatePatchDeploymentRequest),[PatchDeployment](/java/docs/reference/google-cloud-os-config/2.38.0/com.google.cloud.osconfig.v1beta.PatchDeployments.PatchDeployment)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
