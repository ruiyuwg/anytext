-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Cloud Web Risk v1 API - Class ThreatEntryRemovals (2.3.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.3.0keyboard\_arrow\_down

-   [2.9.0 (latest)](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/latest/Google.Cloud.WebRisk.V1.ThreatEntryRemovals)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/2.8.0/Google.Cloud.WebRisk.V1.ThreatEntryRemovals)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/2.7.0/Google.Cloud.WebRisk.V1.ThreatEntryRemovals)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/2.6.0/Google.Cloud.WebRisk.V1.ThreatEntryRemovals)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/2.5.0/Google.Cloud.WebRisk.V1.ThreatEntryRemovals)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/2.4.0/Google.Cloud.WebRisk.V1.ThreatEntryRemovals)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/2.3.0/Google.Cloud.WebRisk.V1.ThreatEntryRemovals)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/2.2.0/Google.Cloud.WebRisk.V1.ThreatEntryRemovals)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/2.1.0/Google.Cloud.WebRisk.V1.ThreatEntryRemovals)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/2.0.0/Google.Cloud.WebRisk.V1.ThreatEntryRemovals)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/1.3.0/Google.Cloud.WebRisk.V1.ThreatEntryRemovals)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/1.2.0/Google.Cloud.WebRisk.V1.ThreatEntryRemovals)

```
public sealed class ThreatEntryRemovals : IMessage<ThreatEntryRemovals>, IEquatable<ThreatEntryRemovals>, IDeepCloneable<ThreatEntryRemovals>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Google Cloud Web Risk v1 API class ThreatEntryRemovals.

Contains the set of entries to remove from a local database.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ThreatEntryRemovals

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[ThreatEntryRemovals](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/2.3.0/Google.Cloud.WebRisk.V1.ThreatEntryRemovals), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[ThreatEntryRemovals](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/2.3.0/Google.Cloud.WebRisk.V1.ThreatEntryRemovals), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[ThreatEntryRemovals](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/2.3.0/Google.Cloud.WebRisk.V1.ThreatEntryRemovals), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.WebRisk.V1](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/2.3.0/Google.Cloud.WebRisk.V1)

## Assembly

Google.Cloud.WebRisk.V1.dll

## Constructors

### ThreatEntryRemovals()

```
public ThreatEntryRemovals()
```

### ThreatEntryRemovals(ThreatEntryRemovals)

```
public ThreatEntryRemovals(ThreatEntryRemovals other)
```

**Parameter**

**Name**

**Description**

`other`

`[ThreatEntryRemovals](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/2.3.0/Google.Cloud.WebRisk.V1.ThreatEntryRemovals)`  

## Properties

### RawIndices

```
public RawIndices RawIndices { get; set; }
```

The raw removal indices for a local list.

**Property Value**

**Type**

**Description**

`[RawIndices](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/2.3.0/Google.Cloud.WebRisk.V1.RawIndices)`

### RiceIndices

```
public RiceDeltaEncoding RiceIndices { get; set; }
```

The encoded local, lexicographically-sorted list indices, using a Golomb-Rice encoding. Used for sending compressed removal indices. The removal indices (uint32) are sorted in ascending order, then delta encoded and stored as encoded\_data.

**Property Value**

**Type**

**Description**

`[RiceDeltaEncoding](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/2.3.0/Google.Cloud.WebRisk.V1.RiceDeltaEncoding)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
