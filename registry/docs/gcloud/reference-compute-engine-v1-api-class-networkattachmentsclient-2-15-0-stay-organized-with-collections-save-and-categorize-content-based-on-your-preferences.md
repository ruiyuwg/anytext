-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class NetworkAttachmentsClient (2.15.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public abstract class NetworkAttachmentsClient
```

Reference documentation and code samples for the Compute Engine v1 API class NetworkAttachmentsClient.

NetworkAttachments client wrapper, for convenient use.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> NetworkAttachmentsClient

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Derived Types

[NetworkAttachmentsClientImpl](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachmentsClientImpl)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Remarks

The NetworkAttachments API.

## Properties

### DefaultEndpoint

```
public static string DefaultEndpoint { get; }
```

The default endpoint for the NetworkAttachments service, which is a host of "compute.googleapis.com" and a port of 443.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### DefaultScopes

```
public static IReadOnlyList<string> DefaultScopes { get; }
```

The default NetworkAttachments scopes.

**Property Value**

**Type**

**Description**

`[IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)[string](https://learn.microsoft.com/dotnet/api/system.string)`

**Remarks**

The default NetworkAttachments scopes are:

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

`[OperationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/OperationsClient.g.cs)`

### GrpcClient

```
public virtual NetworkAttachments.NetworkAttachmentsClient GrpcClient { get; }
```

The underlying gRPC NetworkAttachments client

**Property Value**

**Type**

**Description**

`[NetworkAttachments](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachments)[NetworkAttachmentsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachments.NetworkAttachmentsClient)`

### InsertOperationsClient

```
public virtual OperationsClient InsertOperationsClient { get; }
```

The long-running operations client for `Insert`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/OperationsClient.g.cs)`

### PatchOperationsClient

```
public virtual OperationsClient PatchOperationsClient { get; }
```

The long-running operations client for `Patch`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/OperationsClient.g.cs)`

### ServiceMetadata

```
public static ServiceMetadata ServiceMetadata { get; }
```

The service metadata associated with this client type.

**Property Value**

**Type**

**Description**

`[ServiceMetadata](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/ServiceMetadata.cs)`

## Methods

### AggregatedList(AggregatedListNetworkAttachmentsRequest, CallSettings)

```
public virtual PagedEnumerable<NetworkAttachmentAggregatedList, KeyValuePair<string, NetworkAttachmentsScopedList>> AggregatedList(AggregatedListNetworkAttachmentsRequest request, CallSettings callSettings = null)
```

Retrieves the list of all NetworkAttachment resources, regional and global, available to the specified project. To prevent failure, Google recommends that you set the `returnPartialSuccess` parameter to `true`.

**Parameters**

**Name**

**Description**

`request`

`[AggregatedListNetworkAttachmentsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.AggregatedListNetworkAttachmentsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[NetworkAttachmentAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachmentAggregatedList)[KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2)[string](https://learn.microsoft.com/dotnet/api/system.string)[NetworkAttachmentsScopedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachmentsScopedList)`

A pageable sequence of [KeyValuePair<TKey, TValue>](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2) resources.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = NetworkAttachmentsClient.Create();
// Initialize request argument(s)
AggregatedListNetworkAttachmentsRequest request = new AggregatedListNetworkAttachmentsRequest
{
    OrderBy = "",
    Project = "",
    ServiceProjectNumber = 0L,
    Filter = "",
    IncludeAllScopes = false,
    ReturnPartialSuccess = false,
};
// Make the request
PagedEnumerable<NetworkAttachmentAggregatedList, KeyValuePair<string, NetworkAttachmentsScopedList>> response = networkAttachmentsClient.AggregatedList(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (KeyValuePair<string, NetworkAttachmentsScopedList> item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (NetworkAttachmentAggregatedList page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (KeyValuePair<string, NetworkAttachmentsScopedList> item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<KeyValuePair<string, NetworkAttachmentsScopedList>> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (KeyValuePair<string, NetworkAttachmentsScopedList> item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### AggregatedList(string, string, int?, CallSettings)

```
public virtual PagedEnumerable<NetworkAttachmentAggregatedList, KeyValuePair<string, NetworkAttachmentsScopedList>> AggregatedList(string project, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Retrieves the list of all NetworkAttachment resources, regional and global, available to the specified project. To prevent failure, Google recommends that you set the `returnPartialSuccess` parameter to `true`.

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

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[NetworkAttachmentAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachmentAggregatedList)[KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2)[string](https://learn.microsoft.com/dotnet/api/system.string)[NetworkAttachmentsScopedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachmentsScopedList)`

A pageable sequence of [KeyValuePair<TKey, TValue>](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2) resources.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = NetworkAttachmentsClient.Create();
// Initialize request argument(s)
string project = "";
// Make the request
PagedEnumerable<NetworkAttachmentAggregatedList, KeyValuePair<string, NetworkAttachmentsScopedList>> response = networkAttachmentsClient.AggregatedList(project);

// Iterate over all response items, lazily performing RPCs as required
foreach (KeyValuePair<string, NetworkAttachmentsScopedList> item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (NetworkAttachmentAggregatedList page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (KeyValuePair<string, NetworkAttachmentsScopedList> item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<KeyValuePair<string, NetworkAttachmentsScopedList>> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (KeyValuePair<string, NetworkAttachmentsScopedList> item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### AggregatedListAsync(AggregatedListNetworkAttachmentsRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<NetworkAttachmentAggregatedList, KeyValuePair<string, NetworkAttachmentsScopedList>> AggregatedListAsync(AggregatedListNetworkAttachmentsRequest request, CallSettings callSettings = null)
```

Retrieves the list of all NetworkAttachment resources, regional and global, available to the specified project. To prevent failure, Google recommends that you set the `returnPartialSuccess` parameter to `true`.

**Parameters**

**Name**

**Description**

`request`

`[AggregatedListNetworkAttachmentsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.AggregatedListNetworkAttachmentsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[NetworkAttachmentAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachmentAggregatedList)[KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2)[string](https://learn.microsoft.com/dotnet/api/system.string)[NetworkAttachmentsScopedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachmentsScopedList)`

A pageable asynchronous sequence of [KeyValuePair<TKey, TValue>](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2) resources.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = await NetworkAttachmentsClient.CreateAsync();
// Initialize request argument(s)
AggregatedListNetworkAttachmentsRequest request = new AggregatedListNetworkAttachmentsRequest
{
    OrderBy = "",
    Project = "",
    ServiceProjectNumber = 0L,
    Filter = "",
    IncludeAllScopes = false,
    ReturnPartialSuccess = false,
};
// Make the request
PagedAsyncEnumerable<NetworkAttachmentAggregatedList, KeyValuePair<string, NetworkAttachmentsScopedList>> response = networkAttachmentsClient.AggregatedListAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((KeyValuePair<string, NetworkAttachmentsScopedList> item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((NetworkAttachmentAggregatedList page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (KeyValuePair<string, NetworkAttachmentsScopedList> item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<KeyValuePair<string, NetworkAttachmentsScopedList>> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (KeyValuePair<string, NetworkAttachmentsScopedList> item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### AggregatedListAsync(string, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<NetworkAttachmentAggregatedList, KeyValuePair<string, NetworkAttachmentsScopedList>> AggregatedListAsync(string project, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Retrieves the list of all NetworkAttachment resources, regional and global, available to the specified project. To prevent failure, Google recommends that you set the `returnPartialSuccess` parameter to `true`.

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

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[NetworkAttachmentAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachmentAggregatedList)[KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2)[string](https://learn.microsoft.com/dotnet/api/system.string)[NetworkAttachmentsScopedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachmentsScopedList)`

A pageable asynchronous sequence of [KeyValuePair<TKey, TValue>](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2) resources.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = await NetworkAttachmentsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
// Make the request
PagedAsyncEnumerable<NetworkAttachmentAggregatedList, KeyValuePair<string, NetworkAttachmentsScopedList>> response = networkAttachmentsClient.AggregatedListAsync(project);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((KeyValuePair<string, NetworkAttachmentsScopedList> item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((NetworkAttachmentAggregatedList page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (KeyValuePair<string, NetworkAttachmentsScopedList> item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<KeyValuePair<string, NetworkAttachmentsScopedList>> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (KeyValuePair<string, NetworkAttachmentsScopedList> item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### Create()

```
public static NetworkAttachmentsClient Create()
```

Synchronously creates a [NetworkAttachmentsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachmentsClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [NetworkAttachmentsClientBuilder](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachmentsClientBuilder) .

**Returns**

**Type**

**Description**

`[NetworkAttachmentsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachmentsClient)`

The created [NetworkAttachmentsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachmentsClient).

### CreateAsync(CancellationToken)

```
public static Task<NetworkAttachmentsClient> CreateAsync(CancellationToken cancellationToken = default)
```

Asynchronously creates a [NetworkAttachmentsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachmentsClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [NetworkAttachmentsClientBuilder](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachmentsClientBuilder) .

**Parameter**

**Name**

**Description**

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

The [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use while creating the client.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[NetworkAttachmentsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachmentsClient)`

The task representing the created [NetworkAttachmentsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachmentsClient).

### Delete(DeleteNetworkAttachmentRequest, CallSettings)

```
public virtual Operation<Operation, Operation> Delete(DeleteNetworkAttachmentRequest request, CallSettings callSettings = null)
```

Deletes the specified NetworkAttachment in the given scope

**Parameters**

**Name**

**Description**

`request`

`[DeleteNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.DeleteNetworkAttachmentRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)`

The RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = NetworkAttachmentsClient.Create();
// Initialize request argument(s)
DeleteNetworkAttachmentRequest request = new DeleteNetworkAttachmentRequest
{
    RequestId = "",
    Region = "",
    NetworkAttachment = "",
    Project = "",
};
// Make the request
lro::Operation<Operation, Operation> response = networkAttachmentsClient.Delete(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = networkAttachmentsClient.PollOnceDelete(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### Delete(string, string, string, CallSettings)

```
public virtual Operation<Operation, Operation> Delete(string project, string region, string networkAttachment, CallSettings callSettings = null)
```

Deletes the specified NetworkAttachment in the given scope

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the region of this request.

`networkAttachment`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the NetworkAttachment resource to delete.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)`

The RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = NetworkAttachmentsClient.Create();
// Initialize request argument(s)
string project = "";
string region = "";
string networkAttachment = "";
// Make the request
lro::Operation<Operation, Operation> response = networkAttachmentsClient.Delete(project, region, networkAttachment);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = networkAttachmentsClient.PollOnceDelete(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DeleteAsync(DeleteNetworkAttachmentRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> DeleteAsync(DeleteNetworkAttachmentRequest request, CallSettings callSettings = null)
```

Deletes the specified NetworkAttachment in the given scope

**Parameters**

**Name**

**Description**

`request`

`[DeleteNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.DeleteNetworkAttachmentRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = await NetworkAttachmentsClient.CreateAsync();
// Initialize request argument(s)
DeleteNetworkAttachmentRequest request = new DeleteNetworkAttachmentRequest
{
    RequestId = "",
    Region = "",
    NetworkAttachment = "",
    Project = "",
};
// Make the request
lro::Operation<Operation, Operation> response = await networkAttachmentsClient.DeleteAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await networkAttachmentsClient.PollOnceDeleteAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DeleteAsync(DeleteNetworkAttachmentRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> DeleteAsync(DeleteNetworkAttachmentRequest request, CancellationToken cancellationToken)
```

Deletes the specified NetworkAttachment in the given scope

**Parameters**

**Name**

**Description**

`request`

`[DeleteNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.DeleteNetworkAttachmentRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = await NetworkAttachmentsClient.CreateAsync();
// Initialize request argument(s)
DeleteNetworkAttachmentRequest request = new DeleteNetworkAttachmentRequest
{
    RequestId = "",
    Region = "",
    NetworkAttachment = "",
    Project = "",
};
// Make the request
lro::Operation<Operation, Operation> response = await networkAttachmentsClient.DeleteAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await networkAttachmentsClient.PollOnceDeleteAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DeleteAsync(string, string, string, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> DeleteAsync(string project, string region, string networkAttachment, CallSettings callSettings = null)
```

Deletes the specified NetworkAttachment in the given scope

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the region of this request.

`networkAttachment`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the NetworkAttachment resource to delete.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = await NetworkAttachmentsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string region = "";
string networkAttachment = "";
// Make the request
lro::Operation<Operation, Operation> response = await networkAttachmentsClient.DeleteAsync(project, region, networkAttachment);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await networkAttachmentsClient.PollOnceDeleteAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DeleteAsync(string, string, string, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> DeleteAsync(string project, string region, string networkAttachment, CancellationToken cancellationToken)
```

Deletes the specified NetworkAttachment in the given scope

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the region of this request.

`networkAttachment`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the NetworkAttachment resource to delete.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = await NetworkAttachmentsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string region = "";
string networkAttachment = "";
// Make the request
lro::Operation<Operation, Operation> response = await networkAttachmentsClient.DeleteAsync(project, region, networkAttachment);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await networkAttachmentsClient.PollOnceDeleteAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### Get(GetNetworkAttachmentRequest, CallSettings)

```
public virtual NetworkAttachment Get(GetNetworkAttachmentRequest request, CallSettings callSettings = null)
```

Returns the specified NetworkAttachment resource in the given scope.

**Parameters**

**Name**

**Description**

`request`

`[GetNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.GetNetworkAttachmentRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[NetworkAttachment](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachment)`

The RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = NetworkAttachmentsClient.Create();
// Initialize request argument(s)
GetNetworkAttachmentRequest request = new GetNetworkAttachmentRequest
{
    Region = "",
    NetworkAttachment = "",
    Project = "",
};
// Make the request
NetworkAttachment response = networkAttachmentsClient.Get(request);
```

### Get(string, string, string, CallSettings)

```
public virtual NetworkAttachment Get(string project, string region, string networkAttachment, CallSettings callSettings = null)
```

Returns the specified NetworkAttachment resource in the given scope.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the region of this request.

`networkAttachment`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the NetworkAttachment resource to return.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[NetworkAttachment](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachment)`

The RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = NetworkAttachmentsClient.Create();
// Initialize request argument(s)
string project = "";
string region = "";
string networkAttachment = "";
// Make the request
NetworkAttachment response = networkAttachmentsClient.Get(project, region, networkAttachment);
```

### GetAsync(GetNetworkAttachmentRequest, CallSettings)

```
public virtual Task<NetworkAttachment> GetAsync(GetNetworkAttachmentRequest request, CallSettings callSettings = null)
```

Returns the specified NetworkAttachment resource in the given scope.

**Parameters**

**Name**

**Description**

`request`

`[GetNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.GetNetworkAttachmentRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[NetworkAttachment](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachment)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = await NetworkAttachmentsClient.CreateAsync();
// Initialize request argument(s)
GetNetworkAttachmentRequest request = new GetNetworkAttachmentRequest
{
    Region = "",
    NetworkAttachment = "",
    Project = "",
};
// Make the request
NetworkAttachment response = await networkAttachmentsClient.GetAsync(request);
```

### GetAsync(GetNetworkAttachmentRequest, CancellationToken)

```
public virtual Task<NetworkAttachment> GetAsync(GetNetworkAttachmentRequest request, CancellationToken cancellationToken)
```

Returns the specified NetworkAttachment resource in the given scope.

**Parameters**

**Name**

**Description**

`request`

`[GetNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.GetNetworkAttachmentRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[NetworkAttachment](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachment)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = await NetworkAttachmentsClient.CreateAsync();
// Initialize request argument(s)
GetNetworkAttachmentRequest request = new GetNetworkAttachmentRequest
{
    Region = "",
    NetworkAttachment = "",
    Project = "",
};
// Make the request
NetworkAttachment response = await networkAttachmentsClient.GetAsync(request);
```

### GetAsync(string, string, string, CallSettings)

```
public virtual Task<NetworkAttachment> GetAsync(string project, string region, string networkAttachment, CallSettings callSettings = null)
```

Returns the specified NetworkAttachment resource in the given scope.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the region of this request.

`networkAttachment`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the NetworkAttachment resource to return.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[NetworkAttachment](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachment)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = await NetworkAttachmentsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string region = "";
string networkAttachment = "";
// Make the request
NetworkAttachment response = await networkAttachmentsClient.GetAsync(project, region, networkAttachment);
```

### GetAsync(string, string, string, CancellationToken)

```
public virtual Task<NetworkAttachment> GetAsync(string project, string region, string networkAttachment, CancellationToken cancellationToken)
```

Returns the specified NetworkAttachment resource in the given scope.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the region of this request.

`networkAttachment`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the NetworkAttachment resource to return.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[NetworkAttachment](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachment)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = await NetworkAttachmentsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string region = "";
string networkAttachment = "";
// Make the request
NetworkAttachment response = await networkAttachmentsClient.GetAsync(project, region, networkAttachment);
```

### GetIamPolicy(GetIamPolicyNetworkAttachmentRequest, CallSettings)

```
public virtual Policy GetIamPolicy(GetIamPolicyNetworkAttachmentRequest request, CallSettings callSettings = null)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.GetIamPolicyNetworkAttachmentRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Policy)`

The RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = NetworkAttachmentsClient.Create();
// Initialize request argument(s)
GetIamPolicyNetworkAttachmentRequest request = new GetIamPolicyNetworkAttachmentRequest
{
    Region = "",
    Resource = "",
    Project = "",
    OptionsRequestedPolicyVersion = 0,
};
// Make the request
Policy response = networkAttachmentsClient.GetIamPolicy(request);
```

### GetIamPolicy(string, string, string, CallSettings)

```
public virtual Policy GetIamPolicy(string project, string region, string resource, CallSettings callSettings = null)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the region for this request.

`resource`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name or id of the resource for this request.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Policy)`

The RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = NetworkAttachmentsClient.Create();
// Initialize request argument(s)
string project = "";
string region = "";
string resource = "";
// Make the request
Policy response = networkAttachmentsClient.GetIamPolicy(project, region, resource);
```

### GetIamPolicyAsync(GetIamPolicyNetworkAttachmentRequest, CallSettings)

```
public virtual Task<Policy> GetIamPolicyAsync(GetIamPolicyNetworkAttachmentRequest request, CallSettings callSettings = null)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.GetIamPolicyNetworkAttachmentRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Policy)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = await NetworkAttachmentsClient.CreateAsync();
// Initialize request argument(s)
GetIamPolicyNetworkAttachmentRequest request = new GetIamPolicyNetworkAttachmentRequest
{
    Region = "",
    Resource = "",
    Project = "",
    OptionsRequestedPolicyVersion = 0,
};
// Make the request
Policy response = await networkAttachmentsClient.GetIamPolicyAsync(request);
```

### GetIamPolicyAsync(GetIamPolicyNetworkAttachmentRequest, CancellationToken)

```
public virtual Task<Policy> GetIamPolicyAsync(GetIamPolicyNetworkAttachmentRequest request, CancellationToken cancellationToken)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`request`

`[GetIamPolicyNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.GetIamPolicyNetworkAttachmentRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Policy)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = await NetworkAttachmentsClient.CreateAsync();
// Initialize request argument(s)
GetIamPolicyNetworkAttachmentRequest request = new GetIamPolicyNetworkAttachmentRequest
{
    Region = "",
    Resource = "",
    Project = "",
    OptionsRequestedPolicyVersion = 0,
};
// Make the request
Policy response = await networkAttachmentsClient.GetIamPolicyAsync(request);
```

### GetIamPolicyAsync(string, string, string, CallSettings)

```
public virtual Task<Policy> GetIamPolicyAsync(string project, string region, string resource, CallSettings callSettings = null)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the region for this request.

`resource`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name or id of the resource for this request.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Policy)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = await NetworkAttachmentsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string region = "";
string resource = "";
// Make the request
Policy response = await networkAttachmentsClient.GetIamPolicyAsync(project, region, resource);
```

### GetIamPolicyAsync(string, string, string, CancellationToken)

```
public virtual Task<Policy> GetIamPolicyAsync(string project, string region, string resource, CancellationToken cancellationToken)
```

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the region for this request.

`resource`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name or id of the resource for this request.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Policy)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = await NetworkAttachmentsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string region = "";
string resource = "";
// Make the request
Policy response = await networkAttachmentsClient.GetIamPolicyAsync(project, region, resource);
```

### Insert(InsertNetworkAttachmentRequest, CallSettings)

```
public virtual Operation<Operation, Operation> Insert(InsertNetworkAttachmentRequest request, CallSettings callSettings = null)
```

Creates a NetworkAttachment in the specified project in the given scope using the parameters that are included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.InsertNetworkAttachmentRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)`

The RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = NetworkAttachmentsClient.Create();
// Initialize request argument(s)
InsertNetworkAttachmentRequest request = new InsertNetworkAttachmentRequest
{
    RequestId = "",
    Region = "",
    NetworkAttachmentResource = new NetworkAttachment(),
    Project = "",
};
// Make the request
lro::Operation<Operation, Operation> response = networkAttachmentsClient.Insert(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = networkAttachmentsClient.PollOnceInsert(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### Insert(string, string, NetworkAttachment, CallSettings)

```
public virtual Operation<Operation, Operation> Insert(string project, string region, NetworkAttachment networkAttachmentResource, CallSettings callSettings = null)
```

Creates a NetworkAttachment in the specified project in the given scope using the parameters that are included in the request.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the region of this request.

`networkAttachmentResource`

`[NetworkAttachment](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachment)`  

The body resource for this request

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)`

The RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = NetworkAttachmentsClient.Create();
// Initialize request argument(s)
string project = "";
string region = "";
NetworkAttachment networkAttachmentResource = new NetworkAttachment();
// Make the request
lro::Operation<Operation, Operation> response = networkAttachmentsClient.Insert(project, region, networkAttachmentResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = networkAttachmentsClient.PollOnceInsert(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### InsertAsync(InsertNetworkAttachmentRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> InsertAsync(InsertNetworkAttachmentRequest request, CallSettings callSettings = null)
```

Creates a NetworkAttachment in the specified project in the given scope using the parameters that are included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.InsertNetworkAttachmentRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = await NetworkAttachmentsClient.CreateAsync();
// Initialize request argument(s)
InsertNetworkAttachmentRequest request = new InsertNetworkAttachmentRequest
{
    RequestId = "",
    Region = "",
    NetworkAttachmentResource = new NetworkAttachment(),
    Project = "",
};
// Make the request
lro::Operation<Operation, Operation> response = await networkAttachmentsClient.InsertAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await networkAttachmentsClient.PollOnceInsertAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### InsertAsync(InsertNetworkAttachmentRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> InsertAsync(InsertNetworkAttachmentRequest request, CancellationToken cancellationToken)
```

Creates a NetworkAttachment in the specified project in the given scope using the parameters that are included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.InsertNetworkAttachmentRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = await NetworkAttachmentsClient.CreateAsync();
// Initialize request argument(s)
InsertNetworkAttachmentRequest request = new InsertNetworkAttachmentRequest
{
    RequestId = "",
    Region = "",
    NetworkAttachmentResource = new NetworkAttachment(),
    Project = "",
};
// Make the request
lro::Operation<Operation, Operation> response = await networkAttachmentsClient.InsertAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await networkAttachmentsClient.PollOnceInsertAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### InsertAsync(string, string, NetworkAttachment, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> InsertAsync(string project, string region, NetworkAttachment networkAttachmentResource, CallSettings callSettings = null)
```

Creates a NetworkAttachment in the specified project in the given scope using the parameters that are included in the request.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the region of this request.

`networkAttachmentResource`

`[NetworkAttachment](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachment)`  

The body resource for this request

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = await NetworkAttachmentsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string region = "";
NetworkAttachment networkAttachmentResource = new NetworkAttachment();
// Make the request
lro::Operation<Operation, Operation> response = await networkAttachmentsClient.InsertAsync(project, region, networkAttachmentResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await networkAttachmentsClient.PollOnceInsertAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### InsertAsync(string, string, NetworkAttachment, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> InsertAsync(string project, string region, NetworkAttachment networkAttachmentResource, CancellationToken cancellationToken)
```

Creates a NetworkAttachment in the specified project in the given scope using the parameters that are included in the request.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the region of this request.

`networkAttachmentResource`

`[NetworkAttachment](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachment)`  

The body resource for this request

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = await NetworkAttachmentsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string region = "";
NetworkAttachment networkAttachmentResource = new NetworkAttachment();
// Make the request
lro::Operation<Operation, Operation> response = await networkAttachmentsClient.InsertAsync(project, region, networkAttachmentResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await networkAttachmentsClient.PollOnceInsertAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### List(ListNetworkAttachmentsRequest, CallSettings)

```
public virtual PagedEnumerable<NetworkAttachmentList, NetworkAttachment> List(ListNetworkAttachmentsRequest request, CallSettings callSettings = null)
```

Lists the NetworkAttachments for a project in the given scope.

**Parameters**

**Name**

**Description**

`request`

`[ListNetworkAttachmentsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.ListNetworkAttachmentsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[NetworkAttachmentList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachmentList)[NetworkAttachment](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachment)`

A pageable sequence of [NetworkAttachment](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachment) resources.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = NetworkAttachmentsClient.Create();
// Initialize request argument(s)
ListNetworkAttachmentsRequest request = new ListNetworkAttachmentsRequest
{
    Region = "",
    OrderBy = "",
    Project = "",
    Filter = "",
    ReturnPartialSuccess = false,
};
// Make the request
PagedEnumerable<NetworkAttachmentList, NetworkAttachment> response = networkAttachmentsClient.List(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (NetworkAttachment item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (NetworkAttachmentList page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (NetworkAttachment item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<NetworkAttachment> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (NetworkAttachment item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### List(string, string, string, int?, CallSettings)

```
public virtual PagedEnumerable<NetworkAttachmentList, NetworkAttachment> List(string project, string region, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists the NetworkAttachments for a project in the given scope.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the region of this request.

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedEnumerable.cs)[NetworkAttachmentList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachmentList)[NetworkAttachment](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachment)`

A pageable sequence of [NetworkAttachment](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachment) resources.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = NetworkAttachmentsClient.Create();
// Initialize request argument(s)
string project = "";
string region = "";
// Make the request
PagedEnumerable<NetworkAttachmentList, NetworkAttachment> response = networkAttachmentsClient.List(project, region);

// Iterate over all response items, lazily performing RPCs as required
foreach (NetworkAttachment item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (NetworkAttachmentList page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (NetworkAttachment item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<NetworkAttachment> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (NetworkAttachment item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListAsync(ListNetworkAttachmentsRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<NetworkAttachmentList, NetworkAttachment> ListAsync(ListNetworkAttachmentsRequest request, CallSettings callSettings = null)
```

Lists the NetworkAttachments for a project in the given scope.

**Parameters**

**Name**

**Description**

`request`

`[ListNetworkAttachmentsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.ListNetworkAttachmentsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[NetworkAttachmentList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachmentList)[NetworkAttachment](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachment)`

A pageable asynchronous sequence of [NetworkAttachment](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachment) resources.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = await NetworkAttachmentsClient.CreateAsync();
// Initialize request argument(s)
ListNetworkAttachmentsRequest request = new ListNetworkAttachmentsRequest
{
    Region = "",
    OrderBy = "",
    Project = "",
    Filter = "",
    ReturnPartialSuccess = false,
};
// Make the request
PagedAsyncEnumerable<NetworkAttachmentList, NetworkAttachment> response = networkAttachmentsClient.ListAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((NetworkAttachment item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((NetworkAttachmentList page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (NetworkAttachment item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<NetworkAttachment> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (NetworkAttachment item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListAsync(string, string, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<NetworkAttachmentList, NetworkAttachment> ListAsync(string project, string region, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Lists the NetworkAttachments for a project in the given scope.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the region of this request.

`pageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PagedAsyncEnumerable.cs)[NetworkAttachmentList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachmentList)[NetworkAttachment](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachment)`

A pageable asynchronous sequence of [NetworkAttachment](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachment) resources.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = await NetworkAttachmentsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string region = "";
// Make the request
PagedAsyncEnumerable<NetworkAttachmentList, NetworkAttachment> response = networkAttachmentsClient.ListAsync(project, region);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((NetworkAttachment item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((NetworkAttachmentList page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (NetworkAttachment item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<NetworkAttachment> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (NetworkAttachment item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### Patch(PatchNetworkAttachmentRequest, CallSettings)

```
public virtual Operation<Operation, Operation> Patch(PatchNetworkAttachmentRequest request, CallSettings callSettings = null)
```

Patches the specified NetworkAttachment resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`request`

`[PatchNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.PatchNetworkAttachmentRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)`

The RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = NetworkAttachmentsClient.Create();
// Initialize request argument(s)
PatchNetworkAttachmentRequest request = new PatchNetworkAttachmentRequest
{
    RequestId = "",
    Region = "",
    NetworkAttachmentResource = new NetworkAttachment(),
    NetworkAttachment = "",
    Project = "",
};
// Make the request
lro::Operation<Operation, Operation> response = networkAttachmentsClient.Patch(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = networkAttachmentsClient.PollOncePatch(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### Patch(string, string, string, NetworkAttachment, CallSettings)

```
public virtual Operation<Operation, Operation> Patch(string project, string region, string networkAttachment, NetworkAttachment networkAttachmentResource, CallSettings callSettings = null)
```

Patches the specified NetworkAttachment resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the region for this request.

`networkAttachment`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the NetworkAttachment resource to patch.

`networkAttachmentResource`

`[NetworkAttachment](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachment)`  

The body resource for this request

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)`

The RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = NetworkAttachmentsClient.Create();
// Initialize request argument(s)
string project = "";
string region = "";
string networkAttachment = "";
NetworkAttachment networkAttachmentResource = new NetworkAttachment();
// Make the request
lro::Operation<Operation, Operation> response = networkAttachmentsClient.Patch(project, region, networkAttachment, networkAttachmentResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = networkAttachmentsClient.PollOncePatch(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### PatchAsync(PatchNetworkAttachmentRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> PatchAsync(PatchNetworkAttachmentRequest request, CallSettings callSettings = null)
```

Patches the specified NetworkAttachment resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`request`

`[PatchNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.PatchNetworkAttachmentRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = await NetworkAttachmentsClient.CreateAsync();
// Initialize request argument(s)
PatchNetworkAttachmentRequest request = new PatchNetworkAttachmentRequest
{
    RequestId = "",
    Region = "",
    NetworkAttachmentResource = new NetworkAttachment(),
    NetworkAttachment = "",
    Project = "",
};
// Make the request
lro::Operation<Operation, Operation> response = await networkAttachmentsClient.PatchAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await networkAttachmentsClient.PollOncePatchAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### PatchAsync(PatchNetworkAttachmentRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> PatchAsync(PatchNetworkAttachmentRequest request, CancellationToken cancellationToken)
```

Patches the specified NetworkAttachment resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`request`

`[PatchNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.PatchNetworkAttachmentRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = await NetworkAttachmentsClient.CreateAsync();
// Initialize request argument(s)
PatchNetworkAttachmentRequest request = new PatchNetworkAttachmentRequest
{
    RequestId = "",
    Region = "",
    NetworkAttachmentResource = new NetworkAttachment(),
    NetworkAttachment = "",
    Project = "",
};
// Make the request
lro::Operation<Operation, Operation> response = await networkAttachmentsClient.PatchAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await networkAttachmentsClient.PollOncePatchAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### PatchAsync(string, string, string, NetworkAttachment, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> PatchAsync(string project, string region, string networkAttachment, NetworkAttachment networkAttachmentResource, CallSettings callSettings = null)
```

Patches the specified NetworkAttachment resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the region for this request.

`networkAttachment`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the NetworkAttachment resource to patch.

`networkAttachmentResource`

`[NetworkAttachment](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachment)`  

The body resource for this request

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = await NetworkAttachmentsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string region = "";
string networkAttachment = "";
NetworkAttachment networkAttachmentResource = new NetworkAttachment();
// Make the request
lro::Operation<Operation, Operation> response = await networkAttachmentsClient.PatchAsync(project, region, networkAttachment, networkAttachmentResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await networkAttachmentsClient.PollOncePatchAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### PatchAsync(string, string, string, NetworkAttachment, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> PatchAsync(string project, string region, string networkAttachment, NetworkAttachment networkAttachmentResource, CancellationToken cancellationToken)
```

Patches the specified NetworkAttachment resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the region for this request.

`networkAttachment`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the NetworkAttachment resource to patch.

`networkAttachmentResource`

`[NetworkAttachment](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachment)`  

The body resource for this request

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = await NetworkAttachmentsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string region = "";
string networkAttachment = "";
NetworkAttachment networkAttachmentResource = new NetworkAttachment();
// Make the request
lro::Operation<Operation, Operation> response = await networkAttachmentsClient.PatchAsync(project, region, networkAttachment, networkAttachmentResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await networkAttachmentsClient.PollOncePatchAsync(operationName);
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

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)`

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

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)`

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

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)`

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

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)`

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

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)`

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

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Operation)`

A task representing the result of polling the operation.

### SetIamPolicy(SetIamPolicyNetworkAttachmentRequest, CallSettings)

```
public virtual Policy SetIamPolicy(SetIamPolicyNetworkAttachmentRequest request, CallSettings callSettings = null)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.SetIamPolicyNetworkAttachmentRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Policy)`

The RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = NetworkAttachmentsClient.Create();
// Initialize request argument(s)
SetIamPolicyNetworkAttachmentRequest request = new SetIamPolicyNetworkAttachmentRequest
{
    Region = "",
    Resource = "",
    Project = "",
    RegionSetPolicyRequestResource = new RegionSetPolicyRequest(),
};
// Make the request
Policy response = networkAttachmentsClient.SetIamPolicy(request);
```

### SetIamPolicy(string, string, string, RegionSetPolicyRequest, CallSettings)

```
public virtual Policy SetIamPolicy(string project, string region, string resource, RegionSetPolicyRequest regionSetPolicyRequestResource, CallSettings callSettings = null)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the region for this request.

`resource`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name or id of the resource for this request.

`regionSetPolicyRequestResource`

`[RegionSetPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.RegionSetPolicyRequest)`  

The body resource for this request

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Policy)`

The RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = NetworkAttachmentsClient.Create();
// Initialize request argument(s)
string project = "";
string region = "";
string resource = "";
RegionSetPolicyRequest regionSetPolicyRequestResource = new RegionSetPolicyRequest();
// Make the request
Policy response = networkAttachmentsClient.SetIamPolicy(project, region, resource, regionSetPolicyRequestResource);
```

### SetIamPolicyAsync(SetIamPolicyNetworkAttachmentRequest, CallSettings)

```
public virtual Task<Policy> SetIamPolicyAsync(SetIamPolicyNetworkAttachmentRequest request, CallSettings callSettings = null)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.SetIamPolicyNetworkAttachmentRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Policy)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = await NetworkAttachmentsClient.CreateAsync();
// Initialize request argument(s)
SetIamPolicyNetworkAttachmentRequest request = new SetIamPolicyNetworkAttachmentRequest
{
    Region = "",
    Resource = "",
    Project = "",
    RegionSetPolicyRequestResource = new RegionSetPolicyRequest(),
};
// Make the request
Policy response = await networkAttachmentsClient.SetIamPolicyAsync(request);
```

### SetIamPolicyAsync(SetIamPolicyNetworkAttachmentRequest, CancellationToken)

```
public virtual Task<Policy> SetIamPolicyAsync(SetIamPolicyNetworkAttachmentRequest request, CancellationToken cancellationToken)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`request`

`[SetIamPolicyNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.SetIamPolicyNetworkAttachmentRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Policy)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = await NetworkAttachmentsClient.CreateAsync();
// Initialize request argument(s)
SetIamPolicyNetworkAttachmentRequest request = new SetIamPolicyNetworkAttachmentRequest
{
    Region = "",
    Resource = "",
    Project = "",
    RegionSetPolicyRequestResource = new RegionSetPolicyRequest(),
};
// Make the request
Policy response = await networkAttachmentsClient.SetIamPolicyAsync(request);
```

### SetIamPolicyAsync(string, string, string, RegionSetPolicyRequest, CallSettings)

```
public virtual Task<Policy> SetIamPolicyAsync(string project, string region, string resource, RegionSetPolicyRequest regionSetPolicyRequestResource, CallSettings callSettings = null)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the region for this request.

`resource`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name or id of the resource for this request.

`regionSetPolicyRequestResource`

`[RegionSetPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.RegionSetPolicyRequest)`  

The body resource for this request

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Policy)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = await NetworkAttachmentsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string region = "";
string resource = "";
RegionSetPolicyRequest regionSetPolicyRequestResource = new RegionSetPolicyRequest();
// Make the request
Policy response = await networkAttachmentsClient.SetIamPolicyAsync(project, region, resource, regionSetPolicyRequestResource);
```

### SetIamPolicyAsync(string, string, string, RegionSetPolicyRequest, CancellationToken)

```
public virtual Task<Policy> SetIamPolicyAsync(string project, string region, string resource, RegionSetPolicyRequest regionSetPolicyRequestResource, CancellationToken cancellationToken)
```

Sets the access control policy on the specified resource. Replaces any existing policy.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the region for this request.

`resource`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name or id of the resource for this request.

`regionSetPolicyRequestResource`

`[RegionSetPolicyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.RegionSetPolicyRequest)`  

The body resource for this request

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Policy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.Policy)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = await NetworkAttachmentsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string region = "";
string resource = "";
RegionSetPolicyRequest regionSetPolicyRequestResource = new RegionSetPolicyRequest();
// Make the request
Policy response = await networkAttachmentsClient.SetIamPolicyAsync(project, region, resource, regionSetPolicyRequestResource);
```

### ShutdownDefaultChannelsAsync()

```
public static Task ShutdownDefaultChannelsAsync()
```

Shuts down any channels automatically created by [Create()](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachmentsClient#Google_Cloud_Compute_V1_NetworkAttachmentsClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachmentsClient#Google_Cloud_Compute_V1_NetworkAttachmentsClient_CreateAsync_System_Threading_CancellationToken_). Channels which weren't automatically created are not affected.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A task representing the asynchronous shutdown operation.

**Remarks**

After calling this method, further calls to [Create()](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachmentsClient#Google_Cloud_Compute_V1_NetworkAttachmentsClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.NetworkAttachmentsClient#Google_Cloud_Compute_V1_NetworkAttachmentsClient_CreateAsync_System_Threading_CancellationToken_) will create new channels, which could in turn be shut down by another call to this method.

### TestIamPermissions(TestIamPermissionsNetworkAttachmentRequest, CallSettings)

```
public virtual TestPermissionsResponse TestIamPermissions(TestIamPermissionsNetworkAttachmentRequest request, CallSettings callSettings = null)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.TestIamPermissionsNetworkAttachmentRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.TestPermissionsResponse)`

The RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = NetworkAttachmentsClient.Create();
// Initialize request argument(s)
TestIamPermissionsNetworkAttachmentRequest request = new TestIamPermissionsNetworkAttachmentRequest
{
    Region = "",
    Resource = "",
    Project = "",
    TestPermissionsRequestResource = new TestPermissionsRequest(),
};
// Make the request
TestPermissionsResponse response = networkAttachmentsClient.TestIamPermissions(request);
```

### TestIamPermissions(string, string, string, TestPermissionsRequest, CallSettings)

```
public virtual TestPermissionsResponse TestIamPermissions(string project, string region, string resource, TestPermissionsRequest testPermissionsRequestResource, CallSettings callSettings = null)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the region for this request.

`resource`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name or id of the resource for this request.

`testPermissionsRequestResource`

`[TestPermissionsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.TestPermissionsRequest)`  

The body resource for this request

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.TestPermissionsResponse)`

The RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = NetworkAttachmentsClient.Create();
// Initialize request argument(s)
string project = "";
string region = "";
string resource = "";
TestPermissionsRequest testPermissionsRequestResource = new TestPermissionsRequest();
// Make the request
TestPermissionsResponse response = networkAttachmentsClient.TestIamPermissions(project, region, resource, testPermissionsRequestResource);
```

### TestIamPermissionsAsync(TestIamPermissionsNetworkAttachmentRequest, CallSettings)

```
public virtual Task<TestPermissionsResponse> TestIamPermissionsAsync(TestIamPermissionsNetworkAttachmentRequest request, CallSettings callSettings = null)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.TestIamPermissionsNetworkAttachmentRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.TestPermissionsResponse)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = await NetworkAttachmentsClient.CreateAsync();
// Initialize request argument(s)
TestIamPermissionsNetworkAttachmentRequest request = new TestIamPermissionsNetworkAttachmentRequest
{
    Region = "",
    Resource = "",
    Project = "",
    TestPermissionsRequestResource = new TestPermissionsRequest(),
};
// Make the request
TestPermissionsResponse response = await networkAttachmentsClient.TestIamPermissionsAsync(request);
```

### TestIamPermissionsAsync(TestIamPermissionsNetworkAttachmentRequest, CancellationToken)

```
public virtual Task<TestPermissionsResponse> TestIamPermissionsAsync(TestIamPermissionsNetworkAttachmentRequest request, CancellationToken cancellationToken)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`request`

`[TestIamPermissionsNetworkAttachmentRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.TestIamPermissionsNetworkAttachmentRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.TestPermissionsResponse)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = await NetworkAttachmentsClient.CreateAsync();
// Initialize request argument(s)
TestIamPermissionsNetworkAttachmentRequest request = new TestIamPermissionsNetworkAttachmentRequest
{
    Region = "",
    Resource = "",
    Project = "",
    TestPermissionsRequestResource = new TestPermissionsRequest(),
};
// Make the request
TestPermissionsResponse response = await networkAttachmentsClient.TestIamPermissionsAsync(request);
```

### TestIamPermissionsAsync(string, string, string, TestPermissionsRequest, CallSettings)

```
public virtual Task<TestPermissionsResponse> TestIamPermissionsAsync(string project, string region, string resource, TestPermissionsRequest testPermissionsRequestResource, CallSettings callSettings = null)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the region for this request.

`resource`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name or id of the resource for this request.

`testPermissionsRequestResource`

`[TestPermissionsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.TestPermissionsRequest)`  

The body resource for this request

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.TestPermissionsResponse)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = await NetworkAttachmentsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string region = "";
string resource = "";
TestPermissionsRequest testPermissionsRequestResource = new TestPermissionsRequest();
// Make the request
TestPermissionsResponse response = await networkAttachmentsClient.TestIamPermissionsAsync(project, region, resource, testPermissionsRequestResource);
```

### TestIamPermissionsAsync(string, string, string, TestPermissionsRequest, CancellationToken)

```
public virtual Task<TestPermissionsResponse> TestIamPermissionsAsync(string project, string region, string resource, TestPermissionsRequest testPermissionsRequestResource, CancellationToken cancellationToken)
```

Returns permissions that a caller has on the specified resource.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`region`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The name of the region for this request.

`resource`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name or id of the resource for this request.

`testPermissionsRequestResource`

`[TestPermissionsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.TestPermissionsRequest)`  

The body resource for this request

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[TestPermissionsResponse](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.TestPermissionsResponse)`

A Task containing the RPC response.

**Example**

```
// Create client
NetworkAttachmentsClient networkAttachmentsClient = await NetworkAttachmentsClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string region = "";
string resource = "";
TestPermissionsRequest testPermissionsRequestResource = new TestPermissionsRequest();
// Make the request
TestPermissionsResponse response = await networkAttachmentsClient.TestIamPermissionsAsync(project, region, resource, testPermissionsRequestResource);
```

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
