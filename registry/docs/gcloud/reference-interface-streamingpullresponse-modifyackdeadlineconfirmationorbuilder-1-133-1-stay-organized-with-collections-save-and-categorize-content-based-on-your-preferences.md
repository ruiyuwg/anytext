-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface StreamingPullResponse.ModifyAckDeadlineConfirmationOrBuilder (1.133.1) Stay organized with collections Save and categorize content based on your preferences.

1.149.0 (latest) 1.148.0 1.147.0 1.145.0 1.143.1 1.142.0 1.141.5 1.140.2 1.139.4 1.138.0 1.137.1 1.136.1 1.135.0 1.134.2 1.133.1 1.132.2 1.131.0 1.130.0 1.129.6 1.127.3 1.126.6 1.125.13 1.123.18 1.122.2 1.121.1 1.120.24 1.119.1 1.118.0 1.117.0 1.116.4 1.115.5

```
public static interface StreamingPullResponse.ModifyAckDeadlineConfirmationOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAckIds(int index)

```
public abstract String getAckIds(int index)
```

Optional. Successfully processed acknowledgement IDs.

`repeated string ack_ids = 1 [(.google.api.field_behavior) = OPTIONAL];`

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

Optional. Successfully processed acknowledgement IDs.

`repeated string ack_ids = 1 [(.google.api.field_behavior) = OPTIONAL];`

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

Optional. Successfully processed acknowledgement IDs.

`repeated string ack_ids = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of ackIds.

### getAckIdsList()

```
public abstract List<String> getAckIdsList()
```

Optional. Successfully processed acknowledgement IDs.

`repeated string ack_ids = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the ackIds.

### getInvalidAckIds(int index)

```
public abstract String getInvalidAckIds(int index)
```

Optional. List of acknowledgement IDs that were malformed or whose acknowledgement deadline has expired.

`repeated string invalid_ack_ids = 2 [(.google.api.field_behavior) = OPTIONAL];`

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

The invalidAckIds at the given index.

### getInvalidAckIdsBytes(int index)

```
public abstract ByteString getInvalidAckIdsBytes(int index)
```

Optional. List of acknowledgement IDs that were malformed or whose acknowledgement deadline has expired.

`repeated string invalid_ack_ids = 2 [(.google.api.field_behavior) = OPTIONAL];`

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

The bytes of the invalidAckIds at the given index.

### getInvalidAckIdsCount()

```
public abstract int getInvalidAckIdsCount()
```

Optional. List of acknowledgement IDs that were malformed or whose acknowledgement deadline has expired.

`repeated string invalid_ack_ids = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of invalidAckIds.

### getInvalidAckIdsList()

```
public abstract List<String> getInvalidAckIdsList()
```

Optional. List of acknowledgement IDs that were malformed or whose acknowledgement deadline has expired.

`repeated string invalid_ack_ids = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the invalidAckIds.

### getTemporaryFailedAckIds(int index)

```
public abstract String getTemporaryFailedAckIds(int index)
```

Optional. List of acknowledgement IDs that failed processing with temporary issues.

`repeated string temporary_failed_ack_ids = 3 [(.google.api.field_behavior) = OPTIONAL];`

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

The temporaryFailedAckIds at the given index.

### getTemporaryFailedAckIdsBytes(int index)

```
public abstract ByteString getTemporaryFailedAckIdsBytes(int index)
```

Optional. List of acknowledgement IDs that failed processing with temporary issues.

`repeated string temporary_failed_ack_ids = 3 [(.google.api.field_behavior) = OPTIONAL];`

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

The bytes of the temporaryFailedAckIds at the given index.

### getTemporaryFailedAckIdsCount()

```
public abstract int getTemporaryFailedAckIdsCount()
```

Optional. List of acknowledgement IDs that failed processing with temporary issues.

`repeated string temporary_failed_ack_ids = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of temporaryFailedAckIds.

### getTemporaryFailedAckIdsList()

```
public abstract List<String> getTemporaryFailedAckIdsList()
```

Optional. List of acknowledgement IDs that failed processing with temporary issues.

`repeated string temporary_failed_ack_ids = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the temporaryFailedAckIds.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
