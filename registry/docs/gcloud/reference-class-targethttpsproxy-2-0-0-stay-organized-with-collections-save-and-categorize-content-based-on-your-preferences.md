-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class TargetHttpsProxy (2.0.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class TargetHttpsProxy : IMessage<TargetHttpsProxy>, IEquatable<TargetHttpsProxy>, IDeepCloneable<TargetHttpsProxy>, IBufferMessage, IMessage
```

Represents a Target HTTPS Proxy resource. Google Compute Engine has two Target HTTPS Proxy resources: \* [Global](/compute/docs/reference/rest/v1/targetHttpsProxies) \* [Regional](/compute/docs/reference/rest/v1/regionTargetHttpsProxies) A target HTTPS proxy is a component of GCP HTTPS load balancers. \* targetHttpsProxies are used by external HTTPS load balancers. \* regionTargetHttpsProxies are used by internal HTTPS load balancers. Forwarding rules reference a target HTTPS proxy, and the target proxy then references a URL map. For more information, read Using Target Proxies and Forwarding rule concepts.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> TargetHttpsProxy

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[TargetHttpsProxy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.TargetHttpsProxy)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[TargetHttpsProxy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.TargetHttpsProxy)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[TargetHttpsProxy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.TargetHttpsProxy)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Constructors

### TargetHttpsProxy()

```
public TargetHttpsProxy()
```

### TargetHttpsProxy(TargetHttpsProxy)

```
public TargetHttpsProxy(TargetHttpsProxy other)
```

**Parameter**

**Name**

**Description**

`other`

`[TargetHttpsProxy](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.TargetHttpsProxy)`  

## Properties

### AuthorizationPolicy

```
public string AuthorizationPolicy { get; set; }
```

Optional. A URL referring to a networksecurity.AuthorizationPolicy resource that describes how the proxy should authorize inbound traffic. If left blank, access will not be restricted by an authorization policy. Refer to the AuthorizationPolicy resource for additional details. authorizationPolicy only applies to a global TargetHttpsProxy attached to globalForwardingRules with the loadBalancingScheme set to INTERNAL\_SELF\_MANAGED. Note: This field currently has no impact.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### CertificateMap

```
public string CertificateMap { get; set; }
```

URL of a certificate map that identifies a certificate map associated with the given target proxy. This field can only be set for global target proxies. If set, sslCertificates will be ignored.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### CreationTimestamp

```
public string CreationTimestamp { get; set; }
```

\[Output Only\] Creation timestamp in RFC3339 text format.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Description

```
public string Description { get; set; }
```

An optional description of this resource. Provide this property when you create the resource.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Fingerprint

```
public string Fingerprint { get; set; }
```

Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a TargetHttpsProxy. An up-to-date fingerprint must be provided in order to patch the TargetHttpsProxy; otherwise, the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve the TargetHttpsProxy.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### HasAuthorizationPolicy

```
public bool HasAuthorizationPolicy { get; }
```

Gets whether the "authorization\_policy" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasCertificateMap

```
public bool HasCertificateMap { get; }
```

Gets whether the "certificate\_map" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasCreationTimestamp

```
public bool HasCreationTimestamp { get; }
```

Gets whether the "creation\_timestamp" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasDescription

```
public bool HasDescription { get; }
```

Gets whether the "description" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasFingerprint

```
public bool HasFingerprint { get; }
```

Gets whether the "fingerprint" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasId

```
public bool HasId { get; }
```

Gets whether the "id" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasKind

```
public bool HasKind { get; }
```

Gets whether the "kind" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasName

```
public bool HasName { get; }
```

Gets whether the "name" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasProxyBind

```
public bool HasProxyBind { get; }
```

Gets whether the "proxy\_bind" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasQuicOverride

```
public bool HasQuicOverride { get; }
```

Gets whether the "quic\_override" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasRegion

```
public bool HasRegion { get; }
```

Gets whether the "region" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasSelfLink

```
public bool HasSelfLink { get; }
```

Gets whether the "self\_link" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasServerTlsPolicy

```
public bool HasServerTlsPolicy { get; }
```

Gets whether the "server\_tls\_policy" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasSslPolicy

```
public bool HasSslPolicy { get; }
```

Gets whether the "ssl\_policy" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasUrlMap

```
public bool HasUrlMap { get; }
```

Gets whether the "url\_map" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### Id

```
public ulong Id { get; set; }
```

\[Output Only\] The unique identifier for the resource. This identifier is defined by the server.

**Property Value**

**Type**

**Description**

`[UInt64](https://learn.microsoft.com/dotnet/api/system.uint64)`

### Kind

```
public string Kind { get; set; }
```

\[Output Only\] Type of resource. Always compute#targetHttpsProxy for target HTTPS proxies.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Name

```
public string Name { get; set; }
```

Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### ProxyBind

```
public bool ProxyBind { get; set; }
```

This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL\_SELF\_MANAGED. When this field is set to true, Envoy proxies set up inbound traffic interception and bind to the IP address and port specified in the forwarding rule. This is generally useful when using Traffic Director to configure Envoy as a gateway or middle proxy (in other words, not a sidecar proxy). The Envoy proxy listens for inbound requests and handles requests when it receives them. The default is false.

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### QuicOverride

```
public string QuicOverride { get; set; }
```

Specifies the QUIC override policy for this TargetHttpsProxy resource. This setting determines whether the load balancer attempts to negotiate QUIC with clients. You can specify NONE, ENABLE, or DISABLE. - When quic-override is set to NONE, Google manages whether QUIC is used. - When quic-override is set to ENABLE, the load balancer uses QUIC when possible. - When quic-override is set to DISABLE, the load balancer doesn't use QUIC. - If the quic-override flag is not specified, NONE is implied. Check the QuicOverride enum for the list of possible values.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Region

```
public string Region { get; set; }
```

\[Output Only\] URL of the region where the regional TargetHttpsProxy resides. This field is not applicable to global TargetHttpsProxies.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### SelfLink

```
public string SelfLink { get; set; }
```

\[Output Only\] Server-defined URL for the resource.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### ServerTlsPolicy

```
public string ServerTlsPolicy { get; set; }
```

Optional. A URL referring to a networksecurity.ServerTlsPolicy resource that describes how the proxy should authenticate inbound traffic. serverTlsPolicy only applies to a global TargetHttpsProxy attached to globalForwardingRules with the loadBalancingScheme set to INTERNAL\_SELF\_MANAGED. If left blank, communications are not encrypted. Note: This field currently has no impact.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### SslCertificates

```
public RepeatedField<string> SslCertificates { get; }
```

URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer. At least one SSL certificate must be specified. Currently, you may specify up to 15 SSL certificates. sslCertificates do not apply when the load balancing scheme is set to INTERNAL\_SELF\_MANAGED.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[String](https://learn.microsoft.com/dotnet/api/system.string)>`

### SslPolicy

```
public string SslPolicy { get; set; }
```

URL of SslPolicy resource that will be associated with the TargetHttpsProxy resource. If not set, the TargetHttpsProxy resource has no SSL policy configured.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### UrlMap

```
public string UrlMap { get; set; }
```

A fully-qualified or valid partial URL to the UrlMap resource that defines the mapping from URL to the BackendService. For example, the following are all valid URLs for specifying a URL map: - [https://www.googleapis.compute/v1/projects/project/global/urlMaps/](https://www.googleapis.compute/v1/projects/project/global/urlMaps/) url-map - projects/project/global/urlMaps/url-map - global/urlMaps/url-map

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
