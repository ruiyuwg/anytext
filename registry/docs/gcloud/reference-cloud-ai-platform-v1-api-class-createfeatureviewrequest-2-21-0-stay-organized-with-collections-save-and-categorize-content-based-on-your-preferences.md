-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud AI Platform v1 API - Class CreateFeatureViewRequest (2.21.0) Stay organized with collections Save and categorize content based on your preferences.

3.68.0 (latest) 3.67.0 3.66.0 3.65.0 3.64.0 3.63.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class CreateFeatureViewRequest : IMessage<CreateFeatureViewRequest>, IEquatable<CreateFeatureViewRequest>, IDeepCloneable<CreateFeatureViewRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Cloud AI Platform v1 API class CreateFeatureViewRequest.

Request message for \[FeatureOnlineStoreAdminService.CreateFeatureView\]\[google.cloud.aiplatform.v1.FeatureOnlineStoreAdminService.CreateFeatureView\].

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> CreateFeatureViewRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[CreateFeatureViewRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.21.0/Google.Cloud.AIPlatform.V1.CreateFeatureViewRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[CreateFeatureViewRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.21.0/Google.Cloud.AIPlatform.V1.CreateFeatureViewRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[CreateFeatureViewRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.21.0/Google.Cloud.AIPlatform.V1.CreateFeatureViewRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.AIPlatform.V1](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.21.0/Google.Cloud.AIPlatform.V1)

## Assembly

Google.Cloud.AIPlatform.V1.dll

## Constructors

### CreateFeatureViewRequest()

```
public CreateFeatureViewRequest()
```

### CreateFeatureViewRequest(CreateFeatureViewRequest)

```
public CreateFeatureViewRequest(CreateFeatureViewRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[CreateFeatureViewRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.21.0/Google.Cloud.AIPlatform.V1.CreateFeatureViewRequest)`  

## Properties

### FeatureView

```
public FeatureView FeatureView { get; set; }
```

Required. The FeatureView to create.

**Property Value**

**Type**

**Description**

`[FeatureView](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.21.0/Google.Cloud.AIPlatform.V1.FeatureView)`

### FeatureViewId

```
public string FeatureViewId { get; set; }
```

Required. The ID to use for the FeatureView, which will become the final component of the FeatureView's resource name.

This value may be up to 60 characters, and valid characters are `[a-z0-9_]`. The first character cannot be a number.

The value must be unique within a FeatureOnlineStore.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Parent

```
public string Parent { get; set; }
```

Required. The resource name of the FeatureOnlineStore to create FeatureViews. Format: `projects/{project}/locations/{location}/featureOnlineStores/{feature_online_store}`

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ParentAsFeatureOnlineStoreName

```
public FeatureOnlineStoreName ParentAsFeatureOnlineStoreName { get; set; }
```

[FeatureOnlineStoreName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.21.0/Google.Cloud.AIPlatform.V1.FeatureOnlineStoreName)\-typed view over the [Parent](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.21.0/Google.Cloud.AIPlatform.V1.CreateFeatureViewRequest#Google_Cloud_AIPlatform_V1_CreateFeatureViewRequest_Parent) resource name property.

**Property Value**

**Type**

**Description**

`[FeatureOnlineStoreName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.21.0/Google.Cloud.AIPlatform.V1.FeatureOnlineStoreName)`

### RunSyncImmediately

```
public bool RunSyncImmediately { get; set; }
```

Immutable. If set to true, one on demand sync will be run immediately, regardless whether the \[FeatureView.sync\_config\]\[google.cloud.aiplatform.v1.FeatureView.sync\_config\] is configured or not.

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
