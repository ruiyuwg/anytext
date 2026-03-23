-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class TpuSettings.Builder (2.52.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.2.6

```
public static class TpuSettings.Builder extends ClientSettings.Builder<TpuSettings,TpuSettings.Builder>
```

Builder for TpuSettings.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [ClientSettings.Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html) \> TpuSettings.Builder

## Inherited Members

[ClientSettings.Builder.applyToAllUnaryMethods(Iterable<UnaryCallSettings.Builder<?,?>>,ApiFunction<UnaryCallSettings.Builder<?,?>,Void>)](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_applyToAllUnaryMethods_java_lang_Iterable_com_google_api_gax_rpc_UnaryCallSettings_Builder_______com_google_api_core_ApiFunction_com_google_api_gax_rpc_UnaryCallSettings_Builder______java_lang_Void__)

[ClientSettings.Builder.build()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_build__)

[ClientSettings.Builder.getBackgroundExecutorProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_getBackgroundExecutorProvider__)

[ClientSettings.Builder.getClock()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_getClock__)

[ClientSettings.Builder.getCredentialsProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_getCredentialsProvider__)

[ClientSettings.Builder.getEndpoint()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_getEndpoint__)

[ClientSettings.Builder.getExecutorProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_getExecutorProvider__)

[ClientSettings.Builder.getGdchApiAudience()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_getGdchApiAudience__)

[ClientSettings.Builder.getHeaderProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_getHeaderProvider__)

[ClientSettings.Builder.getInternalHeaderProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_getInternalHeaderProvider__)

[ClientSettings.Builder.getQuotaProjectId()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_getQuotaProjectId__)

[ClientSettings.Builder.getStubSettings()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_getStubSettings__)

[ClientSettings.Builder.getTransportChannelProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_getTransportChannelProvider__)

[ClientSettings.Builder.getWatchdogCheckInterval()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_getWatchdogCheckInterval__)

[ClientSettings.Builder.getWatchdogCheckIntervalDuration()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_getWatchdogCheckIntervalDuration__)

[ClientSettings.Builder.getWatchdogProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_getWatchdogProvider__)

[ClientSettings.Builder.self()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_self__)

[ClientSettings.Builder.setBackgroundExecutorProvider(ExecutorProvider)](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_setBackgroundExecutorProvider_com_google_api_gax_core_ExecutorProvider_)

[ClientSettings.Builder.setClock(ApiClock)](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_setClock_com_google_api_core_ApiClock_)

[ClientSettings.Builder.setCredentialsProvider(CredentialsProvider)](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_setCredentialsProvider_com_google_api_gax_core_CredentialsProvider_)

[ClientSettings.Builder.setEndpoint(String)](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_setEndpoint_java_lang_String_)

[ClientSettings.Builder.setExecutorProvider(ExecutorProvider)](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_setExecutorProvider_com_google_api_gax_core_ExecutorProvider_)

[ClientSettings.Builder.setGdchApiAudience(String)](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_setGdchApiAudience_java_lang_String_)

[ClientSettings.Builder.setHeaderProvider(HeaderProvider)](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_setHeaderProvider_com_google_api_gax_rpc_HeaderProvider_)

[ClientSettings.Builder.setInternalHeaderProvider(HeaderProvider)](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_setInternalHeaderProvider_com_google_api_gax_rpc_HeaderProvider_)

[ClientSettings.Builder.setQuotaProjectId(String)](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_setQuotaProjectId_java_lang_String_)

[ClientSettings.Builder.setTransportChannelProvider(TransportChannelProvider)](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_setTransportChannelProvider_com_google_api_gax_rpc_TransportChannelProvider_)

[ClientSettings.Builder.setUniverseDomain(String)](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_setUniverseDomain_java_lang_String_)

[ClientSettings.Builder.setWatchdogCheckInterval(Duration)](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_setWatchdogCheckInterval_org_threeten_bp_Duration_)

[ClientSettings.Builder.setWatchdogCheckIntervalDuration(Duration)](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_setWatchdogCheckIntervalDuration_java_time_Duration_)

[ClientSettings.Builder.setWatchdogProvider(WatchdogProvider)](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_setWatchdogProvider_com_google_api_gax_rpc_WatchdogProvider_)

[ClientSettings.Builder.toString()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_toString__)

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

## Constructors

### Builder()

```
protected Builder()
```

### Builder(ClientContext clientContext)

```
protected Builder(ClientContext clientContext)
```

**Parameter**

**Name**

**Description**

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

### Builder(TpuSettings settings)

```
protected Builder(TpuSettings settings)
```

**Parameter**

**Name**

**Description**

`settings`

`[TpuSettings](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.TpuSettings)`  

### Builder(TpuStubSettings.Builder stubSettings)

```
protected Builder(TpuStubSettings.Builder stubSettings)
```

**Parameter**

**Name**

**Description**

`stubSettings`

`[TpuStubSettings.Builder](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.stub.TpuStubSettings.Builder)`  

## Methods

### applyToAllUnaryMethods(ApiFunction<UnaryCallSettings.Builder<?,?>,Void> settingsUpdater)

```
public TpuSettings.Builder applyToAllUnaryMethods(ApiFunction<UnaryCallSettings.Builder<?,?>,Void> settingsUpdater)
```

Applies the given settings updater function to all of the unary API methods in this service.

Note: This method does not support applying settings to streaming methods.

**Parameter**

**Name**

**Description**

`settingsUpdater`

`[ApiFunction](https://cloud.google.com/java/docs/reference/api-common/latest/com.google.api.core.ApiFunction.html)<[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<?,?>,java.lang.Void>`  

**Returns**

**Type**

**Description**

`[TpuSettings.Builder](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.TpuSettings.Builder)`

### build()

```
public TpuSettings build()
```

**Returns**

**Type**

**Description**

`[TpuSettings](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.TpuSettings)`

**Overrides**

[ClientSettings.Builder<SettingsT,B>.build()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_build__)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### createNodeOperationSettings()

```
public OperationCallSettings.Builder<CreateNodeRequest,Node,OperationMetadata> createNodeOperationSettings()
```

Returns the builder for the settings used for calls to createNode.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.Builder.html)<[CreateNodeRequest](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.CreateNodeRequest),[Node](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.Node),[OperationMetadata](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.OperationMetadata)>`

### createNodeSettings()

```
public UnaryCallSettings.Builder<CreateNodeRequest,Operation> createNodeSettings()
```

Returns the builder for the settings used for calls to createNode.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<[CreateNodeRequest](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.CreateNodeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteNodeOperationSettings()

```
public OperationCallSettings.Builder<DeleteNodeRequest,Empty,OperationMetadata> deleteNodeOperationSettings()
```

Returns the builder for the settings used for calls to deleteNode.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.Builder.html)<[DeleteNodeRequest](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.DeleteNodeRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.OperationMetadata)>`

