-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud AI Platform v1 API - Class FeatureView.Types.IndexConfig (3.7.0) Stay organized with collections Save and categorize content based on your preferences.

3.68.0 (latest) 3.67.0 3.66.0 3.65.0 3.64.0 3.63.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class FeatureView.Types.IndexConfig : IMessage<FeatureView.Types.IndexConfig>, IEquatable<FeatureView.Types.IndexConfig>, IDeepCloneable<FeatureView.Types.IndexConfig>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Cloud AI Platform v1 API class FeatureView.Types.IndexConfig.

Configuration for vector indexing.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> FeatureView.Types.IndexConfig

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[FeatureView](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.7.0/Google.Cloud.AIPlatform.V1.FeatureView)[Types](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.7.0/Google.Cloud.AIPlatform.V1.FeatureView.Types)[IndexConfig](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.7.0/Google.Cloud.AIPlatform.V1.FeatureView.Types.IndexConfig), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[FeatureView](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.7.0/Google.Cloud.AIPlatform.V1.FeatureView)[Types](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.7.0/Google.Cloud.AIPlatform.V1.FeatureView.Types)[IndexConfig](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.7.0/Google.Cloud.AIPlatform.V1.FeatureView.Types.IndexConfig), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[FeatureView](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.7.0/Google.Cloud.AIPlatform.V1.FeatureView)[Types](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.7.0/Google.Cloud.AIPlatform.V1.FeatureView.Types)[IndexConfig](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.7.0/Google.Cloud.AIPlatform.V1.FeatureView.Types.IndexConfig), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.AIPlatform.V1](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.7.0/Google.Cloud.AIPlatform.V1)

## Assembly

Google.Cloud.AIPlatform.V1.dll

## Constructors

### IndexConfig()

```
public IndexConfig()
```

### IndexConfig(IndexConfig)

```
public IndexConfig(FeatureView.Types.IndexConfig other)
```

**Parameter**

**Name**

**Description**

`other`

`[FeatureView](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.7.0/Google.Cloud.AIPlatform.V1.FeatureView)[Types](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.7.0/Google.Cloud.AIPlatform.V1.FeatureView.Types)[IndexConfig](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.7.0/Google.Cloud.AIPlatform.V1.FeatureView.Types.IndexConfig)`  

## Properties

### AlgorithmConfigCase

```
public FeatureView.Types.IndexConfig.AlgorithmConfigOneofCase AlgorithmConfigCase { get; }
```

**Property Value**

**Type**

**Description**

`[FeatureView](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.7.0/Google.Cloud.AIPlatform.V1.FeatureView)[Types](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.7.0/Google.Cloud.AIPlatform.V1.FeatureView.Types)[IndexConfig](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.7.0/Google.Cloud.AIPlatform.V1.FeatureView.Types.IndexConfig)[AlgorithmConfigOneofCase](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.7.0/Google.Cloud.AIPlatform.V1.FeatureView.Types.IndexConfig.AlgorithmConfigOneofCase)`

### BruteForceConfig

```
public FeatureView.Types.IndexConfig.Types.BruteForceConfig BruteForceConfig { get; set; }
```

Optional. Configuration options for using brute force search, which simply implements the standard linear search in the database for each query. It is primarily meant for benchmarking and to generate the ground truth for approximate search.

**Property Value**

**Type**

**Description**

`[FeatureView](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.7.0/Google.Cloud.AIPlatform.V1.FeatureView)[Types](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.7.0/Google.Cloud.AIPlatform.V1.FeatureView.Types)[IndexConfig](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.7.0/Google.Cloud.AIPlatform.V1.FeatureView.Types.IndexConfig)[Types](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.7.0/Google.Cloud.AIPlatform.V1.FeatureView.Types.IndexConfig.Types)[BruteForceConfig](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.7.0/Google.Cloud.AIPlatform.V1.FeatureView.Types.IndexConfig.Types.BruteForceConfig)`

### CrowdingColumn

```
public string CrowdingColumn { get; set; }
```

Optional. Column of crowding. This column contains crowding attribute which is a constraint on a neighbor list produced by \[FeatureOnlineStoreService.SearchNearestEntities\]\[google.cloud.aiplatform.v1.FeatureOnlineStoreService.SearchNearestEntities\] to diversify search results. If \[NearestNeighborQuery.per\_crowding\_attribute\_neighbor\_count\]\[google.cloud.aiplatform.v1.NearestNeighborQuery.per\_crowding\_attribute\_neighbor\_count\] is set to K in \[SearchNearestEntitiesRequest\]\[google.cloud.aiplatform.v1.SearchNearestEntitiesRequest\], it's guaranteed that no more than K entities of the same crowding attribute are returned in the response.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### DistanceMeasureType

```
public FeatureView.Types.IndexConfig.Types.DistanceMeasureType DistanceMeasureType { get; set; }
```

Optional. The distance measure used in nearest neighbor search.

**Property Value**

**Type**

**Description**

`[FeatureView](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.7.0/Google.Cloud.AIPlatform.V1.FeatureView)[Types](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.7.0/Google.Cloud.AIPlatform.V1.FeatureView.Types)[IndexConfig](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.7.0/Google.Cloud.AIPlatform.V1.FeatureView.Types.IndexConfig)[Types](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.7.0/Google.Cloud.AIPlatform.V1.FeatureView.Types.IndexConfig.Types)[DistanceMeasureType](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.7.0/Google.Cloud.AIPlatform.V1.FeatureView.Types.IndexConfig.Types.DistanceMeasureType)`

### EmbeddingColumn

```
public string EmbeddingColumn { get; set; }
```

Optional. Column of embedding. This column contains the source data to create index for vector search. embedding\_column must be set when using vector search.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### EmbeddingDimension

```
public int EmbeddingDimension { get; set; }
```

Optional. The number of dimensions of the input embedding.

**Property Value**

**Type**

**Description**

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`

### FilterColumns

```
public RepeatedField<string> FilterColumns { get; }
```

Optional. Columns of features that're used to filter vector search results.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### HasEmbeddingDimension

```
public bool HasEmbeddingDimension { get; }
```

Gets whether the "embedding\_dimension" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### TreeAhConfig

```
public FeatureView.Types.IndexConfig.Types.TreeAHConfig TreeAhConfig { get; set; }
```

Optional. Configuration options for the tree-AH algorithm (Shallow tree

-   Asymmetric Hashing). Please refer to this paper for more details: [https://arxiv.org/abs/1908.10396](https://arxiv.org/abs/1908.10396)

**Property Value**

**Type**

**Description**

`[FeatureView](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.7.0/Google.Cloud.AIPlatform.V1.FeatureView)[Types](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.7.0/Google.Cloud.AIPlatform.V1.FeatureView.Types)[IndexConfig](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.7.0/Google.Cloud.AIPlatform.V1.FeatureView.Types.IndexConfig)[Types](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.7.0/Google.Cloud.AIPlatform.V1.FeatureView.Types.IndexConfig.Types)[TreeAHConfig](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.7.0/Google.Cloud.AIPlatform.V1.FeatureView.Types.IndexConfig.Types.TreeAHConfig)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
