-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud AI Platform v1 API - Class EntityType (2.27.0) Stay organized with collections Save and categorize content based on your preferences.

3.68.0 (latest) 3.67.0 3.66.0 3.65.0 3.64.0 3.63.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class EntityType : IMessage<EntityType>, IEquatable<EntityType>, IDeepCloneable<EntityType>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Cloud AI Platform v1 API class EntityType.

An entity type is a type of object in a system that needs to be modeled and have stored information about. For example, driver is an entity type, and driver0 is an instance of an entity type driver.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> EntityType

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[EntityType](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.27.0/Google.Cloud.AIPlatform.V1.EntityType), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[EntityType](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.27.0/Google.Cloud.AIPlatform.V1.EntityType), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[EntityType](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.27.0/Google.Cloud.AIPlatform.V1.EntityType), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.AIPlatform.V1](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.27.0/Google.Cloud.AIPlatform.V1)

## Assembly

Google.Cloud.AIPlatform.V1.dll

## Constructors

### EntityType()

```
public EntityType()
```

### EntityType(EntityType)

```
public EntityType(EntityType other)
```

**Parameter**

**Name**

**Description**

`other`

`[EntityType](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.27.0/Google.Cloud.AIPlatform.V1.EntityType)`  

## Properties

### CreateTime

```
public Timestamp CreateTime { get; set; }
```

Output only. Timestamp when this EntityType was created.

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

### Description

```
public string Description { get; set; }
```

Optional. Description of the EntityType.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### EntityTypeName

```
public EntityTypeName EntityTypeName { get; set; }
```

[EntityTypeName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.27.0/Google.Cloud.AIPlatform.V1.EntityTypeName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.27.0/Google.Cloud.AIPlatform.V1.EntityType#Google_Cloud_AIPlatform_V1_EntityType_Name) resource name property.

**Property Value**

**Type**

**Description**

`[EntityTypeName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.27.0/Google.Cloud.AIPlatform.V1.EntityTypeName)`

### Etag

```
public string Etag { get; set; }
```

Optional. Used to perform a consistent read-modify-write updates. If not set, a blind "overwrite" update happens.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Labels

```
public MapField<string, string> Labels { get; }
```

Optional. The labels with user-defined metadata to organize your EntityTypes.

Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed.

See [https://goo.gl/xmQnxf](https://goo.gl/xmQnxf) for more information on and examples of labels. No more than 64 user labels can be associated with one EntityType (System labels are excluded)." System reserved label keys are prefixed with "aiplatform.googleapis.com/" and are immutable.

**Property Value**

**Type**

**Description**

`[MapField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.MapField-2.html)[string](https://learn.microsoft.com/dotnet/api/system.string)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### MonitoringConfig

```
public FeaturestoreMonitoringConfig MonitoringConfig { get; set; }
```

Optional. The default monitoring configuration for all Features with value type (\[Feature.ValueType\]\[google.cloud.aiplatform.v1.Feature.ValueType\]) BOOL, STRING, DOUBLE or INT64 under this EntityType.

If this is populated with \[FeaturestoreMonitoringConfig.monitoring\_interval\] specified, snapshot analysis monitoring is enabled. Otherwise, snapshot analysis monitoring is disabled.

**Property Value**

**Type**

**Description**

`[FeaturestoreMonitoringConfig](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.27.0/Google.Cloud.AIPlatform.V1.FeaturestoreMonitoringConfig)`

### Name

```
public string Name { get; set; }
```

Immutable. Name of the EntityType. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}`

The last part entity\_type is assigned by the client. The entity\_type can be up to 64 characters long and can consist only of ASCII Latin letters A-Z and a-z and underscore(\_), and ASCII digits 0-9 starting with a letter. The value will be unique given a featurestore.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### OfflineStorageTtlDays

```
public int OfflineStorageTtlDays { get; set; }
```

Optional. Config for data retention policy in offline storage. TTL in days for feature values that will be stored in offline storage. The Feature Store offline storage periodically removes obsolete feature values older than `offline_storage_ttl_days` since the feature generation time. If unset (or explicitly set to 0), default to 4000 days TTL.

**Property Value**

**Type**

**Description**

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`

### UpdateTime

```
public Timestamp UpdateTime { get; set; }
```

Output only. Timestamp when this EntityType was most recently updated.

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
