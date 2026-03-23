-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class TraceExtensions (4.4.0) Stay organized with collections Save and categorize content based on your preferences.

Version 4.4.0keyboard\_arrow\_down

-   [5.3.0 (latest)](/dotnet/docs/reference/Google.Cloud.Diagnostics.Common/latest/Google.Cloud.Diagnostics.Common.TraceExtensions)
-   [5.2.0](/dotnet/docs/reference/Google.Cloud.Diagnostics.Common/5.2.0/Google.Cloud.Diagnostics.Common.TraceExtensions)
-   [5.1.0](/dotnet/docs/reference/Google.Cloud.Diagnostics.Common/5.1.0/Google.Cloud.Diagnostics.Common.TraceExtensions)
-   [5.0.0](/dotnet/docs/reference/Google.Cloud.Diagnostics.Common/5.0.0/Google.Cloud.Diagnostics.Common.TraceExtensions)
-   [4.4.0](/dotnet/docs/reference/Google.Cloud.Diagnostics.Common/4.4.0/Google.Cloud.Diagnostics.Common.TraceExtensions)
-   [4.3.1](/dotnet/docs/reference/Google.Cloud.Diagnostics.Common/4.3.1/Google.Cloud.Diagnostics.Common.TraceExtensions)

```
public static class TraceExtensions
```

Extension methods for registering Google Cloud Trace for dependency injection.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> TraceExtensions

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Diagnostics.Common](/dotnet/docs/reference/Google.Cloud.Diagnostics.Common/4.4.0/Google.Cloud.Diagnostics.Common)

## Assembly

Google.Cloud.Diagnostics.Common.dll

## Methods

### AddGoogleTrace(IServiceCollection, TraceServiceOptions)

```
public static IServiceCollection AddGoogleTrace(this IServiceCollection services, TraceServiceOptions options = null)
```

Configures Google Cloud Trace for dependency injection.

**Parameters**

**Name**

**Description**

`services`

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`  

`options`

`[TraceServiceOptions](/dotnet/docs/reference/Google.Cloud.Diagnostics.Common/4.4.0/Google.Cloud.Diagnostics.Common.TraceServiceOptions)`  

**Returns**

**Type**

**Description**

`[IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
