-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface SubscribeResponseOrBuilder (1.8.0) Stay organized with collections Save and categorize content based on your preferences.

1.16.2 (latest) 1.16.1 1.15.21 1.14.8 1.13.8 1.12.22 1.11.2 1.10.0 1.9.4 1.8.0 1.7.1 1.6.3 1.5.5 1.4.12

```
public interface SubscribeResponseOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getInitial()

```
public abstract InitialSubscribeResponse getInitial()
```

Initial response on the stream.

`.google.cloud.pubsublite.v1.InitialSubscribeResponse initial = 1;`

**Returns**

**Type**

**Description**

[InitialSubscribeResponse](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.InitialSubscribeResponse)

The initial.

### getInitialOrBuilder()

```
public abstract InitialSubscribeResponseOrBuilder getInitialOrBuilder()
```

Initial response on the stream.

`.google.cloud.pubsublite.v1.InitialSubscribeResponse initial = 1;`

**Returns**

**Type**

**Description**

[InitialSubscribeResponseOrBuilder](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.InitialSubscribeResponseOrBuilder)

### getMessages()

```
public abstract MessageResponse getMessages()
```

Response containing messages from the topic partition.

`.google.cloud.pubsublite.v1.MessageResponse messages = 3;`

**Returns**

**Type**

**Description**

[MessageResponse](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.MessageResponse)

The messages.

### getMessagesOrBuilder()

```
public abstract MessageResponseOrBuilder getMessagesOrBuilder()
```

Response containing messages from the topic partition.

`.google.cloud.pubsublite.v1.MessageResponse messages = 3;`

**Returns**

**Type**

**Description**

[MessageResponseOrBuilder](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.MessageResponseOrBuilder)

### getResponseCase()

```
public abstract SubscribeResponse.ResponseCase getResponseCase()
```

**Returns**

**Type**

**Description**

[SubscribeResponse.ResponseCase](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.SubscribeResponse.ResponseCase)

### getSeek()

```
public abstract SeekResponse getSeek()
```

Response to a Seek operation.

`.google.cloud.pubsublite.v1.SeekResponse seek = 2;`

**Returns**

**Type**

**Description**

[SeekResponse](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.SeekResponse)

The seek.

### getSeekOrBuilder()

```
public abstract SeekResponseOrBuilder getSeekOrBuilder()
```

Response to a Seek operation.

`.google.cloud.pubsublite.v1.SeekResponse seek = 2;`

**Returns**

**Type**

**Description**

[SeekResponseOrBuilder](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.SeekResponseOrBuilder)

### hasInitial()

```
public abstract boolean hasInitial()
```

Initial response on the stream.

`.google.cloud.pubsublite.v1.InitialSubscribeResponse initial = 1;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the initial field is set.

### hasMessages()

```
public abstract boolean hasMessages()
```

Response containing messages from the topic partition.

`.google.cloud.pubsublite.v1.MessageResponse messages = 3;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the messages field is set.

### hasSeek()

```
public abstract boolean hasSeek()
```

Response to a Seek operation.

`.google.cloud.pubsublite.v1.SeekResponse seek = 2;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the seek field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
