-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Model Armor v1 API - Class SdpInspectResult (1.0.0-beta05) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [1.0.0-beta05 (latest)](/dotnet/docs/reference/Google.Cloud.ModelArmor.V1/latest/Google.Cloud.ModelArmor.V1.SdpInspectResult)
-   [1.0.0-beta04](/dotnet/docs/reference/Google.Cloud.ModelArmor.V1/1.0.0-beta04/Google.Cloud.ModelArmor.V1.SdpInspectResult)

```
public sealed class SdpInspectResult : IMessage<SdpInspectResult>, IEquatable<SdpInspectResult>, IDeepCloneable<SdpInspectResult>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Model Armor v1 API class SdpInspectResult.

Sensitive Data Protection Inspection Result.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> SdpInspectResult

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[SdpInspectResult](/dotnet/docs/reference/Google.Cloud.ModelArmor.V1/latest/Google.Cloud.ModelArmor.V1.SdpInspectResult), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[SdpInspectResult](/dotnet/docs/reference/Google.Cloud.ModelArmor.V1/latest/Google.Cloud.ModelArmor.V1.SdpInspectResult), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[SdpInspectResult](/dotnet/docs/reference/Google.Cloud.ModelArmor.V1/latest/Google.Cloud.ModelArmor.V1.SdpInspectResult), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.ModelArmor.V1](/dotnet/docs/reference/Google.Cloud.ModelArmor.V1/latest/Google.Cloud.ModelArmor.V1)

## Assembly

Google.Cloud.ModelArmor.V1.dll

## Constructors

### SdpInspectResult()

```
public SdpInspectResult()
```

### SdpInspectResult(SdpInspectResult)

```
public SdpInspectResult(SdpInspectResult other)
```

**Parameter**

**Name**

**Description**

`other`

`[SdpInspectResult](/dotnet/docs/reference/Google.Cloud.ModelArmor.V1/latest/Google.Cloud.ModelArmor.V1.SdpInspectResult)`  

## Properties

### ExecutionState

```
public FilterExecutionState ExecutionState { get; set; }
```

Output only. Reports whether Sensitive Data Protection inspection was successfully executed or not.

**Property Value**

**Type**

**Description**

`[FilterExecutionState](/dotnet/docs/reference/Google.Cloud.ModelArmor.V1/latest/Google.Cloud.ModelArmor.V1.FilterExecutionState)`

### Findings

```
public RepeatedField<SdpFinding> Findings { get; }
```

List of Sensitive Data Protection findings.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[SdpFinding](/dotnet/docs/reference/Google.Cloud.ModelArmor.V1/latest/Google.Cloud.ModelArmor.V1.SdpFinding)`

### FindingsTruncated

```
public bool FindingsTruncated { get; set; }
```

If true, then there is possibility that more findings were identified and the findings returned are a subset of all findings. The findings list might be truncated because the input items were too large, or because the server reached the maximum amount of resources allowed for a single API call.

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### MatchState

```
public FilterMatchState MatchState { get; set; }
```

Output only. Match state for SDP Inspection. Value is MATCH\_FOUND if at least one Sensitive Data Protection finding is identified.

**Property Value**

**Type**

**Description**

`[FilterMatchState](/dotnet/docs/reference/Google.Cloud.ModelArmor.V1/latest/Google.Cloud.ModelArmor.V1.FilterMatchState)`

### MessageItems

```
public RepeatedField<MessageItem> MessageItems { get; }
```

Optional messages corresponding to the result. A message can provide warnings or error details. For example, if execution state is skipped then this field provides related reason/explanation.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[MessageItem](/dotnet/docs/reference/Google.Cloud.ModelArmor.V1/latest/Google.Cloud.ModelArmor.V1.MessageItem)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
