-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class VpnTunnels.VpnTunnelsClient (2.10.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public class VpnTunnels.VpnTunnelsClient : ClientBase<VpnTunnels.VpnTunnelsClient>
```

Reference documentation and code samples for the Compute Engine v1 API class VpnTunnels.VpnTunnelsClient.

Client for VpnTunnels

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> [ClientBase](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ClientBase.cs) \> [ClientBase](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ClientBase.cs)[VpnTunnels](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.VpnTunnels)[VpnTunnelsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.VpnTunnels.VpnTunnelsClient) \> VpnTunnels.VpnTunnelsClient

## Inherited Members

[ClientBase<VpnTunnels.VpnTunnelsClient>.WithHost(string)](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ClientBase.cs)

[ClientBase.CallInvoker](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ClientBase.cs)

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Constructors

### VpnTunnelsClient()

```
protected VpnTunnelsClient()
```

Protected parameterless constructor to allow creation of test doubles.

### VpnTunnelsClient(CallInvoker)

```
public VpnTunnelsClient(CallInvoker callInvoker)
```

Creates a new client for VpnTunnels that uses a custom `CallInvoker`.

**Parameter**

**Name**

**Description**

`callInvoker`

`[CallInvoker](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallInvoker.cs)`  

The callInvoker to use to make remote calls.

### VpnTunnelsClient(ChannelBase)

```
public VpnTunnelsClient(ChannelBase channel)
```

Creates a new client for VpnTunnels

**Parameter**

**Name**

**Description**

`channel`

`[ChannelBase](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ChannelBase.cs)`  

The channel to use to make remote calls.

### VpnTunnelsClient(ClientBaseConfiguration)

```
protected VpnTunnelsClient(ClientBase.ClientBaseConfiguration configuration)
```

Protected constructor to allow creation of configured clients.

**Parameter**

**Name**

**Description**

`configuration`

`[ClientBase](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ClientBase.cs)[ClientBaseConfiguration](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ClientBase.cs)`  

The client configuration.

## Methods

### AggregatedList(AggregatedListVpnTunnelsRequest, CallOptions)

```
public virtual VpnTunnelAggregatedList AggregatedList(AggregatedListVpnTunnelsRequest request, CallOptions options)
```

Retrieves an aggregated list of VPN tunnels.

**Parameters**

**Name**

**Description**

`request`

`[AggregatedListVpnTunnelsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.AggregatedListVpnTunnelsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[VpnTunnelAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.VpnTunnelAggregatedList)`

The response received from the server.

### AggregatedList(AggregatedListVpnTunnelsRequest, Metadata, DateTime?, CancellationToken)

```
public virtual VpnTunnelAggregatedList AggregatedList(AggregatedListVpnTunnelsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Retrieves an aggregated list of VPN tunnels.

**Parameters**

**Name**

**Description**

`request`

`[AggregatedListVpnTunnelsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.AggregatedListVpnTunnelsRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/Metadata.cs)`  

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

`[VpnTunnelAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.VpnTunnelAggregatedList)`

The response received from the server.

### AggregatedListAsync(AggregatedListVpnTunnelsRequest, CallOptions)

```
public virtual AsyncUnaryCall<VpnTunnelAggregatedList> AggregatedListAsync(AggregatedListVpnTunnelsRequest request, CallOptions options)
```

Retrieves an aggregated list of VPN tunnels.

**Parameters**

**Name**

**Description**

`request`

`[AggregatedListVpnTunnelsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.AggregatedListVpnTunnelsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[VpnTunnelAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.VpnTunnelAggregatedList)`

The call object.

### AggregatedListAsync(AggregatedListVpnTunnelsRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<VpnTunnelAggregatedList> AggregatedListAsync(AggregatedListVpnTunnelsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Retrieves an aggregated list of VPN tunnels.

**Parameters**

**Name**

**Description**

`request`

`[AggregatedListVpnTunnelsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.AggregatedListVpnTunnelsRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/Metadata.cs)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[VpnTunnelAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.VpnTunnelAggregatedList)`

The call object.

### CreateOperationsClientForRegionOperations()

```
public virtual Operations.OperationsClient CreateOperationsClientForRegionOperations()
```

Creates a new instance of [Operations.OperationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/OperationsGrpc.g.cs) using the same call invoker as this client, delegating to RegionOperations.

**Returns**

**Type**

**Description**

`[Operations](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operations.html)[OperationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/OperationsGrpc.g.cs)`

A new Operations client for the same target as this client.

### Delete(DeleteVpnTunnelRequest, CallOptions)

```
public virtual Operation Delete(DeleteVpnTunnelRequest request, CallOptions options)
```

Deletes the specified VpnTunnel resource.

**Parameters**

**Name**

**Description**

`request`

`[DeleteVpnTunnelRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.DeleteVpnTunnelRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### Delete(DeleteVpnTunnelRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation Delete(DeleteVpnTunnelRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Deletes the specified VpnTunnel resource.

**Parameters**

**Name**

**Description**

`request`

`[DeleteVpnTunnelRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.DeleteVpnTunnelRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/Metadata.cs)`  

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

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### DeleteAsync(DeleteVpnTunnelRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> DeleteAsync(DeleteVpnTunnelRequest request, CallOptions options)
```

Deletes the specified VpnTunnel resource.

**Parameters**

**Name**

**Description**

`request`

`[DeleteVpnTunnelRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.DeleteVpnTunnelRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### DeleteAsync(DeleteVpnTunnelRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> DeleteAsync(DeleteVpnTunnelRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Deletes the specified VpnTunnel resource.

**Parameters**

**Name**

**Description**

`request`

`[DeleteVpnTunnelRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.DeleteVpnTunnelRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/Metadata.cs)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### Get(GetVpnTunnelRequest, CallOptions)

```
public virtual VpnTunnel Get(GetVpnTunnelRequest request, CallOptions options)
```

Returns the specified VpnTunnel resource.

**Parameters**

**Name**

**Description**

`request`

`[GetVpnTunnelRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.GetVpnTunnelRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[VpnTunnel](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.VpnTunnel)`

The response received from the server.

### Get(GetVpnTunnelRequest, Metadata, DateTime?, CancellationToken)

```
public virtual VpnTunnel Get(GetVpnTunnelRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Returns the specified VpnTunnel resource.

**Parameters**

**Name**

**Description**

`request`

`[GetVpnTunnelRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.GetVpnTunnelRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/Metadata.cs)`  

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

`[VpnTunnel](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.VpnTunnel)`

The response received from the server.

### GetAsync(GetVpnTunnelRequest, CallOptions)

```
public virtual AsyncUnaryCall<VpnTunnel> GetAsync(GetVpnTunnelRequest request, CallOptions options)
```

Returns the specified VpnTunnel resource.

**Parameters**

**Name**

**Description**

`request`

`[GetVpnTunnelRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.GetVpnTunnelRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[VpnTunnel](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.VpnTunnel)`

The call object.

### GetAsync(GetVpnTunnelRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<VpnTunnel> GetAsync(GetVpnTunnelRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Returns the specified VpnTunnel resource.

**Parameters**

**Name**

**Description**

`request`

`[GetVpnTunnelRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.GetVpnTunnelRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/Metadata.cs)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[VpnTunnel](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.VpnTunnel)`

The call object.

### Insert(InsertVpnTunnelRequest, CallOptions)

```
public virtual Operation Insert(InsertVpnTunnelRequest request, CallOptions options)
```

Creates a VpnTunnel resource in the specified project and region using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertVpnTunnelRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.InsertVpnTunnelRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### Insert(InsertVpnTunnelRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation Insert(InsertVpnTunnelRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Creates a VpnTunnel resource in the specified project and region using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertVpnTunnelRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.InsertVpnTunnelRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/Metadata.cs)`  

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

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### InsertAsync(InsertVpnTunnelRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> InsertAsync(InsertVpnTunnelRequest request, CallOptions options)
```

Creates a VpnTunnel resource in the specified project and region using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertVpnTunnelRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.InsertVpnTunnelRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### InsertAsync(InsertVpnTunnelRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> InsertAsync(InsertVpnTunnelRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Creates a VpnTunnel resource in the specified project and region using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertVpnTunnelRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.InsertVpnTunnelRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/Metadata.cs)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### List(ListVpnTunnelsRequest, CallOptions)

```
public virtual VpnTunnelList List(ListVpnTunnelsRequest request, CallOptions options)
```

Retrieves a list of VpnTunnel resources contained in the specified project and region.

**Parameters**

**Name**

**Description**

`request`

`[ListVpnTunnelsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.ListVpnTunnelsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[VpnTunnelList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.VpnTunnelList)`

The response received from the server.

### List(ListVpnTunnelsRequest, Metadata, DateTime?, CancellationToken)

```
public virtual VpnTunnelList List(ListVpnTunnelsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Retrieves a list of VpnTunnel resources contained in the specified project and region.

**Parameters**

**Name**

**Description**

`request`

`[ListVpnTunnelsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.ListVpnTunnelsRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/Metadata.cs)`  

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

`[VpnTunnelList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.VpnTunnelList)`

The response received from the server.

### ListAsync(ListVpnTunnelsRequest, CallOptions)

```
public virtual AsyncUnaryCall<VpnTunnelList> ListAsync(ListVpnTunnelsRequest request, CallOptions options)
```

Retrieves a list of VpnTunnel resources contained in the specified project and region.

**Parameters**

**Name**

**Description**

`request`

`[ListVpnTunnelsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.ListVpnTunnelsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[VpnTunnelList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.VpnTunnelList)`

The call object.

### ListAsync(ListVpnTunnelsRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<VpnTunnelList> ListAsync(ListVpnTunnelsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Retrieves a list of VpnTunnel resources contained in the specified project and region.

**Parameters**

**Name**

**Description**

`request`

`[ListVpnTunnelsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.ListVpnTunnelsRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/Metadata.cs)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[VpnTunnelList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.VpnTunnelList)`

The call object.

### NewInstance(ClientBaseConfiguration)

```
protected override VpnTunnels.VpnTunnelsClient NewInstance(ClientBase.ClientBaseConfiguration configuration)
```

Creates a new instance of client from given `ClientBaseConfiguration`.

**Parameter**

**Name**

**Description**

`configuration`

`[ClientBase](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ClientBase.cs)[ClientBaseConfiguration](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ClientBase.cs)`  

**Returns**

**Type**

**Description**

`[VpnTunnels](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.VpnTunnels)[VpnTunnelsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.VpnTunnels.VpnTunnelsClient)`

**Overrides**

[ClientBase<VpnTunnels.VpnTunnelsClient>.NewInstance(ClientBase.ClientBaseConfiguration)](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ClientBase.cs)

### SetLabels(SetLabelsVpnTunnelRequest, CallOptions)

```
public virtual Operation SetLabels(SetLabelsVpnTunnelRequest request, CallOptions options)
```

Sets the labels on a VpnTunnel. To learn more about labels, read the Labeling Resources documentation.

**Parameters**

**Name**

**Description**

`request`

`[SetLabelsVpnTunnelRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.SetLabelsVpnTunnelRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### SetLabels(SetLabelsVpnTunnelRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation SetLabels(SetLabelsVpnTunnelRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Sets the labels on a VpnTunnel. To learn more about labels, read the Labeling Resources documentation.

**Parameters**

**Name**

**Description**

`request`

`[SetLabelsVpnTunnelRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.SetLabelsVpnTunnelRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/Metadata.cs)`  

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

`[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.Operation)`

The response received from the server.

### SetLabelsAsync(SetLabelsVpnTunnelRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> SetLabelsAsync(SetLabelsVpnTunnelRequest request, CallOptions options)
```

Sets the labels on a VpnTunnel. To learn more about labels, read the Labeling Resources documentation.

**Parameters**

**Name**

**Description**

`request`

`[SetLabelsVpnTunnelRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.SetLabelsVpnTunnelRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.Operation)`

The call object.

### SetLabelsAsync(SetLabelsVpnTunnelRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> SetLabelsAsync(SetLabelsVpnTunnelRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Sets the labels on a VpnTunnel. To learn more about labels, read the Labeling Resources documentation.

**Parameters**

**Name**

**Description**

`request`

`[SetLabelsVpnTunnelRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.SetLabelsVpnTunnelRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/Metadata.cs)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.10.0/Google.Cloud.Compute.V1.Operation)`

The call object.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
