-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Vertex AI v1 API - Class UpdateEntityTypeRequest (3.24.0) Stay organized with collections Save and categorize content based on your preferences.

3.68.0 (latest) 3.67.0 3.66.0 3.65.0 3.64.0 3.63.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class UpdateEntityTypeRequest : IMessage<UpdateEntityTypeRequest>, IEquatable<UpdateEntityTypeRequest>, IDeepCloneable<UpdateEntityTypeRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Vertex AI v1 API class UpdateEntityTypeRequest.

Request message for \[FeaturestoreService.UpdateEntityType\]\[google.cloud.aiplatform.v1.FeaturestoreService.UpdateEntityType\].

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> UpdateEntityTypeRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[UpdateEntityTypeRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.24.0/Google.Cloud.AIPlatform.V1.UpdateEntityTypeRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[UpdateEntityTypeRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.24.0/Google.Cloud.AIPlatform.V1.UpdateEntityTypeRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[UpdateEntityTypeRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.24.0/Google.Cloud.AIPlatform.V1.UpdateEntityTypeRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.AIPlatform.V1](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.24.0/Google.Cloud.AIPlatform.V1)

## Assembly

Google.Cloud.AIPlatform.V1.dll

## Constructors

### UpdateEntityTypeRequest()

```
public UpdateEntityTypeRequest()
```

### UpdateEntityTypeRequest(UpdateEntityTypeRequest)

```
public UpdateEntityTypeRequest(UpdateEntityTypeRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[UpdateEntityTypeRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.24.0/Google.Cloud.AIPlatform.V1.UpdateEntityTypeRequest)`  

## Properties

### EntityType

```
public EntityType EntityType { get; set; }
```

Required. The EntityType's `name` field is used to identify the EntityType to be updated. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}`

**Property Value**

**Type**

**Description**

`[EntityType](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.24.0/Google.Cloud.AIPlatform.V1.EntityType)`

### UpdateMask

```
public FieldMask UpdateMask { get; set; }
```

Field mask is used to specify the fields to be overwritten in the EntityType resource by the update. The fields specified in the update\_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then only the non-empty fields present in the request will be overwritten. Set the update\_mask to `*` to override all fields.

Updatable fields:

-   `description`
-   `labels`
-   `monitoring_config.snapshot_analysis.disabled`
-   `monitoring_config.snapshot_analysis.monitoring_interval_days`
-   `monitoring_config.snapshot_analysis.staleness_days`
-   `monitoring_config.import_features_analysis.state`
-   `monitoring_config.import_features_analysis.anomaly_detection_baseline`
-   `monitoring_config.numerical_threshold_config.value`
-   `monitoring_config.categorical_threshold_config.value`
-   `offline_storage_ttl_days`

**Property Value**

**Type**

**Description**

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
