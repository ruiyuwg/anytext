-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface CopyLogEntriesMetadataOrBuilder (3.19.0) Stay organized with collections Save and categorize content based on your preferences.

3.28.0 (latest) 3.26.0 3.24.0 3.23.10 3.22.6 3.21.4 3.20.7 3.19.0 3.18.0 3.17.2 3.16.2 3.15.17 3.14.9 3.13.7 3.12.1 3.11.10 3.10.7 3.9.0 3.8.0 3.7.6 3.6.4 3.5.3

```
public interface CopyLogEntriesMetadataOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getCancellationRequested()

```
public abstract boolean getCancellationRequested()
```

Identifies whether the user has requested cancellation of the operation.

`bool cancellation_requested = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The cancellationRequested.

### getEndTime()

```
public abstract Timestamp getEndTime()
```

The end time of an operation.

`.google.protobuf.Timestamp end_time = 2;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The endTime.

### getEndTimeOrBuilder()

```
public abstract TimestampOrBuilder getEndTimeOrBuilder()
```

The end time of an operation.

`.google.protobuf.Timestamp end_time = 2;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getProgress()

```
public abstract int getProgress()
```

Estimated progress of the operation (0 - 100%).

`int32 progress = 6;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The progress.

### getRequest()

```
public abstract CopyLogEntriesRequest getRequest()
```

CopyLogEntries RPC request.

`.google.logging.v2.CopyLogEntriesRequest request = 5;`

**Returns**

**Type**

**Description**

`[CopyLogEntriesRequest](/java/docs/reference/google-cloud-logging/3.19.0/com.google.logging.v2.CopyLogEntriesRequest)`

The request.

### getRequestOrBuilder()

```
public abstract CopyLogEntriesRequestOrBuilder getRequestOrBuilder()
```

CopyLogEntries RPC request.

`.google.logging.v2.CopyLogEntriesRequest request = 5;`

**Returns**

**Type**

**Description**

`[CopyLogEntriesRequestOrBuilder](/java/docs/reference/google-cloud-logging/3.19.0/com.google.logging.v2.CopyLogEntriesRequestOrBuilder)`

### getStartTime()

```
public abstract Timestamp getStartTime()
```

The create time of an operation.

`.google.protobuf.Timestamp start_time = 1;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The startTime.

### getStartTimeOrBuilder()

```
public abstract TimestampOrBuilder getStartTimeOrBuilder()
```

The create time of an operation.

`.google.protobuf.Timestamp start_time = 1;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getState()

```
public abstract OperationState getState()
```

State of an operation.

`.google.logging.v2.OperationState state = 3;`

**Returns**

**Type**

**Description**

`[OperationState](/java/docs/reference/google-cloud-logging/3.19.0/com.google.logging.v2.OperationState)`

The state.

### getStateValue()

```
public abstract int getStateValue()
```

State of an operation.

`.google.logging.v2.OperationState state = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for state.

### getWriterIdentity()

```
public abstract String getWriterIdentity()
```

The IAM identity of a service account that must be granted access to the destination.

If the service account is not granted permission to the destination within an hour, the operation will be cancelled.

For example: `"serviceAccount:foo@bar.com"`

`string writer_identity = 7;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The writerIdentity.

### getWriterIdentityBytes()

```
public abstract ByteString getWriterIdentityBytes()
```

The IAM identity of a service account that must be granted access to the destination.

If the service account is not granted permission to the destination within an hour, the operation will be cancelled.

For example: `"serviceAccount:foo@bar.com"`

`string writer_identity = 7;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for writerIdentity.

### hasEndTime()

```
public abstract boolean hasEndTime()
```

The end time of an operation.

`.google.protobuf.Timestamp end_time = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the endTime field is set.

### hasRequest()

```
public abstract boolean hasRequest()
```

CopyLogEntries RPC request.

`.google.logging.v2.CopyLogEntriesRequest request = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the request field is set.

### hasStartTime()

```
public abstract boolean hasStartTime()
```

The create time of an operation.

`.google.protobuf.Timestamp start_time = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the startTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
