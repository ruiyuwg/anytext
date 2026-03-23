-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud Composer v1 API - Class EnvironmentsClient (2.3.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.3.0keyboard\_arrow\_down

-   [2.10.0 (latest)](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/latest/Google.Cloud.Orchestration.Airflow.Service.V1.EnvironmentsClient)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.9.0/Google.Cloud.Orchestration.Airflow.Service.V1.EnvironmentsClient)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.8.0/Google.Cloud.Orchestration.Airflow.Service.V1.EnvironmentsClient)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.7.0/Google.Cloud.Orchestration.Airflow.Service.V1.EnvironmentsClient)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.6.0/Google.Cloud.Orchestration.Airflow.Service.V1.EnvironmentsClient)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.5.0/Google.Cloud.Orchestration.Airflow.Service.V1.EnvironmentsClient)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.4.0/Google.Cloud.Orchestration.Airflow.Service.V1.EnvironmentsClient)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.EnvironmentsClient)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.2.0/Google.Cloud.Orchestration.Airflow.Service.V1.EnvironmentsClient)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.1.0/Google.Cloud.Orchestration.Airflow.Service.V1.EnvironmentsClient)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.0.0/Google.Cloud.Orchestration.Airflow.Service.V1.EnvironmentsClient)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/1.0.0/Google.Cloud.Orchestration.Airflow.Service.V1.EnvironmentsClient)

```
public abstract class EnvironmentsClient
```

Reference documentation and code samples for the Cloud Composer v1 API class EnvironmentsClient.

Environments client wrapper, for convenient use.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> EnvironmentsClient

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Derived Types

[EnvironmentsClientImpl](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.EnvironmentsClientImpl)

## Namespace

[Google.Cloud.Orchestration.Airflow.Service.V1](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1)

## Assembly

Google.Cloud.Orchestration.Airflow.Service.V1.dll

## Remarks

Managed Apache Airflow Environments.

## Properties

### CreateEnvironmentOperationsClient

```
public virtual OperationsClient CreateEnvironmentOperationsClient { get; }
```

The long-running operations client for `CreateEnvironment`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/OperationsClient.g.cs)`

### DefaultEndpoint

```
public static string DefaultEndpoint { get; }
```

The default endpoint for the Environments service, which is a host of "composer.googleapis.com" and a port of 443.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### DefaultScopes

```
public static IReadOnlyList<string> DefaultScopes { get; }
```

The default Environments scopes.

**Property Value**

**Type**

**Description**

`[IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)[string](https://learn.microsoft.com/dotnet/api/system.string)`

**Remarks**

The default Environments scopes are:

-   [https://www.googleapis.com/auth/cloud-platform](https://www.googleapis.com/auth/cloud-platform)

### DeleteEnvironmentOperationsClient

```
public virtual OperationsClient DeleteEnvironmentOperationsClient { get; }
```

The long-running operations client for `DeleteEnvironment`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/OperationsClient.g.cs)`

### GrpcClient

```
public virtual Environments.EnvironmentsClient GrpcClient { get; }
```

The underlying gRPC Environments client

**Property Value**

**Type**

**Description**

`[Environments](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environments)[EnvironmentsClient](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environments.EnvironmentsClient)`

### LoadSnapshotOperationsClient

```
public virtual OperationsClient LoadSnapshotOperationsClient { get; }
```

The long-running operations client for `LoadSnapshot`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/OperationsClient.g.cs)`

### SaveSnapshotOperationsClient

```
public virtual OperationsClient SaveSnapshotOperationsClient { get; }
```

The long-running operations client for `SaveSnapshot`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/OperationsClient.g.cs)`

### ServiceMetadata

```
public static ServiceMetadata ServiceMetadata { get; }
```

The service metadata associated with this client type.

**Property Value**

**Type**

**Description**

`[ServiceMetadata](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax.Grpc/ServiceMetadata.cs)`

### UpdateEnvironmentOperationsClient

```
public virtual OperationsClient UpdateEnvironmentOperationsClient { get; }
```

The long-running operations client for `UpdateEnvironment`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/OperationsClient.g.cs)`

## Methods

### Create()

```
public static EnvironmentsClient Create()
```

