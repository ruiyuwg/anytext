-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class EnvironmentsStubSettings (1.36.0) Stay organized with collections Save and categorize content based on your preferences.

1.87.0 (latest) 1.85.0 1.83.0 1.82.0 1.80.0 1.78.0 1.76.0 1.75.0 1.74.0 1.73.0 1.72.0 1.70.0 1.68.0 1.67.0 1.64.0 1.63.0 1.62.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0

```
public class EnvironmentsStubSettings extends StubSettings<EnvironmentsStubSettings>
```

Settings class to configure an instance of [EnvironmentsStub](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.stub.EnvironmentsStub).

The default instance has everything set to sensible defaults:

-   The default service address (composer.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of getEnvironment to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 EnvironmentsStubSettings.Builder environmentsSettingsBuilder =
     EnvironmentsStubSettings.newBuilder();
 environmentsSettingsBuilder
     .getEnvironmentSettings()
     .setRetrySettings(
         environmentsSettingsBuilder
             .getEnvironmentSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 EnvironmentsStubSettings environmentsSettings = environmentsSettingsBuilder.build();
 
```
 

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [StubSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html) \> EnvironmentsStubSettings

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
public static EnvironmentsStubSettings.Builder newBuilder()
```

Returns a new gRPC builder for this class.

**Returns**

**Type**

**Description**

`[EnvironmentsStubSettings.Builder](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.stub.EnvironmentsStubSettings.Builder)`

### newBuilder(ClientContext clientContext)

```
public static EnvironmentsStubSettings.Builder newBuilder(ClientContext clientContext)
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

`[EnvironmentsStubSettings.Builder](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.stub.EnvironmentsStubSettings.Builder)`

### newHttpJsonBuilder()

```
public static EnvironmentsStubSettings.Builder newHttpJsonBuilder()
```

Returns a new REST builder for this class.

**Returns**

**Type**

**Description**

`[EnvironmentsStubSettings.Builder](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.stub.EnvironmentsStubSettings.Builder)`

## Constructors

### EnvironmentsStubSettings(EnvironmentsStubSettings.Builder settingsBuilder)

```
protected EnvironmentsStubSettings(EnvironmentsStubSettings.Builder settingsBuilder)
```

**Parameter**

**Name**

**Description**

`settingsBuilder`

`[EnvironmentsStubSettings.Builder](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.stub.EnvironmentsStubSettings.Builder)`  

## Methods

### createEnvironmentOperationSettings()

```
public OperationCallSettings<CreateEnvironmentRequest,Environment,OperationMetadata> createEnvironmentOperationSettings()
```

Returns the object with the settings used for calls to createEnvironment.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[CreateEnvironmentRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.CreateEnvironmentRequest),[Environment](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.Environment),[OperationMetadata](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.OperationMetadata)>`

### createEnvironmentSettings()

```
public UnaryCallSettings<CreateEnvironmentRequest,Operation> createEnvironmentSettings()
```

Returns the object with the settings used for calls to createEnvironment.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateEnvironmentRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.CreateEnvironmentRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createStub()

```
public EnvironmentsStub createStub()
```

**Returns**

**Type**

**Description**

`[EnvironmentsStub](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.stub.EnvironmentsStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### createUserWorkloadsConfigMapSettings()

```
public UnaryCallSettings<CreateUserWorkloadsConfigMapRequest,UserWorkloadsConfigMap> createUserWorkloadsConfigMapSettings()
```

Returns the object with the settings used for calls to createUserWorkloadsConfigMap.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateUserWorkloadsConfigMapRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.CreateUserWorkloadsConfigMapRequest),[UserWorkloadsConfigMap](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.UserWorkloadsConfigMap)>`

### createUserWorkloadsSecretSettings()

```
public UnaryCallSettings<CreateUserWorkloadsSecretRequest,UserWorkloadsSecret> createUserWorkloadsSecretSettings()
```

Returns the object with the settings used for calls to createUserWorkloadsSecret.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateUserWorkloadsSecretRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.CreateUserWorkloadsSecretRequest),[UserWorkloadsSecret](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.UserWorkloadsSecret)>`

### databaseFailoverOperationSettings()

```
public OperationCallSettings<DatabaseFailoverRequest,DatabaseFailoverResponse,OperationMetadata> databaseFailoverOperationSettings()
```

Returns the object with the settings used for calls to databaseFailover.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[DatabaseFailoverRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.DatabaseFailoverRequest),[DatabaseFailoverResponse](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.DatabaseFailoverResponse),[OperationMetadata](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.OperationMetadata)>`

### databaseFailoverSettings()

```
public UnaryCallSettings<DatabaseFailoverRequest,Operation> databaseFailoverSettings()
```

Returns the object with the settings used for calls to databaseFailover.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DatabaseFailoverRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.DatabaseFailoverRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteEnvironmentOperationSettings()

```
public OperationCallSettings<DeleteEnvironmentRequest,Empty,OperationMetadata> deleteEnvironmentOperationSettings()
```

Returns the object with the settings used for calls to deleteEnvironment.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[DeleteEnvironmentRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.DeleteEnvironmentRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.OperationMetadata)>`

### deleteEnvironmentSettings()

```
public UnaryCallSettings<DeleteEnvironmentRequest,Operation> deleteEnvironmentSettings()
```

Returns the object with the settings used for calls to deleteEnvironment.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteEnvironmentRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.DeleteEnvironmentRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteUserWorkloadsConfigMapSettings()

```
public UnaryCallSettings<DeleteUserWorkloadsConfigMapRequest,Empty> deleteUserWorkloadsConfigMapSettings()
```

Returns the object with the settings used for calls to deleteUserWorkloadsConfigMap.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteUserWorkloadsConfigMapRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.DeleteUserWorkloadsConfigMapRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### deleteUserWorkloadsSecretSettings()

```
public UnaryCallSettings<DeleteUserWorkloadsSecretRequest,Empty> deleteUserWorkloadsSecretSettings()
```

Returns the object with the settings used for calls to deleteUserWorkloadsSecret.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteUserWorkloadsSecretRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.DeleteUserWorkloadsSecretRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### executeAirflowCommandSettings()

```
public UnaryCallSettings<ExecuteAirflowCommandRequest,ExecuteAirflowCommandResponse> executeAirflowCommandSettings()
```

Returns the object with the settings used for calls to executeAirflowCommand.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[ExecuteAirflowCommandRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.ExecuteAirflowCommandRequest),[ExecuteAirflowCommandResponse](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.ExecuteAirflowCommandResponse)>`

### fetchDatabasePropertiesSettings()

```
public UnaryCallSettings<FetchDatabasePropertiesRequest,FetchDatabasePropertiesResponse> fetchDatabasePropertiesSettings()
```

Returns the object with the settings used for calls to fetchDatabaseProperties.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[FetchDatabasePropertiesRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.FetchDatabasePropertiesRequest),[FetchDatabasePropertiesResponse](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.FetchDatabasePropertiesResponse)>`

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

### getEnvironmentSettings()

```
public UnaryCallSettings<GetEnvironmentRequest,Environment> getEnvironmentSettings()
```

Returns the object with the settings used for calls to getEnvironment.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetEnvironmentRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.GetEnvironmentRequest),[Environment](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.Environment)>`

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

### getUserWorkloadsConfigMapSettings()

```
public UnaryCallSettings<GetUserWorkloadsConfigMapRequest,UserWorkloadsConfigMap> getUserWorkloadsConfigMapSettings()
```

Returns the object with the settings used for calls to getUserWorkloadsConfigMap.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetUserWorkloadsConfigMapRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.GetUserWorkloadsConfigMapRequest),[UserWorkloadsConfigMap](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.UserWorkloadsConfigMap)>`

### getUserWorkloadsSecretSettings()

```
public UnaryCallSettings<GetUserWorkloadsSecretRequest,UserWorkloadsSecret> getUserWorkloadsSecretSettings()
```

Returns the object with the settings used for calls to getUserWorkloadsSecret.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetUserWorkloadsSecretRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.GetUserWorkloadsSecretRequest),[UserWorkloadsSecret](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.UserWorkloadsSecret)>`

