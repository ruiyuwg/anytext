-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface PubSubMessageOrBuilder (1.14.8) Stay organized with collections Save and categorize content based on your preferences.

1.16.2 (latest) 1.16.1 1.15.21 1.14.8 1.13.8 1.12.22 1.11.2 1.10.0 1.9.4 1.8.0 1.7.1 1.6.3 1.5.5 1.4.12

```
public interface PubSubMessageOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### containsAttributes(String key)

```
public abstract boolean containsAttributes(String key)
```

Optional attributes that can be used for message metadata/headers.

`map<string, .google.cloud.pubsublite.v1.AttributeValues> attributes = 3;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getAttributes() (deprecated)

```
public abstract Map<String,AttributeValues> getAttributes()
```

Use [#getAttributesMap()](/java/docs/reference/google-cloud-pubsublite/1.14.8/com.google.cloud.pubsublite.proto.PubSubMessageOrBuilder#com_google_cloud_pubsublite_proto_PubSubMessageOrBuilder_getAttributesMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[AttributeValues](/java/docs/reference/google-cloud-pubsublite/1.14.8/com.google.cloud.pubsublite.proto.AttributeValues)>`

### getAttributesCount()

```
public abstract int getAttributesCount()
```

Optional attributes that can be used for message metadata/headers.

`map<string, .google.cloud.pubsublite.v1.AttributeValues> attributes = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getAttributesMap()

```
public abstract Map<String,AttributeValues> getAttributesMap()
```

Optional attributes that can be used for message metadata/headers.

`map<string, .google.cloud.pubsublite.v1.AttributeValues> attributes = 3;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[AttributeValues](/java/docs/reference/google-cloud-pubsublite/1.14.8/com.google.cloud.pubsublite.proto.AttributeValues)>`

### getAttributesOrDefault(String key, AttributeValues defaultValue)

```
public abstract AttributeValues getAttributesOrDefault(String key, AttributeValues defaultValue)
```

Optional attributes that can be used for message metadata/headers.

`map<string, .google.cloud.pubsublite.v1.AttributeValues> attributes = 3;`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[AttributeValues](/java/docs/reference/google-cloud-pubsublite/1.14.8/com.google.cloud.pubsublite.proto.AttributeValues)`  

**Returns**

**Type**

**Description**

`[AttributeValues](/java/docs/reference/google-cloud-pubsublite/1.14.8/com.google.cloud.pubsublite.proto.AttributeValues)`

### getAttributesOrThrow(String key)

```
public abstract AttributeValues getAttributesOrThrow(String key)
```

Optional attributes that can be used for message metadata/headers.

`map<string, .google.cloud.pubsublite.v1.AttributeValues> attributes = 3;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[AttributeValues](/java/docs/reference/google-cloud-pubsublite/1.14.8/com.google.cloud.pubsublite.proto.AttributeValues)`

### getData()

```
public abstract ByteString getData()
```

The payload of the message.

`bytes data = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The data.

### getEventTime()

```
public abstract Timestamp getEventTime()
```

An optional, user-specified event time.

`.google.protobuf.Timestamp event_time = 4;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The eventTime.

### getEventTimeOrBuilder()

```
public abstract TimestampOrBuilder getEventTimeOrBuilder()
```

An optional, user-specified event time.

`.google.protobuf.Timestamp event_time = 4;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getKey()

```
public abstract ByteString getKey()
```

The key used for routing messages to partitions or for compaction (e.g., keep the last N messages per key). If the key is empty, the message is routed to an arbitrary partition.

`bytes key = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The key.

### hasEventTime()

```
public abstract boolean hasEventTime()
```

An optional, user-specified event time.

`.google.protobuf.Timestamp event_time = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the eventTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
