-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class RouterBgpPeerBfd (2.15.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class RouterBgpPeerBfd : IMessage<RouterBgpPeerBfd>, IEquatable<RouterBgpPeerBfd>, IDeepCloneable<RouterBgpPeerBfd>, IBufferMessage, IMessage
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> RouterBgpPeerBfd

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[RouterBgpPeerBfd](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.RouterBgpPeerBfd), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[RouterBgpPeerBfd](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.RouterBgpPeerBfd), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[RouterBgpPeerBfd](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.RouterBgpPeerBfd), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Constructors

### RouterBgpPeerBfd()

```
public RouterBgpPeerBfd()
```

### RouterBgpPeerBfd(RouterBgpPeerBfd)

```
public RouterBgpPeerBfd(RouterBgpPeerBfd other)
```

**Parameter**

**Name**

**Description**

`other`

`[RouterBgpPeerBfd](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.RouterBgpPeerBfd)`  

## Properties

### HasMinReceiveInterval

```
public bool HasMinReceiveInterval { get; }
```

Gets whether the "min\_receive\_interval" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasMinTransmitInterval

```
public bool HasMinTransmitInterval { get; }
```

Gets whether the "min\_transmit\_interval" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasMultiplier

```
public bool HasMultiplier { get; }
```

Gets whether the "multiplier" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasSessionInitializationMode

```
public bool HasSessionInitializationMode { get; }
```

Gets whether the "session\_initialization\_mode" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### MinReceiveInterval

```
public uint MinReceiveInterval { get; set; }
```

The minimum interval, in milliseconds, between BFD control packets received from the peer router. The actual value is negotiated between the two routers and is equal to the greater of this value and the transmit interval of the other router. If set, this value must be between 1000 and 30000. The default is 1000.

**Property Value**

**Type**

**Description**

`[uint](https://learn.microsoft.com/dotnet/api/system.uint32)`

### MinTransmitInterval

```
public uint MinTransmitInterval { get; set; }
```

The minimum interval, in milliseconds, between BFD control packets transmitted to the peer router. The actual value is negotiated between the two routers and is equal to the greater of this value and the corresponding receive interval of the other router. If set, this value must be between 1000 and 30000. The default is 1000.

**Property Value**

**Type**

**Description**

`[uint](https://learn.microsoft.com/dotnet/api/system.uint32)`

### Multiplier

```
public uint Multiplier { get; set; }
```

The number of consecutive BFD packets that must be missed before BFD declares that a peer is unavailable. If set, the value must be a value between 5 and 16. The default is 5.

**Property Value**

**Type**

**Description**

`[uint](https://learn.microsoft.com/dotnet/api/system.uint32)`

### SessionInitializationMode

```
public string SessionInitializationMode { get; set; }
```

The BFD session initialization mode for this BGP peer. If set to ACTIVE, the Cloud Router will initiate the BFD session for this BGP peer. If set to PASSIVE, the Cloud Router will wait for the peer router to initiate the BFD session for this BGP peer. If set to DISABLED, BFD is disabled for this BGP peer. The default is DISABLED. Check the SessionInitializationMode enum for the list of possible values.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
