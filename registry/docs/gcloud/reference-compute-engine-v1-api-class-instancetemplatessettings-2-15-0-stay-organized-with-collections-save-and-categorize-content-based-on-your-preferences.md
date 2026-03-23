-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class InstanceTemplatesSettings (2.15.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class InstanceTemplatesSettings : ServiceSettingsBase
```

Reference documentation and code samples for the Compute Engine v1 API class InstanceTemplatesSettings.

Settings for [InstanceTemplatesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.InstanceTemplatesClient) instances.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> [ServiceSettingsBase](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/ServiceSettingsBase.cs) \> InstanceTemplatesSettings

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

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Constructors

### InstanceTemplatesSettings()

```
public InstanceTemplatesSettings()
```

Constructs a new [InstanceTemplatesSettings](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.InstanceTemplatesSettings) object with default settings.

## Properties

### AggregatedListSettings

```
public CallSettings AggregatedListSettings { get; set; }
```

[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs) for synchronous and asynchronous calls to `InstanceTemplatesClient.AggregatedList` and `InstanceTemplatesClient.AggregatedListAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`

**Remarks**

-   Initial retry delay: 100 milliseconds.
-   Retry delay multiplier: 1.3
-   Retry maximum delay: 60000 milliseconds.
-   Maximum attempts: Unlimited
-   Retriable status codes: [DeadlineExceeded](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/StatusCode.cs), [Unavailable](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/StatusCode.cs).
-   Timeout: 600 seconds.

### DeleteOperationsSettings

```
public OperationsSettings DeleteOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `InstanceTemplatesClient.Delete` and `InstanceTemplatesClient.DeleteAsync`.

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

### DeleteSettings

```
public CallSettings DeleteSettings { get; set; }
```

[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs) for synchronous and asynchronous calls to `InstanceTemplatesClient.Delete` and `InstanceTemplatesClient.DeleteAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### GetIamPolicySettings

```
public CallSettings GetIamPolicySettings { get; set; }
```

[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs) for synchronous and asynchronous calls to `InstanceTemplatesClient.GetIamPolicy` and `InstanceTemplatesClient.GetIamPolicyAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`

**Remarks**

-   Initial retry delay: 100 milliseconds.
-   Retry delay multiplier: 1.3
-   Retry maximum delay: 60000 milliseconds.
-   Maximum attempts: Unlimited
-   Retriable status codes: [DeadlineExceeded](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/StatusCode.cs), [Unavailable](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/StatusCode.cs).
-   Timeout: 600 seconds.

### GetSettings

```
public CallSettings GetSettings { get; set; }
```

[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs) for synchronous and asynchronous calls to `InstanceTemplatesClient.Get` and `InstanceTemplatesClient.GetAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`

**Remarks**

-   Initial retry delay: 100 milliseconds.
-   Retry delay multiplier: 1.3
-   Retry maximum delay: 60000 milliseconds.
-   Maximum attempts: Unlimited
-   Retriable status codes: [DeadlineExceeded](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/StatusCode.cs), [Unavailable](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/StatusCode.cs).
-   Timeout: 600 seconds.

### InsertOperationsSettings

```
public OperationsSettings InsertOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `InstanceTemplatesClient.Insert` and `InstanceTemplatesClient.InsertAsync`.

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

### InsertSettings

```
public CallSettings InsertSettings { get; set; }
```

[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs) for synchronous and asynchronous calls to `InstanceTemplatesClient.Insert` and `InstanceTemplatesClient.InsertAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### ListSettings

```
public CallSettings ListSettings { get; set; }
```

[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs) for synchronous and asynchronous calls to `InstanceTemplatesClient.List` and `InstanceTemplatesClient.ListAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`

**Remarks**

-   Initial retry delay: 100 milliseconds.
-   Retry delay multiplier: 1.3
-   Retry maximum delay: 60000 milliseconds.
-   Maximum attempts: Unlimited
-   Retriable status codes: [DeadlineExceeded](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/StatusCode.cs), [Unavailable](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/StatusCode.cs).
-   Timeout: 600 seconds.

### SetIamPolicySettings

```
public CallSettings SetIamPolicySettings { get; set; }
```

[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs) for synchronous and asynchronous calls to `InstanceTemplatesClient.SetIamPolicy` and `InstanceTemplatesClient.SetIamPolicyAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### TestIamPermissionsSettings

```
public CallSettings TestIamPermissionsSettings { get; set; }
```

[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs) for synchronous and asynchronous calls to `InstanceTemplatesClient.TestIamPermissions` and `InstanceTemplatesClient.TestIamPermissionsAsync` .

**Property Value**

**Type**

**Description**

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/83f42b5edc4529818dbdb34d9ea9ecc3c04f7b6e/Google.Api.Gax.Grpc/CallSettings.cs)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

## Methods

### Clone()

```
public InstanceTemplatesSettings Clone()
```

Creates a deep clone of this object, with all the same property values.

**Returns**

**Type**

**Description**

`[InstanceTemplatesSettings](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.InstanceTemplatesSettings)`

A deep clone of this [InstanceTemplatesSettings](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.InstanceTemplatesSettings) object.

### GetDefault()

```
public static InstanceTemplatesSettings GetDefault()
```

Get a new instance of the default [InstanceTemplatesSettings](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.InstanceTemplatesSettings).

**Returns**

**Type**

**Description**

`[InstanceTemplatesSettings](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.InstanceTemplatesSettings)`

A new instance of the default [InstanceTemplatesSettings](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.InstanceTemplatesSettings).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
