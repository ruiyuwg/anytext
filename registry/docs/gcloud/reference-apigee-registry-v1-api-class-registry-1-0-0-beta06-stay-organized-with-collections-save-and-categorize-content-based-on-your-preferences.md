-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Apigee Registry v1 API - Class Registry (1.0.0-beta06) Stay organized with collections Save and categorize content based on your preferences.

Version 1.0.0-beta06keyboard\_arrow\_down

-   [1.0.0-beta08 (latest)](/dotnet/docs/reference/Google.Cloud.ApigeeRegistry.V1/latest/Google.Cloud.ApigeeRegistry.V1.Registry)
-   [1.0.0-beta07](/dotnet/docs/reference/Google.Cloud.ApigeeRegistry.V1/1.0.0-beta07/Google.Cloud.ApigeeRegistry.V1.Registry)

```
public static class Registry
```

Reference documentation and code samples for the Apigee Registry v1 API class Registry.

The Registry service allows teams to manage descriptions of APIs.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> Registry

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.ApigeeRegistry.V1](/dotnet/docs/reference/Google.Cloud.ApigeeRegistry.V1/1.0.0-beta06/Google.Cloud.ApigeeRegistry.V1)

## Assembly

Google.Cloud.ApigeeRegistry.V1.dll

## Methods

### BindService(RegistryBase)

```
public static ServerServiceDefinition BindService(Registry.RegistryBase serviceImpl)
```

Creates service definition that can be registered with a server

**Parameter**

**Name**

**Description**

`serviceImpl`

`[Registry](/dotnet/docs/reference/Google.Cloud.ApigeeRegistry.V1/1.0.0-beta06/Google.Cloud.ApigeeRegistry.V1.Registry)[RegistryBase](/dotnet/docs/reference/Google.Cloud.ApigeeRegistry.V1/1.0.0-beta06/Google.Cloud.ApigeeRegistry.V1.Registry.RegistryBase)`  

An object implementing the server-side handling logic.

**Returns**

**Type**

**Description**

`[ServerServiceDefinition](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ServerServiceDefinition.cs)`

### BindService(ServiceBinderBase, RegistryBase)

```
public static void BindService(ServiceBinderBase serviceBinder, Registry.RegistryBase serviceImpl)
```

Register service method with a service binder with or without implementation. Useful when customizing the service binding logic. Note: this method is part of an experimental API that can change or be removed without any prior notice.

**Parameters**

**Name**

**Description**

`serviceBinder`

`[ServiceBinderBase](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ServiceBinderBase.cs)`  

Service methods will be bound by calling `AddMethod` on this object.

`serviceImpl`

`[Registry](/dotnet/docs/reference/Google.Cloud.ApigeeRegistry.V1/1.0.0-beta06/Google.Cloud.ApigeeRegistry.V1.Registry)[RegistryBase](/dotnet/docs/reference/Google.Cloud.ApigeeRegistry.V1/1.0.0-beta06/Google.Cloud.ApigeeRegistry.V1.Registry.RegistryBase)`  

An object implementing the server-side handling logic.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
