-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Artifact Registry v1 API - Class MavenArtifact (2.9.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.9.0keyboard\_arrow\_down

-   [2.15.0 (latest)](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/latest/Google.Cloud.ArtifactRegistry.V1.MavenArtifact)
-   [2.14.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.14.0/Google.Cloud.ArtifactRegistry.V1.MavenArtifact)
-   [2.13.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.13.0/Google.Cloud.ArtifactRegistry.V1.MavenArtifact)
-   [2.12.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.12.0/Google.Cloud.ArtifactRegistry.V1.MavenArtifact)
-   [2.11.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.11.0/Google.Cloud.ArtifactRegistry.V1.MavenArtifact)
-   [2.10.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.10.0/Google.Cloud.ArtifactRegistry.V1.MavenArtifact)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.9.0/Google.Cloud.ArtifactRegistry.V1.MavenArtifact)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.8.0/Google.Cloud.ArtifactRegistry.V1.MavenArtifact)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.7.0/Google.Cloud.ArtifactRegistry.V1.MavenArtifact)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.6.0/Google.Cloud.ArtifactRegistry.V1.MavenArtifact)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.5.0/Google.Cloud.ArtifactRegistry.V1.MavenArtifact)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.4.0/Google.Cloud.ArtifactRegistry.V1.MavenArtifact)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.3.0/Google.Cloud.ArtifactRegistry.V1.MavenArtifact)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.2.0/Google.Cloud.ArtifactRegistry.V1.MavenArtifact)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.1.0/Google.Cloud.ArtifactRegistry.V1.MavenArtifact)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.0.0/Google.Cloud.ArtifactRegistry.V1.MavenArtifact)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/1.1.0/Google.Cloud.ArtifactRegistry.V1.MavenArtifact)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/1.0.0/Google.Cloud.ArtifactRegistry.V1.MavenArtifact)

```
public sealed class MavenArtifact : IMessage<MavenArtifact>, IEquatable<MavenArtifact>, IDeepCloneable<MavenArtifact>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Artifact Registry v1 API class MavenArtifact.

MavenArtifact represents a maven artifact.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> MavenArtifact

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[MavenArtifact](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.9.0/Google.Cloud.ArtifactRegistry.V1.MavenArtifact), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[MavenArtifact](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.9.0/Google.Cloud.ArtifactRegistry.V1.MavenArtifact), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[MavenArtifact](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.9.0/Google.Cloud.ArtifactRegistry.V1.MavenArtifact), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.ArtifactRegistry.V1](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.9.0/Google.Cloud.ArtifactRegistry.V1)

## Assembly

Google.Cloud.ArtifactRegistry.V1.dll

## Constructors

### MavenArtifact()

```
public MavenArtifact()
```

### MavenArtifact(MavenArtifact)

```
public MavenArtifact(MavenArtifact other)
```

**Parameter**

**Name**

**Description**

`other`

`[MavenArtifact](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.9.0/Google.Cloud.ArtifactRegistry.V1.MavenArtifact)`  

## Properties

### ArtifactId

```
public string ArtifactId { get; set; }
```

Artifact ID for the artifact.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### CreateTime

```
public Timestamp CreateTime { get; set; }
```

Output only. Time the artifact was created.

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

### GroupId

```
public string GroupId { get; set; }
```

Group ID for the artifact. Example: com.google.guava

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### MavenArtifactName

```
public MavenArtifactName MavenArtifactName { get; set; }
```

[MavenArtifactName](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.9.0/Google.Cloud.ArtifactRegistry.V1.MavenArtifactName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.9.0/Google.Cloud.ArtifactRegistry.V1.MavenArtifact#Google_Cloud_ArtifactRegistry_V1_MavenArtifact_Name) resource name property.

**Property Value**

**Type**

**Description**

`[MavenArtifactName](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.9.0/Google.Cloud.ArtifactRegistry.V1.MavenArtifactName)`

### Name

```
public string Name { get; set; }
```

Required. registry\_location, project\_id, repository\_name and maven\_artifact forms a unique artifact For example, "projects/test-project/locations/us-west4/repositories/test-repo/mavenArtifacts/ com.google.guava:guava:31.0-jre", where "us-west4" is the registry\_location, "test-project" is the project\_id, "test-repo" is the repository\_name and "com.google.guava:guava:31.0-jre" is the maven artifact.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### PomUri

```
public string PomUri { get; set; }
```

Required. URL to access the pom file of the artifact. Example: us-west4-maven.pkg.dev/test-project/test-repo/com/google/guava/guava/31.0/guava-31.0.pom

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### UpdateTime

```
public Timestamp UpdateTime { get; set; }
```

Output only. Time the artifact was updated.

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

### Version

```
public string Version { get; set; }
```

Version of this artifact.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
