Checks whether the automatic backup period of each ApsaraDB for Redis instance matches one of the specified time ranges. If so, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to specify an appropriate automatic backup period for a Redis instance. This prevents your business from being affected when the specified automatic backup period overlaps with the peak hours of your business.

## Risk level

Default risk level: medium.

When you configure this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the automatic backup period of each Redis instance matches one of the specified time ranges, the evaluation result is Compliant.
-   If the automatic backup period of a Redis instance does not match the specified time ranges, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-4sk-swt-d86).

## Rule details

Item

Description

Rule name

redis-instance-backup-time-check

Rule identifier

redis-instance-backup-time-check

Tag

Redis and Instance

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Interval of 24 hours

Supported resource type

Redis instances

Input parameter

`BackupTime`. Default values: `04:00-05:00` and `05:00-06:00`.

**Note** Separate multiple values with commas (,).

## Incompliance remediation

Set the automatic backup period of a Redis instance to one of the specified time ranges. For more information, see [Automatic or manual backup](/help/en/redis/user-guide/automatic-or-manual-backup#task-2066397).
