-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class RecaptchaEnterpriseServiceStubSettings (3.34.0) Stay organized with collections Save and categorize content based on your preferences.

3.84.0 (latest) 3.82.0 3.80.0 3.79.0 3.77.0 3.75.0 3.73.0 3.72.0 3.71.0 3.70.0 3.69.0 3.67.0 3.65.0 3.64.0 3.61.0 3.60.0 3.59.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.12 2.6.1 2.5.0 2.4.10 2.3.1

```
public class RecaptchaEnterpriseServiceStubSettings extends StubSettings<RecaptchaEnterpriseServiceStubSettings>
```

Settings class to configure an instance of [RecaptchaEnterpriseServiceStub](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.cloud.recaptchaenterprise.v1.stub.RecaptchaEnterpriseServiceStub).

The default instance has everything set to sensible defaults:

-   The default service address (recaptchaenterprise.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of createAssessment to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 RecaptchaEnterpriseServiceStubSettings.Builder recaptchaEnterpriseServiceSettingsBuilder =
     RecaptchaEnterpriseServiceStubSettings.newBuilder();
 recaptchaEnterpriseServiceSettingsBuilder
     .createAssessmentSettings()
     .setRetrySettings(
         recaptchaEnterpriseServiceSettingsBuilder
             .createAssessmentSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 RecaptchaEnterpriseServiceStubSettings recaptchaEnterpriseServiceSettings =
     recaptchaEnterpriseServiceSettingsBuilder.build();
 
```
 

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [StubSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html) \> RecaptchaEnterpriseServiceStubSettings

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
public static RecaptchaEnterpriseServiceStubSettings.Builder newBuilder()
```

Returns a new builder for this class.

**Returns**

**Type**

**Description**

`[RecaptchaEnterpriseServiceStubSettings.Builder](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.cloud.recaptchaenterprise.v1.stub.RecaptchaEnterpriseServiceStubSettings.Builder)`

### newBuilder(ClientContext clientContext)

```
public static RecaptchaEnterpriseServiceStubSettings.Builder newBuilder(ClientContext clientContext)
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

`[RecaptchaEnterpriseServiceStubSettings.Builder](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.cloud.recaptchaenterprise.v1.stub.RecaptchaEnterpriseServiceStubSettings.Builder)`

## Constructors

### RecaptchaEnterpriseServiceStubSettings(RecaptchaEnterpriseServiceStubSettings.Builder settingsBuilder)

```
protected RecaptchaEnterpriseServiceStubSettings(RecaptchaEnterpriseServiceStubSettings.Builder settingsBuilder)
```

**Parameter**

**Name**

**Description**

`settingsBuilder`

`[RecaptchaEnterpriseServiceStubSettings.Builder](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.cloud.recaptchaenterprise.v1.stub.RecaptchaEnterpriseServiceStubSettings.Builder)`  

## Methods

### annotateAssessmentSettings()

```
public UnaryCallSettings<AnnotateAssessmentRequest,AnnotateAssessmentResponse> annotateAssessmentSettings()
```

Returns the object with the settings used for calls to annotateAssessment.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[AnnotateAssessmentRequest](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.recaptchaenterprise.v1.AnnotateAssessmentRequest),[AnnotateAssessmentResponse](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.recaptchaenterprise.v1.AnnotateAssessmentResponse)>`

### createAssessmentSettings()

```
public UnaryCallSettings<CreateAssessmentRequest,Assessment> createAssessmentSettings()
```

Returns the object with the settings used for calls to createAssessment.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateAssessmentRequest](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.recaptchaenterprise.v1.CreateAssessmentRequest),[Assessment](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.recaptchaenterprise.v1.Assessment)>`

### createFirewallPolicySettings()

```
public UnaryCallSettings<CreateFirewallPolicyRequest,FirewallPolicy> createFirewallPolicySettings()
```

Returns the object with the settings used for calls to createFirewallPolicy.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateFirewallPolicyRequest](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.recaptchaenterprise.v1.CreateFirewallPolicyRequest),[FirewallPolicy](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.recaptchaenterprise.v1.FirewallPolicy)>`

### createKeySettings()

```
public UnaryCallSettings<CreateKeyRequest,Key> createKeySettings()
```

Returns the object with the settings used for calls to createKey.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateKeyRequest](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.recaptchaenterprise.v1.CreateKeyRequest),[Key](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.recaptchaenterprise.v1.Key)>`

### createStub()

```
public RecaptchaEnterpriseServiceStub createStub()
```

**Returns**

**Type**

**Description**

`[RecaptchaEnterpriseServiceStub](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.cloud.recaptchaenterprise.v1.stub.RecaptchaEnterpriseServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### deleteFirewallPolicySettings()

```
public UnaryCallSettings<DeleteFirewallPolicyRequest,Empty> deleteFirewallPolicySettings()
```

Returns the object with the settings used for calls to deleteFirewallPolicy.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteFirewallPolicyRequest](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.recaptchaenterprise.v1.DeleteFirewallPolicyRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### deleteKeySettings()

```
public UnaryCallSettings<DeleteKeyRequest,Empty> deleteKeySettings()
```

Returns the object with the settings used for calls to deleteKey.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteKeyRequest](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.recaptchaenterprise.v1.DeleteKeyRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

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

### getFirewallPolicySettings()

```
public UnaryCallSettings<GetFirewallPolicyRequest,FirewallPolicy> getFirewallPolicySettings()
```

Returns the object with the settings used for calls to getFirewallPolicy.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetFirewallPolicyRequest](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.recaptchaenterprise.v1.GetFirewallPolicyRequest),[FirewallPolicy](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.recaptchaenterprise.v1.FirewallPolicy)>`

### getKeySettings()

```
public UnaryCallSettings<GetKeyRequest,Key> getKeySettings()
```

Returns the object with the settings used for calls to getKey.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetKeyRequest](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.recaptchaenterprise.v1.GetKeyRequest),[Key](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.recaptchaenterprise.v1.Key)>`

