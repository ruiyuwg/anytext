-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class InstanceAdminSettings.Builder (6.71.0) Stay organized with collections Save and categorize content based on your preferences.

6.111.1 (latest) 6.111.0 6.108.0 6.107.0 6.103.0 6.102.1 6.101.1 6.100.0 6.99.0 6.98.1 6.97.1 6.96.1 6.95.1 6.94.0 6.93.0 6.89.0 6.88.0 6.87.0 6.86.0 6.85.0 6.83.0 6.82.0 6.80.1 6.79.0 6.77.0 6.74.1 6.72.0 6.71.0 6.69.0 6.68.0 6.66.0 6.65.1 6.62.0 6.60.0 6.58.0 6.57.0 6.56.0 6.55.0 6.54.0 6.53.0 6.52.1 6.51.0 6.50.1 6.49.0 6.25.1 6.24.0 6.23.4 6.22.0 6.21.2 6.20.0 6.19.1 6.18.0 6.17.4 6.14.1

```
public static class InstanceAdminSettings.Builder extends ClientSettings.Builder<InstanceAdminSettings,InstanceAdminSettings.Builder>
```

Builder for InstanceAdminSettings.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [ClientSettings.Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html) \> InstanceAdminSettings.Builder

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

### Builder(InstanceAdminSettings settings)

```
protected Builder(InstanceAdminSettings settings)
```

**Parameter**

**Name**

**Description**

`settings`

`[InstanceAdminSettings](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.cloud.spanner.admin.instance.v1.InstanceAdminSettings)`  

### Builder(InstanceAdminStubSettings.Builder stubSettings)

```
protected Builder(InstanceAdminStubSettings.Builder stubSettings)
```

**Parameter**

**Name**

**Description**

`stubSettings`

`[InstanceAdminStubSettings.Builder](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.cloud.spanner.admin.instance.v1.stub.InstanceAdminStubSettings.Builder)`  

## Methods

### applyToAllUnaryMethods(ApiFunction<UnaryCallSettings.Builder<?,?>,Void> settingsUpdater)

```
public InstanceAdminSettings.Builder applyToAllUnaryMethods(ApiFunction<UnaryCallSettings.Builder<?,?>,Void> settingsUpdater)
```

Applies the given settings updater function to all of the unary API methods in this service.

Note: This method does not support applying settings to streaming methods.

**Parameter**

**Name**

**Description**

`settingsUpdater`

`[ApiFunction](https://cloud.google.com/java/docs/reference/api-common/latest/com.google.api.core.ApiFunction.html)<[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<?,?>,[Void](https://docs.oracle.com/javase/8/docs/api/java/lang/Void.html)>`  

**Returns**

**Type**

**Description**

`[InstanceAdminSettings.Builder](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.cloud.spanner.admin.instance.v1.InstanceAdminSettings.Builder)`

### build()

```
public InstanceAdminSettings build()
```

**Returns**

**Type**

**Description**

`[InstanceAdminSettings](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.cloud.spanner.admin.instance.v1.InstanceAdminSettings)`

**Overrides**

[ClientSettings.Builder<SettingsT,B>.build()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_build__)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### createInstanceConfigOperationSettings()

```
public OperationCallSettings.Builder<CreateInstanceConfigRequest,InstanceConfig,CreateInstanceConfigMetadata> createInstanceConfigOperationSettings()
```

Returns the builder for the settings used for calls to createInstanceConfig.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.Builder.html)<[CreateInstanceConfigRequest](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.CreateInstanceConfigRequest),[InstanceConfig](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.InstanceConfig),[CreateInstanceConfigMetadata](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.CreateInstanceConfigMetadata)>`

### createInstanceConfigSettings()

```
public UnaryCallSettings.Builder<CreateInstanceConfigRequest,Operation> createInstanceConfigSettings()
```

Returns the builder for the settings used for calls to createInstanceConfig.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<[CreateInstanceConfigRequest](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.CreateInstanceConfigRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createInstanceOperationSettings()

```
public OperationCallSettings.Builder<CreateInstanceRequest,Instance,CreateInstanceMetadata> createInstanceOperationSettings()
```

Returns the builder for the settings used for calls to createInstance.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.Builder.html)<[CreateInstanceRequest](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.CreateInstanceRequest),[Instance](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.Instance),[CreateInstanceMetadata](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.CreateInstanceMetadata)>`

### createInstancePartitionOperationSettings()

```
public OperationCallSettings.Builder<CreateInstancePartitionRequest,InstancePartition,CreateInstancePartitionMetadata> createInstancePartitionOperationSettings()
```

