-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class NetAppSettings (0.3.0) Stay organized with collections Save and categorize content based on your preferences.

0.66.0 (latest) 0.64.0 0.62.0 0.61.0 0.59.0 0.57.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.49.0 0.47.0 0.46.0 0.43.0 0.42.0 0.41.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.3.0 0.2.0 0.1.0

```
public class NetAppSettings extends ClientSettings<NetAppSettings>
```

Settings class to configure an instance of [NetAppClient](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.NetAppClient).

The default instance has everything set to sensible defaults:

-   The default service address (netapp.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of getStoragePool to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 NetAppSettings.Builder netAppSettingsBuilder = NetAppSettings.newBuilder();
 netAppSettingsBuilder
     .getStoragePoolSettings()
     .setRetrySettings(
         netAppSettingsBuilder
             .getStoragePoolSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 NetAppSettings netAppSettings = netAppSettingsBuilder.build();
 
```
 

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [ClientSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html) \> NetAppSettings

## Inherited Members

[ClientSettings.<B>toBuilder()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings__B_toBuilder__)

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

[ClientSettings.getWatchdogCheckInterval()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings_getWatchdogCheckInterval__)

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

### create(NetAppStubSettings stub)

```
public static final NetAppSettings create(NetAppStubSettings stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[NetAppStubSettings](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.stub.NetAppStubSettings)`  

**Returns**

**Type**

**Description**

`[NetAppSettings](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.NetAppSettings)`

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

Returns a builder for the default gRPC ChannelProvider for this service.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.grpc.InstantiatingGrpcChannelProvider.Builder.html)`

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
public static NetAppSettings.Builder newBuilder()
```

Returns a new gRPC builder for this class.

**Returns**

**Type**

**Description**

`[NetAppSettings.Builder](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.NetAppSettings.Builder)`

### newBuilder(ClientContext clientContext)

```
public static NetAppSettings.Builder newBuilder(ClientContext clientContext)
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

`[NetAppSettings.Builder](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.NetAppSettings.Builder)`

### newHttpJsonBuilder()

```
public static NetAppSettings.Builder newHttpJsonBuilder()
```

Returns a new REST builder for this class.

**Returns**

**Type**

**Description**

`[NetAppSettings.Builder](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.NetAppSettings.Builder)`

## Constructors

### NetAppSettings(NetAppSettings.Builder settingsBuilder)

```
protected NetAppSettings(NetAppSettings.Builder settingsBuilder)
```

**Parameter**

**Name**

**Description**

`settingsBuilder`

`[NetAppSettings.Builder](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.NetAppSettings.Builder)`  

## Methods

### createActiveDirectoryOperationSettings()

```
public OperationCallSettings<CreateActiveDirectoryRequest,ActiveDirectory,OperationMetadata> createActiveDirectoryOperationSettings()
```

Returns the object with the settings used for calls to createActiveDirectory.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[CreateActiveDirectoryRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.CreateActiveDirectoryRequest),[ActiveDirectory](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.ActiveDirectory),[OperationMetadata](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.OperationMetadata)>`

### createActiveDirectorySettings()

```
public UnaryCallSettings<CreateActiveDirectoryRequest,Operation> createActiveDirectorySettings()
```

Returns the object with the settings used for calls to createActiveDirectory.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateActiveDirectoryRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.CreateActiveDirectoryRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createKmsConfigOperationSettings()

```
public OperationCallSettings<CreateKmsConfigRequest,KmsConfig,OperationMetadata> createKmsConfigOperationSettings()
```

Returns the object with the settings used for calls to createKmsConfig.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[CreateKmsConfigRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.CreateKmsConfigRequest),[KmsConfig](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.KmsConfig),[OperationMetadata](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.OperationMetadata)>`

### createKmsConfigSettings()

```
public UnaryCallSettings<CreateKmsConfigRequest,Operation> createKmsConfigSettings()
```

Returns the object with the settings used for calls to createKmsConfig.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateKmsConfigRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.CreateKmsConfigRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createReplicationOperationSettings()

```
public OperationCallSettings<CreateReplicationRequest,Replication,OperationMetadata> createReplicationOperationSettings()
```

Returns the object with the settings used for calls to createReplication.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[CreateReplicationRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.CreateReplicationRequest),[Replication](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.Replication),[OperationMetadata](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.OperationMetadata)>`

### createReplicationSettings()

```
public UnaryCallSettings<CreateReplicationRequest,Operation> createReplicationSettings()
```

Returns the object with the settings used for calls to createReplication.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateReplicationRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.CreateReplicationRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createSnapshotOperationSettings()

```
public OperationCallSettings<CreateSnapshotRequest,Snapshot,OperationMetadata> createSnapshotOperationSettings()
```

Returns the object with the settings used for calls to createSnapshot.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[CreateSnapshotRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.CreateSnapshotRequest),[Snapshot](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.Snapshot),[OperationMetadata](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.OperationMetadata)>`

### createSnapshotSettings()

```
public UnaryCallSettings<CreateSnapshotRequest,Operation> createSnapshotSettings()
```

Returns the object with the settings used for calls to createSnapshot.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateSnapshotRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.CreateSnapshotRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createStoragePoolOperationSettings()

```
public OperationCallSettings<CreateStoragePoolRequest,StoragePool,OperationMetadata> createStoragePoolOperationSettings()
```

Returns the object with the settings used for calls to createStoragePool.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[CreateStoragePoolRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.CreateStoragePoolRequest),[StoragePool](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.StoragePool),[OperationMetadata](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.OperationMetadata)>`

### createStoragePoolSettings()

```
public UnaryCallSettings<CreateStoragePoolRequest,Operation> createStoragePoolSettings()
```

Returns the object with the settings used for calls to createStoragePool.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateStoragePoolRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.CreateStoragePoolRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createVolumeOperationSettings()

```
public OperationCallSettings<CreateVolumeRequest,Volume,OperationMetadata> createVolumeOperationSettings()
```

Returns the object with the settings used for calls to createVolume.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[CreateVolumeRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.CreateVolumeRequest),[Volume](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.Volume),[OperationMetadata](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.OperationMetadata)>`

### createVolumeSettings()

```
public UnaryCallSettings<CreateVolumeRequest,Operation> createVolumeSettings()
```

Returns the object with the settings used for calls to createVolume.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateVolumeRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.CreateVolumeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteActiveDirectoryOperationSettings()

```
public OperationCallSettings<DeleteActiveDirectoryRequest,Empty,OperationMetadata> deleteActiveDirectoryOperationSettings()
```

Returns the object with the settings used for calls to deleteActiveDirectory.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[DeleteActiveDirectoryRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.DeleteActiveDirectoryRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.OperationMetadata)>`

### deleteActiveDirectorySettings()

```
public UnaryCallSettings<DeleteActiveDirectoryRequest,Operation> deleteActiveDirectorySettings()
```

Returns the object with the settings used for calls to deleteActiveDirectory.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteActiveDirectoryRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.DeleteActiveDirectoryRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteKmsConfigOperationSettings()

```
public OperationCallSettings<DeleteKmsConfigRequest,Empty,OperationMetadata> deleteKmsConfigOperationSettings()
```

Returns the object with the settings used for calls to deleteKmsConfig.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[DeleteKmsConfigRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.DeleteKmsConfigRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.OperationMetadata)>`

### deleteKmsConfigSettings()

```
public UnaryCallSettings<DeleteKmsConfigRequest,Operation> deleteKmsConfigSettings()
```

Returns the object with the settings used for calls to deleteKmsConfig.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteKmsConfigRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.DeleteKmsConfigRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteReplicationOperationSettings()

```
public OperationCallSettings<DeleteReplicationRequest,Empty,OperationMetadata> deleteReplicationOperationSettings()
```

Returns the object with the settings used for calls to deleteReplication.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[DeleteReplicationRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.DeleteReplicationRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.OperationMetadata)>`

### deleteReplicationSettings()

```
public UnaryCallSettings<DeleteReplicationRequest,Operation> deleteReplicationSettings()
```

Returns the object with the settings used for calls to deleteReplication.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteReplicationRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.DeleteReplicationRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteSnapshotOperationSettings()

```
public OperationCallSettings<DeleteSnapshotRequest,Empty,OperationMetadata> deleteSnapshotOperationSettings()
```

Returns the object with the settings used for calls to deleteSnapshot.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[DeleteSnapshotRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.DeleteSnapshotRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.OperationMetadata)>`

### deleteSnapshotSettings()

```
public UnaryCallSettings<DeleteSnapshotRequest,Operation> deleteSnapshotSettings()
```

Returns the object with the settings used for calls to deleteSnapshot.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteSnapshotRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.DeleteSnapshotRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteStoragePoolOperationSettings()

```
public OperationCallSettings<DeleteStoragePoolRequest,Empty,OperationMetadata> deleteStoragePoolOperationSettings()
```

Returns the object with the settings used for calls to deleteStoragePool.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[DeleteStoragePoolRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.DeleteStoragePoolRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.OperationMetadata)>`

### deleteStoragePoolSettings()

```
public UnaryCallSettings<DeleteStoragePoolRequest,Operation> deleteStoragePoolSettings()
```

Returns the object with the settings used for calls to deleteStoragePool.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteStoragePoolRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.DeleteStoragePoolRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteVolumeOperationSettings()

```
public OperationCallSettings<DeleteVolumeRequest,Empty,OperationMetadata> deleteVolumeOperationSettings()
```

Returns the object with the settings used for calls to deleteVolume.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[DeleteVolumeRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.DeleteVolumeRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.OperationMetadata)>`

### deleteVolumeSettings()

```
public UnaryCallSettings<DeleteVolumeRequest,Operation> deleteVolumeSettings()
```

Returns the object with the settings used for calls to deleteVolume.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteVolumeRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.DeleteVolumeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### encryptVolumesOperationSettings()

```
public OperationCallSettings<EncryptVolumesRequest,KmsConfig,OperationMetadata> encryptVolumesOperationSettings()
```

Returns the object with the settings used for calls to encryptVolumes.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[EncryptVolumesRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.EncryptVolumesRequest),[KmsConfig](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.KmsConfig),[OperationMetadata](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.OperationMetadata)>`

### encryptVolumesSettings()

```
public UnaryCallSettings<EncryptVolumesRequest,Operation> encryptVolumesSettings()
```

Returns the object with the settings used for calls to encryptVolumes.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[EncryptVolumesRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.EncryptVolumesRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getActiveDirectorySettings()

```
public UnaryCallSettings<GetActiveDirectoryRequest,ActiveDirectory> getActiveDirectorySettings()
```

Returns the object with the settings used for calls to getActiveDirectory.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetActiveDirectoryRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.GetActiveDirectoryRequest),[ActiveDirectory](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.ActiveDirectory)>`

### getKmsConfigSettings()

```
public UnaryCallSettings<GetKmsConfigRequest,KmsConfig> getKmsConfigSettings()
```

Returns the object with the settings used for calls to getKmsConfig.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetKmsConfigRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.GetKmsConfigRequest),[KmsConfig](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.KmsConfig)>`

### getLocationSettings()

```
public UnaryCallSettings<GetLocationRequest,Location> getLocationSettings()
```

Returns the object with the settings used for calls to getLocation.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<com.google.cloud.location.GetLocationRequest,com.google.cloud.location.Location>`

### getReplicationSettings()

```
public UnaryCallSettings<GetReplicationRequest,Replication> getReplicationSettings()
```

Returns the object with the settings used for calls to getReplication.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetReplicationRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.GetReplicationRequest),[Replication](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.Replication)>`

### getSnapshotSettings()

```
public UnaryCallSettings<GetSnapshotRequest,Snapshot> getSnapshotSettings()
```

Returns the object with the settings used for calls to getSnapshot.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetSnapshotRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.GetSnapshotRequest),[Snapshot](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.Snapshot)>`

### getStoragePoolSettings()

```
public UnaryCallSettings<GetStoragePoolRequest,StoragePool> getStoragePoolSettings()
```

Returns the object with the settings used for calls to getStoragePool.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetStoragePoolRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.GetStoragePoolRequest),[StoragePool](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.StoragePool)>`

### getVolumeSettings()

```
public UnaryCallSettings<GetVolumeRequest,Volume> getVolumeSettings()
```

Returns the object with the settings used for calls to getVolume.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetVolumeRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.GetVolumeRequest),[Volume](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.Volume)>`