### deleteNodeSettings()

```
public UnaryCallSettings.Builder<DeleteNodeRequest,Operation> deleteNodeSettings()
```

Returns the builder for the settings used for calls to deleteNode.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<[DeleteNodeRequest](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.DeleteNodeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### generateServiceIdentitySettings()

```
public UnaryCallSettings.Builder<GenerateServiceIdentityRequest,GenerateServiceIdentityResponse> generateServiceIdentitySettings()
```

Returns the builder for the settings used for calls to generateServiceIdentity.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<[GenerateServiceIdentityRequest](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.GenerateServiceIdentityRequest),[GenerateServiceIdentityResponse](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.GenerateServiceIdentityResponse)>`

### getAcceleratorTypeSettings()

```
public UnaryCallSettings.Builder<GetAcceleratorTypeRequest,AcceleratorType> getAcceleratorTypeSettings()
```

Returns the builder for the settings used for calls to getAcceleratorType.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<[GetAcceleratorTypeRequest](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.GetAcceleratorTypeRequest),[AcceleratorType](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.AcceleratorType)>`

### getGuestAttributesSettings()

```
public UnaryCallSettings.Builder<GetGuestAttributesRequest,GetGuestAttributesResponse> getGuestAttributesSettings()
```

Returns the builder for the settings used for calls to getGuestAttributes.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<[GetGuestAttributesRequest](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.GetGuestAttributesRequest),[GetGuestAttributesResponse](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.GetGuestAttributesResponse)>`

### getLocationSettings()

```
public UnaryCallSettings.Builder<GetLocationRequest,Location> getLocationSettings()
```

Returns the builder for the settings used for calls to getLocation.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<com.google.cloud.location.GetLocationRequest,com.google.cloud.location.Location>`

### getNodeSettings()

```
public UnaryCallSettings.Builder<GetNodeRequest,Node> getNodeSettings()
```

Returns the builder for the settings used for calls to getNode.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<[GetNodeRequest](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.GetNodeRequest),[Node](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.Node)>`

### getRuntimeVersionSettings()

```
public UnaryCallSettings.Builder<GetRuntimeVersionRequest,RuntimeVersion> getRuntimeVersionSettings()
```

Returns the builder for the settings used for calls to getRuntimeVersion.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<[GetRuntimeVersionRequest](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.GetRuntimeVersionRequest),[RuntimeVersion](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.RuntimeVersion)>`

### getStubSettingsBuilder()

```
public TpuStubSettings.Builder getStubSettingsBuilder()
```

**Returns**

**Type**

**Description**

`[TpuStubSettings.Builder](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.stub.TpuStubSettings.Builder)`

### listAcceleratorTypesSettings()

```
public PagedCallSettings.Builder<ListAcceleratorTypesRequest,ListAcceleratorTypesResponse,TpuClient.ListAcceleratorTypesPagedResponse> listAcceleratorTypesSettings()
```

Returns the builder for the settings used for calls to listAcceleratorTypes.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.Builder.html)<[ListAcceleratorTypesRequest](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.ListAcceleratorTypesRequest),[ListAcceleratorTypesResponse](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.ListAcceleratorTypesResponse),[ListAcceleratorTypesPagedResponse](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.TpuClient.ListAcceleratorTypesPagedResponse)>`

### listLocationsSettings()

```
public PagedCallSettings.Builder<ListLocationsRequest,ListLocationsResponse,TpuClient.ListLocationsPagedResponse> listLocationsSettings()
```

Returns the builder for the settings used for calls to listLocations.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.Builder.html)<com.google.cloud.location.ListLocationsRequest,com.google.cloud.location.ListLocationsResponse,[ListLocationsPagedResponse](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.TpuClient.ListLocationsPagedResponse)>`