Synchronously creates a [EnvironmentsClient](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.EnvironmentsClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [EnvironmentsClientBuilder](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.EnvironmentsClientBuilder).

**Returns**

**Type**

**Description**

`[EnvironmentsClient](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.EnvironmentsClient)`

The created [EnvironmentsClient](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.EnvironmentsClient).

### CreateAsync(CancellationToken)

```
public static Task<EnvironmentsClient> CreateAsync(CancellationToken cancellationToken = default)
```

Asynchronously creates a [EnvironmentsClient](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.EnvironmentsClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [EnvironmentsClientBuilder](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.EnvironmentsClientBuilder).

**Parameter**

**Name**

**Description**

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

The [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use while creating the client.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[EnvironmentsClient](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.EnvironmentsClient)`

The task representing the created [EnvironmentsClient](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.EnvironmentsClient).

### CreateEnvironment(CreateEnvironmentRequest, CallSettings)

```
public virtual Operation<Environment, OperationMetadata> CreateEnvironment(CreateEnvironmentRequest request, CallSettings callSettings = null)
```

Create a new environment.

**Parameters**

**Name**

**Description**

`request`

`[CreateEnvironmentRequest](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.CreateEnvironmentRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Environment](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environment)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.OperationMetadata)`

The RPC response.

**Example**

```
// Create client
gcoasv::EnvironmentsClient environmentsClient = gcoasv::EnvironmentsClient.Create();
// Initialize request argument(s)
gcoasv::CreateEnvironmentRequest request = new gcoasv::CreateEnvironmentRequest
{
    Parent = "",
    Environment = new gcoasv::Environment(),
};
// Make the request
Operation<gcoasv::Environment, gcoasv::OperationMetadata> response = environmentsClient.CreateEnvironment(request);

// Poll until the returned long-running operation is complete
Operation<gcoasv::Environment, gcoasv::OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
gcoasv::Environment result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcoasv::Environment, gcoasv::OperationMetadata> retrievedResponse = environmentsClient.PollOnceCreateEnvironment(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcoasv::Environment retrievedResult = retrievedResponse.Result;
}
```

### CreateEnvironment(string, Environment, CallSettings)

```
public virtual Operation<Environment, OperationMetadata> CreateEnvironment(string parent, Environment environment, CallSettings callSettings = null)
```

Create a new environment.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The parent must be of the form "projects/{projectId}/locations/{locationId}".

`environment`

`[Environment](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environment)`  

The environment to create.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Environment](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environment)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.OperationMetadata)`

The RPC response.

**Example**

```
// Create client
gcoasv::EnvironmentsClient environmentsClient = gcoasv::EnvironmentsClient.Create();
// Initialize request argument(s)
string parent = "";
gcoasv::Environment environment = new gcoasv::Environment();
// Make the request
Operation<gcoasv::Environment, gcoasv::OperationMetadata> response = environmentsClient.CreateEnvironment(parent, environment);

// Poll until the returned long-running operation is complete
Operation<gcoasv::Environment, gcoasv::OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
gcoasv::Environment result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcoasv::Environment, gcoasv::OperationMetadata> retrievedResponse = environmentsClient.PollOnceCreateEnvironment(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcoasv::Environment retrievedResult = retrievedResponse.Result;
}
```

### CreateEnvironmentAsync(CreateEnvironmentRequest, CallSettings)

```
public virtual Task<Operation<Environment, OperationMetadata>> CreateEnvironmentAsync(CreateEnvironmentRequest request, CallSettings callSettings = null)
```

Create a new environment.

**Parameters**

**Name**

**Description**

`request`

`[CreateEnvironmentRequest](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.CreateEnvironmentRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Environment](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environment)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
gcoasv::EnvironmentsClient environmentsClient = await gcoasv::EnvironmentsClient.CreateAsync();
// Initialize request argument(s)
gcoasv::CreateEnvironmentRequest request = new gcoasv::CreateEnvironmentRequest
{
    Parent = "",
    Environment = new gcoasv::Environment(),
};
// Make the request
Operation<gcoasv::Environment, gcoasv::OperationMetadata> response = await environmentsClient.CreateEnvironmentAsync(request);

// Poll until the returned long-running operation is complete
Operation<gcoasv::Environment, gcoasv::OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
gcoasv::Environment result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcoasv::Environment, gcoasv::OperationMetadata> retrievedResponse = await environmentsClient.PollOnceCreateEnvironmentAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcoasv::Environment retrievedResult = retrievedResponse.Result;
}
```

### CreateEnvironmentAsync(CreateEnvironmentRequest, CancellationToken)

```
public virtual Task<Operation<Environment, OperationMetadata>> CreateEnvironmentAsync(CreateEnvironmentRequest request, CancellationToken cancellationToken)
```

Create a new environment.

**Parameters**

**Name**

**Description**

`request`

`[CreateEnvironmentRequest](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.CreateEnvironmentRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Environment](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environment)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
gcoasv::EnvironmentsClient environmentsClient = await gcoasv::EnvironmentsClient.CreateAsync();
// Initialize request argument(s)
gcoasv::CreateEnvironmentRequest request = new gcoasv::CreateEnvironmentRequest
{
    Parent = "",
    Environment = new gcoasv::Environment(),
};
// Make the request
Operation<gcoasv::Environment, gcoasv::OperationMetadata> response = await environmentsClient.CreateEnvironmentAsync(request);

// Poll until the returned long-running operation is complete
Operation<gcoasv::Environment, gcoasv::OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
gcoasv::Environment result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcoasv::Environment, gcoasv::OperationMetadata> retrievedResponse = await environmentsClient.PollOnceCreateEnvironmentAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcoasv::Environment retrievedResult = retrievedResponse.Result;
}
```

### CreateEnvironmentAsync(string, Environment, CallSettings)

```
public virtual Task<Operation<Environment, OperationMetadata>> CreateEnvironmentAsync(string parent, Environment environment, CallSettings callSettings = null)
```

Create a new environment.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The parent must be of the form "projects/{projectId}/locations/{locationId}".

`environment`

`[Environment](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environment)`  

The environment to create.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Environment](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environment)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
gcoasv::EnvironmentsClient environmentsClient = await gcoasv::EnvironmentsClient.CreateAsync();
// Initialize request argument(s)
string parent = "";
gcoasv::Environment environment = new gcoasv::Environment();
// Make the request
Operation<gcoasv::Environment, gcoasv::OperationMetadata> response = await environmentsClient.CreateEnvironmentAsync(parent, environment);

// Poll until the returned long-running operation is complete
Operation<gcoasv::Environment, gcoasv::OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
gcoasv::Environment result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcoasv::Environment, gcoasv::OperationMetadata> retrievedResponse = await environmentsClient.PollOnceCreateEnvironmentAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcoasv::Environment retrievedResult = retrievedResponse.Result;
}
```

### CreateEnvironmentAsync(string, Environment, CancellationToken)

```
public virtual Task<Operation<Environment, OperationMetadata>> CreateEnvironmentAsync(string parent, Environment environment, CancellationToken cancellationToken)
```

Create a new environment.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The parent must be of the form "projects/{projectId}/locations/{locationId}".

`environment`

`[Environment](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environment)`  

The environment to create.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Environment](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environment)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
gcoasv::EnvironmentsClient environmentsClient = await gcoasv::EnvironmentsClient.CreateAsync();
// Initialize request argument(s)
string parent = "";
gcoasv::Environment environment = new gcoasv::Environment();
// Make the request
Operation<gcoasv::Environment, gcoasv::OperationMetadata> response = await environmentsClient.CreateEnvironmentAsync(parent, environment);

// Poll until the returned long-running operation is complete
Operation<gcoasv::Environment, gcoasv::OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
gcoasv::Environment result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcoasv::Environment, gcoasv::OperationMetadata> retrievedResponse = await environmentsClient.PollOnceCreateEnvironmentAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcoasv::Environment retrievedResult = retrievedResponse.Result;
}
```

### DeleteEnvironment(DeleteEnvironmentRequest, CallSettings)

```
public virtual Operation<Empty, OperationMetadata> DeleteEnvironment(DeleteEnvironmentRequest request, CallSettings callSettings = null)
```

Delete an environment.

**Parameters**

**Name**

**Description**

`request`

`[DeleteEnvironmentRequest](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.DeleteEnvironmentRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.OperationMetadata)`

The RPC response.

**Example**

```
// Create client
gcoasv::EnvironmentsClient environmentsClient = gcoasv::EnvironmentsClient.Create();
// Initialize request argument(s)
gcoasv::DeleteEnvironmentRequest request = new gcoasv::DeleteEnvironmentRequest { Name = "", };
// Make the request
Operation<Empty, gcoasv::OperationMetadata> response = environmentsClient.DeleteEnvironment(request);

// Poll until the returned long-running operation is complete
Operation<Empty, gcoasv::OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, gcoasv::OperationMetadata> retrievedResponse = environmentsClient.PollOnceDeleteEnvironment(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeleteEnvironment(string, CallSettings)

```
public virtual Operation<Empty, OperationMetadata> DeleteEnvironment(string name, CallSettings callSettings = null)
```

Delete an environment.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The environment to delete, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.OperationMetadata)`

The RPC response.

**Example**