### getMetricsSettings()

```
public UnaryCallSettings<GetMetricsRequest,Metrics> getMetricsSettings()
```

Returns the object with the settings used for calls to getMetrics.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetMetricsRequest](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.recaptchaenterprise.v1.GetMetricsRequest),[Metrics](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.recaptchaenterprise.v1.Metrics)>`

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

### listFirewallPoliciesSettings()

```
public PagedCallSettings<ListFirewallPoliciesRequest,ListFirewallPoliciesResponse,RecaptchaEnterpriseServiceClient.ListFirewallPoliciesPagedResponse> listFirewallPoliciesSettings()
```

Returns the object with the settings used for calls to listFirewallPolicies.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListFirewallPoliciesRequest](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.recaptchaenterprise.v1.ListFirewallPoliciesRequest),[ListFirewallPoliciesResponse](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.recaptchaenterprise.v1.ListFirewallPoliciesResponse),[ListFirewallPoliciesPagedResponse](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient.ListFirewallPoliciesPagedResponse)>`

### listKeysSettings()

```
public PagedCallSettings<ListKeysRequest,ListKeysResponse,RecaptchaEnterpriseServiceClient.ListKeysPagedResponse> listKeysSettings()
```

Returns the object with the settings used for calls to listKeys.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListKeysRequest](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.recaptchaenterprise.v1.ListKeysRequest),[ListKeysResponse](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.recaptchaenterprise.v1.ListKeysResponse),[ListKeysPagedResponse](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient.ListKeysPagedResponse)>`

### listRelatedAccountGroupMembershipsSettings()

```
public PagedCallSettings<ListRelatedAccountGroupMembershipsRequest,ListRelatedAccountGroupMembershipsResponse,RecaptchaEnterpriseServiceClient.ListRelatedAccountGroupMembershipsPagedResponse> listRelatedAccountGroupMembershipsSettings()
```

Returns the object with the settings used for calls to listRelatedAccountGroupMemberships.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListRelatedAccountGroupMembershipsRequest](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.recaptchaenterprise.v1.ListRelatedAccountGroupMembershipsRequest),[ListRelatedAccountGroupMembershipsResponse](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.recaptchaenterprise.v1.ListRelatedAccountGroupMembershipsResponse),[ListRelatedAccountGroupMembershipsPagedResponse](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient.ListRelatedAccountGroupMembershipsPagedResponse)>`

### listRelatedAccountGroupsSettings()

