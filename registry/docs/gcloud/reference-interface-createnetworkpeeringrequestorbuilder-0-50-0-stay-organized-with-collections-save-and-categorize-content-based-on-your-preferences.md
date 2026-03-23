-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface CreateNetworkPeeringRequestOrBuilder (0.50.0) Stay organized with collections Save and categorize content based on your preferences.

0.81.0 (latest) 0.79.0 0.77.0 0.76.0 0.74.0 0.72.0 0.70.0 0.69.0 0.68.0 0.67.0 0.66.0 0.64.0 0.62.0 0.61.0 0.58.0 0.57.0 0.56.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.3.0 0.2.0 0.1.0

```
public interface CreateNetworkPeeringRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getNetworkPeering()

```
public abstract NetworkPeering getNetworkPeering()
```

Required. The initial description of the new network peering.

`.google.cloud.vmwareengine.v1.NetworkPeering network_peering = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[NetworkPeering](/java/docs/reference/google-cloud-vmwareengine/0.50.0/com.google.cloud.vmwareengine.v1.NetworkPeering)`

The networkPeering.

### getNetworkPeeringId()

```
public abstract String getNetworkPeeringId()
```

Required. The user-provided identifier of the new `NetworkPeering`. This identifier must be unique among `NetworkPeering` resources within the parent and becomes the final token in the name URI. The identifier must meet the following requirements:

-   Only contains 1-63 alphanumeric characters and hyphens
-   Begins with an alphabetical character
-   Ends with a non-hyphen character
-   Not formatted as a UUID
-   Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)

`string network_peering_id = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The networkPeeringId.

### getNetworkPeeringIdBytes()

```
public abstract ByteString getNetworkPeeringIdBytes()
```

Required. The user-provided identifier of the new `NetworkPeering`. This identifier must be unique among `NetworkPeering` resources within the parent and becomes the final token in the name URI. The identifier must meet the following requirements:

-   Only contains 1-63 alphanumeric characters and hyphens
-   Begins with an alphabetical character
-   Ends with a non-hyphen character
-   Not formatted as a UUID
-   Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)

`string network_peering_id = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for networkPeeringId.

### getNetworkPeeringOrBuilder()

```
public abstract NetworkPeeringOrBuilder getNetworkPeeringOrBuilder()
```

Required. The initial description of the new network peering.

`.google.cloud.vmwareengine.v1.NetworkPeering network_peering = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[NetworkPeeringOrBuilder](/java/docs/reference/google-cloud-vmwareengine/0.50.0/com.google.cloud.vmwareengine.v1.NetworkPeeringOrBuilder)`

### getParent()

```
public abstract String getParent()
```

Required. The resource name of the location to create the new network peering in. This value is always `global`, because `NetworkPeering` is a global resource. Resource names are schemeless URIs that follow the conventions in [https://cloud.google.com/apis/design/resource\_names](https://cloud.google.com/apis/design/resource_names). For example: `projects/my-project/locations/global`

`string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The parent.

### getParentBytes()

```
public abstract ByteString getParentBytes()
```

Required. The resource name of the location to create the new network peering in. This value is always `global`, because `NetworkPeering` is a global resource. Resource names are schemeless URIs that follow the conventions in [https://cloud.google.com/apis/design/resource\_names](https://cloud.google.com/apis/design/resource_names). For example: `projects/my-project/locations/global`

`string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for parent.

### getRequestId()

```
public abstract String getRequestId()
```

Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes.

For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments.

The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

`string request_id = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The requestId.

### getRequestIdBytes()

```
public abstract ByteString getRequestIdBytes()
```

Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes.

For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments.

The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

`string request_id = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for requestId.

### hasNetworkPeering()

```
public abstract boolean hasNetworkPeering()
```

Required. The initial description of the new network peering.

`.google.cloud.vmwareengine.v1.NetworkPeering network_peering = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the networkPeering field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
