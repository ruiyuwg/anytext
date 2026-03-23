-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Cloud Memorystore for Redis v1 API - Class CloudRedisClient (3.6.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [3.6.0 (latest)](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.CloudRedisClient)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Redis.V1/3.5.0/Google.Cloud.Redis.V1.CloudRedisClient)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Redis.V1/3.4.0/Google.Cloud.Redis.V1.CloudRedisClient)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Redis.V1/3.3.0/Google.Cloud.Redis.V1.CloudRedisClient)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Redis.V1/3.2.0/Google.Cloud.Redis.V1.CloudRedisClient)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Redis.V1/3.1.0/Google.Cloud.Redis.V1.CloudRedisClient)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Redis.V1/3.0.0/Google.Cloud.Redis.V1.CloudRedisClient)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Redis.V1/2.5.0/Google.Cloud.Redis.V1.CloudRedisClient)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Redis.V1/2.4.0/Google.Cloud.Redis.V1.CloudRedisClient)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Redis.V1/2.3.0/Google.Cloud.Redis.V1.CloudRedisClient)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Redis.V1/2.2.0/Google.Cloud.Redis.V1.CloudRedisClient)

```
public abstract class CloudRedisClient
```

Reference documentation and code samples for the Google Cloud Memorystore for Redis v1 API class CloudRedisClient.

CloudRedis client wrapper, for convenient use.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> CloudRedisClient

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Derived Types

[CloudRedisClientImpl](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.CloudRedisClientImpl)

## Namespace

[Google.Cloud.Redis.V1](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1)

## Assembly

Google.Cloud.Redis.V1.dll

## Remarks

Configures and manages Cloud Memorystore for Redis instances

Google Cloud Memorystore for Redis v1

The `redis.googleapis.com` service implements the Google Cloud Memorystore for Redis API and defines the following resource model for managing Redis instances:

-   The service works with a collection of cloud projects, named: `/projects/*`
-   Each project has a collection of available locations, named: `/locations/*`
-   Each location has a collection of Redis instances, named: `/instances/*`
-   As such, Redis instances are resources of the form: `/projects/{project_id}/locations/{location_id}/instances/{instance_id}`

Note that location\_id must be referring to a GCP `region`; for example:

-   `projects/redpepper-1290/locations/us-central1/instances/my-redis`

## Properties

### CreateInstanceOperationsClient

```
public virtual OperationsClient CreateInstanceOperationsClient { get; }
```

The long-running operations client for `CreateInstance`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

### DefaultEndpoint

```
public static string DefaultEndpoint { get; }
```

The default endpoint for the CloudRedis service, which is a host of "redis.googleapis.com" and a port of 443.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### DefaultScopes

```
public static IReadOnlyList<string> DefaultScopes { get; }
```

The default CloudRedis scopes.

**Property Value**

**Type**

**Description**

`[IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)[string](https://learn.microsoft.com/dotnet/api/system.string)`

**Remarks**

The default CloudRedis scopes are:

