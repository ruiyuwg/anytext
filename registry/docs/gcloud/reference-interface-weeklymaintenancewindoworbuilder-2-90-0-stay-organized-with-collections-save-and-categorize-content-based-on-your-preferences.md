-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface WeeklyMaintenanceWindowOrBuilder (2.90.0) Stay organized with collections Save and categorize content based on your preferences.

2.90.0 (latest) 2.88.0 2.86.0 2.85.0 2.83.0 2.81.0 2.79.0 2.78.0 2.77.0 2.76.0 2.75.0 2.73.0 2.71.0 2.70.0 2.67.0 2.66.0 2.65.0 2.63.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.52.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.5 2.5.0 2.4.1 2.3.0 2.2.0 2.1.1

```
public interface WeeklyMaintenanceWindowOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getDay()

```
public abstract DayOfWeek getDay()
```

Required. The day of week that maintenance updates occur.

`.google.type.DayOfWeek day = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`com.google.type.DayOfWeek`

The day.

### getDayValue()

```
public abstract int getDayValue()
```

Required. The day of week that maintenance updates occur.

`.google.type.DayOfWeek day = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for day.

### getDuration()

```
public abstract Duration getDuration()
```

Output only. Duration of the maintenance window. The current window is fixed at 1 hour.

`.google.protobuf.Duration duration = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`

The duration.

### getDurationOrBuilder()

```
public abstract DurationOrBuilder getDurationOrBuilder()
```

Output only. Duration of the maintenance window. The current window is fixed at 1 hour.

`.google.protobuf.Duration duration = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)`

### getStartTime()

```
public abstract TimeOfDay getStartTime()
```

Required. Start time of the window in UTC time.

`.google.type.TimeOfDay start_time = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`com.google.type.TimeOfDay`

The startTime.

### getStartTimeOrBuilder()

```
public abstract TimeOfDayOrBuilder getStartTimeOrBuilder()
```

Required. Start time of the window in UTC time.

`.google.type.TimeOfDay start_time = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`com.google.type.TimeOfDayOrBuilder`

### hasDuration()

```
public abstract boolean hasDuration()
```

Output only. Duration of the maintenance window. The current window is fixed at 1 hour.

`.google.protobuf.Duration duration = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the duration field is set.

### hasStartTime()

```
public abstract boolean hasStartTime()
```

Required. Start time of the window in UTC time.

`.google.type.TimeOfDay start_time = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the startTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
