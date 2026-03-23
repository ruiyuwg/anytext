-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface InstanceInfoOrBuilder (1.47.0) Stay organized with collections Save and categorize content based on your preferences.

1.88.0 (latest) 1.86.0 1.84.0 1.83.0 1.81.0 1.79.0 1.77.0 1.76.0 1.75.0 1.74.0 1.73.0 1.71.0 1.69.0 1.68.0 1.65.0 1.64.0 1.63.0 1.61.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.25.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.1.10

```
public interface InstanceInfoOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getDisplayName()

```
public abstract String getDisplayName()
```

Name of a Compute Engine instance.

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

Name of a Compute Engine instance.

`string display_name = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for displayName.

### getExternalIp()

```
public abstract String getExternalIp()
```

External IP address of the network interface.

`string external_ip = 6;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The externalIp.

### getExternalIpBytes()

```
public abstract ByteString getExternalIpBytes()
```

External IP address of the network interface.

`string external_ip = 6;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for externalIp.

### getInterface()

```
public abstract String getInterface()
```

Name of the network interface of a Compute Engine instance.

`string interface = 3;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The interface.

### getInterfaceBytes()

```
public abstract ByteString getInterfaceBytes()
```

Name of the network interface of a Compute Engine instance.

`string interface = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for interface.

### getInternalIp()

```
public abstract String getInternalIp()
```

Internal IP address of the network interface.

`string internal_ip = 5;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The internalIp.

### getInternalIpBytes()

```
public abstract ByteString getInternalIpBytes()
```

Internal IP address of the network interface.

`string internal_ip = 5;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for internalIp.

### getNetworkTags(int index)

```
public abstract String getNetworkTags(int index)
```

Network tags configured on the instance.

`repeated string network_tags = 7;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The networkTags at the given index.

### getNetworkTagsBytes(int index)

```
public abstract ByteString getNetworkTagsBytes(int index)
```

Network tags configured on the instance.

`repeated string network_tags = 7;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes of the networkTags at the given index.

### getNetworkTagsCount()

```
public abstract int getNetworkTagsCount()
```

Network tags configured on the instance.

`repeated string network_tags = 7;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of networkTags.

### getNetworkTagsList()

```
public abstract List<String> getNetworkTagsList()
```

Network tags configured on the instance.

`repeated string network_tags = 7;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the networkTags.

### getNetworkUri()

```
public abstract String getNetworkUri()
```

URI of a Compute Engine network.

`string network_uri = 4;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The networkUri.

### getNetworkUriBytes()

```
public abstract ByteString getNetworkUriBytes()
```

URI of a Compute Engine network.

`string network_uri = 4;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for networkUri.

### getServiceAccount() (deprecated)

```
public abstract String getServiceAccount()
```

**Deprecated.** _google.cloud.networkmanagement.v1beta1.InstanceInfo.service\_account is deprecated. See google/cloud/networkmanagement/v1beta1/trace.proto;l=303_

Service account authorized for the instance.

`string service_account = 8 [deprecated = true];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The serviceAccount.

### getServiceAccountBytes() (deprecated)

```
public abstract ByteString getServiceAccountBytes()
```

**Deprecated.** _google.cloud.networkmanagement.v1beta1.InstanceInfo.service\_account is deprecated. See google/cloud/networkmanagement/v1beta1/trace.proto;l=303_

Service account authorized for the instance.

`string service_account = 8 [deprecated = true];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for serviceAccount.

### getUri()

```
public abstract String getUri()
```

URI of a Compute Engine instance.

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

URI of a Compute Engine instance.

`string uri = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for uri.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