Returns the builder for the settings used for calls to createInstancePartition.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.Builder.html)<[CreateInstancePartitionRequest](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.CreateInstancePartitionRequest),[InstancePartition](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.InstancePartition),[CreateInstancePartitionMetadata](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.CreateInstancePartitionMetadata)>`

### createInstancePartitionSettings()

```
public UnaryCallSettings.Builder<CreateInstancePartitionRequest,Operation> createInstancePartitionSettings()
```

Returns the builder for the settings used for calls to createInstancePartition.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<[CreateInstancePartitionRequest](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.CreateInstancePartitionRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createInstanceSettings()

```
public UnaryCallSettings.Builder<CreateInstanceRequest,Operation> createInstanceSettings()
```

Returns the builder for the settings used for calls to createInstance.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<[CreateInstanceRequest](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.CreateInstanceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteInstanceConfigSettings()

```
public UnaryCallSettings.Builder<DeleteInstanceConfigRequest,Empty> deleteInstanceConfigSettings()
```

Returns the builder for the settings used for calls to deleteInstanceConfig.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<[DeleteInstanceConfigRequest](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.DeleteInstanceConfigRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### deleteInstancePartitionSettings()

```
public UnaryCallSettings.Builder<DeleteInstancePartitionRequest,Empty> deleteInstancePartitionSettings()
```

Returns the builder for the settings used for calls to deleteInstancePartition.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<[DeleteInstancePartitionRequest](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.DeleteInstancePartitionRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### deleteInstanceSettings()

```
public UnaryCallSettings.Builder<DeleteInstanceRequest,Empty> deleteInstanceSettings()
```

Returns the builder for the settings used for calls to deleteInstance.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<[DeleteInstanceRequest](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.DeleteInstanceRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getIamPolicySettings()

```
public UnaryCallSettings.Builder<GetIamPolicyRequest,Policy> getIamPolicySettings()
```

Returns the builder for the settings used for calls to getIamPolicy.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<com.google.iam.v1.GetIamPolicyRequest,com.google.iam.v1.Policy>`

### getInstanceConfigSettings()

```
public UnaryCallSettings.Builder<GetInstanceConfigRequest,InstanceConfig> getInstanceConfigSettings()
```

Returns the builder for the settings used for calls to getInstanceConfig.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<[GetInstanceConfigRequest](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.GetInstanceConfigRequest),[InstanceConfig](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.InstanceConfig)>`

### getInstancePartitionSettings()

```
public UnaryCallSettings.Builder<GetInstancePartitionRequest,InstancePartition> getInstancePartitionSettings()
```

Returns the builder for the settings used for calls to getInstancePartition.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<[GetInstancePartitionRequest](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.GetInstancePartitionRequest),[InstancePartition](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.InstancePartition)>`

### getInstanceSettings()

```
public UnaryCallSettings.Builder<GetInstanceRequest,Instance> getInstanceSettings()
```

Returns the builder for the settings used for calls to getInstance.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<[GetInstanceRequest](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.GetInstanceRequest),[Instance](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.Instance)>`

### getStubSettingsBuilder()

```
public InstanceAdminStubSettings.Builder getStubSettingsBuilder()
```

**Returns**

**Type**

**Description**

`[InstanceAdminStubSettings.Builder](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.cloud.spanner.admin.instance.v1.stub.InstanceAdminStubSettings.Builder)`

### listInstanceConfigOperationsSettings()

```
public PagedCallSettings.Builder<ListInstanceConfigOperationsRequest,ListInstanceConfigOperationsResponse,InstanceAdminClient.ListInstanceConfigOperationsPagedResponse> listInstanceConfigOperationsSettings()
```

Returns the builder for the settings used for calls to listInstanceConfigOperations.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.Builder.html)<[ListInstanceConfigOperationsRequest](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.ListInstanceConfigOperationsRequest),[ListInstanceConfigOperationsResponse](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.ListInstanceConfigOperationsResponse),[ListInstanceConfigOperationsPagedResponse](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.cloud.spanner.admin.instance.v1.InstanceAdminClient.ListInstanceConfigOperationsPagedResponse)>`

### listInstanceConfigsSettings()

```
public PagedCallSettings.Builder<ListInstanceConfigsRequest,ListInstanceConfigsResponse,InstanceAdminClient.ListInstanceConfigsPagedResponse> listInstanceConfigsSettings()
```

Returns the builder for the settings used for calls to listInstanceConfigs.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.Builder.html)<[ListInstanceConfigsRequest](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.ListInstanceConfigsRequest),[ListInstanceConfigsResponse](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.ListInstanceConfigsResponse),[ListInstanceConfigsPagedResponse](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.cloud.spanner.admin.instance.v1.InstanceAdminClient.ListInstanceConfigsPagedResponse)>`

### listInstancePartitionOperationsSettings()

```
public PagedCallSettings.Builder<ListInstancePartitionOperationsRequest,ListInstancePartitionOperationsResponse,InstanceAdminClient.ListInstancePartitionOperationsPagedResponse> listInstancePartitionOperationsSettings()
```

Returns the builder for the settings used for calls to listInstancePartitionOperations.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.Builder.html)<[ListInstancePartitionOperationsRequest](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.ListInstancePartitionOperationsRequest),[ListInstancePartitionOperationsResponse](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.ListInstancePartitionOperationsResponse),[ListInstancePartitionOperationsPagedResponse](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.cloud.spanner.admin.instance.v1.InstanceAdminClient.ListInstancePartitionOperationsPagedResponse)>`

