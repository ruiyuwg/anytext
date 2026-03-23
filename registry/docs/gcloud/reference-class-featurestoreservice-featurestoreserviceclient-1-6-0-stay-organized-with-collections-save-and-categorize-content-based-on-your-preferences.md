-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class FeaturestoreService.FeaturestoreServiceClient (1.6.0) Stay organized with collections Save and categorize content based on your preferences.

3.68.0 (latest) 3.67.0 3.66.0 3.65.0 3.64.0 3.63.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public class FeaturestoreServiceClient : ClientBase<FeaturestoreService.FeaturestoreServiceClient>
```

Client for FeaturestoreService

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> [ClientBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.html) \> [ClientBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase-1.html)<[FeaturestoreService.FeaturestoreServiceClient](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.FeaturestoreService.FeaturestoreServiceClient)\> \> FeaturestoreService.FeaturestoreServiceClient

## Inherited Members

[ClientBase<FeaturestoreService.FeaturestoreServiceClient>.WithHost(String)](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase-1.html#Grpc_Core_ClientBase_1_WithHost_System_String_)

[ClientBase.CallInvoker](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.html#Grpc_Core_ClientBase_CallInvoker)

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.AIPlatform.V1](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1)

## Assembly

Google.Cloud.AIPlatform.V1.dll

## Constructors

### FeaturestoreServiceClient()

```
protected FeaturestoreServiceClient()
```

Protected parameterless constructor to allow creation of test doubles.

### FeaturestoreServiceClient(CallInvoker)

```
public FeaturestoreServiceClient(CallInvoker callInvoker)
```

Creates a new client for FeaturestoreService that uses a custom `CallInvoker`.

**Parameter**

**Name**

**Description**

`callInvoker`

`[CallInvoker](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallInvoker.html)`  

The callInvoker to use to make remote calls.

### FeaturestoreServiceClient(ChannelBase)

```
public FeaturestoreServiceClient(ChannelBase channel)
```

Creates a new client for FeaturestoreService

**Parameter**

**Name**

**Description**

`channel`

`[ChannelBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ChannelBase.html)`  

The channel to use to make remote calls.

### FeaturestoreServiceClient(ClientBase.ClientBaseConfiguration)

```
protected FeaturestoreServiceClient(ClientBase.ClientBaseConfiguration configuration)
```

Protected constructor to allow creation of configured clients.

**Parameter**

**Name**

**Description**

`configuration`

`[ClientBase.ClientBaseConfiguration](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.ClientBaseConfiguration.html)`  

The client configuration.

## Methods

### BatchCreateFeatures(BatchCreateFeaturesRequest, CallOptions)

```
public virtual Operation BatchCreateFeatures(BatchCreateFeaturesRequest request, CallOptions options)
```

Creates a batch of Features in a given EntityType.

**Parameters**

**Name**

**Description**

`request`

`[BatchCreateFeaturesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.BatchCreateFeaturesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)`

The response received from the server.

### BatchCreateFeatures(BatchCreateFeaturesRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual Operation BatchCreateFeatures(BatchCreateFeaturesRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Creates a batch of Features in a given EntityType.

**Parameters**

**Name**

**Description**

`request`

`[BatchCreateFeaturesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.BatchCreateFeaturesRequest)`  

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

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)`

The response received from the server.

