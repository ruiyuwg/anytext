-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class GSuiteAddOnsSettings (2.0.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.0.0keyboard\_arrow\_down

-   [2.5.0 (latest)](/dotnet/docs/reference/Google.Cloud.GSuiteAddOns.V1/latest/Google.Cloud.GSuiteAddOns.V1.GSuiteAddOnsSettings)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.GSuiteAddOns.V1/2.4.0/Google.Cloud.GSuiteAddOns.V1.GSuiteAddOnsSettings)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.GSuiteAddOns.V1/2.3.0/Google.Cloud.GSuiteAddOns.V1.GSuiteAddOnsSettings)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.GSuiteAddOns.V1/2.2.0/Google.Cloud.GSuiteAddOns.V1.GSuiteAddOnsSettings)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.GSuiteAddOns.V1/2.1.0/Google.Cloud.GSuiteAddOns.V1.GSuiteAddOnsSettings)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.GSuiteAddOns.V1/2.0.0/Google.Cloud.GSuiteAddOns.V1.GSuiteAddOnsSettings)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.GSuiteAddOns.V1/1.1.0/Google.Cloud.GSuiteAddOns.V1.GSuiteAddOnsSettings)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.GSuiteAddOns.V1/1.0.0/Google.Cloud.GSuiteAddOns.V1.GSuiteAddOnsSettings)

```
public sealed class GSuiteAddOnsSettings : ServiceSettingsBase
```

Settings for [GSuiteAddOnsClient](/dotnet/docs/reference/Google.Cloud.GSuiteAddOns.V1/2.0.0/Google.Cloud.GSuiteAddOns.V1.GSuiteAddOnsClient) instances.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> [ServiceSettingsBase](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.ServiceSettingsBase.html) \> GSuiteAddOnsSettings

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

[Google.Cloud.GSuiteAddOns.V1](/dotnet/docs/reference/Google.Cloud.GSuiteAddOns.V1/2.0.0/Google.Cloud.GSuiteAddOns.V1)

## Assembly

Google.Cloud.GSuiteAddOns.V1.dll

## Constructors

### GSuiteAddOnsSettings()

```
public GSuiteAddOnsSettings()
```

Constructs a new [GSuiteAddOnsSettings](/dotnet/docs/reference/Google.Cloud.GSuiteAddOns.V1/2.0.0/Google.Cloud.GSuiteAddOns.V1.GSuiteAddOnsSettings) object with default settings.

## Properties

### CreateDeploymentSettings

```
public CallSettings CreateDeploymentSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `GSuiteAddOnsClient.CreateDeployment` and `GSuiteAddOnsClient.CreateDeploymentAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 10 seconds.

### DeleteDeploymentSettings

```
public CallSettings DeleteDeploymentSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `GSuiteAddOnsClient.DeleteDeployment` and `GSuiteAddOnsClient.DeleteDeploymentAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 10 seconds.

### GetAuthorizationSettings

```
public CallSettings GetAuthorizationSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `GSuiteAddOnsClient.GetAuthorization` and `GSuiteAddOnsClient.GetAuthorizationAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   This call will not be retried.
-   Timeout: 120 seconds.

### GetDeploymentSettings

