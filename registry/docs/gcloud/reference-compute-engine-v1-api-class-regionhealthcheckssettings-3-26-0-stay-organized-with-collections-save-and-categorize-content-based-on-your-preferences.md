-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class RegionHealthChecksSettings (3.26.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class RegionHealthChecksSettings : ServiceSettingsBase
```

Reference documentation and code samples for the Compute Engine v1 API class RegionHealthChecksSettings.

Settings for [RegionHealthChecksClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/latest/Google.Cloud.Compute.V1.RegionHealthChecksClient) instances.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> [ServiceSettingsBase](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.ServiceSettingsBase.html) \> RegionHealthChecksSettings

## Inherited Members

[ServiceSettingsBase.VersionHeaderBuilder](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.ServiceSettingsBase.html#Google_Api_Gax_Grpc_ServiceSettingsBase_VersionHeaderBuilder)

[ServiceSettingsBase.CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.ServiceSettingsBase.html#Google_Api_Gax_Grpc_ServiceSettingsBase_CallSettings)

[ServiceSettingsBase.Clock](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.ServiceSettingsBase.html#Google_Api_Gax_Grpc_ServiceSettingsBase_Clock)

[ServiceSettingsBase.Scheduler](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.ServiceSettingsBase.html#Google_Api_Gax_Grpc_ServiceSettingsBase_Scheduler)

[ServiceSettingsBase.Interceptor](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.ServiceSettingsBase.html#Google_Api_Gax_Grpc_ServiceSettingsBase_Interceptor)

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/latest/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Constructors

### RegionHealthChecksSettings()

```
public RegionHealthChecksSettings()
```

Constructs a new [RegionHealthChecksSettings](/dotnet/docs/reference/Google.Cloud.Compute.V1/latest/Google.Cloud.Compute.V1.RegionHealthChecksSettings) object with default settings.

## Properties

### DeleteOperationsSettings

```
public OperationsSettings DeleteOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `RegionHealthChecksClient.Delete` and `RegionHealthChecksClient.DeleteAsync`.

**Property Value**

**Type**

**Description**

`[OperationsSettings](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsSettings.html)`

**Remarks**

Uses default [PollSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PollSettings.html) of:

-   Initial delay: 20 seconds.
-   Delay multiplier: 1.5
-   Maximum delay: 45 seconds.
-   Total timeout: 24 hours.

### DeleteSettings

```
public CallSettings DeleteSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `RegionHealthChecksClient.Delete` and `RegionHealthChecksClient.DeleteAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### GetSettings

```
public CallSettings GetSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `RegionHealthChecksClient.Get` and `RegionHealthChecksClient.GetAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   Initial retry delay: 100 milliseconds.
-   Retry delay multiplier: 1.3
-   Retry maximum delay: 60000 milliseconds.
-   Maximum attempts: Unlimited
-   Retriable status codes: [DeadlineExceeded](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.StatusCode.html#Grpc_Core_StatusCode_DeadlineExceeded), [Unavailable](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.StatusCode.html#Grpc_Core_StatusCode_Unavailable).
-   Timeout: 600 seconds.

### InsertOperationsSettings

```
public OperationsSettings InsertOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `RegionHealthChecksClient.Insert` and `RegionHealthChecksClient.InsertAsync`.

**Property Value**

**Type**

**Description**

`[OperationsSettings](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsSettings.html)`

**Remarks**

Uses default [PollSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PollSettings.html) of:

-   Initial delay: 20 seconds.
-   Delay multiplier: 1.5
-   Maximum delay: 45 seconds.
-   Total timeout: 24 hours.

### InsertSettings

```
public CallSettings InsertSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `RegionHealthChecksClient.Insert` and `RegionHealthChecksClient.InsertAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### ListSettings

```
public CallSettings ListSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `RegionHealthChecksClient.List` and `RegionHealthChecksClient.ListAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   Initial retry delay: 100 milliseconds.
-   Retry delay multiplier: 1.3
-   Retry maximum delay: 60000 milliseconds.
-   Maximum attempts: Unlimited
-   Retriable status codes: [DeadlineExceeded](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.StatusCode.html#Grpc_Core_StatusCode_DeadlineExceeded), [Unavailable](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.StatusCode.html#Grpc_Core_StatusCode_Unavailable).
-   Timeout: 600 seconds.

### PatchOperationsSettings

```
public OperationsSettings PatchOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `RegionHealthChecksClient.Patch` and `RegionHealthChecksClient.PatchAsync`.

**Property Value**

**Type**

**Description**

`[OperationsSettings](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsSettings.html)`

**Remarks**

Uses default [PollSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PollSettings.html) of:

-   Initial delay: 20 seconds.
-   Delay multiplier: 1.5
-   Maximum delay: 45 seconds.
-   Total timeout: 24 hours.

### PatchSettings

```
public CallSettings PatchSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `RegionHealthChecksClient.Patch` and `RegionHealthChecksClient.PatchAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### TestIamPermissionsSettings

```
public CallSettings TestIamPermissionsSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `RegionHealthChecksClient.TestIamPermissions` and `RegionHealthChecksClient.TestIamPermissionsAsync` .

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### UpdateOperationsSettings

```
public OperationsSettings UpdateOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `RegionHealthChecksClient.Update` and `RegionHealthChecksClient.UpdateAsync`.

**Property Value**

**Type**

**Description**

`[OperationsSettings](https://docs.cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsSettings.html)`

**Remarks**

Uses default [PollSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PollSettings.html) of:

-   Initial delay: 20 seconds.
-   Delay multiplier: 1.5
-   Maximum delay: 45 seconds.
-   Total timeout: 24 hours.

### UpdateSettings

```
public CallSettings UpdateSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `RegionHealthChecksClient.Update` and `RegionHealthChecksClient.UpdateAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

## Methods

### Clone()

```
public RegionHealthChecksSettings Clone()
```

Creates a deep clone of this object, with all the same property values.

**Returns**

**Type**

**Description**

`[RegionHealthChecksSettings](/dotnet/docs/reference/Google.Cloud.Compute.V1/latest/Google.Cloud.Compute.V1.RegionHealthChecksSettings)`

A deep clone of this [RegionHealthChecksSettings](/dotnet/docs/reference/Google.Cloud.Compute.V1/latest/Google.Cloud.Compute.V1.RegionHealthChecksSettings) object.

### GetDefault()

```
public static RegionHealthChecksSettings GetDefault()
```

Get a new instance of the default [RegionHealthChecksSettings](/dotnet/docs/reference/Google.Cloud.Compute.V1/latest/Google.Cloud.Compute.V1.RegionHealthChecksSettings).

**Returns**

**Type**

**Description**

`[RegionHealthChecksSettings](/dotnet/docs/reference/Google.Cloud.Compute.V1/latest/Google.Cloud.Compute.V1.RegionHealthChecksSettings)`

A new instance of the default [RegionHealthChecksSettings](/dotnet/docs/reference/Google.Cloud.Compute.V1/latest/Google.Cloud.Compute.V1.RegionHealthChecksSettings).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
