-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface StreamingPullRequestOrBuilder (1.125.13) Stay organized with collections Save and categorize content based on your preferences.

1.149.0 (latest) 1.148.0 1.147.0 1.145.0 1.143.1 1.142.0 1.141.5 1.140.2 1.139.4 1.138.0 1.137.1 1.136.1 1.135.0 1.134.2 1.133.1 1.132.2 1.131.0 1.130.0 1.129.6 1.127.3 1.126.6 1.125.13 1.123.18 1.122.2 1.121.1 1.120.24 1.119.1 1.118.0 1.117.0 1.116.4 1.115.5

```
public interface StreamingPullRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAckIds(int index)

```
public abstract String getAckIds(int index)
```

List of acknowledgement IDs for acknowledging previously received messages (received on this stream or a different stream). If an ack ID has expired, the corresponding message may be redelivered later. Acknowledging a message more than once will not result in an error. If the acknowledgement ID is malformed, the stream will be aborted with status `INVALID_ARGUMENT`.

`repeated string ack_ids = 2;`

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

The ackIds at the given index.

### getAckIdsBytes(int index)

```
public abstract ByteString getAckIdsBytes(int index)
```

List of acknowledgement IDs for acknowledging previously received messages (received on this stream or a different stream). If an ack ID has expired, the corresponding message may be redelivered later. Acknowledging a message more than once will not result in an error. If the acknowledgement ID is malformed, the stream will be aborted with status `INVALID_ARGUMENT`.

`repeated string ack_ids = 2;`

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

The bytes of the ackIds at the given index.

### getAckIdsCount()

```
public abstract int getAckIdsCount()
```

List of acknowledgement IDs for acknowledging previously received messages (received on this stream or a different stream). If an ack ID has expired, the corresponding message may be redelivered later. Acknowledging a message more than once will not result in an error. If the acknowledgement ID is malformed, the stream will be aborted with status `INVALID_ARGUMENT`.

`repeated string ack_ids = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of ackIds.

### getAckIdsList()

```
public abstract List<String> getAckIdsList()
```

List of acknowledgement IDs for acknowledging previously received messages (received on this stream or a different stream). If an ack ID has expired, the corresponding message may be redelivered later. Acknowledging a message more than once will not result in an error. If the acknowledgement ID is malformed, the stream will be aborted with status `INVALID_ARGUMENT`.

`repeated string ack_ids = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the ackIds.

### getClientId()

```
public abstract String getClientId()
```

A unique identifier that is used to distinguish client instances from each other. Only needs to be provided on the initial request. When a stream disconnects and reconnects for the same stream, the client\_id should be set to the same value so that state associated with the old stream can be transferred to the new stream. The same client\_id should not be used for different client instances.

`string client_id = 6;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The clientId.

### getClientIdBytes()

```
public abstract ByteString getClientIdBytes()
```

A unique identifier that is used to distinguish client instances from each other. Only needs to be provided on the initial request. When a stream disconnects and reconnects for the same stream, the client\_id should be set to the same value so that state associated with the old stream can be transferred to the new stream. The same client\_id should not be used for different client instances.

`string client_id = 6;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for clientId.

### getMaxOutstandingBytes()

```
public abstract long getMaxOutstandingBytes()
```

Flow control settings for the maximum number of outstanding bytes. When there are `max_outstanding_bytes` or more worth of messages currently sent to the streaming pull client that have not yet been acked or nacked, the server will stop sending more messages. The sending of messages resumes once the number of outstanding bytes is less than this value. If the value is <= 0, there is no limit to the number of outstanding bytes. This property can only be set on the initial StreamingPullRequest. If it is set on a subsequent request, the stream will be aborted with status `INVALID_ARGUMENT`.

`int64 max_outstanding_bytes = 8;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The maxOutstandingBytes.

### getMaxOutstandingMessages()

```
public abstract long getMaxOutstandingMessages()
```

Flow control settings for the maximum number of outstanding messages. When there are `max_outstanding_messages` or more currently sent to the streaming pull client that have not yet been acked or nacked, the server stops sending more messages. The sending of messages resumes once the number of outstanding messages is less than this value. If the value is <= 0, there is no limit to the number of outstanding messages. This property can only be set on the initial StreamingPullRequest. If it is set on a subsequent request, the stream will be aborted with status `INVALID_ARGUMENT`.

