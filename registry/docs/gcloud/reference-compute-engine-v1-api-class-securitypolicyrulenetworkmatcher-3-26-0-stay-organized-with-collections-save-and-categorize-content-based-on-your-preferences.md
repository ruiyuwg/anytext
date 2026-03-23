-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class SecurityPolicyRuleNetworkMatcher (3.26.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class SecurityPolicyRuleNetworkMatcher : IMessage<SecurityPolicyRuleNetworkMatcher>, IEquatable<SecurityPolicyRuleNetworkMatcher>, IDeepCloneable<SecurityPolicyRuleNetworkMatcher>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Compute Engine v1 API class SecurityPolicyRuleNetworkMatcher.

Represents a match condition that incoming network traffic is evaluated against.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> SecurityPolicyRuleNetworkMatcher

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[SecurityPolicyRuleNetworkMatcher](/dotnet/docs/reference/Google.Cloud.Compute.V1/latest/Google.Cloud.Compute.V1.SecurityPolicyRuleNetworkMatcher), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[SecurityPolicyRuleNetworkMatcher](/dotnet/docs/reference/Google.Cloud.Compute.V1/latest/Google.Cloud.Compute.V1.SecurityPolicyRuleNetworkMatcher), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[SecurityPolicyRuleNetworkMatcher](/dotnet/docs/reference/Google.Cloud.Compute.V1/latest/Google.Cloud.Compute.V1.SecurityPolicyRuleNetworkMatcher), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/latest/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Constructors

### SecurityPolicyRuleNetworkMatcher()

```
public SecurityPolicyRuleNetworkMatcher()
```

### SecurityPolicyRuleNetworkMatcher(SecurityPolicyRuleNetworkMatcher)

```
public SecurityPolicyRuleNetworkMatcher(SecurityPolicyRuleNetworkMatcher other)
```

**Parameter**

**Name**

**Description**

`other`

`[SecurityPolicyRuleNetworkMatcher](/dotnet/docs/reference/Google.Cloud.Compute.V1/latest/Google.Cloud.Compute.V1.SecurityPolicyRuleNetworkMatcher)`  

## Properties

### DestIpRanges

```
public RepeatedField<string> DestIpRanges { get; }
```

Destination IPv4/IPv6 addresses or CIDR prefixes, in standard text format.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### DestPorts

```
public RepeatedField<string> DestPorts { get; }
```

Destination port numbers for TCP/UDP/SCTP. Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### IpProtocols

```
public RepeatedField<string> IpProtocols { get; }
```

IPv4 protocol / IPv6 next header (after extension headers). Each element can be an 8-bit unsigned decimal number (e.g. "6"), range (e.g. "253-254"), or one of the following protocol names: "tcp", "udp", "icmp", "esp", "ah", "ipip", or "sctp".

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### SrcAsns

```
public RepeatedField<uint> SrcAsns { get; }
```

BGP Autonomous System Number associated with the source IP address.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[uint](https://learn.microsoft.com/dotnet/api/system.uint32)`

### SrcIpRanges

```
public RepeatedField<string> SrcIpRanges { get; }
```

Source IPv4/IPv6 addresses or CIDR prefixes, in standard text format.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### SrcPorts

```
public RepeatedField<string> SrcPorts { get; }
```

Source port numbers for TCP/UDP/SCTP. Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### SrcRegionCodes

```
public RepeatedField<string> SrcRegionCodes { get; }
```

Two-letter ISO 3166-1 alpha-2 country code associated with the source IP address.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### UserDefinedFields

```
public RepeatedField<SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch> UserDefinedFields { get; }
```

User-defined fields. Each element names a defined field and lists the matching values for that field.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch](/dotnet/docs/reference/Google.Cloud.Compute.V1/latest/Google.Cloud.Compute.V1.SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
