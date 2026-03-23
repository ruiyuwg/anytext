-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud AI Platform v1 API - Class Context (2.5.0) Stay organized with collections Save and categorize content based on your preferences.

3.68.0 (latest) 3.67.0 3.66.0 3.65.0 3.64.0 3.63.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class Context : IMessage<Context>, IEquatable<Context>, IDeepCloneable<Context>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Cloud AI Platform v1 API class Context.

Instance of a general context.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> Context

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[Context](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.5.0/Google.Cloud.AIPlatform.V1.Context)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[Context](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.5.0/Google.Cloud.AIPlatform.V1.Context)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[Context](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.5.0/Google.Cloud.AIPlatform.V1.Context)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.AIPlatform.V1](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.5.0/Google.Cloud.AIPlatform.V1)

## Assembly

Google.Cloud.AIPlatform.V1.dll

## Constructors

### Context()

```
public Context()
```

### Context(Context)

```
public Context(Context other)
```

**Parameter**

**Name**

**Description**

`other`

`[Context](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.5.0/Google.Cloud.AIPlatform.V1.Context)`  

## Properties

### ContextName

```
public ContextName ContextName { get; set; }
```

[ContextName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.5.0/Google.Cloud.AIPlatform.V1.ContextName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.5.0/Google.Cloud.AIPlatform.V1.Context#Google_Cloud_AIPlatform_V1_Context_Name) resource name property.

**Property Value**

**Type**

**Description**

`[ContextName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.5.0/Google.Cloud.AIPlatform.V1.ContextName)`

### CreateTime

```
public Timestamp CreateTime { get; set; }
```

Output only. Timestamp when this Context was created.

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

### Description

```
public string Description { get; set; }
```

Description of the Context

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### DisplayName

```
public string DisplayName { get; set; }
```

User provided display name of the Context. May be up to 128 Unicode characters.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Etag

```
public string Etag { get; set; }
```

An eTag used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Labels

```
public MapField<string, string> Labels { get; }
```

The labels with user-defined metadata to organize your Contexts.

Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one Context (System labels are excluded).

**Property Value**

**Type**

**Description**

`[MapField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.MapField-2.html)<[String](https://learn.microsoft.com/dotnet/api/system.string), [String](https://learn.microsoft.com/dotnet/api/system.string)>`

### Metadata

```
public Struct Metadata { get; set; }
```

Properties of the Context. Top level metadata keys' heading and trailing spaces will be trimmed. The size of this field should not exceed 200KB.

**Property Value**

**Type**

**Description**

`[Struct](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Struct.html)`

### Name

```
public string Name { get; set; }
```

Output only. The resource name of the Context.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### ParentContexts

```
public RepeatedField<string> ParentContexts { get; }
```

Output only. A list of resource names of Contexts that are parents of this Context. A Context may have at most 10 parent\_contexts.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[String](https://learn.microsoft.com/dotnet/api/system.string)>`

### ParentContextsAsContextNames

```
public ResourceNameList<ContextName> ParentContextsAsContextNames { get; }
```

[ContextName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.5.0/Google.Cloud.AIPlatform.V1.ContextName)\-typed view over the [ParentContexts](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.5.0/Google.Cloud.AIPlatform.V1.Context#Google_Cloud_AIPlatform_V1_Context_ParentContexts) resource name property.

**Property Value**

**Type**

**Description**

`[ResourceNameList](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNameList-1.html)<[ContextName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.5.0/Google.Cloud.AIPlatform.V1.ContextName)>`

### SchemaTitle

```
public string SchemaTitle { get; set; }
```

The title of the schema describing the metadata.

Schema title and version is expected to be registered in earlier Create Schema calls. And both are used together as unique identifiers to identify schemas within the local metadata store.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### SchemaVersion

```
public string SchemaVersion { get; set; }
```

The version of the schema in schema\_name to use.

Schema title and version is expected to be registered in earlier Create Schema calls. And both are used together as unique identifiers to identify schemas within the local metadata store.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### UpdateTime

```
public Timestamp UpdateTime { get; set; }
```

Output only. Timestamp when this Context was last updated.

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
