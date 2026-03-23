-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface SubscriptionOrBuilder (1.149.0) Stay organized with collections Save and categorize content based on your preferences.

1.149.0 (latest) 1.148.0 1.147.0 1.145.0 1.143.1 1.142.0 1.141.5 1.140.2 1.139.4 1.138.0 1.137.1 1.136.1 1.135.0 1.134.2 1.133.1 1.132.2 1.131.0 1.130.0 1.129.6 1.127.3 1.126.6 1.125.13 1.123.18 1.122.2 1.121.1 1.120.24 1.119.1 1.118.0 1.117.0 1.116.4 1.115.5

```
public interface SubscriptionOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### containsLabels(String key)

```
public abstract boolean containsLabels(String key)
```

Optional. See [Creating and managing labels](https://cloud.google.com/pubsub/docs/labels).

`map<string, string> labels = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### containsTags(String key)

```
public abstract boolean containsTags(String key)
```

Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing" See [https://docs.cloud.google.com/pubsub/docs/tags](https://docs.cloud.google.com/pubsub/docs/tags) for more information on using tags with Pub/Sub resources.

`map<string, string> tags = 26 [(.google.api.field_behavior) = INPUT_ONLY, (.google.api.field_behavior) = IMMUTABLE, (.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getAckDeadlineSeconds()

```
public abstract int getAckDeadlineSeconds()
```

Optional. The approximate amount of time (on a best-effort basis) Pub/Sub waits for the subscriber to acknowledge receipt before resending the message. In the interval after the message is delivered and before it is acknowledged, it is considered to be _outstanding_. During that time period, the message will not be redelivered (on a best-effort basis).

For pull subscriptions, this value is used as the initial value for the ack deadline. To override this value for a given message, call `ModifyAckDeadline` with the corresponding `ack_id` if using non-streaming pull or send the `ack_id` in a `StreamingModifyAckDeadlineRequest` if using streaming pull. The minimum custom deadline you can specify is 10 seconds. The maximum custom deadline you can specify is 600 seconds (10 minutes). If this parameter is 0, a default value of 10 seconds is used.

For push delivery, this value is also used to set the request timeout for the call to the push endpoint.

If the subscriber never acknowledges the message, the Pub/Sub system will eventually redeliver the message.

`int32 ack_deadline_seconds = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The ackDeadlineSeconds.

### getAnalyticsHubSubscriptionInfo()

```
public abstract Subscription.AnalyticsHubSubscriptionInfo getAnalyticsHubSubscriptionInfo()
```

Output only. Information about the associated Analytics Hub subscription. Only set if the subscription is created by Analytics Hub.

`.google.pubsub.v1.Subscription.AnalyticsHubSubscriptionInfo analytics_hub_subscription_info = 23 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Subscription.AnalyticsHubSubscriptionInfo](/java/docs/reference/google-cloud-pubsub/latest/com.google.pubsub.v1.Subscription.AnalyticsHubSubscriptionInfo)`

The analyticsHubSubscriptionInfo.

### getAnalyticsHubSubscriptionInfoOrBuilder()

```
public abstract Subscription.AnalyticsHubSubscriptionInfoOrBuilder getAnalyticsHubSubscriptionInfoOrBuilder()
```

Output only. Information about the associated Analytics Hub subscription. Only set if the subscription is created by Analytics Hub.

`.google.pubsub.v1.Subscription.AnalyticsHubSubscriptionInfo analytics_hub_subscription_info = 23 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Subscription.AnalyticsHubSubscriptionInfoOrBuilder](/java/docs/reference/google-cloud-pubsub/latest/com.google.pubsub.v1.Subscription.AnalyticsHubSubscriptionInfoOrBuilder)`

### getBigqueryConfig()

```
public abstract BigQueryConfig getBigqueryConfig()
```

Optional. If delivery to BigQuery is used with this subscription, this field is used to configure it.

`.google.pubsub.v1.BigQueryConfig bigquery_config = 18 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[BigQueryConfig](/java/docs/reference/google-cloud-pubsub/latest/com.google.pubsub.v1.BigQueryConfig)`

The bigqueryConfig.

### getBigqueryConfigOrBuilder()

```
public abstract BigQueryConfigOrBuilder getBigqueryConfigOrBuilder()
```

