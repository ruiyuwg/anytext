-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud AI Platform v1 API - Class VizierService.VizierServiceClient (2.15.0) Stay organized with collections Save and categorize content based on your preferences.

3.68.0 (latest) 3.67.0 3.66.0 3.65.0 3.64.0 3.63.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public class VizierService.VizierServiceClient : ClientBase<VizierService.VizierServiceClient>
```

Reference documentation and code samples for the Cloud AI Platform v1 API class VizierService.VizierServiceClient.

Client for VizierService

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> [ClientBase](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ClientBase.cs) \> [ClientBase](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ClientBase.cs)[VizierService](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.VizierService)[VizierServiceClient](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.VizierService.VizierServiceClient) \> VizierService.VizierServiceClient

## Inherited Members

[ClientBase<VizierService.VizierServiceClient>.WithHost(string)](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ClientBase.cs)

[ClientBase.CallInvoker](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ClientBase.cs)

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.AIPlatform.V1](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1)

## Assembly

Google.Cloud.AIPlatform.V1.dll

## Constructors

### VizierServiceClient()

```
protected VizierServiceClient()
```

Protected parameterless constructor to allow creation of test doubles.

### VizierServiceClient(CallInvoker)

```
public VizierServiceClient(CallInvoker callInvoker)
```

Creates a new client for VizierService that uses a custom `CallInvoker`.

**Parameter**

**Name**

**Description**

`callInvoker`

`[CallInvoker](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallInvoker.cs)`  

The callInvoker to use to make remote calls.

### VizierServiceClient(ChannelBase)

```
public VizierServiceClient(ChannelBase channel)
```

Creates a new client for VizierService

**Parameter**

**Name**

**Description**

`channel`

`[ChannelBase](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ChannelBase.cs)`  

The channel to use to make remote calls.

### VizierServiceClient(ClientBaseConfiguration)

```
protected VizierServiceClient(ClientBase.ClientBaseConfiguration configuration)
```

Protected constructor to allow creation of configured clients.

**Parameter**

**Name**

**Description**

`configuration`

`[ClientBase](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ClientBase.cs)[ClientBaseConfiguration](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ClientBase.cs)`  

The client configuration.

## Methods

### AddTrialMeasurement(AddTrialMeasurementRequest, CallOptions)

```
public virtual Trial AddTrialMeasurement(AddTrialMeasurementRequest request, CallOptions options)
```

Adds a measurement of the objective metrics to a Trial. This measurement is assumed to have been taken before the Trial is complete.

**Parameters**

**Name**

**Description**

`request`

`[AddTrialMeasurementRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.AddTrialMeasurementRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Trial](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Trial)`

The response received from the server.

### AddTrialMeasurement(AddTrialMeasurementRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Trial AddTrialMeasurement(AddTrialMeasurementRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Adds a measurement of the objective metrics to a Trial. This measurement is assumed to have been taken before the Trial is complete.

**Parameters**

**Name**

**Description**

`request`

`[AddTrialMeasurementRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.AddTrialMeasurementRequest)`  

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

`[Trial](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Trial)`

The response received from the server.

### AddTrialMeasurementAsync(AddTrialMeasurementRequest, CallOptions)

```
public virtual AsyncUnaryCall<Trial> AddTrialMeasurementAsync(AddTrialMeasurementRequest request, CallOptions options)
```

Adds a measurement of the objective metrics to a Trial. This measurement is assumed to have been taken before the Trial is complete.

**Parameters**

**Name**

**Description**

`request`

`[AddTrialMeasurementRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.AddTrialMeasurementRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Trial](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Trial)`

The call object.

### AddTrialMeasurementAsync(AddTrialMeasurementRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Trial> AddTrialMeasurementAsync(AddTrialMeasurementRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Adds a measurement of the objective metrics to a Trial. This measurement is assumed to have been taken before the Trial is complete.

**Parameters**

**Name**

**Description**

`request`

`[AddTrialMeasurementRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.AddTrialMeasurementRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Trial](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Trial)`

The call object.

### CheckTrialEarlyStoppingState(CheckTrialEarlyStoppingStateRequest, CallOptions)

```
public virtual Operation CheckTrialEarlyStoppingState(CheckTrialEarlyStoppingStateRequest request, CallOptions options)
```

Checks whether a Trial should stop or not. Returns a long-running operation. When the operation is successful, it will contain a \[CheckTrialEarlyStoppingStateResponse\]\[google.cloud.aiplatform.v1.CheckTrialEarlyStoppingStateResponse\].

**Parameters**

**Name**

**Description**

`request`

`[CheckTrialEarlyStoppingStateRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.CheckTrialEarlyStoppingStateRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response received from the server.

### CheckTrialEarlyStoppingState(CheckTrialEarlyStoppingStateRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation CheckTrialEarlyStoppingState(CheckTrialEarlyStoppingStateRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Checks whether a Trial should stop or not. Returns a long-running operation. When the operation is successful, it will contain a \[CheckTrialEarlyStoppingStateResponse\]\[google.cloud.aiplatform.v1.CheckTrialEarlyStoppingStateResponse\].

**Parameters**

**Name**

**Description**

`request`

`[CheckTrialEarlyStoppingStateRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.CheckTrialEarlyStoppingStateRequest)`  

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

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response received from the server.

### CheckTrialEarlyStoppingStateAsync(CheckTrialEarlyStoppingStateRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> CheckTrialEarlyStoppingStateAsync(CheckTrialEarlyStoppingStateRequest request, CallOptions options)
```

Checks whether a Trial should stop or not. Returns a long-running operation. When the operation is successful, it will contain a \[CheckTrialEarlyStoppingStateResponse\]\[google.cloud.aiplatform.v1.CheckTrialEarlyStoppingStateResponse\].

**Parameters**

**Name**

**Description**

`request`

`[CheckTrialEarlyStoppingStateRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.CheckTrialEarlyStoppingStateRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The call object.

### CheckTrialEarlyStoppingStateAsync(CheckTrialEarlyStoppingStateRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> CheckTrialEarlyStoppingStateAsync(CheckTrialEarlyStoppingStateRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Checks whether a Trial should stop or not. Returns a long-running operation. When the operation is successful, it will contain a \[CheckTrialEarlyStoppingStateResponse\]\[google.cloud.aiplatform.v1.CheckTrialEarlyStoppingStateResponse\].

**Parameters**

**Name**

**Description**

`request`

`[CheckTrialEarlyStoppingStateRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.CheckTrialEarlyStoppingStateRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The call object.

### CompleteTrial(CompleteTrialRequest, CallOptions)

```
public virtual Trial CompleteTrial(CompleteTrialRequest request, CallOptions options)
```

Marks a Trial as complete.

**Parameters**

**Name**

**Description**

`request`

`[CompleteTrialRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.CompleteTrialRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Trial](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Trial)`

The response received from the server.

### CompleteTrial(CompleteTrialRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Trial CompleteTrial(CompleteTrialRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Marks a Trial as complete.

**Parameters**

**Name**

**Description**

`request`

`[CompleteTrialRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.CompleteTrialRequest)`  

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

`[Trial](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Trial)`

The response received from the server.

### CompleteTrialAsync(CompleteTrialRequest, CallOptions)

```
public virtual AsyncUnaryCall<Trial> CompleteTrialAsync(CompleteTrialRequest request, CallOptions options)
```

Marks a Trial as complete.

**Parameters**

**Name**

**Description**

`request`

`[CompleteTrialRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.CompleteTrialRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Trial](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Trial)`

The call object.

### CompleteTrialAsync(CompleteTrialRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Trial> CompleteTrialAsync(CompleteTrialRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Marks a Trial as complete.

**Parameters**

**Name**

**Description**

`request`

`[CompleteTrialRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.CompleteTrialRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Trial](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Trial)`

The call object.

### CreateIAMPolicyClient()

```
public virtual IAMPolicy.IAMPolicyClient CreateIAMPolicyClient()
```

Creates a new instance of [IAMPolicy.IAMPolicyClient](https://github.com/googleapis/google-cloud-dotnet/blob/ff2c06edc86420d5c55db210dfd1c5b6eb7d9bf1/apis/Google.Cloud.Iam.V1/Google.Cloud.Iam.V1/IamPolicyGrpc.g.cs) using the same call invoker as this client.

**Returns**

**Type**

**Description**

`[IAMPolicy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.IAMPolicy.html)[IAMPolicyClient](https://github.com/googleapis/google-cloud-dotnet/blob/ff2c06edc86420d5c55db210dfd1c5b6eb7d9bf1/apis/Google.Cloud.Iam.V1/Google.Cloud.Iam.V1/IamPolicyGrpc.g.cs)`

A new [IAMPolicy.IAMPolicyClient](https://github.com/googleapis/google-cloud-dotnet/blob/ff2c06edc86420d5c55db210dfd1c5b6eb7d9bf1/apis/Google.Cloud.Iam.V1/Google.Cloud.Iam.V1/IamPolicyGrpc.g.cs) for the same target as this client.

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

### CreateStudy(CreateStudyRequest, CallOptions)

```
public virtual Study CreateStudy(CreateStudyRequest request, CallOptions options)
```

Creates a Study. A resource name will be generated after creation of the Study.

**Parameters**

**Name**

**Description**

`request`

`[CreateStudyRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.CreateStudyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Study](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Study)`

The response received from the server.

### CreateStudy(CreateStudyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Study CreateStudy(CreateStudyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Creates a Study. A resource name will be generated after creation of the Study.

**Parameters**

**Name**

**Description**

`request`

`[CreateStudyRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.CreateStudyRequest)`  

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

`[Study](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Study)`

The response received from the server.

### CreateStudyAsync(CreateStudyRequest, CallOptions)

```
public virtual AsyncUnaryCall<Study> CreateStudyAsync(CreateStudyRequest request, CallOptions options)
```

Creates a Study. A resource name will be generated after creation of the Study.

**Parameters**

**Name**

**Description**

`request`

`[CreateStudyRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.CreateStudyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Study](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Study)`

The call object.

### CreateStudyAsync(CreateStudyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Study> CreateStudyAsync(CreateStudyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Creates a Study. A resource name will be generated after creation of the Study.

**Parameters**

**Name**

**Description**

`request`

`[CreateStudyRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.CreateStudyRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Study](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Study)`

The call object.

### CreateTrial(CreateTrialRequest, CallOptions)

```
public virtual Trial CreateTrial(CreateTrialRequest request, CallOptions options)
```

Adds a user provided Trial to a Study.

**Parameters**

**Name**

**Description**

`request`

`[CreateTrialRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.CreateTrialRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Trial](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Trial)`

The response received from the server.

### CreateTrial(CreateTrialRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Trial CreateTrial(CreateTrialRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Adds a user provided Trial to a Study.

**Parameters**

**Name**

**Description**

`request`

`[CreateTrialRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.CreateTrialRequest)`  

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

`[Trial](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Trial)`

The response received from the server.

### CreateTrialAsync(CreateTrialRequest, CallOptions)

```
public virtual AsyncUnaryCall<Trial> CreateTrialAsync(CreateTrialRequest request, CallOptions options)
```

Adds a user provided Trial to a Study.

**Parameters**

**Name**

**Description**

`request`

`[CreateTrialRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.CreateTrialRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Trial](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Trial)`

The call object.

### CreateTrialAsync(CreateTrialRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Trial> CreateTrialAsync(CreateTrialRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Adds a user provided Trial to a Study.

**Parameters**

**Name**

**Description**

`request`

`[CreateTrialRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.CreateTrialRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Trial](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Trial)`

The call object.

### DeleteStudy(DeleteStudyRequest, CallOptions)

```
public virtual Empty DeleteStudy(DeleteStudyRequest request, CallOptions options)
```

Deletes a Study.

**Parameters**

**Name**

**Description**

`request`

`[DeleteStudyRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeleteStudyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)`

The response received from the server.

### DeleteStudy(DeleteStudyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Empty DeleteStudy(DeleteStudyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Deletes a Study.

**Parameters**

**Name**

**Description**

`request`

`[DeleteStudyRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeleteStudyRequest)`  

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

`[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)`

The response received from the server.

### DeleteStudyAsync(DeleteStudyRequest, CallOptions)

```
public virtual AsyncUnaryCall<Empty> DeleteStudyAsync(DeleteStudyRequest request, CallOptions options)
```

Deletes a Study.

**Parameters**

**Name**

**Description**

`request`

`[DeleteStudyRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeleteStudyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)`

The call object.

### DeleteStudyAsync(DeleteStudyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Empty> DeleteStudyAsync(DeleteStudyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Deletes a Study.

**Parameters**

**Name**

**Description**

`request`

`[DeleteStudyRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeleteStudyRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)`

The call object.

### DeleteTrial(DeleteTrialRequest, CallOptions)

```
public virtual Empty DeleteTrial(DeleteTrialRequest request, CallOptions options)
```

Deletes a Trial.

**Parameters**

**Name**

**Description**

`request`

`[DeleteTrialRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeleteTrialRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)`

The response received from the server.

### DeleteTrial(DeleteTrialRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Empty DeleteTrial(DeleteTrialRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Deletes a Trial.

**Parameters**

**Name**

**Description**

`request`

`[DeleteTrialRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeleteTrialRequest)`  

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

`[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)`

The response received from the server.

### DeleteTrialAsync(DeleteTrialRequest, CallOptions)

```
public virtual AsyncUnaryCall<Empty> DeleteTrialAsync(DeleteTrialRequest request, CallOptions options)
```

Deletes a Trial.

**Parameters**

**Name**

**Description**

`request`

`[DeleteTrialRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeleteTrialRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)`

The call object.

### DeleteTrialAsync(DeleteTrialRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Empty> DeleteTrialAsync(DeleteTrialRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Deletes a Trial.

**Parameters**

**Name**

**Description**

`request`

`[DeleteTrialRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeleteTrialRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)`

The call object.

### GetStudy(GetStudyRequest, CallOptions)

```
public virtual Study GetStudy(GetStudyRequest request, CallOptions options)
```

Gets a Study by name.

**Parameters**

**Name**

**Description**

`request`

`[GetStudyRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.GetStudyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Study](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Study)`

The response received from the server.

### GetStudy(GetStudyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Study GetStudy(GetStudyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Gets a Study by name.

**Parameters**

**Name**

**Description**

`request`

`[GetStudyRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.GetStudyRequest)`  

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

`[Study](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Study)`

The response received from the server.

### GetStudyAsync(GetStudyRequest, CallOptions)

```
public virtual AsyncUnaryCall<Study> GetStudyAsync(GetStudyRequest request, CallOptions options)
```

Gets a Study by name.

**Parameters**

**Name**

**Description**

`request`

`[GetStudyRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.GetStudyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Study](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Study)`

The call object.

### GetStudyAsync(GetStudyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Study> GetStudyAsync(GetStudyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Gets a Study by name.

**Parameters**

**Name**

**Description**

`request`

`[GetStudyRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.GetStudyRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Study](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Study)`

The call object.

### GetTrial(GetTrialRequest, CallOptions)

```
public virtual Trial GetTrial(GetTrialRequest request, CallOptions options)
```

Gets a Trial.

**Parameters**

**Name**

**Description**

`request`

`[GetTrialRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.GetTrialRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Trial](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Trial)`

The response received from the server.

### GetTrial(GetTrialRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Trial GetTrial(GetTrialRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Gets a Trial.

**Parameters**

**Name**

**Description**

`request`

`[GetTrialRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.GetTrialRequest)`  

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

`[Trial](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Trial)`

The response received from the server.

### GetTrialAsync(GetTrialRequest, CallOptions)

```
public virtual AsyncUnaryCall<Trial> GetTrialAsync(GetTrialRequest request, CallOptions options)
```

Gets a Trial.

**Parameters**

**Name**

**Description**

`request`

`[GetTrialRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.GetTrialRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Trial](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Trial)`

The call object.

### GetTrialAsync(GetTrialRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Trial> GetTrialAsync(GetTrialRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Gets a Trial.

**Parameters**

**Name**

**Description**

`request`

`[GetTrialRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.GetTrialRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Trial](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Trial)`

The call object.

### ListOptimalTrials(ListOptimalTrialsRequest, CallOptions)

```
public virtual ListOptimalTrialsResponse ListOptimalTrials(ListOptimalTrialsRequest request, CallOptions options)
```

Lists the pareto-optimal Trials for multi-objective Study or the optimal Trials for single-objective Study. The definition of pareto-optimal can be checked in wiki page. [https://en.wikipedia.org/wiki/Pareto\_efficiency](https://en.wikipedia.org/wiki/Pareto_efficiency)

**Parameters**

**Name**

**Description**

`request`

`[ListOptimalTrialsRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.ListOptimalTrialsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[ListOptimalTrialsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.ListOptimalTrialsResponse)`

The response received from the server.

### ListOptimalTrials(ListOptimalTrialsRequest, Metadata, DateTime?, CancellationToken)

```
public virtual ListOptimalTrialsResponse ListOptimalTrials(ListOptimalTrialsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Lists the pareto-optimal Trials for multi-objective Study or the optimal Trials for single-objective Study. The definition of pareto-optimal can be checked in wiki page. [https://en.wikipedia.org/wiki/Pareto\_efficiency](https://en.wikipedia.org/wiki/Pareto_efficiency)

**Parameters**

**Name**

**Description**

`request`

`[ListOptimalTrialsRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.ListOptimalTrialsRequest)`  

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

`[ListOptimalTrialsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.ListOptimalTrialsResponse)`

The response received from the server.

### ListOptimalTrialsAsync(ListOptimalTrialsRequest, CallOptions)

```
public virtual AsyncUnaryCall<ListOptimalTrialsResponse> ListOptimalTrialsAsync(ListOptimalTrialsRequest request, CallOptions options)
```

Lists the pareto-optimal Trials for multi-objective Study or the optimal Trials for single-objective Study. The definition of pareto-optimal can be checked in wiki page. [https://en.wikipedia.org/wiki/Pareto\_efficiency](https://en.wikipedia.org/wiki/Pareto_efficiency)

**Parameters**

**Name**

**Description**

`request`

`[ListOptimalTrialsRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.ListOptimalTrialsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[ListOptimalTrialsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.ListOptimalTrialsResponse)`

The call object.

### ListOptimalTrialsAsync(ListOptimalTrialsRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<ListOptimalTrialsResponse> ListOptimalTrialsAsync(ListOptimalTrialsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Lists the pareto-optimal Trials for multi-objective Study or the optimal Trials for single-objective Study. The definition of pareto-optimal can be checked in wiki page. [https://en.wikipedia.org/wiki/Pareto\_efficiency](https://en.wikipedia.org/wiki/Pareto_efficiency)

**Parameters**

**Name**

**Description**

`request`

`[ListOptimalTrialsRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.ListOptimalTrialsRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[ListOptimalTrialsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.ListOptimalTrialsResponse)`

The call object.

### ListStudies(ListStudiesRequest, CallOptions)

```
public virtual ListStudiesResponse ListStudies(ListStudiesRequest request, CallOptions options)
```

Lists all the studies in a region for an associated project.

**Parameters**

**Name**

**Description**

`request`

`[ListStudiesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.ListStudiesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[ListStudiesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.ListStudiesResponse)`

The response received from the server.

### ListStudies(ListStudiesRequest, Metadata, DateTime?, CancellationToken)

```
public virtual ListStudiesResponse ListStudies(ListStudiesRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Lists all the studies in a region for an associated project.

**Parameters**

**Name**

**Description**

`request`

`[ListStudiesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.ListStudiesRequest)`  

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

`[ListStudiesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.ListStudiesResponse)`

The response received from the server.

### ListStudiesAsync(ListStudiesRequest, CallOptions)

```
public virtual AsyncUnaryCall<ListStudiesResponse> ListStudiesAsync(ListStudiesRequest request, CallOptions options)
```

Lists all the studies in a region for an associated project.

**Parameters**

**Name**

**Description**

`request`

`[ListStudiesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.ListStudiesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[ListStudiesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.ListStudiesResponse)`

The call object.

### ListStudiesAsync(ListStudiesRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<ListStudiesResponse> ListStudiesAsync(ListStudiesRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Lists all the studies in a region for an associated project.

**Parameters**

**Name**

**Description**

`request`

`[ListStudiesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.ListStudiesRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[ListStudiesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.ListStudiesResponse)`

The call object.

### ListTrials(ListTrialsRequest, CallOptions)

```
public virtual ListTrialsResponse ListTrials(ListTrialsRequest request, CallOptions options)
```

Lists the Trials associated with a Study.

**Parameters**

**Name**

**Description**

`request`

`[ListTrialsRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.ListTrialsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[ListTrialsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.ListTrialsResponse)`

The response received from the server.

### ListTrials(ListTrialsRequest, Metadata, DateTime?, CancellationToken)

```
public virtual ListTrialsResponse ListTrials(ListTrialsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Lists the Trials associated with a Study.

**Parameters**

**Name**

**Description**

`request`

`[ListTrialsRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.ListTrialsRequest)`  

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

`[ListTrialsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.ListTrialsResponse)`

The response received from the server.

### ListTrialsAsync(ListTrialsRequest, CallOptions)

```
public virtual AsyncUnaryCall<ListTrialsResponse> ListTrialsAsync(ListTrialsRequest request, CallOptions options)
```

Lists the Trials associated with a Study.

**Parameters**

**Name**

**Description**

`request`

`[ListTrialsRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.ListTrialsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[ListTrialsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.ListTrialsResponse)`

The call object.

### ListTrialsAsync(ListTrialsRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<ListTrialsResponse> ListTrialsAsync(ListTrialsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Lists the Trials associated with a Study.

**Parameters**

**Name**

**Description**

`request`

`[ListTrialsRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.ListTrialsRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[ListTrialsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.ListTrialsResponse)`

The call object.

### LookupStudy(LookupStudyRequest, CallOptions)

```
public virtual Study LookupStudy(LookupStudyRequest request, CallOptions options)
```

Looks a study up using the user-defined display\_name field instead of the fully qualified resource name.

**Parameters**

**Name**

**Description**

`request`

`[LookupStudyRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.LookupStudyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Study](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Study)`

The response received from the server.

### LookupStudy(LookupStudyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Study LookupStudy(LookupStudyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Looks a study up using the user-defined display\_name field instead of the fully qualified resource name.

**Parameters**

**Name**

**Description**

`request`

`[LookupStudyRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.LookupStudyRequest)`  

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

`[Study](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Study)`

The response received from the server.

### LookupStudyAsync(LookupStudyRequest, CallOptions)

```
public virtual AsyncUnaryCall<Study> LookupStudyAsync(LookupStudyRequest request, CallOptions options)
```

Looks a study up using the user-defined display\_name field instead of the fully qualified resource name.

**Parameters**

**Name**

**Description**

`request`

`[LookupStudyRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.LookupStudyRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Study](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Study)`

The call object.

### LookupStudyAsync(LookupStudyRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Study> LookupStudyAsync(LookupStudyRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Looks a study up using the user-defined display\_name field instead of the fully qualified resource name.

**Parameters**

**Name**

**Description**

`request`

`[LookupStudyRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.LookupStudyRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Study](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Study)`

The call object.

### NewInstance(ClientBaseConfiguration)

```
protected override VizierService.VizierServiceClient NewInstance(ClientBase.ClientBaseConfiguration configuration)
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

`[VizierService](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.VizierService)[VizierServiceClient](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.VizierService.VizierServiceClient)`

**Overrides**

[ClientBase<VizierService.VizierServiceClient>.NewInstance(ClientBase.ClientBaseConfiguration)](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ClientBase.cs)

### StopTrial(StopTrialRequest, CallOptions)

```
public virtual Trial StopTrial(StopTrialRequest request, CallOptions options)
```

Stops a Trial.

**Parameters**

**Name**

**Description**

`request`

`[StopTrialRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.StopTrialRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Trial](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Trial)`

The response received from the server.

### StopTrial(StopTrialRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Trial StopTrial(StopTrialRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Stops a Trial.

**Parameters**

**Name**

**Description**

`request`

`[StopTrialRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.StopTrialRequest)`  

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

`[Trial](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Trial)`

The response received from the server.

### StopTrialAsync(StopTrialRequest, CallOptions)

```
public virtual AsyncUnaryCall<Trial> StopTrialAsync(StopTrialRequest request, CallOptions options)
```

Stops a Trial.

**Parameters**

**Name**

**Description**

`request`

`[StopTrialRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.StopTrialRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Trial](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Trial)`

The call object.

### StopTrialAsync(StopTrialRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Trial> StopTrialAsync(StopTrialRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Stops a Trial.

**Parameters**

**Name**

**Description**

`request`

`[StopTrialRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.StopTrialRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Trial](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Trial)`

The call object.

### SuggestTrials(SuggestTrialsRequest, CallOptions)

```
public virtual Operation SuggestTrials(SuggestTrialsRequest request, CallOptions options)
```

Adds one or more Trials to a Study, with parameter values suggested by Vertex AI Vizier. Returns a long-running operation associated with the generation of Trial suggestions. When this long-running operation succeeds, it will contain a \[SuggestTrialsResponse\]\[google.cloud.ml.v1.SuggestTrialsResponse\].

**Parameters**

**Name**

**Description**

`request`

`[SuggestTrialsRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.SuggestTrialsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response received from the server.

### SuggestTrials(SuggestTrialsRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation SuggestTrials(SuggestTrialsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Adds one or more Trials to a Study, with parameter values suggested by Vertex AI Vizier. Returns a long-running operation associated with the generation of Trial suggestions. When this long-running operation succeeds, it will contain a \[SuggestTrialsResponse\]\[google.cloud.ml.v1.SuggestTrialsResponse\].

**Parameters**

**Name**

**Description**

`request`

`[SuggestTrialsRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.SuggestTrialsRequest)`  

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

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response received from the server.

### SuggestTrialsAsync(SuggestTrialsRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> SuggestTrialsAsync(SuggestTrialsRequest request, CallOptions options)
```

Adds one or more Trials to a Study, with parameter values suggested by Vertex AI Vizier. Returns a long-running operation associated with the generation of Trial suggestions. When this long-running operation succeeds, it will contain a \[SuggestTrialsResponse\]\[google.cloud.ml.v1.SuggestTrialsResponse\].

**Parameters**

**Name**

**Description**

`request`

`[SuggestTrialsRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.SuggestTrialsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The call object.

### SuggestTrialsAsync(SuggestTrialsRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> SuggestTrialsAsync(SuggestTrialsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Adds one or more Trials to a Study, with parameter values suggested by Vertex AI Vizier. Returns a long-running operation associated with the generation of Trial suggestions. When this long-running operation succeeds, it will contain a \[SuggestTrialsResponse\]\[google.cloud.ml.v1.SuggestTrialsResponse\].

**Parameters**

**Name**

**Description**

`request`

`[SuggestTrialsRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.SuggestTrialsRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The call object.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
