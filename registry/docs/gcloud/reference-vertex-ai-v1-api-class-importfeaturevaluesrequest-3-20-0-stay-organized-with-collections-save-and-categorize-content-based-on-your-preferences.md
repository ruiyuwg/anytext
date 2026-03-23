-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Vertex AI v1 API - Class ImportFeatureValuesRequest (3.20.0) Stay organized with collections Save and categorize content based on your preferences.

3.68.0 (latest) 3.67.0 3.66.0 3.65.0 3.64.0 3.63.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class ImportFeatureValuesRequest : IMessage<ImportFeatureValuesRequest>, IEquatable<ImportFeatureValuesRequest>, IDeepCloneable<ImportFeatureValuesRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Vertex AI v1 API class ImportFeatureValuesRequest.

Request message for \[FeaturestoreService.ImportFeatureValues\]\[google.cloud.aiplatform.v1.FeaturestoreService.ImportFeatureValues\].

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ImportFeatureValuesRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[ImportFeatureValuesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.20.0/Google.Cloud.AIPlatform.V1.ImportFeatureValuesRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[ImportFeatureValuesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.20.0/Google.Cloud.AIPlatform.V1.ImportFeatureValuesRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[ImportFeatureValuesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.20.0/Google.Cloud.AIPlatform.V1.ImportFeatureValuesRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.AIPlatform.V1](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.20.0/Google.Cloud.AIPlatform.V1)

## Assembly

Google.Cloud.AIPlatform.V1.dll

## Constructors

### ImportFeatureValuesRequest()

```
public ImportFeatureValuesRequest()
```

### ImportFeatureValuesRequest(ImportFeatureValuesRequest)

```
public ImportFeatureValuesRequest(ImportFeatureValuesRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[ImportFeatureValuesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.20.0/Google.Cloud.AIPlatform.V1.ImportFeatureValuesRequest)`  

## Properties

### AvroSource

```
public AvroSource AvroSource { get; set; }
```

**Property Value**

**Type**

**Description**

`[AvroSource](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.20.0/Google.Cloud.AIPlatform.V1.AvroSource)`

### BigquerySource

```
public BigQuerySource BigquerySource { get; set; }
```

**Property Value**

**Type**

**Description**

`[BigQuerySource](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.20.0/Google.Cloud.AIPlatform.V1.BigQuerySource)`

### CsvSource

```
public CsvSource CsvSource { get; set; }
```

**Property Value**

**Type**

**Description**

`[CsvSource](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.20.0/Google.Cloud.AIPlatform.V1.CsvSource)`

### DisableIngestionAnalysis

```
public bool DisableIngestionAnalysis { get; set; }
```

If true, API doesn't start ingestion analysis pipeline.

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### DisableOnlineServing

```
public bool DisableOnlineServing { get; set; }
```

If set, data will not be imported for online serving. This is typically used for backfilling, where Feature generation timestamps are not in the timestamp range needed for online serving.

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### EntityIdField

```
public string EntityIdField { get; set; }
```

Source column that holds entity IDs. If not provided, entity IDs are extracted from the column named entity\_id.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### EntityType

```
public string EntityType { get; set; }
```

Required. The resource name of the EntityType grouping the Features for which values are being imported. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entityType}`

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### EntityTypeAsEntityTypeName

```
public EntityTypeName EntityTypeAsEntityTypeName { get; set; }
```

[EntityTypeName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.20.0/Google.Cloud.AIPlatform.V1.EntityTypeName)\-typed view over the [EntityType](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.20.0/Google.Cloud.AIPlatform.V1.ImportFeatureValuesRequest#Google_Cloud_AIPlatform_V1_ImportFeatureValuesRequest_EntityType) resource name property.

**Property Value**

**Type**

**Description**

`[EntityTypeName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.20.0/Google.Cloud.AIPlatform.V1.EntityTypeName)`

### FeatureSpecs

```
public RepeatedField<ImportFeatureValuesRequest.Types.FeatureSpec> FeatureSpecs { get; }
```

Required. Specifications defining which Feature values to import from the entity. The request fails if no feature\_specs are provided, and having multiple feature\_specs for one Feature is not allowed.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[ImportFeatureValuesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.20.0/Google.Cloud.AIPlatform.V1.ImportFeatureValuesRequest)[Types](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.20.0/Google.Cloud.AIPlatform.V1.ImportFeatureValuesRequest.Types)[FeatureSpec](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.20.0/Google.Cloud.AIPlatform.V1.ImportFeatureValuesRequest.Types.FeatureSpec)`

### FeatureTime

```
public Timestamp FeatureTime { get; set; }
```

Single Feature timestamp for all entities being imported. The timestamp must not have higher than millisecond precision.

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

### FeatureTimeField

```
public string FeatureTimeField { get; set; }
```

Source column that holds the Feature timestamp for all Feature values in each entity.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### FeatureTimeSourceCase

```
public ImportFeatureValuesRequest.FeatureTimeSourceOneofCase FeatureTimeSourceCase { get; }
```

**Property Value**

**Type**

**Description**

`[ImportFeatureValuesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.20.0/Google.Cloud.AIPlatform.V1.ImportFeatureValuesRequest)[FeatureTimeSourceOneofCase](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.20.0/Google.Cloud.AIPlatform.V1.ImportFeatureValuesRequest.FeatureTimeSourceOneofCase)`

### HasFeatureTimeField

```
public bool HasFeatureTimeField { get; }
```

Gets whether the "feature\_time\_field" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### SourceCase

```
public ImportFeatureValuesRequest.SourceOneofCase SourceCase { get; }
```

**Property Value**

**Type**

**Description**

`[ImportFeatureValuesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.20.0/Google.Cloud.AIPlatform.V1.ImportFeatureValuesRequest)[SourceOneofCase](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.20.0/Google.Cloud.AIPlatform.V1.ImportFeatureValuesRequest.SourceOneofCase)`

### WorkerCount

```
public int WorkerCount { get; set; }
```

Specifies the number of workers that are used to write data to the Featurestore. Consider the online serving capacity that you require to achieve the desired import throughput without interfering with online serving. The value must be positive, and less than or equal to 100. If not set, defaults to using 1 worker. The low count ensures minimal impact on online serving performance.

**Property Value**

**Type**

**Description**

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
