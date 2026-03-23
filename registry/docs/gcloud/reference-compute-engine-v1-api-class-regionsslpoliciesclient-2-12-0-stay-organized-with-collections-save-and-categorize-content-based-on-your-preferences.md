-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class RegionSslPoliciesClient (2.12.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public abstract class RegionSslPoliciesClient
```

Reference documentation and code samples for the Compute Engine v1 API class RegionSslPoliciesClient.

RegionSslPolicies client wrapper, for convenient use.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> RegionSslPoliciesClient

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Derived Types

[RegionSslPoliciesClientImpl](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionSslPoliciesClientImpl)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Remarks

The RegionSslPolicies API.

## Properties

### DefaultEndpoint

```
public static string DefaultEndpoint { get; }
```

The default endpoint for the RegionSslPolicies service, which is a host of "compute.googleapis.com" and a port of 443.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### DefaultScopes

```
public static IReadOnlyList<string> DefaultScopes { get; }
```

The default RegionSslPolicies scopes.

**Property Value**

**Type**

**Description**

`[IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)[string](https://learn.microsoft.com/dotnet/api/system.string)`

**Remarks**

The default RegionSslPolicies scopes are:

-   [https://www.googleapis.com/auth/compute](https://www.googleapis.com/auth/compute)
-   [https://www.googleapis.com/auth/cloud-platform](https://www.googleapis.com/auth/cloud-platform)

### DeleteOperationsClient

```
public virtual OperationsClient DeleteOperationsClient { get; }
```

The long-running operations client for `Delete`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/OperationsClient.g.cs)`

### GrpcClient

```
public virtual RegionSslPolicies.RegionSslPoliciesClient GrpcClient { get; }
```

The underlying gRPC RegionSslPolicies client

**Property Value**

**Type**

**Description**

`[RegionSslPolicies](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionSslPolicies)[RegionSslPoliciesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionSslPolicies.RegionSslPoliciesClient)`

### InsertOperationsClient

```
public virtual OperationsClient InsertOperationsClient { get; }
```

The long-running operations client for `Insert`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/OperationsClient.g.cs)`

### PatchOperationsClient

```
public virtual OperationsClient PatchOperationsClient { get; }
```

The long-running operations client for `Patch`.

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

## Methods

### Create()

```
public static RegionSslPoliciesClient Create()
```

Synchronously creates a [RegionSslPoliciesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionSslPoliciesClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [RegionSslPoliciesClientBuilder](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionSslPoliciesClientBuilder).

**Returns**

**Type**

**Description**

`[RegionSslPoliciesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionSslPoliciesClient)`

The created [RegionSslPoliciesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionSslPoliciesClient).

### CreateAsync(CancellationToken)

```
public static Task<RegionSslPoliciesClient> CreateAsync(CancellationToken cancellationToken = default)
```

Asynchronously creates a [RegionSslPoliciesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionSslPoliciesClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [RegionSslPoliciesClientBuilder](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionSslPoliciesClientBuilder).

**Parameter**

**Name**

**Description**

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

The [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use while creating the client.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[RegionSslPoliciesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionSslPoliciesClient)`

The task representing the created [RegionSslPoliciesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionSslPoliciesClient).

### Delete(DeleteRegionSslPolicyRequest, CallSettings)

```
public virtual Operation<Operation, Operation> Delete(DeleteRegionSslPolicyRequest request, CallSettings callSettings = null)
```

Deletes the specified SSL policy. The SSL policy resource can be deleted only if it is not in use by any TargetHttpsProxy or TargetSslProxy resources.

**Parameters**

**Name**

**Description**

`request`

`[DeleteRegionSslPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.DeleteRegionSslPolicyRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)`

The RPC response.

**Example**

```
// Create client
RegionSslPoliciesClient regionSslPoliciesClient = RegionSslPoliciesClient.Create();
// Initialize request argument(s)
DeleteRegionSslPolicyRequest request = new DeleteRegionSslPolicyRequest
{
    RequestId = "",
    Region = "",
    Project = "",
    SslPolicy = "",
};
// Make the request
lro::Operation<Operation, Operation> response = regionSslPoliciesClient.Delete(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = regionSslPoliciesClient.PollOnceDelete(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### Delete(string, string, string, CallSettings)

```
public virtual Operation<Operation, Operation> Delete(string project, string region, string sslPolicy, CallSettings callSettings = null)
```

Deletes the specified SSL policy. The SSL policy resource can be deleted only if it is not in use by any TargetHttpsProxy or TargetSslProxy resources.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the region scoping this request.

`sslPolicy`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the SSL policy to delete. The name must be 1-63 characters long, and comply with RFC1035.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)`

The RPC response.

**Example**

```
// Create client
RegionSslPoliciesClient regionSslPoliciesClient = RegionSslPoliciesClient.Create();
// Initialize request argument(s)
string project = "";
string region = "";
string sslPolicy = "";
// Make the request
lro::Operation<Operation, Operation> response = regionSslPoliciesClient.Delete(project, region, sslPolicy);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = regionSslPoliciesClient.PollOnceDelete(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DeleteAsync(DeleteRegionSslPolicyRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> DeleteAsync(DeleteRegionSslPolicyRequest request, CallSettings callSettings = null)
```

Deletes the specified SSL policy. The SSL policy resource can be deleted only if it is not in use by any TargetHttpsProxy or TargetSslProxy resources.

**Parameters**

**Name**

**Description**

`request`

`[DeleteRegionSslPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.DeleteRegionSslPolicyRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
RegionSslPoliciesClient regionSslPoliciesClient = await RegionSslPoliciesClient.CreateAsync();
// Initialize request argument(s)
DeleteRegionSslPolicyRequest request = new DeleteRegionSslPolicyRequest
{
    RequestId = "",
    Region = "",
    Project = "",
    SslPolicy = "",
};
// Make the request
lro::Operation<Operation, Operation> response = await regionSslPoliciesClient.DeleteAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await regionSslPoliciesClient.PollOnceDeleteAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DeleteAsync(DeleteRegionSslPolicyRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> DeleteAsync(DeleteRegionSslPolicyRequest request, CancellationToken cancellationToken)
```

Deletes the specified SSL policy. The SSL policy resource can be deleted only if it is not in use by any TargetHttpsProxy or TargetSslProxy resources.

**Parameters**

**Name**

**Description**

`request`

`[DeleteRegionSslPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.DeleteRegionSslPolicyRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
RegionSslPoliciesClient regionSslPoliciesClient = await RegionSslPoliciesClient.CreateAsync();
// Initialize request argument(s)
DeleteRegionSslPolicyRequest request = new DeleteRegionSslPolicyRequest
{
    RequestId = "",
    Region = "",
    Project = "",
    SslPolicy = "",
};
// Make the request
lro::Operation<Operation, Operation> response = await regionSslPoliciesClient.DeleteAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await regionSslPoliciesClient.PollOnceDeleteAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DeleteAsync(string, string, string, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> DeleteAsync(string project, string region, string sslPolicy, CallSettings callSettings = null)
```

Deletes the specified SSL policy. The SSL policy resource can be deleted only if it is not in use by any TargetHttpsProxy or TargetSslProxy resources.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the region scoping this request.

`sslPolicy`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the SSL policy to delete. The name must be 1-63 characters long, and comply with RFC1035.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
RegionSslPoliciesClient regionSslPoliciesClient = await RegionSslPoliciesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string region = "";
string sslPolicy = "";
// Make the request
lro::Operation<Operation, Operation> response = await regionSslPoliciesClient.DeleteAsync(project, region, sslPolicy);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await regionSslPoliciesClient.PollOnceDeleteAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DeleteAsync(string, string, string, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> DeleteAsync(string project, string region, string sslPolicy, CancellationToken cancellationToken)
```

Deletes the specified SSL policy. The SSL policy resource can be deleted only if it is not in use by any TargetHttpsProxy or TargetSslProxy resources.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the region scoping this request.

`sslPolicy`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the SSL policy to delete. The name must be 1-63 characters long, and comply with RFC1035.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
RegionSslPoliciesClient regionSslPoliciesClient = await RegionSslPoliciesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string region = "";
string sslPolicy = "";
// Make the request
lro::Operation<Operation, Operation> response = await regionSslPoliciesClient.DeleteAsync(project, region, sslPolicy);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await regionSslPoliciesClient.PollOnceDeleteAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### Get(GetRegionSslPolicyRequest, CallSettings)

```
public virtual SslPolicy Get(GetRegionSslPolicyRequest request, CallSettings callSettings = null)
```

Lists all of the ordered rules present in a single specified policy.

**Parameters**

**Name**

**Description**

`request`

`[GetRegionSslPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.GetRegionSslPolicyRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[SslPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.SslPolicy)`

The RPC response.

**Example**

```
// Create client
RegionSslPoliciesClient regionSslPoliciesClient = RegionSslPoliciesClient.Create();
// Initialize request argument(s)
GetRegionSslPolicyRequest request = new GetRegionSslPolicyRequest
{
    Region = "",
    Project = "",
    SslPolicy = "",
};
// Make the request
SslPolicy response = regionSslPoliciesClient.Get(request);
```

### Get(string, string, string, CallSettings)

```
public virtual SslPolicy Get(string project, string region, string sslPolicy, CallSettings callSettings = null)
```

Lists all of the ordered rules present in a single specified policy.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the region scoping this request.

`sslPolicy`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the SSL policy to update. The name must be 1-63 characters long, and comply with RFC1035.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[SslPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.SslPolicy)`

The RPC response.

**Example**

```
// Create client
RegionSslPoliciesClient regionSslPoliciesClient = RegionSslPoliciesClient.Create();
// Initialize request argument(s)
string project = "";
string region = "";
string sslPolicy = "";
// Make the request
SslPolicy response = regionSslPoliciesClient.Get(project, region, sslPolicy);
```

### GetAsync(GetRegionSslPolicyRequest, CallSettings)

```
public virtual Task<SslPolicy> GetAsync(GetRegionSslPolicyRequest request, CallSettings callSettings = null)
```

Lists all of the ordered rules present in a single specified policy.

**Parameters**

**Name**

**Description**

`request`

`[GetRegionSslPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.GetRegionSslPolicyRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SslPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.SslPolicy)`

A Task containing the RPC response.

**Example**

```
// Create client
RegionSslPoliciesClient regionSslPoliciesClient = await RegionSslPoliciesClient.CreateAsync();
// Initialize request argument(s)
GetRegionSslPolicyRequest request = new GetRegionSslPolicyRequest
{
    Region = "",
    Project = "",
    SslPolicy = "",
};
// Make the request
SslPolicy response = await regionSslPoliciesClient.GetAsync(request);
```

### GetAsync(GetRegionSslPolicyRequest, CancellationToken)

```
public virtual Task<SslPolicy> GetAsync(GetRegionSslPolicyRequest request, CancellationToken cancellationToken)
```

Lists all of the ordered rules present in a single specified policy.

**Parameters**

**Name**

**Description**

`request`

`[GetRegionSslPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.GetRegionSslPolicyRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SslPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.SslPolicy)`

A Task containing the RPC response.

**Example**

```
// Create client
RegionSslPoliciesClient regionSslPoliciesClient = await RegionSslPoliciesClient.CreateAsync();
// Initialize request argument(s)
GetRegionSslPolicyRequest request = new GetRegionSslPolicyRequest
{
    Region = "",
    Project = "",
    SslPolicy = "",
};
// Make the request
SslPolicy response = await regionSslPoliciesClient.GetAsync(request);
```

### GetAsync(string, string, string, CallSettings)

```
public virtual Task<SslPolicy> GetAsync(string project, string region, string sslPolicy, CallSettings callSettings = null)
```

Lists all of the ordered rules present in a single specified policy.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the region scoping this request.

`sslPolicy`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the SSL policy to update. The name must be 1-63 characters long, and comply with RFC1035.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SslPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.SslPolicy)`

A Task containing the RPC response.

**Example**

```
// Create client
RegionSslPoliciesClient regionSslPoliciesClient = await RegionSslPoliciesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string region = "";
string sslPolicy = "";
// Make the request
SslPolicy response = await regionSslPoliciesClient.GetAsync(project, region, sslPolicy);
```

### GetAsync(string, string, string, CancellationToken)

```
public virtual Task<SslPolicy> GetAsync(string project, string region, string sslPolicy, CancellationToken cancellationToken)
```

Lists all of the ordered rules present in a single specified policy.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the region scoping this request.

`sslPolicy`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the SSL policy to update. The name must be 1-63 characters long, and comply with RFC1035.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SslPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.SslPolicy)`

A Task containing the RPC response.

**Example**

```
// Create client
RegionSslPoliciesClient regionSslPoliciesClient = await RegionSslPoliciesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string region = "";
string sslPolicy = "";
// Make the request
SslPolicy response = await regionSslPoliciesClient.GetAsync(project, region, sslPolicy);
```

### Insert(InsertRegionSslPolicyRequest, CallSettings)

```
public virtual Operation<Operation, Operation> Insert(InsertRegionSslPolicyRequest request, CallSettings callSettings = null)
```

Creates a new policy in the specified project and region using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertRegionSslPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.InsertRegionSslPolicyRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)`

The RPC response.

**Example**

```
// Create client
RegionSslPoliciesClient regionSslPoliciesClient = RegionSslPoliciesClient.Create();
// Initialize request argument(s)
InsertRegionSslPolicyRequest request = new InsertRegionSslPolicyRequest
{
    RequestId = "",
    Region = "",
    Project = "",
    SslPolicyResource = new SslPolicy(),
};
// Make the request
lro::Operation<Operation, Operation> response = regionSslPoliciesClient.Insert(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = regionSslPoliciesClient.PollOnceInsert(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### Insert(string, string, SslPolicy, CallSettings)

```
public virtual Operation<Operation, Operation> Insert(string project, string region, SslPolicy sslPolicyResource, CallSettings callSettings = null)
```

Creates a new policy in the specified project and region using the data included in the request.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the region scoping this request.

`sslPolicyResource`

`[SslPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.SslPolicy)`  

The body resource for this request

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)`

The RPC response.

**Example**

```
// Create client
RegionSslPoliciesClient regionSslPoliciesClient = RegionSslPoliciesClient.Create();
// Initialize request argument(s)
string project = "";
string region = "";
SslPolicy sslPolicyResource = new SslPolicy();
// Make the request
lro::Operation<Operation, Operation> response = regionSslPoliciesClient.Insert(project, region, sslPolicyResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = regionSslPoliciesClient.PollOnceInsert(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### InsertAsync(InsertRegionSslPolicyRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> InsertAsync(InsertRegionSslPolicyRequest request, CallSettings callSettings = null)
```

Creates a new policy in the specified project and region using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertRegionSslPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.InsertRegionSslPolicyRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
RegionSslPoliciesClient regionSslPoliciesClient = await RegionSslPoliciesClient.CreateAsync();
// Initialize request argument(s)
InsertRegionSslPolicyRequest request = new InsertRegionSslPolicyRequest
{
    RequestId = "",
    Region = "",
    Project = "",
    SslPolicyResource = new SslPolicy(),
};
// Make the request
lro::Operation<Operation, Operation> response = await regionSslPoliciesClient.InsertAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await regionSslPoliciesClient.PollOnceInsertAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### InsertAsync(InsertRegionSslPolicyRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> InsertAsync(InsertRegionSslPolicyRequest request, CancellationToken cancellationToken)
```

Creates a new policy in the specified project and region using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertRegionSslPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.InsertRegionSslPolicyRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
RegionSslPoliciesClient regionSslPoliciesClient = await RegionSslPoliciesClient.CreateAsync();
// Initialize request argument(s)
InsertRegionSslPolicyRequest request = new InsertRegionSslPolicyRequest
{
    RequestId = "",
    Region = "",
    Project = "",
    SslPolicyResource = new SslPolicy(),
};
// Make the request
lro::Operation<Operation, Operation> response = await regionSslPoliciesClient.InsertAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await regionSslPoliciesClient.PollOnceInsertAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### InsertAsync(string, string, SslPolicy, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> InsertAsync(string project, string region, SslPolicy sslPolicyResource, CallSettings callSettings = null)
```

Creates a new policy in the specified project and region using the data included in the request.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the region scoping this request.

`sslPolicyResource`

`[SslPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.SslPolicy)`  

The body resource for this request

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
RegionSslPoliciesClient regionSslPoliciesClient = await RegionSslPoliciesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string region = "";
SslPolicy sslPolicyResource = new SslPolicy();
// Make the request
lro::Operation<Operation, Operation> response = await regionSslPoliciesClient.InsertAsync(project, region, sslPolicyResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await regionSslPoliciesClient.PollOnceInsertAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### InsertAsync(string, string, SslPolicy, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> InsertAsync(string project, string region, SslPolicy sslPolicyResource, CancellationToken cancellationToken)
```

Creates a new policy in the specified project and region using the data included in the request.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the region scoping this request.

`sslPolicyResource`

`[SslPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.SslPolicy)`  

The body resource for this request

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
RegionSslPoliciesClient regionSslPoliciesClient = await RegionSslPoliciesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string region = "";
SslPolicy sslPolicyResource = new SslPolicy();
// Make the request
lro::Operation<Operation, Operation> response = await regionSslPoliciesClient.InsertAsync(project, region, sslPolicyResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await regionSslPoliciesClient.PollOnceInsertAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### List(ListRegionSslPoliciesRequest, CallSettings)

```
public virtual PagedEnumerable<SslPoliciesList, SslPolicy> List(ListRegionSslPoliciesRequest request, CallSettings callSettings = null)
```

Lists all the SSL policies that have been configured for the specified project and region.

**Parameters**

**Name**

**Description**

`request`

`[ListRegionSslPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.ListRegionSslPoliciesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/PagedEnumerable.cs)[SslPoliciesList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.SslPoliciesList)[SslPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.SslPolicy)`

A pageable sequence of [SslPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.SslPolicy) resources.

**Example**

```
// Create client
RegionSslPoliciesClient regionSslPoliciesClient = RegionSslPoliciesClient.Create();
// Initialize request argument(s)
ListRegionSslPoliciesRequest request = new ListRegionSslPoliciesRequest
{
    Region = "",
    OrderBy = "",
    Project = "",
    Filter = "",
    ReturnPartialSuccess = false,
};
// Make the request
PagedEnumerable<SslPoliciesList, SslPolicy> response = regionSslPoliciesClient.List(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (SslPolicy item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (SslPoliciesList page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (SslPolicy item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<SslPolicy> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (SslPolicy item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### List(string, string, string, int?, CallSettings)

```
public virtual PagedEnumerable<SslPoliciesList, SslPolicy> List(string project, string region, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists all the SSL policies that have been configured for the specified project and region.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the region scoping this request.

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

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/PagedEnumerable.cs)[SslPoliciesList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.SslPoliciesList)[SslPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.SslPolicy)`

A pageable sequence of [SslPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.SslPolicy) resources.

**Example**

```
// Create client
RegionSslPoliciesClient regionSslPoliciesClient = RegionSslPoliciesClient.Create();
// Initialize request argument(s)
string project = "";
string region = "";
// Make the request
PagedEnumerable<SslPoliciesList, SslPolicy> response = regionSslPoliciesClient.List(project, region);

// Iterate over all response items, lazily performing RPCs as required
foreach (SslPolicy item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (SslPoliciesList page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (SslPolicy item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<SslPolicy> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (SslPolicy item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListAsync(ListRegionSslPoliciesRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<SslPoliciesList, SslPolicy> ListAsync(ListRegionSslPoliciesRequest request, CallSettings callSettings = null)
```

Lists all the SSL policies that have been configured for the specified project and region.

**Parameters**

**Name**

**Description**

`request`

`[ListRegionSslPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.ListRegionSslPoliciesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/PagedAsyncEnumerable.cs)[SslPoliciesList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.SslPoliciesList)[SslPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.SslPolicy)`

A pageable asynchronous sequence of [SslPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.SslPolicy) resources.

**Example**

```
// Create client
RegionSslPoliciesClient regionSslPoliciesClient = await RegionSslPoliciesClient.CreateAsync();
// Initialize request argument(s)
ListRegionSslPoliciesRequest request = new ListRegionSslPoliciesRequest
{
    Region = "",
    OrderBy = "",
    Project = "",
    Filter = "",
    ReturnPartialSuccess = false,
};
// Make the request
PagedAsyncEnumerable<SslPoliciesList, SslPolicy> response = regionSslPoliciesClient.ListAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((SslPolicy item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((SslPoliciesList page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (SslPolicy item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<SslPolicy> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (SslPolicy item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListAsync(string, string, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<SslPoliciesList, SslPolicy> ListAsync(string project, string region, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists all the SSL policies that have been configured for the specified project and region.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the region scoping this request.

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

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/PagedAsyncEnumerable.cs)[SslPoliciesList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.SslPoliciesList)[SslPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.SslPolicy)`

A pageable asynchronous sequence of [SslPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.SslPolicy) resources.

**Example**

```
// Create client
RegionSslPoliciesClient regionSslPoliciesClient = await RegionSslPoliciesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string region = "";
// Make the request
PagedAsyncEnumerable<SslPoliciesList, SslPolicy> response = regionSslPoliciesClient.ListAsync(project, region);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((SslPolicy item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((SslPoliciesList page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (SslPolicy item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<SslPolicy> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (SslPolicy item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListAvailableFeatures(ListAvailableFeaturesRegionSslPoliciesRequest, CallSettings)

```
public virtual SslPoliciesListAvailableFeaturesResponse ListAvailableFeatures(ListAvailableFeaturesRegionSslPoliciesRequest request, CallSettings callSettings = null)
```

Lists all features that can be specified in the SSL policy when using custom profile.

**Parameters**

**Name**

**Description**

`request`

`[ListAvailableFeaturesRegionSslPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.ListAvailableFeaturesRegionSslPoliciesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[SslPoliciesListAvailableFeaturesResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.SslPoliciesListAvailableFeaturesResponse)`

The RPC response.

**Example**

```
// Create client
RegionSslPoliciesClient regionSslPoliciesClient = RegionSslPoliciesClient.Create();
// Initialize request argument(s)
ListAvailableFeaturesRegionSslPoliciesRequest request = new ListAvailableFeaturesRegionSslPoliciesRequest
{
    PageToken = "",
    MaxResults = 0U,
    Region = "",
    OrderBy = "",
    Project = "",
    Filter = "",
    ReturnPartialSuccess = false,
};
// Make the request
SslPoliciesListAvailableFeaturesResponse response = regionSslPoliciesClient.ListAvailableFeatures(request);
```

### ListAvailableFeatures(string, string, CallSettings)

```
public virtual SslPoliciesListAvailableFeaturesResponse ListAvailableFeatures(string project, string region, CallSettings callSettings = null)
```

Lists all features that can be specified in the SSL policy when using custom profile.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the region scoping this request.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[SslPoliciesListAvailableFeaturesResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.SslPoliciesListAvailableFeaturesResponse)`

The RPC response.

**Example**

```
// Create client
RegionSslPoliciesClient regionSslPoliciesClient = RegionSslPoliciesClient.Create();
// Initialize request argument(s)
string project = "";
string region = "";
// Make the request
SslPoliciesListAvailableFeaturesResponse response = regionSslPoliciesClient.ListAvailableFeatures(project, region);
```

### ListAvailableFeaturesAsync(ListAvailableFeaturesRegionSslPoliciesRequest, CallSettings)

```
public virtual Task<SslPoliciesListAvailableFeaturesResponse> ListAvailableFeaturesAsync(ListAvailableFeaturesRegionSslPoliciesRequest request, CallSettings callSettings = null)
```

Lists all features that can be specified in the SSL policy when using custom profile.

**Parameters**

**Name**

**Description**

`request`

`[ListAvailableFeaturesRegionSslPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.ListAvailableFeaturesRegionSslPoliciesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SslPoliciesListAvailableFeaturesResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.SslPoliciesListAvailableFeaturesResponse)`

A Task containing the RPC response.

**Example**

```
// Create client
RegionSslPoliciesClient regionSslPoliciesClient = await RegionSslPoliciesClient.CreateAsync();
// Initialize request argument(s)
ListAvailableFeaturesRegionSslPoliciesRequest request = new ListAvailableFeaturesRegionSslPoliciesRequest
{
    PageToken = "",
    MaxResults = 0U,
    Region = "",
    OrderBy = "",
    Project = "",
    Filter = "",
    ReturnPartialSuccess = false,
};
// Make the request
SslPoliciesListAvailableFeaturesResponse response = await regionSslPoliciesClient.ListAvailableFeaturesAsync(request);
```

### ListAvailableFeaturesAsync(ListAvailableFeaturesRegionSslPoliciesRequest, CancellationToken)

```
public virtual Task<SslPoliciesListAvailableFeaturesResponse> ListAvailableFeaturesAsync(ListAvailableFeaturesRegionSslPoliciesRequest request, CancellationToken cancellationToken)
```

Lists all features that can be specified in the SSL policy when using custom profile.

**Parameters**

**Name**

**Description**

`request`

`[ListAvailableFeaturesRegionSslPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.ListAvailableFeaturesRegionSslPoliciesRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SslPoliciesListAvailableFeaturesResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.SslPoliciesListAvailableFeaturesResponse)`

A Task containing the RPC response.

**Example**

```
// Create client
RegionSslPoliciesClient regionSslPoliciesClient = await RegionSslPoliciesClient.CreateAsync();
// Initialize request argument(s)
ListAvailableFeaturesRegionSslPoliciesRequest request = new ListAvailableFeaturesRegionSslPoliciesRequest
{
    PageToken = "",
    MaxResults = 0U,
    Region = "",
    OrderBy = "",
    Project = "",
    Filter = "",
    ReturnPartialSuccess = false,
};
// Make the request
SslPoliciesListAvailableFeaturesResponse response = await regionSslPoliciesClient.ListAvailableFeaturesAsync(request);
```

### ListAvailableFeaturesAsync(string, string, CallSettings)

```
public virtual Task<SslPoliciesListAvailableFeaturesResponse> ListAvailableFeaturesAsync(string project, string region, CallSettings callSettings = null)
```

Lists all features that can be specified in the SSL policy when using custom profile.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the region scoping this request.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SslPoliciesListAvailableFeaturesResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.SslPoliciesListAvailableFeaturesResponse)`

A Task containing the RPC response.

**Example**

```
// Create client
RegionSslPoliciesClient regionSslPoliciesClient = await RegionSslPoliciesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string region = "";
// Make the request
SslPoliciesListAvailableFeaturesResponse response = await regionSslPoliciesClient.ListAvailableFeaturesAsync(project, region);
```

### ListAvailableFeaturesAsync(string, string, CancellationToken)

```
public virtual Task<SslPoliciesListAvailableFeaturesResponse> ListAvailableFeaturesAsync(string project, string region, CancellationToken cancellationToken)
```

Lists all features that can be specified in the SSL policy when using custom profile.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the region scoping this request.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SslPoliciesListAvailableFeaturesResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.SslPoliciesListAvailableFeaturesResponse)`

A Task containing the RPC response.

**Example**

```
// Create client
RegionSslPoliciesClient regionSslPoliciesClient = await RegionSslPoliciesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string region = "";
// Make the request
SslPoliciesListAvailableFeaturesResponse response = await regionSslPoliciesClient.ListAvailableFeaturesAsync(project, region);
```

### Patch(PatchRegionSslPolicyRequest, CallSettings)

```
public virtual Operation<Operation, Operation> Patch(PatchRegionSslPolicyRequest request, CallSettings callSettings = null)
```

Patches the specified SSL policy with the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[PatchRegionSslPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.PatchRegionSslPolicyRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)`

The RPC response.

**Example**

```
// Create client
RegionSslPoliciesClient regionSslPoliciesClient = RegionSslPoliciesClient.Create();
// Initialize request argument(s)
PatchRegionSslPolicyRequest request = new PatchRegionSslPolicyRequest
{
    RequestId = "",
    Region = "",
    Project = "",
    SslPolicyResource = new SslPolicy(),
    SslPolicy = "",
};
// Make the request
lro::Operation<Operation, Operation> response = regionSslPoliciesClient.Patch(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = regionSslPoliciesClient.PollOncePatch(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### Patch(string, string, string, SslPolicy, CallSettings)

```
public virtual Operation<Operation, Operation> Patch(string project, string region, string sslPolicy, SslPolicy sslPolicyResource, CallSettings callSettings = null)
```

Patches the specified SSL policy with the data included in the request.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the region scoping this request.

`sslPolicy`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the SSL policy to update. The name must be 1-63 characters long, and comply with RFC1035.

`sslPolicyResource`

`[SslPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.SslPolicy)`  

The body resource for this request

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)`

The RPC response.

**Example**

```
// Create client
RegionSslPoliciesClient regionSslPoliciesClient = RegionSslPoliciesClient.Create();
// Initialize request argument(s)
string project = "";
string region = "";
string sslPolicy = "";
SslPolicy sslPolicyResource = new SslPolicy();
// Make the request
lro::Operation<Operation, Operation> response = regionSslPoliciesClient.Patch(project, region, sslPolicy, sslPolicyResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = regionSslPoliciesClient.PollOncePatch(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### PatchAsync(PatchRegionSslPolicyRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> PatchAsync(PatchRegionSslPolicyRequest request, CallSettings callSettings = null)
```

Patches the specified SSL policy with the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[PatchRegionSslPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.PatchRegionSslPolicyRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
RegionSslPoliciesClient regionSslPoliciesClient = await RegionSslPoliciesClient.CreateAsync();
// Initialize request argument(s)
PatchRegionSslPolicyRequest request = new PatchRegionSslPolicyRequest
{
    RequestId = "",
    Region = "",
    Project = "",
    SslPolicyResource = new SslPolicy(),
    SslPolicy = "",
};
// Make the request
lro::Operation<Operation, Operation> response = await regionSslPoliciesClient.PatchAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await regionSslPoliciesClient.PollOncePatchAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### PatchAsync(PatchRegionSslPolicyRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> PatchAsync(PatchRegionSslPolicyRequest request, CancellationToken cancellationToken)
```

Patches the specified SSL policy with the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[PatchRegionSslPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.PatchRegionSslPolicyRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
RegionSslPoliciesClient regionSslPoliciesClient = await RegionSslPoliciesClient.CreateAsync();
// Initialize request argument(s)
PatchRegionSslPolicyRequest request = new PatchRegionSslPolicyRequest
{
    RequestId = "",
    Region = "",
    Project = "",
    SslPolicyResource = new SslPolicy(),
    SslPolicy = "",
};
// Make the request
lro::Operation<Operation, Operation> response = await regionSslPoliciesClient.PatchAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await regionSslPoliciesClient.PollOncePatchAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### PatchAsync(string, string, string, SslPolicy, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> PatchAsync(string project, string region, string sslPolicy, SslPolicy sslPolicyResource, CallSettings callSettings = null)
```

Patches the specified SSL policy with the data included in the request.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the region scoping this request.

`sslPolicy`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the SSL policy to update. The name must be 1-63 characters long, and comply with RFC1035.

`sslPolicyResource`

`[SslPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.SslPolicy)`  

The body resource for this request

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
RegionSslPoliciesClient regionSslPoliciesClient = await RegionSslPoliciesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string region = "";
string sslPolicy = "";
SslPolicy sslPolicyResource = new SslPolicy();
// Make the request
lro::Operation<Operation, Operation> response = await regionSslPoliciesClient.PatchAsync(project, region, sslPolicy, sslPolicyResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await regionSslPoliciesClient.PollOncePatchAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### PatchAsync(string, string, string, SslPolicy, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> PatchAsync(string project, string region, string sslPolicy, SslPolicy sslPolicyResource, CancellationToken cancellationToken)
```

Patches the specified SSL policy with the data included in the request.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the region scoping this request.

`sslPolicy`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the SSL policy to update. The name must be 1-63 characters long, and comply with RFC1035.

`sslPolicyResource`

`[SslPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.SslPolicy)`  

The body resource for this request

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
RegionSslPoliciesClient regionSslPoliciesClient = await RegionSslPoliciesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string region = "";
string sslPolicy = "";
SslPolicy sslPolicyResource = new SslPolicy();
// Make the request
lro::Operation<Operation, Operation> response = await regionSslPoliciesClient.PatchAsync(project, region, sslPolicy, sslPolicyResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await regionSslPoliciesClient.PollOncePatchAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### PollOnceDelete(string, CallSettings)

```
public virtual Operation<Operation, Operation> PollOnceDelete(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `Delete`.

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

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)`

The result of polling the operation.

### PollOnceDeleteAsync(string, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> PollOnceDeleteAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `Delete` .

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

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)`

A task representing the result of polling the operation.

### PollOnceInsert(string, CallSettings)

```
public virtual Operation<Operation, Operation> PollOnceInsert(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `Insert`.

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

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)`

The result of polling the operation.

### PollOnceInsertAsync(string, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> PollOnceInsertAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `Insert` .

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

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)`

A task representing the result of polling the operation.

### PollOncePatch(string, CallSettings)

```
public virtual Operation<Operation, Operation> PollOncePatch(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `Patch`.

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

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)`

The result of polling the operation.

### PollOncePatchAsync(string, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> PollOncePatchAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `Patch` .

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

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/abf311d7d0649ce9e47aac5c9bae36cb75a5a218/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Operation)`

A task representing the result of polling the operation.

### ShutdownDefaultChannelsAsync()

```
public static Task ShutdownDefaultChannelsAsync()
```

Shuts down any channels automatically created by [Create()](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionSslPoliciesClient#Google_Cloud_Compute_V1_RegionSslPoliciesClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionSslPoliciesClient#Google_Cloud_Compute_V1_RegionSslPoliciesClient_CreateAsync_System_Threading_CancellationToken_). Channels which weren't automatically created are not affected.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A task representing the asynchronous shutdown operation.

**Remarks**

After calling this method, further calls to [Create()](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionSslPoliciesClient#Google_Cloud_Compute_V1_RegionSslPoliciesClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionSslPoliciesClient#Google_Cloud_Compute_V1_RegionSslPoliciesClient_CreateAsync_System_Threading_CancellationToken_) will create new channels, which could in turn be shut down by another call to this method.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
