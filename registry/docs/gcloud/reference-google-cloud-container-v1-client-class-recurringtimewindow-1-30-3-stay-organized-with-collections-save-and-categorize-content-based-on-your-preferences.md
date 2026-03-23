-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Container V1 Client - Class RecurringTimeWindow (1.30.3) Stay organized with collections Save and categorize content based on your preferences.

2.8.1 (latest) 2.8.0 2.7.0 2.6.1 2.5.0 2.4.0 2.3.4 2.2.1 2.1.0 2.0.0 1.33.0 1.32.0 1.31.0 1.30.3 1.24.0 1.23.0 1.22.0 1.21.1 1.20.0 1.19.0 1.18.0 1.17.1 1.16.0 1.15.0 1.14.0 1.13.1 1.12.1 1.10.3 1.9.1

Reference documentation and code samples for the Google Cloud Container V1 Client class RecurringTimeWindow.

Represents an arbitrary window of time that recurs.

Generated from protobuf message `google.container.v1.RecurringTimeWindow`

## Namespace

Google \\ Cloud \\ Container \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ window`

`[Google\Cloud\Container\V1\TimeWindow](/php/docs/reference/cloud-container/1.30.3/V1.TimeWindow)`  

The window of the first recurrence.

`↳ recurrence`

`string`  

An RRULE ([https://tools.ietf.org/html/rfc5545#section-3.8.5.3](https://tools.ietf.org/html/rfc5545#section-3.8.5.3)) for how this window reccurs. They go on for the span of time between the start and end time. For example, to have something repeat every weekday, you'd use: `FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR` To repeat some window daily (equivalent to the DailyMaintenanceWindow): `FREQ=DAILY` For the first weekend of every month: `FREQ=MONTHLY;BYSETPOS=1;BYDAY=SA,SU` This specifies how frequently the window starts. Eg, if you wanted to have a 9-5 UTC-4 window every weekday, you'd use something like: `start time = 2019-01-01T09:00:00-0400 end time = 2019-01-01T17:00:00-0400 recurrence = FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR` Windows can span multiple days. Eg, to make the window encompass every weekend from midnight Saturday till the last minute of Sunday UTC: `start time = 2019-01-05T00:00:00Z end time = 2019-01-07T23:59:00Z recurrence = FREQ=WEEKLY;BYDAY=SA` Note the start and end time's specific dates are largely arbitrary except to specify duration of the window and when it first starts. The FREQ values of HOURLY, MINUTELY, and SECONDLY are not supported.

### getWindow

The window of the first recurrence.

**Returns**

**Type**

**Description**

`[Google\Cloud\Container\V1\TimeWindow](/php/docs/reference/cloud-container/1.30.3/V1.TimeWindow)|null`

### hasWindow

### clearWindow

### setWindow

The window of the first recurrence.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Container\V1\TimeWindow](/php/docs/reference/cloud-container/1.30.3/V1.TimeWindow)`  

**Returns**

**Type**

**Description**

`$this`

### getRecurrence

An RRULE ([https://tools.ietf.org/html/rfc5545#section-3.8.5.3](https://tools.ietf.org/html/rfc5545#section-3.8.5.3)) for how this window reccurs. They go on for the span of time between the start and end time.

For example, to have something repeat every weekday, you'd use: `FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR` To repeat some window daily (equivalent to the DailyMaintenanceWindow): `FREQ=DAILY` For the first weekend of every month: `FREQ=MONTHLY;BYSETPOS=1;BYDAY=SA,SU` This specifies how frequently the window starts. Eg, if you wanted to have a 9-5 UTC-4 window every weekday, you'd use something like:

```
start time = 2019-01-01T09:00:00-0400
end time = 2019-01-01T17:00:00-0400
recurrence = FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR
```

Windows can span multiple days. Eg, to make the window encompass every weekend from midnight Saturday till the last minute of Sunday UTC:

```
start time = 2019-01-05T00:00:00Z
end time = 2019-01-07T23:59:00Z
recurrence = FREQ=WEEKLY;BYDAY=SA
```

Note the start and end time's specific dates are largely arbitrary except to specify duration of the window and when it first starts. The FREQ values of HOURLY, MINUTELY, and SECONDLY are not supported.

**Returns**

**Type**

**Description**

`string`

### setRecurrence

An RRULE ([https://tools.ietf.org/html/rfc5545#section-3.8.5.3](https://tools.ietf.org/html/rfc5545#section-3.8.5.3)) for how this window reccurs. They go on for the span of time between the start and end time.

For example, to have something repeat every weekday, you'd use: `FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR` To repeat some window daily (equivalent to the DailyMaintenanceWindow): `FREQ=DAILY` For the first weekend of every month: `FREQ=MONTHLY;BYSETPOS=1;BYDAY=SA,SU` This specifies how frequently the window starts. Eg, if you wanted to have a 9-5 UTC-4 window every weekday, you'd use something like:

```
start time = 2019-01-01T09:00:00-0400
end time = 2019-01-01T17:00:00-0400
recurrence = FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR
```

Windows can span multiple days. Eg, to make the window encompass every weekend from midnight Saturday till the last minute of Sunday UTC:

```
start time = 2019-01-05T00:00:00Z
end time = 2019-01-07T23:59:00Z
recurrence = FREQ=WEEKLY;BYDAY=SA
```

Note the start and end time's specific dates are largely arbitrary except to specify duration of the window and when it first starts. The FREQ values of HOURLY, MINUTELY, and SECONDLY are not supported.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
