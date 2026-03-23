-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud AI Platform v1 API - Class FeatureRegistryService.FeatureRegistryServiceClient (2.28.0) Stay organized with collections Save and categorize content based on your preferences.

3.68.0 (latest) 3.67.0 3.66.0 3.65.0 3.64.0 3.63.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public class FeatureRegistryService.FeatureRegistryServiceClient : ClientBase<FeatureRegistryService.FeatureRegistryServiceClient>
```

Reference documentation and code samples for the Cloud AI Platform v1 API class FeatureRegistryService.FeatureRegistryServiceClient.

Client for FeatureRegistryService

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> [ClientBase](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs) \> [ClientBase](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs)[FeatureRegistryService](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.FeatureRegistryService)[FeatureRegistryServiceClient](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.FeatureRegistryService.FeatureRegistryServiceClient) \> FeatureRegistryService.FeatureRegistryServiceClient

## Inherited Members

[ClientBase<FeatureRegistryService.FeatureRegistryServiceClient>.WithHost(string)](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs)

[ClientBase.CallInvoker](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs)

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.AIPlatform.V1](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1)

## Assembly

Google.Cloud.AIPlatform.V1.dll

## Constructors

### FeatureRegistryServiceClient()

```
protected FeatureRegistryServiceClient()
```

Protected parameterless constructor to allow creation of test doubles.

### FeatureRegistryServiceClient(CallInvoker)

```
public FeatureRegistryServiceClient(CallInvoker callInvoker)
```

Creates a new client for FeatureRegistryService that uses a custom `CallInvoker`.

**Parameter**

**Name**

**Description**

`callInvoker`

`[CallInvoker](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallInvoker.cs)`  

The callInvoker to use to make remote calls.

### FeatureRegistryServiceClient(ChannelBase)

```
public FeatureRegistryServiceClient(ChannelBase channel)
```

Creates a new client for FeatureRegistryService

**Parameter**

**Name**

**Description**

`channel`

`[ChannelBase](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ChannelBase.cs)`  

The channel to use to make remote calls.

### FeatureRegistryServiceClient(ClientBaseConfiguration)

```
protected FeatureRegistryServiceClient(ClientBase.ClientBaseConfiguration configuration)
```

Protected constructor to allow creation of configured clients.

**Parameter**

**Name**

**Description**

`configuration`

`[ClientBase](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs)[ClientBaseConfiguration](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs)`  

The client configuration.

## Methods

### CreateFeature(CreateFeatureRequest, CallOptions)

```
public virtual Operation CreateFeature(CreateFeatureRequest request, CallOptions options)
```

Creates a new Feature in a given FeatureGroup.

**Parameters**

**Name**

**Description**

`request`

`[CreateFeatureRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.CreateFeatureRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response received from the server.

### CreateFeature(CreateFeatureRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation CreateFeature(CreateFeatureRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Creates a new Feature in a given FeatureGroup.

**Parameters**

**Name**

**Description**

`request`

`[CreateFeatureRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.CreateFeatureRequest)`  

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

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response received from the server.

### CreateFeatureAsync(CreateFeatureRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> CreateFeatureAsync(CreateFeatureRequest request, CallOptions options)
```

Creates a new Feature in a given FeatureGroup.

**Parameters**

**Name**

**Description**

`request`

`[CreateFeatureRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.CreateFeatureRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The call object.

### CreateFeatureAsync(CreateFeatureRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> CreateFeatureAsync(CreateFeatureRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Creates a new Feature in a given FeatureGroup.

**Parameters**

**Name**

**Description**

`request`

`[CreateFeatureRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.CreateFeatureRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The call object.

### CreateFeatureGroup(CreateFeatureGroupRequest, CallOptions)

```
public virtual Operation CreateFeatureGroup(CreateFeatureGroupRequest request, CallOptions options)
```

Creates a new FeatureGroup in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[CreateFeatureGroupRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.CreateFeatureGroupRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response received from the server.

### CreateFeatureGroup(CreateFeatureGroupRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation CreateFeatureGroup(CreateFeatureGroupRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Creates a new FeatureGroup in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[CreateFeatureGroupRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.CreateFeatureGroupRequest)`  

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

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response received from the server.

### CreateFeatureGroupAsync(CreateFeatureGroupRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> CreateFeatureGroupAsync(CreateFeatureGroupRequest request, CallOptions options)
```

Creates a new FeatureGroup in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[CreateFeatureGroupRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.CreateFeatureGroupRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The call object.

### CreateFeatureGroupAsync(CreateFeatureGroupRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> CreateFeatureGroupAsync(CreateFeatureGroupRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Creates a new FeatureGroup in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[CreateFeatureGroupRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.CreateFeatureGroupRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The call object.

### CreateIAMPolicyClient()

```
public virtual IAMPolicy.IAMPolicyClient CreateIAMPolicyClient()
```

Creates a new instance of [IAMPolicy.IAMPolicyClient](https://github.com/googleapis/google-cloud-dotnet/blob/c910b9b4c9b6e2bd30fcf50ea6ab4b703b58fd62/apis/Google.Cloud.Iam.V1/Google.Cloud.Iam.V1/IamPolicyGrpc.g.cs) using the same call invoker as this client.

**Returns**

**Type**

**Description**

`[IAMPolicy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.IAMPolicy.html)[IAMPolicyClient](https://github.com/googleapis/google-cloud-dotnet/blob/c910b9b4c9b6e2bd30fcf50ea6ab4b703b58fd62/apis/Google.Cloud.Iam.V1/Google.Cloud.Iam.V1/IamPolicyGrpc.g.cs)`

A new [IAMPolicy.IAMPolicyClient](https://github.com/googleapis/google-cloud-dotnet/blob/c910b9b4c9b6e2bd30fcf50ea6ab4b703b58fd62/apis/Google.Cloud.Iam.V1/Google.Cloud.Iam.V1/IamPolicyGrpc.g.cs) for the same target as this client.

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

### CreateOperationsClient()

```
public virtual Operations.OperationsClient CreateOperationsClient()
```

Creates a new instance of [Operations.OperationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/OperationsGrpc.g.cs) using the same call invoker as this client.

**Returns**

**Type**

**Description**

`[Operations](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operations.html)[OperationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/OperationsGrpc.g.cs)`

A new Operations client for the same target as this client.

### DeleteFeature(DeleteFeatureRequest, CallOptions)

```
public virtual Operation DeleteFeature(DeleteFeatureRequest request, CallOptions options)
```

Deletes a single Feature.

**Parameters**

**Name**

**Description**

`request`

`[DeleteFeatureRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.DeleteFeatureRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response received from the server.

### DeleteFeature(DeleteFeatureRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation DeleteFeature(DeleteFeatureRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Deletes a single Feature.

**Parameters**

**Name**

**Description**

`request`

`[DeleteFeatureRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.DeleteFeatureRequest)`  

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

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response received from the server.

### DeleteFeatureAsync(DeleteFeatureRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> DeleteFeatureAsync(DeleteFeatureRequest request, CallOptions options)
```

Deletes a single Feature.

**Parameters**

**Name**

**Description**

`request`

`[DeleteFeatureRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.DeleteFeatureRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The call object.

### DeleteFeatureAsync(DeleteFeatureRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> DeleteFeatureAsync(DeleteFeatureRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Deletes a single Feature.

**Parameters**

**Name**

**Description**

`request`

`[DeleteFeatureRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.DeleteFeatureRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The call object.

### DeleteFeatureGroup(DeleteFeatureGroupRequest, CallOptions)

```
public virtual Operation DeleteFeatureGroup(DeleteFeatureGroupRequest request, CallOptions options)
```

Deletes a single FeatureGroup.

**Parameters**

**Name**

**Description**

`request`

`[DeleteFeatureGroupRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.DeleteFeatureGroupRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response received from the server.

### DeleteFeatureGroup(DeleteFeatureGroupRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation DeleteFeatureGroup(DeleteFeatureGroupRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Deletes a single FeatureGroup.

**Parameters**

**Name**

**Description**

`request`

`[DeleteFeatureGroupRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.DeleteFeatureGroupRequest)`  

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

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response received from the server.

### DeleteFeatureGroupAsync(DeleteFeatureGroupRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> DeleteFeatureGroupAsync(DeleteFeatureGroupRequest request, CallOptions options)
```

Deletes a single FeatureGroup.

**Parameters**

**Name**

**Description**

`request`

`[DeleteFeatureGroupRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.DeleteFeatureGroupRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The call object.

### DeleteFeatureGroupAsync(DeleteFeatureGroupRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> DeleteFeatureGroupAsync(DeleteFeatureGroupRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Deletes a single FeatureGroup.

**Parameters**

**Name**

**Description**

`request`

`[DeleteFeatureGroupRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.DeleteFeatureGroupRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The call object.

### GetFeature(GetFeatureRequest, CallOptions)

```
public virtual Feature GetFeature(GetFeatureRequest request, CallOptions options)
```

Gets details of a single Feature.

**Parameters**

**Name**

**Description**

`request`

`[GetFeatureRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.GetFeatureRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Feature](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.Feature)`

The response received from the server.

### GetFeature(GetFeatureRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Feature GetFeature(GetFeatureRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Gets details of a single Feature.

**Parameters**

**Name**

**Description**

`request`

`[GetFeatureRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.GetFeatureRequest)`  

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

`[Feature](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.Feature)`

The response received from the server.

### GetFeatureAsync(GetFeatureRequest, CallOptions)

```
public virtual AsyncUnaryCall<Feature> GetFeatureAsync(GetFeatureRequest request, CallOptions options)
```

Gets details of a single Feature.

**Parameters**

**Name**

**Description**

`request`

`[GetFeatureRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.GetFeatureRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Feature](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.Feature)`

The call object.

### GetFeatureAsync(GetFeatureRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Feature> GetFeatureAsync(GetFeatureRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Gets details of a single Feature.

**Parameters**

**Name**

**Description**

`request`

`[GetFeatureRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.GetFeatureRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Feature](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.Feature)`

The call object.

### GetFeatureGroup(GetFeatureGroupRequest, CallOptions)

```
public virtual FeatureGroup GetFeatureGroup(GetFeatureGroupRequest request, CallOptions options)
```

Gets details of a single FeatureGroup.

**Parameters**

**Name**

**Description**

`request`

`[GetFeatureGroupRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.GetFeatureGroupRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[FeatureGroup](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.FeatureGroup)`

The response received from the server.

### GetFeatureGroup(GetFeatureGroupRequest, Metadata, DateTime?, CancellationToken)

```
public virtual FeatureGroup GetFeatureGroup(GetFeatureGroupRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Gets details of a single FeatureGroup.

**Parameters**

**Name**

**Description**

`request`

`[GetFeatureGroupRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.GetFeatureGroupRequest)`  

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

`[FeatureGroup](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.FeatureGroup)`

The response received from the server.

### GetFeatureGroupAsync(GetFeatureGroupRequest, CallOptions)

```
public virtual AsyncUnaryCall<FeatureGroup> GetFeatureGroupAsync(GetFeatureGroupRequest request, CallOptions options)
```

Gets details of a single FeatureGroup.

**Parameters**

**Name**

**Description**

`request`

`[GetFeatureGroupRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.GetFeatureGroupRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[FeatureGroup](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.FeatureGroup)`

The call object.

### GetFeatureGroupAsync(GetFeatureGroupRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<FeatureGroup> GetFeatureGroupAsync(GetFeatureGroupRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Gets details of a single FeatureGroup.

**Parameters**

**Name**

**Description**

`request`

`[GetFeatureGroupRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.GetFeatureGroupRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[FeatureGroup](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.FeatureGroup)`

The call object.

### ListFeatureGroups(ListFeatureGroupsRequest, CallOptions)

```
public virtual ListFeatureGroupsResponse ListFeatureGroups(ListFeatureGroupsRequest request, CallOptions options)
```

Lists FeatureGroups in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[ListFeatureGroupsRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.ListFeatureGroupsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[ListFeatureGroupsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.ListFeatureGroupsResponse)`

The response received from the server.

### ListFeatureGroups(ListFeatureGroupsRequest, Metadata, DateTime?, CancellationToken)

```
public virtual ListFeatureGroupsResponse ListFeatureGroups(ListFeatureGroupsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Lists FeatureGroups in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[ListFeatureGroupsRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.ListFeatureGroupsRequest)`  

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

`[ListFeatureGroupsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.ListFeatureGroupsResponse)`

The response received from the server.

### ListFeatureGroupsAsync(ListFeatureGroupsRequest, CallOptions)

```
public virtual AsyncUnaryCall<ListFeatureGroupsResponse> ListFeatureGroupsAsync(ListFeatureGroupsRequest request, CallOptions options)
```

Lists FeatureGroups in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[ListFeatureGroupsRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.ListFeatureGroupsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[ListFeatureGroupsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.ListFeatureGroupsResponse)`

The call object.

### ListFeatureGroupsAsync(ListFeatureGroupsRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<ListFeatureGroupsResponse> ListFeatureGroupsAsync(ListFeatureGroupsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Lists FeatureGroups in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[ListFeatureGroupsRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.ListFeatureGroupsRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[ListFeatureGroupsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.ListFeatureGroupsResponse)`

The call object.

### ListFeatures(ListFeaturesRequest, CallOptions)

```
public virtual ListFeaturesResponse ListFeatures(ListFeaturesRequest request, CallOptions options)
```

Lists Features in a given FeatureGroup.

**Parameters**

**Name**

**Description**

`request`

`[ListFeaturesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.ListFeaturesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[ListFeaturesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.ListFeaturesResponse)`

The response received from the server.

### ListFeatures(ListFeaturesRequest, Metadata, DateTime?, CancellationToken)

```
public virtual ListFeaturesResponse ListFeatures(ListFeaturesRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Lists Features in a given FeatureGroup.

**Parameters**

**Name**

**Description**

`request`

`[ListFeaturesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.ListFeaturesRequest)`  

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

`[ListFeaturesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.ListFeaturesResponse)`

The response received from the server.

### ListFeaturesAsync(ListFeaturesRequest, CallOptions)

```
public virtual AsyncUnaryCall<ListFeaturesResponse> ListFeaturesAsync(ListFeaturesRequest request, CallOptions options)
```

Lists Features in a given FeatureGroup.

**Parameters**

**Name**

**Description**

`request`

`[ListFeaturesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.ListFeaturesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[ListFeaturesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.ListFeaturesResponse)`

The call object.

### ListFeaturesAsync(ListFeaturesRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<ListFeaturesResponse> ListFeaturesAsync(ListFeaturesRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Lists Features in a given FeatureGroup.

**Parameters**

**Name**

**Description**

`request`

`[ListFeaturesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.ListFeaturesRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[ListFeaturesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.ListFeaturesResponse)`

The call object.

### NewInstance(ClientBaseConfiguration)

```
protected override FeatureRegistryService.FeatureRegistryServiceClient NewInstance(ClientBase.ClientBaseConfiguration configuration)
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

`[FeatureRegistryService](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.FeatureRegistryService)[FeatureRegistryServiceClient](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.FeatureRegistryService.FeatureRegistryServiceClient)`

**Overrides**

[ClientBase<FeatureRegistryService.FeatureRegistryServiceClient>.NewInstance(ClientBase.ClientBaseConfiguration)](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ClientBase.cs)

### UpdateFeature(UpdateFeatureRequest, CallOptions)

```
public virtual Operation UpdateFeature(UpdateFeatureRequest request, CallOptions options)
```

Updates the parameters of a single Feature.

**Parameters**

**Name**

**Description**

`request`

`[UpdateFeatureRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.UpdateFeatureRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response received from the server.

### UpdateFeature(UpdateFeatureRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation UpdateFeature(UpdateFeatureRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Updates the parameters of a single Feature.

**Parameters**

**Name**

**Description**

`request`

`[UpdateFeatureRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.UpdateFeatureRequest)`  

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

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response received from the server.

### UpdateFeatureAsync(UpdateFeatureRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> UpdateFeatureAsync(UpdateFeatureRequest request, CallOptions options)
```

Updates the parameters of a single Feature.

**Parameters**

**Name**

**Description**

`request`

`[UpdateFeatureRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.UpdateFeatureRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The call object.

### UpdateFeatureAsync(UpdateFeatureRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> UpdateFeatureAsync(UpdateFeatureRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Updates the parameters of a single Feature.

**Parameters**

**Name**

**Description**

`request`

`[UpdateFeatureRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.UpdateFeatureRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The call object.

### UpdateFeatureGroup(UpdateFeatureGroupRequest, CallOptions)

```
public virtual Operation UpdateFeatureGroup(UpdateFeatureGroupRequest request, CallOptions options)
```

Updates the parameters of a single FeatureGroup.

**Parameters**

**Name**

**Description**

`request`

`[UpdateFeatureGroupRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.UpdateFeatureGroupRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response received from the server.

### UpdateFeatureGroup(UpdateFeatureGroupRequest, Metadata, DateTime?, CancellationToken)

```
public virtual Operation UpdateFeatureGroup(UpdateFeatureGroupRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Updates the parameters of a single FeatureGroup.

**Parameters**

**Name**

**Description**

`request`

`[UpdateFeatureGroupRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.UpdateFeatureGroupRequest)`  

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

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The response received from the server.

### UpdateFeatureGroupAsync(UpdateFeatureGroupRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> UpdateFeatureGroupAsync(UpdateFeatureGroupRequest request, CallOptions options)
```

Updates the parameters of a single FeatureGroup.

**Parameters**

**Name**

**Description**

`request`

`[UpdateFeatureGroupRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.UpdateFeatureGroupRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/CallOptions.cs)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The call object.

### UpdateFeatureGroupAsync(UpdateFeatureGroupRequest, Metadata, DateTime?, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> UpdateFeatureGroupAsync(UpdateFeatureGroupRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default)
```

Updates the parameters of a single FeatureGroup.

**Parameters**

**Name**

**Description**

`request`

`[UpdateFeatureGroupRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.28.0/Google.Cloud.AIPlatform.V1.UpdateFeatureGroupRequest)`  

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

`[AsyncUnaryCall](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/AsyncUnaryCall.cs)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operations.g.cs)`

The call object.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
