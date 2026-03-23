-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class CacheKeyPolicy (2.17.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class CacheKeyPolicy : IMessage<CacheKeyPolicy>, IEquatable<CacheKeyPolicy>, IDeepCloneable<CacheKeyPolicy>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Compute Engine v1 API class CacheKeyPolicy.

Message containing what to include in the cache key for a request for Cloud CDN.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> CacheKeyPolicy

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[CacheKeyPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.17.0/Google.Cloud.Compute.V1.CacheKeyPolicy), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[CacheKeyPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.17.0/Google.Cloud.Compute.V1.CacheKeyPolicy), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[CacheKeyPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.17.0/Google.Cloud.Compute.V1.CacheKeyPolicy), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.17.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Constructors

### CacheKeyPolicy()

```
public CacheKeyPolicy()
```

### CacheKeyPolicy(CacheKeyPolicy)

```
public CacheKeyPolicy(CacheKeyPolicy other)
```

**Parameter**

**Name**

**Description**

`other`

`[CacheKeyPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.17.0/Google.Cloud.Compute.V1.CacheKeyPolicy)`  

## Properties

### HasIncludeHost

```
public bool HasIncludeHost { get; }
```

Gets whether the "include\_host" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasIncludeProtocol

```
public bool HasIncludeProtocol { get; }
```

Gets whether the "include\_protocol" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasIncludeQueryString

```
public bool HasIncludeQueryString { get; }
```

Gets whether the "include\_query\_string" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### IncludeHost

```
public bool IncludeHost { get; set; }
```

If true, requests to different hosts will be cached separately.

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### IncludeHttpHeaders

```
public RepeatedField<string> IncludeHttpHeaders { get; }
```

Allows HTTP request headers (by name) to be used in the cache key.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### IncludeNamedCookies

```
public RepeatedField<string> IncludeNamedCookies { get; }
```

Allows HTTP cookies (by name) to be used in the cache key. The name=value pair will be used in the cache key Cloud CDN generates.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### IncludeProtocol

```
public bool IncludeProtocol { get; set; }
```

If true, http and https requests will be cached separately.

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### IncludeQueryString

```
public bool IncludeQueryString { get; set; }
```

If true, include query string parameters in the cache key according to query\_string\_whitelist and query\_string\_blacklist. If neither is set, the entire query string will be included. If false, the query string will be excluded from the cache key entirely.

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### QueryStringBlacklist

```
public RepeatedField<string> QueryStringBlacklist { get; }
```

Names of query string parameters to exclude in cache keys. All other parameters will be included. Either specify query\_string\_whitelist or query\_string\_blacklist, not both. '&' and '=' will be percent encoded and not treated as delimiters.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### QueryStringWhitelist

```
public RepeatedField<string> QueryStringWhitelist { get; }
```

Names of query string parameters to include in cache keys. All other parameters will be excluded. Either specify query\_string\_whitelist or query\_string\_blacklist, not both. '&' and '=' will be percent encoded and not treated as delimiters.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
