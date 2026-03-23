-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class SearchHashesResponse.Types.ThreatHash (2.0.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.0.0keyboard\_arrow\_down

-   [2.9.0 (latest)](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/latest/Google.Cloud.WebRisk.V1.SearchHashesResponse.Types.ThreatHash)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/2.8.0/Google.Cloud.WebRisk.V1.SearchHashesResponse.Types.ThreatHash)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/2.7.0/Google.Cloud.WebRisk.V1.SearchHashesResponse.Types.ThreatHash)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/2.6.0/Google.Cloud.WebRisk.V1.SearchHashesResponse.Types.ThreatHash)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/2.5.0/Google.Cloud.WebRisk.V1.SearchHashesResponse.Types.ThreatHash)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/2.4.0/Google.Cloud.WebRisk.V1.SearchHashesResponse.Types.ThreatHash)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/2.3.0/Google.Cloud.WebRisk.V1.SearchHashesResponse.Types.ThreatHash)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/2.2.0/Google.Cloud.WebRisk.V1.SearchHashesResponse.Types.ThreatHash)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/2.1.0/Google.Cloud.WebRisk.V1.SearchHashesResponse.Types.ThreatHash)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/2.0.0/Google.Cloud.WebRisk.V1.SearchHashesResponse.Types.ThreatHash)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/1.3.0/Google.Cloud.WebRisk.V1.SearchHashesResponse.Types.ThreatHash)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/1.2.0/Google.Cloud.WebRisk.V1.SearchHashesResponse.Types.ThreatHash)

```
public sealed class ThreatHash : IMessage<SearchHashesResponse.Types.ThreatHash>, IEquatable<SearchHashesResponse.Types.ThreatHash>, IDeepCloneable<SearchHashesResponse.Types.ThreatHash>, IBufferMessage, IMessage
```

Contains threat information on a matching hash.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> SearchHashesResponse.Types.ThreatHash

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[SearchHashesResponse.Types.ThreatHash](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/2.0.0/Google.Cloud.WebRisk.V1.SearchHashesResponse.Types.ThreatHash)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[SearchHashesResponse.Types.ThreatHash](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/2.0.0/Google.Cloud.WebRisk.V1.SearchHashesResponse.Types.ThreatHash)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[SearchHashesResponse.Types.ThreatHash](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/2.0.0/Google.Cloud.WebRisk.V1.SearchHashesResponse.Types.ThreatHash)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.WebRisk.V1](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/2.0.0/Google.Cloud.WebRisk.V1)

## Assembly

Google.Cloud.WebRisk.V1.dll

## Constructors

### ThreatHash()

```
public ThreatHash()
```

### ThreatHash(SearchHashesResponse.Types.ThreatHash)

```
public ThreatHash(SearchHashesResponse.Types.ThreatHash other)
```

**Parameter**

**Name**

**Description**

`other`

`[SearchHashesResponse.Types.ThreatHash](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/2.0.0/Google.Cloud.WebRisk.V1.SearchHashesResponse.Types.ThreatHash)`  

## Properties

### ExpireTime

```
public Timestamp ExpireTime { get; set; }
```

The cache lifetime for the returned match. Clients must not cache this response past this timestamp to avoid false positives.

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

### Hash

```
public ByteString Hash { get; set; }
```

A 32 byte SHA256 hash. This field is in binary format. For JSON requests, hashes are base64-encoded.

**Property Value**

**Type**

**Description**

`[ByteString](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.ByteString.html)`

### ThreatTypes

```
public RepeatedField<ThreatType> ThreatTypes { get; }
```

The ThreatList this threat belongs to. This must contain at least one entry.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[ThreatType](/dotnet/docs/reference/Google.Cloud.WebRisk.V1/2.0.0/Google.Cloud.WebRisk.V1.ThreatType)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
