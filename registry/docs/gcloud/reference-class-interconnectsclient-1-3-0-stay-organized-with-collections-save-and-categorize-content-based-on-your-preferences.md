-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class InterconnectsClient (1.3.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public abstract class InterconnectsClient
```

Interconnects client wrapper, for convenient use.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> InterconnectsClient

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Derived Types

[InterconnectsClientImpl](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.InterconnectsClientImpl)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Remarks

The Interconnects API.

## Properties

### DefaultEndpoint

```
public static string DefaultEndpoint { get; }
```

The default endpoint for the Interconnects service, which is a host of "compute.googleapis.com" and a port of 443.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### DefaultScopes

```
public static IReadOnlyList<string> DefaultScopes { get; }
```

The default Interconnects scopes.

**Property Value**

**Type**

**Description**

`[IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)<[String](https://learn.microsoft.com/dotnet/api/system.string)>`

**Remarks**

The default Interconnects scopes are:

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
public virtual Interconnects.InterconnectsClient GrpcClient { get; }
```

The underlying gRPC Interconnects client

**Property Value**

**Type**

**Description**

`[Interconnects.InterconnectsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Interconnects.InterconnectsClient)`

### InsertOperationsClient

```
public virtual OperationsClient InsertOperationsClient { get; }
```

The long-running operations client for `Insert`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

### PatchOperationsClient

```
public virtual OperationsClient PatchOperationsClient { get; }
```

The long-running operations client for `Patch`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

## Methods

### Create()

```
public static InterconnectsClient Create()
```

Synchronously creates a [InterconnectsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.InterconnectsClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [InterconnectsClientBuilder](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.InterconnectsClientBuilder).

**Returns**

**Type**

**Description**

`[InterconnectsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.InterconnectsClient)`

The created [InterconnectsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.InterconnectsClient).

### CreateAsync(CancellationToken)

```
public static Task<InterconnectsClient> CreateAsync(CancellationToken cancellationToken = default(CancellationToken))
```

Asynchronously creates a [InterconnectsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.InterconnectsClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [InterconnectsClientBuilder](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.InterconnectsClientBuilder).

**Parameter**

**Name**

**Description**

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

The [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use while creating the client.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[InterconnectsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.InterconnectsClient)>`

The task representing the created [InterconnectsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.InterconnectsClient).

### Delete(DeleteInterconnectRequest, CallSettings)

```
public virtual Operation<Operation, Operation> Delete(DeleteInterconnectRequest request, CallSettings callSettings = null)
```

Deletes the specified interconnect.

**Parameters**

**Name**

**Description**

`request`

`[DeleteInterconnectRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.DeleteInterconnectRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
InterconnectsClient interconnectsClient = InterconnectsClient.Create();
// Initialize request argument(s)
DeleteInterconnectRequest request = new DeleteInterconnectRequest
{
    RequestId = "",
    Interconnect = "",
    Project = "",
};
// Make the request
lro::Operation<Operation, Operation> response = interconnectsClient.Delete(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = interconnectsClient.PollOnceDelete(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### Delete(String, String, CallSettings)

```
public virtual Operation<Operation, Operation> Delete(string project, string interconnect, CallSettings callSettings = null)
```

Deletes the specified interconnect.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`interconnect`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the interconnect to delete.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
InterconnectsClient interconnectsClient = InterconnectsClient.Create();
// Initialize request argument(s)
string project = "";
string interconnect = "";
// Make the request
lro::Operation<Operation, Operation> response = interconnectsClient.Delete(project, interconnect);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = interconnectsClient.PollOnceDelete(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DeleteAsync(DeleteInterconnectRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> DeleteAsync(DeleteInterconnectRequest request, CallSettings callSettings = null)
```

Deletes the specified interconnect.

**Parameters**

**Name**

**Description**

`request`

`[DeleteInterconnectRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.DeleteInterconnectRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
InterconnectsClient interconnectsClient = await InterconnectsClient.CreateAsync();
// Initialize request argument(s)
DeleteInterconnectRequest request = new DeleteInterconnectRequest
{
    RequestId = "",
    Interconnect = "",
    Project = "",
};
// Make the request
lro::Operation<Operation, Operation> response = await interconnectsClient.DeleteAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await interconnectsClient.PollOnceDeleteAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DeleteAsync(DeleteInterconnectRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> DeleteAsync(DeleteInterconnectRequest request, CancellationToken cancellationToken)
```

Deletes the specified interconnect.

**Parameters**

**Name**

**Description**

`request`

`[DeleteInterconnectRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.DeleteInterconnectRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
InterconnectsClient interconnectsClient = await InterconnectsClient.CreateAsync();
// Initialize request argument(s)
DeleteInterconnectRequest request = new DeleteInterconnectRequest
{
    RequestId = "",
    Interconnect = "",
    Project = "",
};
// Make the request
lro::Operation<Operation, Operation> response = await interconnectsClient.DeleteAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await interconnectsClient.PollOnceDeleteAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DeleteAsync(String, String, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> DeleteAsync(string project, string interconnect, CallSettings callSettings = null)
```

Deletes the specified interconnect.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`interconnect`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the interconnect to delete.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
InterconnectsClient interconnectsClient = await InterconnectsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string interconnect = "";
// Make the request
lro::Operation<Operation, Operation> response = await interconnectsClient.DeleteAsync(project, interconnect);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await interconnectsClient.PollOnceDeleteAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DeleteAsync(String, String, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> DeleteAsync(string project, string interconnect, CancellationToken cancellationToken)
```

Deletes the specified interconnect.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`interconnect`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the interconnect to delete.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
InterconnectsClient interconnectsClient = await InterconnectsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string interconnect = "";
// Make the request
lro::Operation<Operation, Operation> response = await interconnectsClient.DeleteAsync(project, interconnect);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await interconnectsClient.PollOnceDeleteAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### Get(GetInterconnectRequest, CallSettings)

```
public virtual Interconnect Get(GetInterconnectRequest request, CallSettings callSettings = null)
```

Returns the specified interconnect. Get a list of available interconnects by making a list() request.

**Parameters**

**Name**

**Description**

`request`

`[GetInterconnectRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.GetInterconnectRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Interconnect](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Interconnect)`

The RPC response.

**Example**

```
// Create client
InterconnectsClient interconnectsClient = InterconnectsClient.Create();
// Initialize request argument(s)
GetInterconnectRequest request = new GetInterconnectRequest
{
    Interconnect = "",
    Project = "",
};
// Make the request
Interconnect response = interconnectsClient.Get(request);
```

### Get(String, String, CallSettings)

```
public virtual Interconnect Get(string project, string interconnect, CallSettings callSettings = null)
```

Returns the specified interconnect. Get a list of available interconnects by making a list() request.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`interconnect`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the interconnect to return.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Interconnect](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Interconnect)`

The RPC response.

**Example**

```
// Create client
InterconnectsClient interconnectsClient = InterconnectsClient.Create();
// Initialize request argument(s)
string project = "";
string interconnect = "";
// Make the request
Interconnect response = interconnectsClient.Get(project, interconnect);
```

### GetAsync(GetInterconnectRequest, CallSettings)

```
public virtual Task<Interconnect> GetAsync(GetInterconnectRequest request, CallSettings callSettings = null)
```

Returns the specified interconnect. Get a list of available interconnects by making a list() request.

**Parameters**

**Name**

**Description**

`request`

`[GetInterconnectRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.GetInterconnectRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Interconnect](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Interconnect)>`

A Task containing the RPC response.

**Example**

```
// Create client
InterconnectsClient interconnectsClient = await InterconnectsClient.CreateAsync();
// Initialize request argument(s)
GetInterconnectRequest request = new GetInterconnectRequest
{
    Interconnect = "",
    Project = "",
};
// Make the request
Interconnect response = await interconnectsClient.GetAsync(request);
```

### GetAsync(GetInterconnectRequest, CancellationToken)

```
public virtual Task<Interconnect> GetAsync(GetInterconnectRequest request, CancellationToken cancellationToken)
```

Returns the specified interconnect. Get a list of available interconnects by making a list() request.

**Parameters**

**Name**

**Description**

`request`

`[GetInterconnectRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.GetInterconnectRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Interconnect](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Interconnect)>`

A Task containing the RPC response.

**Example**

```
// Create client
InterconnectsClient interconnectsClient = await InterconnectsClient.CreateAsync();
// Initialize request argument(s)
GetInterconnectRequest request = new GetInterconnectRequest
{
    Interconnect = "",
    Project = "",
};
// Make the request
Interconnect response = await interconnectsClient.GetAsync(request);
```

### GetAsync(String, String, CallSettings)

```
public virtual Task<Interconnect> GetAsync(string project, string interconnect, CallSettings callSettings = null)
```

Returns the specified interconnect. Get a list of available interconnects by making a list() request.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`interconnect`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the interconnect to return.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Interconnect](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Interconnect)>`

A Task containing the RPC response.

**Example**

```
// Create client
InterconnectsClient interconnectsClient = await InterconnectsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string interconnect = "";
// Make the request
Interconnect response = await interconnectsClient.GetAsync(project, interconnect);
```

### GetAsync(String, String, CancellationToken)

```
public virtual Task<Interconnect> GetAsync(string project, string interconnect, CancellationToken cancellationToken)
```

Returns the specified interconnect. Get a list of available interconnects by making a list() request.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`interconnect`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the interconnect to return.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Interconnect](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Interconnect)>`

A Task containing the RPC response.

**Example**

```
// Create client
InterconnectsClient interconnectsClient = await InterconnectsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string interconnect = "";
// Make the request
Interconnect response = await interconnectsClient.GetAsync(project, interconnect);
```

### GetDiagnostics(GetDiagnosticsInterconnectRequest, CallSettings)

```
public virtual InterconnectsGetDiagnosticsResponse GetDiagnostics(GetDiagnosticsInterconnectRequest request, CallSettings callSettings = null)
```

Returns the interconnectDiagnostics for the specified interconnect.

**Parameters**

**Name**

**Description**

`request`

`[GetDiagnosticsInterconnectRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.GetDiagnosticsInterconnectRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[InterconnectsGetDiagnosticsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.InterconnectsGetDiagnosticsResponse)`

The RPC response.

**Example**

```
// Create client
InterconnectsClient interconnectsClient = InterconnectsClient.Create();
// Initialize request argument(s)
GetDiagnosticsInterconnectRequest request = new GetDiagnosticsInterconnectRequest
{
    Interconnect = "",
    Project = "",
};
// Make the request
InterconnectsGetDiagnosticsResponse response = interconnectsClient.GetDiagnostics(request);
```

### GetDiagnostics(String, String, CallSettings)

```
public virtual InterconnectsGetDiagnosticsResponse GetDiagnostics(string project, string interconnect, CallSettings callSettings = null)
```

Returns the interconnectDiagnostics for the specified interconnect.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`interconnect`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the interconnect resource to query.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[InterconnectsGetDiagnosticsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.InterconnectsGetDiagnosticsResponse)`

The RPC response.

**Example**

```
// Create client
InterconnectsClient interconnectsClient = InterconnectsClient.Create();
// Initialize request argument(s)
string project = "";
string interconnect = "";
// Make the request
InterconnectsGetDiagnosticsResponse response = interconnectsClient.GetDiagnostics(project, interconnect);
```

### GetDiagnosticsAsync(GetDiagnosticsInterconnectRequest, CallSettings)

```
public virtual Task<InterconnectsGetDiagnosticsResponse> GetDiagnosticsAsync(GetDiagnosticsInterconnectRequest request, CallSettings callSettings = null)
```

Returns the interconnectDiagnostics for the specified interconnect.

**Parameters**

**Name**

**Description**

`request`

`[GetDiagnosticsInterconnectRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.GetDiagnosticsInterconnectRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[InterconnectsGetDiagnosticsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.InterconnectsGetDiagnosticsResponse)>`

A Task containing the RPC response.

**Example**

```
// Create client
InterconnectsClient interconnectsClient = await InterconnectsClient.CreateAsync();
// Initialize request argument(s)
GetDiagnosticsInterconnectRequest request = new GetDiagnosticsInterconnectRequest
{
    Interconnect = "",
    Project = "",
};
// Make the request
InterconnectsGetDiagnosticsResponse response = await interconnectsClient.GetDiagnosticsAsync(request);
```

### GetDiagnosticsAsync(GetDiagnosticsInterconnectRequest, CancellationToken)

```
public virtual Task<InterconnectsGetDiagnosticsResponse> GetDiagnosticsAsync(GetDiagnosticsInterconnectRequest request, CancellationToken cancellationToken)
```

Returns the interconnectDiagnostics for the specified interconnect.

**Parameters**

**Name**

**Description**

`request`

`[GetDiagnosticsInterconnectRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.GetDiagnosticsInterconnectRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[InterconnectsGetDiagnosticsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.InterconnectsGetDiagnosticsResponse)>`

A Task containing the RPC response.

**Example**

```
// Create client
InterconnectsClient interconnectsClient = await InterconnectsClient.CreateAsync();
// Initialize request argument(s)
GetDiagnosticsInterconnectRequest request = new GetDiagnosticsInterconnectRequest
{
    Interconnect = "",
    Project = "",
};
// Make the request
InterconnectsGetDiagnosticsResponse response = await interconnectsClient.GetDiagnosticsAsync(request);
```

### GetDiagnosticsAsync(String, String, CallSettings)

```
public virtual Task<InterconnectsGetDiagnosticsResponse> GetDiagnosticsAsync(string project, string interconnect, CallSettings callSettings = null)
```

Returns the interconnectDiagnostics for the specified interconnect.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`interconnect`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the interconnect resource to query.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[InterconnectsGetDiagnosticsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.InterconnectsGetDiagnosticsResponse)>`

A Task containing the RPC response.

**Example**

```
// Create client
InterconnectsClient interconnectsClient = await InterconnectsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string interconnect = "";
// Make the request
InterconnectsGetDiagnosticsResponse response = await interconnectsClient.GetDiagnosticsAsync(project, interconnect);
```

### GetDiagnosticsAsync(String, String, CancellationToken)

```
public virtual Task<InterconnectsGetDiagnosticsResponse> GetDiagnosticsAsync(string project, string interconnect, CancellationToken cancellationToken)
```

Returns the interconnectDiagnostics for the specified interconnect.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`interconnect`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the interconnect resource to query.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[InterconnectsGetDiagnosticsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.InterconnectsGetDiagnosticsResponse)>`

A Task containing the RPC response.

**Example**

```
// Create client
InterconnectsClient interconnectsClient = await InterconnectsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string interconnect = "";
// Make the request
InterconnectsGetDiagnosticsResponse response = await interconnectsClient.GetDiagnosticsAsync(project, interconnect);
```

### Insert(InsertInterconnectRequest, CallSettings)

```
public virtual Operation<Operation, Operation> Insert(InsertInterconnectRequest request, CallSettings callSettings = null)
```

Creates a Interconnect in the specified project using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertInterconnectRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.InsertInterconnectRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
InterconnectsClient interconnectsClient = InterconnectsClient.Create();
// Initialize request argument(s)
InsertInterconnectRequest request = new InsertInterconnectRequest
{
    RequestId = "",
    Project = "",
    InterconnectResource = new Interconnect(),
};
// Make the request
lro::Operation<Operation, Operation> response = interconnectsClient.Insert(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = interconnectsClient.PollOnceInsert(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### Insert(String, Interconnect, CallSettings)

```
public virtual Operation<Operation, Operation> Insert(string project, Interconnect interconnectResource, CallSettings callSettings = null)
```

Creates a Interconnect in the specified project using the data included in the request.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`interconnectResource`

`[Interconnect](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Interconnect)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
InterconnectsClient interconnectsClient = InterconnectsClient.Create();
// Initialize request argument(s)
string project = "";
Interconnect interconnectResource = new Interconnect();
// Make the request
lro::Operation<Operation, Operation> response = interconnectsClient.Insert(project, interconnectResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = interconnectsClient.PollOnceInsert(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### InsertAsync(InsertInterconnectRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> InsertAsync(InsertInterconnectRequest request, CallSettings callSettings = null)
```

Creates a Interconnect in the specified project using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertInterconnectRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.InsertInterconnectRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
InterconnectsClient interconnectsClient = await InterconnectsClient.CreateAsync();
// Initialize request argument(s)
InsertInterconnectRequest request = new InsertInterconnectRequest
{
    RequestId = "",
    Project = "",
    InterconnectResource = new Interconnect(),
};
// Make the request
lro::Operation<Operation, Operation> response = await interconnectsClient.InsertAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await interconnectsClient.PollOnceInsertAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### InsertAsync(InsertInterconnectRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> InsertAsync(InsertInterconnectRequest request, CancellationToken cancellationToken)
```

Creates a Interconnect in the specified project using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertInterconnectRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.InsertInterconnectRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
InterconnectsClient interconnectsClient = await InterconnectsClient.CreateAsync();
// Initialize request argument(s)
InsertInterconnectRequest request = new InsertInterconnectRequest
{
    RequestId = "",
    Project = "",
    InterconnectResource = new Interconnect(),
};
// Make the request
lro::Operation<Operation, Operation> response = await interconnectsClient.InsertAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await interconnectsClient.PollOnceInsertAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### InsertAsync(String, Interconnect, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> InsertAsync(string project, Interconnect interconnectResource, CallSettings callSettings = null)
```

Creates a Interconnect in the specified project using the data included in the request.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`interconnectResource`

`[Interconnect](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Interconnect)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
InterconnectsClient interconnectsClient = await InterconnectsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
Interconnect interconnectResource = new Interconnect();
// Make the request
lro::Operation<Operation, Operation> response = await interconnectsClient.InsertAsync(project, interconnectResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await interconnectsClient.PollOnceInsertAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### InsertAsync(String, Interconnect, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> InsertAsync(string project, Interconnect interconnectResource, CancellationToken cancellationToken)
```

Creates a Interconnect in the specified project using the data included in the request.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`interconnectResource`

`[Interconnect](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Interconnect)`  

The body resource for this request

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
InterconnectsClient interconnectsClient = await InterconnectsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
Interconnect interconnectResource = new Interconnect();
// Make the request
lro::Operation<Operation, Operation> response = await interconnectsClient.InsertAsync(project, interconnectResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await interconnectsClient.PollOnceInsertAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### List(ListInterconnectsRequest, CallSettings)

```
public virtual PagedEnumerable<InterconnectList, Interconnect> List(ListInterconnectsRequest request, CallSettings callSettings = null)
```

Retrieves the list of interconnect available to the specified project.

**Parameters**

**Name**

**Description**

`request`

`[ListInterconnectsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.ListInterconnectsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[InterconnectList](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.InterconnectList), [Interconnect](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Interconnect)>`

A pageable sequence of [Interconnect](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Interconnect) resources.

**Example**

```
// Create client
InterconnectsClient interconnectsClient = InterconnectsClient.Create();
// Initialize request argument(s)
ListInterconnectsRequest request = new ListInterconnectsRequest
{
    OrderBy = "",
    Project = "",
    Filter = "",
    ReturnPartialSuccess = false,
};
// Make the request
PagedEnumerable<InterconnectList, Interconnect> response = interconnectsClient.List(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (Interconnect item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (InterconnectList page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Interconnect item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Interconnect> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Interconnect item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### List(String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedEnumerable<InterconnectList, Interconnect> List(string project, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Retrieves the list of interconnect available to the specified project.

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

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[InterconnectList](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.InterconnectList), [Interconnect](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Interconnect)>`

A pageable sequence of [Interconnect](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Interconnect) resources.

**Example**

```
// Create client
InterconnectsClient interconnectsClient = InterconnectsClient.Create();
// Initialize request argument(s)
string project = "";
// Make the request
PagedEnumerable<InterconnectList, Interconnect> response = interconnectsClient.List(project);

// Iterate over all response items, lazily performing RPCs as required
foreach (Interconnect item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (InterconnectList page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Interconnect item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Interconnect> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Interconnect item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListAsync(ListInterconnectsRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<InterconnectList, Interconnect> ListAsync(ListInterconnectsRequest request, CallSettings callSettings = null)
```

Retrieves the list of interconnect available to the specified project.

**Parameters**

**Name**

**Description**

`request`

`[ListInterconnectsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.ListInterconnectsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[InterconnectList](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.InterconnectList), [Interconnect](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Interconnect)>`

A pageable asynchronous sequence of [Interconnect](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Interconnect) resources.

**Example**

```
// Create client
InterconnectsClient interconnectsClient = await InterconnectsClient.CreateAsync();
// Initialize request argument(s)
ListInterconnectsRequest request = new ListInterconnectsRequest
{
    OrderBy = "",
    Project = "",
    Filter = "",
    ReturnPartialSuccess = false,
};
// Make the request
PagedAsyncEnumerable<InterconnectList, Interconnect> response = interconnectsClient.ListAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((Interconnect item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((InterconnectList page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Interconnect item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Interconnect> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Interconnect item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListAsync(String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedAsyncEnumerable<InterconnectList, Interconnect> ListAsync(string project, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Retrieves the list of interconnect available to the specified project.

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

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[InterconnectList](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.InterconnectList), [Interconnect](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Interconnect)>`

A pageable asynchronous sequence of [Interconnect](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Interconnect) resources.

**Example**

```
// Create client
InterconnectsClient interconnectsClient = await InterconnectsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
// Make the request
PagedAsyncEnumerable<InterconnectList, Interconnect> response = interconnectsClient.ListAsync(project);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((Interconnect item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((InterconnectList page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Interconnect item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Interconnect> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Interconnect item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### Patch(PatchInterconnectRequest, CallSettings)

```
public virtual Operation<Operation, Operation> Patch(PatchInterconnectRequest request, CallSettings callSettings = null)
```

Updates the specified interconnect with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`request`

`[PatchInterconnectRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.PatchInterconnectRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
InterconnectsClient interconnectsClient = InterconnectsClient.Create();
// Initialize request argument(s)
PatchInterconnectRequest request = new PatchInterconnectRequest
{
    RequestId = "",
    Interconnect = "",
    Project = "",
    InterconnectResource = new Interconnect(),
};
// Make the request
lro::Operation<Operation, Operation> response = interconnectsClient.Patch(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = interconnectsClient.PollOncePatch(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### Patch(String, String, Interconnect, CallSettings)

```
public virtual Operation<Operation, Operation> Patch(string project, string interconnect, Interconnect interconnectResource, CallSettings callSettings = null)
```

Updates the specified interconnect with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`interconnect`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the interconnect to update.

`interconnectResource`

`[Interconnect](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Interconnect)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
InterconnectsClient interconnectsClient = InterconnectsClient.Create();
// Initialize request argument(s)
string project = "";
string interconnect = "";
Interconnect interconnectResource = new Interconnect();
// Make the request
lro::Operation<Operation, Operation> response = interconnectsClient.Patch(project, interconnect, interconnectResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = interconnectsClient.PollOncePatch(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### PatchAsync(PatchInterconnectRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> PatchAsync(PatchInterconnectRequest request, CallSettings callSettings = null)
```

Updates the specified interconnect with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`request`

`[PatchInterconnectRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.PatchInterconnectRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
InterconnectsClient interconnectsClient = await InterconnectsClient.CreateAsync();
// Initialize request argument(s)
PatchInterconnectRequest request = new PatchInterconnectRequest
{
    RequestId = "",
    Interconnect = "",
    Project = "",
    InterconnectResource = new Interconnect(),
};
// Make the request
lro::Operation<Operation, Operation> response = await interconnectsClient.PatchAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await interconnectsClient.PollOncePatchAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### PatchAsync(PatchInterconnectRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> PatchAsync(PatchInterconnectRequest request, CancellationToken cancellationToken)
```

Updates the specified interconnect with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`request`

`[PatchInterconnectRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.PatchInterconnectRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
InterconnectsClient interconnectsClient = await InterconnectsClient.CreateAsync();
// Initialize request argument(s)
PatchInterconnectRequest request = new PatchInterconnectRequest
{
    RequestId = "",
    Interconnect = "",
    Project = "",
    InterconnectResource = new Interconnect(),
};
// Make the request
lro::Operation<Operation, Operation> response = await interconnectsClient.PatchAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await interconnectsClient.PollOncePatchAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### PatchAsync(String, String, Interconnect, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> PatchAsync(string project, string interconnect, Interconnect interconnectResource, CallSettings callSettings = null)
```

Updates the specified interconnect with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`interconnect`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the interconnect to update.

`interconnectResource`

`[Interconnect](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Interconnect)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
InterconnectsClient interconnectsClient = await InterconnectsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string interconnect = "";
Interconnect interconnectResource = new Interconnect();
// Make the request
lro::Operation<Operation, Operation> response = await interconnectsClient.PatchAsync(project, interconnect, interconnectResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await interconnectsClient.PollOncePatchAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### PatchAsync(String, String, Interconnect, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> PatchAsync(string project, string interconnect, Interconnect interconnectResource, CancellationToken cancellationToken)
```

Updates the specified interconnect with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`interconnect`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the interconnect to update.

`interconnectResource`

`[Interconnect](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Interconnect)`  

The body resource for this request

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
InterconnectsClient interconnectsClient = await InterconnectsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string interconnect = "";
Interconnect interconnectResource = new Interconnect();
// Make the request
lro::Operation<Operation, Operation> response = await interconnectsClient.PatchAsync(project, interconnect, interconnectResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await interconnectsClient.PollOncePatchAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
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

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation)>`

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

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation)>>`

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

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation)>`

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

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation)>>`

A task representing the result of polling the operation.

### PollOncePatch(String, CallSettings)

```
public virtual Operation<Operation, Operation> PollOncePatch(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `Patch`.

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

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation)>`

The result of polling the operation.

### PollOncePatchAsync(String, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> PollOncePatchAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `Patch` .

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

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.Operation)>>`

A task representing the result of polling the operation.

### ShutdownDefaultChannelsAsync()

```
public static Task ShutdownDefaultChannelsAsync()
```

Shuts down any channels automatically created by [Create()](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.InterconnectsClient#Google_Cloud_Compute_V1_InterconnectsClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.InterconnectsClient#Google_Cloud_Compute_V1_InterconnectsClient_CreateAsync_System_Threading_CancellationToken_). Channels which weren't automatically created are not affected.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A task representing the asynchronous shutdown operation.

**Remarks**

After calling this method, further calls to [Create()](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.InterconnectsClient#Google_Cloud_Compute_V1_InterconnectsClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.3.0/Google.Cloud.Compute.V1.InterconnectsClient#Google_Cloud_Compute_V1_InterconnectsClient_CreateAsync_System_Threading_CancellationToken_) will create new channels, which could in turn be shut down by another call to this method.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
