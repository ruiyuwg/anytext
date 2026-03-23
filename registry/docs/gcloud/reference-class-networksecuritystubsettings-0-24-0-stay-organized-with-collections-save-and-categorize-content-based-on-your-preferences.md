-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class NetworkSecurityStubSettings (0.24.0) Stay organized with collections Save and categorize content based on your preferences.

0.90.0 (latest) 0.88.0 0.86.0 0.85.0 0.83.0 0.81.0 0.79.0 0.78.0 0.77.0 0.76.0 0.75.0 0.73.0 0.71.0 0.70.0 0.67.0 0.66.0 0.65.0 0.63.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.52.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.4 0.5.1 0.4.4

```
public class NetworkSecurityStubSettings extends StubSettings<NetworkSecurityStubSettings>
```

Settings class to configure an instance of [NetworkSecurityStub](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.stub.NetworkSecurityStub).

The default instance has everything set to sensible defaults:

-   The default service address (networksecurity.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of getAuthorizationPolicy to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 NetworkSecurityStubSettings.Builder networkSecuritySettingsBuilder =
     NetworkSecurityStubSettings.newBuilder();
 networkSecuritySettingsBuilder
     .getAuthorizationPolicySettings()
     .setRetrySettings(
         networkSecuritySettingsBuilder
             .getAuthorizationPolicySettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 NetworkSecurityStubSettings networkSecuritySettings = networkSecuritySettingsBuilder.build();
 
```
 

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [StubSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html) \> NetworkSecurityStubSettings

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
public static NetworkSecurityStubSettings.Builder newBuilder()
```

Returns a new builder for this class.

**Returns**

**Type**

**Description**

`[NetworkSecurityStubSettings.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.stub.NetworkSecurityStubSettings.Builder)`

### newBuilder(ClientContext clientContext)

```
public static NetworkSecurityStubSettings.Builder newBuilder(ClientContext clientContext)
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

`[NetworkSecurityStubSettings.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.stub.NetworkSecurityStubSettings.Builder)`

## Constructors

### NetworkSecurityStubSettings(NetworkSecurityStubSettings.Builder settingsBuilder)

```
protected NetworkSecurityStubSettings(NetworkSecurityStubSettings.Builder settingsBuilder)
```

**Parameter**

**Name**

**Description**

`settingsBuilder`

`[NetworkSecurityStubSettings.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.stub.NetworkSecurityStubSettings.Builder)`  

## Methods

### createAuthorizationPolicyOperationSettings()

```
public OperationCallSettings<CreateAuthorizationPolicyRequest,AuthorizationPolicy,OperationMetadata> createAuthorizationPolicyOperationSettings()
```

Returns the object with the settings used for calls to createAuthorizationPolicy.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[CreateAuthorizationPolicyRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.CreateAuthorizationPolicyRequest),[AuthorizationPolicy](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.AuthorizationPolicy),[OperationMetadata](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.OperationMetadata)>`

### createAuthorizationPolicySettings()

```
public UnaryCallSettings<CreateAuthorizationPolicyRequest,Operation> createAuthorizationPolicySettings()
```

Returns the object with the settings used for calls to createAuthorizationPolicy.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateAuthorizationPolicyRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.CreateAuthorizationPolicyRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createClientTlsPolicyOperationSettings()

```
public OperationCallSettings<CreateClientTlsPolicyRequest,ClientTlsPolicy,OperationMetadata> createClientTlsPolicyOperationSettings()
```

Returns the object with the settings used for calls to createClientTlsPolicy.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[CreateClientTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.CreateClientTlsPolicyRequest),[ClientTlsPolicy](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ClientTlsPolicy),[OperationMetadata](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.OperationMetadata)>`

### createClientTlsPolicySettings()

```
public UnaryCallSettings<CreateClientTlsPolicyRequest,Operation> createClientTlsPolicySettings()
```

Returns the object with the settings used for calls to createClientTlsPolicy.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateClientTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.CreateClientTlsPolicyRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createServerTlsPolicyOperationSettings()

```
public OperationCallSettings<CreateServerTlsPolicyRequest,ServerTlsPolicy,OperationMetadata> createServerTlsPolicyOperationSettings()
```

Returns the object with the settings used for calls to createServerTlsPolicy.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[CreateServerTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.CreateServerTlsPolicyRequest),[ServerTlsPolicy](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ServerTlsPolicy),[OperationMetadata](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.OperationMetadata)>`

### createServerTlsPolicySettings()

```
public UnaryCallSettings<CreateServerTlsPolicyRequest,Operation> createServerTlsPolicySettings()
```

Returns the object with the settings used for calls to createServerTlsPolicy.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateServerTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.CreateServerTlsPolicyRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createStub()

```
public NetworkSecurityStub createStub()
```

**Returns**

**Type**

**Description**

`[NetworkSecurityStub](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.stub.NetworkSecurityStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### deleteAuthorizationPolicyOperationSettings()

```
public OperationCallSettings<DeleteAuthorizationPolicyRequest,Empty,OperationMetadata> deleteAuthorizationPolicyOperationSettings()
```

Returns the object with the settings used for calls to deleteAuthorizationPolicy.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[DeleteAuthorizationPolicyRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.DeleteAuthorizationPolicyRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.OperationMetadata)>`

### deleteAuthorizationPolicySettings()

```
public UnaryCallSettings<DeleteAuthorizationPolicyRequest,Operation> deleteAuthorizationPolicySettings()
```

Returns the object with the settings used for calls to deleteAuthorizationPolicy.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteAuthorizationPolicyRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.DeleteAuthorizationPolicyRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteClientTlsPolicyOperationSettings()

```
public OperationCallSettings<DeleteClientTlsPolicyRequest,Empty,OperationMetadata> deleteClientTlsPolicyOperationSettings()
```

Returns the object with the settings used for calls to deleteClientTlsPolicy.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[DeleteClientTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.DeleteClientTlsPolicyRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.OperationMetadata)>`

### deleteClientTlsPolicySettings()

```
public UnaryCallSettings<DeleteClientTlsPolicyRequest,Operation> deleteClientTlsPolicySettings()
```

Returns the object with the settings used for calls to deleteClientTlsPolicy.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteClientTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.DeleteClientTlsPolicyRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteServerTlsPolicyOperationSettings()

```
public OperationCallSettings<DeleteServerTlsPolicyRequest,Empty,OperationMetadata> deleteServerTlsPolicyOperationSettings()
```

Returns the object with the settings used for calls to deleteServerTlsPolicy.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[DeleteServerTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.DeleteServerTlsPolicyRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.OperationMetadata)>`

### deleteServerTlsPolicySettings()

```
public UnaryCallSettings<DeleteServerTlsPolicyRequest,Operation> deleteServerTlsPolicySettings()
```

Returns the object with the settings used for calls to deleteServerTlsPolicy.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteServerTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.DeleteServerTlsPolicyRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getAuthorizationPolicySettings()

```
public UnaryCallSettings<GetAuthorizationPolicyRequest,AuthorizationPolicy> getAuthorizationPolicySettings()
```

Returns the object with the settings used for calls to getAuthorizationPolicy.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetAuthorizationPolicyRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.GetAuthorizationPolicyRequest),[AuthorizationPolicy](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.AuthorizationPolicy)>`

### getClientTlsPolicySettings()

```
public UnaryCallSettings<GetClientTlsPolicyRequest,ClientTlsPolicy> getClientTlsPolicySettings()
```

Returns the object with the settings used for calls to getClientTlsPolicy.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetClientTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.GetClientTlsPolicyRequest),[ClientTlsPolicy](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ClientTlsPolicy)>`

### getIamPolicySettings()

```
public UnaryCallSettings<GetIamPolicyRequest,Policy> getIamPolicySettings()
```

Returns the object with the settings used for calls to getIamPolicy.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<com.google.iam.v1.GetIamPolicyRequest,com.google.iam.v1.Policy>`

### getLocationSettings()

```
public UnaryCallSettings<GetLocationRequest,Location> getLocationSettings()
```

Returns the object with the settings used for calls to getLocation.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<com.google.cloud.location.GetLocationRequest,com.google.cloud.location.Location>`

### getServerTlsPolicySettings()

```
public UnaryCallSettings<GetServerTlsPolicyRequest,ServerTlsPolicy> getServerTlsPolicySettings()
```

Returns the object with the settings used for calls to getServerTlsPolicy.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetServerTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.GetServerTlsPolicyRequest),[ServerTlsPolicy](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ServerTlsPolicy)>`

### listAuthorizationPoliciesSettings()

```
public PagedCallSettings<ListAuthorizationPoliciesRequest,ListAuthorizationPoliciesResponse,NetworkSecurityClient.ListAuthorizationPoliciesPagedResponse> listAuthorizationPoliciesSettings()
```

Returns the object with the settings used for calls to listAuthorizationPolicies.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListAuthorizationPoliciesRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ListAuthorizationPoliciesRequest),[ListAuthorizationPoliciesResponse](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ListAuthorizationPoliciesResponse),[ListAuthorizationPoliciesPagedResponse](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.NetworkSecurityClient.ListAuthorizationPoliciesPagedResponse)>`

