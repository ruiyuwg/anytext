-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Firestore v1 API - Class StructuredAggregationQuery.Types.Aggregation.Types.Count (3.6.0) Stay organized with collections Save and categorize content based on your preferences.

Version 3.6.0keyboard\_arrow\_down

-   [4.2.0 (latest)](/dotnet/docs/reference/Google.Cloud.Firestore.V1/latest/Google.Cloud.Firestore.V1.StructuredAggregationQuery.Types.Aggregation.Types.Count)
-   [4.1.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/4.1.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery.Types.Aggregation.Types.Count)
-   [4.0.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/4.0.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery.Types.Aggregation.Types.Count)
-   [3.13.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.13.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery.Types.Aggregation.Types.Count)
-   [3.12.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.12.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery.Types.Aggregation.Types.Count)
-   [3.11.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.11.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery.Types.Aggregation.Types.Count)
-   [3.10.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.10.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery.Types.Aggregation.Types.Count)
-   [3.9.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.9.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery.Types.Aggregation.Types.Count)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.8.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery.Types.Aggregation.Types.Count)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.7.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery.Types.Aggregation.Types.Count)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.6.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery.Types.Aggregation.Types.Count)
-   [3.5.1](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.5.1/Google.Cloud.Firestore.V1.StructuredAggregationQuery.Types.Aggregation.Types.Count)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.4.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery.Types.Aggregation.Types.Count)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.3.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery.Types.Aggregation.Types.Count)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.2.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery.Types.Aggregation.Types.Count)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.1.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery.Types.Aggregation.Types.Count)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.0.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery.Types.Aggregation.Types.Count)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/2.5.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery.Types.Aggregation.Types.Count)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/2.4.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery.Types.Aggregation.Types.Count)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/2.3.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery.Types.Aggregation.Types.Count)

```
public sealed class StructuredAggregationQuery.Types.Aggregation.Types.Count : IMessage<StructuredAggregationQuery.Types.Aggregation.Types.Count>, IEquatable<StructuredAggregationQuery.Types.Aggregation.Types.Count>, IDeepCloneable<StructuredAggregationQuery.Types.Aggregation.Types.Count>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Firestore v1 API class StructuredAggregationQuery.Types.Aggregation.Types.Count.

Count of documents that match the query.

The `COUNT(*)` aggregation function operates on the entire document so it does not require a field reference.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> StructuredAggregationQuery.Types.Aggregation.Types.Count

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[StructuredAggregationQuery](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.6.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery)[Types](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.6.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery.Types)[Aggregation](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.6.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery.Types.Aggregation)[Types](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.6.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery.Types.Aggregation.Types)[Count](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.6.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery.Types.Aggregation.Types.Count), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[StructuredAggregationQuery](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.6.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery)[Types](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.6.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery.Types)[Aggregation](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.6.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery.Types.Aggregation)[Types](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.6.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery.Types.Aggregation.Types)[Count](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.6.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery.Types.Aggregation.Types.Count), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[StructuredAggregationQuery](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.6.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery)[Types](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.6.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery.Types)[Aggregation](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.6.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery.Types.Aggregation)[Types](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.6.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery.Types.Aggregation.Types)[Count](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.6.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery.Types.Aggregation.Types.Count), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Firestore.V1](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.6.0/Google.Cloud.Firestore.V1)

## Assembly

Google.Cloud.Firestore.V1.dll

## Constructors

### Count()

```
public Count()
```

### Count(Count)

```
public Count(StructuredAggregationQuery.Types.Aggregation.Types.Count other)
```

**Parameter**

**Name**

**Description**

`other`

`[StructuredAggregationQuery](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.6.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery)[Types](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.6.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery.Types)[Aggregation](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.6.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery.Types.Aggregation)[Types](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.6.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery.Types.Aggregation.Types)[Count](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.6.0/Google.Cloud.Firestore.V1.StructuredAggregationQuery.Types.Aggregation.Types.Count)`  

## Properties

### UpTo

```
public long? UpTo { get; set; }
```

Optional. Optional constraint on the maximum number of documents to count.

This provides a way to set an upper bound on the number of documents to scan, limiting latency, and cost.

Unspecified is interpreted as no bound.

High-Level Example:

```
AGGREGATE COUNT_UP_TO(1000) OVER ( SELECT * FROM k );
```

Requires:

-   Must be greater than zero when present.

**Property Value**

**Type**

**Description**

`[long](https://learn.microsoft.com/dotnet/api/system.int64)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
