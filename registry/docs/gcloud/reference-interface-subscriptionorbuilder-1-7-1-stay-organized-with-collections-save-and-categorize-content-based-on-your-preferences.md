-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface SubscriptionOrBuilder (1.7.1) Stay organized with collections Save and categorize content based on your preferences.

1.16.2 (latest) 1.16.1 1.15.21 1.14.8 1.13.8 1.12.22 1.11.2 1.10.0 1.9.4 1.8.0 1.7.1 1.6.3 1.5.5 1.4.12

```
public interface SubscriptionOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getDeliveryConfig()

```
public abstract Subscription.DeliveryConfig getDeliveryConfig()
```

The settings for this subscription's message delivery.

`.google.cloud.pubsublite.v1.Subscription.DeliveryConfig delivery_config = 3;`

**Returns**

**Type**

**Description**

[Subscription.DeliveryConfig](/java/docs/reference/google-cloud-pubsublite/1.7.1/com.google.cloud.pubsublite.proto.Subscription.DeliveryConfig)

The deliveryConfig.

### getDeliveryConfigOrBuilder()

```
public abstract Subscription.DeliveryConfigOrBuilder getDeliveryConfigOrBuilder()
```

The settings for this subscription's message delivery.

`.google.cloud.pubsublite.v1.Subscription.DeliveryConfig delivery_config = 3;`

**Returns**

**Type**

**Description**

[Subscription.DeliveryConfigOrBuilder](/java/docs/reference/google-cloud-pubsublite/1.7.1/com.google.cloud.pubsublite.proto.Subscription.DeliveryConfigOrBuilder)

### getExportConfig()

```
public abstract ExportConfig getExportConfig()
```

If present, messages are automatically written from the Pub/Sub Lite topic associated with this subscription to a destination.

`.google.cloud.pubsublite.v1.ExportConfig export_config = 4;`

**Returns**

**Type**

**Description**

[ExportConfig](/java/docs/reference/google-cloud-pubsublite/1.7.1/com.google.cloud.pubsublite.proto.ExportConfig)

The exportConfig.

### getExportConfigOrBuilder()

```
public abstract ExportConfigOrBuilder getExportConfigOrBuilder()
```

If present, messages are automatically written from the Pub/Sub Lite topic associated with this subscription to a destination.

`.google.cloud.pubsublite.v1.ExportConfig export_config = 4;`

**Returns**

**Type**

**Description**

[ExportConfigOrBuilder](/java/docs/reference/google-cloud-pubsublite/1.7.1/com.google.cloud.pubsublite.proto.ExportConfigOrBuilder)

### getName()

```
public abstract String getName()
```

The name of the subscription. Structured like: projects/{project\_number}/locations/{location}/subscriptions/{subscription\_id}

`string name = 1;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

The name of the subscription. Structured like: projects/{project\_number}/locations/{location}/subscriptions/{subscription\_id}

`string name = 1;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for name.

### getTopic()

```
public abstract String getTopic()
```

The name of the topic this subscription is attached to. Structured like: projects/{project\_number}/locations/{location}/topics/{topic\_id}

`string topic = 2 [(.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The topic.

### getTopicBytes()

```
public abstract ByteString getTopicBytes()
```

The name of the topic this subscription is attached to. Structured like: projects/{project\_number}/locations/{location}/topics/{topic\_id}

`string topic = 2 [(.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for topic.

### hasDeliveryConfig()

```
public abstract boolean hasDeliveryConfig()
```

The settings for this subscription's message delivery.

`.google.cloud.pubsublite.v1.Subscription.DeliveryConfig delivery_config = 3;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the deliveryConfig field is set.

### hasExportConfig()

```
public abstract boolean hasExportConfig()
```

If present, messages are automatically written from the Pub/Sub Lite topic associated with this subscription to a destination.

`.google.cloud.pubsublite.v1.ExportConfig export_config = 4;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the exportConfig field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
