-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Firestore Admin v1 API - Class FirestoreAdmin (3.4.0) Stay organized with collections Save and categorize content based on your preferences.

Version 3.4.0keyboard\_arrow\_down

-   [3.17.0 (latest)](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/latest/Google.Cloud.Firestore.Admin.V1.FirestoreAdmin)
-   [3.16.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.16.0/Google.Cloud.Firestore.Admin.V1.FirestoreAdmin)
-   [3.15.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.15.0/Google.Cloud.Firestore.Admin.V1.FirestoreAdmin)
-   [3.14.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.14.0/Google.Cloud.Firestore.Admin.V1.FirestoreAdmin)
-   [3.13.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.13.0/Google.Cloud.Firestore.Admin.V1.FirestoreAdmin)
-   [3.12.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.12.0/Google.Cloud.Firestore.Admin.V1.FirestoreAdmin)
-   [3.11.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.11.0/Google.Cloud.Firestore.Admin.V1.FirestoreAdmin)
-   [3.10.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.10.0/Google.Cloud.Firestore.Admin.V1.FirestoreAdmin)
-   [3.9.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.9.0/Google.Cloud.Firestore.Admin.V1.FirestoreAdmin)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.8.0/Google.Cloud.Firestore.Admin.V1.FirestoreAdmin)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.7.0/Google.Cloud.Firestore.Admin.V1.FirestoreAdmin)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.6.0/Google.Cloud.Firestore.Admin.V1.FirestoreAdmin)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.5.0/Google.Cloud.Firestore.Admin.V1.FirestoreAdmin)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.4.0/Google.Cloud.Firestore.Admin.V1.FirestoreAdmin)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.3.0/Google.Cloud.Firestore.Admin.V1.FirestoreAdmin)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.2.0/Google.Cloud.Firestore.Admin.V1.FirestoreAdmin)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.1.0/Google.Cloud.Firestore.Admin.V1.FirestoreAdmin)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.0.0/Google.Cloud.Firestore.Admin.V1.FirestoreAdmin)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/2.4.0/Google.Cloud.Firestore.Admin.V1.FirestoreAdmin)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/2.3.0/Google.Cloud.Firestore.Admin.V1.FirestoreAdmin)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/2.2.0/Google.Cloud.Firestore.Admin.V1.FirestoreAdmin)

```
public static class FirestoreAdmin
```

Reference documentation and code samples for the Firestore Admin v1 API class FirestoreAdmin.

The Cloud Firestore Admin API.

This API provides several administrative services for Cloud Firestore.

Project, Database, Namespace, Collection, Collection Group, and Document are used as defined in the Google Cloud Firestore API.

Operation: An Operation represents work being performed in the background.

The index service manages Cloud Firestore indexes.

Index creation is performed asynchronously. An Operation resource is created for each such asynchronous operation. The state of the operation (including any errors encountered) may be queried via the Operation resource.

The Operations collection provides a record of actions performed for the specified Project (including any Operations in progress). Operations are not created directly but through calls on other collections or resources.

An Operation that is done may be deleted so that it is no longer listed as part of the Operation collection. Operations are garbage collected after 30 days. By default, ListOperations will only return in progress and failed operations. To list completed operation, issue a ListOperations request with the filter `done: true`.

Operations are created by service `FirestoreAdmin`, but are accessed via service `google.longrunning.Operations`.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> FirestoreAdmin

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Firestore.Admin.V1](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.4.0/Google.Cloud.Firestore.Admin.V1)

## Assembly

Google.Cloud.Firestore.Admin.V1.dll

## Methods

### BindService(FirestoreAdminBase)

```
public static ServerServiceDefinition BindService(FirestoreAdmin.FirestoreAdminBase serviceImpl)
```

Creates service definition that can be registered with a server

**Parameter**

**Name**

**Description**

`serviceImpl`

`[FirestoreAdmin](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.4.0/Google.Cloud.Firestore.Admin.V1.FirestoreAdmin)[FirestoreAdminBase](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.4.0/Google.Cloud.Firestore.Admin.V1.FirestoreAdmin.FirestoreAdminBase)`  

An object implementing the server-side handling logic.

**Returns**

**Type**

**Description**

`[ServerServiceDefinition](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ServerServiceDefinition.cs)`

### BindService(ServiceBinderBase, FirestoreAdminBase)

```
public static void BindService(ServiceBinderBase serviceBinder, FirestoreAdmin.FirestoreAdminBase serviceImpl)
```

Register service method with a service binder with or without implementation. Useful when customizing the service binding logic. Note: this method is part of an experimental API that can change or be removed without any prior notice.

**Parameters**

**Name**

**Description**

`serviceBinder`

`[ServiceBinderBase](https://github.com/grpc/grpc-dotnet/blob/6e6bcb5a10588f4853cf32aab0195346768a2a36/src/Grpc.Core.Api/ServiceBinderBase.cs)`  

Service methods will be bound by calling `AddMethod` on this object.

`serviceImpl`

`[FirestoreAdmin](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.4.0/Google.Cloud.Firestore.Admin.V1.FirestoreAdmin)[FirestoreAdminBase](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.4.0/Google.Cloud.Firestore.Admin.V1.FirestoreAdmin.FirestoreAdminBase)`  

An object implementing the server-side handling logic.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