```
// Create client
gcoasv::EnvironmentsClient environmentsClient = gcoasv::EnvironmentsClient.Create();
// Initialize request argument(s)
string name = "";
// Make the request
Operation<Empty, gcoasv::OperationMetadata> response = environmentsClient.DeleteEnvironment(name);

// Poll until the returned long-running operation is complete
Operation<Empty, gcoasv::OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, gcoasv::OperationMetadata> retrievedResponse = environmentsClient.PollOnceDeleteEnvironment(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeleteEnvironmentAsync(DeleteEnvironmentRequest, CallSettings)

```
public virtual Task<Operation<Empty, OperationMetadata>> DeleteEnvironmentAsync(DeleteEnvironmentRequest request, CallSettings callSettings = null)
```

Delete an environment.

**Parameters**

**Name**

**Description**

`request`

`[DeleteEnvironmentRequest](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.DeleteEnvironmentRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
gcoasv::EnvironmentsClient environmentsClient = await gcoasv::EnvironmentsClient.CreateAsync();
// Initialize request argument(s)
gcoasv::DeleteEnvironmentRequest request = new gcoasv::DeleteEnvironmentRequest { Name = "", };
// Make the request
Operation<Empty, gcoasv::OperationMetadata> response = await environmentsClient.DeleteEnvironmentAsync(request);

// Poll until the returned long-running operation is complete
Operation<Empty, gcoasv::OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, gcoasv::OperationMetadata> retrievedResponse = await environmentsClient.PollOnceDeleteEnvironmentAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeleteEnvironmentAsync(DeleteEnvironmentRequest, CancellationToken)

```
public virtual Task<Operation<Empty, OperationMetadata>> DeleteEnvironmentAsync(DeleteEnvironmentRequest request, CancellationToken cancellationToken)
```

Delete an environment.

**Parameters**

**Name**

**Description**

`request`

`[DeleteEnvironmentRequest](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.DeleteEnvironmentRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
gcoasv::EnvironmentsClient environmentsClient = await gcoasv::EnvironmentsClient.CreateAsync();
// Initialize request argument(s)
gcoasv::DeleteEnvironmentRequest request = new gcoasv::DeleteEnvironmentRequest { Name = "", };
// Make the request
Operation<Empty, gcoasv::OperationMetadata> response = await environmentsClient.DeleteEnvironmentAsync(request);

// Poll until the returned long-running operation is complete
Operation<Empty, gcoasv::OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, gcoasv::OperationMetadata> retrievedResponse = await environmentsClient.PollOnceDeleteEnvironmentAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeleteEnvironmentAsync(string, CallSettings)

```
public virtual Task<Operation<Empty, OperationMetadata>> DeleteEnvironmentAsync(string name, CallSettings callSettings = null)
```

Delete an environment.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The environment to delete, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
gcoasv::EnvironmentsClient environmentsClient = await gcoasv::EnvironmentsClient.CreateAsync();
// Initialize request argument(s)
string name = "";
// Make the request
Operation<Empty, gcoasv::OperationMetadata> response = await environmentsClient.DeleteEnvironmentAsync(name);

// Poll until the returned long-running operation is complete
Operation<Empty, gcoasv::OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, gcoasv::OperationMetadata> retrievedResponse = await environmentsClient.PollOnceDeleteEnvironmentAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeleteEnvironmentAsync(string, CancellationToken)

```
public virtual Task<Operation<Empty, OperationMetadata>> DeleteEnvironmentAsync(string name, CancellationToken cancellationToken)
```

Delete an environment.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The environment to delete, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
gcoasv::EnvironmentsClient environmentsClient = await gcoasv::EnvironmentsClient.CreateAsync();
// Initialize request argument(s)
string name = "";
// Make the request
Operation<Empty, gcoasv::OperationMetadata> response = await environmentsClient.DeleteEnvironmentAsync(name);

// Poll until the returned long-running operation is complete
Operation<Empty, gcoasv::OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, gcoasv::OperationMetadata> retrievedResponse = await environmentsClient.PollOnceDeleteEnvironmentAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### GetEnvironment(GetEnvironmentRequest, CallSettings)

```
public virtual Environment GetEnvironment(GetEnvironmentRequest request, CallSettings callSettings = null)
```

Get an existing environment.

**Parameters**

**Name**

**Description**

`request`

`[GetEnvironmentRequest](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.GetEnvironmentRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Environment](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environment)`

The RPC response.

**Example**

```
// Create client
gcoasv::EnvironmentsClient environmentsClient = gcoasv::EnvironmentsClient.Create();
// Initialize request argument(s)
gcoasv::GetEnvironmentRequest request = new gcoasv::GetEnvironmentRequest { Name = "", };
// Make the request
gcoasv::Environment response = environmentsClient.GetEnvironment(request);
```

### GetEnvironment(string, CallSettings)

```
public virtual Environment GetEnvironment(string name, CallSettings callSettings = null)
```

Get an existing environment.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name of the environment to get, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Environment](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environment)`

The RPC response.

**Example**

```
// Create client
gcoasv::EnvironmentsClient environmentsClient = gcoasv::EnvironmentsClient.Create();
// Initialize request argument(s)
string name = "";
// Make the request
gcoasv::Environment response = environmentsClient.GetEnvironment(name);
```

### GetEnvironmentAsync(GetEnvironmentRequest, CallSettings)

```
public virtual Task<Environment> GetEnvironmentAsync(GetEnvironmentRequest request, CallSettings callSettings = null)
```

Get an existing environment.

**Parameters**

**Name**

**Description**

`request`

`[GetEnvironmentRequest](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.GetEnvironmentRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Environment](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environment)`

A Task containing the RPC response.

**Example**

```
// Create client
gcoasv::EnvironmentsClient environmentsClient = await gcoasv::EnvironmentsClient.CreateAsync();
// Initialize request argument(s)
gcoasv::GetEnvironmentRequest request = new gcoasv::GetEnvironmentRequest { Name = "", };
// Make the request
gcoasv::Environment response = await environmentsClient.GetEnvironmentAsync(request);
```

### GetEnvironmentAsync(GetEnvironmentRequest, CancellationToken)

```
public virtual Task<Environment> GetEnvironmentAsync(GetEnvironmentRequest request, CancellationToken cancellationToken)
```

Get an existing environment.

**Parameters**

**Name**

**Description**

`request`

`[GetEnvironmentRequest](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.GetEnvironmentRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Environment](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environment)`

A Task containing the RPC response.

**Example**

```
// Create client
gcoasv::EnvironmentsClient environmentsClient = await gcoasv::EnvironmentsClient.CreateAsync();
// Initialize request argument(s)
gcoasv::GetEnvironmentRequest request = new gcoasv::GetEnvironmentRequest { Name = "", };
// Make the request
gcoasv::Environment response = await environmentsClient.GetEnvironmentAsync(request);
```

### GetEnvironmentAsync(string, CallSettings)

```
public virtual Task<Environment> GetEnvironmentAsync(string name, CallSettings callSettings = null)
```

Get an existing environment.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name of the environment to get, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Environment](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environment)`

A Task containing the RPC response.

**Example**

```
// Create client
gcoasv::EnvironmentsClient environmentsClient = await gcoasv::EnvironmentsClient.CreateAsync();
// Initialize request argument(s)
string name = "";
// Make the request
gcoasv::Environment response = await environmentsClient.GetEnvironmentAsync(name);
```

### GetEnvironmentAsync(string, CancellationToken)

```
public virtual Task<Environment> GetEnvironmentAsync(string name, CancellationToken cancellationToken)
```

Get an existing environment.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The resource name of the environment to get, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Environment](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environment)`

A Task containing the RPC response.

**Example**

```
// Create client
gcoasv::EnvironmentsClient environmentsClient = await gcoasv::EnvironmentsClient.CreateAsync();
// Initialize request argument(s)
string name = "";
// Make the request
gcoasv::Environment response = await environmentsClient.GetEnvironmentAsync(name);
```

### ListEnvironments(ListEnvironmentsRequest, CallSettings)

```
public virtual PagedEnumerable<ListEnvironmentsResponse, Environment> ListEnvironments(ListEnvironmentsRequest request, CallSettings callSettings = null)
```

List environments.

**Parameters**

**Name**

**Description**

`request`

`[ListEnvironmentsRequest](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.ListEnvironmentsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax/PagedEnumerable.cs)[ListEnvironmentsResponse](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.ListEnvironmentsResponse)[Environment](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environment)`

A pageable sequence of [Environment](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environment) resources.

**Example**

```
// Create client
gcoasv::EnvironmentsClient environmentsClient = gcoasv::EnvironmentsClient.Create();
// Initialize request argument(s)
gcoasv::ListEnvironmentsRequest request = new gcoasv::ListEnvironmentsRequest { Parent = "", };
// Make the request
PagedEnumerable<gcoasv::ListEnvironmentsResponse, gcoasv::Environment> response = environmentsClient.ListEnvironments(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (gcoasv::Environment item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (gcoasv::ListEnvironmentsResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (gcoasv::Environment item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<gcoasv::Environment> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (gcoasv::Environment item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEnvironments(string, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListEnvironmentsResponse, Environment> ListEnvironments(string parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

List environments.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

List environments in the given project and location, in the form: "projects/{projectId}/locations/{locationId}"

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax/PagedEnumerable.cs)[ListEnvironmentsResponse](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.ListEnvironmentsResponse)[Environment](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environment)`

