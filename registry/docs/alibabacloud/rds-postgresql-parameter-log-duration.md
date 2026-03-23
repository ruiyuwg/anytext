Checks whether the log\_duration parameter of each ApsaraDB RDS for PostgreSQL database is set to on. If so, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to record the information about the time when each query is performed on an ApsaraDB RDS for PostgreSQL database. This helps you locate issues and meet security auditing requirements.

## Risk level

Default risk level: low.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the log\_duration parameter of each ApsaraDB RDS for PostgreSQL database is set to on, the evaluation result is Compliant.
-   If the log\_duration parameter of an ApsaraDB RDS for PostgreSQL database is set to off, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-2pv-17y-s6h).

## Rule details

**Item**

**Description**

Rule name

rds-postgresql-parameter-log-duration

Rule identifier

rds-postgresql-parameter-log-duration

Tag

RDS and PostgreSQL

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ApsaraDB RDS instance

Input parameter

None.

## Incompliance remediation

Modify the settings of an ApsaraDB RDS for PostgreSQL database. For more information, see [Configure instance parameters](/help/en/rds/apsaradb-rds-for-mysql/modify-the-parameters-of-an-apsaradb-rds-for-mysql-instance#concept-lfl-xmn-wdb).