Optional. If delivery to BigQuery is used with this subscription, this field is used to configure it.

`.google.pubsub.v1.BigQueryConfig bigquery_config = 18 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[BigQueryConfigOrBuilder](/java/docs/reference/google-cloud-pubsub/latest/com.google.pubsub.v1.BigQueryConfigOrBuilder)`

### getCloudStorageConfig()

```
public abstract CloudStorageConfig getCloudStorageConfig()
```

Optional. If delivery to Google Cloud Storage is used with this subscription, this field is used to configure it.

`.google.pubsub.v1.CloudStorageConfig cloud_storage_config = 22 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[CloudStorageConfig](/java/docs/reference/google-cloud-pubsub/latest/com.google.pubsub.v1.CloudStorageConfig)`

The cloudStorageConfig.

### getCloudStorageConfigOrBuilder()

```
public abstract CloudStorageConfigOrBuilder getCloudStorageConfigOrBuilder()
```

Optional. If delivery to Google Cloud Storage is used with this subscription, this field is used to configure it.

`.google.pubsub.v1.CloudStorageConfig cloud_storage_config = 22 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[CloudStorageConfigOrBuilder](/java/docs/reference/google-cloud-pubsub/latest/com.google.pubsub.v1.CloudStorageConfigOrBuilder)`

### getDeadLetterPolicy()

```
public abstract DeadLetterPolicy getDeadLetterPolicy()
```

Optional. A policy that specifies the conditions for dead lettering messages in this subscription. If dead\_letter\_policy is not set, dead lettering is disabled.

The Pub/Sub service account associated with this subscriptions's parent project (i.e., service-{project\_number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have permission to Acknowledge() messages on this subscription.

`.google.pubsub.v1.DeadLetterPolicy dead_letter_policy = 13 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[DeadLetterPolicy](/java/docs/reference/google-cloud-pubsub/latest/com.google.pubsub.v1.DeadLetterPolicy)`

The deadLetterPolicy.

### getDeadLetterPolicyOrBuilder()

```
public abstract DeadLetterPolicyOrBuilder getDeadLetterPolicyOrBuilder()
```

Optional. A policy that specifies the conditions for dead lettering messages in this subscription. If dead\_letter\_policy is not set, dead lettering is disabled.

The Pub/Sub service account associated with this subscriptions's parent project (i.e., service-{project\_number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have permission to Acknowledge() messages on this subscription.

`.google.pubsub.v1.DeadLetterPolicy dead_letter_policy = 13 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[DeadLetterPolicyOrBuilder](/java/docs/reference/google-cloud-pubsub/latest/com.google.pubsub.v1.DeadLetterPolicyOrBuilder)`

### getDetached()

```
public abstract boolean getDetached()
```

Optional. Indicates whether the subscription is detached from its topic. Detached subscriptions don't receive messages from their topic and don't retain any backlog. `Pull` and `StreamingPull` requests will return FAILED\_PRECONDITION. If the subscription is a push subscription, pushes to the endpoint will not be made.

`bool detached = 15 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The detached.

### getEnableExactlyOnceDelivery()

```
public abstract boolean getEnableExactlyOnceDelivery()
```

Optional. If true, Pub/Sub provides the following guarantees for the delivery of a message with a given value of `message_id` on this subscription:

-   The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgment deadline expires.
-   An acknowledged message will not be resent to a subscriber.
    
    Note that subscribers may still receive multiple copies of a message when `enable_exactly_once_delivery` is true if the message was published multiple times by a publisher client. These copies are considered distinct by Pub/Sub and have distinct `message_id` values.
    

`bool enable_exactly_once_delivery = 16 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enableExactlyOnceDelivery.

### getEnableMessageOrdering()

```
public abstract boolean getEnableMessageOrdering()
```

Optional. If true, messages published with the same `ordering_key` in `PubsubMessage` will be delivered to the subscribers in the order in which they are received by the Pub/Sub system. Otherwise, they may be delivered in any order.

