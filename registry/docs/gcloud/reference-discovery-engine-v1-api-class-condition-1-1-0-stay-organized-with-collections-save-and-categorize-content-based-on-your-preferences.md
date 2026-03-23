-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Discovery Engine v1 API - Class Condition (1.1.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.1.0keyboard\_arrow\_down

-   [1.13.0 (latest)](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/latest/Google.Cloud.DiscoveryEngine.V1.Condition)
-   [1.12.0](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.12.0/Google.Cloud.DiscoveryEngine.V1.Condition)
-   [1.11.0](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.11.0/Google.Cloud.DiscoveryEngine.V1.Condition)
-   [1.10.0](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.10.0/Google.Cloud.DiscoveryEngine.V1.Condition)
-   [1.9.0](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.9.0/Google.Cloud.DiscoveryEngine.V1.Condition)
-   [1.8.0](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.8.0/Google.Cloud.DiscoveryEngine.V1.Condition)
-   [1.7.0](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.7.0/Google.Cloud.DiscoveryEngine.V1.Condition)
-   [1.6.0](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.6.0/Google.Cloud.DiscoveryEngine.V1.Condition)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.5.0/Google.Cloud.DiscoveryEngine.V1.Condition)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.4.0/Google.Cloud.DiscoveryEngine.V1.Condition)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.3.0/Google.Cloud.DiscoveryEngine.V1.Condition)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.2.0/Google.Cloud.DiscoveryEngine.V1.Condition)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.1.0/Google.Cloud.DiscoveryEngine.V1.Condition)
-   [1.0.0-beta06](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.0.0-beta06/Google.Cloud.DiscoveryEngine.V1.Condition)

```
public sealed class Condition : IMessage<Condition>, IEquatable<Condition>, IDeepCloneable<Condition>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Discovery Engine v1 API class Condition.

Defines circumstances to be checked before allowing a behavior

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> Condition

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[Condition](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.1.0/Google.Cloud.DiscoveryEngine.V1.Condition), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[Condition](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.1.0/Google.Cloud.DiscoveryEngine.V1.Condition), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[Condition](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.1.0/Google.Cloud.DiscoveryEngine.V1.Condition), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.DiscoveryEngine.V1](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.1.0/Google.Cloud.DiscoveryEngine.V1)

## Assembly

Google.Cloud.DiscoveryEngine.V1.dll

## Constructors

### Condition()

```
public Condition()
```

### Condition(Condition)

```
public Condition(Condition other)
```

**Parameter**

**Name**

**Description**

`other`

`[Condition](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.1.0/Google.Cloud.DiscoveryEngine.V1.Condition)`  

## Properties

### ActiveTimeRange

```
public RepeatedField<Condition.Types.TimeRange> ActiveTimeRange { get; }
```

Range of time(s) specifying when condition is active.

Maximum of 10 time ranges.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[Condition](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.1.0/Google.Cloud.DiscoveryEngine.V1.Condition)[Types](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.1.0/Google.Cloud.DiscoveryEngine.V1.Condition.Types)[TimeRange](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.1.0/Google.Cloud.DiscoveryEngine.V1.Condition.Types.TimeRange)`

### QueryTerms

```
public RepeatedField<Condition.Types.QueryTerm> QueryTerms { get; }
```

Search only A list of terms to match the query on.

Maximum of 10 query terms.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[Condition](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.1.0/Google.Cloud.DiscoveryEngine.V1.Condition)[Types](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.1.0/Google.Cloud.DiscoveryEngine.V1.Condition.Types)[QueryTerm](/dotnet/docs/reference/Google.Cloud.DiscoveryEngine.V1/1.1.0/Google.Cloud.DiscoveryEngine.V1.Condition.Types.QueryTerm)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
