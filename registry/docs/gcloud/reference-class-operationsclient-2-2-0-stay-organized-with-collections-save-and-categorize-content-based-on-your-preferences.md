-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class OperationsClient (2.2.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.2.0keyboard\_arrow\_down

-   [3.5.0 (latest)](/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient)
-   [3.4.0](/dotnet/docs/reference/Google.LongRunning/3.4.0/Google.LongRunning.OperationsClient)
-   [3.3.0](/dotnet/docs/reference/Google.LongRunning/3.3.0/Google.LongRunning.OperationsClient)
-   [3.2.0](/dotnet/docs/reference/Google.LongRunning/3.2.0/Google.LongRunning.OperationsClient)
-   [3.1.0](/dotnet/docs/reference/Google.LongRunning/3.1.0/Google.LongRunning.OperationsClient)
-   [3.0.0](/dotnet/docs/reference/Google.LongRunning/3.0.0/Google.LongRunning.OperationsClient)
-   [2.3.0](/dotnet/docs/reference/Google.LongRunning/2.3.0/Google.LongRunning.OperationsClient)
-   [2.2.0](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.OperationsClient)

```
public abstract class OperationsClient
```

Operations client wrapper, for convenient use.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> OperationsClient

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Derived Types

[OperationsClientImpl](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.OperationsClientImpl)

## Namespace

[Google.LongRunning](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning)

## Assembly

Google.LongRunning.dll

## Remarks

Manages long-running operations with an API service.

When an API method normally takes long time to complete, it can be designed to return \[Operation\]\[google.longrunning.Operation\] to the client, and the client can use this interface to receive the real response asynchronously by polling the operation resource, or pass the operation resource to another API (such as Google Cloud Pub/Sub API) to receive the response. Any API service that returns long-running operations should implement the `Operations` interface so developers can have a consistent client experience.

## Properties

### Clock

```
public virtual IClock Clock { get; }
```

The clock used for timeouts, retries and polling.

**Property Value**

**Type**

**Description**

`[IClock](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IClock.html)`

### DefaultEndpoint

```
public static string DefaultEndpoint { get; }
```

The default endpoint for the Operations service, which is a host of "longrunning.googleapis.com" and a port of 443.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### DefaultPollSettings

```
public virtual PollSettings DefaultPollSettings { get; }
```

The poll settings used by default for repeated polling operations. May be null if no defaults have been set.

**Property Value**

**Type**

**Description**

`[PollSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PollSettings.html)`

### DefaultScopes

```
public static IReadOnlyList<string> DefaultScopes { get; }
```

The default Operations scopes.

**Property Value**

**Type**

**Description**

`[IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)<[String](https://learn.microsoft.com/dotnet/api/system.string)>`

**Remarks**

The default Operations scopes are:

### GrpcClient

```
public virtual Operations.OperationsClient GrpcClient { get; }
```

The underlying gRPC Operations client

**Property Value**

**Type**

**Description**

`[Operations.OperationsClient](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.Operations.OperationsClient)`

### Scheduler

```
public virtual IScheduler Scheduler { get; }
```

The scheduler used for timeouts, retries and polling.

**Property Value**

**Type**

**Description**

`[IScheduler](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IScheduler.html)`

## Methods

### CancelOperation(CancelOperationRequest, CallSettings)

```
public virtual void CancelOperation(CancelOperationRequest request, CallSettings callSettings = null)
```

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use \[Operations.GetOperation\]\[google.longrunning.Operations.GetOperation\] or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an \[Operation.error\]\[google.longrunning.Operation.error\] value with a \[google.rpc.Status.code\]\[google.rpc.Status.code\] of 1, corresponding to `Code.CANCELLED`.

**Parameters**

**Name**

**Description**

`request`

`[CancelOperationRequest](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.CancelOperationRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
OperationsClient operationsClient = OperationsClient.Create();
// Initialize request argument(s)
CancelOperationRequest request = new CancelOperationRequest { Name = "", };
// Make the request
operationsClient.CancelOperation(request);
```

### CancelOperation(String, CallSettings)

```
public virtual void CancelOperation(string name, CallSettings callSettings = null)
```

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use \[Operations.GetOperation\]\[google.longrunning.Operations.GetOperation\] or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an \[Operation.error\]\[google.longrunning.Operation.error\] value with a \[google.rpc.Status.code\]\[google.rpc.Status.code\] of 1, corresponding to `Code.CANCELLED`.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the operation resource to be cancelled.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
OperationsClient operationsClient = OperationsClient.Create();
// Initialize request argument(s)
string name = "";
// Make the request
operationsClient.CancelOperation(name);
```

### CancelOperationAsync(CancelOperationRequest, CallSettings)

```
public virtual Task CancelOperationAsync(CancelOperationRequest request, CallSettings callSettings = null)
```

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use \[Operations.GetOperation\]\[google.longrunning.Operations.GetOperation\] or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an \[Operation.error\]\[google.longrunning.Operation.error\] value with a \[google.rpc.Status.code\]\[google.rpc.Status.code\] of 1, corresponding to `Code.CANCELLED`.

**Parameters**

**Name**

**Description**

`request`

`[CancelOperationRequest](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.CancelOperationRequest)`  

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
OperationsClient operationsClient = await OperationsClient.CreateAsync();
// Initialize request argument(s)
CancelOperationRequest request = new CancelOperationRequest { Name = "", };
// Make the request
await operationsClient.CancelOperationAsync(request);
```

### CancelOperationAsync(CancelOperationRequest, CancellationToken)

```
public virtual Task CancelOperationAsync(CancelOperationRequest request, CancellationToken cancellationToken)
```

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use \[Operations.GetOperation\]\[google.longrunning.Operations.GetOperation\] or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an \[Operation.error\]\[google.longrunning.Operation.error\] value with a \[google.rpc.Status.code\]\[google.rpc.Status.code\] of 1, corresponding to `Code.CANCELLED`.

**Parameters**

**Name**

**Description**

`request`

`[CancelOperationRequest](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.CancelOperationRequest)`  

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
OperationsClient operationsClient = await OperationsClient.CreateAsync();
// Initialize request argument(s)
CancelOperationRequest request = new CancelOperationRequest { Name = "", };
// Make the request
await operationsClient.CancelOperationAsync(request);
```

### CancelOperationAsync(String, CallSettings)

```
public virtual Task CancelOperationAsync(string name, CallSettings callSettings = null)
```

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use \[Operations.GetOperation\]\[google.longrunning.Operations.GetOperation\] or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an \[Operation.error\]\[google.longrunning.Operation.error\] value with a \[google.rpc.Status.code\]\[google.rpc.Status.code\] of 1, corresponding to `Code.CANCELLED`.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the operation resource to be cancelled.

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
OperationsClient operationsClient = await OperationsClient.CreateAsync();
// Initialize request argument(s)
string name = "";
// Make the request
await operationsClient.CancelOperationAsync(name);
```

### CancelOperationAsync(String, CancellationToken)

```
public virtual Task CancelOperationAsync(string name, CancellationToken cancellationToken)
```

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use \[Operations.GetOperation\]\[google.longrunning.Operations.GetOperation\] or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an \[Operation.error\]\[google.longrunning.Operation.error\] value with a \[google.rpc.Status.code\]\[google.rpc.Status.code\] of 1, corresponding to `Code.CANCELLED`.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the operation resource to be cancelled.

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
OperationsClient operationsClient = await OperationsClient.CreateAsync();
// Initialize request argument(s)
string name = "";
// Make the request
await operationsClient.CancelOperationAsync(name);
```

### Create()

```
public static OperationsClient Create()
```

Synchronously creates a [OperationsClient](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.OperationsClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [OperationsClientBuilder](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.OperationsClientBuilder).

**Returns**

**Type**

**Description**

`[OperationsClient](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.OperationsClient)`

The created [OperationsClient](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.OperationsClient).

### CreateAsync(CancellationToken)

```
public static Task<OperationsClient> CreateAsync(CancellationToken cancellationToken = default(CancellationToken))
```

Asynchronously creates a [OperationsClient](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.OperationsClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [OperationsClientBuilder](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.OperationsClientBuilder).

**Parameter**

**Name**

**Description**

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

The [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use while creating the client.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[OperationsClient](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.OperationsClient)>`

The task representing the created [OperationsClient](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.OperationsClient).

### DeleteOperation(DeleteOperationRequest, CallSettings)

```
public virtual void DeleteOperation(DeleteOperationRequest request, CallSettings callSettings = null)
```

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

**Parameters**

**Name**

**Description**

`request`

`[DeleteOperationRequest](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.DeleteOperationRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
OperationsClient operationsClient = OperationsClient.Create();
// Initialize request argument(s)
DeleteOperationRequest request = new DeleteOperationRequest { Name = "", };
// Make the request
operationsClient.DeleteOperation(request);
```

### DeleteOperation(String, CallSettings)

```
public virtual void DeleteOperation(string name, CallSettings callSettings = null)
```

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the operation resource to be deleted.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
OperationsClient operationsClient = OperationsClient.Create();
// Initialize request argument(s)
string name = "";
// Make the request
operationsClient.DeleteOperation(name);
```

### DeleteOperationAsync(DeleteOperationRequest, CallSettings)

```
public virtual Task DeleteOperationAsync(DeleteOperationRequest request, CallSettings callSettings = null)
```

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

**Parameters**

**Name**

**Description**

`request`

`[DeleteOperationRequest](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.DeleteOperationRequest)`  

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
OperationsClient operationsClient = await OperationsClient.CreateAsync();
// Initialize request argument(s)
DeleteOperationRequest request = new DeleteOperationRequest { Name = "", };
// Make the request
await operationsClient.DeleteOperationAsync(request);
```

### DeleteOperationAsync(DeleteOperationRequest, CancellationToken)

```
public virtual Task DeleteOperationAsync(DeleteOperationRequest request, CancellationToken cancellationToken)
```

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

**Parameters**

**Name**

**Description**

`request`

`[DeleteOperationRequest](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.DeleteOperationRequest)`  

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
OperationsClient operationsClient = await OperationsClient.CreateAsync();
// Initialize request argument(s)
DeleteOperationRequest request = new DeleteOperationRequest { Name = "", };
// Make the request
await operationsClient.DeleteOperationAsync(request);
```

### DeleteOperationAsync(String, CallSettings)

```
public virtual Task DeleteOperationAsync(string name, CallSettings callSettings = null)
```

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the operation resource to be deleted.

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
OperationsClient operationsClient = await OperationsClient.CreateAsync();
// Initialize request argument(s)
string name = "";
// Make the request
await operationsClient.DeleteOperationAsync(name);
```

### DeleteOperationAsync(String, CancellationToken)

```
public virtual Task DeleteOperationAsync(string name, CancellationToken cancellationToken)
```

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the operation resource to be deleted.

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
OperationsClient operationsClient = await OperationsClient.CreateAsync();
// Initialize request argument(s)
string name = "";
// Make the request
await operationsClient.DeleteOperationAsync(name);
```

### GetEffectiveCallSettingsForGetOperation(CallSettings)

```
protected virtual CallSettings GetEffectiveCallSettingsForGetOperation(CallSettings callSettings)
```

Return the [CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) that would be used by a call to [GetOperation(GetOperationRequest, CallSettings)](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.OperationsClient#Google_LongRunning_OperationsClient_GetOperation_Google_LongRunning_GetOperationRequest_Google_Api_Gax_Grpc_CallSettings_), using the base settings of this client and the specified per-call overrides.

**Parameter**

**Name**

**Description**

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

The per-call override, if any.

**Returns**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

The effective call settings for a GetOperation RPC.

**Remarks**

This method is used when polling, to determine the appropriate timeout and cancellation token to use for each call.

### GetOperation(GetOperationRequest, CallSettings)

```
public virtual Operation GetOperation(GetOperationRequest request, CallSettings callSettings = null)
```

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

**Parameters**

**Name**

**Description**

`request`

`[GetOperationRequest](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.GetOperationRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.Operation)`

The RPC response.

**Example**

```
// Create client
OperationsClient operationsClient = OperationsClient.Create();
// Initialize request argument(s)
GetOperationRequest request = new GetOperationRequest { Name = "", };
// Make the request
Operation response = operationsClient.GetOperation(request);
```

### GetOperation(String, CallSettings)

```
public virtual Operation GetOperation(string name, CallSettings callSettings = null)
```

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the operation resource.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.Operation)`

The RPC response.

**Example**

```
// Create client
OperationsClient operationsClient = OperationsClient.Create();
// Initialize request argument(s)
string name = "";
// Make the request
Operation response = operationsClient.GetOperation(name);
```

### GetOperationAsync(GetOperationRequest, CallSettings)

```
public virtual Task<Operation> GetOperationAsync(GetOperationRequest request, CallSettings callSettings = null)
```

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

**Parameters**

**Name**

**Description**

`request`

`[GetOperationRequest](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.GetOperationRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.Operation)>`

A Task containing the RPC response.

**Example**

```
// Create client
OperationsClient operationsClient = await OperationsClient.CreateAsync();
// Initialize request argument(s)
GetOperationRequest request = new GetOperationRequest { Name = "", };
// Make the request
Operation response = await operationsClient.GetOperationAsync(request);
```

### GetOperationAsync(GetOperationRequest, CancellationToken)

```
public virtual Task<Operation> GetOperationAsync(GetOperationRequest request, CancellationToken cancellationToken)
```

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

**Parameters**

**Name**

**Description**

`request`

`[GetOperationRequest](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.GetOperationRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.Operation)>`

A Task containing the RPC response.

**Example**

```
// Create client
OperationsClient operationsClient = await OperationsClient.CreateAsync();
// Initialize request argument(s)
GetOperationRequest request = new GetOperationRequest { Name = "", };
// Make the request
Operation response = await operationsClient.GetOperationAsync(request);
```

### GetOperationAsync(String, CallSettings)

```
public virtual Task<Operation> GetOperationAsync(string name, CallSettings callSettings = null)
```

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the operation resource.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.Operation)>`

A Task containing the RPC response.

**Example**

```
// Create client
OperationsClient operationsClient = await OperationsClient.CreateAsync();
// Initialize request argument(s)
string name = "";
// Make the request
Operation response = await operationsClient.GetOperationAsync(name);
```

### GetOperationAsync(String, CancellationToken)

```
public virtual Task<Operation> GetOperationAsync(string name, CancellationToken cancellationToken)
```

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the operation resource.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.Operation)>`

