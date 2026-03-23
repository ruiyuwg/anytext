-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Network Connectivity v1 API - Class ListDestinationsRequest (2.14.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [2.14.0 (latest)](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/latest/Google.Cloud.NetworkConnectivity.V1.ListDestinationsRequest)
-   [2.13.0](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/2.13.0/Google.Cloud.NetworkConnectivity.V1.ListDestinationsRequest)
-   [2.12.0](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/2.12.0/Google.Cloud.NetworkConnectivity.V1.ListDestinationsRequest)
-   [2.11.0](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/2.11.0/Google.Cloud.NetworkConnectivity.V1.ListDestinationsRequest)
-   [2.10.0](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/2.10.0/Google.Cloud.NetworkConnectivity.V1.ListDestinationsRequest)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/2.9.0/Google.Cloud.NetworkConnectivity.V1.ListDestinationsRequest)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/2.8.0/Google.Cloud.NetworkConnectivity.V1.ListDestinationsRequest)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/2.7.0/Google.Cloud.NetworkConnectivity.V1.ListDestinationsRequest)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/2.6.0/Google.Cloud.NetworkConnectivity.V1.ListDestinationsRequest)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/2.5.0/Google.Cloud.NetworkConnectivity.V1.ListDestinationsRequest)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/2.4.0/Google.Cloud.NetworkConnectivity.V1.ListDestinationsRequest)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/2.3.0/Google.Cloud.NetworkConnectivity.V1.ListDestinationsRequest)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/2.2.0/Google.Cloud.NetworkConnectivity.V1.ListDestinationsRequest)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/2.1.0/Google.Cloud.NetworkConnectivity.V1.ListDestinationsRequest)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/2.0.0/Google.Cloud.NetworkConnectivity.V1.ListDestinationsRequest)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/1.2.0/Google.Cloud.NetworkConnectivity.V1.ListDestinationsRequest)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/1.1.0/Google.Cloud.NetworkConnectivity.V1.ListDestinationsRequest)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/1.0.0/Google.Cloud.NetworkConnectivity.V1.ListDestinationsRequest)

```
public sealed class ListDestinationsRequest : IMessage<ListDestinationsRequest>, IEquatable<ListDestinationsRequest>, IDeepCloneable<ListDestinationsRequest>, IBufferMessage, IMessage, IPageRequest
```

Reference documentation and code samples for the Network Connectivity v1 API class ListDestinationsRequest.

Request message to list `Destination` resources.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ListDestinationsRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[ListDestinationsRequest](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/latest/Google.Cloud.NetworkConnectivity.V1.ListDestinationsRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[ListDestinationsRequest](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/latest/Google.Cloud.NetworkConnectivity.V1.ListDestinationsRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[ListDestinationsRequest](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/latest/Google.Cloud.NetworkConnectivity.V1.ListDestinationsRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html), [IPageRequest](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.IPageRequest.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.NetworkConnectivity.V1](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/latest/Google.Cloud.NetworkConnectivity.V1)

## Assembly

Google.Cloud.NetworkConnectivity.V1.dll

## Constructors

### ListDestinationsRequest()

```
public ListDestinationsRequest()
```

### ListDestinationsRequest(ListDestinationsRequest)

```
public ListDestinationsRequest(ListDestinationsRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[ListDestinationsRequest](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/latest/Google.Cloud.NetworkConnectivity.V1.ListDestinationsRequest)`  

## Properties

### Filter

```
public string Filter { get; set; }
```

Optional. An expression that filters the results listed in the response.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### OrderBy

```
public string OrderBy { get; set; }
```

Optional. The sort order of the results.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### PageSize

```
public int PageSize { get; set; }
```

Optional. The maximum number of results listed per page.

**Property Value**

**Type**

**Description**

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`

### PageToken

```
public string PageToken { get; set; }
```

Optional. The page token.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Parent

```
public string Parent { get; set; }
```

Required. The name of the parent resource.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ParentAsMulticloudDataTransferConfigName

```
public MulticloudDataTransferConfigName ParentAsMulticloudDataTransferConfigName { get; set; }
```

[MulticloudDataTransferConfigName](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/latest/Google.Cloud.NetworkConnectivity.V1.MulticloudDataTransferConfigName)\-typed view over the [Parent](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/latest/Google.Cloud.NetworkConnectivity.V1.ListDestinationsRequest#Google_Cloud_NetworkConnectivity_V1_ListDestinationsRequest_Parent) resource name property.

**Property Value**

**Type**

**Description**

`[MulticloudDataTransferConfigName](/dotnet/docs/reference/Google.Cloud.NetworkConnectivity.V1/latest/Google.Cloud.NetworkConnectivity.V1.MulticloudDataTransferConfigName)`

### ReturnPartialSuccess

```
public bool ReturnPartialSuccess { get; set; }
```

Optional. If `true`, allow partial responses for multi-regional aggregated list requests.

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
