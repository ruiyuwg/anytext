Checks whether the proxy mode is enabled for an ApsaraDB RDS for SQL Server instance.

## Scenario

The database proxy mode improves data security for an ApsaraDB RDS for SQL Server instance, but the performance of the database is affected. You can use the feature as required.

## Risk level

Default risk level: medium.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If the database proxy mode is enabled for the ApsaraDB RDS for SQL Server instance, the configuration is considered compliant.
-   If the database proxy feature is not enabled for the ApsaraDB RDS for SQL Server instance, the configuration is considered non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-12h-rba-oio).

## Rule details

**Item**

**Description**

Rule name

rds-connectionmode-safe-enabled

Rule ID

rds-connectionmode-safe-enabled

Tag

RDS, Connectionmode, SQLServer, and Safe

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ApsaraDB RDS instance

Input parameter

None

## Non-compliance remediation

Enable the database proxy mode for the ApsaraDB RDS for SQL Server instance. For more information, see [Enable the database proxy feature](/help/en/rds/apsaradb-rds-for-mysql/enable-and-configure-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance#task-2167178).