### listClientTlsPoliciesSettings()

```
public PagedCallSettings<ListClientTlsPoliciesRequest,ListClientTlsPoliciesResponse,NetworkSecurityClient.ListClientTlsPoliciesPagedResponse> listClientTlsPoliciesSettings()
```

Returns the object with the settings used for calls to listClientTlsPolicies.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListClientTlsPoliciesRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ListClientTlsPoliciesRequest),[ListClientTlsPoliciesResponse](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ListClientTlsPoliciesResponse),[ListClientTlsPoliciesPagedResponse](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.NetworkSecurityClient.ListClientTlsPoliciesPagedResponse)>`

### listLocationsSettings()

```
public PagedCallSettings<ListLocationsRequest,ListLocationsResponse,NetworkSecurityClient.ListLocationsPagedResponse> listLocationsSettings()
```

Returns the object with the settings used for calls to listLocations.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<com.google.cloud.location.ListLocationsRequest,com.google.cloud.location.ListLocationsResponse,[ListLocationsPagedResponse](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.NetworkSecurityClient.ListLocationsPagedResponse)>`

### listServerTlsPoliciesSettings()

```
public PagedCallSettings<ListServerTlsPoliciesRequest,ListServerTlsPoliciesResponse,NetworkSecurityClient.ListServerTlsPoliciesPagedResponse> listServerTlsPoliciesSettings()
```

