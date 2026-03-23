-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud AI Platform v1 API - Class Artifact (2.12.0) Stay organized with collections Save and categorize content based on your preferences.

3.68.0 (latest) 3.67.0 3.66.0 3.65.0 3.64.0 3.63.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class Artifact : IMessage<Artifact>, IEquatable<Artifact>, IDeepCloneable<Artifact>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Cloud AI Platform v1 API class Artifact.

Instance of a general artifact.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> Artifact

## Implements

[IMessage](https://github.com/protocolbuffers/protobuf/blob/e7e8f04a4ff0df9c7233ac0fcb3c41b9b84e174c/csharp/src/Google.Protobuf/IMessage.cs)[Artifact](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.12.0/Google.Cloud.AIPlatform.V1.Artifact), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[Artifact](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.12.0/Google.Cloud.AIPlatform.V1.Artifact), [IDeepCloneable](https://github.com/protocolbuffers/protobuf/blob/e7e8f04a4ff0df9c7233ac0fcb3c41b9b84e174c/csharp/src/Google.Protobuf/IDeepCloneable.cs)[Artifact](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.12.0/Google.Cloud.AIPlatform.V1.Artifact), [IBufferMessage](https://github.com/protocolbuffers/protobuf/blob/e7e8f04a4ff0df9c7233ac0fcb3c41b9b84e174c/csharp/src/Google.Protobuf/IBufferMessage.cs), [IMessage](https://github.com/protocolbuffers/protobuf/blob/e7e8f04a4ff0df9c7233ac0fcb3c41b9b84e174c/csharp/src/Google.Protobuf/IMessage.cs)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google](https://cloud.google.com/dotnet/docs/reference/Google.Apis/latest/Google.html)[Cloud](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.Cloud.html)Google.Cloud.AIPlatform[V1](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.12.0/Google.Cloud.AIPlatform.V1)

## Assembly

Google.Cloud.AIPlatform.V1.dll

## Constructors

### Artifact()

```
public Artifact()
```

### Artifact(Artifact)

```
public Artifact(Artifact other)
```

**Parameter**

**Name**

**Description**

`other`

`[Artifact](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.12.0/Google.Cloud.AIPlatform.V1.Artifact)`  

## Properties

### ArtifactName

```
public ArtifactName ArtifactName { get; set; }
```

[ArtifactName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.12.0/Google.Cloud.AIPlatform.V1.ArtifactName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.12.0/Google.Cloud.AIPlatform.V1.Artifact#Google_Cloud_AIPlatform_V1_Artifact_Name) resource name property.

**Property Value**

**Type**

**Description**

`[ArtifactName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.12.0/Google.Cloud.AIPlatform.V1.ArtifactName)`

### CreateTime

```
public Timestamp CreateTime { get; set; }
```

Output only. Timestamp when this Artifact was created.

**Property Value**

**Type**

**Description**

`[Timestamp](https://github.com/protocolbuffers/protobuf/blob/e7e8f04a4ff0df9c7233ac0fcb3c41b9b84e174c/csharp/src/Google.Protobuf/WellKnownTypes/Timestamp.cs)`

### Description

```
public string Description { get; set; }
```

Description of the Artifact

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### DisplayName

```
public string DisplayName { get; set; }
```

User provided display name of the Artifact. May be up to 128 Unicode characters.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Etag

```
public string Etag { get; set; }
```

An eTag used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Labels

```
public MapField<string, string> Labels { get; }
```

The labels with user-defined metadata to organize your Artifacts.

Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one Artifact (System labels are excluded).

**Property Value**

**Type**

**Description**

`[MapField](https://github.com/protocolbuffers/protobuf/blob/e7e8f04a4ff0df9c7233ac0fcb3c41b9b84e174c/csharp/src/Google.Protobuf/Collections/MapField.cs)[string](https://learn.microsoft.com/dotnet/api/system.string)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Metadata

```
public Struct Metadata { get; set; }
```

Properties of the Artifact. Top level metadata keys' heading and trailing spaces will be trimmed. The size of this field should not exceed 200KB.

**Property Value**

**Type**

**Description**

`[Struct](https://github.com/protocolbuffers/protobuf/blob/e7e8f04a4ff0df9c7233ac0fcb3c41b9b84e174c/csharp/src/Google.Protobuf/WellKnownTypes/Struct.cs)`

### Name

```
public string Name { get; set; }
```

Output only. The resource name of the Artifact.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### SchemaTitle

```
public string SchemaTitle { get; set; }
```

The title of the schema describing the metadata.

Schema title and version is expected to be registered in earlier Create Schema calls. And both are used together as unique identifiers to identify schemas within the local metadata store.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### SchemaVersion

```
public string SchemaVersion { get; set; }
```

The version of the schema in schema\_name to use.

Schema title and version is expected to be registered in earlier Create Schema calls. And both are used together as unique identifiers to identify schemas within the local metadata store.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### State

```
public Artifact.Types.State State { get; set; }
```

The state of this Artifact. This is a property of the Artifact, and does not imply or capture any ongoing process. This property is managed by clients (such as Vertex AI Pipelines), and the system does not prescribe or check the validity of state transitions.

**Property Value**

**Type**

**Description**

`[Artifact](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.12.0/Google.Cloud.AIPlatform.V1.Artifact)[Types](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.12.0/Google.Cloud.AIPlatform.V1.Artifact.Types)[State](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.12.0/Google.Cloud.AIPlatform.V1.Artifact.Types.State)`

### UpdateTime

```
public Timestamp UpdateTime { get; set; }
```

Output only. Timestamp when this Artifact was last updated.

**Property Value**

**Type**

**Description**

`[Timestamp](https://github.com/protocolbuffers/protobuf/blob/e7e8f04a4ff0df9c7233ac0fcb3c41b9b84e174c/csharp/src/Google.Protobuf/WellKnownTypes/Timestamp.cs)`

### Uri

```
public string Uri { get; set; }
```

The uniform resource identifier of the artifact file. May be empty if there is no actual artifact file.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
