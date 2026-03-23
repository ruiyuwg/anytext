-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface PatchDeployments.RecurringScheduleOrBuilder (2.55.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.6 2.4.3 2.3.2

```
public static interface PatchDeployments.RecurringScheduleOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getEndTime()

```
public abstract Timestamp getEndTime()
```

Optional. The end time at which a recurring patch deployment schedule is no longer active.

`.google.protobuf.Timestamp end_time = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The endTime.

### getEndTimeOrBuilder()

```
public abstract TimestampOrBuilder getEndTimeOrBuilder()
```

Optional. The end time at which a recurring patch deployment schedule is no longer active.

`.google.protobuf.Timestamp end_time = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getFrequency()

```
public abstract PatchDeployments.RecurringSchedule.Frequency getFrequency()
```

Required. The frequency unit of this recurring schedule.

`.google.cloud.osconfig.v1beta.RecurringSchedule.Frequency frequency = 5 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[PatchDeployments.RecurringSchedule.Frequency](/java/docs/reference/google-cloud-os-config/2.55.0/com.google.cloud.osconfig.v1beta.PatchDeployments.RecurringSchedule.Frequency)`

The frequency.

### getFrequencyValue()

```
public abstract int getFrequencyValue()
```

Required. The frequency unit of this recurring schedule.

`.google.cloud.osconfig.v1beta.RecurringSchedule.Frequency frequency = 5 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for frequency.

### getLastExecuteTime()

```
public abstract Timestamp getLastExecuteTime()
```

Output only. The time the last patch job ran successfully.

`.google.protobuf.Timestamp last_execute_time = 9 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The lastExecuteTime.

### getLastExecuteTimeOrBuilder()

```
public abstract TimestampOrBuilder getLastExecuteTimeOrBuilder()
```

Output only. The time the last patch job ran successfully.

`.google.protobuf.Timestamp last_execute_time = 9 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getMonthly()

```
public abstract PatchDeployments.MonthlySchedule getMonthly()
```

Required. Schedule with monthly executions.

`.google.cloud.osconfig.v1beta.MonthlySchedule monthly = 7 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[PatchDeployments.MonthlySchedule](/java/docs/reference/google-cloud-os-config/2.55.0/com.google.cloud.osconfig.v1beta.PatchDeployments.MonthlySchedule)`

The monthly.

### getMonthlyOrBuilder()

```
public abstract PatchDeployments.MonthlyScheduleOrBuilder getMonthlyOrBuilder()
```

Required. Schedule with monthly executions.

`.google.cloud.osconfig.v1beta.MonthlySchedule monthly = 7 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[PatchDeployments.MonthlyScheduleOrBuilder](/java/docs/reference/google-cloud-os-config/2.55.0/com.google.cloud.osconfig.v1beta.PatchDeployments.MonthlyScheduleOrBuilder)`

### getNextExecuteTime()

```
public abstract Timestamp getNextExecuteTime()
```

Output only. The time the next patch job is scheduled to run.

`.google.protobuf.Timestamp next_execute_time = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The nextExecuteTime.

### getNextExecuteTimeOrBuilder()

```
public abstract TimestampOrBuilder getNextExecuteTimeOrBuilder()
```

Output only. The time the next patch job is scheduled to run.

`.google.protobuf.Timestamp next_execute_time = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getScheduleConfigCase()

```
public abstract PatchDeployments.RecurringSchedule.ScheduleConfigCase getScheduleConfigCase()
```

**Returns**

**Type**

**Description**

`[PatchDeployments.RecurringSchedule.ScheduleConfigCase](/java/docs/reference/google-cloud-os-config/2.55.0/com.google.cloud.osconfig.v1beta.PatchDeployments.RecurringSchedule.ScheduleConfigCase)`

### getStartTime()

```
public abstract Timestamp getStartTime()
```

Optional. The time that the recurring schedule becomes effective. Defaults to `create_time` of the patch deployment.

`.google.protobuf.Timestamp start_time = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The startTime.

### getStartTimeOrBuilder()

```
public abstract TimestampOrBuilder getStartTimeOrBuilder()
```

Optional. The time that the recurring schedule becomes effective. Defaults to `create_time` of the patch deployment.

`.google.protobuf.Timestamp start_time = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getTimeOfDay()

```
public abstract TimeOfDay getTimeOfDay()
```

Required. Time of the day to run a recurring deployment.

`.google.type.TimeOfDay time_of_day = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`com.google.type.TimeOfDay`

The timeOfDay.

### getTimeOfDayOrBuilder()

```
public abstract TimeOfDayOrBuilder getTimeOfDayOrBuilder()
```

Required. Time of the day to run a recurring deployment.

`.google.type.TimeOfDay time_of_day = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`com.google.type.TimeOfDayOrBuilder`

### getTimeZone()

```
public abstract TimeZone getTimeZone()
```

Required. Defines the time zone that `time_of_day` is relative to. The rules for daylight saving time are determined by the chosen time zone.

`.google.type.TimeZone time_zone = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`com.google.type.TimeZone`

The timeZone.

### getTimeZoneOrBuilder()

```
public abstract TimeZoneOrBuilder getTimeZoneOrBuilder()
```

Required. Defines the time zone that `time_of_day` is relative to. The rules for daylight saving time are determined by the chosen time zone.

`.google.type.TimeZone time_zone = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`com.google.type.TimeZoneOrBuilder`

### getWeekly()

```
public abstract PatchDeployments.WeeklySchedule getWeekly()
```

Required. Schedule with weekly executions.

`.google.cloud.osconfig.v1beta.WeeklySchedule weekly = 6 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[PatchDeployments.WeeklySchedule](/java/docs/reference/google-cloud-os-config/2.55.0/com.google.cloud.osconfig.v1beta.PatchDeployments.WeeklySchedule)`

The weekly.

### getWeeklyOrBuilder()

```
public abstract PatchDeployments.WeeklyScheduleOrBuilder getWeeklyOrBuilder()
```

Required. Schedule with weekly executions.

`.google.cloud.osconfig.v1beta.WeeklySchedule weekly = 6 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[PatchDeployments.WeeklyScheduleOrBuilder](/java/docs/reference/google-cloud-os-config/2.55.0/com.google.cloud.osconfig.v1beta.PatchDeployments.WeeklyScheduleOrBuilder)`

### hasEndTime()

```
public abstract boolean hasEndTime()
```

Optional. The end time at which a recurring patch deployment schedule is no longer active.

`.google.protobuf.Timestamp end_time = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the endTime field is set.

### hasLastExecuteTime()

```
public abstract boolean hasLastExecuteTime()
```

Output only. The time the last patch job ran successfully.

`.google.protobuf.Timestamp last_execute_time = 9 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the lastExecuteTime field is set.

### hasMonthly()

```
public abstract boolean hasMonthly()
```

Required. Schedule with monthly executions.

`.google.cloud.osconfig.v1beta.MonthlySchedule monthly = 7 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the monthly field is set.

### hasNextExecuteTime()

```
public abstract boolean hasNextExecuteTime()
```

Output only. The time the next patch job is scheduled to run.

`.google.protobuf.Timestamp next_execute_time = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the nextExecuteTime field is set.

### hasStartTime()

```
public abstract boolean hasStartTime()
```

Optional. The time that the recurring schedule becomes effective. Defaults to `create_time` of the patch deployment.

`.google.protobuf.Timestamp start_time = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the startTime field is set.

### hasTimeOfDay()

```
public abstract boolean hasTimeOfDay()
```

Required. Time of the day to run a recurring deployment.

`.google.type.TimeOfDay time_of_day = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the timeOfDay field is set.

### hasTimeZone()

```
public abstract boolean hasTimeZone()
```

Required. Defines the time zone that `time_of_day` is relative to. The rules for daylight saving time are determined by the chosen time zone.

`.google.type.TimeZone time_zone = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the timeZone field is set.

### hasWeekly()

```
public abstract boolean hasWeekly()
```

Required. Schedule with weekly executions.

`.google.cloud.osconfig.v1beta.WeeklySchedule weekly = 6 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the weekly field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
