-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Live Stream v1 API - Class ListEventsRequest (1.4.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.4.0keyboard\_arrow\_down

-   [1.11.0 (latest)](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/latest/Google.Cloud.Video.LiveStream.V1.ListEventsRequest)
-   [1.10.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.10.0/Google.Cloud.Video.LiveStream.V1.ListEventsRequest)
-   [1.9.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.9.0/Google.Cloud.Video.LiveStream.V1.ListEventsRequest)
-   [1.8.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.8.0/Google.Cloud.Video.LiveStream.V1.ListEventsRequest)
-   [1.7.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.7.0/Google.Cloud.Video.LiveStream.V1.ListEventsRequest)
-   [1.6.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.6.0/Google.Cloud.Video.LiveStream.V1.ListEventsRequest)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.5.0/Google.Cloud.Video.LiveStream.V1.ListEventsRequest)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.4.0/Google.Cloud.Video.LiveStream.V1.ListEventsRequest)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.3.0/Google.Cloud.Video.LiveStream.V1.ListEventsRequest)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.2.0/Google.Cloud.Video.LiveStream.V1.ListEventsRequest)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.1.0/Google.Cloud.Video.LiveStream.V1.ListEventsRequest)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.0.0/Google.Cloud.Video.LiveStream.V1.ListEventsRequest)

```
public sealed class ListEventsRequest : IPageRequest, IMessage<ListEventsRequest>, IEquatable<ListEventsRequest>, IDeepCloneable<ListEventsRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Live Stream v1 API class ListEventsRequest.

Request message for "LivestreamService.ListEvents".

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ListEventsRequest

## Implements

[IPageRequest](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/PagedEnumerableCommon.cs), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[ListEventsRequest](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.4.0/Google.Cloud.Video.LiveStream.V1.ListEventsRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[ListEventsRequest](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.4.0/Google.Cloud.Video.LiveStream.V1.ListEventsRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[ListEventsRequest](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.4.0/Google.Cloud.Video.LiveStream.V1.ListEventsRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Video.LiveStream.V1](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.4.0/Google.Cloud.Video.LiveStream.V1)

## Assembly

Google.Cloud.Video.LiveStream.V1.dll

## Constructors

### ListEventsRequest()

```
public ListEventsRequest()
```

### ListEventsRequest(ListEventsRequest)

```
public ListEventsRequest(ListEventsRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[ListEventsRequest](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.4.0/Google.Cloud.Video.LiveStream.V1.ListEventsRequest)`  

## Properties

### Filter

```
public string Filter { get; set; }
```

The filter to apply to list results.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### OrderBy

```
public string OrderBy { get; set; }
```

Specifies the ordering of results following syntax at [https://cloud.google.com/apis/design/design\_patterns#sorting\_order](https://cloud.google.com/apis/design/design_patterns#sorting_order).

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### PageSize

```
public int PageSize { get; set; }
```

The maximum number of items to return. If unspecified, server will pick an appropriate default. Server may return fewer items than requested. A caller should only rely on response's \[next\_page\_token\]\[google.cloud.video.livestream.v1.ListEventsResponse.next\_page\_token\] to determine if there are more items left to be queried.

**Property Value**

**Type**

**Description**

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`

### PageToken

```
public string PageToken { get; set; }
```

The next\_page\_token value returned from a previous List request, if any.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Parent

```
public string Parent { get; set; }
```

Required. The parent channel for the resource, in the form of: `projects/{project}/locations/{location}/channels/{channelId}`.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ParentAsChannelName

```
public ChannelName ParentAsChannelName { get; set; }
```

[ChannelName](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.4.0/Google.Cloud.Video.LiveStream.V1.ChannelName)\-typed view over the [Parent](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.4.0/Google.Cloud.Video.LiveStream.V1.ListEventsRequest#Google_Cloud_Video_LiveStream_V1_ListEventsRequest_Parent) resource name property.

**Property Value**

**Type**

**Description**

`[ChannelName](/dotnet/docs/reference/Google.Cloud.Video.LiveStream.V1/1.4.0/Google.Cloud.Video.LiveStream.V1.ChannelName)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
