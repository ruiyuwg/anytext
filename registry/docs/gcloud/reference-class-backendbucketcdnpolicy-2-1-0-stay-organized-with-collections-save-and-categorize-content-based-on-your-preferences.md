-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class BackendBucketCdnPolicy (2.1.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class BackendBucketCdnPolicy : IMessage<BackendBucketCdnPolicy>, IEquatable<BackendBucketCdnPolicy>, IDeepCloneable<BackendBucketCdnPolicy>, IBufferMessage, IMessage
```

Message containing Cloud CDN configuration for a backend bucket.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> BackendBucketCdnPolicy

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[BackendBucketCdnPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.BackendBucketCdnPolicy)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[BackendBucketCdnPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.BackendBucketCdnPolicy)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[BackendBucketCdnPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.BackendBucketCdnPolicy)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Constructors

### BackendBucketCdnPolicy()

```
public BackendBucketCdnPolicy()
```

### BackendBucketCdnPolicy(BackendBucketCdnPolicy)

```
public BackendBucketCdnPolicy(BackendBucketCdnPolicy other)
```

**Parameter**

**Name**

**Description**

`other`

`[BackendBucketCdnPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.BackendBucketCdnPolicy)`  

## Properties

### BypassCacheOnRequestHeaders

```
public RepeatedField<BackendBucketCdnPolicyBypassCacheOnRequestHeader> BypassCacheOnRequestHeaders { get; }
```

Bypass the cache when the specified request headers are matched - e.g. Pragma or Authorization headers. Up to 5 headers can be specified. The cache is bypassed for all cdnPolicy.cacheMode settings.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[BackendBucketCdnPolicyBypassCacheOnRequestHeader](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.BackendBucketCdnPolicyBypassCacheOnRequestHeader)>`

### CacheKeyPolicy

```
public BackendBucketCdnPolicyCacheKeyPolicy CacheKeyPolicy { get; set; }
```

The CacheKeyPolicy for this CdnPolicy.

**Property Value**

**Type**

**Description**

`[BackendBucketCdnPolicyCacheKeyPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.BackendBucketCdnPolicyCacheKeyPolicy)`

### CacheMode

```
public string CacheMode { get; set; }
```

Specifies the cache setting for all responses from this backend. The possible values are: USE\_ORIGIN\_HEADERS Requires the origin to set valid caching headers to cache content. Responses without these headers will not be cached at Google's edge, and will require a full trip to the origin on every request, potentially impacting performance and increasing load on the origin server. FORCE\_CACHE\_ALL Cache all content, ignoring any "private", "no-store" or "no-cache" directives in Cache-Control response headers. Warning: this may result in Cloud CDN caching private, per-user (user identifiable) content. CACHE\_ALL\_STATIC Automatically cache static content, including common image formats, media (video and audio), and web assets (JavaScript and CSS). Requests and responses that are marked as uncacheable, as well as dynamic content (including HTML), will not be cached. Check the CacheMode enum for the list of possible values.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### ClientTtl

```
public int ClientTtl { get; set; }
```

Specifies a separate client (e.g. browser client) maximum TTL. This is used to clamp the max-age (or Expires) value sent to the client. With FORCE\_CACHE\_ALL, the lesser of client\_ttl and default\_ttl is used for the response max-age directive, along with a "public" directive. For cacheable content in CACHE\_ALL\_STATIC mode, client\_ttl clamps the max-age from the origin (if specified), or else sets the response max-age directive to the lesser of the client\_ttl and default\_ttl, and also ensures a "public" cache-control directive is present. If a client TTL is not specified, a default value (1 hour) will be used. The maximum allowed value is 31,622,400s (1 year).

**Property Value**

**Type**

**Description**

`[Int32](https://learn.microsoft.com/dotnet/api/system.int32)`

### DefaultTtl

```
public int DefaultTtl { get; set; }
```

Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age). Setting a TTL of "0" means "always revalidate". The value of defaultTTL cannot be set to a value greater than that of maxTTL, but can be equal. When the cacheMode is set to FORCE\_CACHE\_ALL, the defaultTTL will overwrite the TTL set in all responses. The maximum allowed value is 31,622,400s (1 year), noting that infrequently accessed objects may be evicted from the cache before the defined TTL.

**Property Value**

**Type**

**Description**

`[Int32](https://learn.microsoft.com/dotnet/api/system.int32)`

### HasCacheMode

```
public bool HasCacheMode { get; }
```

Gets whether the "cache\_mode" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasClientTtl

```
public bool HasClientTtl { get; }
```

Gets whether the "client\_ttl" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasDefaultTtl

```
public bool HasDefaultTtl { get; }
```

