-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class ChannelCredentials (2.48.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.48.0keyboard\_arrow\_down

-   [2.66.0 (latest)](/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ChannelCredentials)
-   [2.63.0](/dotnet/docs/reference/Grpc.Core/2.63.0/Grpc.Core.ChannelCredentials)
-   [2.48.0](/dotnet/docs/reference/Grpc.Core/2.48.0/Grpc.Core.ChannelCredentials)

```
public abstract class ChannelCredentials : object
```

Client-side channel credentials. Used for creation of a secure channel.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> ChannelCredentials

## Derived Types

[SslCredentials](/dotnet/docs/reference/Grpc.Core/2.48.0/Grpc.Core.SslCredentials)

## Namespace

[Grpc.Core](/dotnet/docs/reference/Grpc.Core/2.48.0/Grpc.Core)

## Assembly

Grpc.Core.Api.dll

## Constructors

### ChannelCredentials()

```
public ChannelCredentials()
```

Creates a new instance of channel credentials

## Properties

### Insecure

```
public static ChannelCredentials Insecure { get; }
```

Returns instance of credentials that provides no security and will result in creating an unsecure channel with no encryption whatsoever.

**Property Value**

**Type**

**Description**

`[ChannelCredentials](/dotnet/docs/reference/Grpc.Core/2.48.0/Grpc.Core.ChannelCredentials)`

### SecureSsl

```
public static ChannelCredentials SecureSsl { get; }
```

Returns instance of credentials that provides SSL security.

These credentials are the same as creating [SslCredentials](/dotnet/docs/reference/Grpc.Core/2.48.0/Grpc.Core.SslCredentials) without parameters. Apps that are using Grpc.Core can create [SslCredentials](/dotnet/docs/reference/Grpc.Core/2.48.0/Grpc.Core.SslCredentials) directly to customize the secure SSL credentials.

**Property Value**

**Type**

**Description**

`[ChannelCredentials](/dotnet/docs/reference/Grpc.Core/2.48.0/Grpc.Core.ChannelCredentials)`

## Methods

### Create(ChannelCredentials, CallCredentials)

```
public static ChannelCredentials Create(ChannelCredentials channelCredentials, CallCredentials callCredentials)
```

Creates a new instance of `ChannelCredentials` class by composing given channel credentials with call credentials.

**Parameters**

**Name**

**Description**

`channelCredentials`

`[ChannelCredentials](/dotnet/docs/reference/Grpc.Core/2.48.0/Grpc.Core.ChannelCredentials)`  

Channel credentials.

`callCredentials`

`[CallCredentials](/dotnet/docs/reference/Grpc.Core/2.48.0/Grpc.Core.CallCredentials)`  

Call credentials.

**Returns**

**Type**

**Description**

`[ChannelCredentials](/dotnet/docs/reference/Grpc.Core/2.48.0/Grpc.Core.ChannelCredentials)`

The new composite `ChannelCredentials`

### InternalPopulateConfiguration(ChannelCredentialsConfiguratorBase, Object)

```
public abstract void InternalPopulateConfiguration(ChannelCredentialsConfiguratorBase configurator, object state)
```

Populates channel credentials configurator with this instance's configuration. End users never need to invoke this method as it is part of internal implementation.

**Parameters**

**Name**

**Description**

`configurator`

`[ChannelCredentialsConfiguratorBase](/dotnet/docs/reference/Grpc.Core/2.48.0/Grpc.Core.ChannelCredentialsConfiguratorBase)`  

`state`

`[Object](https://learn.microsoft.com/dotnet/api/system.object)`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
