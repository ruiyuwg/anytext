-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class TpuStubSettings (2.36.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.2.6

```
public class TpuStubSettings extends StubSettings<TpuStubSettings>
```

Settings class to configure an instance of [TpuStub](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.stub.TpuStub).

The default instance has everything set to sensible defaults:

-   The default service address (tpu.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of getNode to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 TpuStubSettings.Builder tpuSettingsBuilder = TpuStubSettings.newBuilder();
 tpuSettingsBuilder
     .getNodeSettings()
     .setRetrySettings(
         tpuSettingsBuilder
             .getNodeSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 TpuStubSettings tpuSettings = tpuSettingsBuilder.build();
 
```
 

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [StubSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html) \> TpuStubSettings

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

**Beta**

_The surface for customizing headers is not stable yet and may change in the future._

This feature is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the launch stage descriptions.

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
public static TpuStubSettings.Builder newBuilder()
```

Returns a new builder for this class.

**Returns**

**Type**

**Description**

`[TpuStubSettings.Builder](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.stub.TpuStubSettings.Builder)`

### newBuilder(ClientContext clientContext)

```
public static TpuStubSettings.Builder newBuilder(ClientContext clientContext)
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

`[TpuStubSettings.Builder](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.stub.TpuStubSettings.Builder)`

## Constructors

### TpuStubSettings(TpuStubSettings.Builder settingsBuilder)

```
protected TpuStubSettings(TpuStubSettings.Builder settingsBuilder)
```

**Parameter**

**Name**

**Description**

`settingsBuilder`

`[TpuStubSettings.Builder](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.stub.TpuStubSettings.Builder)`  

## Methods

### createNodeOperationSettings()

```
public OperationCallSettings<CreateNodeRequest,Node,OperationMetadata> createNodeOperationSettings()
```

Returns the object with the settings used for calls to createNode.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[CreateNodeRequest](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.CreateNodeRequest),[Node](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.Node),[OperationMetadata](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.OperationMetadata)>`

### createNodeSettings()

```
public UnaryCallSettings<CreateNodeRequest,Operation> createNodeSettings()
```

Returns the object with the settings used for calls to createNode.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateNodeRequest](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.CreateNodeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createStub()

```
public TpuStub createStub()
```

**Returns**

**Type**

**Description**

`[TpuStub](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.stub.TpuStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### deleteNodeOperationSettings()

```
public OperationCallSettings<DeleteNodeRequest,Node,OperationMetadata> deleteNodeOperationSettings()
```

Returns the object with the settings used for calls to deleteNode.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[DeleteNodeRequest](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.DeleteNodeRequest),[Node](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.Node),[OperationMetadata](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.OperationMetadata)>`

### deleteNodeSettings()

```
public UnaryCallSettings<DeleteNodeRequest,Operation> deleteNodeSettings()
```

Returns the object with the settings used for calls to deleteNode.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteNodeRequest](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.DeleteNodeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getAcceleratorTypeSettings()

```
public UnaryCallSettings<GetAcceleratorTypeRequest,AcceleratorType> getAcceleratorTypeSettings()
```

Returns the object with the settings used for calls to getAcceleratorType.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetAcceleratorTypeRequest](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.GetAcceleratorTypeRequest),[AcceleratorType](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.AcceleratorType)>`

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

### getLocationSettings()

```
public UnaryCallSettings<GetLocationRequest,Location> getLocationSettings()
```

Returns the object with the settings used for calls to getLocation.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<com.google.cloud.location.GetLocationRequest,com.google.cloud.location.Location>`

### getNodeSettings()

```
public UnaryCallSettings<GetNodeRequest,Node> getNodeSettings()
```

Returns the object with the settings used for calls to getNode.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetNodeRequest](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.GetNodeRequest),[Node](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.Node)>`

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

### getTensorFlowVersionSettings()

```
public UnaryCallSettings<GetTensorFlowVersionRequest,TensorFlowVersion> getTensorFlowVersionSettings()
```

Returns the object with the settings used for calls to getTensorFlowVersion.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetTensorFlowVersionRequest](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.GetTensorFlowVersionRequest),[TensorFlowVersion](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.TensorFlowVersion)>`

### listAcceleratorTypesSettings()

```
public PagedCallSettings<ListAcceleratorTypesRequest,ListAcceleratorTypesResponse,TpuClient.ListAcceleratorTypesPagedResponse> listAcceleratorTypesSettings()
```

Returns the object with the settings used for calls to listAcceleratorTypes.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListAcceleratorTypesRequest](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.ListAcceleratorTypesRequest),[ListAcceleratorTypesResponse](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.ListAcceleratorTypesResponse),[ListAcceleratorTypesPagedResponse](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.TpuClient.ListAcceleratorTypesPagedResponse)>`

### listLocationsSettings()

```
public PagedCallSettings<ListLocationsRequest,ListLocationsResponse,TpuClient.ListLocationsPagedResponse> listLocationsSettings()
```

Returns the object with the settings used for calls to listLocations.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<com.google.cloud.location.ListLocationsRequest,com.google.cloud.location.ListLocationsResponse,[ListLocationsPagedResponse](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.TpuClient.ListLocationsPagedResponse)>`

