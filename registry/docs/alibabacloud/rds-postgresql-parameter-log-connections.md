Checks whether the log\_connections parameter of each ApsaraDB RDS for PostgreSQL database is set to on. If so, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to record the information about the connections to servers. This helps you locate issues and meet security auditing requirements.

## Risk level

Default risk level: low.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the log\_connections parameter of each ApsaraDB RDS for PostgreSQL database is set to on, the evaluation result is Compliant.
-   If the log\_connections parameter of an ApsaraDB RDS for PostgreSQL database is set to off, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-4n2-c2u-05n).

## Rule details

**Item**

**Description**

Rule name

rds-postgresql-parameter-log-connections

Rule identifier

rds-postgresql-parameter-log-connections

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