Gets whether the "default\_ttl" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasMaxTtl

```
public bool HasMaxTtl { get; }
```

Gets whether the "max\_ttl" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasNegativeCaching

```
public bool HasNegativeCaching { get; }
```

Gets whether the "negative\_caching" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasRequestCoalescing

```
public bool HasRequestCoalescing { get; }
```

Gets whether the "request\_coalescing" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasServeWhileStale

```
public bool HasServeWhileStale { get; }
```

Gets whether the "serve\_while\_stale" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasSignedUrlCacheMaxAgeSec

```
public bool HasSignedUrlCacheMaxAgeSec { get; }
```

Gets whether the "signed\_url\_cache\_max\_age\_sec" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### MaxTtl

```
public int MaxTtl { get; set; }
```

Specifies the maximum allowed TTL for cached content served by this origin. Cache directives that attempt to set a max-age or s-maxage higher than this, or an Expires header more than maxTTL seconds in the future will be capped at the value of maxTTL, as if it were the value of an s-maxage Cache-Control directive. Headers sent to the client will not be modified. Setting a TTL of "0" means "always revalidate". The maximum allowed value is 31,622,400s (1 year), noting that infrequently accessed objects may be evicted from the cache before the defined TTL.

**Property Value**

**Type**

**Description**

`[Int32](https://learn.microsoft.com/dotnet/api/system.int32)`

### NegativeCaching

```
public bool NegativeCaching { get; set; }
```

Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects. This can reduce the load on your origin and improve end-user experience by reducing response latency. When the cache mode is set to CACHE\_ALL\_STATIC or USE\_ORIGIN\_HEADERS, negative caching applies to responses with the specified response code that lack any Cache-Control, Expires, or Pragma: no-cache directives. When the cache mode is set to FORCE\_CACHE\_ALL, negative caching applies to all responses with the specified response code, and override any caching headers. By default, Cloud CDN will apply the following default TTLs to these status codes: HTTP 300 (Multiple Choice), 301, 308 (Permanent Redirects): 10m HTTP 404 (Not Found), 410 (Gone), 451 (Unavailable For Legal Reasons): 120s HTTP 405 (Method Not Found), 421 (Misdirected Request), 501 (Not Implemented): 60s. These defaults can be overridden in negative\_caching\_policy.

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### NegativeCachingPolicy

```
public RepeatedField<BackendBucketCdnPolicyNegativeCachingPolicy> NegativeCachingPolicy { get; }
```

Sets a cache TTL for the specified HTTP status code. negative\_caching must be enabled to configure negative\_caching\_policy. Omitting the policy and leaving negative\_caching enabled will use Cloud CDN's default cache TTLs. Note that when specifying an explicit negative\_caching\_policy, you should take care to specify a cache TTL for all response codes that you wish to cache. Cloud CDN will not apply any default negative caching when a policy exists.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[BackendBucketCdnPolicyNegativeCachingPolicy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.1.0/Google.Cloud.Compute.V1.BackendBucketCdnPolicyNegativeCachingPolicy)>`

### RequestCoalescing

```
public bool RequestCoalescing { get; set; }
```

If true then Cloud CDN will combine multiple concurrent cache fill requests into a small number of requests to the origin.

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### ServeWhileStale

```
public int ServeWhileStale { get; set; }
```

Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache. This setting defines the default "max-stale" duration for any cached responses that do not specify a max-stale directive. Stale responses that exceed the TTL configured here will not be served. The default limit (max-stale) is 86400s (1 day), which will allow stale content to be served up to this limit beyond the max-age (or s-max-age) of a cached response. The maximum allowed value is 604800 (1 week). Set this to zero (0) to disable serve-while-stale.

**Property Value**

**Type**

**Description**

`[Int32](https://learn.microsoft.com/dotnet/api/system.int32)`

### SignedUrlCacheMaxAgeSec

```
public long SignedUrlCacheMaxAgeSec { get; set; }
```

Maximum number of seconds the response to a signed URL request will be considered fresh. After this time period, the response will be revalidated before being served. Defaults to 1hr (3600s). When serving responses to signed URL requests, Cloud CDN will internally behave as though all responses from this backend had a "Cache-Control: public, max-age=\[TTL\]" header, regardless of any existing Cache-Control header. The actual headers served in responses will not be altered.

**Property Value**

**Type**

**Description**

`[Int64](https://learn.microsoft.com/dotnet/api/system.int64)`

### SignedUrlKeyNames

```
public RepeatedField<string> SignedUrlKeyNames { get; }
```

\[Output Only\] Names of the keys for signing request URLs.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[String](https://learn.microsoft.com/dotnet/api/system.string)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
