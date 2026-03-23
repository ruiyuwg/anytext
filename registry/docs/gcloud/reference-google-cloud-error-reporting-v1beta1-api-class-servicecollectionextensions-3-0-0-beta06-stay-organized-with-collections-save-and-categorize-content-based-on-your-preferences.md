-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Cloud Error Reporting v1beta1 API - Class ServiceCollectionExtensions (3.0.0-beta06) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [3.0.0-beta06 (latest)](/dotnet/docs/reference/Google.Cloud.ErrorReporting.V1Beta1/latest/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)
-   [3.0.0-beta05](/dotnet/docs/reference/Google.Cloud.ErrorReporting.V1Beta1/3.0.0-beta05/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)
-   [2.0.0-beta05](/dotnet/docs/reference/Google.Cloud.ErrorReporting.V1Beta1/2.0.0-beta05/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)

```
public static class ServiceCollectionExtensions
```

Reference documentation and code samples for the Google Cloud Error Reporting v1beta1 API class ServiceCollectionExtensions.

Static class to provide extension methods to configure API clients.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ServiceCollectionExtensions

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Microsoft.Extensions.DependencyInjection](/dotnet/docs/reference/Google.Cloud.ErrorReporting.V1Beta1/latest/Microsoft.Extensions.DependencyInjection)

## Assembly

Google.Cloud.ErrorReporting.V1Beta1.dll

## Methods

### AddErrorGroupServiceClient(IServiceCollection, Action<ErrorGroupServiceClientBuilder>)

```
public static IServiceCollection AddErrorGroupServiceClient(this IServiceCollection services, Action<ErrorGroupServiceClientBuilder> action = null)
```

Adds a singleton [ErrorGroupServiceClient](/dotnet/docs/reference/Google.Cloud.ErrorReporting.V1Beta1/latest/Google.Cloud.ErrorReporting.V1Beta1.ErrorGroupServiceClient) to `services`.

**Parameters**

**Name**

**Description**

