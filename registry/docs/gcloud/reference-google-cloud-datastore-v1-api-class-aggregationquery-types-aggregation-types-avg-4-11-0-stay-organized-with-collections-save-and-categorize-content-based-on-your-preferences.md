-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Cloud Datastore v1 API - Class AggregationQuery.Types.Aggregation.Types.Avg (4.11.0) Stay organized with collections Save and categorize content based on your preferences.

Version 4.11.0keyboard\_arrow\_down

-   [5.1.0 (latest)](/dotnet/docs/reference/Google.Cloud.Datastore.V1/latest/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation.Types.Avg)
-   [5.0.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/5.0.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation.Types.Avg)
-   [4.17.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.17.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation.Types.Avg)
-   [4.16.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.16.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation.Types.Avg)
-   [4.15.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.15.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation.Types.Avg)
-   [4.14.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.14.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation.Types.Avg)
-   [4.13.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.13.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation.Types.Avg)
-   [4.12.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.12.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation.Types.Avg)
-   [4.11.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.11.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation.Types.Avg)
-   [4.10.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.10.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation.Types.Avg)
-   [4.9.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.9.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation.Types.Avg)
-   [4.8.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.8.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation.Types.Avg)
-   [4.7.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.7.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation.Types.Avg)
-   [4.6.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.6.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation.Types.Avg)
-   [4.5.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.5.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation.Types.Avg)
-   [4.4.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation.Types.Avg)
-   [4.3.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.3.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation.Types.Avg)
-   [4.2.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.2.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation.Types.Avg)
-   [4.1.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.1.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation.Types.Avg)
-   [4.0.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.0.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation.Types.Avg)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/3.5.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation.Types.Avg)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/3.4.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation.Types.Avg)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/3.3.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation.Types.Avg)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/3.2.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation.Types.Avg)

```
public sealed class AggregationQuery.Types.Aggregation.Types.Avg : IMessage<AggregationQuery.Types.Aggregation.Types.Avg>, IEquatable<AggregationQuery.Types.Aggregation.Types.Avg>, IDeepCloneable<AggregationQuery.Types.Aggregation.Types.Avg>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Google Cloud Datastore v1 API class AggregationQuery.Types.Aggregation.Types.Avg.

Average of the values of the requested property.

-   Only numeric values will be aggregated. All non-numeric values including `NULL` are skipped.
    
-   If the aggregated values contain `NaN`, returns `NaN`. Infinity math follows IEEE-754 standards.
    
-   If the aggregated value set is empty, returns `NULL`.
    
-   Always returns the result as a double.
    

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> AggregationQuery.Types.Aggregation.Types.Avg

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[AggregationQuery](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.11.0/Google.Cloud.Datastore.V1.AggregationQuery)[Types](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.11.0/Google.Cloud.Datastore.V1.AggregationQuery.Types)[Aggregation](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.11.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation)[Types](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.11.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation.Types)[Avg](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.11.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation.Types.Avg), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[AggregationQuery](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.11.0/Google.Cloud.Datastore.V1.AggregationQuery)[Types](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.11.0/Google.Cloud.Datastore.V1.AggregationQuery.Types)[Aggregation](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.11.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation)[Types](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.11.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation.Types)[Avg](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.11.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation.Types.Avg), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[AggregationQuery](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.11.0/Google.Cloud.Datastore.V1.AggregationQuery)[Types](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.11.0/Google.Cloud.Datastore.V1.AggregationQuery.Types)[Aggregation](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.11.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation)[Types](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.11.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation.Types)[Avg](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.11.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation.Types.Avg), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Datastore.V1](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.11.0/Google.Cloud.Datastore.V1)

## Assembly

Google.Cloud.Datastore.V1.dll

## Constructors

### Avg()

```
public Avg()
```

### Avg(Avg)

```
public Avg(AggregationQuery.Types.Aggregation.Types.Avg other)
```

**Parameter**

**Name**

**Description**

`other`

`[AggregationQuery](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.11.0/Google.Cloud.Datastore.V1.AggregationQuery)[Types](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.11.0/Google.Cloud.Datastore.V1.AggregationQuery.Types)[Aggregation](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.11.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation)[Types](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.11.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation.Types)[Avg](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.11.0/Google.Cloud.Datastore.V1.AggregationQuery.Types.Aggregation.Types.Avg)`  

## Properties

### Property

```
public PropertyReference Property { get; set; }
```

The property to aggregate on.

**Property Value**

**Type**

**Description**

`[PropertyReference](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.11.0/Google.Cloud.Datastore.V1.PropertyReference)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
