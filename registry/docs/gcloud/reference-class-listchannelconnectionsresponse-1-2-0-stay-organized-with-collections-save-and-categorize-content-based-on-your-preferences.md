-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class ListChannelConnectionsResponse (1.2.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.2.0keyboard\_arrow\_down

-   [2.9.0 (latest)](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/latest/Google.Cloud.Eventarc.V1.ListChannelConnectionsResponse)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.8.0/Google.Cloud.Eventarc.V1.ListChannelConnectionsResponse)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.7.0/Google.Cloud.Eventarc.V1.ListChannelConnectionsResponse)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.6.0/Google.Cloud.Eventarc.V1.ListChannelConnectionsResponse)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.5.0/Google.Cloud.Eventarc.V1.ListChannelConnectionsResponse)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.4.0/Google.Cloud.Eventarc.V1.ListChannelConnectionsResponse)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.3.0/Google.Cloud.Eventarc.V1.ListChannelConnectionsResponse)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.2.0/Google.Cloud.Eventarc.V1.ListChannelConnectionsResponse)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.1.0/Google.Cloud.Eventarc.V1.ListChannelConnectionsResponse)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/2.0.0/Google.Cloud.Eventarc.V1.ListChannelConnectionsResponse)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/1.3.0/Google.Cloud.Eventarc.V1.ListChannelConnectionsResponse)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/1.2.0/Google.Cloud.Eventarc.V1.ListChannelConnectionsResponse)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/1.1.0/Google.Cloud.Eventarc.V1.ListChannelConnectionsResponse)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/1.0.0/Google.Cloud.Eventarc.V1.ListChannelConnectionsResponse)

```
public sealed class ListChannelConnectionsResponse : IMessage<ListChannelConnectionsResponse>, IEquatable<ListChannelConnectionsResponse>, IDeepCloneable<ListChannelConnectionsResponse>, IBufferMessage, IMessage, IPageResponse<ChannelConnection>, IEnumerable<ChannelConnection>, IEnumerable
```

The response message for the `ListChannelConnections` method.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> ListChannelConnectionsResponse

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[ListChannelConnectionsResponse](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/1.2.0/Google.Cloud.Eventarc.V1.ListChannelConnectionsResponse)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[ListChannelConnectionsResponse](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/1.2.0/Google.Cloud.Eventarc.V1.ListChannelConnectionsResponse)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[ListChannelConnectionsResponse](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/1.2.0/Google.Cloud.Eventarc.V1.ListChannelConnectionsResponse)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html), [IPageResponse](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.IPageResponse-1.html)<[ChannelConnection](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/1.2.0/Google.Cloud.Eventarc.V1.ChannelConnection)\>, [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[ChannelConnection](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/1.2.0/Google.Cloud.Eventarc.V1.ChannelConnection)\>, [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Eventarc.V1](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/1.2.0/Google.Cloud.Eventarc.V1)

## Assembly

Google.Cloud.Eventarc.V1.dll

## Constructors

### ListChannelConnectionsResponse()

```
public ListChannelConnectionsResponse()
```

### ListChannelConnectionsResponse(ListChannelConnectionsResponse)

```
public ListChannelConnectionsResponse(ListChannelConnectionsResponse other)
```

**Parameter**

**Name**

**Description**

`other`

`[ListChannelConnectionsResponse](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/1.2.0/Google.Cloud.Eventarc.V1.ListChannelConnectionsResponse)`  

## Properties

### ChannelConnections

```
public RepeatedField<ChannelConnection> ChannelConnections { get; }
```

The requested channel connections, up to the number specified in `page_size`.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[ChannelConnection](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/1.2.0/Google.Cloud.Eventarc.V1.ChannelConnection)>`

### NextPageToken

```
public string NextPageToken { get; set; }
```

A page token that can be sent to ListChannelConnections to request the next page. If this is empty, then there are no more pages.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Unreachable

```
public RepeatedField<string> Unreachable { get; }
```

Unreachable resources, if any.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[String](https://learn.microsoft.com/dotnet/api/system.string)>`

## Methods

### GetEnumerator()

```
public IEnumerator<ChannelConnection> GetEnumerator()
```

Returns an enumerator that iterates through the resources in this response.

**Returns**

**Type**

**Description**

`[IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator-1)<[ChannelConnection](/dotnet/docs/reference/Google.Cloud.Eventarc.V1/1.2.0/Google.Cloud.Eventarc.V1.ChannelConnection)>`

## Explicit Interface Implementations

### IEnumerable.GetEnumerator()

```
IEnumerator IEnumerable.GetEnumerator()
```

**Returns**

**Type**

**Description**

`[IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.ienumerator)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
