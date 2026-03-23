-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud Resource Manager v3 API - Class TagKeysSettings (2.4.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.4.0keyboard\_arrow\_down

-   [2.6.0 (latest)](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/latest/Google.Cloud.ResourceManager.V3.TagKeysSettings)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/2.5.0/Google.Cloud.ResourceManager.V3.TagKeysSettings)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/2.4.0/Google.Cloud.ResourceManager.V3.TagKeysSettings)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/2.3.0/Google.Cloud.ResourceManager.V3.TagKeysSettings)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/2.2.0/Google.Cloud.ResourceManager.V3.TagKeysSettings)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/2.1.0/Google.Cloud.ResourceManager.V3.TagKeysSettings)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/2.0.0/Google.Cloud.ResourceManager.V3.TagKeysSettings)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/1.2.0/Google.Cloud.ResourceManager.V3.TagKeysSettings)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/1.1.0/Google.Cloud.ResourceManager.V3.TagKeysSettings)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/1.0.0/Google.Cloud.ResourceManager.V3.TagKeysSettings)

```
public sealed class TagKeysSettings : ServiceSettingsBase
```

Reference documentation and code samples for the Cloud Resource Manager v3 API class TagKeysSettings.

Settings for [TagKeysClient](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/2.4.0/Google.Cloud.ResourceManager.V3.TagKeysClient) instances.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> [ServiceSettingsBase](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/ServiceSettingsBase.cs) \> TagKeysSettings

## Inherited Members

[ServiceSettingsBase.VersionHeaderBuilder](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/ServiceSettingsBase.cs)

[ServiceSettingsBase.CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/ServiceSettingsBase.cs)

[ServiceSettingsBase.Clock](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/ServiceSettingsBase.cs)

[ServiceSettingsBase.Scheduler](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/ServiceSettingsBase.cs)

[ServiceSettingsBase.Interceptor](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/ServiceSettingsBase.cs)

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.ResourceManager.V3](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/2.4.0/Google.Cloud.ResourceManager.V3)

## Assembly

Google.Cloud.ResourceManager.V3.dll

## Constructors

### TagKeysSettings()

```
public TagKeysSettings()
```

Constructs a new [TagKeysSettings](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/2.4.0/Google.Cloud.ResourceManager.V3.TagKeysSettings) object with default settings.

## Properties

### CreateTagKeyOperationsSettings

```
public OperationsSettings CreateTagKeyOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `TagKeysClient.CreateTagKey` and `TagKeysClient.CreateTagKeyAsync`.

**Property Value**

**Type**

**Description**

`[OperationsSettings](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/OperationsClient.g.cs)`

**Remarks**

Uses default [PollSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PollSettings.cs) of:

-   Initial delay: 20 seconds.
-   Delay multiplier: 1.5
-   Maximum delay: 45 seconds.
-   Total timeout: 24 hours.

### CreateTagKeySettings

```
public CallSettings CreateTagKeySettings { get; set; }
```

[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs) for synchronous and asynchronous calls to `TagKeysClient.CreateTagKey` and `TagKeysClient.CreateTagKeyAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`

**Remarks**

-   This call will not be retried.
-   Timeout: 60 seconds.

### DeleteTagKeyOperationsSettings

```
public OperationsSettings DeleteTagKeyOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `TagKeysClient.DeleteTagKey` and `TagKeysClient.DeleteTagKeyAsync`.

**Property Value**

**Type**

**Description**

`[OperationsSettings](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/OperationsClient.g.cs)`

**Remarks**

Uses default [PollSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PollSettings.cs) of:

-   Initial delay: 20 seconds.
-   Delay multiplier: 1.5
-   Maximum delay: 45 seconds.
-   Total timeout: 24 hours.

### DeleteTagKeySettings

```
public CallSettings DeleteTagKeySettings { get; set; }
```

[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs) for synchronous and asynchronous calls to `TagKeysClient.DeleteTagKey` and `TagKeysClient.DeleteTagKeyAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`

**Remarks**

-   This call will not be retried.
-   Timeout: 60 seconds.

### GetIamPolicySettings

```
public CallSettings GetIamPolicySettings { get; set; }
```

[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs) for synchronous and asynchronous calls to `TagKeysClient.GetIamPolicy` and `TagKeysClient.GetIamPolicyAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`

**Remarks**

