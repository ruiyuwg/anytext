-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class LicensesClient (2.5.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public abstract class LicensesClient
```

Reference documentation and code samples for the Compute Engine v1 API class LicensesClient.

Licenses client wrapper, for convenient use.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> LicensesClient

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Derived Types

[LicensesClientImpl](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.LicensesClientImpl)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Remarks

The Licenses API.

## Properties

### DefaultEndpoint

```
public static string DefaultEndpoint { get; }
```

The default endpoint for the Licenses service, which is a host of "compute.googleapis.com" and a port of 443.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### DefaultScopes

```
public static IReadOnlyList<string> DefaultScopes { get; }
```

The default Licenses scopes.

**Property Value**

**Type**

**Description**

`[IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)<[String](https://learn.microsoft.com/dotnet/api/system.string)>`

**Remarks**

The default Licenses scopes are:

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

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

### GrpcClient

```
public virtual Licenses.LicensesClient GrpcClient { get; }
```

The underlying gRPC Licenses client

**Property Value**

**Type**

**Description**

`[Licenses.LicensesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Licenses.LicensesClient)`

### InsertOperationsClient

```
public virtual OperationsClient InsertOperationsClient { get; }
```

The long-running operations client for `Insert`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

### ServiceMetadata

```
public static ServiceMetadata ServiceMetadata { get; }
```

The service metadata associated with this client type.

**Property Value**

**Type**

**Description**

`[ServiceMetadata](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.ServiceMetadata.html)`

## Methods

### Create()

```
public static LicensesClient Create()
```

Synchronously creates a [LicensesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.LicensesClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [LicensesClientBuilder](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.LicensesClientBuilder).

**Returns**

**Type**

**Description**

`[LicensesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.LicensesClient)`

The created [LicensesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.LicensesClient).

### CreateAsync(CancellationToken)

```
public static Task<LicensesClient> CreateAsync(CancellationToken cancellationToken = default(CancellationToken))
```

Asynchronously creates a [LicensesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.LicensesClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [LicensesClientBuilder](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.LicensesClientBuilder).

**Parameter**

**Name**

**Description**

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

The [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use while creating the client.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[LicensesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.LicensesClient)>`

The task representing the created [LicensesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.LicensesClient).

### Delete(DeleteLicenseRequest, CallSettings)

```
public virtual Operation<Operation, Operation> Delete(DeleteLicenseRequest request, CallSettings callSettings = null)
```

Deletes the specified license. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`request`

`[DeleteLicenseRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.DeleteLicenseRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
LicensesClient licensesClient = LicensesClient.Create();
// Initialize request argument(s)
DeleteLicenseRequest request = new DeleteLicenseRequest
{
    RequestId = "",
    License = "",
    Project = "",
};
// Make the request
lro::Operation<Operation, Operation> response = licensesClient.Delete(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = licensesClient.PollOnceDelete(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### Delete(String, String, CallSettings)

```
public virtual Operation<Operation, Operation> Delete(string project, string license, CallSettings callSettings = null)
```

Deletes the specified license. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`license`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the license resource to delete.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
LicensesClient licensesClient = LicensesClient.Create();
// Initialize request argument(s)
string project = "";
string license = "";
// Make the request
lro::Operation<Operation, Operation> response = licensesClient.Delete(project, license);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = licensesClient.PollOnceDelete(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DeleteAsync(DeleteLicenseRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> DeleteAsync(DeleteLicenseRequest request, CallSettings callSettings = null)
```

Deletes the specified license. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`request`

`[DeleteLicenseRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.DeleteLicenseRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
LicensesClient licensesClient = await LicensesClient.CreateAsync();
// Initialize request argument(s)
DeleteLicenseRequest request = new DeleteLicenseRequest
{
    RequestId = "",
    License = "",
    Project = "",
};
// Make the request
lro::Operation<Operation, Operation> response = await licensesClient.DeleteAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await licensesClient.PollOnceDeleteAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DeleteAsync(DeleteLicenseRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> DeleteAsync(DeleteLicenseRequest request, CancellationToken cancellationToken)
```

Deletes the specified license. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`request`

`[DeleteLicenseRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.DeleteLicenseRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
LicensesClient licensesClient = await LicensesClient.CreateAsync();
// Initialize request argument(s)
DeleteLicenseRequest request = new DeleteLicenseRequest
{
    RequestId = "",
    License = "",
    Project = "",
};
// Make the request
lro::Operation<Operation, Operation> response = await licensesClient.DeleteAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await licensesClient.PollOnceDeleteAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DeleteAsync(String, String, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> DeleteAsync(string project, string license, CallSettings callSettings = null)
```

Deletes the specified license. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`license`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the license resource to delete.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
LicensesClient licensesClient = await LicensesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string license = "";
// Make the request
lro::Operation<Operation, Operation> response = await licensesClient.DeleteAsync(project, license);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await licensesClient.PollOnceDeleteAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DeleteAsync(String, String, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> DeleteAsync(string project, string license, CancellationToken cancellationToken)
```

Deletes the specified license. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`license`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the license resource to delete.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
LicensesClient licensesClient = await LicensesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string license = "";
// Make the request
lro::Operation<Operation, Operation> response = await licensesClient.DeleteAsync(project, license);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await licensesClient.PollOnceDeleteAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### Get(GetLicenseRequest, CallSettings)

```
public virtual License Get(GetLicenseRequest request, CallSettings callSettings = null)
```

Returns the specified License resource. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`request`

`[GetLicenseRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.GetLicenseRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[License](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.License)`

The RPC response.

**Example**

```
// Create client
LicensesClient licensesClient = LicensesClient.Create();
// Initialize request argument(s)
GetLicenseRequest request = new GetLicenseRequest
{
    License = "",
    Project = "",
};
// Make the request
License response = licensesClient.Get(request);
```

### Get(String, String, CallSettings)

```
public virtual License Get(string project, string license, CallSettings callSettings = null)
```

Returns the specified License resource. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`license`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the License resource to return.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[License](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.License)`

The RPC response.

**Example**

```
// Create client
LicensesClient licensesClient = LicensesClient.Create();
// Initialize request argument(s)
string project = "";
string license = "";
// Make the request
License response = licensesClient.Get(project, license);
```

### GetAsync(GetLicenseRequest, CallSettings)

```
public virtual Task<License> GetAsync(GetLicenseRequest request, CallSettings callSettings = null)
```

Returns the specified License resource. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`request`

`[GetLicenseRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.GetLicenseRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[License](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.License)>`

A Task containing the RPC response.

**Example**

```
// Create client
LicensesClient licensesClient = await LicensesClient.CreateAsync();
// Initialize request argument(s)
GetLicenseRequest request = new GetLicenseRequest
{
    License = "",
    Project = "",
};
// Make the request
License response = await licensesClient.GetAsync(request);
```

### GetAsync(GetLicenseRequest, CancellationToken)

```
public virtual Task<License> GetAsync(GetLicenseRequest request, CancellationToken cancellationToken)
```

Returns the specified License resource. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`request`

`[GetLicenseRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.GetLicenseRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[License](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.License)>`

A Task containing the RPC response.

**Example**

```
// Create client
LicensesClient licensesClient = await LicensesClient.CreateAsync();
// Initialize request argument(s)
GetLicenseRequest request = new GetLicenseRequest
{
    License = "",
    Project = "",
};
// Make the request
License response = await licensesClient.GetAsync(request);
```

### GetAsync(String, String, CallSettings)

```
public virtual Task<License> GetAsync(string project, string license, CallSettings callSettings = null)
```

Returns the specified License resource. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`license`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the License resource to return.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[License](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.License)>`

A Task containing the RPC response.

**Example**

```
// Create client
LicensesClient licensesClient = await LicensesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string license = "";
// Make the request
License response = await licensesClient.GetAsync(project, license);
```

### GetAsync(String, String, CancellationToken)

```
public virtual Task<License> GetAsync(string project, string license, CancellationToken cancellationToken)
```

Returns the specified License resource. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`license`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the License resource to return.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[License](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.License)>`

A Task containing the RPC response.

**Example**

```
// Create client
LicensesClient licensesClient = await LicensesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string license = "";
// Make the request
License response = await licensesClient.GetAsync(project, license);
```

### GetIamPolicy(GetIamPolicyLicenseRequest, CallSettings)

```
public virtual Policy GetIamPolicy(GetIamPolicyLicenseRequest request, CallSettings callSettings = null)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyLicenseRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.GetIamPolicyLicenseRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Policy)`

The RPC response.

**Example**

```
// Create client
LicensesClient licensesClient = LicensesClient.Create();
// Initialize request argument(s)
GetIamPolicyLicenseRequest request = new GetIamPolicyLicenseRequest
{
    Resource = "",
    Project = "",
    OptionsRequestedPolicyVersion = 0,
};
// Make the request
Policy response = licensesClient.GetIamPolicy(request);
```

### GetIamPolicy(String, String, CallSettings)

```
public virtual Policy GetIamPolicy(string project, string resource, CallSettings callSettings = null)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`resource`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name or id of the resource for this request.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Policy)`

The RPC response.

**Example**

```
// Create client
LicensesClient licensesClient = LicensesClient.Create();
// Initialize request argument(s)
string project = "";
string resource = "";
// Make the request
Policy response = licensesClient.GetIamPolicy(project, resource);
```

### GetIamPolicyAsync(GetIamPolicyLicenseRequest, CallSettings)

```
public virtual Task<Policy> GetIamPolicyAsync(GetIamPolicyLicenseRequest request, CallSettings callSettings = null)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyLicenseRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.GetIamPolicyLicenseRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Policy)>`

A Task containing the RPC response.

**Example**

```
// Create client
LicensesClient licensesClient = await LicensesClient.CreateAsync();
// Initialize request argument(s)
GetIamPolicyLicenseRequest request = new GetIamPolicyLicenseRequest
{
    Resource = "",
    Project = "",
    OptionsRequestedPolicyVersion = 0,
};
// Make the request
Policy response = await licensesClient.GetIamPolicyAsync(request);
```

### GetIamPolicyAsync(GetIamPolicyLicenseRequest, CancellationToken)

```
public virtual Task<Policy> GetIamPolicyAsync(GetIamPolicyLicenseRequest request, CancellationToken cancellationToken)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyLicenseRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.GetIamPolicyLicenseRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Policy)>`

A Task containing the RPC response.

**Example**

```
// Create client
LicensesClient licensesClient = await LicensesClient.CreateAsync();
// Initialize request argument(s)
GetIamPolicyLicenseRequest request = new GetIamPolicyLicenseRequest
{
    Resource = "",
    Project = "",
    OptionsRequestedPolicyVersion = 0,
};
// Make the request
Policy response = await licensesClient.GetIamPolicyAsync(request);
```

### GetIamPolicyAsync(String, String, CallSettings)

```
public virtual Task<Policy> GetIamPolicyAsync(string project, string resource, CallSettings callSettings = null)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`resource`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name or id of the resource for this request.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Policy)>`

A Task containing the RPC response.

**Example**

```
// Create client
LicensesClient licensesClient = await LicensesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string resource = "";
// Make the request
Policy response = await licensesClient.GetIamPolicyAsync(project, resource);
```

### GetIamPolicyAsync(String, String, CancellationToken)

```
public virtual Task<Policy> GetIamPolicyAsync(string project, string resource, CancellationToken cancellationToken)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`resource`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name or id of the resource for this request.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Policy)>`

A Task containing the RPC response.

**Example**

```
// Create client
LicensesClient licensesClient = await LicensesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string resource = "";
// Make the request
Policy response = await licensesClient.GetIamPolicyAsync(project, resource);
```

### Insert(InsertLicenseRequest, CallSettings)

```
public virtual Operation<Operation, Operation> Insert(InsertLicenseRequest request, CallSettings callSettings = null)
```

Create a License resource in the specified project. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`request`

`[InsertLicenseRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.InsertLicenseRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
LicensesClient licensesClient = LicensesClient.Create();
// Initialize request argument(s)
InsertLicenseRequest request = new InsertLicenseRequest
{
    RequestId = "",
    Project = "",
    LicenseResource = new License(),
};
// Make the request
lro::Operation<Operation, Operation> response = licensesClient.Insert(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = licensesClient.PollOnceInsert(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### Insert(String, License, CallSettings)

```
public virtual Operation<Operation, Operation> Insert(string project, License licenseResource, CallSettings callSettings = null)
```

Create a License resource in the specified project. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`licenseResource`

`[License](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.License)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
LicensesClient licensesClient = LicensesClient.Create();
// Initialize request argument(s)
string project = "";
License licenseResource = new License();
// Make the request
lro::Operation<Operation, Operation> response = licensesClient.Insert(project, licenseResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = licensesClient.PollOnceInsert(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### InsertAsync(InsertLicenseRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> InsertAsync(InsertLicenseRequest request, CallSettings callSettings = null)
```

Create a License resource in the specified project. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`request`

`[InsertLicenseRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.InsertLicenseRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
LicensesClient licensesClient = await LicensesClient.CreateAsync();
// Initialize request argument(s)
InsertLicenseRequest request = new InsertLicenseRequest
{
    RequestId = "",
    Project = "",
    LicenseResource = new License(),
};
// Make the request
lro::Operation<Operation, Operation> response = await licensesClient.InsertAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await licensesClient.PollOnceInsertAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### InsertAsync(InsertLicenseRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> InsertAsync(InsertLicenseRequest request, CancellationToken cancellationToken)
```

Create a License resource in the specified project. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`request`

`[InsertLicenseRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.InsertLicenseRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
LicensesClient licensesClient = await LicensesClient.CreateAsync();
// Initialize request argument(s)
InsertLicenseRequest request = new InsertLicenseRequest
{
    RequestId = "",
    Project = "",
    LicenseResource = new License(),
};
// Make the request
lro::Operation<Operation, Operation> response = await licensesClient.InsertAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await licensesClient.PollOnceInsertAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### InsertAsync(String, License, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> InsertAsync(string project, License licenseResource, CallSettings callSettings = null)
```

Create a License resource in the specified project. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`licenseResource`

`[License](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.License)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
LicensesClient licensesClient = await LicensesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
License licenseResource = new License();
// Make the request
lro::Operation<Operation, Operation> response = await licensesClient.InsertAsync(project, licenseResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await licensesClient.PollOnceInsertAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### InsertAsync(String, License, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> InsertAsync(string project, License licenseResource, CancellationToken cancellationToken)
```

Create a License resource in the specified project. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`licenseResource`

`[License](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.License)`  

The body resource for this request

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
LicensesClient licensesClient = await LicensesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
License licenseResource = new License();
// Make the request
lro::Operation<Operation, Operation> response = await licensesClient.InsertAsync(project, licenseResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await licensesClient.PollOnceInsertAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### List(ListLicensesRequest, CallSettings)

```
public virtual PagedEnumerable<LicensesListResponse, License> List(ListLicensesRequest request, CallSettings callSettings = null)
```

Retrieves the list of licenses available in the specified project. This method does not get any licenses that belong to other projects, including licenses attached to publicly-available images, like Debian 9. If you want to get a list of publicly-available licenses, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`request`

`[ListLicensesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.ListLicensesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[LicensesListResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.LicensesListResponse), [License](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.License)>`

A pageable sequence of [License](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.License) resources.

**Example**

```
// Create client
LicensesClient licensesClient = LicensesClient.Create();
// Initialize request argument(s)
ListLicensesRequest request = new ListLicensesRequest
{
    OrderBy = "",
    Project = "",
    Filter = "",
    ReturnPartialSuccess = false,
};
// Make the request
PagedEnumerable<LicensesListResponse, License> response = licensesClient.List(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (License item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (LicensesListResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (License item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<License> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (License item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### List(String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedEnumerable<LicensesListResponse, License> List(string project, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Retrieves the list of licenses available in the specified project. This method does not get any licenses that belong to other projects, including licenses attached to publicly-available images, like Debian 9. If you want to get a list of publicly-available licenses, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[LicensesListResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.LicensesListResponse), [License](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.License)>`

A pageable sequence of [License](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.License) resources.

**Example**

```
// Create client
LicensesClient licensesClient = LicensesClient.Create();
// Initialize request argument(s)
string project = "";
// Make the request
PagedEnumerable<LicensesListResponse, License> response = licensesClient.List(project);

// Iterate over all response items, lazily performing RPCs as required
foreach (License item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (LicensesListResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (License item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<License> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (License item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListAsync(ListLicensesRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<LicensesListResponse, License> ListAsync(ListLicensesRequest request, CallSettings callSettings = null)
```

Retrieves the list of licenses available in the specified project. This method does not get any licenses that belong to other projects, including licenses attached to publicly-available images, like Debian 9. If you want to get a list of publicly-available licenses, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`request`

`[ListLicensesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.ListLicensesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[LicensesListResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.LicensesListResponse), [License](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.License)>`

A pageable asynchronous sequence of [License](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.License) resources.

**Example**

```
// Create client
LicensesClient licensesClient = await LicensesClient.CreateAsync();
// Initialize request argument(s)
ListLicensesRequest request = new ListLicensesRequest
{
    OrderBy = "",
    Project = "",
    Filter = "",
    ReturnPartialSuccess = false,
};
// Make the request
PagedAsyncEnumerable<LicensesListResponse, License> response = licensesClient.ListAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((License item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((LicensesListResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (License item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<License> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (License item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListAsync(String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedAsyncEnumerable<LicensesListResponse, License> ListAsync(string project, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Retrieves the list of licenses available in the specified project. This method does not get any licenses that belong to other projects, including licenses attached to publicly-available images, like Debian 9. If you want to get a list of publicly-available licenses, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[LicensesListResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.LicensesListResponse), [License](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.License)>`

A pageable asynchronous sequence of [License](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.License) resources.

**Example**

```
// Create client
LicensesClient licensesClient = await LicensesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
// Make the request
PagedAsyncEnumerable<LicensesListResponse, License> response = licensesClient.ListAsync(project);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((License item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((LicensesListResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (License item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<License> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (License item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### PollOnceDelete(String, CallSettings)

```
public virtual Operation<Operation, Operation> PollOnceDelete(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `Delete`.

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

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>`

The result of polling the operation.

### PollOnceDeleteAsync(String, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> PollOnceDeleteAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `Delete` .

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

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>>`

A task representing the result of polling the operation.

### PollOnceInsert(String, CallSettings)

```
public virtual Operation<Operation, Operation> PollOnceInsert(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `Insert`.

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

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>`

The result of polling the operation.

### PollOnceInsertAsync(String, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> PollOnceInsertAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `Insert` .

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

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Operation)>>`

A task representing the result of polling the operation.

### SetIamPolicy(SetIamPolicyLicenseRequest, CallSettings)

```
public virtual Policy SetIamPolicy(SetIamPolicyLicenseRequest request, CallSettings callSettings = null)
```

Sets the access control policy on the specified resource. Replaces any existing policy. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyLicenseRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SetIamPolicyLicenseRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Policy)`

The RPC response.

**Example**

```
// Create client
LicensesClient licensesClient = LicensesClient.Create();
// Initialize request argument(s)
SetIamPolicyLicenseRequest request = new SetIamPolicyLicenseRequest
{
    Resource = "",
    Project = "",
    GlobalSetPolicyRequestResource = new GlobalSetPolicyRequest(),
};
// Make the request
Policy response = licensesClient.SetIamPolicy(request);
```

### SetIamPolicy(String, String, GlobalSetPolicyRequest, CallSettings)

```
public virtual Policy SetIamPolicy(string project, string resource, GlobalSetPolicyRequest globalSetPolicyRequestResource, CallSettings callSettings = null)
```

Sets the access control policy on the specified resource. Replaces any existing policy. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`resource`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name or id of the resource for this request.

`globalSetPolicyRequestResource`

`[GlobalSetPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.GlobalSetPolicyRequest)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Policy)`

The RPC response.

**Example**

```
// Create client
LicensesClient licensesClient = LicensesClient.Create();
// Initialize request argument(s)
string project = "";
string resource = "";
GlobalSetPolicyRequest globalSetPolicyRequestResource = new GlobalSetPolicyRequest();
// Make the request
Policy response = licensesClient.SetIamPolicy(project, resource, globalSetPolicyRequestResource);
```

### SetIamPolicyAsync(SetIamPolicyLicenseRequest, CallSettings)

```
public virtual Task<Policy> SetIamPolicyAsync(SetIamPolicyLicenseRequest request, CallSettings callSettings = null)
```

Sets the access control policy on the specified resource. Replaces any existing policy. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyLicenseRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SetIamPolicyLicenseRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Policy)>`

A Task containing the RPC response.

**Example**

```
// Create client
LicensesClient licensesClient = await LicensesClient.CreateAsync();
// Initialize request argument(s)
SetIamPolicyLicenseRequest request = new SetIamPolicyLicenseRequest
{
    Resource = "",
    Project = "",
    GlobalSetPolicyRequestResource = new GlobalSetPolicyRequest(),
};
// Make the request
Policy response = await licensesClient.SetIamPolicyAsync(request);
```

### SetIamPolicyAsync(SetIamPolicyLicenseRequest, CancellationToken)

```
public virtual Task<Policy> SetIamPolicyAsync(SetIamPolicyLicenseRequest request, CancellationToken cancellationToken)
```

Sets the access control policy on the specified resource. Replaces any existing policy. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyLicenseRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.SetIamPolicyLicenseRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Policy)>`

A Task containing the RPC response.

**Example**

```
// Create client
LicensesClient licensesClient = await LicensesClient.CreateAsync();
// Initialize request argument(s)
SetIamPolicyLicenseRequest request = new SetIamPolicyLicenseRequest
{
    Resource = "",
    Project = "",
    GlobalSetPolicyRequestResource = new GlobalSetPolicyRequest(),
};
// Make the request
Policy response = await licensesClient.SetIamPolicyAsync(request);
```

### SetIamPolicyAsync(String, String, GlobalSetPolicyRequest, CallSettings)

```
public virtual Task<Policy> SetIamPolicyAsync(string project, string resource, GlobalSetPolicyRequest globalSetPolicyRequestResource, CallSettings callSettings = null)
```

Sets the access control policy on the specified resource. Replaces any existing policy. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`resource`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name or id of the resource for this request.

`globalSetPolicyRequestResource`

`[GlobalSetPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.GlobalSetPolicyRequest)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Policy)>`

A Task containing the RPC response.

**Example**

```
// Create client
LicensesClient licensesClient = await LicensesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string resource = "";
GlobalSetPolicyRequest globalSetPolicyRequestResource = new GlobalSetPolicyRequest();
// Make the request
Policy response = await licensesClient.SetIamPolicyAsync(project, resource, globalSetPolicyRequestResource);
```

### SetIamPolicyAsync(String, String, GlobalSetPolicyRequest, CancellationToken)

```
public virtual Task<Policy> SetIamPolicyAsync(string project, string resource, GlobalSetPolicyRequest globalSetPolicyRequestResource, CancellationToken cancellationToken)
```

Sets the access control policy on the specified resource. Replaces any existing policy. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`resource`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name or id of the resource for this request.

`globalSetPolicyRequestResource`

`[GlobalSetPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.GlobalSetPolicyRequest)`  

The body resource for this request

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.Policy)>`

A Task containing the RPC response.

**Example**

```
// Create client
LicensesClient licensesClient = await LicensesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string resource = "";
GlobalSetPolicyRequest globalSetPolicyRequestResource = new GlobalSetPolicyRequest();
// Make the request
Policy response = await licensesClient.SetIamPolicyAsync(project, resource, globalSetPolicyRequestResource);
```

### ShutdownDefaultChannelsAsync()

```
public static Task ShutdownDefaultChannelsAsync()
```

Shuts down any channels automatically created by [Create()](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.LicensesClient#Google_Cloud_Compute_V1_LicensesClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.LicensesClient#Google_Cloud_Compute_V1_LicensesClient_CreateAsync_System_Threading_CancellationToken_). Channels which weren't automatically created are not affected.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A task representing the asynchronous shutdown operation.

**Remarks**

After calling this method, further calls to [Create()](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.LicensesClient#Google_Cloud_Compute_V1_LicensesClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.LicensesClient#Google_Cloud_Compute_V1_LicensesClient_CreateAsync_System_Threading_CancellationToken_) will create new channels, which could in turn be shut down by another call to this method.

### TestIamPermissions(TestIamPermissionsLicenseRequest, CallSettings)

```
public virtual TestPermissionsResponse TestIamPermissions(TestIamPermissionsLicenseRequest request, CallSettings callSettings = null)
```

Returns permissions that a caller has on the specified resource. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsLicenseRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.TestIamPermissionsLicenseRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.TestPermissionsResponse)`

The RPC response.

**Example**

```
// Create client
LicensesClient licensesClient = LicensesClient.Create();
// Initialize request argument(s)
TestIamPermissionsLicenseRequest request = new TestIamPermissionsLicenseRequest
{
    Resource = "",
    Project = "",
    TestPermissionsRequestResource = new TestPermissionsRequest(),
};
// Make the request
TestPermissionsResponse response = licensesClient.TestIamPermissions(request);
```

### TestIamPermissions(String, String, TestPermissionsRequest, CallSettings)

```
public virtual TestPermissionsResponse TestIamPermissions(string project, string resource, TestPermissionsRequest testPermissionsRequestResource, CallSettings callSettings = null)
```

Returns permissions that a caller has on the specified resource. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`resource`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name or id of the resource for this request.

`testPermissionsRequestResource`

`[TestPermissionsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.TestPermissionsRequest)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.TestPermissionsResponse)`

The RPC response.

**Example**

```
// Create client
LicensesClient licensesClient = LicensesClient.Create();
// Initialize request argument(s)
string project = "";
string resource = "";
TestPermissionsRequest testPermissionsRequestResource = new TestPermissionsRequest();
// Make the request
TestPermissionsResponse response = licensesClient.TestIamPermissions(project, resource, testPermissionsRequestResource);
```

### TestIamPermissionsAsync(TestIamPermissionsLicenseRequest, CallSettings)

```
public virtual Task<TestPermissionsResponse> TestIamPermissionsAsync(TestIamPermissionsLicenseRequest request, CallSettings callSettings = null)
```

Returns permissions that a caller has on the specified resource. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsLicenseRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.TestIamPermissionsLicenseRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.TestPermissionsResponse)>`

A Task containing the RPC response.

**Example**

```
// Create client
LicensesClient licensesClient = await LicensesClient.CreateAsync();
// Initialize request argument(s)
TestIamPermissionsLicenseRequest request = new TestIamPermissionsLicenseRequest
{
    Resource = "",
    Project = "",
    TestPermissionsRequestResource = new TestPermissionsRequest(),
};
// Make the request
TestPermissionsResponse response = await licensesClient.TestIamPermissionsAsync(request);
```

### TestIamPermissionsAsync(TestIamPermissionsLicenseRequest, CancellationToken)

```
public virtual Task<TestPermissionsResponse> TestIamPermissionsAsync(TestIamPermissionsLicenseRequest request, CancellationToken cancellationToken)
```

Returns permissions that a caller has on the specified resource. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsLicenseRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.TestIamPermissionsLicenseRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.TestPermissionsResponse)>`

A Task containing the RPC response.

**Example**

```
// Create client
LicensesClient licensesClient = await LicensesClient.CreateAsync();
// Initialize request argument(s)
TestIamPermissionsLicenseRequest request = new TestIamPermissionsLicenseRequest
{
    Resource = "",
    Project = "",
    TestPermissionsRequestResource = new TestPermissionsRequest(),
};
// Make the request
TestPermissionsResponse response = await licensesClient.TestIamPermissionsAsync(request);
```

### TestIamPermissionsAsync(String, String, TestPermissionsRequest, CallSettings)

```
public virtual Task<TestPermissionsResponse> TestIamPermissionsAsync(string project, string resource, TestPermissionsRequest testPermissionsRequestResource, CallSettings callSettings = null)
```

Returns permissions that a caller has on the specified resource. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`resource`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name or id of the resource for this request.

`testPermissionsRequestResource`

`[TestPermissionsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.TestPermissionsRequest)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.TestPermissionsResponse)>`

A Task containing the RPC response.

**Example**

```
// Create client
LicensesClient licensesClient = await LicensesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string resource = "";
TestPermissionsRequest testPermissionsRequestResource = new TestPermissionsRequest();
// Make the request
TestPermissionsResponse response = await licensesClient.TestIamPermissionsAsync(project, resource, testPermissionsRequestResource);
```

### TestIamPermissionsAsync(String, String, TestPermissionsRequest, CancellationToken)

```
public virtual Task<TestPermissionsResponse> TestIamPermissionsAsync(string project, string resource, TestPermissionsRequest testPermissionsRequestResource, CancellationToken cancellationToken)
```

Returns permissions that a caller has on the specified resource. _Caution_ This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`resource`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name or id of the resource for this request.

`testPermissionsRequestResource`

`[TestPermissionsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.TestPermissionsRequest)`  

The body resource for this request

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.TestPermissionsResponse)>`

A Task containing the RPC response.

**Example**

```
// Create client
LicensesClient licensesClient = await LicensesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string resource = "";
TestPermissionsRequest testPermissionsRequestResource = new TestPermissionsRequest();
// Make the request
TestPermissionsResponse response = await licensesClient.TestIamPermissionsAsync(project, resource, testPermissionsRequestResource);
```

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
