-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud AI Platform v1 API - Class EndpointServiceClient (2.15.0) Stay organized with collections Save and categorize content based on your preferences.

3.68.0 (latest) 3.67.0 3.66.0 3.65.0 3.64.0 3.63.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public abstract class EndpointServiceClient
```

Reference documentation and code samples for the Cloud AI Platform v1 API class EndpointServiceClient.

EndpointService client wrapper, for convenient use.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> EndpointServiceClient

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Derived Types

[EndpointServiceClientImpl](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.EndpointServiceClientImpl)

## Namespace

[Google.Cloud.AIPlatform.V1](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1)

## Assembly

Google.Cloud.AIPlatform.V1.dll

## Remarks

A service for managing Vertex AI's Endpoints.

## Properties

### CreateEndpointOperationsClient

```
public virtual OperationsClient CreateEndpointOperationsClient { get; }
```

The long-running operations client for `CreateEndpoint`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/OperationsClient.g.cs)`

### DefaultEndpoint

```
public static string DefaultEndpoint { get; }
```

The default endpoint for the EndpointService service, which is a host of "aiplatform.googleapis.com" and a port of 443.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### DefaultScopes

```
public static IReadOnlyList<string> DefaultScopes { get; }
```

The default EndpointService scopes.

**Property Value**

**Type**

**Description**

`[IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)[string](https://learn.microsoft.com/dotnet/api/system.string)`

**Remarks**

The default EndpointService scopes are:

-   [https://www.googleapis.com/auth/cloud-platform](https://www.googleapis.com/auth/cloud-platform)

### DeleteEndpointOperationsClient

```
public virtual OperationsClient DeleteEndpointOperationsClient { get; }
```

The long-running operations client for `DeleteEndpoint`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/OperationsClient.g.cs)`

### DeployModelOperationsClient

```
public virtual OperationsClient DeployModelOperationsClient { get; }
```

The long-running operations client for `DeployModel`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/OperationsClient.g.cs)`

### GrpcClient

```
public virtual EndpointService.EndpointServiceClient GrpcClient { get; }
```

The underlying gRPC EndpointService client

**Property Value**

**Type**

**Description**

`[EndpointService](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.EndpointService)[EndpointServiceClient](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.EndpointService.EndpointServiceClient)`

### IAMPolicyClient

```
public virtual IAMPolicyClient IAMPolicyClient { get; }
```

The [IAMPolicyClient](https://github.com/googleapis/google-cloud-dotnet/blob/ff2c06edc86420d5c55db210dfd1c5b6eb7d9bf1/apis/Google.Cloud.Iam.V1/Google.Cloud.Iam.V1/IAMPolicyClient.g.cs) associated with this client.

**Property Value**

**Type**

**Description**

`[IAMPolicyClient](https://github.com/googleapis/google-cloud-dotnet/blob/ff2c06edc86420d5c55db210dfd1c5b6eb7d9bf1/apis/Google.Cloud.Iam.V1/Google.Cloud.Iam.V1/IAMPolicyClient.g.cs)`

### LocationsClient

```
public virtual LocationsClient LocationsClient { get; }
```

The [LocationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/94ef638cba52b4508a352c841dd68e3cc9817fce/apis/Google.Cloud.Location/Google.Cloud.Location/LocationsClient.g.cs) associated with this client.

**Property Value**

**Type**

**Description**

`[LocationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/94ef638cba52b4508a352c841dd68e3cc9817fce/apis/Google.Cloud.Location/Google.Cloud.Location/LocationsClient.g.cs)`

### MutateDeployedModelOperationsClient

```
public virtual OperationsClient MutateDeployedModelOperationsClient { get; }
```

The long-running operations client for `MutateDeployedModel`.

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

`[ServiceMetadata](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/ServiceMetadata.cs)`

### UndeployModelOperationsClient

```
public virtual OperationsClient UndeployModelOperationsClient { get; }
```

The long-running operations client for `UndeployModel`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/OperationsClient.g.cs)`

## Methods

### Create()

```
public static EndpointServiceClient Create()
```

Synchronously creates a [EndpointServiceClient](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.EndpointServiceClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [EndpointServiceClientBuilder](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.EndpointServiceClientBuilder).

**Returns**

**Type**

**Description**

`[EndpointServiceClient](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.EndpointServiceClient)`

The created [EndpointServiceClient](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.EndpointServiceClient).

### CreateAsync(CancellationToken)

```
public static Task<EndpointServiceClient> CreateAsync(CancellationToken cancellationToken = default)
```

Asynchronously creates a [EndpointServiceClient](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.EndpointServiceClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [EndpointServiceClientBuilder](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.EndpointServiceClientBuilder).

**Parameter**

**Name**

**Description**

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

The [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use while creating the client.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[EndpointServiceClient](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.EndpointServiceClient)`

The task representing the created [EndpointServiceClient](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.EndpointServiceClient).

### CreateEndpoint(LocationName, Endpoint, CallSettings)

```
public virtual Operation<Endpoint, CreateEndpointOperationMetadata> CreateEndpoint(LocationName parent, Endpoint endpoint, CallSettings callSettings = null)
```

Creates an Endpoint.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/ResourceNames/LocationName.cs)`  

Required. The resource name of the Location to create the Endpoint in. Format: `projects/{project}/locations/{location}`

`endpoint`

`[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)`  

Required. The Endpoint to create.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)[CreateEndpointOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.CreateEndpointOperationMetadata)`

The RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = EndpointServiceClient.Create();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
Endpoint endpoint = new Endpoint();
// Make the request
Operation<Endpoint, CreateEndpointOperationMetadata> response = endpointServiceClient.CreateEndpoint(parent, endpoint);

// Poll until the returned long-running operation is complete
Operation<Endpoint, CreateEndpointOperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Endpoint result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Endpoint, CreateEndpointOperationMetadata> retrievedResponse = endpointServiceClient.PollOnceCreateEndpoint(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Endpoint retrievedResult = retrievedResponse.Result;
}
```

### CreateEndpoint(LocationName, Endpoint, string, CallSettings)

```
public virtual Operation<Endpoint, CreateEndpointOperationMetadata> CreateEndpoint(LocationName parent, Endpoint endpoint, string endpointId, CallSettings callSettings = null)
```

Creates an Endpoint.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/ResourceNames/LocationName.cs)`  

Required. The resource name of the Location to create the Endpoint in. Format: `projects/{project}/locations/{location}`

`endpoint`

`[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)`  

Required. The Endpoint to create.

`endpointId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Immutable. The ID to use for endpoint, which will become the final component of the endpoint resource name. If not provided, Vertex AI will generate a value for this ID.

If the first character is a letter, this value may be up to 63 characters, and valid characters are `[a-z0-9-]`. The last character must be a letter or number.

If the first character is a number, this value may be up to 9 characters, and valid characters are `[0-9]` with no leading zeros.

When using HTTP/JSON, this field is populated based on a query string argument, such as `?endpoint_id=12345`. This is the fallback for fields that are not included in either the URI or the body.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)[CreateEndpointOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.CreateEndpointOperationMetadata)`

The RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = EndpointServiceClient.Create();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
Endpoint endpoint = new Endpoint();
string endpointId = "";
// Make the request
Operation<Endpoint, CreateEndpointOperationMetadata> response = endpointServiceClient.CreateEndpoint(parent, endpoint, endpointId);

// Poll until the returned long-running operation is complete
Operation<Endpoint, CreateEndpointOperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Endpoint result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Endpoint, CreateEndpointOperationMetadata> retrievedResponse = endpointServiceClient.PollOnceCreateEndpoint(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Endpoint retrievedResult = retrievedResponse.Result;
}
```

### CreateEndpoint(CreateEndpointRequest, CallSettings)

```
public virtual Operation<Endpoint, CreateEndpointOperationMetadata> CreateEndpoint(CreateEndpointRequest request, CallSettings callSettings = null)
```

Creates an Endpoint.

**Parameters**

**Name**

**Description**

`request`

`[CreateEndpointRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.CreateEndpointRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)[CreateEndpointOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.CreateEndpointOperationMetadata)`

The RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = EndpointServiceClient.Create();
// Initialize request argument(s)
CreateEndpointRequest request = new CreateEndpointRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    Endpoint = new Endpoint(),
    EndpointId = "",
};
// Make the request
Operation<Endpoint, CreateEndpointOperationMetadata> response = endpointServiceClient.CreateEndpoint(request);

// Poll until the returned long-running operation is complete
Operation<Endpoint, CreateEndpointOperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Endpoint result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Endpoint, CreateEndpointOperationMetadata> retrievedResponse = endpointServiceClient.PollOnceCreateEndpoint(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Endpoint retrievedResult = retrievedResponse.Result;
}
```

### CreateEndpoint(string, Endpoint, CallSettings)

```
public virtual Operation<Endpoint, CreateEndpointOperationMetadata> CreateEndpoint(string parent, Endpoint endpoint, CallSettings callSettings = null)
```

Creates an Endpoint.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the Location to create the Endpoint in. Format: `projects/{project}/locations/{location}`

`endpoint`

`[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)`  

Required. The Endpoint to create.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)[CreateEndpointOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.CreateEndpointOperationMetadata)`

The RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = EndpointServiceClient.Create();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
Endpoint endpoint = new Endpoint();
// Make the request
Operation<Endpoint, CreateEndpointOperationMetadata> response = endpointServiceClient.CreateEndpoint(parent, endpoint);

// Poll until the returned long-running operation is complete
Operation<Endpoint, CreateEndpointOperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Endpoint result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Endpoint, CreateEndpointOperationMetadata> retrievedResponse = endpointServiceClient.PollOnceCreateEndpoint(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Endpoint retrievedResult = retrievedResponse.Result;
}
```

### CreateEndpoint(string, Endpoint, string, CallSettings)

```
public virtual Operation<Endpoint, CreateEndpointOperationMetadata> CreateEndpoint(string parent, Endpoint endpoint, string endpointId, CallSettings callSettings = null)
```

Creates an Endpoint.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the Location to create the Endpoint in. Format: `projects/{project}/locations/{location}`

`endpoint`

`[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)`  

Required. The Endpoint to create.

`endpointId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Immutable. The ID to use for endpoint, which will become the final component of the endpoint resource name. If not provided, Vertex AI will generate a value for this ID.

If the first character is a letter, this value may be up to 63 characters, and valid characters are `[a-z0-9-]`. The last character must be a letter or number.

If the first character is a number, this value may be up to 9 characters, and valid characters are `[0-9]` with no leading zeros.

When using HTTP/JSON, this field is populated based on a query string argument, such as `?endpoint_id=12345`. This is the fallback for fields that are not included in either the URI or the body.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)[CreateEndpointOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.CreateEndpointOperationMetadata)`

The RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = EndpointServiceClient.Create();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
Endpoint endpoint = new Endpoint();
string endpointId = "";
// Make the request
Operation<Endpoint, CreateEndpointOperationMetadata> response = endpointServiceClient.CreateEndpoint(parent, endpoint, endpointId);

// Poll until the returned long-running operation is complete
Operation<Endpoint, CreateEndpointOperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Endpoint result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Endpoint, CreateEndpointOperationMetadata> retrievedResponse = endpointServiceClient.PollOnceCreateEndpoint(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Endpoint retrievedResult = retrievedResponse.Result;
}
```

### CreateEndpointAsync(LocationName, Endpoint, CallSettings)

```
public virtual Task<Operation<Endpoint, CreateEndpointOperationMetadata>> CreateEndpointAsync(LocationName parent, Endpoint endpoint, CallSettings callSettings = null)
```

Creates an Endpoint.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/ResourceNames/LocationName.cs)`  

Required. The resource name of the Location to create the Endpoint in. Format: `projects/{project}/locations/{location}`

`endpoint`

`[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)`  

Required. The Endpoint to create.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)[CreateEndpointOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.CreateEndpointOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
Endpoint endpoint = new Endpoint();
// Make the request
Operation<Endpoint, CreateEndpointOperationMetadata> response = await endpointServiceClient.CreateEndpointAsync(parent, endpoint);

// Poll until the returned long-running operation is complete
Operation<Endpoint, CreateEndpointOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Endpoint result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Endpoint, CreateEndpointOperationMetadata> retrievedResponse = await endpointServiceClient.PollOnceCreateEndpointAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Endpoint retrievedResult = retrievedResponse.Result;
}
```

### CreateEndpointAsync(LocationName, Endpoint, string, CallSettings)

```
public virtual Task<Operation<Endpoint, CreateEndpointOperationMetadata>> CreateEndpointAsync(LocationName parent, Endpoint endpoint, string endpointId, CallSettings callSettings = null)
```

Creates an Endpoint.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/ResourceNames/LocationName.cs)`  

Required. The resource name of the Location to create the Endpoint in. Format: `projects/{project}/locations/{location}`

`endpoint`

`[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)`  

Required. The Endpoint to create.

