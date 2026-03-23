-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Memorystore v1beta API - Class Memorystore.MemorystoreClient (1.0.0-beta01) Stay organized with collections Save and categorize content based on your preferences.

Version 1.0.0-beta01keyboard\_arrow\_down

-   [1.0.0-beta03 (latest)](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/latest/Google.Cloud.Memorystore.V1Beta.Memorystore.MemorystoreClient)
-   [1.0.0-beta02](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta02/Google.Cloud.Memorystore.V1Beta.Memorystore.MemorystoreClient)

```
public class Memorystore.MemorystoreClient : ClientBase<Memorystore.MemorystoreClient>
```

Reference documentation and code samples for the Memorystore v1beta API class Memorystore.MemorystoreClient.

Client for Memorystore

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> [ClientBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.html) \> [ClientBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase-1.html)[Memorystore](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.Memorystore)[MemorystoreClient](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.Memorystore.MemorystoreClient) \> Memorystore.MemorystoreClient

## Inherited Members

[ClientBase<Memorystore.MemorystoreClient>.WithHost(string)](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase-1.html#Grpc_Core_ClientBase_1_WithHost_System_String_)

[ClientBase.CallInvoker](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.html#Grpc_Core_ClientBase_CallInvoker)

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Memorystore.V1Beta](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta)

## Assembly

Google.Cloud.Memorystore.V1Beta.dll

## Constructors

### MemorystoreClient()

```
protected MemorystoreClient()
```

Protected parameterless constructor to allow creation of test doubles.

### MemorystoreClient(CallInvoker)

```
public MemorystoreClient(CallInvoker callInvoker)
```

Creates a new client for Memorystore that uses a custom `CallInvoker`.

**Parameter**

**Name**

**Description**

`callInvoker`

`[CallInvoker](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallInvoker.html)`  

The callInvoker to use to make remote calls.

### MemorystoreClient(ChannelBase)

```
public MemorystoreClient(ChannelBase channel)
```

Creates a new client for Memorystore

**Parameter**

**Name**

**Description**

`channel`

`[ChannelBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ChannelBase.html)`  

The channel to use to make remote calls.

### MemorystoreClient(ClientBaseConfiguration)

```
protected MemorystoreClient(ClientBase.ClientBaseConfiguration configuration)
```

Protected constructor to allow creation of configured clients.

**Parameter**

**Name**

**Description**

`configuration`

`[ClientBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.html)[ClientBaseConfiguration](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.ClientBaseConfiguration.html)`  

The client configuration.

## Methods

### CreateInstance(CreateInstanceRequest, CallOptions)

```
public virtual Operation CreateInstance(CreateInstanceRequest request, CallOptions options)
```

Creates a new Instance in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[CreateInstanceRequest](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.CreateInstanceRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)`

The response received from the server.

### CreateInstance(CreateInstanceRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation CreateInstance(CreateInstanceRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Creates a new Instance in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[CreateInstanceRequest](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.CreateInstanceRequest)`  

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

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)`

The response received from the server.

### CreateInstanceAsync(CreateInstanceRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> CreateInstanceAsync(CreateInstanceRequest request, CallOptions options)
```

Creates a new Instance in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[CreateInstanceRequest](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.CreateInstanceRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)`

The call object.

### CreateInstanceAsync(CreateInstanceRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> CreateInstanceAsync(CreateInstanceRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Creates a new Instance in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[CreateInstanceRequest](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.CreateInstanceRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)`

The call object.

### CreateLocationsClient()

```
public virtual Locations.LocationsClient CreateLocationsClient()
```

Creates a new instance of [Locations.LocationsClient](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Location/latest/Google.Cloud.Location.Locations.LocationsClient.html) using the same call invoker as this client.

**Returns**

**Type**

**Description**

`[Locations](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Location/latest/Google.Cloud.Location.Locations.html)[LocationsClient](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Location/latest/Google.Cloud.Location.Locations.LocationsClient.html)`

A new [Locations.LocationsClient](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Location/latest/Google.Cloud.Location.Locations.LocationsClient.html) for the same target as this client.

### CreateOperationsClient()

```
public virtual Operations.OperationsClient CreateOperationsClient()
```

Creates a new instance of [Operations.OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operations.OperationsClient.html) using the same call invoker as this client.

**Returns**

**Type**

**Description**

`[Operations](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operations.html)[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operations.OperationsClient.html)`

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

`[DeleteInstanceRequest](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.DeleteInstanceRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)`

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