### listActiveDirectoriesSettings()

```
public PagedCallSettings<ListActiveDirectoriesRequest,ListActiveDirectoriesResponse,NetAppClient.ListActiveDirectoriesPagedResponse> listActiveDirectoriesSettings()
```

Returns the object with the settings used for calls to listActiveDirectories.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListActiveDirectoriesRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.ListActiveDirectoriesRequest),[ListActiveDirectoriesResponse](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.ListActiveDirectoriesResponse),[ListActiveDirectoriesPagedResponse](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.NetAppClient.ListActiveDirectoriesPagedResponse)>`

### listKmsConfigsSettings()

```
public PagedCallSettings<ListKmsConfigsRequest,ListKmsConfigsResponse,NetAppClient.ListKmsConfigsPagedResponse> listKmsConfigsSettings()
```

Returns the object with the settings used for calls to listKmsConfigs.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListKmsConfigsRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.ListKmsConfigsRequest),[ListKmsConfigsResponse](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.ListKmsConfigsResponse),[ListKmsConfigsPagedResponse](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.NetAppClient.ListKmsConfigsPagedResponse)>`

### listLocationsSettings()

```
public PagedCallSettings<ListLocationsRequest,ListLocationsResponse,NetAppClient.ListLocationsPagedResponse> listLocationsSettings()
```

