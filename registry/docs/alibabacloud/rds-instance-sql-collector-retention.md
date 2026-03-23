Checks whether the SQL explorer and audit feature is enabled for each ApsaraDB RDS for MySQL instance and whether the number of days for which SQL audit logs can be retained is greater than or equal to a specified value. If so, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to retain SQL audit logs for a specified number of days. This helps you perform auditing and performance diagnostics on resources and meet legal and regulatory requirements for the number of days for which SQL audit logs can be retained.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the SQL explorer and audit feature is enabled for each ApsaraDB RDS for MySQL instance and the number of days for which SQL audit logs can be retained is greater than or equal to a specified value, the evaluation result is Compliant.
-   If the SQL explorer and audit feature is disabled for an ApsaraDB RDS for MySQL instance and the number of days for which SQL audit logs can be retained is less than a specified value, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-rsu-m2q-tsk).

## Rule details

 

Item

Description

Rule name

rds-instance-sql-collector-retention

Rule identifier

rds-instance-sql-collector-retention

Tag

RDS, SQLAuditing, Retenion, and AuditBaseline

Automatic remediation

Supported

Trigger type

Configuration change

Supported resource type

ApsaraDB RDS instance

Input parameter

`days`. Default value: 180. Unit: days.

**Note** Separate multiple values with commas (,).

## Incompliance remediation

Enable the SQL explorer and audit feature for an ApsaraDB RDS for MySQL instance and specify an appropriate number of days for which you want to retain SQL audit logs. For more information, see [Use the SQL Explorer feature on an ApsaraDB RDS for MySQL instance](/help/en/rds/use-sql-explorer-features-on-apsaradb-rds-for-mysql-instances#task-msp-gz1-mfb "This topic describes how to use the SQL Explorer feature on an ApsaraDB RDS for MySQL instance. The SQL Audit feature is upgraded to the SQL Explorer feature to provide more value-added capabilities such as security audit and performance diagnosis at lower costs. The upgrade does not interrupt the workloads on your RDS instance.").
