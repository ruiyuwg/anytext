-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface TransferTypes.TransferOperationOrBuilder (1.11.0) Stay organized with collections Save and categorize content based on your preferences.

1.87.0 (latest) 1.85.0 1.83.0 1.82.0 1.80.0 1.78.0 1.76.0 1.75.0 1.74.0 1.73.0 1.72.0 1.70.0 1.68.0 1.67.0 1.64.0 1.63.0 1.62.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.0.4

```
public static interface TransferTypes.TransferOperationOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getCounters()

```
public abstract TransferTypes.TransferCounters getCounters()
```

Information about the progress of the transfer operation.

`.google.storagetransfer.v1.TransferCounters counters = 7;`

**Returns**

**Type**

**Description**

`[TransferTypes.TransferCounters](/java/docs/reference/google-cloud-storage-transfer/1.11.0/com.google.storagetransfer.v1.proto.TransferTypes.TransferCounters)`

The counters.

### getCountersOrBuilder()

```
public abstract TransferTypes.TransferCountersOrBuilder getCountersOrBuilder()
```

Information about the progress of the transfer operation.

`.google.storagetransfer.v1.TransferCounters counters = 7;`

**Returns**

**Type**

**Description**

`[TransferTypes.TransferCountersOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.11.0/com.google.storagetransfer.v1.proto.TransferTypes.TransferCountersOrBuilder)`

### getEndTime()

```
public abstract Timestamp getEndTime()
```

End time of this transfer execution.

`.google.protobuf.Timestamp end_time = 5;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The endTime.

### getEndTimeOrBuilder()

```
public abstract TimestampOrBuilder getEndTimeOrBuilder()
```

End time of this transfer execution.

`.google.protobuf.Timestamp end_time = 5;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getErrorBreakdowns(int index)

```
public abstract TransferTypes.ErrorSummary getErrorBreakdowns(int index)
```

Summarizes errors encountered with sample error log entries.

`repeated .google.storagetransfer.v1.ErrorSummary error_breakdowns = 8;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[TransferTypes.ErrorSummary](/java/docs/reference/google-cloud-storage-transfer/1.11.0/com.google.storagetransfer.v1.proto.TransferTypes.ErrorSummary)`

### getErrorBreakdownsCount()

```
public abstract int getErrorBreakdownsCount()
```

Summarizes errors encountered with sample error log entries.

`repeated .google.storagetransfer.v1.ErrorSummary error_breakdowns = 8;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getErrorBreakdownsList()

```
public abstract List<TransferTypes.ErrorSummary> getErrorBreakdownsList()
```

Summarizes errors encountered with sample error log entries.

`repeated .google.storagetransfer.v1.ErrorSummary error_breakdowns = 8;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ErrorSummary](/java/docs/reference/google-cloud-storage-transfer/1.11.0/com.google.storagetransfer.v1.proto.TransferTypes.ErrorSummary)>`

### getErrorBreakdownsOrBuilder(int index)

```
public abstract TransferTypes.ErrorSummaryOrBuilder getErrorBreakdownsOrBuilder(int index)
```

Summarizes errors encountered with sample error log entries.

`repeated .google.storagetransfer.v1.ErrorSummary error_breakdowns = 8;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[TransferTypes.ErrorSummaryOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.11.0/com.google.storagetransfer.v1.proto.TransferTypes.ErrorSummaryOrBuilder)`

### getErrorBreakdownsOrBuilderList()

```
public abstract List<? extends TransferTypes.ErrorSummaryOrBuilder> getErrorBreakdownsOrBuilderList()
```

Summarizes errors encountered with sample error log entries.

`repeated .google.storagetransfer.v1.ErrorSummary error_breakdowns = 8;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.storagetransfer.v1.proto.TransferTypes.ErrorSummaryOrBuilder>`

### getName()

```
public abstract String getName()
```

A globally unique ID assigned by the system.

`string name = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

A globally unique ID assigned by the system.

`string name = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getNotificationConfig()

```
public abstract TransferTypes.NotificationConfig getNotificationConfig()
```

Notification configuration.

`.google.storagetransfer.v1.NotificationConfig notification_config = 10;`

**Returns**

**Type**

**Description**