```
public PagedCallSettings<ListRelatedAccountGroupsRequest,ListRelatedAccountGroupsResponse,RecaptchaEnterpriseServiceClient.ListRelatedAccountGroupsPagedResponse> listRelatedAccountGroupsSettings()
```

Returns the object with the settings used for calls to listRelatedAccountGroups.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListRelatedAccountGroupsRequest](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.recaptchaenterprise.v1.ListRelatedAccountGroupsRequest),[ListRelatedAccountGroupsResponse](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.recaptchaenterprise.v1.ListRelatedAccountGroupsResponse),[ListRelatedAccountGroupsPagedResponse](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient.ListRelatedAccountGroupsPagedResponse)>`

### migrateKeySettings()

```
public UnaryCallSettings<MigrateKeyRequest,Key> migrateKeySettings()
```

Returns the object with the settings used for calls to migrateKey.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[MigrateKeyRequest](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.recaptchaenterprise.v1.MigrateKeyRequest),[Key](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.recaptchaenterprise.v1.Key)>`

### reorderFirewallPoliciesSettings()

```
public UnaryCallSettings<ReorderFirewallPoliciesRequest,ReorderFirewallPoliciesResponse> reorderFirewallPoliciesSettings()
```

Returns the object with the settings used for calls to reorderFirewallPolicies.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[ReorderFirewallPoliciesRequest](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.recaptchaenterprise.v1.ReorderFirewallPoliciesRequest),[ReorderFirewallPoliciesResponse](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.recaptchaenterprise.v1.ReorderFirewallPoliciesResponse)>`

### retrieveLegacySecretKeySettings()

```
public UnaryCallSettings<RetrieveLegacySecretKeyRequest,RetrieveLegacySecretKeyResponse> retrieveLegacySecretKeySettings()
```

Returns the object with the settings used for calls to retrieveLegacySecretKey.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[RetrieveLegacySecretKeyRequest](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.recaptchaenterprise.v1.RetrieveLegacySecretKeyRequest),[RetrieveLegacySecretKeyResponse](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.recaptchaenterprise.v1.RetrieveLegacySecretKeyResponse)>`

### searchRelatedAccountGroupMembershipsSettings()

```
public PagedCallSettings<SearchRelatedAccountGroupMembershipsRequest,SearchRelatedAccountGroupMembershipsResponse,RecaptchaEnterpriseServiceClient.SearchRelatedAccountGroupMembershipsPagedResponse> searchRelatedAccountGroupMembershipsSettings()
```

Returns the object with the settings used for calls to searchRelatedAccountGroupMemberships.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[SearchRelatedAccountGroupMembershipsRequest](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.recaptchaenterprise.v1.SearchRelatedAccountGroupMembershipsRequest),[SearchRelatedAccountGroupMembershipsResponse](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.recaptchaenterprise.v1.SearchRelatedAccountGroupMembershipsResponse),[SearchRelatedAccountGroupMembershipsPagedResponse](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient.SearchRelatedAccountGroupMembershipsPagedResponse)>`

### toBuilder()

```
public RecaptchaEnterpriseServiceStubSettings.Builder toBuilder()
```

Returns a builder containing all the values of this settings class.

**Returns**

**Type**

**Description**

`[RecaptchaEnterpriseServiceStubSettings.Builder](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.cloud.recaptchaenterprise.v1.stub.RecaptchaEnterpriseServiceStubSettings.Builder)`

**Overrides**

[StubSettings<SettingsT>.toBuilder()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_toBuilder__)

### updateFirewallPolicySettings()

```
public UnaryCallSettings<UpdateFirewallPolicyRequest,FirewallPolicy> updateFirewallPolicySettings()
```

Returns the object with the settings used for calls to updateFirewallPolicy.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateFirewallPolicyRequest](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.recaptchaenterprise.v1.UpdateFirewallPolicyRequest),[FirewallPolicy](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.recaptchaenterprise.v1.FirewallPolicy)>`

### updateKeySettings()

```
public UnaryCallSettings<UpdateKeyRequest,Key> updateKeySettings()
```

Returns the object with the settings used for calls to updateKey.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateKeyRequest](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.recaptchaenterprise.v1.UpdateKeyRequest),[Key](/java/docs/reference/google-cloud-recaptchaenterprise/3.34.0/com.google.recaptchaenterprise.v1.Key)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