`bool enable_message_ordering = 10 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enableMessageOrdering.

### getExpirationPolicy()

```
public abstract ExpirationPolicy getExpirationPolicy()
```

Optional. A policy that specifies the conditions for this subscription's expiration. A subscription is considered active as long as any connected subscriber is successfully consuming messages from the subscription or is issuing operations on the subscription. If `expiration_policy` is not set, a _default policy_ with `ttl` of 31 days will be used. The minimum allowed value for `expiration_policy.ttl` is 1 day. If `expiration_policy` is set, but `expiration_policy.ttl` is not set, the subscription never expires.

`.google.pubsub.v1.ExpirationPolicy expiration_policy = 11 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ExpirationPolicy](/java/docs/reference/google-cloud-pubsub/latest/com.google.pubsub.v1.ExpirationPolicy)`

The expirationPolicy.

### getExpirationPolicyOrBuilder()

```
public abstract ExpirationPolicyOrBuilder getExpirationPolicyOrBuilder()
```

Optional. A policy that specifies the conditions for this subscription's expiration. A subscription is considered active as long as any connected subscriber is successfully consuming messages from the subscription or is issuing operations on the subscription. If `expiration_policy` is not set, a _default policy_ with `ttl` of 31 days will be used. The minimum allowed value for `expiration_policy.ttl` is 1 day. If `expiration_policy` is set, but `expiration_policy.ttl` is not set, the subscription never expires.

`.google.pubsub.v1.ExpirationPolicy expiration_policy = 11 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ExpirationPolicyOrBuilder](/java/docs/reference/google-cloud-pubsub/latest/com.google.pubsub.v1.ExpirationPolicyOrBuilder)`

### getFilter()

```
public abstract String getFilter()
```

Optional. An expression written in the Pub/Sub [filter language](https://cloud.google.com/pubsub/docs/filtering). If non-empty, then only `PubsubMessage`s whose `attributes` field matches the filter are delivered on this subscription. If empty, then no messages are filtered out.

`string filter = 12 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The filter.

### getFilterBytes()

```
public abstract ByteString getFilterBytes()
```

Optional. An expression written in the Pub/Sub [filter language](https://cloud.google.com/pubsub/docs/filtering). If non-empty, then only `PubsubMessage`s whose `attributes` field matches the filter are delivered on this subscription. If empty, then no messages are filtered out.

`string filter = 12 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for filter.

### getLabels() (deprecated)

```
public abstract Map<String,String> getLabels()
```

Use [#getLabelsMap()](/java/docs/reference/google-cloud-pubsub/latest/com.google.pubsub.v1.SubscriptionOrBuilder#com_google_pubsub_v1_SubscriptionOrBuilder_getLabelsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsCount()

```
public abstract int getLabelsCount()
```

Optional. See [Creating and managing labels](https://cloud.google.com/pubsub/docs/labels).

`map<string, string> labels = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLabelsMap()

```
public abstract Map<String,String> getLabelsMap()
```

Optional. See [Creating and managing labels](https://cloud.google.com/pubsub/docs/labels).

`map<string, string> labels = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsOrDefault(String key, String defaultValue)

```
public abstract String getLabelsOrDefault(String key, String defaultValue)
```

Optional. See [Creating and managing labels](https://cloud.google.com/pubsub/docs/labels).

`map<string, string> labels = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getLabelsOrThrow(String key)

```
public abstract String getLabelsOrThrow(String key)
```

Optional. See [Creating and managing labels](https://cloud.google.com/pubsub/docs/labels).

`map<string, string> labels = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getMessageRetentionDuration()

```
public abstract Duration getMessageRetentionDuration()
```

Optional. How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published. If `retain_acked_messages` is true, then this also configures the retention of acknowledged messages, and thus configures how far back in time a `Seek` can be done. Defaults to 7 days. Cannot be more than 31 days or less than 10 minutes.

`.google.protobuf.Duration message_retention_duration = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`

The messageRetentionDuration.

### getMessageRetentionDurationOrBuilder()

```
public abstract DurationOrBuilder getMessageRetentionDurationOrBuilder()
```

Optional. How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published. If `retain_acked_messages` is true, then this also configures the retention of acknowledged messages, and thus configures how far back in time a `Seek` can be done. Defaults to 7 days. Cannot be more than 31 days or less than 10 minutes.

`.google.protobuf.Duration message_retention_duration = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)`

### getMessageTransforms(int index)

```
public abstract MessageTransform getMessageTransforms(int index)
```

Optional. Transforms to be applied to messages before they are delivered to subscribers. Transforms are applied in the order specified.

`repeated .google.pubsub.v1.MessageTransform message_transforms = 25 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[MessageTransform](/java/docs/reference/google-cloud-pubsub/latest/com.google.pubsub.v1.MessageTransform)`

### getMessageTransformsCount()

```
public abstract int getMessageTransformsCount()
```

Optional. Transforms to be applied to messages before they are delivered to subscribers. Transforms are applied in the order specified.

`repeated .google.pubsub.v1.MessageTransform message_transforms = 25 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getMessageTransformsList()

```
public abstract List<MessageTransform> getMessageTransformsList()
```

Optional. Transforms to be applied to messages before they are delivered to subscribers. Transforms are applied in the order specified.

`repeated .google.pubsub.v1.MessageTransform message_transforms = 25 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[MessageTransform](/java/docs/reference/google-cloud-pubsub/latest/com.google.pubsub.v1.MessageTransform)>`

### getMessageTransformsOrBuilder(int index)

```
public abstract MessageTransformOrBuilder getMessageTransformsOrBuilder(int index)
```

Optional. Transforms to be applied to messages before they are delivered to subscribers. Transforms are applied in the order specified.

`repeated .google.pubsub.v1.MessageTransform message_transforms = 25 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[MessageTransformOrBuilder](/java/docs/reference/google-cloud-pubsub/latest/com.google.pubsub.v1.MessageTransformOrBuilder)`

### getMessageTransformsOrBuilderList()

```
public abstract List<? extends MessageTransformOrBuilder> getMessageTransformsOrBuilderList()
```

Optional. Transforms to be applied to messages before they are delivered to subscribers. Transforms are applied in the order specified.

`repeated .google.pubsub.v1.MessageTransform message_transforms = 25 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.pubsub.v1.MessageTransformOrBuilder>`

### getName()

```
public abstract String getName()
```

Required. Identifier. The name of the subscription. It must have the format `"projects/{project}/subscriptions/{subscription}"`. `{subscription}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.

`string name = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IDENTIFIER];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

Required. Identifier. The name of the subscription. It must have the format `"projects/{project}/subscriptions/{subscription}"`. `{subscription}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.

`string name = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IDENTIFIER];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getPushConfig()

