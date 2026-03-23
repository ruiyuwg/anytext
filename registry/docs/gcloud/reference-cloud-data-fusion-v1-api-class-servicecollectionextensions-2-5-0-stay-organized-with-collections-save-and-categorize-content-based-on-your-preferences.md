-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud Data Fusion v1 API - Class ServiceCollectionExtensions (2.5.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [2.5.0 (latest)](/dotnet/docs/reference/Google.Cloud.DataFusion.V1/latest/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.DataFusion.V1/2.4.0/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.DataFusion.V1/2.3.0/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.DataFusion.V1/2.2.0/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.DataFusion.V1/2.1.0/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.DataFusion.V1/2.0.0/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.DataFusion.V1/1.1.0/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.DataFusion.V1/1.0.0/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)

```
public static class ServiceCollectionExtensions
```

Reference documentation and code samples for the Cloud Data Fusion v1 API class ServiceCollectionExtensions.

Static class to provide extension methods to configure API clients.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ServiceCollectionExtensions

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Microsoft.Extensions.DependencyInjection](/dotnet/docs/reference/Google.Cloud.DataFusion.V1/latest/Microsoft.Extensions.DependencyInjection)

## Assembly

Google.Cloud.DataFusion.V1.dll

## Methods

### AddDataFusionClient(IServiceCollection, Action<DataFusionClientBuilder>)

```
public static IServiceCollection AddDataFusionClient(this IServiceCollection services, Action<DataFusionClientBuilder> action = null)
```

Adds a singleton [DataFusionClient](/dotnet/docs/reference/Google.Cloud.DataFusion.V1/latest/Google.Cloud.DataFusion.V1.DataFusionClient) to `services`.

**Parameters**

**Name**

**Description**

`services`

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`  

The service collection to add the client to. The services are used to configure the client when requested.

`action`

`[Action](https://learn.microsoft.com/dotnet/api/system.action-1)[DataFusionClientBuilder](/dotnet/docs/reference/Google.Cloud.DataFusion.V1/latest/Google.Cloud.DataFusion.V1.DataFusionClientBuilder)`  

An optional action to invoke on the client builder. This is invoked before services from `services` are used.

**Returns**

**Type**

**Description**

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`

### AddDataFusionClient(IServiceCollection, Action<IServiceProvider, DataFusionClientBuilder>)

```
public static IServiceCollection AddDataFusionClient(this IServiceCollection services, Action<IServiceProvider, DataFusionClientBuilder> action)
```

Adds a singleton [DataFusionClient](/dotnet/docs/reference/Google.Cloud.DataFusion.V1/latest/Google.Cloud.DataFusion.V1.DataFusionClient) to `services`.

**Parameters**

**Name**

**Description**

`services`

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`  

The service collection to add the client to. The services are used to configure the client when requested.

`action`

`[Action](https://learn.microsoft.com/dotnet/api/system.action-2)System.IServiceProvider[DataFusionClientBuilder](/dotnet/docs/reference/Google.Cloud.DataFusion.V1/latest/Google.Cloud.DataFusion.V1.DataFusionClientBuilder)`  

An optional action to invoke on the client builder. This is invoked before services from `services` are used.

**Returns**

**Type**

**Description**

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
