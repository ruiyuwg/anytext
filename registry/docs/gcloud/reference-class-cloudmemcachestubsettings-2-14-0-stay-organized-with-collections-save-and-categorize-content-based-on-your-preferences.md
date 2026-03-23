-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class CloudMemcacheStubSettings (2.14.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.6 2.2.1 2.1.11

```
public class CloudMemcacheStubSettings extends StubSettings<CloudMemcacheStubSettings>
```

Settings class to configure an instance of [CloudMemcacheStub](/java/docs/reference/google-cloud-memcache/2.14.0/com.google.cloud.memcache.v1.stub.CloudMemcacheStub).

The default instance has everything set to sensible defaults:

-   The default service address (memcache.googleapis.com) and default port (443) are used.
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
 CloudMemcacheStubSettings.Builder cloudMemcacheSettingsBuilder =
     CloudMemcacheStubSettings.newBuilder();
 cloudMemcacheSettingsBuilder
     .getInstanceSettings()
     .setRetrySettings(
         cloudMemcacheSettingsBuilder
             .getInstanceSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 CloudMemcacheStubSettings cloudMemcacheSettings = cloudMemcacheSettingsBuilder.build();
 
```
 

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [StubSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html) \> CloudMemcacheStubSettings

## Inherited Members

[StubSettings.getBackgroundExecutorProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getBackgroundExecutorProvider__)

[StubSettings.getClock()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getClock__)

[StubSettings.getCredentialsProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getCredentialsProvider__)

[StubSettings.getEndpoint()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getEndpoint__)

[StubSettings.getExecutorProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getExecutorProvider__)

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
public static CloudMemcacheStubSettings.Builder newBuilder()
```

Returns a new gRPC builder for this class.

**Returns**

**Type**

**Description**

`[CloudMemcacheStubSettings.Builder](/java/docs/reference/google-cloud-memcache/2.14.0/com.google.cloud.memcache.v1.stub.CloudMemcacheStubSettings.Builder)`

### newBuilder(ClientContext clientContext)

```
public static CloudMemcacheStubSettings.Builder newBuilder(ClientContext clientContext)
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

`[CloudMemcacheStubSettings.Builder](/java/docs/reference/google-cloud-memcache/2.14.0/com.google.cloud.memcache.v1.stub.CloudMemcacheStubSettings.Builder)`

### newHttpJsonBuilder()

```
public static CloudMemcacheStubSettings.Builder newHttpJsonBuilder()
```

Returns a new REST builder for this class.

**Returns**

**Type**

**Description**

`[CloudMemcacheStubSettings.Builder](/java/docs/reference/google-cloud-memcache/2.14.0/com.google.cloud.memcache.v1.stub.CloudMemcacheStubSettings.Builder)`

## Constructors

### CloudMemcacheStubSettings(CloudMemcacheStubSettings.Builder settingsBuilder)

```
protected CloudMemcacheStubSettings(CloudMemcacheStubSettings.Builder settingsBuilder)
```

**Parameter**

**Name**

**Description**

`settingsBuilder`

`[CloudMemcacheStubSettings.Builder](/java/docs/reference/google-cloud-memcache/2.14.0/com.google.cloud.memcache.v1.stub.CloudMemcacheStubSettings.Builder)`  

## Methods

### applyParametersOperationSettings()

```
public OperationCallSettings<ApplyParametersRequest,Instance,OperationMetadata> applyParametersOperationSettings()
```

Returns the object with the settings used for calls to applyParameters.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[ApplyParametersRequest](/java/docs/reference/google-cloud-memcache/2.14.0/com.google.cloud.memcache.v1.ApplyParametersRequest),[Instance](/java/docs/reference/google-cloud-memcache/2.14.0/com.google.cloud.memcache.v1.Instance),[OperationMetadata](/java/docs/reference/google-cloud-memcache/2.14.0/com.google.cloud.memcache.v1.OperationMetadata)>`

### applyParametersSettings()

```
public UnaryCallSettings<ApplyParametersRequest,Operation> applyParametersSettings()
```

Returns the object with the settings used for calls to applyParameters.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[ApplyParametersRequest](/java/docs/reference/google-cloud-memcache/2.14.0/com.google.cloud.memcache.v1.ApplyParametersRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createInstanceOperationSettings()

```
public OperationCallSettings<CreateInstanceRequest,Instance,OperationMetadata> createInstanceOperationSettings()
```

Returns the object with the settings used for calls to createInstance.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[CreateInstanceRequest](/java/docs/reference/google-cloud-memcache/2.14.0/com.google.cloud.memcache.v1.CreateInstanceRequest),[Instance](/java/docs/reference/google-cloud-memcache/2.14.0/com.google.cloud.memcache.v1.Instance),[OperationMetadata](/java/docs/reference/google-cloud-memcache/2.14.0/com.google.cloud.memcache.v1.OperationMetadata)>`

### createInstanceSettings()

```
public UnaryCallSettings<CreateInstanceRequest,Operation> createInstanceSettings()
```

Returns the object with the settings used for calls to createInstance.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateInstanceRequest](/java/docs/reference/google-cloud-memcache/2.14.0/com.google.cloud.memcache.v1.CreateInstanceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createStub()

```
public CloudMemcacheStub createStub()
```

**Returns**

**Type**

**Description**

`[CloudMemcacheStub](/java/docs/reference/google-cloud-memcache/2.14.0/com.google.cloud.memcache.v1.stub.CloudMemcacheStub)`

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

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[DeleteInstanceRequest](/java/docs/reference/google-cloud-memcache/2.14.0/com.google.cloud.memcache.v1.DeleteInstanceRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-memcache/2.14.0/com.google.cloud.memcache.v1.OperationMetadata)>`

### deleteInstanceSettings()

```
public UnaryCallSettings<DeleteInstanceRequest,Operation> deleteInstanceSettings()
```

Returns the object with the settings used for calls to deleteInstance.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteInstanceRequest](/java/docs/reference/google-cloud-memcache/2.14.0/com.google.cloud.memcache.v1.DeleteInstanceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getInstanceSettings()

```
public UnaryCallSettings<GetInstanceRequest,Instance> getInstanceSettings()
```

Returns the object with the settings used for calls to getInstance.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetInstanceRequest](/java/docs/reference/google-cloud-memcache/2.14.0/com.google.cloud.memcache.v1.GetInstanceRequest),[Instance](/java/docs/reference/google-cloud-memcache/2.14.0/com.google.cloud.memcache.v1.Instance)>`

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
public PagedCallSettings<ListInstancesRequest,ListInstancesResponse,CloudMemcacheClient.ListInstancesPagedResponse> listInstancesSettings()
```

Returns the object with the settings used for calls to listInstances.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListInstancesRequest](/java/docs/reference/google-cloud-memcache/2.14.0/com.google.cloud.memcache.v1.ListInstancesRequest),[ListInstancesResponse](/java/docs/reference/google-cloud-memcache/2.14.0/com.google.cloud.memcache.v1.ListInstancesResponse),[ListInstancesPagedResponse](/java/docs/reference/google-cloud-memcache/2.14.0/com.google.cloud.memcache.v1.CloudMemcacheClient.ListInstancesPagedResponse)>`

### listLocationsSettings()

```
public PagedCallSettings<ListLocationsRequest,ListLocationsResponse,CloudMemcacheClient.ListLocationsPagedResponse> listLocationsSettings()
```

Returns the object with the settings used for calls to listLocations.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<com.google.cloud.location.ListLocationsRequest,com.google.cloud.location.ListLocationsResponse,[ListLocationsPagedResponse](/java/docs/reference/google-cloud-memcache/2.14.0/com.google.cloud.memcache.v1.CloudMemcacheClient.ListLocationsPagedResponse)>`

### rescheduleMaintenanceOperationSettings()

```
public OperationCallSettings<RescheduleMaintenanceRequest,Instance,OperationMetadata> rescheduleMaintenanceOperationSettings()
```

Returns the object with the settings used for calls to rescheduleMaintenance.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[RescheduleMaintenanceRequest](/java/docs/reference/google-cloud-memcache/2.14.0/com.google.cloud.memcache.v1.RescheduleMaintenanceRequest),[Instance](/java/docs/reference/google-cloud-memcache/2.14.0/com.google.cloud.memcache.v1.Instance),[OperationMetadata](/java/docs/reference/google-cloud-memcache/2.14.0/com.google.cloud.memcache.v1.OperationMetadata)>`

### rescheduleMaintenanceSettings()

```
public UnaryCallSettings<RescheduleMaintenanceRequest,Operation> rescheduleMaintenanceSettings()
```

Returns the object with the settings used for calls to rescheduleMaintenance.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[RescheduleMaintenanceRequest](/java/docs/reference/google-cloud-memcache/2.14.0/com.google.cloud.memcache.v1.RescheduleMaintenanceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### toBuilder()

```
public CloudMemcacheStubSettings.Builder toBuilder()
```

Returns a builder containing all the values of this settings class.

**Returns**

**Type**

**Description**

`[CloudMemcacheStubSettings.Builder](/java/docs/reference/google-cloud-memcache/2.14.0/com.google.cloud.memcache.v1.stub.CloudMemcacheStubSettings.Builder)`

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

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[UpdateInstanceRequest](/java/docs/reference/google-cloud-memcache/2.14.0/com.google.cloud.memcache.v1.UpdateInstanceRequest),[Instance](/java/docs/reference/google-cloud-memcache/2.14.0/com.google.cloud.memcache.v1.Instance),[OperationMetadata](/java/docs/reference/google-cloud-memcache/2.14.0/com.google.cloud.memcache.v1.OperationMetadata)>`

### updateInstanceSettings()

```
public UnaryCallSettings<UpdateInstanceRequest,Operation> updateInstanceSettings()
```

Returns the object with the settings used for calls to updateInstance.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateInstanceRequest](/java/docs/reference/google-cloud-memcache/2.14.0/com.google.cloud.memcache.v1.UpdateInstanceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateParametersOperationSettings()

```
public OperationCallSettings<UpdateParametersRequest,Instance,OperationMetadata> updateParametersOperationSettings()
```

Returns the object with the settings used for calls to updateParameters.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[UpdateParametersRequest](/java/docs/reference/google-cloud-memcache/2.14.0/com.google.cloud.memcache.v1.UpdateParametersRequest),[Instance](/java/docs/reference/google-cloud-memcache/2.14.0/com.google.cloud.memcache.v1.Instance),[OperationMetadata](/java/docs/reference/google-cloud-memcache/2.14.0/com.google.cloud.memcache.v1.OperationMetadata)>`

### updateParametersSettings()

```
public UnaryCallSettings<UpdateParametersRequest,Operation> updateParametersSettings()
```

Returns the object with the settings used for calls to updateParameters.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateParametersRequest](/java/docs/reference/google-cloud-memcache/2.14.0/com.google.cloud.memcache.v1.UpdateParametersRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
