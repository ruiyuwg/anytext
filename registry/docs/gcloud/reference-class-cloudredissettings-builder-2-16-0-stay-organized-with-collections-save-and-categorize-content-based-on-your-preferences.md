-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class CloudRedisSettings.Builder (2.16.0) Stay organized with collections Save and categorize content based on your preferences.

2.90.0 (latest) 2.88.0 2.86.0 2.85.0 2.83.0 2.81.0 2.79.0 2.78.0 2.77.0 2.76.0 2.75.0 2.73.0 2.71.0 2.70.0 2.67.0 2.66.0 2.65.0 2.63.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.52.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.5 2.5.0 2.4.1 2.3.0 2.2.0 2.1.1

```
public static class CloudRedisSettings.Builder extends ClientSettings.Builder<CloudRedisSettings,CloudRedisSettings.Builder>
```

Builder for CloudRedisSettings.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [ClientSettings.Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html) \> CloudRedisSettings.Builder

## Inherited Members

[ClientSettings.Builder.applyToAllUnaryMethods(Iterable<UnaryCallSettings.Builder<?,?>>,ApiFunction<UnaryCallSettings.Builder<?,?>,Void>)](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_applyToAllUnaryMethods_java_lang_Iterable_com_google_api_gax_rpc_UnaryCallSettings_Builder_______com_google_api_core_ApiFunction_com_google_api_gax_rpc_UnaryCallSettings_Builder______java_lang_Void__)

[ClientSettings.Builder.build()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_build__)

[ClientSettings.Builder.getBackgroundExecutorProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_getBackgroundExecutorProvider__)

[ClientSettings.Builder.getClock()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_getClock__)

[ClientSettings.Builder.getCredentialsProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_getCredentialsProvider__)

[ClientSettings.Builder.getEndpoint()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_getEndpoint__)

[ClientSettings.Builder.getExecutorProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_getExecutorProvider__)

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

[ClientSettings.Builder.setHeaderProvider(HeaderProvider)](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_setHeaderProvider_com_google_api_gax_rpc_HeaderProvider_)

[ClientSettings.Builder.setInternalHeaderProvider(HeaderProvider)](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_setInternalHeaderProvider_com_google_api_gax_rpc_HeaderProvider_)

[ClientSettings.Builder.setQuotaProjectId(String)](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_setQuotaProjectId_java_lang_String_)

[ClientSettings.Builder.setTransportChannelProvider(TransportChannelProvider)](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_setTransportChannelProvider_com_google_api_gax_rpc_TransportChannelProvider_)

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

### Builder(CloudRedisSettings settings)

```
protected Builder(CloudRedisSettings settings)
```

**Parameter**

**Name**

**Description**

`settings`

`[CloudRedisSettings](/java/docs/reference/google-cloud-redis/2.16.0/com.google.cloud.redis.v1beta1.CloudRedisSettings)`  

### Builder(CloudRedisStubSettings.Builder stubSettings)

```
protected Builder(CloudRedisStubSettings.Builder stubSettings)
```

**Parameter**

**Name**

**Description**

`stubSettings`

`[CloudRedisStubSettings.Builder](/java/docs/reference/google-cloud-redis/2.16.0/com.google.cloud.redis.v1beta1.stub.CloudRedisStubSettings.Builder)`  

## Methods

### applyToAllUnaryMethods(ApiFunction<UnaryCallSettings.Builder<?,?>,Void> settingsUpdater)

```
public CloudRedisSettings.Builder applyToAllUnaryMethods(ApiFunction<UnaryCallSettings.Builder<?,?>,Void> settingsUpdater)
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

`[CloudRedisSettings.Builder](/java/docs/reference/google-cloud-redis/2.16.0/com.google.cloud.redis.v1beta1.CloudRedisSettings.Builder)`

### build()

```
public CloudRedisSettings build()
```

**Returns**

**Type**

**Description**

`[CloudRedisSettings](/java/docs/reference/google-cloud-redis/2.16.0/com.google.cloud.redis.v1beta1.CloudRedisSettings)`

**Overrides**

[ClientSettings.Builder<SettingsT,B>.build()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.Builder.html#com_google_api_gax_rpc_ClientSettings_Builder_build__)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### createInstanceOperationSettings()

```
public OperationCallSettings.Builder<CreateInstanceRequest,Instance,Any> createInstanceOperationSettings()
```

Returns the builder for the settings used for calls to createInstance.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.Builder.html)<[CreateInstanceRequest](/java/docs/reference/google-cloud-redis/2.16.0/com.google.cloud.redis.v1beta1.CreateInstanceRequest),[Instance](/java/docs/reference/google-cloud-redis/2.16.0/com.google.cloud.redis.v1beta1.Instance),[Any](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Any.html)>`