`endpointId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Immutable. The ID to use for endpoint, which will become the final component of the endpoint resource name. If not provided, Vertex AI will generate a value for this ID.

If the first character is a letter, this value may be up to 63 characters, and valid characters are `[a-z0-9-]`. The last character must be a letter or number.

If the first character is a number, this value may be up to 9 characters, and valid characters are `[0-9]` with no leading zeros.

When using HTTP/JSON, this field is populated based on a query string argument, such as `?endpoint_id=12345`. This is the fallback for fields that are not included in either the URI or the body.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)[CreateEndpointOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.CreateEndpointOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
Endpoint endpoint = new Endpoint();
string endpointId = "";
// Make the request
Operation<Endpoint, CreateEndpointOperationMetadata> response = await endpointServiceClient.CreateEndpointAsync(parent, endpoint, endpointId);

// Poll until the returned long-running operation is complete
Operation<Endpoint, CreateEndpointOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Endpoint result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Endpoint, CreateEndpointOperationMetadata> retrievedResponse = await endpointServiceClient.PollOnceCreateEndpointAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Endpoint retrievedResult = retrievedResponse.Result;
}
```

### CreateEndpointAsync(LocationName, Endpoint, string, CancellationToken)

```
public virtual Task<Operation<Endpoint, CreateEndpointOperationMetadata>> CreateEndpointAsync(LocationName parent, Endpoint endpoint, string endpointId, CancellationToken cancellationToken)
```

Creates an Endpoint.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/ResourceNames/LocationName.cs)`  

Required. The resource name of the Location to create the Endpoint in. Format: `projects/{project}/locations/{location}`

`endpoint`

`[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)`  

Required. The Endpoint to create.

`endpointId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Immutable. The ID to use for endpoint, which will become the final component of the endpoint resource name. If not provided, Vertex AI will generate a value for this ID.

If the first character is a letter, this value may be up to 63 characters, and valid characters are `[a-z0-9-]`. The last character must be a letter or number.

If the first character is a number, this value may be up to 9 characters, and valid characters are `[0-9]` with no leading zeros.

When using HTTP/JSON, this field is populated based on a query string argument, such as `?endpoint_id=12345`. This is the fallback for fields that are not included in either the URI or the body.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)[CreateEndpointOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.CreateEndpointOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
Endpoint endpoint = new Endpoint();
string endpointId = "";
// Make the request
Operation<Endpoint, CreateEndpointOperationMetadata> response = await endpointServiceClient.CreateEndpointAsync(parent, endpoint, endpointId);

// Poll until the returned long-running operation is complete
Operation<Endpoint, CreateEndpointOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Endpoint result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Endpoint, CreateEndpointOperationMetadata> retrievedResponse = await endpointServiceClient.PollOnceCreateEndpointAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Endpoint retrievedResult = retrievedResponse.Result;
}
```

### CreateEndpointAsync(LocationName, Endpoint, CancellationToken)

```
public virtual Task<Operation<Endpoint, CreateEndpointOperationMetadata>> CreateEndpointAsync(LocationName parent, Endpoint endpoint, CancellationToken cancellationToken)
```

Creates an Endpoint.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/ResourceNames/LocationName.cs)`  

Required. The resource name of the Location to create the Endpoint in. Format: `projects/{project}/locations/{location}`

`endpoint`

`[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)`  

Required. The Endpoint to create.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)[CreateEndpointOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.CreateEndpointOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
Endpoint endpoint = new Endpoint();
// Make the request
Operation<Endpoint, CreateEndpointOperationMetadata> response = await endpointServiceClient.CreateEndpointAsync(parent, endpoint);

// Poll until the returned long-running operation is complete
Operation<Endpoint, CreateEndpointOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Endpoint result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Endpoint, CreateEndpointOperationMetadata> retrievedResponse = await endpointServiceClient.PollOnceCreateEndpointAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Endpoint retrievedResult = retrievedResponse.Result;
}
```

### CreateEndpointAsync(CreateEndpointRequest, CallSettings)

```
public virtual Task<Operation<Endpoint, CreateEndpointOperationMetadata>> CreateEndpointAsync(CreateEndpointRequest request, CallSettings callSettings = null)
```

Creates an Endpoint.

**Parameters**

**Name**

**Description**

`request`

`[CreateEndpointRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.CreateEndpointRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)[CreateEndpointOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.CreateEndpointOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
CreateEndpointRequest request = new CreateEndpointRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    Endpoint = new Endpoint(),
    EndpointId = "",
};
// Make the request
Operation<Endpoint, CreateEndpointOperationMetadata> response = await endpointServiceClient.CreateEndpointAsync(request);

// Poll until the returned long-running operation is complete
Operation<Endpoint, CreateEndpointOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Endpoint result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Endpoint, CreateEndpointOperationMetadata> retrievedResponse = await endpointServiceClient.PollOnceCreateEndpointAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Endpoint retrievedResult = retrievedResponse.Result;
}
```

### CreateEndpointAsync(CreateEndpointRequest, CancellationToken)

```
public virtual Task<Operation<Endpoint, CreateEndpointOperationMetadata>> CreateEndpointAsync(CreateEndpointRequest request, CancellationToken cancellationToken)
```

Creates an Endpoint.

**Parameters**

**Name**

**Description**

`request`

`[CreateEndpointRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.CreateEndpointRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)[CreateEndpointOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.CreateEndpointOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
CreateEndpointRequest request = new CreateEndpointRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    Endpoint = new Endpoint(),
    EndpointId = "",
};
// Make the request
Operation<Endpoint, CreateEndpointOperationMetadata> response = await endpointServiceClient.CreateEndpointAsync(request);

// Poll until the returned long-running operation is complete
Operation<Endpoint, CreateEndpointOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Endpoint result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Endpoint, CreateEndpointOperationMetadata> retrievedResponse = await endpointServiceClient.PollOnceCreateEndpointAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Endpoint retrievedResult = retrievedResponse.Result;
}
```

### CreateEndpointAsync(string, Endpoint, CallSettings)

```
public virtual Task<Operation<Endpoint, CreateEndpointOperationMetadata>> CreateEndpointAsync(string parent, Endpoint endpoint, CallSettings callSettings = null)
```

Creates an Endpoint.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the Location to create the Endpoint in. Format: `projects/{project}/locations/{location}`

`endpoint`

`[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)`  

Required. The Endpoint to create.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)[CreateEndpointOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.CreateEndpointOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
Endpoint endpoint = new Endpoint();
// Make the request
Operation<Endpoint, CreateEndpointOperationMetadata> response = await endpointServiceClient.CreateEndpointAsync(parent, endpoint);

// Poll until the returned long-running operation is complete
Operation<Endpoint, CreateEndpointOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Endpoint result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Endpoint, CreateEndpointOperationMetadata> retrievedResponse = await endpointServiceClient.PollOnceCreateEndpointAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Endpoint retrievedResult = retrievedResponse.Result;
}
```

### CreateEndpointAsync(string, Endpoint, string, CallSettings)

```
public virtual Task<Operation<Endpoint, CreateEndpointOperationMetadata>> CreateEndpointAsync(string parent, Endpoint endpoint, string endpointId, CallSettings callSettings = null)
```

Creates an Endpoint.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the Location to create the Endpoint in. Format: `projects/{project}/locations/{location}`

`endpoint`

`[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)`  

Required. The Endpoint to create.

`endpointId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Immutable. The ID to use for endpoint, which will become the final component of the endpoint resource name. If not provided, Vertex AI will generate a value for this ID.

If the first character is a letter, this value may be up to 63 characters, and valid characters are `[a-z0-9-]`. The last character must be a letter or number.

If the first character is a number, this value may be up to 9 characters, and valid characters are `[0-9]` with no leading zeros.

When using HTTP/JSON, this field is populated based on a query string argument, such as `?endpoint_id=12345`. This is the fallback for fields that are not included in either the URI or the body.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)[CreateEndpointOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.CreateEndpointOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
Endpoint endpoint = new Endpoint();
string endpointId = "";
// Make the request
Operation<Endpoint, CreateEndpointOperationMetadata> response = await endpointServiceClient.CreateEndpointAsync(parent, endpoint, endpointId);

// Poll until the returned long-running operation is complete
Operation<Endpoint, CreateEndpointOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Endpoint result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Endpoint, CreateEndpointOperationMetadata> retrievedResponse = await endpointServiceClient.PollOnceCreateEndpointAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Endpoint retrievedResult = retrievedResponse.Result;
}
```

### CreateEndpointAsync(string, Endpoint, string, CancellationToken)

```
public virtual Task<Operation<Endpoint, CreateEndpointOperationMetadata>> CreateEndpointAsync(string parent, Endpoint endpoint, string endpointId, CancellationToken cancellationToken)
```

Creates an Endpoint.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the Location to create the Endpoint in. Format: `projects/{project}/locations/{location}`

`endpoint`

`[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)`  

Required. The Endpoint to create.

`endpointId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Immutable. The ID to use for endpoint, which will become the final component of the endpoint resource name. If not provided, Vertex AI will generate a value for this ID.

If the first character is a letter, this value may be up to 63 characters, and valid characters are `[a-z0-9-]`. The last character must be a letter or number.

If the first character is a number, this value may be up to 9 characters, and valid characters are `[0-9]` with no leading zeros.

When using HTTP/JSON, this field is populated based on a query string argument, such as `?endpoint_id=12345`. This is the fallback for fields that are not included in either the URI or the body.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)[CreateEndpointOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.CreateEndpointOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
Endpoint endpoint = new Endpoint();
string endpointId = "";
// Make the request
Operation<Endpoint, CreateEndpointOperationMetadata> response = await endpointServiceClient.CreateEndpointAsync(parent, endpoint, endpointId);

// Poll until the returned long-running operation is complete
Operation<Endpoint, CreateEndpointOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Endpoint result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Endpoint, CreateEndpointOperationMetadata> retrievedResponse = await endpointServiceClient.PollOnceCreateEndpointAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Endpoint retrievedResult = retrievedResponse.Result;
}
```

### CreateEndpointAsync(string, Endpoint, CancellationToken)

```
public virtual Task<Operation<Endpoint, CreateEndpointOperationMetadata>> CreateEndpointAsync(string parent, Endpoint endpoint, CancellationToken cancellationToken)
```

Creates an Endpoint.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the Location to create the Endpoint in. Format: `projects/{project}/locations/{location}`

`endpoint`

`[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)`  

