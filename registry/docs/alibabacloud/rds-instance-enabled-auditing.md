Checks whether the SQL explorer and audit feature is enabled. If so, the evaluation result is Compliant.

## Scenarios

This rule applies when need to record the operations that are performed by executing all Data Query Language (DQL) statements, Data Manipulation Language (DML) statements, and Data Definition Language (DDL) statements. This way, you can perform security auditing and performance diagnostics on databases.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the SQL explorer and audit feature is enabled for each ApsaraDB RDS instance, the evaluation result is Compliant.
-   If the SQL explorer and audit feature is disabled for an ApsaraDB RDS instance, the evaluation result is Incompliant.

## Rule details

**Item**

**Description**

Rule name

rds-instance-enabled-auditing

Rule identifier

rds-instance-enabled-auditing

Tag

RDS, SQLAuditing, and AuditBaseline

Automatic remediation

Supported

Trigger type

Configuration change

Supported resource type

ApsaraDB RDS instance

Input parameter

None.
