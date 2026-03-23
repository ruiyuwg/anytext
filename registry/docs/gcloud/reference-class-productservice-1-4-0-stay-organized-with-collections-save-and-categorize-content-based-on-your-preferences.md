-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class ProductService (1.4.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.4.0keyboard\_arrow\_down

-   [2.16.0 (latest)](/dotnet/docs/reference/Google.Cloud.Retail.V2/latest/Google.Cloud.Retail.V2.ProductService)
-   [2.15.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.15.0/Google.Cloud.Retail.V2.ProductService)
-   [2.14.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.14.0/Google.Cloud.Retail.V2.ProductService)
-   [2.13.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.13.0/Google.Cloud.Retail.V2.ProductService)
-   [2.12.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.12.0/Google.Cloud.Retail.V2.ProductService)
-   [2.11.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.11.0/Google.Cloud.Retail.V2.ProductService)
-   [2.10.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.10.0/Google.Cloud.Retail.V2.ProductService)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.9.0/Google.Cloud.Retail.V2.ProductService)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.8.0/Google.Cloud.Retail.V2.ProductService)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.7.0/Google.Cloud.Retail.V2.ProductService)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.6.0/Google.Cloud.Retail.V2.ProductService)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.5.0/Google.Cloud.Retail.V2.ProductService)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.4.0/Google.Cloud.Retail.V2.ProductService)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.3.0/Google.Cloud.Retail.V2.ProductService)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.2.0/Google.Cloud.Retail.V2.ProductService)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.1.0/Google.Cloud.Retail.V2.ProductService)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.0.0/Google.Cloud.Retail.V2.ProductService)
-   [1.6.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/1.6.0/Google.Cloud.Retail.V2.ProductService)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/1.5.0/Google.Cloud.Retail.V2.ProductService)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/1.4.0/Google.Cloud.Retail.V2.ProductService)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/1.3.0/Google.Cloud.Retail.V2.ProductService)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/1.2.0/Google.Cloud.Retail.V2.ProductService)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/1.1.0/Google.Cloud.Retail.V2.ProductService)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/1.0.0/Google.Cloud.Retail.V2.ProductService)

```
public static class ProductService
```

Service for ingesting \[Product\]\[google.cloud.retail.v2.Product\] information of the customer's website.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> ProductService

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Retail.V2](/dotnet/docs/reference/Google.Cloud.Retail.V2/1.4.0/Google.Cloud.Retail.V2)

## Assembly

Google.Cloud.Retail.V2.dll

## Methods

### BindService(ProductService.ProductServiceBase)

```
public static ServerServiceDefinition BindService(ProductService.ProductServiceBase serviceImpl)
```

Creates service definition that can be registered with a server

**Parameter**

**Name**

**Description**

`serviceImpl`

`[ProductService.ProductServiceBase](/dotnet/docs/reference/Google.Cloud.Retail.V2/1.4.0/Google.Cloud.Retail.V2.ProductService.ProductServiceBase)`  

An object implementing the server-side handling logic.

**Returns**

**Type**

**Description**

`[ServerServiceDefinition](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerServiceDefinition.html)`

### BindService(ServiceBinderBase, ProductService.ProductServiceBase)

```
public static void BindService(ServiceBinderBase serviceBinder, ProductService.ProductServiceBase serviceImpl)
```

Register service method with a service binder with or without implementation. Useful when customizing the service binding logic. Note: this method is part of an experimental API that can change or be removed without any prior notice.

**Parameters**

**Name**

**Description**

`serviceBinder`

`[ServiceBinderBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServiceBinderBase.html)`  

Service methods will be bound by calling `AddMethod` on this object.

`serviceImpl`

`[ProductService.ProductServiceBase](/dotnet/docs/reference/Google.Cloud.Retail.V2/1.4.0/Google.Cloud.Retail.V2.ProductService.ProductServiceBase)`  

An object implementing the server-side handling logic.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
