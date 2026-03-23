-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Recommendations AI v1beta1 API - Class CatalogInlineSource (2.0.0-beta07) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [2.0.0-beta07 (latest)](/dotnet/docs/reference/Google.Cloud.RecommendationEngine.V1Beta1/latest/Google.Cloud.RecommendationEngine.V1Beta1.CatalogInlineSource)
-   [2.0.0-beta06](/dotnet/docs/reference/Google.Cloud.RecommendationEngine.V1Beta1/2.0.0-beta06/Google.Cloud.RecommendationEngine.V1Beta1.CatalogInlineSource)
-   [1.0.0-beta03](/dotnet/docs/reference/Google.Cloud.RecommendationEngine.V1Beta1/1.0.0-beta03/Google.Cloud.RecommendationEngine.V1Beta1.CatalogInlineSource)

```
public sealed class CatalogInlineSource : IMessage<CatalogInlineSource>, IEquatable<CatalogInlineSource>, IDeepCloneable<CatalogInlineSource>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Recommendations AI v1beta1 API class CatalogInlineSource.

The inline source for the input config for ImportCatalogItems method.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> CatalogInlineSource

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[CatalogInlineSource](/dotnet/docs/reference/Google.Cloud.RecommendationEngine.V1Beta1/latest/Google.Cloud.RecommendationEngine.V1Beta1.CatalogInlineSource), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[CatalogInlineSource](/dotnet/docs/reference/Google.Cloud.RecommendationEngine.V1Beta1/latest/Google.Cloud.RecommendationEngine.V1Beta1.CatalogInlineSource), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[CatalogInlineSource](/dotnet/docs/reference/Google.Cloud.RecommendationEngine.V1Beta1/latest/Google.Cloud.RecommendationEngine.V1Beta1.CatalogInlineSource), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.RecommendationEngine.V1Beta1](/dotnet/docs/reference/Google.Cloud.RecommendationEngine.V1Beta1/latest/Google.Cloud.RecommendationEngine.V1Beta1)

## Assembly

Google.Cloud.RecommendationEngine.V1Beta1.dll

## Constructors

### CatalogInlineSource()

```
public CatalogInlineSource()
```

### CatalogInlineSource(CatalogInlineSource)

```
public CatalogInlineSource(CatalogInlineSource other)
```

**Parameter**

**Name**

**Description**

`other`

`[CatalogInlineSource](/dotnet/docs/reference/Google.Cloud.RecommendationEngine.V1Beta1/latest/Google.Cloud.RecommendationEngine.V1Beta1.CatalogInlineSource)`  

## Properties

### CatalogItems

```
public RepeatedField<CatalogItem> CatalogItems { get; }
```

Optional. A list of catalog items to update/create. Recommended max of 10k items.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[CatalogItem](/dotnet/docs/reference/Google.Cloud.RecommendationEngine.V1Beta1/latest/Google.Cloud.RecommendationEngine.V1Beta1.CatalogItem)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