A pageable sequence of [Environment](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environment) resources.

**Example**

```
// Create client
gcoasv::EnvironmentsClient environmentsClient = gcoasv::EnvironmentsClient.Create();
// Initialize request argument(s)
string parent = "";
// Make the request
PagedEnumerable<gcoasv::ListEnvironmentsResponse, gcoasv::Environment> response = environmentsClient.ListEnvironments(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (gcoasv::Environment item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (gcoasv::ListEnvironmentsResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (gcoasv::Environment item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<gcoasv::Environment> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (gcoasv::Environment item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEnvironmentsAsync(ListEnvironmentsRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListEnvironmentsResponse, Environment> ListEnvironmentsAsync(ListEnvironmentsRequest request, CallSettings callSettings = null)
```

List environments.

**Parameters**

**Name**

**Description**

`request`

`[ListEnvironmentsRequest](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.ListEnvironmentsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListEnvironmentsResponse](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.ListEnvironmentsResponse)[Environment](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environment)`

A pageable asynchronous sequence of [Environment](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environment) resources.

**Example**

```
// Create client
gcoasv::EnvironmentsClient environmentsClient = await gcoasv::EnvironmentsClient.CreateAsync();
// Initialize request argument(s)
gcoasv::ListEnvironmentsRequest request = new gcoasv::ListEnvironmentsRequest { Parent = "", };
// Make the request
PagedAsyncEnumerable<gcoasv::ListEnvironmentsResponse, gcoasv::Environment> response = environmentsClient.ListEnvironmentsAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((gcoasv::Environment item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((gcoasv::ListEnvironmentsResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (gcoasv::Environment item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<gcoasv::Environment> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (gcoasv::Environment item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEnvironmentsAsync(string, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListEnvironmentsResponse, Environment> ListEnvironmentsAsync(string parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

List environments.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

List environments in the given project and location, in the form: "projects/{projectId}/locations/{locationId}"

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListEnvironmentsResponse](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.ListEnvironmentsResponse)[Environment](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environment)`

A pageable asynchronous sequence of [Environment](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environment) resources.

**Example**

```
// Create client
gcoasv::EnvironmentsClient environmentsClient = await gcoasv::EnvironmentsClient.CreateAsync();
// Initialize request argument(s)
string parent = "";
// Make the request
PagedAsyncEnumerable<gcoasv::ListEnvironmentsResponse, gcoasv::Environment> response = environmentsClient.ListEnvironmentsAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((gcoasv::Environment item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((gcoasv::ListEnvironmentsResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (gcoasv::Environment item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<gcoasv::Environment> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (gcoasv::Environment item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### LoadSnapshot(LoadSnapshotRequest, CallSettings)

```
public virtual Operation<LoadSnapshotResponse, OperationMetadata> LoadSnapshot(LoadSnapshotRequest request, CallSettings callSettings = null)
```

Loads a snapshot of a Cloud Composer environment.

As a result of this operation, a snapshot of environment's specified in LoadSnapshotRequest is loaded into the environment.

**Parameters**

**Name**

**Description**

`request`

`[LoadSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.LoadSnapshotRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[LoadSnapshotResponse](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.LoadSnapshotResponse)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.OperationMetadata)`

The RPC response.

**Example**

```
// Create client
gcoasv::EnvironmentsClient environmentsClient = gcoasv::EnvironmentsClient.Create();
// Initialize request argument(s)
gcoasv::LoadSnapshotRequest request = new gcoasv::LoadSnapshotRequest
{
    Environment = "",
    SnapshotPath = "",
    SkipPypiPackagesInstallation = false,
    SkipEnvironmentVariablesSetting = false,
    SkipAirflowOverridesSetting = false,
    SkipGcsDataCopying = false,
};
// Make the request
Operation<gcoasv::LoadSnapshotResponse, gcoasv::OperationMetadata> response = environmentsClient.LoadSnapshot(request);

