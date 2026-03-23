-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class ListAssetsRequest (2.11.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.11.0keyboard\_arrow\_down

-   [3.14.0 (latest)](/dotnet/docs/reference/Google.Cloud.Asset.V1/latest/Google.Cloud.Asset.V1.ListAssetsRequest)
-   [3.13.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.13.0/Google.Cloud.Asset.V1.ListAssetsRequest)
-   [3.12.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.12.0/Google.Cloud.Asset.V1.ListAssetsRequest)
-   [3.11.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.11.0/Google.Cloud.Asset.V1.ListAssetsRequest)
-   [3.10.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.10.0/Google.Cloud.Asset.V1.ListAssetsRequest)
-   [3.9.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.ListAssetsRequest)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.8.0/Google.Cloud.Asset.V1.ListAssetsRequest)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.7.0/Google.Cloud.Asset.V1.ListAssetsRequest)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.6.0/Google.Cloud.Asset.V1.ListAssetsRequest)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.5.0/Google.Cloud.Asset.V1.ListAssetsRequest)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.4.0/Google.Cloud.Asset.V1.ListAssetsRequest)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.3.0/Google.Cloud.Asset.V1.ListAssetsRequest)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.2.0/Google.Cloud.Asset.V1.ListAssetsRequest)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.1.0/Google.Cloud.Asset.V1.ListAssetsRequest)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.0.0/Google.Cloud.Asset.V1.ListAssetsRequest)
-   [2.11.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.11.0/Google.Cloud.Asset.V1.ListAssetsRequest)
-   [2.10.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.10.0/Google.Cloud.Asset.V1.ListAssetsRequest)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.9.0/Google.Cloud.Asset.V1.ListAssetsRequest)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.8.0/Google.Cloud.Asset.V1.ListAssetsRequest)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.7.0/Google.Cloud.Asset.V1.ListAssetsRequest)

```
public sealed class ListAssetsRequest : IMessage<ListAssetsRequest>, IEquatable<ListAssetsRequest>, IDeepCloneable<ListAssetsRequest>, IBufferMessage, IMessage, IPageRequest
```

ListAssets request.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> ListAssetsRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[ListAssetsRequest](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.11.0/Google.Cloud.Asset.V1.ListAssetsRequest)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[ListAssetsRequest](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.11.0/Google.Cloud.Asset.V1.ListAssetsRequest)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[ListAssetsRequest](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.11.0/Google.Cloud.Asset.V1.ListAssetsRequest)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html), [IPageRequest](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.IPageRequest.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Asset.V1](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.11.0/Google.Cloud.Asset.V1)

## Assembly

Google.Cloud.Asset.V1.dll

## Constructors

### ListAssetsRequest()

```
public ListAssetsRequest()
```

### ListAssetsRequest(ListAssetsRequest)

```
public ListAssetsRequest(ListAssetsRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[ListAssetsRequest](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.11.0/Google.Cloud.Asset.V1.ListAssetsRequest)`  

## Properties

### AssetTypes

```
public RepeatedField<string> AssetTypes { get; }
```

A list of asset types to take a snapshot for. For example: "compute.googleapis.com/Disk".

Regular expression is also supported. For example:

-   "compute.googleapis.com.\*" snapshots resources whose asset type starts with "compute.googleapis.com".
-   ".\*Instance" snapshots resources whose asset type ends with "Instance".
-   "._Instance._" snapshots resources whose asset type contains "Instance".

See [RE2](https://github.com/google/re2/wiki/Syntax) for all supported regular expression syntax. If the regular expression does not match any supported asset type, an INVALID\_ARGUMENT error will be returned.

If specified, only matching assets will be returned, otherwise, it will snapshot all asset types. See [Introduction to Cloud Asset Inventory](https://cloud.google.com/asset-inventory/docs/overview) for all supported asset types.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[String](https://learn.microsoft.com/dotnet/api/system.string)>`

### ContentType

```
public ContentType ContentType { get; set; }
```

Asset content type. If not specified, no content but the asset name will be returned.

**Property Value**

**Type**

**Description**

`[ContentType](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.11.0/Google.Cloud.Asset.V1.ContentType)`

### PageSize

```
public int PageSize { get; set; }
```

The maximum number of assets to be returned in a single response. Default is 100, minimum is 1, and maximum is 1000.

**Property Value**

**Type**

**Description**

`[Int32](https://learn.microsoft.com/dotnet/api/system.int32)`

### PageToken

```
public string PageToken { get; set; }
```

The `next_page_token` returned from the previous `ListAssetsResponse`, or unspecified for the first `ListAssetsRequest`. It is a continuation of a prior `ListAssets` call, and the API should return the next page of assets.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Parent

```
public string Parent { get; set; }
```

Required. Name of the organization, folder, or project the assets belong to. Format: "organizations/\[organization-number\]" (such as "organizations/123"), "projects/\[project-id\]" (such as "projects/my-project-id"), "projects/\[project-number\]" (such as "projects/12345"), or "folders/\[folder-number\]" (such as "folders/12345").

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### ParentAsResourceName

```
public IResourceName ParentAsResourceName { get; set; }
```

[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html)\-typed view over the [Parent](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.11.0/Google.Cloud.Asset.V1.ListAssetsRequest#Google_Cloud_Asset_V1_ListAssetsRequest_Parent) resource name property.

**Property Value**

**Type**

**Description**

`[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html)`

### ReadTime

```
public Timestamp ReadTime { get; set; }
```

Timestamp to take an asset snapshot. This can only be set to a timestamp between the current time and the current time minus 35 days (inclusive). If not specified, the current time will be used. Due to delays in resource data collection and indexing, there is a volatile window during which running the same query may get different results.

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

### RelationshipTypes

```
public RepeatedField<string> RelationshipTypes { get; }
```

A list of relationship types to output, for example: `INSTANCE_TO_INSTANCEGROUP`. This field should only be specified if content\_type=RELATIONSHIP.

-   If specified: it snapshots specified relationships. It returns an error if any of the \[relationship\_types\] doesn't belong to the supported relationship types of the \[asset\_types\] or if any of the \[asset\_types\] doesn't belong to the source types of the \[relationship\_types\].
-   Otherwise: it snapshots the supported relationships for all \[asset\_types\] or returns an error if any of the \[asset\_types\] has no relationship support. An unspecified asset types field means all supported asset\_types. See [Introduction to Cloud Asset Inventory](https://cloud.google.com/asset-inventory/docs/overview) for all supported asset types and relationship types.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[String](https://learn.microsoft.com/dotnet/api/system.string)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