### BatchCreateFeaturesAsync(BatchCreateFeaturesRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> BatchCreateFeaturesAsync(BatchCreateFeaturesRequest request, CallOptions options)
```

Creates a batch of Features in a given EntityType.

**Parameters**

**Name**

**Description**

`request`

`[BatchCreateFeaturesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.BatchCreateFeaturesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The call object.

### BatchCreateFeaturesAsync(BatchCreateFeaturesRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> BatchCreateFeaturesAsync(BatchCreateFeaturesRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Creates a batch of Features in a given EntityType.

**Parameters**

**Name**

**Description**

`request`

`[BatchCreateFeaturesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.BatchCreateFeaturesRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The call object.

### BatchReadFeatureValues(BatchReadFeatureValuesRequest, CallOptions)

```
public virtual Operation BatchReadFeatureValues(BatchReadFeatureValuesRequest request, CallOptions options)
```

Batch reads Feature values from a Featurestore.

This API enables batch reading Feature values, where each read instance in the batch may read Feature values of entities from one or more EntityTypes. Point-in-time correctness is guaranteed for Feature values of each read instance as of each instance's read timestamp.

**Parameters**

**Name**

**Description**

`request`

`[BatchReadFeatureValuesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.BatchReadFeatureValuesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)`

The response received from the server.

### BatchReadFeatureValues(BatchReadFeatureValuesRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual Operation BatchReadFeatureValues(BatchReadFeatureValuesRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Batch reads Feature values from a Featurestore.

This API enables batch reading Feature values, where each read instance in the batch may read Feature values of entities from one or more EntityTypes. Point-in-time correctness is guaranteed for Feature values of each read instance as of each instance's read timestamp.

**Parameters**

**Name**

**Description**

`request`

`[BatchReadFeatureValuesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.BatchReadFeatureValuesRequest)`  

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

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)`

The response received from the server.

### BatchReadFeatureValuesAsync(BatchReadFeatureValuesRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> BatchReadFeatureValuesAsync(BatchReadFeatureValuesRequest request, CallOptions options)
```

Batch reads Feature values from a Featurestore.

This API enables batch reading Feature values, where each read instance in the batch may read Feature values of entities from one or more EntityTypes. Point-in-time correctness is guaranteed for Feature values of each read instance as of each instance's read timestamp.

**Parameters**

**Name**

**Description**

`request`

`[BatchReadFeatureValuesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.BatchReadFeatureValuesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The call object.

### BatchReadFeatureValuesAsync(BatchReadFeatureValuesRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> BatchReadFeatureValuesAsync(BatchReadFeatureValuesRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Batch reads Feature values from a Featurestore.

This API enables batch reading Feature values, where each read instance in the batch may read Feature values of entities from one or more EntityTypes. Point-in-time correctness is guaranteed for Feature values of each read instance as of each instance's read timestamp.

**Parameters**

**Name**

**Description**

`request`

`[BatchReadFeatureValuesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.BatchReadFeatureValuesRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The call object.

### CreateEntityType(CreateEntityTypeRequest, CallOptions)

```
public virtual Operation CreateEntityType(CreateEntityTypeRequest request, CallOptions options)
```

Creates a new EntityType in a given Featurestore.

**Parameters**

**Name**

**Description**

`request`

`[CreateEntityTypeRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.CreateEntityTypeRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)`

The response received from the server.

### CreateEntityType(CreateEntityTypeRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual Operation CreateEntityType(CreateEntityTypeRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Creates a new EntityType in a given Featurestore.

**Parameters**

**Name**

**Description**

`request`

`[CreateEntityTypeRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.CreateEntityTypeRequest)`  

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

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)`

The response received from the server.

### CreateEntityTypeAsync(CreateEntityTypeRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> CreateEntityTypeAsync(CreateEntityTypeRequest request, CallOptions options)
```

Creates a new EntityType in a given Featurestore.

**Parameters**

**Name**

**Description**

`request`

`[CreateEntityTypeRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.CreateEntityTypeRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The call object.

### CreateEntityTypeAsync(CreateEntityTypeRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> CreateEntityTypeAsync(CreateEntityTypeRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Creates a new EntityType in a given Featurestore.

**Parameters**

**Name**

**Description**

`request`

`[CreateEntityTypeRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.CreateEntityTypeRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The call object.

### CreateFeature(CreateFeatureRequest, CallOptions)

```
public virtual Operation CreateFeature(CreateFeatureRequest request, CallOptions options)
```

Creates a new Feature in a given EntityType.

**Parameters**

**Name**

**Description**

`request`

`[CreateFeatureRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.CreateFeatureRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)`

The response received from the server.

### CreateFeature(CreateFeatureRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual Operation CreateFeature(CreateFeatureRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Creates a new Feature in a given EntityType.

**Parameters**

**Name**

**Description**

`request`

`[CreateFeatureRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.CreateFeatureRequest)`  

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

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)`

The response received from the server.

### CreateFeatureAsync(CreateFeatureRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> CreateFeatureAsync(CreateFeatureRequest request, CallOptions options)
```

Creates a new Feature in a given EntityType.

**Parameters**

**Name**

**Description**

`request`

`[CreateFeatureRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.CreateFeatureRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The call object.

### CreateFeatureAsync(CreateFeatureRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> CreateFeatureAsync(CreateFeatureRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Creates a new Feature in a given EntityType.

**Parameters**

**Name**

**Description**

`request`

`[CreateFeatureRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.CreateFeatureRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The call object.

### CreateFeaturestore(CreateFeaturestoreRequest, CallOptions)

```
public virtual Operation CreateFeaturestore(CreateFeaturestoreRequest request, CallOptions options)
```

Creates a new Featurestore in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[CreateFeaturestoreRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.CreateFeaturestoreRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)`

The response received from the server.

### CreateFeaturestore(CreateFeaturestoreRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual Operation CreateFeaturestore(CreateFeaturestoreRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Creates a new Featurestore in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[CreateFeaturestoreRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.CreateFeaturestoreRequest)`  

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

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)`

The response received from the server.

### CreateFeaturestoreAsync(CreateFeaturestoreRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> CreateFeaturestoreAsync(CreateFeaturestoreRequest request, CallOptions options)
```

Creates a new Featurestore in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[CreateFeaturestoreRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.CreateFeaturestoreRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The call object.

### CreateFeaturestoreAsync(CreateFeaturestoreRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> CreateFeaturestoreAsync(CreateFeaturestoreRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Creates a new Featurestore in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[CreateFeaturestoreRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.CreateFeaturestoreRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The call object.

### CreateOperationsClient()

```
public virtual Operations.OperationsClient CreateOperationsClient()
```

Creates a new instance of [Operations.OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operations.OperationsClient.html) using the same call invoker as this client.

**Returns**

**Type**

**Description**

`[Operations.OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operations.OperationsClient.html)`

A new Operations client for the same target as this client.

### DeleteEntityType(DeleteEntityTypeRequest, CallOptions)

```
public virtual Operation DeleteEntityType(DeleteEntityTypeRequest request, CallOptions options)
```

Deletes a single EntityType. The EntityType must not have any Features or `force` must be set to true for the request to succeed.

**Parameters**

**Name**

**Description**

`request`

`[DeleteEntityTypeRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.DeleteEntityTypeRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)`

The response received from the server.

### DeleteEntityType(DeleteEntityTypeRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual Operation DeleteEntityType(DeleteEntityTypeRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Deletes a single EntityType. The EntityType must not have any Features or `force` must be set to true for the request to succeed.

**Parameters**

**Name**

**Description**

`request`

`[DeleteEntityTypeRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.DeleteEntityTypeRequest)`  

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

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)`

The response received from the server.

### DeleteEntityTypeAsync(DeleteEntityTypeRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> DeleteEntityTypeAsync(DeleteEntityTypeRequest request, CallOptions options)
```

Deletes a single EntityType. The EntityType must not have any Features or `force` must be set to true for the request to succeed.

**Parameters**

**Name**

**Description**

`request`

`[DeleteEntityTypeRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.DeleteEntityTypeRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The call object.

### DeleteEntityTypeAsync(DeleteEntityTypeRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> DeleteEntityTypeAsync(DeleteEntityTypeRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Deletes a single EntityType. The EntityType must not have any Features or `force` must be set to true for the request to succeed.

**Parameters**

**Name**

**Description**

`request`

`[DeleteEntityTypeRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.DeleteEntityTypeRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The call object.

### DeleteFeature(DeleteFeatureRequest, CallOptions)

```
public virtual Operation DeleteFeature(DeleteFeatureRequest request, CallOptions options)
```

Deletes a single Feature.

**Parameters**

**Name**

**Description**

`request`

`[DeleteFeatureRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.DeleteFeatureRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)`

The response received from the server.

### DeleteFeature(DeleteFeatureRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual Operation DeleteFeature(DeleteFeatureRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Deletes a single Feature.

**Parameters**

**Name**

**Description**

`request`

`[DeleteFeatureRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.DeleteFeatureRequest)`  

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

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)`

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

`[DeleteFeatureRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.DeleteFeatureRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The call object.

### DeleteFeatureAsync(DeleteFeatureRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> DeleteFeatureAsync(DeleteFeatureRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Deletes a single Feature.

**Parameters**

**Name**

**Description**

`request`

`[DeleteFeatureRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.DeleteFeatureRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The call object.

### DeleteFeaturestore(DeleteFeaturestoreRequest, CallOptions)

```
public virtual Operation DeleteFeaturestore(DeleteFeaturestoreRequest request, CallOptions options)
```

Deletes a single Featurestore. The Featurestore must not contain any EntityTypes or `force` must be set to true for the request to succeed.

**Parameters**

**Name**

**Description**

`request`

`[DeleteFeaturestoreRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.DeleteFeaturestoreRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)`

The response received from the server.

### DeleteFeaturestore(DeleteFeaturestoreRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual Operation DeleteFeaturestore(DeleteFeaturestoreRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Deletes a single Featurestore. The Featurestore must not contain any EntityTypes or `force` must be set to true for the request to succeed.

**Parameters**

**Name**

**Description**

`request`

`[DeleteFeaturestoreRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.DeleteFeaturestoreRequest)`  

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

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)`

The response received from the server.

### DeleteFeaturestoreAsync(DeleteFeaturestoreRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> DeleteFeaturestoreAsync(DeleteFeaturestoreRequest request, CallOptions options)
```

Deletes a single Featurestore. The Featurestore must not contain any EntityTypes or `force` must be set to true for the request to succeed.

**Parameters**

**Name**

**Description**

`request`

`[DeleteFeaturestoreRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.DeleteFeaturestoreRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The call object.

### DeleteFeaturestoreAsync(DeleteFeaturestoreRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> DeleteFeaturestoreAsync(DeleteFeaturestoreRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Deletes a single Featurestore. The Featurestore must not contain any EntityTypes or `force` must be set to true for the request to succeed.

**Parameters**

**Name**

**Description**

`request`

`[DeleteFeaturestoreRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.DeleteFeaturestoreRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The call object.

### ExportFeatureValues(ExportFeatureValuesRequest, CallOptions)

```
public virtual Operation ExportFeatureValues(ExportFeatureValuesRequest request, CallOptions options)
```

Exports Feature values from all the entities of a target EntityType.

**Parameters**

**Name**

**Description**

`request`

`[ExportFeatureValuesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.ExportFeatureValuesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)`

The response received from the server.

### ExportFeatureValues(ExportFeatureValuesRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual Operation ExportFeatureValues(ExportFeatureValuesRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Exports Feature values from all the entities of a target EntityType.

**Parameters**

**Name**

**Description**

`request`

`[ExportFeatureValuesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.ExportFeatureValuesRequest)`  

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

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)`

The response received from the server.

### ExportFeatureValuesAsync(ExportFeatureValuesRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> ExportFeatureValuesAsync(ExportFeatureValuesRequest request, CallOptions options)
```

Exports Feature values from all the entities of a target EntityType.

**Parameters**

**Name**

**Description**

`request`

`[ExportFeatureValuesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.ExportFeatureValuesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The call object.

### ExportFeatureValuesAsync(ExportFeatureValuesRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> ExportFeatureValuesAsync(ExportFeatureValuesRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Exports Feature values from all the entities of a target EntityType.

**Parameters**

**Name**

**Description**

`request`

`[ExportFeatureValuesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.ExportFeatureValuesRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The call object.

### GetEntityType(GetEntityTypeRequest, CallOptions)

```
public virtual EntityType GetEntityType(GetEntityTypeRequest request, CallOptions options)
```

Gets details of a single EntityType.

**Parameters**

**Name**

**Description**

`request`

`[GetEntityTypeRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.GetEntityTypeRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[EntityType](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.EntityType)`

The response received from the server.

### GetEntityType(GetEntityTypeRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual EntityType GetEntityType(GetEntityTypeRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Gets details of a single EntityType.

**Parameters**

**Name**

**Description**

`request`

`[GetEntityTypeRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.GetEntityTypeRequest)`  

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

`[EntityType](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.EntityType)`

The response received from the server.

### GetEntityTypeAsync(GetEntityTypeRequest, CallOptions)

```
public virtual AsyncUnaryCall<EntityType> GetEntityTypeAsync(GetEntityTypeRequest request, CallOptions options)
```

Gets details of a single EntityType.

**Parameters**

**Name**

**Description**

`request`

`[GetEntityTypeRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.GetEntityTypeRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[EntityType](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.EntityType)>`

The call object.

### GetEntityTypeAsync(GetEntityTypeRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<EntityType> GetEntityTypeAsync(GetEntityTypeRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Gets details of a single EntityType.

**Parameters**

**Name**

**Description**

`request`

`[GetEntityTypeRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.GetEntityTypeRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[EntityType](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.EntityType)>`

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

`[GetFeatureRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.GetFeatureRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Feature](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.Feature)`

The response received from the server.

### GetFeature(GetFeatureRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual Feature GetFeature(GetFeatureRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Gets details of a single Feature.

**Parameters**

**Name**

**Description**

`request`

`[GetFeatureRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.GetFeatureRequest)`  

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

`[Feature](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.Feature)`

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

`[GetFeatureRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.GetFeatureRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Feature](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.Feature)>`

The call object.

### GetFeatureAsync(GetFeatureRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<Feature> GetFeatureAsync(GetFeatureRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Gets details of a single Feature.

**Parameters**

**Name**

**Description**

`request`

`[GetFeatureRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.GetFeatureRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Feature](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.Feature)>`

The call object.

### GetFeaturestore(GetFeaturestoreRequest, CallOptions)

```
public virtual Featurestore GetFeaturestore(GetFeaturestoreRequest request, CallOptions options)
```

Gets details of a single Featurestore.

**Parameters**

**Name**

**Description**

`request`

`[GetFeaturestoreRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.GetFeaturestoreRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Featurestore](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.Featurestore)`

The response received from the server.

### GetFeaturestore(GetFeaturestoreRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual Featurestore GetFeaturestore(GetFeaturestoreRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Gets details of a single Featurestore.

**Parameters**

**Name**

**Description**

`request`

`[GetFeaturestoreRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.GetFeaturestoreRequest)`  

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

`[Featurestore](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.Featurestore)`

The response received from the server.

### GetFeaturestoreAsync(GetFeaturestoreRequest, CallOptions)

```
public virtual AsyncUnaryCall<Featurestore> GetFeaturestoreAsync(GetFeaturestoreRequest request, CallOptions options)
```

Gets details of a single Featurestore.

**Parameters**

**Name**

**Description**

`request`

`[GetFeaturestoreRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.GetFeaturestoreRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Featurestore](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.Featurestore)>`

The call object.

### GetFeaturestoreAsync(GetFeaturestoreRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<Featurestore> GetFeaturestoreAsync(GetFeaturestoreRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Gets details of a single Featurestore.

**Parameters**

**Name**

**Description**

`request`

`[GetFeaturestoreRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.GetFeaturestoreRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Featurestore](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.Featurestore)>`

The call object.

### ImportFeatureValues(ImportFeatureValuesRequest, CallOptions)

```
public virtual Operation ImportFeatureValues(ImportFeatureValuesRequest request, CallOptions options)
```

Imports Feature values into the Featurestore from a source storage.

The progress of the import is tracked by the returned operation. The imported features are guaranteed to be visible to subsequent read operations after the operation is marked as successfully done.

If an import operation fails, the Feature values returned from reads and exports may be inconsistent. If consistency is required, the caller must retry the same import request again and wait till the new operation returned is marked as successfully done.

There are also scenarios where the caller can cause inconsistency.

-   Source data for import contains multiple distinct Feature values for the same entity ID and timestamp.
-   Source is modified during an import. This includes adding, updating, or removing source data and/or metadata. Examples of updating metadata include but are not limited to changing storage location, storage class, or retention policy.
-   Online serving cluster is under-provisioned.

**Parameters**

**Name**

**Description**

`request`

`[ImportFeatureValuesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.ImportFeatureValuesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)`

The response received from the server.

### ImportFeatureValues(ImportFeatureValuesRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual Operation ImportFeatureValues(ImportFeatureValuesRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Imports Feature values into the Featurestore from a source storage.

The progress of the import is tracked by the returned operation. The imported features are guaranteed to be visible to subsequent read operations after the operation is marked as successfully done.

If an import operation fails, the Feature values returned from reads and exports may be inconsistent. If consistency is required, the caller must retry the same import request again and wait till the new operation returned is marked as successfully done.

There are also scenarios where the caller can cause inconsistency.

-   Source data for import contains multiple distinct Feature values for the same entity ID and timestamp.
-   Source is modified during an import. This includes adding, updating, or removing source data and/or metadata. Examples of updating metadata include but are not limited to changing storage location, storage class, or retention policy.
-   Online serving cluster is under-provisioned.

**Parameters**

**Name**

**Description**

`request`

`[ImportFeatureValuesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.ImportFeatureValuesRequest)`  

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

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)`

The response received from the server.

### ImportFeatureValuesAsync(ImportFeatureValuesRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> ImportFeatureValuesAsync(ImportFeatureValuesRequest request, CallOptions options)
```

Imports Feature values into the Featurestore from a source storage.

The progress of the import is tracked by the returned operation. The imported features are guaranteed to be visible to subsequent read operations after the operation is marked as successfully done.

If an import operation fails, the Feature values returned from reads and exports may be inconsistent. If consistency is required, the caller must retry the same import request again and wait till the new operation returned is marked as successfully done.

There are also scenarios where the caller can cause inconsistency.

-   Source data for import contains multiple distinct Feature values for the same entity ID and timestamp.
-   Source is modified during an import. This includes adding, updating, or removing source data and/or metadata. Examples of updating metadata include but are not limited to changing storage location, storage class, or retention policy.
-   Online serving cluster is under-provisioned.

**Parameters**

**Name**

**Description**

`request`

`[ImportFeatureValuesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.ImportFeatureValuesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The call object.

### ImportFeatureValuesAsync(ImportFeatureValuesRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> ImportFeatureValuesAsync(ImportFeatureValuesRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Imports Feature values into the Featurestore from a source storage.

The progress of the import is tracked by the returned operation. The imported features are guaranteed to be visible to subsequent read operations after the operation is marked as successfully done.

If an import operation fails, the Feature values returned from reads and exports may be inconsistent. If consistency is required, the caller must retry the same import request again and wait till the new operation returned is marked as successfully done.

There are also scenarios where the caller can cause inconsistency.

-   Source data for import contains multiple distinct Feature values for the same entity ID and timestamp.
-   Source is modified during an import. This includes adding, updating, or removing source data and/or metadata. Examples of updating metadata include but are not limited to changing storage location, storage class, or retention policy.
-   Online serving cluster is under-provisioned.

**Parameters**

**Name**

**Description**

`request`

`[ImportFeatureValuesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.ImportFeatureValuesRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The call object.

### ListEntityTypes(ListEntityTypesRequest, CallOptions)

```
public virtual ListEntityTypesResponse ListEntityTypes(ListEntityTypesRequest request, CallOptions options)
```

Lists EntityTypes in a given Featurestore.

**Parameters**

**Name**

**Description**

`request`

`[ListEntityTypesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.ListEntityTypesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[ListEntityTypesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.ListEntityTypesResponse)`

The response received from the server.

### ListEntityTypes(ListEntityTypesRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual ListEntityTypesResponse ListEntityTypes(ListEntityTypesRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Lists EntityTypes in a given Featurestore.

**Parameters**

**Name**

**Description**

`request`

`[ListEntityTypesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.ListEntityTypesRequest)`  

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

`[ListEntityTypesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.ListEntityTypesResponse)`

The response received from the server.

### ListEntityTypesAsync(ListEntityTypesRequest, CallOptions)

```
public virtual AsyncUnaryCall<ListEntityTypesResponse> ListEntityTypesAsync(ListEntityTypesRequest request, CallOptions options)
```

Lists EntityTypes in a given Featurestore.

**Parameters**

**Name**

**Description**

`request`

`[ListEntityTypesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.ListEntityTypesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[ListEntityTypesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.ListEntityTypesResponse)>`

The call object.

### ListEntityTypesAsync(ListEntityTypesRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<ListEntityTypesResponse> ListEntityTypesAsync(ListEntityTypesRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Lists EntityTypes in a given Featurestore.

**Parameters**

**Name**

**Description**

`request`

`[ListEntityTypesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.ListEntityTypesRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[ListEntityTypesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.ListEntityTypesResponse)>`

The call object.

### ListFeatures(ListFeaturesRequest, CallOptions)

```
public virtual ListFeaturesResponse ListFeatures(ListFeaturesRequest request, CallOptions options)
```

Lists Features in a given EntityType.

**Parameters**

**Name**

**Description**

`request`

`[ListFeaturesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.ListFeaturesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[ListFeaturesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.ListFeaturesResponse)`

The response received from the server.

### ListFeatures(ListFeaturesRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual ListFeaturesResponse ListFeatures(ListFeaturesRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Lists Features in a given EntityType.

**Parameters**

**Name**

**Description**

`request`

`[ListFeaturesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.ListFeaturesRequest)`  

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

`[ListFeaturesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.ListFeaturesResponse)`

The response received from the server.

### ListFeaturesAsync(ListFeaturesRequest, CallOptions)

```
public virtual AsyncUnaryCall<ListFeaturesResponse> ListFeaturesAsync(ListFeaturesRequest request, CallOptions options)
```

Lists Features in a given EntityType.

**Parameters**

**Name**

**Description**

`request`

`[ListFeaturesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.ListFeaturesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[ListFeaturesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.ListFeaturesResponse)>`

The call object.

### ListFeaturesAsync(ListFeaturesRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<ListFeaturesResponse> ListFeaturesAsync(ListFeaturesRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Lists Features in a given EntityType.

**Parameters**

**Name**

**Description**

`request`

`[ListFeaturesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.ListFeaturesRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[ListFeaturesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.ListFeaturesResponse)>`

The call object.

### ListFeaturestores(ListFeaturestoresRequest, CallOptions)

```
public virtual ListFeaturestoresResponse ListFeaturestores(ListFeaturestoresRequest request, CallOptions options)
```

Lists Featurestores in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[ListFeaturestoresRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.ListFeaturestoresRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[ListFeaturestoresResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.ListFeaturestoresResponse)`

The response received from the server.

### ListFeaturestores(ListFeaturestoresRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual ListFeaturestoresResponse ListFeaturestores(ListFeaturestoresRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Lists Featurestores in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[ListFeaturestoresRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.ListFeaturestoresRequest)`  

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

`[ListFeaturestoresResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.ListFeaturestoresResponse)`

The response received from the server.

### ListFeaturestoresAsync(ListFeaturestoresRequest, CallOptions)

```
public virtual AsyncUnaryCall<ListFeaturestoresResponse> ListFeaturestoresAsync(ListFeaturestoresRequest request, CallOptions options)
```

Lists Featurestores in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[ListFeaturestoresRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.ListFeaturestoresRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[ListFeaturestoresResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.ListFeaturestoresResponse)>`

The call object.

### ListFeaturestoresAsync(ListFeaturestoresRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<ListFeaturestoresResponse> ListFeaturestoresAsync(ListFeaturestoresRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Lists Featurestores in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[ListFeaturestoresRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.ListFeaturestoresRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[ListFeaturestoresResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.ListFeaturestoresResponse)>`

The call object.

### NewInstance(ClientBase.ClientBaseConfiguration)

```
protected override FeaturestoreService.FeaturestoreServiceClient NewInstance(ClientBase.ClientBaseConfiguration configuration)
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

`[FeaturestoreService.FeaturestoreServiceClient](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.FeaturestoreService.FeaturestoreServiceClient)`

**Overrides**

Grpc.Core.ClientBase<Google.Cloud.AIPlatform.V1.FeaturestoreService.FeaturestoreServiceClient>.NewInstance(Grpc.Core.ClientBase.ClientBaseConfiguration)

### SearchFeatures(SearchFeaturesRequest, CallOptions)

```
public virtual SearchFeaturesResponse SearchFeatures(SearchFeaturesRequest request, CallOptions options)
```

Searches Features matching a query in a given project.

**Parameters**

**Name**

**Description**

`request`

`[SearchFeaturesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.SearchFeaturesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[SearchFeaturesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.SearchFeaturesResponse)`

The response received from the server.

### SearchFeatures(SearchFeaturesRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual SearchFeaturesResponse SearchFeatures(SearchFeaturesRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Searches Features matching a query in a given project.

**Parameters**

**Name**

**Description**

`request`

`[SearchFeaturesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.SearchFeaturesRequest)`  

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

`[SearchFeaturesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.SearchFeaturesResponse)`

The response received from the server.

### SearchFeaturesAsync(SearchFeaturesRequest, CallOptions)

```
public virtual AsyncUnaryCall<SearchFeaturesResponse> SearchFeaturesAsync(SearchFeaturesRequest request, CallOptions options)
```

Searches Features matching a query in a given project.

**Parameters**

**Name**

**Description**

`request`

`[SearchFeaturesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.SearchFeaturesRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[SearchFeaturesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.SearchFeaturesResponse)>`

The call object.

### SearchFeaturesAsync(SearchFeaturesRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<SearchFeaturesResponse> SearchFeaturesAsync(SearchFeaturesRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Searches Features matching a query in a given project.

**Parameters**

**Name**

**Description**

`request`

`[SearchFeaturesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.SearchFeaturesRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[SearchFeaturesResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.SearchFeaturesResponse)>`

The call object.

### UpdateEntityType(UpdateEntityTypeRequest, CallOptions)

```
public virtual EntityType UpdateEntityType(UpdateEntityTypeRequest request, CallOptions options)
```

Updates the parameters of a single EntityType.

**Parameters**

**Name**

**Description**

`request`

`[UpdateEntityTypeRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.UpdateEntityTypeRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[EntityType](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.EntityType)`

The response received from the server.

### UpdateEntityType(UpdateEntityTypeRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual EntityType UpdateEntityType(UpdateEntityTypeRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Updates the parameters of a single EntityType.

**Parameters**

**Name**

**Description**

`request`

`[UpdateEntityTypeRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.UpdateEntityTypeRequest)`  

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

`[EntityType](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.EntityType)`

The response received from the server.

### UpdateEntityTypeAsync(UpdateEntityTypeRequest, CallOptions)

```
public virtual AsyncUnaryCall<EntityType> UpdateEntityTypeAsync(UpdateEntityTypeRequest request, CallOptions options)
```

Updates the parameters of a single EntityType.

**Parameters**

**Name**

**Description**

`request`

`[UpdateEntityTypeRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.UpdateEntityTypeRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[EntityType](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.EntityType)>`

The call object.

### UpdateEntityTypeAsync(UpdateEntityTypeRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<EntityType> UpdateEntityTypeAsync(UpdateEntityTypeRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Updates the parameters of a single EntityType.

**Parameters**

**Name**

**Description**

`request`

`[UpdateEntityTypeRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.UpdateEntityTypeRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[EntityType](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.EntityType)>`

The call object.

### UpdateFeature(UpdateFeatureRequest, CallOptions)

```
public virtual Feature UpdateFeature(UpdateFeatureRequest request, CallOptions options)
```

Updates the parameters of a single Feature.

**Parameters**

**Name**

**Description**

`request`

`[UpdateFeatureRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.UpdateFeatureRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Feature](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.Feature)`

The response received from the server.

### UpdateFeature(UpdateFeatureRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual Feature UpdateFeature(UpdateFeatureRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Updates the parameters of a single Feature.

**Parameters**

**Name**

**Description**

`request`

`[UpdateFeatureRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.UpdateFeatureRequest)`  

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

`[Feature](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.Feature)`

The response received from the server.

### UpdateFeatureAsync(UpdateFeatureRequest, CallOptions)

```
public virtual AsyncUnaryCall<Feature> UpdateFeatureAsync(UpdateFeatureRequest request, CallOptions options)
```

Updates the parameters of a single Feature.

**Parameters**

**Name**

**Description**

`request`

`[UpdateFeatureRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.UpdateFeatureRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Feature](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.Feature)>`

The call object.

### UpdateFeatureAsync(UpdateFeatureRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<Feature> UpdateFeatureAsync(UpdateFeatureRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Updates the parameters of a single Feature.

**Parameters**

**Name**

**Description**

`request`

`[UpdateFeatureRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.UpdateFeatureRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Feature](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.Feature)>`

The call object.

### UpdateFeaturestore(UpdateFeaturestoreRequest, CallOptions)

```
public virtual Operation UpdateFeaturestore(UpdateFeaturestoreRequest request, CallOptions options)
```

Updates the parameters of a single Featurestore.

**Parameters**

**Name**

**Description**

`request`

`[UpdateFeaturestoreRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.UpdateFeaturestoreRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)`

The response received from the server.

### UpdateFeaturestore(UpdateFeaturestoreRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual Operation UpdateFeaturestore(UpdateFeaturestoreRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Updates the parameters of a single Featurestore.

**Parameters**

**Name**

**Description**

`request`

`[UpdateFeaturestoreRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.UpdateFeaturestoreRequest)`  

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

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)`

The response received from the server.

### UpdateFeaturestoreAsync(UpdateFeaturestoreRequest, CallOptions)

```
public virtual AsyncUnaryCall<Operation> UpdateFeaturestoreAsync(UpdateFeaturestoreRequest request, CallOptions options)
```

Updates the parameters of a single Featurestore.

**Parameters**

**Name**

**Description**

`request`

`[UpdateFeaturestoreRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.UpdateFeaturestoreRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The call object.

### UpdateFeaturestoreAsync(UpdateFeaturestoreRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<Operation> UpdateFeaturestoreAsync(UpdateFeaturestoreRequest request, Metadata headers = null, DateTime? deadline = default(DateTime? ), CancellationToken cancellationToken = default(CancellationToken))
```

Updates the parameters of a single Featurestore.

**Parameters**

**Name**

**Description**

`request`

`[UpdateFeaturestoreRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/1.6.0/Google.Cloud.AIPlatform.V1.UpdateFeaturestoreRequest)`  

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

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation.html)>`

The call object.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