// Poll until the returned long-running operation is complete
Operation<gcoasv::LoadSnapshotResponse, gcoasv::OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
gcoasv::LoadSnapshotResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcoasv::LoadSnapshotResponse, gcoasv::OperationMetadata> retrievedResponse = environmentsClient.PollOnceLoadSnapshot(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcoasv::LoadSnapshotResponse retrievedResult = retrievedResponse.Result;
}
```

### LoadSnapshotAsync(LoadSnapshotRequest, CallSettings)

```
public virtual Task<Operation<LoadSnapshotResponse, OperationMetadata>> LoadSnapshotAsync(LoadSnapshotRequest request, CallSettings callSettings = null)
```

Loads a snapshot of a Cloud Composer environment.

As a result of this operation, a snapshot of environment's specified in LoadSnapshotRequest is loaded into the environment.

**Parameters**

**Name**

**Description**

`request`

`[LoadSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.LoadSnapshotRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[LoadSnapshotResponse](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.LoadSnapshotResponse)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
gcoasv::EnvironmentsClient environmentsClient = await gcoasv::EnvironmentsClient.CreateAsync();
// Initialize request argument(s)
gcoasv::LoadSnapshotRequest request = new gcoasv::LoadSnapshotRequest
{
    Environment = "",
    SnapshotPath = "",
    SkipPypiPackagesInstallation = false,
    SkipEnvironmentVariablesSetting = false,
    SkipAirflowOverridesSetting = false,
    SkipGcsDataCopying = false,
};
// Make the request
Operation<gcoasv::LoadSnapshotResponse, gcoasv::OperationMetadata> response = await environmentsClient.LoadSnapshotAsync(request);

// Poll until the returned long-running operation is complete
Operation<gcoasv::LoadSnapshotResponse, gcoasv::OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
gcoasv::LoadSnapshotResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcoasv::LoadSnapshotResponse, gcoasv::OperationMetadata> retrievedResponse = await environmentsClient.PollOnceLoadSnapshotAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcoasv::LoadSnapshotResponse retrievedResult = retrievedResponse.Result;
}
```

### LoadSnapshotAsync(LoadSnapshotRequest, CancellationToken)

```
public virtual Task<Operation<LoadSnapshotResponse, OperationMetadata>> LoadSnapshotAsync(LoadSnapshotRequest request, CancellationToken cancellationToken)
```

Loads a snapshot of a Cloud Composer environment.

As a result of this operation, a snapshot of environment's specified in LoadSnapshotRequest is loaded into the environment.

**Parameters**

**Name**

**Description**

`request`

`[LoadSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.LoadSnapshotRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[LoadSnapshotResponse](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.LoadSnapshotResponse)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
gcoasv::EnvironmentsClient environmentsClient = await gcoasv::EnvironmentsClient.CreateAsync();
// Initialize request argument(s)
gcoasv::LoadSnapshotRequest request = new gcoasv::LoadSnapshotRequest
{
    Environment = "",
    SnapshotPath = "",
    SkipPypiPackagesInstallation = false,
    SkipEnvironmentVariablesSetting = false,
    SkipAirflowOverridesSetting = false,
    SkipGcsDataCopying = false,
};
// Make the request
Operation<gcoasv::LoadSnapshotResponse, gcoasv::OperationMetadata> response = await environmentsClient.LoadSnapshotAsync(request);

// Poll until the returned long-running operation is complete
Operation<gcoasv::LoadSnapshotResponse, gcoasv::OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
gcoasv::LoadSnapshotResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcoasv::LoadSnapshotResponse, gcoasv::OperationMetadata> retrievedResponse = await environmentsClient.PollOnceLoadSnapshotAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcoasv::LoadSnapshotResponse retrievedResult = retrievedResponse.Result;
}
```

### PollOnceCreateEnvironment(string, CallSettings)

```
public virtual Operation<Environment, OperationMetadata> PollOnceCreateEnvironment(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `CreateEnvironment` .

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Environment](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environment)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.OperationMetadata)`

The result of polling the operation.

### PollOnceCreateEnvironmentAsync(string, CallSettings)

```
public virtual Task<Operation<Environment, OperationMetadata>> PollOnceCreateEnvironmentAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `CreateEnvironment`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Environment](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environment)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.OperationMetadata)`

A task representing the result of polling the operation.

### PollOnceDeleteEnvironment(string, CallSettings)

```
public virtual Operation<Empty, OperationMetadata> PollOnceDeleteEnvironment(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `DeleteEnvironment` .

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.OperationMetadata)`

The result of polling the operation.

### PollOnceDeleteEnvironmentAsync(string, CallSettings)

```
public virtual Task<Operation<Empty, OperationMetadata>> PollOnceDeleteEnvironmentAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `DeleteEnvironment`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.OperationMetadata)`

A task representing the result of polling the operation.

### PollOnceLoadSnapshot(string, CallSettings)

```
public virtual Operation<LoadSnapshotResponse, OperationMetadata> PollOnceLoadSnapshot(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `LoadSnapshot`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[LoadSnapshotResponse](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.LoadSnapshotResponse)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.OperationMetadata)`

The result of polling the operation.

### PollOnceLoadSnapshotAsync(string, CallSettings)

```
public virtual Task<Operation<LoadSnapshotResponse, OperationMetadata>> PollOnceLoadSnapshotAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `LoadSnapshot`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[LoadSnapshotResponse](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.LoadSnapshotResponse)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.OperationMetadata)`

A task representing the result of polling the operation.

### PollOnceSaveSnapshot(string, CallSettings)

```
public virtual Operation<SaveSnapshotResponse, OperationMetadata> PollOnceSaveSnapshot(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `SaveSnapshot`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[SaveSnapshotResponse](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.SaveSnapshotResponse)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.OperationMetadata)`

The result of polling the operation.

### PollOnceSaveSnapshotAsync(string, CallSettings)

```
public virtual Task<Operation<SaveSnapshotResponse, OperationMetadata>> PollOnceSaveSnapshotAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `SaveSnapshot`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[SaveSnapshotResponse](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.SaveSnapshotResponse)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.OperationMetadata)`

A task representing the result of polling the operation.

### PollOnceUpdateEnvironment(string, CallSettings)

```
public virtual Operation<Environment, OperationMetadata> PollOnceUpdateEnvironment(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `UpdateEnvironment` .

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Environment](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environment)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.OperationMetadata)`

The result of polling the operation.

### PollOnceUpdateEnvironmentAsync(string, CallSettings)

```
public virtual Task<Operation<Environment, OperationMetadata>> PollOnceUpdateEnvironmentAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `UpdateEnvironment`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Environment](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environment)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.OperationMetadata)`

A task representing the result of polling the operation.

### SaveSnapshot(SaveSnapshotRequest, CallSettings)

```
public virtual Operation<SaveSnapshotResponse, OperationMetadata> SaveSnapshot(SaveSnapshotRequest request, CallSettings callSettings = null)
```

Creates a snapshots of a Cloud Composer environment.

As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.

**Parameters**

**Name**

**Description**

`request`

`[SaveSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.SaveSnapshotRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[SaveSnapshotResponse](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.SaveSnapshotResponse)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.OperationMetadata)`

The RPC response.

**Example**

```
// Create client
gcoasv::EnvironmentsClient environmentsClient = gcoasv::EnvironmentsClient.Create();
// Initialize request argument(s)
gcoasv::SaveSnapshotRequest request = new gcoasv::SaveSnapshotRequest
{
    Environment = "",
    SnapshotLocation = "",
};
// Make the request
Operation<gcoasv::SaveSnapshotResponse, gcoasv::OperationMetadata> response = environmentsClient.SaveSnapshot(request);

// Poll until the returned long-running operation is complete
Operation<gcoasv::SaveSnapshotResponse, gcoasv::OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
gcoasv::SaveSnapshotResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcoasv::SaveSnapshotResponse, gcoasv::OperationMetadata> retrievedResponse = environmentsClient.PollOnceSaveSnapshot(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcoasv::SaveSnapshotResponse retrievedResult = retrievedResponse.Result;
}
```

### SaveSnapshotAsync(SaveSnapshotRequest, CallSettings)

```
public virtual Task<Operation<SaveSnapshotResponse, OperationMetadata>> SaveSnapshotAsync(SaveSnapshotRequest request, CallSettings callSettings = null)
```

Creates a snapshots of a Cloud Composer environment.

As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.

**Parameters**

**Name**

**Description**

`request`

`[SaveSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.SaveSnapshotRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[SaveSnapshotResponse](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.SaveSnapshotResponse)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
gcoasv::EnvironmentsClient environmentsClient = await gcoasv::EnvironmentsClient.CreateAsync();
// Initialize request argument(s)
gcoasv::SaveSnapshotRequest request = new gcoasv::SaveSnapshotRequest
{
    Environment = "",
    SnapshotLocation = "",
};
// Make the request
Operation<gcoasv::SaveSnapshotResponse, gcoasv::OperationMetadata> response = await environmentsClient.SaveSnapshotAsync(request);

// Poll until the returned long-running operation is complete
Operation<gcoasv::SaveSnapshotResponse, gcoasv::OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
gcoasv::SaveSnapshotResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcoasv::SaveSnapshotResponse, gcoasv::OperationMetadata> retrievedResponse = await environmentsClient.PollOnceSaveSnapshotAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcoasv::SaveSnapshotResponse retrievedResult = retrievedResponse.Result;
}
```

### SaveSnapshotAsync(SaveSnapshotRequest, CancellationToken)

```
public virtual Task<Operation<SaveSnapshotResponse, OperationMetadata>> SaveSnapshotAsync(SaveSnapshotRequest request, CancellationToken cancellationToken)
```

Creates a snapshots of a Cloud Composer environment.

As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.

**Parameters**

**Name**

**Description**

`request`

`[SaveSnapshotRequest](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.SaveSnapshotRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[SaveSnapshotResponse](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.SaveSnapshotResponse)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
gcoasv::EnvironmentsClient environmentsClient = await gcoasv::EnvironmentsClient.CreateAsync();
// Initialize request argument(s)
gcoasv::SaveSnapshotRequest request = new gcoasv::SaveSnapshotRequest
{
    Environment = "",
    SnapshotLocation = "",
};
// Make the request
Operation<gcoasv::SaveSnapshotResponse, gcoasv::OperationMetadata> response = await environmentsClient.SaveSnapshotAsync(request);

// Poll until the returned long-running operation is complete
Operation<gcoasv::SaveSnapshotResponse, gcoasv::OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
gcoasv::SaveSnapshotResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcoasv::SaveSnapshotResponse, gcoasv::OperationMetadata> retrievedResponse = await environmentsClient.PollOnceSaveSnapshotAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcoasv::SaveSnapshotResponse retrievedResult = retrievedResponse.Result;
}
```

### ShutdownDefaultChannelsAsync()

```
public static Task ShutdownDefaultChannelsAsync()
```

Shuts down any channels automatically created by [Create()](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.EnvironmentsClient#Google_Cloud_Orchestration_Airflow_Service_V1_EnvironmentsClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.EnvironmentsClient#Google_Cloud_Orchestration_Airflow_Service_V1_EnvironmentsClient_CreateAsync_System_Threading_CancellationToken_). Channels which weren't automatically created are not affected.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A task representing the asynchronous shutdown operation.

**Remarks**

After calling this method, further calls to [Create()](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.EnvironmentsClient#Google_Cloud_Orchestration_Airflow_Service_V1_EnvironmentsClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.EnvironmentsClient#Google_Cloud_Orchestration_Airflow_Service_V1_EnvironmentsClient_CreateAsync_System_Threading_CancellationToken_) will create new channels, which could in turn be shut down by another call to this method.

### UpdateEnvironment(UpdateEnvironmentRequest, CallSettings)

```
public virtual Operation<Environment, OperationMetadata> UpdateEnvironment(UpdateEnvironmentRequest request, CallSettings callSettings = null)
```

Update an environment.

**Parameters**

**Name**

**Description**

`request`

`[UpdateEnvironmentRequest](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.UpdateEnvironmentRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Environment](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environment)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.OperationMetadata)`

The RPC response.

**Example**

```
// Create client
gcoasv::EnvironmentsClient environmentsClient = gcoasv::EnvironmentsClient.Create();
// Initialize request argument(s)
gcoasv::UpdateEnvironmentRequest request = new gcoasv::UpdateEnvironmentRequest
{
    Environment = new gcoasv::Environment(),
    Name = "",
    UpdateMask = new FieldMask(),
};
// Make the request
Operation<gcoasv::Environment, gcoasv::OperationMetadata> response = environmentsClient.UpdateEnvironment(request);