### listEnvironmentsSettings()

```
public PagedCallSettings<ListEnvironmentsRequest,ListEnvironmentsResponse,EnvironmentsClient.ListEnvironmentsPagedResponse> listEnvironmentsSettings()
```

Returns the object with the settings used for calls to listEnvironments.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListEnvironmentsRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.ListEnvironmentsRequest),[ListEnvironmentsResponse](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.ListEnvironmentsResponse),[ListEnvironmentsPagedResponse](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.EnvironmentsClient.ListEnvironmentsPagedResponse)>`

### listUserWorkloadsConfigMapsSettings()

```
public PagedCallSettings<ListUserWorkloadsConfigMapsRequest,ListUserWorkloadsConfigMapsResponse,EnvironmentsClient.ListUserWorkloadsConfigMapsPagedResponse> listUserWorkloadsConfigMapsSettings()
```

Returns the object with the settings used for calls to listUserWorkloadsConfigMaps.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListUserWorkloadsConfigMapsRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.ListUserWorkloadsConfigMapsRequest),[ListUserWorkloadsConfigMapsResponse](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.ListUserWorkloadsConfigMapsResponse),[ListUserWorkloadsConfigMapsPagedResponse](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.EnvironmentsClient.ListUserWorkloadsConfigMapsPagedResponse)>`

### listUserWorkloadsSecretsSettings()

```
public PagedCallSettings<ListUserWorkloadsSecretsRequest,ListUserWorkloadsSecretsResponse,EnvironmentsClient.ListUserWorkloadsSecretsPagedResponse> listUserWorkloadsSecretsSettings()
```

