Checks whether the maintenance period of each ApsaraDB RDS instance matches one of the specified time ranges. If so, the evaluation result is Compliant.

## Scenarios

To prevent your business from being affected during a maintenance period, we recommend that you set the maintenance period to the off-peak hours of your business.

## Risk level

Default risk level: medium.

When you configure this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the maintenance period of each ApsaraDB RDS instance matches one of the specified time ranges, the evaluation result is Compliant.
-   If the maintenance period of an ApsaraDB RDS instance does not match the specified time ranges, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-fua-geh-ld6).

## Rule details

**Item**

**Feature**

Rule name

rds-instance-maintain-time-check

Rule identifier

rds-instance-maintain-time-check

Tag

RDS and Instance

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ApsaraDB RDS instances

Input parameter

`maintainTimes`. Default values: `02:22-06:00` and `06:00-10:00`.

**Note** Separate multiple values with commas (,).

## Incompliance remediation

Set the maintenance period of an ApsaraDB RDS instance to one of the specified time ranges. For more information, see [Configure a maintenance window](/help/en/rds/apsaradb-rds-for-mysql/set-the-maintenance-window-of-an-apsaradb-rds-for-mysql-instance#concept-xqk-jcj-wdb).
