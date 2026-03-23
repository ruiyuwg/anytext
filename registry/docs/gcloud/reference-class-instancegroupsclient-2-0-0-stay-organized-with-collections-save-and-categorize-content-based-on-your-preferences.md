-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class InstanceGroupsClient (2.0.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public abstract class InstanceGroupsClient
```

InstanceGroups client wrapper, for convenient use.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> InstanceGroupsClient

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Derived Types

[InstanceGroupsClientImpl](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupsClientImpl)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Remarks

The InstanceGroups API.

## Properties

### AddInstancesOperationsClient

```
public virtual OperationsClient AddInstancesOperationsClient { get; }
```

The long-running operations client for `AddInstances`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

### DefaultEndpoint

```
public static string DefaultEndpoint { get; }
```

The default endpoint for the InstanceGroups service, which is a host of "compute.googleapis.com" and a port of 443.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### DefaultScopes

```
public static IReadOnlyList<string> DefaultScopes { get; }
```

The default InstanceGroups scopes.

**Property Value**

**Type**

**Description**

`[IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)<[String](https://learn.microsoft.com/dotnet/api/system.string)>`

**Remarks**

The default InstanceGroups scopes are:

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
public virtual InstanceGroups.InstanceGroupsClient GrpcClient { get; }
```

The underlying gRPC InstanceGroups client

**Property Value**

**Type**

**Description**

`[InstanceGroups.InstanceGroupsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroups.InstanceGroupsClient)`

### InsertOperationsClient

```
public virtual OperationsClient InsertOperationsClient { get; }
```

The long-running operations client for `Insert`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

### RemoveInstancesOperationsClient

```
public virtual OperationsClient RemoveInstancesOperationsClient { get; }
```

The long-running operations client for `RemoveInstances`.

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

### SetNamedPortsOperationsClient

```
public virtual OperationsClient SetNamedPortsOperationsClient { get; }
```

The long-running operations client for `SetNamedPorts`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

## Methods

### AddInstances(AddInstancesInstanceGroupRequest, CallSettings)

```
public virtual Operation<Operation, Operation> AddInstances(AddInstancesInstanceGroupRequest request, CallSettings callSettings = null)
```

Adds a list of instances to the specified instance group. All of the instances in the instance group must be in the same network/subnetwork. Read Adding instances for more information.

**Parameters**

**Name**

**Description**

`request`

`[AddInstancesInstanceGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.AddInstancesInstanceGroupRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = InstanceGroupsClient.Create();
// Initialize request argument(s)
AddInstancesInstanceGroupRequest request = new AddInstancesInstanceGroupRequest
{
    Zone = "",
    RequestId = "",
    InstanceGroup = "",
    Project = "",
    InstanceGroupsAddInstancesRequestResource = new InstanceGroupsAddInstancesRequest(),
};
// Make the request
lro::Operation<Operation, Operation> response = instanceGroupsClient.AddInstances(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = instanceGroupsClient.PollOnceAddInstances(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### AddInstances(String, String, String, InstanceGroupsAddInstancesRequest, CallSettings)

```
public virtual Operation<Operation, Operation> AddInstances(string project, string zone, string instanceGroup, InstanceGroupsAddInstancesRequest instanceGroupsAddInstancesRequestResource, CallSettings callSettings = null)
```

Adds a list of instances to the specified instance group. All of the instances in the instance group must be in the same network/subnetwork. Read Adding instances for more information.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where the instance group is located.

`instanceGroup`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the instance group where you are adding instances.

`instanceGroupsAddInstancesRequestResource`

`[InstanceGroupsAddInstancesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupsAddInstancesRequest)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = InstanceGroupsClient.Create();
// Initialize request argument(s)
string project = "";
string zone = "";
string instanceGroup = "";
InstanceGroupsAddInstancesRequest instanceGroupsAddInstancesRequestResource = new InstanceGroupsAddInstancesRequest();
// Make the request
lro::Operation<Operation, Operation> response = instanceGroupsClient.AddInstances(project, zone, instanceGroup, instanceGroupsAddInstancesRequestResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = instanceGroupsClient.PollOnceAddInstances(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### AddInstancesAsync(AddInstancesInstanceGroupRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> AddInstancesAsync(AddInstancesInstanceGroupRequest request, CallSettings callSettings = null)
```

Adds a list of instances to the specified instance group. All of the instances in the instance group must be in the same network/subnetwork. Read Adding instances for more information.

**Parameters**

**Name**

**Description**

`request`

`[AddInstancesInstanceGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.AddInstancesInstanceGroupRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = await InstanceGroupsClient.CreateAsync();
// Initialize request argument(s)
AddInstancesInstanceGroupRequest request = new AddInstancesInstanceGroupRequest
{
    Zone = "",
    RequestId = "",
    InstanceGroup = "",
    Project = "",
    InstanceGroupsAddInstancesRequestResource = new InstanceGroupsAddInstancesRequest(),
};
// Make the request
lro::Operation<Operation, Operation> response = await instanceGroupsClient.AddInstancesAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await instanceGroupsClient.PollOnceAddInstancesAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### AddInstancesAsync(AddInstancesInstanceGroupRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> AddInstancesAsync(AddInstancesInstanceGroupRequest request, CancellationToken cancellationToken)
```

Adds a list of instances to the specified instance group. All of the instances in the instance group must be in the same network/subnetwork. Read Adding instances for more information.

**Parameters**

**Name**

**Description**

`request`

`[AddInstancesInstanceGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.AddInstancesInstanceGroupRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = await InstanceGroupsClient.CreateAsync();
// Initialize request argument(s)
AddInstancesInstanceGroupRequest request = new AddInstancesInstanceGroupRequest
{
    Zone = "",
    RequestId = "",
    InstanceGroup = "",
    Project = "",
    InstanceGroupsAddInstancesRequestResource = new InstanceGroupsAddInstancesRequest(),
};
// Make the request
lro::Operation<Operation, Operation> response = await instanceGroupsClient.AddInstancesAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await instanceGroupsClient.PollOnceAddInstancesAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### AddInstancesAsync(String, String, String, InstanceGroupsAddInstancesRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> AddInstancesAsync(string project, string zone, string instanceGroup, InstanceGroupsAddInstancesRequest instanceGroupsAddInstancesRequestResource, CallSettings callSettings = null)
```

Adds a list of instances to the specified instance group. All of the instances in the instance group must be in the same network/subnetwork. Read Adding instances for more information.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where the instance group is located.

`instanceGroup`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the instance group where you are adding instances.

`instanceGroupsAddInstancesRequestResource`

`[InstanceGroupsAddInstancesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupsAddInstancesRequest)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = await InstanceGroupsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string zone = "";
string instanceGroup = "";
InstanceGroupsAddInstancesRequest instanceGroupsAddInstancesRequestResource = new InstanceGroupsAddInstancesRequest();
// Make the request
lro::Operation<Operation, Operation> response = await instanceGroupsClient.AddInstancesAsync(project, zone, instanceGroup, instanceGroupsAddInstancesRequestResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await instanceGroupsClient.PollOnceAddInstancesAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### AddInstancesAsync(String, String, String, InstanceGroupsAddInstancesRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> AddInstancesAsync(string project, string zone, string instanceGroup, InstanceGroupsAddInstancesRequest instanceGroupsAddInstancesRequestResource, CancellationToken cancellationToken)
```

Adds a list of instances to the specified instance group. All of the instances in the instance group must be in the same network/subnetwork. Read Adding instances for more information.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where the instance group is located.

`instanceGroup`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the instance group where you are adding instances.

`instanceGroupsAddInstancesRequestResource`

`[InstanceGroupsAddInstancesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupsAddInstancesRequest)`  

The body resource for this request

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = await InstanceGroupsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string zone = "";
string instanceGroup = "";
InstanceGroupsAddInstancesRequest instanceGroupsAddInstancesRequestResource = new InstanceGroupsAddInstancesRequest();
// Make the request
lro::Operation<Operation, Operation> response = await instanceGroupsClient.AddInstancesAsync(project, zone, instanceGroup, instanceGroupsAddInstancesRequestResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await instanceGroupsClient.PollOnceAddInstancesAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### AggregatedList(AggregatedListInstanceGroupsRequest, CallSettings)

```
public virtual PagedEnumerable<InstanceGroupAggregatedList, KeyValuePair<string, InstanceGroupsScopedList>> AggregatedList(AggregatedListInstanceGroupsRequest request, CallSettings callSettings = null)
```

Retrieves the list of instance groups and sorts them by zone.

**Parameters**

**Name**

**Description**

`request`

`[AggregatedListInstanceGroupsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.AggregatedListInstanceGroupsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[InstanceGroupAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupAggregatedList), [KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2)<[String](https://learn.microsoft.com/dotnet/api/system.string), [InstanceGroupsScopedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupsScopedList)>>`

A pageable sequence of [KeyValuePair<TKey,TValue>](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2) resources.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = InstanceGroupsClient.Create();
// Initialize request argument(s)
AggregatedListInstanceGroupsRequest request = new AggregatedListInstanceGroupsRequest
{
    OrderBy = "",
    Project = "",
    Filter = "",
    IncludeAllScopes = false,
    ReturnPartialSuccess = false,
};
// Make the request
PagedEnumerable<InstanceGroupAggregatedList, KeyValuePair<string, InstanceGroupsScopedList>> response = instanceGroupsClient.AggregatedList(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (KeyValuePair<string, InstanceGroupsScopedList> item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (InstanceGroupAggregatedList page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (KeyValuePair<string, InstanceGroupsScopedList> item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<KeyValuePair<string, InstanceGroupsScopedList>> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (KeyValuePair<string, InstanceGroupsScopedList> item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### AggregatedList(String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedEnumerable<InstanceGroupAggregatedList, KeyValuePair<string, InstanceGroupsScopedList>> AggregatedList(string project, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Retrieves the list of instance groups and sorts them by zone.

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

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[InstanceGroupAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupAggregatedList), [KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2)<[String](https://learn.microsoft.com/dotnet/api/system.string), [InstanceGroupsScopedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupsScopedList)>>`

A pageable sequence of [KeyValuePair<TKey,TValue>](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2) resources.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = InstanceGroupsClient.Create();
// Initialize request argument(s)
string project = "";
// Make the request
PagedEnumerable<InstanceGroupAggregatedList, KeyValuePair<string, InstanceGroupsScopedList>> response = instanceGroupsClient.AggregatedList(project);

// Iterate over all response items, lazily performing RPCs as required
foreach (KeyValuePair<string, InstanceGroupsScopedList> item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (InstanceGroupAggregatedList page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (KeyValuePair<string, InstanceGroupsScopedList> item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<KeyValuePair<string, InstanceGroupsScopedList>> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (KeyValuePair<string, InstanceGroupsScopedList> item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### AggregatedListAsync(AggregatedListInstanceGroupsRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<InstanceGroupAggregatedList, KeyValuePair<string, InstanceGroupsScopedList>> AggregatedListAsync(AggregatedListInstanceGroupsRequest request, CallSettings callSettings = null)
```

Retrieves the list of instance groups and sorts them by zone.

**Parameters**

**Name**

**Description**

`request`

`[AggregatedListInstanceGroupsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.AggregatedListInstanceGroupsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[InstanceGroupAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupAggregatedList), [KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2)<[String](https://learn.microsoft.com/dotnet/api/system.string), [InstanceGroupsScopedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupsScopedList)>>`

A pageable asynchronous sequence of [KeyValuePair<TKey,TValue>](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2) resources.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = await InstanceGroupsClient.CreateAsync();
// Initialize request argument(s)
AggregatedListInstanceGroupsRequest request = new AggregatedListInstanceGroupsRequest
{
    OrderBy = "",
    Project = "",
    Filter = "",
    IncludeAllScopes = false,
    ReturnPartialSuccess = false,
};
// Make the request
PagedAsyncEnumerable<InstanceGroupAggregatedList, KeyValuePair<string, InstanceGroupsScopedList>> response = instanceGroupsClient.AggregatedListAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((KeyValuePair<string, InstanceGroupsScopedList> item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((InstanceGroupAggregatedList page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (KeyValuePair<string, InstanceGroupsScopedList> item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<KeyValuePair<string, InstanceGroupsScopedList>> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (KeyValuePair<string, InstanceGroupsScopedList> item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### AggregatedListAsync(String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedAsyncEnumerable<InstanceGroupAggregatedList, KeyValuePair<string, InstanceGroupsScopedList>> AggregatedListAsync(string project, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Retrieves the list of instance groups and sorts them by zone.

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

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[InstanceGroupAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupAggregatedList), [KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2)<[String](https://learn.microsoft.com/dotnet/api/system.string), [InstanceGroupsScopedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupsScopedList)>>`

A pageable asynchronous sequence of [KeyValuePair<TKey,TValue>](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2) resources.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = await InstanceGroupsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
// Make the request
PagedAsyncEnumerable<InstanceGroupAggregatedList, KeyValuePair<string, InstanceGroupsScopedList>> response = instanceGroupsClient.AggregatedListAsync(project);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((KeyValuePair<string, InstanceGroupsScopedList> item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((InstanceGroupAggregatedList page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (KeyValuePair<string, InstanceGroupsScopedList> item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<KeyValuePair<string, InstanceGroupsScopedList>> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (KeyValuePair<string, InstanceGroupsScopedList> item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### Create()

```
public static InstanceGroupsClient Create()
```

Synchronously creates a [InstanceGroupsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupsClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [InstanceGroupsClientBuilder](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupsClientBuilder).

**Returns**

**Type**

**Description**

`[InstanceGroupsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupsClient)`

The created [InstanceGroupsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupsClient).

### CreateAsync(CancellationToken)

```
public static Task<InstanceGroupsClient> CreateAsync(CancellationToken cancellationToken = default(CancellationToken))
```

Asynchronously creates a [InstanceGroupsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupsClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [InstanceGroupsClientBuilder](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupsClientBuilder).

**Parameter**

**Name**

**Description**

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

The [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use while creating the client.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[InstanceGroupsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupsClient)>`

The task representing the created [InstanceGroupsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupsClient).

### Delete(DeleteInstanceGroupRequest, CallSettings)

```
public virtual Operation<Operation, Operation> Delete(DeleteInstanceGroupRequest request, CallSettings callSettings = null)
```

Deletes the specified instance group. The instances in the group are not deleted. Note that instance group must not belong to a backend service. Read Deleting an instance group for more information.

**Parameters**

**Name**

**Description**

`request`

`[DeleteInstanceGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.DeleteInstanceGroupRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = InstanceGroupsClient.Create();
// Initialize request argument(s)
DeleteInstanceGroupRequest request = new DeleteInstanceGroupRequest
{
    Zone = "",
    RequestId = "",
    InstanceGroup = "",
    Project = "",
};
// Make the request
lro::Operation<Operation, Operation> response = instanceGroupsClient.Delete(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = instanceGroupsClient.PollOnceDelete(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### Delete(String, String, String, CallSettings)

```
public virtual Operation<Operation, Operation> Delete(string project, string zone, string instanceGroup, CallSettings callSettings = null)
```

Deletes the specified instance group. The instances in the group are not deleted. Note that instance group must not belong to a backend service. Read Deleting an instance group for more information.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where the instance group is located.

`instanceGroup`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the instance group to delete.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = InstanceGroupsClient.Create();
// Initialize request argument(s)
string project = "";
string zone = "";
string instanceGroup = "";
// Make the request
lro::Operation<Operation, Operation> response = instanceGroupsClient.Delete(project, zone, instanceGroup);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = instanceGroupsClient.PollOnceDelete(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DeleteAsync(DeleteInstanceGroupRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> DeleteAsync(DeleteInstanceGroupRequest request, CallSettings callSettings = null)
```

Deletes the specified instance group. The instances in the group are not deleted. Note that instance group must not belong to a backend service. Read Deleting an instance group for more information.

**Parameters**

**Name**

**Description**

`request`

`[DeleteInstanceGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.DeleteInstanceGroupRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = await InstanceGroupsClient.CreateAsync();
// Initialize request argument(s)
DeleteInstanceGroupRequest request = new DeleteInstanceGroupRequest
{
    Zone = "",
    RequestId = "",
    InstanceGroup = "",
    Project = "",
};
// Make the request
lro::Operation<Operation, Operation> response = await instanceGroupsClient.DeleteAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await instanceGroupsClient.PollOnceDeleteAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DeleteAsync(DeleteInstanceGroupRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> DeleteAsync(DeleteInstanceGroupRequest request, CancellationToken cancellationToken)
```

Deletes the specified instance group. The instances in the group are not deleted. Note that instance group must not belong to a backend service. Read Deleting an instance group for more information.

**Parameters**

**Name**

**Description**

`request`

`[DeleteInstanceGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.DeleteInstanceGroupRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = await InstanceGroupsClient.CreateAsync();
// Initialize request argument(s)
DeleteInstanceGroupRequest request = new DeleteInstanceGroupRequest
{
    Zone = "",
    RequestId = "",
    InstanceGroup = "",
    Project = "",
};
// Make the request
lro::Operation<Operation, Operation> response = await instanceGroupsClient.DeleteAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await instanceGroupsClient.PollOnceDeleteAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DeleteAsync(String, String, String, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> DeleteAsync(string project, string zone, string instanceGroup, CallSettings callSettings = null)
```

Deletes the specified instance group. The instances in the group are not deleted. Note that instance group must not belong to a backend service. Read Deleting an instance group for more information.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where the instance group is located.

`instanceGroup`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the instance group to delete.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = await InstanceGroupsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string zone = "";
string instanceGroup = "";
// Make the request
lro::Operation<Operation, Operation> response = await instanceGroupsClient.DeleteAsync(project, zone, instanceGroup);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await instanceGroupsClient.PollOnceDeleteAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DeleteAsync(String, String, String, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> DeleteAsync(string project, string zone, string instanceGroup, CancellationToken cancellationToken)
```

Deletes the specified instance group. The instances in the group are not deleted. Note that instance group must not belong to a backend service. Read Deleting an instance group for more information.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where the instance group is located.

`instanceGroup`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the instance group to delete.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = await InstanceGroupsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string zone = "";
string instanceGroup = "";
// Make the request
lro::Operation<Operation, Operation> response = await instanceGroupsClient.DeleteAsync(project, zone, instanceGroup);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await instanceGroupsClient.PollOnceDeleteAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### Get(GetInstanceGroupRequest, CallSettings)

```
public virtual InstanceGroup Get(GetInstanceGroupRequest request, CallSettings callSettings = null)
```

Returns the specified zonal instance group. Get a list of available zonal instance groups by making a list() request. For managed instance groups, use the instanceGroupManagers or regionInstanceGroupManagers methods instead.

**Parameters**

**Name**

**Description**

`request`

`[GetInstanceGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.GetInstanceGroupRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[InstanceGroup](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroup)`

The RPC response.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = InstanceGroupsClient.Create();
// Initialize request argument(s)
GetInstanceGroupRequest request = new GetInstanceGroupRequest
{
    Zone = "",
    InstanceGroup = "",
    Project = "",
};
// Make the request
InstanceGroup response = instanceGroupsClient.Get(request);
```

### Get(String, String, String, CallSettings)

```
public virtual InstanceGroup Get(string project, string zone, string instanceGroup, CallSettings callSettings = null)
```

Returns the specified zonal instance group. Get a list of available zonal instance groups by making a list() request. For managed instance groups, use the instanceGroupManagers or regionInstanceGroupManagers methods instead.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where the instance group is located.

`instanceGroup`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the instance group.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[InstanceGroup](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroup)`

The RPC response.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = InstanceGroupsClient.Create();
// Initialize request argument(s)
string project = "";
string zone = "";
string instanceGroup = "";
// Make the request
InstanceGroup response = instanceGroupsClient.Get(project, zone, instanceGroup);
```

### GetAsync(GetInstanceGroupRequest, CallSettings)

```
public virtual Task<InstanceGroup> GetAsync(GetInstanceGroupRequest request, CallSettings callSettings = null)
```

Returns the specified zonal instance group. Get a list of available zonal instance groups by making a list() request. For managed instance groups, use the instanceGroupManagers or regionInstanceGroupManagers methods instead.

**Parameters**

**Name**

**Description**

`request`

`[GetInstanceGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.GetInstanceGroupRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[InstanceGroup](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroup)>`

A Task containing the RPC response.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = await InstanceGroupsClient.CreateAsync();
// Initialize request argument(s)
GetInstanceGroupRequest request = new GetInstanceGroupRequest
{
    Zone = "",
    InstanceGroup = "",
    Project = "",
};
// Make the request
InstanceGroup response = await instanceGroupsClient.GetAsync(request);
```

### GetAsync(GetInstanceGroupRequest, CancellationToken)

```
public virtual Task<InstanceGroup> GetAsync(GetInstanceGroupRequest request, CancellationToken cancellationToken)
```

Returns the specified zonal instance group. Get a list of available zonal instance groups by making a list() request. For managed instance groups, use the instanceGroupManagers or regionInstanceGroupManagers methods instead.

**Parameters**

**Name**

**Description**

`request`

`[GetInstanceGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.GetInstanceGroupRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[InstanceGroup](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroup)>`

A Task containing the RPC response.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = await InstanceGroupsClient.CreateAsync();
// Initialize request argument(s)
GetInstanceGroupRequest request = new GetInstanceGroupRequest
{
    Zone = "",
    InstanceGroup = "",
    Project = "",
};
// Make the request
InstanceGroup response = await instanceGroupsClient.GetAsync(request);
```

### GetAsync(String, String, String, CallSettings)

```
public virtual Task<InstanceGroup> GetAsync(string project, string zone, string instanceGroup, CallSettings callSettings = null)
```

Returns the specified zonal instance group. Get a list of available zonal instance groups by making a list() request. For managed instance groups, use the instanceGroupManagers or regionInstanceGroupManagers methods instead.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where the instance group is located.

`instanceGroup`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the instance group.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[InstanceGroup](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroup)>`

A Task containing the RPC response.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = await InstanceGroupsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string zone = "";
string instanceGroup = "";
// Make the request
InstanceGroup response = await instanceGroupsClient.GetAsync(project, zone, instanceGroup);
```

### GetAsync(String, String, String, CancellationToken)

```
public virtual Task<InstanceGroup> GetAsync(string project, string zone, string instanceGroup, CancellationToken cancellationToken)
```

Returns the specified zonal instance group. Get a list of available zonal instance groups by making a list() request. For managed instance groups, use the instanceGroupManagers or regionInstanceGroupManagers methods instead.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where the instance group is located.

`instanceGroup`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the instance group.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[InstanceGroup](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroup)>`

A Task containing the RPC response.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = await InstanceGroupsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string zone = "";
string instanceGroup = "";
// Make the request
InstanceGroup response = await instanceGroupsClient.GetAsync(project, zone, instanceGroup);
```

### Insert(InsertInstanceGroupRequest, CallSettings)

```
public virtual Operation<Operation, Operation> Insert(InsertInstanceGroupRequest request, CallSettings callSettings = null)
```

Creates an instance group in the specified project using the parameters that are included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertInstanceGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InsertInstanceGroupRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = InstanceGroupsClient.Create();
// Initialize request argument(s)
InsertInstanceGroupRequest request = new InsertInstanceGroupRequest
{
    Zone = "",
    RequestId = "",
    Project = "",
    InstanceGroupResource = new InstanceGroup(),
};
// Make the request
lro::Operation<Operation, Operation> response = instanceGroupsClient.Insert(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = instanceGroupsClient.PollOnceInsert(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### Insert(String, String, InstanceGroup, CallSettings)

```
public virtual Operation<Operation, Operation> Insert(string project, string zone, InstanceGroup instanceGroupResource, CallSettings callSettings = null)
```

Creates an instance group in the specified project using the parameters that are included in the request.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where you want to create the instance group.

`instanceGroupResource`

`[InstanceGroup](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroup)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = InstanceGroupsClient.Create();
// Initialize request argument(s)
string project = "";
string zone = "";
InstanceGroup instanceGroupResource = new InstanceGroup();
// Make the request
lro::Operation<Operation, Operation> response = instanceGroupsClient.Insert(project, zone, instanceGroupResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = instanceGroupsClient.PollOnceInsert(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### InsertAsync(InsertInstanceGroupRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> InsertAsync(InsertInstanceGroupRequest request, CallSettings callSettings = null)
```

Creates an instance group in the specified project using the parameters that are included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertInstanceGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InsertInstanceGroupRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = await InstanceGroupsClient.CreateAsync();
// Initialize request argument(s)
InsertInstanceGroupRequest request = new InsertInstanceGroupRequest
{
    Zone = "",
    RequestId = "",
    Project = "",
    InstanceGroupResource = new InstanceGroup(),
};
// Make the request
lro::Operation<Operation, Operation> response = await instanceGroupsClient.InsertAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await instanceGroupsClient.PollOnceInsertAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### InsertAsync(InsertInstanceGroupRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> InsertAsync(InsertInstanceGroupRequest request, CancellationToken cancellationToken)
```

Creates an instance group in the specified project using the parameters that are included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertInstanceGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InsertInstanceGroupRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = await InstanceGroupsClient.CreateAsync();
// Initialize request argument(s)
InsertInstanceGroupRequest request = new InsertInstanceGroupRequest
{
    Zone = "",
    RequestId = "",
    Project = "",
    InstanceGroupResource = new InstanceGroup(),
};
// Make the request
lro::Operation<Operation, Operation> response = await instanceGroupsClient.InsertAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await instanceGroupsClient.PollOnceInsertAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### InsertAsync(String, String, InstanceGroup, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> InsertAsync(string project, string zone, InstanceGroup instanceGroupResource, CallSettings callSettings = null)
```

Creates an instance group in the specified project using the parameters that are included in the request.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where you want to create the instance group.

`instanceGroupResource`

`[InstanceGroup](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroup)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = await InstanceGroupsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string zone = "";
InstanceGroup instanceGroupResource = new InstanceGroup();
// Make the request
lro::Operation<Operation, Operation> response = await instanceGroupsClient.InsertAsync(project, zone, instanceGroupResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await instanceGroupsClient.PollOnceInsertAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### InsertAsync(String, String, InstanceGroup, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> InsertAsync(string project, string zone, InstanceGroup instanceGroupResource, CancellationToken cancellationToken)
```

Creates an instance group in the specified project using the parameters that are included in the request.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where you want to create the instance group.

`instanceGroupResource`

`[InstanceGroup](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroup)`  

The body resource for this request

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = await InstanceGroupsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string zone = "";
InstanceGroup instanceGroupResource = new InstanceGroup();
// Make the request
lro::Operation<Operation, Operation> response = await instanceGroupsClient.InsertAsync(project, zone, instanceGroupResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await instanceGroupsClient.PollOnceInsertAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### List(ListInstanceGroupsRequest, CallSettings)

```
public virtual PagedEnumerable<InstanceGroupList, InstanceGroup> List(ListInstanceGroupsRequest request, CallSettings callSettings = null)
```

Retrieves the list of zonal instance group resources contained within the specified zone. For managed instance groups, use the instanceGroupManagers or regionInstanceGroupManagers methods instead.

**Parameters**

**Name**

**Description**

`request`

`[ListInstanceGroupsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.ListInstanceGroupsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[InstanceGroupList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupList), [InstanceGroup](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroup)>`

A pageable sequence of [InstanceGroup](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroup) resources.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = InstanceGroupsClient.Create();
// Initialize request argument(s)
ListInstanceGroupsRequest request = new ListInstanceGroupsRequest
{
    Zone = "",
    OrderBy = "",
    Project = "",
    Filter = "",
    ReturnPartialSuccess = false,
};
// Make the request
PagedEnumerable<InstanceGroupList, InstanceGroup> response = instanceGroupsClient.List(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (InstanceGroup item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (InstanceGroupList page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (InstanceGroup item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<InstanceGroup> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (InstanceGroup item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### List(String, String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedEnumerable<InstanceGroupList, InstanceGroup> List(string project, string zone, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Retrieves the list of zonal instance group resources contained within the specified zone. For managed instance groups, use the instanceGroupManagers or regionInstanceGroupManagers methods instead.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where the instance group is located.

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

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[InstanceGroupList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupList), [InstanceGroup](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroup)>`

A pageable sequence of [InstanceGroup](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroup) resources.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = InstanceGroupsClient.Create();
// Initialize request argument(s)
string project = "";
string zone = "";
// Make the request
PagedEnumerable<InstanceGroupList, InstanceGroup> response = instanceGroupsClient.List(project, zone);

// Iterate over all response items, lazily performing RPCs as required
foreach (InstanceGroup item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (InstanceGroupList page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (InstanceGroup item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<InstanceGroup> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (InstanceGroup item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListAsync(ListInstanceGroupsRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<InstanceGroupList, InstanceGroup> ListAsync(ListInstanceGroupsRequest request, CallSettings callSettings = null)
```

Retrieves the list of zonal instance group resources contained within the specified zone. For managed instance groups, use the instanceGroupManagers or regionInstanceGroupManagers methods instead.

**Parameters**

**Name**

**Description**

`request`

`[ListInstanceGroupsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.ListInstanceGroupsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[InstanceGroupList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupList), [InstanceGroup](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroup)>`

A pageable asynchronous sequence of [InstanceGroup](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroup) resources.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = await InstanceGroupsClient.CreateAsync();
// Initialize request argument(s)
ListInstanceGroupsRequest request = new ListInstanceGroupsRequest
{
    Zone = "",
    OrderBy = "",
    Project = "",
    Filter = "",
    ReturnPartialSuccess = false,
};
// Make the request
PagedAsyncEnumerable<InstanceGroupList, InstanceGroup> response = instanceGroupsClient.ListAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((InstanceGroup item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((InstanceGroupList page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (InstanceGroup item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<InstanceGroup> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (InstanceGroup item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListAsync(String, String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedAsyncEnumerable<InstanceGroupList, InstanceGroup> ListAsync(string project, string zone, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Retrieves the list of zonal instance group resources contained within the specified zone. For managed instance groups, use the instanceGroupManagers or regionInstanceGroupManagers methods instead.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where the instance group is located.

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

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[InstanceGroupList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupList), [InstanceGroup](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroup)>`

A pageable asynchronous sequence of [InstanceGroup](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroup) resources.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = await InstanceGroupsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string zone = "";
// Make the request
PagedAsyncEnumerable<InstanceGroupList, InstanceGroup> response = instanceGroupsClient.ListAsync(project, zone);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((InstanceGroup item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((InstanceGroupList page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (InstanceGroup item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<InstanceGroup> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (InstanceGroup item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListInstances(ListInstancesInstanceGroupsRequest, CallSettings)

```
public virtual PagedEnumerable<InstanceGroupsListInstances, InstanceWithNamedPorts> ListInstances(ListInstancesInstanceGroupsRequest request, CallSettings callSettings = null)
```

Lists the instances in the specified instance group. The orderBy query parameter is not supported. The filter query parameter is supported, but only for expressions that use `eq` (equal) or `ne` (not equal) operators.

**Parameters**

**Name**

**Description**

`request`

`[ListInstancesInstanceGroupsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.ListInstancesInstanceGroupsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[InstanceGroupsListInstances](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupsListInstances), [InstanceWithNamedPorts](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceWithNamedPorts)>`

A pageable sequence of [InstanceWithNamedPorts](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceWithNamedPorts) resources.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = InstanceGroupsClient.Create();
// Initialize request argument(s)
ListInstancesInstanceGroupsRequest request = new ListInstancesInstanceGroupsRequest
{
    Zone = "",
    InstanceGroup = "",
    OrderBy = "",
    Project = "",
    Filter = "",
    InstanceGroupsListInstancesRequestResource = new InstanceGroupsListInstancesRequest(),
    ReturnPartialSuccess = false,
};
// Make the request
PagedEnumerable<InstanceGroupsListInstances, InstanceWithNamedPorts> response = instanceGroupsClient.ListInstances(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (InstanceWithNamedPorts item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (InstanceGroupsListInstances page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (InstanceWithNamedPorts item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<InstanceWithNamedPorts> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (InstanceWithNamedPorts item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListInstances(String, String, String, InstanceGroupsListInstancesRequest, String, Nullable<Int32>, CallSettings)

```
public virtual PagedEnumerable<InstanceGroupsListInstances, InstanceWithNamedPorts> ListInstances(string project, string zone, string instanceGroup, InstanceGroupsListInstancesRequest instanceGroupsListInstancesRequestResource, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists the instances in the specified instance group. The orderBy query parameter is not supported. The filter query parameter is supported, but only for expressions that use `eq` (equal) or `ne` (not equal) operators.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where the instance group is located.

`instanceGroup`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the instance group from which you want to generate a list of included instances.

`instanceGroupsListInstancesRequestResource`

`[InstanceGroupsListInstancesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupsListInstancesRequest)`  

The body resource for this request

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

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[InstanceGroupsListInstances](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupsListInstances), [InstanceWithNamedPorts](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceWithNamedPorts)>`

A pageable sequence of [InstanceWithNamedPorts](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceWithNamedPorts) resources.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = InstanceGroupsClient.Create();
// Initialize request argument(s)
string project = "";
string zone = "";
string instanceGroup = "";
InstanceGroupsListInstancesRequest instanceGroupsListInstancesRequestResource = new InstanceGroupsListInstancesRequest();
// Make the request
PagedEnumerable<InstanceGroupsListInstances, InstanceWithNamedPorts> response = instanceGroupsClient.ListInstances(project, zone, instanceGroup, instanceGroupsListInstancesRequestResource);

// Iterate over all response items, lazily performing RPCs as required
foreach (InstanceWithNamedPorts item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (InstanceGroupsListInstances page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (InstanceWithNamedPorts item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<InstanceWithNamedPorts> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (InstanceWithNamedPorts item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListInstancesAsync(ListInstancesInstanceGroupsRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<InstanceGroupsListInstances, InstanceWithNamedPorts> ListInstancesAsync(ListInstancesInstanceGroupsRequest request, CallSettings callSettings = null)
```

Lists the instances in the specified instance group. The orderBy query parameter is not supported. The filter query parameter is supported, but only for expressions that use `eq` (equal) or `ne` (not equal) operators.

**Parameters**

**Name**

**Description**

`request`

`[ListInstancesInstanceGroupsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.ListInstancesInstanceGroupsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[InstanceGroupsListInstances](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupsListInstances), [InstanceWithNamedPorts](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceWithNamedPorts)>`

A pageable asynchronous sequence of [InstanceWithNamedPorts](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceWithNamedPorts) resources.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = await InstanceGroupsClient.CreateAsync();
// Initialize request argument(s)
ListInstancesInstanceGroupsRequest request = new ListInstancesInstanceGroupsRequest
{
    Zone = "",
    InstanceGroup = "",
    OrderBy = "",
    Project = "",
    Filter = "",
    InstanceGroupsListInstancesRequestResource = new InstanceGroupsListInstancesRequest(),
    ReturnPartialSuccess = false,
};
// Make the request
PagedAsyncEnumerable<InstanceGroupsListInstances, InstanceWithNamedPorts> response = instanceGroupsClient.ListInstancesAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((InstanceWithNamedPorts item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((InstanceGroupsListInstances page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (InstanceWithNamedPorts item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<InstanceWithNamedPorts> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (InstanceWithNamedPorts item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListInstancesAsync(String, String, String, InstanceGroupsListInstancesRequest, String, Nullable<Int32>, CallSettings)

```
public virtual PagedAsyncEnumerable<InstanceGroupsListInstances, InstanceWithNamedPorts> ListInstancesAsync(string project, string zone, string instanceGroup, InstanceGroupsListInstancesRequest instanceGroupsListInstancesRequestResource, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists the instances in the specified instance group. The orderBy query parameter is not supported. The filter query parameter is supported, but only for expressions that use `eq` (equal) or `ne` (not equal) operators.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where the instance group is located.

`instanceGroup`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the instance group from which you want to generate a list of included instances.

`instanceGroupsListInstancesRequestResource`

`[InstanceGroupsListInstancesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupsListInstancesRequest)`  

The body resource for this request

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

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[InstanceGroupsListInstances](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupsListInstances), [InstanceWithNamedPorts](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceWithNamedPorts)>`

A pageable asynchronous sequence of [InstanceWithNamedPorts](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceWithNamedPorts) resources.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = await InstanceGroupsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string zone = "";
string instanceGroup = "";
InstanceGroupsListInstancesRequest instanceGroupsListInstancesRequestResource = new InstanceGroupsListInstancesRequest();
// Make the request
PagedAsyncEnumerable<InstanceGroupsListInstances, InstanceWithNamedPorts> response = instanceGroupsClient.ListInstancesAsync(project, zone, instanceGroup, instanceGroupsListInstancesRequestResource);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((InstanceWithNamedPorts item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((InstanceGroupsListInstances page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (InstanceWithNamedPorts item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<InstanceWithNamedPorts> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (InstanceWithNamedPorts item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### PollOnceAddInstances(String, CallSettings)

```
public virtual Operation<Operation, Operation> PollOnceAddInstances(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `AddInstances`.

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

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>`

The result of polling the operation.

### PollOnceAddInstancesAsync(String, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> PollOnceAddInstancesAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `AddInstances`.

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

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>>`

A task representing the result of polling the operation.

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

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>`

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

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>>`

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

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>`

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

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>>`

A task representing the result of polling the operation.

### PollOnceRemoveInstances(String, CallSettings)

```
public virtual Operation<Operation, Operation> PollOnceRemoveInstances(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `RemoveInstances`.

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

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>`

The result of polling the operation.

### PollOnceRemoveInstancesAsync(String, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> PollOnceRemoveInstancesAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `RemoveInstances`.

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

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>>`

A task representing the result of polling the operation.

### PollOnceSetNamedPorts(String, CallSettings)

```
public virtual Operation<Operation, Operation> PollOnceSetNamedPorts(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `SetNamedPorts`.

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

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>`

The result of polling the operation.

### PollOnceSetNamedPortsAsync(String, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> PollOnceSetNamedPortsAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `SetNamedPorts`.

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

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>>`

A task representing the result of polling the operation.

### RemoveInstances(RemoveInstancesInstanceGroupRequest, CallSettings)

```
public virtual Operation<Operation, Operation> RemoveInstances(RemoveInstancesInstanceGroupRequest request, CallSettings callSettings = null)
```

Removes one or more instances from the specified instance group, but does not delete those instances. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration before the VM instance is removed or deleted.

**Parameters**

**Name**

**Description**

`request`

`[RemoveInstancesInstanceGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.RemoveInstancesInstanceGroupRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = InstanceGroupsClient.Create();
// Initialize request argument(s)
RemoveInstancesInstanceGroupRequest request = new RemoveInstancesInstanceGroupRequest
{
    Zone = "",
    RequestId = "",
    InstanceGroup = "",
    Project = "",
    InstanceGroupsRemoveInstancesRequestResource = new InstanceGroupsRemoveInstancesRequest(),
};
// Make the request
lro::Operation<Operation, Operation> response = instanceGroupsClient.RemoveInstances(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = instanceGroupsClient.PollOnceRemoveInstances(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### RemoveInstances(String, String, String, InstanceGroupsRemoveInstancesRequest, CallSettings)

```
public virtual Operation<Operation, Operation> RemoveInstances(string project, string zone, string instanceGroup, InstanceGroupsRemoveInstancesRequest instanceGroupsRemoveInstancesRequestResource, CallSettings callSettings = null)
```

Removes one or more instances from the specified instance group, but does not delete those instances. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration before the VM instance is removed or deleted.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where the instance group is located.

`instanceGroup`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the instance group where the specified instances will be removed.

`instanceGroupsRemoveInstancesRequestResource`

`[InstanceGroupsRemoveInstancesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupsRemoveInstancesRequest)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = InstanceGroupsClient.Create();
// Initialize request argument(s)
string project = "";
string zone = "";
string instanceGroup = "";
InstanceGroupsRemoveInstancesRequest instanceGroupsRemoveInstancesRequestResource = new InstanceGroupsRemoveInstancesRequest();
// Make the request
lro::Operation<Operation, Operation> response = instanceGroupsClient.RemoveInstances(project, zone, instanceGroup, instanceGroupsRemoveInstancesRequestResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = instanceGroupsClient.PollOnceRemoveInstances(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### RemoveInstancesAsync(RemoveInstancesInstanceGroupRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> RemoveInstancesAsync(RemoveInstancesInstanceGroupRequest request, CallSettings callSettings = null)
```

Removes one or more instances from the specified instance group, but does not delete those instances. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration before the VM instance is removed or deleted.

**Parameters**

**Name**

**Description**

`request`

`[RemoveInstancesInstanceGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.RemoveInstancesInstanceGroupRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = await InstanceGroupsClient.CreateAsync();
// Initialize request argument(s)
RemoveInstancesInstanceGroupRequest request = new RemoveInstancesInstanceGroupRequest
{
    Zone = "",
    RequestId = "",
    InstanceGroup = "",
    Project = "",
    InstanceGroupsRemoveInstancesRequestResource = new InstanceGroupsRemoveInstancesRequest(),
};
// Make the request
lro::Operation<Operation, Operation> response = await instanceGroupsClient.RemoveInstancesAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await instanceGroupsClient.PollOnceRemoveInstancesAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### RemoveInstancesAsync(RemoveInstancesInstanceGroupRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> RemoveInstancesAsync(RemoveInstancesInstanceGroupRequest request, CancellationToken cancellationToken)
```

Removes one or more instances from the specified instance group, but does not delete those instances. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration before the VM instance is removed or deleted.

**Parameters**

**Name**

**Description**

`request`

`[RemoveInstancesInstanceGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.RemoveInstancesInstanceGroupRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = await InstanceGroupsClient.CreateAsync();
// Initialize request argument(s)
RemoveInstancesInstanceGroupRequest request = new RemoveInstancesInstanceGroupRequest
{
    Zone = "",
    RequestId = "",
    InstanceGroup = "",
    Project = "",
    InstanceGroupsRemoveInstancesRequestResource = new InstanceGroupsRemoveInstancesRequest(),
};
// Make the request
lro::Operation<Operation, Operation> response = await instanceGroupsClient.RemoveInstancesAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await instanceGroupsClient.PollOnceRemoveInstancesAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### RemoveInstancesAsync(String, String, String, InstanceGroupsRemoveInstancesRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> RemoveInstancesAsync(string project, string zone, string instanceGroup, InstanceGroupsRemoveInstancesRequest instanceGroupsRemoveInstancesRequestResource, CallSettings callSettings = null)
```

Removes one or more instances from the specified instance group, but does not delete those instances. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration before the VM instance is removed or deleted.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where the instance group is located.

`instanceGroup`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the instance group where the specified instances will be removed.

`instanceGroupsRemoveInstancesRequestResource`

`[InstanceGroupsRemoveInstancesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupsRemoveInstancesRequest)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = await InstanceGroupsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string zone = "";
string instanceGroup = "";
InstanceGroupsRemoveInstancesRequest instanceGroupsRemoveInstancesRequestResource = new InstanceGroupsRemoveInstancesRequest();
// Make the request
lro::Operation<Operation, Operation> response = await instanceGroupsClient.RemoveInstancesAsync(project, zone, instanceGroup, instanceGroupsRemoveInstancesRequestResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await instanceGroupsClient.PollOnceRemoveInstancesAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### RemoveInstancesAsync(String, String, String, InstanceGroupsRemoveInstancesRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> RemoveInstancesAsync(string project, string zone, string instanceGroup, InstanceGroupsRemoveInstancesRequest instanceGroupsRemoveInstancesRequestResource, CancellationToken cancellationToken)
```

Removes one or more instances from the specified instance group, but does not delete those instances. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration before the VM instance is removed or deleted.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where the instance group is located.

`instanceGroup`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the instance group where the specified instances will be removed.

`instanceGroupsRemoveInstancesRequestResource`

`[InstanceGroupsRemoveInstancesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupsRemoveInstancesRequest)`  

The body resource for this request

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = await InstanceGroupsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string zone = "";
string instanceGroup = "";
InstanceGroupsRemoveInstancesRequest instanceGroupsRemoveInstancesRequestResource = new InstanceGroupsRemoveInstancesRequest();
// Make the request
lro::Operation<Operation, Operation> response = await instanceGroupsClient.RemoveInstancesAsync(project, zone, instanceGroup, instanceGroupsRemoveInstancesRequestResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await instanceGroupsClient.PollOnceRemoveInstancesAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetNamedPorts(SetNamedPortsInstanceGroupRequest, CallSettings)

```
public virtual Operation<Operation, Operation> SetNamedPorts(SetNamedPortsInstanceGroupRequest request, CallSettings callSettings = null)
```

Sets the named ports for the specified instance group.

**Parameters**

**Name**

**Description**

`request`

`[SetNamedPortsInstanceGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.SetNamedPortsInstanceGroupRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = InstanceGroupsClient.Create();
// Initialize request argument(s)
SetNamedPortsInstanceGroupRequest request = new SetNamedPortsInstanceGroupRequest
{
    Zone = "",
    RequestId = "",
    InstanceGroup = "",
    Project = "",
    InstanceGroupsSetNamedPortsRequestResource = new InstanceGroupsSetNamedPortsRequest(),
};
// Make the request
lro::Operation<Operation, Operation> response = instanceGroupsClient.SetNamedPorts(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = instanceGroupsClient.PollOnceSetNamedPorts(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetNamedPorts(String, String, String, InstanceGroupsSetNamedPortsRequest, CallSettings)

```
public virtual Operation<Operation, Operation> SetNamedPorts(string project, string zone, string instanceGroup, InstanceGroupsSetNamedPortsRequest instanceGroupsSetNamedPortsRequestResource, CallSettings callSettings = null)
```

Sets the named ports for the specified instance group.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where the instance group is located.

`instanceGroup`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the instance group where the named ports are updated.

`instanceGroupsSetNamedPortsRequestResource`

`[InstanceGroupsSetNamedPortsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupsSetNamedPortsRequest)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = InstanceGroupsClient.Create();
// Initialize request argument(s)
string project = "";
string zone = "";
string instanceGroup = "";
InstanceGroupsSetNamedPortsRequest instanceGroupsSetNamedPortsRequestResource = new InstanceGroupsSetNamedPortsRequest();
// Make the request
lro::Operation<Operation, Operation> response = instanceGroupsClient.SetNamedPorts(project, zone, instanceGroup, instanceGroupsSetNamedPortsRequestResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = instanceGroupsClient.PollOnceSetNamedPorts(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetNamedPortsAsync(SetNamedPortsInstanceGroupRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> SetNamedPortsAsync(SetNamedPortsInstanceGroupRequest request, CallSettings callSettings = null)
```

Sets the named ports for the specified instance group.

**Parameters**

**Name**

**Description**

`request`

`[SetNamedPortsInstanceGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.SetNamedPortsInstanceGroupRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = await InstanceGroupsClient.CreateAsync();
// Initialize request argument(s)
SetNamedPortsInstanceGroupRequest request = new SetNamedPortsInstanceGroupRequest
{
    Zone = "",
    RequestId = "",
    InstanceGroup = "",
    Project = "",
    InstanceGroupsSetNamedPortsRequestResource = new InstanceGroupsSetNamedPortsRequest(),
};
// Make the request
lro::Operation<Operation, Operation> response = await instanceGroupsClient.SetNamedPortsAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await instanceGroupsClient.PollOnceSetNamedPortsAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetNamedPortsAsync(SetNamedPortsInstanceGroupRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> SetNamedPortsAsync(SetNamedPortsInstanceGroupRequest request, CancellationToken cancellationToken)
```

Sets the named ports for the specified instance group.

**Parameters**

**Name**

**Description**

`request`

`[SetNamedPortsInstanceGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.SetNamedPortsInstanceGroupRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = await InstanceGroupsClient.CreateAsync();
// Initialize request argument(s)
SetNamedPortsInstanceGroupRequest request = new SetNamedPortsInstanceGroupRequest
{
    Zone = "",
    RequestId = "",
    InstanceGroup = "",
    Project = "",
    InstanceGroupsSetNamedPortsRequestResource = new InstanceGroupsSetNamedPortsRequest(),
};
// Make the request
lro::Operation<Operation, Operation> response = await instanceGroupsClient.SetNamedPortsAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await instanceGroupsClient.PollOnceSetNamedPortsAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetNamedPortsAsync(String, String, String, InstanceGroupsSetNamedPortsRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> SetNamedPortsAsync(string project, string zone, string instanceGroup, InstanceGroupsSetNamedPortsRequest instanceGroupsSetNamedPortsRequestResource, CallSettings callSettings = null)
```

Sets the named ports for the specified instance group.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where the instance group is located.

`instanceGroup`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the instance group where the named ports are updated.

`instanceGroupsSetNamedPortsRequestResource`

`[InstanceGroupsSetNamedPortsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupsSetNamedPortsRequest)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = await InstanceGroupsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string zone = "";
string instanceGroup = "";
InstanceGroupsSetNamedPortsRequest instanceGroupsSetNamedPortsRequestResource = new InstanceGroupsSetNamedPortsRequest();
// Make the request
lro::Operation<Operation, Operation> response = await instanceGroupsClient.SetNamedPortsAsync(project, zone, instanceGroup, instanceGroupsSetNamedPortsRequestResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await instanceGroupsClient.PollOnceSetNamedPortsAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetNamedPortsAsync(String, String, String, InstanceGroupsSetNamedPortsRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> SetNamedPortsAsync(string project, string zone, string instanceGroup, InstanceGroupsSetNamedPortsRequest instanceGroupsSetNamedPortsRequestResource, CancellationToken cancellationToken)
```

Sets the named ports for the specified instance group.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where the instance group is located.

`instanceGroup`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the instance group where the named ports are updated.

`instanceGroupsSetNamedPortsRequestResource`

`[InstanceGroupsSetNamedPortsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupsSetNamedPortsRequest)`  

The body resource for this request

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
InstanceGroupsClient instanceGroupsClient = await InstanceGroupsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string zone = "";
string instanceGroup = "";
InstanceGroupsSetNamedPortsRequest instanceGroupsSetNamedPortsRequestResource = new InstanceGroupsSetNamedPortsRequest();
// Make the request
lro::Operation<Operation, Operation> response = await instanceGroupsClient.SetNamedPortsAsync(project, zone, instanceGroup, instanceGroupsSetNamedPortsRequestResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await instanceGroupsClient.PollOnceSetNamedPortsAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### ShutdownDefaultChannelsAsync()

```
public static Task ShutdownDefaultChannelsAsync()
```

Shuts down any channels automatically created by [Create()](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupsClient#Google_Cloud_Compute_V1_InstanceGroupsClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupsClient#Google_Cloud_Compute_V1_InstanceGroupsClient_CreateAsync_System_Threading_CancellationToken_). Channels which weren't automatically created are not affected.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A task representing the asynchronous shutdown operation.

**Remarks**

After calling this method, further calls to [Create()](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupsClient#Google_Cloud_Compute_V1_InstanceGroupsClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.InstanceGroupsClient#Google_Cloud_Compute_V1_InstanceGroupsClient_CreateAsync_System_Threading_CancellationToken_) will create new channels, which could in turn be shut down by another call to this method.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
