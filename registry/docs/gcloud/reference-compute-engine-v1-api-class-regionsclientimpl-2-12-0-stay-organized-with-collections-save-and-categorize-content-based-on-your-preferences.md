-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class RegionsClientImpl (2.12.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class RegionsClientImpl : RegionsClient
```

Reference documentation and code samples for the Compute Engine v1 API class RegionsClientImpl.

Regions client wrapper implementation, for convenient use.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> [RegionsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionsClient) \> RegionsClientImpl

## Inherited Members

[RegionsClient.DefaultEndpoint](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionsClient#Google_Cloud_Compute_V1_RegionsClient_DefaultEndpoint)

[RegionsClient.DefaultScopes](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionsClient#Google_Cloud_Compute_V1_RegionsClient_DefaultScopes)

[RegionsClient.ServiceMetadata](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionsClient#Google_Cloud_Compute_V1_RegionsClient_ServiceMetadata)

[RegionsClient.CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionsClient#Google_Cloud_Compute_V1_RegionsClient_CreateAsync_System_Threading_CancellationToken_)

[RegionsClient.Create()](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionsClient#Google_Cloud_Compute_V1_RegionsClient_Create)

[RegionsClient.ShutdownDefaultChannelsAsync()](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionsClient#Google_Cloud_Compute_V1_RegionsClient_ShutdownDefaultChannelsAsync)

[RegionsClient.GetAsync(GetRegionRequest, CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionsClient#Google_Cloud_Compute_V1_RegionsClient_GetAsync_Google_Cloud_Compute_V1_GetRegionRequest_System_Threading_CancellationToken_)

[RegionsClient.Get(string, string, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionsClient#Google_Cloud_Compute_V1_RegionsClient_Get_System_String_System_String_Google_Api_Gax_Grpc_CallSettings_)

[RegionsClient.GetAsync(string, string, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionsClient#Google_Cloud_Compute_V1_RegionsClient_GetAsync_System_String_System_String_Google_Api_Gax_Grpc_CallSettings_)

[RegionsClient.GetAsync(string, string, CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionsClient#Google_Cloud_Compute_V1_RegionsClient_GetAsync_System_String_System_String_System_Threading_CancellationToken_)

[RegionsClient.List(string, string, int?, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionsClient#Google_Cloud_Compute_V1_RegionsClient_List_System_String_System_String_System_Nullable_System_Int32__Google_Api_Gax_Grpc_CallSettings_)

[RegionsClient.ListAsync(string, string, int?, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionsClient#Google_Cloud_Compute_V1_RegionsClient_ListAsync_System_String_System_String_System_Nullable_System_Int32__Google_Api_Gax_Grpc_CallSettings_)

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Remarks

The Regions API.

## Constructors

### RegionsClientImpl(RegionsClient, RegionsSettings, ILogger)

```
public RegionsClientImpl(Regions.RegionsClient grpcClient, RegionsSettings settings, ILogger logger)
```

Constructs a client wrapper for the Regions service, with the specified gRPC client and settings.

**Parameters**

**Name**

**Description**

`grpcClient`

`[Regions](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Regions)[RegionsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Regions.RegionsClient)`  

The underlying gRPC client.

`settings`

`[RegionsSettings](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionsSettings)`  

The base [RegionsSettings](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionsSettings) used within this client.

`logger`

`[ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger)`  

Optional [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger) to use within this client.

## Properties

### GrpcClient

```
public override Regions.RegionsClient GrpcClient { get; }
```

The underlying gRPC Regions client

**Property Value**

**Type**

**Description**

`[Regions](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Regions)[RegionsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Regions.RegionsClient)`

**Overrides**

[RegionsClient.GrpcClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionsClient#Google_Cloud_Compute_V1_RegionsClient_GrpcClient)

## Methods

### Get(GetRegionRequest, CallSettings)

```
public override Region Get(GetRegionRequest request, CallSettings callSettings = null)
```

Returns the specified Region resource. To decrease latency for this method, you can optionally omit any unneeded information from the response by using a field mask. This practice is especially recommended for unused quota information (the `quotas` field). To exclude one or more fields, set your request's `fields` query parameter to only include the fields you need. For example, to only include the `id` and `selfLink` fields, add the query parameter `?fields=id,selfLink` to your request.

**Parameters**

**Name**

**Description**

`request`

`[GetRegionRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.GetRegionRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Region](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Region)`

The RPC response.

**Overrides**

[RegionsClient.Get(GetRegionRequest, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionsClient#Google_Cloud_Compute_V1_RegionsClient_Get_Google_Cloud_Compute_V1_GetRegionRequest_Google_Api_Gax_Grpc_CallSettings_)

### GetAsync(GetRegionRequest, CallSettings)

```
public override Task<Region> GetAsync(GetRegionRequest request, CallSettings callSettings = null)
```

Returns the specified Region resource. To decrease latency for this method, you can optionally omit any unneeded information from the response by using a field mask. This practice is especially recommended for unused quota information (the `quotas` field). To exclude one or more fields, set your request's `fields` query parameter to only include the fields you need. For example, to only include the `id` and `selfLink` fields, add the query parameter `?fields=id,selfLink` to your request.

**Parameters**

**Name**

**Description**

`request`

`[GetRegionRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.GetRegionRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Region](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Region)`

A Task containing the RPC response.

**Overrides**

[RegionsClient.GetAsync(GetRegionRequest, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionsClient#Google_Cloud_Compute_V1_RegionsClient_GetAsync_Google_Cloud_Compute_V1_GetRegionRequest_Google_Api_Gax_Grpc_CallSettings_)

### List(ListRegionsRequest, CallSettings)

```
public override PagedEnumerable<RegionList, Region> List(ListRegionsRequest request, CallSettings callSettings = null)
```

Retrieves the list of region resources available to the specified project. To decrease latency for this method, you can optionally omit any unneeded information from the response by using a field mask. This practice is especially recommended for unused quota information (the `items.quotas` field). To exclude one or more fields, set your request's `fields` query parameter to only include the fields you need. For example, to only include the `id` and `selfLink` fields, add the query parameter `?fields=id,selfLink` to your request.

**Parameters**

**Name**

**Description**

`request`

`[ListRegionsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.ListRegionsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/PagedEnumerable.cs)[RegionList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionList)[Region](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Region)`

A pageable sequence of [Region](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Region) resources.

**Overrides**

[RegionsClient.List(ListRegionsRequest, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionsClient#Google_Cloud_Compute_V1_RegionsClient_List_Google_Cloud_Compute_V1_ListRegionsRequest_Google_Api_Gax_Grpc_CallSettings_)

### ListAsync(ListRegionsRequest, CallSettings)

```
public override PagedAsyncEnumerable<RegionList, Region> ListAsync(ListRegionsRequest request, CallSettings callSettings = null)
```

Retrieves the list of region resources available to the specified project. To decrease latency for this method, you can optionally omit any unneeded information from the response by using a field mask. This practice is especially recommended for unused quota information (the `items.quotas` field). To exclude one or more fields, set your request's `fields` query parameter to only include the fields you need. For example, to only include the `id` and `selfLink` fields, add the query parameter `?fields=id,selfLink` to your request.

**Parameters**

**Name**

**Description**

`request`

`[ListRegionsRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.ListRegionsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/PagedAsyncEnumerable.cs)[RegionList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionList)[Region](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Region)`

A pageable asynchronous sequence of [Region](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.Region) resources.

**Overrides**

[RegionsClient.ListAsync(ListRegionsRequest, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.12.0/Google.Cloud.Compute.V1.RegionsClient#Google_Cloud_Compute_V1_RegionsClient_ListAsync_Google_Cloud_Compute_V1_ListRegionsRequest_Google_Api_Gax_Grpc_CallSettings_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
