-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class MoveAnalysisResult (2.11.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.11.0keyboard\_arrow\_down

-   [3.14.0 (latest)](/dotnet/docs/reference/Google.Cloud.Asset.V1/latest/Google.Cloud.Asset.V1.MoveAnalysisResult)
-   [3.13.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.13.0/Google.Cloud.Asset.V1.MoveAnalysisResult)
-   [3.12.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.12.0/Google.Cloud.Asset.V1.MoveAnalysisResult)
-   [3.11.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.11.0/Google.Cloud.Asset.V1.MoveAnalysisResult)
-   [3.10.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.10.0/Google.Cloud.Asset.V1.MoveAnalysisResult)
-   [3.9.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.MoveAnalysisResult)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.8.0/Google.Cloud.Asset.V1.MoveAnalysisResult)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.7.0/Google.Cloud.Asset.V1.MoveAnalysisResult)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.6.0/Google.Cloud.Asset.V1.MoveAnalysisResult)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.5.0/Google.Cloud.Asset.V1.MoveAnalysisResult)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.4.0/Google.Cloud.Asset.V1.MoveAnalysisResult)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.3.0/Google.Cloud.Asset.V1.MoveAnalysisResult)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.2.0/Google.Cloud.Asset.V1.MoveAnalysisResult)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.1.0/Google.Cloud.Asset.V1.MoveAnalysisResult)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.0.0/Google.Cloud.Asset.V1.MoveAnalysisResult)
-   [2.11.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.11.0/Google.Cloud.Asset.V1.MoveAnalysisResult)
-   [2.10.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.10.0/Google.Cloud.Asset.V1.MoveAnalysisResult)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.9.0/Google.Cloud.Asset.V1.MoveAnalysisResult)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.8.0/Google.Cloud.Asset.V1.MoveAnalysisResult)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.7.0/Google.Cloud.Asset.V1.MoveAnalysisResult)

```
public sealed class MoveAnalysisResult : IMessage<MoveAnalysisResult>, IEquatable<MoveAnalysisResult>, IDeepCloneable<MoveAnalysisResult>, IBufferMessage, IMessage
```

An analysis result including blockers and warnings.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> MoveAnalysisResult

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[MoveAnalysisResult](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.11.0/Google.Cloud.Asset.V1.MoveAnalysisResult)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[MoveAnalysisResult](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.11.0/Google.Cloud.Asset.V1.MoveAnalysisResult)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[MoveAnalysisResult](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.11.0/Google.Cloud.Asset.V1.MoveAnalysisResult)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Asset.V1](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.11.0/Google.Cloud.Asset.V1)

## Assembly

Google.Cloud.Asset.V1.dll

## Constructors

### MoveAnalysisResult()

```
public MoveAnalysisResult()
```

### MoveAnalysisResult(MoveAnalysisResult)

```
public MoveAnalysisResult(MoveAnalysisResult other)
```

**Parameter**

**Name**

**Description**

`other`

`[MoveAnalysisResult](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.11.0/Google.Cloud.Asset.V1.MoveAnalysisResult)`  

## Properties

### Blockers

```
public RepeatedField<MoveImpact> Blockers { get; }
```

Blocking information that would prevent the target resource from moving to the specified destination at runtime.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[MoveImpact](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.11.0/Google.Cloud.Asset.V1.MoveImpact)>`

### Warnings

```
public RepeatedField<MoveImpact> Warnings { get; }
```

Warning information indicating that moving the target resource to the specified destination might be unsafe. This can include important policy information and configuration changes, but will not block moves at runtime.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[MoveImpact](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.11.0/Google.Cloud.Asset.V1.MoveImpact)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
