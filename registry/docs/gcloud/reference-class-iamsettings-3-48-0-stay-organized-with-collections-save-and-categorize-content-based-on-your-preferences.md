-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class IAMSettings (3.48.0) Stay organized with collections Save and categorize content based on your preferences.

3.82.0 (latest) 3.80.0 3.78.0 3.77.0 3.76.0 3.75.0 3.73.0 3.71.0 3.70.0 3.69.0 3.68.0 3.67.0 3.65.0 3.63.0 3.62.0 3.59.0 3.58.0 3.57.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.0.0 1.2.5 1.1.8 0.2.0

```
public class IAMSettings extends ClientSettings<IAMSettings>
```

Settings class to configure an instance of [IAMClient](/java/docs/reference/google-iam-admin/3.48.0/com.google.cloud.iam.admin.v1.IAMClient).

The default instance has everything set to sensible defaults:

-   The default service address (iam.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the [RetrySettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.retrying.RetrySettings) of getServiceAccount:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 IAMSettings.Builder iAMSettingsBuilder = IAMSettings.newBuilder();
 iAMSettingsBuilder
     .getServiceAccountSettings()
     .setRetrySettings(
         iAMSettingsBuilder
             .getServiceAccountSettings()
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
 IAMSettings iAMSettings = iAMSettingsBuilder.build();
 
```
 

Please refer to the [Client Side Retry Guide](https://github.com/googleapis/google-cloud-java/blob/main/docs/client_retries.md) for additional support in setting retries.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [ClientSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html) \> IAMSettings

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

### create(IAMStubSettings stub)

```
public static final IAMSettings create(IAMStubSettings stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[IAMStubSettings](/java/docs/reference/google-iam-admin/3.48.0/com.google.cloud.iam.admin.v1.stub.IAMStubSettings)`  

**Returns**

**Type**

**Description**

`[IAMSettings](/java/docs/reference/google-iam-admin/3.48.0/com.google.cloud.iam.admin.v1.IAMSettings)`

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
public static IAMSettings.Builder newBuilder()
```

Returns a new builder for this class.

**Returns**

**Type**

**Description**

`[IAMSettings.Builder](/java/docs/reference/google-iam-admin/3.48.0/com.google.cloud.iam.admin.v1.IAMSettings.Builder)`

### newBuilder(ClientContext clientContext)

```
public static IAMSettings.Builder newBuilder(ClientContext clientContext)
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

`[IAMSettings.Builder](/java/docs/reference/google-iam-admin/3.48.0/com.google.cloud.iam.admin.v1.IAMSettings.Builder)`

## Constructors

### IAMSettings(IAMSettings.Builder settingsBuilder)

```
protected IAMSettings(IAMSettings.Builder settingsBuilder)
```

**Parameter**

**Name**

**Description**

`settingsBuilder`

`[IAMSettings.Builder](/java/docs/reference/google-iam-admin/3.48.0/com.google.cloud.iam.admin.v1.IAMSettings.Builder)`  

## Methods

### createRoleSettings()

```
public UnaryCallSettings<CreateRoleRequest,Role> createRoleSettings()
```

Returns the object with the settings used for calls to createRole.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateRoleRequest](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.CreateRoleRequest),[Role](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.Role)>`

### createServiceAccountKeySettings()

```
public UnaryCallSettings<CreateServiceAccountKeyRequest,ServiceAccountKey> createServiceAccountKeySettings()
```

Returns the object with the settings used for calls to createServiceAccountKey.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateServiceAccountKeyRequest](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.CreateServiceAccountKeyRequest),[ServiceAccountKey](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.ServiceAccountKey)>`

### createServiceAccountSettings()

```
public UnaryCallSettings<CreateServiceAccountRequest,ServiceAccount> createServiceAccountSettings()
```

Returns the object with the settings used for calls to createServiceAccount.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateServiceAccountRequest](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.CreateServiceAccountRequest),[ServiceAccount](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.ServiceAccount)>`

### deleteRoleSettings()

```
public UnaryCallSettings<DeleteRoleRequest,Role> deleteRoleSettings()
```

Returns the object with the settings used for calls to deleteRole.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteRoleRequest](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.DeleteRoleRequest),[Role](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.Role)>`

### deleteServiceAccountKeySettings()

```
public UnaryCallSettings<DeleteServiceAccountKeyRequest,Empty> deleteServiceAccountKeySettings()
```

Returns the object with the settings used for calls to deleteServiceAccountKey.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteServiceAccountKeyRequest](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.DeleteServiceAccountKeyRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### deleteServiceAccountSettings()

```
public UnaryCallSettings<DeleteServiceAccountRequest,Empty> deleteServiceAccountSettings()
```

Returns the object with the settings used for calls to deleteServiceAccount.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteServiceAccountRequest](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.DeleteServiceAccountRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### disableServiceAccountKeySettings()

```
public UnaryCallSettings<DisableServiceAccountKeyRequest,Empty> disableServiceAccountKeySettings()
```

Returns the object with the settings used for calls to disableServiceAccountKey.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DisableServiceAccountKeyRequest](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.DisableServiceAccountKeyRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### disableServiceAccountSettings()

```
public UnaryCallSettings<DisableServiceAccountRequest,Empty> disableServiceAccountSettings()
```

Returns the object with the settings used for calls to disableServiceAccount.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DisableServiceAccountRequest](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.DisableServiceAccountRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### enableServiceAccountKeySettings()

```
public UnaryCallSettings<EnableServiceAccountKeyRequest,Empty> enableServiceAccountKeySettings()
```

Returns the object with the settings used for calls to enableServiceAccountKey.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[EnableServiceAccountKeyRequest](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.EnableServiceAccountKeyRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### enableServiceAccountSettings()

```
public UnaryCallSettings<EnableServiceAccountRequest,Empty> enableServiceAccountSettings()
```

Returns the object with the settings used for calls to enableServiceAccount.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[EnableServiceAccountRequest](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.EnableServiceAccountRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getIamPolicySettings()

```
public UnaryCallSettings<GetIamPolicyRequest,Policy> getIamPolicySettings()
```

Returns the object with the settings used for calls to getIamPolicy.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<com.google.iam.v1.GetIamPolicyRequest,com.google.iam.v1.Policy>`

### getRoleSettings()

```
public UnaryCallSettings<GetRoleRequest,Role> getRoleSettings()
```

Returns the object with the settings used for calls to getRole.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetRoleRequest](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.GetRoleRequest),[Role](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.Role)>`

### getServiceAccountKeySettings()

```
public UnaryCallSettings<GetServiceAccountKeyRequest,ServiceAccountKey> getServiceAccountKeySettings()
```

Returns the object with the settings used for calls to getServiceAccountKey.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetServiceAccountKeyRequest](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.GetServiceAccountKeyRequest),[ServiceAccountKey](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.ServiceAccountKey)>`