A Task containing the RPC response.

**Example**

```
// Create client
OperationsClient operationsClient = await OperationsClient.CreateAsync();
// Initialize request argument(s)
string name = "";
// Make the request
Operation response = await operationsClient.GetOperationAsync(name);
```

### ListOperations(ListOperationsRequest, CallSettings)

```
public virtual PagedEnumerable<ListOperationsResponse, Operation> ListOperations(ListOperationsRequest request, CallSettings callSettings = null)
```

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `&quot;/v1/{name=users/*}/operations&quot;` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

**Parameters**

**Name**

**Description**

`request`

`[ListOperationsRequest](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.ListOperationsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListOperationsResponse](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.ListOperationsResponse), [Operation](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.Operation)>`

A pageable sequence of [Operation](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.Operation) resources.

**Example**

```
// Create client
OperationsClient operationsClient = OperationsClient.Create();
// Initialize request argument(s)
ListOperationsRequest request = new ListOperationsRequest { Filter = "", Name = "", };
// Make the request
PagedEnumerable<ListOperationsResponse, Operation> response = operationsClient.ListOperations(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (Operation item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListOperationsResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Operation item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Operation> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Operation item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListOperations(String, String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedEnumerable<ListOperationsResponse, Operation> ListOperations(string name, string filter, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `&quot;/v1/{name=users/*}/operations&quot;` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the operation's parent resource.

`filter`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The standard list filter.

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

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListOperationsResponse](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.ListOperationsResponse), [Operation](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.Operation)>`

A pageable sequence of [Operation](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.Operation) resources.

**Example**

```
// Create client
OperationsClient operationsClient = OperationsClient.Create();
// Initialize request argument(s)
string name = "";
string filter = "";
// Make the request
PagedEnumerable<ListOperationsResponse, Operation> response = operationsClient.ListOperations(name, filter);

// Iterate over all response items, lazily performing RPCs as required
foreach (Operation item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListOperationsResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Operation item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Operation> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Operation item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListOperationsAsync(ListOperationsRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListOperationsResponse, Operation> ListOperationsAsync(ListOperationsRequest request, CallSettings callSettings = null)
```

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `&quot;/v1/{name=users/*}/operations&quot;` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

**Parameters**

**Name**

**Description**

`request`

`[ListOperationsRequest](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.ListOperationsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListOperationsResponse](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.ListOperationsResponse), [Operation](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.Operation)>`

A pageable asynchronous sequence of [Operation](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.Operation) resources.

**Example**

```
// Create client
OperationsClient operationsClient = await OperationsClient.CreateAsync();
// Initialize request argument(s)
ListOperationsRequest request = new ListOperationsRequest { Filter = "", Name = "", };
// Make the request
PagedAsyncEnumerable<ListOperationsResponse, Operation> response = operationsClient.ListOperationsAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((Operation item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListOperationsResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Operation item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Operation> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Operation item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListOperationsAsync(String, String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedAsyncEnumerable<ListOperationsResponse, Operation> ListOperationsAsync(string name, string filter, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `&quot;/v1/{name=users/*}/operations&quot;` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

**Parameters**

**Name**

**Description**

`name`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the operation's parent resource.

`filter`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The standard list filter.

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

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListOperationsResponse](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.ListOperationsResponse), [Operation](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.Operation)>`

A pageable asynchronous sequence of [Operation](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.Operation) resources.

**Example**

```
// Create client
OperationsClient operationsClient = await OperationsClient.CreateAsync();
// Initialize request argument(s)
string name = "";
string filter = "";
// Make the request
PagedAsyncEnumerable<ListOperationsResponse, Operation> response = operationsClient.ListOperationsAsync(name, filter);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((Operation item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListOperationsResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Operation item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Operation> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Operation item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ShutdownDefaultChannelsAsync()

```
public static Task ShutdownDefaultChannelsAsync()
```

Shuts down any channels automatically created by [Create()](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.OperationsClient#Google_LongRunning_OperationsClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.OperationsClient#Google_LongRunning_OperationsClient_CreateAsync_System_Threading_CancellationToken_). Channels which weren't automatically created are not affected.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A task representing the asynchronous shutdown operation.

**Remarks**

After calling this method, further calls to [Create()](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.OperationsClient#Google_LongRunning_OperationsClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.OperationsClient#Google_LongRunning_OperationsClient_CreateAsync_System_Threading_CancellationToken_) will create new channels, which could in turn be shut down by another call to this method.

### WaitOperation(WaitOperationRequest, CallSettings)

```
public virtual Operation WaitOperation(WaitOperationRequest request, CallSettings callSettings = null)
```

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

**Parameters**

**Name**

**Description**

`request`

`[WaitOperationRequest](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.WaitOperationRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.Operation)`

The RPC response.

**Example**

```
// Create client
OperationsClient operationsClient = OperationsClient.Create();
// Initialize request argument(s)
WaitOperationRequest request = new WaitOperationRequest
{
    Name = "",
    Timeout = new Duration(),
};
// Make the request
Operation response = operationsClient.WaitOperation(request);
```

### WaitOperationAsync(WaitOperationRequest, CallSettings)

```
public virtual Task<Operation> WaitOperationAsync(WaitOperationRequest request, CallSettings callSettings = null)
```

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

**Parameters**

**Name**

**Description**

`request`

`[WaitOperationRequest](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.WaitOperationRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.Operation)>`

A Task containing the RPC response.

**Example**

```
// Create client
OperationsClient operationsClient = await OperationsClient.CreateAsync();
// Initialize request argument(s)
WaitOperationRequest request = new WaitOperationRequest
{
    Name = "",
    Timeout = new Duration(),
};
// Make the request
Operation response = await operationsClient.WaitOperationAsync(request);
```

### WaitOperationAsync(WaitOperationRequest, CancellationToken)

```
public virtual Task<Operation> WaitOperationAsync(WaitOperationRequest request, CancellationToken cancellationToken)
```

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

**Parameters**

**Name**

**Description**

`request`

`[WaitOperationRequest](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.WaitOperationRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](/dotnet/docs/reference/Google.LongRunning/2.2.0/Google.LongRunning.Operation)>`

A Task containing the RPC response.

**Example**

```
// Create client
OperationsClient operationsClient = await OperationsClient.CreateAsync();
// Initialize request argument(s)
WaitOperationRequest request = new WaitOperationRequest
{
    Name = "",
    Timeout = new Duration(),
};
// Make the request
Operation response = await operationsClient.WaitOperationAsync(request);
```

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
