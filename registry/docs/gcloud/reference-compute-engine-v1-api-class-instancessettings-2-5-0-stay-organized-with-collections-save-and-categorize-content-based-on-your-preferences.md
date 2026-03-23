-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class InstancesSettings (2.5.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class InstancesSettings : ServiceSettingsBase
```

Reference documentation and code samples for the Compute Engine v1 API class InstancesSettings.

Settings for [InstancesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.InstancesClient) instances.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> [ServiceSettingsBase](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.ServiceSettingsBase.html) \> InstancesSettings

## Inherited Members

[ServiceSettingsBase.VersionHeaderBuilder](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.ServiceSettingsBase.html#Google_Api_Gax_Grpc_ServiceSettingsBase_VersionHeaderBuilder)

[ServiceSettingsBase.CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.ServiceSettingsBase.html#Google_Api_Gax_Grpc_ServiceSettingsBase_CallSettings)

[ServiceSettingsBase.Clock](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.ServiceSettingsBase.html#Google_Api_Gax_Grpc_ServiceSettingsBase_Clock)

[ServiceSettingsBase.Scheduler](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.ServiceSettingsBase.html#Google_Api_Gax_Grpc_ServiceSettingsBase_Scheduler)

[ServiceSettingsBase.Interceptor](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.ServiceSettingsBase.html#Google_Api_Gax_Grpc_ServiceSettingsBase_Interceptor)

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Constructors

### InstancesSettings()

```
public InstancesSettings()
```

Constructs a new [InstancesSettings](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.InstancesSettings) object with default settings.

## Properties

### AddAccessConfigOperationsSettings

```
public OperationsSettings AddAccessConfigOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `InstancesClient.AddAccessConfig` and `InstancesClient.AddAccessConfigAsync`.

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

### AddAccessConfigSettings

```
public CallSettings AddAccessConfigSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.AddAccessConfig` and `InstancesClient.AddAccessConfigAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### AddResourcePoliciesOperationsSettings

```
public OperationsSettings AddResourcePoliciesOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `InstancesClient.AddResourcePolicies` and `InstancesClient.AddResourcePoliciesAsync`.

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

### AddResourcePoliciesSettings

```
public CallSettings AddResourcePoliciesSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.AddResourcePolicies` and `InstancesClient.AddResourcePoliciesAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### AggregatedListSettings

```
public CallSettings AggregatedListSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.AggregatedList` and `InstancesClient.AggregatedListAsync`.

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

### AttachDiskOperationsSettings

```
public OperationsSettings AttachDiskOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `InstancesClient.AttachDisk` and `InstancesClient.AttachDiskAsync`.

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

### AttachDiskSettings

```
public CallSettings AttachDiskSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.AttachDisk` and `InstancesClient.AttachDiskAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### BulkInsertOperationsSettings

```
public OperationsSettings BulkInsertOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `InstancesClient.BulkInsert` and `InstancesClient.BulkInsertAsync`.

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

### BulkInsertSettings

```
public CallSettings BulkInsertSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.BulkInsert` and `InstancesClient.BulkInsertAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### DeleteAccessConfigOperationsSettings

```
public OperationsSettings DeleteAccessConfigOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `InstancesClient.DeleteAccessConfig` and `InstancesClient.DeleteAccessConfigAsync`.

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

### DeleteAccessConfigSettings

```
public CallSettings DeleteAccessConfigSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.DeleteAccessConfig` and `InstancesClient.DeleteAccessConfigAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### DeleteOperationsSettings

```
public OperationsSettings DeleteOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `InstancesClient.Delete` and `InstancesClient.DeleteAsync`.

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

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.Delete` and `InstancesClient.DeleteAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### DetachDiskOperationsSettings

```
public OperationsSettings DetachDiskOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `InstancesClient.DetachDisk` and `InstancesClient.DetachDiskAsync`.

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

### DetachDiskSettings

```
public CallSettings DetachDiskSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.DetachDisk` and `InstancesClient.DetachDiskAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### GetEffectiveFirewallsSettings

```
public CallSettings GetEffectiveFirewallsSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.GetEffectiveFirewalls` and `InstancesClient.GetEffectiveFirewallsAsync`.

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

### GetGuestAttributesSettings

```
public CallSettings GetGuestAttributesSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.GetGuestAttributes` and `InstancesClient.GetGuestAttributesAsync`.

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

### GetIamPolicySettings

```
public CallSettings GetIamPolicySettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.GetIamPolicy` and `InstancesClient.GetIamPolicyAsync`.

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

### GetScreenshotSettings

```
public CallSettings GetScreenshotSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.GetScreenshot` and `InstancesClient.GetScreenshotAsync`.

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

### GetSerialPortOutputSettings

```
public CallSettings GetSerialPortOutputSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.GetSerialPortOutput` and `InstancesClient.GetSerialPortOutputAsync`.

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

### GetSettings

```
public CallSettings GetSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.Get` and `InstancesClient.GetAsync`.

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

### GetShieldedInstanceIdentitySettings

```
public CallSettings GetShieldedInstanceIdentitySettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.GetShieldedInstanceIdentity` and `InstancesClient.GetShieldedInstanceIdentityAsync` .

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

Long Running Operation settings for calls to `InstancesClient.Insert` and `InstancesClient.InsertAsync`.

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

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.Insert` and `InstancesClient.InsertAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### ListReferrersSettings

```
public CallSettings ListReferrersSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.ListReferrers` and `InstancesClient.ListReferrersAsync`.

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

### ListSettings

```
public CallSettings ListSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.List` and `InstancesClient.ListAsync`.

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

### RemoveResourcePoliciesOperationsSettings

```
public OperationsSettings RemoveResourcePoliciesOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `InstancesClient.RemoveResourcePolicies` and `InstancesClient.RemoveResourcePoliciesAsync`.

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

### RemoveResourcePoliciesSettings

```
public CallSettings RemoveResourcePoliciesSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.RemoveResourcePolicies` and `InstancesClient.RemoveResourcePoliciesAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### ResetOperationsSettings

```
public OperationsSettings ResetOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `InstancesClient.Reset` and `InstancesClient.ResetAsync` .

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

### ResetSettings

```
public CallSettings ResetSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.Reset` and `InstancesClient.ResetAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### ResumeOperationsSettings

```
public OperationsSettings ResumeOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `InstancesClient.Resume` and `InstancesClient.ResumeAsync`.

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

### ResumeSettings

```
public CallSettings ResumeSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.Resume` and `InstancesClient.ResumeAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### SendDiagnosticInterruptSettings

```
public CallSettings SendDiagnosticInterruptSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.SendDiagnosticInterrupt` and `InstancesClient.SendDiagnosticInterruptAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### SetDeletionProtectionOperationsSettings

```
public OperationsSettings SetDeletionProtectionOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `InstancesClient.SetDeletionProtection` and `InstancesClient.SetDeletionProtectionAsync`.

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

### SetDeletionProtectionSettings

```
public CallSettings SetDeletionProtectionSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.SetDeletionProtection` and `InstancesClient.SetDeletionProtectionAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### SetDiskAutoDeleteOperationsSettings

```
public OperationsSettings SetDiskAutoDeleteOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `InstancesClient.SetDiskAutoDelete` and `InstancesClient.SetDiskAutoDeleteAsync`.

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

### SetDiskAutoDeleteSettings

```
public CallSettings SetDiskAutoDeleteSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.SetDiskAutoDelete` and `InstancesClient.SetDiskAutoDeleteAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### SetIamPolicySettings

```
public CallSettings SetIamPolicySettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.SetIamPolicy` and `InstancesClient.SetIamPolicyAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### SetLabelsOperationsSettings

```
public OperationsSettings SetLabelsOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `InstancesClient.SetLabels` and `InstancesClient.SetLabelsAsync`.

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

### SetLabelsSettings

```
public CallSettings SetLabelsSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.SetLabels` and `InstancesClient.SetLabelsAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### SetMachineResourcesOperationsSettings

```
public OperationsSettings SetMachineResourcesOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `InstancesClient.SetMachineResources` and `InstancesClient.SetMachineResourcesAsync`.

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

### SetMachineResourcesSettings

```
public CallSettings SetMachineResourcesSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.SetMachineResources` and `InstancesClient.SetMachineResourcesAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### SetMachineTypeOperationsSettings

```
public OperationsSettings SetMachineTypeOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `InstancesClient.SetMachineType` and `InstancesClient.SetMachineTypeAsync`.

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

### SetMachineTypeSettings

```
public CallSettings SetMachineTypeSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.SetMachineType` and `InstancesClient.SetMachineTypeAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### SetMetadataOperationsSettings

```
public OperationsSettings SetMetadataOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `InstancesClient.SetMetadata` and `InstancesClient.SetMetadataAsync`.

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

### SetMetadataSettings

```
public CallSettings SetMetadataSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.SetMetadata` and `InstancesClient.SetMetadataAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### SetMinCpuPlatformOperationsSettings

```
public OperationsSettings SetMinCpuPlatformOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `InstancesClient.SetMinCpuPlatform` and `InstancesClient.SetMinCpuPlatformAsync`.

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

### SetMinCpuPlatformSettings

```
public CallSettings SetMinCpuPlatformSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.SetMinCpuPlatform` and `InstancesClient.SetMinCpuPlatformAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### SetSchedulingOperationsSettings

```
public OperationsSettings SetSchedulingOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `InstancesClient.SetScheduling` and `InstancesClient.SetSchedulingAsync`.

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

### SetSchedulingSettings

```
public CallSettings SetSchedulingSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.SetScheduling` and `InstancesClient.SetSchedulingAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### SetServiceAccountOperationsSettings

```
public OperationsSettings SetServiceAccountOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `InstancesClient.SetServiceAccount` and `InstancesClient.SetServiceAccountAsync`.

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

### SetServiceAccountSettings

```
public CallSettings SetServiceAccountSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.SetServiceAccount` and `InstancesClient.SetServiceAccountAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### SetShieldedInstanceIntegrityPolicyOperationsSettings

```
public OperationsSettings SetShieldedInstanceIntegrityPolicyOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `InstancesClient.SetShieldedInstanceIntegrityPolicy` and `InstancesClient.SetShieldedInstanceIntegrityPolicyAsync`.

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

### SetShieldedInstanceIntegrityPolicySettings

```
public CallSettings SetShieldedInstanceIntegrityPolicySettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.SetShieldedInstanceIntegrityPolicy` and `InstancesClient.SetShieldedInstanceIntegrityPolicyAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### SetTagsOperationsSettings

```
public OperationsSettings SetTagsOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `InstancesClient.SetTags` and `InstancesClient.SetTagsAsync`.

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

### SetTagsSettings

```
public CallSettings SetTagsSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.SetTags` and `InstancesClient.SetTagsAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### SimulateMaintenanceEventOperationsSettings

```
public OperationsSettings SimulateMaintenanceEventOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `InstancesClient.SimulateMaintenanceEvent` and `InstancesClient.SimulateMaintenanceEventAsync`.

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

### SimulateMaintenanceEventSettings

```
public CallSettings SimulateMaintenanceEventSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.SimulateMaintenanceEvent` and `InstancesClient.SimulateMaintenanceEventAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### StartOperationsSettings

```
public OperationsSettings StartOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `InstancesClient.Start` and `InstancesClient.StartAsync` .

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

### StartSettings

```
public CallSettings StartSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.Start` and `InstancesClient.StartAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### StartWithEncryptionKeyOperationsSettings

```
public OperationsSettings StartWithEncryptionKeyOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `InstancesClient.StartWithEncryptionKey` and `InstancesClient.StartWithEncryptionKeyAsync`.

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

### StartWithEncryptionKeySettings

```
public CallSettings StartWithEncryptionKeySettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.StartWithEncryptionKey` and `InstancesClient.StartWithEncryptionKeyAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### StopOperationsSettings

```
public OperationsSettings StopOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `InstancesClient.Stop` and `InstancesClient.StopAsync` .

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

### StopSettings

```
public CallSettings StopSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.Stop` and `InstancesClient.StopAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### SuspendOperationsSettings

```
public OperationsSettings SuspendOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `InstancesClient.Suspend` and `InstancesClient.SuspendAsync`.

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

### SuspendSettings

```
public CallSettings SuspendSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.Suspend` and `InstancesClient.SuspendAsync`.

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

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.TestIamPermissions` and `InstancesClient.TestIamPermissionsAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### UpdateAccessConfigOperationsSettings

```
public OperationsSettings UpdateAccessConfigOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `InstancesClient.UpdateAccessConfig` and `InstancesClient.UpdateAccessConfigAsync`.

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

### UpdateAccessConfigSettings

```
public CallSettings UpdateAccessConfigSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.UpdateAccessConfig` and `InstancesClient.UpdateAccessConfigAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### UpdateDisplayDeviceOperationsSettings

```
public OperationsSettings UpdateDisplayDeviceOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `InstancesClient.UpdateDisplayDevice` and `InstancesClient.UpdateDisplayDeviceAsync`.

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

### UpdateDisplayDeviceSettings

```
public CallSettings UpdateDisplayDeviceSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.UpdateDisplayDevice` and `InstancesClient.UpdateDisplayDeviceAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### UpdateNetworkInterfaceOperationsSettings

```
public OperationsSettings UpdateNetworkInterfaceOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `InstancesClient.UpdateNetworkInterface` and `InstancesClient.UpdateNetworkInterfaceAsync`.

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

### UpdateNetworkInterfaceSettings

```
public CallSettings UpdateNetworkInterfaceSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.UpdateNetworkInterface` and `InstancesClient.UpdateNetworkInterfaceAsync`.

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

Long Running Operation settings for calls to `InstancesClient.Update` and `InstancesClient.UpdateAsync`.

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

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.Update` and `InstancesClient.UpdateAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 600 seconds.

### UpdateShieldedInstanceConfigOperationsSettings

```
public OperationsSettings UpdateShieldedInstanceConfigOperationsSettings { get; set; }
```

Long Running Operation settings for calls to `InstancesClient.UpdateShieldedInstanceConfig` and `InstancesClient.UpdateShieldedInstanceConfigAsync`.

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

### UpdateShieldedInstanceConfigSettings

```
public CallSettings UpdateShieldedInstanceConfigSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `InstancesClient.UpdateShieldedInstanceConfig` and `InstancesClient.UpdateShieldedInstanceConfigAsync` .

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
public InstancesSettings Clone()
```

Creates a deep clone of this object, with all the same property values.

**Returns**

**Type**

**Description**

`[InstancesSettings](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.InstancesSettings)`

A deep clone of this [InstancesSettings](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.InstancesSettings) object.

### GetDefault()

```
public static InstancesSettings GetDefault()
```

Get a new instance of the default [InstancesSettings](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.InstancesSettings).

**Returns**

**Type**

**Description**

`[InstancesSettings](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.InstancesSettings)`

A new instance of the default [InstancesSettings](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.5.0/Google.Cloud.Compute.V1.InstancesSettings).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
