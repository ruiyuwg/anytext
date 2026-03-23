Checks whether the edition of an ApsaraDB RDS instance is High-availability.

## Scenario

If a primary instance fails in an ApsaraDB RDS instance of High-availability Edition, applications automatically switch to a standby instance. This improves system stability and prevents business system interruption.

## Risk level

Default risk level: high.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If the edition of the ApsaraDB RDS instance is High-availability, the configuration is considered compliant.
-   If the edition of the ApsaraDB RDS instance is Basic, the configuration is considered non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-12h-rba-oio).

## Rule details

**Item**

**Description**

Rule name

rds-high-availability-category

Rule ID

rds-high-availability-category

Tag

RDS

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ApsaraDB RDS instance

Input parameter

None

## Non-compliance remediation

Upgrade the ApsaraDB RDS instance from Basic Edition to High-availability Edition. For more information, see [Upgrade an ApsaraDB RDS for SQL Server instance from Basic Edition to High-availability Edition](/help/en/rds/upgrade-from-basic-edition-to-high-availability-edition#concept-1375103) or [Change instance specifications](/help/en/rds/apsaradb-rds-for-mysql/change-the-specifications-of-an-apsaradb-rds-for-mysql-instance#concept-efl-pln-wdb).
