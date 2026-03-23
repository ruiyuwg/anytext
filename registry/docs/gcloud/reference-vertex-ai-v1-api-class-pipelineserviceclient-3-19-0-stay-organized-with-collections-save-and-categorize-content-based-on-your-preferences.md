-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Vertex AI v1 API - Class PipelineServiceClient (3.19.0) Stay organized with collections Save and categorize content based on your preferences.

3.68.0 (latest) 3.67.0 3.66.0 3.65.0 3.64.0 3.63.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public abstract class PipelineServiceClient
```

Reference documentation and code samples for the Vertex AI v1 API class PipelineServiceClient.

PipelineService client wrapper, for convenient use.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> PipelineServiceClient

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Derived Types

[PipelineServiceClientImpl](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineServiceClientImpl)

## Namespace

[Google.Cloud.AIPlatform.V1](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1)

## Assembly

Google.Cloud.AIPlatform.V1.dll

## Remarks

A service for creating and managing Vertex AI's pipelines. This includes both `TrainingPipeline` resources (used for AutoML and custom training) and `PipelineJob` resources (used for Vertex AI Pipelines).

## Properties

### BatchCancelPipelineJobsOperationsClient

```
public virtual OperationsClient BatchCancelPipelineJobsOperationsClient { get; }
```

The long-running operations client for `BatchCancelPipelineJobs`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

### BatchDeletePipelineJobsOperationsClient

```
public virtual OperationsClient BatchDeletePipelineJobsOperationsClient { get; }
```

The long-running operations client for `BatchDeletePipelineJobs`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

### DefaultEndpoint

```
public static string DefaultEndpoint { get; }
```

The default endpoint for the PipelineService service, which is a host of "aiplatform.googleapis.com" and a port of 443.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### DefaultScopes

```
public static IReadOnlyList<string> DefaultScopes { get; }
```

The default PipelineService scopes.

**Property Value**

**Type**

**Description**

`[IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)[string](https://learn.microsoft.com/dotnet/api/system.string)`

**Remarks**

The default PipelineService scopes are:

-   [https://www.googleapis.com/auth/cloud-platform](https://www.googleapis.com/auth/cloud-platform)

### DeletePipelineJobOperationsClient

```
public virtual OperationsClient DeletePipelineJobOperationsClient { get; }
```

The long-running operations client for `DeletePipelineJob`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

### DeleteTrainingPipelineOperationsClient

```
public virtual OperationsClient DeleteTrainingPipelineOperationsClient { get; }
```

The long-running operations client for `DeleteTrainingPipeline`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

### GrpcClient

```
public virtual PipelineService.PipelineServiceClient GrpcClient { get; }
```

The underlying gRPC PipelineService client

**Property Value**

**Type**

**Description**

`[PipelineService](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineService)[PipelineServiceClient](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineService.PipelineServiceClient)`

### IAMPolicyClient

```
public virtual IAMPolicyClient IAMPolicyClient { get; }
```

The [IAMPolicyClient](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.IAMPolicyClient.html) associated with this client.

**Property Value**

**Type**

**Description**

`[IAMPolicyClient](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.IAMPolicyClient.html)`

### LocationsClient

```
public virtual LocationsClient LocationsClient { get; }
```

The [LocationsClient](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Location/latest/Google.Cloud.Location.LocationsClient.html) associated with this client.

**Property Value**

**Type**

**Description**

`[LocationsClient](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Location/latest/Google.Cloud.Location.LocationsClient.html)`

### ServiceMetadata

```
public static ServiceMetadata ServiceMetadata { get; }
```

The service metadata associated with this client type.

**Property Value**

**Type**

**Description**

`[ServiceMetadata](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.ServiceMetadata.html)`

## Methods

### BatchCancelPipelineJobs(LocationName, IEnumerable<PipelineJobName>, CallSettings)

```
public virtual Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata> BatchCancelPipelineJobs(LocationName parent, IEnumerable<PipelineJobName> names, CallSettings callSettings = null)
```

Batch cancel PipelineJobs. Firstly the server will check if all the jobs are in non-terminal states, and skip the jobs that are already terminated. If the operation failed, none of the pipeline jobs are cancelled. The server will poll the states of all the pipeline jobs periodically to check the cancellation status. This operation will return an LRO.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. The name of the PipelineJobs' parent resource. Format: `projects/{project}/locations/{location}`

`names`

`[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)[PipelineJobName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJobName)`  

Required. The names of the PipelineJobs to cancel. A maximum of 32 PipelineJobs can be cancelled in a batch. Format: `projects/{project}/locations/{location}/pipelineJobs/{pipelineJob}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[BatchCancelPipelineJobsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchCancelPipelineJobsResponse)[BatchCancelPipelineJobsOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchCancelPipelineJobsOperationMetadata)`

The RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = PipelineServiceClient.Create();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
IEnumerable<PipelineJobName> names = new PipelineJobName[]
{
    PipelineJobName.FromProjectLocationPipelineJob("[PROJECT]", "[LOCATION]", "[PIPELINE_JOB]"),
};
// Make the request
Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata> response = pipelineServiceClient.BatchCancelPipelineJobs(parent, names);

// Poll until the returned long-running operation is complete
Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
BatchCancelPipelineJobsResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata> retrievedResponse = pipelineServiceClient.PollOnceBatchCancelPipelineJobs(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    BatchCancelPipelineJobsResponse retrievedResult = retrievedResponse.Result;
}
```

### BatchCancelPipelineJobs(BatchCancelPipelineJobsRequest, CallSettings)

```
public virtual Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata> BatchCancelPipelineJobs(BatchCancelPipelineJobsRequest request, CallSettings callSettings = null)
```

Batch cancel PipelineJobs. Firstly the server will check if all the jobs are in non-terminal states, and skip the jobs that are already terminated. If the operation failed, none of the pipeline jobs are cancelled. The server will poll the states of all the pipeline jobs periodically to check the cancellation status. This operation will return an LRO.

**Parameters**

**Name**

**Description**

`request`

`[BatchCancelPipelineJobsRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchCancelPipelineJobsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[BatchCancelPipelineJobsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchCancelPipelineJobsResponse)[BatchCancelPipelineJobsOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchCancelPipelineJobsOperationMetadata)`

The RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = PipelineServiceClient.Create();
// Initialize request argument(s)
BatchCancelPipelineJobsRequest request = new BatchCancelPipelineJobsRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    PipelineJobNames =
    {
        PipelineJobName.FromProjectLocationPipelineJob("[PROJECT]", "[LOCATION]", "[PIPELINE_JOB]"),
    },
};
// Make the request
Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata> response = pipelineServiceClient.BatchCancelPipelineJobs(request);

// Poll until the returned long-running operation is complete
Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
BatchCancelPipelineJobsResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata> retrievedResponse = pipelineServiceClient.PollOnceBatchCancelPipelineJobs(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    BatchCancelPipelineJobsResponse retrievedResult = retrievedResponse.Result;
}
```

### BatchCancelPipelineJobs(string, IEnumerable<string>, CallSettings)

```
public virtual Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata> BatchCancelPipelineJobs(string parent, IEnumerable<string> names, CallSettings callSettings = null)
```

Batch cancel PipelineJobs. Firstly the server will check if all the jobs are in non-terminal states, and skip the jobs that are already terminated. If the operation failed, none of the pipeline jobs are cancelled. The server will poll the states of all the pipeline jobs periodically to check the cancellation status. This operation will return an LRO.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the PipelineJobs' parent resource. Format: `projects/{project}/locations/{location}`

`names`

`[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The names of the PipelineJobs to cancel. A maximum of 32 PipelineJobs can be cancelled in a batch. Format: `projects/{project}/locations/{location}/pipelineJobs/{pipelineJob}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[BatchCancelPipelineJobsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchCancelPipelineJobsResponse)[BatchCancelPipelineJobsOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchCancelPipelineJobsOperationMetadata)`

The RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = PipelineServiceClient.Create();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
IEnumerable<string> names = new string[]
{
    "projects/[PROJECT]/locations/[LOCATION]/pipelineJobs/[PIPELINE_JOB]",
};
// Make the request
Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata> response = pipelineServiceClient.BatchCancelPipelineJobs(parent, names);

// Poll until the returned long-running operation is complete
Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
BatchCancelPipelineJobsResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata> retrievedResponse = pipelineServiceClient.PollOnceBatchCancelPipelineJobs(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    BatchCancelPipelineJobsResponse retrievedResult = retrievedResponse.Result;
}
```

### BatchCancelPipelineJobsAsync(LocationName, IEnumerable<PipelineJobName>, CallSettings)

```
public virtual Task<Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata>> BatchCancelPipelineJobsAsync(LocationName parent, IEnumerable<PipelineJobName> names, CallSettings callSettings = null)
```

Batch cancel PipelineJobs. Firstly the server will check if all the jobs are in non-terminal states, and skip the jobs that are already terminated. If the operation failed, none of the pipeline jobs are cancelled. The server will poll the states of all the pipeline jobs periodically to check the cancellation status. This operation will return an LRO.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. The name of the PipelineJobs' parent resource. Format: `projects/{project}/locations/{location}`

`names`

`[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)[PipelineJobName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJobName)`  

Required. The names of the PipelineJobs to cancel. A maximum of 32 PipelineJobs can be cancelled in a batch. Format: `projects/{project}/locations/{location}/pipelineJobs/{pipelineJob}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[BatchCancelPipelineJobsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchCancelPipelineJobsResponse)[BatchCancelPipelineJobsOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchCancelPipelineJobsOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
IEnumerable<PipelineJobName> names = new PipelineJobName[]
{
    PipelineJobName.FromProjectLocationPipelineJob("[PROJECT]", "[LOCATION]", "[PIPELINE_JOB]"),
};
// Make the request
Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata> response = await pipelineServiceClient.BatchCancelPipelineJobsAsync(parent, names);

// Poll until the returned long-running operation is complete
Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
BatchCancelPipelineJobsResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata> retrievedResponse = await pipelineServiceClient.PollOnceBatchCancelPipelineJobsAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    BatchCancelPipelineJobsResponse retrievedResult = retrievedResponse.Result;
}
```

### BatchCancelPipelineJobsAsync(LocationName, IEnumerable<PipelineJobName>, CancellationToken)

```
public virtual Task<Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata>> BatchCancelPipelineJobsAsync(LocationName parent, IEnumerable<PipelineJobName> names, CancellationToken cancellationToken)
```

Batch cancel PipelineJobs. Firstly the server will check if all the jobs are in non-terminal states, and skip the jobs that are already terminated. If the operation failed, none of the pipeline jobs are cancelled. The server will poll the states of all the pipeline jobs periodically to check the cancellation status. This operation will return an LRO.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. The name of the PipelineJobs' parent resource. Format: `projects/{project}/locations/{location}`

`names`

`[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)[PipelineJobName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJobName)`  

Required. The names of the PipelineJobs to cancel. A maximum of 32 PipelineJobs can be cancelled in a batch. Format: `projects/{project}/locations/{location}/pipelineJobs/{pipelineJob}`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[BatchCancelPipelineJobsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchCancelPipelineJobsResponse)[BatchCancelPipelineJobsOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchCancelPipelineJobsOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
IEnumerable<PipelineJobName> names = new PipelineJobName[]
{
    PipelineJobName.FromProjectLocationPipelineJob("[PROJECT]", "[LOCATION]", "[PIPELINE_JOB]"),
};
// Make the request
Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata> response = await pipelineServiceClient.BatchCancelPipelineJobsAsync(parent, names);

// Poll until the returned long-running operation is complete
Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
BatchCancelPipelineJobsResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata> retrievedResponse = await pipelineServiceClient.PollOnceBatchCancelPipelineJobsAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    BatchCancelPipelineJobsResponse retrievedResult = retrievedResponse.Result;
}
```

### BatchCancelPipelineJobsAsync(BatchCancelPipelineJobsRequest, CallSettings)

```
public virtual Task<Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata>> BatchCancelPipelineJobsAsync(BatchCancelPipelineJobsRequest request, CallSettings callSettings = null)
```

Batch cancel PipelineJobs. Firstly the server will check if all the jobs are in non-terminal states, and skip the jobs that are already terminated. If the operation failed, none of the pipeline jobs are cancelled. The server will poll the states of all the pipeline jobs periodically to check the cancellation status. This operation will return an LRO.

**Parameters**

**Name**

**Description**

`request`

`[BatchCancelPipelineJobsRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchCancelPipelineJobsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[BatchCancelPipelineJobsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchCancelPipelineJobsResponse)[BatchCancelPipelineJobsOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchCancelPipelineJobsOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
BatchCancelPipelineJobsRequest request = new BatchCancelPipelineJobsRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    PipelineJobNames =
    {
        PipelineJobName.FromProjectLocationPipelineJob("[PROJECT]", "[LOCATION]", "[PIPELINE_JOB]"),
    },
};
// Make the request
Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata> response = await pipelineServiceClient.BatchCancelPipelineJobsAsync(request);

// Poll until the returned long-running operation is complete
Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
BatchCancelPipelineJobsResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata> retrievedResponse = await pipelineServiceClient.PollOnceBatchCancelPipelineJobsAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    BatchCancelPipelineJobsResponse retrievedResult = retrievedResponse.Result;
}
```

### BatchCancelPipelineJobsAsync(BatchCancelPipelineJobsRequest, CancellationToken)

```
public virtual Task<Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata>> BatchCancelPipelineJobsAsync(BatchCancelPipelineJobsRequest request, CancellationToken cancellationToken)
```

Batch cancel PipelineJobs. Firstly the server will check if all the jobs are in non-terminal states, and skip the jobs that are already terminated. If the operation failed, none of the pipeline jobs are cancelled. The server will poll the states of all the pipeline jobs periodically to check the cancellation status. This operation will return an LRO.

**Parameters**

**Name**

**Description**

`request`

`[BatchCancelPipelineJobsRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchCancelPipelineJobsRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[BatchCancelPipelineJobsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchCancelPipelineJobsResponse)[BatchCancelPipelineJobsOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchCancelPipelineJobsOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
BatchCancelPipelineJobsRequest request = new BatchCancelPipelineJobsRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    PipelineJobNames =
    {
        PipelineJobName.FromProjectLocationPipelineJob("[PROJECT]", "[LOCATION]", "[PIPELINE_JOB]"),
    },
};
// Make the request
Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata> response = await pipelineServiceClient.BatchCancelPipelineJobsAsync(request);

// Poll until the returned long-running operation is complete
Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
BatchCancelPipelineJobsResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata> retrievedResponse = await pipelineServiceClient.PollOnceBatchCancelPipelineJobsAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    BatchCancelPipelineJobsResponse retrievedResult = retrievedResponse.Result;
}
```

### BatchCancelPipelineJobsAsync(string, IEnumerable<string>, CallSettings)

```
public virtual Task<Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata>> BatchCancelPipelineJobsAsync(string parent, IEnumerable<string> names, CallSettings callSettings = null)
```

Batch cancel PipelineJobs. Firstly the server will check if all the jobs are in non-terminal states, and skip the jobs that are already terminated. If the operation failed, none of the pipeline jobs are cancelled. The server will poll the states of all the pipeline jobs periodically to check the cancellation status. This operation will return an LRO.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the PipelineJobs' parent resource. Format: `projects/{project}/locations/{location}`

`names`

`[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The names of the PipelineJobs to cancel. A maximum of 32 PipelineJobs can be cancelled in a batch. Format: `projects/{project}/locations/{location}/pipelineJobs/{pipelineJob}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[BatchCancelPipelineJobsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchCancelPipelineJobsResponse)[BatchCancelPipelineJobsOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchCancelPipelineJobsOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
IEnumerable<string> names = new string[]
{
    "projects/[PROJECT]/locations/[LOCATION]/pipelineJobs/[PIPELINE_JOB]",
};
// Make the request
Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata> response = await pipelineServiceClient.BatchCancelPipelineJobsAsync(parent, names);

// Poll until the returned long-running operation is complete
Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
BatchCancelPipelineJobsResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata> retrievedResponse = await pipelineServiceClient.PollOnceBatchCancelPipelineJobsAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    BatchCancelPipelineJobsResponse retrievedResult = retrievedResponse.Result;
}
```

### BatchCancelPipelineJobsAsync(string, IEnumerable<string>, CancellationToken)

```
public virtual Task<Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata>> BatchCancelPipelineJobsAsync(string parent, IEnumerable<string> names, CancellationToken cancellationToken)
```

Batch cancel PipelineJobs. Firstly the server will check if all the jobs are in non-terminal states, and skip the jobs that are already terminated. If the operation failed, none of the pipeline jobs are cancelled. The server will poll the states of all the pipeline jobs periodically to check the cancellation status. This operation will return an LRO.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the PipelineJobs' parent resource. Format: `projects/{project}/locations/{location}`

`names`

`[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The names of the PipelineJobs to cancel. A maximum of 32 PipelineJobs can be cancelled in a batch. Format: `projects/{project}/locations/{location}/pipelineJobs/{pipelineJob}`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[BatchCancelPipelineJobsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchCancelPipelineJobsResponse)[BatchCancelPipelineJobsOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchCancelPipelineJobsOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
IEnumerable<string> names = new string[]
{
    "projects/[PROJECT]/locations/[LOCATION]/pipelineJobs/[PIPELINE_JOB]",
};
// Make the request
Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata> response = await pipelineServiceClient.BatchCancelPipelineJobsAsync(parent, names);

// Poll until the returned long-running operation is complete
Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
BatchCancelPipelineJobsResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata> retrievedResponse = await pipelineServiceClient.PollOnceBatchCancelPipelineJobsAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    BatchCancelPipelineJobsResponse retrievedResult = retrievedResponse.Result;
}
```

### BatchDeletePipelineJobs(LocationName, IEnumerable<PipelineJobName>, CallSettings)

```
public virtual Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata> BatchDeletePipelineJobs(LocationName parent, IEnumerable<PipelineJobName> names, CallSettings callSettings = null)
```

Batch deletes PipelineJobs The Operation is atomic. If it fails, none of the PipelineJobs are deleted. If it succeeds, all of the PipelineJobs are deleted.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. The name of the PipelineJobs' parent resource. Format: `projects/{project}/locations/{location}`

`names`

`[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)[PipelineJobName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJobName)`  

Required. The names of the PipelineJobs to delete. A maximum of 32 PipelineJobs can be deleted in a batch. Format: `projects/{project}/locations/{location}/pipelineJobs/{pipelineJob}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[BatchDeletePipelineJobsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchDeletePipelineJobsResponse)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

The RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = PipelineServiceClient.Create();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
IEnumerable<PipelineJobName> names = new PipelineJobName[]
{
    PipelineJobName.FromProjectLocationPipelineJob("[PROJECT]", "[LOCATION]", "[PIPELINE_JOB]"),
};
// Make the request
Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata> response = pipelineServiceClient.BatchDeletePipelineJobs(parent, names);

// Poll until the returned long-running operation is complete
Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
BatchDeletePipelineJobsResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata> retrievedResponse = pipelineServiceClient.PollOnceBatchDeletePipelineJobs(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    BatchDeletePipelineJobsResponse retrievedResult = retrievedResponse.Result;
}
```

### BatchDeletePipelineJobs(BatchDeletePipelineJobsRequest, CallSettings)

```
public virtual Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata> BatchDeletePipelineJobs(BatchDeletePipelineJobsRequest request, CallSettings callSettings = null)
```

Batch deletes PipelineJobs The Operation is atomic. If it fails, none of the PipelineJobs are deleted. If it succeeds, all of the PipelineJobs are deleted.

**Parameters**

**Name**

**Description**

`request`

`[BatchDeletePipelineJobsRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchDeletePipelineJobsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[BatchDeletePipelineJobsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchDeletePipelineJobsResponse)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

The RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = PipelineServiceClient.Create();
// Initialize request argument(s)
BatchDeletePipelineJobsRequest request = new BatchDeletePipelineJobsRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    PipelineJobNames =
    {
        PipelineJobName.FromProjectLocationPipelineJob("[PROJECT]", "[LOCATION]", "[PIPELINE_JOB]"),
    },
};
// Make the request
Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata> response = pipelineServiceClient.BatchDeletePipelineJobs(request);

// Poll until the returned long-running operation is complete
Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
BatchDeletePipelineJobsResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata> retrievedResponse = pipelineServiceClient.PollOnceBatchDeletePipelineJobs(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    BatchDeletePipelineJobsResponse retrievedResult = retrievedResponse.Result;
}
```

### BatchDeletePipelineJobs(string, IEnumerable<string>, CallSettings)

```
public virtual Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata> BatchDeletePipelineJobs(string parent, IEnumerable<string> names, CallSettings callSettings = null)
```

Batch deletes PipelineJobs The Operation is atomic. If it fails, none of the PipelineJobs are deleted. If it succeeds, all of the PipelineJobs are deleted.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the PipelineJobs' parent resource. Format: `projects/{project}/locations/{location}`

`names`

`[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The names of the PipelineJobs to delete. A maximum of 32 PipelineJobs can be deleted in a batch. Format: `projects/{project}/locations/{location}/pipelineJobs/{pipelineJob}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[BatchDeletePipelineJobsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchDeletePipelineJobsResponse)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

The RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = PipelineServiceClient.Create();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
IEnumerable<string> names = new string[]
{
    "projects/[PROJECT]/locations/[LOCATION]/pipelineJobs/[PIPELINE_JOB]",
};
// Make the request
Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata> response = pipelineServiceClient.BatchDeletePipelineJobs(parent, names);

// Poll until the returned long-running operation is complete
Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
BatchDeletePipelineJobsResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata> retrievedResponse = pipelineServiceClient.PollOnceBatchDeletePipelineJobs(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    BatchDeletePipelineJobsResponse retrievedResult = retrievedResponse.Result;
}
```

### BatchDeletePipelineJobsAsync(LocationName, IEnumerable<PipelineJobName>, CallSettings)

```
public virtual Task<Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata>> BatchDeletePipelineJobsAsync(LocationName parent, IEnumerable<PipelineJobName> names, CallSettings callSettings = null)
```

Batch deletes PipelineJobs The Operation is atomic. If it fails, none of the PipelineJobs are deleted. If it succeeds, all of the PipelineJobs are deleted.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. The name of the PipelineJobs' parent resource. Format: `projects/{project}/locations/{location}`

`names`

`[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)[PipelineJobName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJobName)`  

Required. The names of the PipelineJobs to delete. A maximum of 32 PipelineJobs can be deleted in a batch. Format: `projects/{project}/locations/{location}/pipelineJobs/{pipelineJob}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[BatchDeletePipelineJobsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchDeletePipelineJobsResponse)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
IEnumerable<PipelineJobName> names = new PipelineJobName[]
{
    PipelineJobName.FromProjectLocationPipelineJob("[PROJECT]", "[LOCATION]", "[PIPELINE_JOB]"),
};
// Make the request
Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata> response = await pipelineServiceClient.BatchDeletePipelineJobsAsync(parent, names);

// Poll until the returned long-running operation is complete
Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
BatchDeletePipelineJobsResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata> retrievedResponse = await pipelineServiceClient.PollOnceBatchDeletePipelineJobsAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    BatchDeletePipelineJobsResponse retrievedResult = retrievedResponse.Result;
}
```

### BatchDeletePipelineJobsAsync(LocationName, IEnumerable<PipelineJobName>, CancellationToken)

```
public virtual Task<Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata>> BatchDeletePipelineJobsAsync(LocationName parent, IEnumerable<PipelineJobName> names, CancellationToken cancellationToken)
```

Batch deletes PipelineJobs The Operation is atomic. If it fails, none of the PipelineJobs are deleted. If it succeeds, all of the PipelineJobs are deleted.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. The name of the PipelineJobs' parent resource. Format: `projects/{project}/locations/{location}`

`names`

`[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)[PipelineJobName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJobName)`  

Required. The names of the PipelineJobs to delete. A maximum of 32 PipelineJobs can be deleted in a batch. Format: `projects/{project}/locations/{location}/pipelineJobs/{pipelineJob}`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[BatchDeletePipelineJobsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchDeletePipelineJobsResponse)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
IEnumerable<PipelineJobName> names = new PipelineJobName[]
{
    PipelineJobName.FromProjectLocationPipelineJob("[PROJECT]", "[LOCATION]", "[PIPELINE_JOB]"),
};
// Make the request
Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata> response = await pipelineServiceClient.BatchDeletePipelineJobsAsync(parent, names);

// Poll until the returned long-running operation is complete
Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
BatchDeletePipelineJobsResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata> retrievedResponse = await pipelineServiceClient.PollOnceBatchDeletePipelineJobsAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    BatchDeletePipelineJobsResponse retrievedResult = retrievedResponse.Result;
}
```

### BatchDeletePipelineJobsAsync(BatchDeletePipelineJobsRequest, CallSettings)

```
public virtual Task<Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata>> BatchDeletePipelineJobsAsync(BatchDeletePipelineJobsRequest request, CallSettings callSettings = null)
```

Batch deletes PipelineJobs The Operation is atomic. If it fails, none of the PipelineJobs are deleted. If it succeeds, all of the PipelineJobs are deleted.

**Parameters**

**Name**

**Description**

`request`

`[BatchDeletePipelineJobsRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchDeletePipelineJobsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[BatchDeletePipelineJobsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchDeletePipelineJobsResponse)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
BatchDeletePipelineJobsRequest request = new BatchDeletePipelineJobsRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    PipelineJobNames =
    {
        PipelineJobName.FromProjectLocationPipelineJob("[PROJECT]", "[LOCATION]", "[PIPELINE_JOB]"),
    },
};
// Make the request
Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata> response = await pipelineServiceClient.BatchDeletePipelineJobsAsync(request);

// Poll until the returned long-running operation is complete
Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
BatchDeletePipelineJobsResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata> retrievedResponse = await pipelineServiceClient.PollOnceBatchDeletePipelineJobsAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    BatchDeletePipelineJobsResponse retrievedResult = retrievedResponse.Result;
}
```

### BatchDeletePipelineJobsAsync(BatchDeletePipelineJobsRequest, CancellationToken)

```
public virtual Task<Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata>> BatchDeletePipelineJobsAsync(BatchDeletePipelineJobsRequest request, CancellationToken cancellationToken)
```

Batch deletes PipelineJobs The Operation is atomic. If it fails, none of the PipelineJobs are deleted. If it succeeds, all of the PipelineJobs are deleted.

**Parameters**

**Name**

**Description**

`request`

`[BatchDeletePipelineJobsRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchDeletePipelineJobsRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[BatchDeletePipelineJobsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchDeletePipelineJobsResponse)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
BatchDeletePipelineJobsRequest request = new BatchDeletePipelineJobsRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    PipelineJobNames =
    {
        PipelineJobName.FromProjectLocationPipelineJob("[PROJECT]", "[LOCATION]", "[PIPELINE_JOB]"),
    },
};
// Make the request
Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata> response = await pipelineServiceClient.BatchDeletePipelineJobsAsync(request);

// Poll until the returned long-running operation is complete
Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
BatchDeletePipelineJobsResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata> retrievedResponse = await pipelineServiceClient.PollOnceBatchDeletePipelineJobsAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    BatchDeletePipelineJobsResponse retrievedResult = retrievedResponse.Result;
}
```

### BatchDeletePipelineJobsAsync(string, IEnumerable<string>, CallSettings)

```
public virtual Task<Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata>> BatchDeletePipelineJobsAsync(string parent, IEnumerable<string> names, CallSettings callSettings = null)
```

Batch deletes PipelineJobs The Operation is atomic. If it fails, none of the PipelineJobs are deleted. If it succeeds, all of the PipelineJobs are deleted.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the PipelineJobs' parent resource. Format: `projects/{project}/locations/{location}`

`names`

`[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The names of the PipelineJobs to delete. A maximum of 32 PipelineJobs can be deleted in a batch. Format: `projects/{project}/locations/{location}/pipelineJobs/{pipelineJob}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[BatchDeletePipelineJobsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchDeletePipelineJobsResponse)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
IEnumerable<string> names = new string[]
{
    "projects/[PROJECT]/locations/[LOCATION]/pipelineJobs/[PIPELINE_JOB]",
};
// Make the request
Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata> response = await pipelineServiceClient.BatchDeletePipelineJobsAsync(parent, names);

// Poll until the returned long-running operation is complete
Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
BatchDeletePipelineJobsResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata> retrievedResponse = await pipelineServiceClient.PollOnceBatchDeletePipelineJobsAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    BatchDeletePipelineJobsResponse retrievedResult = retrievedResponse.Result;
}
```

### BatchDeletePipelineJobsAsync(string, IEnumerable<string>, CancellationToken)

```
public virtual Task<Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata>> BatchDeletePipelineJobsAsync(string parent, IEnumerable<string> names, CancellationToken cancellationToken)
```

Batch deletes PipelineJobs The Operation is atomic. If it fails, none of the PipelineJobs are deleted. If it succeeds, all of the PipelineJobs are deleted.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the PipelineJobs' parent resource. Format: `projects/{project}/locations/{location}`

`names`

`[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The names of the PipelineJobs to delete. A maximum of 32 PipelineJobs can be deleted in a batch. Format: `projects/{project}/locations/{location}/pipelineJobs/{pipelineJob}`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[BatchDeletePipelineJobsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchDeletePipelineJobsResponse)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
IEnumerable<string> names = new string[]
{
    "projects/[PROJECT]/locations/[LOCATION]/pipelineJobs/[PIPELINE_JOB]",
};
// Make the request
Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata> response = await pipelineServiceClient.BatchDeletePipelineJobsAsync(parent, names);

// Poll until the returned long-running operation is complete
Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
BatchDeletePipelineJobsResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata> retrievedResponse = await pipelineServiceClient.PollOnceBatchDeletePipelineJobsAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    BatchDeletePipelineJobsResponse retrievedResult = retrievedResponse.Result;
}
```

### CancelPipelineJob(CancelPipelineJobRequest, CallSettings)

```
public virtual void CancelPipelineJob(CancelPipelineJobRequest request, CallSettings callSettings = null)
```

Cancels a PipelineJob. Starts asynchronous cancellation on the PipelineJob. The server makes a best effort to cancel the pipeline, but success is not guaranteed. Clients can use \[PipelineService.GetPipelineJob\]\[google.cloud.aiplatform.v1.PipelineService.GetPipelineJob\] or other methods to check whether the cancellation succeeded or whether the pipeline completed despite cancellation. On successful cancellation, the PipelineJob is not deleted; instead it becomes a pipeline with a \[PipelineJob.error\]\[google.cloud.aiplatform.v1.PipelineJob.error\] value with a \[google.rpc.Status.code\]\[google.rpc.Status.code\] of 1, corresponding to `Code.CANCELLED`, and \[PipelineJob.state\]\[google.cloud.aiplatform.v1.PipelineJob.state\] is set to `CANCELLED`.

**Parameters**

**Name**

**Description**

`request`

`[CancelPipelineJobRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.CancelPipelineJobRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = PipelineServiceClient.Create();
// Initialize request argument(s)
CancelPipelineJobRequest request = new CancelPipelineJobRequest
{
    PipelineJobName = PipelineJobName.FromProjectLocationPipelineJob("[PROJECT]", "[LOCATION]", "[PIPELINE_JOB]"),
};
// Make the request
pipelineServiceClient.CancelPipelineJob(request);
```

### CancelPipelineJob(PipelineJobName, CallSettings)

```
public virtual void CancelPipelineJob(PipelineJobName name, CallSettings callSettings = null)
```

Cancels a PipelineJob. Starts asynchronous cancellation on the PipelineJob. The server makes a best effort to cancel the pipeline, but success is not guaranteed. Clients can use \[PipelineService.GetPipelineJob\]\[google.cloud.aiplatform.v1.PipelineService.GetPipelineJob\] or other methods to check whether the cancellation succeeded or whether the pipeline completed despite cancellation. On successful cancellation, the PipelineJob is not deleted; instead it becomes a pipeline with a \[PipelineJob.error\]\[google.cloud.aiplatform.v1.PipelineJob.error\] value with a \[google.rpc.Status.code\]\[google.rpc.Status.code\] of 1, corresponding to `Code.CANCELLED`, and \[PipelineJob.state\]\[google.cloud.aiplatform.v1.PipelineJob.state\] is set to `CANCELLED`.

**Parameters**

**Name**

**Description**

`name`

`[PipelineJobName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJobName)`  

Required. The name of the PipelineJob to cancel. Format: `projects/{project}/locations/{location}/pipelineJobs/{pipeline_job}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = PipelineServiceClient.Create();
// Initialize request argument(s)
PipelineJobName name = PipelineJobName.FromProjectLocationPipelineJob("[PROJECT]", "[LOCATION]", "[PIPELINE_JOB]");
// Make the request
pipelineServiceClient.CancelPipelineJob(name);
```

### CancelPipelineJob(string, CallSettings)

```
public virtual void CancelPipelineJob(string name, CallSettings callSettings = null)
```

Cancels a PipelineJob. Starts asynchronous cancellation on the PipelineJob. The server makes a best effort to cancel the pipeline, but success is not guaranteed. Clients can use \[PipelineService.GetPipelineJob\]\[google.cloud.aiplatform.v1.PipelineService.GetPipelineJob\] or other methods to check whether the cancellation succeeded or whether the pipeline completed despite cancellation. On successful cancellation, the PipelineJob is not deleted; instead it becomes a pipeline with a \[PipelineJob.error\]\[google.cloud.aiplatform.v1.PipelineJob.error\] value with a \[google.rpc.Status.code\]\[google.rpc.Status.code\] of 1, corresponding to `Code.CANCELLED`, and \[PipelineJob.state\]\[google.cloud.aiplatform.v1.PipelineJob.state\] is set to `CANCELLED`.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the PipelineJob to cancel. Format: `projects/{project}/locations/{location}/pipelineJobs/{pipeline_job}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = PipelineServiceClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/pipelineJobs/[PIPELINE_JOB]";
// Make the request
pipelineServiceClient.CancelPipelineJob(name);
```

### CancelPipelineJobAsync(CancelPipelineJobRequest, CallSettings)

```
public virtual Task CancelPipelineJobAsync(CancelPipelineJobRequest request, CallSettings callSettings = null)
```

Cancels a PipelineJob. Starts asynchronous cancellation on the PipelineJob. The server makes a best effort to cancel the pipeline, but success is not guaranteed. Clients can use \[PipelineService.GetPipelineJob\]\[google.cloud.aiplatform.v1.PipelineService.GetPipelineJob\] or other methods to check whether the cancellation succeeded or whether the pipeline completed despite cancellation. On successful cancellation, the PipelineJob is not deleted; instead it becomes a pipeline with a \[PipelineJob.error\]\[google.cloud.aiplatform.v1.PipelineJob.error\] value with a \[google.rpc.Status.code\]\[google.rpc.Status.code\] of 1, corresponding to `Code.CANCELLED`, and \[PipelineJob.state\]\[google.cloud.aiplatform.v1.PipelineJob.state\] is set to `CANCELLED`.

**Parameters**

**Name**

**Description**

`request`

`[CancelPipelineJobRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.CancelPipelineJobRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
CancelPipelineJobRequest request = new CancelPipelineJobRequest
{
    PipelineJobName = PipelineJobName.FromProjectLocationPipelineJob("[PROJECT]", "[LOCATION]", "[PIPELINE_JOB]"),
};
// Make the request
await pipelineServiceClient.CancelPipelineJobAsync(request);
```

### CancelPipelineJobAsync(CancelPipelineJobRequest, CancellationToken)

```
public virtual Task CancelPipelineJobAsync(CancelPipelineJobRequest request, CancellationToken cancellationToken)
```

Cancels a PipelineJob. Starts asynchronous cancellation on the PipelineJob. The server makes a best effort to cancel the pipeline, but success is not guaranteed. Clients can use \[PipelineService.GetPipelineJob\]\[google.cloud.aiplatform.v1.PipelineService.GetPipelineJob\] or other methods to check whether the cancellation succeeded or whether the pipeline completed despite cancellation. On successful cancellation, the PipelineJob is not deleted; instead it becomes a pipeline with a \[PipelineJob.error\]\[google.cloud.aiplatform.v1.PipelineJob.error\] value with a \[google.rpc.Status.code\]\[google.rpc.Status.code\] of 1, corresponding to `Code.CANCELLED`, and \[PipelineJob.state\]\[google.cloud.aiplatform.v1.PipelineJob.state\] is set to `CANCELLED`.

**Parameters**

**Name**

**Description**

`request`

`[CancelPipelineJobRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.CancelPipelineJobRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
CancelPipelineJobRequest request = new CancelPipelineJobRequest
{
    PipelineJobName = PipelineJobName.FromProjectLocationPipelineJob("[PROJECT]", "[LOCATION]", "[PIPELINE_JOB]"),
};
// Make the request
await pipelineServiceClient.CancelPipelineJobAsync(request);
```

### CancelPipelineJobAsync(PipelineJobName, CallSettings)

```
public virtual Task CancelPipelineJobAsync(PipelineJobName name, CallSettings callSettings = null)
```

Cancels a PipelineJob. Starts asynchronous cancellation on the PipelineJob. The server makes a best effort to cancel the pipeline, but success is not guaranteed. Clients can use \[PipelineService.GetPipelineJob\]\[google.cloud.aiplatform.v1.PipelineService.GetPipelineJob\] or other methods to check whether the cancellation succeeded or whether the pipeline completed despite cancellation. On successful cancellation, the PipelineJob is not deleted; instead it becomes a pipeline with a \[PipelineJob.error\]\[google.cloud.aiplatform.v1.PipelineJob.error\] value with a \[google.rpc.Status.code\]\[google.rpc.Status.code\] of 1, corresponding to `Code.CANCELLED`, and \[PipelineJob.state\]\[google.cloud.aiplatform.v1.PipelineJob.state\] is set to `CANCELLED`.

**Parameters**

**Name**

**Description**

`name`

`[PipelineJobName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJobName)`  

Required. The name of the PipelineJob to cancel. Format: `projects/{project}/locations/{location}/pipelineJobs/{pipeline_job}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
PipelineJobName name = PipelineJobName.FromProjectLocationPipelineJob("[PROJECT]", "[LOCATION]", "[PIPELINE_JOB]");
// Make the request
await pipelineServiceClient.CancelPipelineJobAsync(name);
```

### CancelPipelineJobAsync(PipelineJobName, CancellationToken)

```
public virtual Task CancelPipelineJobAsync(PipelineJobName name, CancellationToken cancellationToken)
```

Cancels a PipelineJob. Starts asynchronous cancellation on the PipelineJob. The server makes a best effort to cancel the pipeline, but success is not guaranteed. Clients can use \[PipelineService.GetPipelineJob\]\[google.cloud.aiplatform.v1.PipelineService.GetPipelineJob\] or other methods to check whether the cancellation succeeded or whether the pipeline completed despite cancellation. On successful cancellation, the PipelineJob is not deleted; instead it becomes a pipeline with a \[PipelineJob.error\]\[google.cloud.aiplatform.v1.PipelineJob.error\] value with a \[google.rpc.Status.code\]\[google.rpc.Status.code\] of 1, corresponding to `Code.CANCELLED`, and \[PipelineJob.state\]\[google.cloud.aiplatform.v1.PipelineJob.state\] is set to `CANCELLED`.

**Parameters**

**Name**

**Description**

`name`

`[PipelineJobName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJobName)`  

Required. The name of the PipelineJob to cancel. Format: `projects/{project}/locations/{location}/pipelineJobs/{pipeline_job}`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
PipelineJobName name = PipelineJobName.FromProjectLocationPipelineJob("[PROJECT]", "[LOCATION]", "[PIPELINE_JOB]");
// Make the request
await pipelineServiceClient.CancelPipelineJobAsync(name);
```

### CancelPipelineJobAsync(string, CallSettings)

```
public virtual Task CancelPipelineJobAsync(string name, CallSettings callSettings = null)
```

Cancels a PipelineJob. Starts asynchronous cancellation on the PipelineJob. The server makes a best effort to cancel the pipeline, but success is not guaranteed. Clients can use \[PipelineService.GetPipelineJob\]\[google.cloud.aiplatform.v1.PipelineService.GetPipelineJob\] or other methods to check whether the cancellation succeeded or whether the pipeline completed despite cancellation. On successful cancellation, the PipelineJob is not deleted; instead it becomes a pipeline with a \[PipelineJob.error\]\[google.cloud.aiplatform.v1.PipelineJob.error\] value with a \[google.rpc.Status.code\]\[google.rpc.Status.code\] of 1, corresponding to `Code.CANCELLED`, and \[PipelineJob.state\]\[google.cloud.aiplatform.v1.PipelineJob.state\] is set to `CANCELLED`.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the PipelineJob to cancel. Format: `projects/{project}/locations/{location}/pipelineJobs/{pipeline_job}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/pipelineJobs/[PIPELINE_JOB]";
// Make the request
await pipelineServiceClient.CancelPipelineJobAsync(name);
```

### CancelPipelineJobAsync(string, CancellationToken)

```
public virtual Task CancelPipelineJobAsync(string name, CancellationToken cancellationToken)
```

Cancels a PipelineJob. Starts asynchronous cancellation on the PipelineJob. The server makes a best effort to cancel the pipeline, but success is not guaranteed. Clients can use \[PipelineService.GetPipelineJob\]\[google.cloud.aiplatform.v1.PipelineService.GetPipelineJob\] or other methods to check whether the cancellation succeeded or whether the pipeline completed despite cancellation. On successful cancellation, the PipelineJob is not deleted; instead it becomes a pipeline with a \[PipelineJob.error\]\[google.cloud.aiplatform.v1.PipelineJob.error\] value with a \[google.rpc.Status.code\]\[google.rpc.Status.code\] of 1, corresponding to `Code.CANCELLED`, and \[PipelineJob.state\]\[google.cloud.aiplatform.v1.PipelineJob.state\] is set to `CANCELLED`.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the PipelineJob to cancel. Format: `projects/{project}/locations/{location}/pipelineJobs/{pipeline_job}`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/pipelineJobs/[PIPELINE_JOB]";
// Make the request
await pipelineServiceClient.CancelPipelineJobAsync(name);
```

### CancelTrainingPipeline(CancelTrainingPipelineRequest, CallSettings)

```
public virtual void CancelTrainingPipeline(CancelTrainingPipelineRequest request, CallSettings callSettings = null)
```

Cancels a TrainingPipeline. Starts asynchronous cancellation on the TrainingPipeline. The server makes a best effort to cancel the pipeline, but success is not guaranteed. Clients can use \[PipelineService.GetTrainingPipeline\]\[google.cloud.aiplatform.v1.PipelineService.GetTrainingPipeline\] or other methods to check whether the cancellation succeeded or whether the pipeline completed despite cancellation. On successful cancellation, the TrainingPipeline is not deleted; instead it becomes a pipeline with a \[TrainingPipeline.error\]\[google.cloud.aiplatform.v1.TrainingPipeline.error\] value with a \[google.rpc.Status.code\]\[google.rpc.Status.code\] of 1, corresponding to `Code.CANCELLED`, and \[TrainingPipeline.state\]\[google.cloud.aiplatform.v1.TrainingPipeline.state\] is set to `CANCELLED`.

**Parameters**

**Name**

**Description**

`request`

`[CancelTrainingPipelineRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.CancelTrainingPipelineRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = PipelineServiceClient.Create();
// Initialize request argument(s)
CancelTrainingPipelineRequest request = new CancelTrainingPipelineRequest
{
    TrainingPipelineName = TrainingPipelineName.FromProjectLocationTrainingPipeline("[PROJECT]", "[LOCATION]", "[TRAINING_PIPELINE]"),
};
// Make the request
pipelineServiceClient.CancelTrainingPipeline(request);
```

### CancelTrainingPipeline(TrainingPipelineName, CallSettings)

```
public virtual void CancelTrainingPipeline(TrainingPipelineName name, CallSettings callSettings = null)
```

Cancels a TrainingPipeline. Starts asynchronous cancellation on the TrainingPipeline. The server makes a best effort to cancel the pipeline, but success is not guaranteed. Clients can use \[PipelineService.GetTrainingPipeline\]\[google.cloud.aiplatform.v1.PipelineService.GetTrainingPipeline\] or other methods to check whether the cancellation succeeded or whether the pipeline completed despite cancellation. On successful cancellation, the TrainingPipeline is not deleted; instead it becomes a pipeline with a \[TrainingPipeline.error\]\[google.cloud.aiplatform.v1.TrainingPipeline.error\] value with a \[google.rpc.Status.code\]\[google.rpc.Status.code\] of 1, corresponding to `Code.CANCELLED`, and \[TrainingPipeline.state\]\[google.cloud.aiplatform.v1.TrainingPipeline.state\] is set to `CANCELLED`.

**Parameters**

**Name**

**Description**

`name`

`[TrainingPipelineName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipelineName)`  

Required. The name of the TrainingPipeline to cancel. Format: `projects/{project}/locations/{location}/trainingPipelines/{training_pipeline}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = PipelineServiceClient.Create();
// Initialize request argument(s)
TrainingPipelineName name = TrainingPipelineName.FromProjectLocationTrainingPipeline("[PROJECT]", "[LOCATION]", "[TRAINING_PIPELINE]");
// Make the request
pipelineServiceClient.CancelTrainingPipeline(name);
```

### CancelTrainingPipeline(string, CallSettings)

```
public virtual void CancelTrainingPipeline(string name, CallSettings callSettings = null)
```

Cancels a TrainingPipeline. Starts asynchronous cancellation on the TrainingPipeline. The server makes a best effort to cancel the pipeline, but success is not guaranteed. Clients can use \[PipelineService.GetTrainingPipeline\]\[google.cloud.aiplatform.v1.PipelineService.GetTrainingPipeline\] or other methods to check whether the cancellation succeeded or whether the pipeline completed despite cancellation. On successful cancellation, the TrainingPipeline is not deleted; instead it becomes a pipeline with a \[TrainingPipeline.error\]\[google.cloud.aiplatform.v1.TrainingPipeline.error\] value with a \[google.rpc.Status.code\]\[google.rpc.Status.code\] of 1, corresponding to `Code.CANCELLED`, and \[TrainingPipeline.state\]\[google.cloud.aiplatform.v1.TrainingPipeline.state\] is set to `CANCELLED`.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the TrainingPipeline to cancel. Format: `projects/{project}/locations/{location}/trainingPipelines/{training_pipeline}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = PipelineServiceClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/trainingPipelines/[TRAINING_PIPELINE]";
// Make the request
pipelineServiceClient.CancelTrainingPipeline(name);
```

### CancelTrainingPipelineAsync(CancelTrainingPipelineRequest, CallSettings)

```
public virtual Task CancelTrainingPipelineAsync(CancelTrainingPipelineRequest request, CallSettings callSettings = null)
```

Cancels a TrainingPipeline. Starts asynchronous cancellation on the TrainingPipeline. The server makes a best effort to cancel the pipeline, but success is not guaranteed. Clients can use \[PipelineService.GetTrainingPipeline\]\[google.cloud.aiplatform.v1.PipelineService.GetTrainingPipeline\] or other methods to check whether the cancellation succeeded or whether the pipeline completed despite cancellation. On successful cancellation, the TrainingPipeline is not deleted; instead it becomes a pipeline with a \[TrainingPipeline.error\]\[google.cloud.aiplatform.v1.TrainingPipeline.error\] value with a \[google.rpc.Status.code\]\[google.rpc.Status.code\] of 1, corresponding to `Code.CANCELLED`, and \[TrainingPipeline.state\]\[google.cloud.aiplatform.v1.TrainingPipeline.state\] is set to `CANCELLED`.

**Parameters**

**Name**

**Description**

`request`

`[CancelTrainingPipelineRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.CancelTrainingPipelineRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
CancelTrainingPipelineRequest request = new CancelTrainingPipelineRequest
{
    TrainingPipelineName = TrainingPipelineName.FromProjectLocationTrainingPipeline("[PROJECT]", "[LOCATION]", "[TRAINING_PIPELINE]"),
};
// Make the request
await pipelineServiceClient.CancelTrainingPipelineAsync(request);
```

### CancelTrainingPipelineAsync(CancelTrainingPipelineRequest, CancellationToken)

```
public virtual Task CancelTrainingPipelineAsync(CancelTrainingPipelineRequest request, CancellationToken cancellationToken)
```

Cancels a TrainingPipeline. Starts asynchronous cancellation on the TrainingPipeline. The server makes a best effort to cancel the pipeline, but success is not guaranteed. Clients can use \[PipelineService.GetTrainingPipeline\]\[google.cloud.aiplatform.v1.PipelineService.GetTrainingPipeline\] or other methods to check whether the cancellation succeeded or whether the pipeline completed despite cancellation. On successful cancellation, the TrainingPipeline is not deleted; instead it becomes a pipeline with a \[TrainingPipeline.error\]\[google.cloud.aiplatform.v1.TrainingPipeline.error\] value with a \[google.rpc.Status.code\]\[google.rpc.Status.code\] of 1, corresponding to `Code.CANCELLED`, and \[TrainingPipeline.state\]\[google.cloud.aiplatform.v1.TrainingPipeline.state\] is set to `CANCELLED`.

**Parameters**

**Name**

**Description**

`request`

`[CancelTrainingPipelineRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.CancelTrainingPipelineRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
CancelTrainingPipelineRequest request = new CancelTrainingPipelineRequest
{
    TrainingPipelineName = TrainingPipelineName.FromProjectLocationTrainingPipeline("[PROJECT]", "[LOCATION]", "[TRAINING_PIPELINE]"),
};
// Make the request
await pipelineServiceClient.CancelTrainingPipelineAsync(request);
```

### CancelTrainingPipelineAsync(TrainingPipelineName, CallSettings)

```
public virtual Task CancelTrainingPipelineAsync(TrainingPipelineName name, CallSettings callSettings = null)
```

Cancels a TrainingPipeline. Starts asynchronous cancellation on the TrainingPipeline. The server makes a best effort to cancel the pipeline, but success is not guaranteed. Clients can use \[PipelineService.GetTrainingPipeline\]\[google.cloud.aiplatform.v1.PipelineService.GetTrainingPipeline\] or other methods to check whether the cancellation succeeded or whether the pipeline completed despite cancellation. On successful cancellation, the TrainingPipeline is not deleted; instead it becomes a pipeline with a \[TrainingPipeline.error\]\[google.cloud.aiplatform.v1.TrainingPipeline.error\] value with a \[google.rpc.Status.code\]\[google.rpc.Status.code\] of 1, corresponding to `Code.CANCELLED`, and \[TrainingPipeline.state\]\[google.cloud.aiplatform.v1.TrainingPipeline.state\] is set to `CANCELLED`.

**Parameters**

**Name**

**Description**

`name`

`[TrainingPipelineName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipelineName)`  

Required. The name of the TrainingPipeline to cancel. Format: `projects/{project}/locations/{location}/trainingPipelines/{training_pipeline}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
TrainingPipelineName name = TrainingPipelineName.FromProjectLocationTrainingPipeline("[PROJECT]", "[LOCATION]", "[TRAINING_PIPELINE]");
// Make the request
await pipelineServiceClient.CancelTrainingPipelineAsync(name);
```

### CancelTrainingPipelineAsync(TrainingPipelineName, CancellationToken)

```
public virtual Task CancelTrainingPipelineAsync(TrainingPipelineName name, CancellationToken cancellationToken)
```

Cancels a TrainingPipeline. Starts asynchronous cancellation on the TrainingPipeline. The server makes a best effort to cancel the pipeline, but success is not guaranteed. Clients can use \[PipelineService.GetTrainingPipeline\]\[google.cloud.aiplatform.v1.PipelineService.GetTrainingPipeline\] or other methods to check whether the cancellation succeeded or whether the pipeline completed despite cancellation. On successful cancellation, the TrainingPipeline is not deleted; instead it becomes a pipeline with a \[TrainingPipeline.error\]\[google.cloud.aiplatform.v1.TrainingPipeline.error\] value with a \[google.rpc.Status.code\]\[google.rpc.Status.code\] of 1, corresponding to `Code.CANCELLED`, and \[TrainingPipeline.state\]\[google.cloud.aiplatform.v1.TrainingPipeline.state\] is set to `CANCELLED`.

**Parameters**

**Name**

**Description**

`name`

`[TrainingPipelineName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipelineName)`  

Required. The name of the TrainingPipeline to cancel. Format: `projects/{project}/locations/{location}/trainingPipelines/{training_pipeline}`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
TrainingPipelineName name = TrainingPipelineName.FromProjectLocationTrainingPipeline("[PROJECT]", "[LOCATION]", "[TRAINING_PIPELINE]");
// Make the request
await pipelineServiceClient.CancelTrainingPipelineAsync(name);
```

### CancelTrainingPipelineAsync(string, CallSettings)

```
public virtual Task CancelTrainingPipelineAsync(string name, CallSettings callSettings = null)
```

Cancels a TrainingPipeline. Starts asynchronous cancellation on the TrainingPipeline. The server makes a best effort to cancel the pipeline, but success is not guaranteed. Clients can use \[PipelineService.GetTrainingPipeline\]\[google.cloud.aiplatform.v1.PipelineService.GetTrainingPipeline\] or other methods to check whether the cancellation succeeded or whether the pipeline completed despite cancellation. On successful cancellation, the TrainingPipeline is not deleted; instead it becomes a pipeline with a \[TrainingPipeline.error\]\[google.cloud.aiplatform.v1.TrainingPipeline.error\] value with a \[google.rpc.Status.code\]\[google.rpc.Status.code\] of 1, corresponding to `Code.CANCELLED`, and \[TrainingPipeline.state\]\[google.cloud.aiplatform.v1.TrainingPipeline.state\] is set to `CANCELLED`.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the TrainingPipeline to cancel. Format: `projects/{project}/locations/{location}/trainingPipelines/{training_pipeline}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/trainingPipelines/[TRAINING_PIPELINE]";
// Make the request
await pipelineServiceClient.CancelTrainingPipelineAsync(name);
```

### CancelTrainingPipelineAsync(string, CancellationToken)

```
public virtual Task CancelTrainingPipelineAsync(string name, CancellationToken cancellationToken)
```

Cancels a TrainingPipeline. Starts asynchronous cancellation on the TrainingPipeline. The server makes a best effort to cancel the pipeline, but success is not guaranteed. Clients can use \[PipelineService.GetTrainingPipeline\]\[google.cloud.aiplatform.v1.PipelineService.GetTrainingPipeline\] or other methods to check whether the cancellation succeeded or whether the pipeline completed despite cancellation. On successful cancellation, the TrainingPipeline is not deleted; instead it becomes a pipeline with a \[TrainingPipeline.error\]\[google.cloud.aiplatform.v1.TrainingPipeline.error\] value with a \[google.rpc.Status.code\]\[google.rpc.Status.code\] of 1, corresponding to `Code.CANCELLED`, and \[TrainingPipeline.state\]\[google.cloud.aiplatform.v1.TrainingPipeline.state\] is set to `CANCELLED`.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the TrainingPipeline to cancel. Format: `projects/{project}/locations/{location}/trainingPipelines/{training_pipeline}`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/trainingPipelines/[TRAINING_PIPELINE]";
// Make the request
await pipelineServiceClient.CancelTrainingPipelineAsync(name);
```

### Create()

```
public static PipelineServiceClient Create()
```

Synchronously creates a [PipelineServiceClient](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineServiceClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [PipelineServiceClientBuilder](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineServiceClientBuilder).

**Returns**

**Type**

**Description**

`[PipelineServiceClient](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineServiceClient)`

The created [PipelineServiceClient](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineServiceClient).

### CreateAsync(CancellationToken)

```
public static Task<PipelineServiceClient> CreateAsync(CancellationToken cancellationToken = default)
```

Asynchronously creates a [PipelineServiceClient](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineServiceClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [PipelineServiceClientBuilder](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineServiceClientBuilder).

**Parameter**

**Name**

**Description**

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

The [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use while creating the client.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[PipelineServiceClient](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineServiceClient)`

The task representing the created [PipelineServiceClient](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineServiceClient).

### CreatePipelineJob(LocationName, PipelineJob, string, CallSettings)

```
public virtual PipelineJob CreatePipelineJob(LocationName parent, PipelineJob pipelineJob, string pipelineJobId, CallSettings callSettings = null)
```

Creates a PipelineJob. A PipelineJob will run immediately when created.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. The resource name of the Location to create the PipelineJob in. Format: `projects/{project}/locations/{location}`

`pipelineJob`

`[PipelineJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJob)`  

Required. The PipelineJob to create.

`pipelineJobId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The ID to use for the PipelineJob, which will become the final component of the PipelineJob name. If not provided, an ID will be automatically generated.

This value should be less than 128 characters, and valid characters are `/[a-z][0-9]-/`.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PipelineJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJob)`

The RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = PipelineServiceClient.Create();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
PipelineJob pipelineJob = new PipelineJob();
string pipelineJobId = "";
// Make the request
PipelineJob response = pipelineServiceClient.CreatePipelineJob(parent, pipelineJob, pipelineJobId);
```

### CreatePipelineJob(CreatePipelineJobRequest, CallSettings)

```
public virtual PipelineJob CreatePipelineJob(CreatePipelineJobRequest request, CallSettings callSettings = null)
```

Creates a PipelineJob. A PipelineJob will run immediately when created.

**Parameters**

**Name**

**Description**

`request`

`[CreatePipelineJobRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.CreatePipelineJobRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PipelineJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJob)`

The RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = PipelineServiceClient.Create();
// Initialize request argument(s)
CreatePipelineJobRequest request = new CreatePipelineJobRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    PipelineJob = new PipelineJob(),
    PipelineJobId = "",
};
// Make the request
PipelineJob response = pipelineServiceClient.CreatePipelineJob(request);
```

### CreatePipelineJob(string, PipelineJob, string, CallSettings)

```
public virtual PipelineJob CreatePipelineJob(string parent, PipelineJob pipelineJob, string pipelineJobId, CallSettings callSettings = null)
```

Creates a PipelineJob. A PipelineJob will run immediately when created.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the Location to create the PipelineJob in. Format: `projects/{project}/locations/{location}`

`pipelineJob`

`[PipelineJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJob)`  

Required. The PipelineJob to create.

`pipelineJobId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The ID to use for the PipelineJob, which will become the final component of the PipelineJob name. If not provided, an ID will be automatically generated.

This value should be less than 128 characters, and valid characters are `/[a-z][0-9]-/`.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PipelineJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJob)`

The RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = PipelineServiceClient.Create();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
PipelineJob pipelineJob = new PipelineJob();
string pipelineJobId = "";
// Make the request
PipelineJob response = pipelineServiceClient.CreatePipelineJob(parent, pipelineJob, pipelineJobId);
```

### CreatePipelineJobAsync(LocationName, PipelineJob, string, CallSettings)

```
public virtual Task<PipelineJob> CreatePipelineJobAsync(LocationName parent, PipelineJob pipelineJob, string pipelineJobId, CallSettings callSettings = null)
```

Creates a PipelineJob. A PipelineJob will run immediately when created.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. The resource name of the Location to create the PipelineJob in. Format: `projects/{project}/locations/{location}`

`pipelineJob`

`[PipelineJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJob)`  

Required. The PipelineJob to create.

`pipelineJobId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The ID to use for the PipelineJob, which will become the final component of the PipelineJob name. If not provided, an ID will be automatically generated.

This value should be less than 128 characters, and valid characters are `/[a-z][0-9]-/`.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[PipelineJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJob)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
PipelineJob pipelineJob = new PipelineJob();
string pipelineJobId = "";
// Make the request
PipelineJob response = await pipelineServiceClient.CreatePipelineJobAsync(parent, pipelineJob, pipelineJobId);
```

### CreatePipelineJobAsync(LocationName, PipelineJob, string, CancellationToken)

```
public virtual Task<PipelineJob> CreatePipelineJobAsync(LocationName parent, PipelineJob pipelineJob, string pipelineJobId, CancellationToken cancellationToken)
```

Creates a PipelineJob. A PipelineJob will run immediately when created.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. The resource name of the Location to create the PipelineJob in. Format: `projects/{project}/locations/{location}`

`pipelineJob`

`[PipelineJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJob)`  

Required. The PipelineJob to create.

`pipelineJobId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The ID to use for the PipelineJob, which will become the final component of the PipelineJob name. If not provided, an ID will be automatically generated.

This value should be less than 128 characters, and valid characters are `/[a-z][0-9]-/`.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[PipelineJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJob)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
PipelineJob pipelineJob = new PipelineJob();
string pipelineJobId = "";
// Make the request
PipelineJob response = await pipelineServiceClient.CreatePipelineJobAsync(parent, pipelineJob, pipelineJobId);
```

### CreatePipelineJobAsync(CreatePipelineJobRequest, CallSettings)

```
public virtual Task<PipelineJob> CreatePipelineJobAsync(CreatePipelineJobRequest request, CallSettings callSettings = null)
```

Creates a PipelineJob. A PipelineJob will run immediately when created.

**Parameters**

**Name**

**Description**

`request`

`[CreatePipelineJobRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.CreatePipelineJobRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[PipelineJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJob)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
CreatePipelineJobRequest request = new CreatePipelineJobRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    PipelineJob = new PipelineJob(),
    PipelineJobId = "",
};
// Make the request
PipelineJob response = await pipelineServiceClient.CreatePipelineJobAsync(request);
```

### CreatePipelineJobAsync(CreatePipelineJobRequest, CancellationToken)

```
public virtual Task<PipelineJob> CreatePipelineJobAsync(CreatePipelineJobRequest request, CancellationToken cancellationToken)
```

Creates a PipelineJob. A PipelineJob will run immediately when created.

**Parameters**

**Name**

**Description**

`request`

`[CreatePipelineJobRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.CreatePipelineJobRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[PipelineJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJob)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
CreatePipelineJobRequest request = new CreatePipelineJobRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    PipelineJob = new PipelineJob(),
    PipelineJobId = "",
};
// Make the request
PipelineJob response = await pipelineServiceClient.CreatePipelineJobAsync(request);
```

### CreatePipelineJobAsync(string, PipelineJob, string, CallSettings)

```
public virtual Task<PipelineJob> CreatePipelineJobAsync(string parent, PipelineJob pipelineJob, string pipelineJobId, CallSettings callSettings = null)
```

Creates a PipelineJob. A PipelineJob will run immediately when created.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the Location to create the PipelineJob in. Format: `projects/{project}/locations/{location}`

`pipelineJob`

`[PipelineJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJob)`  

Required. The PipelineJob to create.

`pipelineJobId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The ID to use for the PipelineJob, which will become the final component of the PipelineJob name. If not provided, an ID will be automatically generated.

This value should be less than 128 characters, and valid characters are `/[a-z][0-9]-/`.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[PipelineJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJob)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
PipelineJob pipelineJob = new PipelineJob();
string pipelineJobId = "";
// Make the request
PipelineJob response = await pipelineServiceClient.CreatePipelineJobAsync(parent, pipelineJob, pipelineJobId);
```

### CreatePipelineJobAsync(string, PipelineJob, string, CancellationToken)

```
public virtual Task<PipelineJob> CreatePipelineJobAsync(string parent, PipelineJob pipelineJob, string pipelineJobId, CancellationToken cancellationToken)
```

Creates a PipelineJob. A PipelineJob will run immediately when created.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the Location to create the PipelineJob in. Format: `projects/{project}/locations/{location}`

`pipelineJob`

`[PipelineJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJob)`  

Required. The PipelineJob to create.

`pipelineJobId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The ID to use for the PipelineJob, which will become the final component of the PipelineJob name. If not provided, an ID will be automatically generated.

This value should be less than 128 characters, and valid characters are `/[a-z][0-9]-/`.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[PipelineJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJob)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
PipelineJob pipelineJob = new PipelineJob();
string pipelineJobId = "";
// Make the request
PipelineJob response = await pipelineServiceClient.CreatePipelineJobAsync(parent, pipelineJob, pipelineJobId);
```

### CreateTrainingPipeline(LocationName, TrainingPipeline, CallSettings)

```
public virtual TrainingPipeline CreateTrainingPipeline(LocationName parent, TrainingPipeline trainingPipeline, CallSettings callSettings = null)
```

Creates a TrainingPipeline. A created TrainingPipeline right away will be attempted to be run.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. The resource name of the Location to create the TrainingPipeline in. Format: `projects/{project}/locations/{location}`

`trainingPipeline`

`[TrainingPipeline](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipeline)`  

Required. The TrainingPipeline to create.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[TrainingPipeline](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipeline)`

The RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = PipelineServiceClient.Create();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
TrainingPipeline trainingPipeline = new TrainingPipeline();
// Make the request
TrainingPipeline response = pipelineServiceClient.CreateTrainingPipeline(parent, trainingPipeline);
```

### CreateTrainingPipeline(CreateTrainingPipelineRequest, CallSettings)

```
public virtual TrainingPipeline CreateTrainingPipeline(CreateTrainingPipelineRequest request, CallSettings callSettings = null)
```

Creates a TrainingPipeline. A created TrainingPipeline right away will be attempted to be run.

**Parameters**

**Name**

**Description**

`request`

`[CreateTrainingPipelineRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.CreateTrainingPipelineRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[TrainingPipeline](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipeline)`

The RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = PipelineServiceClient.Create();
// Initialize request argument(s)
CreateTrainingPipelineRequest request = new CreateTrainingPipelineRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    TrainingPipeline = new TrainingPipeline(),
};
// Make the request
TrainingPipeline response = pipelineServiceClient.CreateTrainingPipeline(request);
```

### CreateTrainingPipeline(string, TrainingPipeline, CallSettings)

```
public virtual TrainingPipeline CreateTrainingPipeline(string parent, TrainingPipeline trainingPipeline, CallSettings callSettings = null)
```

Creates a TrainingPipeline. A created TrainingPipeline right away will be attempted to be run.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the Location to create the TrainingPipeline in. Format: `projects/{project}/locations/{location}`

`trainingPipeline`

`[TrainingPipeline](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipeline)`  

Required. The TrainingPipeline to create.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[TrainingPipeline](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipeline)`

The RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = PipelineServiceClient.Create();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
TrainingPipeline trainingPipeline = new TrainingPipeline();
// Make the request
TrainingPipeline response = pipelineServiceClient.CreateTrainingPipeline(parent, trainingPipeline);
```

### CreateTrainingPipelineAsync(LocationName, TrainingPipeline, CallSettings)

```
public virtual Task<TrainingPipeline> CreateTrainingPipelineAsync(LocationName parent, TrainingPipeline trainingPipeline, CallSettings callSettings = null)
```

Creates a TrainingPipeline. A created TrainingPipeline right away will be attempted to be run.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. The resource name of the Location to create the TrainingPipeline in. Format: `projects/{project}/locations/{location}`

`trainingPipeline`

`[TrainingPipeline](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipeline)`  

Required. The TrainingPipeline to create.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[TrainingPipeline](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipeline)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
TrainingPipeline trainingPipeline = new TrainingPipeline();
// Make the request
TrainingPipeline response = await pipelineServiceClient.CreateTrainingPipelineAsync(parent, trainingPipeline);
```

### CreateTrainingPipelineAsync(LocationName, TrainingPipeline, CancellationToken)

```
public virtual Task<TrainingPipeline> CreateTrainingPipelineAsync(LocationName parent, TrainingPipeline trainingPipeline, CancellationToken cancellationToken)
```

Creates a TrainingPipeline. A created TrainingPipeline right away will be attempted to be run.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. The resource name of the Location to create the TrainingPipeline in. Format: `projects/{project}/locations/{location}`

`trainingPipeline`

`[TrainingPipeline](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipeline)`  

Required. The TrainingPipeline to create.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[TrainingPipeline](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipeline)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
TrainingPipeline trainingPipeline = new TrainingPipeline();
// Make the request
TrainingPipeline response = await pipelineServiceClient.CreateTrainingPipelineAsync(parent, trainingPipeline);
```

### CreateTrainingPipelineAsync(CreateTrainingPipelineRequest, CallSettings)

```
public virtual Task<TrainingPipeline> CreateTrainingPipelineAsync(CreateTrainingPipelineRequest request, CallSettings callSettings = null)
```

Creates a TrainingPipeline. A created TrainingPipeline right away will be attempted to be run.

**Parameters**

**Name**

**Description**

`request`

`[CreateTrainingPipelineRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.CreateTrainingPipelineRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[TrainingPipeline](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipeline)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
CreateTrainingPipelineRequest request = new CreateTrainingPipelineRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    TrainingPipeline = new TrainingPipeline(),
};
// Make the request
TrainingPipeline response = await pipelineServiceClient.CreateTrainingPipelineAsync(request);
```

### CreateTrainingPipelineAsync(CreateTrainingPipelineRequest, CancellationToken)

```
public virtual Task<TrainingPipeline> CreateTrainingPipelineAsync(CreateTrainingPipelineRequest request, CancellationToken cancellationToken)
```

Creates a TrainingPipeline. A created TrainingPipeline right away will be attempted to be run.

**Parameters**

**Name**

**Description**

`request`

`[CreateTrainingPipelineRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.CreateTrainingPipelineRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[TrainingPipeline](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipeline)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
CreateTrainingPipelineRequest request = new CreateTrainingPipelineRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    TrainingPipeline = new TrainingPipeline(),
};
// Make the request
TrainingPipeline response = await pipelineServiceClient.CreateTrainingPipelineAsync(request);
```

### CreateTrainingPipelineAsync(string, TrainingPipeline, CallSettings)

```
public virtual Task<TrainingPipeline> CreateTrainingPipelineAsync(string parent, TrainingPipeline trainingPipeline, CallSettings callSettings = null)
```

Creates a TrainingPipeline. A created TrainingPipeline right away will be attempted to be run.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the Location to create the TrainingPipeline in. Format: `projects/{project}/locations/{location}`

`trainingPipeline`

`[TrainingPipeline](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipeline)`  

Required. The TrainingPipeline to create.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[TrainingPipeline](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipeline)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
TrainingPipeline trainingPipeline = new TrainingPipeline();
// Make the request
TrainingPipeline response = await pipelineServiceClient.CreateTrainingPipelineAsync(parent, trainingPipeline);
```

### CreateTrainingPipelineAsync(string, TrainingPipeline, CancellationToken)

```
public virtual Task<TrainingPipeline> CreateTrainingPipelineAsync(string parent, TrainingPipeline trainingPipeline, CancellationToken cancellationToken)
```

Creates a TrainingPipeline. A created TrainingPipeline right away will be attempted to be run.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the Location to create the TrainingPipeline in. Format: `projects/{project}/locations/{location}`

`trainingPipeline`

`[TrainingPipeline](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipeline)`  

Required. The TrainingPipeline to create.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[TrainingPipeline](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipeline)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
TrainingPipeline trainingPipeline = new TrainingPipeline();
// Make the request
TrainingPipeline response = await pipelineServiceClient.CreateTrainingPipelineAsync(parent, trainingPipeline);
```

### DeletePipelineJob(DeletePipelineJobRequest, CallSettings)

```
public virtual Operation<Empty, DeleteOperationMetadata> DeletePipelineJob(DeletePipelineJobRequest request, CallSettings callSettings = null)
```

Deletes a PipelineJob.

**Parameters**

**Name**

**Description**

`request`

`[DeletePipelineJobRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeletePipelineJobRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

The RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = PipelineServiceClient.Create();
// Initialize request argument(s)
DeletePipelineJobRequest request = new DeletePipelineJobRequest
{
    PipelineJobName = PipelineJobName.FromProjectLocationPipelineJob("[PROJECT]", "[LOCATION]", "[PIPELINE_JOB]"),
};
// Make the request
Operation<Empty, DeleteOperationMetadata> response = pipelineServiceClient.DeletePipelineJob(request);

// Poll until the returned long-running operation is complete
Operation<Empty, DeleteOperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, DeleteOperationMetadata> retrievedResponse = pipelineServiceClient.PollOnceDeletePipelineJob(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeletePipelineJob(PipelineJobName, CallSettings)

```
public virtual Operation<Empty, DeleteOperationMetadata> DeletePipelineJob(PipelineJobName name, CallSettings callSettings = null)
```

Deletes a PipelineJob.

**Parameters**

**Name**

**Description**

`name`

`[PipelineJobName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJobName)`  

Required. The name of the PipelineJob resource to be deleted. Format: `projects/{project}/locations/{location}/pipelineJobs/{pipeline_job}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

The RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = PipelineServiceClient.Create();
// Initialize request argument(s)
PipelineJobName name = PipelineJobName.FromProjectLocationPipelineJob("[PROJECT]", "[LOCATION]", "[PIPELINE_JOB]");
// Make the request
Operation<Empty, DeleteOperationMetadata> response = pipelineServiceClient.DeletePipelineJob(name);

// Poll until the returned long-running operation is complete
Operation<Empty, DeleteOperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, DeleteOperationMetadata> retrievedResponse = pipelineServiceClient.PollOnceDeletePipelineJob(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeletePipelineJob(string, CallSettings)

```
public virtual Operation<Empty, DeleteOperationMetadata> DeletePipelineJob(string name, CallSettings callSettings = null)
```

Deletes a PipelineJob.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the PipelineJob resource to be deleted. Format: `projects/{project}/locations/{location}/pipelineJobs/{pipeline_job}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

The RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = PipelineServiceClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/pipelineJobs/[PIPELINE_JOB]";
// Make the request
Operation<Empty, DeleteOperationMetadata> response = pipelineServiceClient.DeletePipelineJob(name);

// Poll until the returned long-running operation is complete
Operation<Empty, DeleteOperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, DeleteOperationMetadata> retrievedResponse = pipelineServiceClient.PollOnceDeletePipelineJob(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeletePipelineJobAsync(DeletePipelineJobRequest, CallSettings)

```
public virtual Task<Operation<Empty, DeleteOperationMetadata>> DeletePipelineJobAsync(DeletePipelineJobRequest request, CallSettings callSettings = null)
```

Deletes a PipelineJob.

**Parameters**

**Name**

**Description**

`request`

`[DeletePipelineJobRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeletePipelineJobRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
DeletePipelineJobRequest request = new DeletePipelineJobRequest
{
    PipelineJobName = PipelineJobName.FromProjectLocationPipelineJob("[PROJECT]", "[LOCATION]", "[PIPELINE_JOB]"),
};
// Make the request
Operation<Empty, DeleteOperationMetadata> response = await pipelineServiceClient.DeletePipelineJobAsync(request);

// Poll until the returned long-running operation is complete
Operation<Empty, DeleteOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, DeleteOperationMetadata> retrievedResponse = await pipelineServiceClient.PollOnceDeletePipelineJobAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeletePipelineJobAsync(DeletePipelineJobRequest, CancellationToken)

```
public virtual Task<Operation<Empty, DeleteOperationMetadata>> DeletePipelineJobAsync(DeletePipelineJobRequest request, CancellationToken cancellationToken)
```

Deletes a PipelineJob.

**Parameters**

**Name**

**Description**

`request`

`[DeletePipelineJobRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeletePipelineJobRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
DeletePipelineJobRequest request = new DeletePipelineJobRequest
{
    PipelineJobName = PipelineJobName.FromProjectLocationPipelineJob("[PROJECT]", "[LOCATION]", "[PIPELINE_JOB]"),
};
// Make the request
Operation<Empty, DeleteOperationMetadata> response = await pipelineServiceClient.DeletePipelineJobAsync(request);

// Poll until the returned long-running operation is complete
Operation<Empty, DeleteOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, DeleteOperationMetadata> retrievedResponse = await pipelineServiceClient.PollOnceDeletePipelineJobAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeletePipelineJobAsync(PipelineJobName, CallSettings)

```
public virtual Task<Operation<Empty, DeleteOperationMetadata>> DeletePipelineJobAsync(PipelineJobName name, CallSettings callSettings = null)
```

Deletes a PipelineJob.

**Parameters**

**Name**

**Description**

`name`

`[PipelineJobName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJobName)`  

Required. The name of the PipelineJob resource to be deleted. Format: `projects/{project}/locations/{location}/pipelineJobs/{pipeline_job}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
PipelineJobName name = PipelineJobName.FromProjectLocationPipelineJob("[PROJECT]", "[LOCATION]", "[PIPELINE_JOB]");
// Make the request
Operation<Empty, DeleteOperationMetadata> response = await pipelineServiceClient.DeletePipelineJobAsync(name);

// Poll until the returned long-running operation is complete
Operation<Empty, DeleteOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, DeleteOperationMetadata> retrievedResponse = await pipelineServiceClient.PollOnceDeletePipelineJobAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeletePipelineJobAsync(PipelineJobName, CancellationToken)

```
public virtual Task<Operation<Empty, DeleteOperationMetadata>> DeletePipelineJobAsync(PipelineJobName name, CancellationToken cancellationToken)
```

Deletes a PipelineJob.

**Parameters**

**Name**

**Description**

`name`

`[PipelineJobName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJobName)`  

Required. The name of the PipelineJob resource to be deleted. Format: `projects/{project}/locations/{location}/pipelineJobs/{pipeline_job}`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
PipelineJobName name = PipelineJobName.FromProjectLocationPipelineJob("[PROJECT]", "[LOCATION]", "[PIPELINE_JOB]");
// Make the request
Operation<Empty, DeleteOperationMetadata> response = await pipelineServiceClient.DeletePipelineJobAsync(name);

// Poll until the returned long-running operation is complete
Operation<Empty, DeleteOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, DeleteOperationMetadata> retrievedResponse = await pipelineServiceClient.PollOnceDeletePipelineJobAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeletePipelineJobAsync(string, CallSettings)

```
public virtual Task<Operation<Empty, DeleteOperationMetadata>> DeletePipelineJobAsync(string name, CallSettings callSettings = null)
```

Deletes a PipelineJob.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the PipelineJob resource to be deleted. Format: `projects/{project}/locations/{location}/pipelineJobs/{pipeline_job}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/pipelineJobs/[PIPELINE_JOB]";
// Make the request
Operation<Empty, DeleteOperationMetadata> response = await pipelineServiceClient.DeletePipelineJobAsync(name);

// Poll until the returned long-running operation is complete
Operation<Empty, DeleteOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, DeleteOperationMetadata> retrievedResponse = await pipelineServiceClient.PollOnceDeletePipelineJobAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeletePipelineJobAsync(string, CancellationToken)

```
public virtual Task<Operation<Empty, DeleteOperationMetadata>> DeletePipelineJobAsync(string name, CancellationToken cancellationToken)
```

Deletes a PipelineJob.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the PipelineJob resource to be deleted. Format: `projects/{project}/locations/{location}/pipelineJobs/{pipeline_job}`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/pipelineJobs/[PIPELINE_JOB]";
// Make the request
Operation<Empty, DeleteOperationMetadata> response = await pipelineServiceClient.DeletePipelineJobAsync(name);

// Poll until the returned long-running operation is complete
Operation<Empty, DeleteOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, DeleteOperationMetadata> retrievedResponse = await pipelineServiceClient.PollOnceDeletePipelineJobAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeleteTrainingPipeline(DeleteTrainingPipelineRequest, CallSettings)

```
public virtual Operation<Empty, DeleteOperationMetadata> DeleteTrainingPipeline(DeleteTrainingPipelineRequest request, CallSettings callSettings = null)
```

Deletes a TrainingPipeline.

**Parameters**

**Name**

**Description**

`request`

`[DeleteTrainingPipelineRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeleteTrainingPipelineRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

The RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = PipelineServiceClient.Create();
// Initialize request argument(s)
DeleteTrainingPipelineRequest request = new DeleteTrainingPipelineRequest
{
    TrainingPipelineName = TrainingPipelineName.FromProjectLocationTrainingPipeline("[PROJECT]", "[LOCATION]", "[TRAINING_PIPELINE]"),
};
// Make the request
Operation<Empty, DeleteOperationMetadata> response = pipelineServiceClient.DeleteTrainingPipeline(request);

// Poll until the returned long-running operation is complete
Operation<Empty, DeleteOperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, DeleteOperationMetadata> retrievedResponse = pipelineServiceClient.PollOnceDeleteTrainingPipeline(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeleteTrainingPipeline(TrainingPipelineName, CallSettings)

```
public virtual Operation<Empty, DeleteOperationMetadata> DeleteTrainingPipeline(TrainingPipelineName name, CallSettings callSettings = null)
```

Deletes a TrainingPipeline.

**Parameters**

**Name**

**Description**

`name`

`[TrainingPipelineName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipelineName)`  

Required. The name of the TrainingPipeline resource to be deleted. Format: `projects/{project}/locations/{location}/trainingPipelines/{training_pipeline}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

The RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = PipelineServiceClient.Create();
// Initialize request argument(s)
TrainingPipelineName name = TrainingPipelineName.FromProjectLocationTrainingPipeline("[PROJECT]", "[LOCATION]", "[TRAINING_PIPELINE]");
// Make the request
Operation<Empty, DeleteOperationMetadata> response = pipelineServiceClient.DeleteTrainingPipeline(name);

// Poll until the returned long-running operation is complete
Operation<Empty, DeleteOperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, DeleteOperationMetadata> retrievedResponse = pipelineServiceClient.PollOnceDeleteTrainingPipeline(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeleteTrainingPipeline(string, CallSettings)

```
public virtual Operation<Empty, DeleteOperationMetadata> DeleteTrainingPipeline(string name, CallSettings callSettings = null)
```

Deletes a TrainingPipeline.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the TrainingPipeline resource to be deleted. Format: `projects/{project}/locations/{location}/trainingPipelines/{training_pipeline}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

The RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = PipelineServiceClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/trainingPipelines/[TRAINING_PIPELINE]";
// Make the request
Operation<Empty, DeleteOperationMetadata> response = pipelineServiceClient.DeleteTrainingPipeline(name);

// Poll until the returned long-running operation is complete
Operation<Empty, DeleteOperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, DeleteOperationMetadata> retrievedResponse = pipelineServiceClient.PollOnceDeleteTrainingPipeline(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeleteTrainingPipelineAsync(DeleteTrainingPipelineRequest, CallSettings)

```
public virtual Task<Operation<Empty, DeleteOperationMetadata>> DeleteTrainingPipelineAsync(DeleteTrainingPipelineRequest request, CallSettings callSettings = null)
```

Deletes a TrainingPipeline.

**Parameters**

**Name**

**Description**

`request`

`[DeleteTrainingPipelineRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeleteTrainingPipelineRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
DeleteTrainingPipelineRequest request = new DeleteTrainingPipelineRequest
{
    TrainingPipelineName = TrainingPipelineName.FromProjectLocationTrainingPipeline("[PROJECT]", "[LOCATION]", "[TRAINING_PIPELINE]"),
};
// Make the request
Operation<Empty, DeleteOperationMetadata> response = await pipelineServiceClient.DeleteTrainingPipelineAsync(request);

// Poll until the returned long-running operation is complete
Operation<Empty, DeleteOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, DeleteOperationMetadata> retrievedResponse = await pipelineServiceClient.PollOnceDeleteTrainingPipelineAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeleteTrainingPipelineAsync(DeleteTrainingPipelineRequest, CancellationToken)

```
public virtual Task<Operation<Empty, DeleteOperationMetadata>> DeleteTrainingPipelineAsync(DeleteTrainingPipelineRequest request, CancellationToken cancellationToken)
```

Deletes a TrainingPipeline.

**Parameters**

**Name**

**Description**

`request`

`[DeleteTrainingPipelineRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeleteTrainingPipelineRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
DeleteTrainingPipelineRequest request = new DeleteTrainingPipelineRequest
{
    TrainingPipelineName = TrainingPipelineName.FromProjectLocationTrainingPipeline("[PROJECT]", "[LOCATION]", "[TRAINING_PIPELINE]"),
};
// Make the request
Operation<Empty, DeleteOperationMetadata> response = await pipelineServiceClient.DeleteTrainingPipelineAsync(request);

// Poll until the returned long-running operation is complete
Operation<Empty, DeleteOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, DeleteOperationMetadata> retrievedResponse = await pipelineServiceClient.PollOnceDeleteTrainingPipelineAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeleteTrainingPipelineAsync(TrainingPipelineName, CallSettings)

```
public virtual Task<Operation<Empty, DeleteOperationMetadata>> DeleteTrainingPipelineAsync(TrainingPipelineName name, CallSettings callSettings = null)
```

Deletes a TrainingPipeline.

**Parameters**

**Name**

**Description**

`name`

`[TrainingPipelineName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipelineName)`  

Required. The name of the TrainingPipeline resource to be deleted. Format: `projects/{project}/locations/{location}/trainingPipelines/{training_pipeline}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
TrainingPipelineName name = TrainingPipelineName.FromProjectLocationTrainingPipeline("[PROJECT]", "[LOCATION]", "[TRAINING_PIPELINE]");
// Make the request
Operation<Empty, DeleteOperationMetadata> response = await pipelineServiceClient.DeleteTrainingPipelineAsync(name);

// Poll until the returned long-running operation is complete
Operation<Empty, DeleteOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, DeleteOperationMetadata> retrievedResponse = await pipelineServiceClient.PollOnceDeleteTrainingPipelineAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeleteTrainingPipelineAsync(TrainingPipelineName, CancellationToken)

```
public virtual Task<Operation<Empty, DeleteOperationMetadata>> DeleteTrainingPipelineAsync(TrainingPipelineName name, CancellationToken cancellationToken)
```

Deletes a TrainingPipeline.

**Parameters**

**Name**

**Description**

`name`

`[TrainingPipelineName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipelineName)`  

Required. The name of the TrainingPipeline resource to be deleted. Format: `projects/{project}/locations/{location}/trainingPipelines/{training_pipeline}`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
TrainingPipelineName name = TrainingPipelineName.FromProjectLocationTrainingPipeline("[PROJECT]", "[LOCATION]", "[TRAINING_PIPELINE]");
// Make the request
Operation<Empty, DeleteOperationMetadata> response = await pipelineServiceClient.DeleteTrainingPipelineAsync(name);

// Poll until the returned long-running operation is complete
Operation<Empty, DeleteOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, DeleteOperationMetadata> retrievedResponse = await pipelineServiceClient.PollOnceDeleteTrainingPipelineAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeleteTrainingPipelineAsync(string, CallSettings)

```
public virtual Task<Operation<Empty, DeleteOperationMetadata>> DeleteTrainingPipelineAsync(string name, CallSettings callSettings = null)
```

Deletes a TrainingPipeline.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the TrainingPipeline resource to be deleted. Format: `projects/{project}/locations/{location}/trainingPipelines/{training_pipeline}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/trainingPipelines/[TRAINING_PIPELINE]";
// Make the request
Operation<Empty, DeleteOperationMetadata> response = await pipelineServiceClient.DeleteTrainingPipelineAsync(name);

// Poll until the returned long-running operation is complete
Operation<Empty, DeleteOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, DeleteOperationMetadata> retrievedResponse = await pipelineServiceClient.PollOnceDeleteTrainingPipelineAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeleteTrainingPipelineAsync(string, CancellationToken)

```
public virtual Task<Operation<Empty, DeleteOperationMetadata>> DeleteTrainingPipelineAsync(string name, CancellationToken cancellationToken)
```

Deletes a TrainingPipeline.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the TrainingPipeline resource to be deleted. Format: `projects/{project}/locations/{location}/trainingPipelines/{training_pipeline}`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/trainingPipelines/[TRAINING_PIPELINE]";
// Make the request
Operation<Empty, DeleteOperationMetadata> response = await pipelineServiceClient.DeleteTrainingPipelineAsync(name);

// Poll until the returned long-running operation is complete
Operation<Empty, DeleteOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, DeleteOperationMetadata> retrievedResponse = await pipelineServiceClient.PollOnceDeleteTrainingPipelineAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### GetPipelineJob(GetPipelineJobRequest, CallSettings)

```
public virtual PipelineJob GetPipelineJob(GetPipelineJobRequest request, CallSettings callSettings = null)
```

Gets a PipelineJob.

**Parameters**

**Name**

**Description**

`request`

`[GetPipelineJobRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.GetPipelineJobRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PipelineJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJob)`

The RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = PipelineServiceClient.Create();
// Initialize request argument(s)
GetPipelineJobRequest request = new GetPipelineJobRequest
{
    PipelineJobName = PipelineJobName.FromProjectLocationPipelineJob("[PROJECT]", "[LOCATION]", "[PIPELINE_JOB]"),
};
// Make the request
PipelineJob response = pipelineServiceClient.GetPipelineJob(request);
```

### GetPipelineJob(PipelineJobName, CallSettings)

```
public virtual PipelineJob GetPipelineJob(PipelineJobName name, CallSettings callSettings = null)
```

Gets a PipelineJob.

**Parameters**

**Name**

**Description**

`name`

`[PipelineJobName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJobName)`  

Required. The name of the PipelineJob resource. Format: `projects/{project}/locations/{location}/pipelineJobs/{pipeline_job}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PipelineJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJob)`

The RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = PipelineServiceClient.Create();
// Initialize request argument(s)
PipelineJobName name = PipelineJobName.FromProjectLocationPipelineJob("[PROJECT]", "[LOCATION]", "[PIPELINE_JOB]");
// Make the request
PipelineJob response = pipelineServiceClient.GetPipelineJob(name);
```

### GetPipelineJob(string, CallSettings)

```
public virtual PipelineJob GetPipelineJob(string name, CallSettings callSettings = null)
```

Gets a PipelineJob.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the PipelineJob resource. Format: `projects/{project}/locations/{location}/pipelineJobs/{pipeline_job}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PipelineJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJob)`

The RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = PipelineServiceClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/pipelineJobs/[PIPELINE_JOB]";
// Make the request
PipelineJob response = pipelineServiceClient.GetPipelineJob(name);
```

### GetPipelineJobAsync(GetPipelineJobRequest, CallSettings)

```
public virtual Task<PipelineJob> GetPipelineJobAsync(GetPipelineJobRequest request, CallSettings callSettings = null)
```

Gets a PipelineJob.

**Parameters**

**Name**

**Description**

`request`

`[GetPipelineJobRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.GetPipelineJobRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[PipelineJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJob)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
GetPipelineJobRequest request = new GetPipelineJobRequest
{
    PipelineJobName = PipelineJobName.FromProjectLocationPipelineJob("[PROJECT]", "[LOCATION]", "[PIPELINE_JOB]"),
};
// Make the request
PipelineJob response = await pipelineServiceClient.GetPipelineJobAsync(request);
```

### GetPipelineJobAsync(GetPipelineJobRequest, CancellationToken)

```
public virtual Task<PipelineJob> GetPipelineJobAsync(GetPipelineJobRequest request, CancellationToken cancellationToken)
```

Gets a PipelineJob.

**Parameters**

**Name**

**Description**

`request`

`[GetPipelineJobRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.GetPipelineJobRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[PipelineJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJob)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
GetPipelineJobRequest request = new GetPipelineJobRequest
{
    PipelineJobName = PipelineJobName.FromProjectLocationPipelineJob("[PROJECT]", "[LOCATION]", "[PIPELINE_JOB]"),
};
// Make the request
PipelineJob response = await pipelineServiceClient.GetPipelineJobAsync(request);
```

### GetPipelineJobAsync(PipelineJobName, CallSettings)

```
public virtual Task<PipelineJob> GetPipelineJobAsync(PipelineJobName name, CallSettings callSettings = null)
```

Gets a PipelineJob.

**Parameters**

**Name**

**Description**

`name`

`[PipelineJobName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJobName)`  

Required. The name of the PipelineJob resource. Format: `projects/{project}/locations/{location}/pipelineJobs/{pipeline_job}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[PipelineJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJob)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
PipelineJobName name = PipelineJobName.FromProjectLocationPipelineJob("[PROJECT]", "[LOCATION]", "[PIPELINE_JOB]");
// Make the request
PipelineJob response = await pipelineServiceClient.GetPipelineJobAsync(name);
```

### GetPipelineJobAsync(PipelineJobName, CancellationToken)

```
public virtual Task<PipelineJob> GetPipelineJobAsync(PipelineJobName name, CancellationToken cancellationToken)
```

Gets a PipelineJob.

**Parameters**

**Name**

**Description**

`name`

`[PipelineJobName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJobName)`  

Required. The name of the PipelineJob resource. Format: `projects/{project}/locations/{location}/pipelineJobs/{pipeline_job}`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[PipelineJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJob)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
PipelineJobName name = PipelineJobName.FromProjectLocationPipelineJob("[PROJECT]", "[LOCATION]", "[PIPELINE_JOB]");
// Make the request
PipelineJob response = await pipelineServiceClient.GetPipelineJobAsync(name);
```

### GetPipelineJobAsync(string, CallSettings)

```
public virtual Task<PipelineJob> GetPipelineJobAsync(string name, CallSettings callSettings = null)
```

Gets a PipelineJob.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the PipelineJob resource. Format: `projects/{project}/locations/{location}/pipelineJobs/{pipeline_job}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[PipelineJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJob)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/pipelineJobs/[PIPELINE_JOB]";
// Make the request
PipelineJob response = await pipelineServiceClient.GetPipelineJobAsync(name);
```

### GetPipelineJobAsync(string, CancellationToken)

```
public virtual Task<PipelineJob> GetPipelineJobAsync(string name, CancellationToken cancellationToken)
```

Gets a PipelineJob.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the PipelineJob resource. Format: `projects/{project}/locations/{location}/pipelineJobs/{pipeline_job}`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[PipelineJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJob)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/pipelineJobs/[PIPELINE_JOB]";
// Make the request
PipelineJob response = await pipelineServiceClient.GetPipelineJobAsync(name);
```

### GetTrainingPipeline(GetTrainingPipelineRequest, CallSettings)

```
public virtual TrainingPipeline GetTrainingPipeline(GetTrainingPipelineRequest request, CallSettings callSettings = null)
```

Gets a TrainingPipeline.

**Parameters**

**Name**

**Description**

`request`

`[GetTrainingPipelineRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.GetTrainingPipelineRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[TrainingPipeline](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipeline)`

The RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = PipelineServiceClient.Create();
// Initialize request argument(s)
GetTrainingPipelineRequest request = new GetTrainingPipelineRequest
{
    TrainingPipelineName = TrainingPipelineName.FromProjectLocationTrainingPipeline("[PROJECT]", "[LOCATION]", "[TRAINING_PIPELINE]"),
};
// Make the request
TrainingPipeline response = pipelineServiceClient.GetTrainingPipeline(request);
```

### GetTrainingPipeline(TrainingPipelineName, CallSettings)

```
public virtual TrainingPipeline GetTrainingPipeline(TrainingPipelineName name, CallSettings callSettings = null)
```

Gets a TrainingPipeline.

**Parameters**

**Name**

**Description**

`name`

`[TrainingPipelineName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipelineName)`  

Required. The name of the TrainingPipeline resource. Format: `projects/{project}/locations/{location}/trainingPipelines/{training_pipeline}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[TrainingPipeline](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipeline)`

The RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = PipelineServiceClient.Create();
// Initialize request argument(s)
TrainingPipelineName name = TrainingPipelineName.FromProjectLocationTrainingPipeline("[PROJECT]", "[LOCATION]", "[TRAINING_PIPELINE]");
// Make the request
TrainingPipeline response = pipelineServiceClient.GetTrainingPipeline(name);
```

### GetTrainingPipeline(string, CallSettings)

```
public virtual TrainingPipeline GetTrainingPipeline(string name, CallSettings callSettings = null)
```

Gets a TrainingPipeline.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the TrainingPipeline resource. Format: `projects/{project}/locations/{location}/trainingPipelines/{training_pipeline}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[TrainingPipeline](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipeline)`

The RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = PipelineServiceClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/trainingPipelines/[TRAINING_PIPELINE]";
// Make the request
TrainingPipeline response = pipelineServiceClient.GetTrainingPipeline(name);
```

### GetTrainingPipelineAsync(GetTrainingPipelineRequest, CallSettings)

```
public virtual Task<TrainingPipeline> GetTrainingPipelineAsync(GetTrainingPipelineRequest request, CallSettings callSettings = null)
```

Gets a TrainingPipeline.

**Parameters**

**Name**

**Description**

`request`

`[GetTrainingPipelineRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.GetTrainingPipelineRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[TrainingPipeline](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipeline)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
GetTrainingPipelineRequest request = new GetTrainingPipelineRequest
{
    TrainingPipelineName = TrainingPipelineName.FromProjectLocationTrainingPipeline("[PROJECT]", "[LOCATION]", "[TRAINING_PIPELINE]"),
};
// Make the request
TrainingPipeline response = await pipelineServiceClient.GetTrainingPipelineAsync(request);
```

### GetTrainingPipelineAsync(GetTrainingPipelineRequest, CancellationToken)

```
public virtual Task<TrainingPipeline> GetTrainingPipelineAsync(GetTrainingPipelineRequest request, CancellationToken cancellationToken)
```

Gets a TrainingPipeline.

**Parameters**

**Name**

**Description**

`request`

`[GetTrainingPipelineRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.GetTrainingPipelineRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[TrainingPipeline](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipeline)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
GetTrainingPipelineRequest request = new GetTrainingPipelineRequest
{
    TrainingPipelineName = TrainingPipelineName.FromProjectLocationTrainingPipeline("[PROJECT]", "[LOCATION]", "[TRAINING_PIPELINE]"),
};
// Make the request
TrainingPipeline response = await pipelineServiceClient.GetTrainingPipelineAsync(request);
```

### GetTrainingPipelineAsync(TrainingPipelineName, CallSettings)

```
public virtual Task<TrainingPipeline> GetTrainingPipelineAsync(TrainingPipelineName name, CallSettings callSettings = null)
```

Gets a TrainingPipeline.

**Parameters**

**Name**

**Description**

`name`

`[TrainingPipelineName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipelineName)`  

Required. The name of the TrainingPipeline resource. Format: `projects/{project}/locations/{location}/trainingPipelines/{training_pipeline}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[TrainingPipeline](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipeline)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
TrainingPipelineName name = TrainingPipelineName.FromProjectLocationTrainingPipeline("[PROJECT]", "[LOCATION]", "[TRAINING_PIPELINE]");
// Make the request
TrainingPipeline response = await pipelineServiceClient.GetTrainingPipelineAsync(name);
```

### GetTrainingPipelineAsync(TrainingPipelineName, CancellationToken)

```
public virtual Task<TrainingPipeline> GetTrainingPipelineAsync(TrainingPipelineName name, CancellationToken cancellationToken)
```

Gets a TrainingPipeline.

**Parameters**

**Name**

**Description**

`name`

`[TrainingPipelineName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipelineName)`  

Required. The name of the TrainingPipeline resource. Format: `projects/{project}/locations/{location}/trainingPipelines/{training_pipeline}`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[TrainingPipeline](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipeline)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
TrainingPipelineName name = TrainingPipelineName.FromProjectLocationTrainingPipeline("[PROJECT]", "[LOCATION]", "[TRAINING_PIPELINE]");
// Make the request
TrainingPipeline response = await pipelineServiceClient.GetTrainingPipelineAsync(name);
```

### GetTrainingPipelineAsync(string, CallSettings)

```
public virtual Task<TrainingPipeline> GetTrainingPipelineAsync(string name, CallSettings callSettings = null)
```

Gets a TrainingPipeline.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the TrainingPipeline resource. Format: `projects/{project}/locations/{location}/trainingPipelines/{training_pipeline}`

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[TrainingPipeline](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipeline)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/trainingPipelines/[TRAINING_PIPELINE]";
// Make the request
TrainingPipeline response = await pipelineServiceClient.GetTrainingPipelineAsync(name);
```

### GetTrainingPipelineAsync(string, CancellationToken)

```
public virtual Task<TrainingPipeline> GetTrainingPipelineAsync(string name, CancellationToken cancellationToken)
```

Gets a TrainingPipeline.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the TrainingPipeline resource. Format: `projects/{project}/locations/{location}/trainingPipelines/{training_pipeline}`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[TrainingPipeline](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipeline)`

A Task containing the RPC response.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/trainingPipelines/[TRAINING_PIPELINE]";
// Make the request
TrainingPipeline response = await pipelineServiceClient.GetTrainingPipelineAsync(name);
```

### ListPipelineJobs(LocationName, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListPipelineJobsResponse, PipelineJob> ListPipelineJobs(LocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists PipelineJobs in a Location.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. The resource name of the Location to list the PipelineJobs from. Format: `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)[ListPipelineJobsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.ListPipelineJobsResponse)[PipelineJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJob)`

A pageable sequence of [PipelineJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJob) resources.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = PipelineServiceClient.Create();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
// Make the request
PagedEnumerable<ListPipelineJobsResponse, PipelineJob> response = pipelineServiceClient.ListPipelineJobs(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (PipelineJob item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListPipelineJobsResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (PipelineJob item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<PipelineJob> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (PipelineJob item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListPipelineJobs(ListPipelineJobsRequest, CallSettings)

```
public virtual PagedEnumerable<ListPipelineJobsResponse, PipelineJob> ListPipelineJobs(ListPipelineJobsRequest request, CallSettings callSettings = null)
```

Lists PipelineJobs in a Location.

**Parameters**

**Name**

**Description**

`request`

`[ListPipelineJobsRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.ListPipelineJobsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)[ListPipelineJobsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.ListPipelineJobsResponse)[PipelineJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJob)`

A pageable sequence of [PipelineJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJob) resources.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = PipelineServiceClient.Create();
// Initialize request argument(s)
ListPipelineJobsRequest request = new ListPipelineJobsRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    Filter = "",
    OrderBy = "",
    ReadMask = new FieldMask(),
};
// Make the request
PagedEnumerable<ListPipelineJobsResponse, PipelineJob> response = pipelineServiceClient.ListPipelineJobs(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (PipelineJob item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListPipelineJobsResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (PipelineJob item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<PipelineJob> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (PipelineJob item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListPipelineJobs(string, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListPipelineJobsResponse, PipelineJob> ListPipelineJobs(string parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists PipelineJobs in a Location.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the Location to list the PipelineJobs from. Format: `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)[ListPipelineJobsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.ListPipelineJobsResponse)[PipelineJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJob)`

A pageable sequence of [PipelineJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJob) resources.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = PipelineServiceClient.Create();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
// Make the request
PagedEnumerable<ListPipelineJobsResponse, PipelineJob> response = pipelineServiceClient.ListPipelineJobs(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (PipelineJob item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListPipelineJobsResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (PipelineJob item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<PipelineJob> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (PipelineJob item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListPipelineJobsAsync(LocationName, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListPipelineJobsResponse, PipelineJob> ListPipelineJobsAsync(LocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists PipelineJobs in a Location.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. The resource name of the Location to list the PipelineJobs from. Format: `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)[ListPipelineJobsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.ListPipelineJobsResponse)[PipelineJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJob)`

A pageable asynchronous sequence of [PipelineJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJob) resources.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
// Make the request
PagedAsyncEnumerable<ListPipelineJobsResponse, PipelineJob> response = pipelineServiceClient.ListPipelineJobsAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((PipelineJob item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListPipelineJobsResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (PipelineJob item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<PipelineJob> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (PipelineJob item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListPipelineJobsAsync(ListPipelineJobsRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListPipelineJobsResponse, PipelineJob> ListPipelineJobsAsync(ListPipelineJobsRequest request, CallSettings callSettings = null)
```

Lists PipelineJobs in a Location.

**Parameters**

**Name**

**Description**

`request`

`[ListPipelineJobsRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.ListPipelineJobsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)[ListPipelineJobsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.ListPipelineJobsResponse)[PipelineJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJob)`

A pageable asynchronous sequence of [PipelineJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJob) resources.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
ListPipelineJobsRequest request = new ListPipelineJobsRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    Filter = "",
    OrderBy = "",
    ReadMask = new FieldMask(),
};
// Make the request
PagedAsyncEnumerable<ListPipelineJobsResponse, PipelineJob> response = pipelineServiceClient.ListPipelineJobsAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((PipelineJob item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListPipelineJobsResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (PipelineJob item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<PipelineJob> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (PipelineJob item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListPipelineJobsAsync(string, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListPipelineJobsResponse, PipelineJob> ListPipelineJobsAsync(string parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists PipelineJobs in a Location.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the Location to list the PipelineJobs from. Format: `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)[ListPipelineJobsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.ListPipelineJobsResponse)[PipelineJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJob)`

A pageable asynchronous sequence of [PipelineJob](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineJob) resources.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
// Make the request
PagedAsyncEnumerable<ListPipelineJobsResponse, PipelineJob> response = pipelineServiceClient.ListPipelineJobsAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((PipelineJob item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListPipelineJobsResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (PipelineJob item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<PipelineJob> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (PipelineJob item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListTrainingPipelines(LocationName, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListTrainingPipelinesResponse, TrainingPipeline> ListTrainingPipelines(LocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists TrainingPipelines in a Location.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. The resource name of the Location to list the TrainingPipelines from. Format: `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)[ListTrainingPipelinesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.ListTrainingPipelinesResponse)[TrainingPipeline](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipeline)`

A pageable sequence of [TrainingPipeline](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipeline) resources.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = PipelineServiceClient.Create();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
// Make the request
PagedEnumerable<ListTrainingPipelinesResponse, TrainingPipeline> response = pipelineServiceClient.ListTrainingPipelines(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (TrainingPipeline item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListTrainingPipelinesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (TrainingPipeline item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<TrainingPipeline> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (TrainingPipeline item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListTrainingPipelines(ListTrainingPipelinesRequest, CallSettings)

```
public virtual PagedEnumerable<ListTrainingPipelinesResponse, TrainingPipeline> ListTrainingPipelines(ListTrainingPipelinesRequest request, CallSettings callSettings = null)
```

Lists TrainingPipelines in a Location.

**Parameters**

**Name**

**Description**

`request`

`[ListTrainingPipelinesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.ListTrainingPipelinesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)[ListTrainingPipelinesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.ListTrainingPipelinesResponse)[TrainingPipeline](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipeline)`

A pageable sequence of [TrainingPipeline](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipeline) resources.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = PipelineServiceClient.Create();
// Initialize request argument(s)
ListTrainingPipelinesRequest request = new ListTrainingPipelinesRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    Filter = "",
    ReadMask = new FieldMask(),
};
// Make the request
PagedEnumerable<ListTrainingPipelinesResponse, TrainingPipeline> response = pipelineServiceClient.ListTrainingPipelines(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (TrainingPipeline item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListTrainingPipelinesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (TrainingPipeline item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<TrainingPipeline> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (TrainingPipeline item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListTrainingPipelines(string, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListTrainingPipelinesResponse, TrainingPipeline> ListTrainingPipelines(string parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists TrainingPipelines in a Location.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the Location to list the TrainingPipelines from. Format: `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)[ListTrainingPipelinesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.ListTrainingPipelinesResponse)[TrainingPipeline](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipeline)`

A pageable sequence of [TrainingPipeline](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipeline) resources.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = PipelineServiceClient.Create();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
// Make the request
PagedEnumerable<ListTrainingPipelinesResponse, TrainingPipeline> response = pipelineServiceClient.ListTrainingPipelines(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (TrainingPipeline item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListTrainingPipelinesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (TrainingPipeline item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<TrainingPipeline> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (TrainingPipeline item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListTrainingPipelinesAsync(LocationName, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListTrainingPipelinesResponse, TrainingPipeline> ListTrainingPipelinesAsync(LocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists TrainingPipelines in a Location.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. The resource name of the Location to list the TrainingPipelines from. Format: `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)[ListTrainingPipelinesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.ListTrainingPipelinesResponse)[TrainingPipeline](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipeline)`

A pageable asynchronous sequence of [TrainingPipeline](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipeline) resources.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
// Make the request
PagedAsyncEnumerable<ListTrainingPipelinesResponse, TrainingPipeline> response = pipelineServiceClient.ListTrainingPipelinesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((TrainingPipeline item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListTrainingPipelinesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (TrainingPipeline item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<TrainingPipeline> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (TrainingPipeline item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListTrainingPipelinesAsync(ListTrainingPipelinesRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListTrainingPipelinesResponse, TrainingPipeline> ListTrainingPipelinesAsync(ListTrainingPipelinesRequest request, CallSettings callSettings = null)
```

Lists TrainingPipelines in a Location.

**Parameters**

**Name**

**Description**

`request`

`[ListTrainingPipelinesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.ListTrainingPipelinesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)[ListTrainingPipelinesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.ListTrainingPipelinesResponse)[TrainingPipeline](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipeline)`

A pageable asynchronous sequence of [TrainingPipeline](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipeline) resources.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
ListTrainingPipelinesRequest request = new ListTrainingPipelinesRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    Filter = "",
    ReadMask = new FieldMask(),
};
// Make the request
PagedAsyncEnumerable<ListTrainingPipelinesResponse, TrainingPipeline> response = pipelineServiceClient.ListTrainingPipelinesAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((TrainingPipeline item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListTrainingPipelinesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (TrainingPipeline item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<TrainingPipeline> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (TrainingPipeline item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListTrainingPipelinesAsync(string, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListTrainingPipelinesResponse, TrainingPipeline> ListTrainingPipelinesAsync(string parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists TrainingPipelines in a Location.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the Location to list the TrainingPipelines from. Format: `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)[ListTrainingPipelinesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.ListTrainingPipelinesResponse)[TrainingPipeline](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipeline)`

A pageable asynchronous sequence of [TrainingPipeline](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.TrainingPipeline) resources.

**Example**

```
// Create client
PipelineServiceClient pipelineServiceClient = await PipelineServiceClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
// Make the request
PagedAsyncEnumerable<ListTrainingPipelinesResponse, TrainingPipeline> response = pipelineServiceClient.ListTrainingPipelinesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((TrainingPipeline item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListTrainingPipelinesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (TrainingPipeline item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<TrainingPipeline> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (TrainingPipeline item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### PollOnceBatchCancelPipelineJobs(string, CallSettings)

```
public virtual Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata> PollOnceBatchCancelPipelineJobs(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `BatchCancelPipelineJobs`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[BatchCancelPipelineJobsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchCancelPipelineJobsResponse)[BatchCancelPipelineJobsOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchCancelPipelineJobsOperationMetadata)`

The result of polling the operation.

### PollOnceBatchCancelPipelineJobsAsync(string, CallSettings)

```
public virtual Task<Operation<BatchCancelPipelineJobsResponse, BatchCancelPipelineJobsOperationMetadata>> PollOnceBatchCancelPipelineJobsAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `BatchCancelPipelineJobs`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[BatchCancelPipelineJobsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchCancelPipelineJobsResponse)[BatchCancelPipelineJobsOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchCancelPipelineJobsOperationMetadata)`

A task representing the result of polling the operation.

### PollOnceBatchDeletePipelineJobs(string, CallSettings)

```
public virtual Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata> PollOnceBatchDeletePipelineJobs(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `BatchDeletePipelineJobs`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[BatchDeletePipelineJobsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchDeletePipelineJobsResponse)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

The result of polling the operation.

### PollOnceBatchDeletePipelineJobsAsync(string, CallSettings)

```
public virtual Task<Operation<BatchDeletePipelineJobsResponse, DeleteOperationMetadata>> PollOnceBatchDeletePipelineJobsAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `BatchDeletePipelineJobs`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[BatchDeletePipelineJobsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.BatchDeletePipelineJobsResponse)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

A task representing the result of polling the operation.

### PollOnceDeletePipelineJob(string, CallSettings)

```
public virtual Operation<Empty, DeleteOperationMetadata> PollOnceDeletePipelineJob(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `DeletePipelineJob` .

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

The result of polling the operation.

### PollOnceDeletePipelineJobAsync(string, CallSettings)

```
public virtual Task<Operation<Empty, DeleteOperationMetadata>> PollOnceDeletePipelineJobAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `DeletePipelineJob`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

A task representing the result of polling the operation.

### PollOnceDeleteTrainingPipeline(string, CallSettings)

```
public virtual Operation<Empty, DeleteOperationMetadata> PollOnceDeleteTrainingPipeline(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `DeleteTrainingPipeline`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

The result of polling the operation.

### PollOnceDeleteTrainingPipelineAsync(string, CallSettings)

```
public virtual Task<Operation<Empty, DeleteOperationMetadata>> PollOnceDeleteTrainingPipelineAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `DeleteTrainingPipeline`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

A task representing the result of polling the operation.

### ShutdownDefaultChannelsAsync()

```
public static Task ShutdownDefaultChannelsAsync()
```

Shuts down any channels automatically created by [Create()](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineServiceClient#Google_Cloud_AIPlatform_V1_PipelineServiceClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineServiceClient#Google_Cloud_AIPlatform_V1_PipelineServiceClient_CreateAsync_System_Threading_CancellationToken_). Channels which weren't automatically created are not affected.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A task representing the asynchronous shutdown operation.

**Remarks**

After calling this method, further calls to [Create()](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineServiceClient#Google_Cloud_AIPlatform_V1_PipelineServiceClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.19.0/Google.Cloud.AIPlatform.V1.PipelineServiceClient#Google_Cloud_AIPlatform_V1_PipelineServiceClient_CreateAsync_System_Threading_CancellationToken_) will create new channels, which could in turn be shut down by another call to this method.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
