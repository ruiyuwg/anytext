-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ImportMetadataOrBuilder (2.17.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

```
public interface ImportMetadataOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getCreateTime()

```
public abstract Timestamp getCreateTime()
```

Operation create time.

`.google.protobuf.Timestamp create_time = 1;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The createTime.

### getCreateTimeOrBuilder()

```
public abstract TimestampOrBuilder getCreateTimeOrBuilder()
```

Operation create time.

`.google.protobuf.Timestamp create_time = 1;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getFailureCount()

```
public abstract long getFailureCount()
```

Count of entries that encountered errors while processing.

`int64 failure_count = 4;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The failureCount.

### getNotificationPubsubTopic()

```
public abstract String getNotificationPubsubTopic()
```

Pub/Sub topic for receiving notification. If this field is set, when the import is finished, a notification is sent to specified Pub/Sub topic. The message data is JSON string of a Operation. Format of the Pub/Sub topic is `projects/{project}/topics/{topic}`.

`string notification_pubsub_topic = 6;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The notificationPubsubTopic.

### getNotificationPubsubTopicBytes()

```
public abstract ByteString getNotificationPubsubTopicBytes()
```

Pub/Sub topic for receiving notification. If this field is set, when the import is finished, a notification is sent to specified Pub/Sub topic. The message data is JSON string of a Operation. Format of the Pub/Sub topic is `projects/{project}/topics/{topic}`.

`string notification_pubsub_topic = 6;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for notificationPubsubTopic.

### getRequestId() (deprecated)

```
public abstract String getRequestId()
```

**Deprecated.** _google.cloud.retail.v2beta.ImportMetadata.request\_id is deprecated. See google/cloud/retail/v2beta/import\_config.proto;l=330_

Deprecated. This field is never set.

`string request_id = 5 [deprecated = true];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The requestId.

### getRequestIdBytes() (deprecated)

```
public abstract ByteString getRequestIdBytes()
```

**Deprecated.** _google.cloud.retail.v2beta.ImportMetadata.request\_id is deprecated. See google/cloud/retail/v2beta/import\_config.proto;l=330_

Deprecated. This field is never set.

`string request_id = 5 [deprecated = true];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for requestId.

### getSuccessCount()

```
public abstract long getSuccessCount()
```

Count of entries that were processed successfully.

`int64 success_count = 3;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The successCount.

### getUpdateTime()

```
public abstract Timestamp getUpdateTime()
```

Operation last update time. If the operation is done, this is also the finish time.

`.google.protobuf.Timestamp update_time = 2;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The updateTime.

### getUpdateTimeOrBuilder()

```
public abstract TimestampOrBuilder getUpdateTimeOrBuilder()
```

Operation last update time. If the operation is done, this is also the finish time.

`.google.protobuf.Timestamp update_time = 2;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### hasCreateTime()

```
public abstract boolean hasCreateTime()
```

Operation create time.

`.google.protobuf.Timestamp create_time = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the createTime field is set.

### hasUpdateTime()

```
public abstract boolean hasUpdateTime()
```

Operation last update time. If the operation is done, this is also the finish time.

`.google.protobuf.Timestamp update_time = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the updateTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
