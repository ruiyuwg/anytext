-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google BigQuery Data Transfer v1 API - Class DataTransferService.DataTransferServiceClient (4.7.0) Stay organized with collections Save and categorize content based on your preferences.

Version 4.7.0keyboard\_arrow\_down

-   [4.11.0 (latest)](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/latest/Google.Cloud.BigQuery.DataTransfer.V1.DataTransferService.DataTransferServiceClient)
-   [4.10.0](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.10.0/Google.Cloud.BigQuery.DataTransfer.V1.DataTransferService.DataTransferServiceClient)
-   [4.9.0](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.9.0/Google.Cloud.BigQuery.DataTransfer.V1.DataTransferService.DataTransferServiceClient)
-   [4.8.0](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.8.0/Google.Cloud.BigQuery.DataTransfer.V1.DataTransferService.DataTransferServiceClient)
-   [4.7.0](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.DataTransferService.DataTransferServiceClient)
-   [4.6.0](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.6.0/Google.Cloud.BigQuery.DataTransfer.V1.DataTransferService.DataTransferServiceClient)
-   [4.5.0](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.5.0/Google.Cloud.BigQuery.DataTransfer.V1.DataTransferService.DataTransferServiceClient)
-   [4.4.0](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.4.0/Google.Cloud.BigQuery.DataTransfer.V1.DataTransferService.DataTransferServiceClient)
-   [4.3.0](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.3.0/Google.Cloud.BigQuery.DataTransfer.V1.DataTransferService.DataTransferServiceClient)
-   [4.2.0](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.2.0/Google.Cloud.BigQuery.DataTransfer.V1.DataTransferService.DataTransferServiceClient)
-   [4.1.0](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.1.0/Google.Cloud.BigQuery.DataTransfer.V1.DataTransferService.DataTransferServiceClient)
-   [4.0.0](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.0.0/Google.Cloud.BigQuery.DataTransfer.V1.DataTransferService.DataTransferServiceClient)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/3.4.0/Google.Cloud.BigQuery.DataTransfer.V1.DataTransferService.DataTransferServiceClient)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/3.3.0/Google.Cloud.BigQuery.DataTransfer.V1.DataTransferService.DataTransferServiceClient)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/3.2.0/Google.Cloud.BigQuery.DataTransfer.V1.DataTransferService.DataTransferServiceClient)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/3.1.0/Google.Cloud.BigQuery.DataTransfer.V1.DataTransferService.DataTransferServiceClient)

```
public class DataTransferService.DataTransferServiceClient : ClientBase<DataTransferService.DataTransferServiceClient>
```

Reference documentation and code samples for the Google BigQuery Data Transfer v1 API class DataTransferService.DataTransferServiceClient.

Client for DataTransferService

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> [ClientBase](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs) \> [ClientBase](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs)[DataTransferService](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.DataTransferService)[DataTransferServiceClient](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.DataTransferService.DataTransferServiceClient) \> DataTransferService.DataTransferServiceClient

## Inherited Members

[ClientBase<DataTransferService.DataTransferServiceClient>.WithHost(string)](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs)

[ClientBase.CallInvoker](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs)

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.BigQuery.DataTransfer.V1](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1)

## Assembly

Google.Cloud.BigQuery.DataTransfer.V1.dll

## Constructors

### DataTransferServiceClient()

```
protected DataTransferServiceClient()
```

Protected parameterless constructor to allow creation of test doubles.

### DataTransferServiceClient(CallInvoker)

```
public DataTransferServiceClient(CallInvoker callInvoker)
```

Creates a new client for DataTransferService that uses a custom `CallInvoker`.

**Parameter**

**Name**

**Description**

`callInvoker`

`[CallInvoker](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallInvoker.cs)`  

The callInvoker to use to make remote calls.

### DataTransferServiceClient(ChannelBase)

```
public DataTransferServiceClient(ChannelBase channel)
```

Creates a new client for DataTransferService

**Parameter**

**Name**

**Description**

`channel`

`[ChannelBase](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ChannelBase.cs)`  

The channel to use to make remote calls.

### DataTransferServiceClient(ClientBaseConfiguration)

```
protected DataTransferServiceClient(ClientBase.ClientBaseConfiguration configuration)
```

Protected constructor to allow creation of configured clients.

**Parameter**

**Name**

**Description**

`configuration`

`[ClientBase](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs)[ClientBaseConfiguration](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs)`  

The client configuration.

## Methods

### CheckValidCreds(CheckValidCredsRequest, CallOptions)

