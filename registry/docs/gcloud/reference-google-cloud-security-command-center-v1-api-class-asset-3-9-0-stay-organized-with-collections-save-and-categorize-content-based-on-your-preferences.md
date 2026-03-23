-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Cloud Security Command Center v1 API - Class Asset (3.9.0) Stay organized with collections Save and categorize content based on your preferences.

Version 3.9.0keyboard\_arrow\_down

-   [3.25.0 (latest)](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/latest/Google.Cloud.SecurityCenter.V1.Asset)
-   [3.24.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.24.0/Google.Cloud.SecurityCenter.V1.Asset)
-   [3.23.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.23.0/Google.Cloud.SecurityCenter.V1.Asset)
-   [3.22.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.22.0/Google.Cloud.SecurityCenter.V1.Asset)
-   [3.21.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.21.0/Google.Cloud.SecurityCenter.V1.Asset)
-   [3.20.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.20.0/Google.Cloud.SecurityCenter.V1.Asset)
-   [3.19.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.19.0/Google.Cloud.SecurityCenter.V1.Asset)
-   [3.18.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.18.0/Google.Cloud.SecurityCenter.V1.Asset)
-   [3.17.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.17.0/Google.Cloud.SecurityCenter.V1.Asset)
-   [3.16.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.16.0/Google.Cloud.SecurityCenter.V1.Asset)
-   [3.15.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.15.0/Google.Cloud.SecurityCenter.V1.Asset)
-   [3.14.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.14.0/Google.Cloud.SecurityCenter.V1.Asset)
-   [3.13.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.13.0/Google.Cloud.SecurityCenter.V1.Asset)
-   [3.12.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.12.0/Google.Cloud.SecurityCenter.V1.Asset)
-   [3.11.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.11.0/Google.Cloud.SecurityCenter.V1.Asset)
-   [3.10.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.10.0/Google.Cloud.SecurityCenter.V1.Asset)
-   [3.9.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.9.0/Google.Cloud.SecurityCenter.V1.Asset)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.8.0/Google.Cloud.SecurityCenter.V1.Asset)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.7.0/Google.Cloud.SecurityCenter.V1.Asset)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.6.0/Google.Cloud.SecurityCenter.V1.Asset)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.5.0/Google.Cloud.SecurityCenter.V1.Asset)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.4.0/Google.Cloud.SecurityCenter.V1.Asset)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.3.0/Google.Cloud.SecurityCenter.V1.Asset)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.2.0/Google.Cloud.SecurityCenter.V1.Asset)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.1.0/Google.Cloud.SecurityCenter.V1.Asset)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.0.0/Google.Cloud.SecurityCenter.V1.Asset)
-   [2.13.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/2.13.0/Google.Cloud.SecurityCenter.V1.Asset)
-   [2.12.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/2.12.0/Google.Cloud.SecurityCenter.V1.Asset)
-   [2.11.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/2.11.0/Google.Cloud.SecurityCenter.V1.Asset)
-   [2.10.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/2.10.0/Google.Cloud.SecurityCenter.V1.Asset)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/2.9.0/Google.Cloud.SecurityCenter.V1.Asset)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/2.8.0/Google.Cloud.SecurityCenter.V1.Asset)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/2.7.0/Google.Cloud.SecurityCenter.V1.Asset)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/2.6.0/Google.Cloud.SecurityCenter.V1.Asset)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/2.5.0/Google.Cloud.SecurityCenter.V1.Asset)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/2.4.0/Google.Cloud.SecurityCenter.V1.Asset)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/2.3.0/Google.Cloud.SecurityCenter.V1.Asset)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/2.2.0/Google.Cloud.SecurityCenter.V1.Asset)

