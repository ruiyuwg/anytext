-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud Resource Manager v3 API - Class Folders (2.2.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.2.0keyboard\_arrow\_down

-   [2.6.0 (latest)](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/latest/Google.Cloud.ResourceManager.V3.Folders)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/2.5.0/Google.Cloud.ResourceManager.V3.Folders)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/2.4.0/Google.Cloud.ResourceManager.V3.Folders)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/2.3.0/Google.Cloud.ResourceManager.V3.Folders)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/2.2.0/Google.Cloud.ResourceManager.V3.Folders)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/2.1.0/Google.Cloud.ResourceManager.V3.Folders)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/2.0.0/Google.Cloud.ResourceManager.V3.Folders)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/1.2.0/Google.Cloud.ResourceManager.V3.Folders)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/1.1.0/Google.Cloud.ResourceManager.V3.Folders)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/1.0.0/Google.Cloud.ResourceManager.V3.Folders)

```
public static class Folders
```

Reference documentation and code samples for the Cloud Resource Manager v3 API class Folders.

Manages Cloud Platform folder resources. Folders can be used to organize the resources under an organization and to control the policies applied to groups of resources.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> Folders

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.ResourceManager.V3](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/2.2.0/Google.Cloud.ResourceManager.V3)

## Assembly

Google.Cloud.ResourceManager.V3.dll

## Methods

### BindService(FoldersBase)

```
public static ServerServiceDefinition BindService(Folders.FoldersBase serviceImpl)
```

Creates service definition that can be registered with a server

**Parameter**

**Name**

**Description**

`serviceImpl`

`[Folders](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/2.2.0/Google.Cloud.ResourceManager.V3.Folders)[FoldersBase](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/2.2.0/Google.Cloud.ResourceManager.V3.Folders.FoldersBase)`  

An object implementing the server-side handling logic.

**Returns**

**Type**

**Description**

`[ServerServiceDefinition](https://github.com/grpc/grpc-dotnet/blob/33ee4d83ad1d20f7b36e0383478229d43b6dbe4f/src/Grpc.Core.Api/ServerServiceDefinition.cs)`

### BindService(ServiceBinderBase, FoldersBase)

```
public static void BindService(ServiceBinderBase serviceBinder, Folders.FoldersBase serviceImpl)
```

Register service method with a service binder with or without implementation. Useful when customizing the service binding logic. Note: this method is part of an experimental API that can change or be removed without any prior notice.

**Parameters**

**Name**

**Description**

`serviceBinder`

`[ServiceBinderBase](https://github.com/grpc/grpc-dotnet/blob/33ee4d83ad1d20f7b36e0383478229d43b6dbe4f/src/Grpc.Core.Api/ServiceBinderBase.cs)`  

Service methods will be bound by calling `AddMethod` on this object.

`serviceImpl`

`[Folders](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/2.2.0/Google.Cloud.ResourceManager.V3.Folders)[FoldersBase](/dotnet/docs/reference/Google.Cloud.ResourceManager.V3/2.2.0/Google.Cloud.ResourceManager.V3.Folders.FoldersBase)`  

An object implementing the server-side handling logic.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
