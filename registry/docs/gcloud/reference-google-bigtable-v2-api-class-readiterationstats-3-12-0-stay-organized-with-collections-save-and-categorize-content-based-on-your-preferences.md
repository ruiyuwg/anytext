-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Bigtable v2 API - Class ReadIterationStats (3.12.0) Stay organized with collections Save and categorize content based on your preferences.

Version 3.12.0keyboard\_arrow\_down

-   [3.26.0 (latest)](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/latest/Google.Cloud.Bigtable.V2.ReadIterationStats)
-   [3.25.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.25.0/Google.Cloud.Bigtable.V2.ReadIterationStats)
-   [3.24.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.24.0/Google.Cloud.Bigtable.V2.ReadIterationStats)
-   [3.23.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.23.0/Google.Cloud.Bigtable.V2.ReadIterationStats)
-   [3.22.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.22.0/Google.Cloud.Bigtable.V2.ReadIterationStats)
-   [3.21.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.21.0/Google.Cloud.Bigtable.V2.ReadIterationStats)
-   [3.20.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.20.0/Google.Cloud.Bigtable.V2.ReadIterationStats)
-   [3.19.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.19.0/Google.Cloud.Bigtable.V2.ReadIterationStats)
-   [3.18.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.18.0/Google.Cloud.Bigtable.V2.ReadIterationStats)
-   [3.17.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.17.0/Google.Cloud.Bigtable.V2.ReadIterationStats)
-   [3.16.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.16.0/Google.Cloud.Bigtable.V2.ReadIterationStats)
-   [3.15.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.15.0/Google.Cloud.Bigtable.V2.ReadIterationStats)
-   [3.14.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.14.0/Google.Cloud.Bigtable.V2.ReadIterationStats)
-   [3.13.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.13.0/Google.Cloud.Bigtable.V2.ReadIterationStats)
-   [3.12.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.12.0/Google.Cloud.Bigtable.V2.ReadIterationStats)
-   [3.11.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.11.0/Google.Cloud.Bigtable.V2.ReadIterationStats)
-   [3.10.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.10.0/Google.Cloud.Bigtable.V2.ReadIterationStats)
-   [3.9.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.9.0/Google.Cloud.Bigtable.V2.ReadIterationStats)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.8.0/Google.Cloud.Bigtable.V2.ReadIterationStats)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.7.0/Google.Cloud.Bigtable.V2.ReadIterationStats)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.6.0/Google.Cloud.Bigtable.V2.ReadIterationStats)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.5.0/Google.Cloud.Bigtable.V2.ReadIterationStats)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.4.0/Google.Cloud.Bigtable.V2.ReadIterationStats)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.3.0/Google.Cloud.Bigtable.V2.ReadIterationStats)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.2.0/Google.Cloud.Bigtable.V2.ReadIterationStats)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.1.0/Google.Cloud.Bigtable.V2.ReadIterationStats)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.0.0/Google.Cloud.Bigtable.V2.ReadIterationStats)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/2.6.0/Google.Cloud.Bigtable.V2.ReadIterationStats)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/2.5.0/Google.Cloud.Bigtable.V2.ReadIterationStats)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/2.4.0/Google.Cloud.Bigtable.V2.ReadIterationStats)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/2.3.0/Google.Cloud.Bigtable.V2.ReadIterationStats)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/2.2.0/Google.Cloud.Bigtable.V2.ReadIterationStats)

```
public sealed class ReadIterationStats : IMessage<ReadIterationStats>, IEquatable<ReadIterationStats>, IDeepCloneable<ReadIterationStats>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Google Bigtable v2 API class ReadIterationStats.

ReadIterationStats captures information about the iteration of rows or cells over the course of a read, e.g. how many results were scanned in a read operation versus the results returned.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ReadIterationStats

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[ReadIterationStats](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.12.0/Google.Cloud.Bigtable.V2.ReadIterationStats), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[ReadIterationStats](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.12.0/Google.Cloud.Bigtable.V2.ReadIterationStats), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[ReadIterationStats](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.12.0/Google.Cloud.Bigtable.V2.ReadIterationStats), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Bigtable.V2](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.12.0/Google.Cloud.Bigtable.V2)

## Assembly

Google.Cloud.Bigtable.V2.dll

## Constructors

### ReadIterationStats()

```
public ReadIterationStats()
```

### ReadIterationStats(ReadIterationStats)

```
public ReadIterationStats(ReadIterationStats other)
```

**Parameter**

**Name**

**Description**

`other`

`[ReadIterationStats](/dotnet/docs/reference/Google.Cloud.Bigtable.V2/3.12.0/Google.Cloud.Bigtable.V2.ReadIterationStats)`  

## Properties

### CellsReturnedCount

```
public long CellsReturnedCount { get; set; }
```

The cells returned as part of the request.

**Property Value**

**Type**

**Description**

`[long](https://learn.microsoft.com/dotnet/api/system.int64)`

### CellsSeenCount

```
public long CellsSeenCount { get; set; }
```

The cells seen (scanned) as part of the request. This includes the count of cells returned, as captured below.

**Property Value**

**Type**

**Description**

`[long](https://learn.microsoft.com/dotnet/api/system.int64)`

### RowsReturnedCount

```
public long RowsReturnedCount { get; set; }
```

The rows returned as part of the request.

**Property Value**

**Type**

**Description**

`[long](https://learn.microsoft.com/dotnet/api/system.int64)`

### RowsSeenCount

```
public long RowsSeenCount { get; set; }
```

The rows seen (scanned) as part of the request. This includes the count of rows returned, as captured below.

**Property Value**

**Type**

**Description**

`[long](https://learn.microsoft.com/dotnet/api/system.int64)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
