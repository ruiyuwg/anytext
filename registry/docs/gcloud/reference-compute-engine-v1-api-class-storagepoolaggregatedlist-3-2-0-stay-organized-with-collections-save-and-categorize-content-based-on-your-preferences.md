-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class StoragePoolAggregatedList (3.2.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class StoragePoolAggregatedList : IMessage<StoragePoolAggregatedList>, IEquatable<StoragePoolAggregatedList>, IDeepCloneable<StoragePoolAggregatedList>, IBufferMessage, IMessage, IPageResponse<KeyValuePair<string, StoragePoolsScopedList>>, IEnumerable<KeyValuePair<string, StoragePoolsScopedList>>, IEnumerable
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> StoragePoolAggregatedList

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[StoragePoolAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.2.0/Google.Cloud.Compute.V1.StoragePoolAggregatedList), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[StoragePoolAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.2.0/Google.Cloud.Compute.V1.StoragePoolAggregatedList), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[StoragePoolAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.2.0/Google.Cloud.Compute.V1.StoragePoolAggregatedList), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html), [IPageResponse](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.IPageResponse-1.html)[KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2)[string](https://learn.microsoft.com/dotnet/api/system.string)[StoragePoolsScopedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.2.0/Google.Cloud.Compute.V1.StoragePoolsScopedList), [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)[KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2)[string](https://learn.microsoft.com/dotnet/api/system.string)[StoragePoolsScopedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.2.0/Google.Cloud.Compute.V1.StoragePoolsScopedList), [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.2.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Constructors

### StoragePoolAggregatedList()

```
public StoragePoolAggregatedList()
```

### StoragePoolAggregatedList(StoragePoolAggregatedList)

```
public StoragePoolAggregatedList(StoragePoolAggregatedList other)
```

**Parameter**

**Name**

**Description**

`other`

`[StoragePoolAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.2.0/Google.Cloud.Compute.V1.StoragePoolAggregatedList)`  

## Properties

### Etag

```
public string Etag { get; set; }
```

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### HasEtag

```
public bool HasEtag { get; }
```

Gets whether the "etag" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasId

```
public bool HasId { get; }
```

Gets whether the "id" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasKind

```
public bool HasKind { get; }
```

Gets whether the "kind" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasNextPageToken

```
public bool HasNextPageToken { get; }
```

Gets whether the "next\_page\_token" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasSelfLink

```
public bool HasSelfLink { get; }
```

Gets whether the "self\_link" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### Id

```
public string Id { get; set; }
```

\[Output Only\] Unique identifier for the resource; defined by the server.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Items

```
public MapField<string, StoragePoolsScopedList> Items { get; }
```

A list of StoragePoolsScopedList resources.

**Property Value**

**Type**

**Description**

`[MapField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.MapField-2.html)[string](https://learn.microsoft.com/dotnet/api/system.string)[StoragePoolsScopedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.2.0/Google.Cloud.Compute.V1.StoragePoolsScopedList)`

### Kind

```
public string Kind { get; set; }
```

\[Output Only\] Type of resource. Always compute#storagePoolAggregatedList for aggregated lists of storage pools.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### NextPageToken

```
public string NextPageToken { get; set; }
```

\[Output Only\] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### SelfLink

```
public string SelfLink { get; set; }
```

\[Output Only\] Server-defined URL for this resource.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Unreachables

```
public RepeatedField<string> Unreachables { get; }
```

\[Output Only\] Unreachable resources.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Warning

```
public Warning Warning { get; set; }
```

\[Output Only\] Informational warning message.

**Property Value**

**Type**

**Description**

`[Warning](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.2.0/Google.Cloud.Compute.V1.Warning)`

## Methods

### GetEnumerator()

```
public IEnumerator<KeyValuePair<string, StoragePoolsScopedList>> GetEnumerator()
```

Returns an enumerator that iterates through the resources in this response.

**Returns**

**Type**

**Description**

`[IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator-1)[KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2)[string](https://learn.microsoft.com/dotnet/api/system.string)[StoragePoolsScopedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.2.0/Google.Cloud.Compute.V1.StoragePoolsScopedList)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
