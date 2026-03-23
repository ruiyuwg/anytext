-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud Memorystore for Memcached v1 API - Class CloudMemcache.CloudMemcacheClient (2.3.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.3.0keyboard\_arrow\_down

-   [2.6.0 (latest)](/dotnet/docs/reference/Google.Cloud.Memcache.V1/latest/Google.Cloud.Memcache.V1.CloudMemcache.CloudMemcacheClient)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.5.0/Google.Cloud.Memcache.V1.CloudMemcache.CloudMemcacheClient)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.4.0/Google.Cloud.Memcache.V1.CloudMemcache.CloudMemcacheClient)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.CloudMemcache.CloudMemcacheClient)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.2.0/Google.Cloud.Memcache.V1.CloudMemcache.CloudMemcacheClient)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.1.0/Google.Cloud.Memcache.V1.CloudMemcache.CloudMemcacheClient)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.0.0/Google.Cloud.Memcache.V1.CloudMemcache.CloudMemcacheClient)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.Memcache.V1/1.2.0/Google.Cloud.Memcache.V1.CloudMemcache.CloudMemcacheClient)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.Memcache.V1/1.1.0/Google.Cloud.Memcache.V1.CloudMemcache.CloudMemcacheClient)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Memcache.V1/1.0.0/Google.Cloud.Memcache.V1.CloudMemcache.CloudMemcacheClient)

```
public class CloudMemcache.CloudMemcacheClient : ClientBase<CloudMemcache.CloudMemcacheClient>
```

Reference documentation and code samples for the Cloud Memorystore for Memcached v1 API class CloudMemcache.CloudMemcacheClient.

Client for CloudMemcache

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> [ClientBase](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs) \> [ClientBase](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs)[CloudMemcache](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.CloudMemcache)[CloudMemcacheClient](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.CloudMemcache.CloudMemcacheClient) \> CloudMemcache.CloudMemcacheClient

## Inherited Members

[ClientBase<CloudMemcache.CloudMemcacheClient>.WithHost(string)](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs)

[ClientBase.CallInvoker](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs)

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Memcache.V1](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1)

## Assembly

Google.Cloud.Memcache.V1.dll

## Constructors

### CloudMemcacheClient()

```
protected CloudMemcacheClient()
```

Protected parameterless constructor to allow creation of test doubles.

### CloudMemcacheClient(CallInvoker)

```
public CloudMemcacheClient(CallInvoker callInvoker)
```

Creates a new client for CloudMemcache that uses a custom `CallInvoker`.

**Parameter**

**Name**

**Description**

`callInvoker`

`[CallInvoker](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallInvoker.cs)`  

The callInvoker to use to make remote calls.

### CloudMemcacheClient(ChannelBase)

```
public CloudMemcacheClient(ChannelBase channel)
```

Creates a new client for CloudMemcache

**Parameter**

**Name**

**Description**

`channel`

`[ChannelBase](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ChannelBase.cs)`  

The channel to use to make remote calls.

### CloudMemcacheClient(ClientBaseConfiguration)

```
protected CloudMemcacheClient(ClientBase.ClientBaseConfiguration configuration)
```

Protected constructor to allow creation of configured clients.

**Parameter**

**Name**

**Description**

`configuration`

`[ClientBase](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs)[ClientBaseConfiguration](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs)`  

The client configuration.

## Methods

### ApplyParameters(ApplyParametersRequest, CallOptions)

```
public virtual Operation ApplyParameters(ApplyParametersRequest request, CallOptions options)
```

`ApplyParameters` restarts the set of specified nodes in order to update them to the current set of parameters for the Memcached Instance.

**Parameters**

**Name**

**Description**

`request`

`[ApplyParametersRequest](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.ApplyParametersRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response received from the server.

### ApplyParameters(ApplyParametersRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation ApplyParameters(ApplyParametersRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

`ApplyParameters` restarts the set of specified nodes in order to update them to the current set of parameters for the Memcached Instance.

**Parameters**

**Name**

**Description**

`request`

`[ApplyParametersRequest](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.ApplyParametersRequest)`  

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

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response received from the server.

### ApplyParametersAsync(ApplyParametersRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> ApplyParametersAsync(ApplyParametersRequest request, CallOptions options)
```