### getServiceAccountSettings()

```
public UnaryCallSettings<GetServiceAccountRequest,ServiceAccount> getServiceAccountSettings()
```

Returns the object with the settings used for calls to getServiceAccount.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetServiceAccountRequest](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.GetServiceAccountRequest),[ServiceAccount](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.ServiceAccount)>`

### lintPolicySettings()

```
public UnaryCallSettings<LintPolicyRequest,LintPolicyResponse> lintPolicySettings()
```

Returns the object with the settings used for calls to lintPolicy.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[LintPolicyRequest](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.LintPolicyRequest),[LintPolicyResponse](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.LintPolicyResponse)>`

### listRolesSettings()

```
public PagedCallSettings<ListRolesRequest,ListRolesResponse,IAMClient.ListRolesPagedResponse> listRolesSettings()
```

Returns the object with the settings used for calls to listRoles.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListRolesRequest](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.ListRolesRequest),[ListRolesResponse](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.ListRolesResponse),[ListRolesPagedResponse](/java/docs/reference/google-iam-admin/3.48.0/com.google.cloud.iam.admin.v1.IAMClient.ListRolesPagedResponse)>`

### listServiceAccountKeysSettings()

```
public UnaryCallSettings<ListServiceAccountKeysRequest,ListServiceAccountKeysResponse> listServiceAccountKeysSettings()
```

Returns the object with the settings used for calls to listServiceAccountKeys.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[ListServiceAccountKeysRequest](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.ListServiceAccountKeysRequest),[ListServiceAccountKeysResponse](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.ListServiceAccountKeysResponse)>`

### listServiceAccountsSettings()

```
public PagedCallSettings<ListServiceAccountsRequest,ListServiceAccountsResponse,IAMClient.ListServiceAccountsPagedResponse> listServiceAccountsSettings()
```

Returns the object with the settings used for calls to listServiceAccounts.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListServiceAccountsRequest](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.ListServiceAccountsRequest),[ListServiceAccountsResponse](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.ListServiceAccountsResponse),[ListServiceAccountsPagedResponse](/java/docs/reference/google-iam-admin/3.48.0/com.google.cloud.iam.admin.v1.IAMClient.ListServiceAccountsPagedResponse)>`

### patchServiceAccountSettings()

```
public UnaryCallSettings<PatchServiceAccountRequest,ServiceAccount> patchServiceAccountSettings()
```

Returns the object with the settings used for calls to patchServiceAccount.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[PatchServiceAccountRequest](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.PatchServiceAccountRequest),[ServiceAccount](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.ServiceAccount)>`

### queryAuditableServicesSettings()

```
public UnaryCallSettings<QueryAuditableServicesRequest,QueryAuditableServicesResponse> queryAuditableServicesSettings()
```

