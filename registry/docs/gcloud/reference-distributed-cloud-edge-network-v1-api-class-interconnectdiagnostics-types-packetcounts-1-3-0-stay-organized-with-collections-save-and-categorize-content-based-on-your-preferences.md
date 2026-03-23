-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Distributed Cloud Edge Network v1 API - Class InterconnectDiagnostics.Types.PacketCounts (1.3.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.3.0keyboard\_arrow\_down

-   [1.6.0 (latest)](/dotnet/docs/reference/Google.Cloud.EdgeNetwork.V1/latest/Google.Cloud.EdgeNetwork.V1.InterconnectDiagnostics.Types.PacketCounts)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.EdgeNetwork.V1/1.5.0/Google.Cloud.EdgeNetwork.V1.InterconnectDiagnostics.Types.PacketCounts)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.EdgeNetwork.V1/1.4.0/Google.Cloud.EdgeNetwork.V1.InterconnectDiagnostics.Types.PacketCounts)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.EdgeNetwork.V1/1.3.0/Google.Cloud.EdgeNetwork.V1.InterconnectDiagnostics.Types.PacketCounts)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.EdgeNetwork.V1/1.2.0/Google.Cloud.EdgeNetwork.V1.InterconnectDiagnostics.Types.PacketCounts)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.EdgeNetwork.V1/1.1.0/Google.Cloud.EdgeNetwork.V1.InterconnectDiagnostics.Types.PacketCounts)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.EdgeNetwork.V1/1.0.0/Google.Cloud.EdgeNetwork.V1.InterconnectDiagnostics.Types.PacketCounts)

```
public sealed class InterconnectDiagnostics.Types.PacketCounts : IMessage<InterconnectDiagnostics.Types.PacketCounts>, IEquatable<InterconnectDiagnostics.Types.PacketCounts>, IDeepCloneable<InterconnectDiagnostics.Types.PacketCounts>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Distributed Cloud Edge Network v1 API class InterconnectDiagnostics.Types.PacketCounts.

Containing a collection of interface-related statistics objects.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> InterconnectDiagnostics.Types.PacketCounts

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[InterconnectDiagnostics](/dotnet/docs/reference/Google.Cloud.EdgeNetwork.V1/1.3.0/Google.Cloud.EdgeNetwork.V1.InterconnectDiagnostics)[Types](/dotnet/docs/reference/Google.Cloud.EdgeNetwork.V1/1.3.0/Google.Cloud.EdgeNetwork.V1.InterconnectDiagnostics.Types)[PacketCounts](/dotnet/docs/reference/Google.Cloud.EdgeNetwork.V1/1.3.0/Google.Cloud.EdgeNetwork.V1.InterconnectDiagnostics.Types.PacketCounts), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[InterconnectDiagnostics](/dotnet/docs/reference/Google.Cloud.EdgeNetwork.V1/1.3.0/Google.Cloud.EdgeNetwork.V1.InterconnectDiagnostics)[Types](/dotnet/docs/reference/Google.Cloud.EdgeNetwork.V1/1.3.0/Google.Cloud.EdgeNetwork.V1.InterconnectDiagnostics.Types)[PacketCounts](/dotnet/docs/reference/Google.Cloud.EdgeNetwork.V1/1.3.0/Google.Cloud.EdgeNetwork.V1.InterconnectDiagnostics.Types.PacketCounts), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[InterconnectDiagnostics](/dotnet/docs/reference/Google.Cloud.EdgeNetwork.V1/1.3.0/Google.Cloud.EdgeNetwork.V1.InterconnectDiagnostics)[Types](/dotnet/docs/reference/Google.Cloud.EdgeNetwork.V1/1.3.0/Google.Cloud.EdgeNetwork.V1.InterconnectDiagnostics.Types)[PacketCounts](/dotnet/docs/reference/Google.Cloud.EdgeNetwork.V1/1.3.0/Google.Cloud.EdgeNetwork.V1.InterconnectDiagnostics.Types.PacketCounts), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.EdgeNetwork.V1](/dotnet/docs/reference/Google.Cloud.EdgeNetwork.V1/1.3.0/Google.Cloud.EdgeNetwork.V1)

## Assembly

Google.Cloud.EdgeNetwork.V1.dll

## Constructors

### PacketCounts()

```
public PacketCounts()
```

### PacketCounts(PacketCounts)

```
public PacketCounts(InterconnectDiagnostics.Types.PacketCounts other)
```

**Parameter**

**Name**

**Description**

`other`

`[InterconnectDiagnostics](/dotnet/docs/reference/Google.Cloud.EdgeNetwork.V1/1.3.0/Google.Cloud.EdgeNetwork.V1.InterconnectDiagnostics)[Types](/dotnet/docs/reference/Google.Cloud.EdgeNetwork.V1/1.3.0/Google.Cloud.EdgeNetwork.V1.InterconnectDiagnostics.Types)[PacketCounts](/dotnet/docs/reference/Google.Cloud.EdgeNetwork.V1/1.3.0/Google.Cloud.EdgeNetwork.V1.InterconnectDiagnostics.Types.PacketCounts)`  

## Properties

### InboundDiscards

```
public long InboundDiscards { get; set; }
```

The number of inbound packets that were chosen to be discarded even though no errors had been detected to prevent their being deliverable.

**Property Value**

**Type**

**Description**

`[long](https://learn.microsoft.com/dotnet/api/system.int64)`

### InboundErrors

```
public long InboundErrors { get; set; }
```

The number of inbound packets that contained errors.

**Property Value**

**Type**

**Description**

`[long](https://learn.microsoft.com/dotnet/api/system.int64)`

### InboundUnicast

```
public long InboundUnicast { get; set; }
```

The number of packets that are delivered.

**Property Value**

**Type**

**Description**

`[long](https://learn.microsoft.com/dotnet/api/system.int64)`

### OutboundDiscards

```
public long OutboundDiscards { get; set; }
```

The number of outbound packets that were chosen to be discarded even though no errors had been detected to prevent their being transmitted.

**Property Value**

**Type**

**Description**

`[long](https://learn.microsoft.com/dotnet/api/system.int64)`

### OutboundErrors

```
public long OutboundErrors { get; set; }
```

The number of outbound packets that could not be transmitted because of errors.

**Property Value**

**Type**

**Description**

`[long](https://learn.microsoft.com/dotnet/api/system.int64)`

### OutboundUnicast

```
public long OutboundUnicast { get; set; }
```

The total number of packets that are requested be transmitted.

**Property Value**

**Type**

**Description**

`[long](https://learn.microsoft.com/dotnet/api/system.int64)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
