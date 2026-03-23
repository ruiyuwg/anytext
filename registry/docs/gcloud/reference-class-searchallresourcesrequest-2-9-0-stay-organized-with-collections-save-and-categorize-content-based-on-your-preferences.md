-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class SearchAllResourcesRequest (2.9.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.9.0keyboard\_arrow\_down

-   [3.14.0 (latest)](/dotnet/docs/reference/Google.Cloud.Asset.V1/latest/Google.Cloud.Asset.V1.SearchAllResourcesRequest)
-   [3.13.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.13.0/Google.Cloud.Asset.V1.SearchAllResourcesRequest)
-   [3.12.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.12.0/Google.Cloud.Asset.V1.SearchAllResourcesRequest)
-   [3.11.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.11.0/Google.Cloud.Asset.V1.SearchAllResourcesRequest)
-   [3.10.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.10.0/Google.Cloud.Asset.V1.SearchAllResourcesRequest)
-   [3.9.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.SearchAllResourcesRequest)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.8.0/Google.Cloud.Asset.V1.SearchAllResourcesRequest)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.7.0/Google.Cloud.Asset.V1.SearchAllResourcesRequest)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.6.0/Google.Cloud.Asset.V1.SearchAllResourcesRequest)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.5.0/Google.Cloud.Asset.V1.SearchAllResourcesRequest)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.4.0/Google.Cloud.Asset.V1.SearchAllResourcesRequest)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.3.0/Google.Cloud.Asset.V1.SearchAllResourcesRequest)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.2.0/Google.Cloud.Asset.V1.SearchAllResourcesRequest)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.1.0/Google.Cloud.Asset.V1.SearchAllResourcesRequest)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.0.0/Google.Cloud.Asset.V1.SearchAllResourcesRequest)
-   [2.11.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.11.0/Google.Cloud.Asset.V1.SearchAllResourcesRequest)
-   [2.10.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.10.0/Google.Cloud.Asset.V1.SearchAllResourcesRequest)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.9.0/Google.Cloud.Asset.V1.SearchAllResourcesRequest)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.8.0/Google.Cloud.Asset.V1.SearchAllResourcesRequest)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.7.0/Google.Cloud.Asset.V1.SearchAllResourcesRequest)

```
public sealed class SearchAllResourcesRequest : IMessage<SearchAllResourcesRequest>, IEquatable<SearchAllResourcesRequest>, IDeepCloneable<SearchAllResourcesRequest>, IBufferMessage, IMessage, IPageRequest
```

Search all resources request.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> SearchAllResourcesRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[SearchAllResourcesRequest](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.9.0/Google.Cloud.Asset.V1.SearchAllResourcesRequest)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[SearchAllResourcesRequest](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.9.0/Google.Cloud.Asset.V1.SearchAllResourcesRequest)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[SearchAllResourcesRequest](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.9.0/Google.Cloud.Asset.V1.SearchAllResourcesRequest)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html), [IPageRequest](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.IPageRequest.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Asset.V1](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.9.0/Google.Cloud.Asset.V1)

## Assembly

Google.Cloud.Asset.V1.dll

## Constructors

### SearchAllResourcesRequest()

```
public SearchAllResourcesRequest()
```

### SearchAllResourcesRequest(SearchAllResourcesRequest)

```
public SearchAllResourcesRequest(SearchAllResourcesRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[SearchAllResourcesRequest](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.9.0/Google.Cloud.Asset.V1.SearchAllResourcesRequest)`  

## Properties

### AssetTypes

```
public RepeatedField<string> AssetTypes { get; }
```