Returns the object with the settings used for calls to queryAuditableServices.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[QueryAuditableServicesRequest](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.QueryAuditableServicesRequest),[QueryAuditableServicesResponse](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.QueryAuditableServicesResponse)>`

### queryGrantableRolesSettings()

```
public PagedCallSettings<QueryGrantableRolesRequest,QueryGrantableRolesResponse,IAMClient.QueryGrantableRolesPagedResponse> queryGrantableRolesSettings()
```

Returns the object with the settings used for calls to queryGrantableRoles.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[QueryGrantableRolesRequest](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.QueryGrantableRolesRequest),[QueryGrantableRolesResponse](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.QueryGrantableRolesResponse),[QueryGrantableRolesPagedResponse](/java/docs/reference/google-iam-admin/3.48.0/com.google.cloud.iam.admin.v1.IAMClient.QueryGrantableRolesPagedResponse)>`

### queryTestablePermissionsSettings()

```
public PagedCallSettings<QueryTestablePermissionsRequest,QueryTestablePermissionsResponse,IAMClient.QueryTestablePermissionsPagedResponse> queryTestablePermissionsSettings()
```

Returns the object with the settings used for calls to queryTestablePermissions.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[QueryTestablePermissionsRequest](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.QueryTestablePermissionsRequest),[QueryTestablePermissionsResponse](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.QueryTestablePermissionsResponse),[QueryTestablePermissionsPagedResponse](/java/docs/reference/google-iam-admin/3.48.0/com.google.cloud.iam.admin.v1.IAMClient.QueryTestablePermissionsPagedResponse)>`

### setIamPolicySettings()

```
public UnaryCallSettings<SetIamPolicyRequest,Policy> setIamPolicySettings()
```

Returns the object with the settings used for calls to setIamPolicy.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<com.google.iam.v1.SetIamPolicyRequest,com.google.iam.v1.Policy>`

### signBlobSettings() (deprecated)

```
public UnaryCallSettings<SignBlobRequest,SignBlobResponse> signBlobSettings()
```

**Deprecated.** _This method is deprecated and will be removed in the next major version update._

Returns the object with the settings used for calls to signBlob.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[SignBlobRequest](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.SignBlobRequest),[SignBlobResponse](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.SignBlobResponse)>`

### signJwtSettings() (deprecated)

```
public UnaryCallSettings<SignJwtRequest,SignJwtResponse> signJwtSettings()
```

**Deprecated.** _This method is deprecated and will be removed in the next major version update._

Returns the object with the settings used for calls to signJwt.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[SignJwtRequest](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.SignJwtRequest),[SignJwtResponse](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.SignJwtResponse)>`

### testIamPermissionsSettings()

```
public UnaryCallSettings<TestIamPermissionsRequest,TestIamPermissionsResponse> testIamPermissionsSettings()
```

Returns the object with the settings used for calls to testIamPermissions.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<com.google.iam.v1.TestIamPermissionsRequest,com.google.iam.v1.TestIamPermissionsResponse>`

### toBuilder()

```
public IAMSettings.Builder toBuilder()
```

Returns a builder containing all the values of this settings class.

**Returns**

**Type**

**Description**

`[IAMSettings.Builder](/java/docs/reference/google-iam-admin/3.48.0/com.google.cloud.iam.admin.v1.IAMSettings.Builder)`

**Overrides**

[ClientSettings<SettingsT>.<B>toBuilder()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings__B_toBuilder__)

### undeleteRoleSettings()

```
public UnaryCallSettings<UndeleteRoleRequest,Role> undeleteRoleSettings()
```

Returns the object with the settings used for calls to undeleteRole.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UndeleteRoleRequest](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.UndeleteRoleRequest),[Role](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.Role)>`

### undeleteServiceAccountSettings()

```
public UnaryCallSettings<UndeleteServiceAccountRequest,UndeleteServiceAccountResponse> undeleteServiceAccountSettings()
```

Returns the object with the settings used for calls to undeleteServiceAccount.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UndeleteServiceAccountRequest](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.UndeleteServiceAccountRequest),[UndeleteServiceAccountResponse](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.UndeleteServiceAccountResponse)>`

### updateRoleSettings()

```
public UnaryCallSettings<UpdateRoleRequest,Role> updateRoleSettings()
```

Returns the object with the settings used for calls to updateRole.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateRoleRequest](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.UpdateRoleRequest),[Role](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.Role)>`

### updateServiceAccountSettings()

```
public UnaryCallSettings<ServiceAccount,ServiceAccount> updateServiceAccountSettings()
```

Returns the object with the settings used for calls to updateServiceAccount.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[ServiceAccount](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.ServiceAccount),[ServiceAccount](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.ServiceAccount)>`

### uploadServiceAccountKeySettings()

```
public UnaryCallSettings<UploadServiceAccountKeyRequest,ServiceAccountKey> uploadServiceAccountKeySettings()
```

Returns the object with the settings used for calls to uploadServiceAccountKey.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UploadServiceAccountKeyRequest](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.UploadServiceAccountKeyRequest),[ServiceAccountKey](/java/docs/reference/google-iam-admin/3.48.0/com.google.iam.admin.v1.ServiceAccountKey)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