// Poll until the returned long-running operation is complete
Operation<gcoasv::Environment, gcoasv::OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
gcoasv::Environment result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcoasv::Environment, gcoasv::OperationMetadata> retrievedResponse = environmentsClient.PollOnceUpdateEnvironment(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcoasv::Environment retrievedResult = retrievedResponse.Result;
}
```

### UpdateEnvironment(string, Environment, FieldMask, CallSettings)

```
public virtual Operation<Environment, OperationMetadata> UpdateEnvironment(string name, Environment environment, FieldMask updateMask, CallSettings callSettings = null)
```

Update an environment.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The relative resource name of the environment to update, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"

`environment`

`[Environment](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environment)`  

A patch environment. Fields specified by the `updateMask` will be copied from the patch environment into the environment under update.

`updateMask`

`[FieldMask](https://github.com/protocolbuffers/protobuf/blob/e7e8f04a4ff0df9c7233ac0fcb3c41b9b84e174c/csharp/src/Google.Protobuf/WellKnownTypes/FieldMask.cs)`  

Required. A comma-separated list of paths, relative to `Environment`, of fields to update. For example, to set the version of scikit-learn to install in the environment to 0.19.0 and to remove an existing installation of numpy, the `updateMask` parameter would include the following two `paths` values: "config.softwareConfig.pypiPackages.scikit-learn" and "config.softwareConfig.pypiPackages.numpy". The included patch environment would specify the scikit-learn version as follows:

{ "config":{ "softwareConfig":{ "pypiPackages":{ "scikit-learn":"==0.19.0" } } } }

Note that in the above example, any existing PyPI packages other than scikit-learn and numpy will be unaffected.

Only one update type may be included in a single request's `updateMask`. For example, one cannot update both the PyPI packages and labels in the same request. However, it is possible to update multiple members of a map field simultaneously in the same request. For example, to set the labels "label1" and "label2" while clearing "label3" (assuming it already exists), one can provide the paths "labels.label1", "labels.label2", and "labels.label3" and populate the patch environment as follows:

{ "labels":{ "label1":"new-label1-value" "label2":"new-label2-value" } }

Note that in the above example, any existing labels that are not included in the `updateMask` will be unaffected.

It is also possible to replace an entire map field by providing the map field's path in the `updateMask`. The new value of the field will be that which is provided in the patch environment. For example, to delete all pre-existing user-specified PyPI packages and install botocore at version 1.7.14, the `updateMask` would contain the path "config.softwareConfig.pypiPackages", and the patch environment would be the following:

{ "config":{ "softwareConfig":{ "pypiPackages":{ "botocore":"==1.7.14" } } } }

**Note:** Only the following fields can be updated:

-   `config.softwareConfig.pypiPackages`
-   Replace all custom custom PyPI packages. If a replacement package map is not included in `environment`, all custom PyPI packages are cleared. It is an error to provide both this mask and a mask specifying an individual package.
-   `config.softwareConfig.pypiPackages.`packagename
-   Update the custom PyPI package _packagename_, preserving other packages. To delete the package, include it in `updateMask`, and omit the mapping for it in `environment.config.softwareConfig.pypiPackages`. It is an error to provide both a mask of this form and the `config.softwareConfig.pypiPackages` mask.
-   `labels`
-   Replace all environment labels. If a replacement labels map is not included in `environment`, all labels are cleared. It is an error to provide both this mask and a mask specifying one or more individual labels.
-   `labels.`labelName
-   Set the label named _labelName_, while preserving other labels. To delete the label, include it in `updateMask` and omit its mapping in `environment.labels`. It is an error to provide both a mask of this form and the `labels` mask.
-   `config.nodeCount`
-   Horizontally scale the number of nodes in the environment. An integer greater than or equal to 3 must be provided in the `config.nodeCount` field. Supported for Cloud Composer environments in versions composer-1._._\-airflow-_._.\*.
-   `config.webServerNetworkAccessControl`
-   Replace the environment's current `WebServerNetworkAccessControl`.
-   `config.softwareConfig.airflowConfigOverrides`
-   Replace all Apache Airflow config overrides. If a replacement config overrides map is not included in `environment`, all config overrides are cleared. It is an error to provide both this mask and a mask specifying one or more individual config overrides.
-   `config.softwareConfig.airflowConfigOverrides.`section-name
-   Override the Apache Airflow config property _name_ in the section named _section_, preserving other properties. To delete the property override, include it in `updateMask` and omit its mapping in `environment.config.softwareConfig.airflowConfigOverrides`. It is an error to provide both a mask of this form and the `config.softwareConfig.airflowConfigOverrides` mask.
-   `config.softwareConfig.envVariables`
-   Replace all environment variables. If a replacement environment variable map is not included in `environment`, all custom environment variables are cleared.
-   `config.softwareConfig.schedulerCount`
-   Horizontally scale the number of schedulers in Airflow. A positive integer not greater than the number of nodes must be provided in the `config.softwareConfig.schedulerCount` field. Supported for Cloud Composer environments in versions composer-1._._\-airflow-2._._.
-   `config.databaseConfig.machineType`
-   Cloud SQL machine type used by Airflow database. It has to be one of: db-n1-standard-2, db-n1-standard-4, db-n1-standard-8 or db-n1-standard-16. Supported for Cloud Composer environments in versions composer-1._._\-airflow-_._.\*.
-   `config.webServerConfig.machineType`
-   Machine type on which Airflow web server is running. It has to be one of: composer-n1-webserver-2, composer-n1-webserver-4 or composer-n1-webserver-8. Supported for Cloud Composer environments in versions composer-1._._\-airflow-_._.\*.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Environment](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environment)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.OperationMetadata)`

The RPC response.

**Example**

```
// Create client
gcoasv::EnvironmentsClient environmentsClient = gcoasv::EnvironmentsClient.Create();
// Initialize request argument(s)
string name = "";
gcoasv::Environment environment = new gcoasv::Environment();
FieldMask updateMask = new FieldMask();
// Make the request
Operation<gcoasv::Environment, gcoasv::OperationMetadata> response = environmentsClient.UpdateEnvironment(name, environment, updateMask);