Returns the object with the settings used for calls to listServerTlsPolicies.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListServerTlsPoliciesRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ListServerTlsPoliciesRequest),[ListServerTlsPoliciesResponse](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ListServerTlsPoliciesResponse),[ListServerTlsPoliciesPagedResponse](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.NetworkSecurityClient.ListServerTlsPoliciesPagedResponse)>`

### setIamPolicySettings()

```
public UnaryCallSettings<SetIamPolicyRequest,Policy> setIamPolicySettings()
```

Returns the object with the settings used for calls to setIamPolicy.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<com.google.iam.v1.SetIamPolicyRequest,com.google.iam.v1.Policy>`

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
public NetworkSecurityStubSettings.Builder toBuilder()
```

Returns a builder containing all the values of this settings class.

**Returns**

**Type**

**Description**

`[NetworkSecurityStubSettings.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.stub.NetworkSecurityStubSettings.Builder)`

**Overrides**

[StubSettings<SettingsT>.toBuilder()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_toBuilder__)

### updateAuthorizationPolicyOperationSettings()

```
public OperationCallSettings<UpdateAuthorizationPolicyRequest,AuthorizationPolicy,OperationMetadata> updateAuthorizationPolicyOperationSettings()
```

Returns the object with the settings used for calls to updateAuthorizationPolicy.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[UpdateAuthorizationPolicyRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.UpdateAuthorizationPolicyRequest),[AuthorizationPolicy](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.AuthorizationPolicy),[OperationMetadata](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.OperationMetadata)>`

### updateAuthorizationPolicySettings()

```
public UnaryCallSettings<UpdateAuthorizationPolicyRequest,Operation> updateAuthorizationPolicySettings()
```

Returns the object with the settings used for calls to updateAuthorizationPolicy.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateAuthorizationPolicyRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.UpdateAuthorizationPolicyRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateClientTlsPolicyOperationSettings()

```
public OperationCallSettings<UpdateClientTlsPolicyRequest,ClientTlsPolicy,OperationMetadata> updateClientTlsPolicyOperationSettings()
```

Returns the object with the settings used for calls to updateClientTlsPolicy.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[UpdateClientTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.UpdateClientTlsPolicyRequest),[ClientTlsPolicy](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ClientTlsPolicy),[OperationMetadata](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.OperationMetadata)>`

### updateClientTlsPolicySettings()

```
public UnaryCallSettings<UpdateClientTlsPolicyRequest,Operation> updateClientTlsPolicySettings()
```

Returns the object with the settings used for calls to updateClientTlsPolicy.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateClientTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.UpdateClientTlsPolicyRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateServerTlsPolicyOperationSettings()

```
public OperationCallSettings<UpdateServerTlsPolicyRequest,ServerTlsPolicy,OperationMetadata> updateServerTlsPolicyOperationSettings()
```

Returns the object with the settings used for calls to updateServerTlsPolicy.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[UpdateServerTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.UpdateServerTlsPolicyRequest),[ServerTlsPolicy](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ServerTlsPolicy),[OperationMetadata](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.OperationMetadata)>`

### updateServerTlsPolicySettings()

```
public UnaryCallSettings<UpdateServerTlsPolicyRequest,Operation> updateServerTlsPolicySettings()
```

Returns the object with the settings used for calls to updateServerTlsPolicy.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateServerTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.UpdateServerTlsPolicyRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