`[DeleteInstanceRequest](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.DeleteInstanceRequest)`  

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

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)`

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

`[DeleteInstanceRequest](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.DeleteInstanceRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)`

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

`[DeleteInstanceRequest](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.DeleteInstanceRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)`

The call object.

### GetCertificateAuthority(GetCertificateAuthorityRequest, CallOptions)

```
public virtual CertificateAuthority GetCertificateAuthority(GetCertificateAuthorityRequest request, CallOptions options)
```

Gets details about the certificate authority for an Instance.

**Parameters**

**Name**

**Description**

`request`

`[GetCertificateAuthorityRequest](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.GetCertificateAuthorityRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[CertificateAuthority](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.CertificateAuthority)`

The response received from the server.

### GetCertificateAuthority(GetCertificateAuthorityRequest, Metadata, DateTime?, CancellationToken)

```
public virtual CertificateAuthority GetCertificateAuthority(GetCertificateAuthorityRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Gets details about the certificate authority for an Instance.

**Parameters**

**Name**

**Description**

`request`

`[GetCertificateAuthorityRequest](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.GetCertificateAuthorityRequest)`  

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

`[CertificateAuthority](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.CertificateAuthority)`

The response received from the server.

### GetCertificateAuthorityAsync(GetCertificateAuthorityRequest, CallOptions)

```
public virtual AsyncUnaryCall<CertificateAuthority> GetCertificateAuthorityAsync(GetCertificateAuthorityRequest request, CallOptions options)
```

Gets details about the certificate authority for an Instance.

**Parameters**

**Name**

**Description**

`request`

`[GetCertificateAuthorityRequest](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.GetCertificateAuthorityRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[CertificateAuthority](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.CertificateAuthority)`

The call object.

### GetCertificateAuthorityAsync(GetCertificateAuthorityRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<CertificateAuthority> GetCertificateAuthorityAsync(GetCertificateAuthorityRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Gets details about the certificate authority for an Instance.

**Parameters**

**Name**

**Description**

`request`

`[GetCertificateAuthorityRequest](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.GetCertificateAuthorityRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[CertificateAuthority](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.CertificateAuthority)`

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

`[GetInstanceRequest](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.GetInstanceRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Instance](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.Instance)`

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

`[GetInstanceRequest](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.GetInstanceRequest)`  

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

`[Instance](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.Instance)`

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

`[GetInstanceRequest](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.GetInstanceRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Instance](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.Instance)`

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

`[GetInstanceRequest](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.GetInstanceRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Instance](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.Instance)`

The call object.

### ListInstances(ListInstancesRequest, CallOptions)

```
public virtual ListInstancesResponse ListInstances(ListInstancesRequest request, CallOptions options)
```

Lists Instances in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[ListInstancesRequest](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.ListInstancesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[ListInstancesResponse](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.ListInstancesResponse)`

The response received from the server.

### ListInstances(ListInstancesRequest, Metadata, DateTime?, CancellationToken)

```
public virtual ListInstancesResponse ListInstances(ListInstancesRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Lists Instances in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[ListInstancesRequest](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.ListInstancesRequest)`  

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

`[ListInstancesResponse](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.ListInstancesResponse)`

The response received from the server.

### ListInstancesAsync(ListInstancesRequest, CallOptions)

```
public virtual AsyncUnaryCall<ListInstancesResponse> ListInstancesAsync(ListInstancesRequest request, CallOptions options)
```

Lists Instances in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[ListInstancesRequest](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.ListInstancesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[ListInstancesResponse](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.ListInstancesResponse)`

The call object.

### ListInstancesAsync(ListInstancesRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<ListInstancesResponse> ListInstancesAsync(ListInstancesRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Lists Instances in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[ListInstancesRequest](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.ListInstancesRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[ListInstancesResponse](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.ListInstancesResponse)`

The call object.

### NewInstance(ClientBaseConfiguration)

```
protected override Memorystore.MemorystoreClient NewInstance(ClientBase.ClientBaseConfiguration configuration)
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

`[Memorystore](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.Memorystore)[MemorystoreClient](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.Memorystore.MemorystoreClient)`

**Overrides**

Grpc.Core.ClientBase<Google.Cloud.Memorystore.V1Beta.Memorystore.MemorystoreClient>.NewInstance(Grpc.Core.ClientBase.ClientBaseConfiguration)

### UpdateInstance(UpdateInstanceRequest, CallOptions)

```
public virtual Operation UpdateInstance(UpdateInstanceRequest request, CallOptions options)
```

Updates the parameters of a single Instance.

**Parameters**

**Name**

**Description**

`request`

`[UpdateInstanceRequest](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.UpdateInstanceRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)`

The response received from the server.

### UpdateInstance(UpdateInstanceRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation UpdateInstance(UpdateInstanceRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Updates the parameters of a single Instance.

**Parameters**

**Name**

**Description**

`request`

`[UpdateInstanceRequest](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.UpdateInstanceRequest)`  

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

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)`

The response received from the server.

### UpdateInstanceAsync(UpdateInstanceRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> UpdateInstanceAsync(UpdateInstanceRequest request, CallOptions options)
```

Updates the parameters of a single Instance.

**Parameters**

**Name**

**Description**

`request`

`[UpdateInstanceRequest](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.UpdateInstanceRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)`

The call object.

### UpdateInstanceAsync(UpdateInstanceRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> UpdateInstanceAsync(UpdateInstanceRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Updates the parameters of a single Instance.

**Parameters**

**Name**

**Description**

`request`

`[UpdateInstanceRequest](/dotnet/docs/reference/Google.Cloud.Memorystore.V1Beta/1.0.0-beta01/Google.Cloud.Memorystore.V1Beta.UpdateInstanceRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)`

The call object.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
