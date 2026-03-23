-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud Dataplex v1 API - Class ListEntryGroupsResponse (3.6.0) Stay organized with collections Save and categorize content based on your preferences.

3.13.0 (latest) 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.0.0

```
public sealed class ListEntryGroupsResponse : IMessage<ListEntryGroupsResponse>, IEquatable<ListEntryGroupsResponse>, IDeepCloneable<ListEntryGroupsResponse>, IBufferMessage, IMessage, IPageResponse<EntryGroup>, IEnumerable<EntryGroup>, IEnumerable
```

Reference documentation and code samples for the Cloud Dataplex v1 API class ListEntryGroupsResponse.

List entry groups response.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ListEntryGroupsResponse

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[ListEntryGroupsResponse](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.6.0/Google.Cloud.Dataplex.V1.ListEntryGroupsResponse), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[ListEntryGroupsResponse](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.6.0/Google.Cloud.Dataplex.V1.ListEntryGroupsResponse), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[ListEntryGroupsResponse](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.6.0/Google.Cloud.Dataplex.V1.ListEntryGroupsResponse), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html), [IPageResponse](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.IPageResponse-1.html)[EntryGroup](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.6.0/Google.Cloud.Dataplex.V1.EntryGroup), [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)[EntryGroup](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.6.0/Google.Cloud.Dataplex.V1.EntryGroup), [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Dataplex.V1](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.6.0/Google.Cloud.Dataplex.V1)

## Assembly

Google.Cloud.Dataplex.V1.dll

## Constructors

### ListEntryGroupsResponse()

```
public ListEntryGroupsResponse()
```

### ListEntryGroupsResponse(ListEntryGroupsResponse)

```
public ListEntryGroupsResponse(ListEntryGroupsResponse other)
```

**Parameter**

**Name**

**Description**

`other`

`[ListEntryGroupsResponse](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.6.0/Google.Cloud.Dataplex.V1.ListEntryGroupsResponse)`  

## Properties

### EntryGroups

```
public RepeatedField<EntryGroup> EntryGroups { get; }
```

Entry groups under the given parent location.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[EntryGroup](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.6.0/Google.Cloud.Dataplex.V1.EntryGroup)`

### NextPageToken

```
public string NextPageToken { get; set; }
```

Token to retrieve the next page of results, or empty if there are no more results in the list.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### UnreachableLocations

```
public RepeatedField<string> UnreachableLocations { get; }
```

Locations that the service couldn't reach.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[string](https://learn.microsoft.com/dotnet/api/system.string)`

## Methods

### GetEnumerator()

```
public IEnumerator<EntryGroup> GetEnumerator()
```

Returns an enumerator that iterates through the resources in this response.

**Returns**

**Type**

**Description**

`[IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator-1)[EntryGroup](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.6.0/Google.Cloud.Dataplex.V1.EntryGroup)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
