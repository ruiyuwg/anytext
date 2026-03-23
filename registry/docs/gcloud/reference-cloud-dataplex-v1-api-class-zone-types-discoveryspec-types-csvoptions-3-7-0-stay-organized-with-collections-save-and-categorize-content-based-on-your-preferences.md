-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud Dataplex v1 API - Class Zone.Types.DiscoverySpec.Types.CsvOptions (3.7.0) Stay organized with collections Save and categorize content based on your preferences.

3.13.0 (latest) 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.0.0

```
public sealed class Zone.Types.DiscoverySpec.Types.CsvOptions : IMessage<Zone.Types.DiscoverySpec.Types.CsvOptions>, IEquatable<Zone.Types.DiscoverySpec.Types.CsvOptions>, IDeepCloneable<Zone.Types.DiscoverySpec.Types.CsvOptions>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Cloud Dataplex v1 API class Zone.Types.DiscoverySpec.Types.CsvOptions.

Describe CSV and similar semi-structured data formats.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> Zone.Types.DiscoverySpec.Types.CsvOptions

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[Zone](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.7.0/Google.Cloud.Dataplex.V1.Zone)[Types](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.7.0/Google.Cloud.Dataplex.V1.Zone.Types)[DiscoverySpec](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.7.0/Google.Cloud.Dataplex.V1.Zone.Types.DiscoverySpec)[Types](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.7.0/Google.Cloud.Dataplex.V1.Zone.Types.DiscoverySpec.Types)[CsvOptions](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.7.0/Google.Cloud.Dataplex.V1.Zone.Types.DiscoverySpec.Types.CsvOptions), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[Zone](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.7.0/Google.Cloud.Dataplex.V1.Zone)[Types](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.7.0/Google.Cloud.Dataplex.V1.Zone.Types)[DiscoverySpec](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.7.0/Google.Cloud.Dataplex.V1.Zone.Types.DiscoverySpec)[Types](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.7.0/Google.Cloud.Dataplex.V1.Zone.Types.DiscoverySpec.Types)[CsvOptions](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.7.0/Google.Cloud.Dataplex.V1.Zone.Types.DiscoverySpec.Types.CsvOptions), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[Zone](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.7.0/Google.Cloud.Dataplex.V1.Zone)[Types](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.7.0/Google.Cloud.Dataplex.V1.Zone.Types)[DiscoverySpec](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.7.0/Google.Cloud.Dataplex.V1.Zone.Types.DiscoverySpec)[Types](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.7.0/Google.Cloud.Dataplex.V1.Zone.Types.DiscoverySpec.Types)[CsvOptions](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.7.0/Google.Cloud.Dataplex.V1.Zone.Types.DiscoverySpec.Types.CsvOptions), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Dataplex.V1](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.7.0/Google.Cloud.Dataplex.V1)

## Assembly

Google.Cloud.Dataplex.V1.dll

## Constructors

### CsvOptions()

```
public CsvOptions()
```

### CsvOptions(CsvOptions)

```
public CsvOptions(Zone.Types.DiscoverySpec.Types.CsvOptions other)
```

**Parameter**

**Name**

**Description**

`other`

`[Zone](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.7.0/Google.Cloud.Dataplex.V1.Zone)[Types](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.7.0/Google.Cloud.Dataplex.V1.Zone.Types)[DiscoverySpec](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.7.0/Google.Cloud.Dataplex.V1.Zone.Types.DiscoverySpec)[Types](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.7.0/Google.Cloud.Dataplex.V1.Zone.Types.DiscoverySpec.Types)[CsvOptions](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.7.0/Google.Cloud.Dataplex.V1.Zone.Types.DiscoverySpec.Types.CsvOptions)`  

## Properties

### Delimiter

```
public string Delimiter { get; set; }
```

Optional. The delimiter being used to separate values. This defaults to ','.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### DisableTypeInference

```
public bool DisableTypeInference { get; set; }
```

Optional. Whether to disable the inference of data type for CSV data. If true, all columns will be registered as strings.

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### Encoding

```
public string Encoding { get; set; }
```

Optional. The character encoding of the data. The default is UTF-8.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### HeaderRows

```
public int HeaderRows { get; set; }
```

Optional. The number of rows to interpret as header rows that should be skipped when reading data rows.

**Property Value**

**Type**

**Description**

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
