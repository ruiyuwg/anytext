-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud Dataplex v1 API - Class DataQualitySpec (2.6.0) Stay organized with collections Save and categorize content based on your preferences.

3.13.0 (latest) 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.0.0

```
public sealed class DataQualitySpec : IMessage<DataQualitySpec>, IEquatable<DataQualitySpec>, IDeepCloneable<DataQualitySpec>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Cloud Dataplex v1 API class DataQualitySpec.

DataQualityScan related setting.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> DataQualitySpec

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[DataQualitySpec](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.6.0/Google.Cloud.Dataplex.V1.DataQualitySpec), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[DataQualitySpec](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.6.0/Google.Cloud.Dataplex.V1.DataQualitySpec), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[DataQualitySpec](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.6.0/Google.Cloud.Dataplex.V1.DataQualitySpec), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Dataplex.V1](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.6.0/Google.Cloud.Dataplex.V1)

## Assembly

Google.Cloud.Dataplex.V1.dll

## Constructors

### DataQualitySpec()

```
public DataQualitySpec()
```

### DataQualitySpec(DataQualitySpec)

```
public DataQualitySpec(DataQualitySpec other)
```

**Parameter**

**Name**

**Description**

`other`

`[DataQualitySpec](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.6.0/Google.Cloud.Dataplex.V1.DataQualitySpec)`  

## Properties

### PostScanActions

```
public DataQualitySpec.Types.PostScanActions PostScanActions { get; set; }
```

Optional. Actions to take upon job completion.

**Property Value**

**Type**

**Description**

`[DataQualitySpec](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.6.0/Google.Cloud.Dataplex.V1.DataQualitySpec)[Types](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.6.0/Google.Cloud.Dataplex.V1.DataQualitySpec.Types)[PostScanActions](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.6.0/Google.Cloud.Dataplex.V1.DataQualitySpec.Types.PostScanActions)`

### RowFilter

```
public string RowFilter { get; set; }
```

Optional. A filter applied to all rows in a single DataScan job. The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 >= 0 AND col2 < 10

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Rules

```
public RepeatedField<DataQualityRule> Rules { get; }
```

Required. The list of rules to evaluate against a data source. At least one rule is required.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[DataQualityRule](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/2.6.0/Google.Cloud.Dataplex.V1.DataQualityRule)`

### SamplingPercent

```
public float SamplingPercent { get; set; }
```

Optional. The percentage of the records to be selected from the dataset for DataScan.

-   Value can range between 0.0 and 100.0 with up to 3 significant decimal digits.
-   Sampling is not applied if `sampling_percent` is not specified, 0 or 100.

**Property Value**

**Type**

**Description**

`[float](https://learn.microsoft.com/dotnet/api/system.single)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
