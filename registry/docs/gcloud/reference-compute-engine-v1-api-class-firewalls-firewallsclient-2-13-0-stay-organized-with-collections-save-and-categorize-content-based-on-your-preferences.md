-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class Firewalls.FirewallsClient (2.13.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public class Firewalls.FirewallsClient : ClientBase<Firewalls.FirewallsClient>
```

Reference documentation and code samples for the Compute Engine v1 API class Firewalls.FirewallsClient.

Client for Firewalls

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> [ClientBase](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs) \> [ClientBase](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs)[Firewalls](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.Firewalls)[FirewallsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.Firewalls.FirewallsClient) \> Firewalls.FirewallsClient

## Inherited Members

[ClientBase<Firewalls.FirewallsClient>.WithHost(string)](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs)

[ClientBase.CallInvoker](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs)

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Constructors

### FirewallsClient()

```
protected FirewallsClient()
```

Protected parameterless constructor to allow creation of test doubles.

### FirewallsClient(CallInvoker)

```
public FirewallsClient(CallInvoker callInvoker)
```

Creates a new client for Firewalls that uses a custom `CallInvoker`.

**Parameter**

**Name**

**Description**

`callInvoker`

`[CallInvoker](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallInvoker.cs)`  

The callInvoker to use to make remote calls.

### FirewallsClient(ChannelBase)

```
public FirewallsClient(ChannelBase channel)
```

Creates a new client for Firewalls

**Parameter**

**Name**

**Description**

`channel`

`[ChannelBase](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ChannelBase.cs)`  

The channel to use to make remote calls.

### FirewallsClient(ClientBaseConfiguration)

```
protected FirewallsClient(ClientBase.ClientBaseConfiguration configuration)
```

Protected constructor to allow creation of configured clients.

**Parameter**

**Name**

**Description**

`configuration`

`[ClientBase](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs)[ClientBaseConfiguration](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs)`  

The client configuration.

## Methods

### CreateOperationsClientForGlobalOperations()

```
public virtual Operations.OperationsClient CreateOperationsClientForGlobalOperations()
```

Creates a new instance of [Operations.OperationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/OperationsGrpc.g.cs) using the same call invoker as this client, delegating to GlobalOperations.

**Returns**

**Type**

**Description**

`[Operations](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operations.html)[OperationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/OperationsGrpc.g.cs)`

A new Operations client for the same target as this client.

### Delete(DeleteFirewallRequest, CallOptions)

```
public virtual Operation Delete(DeleteFirewallRequest request, CallOptions options)
```

Deletes the specified firewall.

**Parameters**

**Name**

**Description**

`request`

`[DeleteFirewallRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.DeleteFirewallRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### Delete(DeleteFirewallRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation Delete(DeleteFirewallRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Deletes the specified firewall.

**Parameters**

**Name**

**Description**

`request`

`[DeleteFirewallRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.DeleteFirewallRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/Metadata.cs)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### DeleteAsync(DeleteFirewallRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> DeleteAsync(DeleteFirewallRequest request, CallOptions options)
```

Deletes the specified firewall.

**Parameters**

**Name**

**Description**

`request`

`[DeleteFirewallRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.DeleteFirewallRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### DeleteAsync(DeleteFirewallRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> DeleteAsync(DeleteFirewallRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Deletes the specified firewall.

**Parameters**

**Name**

**Description**

`request`

`[DeleteFirewallRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.DeleteFirewallRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/Metadata.cs)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### Get(GetFirewallRequest, CallOptions)

```
public virtual Firewall Get(GetFirewallRequest request, CallOptions options)
```

Returns the specified firewall.

**Parameters**

**Name**

**Description**

`request`

`[GetFirewallRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.GetFirewallRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Firewall](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.Firewall)`

The response received from the server.

### Get(GetFirewallRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Firewall Get(GetFirewallRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Returns the specified firewall.

**Parameters**

**Name**

**Description**

`request`

`[GetFirewallRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.GetFirewallRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/Metadata.cs)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[Firewall](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.Firewall)`

The response received from the server.

### GetAsync(GetFirewallRequest, CallOptions)

```
public virtual AsyncUnaryCall<Firewall> GetAsync(GetFirewallRequest request, CallOptions options)
```

Returns the specified firewall.

**Parameters**

**Name**

**Description**

`request`

`[GetFirewallRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.GetFirewallRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Firewall](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.Firewall)`

The call object.

### GetAsync(GetFirewallRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Firewall> GetAsync(GetFirewallRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Returns the specified firewall.

**Parameters**

**Name**

**Description**

`request`

`[GetFirewallRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.GetFirewallRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/Metadata.cs)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Firewall](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.Firewall)`

The call object.

### Insert(InsertFirewallRequest, CallOptions)

```
public virtual Operation Insert(InsertFirewallRequest request, CallOptions options)
```

Creates a firewall rule in the specified project using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertFirewallRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.InsertFirewallRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### Insert(InsertFirewallRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation Insert(InsertFirewallRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Creates a firewall rule in the specified project using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertFirewallRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.InsertFirewallRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/Metadata.cs)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### InsertAsync(InsertFirewallRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> InsertAsync(InsertFirewallRequest request, CallOptions options)
```

Creates a firewall rule in the specified project using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertFirewallRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.InsertFirewallRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### InsertAsync(InsertFirewallRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> InsertAsync(InsertFirewallRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Creates a firewall rule in the specified project using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertFirewallRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.InsertFirewallRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/Metadata.cs)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### List(ListFirewallsRequest, CallOptions)

```
public virtual FirewallList List(ListFirewallsRequest request, CallOptions options)
```

Retrieves the list of firewall rules available to the specified project.

**Parameters**

**Name**

**Description**

`request`

`[ListFirewallsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.ListFirewallsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[FirewallList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.FirewallList)`

The response received from the server.

### List(ListFirewallsRequest, Metadata, DateTime?, CancellationToken)

```
public virtual FirewallList List(ListFirewallsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Retrieves the list of firewall rules available to the specified project.

**Parameters**

**Name**

**Description**

`request`

`[ListFirewallsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.ListFirewallsRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/Metadata.cs)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[FirewallList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.FirewallList)`

The response received from the server.

### ListAsync(ListFirewallsRequest, CallOptions)

```
public virtual AsyncUnaryCall<FirewallList> ListAsync(ListFirewallsRequest request, CallOptions options)
```

Retrieves the list of firewall rules available to the specified project.

**Parameters**

**Name**

**Description**

`request`

`[ListFirewallsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.ListFirewallsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[FirewallList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.FirewallList)`

The call object.

### ListAsync(ListFirewallsRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<FirewallList> ListAsync(ListFirewallsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Retrieves the list of firewall rules available to the specified project.

**Parameters**

**Name**

**Description**

`request`

`[ListFirewallsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.ListFirewallsRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/Metadata.cs)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[FirewallList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.FirewallList)`

The call object.

### NewInstance(ClientBaseConfiguration)

```
protected override Firewalls.FirewallsClient NewInstance(ClientBase.ClientBaseConfiguration configuration)
```

Creates a new instance of client from given `ClientBaseConfiguration`.

**Parameter**

**Name**

**Description**

`configuration`

`[ClientBase](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs)[ClientBaseConfiguration](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs)`  

**Returns**

**Type**

**Description**

`[Firewalls](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.Firewalls)[FirewallsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.Firewalls.FirewallsClient)`

**Overrides**

[ClientBase<Firewalls.FirewallsClient>.NewInstance(ClientBase.ClientBaseConfiguration)](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs)

### Patch(PatchFirewallRequest, CallOptions)

```
public virtual Operation Patch(PatchFirewallRequest request, CallOptions options)
```

Updates the specified firewall rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`request`

`[PatchFirewallRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.PatchFirewallRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### Patch(PatchFirewallRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation Patch(PatchFirewallRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Updates the specified firewall rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`request`

`[PatchFirewallRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.PatchFirewallRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/Metadata.cs)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### PatchAsync(PatchFirewallRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> PatchAsync(PatchFirewallRequest request, CallOptions options)
```

Updates the specified firewall rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`request`

`[PatchFirewallRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.PatchFirewallRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### PatchAsync(PatchFirewallRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> PatchAsync(PatchFirewallRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Updates the specified firewall rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`request`

`[PatchFirewallRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.PatchFirewallRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/Metadata.cs)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### Update(UpdateFirewallRequest, CallOptions)

```
public virtual Operation Update(UpdateFirewallRequest request, CallOptions options)
```

Updates the specified firewall rule with the data included in the request. Note that all fields will be updated if using PUT, even fields that are not specified. To update individual fields, please use PATCH instead.

**Parameters**

**Name**

**Description**

`request`

`[UpdateFirewallRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.UpdateFirewallRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### Update(UpdateFirewallRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation Update(UpdateFirewallRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Updates the specified firewall rule with the data included in the request. Note that all fields will be updated if using PUT, even fields that are not specified. To update individual fields, please use PATCH instead.

**Parameters**

**Name**

**Description**

`request`

`[UpdateFirewallRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.UpdateFirewallRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/Metadata.cs)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### UpdateAsync(UpdateFirewallRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> UpdateAsync(UpdateFirewallRequest request, CallOptions options)
```

Updates the specified firewall rule with the data included in the request. Note that all fields will be updated if using PUT, even fields that are not specified. To update individual fields, please use PATCH instead.

**Parameters**

**Name**

**Description**

`request`

`[UpdateFirewallRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.UpdateFirewallRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### UpdateAsync(UpdateFirewallRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> UpdateAsync(UpdateFirewallRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Updates the specified firewall rule with the data included in the request. Note that all fields will be updated if using PUT, even fields that are not specified. To update individual fields, please use PATCH instead.

**Parameters**

**Name**

**Description**

`request`

`[UpdateFirewallRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.UpdateFirewallRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/Metadata.cs)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.13.0/Google.Cloud.Compute.V1.Operation)`

The call object.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
