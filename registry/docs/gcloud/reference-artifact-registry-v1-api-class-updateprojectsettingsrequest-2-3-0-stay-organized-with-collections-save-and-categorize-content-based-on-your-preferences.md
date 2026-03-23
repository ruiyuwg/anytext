-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Artifact Registry v1 API - Class UpdateProjectSettingsRequest (2.3.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.3.0keyboard\_arrow\_down

-   [2.15.0 (latest)](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/latest/Google.Cloud.ArtifactRegistry.V1.UpdateProjectSettingsRequest)
-   [2.14.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.14.0/Google.Cloud.ArtifactRegistry.V1.UpdateProjectSettingsRequest)
-   [2.13.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.13.0/Google.Cloud.ArtifactRegistry.V1.UpdateProjectSettingsRequest)
-   [2.12.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.12.0/Google.Cloud.ArtifactRegistry.V1.UpdateProjectSettingsRequest)
-   [2.11.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.11.0/Google.Cloud.ArtifactRegistry.V1.UpdateProjectSettingsRequest)
-   [2.10.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.10.0/Google.Cloud.ArtifactRegistry.V1.UpdateProjectSettingsRequest)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.9.0/Google.Cloud.ArtifactRegistry.V1.UpdateProjectSettingsRequest)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.8.0/Google.Cloud.ArtifactRegistry.V1.UpdateProjectSettingsRequest)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.7.0/Google.Cloud.ArtifactRegistry.V1.UpdateProjectSettingsRequest)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.6.0/Google.Cloud.ArtifactRegistry.V1.UpdateProjectSettingsRequest)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.5.0/Google.Cloud.ArtifactRegistry.V1.UpdateProjectSettingsRequest)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.4.0/Google.Cloud.ArtifactRegistry.V1.UpdateProjectSettingsRequest)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.3.0/Google.Cloud.ArtifactRegistry.V1.UpdateProjectSettingsRequest)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.2.0/Google.Cloud.ArtifactRegistry.V1.UpdateProjectSettingsRequest)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.1.0/Google.Cloud.ArtifactRegistry.V1.UpdateProjectSettingsRequest)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.0.0/Google.Cloud.ArtifactRegistry.V1.UpdateProjectSettingsRequest)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/1.1.0/Google.Cloud.ArtifactRegistry.V1.UpdateProjectSettingsRequest)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/1.0.0/Google.Cloud.ArtifactRegistry.V1.UpdateProjectSettingsRequest)

```
public sealed class UpdateProjectSettingsRequest : IMessage<UpdateProjectSettingsRequest>, IEquatable<UpdateProjectSettingsRequest>, IDeepCloneable<UpdateProjectSettingsRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Artifact Registry v1 API class UpdateProjectSettingsRequest.

Sets the settings of the project.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> UpdateProjectSettingsRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[UpdateProjectSettingsRequest](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.3.0/Google.Cloud.ArtifactRegistry.V1.UpdateProjectSettingsRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[UpdateProjectSettingsRequest](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.3.0/Google.Cloud.ArtifactRegistry.V1.UpdateProjectSettingsRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[UpdateProjectSettingsRequest](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.3.0/Google.Cloud.ArtifactRegistry.V1.UpdateProjectSettingsRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.ArtifactRegistry.V1](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.3.0/Google.Cloud.ArtifactRegistry.V1)

## Assembly

Google.Cloud.ArtifactRegistry.V1.dll

## Constructors

### UpdateProjectSettingsRequest()

```
public UpdateProjectSettingsRequest()
```

### UpdateProjectSettingsRequest(UpdateProjectSettingsRequest)

```
public UpdateProjectSettingsRequest(UpdateProjectSettingsRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[UpdateProjectSettingsRequest](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.3.0/Google.Cloud.ArtifactRegistry.V1.UpdateProjectSettingsRequest)`  

## Properties

### ProjectSettings

```
public ProjectSettings ProjectSettings { get; set; }
```

The project settings.

**Property Value**

**Type**

**Description**

`[ProjectSettings](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.3.0/Google.Cloud.ArtifactRegistry.V1.ProjectSettings)`

### UpdateMask

```
public FieldMask UpdateMask { get; set; }
```

Field mask to support partial updates.

**Property Value**

**Type**

**Description**

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