// Poll until the returned long-running operation is complete
Operation<gcoasv::Environment, gcoasv::OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
gcoasv::Environment result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcoasv::Environment, gcoasv::OperationMetadata> retrievedResponse = environmentsClient.PollOnceUpdateEnvironment(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcoasv::Environment retrievedResult = retrievedResponse.Result;
}
```

### UpdateEnvironmentAsync(UpdateEnvironmentRequest, CallSettings)

```
public virtual Task<Operation<Environment, OperationMetadata>> UpdateEnvironmentAsync(UpdateEnvironmentRequest request, CallSettings callSettings = null)
```

Update an environment.

**Parameters**

**Name**

**Description**

`request`

`[UpdateEnvironmentRequest](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.UpdateEnvironmentRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Environment](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environment)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
gcoasv::EnvironmentsClient environmentsClient = await gcoasv::EnvironmentsClient.CreateAsync();
// Initialize request argument(s)
gcoasv::UpdateEnvironmentRequest request = new gcoasv::UpdateEnvironmentRequest
{
    Environment = new gcoasv::Environment(),
    Name = "",
    UpdateMask = new FieldMask(),
};
// Make the request
Operation<gcoasv::Environment, gcoasv::OperationMetadata> response = await environmentsClient.UpdateEnvironmentAsync(request);

// Poll until the returned long-running operation is complete
Operation<gcoasv::Environment, gcoasv::OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
gcoasv::Environment result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcoasv::Environment, gcoasv::OperationMetadata> retrievedResponse = await environmentsClient.PollOnceUpdateEnvironmentAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcoasv::Environment retrievedResult = retrievedResponse.Result;
}
```

### UpdateEnvironmentAsync(UpdateEnvironmentRequest, CancellationToken)

```
public virtual Task<Operation<Environment, OperationMetadata>> UpdateEnvironmentAsync(UpdateEnvironmentRequest request, CancellationToken cancellationToken)
```

Update an environment.

**Parameters**

**Name**

**Description**

`request`

`[UpdateEnvironmentRequest](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.UpdateEnvironmentRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Environment](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environment)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
gcoasv::EnvironmentsClient environmentsClient = await gcoasv::EnvironmentsClient.CreateAsync();
// Initialize request argument(s)
gcoasv::UpdateEnvironmentRequest request = new gcoasv::UpdateEnvironmentRequest
{
    Environment = new gcoasv::Environment(),
    Name = "",
    UpdateMask = new FieldMask(),
};
// Make the request
Operation<gcoasv::Environment, gcoasv::OperationMetadata> response = await environmentsClient.UpdateEnvironmentAsync(request);

// Poll until the returned long-running operation is complete
Operation<gcoasv::Environment, gcoasv::OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
gcoasv::Environment result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcoasv::Environment, gcoasv::OperationMetadata> retrievedResponse = await environmentsClient.PollOnceUpdateEnvironmentAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcoasv::Environment retrievedResult = retrievedResponse.Result;
}
```

### UpdateEnvironmentAsync(string, Environment, FieldMask, CallSettings)

```
public virtual Task<Operation<Environment, OperationMetadata>> UpdateEnvironmentAsync(string name, Environment environment, FieldMask updateMask, CallSettings callSettings = null)
```

Update an environment.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The relative resource name of the environment to update, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"

`environment`

`[Environment](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environment)`  

A patch environment. Fields specified by the `updateMask` will be copied from the patch environment into the environment under update.

`updateMask`

`[FieldMask](https://github.com/protocolbuffers/protobuf/blob/e7e8f04a4ff0df9c7233ac0fcb3c41b9b84e174c/csharp/src/Google.Protobuf/WellKnownTypes/FieldMask.cs)`  

Required. A comma-separated list of paths, relative to `Environment`, of fields to update. For example, to set the version of scikit-learn to install in the environment to 0.19.0 and to remove an existing installation of numpy, the `updateMask` parameter would include the following two `paths` values: "config.softwareConfig.pypiPackages.scikit-learn" and "config.softwareConfig.pypiPackages.numpy". The included patch environment would specify the scikit-learn version as follows:

{ "config":{ "softwareConfig":{ "pypiPackages":{ "scikit-learn":"==0.19.0" } } } }

Note that in the above example, any existing PyPI packages other than scikit-learn and numpy will be unaffected.

Only one update type may be included in a single request's `updateMask`. For example, one cannot update both the PyPI packages and labels in the same request. However, it is possible to update multiple members of a map field simultaneously in the same request. For example, to set the labels "label1" and "label2" while clearing "label3" (assuming it already exists), one can provide the paths "labels.label1", "labels.label2", and "labels.label3" and populate the patch environment as follows:

{ "labels":{ "label1":"new-label1-value" "label2":"new-label2-value" } }

Note that in the above example, any existing labels that are not included in the `updateMask` will be unaffected.

It is also possible to replace an entire map field by providing the map field's path in the `updateMask`. The new value of the field will be that which is provided in the patch environment. For example, to delete all pre-existing user-specified PyPI packages and install botocore at version 1.7.14, the `updateMask` would contain the path "config.softwareConfig.pypiPackages", and the patch environment would be the following:

{ "config":{ "softwareConfig":{ "pypiPackages":{ "botocore":"==1.7.14" } } } }

**Note:** Only the following fields can be updated:

-   `config.softwareConfig.pypiPackages`
-   Replace all custom custom PyPI packages. If a replacement package map is not included in `environment`, all custom PyPI packages are cleared. It is an error to provide both this mask and a mask specifying an individual package.
-   `config.softwareConfig.pypiPackages.`packagename
-   Update the custom PyPI package _packagename_, preserving other packages. To delete the package, include it in `updateMask`, and omit the mapping for it in `environment.config.softwareConfig.pypiPackages`. It is an error to provide both a mask of this form and the `config.softwareConfig.pypiPackages` mask.
-   `labels`
-   Replace all environment labels. If a replacement labels map is not included in `environment`, all labels are cleared. It is an error to provide both this mask and a mask specifying one or more individual labels.
-   `labels.`labelName
-   Set the label named _labelName_, while preserving other labels. To delete the label, include it in `updateMask` and omit its mapping in `environment.labels`. It is an error to provide both a mask of this form and the `labels` mask.
-   `config.nodeCount`
-   Horizontally scale the number of nodes in the environment. An integer greater than or equal to 3 must be provided in the `config.nodeCount` field. Supported for Cloud Composer environments in versions composer-1._._\-airflow-_._.\*.
-   `config.webServerNetworkAccessControl`
-   Replace the environment's current `WebServerNetworkAccessControl`.
-   `config.softwareConfig.airflowConfigOverrides`
-   Replace all Apache Airflow config overrides. If a replacement config overrides map is not included in `environment`, all config overrides are cleared. It is an error to provide both this mask and a mask specifying one or more individual config overrides.
-   `config.softwareConfig.airflowConfigOverrides.`section-name
-   Override the Apache Airflow config property _name_ in the section named _section_, preserving other properties. To delete the property override, include it in `updateMask` and omit its mapping in `environment.config.softwareConfig.airflowConfigOverrides`. It is an error to provide both a mask of this form and the `config.softwareConfig.airflowConfigOverrides` mask.
-   `config.softwareConfig.envVariables`
-   Replace all environment variables. If a replacement environment variable map is not included in `environment`, all custom environment variables are cleared.
-   `config.softwareConfig.schedulerCount`
-   Horizontally scale the number of schedulers in Airflow. A positive integer not greater than the number of nodes must be provided in the `config.softwareConfig.schedulerCount` field. Supported for Cloud Composer environments in versions composer-1._._\-airflow-2._._.
-   `config.databaseConfig.machineType`
-   Cloud SQL machine type used by Airflow database. It has to be one of: db-n1-standard-2, db-n1-standard-4, db-n1-standard-8 or db-n1-standard-16. Supported for Cloud Composer environments in versions composer-1._._\-airflow-_._.\*.
-   `config.webServerConfig.machineType`
-   Machine type on which Airflow web server is running. It has to be one of: composer-n1-webserver-2, composer-n1-webserver-4 or composer-n1-webserver-8. Supported for Cloud Composer environments in versions composer-1._._\-airflow-_._.\*.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/abdff10f2f4d045d8c6ad7107dad63163caac9f8/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Environment](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environment)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
gcoasv::EnvironmentsClient environmentsClient = await gcoasv::EnvironmentsClient.CreateAsync();
// Initialize request argument(s)
string name = "";
gcoasv::Environment environment = new gcoasv::Environment();
FieldMask updateMask = new FieldMask();
// Make the request
Operation<gcoasv::Environment, gcoasv::OperationMetadata> response = await environmentsClient.UpdateEnvironmentAsync(name, environment, updateMask);