`services`

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`  

The service collection to add the client to. The services are used to configure the client when requested.

`action`

`[Action](https://learn.microsoft.com/dotnet/api/system.action-1)[ErrorGroupServiceClientBuilder](/dotnet/docs/reference/Google.Cloud.ErrorReporting.V1Beta1/latest/Google.Cloud.ErrorReporting.V1Beta1.ErrorGroupServiceClientBuilder)`  

An optional action to invoke on the client builder. This is invoked before services from `services` are used.

**Returns**

**Type**

**Description**

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`

### AddErrorGroupServiceClient(IServiceCollection, Action<IServiceProvider, ErrorGroupServiceClientBuilder>)

```
public static IServiceCollection AddErrorGroupServiceClient(this IServiceCollection services, Action<IServiceProvider, ErrorGroupServiceClientBuilder> action)
```

Adds a singleton [ErrorGroupServiceClient](/dotnet/docs/reference/Google.Cloud.ErrorReporting.V1Beta1/latest/Google.Cloud.ErrorReporting.V1Beta1.ErrorGroupServiceClient) to `services`.

**Parameters**

**Name**

**Description**

`services`

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`  

The service collection to add the client to. The services are used to configure the client when requested.

`action`

`[Action](https://learn.microsoft.com/dotnet/api/system.action-2)System.IServiceProvider[ErrorGroupServiceClientBuilder](/dotnet/docs/reference/Google.Cloud.ErrorReporting.V1Beta1/latest/Google.Cloud.ErrorReporting.V1Beta1.ErrorGroupServiceClientBuilder)`  

An optional action to invoke on the client builder. This is invoked before services from `services` are used.

**Returns**

**Type**

**Description**

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`

### AddErrorStatsServiceClient(IServiceCollection, Action<ErrorStatsServiceClientBuilder>)

```
public static IServiceCollection AddErrorStatsServiceClient(this IServiceCollection services, Action<ErrorStatsServiceClientBuilder> action = null)
```

Adds a singleton [ErrorStatsServiceClient](/dotnet/docs/reference/Google.Cloud.ErrorReporting.V1Beta1/latest/Google.Cloud.ErrorReporting.V1Beta1.ErrorStatsServiceClient) to `services`.

**Parameters**

**Name**

**Description**

`services`

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`  

The service collection to add the client to. The services are used to configure the client when requested.

`action`

`[Action](https://learn.microsoft.com/dotnet/api/system.action-1)[ErrorStatsServiceClientBuilder](/dotnet/docs/reference/Google.Cloud.ErrorReporting.V1Beta1/latest/Google.Cloud.ErrorReporting.V1Beta1.ErrorStatsServiceClientBuilder)`  

An optional action to invoke on the client builder. This is invoked before services from `services` are used.

**Returns**

**Type**

**Description**

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`

### AddErrorStatsServiceClient(IServiceCollection, Action<IServiceProvider, ErrorStatsServiceClientBuilder>)

```
public static IServiceCollection AddErrorStatsServiceClient(this IServiceCollection services, Action<IServiceProvider, ErrorStatsServiceClientBuilder> action)
```

Adds a singleton [ErrorStatsServiceClient](/dotnet/docs/reference/Google.Cloud.ErrorReporting.V1Beta1/latest/Google.Cloud.ErrorReporting.V1Beta1.ErrorStatsServiceClient) to `services`.

**Parameters**

**Name**

**Description**

`services`

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`  

The service collection to add the client to. The services are used to configure the client when requested.

`action`

`[Action](https://learn.microsoft.com/dotnet/api/system.action-2)System.IServiceProvider[ErrorStatsServiceClientBuilder](/dotnet/docs/reference/Google.Cloud.ErrorReporting.V1Beta1/latest/Google.Cloud.ErrorReporting.V1Beta1.ErrorStatsServiceClientBuilder)`  

An optional action to invoke on the client builder. This is invoked before services from `services` are used.

**Returns**

**Type**

**Description**

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`

### AddReportErrorsServiceClient(IServiceCollection, Action<ReportErrorsServiceClientBuilder>)

```
public static IServiceCollection AddReportErrorsServiceClient(this IServiceCollection services, Action<ReportErrorsServiceClientBuilder> action = null)
```

Adds a singleton [ReportErrorsServiceClient](/dotnet/docs/reference/Google.Cloud.ErrorReporting.V1Beta1/latest/Google.Cloud.ErrorReporting.V1Beta1.ReportErrorsServiceClient) to `services`.

**Parameters**

**Name**

**Description**

`services`

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`  

The service collection to add the client to. The services are used to configure the client when requested.

`action`

`[Action](https://learn.microsoft.com/dotnet/api/system.action-1)[ReportErrorsServiceClientBuilder](/dotnet/docs/reference/Google.Cloud.ErrorReporting.V1Beta1/latest/Google.Cloud.ErrorReporting.V1Beta1.ReportErrorsServiceClientBuilder)`  

An optional action to invoke on the client builder. This is invoked before services from `services` are used.

**Returns**

**Type**

**Description**

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`

### AddReportErrorsServiceClient(IServiceCollection, Action<IServiceProvider, ReportErrorsServiceClientBuilder>)

```
public static IServiceCollection AddReportErrorsServiceClient(this IServiceCollection services, Action<IServiceProvider, ReportErrorsServiceClientBuilder> action)
```

Adds a singleton [ReportErrorsServiceClient](/dotnet/docs/reference/Google.Cloud.ErrorReporting.V1Beta1/latest/Google.Cloud.ErrorReporting.V1Beta1.ReportErrorsServiceClient) to `services`.

**Parameters**

**Name**

**Description**

`services`

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`  

The service collection to add the client to. The services are used to configure the client when requested.

`action`

`[Action](https://learn.microsoft.com/dotnet/api/system.action-2)System.IServiceProvider[ReportErrorsServiceClientBuilder](/dotnet/docs/reference/Google.Cloud.ErrorReporting.V1Beta1/latest/Google.Cloud.ErrorReporting.V1Beta1.ReportErrorsServiceClientBuilder)`  

An optional action to invoke on the client builder. This is invoked before services from `services` are used.

**Returns**

**Type**

**Description**

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
