-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface PacketType.TypeDescriptorOrBuilder (0.6.0) Stay organized with collections Save and categorize content based on your preferences.

0.44.0 (latest) 0.42.0 0.40.0 0.39.0 0.37.0 0.35.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.27.0 0.25.0 0.24.0 0.21.0 0.20.0 0.19.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public static interface PacketType.TypeDescriptorOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getGstreamerBufferDescriptor()

```
public abstract GstreamerBufferDescriptor getGstreamerBufferDescriptor()
```

GstreamerBufferDescriptor is the descriptor for gstreamer buffer type.

`.google.cloud.visionai.v1.GstreamerBufferDescriptor gstreamer_buffer_descriptor = 2;`

**Returns**

**Type**

**Description**

`[GstreamerBufferDescriptor](/java/docs/reference/google-cloud-visionai/0.6.0/com.google.cloud.visionai.v1.GstreamerBufferDescriptor)`

The gstreamerBufferDescriptor.

### getGstreamerBufferDescriptorOrBuilder()

```
public abstract GstreamerBufferDescriptorOrBuilder getGstreamerBufferDescriptorOrBuilder()
```

GstreamerBufferDescriptor is the descriptor for gstreamer buffer type.

`.google.cloud.visionai.v1.GstreamerBufferDescriptor gstreamer_buffer_descriptor = 2;`

**Returns**

**Type**

**Description**

`[GstreamerBufferDescriptorOrBuilder](/java/docs/reference/google-cloud-visionai/0.6.0/com.google.cloud.visionai.v1.GstreamerBufferDescriptorOrBuilder)`

### getRawImageDescriptor()

```
public abstract RawImageDescriptor getRawImageDescriptor()
```

RawImageDescriptor is the descriptor for the raw image type.

`.google.cloud.visionai.v1.RawImageDescriptor raw_image_descriptor = 3;`

**Returns**

**Type**

**Description**

`[RawImageDescriptor](/java/docs/reference/google-cloud-visionai/0.6.0/com.google.cloud.visionai.v1.RawImageDescriptor)`

The rawImageDescriptor.

### getRawImageDescriptorOrBuilder()

```
public abstract RawImageDescriptorOrBuilder getRawImageDescriptorOrBuilder()
```

RawImageDescriptor is the descriptor for the raw image type.

`.google.cloud.visionai.v1.RawImageDescriptor raw_image_descriptor = 3;`

**Returns**

**Type**

**Description**

`[RawImageDescriptorOrBuilder](/java/docs/reference/google-cloud-visionai/0.6.0/com.google.cloud.visionai.v1.RawImageDescriptorOrBuilder)`

### getType()

```
public abstract String getType()
```

The type of the packet. Its possible values is codec dependent.

The fully qualified type name is always the concatenation of the value in `type_class` together with the value in `type`, separated by a '/'.

Note that specific codecs can define their own type hierarchy, and so the type string here can in fact be separated by multiple '/'s of its own.

Please see the open source SDK for specific codec documentation.

`string type = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The type.

### getTypeBytes()

```
public abstract ByteString getTypeBytes()
```

The type of the packet. Its possible values is codec dependent.

The fully qualified type name is always the concatenation of the value in `type_class` together with the value in `type`, separated by a '/'.

Note that specific codecs can define their own type hierarchy, and so the type string here can in fact be separated by multiple '/'s of its own.

Please see the open source SDK for specific codec documentation.

`string type = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for type.

### getTypeDetailsCase()

```
public abstract PacketType.TypeDescriptor.TypeDetailsCase getTypeDetailsCase()
```

**Returns**

**Type**

**Description**

`[PacketType.TypeDescriptor.TypeDetailsCase](/java/docs/reference/google-cloud-visionai/0.6.0/com.google.cloud.visionai.v1.PacketType.TypeDescriptor.TypeDetailsCase)`

### hasGstreamerBufferDescriptor()

```
public abstract boolean hasGstreamerBufferDescriptor()
```

GstreamerBufferDescriptor is the descriptor for gstreamer buffer type.

`.google.cloud.visionai.v1.GstreamerBufferDescriptor gstreamer_buffer_descriptor = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the gstreamerBufferDescriptor field is set.

### hasRawImageDescriptor()

```
public abstract boolean hasRawImageDescriptor()
```

RawImageDescriptor is the descriptor for the raw image type.

`.google.cloud.visionai.v1.RawImageDescriptor raw_image_descriptor = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the rawImageDescriptor field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
