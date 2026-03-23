Checks whether the number of CPU cores for an ApsaraDB RDS instance is greater than or equal to a specified value.

## Scenario

Make sure that the number of CPU cores for an ApsaraDB RDS instance meets your business expansion requirements. Otherwise, your business system may be interrupted.

## Risk level

Default risk level: low.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If the number of CPU cores for the ApsaraDB RDS instance is greater than or equal to the specified value, the configuration is considered compliant.
-   If the number of CPU cores for the ApsaraDB RDS instance is less than the specified value, the configuration is considered non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-12h-rba-oio).

## Rule details

**Item**

**Description**

Rule name

rds-cpu-min-count-limit

Rule ID

rds-cpu-min-count-limit

Tag

RDS and CPU

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ApsaraDB RDS instance

Input parameter

`cpuCount`

## Non-compliance remediation

Change the specifications of the ApsaraDB RDS instance. For more information, see [Change instance specifications](/help/en/rds/apsaradb-rds-for-mysql/change-the-specifications-of-an-apsaradb-rds-for-mysql-instance#concept-efl-pln-wdb).