`[TransferTypes.NotificationConfig](/java/docs/reference/google-cloud-storage-transfer/1.11.0/com.google.storagetransfer.v1.proto.TransferTypes.NotificationConfig)`

The notificationConfig.

### getNotificationConfigOrBuilder()

```
public abstract TransferTypes.NotificationConfigOrBuilder getNotificationConfigOrBuilder()
```

Notification configuration.

`.google.storagetransfer.v1.NotificationConfig notification_config = 10;`

**Returns**

**Type**

**Description**

`[TransferTypes.NotificationConfigOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.11.0/com.google.storagetransfer.v1.proto.TransferTypes.NotificationConfigOrBuilder)`

### getProjectId()

```
public abstract String getProjectId()
```

The ID of the Google Cloud project that owns the operation.

`string project_id = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The projectId.

### getProjectIdBytes()

```
public abstract ByteString getProjectIdBytes()
```

The ID of the Google Cloud project that owns the operation.

`string project_id = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for projectId.

### getStartTime()

```
public abstract Timestamp getStartTime()
```

Start time of this transfer execution.

`.google.protobuf.Timestamp start_time = 4;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The startTime.

### getStartTimeOrBuilder()

```
public abstract TimestampOrBuilder getStartTimeOrBuilder()
```

Start time of this transfer execution.

`.google.protobuf.Timestamp start_time = 4;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getStatus()

```
public abstract TransferTypes.TransferOperation.Status getStatus()
```

Status of the transfer operation.

`.google.storagetransfer.v1.TransferOperation.Status status = 6;`

**Returns**

**Type**

**Description**

`[TransferTypes.TransferOperation.Status](/java/docs/reference/google-cloud-storage-transfer/1.11.0/com.google.storagetransfer.v1.proto.TransferTypes.TransferOperation.Status)`

The status.

### getStatusValue()

```
public abstract int getStatusValue()
```

Status of the transfer operation.

`.google.storagetransfer.v1.TransferOperation.Status status = 6;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for status.

### getTransferJobName()

```
public abstract String getTransferJobName()
```

The name of the transfer job that triggers this transfer operation.

`string transfer_job_name = 9;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The transferJobName.

### getTransferJobNameBytes()

```
public abstract ByteString getTransferJobNameBytes()
```

The name of the transfer job that triggers this transfer operation.

`string transfer_job_name = 9;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for transferJobName.

### getTransferSpec()

```
public abstract TransferTypes.TransferSpec getTransferSpec()
```

Transfer specification.

`.google.storagetransfer.v1.TransferSpec transfer_spec = 3;`

**Returns**

**Type**

**Description**

`[TransferTypes.TransferSpec](/java/docs/reference/google-cloud-storage-transfer/1.11.0/com.google.storagetransfer.v1.proto.TransferTypes.TransferSpec)`

The transferSpec.

### getTransferSpecOrBuilder()

```
public abstract TransferTypes.TransferSpecOrBuilder getTransferSpecOrBuilder()
```

Transfer specification.

`.google.storagetransfer.v1.TransferSpec transfer_spec = 3;`

**Returns**

**Type**

**Description**

`[TransferTypes.TransferSpecOrBuilder](/java/docs/reference/google-cloud-storage-transfer/1.11.0/com.google.storagetransfer.v1.proto.TransferTypes.TransferSpecOrBuilder)`

### hasCounters()

```
public abstract boolean hasCounters()
```

Information about the progress of the transfer operation.

`.google.storagetransfer.v1.TransferCounters counters = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the counters field is set.

### hasEndTime()

```
public abstract boolean hasEndTime()
```

End time of this transfer execution.

`.google.protobuf.Timestamp end_time = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the endTime field is set.

### hasNotificationConfig()

```
public abstract boolean hasNotificationConfig()
```

Notification configuration.

`.google.storagetransfer.v1.NotificationConfig notification_config = 10;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the notificationConfig field is set.

### hasStartTime()

```
public abstract boolean hasStartTime()
```

Start time of this transfer execution.

`.google.protobuf.Timestamp start_time = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the startTime field is set.

### hasTransferSpec()

```
public abstract boolean hasTransferSpec()
```

Transfer specification.

`.google.storagetransfer.v1.TransferSpec transfer_spec = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the transferSpec field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