Returns the object with the settings used for calls to listLocations.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<com.google.cloud.location.ListLocationsRequest,com.google.cloud.location.ListLocationsResponse,[ListLocationsPagedResponse](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.NetAppClient.ListLocationsPagedResponse)>`

### listReplicationsSettings()

```
public PagedCallSettings<ListReplicationsRequest,ListReplicationsResponse,NetAppClient.ListReplicationsPagedResponse> listReplicationsSettings()
```

Returns the object with the settings used for calls to listReplications.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListReplicationsRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.ListReplicationsRequest),[ListReplicationsResponse](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.ListReplicationsResponse),[ListReplicationsPagedResponse](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.NetAppClient.ListReplicationsPagedResponse)>`

### listSnapshotsSettings()

```
public PagedCallSettings<ListSnapshotsRequest,ListSnapshotsResponse,NetAppClient.ListSnapshotsPagedResponse> listSnapshotsSettings()
```

Returns the object with the settings used for calls to listSnapshots.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListSnapshotsRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.ListSnapshotsRequest),[ListSnapshotsResponse](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.ListSnapshotsResponse),[ListSnapshotsPagedResponse](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.NetAppClient.ListSnapshotsPagedResponse)>`

### listStoragePoolsSettings()

```
public PagedCallSettings<ListStoragePoolsRequest,ListStoragePoolsResponse,NetAppClient.ListStoragePoolsPagedResponse> listStoragePoolsSettings()
```

Returns the object with the settings used for calls to listStoragePools.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListStoragePoolsRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.ListStoragePoolsRequest),[ListStoragePoolsResponse](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.ListStoragePoolsResponse),[ListStoragePoolsPagedResponse](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.NetAppClient.ListStoragePoolsPagedResponse)>`

