-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class NodeTypesClient (2.12.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public abstract class NodeTypesClient
```

Reference documentation and code samples for the Compute Engine v1 API class NodeTypesClient.

NodeTypes client wrapper, for convenient use.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> NodeTypesClient

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Derived Types

[NodeTypesClientImpl](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeTypesClientImpl)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Remarks

The NodeTypes API.

## Properties

### DefaultEndpoint

```
public static string DefaultEndpoint { get; }
```

The default endpoint for the NodeTypes service, which is a host of "compute.googleapis.com" and a port of 443.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### DefaultScopes

```
public static IReadOnlyList<string> DefaultScopes { get; }
```

The default NodeTypes scopes.

**Property Value**

**Type**

**Description**

`[IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)[string](https://learn.microsoft.com/dotnet/api/system.string)`

**Remarks**

The default NodeTypes scopes are:

-   [https://www.googleapis.com/auth/compute.readonly](https://www.googleapis.com/auth/compute.readonly)
-   [https://www.googleapis.com/auth/compute](https://www.googleapis.com/auth/compute)
-   [https://www.googleapis.com/auth/cloud-platform](https://www.googleapis.com/auth/cloud-platform)

### GrpcClient

```
public virtual NodeTypes.NodeTypesClient GrpcClient { get; }
```

The underlying gRPC NodeTypes client

**Property Value**

**Type**

**Description**

`[NodeTypes](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeTypes)[NodeTypesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeTypes.NodeTypesClient)`

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

### AggregatedList(AggregatedListNodeTypesRequest, CallSettings)

```
public virtual PagedEnumerable<NodeTypeAggregatedList, KeyValuePair<string, NodeTypesScopedList>> AggregatedList(AggregatedListNodeTypesRequest request, CallSettings callSettings = null)
```

Retrieves an aggregated list of node types.

**Parameters**

**Name**

**Description**

`request`

`[AggregatedListNodeTypesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.AggregatedListNodeTypesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/PagedEnumerable.cs)[NodeTypeAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeTypeAggregatedList)[KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2)[string](https://learn.microsoft.com/dotnet/api/system.string)[NodeTypesScopedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeTypesScopedList)`

A pageable sequence of [KeyValuePair<TKey, TValue>](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2) resources.

**Example**

```
// Create client
NodeTypesClient nodeTypesClient = NodeTypesClient.Create();
// Initialize request argument(s)
AggregatedListNodeTypesRequest request = new AggregatedListNodeTypesRequest
{
    OrderBy = "",
    Project = "",
    ServiceProjectNumber = 0L,
    Filter = "",
    IncludeAllScopes = false,
    ReturnPartialSuccess = false,
};
// Make the request
PagedEnumerable<NodeTypeAggregatedList, KeyValuePair<string, NodeTypesScopedList>> response = nodeTypesClient.AggregatedList(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (KeyValuePair<string, NodeTypesScopedList> item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (NodeTypeAggregatedList page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (KeyValuePair<string, NodeTypesScopedList> item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<KeyValuePair<string, NodeTypesScopedList>> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (KeyValuePair<string, NodeTypesScopedList> item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### AggregatedList(string, string, int?, CallSettings)

```
public virtual PagedEnumerable<NodeTypeAggregatedList, KeyValuePair<string, NodeTypesScopedList>> AggregatedList(string project, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Retrieves an aggregated list of node types.

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

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/PagedEnumerable.cs)[NodeTypeAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeTypeAggregatedList)[KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2)[string](https://learn.microsoft.com/dotnet/api/system.string)[NodeTypesScopedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeTypesScopedList)`

A pageable sequence of [KeyValuePair<TKey, TValue>](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2) resources.

**Example**

```
// Create client
NodeTypesClient nodeTypesClient = NodeTypesClient.Create();
// Initialize request argument(s)
string project = "";
// Make the request
PagedEnumerable<NodeTypeAggregatedList, KeyValuePair<string, NodeTypesScopedList>> response = nodeTypesClient.AggregatedList(project);

// Iterate over all response items, lazily performing RPCs as required
foreach (KeyValuePair<string, NodeTypesScopedList> item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (NodeTypeAggregatedList page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (KeyValuePair<string, NodeTypesScopedList> item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<KeyValuePair<string, NodeTypesScopedList>> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (KeyValuePair<string, NodeTypesScopedList> item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### AggregatedListAsync(AggregatedListNodeTypesRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<NodeTypeAggregatedList, KeyValuePair<string, NodeTypesScopedList>> AggregatedListAsync(AggregatedListNodeTypesRequest request, CallSettings callSettings = null)
```

Retrieves an aggregated list of node types.

**Parameters**

**Name**

**Description**

`request`

`[AggregatedListNodeTypesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.AggregatedListNodeTypesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/PagedAsyncEnumerable.cs)[NodeTypeAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeTypeAggregatedList)[KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2)[string](https://learn.microsoft.com/dotnet/api/system.string)[NodeTypesScopedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeTypesScopedList)`

A pageable asynchronous sequence of [KeyValuePair<TKey, TValue>](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2) resources.

**Example**

```
// Create client
NodeTypesClient nodeTypesClient = await NodeTypesClient.CreateAsync();
// Initialize request argument(s)
AggregatedListNodeTypesRequest request = new AggregatedListNodeTypesRequest
{
    OrderBy = "",
    Project = "",
    ServiceProjectNumber = 0L,
    Filter = "",
    IncludeAllScopes = false,
    ReturnPartialSuccess = false,
};
// Make the request
PagedAsyncEnumerable<NodeTypeAggregatedList, KeyValuePair<string, NodeTypesScopedList>> response = nodeTypesClient.AggregatedListAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((KeyValuePair<string, NodeTypesScopedList> item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((NodeTypeAggregatedList page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (KeyValuePair<string, NodeTypesScopedList> item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<KeyValuePair<string, NodeTypesScopedList>> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (KeyValuePair<string, NodeTypesScopedList> item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### AggregatedListAsync(string, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<NodeTypeAggregatedList, KeyValuePair<string, NodeTypesScopedList>> AggregatedListAsync(string project, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Retrieves an aggregated list of node types.

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

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/PagedAsyncEnumerable.cs)[NodeTypeAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeTypeAggregatedList)[KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2)[string](https://learn.microsoft.com/dotnet/api/system.string)[NodeTypesScopedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeTypesScopedList)`

A pageable asynchronous sequence of [KeyValuePair<TKey, TValue>](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2) resources.

**Example**

```
// Create client
NodeTypesClient nodeTypesClient = await NodeTypesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
// Make the request
PagedAsyncEnumerable<NodeTypeAggregatedList, KeyValuePair<string, NodeTypesScopedList>> response = nodeTypesClient.AggregatedListAsync(project);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((KeyValuePair<string, NodeTypesScopedList> item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((NodeTypeAggregatedList page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (KeyValuePair<string, NodeTypesScopedList> item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<KeyValuePair<string, NodeTypesScopedList>> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (KeyValuePair<string, NodeTypesScopedList> item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### Create()

```
public static NodeTypesClient Create()
```

Synchronously creates a [NodeTypesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeTypesClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [NodeTypesClientBuilder](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeTypesClientBuilder).

**Returns**

**Type**

**Description**

`[NodeTypesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeTypesClient)`

The created [NodeTypesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeTypesClient).

### CreateAsync(CancellationToken)

```
public static Task<NodeTypesClient> CreateAsync(CancellationToken cancellationToken = default)
```

Asynchronously creates a [NodeTypesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeTypesClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [NodeTypesClientBuilder](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeTypesClientBuilder).

**Parameter**

**Name**

**Description**

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

The [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use while creating the client.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[NodeTypesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeTypesClient)`

The task representing the created [NodeTypesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeTypesClient).

### Get(GetNodeTypeRequest, CallSettings)

```
public virtual NodeType Get(GetNodeTypeRequest request, CallSettings callSettings = null)
```

Returns the specified node type.

**Parameters**

**Name**

**Description**

`request`

`[GetNodeTypeRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.GetNodeTypeRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[NodeType](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeType)`

The RPC response.

**Example**

```
// Create client
NodeTypesClient nodeTypesClient = NodeTypesClient.Create();
// Initialize request argument(s)
GetNodeTypeRequest request = new GetNodeTypeRequest
{
    Zone = "",
    Project = "",
    NodeType = "",
};
// Make the request
NodeType response = nodeTypesClient.Get(request);
```

### Get(string, string, string, CallSettings)

```
public virtual NodeType Get(string project, string zone, string nodeType, CallSettings callSettings = null)
```

Returns the specified node type.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone for this request.

`nodeType`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the node type to return.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[NodeType](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeType)`

The RPC response.

**Example**

```
// Create client
NodeTypesClient nodeTypesClient = NodeTypesClient.Create();
// Initialize request argument(s)
string project = "";
string zone = "";
string nodeType = "";
// Make the request
NodeType response = nodeTypesClient.Get(project, zone, nodeType);
```

### GetAsync(GetNodeTypeRequest, CallSettings)

```
public virtual Task<NodeType> GetAsync(GetNodeTypeRequest request, CallSettings callSettings = null)
```

Returns the specified node type.

**Parameters**

**Name**

**Description**

`request`

`[GetNodeTypeRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.GetNodeTypeRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[NodeType](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeType)`

A Task containing the RPC response.

**Example**

```
// Create client
NodeTypesClient nodeTypesClient = await NodeTypesClient.CreateAsync();
// Initialize request argument(s)
GetNodeTypeRequest request = new GetNodeTypeRequest
{
    Zone = "",
    Project = "",
    NodeType = "",
};
// Make the request
NodeType response = await nodeTypesClient.GetAsync(request);
```

### GetAsync(GetNodeTypeRequest, CancellationToken)

```
public virtual Task<NodeType> GetAsync(GetNodeTypeRequest request, CancellationToken cancellationToken)
```

Returns the specified node type.

**Parameters**

**Name**

**Description**

`request`

`[GetNodeTypeRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.GetNodeTypeRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[NodeType](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeType)`

A Task containing the RPC response.

**Example**

```
// Create client
NodeTypesClient nodeTypesClient = await NodeTypesClient.CreateAsync();
// Initialize request argument(s)
GetNodeTypeRequest request = new GetNodeTypeRequest
{
    Zone = "",
    Project = "",
    NodeType = "",
};
// Make the request
NodeType response = await nodeTypesClient.GetAsync(request);
```

### GetAsync(string, string, string, CallSettings)

```
public virtual Task<NodeType> GetAsync(string project, string zone, string nodeType, CallSettings callSettings = null)
```

Returns the specified node type.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone for this request.

`nodeType`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the node type to return.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[NodeType](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeType)`

A Task containing the RPC response.

**Example**

```
// Create client
NodeTypesClient nodeTypesClient = await NodeTypesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string zone = "";
string nodeType = "";
// Make the request
NodeType response = await nodeTypesClient.GetAsync(project, zone, nodeType);
```

### GetAsync(string, string, string, CancellationToken)

```
public virtual Task<NodeType> GetAsync(string project, string zone, string nodeType, CancellationToken cancellationToken)
```

Returns the specified node type.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone for this request.

`nodeType`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the node type to return.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[NodeType](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeType)`

A Task containing the RPC response.

**Example**

```
// Create client
NodeTypesClient nodeTypesClient = await NodeTypesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string zone = "";
string nodeType = "";
// Make the request
NodeType response = await nodeTypesClient.GetAsync(project, zone, nodeType);
```

### List(ListNodeTypesRequest, CallSettings)

```
public virtual PagedEnumerable<NodeTypeList, NodeType> List(ListNodeTypesRequest request, CallSettings callSettings = null)
```

Retrieves a list of node types available to the specified project.

**Parameters**

**Name**

**Description**

`request`

`[ListNodeTypesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.ListNodeTypesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/PagedEnumerable.cs)[NodeTypeList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeTypeList)[NodeType](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeType)`

A pageable sequence of [NodeType](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeType) resources.

**Example**

```
// Create client
NodeTypesClient nodeTypesClient = NodeTypesClient.Create();
// Initialize request argument(s)
ListNodeTypesRequest request = new ListNodeTypesRequest
{
    Zone = "",
    OrderBy = "",
    Project = "",
    Filter = "",
    ReturnPartialSuccess = false,
};
// Make the request
PagedEnumerable<NodeTypeList, NodeType> response = nodeTypesClient.List(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (NodeType item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (NodeTypeList page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (NodeType item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<NodeType> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (NodeType item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### List(string, string, string, int?, CallSettings)

```
public virtual PagedEnumerable<NodeTypeList, NodeType> List(string project, string zone, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Retrieves a list of node types available to the specified project.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone for this request.

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

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/PagedEnumerable.cs)[NodeTypeList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeTypeList)[NodeType](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeType)`

A pageable sequence of [NodeType](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeType) resources.

**Example**

```
// Create client
NodeTypesClient nodeTypesClient = NodeTypesClient.Create();
// Initialize request argument(s)
string project = "";
string zone = "";
// Make the request
PagedEnumerable<NodeTypeList, NodeType> response = nodeTypesClient.List(project, zone);

// Iterate over all response items, lazily performing RPCs as required
foreach (NodeType item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (NodeTypeList page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (NodeType item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<NodeType> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (NodeType item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListAsync(ListNodeTypesRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<NodeTypeList, NodeType> ListAsync(ListNodeTypesRequest request, CallSettings callSettings = null)
```

Retrieves a list of node types available to the specified project.

**Parameters**

**Name**

**Description**

`request`

`[ListNodeTypesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.ListNodeTypesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/PagedAsyncEnumerable.cs)[NodeTypeList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeTypeList)[NodeType](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeType)`

A pageable asynchronous sequence of [NodeType](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeType) resources.

**Example**

```
// Create client
NodeTypesClient nodeTypesClient = await NodeTypesClient.CreateAsync();
// Initialize request argument(s)
ListNodeTypesRequest request = new ListNodeTypesRequest
{
    Zone = "",
    OrderBy = "",
    Project = "",
    Filter = "",
    ReturnPartialSuccess = false,
};
// Make the request
PagedAsyncEnumerable<NodeTypeList, NodeType> response = nodeTypesClient.ListAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((NodeType item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((NodeTypeList page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (NodeType item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<NodeType> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (NodeType item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListAsync(string, string, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<NodeTypeList, NodeType> ListAsync(string project, string zone, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Retrieves a list of node types available to the specified project.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the zone for this request.

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

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/PagedAsyncEnumerable.cs)[NodeTypeList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeTypeList)[NodeType](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeType)`

A pageable asynchronous sequence of [NodeType](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeType) resources.

**Example**

```
// Create client
NodeTypesClient nodeTypesClient = await NodeTypesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string zone = "";
// Make the request
PagedAsyncEnumerable<NodeTypeList, NodeType> response = nodeTypesClient.ListAsync(project, zone);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((NodeType item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((NodeTypeList page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (NodeType item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<NodeType> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (NodeType item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ShutdownDefaultChannelsAsync()

```
public static Task ShutdownDefaultChannelsAsync()
```

Shuts down any channels automatically created by [Create()](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeTypesClient#Google_Cloud_Compute_V1_NodeTypesClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeTypesClient#Google_Cloud_Compute_V1_NodeTypesClient_CreateAsync_System_Threading_CancellationToken_). Channels which weren't automatically created are not affected.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A task representing the asynchronous shutdown operation.

**Remarks**

After calling this method, further calls to [Create()](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeTypesClient#Google_Cloud_Compute_V1_NodeTypesClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.NodeTypesClient#Google_Cloud_Compute_V1_NodeTypesClient_CreateAsync_System_Threading_CancellationToken_) will create new channels, which could in turn be shut down by another call to this method.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
