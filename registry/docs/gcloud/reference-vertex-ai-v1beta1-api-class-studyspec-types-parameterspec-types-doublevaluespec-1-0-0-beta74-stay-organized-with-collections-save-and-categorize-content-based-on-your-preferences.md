-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Vertex AI v1beta1 API - Class StudySpec.Types.ParameterSpec.Types.DoubleValueSpec (1.0.0-beta74) Stay organized with collections Save and categorize content based on your preferences.

1.0.0-beta74 (latest) 1.0.0-beta73

```
public sealed class StudySpec.Types.ParameterSpec.Types.DoubleValueSpec : IMessage<StudySpec.Types.ParameterSpec.Types.DoubleValueSpec>, IEquatable<StudySpec.Types.ParameterSpec.Types.DoubleValueSpec>, IDeepCloneable<StudySpec.Types.ParameterSpec.Types.DoubleValueSpec>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Vertex AI v1beta1 API class StudySpec.Types.ParameterSpec.Types.DoubleValueSpec.

Value specification for a parameter in `DOUBLE` type.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> StudySpec.Types.ParameterSpec.Types.DoubleValueSpec

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[StudySpec](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.StudySpec)[Types](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.StudySpec.Types)[ParameterSpec](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.StudySpec.Types.ParameterSpec)[Types](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.StudySpec.Types.ParameterSpec.Types)[DoubleValueSpec](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.StudySpec.Types.ParameterSpec.Types.DoubleValueSpec), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[StudySpec](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.StudySpec)[Types](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.StudySpec.Types)[ParameterSpec](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.StudySpec.Types.ParameterSpec)[Types](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.StudySpec.Types.ParameterSpec.Types)[DoubleValueSpec](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.StudySpec.Types.ParameterSpec.Types.DoubleValueSpec), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[StudySpec](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.StudySpec)[Types](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.StudySpec.Types)[ParameterSpec](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.StudySpec.Types.ParameterSpec)[Types](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.StudySpec.Types.ParameterSpec.Types)[DoubleValueSpec](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.StudySpec.Types.ParameterSpec.Types.DoubleValueSpec), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.AIPlatform.V1Beta1](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1)

## Assembly

Google.Cloud.AIPlatform.V1Beta1.dll

## Constructors

### DoubleValueSpec()

```
public DoubleValueSpec()
```

### DoubleValueSpec(DoubleValueSpec)

```
public DoubleValueSpec(StudySpec.Types.ParameterSpec.Types.DoubleValueSpec other)
```

**Parameter**

**Name**

**Description**

`other`

`[StudySpec](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.StudySpec)[Types](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.StudySpec.Types)[ParameterSpec](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.StudySpec.Types.ParameterSpec)[Types](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.StudySpec.Types.ParameterSpec.Types)[DoubleValueSpec](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1Beta1/latest/Google.Cloud.AIPlatform.V1Beta1.StudySpec.Types.ParameterSpec.Types.DoubleValueSpec)`  

## Properties

### DefaultValue

```
public double DefaultValue { get; set; }
```

A default value for a `DOUBLE` parameter that is assumed to be a relatively good starting point. Unset value signals that there is no offered starting point.

Currently only supported by the Vertex AI Vizier service. Not supported by HyperparameterTuningJob or TrainingPipeline.

**Property Value**

**Type**

**Description**

`[double](https://learn.microsoft.com/dotnet/api/system.double)`

### HasDefaultValue

```
public bool HasDefaultValue { get; }
```

Gets whether the "default\_value" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### MaxValue

```
public double MaxValue { get; set; }
```

Required. Inclusive maximum value of the parameter.

**Property Value**

**Type**

**Description**

`[double](https://learn.microsoft.com/dotnet/api/system.double)`

### MinValue

```
public double MinValue { get; set; }
```

Required. Inclusive minimum value of the parameter.

**Property Value**

**Type**

**Description**

`[double](https://learn.microsoft.com/dotnet/api/system.double)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