### createInstanceSettings()

```
public UnaryCallSettings.Builder<CreateInstanceRequest,Operation> createInstanceSettings()
```

Returns the builder for the settings used for calls to createInstance.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<[CreateInstanceRequest](/java/docs/reference/google-cloud-redis/2.16.0/com.google.cloud.redis.v1beta1.CreateInstanceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteInstanceOperationSettings()

```
public OperationCallSettings.Builder<DeleteInstanceRequest,Empty,Any> deleteInstanceOperationSettings()
```

Returns the builder for the settings used for calls to deleteInstance.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.Builder.html)<[DeleteInstanceRequest](/java/docs/reference/google-cloud-redis/2.16.0/com.google.cloud.redis.v1beta1.DeleteInstanceRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[Any](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Any.html)>`

### deleteInstanceSettings()

```
public UnaryCallSettings.Builder<DeleteInstanceRequest,Operation> deleteInstanceSettings()
```

Returns the builder for the settings used for calls to deleteInstance.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<[DeleteInstanceRequest](/java/docs/reference/google-cloud-redis/2.16.0/com.google.cloud.redis.v1beta1.DeleteInstanceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### exportInstanceOperationSettings()

```
public OperationCallSettings.Builder<ExportInstanceRequest,Instance,Any> exportInstanceOperationSettings()
```

Returns the builder for the settings used for calls to exportInstance.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.Builder.html)<[ExportInstanceRequest](/java/docs/reference/google-cloud-redis/2.16.0/com.google.cloud.redis.v1beta1.ExportInstanceRequest),[Instance](/java/docs/reference/google-cloud-redis/2.16.0/com.google.cloud.redis.v1beta1.Instance),[Any](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Any.html)>`

### exportInstanceSettings()

```
public UnaryCallSettings.Builder<ExportInstanceRequest,Operation> exportInstanceSettings()
```

Returns the builder for the settings used for calls to exportInstance.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<[ExportInstanceRequest](/java/docs/reference/google-cloud-redis/2.16.0/com.google.cloud.redis.v1beta1.ExportInstanceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### failoverInstanceOperationSettings()

```
public OperationCallSettings.Builder<FailoverInstanceRequest,Instance,Any> failoverInstanceOperationSettings()
```

Returns the builder for the settings used for calls to failoverInstance.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.Builder.html)<[FailoverInstanceRequest](/java/docs/reference/google-cloud-redis/2.16.0/com.google.cloud.redis.v1beta1.FailoverInstanceRequest),[Instance](/java/docs/reference/google-cloud-redis/2.16.0/com.google.cloud.redis.v1beta1.Instance),[Any](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Any.html)>`

### failoverInstanceSettings()

```
public UnaryCallSettings.Builder<FailoverInstanceRequest,Operation> failoverInstanceSettings()
```

Returns the builder for the settings used for calls to failoverInstance.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<[FailoverInstanceRequest](/java/docs/reference/google-cloud-redis/2.16.0/com.google.cloud.redis.v1beta1.FailoverInstanceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getInstanceAuthStringSettings()

```
public UnaryCallSettings.Builder<GetInstanceAuthStringRequest,InstanceAuthString> getInstanceAuthStringSettings()
```

Returns the builder for the settings used for calls to getInstanceAuthString.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<[GetInstanceAuthStringRequest](/java/docs/reference/google-cloud-redis/2.16.0/com.google.cloud.redis.v1beta1.GetInstanceAuthStringRequest),[InstanceAuthString](/java/docs/reference/google-cloud-redis/2.16.0/com.google.cloud.redis.v1beta1.InstanceAuthString)>`

### getInstanceSettings()

```
public UnaryCallSettings.Builder<GetInstanceRequest,Instance> getInstanceSettings()
```

Returns the builder for the settings used for calls to getInstance.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<[GetInstanceRequest](/java/docs/reference/google-cloud-redis/2.16.0/com.google.cloud.redis.v1beta1.GetInstanceRequest),[Instance](/java/docs/reference/google-cloud-redis/2.16.0/com.google.cloud.redis.v1beta1.Instance)>`

### getStubSettingsBuilder()

```
public CloudRedisStubSettings.Builder getStubSettingsBuilder()
```

**Returns**

**Type**

**Description**

`[CloudRedisStubSettings.Builder](/java/docs/reference/google-cloud-redis/2.16.0/com.google.cloud.redis.v1beta1.stub.CloudRedisStubSettings.Builder)`

### importInstanceOperationSettings()

```
public OperationCallSettings.Builder<ImportInstanceRequest,Instance,Any> importInstanceOperationSettings()
```

Returns the builder for the settings used for calls to importInstance.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.Builder.html)<[ImportInstanceRequest](/java/docs/reference/google-cloud-redis/2.16.0/com.google.cloud.redis.v1beta1.ImportInstanceRequest),[Instance](/java/docs/reference/google-cloud-redis/2.16.0/com.google.cloud.redis.v1beta1.Instance),[Any](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Any.html)>`

### importInstanceSettings()

```
public UnaryCallSettings.Builder<ImportInstanceRequest,Operation> importInstanceSettings()
```

Returns the builder for the settings used for calls to importInstance.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<[ImportInstanceRequest](/java/docs/reference/google-cloud-redis/2.16.0/com.google.cloud.redis.v1beta1.ImportInstanceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### listInstancesSettings()

```
public PagedCallSettings.Builder<ListInstancesRequest,ListInstancesResponse,CloudRedisClient.ListInstancesPagedResponse> listInstancesSettings()
```

Returns the builder for the settings used for calls to listInstances.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.Builder.html)<[ListInstancesRequest](/java/docs/reference/google-cloud-redis/2.16.0/com.google.cloud.redis.v1beta1.ListInstancesRequest),[ListInstancesResponse](/java/docs/reference/google-cloud-redis/2.16.0/com.google.cloud.redis.v1beta1.ListInstancesResponse),[ListInstancesPagedResponse](/java/docs/reference/google-cloud-redis/2.16.0/com.google.cloud.redis.v1beta1.CloudRedisClient.ListInstancesPagedResponse)>`

### rescheduleMaintenanceOperationSettings()

```
public OperationCallSettings.Builder<RescheduleMaintenanceRequest,Instance,Any> rescheduleMaintenanceOperationSettings()
```

Returns the builder for the settings used for calls to rescheduleMaintenance.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.Builder.html)<[RescheduleMaintenanceRequest](/java/docs/reference/google-cloud-redis/2.16.0/com.google.cloud.redis.v1beta1.RescheduleMaintenanceRequest),[Instance](/java/docs/reference/google-cloud-redis/2.16.0/com.google.cloud.redis.v1beta1.Instance),[Any](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Any.html)>`

### rescheduleMaintenanceSettings()

```
public UnaryCallSettings.Builder<RescheduleMaintenanceRequest,Operation> rescheduleMaintenanceSettings()
```

Returns the builder for the settings used for calls to rescheduleMaintenance.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<[RescheduleMaintenanceRequest](/java/docs/reference/google-cloud-redis/2.16.0/com.google.cloud.redis.v1beta1.RescheduleMaintenanceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateInstanceOperationSettings()

```
public OperationCallSettings.Builder<UpdateInstanceRequest,Instance,Any> updateInstanceOperationSettings()
```

Returns the builder for the settings used for calls to updateInstance.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.Builder.html)<[UpdateInstanceRequest](/java/docs/reference/google-cloud-redis/2.16.0/com.google.cloud.redis.v1beta1.UpdateInstanceRequest),[Instance](/java/docs/reference/google-cloud-redis/2.16.0/com.google.cloud.redis.v1beta1.Instance),[Any](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Any.html)>`

### updateInstanceSettings()

```
public UnaryCallSettings.Builder<UpdateInstanceRequest,Operation> updateInstanceSettings()
```

Returns the builder for the settings used for calls to updateInstance.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<[UpdateInstanceRequest](/java/docs/reference/google-cloud-redis/2.16.0/com.google.cloud.redis.v1beta1.UpdateInstanceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### upgradeInstanceOperationSettings()

```
public OperationCallSettings.Builder<UpgradeInstanceRequest,Instance,Any> upgradeInstanceOperationSettings()
```

Returns the builder for the settings used for calls to upgradeInstance.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.Builder.html)<[UpgradeInstanceRequest](/java/docs/reference/google-cloud-redis/2.16.0/com.google.cloud.redis.v1beta1.UpgradeInstanceRequest),[Instance](/java/docs/reference/google-cloud-redis/2.16.0/com.google.cloud.redis.v1beta1.Instance),[Any](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Any.html)>`

### upgradeInstanceSettings()

```
public UnaryCallSettings.Builder<UpgradeInstanceRequest,Operation> upgradeInstanceSettings()
```

Returns the builder for the settings used for calls to upgradeInstance.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.Builder.html)<[UpgradeInstanceRequest](/java/docs/reference/google-cloud-redis/2.16.0/com.google.cloud.redis.v1beta1.UpgradeInstanceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
