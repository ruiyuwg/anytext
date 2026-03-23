Checks whether the storage size of an ApsaraDB RDS instance is greater than or equal to a specified value.

## Scenario

Make sure that the storage size of an ApsaraDB RDS instance meets your business expansion requirements. Otherwise, your business system may be interrupted.

## Risk level

Default risk level: low.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If the storage size of the ApsaraDB RDS instance is greater than or equal to the specified value, the configuration is considered compliant.
-   If the storage size of the ApsaraDB RDS instance is less than the specified value, the configuration is considered compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-12h-rba-oio).

## Rule details

**Item**

**Description**

Rule name

rds-instance-storage-min-size-limit

Rule ID

rds-instance-storage-min-size-limit

Tag

RDS

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ApsaraDB RDS instance

Input parameter

`storageSize`

## Non-compliance remediation

Change the specifications of the ApsaraDB RDS instance. For more information, see [Change instance specifications](/help/en/rds/apsaradb-rds-for-mysql/change-the-specifications-of-an-apsaradb-rds-for-mysql-instance#concept-efl-pln-wdb).
