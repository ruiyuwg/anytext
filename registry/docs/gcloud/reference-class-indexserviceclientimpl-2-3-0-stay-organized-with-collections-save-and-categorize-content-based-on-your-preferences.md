-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class IndexServiceClientImpl (2.3.0) Stay organized with collections Save and categorize content based on your preferences.

3.68.0 (latest) 3.67.0 3.66.0 3.65.0 3.64.0 3.63.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class IndexServiceClientImpl : IndexServiceClient
```

IndexService client wrapper implementation, for convenient use.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> [IndexServiceClient](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient) \> IndexServiceClientImpl

## Inherited Members

[IndexServiceClient.DefaultEndpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_DefaultEndpoint)

[IndexServiceClient.DefaultScopes](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_DefaultScopes)

[IndexServiceClient.ServiceMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_ServiceMetadata)

[IndexServiceClient.CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_CreateAsync_System_Threading_CancellationToken_)

[IndexServiceClient.Create()](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_Create)

[IndexServiceClient.ShutdownDefaultChannelsAsync()](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_ShutdownDefaultChannelsAsync)

[IndexServiceClient.CreateIndexAsync(CreateIndexRequest, CancellationToken)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_CreateIndexAsync_Google_Cloud_AIPlatform_V1_CreateIndexRequest_System_Threading_CancellationToken_)

[IndexServiceClient.PollOnceCreateIndex(String, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_PollOnceCreateIndex_System_String_Google_Api_Gax_Grpc_CallSettings_)

[IndexServiceClient.PollOnceCreateIndexAsync(String, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_PollOnceCreateIndexAsync_System_String_Google_Api_Gax_Grpc_CallSettings_)

[IndexServiceClient.CreateIndex(String, Index, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_CreateIndex_System_String_Google_Cloud_AIPlatform_V1_Index_Google_Api_Gax_Grpc_CallSettings_)

[IndexServiceClient.CreateIndexAsync(String, Index, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_CreateIndexAsync_System_String_Google_Cloud_AIPlatform_V1_Index_Google_Api_Gax_Grpc_CallSettings_)

[IndexServiceClient.CreateIndexAsync(String, Index, CancellationToken)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_CreateIndexAsync_System_String_Google_Cloud_AIPlatform_V1_Index_System_Threading_CancellationToken_)

[IndexServiceClient.CreateIndex(LocationName, Index, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_CreateIndex_Google_Api_Gax_ResourceNames_LocationName_Google_Cloud_AIPlatform_V1_Index_Google_Api_Gax_Grpc_CallSettings_)

[IndexServiceClient.CreateIndexAsync(LocationName, Index, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_CreateIndexAsync_Google_Api_Gax_ResourceNames_LocationName_Google_Cloud_AIPlatform_V1_Index_Google_Api_Gax_Grpc_CallSettings_)

[IndexServiceClient.CreateIndexAsync(LocationName, Index, CancellationToken)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_CreateIndexAsync_Google_Api_Gax_ResourceNames_LocationName_Google_Cloud_AIPlatform_V1_Index_System_Threading_CancellationToken_)

[IndexServiceClient.GetIndexAsync(GetIndexRequest, CancellationToken)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_GetIndexAsync_Google_Cloud_AIPlatform_V1_GetIndexRequest_System_Threading_CancellationToken_)

[IndexServiceClient.GetIndex(String, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_GetIndex_System_String_Google_Api_Gax_Grpc_CallSettings_)

[IndexServiceClient.GetIndexAsync(String, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_GetIndexAsync_System_String_Google_Api_Gax_Grpc_CallSettings_)

[IndexServiceClient.GetIndexAsync(String, CancellationToken)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_GetIndexAsync_System_String_System_Threading_CancellationToken_)

[IndexServiceClient.GetIndex(IndexName, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_GetIndex_Google_Cloud_AIPlatform_V1_IndexName_Google_Api_Gax_Grpc_CallSettings_)

[IndexServiceClient.GetIndexAsync(IndexName, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_GetIndexAsync_Google_Cloud_AIPlatform_V1_IndexName_Google_Api_Gax_Grpc_CallSettings_)

[IndexServiceClient.GetIndexAsync(IndexName, CancellationToken)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_GetIndexAsync_Google_Cloud_AIPlatform_V1_IndexName_System_Threading_CancellationToken_)

[IndexServiceClient.ListIndexes(String, String, Nullable<Int32>, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_ListIndexes_System_String_System_String_System_Nullable_System_Int32__Google_Api_Gax_Grpc_CallSettings_)

[IndexServiceClient.ListIndexesAsync(String, String, Nullable<Int32>, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_ListIndexesAsync_System_String_System_String_System_Nullable_System_Int32__Google_Api_Gax_Grpc_CallSettings_)

[IndexServiceClient.ListIndexes(LocationName, String, Nullable<Int32>, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_ListIndexes_Google_Api_Gax_ResourceNames_LocationName_System_String_System_Nullable_System_Int32__Google_Api_Gax_Grpc_CallSettings_)

[IndexServiceClient.ListIndexesAsync(LocationName, String, Nullable<Int32>, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_ListIndexesAsync_Google_Api_Gax_ResourceNames_LocationName_System_String_System_Nullable_System_Int32__Google_Api_Gax_Grpc_CallSettings_)

[IndexServiceClient.UpdateIndexAsync(UpdateIndexRequest, CancellationToken)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_UpdateIndexAsync_Google_Cloud_AIPlatform_V1_UpdateIndexRequest_System_Threading_CancellationToken_)

[IndexServiceClient.PollOnceUpdateIndex(String, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_PollOnceUpdateIndex_System_String_Google_Api_Gax_Grpc_CallSettings_)

[IndexServiceClient.PollOnceUpdateIndexAsync(String, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_PollOnceUpdateIndexAsync_System_String_Google_Api_Gax_Grpc_CallSettings_)

[IndexServiceClient.UpdateIndex(Index, FieldMask, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_UpdateIndex_Google_Cloud_AIPlatform_V1_Index_Google_Protobuf_WellKnownTypes_FieldMask_Google_Api_Gax_Grpc_CallSettings_)

[IndexServiceClient.UpdateIndexAsync(Index, FieldMask, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_UpdateIndexAsync_Google_Cloud_AIPlatform_V1_Index_Google_Protobuf_WellKnownTypes_FieldMask_Google_Api_Gax_Grpc_CallSettings_)

[IndexServiceClient.UpdateIndexAsync(Index, FieldMask, CancellationToken)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_UpdateIndexAsync_Google_Cloud_AIPlatform_V1_Index_Google_Protobuf_WellKnownTypes_FieldMask_System_Threading_CancellationToken_)

[IndexServiceClient.DeleteIndexAsync(DeleteIndexRequest, CancellationToken)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_DeleteIndexAsync_Google_Cloud_AIPlatform_V1_DeleteIndexRequest_System_Threading_CancellationToken_)

[IndexServiceClient.PollOnceDeleteIndex(String, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_PollOnceDeleteIndex_System_String_Google_Api_Gax_Grpc_CallSettings_)

[IndexServiceClient.PollOnceDeleteIndexAsync(String, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_PollOnceDeleteIndexAsync_System_String_Google_Api_Gax_Grpc_CallSettings_)

[IndexServiceClient.DeleteIndex(String, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_DeleteIndex_System_String_Google_Api_Gax_Grpc_CallSettings_)

[IndexServiceClient.DeleteIndexAsync(String, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_DeleteIndexAsync_System_String_Google_Api_Gax_Grpc_CallSettings_)

[IndexServiceClient.DeleteIndexAsync(String, CancellationToken)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_DeleteIndexAsync_System_String_System_Threading_CancellationToken_)

[IndexServiceClient.DeleteIndex(IndexName, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_DeleteIndex_Google_Cloud_AIPlatform_V1_IndexName_Google_Api_Gax_Grpc_CallSettings_)

[IndexServiceClient.DeleteIndexAsync(IndexName, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_DeleteIndexAsync_Google_Cloud_AIPlatform_V1_IndexName_Google_Api_Gax_Grpc_CallSettings_)

[IndexServiceClient.DeleteIndexAsync(IndexName, CancellationToken)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_DeleteIndexAsync_Google_Cloud_AIPlatform_V1_IndexName_System_Threading_CancellationToken_)

[IndexServiceClient.UpsertDatapointsAsync(UpsertDatapointsRequest, CancellationToken)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_UpsertDatapointsAsync_Google_Cloud_AIPlatform_V1_UpsertDatapointsRequest_System_Threading_CancellationToken_)

[IndexServiceClient.RemoveDatapointsAsync(RemoveDatapointsRequest, CancellationToken)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_RemoveDatapointsAsync_Google_Cloud_AIPlatform_V1_RemoveDatapointsRequest_System_Threading_CancellationToken_)

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.AIPlatform.V1](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1)

## Assembly

Google.Cloud.AIPlatform.V1.dll

## Remarks

A service for creating and managing Vertex AI's Index resources.

## Constructors

### IndexServiceClientImpl(IndexService.IndexServiceClient, IndexServiceSettings, ILogger)

```
public IndexServiceClientImpl(IndexService.IndexServiceClient grpcClient, IndexServiceSettings settings, ILogger logger)
```

Constructs a client wrapper for the IndexService service, with the specified gRPC client and settings.

**Parameters**

**Name**

**Description**

`grpcClient`

`[IndexService.IndexServiceClient](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexService.IndexServiceClient)`  

The underlying gRPC client.

`settings`

`[IndexServiceSettings](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceSettings)`  

The base [IndexServiceSettings](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceSettings) used within this client.

`logger`

`[ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger)`  

Optional [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger) to use within this client.

## Properties

### CreateIndexOperationsClient

```
public override OperationsClient CreateIndexOperationsClient { get; }
```

The long-running operations client for `CreateIndex`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

**Overrides**

[IndexServiceClient.CreateIndexOperationsClient](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_CreateIndexOperationsClient)

### DeleteIndexOperationsClient

```
public override OperationsClient DeleteIndexOperationsClient { get; }
```

The long-running operations client for `DeleteIndex`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

**Overrides**

[IndexServiceClient.DeleteIndexOperationsClient](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_DeleteIndexOperationsClient)

### GrpcClient

```
public override IndexService.IndexServiceClient GrpcClient { get; }
```

The underlying gRPC IndexService client

**Property Value**

**Type**

**Description**

`[IndexService.IndexServiceClient](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexService.IndexServiceClient)`

**Overrides**

[IndexServiceClient.GrpcClient](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_GrpcClient)

### IAMPolicyClient

```
public override IAMPolicyClient IAMPolicyClient { get; }
```

The [IAMPolicyClient](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.IAMPolicyClient.html) associated with this client.

**Property Value**

**Type**

**Description**

`[IAMPolicyClient](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.IAMPolicyClient.html)`

**Overrides**

[IndexServiceClient.IAMPolicyClient](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_IAMPolicyClient)

### LocationsClient

```
public override LocationsClient LocationsClient { get; }
```

The [LocationsClient](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Location/latest/Google.Cloud.Location.LocationsClient.html) associated with this client.

**Property Value**

**Type**

**Description**

`[LocationsClient](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Location/latest/Google.Cloud.Location.LocationsClient.html)`

**Overrides**

[IndexServiceClient.LocationsClient](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_LocationsClient)

### UpdateIndexOperationsClient

```
public override OperationsClient UpdateIndexOperationsClient { get; }
```

The long-running operations client for `UpdateIndex`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

**Overrides**

[IndexServiceClient.UpdateIndexOperationsClient](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_UpdateIndexOperationsClient)

## Methods

### CreateIndex(CreateIndexRequest, CallSettings)

```
public override Operation<Index, CreateIndexOperationMetadata> CreateIndex(CreateIndexRequest request, CallSettings callSettings = null)
```

Creates an Index.

**Parameters**

**Name**

**Description**

`request`

`[CreateIndexRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.CreateIndexRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Index](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.Index), [CreateIndexOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.CreateIndexOperationMetadata)>`

The RPC response.

**Overrides**

[IndexServiceClient.CreateIndex(CreateIndexRequest, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_CreateIndex_Google_Cloud_AIPlatform_V1_CreateIndexRequest_Google_Api_Gax_Grpc_CallSettings_)

### CreateIndexAsync(CreateIndexRequest, CallSettings)

```
public override async Task<Operation<Index, CreateIndexOperationMetadata>> CreateIndexAsync(CreateIndexRequest request, CallSettings callSettings = null)
```

Creates an Index.

**Parameters**

**Name**

**Description**

`request`

`[CreateIndexRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.CreateIndexRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Index](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.Index), [CreateIndexOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.CreateIndexOperationMetadata)>>`

A Task containing the RPC response.

**Overrides**

[IndexServiceClient.CreateIndexAsync(CreateIndexRequest, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_CreateIndexAsync_Google_Cloud_AIPlatform_V1_CreateIndexRequest_Google_Api_Gax_Grpc_CallSettings_)

### DeleteIndex(DeleteIndexRequest, CallSettings)

```
public override Operation<Empty, DeleteOperationMetadata> DeleteIndex(DeleteIndexRequest request, CallSettings callSettings = null)
```

Deletes an Index. An Index can only be deleted when all its \[DeployedIndexes\]\[google.cloud.aiplatform.v1.Index.deployed\_indexes\] had been undeployed.

**Parameters**

**Name**

**Description**

`request`

`[DeleteIndexRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.DeleteIndexRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html), [DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)>`

The RPC response.

**Overrides**

[IndexServiceClient.DeleteIndex(DeleteIndexRequest, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_DeleteIndex_Google_Cloud_AIPlatform_V1_DeleteIndexRequest_Google_Api_Gax_Grpc_CallSettings_)

### DeleteIndexAsync(DeleteIndexRequest, CallSettings)

```
public override async Task<Operation<Empty, DeleteOperationMetadata>> DeleteIndexAsync(DeleteIndexRequest request, CallSettings callSettings = null)
```

Deletes an Index. An Index can only be deleted when all its \[DeployedIndexes\]\[google.cloud.aiplatform.v1.Index.deployed\_indexes\] had been undeployed.

**Parameters**

**Name**

**Description**

`request`

`[DeleteIndexRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.DeleteIndexRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html), [DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)>>`

A Task containing the RPC response.

**Overrides**

[IndexServiceClient.DeleteIndexAsync(DeleteIndexRequest, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_DeleteIndexAsync_Google_Cloud_AIPlatform_V1_DeleteIndexRequest_Google_Api_Gax_Grpc_CallSettings_)

### GetIndex(GetIndexRequest, CallSettings)

```
public override Index GetIndex(GetIndexRequest request, CallSettings callSettings = null)
```

Gets an Index.

**Parameters**

**Name**

**Description**

`request`

`[GetIndexRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.GetIndexRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Index](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.Index)`

The RPC response.

**Overrides**

[IndexServiceClient.GetIndex(GetIndexRequest, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_GetIndex_Google_Cloud_AIPlatform_V1_GetIndexRequest_Google_Api_Gax_Grpc_CallSettings_)

### GetIndexAsync(GetIndexRequest, CallSettings)

```
public override Task<Index> GetIndexAsync(GetIndexRequest request, CallSettings callSettings = null)
```

Gets an Index.

**Parameters**

**Name**

**Description**

`request`

`[GetIndexRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.GetIndexRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Index](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.Index)>`

A Task containing the RPC response.

**Overrides**

[IndexServiceClient.GetIndexAsync(GetIndexRequest, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_GetIndexAsync_Google_Cloud_AIPlatform_V1_GetIndexRequest_Google_Api_Gax_Grpc_CallSettings_)

### ListIndexes(ListIndexesRequest, CallSettings)

```
public override PagedEnumerable<ListIndexesResponse, Index> ListIndexes(ListIndexesRequest request, CallSettings callSettings = null)
```

Lists Indexes in a Location.

**Parameters**

**Name**

**Description**

`request`

`[ListIndexesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.ListIndexesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListIndexesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.ListIndexesResponse), [Index](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.Index)>`

A pageable sequence of [Index](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.Index) resources.

**Overrides**

[IndexServiceClient.ListIndexes(ListIndexesRequest, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_ListIndexes_Google_Cloud_AIPlatform_V1_ListIndexesRequest_Google_Api_Gax_Grpc_CallSettings_)

### ListIndexesAsync(ListIndexesRequest, CallSettings)

```
public override PagedAsyncEnumerable<ListIndexesResponse, Index> ListIndexesAsync(ListIndexesRequest request, CallSettings callSettings = null)
```

Lists Indexes in a Location.

**Parameters**

**Name**

**Description**

`request`

`[ListIndexesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.ListIndexesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListIndexesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.ListIndexesResponse), [Index](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.Index)>`

A pageable asynchronous sequence of [Index](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.Index) resources.

**Overrides**

[IndexServiceClient.ListIndexesAsync(ListIndexesRequest, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_ListIndexesAsync_Google_Cloud_AIPlatform_V1_ListIndexesRequest_Google_Api_Gax_Grpc_CallSettings_)

### RemoveDatapoints(RemoveDatapointsRequest, CallSettings)

```
public override RemoveDatapointsResponse RemoveDatapoints(RemoveDatapointsRequest request, CallSettings callSettings = null)
```

Remove Datapoints from an Index.

**Parameters**

**Name**

**Description**

`request`

`[RemoveDatapointsRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.RemoveDatapointsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[RemoveDatapointsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.RemoveDatapointsResponse)`

The RPC response.

**Overrides**

[IndexServiceClient.RemoveDatapoints(RemoveDatapointsRequest, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_RemoveDatapoints_Google_Cloud_AIPlatform_V1_RemoveDatapointsRequest_Google_Api_Gax_Grpc_CallSettings_)

### RemoveDatapointsAsync(RemoveDatapointsRequest, CallSettings)

```
public override Task<RemoveDatapointsResponse> RemoveDatapointsAsync(RemoveDatapointsRequest request, CallSettings callSettings = null)
```

Remove Datapoints from an Index.

**Parameters**

**Name**

**Description**

`request`

`[RemoveDatapointsRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.RemoveDatapointsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[RemoveDatapointsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.RemoveDatapointsResponse)>`

A Task containing the RPC response.

**Overrides**

[IndexServiceClient.RemoveDatapointsAsync(RemoveDatapointsRequest, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_RemoveDatapointsAsync_Google_Cloud_AIPlatform_V1_RemoveDatapointsRequest_Google_Api_Gax_Grpc_CallSettings_)

### UpdateIndex(UpdateIndexRequest, CallSettings)

```
public override Operation<Index, UpdateIndexOperationMetadata> UpdateIndex(UpdateIndexRequest request, CallSettings callSettings = null)
```

Updates an Index.

**Parameters**

**Name**

**Description**

`request`

`[UpdateIndexRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.UpdateIndexRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Index](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.Index), [UpdateIndexOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.UpdateIndexOperationMetadata)>`

The RPC response.

**Overrides**

[IndexServiceClient.UpdateIndex(UpdateIndexRequest, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_UpdateIndex_Google_Cloud_AIPlatform_V1_UpdateIndexRequest_Google_Api_Gax_Grpc_CallSettings_)

### UpdateIndexAsync(UpdateIndexRequest, CallSettings)

```
public override async Task<Operation<Index, UpdateIndexOperationMetadata>> UpdateIndexAsync(UpdateIndexRequest request, CallSettings callSettings = null)
```

Updates an Index.

**Parameters**

**Name**

**Description**

`request`

`[UpdateIndexRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.UpdateIndexRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Index](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.Index), [UpdateIndexOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.UpdateIndexOperationMetadata)>>`

A Task containing the RPC response.

**Overrides**

[IndexServiceClient.UpdateIndexAsync(UpdateIndexRequest, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_UpdateIndexAsync_Google_Cloud_AIPlatform_V1_UpdateIndexRequest_Google_Api_Gax_Grpc_CallSettings_)

### UpsertDatapoints(UpsertDatapointsRequest, CallSettings)

```
public override UpsertDatapointsResponse UpsertDatapoints(UpsertDatapointsRequest request, CallSettings callSettings = null)
```

Add/update Datapoints into an Index.

**Parameters**

**Name**

**Description**

`request`

`[UpsertDatapointsRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.UpsertDatapointsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[UpsertDatapointsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.UpsertDatapointsResponse)`

The RPC response.

**Overrides**

[IndexServiceClient.UpsertDatapoints(UpsertDatapointsRequest, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_UpsertDatapoints_Google_Cloud_AIPlatform_V1_UpsertDatapointsRequest_Google_Api_Gax_Grpc_CallSettings_)

### UpsertDatapointsAsync(UpsertDatapointsRequest, CallSettings)

```
public override Task<UpsertDatapointsResponse> UpsertDatapointsAsync(UpsertDatapointsRequest request, CallSettings callSettings = null)
```

Add/update Datapoints into an Index.

**Parameters**

**Name**

**Description**

`request`

`[UpsertDatapointsRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.UpsertDatapointsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[UpsertDatapointsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.UpsertDatapointsResponse)>`

A Task containing the RPC response.

**Overrides**

[IndexServiceClient.UpsertDatapointsAsync(UpsertDatapointsRequest, CallSettings)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.3.0/Google.Cloud.AIPlatform.V1.IndexServiceClient#Google_Cloud_AIPlatform_V1_IndexServiceClient_UpsertDatapointsAsync_Google_Cloud_AIPlatform_V1_UpsertDatapointsRequest_Google_Api_Gax_Grpc_CallSettings_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