### listInstancePartitionsSettings()

```
public PagedCallSettings.Builder<ListInstancePartitionsRequest,ListInstancePartitionsResponse,InstanceAdminClient.ListInstancePartitionsPagedResponse> listInstancePartitionsSettings()
```

Returns the builder for the settings used for calls to listInstancePartitions.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.Builder.html)<[ListInstancePartitionsRequest](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.ListInstancePartitionsRequest),[ListInstancePartitionsResponse](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.ListInstancePartitionsResponse),[ListInstancePartitionsPagedResponse](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.cloud.spanner.admin.instance.v1.InstanceAdminClient.ListInstancePartitionsPagedResponse)>`

### listInstancesSettings()

```
public PagedCallSettings.Builder<ListInstancesRequest,ListInstancesResponse,InstanceAdminClient.ListInstancesPagedResponse> listInstancesSettings()
```

Returns the builder for the settings used for calls to listInstances.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.Builder.html)<[ListInstancesRequest](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.ListInstancesRequest),[ListInstancesResponse](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.ListInstancesResponse),[ListInstancesPagedResponse](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.cloud.spanner.admin.instance.v1.InstanceAdminClient.ListInstancesPagedResponse)>`

### setIamPolicySettings()

```
public UnaryCallSettings.Builder<SetIamPolicyRequest,Policy> setIamPolicySettings()
```

Returns the builder for the settings used for calls to setIamPolicy.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<com.google.iam.v1.SetIamPolicyRequest,com.google.iam.v1.Policy>`

### testIamPermissionsSettings()

```
public UnaryCallSettings.Builder<TestIamPermissionsRequest,TestIamPermissionsResponse> testIamPermissionsSettings()
```

Returns the builder for the settings used for calls to testIamPermissions.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<com.google.iam.v1.TestIamPermissionsRequest,com.google.iam.v1.TestIamPermissionsResponse>`

### updateInstanceConfigOperationSettings()

```
public OperationCallSettings.Builder<UpdateInstanceConfigRequest,InstanceConfig,UpdateInstanceConfigMetadata> updateInstanceConfigOperationSettings()
```

Returns the builder for the settings used for calls to updateInstanceConfig.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.Builder.html)<[UpdateInstanceConfigRequest](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.UpdateInstanceConfigRequest),[InstanceConfig](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.InstanceConfig),[UpdateInstanceConfigMetadata](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.UpdateInstanceConfigMetadata)>`

### updateInstanceConfigSettings()

```
public UnaryCallSettings.Builder<UpdateInstanceConfigRequest,Operation> updateInstanceConfigSettings()
```

Returns the builder for the settings used for calls to updateInstanceConfig.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<[UpdateInstanceConfigRequest](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.UpdateInstanceConfigRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateInstanceOperationSettings()

```
public OperationCallSettings.Builder<UpdateInstanceRequest,Instance,UpdateInstanceMetadata> updateInstanceOperationSettings()
```

Returns the builder for the settings used for calls to updateInstance.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.Builder.html)<[UpdateInstanceRequest](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.UpdateInstanceRequest),[Instance](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.Instance),[UpdateInstanceMetadata](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.UpdateInstanceMetadata)>`

### updateInstancePartitionOperationSettings()

```
public OperationCallSettings.Builder<UpdateInstancePartitionRequest,InstancePartition,UpdateInstancePartitionMetadata> updateInstancePartitionOperationSettings()
```

Returns the builder for the settings used for calls to updateInstancePartition.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.Builder.html)<[UpdateInstancePartitionRequest](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.UpdateInstancePartitionRequest),[InstancePartition](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.InstancePartition),[UpdateInstancePartitionMetadata](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.UpdateInstancePartitionMetadata)>`

### updateInstancePartitionSettings()

```
public UnaryCallSettings.Builder<UpdateInstancePartitionRequest,Operation> updateInstancePartitionSettings()
```

Returns the builder for the settings used for calls to updateInstancePartition.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<[UpdateInstancePartitionRequest](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.UpdateInstancePartitionRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateInstanceSettings()

```
public UnaryCallSettings.Builder<UpdateInstanceRequest,Operation> updateInstanceSettings()
```

Returns the builder for the settings used for calls to updateInstance.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<[UpdateInstanceRequest](/java/docs/reference/google-cloud-spanner/6.71.0/com.google.spanner.admin.instance.v1.UpdateInstanceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
