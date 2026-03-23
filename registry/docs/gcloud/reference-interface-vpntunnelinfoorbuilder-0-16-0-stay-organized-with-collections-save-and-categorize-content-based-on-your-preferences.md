-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface VpnTunnelInfoOrBuilder (0.16.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [0.16.0 (latest)](/java/docs/reference/google-cloudevent-types/latest/com.google.events.cloud.networkmanagement.v1.VpnTunnelInfoOrBuilder)
-   [0.15.0](/java/docs/reference/google-cloudevent-types/0.15.0/com.google.events.cloud.networkmanagement.v1.VpnTunnelInfoOrBuilder)
-   [0.14.1](/java/docs/reference/google-cloudevent-types/0.14.1/com.google.events.cloud.networkmanagement.v1.VpnTunnelInfoOrBuilder)

```
public interface VpnTunnelInfoOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getDisplayName()

```
public abstract String getDisplayName()
```

Name of a VPN tunnel.

`string display_name = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The displayName.

### getDisplayNameBytes()

```
public abstract ByteString getDisplayNameBytes()
```

Name of a VPN tunnel.

`string display_name = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for displayName.

### getNetworkUri()

```
public abstract String getNetworkUri()
```

URI of a Compute Engine network where the VPN tunnel is configured.

`string network_uri = 7;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The networkUri.

### getNetworkUriBytes()

```
public abstract ByteString getNetworkUriBytes()
```

URI of a Compute Engine network where the VPN tunnel is configured.

`string network_uri = 7;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for networkUri.

### getRegion()

```
public abstract String getRegion()
```

Name of a Google Cloud region where this VPN tunnel is configured.

`string region = 8;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The region.

### getRegionBytes()

```
public abstract ByteString getRegionBytes()
```

Name of a Google Cloud region where this VPN tunnel is configured.

`string region = 8;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for region.

### getRemoteGateway()

```
public abstract String getRemoteGateway()
```

URI of a VPN gateway at remote end of the tunnel.

`string remote_gateway = 4;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The remoteGateway.

### getRemoteGatewayBytes()

```
public abstract ByteString getRemoteGatewayBytes()
```

URI of a VPN gateway at remote end of the tunnel.

`string remote_gateway = 4;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for remoteGateway.

### getRemoteGatewayIp()

```
public abstract String getRemoteGatewayIp()
```

Remote VPN gateway's IP address.

`string remote_gateway_ip = 5;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The remoteGatewayIp.

### getRemoteGatewayIpBytes()

```
public abstract ByteString getRemoteGatewayIpBytes()
```

Remote VPN gateway's IP address.

`string remote_gateway_ip = 5;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for remoteGatewayIp.

### getRoutingType()

```
public abstract VpnTunnelInfo.RoutingType getRoutingType()
```

Type of the routing policy.

`.google.events.cloud.networkmanagement.v1.VpnTunnelInfo.RoutingType routing_type = 9;`

**Returns**

**Type**

**Description**

`[VpnTunnelInfo.RoutingType](/java/docs/reference/google-cloudevent-types/latest/com.google.events.cloud.networkmanagement.v1.VpnTunnelInfo.RoutingType)`

The routingType.

### getRoutingTypeValue()

```
public abstract int getRoutingTypeValue()
```

Type of the routing policy.

`.google.events.cloud.networkmanagement.v1.VpnTunnelInfo.RoutingType routing_type = 9;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for routingType.

### getSourceGateway()

```
public abstract String getSourceGateway()
```

URI of the VPN gateway at local end of the tunnel.

`string source_gateway = 3;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The sourceGateway.

### getSourceGatewayBytes()

```
public abstract ByteString getSourceGatewayBytes()
```

URI of the VPN gateway at local end of the tunnel.

`string source_gateway = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for sourceGateway.

### getSourceGatewayIp()

```
public abstract String getSourceGatewayIp()
```

Local VPN gateway's IP address.

`string source_gateway_ip = 6;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The sourceGatewayIp.

### getSourceGatewayIpBytes()

```
public abstract ByteString getSourceGatewayIpBytes()
```

Local VPN gateway's IP address.

`string source_gateway_ip = 6;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for sourceGatewayIp.

### getUri()

```
public abstract String getUri()
```

URI of a VPN tunnel.

`string uri = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The uri.

### getUriBytes()

```
public abstract ByteString getUriBytes()
```

URI of a VPN tunnel.

`string uri = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for uri.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
