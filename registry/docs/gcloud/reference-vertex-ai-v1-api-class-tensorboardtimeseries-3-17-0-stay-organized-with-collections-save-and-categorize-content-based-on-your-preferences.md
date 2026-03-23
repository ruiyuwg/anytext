-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Vertex AI v1 API - Class TensorboardTimeSeries (3.17.0) Stay organized with collections Save and categorize content based on your preferences.

3.68.0 (latest) 3.67.0 3.66.0 3.65.0 3.64.0 3.63.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class TensorboardTimeSeries : IMessage<TensorboardTimeSeries>, IEquatable<TensorboardTimeSeries>, IDeepCloneable<TensorboardTimeSeries>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Vertex AI v1 API class TensorboardTimeSeries.

TensorboardTimeSeries maps to times series produced in training runs

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> TensorboardTimeSeries

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[TensorboardTimeSeries](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.17.0/Google.Cloud.AIPlatform.V1.TensorboardTimeSeries), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[TensorboardTimeSeries](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.17.0/Google.Cloud.AIPlatform.V1.TensorboardTimeSeries), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[TensorboardTimeSeries](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.17.0/Google.Cloud.AIPlatform.V1.TensorboardTimeSeries), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.AIPlatform.V1](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.17.0/Google.Cloud.AIPlatform.V1)

## Assembly

Google.Cloud.AIPlatform.V1.dll

## Constructors

### TensorboardTimeSeries()

```
public TensorboardTimeSeries()
```

### TensorboardTimeSeries(TensorboardTimeSeries)

```
public TensorboardTimeSeries(TensorboardTimeSeries other)
```

**Parameter**

**Name**

**Description**

`other`

`[TensorboardTimeSeries](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.17.0/Google.Cloud.AIPlatform.V1.TensorboardTimeSeries)`  

## Properties

### CreateTime

```
public Timestamp CreateTime { get; set; }
```

Output only. Timestamp when this TensorboardTimeSeries was created.

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

### Description

```
public string Description { get; set; }
```

Description of this TensorboardTimeSeries.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### DisplayName

```
public string DisplayName { get; set; }
```

Required. User provided name of this TensorboardTimeSeries. This value should be unique among all TensorboardTimeSeries resources belonging to the same TensorboardRun resource (parent resource).

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Etag

```
public string Etag { get; set; }
```

Used to perform a consistent read-modify-write updates. If not set, a blind "overwrite" update happens.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Metadata

```
public TensorboardTimeSeries.Types.Metadata Metadata { get; set; }
```

Output only. Scalar, Tensor, or Blob metadata for this TensorboardTimeSeries.

**Property Value**

**Type**

**Description**

`[TensorboardTimeSeries](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.17.0/Google.Cloud.AIPlatform.V1.TensorboardTimeSeries)[Types](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.17.0/Google.Cloud.AIPlatform.V1.TensorboardTimeSeries.Types)[Metadata](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.17.0/Google.Cloud.AIPlatform.V1.TensorboardTimeSeries.Types.Metadata)`

### Name

```
public string Name { get; set; }
```

Output only. Name of the TensorboardTimeSeries.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### PluginData

```
public ByteString PluginData { get; set; }
```

Data of the current plugin, with the size limited to 65KB.

**Property Value**

**Type**

**Description**

`[ByteString](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.ByteString.html)`

### PluginName

```
public string PluginName { get; set; }
```

Immutable. Name of the plugin this time series pertain to. Such as Scalar, Tensor, Blob

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### TensorboardTimeSeriesName

```
public TensorboardTimeSeriesName TensorboardTimeSeriesName { get; set; }
```

[TensorboardTimeSeriesName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.17.0/Google.Cloud.AIPlatform.V1.TensorboardTimeSeriesName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.17.0/Google.Cloud.AIPlatform.V1.TensorboardTimeSeries#Google_Cloud_AIPlatform_V1_TensorboardTimeSeries_Name) resource name property.

**Property Value**

**Type**

**Description**

`[TensorboardTimeSeriesName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.17.0/Google.Cloud.AIPlatform.V1.TensorboardTimeSeriesName)`

### UpdateTime

```
public Timestamp UpdateTime { get; set; }
```

Output only. Timestamp when this TensorboardTimeSeries was last updated.

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

### ValueType

```
public TensorboardTimeSeries.Types.ValueType ValueType { get; set; }
```

Required. Immutable. Type of TensorboardTimeSeries value.

**Property Value**

**Type**

**Description**

`[TensorboardTimeSeries](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.17.0/Google.Cloud.AIPlatform.V1.TensorboardTimeSeries)[Types](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.17.0/Google.Cloud.AIPlatform.V1.TensorboardTimeSeries.Types)[ValueType](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.17.0/Google.Cloud.AIPlatform.V1.TensorboardTimeSeries.Types.ValueType)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
