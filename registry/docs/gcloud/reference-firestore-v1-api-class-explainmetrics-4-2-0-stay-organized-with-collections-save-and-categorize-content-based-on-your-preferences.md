-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Firestore v1 API - Class ExplainMetrics (4.2.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [4.2.0 (latest)](/dotnet/docs/reference/Google.Cloud.Firestore.V1/latest/Google.Cloud.Firestore.V1.ExplainMetrics)
-   [4.1.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/4.1.0/Google.Cloud.Firestore.V1.ExplainMetrics)
-   [4.0.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/4.0.0/Google.Cloud.Firestore.V1.ExplainMetrics)
-   [3.13.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.13.0/Google.Cloud.Firestore.V1.ExplainMetrics)
-   [3.12.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.12.0/Google.Cloud.Firestore.V1.ExplainMetrics)
-   [3.11.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.11.0/Google.Cloud.Firestore.V1.ExplainMetrics)
-   [3.10.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.10.0/Google.Cloud.Firestore.V1.ExplainMetrics)
-   [3.9.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.9.0/Google.Cloud.Firestore.V1.ExplainMetrics)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.8.0/Google.Cloud.Firestore.V1.ExplainMetrics)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.7.0/Google.Cloud.Firestore.V1.ExplainMetrics)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.6.0/Google.Cloud.Firestore.V1.ExplainMetrics)
-   [3.5.1](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.5.1/Google.Cloud.Firestore.V1.ExplainMetrics)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.4.0/Google.Cloud.Firestore.V1.ExplainMetrics)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.3.0/Google.Cloud.Firestore.V1.ExplainMetrics)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.2.0/Google.Cloud.Firestore.V1.ExplainMetrics)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.1.0/Google.Cloud.Firestore.V1.ExplainMetrics)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.0.0/Google.Cloud.Firestore.V1.ExplainMetrics)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/2.5.0/Google.Cloud.Firestore.V1.ExplainMetrics)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/2.4.0/Google.Cloud.Firestore.V1.ExplainMetrics)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/2.3.0/Google.Cloud.Firestore.V1.ExplainMetrics)

```
public sealed class ExplainMetrics : IMessage<ExplainMetrics>, IEquatable<ExplainMetrics>, IDeepCloneable<ExplainMetrics>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Firestore v1 API class ExplainMetrics.

Explain metrics for the query.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ExplainMetrics

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[ExplainMetrics](/dotnet/docs/reference/Google.Cloud.Firestore.V1/latest/Google.Cloud.Firestore.V1.ExplainMetrics), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[ExplainMetrics](/dotnet/docs/reference/Google.Cloud.Firestore.V1/latest/Google.Cloud.Firestore.V1.ExplainMetrics), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[ExplainMetrics](/dotnet/docs/reference/Google.Cloud.Firestore.V1/latest/Google.Cloud.Firestore.V1.ExplainMetrics), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Firestore.V1](/dotnet/docs/reference/Google.Cloud.Firestore.V1/latest/Google.Cloud.Firestore.V1)

## Assembly

Google.Cloud.Firestore.V1.dll

## Constructors

### ExplainMetrics()

```
public ExplainMetrics()
```

### ExplainMetrics(ExplainMetrics)

```
public ExplainMetrics(ExplainMetrics other)
```

**Parameter**

**Name**

**Description**

`other`

`[ExplainMetrics](/dotnet/docs/reference/Google.Cloud.Firestore.V1/latest/Google.Cloud.Firestore.V1.ExplainMetrics)`  

## Properties

### ExecutionStats

```
public ExecutionStats ExecutionStats { get; set; }
```

Aggregated stats from the execution of the query. Only present when \[ExplainOptions.analyze\]\[google.firestore.v1.ExplainOptions.analyze\] is set to true.

**Property Value**

**Type**

**Description**

`[ExecutionStats](/dotnet/docs/reference/Google.Cloud.Firestore.V1/latest/Google.Cloud.Firestore.V1.ExecutionStats)`

### PlanSummary

```
public PlanSummary PlanSummary { get; set; }
```

Planning phase information for the query.

**Property Value**

**Type**

**Description**

`[PlanSummary](/dotnet/docs/reference/Google.Cloud.Firestore.V1/latest/Google.Cloud.Firestore.V1.PlanSummary)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