```
public virtual CheckValidCredsResponse CheckValidCreds(CheckValidCredsRequest request, CallOptions options)
```

Returns true if valid credentials exist for the given data source and requesting user.

**Parameters**

**Name**

**Description**

`request`

`[CheckValidCredsRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.CheckValidCredsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[CheckValidCredsResponse](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.CheckValidCredsResponse)`

The response received from the server.

### CheckValidCreds(CheckValidCredsRequest, Metadata, DateTime?, CancellationToken)

```
public virtual CheckValidCredsResponse CheckValidCreds(CheckValidCredsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Returns true if valid credentials exist for the given data source and requesting user.

**Parameters**

**Name**

**Description**

`request`

`[CheckValidCredsRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.CheckValidCredsRequest)`  

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

`[CheckValidCredsResponse](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.CheckValidCredsResponse)`

The response received from the server.

### CheckValidCredsAsync(CheckValidCredsRequest, CallOptions)

```
public virtual AsyncUnaryCall<CheckValidCredsResponse> CheckValidCredsAsync(CheckValidCredsRequest request, CallOptions options)
```

Returns true if valid credentials exist for the given data source and requesting user.

**Parameters**

**Name**

**Description**

`request`

`[CheckValidCredsRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.CheckValidCredsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[CheckValidCredsResponse](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.CheckValidCredsResponse)`

The call object.

### CheckValidCredsAsync(CheckValidCredsRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<CheckValidCredsResponse> CheckValidCredsAsync(CheckValidCredsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Returns true if valid credentials exist for the given data source and requesting user.

**Parameters**

**Name**

**Description**

`request`

`[CheckValidCredsRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.CheckValidCredsRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[CheckValidCredsResponse](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.CheckValidCredsResponse)`

The call object.

### CreateLocationsClient()

```
public virtual Locations.LocationsClient CreateLocationsClient()
```

Creates a new instance of [Locations.LocationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/e0e09db2bdb9b94d338fd1b26b0cad881a4918f6/apis/Google.Cloud.Location/Google.Cloud.Location/LocationsGrpc.g.cs) using the same call invoker as this client.

**Returns**

**Type**

**Description**

`[Locations](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Location/latest/Google.Cloud.Location.Locations.html)[LocationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/e0e09db2bdb9b94d338fd1b26b0cad881a4918f6/apis/Google.Cloud.Location/Google.Cloud.Location/LocationsGrpc.g.cs)`

A new [Locations.LocationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/e0e09db2bdb9b94d338fd1b26b0cad881a4918f6/apis/Google.Cloud.Location/Google.Cloud.Location/LocationsGrpc.g.cs) for the same target as this client.

### CreateTransferConfig(CreateTransferConfigRequest, CallOptions)

```
public virtual TransferConfig CreateTransferConfig(CreateTransferConfigRequest request, CallOptions options)
```

Creates a new data transfer configuration.

**Parameters**

**Name**

**Description**

`request`

`[CreateTransferConfigRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.CreateTransferConfigRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[TransferConfig](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.TransferConfig)`

The response received from the server.

### CreateTransferConfig(CreateTransferConfigRequest, Metadata, DateTime?, CancellationToken)

```
public virtual TransferConfig CreateTransferConfig(CreateTransferConfigRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Creates a new data transfer configuration.

**Parameters**

**Name**

**Description**

`request`

`[CreateTransferConfigRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.CreateTransferConfigRequest)`  

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

`[TransferConfig](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.TransferConfig)`

The response received from the server.

### CreateTransferConfigAsync(CreateTransferConfigRequest, CallOptions)

```
public virtual AsyncUnaryCall<TransferConfig> CreateTransferConfigAsync(CreateTransferConfigRequest request, CallOptions options)
```

Creates a new data transfer configuration.

**Parameters**

**Name**

**Description**

`request`

`[CreateTransferConfigRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.CreateTransferConfigRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[TransferConfig](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.TransferConfig)`

The call object.

### CreateTransferConfigAsync(CreateTransferConfigRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<TransferConfig> CreateTransferConfigAsync(CreateTransferConfigRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Creates a new data transfer configuration.

**Parameters**

**Name**

**Description**

`request`

`[CreateTransferConfigRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.CreateTransferConfigRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[TransferConfig](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.TransferConfig)`

The call object.

### DeleteTransferConfig(DeleteTransferConfigRequest, CallOptions)

```
public virtual Empty DeleteTransferConfig(DeleteTransferConfigRequest request, CallOptions options)
```

Deletes a data transfer configuration, including any associated transfer runs and logs.

**Parameters**

**Name**

**Description**

`request`

`[DeleteTransferConfigRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.DeleteTransferConfigRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)`

The response received from the server.

### DeleteTransferConfig(DeleteTransferConfigRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Empty DeleteTransferConfig(DeleteTransferConfigRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Deletes a data transfer configuration, including any associated transfer runs and logs.

**Parameters**

**Name**

**Description**

`request`

`[DeleteTransferConfigRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.DeleteTransferConfigRequest)`  

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

`[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)`

The response received from the server.

### DeleteTransferConfigAsync(DeleteTransferConfigRequest, CallOptions)

```
public virtual AsyncUnaryCall<Empty> DeleteTransferConfigAsync(DeleteTransferConfigRequest request, CallOptions options)
```

Deletes a data transfer configuration, including any associated transfer runs and logs.

**Parameters**

**Name**

**Description**

`request`

`[DeleteTransferConfigRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.DeleteTransferConfigRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)`

The call object.

### DeleteTransferConfigAsync(DeleteTransferConfigRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Empty> DeleteTransferConfigAsync(DeleteTransferConfigRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Deletes a data transfer configuration, including any associated transfer runs and logs.

**Parameters**

**Name**

**Description**

`request`

`[DeleteTransferConfigRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.DeleteTransferConfigRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)`

The call object.

### DeleteTransferRun(DeleteTransferRunRequest, CallOptions)

```
public virtual Empty DeleteTransferRun(DeleteTransferRunRequest request, CallOptions options)
```

Deletes the specified transfer run.

**Parameters**

**Name**

**Description**

`request`

`[DeleteTransferRunRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.DeleteTransferRunRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)`

The response received from the server.

### DeleteTransferRun(DeleteTransferRunRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Empty DeleteTransferRun(DeleteTransferRunRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Deletes the specified transfer run.

**Parameters**

**Name**

**Description**

`request`

`[DeleteTransferRunRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.DeleteTransferRunRequest)`  

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

`[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)`

The response received from the server.

### DeleteTransferRunAsync(DeleteTransferRunRequest, CallOptions)

```
public virtual AsyncUnaryCall<Empty> DeleteTransferRunAsync(DeleteTransferRunRequest request, CallOptions options)
```

Deletes the specified transfer run.

**Parameters**

**Name**

**Description**

`request`

`[DeleteTransferRunRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.DeleteTransferRunRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)`

The call object.

### DeleteTransferRunAsync(DeleteTransferRunRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Empty> DeleteTransferRunAsync(DeleteTransferRunRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Deletes the specified transfer run.

**Parameters**

**Name**

**Description**

`request`

`[DeleteTransferRunRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.DeleteTransferRunRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)`

The call object.

### EnrollDataSources(EnrollDataSourcesRequest, CallOptions)

```
public virtual Empty EnrollDataSources(EnrollDataSourcesRequest request, CallOptions options)
```

Enroll data sources in a user project. This allows users to create transfer configurations for these data sources. They will also appear in the ListDataSources RPC and as such, will appear in the [BigQuery UI](https://console.cloud.google.com/bigquery), and the documents can be found in the public guide for [BigQuery Web UI](https://cloud.google.com/bigquery/bigquery-web-ui) and [Data Transfer Service](https://cloud.google.com/bigquery/docs/working-with-transfers).

**Parameters**

**Name**

**Description**

`request`

`[EnrollDataSourcesRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.EnrollDataSourcesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)`

The response received from the server.

### EnrollDataSources(EnrollDataSourcesRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Empty EnrollDataSources(EnrollDataSourcesRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Enroll data sources in a user project. This allows users to create transfer configurations for these data sources. They will also appear in the ListDataSources RPC and as such, will appear in the [BigQuery UI](https://console.cloud.google.com/bigquery), and the documents can be found in the public guide for [BigQuery Web UI](https://cloud.google.com/bigquery/bigquery-web-ui) and [Data Transfer Service](https://cloud.google.com/bigquery/docs/working-with-transfers).

**Parameters**

**Name**

**Description**

`request`

`[EnrollDataSourcesRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.EnrollDataSourcesRequest)`  

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

`[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)`

The response received from the server.

### EnrollDataSourcesAsync(EnrollDataSourcesRequest, CallOptions)

```
public virtual AsyncUnaryCall<Empty> EnrollDataSourcesAsync(EnrollDataSourcesRequest request, CallOptions options)
```

Enroll data sources in a user project. This allows users to create transfer configurations for these data sources. They will also appear in the ListDataSources RPC and as such, will appear in the [BigQuery UI](https://console.cloud.google.com/bigquery), and the documents can be found in the public guide for [BigQuery Web UI](https://cloud.google.com/bigquery/bigquery-web-ui) and [Data Transfer Service](https://cloud.google.com/bigquery/docs/working-with-transfers).

**Parameters**

**Name**

**Description**

`request`

`[EnrollDataSourcesRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.EnrollDataSourcesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)`

The call object.

### EnrollDataSourcesAsync(EnrollDataSourcesRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Empty> EnrollDataSourcesAsync(EnrollDataSourcesRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Enroll data sources in a user project. This allows users to create transfer configurations for these data sources. They will also appear in the ListDataSources RPC and as such, will appear in the [BigQuery UI](https://console.cloud.google.com/bigquery), and the documents can be found in the public guide for [BigQuery Web UI](https://cloud.google.com/bigquery/bigquery-web-ui) and [Data Transfer Service](https://cloud.google.com/bigquery/docs/working-with-transfers).

**Parameters**

**Name**

**Description**

`request`

`[EnrollDataSourcesRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.EnrollDataSourcesRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)`

The call object.

### GetDataSource(GetDataSourceRequest, CallOptions)

```
public virtual DataSource GetDataSource(GetDataSourceRequest request, CallOptions options)
```

Retrieves a supported data source and returns its settings.

**Parameters**

**Name**

**Description**

`request`

`[GetDataSourceRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.GetDataSourceRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[DataSource](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.DataSource)`

The response received from the server.

### GetDataSource(GetDataSourceRequest, Metadata, DateTime?, CancellationToken)

```
public virtual DataSource GetDataSource(GetDataSourceRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Retrieves a supported data source and returns its settings.

**Parameters**

**Name**

**Description**

`request`

`[GetDataSourceRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.GetDataSourceRequest)`  

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

`[DataSource](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.DataSource)`

The response received from the server.

### GetDataSourceAsync(GetDataSourceRequest, CallOptions)

```
public virtual AsyncUnaryCall<DataSource> GetDataSourceAsync(GetDataSourceRequest request, CallOptions options)
```

Retrieves a supported data source and returns its settings.

**Parameters**

**Name**

**Description**

`request`

`[GetDataSourceRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.GetDataSourceRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[DataSource](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.DataSource)`

The call object.

### GetDataSourceAsync(GetDataSourceRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<DataSource> GetDataSourceAsync(GetDataSourceRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Retrieves a supported data source and returns its settings.

**Parameters**

**Name**

**Description**

`request`

`[GetDataSourceRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.GetDataSourceRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[DataSource](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.DataSource)`

The call object.

### GetTransferConfig(GetTransferConfigRequest, CallOptions)

```
public virtual TransferConfig GetTransferConfig(GetTransferConfigRequest request, CallOptions options)
```

Returns information about a data transfer config.

**Parameters**

**Name**

**Description**

`request`

`[GetTransferConfigRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.GetTransferConfigRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[TransferConfig](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.TransferConfig)`

The response received from the server.

### GetTransferConfig(GetTransferConfigRequest, Metadata, DateTime?, CancellationToken)

```
public virtual TransferConfig GetTransferConfig(GetTransferConfigRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Returns information about a data transfer config.

**Parameters**

**Name**

**Description**

`request`

`[GetTransferConfigRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.GetTransferConfigRequest)`  

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

`[TransferConfig](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.TransferConfig)`

The response received from the server.

### GetTransferConfigAsync(GetTransferConfigRequest, CallOptions)

```
public virtual AsyncUnaryCall<TransferConfig> GetTransferConfigAsync(GetTransferConfigRequest request, CallOptions options)
```

Returns information about a data transfer config.

**Parameters**

**Name**

**Description**

`request`

`[GetTransferConfigRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.GetTransferConfigRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[TransferConfig](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.TransferConfig)`

The call object.

### GetTransferConfigAsync(GetTransferConfigRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<TransferConfig> GetTransferConfigAsync(GetTransferConfigRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Returns information about a data transfer config.

**Parameters**

**Name**

**Description**

`request`

`[GetTransferConfigRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.GetTransferConfigRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[TransferConfig](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.TransferConfig)`

The call object.

### GetTransferRun(GetTransferRunRequest, CallOptions)

```
public virtual TransferRun GetTransferRun(GetTransferRunRequest request, CallOptions options)
```

Returns information about the particular transfer run.

**Parameters**

**Name**

**Description**

`request`

`[GetTransferRunRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.GetTransferRunRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[TransferRun](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.TransferRun)`

The response received from the server.

### GetTransferRun(GetTransferRunRequest, Metadata, DateTime?, CancellationToken)

```
public virtual TransferRun GetTransferRun(GetTransferRunRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Returns information about the particular transfer run.

**Parameters**

**Name**

**Description**

`request`

`[GetTransferRunRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.GetTransferRunRequest)`  

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

`[TransferRun](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.TransferRun)`

The response received from the server.

### GetTransferRunAsync(GetTransferRunRequest, CallOptions)

```
public virtual AsyncUnaryCall<TransferRun> GetTransferRunAsync(GetTransferRunRequest request, CallOptions options)
```

Returns information about the particular transfer run.

**Parameters**

**Name**

**Description**

`request`

`[GetTransferRunRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.GetTransferRunRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[TransferRun](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.TransferRun)`

The call object.

### GetTransferRunAsync(GetTransferRunRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<TransferRun> GetTransferRunAsync(GetTransferRunRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Returns information about the particular transfer run.

**Parameters**

**Name**

**Description**

`request`

`[GetTransferRunRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.GetTransferRunRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[TransferRun](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.TransferRun)`

The call object.

### ListDataSources(ListDataSourcesRequest, CallOptions)

```
public virtual ListDataSourcesResponse ListDataSources(ListDataSourcesRequest request, CallOptions options)
```

Lists supported data sources and returns their settings.

**Parameters**

**Name**

**Description**

`request`

`[ListDataSourcesRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ListDataSourcesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[ListDataSourcesResponse](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ListDataSourcesResponse)`

The response received from the server.

### ListDataSources(ListDataSourcesRequest, Metadata, DateTime?, CancellationToken)

```
public virtual ListDataSourcesResponse ListDataSources(ListDataSourcesRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Lists supported data sources and returns their settings.

**Parameters**

**Name**

**Description**

`request`

`[ListDataSourcesRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ListDataSourcesRequest)`  

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

`[ListDataSourcesResponse](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ListDataSourcesResponse)`

The response received from the server.

### ListDataSourcesAsync(ListDataSourcesRequest, CallOptions)

```
public virtual AsyncUnaryCall<ListDataSourcesResponse> ListDataSourcesAsync(ListDataSourcesRequest request, CallOptions options)
```

Lists supported data sources and returns their settings.

**Parameters**

**Name**

**Description**

`request`

`[ListDataSourcesRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ListDataSourcesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[ListDataSourcesResponse](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ListDataSourcesResponse)`

The call object.

### ListDataSourcesAsync(ListDataSourcesRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<ListDataSourcesResponse> ListDataSourcesAsync(ListDataSourcesRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Lists supported data sources and returns their settings.

**Parameters**

**Name**

**Description**

`request`

`[ListDataSourcesRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ListDataSourcesRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[ListDataSourcesResponse](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ListDataSourcesResponse)`

The call object.

### ListTransferConfigs(ListTransferConfigsRequest, CallOptions)

```
public virtual ListTransferConfigsResponse ListTransferConfigs(ListTransferConfigsRequest request, CallOptions options)
```

Returns information about all transfer configs owned by a project in the specified location.

**Parameters**

**Name**

**Description**

`request`

`[ListTransferConfigsRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ListTransferConfigsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[ListTransferConfigsResponse](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ListTransferConfigsResponse)`

The response received from the server.

### ListTransferConfigs(ListTransferConfigsRequest, Metadata, DateTime?, CancellationToken)

```
public virtual ListTransferConfigsResponse ListTransferConfigs(ListTransferConfigsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Returns information about all transfer configs owned by a project in the specified location.

**Parameters**

**Name**

**Description**

`request`

`[ListTransferConfigsRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ListTransferConfigsRequest)`  

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

`[ListTransferConfigsResponse](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ListTransferConfigsResponse)`

The response received from the server.

### ListTransferConfigsAsync(ListTransferConfigsRequest, CallOptions)

```
public virtual AsyncUnaryCall<ListTransferConfigsResponse> ListTransferConfigsAsync(ListTransferConfigsRequest request, CallOptions options)
```

Returns information about all transfer configs owned by a project in the specified location.

**Parameters**

**Name**

**Description**

`request`

`[ListTransferConfigsRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ListTransferConfigsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[ListTransferConfigsResponse](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ListTransferConfigsResponse)`

The call object.

### ListTransferConfigsAsync(ListTransferConfigsRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<ListTransferConfigsResponse> ListTransferConfigsAsync(ListTransferConfigsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Returns information about all transfer configs owned by a project in the specified location.

**Parameters**

**Name**

**Description**

`request`

`[ListTransferConfigsRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ListTransferConfigsRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[ListTransferConfigsResponse](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ListTransferConfigsResponse)`

The call object.

### ListTransferLogs(ListTransferLogsRequest, CallOptions)

```
public virtual ListTransferLogsResponse ListTransferLogs(ListTransferLogsRequest request, CallOptions options)
```

Returns log messages for the transfer run.

**Parameters**

**Name**

**Description**

`request`

`[ListTransferLogsRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ListTransferLogsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[ListTransferLogsResponse](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ListTransferLogsResponse)`

The response received from the server.

### ListTransferLogs(ListTransferLogsRequest, Metadata, DateTime?, CancellationToken)

```
public virtual ListTransferLogsResponse ListTransferLogs(ListTransferLogsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Returns log messages for the transfer run.

**Parameters**

**Name**

**Description**

`request`

`[ListTransferLogsRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ListTransferLogsRequest)`  

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

`[ListTransferLogsResponse](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ListTransferLogsResponse)`

The response received from the server.

### ListTransferLogsAsync(ListTransferLogsRequest, CallOptions)

```
public virtual AsyncUnaryCall<ListTransferLogsResponse> ListTransferLogsAsync(ListTransferLogsRequest request, CallOptions options)
```

Returns log messages for the transfer run.

**Parameters**

**Name**

**Description**

`request`

`[ListTransferLogsRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ListTransferLogsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[ListTransferLogsResponse](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ListTransferLogsResponse)`

The call object.

### ListTransferLogsAsync(ListTransferLogsRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<ListTransferLogsResponse> ListTransferLogsAsync(ListTransferLogsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Returns log messages for the transfer run.

**Parameters**

**Name**

**Description**

`request`

`[ListTransferLogsRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ListTransferLogsRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[ListTransferLogsResponse](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ListTransferLogsResponse)`

The call object.

### ListTransferRuns(ListTransferRunsRequest, CallOptions)

```
public virtual ListTransferRunsResponse ListTransferRuns(ListTransferRunsRequest request, CallOptions options)
```

Returns information about running and completed transfer runs.

**Parameters**

**Name**

**Description**

`request`

`[ListTransferRunsRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ListTransferRunsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[ListTransferRunsResponse](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ListTransferRunsResponse)`

The response received from the server.

### ListTransferRuns(ListTransferRunsRequest, Metadata, DateTime?, CancellationToken)

```
public virtual ListTransferRunsResponse ListTransferRuns(ListTransferRunsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Returns information about running and completed transfer runs.

**Parameters**

**Name**

**Description**

`request`

`[ListTransferRunsRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ListTransferRunsRequest)`  

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

`[ListTransferRunsResponse](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ListTransferRunsResponse)`

The response received from the server.

### ListTransferRunsAsync(ListTransferRunsRequest, CallOptions)

```
public virtual AsyncUnaryCall<ListTransferRunsResponse> ListTransferRunsAsync(ListTransferRunsRequest request, CallOptions options)
```

Returns information about running and completed transfer runs.

**Parameters**

**Name**

**Description**

`request`

`[ListTransferRunsRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ListTransferRunsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[ListTransferRunsResponse](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ListTransferRunsResponse)`

The call object.

### ListTransferRunsAsync(ListTransferRunsRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<ListTransferRunsResponse> ListTransferRunsAsync(ListTransferRunsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Returns information about running and completed transfer runs.

**Parameters**

**Name**

**Description**

`request`

`[ListTransferRunsRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ListTransferRunsRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[ListTransferRunsResponse](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ListTransferRunsResponse)`

The call object.

### NewInstance(ClientBaseConfiguration)

```
protected override DataTransferService.DataTransferServiceClient NewInstance(ClientBase.ClientBaseConfiguration configuration)
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

`[DataTransferService](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.DataTransferService)[DataTransferServiceClient](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.DataTransferService.DataTransferServiceClient)`

**Overrides**

[ClientBase<DataTransferService.DataTransferServiceClient>.NewInstance(ClientBase.ClientBaseConfiguration)](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs)

### ScheduleTransferRuns(ScheduleTransferRunsRequest, CallOptions)

```
[Obsolete]
public virtual ScheduleTransferRunsResponse ScheduleTransferRuns(ScheduleTransferRunsRequest request, CallOptions options)
```

Creates transfer runs for a time range \[start\_time, end\_time\]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range. DEPRECATED: use StartManualTransferRuns instead.

**Parameters**

**Name**

**Description**

`request`

`[ScheduleTransferRunsRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ScheduleTransferRunsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[ScheduleTransferRunsResponse](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ScheduleTransferRunsResponse)`

The response received from the server.

### ScheduleTransferRuns(ScheduleTransferRunsRequest, Metadata, DateTime?, CancellationToken)

```
[Obsolete]
public virtual ScheduleTransferRunsResponse ScheduleTransferRuns(ScheduleTransferRunsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Creates transfer runs for a time range \[start\_time, end\_time\]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range. DEPRECATED: use StartManualTransferRuns instead.

**Parameters**

**Name**

**Description**

`request`

`[ScheduleTransferRunsRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ScheduleTransferRunsRequest)`  

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

`[ScheduleTransferRunsResponse](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ScheduleTransferRunsResponse)`

The response received from the server.

### ScheduleTransferRunsAsync(ScheduleTransferRunsRequest, CallOptions)

```
[Obsolete]
public virtual AsyncUnaryCall<ScheduleTransferRunsResponse> ScheduleTransferRunsAsync(ScheduleTransferRunsRequest request, CallOptions options)
```

Creates transfer runs for a time range \[start\_time, end\_time\]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range. DEPRECATED: use StartManualTransferRuns instead.

**Parameters**

**Name**

**Description**

`request`

`[ScheduleTransferRunsRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ScheduleTransferRunsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[ScheduleTransferRunsResponse](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ScheduleTransferRunsResponse)`

The call object.

### ScheduleTransferRunsAsync(ScheduleTransferRunsRequest, Metadata, DateTime?, CancellationToken)

```
[Obsolete]
public virtual AsyncUnaryCall<ScheduleTransferRunsResponse> ScheduleTransferRunsAsync(ScheduleTransferRunsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Creates transfer runs for a time range \[start\_time, end\_time\]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range. DEPRECATED: use StartManualTransferRuns instead.

**Parameters**

**Name**

**Description**

`request`

`[ScheduleTransferRunsRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ScheduleTransferRunsRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[ScheduleTransferRunsResponse](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.ScheduleTransferRunsResponse)`

The call object.

### StartManualTransferRuns(StartManualTransferRunsRequest, CallOptions)

```
public virtual StartManualTransferRunsResponse StartManualTransferRuns(StartManualTransferRunsRequest request, CallOptions options)
```

Start manual transfer runs to be executed now with schedule\_time equal to current time. The transfer runs can be created for a time range where the run\_time is between start\_time (inclusive) and end\_time (exclusive), or for a specific run\_time.

**Parameters**

**Name**

**Description**

`request`

`[StartManualTransferRunsRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.StartManualTransferRunsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[StartManualTransferRunsResponse](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.StartManualTransferRunsResponse)`

The response received from the server.

### StartManualTransferRuns(StartManualTransferRunsRequest, Metadata, DateTime?, CancellationToken)

```
public virtual StartManualTransferRunsResponse StartManualTransferRuns(StartManualTransferRunsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Start manual transfer runs to be executed now with schedule\_time equal to current time. The transfer runs can be created for a time range where the run\_time is between start\_time (inclusive) and end\_time (exclusive), or for a specific run\_time.

**Parameters**

**Name**

**Description**

`request`

`[StartManualTransferRunsRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.StartManualTransferRunsRequest)`  

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

`[StartManualTransferRunsResponse](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.StartManualTransferRunsResponse)`

The response received from the server.

### StartManualTransferRunsAsync(StartManualTransferRunsRequest, CallOptions)

```
public virtual AsyncUnaryCall<StartManualTransferRunsResponse> StartManualTransferRunsAsync(StartManualTransferRunsRequest request, CallOptions options)
```

Start manual transfer runs to be executed now with schedule\_time equal to current time. The transfer runs can be created for a time range where the run\_time is between start\_time (inclusive) and end\_time (exclusive), or for a specific run\_time.

**Parameters**

**Name**

**Description**

`request`

`[StartManualTransferRunsRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.StartManualTransferRunsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[StartManualTransferRunsResponse](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.StartManualTransferRunsResponse)`

The call object.

### StartManualTransferRunsAsync(StartManualTransferRunsRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<StartManualTransferRunsResponse> StartManualTransferRunsAsync(StartManualTransferRunsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Start manual transfer runs to be executed now with schedule\_time equal to current time. The transfer runs can be created for a time range where the run\_time is between start\_time (inclusive) and end\_time (exclusive), or for a specific run\_time.

**Parameters**

**Name**

**Description**

`request`

`[StartManualTransferRunsRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.StartManualTransferRunsRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[StartManualTransferRunsResponse](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.StartManualTransferRunsResponse)`

The call object.

### UnenrollDataSources(UnenrollDataSourcesRequest, CallOptions)

```
public virtual Empty UnenrollDataSources(UnenrollDataSourcesRequest request, CallOptions options)
```

Unenroll data sources in a user project. This allows users to remove transfer configurations for these data sources. They will no longer appear in the ListDataSources RPC and will also no longer appear in the [BigQuery UI](https://console.cloud.google.com/bigquery). Data transfers configurations of unenrolled data sources will not be scheduled.

**Parameters**

**Name**

**Description**

`request`

`[UnenrollDataSourcesRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.UnenrollDataSourcesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)`

The response received from the server.

### UnenrollDataSources(UnenrollDataSourcesRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Empty UnenrollDataSources(UnenrollDataSourcesRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Unenroll data sources in a user project. This allows users to remove transfer configurations for these data sources. They will no longer appear in the ListDataSources RPC and will also no longer appear in the [BigQuery UI](https://console.cloud.google.com/bigquery). Data transfers configurations of unenrolled data sources will not be scheduled.

**Parameters**

**Name**

**Description**

`request`

`[UnenrollDataSourcesRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.UnenrollDataSourcesRequest)`  

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

`[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)`

The response received from the server.

### UnenrollDataSourcesAsync(UnenrollDataSourcesRequest, CallOptions)

```
public virtual AsyncUnaryCall<Empty> UnenrollDataSourcesAsync(UnenrollDataSourcesRequest request, CallOptions options)
```

Unenroll data sources in a user project. This allows users to remove transfer configurations for these data sources. They will no longer appear in the ListDataSources RPC and will also no longer appear in the [BigQuery UI](https://console.cloud.google.com/bigquery). Data transfers configurations of unenrolled data sources will not be scheduled.

**Parameters**

**Name**

**Description**

`request`

`[UnenrollDataSourcesRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.UnenrollDataSourcesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)`

The call object.

### UnenrollDataSourcesAsync(UnenrollDataSourcesRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Empty> UnenrollDataSourcesAsync(UnenrollDataSourcesRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Unenroll data sources in a user project. This allows users to remove transfer configurations for these data sources. They will no longer appear in the ListDataSources RPC and will also no longer appear in the [BigQuery UI](https://console.cloud.google.com/bigquery). Data transfers configurations of unenrolled data sources will not be scheduled.

**Parameters**

**Name**

**Description**

`request`

`[UnenrollDataSourcesRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.UnenrollDataSourcesRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)`

The call object.

### UpdateTransferConfig(UpdateTransferConfigRequest, CallOptions)

```
public virtual TransferConfig UpdateTransferConfig(UpdateTransferConfigRequest request, CallOptions options)
```

Updates a data transfer configuration. All fields must be set, even if they are not updated.

**Parameters**

**Name**

**Description**

`request`

`[UpdateTransferConfigRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.UpdateTransferConfigRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[TransferConfig](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.TransferConfig)`

The response received from the server.

### UpdateTransferConfig(UpdateTransferConfigRequest, Metadata, DateTime?, CancellationToken)

```
public virtual TransferConfig UpdateTransferConfig(UpdateTransferConfigRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Updates a data transfer configuration. All fields must be set, even if they are not updated.

**Parameters**

**Name**

**Description**

`request`

`[UpdateTransferConfigRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.UpdateTransferConfigRequest)`  

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

`[TransferConfig](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.TransferConfig)`

The response received from the server.

### UpdateTransferConfigAsync(UpdateTransferConfigRequest, CallOptions)

```
public virtual AsyncUnaryCall<TransferConfig> UpdateTransferConfigAsync(UpdateTransferConfigRequest request, CallOptions options)
```

Updates a data transfer configuration. All fields must be set, even if they are not updated.

**Parameters**

**Name**

**Description**

`request`

`[UpdateTransferConfigRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.UpdateTransferConfigRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[TransferConfig](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.TransferConfig)`

The call object.

### UpdateTransferConfigAsync(UpdateTransferConfigRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<TransferConfig> UpdateTransferConfigAsync(UpdateTransferConfigRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Updates a data transfer configuration. All fields must be set, even if they are not updated.

**Parameters**

**Name**

**Description**

`request`

`[UpdateTransferConfigRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.UpdateTransferConfigRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[TransferConfig](/dotnet/docs/reference/Google.Cloud.BigQuery.DataTransfer.V1/4.7.0/Google.Cloud.BigQuery.DataTransfer.V1.TransferConfig)`

The call object.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
