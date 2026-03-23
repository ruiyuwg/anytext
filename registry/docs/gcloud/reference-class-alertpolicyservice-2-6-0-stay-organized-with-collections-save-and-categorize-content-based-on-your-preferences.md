-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class AlertPolicyService (2.6.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.6.0keyboard\_arrow\_down

-   [3.16.0 (latest)](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/latest/Google.Cloud.Monitoring.V3.AlertPolicyService)
-   [3.15.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.15.0/Google.Cloud.Monitoring.V3.AlertPolicyService)
-   [3.14.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.14.0/Google.Cloud.Monitoring.V3.AlertPolicyService)
-   [3.13.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.13.0/Google.Cloud.Monitoring.V3.AlertPolicyService)
-   [3.12.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.12.0/Google.Cloud.Monitoring.V3.AlertPolicyService)
-   [3.11.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.11.0/Google.Cloud.Monitoring.V3.AlertPolicyService)
-   [3.10.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.10.0/Google.Cloud.Monitoring.V3.AlertPolicyService)
-   [3.9.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.9.0/Google.Cloud.Monitoring.V3.AlertPolicyService)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.8.0/Google.Cloud.Monitoring.V3.AlertPolicyService)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.7.0/Google.Cloud.Monitoring.V3.AlertPolicyService)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.6.0/Google.Cloud.Monitoring.V3.AlertPolicyService)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.AlertPolicyService)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.4.0/Google.Cloud.Monitoring.V3.AlertPolicyService)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.3.0/Google.Cloud.Monitoring.V3.AlertPolicyService)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicyService)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.1.0/Google.Cloud.Monitoring.V3.AlertPolicyService)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.0.0/Google.Cloud.Monitoring.V3.AlertPolicyService)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.6.0/Google.Cloud.Monitoring.V3.AlertPolicyService)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.5.0/Google.Cloud.Monitoring.V3.AlertPolicyService)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.4.0/Google.Cloud.Monitoring.V3.AlertPolicyService)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.3.0/Google.Cloud.Monitoring.V3.AlertPolicyService)

```
public static class AlertPolicyService
```

The AlertPolicyService API is used to manage (list, create, delete, edit) alert policies in Stackdriver Monitoring. An alerting policy is a description of the conditions under which some aspect of your system is considered to be "unhealthy" and the ways to notify people or services about this state. In addition to using this API, alert policies can also be managed through [Stackdriver Monitoring](https://cloud.google.com/monitoring/docs/), which can be reached by clicking the "Monitoring" tab in [Cloud Console](https://console.cloud.google.com/).

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> AlertPolicyService

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Monitoring.V3](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.6.0/Google.Cloud.Monitoring.V3)

## Assembly

Google.Cloud.Monitoring.V3.dll

## Methods

### BindService(AlertPolicyService.AlertPolicyServiceBase)

```
public static ServerServiceDefinition BindService(AlertPolicyService.AlertPolicyServiceBase serviceImpl)
```

Creates service definition that can be registered with a server

**Parameter**

**Name**

**Description**

`serviceImpl`

`[AlertPolicyService.AlertPolicyServiceBase](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.6.0/Google.Cloud.Monitoring.V3.AlertPolicyService.AlertPolicyServiceBase)`  

An object implementing the server-side handling logic.

**Returns**

**Type**

**Description**

`[ServerServiceDefinition](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerServiceDefinition.html)`

### BindService(ServiceBinderBase, AlertPolicyService.AlertPolicyServiceBase)

```
public static void BindService(ServiceBinderBase serviceBinder, AlertPolicyService.AlertPolicyServiceBase serviceImpl)
```

Register service method with a service binder with or without implementation. Useful when customizing the service binding logic. Note: this method is part of an experimental API that can change or be removed without any prior notice.

**Parameters**

**Name**

**Description**

`serviceBinder`

`[ServiceBinderBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServiceBinderBase.html)`  

Service methods will be bound by calling `AddMethod` on this object.

`serviceImpl`

`[AlertPolicyService.AlertPolicyServiceBase](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.6.0/Google.Cloud.Monitoring.V3.AlertPolicyService.AlertPolicyServiceBase)`  

An object implementing the server-side handling logic.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