```
public abstract PushConfig getPushConfig()
```

Optional. If push delivery is used with this subscription, this field is used to configure it.

`.google.pubsub.v1.PushConfig push_config = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[PushConfig](/java/docs/reference/google-cloud-pubsub/latest/com.google.pubsub.v1.PushConfig)`

The pushConfig.

### getPushConfigOrBuilder()

```
public abstract PushConfigOrBuilder getPushConfigOrBuilder()
```

Optional. If push delivery is used with this subscription, this field is used to configure it.

`.google.pubsub.v1.PushConfig push_config = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[PushConfigOrBuilder](/java/docs/reference/google-cloud-pubsub/latest/com.google.pubsub.v1.PushConfigOrBuilder)`

### getRetainAckedMessages()

```
public abstract boolean getRetainAckedMessages()
```

Optional. Indicates whether to retain acknowledged messages. If true, then messages are not expunged from the subscription's backlog, even if they are acknowledged, until they fall out of the `message_retention_duration` window. This must be true if you would like to [`Seek` to a timestamp](https://cloud.google.com/pubsub/docs/replay-overview#seek_to_a_time) in the past to replay previously-acknowledged messages.

`bool retain_acked_messages = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The retainAckedMessages.

### getRetryPolicy()

```
public abstract RetryPolicy getRetryPolicy()
```

Optional. A policy that specifies how Pub/Sub retries message delivery for this subscription.

If not set, the default retry policy is applied. This generally implies that messages will be retried as soon as possible for healthy subscribers. RetryPolicy will be triggered on NACKs or acknowledgment deadline exceeded events for a given message.

`.google.pubsub.v1.RetryPolicy retry_policy = 14 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[RetryPolicy](/java/docs/reference/google-cloud-pubsub/latest/com.google.pubsub.v1.RetryPolicy)`

The retryPolicy.

### getRetryPolicyOrBuilder()

```
public abstract RetryPolicyOrBuilder getRetryPolicyOrBuilder()
```

Optional. A policy that specifies how Pub/Sub retries message delivery for this subscription.

If not set, the default retry policy is applied. This generally implies that messages will be retried as soon as possible for healthy subscribers. RetryPolicy will be triggered on NACKs or acknowledgment deadline exceeded events for a given message.

`.google.pubsub.v1.RetryPolicy retry_policy = 14 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[RetryPolicyOrBuilder](/java/docs/reference/google-cloud-pubsub/latest/com.google.pubsub.v1.RetryPolicyOrBuilder)`

### getState()

```
public abstract Subscription.State getState()
```

Output only. An output-only field indicating whether or not the subscription can receive messages.

`.google.pubsub.v1.Subscription.State state = 19 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Subscription.State](/java/docs/reference/google-cloud-pubsub/latest/com.google.pubsub.v1.Subscription.State)`

The state.

### getStateValue()

```
public abstract int getStateValue()
```

Output only. An output-only field indicating whether or not the subscription can receive messages.

`.google.pubsub.v1.Subscription.State state = 19 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for state.