### listNodesSettings()

```
public PagedCallSettings.Builder<ListNodesRequest,ListNodesResponse,TpuClient.ListNodesPagedResponse> listNodesSettings()
```

Returns the builder for the settings used for calls to listNodes.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.Builder.html)<[ListNodesRequest](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.ListNodesRequest),[ListNodesResponse](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.ListNodesResponse),[ListNodesPagedResponse](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.TpuClient.ListNodesPagedResponse)>`

### listRuntimeVersionsSettings()

```
public PagedCallSettings.Builder<ListRuntimeVersionsRequest,ListRuntimeVersionsResponse,TpuClient.ListRuntimeVersionsPagedResponse> listRuntimeVersionsSettings()
```

Returns the builder for the settings used for calls to listRuntimeVersions.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.Builder.html)<[ListRuntimeVersionsRequest](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.ListRuntimeVersionsRequest),[ListRuntimeVersionsResponse](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.ListRuntimeVersionsResponse),[ListRuntimeVersionsPagedResponse](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.TpuClient.ListRuntimeVersionsPagedResponse)>`

### startNodeOperationSettings()

```
public OperationCallSettings.Builder<StartNodeRequest,Node,OperationMetadata> startNodeOperationSettings()
```

Returns the builder for the settings used for calls to startNode.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.Builder.html)<[StartNodeRequest](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.StartNodeRequest),[Node](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.Node),[OperationMetadata](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.OperationMetadata)>`

### startNodeSettings()

```
public UnaryCallSettings.Builder<StartNodeRequest,Operation> startNodeSettings()
```

Returns the builder for the settings used for calls to startNode.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<[StartNodeRequest](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.StartNodeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### stopNodeOperationSettings()

```
public OperationCallSettings.Builder<StopNodeRequest,Node,OperationMetadata> stopNodeOperationSettings()
```

Returns the builder for the settings used for calls to stopNode.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.Builder.html)<[StopNodeRequest](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.StopNodeRequest),[Node](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.Node),[OperationMetadata](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.OperationMetadata)>`

### stopNodeSettings()

```
public UnaryCallSettings.Builder<StopNodeRequest,Operation> stopNodeSettings()
```

Returns the builder for the settings used for calls to stopNode.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<[StopNodeRequest](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.StopNodeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateNodeOperationSettings()

```
public OperationCallSettings.Builder<UpdateNodeRequest,Node,OperationMetadata> updateNodeOperationSettings()
```

Returns the builder for the settings used for calls to updateNode.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.Builder.html)<[UpdateNodeRequest](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.UpdateNodeRequest),[Node](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.Node),[OperationMetadata](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.OperationMetadata)>`

### updateNodeSettings()

```
public UnaryCallSettings.Builder<UpdateNodeRequest,Operation> updateNodeSettings()
```

Returns the builder for the settings used for calls to updateNode.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<[UpdateNodeRequest](/java/docs/reference/google-cloud-tpu/2.52.0/com.google.cloud.tpu.v2.UpdateNodeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
