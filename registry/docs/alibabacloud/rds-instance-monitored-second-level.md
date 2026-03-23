Checks whether the monitoring frequency that is specified for each ApsaraDB RDS instance is less than or equal to a specified value. If so, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to specify an appropriate monitoring frequency. This way, you can identify events that occur on database instances and obtain the status of each database instance at the earliest opportunity.

## Risk level

Default risk level: low.

When you configure this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the monitoring frequency that is specified for an ApsaraDB RDS instance is less than or equal to a specified value, the evaluation result is Compliant.
-   If the monitoring frequency that is specified for an ApsaraDB RDS instance is greater than a specified value, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-n5u-xse-ylr).

## Rule details

**Item**

**Description**

Rule name

rds-instance-monitored-second-level

Rule identifier

rds-instance-monitored-second-level

Tag

RDS and Instance

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Interval of 24 hours

Supported resource type

ApsaraDB RDS instances

Input parameter

`Period`. Default value: 5. Unit: seconds.

## Incompliance remediation

Set the monitoring frequency of an ApsaraDB RDS to a value that is less than or equal to a specified value. For more information, see [Configure a monitoring frequency on the monitoring page (old version)](/help/en/rds/apsaradb-rds-for-mysql/set-the-monitoring-frequency-of-an-apsaradb-rds-for-mysql-instance#concept-ug4-x5p-wdb).
