-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class ZonesClient (3.3.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public abstract class ZonesClient
```

Reference documentation and code samples for the Compute Engine v1 API class ZonesClient.

Zones client wrapper, for convenient use.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ZonesClient

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Derived Types

[ZonesClientImpl](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.ZonesClientImpl)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Remarks

The Zones API.

## Properties

### DefaultEndpoint

```
public static string DefaultEndpoint { get; }
```

The default endpoint for the Zones service, which is a host of "compute.googleapis.com" and a port of 443.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### DefaultScopes

```
public static IReadOnlyList<string> DefaultScopes { get; }
```

The default Zones scopes.

**Property Value**

**Type**

**Description**

`[IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)[string](https://learn.microsoft.com/dotnet/api/system.string)`

**Remarks**

The default Zones scopes are:

-   [https://www.googleapis.com/auth/compute.readonly](https://www.googleapis.com/auth/compute.readonly)
-   [https://www.googleapis.com/auth/compute](https://www.googleapis.com/auth/compute)
-   [https://www.googleapis.com/auth/cloud-platform](https://www.googleapis.com/auth/cloud-platform)

### GrpcClient

```
public virtual Zones.ZonesClient GrpcClient { get; }
```

The underlying gRPC Zones client

**Property Value**

**Type**

**Description**

`[Zones](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Zones)[ZonesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Zones.ZonesClient)`

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
public static ZonesClient Create()
```

Synchronously creates a [ZonesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.ZonesClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [ZonesClientBuilder](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.ZonesClientBuilder).

**Returns**

**Type**

**Description**

`[ZonesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.ZonesClient)`

The created [ZonesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.ZonesClient).

### CreateAsync(CancellationToken)

```
public static Task<ZonesClient> CreateAsync(CancellationToken cancellationToken = default)
```

Asynchronously creates a [ZonesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.ZonesClient) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [ZonesClientBuilder](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.ZonesClientBuilder).

**Parameter**

**Name**

**Description**

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

The [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use while creating the client.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[ZonesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.ZonesClient)`

The task representing the created [ZonesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.ZonesClient).

### Get(GetZoneRequest, CallSettings)

```
public virtual Zone Get(GetZoneRequest request, CallSettings callSettings = null)
```

Returns the specified Zone resource.

**Parameters**

**Name**

**Description**

`request`

`[GetZoneRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.GetZoneRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Zone](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Zone)`

The RPC response.

**Example**

```
// Create client
ZonesClient zonesClient = ZonesClient.Create();
// Initialize request argument(s)
GetZoneRequest request = new GetZoneRequest
{
    Zone = "",
    Project = "",
};
// Make the request
Zone response = zonesClient.Get(request);
```

### Get(string, string, CallSettings)

```
public virtual Zone Get(string project, string zone, CallSettings callSettings = null)
```

Returns the specified Zone resource.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the zone resource to return.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Zone](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Zone)`

The RPC response.

**Example**

```
// Create client
ZonesClient zonesClient = ZonesClient.Create();
// Initialize request argument(s)
string project = "";
string zone = "";
// Make the request
Zone response = zonesClient.Get(project, zone);
```

### GetAsync(GetZoneRequest, CallSettings)

```
public virtual Task<Zone> GetAsync(GetZoneRequest request, CallSettings callSettings = null)
```

Returns the specified Zone resource.

**Parameters**

**Name**

**Description**

`request`

`[GetZoneRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.GetZoneRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Zone](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Zone)`

A Task containing the RPC response.

**Example**

```
// Create client
ZonesClient zonesClient = await ZonesClient.CreateAsync();
// Initialize request argument(s)
GetZoneRequest request = new GetZoneRequest
{
    Zone = "",
    Project = "",
};
// Make the request
Zone response = await zonesClient.GetAsync(request);
```

### GetAsync(GetZoneRequest, CancellationToken)

```
public virtual Task<Zone> GetAsync(GetZoneRequest request, CancellationToken cancellationToken)
```

Returns the specified Zone resource.

**Parameters**

**Name**

**Description**

`request`

`[GetZoneRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.GetZoneRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Zone](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Zone)`

A Task containing the RPC response.

**Example**

```
// Create client
ZonesClient zonesClient = await ZonesClient.CreateAsync();
// Initialize request argument(s)
GetZoneRequest request = new GetZoneRequest
{
    Zone = "",
    Project = "",
};
// Make the request
Zone response = await zonesClient.GetAsync(request);
```

### GetAsync(string, string, CallSettings)

```
public virtual Task<Zone> GetAsync(string project, string zone, CallSettings callSettings = null)
```

Returns the specified Zone resource.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the zone resource to return.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Zone](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Zone)`

A Task containing the RPC response.

**Example**

```
// Create client
ZonesClient zonesClient = await ZonesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string zone = "";
// Make the request
Zone response = await zonesClient.GetAsync(project, zone);
```

### GetAsync(string, string, CancellationToken)

```
public virtual Task<Zone> GetAsync(string project, string zone, CancellationToken cancellationToken)
```

Returns the specified Zone resource.

**Parameters**

**Name**

**Description**

`project`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Project ID for this request.

`zone`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

Name of the zone resource to return.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Zone](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Zone)`

A Task containing the RPC response.

**Example**

```
// Create client
ZonesClient zonesClient = await ZonesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
string zone = "";
// Make the request
Zone response = await zonesClient.GetAsync(project, zone);
```

### List(ListZonesRequest, CallSettings)

```
public virtual PagedEnumerable<ZoneList, Zone> List(ListZonesRequest request, CallSettings callSettings = null)
```

Retrieves the list of Zone resources available to the specified project.

**Parameters**

**Name**

**Description**

`request`

`[ListZonesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.ListZonesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)[ZoneList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.ZoneList)[Zone](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Zone)`

A pageable sequence of [Zone](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Zone) resources.

**Example**

```
// Create client
ZonesClient zonesClient = ZonesClient.Create();
// Initialize request argument(s)
ListZonesRequest request = new ListZonesRequest
{
    OrderBy = "",
    Project = "",
    Filter = "",
    ReturnPartialSuccess = false,
};
// Make the request
PagedEnumerable<ZoneList, Zone> response = zonesClient.List(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (Zone item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ZoneList page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Zone item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Zone> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Zone item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### List(string, string, int?, CallSettings)

```
public virtual PagedEnumerable<ZoneList, Zone> List(string project, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Retrieves the list of Zone resources available to the specified project.

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

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)[ZoneList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.ZoneList)[Zone](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Zone)`

A pageable sequence of [Zone](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Zone) resources.

**Example**

```
// Create client
ZonesClient zonesClient = ZonesClient.Create();
// Initialize request argument(s)
string project = "";
// Make the request
PagedEnumerable<ZoneList, Zone> response = zonesClient.List(project);

// Iterate over all response items, lazily performing RPCs as required
foreach (Zone item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ZoneList page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Zone item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Zone> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Zone item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListAsync(ListZonesRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ZoneList, Zone> ListAsync(ListZonesRequest request, CallSettings callSettings = null)
```

Retrieves the list of Zone resources available to the specified project.

**Parameters**

**Name**

**Description**

`request`

`[ListZonesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.ListZonesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)[ZoneList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.ZoneList)[Zone](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Zone)`

A pageable asynchronous sequence of [Zone](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Zone) resources.

**Example**

```
// Create client
ZonesClient zonesClient = await ZonesClient.CreateAsync();
// Initialize request argument(s)
ListZonesRequest request = new ListZonesRequest
{
    OrderBy = "",
    Project = "",
    Filter = "",
    ReturnPartialSuccess = false,
};
// Make the request
PagedAsyncEnumerable<ZoneList, Zone> response = zonesClient.ListAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((Zone item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ZoneList page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Zone item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Zone> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Zone item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListAsync(string, string, int?, CallSettings)

```
public virtual PagedAsyncEnumerable<ZoneList, Zone> ListAsync(string project, string pageToken = null, int? pageSize = null, CallSettings callSettings = null)
```

Retrieves the list of Zone resources available to the specified project.

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

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)[ZoneList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.ZoneList)[Zone](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Zone)`

A pageable asynchronous sequence of [Zone](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.Zone) resources.

**Example**

```
// Create client
ZonesClient zonesClient = await ZonesClient.CreateAsync();
// Initialize request argument(s)
string project = "";
// Make the request
PagedAsyncEnumerable<ZoneList, Zone> response = zonesClient.ListAsync(project);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((Zone item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ZoneList page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (Zone item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<Zone> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (Zone item in singlePage)
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

Shuts down any channels automatically created by [Create()](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.ZonesClient#Google_Cloud_Compute_V1_ZonesClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.ZonesClient#Google_Cloud_Compute_V1_ZonesClient_CreateAsync_System_Threading_CancellationToken_). Channels which weren't automatically created are not affected.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A task representing the asynchronous shutdown operation.

**Remarks**

After calling this method, further calls to [Create()](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.ZonesClient#Google_Cloud_Compute_V1_ZonesClient_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.3.0/Google.Cloud.Compute.V1.ZonesClient#Google_Cloud_Compute_V1_ZonesClient_CreateAsync_System_Threading_CancellationToken_) will create new channels, which could in turn be shut down by another call to this method.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
