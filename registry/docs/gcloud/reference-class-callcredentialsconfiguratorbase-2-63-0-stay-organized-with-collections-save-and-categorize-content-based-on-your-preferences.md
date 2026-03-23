-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class CallCredentialsConfiguratorBase (2.63.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.63.0keyboard\_arrow\_down

-   [2.66.0 (latest)](/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallCredentialsConfiguratorBase)
-   [2.63.0](/dotnet/docs/reference/Grpc.Core/2.63.0/Grpc.Core.CallCredentialsConfiguratorBase)
-   [2.48.0](/dotnet/docs/reference/Grpc.Core/2.48.0/Grpc.Core.CallCredentialsConfiguratorBase)

```
public abstract class CallCredentialsConfiguratorBase
```

Base class for objects that can consume configuration from `CallCredentials` objects. Note: experimental API that can change or be removed without any prior notice.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> CallCredentialsConfiguratorBase

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals\(system-object\))

[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals\(system-object-system-object\))

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Grpc.Core](/dotnet/docs/reference/Grpc.Core/2.63.0/Grpc.Core)

## Assembly

Grpc.Core.Api.dll

## Methods

### SetAsyncAuthInterceptorCredentials(object?, AsyncAuthInterceptor)

```
public abstract void SetAsyncAuthInterceptorCredentials(object? state, AsyncAuthInterceptor interceptor)
```

Consumes configuration for call credentials created from `AsyncAuthInterceptor`

**Parameters**

**Name**

**Description**

`state`

`[object](https://learn.microsoft.com/dotnet/api/system.object)`  

`interceptor`

`[AsyncAuthInterceptor](/dotnet/docs/reference/Grpc.Core/2.63.0/Grpc.Core.AsyncAuthInterceptor)`  

### SetCompositeCredentials(object?, IReadOnlyList<CallCredentials>)

```
public abstract void SetCompositeCredentials(object? state, IReadOnlyList<CallCredentials> credentials)
```

Consumes configuration for composite call credentials.

**Parameters**

**Name**

**Description**

`state`

`[object](https://learn.microsoft.com/dotnet/api/system.object)`  

`credentials`

`[IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)[CallCredentials](/dotnet/docs/reference/Grpc.Core/2.63.0/Grpc.Core.CallCredentials)`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
