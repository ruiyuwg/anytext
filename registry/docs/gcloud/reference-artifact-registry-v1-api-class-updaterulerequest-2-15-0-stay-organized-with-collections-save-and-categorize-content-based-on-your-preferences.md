-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Artifact Registry v1 API - Class UpdateRuleRequest (2.15.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [2.15.0 (latest)](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/latest/Google.Cloud.ArtifactRegistry.V1.UpdateRuleRequest)
-   [2.14.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.14.0/Google.Cloud.ArtifactRegistry.V1.UpdateRuleRequest)
-   [2.13.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.13.0/Google.Cloud.ArtifactRegistry.V1.UpdateRuleRequest)
-   [2.12.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.12.0/Google.Cloud.ArtifactRegistry.V1.UpdateRuleRequest)
-   [2.11.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.11.0/Google.Cloud.ArtifactRegistry.V1.UpdateRuleRequest)
-   [2.10.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.10.0/Google.Cloud.ArtifactRegistry.V1.UpdateRuleRequest)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.9.0/Google.Cloud.ArtifactRegistry.V1.UpdateRuleRequest)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.8.0/Google.Cloud.ArtifactRegistry.V1.UpdateRuleRequest)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.7.0/Google.Cloud.ArtifactRegistry.V1.UpdateRuleRequest)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.6.0/Google.Cloud.ArtifactRegistry.V1.UpdateRuleRequest)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.5.0/Google.Cloud.ArtifactRegistry.V1.UpdateRuleRequest)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.4.0/Google.Cloud.ArtifactRegistry.V1.UpdateRuleRequest)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.3.0/Google.Cloud.ArtifactRegistry.V1.UpdateRuleRequest)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.2.0/Google.Cloud.ArtifactRegistry.V1.UpdateRuleRequest)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.1.0/Google.Cloud.ArtifactRegistry.V1.UpdateRuleRequest)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.0.0/Google.Cloud.ArtifactRegistry.V1.UpdateRuleRequest)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/1.1.0/Google.Cloud.ArtifactRegistry.V1.UpdateRuleRequest)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/1.0.0/Google.Cloud.ArtifactRegistry.V1.UpdateRuleRequest)

```
public sealed class UpdateRuleRequest : IMessage<UpdateRuleRequest>, IEquatable<UpdateRuleRequest>, IDeepCloneable<UpdateRuleRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Artifact Registry v1 API class UpdateRuleRequest.

The request to update a rule.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> UpdateRuleRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[UpdateRuleRequest](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/latest/Google.Cloud.ArtifactRegistry.V1.UpdateRuleRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[UpdateRuleRequest](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/latest/Google.Cloud.ArtifactRegistry.V1.UpdateRuleRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[UpdateRuleRequest](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/latest/Google.Cloud.ArtifactRegistry.V1.UpdateRuleRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.ArtifactRegistry.V1](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/latest/Google.Cloud.ArtifactRegistry.V1)

## Assembly

Google.Cloud.ArtifactRegistry.V1.dll

## Constructors

### UpdateRuleRequest()

```
public UpdateRuleRequest()
```

### UpdateRuleRequest(UpdateRuleRequest)

```
public UpdateRuleRequest(UpdateRuleRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[UpdateRuleRequest](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/latest/Google.Cloud.ArtifactRegistry.V1.UpdateRuleRequest)`  

## Properties

### Rule

```
public Rule Rule { get; set; }
```

The rule that replaces the resource on the server.

**Property Value**

**Type**

**Description**

`[Rule](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/latest/Google.Cloud.ArtifactRegistry.V1.Rule)`

### UpdateMask

```
public FieldMask UpdateMask { get; set; }
```

The update mask applies to the resource. For the `FieldMask` definition, see [https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask)

**Property Value**

**Type**

**Description**

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
