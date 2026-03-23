-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Retail v2 API - Class ServiceCollectionExtensions (2.6.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.6.0keyboard\_arrow\_down

-   [2.16.0 (latest)](/dotnet/docs/reference/Google.Cloud.Retail.V2/latest/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)
-   [2.15.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.15.0/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)
-   [2.14.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.14.0/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)
-   [2.13.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.13.0/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)
-   [2.12.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.12.0/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)
-   [2.11.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.11.0/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)
-   [2.10.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.10.0/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.9.0/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.8.0/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.7.0/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.6.0/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.5.0/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.4.0/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.3.0/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.2.0/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.1.0/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.0.0/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)
-   [1.6.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/1.6.0/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/1.5.0/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/1.4.0/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/1.3.0/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/1.2.0/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/1.1.0/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Retail.V2/1.0.0/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)

```
public static class ServiceCollectionExtensions
```

Reference documentation and code samples for the Retail v2 API class ServiceCollectionExtensions.

Static class to provide extension methods to configure API clients.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ServiceCollectionExtensions

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Microsoft.Extensions.DependencyInjection](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.6.0/Microsoft.Extensions.DependencyInjection)

## Assembly

Google.Cloud.Retail.V2.dll

## Methods

### AddAnalyticsServiceClient(IServiceCollection, Action<AnalyticsServiceClientBuilder>)

```
public static IServiceCollection AddAnalyticsServiceClient(this IServiceCollection services, Action<AnalyticsServiceClientBuilder> action = null)
```

Adds a singleton [AnalyticsServiceClient](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.6.0/Google.Cloud.Retail.V2.AnalyticsServiceClient) to `services`.

**Parameters**

**Name**

**Description**

