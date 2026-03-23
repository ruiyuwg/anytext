-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud AI Platform v1 API - Class FeatureGroup.Types.BigQuery (3.14.0) Stay organized with collections Save and categorize content based on your preferences.

3.68.0 (latest) 3.67.0 3.66.0 3.65.0 3.64.0 3.63.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class FeatureGroup.Types.BigQuery : IMessage<FeatureGroup.Types.BigQuery>, IEquatable<FeatureGroup.Types.BigQuery>, IDeepCloneable<FeatureGroup.Types.BigQuery>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Cloud AI Platform v1 API class FeatureGroup.Types.BigQuery.

Input source type for BigQuery Tables and Views.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> FeatureGroup.Types.BigQuery

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[FeatureGroup](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.14.0/Google.Cloud.AIPlatform.V1.FeatureGroup)[Types](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.14.0/Google.Cloud.AIPlatform.V1.FeatureGroup.Types)[BigQuery](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.14.0/Google.Cloud.AIPlatform.V1.FeatureGroup.Types.BigQuery), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[FeatureGroup](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.14.0/Google.Cloud.AIPlatform.V1.FeatureGroup)[Types](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.14.0/Google.Cloud.AIPlatform.V1.FeatureGroup.Types)[BigQuery](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.14.0/Google.Cloud.AIPlatform.V1.FeatureGroup.Types.BigQuery), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[FeatureGroup](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.14.0/Google.Cloud.AIPlatform.V1.FeatureGroup)[Types](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.14.0/Google.Cloud.AIPlatform.V1.FeatureGroup.Types)[BigQuery](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.14.0/Google.Cloud.AIPlatform.V1.FeatureGroup.Types.BigQuery), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.AIPlatform.V1](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.14.0/Google.Cloud.AIPlatform.V1)

## Assembly

Google.Cloud.AIPlatform.V1.dll

## Constructors

### BigQuery()

```
public BigQuery()
```

### BigQuery(BigQuery)

```
public BigQuery(FeatureGroup.Types.BigQuery other)
```

**Parameter**

**Name**

**Description**

`other`

`[FeatureGroup](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.14.0/Google.Cloud.AIPlatform.V1.FeatureGroup)[Types](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.14.0/Google.Cloud.AIPlatform.V1.FeatureGroup.Types)[BigQuery](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.14.0/Google.Cloud.AIPlatform.V1.FeatureGroup.Types.BigQuery)`  

## Properties

### BigQuerySource

```
public BigQuerySource BigQuerySource { get; set; }
```

Required. Immutable. The BigQuery source URI that points to either a BigQuery Table or View.

**Property Value**

**Type**

**Description**

`[BigQuerySource](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.14.0/Google.Cloud.AIPlatform.V1.BigQuerySource)`

### Dense

```
public bool Dense { get; set; }
```

Optional. If set, all feature values will be fetched from a single row per unique entityId including nulls. If not set, will collapse all rows for each unique entityId into a singe row with any non-null values if present, if no non-null values are present will sync null. ex: If source has schema `(entity_id, feature_timestamp, f0, f1)` and the following rows: `(e1, 2020-01-01T10:00:00.123Z, 10, 15)` `(e1, 2020-02-01T10:00:00.123Z, 20, null)` If dense is set, `(e1, 20, null)` is synced to online stores. If dense is not set, `(e1, 20, 15)` is synced to online stores.

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### EntityIdColumns

```
public RepeatedField<string> EntityIdColumns { get; }
```

Optional. Columns to construct entity\_id / row keys. If not provided defaults to `entity_id`.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### StaticDataSource

```
public bool StaticDataSource { get; set; }
```

Optional. Set if the data source is not a time-series.

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### TimeSeries

```
public FeatureGroup.Types.BigQuery.Types.TimeSeries TimeSeries { get; set; }
```

Optional. If the source is a time-series source, this can be set to control how downstream sources (ex: \[FeatureView\]\[google.cloud.aiplatform.v1.FeatureView\] ) will treat time-series sources. If not set, will treat the source as a time-series source with `feature_timestamp` as timestamp column and no scan boundary.

**Property Value**

**Type**

**Description**

`[FeatureGroup](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.14.0/Google.Cloud.AIPlatform.V1.FeatureGroup)[Types](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.14.0/Google.Cloud.AIPlatform.V1.FeatureGroup.Types)[BigQuery](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.14.0/Google.Cloud.AIPlatform.V1.FeatureGroup.Types.BigQuery)[Types](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.14.0/Google.Cloud.AIPlatform.V1.FeatureGroup.Types.BigQuery.Types)[TimeSeries](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.14.0/Google.Cloud.AIPlatform.V1.FeatureGroup.Types.BigQuery.Types.TimeSeries)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