Optional. A list of asset types that this request searches for. If empty, it will search all the [searchable asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types#searchable_asset_types).

Regular expressions are also supported. For example:

-   "compute.googleapis.com.\*" snapshots resources whose asset type starts with "compute.googleapis.com".
-   ".\*Instance" snapshots resources whose asset type ends with "Instance".
-   "._Instance._" snapshots resources whose asset type contains "Instance".

See [RE2](https://github.com/google/re2/wiki/Syntax) for all supported regular expression syntax. If the regular expression does not match any supported asset type, an INVALID\_ARGUMENT error will be returned.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[String](https://learn.microsoft.com/dotnet/api/system.string)>`

### OrderBy

```
public string OrderBy { get; set; }
```

Optional. A comma-separated list of fields specifying the sorting order of the results. The default order is ascending. Add " DESC" after the field name to indicate descending order. Redundant space characters are ignored. Example: "location DESC, name". Only singular primitive fields in the response are sortable:

-   name
-   assetType
-   project
-   displayName
-   description
-   location
-   kmsKey
-   createTime
-   updateTime
-   state
-   parentFullResourceName
-   parentAssetType

All the other fields such as repeated fields (e.g., `networkTags`), map fields (e.g., `labels`) and struct fields (e.g., `additionalAttributes`) are not supported.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### PageSize

```
public int PageSize { get; set; }
```

Optional. The page size for search result pagination. Page size is capped at 500 even if a larger value is given. If set to zero, server will pick an appropriate default. Returned results may be fewer than requested. When this happens, there could be more results as long as `next_page_token` is returned.

**Property Value**

**Type**

**Description**

`[Int32](https://learn.microsoft.com/dotnet/api/system.int32)`

### PageToken

```
public string PageToken { get; set; }
```

Optional. If present, then retrieve the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of all other method parameters, must be identical to those in the previous call.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Query

```
public string Query { get; set; }
```

Optional. The query statement. See [how to construct a query](https://cloud.google.com/asset-inventory/docs/searching-resources#how_to_construct_a_query) for more information. If not specified or empty, it will search all the resources within the specified `scope`.

Examples:

-   `name:Important` to find Cloud resources whose name contains "Important" as a word.
-   `name=Important` to find the Cloud resource whose name is exactly "Important".
-   `displayName:Impor*` to find Cloud resources whose display name contains "Impor" as a prefix of any word in the field.
-   `location:us-west*` to find Cloud resources whose location contains both "us" and "west" as prefixes.
-   `labels:prod` to find Cloud resources whose labels contain "prod" as a key or value.
-   `labels.env:prod` to find Cloud resources that have a label "env" and its value is "prod".
-   `labels.env:*` to find Cloud resources that have a label "env".
-   `kmsKey:key` to find Cloud resources encrypted with a customer-managed encryption key whose name contains the word "key".
-   `state:ACTIVE` to find Cloud resources whose state contains "ACTIVE" as a word.
-   `NOT state:ACTIVE` to find Cloud resources whose state doesn't contain "ACTIVE" as a word.
-   `createTime&lt;1609459200` to find Cloud resources that were created before "2021-01-01 00:00:00 UTC". 1609459200 is the epoch timestamp of "2021-01-01 00:00:00 UTC" in seconds.
-   `updateTime>1609459200` to find Cloud resources that were updated after "2021-01-01 00:00:00 UTC". 1609459200 is the epoch timestamp of "2021-01-01 00:00:00 UTC" in seconds.
-   `Important` to find Cloud resources that contain "Important" as a word in any of the searchable fields.
-   `Impor*` to find Cloud resources that contain "Impor" as a prefix of any word in any of the searchable fields.
-   `Important location:(us-west1 OR global)` to find Cloud resources that contain "Important" as a word in any of the searchable fields and are also located in the "us-west1" region or the "global" location.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### ReadMask

```
public FieldMask ReadMask { get; set; }
```

Optional. A comma-separated list of fields specifying which fields to be returned in ResourceSearchResult. Only '_' or combination of top level fields can be specified. Field names of both snake\_case and camelCase are supported. Examples: \`"_"`,`"name,location"`,`"name,versionedResources"\`.

The read\_mask paths must be valid field paths listed but not limited to (both snake\_case and camelCase are supported):

-   name
-   assetType
-   project
-   displayName
-   description
-   location
-   labels
-   networkTags
-   kmsKey
-   createTime
-   updateTime
-   state
-   additionalAttributes
-   versionedResources

If read\_mask is not specified, all fields except versionedResources will be returned. If only '\*' is specified, all fields including versionedResources will be returned. Any invalid field path will trigger INVALID\_ARGUMENT error.

**Property Value**

**Type**

**Description**

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`

### Scope

```
public string Scope { get; set; }
```

Required. A scope can be a project, a folder, or an organization. The search is limited to the resources within the `scope`. The caller must be granted the [`cloudasset.assets.searchAllResources`](https://cloud.google.com/asset-inventory/docs/access-control#required_permissions) permission on the desired scope.

The allowed values are:

-   projects/{PROJECT\_ID} (e.g., "projects/foo-bar")
-   projects/{PROJECT\_NUMBER} (e.g., "projects/12345678")
-   folders/{FOLDER\_NUMBER} (e.g., "folders/1234567")
-   organizations/{ORGANIZATION\_NUMBER} (e.g., "organizations/123456")

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
