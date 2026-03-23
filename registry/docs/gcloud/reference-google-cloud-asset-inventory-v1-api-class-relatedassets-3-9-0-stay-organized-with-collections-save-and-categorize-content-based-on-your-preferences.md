-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Cloud Asset Inventory v1 API - Class RelatedAssets (3.9.0) Stay organized with collections Save and categorize content based on your preferences.

Version 3.9.0keyboard\_arrow\_down

-   [3.14.0 (latest)](/dotnet/docs/reference/Google.Cloud.Asset.V1/latest/Google.Cloud.Asset.V1.RelatedAssets)
-   [3.13.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.13.0/Google.Cloud.Asset.V1.RelatedAssets)
-   [3.12.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.12.0/Google.Cloud.Asset.V1.RelatedAssets)
-   [3.11.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.11.0/Google.Cloud.Asset.V1.RelatedAssets)
-   [3.10.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.10.0/Google.Cloud.Asset.V1.RelatedAssets)
-   [3.9.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.RelatedAssets)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.8.0/Google.Cloud.Asset.V1.RelatedAssets)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.7.0/Google.Cloud.Asset.V1.RelatedAssets)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.6.0/Google.Cloud.Asset.V1.RelatedAssets)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.5.0/Google.Cloud.Asset.V1.RelatedAssets)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.4.0/Google.Cloud.Asset.V1.RelatedAssets)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.3.0/Google.Cloud.Asset.V1.RelatedAssets)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.2.0/Google.Cloud.Asset.V1.RelatedAssets)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.1.0/Google.Cloud.Asset.V1.RelatedAssets)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.0.0/Google.Cloud.Asset.V1.RelatedAssets)
-   [2.11.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.11.0/Google.Cloud.Asset.V1.RelatedAssets)
-   [2.10.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.10.0/Google.Cloud.Asset.V1.RelatedAssets)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.9.0/Google.Cloud.Asset.V1.RelatedAssets)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.8.0/Google.Cloud.Asset.V1.RelatedAssets)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.7.0/Google.Cloud.Asset.V1.RelatedAssets)

```
[Obsolete]
public sealed class RelatedAssets : IMessage<RelatedAssets>, IEquatable<RelatedAssets>, IDeepCloneable<RelatedAssets>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Google Cloud Asset Inventory v1 API class RelatedAssets.

DEPRECATED. This message only presents for the purpose of backward-compatibility. The server will never populate this message in responses. The detailed related assets with the `relationship_type`.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> RelatedAssets

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[RelatedAssets](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.RelatedAssets), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[RelatedAssets](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.RelatedAssets), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[RelatedAssets](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.RelatedAssets), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Asset.V1](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1)

## Assembly

Google.Cloud.Asset.V1.dll

## Constructors

### RelatedAssets()

```
public RelatedAssets()
```

### RelatedAssets(RelatedAssets)

```
public RelatedAssets(RelatedAssets other)
```

**Parameter**

**Name**

**Description**

`other`

`[RelatedAssets](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.RelatedAssets)`  

## Properties

### Assets

```
public RepeatedField<RelatedAsset> Assets { get; }
```

The peer resources of the relationship.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[RelatedAsset](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.RelatedAsset)`

### RelationshipAttributes

```
[Obsolete]
public RelationshipAttributes RelationshipAttributes { get; set; }
```

The detailed relationship attributes.

**Property Value**

**Type**

**Description**

`[RelationshipAttributes](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.RelationshipAttributes)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