```
public CallSettings GetDeploymentSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `GSuiteAddOnsClient.GetDeployment` and `GSuiteAddOnsClient.GetDeploymentAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   Initial retry delay: 1000 milliseconds.
-   Retry delay multiplier: 1.3
-   Retry maximum delay: 10000 milliseconds.
-   Maximum attempts: 5
-   Retriable status codes: [Unavailable](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.StatusCode.html#Grpc_Core_StatusCode_Unavailable), [Unknown](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.StatusCode.html#Grpc_Core_StatusCode_Unknown).
-   Timeout: 10 seconds.

### GetInstallStatusSettings

```
public CallSettings GetInstallStatusSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `GSuiteAddOnsClient.GetInstallStatus` and `GSuiteAddOnsClient.GetInstallStatusAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   Initial retry delay: 1000 milliseconds.
-   Retry delay multiplier: 1.3
-   Retry maximum delay: 10000 milliseconds.
-   Maximum attempts: 5
-   Retriable status codes: [Unavailable](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.StatusCode.html#Grpc_Core_StatusCode_Unavailable), [Unknown](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.StatusCode.html#Grpc_Core_StatusCode_Unknown).
-   Timeout: 10 seconds.

### InstallDeploymentSettings

```
public CallSettings InstallDeploymentSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `GSuiteAddOnsClient.InstallDeployment` and `GSuiteAddOnsClient.InstallDeploymentAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   Initial retry delay: 1000 milliseconds.
-   Retry delay multiplier: 1.3
-   Retry maximum delay: 10000 milliseconds.
-   Maximum attempts: 5
-   Retriable status codes: [Unavailable](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.StatusCode.html#Grpc_Core_StatusCode_Unavailable), [Unknown](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.StatusCode.html#Grpc_Core_StatusCode_Unknown).
-   Timeout: 10 seconds.

### ListDeploymentsSettings

```
public CallSettings ListDeploymentsSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `GSuiteAddOnsClient.ListDeployments` and `GSuiteAddOnsClient.ListDeploymentsAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   Initial retry delay: 1000 milliseconds.
-   Retry delay multiplier: 1.3
-   Retry maximum delay: 10000 milliseconds.
-   Maximum attempts: 5
-   Retriable status codes: [Unavailable](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.StatusCode.html#Grpc_Core_StatusCode_Unavailable), [Unknown](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.StatusCode.html#Grpc_Core_StatusCode_Unknown).
-   Timeout: 10 seconds.

### ReplaceDeploymentSettings

```
public CallSettings ReplaceDeploymentSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `GSuiteAddOnsClient.ReplaceDeployment` and `GSuiteAddOnsClient.ReplaceDeploymentAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   Initial retry delay: 1000 milliseconds.
-   Retry delay multiplier: 1.3
-   Retry maximum delay: 10000 milliseconds.
-   Maximum attempts: 5
-   Retriable status codes: [Unavailable](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.StatusCode.html#Grpc_Core_StatusCode_Unavailable), [Unknown](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.StatusCode.html#Grpc_Core_StatusCode_Unknown).
-   Timeout: 10 seconds.

### UninstallDeploymentSettings

```
public CallSettings UninstallDeploymentSettings { get; set; }
```

[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html) for synchronous and asynchronous calls to `GSuiteAddOnsClient.UninstallDeployment` and `GSuiteAddOnsClient.UninstallDeploymentAsync`.

**Property Value**

**Type**

**Description**

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`

**Remarks**

-   Initial retry delay: 1000 milliseconds.
-   Retry delay multiplier: 1.3
-   Retry maximum delay: 10000 milliseconds.
-   Maximum attempts: 5
-   Retriable status codes: [Unavailable](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.StatusCode.html#Grpc_Core_StatusCode_Unavailable), [Unknown](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.StatusCode.html#Grpc_Core_StatusCode_Unknown).
-   Timeout: 10 seconds.

## Methods

### Clone()

```
public GSuiteAddOnsSettings Clone()
```

Creates a deep clone of this object, with all the same property values.

**Returns**

**Type**

**Description**

`[GSuiteAddOnsSettings](/dotnet/docs/reference/Google.Cloud.GSuiteAddOns.V1/2.0.0/Google.Cloud.GSuiteAddOns.V1.GSuiteAddOnsSettings)`

A deep clone of this [GSuiteAddOnsSettings](/dotnet/docs/reference/Google.Cloud.GSuiteAddOns.V1/2.0.0/Google.Cloud.GSuiteAddOns.V1.GSuiteAddOnsSettings) object.

### GetDefault()

```
public static GSuiteAddOnsSettings GetDefault()
```

Get a new instance of the default [GSuiteAddOnsSettings](/dotnet/docs/reference/Google.Cloud.GSuiteAddOns.V1/2.0.0/Google.Cloud.GSuiteAddOns.V1.GSuiteAddOnsSettings).

**Returns**

**Type**

**Description**

`[GSuiteAddOnsSettings](/dotnet/docs/reference/Google.Cloud.GSuiteAddOns.V1/2.0.0/Google.Cloud.GSuiteAddOns.V1.GSuiteAddOnsSettings)`

A new instance of the default [GSuiteAddOnsSettings](/dotnet/docs/reference/Google.Cloud.GSuiteAddOns.V1/2.0.0/Google.Cloud.GSuiteAddOns.V1.GSuiteAddOnsSettings).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
