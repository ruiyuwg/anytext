-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface MaintenanceScheduleOrBuilder (0.16.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [0.16.0 (latest)](/java/docs/reference/google-cloudevent-types/latest/com.google.events.cloud.redis.v1.MaintenanceScheduleOrBuilder)
-   [0.15.0](/java/docs/reference/google-cloudevent-types/0.15.0/com.google.events.cloud.redis.v1.MaintenanceScheduleOrBuilder)
-   [0.14.1](/java/docs/reference/google-cloudevent-types/0.14.1/com.google.events.cloud.redis.v1.MaintenanceScheduleOrBuilder)

```
public interface MaintenanceScheduleOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getCanReschedule()

```
public abstract boolean getCanReschedule()
```

If the scheduled maintenance can be rescheduled, default is true.

`bool can_reschedule = 3;`

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

Output only. The end time of any upcoming scheduled maintenance for this instance.

`.google.protobuf.Timestamp end_time = 2;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getScheduleDeadlineTime()

```
public abstract Timestamp getScheduleDeadlineTime()
```

Output only. The deadline that the maintenance schedule start time can not go beyond, including reschedule.

`.google.protobuf.Timestamp schedule_deadline_time = 5;`

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

`.google.protobuf.Timestamp schedule_deadline_time = 5;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getStartTime()

```
public abstract Timestamp getStartTime()
```

Output only. The start time of any upcoming scheduled maintenance for this instance.

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

Output only. The start time of any upcoming scheduled maintenance for this instance.

`.google.protobuf.Timestamp start_time = 1;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### hasEndTime()

```
public abstract boolean hasEndTime()
```

Output only. The end time of any upcoming scheduled maintenance for this instance.

`.google.protobuf.Timestamp end_time = 2;`

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

`.google.protobuf.Timestamp schedule_deadline_time = 5;`

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

`.google.protobuf.Timestamp start_time = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the startTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
