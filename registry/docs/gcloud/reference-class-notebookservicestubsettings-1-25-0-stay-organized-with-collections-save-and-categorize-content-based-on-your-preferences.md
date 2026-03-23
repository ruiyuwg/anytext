-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class NotebookServiceStubSettings (1.25.0) Stay organized with collections Save and categorize content based on your preferences.

1.85.0 (latest) 1.83.0 1.81.0 1.80.0 1.78.0 1.76.0 1.74.0 1.73.0 1.72.0 1.71.0 1.70.0 1.68.0 1.66.0 1.65.0 1.62.0 1.61.0 1.60.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.9.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.3 1.0.6 0.6.2

```
public class NotebookServiceStubSettings extends StubSettings<NotebookServiceStubSettings>
```

Settings class to configure an instance of [NotebookServiceStub](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.stub.NotebookServiceStub).

The default instance has everything set to sensible defaults:

-   The default service address (notebooks.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of getInstance to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 NotebookServiceStubSettings.Builder notebookServiceSettingsBuilder =
     NotebookServiceStubSettings.newBuilder();
 notebookServiceSettingsBuilder
     .getInstanceSettings()
     .setRetrySettings(
         notebookServiceSettingsBuilder
             .getInstanceSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 NotebookServiceStubSettings notebookServiceSettings = notebookServiceSettingsBuilder.build();
 
```
 

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [StubSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html) \> NotebookServiceStubSettings

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
public static NotebookServiceStubSettings.Builder newBuilder()
```

Returns a new gRPC builder for this class.

**Returns**

**Type**

**Description**

`[NotebookServiceStubSettings.Builder](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.stub.NotebookServiceStubSettings.Builder)`

### newBuilder(ClientContext clientContext)

```
public static NotebookServiceStubSettings.Builder newBuilder(ClientContext clientContext)
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

`[NotebookServiceStubSettings.Builder](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.stub.NotebookServiceStubSettings.Builder)`

### newHttpJsonBuilder()

```
public static NotebookServiceStubSettings.Builder newHttpJsonBuilder()
```

Returns a new REST builder for this class.

**Returns**

**Type**

**Description**

`[NotebookServiceStubSettings.Builder](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.stub.NotebookServiceStubSettings.Builder)`

## Constructors

### NotebookServiceStubSettings(NotebookServiceStubSettings.Builder settingsBuilder)

```
protected NotebookServiceStubSettings(NotebookServiceStubSettings.Builder settingsBuilder)
```

**Parameter**

**Name**

**Description**

`settingsBuilder`

`[NotebookServiceStubSettings.Builder](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.stub.NotebookServiceStubSettings.Builder)`  

## Methods

### checkInstanceUpgradabilitySettings()

```
public UnaryCallSettings<CheckInstanceUpgradabilityRequest,CheckInstanceUpgradabilityResponse> checkInstanceUpgradabilitySettings()
```

Returns the object with the settings used for calls to checkInstanceUpgradability.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CheckInstanceUpgradabilityRequest](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.CheckInstanceUpgradabilityRequest),[CheckInstanceUpgradabilityResponse](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.CheckInstanceUpgradabilityResponse)>`

### createInstanceOperationSettings()

```
public OperationCallSettings<CreateInstanceRequest,Instance,OperationMetadata> createInstanceOperationSettings()
```

Returns the object with the settings used for calls to createInstance.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[CreateInstanceRequest](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.CreateInstanceRequest),[Instance](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.Instance),[OperationMetadata](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.OperationMetadata)>`

### createInstanceSettings()

```
public UnaryCallSettings<CreateInstanceRequest,Operation> createInstanceSettings()
```

Returns the object with the settings used for calls to createInstance.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateInstanceRequest](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.CreateInstanceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createStub()

```
public NotebookServiceStub createStub()
```

**Returns**

**Type**

**Description**

`[NotebookServiceStub](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.stub.NotebookServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### deleteInstanceOperationSettings()

```
public OperationCallSettings<DeleteInstanceRequest,Empty,OperationMetadata> deleteInstanceOperationSettings()
```

Returns the object with the settings used for calls to deleteInstance.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[DeleteInstanceRequest](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.DeleteInstanceRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.OperationMetadata)>`

### deleteInstanceSettings()

```
public UnaryCallSettings<DeleteInstanceRequest,Operation> deleteInstanceSettings()
```

Returns the object with the settings used for calls to deleteInstance.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteInstanceRequest](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.DeleteInstanceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### diagnoseInstanceOperationSettings()

```
public OperationCallSettings<DiagnoseInstanceRequest,Instance,OperationMetadata> diagnoseInstanceOperationSettings()
```

Returns the object with the settings used for calls to diagnoseInstance.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[DiagnoseInstanceRequest](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.DiagnoseInstanceRequest),[Instance](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.Instance),[OperationMetadata](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.OperationMetadata)>`

### diagnoseInstanceSettings()

```
public UnaryCallSettings<DiagnoseInstanceRequest,Operation> diagnoseInstanceSettings()
```

Returns the object with the settings used for calls to diagnoseInstance.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DiagnoseInstanceRequest](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.DiagnoseInstanceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getIamPolicySettings()

```
public UnaryCallSettings<GetIamPolicyRequest,Policy> getIamPolicySettings()
```

Returns the object with the settings used for calls to getIamPolicy.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<com.google.iam.v1.GetIamPolicyRequest,com.google.iam.v1.Policy>`

### getInstanceSettings()

```
public UnaryCallSettings<GetInstanceRequest,Instance> getInstanceSettings()
```

Returns the object with the settings used for calls to getInstance.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetInstanceRequest](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.GetInstanceRequest),[Instance](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.Instance)>`

### getLocationSettings()

```
public UnaryCallSettings<GetLocationRequest,Location> getLocationSettings()
```

Returns the object with the settings used for calls to getLocation.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<com.google.cloud.location.GetLocationRequest,com.google.cloud.location.Location>`

### listInstancesSettings()

```
public PagedCallSettings<ListInstancesRequest,ListInstancesResponse,NotebookServiceClient.ListInstancesPagedResponse> listInstancesSettings()
```

Returns the object with the settings used for calls to listInstances.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListInstancesRequest](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.ListInstancesRequest),[ListInstancesResponse](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.ListInstancesResponse),[ListInstancesPagedResponse](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.NotebookServiceClient.ListInstancesPagedResponse)>`

### listLocationsSettings()

```
public PagedCallSettings<ListLocationsRequest,ListLocationsResponse,NotebookServiceClient.ListLocationsPagedResponse> listLocationsSettings()
```

Returns the object with the settings used for calls to listLocations.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<com.google.cloud.location.ListLocationsRequest,com.google.cloud.location.ListLocationsResponse,[ListLocationsPagedResponse](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.NotebookServiceClient.ListLocationsPagedResponse)>`

### resetInstanceOperationSettings()

```
public OperationCallSettings<ResetInstanceRequest,Instance,OperationMetadata> resetInstanceOperationSettings()
```

Returns the object with the settings used for calls to resetInstance.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[ResetInstanceRequest](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.ResetInstanceRequest),[Instance](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.Instance),[OperationMetadata](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.OperationMetadata)>`

### resetInstanceSettings()

```
public UnaryCallSettings<ResetInstanceRequest,Operation> resetInstanceSettings()
```

Returns the object with the settings used for calls to resetInstance.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[ResetInstanceRequest](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.ResetInstanceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### rollbackInstanceOperationSettings()

```
public OperationCallSettings<RollbackInstanceRequest,Instance,OperationMetadata> rollbackInstanceOperationSettings()
```

Returns the object with the settings used for calls to rollbackInstance.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[RollbackInstanceRequest](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.RollbackInstanceRequest),[Instance](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.Instance),[OperationMetadata](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.OperationMetadata)>`

### rollbackInstanceSettings()

```
public UnaryCallSettings<RollbackInstanceRequest,Operation> rollbackInstanceSettings()
```

Returns the object with the settings used for calls to rollbackInstance.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[RollbackInstanceRequest](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.RollbackInstanceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### setIamPolicySettings()

```
public UnaryCallSettings<SetIamPolicyRequest,Policy> setIamPolicySettings()
```

Returns the object with the settings used for calls to setIamPolicy.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<com.google.iam.v1.SetIamPolicyRequest,com.google.iam.v1.Policy>`

### startInstanceOperationSettings()

```
public OperationCallSettings<StartInstanceRequest,Instance,OperationMetadata> startInstanceOperationSettings()
```

Returns the object with the settings used for calls to startInstance.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[StartInstanceRequest](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.StartInstanceRequest),[Instance](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.Instance),[OperationMetadata](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.OperationMetadata)>`

### startInstanceSettings()

```
public UnaryCallSettings<StartInstanceRequest,Operation> startInstanceSettings()
```

Returns the object with the settings used for calls to startInstance.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[StartInstanceRequest](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.StartInstanceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### stopInstanceOperationSettings()

```
public OperationCallSettings<StopInstanceRequest,Instance,OperationMetadata> stopInstanceOperationSettings()
```

Returns the object with the settings used for calls to stopInstance.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[StopInstanceRequest](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.StopInstanceRequest),[Instance](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.Instance),[OperationMetadata](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.OperationMetadata)>`

### stopInstanceSettings()

```
public UnaryCallSettings<StopInstanceRequest,Operation> stopInstanceSettings()
```

Returns the object with the settings used for calls to stopInstance.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[StopInstanceRequest](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.StopInstanceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

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
public NotebookServiceStubSettings.Builder toBuilder()
```

Returns a builder containing all the values of this settings class.

**Returns**

**Type**

**Description**

`[NotebookServiceStubSettings.Builder](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.stub.NotebookServiceStubSettings.Builder)`

**Overrides**

[StubSettings<SettingsT>.toBuilder()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_toBuilder__)

### updateInstanceOperationSettings()

```
public OperationCallSettings<UpdateInstanceRequest,Instance,OperationMetadata> updateInstanceOperationSettings()
```

Returns the object with the settings used for calls to updateInstance.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[UpdateInstanceRequest](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.UpdateInstanceRequest),[Instance](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.Instance),[OperationMetadata](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.OperationMetadata)>`

### updateInstanceSettings()

```
public UnaryCallSettings<UpdateInstanceRequest,Operation> updateInstanceSettings()
```

Returns the object with the settings used for calls to updateInstance.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateInstanceRequest](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.UpdateInstanceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### upgradeInstanceOperationSettings()

```
public OperationCallSettings<UpgradeInstanceRequest,Instance,OperationMetadata> upgradeInstanceOperationSettings()
```

Returns the object with the settings used for calls to upgradeInstance.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[UpgradeInstanceRequest](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.UpgradeInstanceRequest),[Instance](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.Instance),[OperationMetadata](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.OperationMetadata)>`

### upgradeInstanceSettings()

```
public UnaryCallSettings<UpgradeInstanceRequest,Operation> upgradeInstanceSettings()
```

Returns the object with the settings used for calls to upgradeInstance.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpgradeInstanceRequest](/java/docs/reference/google-cloud-notebooks/1.25.0/com.google.cloud.notebooks.v2.UpgradeInstanceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
