-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Cloud Security Command Center Settings v1beta1 API - Class ServiceCollectionExtensions (2.0.0-beta05) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [2.0.0-beta05 (latest)](/dotnet/docs/reference/Google.Cloud.SecurityCenter.Settings.V1Beta1/latest/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)
-   [2.0.0-beta04](/dotnet/docs/reference/Google.Cloud.SecurityCenter.Settings.V1Beta1/2.0.0-beta04/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)
-   [1.0.0-beta04](/dotnet/docs/reference/Google.Cloud.SecurityCenter.Settings.V1Beta1/1.0.0-beta04/Microsoft.Extensions.DependencyInjection.ServiceCollectionExtensions)

```
public static class ServiceCollectionExtensions
```

Reference documentation and code samples for the Google Cloud Security Command Center Settings v1beta1 API class ServiceCollectionExtensions.

Static class to provide extension methods to configure API clients.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ServiceCollectionExtensions

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Microsoft.Extensions.DependencyInjection](/dotnet/docs/reference/Google.Cloud.SecurityCenter.Settings.V1Beta1/latest/Microsoft.Extensions.DependencyInjection)

## Assembly

Google.Cloud.SecurityCenter.Settings.V1Beta1.dll

## Methods

### AddSecurityCenterSettingsServiceClient(IServiceCollection, Action<SecurityCenterSettingsServiceClientBuilder>)

```
public static IServiceCollection AddSecurityCenterSettingsServiceClient(this IServiceCollection services, Action<SecurityCenterSettingsServiceClientBuilder> action = null)
```

Adds a singleton [SecurityCenterSettingsServiceClient](/dotnet/docs/reference/Google.Cloud.SecurityCenter.Settings.V1Beta1/latest/Google.Cloud.SecurityCenter.Settings.V1Beta1.SecurityCenterSettingsServiceClient) to `services`.

**Parameters**

**Name**

**Description**

`services`

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`  

The service collection to add the client to. The services are used to configure the client when requested.

`action`

`[Action](https://learn.microsoft.com/dotnet/api/system.action-1)[SecurityCenterSettingsServiceClientBuilder](/dotnet/docs/reference/Google.Cloud.SecurityCenter.Settings.V1Beta1/latest/Google.Cloud.SecurityCenter.Settings.V1Beta1.SecurityCenterSettingsServiceClientBuilder)`  

An optional action to invoke on the client builder. This is invoked before services from `services` are used.

**Returns**

**Type**

**Description**

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`

### AddSecurityCenterSettingsServiceClient(IServiceCollection, Action<IServiceProvider, SecurityCenterSettingsServiceClientBuilder>)

```
public static IServiceCollection AddSecurityCenterSettingsServiceClient(this IServiceCollection services, Action<IServiceProvider, SecurityCenterSettingsServiceClientBuilder> action)
```

Adds a singleton [SecurityCenterSettingsServiceClient](/dotnet/docs/reference/Google.Cloud.SecurityCenter.Settings.V1Beta1/latest/Google.Cloud.SecurityCenter.Settings.V1Beta1.SecurityCenterSettingsServiceClient) to `services`.

**Parameters**

**Name**

**Description**

`services`

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`  

The service collection to add the client to. The services are used to configure the client when requested.

`action`

`[Action](https://learn.microsoft.com/dotnet/api/system.action-2)System.IServiceProvider[SecurityCenterSettingsServiceClientBuilder](/dotnet/docs/reference/Google.Cloud.SecurityCenter.Settings.V1Beta1/latest/Google.Cloud.SecurityCenter.Settings.V1Beta1.SecurityCenterSettingsServiceClientBuilder)`  

An optional action to invoke on the client builder. This is invoked before services from `services` are used.

**Returns**

**Type**

**Description**

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
