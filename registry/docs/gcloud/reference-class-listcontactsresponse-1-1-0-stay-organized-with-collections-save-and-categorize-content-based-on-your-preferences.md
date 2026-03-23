-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class ListContactsResponse (1.1.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.1.0keyboard\_arrow\_down

-   [2.6.0 (latest)](/dotnet/docs/reference/Google.Cloud.EssentialContacts.V1/latest/Google.Cloud.EssentialContacts.V1.ListContactsResponse)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.EssentialContacts.V1/2.5.0/Google.Cloud.EssentialContacts.V1.ListContactsResponse)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.EssentialContacts.V1/2.4.0/Google.Cloud.EssentialContacts.V1.ListContactsResponse)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.EssentialContacts.V1/2.3.0/Google.Cloud.EssentialContacts.V1.ListContactsResponse)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.EssentialContacts.V1/2.2.0/Google.Cloud.EssentialContacts.V1.ListContactsResponse)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.EssentialContacts.V1/2.1.0/Google.Cloud.EssentialContacts.V1.ListContactsResponse)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.EssentialContacts.V1/2.0.0/Google.Cloud.EssentialContacts.V1.ListContactsResponse)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.EssentialContacts.V1/1.1.0/Google.Cloud.EssentialContacts.V1.ListContactsResponse)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.EssentialContacts.V1/1.0.0/Google.Cloud.EssentialContacts.V1.ListContactsResponse)

```
public sealed class ListContactsResponse : IPageResponse<Contact>, IEnumerable<Contact>, IEnumerable, IMessage<ListContactsResponse>, IEquatable<ListContactsResponse>, IDeepCloneable<ListContactsResponse>, IBufferMessage, IMessage
```

Response message for the ListContacts method.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> ListContactsResponse

## Implements

[IPageResponse](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.IPageResponse-1.html)<[Contact](/dotnet/docs/reference/Google.Cloud.EssentialContacts.V1/1.1.0/Google.Cloud.EssentialContacts.V1.Contact)\>, [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[Contact](/dotnet/docs/reference/Google.Cloud.EssentialContacts.V1/1.1.0/Google.Cloud.EssentialContacts.V1.Contact)\>, [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[ListContactsResponse](/dotnet/docs/reference/Google.Cloud.EssentialContacts.V1/1.1.0/Google.Cloud.EssentialContacts.V1.ListContactsResponse)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[ListContactsResponse](/dotnet/docs/reference/Google.Cloud.EssentialContacts.V1/1.1.0/Google.Cloud.EssentialContacts.V1.ListContactsResponse)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[ListContactsResponse](/dotnet/docs/reference/Google.Cloud.EssentialContacts.V1/1.1.0/Google.Cloud.EssentialContacts.V1.ListContactsResponse)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.EssentialContacts.V1](/dotnet/docs/reference/Google.Cloud.EssentialContacts.V1/1.1.0/Google.Cloud.EssentialContacts.V1)

## Assembly

Google.Cloud.EssentialContacts.V1.dll

## Constructors

### ListContactsResponse()

```
public ListContactsResponse()
```

### ListContactsResponse(ListContactsResponse)

```
public ListContactsResponse(ListContactsResponse other)
```

**Parameter**

**Name**

**Description**

`other`

`[ListContactsResponse](/dotnet/docs/reference/Google.Cloud.EssentialContacts.V1/1.1.0/Google.Cloud.EssentialContacts.V1.ListContactsResponse)`  

## Properties

### Contacts

```
public RepeatedField<Contact> Contacts { get; }
```

The contacts for the specified resource.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[Contact](/dotnet/docs/reference/Google.Cloud.EssentialContacts.V1/1.1.0/Google.Cloud.EssentialContacts.V1.Contact)>`

### NextPageToken

```
public string NextPageToken { get; set; }
```

If there are more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token` and the rest of the parameters the same as the original request.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

## Methods

### GetEnumerator()

```
public IEnumerator<Contact> GetEnumerator()
```

Returns an enumerator that iterates through the resources in this response.

**Returns**

**Type**

**Description**

`[IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator-1)<[Contact](/dotnet/docs/reference/Google.Cloud.EssentialContacts.V1/1.1.0/Google.Cloud.EssentialContacts.V1.Contact)>`

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