`int64 max_outstanding_messages = 7;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The maxOutstandingMessages.

### getModifyDeadlineAckIds(int index)

```
public abstract String getModifyDeadlineAckIds(int index)
```

List of acknowledgement IDs whose deadline will be modified based on the corresponding element in `modify_deadline_seconds`. This field can be used to indicate that more time is needed to process a message by the subscriber, or to make the message available for redelivery if the processing was interrupted.

`repeated string modify_deadline_ack_ids = 4;`

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

The modifyDeadlineAckIds at the given index.

### getModifyDeadlineAckIdsBytes(int index)

```
public abstract ByteString getModifyDeadlineAckIdsBytes(int index)
```

List of acknowledgement IDs whose deadline will be modified based on the corresponding element in `modify_deadline_seconds`. This field can be used to indicate that more time is needed to process a message by the subscriber, or to make the message available for redelivery if the processing was interrupted.

`repeated string modify_deadline_ack_ids = 4;`

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

The bytes of the modifyDeadlineAckIds at the given index.

### getModifyDeadlineAckIdsCount()

```
public abstract int getModifyDeadlineAckIdsCount()
```

List of acknowledgement IDs whose deadline will be modified based on the corresponding element in `modify_deadline_seconds`. This field can be used to indicate that more time is needed to process a message by the subscriber, or to make the message available for redelivery if the processing was interrupted.

`repeated string modify_deadline_ack_ids = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of modifyDeadlineAckIds.

### getModifyDeadlineAckIdsList()

```
public abstract List<String> getModifyDeadlineAckIdsList()
```

List of acknowledgement IDs whose deadline will be modified based on the corresponding element in `modify_deadline_seconds`. This field can be used to indicate that more time is needed to process a message by the subscriber, or to make the message available for redelivery if the processing was interrupted.

`repeated string modify_deadline_ack_ids = 4;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the modifyDeadlineAckIds.

### getModifyDeadlineSeconds(int index)

```
public abstract int getModifyDeadlineSeconds(int index)
```

The list of new ack deadlines for the IDs listed in `modify_deadline_ack_ids`. The size of this list must be the same as the size of `modify_deadline_ack_ids`. If it differs the stream will be aborted with `INVALID_ARGUMENT`. Each element in this list is applied to the element in the same position in `modify_deadline_ack_ids`. The new ack deadline is with respect to the time this request was sent to the Pub/Sub system. Must be >= 0. For example, if the value is 10, the new ack deadline will expire 10 seconds after this request is received. If the value is 0, the message is immediately made available for another streaming or non-streaming pull request. If the value is < 0 (an error), the stream will be aborted with status `INVALID_ARGUMENT`.

`repeated int32 modify_deadline_seconds = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The modifyDeadlineSeconds at the given index.

### getModifyDeadlineSecondsCount()

```
public abstract int getModifyDeadlineSecondsCount()
```

The list of new ack deadlines for the IDs listed in `modify_deadline_ack_ids`. The size of this list must be the same as the size of `modify_deadline_ack_ids`. If it differs the stream will be aborted with `INVALID_ARGUMENT`. Each element in this list is applied to the element in the same position in `modify_deadline_ack_ids`. The new ack deadline is with respect to the time this request was sent to the Pub/Sub system. Must be >= 0. For example, if the value is 10, the new ack deadline will expire 10 seconds after this request is received. If the value is 0, the message is immediately made available for another streaming or non-streaming pull request. If the value is < 0 (an error), the stream will be aborted with status `INVALID_ARGUMENT`.

`repeated int32 modify_deadline_seconds = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of modifyDeadlineSeconds.

### getModifyDeadlineSecondsList()

```
public abstract List<Integer> getModifyDeadlineSecondsList()
```

The list of new ack deadlines for the IDs listed in `modify_deadline_ack_ids`. The size of this list must be the same as the size of `modify_deadline_ack_ids`. If it differs the stream will be aborted with `INVALID_ARGUMENT`. Each element in this list is applied to the element in the same position in `modify_deadline_ack_ids`. The new ack deadline is with respect to the time this request was sent to the Pub/Sub system. Must be >= 0. For example, if the value is 10, the new ack deadline will expire 10 seconds after this request is received. If the value is 0, the message is immediately made available for another streaming or non-streaming pull request. If the value is < 0 (an error), the stream will be aborted with status `INVALID_ARGUMENT`.

`repeated int32 modify_deadline_seconds = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Integer](https://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html)>`

A list containing the modifyDeadlineSeconds.

### getStreamAckDeadlineSeconds()

```
public abstract int getStreamAckDeadlineSeconds()
```

Required. The ack deadline to use for the stream. This must be provided in the first request on the stream, but it can also be updated on subsequent requests from client to server. The minimum deadline you can specify is 10 seconds. The maximum deadline you can specify is 600 seconds (10 minutes).

`int32 stream_ack_deadline_seconds = 5 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The streamAckDeadlineSeconds.

### getSubscription()

```
public abstract String getSubscription()
```

Required. The subscription for which to initialize the new stream. This must be provided in the first request on the stream, and must not be set in subsequent requests from client to server. Format is `projects/{project}/subscriptions/{sub}`.

`string subscription = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The subscription.

### getSubscriptionBytes()

```
public abstract ByteString getSubscriptionBytes()
```

Required. The subscription for which to initialize the new stream. This must be provided in the first request on the stream, and must not be set in subsequent requests from client to server. Format is `projects/{project}/subscriptions/{sub}`.

`string subscription = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for subscription.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
