-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class NodeTemplates (2.3.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public static class NodeTemplates
```

Reference documentation and code samples for the Compute Engine v1 API class NodeTemplates.

The NodeTemplates API.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> NodeTemplates

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Methods

### BindService(NodeTemplates.NodeTemplatesBase)

```
public static ServerServiceDefinition BindService(NodeTemplates.NodeTemplatesBase serviceImpl)
```

Creates service definition that can be registered with a server

**Parameter**

**Name**

**Description**

`serviceImpl`

`[NodeTemplates.NodeTemplatesBase](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.NodeTemplates.NodeTemplatesBase)`  

An object implementing the server-side handling logic.

**Returns**

**Type**

**Description**

`[ServerServiceDefinition](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerServiceDefinition.html)`

### BindService(ServiceBinderBase, NodeTemplates.NodeTemplatesBase)

```
public static void BindService(ServiceBinderBase serviceBinder, NodeTemplates.NodeTemplatesBase serviceImpl)
```

Register service method with a service binder with or without implementation. Useful when customizing the service binding logic. Note: this method is part of an experimental API that can change or be removed without any prior notice.

**Parameters**

**Name**

**Description**

`serviceBinder`

`[ServiceBinderBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServiceBinderBase.html)`  

Service methods will be bound by calling `AddMethod` on this object.

`serviceImpl`

`[NodeTemplates.NodeTemplatesBase](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.3.0/Google.Cloud.Compute.V1.NodeTemplates.NodeTemplatesBase)`  

An object implementing the server-side handling logic.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
