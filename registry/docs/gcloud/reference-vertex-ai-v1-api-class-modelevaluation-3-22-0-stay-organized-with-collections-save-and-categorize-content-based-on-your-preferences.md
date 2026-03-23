-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Vertex AI v1 API - Class ModelEvaluation (3.22.0) Stay organized with collections Save and categorize content based on your preferences.

3.68.0 (latest) 3.67.0 3.66.0 3.65.0 3.64.0 3.63.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class ModelEvaluation : IMessage<ModelEvaluation>, IEquatable<ModelEvaluation>, IDeepCloneable<ModelEvaluation>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Vertex AI v1 API class ModelEvaluation.

A collection of metrics calculated by comparing Model's predictions on all of the test data against annotations from the test data.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ModelEvaluation

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[ModelEvaluation](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.22.0/Google.Cloud.AIPlatform.V1.ModelEvaluation), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[ModelEvaluation](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.22.0/Google.Cloud.AIPlatform.V1.ModelEvaluation), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[ModelEvaluation](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.22.0/Google.Cloud.AIPlatform.V1.ModelEvaluation), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.AIPlatform.V1](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.22.0/Google.Cloud.AIPlatform.V1)

## Assembly

Google.Cloud.AIPlatform.V1.dll

## Constructors

### ModelEvaluation()

```
public ModelEvaluation()
```

### ModelEvaluation(ModelEvaluation)

```
public ModelEvaluation(ModelEvaluation other)
```

**Parameter**

**Name**

**Description**

`other`

`[ModelEvaluation](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.22.0/Google.Cloud.AIPlatform.V1.ModelEvaluation)`  

## Properties

### AnnotationSchemaUri

```
public string AnnotationSchemaUri { get; set; }
```

Points to a YAML file stored on Google Cloud Storage describing \[EvaluatedDataItemView.predictions\]\[\], \[EvaluatedDataItemView.ground\_truths\]\[\], \[EvaluatedAnnotation.predictions\]\[google.cloud.aiplatform.v1.EvaluatedAnnotation.predictions\], and \[EvaluatedAnnotation.ground\_truths\]\[google.cloud.aiplatform.v1.EvaluatedAnnotation.ground\_truths\]. The schema is defined as an OpenAPI 3.0.2 [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#schemaObject).

This field is not populated if there are neither EvaluatedDataItemViews nor EvaluatedAnnotations under this ModelEvaluation.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### CreateTime

```
public Timestamp CreateTime { get; set; }
```

Output only. Timestamp when this ModelEvaluation was created.

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

### DataItemSchemaUri

```
public string DataItemSchemaUri { get; set; }
```

Points to a YAML file stored on Google Cloud Storage describing \[EvaluatedDataItemView.data\_item\_payload\]\[\] and \[EvaluatedAnnotation.data\_item\_payload\]\[google.cloud.aiplatform.v1.EvaluatedAnnotation.data\_item\_payload\]. The schema is defined as an OpenAPI 3.0.2 [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#schemaObject).

This field is not populated if there are neither EvaluatedDataItemViews nor EvaluatedAnnotations under this ModelEvaluation.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### DisplayName

```
public string DisplayName { get; set; }
```

The display name of the ModelEvaluation.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ExplanationSpecs

```
public RepeatedField<ModelEvaluation.Types.ModelEvaluationExplanationSpec> ExplanationSpecs { get; }
```

Describes the values of \[ExplanationSpec\]\[google.cloud.aiplatform.v1.ExplanationSpec\] that are used for explaining the predicted values on the evaluated data.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[ModelEvaluation](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.22.0/Google.Cloud.AIPlatform.V1.ModelEvaluation)[Types](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.22.0/Google.Cloud.AIPlatform.V1.ModelEvaluation.Types)[ModelEvaluationExplanationSpec](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.22.0/Google.Cloud.AIPlatform.V1.ModelEvaluation.Types.ModelEvaluationExplanationSpec)`

### Metadata

```
public Value Metadata { get; set; }
```

The metadata of the ModelEvaluation. For the ModelEvaluation uploaded from Managed Pipeline, metadata contains a structured value with keys of "pipeline\_job\_id", "evaluation\_dataset\_type", "evaluation\_dataset\_path", "row\_based\_metrics\_path".

**Property Value**

**Type**

**Description**

`[Value](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Value.html)`

### Metrics

```
public Value Metrics { get; set; }
```

Evaluation metrics of the Model. The schema of the metrics is stored in \[metrics\_schema\_uri\]\[google.cloud.aiplatform.v1.ModelEvaluation.metrics\_schema\_uri\]

**Property Value**

**Type**

**Description**

`[Value](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Value.html)`

### MetricsSchemaUri

```
public string MetricsSchemaUri { get; set; }
```

Points to a YAML file stored on Google Cloud Storage describing the \[metrics\]\[google.cloud.aiplatform.v1.ModelEvaluation.metrics\] of this ModelEvaluation. The schema is defined as an OpenAPI 3.0.2 [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#schemaObject).

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ModelEvaluationName

```
public ModelEvaluationName ModelEvaluationName { get; set; }
```

[ModelEvaluationName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.22.0/Google.Cloud.AIPlatform.V1.ModelEvaluationName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.22.0/Google.Cloud.AIPlatform.V1.ModelEvaluation#Google_Cloud_AIPlatform_V1_ModelEvaluation_Name) resource name property.

**Property Value**

**Type**

**Description**

`[ModelEvaluationName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.22.0/Google.Cloud.AIPlatform.V1.ModelEvaluationName)`

### ModelExplanation

```
public ModelExplanation ModelExplanation { get; set; }
```

Aggregated explanation metrics for the Model's prediction output over the data this ModelEvaluation uses. This field is populated only if the Model is evaluated with explanations, and only for AutoML tabular Models.

**Property Value**

**Type**

**Description**

`[ModelExplanation](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.22.0/Google.Cloud.AIPlatform.V1.ModelExplanation)`

### Name

```
public string Name { get; set; }
```

Output only. The resource name of the ModelEvaluation.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### SliceDimensions

```
public RepeatedField<string> SliceDimensions { get; }
```

All possible \[dimensions\]\[google.cloud.aiplatform.v1.ModelEvaluationSlice.Slice.dimension\] of ModelEvaluationSlices. The dimensions can be used as the filter of the \[ModelService.ListModelEvaluationSlices\]\[google.cloud.aiplatform.v1.ModelService.ListModelEvaluationSlices\] request, in the form of `slice.dimension = <dimension>`.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