```
public sealed class Asset : IMessage<Asset>, IEquatable<Asset>, IDeepCloneable<Asset>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Google Cloud Security Command Center v1 API class Asset.

Security Command Center representation of a Google Cloud resource.

The Asset is a Security Command Center resource that captures information about a single Google Cloud resource. All modifications to an Asset are only within the context of Security Command Center and don't affect the referenced Google Cloud resource.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> Asset

## Implements

[IMessage](https://github.com/protocolbuffers/protobuf/blob/e7e8f04a4ff0df9c7233ac0fcb3c41b9b84e174c/csharp/src/Google.Protobuf/IMessage.cs)[Asset](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.9.0/Google.Cloud.SecurityCenter.V1.Asset), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[Asset](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.9.0/Google.Cloud.SecurityCenter.V1.Asset), [IDeepCloneable](https://github.com/protocolbuffers/protobuf/blob/e7e8f04a4ff0df9c7233ac0fcb3c41b9b84e174c/csharp/src/Google.Protobuf/IDeepCloneable.cs)[Asset](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.9.0/Google.Cloud.SecurityCenter.V1.Asset), [IBufferMessage](https://github.com/protocolbuffers/protobuf/blob/e7e8f04a4ff0df9c7233ac0fcb3c41b9b84e174c/csharp/src/Google.Protobuf/IBufferMessage.cs), [IMessage](https://github.com/protocolbuffers/protobuf/blob/e7e8f04a4ff0df9c7233ac0fcb3c41b9b84e174c/csharp/src/Google.Protobuf/IMessage.cs)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google](https://cloud.google.com/dotnet/docs/reference/Google.Apis/latest/Google.html)[Cloud](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.Cloud.html)Google.Cloud.SecurityCenter[V1](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.9.0/Google.Cloud.SecurityCenter.V1)

## Assembly

Google.Cloud.SecurityCenter.V1.dll

## Constructors

### Asset()

```
public Asset()
```

### Asset(Asset)

```
public Asset(Asset other)
```

**Parameter**

**Name**

**Description**

`other`

`[Asset](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.9.0/Google.Cloud.SecurityCenter.V1.Asset)`  

## Properties

### AssetName

```
public AssetName AssetName { get; set; }
```

[AssetName](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.9.0/Google.Cloud.SecurityCenter.V1.AssetName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.9.0/Google.Cloud.SecurityCenter.V1.Asset#Google_Cloud_SecurityCenter_V1_Asset_Name) resource name property.

**Property Value**

**Type**

**Description**

`[AssetName](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.9.0/Google.Cloud.SecurityCenter.V1.AssetName)`

### CanonicalName

```
public string CanonicalName { get; set; }
```

The canonical name of the resource. It's either "organizations/{organization\_id}/assets/{asset\_id}", "folders/{folder\_id}/assets/{asset\_id}" or "projects/{project\_number}/assets/{asset\_id}", depending on the closest CRM ancestor of the resource.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### CreateTime

```
public Timestamp CreateTime { get; set; }
```

The time at which the asset was created in Security Command Center.

**Property Value**

**Type**

**Description**

`[Timestamp](https://github.com/protocolbuffers/protobuf/blob/e7e8f04a4ff0df9c7233ac0fcb3c41b9b84e174c/csharp/src/Google.Protobuf/WellKnownTypes/Timestamp.cs)`

### IamPolicy

```
public Asset.Types.IamPolicy IamPolicy { get; set; }
```

Cloud IAM Policy information associated with the Google Cloud resource described by the Security Command Center asset. This information is managed and defined by the Google Cloud resource and cannot be modified by the user.

**Property Value**

**Type**

**Description**

`[Asset](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.9.0/Google.Cloud.SecurityCenter.V1.Asset)[Types](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.9.0/Google.Cloud.SecurityCenter.V1.Asset.Types)[IamPolicy](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.9.0/Google.Cloud.SecurityCenter.V1.Asset.Types.IamPolicy)`

### Name

```
public string Name { get; set; }
```

The relative resource name of this asset. See: [https://cloud.google.com/apis/design/resource\_names#relative\_resource\_name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) Example: "organizations/{organization\_id}/assets/{asset\_id}".

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ResourceProperties

```
public MapField<string, Value> ResourceProperties { get; }
```

Resource managed properties. These properties are managed and defined by the Google Cloud resource and cannot be modified by the user.

**Property Value**

**Type**

**Description**

`[MapField](https://github.com/protocolbuffers/protobuf/blob/e7e8f04a4ff0df9c7233ac0fcb3c41b9b84e174c/csharp/src/Google.Protobuf/Collections/MapField.cs)[string](https://learn.microsoft.com/dotnet/api/system.string)[Value](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Value.html)`

### SecurityCenterProperties

```
public Asset.Types.SecurityCenterProperties SecurityCenterProperties { get; set; }
```

Security Command Center managed properties. These properties are managed by Security Command Center and cannot be modified by the user.

**Property Value**

**Type**

**Description**

`[Asset](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.9.0/Google.Cloud.SecurityCenter.V1.Asset)[Types](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.9.0/Google.Cloud.SecurityCenter.V1.Asset.Types)[SecurityCenterProperties](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.9.0/Google.Cloud.SecurityCenter.V1.Asset.Types.SecurityCenterProperties)`

### SecurityMarks

```
public SecurityMarks SecurityMarks { get; set; }
```

User specified security marks. These marks are entirely managed by the user and come from the SecurityMarks resource that belongs to the asset.

**Property Value**

**Type**

**Description**

`[SecurityMarks](/dotnet/docs/reference/Google.Cloud.SecurityCenter.V1/3.9.0/Google.Cloud.SecurityCenter.V1.SecurityMarks)`

### UpdateTime

```
public Timestamp UpdateTime { get; set; }
```

The time at which the asset was last updated or added in Cloud SCC.

**Property Value**

**Type**

**Description**

`[Timestamp](https://github.com/protocolbuffers/protobuf/blob/e7e8f04a4ff0df9c7233ac0fcb3c41b9b84e174c/csharp/src/Google.Protobuf/WellKnownTypes/Timestamp.cs)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