-   [https://www.googleapis.com/auth/cloud-platform](https://www.googleapis.com/auth/cloud-platform)

### DeleteInstanceOperationsClient

```
public virtual OperationsClient DeleteInstanceOperationsClient { get; }
```

The long-running operations client for `DeleteInstance`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

### ExportInstanceOperationsClient

```
public virtual OperationsClient ExportInstanceOperationsClient { get; }
```

The long-running operations client for `ExportInstance`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

### FailoverInstanceOperationsClient

```
public virtual OperationsClient FailoverInstanceOperationsClient { get; }
```

The long-running operations client for `FailoverInstance`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

### GrpcClient

```
public virtual CloudRedis.CloudRedisClient GrpcClient { get; }
```

The underlying gRPC CloudRedis client

**Property Value**

**Type**

**Description**

`[CloudRedis](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.CloudRedis)[CloudRedisClient](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.CloudRedis.CloudRedisClient)`

### ImportInstanceOperationsClient

```
public virtual OperationsClient ImportInstanceOperationsClient { get; }
```

The long-running operations client for `ImportInstance`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

### LocationsClient

```
public virtual LocationsClient LocationsClient { get; }
```

The [LocationsClient](https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.Location/latest/Google.Cloud.Location.LocationsClient.html) associated with this client.

**Property Value**

**Type**

**Description**

`[LocationsClient](https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.Location/latest/Google.Cloud.Location.LocationsClient.html)`

### RescheduleMaintenanceOperationsClient

```
public virtual OperationsClient RescheduleMaintenanceOperationsClient { get; }
```

The long-running operations client for `RescheduleMaintenance`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

### ServiceMetadata

```
public static ServiceMetadata ServiceMetadata { get; }
```

The service metadata associated with this client type.

**Property Value**

**Type**

**Description**

`[ServiceMetadata](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.ServiceMetadata.html)`

### UpdateInstanceOperationsClient

```
public virtual OperationsClient UpdateInstanceOperationsClient { get; }
```

The long-running operations client for `UpdateInstance`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

### UpgradeInstanceOperationsClient

```
public virtual OperationsClient UpgradeInstanceOperationsClient { get; }
```

The long-running operations client for `UpgradeInstance`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

## Methods

### Create()

```
public static CloudRedisClient Create()
```

Synchronously creates a [CloudRedisClient](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.CloudRedisClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [CloudRedisClientBuilder](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.CloudRedisClientBuilder).

**Returns**

**Type**

**Description**

`[CloudRedisClient](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.CloudRedisClient)`

The created [CloudRedisClient](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.CloudRedisClient).

### CreateAsync(CancellationToken)

```
public static Task<CloudRedisClient> CreateAsync(CancellationToken cancellationToken = default)
```

Asynchronously creates a [CloudRedisClient](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.CloudRedisClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [CloudRedisClientBuilder](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.CloudRedisClientBuilder).

**Parameter**

**Name**

**Description**

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

The [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use while creating the client.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[CloudRedisClient](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.CloudRedisClient)`

The task representing the created [CloudRedisClient](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.CloudRedisClient).

### CreateInstance(LocationName, string, Instance, CallSettings)

```
public virtual Operation<Instance, OperationMetadata> CreateInstance(LocationName parent, string instanceId, Instance instance, CallSettings callSettings = null)
```

Creates a Redis instance based on the specified tier and memory size.

By default, the instance is accessible from the project's [default network](https://cloud.google.com/vpc/docs/vpc).

The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. Completed longrunning.Operation will contain the new instance object in the response field.

The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. The resource name of the instance location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region.

`instanceId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The logical name of the Redis instance in the customer project with the following restrictions:

-   Must contain only lowercase letters, numbers, and hyphens.
-   Must start with a letter.
-   Must be between 1-40 characters.
-   Must end with a number or a letter.
-   Must be unique within the customer project / location

`instance`

`[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)`  

Required. A Redis \[Instance\] resource

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

The RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = CloudRedisClient.Create();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
string instanceId = "";
Instance instance = new Instance();
// Make the request
Operation<Instance, OperationMetadata> response = cloudRedisClient.CreateInstance(parent, instanceId, instance);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = cloudRedisClient.PollOnceCreateInstance(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### CreateInstance(CreateInstanceRequest, CallSettings)

```
public virtual Operation<Instance, OperationMetadata> CreateInstance(CreateInstanceRequest request, CallSettings callSettings = null)
```

Creates a Redis instance based on the specified tier and memory size.

By default, the instance is accessible from the project's [default network](https://cloud.google.com/vpc/docs/vpc).

The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. Completed longrunning.Operation will contain the new instance object in the response field.

The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

**Parameters**

**Name**

**Description**

`request`

`[CreateInstanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.CreateInstanceRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

The RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = CloudRedisClient.Create();
// Initialize request argument(s)
CreateInstanceRequest request = new CreateInstanceRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    InstanceId = "",
    Instance = new Instance(),
};
// Make the request
Operation<Instance, OperationMetadata> response = cloudRedisClient.CreateInstance(request);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = cloudRedisClient.PollOnceCreateInstance(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### CreateInstance(string, string, Instance, CallSettings)

```
public virtual Operation<Instance, OperationMetadata> CreateInstance(string parent, string instanceId, Instance instance, CallSettings callSettings = null)
```

Creates a Redis instance based on the specified tier and memory size.

By default, the instance is accessible from the project's [default network](https://cloud.google.com/vpc/docs/vpc).

The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. Completed longrunning.Operation will contain the new instance object in the response field.

The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the instance location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region.

`instanceId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The logical name of the Redis instance in the customer project with the following restrictions:

-   Must contain only lowercase letters, numbers, and hyphens.
-   Must start with a letter.
-   Must be between 1-40 characters.
-   Must end with a number or a letter.
-   Must be unique within the customer project / location

`instance`

`[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)`  

Required. A Redis \[Instance\] resource

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

The RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = CloudRedisClient.Create();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
string instanceId = "";
Instance instance = new Instance();
// Make the request
Operation<Instance, OperationMetadata> response = cloudRedisClient.CreateInstance(parent, instanceId, instance);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = cloudRedisClient.PollOnceCreateInstance(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### CreateInstanceAsync(LocationName, string, Instance, CallSettings)

```
public virtual Task<Operation<Instance, OperationMetadata>> CreateInstanceAsync(LocationName parent, string instanceId, Instance instance, CallSettings callSettings = null)
```

Creates a Redis instance based on the specified tier and memory size.

By default, the instance is accessible from the project's [default network](https://cloud.google.com/vpc/docs/vpc).

The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. Completed longrunning.Operation will contain the new instance object in the response field.

The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. The resource name of the instance location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region.

`instanceId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The logical name of the Redis instance in the customer project with the following restrictions:

-   Must contain only lowercase letters, numbers, and hyphens.
-   Must start with a letter.
-   Must be between 1-40 characters.
-   Must end with a number or a letter.
-   Must be unique within the customer project / location

`instance`

`[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)`  

Required. A Redis \[Instance\] resource

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
string instanceId = "";
Instance instance = new Instance();
// Make the request
Operation<Instance, OperationMetadata> response = await cloudRedisClient.CreateInstanceAsync(parent, instanceId, instance);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceCreateInstanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### CreateInstanceAsync(LocationName, string, Instance, CancellationToken)

```
public virtual Task<Operation<Instance, OperationMetadata>> CreateInstanceAsync(LocationName parent, string instanceId, Instance instance, CancellationToken cancellationToken)
```

Creates a Redis instance based on the specified tier and memory size.

By default, the instance is accessible from the project's [default network](https://cloud.google.com/vpc/docs/vpc).

The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. Completed longrunning.Operation will contain the new instance object in the response field.

The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. The resource name of the instance location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region.

`instanceId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The logical name of the Redis instance in the customer project with the following restrictions:

-   Must contain only lowercase letters, numbers, and hyphens.
-   Must start with a letter.
-   Must be between 1-40 characters.
-   Must end with a number or a letter.
-   Must be unique within the customer project / location

`instance`

`[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)`  

Required. A Redis \[Instance\] resource

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
string instanceId = "";
Instance instance = new Instance();
// Make the request
Operation<Instance, OperationMetadata> response = await cloudRedisClient.CreateInstanceAsync(parent, instanceId, instance);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceCreateInstanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### CreateInstanceAsync(CreateInstanceRequest, CallSettings)

```
public virtual Task<Operation<Instance, OperationMetadata>> CreateInstanceAsync(CreateInstanceRequest request, CallSettings callSettings = null)
```

Creates a Redis instance based on the specified tier and memory size.

By default, the instance is accessible from the project's [default network](https://cloud.google.com/vpc/docs/vpc).

The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. Completed longrunning.Operation will contain the new instance object in the response field.

The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

**Parameters**

**Name**

**Description**

`request`

`[CreateInstanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.CreateInstanceRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
CreateInstanceRequest request = new CreateInstanceRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    InstanceId = "",
    Instance = new Instance(),
};
// Make the request
Operation<Instance, OperationMetadata> response = await cloudRedisClient.CreateInstanceAsync(request);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceCreateInstanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### CreateInstanceAsync(CreateInstanceRequest, CancellationToken)

```
public virtual Task<Operation<Instance, OperationMetadata>> CreateInstanceAsync(CreateInstanceRequest request, CancellationToken cancellationToken)
```

Creates a Redis instance based on the specified tier and memory size.

By default, the instance is accessible from the project's [default network](https://cloud.google.com/vpc/docs/vpc).

The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. Completed longrunning.Operation will contain the new instance object in the response field.

The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

**Parameters**

**Name**

**Description**

`request`

`[CreateInstanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.CreateInstanceRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
CreateInstanceRequest request = new CreateInstanceRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    InstanceId = "",
    Instance = new Instance(),
};
// Make the request
Operation<Instance, OperationMetadata> response = await cloudRedisClient.CreateInstanceAsync(request);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceCreateInstanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### CreateInstanceAsync(string, string, Instance, CallSettings)

```
public virtual Task<Operation<Instance, OperationMetadata>> CreateInstanceAsync(string parent, string instanceId, Instance instance, CallSettings callSettings = null)
```

Creates a Redis instance based on the specified tier and memory size.

By default, the instance is accessible from the project's [default network](https://cloud.google.com/vpc/docs/vpc).

The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. Completed longrunning.Operation will contain the new instance object in the response field.

The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the instance location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region.

`instanceId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The logical name of the Redis instance in the customer project with the following restrictions:

-   Must contain only lowercase letters, numbers, and hyphens.
-   Must start with a letter.
-   Must be between 1-40 characters.
-   Must end with a number or a letter.
-   Must be unique within the customer project / location

`instance`

`[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)`  

Required. A Redis \[Instance\] resource

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
string instanceId = "";
Instance instance = new Instance();
// Make the request
Operation<Instance, OperationMetadata> response = await cloudRedisClient.CreateInstanceAsync(parent, instanceId, instance);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceCreateInstanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### CreateInstanceAsync(string, string, Instance, CancellationToken)

```
public virtual Task<Operation<Instance, OperationMetadata>> CreateInstanceAsync(string parent, string instanceId, Instance instance, CancellationToken cancellationToken)
```

Creates a Redis instance based on the specified tier and memory size.

By default, the instance is accessible from the project's [default network](https://cloud.google.com/vpc/docs/vpc).

The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. Completed longrunning.Operation will contain the new instance object in the response field.

The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the instance location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region.

`instanceId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The logical name of the Redis instance in the customer project with the following restrictions:

-   Must contain only lowercase letters, numbers, and hyphens.
-   Must start with a letter.
-   Must be between 1-40 characters.
-   Must end with a number or a letter.
-   Must be unique within the customer project / location

`instance`

`[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)`  

Required. A Redis \[Instance\] resource

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
string instanceId = "";
Instance instance = new Instance();
// Make the request
Operation<Instance, OperationMetadata> response = await cloudRedisClient.CreateInstanceAsync(parent, instanceId, instance);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceCreateInstanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### DeleteInstance(DeleteInstanceRequest, CallSettings)

```
public virtual Operation<Empty, OperationMetadata> DeleteInstance(DeleteInstanceRequest request, CallSettings callSettings = null)
```

Deletes a specific Redis instance. Instance stops serving and data is deleted.

**Parameters**

**Name**

**Description**

`request`

`[DeleteInstanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.DeleteInstanceRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

The RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = CloudRedisClient.Create();
// Initialize request argument(s)
DeleteInstanceRequest request = new DeleteInstanceRequest
{
    InstanceName = InstanceName.FromProjectLocationInstance("[PROJECT]", "[LOCATION]", "[INSTANCE]"),
};
// Make the request
Operation<Empty, OperationMetadata> response = cloudRedisClient.DeleteInstance(request);

// Poll until the returned long-running operation is complete
Operation<Empty, OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, OperationMetadata> retrievedResponse = cloudRedisClient.PollOnceDeleteInstance(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeleteInstance(InstanceName, CallSettings)

```
public virtual Operation<Empty, OperationMetadata> DeleteInstance(InstanceName name, CallSettings callSettings = null)
```

Deletes a specific Redis instance. Instance stops serving and data is deleted.

**Parameters**

**Name**

**Description**

`name`

`[InstanceName](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.InstanceName)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

The RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = CloudRedisClient.Create();
// Initialize request argument(s)
InstanceName name = InstanceName.FromProjectLocationInstance("[PROJECT]", "[LOCATION]", "[INSTANCE]");
// Make the request
Operation<Empty, OperationMetadata> response = cloudRedisClient.DeleteInstance(name);

// Poll until the returned long-running operation is complete
Operation<Empty, OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, OperationMetadata> retrievedResponse = cloudRedisClient.PollOnceDeleteInstance(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeleteInstance(string, CallSettings)

```
public virtual Operation<Empty, OperationMetadata> DeleteInstance(string name, CallSettings callSettings = null)
```

Deletes a specific Redis instance. Instance stops serving and data is deleted.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

The RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = CloudRedisClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/instances/[INSTANCE]";
// Make the request
Operation<Empty, OperationMetadata> response = cloudRedisClient.DeleteInstance(name);

// Poll until the returned long-running operation is complete
Operation<Empty, OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, OperationMetadata> retrievedResponse = cloudRedisClient.PollOnceDeleteInstance(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeleteInstanceAsync(DeleteInstanceRequest, CallSettings)

```
public virtual Task<Operation<Empty, OperationMetadata>> DeleteInstanceAsync(DeleteInstanceRequest request, CallSettings callSettings = null)
```

Deletes a specific Redis instance. Instance stops serving and data is deleted.

**Parameters**

**Name**

**Description**

`request`

`[DeleteInstanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.DeleteInstanceRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
DeleteInstanceRequest request = new DeleteInstanceRequest
{
    InstanceName = InstanceName.FromProjectLocationInstance("[PROJECT]", "[LOCATION]", "[INSTANCE]"),
};
// Make the request
Operation<Empty, OperationMetadata> response = await cloudRedisClient.DeleteInstanceAsync(request);

// Poll until the returned long-running operation is complete
Operation<Empty, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceDeleteInstanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeleteInstanceAsync(DeleteInstanceRequest, CancellationToken)

```
public virtual Task<Operation<Empty, OperationMetadata>> DeleteInstanceAsync(DeleteInstanceRequest request, CancellationToken cancellationToken)
```

Deletes a specific Redis instance. Instance stops serving and data is deleted.

**Parameters**

**Name**

**Description**

`request`

`[DeleteInstanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.DeleteInstanceRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
DeleteInstanceRequest request = new DeleteInstanceRequest
{
    InstanceName = InstanceName.FromProjectLocationInstance("[PROJECT]", "[LOCATION]", "[INSTANCE]"),
};
// Make the request
Operation<Empty, OperationMetadata> response = await cloudRedisClient.DeleteInstanceAsync(request);

// Poll until the returned long-running operation is complete
Operation<Empty, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceDeleteInstanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeleteInstanceAsync(InstanceName, CallSettings)

```
public virtual Task<Operation<Empty, OperationMetadata>> DeleteInstanceAsync(InstanceName name, CallSettings callSettings = null)
```

Deletes a specific Redis instance. Instance stops serving and data is deleted.

**Parameters**

**Name**

**Description**

`name`

`[InstanceName](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.InstanceName)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
InstanceName name = InstanceName.FromProjectLocationInstance("[PROJECT]", "[LOCATION]", "[INSTANCE]");
// Make the request
Operation<Empty, OperationMetadata> response = await cloudRedisClient.DeleteInstanceAsync(name);

// Poll until the returned long-running operation is complete
Operation<Empty, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceDeleteInstanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeleteInstanceAsync(InstanceName, CancellationToken)

```
public virtual Task<Operation<Empty, OperationMetadata>> DeleteInstanceAsync(InstanceName name, CancellationToken cancellationToken)
```

Deletes a specific Redis instance. Instance stops serving and data is deleted.

**Parameters**

**Name**

**Description**

`name`

`[InstanceName](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.InstanceName)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
InstanceName name = InstanceName.FromProjectLocationInstance("[PROJECT]", "[LOCATION]", "[INSTANCE]");
// Make the request
Operation<Empty, OperationMetadata> response = await cloudRedisClient.DeleteInstanceAsync(name);

// Poll until the returned long-running operation is complete
Operation<Empty, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceDeleteInstanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeleteInstanceAsync(string, CallSettings)

```
public virtual Task<Operation<Empty, OperationMetadata>> DeleteInstanceAsync(string name, CallSettings callSettings = null)
```

Deletes a specific Redis instance. Instance stops serving and data is deleted.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/instances/[INSTANCE]";
// Make the request
Operation<Empty, OperationMetadata> response = await cloudRedisClient.DeleteInstanceAsync(name);

// Poll until the returned long-running operation is complete
Operation<Empty, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceDeleteInstanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeleteInstanceAsync(string, CancellationToken)

```
public virtual Task<Operation<Empty, OperationMetadata>> DeleteInstanceAsync(string name, CancellationToken cancellationToken)
```

Deletes a specific Redis instance. Instance stops serving and data is deleted.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/instances/[INSTANCE]";
// Make the request
Operation<Empty, OperationMetadata> response = await cloudRedisClient.DeleteInstanceAsync(name);

// Poll until the returned long-running operation is complete
Operation<Empty, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceDeleteInstanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### ExportInstance(ExportInstanceRequest, CallSettings)

```
public virtual Operation<Instance, OperationMetadata> ExportInstance(ExportInstanceRequest request, CallSettings callSettings = null)
```

Export Redis instance data into a Redis RDB format file in Cloud Storage.

Redis will continue serving during this operation.

The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

**Parameters**

**Name**

**Description**

`request`

`[ExportInstanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.ExportInstanceRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

The RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = CloudRedisClient.Create();
// Initialize request argument(s)
ExportInstanceRequest request = new ExportInstanceRequest
{
    Name = "",
    OutputConfig = new OutputConfig(),
};
// Make the request
Operation<Instance, OperationMetadata> response = cloudRedisClient.ExportInstance(request);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = cloudRedisClient.PollOnceExportInstance(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### ExportInstance(string, OutputConfig, CallSettings)

```
public virtual Operation<Instance, OperationMetadata> ExportInstance(string name, OutputConfig outputConfig, CallSettings callSettings = null)
```

Export Redis instance data into a Redis RDB format file in Cloud Storage.

Redis will continue serving during this operation.

The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`outputConfig`

`[OutputConfig](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OutputConfig)`  

Required. Specify data to be exported.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

The RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = CloudRedisClient.Create();
// Initialize request argument(s)
string name = "";
OutputConfig outputConfig = new OutputConfig();
// Make the request
Operation<Instance, OperationMetadata> response = cloudRedisClient.ExportInstance(name, outputConfig);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = cloudRedisClient.PollOnceExportInstance(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### ExportInstanceAsync(ExportInstanceRequest, CallSettings)

```
public virtual Task<Operation<Instance, OperationMetadata>> ExportInstanceAsync(ExportInstanceRequest request, CallSettings callSettings = null)
```

Export Redis instance data into a Redis RDB format file in Cloud Storage.

Redis will continue serving during this operation.

The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

**Parameters**

**Name**

**Description**

`request`

`[ExportInstanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.ExportInstanceRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
ExportInstanceRequest request = new ExportInstanceRequest
{
    Name = "",
    OutputConfig = new OutputConfig(),
};
// Make the request
Operation<Instance, OperationMetadata> response = await cloudRedisClient.ExportInstanceAsync(request);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceExportInstanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### ExportInstanceAsync(ExportInstanceRequest, CancellationToken)

```
public virtual Task<Operation<Instance, OperationMetadata>> ExportInstanceAsync(ExportInstanceRequest request, CancellationToken cancellationToken)
```

Export Redis instance data into a Redis RDB format file in Cloud Storage.

Redis will continue serving during this operation.

The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

**Parameters**

**Name**

**Description**

`request`

`[ExportInstanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.ExportInstanceRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
ExportInstanceRequest request = new ExportInstanceRequest
{
    Name = "",
    OutputConfig = new OutputConfig(),
};
// Make the request
Operation<Instance, OperationMetadata> response = await cloudRedisClient.ExportInstanceAsync(request);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceExportInstanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### ExportInstanceAsync(string, OutputConfig, CallSettings)

```
public virtual Task<Operation<Instance, OperationMetadata>> ExportInstanceAsync(string name, OutputConfig outputConfig, CallSettings callSettings = null)
```

Export Redis instance data into a Redis RDB format file in Cloud Storage.

Redis will continue serving during this operation.

The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`outputConfig`

`[OutputConfig](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OutputConfig)`  

Required. Specify data to be exported.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
string name = "";
OutputConfig outputConfig = new OutputConfig();
// Make the request
Operation<Instance, OperationMetadata> response = await cloudRedisClient.ExportInstanceAsync(name, outputConfig);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceExportInstanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### ExportInstanceAsync(string, OutputConfig, CancellationToken)

```
public virtual Task<Operation<Instance, OperationMetadata>> ExportInstanceAsync(string name, OutputConfig outputConfig, CancellationToken cancellationToken)
```

Export Redis instance data into a Redis RDB format file in Cloud Storage.

Redis will continue serving during this operation.

The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`outputConfig`

`[OutputConfig](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OutputConfig)`  

Required. Specify data to be exported.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
string name = "";
OutputConfig outputConfig = new OutputConfig();
// Make the request
Operation<Instance, OperationMetadata> response = await cloudRedisClient.ExportInstanceAsync(name, outputConfig);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceExportInstanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### FailoverInstance(FailoverInstanceRequest, CallSettings)

```
public virtual Operation<Instance, OperationMetadata> FailoverInstance(FailoverInstanceRequest request, CallSettings callSettings = null)
```

Initiates a failover of the primary node to current replica node for a specific STANDARD tier Cloud Memorystore for Redis instance.

**Parameters**

**Name**

**Description**

`request`

`[FailoverInstanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.FailoverInstanceRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

The RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = CloudRedisClient.Create();
// Initialize request argument(s)
FailoverInstanceRequest request = new FailoverInstanceRequest
{
    InstanceName = InstanceName.FromProjectLocationInstance("[PROJECT]", "[LOCATION]", "[INSTANCE]"),
    DataProtectionMode = FailoverInstanceRequest.Types.DataProtectionMode.Unspecified,
};
// Make the request
Operation<Instance, OperationMetadata> response = cloudRedisClient.FailoverInstance(request);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = cloudRedisClient.PollOnceFailoverInstance(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### FailoverInstance(InstanceName, DataProtectionMode, CallSettings)

```
public virtual Operation<Instance, OperationMetadata> FailoverInstance(InstanceName name, FailoverInstanceRequest.Types.DataProtectionMode dataProtectionMode, CallSettings callSettings = null)
```

Initiates a failover of the primary node to current replica node for a specific STANDARD tier Cloud Memorystore for Redis instance.

**Parameters**

**Name**

**Description**

`name`

`[InstanceName](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.InstanceName)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`dataProtectionMode`

`[FailoverInstanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.FailoverInstanceRequest)[Types](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.FailoverInstanceRequest.Types)[DataProtectionMode](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.FailoverInstanceRequest.Types.DataProtectionMode)`  

Optional. Available data protection modes that the user can choose. If it's unspecified, data protection mode will be LIMITED\_DATA\_LOSS by default.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

The RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = CloudRedisClient.Create();
// Initialize request argument(s)
InstanceName name = new InstanceName("[PROJECT]", "[LOCATION]", "[INSTANCE]");
FailoverInstanceRequest.Types.DataProtectionMode dataProtectionMode = FailoverInstanceRequest.Types.DataProtectionMode.Unspecified;
// Make the request
Operation<Instance, OperationMetadata> response =
    cloudRedisClient.FailoverInstance(name, dataProtectionMode);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse =
    response.PollUntilCompleted();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse =
    cloudRedisClient.PollOnceFailoverInstance(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### FailoverInstance(string, DataProtectionMode, CallSettings)

```
public virtual Operation<Instance, OperationMetadata> FailoverInstance(string name, FailoverInstanceRequest.Types.DataProtectionMode dataProtectionMode, CallSettings callSettings = null)
```

Initiates a failover of the primary node to current replica node for a specific STANDARD tier Cloud Memorystore for Redis instance.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`dataProtectionMode`

`[FailoverInstanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.FailoverInstanceRequest)[Types](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.FailoverInstanceRequest.Types)[DataProtectionMode](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.FailoverInstanceRequest.Types.DataProtectionMode)`  

Optional. Available data protection modes that the user can choose. If it's unspecified, data protection mode will be LIMITED\_DATA\_LOSS by default.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

The RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = CloudRedisClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/instances/[INSTANCE]";
FailoverInstanceRequest.Types.DataProtectionMode dataProtectionMode = FailoverInstanceRequest.Types.DataProtectionMode.Unspecified;
// Make the request
Operation<Instance, OperationMetadata> response = cloudRedisClient.FailoverInstance(name, dataProtectionMode);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = cloudRedisClient.PollOnceFailoverInstance(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### FailoverInstanceAsync(FailoverInstanceRequest, CallSettings)

```
public virtual Task<Operation<Instance, OperationMetadata>> FailoverInstanceAsync(FailoverInstanceRequest request, CallSettings callSettings = null)
```

Initiates a failover of the primary node to current replica node for a specific STANDARD tier Cloud Memorystore for Redis instance.

**Parameters**

**Name**

**Description**

`request`

`[FailoverInstanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.FailoverInstanceRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
FailoverInstanceRequest request = new FailoverInstanceRequest
{
    InstanceName = InstanceName.FromProjectLocationInstance("[PROJECT]", "[LOCATION]", "[INSTANCE]"),
    DataProtectionMode = FailoverInstanceRequest.Types.DataProtectionMode.Unspecified,
};
// Make the request
Operation<Instance, OperationMetadata> response = await cloudRedisClient.FailoverInstanceAsync(request);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceFailoverInstanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### FailoverInstanceAsync(FailoverInstanceRequest, CancellationToken)

```
public virtual Task<Operation<Instance, OperationMetadata>> FailoverInstanceAsync(FailoverInstanceRequest request, CancellationToken cancellationToken)
```

Initiates a failover of the primary node to current replica node for a specific STANDARD tier Cloud Memorystore for Redis instance.

**Parameters**

**Name**

**Description**

`request`

`[FailoverInstanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.FailoverInstanceRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
FailoverInstanceRequest request = new FailoverInstanceRequest
{
    InstanceName = InstanceName.FromProjectLocationInstance("[PROJECT]", "[LOCATION]", "[INSTANCE]"),
    DataProtectionMode = FailoverInstanceRequest.Types.DataProtectionMode.Unspecified,
};
// Make the request
Operation<Instance, OperationMetadata> response = await cloudRedisClient.FailoverInstanceAsync(request);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceFailoverInstanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### FailoverInstanceAsync(InstanceName, DataProtectionMode, CallSettings)

```
public virtual Task<Operation<Instance, OperationMetadata>> FailoverInstanceAsync(InstanceName name, FailoverInstanceRequest.Types.DataProtectionMode dataProtectionMode, CallSettings callSettings = null)
```

Initiates a failover of the primary node to current replica node for a specific STANDARD tier Cloud Memorystore for Redis instance.

**Parameters**

**Name**

**Description**

`name`

`[InstanceName](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.InstanceName)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`dataProtectionMode`

`[FailoverInstanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.FailoverInstanceRequest)[Types](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.FailoverInstanceRequest.Types)[DataProtectionMode](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.FailoverInstanceRequest.Types.DataProtectionMode)`  

Optional. Available data protection modes that the user can choose. If it's unspecified, data protection mode will be LIMITED\_DATA\_LOSS by default.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
InstanceName name = new InstanceName("[PROJECT]", "[LOCATION]", "[INSTANCE]");
FailoverInstanceRequest.Types.DataProtectionMode dataProtectionMode = FailoverInstanceRequest.Types.DataProtectionMode.Unspecified;
// Make the request
Operation<Instance, OperationMetadata> response =
    await cloudRedisClient.FailoverInstanceAsync(name, dataProtectionMode);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse =
    await response.PollUntilCompletedAsync();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse =
    await cloudRedisClient.PollOnceFailoverInstanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### FailoverInstanceAsync(InstanceName, DataProtectionMode, CancellationToken)

```
public virtual Task<Operation<Instance, OperationMetadata>> FailoverInstanceAsync(InstanceName name, FailoverInstanceRequest.Types.DataProtectionMode dataProtectionMode, CancellationToken cancellationToken)
```

Initiates a failover of the primary node to current replica node for a specific STANDARD tier Cloud Memorystore for Redis instance.

**Parameters**

**Name**

**Description**

`name`

`[InstanceName](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.InstanceName)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`dataProtectionMode`

`[FailoverInstanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.FailoverInstanceRequest)[Types](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.FailoverInstanceRequest.Types)[DataProtectionMode](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.FailoverInstanceRequest.Types.DataProtectionMode)`  

Optional. Available data protection modes that the user can choose. If it's unspecified, data protection mode will be LIMITED\_DATA\_LOSS by default.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
InstanceName name = new InstanceName("[PROJECT]", "[LOCATION]", "[INSTANCE]");
FailoverInstanceRequest.Types.DataProtectionMode dataProtectionMode = FailoverInstanceRequest.Types.DataProtectionMode.Unspecified;
// Make the request
Operation<Instance, OperationMetadata> response =
    await cloudRedisClient.FailoverInstanceAsync(name, dataProtectionMode);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse =
    await response.PollUntilCompletedAsync();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse =
    await cloudRedisClient.PollOnceFailoverInstanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### FailoverInstanceAsync(string, DataProtectionMode, CallSettings)

```
public virtual Task<Operation<Instance, OperationMetadata>> FailoverInstanceAsync(string name, FailoverInstanceRequest.Types.DataProtectionMode dataProtectionMode, CallSettings callSettings = null)
```

Initiates a failover of the primary node to current replica node for a specific STANDARD tier Cloud Memorystore for Redis instance.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`dataProtectionMode`

`[FailoverInstanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.FailoverInstanceRequest)[Types](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.FailoverInstanceRequest.Types)[DataProtectionMode](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.FailoverInstanceRequest.Types.DataProtectionMode)`  

Optional. Available data protection modes that the user can choose. If it's unspecified, data protection mode will be LIMITED\_DATA\_LOSS by default.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/instances/[INSTANCE]";
FailoverInstanceRequest.Types.DataProtectionMode dataProtectionMode = FailoverInstanceRequest.Types.DataProtectionMode.Unspecified;
// Make the request
Operation<Instance, OperationMetadata> response = await cloudRedisClient.FailoverInstanceAsync(name, dataProtectionMode);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceFailoverInstanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### FailoverInstanceAsync(string, DataProtectionMode, CancellationToken)

```
public virtual Task<Operation<Instance, OperationMetadata>> FailoverInstanceAsync(string name, FailoverInstanceRequest.Types.DataProtectionMode dataProtectionMode, CancellationToken cancellationToken)
```

Initiates a failover of the primary node to current replica node for a specific STANDARD tier Cloud Memorystore for Redis instance.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`dataProtectionMode`

`[FailoverInstanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.FailoverInstanceRequest)[Types](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.FailoverInstanceRequest.Types)[DataProtectionMode](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.FailoverInstanceRequest.Types.DataProtectionMode)`  

Optional. Available data protection modes that the user can choose. If it's unspecified, data protection mode will be LIMITED\_DATA\_LOSS by default.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/instances/[INSTANCE]";
FailoverInstanceRequest.Types.DataProtectionMode dataProtectionMode = FailoverInstanceRequest.Types.DataProtectionMode.Unspecified;
// Make the request
Operation<Instance, OperationMetadata> response = await cloudRedisClient.FailoverInstanceAsync(name, dataProtectionMode);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceFailoverInstanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### GetInstance(GetInstanceRequest, CallSettings)

```
public virtual Instance GetInstance(GetInstanceRequest request, CallSettings callSettings = null)
```

Gets the details of a specific Redis instance.

**Parameters**

**Name**

**Description**

`request`

`[GetInstanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.GetInstanceRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)`

The RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = CloudRedisClient.Create();
// Initialize request argument(s)
GetInstanceRequest request = new GetInstanceRequest
{
    InstanceName = InstanceName.FromProjectLocationInstance("[PROJECT]", "[LOCATION]", "[INSTANCE]"),
};
// Make the request
Instance response = cloudRedisClient.GetInstance(request);
```

### GetInstance(InstanceName, CallSettings)

```
public virtual Instance GetInstance(InstanceName name, CallSettings callSettings = null)
```

Gets the details of a specific Redis instance.

**Parameters**

**Name**

**Description**

`name`

`[InstanceName](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.InstanceName)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)`

The RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = CloudRedisClient.Create();
// Initialize request argument(s)
InstanceName name = InstanceName.FromProjectLocationInstance("[PROJECT]", "[LOCATION]", "[INSTANCE]");
// Make the request
Instance response = cloudRedisClient.GetInstance(name);
```

### GetInstance(string, CallSettings)

```
public virtual Instance GetInstance(string name, CallSettings callSettings = null)
```

Gets the details of a specific Redis instance.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)`

The RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = CloudRedisClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/instances/[INSTANCE]";
// Make the request
Instance response = cloudRedisClient.GetInstance(name);
```

### GetInstanceAsync(GetInstanceRequest, CallSettings)

```
public virtual Task<Instance> GetInstanceAsync(GetInstanceRequest request, CallSettings callSettings = null)
```

Gets the details of a specific Redis instance.

**Parameters**

**Name**

**Description**

`request`

`[GetInstanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.GetInstanceRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
GetInstanceRequest request = new GetInstanceRequest
{
    InstanceName = InstanceName.FromProjectLocationInstance("[PROJECT]", "[LOCATION]", "[INSTANCE]"),
};
// Make the request
Instance response = await cloudRedisClient.GetInstanceAsync(request);
```

### GetInstanceAsync(GetInstanceRequest, CancellationToken)

```
public virtual Task<Instance> GetInstanceAsync(GetInstanceRequest request, CancellationToken cancellationToken)
```

Gets the details of a specific Redis instance.

**Parameters**

**Name**

**Description**

`request`

`[GetInstanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.GetInstanceRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
GetInstanceRequest request = new GetInstanceRequest
{
    InstanceName = InstanceName.FromProjectLocationInstance("[PROJECT]", "[LOCATION]", "[INSTANCE]"),
};
// Make the request
Instance response = await cloudRedisClient.GetInstanceAsync(request);
```

### GetInstanceAsync(InstanceName, CallSettings)

```
public virtual Task<Instance> GetInstanceAsync(InstanceName name, CallSettings callSettings = null)
```

Gets the details of a specific Redis instance.

**Parameters**

**Name**

**Description**

`name`

`[InstanceName](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.InstanceName)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
InstanceName name = InstanceName.FromProjectLocationInstance("[PROJECT]", "[LOCATION]", "[INSTANCE]");
// Make the request
Instance response = await cloudRedisClient.GetInstanceAsync(name);
```

### GetInstanceAsync(InstanceName, CancellationToken)

```
public virtual Task<Instance> GetInstanceAsync(InstanceName name, CancellationToken cancellationToken)
```

Gets the details of a specific Redis instance.

**Parameters**

**Name**

**Description**

`name`

`[InstanceName](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.InstanceName)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
InstanceName name = InstanceName.FromProjectLocationInstance("[PROJECT]", "[LOCATION]", "[INSTANCE]");
// Make the request
Instance response = await cloudRedisClient.GetInstanceAsync(name);
```

### GetInstanceAsync(string, CallSettings)

```
public virtual Task<Instance> GetInstanceAsync(string name, CallSettings callSettings = null)
```

Gets the details of a specific Redis instance.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/instances/[INSTANCE]";
// Make the request
Instance response = await cloudRedisClient.GetInstanceAsync(name);
```

### GetInstanceAsync(string, CancellationToken)

```
public virtual Task<Instance> GetInstanceAsync(string name, CancellationToken cancellationToken)
```

Gets the details of a specific Redis instance.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/instances/[INSTANCE]";
// Make the request
Instance response = await cloudRedisClient.GetInstanceAsync(name);
```

### GetInstanceAuthString(GetInstanceAuthStringRequest, CallSettings)

```
public virtual InstanceAuthString GetInstanceAuthString(GetInstanceAuthStringRequest request, CallSettings callSettings = null)
```

Gets the AUTH string for a Redis instance. If AUTH is not enabled for the instance the response will be empty. This information is not included in the details returned to GetInstance.

**Parameters**

**Name**

**Description**

`request`

`[GetInstanceAuthStringRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.GetInstanceAuthStringRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[InstanceAuthString](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.InstanceAuthString)`

The RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = CloudRedisClient.Create();
// Initialize request argument(s)
GetInstanceAuthStringRequest request = new GetInstanceAuthStringRequest
{
    InstanceName = InstanceName.FromProjectLocationInstance("[PROJECT]", "[LOCATION]", "[INSTANCE]"),
};
// Make the request
InstanceAuthString response = cloudRedisClient.GetInstanceAuthString(request);
```

### GetInstanceAuthString(InstanceName, CallSettings)

```
public virtual InstanceAuthString GetInstanceAuthString(InstanceName name, CallSettings callSettings = null)
```

Gets the AUTH string for a Redis instance. If AUTH is not enabled for the instance the response will be empty. This information is not included in the details returned to GetInstance.

**Parameters**

**Name**

**Description**

`name`

`[InstanceName](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.InstanceName)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[InstanceAuthString](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.InstanceAuthString)`

The RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = CloudRedisClient.Create();
// Initialize request argument(s)
InstanceName name = InstanceName.FromProjectLocationInstance("[PROJECT]", "[LOCATION]", "[INSTANCE]");
// Make the request
InstanceAuthString response = cloudRedisClient.GetInstanceAuthString(name);
```

### GetInstanceAuthString(string, CallSettings)

```
public virtual InstanceAuthString GetInstanceAuthString(string name, CallSettings callSettings = null)
```

Gets the AUTH string for a Redis instance. If AUTH is not enabled for the instance the response will be empty. This information is not included in the details returned to GetInstance.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[InstanceAuthString](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.InstanceAuthString)`

The RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = CloudRedisClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/instances/[INSTANCE]";
// Make the request
InstanceAuthString response = cloudRedisClient.GetInstanceAuthString(name);
```

### GetInstanceAuthStringAsync(GetInstanceAuthStringRequest, CallSettings)

```
public virtual Task<InstanceAuthString> GetInstanceAuthStringAsync(GetInstanceAuthStringRequest request, CallSettings callSettings = null)
```

Gets the AUTH string for a Redis instance. If AUTH is not enabled for the instance the response will be empty. This information is not included in the details returned to GetInstance.

**Parameters**

**Name**

**Description**

`request`

`[GetInstanceAuthStringRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.GetInstanceAuthStringRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[InstanceAuthString](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.InstanceAuthString)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
GetInstanceAuthStringRequest request = new GetInstanceAuthStringRequest
{
    InstanceName = InstanceName.FromProjectLocationInstance("[PROJECT]", "[LOCATION]", "[INSTANCE]"),
};
// Make the request
InstanceAuthString response = await cloudRedisClient.GetInstanceAuthStringAsync(request);
```

### GetInstanceAuthStringAsync(GetInstanceAuthStringRequest, CancellationToken)

```
public virtual Task<InstanceAuthString> GetInstanceAuthStringAsync(GetInstanceAuthStringRequest request, CancellationToken cancellationToken)
```

Gets the AUTH string for a Redis instance. If AUTH is not enabled for the instance the response will be empty. This information is not included in the details returned to GetInstance.

**Parameters**

**Name**

**Description**

`request`

`[GetInstanceAuthStringRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.GetInstanceAuthStringRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[InstanceAuthString](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.InstanceAuthString)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
GetInstanceAuthStringRequest request = new GetInstanceAuthStringRequest
{
    InstanceName = InstanceName.FromProjectLocationInstance("[PROJECT]", "[LOCATION]", "[INSTANCE]"),
};
// Make the request
InstanceAuthString response = await cloudRedisClient.GetInstanceAuthStringAsync(request);
```

### GetInstanceAuthStringAsync(InstanceName, CallSettings)

```
public virtual Task<InstanceAuthString> GetInstanceAuthStringAsync(InstanceName name, CallSettings callSettings = null)
```

Gets the AUTH string for a Redis instance. If AUTH is not enabled for the instance the response will be empty. This information is not included in the details returned to GetInstance.

**Parameters**

**Name**

**Description**

`name`

`[InstanceName](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.InstanceName)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[InstanceAuthString](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.InstanceAuthString)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
InstanceName name = InstanceName.FromProjectLocationInstance("[PROJECT]", "[LOCATION]", "[INSTANCE]");
// Make the request
InstanceAuthString response = await cloudRedisClient.GetInstanceAuthStringAsync(name);
```

### GetInstanceAuthStringAsync(InstanceName, CancellationToken)

```
public virtual Task<InstanceAuthString> GetInstanceAuthStringAsync(InstanceName name, CancellationToken cancellationToken)
```

Gets the AUTH string for a Redis instance. If AUTH is not enabled for the instance the response will be empty. This information is not included in the details returned to GetInstance.

**Parameters**

**Name**

**Description**

`name`

`[InstanceName](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.InstanceName)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[InstanceAuthString](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.InstanceAuthString)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
InstanceName name = InstanceName.FromProjectLocationInstance("[PROJECT]", "[LOCATION]", "[INSTANCE]");
// Make the request
InstanceAuthString response = await cloudRedisClient.GetInstanceAuthStringAsync(name);
```

### GetInstanceAuthStringAsync(string, CallSettings)

```
public virtual Task<InstanceAuthString> GetInstanceAuthStringAsync(string name, CallSettings callSettings = null)
```

Gets the AUTH string for a Redis instance. If AUTH is not enabled for the instance the response will be empty. This information is not included in the details returned to GetInstance.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[InstanceAuthString](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.InstanceAuthString)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/instances/[INSTANCE]";
// Make the request
InstanceAuthString response = await cloudRedisClient.GetInstanceAuthStringAsync(name);
```

### GetInstanceAuthStringAsync(string, CancellationToken)

```
public virtual Task<InstanceAuthString> GetInstanceAuthStringAsync(string name, CancellationToken cancellationToken)
```

Gets the AUTH string for a Redis instance. If AUTH is not enabled for the instance the response will be empty. This information is not included in the details returned to GetInstance.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[InstanceAuthString](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.InstanceAuthString)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/instances/[INSTANCE]";
// Make the request
InstanceAuthString response = await cloudRedisClient.GetInstanceAuthStringAsync(name);
```

### ImportInstance(ImportInstanceRequest, CallSettings)

```
public virtual Operation<Instance, OperationMetadata> ImportInstance(ImportInstanceRequest request, CallSettings callSettings = null)
```

Import a Redis RDB snapshot file from Cloud Storage into a Redis instance.

Redis may stop serving during this operation. Instance state will be IMPORTING for entire operation. When complete, the instance will contain only data from the imported file.

The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

**Parameters**

**Name**

**Description**

`request`

`[ImportInstanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.ImportInstanceRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

The RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = CloudRedisClient.Create();
// Initialize request argument(s)
ImportInstanceRequest request = new ImportInstanceRequest
{
    Name = "",
    InputConfig = new InputConfig(),
};
// Make the request
Operation<Instance, OperationMetadata> response = cloudRedisClient.ImportInstance(request);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = cloudRedisClient.PollOnceImportInstance(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### ImportInstance(string, InputConfig, CallSettings)

```
public virtual Operation<Instance, OperationMetadata> ImportInstance(string name, InputConfig inputConfig, CallSettings callSettings = null)
```

Import a Redis RDB snapshot file from Cloud Storage into a Redis instance.

Redis may stop serving during this operation. Instance state will be IMPORTING for entire operation. When complete, the instance will contain only data from the imported file.

The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`inputConfig`

`[InputConfig](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.InputConfig)`  

Required. Specify data to be imported.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

The RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = CloudRedisClient.Create();
// Initialize request argument(s)
string name = "";
InputConfig inputConfig = new InputConfig();
// Make the request
Operation<Instance, OperationMetadata> response = cloudRedisClient.ImportInstance(name, inputConfig);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = cloudRedisClient.PollOnceImportInstance(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### ImportInstanceAsync(ImportInstanceRequest, CallSettings)

```
public virtual Task<Operation<Instance, OperationMetadata>> ImportInstanceAsync(ImportInstanceRequest request, CallSettings callSettings = null)
```

Import a Redis RDB snapshot file from Cloud Storage into a Redis instance.

Redis may stop serving during this operation. Instance state will be IMPORTING for entire operation. When complete, the instance will contain only data from the imported file.

The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

**Parameters**

**Name**

**Description**

`request`

`[ImportInstanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.ImportInstanceRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
ImportInstanceRequest request = new ImportInstanceRequest
{
    Name = "",
    InputConfig = new InputConfig(),
};
// Make the request
Operation<Instance, OperationMetadata> response = await cloudRedisClient.ImportInstanceAsync(request);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceImportInstanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### ImportInstanceAsync(ImportInstanceRequest, CancellationToken)

```
public virtual Task<Operation<Instance, OperationMetadata>> ImportInstanceAsync(ImportInstanceRequest request, CancellationToken cancellationToken)
```

Import a Redis RDB snapshot file from Cloud Storage into a Redis instance.

Redis may stop serving during this operation. Instance state will be IMPORTING for entire operation. When complete, the instance will contain only data from the imported file.

The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

**Parameters**

**Name**

**Description**

`request`

`[ImportInstanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.ImportInstanceRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
ImportInstanceRequest request = new ImportInstanceRequest
{
    Name = "",
    InputConfig = new InputConfig(),
};
// Make the request
Operation<Instance, OperationMetadata> response = await cloudRedisClient.ImportInstanceAsync(request);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceImportInstanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### ImportInstanceAsync(string, InputConfig, CallSettings)

```
public virtual Task<Operation<Instance, OperationMetadata>> ImportInstanceAsync(string name, InputConfig inputConfig, CallSettings callSettings = null)
```

Import a Redis RDB snapshot file from Cloud Storage into a Redis instance.

Redis may stop serving during this operation. Instance state will be IMPORTING for entire operation. When complete, the instance will contain only data from the imported file.

The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`inputConfig`

`[InputConfig](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.InputConfig)`  

Required. Specify data to be imported.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
string name = "";
InputConfig inputConfig = new InputConfig();
// Make the request
Operation<Instance, OperationMetadata> response = await cloudRedisClient.ImportInstanceAsync(name, inputConfig);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceImportInstanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### ImportInstanceAsync(string, InputConfig, CancellationToken)

```
public virtual Task<Operation<Instance, OperationMetadata>> ImportInstanceAsync(string name, InputConfig inputConfig, CancellationToken cancellationToken)
```

Import a Redis RDB snapshot file from Cloud Storage into a Redis instance.

Redis may stop serving during this operation. Instance state will be IMPORTING for entire operation. When complete, the instance will contain only data from the imported file.

The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`inputConfig`

`[InputConfig](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.InputConfig)`  

Required. Specify data to be imported.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
string name = "";
InputConfig inputConfig = new InputConfig();
// Make the request
Operation<Instance, OperationMetadata> response = await cloudRedisClient.ImportInstanceAsync(name, inputConfig);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceImportInstanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### ListInstances(LocationName, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListInstancesResponse, Instance> ListInstances(LocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists all Redis instances owned by a project in either the specified location (region) or all locations.

The location should have the following format:

-   `projects/{project_id}/locations/{location_id}`

If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. The resource name of the instance location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region.

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)[ListInstancesResponse](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.ListInstancesResponse)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)`

A pageable sequence of [Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance) resources.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = CloudRedisClient.Create();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
// Make the request
PagedEnumerable<ListInstancesResponse, Instance> response = cloudRedisClient.ListInstances(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (Instance item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListInstancesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Instance item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Instance> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Instance item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListInstances(ListInstancesRequest, CallSettings)

```
public virtual PagedEnumerable<ListInstancesResponse, Instance> ListInstances(ListInstancesRequest request, CallSettings callSettings = null)
```

Lists all Redis instances owned by a project in either the specified location (region) or all locations.

The location should have the following format:

-   `projects/{project_id}/locations/{location_id}`

If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.

**Parameters**

**Name**

**Description**

`request`

`[ListInstancesRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.ListInstancesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)[ListInstancesResponse](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.ListInstancesResponse)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)`

A pageable sequence of [Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance) resources.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = CloudRedisClient.Create();
// Initialize request argument(s)
ListInstancesRequest request = new ListInstancesRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
};
// Make the request
PagedEnumerable<ListInstancesResponse, Instance> response = cloudRedisClient.ListInstances(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (Instance item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListInstancesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Instance item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Instance> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Instance item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListInstances(string, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListInstancesResponse, Instance> ListInstances(string parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists all Redis instances owned by a project in either the specified location (region) or all locations.

The location should have the following format:

-   `projects/{project_id}/locations/{location_id}`

If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the instance location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region.

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)[ListInstancesResponse](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.ListInstancesResponse)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)`

A pageable sequence of [Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance) resources.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = CloudRedisClient.Create();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
// Make the request
PagedEnumerable<ListInstancesResponse, Instance> response = cloudRedisClient.ListInstances(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (Instance item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListInstancesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Instance item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Instance> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Instance item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListInstancesAsync(LocationName, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListInstancesResponse, Instance> ListInstancesAsync(LocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists all Redis instances owned by a project in either the specified location (region) or all locations.

The location should have the following format:

-   `projects/{project_id}/locations/{location_id}`

If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`  

Required. The resource name of the instance location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region.

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)[ListInstancesResponse](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.ListInstancesResponse)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)`

A pageable asynchronous sequence of [Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance) resources.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
// Make the request
PagedAsyncEnumerable<ListInstancesResponse, Instance> response = cloudRedisClient.ListInstancesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((Instance item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListInstancesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Instance item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Instance> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Instance item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListInstancesAsync(ListInstancesRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListInstancesResponse, Instance> ListInstancesAsync(ListInstancesRequest request, CallSettings callSettings = null)
```

Lists all Redis instances owned by a project in either the specified location (region) or all locations.

The location should have the following format:

-   `projects/{project_id}/locations/{location_id}`

If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.

**Parameters**

**Name**

**Description**

`request`

`[ListInstancesRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.ListInstancesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)[ListInstancesResponse](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.ListInstancesResponse)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)`

A pageable asynchronous sequence of [Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance) resources.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
ListInstancesRequest request = new ListInstancesRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
};
// Make the request
PagedAsyncEnumerable<ListInstancesResponse, Instance> response = cloudRedisClient.ListInstancesAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((Instance item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListInstancesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Instance item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Instance> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Instance item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListInstancesAsync(string, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListInstancesResponse, Instance> ListInstancesAsync(string parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists all Redis instances owned by a project in either the specified location (region) or all locations.

The location should have the following format:

-   `projects/{project_id}/locations/{location_id}`

If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the instance location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region.

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)[ListInstancesResponse](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.ListInstancesResponse)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)`

A pageable asynchronous sequence of [Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance) resources.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
// Make the request
PagedAsyncEnumerable<ListInstancesResponse, Instance> response = cloudRedisClient.ListInstancesAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((Instance item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListInstancesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Instance item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Instance> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Instance item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### PollOnceCreateInstance(string, CallSettings)

```
public virtual Operation<Instance, OperationMetadata> PollOnceCreateInstance(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `CreateInstance`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

The result of polling the operation.

### PollOnceCreateInstanceAsync(string, CallSettings)

```
public virtual Task<Operation<Instance, OperationMetadata>> PollOnceCreateInstanceAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `CreateInstance`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A task representing the result of polling the operation.

### PollOnceDeleteInstance(string, CallSettings)

```
public virtual Operation<Empty, OperationMetadata> PollOnceDeleteInstance(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `DeleteInstance`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

The result of polling the operation.

### PollOnceDeleteInstanceAsync(string, CallSettings)

```
public virtual Task<Operation<Empty, OperationMetadata>> PollOnceDeleteInstanceAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `DeleteInstance`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A task representing the result of polling the operation.

### PollOnceExportInstance(string, CallSettings)

```
public virtual Operation<Instance, OperationMetadata> PollOnceExportInstance(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `ExportInstance`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

The result of polling the operation.

### PollOnceExportInstanceAsync(string, CallSettings)

```
public virtual Task<Operation<Instance, OperationMetadata>> PollOnceExportInstanceAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `ExportInstance`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A task representing the result of polling the operation.

### PollOnceFailoverInstance(string, CallSettings)

```
public virtual Operation<Instance, OperationMetadata> PollOnceFailoverInstance(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `FailoverInstance`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

The result of polling the operation.

### PollOnceFailoverInstanceAsync(string, CallSettings)

```
public virtual Task<Operation<Instance, OperationMetadata>> PollOnceFailoverInstanceAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `FailoverInstance`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A task representing the result of polling the operation.

### PollOnceImportInstance(string, CallSettings)

```
public virtual Operation<Instance, OperationMetadata> PollOnceImportInstance(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `ImportInstance`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

The result of polling the operation.

### PollOnceImportInstanceAsync(string, CallSettings)

```
public virtual Task<Operation<Instance, OperationMetadata>> PollOnceImportInstanceAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `ImportInstance`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A task representing the result of polling the operation.

### PollOnceRescheduleMaintenance(string, CallSettings)

```
public virtual Operation<Instance, OperationMetadata> PollOnceRescheduleMaintenance(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `RescheduleMaintenance` .

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

The result of polling the operation.

### PollOnceRescheduleMaintenanceAsync(string, CallSettings)

```
public virtual Task<Operation<Instance, OperationMetadata>> PollOnceRescheduleMaintenanceAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `RescheduleMaintenance`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A task representing the result of polling the operation.

### PollOnceUpdateInstance(string, CallSettings)

```
public virtual Operation<Instance, OperationMetadata> PollOnceUpdateInstance(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `UpdateInstance`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

The result of polling the operation.

### PollOnceUpdateInstanceAsync(string, CallSettings)

```
public virtual Task<Operation<Instance, OperationMetadata>> PollOnceUpdateInstanceAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `UpdateInstance`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A task representing the result of polling the operation.

### PollOnceUpgradeInstance(string, CallSettings)

```
public virtual Operation<Instance, OperationMetadata> PollOnceUpgradeInstance(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `UpgradeInstance`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

The result of polling the operation.

### PollOnceUpgradeInstanceAsync(string, CallSettings)

```
public virtual Task<Operation<Instance, OperationMetadata>> PollOnceUpgradeInstanceAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `UpgradeInstance`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A task representing the result of polling the operation.

### RescheduleMaintenance(InstanceName, RescheduleType, Timestamp, CallSettings)

```
public virtual Operation<Instance, OperationMetadata> RescheduleMaintenance(InstanceName name, RescheduleMaintenanceRequest.Types.RescheduleType rescheduleType, Timestamp scheduleTime, CallSettings callSettings = null)
```

Reschedule maintenance for a given instance in a given project and location.

**Parameters**

**Name**

**Description**

`name`

`[InstanceName](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.InstanceName)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`rescheduleType`

`[RescheduleMaintenanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.RescheduleMaintenanceRequest)[Types](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.RescheduleMaintenanceRequest.Types)[RescheduleType](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.RescheduleMaintenanceRequest.Types.RescheduleType)`  

Required. If reschedule type is SPECIFIC\_TIME, must set up schedule\_time as well.

`scheduleTime`

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`  

Optional. Timestamp when the maintenance shall be rescheduled to if reschedule\_type=SPECIFIC\_TIME, in RFC 3339 format, for example `2012-11-15T16:19:00.094Z`.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

The RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = CloudRedisClient.Create();
// Initialize request argument(s)
InstanceName name = InstanceName.FromProjectLocationInstance("[PROJECT]", "[LOCATION]", "[INSTANCE]");
RescheduleMaintenanceRequest.Types.RescheduleType rescheduleType = RescheduleMaintenanceRequest.Types.RescheduleType.Unspecified;
Timestamp scheduleTime = new Timestamp();
// Make the request
Operation<Instance, OperationMetadata> response = cloudRedisClient.RescheduleMaintenance(name, rescheduleType, scheduleTime);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = cloudRedisClient.PollOnceRescheduleMaintenance(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### RescheduleMaintenance(RescheduleMaintenanceRequest, CallSettings)

```
public virtual Operation<Instance, OperationMetadata> RescheduleMaintenance(RescheduleMaintenanceRequest request, CallSettings callSettings = null)
```

Reschedule maintenance for a given instance in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[RescheduleMaintenanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.RescheduleMaintenanceRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

The RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = CloudRedisClient.Create();
// Initialize request argument(s)
RescheduleMaintenanceRequest request = new RescheduleMaintenanceRequest
{
    InstanceName = InstanceName.FromProjectLocationInstance("[PROJECT]", "[LOCATION]", "[INSTANCE]"),
    RescheduleType = RescheduleMaintenanceRequest.Types.RescheduleType.Unspecified,
    ScheduleTime = new Timestamp(),
};
// Make the request
Operation<Instance, OperationMetadata> response = cloudRedisClient.RescheduleMaintenance(request);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = cloudRedisClient.PollOnceRescheduleMaintenance(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### RescheduleMaintenance(string, RescheduleType, Timestamp, CallSettings)

```
public virtual Operation<Instance, OperationMetadata> RescheduleMaintenance(string name, RescheduleMaintenanceRequest.Types.RescheduleType rescheduleType, Timestamp scheduleTime, CallSettings callSettings = null)
```

Reschedule maintenance for a given instance in a given project and location.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`rescheduleType`

`[RescheduleMaintenanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.RescheduleMaintenanceRequest)[Types](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.RescheduleMaintenanceRequest.Types)[RescheduleType](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.RescheduleMaintenanceRequest.Types.RescheduleType)`  

Required. If reschedule type is SPECIFIC\_TIME, must set up schedule\_time as well.

`scheduleTime`

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`  

Optional. Timestamp when the maintenance shall be rescheduled to if reschedule\_type=SPECIFIC\_TIME, in RFC 3339 format, for example `2012-11-15T16:19:00.094Z`.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

The RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = CloudRedisClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/instances/[INSTANCE]";
RescheduleMaintenanceRequest.Types.RescheduleType rescheduleType = RescheduleMaintenanceRequest.Types.RescheduleType.Unspecified;
Timestamp scheduleTime = new Timestamp();
// Make the request
Operation<Instance, OperationMetadata> response = cloudRedisClient.RescheduleMaintenance(name, rescheduleType, scheduleTime);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = cloudRedisClient.PollOnceRescheduleMaintenance(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### RescheduleMaintenanceAsync(InstanceName, RescheduleType, Timestamp, CallSettings)

```
public virtual Task<Operation<Instance, OperationMetadata>> RescheduleMaintenanceAsync(InstanceName name, RescheduleMaintenanceRequest.Types.RescheduleType rescheduleType, Timestamp scheduleTime, CallSettings callSettings = null)
```

Reschedule maintenance for a given instance in a given project and location.

**Parameters**

**Name**

**Description**

`name`

`[InstanceName](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.InstanceName)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`rescheduleType`

`[RescheduleMaintenanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.RescheduleMaintenanceRequest)[Types](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.RescheduleMaintenanceRequest.Types)[RescheduleType](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.RescheduleMaintenanceRequest.Types.RescheduleType)`  

Required. If reschedule type is SPECIFIC\_TIME, must set up schedule\_time as well.

`scheduleTime`

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`  

Optional. Timestamp when the maintenance shall be rescheduled to if reschedule\_type=SPECIFIC\_TIME, in RFC 3339 format, for example `2012-11-15T16:19:00.094Z`.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
InstanceName name = InstanceName.FromProjectLocationInstance("[PROJECT]", "[LOCATION]", "[INSTANCE]");
RescheduleMaintenanceRequest.Types.RescheduleType rescheduleType = RescheduleMaintenanceRequest.Types.RescheduleType.Unspecified;
Timestamp scheduleTime = new Timestamp();
// Make the request
Operation<Instance, OperationMetadata> response = await cloudRedisClient.RescheduleMaintenanceAsync(name, rescheduleType, scheduleTime);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceRescheduleMaintenanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### RescheduleMaintenanceAsync(InstanceName, RescheduleType, Timestamp, CancellationToken)

```
public virtual Task<Operation<Instance, OperationMetadata>> RescheduleMaintenanceAsync(InstanceName name, RescheduleMaintenanceRequest.Types.RescheduleType rescheduleType, Timestamp scheduleTime, CancellationToken cancellationToken)
```

Reschedule maintenance for a given instance in a given project and location.

**Parameters**

**Name**

**Description**

`name`

`[InstanceName](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.InstanceName)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`rescheduleType`

`[RescheduleMaintenanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.RescheduleMaintenanceRequest)[Types](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.RescheduleMaintenanceRequest.Types)[RescheduleType](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.RescheduleMaintenanceRequest.Types.RescheduleType)`  

Required. If reschedule type is SPECIFIC\_TIME, must set up schedule\_time as well.

`scheduleTime`

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`  

Optional. Timestamp when the maintenance shall be rescheduled to if reschedule\_type=SPECIFIC\_TIME, in RFC 3339 format, for example `2012-11-15T16:19:00.094Z`.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
InstanceName name = InstanceName.FromProjectLocationInstance("[PROJECT]", "[LOCATION]", "[INSTANCE]");
RescheduleMaintenanceRequest.Types.RescheduleType rescheduleType = RescheduleMaintenanceRequest.Types.RescheduleType.Unspecified;
Timestamp scheduleTime = new Timestamp();
// Make the request
Operation<Instance, OperationMetadata> response = await cloudRedisClient.RescheduleMaintenanceAsync(name, rescheduleType, scheduleTime);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceRescheduleMaintenanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### RescheduleMaintenanceAsync(RescheduleMaintenanceRequest, CallSettings)

```
public virtual Task<Operation<Instance, OperationMetadata>> RescheduleMaintenanceAsync(RescheduleMaintenanceRequest request, CallSettings callSettings = null)
```

Reschedule maintenance for a given instance in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[RescheduleMaintenanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.RescheduleMaintenanceRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
RescheduleMaintenanceRequest request = new RescheduleMaintenanceRequest
{
    InstanceName = InstanceName.FromProjectLocationInstance("[PROJECT]", "[LOCATION]", "[INSTANCE]"),
    RescheduleType = RescheduleMaintenanceRequest.Types.RescheduleType.Unspecified,
    ScheduleTime = new Timestamp(),
};
// Make the request
Operation<Instance, OperationMetadata> response = await cloudRedisClient.RescheduleMaintenanceAsync(request);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceRescheduleMaintenanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### RescheduleMaintenanceAsync(RescheduleMaintenanceRequest, CancellationToken)

```
public virtual Task<Operation<Instance, OperationMetadata>> RescheduleMaintenanceAsync(RescheduleMaintenanceRequest request, CancellationToken cancellationToken)
```

Reschedule maintenance for a given instance in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[RescheduleMaintenanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.RescheduleMaintenanceRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
RescheduleMaintenanceRequest request = new RescheduleMaintenanceRequest
{
    InstanceName = InstanceName.FromProjectLocationInstance("[PROJECT]", "[LOCATION]", "[INSTANCE]"),
    RescheduleType = RescheduleMaintenanceRequest.Types.RescheduleType.Unspecified,
    ScheduleTime = new Timestamp(),
};
// Make the request
Operation<Instance, OperationMetadata> response = await cloudRedisClient.RescheduleMaintenanceAsync(request);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceRescheduleMaintenanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### RescheduleMaintenanceAsync(string, RescheduleType, Timestamp, CallSettings)

```
public virtual Task<Operation<Instance, OperationMetadata>> RescheduleMaintenanceAsync(string name, RescheduleMaintenanceRequest.Types.RescheduleType rescheduleType, Timestamp scheduleTime, CallSettings callSettings = null)
```

Reschedule maintenance for a given instance in a given project and location.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`rescheduleType`

`[RescheduleMaintenanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.RescheduleMaintenanceRequest)[Types](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.RescheduleMaintenanceRequest.Types)[RescheduleType](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.RescheduleMaintenanceRequest.Types.RescheduleType)`  

Required. If reschedule type is SPECIFIC\_TIME, must set up schedule\_time as well.

`scheduleTime`

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`  

Optional. Timestamp when the maintenance shall be rescheduled to if reschedule\_type=SPECIFIC\_TIME, in RFC 3339 format, for example `2012-11-15T16:19:00.094Z`.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/instances/[INSTANCE]";
RescheduleMaintenanceRequest.Types.RescheduleType rescheduleType = RescheduleMaintenanceRequest.Types.RescheduleType.Unspecified;
Timestamp scheduleTime = new Timestamp();
// Make the request
Operation<Instance, OperationMetadata> response = await cloudRedisClient.RescheduleMaintenanceAsync(name, rescheduleType, scheduleTime);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceRescheduleMaintenanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### RescheduleMaintenanceAsync(string, RescheduleType, Timestamp, CancellationToken)

```
public virtual Task<Operation<Instance, OperationMetadata>> RescheduleMaintenanceAsync(string name, RescheduleMaintenanceRequest.Types.RescheduleType rescheduleType, Timestamp scheduleTime, CancellationToken cancellationToken)
```

Reschedule maintenance for a given instance in a given project and location.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`rescheduleType`

`[RescheduleMaintenanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.RescheduleMaintenanceRequest)[Types](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.RescheduleMaintenanceRequest.Types)[RescheduleType](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.RescheduleMaintenanceRequest.Types.RescheduleType)`  

Required. If reschedule type is SPECIFIC\_TIME, must set up schedule\_time as well.

`scheduleTime`

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`  

Optional. Timestamp when the maintenance shall be rescheduled to if reschedule\_type=SPECIFIC\_TIME, in RFC 3339 format, for example `2012-11-15T16:19:00.094Z`.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/instances/[INSTANCE]";
RescheduleMaintenanceRequest.Types.RescheduleType rescheduleType = RescheduleMaintenanceRequest.Types.RescheduleType.Unspecified;
Timestamp scheduleTime = new Timestamp();
// Make the request
Operation<Instance, OperationMetadata> response = await cloudRedisClient.RescheduleMaintenanceAsync(name, rescheduleType, scheduleTime);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceRescheduleMaintenanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### ShutdownDefaultChannelsAsync()

```
public static Task ShutdownDefaultChannelsAsync()
```

Shuts down any channels automatically created by [Create()](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.CloudRedisClient#Google_Cloud_Redis_V1_CloudRedisClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.CloudRedisClient#Google_Cloud_Redis_V1_CloudRedisClient_CreateAsync_System_Threading_CancellationToken_). Channels which weren't automatically created are not affected.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A task representing the asynchronous shutdown operation.

**Remarks**

After calling this method, further calls to [Create()](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.CloudRedisClient#Google_Cloud_Redis_V1_CloudRedisClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.CloudRedisClient#Google_Cloud_Redis_V1_CloudRedisClient_CreateAsync_System_Threading_CancellationToken_) will create new channels, which could in turn be shut down by another call to this method.

### UpdateInstance(UpdateInstanceRequest, CallSettings)

```
public virtual Operation<Instance, OperationMetadata> UpdateInstance(UpdateInstanceRequest request, CallSettings callSettings = null)
```

Updates the metadata and configuration of a specific Redis instance.

Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

**Parameters**

**Name**

**Description**

`request`

`[UpdateInstanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.UpdateInstanceRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

The RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = CloudRedisClient.Create();
// Initialize request argument(s)
UpdateInstanceRequest request = new UpdateInstanceRequest
{
    UpdateMask = new FieldMask(),
    Instance = new Instance(),
};
// Make the request
Operation<Instance, OperationMetadata> response = cloudRedisClient.UpdateInstance(request);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = cloudRedisClient.PollOnceUpdateInstance(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### UpdateInstance(FieldMask, Instance, CallSettings)

```
public virtual Operation<Instance, OperationMetadata> UpdateInstance(FieldMask updateMask, Instance instance, CallSettings callSettings = null)
```

Updates the metadata and configuration of a specific Redis instance.

Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

**Parameters**

**Name**

**Description**

`updateMask`

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`  

Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields from \[Instance\]\[google.cloud.redis.v1.Instance\]:

-   `displayName`
-   `labels`
-   `memorySizeGb`
-   `redisConfig`
-   `replica_count`

`instance`

`[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)`  

Required. Update description. Only fields specified in update\_mask are updated.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

The RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = CloudRedisClient.Create();
// Initialize request argument(s)
FieldMask updateMask = new FieldMask();
Instance instance = new Instance();
// Make the request
Operation<Instance, OperationMetadata> response = cloudRedisClient.UpdateInstance(updateMask, instance);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = cloudRedisClient.PollOnceUpdateInstance(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### UpdateInstanceAsync(UpdateInstanceRequest, CallSettings)

```
public virtual Task<Operation<Instance, OperationMetadata>> UpdateInstanceAsync(UpdateInstanceRequest request, CallSettings callSettings = null)
```

Updates the metadata and configuration of a specific Redis instance.

Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

**Parameters**

**Name**

**Description**

`request`

`[UpdateInstanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.UpdateInstanceRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
UpdateInstanceRequest request = new UpdateInstanceRequest
{
    UpdateMask = new FieldMask(),
    Instance = new Instance(),
};
// Make the request
Operation<Instance, OperationMetadata> response = await cloudRedisClient.UpdateInstanceAsync(request);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceUpdateInstanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### UpdateInstanceAsync(UpdateInstanceRequest, CancellationToken)

```
public virtual Task<Operation<Instance, OperationMetadata>> UpdateInstanceAsync(UpdateInstanceRequest request, CancellationToken cancellationToken)
```

Updates the metadata and configuration of a specific Redis instance.

Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

**Parameters**

**Name**

**Description**

`request`

`[UpdateInstanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.UpdateInstanceRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
UpdateInstanceRequest request = new UpdateInstanceRequest
{
    UpdateMask = new FieldMask(),
    Instance = new Instance(),
};
// Make the request
Operation<Instance, OperationMetadata> response = await cloudRedisClient.UpdateInstanceAsync(request);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceUpdateInstanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### UpdateInstanceAsync(FieldMask, Instance, CallSettings)

```
public virtual Task<Operation<Instance, OperationMetadata>> UpdateInstanceAsync(FieldMask updateMask, Instance instance, CallSettings callSettings = null)
```

Updates the metadata and configuration of a specific Redis instance.

Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

**Parameters**

**Name**

**Description**

`updateMask`

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`  

Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields from \[Instance\]\[google.cloud.redis.v1.Instance\]:

-   `displayName`
-   `labels`
-   `memorySizeGb`
-   `redisConfig`
-   `replica_count`

`instance`

`[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)`  

Required. Update description. Only fields specified in update\_mask are updated.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
FieldMask updateMask = new FieldMask();
Instance instance = new Instance();
// Make the request
Operation<Instance, OperationMetadata> response = await cloudRedisClient.UpdateInstanceAsync(updateMask, instance);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceUpdateInstanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### UpdateInstanceAsync(FieldMask, Instance, CancellationToken)

```
public virtual Task<Operation<Instance, OperationMetadata>> UpdateInstanceAsync(FieldMask updateMask, Instance instance, CancellationToken cancellationToken)
```

Updates the metadata and configuration of a specific Redis instance.

Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

**Parameters**

**Name**

**Description**

`updateMask`

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`  

Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields from \[Instance\]\[google.cloud.redis.v1.Instance\]:

-   `displayName`
-   `labels`
-   `memorySizeGb`
-   `redisConfig`
-   `replica_count`

`instance`

`[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)`  

Required. Update description. Only fields specified in update\_mask are updated.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
FieldMask updateMask = new FieldMask();
Instance instance = new Instance();
// Make the request
Operation<Instance, OperationMetadata> response = await cloudRedisClient.UpdateInstanceAsync(updateMask, instance);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceUpdateInstanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### UpgradeInstance(InstanceName, string, CallSettings)

```
public virtual Operation<Instance, OperationMetadata> UpgradeInstance(InstanceName name, string redisVersion, CallSettings callSettings = null)
```

Upgrades Redis instance to the newer Redis version specified in the request.

**Parameters**

**Name**

**Description**

`name`

`[InstanceName](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.InstanceName)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`redisVersion`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Specifies the target version of Redis software to upgrade to.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

The RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = CloudRedisClient.Create();
// Initialize request argument(s)
InstanceName name = InstanceName.FromProjectLocationInstance("[PROJECT]", "[LOCATION]", "[INSTANCE]");
string redisVersion = "";
// Make the request
Operation<Instance, OperationMetadata> response = cloudRedisClient.UpgradeInstance(name, redisVersion);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = cloudRedisClient.PollOnceUpgradeInstance(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### UpgradeInstance(UpgradeInstanceRequest, CallSettings)

```
public virtual Operation<Instance, OperationMetadata> UpgradeInstance(UpgradeInstanceRequest request, CallSettings callSettings = null)
```

Upgrades Redis instance to the newer Redis version specified in the request.

**Parameters**

**Name**

**Description**

`request`

`[UpgradeInstanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.UpgradeInstanceRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

The RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = CloudRedisClient.Create();
// Initialize request argument(s)
UpgradeInstanceRequest request = new UpgradeInstanceRequest
{
    InstanceName = InstanceName.FromProjectLocationInstance("[PROJECT]", "[LOCATION]", "[INSTANCE]"),
    RedisVersion = "",
};
// Make the request
Operation<Instance, OperationMetadata> response = cloudRedisClient.UpgradeInstance(request);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = cloudRedisClient.PollOnceUpgradeInstance(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### UpgradeInstance(string, string, CallSettings)

```
public virtual Operation<Instance, OperationMetadata> UpgradeInstance(string name, string redisVersion, CallSettings callSettings = null)
```

Upgrades Redis instance to the newer Redis version specified in the request.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`redisVersion`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Specifies the target version of Redis software to upgrade to.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

The RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = CloudRedisClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/instances/[INSTANCE]";
string redisVersion = "";
// Make the request
Operation<Instance, OperationMetadata> response = cloudRedisClient.UpgradeInstance(name, redisVersion);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = cloudRedisClient.PollOnceUpgradeInstance(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### UpgradeInstanceAsync(InstanceName, string, CallSettings)

```
public virtual Task<Operation<Instance, OperationMetadata>> UpgradeInstanceAsync(InstanceName name, string redisVersion, CallSettings callSettings = null)
```

Upgrades Redis instance to the newer Redis version specified in the request.

**Parameters**

**Name**

**Description**

`name`

`[InstanceName](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.InstanceName)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`redisVersion`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Specifies the target version of Redis software to upgrade to.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
InstanceName name = InstanceName.FromProjectLocationInstance("[PROJECT]", "[LOCATION]", "[INSTANCE]");
string redisVersion = "";
// Make the request
Operation<Instance, OperationMetadata> response = await cloudRedisClient.UpgradeInstanceAsync(name, redisVersion);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceUpgradeInstanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### UpgradeInstanceAsync(InstanceName, string, CancellationToken)

```
public virtual Task<Operation<Instance, OperationMetadata>> UpgradeInstanceAsync(InstanceName name, string redisVersion, CancellationToken cancellationToken)
```

Upgrades Redis instance to the newer Redis version specified in the request.

**Parameters**

**Name**

**Description**

`name`

`[InstanceName](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.InstanceName)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`redisVersion`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Specifies the target version of Redis software to upgrade to.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
InstanceName name = InstanceName.FromProjectLocationInstance("[PROJECT]", "[LOCATION]", "[INSTANCE]");
string redisVersion = "";
// Make the request
Operation<Instance, OperationMetadata> response = await cloudRedisClient.UpgradeInstanceAsync(name, redisVersion);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceUpgradeInstanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### UpgradeInstanceAsync(UpgradeInstanceRequest, CallSettings)

```
public virtual Task<Operation<Instance, OperationMetadata>> UpgradeInstanceAsync(UpgradeInstanceRequest request, CallSettings callSettings = null)
```

Upgrades Redis instance to the newer Redis version specified in the request.

**Parameters**

**Name**

**Description**

`request`

`[UpgradeInstanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.UpgradeInstanceRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
UpgradeInstanceRequest request = new UpgradeInstanceRequest
{
    InstanceName = InstanceName.FromProjectLocationInstance("[PROJECT]", "[LOCATION]", "[INSTANCE]"),
    RedisVersion = "",
};
// Make the request
Operation<Instance, OperationMetadata> response = await cloudRedisClient.UpgradeInstanceAsync(request);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceUpgradeInstanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### UpgradeInstanceAsync(UpgradeInstanceRequest, CancellationToken)

```
public virtual Task<Operation<Instance, OperationMetadata>> UpgradeInstanceAsync(UpgradeInstanceRequest request, CancellationToken cancellationToken)
```

Upgrades Redis instance to the newer Redis version specified in the request.

**Parameters**

**Name**

**Description**

`request`

`[UpgradeInstanceRequest](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.UpgradeInstanceRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
UpgradeInstanceRequest request = new UpgradeInstanceRequest
{
    InstanceName = InstanceName.FromProjectLocationInstance("[PROJECT]", "[LOCATION]", "[INSTANCE]"),
    RedisVersion = "",
};
// Make the request
Operation<Instance, OperationMetadata> response = await cloudRedisClient.UpgradeInstanceAsync(request);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceUpgradeInstanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### UpgradeInstanceAsync(string, string, CallSettings)

```
public virtual Task<Operation<Instance, OperationMetadata>> UpgradeInstanceAsync(string name, string redisVersion, CallSettings callSettings = null)
```

Upgrades Redis instance to the newer Redis version specified in the request.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`redisVersion`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Specifies the target version of Redis software to upgrade to.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/instances/[INSTANCE]";
string redisVersion = "";
// Make the request
Operation<Instance, OperationMetadata> response = await cloudRedisClient.UpgradeInstanceAsync(name, redisVersion);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceUpgradeInstanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

### UpgradeInstanceAsync(string, string, CancellationToken)

```
public virtual Task<Operation<Instance, OperationMetadata>> UpgradeInstanceAsync(string name, string redisVersion, CancellationToken cancellationToken)
```

Upgrades Redis instance to the newer Redis version specified in the request.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.

`redisVersion`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. Specifies the target version of Redis software to upgrade to.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Instance](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.Instance)[OperationMetadata](/dotnet/docs/reference/Google.Cloud.Redis.V1/latest/Google.Cloud.Redis.V1.OperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
CloudRedisClient cloudRedisClient = await CloudRedisClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/instances/[INSTANCE]";
string redisVersion = "";
// Make the request
Operation<Instance, OperationMetadata> response = await cloudRedisClient.UpgradeInstanceAsync(name, redisVersion);

// Poll until the returned long-running operation is complete
Operation<Instance, OperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Instance result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Instance, OperationMetadata> retrievedResponse = await cloudRedisClient.PollOnceUpgradeInstanceAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Instance retrievedResult = retrievedResponse.Result;
}
```

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
