-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class TargetHttpsProxiesClient (2.3.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public abstract class TargetHttpsProxiesClient
```

Reference documentation and code samples for the Compute Engine v1 API class TargetHttpsProxiesClient.

TargetHttpsProxies client wrapper, for convenient use.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> TargetHttpsProxiesClient

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Derived Types

[TargetHttpsProxiesClientImpl](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxiesClientImpl)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Remarks

The TargetHttpsProxies API.

## Properties

### DefaultEndpoint

```
public static string DefaultEndpoint { get; }
```

The default endpoint for the TargetHttpsProxies service, which is a host of "compute.googleapis.com" and a port of 443.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### DefaultScopes

```
public static IReadOnlyList<string> DefaultScopes { get; }
```

The default TargetHttpsProxies scopes.

**Property Value**

**Type**

**Description**

`[IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)<[String](https://learn.microsoft.com/dotnet/api/system.string)>`

**Remarks**

The default TargetHttpsProxies scopes are:

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
public virtual TargetHttpsProxies.TargetHttpsProxiesClient GrpcClient { get; }
```

The underlying gRPC TargetHttpsProxies client

**Property Value**

**Type**

**Description**

`[TargetHttpsProxies.TargetHttpsProxiesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxies.TargetHttpsProxiesClient)`

### InsertOperationsClient

```
public virtual OperationsClient InsertOperationsClient { get; }
```

The long-running operations client for `Insert`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

### PatchOperationsClient

```
public virtual OperationsClient PatchOperationsClient { get; }
```

The long-running operations client for `Patch`.

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

### SetCertificateMapOperationsClient

```
public virtual OperationsClient SetCertificateMapOperationsClient { get; }
```

The long-running operations client for `SetCertificateMap`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

### SetQuicOverrideOperationsClient

```
public virtual OperationsClient SetQuicOverrideOperationsClient { get; }
```

The long-running operations client for `SetQuicOverride`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

### SetSslCertificatesOperationsClient

```
public virtual OperationsClient SetSslCertificatesOperationsClient { get; }
```

The long-running operations client for `SetSslCertificates`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

### SetSslPolicyOperationsClient

```
public virtual OperationsClient SetSslPolicyOperationsClient { get; }
```

The long-running operations client for `SetSslPolicy`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

### SetUrlMapOperationsClient

```
public virtual OperationsClient SetUrlMapOperationsClient { get; }
```

The long-running operations client for `SetUrlMap`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsClient.html)`

## Methods

### AggregatedList(AggregatedListTargetHttpsProxiesRequest, CallSettings)

```
public virtual PagedEnumerable<TargetHttpsProxyAggregatedList, KeyValuePair<string, TargetHttpsProxiesScopedList>> AggregatedList(AggregatedListTargetHttpsProxiesRequest request, CallSettings callSettings = null)
```

Retrieves the list of all TargetHttpsProxy resources, regional and global, available to the specified project.

**Parameters**

**Name**

**Description**

`request`

`[AggregatedListTargetHttpsProxiesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.AggregatedListTargetHttpsProxiesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[TargetHttpsProxyAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxyAggregatedList), [KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2)<[String](https://learn.microsoft.com/dotnet/api/system.string), [TargetHttpsProxiesScopedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxiesScopedList)>>`

A pageable sequence of [KeyValuePair<TKey,TValue>](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2) resources.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = TargetHttpsProxiesClient.Create();
// Initialize request argument(s)
AggregatedListTargetHttpsProxiesRequest request = new AggregatedListTargetHttpsProxiesRequest
{
    OrderBy = "",
    Project = "",
    Filter = "",
    IncludeAllScopes = false,
    ReturnPartialSuccess = false,
};
// Make the request
PagedEnumerable<TargetHttpsProxyAggregatedList, KeyValuePair<string, TargetHttpsProxiesScopedList>> response = targetHttpsProxiesClient.AggregatedList(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (KeyValuePair<string, TargetHttpsProxiesScopedList> item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (TargetHttpsProxyAggregatedList page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (KeyValuePair<string, TargetHttpsProxiesScopedList> item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<KeyValuePair<string, TargetHttpsProxiesScopedList>> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (KeyValuePair<string, TargetHttpsProxiesScopedList> item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### AggregatedList(String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedEnumerable<TargetHttpsProxyAggregatedList, KeyValuePair<string, TargetHttpsProxiesScopedList>> AggregatedList(string project, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Retrieves the list of all TargetHttpsProxy resources, regional and global, available to the specified project.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the project scoping this request.

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

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[TargetHttpsProxyAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxyAggregatedList), [KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2)<[String](https://learn.microsoft.com/dotnet/api/system.string), [TargetHttpsProxiesScopedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxiesScopedList)>>`

A pageable sequence of [KeyValuePair<TKey,TValue>](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2) resources.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = TargetHttpsProxiesClient.Create();
// Initialize request argument(s)
string project = "";
// Make the request
PagedEnumerable<TargetHttpsProxyAggregatedList, KeyValuePair<string, TargetHttpsProxiesScopedList>> response = targetHttpsProxiesClient.AggregatedList(project);

// Iterate over all response items, lazily performing RPCs as required
foreach (KeyValuePair<string, TargetHttpsProxiesScopedList> item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (TargetHttpsProxyAggregatedList page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (KeyValuePair<string, TargetHttpsProxiesScopedList> item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<KeyValuePair<string, TargetHttpsProxiesScopedList>> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (KeyValuePair<string, TargetHttpsProxiesScopedList> item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### AggregatedListAsync(AggregatedListTargetHttpsProxiesRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<TargetHttpsProxyAggregatedList, KeyValuePair<string, TargetHttpsProxiesScopedList>> AggregatedListAsync(AggregatedListTargetHttpsProxiesRequest request, CallSettings callSettings = null)
```

Retrieves the list of all TargetHttpsProxy resources, regional and global, available to the specified project.

**Parameters**

**Name**

**Description**

`request`

`[AggregatedListTargetHttpsProxiesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.AggregatedListTargetHttpsProxiesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[TargetHttpsProxyAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxyAggregatedList), [KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2)<[String](https://learn.microsoft.com/dotnet/api/system.string), [TargetHttpsProxiesScopedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxiesScopedList)>>`

A pageable asynchronous sequence of [KeyValuePair<TKey,TValue>](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2) resources.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
AggregatedListTargetHttpsProxiesRequest request = new AggregatedListTargetHttpsProxiesRequest
{
    OrderBy = "",
    Project = "",
    Filter = "",
    IncludeAllScopes = false,
    ReturnPartialSuccess = false,
};
// Make the request
PagedAsyncEnumerable<TargetHttpsProxyAggregatedList, KeyValuePair<string, TargetHttpsProxiesScopedList>> response = targetHttpsProxiesClient.AggregatedListAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((KeyValuePair<string, TargetHttpsProxiesScopedList> item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((TargetHttpsProxyAggregatedList page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (KeyValuePair<string, TargetHttpsProxiesScopedList> item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<KeyValuePair<string, TargetHttpsProxiesScopedList>> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (KeyValuePair<string, TargetHttpsProxiesScopedList> item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### AggregatedListAsync(String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedAsyncEnumerable<TargetHttpsProxyAggregatedList, KeyValuePair<string, TargetHttpsProxiesScopedList>> AggregatedListAsync(string project, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Retrieves the list of all TargetHttpsProxy resources, regional and global, available to the specified project.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the project scoping this request.

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

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[TargetHttpsProxyAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxyAggregatedList), [KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2)<[String](https://learn.microsoft.com/dotnet/api/system.string), [TargetHttpsProxiesScopedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxiesScopedList)>>`

A pageable asynchronous sequence of [KeyValuePair<TKey,TValue>](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2) resources.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
// Make the request
PagedAsyncEnumerable<TargetHttpsProxyAggregatedList, KeyValuePair<string, TargetHttpsProxiesScopedList>> response = targetHttpsProxiesClient.AggregatedListAsync(project);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((KeyValuePair<string, TargetHttpsProxiesScopedList> item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((TargetHttpsProxyAggregatedList page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (KeyValuePair<string, TargetHttpsProxiesScopedList> item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<KeyValuePair<string, TargetHttpsProxiesScopedList>> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (KeyValuePair<string, TargetHttpsProxiesScopedList> item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### Create()

```
public static TargetHttpsProxiesClient Create()
```

Synchronously creates a [TargetHttpsProxiesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxiesClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [TargetHttpsProxiesClientBuilder](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxiesClientBuilder) .

**Returns**

**Type**

**Description**

`[TargetHttpsProxiesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxiesClient)`

The created [TargetHttpsProxiesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxiesClient).

### CreateAsync(CancellationToken)

```
public static Task<TargetHttpsProxiesClient> CreateAsync(CancellationToken cancellationToken = default(CancellationToken))
```

Asynchronously creates a [TargetHttpsProxiesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxiesClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [TargetHttpsProxiesClientBuilder](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxiesClientBuilder) .

**Parameter**

**Name**

**Description**

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

The [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use while creating the client.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[TargetHttpsProxiesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxiesClient)>`

The task representing the created [TargetHttpsProxiesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxiesClient).

### Delete(DeleteTargetHttpsProxyRequest, CallSettings)

```
public virtual Operation<Operation, Operation> Delete(DeleteTargetHttpsProxyRequest request, CallSettings callSettings = null)
```

Deletes the specified TargetHttpsProxy resource.

**Parameters**

**Name**

**Description**

`request`

`[DeleteTargetHttpsProxyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.DeleteTargetHttpsProxyRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = TargetHttpsProxiesClient.Create();
// Initialize request argument(s)
DeleteTargetHttpsProxyRequest request = new DeleteTargetHttpsProxyRequest
{
    RequestId = "",
    TargetHttpsProxy = "",
    Project = "",
};
// Make the request
lro::Operation<Operation, Operation> response = targetHttpsProxiesClient.Delete(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = targetHttpsProxiesClient.PollOnceDelete(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### Delete(String, String, CallSettings)

```
public virtual Operation<Operation, Operation> Delete(string project, string targetHttpsProxy, CallSettings callSettings = null)
```

Deletes the specified TargetHttpsProxy resource.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`targetHttpsProxy`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the TargetHttpsProxy resource to delete.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = TargetHttpsProxiesClient.Create();
// Initialize request argument(s)
string project = "";
string targetHttpsProxy = "";
// Make the request
lro::Operation<Operation, Operation> response = targetHttpsProxiesClient.Delete(project, targetHttpsProxy);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = targetHttpsProxiesClient.PollOnceDelete(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DeleteAsync(DeleteTargetHttpsProxyRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> DeleteAsync(DeleteTargetHttpsProxyRequest request, CallSettings callSettings = null)
```

Deletes the specified TargetHttpsProxy resource.

**Parameters**

**Name**

**Description**

`request`

`[DeleteTargetHttpsProxyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.DeleteTargetHttpsProxyRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
DeleteTargetHttpsProxyRequest request = new DeleteTargetHttpsProxyRequest
{
    RequestId = "",
    TargetHttpsProxy = "",
    Project = "",
};
// Make the request
lro::Operation<Operation, Operation> response = await targetHttpsProxiesClient.DeleteAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await targetHttpsProxiesClient.PollOnceDeleteAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DeleteAsync(DeleteTargetHttpsProxyRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> DeleteAsync(DeleteTargetHttpsProxyRequest request, CancellationToken cancellationToken)
```

Deletes the specified TargetHttpsProxy resource.

**Parameters**

**Name**

**Description**

`request`

`[DeleteTargetHttpsProxyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.DeleteTargetHttpsProxyRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
DeleteTargetHttpsProxyRequest request = new DeleteTargetHttpsProxyRequest
{
    RequestId = "",
    TargetHttpsProxy = "",
    Project = "",
};
// Make the request
lro::Operation<Operation, Operation> response = await targetHttpsProxiesClient.DeleteAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await targetHttpsProxiesClient.PollOnceDeleteAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DeleteAsync(String, String, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> DeleteAsync(string project, string targetHttpsProxy, CallSettings callSettings = null)
```

Deletes the specified TargetHttpsProxy resource.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`targetHttpsProxy`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the TargetHttpsProxy resource to delete.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string targetHttpsProxy = "";
// Make the request
lro::Operation<Operation, Operation> response = await targetHttpsProxiesClient.DeleteAsync(project, targetHttpsProxy);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await targetHttpsProxiesClient.PollOnceDeleteAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### DeleteAsync(String, String, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> DeleteAsync(string project, string targetHttpsProxy, CancellationToken cancellationToken)
```

Deletes the specified TargetHttpsProxy resource.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`targetHttpsProxy`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the TargetHttpsProxy resource to delete.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string targetHttpsProxy = "";
// Make the request
lro::Operation<Operation, Operation> response = await targetHttpsProxiesClient.DeleteAsync(project, targetHttpsProxy);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await targetHttpsProxiesClient.PollOnceDeleteAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### Get(GetTargetHttpsProxyRequest, CallSettings)

```
public virtual TargetHttpsProxy Get(GetTargetHttpsProxyRequest request, CallSettings callSettings = null)
```

Returns the specified TargetHttpsProxy resource. Gets a list of available target HTTPS proxies by making a list() request.

**Parameters**

**Name**

**Description**

`request`

`[GetTargetHttpsProxyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.GetTargetHttpsProxyRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[TargetHttpsProxy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxy)`

The RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = TargetHttpsProxiesClient.Create();
// Initialize request argument(s)
GetTargetHttpsProxyRequest request = new GetTargetHttpsProxyRequest
{
    TargetHttpsProxy = "",
    Project = "",
};
// Make the request
TargetHttpsProxy response = targetHttpsProxiesClient.Get(request);
```

### Get(String, String, CallSettings)

```
public virtual TargetHttpsProxy Get(string project, string targetHttpsProxy, CallSettings callSettings = null)
```

Returns the specified TargetHttpsProxy resource. Gets a list of available target HTTPS proxies by making a list() request.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`targetHttpsProxy`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the TargetHttpsProxy resource to return.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[TargetHttpsProxy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxy)`

The RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = TargetHttpsProxiesClient.Create();
// Initialize request argument(s)
string project = "";
string targetHttpsProxy = "";
// Make the request
TargetHttpsProxy response = targetHttpsProxiesClient.Get(project, targetHttpsProxy);
```

### GetAsync(GetTargetHttpsProxyRequest, CallSettings)

```
public virtual Task<TargetHttpsProxy> GetAsync(GetTargetHttpsProxyRequest request, CallSettings callSettings = null)
```

Returns the specified TargetHttpsProxy resource. Gets a list of available target HTTPS proxies by making a list() request.

**Parameters**

**Name**

**Description**

`request`

`[GetTargetHttpsProxyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.GetTargetHttpsProxyRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[TargetHttpsProxy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxy)>`

A Task containing the RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
GetTargetHttpsProxyRequest request = new GetTargetHttpsProxyRequest
{
    TargetHttpsProxy = "",
    Project = "",
};
// Make the request
TargetHttpsProxy response = await targetHttpsProxiesClient.GetAsync(request);
```

### GetAsync(GetTargetHttpsProxyRequest, CancellationToken)

```
public virtual Task<TargetHttpsProxy> GetAsync(GetTargetHttpsProxyRequest request, CancellationToken cancellationToken)
```

Returns the specified TargetHttpsProxy resource. Gets a list of available target HTTPS proxies by making a list() request.

**Parameters**

**Name**

**Description**

`request`

`[GetTargetHttpsProxyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.GetTargetHttpsProxyRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[TargetHttpsProxy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxy)>`

A Task containing the RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
GetTargetHttpsProxyRequest request = new GetTargetHttpsProxyRequest
{
    TargetHttpsProxy = "",
    Project = "",
};
// Make the request
TargetHttpsProxy response = await targetHttpsProxiesClient.GetAsync(request);
```

### GetAsync(String, String, CallSettings)

```
public virtual Task<TargetHttpsProxy> GetAsync(string project, string targetHttpsProxy, CallSettings callSettings = null)
```

Returns the specified TargetHttpsProxy resource. Gets a list of available target HTTPS proxies by making a list() request.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`targetHttpsProxy`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the TargetHttpsProxy resource to return.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[TargetHttpsProxy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxy)>`

A Task containing the RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string targetHttpsProxy = "";
// Make the request
TargetHttpsProxy response = await targetHttpsProxiesClient.GetAsync(project, targetHttpsProxy);
```

### GetAsync(String, String, CancellationToken)

```
public virtual Task<TargetHttpsProxy> GetAsync(string project, string targetHttpsProxy, CancellationToken cancellationToken)
```

Returns the specified TargetHttpsProxy resource. Gets a list of available target HTTPS proxies by making a list() request.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`targetHttpsProxy`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the TargetHttpsProxy resource to return.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[TargetHttpsProxy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxy)>`

A Task containing the RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string targetHttpsProxy = "";
// Make the request
TargetHttpsProxy response = await targetHttpsProxiesClient.GetAsync(project, targetHttpsProxy);
```

### Insert(InsertTargetHttpsProxyRequest, CallSettings)

```
public virtual Operation<Operation, Operation> Insert(InsertTargetHttpsProxyRequest request, CallSettings callSettings = null)
```

Creates a TargetHttpsProxy resource in the specified project using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertTargetHttpsProxyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.InsertTargetHttpsProxyRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = TargetHttpsProxiesClient.Create();
// Initialize request argument(s)
InsertTargetHttpsProxyRequest request = new InsertTargetHttpsProxyRequest
{
    RequestId = "",
    Project = "",
    TargetHttpsProxyResource = new TargetHttpsProxy(),
};
// Make the request
lro::Operation<Operation, Operation> response = targetHttpsProxiesClient.Insert(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = targetHttpsProxiesClient.PollOnceInsert(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### Insert(String, TargetHttpsProxy, CallSettings)

```
public virtual Operation<Operation, Operation> Insert(string project, TargetHttpsProxy targetHttpsProxyResource, CallSettings callSettings = null)
```

Creates a TargetHttpsProxy resource in the specified project using the data included in the request.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`targetHttpsProxyResource`

`[TargetHttpsProxy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxy)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = TargetHttpsProxiesClient.Create();
// Initialize request argument(s)
string project = "";
TargetHttpsProxy targetHttpsProxyResource = new TargetHttpsProxy();
// Make the request
lro::Operation<Operation, Operation> response = targetHttpsProxiesClient.Insert(project, targetHttpsProxyResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = targetHttpsProxiesClient.PollOnceInsert(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### InsertAsync(InsertTargetHttpsProxyRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> InsertAsync(InsertTargetHttpsProxyRequest request, CallSettings callSettings = null)
```

Creates a TargetHttpsProxy resource in the specified project using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertTargetHttpsProxyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.InsertTargetHttpsProxyRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
InsertTargetHttpsProxyRequest request = new InsertTargetHttpsProxyRequest
{
    RequestId = "",
    Project = "",
    TargetHttpsProxyResource = new TargetHttpsProxy(),
};
// Make the request
lro::Operation<Operation, Operation> response = await targetHttpsProxiesClient.InsertAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await targetHttpsProxiesClient.PollOnceInsertAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### InsertAsync(InsertTargetHttpsProxyRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> InsertAsync(InsertTargetHttpsProxyRequest request, CancellationToken cancellationToken)
```

Creates a TargetHttpsProxy resource in the specified project using the data included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertTargetHttpsProxyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.InsertTargetHttpsProxyRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
InsertTargetHttpsProxyRequest request = new InsertTargetHttpsProxyRequest
{
    RequestId = "",
    Project = "",
    TargetHttpsProxyResource = new TargetHttpsProxy(),
};
// Make the request
lro::Operation<Operation, Operation> response = await targetHttpsProxiesClient.InsertAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await targetHttpsProxiesClient.PollOnceInsertAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### InsertAsync(String, TargetHttpsProxy, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> InsertAsync(string project, TargetHttpsProxy targetHttpsProxyResource, CallSettings callSettings = null)
```

Creates a TargetHttpsProxy resource in the specified project using the data included in the request.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`targetHttpsProxyResource`

`[TargetHttpsProxy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxy)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
TargetHttpsProxy targetHttpsProxyResource = new TargetHttpsProxy();
// Make the request
lro::Operation<Operation, Operation> response = await targetHttpsProxiesClient.InsertAsync(project, targetHttpsProxyResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await targetHttpsProxiesClient.PollOnceInsertAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### InsertAsync(String, TargetHttpsProxy, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> InsertAsync(string project, TargetHttpsProxy targetHttpsProxyResource, CancellationToken cancellationToken)
```

Creates a TargetHttpsProxy resource in the specified project using the data included in the request.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`targetHttpsProxyResource`

`[TargetHttpsProxy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxy)`  

The body resource for this request

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
TargetHttpsProxy targetHttpsProxyResource = new TargetHttpsProxy();
// Make the request
lro::Operation<Operation, Operation> response = await targetHttpsProxiesClient.InsertAsync(project, targetHttpsProxyResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await targetHttpsProxiesClient.PollOnceInsertAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### List(ListTargetHttpsProxiesRequest, CallSettings)

```
public virtual PagedEnumerable<TargetHttpsProxyList, TargetHttpsProxy> List(ListTargetHttpsProxiesRequest request, CallSettings callSettings = null)
```

Retrieves the list of TargetHttpsProxy resources available to the specified project.

**Parameters**

**Name**

**Description**

`request`

`[ListTargetHttpsProxiesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.ListTargetHttpsProxiesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[TargetHttpsProxyList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxyList), [TargetHttpsProxy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxy)>`

A pageable sequence of [TargetHttpsProxy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxy) resources.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = TargetHttpsProxiesClient.Create();
// Initialize request argument(s)
ListTargetHttpsProxiesRequest request = new ListTargetHttpsProxiesRequest
{
    OrderBy = "",
    Project = "",
    Filter = "",
    ReturnPartialSuccess = false,
};
// Make the request
PagedEnumerable<TargetHttpsProxyList, TargetHttpsProxy> response = targetHttpsProxiesClient.List(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (TargetHttpsProxy item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (TargetHttpsProxyList page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (TargetHttpsProxy item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<TargetHttpsProxy> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (TargetHttpsProxy item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### List(String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedEnumerable<TargetHttpsProxyList, TargetHttpsProxy> List(string project, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Retrieves the list of TargetHttpsProxy resources available to the specified project.

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

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[TargetHttpsProxyList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxyList), [TargetHttpsProxy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxy)>`

A pageable sequence of [TargetHttpsProxy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxy) resources.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = TargetHttpsProxiesClient.Create();
// Initialize request argument(s)
string project = "";
// Make the request
PagedEnumerable<TargetHttpsProxyList, TargetHttpsProxy> response = targetHttpsProxiesClient.List(project);

// Iterate over all response items, lazily performing RPCs as required
foreach (TargetHttpsProxy item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (TargetHttpsProxyList page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (TargetHttpsProxy item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<TargetHttpsProxy> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (TargetHttpsProxy item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListAsync(ListTargetHttpsProxiesRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<TargetHttpsProxyList, TargetHttpsProxy> ListAsync(ListTargetHttpsProxiesRequest request, CallSettings callSettings = null)
```

Retrieves the list of TargetHttpsProxy resources available to the specified project.

**Parameters**

**Name**

**Description**

`request`

`[ListTargetHttpsProxiesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.ListTargetHttpsProxiesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[TargetHttpsProxyList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxyList), [TargetHttpsProxy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxy)>`

A pageable asynchronous sequence of [TargetHttpsProxy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxy) resources.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
ListTargetHttpsProxiesRequest request = new ListTargetHttpsProxiesRequest
{
    OrderBy = "",
    Project = "",
    Filter = "",
    ReturnPartialSuccess = false,
};
// Make the request
PagedAsyncEnumerable<TargetHttpsProxyList, TargetHttpsProxy> response = targetHttpsProxiesClient.ListAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((TargetHttpsProxy item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((TargetHttpsProxyList page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (TargetHttpsProxy item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<TargetHttpsProxy> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (TargetHttpsProxy item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListAsync(String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedAsyncEnumerable<TargetHttpsProxyList, TargetHttpsProxy> ListAsync(string project, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Retrieves the list of TargetHttpsProxy resources available to the specified project.

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

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[TargetHttpsProxyList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxyList), [TargetHttpsProxy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxy)>`

A pageable asynchronous sequence of [TargetHttpsProxy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxy) resources.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
// Make the request
PagedAsyncEnumerable<TargetHttpsProxyList, TargetHttpsProxy> response = targetHttpsProxiesClient.ListAsync(project);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((TargetHttpsProxy item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((TargetHttpsProxyList page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (TargetHttpsProxy item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<TargetHttpsProxy> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (TargetHttpsProxy item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### Patch(PatchTargetHttpsProxyRequest, CallSettings)

```
public virtual Operation<Operation, Operation> Patch(PatchTargetHttpsProxyRequest request, CallSettings callSettings = null)
```

Patches the specified TargetHttpsProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`request`

`[PatchTargetHttpsProxyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.PatchTargetHttpsProxyRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = TargetHttpsProxiesClient.Create();
// Initialize request argument(s)
PatchTargetHttpsProxyRequest request = new PatchTargetHttpsProxyRequest
{
    RequestId = "",
    TargetHttpsProxy = "",
    Project = "",
    TargetHttpsProxyResource = new TargetHttpsProxy(),
};
// Make the request
lro::Operation<Operation, Operation> response = targetHttpsProxiesClient.Patch(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = targetHttpsProxiesClient.PollOncePatch(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### Patch(String, String, TargetHttpsProxy, CallSettings)

```
public virtual Operation<Operation, Operation> Patch(string project, string targetHttpsProxy, TargetHttpsProxy targetHttpsProxyResource, CallSettings callSettings = null)
```

Patches the specified TargetHttpsProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`targetHttpsProxy`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the TargetHttpsProxy resource to patch.

`targetHttpsProxyResource`

`[TargetHttpsProxy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxy)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = TargetHttpsProxiesClient.Create();
// Initialize request argument(s)
string project = "";
string targetHttpsProxy = "";
TargetHttpsProxy targetHttpsProxyResource = new TargetHttpsProxy();
// Make the request
lro::Operation<Operation, Operation> response = targetHttpsProxiesClient.Patch(project, targetHttpsProxy, targetHttpsProxyResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = targetHttpsProxiesClient.PollOncePatch(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### PatchAsync(PatchTargetHttpsProxyRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> PatchAsync(PatchTargetHttpsProxyRequest request, CallSettings callSettings = null)
```

Patches the specified TargetHttpsProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`request`

`[PatchTargetHttpsProxyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.PatchTargetHttpsProxyRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
PatchTargetHttpsProxyRequest request = new PatchTargetHttpsProxyRequest
{
    RequestId = "",
    TargetHttpsProxy = "",
    Project = "",
    TargetHttpsProxyResource = new TargetHttpsProxy(),
};
// Make the request
lro::Operation<Operation, Operation> response = await targetHttpsProxiesClient.PatchAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await targetHttpsProxiesClient.PollOncePatchAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### PatchAsync(PatchTargetHttpsProxyRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> PatchAsync(PatchTargetHttpsProxyRequest request, CancellationToken cancellationToken)
```

Patches the specified TargetHttpsProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`request`

`[PatchTargetHttpsProxyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.PatchTargetHttpsProxyRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
PatchTargetHttpsProxyRequest request = new PatchTargetHttpsProxyRequest
{
    RequestId = "",
    TargetHttpsProxy = "",
    Project = "",
    TargetHttpsProxyResource = new TargetHttpsProxy(),
};
// Make the request
lro::Operation<Operation, Operation> response = await targetHttpsProxiesClient.PatchAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await targetHttpsProxiesClient.PollOncePatchAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### PatchAsync(String, String, TargetHttpsProxy, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> PatchAsync(string project, string targetHttpsProxy, TargetHttpsProxy targetHttpsProxyResource, CallSettings callSettings = null)
```

Patches the specified TargetHttpsProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`targetHttpsProxy`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the TargetHttpsProxy resource to patch.

`targetHttpsProxyResource`

`[TargetHttpsProxy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxy)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string targetHttpsProxy = "";
TargetHttpsProxy targetHttpsProxyResource = new TargetHttpsProxy();
// Make the request
lro::Operation<Operation, Operation> response = await targetHttpsProxiesClient.PatchAsync(project, targetHttpsProxy, targetHttpsProxyResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await targetHttpsProxiesClient.PollOncePatchAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### PatchAsync(String, String, TargetHttpsProxy, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> PatchAsync(string project, string targetHttpsProxy, TargetHttpsProxy targetHttpsProxyResource, CancellationToken cancellationToken)
```

Patches the specified TargetHttpsProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`targetHttpsProxy`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the TargetHttpsProxy resource to patch.

`targetHttpsProxyResource`

`[TargetHttpsProxy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxy)`  

The body resource for this request

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string targetHttpsProxy = "";
TargetHttpsProxy targetHttpsProxyResource = new TargetHttpsProxy();
// Make the request
lro::Operation<Operation, Operation> response = await targetHttpsProxiesClient.PatchAsync(project, targetHttpsProxy, targetHttpsProxyResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await targetHttpsProxiesClient.PollOncePatchAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
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

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>`

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

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

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

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>`

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

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A task representing the result of polling the operation.

### PollOncePatch(String, CallSettings)

```
public virtual Operation<Operation, Operation> PollOncePatch(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `Patch`.

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

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>`

The result of polling the operation.

### PollOncePatchAsync(String, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> PollOncePatchAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `Patch` .

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

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A task representing the result of polling the operation.

### PollOnceSetCertificateMap(String, CallSettings)

```
public virtual Operation<Operation, Operation> PollOnceSetCertificateMap(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `SetCertificateMap` .

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

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>`

The result of polling the operation.

### PollOnceSetCertificateMapAsync(String, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> PollOnceSetCertificateMapAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `SetCertificateMap`.

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

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A task representing the result of polling the operation.

### PollOnceSetQuicOverride(String, CallSettings)

```
public virtual Operation<Operation, Operation> PollOnceSetQuicOverride(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `SetQuicOverride`.

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

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>`

The result of polling the operation.

### PollOnceSetQuicOverrideAsync(String, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> PollOnceSetQuicOverrideAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `SetQuicOverride`.

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

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A task representing the result of polling the operation.

### PollOnceSetSslCertificates(String, CallSettings)

```
public virtual Operation<Operation, Operation> PollOnceSetSslCertificates(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `SetSslCertificates` .

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

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>`

The result of polling the operation.

### PollOnceSetSslCertificatesAsync(String, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> PollOnceSetSslCertificatesAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `SetSslCertificates`.

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

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A task representing the result of polling the operation.

### PollOnceSetSslPolicy(String, CallSettings)

```
public virtual Operation<Operation, Operation> PollOnceSetSslPolicy(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `SetSslPolicy`.

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

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>`

The result of polling the operation.

### PollOnceSetSslPolicyAsync(String, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> PollOnceSetSslPolicyAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `SetSslPolicy`.

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

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A task representing the result of polling the operation.

### PollOnceSetUrlMap(String, CallSettings)

```
public virtual Operation<Operation, Operation> PollOnceSetUrlMap(string operationName, CallSettings callSettings = null)
```

Poll an operation once, using an `operationName` from a previous invocation of `SetUrlMap`.

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

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>`

The result of polling the operation.

### PollOnceSetUrlMapAsync(String, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> PollOnceSetUrlMapAsync(string operationName, CallSettings callSettings = null)
```

Asynchronously poll an operation once, using an `operationName` from a previous invocation of `SetUrlMap`.

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

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A task representing the result of polling the operation.

### SetCertificateMap(SetCertificateMapTargetHttpsProxyRequest, CallSettings)

```
public virtual Operation<Operation, Operation> SetCertificateMap(SetCertificateMapTargetHttpsProxyRequest request, CallSettings callSettings = null)
```

Changes the Certificate Map for TargetHttpsProxy.

**Parameters**

**Name**

**Description**

`request`

`[SetCertificateMapTargetHttpsProxyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.SetCertificateMapTargetHttpsProxyRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = TargetHttpsProxiesClient.Create();
// Initialize request argument(s)
SetCertificateMapTargetHttpsProxyRequest request = new SetCertificateMapTargetHttpsProxyRequest
{
    RequestId = "",
    TargetHttpsProxy = "",
    Project = "",
    TargetHttpsProxiesSetCertificateMapRequestResource = new TargetHttpsProxiesSetCertificateMapRequest(),
};
// Make the request
lro::Operation<Operation, Operation> response = targetHttpsProxiesClient.SetCertificateMap(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = targetHttpsProxiesClient.PollOnceSetCertificateMap(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetCertificateMap(String, String, TargetHttpsProxiesSetCertificateMapRequest, CallSettings)

```
public virtual Operation<Operation, Operation> SetCertificateMap(string project, string targetHttpsProxy, TargetHttpsProxiesSetCertificateMapRequest targetHttpsProxiesSetCertificateMapRequestResource, CallSettings callSettings = null)
```

Changes the Certificate Map for TargetHttpsProxy.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`targetHttpsProxy`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the TargetHttpsProxy resource whose CertificateMap is to be set. The name must be 1-63 characters long, and comply with RFC1035.

`targetHttpsProxiesSetCertificateMapRequestResource`

`[TargetHttpsProxiesSetCertificateMapRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxiesSetCertificateMapRequest)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = TargetHttpsProxiesClient.Create();
// Initialize request argument(s)
string project = "";
string targetHttpsProxy = "";
TargetHttpsProxiesSetCertificateMapRequest targetHttpsProxiesSetCertificateMapRequestResource = new TargetHttpsProxiesSetCertificateMapRequest();
// Make the request
lro::Operation<Operation, Operation> response = targetHttpsProxiesClient.SetCertificateMap(project, targetHttpsProxy, targetHttpsProxiesSetCertificateMapRequestResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = targetHttpsProxiesClient.PollOnceSetCertificateMap(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetCertificateMapAsync(SetCertificateMapTargetHttpsProxyRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> SetCertificateMapAsync(SetCertificateMapTargetHttpsProxyRequest request, CallSettings callSettings = null)
```

Changes the Certificate Map for TargetHttpsProxy.

**Parameters**

**Name**

**Description**

`request`

`[SetCertificateMapTargetHttpsProxyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.SetCertificateMapTargetHttpsProxyRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
SetCertificateMapTargetHttpsProxyRequest request = new SetCertificateMapTargetHttpsProxyRequest
{
    RequestId = "",
    TargetHttpsProxy = "",
    Project = "",
    TargetHttpsProxiesSetCertificateMapRequestResource = new TargetHttpsProxiesSetCertificateMapRequest(),
};
// Make the request
lro::Operation<Operation, Operation> response = await targetHttpsProxiesClient.SetCertificateMapAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await targetHttpsProxiesClient.PollOnceSetCertificateMapAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetCertificateMapAsync(SetCertificateMapTargetHttpsProxyRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> SetCertificateMapAsync(SetCertificateMapTargetHttpsProxyRequest request, CancellationToken cancellationToken)
```

Changes the Certificate Map for TargetHttpsProxy.

**Parameters**

**Name**

**Description**

`request`

`[SetCertificateMapTargetHttpsProxyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.SetCertificateMapTargetHttpsProxyRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
SetCertificateMapTargetHttpsProxyRequest request = new SetCertificateMapTargetHttpsProxyRequest
{
    RequestId = "",
    TargetHttpsProxy = "",
    Project = "",
    TargetHttpsProxiesSetCertificateMapRequestResource = new TargetHttpsProxiesSetCertificateMapRequest(),
};
// Make the request
lro::Operation<Operation, Operation> response = await targetHttpsProxiesClient.SetCertificateMapAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await targetHttpsProxiesClient.PollOnceSetCertificateMapAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetCertificateMapAsync(String, String, TargetHttpsProxiesSetCertificateMapRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> SetCertificateMapAsync(string project, string targetHttpsProxy, TargetHttpsProxiesSetCertificateMapRequest targetHttpsProxiesSetCertificateMapRequestResource, CallSettings callSettings = null)
```

Changes the Certificate Map for TargetHttpsProxy.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`targetHttpsProxy`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the TargetHttpsProxy resource whose CertificateMap is to be set. The name must be 1-63 characters long, and comply with RFC1035.

`targetHttpsProxiesSetCertificateMapRequestResource`

`[TargetHttpsProxiesSetCertificateMapRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxiesSetCertificateMapRequest)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string targetHttpsProxy = "";
TargetHttpsProxiesSetCertificateMapRequest targetHttpsProxiesSetCertificateMapRequestResource = new TargetHttpsProxiesSetCertificateMapRequest();
// Make the request
lro::Operation<Operation, Operation> response = await targetHttpsProxiesClient.SetCertificateMapAsync(project, targetHttpsProxy, targetHttpsProxiesSetCertificateMapRequestResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await targetHttpsProxiesClient.PollOnceSetCertificateMapAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetCertificateMapAsync(String, String, TargetHttpsProxiesSetCertificateMapRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> SetCertificateMapAsync(string project, string targetHttpsProxy, TargetHttpsProxiesSetCertificateMapRequest targetHttpsProxiesSetCertificateMapRequestResource, CancellationToken cancellationToken)
```

Changes the Certificate Map for TargetHttpsProxy.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`targetHttpsProxy`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the TargetHttpsProxy resource whose CertificateMap is to be set. The name must be 1-63 characters long, and comply with RFC1035.

`targetHttpsProxiesSetCertificateMapRequestResource`

`[TargetHttpsProxiesSetCertificateMapRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxiesSetCertificateMapRequest)`  

The body resource for this request

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string targetHttpsProxy = "";
TargetHttpsProxiesSetCertificateMapRequest targetHttpsProxiesSetCertificateMapRequestResource = new TargetHttpsProxiesSetCertificateMapRequest();
// Make the request
lro::Operation<Operation, Operation> response = await targetHttpsProxiesClient.SetCertificateMapAsync(project, targetHttpsProxy, targetHttpsProxiesSetCertificateMapRequestResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await targetHttpsProxiesClient.PollOnceSetCertificateMapAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetQuicOverride(SetQuicOverrideTargetHttpsProxyRequest, CallSettings)

```
public virtual Operation<Operation, Operation> SetQuicOverride(SetQuicOverrideTargetHttpsProxyRequest request, CallSettings callSettings = null)
```

Sets the QUIC override policy for TargetHttpsProxy.

**Parameters**

**Name**

**Description**

`request`

`[SetQuicOverrideTargetHttpsProxyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.SetQuicOverrideTargetHttpsProxyRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = TargetHttpsProxiesClient.Create();
// Initialize request argument(s)
SetQuicOverrideTargetHttpsProxyRequest request = new SetQuicOverrideTargetHttpsProxyRequest
{
    RequestId = "",
    TargetHttpsProxy = "",
    TargetHttpsProxiesSetQuicOverrideRequestResource = new TargetHttpsProxiesSetQuicOverrideRequest(),
    Project = "",
};
// Make the request
lro::Operation<Operation, Operation> response = targetHttpsProxiesClient.SetQuicOverride(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = targetHttpsProxiesClient.PollOnceSetQuicOverride(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetQuicOverride(String, String, TargetHttpsProxiesSetQuicOverrideRequest, CallSettings)

```
public virtual Operation<Operation, Operation> SetQuicOverride(string project, string targetHttpsProxy, TargetHttpsProxiesSetQuicOverrideRequest targetHttpsProxiesSetQuicOverrideRequestResource, CallSettings callSettings = null)
```

Sets the QUIC override policy for TargetHttpsProxy.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`targetHttpsProxy`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the TargetHttpsProxy resource to set the QUIC override policy for. The name should conform to RFC1035.

`targetHttpsProxiesSetQuicOverrideRequestResource`

`[TargetHttpsProxiesSetQuicOverrideRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxiesSetQuicOverrideRequest)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = TargetHttpsProxiesClient.Create();
// Initialize request argument(s)
string project = "";
string targetHttpsProxy = "";
TargetHttpsProxiesSetQuicOverrideRequest targetHttpsProxiesSetQuicOverrideRequestResource = new TargetHttpsProxiesSetQuicOverrideRequest();
// Make the request
lro::Operation<Operation, Operation> response = targetHttpsProxiesClient.SetQuicOverride(project, targetHttpsProxy, targetHttpsProxiesSetQuicOverrideRequestResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = targetHttpsProxiesClient.PollOnceSetQuicOverride(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetQuicOverrideAsync(SetQuicOverrideTargetHttpsProxyRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> SetQuicOverrideAsync(SetQuicOverrideTargetHttpsProxyRequest request, CallSettings callSettings = null)
```

Sets the QUIC override policy for TargetHttpsProxy.

**Parameters**

**Name**

**Description**

`request`

`[SetQuicOverrideTargetHttpsProxyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.SetQuicOverrideTargetHttpsProxyRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
SetQuicOverrideTargetHttpsProxyRequest request = new SetQuicOverrideTargetHttpsProxyRequest
{
    RequestId = "",
    TargetHttpsProxy = "",
    TargetHttpsProxiesSetQuicOverrideRequestResource = new TargetHttpsProxiesSetQuicOverrideRequest(),
    Project = "",
};
// Make the request
lro::Operation<Operation, Operation> response = await targetHttpsProxiesClient.SetQuicOverrideAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await targetHttpsProxiesClient.PollOnceSetQuicOverrideAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetQuicOverrideAsync(SetQuicOverrideTargetHttpsProxyRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> SetQuicOverrideAsync(SetQuicOverrideTargetHttpsProxyRequest request, CancellationToken cancellationToken)
```

Sets the QUIC override policy for TargetHttpsProxy.

**Parameters**

**Name**

**Description**

`request`

`[SetQuicOverrideTargetHttpsProxyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.SetQuicOverrideTargetHttpsProxyRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
SetQuicOverrideTargetHttpsProxyRequest request = new SetQuicOverrideTargetHttpsProxyRequest
{
    RequestId = "",
    TargetHttpsProxy = "",
    TargetHttpsProxiesSetQuicOverrideRequestResource = new TargetHttpsProxiesSetQuicOverrideRequest(),
    Project = "",
};
// Make the request
lro::Operation<Operation, Operation> response = await targetHttpsProxiesClient.SetQuicOverrideAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await targetHttpsProxiesClient.PollOnceSetQuicOverrideAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetQuicOverrideAsync(String, String, TargetHttpsProxiesSetQuicOverrideRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> SetQuicOverrideAsync(string project, string targetHttpsProxy, TargetHttpsProxiesSetQuicOverrideRequest targetHttpsProxiesSetQuicOverrideRequestResource, CallSettings callSettings = null)
```

Sets the QUIC override policy for TargetHttpsProxy.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`targetHttpsProxy`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the TargetHttpsProxy resource to set the QUIC override policy for. The name should conform to RFC1035.

`targetHttpsProxiesSetQuicOverrideRequestResource`

`[TargetHttpsProxiesSetQuicOverrideRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxiesSetQuicOverrideRequest)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string targetHttpsProxy = "";
TargetHttpsProxiesSetQuicOverrideRequest targetHttpsProxiesSetQuicOverrideRequestResource = new TargetHttpsProxiesSetQuicOverrideRequest();
// Make the request
lro::Operation<Operation, Operation> response = await targetHttpsProxiesClient.SetQuicOverrideAsync(project, targetHttpsProxy, targetHttpsProxiesSetQuicOverrideRequestResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await targetHttpsProxiesClient.PollOnceSetQuicOverrideAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetQuicOverrideAsync(String, String, TargetHttpsProxiesSetQuicOverrideRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> SetQuicOverrideAsync(string project, string targetHttpsProxy, TargetHttpsProxiesSetQuicOverrideRequest targetHttpsProxiesSetQuicOverrideRequestResource, CancellationToken cancellationToken)
```

Sets the QUIC override policy for TargetHttpsProxy.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`targetHttpsProxy`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the TargetHttpsProxy resource to set the QUIC override policy for. The name should conform to RFC1035.

`targetHttpsProxiesSetQuicOverrideRequestResource`

`[TargetHttpsProxiesSetQuicOverrideRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxiesSetQuicOverrideRequest)`  

The body resource for this request

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string targetHttpsProxy = "";
TargetHttpsProxiesSetQuicOverrideRequest targetHttpsProxiesSetQuicOverrideRequestResource = new TargetHttpsProxiesSetQuicOverrideRequest();
// Make the request
lro::Operation<Operation, Operation> response = await targetHttpsProxiesClient.SetQuicOverrideAsync(project, targetHttpsProxy, targetHttpsProxiesSetQuicOverrideRequestResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await targetHttpsProxiesClient.PollOnceSetQuicOverrideAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetSslCertificates(SetSslCertificatesTargetHttpsProxyRequest, CallSettings)

```
public virtual Operation<Operation, Operation> SetSslCertificates(SetSslCertificatesTargetHttpsProxyRequest request, CallSettings callSettings = null)
```

Replaces SslCertificates for TargetHttpsProxy.

**Parameters**

**Name**

**Description**

`request`

`[SetSslCertificatesTargetHttpsProxyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.SetSslCertificatesTargetHttpsProxyRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = TargetHttpsProxiesClient.Create();
// Initialize request argument(s)
SetSslCertificatesTargetHttpsProxyRequest request = new SetSslCertificatesTargetHttpsProxyRequest
{
    RequestId = "",
    TargetHttpsProxy = "",
    TargetHttpsProxiesSetSslCertificatesRequestResource = new TargetHttpsProxiesSetSslCertificatesRequest(),
    Project = "",
};
// Make the request
lro::Operation<Operation, Operation> response = targetHttpsProxiesClient.SetSslCertificates(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = targetHttpsProxiesClient.PollOnceSetSslCertificates(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetSslCertificates(String, String, TargetHttpsProxiesSetSslCertificatesRequest, CallSettings)

```
public virtual Operation<Operation, Operation> SetSslCertificates(string project, string targetHttpsProxy, TargetHttpsProxiesSetSslCertificatesRequest targetHttpsProxiesSetSslCertificatesRequestResource, CallSettings callSettings = null)
```

Replaces SslCertificates for TargetHttpsProxy.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`targetHttpsProxy`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the TargetHttpsProxy resource to set an SslCertificates resource for.

`targetHttpsProxiesSetSslCertificatesRequestResource`

`[TargetHttpsProxiesSetSslCertificatesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxiesSetSslCertificatesRequest)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = TargetHttpsProxiesClient.Create();
// Initialize request argument(s)
string project = "";
string targetHttpsProxy = "";
TargetHttpsProxiesSetSslCertificatesRequest targetHttpsProxiesSetSslCertificatesRequestResource = new TargetHttpsProxiesSetSslCertificatesRequest();
// Make the request
lro::Operation<Operation, Operation> response = targetHttpsProxiesClient.SetSslCertificates(project, targetHttpsProxy, targetHttpsProxiesSetSslCertificatesRequestResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = targetHttpsProxiesClient.PollOnceSetSslCertificates(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetSslCertificatesAsync(SetSslCertificatesTargetHttpsProxyRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> SetSslCertificatesAsync(SetSslCertificatesTargetHttpsProxyRequest request, CallSettings callSettings = null)
```

Replaces SslCertificates for TargetHttpsProxy.

**Parameters**

**Name**

**Description**

`request`

`[SetSslCertificatesTargetHttpsProxyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.SetSslCertificatesTargetHttpsProxyRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
SetSslCertificatesTargetHttpsProxyRequest request = new SetSslCertificatesTargetHttpsProxyRequest
{
    RequestId = "",
    TargetHttpsProxy = "",
    TargetHttpsProxiesSetSslCertificatesRequestResource = new TargetHttpsProxiesSetSslCertificatesRequest(),
    Project = "",
};
// Make the request
lro::Operation<Operation, Operation> response = await targetHttpsProxiesClient.SetSslCertificatesAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await targetHttpsProxiesClient.PollOnceSetSslCertificatesAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetSslCertificatesAsync(SetSslCertificatesTargetHttpsProxyRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> SetSslCertificatesAsync(SetSslCertificatesTargetHttpsProxyRequest request, CancellationToken cancellationToken)
```

Replaces SslCertificates for TargetHttpsProxy.

**Parameters**

**Name**

**Description**

`request`

`[SetSslCertificatesTargetHttpsProxyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.SetSslCertificatesTargetHttpsProxyRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
SetSslCertificatesTargetHttpsProxyRequest request = new SetSslCertificatesTargetHttpsProxyRequest
{
    RequestId = "",
    TargetHttpsProxy = "",
    TargetHttpsProxiesSetSslCertificatesRequestResource = new TargetHttpsProxiesSetSslCertificatesRequest(),
    Project = "",
};
// Make the request
lro::Operation<Operation, Operation> response = await targetHttpsProxiesClient.SetSslCertificatesAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await targetHttpsProxiesClient.PollOnceSetSslCertificatesAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetSslCertificatesAsync(String, String, TargetHttpsProxiesSetSslCertificatesRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> SetSslCertificatesAsync(string project, string targetHttpsProxy, TargetHttpsProxiesSetSslCertificatesRequest targetHttpsProxiesSetSslCertificatesRequestResource, CallSettings callSettings = null)
```

Replaces SslCertificates for TargetHttpsProxy.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`targetHttpsProxy`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the TargetHttpsProxy resource to set an SslCertificates resource for.

`targetHttpsProxiesSetSslCertificatesRequestResource`

`[TargetHttpsProxiesSetSslCertificatesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxiesSetSslCertificatesRequest)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string targetHttpsProxy = "";
TargetHttpsProxiesSetSslCertificatesRequest targetHttpsProxiesSetSslCertificatesRequestResource = new TargetHttpsProxiesSetSslCertificatesRequest();
// Make the request
lro::Operation<Operation, Operation> response = await targetHttpsProxiesClient.SetSslCertificatesAsync(project, targetHttpsProxy, targetHttpsProxiesSetSslCertificatesRequestResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await targetHttpsProxiesClient.PollOnceSetSslCertificatesAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetSslCertificatesAsync(String, String, TargetHttpsProxiesSetSslCertificatesRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> SetSslCertificatesAsync(string project, string targetHttpsProxy, TargetHttpsProxiesSetSslCertificatesRequest targetHttpsProxiesSetSslCertificatesRequestResource, CancellationToken cancellationToken)
```

Replaces SslCertificates for TargetHttpsProxy.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`targetHttpsProxy`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the TargetHttpsProxy resource to set an SslCertificates resource for.

`targetHttpsProxiesSetSslCertificatesRequestResource`

`[TargetHttpsProxiesSetSslCertificatesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxiesSetSslCertificatesRequest)`  

The body resource for this request

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string targetHttpsProxy = "";
TargetHttpsProxiesSetSslCertificatesRequest targetHttpsProxiesSetSslCertificatesRequestResource = new TargetHttpsProxiesSetSslCertificatesRequest();
// Make the request
lro::Operation<Operation, Operation> response = await targetHttpsProxiesClient.SetSslCertificatesAsync(project, targetHttpsProxy, targetHttpsProxiesSetSslCertificatesRequestResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await targetHttpsProxiesClient.PollOnceSetSslCertificatesAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetSslPolicy(SetSslPolicyTargetHttpsProxyRequest, CallSettings)

```
public virtual Operation<Operation, Operation> SetSslPolicy(SetSslPolicyTargetHttpsProxyRequest request, CallSettings callSettings = null)
```

Sets the SSL policy for TargetHttpsProxy. The SSL policy specifies the server-side support for SSL features. This affects connections between clients and the HTTPS proxy load balancer. They do not affect the connection between the load balancer and the backends.

**Parameters**

**Name**

**Description**

`request`

`[SetSslPolicyTargetHttpsProxyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.SetSslPolicyTargetHttpsProxyRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = TargetHttpsProxiesClient.Create();
// Initialize request argument(s)
SetSslPolicyTargetHttpsProxyRequest request = new SetSslPolicyTargetHttpsProxyRequest
{
    RequestId = "",
    TargetHttpsProxy = "",
    Project = "",
    SslPolicyReferenceResource = new SslPolicyReference(),
};
// Make the request
lro::Operation<Operation, Operation> response = targetHttpsProxiesClient.SetSslPolicy(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = targetHttpsProxiesClient.PollOnceSetSslPolicy(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetSslPolicy(String, String, SslPolicyReference, CallSettings)

```
public virtual Operation<Operation, Operation> SetSslPolicy(string project, string targetHttpsProxy, SslPolicyReference sslPolicyReferenceResource, CallSettings callSettings = null)
```

Sets the SSL policy for TargetHttpsProxy. The SSL policy specifies the server-side support for SSL features. This affects connections between clients and the HTTPS proxy load balancer. They do not affect the connection between the load balancer and the backends.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`targetHttpsProxy`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the TargetHttpsProxy resource whose SSL policy is to be set. The name must be 1-63 characters long, and comply with RFC1035.

`sslPolicyReferenceResource`

`[SslPolicyReference](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.SslPolicyReference)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = TargetHttpsProxiesClient.Create();
// Initialize request argument(s)
string project = "";
string targetHttpsProxy = "";
SslPolicyReference sslPolicyReferenceResource = new SslPolicyReference();
// Make the request
lro::Operation<Operation, Operation> response = targetHttpsProxiesClient.SetSslPolicy(project, targetHttpsProxy, sslPolicyReferenceResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = targetHttpsProxiesClient.PollOnceSetSslPolicy(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetSslPolicyAsync(SetSslPolicyTargetHttpsProxyRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> SetSslPolicyAsync(SetSslPolicyTargetHttpsProxyRequest request, CallSettings callSettings = null)
```

Sets the SSL policy for TargetHttpsProxy. The SSL policy specifies the server-side support for SSL features. This affects connections between clients and the HTTPS proxy load balancer. They do not affect the connection between the load balancer and the backends.

**Parameters**

**Name**

**Description**

`request`

`[SetSslPolicyTargetHttpsProxyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.SetSslPolicyTargetHttpsProxyRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
SetSslPolicyTargetHttpsProxyRequest request = new SetSslPolicyTargetHttpsProxyRequest
{
    RequestId = "",
    TargetHttpsProxy = "",
    Project = "",
    SslPolicyReferenceResource = new SslPolicyReference(),
};
// Make the request
lro::Operation<Operation, Operation> response = await targetHttpsProxiesClient.SetSslPolicyAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await targetHttpsProxiesClient.PollOnceSetSslPolicyAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetSslPolicyAsync(SetSslPolicyTargetHttpsProxyRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> SetSslPolicyAsync(SetSslPolicyTargetHttpsProxyRequest request, CancellationToken cancellationToken)
```

Sets the SSL policy for TargetHttpsProxy. The SSL policy specifies the server-side support for SSL features. This affects connections between clients and the HTTPS proxy load balancer. They do not affect the connection between the load balancer and the backends.

**Parameters**

**Name**

**Description**

`request`

`[SetSslPolicyTargetHttpsProxyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.SetSslPolicyTargetHttpsProxyRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
SetSslPolicyTargetHttpsProxyRequest request = new SetSslPolicyTargetHttpsProxyRequest
{
    RequestId = "",
    TargetHttpsProxy = "",
    Project = "",
    SslPolicyReferenceResource = new SslPolicyReference(),
};
// Make the request
lro::Operation<Operation, Operation> response = await targetHttpsProxiesClient.SetSslPolicyAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await targetHttpsProxiesClient.PollOnceSetSslPolicyAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetSslPolicyAsync(String, String, SslPolicyReference, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> SetSslPolicyAsync(string project, string targetHttpsProxy, SslPolicyReference sslPolicyReferenceResource, CallSettings callSettings = null)
```

Sets the SSL policy for TargetHttpsProxy. The SSL policy specifies the server-side support for SSL features. This affects connections between clients and the HTTPS proxy load balancer. They do not affect the connection between the load balancer and the backends.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`targetHttpsProxy`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the TargetHttpsProxy resource whose SSL policy is to be set. The name must be 1-63 characters long, and comply with RFC1035.

`sslPolicyReferenceResource`

`[SslPolicyReference](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.SslPolicyReference)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string targetHttpsProxy = "";
SslPolicyReference sslPolicyReferenceResource = new SslPolicyReference();
// Make the request
lro::Operation<Operation, Operation> response = await targetHttpsProxiesClient.SetSslPolicyAsync(project, targetHttpsProxy, sslPolicyReferenceResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await targetHttpsProxiesClient.PollOnceSetSslPolicyAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetSslPolicyAsync(String, String, SslPolicyReference, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> SetSslPolicyAsync(string project, string targetHttpsProxy, SslPolicyReference sslPolicyReferenceResource, CancellationToken cancellationToken)
```

Sets the SSL policy for TargetHttpsProxy. The SSL policy specifies the server-side support for SSL features. This affects connections between clients and the HTTPS proxy load balancer. They do not affect the connection between the load balancer and the backends.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`targetHttpsProxy`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the TargetHttpsProxy resource whose SSL policy is to be set. The name must be 1-63 characters long, and comply with RFC1035.

`sslPolicyReferenceResource`

`[SslPolicyReference](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.SslPolicyReference)`  

The body resource for this request

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string targetHttpsProxy = "";
SslPolicyReference sslPolicyReferenceResource = new SslPolicyReference();
// Make the request
lro::Operation<Operation, Operation> response = await targetHttpsProxiesClient.SetSslPolicyAsync(project, targetHttpsProxy, sslPolicyReferenceResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await targetHttpsProxiesClient.PollOnceSetSslPolicyAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetUrlMap(SetUrlMapTargetHttpsProxyRequest, CallSettings)

```
public virtual Operation<Operation, Operation> SetUrlMap(SetUrlMapTargetHttpsProxyRequest request, CallSettings callSettings = null)
```

Changes the URL map for TargetHttpsProxy.

**Parameters**

**Name**

**Description**

`request`

`[SetUrlMapTargetHttpsProxyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.SetUrlMapTargetHttpsProxyRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = TargetHttpsProxiesClient.Create();
// Initialize request argument(s)
SetUrlMapTargetHttpsProxyRequest request = new SetUrlMapTargetHttpsProxyRequest
{
    RequestId = "",
    TargetHttpsProxy = "",
    Project = "",
    UrlMapReferenceResource = new UrlMapReference(),
};
// Make the request
lro::Operation<Operation, Operation> response = targetHttpsProxiesClient.SetUrlMap(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = targetHttpsProxiesClient.PollOnceSetUrlMap(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetUrlMap(String, String, UrlMapReference, CallSettings)

```
public virtual Operation<Operation, Operation> SetUrlMap(string project, string targetHttpsProxy, UrlMapReference urlMapReferenceResource, CallSettings callSettings = null)
```

Changes the URL map for TargetHttpsProxy.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`targetHttpsProxy`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the TargetHttpsProxy resource whose URL map is to be set.

`urlMapReferenceResource`

`[UrlMapReference](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.UrlMapReference)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>`

The RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = TargetHttpsProxiesClient.Create();
// Initialize request argument(s)
string project = "";
string targetHttpsProxy = "";
UrlMapReference urlMapReferenceResource = new UrlMapReference();
// Make the request
lro::Operation<Operation, Operation> response = targetHttpsProxiesClient.SetUrlMap(project, targetHttpsProxy, urlMapReferenceResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = response.PollUntilCompleted();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = targetHttpsProxiesClient.PollOnceSetUrlMap(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetUrlMapAsync(SetUrlMapTargetHttpsProxyRequest, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> SetUrlMapAsync(SetUrlMapTargetHttpsProxyRequest request, CallSettings callSettings = null)
```

Changes the URL map for TargetHttpsProxy.

**Parameters**

**Name**

**Description**

`request`

`[SetUrlMapTargetHttpsProxyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.SetUrlMapTargetHttpsProxyRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
SetUrlMapTargetHttpsProxyRequest request = new SetUrlMapTargetHttpsProxyRequest
{
    RequestId = "",
    TargetHttpsProxy = "",
    Project = "",
    UrlMapReferenceResource = new UrlMapReference(),
};
// Make the request
lro::Operation<Operation, Operation> response = await targetHttpsProxiesClient.SetUrlMapAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await targetHttpsProxiesClient.PollOnceSetUrlMapAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetUrlMapAsync(SetUrlMapTargetHttpsProxyRequest, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> SetUrlMapAsync(SetUrlMapTargetHttpsProxyRequest request, CancellationToken cancellationToken)
```

Changes the URL map for TargetHttpsProxy.

**Parameters**

**Name**

**Description**

`request`

`[SetUrlMapTargetHttpsProxyRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.SetUrlMapTargetHttpsProxyRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
SetUrlMapTargetHttpsProxyRequest request = new SetUrlMapTargetHttpsProxyRequest
{
    RequestId = "",
    TargetHttpsProxy = "",
    Project = "",
    UrlMapReferenceResource = new UrlMapReference(),
};
// Make the request
lro::Operation<Operation, Operation> response = await targetHttpsProxiesClient.SetUrlMapAsync(request);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await targetHttpsProxiesClient.PollOnceSetUrlMapAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetUrlMapAsync(String, String, UrlMapReference, CallSettings)

```
public virtual Task<Operation<Operation, Operation>> SetUrlMapAsync(string project, string targetHttpsProxy, UrlMapReference urlMapReferenceResource, CallSettings callSettings = null)
```

Changes the URL map for TargetHttpsProxy.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`targetHttpsProxy`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the TargetHttpsProxy resource whose URL map is to be set.

`urlMapReferenceResource`

`[UrlMapReference](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.UrlMapReference)`  

The body resource for this request

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string targetHttpsProxy = "";
UrlMapReference urlMapReferenceResource = new UrlMapReference();
// Make the request
lro::Operation<Operation, Operation> response = await targetHttpsProxiesClient.SetUrlMapAsync(project, targetHttpsProxy, urlMapReferenceResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await targetHttpsProxiesClient.PollOnceSetUrlMapAsync(operationName);
// Check if the retrieved long-running operation has completed
if (retrievedResponse.IsCompleted)
{
    // If it has completed, then access the result
    Operation retrievedResult = retrievedResponse.Result;
}
```

### SetUrlMapAsync(String, String, UrlMapReference, CancellationToken)

```
public virtual Task<Operation<Operation, Operation>> SetUrlMapAsync(string project, string targetHttpsProxy, UrlMapReference urlMapReferenceResource, CancellationToken cancellationToken)
```

Changes the URL map for TargetHttpsProxy.

**Parameters**

**Name**

**Description**

`project`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`targetHttpsProxy`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the TargetHttpsProxy resource whose URL map is to be set.

`urlMapReferenceResource`

`[UrlMapReference](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.UrlMapReference)`  

The body resource for this request

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Operation](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.Operation-2.html)<[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation), [Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.Operation)>>`

A Task containing the RPC response.

**Example**

```
// Create client
TargetHttpsProxiesClient targetHttpsProxiesClient = await TargetHttpsProxiesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string targetHttpsProxy = "";
UrlMapReference urlMapReferenceResource = new UrlMapReference();
// Make the request
lro::Operation<Operation, Operation> response = await targetHttpsProxiesClient.SetUrlMapAsync(project, targetHttpsProxy, urlMapReferenceResource);

// Poll until the returned long-running operation is complete
lro::Operation<Operation, Operation> completedResponse = await response.PollUntilCompletedAsync();
// Retrieve the operation result
Operation result = completedResponse.Result;

// Or get the name of the operation
string operationName = response.Name;
// This name can be stored, then the long-running operation retrieved later by name
lro::Operation<Operation, Operation> retrievedResponse = await targetHttpsProxiesClient.PollOnceSetUrlMapAsync(operationName);
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

Shuts down any channels automatically created by [Create()](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxiesClient#Google_Cloud_Compute_V1_TargetHttpsProxiesClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxiesClient#Google_Cloud_Compute_V1_TargetHttpsProxiesClient_CreateAsync_System_Threading_CancellationToken_). Channels which weren't automatically created are not affected.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A task representing the asynchronous shutdown operation.

**Remarks**

After calling this method, further calls to [Create()](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxiesClient#Google_Cloud_Compute_V1_TargetHttpsProxiesClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.TargetHttpsProxiesClient#Google_Cloud_Compute_V1_TargetHttpsProxiesClient_CreateAsync_System_Threading_CancellationToken_) will create new channels, which could in turn be shut down by another call to this method.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
