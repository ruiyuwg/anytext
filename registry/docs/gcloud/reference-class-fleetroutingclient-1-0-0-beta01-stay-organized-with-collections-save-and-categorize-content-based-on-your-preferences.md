-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class FleetRoutingClient (1.0.0-beta01) Stay organized with collections Save and categorize content based on your preferences.

Version 1.0.0-beta01keyboard\_arrow\_down

-   [2.7.0 (latest)](/dotnet/docs/reference/Google.Cloud.Optimization.V1/latest/Google.Cloud.Optimization.V1.FleetRoutingClient)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Optimization.V1/2.6.0/Google.Cloud.Optimization.V1.FleetRoutingClient)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Optimization.V1/2.5.0/Google.Cloud.Optimization.V1.FleetRoutingClient)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Optimization.V1/2.4.0/Google.Cloud.Optimization.V1.FleetRoutingClient)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Optimization.V1/2.3.0/Google.Cloud.Optimization.V1.FleetRoutingClient)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Optimization.V1/2.2.0/Google.Cloud.Optimization.V1.FleetRoutingClient)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Optimization.V1/2.1.0/Google.Cloud.Optimization.V1.FleetRoutingClient)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Optimization.V1/2.0.0/Google.Cloud.Optimization.V1.FleetRoutingClient)
-   [1.0.0-beta01](/dotnet/docs/reference/Google.Cloud.Optimization.V1/1.0.0-beta01/Google.Cloud.Optimization.V1.FleetRoutingClient)

```
public abstract class FleetRoutingClient
```

FleetRouting client wrapper, for convenient use.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> FleetRoutingClient

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Derived Types

[FleetRoutingClientImpl](/dotnet/docs/reference/Google.Cloud.Optimization.V1/1.0.0-beta01/Google.Cloud.Optimization.V1.FleetRoutingClientImpl)

## Namespace

[Google.Cloud.Optimization.V1](/dotnet/docs/reference/Google.Cloud.Optimization.V1/1.0.0-beta01/Google.Cloud.Optimization.V1)

## Assembly

Google.Cloud.Optimization.V1.dll

## Remarks

A service for optimizing vehicle tours.

Validity of certain types of fields:

-   `google.protobuf.Timestamp`
-   Times are in Unix time: seconds since 1970-01-01T00:00:00+00:00.
-   seconds must be in \[0, 253402300799\], i.e. in \[1970-01-01T00:00:00+00:00, 9999-12-31T23:59:59+00:00\].
-   nanos must be unset or set to 0.
-   `google.protobuf.Duration`
-   seconds must be in \[0, 253402300799\], i.e. in \[1970-01-01T00:00:00+00:00, 9999-12-31T23:59:59+00:00\].
-   nanos must be unset or set to 0.
-   `google.type.LatLng`
-   latitude must be in \[-90.0, 90.0\].
-   longitude must be in \[-180.0, 180.0\].
-   at least one of latitude and longitude must be non-zero.

## Properties

### BatchOptimizeToursOperationsClient

```
public virtual OperationsClient BatchOptimizeToursOperationsClient { get; }
```

The long-running operations client for `BatchOptimizeTours`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

### DefaultEndpoint

```
public static string DefaultEndpoint { get; }
```

The default endpoint for the FleetRouting service, which is a host of "cloudoptimization.googleapis.com" and a port of 443.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### DefaultScopes

```
public static IReadOnlyList<string> DefaultScopes { get; }
```

The default FleetRouting scopes.

**Property Value**

**Type**

**Description**

`[IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)<[String](https://learn.microsoft.com/dotnet/api/system.string)>`

**Remarks**

The default FleetRouting scopes are:

-   [https://www.googleapis.com/auth/cloud-platform](https://www.googleapis.com/auth/cloud-platform)

### GrpcClient

```
public virtual FleetRouting.FleetRoutingClient GrpcClient { get; }
```

The underlying gRPC FleetRouting client

**Property Value**

**Type**

**Description**

`[FleetRouting.FleetRoutingClient](/dotnet/docs/reference/Google.Cloud.Optimization.V1/1.0.0-beta01/Google.Cloud.Optimization.V1.FleetRouting.FleetRoutingClient)`

## Methods

### BatchOptimizeTours(BatchOptimizeToursRequest, CallSettings)

```
public virtual Operation<BatchOptimizeToursResponse, AsyncModelMetadata> BatchOptimizeTours(BatchOptimizeToursRequest request, CallSettings callSettings = null)
```

Optimizes vehicle tours for one or more `OptimizeToursRequest` messages as a batch.

This method is a Long Running Operation (LRO). The inputs for optimization (`OptimizeToursRequest` messages) and outputs (`OptimizeToursResponse` messages) are read/written from/to Cloud Storage in user-specified format. Like the `OptimizeTours` method, each `OptimizeToursRequest` contains a `ShipmentModel` and returns an `OptimizeToursResponse` containing `ShipmentRoute`s, which are a set of routes to be performed by vehicles minimizing the overall cost.

**Parameters**

**Name**

**Description**

`request`

`[BatchOptimizeToursRequest](/dotnet/docs/reference/Google.Cloud.Optimization.V1/1.0.0-beta01/Google.Cloud.Optimization.V1.BatchOptimizeToursRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[BatchOptimizeToursResponse](/dotnet/docs/reference/Google.Cloud.Optimization.V1/1.0.0-beta01/Google.Cloud.Optimization.V1.BatchOptimizeToursResponse), [AsyncModelMetadata](/dotnet/docs/reference/Google.Cloud.Optimization.V1/1.0.0-beta01/Google.Cloud.Optimization.V1.AsyncModelMetadata)>`

The RPC response.

**Example**

```
// Create client
FleetRoutingClient fleetRoutingClient = FleetRoutingClient.Create();
// Initialize request argument(s)
BatchOptimizeToursRequest request = new BatchOptimizeToursRequest
{
    Parent = "",
    ModelConfigs =
    {
        new BatchOptimizeToursRequest.Types.AsyncModelConfig(),
    },
};
// Make the request
Operation<BatchOptimizeToursResponse, AsyncModelMetadata> response = fleetRoutingClient.BatchOptimizeTours(request);

// Poll until the returned long-running operation is complete
Operation<BatchOptimizeToursResponse, AsyncModelMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
BatchOptimizeToursResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<BatchOptimizeToursResponse, AsyncModelMetadata> retrievedResponse = fleetRoutingClient.PollOnceBatchOptimizeTours(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    BatchOptimizeToursResponse retrievedResult = retrievedResponse.Result;
}
```

### BatchOptimizeToursAsync(BatchOptimizeToursRequest, CallSettings)

```
public virtual Task<Operation<BatchOptimizeToursResponse, AsyncModelMetadata>> BatchOptimizeToursAsync(BatchOptimizeToursRequest request, CallSettings callSettings = null)
```

Optimizes vehicle tours for one or more `OptimizeToursRequest` messages as a batch.

This method is a Long Running Operation (LRO). The inputs for optimization (`OptimizeToursRequest` messages) and outputs (`OptimizeToursResponse` messages) are read/written from/to Cloud Storage in user-specified format. Like the `OptimizeTours` method, each `OptimizeToursRequest` contains a `ShipmentModel` and returns an `OptimizeToursResponse` containing `ShipmentRoute`s, which are a set of routes to be performed by vehicles minimizing the overall cost.

**Parameters**

**Name**

**Description**

`request`

`[BatchOptimizeToursRequest](/dotnet/docs/reference/Google.Cloud.Optimization.V1/1.0.0-beta01/Google.Cloud.Optimization.V1.BatchOptimizeToursRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[BatchOptimizeToursResponse](/dotnet/docs/reference/Google.Cloud.Optimization.V1/1.0.0-beta01/Google.Cloud.Optimization.V1.BatchOptimizeToursResponse), [AsyncModelMetadata](/dotnet/docs/reference/Google.Cloud.Optimization.V1/1.0.0-beta01/Google.Cloud.Optimization.V1.AsyncModelMetadata)>>`

A Task containing the RPC response.

**Example**

```
// Create client
FleetRoutingClient fleetRoutingClient = await FleetRoutingClient.CreateAsync();
// Initialize request argument(s)
BatchOptimizeToursRequest request = new BatchOptimizeToursRequest
{
    Parent = "",
    ModelConfigs =
    {
        new BatchOptimizeToursRequest.Types.AsyncModelConfig(),
    },
};
// Make the request
Operation<BatchOptimizeToursResponse, AsyncModelMetadata> response = await fleetRoutingClient.BatchOptimizeToursAsync(request);

// Poll until the returned long-running operation is complete
Operation<BatchOptimizeToursResponse, AsyncModelMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
BatchOptimizeToursResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<BatchOptimizeToursResponse, AsyncModelMetadata> retrievedResponse = await fleetRoutingClient.PollOnceBatchOptimizeToursAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    BatchOptimizeToursResponse retrievedResult = retrievedResponse.Result;
}
```

### BatchOptimizeToursAsync(BatchOptimizeToursRequest, CancellationToken)

```
public virtual Task<Operation<BatchOptimizeToursResponse, AsyncModelMetadata>> BatchOptimizeToursAsync(BatchOptimizeToursRequest request, CancellationToken cancellationToken)
```

Optimizes vehicle tours for one or more `OptimizeToursRequest` messages as a batch.

This method is a Long Running Operation (LRO). The inputs for optimization (`OptimizeToursRequest` messages) and outputs (`OptimizeToursResponse` messages) are read/written from/to Cloud Storage in user-specified format. Like the `OptimizeTours` method, each `OptimizeToursRequest` contains a `ShipmentModel` and returns an `OptimizeToursResponse` containing `ShipmentRoute`s, which are a set of routes to be performed by vehicles minimizing the overall cost.

**Parameters**

**Name**

**Description**

`request`

`[BatchOptimizeToursRequest](/dotnet/docs/reference/Google.Cloud.Optimization.V1/1.0.0-beta01/Google.Cloud.Optimization.V1.BatchOptimizeToursRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[BatchOptimizeToursResponse](/dotnet/docs/reference/Google.Cloud.Optimization.V1/1.0.0-beta01/Google.Cloud.Optimization.V1.BatchOptimizeToursResponse), [AsyncModelMetadata](/dotnet/docs/reference/Google.Cloud.Optimization.V1/1.0.0-beta01/Google.Cloud.Optimization.V1.AsyncModelMetadata)>>`

A Task containing the RPC response.

**Example**

```
// Create client
FleetRoutingClient fleetRoutingClient = await FleetRoutingClient.CreateAsync();
// Initialize request argument(s)
BatchOptimizeToursRequest request = new BatchOptimizeToursRequest
{
    Parent = "",
    ModelConfigs =
    {
        new BatchOptimizeToursRequest.Types.AsyncModelConfig(),
    },
};
// Make the request
Operation<BatchOptimizeToursResponse, AsyncModelMetadata> response = await fleetRoutingClient.BatchOptimizeToursAsync(request);

// Poll until the returned long-running operation is complete
Operation<BatchOptimizeToursResponse, AsyncModelMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
BatchOptimizeToursResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<BatchOptimizeToursResponse, AsyncModelMetadata> retrievedResponse = await fleetRoutingClient.PollOnceBatchOptimizeToursAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    BatchOptimizeToursResponse retrievedResult = retrievedResponse.Result;
}
```

### Create()

```
public static FleetRoutingClient Create()
```

Synchronously creates a [FleetRoutingClient](/dotnet/docs/reference/Google.Cloud.Optimization.V1/1.0.0-beta01/Google.Cloud.Optimization.V1.FleetRoutingClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [FleetRoutingClientBuilder](/dotnet/docs/reference/Google.Cloud.Optimization.V1/1.0.0-beta01/Google.Cloud.Optimization.V1.FleetRoutingClientBuilder).

**Returns**

**Type**

**Description**

`[FleetRoutingClient](/dotnet/docs/reference/Google.Cloud.Optimization.V1/1.0.0-beta01/Google.Cloud.Optimization.V1.FleetRoutingClient)`

The created [FleetRoutingClient](/dotnet/docs/reference/Google.Cloud.Optimization.V1/1.0.0-beta01/Google.Cloud.Optimization.V1.FleetRoutingClient).

### CreateAsync(CancellationToken)

```
public static Task<FleetRoutingClient> CreateAsync(CancellationToken cancellationToken = default(CancellationToken))
```

Asynchronously creates a [FleetRoutingClient](/dotnet/docs/reference/Google.Cloud.Optimization.V1/1.0.0-beta01/Google.Cloud.Optimization.V1.FleetRoutingClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [FleetRoutingClientBuilder](/dotnet/docs/reference/Google.Cloud.Optimization.V1/1.0.0-beta01/Google.Cloud.Optimization.V1.FleetRoutingClientBuilder).

**Parameter**

**Name**

**Description**

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

The [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use while creating the client.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[FleetRoutingClient](/dotnet/docs/reference/Google.Cloud.Optimization.V1/1.0.0-beta01/Google.Cloud.Optimization.V1.FleetRoutingClient)>`

The task representing the created [FleetRoutingClient](/dotnet/docs/reference/Google.Cloud.Optimization.V1/1.0.0-beta01/Google.Cloud.Optimization.V1.FleetRoutingClient).

### OptimizeTours(OptimizeToursRequest, CallSettings)

```
public virtual OptimizeToursResponse OptimizeTours(OptimizeToursRequest request, CallSettings callSettings = null)
```

Sends an `OptimizeToursRequest` containing a `ShipmentModel` and returns an `OptimizeToursResponse` containing `ShipmentRoute`s, which are a set of routes to be performed by vehicles minimizing the overall cost.

A `ShipmentModel` model consists mainly of `Shipment`s that need to be carried out and `Vehicle`s that can be used to transport the `Shipment`s. The `ShipmentRoute`s assign `Shipment`s to `Vehicle`s. More specifically, they assign a series of `Visit`s to each vehicle, where a `Visit` corresponds to a `VisitRequest`, which is a pickup or delivery for a `Shipment`.

The goal is to provide an assignment of `ShipmentRoute`s to `Vehicle`s that minimizes the total cost where cost has many components defined in the `ShipmentModel`.

**Parameters**

**Name**

**Description**

`request`

`[OptimizeToursRequest](/dotnet/docs/reference/Google.Cloud.Optimization.V1/1.0.0-beta01/Google.Cloud.Optimization.V1.OptimizeToursRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[OptimizeToursResponse](/dotnet/docs/reference/Google.Cloud.Optimization.V1/1.0.0-beta01/Google.Cloud.Optimization.V1.OptimizeToursResponse)`

The RPC response.

**Example**

```
// Create client
FleetRoutingClient fleetRoutingClient = FleetRoutingClient.Create();
// Initialize request argument(s)
OptimizeToursRequest request = new OptimizeToursRequest
{
    Parent = "",
    Timeout = new Duration(),
    Model = new ShipmentModel(),
    SolvingMode = OptimizeToursRequest.Types.SolvingMode.DefaultSolve,
    MaxValidationErrors = 0,
    SearchMode = OptimizeToursRequest.Types.SearchMode.Unspecified,
    InjectedFirstSolutionRoutes =
    {
        new ShipmentRoute(),
    },
    InjectedSolutionConstraint = new InjectedSolutionConstraint(),
    RefreshDetailsRoutes =
    {
        new ShipmentRoute(),
    },
    InterpretInjectedSolutionsUsingLabels = false,
    ConsiderRoadTraffic = false,
    PopulatePolylines = false,
    PopulateTransitionPolylines = false,
    AllowLargeDeadlineDespiteInterruptionRisk = false,
    UseGeodesicDistances = false,
    GeodesicMetersPerSecond = 0,
    Label = "",
};
// Make the request
OptimizeToursResponse response = fleetRoutingClient.OptimizeTours(request);
```

### OptimizeToursAsync(OptimizeToursRequest, CallSettings)

```
public virtual Task<OptimizeToursResponse> OptimizeToursAsync(OptimizeToursRequest request, CallSettings callSettings = null)
```

Sends an `OptimizeToursRequest` containing a `ShipmentModel` and returns an `OptimizeToursResponse` containing `ShipmentRoute`s, which are a set of routes to be performed by vehicles minimizing the overall cost.

A `ShipmentModel` model consists mainly of `Shipment`s that need to be carried out and `Vehicle`s that can be used to transport the `Shipment`s. The `ShipmentRoute`s assign `Shipment`s to `Vehicle`s. More specifically, they assign a series of `Visit`s to each vehicle, where a `Visit` corresponds to a `VisitRequest`, which is a pickup or delivery for a `Shipment`.

The goal is to provide an assignment of `ShipmentRoute`s to `Vehicle`s that minimizes the total cost where cost has many components defined in the `ShipmentModel`.

**Parameters**

**Name**

**Description**

`request`

`[OptimizeToursRequest](/dotnet/docs/reference/Google.Cloud.Optimization.V1/1.0.0-beta01/Google.Cloud.Optimization.V1.OptimizeToursRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[OptimizeToursResponse](/dotnet/docs/reference/Google.Cloud.Optimization.V1/1.0.0-beta01/Google.Cloud.Optimization.V1.OptimizeToursResponse)>`

A Task containing the RPC response.

**Example**

```
// Create client
FleetRoutingClient fleetRoutingClient = await FleetRoutingClient.CreateAsync();
// Initialize request argument(s)
OptimizeToursRequest request = new OptimizeToursRequest
{
    Parent = "",
    Timeout = new Duration(),
    Model = new ShipmentModel(),
    SolvingMode = OptimizeToursRequest.Types.SolvingMode.DefaultSolve,
    MaxValidationErrors = 0,
    SearchMode = OptimizeToursRequest.Types.SearchMode.Unspecified,
    InjectedFirstSolutionRoutes =
    {
        new ShipmentRoute(),
    },
    InjectedSolutionConstraint = new InjectedSolutionConstraint(),
    RefreshDetailsRoutes =
    {
        new ShipmentRoute(),
    },
    InterpretInjectedSolutionsUsingLabels = false,
    ConsiderRoadTraffic = false,
    PopulatePolylines = false,
    PopulateTransitionPolylines = false,
    AllowLargeDeadlineDespiteInterruptionRisk = false,
    UseGeodesicDistances = false,
    GeodesicMetersPerSecond = 0,
    Label = "",
};
// Make the request
OptimizeToursResponse response = await fleetRoutingClient.OptimizeToursAsync(request);
```

### OptimizeToursAsync(OptimizeToursRequest, CancellationToken)

```
public virtual Task<OptimizeToursResponse> OptimizeToursAsync(OptimizeToursRequest request, CancellationToken cancellationToken)
```

Sends an `OptimizeToursRequest` containing a `ShipmentModel` and returns an `OptimizeToursResponse` containing `ShipmentRoute`s, which are a set of routes to be performed by vehicles minimizing the overall cost.

A `ShipmentModel` model consists mainly of `Shipment`s that need to be carried out and `Vehicle`s that can be used to transport the `Shipment`s. The `ShipmentRoute`s assign `Shipment`s to `Vehicle`s. More specifically, they assign a series of `Visit`s to each vehicle, where a `Visit` corresponds to a `VisitRequest`, which is a pickup or delivery for a `Shipment`.

The goal is to provide an assignment of `ShipmentRoute`s to `Vehicle`s that minimizes the total cost where cost has many components defined in the `ShipmentModel`.

**Parameters**

**Name**

**Description**

`request`

`[OptimizeToursRequest](/dotnet/docs/reference/Google.Cloud.Optimization.V1/1.0.0-beta01/Google.Cloud.Optimization.V1.OptimizeToursRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[OptimizeToursResponse](/dotnet/docs/reference/Google.Cloud.Optimization.V1/1.0.0-beta01/Google.Cloud.Optimization.V1.OptimizeToursResponse)>`

A Task containing the RPC response.

**Example**

```
// Create client
FleetRoutingClient fleetRoutingClient = await FleetRoutingClient.CreateAsync();
// Initialize request argument(s)
OptimizeToursRequest request = new OptimizeToursRequest
{
    Parent = "",
    Timeout = new Duration(),
    Model = new ShipmentModel(),
    SolvingMode = OptimizeToursRequest.Types.SolvingMode.DefaultSolve,
    MaxValidationErrors = 0,
    SearchMode = OptimizeToursRequest.Types.SearchMode.Unspecified,
    InjectedFirstSolutionRoutes =
    {
        new ShipmentRoute(),
    },
    InjectedSolutionConstraint = new InjectedSolutionConstraint(),
    RefreshDetailsRoutes =
    {
        new ShipmentRoute(),
    },
    InterpretInjectedSolutionsUsingLabels = false,
    ConsiderRoadTraffic = false,
    PopulatePolylines = false,
    PopulateTransitionPolylines = false,
    AllowLargeDeadlineDespiteInterruptionRisk = false,
    UseGeodesicDistances = false,
    GeodesicMetersPerSecond = 0,
    Label = "",
};
// Make the request
OptimizeToursResponse response = await fleetRoutingClient.OptimizeToursAsync(request);
```

### PollOnceBatchOptimizeTours(String, CallSettings)

```
public virtual Operation<BatchOptimizeToursResponse, AsyncModelMetadata> PollOnceBatchOptimizeTours(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `BatchOptimizeTours` .

**Parameters**

**Name**

**Description**

`operationName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[BatchOptimizeToursResponse](/dotnet/docs/reference/Google.Cloud.Optimization.V1/1.0.0-beta01/Google.Cloud.Optimization.V1.BatchOptimizeToursResponse), [AsyncModelMetadata](/dotnet/docs/reference/Google.Cloud.Optimization.V1/1.0.0-beta01/Google.Cloud.Optimization.V1.AsyncModelMetadata)>`

The result of polling the operation.

### PollOnceBatchOptimizeToursAsync(String, CallSettings)

```
public virtual Task<Operation<BatchOptimizeToursResponse, AsyncModelMetadata>> PollOnceBatchOptimizeToursAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `BatchOptimizeTours`.

**Parameters**

**Name**

**Description**

`operationName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[BatchOptimizeToursResponse](/dotnet/docs/reference/Google.Cloud.Optimization.V1/1.0.0-beta01/Google.Cloud.Optimization.V1.BatchOptimizeToursResponse), [AsyncModelMetadata](/dotnet/docs/reference/Google.Cloud.Optimization.V1/1.0.0-beta01/Google.Cloud.Optimization.V1.AsyncModelMetadata)>>`

A task representing the result of polling the operation.

### ShutdownDefaultChannelsAsync()

```
public static Task ShutdownDefaultChannelsAsync()
```

Shuts down any channels automatically created by [Create()](/dotnet/docs/reference/Google.Cloud.Optimization.V1/1.0.0-beta01/Google.Cloud.Optimization.V1.FleetRoutingClient#Google_Cloud_Optimization_V1_FleetRoutingClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Optimization.V1/1.0.0-beta01/Google.Cloud.Optimization.V1.FleetRoutingClient#Google_Cloud_Optimization_V1_FleetRoutingClient_CreateAsync_System_Threading_CancellationToken_). Channels which weren't automatically created are not affected.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A task representing the asynchronous shutdown operation.

**Remarks**

After calling this method, further calls to [Create()](/dotnet/docs/reference/Google.Cloud.Optimization.V1/1.0.0-beta01/Google.Cloud.Optimization.V1.FleetRoutingClient#Google_Cloud_Optimization_V1_FleetRoutingClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Optimization.V1/1.0.0-beta01/Google.Cloud.Optimization.V1.FleetRoutingClient#Google_Cloud_Optimization_V1_FleetRoutingClient_CreateAsync_System_Threading_CancellationToken_) will create new channels, which could in turn be shut down by another call to this method.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