`services`

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`  

The service collection to add the client to. The services are used to configure the client when requested.

`action`

`[Action](https://learn.microsoft.com/dotnet/api/system.action-1)[AnalyticsServiceClientBuilder](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.6.0/Google.Cloud.Retail.V2.AnalyticsServiceClientBuilder)`  

An optional action to invoke on the client builder. This is invoked before services from `services` are used.

**Returns**

**Type**

**Description**

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`

### AddCatalogServiceClient(IServiceCollection, Action<CatalogServiceClientBuilder>)

```
public static IServiceCollection AddCatalogServiceClient(this IServiceCollection services, Action<CatalogServiceClientBuilder> action = null)
```

Adds a singleton [CatalogServiceClient](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.6.0/Google.Cloud.Retail.V2.CatalogServiceClient) to `services`.

**Parameters**

**Name**

**Description**

`services`

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`  

The service collection to add the client to. The services are used to configure the client when requested.

`action`

`[Action](https://learn.microsoft.com/dotnet/api/system.action-1)[CatalogServiceClientBuilder](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.6.0/Google.Cloud.Retail.V2.CatalogServiceClientBuilder)`  

An optional action to invoke on the client builder. This is invoked before services from `services` are used.

**Returns**

**Type**

**Description**

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`

### AddCompletionServiceClient(IServiceCollection, Action<CompletionServiceClientBuilder>)

```
public static IServiceCollection AddCompletionServiceClient(this IServiceCollection services, Action<CompletionServiceClientBuilder> action = null)
```

Adds a singleton [CompletionServiceClient](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.6.0/Google.Cloud.Retail.V2.CompletionServiceClient) to `services`.

**Parameters**

**Name**

**Description**

`services`

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`  

The service collection to add the client to. The services are used to configure the client when requested.

`action`

`[Action](https://learn.microsoft.com/dotnet/api/system.action-1)[CompletionServiceClientBuilder](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.6.0/Google.Cloud.Retail.V2.CompletionServiceClientBuilder)`  

An optional action to invoke on the client builder. This is invoked before services from `services` are used.

**Returns**

**Type**

**Description**

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`

### AddControlServiceClient(IServiceCollection, Action<ControlServiceClientBuilder>)

```
public static IServiceCollection AddControlServiceClient(this IServiceCollection services, Action<ControlServiceClientBuilder> action = null)
```

Adds a singleton [ControlServiceClient](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.6.0/Google.Cloud.Retail.V2.ControlServiceClient) to `services`.

**Parameters**

**Name**

**Description**

`services`

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`  

The service collection to add the client to. The services are used to configure the client when requested.

`action`

`[Action](https://learn.microsoft.com/dotnet/api/system.action-1)[ControlServiceClientBuilder](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.6.0/Google.Cloud.Retail.V2.ControlServiceClientBuilder)`  

An optional action to invoke on the client builder. This is invoked before services from `services` are used.

**Returns**

**Type**

**Description**

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`

### AddModelServiceClient(IServiceCollection, Action<ModelServiceClientBuilder>)

```
public static IServiceCollection AddModelServiceClient(this IServiceCollection services, Action<ModelServiceClientBuilder> action = null)
```

Adds a singleton [ModelServiceClient](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.6.0/Google.Cloud.Retail.V2.ModelServiceClient) to `services`.

**Parameters**

**Name**

**Description**

`services`

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`  

The service collection to add the client to. The services are used to configure the client when requested.

`action`

`[Action](https://learn.microsoft.com/dotnet/api/system.action-1)[ModelServiceClientBuilder](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.6.0/Google.Cloud.Retail.V2.ModelServiceClientBuilder)`  

An optional action to invoke on the client builder. This is invoked before services from `services` are used.

**Returns**

**Type**

**Description**

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`

### AddPredictionServiceClient(IServiceCollection, Action<PredictionServiceClientBuilder>)

```
public static IServiceCollection AddPredictionServiceClient(this IServiceCollection services, Action<PredictionServiceClientBuilder> action = null)
```

Adds a singleton [PredictionServiceClient](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.6.0/Google.Cloud.Retail.V2.PredictionServiceClient) to `services`.

**Parameters**

**Name**

**Description**

`services`

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`  

The service collection to add the client to. The services are used to configure the client when requested.

`action`

`[Action](https://learn.microsoft.com/dotnet/api/system.action-1)[PredictionServiceClientBuilder](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.6.0/Google.Cloud.Retail.V2.PredictionServiceClientBuilder)`  

An optional action to invoke on the client builder. This is invoked before services from `services` are used.

**Returns**

**Type**

**Description**

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`

### AddProductServiceClient(IServiceCollection, Action<ProductServiceClientBuilder>)

```
public static IServiceCollection AddProductServiceClient(this IServiceCollection services, Action<ProductServiceClientBuilder> action = null)
```

Adds a singleton [ProductServiceClient](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.6.0/Google.Cloud.Retail.V2.ProductServiceClient) to `services`.

**Parameters**

**Name**

**Description**

`services`

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`  

The service collection to add the client to. The services are used to configure the client when requested.

`action`

`[Action](https://learn.microsoft.com/dotnet/api/system.action-1)[ProductServiceClientBuilder](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.6.0/Google.Cloud.Retail.V2.ProductServiceClientBuilder)`  

An optional action to invoke on the client builder. This is invoked before services from `services` are used.

**Returns**

**Type**

**Description**

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`

### AddSearchServiceClient(IServiceCollection, Action<SearchServiceClientBuilder>)

```
public static IServiceCollection AddSearchServiceClient(this IServiceCollection services, Action<SearchServiceClientBuilder> action = null)
```

Adds a singleton [SearchServiceClient](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.6.0/Google.Cloud.Retail.V2.SearchServiceClient) to `services`.

**Parameters**

**Name**

**Description**

`services`

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`  

The service collection to add the client to. The services are used to configure the client when requested.

`action`

`[Action](https://learn.microsoft.com/dotnet/api/system.action-1)[SearchServiceClientBuilder](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.6.0/Google.Cloud.Retail.V2.SearchServiceClientBuilder)`  

An optional action to invoke on the client builder. This is invoked before services from `services` are used.

**Returns**

**Type**

**Description**

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`

### AddServingConfigServiceClient(IServiceCollection, Action<ServingConfigServiceClientBuilder>)

```
public static IServiceCollection AddServingConfigServiceClient(this IServiceCollection services, Action<ServingConfigServiceClientBuilder> action = null)
```

Adds a singleton [ServingConfigServiceClient](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.6.0/Google.Cloud.Retail.V2.ServingConfigServiceClient) to `services`.

**Parameters**

**Name**

**Description**

`services`

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`  

The service collection to add the client to. The services are used to configure the client when requested.

`action`

`[Action](https://learn.microsoft.com/dotnet/api/system.action-1)[ServingConfigServiceClientBuilder](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.6.0/Google.Cloud.Retail.V2.ServingConfigServiceClientBuilder)`  

An optional action to invoke on the client builder. This is invoked before services from `services` are used.

**Returns**

**Type**

**Description**

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`

### AddUserEventServiceClient(IServiceCollection, Action<UserEventServiceClientBuilder>)

```
public static IServiceCollection AddUserEventServiceClient(this IServiceCollection services, Action<UserEventServiceClientBuilder> action = null)
```

Adds a singleton [UserEventServiceClient](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.6.0/Google.Cloud.Retail.V2.UserEventServiceClient) to `services`.

**Parameters**

**Name**

**Description**

`services`

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`  

The service collection to add the client to. The services are used to configure the client when requested.

`action`

`[Action](https://learn.microsoft.com/dotnet/api/system.action-1)[UserEventServiceClientBuilder](/dotnet/docs/reference/Google.Cloud.Retail.V2/2.6.0/Google.Cloud.Retail.V2.UserEventServiceClientBuilder)`  

An optional action to invoke on the client builder. This is invoked before services from `services` are used.

**Returns**

**Type**

**Description**

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
