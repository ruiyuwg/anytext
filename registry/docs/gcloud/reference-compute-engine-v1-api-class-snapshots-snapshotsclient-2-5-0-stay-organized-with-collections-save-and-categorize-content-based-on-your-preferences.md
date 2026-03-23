-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class Snapshots.SnapshotsClient (2.5.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public class SnapshotsClient : ClientBase<Snapshots.SnapshotsClient>
```

Reference documentation and code samples for the Compute Engine v1 API class Snapshots.SnapshotsClient.

Client for Snapshots

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> [ClientBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.html) \> [ClientBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase-1.html)<[Snapshots.SnapshotsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Snapshots.SnapshotsClient)\> \> Snapshots.SnapshotsClient

## Inherited Members

[ClientBase<Snapshots.SnapshotsClient>.WithHost(String)](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase-1.html#Grpc_Core_ClientBase_1_WithHost_System_String_)

[ClientBase.CallInvoker](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.html#Grpc_Core_ClientBase_CallInvoker)

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Constructors

### SnapshotsClient()

```
protected SnapshotsClient()
```

Protected parameterless constructor to allow creation of test doubles.

### SnapshotsClient(CallInvoker)

```
public SnapshotsClient(CallInvoker callInvoker)
```

Creates a new client for Snapshots that uses a custom `CallInvoker`.

**Parameter**

**Name**

**Description**

`callInvoker`

`[CallInvoker](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallInvoker.html)`  

The callInvoker to use to make remote calls.

### SnapshotsClient(ChannelBase)

```
public SnapshotsClient(ChannelBase channel)
```

Creates a new client for Snapshots

**Parameter**

**Name**

**Description**

`channel`

`[ChannelBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ChannelBase.html)`  

The channel to use to make remote calls.

### SnapshotsClient(ClientBase.ClientBaseConfiguration)

```
protected SnapshotsClient(ClientBase.ClientBaseConfiguration configuration)
```

Protected constructor to allow creation of configured clients.

**Parameter**

**Name**

**Description**

`configuration`

`[ClientBase.ClientBaseConfiguration](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.ClientBaseConfiguration.html)`  

The client configuration.

## Methods

### CreateOperationsClientForGlobalOperations()

```
public virtual Operations.OperationsClient CreateOperationsClientForGlobalOperations()
```

Creates a new instance of [Operations.OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operations.OperationsClient.html) using the same call invoker as this client, delegating to GlobalOperations.

**Returns**

**Type**

**Description**

`[Operations.OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operations.OperationsClient.html)`

A new Operations client for the same target as this client.

### Delete(DeleteSnapshotRequest, CallOptions)

```
public virtual Operation Delete(DeleteSnapshotRequest request, CallOptions options)
```

Deletes the specified Snapshot resource. Keep in mind that deleting a single snapshot might not necessarily delete all the data on that snapshot. If any data on the snapshot that is marked for deletion is needed for subsequent snapshots, the data will be moved to the next corresponding snapshot. For more information, see Deleting snapshots.

**Parameters**

**Name**

**Description**

`request`

`[DeleteSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.DeleteSnapshotRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### Delete(DeleteSnapshotRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual Operation Delete(DeleteSnapshotRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Deletes the specified Snapshot resource. Keep in mind that deleting a single snapshot might not necessarily delete all the data on that snapshot. If any data on the snapshot that is marked for deletion is needed for subsequent snapshots, the data will be moved to the next corresponding snapshot. For more information, see Deleting snapshots.

**Parameters**

**Name**

**Description**

`request`

`[DeleteSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.DeleteSnapshotRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)>`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### DeleteAsync(DeleteSnapshotRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> DeleteAsync(DeleteSnapshotRequest request, CallOptions options)
```

Deletes the specified Snapshot resource. Keep in mind that deleting a single snapshot might not necessarily delete all the data on that snapshot. If any data on the snapshot that is marked for deletion is needed for subsequent snapshots, the data will be moved to the next corresponding snapshot. For more information, see Deleting snapshots.

**Parameters**

**Name**

**Description**

`request`

`[DeleteSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.DeleteSnapshotRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>`

The call object.

### DeleteAsync(DeleteSnapshotRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> DeleteAsync(DeleteSnapshotRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Deletes the specified Snapshot resource. Keep in mind that deleting a single snapshot might not necessarily delete all the data on that snapshot. If any data on the snapshot that is marked for deletion is needed for subsequent snapshots, the data will be moved to the next corresponding snapshot. For more information, see Deleting snapshots.

**Parameters**

**Name**

**Description**

`request`

`[DeleteSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.DeleteSnapshotRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)>`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>`

The call object.

### Get(GetSnapshotRequest, CallOptions)

```
public virtual Snapshot Get(GetSnapshotRequest request, CallOptions options)
```

Returns the specified Snapshot resource. Gets a list of available snapshots by making a list() request.

**Parameters**

**Name**

**Description**

`request`

`[GetSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.GetSnapshotRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Snapshot](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Snapshot)`

The response received from the server.

### Get(GetSnapshotRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual Snapshot Get(GetSnapshotRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Returns the specified Snapshot resource. Gets a list of available snapshots by making a list() request.

**Parameters**

**Name**

**Description**

`request`

`[GetSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.GetSnapshotRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)>`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[Snapshot](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Snapshot)`

The response received from the server.

### GetAsync(GetSnapshotRequest, CallOptions)

```
public virtual AsyncUnaryCall<Snapshot> GetAsync(GetSnapshotRequest request, CallOptions options)
```

Returns the specified Snapshot resource. Gets a list of available snapshots by making a list() request.

**Parameters**

**Name**

**Description**

`request`

`[GetSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.GetSnapshotRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Snapshot](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Snapshot)>`

The call object.

### GetAsync(GetSnapshotRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<Snapshot> GetAsync(GetSnapshotRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Returns the specified Snapshot resource. Gets a list of available snapshots by making a list() request.

**Parameters**

**Name**

**Description**

`request`

`[GetSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.GetSnapshotRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)>`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Snapshot](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Snapshot)>`

The call object.

### GetIamPolicy(GetIamPolicySnapshotRequest, CallOptions)

```
public virtual Policy GetIamPolicy(GetIamPolicySnapshotRequest request, CallOptions options)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicySnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.GetIamPolicySnapshotRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Policy)`

The response received from the server.

### GetIamPolicy(GetIamPolicySnapshotRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual Policy GetIamPolicy(GetIamPolicySnapshotRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicySnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.GetIamPolicySnapshotRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)>`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Policy)`

The response received from the server.

### GetIamPolicyAsync(GetIamPolicySnapshotRequest, CallOptions)

```
public virtual AsyncUnaryCall<Policy> GetIamPolicyAsync(GetIamPolicySnapshotRequest request, CallOptions options)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicySnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.GetIamPolicySnapshotRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Policy)>`

The call object.

### GetIamPolicyAsync(GetIamPolicySnapshotRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<Policy> GetIamPolicyAsync(GetIamPolicySnapshotRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicySnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.GetIamPolicySnapshotRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)>`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Policy)>`

The call object.

### Insert(InsertSnapshotRequest, CallOptions)

```
public virtual Operation Insert(InsertSnapshotRequest request, CallOptions options)
```

Creates a snapshot in the specified project using the data included in the request. For regular snapshot creation, consider using this method instead of disks.createSnapshot, as this method supports more features, such as creating snapshots in a project different from the source disk project.

**Parameters**

**Name**

**Description**

`request`

`[InsertSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.InsertSnapshotRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### Insert(InsertSnapshotRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual Operation Insert(InsertSnapshotRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Creates a snapshot in the specified project using the data included in the request. For regular snapshot creation, consider using this method instead of disks.createSnapshot, as this method supports more features, such as creating snapshots in a project different from the source disk project.

**Parameters**

**Name**

**Description**

`request`

`[InsertSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.InsertSnapshotRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)>`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### InsertAsync(InsertSnapshotRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> InsertAsync(InsertSnapshotRequest request, CallOptions options)
```

Creates a snapshot in the specified project using the data included in the request. For regular snapshot creation, consider using this method instead of disks.createSnapshot, as this method supports more features, such as creating snapshots in a project different from the source disk project.

**Parameters**

**Name**

**Description**

`request`

`[InsertSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.InsertSnapshotRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>`

The call object.

### InsertAsync(InsertSnapshotRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> InsertAsync(InsertSnapshotRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Creates a snapshot in the specified project using the data included in the request. For regular snapshot creation, consider using this method instead of disks.createSnapshot, as this method supports more features, such as creating snapshots in a project different from the source disk project.

**Parameters**

**Name**

**Description**

`request`

`[InsertSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.InsertSnapshotRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)>`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>`

The call object.

### List(ListSnapshotsRequest, CallOptions)

```
public virtual SnapshotList List(ListSnapshotsRequest request, CallOptions options)
```

Retrieves the list of Snapshot resources contained within the specified project.

**Parameters**

**Name**

**Description**

`request`

`[ListSnapshotsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.ListSnapshotsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[SnapshotList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SnapshotList)`

The response received from the server.

### List(ListSnapshotsRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual SnapshotList List(ListSnapshotsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Retrieves the list of Snapshot resources contained within the specified project.

**Parameters**

**Name**

**Description**

`request`

`[ListSnapshotsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.ListSnapshotsRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)>`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[SnapshotList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SnapshotList)`

The response received from the server.

### ListAsync(ListSnapshotsRequest, CallOptions)

```
public virtual AsyncUnaryCall<SnapshotList> ListAsync(ListSnapshotsRequest request, CallOptions options)
```

Retrieves the list of Snapshot resources contained within the specified project.

**Parameters**

**Name**

**Description**

`request`

`[ListSnapshotsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.ListSnapshotsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[SnapshotList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SnapshotList)>`

The call object.

### ListAsync(ListSnapshotsRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<SnapshotList> ListAsync(ListSnapshotsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Retrieves the list of Snapshot resources contained within the specified project.

**Parameters**

**Name**

**Description**

`request`

`[ListSnapshotsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.ListSnapshotsRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)>`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[SnapshotList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SnapshotList)>`

The call object.

### NewInstance(ClientBase.ClientBaseConfiguration)

```
protected override Snapshots.SnapshotsClient NewInstance(ClientBase.ClientBaseConfiguration configuration)
```

Creates a new instance of client from given `ClientBaseConfiguration`.

**Parameter**

**Name**

**Description**

`configuration`

`[ClientBase.ClientBaseConfiguration](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.ClientBaseConfiguration.html)`  

**Returns**

**Type**

**Description**

`[Snapshots.SnapshotsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Snapshots.SnapshotsClient)`

**Overrides**

Grpc.Core.ClientBase<Google.Cloud.Compute.V1.Snapshots.SnapshotsClient>.NewInstance(Grpc.Core.ClientBase.ClientBaseConfiguration)

### SetIamPolicy(SetIamPolicySnapshotRequest, CallOptions)

```
public virtual Policy SetIamPolicy(SetIamPolicySnapshotRequest request, CallOptions options)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicySnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SetIamPolicySnapshotRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Policy)`

The response received from the server.

### SetIamPolicy(SetIamPolicySnapshotRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual Policy SetIamPolicy(SetIamPolicySnapshotRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicySnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SetIamPolicySnapshotRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)>`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Policy)`

The response received from the server.

### SetIamPolicyAsync(SetIamPolicySnapshotRequest, CallOptions)

```
public virtual AsyncUnaryCall<Policy> SetIamPolicyAsync(SetIamPolicySnapshotRequest request, CallOptions options)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicySnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SetIamPolicySnapshotRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Policy)>`

The call object.

### SetIamPolicyAsync(SetIamPolicySnapshotRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<Policy> SetIamPolicyAsync(SetIamPolicySnapshotRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicySnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SetIamPolicySnapshotRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)>`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Policy)>`

The call object.

### SetLabels(SetLabelsSnapshotRequest, CallOptions)

```
public virtual Operation SetLabels(SetLabelsSnapshotRequest request, CallOptions options)
```

Sets the labels on a snapshot. To learn more about labels, read the Labeling Resources documentation.

**Parameters**

**Name**

**Description**

`request`

`[SetLabelsSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SetLabelsSnapshotRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### SetLabels(SetLabelsSnapshotRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual Operation SetLabels(SetLabelsSnapshotRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Sets the labels on a snapshot. To learn more about labels, read the Labeling Resources documentation.

**Parameters**

**Name**

**Description**

`request`

`[SetLabelsSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SetLabelsSnapshotRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)>`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### SetLabelsAsync(SetLabelsSnapshotRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> SetLabelsAsync(SetLabelsSnapshotRequest request, CallOptions options)
```

Sets the labels on a snapshot. To learn more about labels, read the Labeling Resources documentation.

**Parameters**

**Name**

**Description**

`request`

`[SetLabelsSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SetLabelsSnapshotRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>`

The call object.

### SetLabelsAsync(SetLabelsSnapshotRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> SetLabelsAsync(SetLabelsSnapshotRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Sets the labels on a snapshot. To learn more about labels, read the Labeling Resources documentation.

**Parameters**

**Name**

**Description**

`request`

`[SetLabelsSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SetLabelsSnapshotRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)>`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>`

The call object.

### TestIamPermissions(TestIamPermissionsSnapshotRequest, CallOptions)

```
public virtual TestPermissionsResponse TestIamPermissions(TestIamPermissionsSnapshotRequest request, CallOptions options)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.TestIamPermissionsSnapshotRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.TestPermissionsResponse)`

The response received from the server.

### TestIamPermissions(TestIamPermissionsSnapshotRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual TestPermissionsResponse TestIamPermissions(TestIamPermissionsSnapshotRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.TestIamPermissionsSnapshotRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)>`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.TestPermissionsResponse)`

The response received from the server.

### TestIamPermissionsAsync(TestIamPermissionsSnapshotRequest, CallOptions)

```
public virtual AsyncUnaryCall<TestPermissionsResponse> TestIamPermissionsAsync(TestIamPermissionsSnapshotRequest request, CallOptions options)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.TestIamPermissionsSnapshotRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.TestPermissionsResponse)>`

The call object.

### TestIamPermissionsAsync(TestIamPermissionsSnapshotRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<TestPermissionsResponse> TestIamPermissionsAsync(TestIamPermissionsSnapshotRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.TestIamPermissionsSnapshotRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)>`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.TestPermissionsResponse)>`

The call object.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