Returns the object with the settings used for calls to listUserWorkloadsSecrets.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListUserWorkloadsSecretsRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.ListUserWorkloadsSecretsRequest),[ListUserWorkloadsSecretsResponse](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.ListUserWorkloadsSecretsResponse),[ListUserWorkloadsSecretsPagedResponse](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.EnvironmentsClient.ListUserWorkloadsSecretsPagedResponse)>`

### listWorkloadsSettings()

```
public PagedCallSettings<ListWorkloadsRequest,ListWorkloadsResponse,EnvironmentsClient.ListWorkloadsPagedResponse> listWorkloadsSettings()
```

Returns the object with the settings used for calls to listWorkloads.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListWorkloadsRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.ListWorkloadsRequest),[ListWorkloadsResponse](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.ListWorkloadsResponse),[ListWorkloadsPagedResponse](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.EnvironmentsClient.ListWorkloadsPagedResponse)>`

### loadSnapshotOperationSettings()

```
public OperationCallSettings<LoadSnapshotRequest,LoadSnapshotResponse,OperationMetadata> loadSnapshotOperationSettings()
```

Returns the object with the settings used for calls to loadSnapshot.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[LoadSnapshotRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.LoadSnapshotRequest),[LoadSnapshotResponse](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.LoadSnapshotResponse),[OperationMetadata](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.OperationMetadata)>`

### loadSnapshotSettings()

```
public UnaryCallSettings<LoadSnapshotRequest,Operation> loadSnapshotSettings()
```

Returns the object with the settings used for calls to loadSnapshot.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[LoadSnapshotRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.LoadSnapshotRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### pollAirflowCommandSettings()

```
public UnaryCallSettings<PollAirflowCommandRequest,PollAirflowCommandResponse> pollAirflowCommandSettings()
```

Returns the object with the settings used for calls to pollAirflowCommand.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[PollAirflowCommandRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.PollAirflowCommandRequest),[PollAirflowCommandResponse](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.PollAirflowCommandResponse)>`

### saveSnapshotOperationSettings()

```
public OperationCallSettings<SaveSnapshotRequest,SaveSnapshotResponse,OperationMetadata> saveSnapshotOperationSettings()
```

Returns the object with the settings used for calls to saveSnapshot.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[SaveSnapshotRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.SaveSnapshotRequest),[SaveSnapshotResponse](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.SaveSnapshotResponse),[OperationMetadata](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.OperationMetadata)>`

### saveSnapshotSettings()

```
public UnaryCallSettings<SaveSnapshotRequest,Operation> saveSnapshotSettings()
```

Returns the object with the settings used for calls to saveSnapshot.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[SaveSnapshotRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.SaveSnapshotRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### stopAirflowCommandSettings()

```
public UnaryCallSettings<StopAirflowCommandRequest,StopAirflowCommandResponse> stopAirflowCommandSettings()
```

Returns the object with the settings used for calls to stopAirflowCommand.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[StopAirflowCommandRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.StopAirflowCommandRequest),[StopAirflowCommandResponse](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.StopAirflowCommandResponse)>`

### toBuilder()

```
public EnvironmentsStubSettings.Builder toBuilder()
```

Returns a builder containing all the values of this settings class.

**Returns**

**Type**

**Description**

`[EnvironmentsStubSettings.Builder](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.stub.EnvironmentsStubSettings.Builder)`

**Overrides**

[StubSettings<SettingsT>.toBuilder()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_toBuilder__)

### updateEnvironmentOperationSettings()

```
public OperationCallSettings<UpdateEnvironmentRequest,Environment,OperationMetadata> updateEnvironmentOperationSettings()
```

Returns the object with the settings used for calls to updateEnvironment.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[UpdateEnvironmentRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.UpdateEnvironmentRequest),[Environment](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.Environment),[OperationMetadata](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.OperationMetadata)>`

### updateEnvironmentSettings()

```
public UnaryCallSettings<UpdateEnvironmentRequest,Operation> updateEnvironmentSettings()
```

Returns the object with the settings used for calls to updateEnvironment.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateEnvironmentRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.UpdateEnvironmentRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateUserWorkloadsConfigMapSettings()

```
public UnaryCallSettings<UpdateUserWorkloadsConfigMapRequest,UserWorkloadsConfigMap> updateUserWorkloadsConfigMapSettings()
```

Returns the object with the settings used for calls to updateUserWorkloadsConfigMap.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateUserWorkloadsConfigMapRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.UpdateUserWorkloadsConfigMapRequest),[UserWorkloadsConfigMap](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.UserWorkloadsConfigMap)>`

### updateUserWorkloadsSecretSettings()

```
public UnaryCallSettings<UpdateUserWorkloadsSecretRequest,UserWorkloadsSecret> updateUserWorkloadsSecretSettings()
```

Returns the object with the settings used for calls to updateUserWorkloadsSecret.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateUserWorkloadsSecretRequest](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.UpdateUserWorkloadsSecretRequest),[UserWorkloadsSecret](/java/docs/reference/google-cloud-orchestration-airflow/1.36.0/com.google.cloud.orchestration.airflow.service.v1.UserWorkloadsSecret)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
