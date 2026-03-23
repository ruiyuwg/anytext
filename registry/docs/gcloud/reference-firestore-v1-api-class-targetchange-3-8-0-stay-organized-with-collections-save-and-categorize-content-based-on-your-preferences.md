-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Firestore v1 API - Class TargetChange (3.8.0) Stay organized with collections Save and categorize content based on your preferences.

Version 3.8.0keyboard\_arrow\_down

-   [4.2.0 (latest)](/dotnet/docs/reference/Google.Cloud.Firestore.V1/latest/Google.Cloud.Firestore.V1.TargetChange)
-   [4.1.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/4.1.0/Google.Cloud.Firestore.V1.TargetChange)
-   [4.0.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/4.0.0/Google.Cloud.Firestore.V1.TargetChange)
-   [3.13.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.13.0/Google.Cloud.Firestore.V1.TargetChange)
-   [3.12.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.12.0/Google.Cloud.Firestore.V1.TargetChange)
-   [3.11.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.11.0/Google.Cloud.Firestore.V1.TargetChange)
-   [3.10.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.10.0/Google.Cloud.Firestore.V1.TargetChange)
-   [3.9.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.9.0/Google.Cloud.Firestore.V1.TargetChange)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.8.0/Google.Cloud.Firestore.V1.TargetChange)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.7.0/Google.Cloud.Firestore.V1.TargetChange)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.6.0/Google.Cloud.Firestore.V1.TargetChange)
-   [3.5.1](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.5.1/Google.Cloud.Firestore.V1.TargetChange)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.4.0/Google.Cloud.Firestore.V1.TargetChange)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.3.0/Google.Cloud.Firestore.V1.TargetChange)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.2.0/Google.Cloud.Firestore.V1.TargetChange)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.1.0/Google.Cloud.Firestore.V1.TargetChange)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.0.0/Google.Cloud.Firestore.V1.TargetChange)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/2.5.0/Google.Cloud.Firestore.V1.TargetChange)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/2.4.0/Google.Cloud.Firestore.V1.TargetChange)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/2.3.0/Google.Cloud.Firestore.V1.TargetChange)

```
public sealed class TargetChange : IMessage<TargetChange>, IEquatable<TargetChange>, IDeepCloneable<TargetChange>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Firestore v1 API class TargetChange.

Targets being watched have changed.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> TargetChange

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[TargetChange](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.8.0/Google.Cloud.Firestore.V1.TargetChange), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[TargetChange](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.8.0/Google.Cloud.Firestore.V1.TargetChange), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[TargetChange](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.8.0/Google.Cloud.Firestore.V1.TargetChange), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Firestore.V1](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.8.0/Google.Cloud.Firestore.V1)

## Assembly

Google.Cloud.Firestore.V1.dll

## Constructors

### TargetChange()

```
public TargetChange()
```

### TargetChange(TargetChange)

```
public TargetChange(TargetChange other)
```

**Parameter**

**Name**

**Description**

`other`

`[TargetChange](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.8.0/Google.Cloud.Firestore.V1.TargetChange)`  

## Properties

### Cause

```
public Status Cause { get; set; }
```

The error that resulted in this change, if applicable.

**Property Value**

**Type**

**Description**

`[Status](https://github.com/googleapis/gax-dotnet/blob/4675989b0664e260626a9437f68937e8ce44b3f2/Google.Api.CommonProtos/Rpc/Status.g.cs)`

### ReadTime

```
public Timestamp ReadTime { get; set; }
```

The consistent `read_time` for the given `target_ids` (omitted when the target\_ids are not at a consistent snapshot).

The stream is guaranteed to send a `read_time` with `target_ids` empty whenever the entire stream reaches a new consistent snapshot. ADD, CURRENT, and RESET messages are guaranteed to (eventually) result in a new consistent snapshot (while NO\_CHANGE and REMOVE messages are not).

For a given stream, `read_time` is guaranteed to be monotonically increasing.

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

### ResumeToken

```
public ByteString ResumeToken { get; set; }
```

A token that can be used to resume the stream for the given `target_ids`, or all targets if `target_ids` is empty.

Not set on every target change.

**Property Value**

**Type**

**Description**

`[ByteString](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.ByteString.html)`

### TargetChangeType

```
public TargetChange.Types.TargetChangeType TargetChangeType { get; set; }
```

The type of change that occurred.

**Property Value**

**Type**

**Description**

`[TargetChange](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.8.0/Google.Cloud.Firestore.V1.TargetChange)[Types](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.8.0/Google.Cloud.Firestore.V1.TargetChange.Types)[TargetChangeType](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.8.0/Google.Cloud.Firestore.V1.TargetChange.Types.TargetChangeType)`

### TargetIds

```
public RepeatedField<int> TargetIds { get; }
```

The target IDs of targets that have changed.

If empty, the change applies to all targets.

The order of the target IDs is not defined.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[int](https://learn.microsoft.com/dotnet/api/system.int32)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
