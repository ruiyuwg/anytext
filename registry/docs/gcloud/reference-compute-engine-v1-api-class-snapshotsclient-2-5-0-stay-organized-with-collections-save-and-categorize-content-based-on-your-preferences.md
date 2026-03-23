-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class SnapshotsClient (2.5.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public abstract class SnapshotsClient
```

Reference documentation and code samples for the Compute Engine v1 API class SnapshotsClient.

Snapshots client wrapper, for convenient use.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> SnapshotsClient

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Derived Types

[SnapshotsClientImpl](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SnapshotsClientImpl)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Remarks

The Snapshots API.

## Properties

### DefaultEndpoint

```
public static string DefaultEndpoint { get; }
```

The default endpoint for the Snapshots service, which is a host of "compute.googleapis.com" and a port of 443.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### DefaultScopes

```
public static IReadOnlyList<string> DefaultScopes { get; }
```

The default Snapshots scopes.

**Property Value**

**Type**

**Description**

`[IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)<[String](https://learn.microsoft.com/dotnet/api/system.string)>`

**Remarks**

The default Snapshots scopes are:

-   [https://www.googleapis.com/auth/compute](https://www.googleapis.com/auth/compute)
-   [https://www.googleapis.com/auth/cloud-platform](https://www.googleapis.com/auth/cloud-platform)

### DeleteOperationsClient

```
public virtual OperationsClient DeleteOperationsClient { get; }
```

The long-running operations client for `Delete`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

### GrpcClient

```
public virtual Snapshots.SnapshotsClient GrpcClient { get; }
```

The underlying gRPC Snapshots client

**Property Value**

**Type**

**Description**

`[Snapshots.SnapshotsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Snapshots.SnapshotsClient)`

### InsertOperationsClient

```
public virtual OperationsClient InsertOperationsClient { get; }
```

The long-running operations client for `Insert`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

### ServiceMetadata

```
public static ServiceMetadata ServiceMetadata { get; }
```

The service metadata associated with this client type.

**Property Value**

**Type**

**Description**

`[ServiceMetadata](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.ServiceMetadata.html)`

### SetLabelsOperationsClient

```
public virtual OperationsClient SetLabelsOperationsClient { get; }
```

The long-running operations client for `SetLabels`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

## Methods

### Create()

```
public static SnapshotsClient Create()
```

Synchronously creates a [SnapshotsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SnapshotsClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [SnapshotsClientBuilder](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SnapshotsClientBuilder).

**Returns**

**Type**

**Description**

`[SnapshotsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SnapshotsClient)`

The created [SnapshotsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SnapshotsClient).

### CreateAsync(CancellationToken)

```
public static Task<SnapshotsClient> CreateAsync(CancellationToken cancellationToken = default(CancellationToken))
```

Asynchronously creates a [SnapshotsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SnapshotsClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [SnapshotsClientBuilder](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SnapshotsClientBuilder).

**Parameter**

**Name**

**Description**

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

The [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use while creating the client.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[SnapshotsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SnapshotsClient)>`

The task representing the created [SnapshotsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SnapshotsClient).

### Delete(DeleteSnapshotRequest, CallSettings)

```
public virtual Operation<Operation, Operation> Delete(DeleteSnapshotRequest request, CallSettings callSettings = null)
```

Deletes the specified Snapshot resource. Keep in mind that deleting a single snapshot might not necessarily delete all the data on that snapshot. If any data on the snapshot that is marked for deletion is needed for subsequent snapshots, the data will be moved to the next corresponding snapshot. For more information, see Deleting snapshots.

**Parameters**

**Name**

**Description**

`request`

`[DeleteSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.DeleteSnapshotRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = SnapshotsClient.Create();
// Initialize request argument(s)
DeleteSnapshotRequest request = new DeleteSnapshotRequest
{
    RequestId = "",
    Project = "",
    Snapshot = "",
};
// Make the request
lro::Operation<Operation, Operation> response = snapshotsClient.Delete(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = snapshotsClient.PollOnceDelete(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### Delete(String, String, CallSettings)

```
public virtual Operation<Operation, Operation> Delete(string project, string snapshot, CallSettings callSettings = null)
```

Deletes the specified Snapshot resource. Keep in mind that deleting a single snapshot might not necessarily delete all the data on that snapshot. If any data on the snapshot that is marked for deletion is needed for subsequent snapshots, the data will be moved to the next corresponding snapshot. For more information, see Deleting snapshots.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`snapshot`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the Snapshot resource to delete.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = SnapshotsClient.Create();
// Initialize request argument(s)
string project = "";
string snapshot = "";
// Make the request
lro::Operation<Operation, Operation> response = snapshotsClient.Delete(project, snapshot);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = snapshotsClient.PollOnceDelete(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DeleteAsync(DeleteSnapshotRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> DeleteAsync(DeleteSnapshotRequest request, CallSettings callSettings = null)
```

Deletes the specified Snapshot resource. Keep in mind that deleting a single snapshot might not necessarily delete all the data on that snapshot. If any data on the snapshot that is marked for deletion is needed for subsequent snapshots, the data will be moved to the next corresponding snapshot. For more information, see Deleting snapshots.

**Parameters**

**Name**

**Description**

`request`

`[DeleteSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.DeleteSnapshotRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = await SnapshotsClient.CreateAsync();
// Initialize request argument(s)
DeleteSnapshotRequest request = new DeleteSnapshotRequest
{
    RequestId = "",
    Project = "",
    Snapshot = "",
};
// Make the request
lro::Operation<Operation, Operation> response = await snapshotsClient.DeleteAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await snapshotsClient.PollOnceDeleteAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DeleteAsync(DeleteSnapshotRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> DeleteAsync(DeleteSnapshotRequest request, CancellationToken cancellationToken)
```

Deletes the specified Snapshot resource. Keep in mind that deleting a single snapshot might not necessarily delete all the data on that snapshot. If any data on the snapshot that is marked for deletion is needed for subsequent snapshots, the data will be moved to the next corresponding snapshot. For more information, see Deleting snapshots.

**Parameters**

**Name**

**Description**

`request`

`[DeleteSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.DeleteSnapshotRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = await SnapshotsClient.CreateAsync();
// Initialize request argument(s)
DeleteSnapshotRequest request = new DeleteSnapshotRequest
{
    RequestId = "",
    Project = "",
    Snapshot = "",
};
// Make the request
lro::Operation<Operation, Operation> response = await snapshotsClient.DeleteAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await snapshotsClient.PollOnceDeleteAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DeleteAsync(String, String, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> DeleteAsync(string project, string snapshot, CallSettings callSettings = null)
```

Deletes the specified Snapshot resource. Keep in mind that deleting a single snapshot might not necessarily delete all the data on that snapshot. If any data on the snapshot that is marked for deletion is needed for subsequent snapshots, the data will be moved to the next corresponding snapshot. For more information, see Deleting snapshots.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`snapshot`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the Snapshot resource to delete.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = await SnapshotsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string snapshot = "";
// Make the request
lro::Operation<Operation, Operation> response = await snapshotsClient.DeleteAsync(project, snapshot);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await snapshotsClient.PollOnceDeleteAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DeleteAsync(String, String, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> DeleteAsync(string project, string snapshot, CancellationToken cancellationToken)
```

Deletes the specified Snapshot resource. Keep in mind that deleting a single snapshot might not necessarily delete all the data on that snapshot. If any data on the snapshot that is marked for deletion is needed for subsequent snapshots, the data will be moved to the next corresponding snapshot. For more information, see Deleting snapshots.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`snapshot`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the Snapshot resource to delete.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = await SnapshotsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string snapshot = "";
// Make the request
lro::Operation<Operation, Operation> response = await snapshotsClient.DeleteAsync(project, snapshot);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await snapshotsClient.PollOnceDeleteAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### Get(GetSnapshotRequest, CallSettings)

```
public virtual Snapshot Get(GetSnapshotRequest request, CallSettings callSettings = null)
```

Returns the specified Snapshot resource. Gets a list of available snapshots by making a list() request.

**Parameters**

**Name**

**Description**

`request`

`[GetSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.GetSnapshotRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Snapshot](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Snapshot)`

The RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = SnapshotsClient.Create();
// Initialize request argument(s)
GetSnapshotRequest request = new GetSnapshotRequest
{
    Project = "",
    Snapshot = "",
};
// Make the request
Snapshot response = snapshotsClient.Get(request);
```

### Get(String, String, CallSettings)

```
public virtual Snapshot Get(string project, string snapshot, CallSettings callSettings = null)
```

Returns the specified Snapshot resource. Gets a list of available snapshots by making a list() request.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`snapshot`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the Snapshot resource to return.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Snapshot](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Snapshot)`

The RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = SnapshotsClient.Create();
// Initialize request argument(s)
string project = "";
string snapshot = "";
// Make the request
Snapshot response = snapshotsClient.Get(project, snapshot);
```

### GetAsync(GetSnapshotRequest, CallSettings)

```
public virtual Task<Snapshot> GetAsync(GetSnapshotRequest request, CallSettings callSettings = null)
```

Returns the specified Snapshot resource. Gets a list of available snapshots by making a list() request.

**Parameters**

**Name**

**Description**

`request`

`[GetSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.GetSnapshotRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Snapshot](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Snapshot)>`

A Task containing the RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = await SnapshotsClient.CreateAsync();
// Initialize request argument(s)
GetSnapshotRequest request = new GetSnapshotRequest
{
    Project = "",
    Snapshot = "",
};
// Make the request
Snapshot response = await snapshotsClient.GetAsync(request);
```

### GetAsync(GetSnapshotRequest, CancellationToken)

```
public virtual Task<Snapshot> GetAsync(GetSnapshotRequest request, CancellationToken cancellationToken)
```

Returns the specified Snapshot resource. Gets a list of available snapshots by making a list() request.

**Parameters**

**Name**

**Description**

`request`

`[GetSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.GetSnapshotRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Snapshot](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Snapshot)>`

A Task containing the RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = await SnapshotsClient.CreateAsync();
// Initialize request argument(s)
GetSnapshotRequest request = new GetSnapshotRequest
{
    Project = "",
    Snapshot = "",
};
// Make the request
Snapshot response = await snapshotsClient.GetAsync(request);
```

### GetAsync(String, String, CallSettings)

```
public virtual Task<Snapshot> GetAsync(string project, string snapshot, CallSettings callSettings = null)
```

Returns the specified Snapshot resource. Gets a list of available snapshots by making a list() request.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`snapshot`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the Snapshot resource to return.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Snapshot](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Snapshot)>`

A Task containing the RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = await SnapshotsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string snapshot = "";
// Make the request
Snapshot response = await snapshotsClient.GetAsync(project, snapshot);
```

### GetAsync(String, String, CancellationToken)

```
public virtual Task<Snapshot> GetAsync(string project, string snapshot, CancellationToken cancellationToken)
```

Returns the specified Snapshot resource. Gets a list of available snapshots by making a list() request.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`snapshot`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the Snapshot resource to return.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Snapshot](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Snapshot)>`

A Task containing the RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = await SnapshotsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string snapshot = "";
// Make the request
Snapshot response = await snapshotsClient.GetAsync(project, snapshot);
```

### GetIamPolicy(GetIamPolicySnapshotRequest, CallSettings)

```
public virtual Policy GetIamPolicy(GetIamPolicySnapshotRequest request, CallSettings callSettings = null)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicySnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.GetIamPolicySnapshotRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Policy)`

The RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = SnapshotsClient.Create();
// Initialize request argument(s)
GetIamPolicySnapshotRequest request = new GetIamPolicySnapshotRequest
{
    Resource = "",
    Project = "",
    OptionsRequestedPolicyVersion = 0,
};
// Make the request
Policy response = snapshotsClient.GetIamPolicy(request);
```

### GetIamPolicy(String, String, CallSettings)

```
public virtual Policy GetIamPolicy(string project, string resource, CallSettings callSettings = null)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`resource`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name or id of the resource for this request.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Policy)`

The RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = SnapshotsClient.Create();
// Initialize request argument(s)
string project = "";
string resource = "";
// Make the request
Policy response = snapshotsClient.GetIamPolicy(project, resource);
```

### GetIamPolicyAsync(GetIamPolicySnapshotRequest, CallSettings)

```
public virtual Task<Policy> GetIamPolicyAsync(GetIamPolicySnapshotRequest request, CallSettings callSettings = null)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicySnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.GetIamPolicySnapshotRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Policy)>`

A Task containing the RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = await SnapshotsClient.CreateAsync();
// Initialize request argument(s)
GetIamPolicySnapshotRequest request = new GetIamPolicySnapshotRequest
{
    Resource = "",
    Project = "",
    OptionsRequestedPolicyVersion = 0,
};
// Make the request
Policy response = await snapshotsClient.GetIamPolicyAsync(request);
```

### GetIamPolicyAsync(GetIamPolicySnapshotRequest, CancellationToken)

```
public virtual Task<Policy> GetIamPolicyAsync(GetIamPolicySnapshotRequest request, CancellationToken cancellationToken)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicySnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.GetIamPolicySnapshotRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Policy)>`

A Task containing the RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = await SnapshotsClient.CreateAsync();
// Initialize request argument(s)
GetIamPolicySnapshotRequest request = new GetIamPolicySnapshotRequest
{
    Resource = "",
    Project = "",
    OptionsRequestedPolicyVersion = 0,
};
// Make the request
Policy response = await snapshotsClient.GetIamPolicyAsync(request);
```

### GetIamPolicyAsync(String, String, CallSettings)

```
public virtual Task<Policy> GetIamPolicyAsync(string project, string resource, CallSettings callSettings = null)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`resource`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name or id of the resource for this request.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Policy)>`

A Task containing the RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = await SnapshotsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string resource = "";
// Make the request
Policy response = await snapshotsClient.GetIamPolicyAsync(project, resource);
```

### GetIamPolicyAsync(String, String, CancellationToken)

```
public virtual Task<Policy> GetIamPolicyAsync(string project, string resource, CancellationToken cancellationToken)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`resource`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name or id of the resource for this request.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Policy)>`

A Task containing the RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = await SnapshotsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string resource = "";
// Make the request
Policy response = await snapshotsClient.GetIamPolicyAsync(project, resource);
```

### Insert(InsertSnapshotRequest, CallSettings)

```
public virtual Operation<Operation, Operation> Insert(InsertSnapshotRequest request, CallSettings callSettings = null)
```

Creates a snapshot in the specified project using the data included in the request. For regular snapshot creation, consider using this method instead of disks.createSnapshot, as this method supports more features, such as creating snapshots in a project different from the source disk project.

**Parameters**

**Name**

**Description**

`request`

`[InsertSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.InsertSnapshotRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = SnapshotsClient.Create();
// Initialize request argument(s)
InsertSnapshotRequest request = new InsertSnapshotRequest
{
    RequestId = "",
    Project = "",
    SnapshotResource = new Snapshot(),
};
// Make the request
lro::Operation<Operation, Operation> response = snapshotsClient.Insert(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = snapshotsClient.PollOnceInsert(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### Insert(String, Snapshot, CallSettings)

```
public virtual Operation<Operation, Operation> Insert(string project, Snapshot snapshotResource, CallSettings callSettings = null)
```

Creates a snapshot in the specified project using the data included in the request. For regular snapshot creation, consider using this method instead of disks.createSnapshot, as this method supports more features, such as creating snapshots in a project different from the source disk project.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`snapshotResource`

`[Snapshot](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Snapshot)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = SnapshotsClient.Create();
// Initialize request argument(s)
string project = "";
Snapshot snapshotResource = new Snapshot();
// Make the request
lro::Operation<Operation, Operation> response = snapshotsClient.Insert(project, snapshotResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = snapshotsClient.PollOnceInsert(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### InsertAsync(InsertSnapshotRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> InsertAsync(InsertSnapshotRequest request, CallSettings callSettings = null)
```

Creates a snapshot in the specified project using the data included in the request. For regular snapshot creation, consider using this method instead of disks.createSnapshot, as this method supports more features, such as creating snapshots in a project different from the source disk project.

**Parameters**

**Name**

**Description**

`request`

`[InsertSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.InsertSnapshotRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = await SnapshotsClient.CreateAsync();
// Initialize request argument(s)
InsertSnapshotRequest request = new InsertSnapshotRequest
{
    RequestId = "",
    Project = "",
    SnapshotResource = new Snapshot(),
};
// Make the request
lro::Operation<Operation, Operation> response = await snapshotsClient.InsertAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await snapshotsClient.PollOnceInsertAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### InsertAsync(InsertSnapshotRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> InsertAsync(InsertSnapshotRequest request, CancellationToken cancellationToken)
```

Creates a snapshot in the specified project using the data included in the request. For regular snapshot creation, consider using this method instead of disks.createSnapshot, as this method supports more features, such as creating snapshots in a project different from the source disk project.

**Parameters**

**Name**

**Description**

`request`

`[InsertSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.InsertSnapshotRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = await SnapshotsClient.CreateAsync();
// Initialize request argument(s)
InsertSnapshotRequest request = new InsertSnapshotRequest
{
    RequestId = "",
    Project = "",
    SnapshotResource = new Snapshot(),
};
// Make the request
lro::Operation<Operation, Operation> response = await snapshotsClient.InsertAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await snapshotsClient.PollOnceInsertAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### InsertAsync(String, Snapshot, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> InsertAsync(string project, Snapshot snapshotResource, CallSettings callSettings = null)
```

Creates a snapshot in the specified project using the data included in the request. For regular snapshot creation, consider using this method instead of disks.createSnapshot, as this method supports more features, such as creating snapshots in a project different from the source disk project.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`snapshotResource`

`[Snapshot](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Snapshot)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = await SnapshotsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
Snapshot snapshotResource = new Snapshot();
// Make the request
lro::Operation<Operation, Operation> response = await snapshotsClient.InsertAsync(project, snapshotResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await snapshotsClient.PollOnceInsertAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### InsertAsync(String, Snapshot, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> InsertAsync(string project, Snapshot snapshotResource, CancellationToken cancellationToken)
```

Creates a snapshot in the specified project using the data included in the request. For regular snapshot creation, consider using this method instead of disks.createSnapshot, as this method supports more features, such as creating snapshots in a project different from the source disk project.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`snapshotResource`

`[Snapshot](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Snapshot)`  

The body resource for this request

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = await SnapshotsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
Snapshot snapshotResource = new Snapshot();
// Make the request
lro::Operation<Operation, Operation> response = await snapshotsClient.InsertAsync(project, snapshotResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await snapshotsClient.PollOnceInsertAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### List(ListSnapshotsRequest, CallSettings)

```
public virtual PagedEnumerable<SnapshotList, Snapshot> List(ListSnapshotsRequest request, CallSettings callSettings = null)
```

Retrieves the list of Snapshot resources contained within the specified project.

**Parameters**

**Name**

**Description**

`request`

`[ListSnapshotsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.ListSnapshotsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[SnapshotList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SnapshotList), [Snapshot](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Snapshot)>`

A pageable sequence of [Snapshot](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Snapshot) resources.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = SnapshotsClient.Create();
// Initialize request argument(s)
ListSnapshotsRequest request = new ListSnapshotsRequest
{
    OrderBy = "",
    Project = "",
    Filter = "",
    ReturnPartialSuccess = false,
};
// Make the request
PagedEnumerable<SnapshotList, Snapshot> response = snapshotsClient.List(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (Snapshot item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (SnapshotList page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Snapshot item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Snapshot> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Snapshot item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### List(String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedEnumerable<SnapshotList, Snapshot> List(string project, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Retrieves the list of Snapshot resources contained within the specified project.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[SnapshotList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SnapshotList), [Snapshot](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Snapshot)>`

A pageable sequence of [Snapshot](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Snapshot) resources.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = SnapshotsClient.Create();
// Initialize request argument(s)
string project = "";
// Make the request
PagedEnumerable<SnapshotList, Snapshot> response = snapshotsClient.List(project);

// Iterate over all response items, lazily performing RPCs as required
foreach (Snapshot item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (SnapshotList page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Snapshot item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Snapshot> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Snapshot item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListAsync(ListSnapshotsRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<SnapshotList, Snapshot> ListAsync(ListSnapshotsRequest request, CallSettings callSettings = null)
```

Retrieves the list of Snapshot resources contained within the specified project.

**Parameters**

**Name**

**Description**

`request`

`[ListSnapshotsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.ListSnapshotsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[SnapshotList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SnapshotList), [Snapshot](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Snapshot)>`

A pageable asynchronous sequence of [Snapshot](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Snapshot) resources.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = await SnapshotsClient.CreateAsync();
// Initialize request argument(s)
ListSnapshotsRequest request = new ListSnapshotsRequest
{
    OrderBy = "",
    Project = "",
    Filter = "",
    ReturnPartialSuccess = false,
};
// Make the request
PagedAsyncEnumerable<SnapshotList, Snapshot> response = snapshotsClient.ListAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((Snapshot item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((SnapshotList page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Snapshot item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Snapshot> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Snapshot item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListAsync(String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedAsyncEnumerable<SnapshotList, Snapshot> ListAsync(string project, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Retrieves the list of Snapshot resources contained within the specified project.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[SnapshotList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SnapshotList), [Snapshot](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Snapshot)>`

A pageable asynchronous sequence of [Snapshot](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Snapshot) resources.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = await SnapshotsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
// Make the request
PagedAsyncEnumerable<SnapshotList, Snapshot> response = snapshotsClient.ListAsync(project);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((Snapshot item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((SnapshotList page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Snapshot item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Snapshot> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Snapshot item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### PollOnceDelete(String, CallSettings)

```
public virtual Operation<Operation, Operation> PollOnceDelete(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `Delete`.

**Parameters**

**Name**

**Description**

`operationName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>`

The result of polling the operation.

### PollOnceDeleteAsync(String, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> PollOnceDeleteAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `Delete` .

**Parameters**

**Name**

**Description**

`operationName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>>`

A task representing the result of polling the operation.

### PollOnceInsert(String, CallSettings)

```
public virtual Operation<Operation, Operation> PollOnceInsert(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `Insert`.

**Parameters**

**Name**

**Description**

`operationName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>`

The result of polling the operation.

### PollOnceInsertAsync(String, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> PollOnceInsertAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `Insert` .

**Parameters**

**Name**

**Description**

`operationName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>>`

A task representing the result of polling the operation.

### PollOnceSetLabels(String, CallSettings)

```
public virtual Operation<Operation, Operation> PollOnceSetLabels(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `SetLabels`.

**Parameters**

**Name**

**Description**

`operationName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>`

The result of polling the operation.

### PollOnceSetLabelsAsync(String, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> PollOnceSetLabelsAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `SetLabels`.

**Parameters**

**Name**

**Description**

`operationName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>>`

A task representing the result of polling the operation.

### SetIamPolicy(SetIamPolicySnapshotRequest, CallSettings)

```
public virtual Policy SetIamPolicy(SetIamPolicySnapshotRequest request, CallSettings callSettings = null)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicySnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SetIamPolicySnapshotRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Policy)`

The RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = SnapshotsClient.Create();
// Initialize request argument(s)
SetIamPolicySnapshotRequest request = new SetIamPolicySnapshotRequest
{
    Resource = "",
    Project = "",
    GlobalSetPolicyRequestResource = new GlobalSetPolicyRequest(),
};
// Make the request
Policy response = snapshotsClient.SetIamPolicy(request);
```

### SetIamPolicy(String, String, GlobalSetPolicyRequest, CallSettings)

```
public virtual Policy SetIamPolicy(string project, string resource, GlobalSetPolicyRequest globalSetPolicyRequestResource, CallSettings callSettings = null)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`resource`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name or id of the resource for this request.

`globalSetPolicyRequestResource`

`[GlobalSetPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.GlobalSetPolicyRequest)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Policy)`

The RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = SnapshotsClient.Create();
// Initialize request argument(s)
string project = "";
string resource = "";
GlobalSetPolicyRequest globalSetPolicyRequestResource = new GlobalSetPolicyRequest();
// Make the request
Policy response = snapshotsClient.SetIamPolicy(project, resource, globalSetPolicyRequestResource);
```

### SetIamPolicyAsync(SetIamPolicySnapshotRequest, CallSettings)

```
public virtual Task<Policy> SetIamPolicyAsync(SetIamPolicySnapshotRequest request, CallSettings callSettings = null)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicySnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SetIamPolicySnapshotRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Policy)>`

A Task containing the RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = await SnapshotsClient.CreateAsync();
// Initialize request argument(s)
SetIamPolicySnapshotRequest request = new SetIamPolicySnapshotRequest
{
    Resource = "",
    Project = "",
    GlobalSetPolicyRequestResource = new GlobalSetPolicyRequest(),
};
// Make the request
Policy response = await snapshotsClient.SetIamPolicyAsync(request);
```

### SetIamPolicyAsync(SetIamPolicySnapshotRequest, CancellationToken)

```
public virtual Task<Policy> SetIamPolicyAsync(SetIamPolicySnapshotRequest request, CancellationToken cancellationToken)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicySnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SetIamPolicySnapshotRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Policy)>`

A Task containing the RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = await SnapshotsClient.CreateAsync();
// Initialize request argument(s)
SetIamPolicySnapshotRequest request = new SetIamPolicySnapshotRequest
{
    Resource = "",
    Project = "",
    GlobalSetPolicyRequestResource = new GlobalSetPolicyRequest(),
};
// Make the request
Policy response = await snapshotsClient.SetIamPolicyAsync(request);
```

### SetIamPolicyAsync(String, String, GlobalSetPolicyRequest, CallSettings)

```
public virtual Task<Policy> SetIamPolicyAsync(string project, string resource, GlobalSetPolicyRequest globalSetPolicyRequestResource, CallSettings callSettings = null)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`resource`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name or id of the resource for this request.

`globalSetPolicyRequestResource`

`[GlobalSetPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.GlobalSetPolicyRequest)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Policy)>`

A Task containing the RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = await SnapshotsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string resource = "";
GlobalSetPolicyRequest globalSetPolicyRequestResource = new GlobalSetPolicyRequest();
// Make the request
Policy response = await snapshotsClient.SetIamPolicyAsync(project, resource, globalSetPolicyRequestResource);
```

### SetIamPolicyAsync(String, String, GlobalSetPolicyRequest, CancellationToken)

```
public virtual Task<Policy> SetIamPolicyAsync(string project, string resource, GlobalSetPolicyRequest globalSetPolicyRequestResource, CancellationToken cancellationToken)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`resource`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name or id of the resource for this request.

`globalSetPolicyRequestResource`

`[GlobalSetPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.GlobalSetPolicyRequest)`  

The body resource for this request

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Policy)>`

A Task containing the RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = await SnapshotsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string resource = "";
GlobalSetPolicyRequest globalSetPolicyRequestResource = new GlobalSetPolicyRequest();
// Make the request
Policy response = await snapshotsClient.SetIamPolicyAsync(project, resource, globalSetPolicyRequestResource);
```

### SetLabels(SetLabelsSnapshotRequest, CallSettings)

```
public virtual Operation<Operation, Operation> SetLabels(SetLabelsSnapshotRequest request, CallSettings callSettings = null)
```

Sets the labels on a snapshot. To learn more about labels, read the Labeling Resources documentation.

**Parameters**

**Name**

**Description**

`request`

`[SetLabelsSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SetLabelsSnapshotRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = SnapshotsClient.Create();
// Initialize request argument(s)
SetLabelsSnapshotRequest request = new SetLabelsSnapshotRequest
{
    Resource = "",
    Project = "",
    GlobalSetLabelsRequestResource = new GlobalSetLabelsRequest(),
};
// Make the request
lro::Operation<Operation, Operation> response = snapshotsClient.SetLabels(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = snapshotsClient.PollOnceSetLabels(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetLabels(String, String, GlobalSetLabelsRequest, CallSettings)

```
public virtual Operation<Operation, Operation> SetLabels(string project, string resource, GlobalSetLabelsRequest globalSetLabelsRequestResource, CallSettings callSettings = null)
```

Sets the labels on a snapshot. To learn more about labels, read the Labeling Resources documentation.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`resource`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name or id of the resource for this request.

`globalSetLabelsRequestResource`

`[GlobalSetLabelsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.GlobalSetLabelsRequest)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = SnapshotsClient.Create();
// Initialize request argument(s)
string project = "";
string resource = "";
GlobalSetLabelsRequest globalSetLabelsRequestResource = new GlobalSetLabelsRequest();
// Make the request
lro::Operation<Operation, Operation> response = snapshotsClient.SetLabels(project, resource, globalSetLabelsRequestResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = snapshotsClient.PollOnceSetLabels(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetLabelsAsync(SetLabelsSnapshotRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> SetLabelsAsync(SetLabelsSnapshotRequest request, CallSettings callSettings = null)
```

Sets the labels on a snapshot. To learn more about labels, read the Labeling Resources documentation.

**Parameters**

**Name**

**Description**

`request`

`[SetLabelsSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SetLabelsSnapshotRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = await SnapshotsClient.CreateAsync();
// Initialize request argument(s)
SetLabelsSnapshotRequest request = new SetLabelsSnapshotRequest
{
    Resource = "",
    Project = "",
    GlobalSetLabelsRequestResource = new GlobalSetLabelsRequest(),
};
// Make the request
lro::Operation<Operation, Operation> response = await snapshotsClient.SetLabelsAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await snapshotsClient.PollOnceSetLabelsAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetLabelsAsync(SetLabelsSnapshotRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> SetLabelsAsync(SetLabelsSnapshotRequest request, CancellationToken cancellationToken)
```

Sets the labels on a snapshot. To learn more about labels, read the Labeling Resources documentation.

**Parameters**

**Name**

**Description**

`request`

`[SetLabelsSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SetLabelsSnapshotRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = await SnapshotsClient.CreateAsync();
// Initialize request argument(s)
SetLabelsSnapshotRequest request = new SetLabelsSnapshotRequest
{
    Resource = "",
    Project = "",
    GlobalSetLabelsRequestResource = new GlobalSetLabelsRequest(),
};
// Make the request
lro::Operation<Operation, Operation> response = await snapshotsClient.SetLabelsAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await snapshotsClient.PollOnceSetLabelsAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetLabelsAsync(String, String, GlobalSetLabelsRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> SetLabelsAsync(string project, string resource, GlobalSetLabelsRequest globalSetLabelsRequestResource, CallSettings callSettings = null)
```

Sets the labels on a snapshot. To learn more about labels, read the Labeling Resources documentation.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`resource`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name or id of the resource for this request.

`globalSetLabelsRequestResource`

`[GlobalSetLabelsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.GlobalSetLabelsRequest)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = await SnapshotsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string resource = "";
GlobalSetLabelsRequest globalSetLabelsRequestResource = new GlobalSetLabelsRequest();
// Make the request
lro::Operation<Operation, Operation> response = await snapshotsClient.SetLabelsAsync(project, resource, globalSetLabelsRequestResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await snapshotsClient.PollOnceSetLabelsAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetLabelsAsync(String, String, GlobalSetLabelsRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> SetLabelsAsync(string project, string resource, GlobalSetLabelsRequest globalSetLabelsRequestResource, CancellationToken cancellationToken)
```

Sets the labels on a snapshot. To learn more about labels, read the Labeling Resources documentation.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`resource`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name or id of the resource for this request.

`globalSetLabelsRequestResource`

`[GlobalSetLabelsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.GlobalSetLabelsRequest)`  

The body resource for this request

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = await SnapshotsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string resource = "";
GlobalSetLabelsRequest globalSetLabelsRequestResource = new GlobalSetLabelsRequest();
// Make the request
lro::Operation<Operation, Operation> response = await snapshotsClient.SetLabelsAsync(project, resource, globalSetLabelsRequestResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await snapshotsClient.PollOnceSetLabelsAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### ShutdownDefaultChannelsAsync()

```
public static Task ShutdownDefaultChannelsAsync()
```

Shuts down any channels automatically created by [Create()](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SnapshotsClient#Google_Cloud_Compute_V1_SnapshotsClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SnapshotsClient#Google_Cloud_Compute_V1_SnapshotsClient_CreateAsync_System_Threading_CancellationToken_). Channels which weren't automatically created are not affected.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A task representing the asynchronous shutdown operation.

**Remarks**

After calling this method, further calls to [Create()](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SnapshotsClient#Google_Cloud_Compute_V1_SnapshotsClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SnapshotsClient#Google_Cloud_Compute_V1_SnapshotsClient_CreateAsync_System_Threading_CancellationToken_) will create new channels, which could in turn be shut down by another call to this method.

### TestIamPermissions(TestIamPermissionsSnapshotRequest, CallSettings)

```
public virtual TestPermissionsResponse TestIamPermissions(TestIamPermissionsSnapshotRequest request, CallSettings callSettings = null)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.TestIamPermissionsSnapshotRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.TestPermissionsResponse)`

The RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = SnapshotsClient.Create();
// Initialize request argument(s)
TestIamPermissionsSnapshotRequest request = new TestIamPermissionsSnapshotRequest
{
    Resource = "",
    Project = "",
    TestPermissionsRequestResource = new TestPermissionsRequest(),
};
// Make the request
TestPermissionsResponse response = snapshotsClient.TestIamPermissions(request);
```

### TestIamPermissions(String, String, TestPermissionsRequest, CallSettings)

```
public virtual TestPermissionsResponse TestIamPermissions(string project, string resource, TestPermissionsRequest testPermissionsRequestResource, CallSettings callSettings = null)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`resource`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name or id of the resource for this request.

`testPermissionsRequestResource`

`[TestPermissionsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.TestPermissionsRequest)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.TestPermissionsResponse)`

The RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = SnapshotsClient.Create();
// Initialize request argument(s)
string project = "";
string resource = "";
TestPermissionsRequest testPermissionsRequestResource = new TestPermissionsRequest();
// Make the request
TestPermissionsResponse response = snapshotsClient.TestIamPermissions(project, resource, testPermissionsRequestResource);
```

### TestIamPermissionsAsync(TestIamPermissionsSnapshotRequest, CallSettings)

```
public virtual Task<TestPermissionsResponse> TestIamPermissionsAsync(TestIamPermissionsSnapshotRequest request, CallSettings callSettings = null)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.TestIamPermissionsSnapshotRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.TestPermissionsResponse)>`

A Task containing the RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = await SnapshotsClient.CreateAsync();
// Initialize request argument(s)
TestIamPermissionsSnapshotRequest request = new TestIamPermissionsSnapshotRequest
{
    Resource = "",
    Project = "",
    TestPermissionsRequestResource = new TestPermissionsRequest(),
};
// Make the request
TestPermissionsResponse response = await snapshotsClient.TestIamPermissionsAsync(request);
```

### TestIamPermissionsAsync(TestIamPermissionsSnapshotRequest, CancellationToken)

```
public virtual Task<TestPermissionsResponse> TestIamPermissionsAsync(TestIamPermissionsSnapshotRequest request, CancellationToken cancellationToken)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.TestIamPermissionsSnapshotRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.TestPermissionsResponse)>`

A Task containing the RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = await SnapshotsClient.CreateAsync();
// Initialize request argument(s)
TestIamPermissionsSnapshotRequest request = new TestIamPermissionsSnapshotRequest
{
    Resource = "",
    Project = "",
    TestPermissionsRequestResource = new TestPermissionsRequest(),
};
// Make the request
TestPermissionsResponse response = await snapshotsClient.TestIamPermissionsAsync(request);
```

### TestIamPermissionsAsync(String, String, TestPermissionsRequest, CallSettings)

```
public virtual Task<TestPermissionsResponse> TestIamPermissionsAsync(string project, string resource, TestPermissionsRequest testPermissionsRequestResource, CallSettings callSettings = null)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`resource`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name or id of the resource for this request.

`testPermissionsRequestResource`

`[TestPermissionsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.TestPermissionsRequest)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.TestPermissionsResponse)>`

A Task containing the RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = await SnapshotsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string resource = "";
TestPermissionsRequest testPermissionsRequestResource = new TestPermissionsRequest();
// Make the request
TestPermissionsResponse response = await snapshotsClient.TestIamPermissionsAsync(project, resource, testPermissionsRequestResource);
```

### TestIamPermissionsAsync(String, String, TestPermissionsRequest, CancellationToken)

```
public virtual Task<TestPermissionsResponse> TestIamPermissionsAsync(string project, string resource, TestPermissionsRequest testPermissionsRequestResource, CancellationToken cancellationToken)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`resource`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name or id of the resource for this request.

`testPermissionsRequestResource`

`[TestPermissionsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.TestPermissionsRequest)`  

The body resource for this request

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.TestPermissionsResponse)>`

A Task containing the RPC response.

**Example**

```
// Create client
SnapshotsClient snapshotsClient = await SnapshotsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string resource = "";
TestPermissionsRequest testPermissionsRequestResource = new TestPermissionsRequest();
// Make the request
TestPermissionsResponse response = await snapshotsClient.TestIamPermissionsAsync(project, resource, testPermissionsRequestResource);
```

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
