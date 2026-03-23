-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Anthos Multi-Cloud v1 API - Class AzureClusters (2.6.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.6.0keyboard\_arrow\_down

-   [2.10.0 (latest)](/dotnet/docs/reference/Google.Cloud.GkeMultiCloud.V1/latest/Google.Cloud.GkeMultiCloud.V1.AzureClusters)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.GkeMultiCloud.V1/2.9.0/Google.Cloud.GkeMultiCloud.V1.AzureClusters)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.GkeMultiCloud.V1/2.8.0/Google.Cloud.GkeMultiCloud.V1.AzureClusters)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.GkeMultiCloud.V1/2.7.0/Google.Cloud.GkeMultiCloud.V1.AzureClusters)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.GkeMultiCloud.V1/2.6.0/Google.Cloud.GkeMultiCloud.V1.AzureClusters)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.GkeMultiCloud.V1/2.5.0/Google.Cloud.GkeMultiCloud.V1.AzureClusters)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.GkeMultiCloud.V1/2.4.0/Google.Cloud.GkeMultiCloud.V1.AzureClusters)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.GkeMultiCloud.V1/2.3.0/Google.Cloud.GkeMultiCloud.V1.AzureClusters)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.GkeMultiCloud.V1/2.2.0/Google.Cloud.GkeMultiCloud.V1.AzureClusters)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.GkeMultiCloud.V1/2.1.0/Google.Cloud.GkeMultiCloud.V1.AzureClusters)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.GkeMultiCloud.V1/2.0.0/Google.Cloud.GkeMultiCloud.V1.AzureClusters)
-   [1.0.0-beta01](/dotnet/docs/reference/Google.Cloud.GkeMultiCloud.V1/1.0.0-beta01/Google.Cloud.GkeMultiCloud.V1.AzureClusters)

```
public static class AzureClusters
```

Reference documentation and code samples for the Anthos Multi-Cloud v1 API class AzureClusters.

The AzureClusters API provides a single centrally managed service to create and manage Anthos clusters that run on Azure infrastructure.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> AzureClusters

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.GkeMultiCloud.V1](/dotnet/docs/reference/Google.Cloud.GkeMultiCloud.V1/2.6.0/Google.Cloud.GkeMultiCloud.V1)

## Assembly

Google.Cloud.GkeMultiCloud.V1.dll

## Methods

### BindService(AzureClustersBase)

```
public static ServerServiceDefinition BindService(AzureClusters.AzureClustersBase serviceImpl)
```

Creates service definition that can be registered with a server

**Parameter**

**Name**

**Description**

`serviceImpl`

`[AzureClusters](/dotnet/docs/reference/Google.Cloud.GkeMultiCloud.V1/2.6.0/Google.Cloud.GkeMultiCloud.V1.AzureClusters)[AzureClustersBase](/dotnet/docs/reference/Google.Cloud.GkeMultiCloud.V1/2.6.0/Google.Cloud.GkeMultiCloud.V1.AzureClusters.AzureClustersBase)`  

An object implementing the server-side handling logic.

**Returns**

**Type**

**Description**

`[ServerServiceDefinition](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ServerServiceDefinition.cs)`

### BindService(ServiceBinderBase, AzureClustersBase)

```
public static void BindService(ServiceBinderBase serviceBinder, AzureClusters.AzureClustersBase serviceImpl)
```

Register service method with a service binder with or without implementation. Useful when customizing the service binding logic. Note: this method is part of an experimental API that can change or be removed without any prior notice.

**Parameters**

**Name**

**Description**

`serviceBinder`

`[ServiceBinderBase](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ServiceBinderBase.cs)`  

Service methods will be bound by calling `AddMethod` on this object.

`serviceImpl`

`[AzureClusters](/dotnet/docs/reference/Google.Cloud.GkeMultiCloud.V1/2.6.0/Google.Cloud.GkeMultiCloud.V1.AzureClusters)[AzureClustersBase](/dotnet/docs/reference/Google.Cloud.GkeMultiCloud.V1/2.6.0/Google.Cloud.GkeMultiCloud.V1.AzureClusters.AzureClustersBase)`  

An object implementing the server-side handling logic.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