### listVolumesSettings()

```
public PagedCallSettings<ListVolumesRequest,ListVolumesResponse,NetAppClient.ListVolumesPagedResponse> listVolumesSettings()
```

Returns the object with the settings used for calls to listVolumes.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListVolumesRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.ListVolumesRequest),[ListVolumesResponse](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.ListVolumesResponse),[ListVolumesPagedResponse](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.NetAppClient.ListVolumesPagedResponse)>`

### resumeReplicationOperationSettings()

```
public OperationCallSettings<ResumeReplicationRequest,Replication,OperationMetadata> resumeReplicationOperationSettings()
```

Returns the object with the settings used for calls to resumeReplication.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[ResumeReplicationRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.ResumeReplicationRequest),[Replication](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.Replication),[OperationMetadata](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.OperationMetadata)>`

### resumeReplicationSettings()

```
public UnaryCallSettings<ResumeReplicationRequest,Operation> resumeReplicationSettings()
```

Returns the object with the settings used for calls to resumeReplication.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[ResumeReplicationRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.ResumeReplicationRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### reverseReplicationDirectionOperationSettings()

```
public OperationCallSettings<ReverseReplicationDirectionRequest,Replication,OperationMetadata> reverseReplicationDirectionOperationSettings()
```

Returns the object with the settings used for calls to reverseReplicationDirection.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[ReverseReplicationDirectionRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.ReverseReplicationDirectionRequest),[Replication](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.Replication),[OperationMetadata](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.OperationMetadata)>`

### reverseReplicationDirectionSettings()

```
public UnaryCallSettings<ReverseReplicationDirectionRequest,Operation> reverseReplicationDirectionSettings()
```

Returns the object with the settings used for calls to reverseReplicationDirection.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[ReverseReplicationDirectionRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.ReverseReplicationDirectionRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### revertVolumeOperationSettings()

```
public OperationCallSettings<RevertVolumeRequest,Volume,OperationMetadata> revertVolumeOperationSettings()
```

Returns the object with the settings used for calls to revertVolume.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[RevertVolumeRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.RevertVolumeRequest),[Volume](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.Volume),[OperationMetadata](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.OperationMetadata)>`

### revertVolumeSettings()

```
public UnaryCallSettings<RevertVolumeRequest,Operation> revertVolumeSettings()
```

Returns the object with the settings used for calls to revertVolume.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[RevertVolumeRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.RevertVolumeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### stopReplicationOperationSettings()

```
public OperationCallSettings<StopReplicationRequest,Replication,OperationMetadata> stopReplicationOperationSettings()
```

Returns the object with the settings used for calls to stopReplication.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[StopReplicationRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.StopReplicationRequest),[Replication](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.Replication),[OperationMetadata](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.OperationMetadata)>`

### stopReplicationSettings()

```
public UnaryCallSettings<StopReplicationRequest,Operation> stopReplicationSettings()
```

Returns the object with the settings used for calls to stopReplication.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[StopReplicationRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.StopReplicationRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### toBuilder()

```
public NetAppSettings.Builder toBuilder()
```

Returns a builder containing all the values of this settings class.

**Returns**

**Type**

**Description**

`[NetAppSettings.Builder](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.NetAppSettings.Builder)`

**Overrides**

[ClientSettings<SettingsT>.<B>toBuilder()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientSettings.html#com_google_api_gax_rpc_ClientSettings__B_toBuilder__)

### updateActiveDirectoryOperationSettings()

```
public OperationCallSettings<UpdateActiveDirectoryRequest,ActiveDirectory,OperationMetadata> updateActiveDirectoryOperationSettings()
```

Returns the object with the settings used for calls to updateActiveDirectory.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[UpdateActiveDirectoryRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.UpdateActiveDirectoryRequest),[ActiveDirectory](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.ActiveDirectory),[OperationMetadata](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.OperationMetadata)>`

### updateActiveDirectorySettings()

```
public UnaryCallSettings<UpdateActiveDirectoryRequest,Operation> updateActiveDirectorySettings()
```

Returns the object with the settings used for calls to updateActiveDirectory.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateActiveDirectoryRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.UpdateActiveDirectoryRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateKmsConfigOperationSettings()

```
public OperationCallSettings<UpdateKmsConfigRequest,KmsConfig,OperationMetadata> updateKmsConfigOperationSettings()
```

Returns the object with the settings used for calls to updateKmsConfig.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[UpdateKmsConfigRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.UpdateKmsConfigRequest),[KmsConfig](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.KmsConfig),[OperationMetadata](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.OperationMetadata)>`

### updateKmsConfigSettings()

```
public UnaryCallSettings<UpdateKmsConfigRequest,Operation> updateKmsConfigSettings()
```

Returns the object with the settings used for calls to updateKmsConfig.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateKmsConfigRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.UpdateKmsConfigRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateReplicationOperationSettings()

```
public OperationCallSettings<UpdateReplicationRequest,Replication,OperationMetadata> updateReplicationOperationSettings()
```

Returns the object with the settings used for calls to updateReplication.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[UpdateReplicationRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.UpdateReplicationRequest),[Replication](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.Replication),[OperationMetadata](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.OperationMetadata)>`

### updateReplicationSettings()

```
public UnaryCallSettings<UpdateReplicationRequest,Operation> updateReplicationSettings()
```

Returns the object with the settings used for calls to updateReplication.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateReplicationRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.UpdateReplicationRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateSnapshotOperationSettings()

```
public OperationCallSettings<UpdateSnapshotRequest,Snapshot,OperationMetadata> updateSnapshotOperationSettings()
```

Returns the object with the settings used for calls to updateSnapshot.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[UpdateSnapshotRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.UpdateSnapshotRequest),[Snapshot](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.Snapshot),[OperationMetadata](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.OperationMetadata)>`

### updateSnapshotSettings()

```
public UnaryCallSettings<UpdateSnapshotRequest,Operation> updateSnapshotSettings()
```

Returns the object with the settings used for calls to updateSnapshot.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateSnapshotRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.UpdateSnapshotRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateStoragePoolOperationSettings()

```
public OperationCallSettings<UpdateStoragePoolRequest,StoragePool,OperationMetadata> updateStoragePoolOperationSettings()
```

Returns the object with the settings used for calls to updateStoragePool.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[UpdateStoragePoolRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.UpdateStoragePoolRequest),[StoragePool](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.StoragePool),[OperationMetadata](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.OperationMetadata)>`

### updateStoragePoolSettings()

```
public UnaryCallSettings<UpdateStoragePoolRequest,Operation> updateStoragePoolSettings()
```

Returns the object with the settings used for calls to updateStoragePool.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateStoragePoolRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.UpdateStoragePoolRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateVolumeOperationSettings()

```
public OperationCallSettings<UpdateVolumeRequest,Volume,OperationMetadata> updateVolumeOperationSettings()
```

Returns the object with the settings used for calls to updateVolume.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[UpdateVolumeRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.UpdateVolumeRequest),[Volume](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.Volume),[OperationMetadata](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.OperationMetadata)>`

### updateVolumeSettings()

```
public UnaryCallSettings<UpdateVolumeRequest,Operation> updateVolumeSettings()
```

Returns the object with the settings used for calls to updateVolume.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateVolumeRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.UpdateVolumeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### verifyKmsConfigSettings()

```
public UnaryCallSettings<VerifyKmsConfigRequest,VerifyKmsConfigResponse> verifyKmsConfigSettings()
```

Returns the object with the settings used for calls to verifyKmsConfig.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[VerifyKmsConfigRequest](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.VerifyKmsConfigRequest),[VerifyKmsConfigResponse](/java/docs/reference/google-cloud-netapp/0.3.0/com.google.cloud.netapp.v1.VerifyKmsConfigResponse)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
