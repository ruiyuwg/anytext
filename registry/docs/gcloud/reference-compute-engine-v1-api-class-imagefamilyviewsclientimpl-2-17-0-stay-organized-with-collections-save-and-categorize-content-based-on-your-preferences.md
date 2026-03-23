-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class ImageFamilyViewsClientImpl (2.17.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class ImageFamilyViewsClientImpl : ImageFamilyViewsClient
```

Reference documentation and code samples for the Compute Engine v1 API class ImageFamilyViewsClientImpl.

ImageFamilyViews client wrapper implementation, for convenient use.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> [ImageFamilyViewsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.17.0/Google.Cloud.Compute.V1.ImageFamilyViewsClient) \> ImageFamilyViewsClientImpl

## Inherited Members

[ImageFamilyViewsClient.DefaultEndpoint](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.17.0/Google.Cloud.Compute.V1.ImageFamilyViewsClient#Google_Cloud_Compute_V1_ImageFamilyViewsClient_DefaultEndpoint)

[ImageFamilyViewsClient.DefaultScopes](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.17.0/Google.Cloud.Compute.V1.ImageFamilyViewsClient#Google_Cloud_Compute_V1_ImageFamilyViewsClient_DefaultScopes)

[ImageFamilyViewsClient.ServiceMetadata](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.17.0/Google.Cloud.Compute.V1.ImageFamilyViewsClient#Google_Cloud_Compute_V1_ImageFamilyViewsClient_ServiceMetadata)

[ImageFamilyViewsClient.CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.17.0/Google.Cloud.Compute.V1.ImageFamilyViewsClient#Google_Cloud_Compute_V1_ImageFamilyViewsClient_CreateAsync_System_Threading_CancellationToken_)

[ImageFamilyViewsClient.Create()](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.17.0/Google.Cloud.Compute.V1.ImageFamilyViewsClient#Google_Cloud_Compute_V1_ImageFamilyViewsClient_Create)

[ImageFamilyViewsClient.ShutdownDefaultChannelsAsync()](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.17.0/Google.Cloud.Compute.V1.ImageFamilyViewsClient#Google_Cloud_Compute_V1_ImageFamilyViewsClient_ShutdownDefaultChannelsAsync)

[ImageFamilyViewsClient.GetAsync(GetImageFamilyViewRequest, CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.17.0/Google.Cloud.Compute.V1.ImageFamilyViewsClient#Google_Cloud_Compute_V1_ImageFamilyViewsClient_GetAsync_Google_Cloud_Compute_V1_GetImageFamilyViewRequest_System_Threading_CancellationToken_)

[ImageFamilyViewsClient.Get(string, string, string, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.17.0/Google.Cloud.Compute.V1.ImageFamilyViewsClient#Google_Cloud_Compute_V1_ImageFamilyViewsClient_Get_System_String_System_String_System_String_Google_Api_Gax_Grpc_CallSettings_)

[ImageFamilyViewsClient.GetAsync(string, string, string, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.17.0/Google.Cloud.Compute.V1.ImageFamilyViewsClient#Google_Cloud_Compute_V1_ImageFamilyViewsClient_GetAsync_System_String_System_String_System_String_Google_Api_Gax_Grpc_CallSettings_)

[ImageFamilyViewsClient.GetAsync(string, string, string, CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.17.0/Google.Cloud.Compute.V1.ImageFamilyViewsClient#Google_Cloud_Compute_V1_ImageFamilyViewsClient_GetAsync_System_String_System_String_System_String_System_Threading_CancellationToken_)

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.17.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Remarks

The ImageFamilyViews API.

## Constructors

### ImageFamilyViewsClientImpl(ImageFamilyViewsClient, ImageFamilyViewsSettings, ILogger)

```
public ImageFamilyViewsClientImpl(ImageFamilyViews.ImageFamilyViewsClient grpcClient, ImageFamilyViewsSettings settings, ILogger logger)
```

Constructs a client wrapper for the ImageFamilyViews service, with the specified gRPC client and settings.

**Parameters**

**Name**

**Description**

`grpcClient`

`[ImageFamilyViews](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.17.0/Google.Cloud.Compute.V1.ImageFamilyViews)[ImageFamilyViewsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.17.0/Google.Cloud.Compute.V1.ImageFamilyViews.ImageFamilyViewsClient)`  

The underlying gRPC client.

`settings`

`[ImageFamilyViewsSettings](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.17.0/Google.Cloud.Compute.V1.ImageFamilyViewsSettings)`  

The base [ImageFamilyViewsSettings](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.17.0/Google.Cloud.Compute.V1.ImageFamilyViewsSettings) used within this client.

`logger`

`[ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger)`  

Optional [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger) to use within this client.

## Properties

### GrpcClient

```
public override ImageFamilyViews.ImageFamilyViewsClient GrpcClient { get; }
```

The underlying gRPC ImageFamilyViews client

**Property Value**

**Type**

**Description**

`[ImageFamilyViews](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.17.0/Google.Cloud.Compute.V1.ImageFamilyViews)[ImageFamilyViewsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.17.0/Google.Cloud.Compute.V1.ImageFamilyViews.ImageFamilyViewsClient)`

**Overrides**

[ImageFamilyViewsClient.GrpcClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.17.0/Google.Cloud.Compute.V1.ImageFamilyViewsClient#Google_Cloud_Compute_V1_ImageFamilyViewsClient_GrpcClient)

## Methods

### Get(GetImageFamilyViewRequest, CallSettings)

```
public override ImageFamilyView Get(GetImageFamilyViewRequest request, CallSettings callSettings = null)
```

Returns the latest image that is part of an image family, is not deprecated and is rolled out in the specified zone.

**Parameters**

**Name**

**Description**

`request`

`[GetImageFamilyViewRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.17.0/Google.Cloud.Compute.V1.GetImageFamilyViewRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[ImageFamilyView](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.17.0/Google.Cloud.Compute.V1.ImageFamilyView)`

The RPC response.

**Overrides**

[ImageFamilyViewsClient.Get(GetImageFamilyViewRequest, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.17.0/Google.Cloud.Compute.V1.ImageFamilyViewsClient#Google_Cloud_Compute_V1_ImageFamilyViewsClient_Get_Google_Cloud_Compute_V1_GetImageFamilyViewRequest_Google_Api_Gax_Grpc_CallSettings_)

### GetAsync(GetImageFamilyViewRequest, CallSettings)

```
public override Task<ImageFamilyView> GetAsync(GetImageFamilyViewRequest request, CallSettings callSettings = null)
```

Returns the latest image that is part of an image family, is not deprecated and is rolled out in the specified zone.

**Parameters**

**Name**

**Description**

`request`

`[GetImageFamilyViewRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.17.0/Google.Cloud.Compute.V1.GetImageFamilyViewRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[ImageFamilyView](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.17.0/Google.Cloud.Compute.V1.ImageFamilyView)`

A Task containing the RPC response.

**Overrides**

[ImageFamilyViewsClient.GetAsync(GetImageFamilyViewRequest, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.17.0/Google.Cloud.Compute.V1.ImageFamilyViewsClient#Google_Cloud_Compute_V1_ImageFamilyViewsClient_GetAsync_Google_Cloud_Compute_V1_GetImageFamilyViewRequest_Google_Api_Gax_Grpc_CallSettings_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
