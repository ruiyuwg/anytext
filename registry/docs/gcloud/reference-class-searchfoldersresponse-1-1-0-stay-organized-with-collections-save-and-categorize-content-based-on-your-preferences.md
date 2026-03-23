-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class SearchFoldersResponse (1.1.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.1.0keyboard\_arrow\_down

-   [2.6.0 (latest)](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/latest/Google.Cloud.ResourceManager.V3.SearchFoldersResponse)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/2.5.0/Google.Cloud.ResourceManager.V3.SearchFoldersResponse)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/2.4.0/Google.Cloud.ResourceManager.V3.SearchFoldersResponse)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/2.3.0/Google.Cloud.ResourceManager.V3.SearchFoldersResponse)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/2.2.0/Google.Cloud.ResourceManager.V3.SearchFoldersResponse)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/2.1.0/Google.Cloud.ResourceManager.V3.SearchFoldersResponse)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/2.0.0/Google.Cloud.ResourceManager.V3.SearchFoldersResponse)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/1.2.0/Google.Cloud.ResourceManager.V3.SearchFoldersResponse)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/1.1.0/Google.Cloud.ResourceManager.V3.SearchFoldersResponse)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/1.0.0/Google.Cloud.ResourceManager.V3.SearchFoldersResponse)

```
public sealed class SearchFoldersResponse : IMessage<SearchFoldersResponse>, IEquatable<SearchFoldersResponse>, IDeepCloneable<SearchFoldersResponse>, IBufferMessage, IMessage, IPageResponse<Folder>, IEnumerable<Folder>, IEnumerable
```

The response message for searching folders.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> SearchFoldersResponse

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[SearchFoldersResponse](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/1.1.0/Google.Cloud.ResourceManager.V3.SearchFoldersResponse)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[SearchFoldersResponse](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/1.1.0/Google.Cloud.ResourceManager.V3.SearchFoldersResponse)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[SearchFoldersResponse](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/1.1.0/Google.Cloud.ResourceManager.V3.SearchFoldersResponse)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html), [IPageResponse](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.IPageResponse-1.html)<[Folder](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/1.1.0/Google.Cloud.ResourceManager.V3.Folder)\>, [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[Folder](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/1.1.0/Google.Cloud.ResourceManager.V3.Folder)\>, [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.ResourceManager.V3](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/1.1.0/Google.Cloud.ResourceManager.V3)

## Assembly

Google.Cloud.ResourceManager.V3.dll

## Constructors

### SearchFoldersResponse()

```
public SearchFoldersResponse()
```

### SearchFoldersResponse(SearchFoldersResponse)

```
public SearchFoldersResponse(SearchFoldersResponse other)
```

**Parameter**

**Name**

**Description**

`other`

`[SearchFoldersResponse](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/1.1.0/Google.Cloud.ResourceManager.V3.SearchFoldersResponse)`  

## Properties

### Folders

```
public RepeatedField<Folder> Folders { get; }
```

A possibly paginated folder search results. the specified parent resource.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[Folder](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/1.1.0/Google.Cloud.ResourceManager.V3.Folder)>`

### NextPageToken

```
public string NextPageToken { get; set; }
```

A pagination token returned from a previous call to `SearchFolders` that indicates from where searching should continue.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

## Methods

### GetEnumerator()

```
public IEnumerator<Folder> GetEnumerator()
```

Returns an enumerator that iterates through the resources in this response.

**Returns**

**Type**

**Description**

`[IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator-1)<[Folder](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/1.1.0/Google.Cloud.ResourceManager.V3.Folder)>`

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
