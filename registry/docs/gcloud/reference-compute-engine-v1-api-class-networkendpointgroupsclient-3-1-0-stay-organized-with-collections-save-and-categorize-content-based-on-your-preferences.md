-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class NetworkEndpointGroupsClient (3.1.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public abstract class NetworkEndpointGroupsClient
```

Reference documentation and code samples for the Compute Engine v1 API class NetworkEndpointGroupsClient.

NetworkEndpointGroups client wrapper, for convenient use.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> NetworkEndpointGroupsClient

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Derived Types

[NetworkEndpointGroupsClientImpl](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupsClientImpl)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Remarks

The NetworkEndpointGroups API.

## Properties

### AttachNetworkEndpointsOperationsClient

```
public virtual OperationsClient AttachNetworkEndpointsOperationsClient { get; }
```

The long-running operations client for `AttachNetworkEndpoints`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

### DefaultEndpoint

```
public static string DefaultEndpoint { get; }
```

The default endpoint for the NetworkEndpointGroups service, which is a host of "compute.googleapis.com" and a port of 443.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### DefaultScopes

```
public static IReadOnlyList<string> DefaultScopes { get; }
```

The default NetworkEndpointGroups scopes.

**Property Value**

**Type**

**Description**

`[IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)[string](https://learn.microsoft.com/dotnet/api/system.string)`

**Remarks**

The default NetworkEndpointGroups scopes are:

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

### DetachNetworkEndpointsOperationsClient

```
public virtual OperationsClient DetachNetworkEndpointsOperationsClient { get; }
```

The long-running operations client for `DetachNetworkEndpoints`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

### GrpcClient

```
public virtual NetworkEndpointGroups.NetworkEndpointGroupsClient GrpcClient { get; }
```

The underlying gRPC NetworkEndpointGroups client

**Property Value**

**Type**

**Description**

`[NetworkEndpointGroups](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroups)[NetworkEndpointGroupsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroups.NetworkEndpointGroupsClient)`

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

### AggregatedList(AggregatedListNetworkEndpointGroupsRequest, CallSettings)

```
public virtual PagedEnumerable<NetworkEndpointGroupAggregatedList, KeyValuePair<string, NetworkEndpointGroupsScopedList>> AggregatedList(AggregatedListNetworkEndpointGroupsRequest request, CallSettings callSettings = null)
```

Retrieves the list of network endpoint groups and sorts them by zone. To prevent failure, Google recommends that you set the `returnPartialSuccess` parameter to `true`.

**Parameters**

**Name**

**Description**

`request`

`[AggregatedListNetworkEndpointGroupsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.AggregatedListNetworkEndpointGroupsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)[NetworkEndpointGroupAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupAggregatedList)[KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2)[string](https://learn.microsoft.com/dotnet/api/system.string)[NetworkEndpointGroupsScopedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupsScopedList)`

A pageable sequence of [KeyValuePair<TKey, TValue>](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2) resources.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = NetworkEndpointGroupsClient.Create();
// Initialize request argument(s)
AggregatedListNetworkEndpointGroupsRequest request = new AggregatedListNetworkEndpointGroupsRequest
{
    OrderBy = "",
    Project = "",
    ServiceProjectNumber = 0L,
    Filter = "",
    IncludeAllScopes = false,
    ReturnPartialSuccess = false,
};
// Make the request
PagedEnumerable<NetworkEndpointGroupAggregatedList, KeyValuePair<string, NetworkEndpointGroupsScopedList>> response = networkEndpointGroupsClient.AggregatedList(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (KeyValuePair<string, NetworkEndpointGroupsScopedList> item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (NetworkEndpointGroupAggregatedList page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (KeyValuePair<string, NetworkEndpointGroupsScopedList> item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<KeyValuePair<string, NetworkEndpointGroupsScopedList>> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (KeyValuePair<string, NetworkEndpointGroupsScopedList> item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### AggregatedList(string, string, int?, CallSettings)

```
public virtual PagedEnumerable<NetworkEndpointGroupAggregatedList, KeyValuePair<string, NetworkEndpointGroupsScopedList>> AggregatedList(string project, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Retrieves the list of network endpoint groups and sorts them by zone. To prevent failure, Google recommends that you set the `returnPartialSuccess` parameter to `true`.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

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

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)[NetworkEndpointGroupAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupAggregatedList)[KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2)[string](https://learn.microsoft.com/dotnet/api/system.string)[NetworkEndpointGroupsScopedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupsScopedList)`

A pageable sequence of [KeyValuePair<TKey, TValue>](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2) resources.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = NetworkEndpointGroupsClient.Create();
// Initialize request argument(s)
string project = "";
// Make the request
PagedEnumerable<NetworkEndpointGroupAggregatedList, KeyValuePair<string, NetworkEndpointGroupsScopedList>> response = networkEndpointGroupsClient.AggregatedList(project);

// Iterate over all response items, lazily performing RPCs as required
foreach (KeyValuePair<string, NetworkEndpointGroupsScopedList> item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (NetworkEndpointGroupAggregatedList page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (KeyValuePair<string, NetworkEndpointGroupsScopedList> item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<KeyValuePair<string, NetworkEndpointGroupsScopedList>> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (KeyValuePair<string, NetworkEndpointGroupsScopedList> item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### AggregatedListAsync(AggregatedListNetworkEndpointGroupsRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<NetworkEndpointGroupAggregatedList, KeyValuePair<string, NetworkEndpointGroupsScopedList>> AggregatedListAsync(AggregatedListNetworkEndpointGroupsRequest request, CallSettings callSettings = null)
```

Retrieves the list of network endpoint groups and sorts them by zone. To prevent failure, Google recommends that you set the `returnPartialSuccess` parameter to `true`.

**Parameters**

**Name**

**Description**

`request`

`[AggregatedListNetworkEndpointGroupsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.AggregatedListNetworkEndpointGroupsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)[NetworkEndpointGroupAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupAggregatedList)[KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2)[string](https://learn.microsoft.com/dotnet/api/system.string)[NetworkEndpointGroupsScopedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupsScopedList)`

A pageable asynchronous sequence of [KeyValuePair<TKey, TValue>](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2) resources.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = await NetworkEndpointGroupsClient.CreateAsync();
// Initialize request argument(s)
AggregatedListNetworkEndpointGroupsRequest request = new AggregatedListNetworkEndpointGroupsRequest
{
    OrderBy = "",
    Project = "",
    ServiceProjectNumber = 0L,
    Filter = "",
    IncludeAllScopes = false,
    ReturnPartialSuccess = false,
};
// Make the request
PagedAsyncEnumerable<NetworkEndpointGroupAggregatedList, KeyValuePair<string, NetworkEndpointGroupsScopedList>> response = networkEndpointGroupsClient.AggregatedListAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((KeyValuePair<string, NetworkEndpointGroupsScopedList> item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((NetworkEndpointGroupAggregatedList page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (KeyValuePair<string, NetworkEndpointGroupsScopedList> item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<KeyValuePair<string, NetworkEndpointGroupsScopedList>> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (KeyValuePair<string, NetworkEndpointGroupsScopedList> item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### AggregatedListAsync(string, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<NetworkEndpointGroupAggregatedList, KeyValuePair<string, NetworkEndpointGroupsScopedList>> AggregatedListAsync(string project, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Retrieves the list of network endpoint groups and sorts them by zone. To prevent failure, Google recommends that you set the `returnPartialSuccess` parameter to `true`.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

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

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)[NetworkEndpointGroupAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupAggregatedList)[KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2)[string](https://learn.microsoft.com/dotnet/api/system.string)[NetworkEndpointGroupsScopedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupsScopedList)`

A pageable asynchronous sequence of [KeyValuePair<TKey, TValue>](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2) resources.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = await NetworkEndpointGroupsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
// Make the request
PagedAsyncEnumerable<NetworkEndpointGroupAggregatedList, KeyValuePair<string, NetworkEndpointGroupsScopedList>> response = networkEndpointGroupsClient.AggregatedListAsync(project);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((KeyValuePair<string, NetworkEndpointGroupsScopedList> item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((NetworkEndpointGroupAggregatedList page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (KeyValuePair<string, NetworkEndpointGroupsScopedList> item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<KeyValuePair<string, NetworkEndpointGroupsScopedList>> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (KeyValuePair<string, NetworkEndpointGroupsScopedList> item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### AttachNetworkEndpoints(AttachNetworkEndpointsNetworkEndpointGroupRequest, CallSettings)

```
public virtual Operation<Operation, Operation> AttachNetworkEndpoints(AttachNetworkEndpointsNetworkEndpointGroupRequest request, CallSettings callSettings = null)
```

Attach a list of network endpoints to the specified network endpoint group.

**Parameters**

**Name**

**Description**

`request`

`[AttachNetworkEndpointsNetworkEndpointGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.AttachNetworkEndpointsNetworkEndpointGroupRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)`

The RPC response.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = NetworkEndpointGroupsClient.Create();
// Initialize request argument(s)
AttachNetworkEndpointsNetworkEndpointGroupRequest request = new AttachNetworkEndpointsNetworkEndpointGroupRequest
{
    NetworkEndpointGroupsAttachEndpointsRequestResource = new NetworkEndpointGroupsAttachEndpointsRequest(),
    Zone = "",
    RequestId = "",
    Project = "",
    NetworkEndpointGroup = "",
};
// Make the request
lro::Operation<Operation, Operation> response = networkEndpointGroupsClient.AttachNetworkEndpoints(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = networkEndpointGroupsClient.PollOnceAttachNetworkEndpoints(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### AttachNetworkEndpoints(string, string, string, NetworkEndpointGroupsAttachEndpointsRequest, CallSettings)

```
public virtual Operation<Operation, Operation> AttachNetworkEndpoints(string project, string zone, string networkEndpointGroup, NetworkEndpointGroupsAttachEndpointsRequest networkEndpointGroupsAttachEndpointsRequestResource, CallSettings callSettings = null)
```

Attach a list of network endpoints to the specified network endpoint group.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where the network endpoint group is located. It should comply with RFC1035.

`networkEndpointGroup`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the network endpoint group where you are attaching network endpoints to. It should comply with RFC1035.

`networkEndpointGroupsAttachEndpointsRequestResource`

`[NetworkEndpointGroupsAttachEndpointsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupsAttachEndpointsRequest)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)`

The RPC response.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = NetworkEndpointGroupsClient.Create();
// Initialize request argument(s)
string project = "";
string zone = "";
string networkEndpointGroup = "";
NetworkEndpointGroupsAttachEndpointsRequest networkEndpointGroupsAttachEndpointsRequestResource = new NetworkEndpointGroupsAttachEndpointsRequest();
// Make the request
lro::Operation<Operation, Operation> response = networkEndpointGroupsClient.AttachNetworkEndpoints(project, zone, networkEndpointGroup, networkEndpointGroupsAttachEndpointsRequestResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = networkEndpointGroupsClient.PollOnceAttachNetworkEndpoints(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### AttachNetworkEndpointsAsync(AttachNetworkEndpointsNetworkEndpointGroupRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> AttachNetworkEndpointsAsync(AttachNetworkEndpointsNetworkEndpointGroupRequest request, CallSettings callSettings = null)
```

Attach a list of network endpoints to the specified network endpoint group.

**Parameters**

**Name**

**Description**

`request`

`[AttachNetworkEndpointsNetworkEndpointGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.AttachNetworkEndpointsNetworkEndpointGroupRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = await NetworkEndpointGroupsClient.CreateAsync();
// Initialize request argument(s)
AttachNetworkEndpointsNetworkEndpointGroupRequest request = new AttachNetworkEndpointsNetworkEndpointGroupRequest
{
    NetworkEndpointGroupsAttachEndpointsRequestResource = new NetworkEndpointGroupsAttachEndpointsRequest(),
    Zone = "",
    RequestId = "",
    Project = "",
    NetworkEndpointGroup = "",
};
// Make the request
lro::Operation<Operation, Operation> response = await networkEndpointGroupsClient.AttachNetworkEndpointsAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await networkEndpointGroupsClient.PollOnceAttachNetworkEndpointsAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### AttachNetworkEndpointsAsync(AttachNetworkEndpointsNetworkEndpointGroupRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> AttachNetworkEndpointsAsync(AttachNetworkEndpointsNetworkEndpointGroupRequest request, CancellationToken cancellationToken)
```

Attach a list of network endpoints to the specified network endpoint group.

**Parameters**

**Name**

**Description**

`request`

`[AttachNetworkEndpointsNetworkEndpointGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.AttachNetworkEndpointsNetworkEndpointGroupRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = await NetworkEndpointGroupsClient.CreateAsync();
// Initialize request argument(s)
AttachNetworkEndpointsNetworkEndpointGroupRequest request = new AttachNetworkEndpointsNetworkEndpointGroupRequest
{
    NetworkEndpointGroupsAttachEndpointsRequestResource = new NetworkEndpointGroupsAttachEndpointsRequest(),
    Zone = "",
    RequestId = "",
    Project = "",
    NetworkEndpointGroup = "",
};
// Make the request
lro::Operation<Operation, Operation> response = await networkEndpointGroupsClient.AttachNetworkEndpointsAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await networkEndpointGroupsClient.PollOnceAttachNetworkEndpointsAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### AttachNetworkEndpointsAsync(string, string, string, NetworkEndpointGroupsAttachEndpointsRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> AttachNetworkEndpointsAsync(string project, string zone, string networkEndpointGroup, NetworkEndpointGroupsAttachEndpointsRequest networkEndpointGroupsAttachEndpointsRequestResource, CallSettings callSettings = null)
```

Attach a list of network endpoints to the specified network endpoint group.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where the network endpoint group is located. It should comply with RFC1035.

`networkEndpointGroup`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the network endpoint group where you are attaching network endpoints to. It should comply with RFC1035.

`networkEndpointGroupsAttachEndpointsRequestResource`

`[NetworkEndpointGroupsAttachEndpointsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupsAttachEndpointsRequest)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = await NetworkEndpointGroupsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string zone = "";
string networkEndpointGroup = "";
NetworkEndpointGroupsAttachEndpointsRequest networkEndpointGroupsAttachEndpointsRequestResource = new NetworkEndpointGroupsAttachEndpointsRequest();
// Make the request
lro::Operation<Operation, Operation> response = await networkEndpointGroupsClient.AttachNetworkEndpointsAsync(project, zone, networkEndpointGroup, networkEndpointGroupsAttachEndpointsRequestResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await networkEndpointGroupsClient.PollOnceAttachNetworkEndpointsAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### AttachNetworkEndpointsAsync(string, string, string, NetworkEndpointGroupsAttachEndpointsRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> AttachNetworkEndpointsAsync(string project, string zone, string networkEndpointGroup, NetworkEndpointGroupsAttachEndpointsRequest networkEndpointGroupsAttachEndpointsRequestResource, CancellationToken cancellationToken)
```

Attach a list of network endpoints to the specified network endpoint group.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where the network endpoint group is located. It should comply with RFC1035.

`networkEndpointGroup`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the network endpoint group where you are attaching network endpoints to. It should comply with RFC1035.

`networkEndpointGroupsAttachEndpointsRequestResource`

`[NetworkEndpointGroupsAttachEndpointsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupsAttachEndpointsRequest)`  

The body resource for this request

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = await NetworkEndpointGroupsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string zone = "";
string networkEndpointGroup = "";
NetworkEndpointGroupsAttachEndpointsRequest networkEndpointGroupsAttachEndpointsRequestResource = new NetworkEndpointGroupsAttachEndpointsRequest();
// Make the request
lro::Operation<Operation, Operation> response = await networkEndpointGroupsClient.AttachNetworkEndpointsAsync(project, zone, networkEndpointGroup, networkEndpointGroupsAttachEndpointsRequestResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await networkEndpointGroupsClient.PollOnceAttachNetworkEndpointsAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### Create()

```
public static NetworkEndpointGroupsClient Create()
```

Synchronously creates a [NetworkEndpointGroupsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupsClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [NetworkEndpointGroupsClientBuilder](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupsClientBuilder).

**Returns**

**Type**

**Description**

`[NetworkEndpointGroupsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupsClient)`

The created [NetworkEndpointGroupsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupsClient).

### CreateAsync(CancellationToken)

```
public static Task<NetworkEndpointGroupsClient> CreateAsync(CancellationToken cancellationToken = default)
```

Asynchronously creates a [NetworkEndpointGroupsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupsClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [NetworkEndpointGroupsClientBuilder](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupsClientBuilder).

**Parameter**

**Name**

**Description**

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

The [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use while creating the client.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[NetworkEndpointGroupsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupsClient)`

The task representing the created [NetworkEndpointGroupsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupsClient).

### Delete(DeleteNetworkEndpointGroupRequest, CallSettings)

```
public virtual Operation<Operation, Operation> Delete(DeleteNetworkEndpointGroupRequest request, CallSettings callSettings = null)
```

Deletes the specified network endpoint group. The network endpoints in the NEG and the VM instances they belong to are not terminated when the NEG is deleted. Note that the NEG cannot be deleted if there are backend services referencing it.

**Parameters**

**Name**

**Description**

`request`

`[DeleteNetworkEndpointGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.DeleteNetworkEndpointGroupRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)`

The RPC response.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = NetworkEndpointGroupsClient.Create();
// Initialize request argument(s)
DeleteNetworkEndpointGroupRequest request = new DeleteNetworkEndpointGroupRequest
{
    Zone = "",
    RequestId = "",
    Project = "",
    NetworkEndpointGroup = "",
};
// Make the request
lro::Operation<Operation, Operation> response = networkEndpointGroupsClient.Delete(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = networkEndpointGroupsClient.PollOnceDelete(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### Delete(string, string, string, CallSettings)

```
public virtual Operation<Operation, Operation> Delete(string project, string zone, string networkEndpointGroup, CallSettings callSettings = null)
```

Deletes the specified network endpoint group. The network endpoints in the NEG and the VM instances they belong to are not terminated when the NEG is deleted. Note that the NEG cannot be deleted if there are backend services referencing it.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where the network endpoint group is located. It should comply with RFC1035.

`networkEndpointGroup`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the network endpoint group to delete. It should comply with RFC1035.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)`

The RPC response.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = NetworkEndpointGroupsClient.Create();
// Initialize request argument(s)
string project = "";
string zone = "";
string networkEndpointGroup = "";
// Make the request
lro::Operation<Operation, Operation> response = networkEndpointGroupsClient.Delete(project, zone, networkEndpointGroup);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = networkEndpointGroupsClient.PollOnceDelete(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DeleteAsync(DeleteNetworkEndpointGroupRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> DeleteAsync(DeleteNetworkEndpointGroupRequest request, CallSettings callSettings = null)
```

Deletes the specified network endpoint group. The network endpoints in the NEG and the VM instances they belong to are not terminated when the NEG is deleted. Note that the NEG cannot be deleted if there are backend services referencing it.

**Parameters**

**Name**

**Description**

`request`

`[DeleteNetworkEndpointGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.DeleteNetworkEndpointGroupRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = await NetworkEndpointGroupsClient.CreateAsync();
// Initialize request argument(s)
DeleteNetworkEndpointGroupRequest request = new DeleteNetworkEndpointGroupRequest
{
    Zone = "",
    RequestId = "",
    Project = "",
    NetworkEndpointGroup = "",
};
// Make the request
lro::Operation<Operation, Operation> response = await networkEndpointGroupsClient.DeleteAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await networkEndpointGroupsClient.PollOnceDeleteAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DeleteAsync(DeleteNetworkEndpointGroupRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> DeleteAsync(DeleteNetworkEndpointGroupRequest request, CancellationToken cancellationToken)
```

Deletes the specified network endpoint group. The network endpoints in the NEG and the VM instances they belong to are not terminated when the NEG is deleted. Note that the NEG cannot be deleted if there are backend services referencing it.

**Parameters**

**Name**

**Description**

`request`

`[DeleteNetworkEndpointGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.DeleteNetworkEndpointGroupRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = await NetworkEndpointGroupsClient.CreateAsync();
// Initialize request argument(s)
DeleteNetworkEndpointGroupRequest request = new DeleteNetworkEndpointGroupRequest
{
    Zone = "",
    RequestId = "",
    Project = "",
    NetworkEndpointGroup = "",
};
// Make the request
lro::Operation<Operation, Operation> response = await networkEndpointGroupsClient.DeleteAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await networkEndpointGroupsClient.PollOnceDeleteAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DeleteAsync(string, string, string, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> DeleteAsync(string project, string zone, string networkEndpointGroup, CallSettings callSettings = null)
```

Deletes the specified network endpoint group. The network endpoints in the NEG and the VM instances they belong to are not terminated when the NEG is deleted. Note that the NEG cannot be deleted if there are backend services referencing it.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where the network endpoint group is located. It should comply with RFC1035.

`networkEndpointGroup`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the network endpoint group to delete. It should comply with RFC1035.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = await NetworkEndpointGroupsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string zone = "";
string networkEndpointGroup = "";
// Make the request
lro::Operation<Operation, Operation> response = await networkEndpointGroupsClient.DeleteAsync(project, zone, networkEndpointGroup);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await networkEndpointGroupsClient.PollOnceDeleteAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DeleteAsync(string, string, string, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> DeleteAsync(string project, string zone, string networkEndpointGroup, CancellationToken cancellationToken)
```

Deletes the specified network endpoint group. The network endpoints in the NEG and the VM instances they belong to are not terminated when the NEG is deleted. Note that the NEG cannot be deleted if there are backend services referencing it.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where the network endpoint group is located. It should comply with RFC1035.

`networkEndpointGroup`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the network endpoint group to delete. It should comply with RFC1035.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = await NetworkEndpointGroupsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string zone = "";
string networkEndpointGroup = "";
// Make the request
lro::Operation<Operation, Operation> response = await networkEndpointGroupsClient.DeleteAsync(project, zone, networkEndpointGroup);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await networkEndpointGroupsClient.PollOnceDeleteAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DetachNetworkEndpoints(DetachNetworkEndpointsNetworkEndpointGroupRequest, CallSettings)

```
public virtual Operation<Operation, Operation> DetachNetworkEndpoints(DetachNetworkEndpointsNetworkEndpointGroupRequest request, CallSettings callSettings = null)
```

Detach a list of network endpoints from the specified network endpoint group.

**Parameters**

**Name**

**Description**

`request`

`[DetachNetworkEndpointsNetworkEndpointGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.DetachNetworkEndpointsNetworkEndpointGroupRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)`

The RPC response.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = NetworkEndpointGroupsClient.Create();
// Initialize request argument(s)
DetachNetworkEndpointsNetworkEndpointGroupRequest request = new DetachNetworkEndpointsNetworkEndpointGroupRequest
{
    Zone = "",
    RequestId = "",
    Project = "",
    NetworkEndpointGroup = "",
    NetworkEndpointGroupsDetachEndpointsRequestResource = new NetworkEndpointGroupsDetachEndpointsRequest(),
};
// Make the request
lro::Operation<Operation, Operation> response = networkEndpointGroupsClient.DetachNetworkEndpoints(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = networkEndpointGroupsClient.PollOnceDetachNetworkEndpoints(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DetachNetworkEndpoints(string, string, string, NetworkEndpointGroupsDetachEndpointsRequest, CallSettings)

```
public virtual Operation<Operation, Operation> DetachNetworkEndpoints(string project, string zone, string networkEndpointGroup, NetworkEndpointGroupsDetachEndpointsRequest networkEndpointGroupsDetachEndpointsRequestResource, CallSettings callSettings = null)
```

Detach a list of network endpoints from the specified network endpoint group.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where the network endpoint group is located. It should comply with RFC1035.

`networkEndpointGroup`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the network endpoint group where you are removing network endpoints. It should comply with RFC1035.

`networkEndpointGroupsDetachEndpointsRequestResource`

`[NetworkEndpointGroupsDetachEndpointsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupsDetachEndpointsRequest)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)`

The RPC response.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = NetworkEndpointGroupsClient.Create();
// Initialize request argument(s)
string project = "";
string zone = "";
string networkEndpointGroup = "";
NetworkEndpointGroupsDetachEndpointsRequest networkEndpointGroupsDetachEndpointsRequestResource = new NetworkEndpointGroupsDetachEndpointsRequest();
// Make the request
lro::Operation<Operation, Operation> response = networkEndpointGroupsClient.DetachNetworkEndpoints(project, zone, networkEndpointGroup, networkEndpointGroupsDetachEndpointsRequestResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = networkEndpointGroupsClient.PollOnceDetachNetworkEndpoints(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DetachNetworkEndpointsAsync(DetachNetworkEndpointsNetworkEndpointGroupRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> DetachNetworkEndpointsAsync(DetachNetworkEndpointsNetworkEndpointGroupRequest request, CallSettings callSettings = null)
```

Detach a list of network endpoints from the specified network endpoint group.

**Parameters**

**Name**

**Description**

`request`

`[DetachNetworkEndpointsNetworkEndpointGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.DetachNetworkEndpointsNetworkEndpointGroupRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = await NetworkEndpointGroupsClient.CreateAsync();
// Initialize request argument(s)
DetachNetworkEndpointsNetworkEndpointGroupRequest request = new DetachNetworkEndpointsNetworkEndpointGroupRequest
{
    Zone = "",
    RequestId = "",
    Project = "",
    NetworkEndpointGroup = "",
    NetworkEndpointGroupsDetachEndpointsRequestResource = new NetworkEndpointGroupsDetachEndpointsRequest(),
};
// Make the request
lro::Operation<Operation, Operation> response = await networkEndpointGroupsClient.DetachNetworkEndpointsAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await networkEndpointGroupsClient.PollOnceDetachNetworkEndpointsAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DetachNetworkEndpointsAsync(DetachNetworkEndpointsNetworkEndpointGroupRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> DetachNetworkEndpointsAsync(DetachNetworkEndpointsNetworkEndpointGroupRequest request, CancellationToken cancellationToken)
```

Detach a list of network endpoints from the specified network endpoint group.

**Parameters**

**Name**

**Description**

`request`

`[DetachNetworkEndpointsNetworkEndpointGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.DetachNetworkEndpointsNetworkEndpointGroupRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = await NetworkEndpointGroupsClient.CreateAsync();
// Initialize request argument(s)
DetachNetworkEndpointsNetworkEndpointGroupRequest request = new DetachNetworkEndpointsNetworkEndpointGroupRequest
{
    Zone = "",
    RequestId = "",
    Project = "",
    NetworkEndpointGroup = "",
    NetworkEndpointGroupsDetachEndpointsRequestResource = new NetworkEndpointGroupsDetachEndpointsRequest(),
};
// Make the request
lro::Operation<Operation, Operation> response = await networkEndpointGroupsClient.DetachNetworkEndpointsAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await networkEndpointGroupsClient.PollOnceDetachNetworkEndpointsAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DetachNetworkEndpointsAsync(string, string, string, NetworkEndpointGroupsDetachEndpointsRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> DetachNetworkEndpointsAsync(string project, string zone, string networkEndpointGroup, NetworkEndpointGroupsDetachEndpointsRequest networkEndpointGroupsDetachEndpointsRequestResource, CallSettings callSettings = null)
```

Detach a list of network endpoints from the specified network endpoint group.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where the network endpoint group is located. It should comply with RFC1035.

`networkEndpointGroup`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the network endpoint group where you are removing network endpoints. It should comply with RFC1035.

`networkEndpointGroupsDetachEndpointsRequestResource`

`[NetworkEndpointGroupsDetachEndpointsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupsDetachEndpointsRequest)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = await NetworkEndpointGroupsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string zone = "";
string networkEndpointGroup = "";
NetworkEndpointGroupsDetachEndpointsRequest networkEndpointGroupsDetachEndpointsRequestResource = new NetworkEndpointGroupsDetachEndpointsRequest();
// Make the request
lro::Operation<Operation, Operation> response = await networkEndpointGroupsClient.DetachNetworkEndpointsAsync(project, zone, networkEndpointGroup, networkEndpointGroupsDetachEndpointsRequestResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await networkEndpointGroupsClient.PollOnceDetachNetworkEndpointsAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DetachNetworkEndpointsAsync(string, string, string, NetworkEndpointGroupsDetachEndpointsRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> DetachNetworkEndpointsAsync(string project, string zone, string networkEndpointGroup, NetworkEndpointGroupsDetachEndpointsRequest networkEndpointGroupsDetachEndpointsRequestResource, CancellationToken cancellationToken)
```

Detach a list of network endpoints from the specified network endpoint group.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where the network endpoint group is located. It should comply with RFC1035.

`networkEndpointGroup`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the network endpoint group where you are removing network endpoints. It should comply with RFC1035.

`networkEndpointGroupsDetachEndpointsRequestResource`

`[NetworkEndpointGroupsDetachEndpointsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupsDetachEndpointsRequest)`  

The body resource for this request

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = await NetworkEndpointGroupsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string zone = "";
string networkEndpointGroup = "";
NetworkEndpointGroupsDetachEndpointsRequest networkEndpointGroupsDetachEndpointsRequestResource = new NetworkEndpointGroupsDetachEndpointsRequest();
// Make the request
lro::Operation<Operation, Operation> response = await networkEndpointGroupsClient.DetachNetworkEndpointsAsync(project, zone, networkEndpointGroup, networkEndpointGroupsDetachEndpointsRequestResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await networkEndpointGroupsClient.PollOnceDetachNetworkEndpointsAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### Get(GetNetworkEndpointGroupRequest, CallSettings)

```
public virtual NetworkEndpointGroup Get(GetNetworkEndpointGroupRequest request, CallSettings callSettings = null)
```

Returns the specified network endpoint group.

**Parameters**

**Name**

**Description**

`request`

`[GetNetworkEndpointGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.GetNetworkEndpointGroupRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[NetworkEndpointGroup](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroup)`

The RPC response.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = NetworkEndpointGroupsClient.Create();
// Initialize request argument(s)
GetNetworkEndpointGroupRequest request = new GetNetworkEndpointGroupRequest
{
    Zone = "",
    Project = "",
    NetworkEndpointGroup = "",
};
// Make the request
NetworkEndpointGroup response = networkEndpointGroupsClient.Get(request);
```

### Get(string, string, string, CallSettings)

```
public virtual NetworkEndpointGroup Get(string project, string zone, string networkEndpointGroup, CallSettings callSettings = null)
```

Returns the specified network endpoint group.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where the network endpoint group is located. It should comply with RFC1035.

`networkEndpointGroup`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the network endpoint group. It should comply with RFC1035.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[NetworkEndpointGroup](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroup)`

The RPC response.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = NetworkEndpointGroupsClient.Create();
// Initialize request argument(s)
string project = "";
string zone = "";
string networkEndpointGroup = "";
// Make the request
NetworkEndpointGroup response = networkEndpointGroupsClient.Get(project, zone, networkEndpointGroup);
```

### GetAsync(GetNetworkEndpointGroupRequest, CallSettings)

```
public virtual Task<NetworkEndpointGroup> GetAsync(GetNetworkEndpointGroupRequest request, CallSettings callSettings = null)
```

Returns the specified network endpoint group.

**Parameters**

**Name**

**Description**

`request`

`[GetNetworkEndpointGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.GetNetworkEndpointGroupRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[NetworkEndpointGroup](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroup)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = await NetworkEndpointGroupsClient.CreateAsync();
// Initialize request argument(s)
GetNetworkEndpointGroupRequest request = new GetNetworkEndpointGroupRequest
{
    Zone = "",
    Project = "",
    NetworkEndpointGroup = "",
};
// Make the request
NetworkEndpointGroup response = await networkEndpointGroupsClient.GetAsync(request);
```

### GetAsync(GetNetworkEndpointGroupRequest, CancellationToken)

```
public virtual Task<NetworkEndpointGroup> GetAsync(GetNetworkEndpointGroupRequest request, CancellationToken cancellationToken)
```

Returns the specified network endpoint group.

**Parameters**

**Name**

**Description**

`request`

`[GetNetworkEndpointGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.GetNetworkEndpointGroupRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[NetworkEndpointGroup](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroup)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = await NetworkEndpointGroupsClient.CreateAsync();
// Initialize request argument(s)
GetNetworkEndpointGroupRequest request = new GetNetworkEndpointGroupRequest
{
    Zone = "",
    Project = "",
    NetworkEndpointGroup = "",
};
// Make the request
NetworkEndpointGroup response = await networkEndpointGroupsClient.GetAsync(request);
```

### GetAsync(string, string, string, CallSettings)

```
public virtual Task<NetworkEndpointGroup> GetAsync(string project, string zone, string networkEndpointGroup, CallSettings callSettings = null)
```

Returns the specified network endpoint group.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where the network endpoint group is located. It should comply with RFC1035.

`networkEndpointGroup`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the network endpoint group. It should comply with RFC1035.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[NetworkEndpointGroup](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroup)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = await NetworkEndpointGroupsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string zone = "";
string networkEndpointGroup = "";
// Make the request
NetworkEndpointGroup response = await networkEndpointGroupsClient.GetAsync(project, zone, networkEndpointGroup);
```

### GetAsync(string, string, string, CancellationToken)

```
public virtual Task<NetworkEndpointGroup> GetAsync(string project, string zone, string networkEndpointGroup, CancellationToken cancellationToken)
```

Returns the specified network endpoint group.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where the network endpoint group is located. It should comply with RFC1035.

`networkEndpointGroup`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the network endpoint group. It should comply with RFC1035.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[NetworkEndpointGroup](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroup)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = await NetworkEndpointGroupsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string zone = "";
string networkEndpointGroup = "";
// Make the request
NetworkEndpointGroup response = await networkEndpointGroupsClient.GetAsync(project, zone, networkEndpointGroup);
```

### Insert(InsertNetworkEndpointGroupRequest, CallSettings)

```
public virtual Operation<Operation, Operation> Insert(InsertNetworkEndpointGroupRequest request, CallSettings callSettings = null)
```

Creates a network endpoint group in the specified project using the parameters that are included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertNetworkEndpointGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.InsertNetworkEndpointGroupRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)`

The RPC response.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = NetworkEndpointGroupsClient.Create();
// Initialize request argument(s)
InsertNetworkEndpointGroupRequest request = new InsertNetworkEndpointGroupRequest
{
    Zone = "",
    RequestId = "",
    Project = "",
    NetworkEndpointGroupResource = new NetworkEndpointGroup(),
};
// Make the request
lro::Operation<Operation, Operation> response = networkEndpointGroupsClient.Insert(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = networkEndpointGroupsClient.PollOnceInsert(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### Insert(string, string, NetworkEndpointGroup, CallSettings)

```
public virtual Operation<Operation, Operation> Insert(string project, string zone, NetworkEndpointGroup networkEndpointGroupResource, CallSettings callSettings = null)
```

Creates a network endpoint group in the specified project using the parameters that are included in the request.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where you want to create the network endpoint group. It should comply with RFC1035.

`networkEndpointGroupResource`

`[NetworkEndpointGroup](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroup)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)`

The RPC response.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = NetworkEndpointGroupsClient.Create();
// Initialize request argument(s)
string project = "";
string zone = "";
NetworkEndpointGroup networkEndpointGroupResource = new NetworkEndpointGroup();
// Make the request
lro::Operation<Operation, Operation> response = networkEndpointGroupsClient.Insert(project, zone, networkEndpointGroupResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = networkEndpointGroupsClient.PollOnceInsert(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### InsertAsync(InsertNetworkEndpointGroupRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> InsertAsync(InsertNetworkEndpointGroupRequest request, CallSettings callSettings = null)
```

Creates a network endpoint group in the specified project using the parameters that are included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertNetworkEndpointGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.InsertNetworkEndpointGroupRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = await NetworkEndpointGroupsClient.CreateAsync();
// Initialize request argument(s)
InsertNetworkEndpointGroupRequest request = new InsertNetworkEndpointGroupRequest
{
    Zone = "",
    RequestId = "",
    Project = "",
    NetworkEndpointGroupResource = new NetworkEndpointGroup(),
};
// Make the request
lro::Operation<Operation, Operation> response = await networkEndpointGroupsClient.InsertAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await networkEndpointGroupsClient.PollOnceInsertAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### InsertAsync(InsertNetworkEndpointGroupRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> InsertAsync(InsertNetworkEndpointGroupRequest request, CancellationToken cancellationToken)
```

Creates a network endpoint group in the specified project using the parameters that are included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertNetworkEndpointGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.InsertNetworkEndpointGroupRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = await NetworkEndpointGroupsClient.CreateAsync();
// Initialize request argument(s)
InsertNetworkEndpointGroupRequest request = new InsertNetworkEndpointGroupRequest
{
    Zone = "",
    RequestId = "",
    Project = "",
    NetworkEndpointGroupResource = new NetworkEndpointGroup(),
};
// Make the request
lro::Operation<Operation, Operation> response = await networkEndpointGroupsClient.InsertAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await networkEndpointGroupsClient.PollOnceInsertAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### InsertAsync(string, string, NetworkEndpointGroup, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> InsertAsync(string project, string zone, NetworkEndpointGroup networkEndpointGroupResource, CallSettings callSettings = null)
```

Creates a network endpoint group in the specified project using the parameters that are included in the request.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where you want to create the network endpoint group. It should comply with RFC1035.

`networkEndpointGroupResource`

`[NetworkEndpointGroup](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroup)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = await NetworkEndpointGroupsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string zone = "";
NetworkEndpointGroup networkEndpointGroupResource = new NetworkEndpointGroup();
// Make the request
lro::Operation<Operation, Operation> response = await networkEndpointGroupsClient.InsertAsync(project, zone, networkEndpointGroupResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await networkEndpointGroupsClient.PollOnceInsertAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### InsertAsync(string, string, NetworkEndpointGroup, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> InsertAsync(string project, string zone, NetworkEndpointGroup networkEndpointGroupResource, CancellationToken cancellationToken)
```

Creates a network endpoint group in the specified project using the parameters that are included in the request.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where you want to create the network endpoint group. It should comply with RFC1035.

`networkEndpointGroupResource`

`[NetworkEndpointGroup](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroup)`  

The body resource for this request

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = await NetworkEndpointGroupsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string zone = "";
NetworkEndpointGroup networkEndpointGroupResource = new NetworkEndpointGroup();
// Make the request
lro::Operation<Operation, Operation> response = await networkEndpointGroupsClient.InsertAsync(project, zone, networkEndpointGroupResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await networkEndpointGroupsClient.PollOnceInsertAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### List(ListNetworkEndpointGroupsRequest, CallSettings)

```
public virtual PagedEnumerable<NetworkEndpointGroupList, NetworkEndpointGroup> List(ListNetworkEndpointGroupsRequest request, CallSettings callSettings = null)
```

Retrieves the list of network endpoint groups that are located in the specified project and zone.

**Parameters**

**Name**

**Description**

`request`

`[ListNetworkEndpointGroupsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.ListNetworkEndpointGroupsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)[NetworkEndpointGroupList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupList)[NetworkEndpointGroup](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroup)`

A pageable sequence of [NetworkEndpointGroup](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroup) resources.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = NetworkEndpointGroupsClient.Create();
// Initialize request argument(s)
ListNetworkEndpointGroupsRequest request = new ListNetworkEndpointGroupsRequest
{
    Zone = "",
    OrderBy = "",
    Project = "",
    Filter = "",
    ReturnPartialSuccess = false,
};
// Make the request
PagedEnumerable<NetworkEndpointGroupList, NetworkEndpointGroup> response = networkEndpointGroupsClient.List(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (NetworkEndpointGroup item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (NetworkEndpointGroupList page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (NetworkEndpointGroup item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<NetworkEndpointGroup> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (NetworkEndpointGroup item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### List(string, string, string, int?, CallSettings)

```
public virtual PagedEnumerable<NetworkEndpointGroupList, NetworkEndpointGroup> List(string project, string zone, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Retrieves the list of network endpoint groups that are located in the specified project and zone.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where the network endpoint group is located. It should comply with RFC1035.

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

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)[NetworkEndpointGroupList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupList)[NetworkEndpointGroup](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroup)`

A pageable sequence of [NetworkEndpointGroup](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroup) resources.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = NetworkEndpointGroupsClient.Create();
// Initialize request argument(s)
string project = "";
string zone = "";
// Make the request
PagedEnumerable<NetworkEndpointGroupList, NetworkEndpointGroup> response = networkEndpointGroupsClient.List(project, zone);

// Iterate over all response items, lazily performing RPCs as required
foreach (NetworkEndpointGroup item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (NetworkEndpointGroupList page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (NetworkEndpointGroup item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<NetworkEndpointGroup> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (NetworkEndpointGroup item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListAsync(ListNetworkEndpointGroupsRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<NetworkEndpointGroupList, NetworkEndpointGroup> ListAsync(ListNetworkEndpointGroupsRequest request, CallSettings callSettings = null)
```

Retrieves the list of network endpoint groups that are located in the specified project and zone.

**Parameters**

**Name**

**Description**

`request`

`[ListNetworkEndpointGroupsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.ListNetworkEndpointGroupsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)[NetworkEndpointGroupList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupList)[NetworkEndpointGroup](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroup)`

A pageable asynchronous sequence of [NetworkEndpointGroup](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroup) resources.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = await NetworkEndpointGroupsClient.CreateAsync();
// Initialize request argument(s)
ListNetworkEndpointGroupsRequest request = new ListNetworkEndpointGroupsRequest
{
    Zone = "",
    OrderBy = "",
    Project = "",
    Filter = "",
    ReturnPartialSuccess = false,
};
// Make the request
PagedAsyncEnumerable<NetworkEndpointGroupList, NetworkEndpointGroup> response = networkEndpointGroupsClient.ListAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((NetworkEndpointGroup item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((NetworkEndpointGroupList page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (NetworkEndpointGroup item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<NetworkEndpointGroup> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (NetworkEndpointGroup item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListAsync(string, string, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<NetworkEndpointGroupList, NetworkEndpointGroup> ListAsync(string project, string zone, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Retrieves the list of network endpoint groups that are located in the specified project and zone.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where the network endpoint group is located. It should comply with RFC1035.

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

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)[NetworkEndpointGroupList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupList)[NetworkEndpointGroup](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroup)`

A pageable asynchronous sequence of [NetworkEndpointGroup](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroup) resources.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = await NetworkEndpointGroupsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string zone = "";
// Make the request
PagedAsyncEnumerable<NetworkEndpointGroupList, NetworkEndpointGroup> response = networkEndpointGroupsClient.ListAsync(project, zone);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((NetworkEndpointGroup item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((NetworkEndpointGroupList page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (NetworkEndpointGroup item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<NetworkEndpointGroup> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (NetworkEndpointGroup item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListNetworkEndpoints(ListNetworkEndpointsNetworkEndpointGroupsRequest, CallSettings)

```
public virtual PagedEnumerable<NetworkEndpointGroupsListNetworkEndpoints, NetworkEndpointWithHealthStatus> ListNetworkEndpoints(ListNetworkEndpointsNetworkEndpointGroupsRequest request, CallSettings callSettings = null)
```

Lists the network endpoints in the specified network endpoint group.

**Parameters**

**Name**

**Description**

`request`

`[ListNetworkEndpointsNetworkEndpointGroupsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.ListNetworkEndpointsNetworkEndpointGroupsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)[NetworkEndpointGroupsListNetworkEndpoints](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupsListNetworkEndpoints)[NetworkEndpointWithHealthStatus](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointWithHealthStatus)`

A pageable sequence of [NetworkEndpointWithHealthStatus](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointWithHealthStatus) resources.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = NetworkEndpointGroupsClient.Create();
// Initialize request argument(s)
ListNetworkEndpointsNetworkEndpointGroupsRequest request = new ListNetworkEndpointsNetworkEndpointGroupsRequest
{
    Zone = "",
    NetworkEndpointGroupsListEndpointsRequestResource = new NetworkEndpointGroupsListEndpointsRequest(),
    OrderBy = "",
    Project = "",
    Filter = "",
    NetworkEndpointGroup = "",
    ReturnPartialSuccess = false,
};
// Make the request
PagedEnumerable<NetworkEndpointGroupsListNetworkEndpoints, NetworkEndpointWithHealthStatus> response = networkEndpointGroupsClient.ListNetworkEndpoints(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (NetworkEndpointWithHealthStatus item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (NetworkEndpointGroupsListNetworkEndpoints page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (NetworkEndpointWithHealthStatus item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<NetworkEndpointWithHealthStatus> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (NetworkEndpointWithHealthStatus item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListNetworkEndpoints(string, string, string, NetworkEndpointGroupsListEndpointsRequest, string, int?, CallSettings)

```
public virtual PagedEnumerable<NetworkEndpointGroupsListNetworkEndpoints, NetworkEndpointWithHealthStatus> ListNetworkEndpoints(string project, string zone, string networkEndpointGroup, NetworkEndpointGroupsListEndpointsRequest networkEndpointGroupsListEndpointsRequestResource, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists the network endpoints in the specified network endpoint group.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where the network endpoint group is located. It should comply with RFC1035.

`networkEndpointGroup`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the network endpoint group from which you want to generate a list of included network endpoints. It should comply with RFC1035.

`networkEndpointGroupsListEndpointsRequestResource`

`[NetworkEndpointGroupsListEndpointsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupsListEndpointsRequest)`  

The body resource for this request

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

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)[NetworkEndpointGroupsListNetworkEndpoints](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupsListNetworkEndpoints)[NetworkEndpointWithHealthStatus](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointWithHealthStatus)`

A pageable sequence of [NetworkEndpointWithHealthStatus](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointWithHealthStatus) resources.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = NetworkEndpointGroupsClient.Create();
// Initialize request argument(s)
string project = "";
string zone = "";
string networkEndpointGroup = "";
NetworkEndpointGroupsListEndpointsRequest networkEndpointGroupsListEndpointsRequestResource = new NetworkEndpointGroupsListEndpointsRequest();
// Make the request
PagedEnumerable<NetworkEndpointGroupsListNetworkEndpoints, NetworkEndpointWithHealthStatus> response = networkEndpointGroupsClient.ListNetworkEndpoints(project, zone, networkEndpointGroup, networkEndpointGroupsListEndpointsRequestResource);

// Iterate over all response items, lazily performing RPCs as required
foreach (NetworkEndpointWithHealthStatus item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (NetworkEndpointGroupsListNetworkEndpoints page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (NetworkEndpointWithHealthStatus item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<NetworkEndpointWithHealthStatus> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (NetworkEndpointWithHealthStatus item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListNetworkEndpointsAsync(ListNetworkEndpointsNetworkEndpointGroupsRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<NetworkEndpointGroupsListNetworkEndpoints, NetworkEndpointWithHealthStatus> ListNetworkEndpointsAsync(ListNetworkEndpointsNetworkEndpointGroupsRequest request, CallSettings callSettings = null)
```

Lists the network endpoints in the specified network endpoint group.

**Parameters**

**Name**

**Description**

`request`

`[ListNetworkEndpointsNetworkEndpointGroupsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.ListNetworkEndpointsNetworkEndpointGroupsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)[NetworkEndpointGroupsListNetworkEndpoints](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupsListNetworkEndpoints)[NetworkEndpointWithHealthStatus](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointWithHealthStatus)`

A pageable asynchronous sequence of [NetworkEndpointWithHealthStatus](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointWithHealthStatus) resources.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = await NetworkEndpointGroupsClient.CreateAsync();
// Initialize request argument(s)
ListNetworkEndpointsNetworkEndpointGroupsRequest request = new ListNetworkEndpointsNetworkEndpointGroupsRequest
{
    Zone = "",
    NetworkEndpointGroupsListEndpointsRequestResource = new NetworkEndpointGroupsListEndpointsRequest(),
    OrderBy = "",
    Project = "",
    Filter = "",
    NetworkEndpointGroup = "",
    ReturnPartialSuccess = false,
};
// Make the request
PagedAsyncEnumerable<NetworkEndpointGroupsListNetworkEndpoints, NetworkEndpointWithHealthStatus> response = networkEndpointGroupsClient.ListNetworkEndpointsAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((NetworkEndpointWithHealthStatus item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((NetworkEndpointGroupsListNetworkEndpoints page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (NetworkEndpointWithHealthStatus item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<NetworkEndpointWithHealthStatus> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (NetworkEndpointWithHealthStatus item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListNetworkEndpointsAsync(string, string, string, NetworkEndpointGroupsListEndpointsRequest, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<NetworkEndpointGroupsListNetworkEndpoints, NetworkEndpointWithHealthStatus> ListNetworkEndpointsAsync(string project, string zone, string networkEndpointGroup, NetworkEndpointGroupsListEndpointsRequest networkEndpointGroupsListEndpointsRequestResource, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists the network endpoints in the specified network endpoint group.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone where the network endpoint group is located. It should comply with RFC1035.

`networkEndpointGroup`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the network endpoint group from which you want to generate a list of included network endpoints. It should comply with RFC1035.

`networkEndpointGroupsListEndpointsRequestResource`

`[NetworkEndpointGroupsListEndpointsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupsListEndpointsRequest)`  

The body resource for this request

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

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)[NetworkEndpointGroupsListNetworkEndpoints](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupsListNetworkEndpoints)[NetworkEndpointWithHealthStatus](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointWithHealthStatus)`

A pageable asynchronous sequence of [NetworkEndpointWithHealthStatus](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointWithHealthStatus) resources.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = await NetworkEndpointGroupsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string zone = "";
string networkEndpointGroup = "";
NetworkEndpointGroupsListEndpointsRequest networkEndpointGroupsListEndpointsRequestResource = new NetworkEndpointGroupsListEndpointsRequest();
// Make the request
PagedAsyncEnumerable<NetworkEndpointGroupsListNetworkEndpoints, NetworkEndpointWithHealthStatus> response = networkEndpointGroupsClient.ListNetworkEndpointsAsync(project, zone, networkEndpointGroup, networkEndpointGroupsListEndpointsRequestResource);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((NetworkEndpointWithHealthStatus item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((NetworkEndpointGroupsListNetworkEndpoints page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (NetworkEndpointWithHealthStatus item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<NetworkEndpointWithHealthStatus> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (NetworkEndpointWithHealthStatus item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### PollOnceAttachNetworkEndpoints(string, CallSettings)

```
public virtual Operation<Operation, Operation> PollOnceAttachNetworkEndpoints(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `AttachNetworkEndpoints`.

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

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)`

The result of polling the operation.

### PollOnceAttachNetworkEndpointsAsync(string, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> PollOnceAttachNetworkEndpointsAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `AttachNetworkEndpoints`.

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

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)`

A task representing the result of polling the operation.

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

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)`

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

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)`

A task representing the result of polling the operation.

### PollOnceDetachNetworkEndpoints(string, CallSettings)

```
public virtual Operation<Operation, Operation> PollOnceDetachNetworkEndpoints(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `DetachNetworkEndpoints`.

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

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)`

The result of polling the operation.

### PollOnceDetachNetworkEndpointsAsync(string, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> PollOnceDetachNetworkEndpointsAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `DetachNetworkEndpoints`.

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

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)`

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

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)`

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

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.Operation)`

A task representing the result of polling the operation.

### ShutdownDefaultChannelsAsync()

```
public static Task ShutdownDefaultChannelsAsync()
```

Shuts down any channels automatically created by [Create()](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupsClient#Google_Cloud_Compute_V1_NetworkEndpointGroupsClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupsClient#Google_Cloud_Compute_V1_NetworkEndpointGroupsClient_CreateAsync_System_Threading_CancellationToken_). Channels which weren't automatically created are not affected.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A task representing the asynchronous shutdown operation.

**Remarks**

After calling this method, further calls to [Create()](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupsClient#Google_Cloud_Compute_V1_NetworkEndpointGroupsClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.NetworkEndpointGroupsClient#Google_Cloud_Compute_V1_NetworkEndpointGroupsClient_CreateAsync_System_Threading_CancellationToken_) will create new channels, which could in turn be shut down by another call to this method.

### TestIamPermissions(TestIamPermissionsNetworkEndpointGroupRequest, CallSettings)

```
public virtual TestPermissionsResponse TestIamPermissions(TestIamPermissionsNetworkEndpointGroupRequest request, CallSettings callSettings = null)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsNetworkEndpointGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.TestIamPermissionsNetworkEndpointGroupRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.TestPermissionsResponse)`

The RPC response.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = NetworkEndpointGroupsClient.Create();
// Initialize request argument(s)
TestIamPermissionsNetworkEndpointGroupRequest request = new TestIamPermissionsNetworkEndpointGroupRequest
{
    Zone = "",
    Resource = "",
    Project = "",
    TestPermissionsRequestResource = new TestPermissionsRequest(),
};
// Make the request
TestPermissionsResponse response = networkEndpointGroupsClient.TestIamPermissions(request);
```

### TestIamPermissions(string, string, string, TestPermissionsRequest, CallSettings)

```
public virtual TestPermissionsResponse TestIamPermissions(string project, string zone, string resource, TestPermissionsRequest testPermissionsRequestResource, CallSettings callSettings = null)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone for this request.

`resource`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name or id of the resource for this request.

`testPermissionsRequestResource`

`[TestPermissionsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.TestPermissionsRequest)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.TestPermissionsResponse)`

The RPC response.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = NetworkEndpointGroupsClient.Create();
// Initialize request argument(s)
string project = "";
string zone = "";
string resource = "";
TestPermissionsRequest testPermissionsRequestResource = new TestPermissionsRequest();
// Make the request
TestPermissionsResponse response = networkEndpointGroupsClient.TestIamPermissions(project, zone, resource, testPermissionsRequestResource);
```

### TestIamPermissionsAsync(TestIamPermissionsNetworkEndpointGroupRequest, CallSettings)

```
public virtual Task<TestPermissionsResponse> TestIamPermissionsAsync(TestIamPermissionsNetworkEndpointGroupRequest request, CallSettings callSettings = null)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsNetworkEndpointGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.TestIamPermissionsNetworkEndpointGroupRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.TestPermissionsResponse)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = await NetworkEndpointGroupsClient.CreateAsync();
// Initialize request argument(s)
TestIamPermissionsNetworkEndpointGroupRequest request = new TestIamPermissionsNetworkEndpointGroupRequest
{
    Zone = "",
    Resource = "",
    Project = "",
    TestPermissionsRequestResource = new TestPermissionsRequest(),
};
// Make the request
TestPermissionsResponse response = await networkEndpointGroupsClient.TestIamPermissionsAsync(request);
```

### TestIamPermissionsAsync(TestIamPermissionsNetworkEndpointGroupRequest, CancellationToken)

```
public virtual Task<TestPermissionsResponse> TestIamPermissionsAsync(TestIamPermissionsNetworkEndpointGroupRequest request, CancellationToken cancellationToken)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsNetworkEndpointGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.TestIamPermissionsNetworkEndpointGroupRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.TestPermissionsResponse)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = await NetworkEndpointGroupsClient.CreateAsync();
// Initialize request argument(s)
TestIamPermissionsNetworkEndpointGroupRequest request = new TestIamPermissionsNetworkEndpointGroupRequest
{
    Zone = "",
    Resource = "",
    Project = "",
    TestPermissionsRequestResource = new TestPermissionsRequest(),
};
// Make the request
TestPermissionsResponse response = await networkEndpointGroupsClient.TestIamPermissionsAsync(request);
```

### TestIamPermissionsAsync(string, string, string, TestPermissionsRequest, CallSettings)

```
public virtual Task<TestPermissionsResponse> TestIamPermissionsAsync(string project, string zone, string resource, TestPermissionsRequest testPermissionsRequestResource, CallSettings callSettings = null)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone for this request.

`resource`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name or id of the resource for this request.

`testPermissionsRequestResource`

`[TestPermissionsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.TestPermissionsRequest)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.TestPermissionsResponse)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = await NetworkEndpointGroupsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string zone = "";
string resource = "";
TestPermissionsRequest testPermissionsRequestResource = new TestPermissionsRequest();
// Make the request
TestPermissionsResponse response = await networkEndpointGroupsClient.TestIamPermissionsAsync(project, zone, resource, testPermissionsRequestResource);
```

### TestIamPermissionsAsync(string, string, string, TestPermissionsRequest, CancellationToken)

```
public virtual Task<TestPermissionsResponse> TestIamPermissionsAsync(string project, string zone, string resource, TestPermissionsRequest testPermissionsRequestResource, CancellationToken cancellationToken)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone for this request.

`resource`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name or id of the resource for this request.

`testPermissionsRequestResource`

`[TestPermissionsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.TestPermissionsRequest)`  

The body resource for this request

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.1.0/Google.Cloud.Compute.V1.TestPermissionsResponse)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkEndpointGroupsClient networkEndpointGroupsClient = await NetworkEndpointGroupsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string zone = "";
string resource = "";
TestPermissionsRequest testPermissionsRequestResource = new TestPermissionsRequest();
// Make the request
TestPermissionsResponse response = await networkEndpointGroupsClient.TestIamPermissionsAsync(project, zone, resource, testPermissionsRequestResource);
```

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
