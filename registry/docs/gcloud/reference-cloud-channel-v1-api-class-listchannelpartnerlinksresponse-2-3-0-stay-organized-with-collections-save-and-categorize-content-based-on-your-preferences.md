-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud Channel v1 API - Class ListChannelPartnerLinksResponse (2.3.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.3.0keyboard\_arrow\_down

-   [2.17.0 (latest)](/dotnet/docs/reference/Google.Cloud.Channel.V1/latest/Google.Cloud.Channel.V1.ListChannelPartnerLinksResponse)
-   [2.16.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.16.0/Google.Cloud.Channel.V1.ListChannelPartnerLinksResponse)
-   [2.15.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.15.0/Google.Cloud.Channel.V1.ListChannelPartnerLinksResponse)
-   [2.14.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.14.0/Google.Cloud.Channel.V1.ListChannelPartnerLinksResponse)
-   [2.13.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.13.0/Google.Cloud.Channel.V1.ListChannelPartnerLinksResponse)
-   [2.12.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.12.0/Google.Cloud.Channel.V1.ListChannelPartnerLinksResponse)
-   [2.11.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.11.0/Google.Cloud.Channel.V1.ListChannelPartnerLinksResponse)
-   [2.10.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.10.0/Google.Cloud.Channel.V1.ListChannelPartnerLinksResponse)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.9.0/Google.Cloud.Channel.V1.ListChannelPartnerLinksResponse)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.8.0/Google.Cloud.Channel.V1.ListChannelPartnerLinksResponse)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.7.0/Google.Cloud.Channel.V1.ListChannelPartnerLinksResponse)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.6.0/Google.Cloud.Channel.V1.ListChannelPartnerLinksResponse)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.5.0/Google.Cloud.Channel.V1.ListChannelPartnerLinksResponse)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.4.0/Google.Cloud.Channel.V1.ListChannelPartnerLinksResponse)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.3.0/Google.Cloud.Channel.V1.ListChannelPartnerLinksResponse)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.2.0/Google.Cloud.Channel.V1.ListChannelPartnerLinksResponse)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.1.0/Google.Cloud.Channel.V1.ListChannelPartnerLinksResponse)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.0.0/Google.Cloud.Channel.V1.ListChannelPartnerLinksResponse)
-   [1.7.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.7.0/Google.Cloud.Channel.V1.ListChannelPartnerLinksResponse)
-   [1.6.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.6.0/Google.Cloud.Channel.V1.ListChannelPartnerLinksResponse)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.5.0/Google.Cloud.Channel.V1.ListChannelPartnerLinksResponse)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.4.0/Google.Cloud.Channel.V1.ListChannelPartnerLinksResponse)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.3.0/Google.Cloud.Channel.V1.ListChannelPartnerLinksResponse)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.2.0/Google.Cloud.Channel.V1.ListChannelPartnerLinksResponse)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.1.0/Google.Cloud.Channel.V1.ListChannelPartnerLinksResponse)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Channel.V1/1.0.0/Google.Cloud.Channel.V1.ListChannelPartnerLinksResponse)

```
public sealed class ListChannelPartnerLinksResponse : IPageResponse<ChannelPartnerLink>, IEnumerable<ChannelPartnerLink>, IEnumerable, IMessage<ListChannelPartnerLinksResponse>, IEquatable<ListChannelPartnerLinksResponse>, IDeepCloneable<ListChannelPartnerLinksResponse>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Cloud Channel v1 API class ListChannelPartnerLinksResponse.

Response message for \[CloudChannelService.ListChannelPartnerLinks\]\[google.cloud.channel.v1.CloudChannelService.ListChannelPartnerLinks\].

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> ListChannelPartnerLinksResponse

## Implements

[IPageResponse](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.IPageResponse-1.html)<[ChannelPartnerLink](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.3.0/Google.Cloud.Channel.V1.ChannelPartnerLink)\>, [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[ChannelPartnerLink](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.3.0/Google.Cloud.Channel.V1.ChannelPartnerLink)\>, [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[ListChannelPartnerLinksResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.3.0/Google.Cloud.Channel.V1.ListChannelPartnerLinksResponse)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[ListChannelPartnerLinksResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.3.0/Google.Cloud.Channel.V1.ListChannelPartnerLinksResponse)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[ListChannelPartnerLinksResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.3.0/Google.Cloud.Channel.V1.ListChannelPartnerLinksResponse)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Channel.V1](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.3.0/Google.Cloud.Channel.V1)

## Assembly

Google.Cloud.Channel.V1.dll

## Constructors

### ListChannelPartnerLinksResponse()

```
public ListChannelPartnerLinksResponse()
```

### ListChannelPartnerLinksResponse(ListChannelPartnerLinksResponse)

```
public ListChannelPartnerLinksResponse(ListChannelPartnerLinksResponse other)
```

**Parameter**

**Name**

**Description**

`other`

`[ListChannelPartnerLinksResponse](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.3.0/Google.Cloud.Channel.V1.ListChannelPartnerLinksResponse)`  

## Properties

### ChannelPartnerLinks

```
public RepeatedField<ChannelPartnerLink> ChannelPartnerLinks { get; }
```

The Channel partner links for a reseller.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[ChannelPartnerLink](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.3.0/Google.Cloud.Channel.V1.ChannelPartnerLink)>`

### NextPageToken

```
public string NextPageToken { get; set; }
```

A token to retrieve the next page of results. Pass to \[ListChannelPartnerLinksRequest.page\_token\]\[google.cloud.channel.v1.ListChannelPartnerLinksRequest.page\_token\] to obtain that page.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

## Methods

### GetEnumerator()

```
public IEnumerator<ChannelPartnerLink> GetEnumerator()
```

Returns an enumerator that iterates through the resources in this response.

**Returns**

**Type**

**Description**

`[IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator-1)<[ChannelPartnerLink](/dotnet/docs/reference/Google.Cloud.Channel.V1/2.3.0/Google.Cloud.Channel.V1.ChannelPartnerLink)>`

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
