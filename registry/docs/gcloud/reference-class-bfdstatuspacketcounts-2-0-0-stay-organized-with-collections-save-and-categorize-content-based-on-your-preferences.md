-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class BfdStatusPacketCounts (2.0.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class BfdStatusPacketCounts : IMessage<BfdStatusPacketCounts>, IEquatable<BfdStatusPacketCounts>, IDeepCloneable<BfdStatusPacketCounts>, IBufferMessage, IMessage
```

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> BfdStatusPacketCounts

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[BfdStatusPacketCounts](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.BfdStatusPacketCounts)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[BfdStatusPacketCounts](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.BfdStatusPacketCounts)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[BfdStatusPacketCounts](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.BfdStatusPacketCounts)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

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

### BfdStatusPacketCounts()

```
public BfdStatusPacketCounts()
```

### BfdStatusPacketCounts(BfdStatusPacketCounts)

```
public BfdStatusPacketCounts(BfdStatusPacketCounts other)
```

**Parameter**

**Name**

**Description**

`other`

`[BfdStatusPacketCounts](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.0.0/Google.Cloud.Compute.V1.BfdStatusPacketCounts)`  

## Properties

### HasNumRx

```
public bool HasNumRx { get; }
```

Gets whether the "num\_rx" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasNumRxRejected

```
public bool HasNumRxRejected { get; }
```

Gets whether the "num\_rx\_rejected" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasNumRxSuccessful

```
public bool HasNumRxSuccessful { get; }
```

Gets whether the "num\_rx\_successful" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasNumTx

```
public bool HasNumTx { get; }
```

Gets whether the "num\_tx" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### NumRx

```
public uint NumRx { get; set; }
```

Number of packets received since the beginning of the current BFD session.

**Property Value**

**Type**

**Description**

`[UInt32](https://learn.microsoft.com/dotnet/api/system.uint32)`

### NumRxRejected

```
public uint NumRxRejected { get; set; }
```

Number of packets received that were rejected because of errors since the beginning of the current BFD session.

**Property Value**

**Type**

**Description**

`[UInt32](https://learn.microsoft.com/dotnet/api/system.uint32)`

### NumRxSuccessful

```
public uint NumRxSuccessful { get; set; }
```

Number of packets received that were successfully processed since the beginning of the current BFD session.

**Property Value**

**Type**

**Description**

`[UInt32](https://learn.microsoft.com/dotnet/api/system.uint32)`

### NumTx

```
public uint NumTx { get; set; }
```

Number of packets transmitted since the beginning of the current BFD session.

**Property Value**

**Type**

**Description**

`[UInt32](https://learn.microsoft.com/dotnet/api/system.uint32)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
