-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Vertex AI v1beta1 API - Class SafetyResult (1.0.0-beta74) Stay organized with collections Save and categorize content based on your preferences.

1.0.0-beta74 (latest) 1.0.0-beta73

```
public sealed class SafetyResult : IMessage<SafetyResult>, IEquatable<SafetyResult>, IDeepCloneable<SafetyResult>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Vertex AI v1beta1 API class SafetyResult.

Spec for safety result.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> SafetyResult

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[SafetyResult](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.SafetyResult), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[SafetyResult](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.SafetyResult), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[SafetyResult](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.SafetyResult), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.AIPlatform.V1Beta1](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1)

## Assembly

Google.Cloud.AIPlatform.V1Beta1.dll

## Constructors

### SafetyResult()

```
public SafetyResult()
```

### SafetyResult(SafetyResult)

```
public SafetyResult(SafetyResult other)
```

**Parameter**

**Name**

**Description**

`other`

`[SafetyResult](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.SafetyResult)`  

## Properties

### Confidence

```
public float Confidence { get; set; }
```

Output only. Confidence for safety score.

**Property Value**

**Type**

**Description**

`[float](https://learn.microsoft.com/dotnet/api/system.single)`

### Explanation

```
public string Explanation { get; set; }
```

Output only. Explanation for safety score.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### HasConfidence

```
public bool HasConfidence { get; }
```

Gets whether the "confidence" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasScore

```
public bool HasScore { get; }
```

Gets whether the "score" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### Score

```
public float Score { get; set; }
```

Output only. Safety score.

**Property Value**

**Type**

**Description**

`[float](https://learn.microsoft.com/dotnet/api/system.single)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