### listNodesSettings()

```
public PagedCallSettings<ListNodesRequest,ListNodesResponse,TpuClient.ListNodesPagedResponse> listNodesSettings()
```

Returns the object with the settings used for calls to listNodes.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListNodesRequest](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.ListNodesRequest),[ListNodesResponse](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.ListNodesResponse),[ListNodesPagedResponse](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.TpuClient.ListNodesPagedResponse)>`

### listTensorFlowVersionsSettings()

```
public PagedCallSettings<ListTensorFlowVersionsRequest,ListTensorFlowVersionsResponse,TpuClient.ListTensorFlowVersionsPagedResponse> listTensorFlowVersionsSettings()
```

Returns the object with the settings used for calls to listTensorFlowVersions.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListTensorFlowVersionsRequest](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.ListTensorFlowVersionsRequest),[ListTensorFlowVersionsResponse](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.ListTensorFlowVersionsResponse),[ListTensorFlowVersionsPagedResponse](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.TpuClient.ListTensorFlowVersionsPagedResponse)>`

### reimageNodeOperationSettings()

```
public OperationCallSettings<ReimageNodeRequest,Node,OperationMetadata> reimageNodeOperationSettings()
```

Returns the object with the settings used for calls to reimageNode.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[ReimageNodeRequest](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.ReimageNodeRequest),[Node](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.Node),[OperationMetadata](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.OperationMetadata)>`

### reimageNodeSettings()

```
public UnaryCallSettings<ReimageNodeRequest,Operation> reimageNodeSettings()
```

Returns the object with the settings used for calls to reimageNode.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[ReimageNodeRequest](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.ReimageNodeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### startNodeOperationSettings()

```
public OperationCallSettings<StartNodeRequest,Node,OperationMetadata> startNodeOperationSettings()
```

Returns the object with the settings used for calls to startNode.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[StartNodeRequest](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.StartNodeRequest),[Node](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.Node),[OperationMetadata](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.OperationMetadata)>`

### startNodeSettings()

```
public UnaryCallSettings<StartNodeRequest,Operation> startNodeSettings()
```

Returns the object with the settings used for calls to startNode.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[StartNodeRequest](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.StartNodeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### stopNodeOperationSettings()

```
public OperationCallSettings<StopNodeRequest,Node,OperationMetadata> stopNodeOperationSettings()
```

Returns the object with the settings used for calls to stopNode.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[StopNodeRequest](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.StopNodeRequest),[Node](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.Node),[OperationMetadata](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.OperationMetadata)>`

### stopNodeSettings()

```
public UnaryCallSettings<StopNodeRequest,Operation> stopNodeSettings()
```

Returns the object with the settings used for calls to stopNode.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[StopNodeRequest](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.StopNodeRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### toBuilder()

```
public TpuStubSettings.Builder toBuilder()
```

Returns a builder containing all the values of this settings class.

**Returns**

**Type**

**Description**

`[TpuStubSettings.Builder](/java/docs/reference/google-cloud-tpu/2.36.0/com.google.cloud.tpu.v1.stub.TpuStubSettings.Builder)`

**Overrides**

[StubSettings<SettingsT>.toBuilder()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_toBuilder__)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
