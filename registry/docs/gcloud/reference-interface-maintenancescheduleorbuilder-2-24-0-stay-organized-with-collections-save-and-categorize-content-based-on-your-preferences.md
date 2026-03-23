-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface MaintenanceScheduleOrBuilder (2.24.0) Stay organized with collections Save and categorize content based on your preferences.

2.90.0 (latest) 2.88.0 2.86.0 2.85.0 2.83.0 2.81.0 2.79.0 2.78.0 2.77.0 2.76.0 2.75.0 2.73.0 2.71.0 2.70.0 2.67.0 2.66.0 2.65.0 2.63.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.52.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.5 2.5.0 2.4.1 2.3.0 2.2.0 2.1.1

```
public interface MaintenanceScheduleOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getCanReschedule() (deprecated)

```
public abstract boolean getCanReschedule()
```

**Deprecated.** _google.cloud.redis.v1beta1.MaintenanceSchedule.can\_reschedule is deprecated. See google/cloud/redis/v1beta1/cloud\_redis.proto;l=627_

If the scheduled maintenance can be rescheduled, default is true.

`bool can_reschedule = 3 [deprecated = true];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The canReschedule.

### getEndTime()

```
public abstract Timestamp getEndTime()
```

Output only. The end time of any upcoming scheduled maintenance for this instance.

`.google.protobuf.Timestamp end_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The endTime.

### getEndTimeOrBuilder()

```
public abstract TimestampOrBuilder getEndTimeOrBuilder()
```

Output only. The end time of any upcoming scheduled maintenance for this instance.

`.google.protobuf.Timestamp end_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getScheduleDeadlineTime()

```
public abstract Timestamp getScheduleDeadlineTime()
```

Output only. The deadline that the maintenance schedule start time can not go beyond, including reschedule.

`.google.protobuf.Timestamp schedule_deadline_time = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The scheduleDeadlineTime.

### getScheduleDeadlineTimeOrBuilder()

```
public abstract TimestampOrBuilder getScheduleDeadlineTimeOrBuilder()
```

Output only. The deadline that the maintenance schedule start time can not go beyond, including reschedule.

`.google.protobuf.Timestamp schedule_deadline_time = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getStartTime()

```
public abstract Timestamp getStartTime()
```

Output only. The start time of any upcoming scheduled maintenance for this instance.

`.google.protobuf.Timestamp start_time = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The startTime.

### getStartTimeOrBuilder()

```
public abstract TimestampOrBuilder getStartTimeOrBuilder()
```

Output only. The start time of any upcoming scheduled maintenance for this instance.

`.google.protobuf.Timestamp start_time = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### hasEndTime()

```
public abstract boolean hasEndTime()
```

Output only. The end time of any upcoming scheduled maintenance for this instance.

`.google.protobuf.Timestamp end_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the endTime field is set.

### hasScheduleDeadlineTime()

```
public abstract boolean hasScheduleDeadlineTime()
```

Output only. The deadline that the maintenance schedule start time can not go beyond, including reschedule.

`.google.protobuf.Timestamp schedule_deadline_time = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the scheduleDeadlineTime field is set.

### hasStartTime()

```
public abstract boolean hasStartTime()
```

Output only. The start time of any upcoming scheduled maintenance for this instance.

`.google.protobuf.Timestamp start_time = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the startTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