-   Initial retry delay: 100 milliseconds.
-   Retry delay multiplier: 1.3
-   Retry maximum delay: 60000 milliseconds.
-   Maximum attempts: 5
-   Retriable status codes: [Unavailable](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/StatusCode.cs).
-   Timeout: 60 seconds.

### GetNamespacedTagKeySettings

```
public CallSettings GetNamespacedTagKeySettings { get; set; }
```

[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs) for synchronous and asynchronous calls to `TagKeysClient.GetNamespacedTagKey` and `TagKeysClient.GetNamespacedTagKeyAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`

**Remarks**

-   This call will not be retried.
-   No timeout is applied.

### GetTagKeySettings

```
public CallSettings GetTagKeySettings { get; set; }
```

[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs) for synchronous and asynchronous calls to `TagKeysClient.GetTagKey` and `TagKeysClient.GetTagKeyAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`

**Remarks**

-   Initial retry delay: 100 milliseconds.
-   Retry delay multiplier: 1.3
-   Retry maximum delay: 60000 milliseconds.
-   Maximum attempts: 5
-   Retriable status codes: [Unavailable](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/StatusCode.cs).
-   Timeout: 60 seconds.

### ListTagKeysSettings

```
public CallSettings ListTagKeysSettings { get; set; }
```

[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs) for synchronous and asynchronous calls to `TagKeysClient.ListTagKeys` and `TagKeysClient.ListTagKeysAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`

**Remarks**

-   Initial retry delay: 100 milliseconds.
-   Retry delay multiplier: 1.3
-   Retry maximum delay: 60000 milliseconds.
-   Maximum attempts: 5
-   Retriable status codes: [Unavailable](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/StatusCode.cs).
-   Timeout: 60 seconds.

### SetIamPolicySettings

```
public CallSettings SetIamPolicySettings { get; set; }
```

[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs) for synchronous and asynchronous calls to `TagKeysClient.SetIamPolicy` and `TagKeysClient.SetIamPolicyAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`

**Remarks**

-   This call will not be retried.
-   Timeout: 60 seconds.

### TestIamPermissionsSettings

```
public CallSettings TestIamPermissionsSettings { get; set; }
```

[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs) for synchronous and asynchronous calls to `TagKeysClient.TestIamPermissions` and `TagKeysClient.TestIamPermissionsAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`

**Remarks**

-   This call will not be retried.
-   No timeout is applied.

### UpdateTagKeyOperationsSettings

```
public OperationsSettings UpdateTagKeyOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `TagKeysClient.UpdateTagKey` and `TagKeysClient.UpdateTagKeyAsync`.

**Property Value**

**Type**

**Description**

`[OperationsSettings](https://github.com/googleapis/google-cloud-dotnet/blob/b5c8f66ad2f14a668fb3d064789346de55315c9d/apis/Google.LongRunning/Google.LongRunning/OperationsClient.g.cs)`

**Remarks**

Uses default [PollSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax/PollSettings.cs) of:

-   Initial delay: 20 seconds.
-   Delay multiplier: 1.5
-   Maximum delay: 45 seconds.
-   Total timeout: 24 hours.

### UpdateTagKeySettings

```
public CallSettings UpdateTagKeySettings { get; set; }
```

[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs) for synchronous and asynchronous calls to `TagKeysClient.UpdateTagKey` and `TagKeysClient.UpdateTagKeyAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`

**Remarks**

-   This call will not be retried.
-   Timeout: 60 seconds.

## Methods

### Clone()

```
public TagKeysSettings Clone()
```

Creates a deep clone of this object, with all the same property values.

**Returns**

**Type**

**Description**

`[TagKeysSettings](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/2.4.0/Google.Cloud.ResourceManager.V3.TagKeysSettings)`

A deep clone of this [TagKeysSettings](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/2.4.0/Google.Cloud.ResourceManager.V3.TagKeysSettings) object.

### GetDefault()

```
public static TagKeysSettings GetDefault()
```

Get a new instance of the default [TagKeysSettings](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/2.4.0/Google.Cloud.ResourceManager.V3.TagKeysSettings).

**Returns**

**Type**

**Description**

`[TagKeysSettings](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/2.4.0/Google.Cloud.ResourceManager.V3.TagKeysSettings)`

A new instance of the default [TagKeysSettings](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/2.4.0/Google.Cloud.ResourceManager.V3.TagKeysSettings).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
