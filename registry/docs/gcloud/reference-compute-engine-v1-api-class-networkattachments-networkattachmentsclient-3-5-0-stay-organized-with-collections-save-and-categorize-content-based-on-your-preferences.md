-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class NetworkAttachments.NetworkAttachmentsClient (3.5.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public class NetworkAttachments.NetworkAttachmentsClient : ClientBase<NetworkAttachments.NetworkAttachmentsClient>
```

Reference documentation and code samples for the Compute Engine v1 API class NetworkAttachments.NetworkAttachmentsClient.

Client for NetworkAttachments

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> [ClientBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.html) \> [ClientBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase-1.html)[NetworkAttachments](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.NetworkAttachments)[NetworkAttachmentsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.NetworkAttachments.NetworkAttachmentsClient) \> NetworkAttachments.NetworkAttachmentsClient

## Inherited Members

[ClientBase<NetworkAttachments.NetworkAttachmentsClient>.WithHost(string)](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase-1.html#Grpc_Core_ClientBase_1_WithHost_System_String_)

[ClientBase.CallInvoker](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.html#Grpc_Core_ClientBase_CallInvoker)

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Constructors

### NetworkAttachmentsClient()

```
protected NetworkAttachmentsClient()
```

Protected parameterless constructor to allow creation of test doubles.

### NetworkAttachmentsClient(CallInvoker)

```
public NetworkAttachmentsClient(CallInvoker callInvoker)
```

Creates a new client for NetworkAttachments that uses a custom `CallInvoker`.

**Parameter**

**Name**

**Description**

`callInvoker`

`[CallInvoker](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallInvoker.html)`  

The callInvoker to use to make remote calls.

### NetworkAttachmentsClient(ChannelBase)

```
public NetworkAttachmentsClient(ChannelBase channel)
```

Creates a new client for NetworkAttachments

**Parameter**

**Name**

**Description**

`channel`

`[ChannelBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ChannelBase.html)`  

The channel to use to make remote calls.

### NetworkAttachmentsClient(ClientBaseConfiguration)

```
protected NetworkAttachmentsClient(ClientBase.ClientBaseConfiguration configuration)
```

Protected constructor to allow creation of configured clients.

**Parameter**

**Name**

**Description**

`configuration`

`[ClientBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.html)[ClientBaseConfiguration](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.ClientBaseConfiguration.html)`  

The client configuration.

## Methods

### AggregatedList(AggregatedListNetworkAttachmentsRequest, CallOptions)

```
public virtual NetworkAttachmentAggregatedList AggregatedList(AggregatedListNetworkAttachmentsRequest request, CallOptions options)
```

Retrieves the list of all NetworkAttachment resources, regional and global, available to the specified project. To prevent failure, Google recommends that you set the `returnPartialSuccess` parameter to `true`.

**Parameters**

**Name**

**Description**

`request`

`[AggregatedListNetworkAttachmentsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.AggregatedListNetworkAttachmentsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[NetworkAttachmentAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.NetworkAttachmentAggregatedList)`

The response received from the server.

### AggregatedList(AggregatedListNetworkAttachmentsRequest, Metadata, DateTime?, CancellationToken)

```
public virtual NetworkAttachmentAggregatedList AggregatedList(AggregatedListNetworkAttachmentsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Retrieves the list of all NetworkAttachment resources, regional and global, available to the specified project. To prevent failure, Google recommends that you set the `returnPartialSuccess` parameter to `true`.

**Parameters**

**Name**

**Description**

`request`

`[AggregatedListNetworkAttachmentsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.AggregatedListNetworkAttachmentsRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[NetworkAttachmentAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.NetworkAttachmentAggregatedList)`

The response received from the server.

### AggregatedListAsync(AggregatedListNetworkAttachmentsRequest, CallOptions)

```
public virtual AsyncUnaryCall<NetworkAttachmentAggregatedList> AggregatedListAsync(AggregatedListNetworkAttachmentsRequest request, CallOptions options)
```

Retrieves the list of all NetworkAttachment resources, regional and global, available to the specified project. To prevent failure, Google recommends that you set the `returnPartialSuccess` parameter to `true`.

**Parameters**

**Name**

**Description**

`request`

`[AggregatedListNetworkAttachmentsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.AggregatedListNetworkAttachmentsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[NetworkAttachmentAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.NetworkAttachmentAggregatedList)`

The call object.

### AggregatedListAsync(AggregatedListNetworkAttachmentsRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<NetworkAttachmentAggregatedList> AggregatedListAsync(AggregatedListNetworkAttachmentsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Retrieves the list of all NetworkAttachment resources, regional and global, available to the specified project. To prevent failure, Google recommends that you set the `returnPartialSuccess` parameter to `true`.

**Parameters**

**Name**

**Description**

`request`

`[AggregatedListNetworkAttachmentsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.AggregatedListNetworkAttachmentsRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[NetworkAttachmentAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.NetworkAttachmentAggregatedList)`

The call object.

### CreateOperationsClientForRegionOperations()

```
public virtual Operations.OperationsClient CreateOperationsClientForRegionOperations()
```

Creates a new instance of [Operations.OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operations.OperationsClient.html) using the same call invoker as this client, delegating to RegionOperations.

**Returns**

**Type**

**Description**

`[Operations](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operations.html)[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operations.OperationsClient.html)`

A new Operations client for the same target as this client.

### Delete(DeleteNetworkAttachmentRequest, CallOptions)

```
public virtual Operation Delete(DeleteNetworkAttachmentRequest request, CallOptions options)
```

Deletes the specified NetworkAttachment in the given scope

**Parameters**

**Name**

**Description**

`request`

`[DeleteNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.DeleteNetworkAttachmentRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### Delete(DeleteNetworkAttachmentRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation Delete(DeleteNetworkAttachmentRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Deletes the specified NetworkAttachment in the given scope

**Parameters**

**Name**

**Description**

`request`

`[DeleteNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.DeleteNetworkAttachmentRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### DeleteAsync(DeleteNetworkAttachmentRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> DeleteAsync(DeleteNetworkAttachmentRequest request, CallOptions options)
```

Deletes the specified NetworkAttachment in the given scope

**Parameters**

**Name**

**Description**

`request`

`[DeleteNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.DeleteNetworkAttachmentRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### DeleteAsync(DeleteNetworkAttachmentRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> DeleteAsync(DeleteNetworkAttachmentRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Deletes the specified NetworkAttachment in the given scope

**Parameters**

**Name**

**Description**

`request`

`[DeleteNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.DeleteNetworkAttachmentRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### Get(GetNetworkAttachmentRequest, CallOptions)

```
public virtual NetworkAttachment Get(GetNetworkAttachmentRequest request, CallOptions options)
```

Returns the specified NetworkAttachment resource in the given scope.

**Parameters**

**Name**

**Description**

`request`

`[GetNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.GetNetworkAttachmentRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[NetworkAttachment](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.NetworkAttachment)`

The response received from the server.

### Get(GetNetworkAttachmentRequest, Metadata, DateTime?, CancellationToken)

```
public virtual NetworkAttachment Get(GetNetworkAttachmentRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Returns the specified NetworkAttachment resource in the given scope.

**Parameters**

**Name**

**Description**

`request`

`[GetNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.GetNetworkAttachmentRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[NetworkAttachment](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.NetworkAttachment)`

The response received from the server.

### GetAsync(GetNetworkAttachmentRequest, CallOptions)

```
public virtual AsyncUnaryCall<NetworkAttachment> GetAsync(GetNetworkAttachmentRequest request, CallOptions options)
```

Returns the specified NetworkAttachment resource in the given scope.

**Parameters**

**Name**

**Description**

`request`

`[GetNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.GetNetworkAttachmentRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[NetworkAttachment](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.NetworkAttachment)`

The call object.

### GetAsync(GetNetworkAttachmentRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<NetworkAttachment> GetAsync(GetNetworkAttachmentRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Returns the specified NetworkAttachment resource in the given scope.

**Parameters**

**Name**

**Description**

`request`

`[GetNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.GetNetworkAttachmentRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[NetworkAttachment](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.NetworkAttachment)`

The call object.

### GetIamPolicy(GetIamPolicyNetworkAttachmentRequest, CallOptions)

```
public virtual Policy GetIamPolicy(GetIamPolicyNetworkAttachmentRequest request, CallOptions options)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.GetIamPolicyNetworkAttachmentRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.Policy)`

The response received from the server.

### GetIamPolicy(GetIamPolicyNetworkAttachmentRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Policy GetIamPolicy(GetIamPolicyNetworkAttachmentRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.GetIamPolicyNetworkAttachmentRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.Policy)`

The response received from the server.

### GetIamPolicyAsync(GetIamPolicyNetworkAttachmentRequest, CallOptions)

```
public virtual AsyncUnaryCall<Policy> GetIamPolicyAsync(GetIamPolicyNetworkAttachmentRequest request, CallOptions options)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.GetIamPolicyNetworkAttachmentRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.Policy)`

The call object.

### GetIamPolicyAsync(GetIamPolicyNetworkAttachmentRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Policy> GetIamPolicyAsync(GetIamPolicyNetworkAttachmentRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.GetIamPolicyNetworkAttachmentRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.Policy)`

The call object.

### Insert(InsertNetworkAttachmentRequest, CallOptions)

```
public virtual Operation Insert(InsertNetworkAttachmentRequest request, CallOptions options)
```

Creates a NetworkAttachment in the specified project in the given scope using the parameters that are included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.InsertNetworkAttachmentRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### Insert(InsertNetworkAttachmentRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation Insert(InsertNetworkAttachmentRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Creates a NetworkAttachment in the specified project in the given scope using the parameters that are included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.InsertNetworkAttachmentRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### InsertAsync(InsertNetworkAttachmentRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> InsertAsync(InsertNetworkAttachmentRequest request, CallOptions options)
```

Creates a NetworkAttachment in the specified project in the given scope using the parameters that are included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.InsertNetworkAttachmentRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### InsertAsync(InsertNetworkAttachmentRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> InsertAsync(InsertNetworkAttachmentRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Creates a NetworkAttachment in the specified project in the given scope using the parameters that are included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.InsertNetworkAttachmentRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### List(ListNetworkAttachmentsRequest, CallOptions)

```
public virtual NetworkAttachmentList List(ListNetworkAttachmentsRequest request, CallOptions options)
```

Lists the NetworkAttachments for a project in the given scope.

**Parameters**

**Name**

**Description**

`request`

`[ListNetworkAttachmentsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.ListNetworkAttachmentsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[NetworkAttachmentList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.NetworkAttachmentList)`

The response received from the server.

### List(ListNetworkAttachmentsRequest, Metadata, DateTime?, CancellationToken)

```
public virtual NetworkAttachmentList List(ListNetworkAttachmentsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Lists the NetworkAttachments for a project in the given scope.

**Parameters**

**Name**

**Description**

`request`

`[ListNetworkAttachmentsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.ListNetworkAttachmentsRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[NetworkAttachmentList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.NetworkAttachmentList)`

The response received from the server.

### ListAsync(ListNetworkAttachmentsRequest, CallOptions)

```
public virtual AsyncUnaryCall<NetworkAttachmentList> ListAsync(ListNetworkAttachmentsRequest request, CallOptions options)
```

Lists the NetworkAttachments for a project in the given scope.

**Parameters**

**Name**

**Description**

`request`

`[ListNetworkAttachmentsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.ListNetworkAttachmentsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[NetworkAttachmentList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.NetworkAttachmentList)`

The call object.

### ListAsync(ListNetworkAttachmentsRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<NetworkAttachmentList> ListAsync(ListNetworkAttachmentsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Lists the NetworkAttachments for a project in the given scope.

**Parameters**

**Name**

**Description**

`request`

`[ListNetworkAttachmentsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.ListNetworkAttachmentsRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[NetworkAttachmentList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.NetworkAttachmentList)`

The call object.

### NewInstance(ClientBaseConfiguration)

```
protected override NetworkAttachments.NetworkAttachmentsClient NewInstance(ClientBase.ClientBaseConfiguration configuration)
```

Creates a new instance of client from given `ClientBaseConfiguration`.

**Parameter**

**Name**

**Description**

`configuration`

`[ClientBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.html)[ClientBaseConfiguration](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.ClientBaseConfiguration.html)`  

**Returns**

**Type**

**Description**

`[NetworkAttachments](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.NetworkAttachments)[NetworkAttachmentsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.NetworkAttachments.NetworkAttachmentsClient)`

**Overrides**

Grpc.Core.ClientBase<Google.Cloud.Compute.V1.NetworkAttachments.NetworkAttachmentsClient>.NewInstance(Grpc.Core.ClientBase.ClientBaseConfiguration)

### Patch(PatchNetworkAttachmentRequest, CallOptions)

```
public virtual Operation Patch(PatchNetworkAttachmentRequest request, CallOptions options)
```

Patches the specified NetworkAttachment resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`request`

`[PatchNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.PatchNetworkAttachmentRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### Patch(PatchNetworkAttachmentRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation Patch(PatchNetworkAttachmentRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Patches the specified NetworkAttachment resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`request`

`[PatchNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.PatchNetworkAttachmentRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### PatchAsync(PatchNetworkAttachmentRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> PatchAsync(PatchNetworkAttachmentRequest request, CallOptions options)
```

Patches the specified NetworkAttachment resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`request`

`[PatchNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.PatchNetworkAttachmentRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### PatchAsync(PatchNetworkAttachmentRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> PatchAsync(PatchNetworkAttachmentRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Patches the specified NetworkAttachment resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`request`

`[PatchNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.PatchNetworkAttachmentRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### SetIamPolicy(SetIamPolicyNetworkAttachmentRequest, CallOptions)

```
public virtual Policy SetIamPolicy(SetIamPolicyNetworkAttachmentRequest request, CallOptions options)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.SetIamPolicyNetworkAttachmentRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.Policy)`

The response received from the server.

### SetIamPolicy(SetIamPolicyNetworkAttachmentRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Policy SetIamPolicy(SetIamPolicyNetworkAttachmentRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.SetIamPolicyNetworkAttachmentRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.Policy)`

The response received from the server.

### SetIamPolicyAsync(SetIamPolicyNetworkAttachmentRequest, CallOptions)

```
public virtual AsyncUnaryCall<Policy> SetIamPolicyAsync(SetIamPolicyNetworkAttachmentRequest request, CallOptions options)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.SetIamPolicyNetworkAttachmentRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.Policy)`

The call object.

### SetIamPolicyAsync(SetIamPolicyNetworkAttachmentRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Policy> SetIamPolicyAsync(SetIamPolicyNetworkAttachmentRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.SetIamPolicyNetworkAttachmentRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.Policy)`

The call object.

### TestIamPermissions(TestIamPermissionsNetworkAttachmentRequest, CallOptions)

```
public virtual TestPermissionsResponse TestIamPermissions(TestIamPermissionsNetworkAttachmentRequest request, CallOptions options)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.TestIamPermissionsNetworkAttachmentRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.TestPermissionsResponse)`

The response received from the server.

### TestIamPermissions(TestIamPermissionsNetworkAttachmentRequest, Metadata, DateTime?, CancellationToken)

```
public virtual TestPermissionsResponse TestIamPermissions(TestIamPermissionsNetworkAttachmentRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.TestIamPermissionsNetworkAttachmentRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.TestPermissionsResponse)`

The response received from the server.

### TestIamPermissionsAsync(TestIamPermissionsNetworkAttachmentRequest, CallOptions)

```
public virtual AsyncUnaryCall<TestPermissionsResponse> TestIamPermissionsAsync(TestIamPermissionsNetworkAttachmentRequest request, CallOptions options)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.TestIamPermissionsNetworkAttachmentRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.TestPermissionsResponse)`

The call object.

### TestIamPermissionsAsync(TestIamPermissionsNetworkAttachmentRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<TestPermissionsResponse> TestIamPermissionsAsync(TestIamPermissionsNetworkAttachmentRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.TestIamPermissionsNetworkAttachmentRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`System.DateTime`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.TestPermissionsResponse)`

The call object.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