// Poll until the returned long-running operation is complete
Operation<gcoasv::Environment, gcoasv::OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
gcoasv::Environment result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcoasv::Environment, gcoasv::OperationMetadata> retrievedResponse = await environmentsClient.PollOnceUpdateEnvironmentAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcoasv::Environment retrievedResult = retrievedResponse.Result;
}
```

### UpdateEnvironmentAsync(string, Environment, FieldMask, CancellationToken)

```
public virtual Task<Operation<Environment, OperationMetadata>> UpdateEnvironmentAsync(string name, Environment environment, FieldMask updateMask, CancellationToken cancellationToken)
```

Update an environment.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The relative resource name of the environment to update, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"

`environment`

`[Environment](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environment)`  

A patch environment. Fields specified by the `updateMask` will be copied from the patch environment into the environment under update.

`updateMask`

`[FieldMask](https://github.com/protocolbuffers/protobuf/blob/e7e8f04a4ff0df9c7233ac0fcb3c41b9b84e174c/csharp/src/Google.Protobuf/WellKnownTypes/FieldMask.cs)`  

Required. A comma-separated list of paths, relative to `Environment`, of fields to update. For example, to set the version of scikit-learn to install in the environment to 0.19.0 and to remove an existing installation of numpy, the `updateMask` parameter would include the following two `paths` values: "config.softwareConfig.pypiPackages.scikit-learn" and "config.softwareConfig.pypiPackages.numpy". The included patch environment would specify the scikit-learn version as follows:

{ "config":{ "softwareConfig":{ "pypiPackages":{ "scikit-learn":"==0.19.0" } } } }

Note that in the above example, any existing PyPI packages other than scikit-learn and numpy will be unaffected.

Only one update type may be included in a single request's `updateMask`. For example, one cannot update both the PyPI packages and labels in the same request. However, it is possible to update multiple members of a map field simultaneously in the same request. For example, to set the labels "label1" and "label2" while clearing "label3" (assuming it already exists), one can provide the paths "labels.label1", "labels.label2", and "labels.label3" and populate the patch environment as follows:

{ "labels":{ "label1":"new-label1-value" "label2":"new-label2-value" } }

Note that in the above example, any existing labels that are not included in the `updateMask` will be unaffected.

It is also possible to replace an entire map field by providing the map field's path in the `updateMask`. The new value of the field will be that which is provided in the patch environment. For example, to delete all pre-existing user-specified PyPI packages and install botocore at version 1.7.14, the `updateMask` would contain the path "config.softwareConfig.pypiPackages", and the patch environment would be the following:

{ "config":{ "softwareConfig":{ "pypiPackages":{ "botocore":"==1.7.14" } } } }

**Note:** Only the following fields can be updated:

-   `config.softwareConfig.pypiPackages`
-   Replace all custom custom PyPI packages. If a replacement package map is not included in `environment`, all custom PyPI packages are cleared. It is an error to provide both this mask and a mask specifying an individual package.
-   `config.softwareConfig.pypiPackages.`packagename
-   Update the custom PyPI package _packagename_, preserving other packages. To delete the package, include it in `updateMask`, and omit the mapping for it in `environment.config.softwareConfig.pypiPackages`. It is an error to provide both a mask of this form and the `config.softwareConfig.pypiPackages` mask.
-   `labels`
-   Replace all environment labels. If a replacement labels map is not included in `environment`, all labels are cleared. It is an error to provide both this mask and a mask specifying one or more individual labels.
-   `labels.`labelName
-   Set the label named _labelName_, while preserving other labels. To delete the label, include it in `updateMask` and omit its mapping in `environment.labels`. It is an error to provide both a mask of this form and the `labels` mask.
-   `config.nodeCount`
-   Horizontally scale the number of nodes in the environment. An integer greater than or equal to 3 must be provided in the `config.nodeCount` field. Supported for Cloud Composer environments in versions composer-1._._\-airflow-_._.\*.
-   `config.webServerNetworkAccessControl`
-   Replace the environment's current `WebServerNetworkAccessControl`.
-   `config.softwareConfig.airflowConfigOverrides`
-   Replace all Apache Airflow config overrides. If a replacement config overrides map is not included in `environment`, all config overrides are cleared. It is an error to provide both this mask and a mask specifying one or more individual config overrides.
-   `config.softwareConfig.airflowConfigOverrides.`section-name
-   Override the Apache Airflow config property _name_ in the section named _section_, preserving other properties. To delete the property override, include it in `updateMask` and omit its mapping in `environment.config.softwareConfig.airflowConfigOverrides`. It is an error to provide both a mask of this form and the `config.softwareConfig.airflowConfigOverrides` mask.
-   `config.softwareConfig.envVariables`
-   Replace all environment variables. If a replacement environment variable map is not included in `environment`, all custom environment variables are cleared.
-   `config.softwareConfig.schedulerCount`
-   Horizontally scale the number of schedulers in Airflow. A positive integer not greater than the number of nodes must be provided in the `config.softwareConfig.schedulerCount` field. Supported for Cloud Composer environments in versions composer-1._._\-airflow-2._._.
-   `config.databaseConfig.machineType`
-   Cloud SQL machine type used by Airflow database. It has to be one of: db-n1-standard-2, db-n1-standard-4, db-n1-standard-8 or db-n1-standard-16. Supported for Cloud Composer environments in versions composer-1._._\-airflow-_._.\*.
-   `config.webServerConfig.machineType`
-   Machine type on which Airflow web server is running. It has to be one of: composer-n1-webserver-2, composer-n1-webserver-4 or composer-n1-webserver-8. Supported for Cloud Composer environments in versions composer-1._._\-airflow-_._.\*.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Environment](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.Environment)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
gcoasv::EnvironmentsClient environmentsClient = await gcoasv::EnvironmentsClient.CreateAsync();
// Initialize request argument(s)
string name = "";
gcoasv::Environment environment = new gcoasv::Environment();
FieldMask updateMask = new FieldMask();
// Make the request
Operation<gcoasv::Environment, gcoasv::OperationMetadata> response = await environmentsClient.UpdateEnvironmentAsync(name, environment, updateMask);

// Poll until the returned long-running operation is complete
Operation<gcoasv::Environment, gcoasv::OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
gcoasv::Environment result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<gcoasv::Environment, gcoasv::OperationMetadata> retrievedResponse = await environmentsClient.PollOnceUpdateEnvironmentAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    gcoasv::Environment retrievedResult = retrievedResponse.Result;
}
```

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