`ApplyParameters` restarts the set of specified nodes in order to update them to the current set of parameters for the Memcached Instance.

**Parameters**

**Name**

**Description**

`request`

`[ApplyParametersRequest](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.ApplyParametersRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The call object.

### ApplyParametersAsync(ApplyParametersRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> ApplyParametersAsync(ApplyParametersRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

`ApplyParameters` restarts the set of specified nodes in order to update them to the current set of parameters for the Memcached Instance.

**Parameters**

**Name**

**Description**

`request`

`[ApplyParametersRequest](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.ApplyParametersRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The call object.

### CreateInstance(CreateInstanceRequest, CallOptions)

```
public virtual Operation CreateInstance(CreateInstanceRequest request, CallOptions options)
```

Creates a new Instance in a given location.

**Parameters**

**Name**

**Description**

`request`

`[CreateInstanceRequest](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.CreateInstanceRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response received from the server.

### CreateInstance(CreateInstanceRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation CreateInstance(CreateInstanceRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Creates a new Instance in a given location.

**Parameters**

**Name**

**Description**

`request`

`[CreateInstanceRequest](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.CreateInstanceRequest)`  

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

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response received from the server.

### CreateInstanceAsync(CreateInstanceRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> CreateInstanceAsync(CreateInstanceRequest request, CallOptions options)
```

Creates a new Instance in a given location.

**Parameters**

**Name**

**Description**

`request`

`[CreateInstanceRequest](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.CreateInstanceRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The call object.

### CreateInstanceAsync(CreateInstanceRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> CreateInstanceAsync(CreateInstanceRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Creates a new Instance in a given location.

**Parameters**

**Name**

**Description**

`request`

`[CreateInstanceRequest](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.CreateInstanceRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The call object.

### CreateLocationsClient()

```
public virtual Locations.LocationsClient CreateLocationsClient()
```

Creates a new instance of [Locations.LocationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/94ef638cba52b4508a352c841dd68e3cc9817fce/apis/Google.Cloud.Location/Google.Cloud.Location/LocationsGrpc.g.cs) using the same call invoker as this client.

**Returns**

**Type**

**Description**

`[Locations](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Location/latest/Google.Cloud.Location.Locations.html)[LocationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/94ef638cba52b4508a352c841dd68e3cc9817fce/apis/Google.Cloud.Location/Google.Cloud.Location/LocationsGrpc.g.cs)`

A new [Locations.LocationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/94ef638cba52b4508a352c841dd68e3cc9817fce/apis/Google.Cloud.Location/Google.Cloud.Location/LocationsGrpc.g.cs) for the same target as this client.

### CreateOperationsClient()

```
public virtual Operations.OperationsClient CreateOperationsClient()
```

Creates a new instance of [Operations.OperationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/OperationsGrpc.g.cs) using the same call invoker as this client.

**Returns**

**Type**

**Description**

`[Operations](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operations.html)[OperationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/OperationsGrpc.g.cs)`

A new Operations client for the same target as this client.

### DeleteInstance(DeleteInstanceRequest, CallOptions)

```
public virtual Operation DeleteInstance(DeleteInstanceRequest request, CallOptions options)
```

Deletes a single Instance.

**Parameters**

**Name**

**Description**

`request`

`[DeleteInstanceRequest](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.DeleteInstanceRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response received from the server.

### DeleteInstance(DeleteInstanceRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation DeleteInstance(DeleteInstanceRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Deletes a single Instance.

**Parameters**

**Name**

**Description**

`request`

`[DeleteInstanceRequest](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.DeleteInstanceRequest)`  

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

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response received from the server.

### DeleteInstanceAsync(DeleteInstanceRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> DeleteInstanceAsync(DeleteInstanceRequest request, CallOptions options)
```

Deletes a single Instance.

**Parameters**

**Name**

**Description**

`request`

`[DeleteInstanceRequest](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.DeleteInstanceRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The call object.

### DeleteInstanceAsync(DeleteInstanceRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> DeleteInstanceAsync(DeleteInstanceRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Deletes a single Instance.

**Parameters**

**Name**

**Description**

`request`

`[DeleteInstanceRequest](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.DeleteInstanceRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The call object.

### GetInstance(GetInstanceRequest, CallOptions)

```
public virtual Instance GetInstance(GetInstanceRequest request, CallOptions options)
```

Gets details of a single Instance.

**Parameters**

**Name**

**Description**

`request`

`[GetInstanceRequest](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.GetInstanceRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Instance](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.Instance)`

The response received from the server.

### GetInstance(GetInstanceRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Instance GetInstance(GetInstanceRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Gets details of a single Instance.

**Parameters**

**Name**

**Description**

`request`

`[GetInstanceRequest](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.GetInstanceRequest)`  

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

`[Instance](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.Instance)`

The response received from the server.

### GetInstanceAsync(GetInstanceRequest, CallOptions)

```
public virtual AsyncUnaryCall<Instance> GetInstanceAsync(GetInstanceRequest request, CallOptions options)
```

Gets details of a single Instance.

**Parameters**

**Name**

**Description**

`request`

`[GetInstanceRequest](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.GetInstanceRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Instance](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.Instance)`

The call object.

### GetInstanceAsync(GetInstanceRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Instance> GetInstanceAsync(GetInstanceRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Gets details of a single Instance.

**Parameters**

**Name**

**Description**

`request`

`[GetInstanceRequest](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.GetInstanceRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Instance](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.Instance)`

The call object.

### ListInstances(ListInstancesRequest, CallOptions)

```
public virtual ListInstancesResponse ListInstances(ListInstancesRequest request, CallOptions options)
```

Lists Instances in a given location.

**Parameters**

**Name**

**Description**

`request`

`[ListInstancesRequest](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.ListInstancesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[ListInstancesResponse](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.ListInstancesResponse)`

The response received from the server.

### ListInstances(ListInstancesRequest, Metadata, DateTime?, CancellationToken)

```
public virtual ListInstancesResponse ListInstances(ListInstancesRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Lists Instances in a given location.

**Parameters**

**Name**

**Description**

`request`

`[ListInstancesRequest](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.ListInstancesRequest)`  

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

`[ListInstancesResponse](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.ListInstancesResponse)`

The response received from the server.

### ListInstancesAsync(ListInstancesRequest, CallOptions)

```
public virtual AsyncUnaryCall<ListInstancesResponse> ListInstancesAsync(ListInstancesRequest request, CallOptions options)
```

Lists Instances in a given location.

**Parameters**

**Name**

**Description**

`request`

`[ListInstancesRequest](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.ListInstancesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[ListInstancesResponse](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.ListInstancesResponse)`

The call object.

### ListInstancesAsync(ListInstancesRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<ListInstancesResponse> ListInstancesAsync(ListInstancesRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Lists Instances in a given location.

**Parameters**

**Name**

**Description**

`request`

`[ListInstancesRequest](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.ListInstancesRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[ListInstancesResponse](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.ListInstancesResponse)`

The call object.

### NewInstance(ClientBaseConfiguration)

```
protected override CloudMemcache.CloudMemcacheClient NewInstance(ClientBase.ClientBaseConfiguration configuration)
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

`[CloudMemcache](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.CloudMemcache)[CloudMemcacheClient](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.CloudMemcache.CloudMemcacheClient)`

**Overrides**

[ClientBase<CloudMemcache.CloudMemcacheClient>.NewInstance(ClientBase.ClientBaseConfiguration)](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs)

### RescheduleMaintenance(RescheduleMaintenanceRequest, CallOptions)

```
public virtual Operation RescheduleMaintenance(RescheduleMaintenanceRequest request, CallOptions options)
```

Reschedules upcoming maintenance event.

**Parameters**

**Name**

**Description**

`request`

`[RescheduleMaintenanceRequest](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.RescheduleMaintenanceRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response received from the server.

### RescheduleMaintenance(RescheduleMaintenanceRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation RescheduleMaintenance(RescheduleMaintenanceRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Reschedules upcoming maintenance event.

**Parameters**

**Name**

**Description**

`request`

`[RescheduleMaintenanceRequest](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.RescheduleMaintenanceRequest)`  

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

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response received from the server.

### RescheduleMaintenanceAsync(RescheduleMaintenanceRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> RescheduleMaintenanceAsync(RescheduleMaintenanceRequest request, CallOptions options)
```

Reschedules upcoming maintenance event.

**Parameters**

**Name**

**Description**

`request`

`[RescheduleMaintenanceRequest](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.RescheduleMaintenanceRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The call object.

### RescheduleMaintenanceAsync(RescheduleMaintenanceRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> RescheduleMaintenanceAsync(RescheduleMaintenanceRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Reschedules upcoming maintenance event.

**Parameters**

**Name**

**Description**

`request`

`[RescheduleMaintenanceRequest](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.RescheduleMaintenanceRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The call object.

### UpdateInstance(UpdateInstanceRequest, CallOptions)

```
public virtual Operation UpdateInstance(UpdateInstanceRequest request, CallOptions options)
```

Updates an existing Instance in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[UpdateInstanceRequest](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.UpdateInstanceRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response received from the server.

### UpdateInstance(UpdateInstanceRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation UpdateInstance(UpdateInstanceRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Updates an existing Instance in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[UpdateInstanceRequest](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.UpdateInstanceRequest)`  

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

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response received from the server.

### UpdateInstanceAsync(UpdateInstanceRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> UpdateInstanceAsync(UpdateInstanceRequest request, CallOptions options)
```

Updates an existing Instance in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[UpdateInstanceRequest](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.UpdateInstanceRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The call object.

### UpdateInstanceAsync(UpdateInstanceRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> UpdateInstanceAsync(UpdateInstanceRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Updates an existing Instance in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[UpdateInstanceRequest](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.UpdateInstanceRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The call object.

### UpdateParameters(UpdateParametersRequest, CallOptions)

```
public virtual Operation UpdateParameters(UpdateParametersRequest request, CallOptions options)
```

Updates the defined Memcached parameters for an existing instance. This method only stages the parameters, it must be followed by `ApplyParameters` to apply the parameters to nodes of the Memcached instance.

**Parameters**

**Name**

**Description**

`request`

`[UpdateParametersRequest](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.UpdateParametersRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response received from the server.

### UpdateParameters(UpdateParametersRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation UpdateParameters(UpdateParametersRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Updates the defined Memcached parameters for an existing instance. This method only stages the parameters, it must be followed by `ApplyParameters` to apply the parameters to nodes of the Memcached instance.

**Parameters**

**Name**

**Description**

`request`

`[UpdateParametersRequest](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.UpdateParametersRequest)`  

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

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response received from the server.

### UpdateParametersAsync(UpdateParametersRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> UpdateParametersAsync(UpdateParametersRequest request, CallOptions options)
```

Updates the defined Memcached parameters for an existing instance. This method only stages the parameters, it must be followed by `ApplyParameters` to apply the parameters to nodes of the Memcached instance.

**Parameters**

**Name**

**Description**

`request`

`[UpdateParametersRequest](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.UpdateParametersRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The call object.

### UpdateParametersAsync(UpdateParametersRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> UpdateParametersAsync(UpdateParametersRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Updates the defined Memcached parameters for an existing instance. This method only stages the parameters, it must be followed by `ApplyParameters` to apply the parameters to nodes of the Memcached instance.

**Parameters**

**Name**

**Description**

`request`

`[UpdateParametersRequest](/dotnet/docs/reference/Google.Cloud.Memcache.V1/2.3.0/Google.Cloud.Memcache.V1.UpdateParametersRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The call object.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