### getTags() (deprecated)

```
public abstract Map<String,String> getTags()
```

Use [#getTagsMap()](/java/docs/reference/google-cloud-pubsub/latest/com.google.pubsub.v1.SubscriptionOrBuilder#com_google_pubsub_v1_SubscriptionOrBuilder_getTagsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getTagsCount()

```
public abstract int getTagsCount()
```

Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing" See [https://docs.cloud.google.com/pubsub/docs/tags](https://docs.cloud.google.com/pubsub/docs/tags) for more information on using tags with Pub/Sub resources.

`map<string, string> tags = 26 [(.google.api.field_behavior) = INPUT_ONLY, (.google.api.field_behavior) = IMMUTABLE, (.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getTagsMap()

```
public abstract Map<String,String> getTagsMap()
```

Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing" See [https://docs.cloud.google.com/pubsub/docs/tags](https://docs.cloud.google.com/pubsub/docs/tags) for more information on using tags with Pub/Sub resources.

`map<string, string> tags = 26 [(.google.api.field_behavior) = INPUT_ONLY, (.google.api.field_behavior) = IMMUTABLE, (.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getTagsOrDefault(String key, String defaultValue)

```
public abstract String getTagsOrDefault(String key, String defaultValue)
```

Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing" See [https://docs.cloud.google.com/pubsub/docs/tags](https://docs.cloud.google.com/pubsub/docs/tags) for more information on using tags with Pub/Sub resources.

`map<string, string> tags = 26 [(.google.api.field_behavior) = INPUT_ONLY, (.google.api.field_behavior) = IMMUTABLE, (.google.api.field_behavior) = OPTIONAL];`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getTagsOrThrow(String key)

```
public abstract String getTagsOrThrow(String key)
```

Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing" See [https://docs.cloud.google.com/pubsub/docs/tags](https://docs.cloud.google.com/pubsub/docs/tags) for more information on using tags with Pub/Sub resources.

`map<string, string> tags = 26 [(.google.api.field_behavior) = INPUT_ONLY, (.google.api.field_behavior) = IMMUTABLE, (.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getTopic()

```
public abstract String getTopic()
```

Required. The name of the topic from which this subscription is receiving messages. Format is `projects/{project}/topics/{topic}`. The value of this field will be `_deleted-topic_` if the topic has been deleted.

`string topic = 2 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The topic.

### getTopicBytes()

```
public abstract ByteString getTopicBytes()
```

Required. The name of the topic from which this subscription is receiving messages. Format is `projects/{project}/topics/{topic}`. The value of this field will be `_deleted-topic_` if the topic has been deleted.

`string topic = 2 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for topic.

### getTopicMessageRetentionDuration()

```
public abstract Duration getTopicMessageRetentionDuration()
```

Output only. Indicates the minimum duration for which a message is retained after it is published to the subscription's topic. If this field is set, messages published to the subscription's topic in the last `topic_message_retention_duration` are always available to subscribers. See the `message_retention_duration` field in `Topic`. This field is set only in responses from the server; it is ignored if it is set in any requests.

`.google.protobuf.Duration topic_message_retention_duration = 17 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`

The topicMessageRetentionDuration.

### getTopicMessageRetentionDurationOrBuilder()

```
public abstract DurationOrBuilder getTopicMessageRetentionDurationOrBuilder()
```

Output only. Indicates the minimum duration for which a message is retained after it is published to the subscription's topic. If this field is set, messages published to the subscription's topic in the last `topic_message_retention_duration` are always available to subscribers. See the `message_retention_duration` field in `Topic`. This field is set only in responses from the server; it is ignored if it is set in any requests.

`.google.protobuf.Duration topic_message_retention_duration = 17 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)`

### hasAnalyticsHubSubscriptionInfo()

```
public abstract boolean hasAnalyticsHubSubscriptionInfo()
```

Output only. Information about the associated Analytics Hub subscription. Only set if the subscription is created by Analytics Hub.

`.google.pubsub.v1.Subscription.AnalyticsHubSubscriptionInfo analytics_hub_subscription_info = 23 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the analyticsHubSubscriptionInfo field is set.

### hasBigqueryConfig()

```
public abstract boolean hasBigqueryConfig()
```

Optional. If delivery to BigQuery is used with this subscription, this field is used to configure it.

`.google.pubsub.v1.BigQueryConfig bigquery_config = 18 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the bigqueryConfig field is set.

### hasCloudStorageConfig()

```
public abstract boolean hasCloudStorageConfig()
```

Optional. If delivery to Google Cloud Storage is used with this subscription, this field is used to configure it.

`.google.pubsub.v1.CloudStorageConfig cloud_storage_config = 22 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the cloudStorageConfig field is set.

### hasDeadLetterPolicy()

```
public abstract boolean hasDeadLetterPolicy()
```

Optional. A policy that specifies the conditions for dead lettering messages in this subscription. If dead\_letter\_policy is not set, dead lettering is disabled.

The Pub/Sub service account associated with this subscriptions's parent project (i.e., service-{project\_number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have permission to Acknowledge() messages on this subscription.

`.google.pubsub.v1.DeadLetterPolicy dead_letter_policy = 13 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the deadLetterPolicy field is set.

### hasExpirationPolicy()

```
public abstract boolean hasExpirationPolicy()
```

Optional. A policy that specifies the conditions for this subscription's expiration. A subscription is considered active as long as any connected subscriber is successfully consuming messages from the subscription or is issuing operations on the subscription. If `expiration_policy` is not set, a _default policy_ with `ttl` of 31 days will be used. The minimum allowed value for `expiration_policy.ttl` is 1 day. If `expiration_policy` is set, but `expiration_policy.ttl` is not set, the subscription never expires.

`.google.pubsub.v1.ExpirationPolicy expiration_policy = 11 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the expirationPolicy field is set.

### hasMessageRetentionDuration()

```
public abstract boolean hasMessageRetentionDuration()
```

Optional. How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published. If `retain_acked_messages` is true, then this also configures the retention of acknowledged messages, and thus configures how far back in time a `Seek` can be done. Defaults to 7 days. Cannot be more than 31 days or less than 10 minutes.

`.google.protobuf.Duration message_retention_duration = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the messageRetentionDuration field is set.

### hasPushConfig()

```
public abstract boolean hasPushConfig()
```

Optional. If push delivery is used with this subscription, this field is used to configure it.

`.google.pubsub.v1.PushConfig push_config = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the pushConfig field is set.

### hasRetryPolicy()

```
public abstract boolean hasRetryPolicy()
```

Optional. A policy that specifies how Pub/Sub retries message delivery for this subscription.

If not set, the default retry policy is applied. This generally implies that messages will be retried as soon as possible for healthy subscribers. RetryPolicy will be triggered on NACKs or acknowledgment deadline exceeded events for a given message.

`.google.pubsub.v1.RetryPolicy retry_policy = 14 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the retryPolicy field is set.

### hasTopicMessageRetentionDuration()

```
public abstract boolean hasTopicMessageRetentionDuration()
```

Output only. Indicates the minimum duration for which a message is retained after it is published to the subscription's topic. If this field is set, messages published to the subscription's topic in the last `topic_message_retention_duration` are always available to subscribers. See the `message_retention_duration` field in `Topic`. This field is set only in responses from the server; it is ignored if it is set in any requests.

`.google.protobuf.Duration topic_message_retention_duration = 17 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the topicMessageRetentionDuration field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