Required. The Endpoint to create.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)[CreateEndpointOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.CreateEndpointOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
Endpoint endpoint = new Endpoint();
// Make the request
Operation<Endpoint, CreateEndpointOperationMetadata> response = await endpointServiceClient.CreateEndpointAsync(parent, endpoint);

// Poll until the returned long-running operation is complete
Operation<Endpoint, CreateEndpointOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Endpoint result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Endpoint, CreateEndpointOperationMetadata> retrievedResponse = await endpointServiceClient.PollOnceCreateEndpointAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Endpoint retrievedResult = retrievedResponse.Result;
}
```

### DeleteEndpoint(DeleteEndpointRequest, CallSettings)

```
public virtual Operation<Empty, DeleteOperationMetadata> DeleteEndpoint(DeleteEndpointRequest request, CallSettings callSettings = null)
```

Deletes an Endpoint.

**Parameters**

**Name**

**Description**

`request`

`[DeleteEndpointRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeleteEndpointRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

The RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = EndpointServiceClient.Create();
// Initialize request argument(s)
DeleteEndpointRequest request = new DeleteEndpointRequest
{
    EndpointName = EndpointName.FromProjectLocationEndpoint("[PROJECT]", "[LOCATION]", "[ENDPOINT]"),
};
// Make the request
Operation<Empty, DeleteOperationMetadata> response = endpointServiceClient.DeleteEndpoint(request);

// Poll until the returned long-running operation is complete
Operation<Empty, DeleteOperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, DeleteOperationMetadata> retrievedResponse = endpointServiceClient.PollOnceDeleteEndpoint(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeleteEndpoint(EndpointName, CallSettings)

```
public virtual Operation<Empty, DeleteOperationMetadata> DeleteEndpoint(EndpointName name, CallSettings callSettings = null)
```

Deletes an Endpoint.

**Parameters**

**Name**

**Description**

`name`

`[EndpointName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.EndpointName)`  

Required. The name of the Endpoint resource to be deleted. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

The RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = EndpointServiceClient.Create();
// Initialize request argument(s)
EndpointName name = EndpointName.FromProjectLocationEndpoint("[PROJECT]", "[LOCATION]", "[ENDPOINT]");
// Make the request
Operation<Empty, DeleteOperationMetadata> response = endpointServiceClient.DeleteEndpoint(name);

// Poll until the returned long-running operation is complete
Operation<Empty, DeleteOperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, DeleteOperationMetadata> retrievedResponse = endpointServiceClient.PollOnceDeleteEndpoint(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeleteEndpoint(string, CallSettings)

```
public virtual Operation<Empty, DeleteOperationMetadata> DeleteEndpoint(string name, CallSettings callSettings = null)
```

Deletes an Endpoint.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the Endpoint resource to be deleted. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

The RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = EndpointServiceClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/endpoints/[ENDPOINT]";
// Make the request
Operation<Empty, DeleteOperationMetadata> response = endpointServiceClient.DeleteEndpoint(name);

// Poll until the returned long-running operation is complete
Operation<Empty, DeleteOperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, DeleteOperationMetadata> retrievedResponse = endpointServiceClient.PollOnceDeleteEndpoint(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeleteEndpointAsync(DeleteEndpointRequest, CallSettings)

```
public virtual Task<Operation<Empty, DeleteOperationMetadata>> DeleteEndpointAsync(DeleteEndpointRequest request, CallSettings callSettings = null)
```

Deletes an Endpoint.

**Parameters**

**Name**

**Description**

`request`

`[DeleteEndpointRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeleteEndpointRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
DeleteEndpointRequest request = new DeleteEndpointRequest
{
    EndpointName = EndpointName.FromProjectLocationEndpoint("[PROJECT]", "[LOCATION]", "[ENDPOINT]"),
};
// Make the request
Operation<Empty, DeleteOperationMetadata> response = await endpointServiceClient.DeleteEndpointAsync(request);

// Poll until the returned long-running operation is complete
Operation<Empty, DeleteOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, DeleteOperationMetadata> retrievedResponse = await endpointServiceClient.PollOnceDeleteEndpointAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeleteEndpointAsync(DeleteEndpointRequest, CancellationToken)

```
public virtual Task<Operation<Empty, DeleteOperationMetadata>> DeleteEndpointAsync(DeleteEndpointRequest request, CancellationToken cancellationToken)
```

Deletes an Endpoint.

**Parameters**

**Name**

**Description**

`request`

`[DeleteEndpointRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeleteEndpointRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
DeleteEndpointRequest request = new DeleteEndpointRequest
{
    EndpointName = EndpointName.FromProjectLocationEndpoint("[PROJECT]", "[LOCATION]", "[ENDPOINT]"),
};
// Make the request
Operation<Empty, DeleteOperationMetadata> response = await endpointServiceClient.DeleteEndpointAsync(request);

// Poll until the returned long-running operation is complete
Operation<Empty, DeleteOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, DeleteOperationMetadata> retrievedResponse = await endpointServiceClient.PollOnceDeleteEndpointAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeleteEndpointAsync(EndpointName, CallSettings)

```
public virtual Task<Operation<Empty, DeleteOperationMetadata>> DeleteEndpointAsync(EndpointName name, CallSettings callSettings = null)
```

Deletes an Endpoint.

**Parameters**

**Name**

**Description**

`name`

`[EndpointName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.EndpointName)`  

Required. The name of the Endpoint resource to be deleted. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
EndpointName name = EndpointName.FromProjectLocationEndpoint("[PROJECT]", "[LOCATION]", "[ENDPOINT]");
// Make the request
Operation<Empty, DeleteOperationMetadata> response = await endpointServiceClient.DeleteEndpointAsync(name);

// Poll until the returned long-running operation is complete
Operation<Empty, DeleteOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, DeleteOperationMetadata> retrievedResponse = await endpointServiceClient.PollOnceDeleteEndpointAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeleteEndpointAsync(EndpointName, CancellationToken)

```
public virtual Task<Operation<Empty, DeleteOperationMetadata>> DeleteEndpointAsync(EndpointName name, CancellationToken cancellationToken)
```

Deletes an Endpoint.

**Parameters**

**Name**

**Description**

`name`

`[EndpointName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.EndpointName)`  

Required. The name of the Endpoint resource to be deleted. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
EndpointName name = EndpointName.FromProjectLocationEndpoint("[PROJECT]", "[LOCATION]", "[ENDPOINT]");
// Make the request
Operation<Empty, DeleteOperationMetadata> response = await endpointServiceClient.DeleteEndpointAsync(name);

// Poll until the returned long-running operation is complete
Operation<Empty, DeleteOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, DeleteOperationMetadata> retrievedResponse = await endpointServiceClient.PollOnceDeleteEndpointAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeleteEndpointAsync(string, CallSettings)

```
public virtual Task<Operation<Empty, DeleteOperationMetadata>> DeleteEndpointAsync(string name, CallSettings callSettings = null)
```

Deletes an Endpoint.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the Endpoint resource to be deleted. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/endpoints/[ENDPOINT]";
// Make the request
Operation<Empty, DeleteOperationMetadata> response = await endpointServiceClient.DeleteEndpointAsync(name);

// Poll until the returned long-running operation is complete
Operation<Empty, DeleteOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, DeleteOperationMetadata> retrievedResponse = await endpointServiceClient.PollOnceDeleteEndpointAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeleteEndpointAsync(string, CancellationToken)

```
public virtual Task<Operation<Empty, DeleteOperationMetadata>> DeleteEndpointAsync(string name, CancellationToken cancellationToken)
```

Deletes an Endpoint.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the Endpoint resource to be deleted. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/endpoints/[ENDPOINT]";
// Make the request
Operation<Empty, DeleteOperationMetadata> response = await endpointServiceClient.DeleteEndpointAsync(name);

// Poll until the returned long-running operation is complete
Operation<Empty, DeleteOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Empty result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty, DeleteOperationMetadata> retrievedResponse = await endpointServiceClient.PollOnceDeleteEndpointAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Empty retrievedResult = retrievedResponse.Result;
}
```

### DeployModel(DeployModelRequest, CallSettings)

```
public virtual Operation<DeployModelResponse, DeployModelOperationMetadata> DeployModel(DeployModelRequest request, CallSettings callSettings = null)
```

Deploys a Model into this Endpoint, creating a DeployedModel within it.

**Parameters**

**Name**

**Description**

`request`

`[DeployModelRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployModelRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[DeployModelResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployModelResponse)[DeployModelOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployModelOperationMetadata)`

The RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = EndpointServiceClient.Create();
// Initialize request argument(s)
DeployModelRequest request = new DeployModelRequest
{
    EndpointAsEndpointName = EndpointName.FromProjectLocationEndpoint("[PROJECT]", "[LOCATION]", "[ENDPOINT]"),
    DeployedModel = new DeployedModel(),
    TrafficSplit = { { "", 0 }, },
};
// Make the request
Operation<DeployModelResponse, DeployModelOperationMetadata> response = endpointServiceClient.DeployModel(request);

// Poll until the returned long-running operation is complete
Operation<DeployModelResponse, DeployModelOperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
DeployModelResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<DeployModelResponse, DeployModelOperationMetadata> retrievedResponse = endpointServiceClient.PollOnceDeployModel(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    DeployModelResponse retrievedResult = retrievedResponse.Result;
}
```

### DeployModel(EndpointName, DeployedModel, IDictionary<string, int>, CallSettings)

```
public virtual Operation<DeployModelResponse, DeployModelOperationMetadata> DeployModel(EndpointName endpoint, DeployedModel deployedModel, IDictionary<string, int> trafficSplit, CallSettings callSettings = null)
```

Deploys a Model into this Endpoint, creating a DeployedModel within it.

**Parameters**

**Name**

**Description**

`endpoint`

`[EndpointName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.EndpointName)`  

Required. The name of the Endpoint resource into which to deploy a Model. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`

`deployedModel`

`[DeployedModel](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployedModel)`  

Required. The DeployedModel to be created within the Endpoint. Note that \[Endpoint.traffic\_split\]\[google.cloud.aiplatform.v1.Endpoint.traffic\_split\] must be updated for the DeployedModel to start receiving traffic, either as part of this call, or via \[EndpointService.UpdateEndpoint\]\[google.cloud.aiplatform.v1.EndpointService.UpdateEndpoint\].

`trafficSplit`

`[IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2)[string](https://learn.microsoft.com/dotnet/api/system.string)[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

A map from a DeployedModel's ID to the percentage of this Endpoint's traffic that should be forwarded to that DeployedModel.

If this field is non-empty, then the Endpoint's \[traffic\_split\]\[google.cloud.aiplatform.v1.Endpoint.traffic\_split\] will be overwritten with it. To refer to the ID of the just being deployed Model, a "0" should be used, and the actual ID of the new DeployedModel will be filled in its place by this method. The traffic percentage values must add up to 100.

If this field is empty, then the Endpoint's \[traffic\_split\]\[google.cloud.aiplatform.v1.Endpoint.traffic\_split\] is not updated.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[DeployModelResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployModelResponse)[DeployModelOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployModelOperationMetadata)`

The RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = EndpointServiceClient.Create();
// Initialize request argument(s)
EndpointName endpoint = EndpointName.FromProjectLocationEndpoint("[PROJECT]", "[LOCATION]", "[ENDPOINT]");
DeployedModel deployedModel = new DeployedModel();
IDictionary<string, int> trafficSplit = new Dictionary<string, int> { { "", 0 }, };
// Make the request
Operation<DeployModelResponse, DeployModelOperationMetadata> response = endpointServiceClient.DeployModel(endpoint, deployedModel, trafficSplit);

// Poll until the returned long-running operation is complete
Operation<DeployModelResponse, DeployModelOperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
DeployModelResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<DeployModelResponse, DeployModelOperationMetadata> retrievedResponse = endpointServiceClient.PollOnceDeployModel(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    DeployModelResponse retrievedResult = retrievedResponse.Result;
}
```

### DeployModel(string, DeployedModel, IDictionary<string, int>, CallSettings)

```
public virtual Operation<DeployModelResponse, DeployModelOperationMetadata> DeployModel(string endpoint, DeployedModel deployedModel, IDictionary<string, int> trafficSplit, CallSettings callSettings = null)
```

Deploys a Model into this Endpoint, creating a DeployedModel within it.

**Parameters**

**Name**

**Description**

`endpoint`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the Endpoint resource into which to deploy a Model. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`

`deployedModel`

`[DeployedModel](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployedModel)`  

Required. The DeployedModel to be created within the Endpoint. Note that \[Endpoint.traffic\_split\]\[google.cloud.aiplatform.v1.Endpoint.traffic\_split\] must be updated for the DeployedModel to start receiving traffic, either as part of this call, or via \[EndpointService.UpdateEndpoint\]\[google.cloud.aiplatform.v1.EndpointService.UpdateEndpoint\].

`trafficSplit`

`[IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2)[string](https://learn.microsoft.com/dotnet/api/system.string)[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

A map from a DeployedModel's ID to the percentage of this Endpoint's traffic that should be forwarded to that DeployedModel.

If this field is non-empty, then the Endpoint's \[traffic\_split\]\[google.cloud.aiplatform.v1.Endpoint.traffic\_split\] will be overwritten with it. To refer to the ID of the just being deployed Model, a "0" should be used, and the actual ID of the new DeployedModel will be filled in its place by this method. The traffic percentage values must add up to 100.

If this field is empty, then the Endpoint's \[traffic\_split\]\[google.cloud.aiplatform.v1.Endpoint.traffic\_split\] is not updated.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[DeployModelResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployModelResponse)[DeployModelOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployModelOperationMetadata)`

The RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = EndpointServiceClient.Create();
// Initialize request argument(s)
string endpoint = "projects/[PROJECT]/locations/[LOCATION]/endpoints/[ENDPOINT]";
DeployedModel deployedModel = new DeployedModel();
IDictionary<string, int> trafficSplit = new Dictionary<string, int> { { "", 0 }, };
// Make the request
Operation<DeployModelResponse, DeployModelOperationMetadata> response = endpointServiceClient.DeployModel(endpoint, deployedModel, trafficSplit);

// Poll until the returned long-running operation is complete
Operation<DeployModelResponse, DeployModelOperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
DeployModelResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<DeployModelResponse, DeployModelOperationMetadata> retrievedResponse = endpointServiceClient.PollOnceDeployModel(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    DeployModelResponse retrievedResult = retrievedResponse.Result;
}
```

### DeployModelAsync(DeployModelRequest, CallSettings)

```
public virtual Task<Operation<DeployModelResponse, DeployModelOperationMetadata>> DeployModelAsync(DeployModelRequest request, CallSettings callSettings = null)
```

Deploys a Model into this Endpoint, creating a DeployedModel within it.

**Parameters**

**Name**

**Description**

`request`

`[DeployModelRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployModelRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[DeployModelResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployModelResponse)[DeployModelOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployModelOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
DeployModelRequest request = new DeployModelRequest
{
    EndpointAsEndpointName = EndpointName.FromProjectLocationEndpoint("[PROJECT]", "[LOCATION]", "[ENDPOINT]"),
    DeployedModel = new DeployedModel(),
    TrafficSplit = { { "", 0 }, },
};
// Make the request
Operation<DeployModelResponse, DeployModelOperationMetadata> response = await endpointServiceClient.DeployModelAsync(request);

// Poll until the returned long-running operation is complete
Operation<DeployModelResponse, DeployModelOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
DeployModelResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<DeployModelResponse, DeployModelOperationMetadata> retrievedResponse = await endpointServiceClient.PollOnceDeployModelAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    DeployModelResponse retrievedResult = retrievedResponse.Result;
}
```

### DeployModelAsync(DeployModelRequest, CancellationToken)

```
public virtual Task<Operation<DeployModelResponse, DeployModelOperationMetadata>> DeployModelAsync(DeployModelRequest request, CancellationToken cancellationToken)
```

Deploys a Model into this Endpoint, creating a DeployedModel within it.

**Parameters**

**Name**

**Description**

`request`

`[DeployModelRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployModelRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[DeployModelResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployModelResponse)[DeployModelOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployModelOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
DeployModelRequest request = new DeployModelRequest
{
    EndpointAsEndpointName = EndpointName.FromProjectLocationEndpoint("[PROJECT]", "[LOCATION]", "[ENDPOINT]"),
    DeployedModel = new DeployedModel(),
    TrafficSplit = { { "", 0 }, },
};
// Make the request
Operation<DeployModelResponse, DeployModelOperationMetadata> response = await endpointServiceClient.DeployModelAsync(request);

// Poll until the returned long-running operation is complete
Operation<DeployModelResponse, DeployModelOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
DeployModelResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<DeployModelResponse, DeployModelOperationMetadata> retrievedResponse = await endpointServiceClient.PollOnceDeployModelAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    DeployModelResponse retrievedResult = retrievedResponse.Result;
}
```

### DeployModelAsync(EndpointName, DeployedModel, IDictionary<string, int>, CallSettings)

```
public virtual Task<Operation<DeployModelResponse, DeployModelOperationMetadata>> DeployModelAsync(EndpointName endpoint, DeployedModel deployedModel, IDictionary<string, int> trafficSplit, CallSettings callSettings = null)
```

Deploys a Model into this Endpoint, creating a DeployedModel within it.

**Parameters**

**Name**

**Description**

`endpoint`

`[EndpointName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.EndpointName)`  

Required. The name of the Endpoint resource into which to deploy a Model. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`

`deployedModel`

`[DeployedModel](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployedModel)`  

Required. The DeployedModel to be created within the Endpoint. Note that \[Endpoint.traffic\_split\]\[google.cloud.aiplatform.v1.Endpoint.traffic\_split\] must be updated for the DeployedModel to start receiving traffic, either as part of this call, or via \[EndpointService.UpdateEndpoint\]\[google.cloud.aiplatform.v1.EndpointService.UpdateEndpoint\].

`trafficSplit`

`[IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2)[string](https://learn.microsoft.com/dotnet/api/system.string)[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

A map from a DeployedModel's ID to the percentage of this Endpoint's traffic that should be forwarded to that DeployedModel.

If this field is non-empty, then the Endpoint's \[traffic\_split\]\[google.cloud.aiplatform.v1.Endpoint.traffic\_split\] will be overwritten with it. To refer to the ID of the just being deployed Model, a "0" should be used, and the actual ID of the new DeployedModel will be filled in its place by this method. The traffic percentage values must add up to 100.

If this field is empty, then the Endpoint's \[traffic\_split\]\[google.cloud.aiplatform.v1.Endpoint.traffic\_split\] is not updated.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[DeployModelResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployModelResponse)[DeployModelOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployModelOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
EndpointName endpoint = EndpointName.FromProjectLocationEndpoint("[PROJECT]", "[LOCATION]", "[ENDPOINT]");
DeployedModel deployedModel = new DeployedModel();
IDictionary<string, int> trafficSplit = new Dictionary<string, int> { { "", 0 }, };
// Make the request
Operation<DeployModelResponse, DeployModelOperationMetadata> response = await endpointServiceClient.DeployModelAsync(endpoint, deployedModel, trafficSplit);

// Poll until the returned long-running operation is complete
Operation<DeployModelResponse, DeployModelOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
DeployModelResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<DeployModelResponse, DeployModelOperationMetadata> retrievedResponse = await endpointServiceClient.PollOnceDeployModelAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    DeployModelResponse retrievedResult = retrievedResponse.Result;
}
```

### DeployModelAsync(EndpointName, DeployedModel, IDictionary<string, int>, CancellationToken)

```
public virtual Task<Operation<DeployModelResponse, DeployModelOperationMetadata>> DeployModelAsync(EndpointName endpoint, DeployedModel deployedModel, IDictionary<string, int> trafficSplit, CancellationToken cancellationToken)
```

Deploys a Model into this Endpoint, creating a DeployedModel within it.

**Parameters**

**Name**

**Description**

`endpoint`

`[EndpointName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.EndpointName)`  

Required. The name of the Endpoint resource into which to deploy a Model. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`

`deployedModel`

`[DeployedModel](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployedModel)`  

Required. The DeployedModel to be created within the Endpoint. Note that \[Endpoint.traffic\_split\]\[google.cloud.aiplatform.v1.Endpoint.traffic\_split\] must be updated for the DeployedModel to start receiving traffic, either as part of this call, or via \[EndpointService.UpdateEndpoint\]\[google.cloud.aiplatform.v1.EndpointService.UpdateEndpoint\].

`trafficSplit`

`[IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2)[string](https://learn.microsoft.com/dotnet/api/system.string)[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

A map from a DeployedModel's ID to the percentage of this Endpoint's traffic that should be forwarded to that DeployedModel.

If this field is non-empty, then the Endpoint's \[traffic\_split\]\[google.cloud.aiplatform.v1.Endpoint.traffic\_split\] will be overwritten with it. To refer to the ID of the just being deployed Model, a "0" should be used, and the actual ID of the new DeployedModel will be filled in its place by this method. The traffic percentage values must add up to 100.

If this field is empty, then the Endpoint's \[traffic\_split\]\[google.cloud.aiplatform.v1.Endpoint.traffic\_split\] is not updated.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[DeployModelResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployModelResponse)[DeployModelOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployModelOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
EndpointName endpoint = EndpointName.FromProjectLocationEndpoint("[PROJECT]", "[LOCATION]", "[ENDPOINT]");
DeployedModel deployedModel = new DeployedModel();
IDictionary<string, int> trafficSplit = new Dictionary<string, int> { { "", 0 }, };
// Make the request
Operation<DeployModelResponse, DeployModelOperationMetadata> response = await endpointServiceClient.DeployModelAsync(endpoint, deployedModel, trafficSplit);

// Poll until the returned long-running operation is complete
Operation<DeployModelResponse, DeployModelOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
DeployModelResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<DeployModelResponse, DeployModelOperationMetadata> retrievedResponse = await endpointServiceClient.PollOnceDeployModelAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    DeployModelResponse retrievedResult = retrievedResponse.Result;
}
```

### DeployModelAsync(string, DeployedModel, IDictionary<string, int>, CallSettings)

```
public virtual Task<Operation<DeployModelResponse, DeployModelOperationMetadata>> DeployModelAsync(string endpoint, DeployedModel deployedModel, IDictionary<string, int> trafficSplit, CallSettings callSettings = null)
```

Deploys a Model into this Endpoint, creating a DeployedModel within it.

**Parameters**

**Name**

**Description**

`endpoint`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the Endpoint resource into which to deploy a Model. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`

`deployedModel`

`[DeployedModel](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployedModel)`  

Required. The DeployedModel to be created within the Endpoint. Note that \[Endpoint.traffic\_split\]\[google.cloud.aiplatform.v1.Endpoint.traffic\_split\] must be updated for the DeployedModel to start receiving traffic, either as part of this call, or via \[EndpointService.UpdateEndpoint\]\[google.cloud.aiplatform.v1.EndpointService.UpdateEndpoint\].

`trafficSplit`

`[IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2)[string](https://learn.microsoft.com/dotnet/api/system.string)[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

A map from a DeployedModel's ID to the percentage of this Endpoint's traffic that should be forwarded to that DeployedModel.

If this field is non-empty, then the Endpoint's \[traffic\_split\]\[google.cloud.aiplatform.v1.Endpoint.traffic\_split\] will be overwritten with it. To refer to the ID of the just being deployed Model, a "0" should be used, and the actual ID of the new DeployedModel will be filled in its place by this method. The traffic percentage values must add up to 100.

If this field is empty, then the Endpoint's \[traffic\_split\]\[google.cloud.aiplatform.v1.Endpoint.traffic\_split\] is not updated.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[DeployModelResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployModelResponse)[DeployModelOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployModelOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
string endpoint = "projects/[PROJECT]/locations/[LOCATION]/endpoints/[ENDPOINT]";
DeployedModel deployedModel = new DeployedModel();
IDictionary<string, int> trafficSplit = new Dictionary<string, int> { { "", 0 }, };
// Make the request
Operation<DeployModelResponse, DeployModelOperationMetadata> response = await endpointServiceClient.DeployModelAsync(endpoint, deployedModel, trafficSplit);

// Poll until the returned long-running operation is complete
Operation<DeployModelResponse, DeployModelOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
DeployModelResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<DeployModelResponse, DeployModelOperationMetadata> retrievedResponse = await endpointServiceClient.PollOnceDeployModelAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    DeployModelResponse retrievedResult = retrievedResponse.Result;
}
```

### DeployModelAsync(string, DeployedModel, IDictionary<string, int>, CancellationToken)

```
public virtual Task<Operation<DeployModelResponse, DeployModelOperationMetadata>> DeployModelAsync(string endpoint, DeployedModel deployedModel, IDictionary<string, int> trafficSplit, CancellationToken cancellationToken)
```

Deploys a Model into this Endpoint, creating a DeployedModel within it.

**Parameters**

**Name**

**Description**

`endpoint`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the Endpoint resource into which to deploy a Model. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`

`deployedModel`

`[DeployedModel](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployedModel)`  

Required. The DeployedModel to be created within the Endpoint. Note that \[Endpoint.traffic\_split\]\[google.cloud.aiplatform.v1.Endpoint.traffic\_split\] must be updated for the DeployedModel to start receiving traffic, either as part of this call, or via \[EndpointService.UpdateEndpoint\]\[google.cloud.aiplatform.v1.EndpointService.UpdateEndpoint\].

`trafficSplit`

`[IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2)[string](https://learn.microsoft.com/dotnet/api/system.string)[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

A map from a DeployedModel's ID to the percentage of this Endpoint's traffic that should be forwarded to that DeployedModel.

If this field is non-empty, then the Endpoint's \[traffic\_split\]\[google.cloud.aiplatform.v1.Endpoint.traffic\_split\] will be overwritten with it. To refer to the ID of the just being deployed Model, a "0" should be used, and the actual ID of the new DeployedModel will be filled in its place by this method. The traffic percentage values must add up to 100.

If this field is empty, then the Endpoint's \[traffic\_split\]\[google.cloud.aiplatform.v1.Endpoint.traffic\_split\] is not updated.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[DeployModelResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployModelResponse)[DeployModelOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployModelOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
string endpoint = "projects/[PROJECT]/locations/[LOCATION]/endpoints/[ENDPOINT]";
DeployedModel deployedModel = new DeployedModel();
IDictionary<string, int> trafficSplit = new Dictionary<string, int> { { "", 0 }, };
// Make the request
Operation<DeployModelResponse, DeployModelOperationMetadata> response = await endpointServiceClient.DeployModelAsync(endpoint, deployedModel, trafficSplit);

// Poll until the returned long-running operation is complete
Operation<DeployModelResponse, DeployModelOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
DeployModelResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<DeployModelResponse, DeployModelOperationMetadata> retrievedResponse = await endpointServiceClient.PollOnceDeployModelAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    DeployModelResponse retrievedResult = retrievedResponse.Result;
}
```

### GetEndpoint(EndpointName, CallSettings)

```
public virtual Endpoint GetEndpoint(EndpointName name, CallSettings callSettings = null)
```

Gets an Endpoint.

**Parameters**

**Name**

**Description**

`name`

`[EndpointName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.EndpointName)`  

Required. The name of the Endpoint resource. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)`

The RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = EndpointServiceClient.Create();
// Initialize request argument(s)
EndpointName name = EndpointName.FromProjectLocationEndpoint("[PROJECT]", "[LOCATION]", "[ENDPOINT]");
// Make the request
Endpoint response = endpointServiceClient.GetEndpoint(name);
```

### GetEndpoint(GetEndpointRequest, CallSettings)

```
public virtual Endpoint GetEndpoint(GetEndpointRequest request, CallSettings callSettings = null)
```

Gets an Endpoint.

**Parameters**

**Name**

**Description**

`request`

`[GetEndpointRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.GetEndpointRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)`

The RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = EndpointServiceClient.Create();
// Initialize request argument(s)
GetEndpointRequest request = new GetEndpointRequest
{
    EndpointName = EndpointName.FromProjectLocationEndpoint("[PROJECT]", "[LOCATION]", "[ENDPOINT]"),
};
// Make the request
Endpoint response = endpointServiceClient.GetEndpoint(request);
```

### GetEndpoint(string, CallSettings)

```
public virtual Endpoint GetEndpoint(string name, CallSettings callSettings = null)
```

Gets an Endpoint.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the Endpoint resource. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)`

The RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = EndpointServiceClient.Create();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/endpoints/[ENDPOINT]";
// Make the request
Endpoint response = endpointServiceClient.GetEndpoint(name);
```

### GetEndpointAsync(EndpointName, CallSettings)

```
public virtual Task<Endpoint> GetEndpointAsync(EndpointName name, CallSettings callSettings = null)
```

Gets an Endpoint.

**Parameters**

**Name**

**Description**

`name`

`[EndpointName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.EndpointName)`  

Required. The name of the Endpoint resource. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
EndpointName name = EndpointName.FromProjectLocationEndpoint("[PROJECT]", "[LOCATION]", "[ENDPOINT]");
// Make the request
Endpoint response = await endpointServiceClient.GetEndpointAsync(name);
```

### GetEndpointAsync(EndpointName, CancellationToken)

```
public virtual Task<Endpoint> GetEndpointAsync(EndpointName name, CancellationToken cancellationToken)
```

Gets an Endpoint.

**Parameters**

**Name**

**Description**

`name`

`[EndpointName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.EndpointName)`  

Required. The name of the Endpoint resource. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
EndpointName name = EndpointName.FromProjectLocationEndpoint("[PROJECT]", "[LOCATION]", "[ENDPOINT]");
// Make the request
Endpoint response = await endpointServiceClient.GetEndpointAsync(name);
```

### GetEndpointAsync(GetEndpointRequest, CallSettings)

```
public virtual Task<Endpoint> GetEndpointAsync(GetEndpointRequest request, CallSettings callSettings = null)
```

Gets an Endpoint.

**Parameters**

**Name**

**Description**

`request`

`[GetEndpointRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.GetEndpointRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
GetEndpointRequest request = new GetEndpointRequest
{
    EndpointName = EndpointName.FromProjectLocationEndpoint("[PROJECT]", "[LOCATION]", "[ENDPOINT]"),
};
// Make the request
Endpoint response = await endpointServiceClient.GetEndpointAsync(request);
```

### GetEndpointAsync(GetEndpointRequest, CancellationToken)

```
public virtual Task<Endpoint> GetEndpointAsync(GetEndpointRequest request, CancellationToken cancellationToken)
```

Gets an Endpoint.

**Parameters**

**Name**

**Description**

`request`

`[GetEndpointRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.GetEndpointRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
GetEndpointRequest request = new GetEndpointRequest
{
    EndpointName = EndpointName.FromProjectLocationEndpoint("[PROJECT]", "[LOCATION]", "[ENDPOINT]"),
};
// Make the request
Endpoint response = await endpointServiceClient.GetEndpointAsync(request);
```

### GetEndpointAsync(string, CallSettings)

```
public virtual Task<Endpoint> GetEndpointAsync(string name, CallSettings callSettings = null)
```

Gets an Endpoint.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the Endpoint resource. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/endpoints/[ENDPOINT]";
// Make the request
Endpoint response = await endpointServiceClient.GetEndpointAsync(name);
```

### GetEndpointAsync(string, CancellationToken)

```
public virtual Task<Endpoint> GetEndpointAsync(string name, CancellationToken cancellationToken)
```

Gets an Endpoint.

**Parameters**

**Name**

**Description**

`name`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the Endpoint resource. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
string name = "projects/[PROJECT]/locations/[LOCATION]/endpoints/[ENDPOINT]";
// Make the request
Endpoint response = await endpointServiceClient.GetEndpointAsync(name);
```

### ListEndpoints(LocationName, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListEndpointsResponse, Endpoint> ListEndpoints(LocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists Endpoints in a Location.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/ResourceNames/LocationName.cs)`  

Required. The resource name of the Location from which to list the Endpoints. Format: `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/PagedEnumerable.cs)[ListEndpointsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.ListEndpointsResponse)[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)`

A pageable sequence of [Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint) resources.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = EndpointServiceClient.Create();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
// Make the request
PagedEnumerable<ListEndpointsResponse, Endpoint> response = endpointServiceClient.ListEndpoints(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (Endpoint item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListEndpointsResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Endpoint item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Endpoint> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Endpoint item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEndpoints(ListEndpointsRequest, CallSettings)

```
public virtual PagedEnumerable<ListEndpointsResponse, Endpoint> ListEndpoints(ListEndpointsRequest request, CallSettings callSettings = null)
```

Lists Endpoints in a Location.

**Parameters**

**Name**

**Description**

`request`

`[ListEndpointsRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.ListEndpointsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/PagedEnumerable.cs)[ListEndpointsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.ListEndpointsResponse)[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)`

A pageable sequence of [Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint) resources.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = EndpointServiceClient.Create();
// Initialize request argument(s)
ListEndpointsRequest request = new ListEndpointsRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    Filter = "",
    ReadMask = new FieldMask(),
    OrderBy = "",
};
// Make the request
PagedEnumerable<ListEndpointsResponse, Endpoint> response = endpointServiceClient.ListEndpoints(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (Endpoint item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListEndpointsResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Endpoint item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Endpoint> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Endpoint item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEndpoints(string, string, int?, CallSettings)

```
public virtual PagedEnumerable<ListEndpointsResponse, Endpoint> ListEndpoints(string parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists Endpoints in a Location.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the Location from which to list the Endpoints. Format: `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/PagedEnumerable.cs)[ListEndpointsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.ListEndpointsResponse)[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)`

A pageable sequence of [Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint) resources.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = EndpointServiceClient.Create();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
// Make the request
PagedEnumerable<ListEndpointsResponse, Endpoint> response = endpointServiceClient.ListEndpoints(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (Endpoint item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListEndpointsResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Endpoint item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Endpoint> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Endpoint item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEndpointsAsync(LocationName, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListEndpointsResponse, Endpoint> ListEndpointsAsync(LocationName parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists Endpoints in a Location.

**Parameters**

**Name**

**Description**

`parent`

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/ResourceNames/LocationName.cs)`  

Required. The resource name of the Location from which to list the Endpoints. Format: `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListEndpointsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.ListEndpointsResponse)[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)`

A pageable asynchronous sequence of [Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint) resources.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
LocationName parent = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]");
// Make the request
PagedAsyncEnumerable<ListEndpointsResponse, Endpoint> response = endpointServiceClient.ListEndpointsAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((Endpoint item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListEndpointsResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Endpoint item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Endpoint> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Endpoint item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEndpointsAsync(ListEndpointsRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListEndpointsResponse, Endpoint> ListEndpointsAsync(ListEndpointsRequest request, CallSettings callSettings = null)
```

Lists Endpoints in a Location.

**Parameters**

**Name**

**Description**

`request`

`[ListEndpointsRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.ListEndpointsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListEndpointsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.ListEndpointsResponse)[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)`

A pageable asynchronous sequence of [Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint) resources.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
ListEndpointsRequest request = new ListEndpointsRequest
{
    ParentAsLocationName = LocationName.FromProjectLocation("[PROJECT]", "[LOCATION]"),
    Filter = "",
    ReadMask = new FieldMask(),
    OrderBy = "",
};
// Make the request
PagedAsyncEnumerable<ListEndpointsResponse, Endpoint> response = endpointServiceClient.ListEndpointsAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((Endpoint item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListEndpointsResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Endpoint item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Endpoint> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Endpoint item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListEndpointsAsync(string, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ListEndpointsResponse, Endpoint> ListEndpointsAsync(string parent, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists Endpoints in a Location.

**Parameters**

**Name**

**Description**

`parent`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the Location from which to list the Endpoints. Format: `projects/{project}/locations/{location}`

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/PagedAsyncEnumerable.cs)[ListEndpointsResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.ListEndpointsResponse)[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)`

A pageable asynchronous sequence of [Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint) resources.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]/locations/[LOCATION]";
// Make the request
PagedAsyncEnumerable<ListEndpointsResponse, Endpoint> response = endpointServiceClient.ListEndpointsAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((Endpoint item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListEndpointsResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Endpoint item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Endpoint> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Endpoint item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### MutateDeployedModel(EndpointName, DeployedModel, FieldMask, CallSettings)

```
public virtual Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata> MutateDeployedModel(EndpointName endpoint, DeployedModel deployedModel, FieldMask updateMask, CallSettings callSettings = null)
```

Updates an existing deployed model. Updatable fields include `min_replica_count`, `max_replica_count`, `autoscaling_metric_specs`, `disable_container_logging` (v1 only), and `enable_container_logging` (v1beta1 only).

**Parameters**

**Name**

**Description**

`endpoint`

`[EndpointName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.EndpointName)`  

Required. The name of the Endpoint resource into which to mutate a DeployedModel. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`

`deployedModel`

`[DeployedModel](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployedModel)`  

Required. The DeployedModel to be mutated within the Endpoint. Only the following fields can be mutated:

-   `min_replica_count` in either \[DedicatedResources\]\[google.cloud.aiplatform.v1.DedicatedResources\] or \[AutomaticResources\]\[google.cloud.aiplatform.v1.AutomaticResources\]
-   `max_replica_count` in either \[DedicatedResources\]\[google.cloud.aiplatform.v1.DedicatedResources\] or \[AutomaticResources\]\[google.cloud.aiplatform.v1.AutomaticResources\]
-   \[autoscaling\_metric\_specs\]\[google.cloud.aiplatform.v1.DedicatedResources.autoscaling\_metric\_specs\]
-   `disable_container_logging` (v1 only)
-   `enable_container_logging` (v1beta1 only)

`updateMask`

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`  

Required. The update mask applies to the resource. See \[google.protobuf.FieldMask\]\[google.protobuf.FieldMask\].

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[MutateDeployedModelResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.MutateDeployedModelResponse)[MutateDeployedModelOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.MutateDeployedModelOperationMetadata)`

The RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = EndpointServiceClient.Create();
// Initialize request argument(s)
EndpointName endpoint = EndpointName.FromProjectLocationEndpoint("[PROJECT]", "[LOCATION]", "[ENDPOINT]");
DeployedModel deployedModel = new DeployedModel();
FieldMask updateMask = new FieldMask();
// Make the request
Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata> response = endpointServiceClient.MutateDeployedModel(endpoint, deployedModel, updateMask);

// Poll until the returned long-running operation is complete
Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
MutateDeployedModelResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata> retrievedResponse = endpointServiceClient.PollOnceMutateDeployedModel(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    MutateDeployedModelResponse retrievedResult = retrievedResponse.Result;
}
```

### MutateDeployedModel(MutateDeployedModelRequest, CallSettings)

```
public virtual Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata> MutateDeployedModel(MutateDeployedModelRequest request, CallSettings callSettings = null)
```

Updates an existing deployed model. Updatable fields include `min_replica_count`, `max_replica_count`, `autoscaling_metric_specs`, `disable_container_logging` (v1 only), and `enable_container_logging` (v1beta1 only).

**Parameters**

**Name**

**Description**

`request`

`[MutateDeployedModelRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.MutateDeployedModelRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[MutateDeployedModelResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.MutateDeployedModelResponse)[MutateDeployedModelOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.MutateDeployedModelOperationMetadata)`

The RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = EndpointServiceClient.Create();
// Initialize request argument(s)
MutateDeployedModelRequest request = new MutateDeployedModelRequest
{
    EndpointAsEndpointName = EndpointName.FromProjectLocationEndpoint("[PROJECT]", "[LOCATION]", "[ENDPOINT]"),
    DeployedModel = new DeployedModel(),
    UpdateMask = new FieldMask(),
};
// Make the request
Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata> response = endpointServiceClient.MutateDeployedModel(request);

// Poll until the returned long-running operation is complete
Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
MutateDeployedModelResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata> retrievedResponse = endpointServiceClient.PollOnceMutateDeployedModel(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    MutateDeployedModelResponse retrievedResult = retrievedResponse.Result;
}
```

### MutateDeployedModel(string, DeployedModel, FieldMask, CallSettings)

```
public virtual Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata> MutateDeployedModel(string endpoint, DeployedModel deployedModel, FieldMask updateMask, CallSettings callSettings = null)
```

Updates an existing deployed model. Updatable fields include `min_replica_count`, `max_replica_count`, `autoscaling_metric_specs`, `disable_container_logging` (v1 only), and `enable_container_logging` (v1beta1 only).

**Parameters**

**Name**

**Description**

`endpoint`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the Endpoint resource into which to mutate a DeployedModel. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`

`deployedModel`

`[DeployedModel](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployedModel)`  

Required. The DeployedModel to be mutated within the Endpoint. Only the following fields can be mutated:

-   `min_replica_count` in either \[DedicatedResources\]\[google.cloud.aiplatform.v1.DedicatedResources\] or \[AutomaticResources\]\[google.cloud.aiplatform.v1.AutomaticResources\]
-   `max_replica_count` in either \[DedicatedResources\]\[google.cloud.aiplatform.v1.DedicatedResources\] or \[AutomaticResources\]\[google.cloud.aiplatform.v1.AutomaticResources\]
-   \[autoscaling\_metric\_specs\]\[google.cloud.aiplatform.v1.DedicatedResources.autoscaling\_metric\_specs\]
-   `disable_container_logging` (v1 only)
-   `enable_container_logging` (v1beta1 only)

`updateMask`

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`  

Required. The update mask applies to the resource. See \[google.protobuf.FieldMask\]\[google.protobuf.FieldMask\].

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[MutateDeployedModelResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.MutateDeployedModelResponse)[MutateDeployedModelOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.MutateDeployedModelOperationMetadata)`

The RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = EndpointServiceClient.Create();
// Initialize request argument(s)
string endpoint = "projects/[PROJECT]/locations/[LOCATION]/endpoints/[ENDPOINT]";
DeployedModel deployedModel = new DeployedModel();
FieldMask updateMask = new FieldMask();
// Make the request
Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata> response = endpointServiceClient.MutateDeployedModel(endpoint, deployedModel, updateMask);

// Poll until the returned long-running operation is complete
Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
MutateDeployedModelResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata> retrievedResponse = endpointServiceClient.PollOnceMutateDeployedModel(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    MutateDeployedModelResponse retrievedResult = retrievedResponse.Result;
}
```

### MutateDeployedModelAsync(EndpointName, DeployedModel, FieldMask, CallSettings)

```
public virtual Task<Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata>> MutateDeployedModelAsync(EndpointName endpoint, DeployedModel deployedModel, FieldMask updateMask, CallSettings callSettings = null)
```

Updates an existing deployed model. Updatable fields include `min_replica_count`, `max_replica_count`, `autoscaling_metric_specs`, `disable_container_logging` (v1 only), and `enable_container_logging` (v1beta1 only).

**Parameters**

**Name**

**Description**

`endpoint`

`[EndpointName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.EndpointName)`  

Required. The name of the Endpoint resource into which to mutate a DeployedModel. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`

`deployedModel`

`[DeployedModel](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployedModel)`  

Required. The DeployedModel to be mutated within the Endpoint. Only the following fields can be mutated:

-   `min_replica_count` in either \[DedicatedResources\]\[google.cloud.aiplatform.v1.DedicatedResources\] or \[AutomaticResources\]\[google.cloud.aiplatform.v1.AutomaticResources\]
-   `max_replica_count` in either \[DedicatedResources\]\[google.cloud.aiplatform.v1.DedicatedResources\] or \[AutomaticResources\]\[google.cloud.aiplatform.v1.AutomaticResources\]
-   \[autoscaling\_metric\_specs\]\[google.cloud.aiplatform.v1.DedicatedResources.autoscaling\_metric\_specs\]
-   `disable_container_logging` (v1 only)
-   `enable_container_logging` (v1beta1 only)

`updateMask`

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`  

Required. The update mask applies to the resource. See \[google.protobuf.FieldMask\]\[google.protobuf.FieldMask\].

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[MutateDeployedModelResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.MutateDeployedModelResponse)[MutateDeployedModelOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.MutateDeployedModelOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
EndpointName endpoint = EndpointName.FromProjectLocationEndpoint("[PROJECT]", "[LOCATION]", "[ENDPOINT]");
DeployedModel deployedModel = new DeployedModel();
FieldMask updateMask = new FieldMask();
// Make the request
Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata> response = await endpointServiceClient.MutateDeployedModelAsync(endpoint, deployedModel, updateMask);

// Poll until the returned long-running operation is complete
Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
MutateDeployedModelResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata> retrievedResponse = await endpointServiceClient.PollOnceMutateDeployedModelAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    MutateDeployedModelResponse retrievedResult = retrievedResponse.Result;
}
```

### MutateDeployedModelAsync(EndpointName, DeployedModel, FieldMask, CancellationToken)

```
public virtual Task<Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata>> MutateDeployedModelAsync(EndpointName endpoint, DeployedModel deployedModel, FieldMask updateMask, CancellationToken cancellationToken)
```

Updates an existing deployed model. Updatable fields include `min_replica_count`, `max_replica_count`, `autoscaling_metric_specs`, `disable_container_logging` (v1 only), and `enable_container_logging` (v1beta1 only).

**Parameters**

**Name**

**Description**

`endpoint`

`[EndpointName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.EndpointName)`  

Required. The name of the Endpoint resource into which to mutate a DeployedModel. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`

`deployedModel`

`[DeployedModel](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployedModel)`  

Required. The DeployedModel to be mutated within the Endpoint. Only the following fields can be mutated:

-   `min_replica_count` in either \[DedicatedResources\]\[google.cloud.aiplatform.v1.DedicatedResources\] or \[AutomaticResources\]\[google.cloud.aiplatform.v1.AutomaticResources\]
-   `max_replica_count` in either \[DedicatedResources\]\[google.cloud.aiplatform.v1.DedicatedResources\] or \[AutomaticResources\]\[google.cloud.aiplatform.v1.AutomaticResources\]
-   \[autoscaling\_metric\_specs\]\[google.cloud.aiplatform.v1.DedicatedResources.autoscaling\_metric\_specs\]
-   `disable_container_logging` (v1 only)
-   `enable_container_logging` (v1beta1 only)

`updateMask`

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`  

Required. The update mask applies to the resource. See \[google.protobuf.FieldMask\]\[google.protobuf.FieldMask\].

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[MutateDeployedModelResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.MutateDeployedModelResponse)[MutateDeployedModelOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.MutateDeployedModelOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
EndpointName endpoint = EndpointName.FromProjectLocationEndpoint("[PROJECT]", "[LOCATION]", "[ENDPOINT]");
DeployedModel deployedModel = new DeployedModel();
FieldMask updateMask = new FieldMask();
// Make the request
Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata> response = await endpointServiceClient.MutateDeployedModelAsync(endpoint, deployedModel, updateMask);

// Poll until the returned long-running operation is complete
Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
MutateDeployedModelResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata> retrievedResponse = await endpointServiceClient.PollOnceMutateDeployedModelAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    MutateDeployedModelResponse retrievedResult = retrievedResponse.Result;
}
```

### MutateDeployedModelAsync(MutateDeployedModelRequest, CallSettings)

```
public virtual Task<Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata>> MutateDeployedModelAsync(MutateDeployedModelRequest request, CallSettings callSettings = null)
```

Updates an existing deployed model. Updatable fields include `min_replica_count`, `max_replica_count`, `autoscaling_metric_specs`, `disable_container_logging` (v1 only), and `enable_container_logging` (v1beta1 only).

**Parameters**

**Name**

**Description**

`request`

`[MutateDeployedModelRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.MutateDeployedModelRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[MutateDeployedModelResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.MutateDeployedModelResponse)[MutateDeployedModelOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.MutateDeployedModelOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
MutateDeployedModelRequest request = new MutateDeployedModelRequest
{
    EndpointAsEndpointName = EndpointName.FromProjectLocationEndpoint("[PROJECT]", "[LOCATION]", "[ENDPOINT]"),
    DeployedModel = new DeployedModel(),
    UpdateMask = new FieldMask(),
};
// Make the request
Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata> response = await endpointServiceClient.MutateDeployedModelAsync(request);

// Poll until the returned long-running operation is complete
Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
MutateDeployedModelResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata> retrievedResponse = await endpointServiceClient.PollOnceMutateDeployedModelAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    MutateDeployedModelResponse retrievedResult = retrievedResponse.Result;
}
```

### MutateDeployedModelAsync(MutateDeployedModelRequest, CancellationToken)

```
public virtual Task<Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata>> MutateDeployedModelAsync(MutateDeployedModelRequest request, CancellationToken cancellationToken)
```

Updates an existing deployed model. Updatable fields include `min_replica_count`, `max_replica_count`, `autoscaling_metric_specs`, `disable_container_logging` (v1 only), and `enable_container_logging` (v1beta1 only).

**Parameters**

**Name**

**Description**

`request`

`[MutateDeployedModelRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.MutateDeployedModelRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[MutateDeployedModelResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.MutateDeployedModelResponse)[MutateDeployedModelOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.MutateDeployedModelOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
MutateDeployedModelRequest request = new MutateDeployedModelRequest
{
    EndpointAsEndpointName = EndpointName.FromProjectLocationEndpoint("[PROJECT]", "[LOCATION]", "[ENDPOINT]"),
    DeployedModel = new DeployedModel(),
    UpdateMask = new FieldMask(),
};
// Make the request
Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata> response = await endpointServiceClient.MutateDeployedModelAsync(request);

// Poll until the returned long-running operation is complete
Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
MutateDeployedModelResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata> retrievedResponse = await endpointServiceClient.PollOnceMutateDeployedModelAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    MutateDeployedModelResponse retrievedResult = retrievedResponse.Result;
}
```

### MutateDeployedModelAsync(string, DeployedModel, FieldMask, CallSettings)

```
public virtual Task<Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata>> MutateDeployedModelAsync(string endpoint, DeployedModel deployedModel, FieldMask updateMask, CallSettings callSettings = null)
```

Updates an existing deployed model. Updatable fields include `min_replica_count`, `max_replica_count`, `autoscaling_metric_specs`, `disable_container_logging` (v1 only), and `enable_container_logging` (v1beta1 only).

**Parameters**

**Name**

**Description**

`endpoint`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the Endpoint resource into which to mutate a DeployedModel. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`

`deployedModel`

`[DeployedModel](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployedModel)`  

Required. The DeployedModel to be mutated within the Endpoint. Only the following fields can be mutated:

-   `min_replica_count` in either \[DedicatedResources\]\[google.cloud.aiplatform.v1.DedicatedResources\] or \[AutomaticResources\]\[google.cloud.aiplatform.v1.AutomaticResources\]
-   `max_replica_count` in either \[DedicatedResources\]\[google.cloud.aiplatform.v1.DedicatedResources\] or \[AutomaticResources\]\[google.cloud.aiplatform.v1.AutomaticResources\]
-   \[autoscaling\_metric\_specs\]\[google.cloud.aiplatform.v1.DedicatedResources.autoscaling\_metric\_specs\]
-   `disable_container_logging` (v1 only)
-   `enable_container_logging` (v1beta1 only)

`updateMask`

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`  

Required. The update mask applies to the resource. See \[google.protobuf.FieldMask\]\[google.protobuf.FieldMask\].

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[MutateDeployedModelResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.MutateDeployedModelResponse)[MutateDeployedModelOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.MutateDeployedModelOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
string endpoint = "projects/[PROJECT]/locations/[LOCATION]/endpoints/[ENDPOINT]";
DeployedModel deployedModel = new DeployedModel();
FieldMask updateMask = new FieldMask();
// Make the request
Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata> response = await endpointServiceClient.MutateDeployedModelAsync(endpoint, deployedModel, updateMask);

// Poll until the returned long-running operation is complete
Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
MutateDeployedModelResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata> retrievedResponse = await endpointServiceClient.PollOnceMutateDeployedModelAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    MutateDeployedModelResponse retrievedResult = retrievedResponse.Result;
}
```

### MutateDeployedModelAsync(string, DeployedModel, FieldMask, CancellationToken)

```
public virtual Task<Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata>> MutateDeployedModelAsync(string endpoint, DeployedModel deployedModel, FieldMask updateMask, CancellationToken cancellationToken)
```

Updates an existing deployed model. Updatable fields include `min_replica_count`, `max_replica_count`, `autoscaling_metric_specs`, `disable_container_logging` (v1 only), and `enable_container_logging` (v1beta1 only).

**Parameters**

**Name**

**Description**

`endpoint`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the Endpoint resource into which to mutate a DeployedModel. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`

`deployedModel`

`[DeployedModel](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployedModel)`  

Required. The DeployedModel to be mutated within the Endpoint. Only the following fields can be mutated:

-   `min_replica_count` in either \[DedicatedResources\]\[google.cloud.aiplatform.v1.DedicatedResources\] or \[AutomaticResources\]\[google.cloud.aiplatform.v1.AutomaticResources\]
-   `max_replica_count` in either \[DedicatedResources\]\[google.cloud.aiplatform.v1.DedicatedResources\] or \[AutomaticResources\]\[google.cloud.aiplatform.v1.AutomaticResources\]
-   \[autoscaling\_metric\_specs\]\[google.cloud.aiplatform.v1.DedicatedResources.autoscaling\_metric\_specs\]
-   `disable_container_logging` (v1 only)
-   `enable_container_logging` (v1beta1 only)

`updateMask`

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`  

Required. The update mask applies to the resource. See \[google.protobuf.FieldMask\]\[google.protobuf.FieldMask\].

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[MutateDeployedModelResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.MutateDeployedModelResponse)[MutateDeployedModelOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.MutateDeployedModelOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
string endpoint = "projects/[PROJECT]/locations/[LOCATION]/endpoints/[ENDPOINT]";
DeployedModel deployedModel = new DeployedModel();
FieldMask updateMask = new FieldMask();
// Make the request
Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata> response = await endpointServiceClient.MutateDeployedModelAsync(endpoint, deployedModel, updateMask);

// Poll until the returned long-running operation is complete
Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
MutateDeployedModelResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata> retrievedResponse = await endpointServiceClient.PollOnceMutateDeployedModelAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    MutateDeployedModelResponse retrievedResult = retrievedResponse.Result;
}
```

### PollOnceCreateEndpoint(string, CallSettings)

```
public virtual Operation<Endpoint, CreateEndpointOperationMetadata> PollOnceCreateEndpoint(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `CreateEndpoint`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)[CreateEndpointOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.CreateEndpointOperationMetadata)`

The result of polling the operation.

### PollOnceCreateEndpointAsync(string, CallSettings)

```
public virtual Task<Operation<Endpoint, CreateEndpointOperationMetadata>> PollOnceCreateEndpointAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `CreateEndpoint`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)[CreateEndpointOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.CreateEndpointOperationMetadata)`

A task representing the result of polling the operation.

### PollOnceDeleteEndpoint(string, CallSettings)

```
public virtual Operation<Empty, DeleteOperationMetadata> PollOnceDeleteEndpoint(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `DeleteEndpoint`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

The result of polling the operation.

### PollOnceDeleteEndpointAsync(string, CallSettings)

```
public virtual Task<Operation<Empty, DeleteOperationMetadata>> PollOnceDeleteEndpointAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `DeleteEndpoint`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)[DeleteOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeleteOperationMetadata)`

A task representing the result of polling the operation.

### PollOnceDeployModel(string, CallSettings)

```
public virtual Operation<DeployModelResponse, DeployModelOperationMetadata> PollOnceDeployModel(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `DeployModel`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[DeployModelResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployModelResponse)[DeployModelOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployModelOperationMetadata)`

The result of polling the operation.

### PollOnceDeployModelAsync(string, CallSettings)

```
public virtual Task<Operation<DeployModelResponse, DeployModelOperationMetadata>> PollOnceDeployModelAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `DeployModel`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[DeployModelResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployModelResponse)[DeployModelOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.DeployModelOperationMetadata)`

A task representing the result of polling the operation.

### PollOnceMutateDeployedModel(string, CallSettings)

```
public virtual Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata> PollOnceMutateDeployedModel(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `MutateDeployedModel` .

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[MutateDeployedModelResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.MutateDeployedModelResponse)[MutateDeployedModelOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.MutateDeployedModelOperationMetadata)`

The result of polling the operation.

### PollOnceMutateDeployedModelAsync(string, CallSettings)

```
public virtual Task<Operation<MutateDeployedModelResponse, MutateDeployedModelOperationMetadata>> PollOnceMutateDeployedModelAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `MutateDeployedModel`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[MutateDeployedModelResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.MutateDeployedModelResponse)[MutateDeployedModelOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.MutateDeployedModelOperationMetadata)`

A task representing the result of polling the operation.

### PollOnceUndeployModel(string, CallSettings)

```
public virtual Operation<UndeployModelResponse, UndeployModelOperationMetadata> PollOnceUndeployModel(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `UndeployModel`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[UndeployModelResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.UndeployModelResponse)[UndeployModelOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.UndeployModelOperationMetadata)`

The result of polling the operation.

### PollOnceUndeployModelAsync(string, CallSettings)

```
public virtual Task<Operation<UndeployModelResponse, UndeployModelOperationMetadata>> PollOnceUndeployModelAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `UndeployModel`.

**Parameters**

**Name**

**Description**

`operationName`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of a previously invoked operation. Must not be `null` or empty.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[UndeployModelResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.UndeployModelResponse)[UndeployModelOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.UndeployModelOperationMetadata)`

A task representing the result of polling the operation.

### ShutdownDefaultChannelsAsync()

```
public static Task ShutdownDefaultChannelsAsync()
```

Shuts down any channels automatically created by [Create()](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.EndpointServiceClient#Google_Cloud_AIPlatform_V1_EndpointServiceClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.EndpointServiceClient#Google_Cloud_AIPlatform_V1_EndpointServiceClient_CreateAsync_System_Threading_CancellationToken_). Channels which weren't automatically created are not affected.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A task representing the asynchronous shutdown operation.

**Remarks**

After calling this method, further calls to [Create()](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.EndpointServiceClient#Google_Cloud_AIPlatform_V1_EndpointServiceClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.EndpointServiceClient#Google_Cloud_AIPlatform_V1_EndpointServiceClient_CreateAsync_System_Threading_CancellationToken_) will create new channels, which could in turn be shut down by another call to this method.

### UndeployModel(EndpointName, string, IDictionary<string, int>, CallSettings)

```
public virtual Operation<UndeployModelResponse, UndeployModelOperationMetadata> UndeployModel(EndpointName endpoint, string deployedModelId, IDictionary<string, int> trafficSplit, CallSettings callSettings = null)
```

Undeploys a Model from an Endpoint, removing a DeployedModel from it, and freeing all resources it's using.

**Parameters**

**Name**

**Description**

`endpoint`

`[EndpointName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.EndpointName)`  

Required. The name of the Endpoint resource from which to undeploy a Model. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`

`deployedModelId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The ID of the DeployedModel to be undeployed from the Endpoint.

`trafficSplit`

`[IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2)[string](https://learn.microsoft.com/dotnet/api/system.string)[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

If this field is provided, then the Endpoint's \[traffic\_split\]\[google.cloud.aiplatform.v1.Endpoint.traffic\_split\] will be overwritten with it. If last DeployedModel is being undeployed from the Endpoint, the \[Endpoint.traffic\_split\] will always end up empty when this call returns. A DeployedModel will be successfully undeployed only if it doesn't have any traffic assigned to it when this method executes, or if this field unassigns any traffic to it.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[UndeployModelResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.UndeployModelResponse)[UndeployModelOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.UndeployModelOperationMetadata)`

The RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = EndpointServiceClient.Create();
// Initialize request argument(s)
EndpointName endpoint = EndpointName.FromProjectLocationEndpoint("[PROJECT]", "[LOCATION]", "[ENDPOINT]");
string deployedModelId = "";
IDictionary<string, int> trafficSplit = new Dictionary<string, int> { { "", 0 }, };
// Make the request
Operation<UndeployModelResponse, UndeployModelOperationMetadata> response = endpointServiceClient.UndeployModel(endpoint, deployedModelId, trafficSplit);

// Poll until the returned long-running operation is complete
Operation<UndeployModelResponse, UndeployModelOperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
UndeployModelResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<UndeployModelResponse, UndeployModelOperationMetadata> retrievedResponse = endpointServiceClient.PollOnceUndeployModel(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    UndeployModelResponse retrievedResult = retrievedResponse.Result;
}
```

### UndeployModel(UndeployModelRequest, CallSettings)

```
public virtual Operation<UndeployModelResponse, UndeployModelOperationMetadata> UndeployModel(UndeployModelRequest request, CallSettings callSettings = null)
```

Undeploys a Model from an Endpoint, removing a DeployedModel from it, and freeing all resources it's using.

**Parameters**

**Name**

**Description**

`request`

`[UndeployModelRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.UndeployModelRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[UndeployModelResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.UndeployModelResponse)[UndeployModelOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.UndeployModelOperationMetadata)`

The RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = EndpointServiceClient.Create();
// Initialize request argument(s)
UndeployModelRequest request = new UndeployModelRequest
{
    EndpointAsEndpointName = EndpointName.FromProjectLocationEndpoint("[PROJECT]", "[LOCATION]", "[ENDPOINT]"),
    DeployedModelId = "",
    TrafficSplit = { { "", 0 }, },
};
// Make the request
Operation<UndeployModelResponse, UndeployModelOperationMetadata> response = endpointServiceClient.UndeployModel(request);

// Poll until the returned long-running operation is complete
Operation<UndeployModelResponse, UndeployModelOperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
UndeployModelResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<UndeployModelResponse, UndeployModelOperationMetadata> retrievedResponse = endpointServiceClient.PollOnceUndeployModel(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    UndeployModelResponse retrievedResult = retrievedResponse.Result;
}
```

### UndeployModel(string, string, IDictionary<string, int>, CallSettings)

```
public virtual Operation<UndeployModelResponse, UndeployModelOperationMetadata> UndeployModel(string endpoint, string deployedModelId, IDictionary<string, int> trafficSplit, CallSettings callSettings = null)
```

Undeploys a Model from an Endpoint, removing a DeployedModel from it, and freeing all resources it's using.

**Parameters**

**Name**

**Description**

`endpoint`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the Endpoint resource from which to undeploy a Model. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`

`deployedModelId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The ID of the DeployedModel to be undeployed from the Endpoint.

`trafficSplit`

`[IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2)[string](https://learn.microsoft.com/dotnet/api/system.string)[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

If this field is provided, then the Endpoint's \[traffic\_split\]\[google.cloud.aiplatform.v1.Endpoint.traffic\_split\] will be overwritten with it. If last DeployedModel is being undeployed from the Endpoint, the \[Endpoint.traffic\_split\] will always end up empty when this call returns. A DeployedModel will be successfully undeployed only if it doesn't have any traffic assigned to it when this method executes, or if this field unassigns any traffic to it.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[UndeployModelResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.UndeployModelResponse)[UndeployModelOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.UndeployModelOperationMetadata)`

The RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = EndpointServiceClient.Create();
// Initialize request argument(s)
string endpoint = "projects/[PROJECT]/locations/[LOCATION]/endpoints/[ENDPOINT]";
string deployedModelId = "";
IDictionary<string, int> trafficSplit = new Dictionary<string, int> { { "", 0 }, };
// Make the request
Operation<UndeployModelResponse, UndeployModelOperationMetadata> response = endpointServiceClient.UndeployModel(endpoint, deployedModelId, trafficSplit);

// Poll until the returned long-running operation is complete
Operation<UndeployModelResponse, UndeployModelOperationMetadata> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
UndeployModelResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<UndeployModelResponse, UndeployModelOperationMetadata> retrievedResponse = endpointServiceClient.PollOnceUndeployModel(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    UndeployModelResponse retrievedResult = retrievedResponse.Result;
}
```

### UndeployModelAsync(EndpointName, string, IDictionary<string, int>, CallSettings)

```
public virtual Task<Operation<UndeployModelResponse, UndeployModelOperationMetadata>> UndeployModelAsync(EndpointName endpoint, string deployedModelId, IDictionary<string, int> trafficSplit, CallSettings callSettings = null)
```

Undeploys a Model from an Endpoint, removing a DeployedModel from it, and freeing all resources it's using.

**Parameters**

**Name**

**Description**

`endpoint`

`[EndpointName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.EndpointName)`  

Required. The name of the Endpoint resource from which to undeploy a Model. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`

`deployedModelId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The ID of the DeployedModel to be undeployed from the Endpoint.

`trafficSplit`

`[IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2)[string](https://learn.microsoft.com/dotnet/api/system.string)[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

If this field is provided, then the Endpoint's \[traffic\_split\]\[google.cloud.aiplatform.v1.Endpoint.traffic\_split\] will be overwritten with it. If last DeployedModel is being undeployed from the Endpoint, the \[Endpoint.traffic\_split\] will always end up empty when this call returns. A DeployedModel will be successfully undeployed only if it doesn't have any traffic assigned to it when this method executes, or if this field unassigns any traffic to it.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[UndeployModelResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.UndeployModelResponse)[UndeployModelOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.UndeployModelOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
EndpointName endpoint = EndpointName.FromProjectLocationEndpoint("[PROJECT]", "[LOCATION]", "[ENDPOINT]");
string deployedModelId = "";
IDictionary<string, int> trafficSplit = new Dictionary<string, int> { { "", 0 }, };
// Make the request
Operation<UndeployModelResponse, UndeployModelOperationMetadata> response = await endpointServiceClient.UndeployModelAsync(endpoint, deployedModelId, trafficSplit);

// Poll until the returned long-running operation is complete
Operation<UndeployModelResponse, UndeployModelOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
UndeployModelResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<UndeployModelResponse, UndeployModelOperationMetadata> retrievedResponse = await endpointServiceClient.PollOnceUndeployModelAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    UndeployModelResponse retrievedResult = retrievedResponse.Result;
}
```

### UndeployModelAsync(EndpointName, string, IDictionary<string, int>, CancellationToken)

```
public virtual Task<Operation<UndeployModelResponse, UndeployModelOperationMetadata>> UndeployModelAsync(EndpointName endpoint, string deployedModelId, IDictionary<string, int> trafficSplit, CancellationToken cancellationToken)
```

Undeploys a Model from an Endpoint, removing a DeployedModel from it, and freeing all resources it's using.

**Parameters**

**Name**

**Description**

`endpoint`

`[EndpointName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.EndpointName)`  

Required. The name of the Endpoint resource from which to undeploy a Model. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`

`deployedModelId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The ID of the DeployedModel to be undeployed from the Endpoint.

`trafficSplit`

`[IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2)[string](https://learn.microsoft.com/dotnet/api/system.string)[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

If this field is provided, then the Endpoint's \[traffic\_split\]\[google.cloud.aiplatform.v1.Endpoint.traffic\_split\] will be overwritten with it. If last DeployedModel is being undeployed from the Endpoint, the \[Endpoint.traffic\_split\] will always end up empty when this call returns. A DeployedModel will be successfully undeployed only if it doesn't have any traffic assigned to it when this method executes, or if this field unassigns any traffic to it.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[UndeployModelResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.UndeployModelResponse)[UndeployModelOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.UndeployModelOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
EndpointName endpoint = EndpointName.FromProjectLocationEndpoint("[PROJECT]", "[LOCATION]", "[ENDPOINT]");
string deployedModelId = "";
IDictionary<string, int> trafficSplit = new Dictionary<string, int> { { "", 0 }, };
// Make the request
Operation<UndeployModelResponse, UndeployModelOperationMetadata> response = await endpointServiceClient.UndeployModelAsync(endpoint, deployedModelId, trafficSplit);

// Poll until the returned long-running operation is complete
Operation<UndeployModelResponse, UndeployModelOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
UndeployModelResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<UndeployModelResponse, UndeployModelOperationMetadata> retrievedResponse = await endpointServiceClient.PollOnceUndeployModelAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    UndeployModelResponse retrievedResult = retrievedResponse.Result;
}
```

### UndeployModelAsync(UndeployModelRequest, CallSettings)

```
public virtual Task<Operation<UndeployModelResponse, UndeployModelOperationMetadata>> UndeployModelAsync(UndeployModelRequest request, CallSettings callSettings = null)
```

Undeploys a Model from an Endpoint, removing a DeployedModel from it, and freeing all resources it's using.

**Parameters**

**Name**

**Description**

`request`

`[UndeployModelRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.UndeployModelRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[UndeployModelResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.UndeployModelResponse)[UndeployModelOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.UndeployModelOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
UndeployModelRequest request = new UndeployModelRequest
{
    EndpointAsEndpointName = EndpointName.FromProjectLocationEndpoint("[PROJECT]", "[LOCATION]", "[ENDPOINT]"),
    DeployedModelId = "",
    TrafficSplit = { { "", 0 }, },
};
// Make the request
Operation<UndeployModelResponse, UndeployModelOperationMetadata> response = await endpointServiceClient.UndeployModelAsync(request);

// Poll until the returned long-running operation is complete
Operation<UndeployModelResponse, UndeployModelOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
UndeployModelResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<UndeployModelResponse, UndeployModelOperationMetadata> retrievedResponse = await endpointServiceClient.PollOnceUndeployModelAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    UndeployModelResponse retrievedResult = retrievedResponse.Result;
}
```

### UndeployModelAsync(UndeployModelRequest, CancellationToken)

```
public virtual Task<Operation<UndeployModelResponse, UndeployModelOperationMetadata>> UndeployModelAsync(UndeployModelRequest request, CancellationToken cancellationToken)
```

Undeploys a Model from an Endpoint, removing a DeployedModel from it, and freeing all resources it's using.

**Parameters**

**Name**

**Description**

`request`

`[UndeployModelRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.UndeployModelRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[UndeployModelResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.UndeployModelResponse)[UndeployModelOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.UndeployModelOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
UndeployModelRequest request = new UndeployModelRequest
{
    EndpointAsEndpointName = EndpointName.FromProjectLocationEndpoint("[PROJECT]", "[LOCATION]", "[ENDPOINT]"),
    DeployedModelId = "",
    TrafficSplit = { { "", 0 }, },
};
// Make the request
Operation<UndeployModelResponse, UndeployModelOperationMetadata> response = await endpointServiceClient.UndeployModelAsync(request);

// Poll until the returned long-running operation is complete
Operation<UndeployModelResponse, UndeployModelOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
UndeployModelResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<UndeployModelResponse, UndeployModelOperationMetadata> retrievedResponse = await endpointServiceClient.PollOnceUndeployModelAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    UndeployModelResponse retrievedResult = retrievedResponse.Result;
}
```

### UndeployModelAsync(string, string, IDictionary<string, int>, CallSettings)

```
public virtual Task<Operation<UndeployModelResponse, UndeployModelOperationMetadata>> UndeployModelAsync(string endpoint, string deployedModelId, IDictionary<string, int> trafficSplit, CallSettings callSettings = null)
```

Undeploys a Model from an Endpoint, removing a DeployedModel from it, and freeing all resources it's using.

**Parameters**

**Name**

**Description**

`endpoint`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the Endpoint resource from which to undeploy a Model. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`

`deployedModelId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The ID of the DeployedModel to be undeployed from the Endpoint.

`trafficSplit`

`[IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2)[string](https://learn.microsoft.com/dotnet/api/system.string)[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

If this field is provided, then the Endpoint's \[traffic\_split\]\[google.cloud.aiplatform.v1.Endpoint.traffic\_split\] will be overwritten with it. If last DeployedModel is being undeployed from the Endpoint, the \[Endpoint.traffic\_split\] will always end up empty when this call returns. A DeployedModel will be successfully undeployed only if it doesn't have any traffic assigned to it when this method executes, or if this field unassigns any traffic to it.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[UndeployModelResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.UndeployModelResponse)[UndeployModelOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.UndeployModelOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
string endpoint = "projects/[PROJECT]/locations/[LOCATION]/endpoints/[ENDPOINT]";
string deployedModelId = "";
IDictionary<string, int> trafficSplit = new Dictionary<string, int> { { "", 0 }, };
// Make the request
Operation<UndeployModelResponse, UndeployModelOperationMetadata> response = await endpointServiceClient.UndeployModelAsync(endpoint, deployedModelId, trafficSplit);

// Poll until the returned long-running operation is complete
Operation<UndeployModelResponse, UndeployModelOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
UndeployModelResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<UndeployModelResponse, UndeployModelOperationMetadata> retrievedResponse = await endpointServiceClient.PollOnceUndeployModelAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    UndeployModelResponse retrievedResult = retrievedResponse.Result;
}
```

### UndeployModelAsync(string, string, IDictionary<string, int>, CancellationToken)

```
public virtual Task<Operation<UndeployModelResponse, UndeployModelOperationMetadata>> UndeployModelAsync(string endpoint, string deployedModelId, IDictionary<string, int> trafficSplit, CancellationToken cancellationToken)
```

Undeploys a Model from an Endpoint, removing a DeployedModel from it, and freeing all resources it's using.

**Parameters**

**Name**

**Description**

`endpoint`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The name of the Endpoint resource from which to undeploy a Model. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`

`deployedModelId`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The ID of the DeployedModel to be undeployed from the Endpoint.

`trafficSplit`

`[IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2)[string](https://learn.microsoft.com/dotnet/api/system.string)[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

If this field is provided, then the Endpoint's \[traffic\_split\]\[google.cloud.aiplatform.v1.Endpoint.traffic\_split\] will be overwritten with it. If last DeployedModel is being undeployed from the Endpoint, the \[Endpoint.traffic\_split\] will always end up empty when this call returns. A DeployedModel will be successfully undeployed only if it doesn't have any traffic assigned to it when this method executes, or if this field unassigns any traffic to it.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[UndeployModelResponse](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.UndeployModelResponse)[UndeployModelOperationMetadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.UndeployModelOperationMetadata)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
string endpoint = "projects/[PROJECT]/locations/[LOCATION]/endpoints/[ENDPOINT]";
string deployedModelId = "";
IDictionary<string, int> trafficSplit = new Dictionary<string, int> { { "", 0 }, };
// Make the request
Operation<UndeployModelResponse, UndeployModelOperationMetadata> response = await endpointServiceClient.UndeployModelAsync(endpoint, deployedModelId, trafficSplit);

// Poll until the returned long-running operation is complete
Operation<UndeployModelResponse, UndeployModelOperationMetadata> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
UndeployModelResponse result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
Operation<UndeployModelResponse, UndeployModelOperationMetadata> retrievedResponse = await endpointServiceClient.PollOnceUndeployModelAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    UndeployModelResponse retrievedResult = retrievedResponse.Result;
}
```

### UpdateEndpoint(Endpoint, FieldMask, CallSettings)

```
public virtual Endpoint UpdateEndpoint(Endpoint endpoint, FieldMask updateMask, CallSettings callSettings = null)
```

Updates an Endpoint.

**Parameters**

**Name**

**Description**

`endpoint`

`[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)`  

Required. The Endpoint which replaces the resource on the server.

`updateMask`

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`  

Required. The update mask applies to the resource. See \[google.protobuf.FieldMask\]\[google.protobuf.FieldMask\].

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)`

The RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = EndpointServiceClient.Create();
// Initialize request argument(s)
Endpoint endpoint = new Endpoint();
FieldMask updateMask = new FieldMask();
// Make the request
Endpoint response = endpointServiceClient.UpdateEndpoint(endpoint, updateMask);
```

### UpdateEndpoint(UpdateEndpointRequest, CallSettings)

```
public virtual Endpoint UpdateEndpoint(UpdateEndpointRequest request, CallSettings callSettings = null)
```

Updates an Endpoint.

**Parameters**

**Name**

**Description**

`request`

`[UpdateEndpointRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.UpdateEndpointRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)`

The RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = EndpointServiceClient.Create();
// Initialize request argument(s)
UpdateEndpointRequest request = new UpdateEndpointRequest
{
    Endpoint = new Endpoint(),
    UpdateMask = new FieldMask(),
};
// Make the request
Endpoint response = endpointServiceClient.UpdateEndpoint(request);
```

### UpdateEndpointAsync(Endpoint, FieldMask, CallSettings)

```
public virtual Task<Endpoint> UpdateEndpointAsync(Endpoint endpoint, FieldMask updateMask, CallSettings callSettings = null)
```

Updates an Endpoint.

**Parameters**

**Name**

**Description**

`endpoint`

`[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)`  

Required. The Endpoint which replaces the resource on the server.

`updateMask`

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`  

Required. The update mask applies to the resource. See \[google.protobuf.FieldMask\]\[google.protobuf.FieldMask\].

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
Endpoint endpoint = new Endpoint();
FieldMask updateMask = new FieldMask();
// Make the request
Endpoint response = await endpointServiceClient.UpdateEndpointAsync(endpoint, updateMask);
```

### UpdateEndpointAsync(Endpoint, FieldMask, CancellationToken)

```
public virtual Task<Endpoint> UpdateEndpointAsync(Endpoint endpoint, FieldMask updateMask, CancellationToken cancellationToken)
```

Updates an Endpoint.

**Parameters**

**Name**

**Description**

`endpoint`

`[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)`  

Required. The Endpoint which replaces the resource on the server.

`updateMask`

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`  

Required. The update mask applies to the resource. See \[google.protobuf.FieldMask\]\[google.protobuf.FieldMask\].

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
Endpoint endpoint = new Endpoint();
FieldMask updateMask = new FieldMask();
// Make the request
Endpoint response = await endpointServiceClient.UpdateEndpointAsync(endpoint, updateMask);
```

### UpdateEndpointAsync(UpdateEndpointRequest, CallSettings)

```
public virtual Task<Endpoint> UpdateEndpointAsync(UpdateEndpointRequest request, CallSettings callSettings = null)
```

Updates an Endpoint.

**Parameters**

**Name**

**Description**

`request`

`[UpdateEndpointRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.UpdateEndpointRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
UpdateEndpointRequest request = new UpdateEndpointRequest
{
    Endpoint = new Endpoint(),
    UpdateMask = new FieldMask(),
};
// Make the request
Endpoint response = await endpointServiceClient.UpdateEndpointAsync(request);
```

### UpdateEndpointAsync(UpdateEndpointRequest, CancellationToken)

```
public virtual Task<Endpoint> UpdateEndpointAsync(UpdateEndpointRequest request, CancellationToken cancellationToken)
```

Updates an Endpoint.

**Parameters**

**Name**

**Description**

`request`

`[UpdateEndpointRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.UpdateEndpointRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Endpoint](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.15.0/Google.Cloud.AIPlatform.V1.Endpoint)`

A Task containing the RPC response.

**Example**

```
// Create client
EndpointServiceClient endpointServiceClient = await EndpointServiceClient.CreateAsync();
// Initialize request argument(s)
UpdateEndpointRequest request = new UpdateEndpointRequest
{
    Endpoint = new Endpoint(),
    UpdateMask = new FieldMask(),
};
// Make the request
Endpoint response = await endpointServiceClient.UpdateEndpointAsync(request);
```

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
