-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class AutoscalersSettings (3.0.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class AutoscalersSettings : ServiceSettingsBase
```

Reference documentation and code samples for the Compute Engine v1 API class AutoscalersSettings.

Settings for [AutoscalersClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.AutoscalersClient) instances.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> [ServiceSettingsBase](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.ServiceSettingsBase.html) \> AutoscalersSettings

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

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Constructors

### AutoscalersSettings()

```
public AutoscalersSettings()
```

Constructs a new [AutoscalersSettings](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.AutoscalersSettings) object with default settings.

## Properties

### AggregatedListSettings

```
public CallSettings AggregatedListSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `AutoscalersClient.AggregatedList` and `AutoscalersClient.AggregatedListAsync`.

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

### DeleteOperationsSettings

```
public OperationsSettings DeleteOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `AutoscalersClient.Delete` and `AutoscalersClient.DeleteAsync`.

**Property Value**

**Type**

**Description**

`[OperationsSettings](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsSettings.html)`

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

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `AutoscalersClient.Delete` and `AutoscalersClient.DeleteAsync`.

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

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `AutoscalersClient.Get` and `AutoscalersClient.GetAsync`.

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

Long Running Operation settings for calls to `AutoscalersClient.Insert` and `AutoscalersClient.InsertAsync`.

**Property Value**

**Type**

**Description**

`[OperationsSettings](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsSettings.html)`

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

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `AutoscalersClient.Insert` and `AutoscalersClient.InsertAsync`.

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

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `AutoscalersClient.List` and `AutoscalersClient.ListAsync`.

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

Long Running Operation settings for calls to `AutoscalersClient.Patch` and `AutoscalersClient.PatchAsync`.

**Property Value**

**Type**

**Description**

`[OperationsSettings](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsSettings.html)`

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

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `AutoscalersClient.Patch` and `AutoscalersClient.PatchAsync`.

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

Long Running Operation settings for calls to `AutoscalersClient.Update` and `AutoscalersClient.UpdateAsync`.

**Property Value**

**Type**

**Description**

`[OperationsSettings](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.LongRunning.OperationsSettings.html)`

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

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `AutoscalersClient.Update` and `AutoscalersClient.UpdateAsync`.

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
public AutoscalersSettings Clone()
```

Creates a deep clone of this object, with all the same property values.

**Returns**

**Type**

**Description**

`[AutoscalersSettings](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.AutoscalersSettings)`

A deep clone of this [AutoscalersSettings](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.AutoscalersSettings) object.

### GetDefault()

```
public static AutoscalersSettings GetDefault()
```

Get a new instance of the default [AutoscalersSettings](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.AutoscalersSettings).

**Returns**

**Type**

**Description**

`[AutoscalersSettings](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.AutoscalersSettings)`

A new instance of the default [AutoscalersSettings](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.0.0/Google.Cloud.Compute.V1.AutoscalersSettings).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
